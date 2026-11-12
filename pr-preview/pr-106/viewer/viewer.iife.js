var BlueprintsViewerBundle=(()=>{var Gh=Object.defineProperty;var yv=Object.getOwnPropertyDescriptor;var _v=Object.getOwnPropertyNames;var vv=Object.prototype.hasOwnProperty;var bv=(n,e)=>{for(var t in e)Gh(n,t,{get:e[t],enumerable:!0})},Mv=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of _v(e))!vv.call(n,r)&&r!==t&&Gh(n,r,{get:()=>e[r],enumerable:!(i=yv(e,r))||i.enumerable});return n};var Sv=n=>Mv(Gh({},"__esModule",{value:!0}),n);var pC={};bv(pC,{mountViewer:()=>dC});var Jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pg=0,If=1,mg=2;var Wa=1,gg=2,Io=3,ni=0,Sn=1,Dt=2,fi=0,Xi=1,Lf=2,Df=3,Nf=4,Gc=5;var Ri=100,xg=101,yg=102,_g=103,vg=104,Xa=200,es=201,bg=202,Mg=203,qa=204,Lo=205,Sg=206,$a=207,wg=208,Eg=209,Tg=210,Ag=211,Rg=212,Cg=213,Pg=214,_c=0,vc=1,bc=2,go=3,Mc=4,Sc=5,wc=6,Ec=7,Wc=0,Ig=1,Lg=2,di=0,Of=1,Uf=2,Ff=3,Do=4,Bf=5,kf=6,zf=7,yf="attached",Dg="detached",Hf=300,Ts=301,No=302,Xc=303,qc=304,Ei=1e3,ci=1001,xo=1002,$t=1003,$c=1004;var As=1005;var Yt=1006,Oo=1007;var pi=1008;var Nn=1009,Vf=1010,Gf=1011,Uo=1012,Yc=1013,Ci=1014,Wn=1015,Zn=1016,Zc=1017,Kc=1018,Rs=1020,Wf=35902,Xf=35899,qf=1021,$f=1022,wn=1023,vr=1026,Pr=1027,jc=1028,Jc=1029,ts=1030,Qc=1031;var eu=1033,Ya=33776,Za=33777,Ka=33778,ja=33779,tu=35840,nu=35841,iu=35842,ru=35843,su=36196,ou=37492,au=37496,lu=37488,cu=37489,Ja=37490,uu=37491,hu=37808,fu=37809,du=37810,pu=37811,mu=37812,gu=37813,xu=37814,yu=37815,_u=37816,vu=37817,bu=37818,Mu=37819,Su=37820,wu=37821,Eu=36492,Tu=36494,Au=36495,Ru=36283,Cu=36284,Qa=36285,Pu=36286;var vs=2300,bs=2301,xc=2302,_f=2303,vf=2400,bf=2401,Mf=2402,Ng=2500;var Yf=0,el=1,Fo=2,Og=3200;var tl=0,Ug=1,Pi="",Tt="srgb",Vn="srgb-linear",ga="linear",It="srgb";var yc=7680;var Fg=519,Bg=512,kg=513,zg=514,Zf=515,Hg=516,Vg=517,Kf=518,jf=519,Jf=35044;var Qf="300 es",ui=2e3,yo=2001;function wv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ev(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gg(){let n=_o("canvas");return n.style.display="block",n}var Mm={},vo=null;function xa(...n){let e="THREE."+n.shift();vo?vo("log",e,...n):console.log(e,...n)}function Wg(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function it(...n){n=Wg(n);let e="THREE."+n.shift();if(vo)vo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=Wg(n);let e="THREE."+n.shift();if(vo)vo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function _s(...n){let e=n.join(" ");e in Mm||(Mm[e]=!0,it(...n))}function Xg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var qg={[_c]:_c,[bc]:wc,[Mc]:Mc,[go]:Sc,[vc]:vc,[wc]:bc,[Ec]:Ec,[Sc]:go},Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sm=1234567,po=Math.PI/180,Ms=180/Math.PI;function qi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function ed(n,e){return(n%e+e)%e}function Tv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Av(n,e,t){return n!==e?(t-n)/(e-n):0}function ma(n,e,t){return(1-t)*n+t*e}function Rv(n,e,t,i){return ma(n,e,1-Math.exp(-t*i))}function Cv(n,e=1){return e-Math.abs(ed(n,e*2)-e)}function Pv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Iv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Lv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Dv(n,e){return n+Math.random()*(e-n)}function Nv(n){return n*(.5-Math.random())}function Ov(n){n!==void 0&&(Sm=n);let e=Sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uv(n){return n*po}function Fv(n){return n*Ms}function Bv(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function kv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function td(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zv(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Iu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nd(n,e){if(e.constructor===Float32Array)return n;let t=Iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function id(n,e){if(e.constructor===Float32Array)return n;let t=Iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var ns={DEG2RAD:po,RAD2DEG:Ms,generateUUID:qi,clamp:ft,euclideanModulo:ed,mapLinear:Tv,inverseLerp:Av,lerp:ma,damp:Rv,pingpong:Cv,smoothstep:Pv,smootherstep:Iv,randInt:Lv,randFloat:Dv,randFloatSpread:Nv,seededRandom:Ov,degToRad:Uv,radToDeg:Fv,isPowerOfTwo:Bv,ceilPowerOfTwo:kv,floorPowerOfTwo:td,setQuaternionFromProperEuler:zv,normalize:id,denormalize:nd},Ze=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(h!==x||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*x;m<0&&(f=-f,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),S=Math.sin(b);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+x*a;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wh=new I,wm=new Zt,ht=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=r[0],m=r[3],p=r[6],b=r[1],S=r[4],v=r[7],M=r[2],w=r[5],y=r[8];return s[0]=o*x+a*b+l*M,s[3]=o*m+a*S+l*w,s[6]=o*p+a*v+l*y,s[1]=c*x+u*b+h*M,s[4]=c*m+u*S+h*w,s[7]=c*p+u*v+h*y,s[2]=f*x+d*b+g*M,s[5]=f*m+d*S+g*w,s[8]=f*p+d*v+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xh.makeScale(e,t)),this}rotate(e){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xh.makeRotation(-e)),this}translate(e,t){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xh=new ht,Em=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hv(){let n={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===It&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(r.r=mo(r.r),r.g=mo(r.g),r.b=mo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?ga:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vn]:{primaries:e,whitePoint:i,transfer:ga,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:It,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}var xt=Hv();function _r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $s,Tc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$s===void 0&&($s=_o("canvas")),$s.width=e.width,$s.height=e.height;let r=$s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_o("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_r(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_r(t[i]/255)*255):t[i]=_r(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vv=0,bo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qh(r[o].image)):s.push(qh(r[o]))}else s=qh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function qh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var Gv=0,$h=new I,hn=class n extends Ti{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ci,r=ci,s=Yt,o=pi,a=wn,l=Nn,c=n.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=qi(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($h).x}get height(){return this.source.getSize($h).y}get depth(){return this.source.getSize($h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Hf;hn.DEFAULT_ANISOTROPY=1;var wt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(d+1)/2,M=(p+1)/2,w=(u+f)/4,y=(h+x)/4,E=(g+m)/4;return S>v&&S>M?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=y/i):v>M?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=E/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=y/s,r=E/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends Ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new hn({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new bo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Ac{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ya=class extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rc=class extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Ys.setFromMatrixColumn(e,0).length(),s=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wv,e,Xv)}lookAt(e,t,i){let r=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),zr.crossVectors(i,Qn),zr.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),zr.crossVectors(i,Qn)),zr.normalize(),kl.crossVectors(Qn,zr),r[0]=zr.x,r[4]=kl.x,r[8]=Qn.x,r[1]=zr.y,r[5]=kl.y,r[9]=Qn.y,r[2]=zr.z,r[6]=kl.z,r[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],S=i[7],v=i[11],M=i[15],w=r[0],y=r[4],E=r[8],L=r[12],D=r[1],F=r[5],G=r[9],k=r[13],N=r[2],W=r[6],Q=r[10],$=r[14],ye=r[3],ee=r[7],z=r[11],j=r[15];return s[0]=o*w+a*D+l*N+c*ye,s[4]=o*y+a*F+l*W+c*ee,s[8]=o*E+a*G+l*Q+c*z,s[12]=o*L+a*k+l*$+c*j,s[1]=u*w+h*D+f*N+d*ye,s[5]=u*y+h*F+f*W+d*ee,s[9]=u*E+h*G+f*Q+d*z,s[13]=u*L+h*k+f*$+d*j,s[2]=g*w+x*D+m*N+p*ye,s[6]=g*y+x*F+m*W+p*ee,s[10]=g*E+x*G+m*Q+p*z,s[14]=g*L+x*k+m*$+p*j,s[3]=b*w+S*D+v*N+M*ye,s[7]=b*y+S*F+v*W+M*ee,s[11]=b*E+S*G+v*Q+M*z,s[15]=b*L+S*k+v*$+M*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],b=l*d-c*f,S=a*d-c*h,v=a*f-l*h,M=o*d-c*u,w=o*f-l*u,y=o*h-a*u;return t*(x*b-m*S+p*v)-i*(g*b-m*M+p*w)+r*(g*S-x*M+p*y)-s*(g*v-x*w+m*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=t*a-i*o,S=t*l-r*o,v=t*c-s*o,M=i*l-r*a,w=i*c-s*a,y=r*c-s*l,E=u*x-h*g,L=u*m-f*g,D=u*p-d*g,F=h*m-f*x,G=h*p-d*x,k=f*p-d*m,N=b*k-S*G+v*F+M*D-w*L+y*E;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/N;return e[0]=(a*k-l*G+c*F)*W,e[1]=(r*G-i*k-s*F)*W,e[2]=(x*y-m*w+p*M)*W,e[3]=(f*w-h*y-d*M)*W,e[4]=(l*D-o*k-c*L)*W,e[5]=(t*k-r*D+s*L)*W,e[6]=(m*v-g*y-p*S)*W,e[7]=(u*y-f*v+d*S)*W,e[8]=(o*G-a*D+c*E)*W,e[9]=(i*D-t*G-s*E)*W,e[10]=(g*w-x*v+p*b)*W,e[11]=(h*v-u*w-d*b)*W,e[12]=(a*L-o*F-l*E)*W,e[13]=(t*F-i*L+r*E)*W,e[14]=(x*S-g*M-m*b)*W,e[15]=(u*M-h*S+f*b)*W,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,x=o*u,m=o*h,p=a*h,b=l*c,S=l*u,v=l*h,M=i.x,w=i.y,y=i.z;return r[0]=(1-(x+p))*M,r[1]=(d+v)*M,r[2]=(g-S)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+p))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(g+S)*y,r[9]=(m-b)*y,r[10]=(1-(f+x))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Ys.set(r[0],r[1],r[2]).length(),a=Ys.set(r[4],r[5],r[6]).length(),l=Ys.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Mi.copy(this);let c=1/o,u=1/a,h=1/l;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,t.setFromRotationMatrix(Mi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=ui,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===ui)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===yo)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ui,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===ui)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===yo)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ys=new I,Mi=new lt,Wv=new I(0,0,0),Xv=new I(1,1,1),zr=new I,kl=new I,Qn=new I,Am=new lt,Rm=new Zt,ki=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Am,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rm.setFromEuler(this),this.setFromQuaternion(Rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qv=0,Cm=new I,Zs=new Zt,dr=new lt,zl=new I,ia=new I,$v=new I,Yv=new Zt,Pm=new I(1,0,0),Im=new I(0,1,0),Lm=new I(0,0,1),Dm={type:"added"},Zv={type:"removed"},Ks={type:"childadded",child:null},Yh={type:"childremoved",child:null},Wt=class n extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new ki,i=new Zt,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new ht}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Pm,e)}rotateY(e){return this.rotateOnAxis(Im,e)}rotateZ(e){return this.rotateOnAxis(Lm,e)}translateOnAxis(e,t){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pm,e)}translateY(e){return this.translateOnAxis(Im,e)}translateZ(e){return this.translateOnAxis(Lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zl.copy(e):zl.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(ia,zl,this.up):dr.lookAt(zl,ia,this.up),this.quaternion.setFromRotationMatrix(dr),r&&(dr.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(dr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dm),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zv),Yh.child=e,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dm),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,Yv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new I(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kv={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Zh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=ed(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Zh(o,s,e+1/3),this.g=Zh(o,s,e),this.b=Zh(o,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=$g[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return xt.workingToColorSpace(Pn.copy(this),e),Math.round(ft(Pn.r*255,0,255))*65536+Math.round(ft(Pn.g*255,0,255))*256+Math.round(ft(Pn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Pn.copy(this),t);let i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Tt){xt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,i=Pn.g,r=Pn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Hl);let i=ma(Hr.h,Hl.h,t),r=ma(Hr.s,Hl.s,t),s=ma(Hr.l,Hl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Je;Je.NAMES=$g;var Gn=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Si=new I,pr=new I,Kh=new I,mr=new I,js=new I,Js=new I,Nm=new I,jh=new I,Jh=new I,Qh=new I,ef=new wt,tf=new wt,nf=new wt,Fi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Si.subVectors(e,t),r.cross(Si);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Si.subVectors(r,t),pr.subVectors(i,t),Kh.subVectors(e,t);let o=Si.dot(Si),a=Si.dot(pr),l=Si.dot(Kh),c=pr.dot(pr),u=pr.dot(Kh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mr.x),l.addScaledVector(o,mr.y),l.addScaledVector(a,mr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ef.setScalar(0),tf.setScalar(0),nf.setScalar(0),ef.fromBufferAttribute(e,t),tf.fromBufferAttribute(e,i),nf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ef,s.x),o.addScaledVector(tf,s.y),o.addScaledVector(nf,s.z),o}static isFrontFacing(e,t,i,r){return Si.subVectors(i,t),pr.subVectors(e,t),Si.cross(pr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Si.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;js.subVectors(r,i),Js.subVectors(s,i),jh.subVectors(e,i);let l=js.dot(jh),c=Js.dot(jh);if(l<=0&&c<=0)return t.copy(i);Jh.subVectors(e,r);let u=js.dot(Jh),h=Js.dot(Jh);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(js,o);Qh.subVectors(e,s);let d=js.dot(Qh),g=Js.dot(Qh);if(g>=0&&d<=g)return t.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Js,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Nm.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Nm,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(js,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wi):wi.fromBufferAttribute(s,o),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vl.copy(i.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Gl.subVectors(this.max,ra),Qs.subVectors(e.a,ra),eo.subVectors(e.b,ra),to.subVectors(e.c,ra),Vr.subVectors(eo,Qs),Gr.subVectors(to,eo),ms.subVectors(Qs,to);let t=[0,-Vr.z,Vr.y,0,-Gr.z,Gr.y,0,-ms.z,ms.y,Vr.z,0,-Vr.x,Gr.z,0,-Gr.x,ms.z,0,-ms.x,-Vr.y,Vr.x,0,-Gr.y,Gr.x,0,-ms.y,ms.x,0];return!rf(t,Qs,eo,to,Gl)||(t=[1,0,0,0,1,0,0,0,1],!rf(t,Qs,eo,to,Gl))?!1:(Wl.crossVectors(Vr,Gr),t=[Wl.x,Wl.y,Wl.z],rf(t,Qs,eo,to,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gr=[new I,new I,new I,new I,new I,new I,new I,new I],wi=new I,Vl=new Lt,Qs=new I,eo=new I,to=new I,Vr=new I,Gr=new I,ms=new I,ra=new I,Gl=new I,Wl=new I,gs=new I;function rf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gs.fromArray(n,s);let a=r.x*Math.abs(gs.x)+r.y*Math.abs(gs.y)+r.z*Math.abs(gs.z),l=e.dot(gs),c=t.dot(gs),u=i.dot(gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var sn=new I,Xl=new Ze,jv=0,Ht=class extends Ti{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jf,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?Iu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):id(e,this.array)}};var _a=class extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var va=class extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Gt=class extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},Jv=new Lt,sa=new I,sf=new I,yn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Jv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);let t=sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(sf)),this.expandByPoint(sa.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qv=0,li=new lt,of=new Wt,no=new I,ei=new Lt,oa=new Lt,gn=new I,Bt=class n extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wv(e)?va:_a)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(ei.min,oa.min),ei.expandByPoint(gn),gn.addVectors(ei.max,oa.max),ei.expandByPoint(gn)):(ei.expandByPoint(oa.min),ei.expandByPoint(oa.max))}ei.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gn.fromBufferAttribute(a,c),l&&(no.fromBufferAttribute(e,c),gn.add(no)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ht(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new I,l[L]=new I;let u=new I,h=new I,f=new I,d=new Ze,g=new Ze,x=new Ze,m=new I,p=new I;function b(L,D,F){c[L]=c[D]=c[F]=1,u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,D),f.fromBufferAttribute(i,F),d.fromBufferAttribute(s,L),g.fromBufferAttribute(s,D),x.fromBufferAttribute(s,F),h.sub(u),f.sub(u),g.sub(d),x.sub(d);let G=1/(g.x*x.y-x.x*g.y);isFinite(G)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(G),p.copy(f).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(G),a[L].add(m),a[D].add(m),a[F].add(m),l[L].add(p),l[D].add(p),l[F].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,D=S.length;L<D;++L){let F=S[L],G=F.start,k=F.count;for(let N=G,W=G+k;N<W;N+=3)b(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let v=new I,M=new I,w=new I,y=new I;function E(L){w.fromBufferAttribute(r,L),y.copy(w);let D=a[L];v.copy(D),v.sub(w.multiplyScalar(w.dot(D))).normalize(),M.crossVectors(y,D);let G=M.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,G)}for(let L=0,D=i.count;L<D;++L)c[L]&&E(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ht(f,u,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jf,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Om(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Om(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Om(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=qi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Hn=new I,In=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Iu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):id(e,this.data.array)}},af=new I,eb=new I,tb=new ht,xn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=af.subVectors(i,t).cross(eb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(af),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tb.getNormalMatrix(e),r=this.coplanarPoint(af).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},nb=0,Ln=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Xi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Lo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yc,this.stencilZFail=yc,this.stencilZPass=yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wo=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},io,aa=new I,ro=new I,so=new I,oo=new Ze,la=new Ze,Yg=new lt,ql=new I,ca=new I,$l=new I,Um=new Ze,lf=new Ze,Fm=new Ze,ba=class extends Wt{constructor(e=new wo){if(super(),this.isSprite=!0,this.type="Sprite",io===void 0){io=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qr(t,5);io.setIndex([0,1,2,0,2,3]),io.setAttribute("position",new In(i,3,0,!1)),io.setAttribute("uv",new In(i,2,3,!1))}this.geometry=io,this.material=e,this.center=new Ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ro.setFromMatrixScale(this.matrixWorld),Yg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),so.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ro.multiplyScalar(-so.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Yl(ql.set(-.5,-.5,0),so,o,ro,r,s),Yl(ca.set(.5,-.5,0),so,o,ro,r,s),Yl($l.set(.5,.5,0),so,o,ro,r,s),Um.set(0,0),lf.set(1,0),Fm.set(1,1);let a=e.ray.intersectTriangle(ql,ca,$l,!1,aa);if(a===null&&(Yl(ca.set(-.5,.5,0),so,o,ro,r,s),lf.set(0,1),a=e.ray.intersectTriangle(ql,$l,ca,!1,aa),a===null))return;let l=e.ray.origin.distanceTo(aa);l<e.near||l>e.far||t.push({distance:l,point:aa.clone(),uv:Fi.getInterpolation(aa,ql,ca,$l,Um,lf,Fm,new Ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Yl(n,e,t,i,r,s){oo.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(la.x=s*oo.x-r*oo.y,la.y=r*oo.x+s*oo.y):la.copy(oo),n.copy(e),n.x+=la.x,n.y+=la.y,n.applyMatrix4(Yg)}var xr=new I,cf=new I,Zl=new I,Kl=new I,zi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cf.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Kl.copy(this.origin).sub(cf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Zl),a=Kl.dot(this.direction),l=-Kl.dot(Zl),c=Kl.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(cf).addScaledVector(Zl,f),d}intersectSphere(e,t){if(e.radius<0)return null;xr.subVectors(e.center,this.origin);let i=xr.dot(this.direction),r=xr.dot(xr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,g=t.x-o.x,x=t.y-o.y,m=t.z-o.z,p=i.x-o.x,b=i.y-o.y,S=i.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(u),y,E,L,D,F,G,k,N,W,Q,$,ye;if(v>=M&&v>=w?(L=l,G=h,W=g,ye=p,l>=0?(y=c,E=u,D=f,F=d,k=x,N=m,Q=b,$=S):(y=u,E=c,D=d,F=f,k=m,N=x,Q=S,$=b)):M>=w?(L=c,G=f,W=x,ye=b,c>=0?(y=u,E=l,D=d,F=h,k=m,N=g,Q=S,$=p):(y=l,E=u,D=h,F=d,k=g,N=m,Q=p,$=S)):(L=u,G=d,W=m,ye=S,u>=0?(y=l,E=c,D=h,F=f,k=g,N=x,Q=p,$=b):(y=c,E=l,D=f,F=h,k=x,N=g,Q=b,$=p)),L===0)return null;let ee=y/L,z=E/L,j=1/L,Se=D-ee*G,Ie=F-z*G,K=k-ee*W,me=N-z*W,re=Q-ee*ye,H=$-z*ye,J=re*me-H*K,Ee=Se*H-Ie*re,Ye=K*Ie-me*Se;if(r){if(J<0||Ee<0||Ye<0)return null}else if((J<0||Ee<0||Ye<0)&&(J>0||Ee>0||Ye>0))return null;let Ne=J+Ee+Ye;if(Ne===0)return null;let qe=j*(J*G+Ee*W+Ye*ye);return(Ne>0?qe<0:qe>0)?null:this.at(qe/Ne,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bm=new lt,xs=new zi,jl=new yn,km=new I,Jl=new I,Ql=new I,ec=new I,uf=new I,tc=new I,zm=new I,nc=new I,pt=class extends Wt{constructor(e=new Bt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(uf.fromBufferAttribute(h,e),o?tc.addScaledVector(uf,u):tc.addScaledVector(uf.sub(t),u))}t.add(tc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(s),xs.copy(e.ray).recast(e.near),!(jl.containsPoint(xs.origin)===!1&&(xs.intersectSphere(jl,km)===null||xs.origin.distanceToSquared(km)>(e.far-e.near)**2))&&(Bm.copy(s).invert(),xs.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,M=S;v<M;v+=3){let w=a.getX(v),y=a.getX(v+1),E=a.getX(v+2);r=ic(this,p,e,i,c,u,h,w,y,E),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);r=ic(this,o,e,i,c,u,h,b,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,M=S;v<M;v+=3){let w=v,y=v+1,E=v+2;r=ic(this,p,e,i,c,u,h,w,y,E),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=m,S=m+1,v=m+2;r=ic(this,o,e,i,c,u,h,b,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function ib(n,e,t,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ni,a),l===null)return null;nc.copy(a),nc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(nc);return c<t.near||c>t.far?null:{distance:c,point:nc.clone(),object:n}}function ic(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Jl),n.getVertexPosition(l,Ql),n.getVertexPosition(c,ec);let u=ib(n,e,t,i,Jl,Ql,ec,zm);if(u){let h=new I;Fi.getBarycoord(zm,Jl,Ql,ec,h),r&&(u.uv=Fi.getInterpolatedAttribute(r,a,l,c,h,new Ze)),s&&(u.uv1=Fi.getInterpolatedAttribute(s,a,l,c,h,new Ze)),o&&(u.normal=Fi.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Fi.getNormal(Jl,Ql,ec,f.normal),u.face=f,u.barycoord=h}return u}var ua=new wt,Hm=new wt,Vm=new wt,rb=new wt,Gm=new lt,rc=new I,hf=new yn,Wm=new lt,ff=new zi,Ma=class extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yf,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,rc),this.boundingBox.expandByPoint(rc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,rc),this.boundingSphere.expandByPoint(rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hf.copy(this.boundingSphere),hf.applyMatrix4(r),e.ray.intersectsSphere(hf)!==!1&&(Wm.copy(r).invert(),ff.copy(e.ray).applyMatrix4(Wm),!(this.boundingBox!==null&&ff.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ff)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dg?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Hm.fromBufferAttribute(r.attributes.skinIndex,e),Vm.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ua.copy(t),t.set(0,0,0,0)):(ua.set(t.x,t.y,t.z,1),t.set(0,0,0)),ua.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Vm.getComponent(s);if(o!==0){let a=Hm.getComponent(s);Gm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(rb.copy(ua).applyMatrix4(Gm),o)}}return t.isVector4&&(t.w=ua.w),t.applyMatrix4(this.bindMatrixInverse)}},Eo=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},To=class extends hn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=$t,u=$t,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xm=new lt,sb=new lt,Sa=class n{constructor(e=[],t=[]){this.uuid=qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:sb;Xm.multiplyMatrices(a,t[s]),Xm.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new To(t,e,e,wn,Wn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(it("Skeleton: No bone found with UUID:",s),o=new Eo),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},br=class extends Ht{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ao=new lt,qm=new lt,sc=[],$m=new Lt,ob=new lt,ha=new pt,fa=new yn,Ss=class extends pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new br(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ob)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),$m.copy(e.boundingBox).applyMatrix4(ao),this.boundingBox.union($m)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),fa.copy(e.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ao),qm.multiplyMatrices(i,ao),ha.matrixWorld=qm,ha.raycast(e,sc);for(let o=0,a=sc.length;o<a;o++){let l=sc[o];l.instanceId=s,l.object=this,t.push(l)}sc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new To(new Float32Array(r*this.count),r,this.count,jc,Wn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ys=new yn,ab=new Ze(.5,.5),oc=new I,$r=class{constructor(e=new xn,t=new xn,i=new xn,r=new xn,s=new xn,o=new xn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],b=s[12],S=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,p-g,M-b).normalize(),r[1].setComponents(c+o,d+u,p+g,M+b).normalize(),r[2].setComponents(c+a,d+h,p+x,M+S).normalize(),r[3].setComponents(c-a,d-h,p-x,M-S).normalize(),i)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,d-f,p-m,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-m,M-v).normalize(),t===ui)r[5].setComponents(c+l,d+f,p+m,M+v).normalize();else if(t===yo)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);let t=ab.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(oc.x=r.normal.x>0?e.max.x:e.min.x,oc.y=r.normal.y>0?e.max.y:e.min.y,oc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ym=new lt,Cc=class n{constructor(){this.coordinateSystem=ui,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Ym.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new $r),i[r].setFromProjectionMatrix(Ym,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new $r),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Mr=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pc=new I,Ic=new I,Zm=new lt,da=new zi,ac=new yn,df=new I,Km=new I,Hi=class extends Wt{constructor(e=new Bt,t=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Pc.fromBufferAttribute(t,r-1),Ic.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Pc.distanceTo(Ic);e.setAttribute("lineDistance",new Gt(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(r),ac.radius+=s,e.ray.intersectsSphere(ac)===!1)return;Zm.copy(r).invert(),da.copy(e.ray).applyMatrix4(Zm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),b=u.getX(x+1),S=lc(this,e,da,l,p,b,x);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=lc(this,e,da,l,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=lc(this,e,da,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=lc(this,e,da,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function lc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Pc.fromBufferAttribute(a,r),Ic.fromBufferAttribute(a,s),t.distanceSqToSegment(Pc,Ic,df,Km)>i)return;df.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(df);if(!(c<e.near||c>e.far))return{distance:c,point:Km.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var jm=new I,Jm=new I,wa=class extends Hi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)jm.fromBufferAttribute(t,r),Jm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jm.distanceTo(Jm);e.setAttribute("lineDistance",new Gt(i,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ea=class extends Hi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ao=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qm=new lt,Sf=new zi,cc=new yn,uc=new I,Ta=class extends Wt{constructor(e=new Bt,t=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(r),cc.radius+=s,e.ray.intersectsSphere(cc)===!1)return;Qm.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(Qm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);uc.fromBufferAttribute(h,m),eg(uc,m,l,r,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)uc.fromBufferAttribute(h,g),eg(uc,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function eg(n,e,t,i,r,s,o){let a=Sf.distanceSqToPoint(n);if(a<t){let l=new I;Sf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Aa=class extends hn{constructor(e=[],t=Ts,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sr=class extends hn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wr=class extends hn{constructor(e,t,i=Ci,r,s,o,a=$t,l=$t,c,u=vr,h=1){if(u!==vr&&u!==Pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ra=class extends wr{constructor(e,t=Ci,i=Ts,r,s,o=$t,a=$t,l,c=vr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ca=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class n extends Bt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function g(x,m,p,b,S,v,M,w,y,E,L){let D=v/y,F=M/E,G=v/2,k=M/2,N=w/2,W=y+1,Q=E+1,$=0,ye=0,ee=new I;for(let z=0;z<Q;z++){let j=z*F-k;for(let Se=0;Se<W;Se++){let Ie=Se*D-G;ee[x]=Ie*b,ee[m]=j*S,ee[p]=N,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[p]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Se/y),h.push(1-z/E),$+=1}}for(let z=0;z<E;z++)for(let j=0;j<y;j++){let Se=f+j+W*z,Ie=f+j+W*(z+1),K=f+(j+1)+W*(z+1),me=f+(j+1)+W*z;l.push(Se,Ie,me),l.push(Ie,K,me),ye+=6}a.addGroup(d,ye,L),d+=ye,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var hc=new I,fc=new I,pf=new I,dc=new Fi,Pa=class extends Bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(po*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=dc;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),dc.getNormal(pf),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let S=(b+1)%3,v=h[b],M=h[S],w=dc[u[b]],y=dc[u[S]],E=`${v}_${M}`,L=`${M}_${v}`,D=f.get(L);D?(pf.dot(D.normal)<=s&&(d.push(w.x,w.y,w.z),d.push(y.x,y.y,y.z)),f.set(L,null)):f.has(E)||f.set(E,{index0:c[b],index1:c[S],normal:pf.clone()})}}for(let g of f.values())if(g){let{index0:x,index1:m}=g;hc.fromBufferAttribute(a,x),fc.fromBufferAttribute(a,m),d.push(hc.x,hc.y,hc.z),d.push(fc.x,fc.y,fc.z)}this.setAttribute("position",new Gt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var hi=class n extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let S=0;S<c;S++){let v=S*h-s;g.push(v,-b,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,v=b+c*(p+1),M=b+1+c*(p+1),w=b+1+c*p;d.push(S,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ia=class n extends Bt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,f=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let b=[],S=p/i,v=o+S*a,M=e*Math.cos(v),w=Math.sqrt(e*e-M*M),y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let L=E/t,D=r+L*s;h.x=-w*Math.cos(D),h.y=M,h.z=w*Math.sin(D),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(L+y,1-S),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let S=u[p][b+1],v=u[p][b],M=u[p+1][b],w=u[p+1][b+1];(p!==0||o>0)&&d.push(S,v,w),(p!==i-1||l<Math.PI)&&d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var La=class extends Bt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new I,s=new I;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let g=f,x=f+d;g<x;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),b=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,b),tg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),tg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Gt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function tg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Cs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(ng(r))r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(ng(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function On(n){let e={};for(let t=0;t<n.length;t++){let i=Cs(n[t]);for(let r in i)e[r]=i[r]}return e}function ng(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function lb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var nl={clone:Cs,merge:On},cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cb,this.fragmentShader=ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new I().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ht().fromArray(r.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lc=class extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dn=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fn=class extends Dn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return _s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){_s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Da=class extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Wc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dc=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function pa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function hb(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function ig(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function fb(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var Gi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oc=class extends Gi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vf,endingEnd:vf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bf:s=e,a=2*t-i;break;case Mf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bf:o=e,l=2*i-t;break;case Mf:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+b*o[c+M]+S*o[l+M]+v*o[h+M];return s}},Uc=class extends Gi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Fc=class extends Gi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bc=class extends Gi{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-t)/(r-t),x=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*g;return s}let f=a*2,d=e-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*f+g*2,b=h[p],S=h[p+1],v=e*f+g*2,M=u[v],w=u[v+1],y=pb(i,t,b,M,r);s[g]=Zg(y,x,S,w,m)}return s}};function Zg(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function db(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function pb(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=Zg(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let l=db(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Yn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(t,this.TimeBufferType),this.values=Xr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),pa(e.settings)&&(i.settings={inTangents:Xr(e.settings.inTangents,Array),outTangents:Xr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case xc:t=this.InterpolantFactoryMethodSmooth;break;case _f:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return xc;case this.InterpolantFactoryMethodBezier:return _f}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;pa(this.settings)&&(rg(this.settings.inTangents,e),rg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;pa(this.settings)&&(sg(this.settings.inTangents,e),sg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ct("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ct("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Ev(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){ct("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===xc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,pa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function rg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function sg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=bs;var Er=class extends Yn{constructor(e,t,i){super(e,t,i)}};Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=vs;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}};Na.prototype.ValueTypeName="color";var Tr=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}};Tr.prototype.ValueTypeName="number";var kc=class extends Gi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Zt.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ar=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends Yn{constructor(e,t,i){super(e,t,i)}};Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=vs;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}};Yr.prototype.ValueTypeName="vector";var Oa=class{constructor(e="",t=-1,i=[],r=Ng){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(gb(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(Yn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=hb(l);l=ig(l,1,u),c=ig(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Tr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function mb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tr;case"vector":case"vector2":case"vector3":case"vector4":return Yr;case"color":return Na;case"quaternion":return Ar;case"bool":case"boolean":return Er;case"string":return Rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function gb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=mb(n.type);if(n.times===void 0){let i=[],r=[];fb(n.keys,i,r,"value"),n.times=i,n.values=r}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),pa(n.settings)&&(t.settings={inTangents:Xr(n.settings.inTangents,Float32Array),outTangents:Xr(n.settings.outTangents,Float32Array)}),t}var Bi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(og(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!og(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function og(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var zc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kg=new zc,Wi=class{constructor(e){this.manager=e!==void 0?e:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr={},wf=class extends Error{constructor(e,t){super(e),this.response=t}},Ro=class extends Wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Bi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(yr[e]!==void 0){yr[e].push({onLoad:t,onProgress:i,onError:r});return}yr[e]=[],yr[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=yr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){b();function b(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{x+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let w=0,y=u.length;w<y;w++){let E=u[w];E.onProgress&&E.onProgress(M)}p.enqueue(v),b()}},S=>{p.error(S)})}}});return new Response(m)}else throw new wf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Bi.add(`file:${e}`,c);let u=yr[e];delete yr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=yr[e];if(u===void 0)throw this.manager.itemError(e),c;delete yr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var lo=new WeakMap,Hc=class extends Wi{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Bi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=lo.get(o);h===void 0&&(h=[],lo.set(o,h)),h.push({onLoad:t,onError:r})}return o}let a=_o("img");function l(){u(),t&&t(this);let h=lo.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}lo.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Bi.remove(`image:${e}`);let f=lo.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}lo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ua=class extends Wi{constructor(e){super(e)}load(e,t,i,r){let s=new hn,o=new Hc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},ws=class extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var mf=new lt,ag=new I,lg=new I,Co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ag.setFromMatrixPosition(e.matrixWorld),t.position.copy(ag),lg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){mf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(mf,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===yo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pc=new I,mc=new Zt,Ui=new I,Fa=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pc,mc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(pc,mc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wr=new I,cg=new Ze,ug=new Ze,un=class extends Fa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,cg,ug),t.subVectors(ug,cg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ef=class extends Co{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ms*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ba=class extends ws{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Ef}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Tf=class extends Co{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},Es=class extends ws{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ai=class extends Fa{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Af=class extends Co{constructor(){super(new Ai(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Af}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ka=class extends ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},za=class extends Bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var gf=new WeakMap,Ha=class extends Wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Bi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{gf.has(o)===!0?(r&&r(gf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),gf.set(l,c),Bi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var co=-90,uo=1,Po=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new un(co,uo,e,t);r.layers=this.layers,this.add(r);let s=new un(co,uo,e,t);s.layers=this.layers,this.add(s);let o=new un(co,uo,e,t);o.layers=this.layers,this.add(o);let a=new un(co,uo,e,t);a.layers=this.layers,this.add(a);let l=new un(co,uo,e,t);l.layers=this.layers,this.add(l);let c=new un(co,uo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vc=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var sd="\\[\\]\\.:\\/",xb=new RegExp("["+sd+"]","g"),od="[^"+sd+"]",yb="[^"+sd.replace("\\.","")+"]",_b=/((?:WC+[\/:])*)/.source.replace("WC",od),vb=/(WCOD+)?/.source.replace("WCOD",yb),bb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",od),Mb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",od),Sb=new RegExp("^"+_b+vb+bb+Mb+"$"),wb=["material","materials","bones","map"],Rf=class{constructor(e,t,i){let r=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xb,"")}static parseTrackName(e){let t=Sb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);wb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Rf;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gC=new Float32Array(1);var Kr=class extends qr{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var hg=new lt,ti=class{constructor(e,t,i=0,r=1/0){this.ray=new zi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hg),this}intersectObject(e,t=!0,i=[]){return Cf(e,this,i,t),i.sort(fg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Cf(e[r],this,i,t);return i.sort(fg),i}};function fg(n,e){return n.distance-e.distance}function Cf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Cf(s[o],e,t,!0)}}var jr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Pf=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};var dg=new I,gc=new I,ho=new I,fo=new I,xf=new I,Eb=new I,Tb=new I,Va=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dg.subVectors(e,this.start),gc.subVectors(this.end,this.start);let i=gc.dot(gc);if(i===0)return 0;let s=gc.dot(dg)/i;return t&&(s=ft(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Eb,i=Tb){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;ho.subVectors(c,a),fo.subVectors(u,l),xf.subVectors(a,l);let h=ho.dot(ho),f=fo.dot(fo),d=fo.dot(xf);if(h<=r&&f<=r)return t.copy(a),i.copy(l),t.distanceToSquared(i);if(h<=r)s=0,o=d/f,o=ft(o,0,1);else{let g=ho.dot(xf);if(f<=r)o=0,s=ft(-g/h,0,1);else{let x=ho.dot(fo),m=h*f-x*x;m!==0?s=ft((x*d-g*f)/m,0,1):s=0,o=(x*s+d)/f,o<0?(o=0,s=ft(-g/h,0,1)):o>1&&(o=1,s=ft((x-g)/h,0,1))}}return t.copy(a).addScaledVector(ho,s),i.copy(l).addScaledVector(fo,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ga=class extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ad(n,e,t,i){let r=Ab(i);switch(t){case qf:return n*e;case jc:return n*e/r.components*r.byteLength;case Jc:return n*e/r.components*r.byteLength;case ts:return n*e*2/r.components*r.byteLength;case Qc:return n*e*2/r.components*r.byteLength;case $f:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case eu:return n*e*4/r.components*r.byteLength;case Ya:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nu:case ru:return Math.max(n,16)*Math.max(e,8)/4;case tu:case iu:return Math.max(n,8)*Math.max(e,8)/2;case su:case ou:case lu:case cu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case au:case Ja:case uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eu:case Tu:case Au:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ru:case Cu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qa:case Pu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ab(n){switch(n){case Nn:case Vf:return{byteLength:1,components:1};case Uo:case Gf:case Zn:return{byteLength:2,components:1};case Zc:case Kc:return{byteLength:2,components:4};case Ci:case Yc:case Wn:return{byteLength:4,components:1};case Wf:case Xf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function y0(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cb(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ib=`#ifdef USE_ALPHAHASH
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
#endif`,Lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ub=`#ifdef USE_AOMAP
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
#endif`,Fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
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
#endif`,kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gb=`#ifdef USE_IRIDESCENCE
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
#endif`,Wb=`#ifdef USE_BUMPMAP
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
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qb=`#define PI 3.141592653589793
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
} // validated`,eM=`vec3 transformedNormal = objectNormal;
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
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
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
}`,xM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bM=`#ifdef USE_ENVMAP
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
#endif`,MM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
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
#endif`,AM=`uniform sampler2D dfgLUT;
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
}`,RM=`
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
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
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,LM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kM=`#if defined( USE_POINTS_UV )
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
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GM=`#if defined( USE_MORPHCOLORS )
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
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
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
#endif`,qM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
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
#endif`,QM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pS=`float getShadowMask() {
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
}`,mS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gS=`#ifdef USE_SKINNING
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
#endif`,xS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,_S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SS=`#ifdef USE_TRANSMISSION
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
#endif`,wS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PS=`uniform sampler2D t2D;
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`uniform float backgroundBlurriness;
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`#include <common>
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
}`,US=`#if DEPTH_PACKING == 3200
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
}`,FS=`#define DISTANCE
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
}`,BS=`#define DISTANCE
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
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`uniform float scale;
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
}`,VS=`uniform vec3 diffuse;
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
}`,GS=`#include <common>
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#define LAMBERT
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
}`,qS=`#define LAMBERT
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
}`,$S=`#define MATCAP
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
}`,YS=`#define MATCAP
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
}`,ZS=`#define NORMAL
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
}`,KS=`#define NORMAL
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
}`,jS=`#define PHONG
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
}`,JS=`#define PHONG
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
}`,QS=`#define STANDARD
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
}`,ew=`#define STANDARD
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
}`,tw=`#define TOON
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
}`,nw=`#define TOON
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
}`,iw=`uniform float size;
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
}`,rw=`uniform vec3 diffuse;
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
}`,sw=`#include <common>
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
}`,ow=`uniform vec3 color;
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
}`,aw=`uniform float rotation;
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
}`,lw=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Pb,alphahash_pars_fragment:Ib,alphamap_fragment:Lb,alphamap_pars_fragment:Db,alphatest_fragment:Nb,alphatest_pars_fragment:Ob,aomap_fragment:Ub,aomap_pars_fragment:Fb,batching_pars_vertex:Bb,batching_vertex:kb,begin_vertex:zb,beginnormal_vertex:Hb,bsdfs:Vb,iridescence_fragment:Gb,bumpmap_pars_fragment:Wb,clipping_planes_fragment:Xb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:$b,clipping_planes_vertex:Yb,color_fragment:Zb,color_pars_fragment:Kb,color_pars_vertex:jb,color_vertex:Jb,common:Qb,defaultnormal_vertex:eM,displacementmap_pars_vertex:tM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:rM,colorspace_fragment:sM,colorspace_pars_fragment:oM,envmap_fragment:aM,envmap_common_pars_fragment:lM,envmap_pars_fragment:cM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:bM,envmap_vertex:hM,fog_vertex:fM,fog_pars_vertex:dM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:gM,lightmap_pars_fragment:xM,lights_lambert_fragment:yM,lights_lambert_pars_fragment:_M,lights_pars_begin:vM,lights_toon_fragment:MM,lights_toon_pars_fragment:SM,lights_phong_fragment:wM,lights_phong_pars_fragment:EM,lights_physical_fragment:TM,lights_physical_pars_fragment:AM,lights_fragment_begin:RM,lights_fragment_maps:CM,lights_fragment_end:PM,lightprobes_pars_fragment:IM,logdepthbuf_fragment:LM,logdepthbuf_pars_fragment:DM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:OM,map_fragment:UM,map_pars_fragment:FM,map_particle_fragment:BM,map_particle_pars_fragment:kM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:HM,morphinstance_vertex:VM,morphcolor_vertex:GM,morphnormal_vertex:WM,morphtarget_pars_vertex:XM,morphtarget_vertex:qM,normal_fragment_begin:$M,normal_fragment_maps:YM,normal_pars_fragment:ZM,normal_pars_vertex:KM,normal_vertex:jM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:QM,clearcoat_normal_fragment_maps:eS,clearcoat_pars_fragment:tS,iridescence_pars_fragment:nS,opaque_fragment:iS,packing:rS,premultiplied_alpha_fragment:sS,project_vertex:oS,dithering_fragment:aS,dithering_pars_fragment:lS,roughnessmap_fragment:cS,roughnessmap_pars_fragment:uS,shadowmap_pars_fragment:hS,shadowmap_pars_vertex:fS,shadowmap_vertex:dS,shadowmask_pars_fragment:pS,skinbase_vertex:mS,skinning_pars_vertex:gS,skinning_vertex:xS,skinnormal_vertex:yS,specularmap_fragment:_S,specularmap_pars_fragment:vS,tonemapping_fragment:bS,tonemapping_pars_fragment:MS,transmission_fragment:SS,transmission_pars_fragment:wS,uv_pars_fragment:ES,uv_pars_vertex:TS,uv_vertex:AS,worldpos_vertex:RS,background_vert:CS,background_frag:PS,backgroundCube_vert:IS,backgroundCube_frag:LS,cube_vert:DS,cube_frag:NS,depth_vert:OS,depth_frag:US,distance_vert:FS,distance_frag:BS,equirect_vert:kS,equirect_frag:zS,linedashed_vert:HS,linedashed_frag:VS,meshbasic_vert:GS,meshbasic_frag:WS,meshlambert_vert:XS,meshlambert_frag:qS,meshmatcap_vert:$S,meshmatcap_frag:YS,meshnormal_vert:ZS,meshnormal_frag:KS,meshphong_vert:jS,meshphong_frag:JS,meshphysical_vert:QS,meshphysical_frag:ew,meshtoon_vert:tw,meshtoon_frag:nw,points_vert:iw,points_frag:rw,shadow_vert:sw,shadow_frag:ow,sprite_vert:aw,sprite_frag:lw},Xe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Xn={basic:{uniforms:On([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:On([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:On([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:On([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:On([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:On([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:On([Xe.points,Xe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:On([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:On([Xe.common,Xe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:On([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:On([Xe.sprite,Xe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:On([Xe.common,Xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:On([Xe.lights,Xe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Xn.physical={uniforms:On([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Lu={r:0,b:0,g:0},cw=new lt,_0=new ht;_0.set(-1,0,0,0,1,0,0,0,1);function uw(n,e,t,i,r,s){let o=new Je(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let v=b.backgroundBlurriness>0;S=e.get(S,v)}return S}function g(b){let S=!1,v=d(b);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,S){let v=d(S);v&&v.isCubeTexture?(c===void 0&&(c=new pt(new Vi(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Cs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cw.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_0),c.material.toneMapped=xt.getTransfer(v.colorSpace)!==It,(u!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new pt(new hi(2,2),new _n({name:"BackgroundMaterial",uniforms:Cs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=xt.getTransfer(v.colorSpace)!==It,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,S){b.getRGB(Lu,rd(n)),t.buffers.color.setClear(Lu.r,Lu.g,Lu.b,S,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:x,dispose:p}}function hw(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(F,G,k,N,W){let Q=!1,$=h(F,N,k,G);s!==$&&(s=$,c(s.object)),Q=d(F,N,k,W),Q&&g(F,N,k,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(F,G,k,N),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function h(F,G,k,N){let W=N.wireframe===!0,Q=i[G.id];Q===void 0&&(Q={},i[G.id]=Q);let $=F.isInstancedMesh===!0?F.id:0,ye=Q[$];ye===void 0&&(ye={},Q[$]=ye);let ee=ye[k.id];ee===void 0&&(ee={},ye[k.id]=ee);let z=ee[W];return z===void 0&&(z=f(l()),ee[W]=z),z}function f(F){let G=[],k=[],N=[];for(let W=0;W<t;W++)G[W]=0,k[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:k,attributeDivisors:N,object:F,attributes:{},index:null}}function d(F,G,k,N){let W=s.attributes,Q=G.attributes,$=0,ye=k.getAttributes();for(let ee in ye)if(ye[ee].location>=0){let j=W[ee],Se=Q[ee];if(Se===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(Se=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(Se=F.instanceColor)),j===void 0||j.attribute!==Se||Se&&j.data!==Se.data)return!0;$++}return s.attributesNum!==$||s.index!==N}function g(F,G,k,N){let W={},Q=G.attributes,$=0,ye=k.getAttributes();for(let ee in ye)if(ye[ee].location>=0){let j=Q[ee];j===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));let Se={};Se.attribute=j,j&&j.data&&(Se.data=j.data),W[ee]=Se,$++}s.attributes=W,s.attributesNum=$,s.index=N}function x(){let F=s.newAttributes;for(let G=0,k=F.length;G<k;G++)F[G]=0}function m(F){p(F,0)}function p(F,G){let k=s.newAttributes,N=s.enabledAttributes,W=s.attributeDivisors;k[F]=1,N[F]===0&&(n.enableVertexAttribArray(F),N[F]=1),W[F]!==G&&(n.vertexAttribDivisor(F,G),W[F]=G)}function b(){let F=s.newAttributes,G=s.enabledAttributes;for(let k=0,N=G.length;k<N;k++)G[k]!==F[k]&&(n.disableVertexAttribArray(k),G[k]=0)}function S(F,G,k,N,W,Q,$){$===!0?n.vertexAttribIPointer(F,G,k,W,Q):n.vertexAttribPointer(F,G,k,N,W,Q)}function v(F,G,k,N){x();let W=N.attributes,Q=k.getAttributes(),$=G.defaultAttributeValues;for(let ye in Q){let ee=Q[ye];if(ee.location>=0){let z=W[ye];if(z===void 0&&(ye==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),ye==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),z!==void 0){let j=z.normalized,Se=z.itemSize,Ie=e.get(z);if(Ie===void 0)continue;let K=Ie.buffer,me=Ie.type,re=Ie.bytesPerElement,H=me===n.INT||me===n.UNSIGNED_INT||z.gpuType===Yc;if(z.isInterleavedBufferAttribute){let J=z.data,Ee=J.isInterleavedBuffer===!0?J.stride:J.itemSize,Ye=z.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let Ne=0;Ne<ee.locationSize;Ne++)p(ee.location+Ne,J.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ne=0;Ne<ee.locationSize;Ne++)m(ee.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Ne=0;Ne<ee.locationSize;Ne++)S(ee.location+Ne,Se/ee.locationSize,me,j,Ee*re,(Ye+Se/ee.locationSize*Ne)*re,H)}else{if(z.isInstancedBufferAttribute){for(let J=0;J<ee.locationSize;J++)p(ee.location+J,z.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let J=0;J<ee.locationSize;J++)m(ee.location+J);n.bindBuffer(n.ARRAY_BUFFER,K);for(let J=0;J<ee.locationSize;J++)S(ee.location+J,Se/ee.locationSize,me,j,Se*re,Se/ee.locationSize*J*re,H)}}else if($!==void 0){let j=$[ye];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ee.location,j);break;case 3:n.vertexAttrib3fv(ee.location,j);break;case 4:n.vertexAttrib4fv(ee.location,j);break;default:n.vertexAttrib1fv(ee.location,j)}}}}b()}function M(){L();for(let F in i){let G=i[F];for(let k in G){let N=G[k];for(let W in N){let Q=N[W];for(let $ in Q)u(Q[$].object),delete Q[$];delete N[W]}}delete i[F]}}function w(F){if(i[F.id]===void 0)return;let G=i[F.id];for(let k in G){let N=G[k];for(let W in N){let Q=N[W];for(let $ in Q)u(Q[$].object),delete Q[$];delete N[W]}}delete i[F.id]}function y(F){for(let G in i){let k=i[G];for(let N in k){let W=k[N];if(W[F.id]===void 0)continue;let Q=W[F.id];for(let $ in Q)u(Q[$].object),delete Q[$];delete W[F.id]}}}function E(F){for(let G in i){let k=i[G],N=F.isInstancedMesh===!0?F.id:0,W=k[N];if(W!==void 0){for(let Q in W){let $=W[Q];for(let ye in $)u($[ye].object),delete $[ye];delete W[Q]}delete k[N],Object.keys(k).length===0&&delete i[G]}}}function L(){D(),o=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function fw(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function dw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(y){return!(y!==wn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let E=y===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Nn&&y!==Wn&&!E&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:w}}function pw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new xn,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let b=s?0:i,S=b*4,v=p.clippingState||null;l.value=v,v=u(g,f,S,d);for(let M=0;M!==S;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var sl=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Aa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vi(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:fi});s.uniforms.tEquirect.value=t;let o=new pt(r,s),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=Yt),new Po(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},jg=256,mw=3,gw=20,v0=256,b0=16,xw=3,yw=new I,_w=new Je,ko=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Po(1,10,null),this._boxMesh=new pt(new Vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=yw}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(_w));let m=new Po(i,r,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(jg,td(e))}_fromTexture(e,t){e.mapping===Ts||e.mapping===No?this._setSize(e.image.length===0?jg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Jg(e,!1,!1),i=Math.log2(e)-mw;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Jg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ts||e.mapping===No?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=vw(),this._integrationMaterial=bw());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/b0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-xw)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(v0*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Mw());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function Jg(n,e,t){return new sl(n,{minFilter:pi,generateMipmaps:e,type:Zn,colorSpace:Vn,depthBuffer:t})}function ol(n,e,t){return new _n({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:Sn,blending:fi,depthTest:!1,depthWrite:!1})}function vw(){return ol("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${v0}u

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
	`)}function bw(){return ol("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:b0}},`

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
	`)}function Mw(){return ol("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gw}
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
	`)}function Qg(){return ol("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function e0(){return ol("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Sw(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Xc||d===qc)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new sl(g.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Xc||d===qc,x=d===Ts||d===No;if(g||x){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new ko(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let b=f.image;return g&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new ko(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Xc?f.mapping=Ts:d===qc&&(f.mapping=No),f}function l(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ww(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&_s("WebGLRenderer: "+i+" extension not supported."),r}}}function Ew(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(g=>delete r[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let x=s.get(g);x&&(e.remove(x),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return r[x.id]!==void 0||(x.addEventListener("dispose",a),r[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(g){let x=g.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function h(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let b=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?va:_a,v=new S(Math.ceil(b/3)*6,1),M=v.array;if(x!==null){let y=x.array;p=x.version;for(let E=0,L=0;E<b;E+=3){let D=y[E+0],F=y[E+1],G=y[E+2];M[L++]=D,M[L++]=F,M[L++]=F,M[L++]=G,M[L++]=G,M[L++]=D}}else{p=m.version;for(let y=0,E=0;y<b;y+=3){let L=y+0,D=y+1,F=y+2;M[E++]=L,M[E++]=D,M[E++]=D,M[E++]=F,M[E++]=F,M[E++]=L}}v.version=p;let w=s.get(g);w&&e.remove(w),s.set(g,v)}function f(g){let x=s.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&h(g)}else h(g);return s.get(g)}function d(){for(let g in r){let x=r[g].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function Tw(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,s,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Aw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Rw(n,e,t){let i=new WeakMap,r=new wt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let L=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*M*4*h),y=new ya(w,v,M,h);y.type=Wn,y.needsUpdate=!0;let E=S*4;for(let D=0;D<h;D++){let F=m[D],G=p[D],k=b[D],N=v*M*4*D;for(let W=0;W<F.count;W++){let Q=W*E;d===!0&&(r.fromBufferAttribute(F,W),w[N+Q+0]=r.x,w[N+Q+1]=r.y,w[N+Q+2]=r.z,w[N+Q+3]=0),g===!0&&(r.fromBufferAttribute(G,W),w[N+Q+4]=r.x,w[N+Q+5]=r.y,w[N+Q+6]=r.z,w[N+Q+7]=0),x===!0&&(r.fromBufferAttribute(k,W),w[N+Q+8]=r.x,w[N+Q+9]=r.y,w[N+Q+10]=r.z,w[N+Q+11]=k.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new Ze(v,M)},i.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Cw(n,e,t,i,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Pw={[Of]:"LINEAR_TONE_MAPPING",[Uf]:"REINHARD_TONE_MAPPING",[Ff]:"CINEON_TONE_MAPPING",[Do]:"ACES_FILMIC_TONE_MAPPING",[kf]:"AGX_TONE_MAPPING",[zf]:"NEUTRAL_TONE_MAPPING",[Bf]:"CUSTOM_TONE_MAPPING"};function Iw(n,e,t,i,r,s){let o=new on(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Bt;u.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let h=new Lc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pt(u,h),d=new Ai(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,b=null,S=[],v=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let y=0;y<S.length;y++){let E=S[y];E.setSize&&E.setSize(M,w)}},this.setEffects=function(M){S=M,v=S.length>0&&S[0].isRenderPass===!0;let w=o.width,y=o.height;S.length>0&&a===null&&(a=new on(w,y,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new on(w,y,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));let E=r===!0&&S.some(L=>L.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&c===null&&(c=new wr(w,y),s===!0&&(c.format=Pr,c.type=Rs)),o.dispose(),o.depthTexture=E?c:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let L=0;L<S.length;L++){let D=S[L];D.setSize&&D.setSize(w,y),E&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(M,w){if(m||M.toneMapping===di&&S.length===0)return!1;if(b=w,w!==null){let y=w.width,E=w.height;(o.width!==y||o.height!==E)&&this.setSize(y,E)}return v===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=di,!0},this.hasRenderPass=function(){return v},this.end=function(M,w){M.toneMapping=p,m=!0;let y=o,E=a;for(let L=0;L<S.length;L++){let D=S[L];D.enabled!==!1&&(D.render(M,E,y,w),D.needsSwap!==!1&&(y=E,E=E===a?l:a))}if(g!==M.outputColorSpace||x!==M.toneMapping){g=M.outputColorSpace,x=M.toneMapping,h.defines={},xt.getTransfer(g)===It&&(h.defines.SRGB_TRANSFER="");let L=Pw[x];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(b),M.render(f,d),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var M0=new hn,S0=new wr(1,1),w0=new Ra(1),E0=new ya,T0=new Rc,A0=new Aa,t0=[],n0=[],i0=new Float32Array(16),r0=new Float32Array(9),s0=new Float32Array(4);function zo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=t0[r];if(s===void 0&&(s=new Float32Array(r),t0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ou(n,e){let t=n0[e];t===void 0&&(t=new Int32Array(e),n0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Lw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Dw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function Nw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function Ow(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function Uw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;s0.set(i),n.uniformMatrix2fv(this.addr,!1,s0),pn(t,i)}}function Fw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;r0.set(i),n.uniformMatrix3fv(this.addr,!1,r0),pn(t,i)}}function Bw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;i0.set(i),n.uniformMatrix4fv(this.addr,!1,i0),pn(t,i)}}function kw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function Hw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function Vw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function Gw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ww(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function Xw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function qw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function Uu(n){return n.version===0&&(n.compareFunction=jf,n.needsUpdate=!0),n}function $w(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Uu(S0):s=M0,t.setTexture2D(e||s,r)}function Yw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||T0,r)}function Zw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Uu(w0):s=A0,t.setTextureCube(e||s,r)}function Kw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||E0,r)}function jw(n){switch(n){case 5126:return Lw;case 35664:return Dw;case 35665:return Nw;case 35666:return Ow;case 35674:return Uw;case 35675:return Fw;case 35676:return Bw;case 5124:case 35670:return kw;case 35667:case 35671:return zw;case 35668:case 35672:return Hw;case 35669:case 35673:return Vw;case 5125:return Gw;case 36294:return Ww;case 36295:return Xw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return Kw}}function Jw(n,e){n.uniform1fv(this.addr,e)}function Qw(n,e){let t=zo(e,this.size,2);n.uniform2fv(this.addr,t)}function eE(n,e){let t=zo(e,this.size,3);n.uniform3fv(this.addr,t)}function tE(n,e){let t=zo(e,this.size,4);n.uniform4fv(this.addr,t)}function nE(n,e){let t=zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function iE(n,e){let t=zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rE(n,e){let t=zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sE(n,e){n.uniform1iv(this.addr,e)}function oE(n,e){n.uniform2iv(this.addr,e)}function aE(n,e){n.uniform3iv(this.addr,e)}function lE(n,e){n.uniform4iv(this.addr,e)}function cE(n,e){n.uniform1uiv(this.addr,e)}function uE(n,e){n.uniform2uiv(this.addr,e)}function hE(n,e){n.uniform3uiv(this.addr,e)}function fE(n,e){n.uniform4uiv(this.addr,e)}function dE(n,e,t){let i=this.cache,r=e.length,s=Ou(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Uu(S0):o=M0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function pE(n,e,t){let i=this.cache,r=e.length,s=Ou(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||T0,s[o])}function mE(n,e,t){let i=this.cache,r=e.length,s=Ou(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Uu(w0):o=A0;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function gE(n,e,t){let i=this.cache,r=e.length,s=Ou(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||E0,s[o])}function xE(n){switch(n){case 5126:return Jw;case 35664:return Qw;case 35665:return eE;case 35666:return tE;case 35674:return nE;case 35675:return iE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return oE;case 35668:case 35672:return aE;case 35669:case 35673:return lE;case 5125:return cE;case 36294:return uE;case 36295:return hE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return pE;case 35680:case 36300:case 36308:case 36293:return mE;case 36289:case 36303:case 36311:case 36292:return gE}}var ud=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jw(t.type)}},hd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xE(t.type)}},fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},ld=/(\w+)(\])?(\[|\.)?/g;function o0(n,e){n.seq.push(e),n.map[e.id]=e}function yE(n,e,t){let i=n.name,r=i.length;for(ld.lastIndex=0;;){let s=ld.exec(i),o=ld.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){o0(t,c===void 0?new ud(a,n,e):new hd(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new fd(a),o0(t,h)),t=h}}}var Bo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);yE(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function a0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var _E=37297,vE=0;function bE(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var l0=new ht;function ME(n){xt._getMatrix(l0,xt.workingColorSpace,n);let e=`mat3( ${l0.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function c0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+bE(n.getShaderSource(e),a)}else return s}function SE(n,e){let t=ME(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var wE={[Of]:"Linear",[Uf]:"Reinhard",[Ff]:"Cineon",[Do]:"ACESFilmic",[kf]:"AgX",[zf]:"Neutral",[Bf]:"Custom"};function EE(n,e){let t=wE[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Du=new I;function TE(){xt.getLuminanceCoefficients(Du);let n=Du.x.toFixed(4),e=Du.y.toFixed(4),t=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function RE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function rl(n){return n!==""}function u0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function h0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var PE=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(n){return n.replace(PE,IE)}function IE(n,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return dd(t)}var LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(n){return n.replace(LE,DE)}function DE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function d0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var NE={[Wa]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function OE(n){return NE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var UE={[No]:"ENVMAP_MODE_REFRACTION"};function FE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":UE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var BE={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[Ig]:"ENVMAP_BLENDING_MIX",[Lg]:"ENVMAP_BLENDING_ADD"};function kE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":BE[n.combine]||"ENVMAP_BLENDING_NONE"}function zE(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=OE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=FE(t),h=kE(t),f=AE(t),d=RE(s),g=r.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(rl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(rl).join(`
`),m.length>0&&(m+=`
`)):(x=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),m=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?gt.tonemapping_pars_fragment:"",t.toneMapping!==di?EE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,SE("linearToOutputTexel",t.outputColorSpace),TE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),o=dd(o),o=u0(o,t),o=h0(o,t),a=dd(a),a=u0(a,t),a=h0(a,t),o=f0(o),a=f0(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=p+x+o,S=p+m+a,v=a0(r,r.VERTEX_SHADER,b),M=a0(r,r.FRAGMENT_SHADER,S);r.attachShader(g,v),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(D){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(g)||"",G=r.getShaderInfoLog(v)||"",k=r.getShaderInfoLog(M)||"",N=F.trim(),W=G.trim(),Q=k.trim(),$=!0,ye=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,v,M);else{let ee=c0(r,v,"vertex"),z=c0(r,M,"fragment");ct("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+ee+`
`+z)}else N!==""?it("WebGLProgram: Program Info Log:",N):(W===""||Q==="")&&(ye=!1);ye&&(D.diagnostics={runnable:$,programLog:N,vertexShader:{log:W,prefix:x},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(v),r.deleteShader(M),y=new Bo(r,g),E=CE(r,g)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(g,_E)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=M,this}var HE=0,pd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new md(e),t.set(e,i)),i}},md=class{constructor(e){this.id=HE++,this.code=e,this.usedTimes=0}};function VE(n){return n===ts||n===Ja||n===Qa}function GE(n,e,t,i,r,s){let o=new Mo,a=new pd,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,E,L,D,F,G){let k=D.fog,N=F.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,$=e.get(y.envMap||W,Q),ye=f[y.type],ee=i.precision;y.precision!==null&&(ee=i.getMaxPrecision(y.precision),ee!==y.precision&&it("WebGLProgram.getParameters:",y.precision,"not supported, using",ee,"instead."));let z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=z!==void 0?z.length:0,Se=0;N.morphAttributes.position!==void 0&&(Se=1),N.morphAttributes.normal!==void 0&&(Se=2),N.morphAttributes.color!==void 0&&(Se=3);let Ie,K,me,re;if(ye){let Pe=Xn[ye];Ie=Pe.vertexShader,K=Pe.fragmentShader}else{Ie=y.vertexShader,K=y.fragmentShader;let Pe=a.getVertexShaderStage(y),dt=a.getFragmentShaderStage(y);a.update(y,Pe,dt),me=Pe.id,re=dt.id}let H=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),Ee=F.isInstancedMesh===!0,Ye=F.isBatchedMesh===!0,Ne=!!y.map,qe=!!y.matcap,he=!!$,Ae=he&&$.isPMREMTexture===!0,ze=!!y.aoMap,He=!!y.lightMap,Ke=!!y.bumpMap&&y.wireframe===!1,Ge=!!y.normalMap,ot=!!y.displacementMap,ne=!!y.emissiveMap,Ue=!!y.metalnessMap,je=!!y.roughnessMap,ge=y.anisotropy>0,A=y.clearcoat>0,te=y.diffuseRoughness>0,Y=y.dispersion>0,Te=y.retroreflectivity>0,q=y.iridescence>0,xe=y.sheen>0,ve=y.transmission>0,Re=ge&&!!y.anisotropyMap,P=A&&!!y.clearcoatMap,T=A&&!!y.clearcoatNormalMap,X=A&&!!y.clearcoatRoughnessMap,_e=te&&!!y.diffuseRoughnessMap,de=q&&!!y.iridescenceMap,ue=q&&!!y.iridescenceThicknessMap,be=xe&&!!y.sheenColorMap,ae=xe&&!!y.sheenRoughnessMap,le=!!y.specularMap,Ce=!!y.specularColorMap,B=!!y.specularIntensityMap,pe=ve&&!!y.transmissionMap,fe=ve&&!!y.thicknessMap,Fe=!!y.gradientMap,Le=!!y.alphaMap,Oe=y.alphaTest>0,Be=!!y.alphaHash,st=!!y.extensions,Z=di;y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Z=n.toneMapping);let De=Ae?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,rt={shaderID:ye,shaderType:y.type,shaderName:y.name,vertexShader:Ie,fragmentShader:K,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:ee,batching:Ye,batchingColor:Ye&&F._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,instancingMorph:Ee&&F.morphTexture!==null,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:qe,envMap:he,envMapMode:he&&$.mapping,envMapPMREM:Ae,envMapMaxLod:Ae?De.length-1:null,envMapSize:Ae?De[0].width:null,aoMap:ze,lightMap:He,bumpMap:Ke,normalMap:Ge,displacementMap:ot,emissiveMap:ne,normalMapObjectSpace:Ge&&y.normalMapType===Ug,normalMapTangentSpace:Ge&&y.normalMapType===tl,packedNormalMap:Ge&&y.normalMapType===tl&&VE(y.normalMap.format),metalnessMap:Ue,roughnessMap:je,anisotropy:ge,anisotropyMap:Re,clearcoat:A,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:X,diffuseRoughness:te,diffuseRoughnessMap:_e,dispersion:Y,retroreflection:Te,iridescence:q,iridescenceMap:de,iridescenceThicknessMap:ue,sheen:xe,sheenColorMap:be,sheenRoughnessMap:ae,specularMap:le,specularColorMap:Ce,specularIntensityMap:B,transmission:ve,transmissionMap:pe,thicknessMap:fe,gradientMap:Fe,opaque:y.transparent===!1&&y.blending===Xi&&y.alphaToCoverage===!1,alphaMap:Le,alphaTest:Oe,alphaHash:Be,combine:y.combine,mapUv:Ne&&d(y.map.channel),aoMapUv:ze&&d(y.aoMap.channel),lightMapUv:He&&d(y.lightMap.channel),bumpMapUv:Ke&&d(y.bumpMap.channel),normalMapUv:Ge&&d(y.normalMap.channel),displacementMapUv:ot&&d(y.displacementMap.channel),emissiveMapUv:ne&&d(y.emissiveMap.channel),metalnessMapUv:Ue&&d(y.metalnessMap.channel),roughnessMapUv:je&&d(y.roughnessMap.channel),anisotropyMapUv:Re&&d(y.anisotropyMap.channel),clearcoatMapUv:P&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:de&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:ae&&d(y.sheenRoughnessMap.channel),specularMapUv:le&&d(y.specularMap.channel),specularColorMapUv:Ce&&d(y.specularColorMap.channel),specularIntensityMapUv:B&&d(y.specularIntensityMap.channel),transmissionMapUv:pe&&d(y.transmissionMap.channel),thicknessMapUv:fe&&d(y.thicknessMap.channel),alphaMapUv:Le&&d(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ge||ge),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Ne||Le),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&Ge===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:J,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Se,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Z,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===It,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&xt.getTransfer(y.emissiveMap.colorSpace)===It,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function x(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(E,y),p(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapPMREM),y.push(E.envMapMaxLod),y.push(E.envMapSize),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.diffuseRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.numLightProbeGrids),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function p(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function b(y){let E=f[y.type],L;if(E){let D=Xn[E];L=nl.clone(D.uniforms)}else L=y.uniforms;return L}function S(y,E){let L=u.get(E);return L!==void 0?++L.usedTimes:(L=new zE(n,E,y,r),c.push(L),u.set(E,L)),L}function v(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:b,acquireProgram:S,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:w}}function WE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function XE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function p0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function m0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,x,m,p){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},n[e]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=g,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=m,b.group=p),e++,b}function l(f,d,g,x,m,p,b){b.reversedDepth===!0&&(m=-m);let S=a(f,d,g,x,m,p);g.transmission>0?i.push(S):g.transparent===!0?r.push(S):t.push(S)}function c(f,d,g,x,m,p){let b=a(f,d,g,x,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function u(f,d){t.length>1&&t.sort(f||XE),i.length>1&&i.sort(d||p0),r.length>1&&r.sort(d||p0)}function h(){for(let f=e,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function qE(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new m0,n.set(i,[o])):r>=s.length?(o=new m0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $E(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Je};break;case"SpotLight":t={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function YE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ZE=0;function KE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jE(n){let e=new $E,t=YE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let r=new I,s=new lt,o=new lt;function a(c){let u=0,h=0,f=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,b=0,S=0,v=0,M=0,w=0,y=0,E=0,L=0,D=0;c.sort(KE);for(let G=0,k=c.length;G<k;G++){let N=c[G],W=N.color,Q=N.intensity,$=N.distance,ye=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ts?ye=N.shadow.map.texture:ye=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=W.r*Q,h+=W.g*Q,f+=W.b*Q;else if(N.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(N.sh.coefficients[ee],Q);D++}else if(N.isSunLight){let ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let z=N.shadow,j=t.get(N);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=ye;let Se=z.getViewportCount();for(let Ie=0;Ie<Se;Ie++)i.sunShadowMatrix[x+Ie]=z.getMatrix(Ie),i.sunShadowCascade[x+Ie]=z._cascadeData[Ie];x+=Se,g++}i.sun[d]=ee,d++}else if(N.isDirectionalLight){let ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let z=N.shadow,j=t.get(N);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=ye,i.directionalShadowMatrix[m]=N.shadow.matrix,M++}i.directional[m]=ee,m++}else if(N.isSpotLight){let ee=e.get(N);ee.position.setFromMatrixPosition(N.matrixWorld),ee.color.copy(W).multiplyScalar(Q),ee.distance=$,ee.coneCos=Math.cos(N.angle),ee.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ee.decay=N.decay,i.spot[b]=ee;let z=N.shadow;if(N.map&&(i.spotLightMap[E]=N.map,E++,z.updateMatrices(N),N.castShadow&&L++),i.spotLightMatrix[b]=z.matrix,N.castShadow){let j=t.get(N);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.spotShadow[b]=j,i.spotShadowMap[b]=ye,y++}b++}else if(N.isRectAreaLight){let ee=e.get(N);ee.color.copy(W).multiplyScalar(Q),ee.halfWidth.set(N.width*.5,0,0),ee.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=ee,S++}else if(N.isPointLight){let ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),ee.distance=N.distance,ee.decay=N.decay,N.castShadow){let z=N.shadow,j=t.get(N);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=ye,i.pointShadowMatrix[p]=N.shadow.matrix,w++}i.point[p]=ee,p++}else if(N.isHemisphereLight){let ee=e.get(N);ee.skyColor.copy(N.color).multiplyScalar(Q),ee.groundColor.copy(N.groundColor).multiplyScalar(Q),i.hemi[v]=ee,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let F=i.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==b||F.rectAreaLength!==S||F.hemiLength!==v||F.numSunShadows!==g||F.numDirectionalShadows!==M||F.numPointShadows!==w||F.numSpotShadows!==y||F.numSpotMaps!==E||F.numLightProbes!==D)&&(i.sun.length=d,i.directional.length=m,i.spot.length=b,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+E-L,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,F.sunLength=d,F.directionalLength=m,F.pointLength=p,F.spotLength=b,F.rectAreaLength=S,F.hemiLength=v,F.numSunShadows=g,F.numDirectionalShadows=M,F.numPointShadows=w,F.numSpotShadows=y,F.numSpotMaps=E,F.numLightProbes=D,i.version=ZE++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let b=0,S=c.length;b<S;b++){let v=c[b];if(v.isSunLight){let M=i.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function g0(n){let e=new jE(n),t=[],i=[],r=[];function s(h){u.camera=h,t.length=0,i.length=0,r.length=0}function o(h){h.isLightProbeGrid?r.push(h):t.push(h)}function a(h){i.push(h)}function l(){e.setup(t),r.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function JE(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new g0(n),e.set(r,[a])):s>=o.length?(a=new g0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var QE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
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
}`,t1=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],n1=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],x0=new lt,il=new I,cd=new I;function i1(n,e,t){let i=new $r,r=new Ze,s=new Ze,o=new wt,a=new Dc,l=new Nc,c={},u=t.maxTextureSize,h={[ni]:Sn,[Sn]:ni,[Dt]:Dt},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:QE,fragmentShader:e1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let p=this.type;this.render=function(w,y,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===gg&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wa);let L=n.getRenderTarget(),D=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),G=n.state;G.setBlending(fi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let k=p!==this.type;k&&y.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=w.length;N<W;N++){let Q=w[N],$=Q.shadow;if($===void 0){it("WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let ye=$.getFrameExtents();r.multiply(ye),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ye.x),r.x=s.x*ye.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ye.y),r.y=s.y*ye.y,$.mapSize.y=s.y));let ee=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=ee,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Io){if(Q.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new on(r.x,r.y,{format:ts,type:Zn,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),$.map.texture.name=Q.name+".shadowMap",$.map.depthTexture=new wr(r.x,r.y,Wn),$.map.depthTexture.name=Q.name+".shadowMapDepth",$.map.depthTexture.format=vr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=$t,$.map.depthTexture.magFilter=$t}else Q.isPointLight?($.map=new sl(r.x),$.map.depthTexture=new Ra(r.x,Ci)):($.map=new on(r.x,r.y),$.map.depthTexture=new wr(r.x,r.y,Ci)),$.map.depthTexture.name=Q.name+".shadowMap",$.map.depthTexture.format=vr,this.type===Wa?($.map.depthTexture.compareFunction=ee?Kf:Zf,$.map.depthTexture.minFilter=Yt,$.map.depthTexture.magFilter=Yt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=$t,$.map.depthTexture.magFilter=$t);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);let z=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Q.isPointLight!==!0&&$.updateMatrices(Q,E);let j=($.camera.layers.mask&4294967294)!==0?$.camera.layers:E.layers;for(let Se=0;Se<z;Se++){let Ie=$.getCamera(Se);if(Q.isPointLight){let K=$.camera,me=$.matrix,re=Q.distance||K.far;re!==K.far&&(K.far=re,K.updateProjectionMatrix()),il.setFromMatrixPosition(Q.matrixWorld),K.position.copy(il),cd.copy(K.position),cd.add(t1[Se]),K.up.copy(n1[Se]),K.lookAt(cd),K.updateMatrixWorld(),me.makeTranslation(-il.x,-il.y,-il.z),x0.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),$._frustum.setFromProjectionMatrix(x0,K.coordinateSystem,K.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,Se),n.clear();else{Se===0&&(n.setRenderTarget($.map),n.clear());let K=$.getViewport(Se);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),G.viewport(o)}i=$.getFrustum(Se),v(y,E,Ie,Q,j,this.type)}$.isPointLightShadow!==!0&&this.type===Io&&b($,E),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,D,F)};function b(w,y){let E=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new on(r.x,r.y,{format:ts,type:Zn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(y,null,E,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(y,null,E,d,x,null)}function S(w,y,E,L){let D=null,F=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)D=F;else if(D=E.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let G=D.uuid,k=y.uuid,N=c[G];N===void 0&&(N={},c[G]=N);let W=N[k];W===void 0&&(W=D.clone(),N[k]=W,y.addEventListener("dispose",M)),D=W}if(D.visible=y.visible,D.wireframe=y.wireframe,L===Io?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:h[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,E.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let G=n.properties.get(D);G.light=E}return D}function v(w,y,E,L,D,F){if(w.visible===!1)return;if(w.layers.test(D)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===Io)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let N=e.update(w),W=w.material;if(Array.isArray(W)){let Q=N.groups;for(let $=0,ye=Q.length;$<ye;$++){let ee=Q[$],z=W[ee.materialIndex];if(z&&z.visible){let j=S(w,z,L,F);w.onBeforeShadow(n,w,y,E,N,j,ee),n.renderBufferDirect(E,null,N,j,w,ee),w.onAfterShadow(n,w,y,E,N,j,ee)}}}else if(W.visible){let Q=S(w,W,L,F);w.onBeforeShadow(n,w,y,E,N,Q,null),n.renderBufferDirect(E,null,N,Q,w,null),w.onAfterShadow(n,w,y,E,N,Q,null)}}let k=w.children;for(let N=0,W=k.length;N<W;N++)v(k[N],y,E,L,D,F)}function M(w){w.target.removeEventListener("dispose",M);for(let E in c){let L=c[E],D=w.target.uuid;D in L&&(L[D].dispose(),delete L[D])}}}function r1(n,e){function t(){let B=!1,pe=new wt,fe=null,Fe=new wt(0,0,0,0);return{setMask:function(Le){fe!==Le&&!B&&(n.colorMask(Le,Le,Le,Le),fe=Le)},setLocked:function(Le){B=Le},setClear:function(Le,Oe,Be,st,Z){Z===!0&&(Le*=st,Oe*=st,Be*=st),pe.set(Le,Oe,Be,st),Fe.equals(pe)===!1&&(n.clearColor(Le,Oe,Be,st),Fe.copy(pe))},reset:function(){B=!1,fe=null,Fe.set(-1,0,0,0)}}}function i(){let B=!1,pe=!1,fe=null,Fe=null,Le=null;return{setReversed:function(Oe){if(pe!==Oe){let Be=e.get("EXT_clip_control");Oe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),pe=Oe;let st=Le;Le=null,this.setClear(st)}},getReversed:function(){return pe},setTest:function(Oe){Oe?J(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(Oe){fe!==Oe&&!B&&(n.depthMask(Oe),fe=Oe)},setFunc:function(Oe){if(pe&&(Oe=qg[Oe]),Fe!==Oe){switch(Oe){case _c:n.depthFunc(n.NEVER);break;case vc:n.depthFunc(n.ALWAYS);break;case bc:n.depthFunc(n.LESS);break;case go:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case Sc:n.depthFunc(n.GEQUAL);break;case wc:n.depthFunc(n.GREATER);break;case Ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=Oe}},setLocked:function(Oe){B=Oe},setClear:function(Oe){Le!==Oe&&(Le=Oe,pe&&(Oe=1-Oe),n.clearDepth(Oe))},reset:function(){B=!1,fe=null,Fe=null,Le=null,pe=!1}}}function r(){let B=!1,pe=null,fe=null,Fe=null,Le=null,Oe=null,Be=null,st=null,Z=null;return{setTest:function(De){B||(De?J(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(De){pe!==De&&!B&&(n.stencilMask(De),pe=De)},setFunc:function(De,rt,Pe){(fe!==De||Fe!==rt||Le!==Pe)&&(n.stencilFunc(De,rt,Pe),fe=De,Fe=rt,Le=Pe)},setOp:function(De,rt,Pe){(Oe!==De||Be!==rt||st!==Pe)&&(n.stencilOp(De,rt,Pe),Oe=De,Be=rt,st=Pe)},setLocked:function(De){B=De},setClear:function(De){Z!==De&&(n.clearStencil(De),Z=De)},reset:function(){B=!1,pe=null,fe=null,Fe=null,Le=null,Oe=null,Be=null,st=null,Z=null}}}let s=new t,o=new i,a=new r,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,b=null,S=null,v=null,M=null,w=null,y=null,E=new Je(0,0,0),L=0,D=!1,F=null,G=null,k=null,N=null,W=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ye=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(ee)[1]),$=ye>=1):ee.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),$=ye>=2);let z=null,j={},Se=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),K=new wt().fromArray(Se),me=new wt().fromArray(Ie);function re(B,pe,fe,Fe){let Le=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(B,Oe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<fe;Be++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(pe+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Oe}let H={};H[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(go),Ke(!1),Ge(If),J(n.CULL_FACE),ze(fi);function J(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Ee(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Ye(B,pe){return f[B]!==pe?(n.bindFramebuffer(B,pe),f[B]=pe,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=pe),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ne(B,pe){let fe=g,Fe=!1;if(B){fe=d.get(pe),fe===void 0&&(fe=[],d.set(pe,fe));let Le=B.textures;if(fe.length!==Le.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,Be=Le.length;Oe<Be;Oe++)fe[Oe]=n.COLOR_ATTACHMENT0+Oe;fe.length=Le.length,Fe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(fe)}function qe(B){return x!==B?(n.useProgram(B),x=B,!0):!1}let he={[Ri]:n.FUNC_ADD,[xg]:n.FUNC_SUBTRACT,[yg]:n.FUNC_REVERSE_SUBTRACT};he[_g]=n.MIN,he[vg]=n.MAX;let Ae={[Xa]:n.ZERO,[es]:n.ONE,[bg]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[Tg]:n.SRC_ALPHA_SATURATE,[wg]:n.DST_COLOR,[Sg]:n.DST_ALPHA,[Mg]:n.ONE_MINUS_SRC_COLOR,[Lo]:n.ONE_MINUS_SRC_ALPHA,[Eg]:n.ONE_MINUS_DST_COLOR,[$a]:n.ONE_MINUS_DST_ALPHA,[Ag]:n.CONSTANT_COLOR,[Rg]:n.ONE_MINUS_CONSTANT_COLOR,[Cg]:n.CONSTANT_ALPHA,[Pg]:n.ONE_MINUS_CONSTANT_ALPHA};function ze(B,pe,fe,Fe,Le,Oe,Be,st,Z,De){if(B===fi){m===!0&&(Ee(n.BLEND),m=!1);return}if(m===!1&&(J(n.BLEND),m=!0),B!==Gc){if(B!==p||De!==D){if((b!==Ri||M!==Ri)&&(n.blendEquation(n.FUNC_ADD),b=Ri,M=Ri),De)switch(B){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lf:n.blendFunc(n.ONE,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",B);break}else switch(B){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Df:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nf:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",B);break}S=null,v=null,w=null,y=null,E.set(0,0,0),L=0,p=B,D=De}return}Le=Le||pe,Oe=Oe||fe,Be=Be||Fe,(pe!==b||Le!==M)&&(n.blendEquationSeparate(he[pe],he[Le]),b=pe,M=Le),(fe!==S||Fe!==v||Oe!==w||Be!==y)&&(n.blendFuncSeparate(Ae[fe],Ae[Fe],Ae[Oe],Ae[Be]),S=fe,v=Fe,w=Oe,y=Be),(st.equals(E)===!1||Z!==L)&&(n.blendColor(st.r,st.g,st.b,Z),E.copy(st),L=Z),p=B,D=!1}function He(B,pe){B.side===Dt?Ee(n.CULL_FACE):J(n.CULL_FACE);let fe=B.side===Sn;pe&&(fe=!fe),Ke(fe),B.blending===Xi&&B.transparent===!1?ze(fi):ze(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let Fe=B.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ne(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(B){F!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),F=B)}function Ge(B){B!==pg?(J(n.CULL_FACE),B!==G&&(B===If?n.cullFace(n.BACK):B===mg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),G=B}function ot(B){B!==k&&($&&n.lineWidth(B),k=B)}function ne(B,pe,fe){B?(J(n.POLYGON_OFFSET_FILL),(N!==pe||W!==fe)&&(N=pe,W=fe,o.getReversed()&&(pe=-pe,fe=-fe),n.polygonOffset(pe,fe))):Ee(n.POLYGON_OFFSET_FILL)}function Ue(B){B?J(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function je(B){B===void 0&&(B=n.TEXTURE0+Q-1),z!==B&&(n.activeTexture(B),z=B)}function ge(B,pe,fe){fe===void 0&&(z===null?fe=n.TEXTURE0+Q-1:fe=z);let Fe=j[fe];Fe===void 0&&(Fe={type:void 0,texture:void 0},j[fe]=Fe),(Fe.type!==B||Fe.texture!==pe)&&(z!==fe&&(n.activeTexture(fe),z=fe),n.bindTexture(B,pe||H[B]),Fe.type=B,Fe.texture=pe)}function A(){let B=j[z];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function te(){try{n.compressedTexImage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function Te(){try{n.texSubImage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function q(){try{n.texSubImage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function xe(){try{n.compressedTexSubImage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function Re(){try{n.texStorage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function P(){try{n.texStorage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function T(){try{n.texImage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function X(){try{n.texImage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function _e(B){return h[B]!==void 0?h[B]:n.getParameter(B)}function de(B,pe){h[B]!==pe&&(n.pixelStorei(B,pe),h[B]=pe)}function ue(B){K.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),K.copy(B))}function be(B){me.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),me.copy(B))}function ae(B,pe){let fe=c.get(pe);fe===void 0&&(fe=new WeakMap,c.set(pe,fe));let Fe=fe.get(B);Fe===void 0&&(Fe=n.getUniformBlockIndex(pe,B.name),n.uniformBlockBinding(pe,Fe,Fe),fe.set(B,Fe))}function le(B,pe,fe){let Le=c.get(pe).get(B);l[Le]!==fe&&(n.bindBufferBase(n.UNIFORM_BUFFER,Le,fe),l[Le]=fe)}function Ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},z=null,j={},f={},l={},d=new WeakMap,g=[],x=null,m=!1,p=null,b=null,S=null,v=null,M=null,w=null,y=null,E=new Je(0,0,0),L=0,D=!1,F=null,G=null,k=null,N=null,W=null,K.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:Ee,bindFramebuffer:Ye,drawBuffers:Ne,useProgram:qe,setBlending:ze,setMaterial:He,setFlipSided:Ke,setCullFace:Ge,setLineWidth:ot,setPolygonOffset:ne,setScissorTest:Ue,activeTexture:je,bindTexture:ge,unbindTexture:A,compressedTexImage2D:te,compressedTexImage3D:Y,texImage2D:T,texImage3D:X,pixelStorei:de,getParameter:_e,updateUBOMapping:ae,uniformBlockBinding:le,texStorage2D:Re,texStorage3D:P,texSubImage2D:Te,texSubImage3D:q,compressedTexSubImage2D:xe,compressedTexSubImage3D:ve,scissor:ue,viewport:be,reset:Ce}}function s1(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap,h=new Set,f,d=new WeakMap,g=new Set,x=new FinalizationRegistry(P=>g.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,T){return m?new OffscreenCanvas(P,T):_o("canvas")}function b(P,T,X){let _e=1,de=Re(P);if((de.width>X||de.height>X)&&(_e=X/Math.max(de.width,de.height)),_e<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ue=Math.floor(_e*de.width),be=Math.floor(_e*de.height);f===void 0&&(f=p(ue,be));let ae=T?p(ue,be):f;return ae.width=ue,ae.height=be,ae.getContext("2d").drawImage(P,0,0,ue,be),it("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ue+"x"+be+")."),ae}else return"data"in P&&it("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,T,X,_e,de,ue=!1){if(P!==null){if(n[P]!==void 0)return n[P];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let be;_e&&(be=e.get("EXT_texture_norm16"),be||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=T;if(T===n.RED&&(X===n.FLOAT&&(ae=n.R32F),X===n.HALF_FLOAT&&(ae=n.R16F),X===n.UNSIGNED_BYTE&&(ae=n.R8),X===n.UNSIGNED_SHORT&&be&&(ae=be.R16_EXT),X===n.SHORT&&be&&(ae=be.R16_SNORM_EXT)),T===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ae=n.R8UI),X===n.UNSIGNED_SHORT&&(ae=n.R16UI),X===n.UNSIGNED_INT&&(ae=n.R32UI),X===n.BYTE&&(ae=n.R8I),X===n.SHORT&&(ae=n.R16I),X===n.INT&&(ae=n.R32I)),T===n.RG&&(X===n.FLOAT&&(ae=n.RG32F),X===n.HALF_FLOAT&&(ae=n.RG16F),X===n.UNSIGNED_BYTE&&(ae=n.RG8),X===n.UNSIGNED_SHORT&&be&&(ae=be.RG16_EXT),X===n.SHORT&&be&&(ae=be.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ae=n.RG8UI),X===n.UNSIGNED_SHORT&&(ae=n.RG16UI),X===n.UNSIGNED_INT&&(ae=n.RG32UI),X===n.BYTE&&(ae=n.RG8I),X===n.SHORT&&(ae=n.RG16I),X===n.INT&&(ae=n.RG32I)),T===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),X===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),X===n.UNSIGNED_INT&&(ae=n.RGB32UI),X===n.BYTE&&(ae=n.RGB8I),X===n.SHORT&&(ae=n.RGB16I),X===n.INT&&(ae=n.RGB32I)),T===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),X===n.UNSIGNED_INT&&(ae=n.RGBA32UI),X===n.BYTE&&(ae=n.RGBA8I),X===n.SHORT&&(ae=n.RGBA16I),X===n.INT&&(ae=n.RGBA32I)),T===n.RGB&&(X===n.UNSIGNED_SHORT&&be&&(ae=be.RGB16_EXT),X===n.SHORT&&be&&(ae=be.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),T===n.RGBA){let le=ue?ga:xt.getTransfer(de);X===n.FLOAT&&(ae=n.RGBA32F),X===n.HALF_FLOAT&&(ae=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ae=le===It?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&be&&(ae=be.RGBA16_EXT),X===n.SHORT&&be&&(ae=be.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(P,T){let X;return P?T===null||T===Ci||T===Rs?X=n.DEPTH24_STENCIL8:T===Wn?X=n.DEPTH32F_STENCIL8:T===Uo&&(X=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ci||T===Rs?X=n.DEPTH_COMPONENT24:T===Wn?X=n.DEPTH_COMPONENT32F:T===Uo&&(X=n.DEPTH_COMPONENT16),X}function E(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==$t&&P.minFilter!==Yt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){let T=new WeakRef(P);i.get(P).__ref=T,g.add(T),x.register(P,T,T)}function D(P){let T=i.get(P).__ref;T!==void 0&&(g.delete(T),x.unregister(T))}function F(P){k(P.target)}function G(P){N(P.target)}function k(P){P.removeEventListener("dispose",F),D(P),Q(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function N(P){P.removeEventListener("dispose",G),D(P),ye(P)}function W(){for(let P of g){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):k(T))}g.clear(),h.clear()}function Q(P){let T=i.get(P);if(T.__webglInit===void 0)return;let X=P.source,_e=d.get(X);if(_e){let de=_e[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&$(P),Object.keys(_e).length===0&&d.delete(X)}i.remove(P)}function $(P){let T=i.get(P);n.deleteTexture(T.__webglTexture);let X=P.source,_e=d.get(X);delete _e[T.__cacheKey],o.memory.textures--}function ye(P){let T=i.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let X=P.depthTexture;if(X&&X.renderTarget===P&&k(X),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let ue=0;ue<T.__webglFramebuffer[de].length;ue++)n.deleteFramebuffer(T.__webglFramebuffer[de][ue]);else n.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)n.deleteFramebuffer(T.__webglFramebuffer[de]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let _e=P.textures;for(let de=0,ue=_e.length;de<ue;de++){let be=i.get(_e[de]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(_e[de])}i.remove(P)}let ee=0;function z(){ee=0}function j(){return ee}function Se(P){ee=P}function Ie(){let P=ee;return P>=r.maxTextures&&it("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),ee+=1,P}function K(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function me(P,T){let X=i.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let _e=P.image;if(_e===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{He(X,P,T);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function re(P,T){let X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){He(X,P,T);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function H(P,T){let X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){He(X,P,T);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function J(P,T){let X=i.get(P);if(P.version>0&&X.__version!==P.version){Ke(X,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}let Ee={[Ei]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[xo]:n.MIRRORED_REPEAT},Ye={[$t]:n.NEAREST,[$c]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Oo]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},Ne={[Bg]:n.NEVER,[jf]:n.ALWAYS,[kg]:n.LESS,[Zf]:n.LEQUAL,[zg]:n.EQUAL,[Kf]:n.GEQUAL,[Hg]:n.GREATER,[Vg]:n.NOTEQUAL};function qe(P,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Yt||T.magFilter===Oo||T.magFilter===As||T.magFilter===pi||T.minFilter===Yt||T.minFilter===Oo||T.minFilter===As||T.minFilter===pi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Ee[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Ee[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Ee[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Ye[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Ye[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ne[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===$t||T.minFilter!==As&&T.minFilter!==pi||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function he(P,T){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",F),L(T));let _e=T.source,de=d.get(_e);de===void 0&&(de={},d.set(_e,de));let ue=K(T);if(ue!==P.__cacheKey){de[ue]===void 0&&(de[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),de[ue].usedTimes++;let be=de[P.__cacheKey];be!==void 0&&(de[P.__cacheKey].usedTimes--,be.usedTimes===0&&$(T)),P.__cacheKey=ue,P.__webglTexture=de[ue].texture}return X}function Ae(P,T,X){return Math.floor(Math.floor(P/X)/T)}function ze(P,T,X,_e){let ue=P.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,X,_e,T.data);else{ue.sort((B,pe)=>B.start-pe.start);let be=0;for(let B=1;B<ue.length;B++){let pe=ue[be],fe=ue[B],Fe=pe.start+pe.count,Le=Ae(fe.start,T.width,4),Oe=Ae(pe.start,T.width,4);fe.start<=Fe+1&&Le===Oe&&Ae(fe.start+fe.count-1,T.width,4)===Le?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++be,ue[be]=fe)}ue.length=be+1;let ae=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let B=0,pe=ue.length;B<pe;B++){let fe=ue[B],Fe=Math.floor(fe.start/4),Le=Math.ceil(fe.count/4),Oe=Fe%T.width,Be=Math.floor(Fe/T.width),st=Le,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(n.TEXTURE_2D,0,Oe,Be,st,Z,X,_e,T.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ae),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function He(P,T,X){let _e=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=n.TEXTURE_3D);let de=he(P,T),ue=T.source;t.bindTexture(_e,P.__webglTexture,n.TEXTURE0+X);let be=i.get(ue);if(ue.version!==be.__version||de===!0){if(t.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Z=xt.getPrimaries(xt.workingColorSpace),De=T.colorSpace===Pi?null:xt.getPrimaries(T.colorSpace),rt=T.colorSpace===Pi||Z===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let le=b(T.image,!1,r.maxTextureSize);le=ve(T,le);let Ce=s.convert(T.format,T.colorSpace),B=s.convert(T.type),pe=w(T.internalFormat,Ce,B,T.normalized,T.colorSpace,T.isVideoTexture);qe(_e,T);let fe,Fe=T.mipmaps,Le=T.isVideoTexture!==!0,Oe=be.__version===void 0||de===!0,Be=ue.dataReady,st=E(T,le);if(T.isDepthTexture)pe=y(T.format===Pr,T.type),Oe&&(Le?t.texStorage2D(n.TEXTURE_2D,1,pe,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,pe,le.width,le.height,0,Ce,B,null));else if(T.isDataTexture)if(Fe.length>0){Le&&Oe&&t.texStorage2D(n.TEXTURE_2D,st,pe,Fe[0].width,Fe[0].height);for(let Z=0,De=Fe.length;Z<De;Z++)fe=Fe[Z],Le?Be&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,fe.width,fe.height,Ce,B,fe.data):t.texImage2D(n.TEXTURE_2D,Z,pe,fe.width,fe.height,0,Ce,B,fe.data);T.generateMipmaps=!1}else Le?(Oe&&t.texStorage2D(n.TEXTURE_2D,st,pe,le.width,le.height),Be&&ze(T,le,Ce,B)):t.texImage2D(n.TEXTURE_2D,0,pe,le.width,le.height,0,Ce,B,le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Le&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,pe,Fe[0].width,Fe[0].height,le.depth);for(let Z=0,De=Fe.length;Z<De;Z++)if(fe=Fe[Z],T.format!==wn)if(Ce!==null)if(Le){if(Be)if(T.layerUpdates.size>0){let rt=ad(fe.width,fe.height,T.format,T.type);for(let Pe of T.layerUpdates){let dt=fe.data.subarray(Pe*rt/fe.data.BYTES_PER_ELEMENT,(Pe+1)*rt/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Pe,fe.width,fe.height,1,Ce,dt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,fe.width,fe.height,le.depth,Ce,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,pe,fe.width,fe.height,le.depth,0,fe.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,fe.width,fe.height,le.depth,Ce,B,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,pe,fe.width,fe.height,le.depth,0,Ce,B,fe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Le&&Oe&&t.texStorage2D(n.TEXTURE_2D,st,pe,Fe[0].width,Fe[0].height);for(let Z=0,De=Fe.length;Z<De;Z++)fe=Fe[Z],T.format!==wn?Ce!==null?Le?Be&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,fe.width,fe.height,Ce,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,pe,fe.width,fe.height,0,fe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?Be&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,fe.width,fe.height,Ce,B,fe.data):t.texImage2D(n.TEXTURE_2D,Z,pe,fe.width,fe.height,0,Ce,B,fe.data)}else if(T.isDataArrayTexture)if(Le){if(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,pe,le.width,le.height,le.depth),Be)if(T.layerUpdates.size>0){let Z=ad(le.width,le.height,T.format,T.type);for(let De of T.layerUpdates){let rt=le.data.subarray(De*Z/le.data.BYTES_PER_ELEMENT,(De+1)*Z/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,De,le.width,le.height,1,Ce,B,rt)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ce,B,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,le.width,le.height,le.depth,0,Ce,B,le.data);else if(T.isData3DTexture)Le?(Oe&&t.texStorage3D(n.TEXTURE_3D,st,pe,le.width,le.height,le.depth),Be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ce,B,le.data)):t.texImage3D(n.TEXTURE_3D,0,pe,le.width,le.height,le.depth,0,Ce,B,le.data);else if(T.isFramebufferTexture){if(Oe)if(Le)t.texStorage2D(n.TEXTURE_2D,st,pe,le.width,le.height);else{let Z=le.width,De=le.height;for(let rt=0;rt<st;rt++)t.texImage2D(n.TEXTURE_2D,rt,pe,Z,De,0,Ce,B,null),Z>>=1,De>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),le.parentNode!==Z){Z.appendChild(le),h.add(T),Z.onpaint=De=>{let rt=De.changedElements;for(let Pe of h)rt.includes(Pe.image)&&(Pe.needsUpdate=!0)},Z.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,le);else{let rt=n.RGBA,Pe=n.RGBA,dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,rt,Pe,dt,le)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Le&&Oe){let Z=Re(Fe[0]);t.texStorage2D(n.TEXTURE_2D,st,pe,Z.width,Z.height)}for(let Z=0,De=Fe.length;Z<De;Z++)fe=Fe[Z],Le?Be&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ce,B,fe):t.texImage2D(n.TEXTURE_2D,Z,pe,Ce,B,fe);T.generateMipmaps=!1}else if(Le){if(Oe){let Z=Re(le);t.texStorage2D(n.TEXTURE_2D,st,pe,Z.width,Z.height)}Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,B,le)}else t.texImage2D(n.TEXTURE_2D,0,pe,Ce,B,le);S(T)&&T.mipmapsAutoUpdate===!0&&v(_e),be.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ke(P,T,X){if(T.image.length!==6)return;let _e=he(P,T),de=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+X);let ue=i.get(de);if(de.version!==ue.__version||_e===!0){t.activeTexture(n.TEXTURE0+X);let be=xt.getPrimaries(xt.workingColorSpace),ae=T.colorSpace===Pi?null:xt.getPrimaries(T.colorSpace),le=T.colorSpace===Pi||be===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Ce=T.isCompressedTexture||T.image[0].isCompressedTexture,B=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let Pe=0;Pe<6;Pe++)!Ce&&!B?pe[Pe]=b(T.image[Pe],!0,r.maxCubemapSize):pe[Pe]=B?T.image[Pe].image:T.image[Pe],pe[Pe]=ve(T,pe[Pe]);let fe=pe[0],Fe=s.convert(T.format,T.colorSpace),Le=s.convert(T.type),Oe=w(T.internalFormat,Fe,Le,T.normalized,T.colorSpace),Be=T.isVideoTexture!==!0,st=ue.__version===void 0||_e===!0,Z=de.dataReady,De=E(T,fe);qe(n.TEXTURE_CUBE_MAP,T);let rt;if(T.isDepthTexture){if(Oe=y(T.format===Pr,T.type),st)if(Be)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Oe,fe.width,fe.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Oe,fe.width,fe.height,0,Fe,Le,null)}else if(Ce){Be&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Oe,fe.width,fe.height);for(let Pe=0;Pe<6;Pe++){rt=pe[Pe].mipmaps;for(let dt=0;dt<rt.length;dt++){let zt=rt[dt];T.format!==wn?Fe!==null?Be?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt,0,0,zt.width,zt.height,Fe,zt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt,Oe,zt.width,zt.height,0,zt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt,0,0,zt.width,zt.height,Fe,Le,zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt,Oe,zt.width,zt.height,0,Fe,Le,zt.data)}}}else{if(rt=T.mipmaps,Be&&st){rt.length>0&&De++;let Pe=Re(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Oe,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(B){Be?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,pe[Pe].width,pe[Pe].height,Fe,Le,pe[Pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Oe,pe[Pe].width,pe[Pe].height,0,Fe,Le,pe[Pe].data);for(let dt=0;dt<rt.length;dt++){let jt=rt[dt].image[Pe].image;Be?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt+1,0,0,jt.width,jt.height,Fe,Le,jt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt+1,Oe,jt.width,jt.height,0,Fe,Le,jt.data)}}else{Be?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Fe,Le,pe[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Oe,Fe,Le,pe[Pe]);for(let dt=0;dt<rt.length;dt++){let zt=rt[dt];Be?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt+1,0,0,Fe,Le,zt.image[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt+1,Oe,Fe,Le,zt.image[Pe])}}}S(T)&&T.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),ue.__version=de.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ge(P,T,X,_e,de,ue){let be=s.convert(X.format,X.colorSpace),ae=s.convert(X.type),le=w(X.internalFormat,be,ae,X.normalized,X.colorSpace),Ce=i.get(T),B=i.get(X);if(B.__renderTarget=T,!Ce.__hasExternalTextures){let pe=Math.max(1,T.width>>ue),fe=Math.max(1,T.height>>ue);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,ue,le,pe,fe,T.depth,0,be,ae,null):t.texImage2D(de,ue,le,pe,fe,0,be,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),q(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,de,B.__webglTexture,0,Te(T)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,de,B.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(P,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){let _e=T.depthTexture,de=_e&&_e.isDepthTexture?_e.type:null,ue=y(T.stencilBuffer,de),be=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;q(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(T),ue,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(T),ue,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ue,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,P)}else{let _e=T.textures;for(let de=0;de<_e.length;de++){let ue=_e[de],be=s.convert(ue.format,ue.colorSpace),ae=s.convert(ue.type),le=w(ue.internalFormat,be,ae,ue.normalized,ue.colorSpace);q(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(T),le,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(T),le,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,le,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(P,T,X){let _e=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=i.get(T.depthTexture);de.__renderTarget=T;let ue=_e?T.depthTexture.image[0]:T.depthTexture.image;(!de.__webglTexture||ue.width!==T.width||ue.height!==T.height)&&(ue.width=T.width,ue.height=T.height,T.depthTexture.needsUpdate=!0),_e?J(T.depthTexture,0):me(T.depthTexture,0);let be=de.__webglTexture,ae=Te(T),le=_e?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,Ce=T.depthTexture.format===Pr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===vr)q(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,le,be,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,le,be,0);else if(T.depthTexture.format===Pr)q(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,le,be,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,le,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(P){let T=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let _e=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){let de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",de)};_e.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=_e}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(X)for(let _e=0;_e<6;_e++)ne(T.__webglFramebuffer[_e],P,_e);else P.texture.mipmaps.length>0?ne(T.__webglFramebuffer[0],P,0):ne(T.__webglFramebuffer,P,0);else if(X){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=n.createRenderbuffer(),ot(T.__webglDepthbuffer[_e],P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[_e];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ue)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ot(T.__webglDepthbuffer,P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ue)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(P,T,X){let _e=i.get(P);T!==void 0&&Ge(_e.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ue(P)}function ge(P){let T=P.texture,X=i.get(P),_e=i.get(T);P.addEventListener("dispose",G),L(P);let de=P.textures,ue=P.isWebGLCubeRenderTarget===!0,be=de.length>1;if(be||(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=T.version,o.memory.textures++),ue){X.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(T.mipmaps.length>0){X.__webglFramebuffer[ae]=[];for(let le=0;le<T.mipmaps.length;le++)X.__webglFramebuffer[ae][le]=n.createFramebuffer()}else X.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ae=0;ae<T.mipmaps.length;ae++)X.__webglFramebuffer[ae]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(be)for(let ae=0,le=de.length;ae<le;ae++){let Ce=i.get(de[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&q(P)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ae=0;ae<de.length;ae++){let le=de[ae];X.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ae]);let Ce=s.convert(le.format,le.colorSpace),B=s.convert(le.type),pe=w(le.internalFormat,Ce,B,le.normalized,le.colorSpace,P.isXRRenderTarget===!0),fe=Te(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,X.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),qe(n.TEXTURE_CUBE_MAP,T);for(let ae=0;ae<6;ae++)if(T.mipmaps.length>0)for(let le=0;le<T.mipmaps.length;le++)Ge(X.__webglFramebuffer[ae][le],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else Ge(X.__webglFramebuffer[ae],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);S(T)?v(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(be){for(let ae=0,le=de.length;ae<le;ae++){let Ce=de[ae],B=i.get(Ce),pe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,B.__webglTexture),qe(pe,Ce),Ge(X.__webglFramebuffer,P,Ce,n.COLOR_ATTACHMENT0+ae,pe,0),S(Ce)&&v(pe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,_e.__webglTexture),qe(ae,T),T.mipmaps.length>0)for(let le=0;le<T.mipmaps.length;le++)Ge(X.__webglFramebuffer[le],P,T,n.COLOR_ATTACHMENT0,ae,le);else Ge(X.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,ae,0);S(T)?v(ae):T.mipmaps.length>0&&n.texParameteri(ae,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&Ue(P)}function A(P){let T=P.textures;for(let X=0,_e=T.length;X<_e;X++){let de=T[X];if(S(de)&&de.mipmapsAutoUpdate===!0){let ue=M(P),be=i.get(de).__webglTexture;t.bindTexture(ue,be),v(ue),t.unbindTexture()}}}let te=[];function Y(P){if(P.samples>0){if(q(P)===!1){let T=P.textures,X=P.width,_e=P.height,de=n.COLOR_BUFFER_BIT,ue=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(P),ae=T.length>1;if(ae)for(let Ce=0;Ce<T.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ce=0;Ce<T.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);let B=i.get(T[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,B,0)}n.blitFramebuffer(0,0,X,_e,0,0,X,_e,de,n.NEAREST),l===!0&&(te.length=0,te.push(n.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&te.push(ue),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<T.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);let B=i.get(T[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,B,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Te(P){return Math.min(r.maxSamples,P.samples)}function q(P){let T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(P){let T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function ve(P,T){let X=P.colorSpace,_e=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Vn&&X!==Pi&&(xt.getTransfer(X)===It?(_e!==wn||de!==Nn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",X)),T}function Re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ie,this.resetTextureUnits=z,this.getTextureUnits=j,this.setTextureUnits=Se,this.setTexture2D=me,this.setTexture2DArray=re,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=je,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=q,this.dispose=W}function o1(n,e){function t(i,r=Pi){let s,o=xt.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vf)return n.BYTE;if(i===Gf)return n.SHORT;if(i===Uo)return n.UNSIGNED_SHORT;if(i===Yc)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Zn)return n.HALF_FLOAT;if(i===qf)return n.ALPHA;if(i===$f)return n.RGB;if(i===wn)return n.RGBA;if(i===vr)return n.DEPTH_COMPONENT;if(i===Pr)return n.DEPTH_STENCIL;if(i===jc)return n.RED;if(i===Jc)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===Qc)return n.RG_INTEGER;if(i===eu)return n.RGBA_INTEGER;if(i===Ya||i===Za||i===Ka||i===ja)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tu||i===nu||i===iu||i===ru)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===su||i===ou||i===au||i===lu||i===cu||i===Ja||i===uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===su||i===ou)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===au)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===lu)return s.COMPRESSED_R11_EAC;if(i===cu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ja)return s.COMPRESSED_RG11_EAC;if(i===uu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hu||i===fu||i===du||i===pu||i===mu||i===gu||i===xu||i===yu||i===_u||i===vu||i===bu||i===Mu||i===Su||i===wu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===du)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_u)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Su)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eu||i===Tu||i===Au)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eu)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ru||i===Cu||i===Qa||i===Pu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ru)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`,gd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _n({vertexShader:a1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xd=class extends Ti{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new gd,p={},b=t.getContextAttributes(),S=null,v=null,M=[],w=[],y=new Ze,E=null,L=null,D=new un;D.viewport=new wt;let F=new un;F.viewport=new wt;let G=[D,F],k=new Vc,N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=M[K];return me===void 0&&(me=new So,M[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=M[K];return me===void 0&&(me=new So,M[K]=me),me.getGripSpace()},this.getHand=function(K){let me=M[K];return me===void 0&&(me=new So,M[K]=me),me.getHandSpace()};function Q(K){let me=w.indexOf(K.inputSource);if(me===-1)return;let re=M[me];re!==void 0&&(re.update(K.inputSource,K.frame,c||o),re.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ye);for(let K=0;K<M.length;K++){let me=w[K];me!==null&&(w[K]=null,M[K].disconnect(me))}N=null,W=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(S),d=null,f=null,h=null,r=null,v=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ye),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,H=null,J=null;b.depth&&(J=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=b.stencil?Pr:vr,H=b.stencil?Rs:Ci);let Ee={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new on(f.textureWidth,f.textureHeight,{format:wn,type:Nn,depthTexture:new wr(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let re={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new on(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ye(K){for(let me=0;me<K.removed.length;me++){let re=K.removed[me],H=w.indexOf(re);H>=0&&(w[H]=null,M[H].disconnect(re))}for(let me=0;me<K.added.length;me++){let re=K.added[me],H=w.indexOf(re);if(H===-1){for(let Ee=0;Ee<M.length;Ee++)if(Ee>=w.length){w.push(re),H=Ee;break}else if(w[Ee]===null){w[Ee]=re,H=Ee;break}if(H===-1)break}let J=M[H];J&&J.connect(re)}}function ee(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let me=K.near,re=K.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(re=m.depthFar)),k.near=F.near=D.near=me,k.far=F.far=D.far=re,(N!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,W=k.far),k.layers.mask=K.layers.mask|6,D.layers.mask=k.layers.mask&-5,F.layers.mask=k.layers.mask&-3;let H=K.parent,J=k.cameras;ee(k,H);for(let Ee=0;Ee<J.length;Ee++)ee(J[Ee],H);k.projectionMatrix.copy(D.projectionMatrix),k.projectionMatrixInverse.copy(D.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),z(K,k,H)};function z(K,me,re){re===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(re.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ms*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return p[K]};let j=null;function Se(K,me){if(u=me.getViewerPose(c||o),g=me,u!==null){let re=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let H=!1;re.length!==k.cameras.length&&(k.cameras.length=0,H=!0);for(let Ne=0;Ne<re.length;Ne++){let qe=re[Ne],he=null;if(d!==null)he=d.getViewport(qe);else{let ze=h.getViewSubImage(f,qe);he=ze.viewport,Ne===0&&(e.setRenderTargetTextures(v,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(v))}let Ae=G[Ne];Ae===void 0&&(Ae=new un,Ae.layers.enable(Ne),Ae.viewport=new wt,G[Ne]=Ae),Ae.matrix.fromArray(qe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(qe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(he.x,he.y,he.width,he.height),Ne===0&&(k.matrix.copy(Ae.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),H===!0&&k.cameras.push(Ae)}let J=r.enabledFeatures;if(J&&J.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Ne=h.getDepthInformation(re[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,r.renderState)}if(J&&J.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Ne=0;Ne<re.length;Ne++){let qe=re[Ne].camera;if(qe){let he=p[qe];he||(he=new Ca,p[qe]=he);let Ae=h.getCameraImage(qe);he.sourceTexture=Ae}}}}for(let re=0;re<M.length;re++){let H=w[re],J=M[re];H!==null&&J!==void 0&&J.update(H,me,c||o)}j&&j(K,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}let Ie=new y0;Ie.setAnimationLoop(Se),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}},c1=new lt,R0=new ht;R0.set(-1,0,0,0,1,0,0,0,1);function u1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,rd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(R0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h1(n,e,t,i){let r={},s={};function o(b,S){let v=S.program;i.uniformBlockBinding(b,v,r[b.id])}function a(b,S){let v=r[b.id];v===void 0&&(g(b),v=l(b),r[b.id]=v,b.addEventListener("dispose",m));let M=S.program;i.updateUBOMapping(b,M);let w=e.render.frame;s[b.id]!==w&&(c(b),s[b.id]=w)}function l(b){let S=n.createBuffer(),v=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,M),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(b){let S=r[b.id],v=b.uniforms,M=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,y=v.length;w<y;w++){let E=v[w];if(Array.isArray(E))for(let L=0,D=E.length;L<D;L++)u(E[L],w,L,M);else u(E,w,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(b,S,v,M){if(f(b,S,v,M)===!0){let w=b.__offset,y=b.value;if(Array.isArray(y)){let E=0;for(let L=0;L<y.length;L++){let D=y[L],F=x(D,!0);h(D,b.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else h(y,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,b.__data)}}function h(b,S,v){typeof b=="number"||typeof b=="boolean"?S[v]=b:b.isMatrix3?(S[v]=b.elements[0],S[v+1]=b.elements[1],S[v+2]=b.elements[2],S[v+3]=0,S[v+4]=b.elements[3],S[v+5]=b.elements[4],S[v+6]=b.elements[5],S[v+7]=0,S[v+8]=b.elements[6],S[v+9]=b.elements[7],S[v+10]=b.elements[8],S[v+11]=0):ArrayBuffer.isView(b)?S.set(b.subarray(0,S.length-v),v):b.toArray(S,v)}function f(b,S,v,M){let w=b.value,y=S+"_"+v;if(Array.isArray(w)){M[y]===void 0&&(M[y]=[]);let E=M[y],L=!1;for(let D=0;D<w.length;D++)d(w[D],E,D)===!0&&(L=!0);return L}return d(w,M,y)}function d(b,S,v){if(S[v]===void 0)return typeof b=="number"||typeof b=="boolean"?S[v]=b:ArrayBuffer.isView(b)?S[v]=b.slice():S[v]=b.clone(),!0;{let M=S[v];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return S[v]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(M.equals(b)===!1)return M.copy(b),!0}}return!1}function g(b){let S=b.uniforms,v=0,M=16;for(let y=0,E=S.length;y<E;y++){let L=Array.isArray(S[y])?S[y]:[S[y]];for(let D=0,F=L.length;D<F;D++){let G=L[D],k=Array.isArray(G.value)?G.value:[G.value],N=Array.isArray(S[y])||Array.isArray(G.value),W=v;for(let $=0,ye=k.length;$<ye;$++){let ee=k[$],z=x(ee,N),j=v%M,Se=j%z.boundary,Ie=j+Se;v+=Se,Ie!==0&&M-Ie<z.storage&&(v+=M-Ie),$===0&&(W=v),v+=z.storage}let Q=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new Q((v-W)/Float32Array.BYTES_PER_ELEMENT),G.__offset=W}}let w=v%M;return w>0&&(v+=M-w),b.__size=v,b.__cache={},this}function x(b,S){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=16,v.storage=48):b.isMatrix4?(v.boundary=16,v.storage=64):b.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):it("WebGLRenderer: Unsupported uniform value type.",b),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(b){let S=b.target;S.removeEventListener("dispose",m),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);r={},s={}}return{bind:o,update:a,dispose:p}}var f1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function d1(){return $i===null&&($i=new To(f1,16,16,ts,Zn),$i.name="DFG_LUT",$i.minFilter=Yt,$i.magFilter=Yt,$i.wrapS=ci,$i.wrapT=ci,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var Nu=class{constructor(e={}){let{canvas:t=Gg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Nn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=d,m=new Set([eu,Qc,Jc]),p=new Set([Nn,Ci,Uo,Rs,Zc,Kc]),b=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,w=null,y=[],E=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,F=!1,G=null,k=null,N=null,W=null;this._outputColorSpace=Tt;let Q=0,$=0,ye=null,ee=-1,z=null,j=new wt,Se=new wt,Ie=null,K=new Je(0),me=0,re=t.width,H=t.height,J=1,Ee=null,Ye=null,Ne=new wt(0,0,re,H),qe=new wt(0,0,re,H),he=!1,Ae=new $r,ze=new Cc,He=!1,Ke=!1,Ge=new lt,ot=new I,ne=new wt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function ge(){return ye===null?J:1}let A=i;function te(R,V){return t.getContext(R,V)}let Y,Te,q,xe,ve,Re,P,T,X,_e,de,ue,be,ae,le,Ce,B,pe,fe,Fe,Le,Oe,Be;try{let R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),A===null){let V="webgl2";if(A=te(V,R),A===null)throw te(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(R){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ct("WebGLRenderer: "+R.message),R}function st(){Y=new ww(A),Y.init(),Le=new o1(A,Y),Te=new dw(A,Y,e,Le),q=new r1(A,Y),Te.reversedDepthBuffer&&f&&q.buffers.depth.setReversed(!0),k=A.createFramebuffer(),N=A.createFramebuffer(),W=A.createFramebuffer(),xe=new Aw(A),ve=new WE,Re=new s1(A,Y,q,ve,Te,Le,xe),P=new Sw(D),T=new Cb(A),Oe=new hw(A,T),X=new Ew(A,T,xe,Oe),_e=new Cw(A,X,T,Oe,xe),pe=new Rw(A,Te,Re),le=new pw(ve),de=new GE(D,P,Y,Te,Oe,le),ue=new u1(D,ve),be=new qE,ae=new JE(Y),B=new uw(D,P,q,_e,g,l),Ce=new i1(D,_e,Te),Be=new h1(A,xe,Te,q),fe=new fw(A,Y,xe),Fe=new Tw(A,Y,xe),xe.programs=de.programs,D.capabilities=Te,D.extensions=Y,D.properties=ve,D.renderLists=be,D.shadowMap=Ce,D.state=q,D.info=xe}x!==Nn&&(L=new Iw(x,t.width,t.height,a,r,s));let Z=new xd(D,A);this.xr=Z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let R=Y.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Y.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(re,H,!1))},this.getSize=function(R){return R.set(re,H)},this.setSize=function(R,V,ce=!0){if(Z.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}re=R,H=V,t.width=Math.floor(R*J),t.height=Math.floor(V*J),ce===!0&&(t.style.width=R+"px",t.style.height=V+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(re*J,H*J).floor()},this.setDrawingBufferSize=function(R,V,ce){re=R,H=V,J=ce,t.width=Math.floor(R*ce),t.height=Math.floor(V*ce),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(x===Nn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(j)},this.getViewport=function(R){return R.copy(Ne)},this.setViewport=function(R,V,ce,ie){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,V,ce,ie),q.viewport(j.copy(Ne).multiplyScalar(ge()).round())},this.getScissor=function(R){return R.copy(qe)},this.setScissor=function(R,V,ce,ie){R.isVector4?qe.set(R.x,R.y,R.z,R.w):qe.set(R,V,ce,ie),q.scissor(Se.copy(qe).multiplyScalar(ge()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(R){q.setScissorTest(he=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,ce=!0){let ie=0;if(R){let se=!1;if(ye!==null){let Ve=ye.texture.format;se=m.has(Ve)}if(se){let Ve=ye.texture.type,et=p.has(Ve),ke=B.getClearColor(),We=B.getClearAlpha(),nt=ke.r,ut=ke.g,mt=ke.b;et?(b[0]=nt,b[1]=ut,b[2]=mt,b[3]=We,A.clearBufferuiv(A.COLOR,0,b)):(S[0]=nt,S[1]=ut,S[2]=mt,S[3]=We,A.clearBufferiv(A.COLOR,0,S))}else ie|=A.COLOR_BUFFER_BIT}V&&(ie|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ie|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&A.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),G=R},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),B.dispose(),be.dispose(),ae.dispose(),Re.dispose(),ve.dispose(),P.dispose(),_e.dispose(),X.dispose(),Oe.dispose(),Be.dispose(),de.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ur),Z.removeEventListener("sessionend",Jo),vn.stop()};function De(R){R.preventDefault(),xa("WebGLRenderer: Context Lost."),F=!0}function rt(){xa("WebGLRenderer: Context Restored."),F=!1;let R=xe.autoReset,V=Ce.enabled,ce=Ce.autoUpdate,ie=Ce.needsUpdate,se=Ce.type;st(),xe.autoReset=R,Ce.enabled=V,Ce.autoUpdate=ce,Ce.needsUpdate=ie,Ce.type=se}function Pe(R){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function dt(R){let V=R.target;V.removeEventListener("dispose",dt),zt(V)}function zt(R){jt(R),ve.remove(R)}function jt(R){let V=ve.get(R).programs;V!==void 0&&(V.forEach(function(ce){de.releaseProgram(ce)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,ce,ie,se,Ve){V===null&&(V=Ue);let et=se.isMesh&&se.matrixWorld.determinantAffine()<0,ke=fs(R,V,ce,ie,se);q.setMaterial(ie,et);let We=ce.index,nt=1;if(ie.wireframe===!0){if(We=X.getWireframeAttribute(ce),We===void 0)return;nt=2}let ut=ce.drawRange,mt=ce.attributes.position,tt=ut.start*nt,_t=(ut.start+ut.count)*nt;Ve!==null&&(tt=Math.max(tt,Ve.start*nt),_t=Math.min(_t,(Ve.start+Ve.count)*nt)),We!==null?(tt=Math.max(tt,0),_t=Math.min(_t,We.count)):mt!=null&&(tt=Math.max(tt,0),_t=Math.min(_t,mt.count));let Jt=_t-tt;if(Jt<0||Jt===1/0)return;Oe.setup(se,ie,ke,ce,We);let Ot,Ut=fe;if(We!==null&&(Ot=T.get(We),Ut=Fe,Ut.setIndex(Ot)),se.isMesh)ie.wireframe===!0?(q.setLineWidth(ie.wireframeLinewidth*ge()),Ut.setMode(A.LINES)):Ut.setMode(A.TRIANGLES);else if(se.isLine){let ln=ie.linewidth;ln===void 0&&(ln=1),q.setLineWidth(ln*ge()),se.isLineSegments?Ut.setMode(A.LINES):se.isLineLoop?Ut.setMode(A.LINE_LOOP):Ut.setMode(A.LINE_STRIP)}else se.isPoints?Ut.setMode(A.POINTS):se.isSprite&&Ut.setMode(A.TRIANGLES);if(se.isBatchedMesh)if(Y.get("WEBGL_multi_draw"))Ut.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let ln=se._multiDrawStarts,Qe=se._multiDrawCounts,tn=se._multiDrawCount,vt=We?T.get(We).bytesPerElement:1,ar=ve.get(ie).currentProgram.getUniforms();for(let cn=0;cn<tn;cn++)ar.setValue(A,"_gl_DrawID",cn),Ut.render(ln[cn]/vt,Qe[cn])}else if(se.isInstancedMesh)Ut.renderInstances(tt,Jt,se.count);else if(ce.isInstancedBufferGeometry){let ln=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Qe=Math.min(ce.instanceCount,ln);Ut.renderInstances(tt,Jt,Qe)}else Ut.render(tt,Jt)};function rr(R,V,ce,ie){G!==null&&R.isNodeMaterial&&G.setObject(ie,R),He===!0&&le.setState(R,ce,!1),R.transparent===!0&&R.side===Dt&&R.forceSinglePass===!1?(R.side=Sn,R.needsUpdate=!0,us(R,V,ie),R.side=ni,R.needsUpdate=!0,us(R,V,ie),R.side=Dt):us(R,V,ie)}this.compile=function(R,V,ce=null){ce===null&&(ce=R),G!==null&&G.renderStart(R,V,ce),w=ae.get(ce),w.init(V),E.push(w),ce.traverseVisible(function(se){se.isLight&&se.layers.test(V.layers)&&(w.pushLight(se),se.castShadow&&w.pushShadow(se))}),R!==ce&&R.traverseVisible(function(se){se.isLight&&se.layers.test(V.layers)&&(w.pushLight(se),se.castShadow&&w.pushShadow(se))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),Ke=this.localClippingEnabled,He=le.init(this.clippingPlanes,Ke),He===!0&&le.setGlobalState(this.clippingPlanes,V),G!==null&&Ce.render(w.state.shadowsArray,ce,V);let ie=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Ve=se.material;if(Ve)if(Array.isArray(Ve))for(let et=0;et<Ve.length;et++){let ke=Ve[et];rr(ke,ce,V,se),ie.add(ke)}else rr(Ve,ce,V,se),ie.add(Ve)}),w=E.pop(),G!==null&&G.renderEnd(),ie},this.compileAsync=function(R,V,ce=null){let ie=this.compile(R,V,ce);return new Promise(se=>{function Ve(){if(ie.forEach(function(et){let We=ve.get(et).currentProgram;(We===void 0||We.isReady())&&ie.delete(et)}),ie.size===0){se(R);return}setTimeout(Ve,10)}Y.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let sr=null;function si(R){sr&&sr(R)}function Ur(){vn.stop()}function Jo(){vn.start()}let vn=new y0;vn.setAnimationLoop(si),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(R){sr=R,Z.setAnimationLoop(R),R===null?vn.stop():vn.start()},Z.addEventListener("sessionstart",Ur),Z.addEventListener("sessionend",Jo),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(R,V);let ce=Z.enabled===!0&&Z.isPresenting===!0,ie=L!==null&&(ye===null||ce)&&L.begin(D,ye);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(V),V=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,V,ye),w=ae.get(R,E.length),w.init(V),w.state.textureUnits=Re.getTextureUnits(),E.push(w),Ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?ze.setFromArrayCamera(V):Ae.setFromProjectionMatrix(Ge,ui,V.reversedDepth),Ke=this.localClippingEnabled,He=le.init(this.clippingPlanes,Ke),M=be.get(R,y.length),M.init(),y.push(M),this.info.render.frame++,Z.enabled===!0&&Z.isPresenting===!0){let et=D.xr.getDepthSensingMesh();et!==null&&oi(et,V,-1/0,D.sortObjects)}oi(R,V,0,D.sortObjects),M.finish(),G!==null&&G.updateLights(w.state.lightsArray),D.sortObjects===!0&&M.sort(Ee,Ye),je=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,je&&B.addToRenderList(M,R),this.info.autoReset===!0&&this.info.reset(),He===!0&&le.beginShadows();let se=w.state.shadowsArray;if(Ce.render(se,R,V),He===!0&&le.endShadows(),(ie&&L.hasRenderPass())===!1){let et=M.opaque,ke=M.transmissive;if(w.setupLights(),V.isArrayCamera){let We=V.cameras;if(ke.length>0)for(let nt=0,ut=We.length;nt<ut;nt++){let mt=We[nt];Sl(et,ke,R,mt)}je&&B.render(R);for(let nt=0,ut=We.length;nt<ut;nt++){let mt=We[nt];zs(M,R,mt,mt.viewport)}}else ke.length>0&&Sl(et,ke,R,V),je&&B.render(R),zs(M,R,V)}ye!==null&&$===0&&(Re.updateMultisampleRenderTarget(ye),Re.updateRenderTargetMipmap(ye)),ie&&L.end(D),R.isScene===!0&&R.onAfterRender(D,R,V),Oe.resetDefaultState(),ee=-1,z=null,E.pop(),E.length>0?(w=E[E.length-1],Re.setTextureUnits(w.state.textureUnits),He===!0&&le.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,G!==null&&G.renderEnd()};function oi(R,V,ce,ie){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){let et=V.isArrayCamera?ze:Ae;if(!R.frustumCulled||R.intersectsFrustum(et)){ie&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ge);let ke=_e.update(R),We=R.material;We.visible&&M.push(R,ke,We,ce,ne.z,null,V)}}else if(R.isMesh||R.isLine||R.isPoints){let et=V.isArrayCamera?ze:Ae;if(!R.frustumCulled||R.intersectsFrustum(et)){let ke=_e.update(R),We=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ne.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ne.copy(ke.boundingSphere.center)),ne.applyMatrix4(R.matrixWorld).applyMatrix4(Ge)),Array.isArray(We)){let nt=ke.groups;for(let ut=0,mt=nt.length;ut<mt;ut++){let tt=nt[ut],_t=We[tt.materialIndex];_t&&_t.visible&&M.push(R,ke,_t,ce,ne.z,tt,V)}}else We.visible&&M.push(R,ke,We,ce,ne.z,null,V)}}}let Ve=R.children;for(let et=0,ke=Ve.length;et<ke;et++)oi(Ve[et],V,ce,ie)}function zs(R,V,ce,ie){let{opaque:se,transmissive:Ve,transparent:et}=R;w.setupLightsView(ce),He===!0&&le.setGlobalState(D.clippingPlanes,ce),ie&&q.viewport(j.copy(ie)),se.length>0&&cs(se,V,ce),Ve.length>0&&cs(Ve,V,ce),et.length>0&&cs(et,V,ce),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Sl(R,V,ce,ie){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ie.id]===void 0){let tt=Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ie.id]=new on(1,1,{generateMipmaps:!0,type:tt?Zn:Nn,minFilter:pi,samples:Math.max(4,Te.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Ve=w.state.transmissionRenderTarget[ie.id],et=ie.viewport||j;Ve.setSize(et.z*D.transmissionResolutionScale,et.w*D.transmissionResolutionScale);let ke=D.getRenderTarget(),We=D.getActiveCubeFace(),nt=D.getActiveMipmapLevel();D.setRenderTarget(Ve),D.getClearColor(K),me=D.getClearAlpha(),me<1&&D.setClearColor(16777215,.5),D.clear(),je&&B.render(ce);let ut=D.toneMapping;D.toneMapping=di;let mt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),w.setupLightsView(ie),He===!0&&le.setGlobalState(D.clippingPlanes,ie),cs(R,ce,ie),Re.updateMultisampleRenderTarget(Ve),Re.updateRenderTargetMipmap(Ve),Y.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let _t=0,Jt=V.length;_t<Jt;_t++){let Ot=V[_t],{object:Ut,geometry:ln,material:Qe,group:tn}=Ot;if(Qe.side===Dt&&Ut.layers.test(ie.layers)){let vt=Qe.side;Qe.side=Sn,Qe.needsUpdate=!0,Fr(Ut,ce,ie,ln,Qe,tn),Qe.side=vt,Qe.needsUpdate=!0,tt=!0}}tt===!0&&(Re.updateMultisampleRenderTarget(Ve),Re.updateRenderTargetMipmap(Ve))}D.setRenderTarget(ke,We,nt),D.setClearColor(K,me),mt!==void 0&&(ie.viewport=mt),D.toneMapping=ut}function cs(R,V,ce){let ie=V.isScene===!0?V.overrideMaterial:null;for(let se=0,Ve=R.length;se<Ve;se++){let et=R[se],{object:ke,geometry:We,group:nt}=et,ut=et.material;ut.allowOverride===!0&&ie!==null&&(ut=ie),ke.layers.test(ce.layers)&&Fr(ke,V,ce,We,ut,nt)}}function Fr(R,V,ce,ie,se,Ve){G!==null&&se.isNodeMaterial&&G.setObject(R,se),R.onBeforeRender(D,V,ce,ie,se,Ve),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(D,V,ce,ie,R,Ve),se.transparent===!0&&se.side===Dt&&se.forceSinglePass===!1?(se.side=Sn,se.needsUpdate=!0,D.renderBufferDirect(ce,V,ie,se,R,Ve),se.side=ni,se.needsUpdate=!0,D.renderBufferDirect(ce,V,ie,se,R,Ve),se.side=Dt):D.renderBufferDirect(ce,V,ie,se,R,Ve),R.onAfterRender(D,V,ce,ie,se,Ve)}function Hs(R){let V=0;for(let ce of R)ce.texture!==null&&V++;return V}function us(R,V,ce){V.isScene!==!0&&(V=Ue);let ie=ve.get(R),se=w.state.lights,Ve=w.state.shadowsArray,et=se.state.version,ke=de.getParameters(R,se.state,Ve,V,ce,w.state.lightProbeGridArray),We=de.getProgramCacheKey(ke),nt=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,ie.fog=V.fog;let ut=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=P.get(R.envMap||ie.environment,ut),ie.envMapRotation=ie.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",dt),nt=new Map,ie.programs=nt,ie.programVariants=new Map);let mt=nt.get(We);if(mt!==void 0){if(ie.currentProgram===mt&&ie.lightsStateVersion===et)return hs(R,ke),mt}else ke.uniforms=de.getUniforms(R),G!==null&&R.isNodeMaterial&&G.build(R,ce,ke),R.onBeforeCompile(ke,D),mt=de.acquireProgram(ke,We),nt.set(We,mt),ie.uniforms=ke.uniforms;let tt=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(tt.clippingPlanes=le.uniform),hs(R,ke),ie.needsLights=El(R),ie.lightsStateVersion=et,ie.needsLights&&(tt.ambientLightColor.value=se.state.ambient,tt.lightProbe.value=se.state.probe,tt.sunLights.value=se.state.sun,tt.sunLightShadows.value=se.state.sunShadow,tt.directionalLights.value=se.state.directional,tt.directionalLightShadows.value=se.state.directionalShadow,tt.spotLights.value=se.state.spot,tt.spotLightShadows.value=se.state.spotShadow,tt.rectAreaLights.value=se.state.rectArea,tt.ltc_1.value=se.state.rectAreaLTC1,tt.ltc_2.value=se.state.rectAreaLTC2,tt.pointLights.value=se.state.point,tt.pointLightShadows.value=se.state.pointShadow,tt.hemisphereLights.value=se.state.hemi,tt.sunShadowMatrix.value=se.state.sunShadowMatrix,tt.sunShadowCascade.value=se.state.sunShadowCascade,tt.directionalShadowMatrix.value=se.state.directionalShadowMatrix,tt.spotLightMatrix.value=se.state.spotLightMatrix,tt.spotLightMap.value=se.state.spotLightMap,tt.pointShadowMatrix.value=se.state.pointShadowMatrix),ie.numLightProbeGrids=Hs(w.state.lightProbeGridArray),ie.currentProgram=mt,ie.uniformsList=null,mt}function wh(R,V,ce,ie,se){let Ve=ve.get(R),et=Ve.currentProgram.id+","+ie+","+se,ke=Ve.programVariants.get(et);return ke===void 0?(ke=us(R,V,ce),Ve.programVariants.set(et,ke)):(Ve.currentProgram=ke,Ve.uniformsList=null,Ve.outputColorSpace=ie,Ve.toneMapping=se),ke}function wl(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=Bo.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function hs(R,V){let ce=ve.get(R);ce.outputColorSpace=V.outputColorSpace,ce.batching=V.batching,ce.batchingColor=V.batchingColor,ce.instancing=V.instancing,ce.instancingColor=V.instancingColor,ce.instancingMorph=V.instancingMorph,ce.skinning=V.skinning,ce.morphTargets=V.morphTargets,ce.morphNormals=V.morphNormals,ce.morphColors=V.morphColors,ce.morphTargetsCount=V.morphTargetsCount,ce.numClippingPlanes=V.numClippingPlanes,ce.numIntersection=V.numClipIntersection,ce.vertexAlphas=V.vertexAlphas,ce.vertexTangents=V.vertexTangents,ce.toneMapping=V.toneMapping}function fs(R,V,ce,ie,se){V.isScene!==!0&&(V=Ue),Re.resetTextureUnits();let Ve=V.fog,et=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?V.environment:null,ke=ye===null?D.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:xt.workingColorSpace,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,nt=P.get(ie.envMap||et,We),ut=ie.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,mt=!!ce.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),tt=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,Jt=!!ce.morphAttributes.color,Ot=di;ie.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ot=D.toneMapping);let Ut=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ln=Ut!==void 0?Ut.length:0,Qe=ve.get(ie),tn=w.state.lights;if(He===!0&&(Ke===!0||R!==z)){let Vt=R===z&&ie.id===ee;le.setState(ie,R,Vt)}let vt=!1,ar=!1;ie.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==tn.state.version||se.isBatchedMesh&&Qe.batching===!1||!se.isBatchedMesh&&Qe.batching===!0||se.isBatchedMesh&&Qe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Qe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Qe.instancing===!1||!se.isInstancedMesh&&Qe.instancing===!0||se.isSkinnedMesh&&Qe.skinning===!1||!se.isSkinnedMesh&&Qe.skinning===!0||se.isInstancedMesh&&Qe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Qe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Qe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Qe.instancingMorph===!1&&se.morphTexture!==null||Qe.envMap!==nt||ie.fog===!0&&Qe.fog!==Ve||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==le.numPlanes||Qe.numIntersection!==le.numIntersection)||Qe.vertexAlphas!==ut||Qe.vertexTangents!==mt||Qe.morphTargets!==tt||Qe.morphNormals!==_t||Qe.morphColors!==Jt||Qe.morphTargetsCount!==ln||Qe.numLightProbeGrids!==Hs(w.state.lightProbeGridArray)?vt=!0:(Qe.outputColorSpace!==ke||Qe.toneMapping!==Ot)&&(ar=!0):(vt=!0,Qe.__version=ie.version);let cn=Qe.currentProgram;(vt===!0||ar===!0)&&(cn=ar===!0?wh(ie,V,se,ke,Ot):us(ie,V,se),G&&ie.isNodeMaterial&&G.onUpdateProgram(ie,cn,Qe));let lr=!1,Ni=!1,yi=!1,bt=cn.getUniforms(),nn=Qe.uniforms;if(q.useProgram(cn.program)&&(lr=!0,Ni=!0,yi=!0),ie.id!==ee&&(ee=ie.id,Ni=!0),lr||z!==R){q.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),bt.setValue(A,"projectionMatrix",R.projectionMatrix),bt.setValue(A,"viewMatrix",R.matrixWorldInverse);let qt=bt.map.cameraPosition;qt!==void 0&&qt.setValue(A,ot.setFromMatrixPosition(R.matrixWorld)),Te.logarithmicDepthBuffer&&bt.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&bt.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),z!==R&&(z=R,Ni=!0,yi=!0)}if(Qe.needsLights&&(tn.state.sunShadowMap.length>0&&bt.setValue(A,"sunShadowMap",tn.state.sunShadowMap,Re),tn.state.directionalShadowMap.length>0&&bt.setValue(A,"directionalShadowMap",tn.state.directionalShadowMap,Re),tn.state.spotShadowMap.length>0&&bt.setValue(A,"spotShadowMap",tn.state.spotShadowMap,Re),tn.state.pointShadowMap.length>0&&bt.setValue(A,"pointShadowMap",tn.state.pointShadowMap,Re)),se.isSkinnedMesh){bt.setOptional(A,se,"bindMatrix"),bt.setOptional(A,se,"bindMatrixInverse");let Vt=se.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),bt.setValue(A,"boneTexture",Vt.boneTexture,Re))}se.isBatchedMesh&&(bt.setOptional(A,se,"batchingTexture"),bt.setValue(A,"batchingTexture",se._matricesTexture,Re),bt.setOptional(A,se,"batchingIdTexture"),bt.setValue(A,"batchingIdTexture",se._indirectTexture,Re),bt.setOptional(A,se,"batchingColorTexture"),se._colorsTexture!==null&&bt.setValue(A,"batchingColorTexture",se._colorsTexture,Re));let qn=ce.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&pe.update(se,ce,cn),(Ni||Qe.receiveShadow!==se.receiveShadow)&&(Qe.receiveShadow=se.receiveShadow,bt.setValue(A,"receiveShadow",se.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&V.environment!==null&&(nn.envMapIntensity.value=V.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=d1()),Ni){if(bt.setValue(A,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&ds(nn,yi),Ve&&ie.fog===!0&&ue.refreshFogUniforms(nn,Ve),ue.refreshMaterialUniforms(nn,ie,J,H,w.state.transmissionRenderTarget[R.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){let Vt=v,qt=0;for(let bn of w.state.lightProbeGridArray)bn.texture!==null&&(Vt.textures[qt]=bn.texture,Vt.min[qt]=bn.boundingBox.min,Vt.max[qt]=bn.boundingBox.max,Vt.resolution[qt]=bn.resolution,qt++);for(let bn in Vt)Vt[bn].length=qt;nn.probesSH.value=Vt.textures,nn.probesMin.value=Vt.min,nn.probesMax.value=Vt.max,nn.probesResolution.value=Vt.resolution}Bo.upload(A,wl(Qe),nn,Re)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Bo.upload(A,wl(Qe),nn,Re),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&bt.setValue(A,"center",se.center),bt.setValue(A,"modelViewMatrix",se.modelViewMatrix),bt.setValue(A,"normalMatrix",se.normalMatrix),bt.setValue(A,"modelMatrix",se.matrixWorld),ie.uniformsGroups!==void 0){let Vt=ie.uniformsGroups;for(let qt=0,bn=Vt.length;qt<bn;qt++){let Br=Vt[qt];Be.update(Br,cn),Be.bind(Br,cn)}}return cn}function ds(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function El(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ye},this.setRenderTargetTextures=function(R,V,ce){let ie=ve.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ve.get(R.texture).__webglTexture=V,ve.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ce,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){let ce=ve.get(R);ce.__webglFramebuffer=V,ce.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,ce=0){ye=R,Q=V,$=ce;let ie=null,se=!1,Ve=!1;if(R){let ke=ve.get(R);if(ke.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(A.FRAMEBUFFER,ke.__webglFramebuffer),j.copy(R.viewport),Se.copy(R.scissor),Ie=R.scissorTest,q.viewport(j),q.scissor(Se),q.setScissorTest(Ie),ee=-1;return}else if(ke.__webglFramebuffer===void 0)Re.setupRenderTarget(R);else if(ke.__hasExternalTextures)Re.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ut=R.depthTexture;if(ke.__boundDepthTexture!==ut){if(ut!==null&&ve.has(ut)&&(R.width!==ut.image.width||R.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(R)}}let We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ve=!0);let nt=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[V])?ie=nt[V][ce]:ie=nt[V],se=!0):R.samples>0&&Re.useMultisampledRTT(R)===!1?ie=ve.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?ie=nt[ce]:ie=nt,j.copy(R.viewport),Se.copy(R.scissor),Ie=R.scissorTest}else j.copy(Ne).multiplyScalar(J).floor(),Se.copy(qe).multiplyScalar(J).floor(),Ie=he;if(ce!==0&&(ie=k),q.bindFramebuffer(A.FRAMEBUFFER,ie)&&q.drawBuffers(R,ie),q.viewport(j),q.scissor(Se),q.setScissorTest(Ie),se){let ke=ve.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,ce)}else if(Ve){let ke=V;for(let We=0;We<R.textures.length;We++){let nt=ve.get(R.textures[We]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+We,nt.__webglTexture,ce,ke)}}else if(R!==null&&ce!==0){let ke=ve.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ke.__webglTexture,ce)}ee=-1};function or(R){let V=ve.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=Te.textureFormatReadable(R.format),V.__typeReadable=Te.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,ce,ie,se,Ve,et,ke=0){if(!(R&&R.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&et!==void 0&&(We=We[et],Array.isArray(We)&&(We=We[0])),We){q.bindFramebuffer(A.FRAMEBUFFER,We);try{let nt=R.textures[ke],ut=nt.format,mt=nt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ke);let tt=or(nt);if(tt.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-ie&&ce>=0&&ce<=R.height-se&&A.readPixels(V,ce,ie,se,Le.convert(ut),Le.convert(mt),Ve)}finally{let nt=ye!==null?ve.get(ye).__webglFramebuffer:null;q.bindFramebuffer(A.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(R,V,ce,ie,se,Ve,et,ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&et!==void 0&&(We=We[et],Array.isArray(We)&&(We=We[0])),We)if(V>=0&&V<=R.width-ie&&ce>=0&&ce<=R.height-se){q.bindFramebuffer(A.FRAMEBUFFER,We);let nt=R.textures[ke],ut=nt.format,mt=nt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ke);let tt=or(nt);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,_t),A.bufferData(A.PIXEL_PACK_BUFFER,Ve.byteLength,A.STREAM_READ),A.readPixels(V,ce,ie,se,Le.convert(ut),Le.convert(mt),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let Jt=ye!==null?ve.get(ye).__webglFramebuffer:null;q.bindFramebuffer(A.FRAMEBUFFER,Jt);let Ot=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Xg(A,Ot,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,_t),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Ve),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(_t),A.deleteSync(Ot),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,ce=0){let ie=Math.pow(2,-ce),se=Math.floor(R.image.width*ie),Ve=Math.floor(R.image.height*ie),et=V!==null?V.x:0,ke=V!==null?V.y:0;Re.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,ce,0,0,et,ke,se,Ve),q.unbindTexture()},this.copyTextureToTexture=function(R,V,ce=null,ie=null,se=0,Ve=0){let et,ke,We,nt,ut,mt,tt,_t,Jt,Ot=R.isCompressedTexture?R.mipmaps[Ve]:R.image;if(ce!==null)et=ce.max.x-ce.min.x,ke=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,ut=ce.min.y,mt=ce.isBox3?ce.min.z:0;else{let bt=Math.pow(2,-se);et=Math.floor(Ot.width*bt),ke=Math.floor(Ot.height*bt),R.isDataArrayTexture?We=Ot.depth:R.isData3DTexture?We=Math.floor(Ot.depth*bt):We=1,nt=0,ut=0,mt=0}ie!==null?(tt=ie.x,_t=ie.y,Jt=ie.z):(tt=0,_t=0,Jt=0);let Ut=Le.convert(V.format),ln=Le.convert(V.type),Qe;V.isData3DTexture?(Re.setTexture3D(V,0),Qe=A.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Re.setTexture2DArray(V,0),Qe=A.TEXTURE_2D_ARRAY):(Re.setTexture2D(V,0),Qe=A.TEXTURE_2D),q.activeTexture(A.TEXTURE0),q.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),q.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),q.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);let tn=q.getParameter(A.UNPACK_ROW_LENGTH),vt=q.getParameter(A.UNPACK_IMAGE_HEIGHT),ar=q.getParameter(A.UNPACK_SKIP_PIXELS),cn=q.getParameter(A.UNPACK_SKIP_ROWS),lr=q.getParameter(A.UNPACK_SKIP_IMAGES);q.pixelStorei(A.UNPACK_ROW_LENGTH,Ot.width),q.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ot.height),q.pixelStorei(A.UNPACK_SKIP_PIXELS,nt),q.pixelStorei(A.UNPACK_SKIP_ROWS,ut),q.pixelStorei(A.UNPACK_SKIP_IMAGES,mt);let Ni=R.isDataArrayTexture||R.isData3DTexture,yi=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){let bt=ve.get(R),nn=ve.get(V),qn=ve.get(bt.__renderTarget),Vt=ve.get(nn.__renderTarget);q.bindFramebuffer(A.READ_FRAMEBUFFER,qn.__webglFramebuffer),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let qt=0;qt<We;qt++)Ni&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(R).__webglTexture,se,mt+qt),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(V).__webglTexture,Ve,Jt+qt)),A.blitFramebuffer(nt,ut,nt+et,ut+ke,tt,_t,tt+et,_t+ke,A.DEPTH_BUFFER_BIT,A.NEAREST);q.bindFramebuffer(A.READ_FRAMEBUFFER,null),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||ve.has(R)){let bt=ve.get(R),nn=ve.get(V);q.bindFramebuffer(A.READ_FRAMEBUFFER,N),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,W);for(let qn=0;qn<We;qn++)Ni?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,bt.__webglTexture,se,mt+qn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,bt.__webglTexture,se),yi?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,nn.__webglTexture,Ve,Jt+qn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,nn.__webglTexture,Ve),se!==0?A.blitFramebuffer(nt,ut,nt+et,ut+ke,tt,_t,tt+et,_t+ke,A.COLOR_BUFFER_BIT,A.NEAREST):yi?A.copyTexSubImage3D(Qe,Ve,tt,_t,Jt+qn,nt,ut,et,ke):A.copyTexSubImage2D(Qe,Ve,tt,_t,nt,ut,et,ke);q.bindFramebuffer(A.READ_FRAMEBUFFER,null),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else yi?R.isDataTexture||R.isData3DTexture?A.texSubImage3D(Qe,Ve,tt,_t,Jt,et,ke,We,Ut,ln,Ot.data):V.isCompressedArrayTexture?A.compressedTexSubImage3D(Qe,Ve,tt,_t,Jt,et,ke,We,Ut,Ot.data):A.texSubImage3D(Qe,Ve,tt,_t,Jt,et,ke,We,Ut,ln,Ot):R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Ve,tt,_t,et,ke,Ut,ln,Ot.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Ve,tt,_t,Ot.width,Ot.height,Ut,Ot.data):A.texSubImage2D(A.TEXTURE_2D,Ve,tt,_t,et,ke,Ut,ln,Ot);q.pixelStorei(A.UNPACK_ROW_LENGTH,tn),q.pixelStorei(A.UNPACK_IMAGE_HEIGHT,vt),q.pixelStorei(A.UNPACK_SKIP_PIXELS,ar),q.pixelStorei(A.UNPACK_SKIP_ROWS,cn),q.pixelStorei(A.UNPACK_SKIP_IMAGES,lr),Ve===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&A.generateMipmap(Qe),q.unbindTexture()},this.initRenderTarget=function(R){ve.get(R).__webglFramebuffer===void 0&&Re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Re.setTextureCube(R,0):R.isData3DTexture?Re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Re.setTexture2DArray(R,0):Re.setTexture2D(R,0),q.unbindTexture()},this.resetState=function(){Q=0,$=0,ye=null,q.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};function P0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Bt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in h.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(h.attributes[g]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in h.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(h.morphAttributes[g]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=h.index.count;else if(h.attributes.position!==void 0)g=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=C0(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=C0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function C0(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new Ht(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function yd(n,e){if(e===Yf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Fo||e===el){let t=n.getIndex();if(t===null){let s=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===Fo)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function I0(n){let e=new Map,t=new Map,i=n.clone();return L0(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function L0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)L0(n.children[i],e.children[i],t)}var Fu=class extends Wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ed(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Bu(t,yt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bu(t,yt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new kd(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Cr.extractUrlBase(e);o=Cr.resolveURL(c,this.path)}else o=Cr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ro(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===F0){try{o[yt.KHR_BINARY_GLTF]=new zd(e)}catch(h){r&&r(h);return}s=JSON.parse(o[yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new $d(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case yt.KHR_MATERIALS_UNLIT:o[h]=new Sd;break;case yt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Hd(s,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:o[h]=new Vd;break;case yt.KHR_MESH_QUANTIZATION:o[h]=new Gd;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function p1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Kt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Md=class{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Vn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Es(u),c.distance=h;break;case"spot":c=new Ba(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Sd=class{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,i){let r=[];e.color=new Je(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(r)}},wd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Ed=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(s,s)}return Promise.all(r)}},Td=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(r)}},Ad=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Rd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},Cd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Vn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Tt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},Pd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},Id=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(s[0],s[1],s[2],Vn),Promise.all(r)}},Ld=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Dd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(s[0],s[1],s[2],Vn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Tt)),Promise.all(r)}},Nd=class{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},Od=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},Ud=class{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Fd=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Bd=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Bu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},kd=class{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let c of r.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let x=new lt,m=new I,p=new Zt,b=new I(1,1,1),S=new Ss(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,x.compose(m,p,b));let v=null;for(let M in l)if(M==="_COLOR_0"){let w=l[M];S.instanceColor=new br(w.array,w.itemSize,w.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(v===null){let y=S.geometry;v=new Bt,v.name=y.name;for(let E in y.attributes)v.setAttribute(E,y.attributes[E]);for(let E in y.morphAttributes)v.morphAttributes[E]=y.morphAttributes[E];y.index!==null&&v.setIndex(y.index),v.morphTargetsRelative=y.morphTargetsRelative;for(let E of y.groups)v.addGroup(E.start,E.count,E.materialIndex);y.boundingBox!==null&&(v.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(v.boundingSphere=y.boundingSphere.clone()),v.drawRange.start=y.drawRange.start,v.drawRange.count=y.drawRange.count,v.userData=Object.assign({},y.userData),S.geometry=v}let w=l[M];v.setAttribute(M,new br(w.array,w.itemSize,w.normalized))}Wt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},F0="glTF",al=12,D0={JSON:1313821514,BIN:5130562},zd=class{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,al),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==F0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-al,s=new DataView(e,al),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===D0.JSON){let c=new Uint8Array(e,al+o,a);this.content=i.decode(c)}else if(l===D0.BIN){let c=al+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Xd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Xd[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=Ho[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},a,c,Vn,f)})})}},Vd=class{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Gd=class{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}},ku=class extends Gi{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,b=1-m,S=p-f+h;for(let v=0;v!==a;v++){let M=o[x+v+a],w=o[x+v+l]*u,y=o[g+v+a],E=o[g+v]*u;s[v]=b*M+S*w+m*y+p*E}return s}},m1=new Zt,Wd=class extends ku{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return m1.fromArray(s).normalize().toArray(s),s}},mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},N0={9728:$t,9729:Yt,9984:$c,9985:Oo,9986:As,9987:pi},O0={33071:ci,33648:xo,10497:Ei},_d={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},g1={CUBICSPLINE:void 0,LINEAR:bs,STEP:vs},vd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function x1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Dn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),n.DefaultMaterial}function Ps(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Yi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function y1(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function _1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function v1(n){let e,t=n.extensions&&n.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bd(t.attributes):e=n.indices+":"+bd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+bd(n.targets[i]);return e}function bd(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function qd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var M1=new lt,$d=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new p1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?(this.textureLoader=new Ua(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ha(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ro(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ps(s,a,r),Yi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(Cr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=_d[r.type],a=Ho[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Ht(c,o,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=_d[r.type],c=Ho[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,S=t.cache.get(b);S||(x=new c(a,p*d,r.count*d/u),S=new qr(x,d/u),t.cache.add(b,S)),m=new In(S,l,f%d/u,g)}else a===null?x=new c(r.count*l):x=new c(a,f,r.count*l),m=new Ht(x,l,g);if(r.sparse!==void 0){let p=_d.SCALAR,b=Ho[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,M=new b(o[1],S,r.sparse.count*p),w=new c(o[2],v,r.sparse.count*l);a!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,E=M.length;y<E;y++){let L=M[y];if(m.setX(L,w[y*l]),l>=2&&m.setY(L,w[y*l+1]),l>=3&&m.setZ(L,w[y*l+2]),l>=4&&m.setW(L,w[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=N0[f.magFilter]||Yt,u.minFilter=N0[f.minFilter]||pi,u.wrapS=O0[f.wrapS]||Ei,u.wrapT=O0[f.wrapT]||Ei,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==$t&&u.minFilter!==Yt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=r.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,g){t.parse(f,d,g)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,g){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let p=new hn(m);p.needsUpdate=!0,d(p)}),t.load(Cr.resolveURL(f,s.path),x,void 0,g)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Yi(f,o),f.userData.mimeType=o.mimeType||b1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[yt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Ao,Ln.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Mr,Ln.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Dn}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},l=s.extensions||{},c=[];if(l[yt.KHR_MATERIALS_UNLIT]){let h=r[yt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Vn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Dt);let u=s.alphaMode||vd.OPAQUE;if(u===vd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===vd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==an&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ze(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==an&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==an){let h=s.emissiveFactor;a.emissive=new Je().setRGB(h[0],h[1],h[2],Vn)}return s.emissiveTexture!==void 0&&o!==an&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),Yi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ps(r,h,s),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return U0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=v1(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=U0(new Bt,c,t),c.mode===mi.TRIANGLE_STRIP?f=f.then(d=>yd(d,el)):c.mode===mi.TRIANGLE_FAN&&(f=f.then(d=>yd(d,Fo))),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?x1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=o[d],p,b=c[d];if(m.mode===mi.TRIANGLES||m.mode===mi.TRIANGLE_STRIP||m.mode===mi.TRIANGLE_FAN||m.mode===void 0){let S=s.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&v?new Ma(x,b):new pt(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===mi.LINES)p=new wa(x,b);else if(m.mode===mi.LINE_STRIP)p=new Hi(x,b);else if(m.mode===mi.LINE_LOOP)p=new Ea(x,b);else if(m.mode===mi.POINTS)p=new Ta(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Yi(p,s),m.extensions&&Ps(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ps(r,h[0],s),h[0];let f=new Et;s.extensions&&Ps(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(ns.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ai(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Yi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new lt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sa(a,l)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],g=r.samplers[d.sampler],x=d.target,m=x.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,b=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let S=0,v=f.length;S<v;S++){let M=f[S],w=d[S],y=g[S],E=x[S],L=m[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let D=i._createAnimationTracks(M,w,y,E,L);if(D)for(let F=0;F<D.length;F++)p.push(D[F])}let b=new Oa(s,void 0,p);return Yi(b,r),b})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,M1)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,g=h[0];u.pivot=new I().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Eo:c.length>1?u=new Et:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Yi(u,s),s.extensions&&Ps(i,u,s),s.matrix!==void 0){let h=new lt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new Et;i.name&&(s.name=r.createUniqueName(i.name)),Yi(s,i),i.extensions&&Ps(t,s,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?s.add(I0(f)):s.add(f)}let c=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof Ln||f instanceof hn)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}is[s.path]===is.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(is[s.path]){case is.weights:u=Tr;break;case is.rotation:u=Ar;break;case is.translation:case is.scale:u=Yr;break;default:i.itemSize===1?u=Tr:u=Yr;break}let h=r.interpolation!==void 0?g1[r.interpolation]:bs,f=this._getArrayFromAccessor(i);for(let d=0,g=l.length;d<g;d++){let x=new u(l[d]+"."+is[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=qd(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Ar?Wd:ku;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function S1(n,e,t){let i=e.attributes,r=new Lt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=qd(Ho[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=qd(Ho[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new yn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function U0(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Xd[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return xt.workingColorSpace!==Vn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Yi(n,e),S1(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?y1(n,e.targets,t):n})}var B0={type:"change"},Zd={type:"start"},z0={type:"end"},zu=new zi,k0=new xn,w1=Math.cos(70*ns.DEG2RAD),mn=new I,jn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yd=1e-6,Hu=class extends Ga{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Zt,this._lastTargetPosition=new I,this._quat=new Zt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jr,this._sphericalDelta=new jr,this._scale=1,this._panOffset=new I,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new I,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T1.bind(this),this._onPointerDown=E1.bind(this),this._onPointerUp=A1.bind(this),this._onContextMenu=N1.bind(this),this._onMouseWheel=P1.bind(this),this._onKeyDown=I1.bind(this),this._onTouchStart=L1.bind(this),this._onTouchMove=D1.bind(this),this._onMouseDown=R1.bind(this),this._onMouseMove=C1.bind(this),this._interceptControlDown=O1.bind(this),this._interceptControlUp=U1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(B0),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;mn.copy(t).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=jn:i>Math.PI&&(i-=jn),r<-Math.PI?r+=jn:r>Math.PI&&(r-=jn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=mn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zu.origin.copy(this.object.position),zu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zu.direction))<w1?this.object.lookAt(this.target):(k0.setFromNormalAndCoplanarPoint(this.object.up,this.target),zu.intersectPlane(k0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Yd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yd||this._lastTargetPosition.distanceToSquared(this.target)>Yd?(this.dispatchEvent(B0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mn.setFromMatrixColumn(t,0),mn.multiplyScalar(-e),this._panOffset.add(mn)}_panUp(e,t){this.screenSpacePanning===!0?mn.setFromMatrixColumn(t,1):(mn.setFromMatrixColumn(t,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(e),this._panOffset.add(mn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;mn.copy(r).sub(this.target);let s=mn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function E1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function T1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function A1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(z0),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function R1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=At.DOLLY;break;case Jr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}break;case Jr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Zd)}function C1(n){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function P1(n){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(n.preventDefault(),this.dispatchEvent(Zd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(z0))}function I1(n){this.enabled!==!1&&this._handleKeyDown(n)}function L1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1){this.state=At.NONE;break}this._handleTouchStartRotate(n),this.state=At.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1){this.state=At.NONE;break}this._handleTouchStartPan(n),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=At.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Zd)}function D1(n){switch(this._trackPointer(n),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=At.NONE}}function N1(n){this.enabled!==!1&&n.preventDefault()}function O1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Vu=class extends Gn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Vi;e.deleteAttribute("uv");let t=new Dn({side:Sn}),i=new Dn,r=new Es(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new pt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ss(e,i,6),a=new Wt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new pt(e,Vo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new pt(e,Vo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new pt(e,Vo(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new pt(e,Vo(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new pt(e,Vo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new pt(e,Vo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Vo(n){return new Da({color:0,emissive:16777215,emissiveIntensity:n})}var Un=Uint8Array,ii=Uint16Array,tp=Int32Array,np=new Un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ip=new Un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),H0=new Un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$0=function(n,e){for(var t=new ii(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new tp(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Y0=$0(np,2),F1=Y0.b,jd=Y0.r;F1[28]=258,jd[258]=28;var Z0=$0(ip,0),bI=Z0.b,V0=Z0.r,Jd=new ii(32768);for(Rt=0;Rt<32768;++Rt)Ir=(Rt&43690)>>1|(Rt&21845)<<1,Ir=(Ir&52428)>>2|(Ir&13107)<<2,Ir=(Ir&61680)>>4|(Ir&3855)<<4,Jd[Rt]=((Ir&65280)>>8|(Ir&255)<<8)>>1;var Ir,Rt,ul=(function(n,e,t){for(var i=n.length,r=0,s=new ii(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new ii(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ii(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Jd[h]>>l]=c}else for(a=new ii(i),r=0;r<i;++r)n[r]&&(a[r]=Jd[o[n[r]-1]++]>>15-n[r]);return a}),Is=new Un(288);for(Rt=0;Rt<144;++Rt)Is[Rt]=8;var Rt;for(Rt=144;Rt<256;++Rt)Is[Rt]=9;var Rt;for(Rt=256;Rt<280;++Rt)Is[Rt]=7;var Rt;for(Rt=280;Rt<288;++Rt)Is[Rt]=8;var Rt,Gu=new Un(32);for(Rt=0;Rt<32;++Rt)Gu[Rt]=5;var Rt,B1=ul(Is,9,0);var k1=ul(Gu,5,0);var K0=function(n){return(n+7)/8|0},j0=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Un(n.subarray(e,t))};var z1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Wu=function(n,e,t){var i=new Error(e||z1[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Wu),!t)throw i;return i};var Lr=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},ll=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},Kd=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:Q0,l:0};if(r==1){var o=new Un(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(M,w){return M.f-w.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var d=new ii(f+1),g=Qd(t[u-1],d,0);if(g>e){var i=0,x=0,m=g-e,p=1<<m;for(s.sort(function(w,y){return d[y.s]-d[w.s]||w.f-y.f});i<r;++i){var b=s[i].s;if(d[b]>e)x+=p-(1<<g-d[b]),d[b]=e;else break}for(x>>=m;x>0;){var S=s[i].s;d[S]<e?x-=1<<e-d[S]++-1:++i}for(;i>=0&&x;--i){var v=s[i].s;d[v]==e&&(--d[v],++x)}g=e}return{t:new Un(d),l:g}},Qd=function(n,e,t){return n.s==-1?Math.max(Qd(n.l,e,t+1),Qd(n.r,e,t+1)):e[n.s]=t},G0=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new ii(++e),i=0,r=n[0],s=1,o=function(l){t[i++]=l},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},cl=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},J0=function(n,e,t){var i=t.length,r=K0(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},W0=function(n,e,t,i,r,s,o,a,l,c,u){Lr(e,u++,t),++r[256];for(var h=Kd(r,15),f=h.t,d=h.l,g=Kd(s,15),x=g.t,m=g.l,p=G0(f),b=p.c,S=p.n,v=G0(x),M=v.c,w=v.n,y=new ii(19),E=0;E<b.length;++E)++y[b[E]&31];for(var E=0;E<M.length;++E)++y[M[E]&31];for(var L=Kd(y,7),D=L.t,F=L.l,G=19;G>4&&!D[H0[G-1]];--G);var k=c+5<<3,N=cl(r,Is)+cl(s,Gu)+o,W=cl(r,f)+cl(s,x)+o+14+3*G+cl(y,D)+2*y[16]+3*y[17]+7*y[18];if(l>=0&&k<=N&&k<=W)return J0(e,u,n.subarray(l,l+c));var Q,$,ye,ee;if(Lr(e,u,1+(W<N)),u+=2,W<N){Q=ul(f,d,0),$=f,ye=ul(x,m,0),ee=x;var z=ul(D,F,0);Lr(e,u,S-257),Lr(e,u+5,w-1),Lr(e,u+10,G-4),u+=14;for(var E=0;E<G;++E)Lr(e,u+3*E,D[H0[E]]);u+=3*G;for(var j=[b,M],Se=0;Se<2;++Se)for(var Ie=j[Se],E=0;E<Ie.length;++E){var K=Ie[E]&31;Lr(e,u,z[K]),u+=D[K],K>15&&(Lr(e,u,Ie[E]>>5&127),u+=Ie[E]>>12)}}else Q=B1,$=Is,ye=k1,ee=Gu;for(var E=0;E<a;++E){var me=i[E];if(me>255){var K=me>>18&31;ll(e,u,Q[K+257]),u+=$[K+257],K>7&&(Lr(e,u,me>>23&31),u+=np[K]);var re=me&31;ll(e,u,ye[re]),u+=ee[re],re>3&&(ll(e,u,me>>5&8191),u+=ip[re])}else ll(e,u,Q[me]),u+=$[me]}return ll(e,u,Q[256]),u+$[256]},H1=new tp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Q0=new Un(0),V1=function(n,e,t,i,r,s){var o=s.z||n.length,a=new Un(i+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(i,a.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var h=H1[e-1],f=h>>13,d=h&8191,g=(1<<t)-1,x=s.p||new ii(32768),m=s.h||new ii(g+1),p=Math.ceil(t/3),b=2*p,S=function(Ae){return(n[Ae]^n[Ae+1]<<p^n[Ae+2]<<b)&g},v=new tp(25e3),M=new ii(288),w=new ii(32),y=0,E=0,L=s.i||0,D=0,F=s.w||0,G=0;L+2<o;++L){var k=S(L),N=L&32767,W=m[k];if(x[N]=W,m[k]=N,F<=L){var Q=o-L;if((y>7e3||D>24576)&&(Q>423||!c)){u=W0(n,l,0,v,M,w,E,D,G,L-G,u),D=y=E=0,G=L;for(var $=0;$<286;++$)M[$]=0;for(var $=0;$<30;++$)w[$]=0}var ye=2,ee=0,z=d,j=N-W&32767;if(Q>2&&k==S(L-j))for(var Se=Math.min(f,Q)-1,Ie=Math.min(32767,L),K=Math.min(258,Q);j<=Ie&&--z&&N!=W;){if(n[L+ye]==n[L+ye-j]){for(var me=0;me<K&&n[L+me]==n[L+me-j];++me);if(me>ye){if(ye=me,ee=j,me>Se)break;for(var re=Math.min(j,me-2),H=0,$=0;$<re;++$){var J=L-j+$&32767,Ee=x[J],Ye=J-Ee&32767;Ye>H&&(H=Ye,W=J)}}}N=W,W=x[N],j+=N-W&32767}if(ee){v[D++]=268435456|jd[ye]<<18|V0[ee];var Ne=jd[ye]&31,qe=V0[ee]&31;E+=np[Ne]+ip[qe],++M[257+Ne],++w[qe],F=L+ye,++y}else v[D++]=n[L],++M[n[L]]}}for(L=Math.max(L,F);L<o;++L)v[D++]=n[L],++M[n[L]];u=W0(n,l,c,v,M,w,E,D,G,L-G,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=m,s.p=x,s.i=L,s.w=F)}else{for(var L=s.w||0;L<o+c;L+=65535){var he=L+65535;he>=o&&(l[u/8|0]=c,he=o),u=J0(l,u+1,n.subarray(L,he))}s.i=o}return j0(a,0,i+K0(u)+r)},G1=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),W1=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=G1[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var X1=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new Un(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return V1(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},ex=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var En=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function q1(n,e){return X1(n,e||{},0,0)}var tx=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=ex(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?t[o]=[s,a]:(t[o+="/"]=[new Un(0),a],tx(s,o,t,i))}},X0=typeof TextEncoder<"u"&&new TextEncoder,$1=typeof TextDecoder<"u"&&new TextDecoder,Y1=0;try{$1.decode(Q0,{stream:!0}),Y1=1}catch{}function hl(n,e){if(e){for(var t=new Un(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(X0)return X0.encode(n);for(var r=n.length,s=new Un(n.length+(n.length>>1)),o=0,a=function(u){s[o++]=u},i=0;i<r;++i){if(o+5>s.length){var l=new Un(o+8+(r-i<<1));l.set(s),s=l}var c=n.charCodeAt(i);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++i)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return j0(s,0,o)}var ep=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Wu(9),e+=i+4}return e},q0=function(n,e,t,i,r,s,o,a){var l=i.length,c=t.extra,u=a&&a.length,h=ep(c);En(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Wu(10),En(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(En(n,e,t.crc),En(n,e+4,s<0?-s-2:s),En(n,e+8,t.size)),En(n,e+12,l),En(n,e+14,h),e+=16,o!=null&&(En(n,e,u),En(n,e+6,t.attrs),En(n,e+10,o),e+=14),n.set(i,e),e+=l,h)for(var g in c){var x=c[g],m=x.length;En(n,e,+g),En(n,e+2,m),n.set(x,e+4),e+=4+m}return u&&(n.set(a,e),e+=u),e},Z1=function(n,e,t,i,r){En(n,e,101010256),En(n,e+8,t),En(n,e+10,t),En(n,e+12,i),En(n,e+16,r)};function nx(n,e){e||(e={});var t={},i=[];tx(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=hl(o),f=h.length,d=c.comment,g=d&&hl(d),x=g&&g.length,m=ep(c.extra);f>65535&&Wu(11);var p=u?q1(l,c):l,b=p.length,S=W1();S.p(l),i.push(ex(c,{size:l.length,crc:S.d(),c:p,f:h,m:g,u:f!=o.length||g&&d.length!=x,o:r,compression:u})),r+=30+f+m+b,s+=76+2*(f+m)+(x||0)+b}for(var v=new Un(s+22),M=r,w=s-r,y=0;y<i.length;++y){var h=i[y];q0(v,h.o,h,h.f,h.u,h.c.length);var E=30+h.f.length+ep(h.extra);v.set(h.c,h.o+E),q0(v,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+E+(h.m?h.m.length:0)}return Z1(v,r,i.length,w,M),v}var Fn=class{constructor(e,t="",i=[],r=[]){this.name=e,this.type=t,this.metadata=i,this.properties=r,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(u=>{let h=u.key,f=u.value;if(Array.isArray(f)){let d=[];return d.push(`${h} = {`),f.forEach(g=>{d.push(`${t}		${g}`)}),d.push(`${t}	}`),d.join(`
`)}else return`${h} = ${f}`}),r=i.length?` (
${i.map(u=>`${t}	${u}`).join(`
`)}
${t})`:"",s=this.properties.map(u=>{let h=u.property.replace(/\n/g,`
`+t+"	"),f=u.metadata.length?` (
${u.metadata.map(d=>`${t}		${d}`).join(`
`)}
${t}	)`:"";return`${t}	${h}${f}`}),o=this.children.map(u=>u.toString(e+1)),a=[];if(s.length>0&&a.push(...s),o.length>0){s.length>0&&a.push("");for(let u=0;u<o.length;u++)a.push(o[u]),u<o.length-1&&a.push("")}let l=a.join(`
`),c=this.type?this.type+" ":"";return`${t}def ${c}"${this.name}"${r}
${t}{
${l}
${t}}`}},qu=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,r){this.parseAsync(e,r).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,r={},s="model.usda";r[s]=null;let o=j1(e,t.animations);t.animationTracks=o;let a=new Fn("Root","Xform"),l=new Fn("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",u=new Fn(c,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),u.addMetadata("sceneName",`"${c}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),l.addChild(u);let h,f={},d={};e.isScene?cx(e,u,f,i,r,t):ux(e,u,f,i,r,t);let g=oT(f,d,t.quickLookCompatible),x=o.size>0?{fps:t.animationFrameRate,endTimeCode:J1(t.animations)*t.animationFrameRate}:null;h=lx(x)+`
`+a.toString()+`

`+g.toString(),r[s]=hl(h),h=null;for(let p in d){let b=d[p];if(b.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");b=await this.textureUtils.decompress(b)}let S=K1(b.image,b.flipY,t.maxTextureSize),v=b.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",M=await new Promise(w=>S.toBlob(w,v));r[`textures/Texture_${p}.${ax(b)}`]=new Uint8Array(await M.arrayBuffer())}let m=0;for(let p in r){let b=r[p],S=34+p.length;m+=S;let v=m&63;if(v!==4){let M=64-v,w=new Uint8Array(M);r[p]=[b,{extra:{12345:w}}]}m=b.length}return nx(r,{level:0,mtime:new Date})}};function ox(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function ax(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function K1(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),r=document.createElement("canvas");r.width=n.width*Math.min(1,i),r.height=n.height*Math.min(1,i);let s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(n,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var Mt=7;function lx(n=null){return`#usda 1.0
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
`}function j1(n,e){let t=new Map;for(let i=0;i<e.length;i++){let r=e[i];for(let s=0;s<r.tracks.length;s++){let o=r.tracks[s],a=Pt.parseTrackName(o.name),l=Pt.findNode(n,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let u=t.get(l);u===void 0&&(u={},t.set(l,u)),u[c]=o}}return t}function J1(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function ix(n,e,t,i){let r=t.times,s=t.values,o=[];for(let a=0;a<r.length;a++){let l=a*3;o.push(`${(r[a]*i).toPrecision(Mt)}: (${s[l].toPrecision(Mt)}, ${s[l+1].toPrecision(Mt)}, ${s[l+2].toPrecision(Mt)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function Q1(n,e){let t=n.times,i=n.values,r=[];for(let s=0;s<t.length;s++){let o=s*4;r.push(`${(t[s]*e).toPrecision(Mt)}: (${i[o+3].toPrecision(Mt)}, ${i[o].toPrecision(Mt)}, ${i[o+1].toPrecision(Mt)}, ${i[o+2].toPrecision(Mt)})`)}return`quatf xformOp:orient.timeSamples = {
	${r.join(`,
	`)},
}`}function cx(n,e,t,i,r,s){for(let o=0,a=n.children.length;o<a;o++)ux(n.children[o],e,t,i,r,s)}function ux(n,e,t,i,r,s){if(n.visible===!1&&s.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),c=l?n.material:[n.material];for(let h=0;h<c.length;h++){let f=c[h];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let u=c.map(h=>t[h.uuid]);if(l===!1){let h=`geometries/Geometry_${a.id}.usda`;if(!(h in r)){let f=nT(a);r[h]=hl(lx()+`
`+f.toString())}}o=eT(n,a,u,i,s)}else n.isCamera?o=cT(n,i,s):o=fx(n,i,s);e.addChild(o),cx(n,o,t,i,r,s)}function hx(n,e,t){let i=t.animationTracks.get(e),r=e.pivot!==null;if(!r&&i===void 0){let c=tT(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${c}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let s=t.animationFrameRate,o=e.position,a=e.quaternion,l=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(ix("xformOp:translate","float3",i.position,s)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(Mt)}, ${o.y.toPrecision(Mt)}, ${o.z.toPrecision(Mt)})`),r){let c=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(Mt)}, ${c.y.toPrecision(Mt)}, ${c.z.toPrecision(Mt)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(Q1(i.quaternion,s)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(Mt)}, ${a.x.toPrecision(Mt)}, ${a.y.toPrecision(Mt)}, ${a.z.toPrecision(Mt)})`),i!==void 0&&i.scale!==void 0?n.addProperty(ix("xformOp:scale","float3",i.scale,s)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(Mt)}, ${l.y.toPrecision(Mt)}, ${l.z.toPrecision(Mt)})`),r?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function fx(n,e,t){let i=ox(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Fn(i,"Xform");return hx(r,n,t),r}function eT(n,e,t,i,r){let s=fx(n,i,r);return t.length===1?(s.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),s.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),s.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):s.addChild(dx(e,t)),s}function tT(n){let e=n.elements;return`( ${Xu(e,0)}, ${Xu(e,4)}, ${Xu(e,8)}, ${Xu(e,12)} )`}function Xu(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function nT(n){let e=new Fn("Geometry"),t=dx(n);return e.addChild(t),e}function dx(n,e=null){let t="Geometry",i=n.attributes,r=i.position.count,s=new Fn(t,"Mesh");s.addProperty(`int[] faceVertexCounts = [${iT(n)}]`),s.addProperty(`int[] faceVertexIndices = [${rT(n)}]`),s.addProperty(`normal3f[] normals = [${rp(i.normal,r)}]`,['interpolation = "vertex"']),s.addProperty(`point3f[] points = [${rp(i.position,r)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=i["uv"+l];c!==void 0&&s.addProperty(`texCoord2f[] primvars:st${l} = [${sT(c)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&s.addProperty(`color3f[] primvars:displayColor = [${rp(o,r)}]`,['interpolation = "vertex"']),s.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let c=0;c<a.length;c++){let u=a[c],h=e[u.materialIndex];if(h===void 0)continue;let f=Math.floor(u.start/3),d=Math.min(f+Math.floor(u.count/3),l),g=[];for(let m=f;m<d;m++)g.push(m);let x=new Fn(`subset_${c}`,"GeomSubset");x.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),x.addProperty('uniform token elementType = "face"'),x.addProperty('uniform token familyName = "materialBind"'),x.addProperty(`int[] indices = [${g.join(", ")}]`),x.addProperty(`rel material:binding = </Materials/Material_${h.id}>`),s.addChild(x)}}return s}function iT(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function rT(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let r=0;r<i;r++)t.push(r)}return t.join(", ")}function rp(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let r=n.getX(i),s=n.getY(i),o=n.getZ(i);t.push(`(${r.toPrecision(Mt)}, ${s.toPrecision(Mt)}, ${o.toPrecision(Mt)})`)}return t.join(", ")}function sT(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),r=n.getY(t);e.push(`(${i.toPrecision(Mt)}, ${1-r.toPrecision(Mt)})`)}return e.join(", ")}function oT(n,e,t=!1){let i=new Fn("Materials");for(let r in n){let s=n[r];i.addChild(aT(s,e,t))}return i}function aT(n,e,t=!1){let i=new Fn(`Material_${n.id}`,"Material");function r(o,a,l){let c=o.source.id+"_"+o.flipY;e[c]=o;let u=o.channel>0?"st"+o.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),g=o.rotation,x=Math.sin(g),m=Math.cos(g);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=x/f.x,d.y+=m-1):(d.x+=x*f.x,d.y+=(1-m)*f.y);let p=new Fn(`PrimvarReader_${a}`,"Shader");p.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),p.addProperty("float2 inputs:fallback = (0.0, 0.0)"),p.addProperty(`string inputs:varname = "${u}"`),p.addProperty("float2 outputs:result");let b=new Fn(`Transform2d_${a}`,"Shader");b.addProperty('uniform token info:id = "UsdTransform2d"'),b.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),b.addProperty(`float inputs:rotation = ${(g*(180/Math.PI)).toFixed(Mt)}`),b.addProperty(`float2 inputs:scale = ${sx(f)}`),b.addProperty(`float2 inputs:translation = ${sx(d)}`),b.addProperty("float2 outputs:result");let S=new Fn(`Texture_${o.id}_${a}`,"Shader");if(S.addProperty('uniform token info:id = "UsdUVTexture"'),S.addProperty(`asset inputs:file = @textures/Texture_${c}.${ax(o)}@`),S.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let v=a==="diffuse"?n.opacity:1;S.addProperty(`float4 inputs:scale = ${lT(l,v)}`)}if(a==="normal"){let v=n.normalScale.x;S.addProperty(`float4 inputs:scale = (${2*v}, ${2*v}, 2, 1)`),S.addProperty(`float4 inputs:bias = (${-v}, ${-v}, -1, 0)`)}return S.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===Pi?"raw":"sRGB"}"`),S.addProperty(`token inputs:wrapS = "${h[o.wrapS]}"`),S.addProperty(`token inputs:wrapT = "${h[o.wrapT]}"`),S.addProperty("float outputs:r"),S.addProperty("float outputs:g"),S.addProperty("float outputs:b"),S.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&S.addProperty("float outputs:a"),[p,b,S]}n.side===Dt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let s=new Fn("PreviewSurface","Shader");if(s.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(s.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),s.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),r(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):s.addProperty(`color3f inputs:diffuseColor = ${rx(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){s.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new Je(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);r(n.emissiveMap,"emissive",a).forEach(c=>i.addChild(c))}else n.emissive.getHex()>0&&s.addProperty(`color3f inputs:emissiveColor = ${rx(n.emissive)}`)}if(n.normalMap&&(s.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),r(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){s.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new Je(o,o,o);r(n.aoMap,"occlusion",a).forEach(c=>i.addChild(c))}if(n.roughnessMap){s.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new Je(n.roughness,n.roughness,n.roughness);r(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){s.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new Je(n.metalness,n.metalness,n.metalness);r(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),s.addProperty("float inputs:opacityThreshold = 0.0001"),r(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):s.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){s.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new Je(n.clearcoat,n.clearcoat,n.clearcoat);r(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){s.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new Je(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);r(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);s.addProperty(`float inputs:ior = ${n.ior}`)}return s.addProperty("int inputs:useSpecularWorkflow = 0"),s.addProperty("token outputs:surface"),i.addChild(s),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function rx(n){return`(${n.r}, ${n.g}, ${n.b})`}function lT(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function sx(n){return`(${n.x}, ${n.y})`}function cT(n,e,t){let i=ox(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Fn(i,"Camera");hx(r,n,t);let s=n.isOrthographicCamera?"orthographic":"perspective";r.addProperty(`token projection = "${s}"`);let o=`(${n.near.toPrecision(Mt)}, ${n.far.toPrecision(Mt)})`;r.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(Mt):a=n.getFilmWidth().toPrecision(Mt),r.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(Mt):l=n.getFilmHeight().toPrecision(Mt),r.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let c=n.getFocalLength().toPrecision(Mt);r.addProperty(`float focalLength = ${c}`);let u=n.focus.toPrecision(Mt);r.addProperty(`float focusDistance = ${u}`)}return r}var px=new Lt,$u=new I,Ii=class extends za{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Gt(e,3)),this.setAttribute("uv",new Gt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Kr(t,6,1);return this.setAttribute("instanceStart",new In(i,3,0)),this.setAttribute("instanceEnd",new In(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Kr(t,6,1);return this.setAttribute("instanceColorStart",new In(i,3,0)),this.setAttribute("instanceColorEnd",new In(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new La(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),px.setFromBufferAttribute(t),this.boundingBox.union(px))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$u.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($u)),$u.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared($u));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Xe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ze},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xn.line={uniforms:nl.merge([Xe.common,Xe.fog,Xe.line]),vertexShader:`
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
		`};var Zi=class extends _n{constructor(e){super({type:"LineMaterial",uniforms:nl.clone(Xn.line.uniforms),vertexShader:Xn.line.vertexShader,fragmentShader:Xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var sp=new wt,mx=new I,gx=new I,Tn=new wt,An=new wt,Ki=new wt,op=new I,ap=new lt,Rn=new Va,xx=new I,Yu=new Lt,Zu=new yn,ji=new wt,Ji,Ls;function yx(n,e,t){return ji.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ji.multiplyScalar(1/ji.w),ji.x=Ls/t.width,ji.y=Ls/t.height,ji.applyMatrix4(n.projectionMatrixInverse),ji.multiplyScalar(1/ji.w),Math.abs(Math.max(ji.x,ji.y))}function uT(n,e){let t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Rn.start.fromBufferAttribute(r,a),Rn.end.fromBufferAttribute(s,a),Rn.applyMatrix4(t);let c=new I,u=new I;Ji.distanceSqToSegment(Rn.start,Rn.end,u,c),u.distanceTo(c)<Ls*.5&&e.push({point:u,pointOnLine:c,distance:Ji.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function hT(n,e,t){let i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;Ji.at(1,Ki),Ki.w=1,Ki.applyMatrix4(e.matrixWorldInverse),Ki.applyMatrix4(i),Ki.multiplyScalar(1/Ki.w),Ki.x*=s.x/2,Ki.y*=s.y/2,Ki.z=0,op.copy(Ki),ap.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(Tn.fromBufferAttribute(l,f),An.fromBufferAttribute(c,f),Tn.w=1,An.w=1,Tn.applyMatrix4(ap),An.applyMatrix4(ap),Tn.z>h&&An.z>h)continue;if(Tn.z>h){let S=Tn.z-An.z,v=(Tn.z-h)/S;Tn.lerp(An,v)}else if(An.z>h){let S=An.z-Tn.z,v=(An.z-h)/S;An.lerp(Tn,v)}Tn.applyMatrix4(i),An.applyMatrix4(i),Tn.multiplyScalar(1/Tn.w),An.multiplyScalar(1/An.w),Tn.x*=s.x/2,Tn.y*=s.y/2,An.x*=s.x/2,An.y*=s.y/2,Rn.start.copy(Tn),Rn.start.z=0,Rn.end.copy(An),Rn.end.z=0;let x=Rn.closestPointToPointParameter(op,!0);Rn.at(x,xx);let m=ns.lerp(Tn.z,An.z,x),p=m>=-1&&m<=1,b=op.distanceTo(xx)<Ls*.5;if(p&&b){Rn.start.fromBufferAttribute(l,f),Rn.end.fromBufferAttribute(c,f),Rn.start.applyMatrix4(o),Rn.end.applyMatrix4(o);let S=new I,v=new I;Ji.distanceSqToSegment(Rn.start,Rn.end,v,S),t.push({point:v,pointOnLine:S,distance:Ji.origin.distanceTo(v),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var rs=class extends pt{constructor(e=new Ii,t=new Zi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)mx.fromBufferAttribute(t,o),gx.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+mx.distanceTo(gx);let s=new Kr(r,2,1);return e.setAttribute("instanceDistanceStart",new In(s,1,0)),e.setAttribute("instanceDistanceEnd",new In(s,1,1)),this}raycast(e,t){let i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ji=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Ls=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Zu.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Ls*.5;else{let h=Math.max(r.near,Zu.distanceToPoint(Ji.origin));c=yx(r,h,l.resolution)}if(Zu.radius+=c,Ji.intersectsSphere(Zu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Yu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Ls*.5;else{let h=Math.max(r.near,Yu.distanceToPoint(Ji.origin));u=yx(r,h,l.resolution)}Yu.expandByScalar(u),Ji.intersectsBox(Yu)!==!1&&(i?uT(this,t):hT(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(sp),this.material.uniforms.resolution.value.set(sp.z,sp.w))}};var bx="blueprints.edgeMode",fT="blueprints.edgesEnabled",Ds="none",Ns="transparent",dl="opaque",dT=20,Mx=2.5,Sx=0,ju=35e-5,cp=2e-6;function pT(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*cp}var fl=1,wx=4,mT=.0012,gT=.0036,xT=.02,yT=.0035,_x=.012;function vx(n){return n===Ds||n===Ns||n===dl?n:n==="1"||n==="true"?Ns:n==="0"||n==="false"?Ds:null}function Ex(){try{let n=vx(localStorage.getItem(bx));if(n)return n;let e=vx(localStorage.getItem(fT));if(e)return hp(e),e}catch{}return Ns}function hp(n){try{localStorage.setItem(bx,n)}catch{}}function Bn(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function Tx(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new Pa(n,dT),i=t.getAttribute("position"),r=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),r}function _T(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var Ku=new I;function Ax(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],r=n[t+1],s=n[t+2],o=n[t+3],a=n[t+4],l=n[t+5],c=o-i,u=a-r,h=l-s,f=Math.hypot(c,u,h);f<1e-6||e.push({ax:i,ay:r,az:s,bx:o,by:a,bz:l,dx:c/f,dy:u/f,dz:h/f,len:f})}return e}function vT(n,e,t,i,r,s){let o=d=>Math.round(d/5e-4),a=o(n),l=o(e),c=o(t),u=o(i),h=o(r),f=o(s);if(a>u||a===u&&l>h||a===u&&l===h&&c>f){let d=a;a=u,u=d;let g=l;l=h,h=g;let x=c;c=f,f=x}return`${a},${l},${c},${u},${h},${f}`}function Rx(n){let e=Ax(n),t=[],i=new Set;for(let r=0;r<e.length;r++){let s=e[r];for(let o=r+1;o<e.length;o++){let a=e[o];if(Math.abs(s.dx*a.dx+s.dy*a.dy+s.dz*a.dz)<.985)continue;let c=s.ax-a.ax,u=s.ay-a.ay,h=s.az-a.az,f=c*s.dx+u*s.dy+h*s.dz,d=c-f*s.dx,g=u-f*s.dy,x=h-f*s.dz,m=Math.hypot(d,g,x);if(m<mT||m>gT)continue;let p=(a.ax-s.ax)*s.dx+(a.ay-s.ay)*s.dy+(a.az-s.az)*s.dz,b=(a.bx-s.ax)*s.dx+(a.by-s.ay)*s.dy+(a.bz-s.az)*s.dz,S=Math.max(0,Math.min(p,b)),v=Math.min(s.len,Math.max(p,b));if(v-S<xT)continue;let M=-d/m*(m*.5),w=-g/m*(m*.5),y=-x/m*(m*.5),E=s.ax+s.dx*S+M,L=s.ay+s.dy*S+w,D=s.az+s.dz*S+y,F=s.ax+s.dx*v+M,G=s.ay+s.dy*v+w,k=s.az+s.dz*v+y,N=vT(E,L,D,F,G,k);i.has(N)||(i.add(N),t.push(E,L,D,F,G,k))}}return new Float32Array(t)}function bT(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,r=0,s=0,o=t?t.count:e.count,a=c=>{let u=t?t.getX(c):c;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let c=0;c+2<o;c+=3){let u=a(c),h=a(c+1),f=a(c+2),d=h[0]-u[0],g=h[1]-u[1],x=h[2]-u[2],m=f[0]-u[0],p=f[1]-u[1],b=f[2]-u[2];i+=g*b-x*p,r+=x*m-d*b,s+=d*p-g*m}let l=Math.hypot(i,r,s)||1;return{x:i/l,y:r/l,z:s/l}}function MT(n,e){let t=n.getAttribute("position"),i,r,s;Math.abs(e.z)<.9?(i=-e.y,r=e.x,s=0):(i=0,r=-e.z,s=e.y);let o=Math.hypot(i,r,s)||1;i/=o,r/=o,s/=o;let a=e.y*s-e.z*r,l=e.z*i-e.x*s,c=e.x*r-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let g=0;g<t.count;g++){let x=t.getX(g),m=t.getY(g),p=t.getZ(g),b=x*i+m*r+p*s,S=x*a+m*l+p*c;b<u&&(u=b),b>h&&(h=b),S<f&&(f=S),S>d&&(d=S)}return Math.min(h-u,d-f)}function ST(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=bT(n),i=MT(n,t);return t.z>.5?i>_x:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>_x}function Cx(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let r=0;r<e.length;r+=3)Ku.set(e[r],e[r+1],e[r+2]).applyMatrix4(t),i[r]=Ku.x,i[r+1]=Ku.y,i[r+2]=Ku.z;return i}function wT(n,e,t){if(!t||t.length<6)return n;let i=Cx(e,n),r=Ax(t),s=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],l=i[o+1],c=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,g=h-l,x=f-c,m=Math.hypot(d,g,x);if(m<1e-6)continue;let p=d/m,b=g/m,S=x/m,v=!1;for(let M of r){if(Math.abs(p*M.dx+b*M.dy+S*M.dz)<.95)continue;let y=a-M.ax,E=l-M.ay,L=c-M.az,D=y*M.dx+E*M.dy+L*M.dz,F=y-D*M.dx,G=E-D*M.dy,k=L-D*M.dz;if(Math.hypot(F,G,k)>yT)continue;let N=(a-M.ax)*M.dx+(l-M.ay)*M.dy+(c-M.az)*M.dz,W=(u-M.ax)*M.dx+(h-M.ay)*M.dy+(f-M.az)*M.dz,Q=Math.min(N,W),$=Math.max(N,W);if(Math.min($,M.len)-Math.max(Q,0)>.01){v=!0;break}}v||s.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(s)}function ET(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function TT(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function AT(n,e=Ns){return e===Ds?0:e===dl?n?.visible===!1?0:1:TT(n)}function up(n,e,t=1,i=cp){let r=Math.max(0,Math.min(1,Number(t)||0)),s=Number.isFinite(i)?i:cp,o=new Zi({color:Sx,linewidth:Mx,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:r<1,opacity:r<1?r:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${ju};
			end.z += ${ju};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if ${pp}
				gl_FragDepth -= ${s};
			#else
				gl_FragDepth = gl_FragCoord.z - ${s};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${wx}-${s}-${ju}`,e&&o.resolution.set(e.x,e.y),o}function Px(n,e,t,i){let r=Math.max(0,Math.min(1,Number(e)||0)),s=up(t,null,r);s.depthTest=!1,s.depthWrite=!1,s.transparent=!0,s.opacity=r;let o=s.onBeforeCompile?.bind(s),a=s.customProgramCacheKey?.bind(s);s.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,s.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},s.needsUpdate=!0;let l=new Ii;l.setPositions(n);let c=new rs(l,s);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.renderOrder=1e3,c.raycast=()=>{},c.userData.isPeeledEdgeBatch=!0,c}function Ju(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function Ix(n){if(!n)return;let e=[];n.traverse(t=>{Bn(t)&&e.push(t)});for(let t of e)Ju(t)}function ss(n,e){n&&n.traverse(t=>{Bn(t)&&(t.visible=e)})}function Lx(n,e,t){if(!n)return;let i=Math.max(1,e),r=Math.max(1,t);n.traverse(s=>{if(!Bn(s)||!s.material)return;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a?.resolution&&a.resolution.set(i,r)})}function fp(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!Bn(i)||!i.material)return;let r=Array.isArray(i.material)?i.material:[i.material];for(let s of r){if(!s)continue;let o=s.clippingPlanes?s.clippingPlanes.length:0;s.clippingPlanes=t,s.clipIntersection=!1,o!==t.length&&(s.needsUpdate=!0)}})}function RT(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=Tx(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?Rx(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?ST(n.geometry)?wT(i,n,t):new Float32Array(0):i}function CT(n,e,t,i,r){n.updateWorldMatrix(!0,!1);let s=RT(n,i,r),o=Qu(t,n.matrixWorld),a=Nx(n.geometry,o),l=_T(s,a),c=new Ii,u=e.geometry;l.length>=6?(c.setPositions(l),e.geometry=c,e.computeLineDistances()):e.geometry=c,u?.dispose?.()}function PT(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let r=i.userData.bpHardEdgePositions;r instanceof Float32Array||(r=Tx(i.geometry),i.userData.bpHardEdgePositions=r);let s=Rx(r);if(s.length<6)continue;let o=Cx(i,s);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function Dx(n,e,t={}){let i=t.clippingPlanes??[],r=t.resolution||null,s=t.edgeMode??Ns,o=e?PT(n):new Float32Array(0);for(let[a,l]of n)for(let c of l){if(!c||!c.isMesh||!c.geometry||Bn(c))continue;let u=null;for(let d of c.children)if(Bn(d)){u=d;break}if(!e){u&&Ju(u);continue}u&&!u.isLineSegments2&&(Ju(u),u=null);let h=AT(c,s),f=pT(c);if(u){let d=u.material,g=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${wx}-${f}-${ju}`;if(!d||typeof d.customProgramCacheKey!="function"||g!==x){Ju(u);let m=up(i,r,h,f),p=new Ii;u=new rs(p,m),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(fl),c.add(u)}else d.color&&d.color.setHex(Sx),typeof d.linewidth=="number"&&(d.linewidth=Mx),d.clippingPlanes=i,d.clipIntersection=!1,r&&d.resolution&&d.resolution.set(r.x,r.y),ET(d,h),d.needsUpdate=!0}else{let d=up(i,r,h,f),g=new Ii;u=new rs(g,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(fl),c.add(u)}u.layers.set(fl),CT(c,u,i,a,o)}}function IT(n){if(!n.isMesh||Bn(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function dp(n,e,t,i,r={}){if(!i)return;let s=!!r.reuseDepth,o=!1;if(i.traverse(x=>{Bn(x)&&(o=!0)}),!o){lp(n);return}let a=n.autoClear,l=e.background,c=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,s){ss(i,!0),t.layers.set(fl),n.render(e,t),t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,lp(n);return}ss(i,!1);let h=[];i.traverse(x=>{!IT(x)||x.visible===!1||(h.push(x),x.visible=!1)});let f=[],d=new Set;e.traverse(x=>{if(!x.isMesh||Bn(x)||x.visible===!1)return;let m=Array.isArray(x.material)?x.material:[x.material];for(let p of m)!p||d.has(p)||(d.add(p),f.push({mat:p,colorWrite:p.colorWrite!==!1,depthWrite:p.depthWrite!==!1}),p.colorWrite=!1,p.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let x of f)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of h)x.visible=!0}ss(i,!0);let g=[];r.opaqueEdgesOnly&&i.traverse(x=>{if(!Bn(x))return;let m=Array.isArray(x.material)?x.material[0]:x.material;m&&m.transparent&&m.opacity<1-1e-4&&(g.push(x),x.visible=!1)}),t.layers.set(fl);try{n.render(e,t)}finally{for(let x of g)x.visible=!0}t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,lp(n)}function lp(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var Ox=!0,Ux=5,xp=12,LT=xp,Bx=.001,DT=.5,NT=1;function Fx(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let r=t.children;if(r)for(let s=0;s<r.length;s++){let o=r[s];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var eh=1e5,Li={value:0},en={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Bx},uResolution:{value:new Ze(1,1)}};function mp(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Li.value),t.tPrevViewZ&&(t.tPrevViewZ.value=en.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=en.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=en.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=en.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(en.uResolution.value)}function pl(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,r)=>{t?.(i,r),i.uniforms.uPeelStage=Li,i.uniforms.tPrevViewZ=en.tPrevViewZ,i.uniforms.tPeelViewZ=en.tPeelViewZ,i.uniforms.tOpaqueViewZ=en.tOpaqueViewZ,i.uniforms.uViewZEps=en.uViewZEps,i.uniforms.uResolution=en.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
#endif`);let s=`
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
			if (peelZ > ${(eh*.5).toFixed(1)}) discard;
			float peelEps = max(uViewZEps, 1e-3 * max(peelZ, 1.0));
			if (vPeelViewZ > peelZ + peelEps) discard;
		}
	}
#endif`,o="#include <alphahash_fragment>";i.fragmentShader.includes(o)&&(i.fragmentShader=i.fragmentShader.replace(o,`${o}
${s}`)),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
#ifdef USE_BP_PEEL
	if (uPeelStage > 0.5 && uPeelStage < 1.5) {
		gl_FragColor = vec4(vPeelViewZ, 0.0, 0.0, 1.0);
	}
#endif`)},n.needsUpdate=!0}function gp(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function kx(n){let e=new Ze,t=new Je,i=null,r=null,s=null,o=null,a=null,l=null,c=new Ai(-1,1,1,-1,0,1),u=new Gn,h=new _n({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Je(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new pt(new hi(2,2),h);u.add(f);let d=new _n({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Gc,blendSrc:$a,blendDst:es,blendSrcAlpha:$a,blendDstAlpha:es,blendEquation:Ri}),g=new pt(new hi(2,2),d),x=new Gn;x.add(g);let m=new _n({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:fi}),p=new pt(new hi(2,2),m),b=new Gn;b.add(p);let S=new _n({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:fi}),v=new pt(new hi(2,2),S),M=new Gn;M.add(v);function w(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function y(A){w();let te=n.autoClear;n.setRenderTarget(A),n.autoClear=!1,n.render(M,c),n.autoClear=te}let E=new _n({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Dt,clipping:!0,blending:fi});function L(A,te,Y={}){m.uniforms.uValue.value=te;let Te=n.autoClear;w(),n.setRenderTarget(A),Y.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(b,c),n.autoClear=Te}function D(){i?.dispose(),r?.dispose(),s?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),i=null,r=null,s=null,o=null,a=null,l=null}let F=0;function G(A,te,Y){let Te=Math.max(1,Math.floor(A)),q=Math.max(1,Math.floor(te)),xe=Math.min(1,Math.max(.25,Y)),ve=Math.max(1,Math.floor(Te*xe)),Re=Math.max(1,Math.floor(q*xe));if(i&&i.width===Te&&i.height===q&&s&&s.width===ve&&s.height===Re&&F===xe)return;D(),F=xe,i=new on(Te,q,{format:wn,type:Nn,colorSpace:Tt,depthBuffer:!0,stencilBuffer:!1});let P={format:wn,type:Wn,depthBuffer:!0,stencilBuffer:!1,magFilter:$t,minFilter:$t};r=new on(ve,Re,P),s=new on(ve,Re,P),o=new on(ve,Re,P),a=new on(ve,Re,{format:wn,type:Zn,colorSpace:Tt,depthBuffer:!1,stencilBuffer:!1,magFilter:Yt,minFilter:Yt}),l=new on(ve,Re,{format:wn,type:Zn,colorSpace:Tt,depthBuffer:!1,stencilBuffer:!1,magFilter:Yt,minFilter:Yt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,en.tOpaqueViewZ.value=r.texture,en.uResolution.value.set(ve,Re)}function k(A){let te=[],Y=[];return A?(A.traverse(Te=>{if(!Te.isMesh||!Te.visible||Bn(Te))return;let q=Te,xe=Array.isArray(q.material)?q.material:[q.material],ve=!1;for(let Re of xe)if(Re&&Re.transparent&&Re.opacity<1-1e-4){ve=!0;break}ve?Y.push(q):te.push(q)}),{opaque:te,transparent:Y}):{opaque:te,transparent:Y}}function N(A,te){for(let Y of A)Y.visible=te}function W(A,te){A.blending=te.blending,A.blendSrc=te.blendSrc,A.blendDst=te.blendDst,A.blendSrcAlpha=te.blendSrcAlpha,A.blendDstAlpha=te.blendDstAlpha,A.blendEquation=te.blendEquation,A.blendEquationAlpha=te.blendEquation}let Q={meshes:[],sources:[],key:""},$={meshes:[],sources:[],key:""},ye="",ee="",z=new Gn,j=new Gn,Se=new Gn,Ie=[];function K(A){for(let te of A.meshes)te.geometry.dispose();A.meshes=[],A.sources=[],A.key=""}function me(){for(let A of Ie){Se.remove(A),A.geometry?.dispose?.();let te=A.material;if(Array.isArray(te))for(let Y of te)Y?.dispose?.();else te?.dispose?.()}Ie=[]}function re(){K(Q),K($),me(),ye="",ee=""}function H(A){if(me(),!A.length)return;let te=new Map,Y=new I;for(let q of A){let xe=null;for(let be of q.children)if(Bn(be)){xe=be;break}if(!xe?.geometry)continue;let ve=xe.material,Re=ve&&ve.transparent&&typeof ve.opacity=="number"?ve.opacity:1;if(!(Re<1-1e-4))continue;let P=xe.geometry.getAttribute("instanceStart"),T=xe.geometry.getAttribute("instanceEnd");if(!P||!T||!P.count)continue;let X=Re.toFixed(3),_e=te.get(X);_e||(_e={opacity:Re,planes:ve.clippingPlanes||[],chunks:[]},te.set(X,_e)),q.updateWorldMatrix(!0,!1);let de=P.count,ue=new Float32Array(de*6);for(let be=0;be<de;be++)Y.fromBufferAttribute(P,be).applyMatrix4(q.matrixWorld),ue[be*6]=Y.x,ue[be*6+1]=Y.y,ue[be*6+2]=Y.z,Y.fromBufferAttribute(T,be).applyMatrix4(q.matrixWorld),ue[be*6+3]=Y.x,ue[be*6+4]=Y.y,ue[be*6+5]=Y.z;_e.chunks.push(ue)}let Te={stage:Li,prevZ:en.tPrevViewZ,peelZ:en.tPeelViewZ,opaqueZ:en.tOpaqueViewZ,eps:en.uViewZEps,resolution:en.uResolution};for(let q of te.values()){let xe=0;for(let T of q.chunks)xe+=T.length;if(xe<6)continue;let ve=new Float32Array(xe),Re=0;for(let T of q.chunks)ve.set(T,Re),Re+=T.length;let P=Px(ve,q.opacity,q.planes,Te);Se.add(P),Ie.push(P)}}function J(A,te,Y,Te){if(!Y.length)return;let q=`${Fx(Y)}#${Fx(te)}`;Te&&Te===ye&&q===ee&&Q.meshes.length||(Ne(Q,A,Y),Ne($,A,te),Q.sources.length===Y.length&&$.sources.length===te.length&&(H(Y),ye=Te||"",ee=q))}function Ee(A){return Object.keys(A.attributes).sort().join(",")}function Ye(A){let te=A.geometry,Y=te.index?te.toNonIndexed():te.clone();return Y.applyMatrix4(A.matrixWorld),Y}function Ne(A,te,Y){let Te=String(Y.length);for(let xe of Y){let ve=Array.isArray(xe.material)?"m":xe.material?.id||0;Te+=`.${xe.id}:${ve}`}if(Te===A.key)return;te.updateWorldMatrix(!0,!0),K(A),A.key=Te;let q=new Map;for(let xe of Y){if(!xe.geometry||Array.isArray(xe.material)||!xe.material)continue;let ve=`${xe.material.uuid}:${Ee(xe.geometry)}`,Re=q.get(ve);Re||(Re={mat:xe.material,meshes:[]},q.set(ve,Re)),Re.meshes.push(xe)}for(let xe of q.values()){let ve=[];try{for(let T of xe.meshes)ve.push(Ye(T));let Re=P0(ve,!1);if(!Re)continue;let P=new pt(Re,xe.mat);P.frustumCulled=!1,P.matrixAutoUpdate=!1,P.renderOrder=0,P.userData.isPeelBatch=!0,A.meshes.push(P),A.sources.push(...xe.meshes)}catch{}finally{for(let Re of ve)Re.dispose()}}}function qe(A,te,Y,Te){if(!A.meshes.length||A.sources.length!==te.length)return n.render(Y,Te),!1;z.environment=Y.environment,z.environmentIntensity=Y.environmentIntensity,z.fog=Y.fog;let q=[];for(let xe of Y.children)xe.isLight&&q.push(xe);for(let xe of q)z.add(xe);for(let xe of A.meshes)z.add(xe);n.render(z,Te);for(let xe of A.meshes)z.remove(xe);for(let xe of q)Y.add(xe);return!0}function he(A,te,Y){qe(Q,Y,A,te)}function Ae(A,te,Y){Y.length&&qe($,Y,A,te)}function ze(A,te,Y){if(!$.meshes.length||$.sources.length!==te.length)return!1;j.overrideMaterial=Y;for(let Te of $.meshes)j.add(Te);n.render(j,A),j.overrideMaterial=null;for(let Te of $.meshes)j.remove(Te);return!0}function He(A){let te=new Set;for(let Y of A){let Te=Array.isArray(Y.material)?Y.material:[Y.material];for(let q of Te)q&&te.add(q)}return[...te]}function Ke(A,te,Y){if(!Y)return;let Te=Y.visible,q=A.background,xe=n.autoClear;Y.visible=!1,A.background=null,n.autoClear=!1,w(),n.clearDepth(),n.render(A,te),Y.visible=Te,A.background=q,n.autoClear=xe}function Ge(A){return A.children.filter(te=>te.userData?.blueprintAnnotations)}function ot(A,te){for(let Y of A)Y.visible=te}function ne(A,te,Y){Ge(A).some(Te=>Te.visible)&&Ke(A,te,Y)}function Ue(A,te,Y,Te={}){ss(Y,!1);let q=Ge(A),xe=q.map(ve=>ve.visible);ot(q,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(A,te),Te.skipEdges||dp(n,A,te,Y,{reuseDepth:!!Te.reuseDepth}),q.forEach((ve,Re)=>{ve.visible=xe[Re]}),ne(A,te,Y)}function je(A,te,Y,Te,q={}){if(!(Ox&&(typeof Te=="function"?Te():!!Te)))return Li.value=0,Ue(A,te,Y,{reuseDepth:!0}),!1;if(q.quality!=="high"){Li.value=0,Ue(A,te,Y,{reuseDepth:!0});let Z=q.batchKey||"";if(Y&&!q.deferPrime&&Z!==ye){let De=k(Y);J(Y,De.opaque,De.transparent,Z)}return!0}let{opaque:ve,transparent:Re}=k(Y);if(!Re.length)return Li.value=0,Ue(A,te,Y,{reuseDepth:!0}),!1;Y&&J(Y,ve,Re,q.batchKey||"");let P=q.quality==="high",T=P?NT:DT,X=P?xp:Ux;n.getDrawingBufferSize(e),G(e.x,e.y,T);let _e=n.autoClear,de=n.toneMapping,ue=A.background;ue instanceof Je?t.copy(ue):t.set(1118481),h.uniforms.uBackground.value.copy(t);let be=[];for(let Z of[...ve,...Re])be.push({mesh:Z,visible:Z.visible});let ae=He(Re),le=[];for(let Z of ae)pl(Z),le.push({mat:Z,snap:{blending:Z.blending,blendSrc:Z.blendSrc,blendDst:Z.blendDst,blendSrcAlpha:Z.blendSrcAlpha,blendDstAlpha:Z.blendDstAlpha,blendEquation:Z.blendEquation,blendEquationAlpha:Z.blendEquationAlpha,depthWrite:Z.depthWrite,depthTest:Z.depthTest,transparent:Z.transparent,opacity:Z.opacity,colorWrite:Z.colorWrite,side:Z.side,forceSinglePass:Z.forceSinglePass}});gp(ae,!0);let Ce=new Map;for(let Z of Re)Ce.set(Z,Z.onBeforeRender),Z.onBeforeRender=function(rt,Pe,dt,zt,jt,rr){let sr=Array.isArray(jt)?jt:[jt];for(let Ur of sr)Ur&&mp(Ur);let si=Ce.get(Z);typeof si=="function"&&si.call(this,rt,Pe,dt,zt,jt,rr)};let B=null;for(let Z of ae)if(Z.clippingPlanes?.length){B=Z.clippingPlanes;break}if(!B)for(let Z of ve){let De=Array.isArray(Z.material)?Z.material:[Z.material];for(let rt of De)if(rt?.clippingPlanes?.length){B=rt.clippingPlanes;break}if(B)break}E.clippingPlanes=B||[],E.clipIntersection=!1,A.background=null,n.autoClear=!0,Li.value=0;let pe=[];for(let Z of A.children)Z!==Y&&(Z.isLight||(pe.push({obj:Z,visible:Z.visible}),Z.visible=!1));function fe(){for(let[Z,De]of Ce)Z.onBeforeRender=De}function Fe(){for(let{mat:Z,snap:De}of le)W(Z,De),Z.blendEquationAlpha=De.blendEquationAlpha,Z.depthWrite=De.depthWrite,Z.depthTest=De.depthTest,Z.transparent=De.transparent,Z.opacity=De.opacity,Z.colorWrite=De.colorWrite!==!1,Z.side=De.side,Z.forceSinglePass=De.forceSinglePass,Z.needsUpdate=!0;for(let{mesh:Z,visible:De}of be)Z.visible=De;for(let{obj:Z,visible:De}of pe)Z.visible=De;return fe(),gp(ae,!1),Li.value=0,A.background=ue,A.overrideMaterial=null,n.toneMapping=de,n.setRenderTarget(null),n.autoClear=!0,Ue(A,te,Y),n.autoClear=_e,!1}if(N(Re,!1),N(ve,!0),ss(Y,!1),w(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),Ae(A,te,ve),n.setRenderTarget(r),n.setClearColor(0,1),L(r,eh,{clearDepth:!0}),P){let Z=new Float32Array(4);try{n.readRenderTargetPixels(r,2,2,1,1,Z)}catch{Z[0]=0}if(!Number.isFinite(Z[0])||Z[0]<eh*.5)return Fe()}let Le=A.overrideMaterial;n.setRenderTarget(r),n.autoClear=!1,ze(te,ve,E)||(A.overrideMaterial=E,n.render(A,te),A.overrideMaterial=Le),n.autoClear=!0,en.tOpaqueViewZ.value=r.texture,y(a),L(o,0),en.tPrevViewZ.value=o.texture,N(ve,!1),N(Re,!0),ss(Y,!1);let Oe=!1;for(let Z=0;Z<X;Z++){en.tPrevViewZ.value=o.texture,en.tPeelViewZ.value=o.texture,Li.value=1;for(let{mat:Pe}of le)Pe.depthWrite=!0,Pe.depthTest=!0,Pe.colorWrite=!0,Pe.transparent=!0,Pe.forceSinglePass=!0,W(Pe,{blending:fi,blendSrc:es,blendDst:Xa,blendSrcAlpha:es,blendDstAlpha:Xa,blendEquation:Ri}),mp(Pe);w(),n.setRenderTarget(s),n.setClearColor(0,1),n.clear(!1,!0,!1),L(s,eh),n.setRenderTarget(s),n.autoClear=!1,he(A,te,Re),n.autoClear=!0,en.tPeelViewZ.value=s.texture,Li.value=2;for(let{mat:Pe}of le)Pe.depthWrite=!1,Pe.depthTest=!1,Pe.colorWrite=!0,Pe.transparent=!0,Pe.forceSinglePass=!0,W(Pe,{blending:Xi,blendSrc:qa,blendDst:Lo,blendSrcAlpha:es,blendDstAlpha:Lo,blendEquation:Ri}),mp(Pe);y(l);let De=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(l),he(A,te,Re),n.autoClear=De,Ie.length&&l){for(let dt of Ie)dt.material?.resolution?.set(l.width,l.height);let Pe=te.layers.mask;te.layers.set(0),n.autoClear=!1,n.render(Se,te),te.layers.mask=Pe,n.autoClear=!0}Oe=!0,d.uniforms.tSrc.value=l.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(x,c),n.autoClear=!0;let rt=o;o=s,s=rt}if(!Oe)return Fe();for(let{mat:Z,snap:De}of le)W(Z,De),Z.blendEquationAlpha=De.blendEquationAlpha,Z.depthWrite=De.depthWrite,Z.depthTest=De.depthTest,Z.transparent=De.transparent,Z.opacity=De.opacity,Z.colorWrite=De.colorWrite!==!1,Z.side=De.side,Z.forceSinglePass=De.forceSinglePass;for(let{mesh:Z,visible:De}of be)Z.visible=De;for(let{obj:Z,visible:De}of pe)Z.visible=De;fe(),ss(Y,!0),gp(ae,!1),Li.value=0,A.background=ue,n.toneMapping=de,n.setRenderTarget(null),n.autoClear=!0,n.render(u,c);let Be=Ge(A),st=Be.map(Z=>Z.visible);return ot(Be,!1),P&&Y&&dp(n,A,te,Y,{opaqueEdgesOnly:Ie.length>0}),Be.forEach((Z,De)=>{Z.visible=st[De]}),ne(A,te,Y),n.autoClear=_e,!0}function ge(){re(),D(),h.dispose(),f.geometry.dispose(),d.dispose(),g.geometry.dispose(),m.dispose(),p.geometry.dispose(),S.dispose(),v.geometry.dispose(),E.dispose()}return{render:je,dispose:ge,MAX_PEELS:LT,MAX_PEELS_FAST:Ux,MAX_PEELS_HIGH:xp,VIEW_Z_EPSILON:Bx,USE_DEPTH_PEEL:Ox}}var Hx="blueprints.materialMode",th="solid",ml="realistic",OT={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},UT={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},FT=2e-6,BT=3,pp="defined( USE_LOGARITHMIC_DEPTH_BUFFER ) || defined( USE_LOGDEPTHBUF )";function _p(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),r=n.customProgramCacheKey?.bind(n),s=FT.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if ${pp}
	{
		float bpFaceBias = ${t}.0 * ${s};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${r?r():n.type}|bpLayerDepth-r${BT}-${t}`,n.needsUpdate=!0}var kT=[];function Vx(n,e,t){let i=new Set(n),r=Array.isArray(e)&&e.length?e:kT,s=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),c.push({type:"leaf",id:u,label:s(u)});continue}let h=o(u.children||[]);h.length&&c.push({type:"group",id:u.id,label:s(u.id),children:h})}return c}let a=o(r);if(i.size){let l=[...i].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:s(c)}));a.push({type:"group",id:"other",label:s("other"),children:l})}return a}function Gx(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let r of e)r.type==="group"&&t.set(r.id,nh(r));let i={};for(let[r,s]of Object.entries(n)){let o=t.get(r);if(o&&o.length)for(let a of o)i[a]=s;else i[r]=s}return i}function nh(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...nh(t));return e}function zT(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let r of n.children||[]){if(!r?.userData?.isEdgeOverlay||!r.material)continue;let s=Array.isArray(r.material)?r.material:[r.material];for(let o of s)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Dr(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),r=t.edgeMode??"transparent";for(let s of n){if(!s)continue;if(i<=0||s.userData?.bpIfcHidden){s.visible=!1;continue}if(s.visible=!0,!s.isMesh)continue;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a&&(i<1?(a.transparent=!0,a.opacity=i,a.depthWrite=!1,a.depthTest=!0,a.side=Dt,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Dt,a.forceSinglePass=!1,a.blending=Xi,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof s.userData.opaqueRenderOrder!="number"&&(s.userData.opaqueRenderOrder=s.renderOrder||0),s.renderOrder=i<1?0:s.userData.opaqueRenderOrder,zT(s,i,r);for(let a of s.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=s.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=i,c.transparent=i<1,c.depthWrite=i>=1,c.depthTest=!0,c.forceSinglePass=i<1,c.side=Dt,c.needsUpdate=!0)}}}var HT={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},yp=new Map;function VT(n){if(!n||n==="none")return null;let e=yp.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let r=i.getContext("2d");if(!r)return null;if(n==="wood"){r.fillStyle="#c49858",r.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;r.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,r.lineWidth=1.2,r.beginPath(),r.moveTo(0,o+a*.15),r.lineTo(t,o-a*.1),r.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;r.fillStyle="rgba(70, 40, 15, 0.22)",r.fillRect(a,l,2,7+o%5)}}else if(n==="foam"){r.fillStyle="#9ed468",r.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;r.beginPath(),r.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.55)",r.fill(),r.strokeStyle="rgba(40,90,30,0.35)",r.stroke()}}else if(n==="plaster"){let o=r.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}r.putImageData(o,0,0)}else if(n==="wool"){r.fillStyle="#88c860",r.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;r.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",r.fillRect(a,l,1+o%2,2+o%3)}}else if(n==="metal"){let o=r.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),r.fillStyle=o,r.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(0,a,t,2),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(0,a+4,t,2)}else if(n==="masonry"){r.fillStyle="#b88868",r.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;r.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,r.fillRect(h+1,f+1,a-2,o-2),r.strokeStyle="rgba(70,45,30,0.55)",r.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let s=new Sr(i);return s.colorSpace=Tt,s.wrapS=Ei,s.wrapT=Ei,s.repeat.set(2.5,2.5),s.needsUpdate=!0,yp.set(n,s),s}function zx(n){return new Je(n[0]/255,n[1]/255,n[2]/255)}function GT(n){return OT[n]||[160,160,160]}function WT(n,e,t=0){n.side=Dt,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],_p(n,t),pl(n),n.needsUpdate=!0}function Wx(n){n.computeBoundingBox();let e=n.boundingBox,t=new I;e.getSize(t);let i=Math.max(t.x,1e-6),r=Math.max(t.y,1e-6),s=Math.max(t.z,1e-6),o=Math.max(i,r,s);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),l=n.getAttribute("normal");if(!a)return o;let c=n.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new I;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(l.getX(f)),g=Math.abs(l.getY(f)),x=Math.abs(l.getZ(f)),m,p;g>=d&&g>=x?(m=(h.x-e.min.x)/i,p=(h.z-e.min.z)/s):d>=x?(m=(h.z-e.min.z)/s,p=(h.y-e.min.y)/r):(m=(h.x-e.min.x)/i,p=(h.y-e.min.y)/r),u[f*2]=m,u[f*2+1]=p}return n.setAttribute("uv",new Ht(u,2)),o}function XT(n,e){let t=VT(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let r=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(r,r),i}function Xx(n,e,t={}){let i=t.clippingPlanes??null,r=e===ml,s=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of n){let c=GT(a),u=UT[a]??0,h=1e3;if(r)for(let p of l)p.isMesh&&p.geometry&&(h=Math.max(h,Wx(p.geometry)));let f=1,d;if(r){let p=HT[a]||{color:c,roughness:.7,metalness:0,map:"none"};f=typeof p.opacity=="number"?p.opacity:1;let b=zx(p.color),S=XT(p.map||"none",h);p.clearcoat?d=new fn({color:b,map:S,roughness:p.roughness,metalness:p.metalness,clearcoat:p.clearcoat,clearcoatRoughness:p.clearcoatRoughness??.3,envMapIntensity:.85}):d=new Dn({color:b,map:S,roughness:p.roughness,metalness:p.metalness,envMapIntensity:p.metalness>.05?1.1:.55})}else d=new an({color:zx(c)});WT(d,i,u),d.userData.presetOpacity=f;let g=new Set;for(let p of l){if(!p.isMesh)continue;let b=p.material;if(b){let S=Array.isArray(b)?b:[b];for(let v of S)g.add(v)}p.material=d,p.userData.opaqueRenderOrder=u,p.renderOrder=u}for(let p of g)p!==d&&(p.map&&[...yp.values()].includes(p.map)?p.map=null:p.map&&(p.map.dispose?.(),p.map=null),p.dispose?.());let x=1;s&&(s instanceof Map?x=s.has(a)?s.get(a):1:typeof s[a]=="number"&&(x=s[a]));let m=Math.max(0,Math.min(1,f*(Number(x)||0)));Dr(l,m,{edgeMode:o})}}function qx(n,e){let i=(Array.isArray(n)?n:[n]).map(r=>{if(!r)return new Dn({color:13421772,roughness:.65,metalness:0,side:ni});let s=r.color?r.color.clone():new Je(13421772),o=typeof r.roughness=="number"?r.roughness:.65,a=typeof r.metalness=="number"?r.metalness:0,l=null;r.map&&e&&(Wx(e),l=r.map.clone(),l.needsUpdate=!0);let c=new Dn({color:s,map:l,roughness:o,metalness:a,side:ni,transparent:!!r.transparent,opacity:typeof r.opacity=="number"?r.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(n)?i:i[0]}function $x(){try{let n=localStorage.getItem(Hx);if(n===ml||n===th)return n}catch{}return th}function Yx(n){try{localStorage.setItem(Hx,n)}catch{}}var Qi=1e-5,Zx=new WeakMap;function ri(n,e,t,i){let r=t/(t-i);return n.clone().lerp(e,r)}function qT(n,e,t){let[i,r,s]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(r),l=e.distanceToPoint(s),c=o>=-Qi,u=a>=-Qi,h=l>=-Qi,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,r,s]);return}if(f===0)return;let d=[i,r,s],g=[o,a,l],x=[c,u,h];if(f===1){let S=x.findIndex(Boolean),v=(S+1)%3,M=(S+2)%3,w=d[S],y=ri(d[S],d[v],g[S],g[v]),E=ri(d[S],d[M],g[S],g[M]);t.push([w,y,E]);return}let m=x.findIndex(S=>!S),p=(m+1)%3,b=(m+2)%3;if(x[p]){let S=d[p],v=d[b],M=ri(d[m],d[p],g[m],g[p]),w=ri(d[m],d[b],g[m],g[b]);t.push([S,v,M]),t.push([v,w,M])}else{let S=d[b],v=ri(d[m],d[p],g[m],g[p]),M=ri(d[m],d[b],g[m],g[b]);t.push([S,v,M])}}function $T(n,e){let[t,i,r]=n,s=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(r),l=s>=-Qi,c=o>=-Qi,u=a>=-Qi,h=(l?1:0)+(c?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,r],d=[s,o,a],g=[l,c,u];if(h===1){let b=g.findIndex(Boolean),S=(b+1)%3,v=(b+2)%3;return[ri(f[b],f[S],d[b],d[S]),ri(f[b],f[v],d[b],d[v])]}let x=g.findIndex(b=>!b),m=(x+1)%3,p=(x+2)%3;return g[m]?[ri(f[x],f[m],d[x],d[m]),ri(f[x],f[p],d[x],d[p])]:[ri(f[x],f[m],d[x],d[m]),ri(f[x],f[p],d[x],d[p])]}function YT(n,e,t){let i=n.clone(),r=e.clone();for(let s of t){let o=s.distanceToPoint(i),a=s.distanceToPoint(r),l=o>=-Qi,c=a>=-Qi;if(l&&c)continue;if(!l&&!c)return null;let u=ri(i,r,o,a);l?r=u:i=u}return i.distanceToSquared(r)<Qi*Qi?null:[i,r]}function ZT(n,e){let t=n;for(let i of e){let r=[];for(let s of t)qT(s,i,r);if(t=r,t.length===0)break}return t}function KT(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new I,r=[],s=n.getIndex();function o(a,l,c){r.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(s)for(let a=0;a<s.count;a+=3)o(s.getX(a),s.getX(a+1),s.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return r}function jT(n){let e=n.getAttribute("position");if(!e)return[];let t=new I,i=[],r=n.getIndex();function s(o,a,l){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(r)for(let o=0;o<r.count;o+=3)s(r.getX(o),r.getX(o+1),r.getX(o+2));else for(let o=0;o<e.count;o+=3)s(o,o+1,o+2);return i}var Os=1e-6,Kx=2e-4,JT=2e-4,jx=new WeakMap;function QT(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function Jx(n){let e=t=>Math.round(t/Os);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function ty(n,e){let t=QT(e),i=jx.get(n);if(i&&i.key===t)return i;let r=[],s=[],o=Zx.get(n);if(o||(o=jT(n),Zx.set(n,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((f,d)=>d!==l),h=[];for(let f of o){let d=$T(f,c);if(!d)continue;let g=u.length?YT(d[0],d[1],u):d;g&&(h.push(g),r.push(g[0].x,g[0].y,g[0].z,g[1].x,g[1].y,g[1].z))}s.push(h)}let a={key:t,segments:new Float32Array(r),perPlane:s};return jx.set(n,a),a}function eA(n,e,t){let i=new Map;for(let l of n.keys())i.set(l,l);function r(l){let c=l;for(;i.get(c)!==c;){let u=i.get(i.get(c));i.set(c,u),c=u}return c}function s(l){let c=r(l),u=0;for(let h of t.get(c)||[])e[h].dead||u++;return u}function o(){let l=[];for(let c of n.keys())r(c)===c&&s(c)%2&&l.push(c);return l}let a=Kx*Kx;for(let l=0;l<e.length+2;l++){let c=o();if(c.length<2)break;let u=-1,h=-1,f=1/0;for(let p=0;p<c.length;p++){let b=n.get(c[p]);for(let S=p+1;S<c.length;S++){let v=n.get(c[S]),M=b.x-v.x,w=b.y-v.y,y=b.z-v.z,E=M*M+w*w+y*y;E<f&&(f=E,u=p,h=S)}}if(f>a)break;let d=c[u],g=c[h],x=n.get(d),m=n.get(g);x.add(m).multiplyScalar(.5);for(let p of t.get(g)||[]){let b=e[p];if(b.dead)continue;let S=r(b.a===g?b.b:b.a);if(S===d){b.dead=!0;continue}b.a=d,b.b=S,t.has(d)||t.set(d,[]),t.get(d).push(p)}i.set(g,d)}}function tA(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let l=Jx(o),c=Jx(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1,dead:!1}),i.has(l)||i.set(l,[]),i.has(c)||i.set(c,[]),i.get(l).push(u),i.get(c).push(u)}eA(e,t,i);function r(o,a){let l=i.get(o)||[],c=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of l){if(t[d].used||t[d].dead)continue;if(!f)return d;let g=t[d],x=g.a===o?g.b:g.a,m=e.get(x),p=h.x-f.x,b=h.y-f.y,S=h.z-f.z,v=m.x-h.x,M=m.y-h.y,w=m.z-h.z,y=p*v+b*M+S*w;y>u&&(u=y,c=d)}return c}let s=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],l=[],c=o,u=t[c].a,h=u,f=null,d=!1,g=t.length+2;for(let x=0;x<g;x++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let m=t[c].a===u?t[c].b:t[c].a;if(m===h){d=!0;break}let p=r(m,u);if(p<0)break;f=u,u=m,c=p}d&&a.length>=3&&s.push(a)}return s}function nA(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new I(1,0,0):new I(0,1,0),i=new I().crossVectors(t,e).normalize(),r=new I().crossVectors(e,i).normalize();return{u:i,v:r,n:e}}function iA(n,e,t,i){return n.map(r=>{let s=r.clone().sub(e);return{x:s.dot(t),y:s.dot(i),p3:r}})}function rA(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function sA(n){return rA(n)<0&&n.reverse(),n}function Qx(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){let o=t[r].y,a=t[s].y,l=t[r].x,c=t[s].x;o>e!=a>e&&n<(c-l)*(e-o)/(a-o+0)+l&&(i=!i)}return i}function Nr(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function oA(n,e,t,i){let r=Nr(n,e,t),s=Nr(n,e,i),o=Nr(t,i,n),a=Nr(t,i,e);return r*s<0&&o*a<0}function ey(n,e,t,i){let r=t.length;for(let s=0;s<r;s++){let o=(s+1)%r;if(!(i>=0&&(s===i||o===i))&&oA(n,e,t[s],t[o]))return!0}return!1}function aA(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],r=-1,s=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],g=n[(f+1)%o];if(d.y>i.y==g.y>i.y)continue;let x=g.y-d.y;if(Math.abs(x)<1e-15)continue;let m=(i.y-d.y)/x;if(m<-1e-8||m>1+1e-8)continue;let p=d.x+m*(g.x-d.x);p>=i.x-1e-8&&p<s&&(s=p,r=f)}let a=[];r>=0&&a.push(r,(r+1)%o);let l=0,c=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<c&&(c=d,l=f)}a.push(l);let u=-1;for(let f of a)if(!ey(i,n[f],n,f)&&!ey(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function vp(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=Os*Os}function lA(n,e,t,i){if(vp(n,e)||vp(n,t)||vp(n,i))return!1;let r=Nr(e,t,n),s=Nr(t,i,n),o=Nr(i,e,n),a=r<-1e-14||s<-1e-14||o<-1e-14,l=r>1e-14||s>1e-14||o>1e-14;return!(a&&l)}function cA(n){let e=[];for(let r of n){let s=e[e.length-1];s&&(s.x-r.x)**2+(s.y-r.y)**2<Os*Os||e.push(r)}if(e.length>=2){let r=e[0],s=e[e.length-1];(r.x-s.x)**2+(r.y-s.y)**2<Os*Os&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let r=!1,s=e.length;for(let o=0;o<s;o++){let a=(o+s-1)%s,l=(o+1)%s,c=e[a],u=e[o],h=e[l],f=Nr(c,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),r=!0;break}let d=!1;for(let g=0;g<s;g++)if(!(g===o||g===a||g===l)&&lA(e[g],c,u,h)){d=!0;break}if(!d){t.push([c.p3,u.p3,h.p3]),e.splice(o,1),r=!0;break}}if(!r)break}return e.length===3&&Nr(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function uA(n,e,t){if(!n.length)return[];let{u:i,v:r,n:s}=nA(e.normal),o=n[0][0],a=n.map(u=>sA(iA(u,o,i,r))),l=a.map((u,h)=>{let f=u[0],d=0;for(let g=0;g<a.length;g++)g!==h&&Qx(f.x,f.y,a[g])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!Qx(a[d][0].x,a[d][0].y,h))continue;let g=aA(h,a[d]);g&&(h=g)}let f=cA(h);for(let d of f)c.push(d.map(g=>g.clone().addScaledVector(s,t)))}return c}function ny(n,e){return!n||!e?.length?[]:ty(n,e).perPlane}function iy(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=tA(n),r=uA(i,e,JT+Math.max(0,t));if(!r.length)return new Float32Array(0);let s=new Float32Array(r.length*9),o=0;for(let[a,l,c]of r)s[o++]=a.x,s[o++]=a.y,s[o++]=a.z,s[o++]=l.x,s[o++]=l.y,s[o++]=l.z,s[o++]=c.x,s[o++]=c.y,s[o++]=c.z;return s}function Nx(n,e){return!n||!e?.length?new Float32Array(0):ty(n,e).segments}function Qu(n,e){if(!n?.length)return[];let t=new lt().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function hA(n){let e=new Float32Array(n.length*9),t=0;for(let[r,s,o]of n)e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new Bt;return i.setAttribute("position",new Ht(e,3)),i.computeVertexNormals(),i}function ry(n,e){if(!n.visible||!n.geometry)return null;let t=KT(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?ZT(t,e):t;if(i.length===0)return null;let r=hA(i),s=qx(n.material,r),o=new pt(r,s);return o.name=n.name,o}var fA=5e-5;function rh(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function bp(n){return n?Array.isArray(n)?n[0]||null:n:null}function oy(n,e){let t;return n.isMeshPhysicalMaterial?t=new fn:n.isMeshStandardMaterial?t=new Dn:t=new an,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=Dt,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,_p(t,n.userData?.layerDepthBias||0),pl(t),t.needsUpdate=!0,t}function ih(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function dA(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function pA(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function ay(n,e){let t=new Set;for(let i of n){let r=i.parent;if(!r||t.has(r))continue;t.add(r);let s=pA(r,e);if(s)return s}return null}function sy(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let r=bp(i.material);r&&(e.color&&r.color&&r.color.copy(e.color),r.opacity=typeof e.opacity=="number"?e.opacity:1,r.transparent=!!e.transparent,r.depthWrite=e.depthWrite!==!1,r.depthTest=e.depthTest!==!1,r.forceSinglePass=!!e.forceSinglePass,r.side=Dt,r.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function mA(n,e,t,i){let r=e.filter(d=>d?.isMesh&&d.visible&&!rh(d)&&d.geometry),s=ay(e,n);if(!r.length||!t.length){s&&ih(s);return}let o=r[0],a=o.parent;if(!a)return;s&&s.parent!==a&&ih(s);let l=s&&s.parent===a?s:new Et;for(let d of[...l.children])ih(d);l.parent||(l.name=`${n}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=n,a.add(l));let c=bp(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new lt().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of r){d.updateWorldMatrix(!0,!1);let g=Qu(t,d.matrixWorld),x=ny(d.geometry,g);for(let m=0;m<t.length;m++){let p=x[m]||[];for(let[b,S]of p)f[m].push([b.clone().applyMatrix4(d.matrixWorld),S.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let g=iy(f[d],t[d],h*fA);if(g.length<9)continue;for(let b=0;b<g.length;b+=3){let S=new I(g[b],g[b+1],g[b+2]).applyMatrix4(u);g[b]=S.x,g[b+1]=S.y,g[b+2]=S.z}let x=new Bt;x.setAttribute("position",new Ht(g,3)),x.computeVertexNormals();let m=t.filter((b,S)=>S!==d),p=new pt(x,oy(c,m));p.name=`${n}__cap${d}`,p.userData.isSectionCap=!0,p.userData.capPlaneIndex=d,p.userData.capLabel=n,p.renderOrder=o.renderOrder,p.raycast=()=>{},l.add(p)}l.userData.bpCapSig=i,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function Mp(n,e){let t=e||[],i=dA(t);for(let[r,s]of n){let o=(s||[]).filter(u=>u&&!rh(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=ay(o,r);if(!t.length||!a.length){l&&ih(l);continue}let c=bp(a[0].material);if(l&&l.userData.bpCapSig===i&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){sy(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===i&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((x,m)=>m!==f):t;u.material=oy(c,d);let g=Array.isArray(h)?h:[h];for(let x of g)x&&(x.map=null),x?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,sy(l,c,a[0].renderOrder||0);continue}mA(r,o,t,i)}}var gA=2,xA=.45,ly=.015;function Sp(n){let e=new Lt().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:ly};let t=new I;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),r=i>gA?xA/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:r,liftM:ly}}function cy(n,e=Sp(n)){let{cx:t,cz:i,minY:r,scale:s,liftM:o}=e;return n.position.set(-t*s,-r*s+o,-i*s),n.scale.setScalar(s),n.updateMatrixWorld(!0),e}var yA=`
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
`,uy=!1;function _A(){if(uy)return;uy=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=yA,document.head.appendChild(n)}function hy(n){_A();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),r=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return r.matches}function c(){return a}function u(){for(let ne of o)ne(a)}function h(ne){o.push(ne),ne(a)}function f(){if(!e||!i)return;let ne=document.getElementById("sheet-inspector"),Ue=document.getElementById("sheet-main");if(ne&&!ne.hidden&&Ue?.hidden){let P=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(P)&&P>0)return P}let je=document.getElementById("section-view"),ge=document.getElementById("section-cuts"),A=t?.offsetHeight||22,te=16,Y=0;if(je&&(Y+=je.offsetHeight),ge){let P=ge.querySelector(".sheet-title"),T=ge.querySelector(".cut-row");Y+=32,P&&(Y+=P.offsetHeight+8),T?Y+=T.offsetHeight:Y+=ge.offsetHeight}let Te=A+Y+te,q=window.innerHeight||640,xe=Math.round(q*.28),ve=Math.round(q*.45),Re=Math.max(xe,Math.min(ve,Math.round(Te)));return e.style.setProperty("--sheet-partial-h",`${Re}px`),Re}function d(){f(),!l()&&a==="partial"&&u()}function g(ne){let Ue=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${ne}`).trim(),je=parseFloat(Ue);return Number.isFinite(je)?je:0}function x(){let ne={top:0,right:0,bottom:0,left:0};if(!e)return ne;if(l()){if(a!=="open")return ne;let je=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(je)),bottom:0,left:0}}if(a!=="partial")return ne;let Ue=Math.round(K()+g("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,Ue)),left:0}}function m(ne,Ue={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(ne)||(ne=l()?"open":"peek"),a=ne,e.dataset.detent=ne,e.classList.toggle("sheet-open",ne!=="peek"&&ne!=="closed"),document.body.classList.toggle("sheet-open",ne!=="peek"&&ne!=="closed"),v(),Ue.silent||u()}function p(){l()?m("open"):m("peek"),f()}let b=document.getElementById("top-chrome"),S=document.getElementById("sheet-toggle");if(!S&&b){let ne=b.querySelector(".top-chrome-end");ne||(ne=document.createElement("div"),ne.className="top-chrome-end",b.append(ne)),S=document.createElement("button"),S.type="button",S.id="sheet-toggle",S.className="chrome-btn sheet-toggle",ne.append(S)}function v(){if(!S)return;let ne=a==="open";S.setAttribute("aria-expanded",ne?"true":"false"),S.setAttribute("aria-label",ne?"Hide controls":"Show controls"),S.title=ne?"Hide controls":"Show controls",S.textContent=ne?"\u203A":"\u2039"}S?.addEventListener("click",()=>{l()&&m(a==="open"?"closed":"open")});let M=!1,w=null,y=!1,E=!1,L=0,D=0,F=0,G=0,k="peek",N=0,W=0,Q=0,$=0,ye=0,ee=null,z=12,j=28,Se='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function Ie(){return Math.max(t?.offsetHeight||34,34)+8}function K(){return f()||window.innerHeight*.38}function me(){let ne=window.innerHeight||640;return Math.min(ne*.92,ne-72)}function re(){return e?.offsetWidth||0}function H(ne){return ne instanceof Element?!!ne.closest(Se):!1}function J(){if(l()){m(a==="open"?"closed":"open");return}m(a==="peek"?"partial":a==="partial"?"full":"peek")}function Ee(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Ye(ne,Ue,je){if(e){M=!0,y=!1,w=Ue,E=!1,k=a,L=ne.clientY,D=ne.clientX,N=L,W=D,Q=performance.now(),$=0,ye=0,G=je,ee=ne.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${G}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(ne.pointerId)}catch{}}}function Ne(ne){if(!(!e||!t)&&!(ne.target!==t&&!t.contains(ne.target)&&ne.target!==e)){M=!0,y=!1,w="narrow",E=!1,k=a,e.classList.add("is-dragging"),L=ne.clientY,D=ne.clientX,N=L,W=D,Q=performance.now(),$=0,ye=0,F=e.getBoundingClientRect().height,ee=ne.pointerId;try{t.setPointerCapture(ne.pointerId)}catch{}ne.preventDefault()}}function qe(ne){if(!e||ne.pointerType==="mouse"&&ne.button!==0||ne.target instanceof Element&&ne.target.closest(".chrome-btn"))return;let Ue=re();if(a==="closed"){let je=window.innerWidth-j-g("r");if(ne.clientX<je)return;Ye(ne,"wide-open",Ue),ne.preventDefault();return}e.contains(ne.target)&&(H(ne.target)||(M=!0,y=!0,w="wide-close",E=!1,k=a,L=ne.clientY,D=ne.clientX,N=L,W=D,Q=performance.now(),$=0,ye=0,G=0,ee=ne.pointerId))}function he(ne){l()?qe(ne):Ne(ne)}function Ae(ne){if(!M||!e||ee!=null&&ne.pointerId!==ee)return;let Ue=performance.now(),je=Math.max(1,Ue-Q),ge=Math.hypot(ne.clientX-D,ne.clientY-L);if(y){if(ge<=z)return;let Te=ne.clientX-D,q=ne.clientY-L;if(Math.abs(Te)<Math.abs(q)*1.15||Te<=0){M=!1,y=!1,w=null,ee=null;return}y=!1,E=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(ne.pointerId)}catch{}ne.preventDefault()}if(ge>z&&(E=!0),w==="narrow"){let Te=L-ne.clientY;$=(N-ne.clientY)/je*1e3,N=ne.clientY,Q=Ue;let q=Ie(),xe=me(),ve=Math.max(q,Math.min(xe,F+Te));e.style.height=`${ve}px`;return}let A=ne.clientX-D;ye=(ne.clientX-W)/je*1e3,W=ne.clientX,Q=Ue;let te=re(),Y=Math.max(0,Math.min(te,G+A));e.style.transform=`translateX(${Y}px)`}function ze(ne,Ue){let je=[{name:"peek",h:Ie()},{name:"partial",h:K()},{name:"full",h:me()}],ge=Math.max(0,je.findIndex(xe=>xe.name===k)),A=je[ge].h;if(Math.abs(ne-A)<36&&Math.abs(Ue)<1100)return k;let te=ne+Ue*.05,Y=(je[0].h+je[1].h)/2,Te=(je[1].h+je[2].h)/2,q=te<Y?0:te<Te?1:2;if(q>ge+1&&(q=ge+1),q<ge-1&&(q=ge-1),q===2&&ge<2){let xe=Te+(je[2].h-Te)*.25;ne<xe&&Ue<1400&&(q=1)}return je[q].name}function He(ne,Ue){let je=re();return je<=0||Math.abs(ne-(k==="closed"?je:0))<28&&Math.abs(Ue)<800?k:Ue>900?"closed":Ue<-900?"open":ne>je*.45?"closed":"open"}function Ke(ne){if(!M||!e||ee!=null&&ne.pointerId!==ee)return;let Ue=w,je=y;if(M=!1,y=!1,w=null,ee=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),je&&!E)return;if(!E){Ue==="narrow"?(e.style.height="",J()):Ue==="wide-open"?(Ee(),m("open")):Ee();return}if(Ue==="narrow"){let te=e.getBoundingClientRect().height;e.style.height="",m(ze(te,$));return}let ge=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),A=ge?parseFloat(ge[1]):0;Ee(),m(He(A,ye))}t?.addEventListener("pointerdown",ne=>{l()||he(ne)}),t?.addEventListener("pointermove",Ae),t?.addEventListener("pointerup",Ke),t?.addEventListener("pointercancel",Ke),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",ne=>{l()&&qe(ne)},{capture:!0}),document.addEventListener("pointermove",Ae,{capture:!0}),document.addEventListener("pointerup",Ke,{capture:!0}),document.addEventListener("pointercancel",Ke,{capture:!0});let Ge=()=>{e&&(e.style.height=""),Ee(),i&&(i.style.overflow=""),p()};r.addEventListener?r.addEventListener("change",Ge):r.addListener(Ge);function ot(){n(s.matches)}return ot(),s.addEventListener?s.addEventListener("change",ot):s.addListener(ot),window.addEventListener("resize",()=>{f(),u()}),p(),v(),{getDetent:c,getSafeInsets:x,onDetentChange:h,refreshPartialHeight:d,setDetent:m}}function sh(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,r=!!n.thumbScrubOnly,s=gl(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,h=14,f=null,d=0,g=0,x=!1,m=!1,p=!1,b=!0;function S(){let N=`${(t===e?0:(s-e)/(t-e))*100}%`;l.style.width=N,c.style.left=N,o.setAttribute("aria-valuenow",String(s));let W=n.formatAriaValue?.(s)??String(s);o.setAttribute("aria-valuetext",W)}function v(k,N){let W=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!W||!(W.width>0)||!(W.height>0)?!0:k>=W.left-h&&k<=W.right+h&&N>=W.top-h&&N<=W.bottom+h}function M(k,N="input"){let W=vA(gl(k,e,t),e,t,i);if(W===s&&N==="silent"){S();return}s=W,S(),(N==="input"||N==="change")&&n.onInput?.(s),N==="change"&&n.onChange?.(s)}function w(k){let N=a.getBoundingClientRect(),W=Math.max(N.width,1),Q=gl((k-N.left)/W,0,1);return e+Q*(t-e)}function y(k){if(f==null)return;let N=m;f=null,x=!1,m=!1,b=!0,N&&n.onScrubEnd?.(),k&&N&&n.onChange?.(s)}function E(k){f==null&&(k.pointerType==="mouse"&&k.button!==0||(f=k.pointerId,d=k.clientX,g=k.clientY,p=!1,x=!1,m=!1,b=!r||v(k.clientX,k.clientY)))}function L(k){if(f!==k.pointerId)return;let N=k.clientX-d,W=k.clientY-g;if(!p&&Math.hypot(N,W)>u&&(p=!0),!x){if(!p)return;if(k.pointerType==="touch"&&Math.abs(W)>=Math.abs(N)){y(!1);return}if(!b){y(!1);return}x=!0,m=!0,n.onScrubStart?.();try{o.setPointerCapture(k.pointerId)}catch{}}M(w(k.clientX),"input"),k.preventDefault()}function D(k){if(f===k.pointerId){if(!p&&!m){f=null,x=!1,m=!1,b=!0,n.onTap?.();return}y(!0)}}function F(k){f===k.pointerId&&y(!1)}function G(k){let N=t-e,W=i>0?i:N/100,Q=N/10,$=s;switch(k.key){case"ArrowLeft":case"ArrowDown":$=s-W;break;case"ArrowRight":case"ArrowUp":$=s+W;break;case"PageDown":$=s-Q;break;case"PageUp":$=s+Q;break;case"Home":$=e;break;case"End":$=t;break;case"Enter":case" ":k.preventDefault(),n.onTap?.();return;default:return}k.preventDefault(),M($,"change")}return o.addEventListener("pointerdown",E),o.addEventListener("pointermove",L),o.addEventListener("pointerup",D),o.addEventListener("pointercancel",F),o.addEventListener("keydown",G),S(),{el:o,get value(){return s},set value(k){M(k,"silent")},refresh(){S()}}}function gl(n,e,t){return Math.min(t,Math.max(e,n))}function vA(n,e,t,i){if(!(i>0))return gl(n,e,t);let r=Math.round((n-e)/i),s=Number((e+r*i).toPrecision(12));return gl(s,e,t)}var fy="blueprints.locale",bA={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},MA={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},SA={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","home.title":"Home","home.live":"Live","home.off":"Off","home.on":"On","home.statusOff":"Offline model. Taps only change this view.","home.statusConnecting":"Connecting to Home\u2026","home.statusLive":"Live: state from Home. Taps send commands.","home.statusLiveNoSim":"Live: state from Home. Rocker presses are off on this server.","home.statusUnreachable":"Home unreachable. Showing the offline model; retrying.","home.failed":"Home refused the command","home.deviceOffline":"Device offline (last known state)","home.unknown":"Unknown","home.level":"Level","home.warm":"Warm","home.cool":"Cool","home.lastEvent":"Last event","home.noEvents":"No presses yet","home.contactClosed":"Closed (contact)","home.contactOpen":"Open (no contact)","home.occupied":"Occupied","home.vacant":"Vacant","home.closedPct":"Closed","home.up":"Up","home.down":"Down","home.stop":"Stop","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},wA={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","home.title":"D\u016Fm","home.live":"\u017Div\u011B","home.off":"Vyp.","home.on":"Zap.","home.statusOff":"Offline model. Klepnut\xED m\u011Bn\xED jen tento pohled.","home.statusConnecting":"P\u0159ipojuji se k Home\u2026","home.statusLive":"\u017Div\u011B: stav z Home. Klepnut\xED pos\xEDlaj\xED p\u0159\xEDkazy.","home.statusLiveNoSim":"\u017Div\u011B: stav z Home. Stisky vyp\xEDna\u010D\u016F jsou na tomto serveru vypnut\xE9.","home.statusUnreachable":"Home nedostupn\xFD. Zobrazuji offline model a zkou\u0161\xEDm znovu.","home.failed":"Home p\u0159\xEDkaz odm\xEDtl","home.deviceOffline":"Za\u0159\xEDzen\xED offline (posledn\xED zn\xE1m\xFD stav)","home.unknown":"Nezn\xE1m\xFD","home.level":"Jas","home.warm":"Tepl\xE1","home.cool":"Studen\xE1","home.lastEvent":"Posledn\xED ud\xE1lost","home.noEvents":"Zat\xEDm bez stisku","home.contactClosed":"Zav\u0159eno (kontakt)","home.contactOpen":"Otev\u0159eno (bez kontaktu)","home.occupied":"Obsazeno","home.vacant":"Volno","home.closedPct":"Zav\u0159eno","home.up":"Nahoru","home.down":"Dol\u016F","home.stop":"Stop","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},wp={en:{...SA,...bA},cs:{...wA,...MA}},Go=dy(),Ep=new Set;function dy(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function EA(){try{let n=localStorage.getItem(fy);if(n==="en"||n==="cs")return n}catch{}return dy()}function TA(n){try{localStorage.setItem(fy,n)}catch{}}function oh(){return Go}function py(n){if(!(n!=="en"&&n!=="cs")&&n!==Go){Go=n,TA(n);for(let e of Ep)try{e()}catch{}}}function Tp(n){return Ep.add(n),()=>Ep.delete(n)}function my(){return Go=EA(),Go}function Nt(n){let e=wp[Go]||wp.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=wp.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function Ap(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Nt(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Nt(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Nt(i))})}var Rp=44,ah=.05,AA=.05;function lh(n){let e=n&&n.material;if(!e)return!1;let t=Array.isArray(e)?e:[e];return t.length?t.every(i=>i&&i.visible!==!1&&!(i.transparent&&(i.opacity??1)<.99)):!1}function xy(n,e,t={}){let i=t.isOccluder||lh,r=t.tolerance??ah,s=1/0;for(let o of n){let a=Number.isFinite(o.distance)?o.distance:0;if(a>s+r)break;let l=e(o);if(l)return{hit:o,claim:l,wallT:s};s===1/0&&i(o.object)&&(s=a)}return{hit:null,claim:null,wallT:s}}function yy(n,e,t={}){let i=(t.diameterPx??Rp)/2,r=t.depthTie??AA,s=[];for(let c of n){if(!c||!Number.isFinite(c.x)||!Number.isFinite(c.y)||!(c.depth>0))continue;let u=Math.hypot(c.x-e.x,c.y-e.y);u>i||s.push({c,dist:u})}let o=t.isOccluded?s.filter(c=>!t.isOccluded(c.c)):s;if(!o.length)return null;let a=o[0];for(let c of o)c.c.depth<a.c.depth&&(a=c);let l=null;for(let c of o)(c.c.depth<=a.c.depth+r||a.c.group!=null&&c.c.group===a.c.group)&&(!l||c.dist<l.dist||c.dist===l.dist&&c.c.depth<l.c.depth)&&(l=c);return l?l.c:null}var Jn=new I;function _y(n,e,t){e.updateMatrixWorld?.(),Jn.copy(n).applyMatrix4(e.matrixWorldInverse);let i=-Jn.z;return!(i>0)||(Jn.copy(n).project(e),!(Math.abs(Jn.x)<=1&&Math.abs(Jn.y)<=1)||!(Jn.z>=-1&&Jn.z<=1))?null:{x:(Jn.x+1)/2*t.w,y:(1-Jn.y)/2*t.h,depth:i}}var os=new ti,gy=new Ze;function vy(n,e,t,i,r={}){let s=r.keep||(()=>!0),o=r.isOccluder||lh,a=r.tolerance??ah,l;if(e.isOrthographicCamera)Jn.copy(n).project(e),gy.set(Jn.x,Jn.y),os.setFromCamera(gy,e),l=Jn.copy(n).sub(os.ray.origin).dot(os.ray.direction);else{let u=new I().setFromMatrixPosition(e.matrixWorld),h=Jn.copy(n).sub(u);if(l=h.length(),l<1e-9)return!1;os.set(u,h.normalize())}os.camera=e,os.near=0,os.far=Math.max(0,l);let c=os.intersectObject(t,!0);for(let u of c){if(u.distance>=l-a)break;if(!(!s(u.object)||i(u.object))&&o(u.object))return!0}return!1}function by(n,e,t){let i=n.getCenter(new I),r=n.getSize(new I),s=r.y/4,o=r.x>=r.z?new I(1,0,0):new I(0,0,1);o.dot(t)<0&&o.negate();let a=Math.max(r.x,r.z)/4,l=[];return e.forEach((c,u)=>{let h=i.clone();e.length>1&&h.addScaledVector(o,u===0?-a:a),l.push({rocker:c,position:"up",center:h.clone().setY(h.y+s)}),l.push({rocker:c,position:"down",center:h.clone().setY(h.y-s)})}),l}function Us(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function Fs(n){if(!n||!n.visible||Us(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function My(){let n=[];function e(l){n.push(l),n.sort((c,u)=>(u.priority||0)-(c.priority||0))}function t(l,c){for(let u of n){let h=u.claim?.(l,c);if(h)return h}return null}function i(l,c){let u=[];for(let h of l)c&&!c(h)||u.push(h);return u}function r(l){let{camera:c,root:u,tap:h,size:f}=l||{};if(!c||!u||!h||!f)return null;let d=[];for(let b of n){let S=b.targets?.(l);if(Array.isArray(S))for(let v of S){if(!v?.center)continue;let M=_y(v.center,c,f);M&&d.push({...v,...M,handler:b})}}if(!d.length)return null;let g=b=>Fs(b),x=yy(d,h,{diameterPx:l.diameterPx??Rp,isOccluded:b=>vy(b.center,c,u,S=>!!b.owns?.(S),{keep:g})});if(!x)return null;let m={...x.hit,point:x.hit?.point??x.center,extended:!0},p=x.handler.claim?.(m,l);return p?{hit:m,claim:p,target:x}:null}function s(l,c,u,h={}){let f=i(l,u),d=xy(f,m=>t(m,c),{isOccluder:m=>lh(m)});if(d.claim)return{kind:"direct",hit:d.hit,claim:d.claim};let g={...c,maxT:d.wallT+ah};for(let m of n)if(h.run?m.fallback?.(f,g):m.probe?.(f,g))return{kind:"fallback"};let x=r(c);if(x)return{kind:"extended",hit:x.hit,claim:x.claim};for(let m of f){let p=t(m,c);if(p)return{kind:"legacy",hit:m,claim:p}}return null}function o(l,c,u){let h=s(l,c,u,{run:!0});if(h?.kind==="fallback")return!0;if(h?.claim)return h.claim.onTap(),!0;let f=i(l,u);for(let d of n)if(d.fallback?.(f,c))return!0;return!1}function a(l,c,u){let h=s(l,c,u);return h?.claim?Array.isArray(h.claim.actions)?h.claim.actions.slice():[]:[]}return{register:e,dispatch:o,actionsFor:a,resolve:s,handlers:n}}var Sy=8,RA=56,wy=14,Cp=11,Ey=.5,CA=1e-4,ch=128,PA=.028,IA=5,LA=.995,DA=.999,Ty=18,NA=22,OA=14,Pp=new Ze,Ay=new ti,gi=new I,xi=new I,tr=new I,kn=new I,qo=new I,er=new I,Wo=new I,Xo=new I,kt=new I,Ry=new I,$o=new I,UA=new xn;function Ip(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function Lp(n){return n.pointerType==="touch"}function Dp(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function Cy(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function Fy(n){let{scene:e,canvas:t,getCamera:i,controls:r,getRoot:s,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=n,c="idle",u=!1,h=!1,f=0,d=0,g=null,x=null,m=null,p=null,b=null,S=null,v=null,M="mouse",w=0,y=0,E=!1,L=!1,D=new Et;D.name="MeasureOverlay",D.renderOrder=10,e.add(D);let F=new Et;F.name="MeasureDimensions",e.add(F);let G=Ly(16766474),k=Ly(3458905),N=Dy(16766474,.75),W=HA(16766474);D.add(G,k,N,W),G.visible=!1,k.visible=!1,N.visible=!1,W.visible=!1;let Q=kA(t),$=[];function ye(){return u}function ee(ge){let A=!!ge;if(A===u){A&&j();return}if(u=A,u)if(r.enabled=!1,c="placeFirst",z(),b=null,S=null,Cy()){let te=Math.max(1,t.clientWidth),Y=Math.max(1,t.clientHeight);Ie(te*.5,Y*.5,!0)}else Se();else r.enabled=!0,c="idle",z(),b=null,S=null,v=null,L=!1,Se(),a?.(null);l?.(u),j(),me()}function z(){h=!1,g=null,x=null,m=null,p=null}function j(){c==="placeSecond"&&b&&g?a?.(Ip(b.distanceTo(g))):u&&a?.(null)}function Se(){Q.hidden=!0,G.visible=!1,W.visible=!1}function Ie(ge,A,te=!1){f=ge,d=A,h=!0;let Y=Ne(ge,A);if(Y){let Te=Y.point.clone(),q=Y.kind,xe=Y.edgeDir;if(p=null,c==="placeSecond"&&b){let ve=qe(b,S,Y);ve&&(Te=ve.foot,q="perp",xe=ve.edgeDir,p=ve.edgeDir.clone())}g=Te,x=q,m=xe}else te?g||(x=null,m=null,p=null):(g=null,x=null,m=null,p=null);me(),j()}function K(ge,A){let te=Ee(A)*IA;ge.scale.setScalar(Math.max(te,1e-6))}function me(){if(!u){Se(),k.visible=!1,N.visible=!1,W.visible=!1;return}b?(k.visible=!0,k.position.copy(b),K(k,b)):k.visible=!1,h?(Q.hidden=!1,Iy(Q,t,f,d,x),g?(G.visible=!0,G.position.copy(g),K(G,g),zA(G,x)):G.visible=!1):Se(),c==="placeSecond"&&b&&g?(Oy(N,b,g),N.visible=!0):N.visible=!1,c==="placeSecond"&&x==="perp"&&b&&g&&p?(Ny(W,b,g,p,Ee),W.visible=!0):W.visible=!1}function re(ge){let A=t.getBoundingClientRect();return{x:ge.clientX-A.left,y:ge.clientY-A.top}}function H(ge,A,te){return te==="touch"?{x:ge,y:A-RA}:{x:ge,y:A}}function J(ge){let A=o()||[];for(let te of A)if(te.distanceToPoint(ge)<-CA)return!1;return!0}function Ee(ge){let A=i(),te=Math.max(1,t.clientHeight);if(A.isOrthographicCamera)return 2*((A.top-A.bottom)/(2*Math.max(A.zoom,1e-6)))/te;let Y=A.position.distanceTo(ge),Te=A.fov*Math.PI/180;return 2*Math.tan(Te/2)*Y/te/Math.max(A.zoom,1e-6)}function Ye(ge,A){A.copy(ge).project(i());let te=Math.max(1,t.clientWidth),Y=Math.max(1,t.clientHeight);return A.x=(A.x*.5+.5)*te,A.y=(-A.y*.5+.5)*Y,A}function Ne(ge,A){let te=s();if(!te)return null;let Y=t.getBoundingClientRect();Pp.x=ge/Math.max(1,Y.width)*2-1,Pp.y=-(A/Math.max(1,Y.height))*2+1,Ay.setFromCamera(Pp,i());let Te=Ay.intersectObject(te,!0),q=null;for(let Be of Te)if(!(!Be.object.visible||Us(Be.object))&&J(Be.point)){q=Be;break}if(!q)return null;let xe=q.object,ve=xe.geometry;if(!ve?.getAttribute("position"))return{point:q.point.clone(),kind:"face",edgeDir:null,mesh:xe,triVerts:null,faceNormal:null};xe.updateWorldMatrix(!0,!1);let Re=Ee(q.point),P=Re*wy,T=Re*Cp,X=ve.getAttribute("position"),_e=ve.getIndex(),de=q.faceIndex,ue=[];if(q.face)gi.fromBufferAttribute(X,q.face.a).applyMatrix4(xe.matrixWorld),xi.fromBufferAttribute(X,q.face.b).applyMatrix4(xe.matrixWorld),tr.fromBufferAttribute(X,q.face.c).applyMatrix4(xe.matrixWorld),ue.push(gi.clone(),xi.clone(),tr.clone());else if(typeof de=="number"){let Be,st,Z;_e?(Be=_e.getX(de*3),st=_e.getX(de*3+1),Z=_e.getX(de*3+2)):(Be=de*3,st=de*3+1,Z=de*3+2),gi.fromBufferAttribute(X,Be).applyMatrix4(xe.matrixWorld),xi.fromBufferAttribute(X,st).applyMatrix4(xe.matrixWorld),tr.fromBufferAttribute(X,Z).applyMatrix4(xe.matrixWorld),ue.push(gi.clone(),xi.clone(),tr.clone())}let be=null;ue.length===3&&(be=new I().subVectors(ue[1],ue[0]).cross(kn.subVectors(ue[2],ue[0])).normalize(),be.lengthSq()<1e-12&&(be=null));let ae=ge,le=A,Ce=null;function B(Be){if(!J(Be)||Be.distanceToSquared(q.point)>P*P*4)return;Ye(Be,Xo);let st=Math.hypot(Xo.x-ae,Xo.y-le);st>wy||(!Ce||st<Ce.distPx)&&(Ce={point:Be.clone(),distPx:st})}for(let Be of ue)B(Be);let pe=P*P*4,fe=X.count,Fe=fe>8e3?2:1;for(let Be=0;Be<fe;Be+=Fe)kn.fromBufferAttribute(X,Be).applyMatrix4(xe.matrixWorld),!(kn.distanceToSquared(q.point)>pe)&&B(kn);if(Ce)return{point:Ce.point,kind:"vertex",edgeDir:null,mesh:xe,triVerts:ue.length?ue:null,faceNormal:be};let Le=null;function Oe(Be,st){kt.copy(st).sub(Be);let Z=kt.lengthSq();if(Z<1e-18)return;let De=kn.copy(q.point).sub(Be).dot(kt)/Z;if(De=Math.min(1,Math.max(0,De)),qo.copy(Be).addScaledVector(kt,De),!J(qo)||qo.distanceToSquared(q.point)>T*T*4)return;Ye(qo,Xo);let rt=Math.hypot(Xo.x-ae,Xo.y-le);if(rt>Cp)return;Ye(Be,er),Ye(st,Wo);let Pe=Wo.x-er.x,dt=Wo.y-er.y,zt=Pe*Pe+dt*dt;if(zt>1e-6){let jt=((ae-er.x)*Pe+(le-er.y)*dt)/zt;jt=Math.min(1,Math.max(0,jt));let rr=er.x+Pe*jt,sr=er.y+dt*jt;if(Math.hypot(ae-rr,le-sr)>Cp)return}(!Le||rt<Le.distPx)&&(Le={point:qo.clone(),distPx:rt,dir:kt.clone().normalize()})}return ue.length===3&&(Oe(ue[0],ue[1]),Oe(ue[1],ue[2]),Oe(ue[2],ue[0])),Le?{point:Le.point,kind:"edge",edgeDir:Le.dir,mesh:xe,triVerts:ue.length?ue:null,faceNormal:be}:{point:q.point.clone(),kind:"face",edgeDir:null,mesh:xe,triVerts:ue.length?ue:null,faceNormal:be}}function qe(ge,A,te){if(!te.mesh||!te.triVerts||te.triVerts.length!==3||!te.faceNormal||te.faceNormal.lengthSq()<1e-12)return null;let Y=Ee(ge),Te=Y*OA,q=Math.max(Y*2,1e-5);if(Math.abs(uh(ge,te.triVerts[0],te.faceNormal))>q)return null;let xe=he(te.mesh,te.triVerts[0],te.faceNormal,q);if(!xe.length)return null;let ve=[];for(let T of xe)Py(ge,T.a,T.b)<=Te&&ve.push(T.dir.clone());if(A&&A.lengthSq()>1e-12&&ve.push(A.clone().normalize()),!ve.length)return null;let Re=Y*Ty,P=null;for(let T of ve)if(!(T.lengthSq()<1e-12)){T.normalize();for(let X of xe){if(Math.abs(X.dir.dot(T))<LA||Py(ge,X.a,X.b)<=Te)continue;let _e=FA(ge,X.a,X.b);if(!J(_e)||ge.distanceTo(_e)*1e3<Ey||(kt.copy(_e).sub(ge),kt.lengthSq()<1e-16)||(kt.normalize(),Math.abs(kt.dot(T))>.08))continue;let ue=te.point.distanceTo(_e);Ye(te.point,er),Ye(_e,Wo);let be=Math.hypot(er.x-Wo.x,er.y-Wo.y);if(ue>Re*1.35&&be>Ty)continue;let ae=be+ue/Math.max(Y,1e-9);(!P||ae<P.score)&&(P={foot:_e.clone(),edgeDir:T.clone(),score:ae})}}return P?{foot:P.foot,edgeDir:P.edgeDir}:null}function he(ge,A,te,Y){let Te=ge.geometry,q=Te?.getAttribute("position");if(!q)return[];ge.updateWorldMatrix(!0,!1);let xe=Te.getIndex(),ve=new Map,Re=Math.max(Y*.25,1e-5);function P(ue,be,ae){$o.subVectors(be,ue).cross(kn.subVectors(ae,ue)),!($o.lengthSq()<1e-16)&&($o.normalize(),!(Math.abs($o.dot(te))<DA)&&(Math.abs(uh(ue,A,te))>Y||Math.abs(uh(be,A,te))>Y||Math.abs(uh(ae,A,te))>Y||(T(ue,be),T(be,ae),T(ae,ue))))}function T(ue,be){if(kt.copy(be).sub(ue),kt.lengthSq()<1e-16)return;let ae=BA(ue,be,Re);ve.has(ae)||ve.set(ae,{a:ue.clone(),b:be.clone(),dir:kt.clone().normalize()})}let X=xe?xe.count/3:q.count/3,_e=12e3,de=X>_e?Math.ceil(X/_e):1;for(let ue=0;ue<X;ue+=de){let be,ae,le;if(xe){let Ce=ue*3;be=xe.getX(Ce),ae=xe.getX(Ce+1),le=xe.getX(Ce+2)}else be=ue*3,ae=ue*3+1,le=ue*3+2;gi.fromBufferAttribute(q,be).applyMatrix4(ge.matrixWorld),xi.fromBufferAttribute(q,ae).applyMatrix4(ge.matrixWorld),tr.fromBufferAttribute(q,le).applyMatrix4(ge.matrixWorld),P(gi,xi,tr)}return[...ve.values()]}function Ae(){if(g){if(c==="placeFirst"){b=g.clone(),S=m?m.clone():null,c="placeSecond",p=null,(Lp({pointerType:M})||!Cy())&&(h=!1,g=null,x=null,m=null,Se()),me(),j();return}if(c==="placeSecond"&&b){if(b.distanceTo(g)*1e3<Ey)return;ze(b,g),ee(!1)}}}function ze(ge,A){let te=new Et;te.name="Dimension";let Y=Dy(16752394,1);Oy(Y,ge,A),Y.visible=!0;let Te=ge.clone().lerp(A,.5),q=ge.distanceTo(A),xe=VA(Ip(q));xe.position.copy(Te),te.add(Y,xe),F.add(te),$.push({group:te,sprite:xe,mid:Te.clone(),span:q}),He(xe,ge,A,Te,q)}function He(ge,A,te,Y,Te){let q=i();if(q.getWorldDirection(Ry),kt.copy(te).sub(A),kt.lengthSq()<1e-16){ge.position.copy(Y);return}kt.normalize(),kn.crossVectors(kt,Ry),kn.lengthSq()<1e-10&&kn.copy(q.up),kn.normalize();let xe=Math.max(Te*PA,Ee(Y)*18);ge.position.copy(Y).addScaledVector(kn,xe);let ve=Ee(ge.position)*56;ge.scale.set(ve*2.2,ve,1)}function Ke(){k.visible&&b&&K(k,b),G.visible&&g&&K(G,g),h&&Iy(Q,t,f,d,x),W.visible&&b&&g&&p&&x==="perp"&&Ny(W,b,g,p,Ee);for(let ge of $){let te=ge.group.children[0].geometry.getAttribute("position");gi.fromBufferAttribute(te,0),xi.fromBufferAttribute(te,1),He(ge.sprite,gi,xi,ge.mid,ge.span)}}function Ge(ge){if(!u||c==="idle"||!Dp(ge)||v!==null)return;let{x:A,y:te}=re(ge),Y=H(A,te,ge.pointerType);Ie(Y.x,Y.y,!0)}function ot(ge){if(!u||c==="idle"||ge.button!==void 0&&ge.button!==0||v!==null)return;v=ge.pointerId,M=ge.pointerType||"mouse";let{x:A,y:te}=re(ge);w=A,y=te,E=!1,L=!1;try{t.setPointerCapture(ge.pointerId)}catch{}if(Dp(ge)){let Y=H(A,te,M);Ie(Y.x,Y.y,!0)}ge.preventDefault()}function ne(ge){if(!u)return;if(v===null){Ge(ge);return}if(v!==ge.pointerId)return;let{x:A,y:te}=re(ge);if(Math.hypot(A-w,te-y)>=Sy&&(E=!0,L=!0),Lp(ge)){if(!L)return;let Te=H(A,te,"touch");Ie(Te.x,Te.y,!0)}else if(Dp(ge)){let Te=H(A,te,M);Ie(Te.x,Te.y,!0)}ge.preventDefault()}function Ue(ge){if(!u||v!==ge.pointerId)return;let{x:A,y:te}=re(ge);Math.hypot(A-w,te-y)>=Sy&&(E=!0,L=!0),v=null;try{t.releasePointerCapture(ge.pointerId)}catch{}if(Lp(ge)){E?L=!1:(L=!1,h&&g&&Ae()),ge.preventDefault();return}!E&&g&&Ae(),L=!1,ge.preventDefault()}function je(ge){v===ge.pointerId&&(v=null,L=!1)}return t.addEventListener("pointerdown",ot),t.addEventListener("pointermove",ne),t.addEventListener("pointerup",Ue),t.addEventListener("pointercancel",je),{isActive:ye,setActive:ee,update:Ke,formatMm:Ip}}function uh(n,e,t){return UA.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function Py(n,e,t){kt.copy(t).sub(e);let i=kt.lengthSq();if(i<1e-18)return n.distanceTo(e);let r=kn.copy(n).sub(e).dot(kt)/i;return r=Math.min(1,Math.max(0,r)),qo.copy(e).addScaledVector(kt,r).distanceTo(n)}function FA(n,e,t){kt.copy(t).sub(e);let i=kt.lengthSq();if(i<1e-18)return e.clone();let r=kn.copy(n).sub(e).dot(kt)/i;return r=Math.min(1,Math.max(0,r)),e.clone().addScaledVector(kt,r)}function BA(n,e,t){let i=Math.round(n.x/t),r=Math.round(n.y/t),s=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return i<o||i===o&&r<a||i===o&&r===a&&s<=l?`${i},${r},${s}|${o},${a},${l}`:`${o},${a},${l}|${i},${r},${s}`}function kA(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function Iy(n,e,t,i,r){let s=e.getBoundingClientRect();n.style.left=`${s.left+t}px`,n.style.top=`${s.top+i}px`,n.dataset.snap=r||"none"}function Ly(n){let e=new Ia(1,16,12),t=new an({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new pt(e,t);return i.renderOrder=20,i.visible=!1,i}function zA(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function Dy(n,e){let t=new Bt,i=new Float32Array(6);t.setAttribute("position",new Ht(i,3));let r=new Mr({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),s=new Hi(t,r);return s.renderOrder=19,s.frustumCulled=!1,s.visible=!1,s}function HA(n){let e=new Bt,t=new Float32Array(9);e.setAttribute("position",new Ht(t,3));let i=new Mr({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),r=new Hi(e,i);return r.renderOrder=22,r.frustumCulled=!1,r.visible=!1,r}function Ny(n,e,t,i,r){let s=r(t)*NA;if(kt.copy(e).sub(t),kt.lengthSq()<1e-16){n.visible=!1;return}if(kt.normalize(),kn.copy(i).normalize(),$o.crossVectors(kn,kt),$o.lengthSq()<1e-12){n.visible=!1;return}gi.copy(t).addScaledVector(kn,s),xi.copy(t),tr.copy(t).addScaledVector(kt,s);let o=n.geometry.getAttribute("position");o.setXYZ(0,gi.x,gi.y,gi.z),o.setXYZ(1,xi.x,xi.y,xi.z),o.setXYZ(2,tr.x,tr.y,tr.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function Oy(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function VA(n){let e=document.createElement("canvas");e.width=ch*2,e.height=ch;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(ch*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(n),c=Math.ceil(l.width),u=Math.round(ch*.42),h=c+o*2,f=u+a*2,d=(e.width-h)/2,g=(e.height-f)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",Uy(t,d,g,h,f,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,Uy(t,d,g,h,f,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new Sr(e);i.colorSpace=Tt,i.needsUpdate=!0;let r=new wo({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),s=new ba(r);return s.renderOrder=21,s.center.set(.5,.5),s}function Uy(n,e,t,i,r,s){let o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function hh(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function Di(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function By(n){let e="part",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let s=Di(i);if(s.part&&(e=s.part),s.element)return{part:s.part,element:s.element}}t=t.parent||null}return{part:e,element:null}}var dh=12,GA=500,WA=Math.PI/2,XA=.03,ky=.001;function qA(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function $A(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>dh?"drag":"tap"}function ph(n,e){return(e>=0?1:-1)*n*WA}function YA(n,e=null){let t=n.length,i=new Map,r=a=>{let l=i.has(a)?i.get(a):a;return l!==a?(l=r(l),i.set(a,l)):i.has(a)||i.set(a,a),l},s=(a,l)=>{let c=r(a),u=r(l);c!==u&&i.set(c,u)};if(e){let a=new Map,l=1e4,c=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<c;u++){let h=`${Math.round(e.getX(u)*l)},${Math.round(e.getY(u)*l)},${Math.round(e.getZ(u)*l)}`,f=a.get(h);f===void 0?a.set(h,u):s(u,f)}}for(let a=0;a+2<t;a+=3)s(n[a],n[a+1]),s(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let l=r(n[a]),c=o.get(l);c||(c=[],o.set(l,c)),c.push(a)}return[...o.values()]}function zy(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let r=YA(t.array,i);if(r.length<2)return[n];let s=e.getAttribute("normal"),o=[];for(let a of r){let l=new Map,c=[],u=[],h=[],f=x=>{let m=l.get(x);return m!==void 0||(m=c.length/3,l.set(x,m),c.push(i.getX(x),i.getY(x),i.getZ(x)),s&&u.push(s.getX(x),s.getY(x),s.getZ(x))),m};for(let x of a)h.push(f(t.getX(x)),f(t.getX(x+1)),f(t.getX(x+2)));let d=new Bt;d.setAttribute("position",new Gt(c,3)),u.length&&d.setAttribute("normal",new Gt(u,3)),d.setIndex(h);let g=new pt(d,n.material);g.name=n.name,g.position.copy(n.position),g.quaternion.copy(n.quaternion),g.scale.copy(n.scale),g.visible=n.visible,n.parent.add(g),o.push(g)}return n.parent.remove(n),e.dispose?.(),o}function ZA(n,e=[]){let t=[];n.traverse(s=>{let o=s.name||"";if(Di(o).part!=="door")return;let a=s.parent?.name||"";Di(a).part!=="door"&&t.push(s)});let i=new Set((e||[]).filter(s=>s&&s.kind==="drawer"&&s.element).map(s=>String(s.element)));i.size&&n.traverse(s=>{let o=Di(s.name||"");!o.element||!i.has(o.element)||Di(s.parent?.name||"").element!==o.element&&t.push(s)});let r=[];for(let s of t){if(s.isMesh){r.push(...zy(s));continue}let o=[];if(s.traverse(a=>{a.isMesh&&o.push(a)}),o.length===1){let a=zy(o[0]);if(a.length>1){r.push(...a);continue}}r.push(s)}return r}function KA(n,e,t=XA){let i=[];for(let a of n)for(let l of e){if(!l)continue;let c=l.kind==="drawer"&&Array.isArray(l.slide),u=Gy(l)||Wy(l);if(!c&&!u&&(l.kind!=="hinged"||!l.hinge))continue;let h=l.center;if(!Array.isArray(h)||h.length<3)continue;let f=a.center.x-Number(h[0]),d=a.center.y-Number(h[1]),g=a.center.z-Number(h[2]),x=Math.hypot(f,d,g);x<=t&&i.push({distance:x,entry:a,record:l})}i.sort((a,l)=>a.distance-l.distance);let r=new Set,s=new Set,o=[];for(let a of i)r.has(a.entry)||s.has(a.record.id)||(r.add(a.entry),s.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function jA(n){return n.updateWorldMatrix(!0,!0),new Lt().setFromObject(n).getCenter(new I)}function JA(n,e){let t=n.parent;if(!t)return null;if(e.kind==="drawer")return QA(n,e);if(Gy(e))return rR(n,e);if(Wy(e))return iR(n,e);let i=new Et;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=new I(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(r)),i.updateWorldMatrix(!0,!1),i.attach(n);let s={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=s};return o(i),n.traverse(o),s}function QA(n,e){let t=n.parent;if(!t)return null;let i=new Et;i.name=`drawer:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=e.center.map(Number),s=e.slide.map(Number),o=t.worldToLocal(new I(r[0],r[1],r[2])),a=t.worldToLocal(new I(r[0]+s[0],r[1]+s[1],r[2]+s[2]));i.updateWorldMatrix(!0,!1),i.attach(n);let l={id:e.id,kind:"drawer",pivot:i,host:n,slideLocal:a.sub(o),sign:1,goal:0,anim:null},c=u=>{u.userData.bpDoor=l};return c(i),n.traverse(c),l}function Gy(n){return!!(n&&n.kind==="sliding"&&Array.isArray(n.start)&&Array.isArray(n.end)&&Array.isArray(n.panels)&&n.panels.length>0)}var eR=new I(1,0,0);function Wy(n){return!!(n&&n.kind==="sectional"&&["start","end","bottom","top","inward"].every(e=>Array.isArray(n[e]))&&Number(n.sections)>=1)}function tR(n,e,t){if(n<=e||t<=0)return{y:n,z:0,tilt:0};let i=Math.PI/2*t;if(n<=e+i){let r=(n-e)/t;return{y:e+t*Math.sin(r),z:t*(1-Math.cos(r)),tilt:r}}return{y:e+t,z:t+(n-e-i),tilt:Math.PI/2}}function nR(n,e){return n+Math.PI/2*Math.max(0,e)}function iR(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=M=>t.worldToLocal(new I(Number(M[0]),Number(M[1]),Number(M[2]))),r=i(e.start),s=i(e.end),o=i(e.bottom),a=i(e.top),l=i([Number(e.bottom[0])+Number(e.inward[0]),Number(e.bottom[1])+Number(e.inward[1]),Number(e.bottom[2])+Number(e.inward[2])]),c=s.clone().sub(r),u=a.clone().sub(o),h=u.length();if(c.lengthSq()<1e-12||h<1e-6)return null;c.normalize(),u.normalize();let f=l.sub(o);if(f.addScaledVector(u,-f.dot(u)).addScaledVector(c,-f.dot(c)),f.lengthSq()<1e-12)return null;f.normalize();let d=new I().crossVectors(u,f),g=new lt().makeBasis(d,u,f),x=new Et;x.name=n.name,x.position.copy(o),x.quaternion.setFromRotationMatrix(g),t.add(x),x.updateWorldMatrix(!0,!1),x.attach(n);let m=Math.max(1,Math.round(Number(e.sections))),p=h/m,b=Math.max(0,Number(e.bend)||0),S=[];for(let M=0;M<m;M++){let w=M===0?n:n.clone(!0),y=new Et;y.name=`section:${e.id}:${M}`;let E=new Et;E.position.y=-p/2,E.scale.y=1/m,y.add(E),x.add(y),E.add(w),S.push({pivot:y,s0:(M+.5)*p})}let v={id:e.id,kind:"sectional",pivot:x,host:x,sections:S,rise:h,bend:b,travel:nR(h,b),sign:1,goal:0,anim:null};return Xy(v,0),x.traverse(M=>{M.userData.bpDoor=v}),v}function Xy(n,e){for(let t of n.sections){let i=tR(t.s0+e*n.travel,n.rise,n.bend);t.pivot.position.set(0,i.y,i.z),t.pivot.rotation.set(i.tilt,0,0)}}function rR(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=d=>t.worldToLocal(new I(Number(d[0]),Number(d[1]),Number(d[2]))),r=i(e.start),o=i(e.end).clone().sub(r);if(o.lengthSq()<1e-12)return null;let a=o.clone().normalize(),l=new Zt().setFromUnitVectors(eR,a),c=new Et;c.name=n.name,t.add(c);let u=e.panels.map((d,g)=>g===0?n:n.clone(!0)),h=[];e.panels.forEach((d,g)=>{let x=Array.isArray(d.span)?d.span.map(Number):[0,1],m=Array.isArray(d.slide)?d.slide:[0,0,0],p=i([Number(e.start[0])+Number(m[0]),Number(e.start[1])+Number(m[1]),Number(e.start[2])+Number(m[2])]).sub(r),b=new Et;b.name=`slide:${e.id}:${g}`,c.add(b);let S=new Et;S.position.copy(r),S.quaternion.copy(l),b.add(S),b.updateWorldMatrix(!0,!0);let v=u[g];v!==n&&(t.add(v),v.updateWorldMatrix(!0,!0)),S.attach(v),S.scale.x=Math.max(.001,x[1]-x[0]);let M=o.clone().multiplyScalar(x[0]);b.position.copy(M),h.push({pivot:b,base:M,slideLocal:p,span:x})});let f={id:e.id,kind:"sliding",pivot:c,host:c,panels:h,sign:1,goal:0,anim:null};return c.traverse(d=>{d.userData.bpDoor=f}),f}function nr(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/GA;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*qA(i)}var Hy=new Zt,xl=new I;function sR(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;xl.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(Hy).invert(),xl.applyQuaternion(Hy)),!(xl.lengthSq()<1e-12)&&(xl.normalize(),n.rotateOnAxis(xl,e))}function oR(n,e){let t=nr(n,e);if(n.sections)return Xy(n,t),t;if(n.panels){for(let i of n.panels)i.pivot.position.copy(i.base).addScaledVector(i.slideLocal,t);return t}return n.slideLocal?(n.pivot.position.copy(n.slideLocal).multiplyScalar(t),t):(sR(n.pivot,ph(t,n.sign)),t)}function aR(n,e){let t=nr(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function lR(n,e){let t=nr(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var fh=new I,cR=new an({side:Dt,transparent:!0,opacity:0,depthWrite:!1});function uR(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(m=>{m.isMesh&&m.geometry?.getAttribute?.("position")&&e.push(m)}),!e.length)return null;let t=new I,i=new I,r=new I;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,r),t.lengthSq()<1e-12||i.lengthSq()<1e-12||r.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),r.normalize();let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let m of e){let p=m.geometry;p.boundingBox||p.computeBoundingBox();let b=p.boundingBox,S=[b.min.x,b.max.x],v=[b.min.y,b.max.y],M=[b.min.z,b.max.z];for(let w of S)for(let y of v)for(let E of M){fh.set(w,y,E).applyMatrix4(m.matrixWorld);let L=fh.dot(t),D=fh.dot(i),F=fh.dot(r);L<s&&(s=L),D<o&&(o=D),F<a&&(a=F),L>l&&(l=L),D>c&&(c=D),F>u&&(u=F)}}let h=[(l-s)/2,(c-o)/2,(u-a)/2];if(h.some(m=>!(m>1e-6)))return null;let f=(s+l)/2,d=(o+c)/2,g=(a+u)/2;return{center:new I(t.x*f+i.x*d+r.x*g,t.y*f+i.y*d+r.y*g,t.z*f+i.z*d+r.z*g),axes:[t,i,r],half:h}}function hR(n,e){let t=new Vi(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new pt(t,cR);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function fR(n,e){let t=n.origin,i=n.direction,r=0,s=1/0;for(let o=0;o<3;o++){let a=e.axes[o],l=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),c=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(c)>1e-8){let h=(l+u)/c,f=(l-u)/c;if(h>f){let d=h;h=f,f=d}if(h>r&&(r=h),f<s&&(s=f),r>s)return null}else if(-l-u>0||-l+u<0)return null}return s<0?null:{tEnter:r,tExit:s}}function dR(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function Vy(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!Us(e))return e.userData.bpDoor;e=e.parent}return null}function pR(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function mR(n){return Fs(n.object)}function gR(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function qy(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),r=[],s=new ti,o=new Ze,a=null,l=0,c=null;function u(){c&&clearTimeout(c),c=null}function h(M,w,y){try{n.onToggle?.(M,{from:w,to:y})}catch(E){console.warn("door onToggle",E)}}let f=My();f.register({id:"door",priority:100,claim(M,w){let y=Vy(M.object);if(!y||y.host?.userData?.bpIfcHidden)return null;let E=w.now??performance.now(),L=nr(y,E)>ky,D=()=>{let F=w.now??performance.now(),G=nr(y,F);aR(y,F),h(y,G,y.goal)};return{onTap:D,actions:[{id:"door",labelKey:L?"ui.close":"ui.open",run:D}]}},targets(){let M=[];for(let w of r){let y=w.host;if(!y||y.userData?.bpIfcHidden||!pR(y))continue;let E=new Lt().setFromObject(y);if(E.isEmpty())continue;let L=E.getCenter(new I);M.push({center:L,group:`door:${w.id}`,hit:{object:y,point:L},owns:D=>Vy(D)===w})}return M}});function d(M){let w=[],y=Number.isFinite(M.maxT)?M.maxT:1/0;for(let E of r){if(!E.obb||E.host?.userData?.bpIfcHidden||nr(E,M.now)<=ky)continue;let L=fR(M.raycaster.ray,E.obb);!L||L.tEnter>y||w.push({binding:E,tEnter:L.tEnter})}return dR(w)}f.register({id:"opening",priority:10,probe:(M,w)=>!!d(w),fallback(M,w){let y=d(w);if(!y)return!1;let E=nr(y,w.now);return lR(y,w.now)?(h(y,E,0),!0):!1}});function g(M){for(let E of r)gR(E);if(r.length=0,!M||!e.length)return 0;M.updateWorldMatrix(!0,!0);let y=ZA(M,e).map(E=>({host:E,center:jA(E)}));for(let E of KA(y,e)){let L=JA(E.entry.host,E.record);if(!L)continue;let D=L.kind==="drawer"?null:uR(L.host);L.obb=D,L.proxy=D?hR(D,`opening:${L.id}`):null,r.push(L)}return r.length}function x(M){let w=!1;for(let y of r){let E=!!y.anim;!E&&y.shown===y.goal||(oR(y,M),y.shown=y.anim?null:y.goal,E&&(w=!0))}return w}function m(M){if(!(M.button!==void 0&&M.button!==0)){if(l+=1,l>1){a=null;return}a={id:M.pointerId,x:M.clientX,y:M.clientY,moved:0,pointers:1,modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey,consumed:!1},u(),c=setTimeout(()=>{c=null,!(!a||a.consumed||hh({dt:500,dx:a.moved,dy:0,pointers:l,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function p(M){if(!a||M.pointerId!==a.id)return;let w=Math.hypot(M.clientX-a.x,M.clientY-a.y);w>a.moved&&(a.moved=w),a.moved>dh&&u()}function b(M){if(l=Math.max(0,l-1),u(),!a||M.pointerId!==a.id)return;let w=a;if(a=null,w.consumed)return;let y=Math.max(w.moved,Math.hypot(M.clientX-w.x,M.clientY-w.y));$A({dx:y,dy:0,pointers:l>0?2:1,button:M.button,blocked:i(),modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey})==="tap"&&v(M)}function S(){l=Math.max(0,l-1),a=null}function v(M){let w=n.getCamera();if(!w||!r.length)return;let y=t.getBoundingClientRect(),E=y.width||t.clientWidth||1,L=y.height||t.clientHeight||1;o.x=(M.clientX-y.left)/E*2-1,o.y=-((M.clientY-y.top)/L)*2+1,s.setFromCamera(o,w);let F=r[0]?.pivot?.parent;for(;F?.parent;)F=F.parent;if(!F)return;let G=s.intersectObject(F,!0);f.dispatch(G,{raycaster:s,now:performance.now(),camera:w,root:F,tap:{x:M.clientX-y.left,y:M.clientY-y.top},size:{w:E,h:L}},mR)}return t.addEventListener("pointerdown",m,!0),t.addEventListener("pointermove",p,!0),t.addEventListener("pointerup",b,!0),t.addEventListener("pointercancel",S,!0),t.addEventListener("contextmenu",M=>M.preventDefault()),{bind:g,step:x,bindings:r,taps:f}}var xR=.8,yR=.4,$y=.01,_R=1e-9;function Np(n){let e=Array.isArray(n?.slide)?n.slide.map(Number):[];return e.length===3&&e.some(t=>Math.abs(t)>_R)}function vR(n){return n?n.operable===!1?!1:Array.isArray(n.panels)&&n.panels.some(Np):!0}function bR(n,e){let t=Array.isArray(n?.panels)?n.panels:[],i=-1,r=1/0;return t.forEach((s,o)=>{if(!Array.isArray(s.min)||!Array.isArray(s.max))return;let a=!0,l=0;for(let c=0;c<3;c++){let u=Number(s.min[c])-$y,h=Number(s.max[c])+$y;(e[c]<u||e[c]>h)&&(a=!1);let f=(Number(s.min[c])+Number(s.max[c]))/2;l+=(e[c]-f)**2}a&&l<r&&(i=o,r=l)}),i}var Yy=new Lt,_l=new I;function MR(n){let e=n.geometry;return e&&!e.boundingBox&&e.computeBoundingBox?.(),n.updateWorldMatrix?.(!0,!1),e?.boundingBox?(Yy.copy(e.boundingBox).applyMatrix4(n.matrixWorld),Yy.getCenter(_l)):n.getWorldPosition(_l),[_l.x,_l.y,_l.z]}function Zy(n=[]){let e=new Map;for(let d of Array.isArray(n)?n:[])d&&d.id&&e.set(String(d.id),d);let t=new Map;function i(d){let g=0;for(let m of d){let p=m.geometry;p&&!p.boundingBox&&p.computeBoundingBox?.(),p?.boundingBox&&(g=Math.max(g,p.boundingBox.max.x-p.boundingBox.min.x))}let x=(g||yR)*xR;return{record:null,moving:d.map(m=>({mesh:m,slideLocal:new I(x,0,0),panel:0})),fixed:new Set,panelOf:new Map(d.map(m=>[m,0]))}}function r(d,g){let x=[],m=new Set,p=new Map;for(let b of g){let S=MR(b),v=bR(d,S),M=v>=0?d.panels[v]:null;if(p.set(b,v),!M||!Np(M)){m.add(b);continue}let w=M.slide.map(Number),y=b.parent,E=new I(w[0],w[1],w[2]);if(y){y.updateWorldMatrix(!0,!1);let L=y.worldToLocal(new I(S[0],S[1],S[2]));E=y.worldToLocal(new I(S[0]+w[0],S[1]+w[1],S[2]+w[2])).sub(L)}x.push({mesh:b,slideLocal:E,panel:v})}return{record:d,moving:x,fixed:m,panelOf:p}}function s(d,g){let x=t.get(d);if(x)return x;let m=e.get(String(d))||null,p=m?r(m,g):i(g);for(let{mesh:b}of p.moving)b.userData.bpSlideOrigin||(b.userData.bpSlideOrigin=b.position.clone());return x={...p,goal:0,anim:null,shown:0},t.set(d,x),x}function o(d){return e.get(String(d))||null}function a(d){return vR(o(d))}function l(d,g){if(!a(d))return[];let x=s(d,g),m=new Set(x.moving.map(p=>p.mesh));return g.filter(p=>m.has(p))}function c(d,g,x){let m=new Set(l(d,g));if(!m.size)return!1;if(!x)return!0;for(let p=x;p;p=p.parent)if(m.has(p))return!0;return!1}function u(d,g,x,m){if(!a(d))return!1;let p=s(d,g);if(!p.moving.length)return!1;let b=nr(p,m);return p.goal=x?1:0,p.anim={from:b,to:p.goal,t0:m},p.shown=null,!0}function h(d){let x=o(d)?.panels?.find(Np);return x?x.slide.map(Number):null}function f(d){let g=!1;for(let x of t.values()){if(!x.anim&&x.shown===x.goal)continue;let m=nr(x,d);for(let{mesh:p,slideLocal:b}of x.moving)p.position.copy(p.userData.bpSlideOrigin).addScaledVector(b,m);x.shown=x.anim?null:x.goal,g=!0}return g}return{slide:u,step:f,slides:t,isOperable:a,operableMeshes:l,acceptsHit:c,slideOf:h,recordOf:o}}var SR=700,wR=36,Yo=36;function ER(n,e=!1){let t=Math.min(Math.max(n,0),1),i=t<.2?1:1-(t-.2)/.8;if(e)return{opacity:i,rise:0,scale:1};let r=1-(1-t)*(1-t),s=t<.15?.7+.3*t/.15:1;return{opacity:i,rise:wR*r,scale:s}}function Ky(n,e){let t=e.x-n.x,i=e.y-n.y;return Math.hypot(t,i)<1e-6?null:Math.atan2(i,t)*180/Math.PI}function TR(n){return n==="down"?90:-90}function jy(n,e,t){let i=n[0]-e[0],r=n[2]-e[2],s=Math.cos(t),o=Math.sin(t);return[e[0]+s*i+o*r,n[1],e[2]-o*i+s*r]}function AR(n,e,t){let i=Ky(n,e);if(i==null)return null;let r=e.x-n.x,s=e.y-n.y,o=(n.x+e.x)/2,a=(n.y+e.y)/2,c=r*(t.y-a)-s*(t.x-o)>=0?1:-1;return{angle:i+45*c,bend:c}}function RR(n=SR){let e=[],t=1;return{items:e,add(i,r){let s={id:t++,t0:i,data:r};return e.push(s),s},step(i){let r=[],s=[];for(let o=e.length-1;o>=0;o-=1)(i-e[o].t0)/n>=1&&s.push(...e.splice(o,1));for(let o of e)r.push({item:o,t:(i-o.t0)/n});return{alive:r,expired:s}}}}var CR="http://www.w3.org/2000/svg",Op='fill="#16181d" stroke="#fff" stroke-width="2.2" stroke-linejoin="round" paint-order="stroke"',PR={arrow:`<path ${Op} d="M4 12.5 H17 V6 L29 16 L17 26 V19.5 H4 Z"/>`,hinge:`<path fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path fill="none" stroke="#16181d" stroke-width="4.4" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path ${Op} d="M17 5.5 L28 13 L17 20.5 Z"/>`,ring:`<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" stroke-width="6"/><circle cx="16" cy="16" r="9" fill="none" stroke="#16181d" stroke-width="3"/><circle cx="16" cy="16" r="3" ${Op}/>`},as=null;function IR(n=globalThis){try{let e=n.navigator;if(e&&typeof e.vibrate=="function"&&e.vibrate(10))return"vibrate";let t=n.document,i=n.matchMedia?.("(pointer: coarse)")?.matches;if(!t||!i)return"none";if(!as){as=t.createElement("label"),as.setAttribute("aria-hidden","true"),as.style.display="none";let r=t.createElement("input");r.type="checkbox",r.setAttribute("switch",""),as.appendChild(r)}return t.head.appendChild(as),as.click(),as.remove(),"ios-switch"}catch{return"none"}}function Jy(n){let e=n.document||globalThis.document,t=n.now||(()=>performance.now()),i=n.requestFrame||(p=>globalThis.requestAnimationFrame(p)),r=n.reducedMotion||(()=>!!globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches),s=n.haptics||(()=>IR()),o=RR(),a=new I,l=null,c=!1;function u(){return l||(l=e.createElement("div"),l.className="bp-feedback",l.setAttribute("aria-hidden","true"),Object.assign(l.style,{position:"fixed",left:"0",top:"0",width:"0",height:"0",pointerEvents:"none",zIndex:"40"}),e.body.appendChild(l),l)}function h(p){let b=n.getCamera();if(!b||(Array.isArray(p)?a.set(p[0],p[1],p[2]):a.copy(p),b.updateMatrixWorld?.(),a.project(b),!Number.isFinite(a.x)||a.z>1||a.z<-1))return null;let S=n.canvas.getBoundingClientRect();return{x:S.left+(a.x+1)/2*S.width,y:S.top+(1-a.y)/2*S.height}}function f(p,b){let S=h(p),v=Array.isArray(p)?new I(...p):p.clone(),M=Array.isArray(b)?new I(...b):b.clone(),w=M.length();if(w<1e-9)return null;let y=h(v.add(M.multiplyScalar(.1/w)));return!S||!y?null:Ky(S,y)}function d(p){if(p.haptic!==!1)try{s()}catch{}try{return g(p)}catch(b){return console.warn("feedback",b),null}}function g(p){if(!e?.body||!p?.worldPos)return null;let b="arrow",S=-90,v=1;if(p.kind==="switch"||p.kind==="lift")S=TR(p.direction||"up");else if(p.kind==="slide"){let L=p.worldDir?f(p.worldPos,p.worldDir):null;if(L==null)return null;S=L}else if(p.kind==="hinge"){let L=h(p.worldPos),D=p.to?h(p.to):null,F=p.hinge?h(p.hinge):null,G=L&&D&&F?AR(L,D,F):null;if(!G)return null;b="hinge",S=G.angle,v=G.bend}else p.kind==="light"&&(b="ring",S=0);let M=Array.isArray(p.worldPos)?new I(...p.worldPos):p.worldPos.clone();if(p.kind==="hinge"&&p.to){let L=Array.isArray(p.to)?new I(...p.to):p.to;M.lerp(L,.5)}let w=e.createElement("div");w.className=`bp-feedback-item bp-feedback-${p.kind}`,Object.assign(w.style,{position:"absolute",left:"0",top:"0",width:`${Yo}px`,height:`${Yo}px`,marginLeft:`${-Yo/2}px`,marginTop:`${-Yo/2}px`,willChange:"transform, opacity",filter:"drop-shadow(0 1px 2px rgba(0,0,0,.45))"});let y=e.createElementNS(CR,"svg");y.setAttribute("viewBox","0 0 32 32"),y.setAttribute("width",String(Yo)),y.setAttribute("height",String(Yo)),y.style.overflow="visible",y.style.transform=`rotate(${S}deg) scale(1, ${v})`,y.innerHTML=PR[b],w.appendChild(y),u().appendChild(w);let E=o.add(t(),{el:w,anchor:M,kind:p.kind});return x(E,0),c||(c=!0,i(m)),E}function x(p,b){let{el:S,anchor:v,kind:M}=p.data,w=h(v);if(!w){S.style.opacity="0";return}let y=ER(b,r()),E=M==="light"?.8+.7*Math.min(Math.max(b,0),1):y.scale,L=M==="light"?0:y.rise;S.style.opacity=String(y.opacity),S.style.transform=`translate(${w.x.toFixed(1)}px, ${(w.y-L).toFixed(1)}px) scale(${E.toFixed(3)})`}function m(){let{alive:p,expired:b}=o.step(t());for(let S of b)S.data.el.remove();for(let{item:S,t:v}of p)x(S,v);p.length?i(m):c=!1}return{showFeedback:d,count:()=>o.items.length,tick:m}}var LR=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t),actions:(n,e,t,i)=>i.switchActions?.(n,e,t)},{type:"IfcActuator",id:"cover",priority:55,liveOnly:!0,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onCover?.(n,e,t),actions:(n,e,t,i)=>i.coverActions?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t),accepts:(n,e,t)=>t.windowAccepts?t.windowAccepts(n,e):!0}];function Qy(n,e){for(let t of LR)n.register({id:t.id,priority:t.priority,claim(i,r){let s=e.elementOf?.(i.object);if(!s||s.type!==t.type||t.liveOnly&&!e.isLive?.(s)||t.accepts&&!t.accepts(s,i,e))return null;let o=()=>t.run(s,i,r,e),a=t.actions?.(s,i,r,e);return{onTap:o,actions:Array.isArray(a)&&a.length?a:[{id:t.id,labelKey:t.labelKey(s,e),run:o}]}},targets(i){let r=e.targetsFor?.(t.type,i);return Array.isArray(r)?t.liveOnly?r.filter(s=>e.isLive?.(s.element)):r:[]}})}var DR="https://home-test.tail9f879b.ts.net",t_="blueprints.homeMode",NR=new Set(["IfcLightFixture","IfcSwitchingDevice","IfcSensor","IfcActuator"]),e_=[2e3,5e3,15e3,3e4,6e4],OR=5e3;function n_(n){for(let e of Object.values(n?.elements||{}))if(e&&NR.has(e.type||""))return!0;return!1}function i_(n={}){let e;try{e=new URLSearchParams(n.search||"")}catch{e=new URLSearchParams}let t="live",i=null;try{i=n.storage?.getItem(t_)??null}catch{i=null}(i==="off"||i==="live")&&(t=i);let r=(e.get("home")||"").trim().toLowerCase();(r==="off"||r==="live")&&(t=r);let s=DR,o=(e.get("homeUrl")||"").trim();if(o)try{let a=new URL(o);(a.protocol==="https:"||a.protocol==="http:")&&(s=a.href.replace(/\/+$/,""))}catch{}return{mode:t,baseUrl:s}}function r_(n,e){try{n?.setItem(t_,e)}catch{}}function UR(n){let e=new URL(n.replace(/\/+$/,"")+"/events");return e.protocol=e.protocol==="http:"?"ws:":"wss:",e.href}function FR(n,e,t=""){return`${n.replace(/\/+$/,"")}/devices/${encodeURIComponent(e)}${t}`}function BR(n,e){return`${n.replace(/\/+$/,"")}/simulate/devices/${encodeURIComponent(e)}/press`}var mh=4868682;function Up(n){let e=[[2200,16751135],[3e3,16758835],[4e3,16766814],[5e3,16773816],[6500,15266303]],t=Number.isFinite(n)?Math.min(Math.max(n,e[0][0]),e.at(-1)[0]):3e3,i=0;for(;i<e.length-2&&t>e[i+1][0];)i+=1;let[r,s]=e[i],[o,a]=e[i+1],l=(t-r)/(o-r),c=(h,f)=>h>>f&255,u=h=>Math.round(c(s,h)+(c(a,h)-c(s,h))*l);return u(16)<<16|u(8)<<8|u(0)}function Fp(n){let e=n?.state||{},t=!!(n?.online&&e.onOff?.onOff===!0),i=e.levelControl?.currentLevel,r=Number.isFinite(i)?Math.min(Math.max(i/254,0),1):1,s=e.colorControl?.colorTemperatureMireds,o=Number.isFinite(s)&&s>0?Math.round(1e6/s):null,a=t?Up(o):mh;return{on:t,level:r,kelvin:o,color:a}}function vl(n){return n?.objectType==="DoublePushButton"?["rocker-1","rocker-2"]:["rocker"]}function s_(n,e){let t=vl(n);return{rocker:t.length>1?t[e.side<0?0:1]:t[0],position:e.dy>=0?"up":"down",kind:"short"}}function o_(n,e){if(!n)return[];let t=[];n.online||t.push(e("home.deviceOffline"));let i=n.state||{};switch(n.deviceType){case"ColorTemperatureLight":{let r=i.onOff?.onOff;t.push(r==null?e("home.unknown"):e(r?"home.on":"home.off"));let s=Fp({...n,online:!0});Number.isFinite(i.levelControl?.currentLevel)&&t.push(`${e("home.level")} ${Math.round(s.level*100)} %`),s.kelvin&&t.push(`${s.kelvin} K`);let o=i.derived?.channels;o&&t.push(`${e("home.warm")} ${Math.round(o.warm)} % \xB7 ${e("home.cool")} ${Math.round(o.cool)} %`);break}case"GenericSwitch":{let r=i.switch?.lastEvent;r?t.push(`${e("home.lastEvent")}: ${r.rocker} ${r.position} ${r.event}`):t.push(e("home.noEvents"));break}case"ContactSensor":{let r=i.booleanState?.stateValue;t.push(r==null?e("home.unknown"):e(r?"home.contactClosed":"home.contactOpen"));break}case"OccupancySensor":{let r=i.occupancySensing?.occupancy;t.push(r==null?e("home.unknown"):r.occupied?e("home.occupied"):e("home.vacant"));break}case"WindowCovering":{let r=i.windowCovering?.currentPositionLiftPercent100ths;t.push(r==null?e("home.unknown"):`${e("home.closedPct")} ${Math.round(r/100)} %`);break}default:break}return t}function a_(n){let e=n.fetchImpl||globalThis.fetch?.bind(globalThis),t=n.WebSocketImpl||globalThis.WebSocket,i=n.setTimer||((v,M)=>setTimeout(v,M)),r=n.clearTimer||(v=>clearTimeout(v)),s=new Map,o="off",a=!1,l=!1,c=0,u=0,h=null,f=null;function d(v,M){if(!(o===v&&!M)){o=v;try{n.onStatus?.(v,M)}catch(w){console.error("home onStatus",w)}}}function g(v,...M){try{v?.(...M)}catch(w){console.error("home handler",w)}}function x(v){if(!l||v!==u)return;let M=e_[Math.min(c,e_.length-1)];c+=1,f=i(()=>{f=null,l&&v===u&&b(v)},M)}function m(v){if(!v||typeof v.globalId!="string")return;let M=s.get(v.globalId);s.set(v.globalId,v),g(n.onDevice,v,M)}function p(v){let M;try{M=JSON.parse(typeof v=="string"?v:String(v))}catch{return}if(!(!M||typeof M!="object"))if(M.type==="snapshot"&&Array.isArray(M.devices)){c=0;for(let w of M.devices)m(w);d("live"),g(n.onSnapshot,M.devices)}else M.type==="state"&&M.device?m(M.device):M.type==="switch"&&M.event&&g(n.onSwitch,M.event)}async function b(v){if(!e||!t){d("unreachable","no fetch/WebSocket");return}d(o==="live"?"connecting":o==="unreachable"?"unreachable":"connecting");let M=null;try{let y=typeof AbortController=="function"?new AbortController:null,E=i(()=>y?.abort(),OR);try{let L=await e(`${n.baseUrl.replace(/\/+$/,"")}/health`,{signal:y?.signal,cache:"no-store"});L.ok&&(M=await L.json())}finally{r(E)}}catch{M=null}if(!l||v!==u)return;if(!M||M.status!=="ok"){d("unreachable"),x(v);return}a=!!M.simulation;let w;try{w=new t(UR(n.baseUrl))}catch{d("unreachable"),x(v);return}h=w,w.onmessage=y=>{v===u&&p(y.data)},w.onclose=()=>{h===w&&(h=null),!(!l||v!==u)&&(d(o==="live"?"connecting":"unreachable"),x(v))},w.onerror=()=>{}}async function S(v,M){if(!e||o!=="live")return{ok:!1,status:0};try{let w=await e(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)}),y="";if(!w.ok)try{let E=await w.json();y=E?.error?.message||E?.error?.code||""}catch{}return{ok:w.ok,status:w.status,error:y}}catch(w){return{ok:!1,status:0,error:String(w?.message||w)}}}return{start(){l||(l=!0,c=0,u+=1,b(u))},stop(){l=!1,u+=1,f!=null&&r(f),f=null;let v=h;h=null;try{v?.close()}catch{}s.clear(),a=!1,d("off")},status:()=>o,isLive:()=>o==="live",simulation:()=>a,device:v=>o==="live"?s.get(v):void 0,lastKnown:v=>s.get(v),devices:()=>[...s.values()],command:(v,M)=>S(FR(n.baseUrl,v,"/commands"),M),press:(v,M)=>S(BR(n.baseUrl,v),M)}}function l_(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(i=>e[i]):[];return{elements:e,roots:t}}function gh(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let r=i.parentId||null;(r===e||!r&&i.containerId===e)&&t.push(i)}return t.sort((i,r)=>{let s=(i.order??0)-(r.order??0);return s||String(i.name||"").localeCompare(String(r.name||""))}),t.map(i=>i.globalId)}function Bp(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=s.parentId||s.containerId||null}return t.reverse(),t}function kp(n,e){return Bp(n,e).slice(0,-1)}function zp(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of gh(n,s))r(a,o+1)};for(let s of n.roots)r(s,0);return t}function c_(n){return Math.min(Math.max(0,n),4)*12}function u_(n,e,t,i,r=44,s=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/r)-s),l=Math.min(i,Math.ceil((o+e)/r)+s);return{start:a,end:Math.max(a,l)}}function Bs(n,e){let t=[],i=[e],r=new Set;for(;i.length;){let s=i.pop();if(!(!s||r.has(s)||!n.elements[s])){r.add(s),t.push(s);for(let o of gh(n,s))i.push(o)}}return t}function h_(n,e){let t=null,i=null,r=new Set,s=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;s&&n.elements[s]&&!r.has(s);){r.add(s);let o=n.elements[s];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),s=o.containerId||o.parentId||null}return{storey:t,space:i}}function f_(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([r])=>r!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[r,s]of i)e.push(`${r}: ${d_(s)}`)}}return e}function d_(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function p_(n,e){return n&&n===e?"frame":"pulse"}function m_(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${d_(e.value)}`):[]}var kR=`<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.5 4.2h8.2v1.35H2.5V4.2zm0 5.1h8.2v1.35H2.5V9.3zm0 5.15h8.2V15.8H2.5v-1.35z"/>
  <path fill="currentColor" d="M13.2 6.15l3.15 3.15-3.15 3.15-1.05-1.05 1.35-1.35H11.2V8.55h2.3L12.15 7.2l1.05-1.05z"/>
</svg>`;function g_(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},closePopover(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let r=document.createElement("span");r.dataset.i18n="ui.inspector",r.textContent=n.t("ui.inspector");let s=document.createElement("span");s.className="ifc-entry-chevron",s.setAttribute("aria-hidden","true"),s.textContent="\u203A",i.append(r,s),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let l=document.createElement("button");l.type="button",l.className="ifc-back",l.dataset.noSheetDrag="true";let c=document.createElement("button");c.type="button",c.className="ifc-show-all",c.hidden=!0,c.dataset.noSheetDrag="true",a.append(l,c);let u=document.createElement("div");u.className="ifc-crumbs",u.dataset.noSheetDrag="true";let h=document.createElement("div");h.className="ifc-list";let f=document.createElement("div");f.className="ifc-list-spacer";let d=document.createElement("div");d.className="ifc-list-window",h.append(f,d);let g=document.createElement("div");g.className="ifc-head",g.append(a,u),o.append(g,h),e.append(t,o);let x=document.createElement("div");x.id="ifc-popover",x.hidden=!0,x.className="ifc-popover",document.body.append(x);let m=document.createElement("div");m.id="ifc-row-menu",m.hidden=!0,m.className="ifc-menu",document.body.append(m);let p=new Set,b=null,S=null,v=0;function M(){o.hidden=!0,t.hidden=!1,me()}function w(){t.hidden=!0,o.hidden=!1,D(),requestAnimationFrame(()=>D())}function y(){n.openSheet(),w(),e.scrollTop=0}i.addEventListener("click",()=>y()),l.addEventListener("click",()=>{M(),e.scrollTop=0}),c.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),D()});function E(he){let Ae=n.index.elements[he];return Ae&&(Ae.name||Ae.id||Ae.type)||he}function L(){u.replaceChildren();let he=b?Bp(n.index,b):[];if(!he.length){u.hidden=!0;return}u.hidden=!1,he.forEach((Ae,ze)=>{if(ze){let Ke=document.createElement("span");Ke.className="ifc-crumb-sep",Ke.textContent="\u203A",u.append(Ke)}let He=document.createElement("button");He.type="button",He.className="ifc-crumb",He.textContent=E(Ae),He.addEventListener("click",()=>{b=Ae;for(let Ke of kp(n.index,Ae))p.add(Ke);D(),z(Ae)}),u.append(He)})}function D(){l.textContent=`\u2039 ${n.t("ui.menu")}`,c.textContent=n.t("ui.showAll"),c.hidden=!n.visibility.anyHidden(),r.textContent=n.t("ui.inspector"),L(),k()}function F(){let he=e.getBoundingClientRect();return h.getBoundingClientRect().top-he.top+e.scrollTop}function G(){let he=e.getBoundingClientRect();return g.getBoundingClientRect().bottom-he.top+6}function k(){let he=zp(n.index,p);f.style.height=`${he.length*44}px`;let Ae=u_(e.scrollTop,e.clientHeight||320,F(),he.length,44);d.replaceChildren(),d.style.transform=`translateY(${Ae.start*44}px)`;for(let ze=Ae.start;ze<Ae.end;ze++)d.append(N(he[ze]))}function N(he){let Ae=n.index.elements[he.id],ze=gh(n.index,he.id),He=document.createElement("div");if(He.className="ifc-row",He.dataset.id=he.id,He.style.paddingLeft=`${c_(he.depth)+8}px`,He.style.height=`${44}px`,(he.id===S||he.id===b)&&He.classList.add("is-target"),n.visibility.isHidden(he.id)&&He.classList.add("is-hidden"),ze.length){let ne=document.createElement("button");ne.type="button",ne.className="ifc-disclosure";let Ue=p.has(he.id);ne.textContent=Ue?"\u25BE":"\u203A",ne.setAttribute("aria-expanded",Ue?"true":"false"),ne.setAttribute("aria-label",Ue?n.t("ui.collapse"):n.t("ui.expand")),ne.addEventListener("click",je=>{je.stopPropagation(),p.has(he.id)?p.delete(he.id):p.add(he.id),D()}),He.append(ne)}else{let ne=document.createElement("span");ne.className="ifc-disclosure-spacer",He.append(ne)}let Ke=document.createElement("span");Ke.className="ifc-row-text";let Ge=document.createElement("span");Ge.className="ifc-row-name",Ge.textContent=E(he.id);let ot=document.createElement("span");return ot.className="ifc-row-meta",ot.textContent=Ae?.type||"",Ke.append(Ge,ot),He.append(Ke),ye(He,he.id),He}let W=0;function Q(he){let Ae=performance.now();if(Ae-W<40)return;W=Ae;let ze=p_(b,he);b=he,n.onFrame(he,{move:ze==="frame"}),ee(he),L()}function $(he){return he instanceof Element&&!!he.closest(".ifc-disclosure")}function ye(he,Ae){let ze=null,He=0,Ke=()=>{He&&window.clearTimeout(He),He=0},Ge=(Ue,je,ge)=>{$(ge)||(Ke(),ze={x:Ue,y:je,moved:0,consumed:!1},He=window.setTimeout(()=>{He=0,!(!ze||ze.consumed||hh({dt:500,dx:ze.moved,dy:0,released:!1})!=="longpress")&&(ze.consumed=!0,Se(Ae,ze.x,ze.y))},500))},ot=(Ue,je)=>{if(!ze)return;let ge=Math.hypot(Ue-ze.x,je-ze.y);ge>ze.moved&&(ze.moved=ge),ze.moved>12&&Ke()},ne=(Ue,je,ge)=>{Ke();let A=ze;ze=null,!(!A||A.consumed||$(ge)||Math.max(A.moved,Math.hypot(Ue-A.x,je-A.y))>12)&&Q(Ae)};he.addEventListener("pointerdown",Ue=>{Ue.button!==void 0&&Ue.button!==0||Ge(Ue.clientX,Ue.clientY,Ue.target)}),he.addEventListener("pointermove",Ue=>ot(Ue.clientX,Ue.clientY)),he.addEventListener("pointerup",Ue=>{Ue.pointerType!=="touch"&&ne(Ue.clientX,Ue.clientY,Ue.target)}),he.addEventListener("pointercancel",()=>Ke()),he.addEventListener("touchend",Ue=>{let je=Ue.changedTouches[0];je&&ne(je.clientX,je.clientY,Ue.target)},{passive:!0})}function ee(he){S=he,v&&window.clearTimeout(v),v=window.setTimeout(()=>{S===he&&(S=null),k()},1600),k()}function z(he){let ze=zp(n.index,p).findIndex(Ke=>Ke.id===he);if(ze<0)return;let He=F()+ze*44;e.scrollTop=Math.max(0,He-G()),k()}let j=!1;function Se(he,Ae,ze){re(),m.replaceChildren(),m.hidden=!1,j=!1;let He=n.visibility.isHidden(he);K(He?"ui.unhideThis":"ui.hideThis",()=>{He?n.visibility.unhide(he):n.visibility.hide(he),Ie()}),K("ui.hideOthers",()=>{n.visibility.hideOthers(he),Ie()}),K("ui.unhideOthers",()=>{n.visibility.unhideOthers(he),Ie()}),H(m,Ae,ze)}function Ie(){n.onVisibility(),me(),D()}function K(he,Ae){let ze=document.createElement("button");ze.type="button",ze.className="ifc-menu-btn",ze.textContent=n.t(he);let He=!1,Ke=Ge=>{Ge.preventDefault(),Ge.stopPropagation(),!He&&(He=!0,Ae())};ze.addEventListener("touchend",Ke),ze.addEventListener("click",Ke),m.append(ze)}function me(){m.hidden=!0,m.replaceChildren()}function re(){x.hidden=!0,x.replaceChildren()}function H(he,Ae,ze){he.hidden=!1,he.style.left="0px",he.style.top="0px";let He=he.getBoundingClientRect(),Ke=8,Ge=Math.max(Ke,window.innerWidth-He.width-Ke),ot=Math.min(Math.max(Ke,Ae),Ge),ne=ze+8;ne+He.height>window.innerHeight-Ke&&(ne=Math.max(Ke,ze-He.height-8)),he.style.left=`${ot}px`,he.style.top=`${ne}px`}function J(he,Ae,ze,He,Ke){if(me(),x.replaceChildren(),x.hidden=!1,!he)Ee(n.t("ui.noIfc"),Ae||"");else{let Ge=document.createElement("div");Ge.className="ifc-pop-id";let ot=document.createElement("button");ot.type="button",ot.className="ifc-pop-title";let ne=document.createElement("div");ne.className="ifc-kicker";let Ue=document.createElement("div");Ue.className="ifc-name";let je=he.name||he.id||"",ge=he.globalId||"",A=!1,te=0,Y=()=>{ne.hidden=!A,ne.textContent=A?n.t("ui.globalId"):"",Ue.textContent=A?ge:je,Ue.className=A?"ifc-gid":"ifc-name",ot.setAttribute("aria-label",A?je:n.t("ui.globalId"))},Te=T=>{T.preventDefault(),T.stopPropagation();let X=performance.now();X-te<80||(te=X,A=!A,Y())};Y(),ot.append(ne,Ue),ot.addEventListener("touchend",Te),ot.addEventListener("click",Te);let q=document.createElement("button");q.type="button",q.className="ifc-reveal",q.innerHTML=kR,q.setAttribute("aria-label",n.t("ui.reveal")),q.title=n.t("ui.reveal"),q.addEventListener("click",T=>{T.stopPropagation(),re(),Ne(he.globalId)}),Ge.append(ot,q),x.append(Ge),Ee(n.t("ui.type"),he.type||"");let xe=h_(n.index,he.globalId);xe.storey&&Ee(n.t("ui.storey"),xe.storey.name||xe.storey.id),xe.space&&Ee(n.t("ui.space"),xe.space.name||xe.space.id);let ve=m_(he);ve.length&&Ye(n.t("ui.dimensions"),ve);let Re=f_(he);Re.length&&Ye(n.t("ui.note"),Re);let P=n.liveLines?.(he)||[];P.length&&Ye(n.t("home.live"),P)}if(ze.length){let Ge=document.createElement("div");Ge.className="ifc-actions";for(let ot of ze){let ne=document.createElement("button");ne.type="button",ne.className="ifc-action",ne.textContent=ot.label||n.t(ot.labelKey),ne.addEventListener("click",Ue=>{Ue.stopPropagation(),ot.run(),n.onVisibility()}),Ge.append(ne)}x.append(Ge)}H(x,He,Ke)}function Ee(he,Ae){let ze=document.createElement("div");ze.className="ifc-line";let He=document.createElement("div");He.className="ifc-kicker",He.textContent=he;let Ke=document.createElement("div");Ke.className="ifc-value",Ke.textContent=Ae,ze.append(He,Ke),x.append(ze)}function Ye(he,Ae){let ze=document.createElement("div");ze.className="ifc-line";let He=document.createElement("div");He.className="ifc-kicker",He.textContent=he;let Ke=document.createElement("div");Ke.className="ifc-note",Ke.textContent=Ae.join(`
`),ze.append(He,Ke),x.append(ze)}function Ne(he){if(n.index.elements[he]){for(let Ae of kp(n.index,he))p.add(Ae);b=he,S=he,n.openSheet(),w(),D(),requestAnimationFrame(()=>z(he))}}e.addEventListener("scroll",()=>{o.hidden||k()},{passive:!0});let qe=he=>he instanceof Node?!(!x.hidden&&x.contains(he)||!m.hidden&&m.contains(he)):!0;return document.addEventListener("pointerup",()=>{m.hidden||(j=!0)},!0),document.addEventListener("pointerdown",he=>{let Ae=he.target;!x.hidden&&qe(Ae)&&re(),!m.hidden&&j&&qe(Ae)&&me()},!0),{open:y,refresh:D,closePopover:re,openPopover:J,reveal:Ne,isInspectorOpen:()=>!o.hidden}}function x_(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let r of Bs(n,i))e.add(r)},unhide(i){for(let r of Bs(n,i))e.delete(r)},hideOthers(i){let r=new Set(Bs(n,i));for(let s of t())r.has(s)||e.add(s)},unhideOthers(i){let r=new Set(Bs(n,i));for(let s of t())r.has(s)||e.delete(s)},showAll(){e.clear()}}}var Xp=.3,b_=1.5,zR=.5,Hp=new Ze,HR=new I,bh=new I,Vp=new I,xh=new I,yh=new I,Zo=new I,_h=new I,Gp=new Zt,y_=new Zt,vh=new Zt,__=new Zt,Wp=new jr,VR=new I(0,1,0),v_=new ti;function GR(n,e,t=Xp,i=b_){let r=Number.isFinite(e)&&e>0?e:0,s=Number.isFinite(n)&&n>0?n:null;return s!=null&&s>=t?s:s!=null?Math.max(i,t):r>=t?r:Math.max(i,t)}function WR(n,e,t=Xp,i=b_){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function XR(n,e,t=Xp,i=zR){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function qR(n,e,t,i=1){let r=2*Math.PI*i/Math.max(1,t);return{theta:-n*r,phi:-e*r}}function $R(n,e,t,i,r){if(!i&&!r||(yh.copy(n.position).sub(t),yh.lengthSq()<1e-12))return!1;Zo.copy(n.up),Zo.lengthSq()<1e-12?Zo.set(0,1,0):Zo.normalize(),__.setFromUnitVectors(Zo,VR),xh.copy(yh).applyQuaternion(__),Wp.setFromVector3(xh);let s=1e-6;return r=Math.min(Math.PI-s,Math.max(s,Wp.phi+r))-Wp.phi,Gp.setFromAxisAngle(Zo,i),_h.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(Gp),_h.lengthSq()<1e-12?!1:(_h.normalize(),y_.setFromAxisAngle(_h,r),vh.copy(y_).multiply(Gp),xh.copy(yh).applyQuaternion(vh),n.position.copy(t).add(xh),e.sub(t).applyQuaternion(vh).add(t),n.quaternion.premultiply(vh),!0)}function YR(n,e,t){return!(t>0)||(n.getWorldDirection(bh),Vp.copy(n.position).addScaledVector(bh,t),Vp.distanceToSquared(e)<1e-12)?!1:(e.copy(Vp),!0)}function ZR(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let r of i){let s=r&&r.clippingPlanes;if(s){for(let o of s)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function KR(n,e,t,i,r){if(!e||!t||e.isOrthographicCamera)return null;let s=n.getBoundingClientRect(),o=s.width||n.clientWidth||1,a=s.height||n.clientHeight||1;Hp.x=(i-s.left)/o*2-1,Hp.y=-((r-s.top)/a)*2+1,t.updateWorldMatrix(!0,!0),v_.setFromCamera(Hp,e);let l=v_.intersectObject(t,!0);e.getWorldDirection(bh);for(let c of l){let u=c.object;if(!u.visible||Us(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!ZR(u,c.point))continue;let f=c.distance;if(!(f>1e-4))continue;let d=HR.copy(c.point).sub(e.position).dot(bh);if(d>1e-4)return{point:c.point.clone(),slant:f,depth:d}}return null}function jR(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),r=new Map,s=null;function o(){return t.enabled!==!1&&!i()}function a(){let v=n.getCamera();return!!(v&&v.isPerspectiveCamera)}function l(v,M){return KR(e,n.getCamera(),n.getRoot(),v,M)}function c(v){let M=n.getCamera();!M||!a()||v==null||YR(M,t.target,v)}function u(v,M){let w=n.getCamera();if(!w||!a())return;let y=l(v,M),E=w.position.distanceTo(t.target);c(GR(y?y.slant:null,E))}function h(v,M){let w=n.getCamera();if(!w||!a())return;let y=l(v,M),E=w.position.distanceTo(t.target);c(WR(y?y.depth:null,E))}function f(){s=null,t.enableRotate=!0}function d(v){if(r.set(v.pointerId,{x:v.clientX,y:v.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(r.size>=2){f(),t.zoomToCursor=!0;let D=g(v);u(D.x,D.y);return}let M=v.pointerType==="touch",w=v.button??0;if(!M&&w===2){f(),h(v.clientX,v.clientY);return}if(!M&&w===1){f(),u(v.clientX,v.clientY);return}if(!M&&w!==0)return;if(!M&&(v.shiftKey||v.ctrlKey||v.metaKey)){f(),h(v.clientX,v.clientY);return}let y=n.getCamera(),E=l(v.clientX,v.clientY),L=y?y.position.distanceTo(t.target):0;if(!E||!XR(E.slant,L)){f();return}t.enableRotate=!1,s={id:v.pointerId,x:v.clientX,y:v.clientY,lastX:v.clientX,lastY:v.clientY,point:E.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function g(v){let M=v.clientX,w=v.clientY,y=1;for(let[E,L]of r)E!==v.pointerId&&(M+=L.x,w+=L.y,y+=1);return{x:M/y,y:w/y}}function x(v){let M=r.get(v.pointerId);if(M&&(M.x=v.clientX,M.y=v.clientY),!s||v.pointerId!==s.id||r.size!==1||!o())return;let w=n.getCamera();if(!w)return;let y=v.clientX-s.lastX,E=v.clientY-s.lastY;if(!s.dragging){if(Math.hypot(v.clientX-s.x,v.clientY-s.y)<=dh)return;s.dragging=!0}if(!y&&!E)return;let L=qR(y,E,e.clientHeight||1,t.rotateSpeed);$R(w,t.target,s.point,L.theta,L.phi),w.lookAt(t.target),s.lastX=v.clientX,s.lastY=v.clientY}function m(v){r.delete(v.pointerId),s&&s.id===v.pointerId&&f(),r.size<2&&(t.zoomToCursor=!1),r.size===0&&(t.enableRotate=!0)}function p(v){m(v)}function b(v){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||s&&s.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(v.clientX,v.clientY)}function S(){r.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:m,onPointerCancel:p,onWheel:b,onWheelDone:S}}function M_(n){let e=jR(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var Ko=class extends Ii{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let r=0;r<t;r++)i[6*r]=e[r].x,i[6*r+1]=e[r].y,i[6*r+2]=e[r].z||0,i[6*r+3]=e[r+1].x,i[6*r+4]=e[r+1].y,i[6*r+5]=e[r+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Mh=class extends rs{constructor(e=new Ko,t=new Zi({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var JR='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',QR=420,eC=36,tC=new I,S_=new I,w_=new I,qp=new I,ks=new I,ls=new I;function Zp(n){return new I(n[0]*.001,n[2]*.001,-n[1]*.001)}function $p(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function E_(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function nC(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function Sh(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function iC(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/QR,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function rC(n,e){if(e==="plate")return eC;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function jo(n,e,t,i="center",r=null,s=1){let o=Number.isFinite(s)&&s>0?s:1,a=Math.max(8,Math.round(t*o)),l=n.map(y=>String(y)).filter(y=>y.length),c=document.createElement("canvas"),u=c.getContext("2d"),h=`600 ${a}px ${JR}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),g=Math.ceil(a*1.25);u&&(u.font=h);let x=a;if(u)for(let y of l)x=Math.max(x,u.measureText(y).width);let m=Math.ceil(x+f*2),p=Math.ceil(Math.max(l.length,1)*g+d*2),b=2;c.width=m*b,c.height=p*b;let S=c.getContext("2d");if(S){S.scale(b,b),S.clearRect(0,0,m,p);let y=e==="plate";S.font=h,S.textAlign="left",S.textBaseline="middle",S.lineJoin="round",S.miterLimit=2,S.lineWidth=Math.max(2,a*.28),S.strokeStyle=y?"#ffffff":"rgba(0,0,0,0.92)",S.fillStyle=r||(y?"#141414":"#f7f7f8"),l.forEach((E,L)=>{let D=f,F=d+g*L+g*.5;S.strokeText(E,D,F),S.fillText(E,D,F)})}let v=new Sr(c);v.colorSpace=Tt,v.flipY=!0,v.needsUpdate=!0;let M=new an({map:v,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Dt}),w=new pt(new hi(1,1),M);return w.renderOrder=30,w.frustumCulled=!1,w.userData.cssWidth=m,w.userData.cssHeight=p,w.userData.anchor=i,w.userData.fill=r,w.userData.fontScale=o,w}function Yp(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function ir(n,e=!1){let t=new Ko;t.setPositions([0,0,0,0,0,0]);let i=new Zi({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let r=new Mh(t,i);return r.renderOrder=25,r.frustumCulled=!1,r.computeLineDistances(),r}function Or(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function T_(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:r,getVisibleWidthM:s,getTarget:o}=n,a=n.getExaggeration||(()=>1),l=new Et;l.name="Annotations",l.userData.blueprintAnnotations=!0,e.add(l);let c=null,u="viewer",h=!0,f=0,d=[],g=null,x=null,m=null;function p(){return u==="plate"?1315860:15921908}function b(z){return z&&z.color!=null?$p(z.color,p()):c&&c.annotationColor!=null?$p(c.annotationColor,p()):p()}function S(z){return Yp(b(z))}function v(z){let j=Number(z&&z.size);return Number.isFinite(j)&&j>0?j:1}function M(z){z.traverse(j=>{j.geometry&&j.geometry.dispose();let Se=j.material;Se&&(Se.map&&Se.map.dispose(),Se.dispose())})}function w(){for(let z of[...l.children])l.remove(z),M(z);d=[],g=null,x=null,m=null}function y(){return rC(i(),u)}function E(){l.visible=!!c&&h}function L(){if(w(),f=y(),!c){E();return}let z=r(),j=p(),Se=f,Ie=Array.isArray(c.annotations)?c.annotations:[];for(let H of Ie)if(!(!H||typeof H!="object")){if(H.kind==="callout"&&Array.isArray(H.anchor)){let J=Sh(H.text,z);if(!J)continue;let Ee=jo(J.split(`
`),u,Se,"center",S(H),v(H)),Ye=(H.leader===!1?[]:E_(H)).map(()=>ir(b(H)));l.add(...Ye,Ee),d.push({kind:"callout",sprite:Ee,lines:Ye,data:H})}else if(H.kind==="dim"&&Array.isArray(H.a)&&Array.isArray(H.b)){let J=b(H),Ee=jo(["0"],u,Se,"center",Yp(J),v(H)),Ye=ir(J),Ne=ir(J),qe=ir(J),he=ir(J),Ae=ir(J);l.add(Ye,Ne,qe,he,Ae,Ee),d.push({kind:"dim",sprite:Ee,lines:[Ye,Ne,qe,he,Ae],data:H})}else if(H.kind==="line"&&Array.isArray(H.points)&&H.points.length>=2){let J=$p(H.color,p()),Ye=[ir(J,!!H.dashed)];H.arrow&&Ye.push(ir(J,!1),ir(J,!1));let Ne=null,qe=Sh(H.text,z);qe&&(Ne=jo(qe.split(`
`),u,Se,"center",Yp(J),v(H))),l.add(...Ye),Ne&&l.add(Ne),d.push({kind:"line",sprite:Ne,lines:Ye,data:H})}}let K=Sh(c.title,z),me=c.project?String(c.project):"",re=[...K.split(`
`),me].filter(Boolean);re.length&&(g=jo(re,u,Se,"topleft"),l.add(g)),x=jo(["1:1"],u,Se,"bottomleft"),m=ir(j),l.add(m,x),E()}function D(z){let j=Zp(z),Se=a();return Se!==1&&(j.y*=Se),j}function F(z,j=tC){return j.copy(z).project(t())}function G(z,j,Se,Ie=new I){return Ie.set(z,j,Se).unproject(t())}function k(z){let j=t(),Se=i(),Ie=Math.max(1,Se.clientHeight);if(j.isOrthographicCamera){let re=Math.max(j.zoom,1e-6);return(j.top-j.bottom)/re/Ie}let K=Math.max(j.position.distanceTo(z),1e-4),me=(j.fov||45)*Math.PI/180;return 2*Math.tan(me/2)*K/Ie}let N=new I,W=new I;function Q(z,j){let Se=t(),Ie=k(j),K=Ie*z.userData.cssWidth,me=Ie*z.userData.cssHeight;N.set(1,0,0).applyQuaternion(Se.quaternion),W.set(0,1,0).applyQuaternion(Se.quaternion);let re=z.userData.anchor||"center";z.position.copy(j),re==="topleft"?(z.position.addScaledVector(N,K*.5),z.position.addScaledVector(W,-me*.5)):re==="bottomleft"&&(z.position.addScaledVector(N,K*.5),z.position.addScaledVector(W,me*.5)),z.quaternion.copy(Se.quaternion),z.scale.set(K,me,1)}function $(){let z=i(),j=Math.max(1,z.width),Se=Math.max(1,z.height);l.traverse(Ie=>{let K=Ie.material;K&&K.resolution&&K.resolution.set(j,Se)})}function ye(z,j){let Se=jo(j,u,f||y(),z.userData.anchor,z.userData.fill,z.userData.fontScale||1);z.material.map?.dispose(),z.material.dispose(),z.material=Se.material,z.userData.cssWidth=Se.userData.cssWidth,z.userData.cssHeight=Se.userData.cssHeight,Se.geometry.dispose()}function ee(){if(!c||!h||(y()!==f&&L(),!l.visible))return;$();let j=r();t().updateMatrixWorld();for(let re of d)if(re.kind==="callout"){let H=D(re.data.anchor),J=F(H,S_),Ee=Array.isArray(re.data.offset)?re.data.offset:[.08,.06],Ye=J.x+Number(Ee[0]||0)*2,Ne=J.y+Number(Ee[1]||0)*2,qe=G(Ye,Ne,J.z,w_);Q(re.sprite,qe);let he=k(qe),Ae=he*re.sprite.userData.cssWidth*.5,ze=E_(re.data);for(let He=0;He<re.lines.length;He+=1){let Ke=D(ze[He]||re.data.anchor);ks.copy(qe).sub(Ke);let Ge=ks.length();Ge>Ae+he?(ks.setLength(Ge-Ae),ks.add(Ke)):ks.copy(qe),Or(re.lines[He],Ke,ks)}}else if(re.kind==="dim"){let H=D(re.data.a),J=D(re.data.b),Ee=F(H,S_),Ye=F(J,w_),Ne=Ye.x-Ee.x,qe=Ye.y-Ee.y,he=Math.hypot(Ne,qe)||1e-6;Ne/=he,qe/=he;let Ae=Number(re.data.offset)||.04,ze=-qe*Ae*2,He=Ne*Ae*2,Ke=(Ee.z+Ye.z)*.5,Ge=G(Ee.x+ze,Ee.y+He,Ke,new I),ot=G(Ye.x+ze,Ye.y+He,Ke,new I),ne=k(Ge),Ue=ne*6,je=ne*8;ls.copy(Ge).sub(H);let ge=ls.length()||1;ls.multiplyScalar((ge+je)/ge);let A=H.clone().add(ls);ls.copy(ot).sub(J);let te=ls.length()||1;ls.multiplyScalar((te+je)/te);let Y=J.clone().add(ls),Te=H.clone().lerp(Ge,Math.min(.85,Ue/ge)),q=J.clone().lerp(ot,Math.min(.85,Ue/te));Or(re.lines[0],Te,A),Or(re.lines[1],q,Y),Or(re.lines[2],Ge,ot);let xe=ne*10,Re=G(Ee.x+ze-qe*.012,Ee.y+He+Ne*.012,Ke,new I).sub(Ge);Re.lengthSq()<1e-16?Re.set(0,xe,0):Re.setLength(xe),Or(re.lines[3],Ge.clone().sub(Re),Ge.clone().add(Re)),Or(re.lines[4],ot.clone().sub(Re),ot.clone().add(Re)),qp.copy(Ge).lerp(ot,.5);let P=G(Ee.x+ze-qe*.03,Ee.y+He+Ne*.03,Ke,new I).sub(G(Ee.x+ze,Ee.y+He,Ke,new I));P.lengthSq()>1e-12&&qp.add(P);let X=Sh(re.data.text,j)||nC(H.distanceTo(J));re.sprite.userData.labelText!==X&&(ye(re.sprite,[X]),re.sprite.userData.labelText=X),Q(re.sprite,qp)}else if(re.kind==="line"){let H=re.data.points.map(Ee=>D(Ee)),J=[];for(let Ee of H)J.push(Ee.x,Ee.y,Ee.z);if(re.lines[0].geometry.setPositions(J),re.lines[0].computeLineDistances(),re.data.arrow&&H.length>=2&&re.lines.length>=3){let Ee=H[H.length-2],Ye=H[H.length-1],Ne=Ye.clone().sub(Ee);if(Ne.lengthSq()>1e-12){Ne.normalize();let qe=k(Ye),he=Ne.clone().multiplyScalar(-qe*16),Ae=new I().crossVectors(Ne,t().up).normalize().multiplyScalar(qe*7);Ae.lengthSq()<1e-16&&Ae.set(qe*7,0,0),Or(re.lines[1],Ye,Ye.clone().add(he).add(Ae)),Or(re.lines[2],Ye,Ye.clone().add(he).sub(Ae))}}if(re.sprite){let Ee=H[0].clone().lerp(H[H.length-1],.5);Q(re.sprite,Ee)}}let Ie=F(o(),ks).z;if(g){let re=G(-.94,.9,Ie,new I);Q(g,re)}let K=s(),me=iC(K??NaN);if(x&&m){let re=K!=null&&K>8?2:1,H=G(-.9,-.86,Ie,new I),J=G(-.9+.08,-.86,Ie,new I).sub(H),Ee=k(H),Ye=K&&K>0?re/K*Math.max(1,i().clientWidth):80;J.lengthSq()>1e-12?J.setLength(Math.max(Ye*Ee,Ee*40)):J.set(Ee*80,0,0),Or(m,H,H.clone().add(J));let Ne=x.userData.labelText,qe=me?`${me}  \xB7  ${Math.round(re*1e3)} mm`:"";Ne!==qe&&(ye(x,qe?[qe]:["\u2014"]),x.userData.labelText=qe);let he=G(-.9,-.8,Ie,new I).sub(H);Q(x,H.clone().add(he))}}return{group:l,setSpec(z){c=z&&typeof z=="object"?z:null,L(),ee()},setInk(z){u=z==="plate"?"plate":"viewer",L(),ee()},setVisible(z){h=!!z,E(),l.visible&&ee()},isVisible(){return h},relocalize(){L(),ee()},glyphBoundsNdc(){let z=i(),j=Math.max(1,z.clientWidth),Se=Math.max(1,z.clientHeight),Ie=1/0,K=-1/0,me=1/0,re=-1/0,H=!1;for(let J of d){let Ee=J.sprite;if(!Ee||Ee===g||Ee===x||J.kind!=="callout"&&J.kind!=="dim"&&J.kind!=="line")continue;let Ye=F(Ee.position),Ne=(Ee.userData.cssWidth||0)/j,qe=(Ee.userData.cssHeight||0)/Se;Ie=Math.min(Ie,Ye.x-Ne),K=Math.max(K,Ye.x+Ne),me=Math.min(me,Ye.y-qe),re=Math.max(re,Ye.y+qe),H=!0}return H?{minX:Ie,maxX:K,minY:me,maxY:re}:null},update:ee,clear(){c=null,w(),l.visible=!1}}}function A_(n){return n/25.4*72}function Kp(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function sC(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,r)=>{e.toBlob(s=>{s?i(s):r(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function oC(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function aC(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Ml(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function lC(n){let e=n.width,t=n.height,i=n.data,r=new Uint8Array(e*t*3);for(let v=0,M=0;v<i.length;v+=4,M+=3){let w=i[v+3]/255;r[M]=Math.round(i[v]*w+255*(1-w)),r[M+1]=Math.round(i[v+1]*w+255*(1-w)),r[M+2]=Math.round(i[v+2]*w+255*(1-w))}let{bytes:s,filter:o}=await aC(r),a=A_(420),l=A_(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),h=[],f=0;function d(v){h.push(v),f+=v.length}let g=[0];function x(v,M){g[v]=f,d(Ml(`${v} 0 obj
`));for(let w of M)d(Ml(w));d(Ml(`
endobj
`))}d(Ml(`%PDF-1.4
`)),x(1,["<< /Type /Catalog /Pages 2 0 R >>"]),x(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),x(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${l.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),x(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),x(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${s.length} >>
stream
`,s,`
endstream`]);let m=f,p=`xref
0 6
0000000000 65535 f 
`;for(let v=1;v<=5;v++)p+=`${String(g[v]).padStart(10,"0")} 00000 n 
`;p+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${m}
%%EOF
`,d(Ml(p));let b=new Uint8Array(f),S=0;for(let v of h)b.set(v,S),S+=v.length;return new Blob([b],{type:"application/pdf"})}async function R_(n){let e=await sC(n),t=await oC(e),i=await lC(t);return{png:e,pdf:i}}var jp="scene";function fC(){try{return(new URLSearchParams(location.search).get(jp)||"").trim()}catch{return""}}function P_(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set(jp,t):e.searchParams.delete(jp);let i=`${e.pathname}${e.search}${e.hash}`,r=`${location.pathname}${location.search}${location.hash}`;i!==r&&history.replaceState(null,"",i)}catch{}}function dC(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],r=Array.isArray(t.partGroups)?t.partGroups:[],s=Array.isArray(t.doors)?t.doors:[],o=Array.isArray(t.windows)?t.windows:[],a=l_(t.ifc),l=new Map,c=()=>{},u=String(t.scene!=null?t.scene:fC()).trim();my(),Ap(document);let h=[],f=null,d=1842206,g=!0,x=$x(),m=Ex(),p=new Map,b=new Map,S=new Map,v=new Map,M=new Set,w=new Map,y=new Map,E=new Map,L=new Set,D=null;D=hy(_=>{g=_,d=_?1842206:15263981,f&&(f.background=new Je(d)),document.documentElement.style.colorScheme=_?"dark":"light",p.size&&R()});let F=new Nu({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});F.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),F.outputColorSpace=Tt,F.toneMapping=Do,F.toneMappingExposure=1.05,F.localClippingEnabled=!0;let G=kx(F);f=new Gn,f.background=new Je(d);let k=1,N=new Et;N.name="VerticalExaggeration",f.add(N);function W(_){let C=Number(_);k=Number.isFinite(C)&&C>0?C:1,N.scale.set(1,k,1)}let Q=30,$=120,ye=75,ee=125,z="perspective",j=ye,Se=ye,Ie=1,K=!1,me=new un(45,1,.01,1e6),re=new Ai(-1,1,1,-1,.01,1e6),H=me,J=new Hu(H,n);J.enableDamping=!1,J.screenSpacePanning=!0;let Ee=()=>!1,Ye=qy({canvas:n,getCamera:()=>H,records:s,isBlocked:()=>Ee(),onLongPress:_=>c(_),onToggle:(_,C)=>nv(_,C)}),Ne=Jy({canvas:n,getCamera:()=>H});window.blueprintsFeedback=Ne;let qe=new Map,he=new Map,Ae=Zy(o),ze={on:!0,level:1,color:Up(3e3)},He={on:!1,level:1,color:mh},Ke=new Map,Ge=null,ot=_=>_&&Ge?Ge.device(_.globalId):void 0;Qy(Ye.taps,{elementOf:_=>Il(_),isOn:_=>!!qe.get(_.globalId),isOpen:_=>{let C=ot(_);if(C?.deviceType==="WindowCovering"){let O=C.state?.windowCovering?.targetPositionLiftPercent100ths;return O!=null&&O<5e3}return!!he.get(_.globalId)},isLive:_=>!!ot(_),onLight:_=>j_(_),onSwitch:(_,C)=>sv(_,C),switchActions:_=>ov(_),onCover:_=>av(_),coverActions:_=>lv(_),onWindow:_=>cv(_),windowAccepts:(_,C)=>rv(_,C?.object),targetsFor:(_,C)=>ev(_,C)});let ne=T_({scene:f,getCamera:()=>H,getCanvas:()=>n,getLocale:oh,getVisibleWidthM:()=>{if(!H.isOrthographicCamera)return null;let _=Math.max(H.zoom,1e-6);return(H.right-H.left)/_},getTarget:()=>J.target,getExaggeration:()=>k}),Ue=null,je=null;f.add(new ka(16777215,.45));let ge=new Zr(16777215,1.15);ge.position.set(.6,1,.4),f.add(ge);let A=new Zr(16777215,.4);A.position.set(-.5,.2,-.6),f.add(A);let te=new ko(F);f.environment=te.fromScene(new Vu,.04).texture,te.dispose();let Y=null;M_({canvas:n,controls:J,getCamera:()=>H,getRoot:()=>Y,isBlocked:()=>Ee()||J.enabled===!1});let Te=new Lt,q=new I,xe=new I,ve=new I,Re=new I,P=new I,T=[],X=1,_e=!1,de=!1,ue=!1;new Fu().parse(e,"",_=>{Y=_.scene,N.add(Y),Ye.bind(Y),Y.traverse(O=>{if(!O.isMesh)return;let U=By(O);O.userData.bpPart=U.part,O.userData.bpElementKey=U.element,U.element&&(l.has(U.element)||l.set(U.element,[]),l.get(U.element).push(O));let oe=U.part;if(p.has(oe)||p.set(oe,[]),p.get(oe).push(O),O.material){let Me=Array.isArray(O.material)?O.material:[O.material];for(let we of Me)"side"in we&&(we.side=Dt)}}),zs(),V(),ce(),et(),Dh();let C=ut(u);C&&(ke=`scene:${String(C.id).trim()}`),Ot(),Jo(),vt(),bn(),R(),C&&Fr(C),mt(),D?.refreshPartialHeight(),O_(),U_(),Ws(),Xs()},_=>{ae(String(_?.message||_))});function ae(_){let C=document.getElementById("err");C&&(C.style.display="block",C.textContent=_)}function le(){Y&&(Te.setFromObject(Y),Te.getSize(q),Te.getCenter(xe))}function Ce(){let _=Math.max(1,n.clientWidth),C=Math.max(1,n.clientHeight);return _/C}function B(_,C){let O=_*Math.PI/180;return 2*Math.atan(Math.tan(O/2)/Math.max(C,1e-6))}function pe(){let _=Ce();me.aspect=_,me.fov=B(j,_)*180/Math.PI,me.updateProjectionMatrix()}function fe(_,C){let O=Ce(),U=Math.max(_,1e-6)*Math.tan(C/2),oe=U*O;re.left=-oe,re.right=oe,re.top=U,re.bottom=-U,re.updateProjectionMatrix()}function Fe(){let _=Ce(),O=Math.max(re.top,1e-6)*_;re.left=-O,re.right=O,re.updateProjectionMatrix()}function Le(_,C){let O=Ce(),U=Math.max(_,1e-6),Me=Math.max(C,1e-6),we=Me*O;we<U&&(we=U,Me=we/Math.max(O,1e-6)),Ie=1,re.left=-we,re.right=we,re.top=Me,re.bottom=-Me,re.updateProjectionMatrix(),Z()}function Oe(_){let C=Math.max(_,1e-4),O=ve.copy(H.position).sub(J.target);O.lengthSq()<1e-12?O.set(0,0,1):O.normalize(),H.position.copy(J.target).addScaledVector(O,C)}function Be(_){_!==H&&(_.position.copy(H.position),_.quaternion.copy(H.quaternion),_.up.copy(H.up),_.near=H.near,_.far=H.far,H=_,J.object=H,J.update())}function st(){let _=Math.abs(cr)>.05||Math.abs(ur)>.05||Math.abs(_i-1)>.001?_i:1;return Ie*_}function Z(){H.zoom=st(),H.updateProjectionMatrix()}function De(){if(K||de||!H.isOrthographicCamera)return;let _=Math.abs(cr)>.05||Math.abs(ur)>.05||Math.abs(_i-1)>.001?_i:1;Ie=Math.max(H.zoom/Math.max(_,1e-6),1e-6)}function rt(){if(z==="ortho")return;Se=j;let _=H.position.distanceTo(J.target),C=B(j,Ce());fe(_,C),Ie=1,oi(()=>{K=!0,Be(re),z="ortho",Z(),K=!1}),si()}function Pe(_){if(z!=="ortho")return;let C=jt(_??Se),O=Math.max(re.top,1e-6)/Math.max(Ie,1e-6),U=B(C,Ce()),oe=O/Math.max(Math.tan(U/2),1e-8);j=C,Se=C,Ie=1,oi(()=>{K=!0,Be(me),z="perspective",pe(),Oe(oe),Z(),vn(),J.update(),K=!1}),si()}function dt(_,C={}){let O=jt(_);if(z==="ortho"){Pe(O);return}let U=Ce(),oe=B(j,U),Me=B(O,U),we=H.position.distanceTo(J.target);j=O,Se=O,oi(()=>{if(pe(),C.reframe!==!1){let $e=Math.tan(oe/2)/Math.max(Math.tan(Me/2),1e-8);Oe(we*$e),vn(),J.update()}Z()}),si()}function zt(){z==="ortho"?Pe(Se):rt()}function jt(_){return Math.min($,Math.max(Q,_))}function rr(){return z==="ortho"?ee:j}function sr(_){return _>$?"ISO":`${Math.round(_)}\xB0`}function si(){Ue&&(Ue.value=rr()),je&&(je.textContent=z==="ortho"?"ISO":`${Math.round(j)}\xB0`),Ue?.refresh()}function Ur(_){if(_>$){z!=="ortho"?rt():si();return}let C=jt(_);z==="ortho"?Pe(C):dt(C,{reframe:!0})}function Jo(){let _=document.getElementById("fov");if(!_)return;_.replaceChildren();let C=document.createElement("div");C.className="fov-row";let O=document.createElement("span");O.className="fov-label",O.textContent=Nt("ui.fov"),je=document.createElement("span"),je.className="fov-value",je.textContent=`${Math.round(j)}\xB0`,Ue=sh({min:Q,max:ee,step:1,value:rr(),ariaLabel:"Field of view",formatAriaValue:sr,onInput:we=>Ur(we),onChange:we=>Ur(we),onTap:()=>zt()}),Ue.el.classList.add("fov-range");let U=document.createElement("div");U.className="fov-detent",U.setAttribute("aria-hidden","true");let oe=($-Q)/(ee-Q);U.style.left=`${oe*100}%`,Ue.el.querySelector(".coop-range-track")?.append(U),C.append(O,Ue.el,je),_.append(C),si()}function vn(){let _=Math.max(q.x,q.y,q.z,.01),C=H.position.distanceTo(J.target),O=Math.round(Math.min(Math.max(C/200,_/5e3,.001),C/10)*1e4)/1e4,U=Math.round(Math.max(C+_*4,_*8,10)*1e4)/1e4;H.near===O&&H.far===U||(H.near=O,H.far=U,H.updateProjectionMatrix())}function oi(_){de=!0;try{_()}finally{requestAnimationFrame(()=>{de=!1})}}pe();function zs(){Y&&(oi(()=>{le(),J.target.copy(xe);let C=Math.max(q.x,q.y,q.z,1)*1.85;H.position.set(xe.x+C*.75,xe.y+C*.55,xe.z+C*.75),vn(),J.update()}),lr())}function Sl(){for(let _ of p.keys())b.set(_,1),S.set(_,1),Dr(p.get(_)||[],1,{edgeMode:m});le(),fs()}function cs(_){if(Y){if(We=null,ne.clear(),W(1),Sl(),Ws(),Xs(),me.up.set(0,1,0),re.up.set(0,1,0),H.up.set(0,1,0),_==="iso"){zs();return}oi(()=>{le();let C=Math.max(q.x,q.y,q.z,1),O=C*1.85,U=xe;_==="front"?H.position.set(U.x,U.y,U.z+O):_==="top"?H.position.set(U.x,U.y+O,U.z+C*.01):_==="side"&&H.position.set(U.x-O,U.y,U.z),J.target.copy(U),vn(),J.update()}),lr()}}function Fr(_){if(!Y||!_)return;We=_,W(_.verticalExaggeration);let C=k;if(_.opacityDefault!=null||_.opacity&&typeof _.opacity=="object"){let Me=_.opacityDefault!=null?Number(_.opacityDefault):1,we=_.opacity&&typeof _.opacity=="object"?_.opacity:{},$e=Gx(we,h);for(let at of p.keys()){let St=Object.prototype.hasOwnProperty.call($e,at)?$e[at]:Me;Hs(at,St,{skipUi:!0,skipClip:!0})}le(),fs()}if(Object.prototype.hasOwnProperty.call(_,"cuts")){let Me=Array.isArray(_.cuts)?_.cuts:[];T.length=0;for(let we of Me){let $e=we?.normal;if(!Array.isArray($e)||$e.length<3)continue;let at=new I(Number($e[0])||0,Number($e[1])||0,Number($e[2])||0);if(at.lengthSq()<1e-12)continue;at.normalize();let St=null,Qt=Math.min(1,Math.max(0,Number(we.t)||0));if(Array.isArray(we.anchor)&&we.anchor.length>=3){St=Zp(we.anchor),St.y*=C;let{near:zn,far:Xt}=nn(at),Ft=St.dot(at);Qt=Math.min(1,Math.max(0,(Ft-zn)/Math.max(Xt-zn,1e-6)))}T.push({id:X++,normal:at,t:Qt,anchor:St,locked:!0,label:ln(at)})}_e=!1,qt(),vt(),bn(),D?.refreshPartialHeight()}_.projection==="ortho"?z!=="ortho"?rt():si():_.hFovDeg!=null&&Number.isFinite(Number(_.hFovDeg))&&dt(Number(_.hFovDeg),{reframe:!1});let U=_.camera;U&&Array.isArray(U.target)&&Array.isArray(U.position)&&oi(()=>{K=!0;let Me=new I(0,1,0);Array.isArray(U.up)&&U.up.length>=3&&(Me.set(Number(U.up[0])||0,Number(U.up[1])||0,Number(U.up[2])||0),Me.lengthSq()<1e-12?Me.set(0,1,0):Me.normalize()),me.up.copy(Me),re.up.copy(Me),H.up.copy(Me),J.target.set(Number(U.target[0])||0,(Number(U.target[1])||0)*C,Number(U.target[2])||0),H.position.set(Number(U.position[0])||0,(Number(U.position[1])||0)*C,Number(U.position[2])||0),H.lookAt(J.target),z==="ortho"&&Array.isArray(U.orthoFit)&&U.orthoFit.length>=2&&Le(Number(U.orthoFit[0])||.1,(Number(U.orthoFit[1])||.1)*C),le(),vn(),J.update(),K=!1}),lr();let oe=_.edges;(oe==="none"||oe==="transparent"||oe==="opaque")&&(m=oe,or()),ne.setSpec(_),Ws(),Xs()}function Hs(_,C,O={}){let U=Math.max(0,Math.min(1,Number(C)||0));b.set(_,U),U>0&&S.set(_,U),O.detach&&M.add(_),Dr(p.get(_)||[],U,{edgeMode:m}),!O.skipClip&&(le(),O.skipUi||fs())}function us(_,C,O){let U=Math.max(0,Math.min(1,Number(C)||0));O&&v.set(O,U);for(let oe of _)M.has(oe)||(b.set(oe,U),U>0&&S.set(oe,U),Dr(p.get(oe)||[],U,{edgeMode:m}));le(),fs()}function wh(_,C,O){M.delete(_);let U=O.filter(Me=>!M.has(Me)),oe=hs(C,U);b.set(_,oe),oe>0&&S.set(_,oe),Dr(p.get(_)||[],oe,{edgeMode:m}),le(),fs()}function wl(_){if(!_.length)return 1;let C=b.get(_[0])??1;for(let O=1;O<_.length;O++){let U=b.get(_[O])??1;if(Math.abs(U-C)>1e-4)return NaN}return C}function hs(_,C){let O=C.filter(oe=>!M.has(oe)),U=wl(O.length?O:C);return Number.isNaN(U)?v.get(_)??1:U}function fs(){for(let[_,C]of w)C.value=(b.get(_)??1)*100;for(let[_,C]of y){let O=(C.el.dataset.leaves||"").split(",").map(U=>U.trim()).filter(Boolean);C.value=hs(_,O)*100}for(let[_,C]of E){let O=M.has(_);C.hidden=!O,C.setAttribute("aria-hidden",O?"false":"true")}}function ds(){return T.filter(_=>_.locked).map(_=>qn(_))}function El(){let _=new Ze;return F.getDrawingBufferSize(_),{x:_.x,y:_.y}}function or(){if(p.size){if(m===Ds){Ix(Y);return}Dx(p,!0,{clippingPlanes:ds(),resolution:El(),edgeMode:m})}}function R(){p.size&&(Xx(p,x,{isDark:g,clippingPlanes:ds(),opacityByLabel:b,edgeMode:m}),x===ml?(F.toneMapping=Do,F.toneMappingExposure=1.05):(F.toneMapping=di,F.toneMappingExposure=1),or(),Mp(p,ds()),K_())}function V(){let _=document.getElementById("mats");if(_){_.replaceChildren();for(let[C,O]of[[th,"ui.solid"],[ml,"ui.realistic"]]){let U=document.createElement("button");U.type="button",U.dataset.mode=C,U.textContent=Nt(O),C===x&&U.classList.add("is-active"),U.addEventListener("click",()=>{x=C,Yx(C),_.querySelectorAll("button").forEach(oe=>{oe.classList.toggle("is-active",oe.dataset.mode===C)}),R()}),_.append(U)}}}function ce(){let _=document.getElementById("edges");if(_){_.replaceChildren();for(let[C,O]of[[Ds,"ui.edgesNone"],[Ns,"ui.edgesTransparent"],[dl,"ui.edgesOpaque"]]){let U=document.createElement("button");U.type="button",U.dataset.edgeMode=C,U.textContent=Nt(O),C===m&&U.classList.add("is-active"),U.addEventListener("click",()=>{m=C,hp(C),_.querySelectorAll("button").forEach(oe=>{oe.classList.toggle("is-active",oe.dataset.edgeMode===C)}),or(),lm()}),_.append(U)}}}function ie(_,C,O,U){let oe=document.createElement("div");oe.className="part-opacity-wrap";let Me,we=()=>{if(Me.value/100>0)U(0);else{let at=O();U(at>0?at:1)}};return Me=sh({min:0,max:100,step:1,value:Math.round(C),ariaLabel:_,formatAriaValue:$e=>`${Math.round($e)}%`,thumbScrubOnly:!0,onInput:$e=>U($e/100),onChange:$e=>U($e/100),onTap:we}),Me.el.classList.add("part-opacity"),oe.append(Me.el),{wrap:oe,range:Me}}function se(){let _=document.getElementById("parts");if(!_)return;_.style.removeProperty("--part-name-col");let C=0;for(let O of _.querySelectorAll(".part-name")){if(O.closest(".part-children")?.hidden)continue;let oe=O.style.width;O.style.width="max-content",C=Math.max(C,Math.ceil(O.getBoundingClientRect().width)),O.style.width=oe}C>0&&_.style.setProperty("--part-name-col",`${C}px`)}function Ve(_,C,O,U=null){if(_.type==="leaf"){let Ct=document.createElement("div");Ct.className="part-row part-leaf",Ct.style.setProperty("--part-depth",String(O)),Ct.dataset.leaf=_.id;let Ul=document.createElement("span");Ul.className="part-disclosure-spacer",Ul.setAttribute("aria-hidden","true");let Fl=document.createElement("span");Fl.className="part-name",Fl.textContent=_.label;let{wrap:vm,range:bm}=ie(`${_.label} opacity`,(b.get(_.id)??1)*100,()=>S.get(_.id)??1,Bl=>Hs(_.id,Bl,{detach:!!U}));bm.el.dataset.leaf=_.id,w.set(_.id,bm);let bi=null;if(U){bi=document.createElement("button"),bi.type="button",bi.className="part-sync",bi.textContent=Nt("ui.sync"),bi.setAttribute("aria-label",`${Nt("ui.sync")} ${_.label}`);let Bl=M.has(_.id);bi.hidden=!Bl,bi.setAttribute("aria-hidden",Bl?"false":"true"),bi.addEventListener("click",xv=>{xv.stopPropagation(),wh(_.id,U.groupId,U.leafIds)}),E.set(_.id,bi)}bi?Ct.append(Ul,Fl,vm,bi):Ct.append(Ul,Fl,vm),C.append(Ct);return}let oe=nh(_),Me=document.createElement("div");Me.className="part-group",Me.dataset.group=_.id;let we=document.createElement("div");we.className="part-row part-group-row",we.style.setProperty("--part-depth",String(O)),we.setAttribute("role","button"),we.tabIndex=0;let $e=document.createElement("button");$e.type="button",$e.className="part-disclosure",$e.setAttribute("aria-label",`Expand ${_.label}`),$e.setAttribute("aria-expanded","false");let at=document.createElement("span");at.className="part-name",at.textContent=_.label;let St=hs(_.id,oe)||1;St<=0&&(St=1);let{wrap:Qt,range:zn}=ie(`${_.label} opacity`,hs(_.id,oe)*100,()=>St,Ct=>{Ct>0&&(St=Ct),us(oe,Ct,_.id)});zn.el.dataset.group=_.id,zn.el.dataset.leaves=oe.join(","),y.set(_.id,zn),Qt.addEventListener("click",Ct=>Ct.stopPropagation()),Qt.addEventListener("pointerdown",Ct=>Ct.stopPropagation());let Xt=document.createElement("div");Xt.className="part-children",Xt.hidden=!0;function Ft(Ct){Ct?L.add(_.id):L.delete(_.id),Xt.hidden=!Ct,Me.classList.toggle("is-expanded",Ct),$e.setAttribute("aria-expanded",Ct?"true":"false"),$e.setAttribute("aria-label",Ct?`Collapse ${_.label}`:`Expand ${_.label}`),requestAnimationFrame(()=>se())}function na(){Ft(!L.has(_.id))}$e.addEventListener("click",Ct=>{Ct.stopPropagation(),na()}),we.addEventListener("click",Ct=>{Qt.contains(Ct.target)||na()}),we.addEventListener("keydown",Ct=>{(Ct.key==="Enter"||Ct.key===" ")&&(Ct.preventDefault(),na())}),we.append($e,at,Qt),Me.append(we,Xt),C.append(Me);let Vh={groupId:_.id,leafIds:oe};for(let Ct of _.children)Ve(Ct,Xt,O+1,Vh);Ft(L.has(_.id))}function et(){let _=document.getElementById("parts");if(!_)return;_.replaceChildren(),w.clear(),y.clear(),E.clear();for(let O of p.keys())b.has(O)||(b.set(O,1),Dr(p.get(O)||[],1,{edgeMode:m})),S.has(O)||S.set(O,1);let C=Vx(p.keys(),r,Nt);h=C;for(let O of C)Ve(O,_,0,null);requestAnimationFrame(()=>se())}let ke="iso",We=null,nt=!1;function ut(_){let C=String(_||"").trim();if(!C)return null;for(let O of i)if(String(O?.id||"").trim()===C)return O;return null}function mt(){let _=ke;_&&_.startsWith("scene:")?P_(_.slice(6)):P_(null)}function tt(){return document.querySelectorAll("#cams button, #scenes button")}function _t(){ke!=null&&(ke=null,tt().forEach(_=>{_.classList.remove("is-active")}),mt())}function Jt(){let _=document.getElementById("scenes");if(!_){let C=document.getElementById("cams");_=document.createElement("div"),_.id="scenes",_.className="scene-list",C?.insertAdjacentElement("afterend",_)}return _}function Ot(){let _=document.getElementById("cams");if(!_)return;_.replaceChildren();let C=Jt();C.replaceChildren();function O(U,oe,Me,we){let $e=document.createElement("button");$e.type="button",$e.dataset.preset=oe,$e.textContent=Me,oe===ke&&$e.classList.add("is-active"),$e.addEventListener("click",()=>{ke=oe,tt().forEach(at=>{at.classList.toggle("is-active",at.dataset.preset===oe)}),we(),mt()}),U.append($e)}for(let[U,oe]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])O(_,U,Nt(oe),()=>cs(U));for(let U of i){let oe=String(U?.id||"").trim();if(!oe)continue;let Me=Nt(`scene.${oe}`);O(C,`scene:${oe}`,Me,()=>Fr(U))}C.hidden=C.childElementCount===0}function Ut(_=ve){return _.copy(J.target).sub(H.position).normalize()}function ln(_){let C=Math.hypot(_.x,_.z),O=(Math.atan2(_.x,_.z)*180/Math.PI+360)%360,U=Math.atan2(_.y,C)*180/Math.PI,oe=Math.abs(U).toFixed(0),Me=U>=0?"\u2191":"\u2193";return`${O.toFixed(0)}\xB0 / ${oe}\xB0${Me}`}function Qe(){return T.some(_=>!_.locked)}function tn(){return T.filter(_=>_.locked)}function vt(){Qe()||!(tn().length===0||_e)||T.push({id:X++,normal:new I(0,0,1),t:0,locked:!1,label:Nt("ui.cut")})}function ar(_){let C=document.getElementById("cuts");if(!C)return;let O=C.querySelector(`[data-cut-id="${_.id}"]`);if(!O){bn();return}let U=O.querySelector(".cut-label");if(U&&(U.textContent=_.locked?_.label:Nt("ui.cut")),_.locked&&!O.querySelector(".cut-remove")){let oe=document.createElement("button");oe.type="button",oe.className="cut-remove",oe.setAttribute("aria-label",Nt("ui.removeSection")),oe.textContent="\xD7",oe.addEventListener("click",()=>bt(_.id)),O.append(oe)}}function cn(_){_.locked||(Ut(_.normal),_.locked=!0,_.label=ln(_.normal),_e=!1,qt(),ar(_))}function lr(){tn().length!==0&&(Qe()||(_e=!0,!ue&&(vt(),bn())))}function Ni(){_e&&(Qe()||tn().length!==0&&(vt(),bn()))}function yi(_,C){let O=T.find(U=>U.id===_);if(O){if(O.locked||cn(O),O.t=Math.min(1,Math.max(0,Number(C))),O.anchor=null,ue){Vt();return}qt()}}function bt(_){let C=T.findIndex(O=>O.id===_);C<0||(T.splice(C,1),tn().length===0?(_e=!1,Qe()||vt()):_e&&!Qe()&&vt(),qt(),bn(),D?.refreshPartialHeight())}function nn(_){if(le(),Te.isEmpty())return{near:-1,far:1};let C=Te.min,O=Te.max,U=1/0,oe=-1/0;for(let $e=0;$e<2;$e++)for(let at=0;at<2;at++)for(let St=0;St<2;St++){P.set($e?O.x:C.x,at?O.y:C.y,St?O.z:C.z);let Qt=P.dot(_);Qt<U&&(U=Qt),Qt>oe&&(oe=Qt)}let we=Math.max(oe-U,1e-6)*.02;return{near:U-we,far:oe+we}}function qn(_){if(_.anchor)return new xn().setFromNormalAndCoplanarPoint(_.normal,_.anchor);let{near:C,far:O}=nn(_.normal),U=C+(O-C)*_.t;return Re.copy(_.normal).multiplyScalar(U),new xn().setFromNormalAndCoplanarPoint(_.normal,Re)}function Vt(){let _=ds();return Y&&(Y.traverse(C=>{if(!C.isMesh||!C.material||Bn(C)||rh(C))return;let O=Array.isArray(C.material)?C.material:[C.material];for(let U of O){if(!U)continue;let oe=U.clippingPlanes?U.clippingPlanes.length:0;U.clippingPlanes=_,U.clipIntersection=!1,oe!==_.length&&(U.needsUpdate=!0)}}),fp(Y,_)),_}function qt(){let _=Vt();Y&&(Mp(p,_),m!==Ds?or():fp(Y,_))}function bn(){let _=document.getElementById("cuts");if(_){_.replaceChildren();for(let C of T){let O=document.createElement("div");O.className="cut-row",O.dataset.cutId=String(C.id);let U=document.createElement("span");U.className="cut-label",U.textContent=C.locked?C.label:Nt("ui.cut");let oe=()=>{ue&&(ue=!1,qt(),Ni())},Me=sh({min:0,max:1,step:.001,value:C.t,ariaLabel:C.locked?`Section ${C.label}`:"Section cut",onScrubStart:()=>{ue=!0,C.locked||cn(C)},onScrubEnd:oe,onInput:we=>yi(C.id,we),onChange:we=>{yi(C.id,we),oe()}});if(O.append(U,Me.el),C.locked){let we=document.createElement("button");we.type="button",we.className="cut-remove",we.setAttribute("aria-label",Nt("ui.removeSection")),we.textContent="\xD7",we.addEventListener("click",()=>bt(C.id)),O.append(we)}_.append(O)}D?.refreshPartialHeight()}}let Br=!1,Eh=new I,Th=new I,Jp=!1;n.addEventListener("pointerdown",()=>{Br=!0},{capture:!0});let Qp=()=>{Br=!1};window.addEventListener("pointerup",Qp,{capture:!0}),window.addEventListener("pointercancel",Qp,{capture:!0}),J.addEventListener("start",()=>{_t(),Br=!0}),J.addEventListener("change",()=>{De()}),J.addEventListener("end",()=>{Br=!1,!de&&lr()});let _i=1,cr=0,ur=0,Ah=1,Rh=0,Ch=0,Ph=1,Ih=0,Lh=0,ps=0,I_=280;function L_(){let _=Math.max(1,n.clientWidth),C=Math.max(1,n.clientHeight);if(!D)return{zoom:1,offX:0,offY:0,w:_,h:C};let{bottom:O,right:U}=D.getSafeInsets();if(O<=0&&U<=0)return{zoom:1,offX:0,offY:0,w:_,h:C};let oe=Math.max(1,_-U),Me=Math.max(1,C-O),we=Math.min(oe/_,Me/C),$e=U/2,at=O/2;return{zoom:we,offX:$e,offY:at,w:_,h:C}}function em(_,C){oi(()=>{K=!0,Math.abs(cr)>.05||Math.abs(ur)>.05||Math.abs(_i-1)>.001?(H.zoom=Ie*_i,H.setViewOffset(_,C,cr,ur,_,C)):(H.clearViewOffset(),H.zoom=Ie,_i=1,cr=0,ur=0),H.updateProjectionMatrix(),K=!1})}function tm(_=!0){let{zoom:C,offX:O,offY:U,w:oe,h:Me}=L_();if(Ah=C,Rh=O,Ch=U,!_){_i=C,cr=O,ur=U,ps=0,em(oe,Me);return}Ph=_i,Ih=cr,Lh=ur,ps=performance.now()}function D_(_){if(!ps)return;let C=Math.min(1,(_-ps)/I_),O=1-(1-C)**3;_i=Ph+(Ah-Ph)*O,cr=Ih+(Rh-Ih)*O,ur=Lh+(Ch-Lh)*O;let U=Math.max(1,n.clientWidth),oe=Math.max(1,n.clientHeight);em(U,oe),C>=1&&(ps=0)}function Tl(){let _=Math.max(1,n.clientWidth),C=Math.max(1,n.clientHeight);F.setSize(_,C,!1),z==="perspective"?pe():Fe(),tm(!1);let O=El();Lx(Y,O.x,O.y)}Tl(),window.addEventListener("resize",Tl),D?.onDetentChange(()=>{tm(!0)});let $n=document.getElementById("ar"),Mn=document.getElementById("measure"),Qo=!1,Al=()=>Nt("ui.measure");function Dh(){let _=document.getElementById("locale");if(_){_.replaceChildren();for(let[C,O]of[["cs","CS"],["en","EN"]]){let U=document.createElement("button");U.type="button",U.dataset.locale=C,U.textContent=O,C===oh()&&U.classList.add("is-active"),U.addEventListener("click",()=>{py(C)}),_.append(U)}}}function N_(){Ap(document),$n&&!Qo&&($n.textContent=Nt("ui.ar")),Mn&&(Mn.textContent=Al()),Ws(),Xs(),ne.relocalize();try{V(),ce(),Ot(),Jo(),et(),bn(),Dh(),gm()}catch(_){console.error("relocalizeUi",_);try{Dh()}catch{}}D?.refreshPartialHeight()}Tp(()=>N_());function O_(){$n&&($n.hidden=!1,Qo||($n.textContent=Nt("ui.ar")))}function U_(){Mn&&(Mn.hidden=!1,Mn.textContent=Al())}let Vs=document.getElementById("drawing"),kr=document.getElementById("labels"),Gs=!0;function Ws(){Vs&&(Vs.hidden=!1,Vs.disabled=!We||Rl,Vs.textContent=Nt("ui.drawing"))}function Xs(){if(!kr)return;let _=!!We;kr.hidden=!_,kr.disabled=!_,kr.setAttribute("aria-pressed",Gs?"true":"false"),kr.classList.toggle("is-active",_&&Gs),kr.textContent=Nt("ui.labels")}function F_(){try{let _=new URLSearchParams(window.location.search).get("m");if(_&&_.trim())return _.trim()}catch{}return"model"}function B_(){let C=1,O=1.35;for(let U=0;U<6;U+=1){ne.update();let oe=ne.glyphBoundsNdc();if(!oe)return;let Me=Math.max(-1+.04-oe.minX,oe.maxX-(1-.04),-1+.04-oe.minY,oe.maxY-(1-.04),0);if(Me<.012||C>=O-.01)return;let we=Math.min(O/C,Math.max(1.05,1+Me*1.6));C*=we,H.isOrthographicCamera?(re.left*=we,re.right*=we,re.top*=we,re.bottom*=we,re.updateProjectionMatrix()):(ve.copy(H.position).sub(J.target).multiplyScalar(we),H.position.copy(J.target).add(ve),vn())}}function nm(){ps=0,_i=1,cr=0,ur=0,Ah=1,Rh=0,Ch=0,H.clearViewOffset(),H.zoom=Ie,H.updateProjectionMatrix()}let Rl=!1;async function im(){if(Rl||!Y||!We)return null;Rl=!0,Ws(),nt=!0;let _=We,C=m,O=f.background,U=F.getPixelRatio(),oe=n.style.width,Me=n.style.height,we=D?.getDetent?.()??null,$e=vi?.isActive()??!1,at=ne.isVisible();try{$e&&vi?.setActive(!1),ne.setVisible(!0),D?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,F.setPixelRatio(1),Tl(),nm(),m=dl,or(),f.background=new Je(16777215),ne.setInk("plate"),Fr(_),nm(),B_(),ne.update(),G.render(f,H,Y,am,{quality:"high"});let{png:St,pdf:Qt}=await R_(n),zn=`${F_()}_${String(_.id||"scene")}`;return{png:St,pdf:Qt,stem:zn}}finally{n.style.width=oe,n.style.height=Me,F.setPixelRatio(U),m=C,f.background=O,ne.setInk("viewer"),ne.setVisible(at),we&&D?.setDetent(we),Tl(),or(),_&&Fr(_),$e&&vi?.setActive(!0),nt=!1,Rl=!1,Ws(),Xs(),requestAnimationFrame(Ol)}}window.blueprintCaptureDrawing=async()=>{let _=await im();return _?{png:_.png,pdf:_.pdf,stem:_.stem}:null},window.blueprintSetView=(_={})=>{if(!Y||!_)return!1;let C=_.projection==="ortho"?"ortho":"perspective",O=Number.isFinite(Number(_.hFovDeg))?Number(_.hFovDeg):j;return C==="perspective"&&z==="ortho"&&Pe(O),C==="perspective"&&dt(O,{reframe:!1}),oi(()=>{K=!0;let U=new I(0,1,0);if(Array.isArray(_.up)&&_.up.length>=3&&(U.set(Number(_.up[0])||0,Number(_.up[1])||0,Number(_.up[2])||0),U.lengthSq()>1e-12?U.normalize():U.set(0,1,0)),me.up.copy(U),re.up.copy(U),H.up.copy(U),Array.isArray(_.target)&&J.target.set(Number(_.target[0])||0,Number(_.target[1])||0,Number(_.target[2])||0),Array.isArray(_.position)&&H.position.set(Number(_.position[0])||0,Number(_.position[1])||0,Number(_.position[2])||0),H.lookAt(J.target),C==="ortho"){let oe=H.position.distanceTo(J.target),Me=B(O,Ce());fe(oe,Me),Ie=1,z!=="ortho"&&(Be(re),z="ortho"),Z(),si()}le(),vn(),J.update(),K=!1}),rn=!0,!0},kr&&kr.addEventListener("click",()=>{Gs=!Gs,ne.setVisible(Gs),Xs()}),Vs&&Vs.addEventListener("click",()=>{(async()=>{let _=await im();_&&(Kp(_.png,`${_.stem}.png`),Kp(_.pdf,`${_.stem}.pdf`))})()});let vi=null;f&&(vi=Fy({scene:f,canvas:n,getCamera:()=>H,controls:J,getRoot:()=>Y,getClipPlanes:()=>ds(),onLiveLength:_=>{Mn&&(_?(Mn.textContent=_,Mn.classList.add("is-live")):(Mn.textContent=Al(),Mn.classList.remove("is-live")))},onActiveChange:_=>{rn=!0,Mn&&(Mn.classList.toggle("is-active",_),Mn.setAttribute("aria-pressed",_?"true":"false"),_||(Mn.textContent=Al(),Mn.classList.remove("is-live")))}})),Mn&&Mn.addEventListener("click",()=>{vi&&vi.setActive(!vi.isActive())}),Ee=()=>!!vi?.isActive();function rm(){if(!Y)return null;Y.updateWorldMatrix(!0,!0);let _=tn().map(oe=>qn(oe)),C=new Et;if(C.name="ARContent",Y.traverse(oe=>{if(!oe.isMesh||!oe.visible||Bn(oe))return;let Me=ry(oe,_);Me&&C.add(Me)}),!C.children.length)return null;C.updateMatrixWorld(!0);let O=Sp(C),U=new Et;return U.name="ARExport",U.add(C),cy(C,O),U.userData.arPlacement=O,U}async function sm(){if(Qo||!Y)return;Qo=!0;let _=$n?.textContent||"AR";$n&&($n.disabled=!0,$n.textContent="\u2026");try{let C=rm();if(!C)throw new Error("Nothing visible to export. Show at least one part.");let U=await new qu().parseAsync(C,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),oe=new Blob([U],{type:"model/vnd.usdz+zip"}),Me=URL.createObjectURL(oe),we=document.createElement("a");we.rel="ar",we.href=Me,we.download="view.usdz";let $e=document.createElement("img");$e.alt="AR",we.appendChild($e),document.body.appendChild(we),we.click(),we.remove(),setTimeout(()=>URL.revokeObjectURL(Me),6e4)}catch(C){ae(String(C?.message||C))}finally{Qo=!1,$n&&($n.disabled=!1,$n.textContent=_)}}$n&&$n.addEventListener("click",()=>{sm()});let om={scene:f,get camera(){return H},controls:J,parts:p,partOpacity:b,cuts:T,scenes:i,setPartOpacity:Hs,setCameraPreset:cs,applyScene:Fr,setHFov:dt,toggleFovIso:zt,get projection(){return z},get hFovDeg(){return j},setCutT:yi,removeCut:bt,frameIso:zs,openArQuickLook:sm,buildArExportScene:rm,getPeelQuality:()=>ta};window.BlueprintsViewer=om;function am(){for(let _ of b.values())if(_<1-1e-4)return!0;return!1}function lm(){for(let[_,C]of p){let O=b.get(_)??1;Dr(C,O,{edgeMode:m})}}let cm=!1,rn=!0,hr=null,Cl=x_(a),Nh=new ti,Oh=new Ze,Pl=g_({index:a,visibility:Cl,t:Nt,openSheet(){let _=window.matchMedia("(min-width: 768px)").matches;D?.setDetent(_?"open":"partial")},onFrame:(_,C)=>{C?.move?X_(_):W_(_)},onVisibility:()=>$_(),actionsFor:()=>[],liveLines:_=>{let C=Ge?.lastKnown(_.globalId);return C?o_(C,Nt):[]}});function Il(_){let C=_;for(;C;){let O=C.userData?.bpElementKey||Di(C.name||"").element;if(O){for(let U of Object.values(a.elements))if(U.id===O)return U}C=C.parent}return null}function um(_){return _?l.get(_)||[]:[]}function ai(_){if(!_)return[];let C=um(_.id);if(C.length)return C;let O=[];for(let U of Bs(a,_.globalId)){let oe=a.elements[U];oe&&oe!==_&&O.push(...um(oe.id))}return O}function qs(_){let C=new Lt,O=new I;for(let U of _){let oe=U.geometry;if(!oe)continue;oe.boundingBox||oe.computeBoundingBox();let Me=oe.boundingBox;if(Me){U.updateWorldMatrix(!0,!1);for(let we of[Me.min.x,Me.max.x])for(let $e of[Me.min.y,Me.max.y])for(let at of[Me.min.z,Me.max.z])O.set(we,$e,at).applyMatrix4(U.matrixWorld),C.expandByPoint(O)}}return C}let k_=480,Oi=null;function z_(_){let C=Math.min(1,Math.max(0,_));return C<.5?4*C*C*C:1-(-2*C+2)**3/2}function H_(_){let C=_.getSize(P),O=Math.max(C.x,C.y,C.z,.2),U=_.getCenter(new I),oe=H.position.clone().sub(J.target);oe.lengthSq()<1e-8?oe.set(.75,.55,.75):oe.normalize();let Me;if(H.isOrthographicCamera)Me=Math.max(H.position.distanceTo(J.target),O*1.4);else{let we=(H.fov||45)*Math.PI/180;Me=Math.max(O*.62/Math.max(Math.tan(we/2),.001),O*1.25)}return{center:U,position:U.clone().addScaledVector(oe,Me),span:O}}function V_(_){Oi={t0:performance.now(),fromPos:H.position.clone(),toPos:_.position,fromTarget:J.target.clone(),toTarget:_.center,span:_.span},rn=!0}function G_(_){if(!Oi)return;let C=Math.min(1,(_-Oi.t0)/k_),O=z_(C);H.position.lerpVectors(Oi.fromPos,Oi.toPos,O),J.target.lerpVectors(Oi.fromTarget,Oi.toTarget,O),H.isOrthographicCamera&&Le(Oi.span*.62,Oi.span*.62),de=!0,J.update(),le(),vn(),rn=!0,C>=1&&(Oi=null,requestAnimationFrame(()=>{de=!1}))}function W_(_){let C=ai(a.elements[_]);C.length&&hm(C),rn=!0}function X_(_){let C=a.elements[_],O=ai(C);if(!O.length)return;let U=qs(O);U.isEmpty()||(V_(H_(U)),hm(O),rn=!0)}function hm(_){hr&&fm();let C=[];for(let O of _){if(!O.isMesh||!O.material)continue;let U=Array.isArray(O.material)?O.material:[O.material],oe=U.map(Me=>{let we=Me.clone();return we.emissive?(we.emissive.setHex(16756768),we.emissiveIntensity=0):we.color&&(we.userData.bpPulseBase=we.color.getHex()),C.push(we),we});O.userData.bpPulseMaterial=U,O.material=oe.length===1?oe[0]:oe}hr={meshes:_,clones:C,t0:performance.now()}}function fm(){if(hr){for(let _ of hr.meshes){let C=_.userData.bpPulseMaterial;C&&(_.material=C.length===1?C[0]:C),delete _.userData.bpPulseMaterial}for(let _ of hr.clones)_.dispose?.();hr=null}}function q_(_){if(!hr)return;let C=(_-hr.t0)/900;if(C>=1){fm(),rn=!0;return}let O=Math.sin(Math.min(C,1)*Math.PI);for(let U of hr.clones)U.emissive?U.emissiveIntensity=.85*O:U.color&&U.userData.bpPulseBase!=null&&U.color.setHex(U.userData.bpPulseBase).offsetHSL(.08,.2,.18*O);rn=!0}function $_(){let _=new Set;for(let C of Object.values(a.elements))Cl.isHidden(C.globalId)&&C.id&&_.add(C.id);for(let[C,O]of l){let U=_.has(C);for(let oe of O){oe.userData.bpIfcHidden=U;for(let Me of oe.children||[])(Me?.userData?.isEdgeOverlay||Me?.userData?.isSectionCap)&&(Me.visible=!U)}}for(let C of Ye.bindings){let O=Di(C.host?.name||"").element,U=!!(O&&_.has(O));C.host&&(C.host.userData.bpIfcHidden=U)}for(let[C,O]of p)Dr(O,b.get(C)??1,{edgeMode:m});rn=!0}function Y_(_,C){let U=(Array.isArray(_.material)?_.material:[_.material]).map(oe=>{if(!oe)return oe;if(oe.userData.bpOwned)return C(oe);let Me=oe.clone();return Me.userData.bpOwned=!0,C(Me)});_.material=U.length===1?U[0]:U}function Ll(_,C){let O="restore"in C&&C.restore,U=!O&&!!C.on;qe.set(_.globalId,U),O?Ke.delete(_.globalId):Ke.set(_.globalId,C);let oe=O?1:Math.min(Math.max(C.level??1,0),1),Me=new Je(O?0:C.color);U&&Me.lerp(new Je(mh),.35*(1-oe));for(let we of ai(_))Y_(we,$e=>($e.color&&($e.userData.bpLightBase==null&&($e.userData.bpLightBase=$e.color.getHex()),O?$e.color.setHex($e.userData.bpLightBase):$e.color.copy(Me)),$e.emissive&&(U?($e.emissive.copy(Me),$e.emissiveIntensity=.3+.35*oe):($e.emissive.setHex(0),$e.emissiveIntensity=0)),$e));rn=!0}function Z_(_){let C=!qe.get(_.globalId);Ll(_,C?ze:He)}function K_(){for(let[_,C]of[...Ke]){let O=a.elements[_];O&&Ll(O,C)}}function Dl(_){_?.ok||(console.warn("Home command failed",_),Hh=`${Nt("home.failed")}${_?.status?` (${_.status})`:""}${_?.error?`: ${_.error}`:""}`,ea(),window.setTimeout(()=>{Hh="",ea()},4e3))}function j_(_){if(tv(_),ot(_)?.deviceType!=="ColorTemperatureLight"){Z_(_);return}Ge.command(_.globalId,{type:"toggle"}).then(Dl)}function J_(_,C){let O=ai(_);if(!C?.point||!O.length)return{dy:1,side:-1};let oe=qs(O).getCenter(new I),Me=new I().setFromMatrixColumn(H.matrixWorld,0),we=C.point.clone().sub(oe);return{dy:we.y,side:we.dot(Me)}}let dm=new Map;function Q_(_){let C=dm.get(_);return C||(C=Object.values(a.elements).filter(O=>O.type===_),dm.set(_,C)),C}function ev(_,C){let O=C?.camera||H,U=new I().setFromMatrixColumn(O.matrixWorld,0),oe=[];for(let Me of Q_(_)){if(Cl.isHidden(Me.globalId))continue;let we=ai(Me).filter(Xt=>{if(!Fs(Xt))return!1;for(let Ft=Xt;Ft;Ft=Ft.parent)if(!Ft.visible)return!1;return!0});if(_==="IfcWindow"){let Xt=new Set(Ae.operableMeshes(Me.id,ai(Me)));for(let Ft=we.length-1;Ft>=0;Ft--)Xt.has(we[Ft])||we.splice(Ft,1)}if(!we.length)continue;let $e=qs(we);if($e.isEmpty())continue;let at=new Set(we),St=Xt=>{for(let Ft=Xt;Ft;Ft=Ft.parent)if(at.has(Ft))return!0;return Il(Xt)===Me},Qt=we[0],zn=_==="IfcSwitchingDevice"?by($e,vl(Me),U).map(Xt=>Xt.center):[$e.getCenter(new I)];for(let Xt of zn)oe.push({element:Me,center:Xt,group:Me.globalId,hit:{object:Qt,point:Xt},owns:St})}return oe}let Uh=new Map;function Fh(_,C,O=!0){let U=ai(_);if(!U.length)return;let oe=qs(U),Me=oe.getCenter(new I),we=oe.getSize(new I),$e=C.position==="down"?-1:1;Me.y+=$e*we.y/4;let at=vl(_);if(at.length>1){let St=new I().setFromMatrixColumn(H.matrixWorld,0);if(St.y=0,St.lengthSq()>1e-9){St.normalize();let Qt=C.rocker===at[0]?-1:1;Me.addScaledVector(St,Qt*Math.max(we.x,we.z)/4)}}Ne.showFeedback({worldPos:Me,kind:"switch",direction:C.position,haptic:O})}function tv(_){let C=ai(_);C.length&&Ne.showFeedback({worldPos:qs(C).getCenter(new I),kind:"light"})}function nv(_,C){if(!_?.host||C.from===C.to)return;let O=new Lt().setFromObject(_.host);if(O.isEmpty())return;let U=O.getCenter(new I),oe=C.to>C.from;if(_.sections){Ne.showFeedback({worldPos:U,kind:"lift",direction:oe?"up":"down"});return}if(_.panels){let at=_.pivot.parent;if(!at)return;at.updateWorldMatrix(!0,!1),_.panels.forEach((St,Qt)=>{let zn=new Lt().setFromObject(St.pivot);if(zn.isEmpty())return;let Xt=St.slideLocal.clone().transformDirection(at.matrixWorld);oe||Xt.negate();let Ft=zn.getCenter(new I);Ne.showFeedback({worldPos:Ft,kind:"slide",worldDir:Xt,haptic:Qt===0})});return}if(_.slideLocal){let at=_.pivot.parent;if(!at)return;at.updateWorldMatrix(!0,!1);let St=_.slideLocal.clone().transformDirection(at.matrixWorld);oe||St.negate(),Ne.showFeedback({worldPos:U,kind:"slide",worldDir:St});return}let Me=_.pivot.getWorldPosition(new I),we=ph(C.to,_.sign)-ph(C.from,_.sign),$e=jy(U.toArray(),Me.toArray(),we);Ne.showFeedback({worldPos:U,kind:"hinge",hinge:Me,to:$e})}function iv(_,C){let O=ai(_),U=Ae.operableMeshes(_.id,O),oe=U[0];if(!oe?.parent)return;let Me=Ae.slideOf(_.id),we;Me?(we=new I(Me[0],Me[1],Me[2]).normalize(),C||we.negate()):(oe.parent.updateWorldMatrix(!0,!1),we=new I(C?1:-1,0,0).transformDirection(oe.parent.matrixWorld)),Ne.showFeedback({worldPos:qs(U).getCenter(new I),kind:"slide",worldDir:we})}function rv(_,C){return _?Ae.acceptsHit(_.id,ai(_),C):!1}function pm(_,C){Fh(_,C),Bh(_),Uh.set(_.globalId,performance.now()),Ge.press(_.globalId,C).then(Dl)}function sv(_,C){let O=ot(_),U=s_(_,J_(_,C));if(O?.deviceType!=="GenericSwitch"||!Ge.simulation()){Fh(_,U),Bh(_);return}pm(_,U)}function ov(_){if(ot(_)?.deviceType!=="GenericSwitch"||!Ge.simulation())return null;let O=vl(_),U=[];return O.forEach((oe,Me)=>{for(let we of["up","down"]){let $e=Nt(we==="up"?"home.up":"home.down");U.push({id:`switch-${oe}-${we}`,labelKey:we==="up"?"home.up":"home.down",label:O.length>1?`${Me+1} ${$e}`:$e,run:()=>pm(_,{rocker:oe,position:we,kind:"short"})})}}),U}function av(_){let C=ot(_);if(C?.deviceType!=="WindowCovering")return;let O=C.state?.windowCovering?.targetPositionLiftPercent100ths,U=O!=null&&O<5e3;Ge.command(_.globalId,{type:U?"coverClose":"coverOpen"}).then(Dl)}function lv(_){return ot(_)?.deviceType!=="WindowCovering"?null:[["coverOpen","ui.open"],["coverClose","ui.close"],["coverStop","home.stop"]].map(([O,U])=>({id:O,labelKey:U,run:()=>Ge.command(_.globalId,{type:O}).then(Dl)}))}function Bh(_){for(let C of ai(_)){if(C.userData.bpPressing)continue;C.userData.bpPressing=!0;let O=C.position.y;C.position.y=O-.004,window.setTimeout(()=>{C.position.y=O,C.userData.bpPressing=!1,rn=!0},160)}rn=!0}function cv(_){let C=!he.get(_.globalId);Ae.slide(_.id,ai(_),C,performance.now())&&(iv(_,C),he.set(_.globalId,C),rn=!0)}function uv(_){if(Ee())return;let C=H;if(!C||!Y)return;let O=n.getBoundingClientRect(),U=O.width||n.clientWidth||1,oe=O.height||n.clientHeight||1;Oh.x=(_.clientX-O.left)/U*2-1,Oh.y=-((_.clientY-O.top)/oe)*2+1,Nh.setFromCamera(Oh,C);let Me=Nh.intersectObject(Y,!0).filter(Ft=>Fs(Ft.object)),we=Y;for(;we.parent;)we=we.parent;let $e={raycaster:Nh,now:performance.now(),camera:C,root:we,tap:{x:_.clientX-O.left,y:_.clientY-O.top},size:{w:U,h:oe}},at=Ye.taps.resolve(Me,$e,Ft=>Fs(Ft.object));if(at&&(at.kind==="direct"||at.kind==="extended")&&at.hit?.object){let Ft=at.hit.object,na=Array.isArray(at.claim?.actions)?at.claim.actions.slice():[],Vh=Ft.userData?.bpPart||Di(Ft.name||"").part;Pl.openPopover(Il(Ft),Vh,na,_.clientX,_.clientY);return}let St=Me[0];if(!St){Pl.closePopover();return}let Qt=Il(St.object),zn=St.object.userData?.bpPart||Di(St.object.name||"").part,Xt=at?.kind==="legacy"&&Array.isArray(at.claim?.actions)?at.claim.actions.slice():[];Pl.openPopover(Qt,zn,Xt,_.clientX,_.clientY)}c=uv;let kh=i_({search:typeof location<"u"?location.search:"",storage:typeof localStorage<"u"?localStorage:null}),mm=n_(a),zh=kh.mode,Hh="",fr=null;function hv(_){let C=a.elements[_.globalId];C&&_.deviceType==="ColorTemperatureLight"&&Ll(C,Fp(_))}function fv(){for(let _ of[...qe.keys()]){let C=a.elements[_];C&&Ll(C,{restore:!0})}}function ea(){if(!fr)return;let _=Ge?Ge.status():"off",C=_==="live"?Ge.simulation()?"home.statusLive":"home.statusLiveNoSim":_==="connecting"?"home.statusConnecting":_==="unreachable"?"home.statusUnreachable":"home.statusOff";fr.textContent=Hh||Nt(C),fr.dataset.status=_,fr.title=_==="off"?"":kh.baseUrl}function gm(){if(!mm)return;let _=document.getElementById("section-home");if(!_){let U=document.getElementById("section-locale");if(!U?.parentNode)return;_=document.createElement("section"),_.className="sheet-section",_.id="section-home",U.parentNode.insertBefore(_,U)}_.replaceChildren();let C=document.createElement("h2");C.className="sheet-title",C.textContent=Nt("home.title");let O=document.createElement("div");O.className="seg",O.id="home-mode",O.setAttribute("role","group"),O.setAttribute("aria-label",Nt("home.title"));for(let[U,oe]of[["live","home.live"],["off","home.off"]]){let Me=document.createElement("button");Me.type="button",Me.dataset.homeMode=U,Me.textContent=Nt(oe),U===zh&&Me.classList.add("is-active"),Me.addEventListener("click",()=>dv(U)),O.append(Me)}fr=document.createElement("p"),fr.className="home-status",fr.setAttribute("aria-live","polite"),fr.style.cssText="margin:0.5rem 0 0;font-size:0.76rem;line-height:1.35;color:var(--fg-secondary)",_.append(C,O,fr),ea()}function dv(_){zh=_,r_(typeof localStorage<"u"?localStorage:null,_),document.querySelectorAll("#home-mode button").forEach(C=>{C.classList.toggle("is-active",C.dataset.homeMode===_)}),Ge&&(_==="live"?Ge.start():(Ge.stop(),fv()),ea())}mm&&(Ge=a_({baseUrl:kh.baseUrl,onStatus:()=>{ea(),rn=!0},onDevice:_=>hv(_),onSwitch:_=>{if(_.event!=="initialPress")return;let C=a.elements[_.globalId],O=performance.now()-(Uh.get(_.globalId)??-1/0)<3e3;Uh.delete(_.globalId),C&&!O&&((_.position==="up"||_.position==="down")&&Fh(C,{rocker:_.rocker,position:_.position},!1),Bh(C))}}),gm(),zh==="live"&&Ge.start(),window.blueprintsHome=Ge),Tp(()=>Pl.refresh());let xm=null,ym=null,ta="fast",_m=null,Nl=!1;n.addEventListener("pointermove",()=>{vi?.isActive()&&(rn=!0)}),n.addEventListener("pointerup",()=>{vi?.isActive()&&(rn=!0)});function pv(){let _=H.view;return[H.position.x,H.position.y,H.position.z,H.quaternion.x,H.quaternion.y,H.quaternion.z,H.quaternion.w,H.zoom,H.near,H.far,H.fov||0,H.left,H.right,H.top,H.bottom,J.target.x,J.target.y,J.target.z,n.width,n.height,_&&_.enabled?1:0,_?_.offsetX:0,_?_.offsetY:0,_?_.fullWidth:0,_?_.fullHeight:0,z==="ortho"?1:0]}function mv(){let _=pv(),C=xm,O=!C||C.length!==_.length;if(!O&&C){for(let U=0;U<_.length;U++)if(_[U]!==C[U]){O=!0;break}}return O&&(xm=_),O}function gv(){let _=[x,m,oh(),Gs?"1":"0",String(d)],C=f?.background;C&&C.isColor&&_.push(C.getHexString());for(let[U,oe]of b)_.push(U,Number(oe).toFixed(3));for(let U of T)_.push(String(U.id),U.locked?"1":"0",Number(U.t).toFixed(4));let O=Cl.hiddenIds();return _.push(O.length?O.slice().sort().join(","):"-"),_.join("|")}function Ol(){if(nt)return;let _=performance.now();Ye.step(_)&&(rn=!0),Ae.step(_)&&(rn=!0),q_(_),G_(_),D_(_),J.update(),Y&&vn(),Jp||(Eh.copy(H.position),Th.copy(J.target),Jp=!0);let C=H.position.distanceToSquared(Eh)>1e-8||J.target.distanceToSquared(Th)>1e-8;Eh.copy(H.position),Th.copy(J.target);let O=gv(),U=O!==ym,oe=mv();if(U&&(Nl=!0),ta=!Br&&!C&&!U&&!ue&&!ps&&!Nl?"high":"fast",!rn&&!U&&!oe&&!(ta!==_m)&&!Nl){requestAnimationFrame(Ol);return}rn=!1,ym=O,_m=ta,U||(Nl=!1),vi?.update(),ne.update();let $e=G.render(f,H,Y,am,{quality:ta,batchKey:O,deferPrime:U||ue});cm&&!$e&&lm(),cm=$e,requestAnimationFrame(Ol)}return Ol(),om}return Sv(pC);})();
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
