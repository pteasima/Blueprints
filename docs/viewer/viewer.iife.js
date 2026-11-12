var BlueprintsViewerBundle=(()=>{var zh=Object.defineProperty;var av=Object.getOwnPropertyDescriptor;var lv=Object.getOwnPropertyNames;var cv=Object.prototype.hasOwnProperty;var uv=(n,e)=>{for(var t in e)zh(n,t,{get:e[t],enumerable:!0})},hv=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of lv(e))!cv.call(n,r)&&r!==t&&zh(n,r,{get:()=>e[r],enumerable:!(i=av(e,r))||i.enumerable});return n};var fv=n=>hv(zh({},"__esModule",{value:!0}),n);var qR={};uv(qR,{mountViewer:()=>XR});var jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ug=0,Rf=1,hg=2;var Xa=1,fg=2,Co=3,ti=0,Mn=1,Dt=2,fi=0,Yi=1,Cf=2,Pf=3,If=4,Gc=5;var Ci=100,dg=101,pg=102,mg=103,gg=104,qa=200,es=201,xg=202,yg=203,$a=204,Po=205,_g=206,Ya=207,vg=208,bg=209,Mg=210,Sg=211,wg=212,Eg=213,Tg=214,_c=0,vc=1,bc=2,po=3,Mc=4,Sc=5,wc=6,Ec=7,Wc=0,Ag=1,Rg=2,di=0,Lf=1,Df=2,Nf=3,Io=4,Of=5,Uf=6,Ff=7,mf="attached",Cg="detached",Bf=300,Ms=301,Lo=302,Xc=303,qc=304,Ti=1e3,ci=1001,mo=1002,Xt=1003,$c=1004;var Ss=1005;var qt=1006,Do=1007;var pi=1008;var Dn=1009,kf=1010,zf=1011,No=1012,Yc=1013,Pi=1014,Gn=1015,Yn=1016,Zc=1017,Kc=1018,ws=1020,Hf=35902,Vf=35899,Gf=1021,Wf=1022,Sn=1023,xr=1026,Ar=1027,Jc=1028,jc=1029,ts=1030,Qc=1031;var eu=1033,Za=33776,Ka=33777,Ja=33778,ja=33779,tu=35840,nu=35841,iu=35842,ru=35843,su=36196,ou=37492,au=37496,lu=37488,cu=37489,Qa=37490,uu=37491,hu=37808,fu=37809,du=37810,pu=37811,mu=37812,gu=37813,xu=37814,yu=37815,_u=37816,vu=37817,bu=37818,Mu=37819,Su=37820,wu=37821,Eu=36492,Tu=36494,Au=36495,Ru=36283,Cu=36284,el=36285,Pu=36286;var gs=2300,xs=2301,xc=2302,gf=2303,xf=2400,yf=2401,_f=2402,Pg=2500;var Xf=0,tl=1,Oo=2,Ig=3200;var nl=0,Lg=1,Ii="",At="srgb",Hn="srgb-linear",xa="linear",Lt="srgb";var yc=7680;var Dg=519,Ng=512,Og=513,Ug=514,qf=515,Fg=516,Bg=517,$f=518,Yf=519,Zf=35044;var Kf="300 es",ui=2e3,go=2001;function dv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kg(){let n=xo("canvas");return n.style.display="block",n}var ym={},yo=null;function ya(...n){let e="THREE."+n.shift();yo?yo("log",e,...n):console.log(e,...n)}function zg(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function it(...n){n=zg(n);let e="THREE."+n.shift();if(yo)yo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=zg(n);let e="THREE."+n.shift();if(yo)yo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ms(...n){let e=n.join(" ");e in ym||(ym[e]=!0,it(...n))}function Hg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Vg={[_c]:_c,[bc]:wc,[Mc]:Mc,[po]:Sc,[vc]:vc,[wc]:bc,[Ec]:Ec,[Sc]:po},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_m=1234567,ho=Math.PI/180,ys=180/Math.PI;function Zi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function Jf(n,e){return(n%e+e)%e}function mv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function gv(n,e,t){return n!==e?(t-n)/(e-n):0}function ga(n,e,t){return(1-t)*n+t*e}function xv(n,e,t,i){return ga(n,e,1-Math.exp(-t*i))}function yv(n,e=1){return e-Math.abs(Jf(n,e*2)-e)}function _v(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function vv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function bv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mv(n,e){return n+Math.random()*(e-n)}function Sv(n){return n*(.5-Math.random())}function wv(n){n!==void 0&&(_m=n);let e=_m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ev(n){return n*ho}function Tv(n){return n*ys}function Av(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Rv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cv(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Iu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qf(n,e){if(e.constructor===Float32Array)return n;let t=Iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function ed(n,e){if(e.constructor===Float32Array)return n;let t=Iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var ns={DEG2RAD:ho,RAD2DEG:ys,generateUUID:Zi,clamp:ft,euclideanModulo:Jf,mapLinear:mv,inverseLerp:gv,lerp:ga,damp:xv,pingpong:yv,smoothstep:_v,smootherstep:vv,randInt:bv,randFloat:Mv,randFloatSpread:Sv,seededRandom:wv,degToRad:Ev,radToDeg:Tv,isPowerOfTwo:Av,ceilPowerOfTwo:Rv,floorPowerOfTwo:jf,setQuaternionFromProperEuler:Cv,normalize:ed,denormalize:Qf},Ke=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(h!==x||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*x;m<0&&(f=-f,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),S=Math.sin(b);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+x*a;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hh=new I,vm=new $t,ht=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=r[0],m=r[3],p=r[6],b=r[1],S=r[4],v=r[7],M=r[2],E=r[5],y=r[8];return s[0]=o*x+a*b+l*M,s[3]=o*m+a*S+l*E,s[6]=o*p+a*v+l*y,s[1]=c*x+u*b+h*M,s[4]=c*m+u*S+h*E,s[7]=c*p+u*v+h*y,s[2]=f*x+d*b+g*M,s[5]=f*m+d*S+g*E,s[8]=f*p+d*v+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vh.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vh.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vh=new ht,bm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pv(){let n={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Lt&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(r.r=fo(r.r),r.g=fo(r.g),r.b=fo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?xa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Hn]:{primaries:e,whitePoint:i,transfer:xa,toXYZ:bm,fromXYZ:Mm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:bm,fromXYZ:Mm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}var xt=Pv();function gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,Tc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=xo("canvas")),Xs.width=e.width,Xs.height=e.height;let r=Xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gr(t[i]/255)*255):t[i]=gr(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Iv=0,_o=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gh(r[o].image)):s.push(Gh(r[o]))}else s=Gh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var Lv=0,Wh=new I,cn=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ci,r=ci,s=qt,o=pi,a=Sn,l=Dn,c=n.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Zi(),this.name="",this.source=new _o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wh).x}get height(){return this.source.getSize(Wh).y}get depth(){return this.source.getSize(Wh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Bf;cn.DEFAULT_ANISOTROPY=1;var Mt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(d+1)/2,M=(p+1)/2,E=(u+f)/4,y=(h+x)/4,w=(g+m)/4;return S>v&&S>M?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=y/i):v>M?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=E/r,s=w/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=y/s,r=w/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new cn({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new _o(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Ac{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rc=class extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/qs.setFromMatrixColumn(e,0).length(),s=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dv,e,Nv)}lookAt(e,t,i){let r=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),zr.crossVectors(i,jn),zr.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),zr.crossVectors(i,jn)),zr.normalize(),kl.crossVectors(jn,zr),r[0]=zr.x,r[4]=kl.x,r[8]=jn.x,r[1]=zr.y,r[5]=kl.y,r[9]=jn.y,r[2]=zr.z,r[6]=kl.z,r[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],S=i[7],v=i[11],M=i[15],E=r[0],y=r[4],w=r[8],L=r[12],D=r[1],B=r[5],V=r[9],z=r[13],O=r[2],X=r[6],Q=r[10],q=r[14],ye=r[3],Z=r[7],G=r[11],ee=r[15];return s[0]=o*E+a*D+l*O+c*ye,s[4]=o*y+a*B+l*X+c*Z,s[8]=o*w+a*V+l*Q+c*G,s[12]=o*L+a*z+l*q+c*ee,s[1]=u*E+h*D+f*O+d*ye,s[5]=u*y+h*B+f*X+d*Z,s[9]=u*w+h*V+f*Q+d*G,s[13]=u*L+h*z+f*q+d*ee,s[2]=g*E+x*D+m*O+p*ye,s[6]=g*y+x*B+m*X+p*Z,s[10]=g*w+x*V+m*Q+p*G,s[14]=g*L+x*z+m*q+p*ee,s[3]=b*E+S*D+v*O+M*ye,s[7]=b*y+S*B+v*X+M*Z,s[11]=b*w+S*V+v*Q+M*G,s[15]=b*L+S*z+v*q+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],b=l*d-c*f,S=a*d-c*h,v=a*f-l*h,M=o*d-c*u,E=o*f-l*u,y=o*h-a*u;return t*(x*b-m*S+p*v)-i*(g*b-m*M+p*E)+r*(g*S-x*M+p*y)-s*(g*v-x*E+m*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=t*a-i*o,S=t*l-r*o,v=t*c-s*o,M=i*l-r*a,E=i*c-s*a,y=r*c-s*l,w=u*x-h*g,L=u*m-f*g,D=u*p-d*g,B=h*m-f*x,V=h*p-d*x,z=f*p-d*m,O=b*z-S*V+v*B+M*D-E*L+y*w;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/O;return e[0]=(a*z-l*V+c*B)*X,e[1]=(r*V-i*z-s*B)*X,e[2]=(x*y-m*E+p*M)*X,e[3]=(f*E-h*y-d*M)*X,e[4]=(l*D-o*z-c*L)*X,e[5]=(t*z-r*D+s*L)*X,e[6]=(m*v-g*y-p*S)*X,e[7]=(u*y-f*v+d*S)*X,e[8]=(o*V-a*D+c*w)*X,e[9]=(i*D-t*V-s*w)*X,e[10]=(g*E-x*v+p*b)*X,e[11]=(h*v-u*E-d*b)*X,e[12]=(a*L-o*B-l*w)*X,e[13]=(t*B-i*L+r*w)*X,e[14]=(x*S-g*M-m*b)*X,e[15]=(u*M-h*S+f*b)*X,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,x=o*u,m=o*h,p=a*h,b=l*c,S=l*u,v=l*h,M=i.x,E=i.y,y=i.z;return r[0]=(1-(x+p))*M,r[1]=(d+v)*M,r[2]=(g-S)*M,r[3]=0,r[4]=(d-v)*E,r[5]=(1-(f+p))*E,r[6]=(m+b)*E,r[7]=0,r[8]=(g+S)*y,r[9]=(m-b)*y,r[10]=(1-(f+x))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=qs.set(r[0],r[1],r[2]).length(),a=qs.set(r[4],r[5],r[6]).length(),l=qs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Si.copy(this);let c=1/o,u=1/a,h=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=h,Si.elements[9]*=h,Si.elements[10]*=h,t.setFromRotationMatrix(Si),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=ui,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===ui)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===go)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ui,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===ui)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===go)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},qs=new I,Si=new at,Dv=new I(0,0,0),Nv=new I(1,1,1),zr=new I,kl=new I,jn=new I,Sm=new at,wm=new $t,Vi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ov=0,Em=new I,$s=new $t,ur=new at,zl=new I,ra=new I,Uv=new I,Fv=new $t,Tm=new I(1,0,0),Am=new I(0,1,0),Rm=new I(0,0,1),Cm={type:"added"},Bv={type:"removed"},Ys={type:"childadded",child:null},Xh={type:"childremoved",child:null},Gt=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Vi,i=new $t,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new ht}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Tm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,t){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zl.copy(e):zl.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(ra,zl,this.up):ur.lookAt(zl,ra,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),$s.setFromRotationMatrix(ur),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bv),Xh.child=e,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,Uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new I(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},kv={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=Jf(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qh(o,s,e+1/3),this.g=qh(o,s,e),this.b=qh(o,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=Gg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return xt.workingToColorSpace(Cn.copy(this),e),Math.round(ft(Cn.r*255,0,255))*65536+Math.round(ft(Cn.g*255,0,255))*256+Math.round(ft(Cn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Cn.copy(this),t);let i=Cn.r,r=Cn.g,s=Cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=At){xt.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,i=Cn.g,r=Cn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Hl);let i=ga(Hr.h,Hl.h,t),r=ga(Hr.s,Hl.s,t),s=ga(Hr.l,Hl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Je;Je.NAMES=Gg;var Vn=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wi=new I,hr=new I,$h=new I,fr=new I,Zs=new I,Ks=new I,Pm=new I,Yh=new I,Zh=new I,Kh=new I,Jh=new Mt,jh=new Mt,Qh=new Mt,zi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wi.subVectors(e,t),r.cross(wi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){wi.subVectors(r,t),hr.subVectors(i,t),$h.subVectors(e,t);let o=wi.dot(wi),a=wi.dot(hr),l=wi.dot($h),c=hr.dot(hr),u=hr.dot($h),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(o,fr.y),l.addScaledVector(a,fr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Jh.setScalar(0),jh.setScalar(0),Qh.setScalar(0),Jh.fromBufferAttribute(e,t),jh.fromBufferAttribute(e,i),Qh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jh,s.x),o.addScaledVector(jh,s.y),o.addScaledVector(Qh,s.z),o}static isFrontFacing(e,t,i,r){return wi.subVectors(i,t),hr.subVectors(e,t),wi.cross(hr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),wi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Zs.subVectors(r,i),Ks.subVectors(s,i),Yh.subVectors(e,i);let l=Zs.dot(Yh),c=Ks.dot(Yh);if(l<=0&&c<=0)return t.copy(i);Zh.subVectors(e,r);let u=Zs.dot(Zh),h=Ks.dot(Zh);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(Zs,o);Kh.subVectors(e,s);let d=Zs.dot(Kh),g=Ks.dot(Kh);if(g>=0&&d<=g)return t.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ks,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Pm.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Pm,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Zs,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(s,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vl.copy(i.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Gl.subVectors(this.max,sa),Js.subVectors(e.a,sa),js.subVectors(e.b,sa),Qs.subVectors(e.c,sa),Vr.subVectors(js,Js),Gr.subVectors(Qs,js),hs.subVectors(Js,Qs);let t=[0,-Vr.z,Vr.y,0,-Gr.z,Gr.y,0,-hs.z,hs.y,Vr.z,0,-Vr.x,Gr.z,0,-Gr.x,hs.z,0,-hs.x,-Vr.y,Vr.x,0,-Gr.y,Gr.x,0,-hs.y,hs.x,0];return!ef(t,Js,js,Qs,Gl)||(t=[1,0,0,0,1,0,0,0,1],!ef(t,Js,js,Qs,Gl))?!1:(Wl.crossVectors(Vr,Gr),t=[Wl.x,Wl.y,Wl.z],ef(t,Js,js,Qs,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},dr=[new I,new I,new I,new I,new I,new I,new I,new I],Ei=new I,Vl=new zt,Js=new I,js=new I,Qs=new I,Vr=new I,Gr=new I,hs=new I,sa=new I,Gl=new I,Wl=new I,fs=new I;function ef(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fs.fromArray(n,s);let a=r.x*Math.abs(fs.x)+r.y*Math.abs(fs.y)+r.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),u=i.dot(fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var rn=new I,Xl=new Ke,zv=0,kt=class extends Ai{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zf,this.updateRanges=[],this.gpuType=Gn,this.version=0,this._normalizationScale=e!==void 0?Iu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ed(e,this.array)}};var va=class extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ba=class extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Vt=class extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hv=new zt,oa=new I,tf=new I,xn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Hv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(tf)),this.expandByPoint(oa.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vv=0,li=new at,nf=new Gt,eo=new I,Qn=new zt,aa=new zt,mn=new I,Ut=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dv(e)?ba:va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return nf.lookAt(e),nf.updateMatrix(),this.applyMatrix4(nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Qn.min,aa.min),Qn.expandByPoint(mn),mn.addVectors(Qn.max,aa.max),Qn.expandByPoint(mn)):(Qn.expandByPoint(aa.min),Qn.expandByPoint(aa.max))}Qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(eo.fromBufferAttribute(e,c),mn.add(eo)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new kt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new I,l[L]=new I;let u=new I,h=new I,f=new I,d=new Ke,g=new Ke,x=new Ke,m=new I,p=new I;function b(L,D,B){c[L]=c[D]=c[B]=1,u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,D),f.fromBufferAttribute(i,B),d.fromBufferAttribute(s,L),g.fromBufferAttribute(s,D),x.fromBufferAttribute(s,B),h.sub(u),f.sub(u),g.sub(d),x.sub(d);let V=1/(g.x*x.y-x.x*g.y);isFinite(V)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(V),p.copy(f).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(V),a[L].add(m),a[D].add(m),a[B].add(m),l[L].add(p),l[D].add(p),l[B].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,D=S.length;L<D;++L){let B=S[L],V=B.start,z=B.count;for(let O=V,X=V+z;O<X;O+=3)b(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new I,M=new I,E=new I,y=new I;function w(L){E.fromBufferAttribute(r,L),y.copy(E);let D=a[L];v.copy(D),v.sub(E.multiplyScalar(E.dot(D))).normalize(),M.crossVectors(y,D);let V=M.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,V)}for(let L=0,D=i.count;L<D;++L)c[L]&&w(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new kt(f,u,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zf,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Im(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Im(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Im(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Zi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var zn=new I,Pn=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Iu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ed(e,this.data.array)}},rf=new I,Gv=new I,Wv=new ht,gn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=rf.subVectors(i,t).cross(Gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(rf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Wv.getNormalMatrix(e),r=this.coplanarPoint(rf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Xv=0,In=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Yi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Po,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yc,this.stencilZFail=yc,this.stencilZPass=yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mo=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},to,la=new I,no=new I,io=new I,ro=new Ke,ca=new Ke,Wg=new at,ql=new I,ua=new I,$l=new I,Lm=new Ke,sf=new Ke,Dm=new Ke,Ma=class extends Gt{constructor(e=new Mo){if(super(),this.isSprite=!0,this.type="Sprite",to===void 0){to=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qr(t,5);to.setIndex([0,1,2,0,2,3]),to.setAttribute("position",new Pn(i,3,0,!1)),to.setAttribute("uv",new Pn(i,2,3,!1))}this.geometry=to,this.material=e,this.center=new Ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),no.setFromMatrixScale(this.matrixWorld),Wg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),io.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&no.multiplyScalar(-io.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Yl(ql.set(-.5,-.5,0),io,o,no,r,s),Yl(ua.set(.5,-.5,0),io,o,no,r,s),Yl($l.set(.5,.5,0),io,o,no,r,s),Lm.set(0,0),sf.set(1,0),Dm.set(1,1);let a=e.ray.intersectTriangle(ql,ua,$l,!1,la);if(a===null&&(Yl(ua.set(-.5,.5,0),io,o,no,r,s),sf.set(0,1),a=e.ray.intersectTriangle(ql,$l,ua,!1,la),a===null))return;let l=e.ray.origin.distanceTo(la);l<e.near||l>e.far||t.push({distance:l,point:la.clone(),uv:zi.getInterpolation(la,ql,ua,$l,Lm,sf,Dm,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Yl(n,e,t,i,r,s){ro.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ca.x=s*ro.x-r*ro.y,ca.y=r*ro.x+s*ro.y):ca.copy(ro),n.copy(e),n.x+=ca.x,n.y+=ca.y,n.applyMatrix4(Wg)}var pr=new I,of=new I,Zl=new I,Kl=new I,Gi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){of.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Kl.copy(this.origin).sub(of);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Zl),a=Kl.dot(this.direction),l=-Kl.dot(Zl),c=Kl.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(of).addScaledVector(Zl,f),d}intersectSphere(e,t){if(e.radius<0)return null;pr.subVectors(e.center,this.origin);let i=pr.dot(this.direction),r=pr.dot(pr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,g=t.x-o.x,x=t.y-o.y,m=t.z-o.z,p=i.x-o.x,b=i.y-o.y,S=i.z-o.z,v=Math.abs(l),M=Math.abs(c),E=Math.abs(u),y,w,L,D,B,V,z,O,X,Q,q,ye;if(v>=M&&v>=E?(L=l,V=h,X=g,ye=p,l>=0?(y=c,w=u,D=f,B=d,z=x,O=m,Q=b,q=S):(y=u,w=c,D=d,B=f,z=m,O=x,Q=S,q=b)):M>=E?(L=c,V=f,X=x,ye=b,c>=0?(y=u,w=l,D=d,B=h,z=m,O=g,Q=S,q=p):(y=l,w=u,D=h,B=d,z=g,O=m,Q=p,q=S)):(L=u,V=d,X=m,ye=S,u>=0?(y=l,w=c,D=h,B=f,z=g,O=x,Q=p,q=b):(y=c,w=l,D=f,B=h,z=x,O=g,Q=b,q=p)),L===0)return null;let Z=y/L,G=w/L,ee=1/L,Me=D-Z*V,Ce=B-G*V,K=z-Z*X,le=O-G*X,k=Q-Z*ye,te=q-G*ye,me=k*le-te*K,Ee=Me*te-Ce*k,We=K*Ce-le*Me;if(r){if(me<0||Ee<0||We<0)return null}else if((me<0||Ee<0||We<0)&&(me>0||Ee>0||We>0))return null;let Oe=me+Ee+We;if(Oe===0)return null;let Ye=ee*(me*V+Ee*X+We*ye);return(Oe>0?Ye<0:Ye>0)?null:this.at(Ye/Oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nm=new at,ds=new Gi,Jl=new xn,Om=new I,jl=new I,Ql=new I,ec=new I,af=new I,tc=new I,Um=new I,nc=new I,pt=class extends Gt{constructor(e=new Ut,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(af.fromBufferAttribute(h,e),o?tc.addScaledVector(af,u):tc.addScaledVector(af.sub(t),u))}t.add(tc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),ds.copy(e.ray).recast(e.near),!(Jl.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Jl,Om)===null||ds.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(Nm.copy(s).invert(),ds.copy(e.ray).applyMatrix4(Nm),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,M=S;v<M;v+=3){let E=a.getX(v),y=a.getX(v+1),w=a.getX(v+2);r=ic(this,p,e,i,c,u,h,E,y,w),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);r=ic(this,o,e,i,c,u,h,b,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,M=S;v<M;v+=3){let E=v,y=v+1,w=v+2;r=ic(this,p,e,i,c,u,h,E,y,w),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=m,S=m+1,v=m+2;r=ic(this,o,e,i,c,u,h,b,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function qv(n,e,t,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ti,a),l===null)return null;nc.copy(a),nc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(nc);return c<t.near||c>t.far?null:{distance:c,point:nc.clone(),object:n}}function ic(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,jl),n.getVertexPosition(l,Ql),n.getVertexPosition(c,ec);let u=qv(n,e,t,i,jl,Ql,ec,Um);if(u){let h=new I;zi.getBarycoord(Um,jl,Ql,ec,h),r&&(u.uv=zi.getInterpolatedAttribute(r,a,l,c,h,new Ke)),s&&(u.uv1=zi.getInterpolatedAttribute(s,a,l,c,h,new Ke)),o&&(u.normal=zi.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};zi.getNormal(jl,Ql,ec,f.normal),u.face=f,u.barycoord=h}return u}var ha=new Mt,Fm=new Mt,Bm=new Mt,$v=new Mt,km=new at,rc=new I,lf=new xn,zm=new at,cf=new Gi,Sa=class extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mf,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,rc),this.boundingBox.expandByPoint(rc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,rc),this.boundingSphere.expandByPoint(rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lf.copy(this.boundingSphere),lf.applyMatrix4(r),e.ray.intersectsSphere(lf)!==!1&&(zm.copy(r).invert(),cf.copy(e.ray).applyMatrix4(zm),!(this.boundingBox!==null&&cf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cg?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Fm.fromBufferAttribute(r.attributes.skinIndex,e),Bm.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ha.copy(t),t.set(0,0,0,0)):(ha.set(t.x,t.y,t.z,1),t.set(0,0,0)),ha.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Bm.getComponent(s);if(o!==0){let a=Fm.getComponent(s);km.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector($v.copy(ha).applyMatrix4(km),o)}}return t.isVector4&&(t.w=ha.w),t.applyMatrix4(this.bindMatrixInverse)}},So=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},wo=class extends cn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Xt,u=Xt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hm=new at,Yv=new at,wa=class n{constructor(e=[],t=[]){this.uuid=Zi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:Yv;Hm.multiplyMatrices(a,t[s]),Hm.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new wo(t,e,e,Sn,Gn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(it("Skeleton: No bone found with UUID:",s),o=new So),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},yr=class extends kt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},so=new at,Vm=new at,sc=[],Gm=new zt,Zv=new at,fa=new pt,da=new xn,_s=class extends pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Zv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),Gm.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Gm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),da.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,so),Vm.multiplyMatrices(i,so),fa.matrixWorld=Vm,fa.raycast(e,sc);for(let o=0,a=sc.length;o<a;o++){let l=sc[o];l.instanceId=s,l.object=this,t.push(l)}sc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wo(new Float32Array(r*this.count),r,this.count,Jc,Gn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ps=new xn,Kv=new Ke(.5,.5),oc=new I,$r=class{constructor(e=new gn,t=new gn,i=new gn,r=new gn,s=new gn,o=new gn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],b=s[12],S=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,p-g,M-b).normalize(),r[1].setComponents(c+o,d+u,p+g,M+b).normalize(),r[2].setComponents(c+a,d+h,p+x,M+S).normalize(),r[3].setComponents(c-a,d-h,p-x,M-S).normalize(),i)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,d-f,p-m,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-m,M-v).normalize(),t===ui)r[5].setComponents(c+l,d+f,p+m,M+v).normalize();else if(t===go)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);let t=Kv.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(oc.x=r.normal.x>0?e.max.x:e.min.x,oc.y=r.normal.y>0?e.max.y:e.min.y,oc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wm=new at,Cc=class n{constructor(){this.coordinateSystem=ui,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Wm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new $r),i[r].setFromProjectionMatrix(Wm,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new $r),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var _r=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pc=new I,Ic=new I,Xm=new at,pa=new Gi,ac=new xn,uf=new I,qm=new I,Wi=class extends Gt{constructor(e=new Ut,t=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Pc.fromBufferAttribute(t,r-1),Ic.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Pc.distanceTo(Ic);e.setAttribute("lineDistance",new Vt(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(r),ac.radius+=s,e.ray.intersectsSphere(ac)===!1)return;Xm.copy(r).invert(),pa.copy(e.ray).applyMatrix4(Xm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),b=u.getX(x+1),S=lc(this,e,pa,l,p,b,x);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=lc(this,e,pa,l,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=lc(this,e,pa,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=lc(this,e,pa,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function lc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Pc.fromBufferAttribute(a,r),Ic.fromBufferAttribute(a,s),t.distanceSqToSegment(Pc,Ic,uf,qm)>i)return;uf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(uf);if(!(c<e.near||c>e.far))return{distance:c,point:qm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var $m=new I,Ym=new I,Ea=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)$m.fromBufferAttribute(t,r),Ym.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$m.distanceTo(Ym);e.setAttribute("lineDistance",new Vt(i,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Eo=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zm=new at,vf=new Gi,cc=new xn,uc=new I,Aa=class extends Gt{constructor(e=new Ut,t=new Eo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(r),cc.radius+=s,e.ray.intersectsSphere(cc)===!1)return;Zm.copy(r).invert(),vf.copy(e.ray).applyMatrix4(Zm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);uc.fromBufferAttribute(h,m),Km(uc,m,l,r,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)uc.fromBufferAttribute(h,g),Km(uc,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Km(n,e,t,i,r,s,o){let a=vf.distanceSqToPoint(n);if(a<t){let l=new I;vf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ra=class extends cn{constructor(e=[],t=Ms,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vr=class extends cn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var br=class extends cn{constructor(e,t,i=Pi,r,s,o,a=Xt,l=Xt,c,u=xr,h=1){if(u!==xr&&u!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _o(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ca=class extends br{constructor(e,t=Pi,i=Ms,r,s,o=Xt,a=Xt,l,c=xr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pa=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xi=class n extends Ut{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(h,2));function g(x,m,p,b,S,v,M,E,y,w,L){let D=v/y,B=M/w,V=v/2,z=M/2,O=E/2,X=y+1,Q=w+1,q=0,ye=0,Z=new I;for(let G=0;G<Q;G++){let ee=G*B-z;for(let Me=0;Me<X;Me++){let Ce=Me*D-V;Z[x]=Ce*b,Z[m]=ee*S,Z[p]=O,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(Me/y),h.push(1-G/w),q+=1}}for(let G=0;G<w;G++)for(let ee=0;ee<y;ee++){let Me=f+ee+X*G,Ce=f+ee+X*(G+1),K=f+(ee+1)+X*(G+1),le=f+(ee+1)+X*G;l.push(Me,Ce,le),l.push(Ce,K,le),ye+=6}a.addGroup(d,ye,L),d+=ye,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var hc=new I,fc=new I,hf=new I,dc=new zi,Ia=class extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ho*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=dc;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),dc.getNormal(hf),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let S=(b+1)%3,v=h[b],M=h[S],E=dc[u[b]],y=dc[u[S]],w=`${v}_${M}`,L=`${M}_${v}`,D=f.get(L);D?(hf.dot(D.normal)<=s&&(d.push(E.x,E.y,E.z),d.push(y.x,y.y,y.z)),f.set(L,null)):f.has(w)||f.set(w,{index0:c[b],index1:c[S],normal:hf.clone()})}}for(let g of f.values())if(g){let{index0:x,index1:m}=g;hc.fromBufferAttribute(a,x),fc.fromBufferAttribute(a,m),d.push(hc.x,hc.y,hc.z),d.push(fc.x,fc.y,fc.z)}this.setAttribute("position",new Vt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var hi=class n extends Ut{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let S=0;S<c;S++){let v=S*h-s;g.push(v,-b,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,v=b+c*(p+1),M=b+1+c*(p+1),E=b+1+c*p;d.push(S,v,E),d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var La=class n extends Ut{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,f=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let b=[],S=p/i,v=o+S*a,M=e*Math.cos(v),E=Math.sqrt(e*e-M*M),y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let L=w/t,D=r+L*s;h.x=-E*Math.cos(D),h.y=M,h.z=E*Math.sin(D),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(L+y,1-S),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let S=u[p][b+1],v=u[p][b],M=u[p+1][b],E=u[p+1][b+1];(p!==0||o>0)&&d.push(S,v,E),(p!==i-1||l<Math.PI)&&d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Da=class extends Ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new I,s=new I;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let g=f,x=f+d;g<x;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),b=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,b),Jm(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Jm(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Vt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Jm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(jm(r))r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(jm(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Nn(n){let e={};for(let t=0;t<n.length;t++){let i=Es(n[t]);for(let r in i)e[r]=i[r]}return e}function jm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Jv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function td(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var il={clone:Es,merge:Nn},jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jv,this.fragmentShader=Qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new I().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ht().fromArray(r.value);break;case"m4":this.uniforms[i].value=new at().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lc=class extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ln=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},un=class extends Ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Na=class extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Wc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dc=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ma(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function eb(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Qm(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function tb(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var qi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oc=class extends qi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xf,endingEnd:xf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case yf:s=e,a=2*t-i;break;case _f:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yf:o=e,l=2*i-t;break;case _f:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+b*o[c+M]+S*o[l+M]+v*o[h+M];return s}},Uc=class extends qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Fc=class extends qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bc=class extends qi{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-t)/(r-t),x=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*g;return s}let f=a*2,d=e-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*f+g*2,b=h[p],S=h[p+1],v=e*f+g*2,M=u[v],E=u[v+1],y=ib(i,t,b,M,r);s[g]=Xg(y,x,S,E,m)}return s}};function Xg(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function nb(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function ib(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=Xg(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let l=nb(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var $n=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(t,this.TimeBufferType),this.values=Xr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),ma(e.settings)&&(i.settings={inTangents:Xr(e.settings.inTangents,Array),outTangents:Xr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case xs:t=this.InterpolantFactoryMethodLinear;break;case xc:t=this.InterpolantFactoryMethodSmooth;break;case gf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return xc;case this.InterpolantFactoryMethodBezier:return gf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;ma(this.settings)&&(eg(this.settings.inTangents,e),eg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;ma(this.settings)&&(tg(this.settings.inTangents,e),tg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ct("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ct("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&pv(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){ct("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===xc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,ma(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function eg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function tg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=xs;var Mr=class extends $n{constructor(e,t,i){super(e,t,i)}};Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=gs;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends $n{constructor(e,t,i,r){super(e,t,i,r)}};Oa.prototype.ValueTypeName="color";var Sr=class extends $n{constructor(e,t,i,r){super(e,t,i,r)}};Sr.prototype.ValueTypeName="number";var kc=class extends qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)$t.slerpFlat(s,0,o,c-a,o,c,l);return s}},wr=class extends $n{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Er=class extends $n{constructor(e,t,i){super(e,t,i)}};Er.prototype.ValueTypeName="string";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=gs;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends $n{constructor(e,t,i,r){super(e,t,i,r)}};Yr.prototype.ValueTypeName="vector";var Ua=class{constructor(e="",t=-1,i=[],r=Pg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Zi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(sb(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push($n.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=eb(l);l=Qm(l,1,u),c=Qm(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Sr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function rb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return Yr;case"color":return Oa;case"quaternion":return wr;case"bool":case"boolean":return Mr;case"string":return Er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function sb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=rb(n.type);if(n.times===void 0){let i=[],r=[];tb(n.keys,i,r,"value"),n.times=i,n.values=r}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),ma(n.settings)&&(t.settings={inTangents:Xr(n.settings.inTangents,Float32Array),outTangents:Xr(n.settings.outTangents,Float32Array)}),t}var Hi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(ng(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!ng(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function ng(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var zc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qg=new zc,$i=class{constructor(e){this.manager=e!==void 0?e:qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr={},bf=class extends Error{constructor(e,t){super(e),this.response=t}},To=class extends $i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Hi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(mr[e]!==void 0){mr[e].push({onLoad:t,onProgress:i,onError:r});return}mr[e]=[],mr[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=mr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){b();function b(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{x+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let E=0,y=u.length;E<y;E++){let w=u[E];w.onProgress&&w.onProgress(M)}p.enqueue(v),b()}},S=>{p.error(S)})}}});return new Response(m)}else throw new bf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Hi.add(`file:${e}`,c);let u=mr[e];delete mr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=mr[e];if(u===void 0)throw this.manager.itemError(e),c;delete mr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var oo=new WeakMap,Hc=class extends $i{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=oo.get(o);h===void 0&&(h=[],oo.set(o,h)),h.push({onLoad:t,onError:r})}return o}let a=xo("img");function l(){u(),t&&t(this);let h=oo.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}oo.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Hi.remove(`image:${e}`);let f=oo.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}oo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Fa=class extends $i{constructor(e){super(e)}load(e,t,i,r){let s=new cn,o=new Hc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},vs=class extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ff=new at,ig=new I,rg=new I,Ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ig.setFromMatrixPosition(e.matrixWorld),t.position.copy(ig),rg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ff.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ff,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===go||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pc=new I,mc=new $t,ki=new I,Ba=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pc,mc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(pc,mc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wr=new I,sg=new Ke,og=new Ke,ln=class extends Ba{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,sg,og),t.subVectors(og,sg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ho*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mf=class extends Ao{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ys*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ka=class extends vs{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Mf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Sf=class extends Ao{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},bs=class extends vs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Sf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ri=class extends Ba{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wf=class extends Ao{constructor(){super(new Ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new wf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},za=class extends vs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Tr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ha=class extends Ut{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var df=new WeakMap,Va=class extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Hi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{df.has(o)===!0?(r&&r(df.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),df.set(l,c),Hi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ao=-90,lo=1,Ro=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ln(ao,lo,e,t);r.layers=this.layers,this.add(r);let s=new ln(ao,lo,e,t);s.layers=this.layers,this.add(s);let o=new ln(ao,lo,e,t);o.layers=this.layers,this.add(o);let a=new ln(ao,lo,e,t);a.layers=this.layers,this.add(a);let l=new ln(ao,lo,e,t);l.layers=this.layers,this.add(l);let c=new ln(ao,lo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vc=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var nd="\\[\\]\\.:\\/",ob=new RegExp("["+nd+"]","g"),id="[^"+nd+"]",ab="[^"+nd.replace("\\.","")+"]",lb=/((?:WC+[\/:])*)/.source.replace("WC",id),cb=/(WCOD+)?/.source.replace("WCOD",ab),ub=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",id),hb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",id),fb=new RegExp("^"+lb+cb+ub+hb+"$"),db=["material","materials","bones","map"],Ef=class{constructor(e,t,i){let r=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ob,"")}static parseTrackName(e){let t=fb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);db.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Ef;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YR=new Float32Array(1);var Kr=class extends qr{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var ag=new at,ei=class{constructor(e,t,i=0,r=1/0){this.ray=new Gi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ag.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ag),this}intersectObject(e,t=!0,i=[]){return Tf(e,this,i,t),i.sort(lg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Tf(e[r],this,i,t);return i.sort(lg),i}};function lg(n,e){return n.distance-e.distance}function Tf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Tf(s[o],e,t,!0)}}var Jr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Af=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};var cg=new I,gc=new I,co=new I,uo=new I,pf=new I,pb=new I,mb=new I,Ga=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){cg.subVectors(e,this.start),gc.subVectors(this.end,this.start);let i=gc.dot(gc);if(i===0)return 0;let s=gc.dot(cg)/i;return t&&(s=ft(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=pb,i=mb){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;co.subVectors(c,a),uo.subVectors(u,l),pf.subVectors(a,l);let h=co.dot(co),f=uo.dot(uo),d=uo.dot(pf);if(h<=r&&f<=r)return t.copy(a),i.copy(l),t.distanceToSquared(i);if(h<=r)s=0,o=d/f,o=ft(o,0,1);else{let g=co.dot(pf);if(f<=r)o=0,s=ft(-g/h,0,1);else{let x=co.dot(uo),m=h*f-x*x;m!==0?s=ft((x*d-g*f)/m,0,1):s=0,o=(x*s+d)/f,o<0?(o=0,s=ft(-g/h,0,1)):o>1&&(o=1,s=ft((x-g)/h,0,1))}}return t.copy(a).addScaledVector(co,s),i.copy(l).addScaledVector(uo,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Wa=class extends Ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function rd(n,e,t,i){let r=gb(i);switch(t){case Gf:return n*e;case Jc:return n*e/r.components*r.byteLength;case jc:return n*e/r.components*r.byteLength;case ts:return n*e*2/r.components*r.byteLength;case Qc:return n*e*2/r.components*r.byteLength;case Wf:return n*e*3/r.components*r.byteLength;case Sn:return n*e*4/r.components*r.byteLength;case eu:return n*e*4/r.components*r.byteLength;case Za:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ja:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nu:case ru:return Math.max(n,16)*Math.max(e,8)/4;case tu:case iu:return Math.max(n,8)*Math.max(e,8)/2;case su:case ou:case lu:case cu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case au:case Qa:case uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eu:case Tu:case Au:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ru:case Cu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case el:case Pu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gb(n){switch(n){case Dn:case kf:return{byteLength:1,components:1};case No:case zf:case Yn:return{byteLength:2,components:1};case Zc:case Kc:return{byteLength:2,components:4};case Pi:case Yc:case Gn:return{byteLength:4,components:1};case Hf:case Vf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function p0(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yb(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var _b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vb=`#ifdef USE_ALPHAHASH
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
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eb=`#ifdef USE_AOMAP
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
#endif`,Tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ab=`#ifdef USE_BATCHING
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
#endif`,Rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lb=`#ifdef USE_IRIDESCENCE
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
#endif`,Db=`#ifdef USE_BUMPMAP
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
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vb=`#define PI 3.141592653589793
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
} // validated`,Gb=`vec3 transformedNormal = objectNormal;
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
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
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
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uM=`#ifdef USE_ENVMAP
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
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
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
#endif`,gM=`uniform sampler2D dfgLUT;
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
}`,xM=`
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
#endif`,yM=`#if defined( RE_IndirectDiffuse )
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,bM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
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
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
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
#endif`,OM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
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
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iS=`float getShadowMask() {
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
}`,rS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,oS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aS=`#ifdef USE_SKINNING
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
#endif`,lS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fS=`#ifdef USE_TRANSMISSION
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
#endif`,dS=`#ifdef USE_TRANSMISSION
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_S=`uniform sampler2D t2D;
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`uniform float backgroundBlurriness;
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`#include <common>
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
}`,ES=`#if DEPTH_PACKING == 3200
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
}`,TS=`#define DISTANCE
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
}`,AS=`#define DISTANCE
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
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`uniform float scale;
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
}`,IS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,DS=`uniform vec3 diffuse;
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
}`,NS=`#define LAMBERT
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
}`,OS=`#define LAMBERT
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
}`,US=`#define MATCAP
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
}`,FS=`#define MATCAP
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
}`,BS=`#define NORMAL
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
}`,kS=`#define NORMAL
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
}`,zS=`#define PHONG
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
}`,HS=`#define PHONG
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
}`,VS=`#define STANDARD
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
}`,GS=`#define STANDARD
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
}`,WS=`#define TOON
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
}`,XS=`#define TOON
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
}`,qS=`uniform float size;
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
}`,$S=`uniform vec3 diffuse;
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
}`,YS=`#include <common>
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
}`,ZS=`uniform vec3 color;
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
}`,KS=`uniform float rotation;
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
}`,JS=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:_b,alphahash_pars_fragment:vb,alphamap_fragment:bb,alphamap_pars_fragment:Mb,alphatest_fragment:Sb,alphatest_pars_fragment:wb,aomap_fragment:Eb,aomap_pars_fragment:Tb,batching_pars_vertex:Ab,batching_vertex:Rb,begin_vertex:Cb,beginnormal_vertex:Pb,bsdfs:Ib,iridescence_fragment:Lb,bumpmap_pars_fragment:Db,clipping_planes_fragment:Nb,clipping_planes_pars_fragment:Ob,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Fb,color_fragment:Bb,color_pars_fragment:kb,color_pars_vertex:zb,color_vertex:Hb,common:Vb,defaultnormal_vertex:Gb,displacementmap_pars_vertex:Wb,displacementmap_vertex:Xb,emissivemap_fragment:qb,emissivemap_pars_fragment:$b,colorspace_fragment:Yb,colorspace_pars_fragment:Zb,envmap_fragment:Kb,envmap_common_pars_fragment:Jb,envmap_pars_fragment:jb,envmap_pars_vertex:Qb,envmap_physical_pars_fragment:uM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:hM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:xM,lights_fragment_maps:yM,lights_fragment_end:_M,lightprobes_pars_fragment:vM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:wM,map_fragment:EM,map_pars_fragment:TM,map_particle_fragment:AM,map_particle_pars_fragment:RM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:PM,morphinstance_vertex:IM,morphcolor_vertex:LM,morphnormal_vertex:DM,morphtarget_pars_vertex:NM,morphtarget_vertex:OM,normal_fragment_begin:UM,normal_fragment_maps:FM,normal_pars_fragment:BM,normal_pars_vertex:kM,normal_vertex:zM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:XM,opaque_fragment:qM,packing:$M,premultiplied_alpha_fragment:YM,project_vertex:ZM,dithering_fragment:KM,dithering_pars_fragment:JM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:eS,shadowmap_pars_vertex:tS,shadowmap_vertex:nS,shadowmask_pars_fragment:iS,skinbase_vertex:rS,skinning_pars_vertex:sS,skinning_vertex:oS,skinnormal_vertex:aS,specularmap_fragment:lS,specularmap_pars_fragment:cS,tonemapping_fragment:uS,tonemapping_pars_fragment:hS,transmission_fragment:fS,transmission_pars_fragment:dS,uv_pars_fragment:pS,uv_pars_vertex:mS,uv_vertex:gS,worldpos_vertex:xS,background_vert:yS,background_frag:_S,backgroundCube_vert:vS,backgroundCube_frag:bS,cube_vert:MS,cube_frag:SS,depth_vert:wS,depth_frag:ES,distance_vert:TS,distance_frag:AS,equirect_vert:RS,equirect_frag:CS,linedashed_vert:PS,linedashed_frag:IS,meshbasic_vert:LS,meshbasic_frag:DS,meshlambert_vert:NS,meshlambert_frag:OS,meshmatcap_vert:US,meshmatcap_frag:FS,meshnormal_vert:BS,meshnormal_frag:kS,meshphong_vert:zS,meshphong_frag:HS,meshphysical_vert:VS,meshphysical_frag:GS,meshtoon_vert:WS,meshtoon_frag:XS,points_vert:qS,points_frag:$S,shadow_vert:YS,shadow_frag:ZS,sprite_vert:KS,sprite_frag:JS},Ge={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Wn={basic:{uniforms:Nn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Nn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Nn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Nn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Nn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Je(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Nn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Nn([Ge.points,Ge.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Nn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Nn([Ge.common,Ge.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Nn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Nn([Ge.sprite,Ge.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Nn([Ge.common,Ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Nn([Ge.lights,Ge.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Wn.physical={uniforms:Nn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var Lu={r:0,b:0,g:0},jS=new at,m0=new ht;m0.set(-1,0,0,0,1,0,0,0,1);function QS(n,e,t,i,r,s){let o=new Je(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let v=b.backgroundBlurriness>0;S=e.get(S,v)}return S}function g(b){let S=!1,v=d(b);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,S){let v=d(S);v&&v.isCubeTexture?(c===void 0&&(c=new pt(new Xi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Es(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jS.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(m0),c.material.toneMapped=xt.getTransfer(v.colorSpace)!==Lt,(u!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new pt(new hi(2,2),new yn({name:"BackgroundMaterial",uniforms:Es(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=xt.getTransfer(v.colorSpace)!==Lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,S){b.getRGB(Lu,td(n)),t.buffers.color.setClear(Lu.r,Lu.g,Lu.b,S,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:x,dispose:p}}function ew(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(B,V,z,O,X){let Q=!1,q=h(B,O,z,V);s!==q&&(s=q,c(s.object)),Q=d(B,O,z,X),Q&&g(B,O,z,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(B,V,z,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(B){return n.bindVertexArray(B)}function u(B){return n.deleteVertexArray(B)}function h(B,V,z,O){let X=O.wireframe===!0,Q=i[V.id];Q===void 0&&(Q={},i[V.id]=Q);let q=B.isInstancedMesh===!0?B.id:0,ye=Q[q];ye===void 0&&(ye={},Q[q]=ye);let Z=ye[z.id];Z===void 0&&(Z={},ye[z.id]=Z);let G=Z[X];return G===void 0&&(G=f(l()),Z[X]=G),G}function f(B){let V=[],z=[],O=[];for(let X=0;X<t;X++)V[X]=0,z[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:z,attributeDivisors:O,object:B,attributes:{},index:null}}function d(B,V,z,O){let X=s.attributes,Q=V.attributes,q=0,ye=z.getAttributes();for(let Z in ye)if(ye[Z].location>=0){let ee=X[Z],Me=Q[Z];if(Me===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(Me=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(Me=B.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;q++}return s.attributesNum!==q||s.index!==O}function g(B,V,z,O){let X={},Q=V.attributes,q=0,ye=z.getAttributes();for(let Z in ye)if(ye[Z].location>=0){let ee=Q[Z];ee===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor));let Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),X[Z]=Me,q++}s.attributes=X,s.attributesNum=q,s.index=O}function x(){let B=s.newAttributes;for(let V=0,z=B.length;V<z;V++)B[V]=0}function m(B){p(B,0)}function p(B,V){let z=s.newAttributes,O=s.enabledAttributes,X=s.attributeDivisors;z[B]=1,O[B]===0&&(n.enableVertexAttribArray(B),O[B]=1),X[B]!==V&&(n.vertexAttribDivisor(B,V),X[B]=V)}function b(){let B=s.newAttributes,V=s.enabledAttributes;for(let z=0,O=V.length;z<O;z++)V[z]!==B[z]&&(n.disableVertexAttribArray(z),V[z]=0)}function S(B,V,z,O,X,Q,q){q===!0?n.vertexAttribIPointer(B,V,z,X,Q):n.vertexAttribPointer(B,V,z,O,X,Q)}function v(B,V,z,O){x();let X=O.attributes,Q=z.getAttributes(),q=V.defaultAttributeValues;for(let ye in Q){let Z=Q[ye];if(Z.location>=0){let G=X[ye];if(G===void 0&&(ye==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),ye==="instanceColor"&&B.instanceColor&&(G=B.instanceColor)),G!==void 0){let ee=G.normalized,Me=G.itemSize,Ce=e.get(G);if(Ce===void 0)continue;let K=Ce.buffer,le=Ce.type,k=Ce.bytesPerElement,te=le===n.INT||le===n.UNSIGNED_INT||G.gpuType===Yc;if(G.isInterleavedBufferAttribute){let me=G.data,Ee=me.isInterleavedBuffer===!0?me.stride:me.itemSize,We=G.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Oe=0;Oe<Z.locationSize;Oe++)p(Z.location+Oe,me.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Oe=0;Oe<Z.locationSize;Oe++)m(Z.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Oe=0;Oe<Z.locationSize;Oe++)S(Z.location+Oe,Me/Z.locationSize,le,ee,Ee*k,(We+Me/Z.locationSize*Oe)*k,te)}else{if(G.isInstancedBufferAttribute){for(let me=0;me<Z.locationSize;me++)p(Z.location+me,G.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let me=0;me<Z.locationSize;me++)m(Z.location+me);n.bindBuffer(n.ARRAY_BUFFER,K);for(let me=0;me<Z.locationSize;me++)S(Z.location+me,Me/Z.locationSize,le,ee,Me*k,Me/Z.locationSize*me*k,te)}}else if(q!==void 0){let ee=q[ye];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(Z.location,ee);break;case 3:n.vertexAttrib3fv(Z.location,ee);break;case 4:n.vertexAttrib4fv(Z.location,ee);break;default:n.vertexAttrib1fv(Z.location,ee)}}}}b()}function M(){L();for(let B in i){let V=i[B];for(let z in V){let O=V[z];for(let X in O){let Q=O[X];for(let q in Q)u(Q[q].object),delete Q[q];delete O[X]}}delete i[B]}}function E(B){if(i[B.id]===void 0)return;let V=i[B.id];for(let z in V){let O=V[z];for(let X in O){let Q=O[X];for(let q in Q)u(Q[q].object),delete Q[q];delete O[X]}}delete i[B.id]}function y(B){for(let V in i){let z=i[V];for(let O in z){let X=z[O];if(X[B.id]===void 0)continue;let Q=X[B.id];for(let q in Q)u(Q[q].object),delete Q[q];delete X[B.id]}}}function w(B){for(let V in i){let z=i[V],O=B.isInstancedMesh===!0?B.id:0,X=z[O];if(X!==void 0){for(let Q in X){let q=X[Q];for(let ye in q)u(q[ye].object),delete q[ye];delete X[Q]}delete z[O],Object.keys(z).length===0&&delete i[V]}}}function L(){D(),o=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function tw(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function nw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(y){return!(y!==Sn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let w=y===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Dn&&y!==Gn&&!w&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:E}}function iw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new gn,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let b=s?0:i,S=b*4,v=p.clippingState||null;l.value=v,v=u(g,f,S,d);for(let M=0;M!==S;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ol=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ra(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xi(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:fi});s.uniforms.tEquirect.value=t;let o=new pt(r,s),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=qt),new Ro(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},$g=256,rw=3,sw=20,g0=256,x0=16,ow=3,aw=new I,lw=new Je,Fo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ro(1,10,null),this._boxMesh=new pt(new Xi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=aw}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(lw));let m=new Ro(i,r,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max($g,jf(e))}_fromTexture(e,t){e.mapping===Ms||e.mapping===Lo?this._setSize(e.image.length===0?$g:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Yg(e,!1,!1),i=Math.log2(e)-rw;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Yg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ms||e.mapping===Lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=cw(),this._integrationMaterial=uw());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/x0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-ow)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(g0*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=hw());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function Yg(n,e,t){return new ol(n,{minFilter:pi,generateMipmaps:e,type:Yn,colorSpace:Hn,depthBuffer:t})}function al(n,e,t){return new yn({name:n,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:t,side:Mn,blending:fi,depthTest:!1,depthWrite:!1})}function cw(){return al("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${g0}u

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
	`)}function uw(){return al("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:x0}},`

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
	`)}function hw(){return al("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${sw}
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
	`)}function Zg(){return al("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Kg(){return al("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fw(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Xc||d===qc)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new ol(g.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Xc||d===qc,x=d===Ms||d===Lo;if(g||x){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Fo(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let b=f.image;return g&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new Fo(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Xc?f.mapping=Ms:d===qc&&(f.mapping=Lo),f}function l(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function dw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ms("WebGLRenderer: "+i+" extension not supported."),r}}}function pw(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(g=>delete r[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let x=s.get(g);x&&(e.remove(x),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return r[x.id]!==void 0||(x.addEventListener("dispose",a),r[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(g){let x=g.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function h(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let b=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?ba:va,v=new S(Math.ceil(b/3)*6,1),M=v.array;if(x!==null){let y=x.array;p=x.version;for(let w=0,L=0;w<b;w+=3){let D=y[w+0],B=y[w+1],V=y[w+2];M[L++]=D,M[L++]=B,M[L++]=B,M[L++]=V,M[L++]=V,M[L++]=D}}else{p=m.version;for(let y=0,w=0;y<b;y+=3){let L=y+0,D=y+1,B=y+2;M[w++]=L,M[w++]=D,M[w++]=D,M[w++]=B,M[w++]=B,M[w++]=L}}v.version=p;let E=s.get(g);E&&e.remove(E),s.set(g,v)}function f(g){let x=s.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&h(g)}else h(g);return s.get(g)}function d(){for(let g in r){let x=r[g].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function mw(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,s,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function gw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function xw(n,e,t){let i=new WeakMap,r=new Mt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let L=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*M*4*h),y=new _a(E,v,M,h);y.type=Gn,y.needsUpdate=!0;let w=S*4;for(let D=0;D<h;D++){let B=m[D],V=p[D],z=b[D],O=v*M*4*D;for(let X=0;X<B.count;X++){let Q=X*w;d===!0&&(r.fromBufferAttribute(B,X),E[O+Q+0]=r.x,E[O+Q+1]=r.y,E[O+Q+2]=r.z,E[O+Q+3]=0),g===!0&&(r.fromBufferAttribute(V,X),E[O+Q+4]=r.x,E[O+Q+5]=r.y,E[O+Q+6]=r.z,E[O+Q+7]=0),x===!0&&(r.fromBufferAttribute(z,X),E[O+Q+8]=r.x,E[O+Q+9]=r.y,E[O+Q+10]=r.z,E[O+Q+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new Ke(v,M)},i.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function yw(n,e,t,i,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var _w={[Lf]:"LINEAR_TONE_MAPPING",[Df]:"REINHARD_TONE_MAPPING",[Nf]:"CINEON_TONE_MAPPING",[Io]:"ACES_FILMIC_TONE_MAPPING",[Uf]:"AGX_TONE_MAPPING",[Ff]:"NEUTRAL_TONE_MAPPING",[Of]:"CUSTOM_TONE_MAPPING"};function vw(n,e,t,i,r,s){let o=new sn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ut;u.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let h=new Lc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pt(u,h),d=new Ri(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,b=null,S=[],v=!1;this.setSize=function(M,E){o.setSize(M,E),a!==null&&a.setSize(M,E),l!==null&&l.setSize(M,E);for(let y=0;y<S.length;y++){let w=S[y];w.setSize&&w.setSize(M,E)}},this.setEffects=function(M){S=M,v=S.length>0&&S[0].isRenderPass===!0;let E=o.width,y=o.height;S.length>0&&a===null&&(a=new sn(E,y,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new sn(E,y,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));let w=r===!0&&S.some(L=>L.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new br(E,y),s===!0&&(c.format=Ar,c.type=ws)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let L=0;L<S.length;L++){let D=S[L];D.setSize&&D.setSize(E,y),w&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(M,E){if(m||M.toneMapping===di&&S.length===0)return!1;if(b=E,E!==null){let y=E.width,w=E.height;(o.width!==y||o.height!==w)&&this.setSize(y,w)}return v===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=di,!0},this.hasRenderPass=function(){return v},this.end=function(M,E){M.toneMapping=p,m=!0;let y=o,w=a;for(let L=0;L<S.length;L++){let D=S[L];D.enabled!==!1&&(D.render(M,w,y,E),D.needsSwap!==!1&&(y=w,w=w===a?l:a))}if(g!==M.outputColorSpace||x!==M.toneMapping){g=M.outputColorSpace,x=M.toneMapping,h.defines={},xt.getTransfer(g)===Lt&&(h.defines.SRGB_TRANSFER="");let L=_w[x];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(b),M.render(f,d),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var y0=new cn,_0=new br(1,1),v0=new Ca(1),b0=new _a,M0=new Rc,S0=new Ra,Jg=[],jg=[],Qg=new Float32Array(16),e0=new Float32Array(9),t0=new Float32Array(4);function Bo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Jg[r];if(s===void 0&&(s=new Float32Array(r),Jg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ou(n,e){let t=jg[e];t===void 0&&(t=new Int32Array(e),jg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function Sw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function ww(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function Ew(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;t0.set(i),n.uniformMatrix2fv(this.addr,!1,t0),fn(t,i)}}function Tw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;e0.set(i),n.uniformMatrix3fv(this.addr,!1,e0),fn(t,i)}}function Aw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;Qg.set(i),n.uniformMatrix4fv(this.addr,!1,Qg),fn(t,i)}}function Rw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function Pw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function Iw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function Lw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function Nw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function Ow(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function Uu(n){return n.version===0&&(n.compareFunction=Yf,n.needsUpdate=!0),n}function Uw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Uu(_0):s=y0,t.setTexture2D(e||s,r)}function Fw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||M0,r)}function Bw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Uu(v0):s=S0,t.setTextureCube(e||s,r)}function kw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||b0,r)}function zw(n){switch(n){case 5126:return bw;case 35664:return Mw;case 35665:return Sw;case 35666:return ww;case 35674:return Ew;case 35675:return Tw;case 35676:return Aw;case 5124:case 35670:return Rw;case 35667:case 35671:return Cw;case 35668:case 35672:return Pw;case 35669:case 35673:return Iw;case 5125:return Lw;case 36294:return Dw;case 36295:return Nw;case 36296:return Ow;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return kw}}function Hw(n,e){n.uniform1fv(this.addr,e)}function Vw(n,e){let t=Bo(e,this.size,2);n.uniform2fv(this.addr,t)}function Gw(n,e){let t=Bo(e,this.size,3);n.uniform3fv(this.addr,t)}function Ww(n,e){let t=Bo(e,this.size,4);n.uniform4fv(this.addr,t)}function Xw(n,e){let t=Bo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qw(n,e){let t=Bo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $w(n,e){let t=Bo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yw(n,e){n.uniform1iv(this.addr,e)}function Zw(n,e){n.uniform2iv(this.addr,e)}function Kw(n,e){n.uniform3iv(this.addr,e)}function Jw(n,e){n.uniform4iv(this.addr,e)}function jw(n,e){n.uniform1uiv(this.addr,e)}function Qw(n,e){n.uniform2uiv(this.addr,e)}function eE(n,e){n.uniform3uiv(this.addr,e)}function tE(n,e){n.uniform4uiv(this.addr,e)}function nE(n,e,t){let i=this.cache,r=e.length,s=Ou(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Uu(_0):o=y0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function iE(n,e,t){let i=this.cache,r=e.length,s=Ou(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||M0,s[o])}function rE(n,e,t){let i=this.cache,r=e.length,s=Ou(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Uu(v0):o=S0;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function sE(n,e,t){let i=this.cache,r=e.length,s=Ou(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||b0,s[o])}function oE(n){switch(n){case 5126:return Hw;case 35664:return Vw;case 35665:return Gw;case 35666:return Ww;case 35674:return Xw;case 35675:return qw;case 35676:return $w;case 5124:case 35670:return Yw;case 35667:case 35671:return Zw;case 35668:case 35672:return Kw;case 35669:case 35673:return Jw;case 5125:return jw;case 36294:return Qw;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}var ad=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zw(t.type)}},ld=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oE(t.type)}},cd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},sd=/(\w+)(\])?(\[|\.)?/g;function n0(n,e){n.seq.push(e),n.map[e.id]=e}function aE(n,e,t){let i=n.name,r=i.length;for(sd.lastIndex=0;;){let s=sd.exec(i),o=sd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){n0(t,c===void 0?new ad(a,n,e):new ld(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new cd(a),n0(t,h)),t=h}}}var Uo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);aE(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function i0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var lE=37297,cE=0;function uE(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var r0=new ht;function hE(n){xt._getMatrix(r0,xt.workingColorSpace,n);let e=`mat3( ${r0.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case xa:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function s0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+uE(n.getShaderSource(e),a)}else return s}function fE(n,e){let t=hE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var dE={[Lf]:"Linear",[Df]:"Reinhard",[Nf]:"Cineon",[Io]:"ACESFilmic",[Uf]:"AgX",[Ff]:"Neutral",[Of]:"Custom"};function pE(n,e){let t=dE[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Du=new I;function mE(){xt.getLuminanceCoefficients(Du);let n=Du.x.toFixed(4),e=Du.y.toFixed(4),t=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function xE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sl(n){return n!==""}function o0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function a0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _E=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(n){return n.replace(_E,vE)}function vE(n,e){let t=mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ud(t)}var bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(n){return n.replace(bE,ME)}function ME(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function c0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var SE={[Xa]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function wE(n){return SE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var EE={[Lo]:"ENVMAP_MODE_REFRACTION"};function TE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":EE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var AE={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[Ag]:"ENVMAP_BLENDING_MIX",[Rg]:"ENVMAP_BLENDING_ADD"};function RE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":AE[n.combine]||"ENVMAP_BLENDING_NONE"}function CE(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=wE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=TE(t),h=RE(t),f=gE(t),d=xE(s),g=r.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(sl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(sl).join(`
`),m.length>0&&(m+=`
`)):(x=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),m=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?mt.tonemapping_pars_fragment:"",t.toneMapping!==di?pE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,fE("linearToOutputTexel",t.outputColorSpace),mE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sl).join(`
`)),o=ud(o),o=o0(o,t),o=a0(o,t),a=ud(a),a=o0(a,t),a=a0(a,t),o=l0(o),a=l0(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=p+x+o,S=p+m+a,v=i0(r,r.VERTEX_SHADER,b),M=i0(r,r.FRAGMENT_SHADER,S);r.attachShader(g,v),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(D){if(n.debug.checkShaderErrors){let B=r.getProgramInfoLog(g)||"",V=r.getShaderInfoLog(v)||"",z=r.getShaderInfoLog(M)||"",O=B.trim(),X=V.trim(),Q=z.trim(),q=!0,ye=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,v,M);else{let Z=s0(r,v,"vertex"),G=s0(r,M,"fragment");ct("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+Z+`
`+G)}else O!==""?it("WebGLProgram: Program Info Log:",O):(X===""||Q==="")&&(ye=!1);ye&&(D.diagnostics={runnable:q,programLog:O,vertexShader:{log:X,prefix:x},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(v),r.deleteShader(M),y=new Uo(r,g),w=yE(r,g)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(g,lE)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=M,this}var PE=0,hd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fd(e),t.set(e,i)),i}},fd=class{constructor(e){this.id=PE++,this.code=e,this.usedTimes=0}};function IE(n){return n===ts||n===Qa||n===el}function LE(n,e,t,i,r,s){let o=new vo,a=new hd,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,w,L,D,B,V){let z=D.fog,O=B.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||X,Q),ye=f[y.type],Z=i.precision;y.precision!==null&&(Z=i.getMaxPrecision(y.precision),Z!==y.precision&&it("WebGLProgram.getParameters:",y.precision,"not supported, using",Z,"instead."));let G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=G!==void 0?G.length:0,Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let Ce,K,le,k;if(ye){let Ie=Wn[ye];Ce=Ie.vertexShader,K=Ie.fragmentShader}else{Ce=y.vertexShader,K=y.fragmentShader;let Ie=a.getVertexShaderStage(y),dt=a.getFragmentShaderStage(y);a.update(y,Ie,dt),le=Ie.id,k=dt.id}let te=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ee=B.isInstancedMesh===!0,We=B.isBatchedMesh===!0,Oe=!!y.map,Ye=!!y.matcap,ue=!!q,Re=ue&&q.isPMREMTexture===!0,He=!!y.aoMap,Le=!!y.lightMap,Xe=!!y.bumpMap&&y.wireframe===!1,qe=!!y.normalMap,ot=!!y.displacementMap,se=!!y.emissiveMap,ke=!!y.metalnessMap,et=!!y.roughnessMap,xe=y.anisotropy>0,A=y.clearcoat>0,j=y.diffuseRoughness>0,J=y.dispersion>0,Te=y.retroreflectivity>0,$=y.iridescence>0,ve=y.sheen>0,be=y.transmission>0,Se=xe&&!!y.anisotropyMap,P=A&&!!y.clearcoatMap,T=A&&!!y.clearcoatNormalMap,W=A&&!!y.clearcoatRoughnessMap,_e=j&&!!y.diffuseRoughnessMap,de=$&&!!y.iridescenceMap,he=$&&!!y.iridescenceThicknessMap,pe=ve&&!!y.sheenColorMap,ie=ve&&!!y.sheenRoughnessMap,ce=!!y.specularMap,De=!!y.specularColorMap,F=!!y.specularIntensityMap,ge=be&&!!y.transmissionMap,fe=be&&!!y.thicknessMap,Be=!!y.gradientMap,Ne=!!y.alphaMap,Ue=y.alphaTest>0,Fe=!!y.alphaHash,st=!!y.extensions,Y=di;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Y=n.toneMapping);let Pe=Re?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,rt={shaderID:ye,shaderType:y.type,shaderName:y.name,vertexShader:Ce,fragmentShader:K,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:k,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:Z,batching:We,batchingColor:We&&B._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&B.instanceColor!==null,instancingMorph:Ee&&B.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:Ye,envMap:ue,envMapMode:ue&&q.mapping,envMapPMREM:Re,envMapMaxLod:Re?Pe.length-1:null,envMapSize:Re?Pe[0].width:null,aoMap:He,lightMap:Le,bumpMap:Xe,normalMap:qe,displacementMap:ot,emissiveMap:se,normalMapObjectSpace:qe&&y.normalMapType===Lg,normalMapTangentSpace:qe&&y.normalMapType===nl,packedNormalMap:qe&&y.normalMapType===nl&&IE(y.normalMap.format),metalnessMap:ke,roughnessMap:et,anisotropy:xe,anisotropyMap:Se,clearcoat:A,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:W,diffuseRoughness:j,diffuseRoughnessMap:_e,dispersion:J,retroreflection:Te,iridescence:$,iridescenceMap:de,iridescenceThicknessMap:he,sheen:ve,sheenColorMap:pe,sheenRoughnessMap:ie,specularMap:ce,specularColorMap:De,specularIntensityMap:F,transmission:be,transmissionMap:ge,thicknessMap:fe,gradientMap:Be,opaque:y.transparent===!1&&y.blending===Yi&&y.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ue,alphaHash:Fe,combine:y.combine,mapUv:Oe&&d(y.map.channel),aoMapUv:He&&d(y.aoMap.channel),lightMapUv:Le&&d(y.lightMap.channel),bumpMapUv:Xe&&d(y.bumpMap.channel),normalMapUv:qe&&d(y.normalMap.channel),displacementMapUv:ot&&d(y.displacementMap.channel),emissiveMapUv:se&&d(y.emissiveMap.channel),metalnessMapUv:ke&&d(y.metalnessMap.channel),roughnessMapUv:et&&d(y.roughnessMap.channel),anisotropyMapUv:Se&&d(y.anisotropyMap.channel),clearcoatMapUv:P&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:de&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:ie&&d(y.sheenRoughnessMap.channel),specularMapUv:ce&&d(y.specularMap.channel),specularColorMapUv:De&&d(y.specularColorMap.channel),specularIntensityMapUv:F&&d(y.specularIntensityMap.channel),transmissionMapUv:ge&&d(y.transmissionMap.channel),thicknessMapUv:fe&&d(y.thicknessMap.channel),alphaMapUv:Ne&&d(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(qe||xe),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Oe||Ne),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&qe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Me,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.filter(Ie=>Ie.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Y,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===Lt,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&xt.getTransfer(y.emissiveMap.colorSpace)===Lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===Mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function x(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(w,y),p(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapPMREM),y.push(w.envMapMaxLod),y.push(w.envMapSize),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.diffuseRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.numLightProbeGrids),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function p(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function b(y){let w=f[y.type],L;if(w){let D=Wn[w];L=il.clone(D.uniforms)}else L=y.uniforms;return L}function S(y,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new CE(n,w,y,r),c.push(L),u.set(w,L)),L}function v(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:b,acquireProgram:S,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:E}}function DE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function NE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function u0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function h0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,x,m,p){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},n[e]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=g,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=m,b.group=p),e++,b}function l(f,d,g,x,m,p,b){b.reversedDepth===!0&&(m=-m);let S=a(f,d,g,x,m,p);g.transmission>0?i.push(S):g.transparent===!0?r.push(S):t.push(S)}function c(f,d,g,x,m,p){let b=a(f,d,g,x,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function u(f,d){t.length>1&&t.sort(f||NE),i.length>1&&i.sort(d||u0),r.length>1&&r.sort(d||u0)}function h(){for(let f=e,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function OE(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new h0,n.set(i,[o])):r>=s.length?(o=new h0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function UE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Je};break;case"SpotLight":t={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function FE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var BE=0;function kE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zE(n){let e=new UE,t=FE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let r=new I,s=new at,o=new at;function a(c){let u=0,h=0,f=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,b=0,S=0,v=0,M=0,E=0,y=0,w=0,L=0,D=0;c.sort(kE);for(let V=0,z=c.length;V<z;V++){let O=c[V],X=O.color,Q=O.intensity,q=O.distance,ye=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ts?ye=O.shadow.map.texture:ye=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=X.r*Q,h+=X.g*Q,f+=X.b*Q;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(O.sh.coefficients[Z],Q);D++}else if(O.isSunLight){let Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let G=O.shadow,ee=t.get(O);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=ye;let Me=G.getViewportCount();for(let Ce=0;Ce<Me;Ce++)i.sunShadowMatrix[x+Ce]=G.getMatrix(Ce),i.sunShadowCascade[x+Ce]=G._cascadeData[Ce];x+=Me,g++}i.sun[d]=Z,d++}else if(O.isDirectionalLight){let Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let G=O.shadow,ee=t.get(O);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=ye,i.directionalShadowMatrix[m]=O.shadow.matrix,M++}i.directional[m]=Z,m++}else if(O.isSpotLight){let Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(X).multiplyScalar(Q),Z.distance=q,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,i.spot[b]=Z;let G=O.shadow;if(O.map&&(i.spotLightMap[w]=O.map,w++,G.updateMatrices(O),O.castShadow&&L++),i.spotLightMatrix[b]=G.matrix,O.castShadow){let ee=t.get(O);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,i.spotShadow[b]=ee,i.spotShadowMap[b]=ye,y++}b++}else if(O.isRectAreaLight){let Z=e.get(O);Z.color.copy(X).multiplyScalar(Q),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=Z,S++}else if(O.isPointLight){let Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){let G=O.shadow,ee=t.get(O);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=ye,i.pointShadowMatrix[p]=O.shadow.matrix,E++}i.point[p]=Z,p++}else if(O.isHemisphereLight){let Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(Q),Z.groundColor.copy(O.groundColor).multiplyScalar(Q),i.hemi[v]=Z,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let B=i.hash;(B.sunLength!==d||B.directionalLength!==m||B.pointLength!==p||B.spotLength!==b||B.rectAreaLength!==S||B.hemiLength!==v||B.numSunShadows!==g||B.numDirectionalShadows!==M||B.numPointShadows!==E||B.numSpotShadows!==y||B.numSpotMaps!==w||B.numLightProbes!==D)&&(i.sun.length=d,i.directional.length=m,i.spot.length=b,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,B.sunLength=d,B.directionalLength=m,B.pointLength=p,B.spotLength=b,B.rectAreaLength=S,B.hemiLength=v,B.numSunShadows=g,B.numDirectionalShadows=M,B.numPointShadows=E,B.numSpotShadows=y,B.numSpotMaps=w,B.numLightProbes=D,i.version=BE++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let b=0,S=c.length;b<S;b++){let v=c[b];if(v.isSunLight){let M=i.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function f0(n){let e=new zE(n),t=[],i=[],r=[];function s(h){u.camera=h,t.length=0,i.length=0,r.length=0}function o(h){h.isLightProbeGrid?r.push(h):t.push(h)}function a(h){i.push(h)}function l(){e.setup(t),r.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function HE(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new f0(n),e.set(r,[a])):s>=o.length?(a=new f0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var VE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
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
}`,WE=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],XE=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],d0=new at,rl=new I,od=new I;function qE(n,e,t){let i=new $r,r=new Ke,s=new Ke,o=new Mt,a=new Dc,l=new Nc,c={},u=t.maxTextureSize,h={[ti]:Mn,[Mn]:ti,[Dt]:Dt},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:VE,fragmentShader:GE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let p=this.type;this.render=function(E,y,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===fg&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xa);let L=n.getRenderTarget(),D=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),V=n.state;V.setBlending(fi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=p!==this.type;z&&y.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(X=>X.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,X=E.length;O<X;O++){let Q=E[O],q=Q.shadow;if(q===void 0){it("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let ye=q.getFrameExtents();r.multiply(ye),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ye.x),r.x=s.x*ye.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ye.y),r.y=s.y*ye.y,q.mapSize.y=s.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Co){if(Q.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new sn(r.x,r.y,{format:ts,type:Yn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new br(r.x,r.y,Gn),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=xr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt}else Q.isPointLight?(q.map=new ol(r.x),q.map.depthTexture=new Ca(r.x,Pi)):(q.map=new sn(r.x,r.y),q.map.depthTexture=new br(r.x,r.y,Pi)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=xr,this.type===Xa?(q.map.depthTexture.compareFunction=Z?$f:qf,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);let G=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Q.isPointLight!==!0&&q.updateMatrices(Q,w);let ee=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:w.layers;for(let Me=0;Me<G;Me++){let Ce=q.getCamera(Me);if(Q.isPointLight){let K=q.camera,le=q.matrix,k=Q.distance||K.far;k!==K.far&&(K.far=k,K.updateProjectionMatrix()),rl.setFromMatrixPosition(Q.matrixWorld),K.position.copy(rl),od.copy(K.position),od.add(WE[Me]),K.up.copy(XE[Me]),K.lookAt(od),K.updateMatrixWorld(),le.makeTranslation(-rl.x,-rl.y,-rl.z),d0.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(d0,K.coordinateSystem,K.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,Me),n.clear();else{Me===0&&(n.setRenderTarget(q.map),n.clear());let K=q.getViewport(Me);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),V.viewport(o)}i=q.getFrustum(Me),v(y,w,Ce,Q,ee,this.type)}q.isPointLightShadow!==!0&&this.type===Co&&b(q,w),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,D,B)};function b(E,y){let w=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new sn(r.x,r.y,{format:ts,type:Yn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(y,null,w,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(y,null,w,d,x,null)}function S(E,y,w,L){let D=null,B=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(B!==void 0)D=B;else if(D=w.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let V=D.uuid,z=y.uuid,O=c[V];O===void 0&&(O={},c[V]=O);let X=O[z];X===void 0&&(X=D.clone(),O[z]=X,y.addEventListener("dispose",M)),D=X}if(D.visible=y.visible,D.wireframe=y.wireframe,L===Co?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:h[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,w.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let V=n.properties.get(D);V.light=w}return D}function v(E,y,w,L,D,B){if(E.visible===!1)return;if(E.layers.test(D)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&B===Co)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let O=e.update(E),X=E.material;if(Array.isArray(X)){let Q=O.groups;for(let q=0,ye=Q.length;q<ye;q++){let Z=Q[q],G=X[Z.materialIndex];if(G&&G.visible){let ee=S(E,G,L,B);E.onBeforeShadow(n,E,y,w,O,ee,Z),n.renderBufferDirect(w,null,O,ee,E,Z),E.onAfterShadow(n,E,y,w,O,ee,Z)}}}else if(X.visible){let Q=S(E,X,L,B);E.onBeforeShadow(n,E,y,w,O,Q,null),n.renderBufferDirect(w,null,O,Q,E,null),E.onAfterShadow(n,E,y,w,O,Q,null)}}let z=E.children;for(let O=0,X=z.length;O<X;O++)v(z[O],y,w,L,D,B)}function M(E){E.target.removeEventListener("dispose",M);for(let w in c){let L=c[w],D=E.target.uuid;D in L&&(L[D].dispose(),delete L[D])}}}function $E(n,e){function t(){let F=!1,ge=new Mt,fe=null,Be=new Mt(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!F&&(n.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){F=Ne},setClear:function(Ne,Ue,Fe,st,Y){Y===!0&&(Ne*=st,Ue*=st,Fe*=st),ge.set(Ne,Ue,Fe,st),Be.equals(ge)===!1&&(n.clearColor(Ne,Ue,Fe,st),Be.copy(ge))},reset:function(){F=!1,fe=null,Be.set(-1,0,0,0)}}}function i(){let F=!1,ge=!1,fe=null,Be=null,Ne=null;return{setReversed:function(Ue){if(ge!==Ue){let Fe=e.get("EXT_clip_control");Ue?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ge=Ue;let st=Ne;Ne=null,this.setClear(st)}},getReversed:function(){return ge},setTest:function(Ue){Ue?me(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!F&&(n.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(ge&&(Ue=Vg[Ue]),Be!==Ue){switch(Ue){case _c:n.depthFunc(n.NEVER);break;case vc:n.depthFunc(n.ALWAYS);break;case bc:n.depthFunc(n.LESS);break;case po:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case Sc:n.depthFunc(n.GEQUAL);break;case wc:n.depthFunc(n.GREATER);break;case Ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Be=Ue}},setLocked:function(Ue){F=Ue},setClear:function(Ue){Ne!==Ue&&(Ne=Ue,ge&&(Ue=1-Ue),n.clearDepth(Ue))},reset:function(){F=!1,fe=null,Be=null,Ne=null,ge=!1}}}function r(){let F=!1,ge=null,fe=null,Be=null,Ne=null,Ue=null,Fe=null,st=null,Y=null;return{setTest:function(Pe){F||(Pe?me(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(Pe){ge!==Pe&&!F&&(n.stencilMask(Pe),ge=Pe)},setFunc:function(Pe,rt,Ie){(fe!==Pe||Be!==rt||Ne!==Ie)&&(n.stencilFunc(Pe,rt,Ie),fe=Pe,Be=rt,Ne=Ie)},setOp:function(Pe,rt,Ie){(Ue!==Pe||Fe!==rt||st!==Ie)&&(n.stencilOp(Pe,rt,Ie),Ue=Pe,Fe=rt,st=Ie)},setLocked:function(Pe){F=Pe},setClear:function(Pe){Y!==Pe&&(n.clearStencil(Pe),Y=Pe)},reset:function(){F=!1,ge=null,fe=null,Be=null,Ne=null,Ue=null,Fe=null,st=null,Y=null}}}let s=new t,o=new i,a=new r,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,b=null,S=null,v=null,M=null,E=null,y=null,w=new Je(0,0,0),L=0,D=!1,B=null,V=null,z=null,O=null,X=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ye=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=ye>=1):Z.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=ye>=2);let G=null,ee={},Me=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),K=new Mt().fromArray(Me),le=new Mt().fromArray(Ce);function k(F,ge,fe,Be){let Ne=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(F,Ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<fe;Fe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(ge+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return Ue}let te={};te[n.TEXTURE_2D]=k(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=k(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=k(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=k(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(po),Xe(!1),qe(Rf),me(n.CULL_FACE),He(fi);function me(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ee(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function We(F,ge){return f[F]!==ge?(n.bindFramebuffer(F,ge),f[F]=ge,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ge),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Oe(F,ge){let fe=g,Be=!1;if(F){fe=d.get(ge),fe===void 0&&(fe=[],d.set(ge,fe));let Ne=F.textures;if(fe.length!==Ne.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,Fe=Ne.length;Ue<Fe;Ue++)fe[Ue]=n.COLOR_ATTACHMENT0+Ue;fe.length=Ne.length,Be=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Be=!0);Be&&n.drawBuffers(fe)}function Ye(F){return x!==F?(n.useProgram(F),x=F,!0):!1}let ue={[Ci]:n.FUNC_ADD,[dg]:n.FUNC_SUBTRACT,[pg]:n.FUNC_REVERSE_SUBTRACT};ue[mg]=n.MIN,ue[gg]=n.MAX;let Re={[qa]:n.ZERO,[es]:n.ONE,[xg]:n.SRC_COLOR,[$a]:n.SRC_ALPHA,[Mg]:n.SRC_ALPHA_SATURATE,[vg]:n.DST_COLOR,[_g]:n.DST_ALPHA,[yg]:n.ONE_MINUS_SRC_COLOR,[Po]:n.ONE_MINUS_SRC_ALPHA,[bg]:n.ONE_MINUS_DST_COLOR,[Ya]:n.ONE_MINUS_DST_ALPHA,[Sg]:n.CONSTANT_COLOR,[wg]:n.ONE_MINUS_CONSTANT_COLOR,[Eg]:n.CONSTANT_ALPHA,[Tg]:n.ONE_MINUS_CONSTANT_ALPHA};function He(F,ge,fe,Be,Ne,Ue,Fe,st,Y,Pe){if(F===fi){m===!0&&(Ee(n.BLEND),m=!1);return}if(m===!1&&(me(n.BLEND),m=!0),F!==Gc){if(F!==p||Pe!==D){if((b!==Ci||M!==Ci)&&(n.blendEquation(n.FUNC_ADD),b=Ci,M=Ci),Pe)switch(F){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cf:n.blendFunc(n.ONE,n.ONE);break;case Pf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case If:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",F);break}else switch(F){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pf:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case If:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",F);break}S=null,v=null,E=null,y=null,w.set(0,0,0),L=0,p=F,D=Pe}return}Ne=Ne||ge,Ue=Ue||fe,Fe=Fe||Be,(ge!==b||Ne!==M)&&(n.blendEquationSeparate(ue[ge],ue[Ne]),b=ge,M=Ne),(fe!==S||Be!==v||Ue!==E||Fe!==y)&&(n.blendFuncSeparate(Re[fe],Re[Be],Re[Ue],Re[Fe]),S=fe,v=Be,E=Ue,y=Fe),(st.equals(w)===!1||Y!==L)&&(n.blendColor(st.r,st.g,st.b,Y),w.copy(st),L=Y),p=F,D=!1}function Le(F,ge){F.side===Dt?Ee(n.CULL_FACE):me(n.CULL_FACE);let fe=F.side===Mn;ge&&(fe=!fe),Xe(fe),F.blending===Yi&&F.transparent===!1?He(fi):He(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let Be=F.stencilWrite;a.setTest(Be),Be&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(F){B!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),B=F)}function qe(F){F!==ug?(me(n.CULL_FACE),F!==V&&(F===Rf?n.cullFace(n.BACK):F===hg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),V=F}function ot(F){F!==z&&(q&&n.lineWidth(F),z=F)}function se(F,ge,fe){F?(me(n.POLYGON_OFFSET_FILL),(O!==ge||X!==fe)&&(O=ge,X=fe,o.getReversed()&&(ge=-ge,fe=-fe),n.polygonOffset(ge,fe))):Ee(n.POLYGON_OFFSET_FILL)}function ke(F){F?me(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function et(F){F===void 0&&(F=n.TEXTURE0+Q-1),G!==F&&(n.activeTexture(F),G=F)}function xe(F,ge,fe){fe===void 0&&(G===null?fe=n.TEXTURE0+Q-1:fe=G);let Be=ee[fe];Be===void 0&&(Be={type:void 0,texture:void 0},ee[fe]=Be),(Be.type!==F||Be.texture!==ge)&&(G!==fe&&(n.activeTexture(fe),G=fe),n.bindTexture(F,ge||te[F]),Be.type=F,Be.texture=ge)}function A(){let F=ee[G];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{n.compressedTexImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function J(){try{n.compressedTexImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function Te(){try{n.texSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function $(){try{n.texSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function ve(){try{n.compressedTexSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function Se(){try{n.texStorage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function P(){try{n.texStorage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function T(){try{n.texImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function W(){try{n.texImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function _e(F){return h[F]!==void 0?h[F]:n.getParameter(F)}function de(F,ge){h[F]!==ge&&(n.pixelStorei(F,ge),h[F]=ge)}function he(F){K.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function pe(F){le.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),le.copy(F))}function ie(F,ge){let fe=c.get(ge);fe===void 0&&(fe=new WeakMap,c.set(ge,fe));let Be=fe.get(F);Be===void 0&&(Be=n.getUniformBlockIndex(ge,F.name),n.uniformBlockBinding(ge,Be,Be),fe.set(F,Be))}function ce(F,ge,fe){let Ne=c.get(ge).get(F);l[Ne]!==fe&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ne,fe),l[Ne]=fe)}function De(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},G=null,ee={},f={},l={},d=new WeakMap,g=[],x=null,m=!1,p=null,b=null,S=null,v=null,M=null,E=null,y=null,w=new Je(0,0,0),L=0,D=!1,B=null,V=null,z=null,O=null,X=null,K.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:me,disable:Ee,bindFramebuffer:We,drawBuffers:Oe,useProgram:Ye,setBlending:He,setMaterial:Le,setFlipSided:Xe,setCullFace:qe,setLineWidth:ot,setPolygonOffset:se,setScissorTest:ke,activeTexture:et,bindTexture:xe,unbindTexture:A,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:T,texImage3D:W,pixelStorei:de,getParameter:_e,updateUBOMapping:ie,uniformBlockBinding:ce,texStorage2D:Se,texStorage3D:P,texSubImage2D:Te,texSubImage3D:$,compressedTexSubImage2D:ve,compressedTexSubImage3D:be,scissor:he,viewport:pe,reset:De}}function YE(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap,h=new Set,f,d=new WeakMap,g=new Set,x=new FinalizationRegistry(P=>g.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,T){return m?new OffscreenCanvas(P,T):xo("canvas")}function b(P,T,W){let _e=1,de=Se(P);if((de.width>W||de.height>W)&&(_e=W/Math.max(de.width,de.height)),_e<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(_e*de.width),pe=Math.floor(_e*de.height);f===void 0&&(f=p(he,pe));let ie=T?p(he,pe):f;return ie.width=he,ie.height=pe,ie.getContext("2d").drawImage(P,0,0,he,pe),it("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+he+"x"+pe+")."),ie}else return"data"in P&&it("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(P,T,W,_e,de,he=!1){if(P!==null){if(n[P]!==void 0)return n[P];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe;_e&&(pe=e.get("EXT_texture_norm16"),pe||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=T;if(T===n.RED&&(W===n.FLOAT&&(ie=n.R32F),W===n.HALF_FLOAT&&(ie=n.R16F),W===n.UNSIGNED_BYTE&&(ie=n.R8),W===n.UNSIGNED_SHORT&&pe&&(ie=pe.R16_EXT),W===n.SHORT&&pe&&(ie=pe.R16_SNORM_EXT)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.R8UI),W===n.UNSIGNED_SHORT&&(ie=n.R16UI),W===n.UNSIGNED_INT&&(ie=n.R32UI),W===n.BYTE&&(ie=n.R8I),W===n.SHORT&&(ie=n.R16I),W===n.INT&&(ie=n.R32I)),T===n.RG&&(W===n.FLOAT&&(ie=n.RG32F),W===n.HALF_FLOAT&&(ie=n.RG16F),W===n.UNSIGNED_BYTE&&(ie=n.RG8),W===n.UNSIGNED_SHORT&&pe&&(ie=pe.RG16_EXT),W===n.SHORT&&pe&&(ie=pe.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.RG8UI),W===n.UNSIGNED_SHORT&&(ie=n.RG16UI),W===n.UNSIGNED_INT&&(ie=n.RG32UI),W===n.BYTE&&(ie=n.RG8I),W===n.SHORT&&(ie=n.RG16I),W===n.INT&&(ie=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),W===n.UNSIGNED_INT&&(ie=n.RGB32UI),W===n.BYTE&&(ie=n.RGB8I),W===n.SHORT&&(ie=n.RGB16I),W===n.INT&&(ie=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),W===n.UNSIGNED_INT&&(ie=n.RGBA32UI),W===n.BYTE&&(ie=n.RGBA8I),W===n.SHORT&&(ie=n.RGBA16I),W===n.INT&&(ie=n.RGBA32I)),T===n.RGB&&(W===n.UNSIGNED_SHORT&&pe&&(ie=pe.RGB16_EXT),W===n.SHORT&&pe&&(ie=pe.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),T===n.RGBA){let ce=he?xa:xt.getTransfer(de);W===n.FLOAT&&(ie=n.RGBA32F),W===n.HALF_FLOAT&&(ie=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ie=ce===Lt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&pe&&(ie=pe.RGBA16_EXT),W===n.SHORT&&pe&&(ie=pe.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(P,T){let W;return P?T===null||T===Pi||T===ws?W=n.DEPTH24_STENCIL8:T===Gn?W=n.DEPTH32F_STENCIL8:T===No&&(W=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pi||T===ws?W=n.DEPTH_COMPONENT24:T===Gn?W=n.DEPTH_COMPONENT32F:T===No&&(W=n.DEPTH_COMPONENT16),W}function w(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xt&&P.minFilter!==qt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){let T=new WeakRef(P);i.get(P).__ref=T,g.add(T),x.register(P,T,T)}function D(P){let T=i.get(P).__ref;T!==void 0&&(g.delete(T),x.unregister(T))}function B(P){z(P.target)}function V(P){O(P.target)}function z(P){P.removeEventListener("dispose",B),D(P),Q(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function O(P){P.removeEventListener("dispose",V),D(P),ye(P)}function X(){for(let P of g){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?O(T):z(T))}g.clear(),h.clear()}function Q(P){let T=i.get(P);if(T.__webglInit===void 0)return;let W=P.source,_e=d.get(W);if(_e){let de=_e[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&q(P),Object.keys(_e).length===0&&d.delete(W)}i.remove(P)}function q(P){let T=i.get(P);n.deleteTexture(T.__webglTexture);let W=P.source,_e=d.get(W);delete _e[T.__cacheKey],o.memory.textures--}function ye(P){let T=i.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let W=P.depthTexture;if(W&&W.renderTarget===P&&z(W),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let he=0;he<T.__webglFramebuffer[de].length;he++)n.deleteFramebuffer(T.__webglFramebuffer[de][he]);else n.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)n.deleteFramebuffer(T.__webglFramebuffer[de]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let _e=P.textures;for(let de=0,he=_e.length;de<he;de++){let pe=i.get(_e[de]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(_e[de])}i.remove(P)}let Z=0;function G(){Z=0}function ee(){return Z}function Me(P){Z=P}function Ce(){let P=Z;return P>=r.maxTextures&&it("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),Z+=1,P}function K(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function le(P,T){let W=i.get(P);if(P.isVideoTexture&&ve(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let _e=P.image;if(_e===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(W,P,T);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function k(P,T){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Le(W,P,T);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function te(P,T){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Le(W,P,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function me(P,T){let W=i.get(P);if(P.version>0&&W.__version!==P.version){Xe(W,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}let Ee={[Ti]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[mo]:n.MIRRORED_REPEAT},We={[Xt]:n.NEAREST,[$c]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[Do]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},Oe={[Ng]:n.NEVER,[Yf]:n.ALWAYS,[Og]:n.LESS,[qf]:n.LEQUAL,[Ug]:n.EQUAL,[$f]:n.GEQUAL,[Fg]:n.GREATER,[Bg]:n.NOTEQUAL};function Ye(P,T){if(T.type===Gn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===qt||T.magFilter===Do||T.magFilter===Ss||T.magFilter===pi||T.minFilter===qt||T.minFilter===Do||T.minFilter===Ss||T.minFilter===pi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Ee[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Ee[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Ee[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,We[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,We[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xt||T.minFilter!==Ss&&T.minFilter!==pi||T.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ue(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B),L(T));let _e=T.source,de=d.get(_e);de===void 0&&(de={},d.set(_e,de));let he=K(T);if(he!==P.__cacheKey){de[he]===void 0&&(de[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),de[he].usedTimes++;let pe=de[P.__cacheKey];pe!==void 0&&(de[P.__cacheKey].usedTimes--,pe.usedTimes===0&&q(T)),P.__cacheKey=he,P.__webglTexture=de[he].texture}return W}function Re(P,T,W){return Math.floor(Math.floor(P/W)/T)}function He(P,T,W,_e){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,W,_e,T.data);else{he.sort((F,ge)=>F.start-ge.start);let pe=0;for(let F=1;F<he.length;F++){let ge=he[pe],fe=he[F],Be=ge.start+ge.count,Ne=Re(fe.start,T.width,4),Ue=Re(ge.start,T.width,4);fe.start<=Be+1&&Ne===Ue&&Re(fe.start+fe.count-1,T.width,4)===Ne?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++pe,he[pe]=fe)}he.length=pe+1;let ie=t.getParameter(n.UNPACK_ROW_LENGTH),ce=t.getParameter(n.UNPACK_SKIP_PIXELS),De=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let F=0,ge=he.length;F<ge;F++){let fe=he[F],Be=Math.floor(fe.start/4),Ne=Math.ceil(fe.count/4),Ue=Be%T.width,Fe=Math.floor(Be/T.width),st=Ne,Y=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,Ue,Fe,st,Y,W,_e,T.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function Le(P,T,W){let _e=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=n.TEXTURE_3D);let de=ue(P,T),he=T.source;t.bindTexture(_e,P.__webglTexture,n.TEXTURE0+W);let pe=i.get(he);if(he.version!==pe.__version||de===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Y=xt.getPrimaries(xt.workingColorSpace),Pe=T.colorSpace===Ii?null:xt.getPrimaries(T.colorSpace),rt=T.colorSpace===Ii||Y===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ce=b(T.image,!1,r.maxTextureSize);ce=be(T,ce);let De=s.convert(T.format,T.colorSpace),F=s.convert(T.type),ge=E(T.internalFormat,De,F,T.normalized,T.colorSpace,T.isVideoTexture);Ye(_e,T);let fe,Be=T.mipmaps,Ne=T.isVideoTexture!==!0,Ue=pe.__version===void 0||de===!0,Fe=he.dataReady,st=w(T,ce);if(T.isDepthTexture)ge=y(T.format===Ar,T.type),Ue&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,ge,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ge,ce.width,ce.height,0,De,F,null));else if(T.isDataTexture)if(Be.length>0){Ne&&Ue&&t.texStorage2D(n.TEXTURE_2D,st,ge,Be[0].width,Be[0].height);for(let Y=0,Pe=Be.length;Y<Pe;Y++)fe=Be[Y],Ne?Fe&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,fe.width,fe.height,De,F,fe.data):t.texImage2D(n.TEXTURE_2D,Y,ge,fe.width,fe.height,0,De,F,fe.data);T.generateMipmaps=!1}else Ne?(Ue&&t.texStorage2D(n.TEXTURE_2D,st,ge,ce.width,ce.height),Fe&&He(T,ce,De,F)):t.texImage2D(n.TEXTURE_2D,0,ge,ce.width,ce.height,0,De,F,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ne&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ge,Be[0].width,Be[0].height,ce.depth);for(let Y=0,Pe=Be.length;Y<Pe;Y++)if(fe=Be[Y],T.format!==Sn)if(De!==null)if(Ne){if(Fe)if(T.layerUpdates.size>0){let rt=rd(fe.width,fe.height,T.format,T.type);for(let Ie of T.layerUpdates){let dt=fe.data.subarray(Ie*rt/fe.data.BYTES_PER_ELEMENT,(Ie+1)*rt/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Ie,fe.width,fe.height,1,De,dt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,ce.depth,De,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,ge,fe.width,fe.height,ce.depth,0,fe.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,ce.depth,De,F,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,ge,fe.width,fe.height,ce.depth,0,De,F,fe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ne&&Ue&&t.texStorage2D(n.TEXTURE_2D,st,ge,Be[0].width,Be[0].height);for(let Y=0,Pe=Be.length;Y<Pe;Y++)fe=Be[Y],T.format!==Sn?De!==null?Ne?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,fe.width,fe.height,De,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,ge,fe.width,fe.height,0,fe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?Fe&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,fe.width,fe.height,De,F,fe.data):t.texImage2D(n.TEXTURE_2D,Y,ge,fe.width,fe.height,0,De,F,fe.data)}else if(T.isDataArrayTexture)if(Ne){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ge,ce.width,ce.height,ce.depth),Fe)if(T.layerUpdates.size>0){let Y=rd(ce.width,ce.height,T.format,T.type);for(let Pe of T.layerUpdates){let rt=ce.data.subarray(Pe*Y/ce.data.BYTES_PER_ELEMENT,(Pe+1)*Y/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,ce.width,ce.height,1,De,F,rt)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,De,F,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,ce.width,ce.height,ce.depth,0,De,F,ce.data);else if(T.isData3DTexture)Ne?(Ue&&t.texStorage3D(n.TEXTURE_3D,st,ge,ce.width,ce.height,ce.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,De,F,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ge,ce.width,ce.height,ce.depth,0,De,F,ce.data);else if(T.isFramebufferTexture){if(Ue)if(Ne)t.texStorage2D(n.TEXTURE_2D,st,ge,ce.width,ce.height);else{let Y=ce.width,Pe=ce.height;for(let rt=0;rt<st;rt++)t.texImage2D(n.TEXTURE_2D,rt,ge,Y,Pe,0,De,F,null),Y>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),ce.parentNode!==Y){Y.appendChild(ce),h.add(T),Y.onpaint=Pe=>{let rt=Pe.changedElements;for(let Ie of h)rt.includes(Ie.image)&&(Ie.needsUpdate=!0)},Y.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ce);else{let rt=n.RGBA,Ie=n.RGBA,dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,rt,Ie,dt,ce)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ne&&Ue){let Y=Se(Be[0]);t.texStorage2D(n.TEXTURE_2D,st,ge,Y.width,Y.height)}for(let Y=0,Pe=Be.length;Y<Pe;Y++)fe=Be[Y],Ne?Fe&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,De,F,fe):t.texImage2D(n.TEXTURE_2D,Y,ge,De,F,fe);T.generateMipmaps=!1}else if(Ne){if(Ue){let Y=Se(ce);t.texStorage2D(n.TEXTURE_2D,st,ge,Y.width,Y.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,F,ce)}else t.texImage2D(n.TEXTURE_2D,0,ge,De,F,ce);S(T)&&T.mipmapsAutoUpdate===!0&&v(_e),pe.__version=he.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Xe(P,T,W){if(T.image.length!==6)return;let _e=ue(P,T),de=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);let he=i.get(de);if(de.version!==he.__version||_e===!0){t.activeTexture(n.TEXTURE0+W);let pe=xt.getPrimaries(xt.workingColorSpace),ie=T.colorSpace===Ii?null:xt.getPrimaries(T.colorSpace),ce=T.colorSpace===Ii||pe===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let De=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let Ie=0;Ie<6;Ie++)!De&&!F?ge[Ie]=b(T.image[Ie],!0,r.maxCubemapSize):ge[Ie]=F?T.image[Ie].image:T.image[Ie],ge[Ie]=be(T,ge[Ie]);let fe=ge[0],Be=s.convert(T.format,T.colorSpace),Ne=s.convert(T.type),Ue=E(T.internalFormat,Be,Ne,T.normalized,T.colorSpace),Fe=T.isVideoTexture!==!0,st=he.__version===void 0||_e===!0,Y=de.dataReady,Pe=w(T,fe);Ye(n.TEXTURE_CUBE_MAP,T);let rt;if(T.isDepthTexture){if(Ue=y(T.format===Ar,T.type),st)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ue,fe.width,fe.height);else for(let Ie=0;Ie<6;Ie++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ue,fe.width,fe.height,0,Be,Ne,null)}else if(De){Fe&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ue,fe.width,fe.height);for(let Ie=0;Ie<6;Ie++){rt=ge[Ie].mipmaps;for(let dt=0;dt<rt.length;dt++){let Bt=rt[dt];T.format!==Sn?Be!==null?Fe?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt,0,0,Bt.width,Bt.height,Be,Bt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt,Ue,Bt.width,Bt.height,0,Bt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt,0,0,Bt.width,Bt.height,Be,Ne,Bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt,Ue,Bt.width,Bt.height,0,Be,Ne,Bt.data)}}}else{if(rt=T.mipmaps,Fe&&st){rt.length>0&&Pe++;let Ie=Se(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ue,Ie.width,Ie.height)}for(let Ie=0;Ie<6;Ie++)if(F){Fe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,ge[Ie].width,ge[Ie].height,Be,Ne,ge[Ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ue,ge[Ie].width,ge[Ie].height,0,Be,Ne,ge[Ie].data);for(let dt=0;dt<rt.length;dt++){let Qt=rt[dt].image[Ie].image;Fe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt+1,0,0,Qt.width,Qt.height,Be,Ne,Qt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt+1,Ue,Qt.width,Qt.height,0,Be,Ne,Qt.data)}}else{Fe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,Be,Ne,ge[Ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ue,Be,Ne,ge[Ie]);for(let dt=0;dt<rt.length;dt++){let Bt=rt[dt];Fe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt+1,0,0,Be,Ne,Bt.image[Ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt+1,Ue,Be,Ne,Bt.image[Ie])}}}S(T)&&T.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),he.__version=de.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function qe(P,T,W,_e,de,he){let pe=s.convert(W.format,W.colorSpace),ie=s.convert(W.type),ce=E(W.internalFormat,pe,ie,W.normalized,W.colorSpace),De=i.get(T),F=i.get(W);if(F.__renderTarget=T,!De.__hasExternalTextures){let ge=Math.max(1,T.width>>he),fe=Math.max(1,T.height>>he);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,he,ce,ge,fe,T.depth,0,pe,ie,null):t.texImage2D(de,he,ce,ge,fe,0,pe,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),$(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,de,F.__webglTexture,0,Te(T)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,de,F.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(P,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){let _e=T.depthTexture,de=_e&&_e.isDepthTexture?_e.type:null,he=y(T.stencilBuffer,de),pe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(T),he,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(T),he,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,he,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,P)}else{let _e=T.textures;for(let de=0;de<_e.length;de++){let he=_e[de],pe=s.convert(he.format,he.colorSpace),ie=s.convert(he.type),ce=E(he.internalFormat,pe,ie,he.normalized,he.colorSpace);$(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(T),ce,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(T),ce,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ce,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(P,T,W){let _e=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=i.get(T.depthTexture);de.__renderTarget=T;let he=_e?T.depthTexture.image[0]:T.depthTexture.image;(!de.__webglTexture||he.width!==T.width||he.height!==T.height)&&(he.width=T.width,he.height=T.height,T.depthTexture.needsUpdate=!0),_e?me(T.depthTexture,0):le(T.depthTexture,0);let pe=de.__webglTexture,ie=Te(T),ce=_e?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,De=T.depthTexture.format===Ar?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===xr)$(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,ce,pe,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,De,ce,pe,0);else if(T.depthTexture.format===Ar)$(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,ce,pe,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,De,ce,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(P){let T=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let _e=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){let de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",de)};_e.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=_e}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let _e=0;_e<6;_e++)se(T.__webglFramebuffer[_e],P,_e);else P.texture.mipmaps.length>0?se(T.__webglFramebuffer[0],P,0):se(T.__webglFramebuffer,P,0);else if(W){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=n.createRenderbuffer(),ot(T.__webglDepthbuffer[_e],P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[_e];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,he)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ot(T.__webglDepthbuffer,P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(P,T,W){let _e=i.get(P);T!==void 0&&qe(_e.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ke(P)}function xe(P){let T=P.texture,W=i.get(P),_e=i.get(T);P.addEventListener("dispose",V),L(P);let de=P.textures,he=P.isWebGLCubeRenderTarget===!0,pe=de.length>1;if(pe||(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=T.version,o.memory.textures++),he){W.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(T.mipmaps.length>0){W.__webglFramebuffer[ie]=[];for(let ce=0;ce<T.mipmaps.length;ce++)W.__webglFramebuffer[ie][ce]=n.createFramebuffer()}else W.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ie=0;ie<T.mipmaps.length;ie++)W.__webglFramebuffer[ie]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ie=0,ce=de.length;ie<ce;ie++){let De=i.get(de[ie]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&$(P)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ie=0;ie<de.length;ie++){let ce=de[ie];W.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ie]);let De=s.convert(ce.format,ce.colorSpace),F=s.convert(ce.type),ge=E(ce.internalFormat,De,F,ce.normalized,ce.colorSpace,P.isXRRenderTarget===!0),fe=Te(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ge,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,W.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,T);for(let ie=0;ie<6;ie++)if(T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)qe(W.__webglFramebuffer[ie][ce],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ce);else qe(W.__webglFramebuffer[ie],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);S(T)?v(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let ie=0,ce=de.length;ie<ce;ie++){let De=de[ie],F=i.get(De),ge=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,F.__webglTexture),Ye(ge,De),qe(W.__webglFramebuffer,P,De,n.COLOR_ATTACHMENT0+ie,ge,0),S(De)&&v(ge)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,_e.__webglTexture),Ye(ie,T),T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)qe(W.__webglFramebuffer[ce],P,T,n.COLOR_ATTACHMENT0,ie,ce);else qe(W.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,ie,0);S(T)?v(ie):T.mipmaps.length>0&&n.texParameteri(ie,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&ke(P)}function A(P){let T=P.textures;for(let W=0,_e=T.length;W<_e;W++){let de=T[W];if(S(de)&&de.mipmapsAutoUpdate===!0){let he=M(P),pe=i.get(de).__webglTexture;t.bindTexture(he,pe),v(he),t.unbindTexture()}}}let j=[];function J(P){if(P.samples>0){if($(P)===!1){let T=P.textures,W=P.width,_e=P.height,de=n.COLOR_BUFFER_BIT,he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(P),ie=T.length>1;if(ie)for(let De=0;De<T.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let De=0;De<T.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);let F=i.get(T[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,W,_e,0,0,W,_e,de,n.NEAREST),l===!0&&(j.length=0,j.push(n.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&j.push(he),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let De=0;De<T.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);let F=i.get(T[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,F,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Te(P){return Math.min(r.maxSamples,P.samples)}function $(P){let T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ve(P){let T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function be(P,T){let W=P.colorSpace,_e=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Hn&&W!==Ii&&(xt.getTransfer(W)===Lt?(_e!==Sn||de!==Dn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",W)),T}function Se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ce,this.resetTextureUnits=G,this.getTextureUnits=ee,this.setTextureUnits=Me,this.setTexture2D=le,this.setTexture2DArray=k,this.setTexture3D=te,this.setTextureCube=me,this.rebindTextures=et,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=$,this.dispose=X}function ZE(n,e){function t(i,r=Ii){let s,o=xt.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===Zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kf)return n.BYTE;if(i===zf)return n.SHORT;if(i===No)return n.UNSIGNED_SHORT;if(i===Yc)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===Yn)return n.HALF_FLOAT;if(i===Gf)return n.ALPHA;if(i===Wf)return n.RGB;if(i===Sn)return n.RGBA;if(i===xr)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===Jc)return n.RED;if(i===jc)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===Qc)return n.RG_INTEGER;if(i===eu)return n.RGBA_INTEGER;if(i===Za||i===Ka||i===Ja||i===ja)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tu||i===nu||i===iu||i===ru)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===su||i===ou||i===au||i===lu||i===cu||i===Qa||i===uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===su||i===ou)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===au)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===lu)return s.COMPRESSED_R11_EAC;if(i===cu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qa)return s.COMPRESSED_RG11_EAC;if(i===uu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hu||i===fu||i===du||i===pu||i===mu||i===gu||i===xu||i===yu||i===_u||i===vu||i===bu||i===Mu||i===Su||i===wu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===du)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_u)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Su)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wu)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eu||i===Tu||i===Au)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eu)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ru||i===Cu||i===el||i===Pu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ru)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JE=`
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

}`,dd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new yn({vertexShader:KE,fragmentShader:JE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pd=class extends Ai{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new dd,p={},b=t.getContextAttributes(),S=null,v=null,M=[],E=[],y=new Ke,w=null,L=null,D=new ln;D.viewport=new Mt;let B=new ln;B.viewport=new Mt;let V=[D,B],z=new Vc,O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=M[K];return le===void 0&&(le=new bo,M[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=M[K];return le===void 0&&(le=new bo,M[K]=le),le.getGripSpace()},this.getHand=function(K){let le=M[K];return le===void 0&&(le=new bo,M[K]=le),le.getHandSpace()};function Q(K){let le=E.indexOf(K.inputSource);if(le===-1)return;let k=M[le];k!==void 0&&(k.update(K.inputSource,K.frame,c||o),k.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",ye);for(let K=0;K<M.length;K++){let le=E[K];le!==null&&(E[K]=null,M[K].disconnect(le))}O=null,X=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(S),d=null,f=null,h=null,r=null,v=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",q),r.addEventListener("inputsourceschange",ye),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let k=null,te=null,me=null;b.depth&&(me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=b.stencil?Ar:xr,te=b.stencil?ws:Pi);let Ee={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new sn(f.textureWidth,f.textureHeight,{format:Sn,type:Dn,depthTexture:new br(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let k={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new sn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ye(K){for(let le=0;le<K.removed.length;le++){let k=K.removed[le],te=E.indexOf(k);te>=0&&(E[te]=null,M[te].disconnect(k))}for(let le=0;le<K.added.length;le++){let k=K.added[le],te=E.indexOf(k);if(te===-1){for(let Ee=0;Ee<M.length;Ee++)if(Ee>=E.length){E.push(k),te=Ee;break}else if(E[Ee]===null){E[Ee]=k,te=Ee;break}if(te===-1)break}let me=M[te];me&&me.connect(k)}}function Z(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let le=K.near,k=K.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(k=m.depthFar)),z.near=B.near=D.near=le,z.far=B.far=D.far=k,(O!==z.near||X!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,X=z.far),z.layers.mask=K.layers.mask|6,D.layers.mask=z.layers.mask&-5,B.layers.mask=z.layers.mask&-3;let te=K.parent,me=z.cameras;Z(z,te);for(let Ee=0;Ee<me.length;Ee++)Z(me[Ee],te);z.projectionMatrix.copy(D.projectionMatrix),z.projectionMatrixInverse.copy(D.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),G(K,z,te)};function G(K,le,k){k===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(k.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ys*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(K){return p[K]};let ee=null;function Me(K,le){if(u=le.getViewerPose(c||o),g=le,u!==null){let k=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let te=!1;k.length!==z.cameras.length&&(z.cameras.length=0,te=!0);for(let Oe=0;Oe<k.length;Oe++){let Ye=k[Oe],ue=null;if(d!==null)ue=d.getViewport(Ye);else{let He=h.getViewSubImage(f,Ye);ue=He.viewport,Oe===0&&(e.setRenderTargetTextures(v,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(v))}let Re=V[Oe];Re===void 0&&(Re=new ln,Re.layers.enable(Oe),Re.viewport=new Mt,V[Oe]=Re),Re.matrix.fromArray(Ye.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ye.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(ue.x,ue.y,ue.width,ue.height),Oe===0&&(z.matrix.copy(Re.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),te===!0&&z.cameras.push(Re)}let me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Oe=h.getDepthInformation(k[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,r.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Oe=0;Oe<k.length;Oe++){let Ye=k[Oe].camera;if(Ye){let ue=p[Ye];ue||(ue=new Pa,p[Ye]=ue);let Re=h.getCameraImage(Ye);ue.sourceTexture=Re}}}}for(let k=0;k<M.length;k++){let te=E[k],me=M[k];te!==null&&me!==void 0&&me.update(te,le,c||o)}ee&&ee(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}let Ce=new p0;Ce.setAnimationLoop(Me),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},jE=new at,w0=new ht;w0.set(-1,0,0,0,1,0,0,0,1);function QE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,td(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(jE.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(w0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function e1(n,e,t,i){let r={},s={};function o(b,S){let v=S.program;i.uniformBlockBinding(b,v,r[b.id])}function a(b,S){let v=r[b.id];v===void 0&&(g(b),v=l(b),r[b.id]=v,b.addEventListener("dispose",m));let M=S.program;i.updateUBOMapping(b,M);let E=e.render.frame;s[b.id]!==E&&(c(b),s[b.id]=E)}function l(b){let S=n.createBuffer(),v=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,M),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(b){let S=r[b.id],v=b.uniforms,M=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,y=v.length;E<y;E++){let w=v[E];if(Array.isArray(w))for(let L=0,D=w.length;L<D;L++)u(w[L],E,L,M);else u(w,E,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(b,S,v,M){if(f(b,S,v,M)===!0){let E=b.__offset,y=b.value;if(Array.isArray(y)){let w=0;for(let L=0;L<y.length;L++){let D=y[L],B=x(D,!0);h(D,b.__data,w),w+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else h(y,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,b.__data)}}function h(b,S,v){typeof b=="number"||typeof b=="boolean"?S[v]=b:b.isMatrix3?(S[v]=b.elements[0],S[v+1]=b.elements[1],S[v+2]=b.elements[2],S[v+3]=0,S[v+4]=b.elements[3],S[v+5]=b.elements[4],S[v+6]=b.elements[5],S[v+7]=0,S[v+8]=b.elements[6],S[v+9]=b.elements[7],S[v+10]=b.elements[8],S[v+11]=0):ArrayBuffer.isView(b)?S.set(b.subarray(0,S.length-v),v):b.toArray(S,v)}function f(b,S,v,M){let E=b.value,y=S+"_"+v;if(Array.isArray(E)){M[y]===void 0&&(M[y]=[]);let w=M[y],L=!1;for(let D=0;D<E.length;D++)d(E[D],w,D)===!0&&(L=!0);return L}return d(E,M,y)}function d(b,S,v){if(S[v]===void 0)return typeof b=="number"||typeof b=="boolean"?S[v]=b:ArrayBuffer.isView(b)?S[v]=b.slice():S[v]=b.clone(),!0;{let M=S[v];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return S[v]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(M.equals(b)===!1)return M.copy(b),!0}}return!1}function g(b){let S=b.uniforms,v=0,M=16;for(let y=0,w=S.length;y<w;y++){let L=Array.isArray(S[y])?S[y]:[S[y]];for(let D=0,B=L.length;D<B;D++){let V=L[D],z=Array.isArray(V.value)?V.value:[V.value],O=Array.isArray(S[y])||Array.isArray(V.value),X=v;for(let q=0,ye=z.length;q<ye;q++){let Z=z[q],G=x(Z,O),ee=v%M,Me=ee%G.boundary,Ce=ee+Me;v+=Me,Ce!==0&&M-Ce<G.storage&&(v+=M-Ce),q===0&&(X=v),v+=G.storage}let Q=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new Q((v-X)/Float32Array.BYTES_PER_ELEMENT),V.__offset=X}}let E=v%M;return E>0&&(v+=M-E),b.__size=v,b.__cache={},this}function x(b,S){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=16,v.storage=48):b.isMatrix4?(v.boundary=16,v.storage=64):b.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):it("WebGLRenderer: Unsupported uniform value type.",b),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(b){let S=b.target;S.removeEventListener("dispose",m),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);r={},s={}}return{bind:o,update:a,dispose:p}}var t1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function n1(){return Ki===null&&(Ki=new wo(t1,16,16,ts,Yn),Ki.name="DFG_LUT",Ki.minFilter=qt,Ki.magFilter=qt,Ki.wrapS=ci,Ki.wrapT=ci,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Nu=class{constructor(e={}){let{canvas:t=kg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=d,m=new Set([eu,Qc,jc]),p=new Set([Dn,Pi,No,ws,Zc,Kc]),b=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,E=null,y=[],w=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,B=!1,V=null,z=null,O=null,X=null;this._outputColorSpace=At;let Q=0,q=0,ye=null,Z=-1,G=null,ee=new Mt,Me=new Mt,Ce=null,K=new Je(0),le=0,k=t.width,te=t.height,me=1,Ee=null,We=null,Oe=new Mt(0,0,k,te),Ye=new Mt(0,0,k,te),ue=!1,Re=new $r,He=new Cc,Le=!1,Xe=!1,qe=new at,ot=new I,se=new Mt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function xe(){return ye===null?me:1}let A=i;function j(R,H){return t.getContext(R,H)}let J,Te,$,ve,be,Se,P,T,W,_e,de,he,pe,ie,ce,De,F,ge,fe,Be,Ne,Ue,Fe;try{let R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),A===null){let H="webgl2";if(A=j(H,R),A===null)throw j(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(R){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ct("WebGLRenderer: "+R.message),R}function st(){J=new dw(A),J.init(),Ne=new ZE(A,J),Te=new nw(A,J,e,Ne),$=new $E(A,J),Te.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),z=A.createFramebuffer(),O=A.createFramebuffer(),X=A.createFramebuffer(),ve=new gw(A),be=new DE,Se=new YE(A,J,$,be,Te,Ne,ve),P=new fw(D),T=new yb(A),Ue=new ew(A,T),W=new pw(A,T,ve,Ue),_e=new yw(A,W,T,Ue,ve),ge=new xw(A,Te,Se),ce=new iw(be),de=new LE(D,P,J,Te,Ue,ce),he=new QE(D,be),pe=new OE,ie=new HE(J),F=new QS(D,P,$,_e,g,l),De=new qE(D,_e,Te),Fe=new e1(A,ve,Te,$),fe=new tw(A,J,ve),Be=new mw(A,J,ve),ve.programs=de.programs,D.capabilities=Te,D.extensions=J,D.properties=be,D.renderLists=pe,D.shadowMap=De,D.state=$,D.info=ve}x!==Dn&&(L=new vw(x,t.width,t.height,a,r,s));let Y=new pd(D,A);this.xr=Y,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(R){R!==void 0&&(me=R,this.setSize(k,te,!1))},this.getSize=function(R){return R.set(k,te)},this.setSize=function(R,H,ae=!0){if(Y.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,te=H,t.width=Math.floor(R*me),t.height=Math.floor(H*me),ae===!0&&(t.style.width=R+"px",t.style.height=H+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(k*me,te*me).floor()},this.setDrawingBufferSize=function(R,H,ae){k=R,te=H,me=ae,t.width=Math.floor(R*ae),t.height=Math.floor(H*ae),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(x===Dn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ee)},this.getViewport=function(R){return R.copy(Oe)},this.setViewport=function(R,H,ae,ne){R.isVector4?Oe.set(R.x,R.y,R.z,R.w):Oe.set(R,H,ae,ne),$.viewport(ee.copy(Oe).multiplyScalar(xe()).round())},this.getScissor=function(R){return R.copy(Ye)},this.setScissor=function(R,H,ae,ne){R.isVector4?Ye.set(R.x,R.y,R.z,R.w):Ye.set(R,H,ae,ne),$.scissor(Me.copy(Ye).multiplyScalar(xe()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(R){$.setScissorTest(ue=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){We=R},this.getClearColor=function(R){return R.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,ae=!0){let ne=0;if(R){let re=!1;if(ye!==null){let ze=ye.texture.format;re=m.has(ze)}if(re){let ze=ye.texture.type,je=p.has(ze),Ve=F.getClearColor(),Ze=F.getClearAlpha(),nt=Ve.r,ut=Ve.g,_t=Ve.b;je?(b[0]=nt,b[1]=ut,b[2]=_t,b[3]=Ze,A.clearBufferuiv(A.COLOR,0,b)):(S[0]=nt,S[1]=ut,S[2]=_t,S[3]=Ze,A.clearBufferiv(A.COLOR,0,S))}else ne|=A.COLOR_BUFFER_BIT}H&&(ne|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&A.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),V=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),F.dispose(),pe.dispose(),ie.dispose(),Se.dispose(),be.dispose(),P.dispose(),_e.dispose(),W.dispose(),Ue.dispose(),Fe.dispose(),de.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",kn),Y.removeEventListener("sessionend",yi),_i.stop()};function Pe(R){R.preventDefault(),ya("WebGLRenderer: Context Lost."),B=!0}function rt(){ya("WebGLRenderer: Context Restored."),B=!1;let R=ve.autoReset,H=De.enabled,ae=De.autoUpdate,ne=De.needsUpdate,re=De.type;st(),ve.autoReset=R,De.enabled=H,De.autoUpdate=ae,De.needsUpdate=ne,De.type=re}function Ie(R){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function dt(R){let H=R.target;H.removeEventListener("dispose",dt),Bt(H)}function Bt(R){Qt(R),be.remove(R)}function Qt(R){let H=be.get(R).programs;H!==void 0&&(H.forEach(function(ae){de.releaseProgram(ae)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,ae,ne,re,ze){H===null&&(H=ke);let je=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ve=El(R,H,ae,ne,re);$.setMaterial(ne,je);let Ze=ae.index,nt=1;if(ne.wireframe===!0){if(Ze=W.getWireframeAttribute(ae),Ze===void 0)return;nt=2}let ut=ae.drawRange,_t=ae.attributes.position,tt=ut.start*nt,gt=(ut.start+ut.count)*nt;ze!==null&&(tt=Math.max(tt,ze.start*nt),gt=Math.min(gt,(ze.start+ze.count)*nt)),Ze!==null?(tt=Math.max(tt,0),gt=Math.min(gt,Ze.count)):_t!=null&&(tt=Math.max(tt,0),gt=Math.min(gt,_t.count));let Zt=gt-tt;if(Zt<0||Zt===1/0)return;Ue.setup(re,ne,Ve,ae,Ze);let Ot,wt=fe;if(Ze!==null&&(Ot=T.get(Ze),wt=Be,wt.setIndex(Ot)),re.isMesh)ne.wireframe===!0?($.setLineWidth(ne.wireframeLinewidth*xe()),wt.setMode(A.LINES)):wt.setMode(A.TRIANGLES);else if(re.isLine){let Kt=ne.linewidth;Kt===void 0&&(Kt=1),$.setLineWidth(Kt*xe()),re.isLineSegments?wt.setMode(A.LINES):re.isLineLoop?wt.setMode(A.LINE_LOOP):wt.setMode(A.LINE_STRIP)}else re.isPoints?wt.setMode(A.POINTS):re.isSprite&&wt.setMode(A.TRIANGLES);if(re.isBatchedMesh)if(J.get("WEBGL_multi_draw"))wt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let Kt=re._multiDrawStarts,Qe=re._multiDrawCounts,_n=re._multiDrawCount,St=Ze?T.get(Ze).bytesPerElement:1,si=be.get(ne).currentProgram.getUniforms();for(let pn=0;pn<_n;pn++)si.setValue(A,"_gl_DrawID",pn),wt.render(Kt[pn]/St,Qe[pn])}else if(re.isInstancedMesh)wt.renderInstances(tt,Zt,re.count);else if(ae.isInstancedBufferGeometry){let Kt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Qe=Math.min(ae.instanceCount,Kt);wt.renderInstances(tt,Zt,Qe)}else wt.render(tt,Zt)};function Xn(R,H,ae,ne){V!==null&&R.isNodeMaterial&&V.setObject(ne,R),Le===!0&&ce.setState(R,ae,!1),R.transparent===!0&&R.side===Dt&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,cs(R,H,ne),R.side=ti,R.needsUpdate=!0,cs(R,H,ne),R.side=Dt):cs(R,H,ne)}this.compile=function(R,H,ae=null){ae===null&&(ae=R),V!==null&&V.renderStart(R,H,ae),E=ie.get(ae),E.init(H),w.push(E),ae.traverseVisible(function(re){re.isLight&&re.layers.test(H.layers)&&(E.pushLight(re),re.castShadow&&E.pushShadow(re))}),R!==ae&&R.traverseVisible(function(re){re.isLight&&re.layers.test(H.layers)&&(E.pushLight(re),re.castShadow&&E.pushShadow(re))}),E.setupLights(),V!==null&&V.updateLights(E.state.lightsArray),Xe=this.localClippingEnabled,Le=ce.init(this.clippingPlanes,Xe),Le===!0&&ce.setGlobalState(this.clippingPlanes,H),V!==null&&De.render(E.state.shadowsArray,ae,H);let ne=new Set;return R.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let ze=re.material;if(ze)if(Array.isArray(ze))for(let je=0;je<ze.length;je++){let Ve=ze[je];Xn(Ve,ae,H,re),ne.add(Ve)}else Xn(ze,ae,H,re),ne.add(ze)}),E=w.pop(),V!==null&&V.renderEnd(),ne},this.compileAsync=function(R,H,ae=null){let ne=this.compile(R,H,ae);return new Promise(re=>{function ze(){if(ne.forEach(function(je){let Ze=be.get(je).currentProgram;(Ze===void 0||Ze.isReady())&&ne.delete(je)}),ne.size===0){re(R);return}setTimeout(ze,10)}J.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Oi=null;function ls(R){Oi&&Oi(R)}function kn(){_i.stop()}function yi(){_i.start()}let _i=new p0;_i.setAnimationLoop(ls),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(R){Oi=R,Y.setAnimationLoop(R),R===null?_i.stop():_i.start()},Y.addEventListener("sessionstart",kn),Y.addEventListener("sessionend",yi),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;V!==null&&V.renderStart(R,H);let ae=Y.enabled===!0&&Y.isPresenting===!0,ne=L!==null&&(ye===null||ae)&&L.begin(D,ye);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,H,ye),E=ie.get(R,w.length),E.init(H),E.state.textureUnits=Se.getTextureUnits(),w.push(E),qe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?He.setFromArrayCamera(H):Re.setFromProjectionMatrix(qe,ui,H.reversedDepth),Xe=this.localClippingEnabled,Le=ce.init(this.clippingPlanes,Xe),M=pe.get(R,y.length),M.init(),y.push(M),this.info.render.frame++,Y.enabled===!0&&Y.isPresenting===!0){let je=D.xr.getDepthSensingMesh();je!==null&&Ko(je,H,-1/0,D.sortObjects)}Ko(R,H,0,D.sortObjects),M.finish(),V!==null&&V.updateLights(E.state.lightsArray),D.sortObjects===!0&&M.sort(Ee,We),et=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,et&&F.addToRenderList(M,R),this.info.autoReset===!0&&this.info.reset(),Le===!0&&ce.beginShadows();let re=E.state.shadowsArray;if(De.render(re,R,H),Le===!0&&ce.endShadows(),(ne&&L.hasRenderPass())===!1){let je=M.opaque,Ve=M.transmissive;if(E.setupLights(),H.isArrayCamera){let Ze=H.cameras;if(Ve.length>0)for(let nt=0,ut=Ze.length;nt<ut;nt++){let _t=Ze[nt];Dr(je,Ve,R,_t)}et&&F.render(R);for(let nt=0,ut=Ze.length;nt<ut;nt++){let _t=Ze[nt];Jo(M,R,_t,_t.viewport)}}else Ve.length>0&&Dr(je,Ve,R,H),et&&F.render(R),Jo(M,R,H)}ye!==null&&q===0&&(Se.updateMultisampleRenderTarget(ye),Se.updateRenderTargetMipmap(ye)),ne&&L.end(D),R.isScene===!0&&R.onAfterRender(D,R,H),Ue.resetDefaultState(),Z=-1,G=null,w.pop(),w.length>0?(E=w[w.length-1],Se.setTextureUnits(E.state.textureUnits),Le===!0&&ce.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,V!==null&&V.renderEnd()};function Ko(R,H,ae,ne){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){let je=H.isArrayCamera?He:Re;if(!R.frustumCulled||R.intersectsFrustum(je)){ne&&se.setFromMatrixPosition(R.matrixWorld).applyMatrix4(qe);let Ve=_e.update(R),Ze=R.material;Ze.visible&&M.push(R,Ve,Ze,ae,se.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let je=H.isArrayCamera?He:Re;if(!R.frustumCulled||R.intersectsFrustum(je)){let Ve=_e.update(R),Ze=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),se.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),se.copy(Ve.boundingSphere.center)),se.applyMatrix4(R.matrixWorld).applyMatrix4(qe)),Array.isArray(Ze)){let nt=Ve.groups;for(let ut=0,_t=nt.length;ut<_t;ut++){let tt=nt[ut],gt=Ze[tt.materialIndex];gt&&gt.visible&&M.push(R,Ve,gt,ae,se.z,tt,H)}}else Ze.visible&&M.push(R,Ve,Ze,ae,se.z,null,H)}}}let ze=R.children;for(let je=0,Ve=ze.length;je<Ve;je++)Ko(ze[je],H,ae,ne)}function Jo(R,H,ae,ne){let{opaque:re,transmissive:ze,transparent:je}=R;E.setupLightsView(ae),Le===!0&&ce.setGlobalState(D.clippingPlanes,ae),ne&&$.viewport(ee.copy(ne)),re.length>0&&Nr(re,H,ae),ze.length>0&&Nr(ze,H,ae),je.length>0&&Nr(je,H,ae),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Dr(R,H,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ne.id]===void 0){let tt=J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ne.id]=new sn(1,1,{generateMipmaps:!0,type:tt?Yn:Dn,minFilter:pi,samples:Math.max(4,Te.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let ze=E.state.transmissionRenderTarget[ne.id],je=ne.viewport||ee;ze.setSize(je.z*D.transmissionResolutionScale,je.w*D.transmissionResolutionScale);let Ve=D.getRenderTarget(),Ze=D.getActiveCubeFace(),nt=D.getActiveMipmapLevel();D.setRenderTarget(ze),D.getClearColor(K),le=D.getClearAlpha(),le<1&&D.setClearColor(16777215,.5),D.clear(),et&&F.render(ae);let ut=D.toneMapping;D.toneMapping=di;let _t=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),E.setupLightsView(ne),Le===!0&&ce.setGlobalState(D.clippingPlanes,ne),Nr(R,ae,ne),Se.updateMultisampleRenderTarget(ze),Se.updateRenderTargetMipmap(ze),J.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let gt=0,Zt=H.length;gt<Zt;gt++){let Ot=H[gt],{object:wt,geometry:Kt,material:Qe,group:_n}=Ot;if(Qe.side===Dt&&wt.layers.test(ne.layers)){let St=Qe.side;Qe.side=Mn,Qe.needsUpdate=!0,Sl(wt,ae,ne,Kt,Qe,_n),Qe.side=St,Qe.needsUpdate=!0,tt=!0}}tt===!0&&(Se.updateMultisampleRenderTarget(ze),Se.updateRenderTargetMipmap(ze))}D.setRenderTarget(Ve,Ze,nt),D.setClearColor(K,le),_t!==void 0&&(ne.viewport=_t),D.toneMapping=ut}function Nr(R,H,ae){let ne=H.isScene===!0?H.overrideMaterial:null;for(let re=0,ze=R.length;re<ze;re++){let je=R[re],{object:Ve,geometry:Ze,group:nt}=je,ut=je.material;ut.allowOverride===!0&&ne!==null&&(ut=ne),Ve.layers.test(ae.layers)&&Sl(Ve,H,ae,Ze,ut,nt)}}function Sl(R,H,ae,ne,re,ze){V!==null&&re.isNodeMaterial&&V.setObject(R,re),R.onBeforeRender(D,H,ae,ne,re,ze),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),re.onBeforeRender(D,H,ae,ne,R,ze),re.transparent===!0&&re.side===Dt&&re.forceSinglePass===!1?(re.side=Mn,re.needsUpdate=!0,D.renderBufferDirect(ae,H,ne,re,R,ze),re.side=ti,re.needsUpdate=!0,D.renderBufferDirect(ae,H,ne,re,R,ze),re.side=Dt):D.renderBufferDirect(ae,H,ne,re,R,ze),R.onAfterRender(D,H,ae,ne,re,ze)}function wl(R){let H=0;for(let ae of R)ae.texture!==null&&H++;return H}function cs(R,H,ae){H.isScene!==!0&&(H=ke);let ne=be.get(R),re=E.state.lights,ze=E.state.shadowsArray,je=re.state.version,Ve=de.getParameters(R,re.state,ze,H,ae,E.state.lightProbeGridArray),Ze=de.getProgramCacheKey(Ve),nt=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,ne.fog=H.fog;let ut=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=P.get(R.envMap||ne.environment,ut),ne.envMapRotation=ne.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",dt),nt=new Map,ne.programs=nt,ne.programVariants=new Map);let _t=nt.get(Ze);if(_t!==void 0){if(ne.currentProgram===_t&&ne.lightsStateVersion===je)return Ur(R,Ve),_t}else Ve.uniforms=de.getUniforms(R),V!==null&&R.isNodeMaterial&&V.build(R,ae,Ve),R.onBeforeCompile(Ve,D),_t=de.acquireProgram(Ve,Ze),nt.set(Ze,_t),ne.uniforms=Ve.uniforms;let tt=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(tt.clippingPlanes=ce.uniform),Ur(R,Ve),ne.needsLights=jo(R),ne.lightsStateVersion=je,ne.needsLights&&(tt.ambientLightColor.value=re.state.ambient,tt.lightProbe.value=re.state.probe,tt.sunLights.value=re.state.sun,tt.sunLightShadows.value=re.state.sunShadow,tt.directionalLights.value=re.state.directional,tt.directionalLightShadows.value=re.state.directionalShadow,tt.spotLights.value=re.state.spot,tt.spotLightShadows.value=re.state.spotShadow,tt.rectAreaLights.value=re.state.rectArea,tt.ltc_1.value=re.state.rectAreaLTC1,tt.ltc_2.value=re.state.rectAreaLTC2,tt.pointLights.value=re.state.point,tt.pointLightShadows.value=re.state.pointShadow,tt.hemisphereLights.value=re.state.hemi,tt.sunShadowMatrix.value=re.state.sunShadowMatrix,tt.sunShadowCascade.value=re.state.sunShadowCascade,tt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,tt.spotLightMatrix.value=re.state.spotLightMatrix,tt.spotLightMap.value=re.state.spotLightMap,tt.pointShadowMatrix.value=re.state.pointShadowMatrix),ne.numLightProbeGrids=wl(E.state.lightProbeGridArray),ne.currentProgram=_t,ne.uniformsList=null,_t}function Bs(R,H,ae,ne,re){let ze=be.get(R),je=ze.currentProgram.id+","+ne+","+re,Ve=ze.programVariants.get(je);return Ve===void 0?(Ve=cs(R,H,ae),ze.programVariants.set(je,Ve)):(ze.currentProgram=Ve,ze.uniformsList=null,ze.outputColorSpace=ne,ze.toneMapping=re),Ve}function Or(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Uo.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Ur(R,H){let ae=be.get(R);ae.outputColorSpace=H.outputColorSpace,ae.batching=H.batching,ae.batchingColor=H.batchingColor,ae.instancing=H.instancing,ae.instancingColor=H.instancingColor,ae.instancingMorph=H.instancingMorph,ae.skinning=H.skinning,ae.morphTargets=H.morphTargets,ae.morphNormals=H.morphNormals,ae.morphColors=H.morphColors,ae.morphTargetsCount=H.morphTargetsCount,ae.numClippingPlanes=H.numClippingPlanes,ae.numIntersection=H.numClipIntersection,ae.vertexAlphas=H.vertexAlphas,ae.vertexTangents=H.vertexTangents,ae.toneMapping=H.toneMapping}function El(R,H,ae,ne,re){H.isScene!==!0&&(H=ke),Se.resetTextureUnits();let ze=H.fog,je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?H.environment:null,Ve=ye===null?D.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:xt.workingColorSpace,Ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,nt=P.get(ne.envMap||je,Ze),ut=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,_t=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),tt=!!ae.morphAttributes.position,gt=!!ae.morphAttributes.normal,Zt=!!ae.morphAttributes.color,Ot=di;ne.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ot=D.toneMapping);let wt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Kt=wt!==void 0?wt.length:0,Qe=be.get(ne),_n=E.state.lights;if(Le===!0&&(Xe===!0||R!==G)){let Tt=R===G&&ne.id===Z;ce.setState(ne,R,Tt)}let St=!1,si=!1;ne.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==_n.state.version||re.isBatchedMesh&&Qe.batching===!1||!re.isBatchedMesh&&Qe.batching===!0||re.isBatchedMesh&&Qe.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Qe.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Qe.instancing===!1||!re.isInstancedMesh&&Qe.instancing===!0||re.isSkinnedMesh&&Qe.skinning===!1||!re.isSkinnedMesh&&Qe.skinning===!0||re.isInstancedMesh&&Qe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Qe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Qe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Qe.instancingMorph===!1&&re.morphTexture!==null||Qe.envMap!==nt||ne.fog===!0&&Qe.fog!==ze||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ce.numPlanes||Qe.numIntersection!==ce.numIntersection)||Qe.vertexAlphas!==ut||Qe.vertexTangents!==_t||Qe.morphTargets!==tt||Qe.morphNormals!==gt||Qe.morphColors!==Zt||Qe.morphTargetsCount!==Kt||Qe.numLightProbeGrids!==wl(E.state.lightProbeGridArray)?St=!0:(Qe.outputColorSpace!==Ve||Qe.toneMapping!==Ot)&&(si=!0):(St=!0,Qe.__version=ne.version);let pn=Qe.currentProgram;(St===!0||si===!0)&&(pn=si===!0?Bs(ne,H,re,Ve,Ot):cs(ne,H,re),V&&ne.isNodeMaterial&&V.onUpdateProgram(ne,pn,Qe));let Br=!1,oi=!1,Ui=!1,vt=pn.getUniforms(),en=Qe.uniforms;if($.useProgram(pn.program)&&(Br=!0,oi=!0,Ui=!0),ne.id!==Z&&(Z=ne.id,oi=!0),Br||G!==R){$.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),vt.setValue(A,"projectionMatrix",R.projectionMatrix),vt.setValue(A,"viewMatrix",R.matrixWorldInverse);let Wt=vt.map.cameraPosition;Wt!==void 0&&Wt.setValue(A,ot.setFromMatrixPosition(R.matrixWorld)),Te.logarithmicDepthBuffer&&vt.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&vt.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,oi=!0,Ui=!0)}if(Qe.needsLights&&(_n.state.sunShadowMap.length>0&&vt.setValue(A,"sunShadowMap",_n.state.sunShadowMap,Se),_n.state.directionalShadowMap.length>0&&vt.setValue(A,"directionalShadowMap",_n.state.directionalShadowMap,Se),_n.state.spotShadowMap.length>0&&vt.setValue(A,"spotShadowMap",_n.state.spotShadowMap,Se),_n.state.pointShadowMap.length>0&&vt.setValue(A,"pointShadowMap",_n.state.pointShadowMap,Se)),re.isSkinnedMesh){vt.setOptional(A,re,"bindMatrix"),vt.setOptional(A,re,"bindMatrixInverse");let Tt=re.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),vt.setValue(A,"boneTexture",Tt.boneTexture,Se))}re.isBatchedMesh&&(vt.setOptional(A,re,"batchingTexture"),vt.setValue(A,"batchingTexture",re._matricesTexture,Se),vt.setOptional(A,re,"batchingIdTexture"),vt.setValue(A,"batchingIdTexture",re._indirectTexture,Se),vt.setOptional(A,re,"batchingColorTexture"),re._colorsTexture!==null&&vt.setValue(A,"batchingColorTexture",re._colorsTexture,Se));let vn=ae.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ge.update(re,ae,pn),(oi||Qe.receiveShadow!==re.receiveShadow)&&(Qe.receiveShadow=re.receiveShadow,vt.setValue(A,"receiveShadow",re.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&H.environment!==null&&(en.envMapIntensity.value=H.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=n1()),oi){if(vt.setValue(A,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&Fr(en,Ui),ze&&ne.fog===!0&&he.refreshFogUniforms(en,ze),he.refreshMaterialUniforms(en,ne,me,te,E.state.transmissionRenderTarget[R.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){let Tt=v,Wt=0;for(let Jn of E.state.lightProbeGridArray)Jn.texture!==null&&(Tt.textures[Wt]=Jn.texture,Tt.min[Wt]=Jn.boundingBox.min,Tt.max[Wt]=Jn.boundingBox.max,Tt.resolution[Wt]=Jn.resolution,Wt++);for(let Jn in Tt)Tt[Jn].length=Wt;en.probesSH.value=Tt.textures,en.probesMin.value=Tt.min,en.probesMax.value=Tt.max,en.probesResolution.value=Tt.resolution}Uo.upload(A,Or(Qe),en,Se)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Uo.upload(A,Or(Qe),en,Se),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&vt.setValue(A,"center",re.center),vt.setValue(A,"modelViewMatrix",re.modelViewMatrix),vt.setValue(A,"normalMatrix",re.normalMatrix),vt.setValue(A,"modelMatrix",re.matrixWorld),ne.uniformsGroups!==void 0){let Tt=ne.uniformsGroups;for(let Wt=0,Jn=Tt.length;Wt<Jn;Wt++){let ks=Tt[Wt];Fe.update(ks,pn),Fe.bind(ks,pn)}}return pn}function Fr(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function jo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ye},this.setRenderTargetTextures=function(R,H,ae){let ne=be.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),be.get(R.texture).__webglTexture=H,be.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let ae=be.get(R);ae.__webglFramebuffer=H,ae.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,ae=0){ye=R,Q=H,q=ae;let ne=null,re=!1,ze=!1;if(R){let Ve=be.get(R);if(Ve.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(A.FRAMEBUFFER,Ve.__webglFramebuffer),ee.copy(R.viewport),Me.copy(R.scissor),Ce=R.scissorTest,$.viewport(ee),$.scissor(Me),$.setScissorTest(Ce),Z=-1;return}else if(Ve.__webglFramebuffer===void 0)Se.setupRenderTarget(R);else if(Ve.__hasExternalTextures)Se.rebindTextures(R,be.get(R.texture).__webglTexture,be.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ut=R.depthTexture;if(Ve.__boundDepthTexture!==ut){if(ut!==null&&be.has(ut)&&(R.width!==ut.image.width||R.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(R)}}let Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ze=!0);let nt=be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[H])?ne=nt[H][ae]:ne=nt[H],re=!0):R.samples>0&&Se.useMultisampledRTT(R)===!1?ne=be.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?ne=nt[ae]:ne=nt,ee.copy(R.viewport),Me.copy(R.scissor),Ce=R.scissorTest}else ee.copy(Oe).multiplyScalar(me).floor(),Me.copy(Ye).multiplyScalar(me).floor(),Ce=ue;if(ae!==0&&(ne=z),$.bindFramebuffer(A.FRAMEBUFFER,ne)&&$.drawBuffers(R,ne),$.viewport(ee),$.scissor(Me),$.setScissorTest(Ce),re){let Ve=be.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ve.__webglTexture,ae)}else if(ze){let Ve=H;for(let Ze=0;Ze<R.textures.length;Ze++){let nt=be.get(R.textures[Ze]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ze,nt.__webglTexture,ae,Ve)}}else if(R!==null&&ae!==0){let Ve=be.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ve.__webglTexture,ae)}Z=-1};function Qo(R){let H=be.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=Te.textureFormatReadable(R.format),H.__typeReadable=Te.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,ae,ne,re,ze,je,Ve=0){if(!(R&&R.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(Ze=Ze[je],Array.isArray(Ze)&&(Ze=Ze[0])),Ze){$.bindFramebuffer(A.FRAMEBUFFER,Ze);try{let nt=R.textures[Ve],ut=nt.format,_t=nt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ve);let tt=Qo(nt);if(tt.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-ne&&ae>=0&&ae<=R.height-re&&A.readPixels(H,ae,ne,re,Ne.convert(ut),Ne.convert(_t),ze)}finally{let nt=ye!==null?be.get(ye).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(R,H,ae,ne,re,ze,je,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(Ze=Ze[je],Array.isArray(Ze)&&(Ze=Ze[0])),Ze)if(H>=0&&H<=R.width-ne&&ae>=0&&ae<=R.height-re){$.bindFramebuffer(A.FRAMEBUFFER,Ze);let nt=R.textures[Ve],ut=nt.format,_t=nt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ve);let tt=Qo(nt);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,gt),A.bufferData(A.PIXEL_PACK_BUFFER,ze.byteLength,A.STREAM_READ),A.readPixels(H,ae,ne,re,Ne.convert(ut),Ne.convert(_t),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let Zt=ye!==null?be.get(ye).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,Zt);let Ot=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Hg(A,Ot,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,gt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ze),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(gt),A.deleteSync(Ot),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,ae=0){let ne=Math.pow(2,-ae),re=Math.floor(R.image.width*ne),ze=Math.floor(R.image.height*ne),je=H!==null?H.x:0,Ve=H!==null?H.y:0;Se.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,ae,0,0,je,Ve,re,ze),$.unbindTexture()},this.copyTextureToTexture=function(R,H,ae=null,ne=null,re=0,ze=0){let je,Ve,Ze,nt,ut,_t,tt,gt,Zt,Ot=R.isCompressedTexture?R.mipmaps[ze]:R.image;if(ae!==null)je=ae.max.x-ae.min.x,Ve=ae.max.y-ae.min.y,Ze=ae.isBox3?ae.max.z-ae.min.z:1,nt=ae.min.x,ut=ae.min.y,_t=ae.isBox3?ae.min.z:0;else{let vt=Math.pow(2,-re);je=Math.floor(Ot.width*vt),Ve=Math.floor(Ot.height*vt),R.isDataArrayTexture?Ze=Ot.depth:R.isData3DTexture?Ze=Math.floor(Ot.depth*vt):Ze=1,nt=0,ut=0,_t=0}ne!==null?(tt=ne.x,gt=ne.y,Zt=ne.z):(tt=0,gt=0,Zt=0);let wt=Ne.convert(H.format),Kt=Ne.convert(H.type),Qe;H.isData3DTexture?(Se.setTexture3D(H,0),Qe=A.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Se.setTexture2DArray(H,0),Qe=A.TEXTURE_2D_ARRAY):(Se.setTexture2D(H,0),Qe=A.TEXTURE_2D),$.activeTexture(A.TEXTURE0),$.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),$.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),$.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);let _n=$.getParameter(A.UNPACK_ROW_LENGTH),St=$.getParameter(A.UNPACK_IMAGE_HEIGHT),si=$.getParameter(A.UNPACK_SKIP_PIXELS),pn=$.getParameter(A.UNPACK_SKIP_ROWS),Br=$.getParameter(A.UNPACK_SKIP_IMAGES);$.pixelStorei(A.UNPACK_ROW_LENGTH,Ot.width),$.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ot.height),$.pixelStorei(A.UNPACK_SKIP_PIXELS,nt),$.pixelStorei(A.UNPACK_SKIP_ROWS,ut),$.pixelStorei(A.UNPACK_SKIP_IMAGES,_t);let oi=R.isDataArrayTexture||R.isData3DTexture,Ui=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let vt=be.get(R),en=be.get(H),vn=be.get(vt.__renderTarget),Tt=be.get(en.__renderTarget);$.bindFramebuffer(A.READ_FRAMEBUFFER,vn.__webglFramebuffer),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Wt=0;Wt<Ze;Wt++)oi&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,be.get(R).__webglTexture,re,_t+Wt),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,be.get(H).__webglTexture,ze,Zt+Wt)),A.blitFramebuffer(nt,ut,nt+je,ut+Ve,tt,gt,tt+je,gt+Ve,A.DEPTH_BUFFER_BIT,A.NEAREST);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(re!==0||R.isRenderTargetTexture||be.has(R)){let vt=be.get(R),en=be.get(H);$.bindFramebuffer(A.READ_FRAMEBUFFER,O),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,X);for(let vn=0;vn<Ze;vn++)oi?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,vt.__webglTexture,re,_t+vn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,vt.__webglTexture,re),Ui?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,en.__webglTexture,ze,Zt+vn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,en.__webglTexture,ze),re!==0?A.blitFramebuffer(nt,ut,nt+je,ut+Ve,tt,gt,tt+je,gt+Ve,A.COLOR_BUFFER_BIT,A.NEAREST):Ui?A.copyTexSubImage3D(Qe,ze,tt,gt,Zt+vn,nt,ut,je,Ve):A.copyTexSubImage2D(Qe,ze,tt,gt,nt,ut,je,Ve);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ui?R.isDataTexture||R.isData3DTexture?A.texSubImage3D(Qe,ze,tt,gt,Zt,je,Ve,Ze,wt,Kt,Ot.data):H.isCompressedArrayTexture?A.compressedTexSubImage3D(Qe,ze,tt,gt,Zt,je,Ve,Ze,wt,Ot.data):A.texSubImage3D(Qe,ze,tt,gt,Zt,je,Ve,Ze,wt,Kt,Ot):R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ze,tt,gt,je,Ve,wt,Kt,Ot.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ze,tt,gt,Ot.width,Ot.height,wt,Ot.data):A.texSubImage2D(A.TEXTURE_2D,ze,tt,gt,je,Ve,wt,Kt,Ot);$.pixelStorei(A.UNPACK_ROW_LENGTH,_n),$.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St),$.pixelStorei(A.UNPACK_SKIP_PIXELS,si),$.pixelStorei(A.UNPACK_SKIP_ROWS,pn),$.pixelStorei(A.UNPACK_SKIP_IMAGES,Br),ze===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&A.generateMipmap(Qe),$.unbindTexture()},this.initRenderTarget=function(R){be.get(R).__webglFramebuffer===void 0&&Se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Se.setTextureCube(R,0):R.isData3DTexture?Se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Se.setTexture2DArray(R,0):Se.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){Q=0,q=0,ye=null,$.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};function T0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Ut;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in h.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(h.attributes[g]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in h.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(h.morphAttributes[g]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=h.index.count;else if(h.attributes.position!==void 0)g=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=E0(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=E0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function E0(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new kt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function md(n,e){if(e===Xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Oo||e===tl){let t=n.getIndex();if(t===null){let s=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===Oo)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function A0(n){let e=new Map,t=new Map,i=n.clone();return R0(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function R0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)R0(n.children[i],e.children[i],t)}var Fu=class extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Md(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Bu(t,yt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bu(t,yt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ud(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Tr.extractUrlBase(e);o=Tr.resolveURL(c,this.path)}else o=Tr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new To(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===D0){try{o[yt.KHR_BINARY_GLTF]=new Fd(e)}catch(h){r&&r(h);return}s=JSON.parse(o[yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Wd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case yt.KHR_MATERIALS_UNLIT:o[h]=new vd;break;case yt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Bd(s,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:o[h]=new kd;break;case yt.KHR_MESH_QUANTIZATION:o[h]=new zd;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function i1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Yt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_d=class{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Hn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new bs(u),c.distance=h;break;case"spot":c=new ka(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},vd=class{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,i){let r=[];e.color=new Je(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Hn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,At))}return Promise.all(r)}},bd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Md=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(s,s)}return Promise.all(r)}},Sd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(r)}},wd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Ed=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},Td=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Hn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,At)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},Ad=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},Rd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(s[0],s[1],s[2],Hn),Promise.all(r)}},Cd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Pd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(s[0],s[1],s[2],Hn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,At)),Promise.all(r)}},Id=class{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},Ld=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},Dd=class{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Nd=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Od=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Bu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},Ud=class{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let c of r.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let x=new at,m=new I,p=new $t,b=new I(1,1,1),S=new _s(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,x.compose(m,p,b));let v=null;for(let M in l)if(M==="_COLOR_0"){let E=l[M];S.instanceColor=new yr(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(v===null){let y=S.geometry;v=new Ut,v.name=y.name;for(let w in y.attributes)v.setAttribute(w,y.attributes[w]);for(let w in y.morphAttributes)v.morphAttributes[w]=y.morphAttributes[w];y.index!==null&&v.setIndex(y.index),v.morphTargetsRelative=y.morphTargetsRelative;for(let w of y.groups)v.addGroup(w.start,w.count,w.materialIndex);y.boundingBox!==null&&(v.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(v.boundingSphere=y.boundingSphere.clone()),v.drawRange.start=y.drawRange.start,v.drawRange.count=y.drawRange.count,v.userData=Object.assign({},y.userData),S.geometry=v}let E=l[M];v.setAttribute(M,new yr(E.array,E.itemSize,E.normalized))}Gt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},D0="glTF",ll=12,C0={JSON:1313821514,BIN:5130562},Fd=class{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ll),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==D0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-ll,s=new DataView(e,ll),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===C0.JSON){let c=new Uint8Array(e,ll+o,a);this.content=i.decode(c)}else if(l===C0.BIN){let c=ll+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Bd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Vd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Vd[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=ko[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},a,c,Hn,f)})})}},kd=class{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},zd=class{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}},ku=class extends qi{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,b=1-m,S=p-f+h;for(let v=0;v!==a;v++){let M=o[x+v+a],E=o[x+v+l]*u,y=o[g+v+a],w=o[g+v]*u;s[v]=b*M+S*E+m*y+p*w}return s}},r1=new $t,Hd=class extends ku{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return r1.fromArray(s).normalize().toArray(s),s}},mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ko={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},P0={9728:Xt,9729:qt,9984:$c,9985:Do,9986:Ss,9987:pi},I0={33071:ci,33648:mo,10497:Ti},gd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},s1={CUBICSPLINE:void 0,LINEAR:xs,STEP:gs},xd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function o1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),n.DefaultMaterial}function Ts(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ji(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function a1(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function l1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function c1(n){let e,t=n.extensions&&n.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+yd(t.attributes):e=n.indices+":"+yd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+yd(n.targets[i]);return e}function yd(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Gd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function u1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var h1=new at,Wd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?(this.textureLoader=new Fa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Va(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new To(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ts(s,a,r),Ji(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(Tr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=gd[r.type],a=ko[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new kt(c,o,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=gd[r.type],c=ko[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,S=t.cache.get(b);S||(x=new c(a,p*d,r.count*d/u),S=new qr(x,d/u),t.cache.add(b,S)),m=new Pn(S,l,f%d/u,g)}else a===null?x=new c(r.count*l):x=new c(a,f,r.count*l),m=new kt(x,l,g);if(r.sparse!==void 0){let p=gd.SCALAR,b=ko[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,M=new b(o[1],S,r.sparse.count*p),E=new c(o[2],v,r.sparse.count*l);a!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,w=M.length;y<w;y++){let L=M[y];if(m.setX(L,E[y*l]),l>=2&&m.setY(L,E[y*l+1]),l>=3&&m.setZ(L,E[y*l+2]),l>=4&&m.setW(L,E[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=P0[f.magFilter]||qt,u.minFilter=P0[f.minFilter]||pi,u.wrapS=I0[f.wrapS]||Ti,u.wrapT=I0[f.wrapT]||Ti,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==qt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=r.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,g){t.parse(f,d,g)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,g){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let p=new cn(m);p.needsUpdate=!0,d(p)}),t.load(Tr.resolveURL(f,s.path),x,void 0,g)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Ji(f,o),f.userData.mimeType=o.mimeType||u1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[yt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Eo,In.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new _r,In.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ln}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},l=s.extensions||{},c=[];if(l[yt.KHR_MATERIALS_UNLIT]){let h=r[yt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Hn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Dt);let u=s.alphaMode||xd.OPAQUE;if(u===xd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===xd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ke(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==on){let h=s.emissiveFactor;a.emissive=new Je().setRGB(h[0],h[1],h[2],Hn)}return s.emissiveTexture!==void 0&&o!==on&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,At)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),Ji(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ts(r,h,s),h})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return L0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c1(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=L0(new Ut,c,t),c.mode===mi.TRIANGLE_STRIP?f=f.then(d=>md(d,tl)):c.mode===mi.TRIANGLE_FAN&&(f=f.then(d=>md(d,Oo))),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?o1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=o[d],p,b=c[d];if(m.mode===mi.TRIANGLES||m.mode===mi.TRIANGLE_STRIP||m.mode===mi.TRIANGLE_FAN||m.mode===void 0){let S=s.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&v?new Sa(x,b):new pt(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===mi.LINES)p=new Ea(x,b);else if(m.mode===mi.LINE_STRIP)p=new Wi(x,b);else if(m.mode===mi.LINE_LOOP)p=new Ta(x,b);else if(m.mode===mi.POINTS)p=new Aa(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&l1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ji(p,s),m.extensions&&Ts(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ts(r,h[0],s),h[0];let f=new Ht;s.extensions&&Ts(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ln(ns.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ri(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ji(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new at;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wa(a,l)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],g=r.samplers[d.sampler],x=d.target,m=x.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,b=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let S=0,v=f.length;S<v;S++){let M=f[S],E=d[S],y=g[S],w=x[S],L=m[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let D=i._createAnimationTracks(M,E,y,w,L);if(D)for(let B=0;B<D.length;B++)p.push(D[B])}let b=new Ua(s,void 0,p);return Ji(b,r),b})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,h1)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,g=h[0];u.pivot=new I().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new So:c.length>1?u=new Ht:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ji(u,s),s.extensions&&Ts(i,u,s),s.matrix!==void 0){let h=new at;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new Ht;i.name&&(s.name=r.createUniqueName(i.name)),Ji(s,i),i.extensions&&Ts(t,s,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?s.add(A0(f)):s.add(f)}let c=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof In||f instanceof cn)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}is[s.path]===is.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(is[s.path]){case is.weights:u=Sr;break;case is.rotation:u=wr;break;case is.translation:case is.scale:u=Yr;break;default:i.itemSize===1?u=Sr:u=Yr;break}let h=r.interpolation!==void 0?s1[r.interpolation]:xs,f=this._getArrayFromAccessor(i);for(let d=0,g=l.length;d<g;d++){let x=new u(l[d]+"."+is[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Gd(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof wr?Hd:ku;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function f1(n,e,t){let i=e.attributes,r=new zt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=Gd(ko[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=Gd(ko[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new xn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function L0(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Vd[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return xt.workingColorSpace!==Hn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Ji(n,e),f1(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?a1(n,e.targets,t):n})}var N0={type:"change"},qd={type:"start"},U0={type:"end"},zu=new Gi,O0=new gn,d1=Math.cos(70*ns.DEG2RAD),dn=new I,Zn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xd=1e-6,Hu=class extends Wa{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new $t,this._lastTargetPosition=new I,this._quat=new $t().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jr,this._sphericalDelta=new Jr,this._scale=1,this._panOffset=new I,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new I,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=m1.bind(this),this._onPointerDown=p1.bind(this),this._onPointerUp=g1.bind(this),this._onContextMenu=S1.bind(this),this._onMouseWheel=_1.bind(this),this._onKeyDown=v1.bind(this),this._onTouchStart=b1.bind(this),this._onTouchMove=M1.bind(this),this._onMouseDown=x1.bind(this),this._onMouseMove=y1.bind(this),this._interceptControlDown=w1.bind(this),this._interceptControlUp=E1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(N0),this.update(),this.state=Rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;dn.copy(t).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Zn:i>Math.PI&&(i-=Zn),r<-Math.PI?r+=Zn:r>Math.PI&&(r-=Zn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=dn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zu.origin.copy(this.object.position),zu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zu.direction))<d1?this.object.lookAt(this.target):(O0.setFromNormalAndCoplanarPoint(this.object.up,this.target),zu.intersectPlane(O0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Xd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xd||this._lastTargetPosition.distanceToSquared(this.target)>Xd?(this.dispatchEvent(N0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dn.setFromMatrixColumn(t,0),dn.multiplyScalar(-e),this._panOffset.add(dn)}_panUp(e,t){this.screenSpacePanning===!0?dn.setFromMatrixColumn(t,1):(dn.setFromMatrixColumn(t,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(e),this._panOffset.add(dn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;dn.copy(r).sub(this.target);let s=dn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function p1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function m1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function g1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(U0),this.state=Rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function x1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Rt.DOLLY;break;case jr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}break;case jr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(qd)}function y1(n){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(n.preventDefault(),this.dispatchEvent(qd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(U0))}function v1(n){this.enabled!==!1&&this._handleKeyDown(n)}function b1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1){this.state=Rt.NONE;break}this._handleTouchStartRotate(n),this.state=Rt.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1){this.state=Rt.NONE;break}this._handleTouchStartPan(n),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Rt.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(qd)}function M1(n){switch(this._trackPointer(n),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Rt.NONE}}function S1(n){this.enabled!==!1&&n.preventDefault()}function w1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function E1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Vu=class extends Vn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Xi;e.deleteAttribute("uv");let t=new Ln({side:Mn}),i=new Ln,r=new bs(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new pt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new _s(e,i,6),a=new Gt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new pt(e,zo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new pt(e,zo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new pt(e,zo(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new pt(e,zo(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new pt(e,zo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new pt(e,zo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function zo(n){return new Na({color:0,emissive:16777215,emissiveIntensity:n})}var On=Uint8Array,ii=Uint16Array,jd=Int32Array,Qd=new On([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ep=new On([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),F0=new On([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),G0=function(n,e){for(var t=new ii(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new jd(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},W0=G0(Qd,2),T1=W0.b,Yd=W0.r;T1[28]=258,Yd[258]=28;var X0=G0(ep,0),Q2=X0.b,B0=X0.r,Zd=new ii(32768);for(Ct=0;Ct<32768;++Ct)Rr=(Ct&43690)>>1|(Ct&21845)<<1,Rr=(Rr&52428)>>2|(Rr&13107)<<2,Rr=(Rr&61680)>>4|(Rr&3855)<<4,Zd[Ct]=((Rr&65280)>>8|(Rr&255)<<8)>>1;var Rr,Ct,hl=(function(n,e,t){for(var i=n.length,r=0,s=new ii(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new ii(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ii(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Zd[h]>>l]=c}else for(a=new ii(i),r=0;r<i;++r)n[r]&&(a[r]=Zd[o[n[r]-1]++]>>15-n[r]);return a}),As=new On(288);for(Ct=0;Ct<144;++Ct)As[Ct]=8;var Ct;for(Ct=144;Ct<256;++Ct)As[Ct]=9;var Ct;for(Ct=256;Ct<280;++Ct)As[Ct]=7;var Ct;for(Ct=280;Ct<288;++Ct)As[Ct]=8;var Ct,Gu=new On(32);for(Ct=0;Ct<32;++Ct)Gu[Ct]=5;var Ct,A1=hl(As,9,0);var R1=hl(Gu,5,0);var q0=function(n){return(n+7)/8|0},$0=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new On(n.subarray(e,t))};var C1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Wu=function(n,e,t){var i=new Error(e||C1[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Wu),!t)throw i;return i};var Cr=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},cl=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},$d=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:Z0,l:0};if(r==1){var o=new On(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(M,E){return M.f-E.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var d=new ii(f+1),g=Kd(t[u-1],d,0);if(g>e){var i=0,x=0,m=g-e,p=1<<m;for(s.sort(function(E,y){return d[y.s]-d[E.s]||E.f-y.f});i<r;++i){var b=s[i].s;if(d[b]>e)x+=p-(1<<g-d[b]),d[b]=e;else break}for(x>>=m;x>0;){var S=s[i].s;d[S]<e?x-=1<<e-d[S]++-1:++i}for(;i>=0&&x;--i){var v=s[i].s;d[v]==e&&(--d[v],++x)}g=e}return{t:new On(d),l:g}},Kd=function(n,e,t){return n.s==-1?Math.max(Kd(n.l,e,t+1),Kd(n.r,e,t+1)):e[n.s]=t},k0=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new ii(++e),i=0,r=n[0],s=1,o=function(l){t[i++]=l},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},ul=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},Y0=function(n,e,t){var i=t.length,r=q0(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},z0=function(n,e,t,i,r,s,o,a,l,c,u){Cr(e,u++,t),++r[256];for(var h=$d(r,15),f=h.t,d=h.l,g=$d(s,15),x=g.t,m=g.l,p=k0(f),b=p.c,S=p.n,v=k0(x),M=v.c,E=v.n,y=new ii(19),w=0;w<b.length;++w)++y[b[w]&31];for(var w=0;w<M.length;++w)++y[M[w]&31];for(var L=$d(y,7),D=L.t,B=L.l,V=19;V>4&&!D[F0[V-1]];--V);var z=c+5<<3,O=ul(r,As)+ul(s,Gu)+o,X=ul(r,f)+ul(s,x)+o+14+3*V+ul(y,D)+2*y[16]+3*y[17]+7*y[18];if(l>=0&&z<=O&&z<=X)return Y0(e,u,n.subarray(l,l+c));var Q,q,ye,Z;if(Cr(e,u,1+(X<O)),u+=2,X<O){Q=hl(f,d,0),q=f,ye=hl(x,m,0),Z=x;var G=hl(D,B,0);Cr(e,u,S-257),Cr(e,u+5,E-1),Cr(e,u+10,V-4),u+=14;for(var w=0;w<V;++w)Cr(e,u+3*w,D[F0[w]]);u+=3*V;for(var ee=[b,M],Me=0;Me<2;++Me)for(var Ce=ee[Me],w=0;w<Ce.length;++w){var K=Ce[w]&31;Cr(e,u,G[K]),u+=D[K],K>15&&(Cr(e,u,Ce[w]>>5&127),u+=Ce[w]>>12)}}else Q=A1,q=As,ye=R1,Z=Gu;for(var w=0;w<a;++w){var le=i[w];if(le>255){var K=le>>18&31;cl(e,u,Q[K+257]),u+=q[K+257],K>7&&(Cr(e,u,le>>23&31),u+=Qd[K]);var k=le&31;cl(e,u,ye[k]),u+=Z[k],k>3&&(cl(e,u,le>>5&8191),u+=ep[k])}else cl(e,u,Q[le]),u+=q[le]}return cl(e,u,Q[256]),u+q[256]},P1=new jd([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Z0=new On(0),I1=function(n,e,t,i,r,s){var o=s.z||n.length,a=new On(i+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(i,a.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var h=P1[e-1],f=h>>13,d=h&8191,g=(1<<t)-1,x=s.p||new ii(32768),m=s.h||new ii(g+1),p=Math.ceil(t/3),b=2*p,S=function(Re){return(n[Re]^n[Re+1]<<p^n[Re+2]<<b)&g},v=new jd(25e3),M=new ii(288),E=new ii(32),y=0,w=0,L=s.i||0,D=0,B=s.w||0,V=0;L+2<o;++L){var z=S(L),O=L&32767,X=m[z];if(x[O]=X,m[z]=O,B<=L){var Q=o-L;if((y>7e3||D>24576)&&(Q>423||!c)){u=z0(n,l,0,v,M,E,w,D,V,L-V,u),D=y=w=0,V=L;for(var q=0;q<286;++q)M[q]=0;for(var q=0;q<30;++q)E[q]=0}var ye=2,Z=0,G=d,ee=O-X&32767;if(Q>2&&z==S(L-ee))for(var Me=Math.min(f,Q)-1,Ce=Math.min(32767,L),K=Math.min(258,Q);ee<=Ce&&--G&&O!=X;){if(n[L+ye]==n[L+ye-ee]){for(var le=0;le<K&&n[L+le]==n[L+le-ee];++le);if(le>ye){if(ye=le,Z=ee,le>Me)break;for(var k=Math.min(ee,le-2),te=0,q=0;q<k;++q){var me=L-ee+q&32767,Ee=x[me],We=me-Ee&32767;We>te&&(te=We,X=me)}}}O=X,X=x[O],ee+=O-X&32767}if(Z){v[D++]=268435456|Yd[ye]<<18|B0[Z];var Oe=Yd[ye]&31,Ye=B0[Z]&31;w+=Qd[Oe]+ep[Ye],++M[257+Oe],++E[Ye],B=L+ye,++y}else v[D++]=n[L],++M[n[L]]}}for(L=Math.max(L,B);L<o;++L)v[D++]=n[L],++M[n[L]];u=z0(n,l,c,v,M,E,w,D,V,L-V,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=m,s.p=x,s.i=L,s.w=B)}else{for(var L=s.w||0;L<o+c;L+=65535){var ue=L+65535;ue>=o&&(l[u/8|0]=c,ue=o),u=Y0(l,u+1,n.subarray(L,ue))}s.i=o}return $0(a,0,i+q0(u)+r)},L1=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),D1=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=L1[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var N1=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new On(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return I1(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},K0=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var wn=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function O1(n,e){return N1(n,e||{},0,0)}var J0=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=K0(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?t[o]=[s,a]:(t[o+="/"]=[new On(0),a],J0(s,o,t,i))}},H0=typeof TextEncoder<"u"&&new TextEncoder,U1=typeof TextDecoder<"u"&&new TextDecoder,F1=0;try{U1.decode(Z0,{stream:!0}),F1=1}catch{}function fl(n,e){if(e){for(var t=new On(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(H0)return H0.encode(n);for(var r=n.length,s=new On(n.length+(n.length>>1)),o=0,a=function(u){s[o++]=u},i=0;i<r;++i){if(o+5>s.length){var l=new On(o+8+(r-i<<1));l.set(s),s=l}var c=n.charCodeAt(i);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++i)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return $0(s,0,o)}var Jd=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Wu(9),e+=i+4}return e},V0=function(n,e,t,i,r,s,o,a){var l=i.length,c=t.extra,u=a&&a.length,h=Jd(c);wn(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Wu(10),wn(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(wn(n,e,t.crc),wn(n,e+4,s<0?-s-2:s),wn(n,e+8,t.size)),wn(n,e+12,l),wn(n,e+14,h),e+=16,o!=null&&(wn(n,e,u),wn(n,e+6,t.attrs),wn(n,e+10,o),e+=14),n.set(i,e),e+=l,h)for(var g in c){var x=c[g],m=x.length;wn(n,e,+g),wn(n,e+2,m),n.set(x,e+4),e+=4+m}return u&&(n.set(a,e),e+=u),e},B1=function(n,e,t,i,r){wn(n,e,101010256),wn(n,e+8,t),wn(n,e+10,t),wn(n,e+12,i),wn(n,e+16,r)};function j0(n,e){e||(e={});var t={},i=[];J0(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=fl(o),f=h.length,d=c.comment,g=d&&fl(d),x=g&&g.length,m=Jd(c.extra);f>65535&&Wu(11);var p=u?O1(l,c):l,b=p.length,S=D1();S.p(l),i.push(K0(c,{size:l.length,crc:S.d(),c:p,f:h,m:g,u:f!=o.length||g&&d.length!=x,o:r,compression:u})),r+=30+f+m+b,s+=76+2*(f+m)+(x||0)+b}for(var v=new On(s+22),M=r,E=s-r,y=0;y<i.length;++y){var h=i[y];V0(v,h.o,h,h.f,h.u,h.c.length);var w=30+h.f.length+Jd(h.extra);v.set(h.c,h.o+w),V0(v,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+w+(h.m?h.m.length:0)}return B1(v,r,i.length,E,M),v}var Un=class{constructor(e,t="",i=[],r=[]){this.name=e,this.type=t,this.metadata=i,this.properties=r,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(u=>{let h=u.key,f=u.value;if(Array.isArray(f)){let d=[];return d.push(`${h} = {`),f.forEach(g=>{d.push(`${t}		${g}`)}),d.push(`${t}	}`),d.join(`
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
${t}}`}},qu=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,r){this.parseAsync(e,r).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,r={},s="model.usda";r[s]=null;let o=z1(e,t.animations);t.animationTracks=o;let a=new Un("Root","Xform"),l=new Un("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",u=new Un(c,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),u.addMetadata("sceneName",`"${c}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),l.addChild(u);let h,f={},d={};e.isScene?sx(e,u,f,i,r,t):ox(e,u,f,i,r,t);let g=Z1(f,d,t.quickLookCompatible),x=o.size>0?{fps:t.animationFrameRate,endTimeCode:H1(t.animations)*t.animationFrameRate}:null;h=rx(x)+`
`+a.toString()+`

`+g.toString(),r[s]=fl(h),h=null;for(let p in d){let b=d[p];if(b.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");b=await this.textureUtils.decompress(b)}let S=k1(b.image,b.flipY,t.maxTextureSize),v=b.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",M=await new Promise(E=>S.toBlob(E,v));r[`textures/Texture_${p}.${ix(b)}`]=new Uint8Array(await M.arrayBuffer())}let m=0;for(let p in r){let b=r[p],S=34+p.length;m+=S;let v=m&63;if(v!==4){let M=64-v,E=new Uint8Array(M);r[p]=[b,{extra:{12345:E}}]}m=b.length}return j0(r,{level:0,mtime:new Date})}};function nx(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function ix(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function k1(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),r=document.createElement("canvas");r.width=n.width*Math.min(1,i),r.height=n.height*Math.min(1,i);let s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(n,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var bt=7;function rx(n=null){return`#usda 1.0
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
`}function z1(n,e){let t=new Map;for(let i=0;i<e.length;i++){let r=e[i];for(let s=0;s<r.tracks.length;s++){let o=r.tracks[s],a=It.parseTrackName(o.name),l=It.findNode(n,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let u=t.get(l);u===void 0&&(u={},t.set(l,u)),u[c]=o}}return t}function H1(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function Q0(n,e,t,i){let r=t.times,s=t.values,o=[];for(let a=0;a<r.length;a++){let l=a*3;o.push(`${(r[a]*i).toPrecision(bt)}: (${s[l].toPrecision(bt)}, ${s[l+1].toPrecision(bt)}, ${s[l+2].toPrecision(bt)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function V1(n,e){let t=n.times,i=n.values,r=[];for(let s=0;s<t.length;s++){let o=s*4;r.push(`${(t[s]*e).toPrecision(bt)}: (${i[o+3].toPrecision(bt)}, ${i[o].toPrecision(bt)}, ${i[o+1].toPrecision(bt)}, ${i[o+2].toPrecision(bt)})`)}return`quatf xformOp:orient.timeSamples = {
	${r.join(`,
	`)},
}`}function sx(n,e,t,i,r,s){for(let o=0,a=n.children.length;o<a;o++)ox(n.children[o],e,t,i,r,s)}function ox(n,e,t,i,r,s){if(n.visible===!1&&s.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),c=l?n.material:[n.material];for(let h=0;h<c.length;h++){let f=c[h];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let u=c.map(h=>t[h.uuid]);if(l===!1){let h=`geometries/Geometry_${a.id}.usda`;if(!(h in r)){let f=X1(a);r[h]=fl(rx()+`
`+f.toString())}}o=G1(n,a,u,i,s)}else n.isCamera?o=j1(n,i,s):o=lx(n,i,s);e.addChild(o),sx(n,o,t,i,r,s)}function ax(n,e,t){let i=t.animationTracks.get(e),r=e.pivot!==null;if(!r&&i===void 0){let c=W1(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${c}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let s=t.animationFrameRate,o=e.position,a=e.quaternion,l=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(Q0("xformOp:translate","float3",i.position,s)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(bt)}, ${o.y.toPrecision(bt)}, ${o.z.toPrecision(bt)})`),r){let c=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(bt)}, ${c.y.toPrecision(bt)}, ${c.z.toPrecision(bt)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(V1(i.quaternion,s)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(bt)}, ${a.x.toPrecision(bt)}, ${a.y.toPrecision(bt)}, ${a.z.toPrecision(bt)})`),i!==void 0&&i.scale!==void 0?n.addProperty(Q0("xformOp:scale","float3",i.scale,s)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(bt)}, ${l.y.toPrecision(bt)}, ${l.z.toPrecision(bt)})`),r?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function lx(n,e,t){let i=nx(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Un(i,"Xform");return ax(r,n,t),r}function G1(n,e,t,i,r){let s=lx(n,i,r);return t.length===1?(s.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),s.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),s.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):s.addChild(cx(e,t)),s}function W1(n){let e=n.elements;return`( ${Xu(e,0)}, ${Xu(e,4)}, ${Xu(e,8)}, ${Xu(e,12)} )`}function Xu(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function X1(n){let e=new Un("Geometry"),t=cx(n);return e.addChild(t),e}function cx(n,e=null){let t="Geometry",i=n.attributes,r=i.position.count,s=new Un(t,"Mesh");s.addProperty(`int[] faceVertexCounts = [${q1(n)}]`),s.addProperty(`int[] faceVertexIndices = [${$1(n)}]`),s.addProperty(`normal3f[] normals = [${tp(i.normal,r)}]`,['interpolation = "vertex"']),s.addProperty(`point3f[] points = [${tp(i.position,r)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=i["uv"+l];c!==void 0&&s.addProperty(`texCoord2f[] primvars:st${l} = [${Y1(c)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&s.addProperty(`color3f[] primvars:displayColor = [${tp(o,r)}]`,['interpolation = "vertex"']),s.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let c=0;c<a.length;c++){let u=a[c],h=e[u.materialIndex];if(h===void 0)continue;let f=Math.floor(u.start/3),d=Math.min(f+Math.floor(u.count/3),l),g=[];for(let m=f;m<d;m++)g.push(m);let x=new Un(`subset_${c}`,"GeomSubset");x.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),x.addProperty('uniform token elementType = "face"'),x.addProperty('uniform token familyName = "materialBind"'),x.addProperty(`int[] indices = [${g.join(", ")}]`),x.addProperty(`rel material:binding = </Materials/Material_${h.id}>`),s.addChild(x)}}return s}function q1(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function $1(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let r=0;r<i;r++)t.push(r)}return t.join(", ")}function tp(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let r=n.getX(i),s=n.getY(i),o=n.getZ(i);t.push(`(${r.toPrecision(bt)}, ${s.toPrecision(bt)}, ${o.toPrecision(bt)})`)}return t.join(", ")}function Y1(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),r=n.getY(t);e.push(`(${i.toPrecision(bt)}, ${1-r.toPrecision(bt)})`)}return e.join(", ")}function Z1(n,e,t=!1){let i=new Un("Materials");for(let r in n){let s=n[r];i.addChild(K1(s,e,t))}return i}function K1(n,e,t=!1){let i=new Un(`Material_${n.id}`,"Material");function r(o,a,l){let c=o.source.id+"_"+o.flipY;e[c]=o;let u=o.channel>0?"st"+o.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),g=o.rotation,x=Math.sin(g),m=Math.cos(g);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=x/f.x,d.y+=m-1):(d.x+=x*f.x,d.y+=(1-m)*f.y);let p=new Un(`PrimvarReader_${a}`,"Shader");p.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),p.addProperty("float2 inputs:fallback = (0.0, 0.0)"),p.addProperty(`string inputs:varname = "${u}"`),p.addProperty("float2 outputs:result");let b=new Un(`Transform2d_${a}`,"Shader");b.addProperty('uniform token info:id = "UsdTransform2d"'),b.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),b.addProperty(`float inputs:rotation = ${(g*(180/Math.PI)).toFixed(bt)}`),b.addProperty(`float2 inputs:scale = ${tx(f)}`),b.addProperty(`float2 inputs:translation = ${tx(d)}`),b.addProperty("float2 outputs:result");let S=new Un(`Texture_${o.id}_${a}`,"Shader");if(S.addProperty('uniform token info:id = "UsdUVTexture"'),S.addProperty(`asset inputs:file = @textures/Texture_${c}.${ix(o)}@`),S.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let v=a==="diffuse"?n.opacity:1;S.addProperty(`float4 inputs:scale = ${J1(l,v)}`)}if(a==="normal"){let v=n.normalScale.x;S.addProperty(`float4 inputs:scale = (${2*v}, ${2*v}, 2, 1)`),S.addProperty(`float4 inputs:bias = (${-v}, ${-v}, -1, 0)`)}return S.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===Ii?"raw":"sRGB"}"`),S.addProperty(`token inputs:wrapS = "${h[o.wrapS]}"`),S.addProperty(`token inputs:wrapT = "${h[o.wrapT]}"`),S.addProperty("float outputs:r"),S.addProperty("float outputs:g"),S.addProperty("float outputs:b"),S.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&S.addProperty("float outputs:a"),[p,b,S]}n.side===Dt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let s=new Un("PreviewSurface","Shader");if(s.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(s.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),s.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),r(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):s.addProperty(`color3f inputs:diffuseColor = ${ex(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){s.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new Je(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);r(n.emissiveMap,"emissive",a).forEach(c=>i.addChild(c))}else n.emissive.getHex()>0&&s.addProperty(`color3f inputs:emissiveColor = ${ex(n.emissive)}`)}if(n.normalMap&&(s.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),r(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){s.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new Je(o,o,o);r(n.aoMap,"occlusion",a).forEach(c=>i.addChild(c))}if(n.roughnessMap){s.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new Je(n.roughness,n.roughness,n.roughness);r(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){s.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new Je(n.metalness,n.metalness,n.metalness);r(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),s.addProperty("float inputs:opacityThreshold = 0.0001"),r(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):s.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){s.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new Je(n.clearcoat,n.clearcoat,n.clearcoat);r(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){s.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new Je(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);r(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);s.addProperty(`float inputs:ior = ${n.ior}`)}return s.addProperty("int inputs:useSpecularWorkflow = 0"),s.addProperty("token outputs:surface"),i.addChild(s),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function ex(n){return`(${n.r}, ${n.g}, ${n.b})`}function J1(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function tx(n){return`(${n.x}, ${n.y})`}function j1(n,e,t){let i=nx(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Un(i,"Camera");ax(r,n,t);let s=n.isOrthographicCamera?"orthographic":"perspective";r.addProperty(`token projection = "${s}"`);let o=`(${n.near.toPrecision(bt)}, ${n.far.toPrecision(bt)})`;r.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(bt):a=n.getFilmWidth().toPrecision(bt),r.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(bt):l=n.getFilmHeight().toPrecision(bt),r.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let c=n.getFocalLength().toPrecision(bt);r.addProperty(`float focalLength = ${c}`);let u=n.focus.toPrecision(bt);r.addProperty(`float focusDistance = ${u}`)}return r}var ux=new zt,$u=new I,Li=class extends Ha{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Vt(e,3)),this.setAttribute("uv",new Vt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Kr(t,6,1);return this.setAttribute("instanceStart",new Pn(i,3,0)),this.setAttribute("instanceEnd",new Pn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Kr(t,6,1);return this.setAttribute("instanceColorStart",new Pn(i,3,0)),this.setAttribute("instanceColorEnd",new Pn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Da(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ux.setFromBufferAttribute(t),this.boundingBox.union(ux))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$u.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($u)),$u.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared($u));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ke},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Wn.line={uniforms:il.merge([Ge.common,Ge.fog,Ge.line]),vertexShader:`
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
		`};var ji=class extends yn{constructor(e){super({type:"LineMaterial",uniforms:il.clone(Wn.line.uniforms),vertexShader:Wn.line.vertexShader,fragmentShader:Wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var np=new Mt,hx=new I,fx=new I,En=new Mt,Tn=new Mt,Qi=new Mt,ip=new I,rp=new at,An=new Ga,dx=new I,Yu=new zt,Zu=new xn,er=new Mt,tr,Rs;function px(n,e,t){return er.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),er.multiplyScalar(1/er.w),er.x=Rs/t.width,er.y=Rs/t.height,er.applyMatrix4(n.projectionMatrixInverse),er.multiplyScalar(1/er.w),Math.abs(Math.max(er.x,er.y))}function Q1(n,e){let t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){An.start.fromBufferAttribute(r,a),An.end.fromBufferAttribute(s,a),An.applyMatrix4(t);let c=new I,u=new I;tr.distanceSqToSegment(An.start,An.end,u,c),u.distanceTo(c)<Rs*.5&&e.push({point:u,pointOnLine:c,distance:tr.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function eT(n,e,t){let i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;tr.at(1,Qi),Qi.w=1,Qi.applyMatrix4(e.matrixWorldInverse),Qi.applyMatrix4(i),Qi.multiplyScalar(1/Qi.w),Qi.x*=s.x/2,Qi.y*=s.y/2,Qi.z=0,ip.copy(Qi),rp.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(En.fromBufferAttribute(l,f),Tn.fromBufferAttribute(c,f),En.w=1,Tn.w=1,En.applyMatrix4(rp),Tn.applyMatrix4(rp),En.z>h&&Tn.z>h)continue;if(En.z>h){let S=En.z-Tn.z,v=(En.z-h)/S;En.lerp(Tn,v)}else if(Tn.z>h){let S=Tn.z-En.z,v=(Tn.z-h)/S;Tn.lerp(En,v)}En.applyMatrix4(i),Tn.applyMatrix4(i),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=s.x/2,En.y*=s.y/2,Tn.x*=s.x/2,Tn.y*=s.y/2,An.start.copy(En),An.start.z=0,An.end.copy(Tn),An.end.z=0;let x=An.closestPointToPointParameter(ip,!0);An.at(x,dx);let m=ns.lerp(En.z,Tn.z,x),p=m>=-1&&m<=1,b=ip.distanceTo(dx)<Rs*.5;if(p&&b){An.start.fromBufferAttribute(l,f),An.end.fromBufferAttribute(c,f),An.start.applyMatrix4(o),An.end.applyMatrix4(o);let S=new I,v=new I;tr.distanceSqToSegment(An.start,An.end,v,S),t.push({point:v,pointOnLine:S,distance:tr.origin.distanceTo(v),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var rs=class extends pt{constructor(e=new Li,t=new ji({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)hx.fromBufferAttribute(t,o),fx.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+hx.distanceTo(fx);let s=new Kr(r,2,1);return e.setAttribute("instanceDistanceStart",new Pn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Pn(s,1,1)),this}raycast(e,t){let i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;tr=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Rs=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Zu.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Rs*.5;else{let h=Math.max(r.near,Zu.distanceToPoint(tr.origin));c=px(r,h,l.resolution)}if(Zu.radius+=c,tr.intersectsSphere(Zu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Yu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Rs*.5;else{let h=Math.max(r.near,Yu.distanceToPoint(tr.origin));u=px(r,h,l.resolution)}Yu.expandByScalar(u),tr.intersectsBox(Yu)!==!1&&(i?Q1(this,t):eT(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(np),this.material.uniforms.resolution.value.set(np.z,np.w))}};var xx="blueprints.edgeMode",tT="blueprints.edgesEnabled",Cs="none",Ps="transparent",pl="opaque",nT=20,yx=2.5,_x=0,Ju=35e-5,op=2e-6;function iT(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*op}var dl=1,vx=4,rT=.0012,sT=.0036,oT=.02,aT=.0035,mx=.012;function gx(n){return n===Cs||n===Ps||n===pl?n:n==="1"||n==="true"?Ps:n==="0"||n==="false"?Cs:null}function bx(){try{let n=gx(localStorage.getItem(xx));if(n)return n;let e=gx(localStorage.getItem(tT));if(e)return lp(e),e}catch{}return Ps}function lp(n){try{localStorage.setItem(xx,n)}catch{}}function Fn(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function Mx(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new Ia(n,nT),i=t.getAttribute("position"),r=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),r}function lT(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var Ku=new I;function Sx(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],r=n[t+1],s=n[t+2],o=n[t+3],a=n[t+4],l=n[t+5],c=o-i,u=a-r,h=l-s,f=Math.hypot(c,u,h);f<1e-6||e.push({ax:i,ay:r,az:s,bx:o,by:a,bz:l,dx:c/f,dy:u/f,dz:h/f,len:f})}return e}function cT(n,e,t,i,r,s){let o=d=>Math.round(d/5e-4),a=o(n),l=o(e),c=o(t),u=o(i),h=o(r),f=o(s);if(a>u||a===u&&l>h||a===u&&l===h&&c>f){let d=a;a=u,u=d;let g=l;l=h,h=g;let x=c;c=f,f=x}return`${a},${l},${c},${u},${h},${f}`}function wx(n){let e=Sx(n),t=[],i=new Set;for(let r=0;r<e.length;r++){let s=e[r];for(let o=r+1;o<e.length;o++){let a=e[o];if(Math.abs(s.dx*a.dx+s.dy*a.dy+s.dz*a.dz)<.985)continue;let c=s.ax-a.ax,u=s.ay-a.ay,h=s.az-a.az,f=c*s.dx+u*s.dy+h*s.dz,d=c-f*s.dx,g=u-f*s.dy,x=h-f*s.dz,m=Math.hypot(d,g,x);if(m<rT||m>sT)continue;let p=(a.ax-s.ax)*s.dx+(a.ay-s.ay)*s.dy+(a.az-s.az)*s.dz,b=(a.bx-s.ax)*s.dx+(a.by-s.ay)*s.dy+(a.bz-s.az)*s.dz,S=Math.max(0,Math.min(p,b)),v=Math.min(s.len,Math.max(p,b));if(v-S<oT)continue;let M=-d/m*(m*.5),E=-g/m*(m*.5),y=-x/m*(m*.5),w=s.ax+s.dx*S+M,L=s.ay+s.dy*S+E,D=s.az+s.dz*S+y,B=s.ax+s.dx*v+M,V=s.ay+s.dy*v+E,z=s.az+s.dz*v+y,O=cT(w,L,D,B,V,z);i.has(O)||(i.add(O),t.push(w,L,D,B,V,z))}}return new Float32Array(t)}function uT(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,r=0,s=0,o=t?t.count:e.count,a=c=>{let u=t?t.getX(c):c;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let c=0;c+2<o;c+=3){let u=a(c),h=a(c+1),f=a(c+2),d=h[0]-u[0],g=h[1]-u[1],x=h[2]-u[2],m=f[0]-u[0],p=f[1]-u[1],b=f[2]-u[2];i+=g*b-x*p,r+=x*m-d*b,s+=d*p-g*m}let l=Math.hypot(i,r,s)||1;return{x:i/l,y:r/l,z:s/l}}function hT(n,e){let t=n.getAttribute("position"),i,r,s;Math.abs(e.z)<.9?(i=-e.y,r=e.x,s=0):(i=0,r=-e.z,s=e.y);let o=Math.hypot(i,r,s)||1;i/=o,r/=o,s/=o;let a=e.y*s-e.z*r,l=e.z*i-e.x*s,c=e.x*r-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let g=0;g<t.count;g++){let x=t.getX(g),m=t.getY(g),p=t.getZ(g),b=x*i+m*r+p*s,S=x*a+m*l+p*c;b<u&&(u=b),b>h&&(h=b),S<f&&(f=S),S>d&&(d=S)}return Math.min(h-u,d-f)}function fT(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=uT(n),i=hT(n,t);return t.z>.5?i>mx:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>mx}function Ex(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let r=0;r<e.length;r+=3)Ku.set(e[r],e[r+1],e[r+2]).applyMatrix4(t),i[r]=Ku.x,i[r+1]=Ku.y,i[r+2]=Ku.z;return i}function dT(n,e,t){if(!t||t.length<6)return n;let i=Ex(e,n),r=Sx(t),s=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],l=i[o+1],c=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,g=h-l,x=f-c,m=Math.hypot(d,g,x);if(m<1e-6)continue;let p=d/m,b=g/m,S=x/m,v=!1;for(let M of r){if(Math.abs(p*M.dx+b*M.dy+S*M.dz)<.95)continue;let y=a-M.ax,w=l-M.ay,L=c-M.az,D=y*M.dx+w*M.dy+L*M.dz,B=y-D*M.dx,V=w-D*M.dy,z=L-D*M.dz;if(Math.hypot(B,V,z)>aT)continue;let O=(a-M.ax)*M.dx+(l-M.ay)*M.dy+(c-M.az)*M.dz,X=(u-M.ax)*M.dx+(h-M.ay)*M.dy+(f-M.az)*M.dz,Q=Math.min(O,X),q=Math.max(O,X);if(Math.min(q,M.len)-Math.max(Q,0)>.01){v=!0;break}}v||s.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(s)}function pT(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function mT(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function gT(n,e=Ps){return e===Cs?0:e===pl?n?.visible===!1?0:1:mT(n)}function ap(n,e,t=1,i=op){let r=Math.max(0,Math.min(1,Number(t)||0)),s=Number.isFinite(i)?i:op,o=new ji({color:_x,linewidth:yx,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:r<1,opacity:r<1?r:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${Ju};
			end.z += ${Ju};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if ${hp}
				gl_FragDepth -= ${s};
			#else
				gl_FragDepth = gl_FragCoord.z - ${s};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${vx}-${s}-${Ju}`,e&&o.resolution.set(e.x,e.y),o}function Tx(n,e,t,i){let r=Math.max(0,Math.min(1,Number(e)||0)),s=ap(t,null,r);s.depthTest=!1,s.depthWrite=!1,s.transparent=!0,s.opacity=r;let o=s.onBeforeCompile?.bind(s),a=s.customProgramCacheKey?.bind(s);s.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,s.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},s.needsUpdate=!0;let l=new Li;l.setPositions(n);let c=new rs(l,s);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.renderOrder=1e3,c.raycast=()=>{},c.userData.isPeeledEdgeBatch=!0,c}function ju(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function Ax(n){if(!n)return;let e=[];n.traverse(t=>{Fn(t)&&e.push(t)});for(let t of e)ju(t)}function ss(n,e){n&&n.traverse(t=>{Fn(t)&&(t.visible=e)})}function Rx(n,e,t){if(!n)return;let i=Math.max(1,e),r=Math.max(1,t);n.traverse(s=>{if(!Fn(s)||!s.material)return;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a?.resolution&&a.resolution.set(i,r)})}function cp(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!Fn(i)||!i.material)return;let r=Array.isArray(i.material)?i.material:[i.material];for(let s of r){if(!s)continue;let o=s.clippingPlanes?s.clippingPlanes.length:0;s.clippingPlanes=t,s.clipIntersection=!1,o!==t.length&&(s.needsUpdate=!0)}})}function xT(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=Mx(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?wx(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?fT(n.geometry)?dT(i,n,t):new Float32Array(0):i}function yT(n,e,t,i,r){n.updateWorldMatrix(!0,!1);let s=xT(n,i,r),o=Qu(t,n.matrixWorld),a=Px(n.geometry,o),l=lT(s,a),c=new Li,u=e.geometry;l.length>=6?(c.setPositions(l),e.geometry=c,e.computeLineDistances()):e.geometry=c,u?.dispose?.()}function _T(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let r=i.userData.bpHardEdgePositions;r instanceof Float32Array||(r=Mx(i.geometry),i.userData.bpHardEdgePositions=r);let s=wx(r);if(s.length<6)continue;let o=Ex(i,s);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function Cx(n,e,t={}){let i=t.clippingPlanes??[],r=t.resolution||null,s=t.edgeMode??Ps,o=e?_T(n):new Float32Array(0);for(let[a,l]of n)for(let c of l){if(!c||!c.isMesh||!c.geometry||Fn(c))continue;let u=null;for(let d of c.children)if(Fn(d)){u=d;break}if(!e){u&&ju(u);continue}u&&!u.isLineSegments2&&(ju(u),u=null);let h=gT(c,s),f=iT(c);if(u){let d=u.material,g=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${vx}-${f}-${Ju}`;if(!d||typeof d.customProgramCacheKey!="function"||g!==x){ju(u);let m=ap(i,r,h,f),p=new Li;u=new rs(p,m),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(dl),c.add(u)}else d.color&&d.color.setHex(_x),typeof d.linewidth=="number"&&(d.linewidth=yx),d.clippingPlanes=i,d.clipIntersection=!1,r&&d.resolution&&d.resolution.set(r.x,r.y),pT(d,h),d.needsUpdate=!0}else{let d=ap(i,r,h,f),g=new Li;u=new rs(g,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(dl),c.add(u)}u.layers.set(dl),yT(c,u,i,a,o)}}function vT(n){if(!n.isMesh||Fn(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function up(n,e,t,i,r={}){if(!i)return;let s=!!r.reuseDepth,o=!1;if(i.traverse(x=>{Fn(x)&&(o=!0)}),!o){sp(n);return}let a=n.autoClear,l=e.background,c=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,s){ss(i,!0),t.layers.set(dl),n.render(e,t),t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,sp(n);return}ss(i,!1);let h=[];i.traverse(x=>{!vT(x)||x.visible===!1||(h.push(x),x.visible=!1)});let f=[],d=new Set;e.traverse(x=>{if(!x.isMesh||Fn(x)||x.visible===!1)return;let m=Array.isArray(x.material)?x.material:[x.material];for(let p of m)!p||d.has(p)||(d.add(p),f.push({mat:p,colorWrite:p.colorWrite!==!1,depthWrite:p.depthWrite!==!1}),p.colorWrite=!1,p.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let x of f)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of h)x.visible=!0}ss(i,!0);let g=[];r.opaqueEdgesOnly&&i.traverse(x=>{if(!Fn(x))return;let m=Array.isArray(x.material)?x.material[0]:x.material;m&&m.transparent&&m.opacity<1-1e-4&&(g.push(x),x.visible=!1)}),t.layers.set(dl);try{n.render(e,t)}finally{for(let x of g)x.visible=!0}t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,sp(n)}function sp(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var Ix=!0,Lx=5,pp=12,bT=pp,Nx=.001,MT=.5,ST=1;function Dx(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let r=t.children;if(r)for(let s=0;s<r.length;s++){let o=r[s];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var eh=1e5,Di={value:0},jt={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Nx},uResolution:{value:new Ke(1,1)}};function fp(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Di.value),t.tPrevViewZ&&(t.tPrevViewZ.value=jt.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=jt.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=jt.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=jt.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(jt.uResolution.value)}function ml(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,r)=>{t?.(i,r),i.uniforms.uPeelStage=Di,i.uniforms.tPrevViewZ=jt.tPrevViewZ,i.uniforms.tPeelViewZ=jt.tPeelViewZ,i.uniforms.tOpaqueViewZ=jt.tOpaqueViewZ,i.uniforms.uViewZEps=jt.uViewZEps,i.uniforms.uResolution=jt.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
#endif`)},n.needsUpdate=!0}function dp(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function Ox(n){let e=new Ke,t=new Je,i=null,r=null,s=null,o=null,a=null,l=null,c=new Ri(-1,1,1,-1,0,1),u=new Vn,h=new yn({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Je(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new pt(new hi(2,2),h);u.add(f);let d=new yn({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Gc,blendSrc:Ya,blendDst:es,blendSrcAlpha:Ya,blendDstAlpha:es,blendEquation:Ci}),g=new pt(new hi(2,2),d),x=new Vn;x.add(g);let m=new yn({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:fi}),p=new pt(new hi(2,2),m),b=new Vn;b.add(p);let S=new yn({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:fi}),v=new pt(new hi(2,2),S),M=new Vn;M.add(v);function E(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function y(A){E();let j=n.autoClear;n.setRenderTarget(A),n.autoClear=!1,n.render(M,c),n.autoClear=j}let w=new yn({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Dt,clipping:!0,blending:fi});function L(A,j,J={}){m.uniforms.uValue.value=j;let Te=n.autoClear;E(),n.setRenderTarget(A),J.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(b,c),n.autoClear=Te}function D(){i?.dispose(),r?.dispose(),s?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),i=null,r=null,s=null,o=null,a=null,l=null}let B=0;function V(A,j,J){let Te=Math.max(1,Math.floor(A)),$=Math.max(1,Math.floor(j)),ve=Math.min(1,Math.max(.25,J)),be=Math.max(1,Math.floor(Te*ve)),Se=Math.max(1,Math.floor($*ve));if(i&&i.width===Te&&i.height===$&&s&&s.width===be&&s.height===Se&&B===ve)return;D(),B=ve,i=new sn(Te,$,{format:Sn,type:Dn,colorSpace:At,depthBuffer:!0,stencilBuffer:!1});let P={format:Sn,type:Gn,depthBuffer:!0,stencilBuffer:!1,magFilter:Xt,minFilter:Xt};r=new sn(be,Se,P),s=new sn(be,Se,P),o=new sn(be,Se,P),a=new sn(be,Se,{format:Sn,type:Yn,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:qt,minFilter:qt}),l=new sn(be,Se,{format:Sn,type:Yn,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:qt,minFilter:qt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,jt.tOpaqueViewZ.value=r.texture,jt.uResolution.value.set(be,Se)}function z(A){let j=[],J=[];return A?(A.traverse(Te=>{if(!Te.isMesh||!Te.visible||Fn(Te))return;let $=Te,ve=Array.isArray($.material)?$.material:[$.material],be=!1;for(let Se of ve)if(Se&&Se.transparent&&Se.opacity<1-1e-4){be=!0;break}be?J.push($):j.push($)}),{opaque:j,transparent:J}):{opaque:j,transparent:J}}function O(A,j){for(let J of A)J.visible=j}function X(A,j){A.blending=j.blending,A.blendSrc=j.blendSrc,A.blendDst=j.blendDst,A.blendSrcAlpha=j.blendSrcAlpha,A.blendDstAlpha=j.blendDstAlpha,A.blendEquation=j.blendEquation,A.blendEquationAlpha=j.blendEquation}let Q={meshes:[],sources:[],key:""},q={meshes:[],sources:[],key:""},ye="",Z="",G=new Vn,ee=new Vn,Me=new Vn,Ce=[];function K(A){for(let j of A.meshes)j.geometry.dispose();A.meshes=[],A.sources=[],A.key=""}function le(){for(let A of Ce){Me.remove(A),A.geometry?.dispose?.();let j=A.material;if(Array.isArray(j))for(let J of j)J?.dispose?.();else j?.dispose?.()}Ce=[]}function k(){K(Q),K(q),le(),ye="",Z=""}function te(A){if(le(),!A.length)return;let j=new Map,J=new I;for(let $ of A){let ve=null;for(let pe of $.children)if(Fn(pe)){ve=pe;break}if(!ve?.geometry)continue;let be=ve.material,Se=be&&be.transparent&&typeof be.opacity=="number"?be.opacity:1;if(!(Se<1-1e-4))continue;let P=ve.geometry.getAttribute("instanceStart"),T=ve.geometry.getAttribute("instanceEnd");if(!P||!T||!P.count)continue;let W=Se.toFixed(3),_e=j.get(W);_e||(_e={opacity:Se,planes:be.clippingPlanes||[],chunks:[]},j.set(W,_e)),$.updateWorldMatrix(!0,!1);let de=P.count,he=new Float32Array(de*6);for(let pe=0;pe<de;pe++)J.fromBufferAttribute(P,pe).applyMatrix4($.matrixWorld),he[pe*6]=J.x,he[pe*6+1]=J.y,he[pe*6+2]=J.z,J.fromBufferAttribute(T,pe).applyMatrix4($.matrixWorld),he[pe*6+3]=J.x,he[pe*6+4]=J.y,he[pe*6+5]=J.z;_e.chunks.push(he)}let Te={stage:Di,prevZ:jt.tPrevViewZ,peelZ:jt.tPeelViewZ,opaqueZ:jt.tOpaqueViewZ,eps:jt.uViewZEps,resolution:jt.uResolution};for(let $ of j.values()){let ve=0;for(let T of $.chunks)ve+=T.length;if(ve<6)continue;let be=new Float32Array(ve),Se=0;for(let T of $.chunks)be.set(T,Se),Se+=T.length;let P=Tx(be,$.opacity,$.planes,Te);Me.add(P),Ce.push(P)}}function me(A,j,J,Te){if(!J.length)return;let $=`${Dx(J)}#${Dx(j)}`;Te&&Te===ye&&$===Z&&Q.meshes.length||(Oe(Q,A,J),Oe(q,A,j),Q.sources.length===J.length&&q.sources.length===j.length&&(te(J),ye=Te||"",Z=$))}function Ee(A){return Object.keys(A.attributes).sort().join(",")}function We(A){let j=A.geometry,J=j.index?j.toNonIndexed():j.clone();return J.applyMatrix4(A.matrixWorld),J}function Oe(A,j,J){let Te=String(J.length);for(let ve of J){let be=Array.isArray(ve.material)?"m":ve.material?.id||0;Te+=`.${ve.id}:${be}`}if(Te===A.key)return;j.updateWorldMatrix(!0,!0),K(A),A.key=Te;let $=new Map;for(let ve of J){if(!ve.geometry||Array.isArray(ve.material)||!ve.material)continue;let be=`${ve.material.uuid}:${Ee(ve.geometry)}`,Se=$.get(be);Se||(Se={mat:ve.material,meshes:[]},$.set(be,Se)),Se.meshes.push(ve)}for(let ve of $.values()){let be=[];try{for(let T of ve.meshes)be.push(We(T));let Se=T0(be,!1);if(!Se)continue;let P=new pt(Se,ve.mat);P.frustumCulled=!1,P.matrixAutoUpdate=!1,P.renderOrder=0,P.userData.isPeelBatch=!0,A.meshes.push(P),A.sources.push(...ve.meshes)}catch{}finally{for(let Se of be)Se.dispose()}}}function Ye(A,j,J,Te){if(!A.meshes.length||A.sources.length!==j.length)return n.render(J,Te),!1;G.environment=J.environment,G.environmentIntensity=J.environmentIntensity,G.fog=J.fog;let $=[];for(let ve of J.children)ve.isLight&&$.push(ve);for(let ve of $)G.add(ve);for(let ve of A.meshes)G.add(ve);n.render(G,Te);for(let ve of A.meshes)G.remove(ve);for(let ve of $)J.add(ve);return!0}function ue(A,j,J){Ye(Q,J,A,j)}function Re(A,j,J){J.length&&Ye(q,J,A,j)}function He(A,j,J){if(!q.meshes.length||q.sources.length!==j.length)return!1;ee.overrideMaterial=J;for(let Te of q.meshes)ee.add(Te);n.render(ee,A),ee.overrideMaterial=null;for(let Te of q.meshes)ee.remove(Te);return!0}function Le(A){let j=new Set;for(let J of A){let Te=Array.isArray(J.material)?J.material:[J.material];for(let $ of Te)$&&j.add($)}return[...j]}function Xe(A,j,J){if(!J)return;let Te=J.visible,$=A.background,ve=n.autoClear;J.visible=!1,A.background=null,n.autoClear=!1,E(),n.clearDepth(),n.render(A,j),J.visible=Te,A.background=$,n.autoClear=ve}function qe(A){return A.children.filter(j=>j.userData?.blueprintAnnotations)}function ot(A,j){for(let J of A)J.visible=j}function se(A,j,J){qe(A).some(Te=>Te.visible)&&Xe(A,j,J)}function ke(A,j,J,Te={}){ss(J,!1);let $=qe(A),ve=$.map(be=>be.visible);ot($,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(A,j),Te.skipEdges||up(n,A,j,J,{reuseDepth:!!Te.reuseDepth}),$.forEach((be,Se)=>{be.visible=ve[Se]}),se(A,j,J)}function et(A,j,J,Te,$={}){if(!(Ix&&(typeof Te=="function"?Te():!!Te)))return Di.value=0,ke(A,j,J,{reuseDepth:!0}),!1;if($.quality!=="high"){Di.value=0,ke(A,j,J,{reuseDepth:!0});let Y=$.batchKey||"";if(J&&!$.deferPrime&&Y!==ye){let Pe=z(J);me(J,Pe.opaque,Pe.transparent,Y)}return!0}let{opaque:be,transparent:Se}=z(J);if(!Se.length)return Di.value=0,ke(A,j,J,{reuseDepth:!0}),!1;J&&me(J,be,Se,$.batchKey||"");let P=$.quality==="high",T=P?ST:MT,W=P?pp:Lx;n.getDrawingBufferSize(e),V(e.x,e.y,T);let _e=n.autoClear,de=n.toneMapping,he=A.background;he instanceof Je?t.copy(he):t.set(1118481),h.uniforms.uBackground.value.copy(t);let pe=[];for(let Y of[...be,...Se])pe.push({mesh:Y,visible:Y.visible});let ie=Le(Se),ce=[];for(let Y of ie)ml(Y),ce.push({mat:Y,snap:{blending:Y.blending,blendSrc:Y.blendSrc,blendDst:Y.blendDst,blendSrcAlpha:Y.blendSrcAlpha,blendDstAlpha:Y.blendDstAlpha,blendEquation:Y.blendEquation,blendEquationAlpha:Y.blendEquationAlpha,depthWrite:Y.depthWrite,depthTest:Y.depthTest,transparent:Y.transparent,opacity:Y.opacity,colorWrite:Y.colorWrite,side:Y.side,forceSinglePass:Y.forceSinglePass}});dp(ie,!0);let De=new Map;for(let Y of Se)De.set(Y,Y.onBeforeRender),Y.onBeforeRender=function(rt,Ie,dt,Bt,Qt,Xn){let Oi=Array.isArray(Qt)?Qt:[Qt];for(let kn of Oi)kn&&fp(kn);let ls=De.get(Y);typeof ls=="function"&&ls.call(this,rt,Ie,dt,Bt,Qt,Xn)};let F=null;for(let Y of ie)if(Y.clippingPlanes?.length){F=Y.clippingPlanes;break}if(!F)for(let Y of be){let Pe=Array.isArray(Y.material)?Y.material:[Y.material];for(let rt of Pe)if(rt?.clippingPlanes?.length){F=rt.clippingPlanes;break}if(F)break}w.clippingPlanes=F||[],w.clipIntersection=!1,A.background=null,n.autoClear=!0,Di.value=0;let ge=[];for(let Y of A.children)Y!==J&&(Y.isLight||(ge.push({obj:Y,visible:Y.visible}),Y.visible=!1));function fe(){for(let[Y,Pe]of De)Y.onBeforeRender=Pe}function Be(){for(let{mat:Y,snap:Pe}of ce)X(Y,Pe),Y.blendEquationAlpha=Pe.blendEquationAlpha,Y.depthWrite=Pe.depthWrite,Y.depthTest=Pe.depthTest,Y.transparent=Pe.transparent,Y.opacity=Pe.opacity,Y.colorWrite=Pe.colorWrite!==!1,Y.side=Pe.side,Y.forceSinglePass=Pe.forceSinglePass,Y.needsUpdate=!0;for(let{mesh:Y,visible:Pe}of pe)Y.visible=Pe;for(let{obj:Y,visible:Pe}of ge)Y.visible=Pe;return fe(),dp(ie,!1),Di.value=0,A.background=he,A.overrideMaterial=null,n.toneMapping=de,n.setRenderTarget(null),n.autoClear=!0,ke(A,j,J),n.autoClear=_e,!1}if(O(Se,!1),O(be,!0),ss(J,!1),E(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),Re(A,j,be),n.setRenderTarget(r),n.setClearColor(0,1),L(r,eh,{clearDepth:!0}),P){let Y=new Float32Array(4);try{n.readRenderTargetPixels(r,2,2,1,1,Y)}catch{Y[0]=0}if(!Number.isFinite(Y[0])||Y[0]<eh*.5)return Be()}let Ne=A.overrideMaterial;n.setRenderTarget(r),n.autoClear=!1,He(j,be,w)||(A.overrideMaterial=w,n.render(A,j),A.overrideMaterial=Ne),n.autoClear=!0,jt.tOpaqueViewZ.value=r.texture,y(a),L(o,0),jt.tPrevViewZ.value=o.texture,O(be,!1),O(Se,!0),ss(J,!1);let Ue=!1;for(let Y=0;Y<W;Y++){jt.tPrevViewZ.value=o.texture,jt.tPeelViewZ.value=o.texture,Di.value=1;for(let{mat:Ie}of ce)Ie.depthWrite=!0,Ie.depthTest=!0,Ie.colorWrite=!0,Ie.transparent=!0,Ie.forceSinglePass=!0,X(Ie,{blending:fi,blendSrc:es,blendDst:qa,blendSrcAlpha:es,blendDstAlpha:qa,blendEquation:Ci}),fp(Ie);E(),n.setRenderTarget(s),n.setClearColor(0,1),n.clear(!1,!0,!1),L(s,eh),n.setRenderTarget(s),n.autoClear=!1,ue(A,j,Se),n.autoClear=!0,jt.tPeelViewZ.value=s.texture,Di.value=2;for(let{mat:Ie}of ce)Ie.depthWrite=!1,Ie.depthTest=!1,Ie.colorWrite=!0,Ie.transparent=!0,Ie.forceSinglePass=!0,X(Ie,{blending:Yi,blendSrc:$a,blendDst:Po,blendSrcAlpha:es,blendDstAlpha:Po,blendEquation:Ci}),fp(Ie);y(l);let Pe=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(l),ue(A,j,Se),n.autoClear=Pe,Ce.length&&l){for(let dt of Ce)dt.material?.resolution?.set(l.width,l.height);let Ie=j.layers.mask;j.layers.set(0),n.autoClear=!1,n.render(Me,j),j.layers.mask=Ie,n.autoClear=!0}Ue=!0,d.uniforms.tSrc.value=l.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(x,c),n.autoClear=!0;let rt=o;o=s,s=rt}if(!Ue)return Be();for(let{mat:Y,snap:Pe}of ce)X(Y,Pe),Y.blendEquationAlpha=Pe.blendEquationAlpha,Y.depthWrite=Pe.depthWrite,Y.depthTest=Pe.depthTest,Y.transparent=Pe.transparent,Y.opacity=Pe.opacity,Y.colorWrite=Pe.colorWrite!==!1,Y.side=Pe.side,Y.forceSinglePass=Pe.forceSinglePass;for(let{mesh:Y,visible:Pe}of pe)Y.visible=Pe;for(let{obj:Y,visible:Pe}of ge)Y.visible=Pe;fe(),ss(J,!0),dp(ie,!1),Di.value=0,A.background=he,n.toneMapping=de,n.setRenderTarget(null),n.autoClear=!0,n.render(u,c);let Fe=qe(A),st=Fe.map(Y=>Y.visible);return ot(Fe,!1),P&&J&&up(n,A,j,J,{opaqueEdgesOnly:Ce.length>0}),Fe.forEach((Y,Pe)=>{Y.visible=st[Pe]}),se(A,j,J),n.autoClear=_e,!0}function xe(){k(),D(),h.dispose(),f.geometry.dispose(),d.dispose(),g.geometry.dispose(),m.dispose(),p.geometry.dispose(),S.dispose(),v.geometry.dispose(),w.dispose()}return{render:et,dispose:xe,MAX_PEELS:bT,MAX_PEELS_FAST:Lx,MAX_PEELS_HIGH:pp,VIEW_Z_EPSILON:Nx,USE_DEPTH_PEEL:Ix}}var Fx="blueprints.materialMode",th="solid",gl="realistic",wT={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},ET={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},TT=2e-6,AT=3,hp="defined( USE_LOGARITHMIC_DEPTH_BUFFER ) || defined( USE_LOGDEPTHBUF )";function gp(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),r=n.customProgramCacheKey?.bind(n),s=TT.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if ${hp}
	{
		float bpFaceBias = ${t}.0 * ${s};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${r?r():n.type}|bpLayerDepth-r${AT}-${t}`,n.needsUpdate=!0}var RT=[];function Bx(n,e,t){let i=new Set(n),r=Array.isArray(e)&&e.length?e:RT,s=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),c.push({type:"leaf",id:u,label:s(u)});continue}let h=o(u.children||[]);h.length&&c.push({type:"group",id:u.id,label:s(u.id),children:h})}return c}let a=o(r);if(i.size){let l=[...i].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:s(c)}));a.push({type:"group",id:"other",label:s("other"),children:l})}return a}function kx(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let r of e)r.type==="group"&&t.set(r.id,nh(r));let i={};for(let[r,s]of Object.entries(n)){let o=t.get(r);if(o&&o.length)for(let a of o)i[a]=s;else i[r]=s}return i}function nh(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...nh(t));return e}function CT(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let r of n.children||[]){if(!r?.userData?.isEdgeOverlay||!r.material)continue;let s=Array.isArray(r.material)?r.material:[r.material];for(let o of s)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Pr(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),r=t.edgeMode??"transparent";for(let s of n){if(!s)continue;if(i<=0||s.userData?.bpIfcHidden){s.visible=!1;continue}if(s.visible=!0,!s.isMesh)continue;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a&&(i<1?(a.transparent=!0,a.opacity=i,a.depthWrite=!1,a.depthTest=!0,a.side=Dt,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Dt,a.forceSinglePass=!1,a.blending=Yi,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof s.userData.opaqueRenderOrder!="number"&&(s.userData.opaqueRenderOrder=s.renderOrder||0),s.renderOrder=i<1?0:s.userData.opaqueRenderOrder,CT(s,i,r);for(let a of s.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=s.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=i,c.transparent=i<1,c.depthWrite=i>=1,c.depthTest=!0,c.forceSinglePass=i<1,c.side=Dt,c.needsUpdate=!0)}}}var PT={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},mp=new Map;function IT(n){if(!n||n==="none")return null;let e=mp.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let r=i.getContext("2d");if(!r)return null;if(n==="wood"){r.fillStyle="#c49858",r.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;r.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,r.lineWidth=1.2,r.beginPath(),r.moveTo(0,o+a*.15),r.lineTo(t,o-a*.1),r.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;r.fillStyle="rgba(70, 40, 15, 0.22)",r.fillRect(a,l,2,7+o%5)}}else if(n==="foam"){r.fillStyle="#9ed468",r.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;r.beginPath(),r.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.55)",r.fill(),r.strokeStyle="rgba(40,90,30,0.35)",r.stroke()}}else if(n==="plaster"){let o=r.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}r.putImageData(o,0,0)}else if(n==="wool"){r.fillStyle="#88c860",r.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;r.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",r.fillRect(a,l,1+o%2,2+o%3)}}else if(n==="metal"){let o=r.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),r.fillStyle=o,r.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(0,a,t,2),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(0,a+4,t,2)}else if(n==="masonry"){r.fillStyle="#b88868",r.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;r.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,r.fillRect(h+1,f+1,a-2,o-2),r.strokeStyle="rgba(70,45,30,0.55)",r.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let s=new vr(i);return s.colorSpace=At,s.wrapS=Ti,s.wrapT=Ti,s.repeat.set(2.5,2.5),s.needsUpdate=!0,mp.set(n,s),s}function Ux(n){return new Je(n[0]/255,n[1]/255,n[2]/255)}function LT(n){return wT[n]||[160,160,160]}function DT(n,e,t=0){n.side=Dt,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],gp(n,t),ml(n),n.needsUpdate=!0}function zx(n){n.computeBoundingBox();let e=n.boundingBox,t=new I;e.getSize(t);let i=Math.max(t.x,1e-6),r=Math.max(t.y,1e-6),s=Math.max(t.z,1e-6),o=Math.max(i,r,s);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),l=n.getAttribute("normal");if(!a)return o;let c=n.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new I;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(l.getX(f)),g=Math.abs(l.getY(f)),x=Math.abs(l.getZ(f)),m,p;g>=d&&g>=x?(m=(h.x-e.min.x)/i,p=(h.z-e.min.z)/s):d>=x?(m=(h.z-e.min.z)/s,p=(h.y-e.min.y)/r):(m=(h.x-e.min.x)/i,p=(h.y-e.min.y)/r),u[f*2]=m,u[f*2+1]=p}return n.setAttribute("uv",new kt(u,2)),o}function NT(n,e){let t=IT(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let r=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(r,r),i}function Hx(n,e,t={}){let i=t.clippingPlanes??null,r=e===gl,s=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of n){let c=LT(a),u=ET[a]??0,h=1e3;if(r)for(let p of l)p.isMesh&&p.geometry&&(h=Math.max(h,zx(p.geometry)));let f=1,d;if(r){let p=PT[a]||{color:c,roughness:.7,metalness:0,map:"none"};f=typeof p.opacity=="number"?p.opacity:1;let b=Ux(p.color),S=NT(p.map||"none",h);p.clearcoat?d=new un({color:b,map:S,roughness:p.roughness,metalness:p.metalness,clearcoat:p.clearcoat,clearcoatRoughness:p.clearcoatRoughness??.3,envMapIntensity:.85}):d=new Ln({color:b,map:S,roughness:p.roughness,metalness:p.metalness,envMapIntensity:p.metalness>.05?1.1:.55})}else d=new on({color:Ux(c)});DT(d,i,u),d.userData.presetOpacity=f;let g=new Set;for(let p of l){if(!p.isMesh)continue;let b=p.material;if(b){let S=Array.isArray(b)?b:[b];for(let v of S)g.add(v)}p.material=d,p.userData.opaqueRenderOrder=u,p.renderOrder=u}for(let p of g)p!==d&&(p.map&&[...mp.values()].includes(p.map)?p.map=null:p.map&&(p.map.dispose?.(),p.map=null),p.dispose?.());let x=1;s&&(s instanceof Map?x=s.has(a)?s.get(a):1:typeof s[a]=="number"&&(x=s[a]));let m=Math.max(0,Math.min(1,f*(Number(x)||0)));Pr(l,m,{edgeMode:o})}}function Vx(n,e){let i=(Array.isArray(n)?n:[n]).map(r=>{if(!r)return new Ln({color:13421772,roughness:.65,metalness:0,side:ti});let s=r.color?r.color.clone():new Je(13421772),o=typeof r.roughness=="number"?r.roughness:.65,a=typeof r.metalness=="number"?r.metalness:0,l=null;r.map&&e&&(zx(e),l=r.map.clone(),l.needsUpdate=!0);let c=new Ln({color:s,map:l,roughness:o,metalness:a,side:ti,transparent:!!r.transparent,opacity:typeof r.opacity=="number"?r.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(n)?i:i[0]}function Gx(){try{let n=localStorage.getItem(Fx);if(n===gl||n===th)return n}catch{}return th}function Wx(n){try{localStorage.setItem(Fx,n)}catch{}}var nr=1e-5,Xx=new WeakMap;function ri(n,e,t,i){let r=t/(t-i);return n.clone().lerp(e,r)}function OT(n,e,t){let[i,r,s]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(r),l=e.distanceToPoint(s),c=o>=-nr,u=a>=-nr,h=l>=-nr,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,r,s]);return}if(f===0)return;let d=[i,r,s],g=[o,a,l],x=[c,u,h];if(f===1){let S=x.findIndex(Boolean),v=(S+1)%3,M=(S+2)%3,E=d[S],y=ri(d[S],d[v],g[S],g[v]),w=ri(d[S],d[M],g[S],g[M]);t.push([E,y,w]);return}let m=x.findIndex(S=>!S),p=(m+1)%3,b=(m+2)%3;if(x[p]){let S=d[p],v=d[b],M=ri(d[m],d[p],g[m],g[p]),E=ri(d[m],d[b],g[m],g[b]);t.push([S,v,M]),t.push([v,E,M])}else{let S=d[b],v=ri(d[m],d[p],g[m],g[p]),M=ri(d[m],d[b],g[m],g[b]);t.push([S,v,M])}}function UT(n,e){let[t,i,r]=n,s=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(r),l=s>=-nr,c=o>=-nr,u=a>=-nr,h=(l?1:0)+(c?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,r],d=[s,o,a],g=[l,c,u];if(h===1){let b=g.findIndex(Boolean),S=(b+1)%3,v=(b+2)%3;return[ri(f[b],f[S],d[b],d[S]),ri(f[b],f[v],d[b],d[v])]}let x=g.findIndex(b=>!b),m=(x+1)%3,p=(x+2)%3;return g[m]?[ri(f[x],f[m],d[x],d[m]),ri(f[x],f[p],d[x],d[p])]:[ri(f[x],f[m],d[x],d[m]),ri(f[x],f[p],d[x],d[p])]}function FT(n,e,t){let i=n.clone(),r=e.clone();for(let s of t){let o=s.distanceToPoint(i),a=s.distanceToPoint(r),l=o>=-nr,c=a>=-nr;if(l&&c)continue;if(!l&&!c)return null;let u=ri(i,r,o,a);l?r=u:i=u}return i.distanceToSquared(r)<nr*nr?null:[i,r]}function BT(n,e){let t=n;for(let i of e){let r=[];for(let s of t)OT(s,i,r);if(t=r,t.length===0)break}return t}function kT(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new I,r=[],s=n.getIndex();function o(a,l,c){r.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(s)for(let a=0;a<s.count;a+=3)o(s.getX(a),s.getX(a+1),s.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return r}function zT(n){let e=n.getAttribute("position");if(!e)return[];let t=new I,i=[],r=n.getIndex();function s(o,a,l){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(r)for(let o=0;o<r.count;o+=3)s(r.getX(o),r.getX(o+1),r.getX(o+2));else for(let o=0;o<e.count;o+=3)s(o,o+1,o+2);return i}var Is=1e-6,qx=2e-4,HT=2e-4,$x=new WeakMap;function VT(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function Yx(n){let e=t=>Math.round(t/Is);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function Jx(n,e){let t=VT(e),i=$x.get(n);if(i&&i.key===t)return i;let r=[],s=[],o=Xx.get(n);if(o||(o=zT(n),Xx.set(n,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((f,d)=>d!==l),h=[];for(let f of o){let d=UT(f,c);if(!d)continue;let g=u.length?FT(d[0],d[1],u):d;g&&(h.push(g),r.push(g[0].x,g[0].y,g[0].z,g[1].x,g[1].y,g[1].z))}s.push(h)}let a={key:t,segments:new Float32Array(r),perPlane:s};return $x.set(n,a),a}function GT(n,e,t){let i=new Map;for(let l of n.keys())i.set(l,l);function r(l){let c=l;for(;i.get(c)!==c;){let u=i.get(i.get(c));i.set(c,u),c=u}return c}function s(l){let c=r(l),u=0;for(let h of t.get(c)||[])e[h].dead||u++;return u}function o(){let l=[];for(let c of n.keys())r(c)===c&&s(c)%2&&l.push(c);return l}let a=qx*qx;for(let l=0;l<e.length+2;l++){let c=o();if(c.length<2)break;let u=-1,h=-1,f=1/0;for(let p=0;p<c.length;p++){let b=n.get(c[p]);for(let S=p+1;S<c.length;S++){let v=n.get(c[S]),M=b.x-v.x,E=b.y-v.y,y=b.z-v.z,w=M*M+E*E+y*y;w<f&&(f=w,u=p,h=S)}}if(f>a)break;let d=c[u],g=c[h],x=n.get(d),m=n.get(g);x.add(m).multiplyScalar(.5);for(let p of t.get(g)||[]){let b=e[p];if(b.dead)continue;let S=r(b.a===g?b.b:b.a);if(S===d){b.dead=!0;continue}b.a=d,b.b=S,t.has(d)||t.set(d,[]),t.get(d).push(p)}i.set(g,d)}}function WT(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let l=Yx(o),c=Yx(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1,dead:!1}),i.has(l)||i.set(l,[]),i.has(c)||i.set(c,[]),i.get(l).push(u),i.get(c).push(u)}GT(e,t,i);function r(o,a){let l=i.get(o)||[],c=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of l){if(t[d].used||t[d].dead)continue;if(!f)return d;let g=t[d],x=g.a===o?g.b:g.a,m=e.get(x),p=h.x-f.x,b=h.y-f.y,S=h.z-f.z,v=m.x-h.x,M=m.y-h.y,E=m.z-h.z,y=p*v+b*M+S*E;y>u&&(u=y,c=d)}return c}let s=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],l=[],c=o,u=t[c].a,h=u,f=null,d=!1,g=t.length+2;for(let x=0;x<g;x++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let m=t[c].a===u?t[c].b:t[c].a;if(m===h){d=!0;break}let p=r(m,u);if(p<0)break;f=u,u=m,c=p}d&&a.length>=3&&s.push(a)}return s}function XT(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new I(1,0,0):new I(0,1,0),i=new I().crossVectors(t,e).normalize(),r=new I().crossVectors(e,i).normalize();return{u:i,v:r,n:e}}function qT(n,e,t,i){return n.map(r=>{let s=r.clone().sub(e);return{x:s.dot(t),y:s.dot(i),p3:r}})}function $T(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function YT(n){return $T(n)<0&&n.reverse(),n}function Zx(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){let o=t[r].y,a=t[s].y,l=t[r].x,c=t[s].x;o>e!=a>e&&n<(c-l)*(e-o)/(a-o+0)+l&&(i=!i)}return i}function Ir(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function ZT(n,e,t,i){let r=Ir(n,e,t),s=Ir(n,e,i),o=Ir(t,i,n),a=Ir(t,i,e);return r*s<0&&o*a<0}function Kx(n,e,t,i){let r=t.length;for(let s=0;s<r;s++){let o=(s+1)%r;if(!(i>=0&&(s===i||o===i))&&ZT(n,e,t[s],t[o]))return!0}return!1}function KT(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],r=-1,s=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],g=n[(f+1)%o];if(d.y>i.y==g.y>i.y)continue;let x=g.y-d.y;if(Math.abs(x)<1e-15)continue;let m=(i.y-d.y)/x;if(m<-1e-8||m>1+1e-8)continue;let p=d.x+m*(g.x-d.x);p>=i.x-1e-8&&p<s&&(s=p,r=f)}let a=[];r>=0&&a.push(r,(r+1)%o);let l=0,c=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<c&&(c=d,l=f)}a.push(l);let u=-1;for(let f of a)if(!Kx(i,n[f],n,f)&&!Kx(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function xp(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=Is*Is}function JT(n,e,t,i){if(xp(n,e)||xp(n,t)||xp(n,i))return!1;let r=Ir(e,t,n),s=Ir(t,i,n),o=Ir(i,e,n),a=r<-1e-14||s<-1e-14||o<-1e-14,l=r>1e-14||s>1e-14||o>1e-14;return!(a&&l)}function jT(n){let e=[];for(let r of n){let s=e[e.length-1];s&&(s.x-r.x)**2+(s.y-r.y)**2<Is*Is||e.push(r)}if(e.length>=2){let r=e[0],s=e[e.length-1];(r.x-s.x)**2+(r.y-s.y)**2<Is*Is&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let r=!1,s=e.length;for(let o=0;o<s;o++){let a=(o+s-1)%s,l=(o+1)%s,c=e[a],u=e[o],h=e[l],f=Ir(c,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),r=!0;break}let d=!1;for(let g=0;g<s;g++)if(!(g===o||g===a||g===l)&&JT(e[g],c,u,h)){d=!0;break}if(!d){t.push([c.p3,u.p3,h.p3]),e.splice(o,1),r=!0;break}}if(!r)break}return e.length===3&&Ir(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function QT(n,e,t){if(!n.length)return[];let{u:i,v:r,n:s}=XT(e.normal),o=n[0][0],a=n.map(u=>YT(qT(u,o,i,r))),l=a.map((u,h)=>{let f=u[0],d=0;for(let g=0;g<a.length;g++)g!==h&&Zx(f.x,f.y,a[g])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!Zx(a[d][0].x,a[d][0].y,h))continue;let g=KT(h,a[d]);g&&(h=g)}let f=jT(h);for(let d of f)c.push(d.map(g=>g.clone().addScaledVector(s,t)))}return c}function jx(n,e){return!n||!e?.length?[]:Jx(n,e).perPlane}function Qx(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=WT(n),r=QT(i,e,HT+Math.max(0,t));if(!r.length)return new Float32Array(0);let s=new Float32Array(r.length*9),o=0;for(let[a,l,c]of r)s[o++]=a.x,s[o++]=a.y,s[o++]=a.z,s[o++]=l.x,s[o++]=l.y,s[o++]=l.z,s[o++]=c.x,s[o++]=c.y,s[o++]=c.z;return s}function Px(n,e){return!n||!e?.length?new Float32Array(0):Jx(n,e).segments}function Qu(n,e){if(!n?.length)return[];let t=new at().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function eA(n){let e=new Float32Array(n.length*9),t=0;for(let[r,s,o]of n)e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new Ut;return i.setAttribute("position",new kt(e,3)),i.computeVertexNormals(),i}function ey(n,e){if(!n.visible||!n.geometry)return null;let t=kT(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?BT(t,e):t;if(i.length===0)return null;let r=eA(i),s=Vx(n.material,r),o=new pt(r,s);return o.name=n.name,o}var tA=5e-5;function rh(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function yp(n){return n?Array.isArray(n)?n[0]||null:n:null}function ny(n,e){let t;return n.isMeshPhysicalMaterial?t=new un:n.isMeshStandardMaterial?t=new Ln:t=new on,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=Dt,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,gp(t,n.userData?.layerDepthBias||0),ml(t),t.needsUpdate=!0,t}function ih(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function nA(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function iA(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function iy(n,e){let t=new Set;for(let i of n){let r=i.parent;if(!r||t.has(r))continue;t.add(r);let s=iA(r,e);if(s)return s}return null}function ty(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let r=yp(i.material);r&&(e.color&&r.color&&r.color.copy(e.color),r.opacity=typeof e.opacity=="number"?e.opacity:1,r.transparent=!!e.transparent,r.depthWrite=e.depthWrite!==!1,r.depthTest=e.depthTest!==!1,r.forceSinglePass=!!e.forceSinglePass,r.side=Dt,r.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function rA(n,e,t,i){let r=e.filter(d=>d?.isMesh&&d.visible&&!rh(d)&&d.geometry),s=iy(e,n);if(!r.length||!t.length){s&&ih(s);return}let o=r[0],a=o.parent;if(!a)return;s&&s.parent!==a&&ih(s);let l=s&&s.parent===a?s:new Ht;for(let d of[...l.children])ih(d);l.parent||(l.name=`${n}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=n,a.add(l));let c=yp(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new at().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of r){d.updateWorldMatrix(!0,!1);let g=Qu(t,d.matrixWorld),x=jx(d.geometry,g);for(let m=0;m<t.length;m++){let p=x[m]||[];for(let[b,S]of p)f[m].push([b.clone().applyMatrix4(d.matrixWorld),S.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let g=Qx(f[d],t[d],h*tA);if(g.length<9)continue;for(let b=0;b<g.length;b+=3){let S=new I(g[b],g[b+1],g[b+2]).applyMatrix4(u);g[b]=S.x,g[b+1]=S.y,g[b+2]=S.z}let x=new Ut;x.setAttribute("position",new kt(g,3)),x.computeVertexNormals();let m=t.filter((b,S)=>S!==d),p=new pt(x,ny(c,m));p.name=`${n}__cap${d}`,p.userData.isSectionCap=!0,p.userData.capPlaneIndex=d,p.userData.capLabel=n,p.renderOrder=o.renderOrder,p.raycast=()=>{},l.add(p)}l.userData.bpCapSig=i,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function _p(n,e){let t=e||[],i=nA(t);for(let[r,s]of n){let o=(s||[]).filter(u=>u&&!rh(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=iy(o,r);if(!t.length||!a.length){l&&ih(l);continue}let c=yp(a[0].material);if(l&&l.userData.bpCapSig===i&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){ty(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===i&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((x,m)=>m!==f):t;u.material=ny(c,d);let g=Array.isArray(h)?h:[h];for(let x of g)x&&(x.map=null),x?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,ty(l,c,a[0].renderOrder||0);continue}rA(r,o,t,i)}}var sA=2,oA=.45,ry=.015;function vp(n){let e=new zt().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:ry};let t=new I;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),r=i>sA?oA/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:r,liftM:ry}}function sy(n,e=vp(n)){let{cx:t,cz:i,minY:r,scale:s,liftM:o}=e;return n.position.set(-t*s,-r*s+o,-i*s),n.scale.setScalar(s),n.updateMatrixWorld(!0),e}var aA=`
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
`,oy=!1;function lA(){if(oy)return;oy=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=aA,document.head.appendChild(n)}function ay(n){lA();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),r=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return r.matches}function c(){return a}function u(){for(let se of o)se(a)}function h(se){o.push(se),se(a)}function f(){if(!e||!i)return;let se=document.getElementById("sheet-inspector"),ke=document.getElementById("sheet-main");if(se&&!se.hidden&&ke?.hidden){let P=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(P)&&P>0)return P}let et=document.getElementById("section-view"),xe=document.getElementById("section-cuts"),A=t?.offsetHeight||22,j=16,J=0;if(et&&(J+=et.offsetHeight),xe){let P=xe.querySelector(".sheet-title"),T=xe.querySelector(".cut-row");J+=32,P&&(J+=P.offsetHeight+8),T?J+=T.offsetHeight:J+=xe.offsetHeight}let Te=A+J+j,$=window.innerHeight||640,ve=Math.round($*.28),be=Math.round($*.45),Se=Math.max(ve,Math.min(be,Math.round(Te)));return e.style.setProperty("--sheet-partial-h",`${Se}px`),Se}function d(){f(),!l()&&a==="partial"&&u()}function g(se){let ke=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${se}`).trim(),et=parseFloat(ke);return Number.isFinite(et)?et:0}function x(){let se={top:0,right:0,bottom:0,left:0};if(!e)return se;if(l()){if(a!=="open")return se;let et=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(et)),bottom:0,left:0}}if(a!=="partial")return se;let ke=Math.round(K()+g("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,ke)),left:0}}function m(se,ke={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(se)||(se=l()?"open":"peek"),a=se,e.dataset.detent=se,e.classList.toggle("sheet-open",se!=="peek"&&se!=="closed"),document.body.classList.toggle("sheet-open",se!=="peek"&&se!=="closed"),v(),ke.silent||u()}function p(){l()?m("open"):m("peek"),f()}let b=document.getElementById("top-chrome"),S=document.getElementById("sheet-toggle");if(!S&&b){let se=b.querySelector(".top-chrome-end");se||(se=document.createElement("div"),se.className="top-chrome-end",b.append(se)),S=document.createElement("button"),S.type="button",S.id="sheet-toggle",S.className="chrome-btn sheet-toggle",se.append(S)}function v(){if(!S)return;let se=a==="open";S.setAttribute("aria-expanded",se?"true":"false"),S.setAttribute("aria-label",se?"Hide controls":"Show controls"),S.title=se?"Hide controls":"Show controls",S.textContent=se?"\u203A":"\u2039"}S?.addEventListener("click",()=>{l()&&m(a==="open"?"closed":"open")});let M=!1,E=null,y=!1,w=!1,L=0,D=0,B=0,V=0,z="peek",O=0,X=0,Q=0,q=0,ye=0,Z=null,G=12,ee=28,Me='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function Ce(){return Math.max(t?.offsetHeight||34,34)+8}function K(){return f()||window.innerHeight*.38}function le(){let se=window.innerHeight||640;return Math.min(se*.92,se-72)}function k(){return e?.offsetWidth||0}function te(se){return se instanceof Element?!!se.closest(Me):!1}function me(){if(l()){m(a==="open"?"closed":"open");return}m(a==="peek"?"partial":a==="partial"?"full":"peek")}function Ee(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function We(se,ke,et){if(e){M=!0,y=!1,E=ke,w=!1,z=a,L=se.clientY,D=se.clientX,O=L,X=D,Q=performance.now(),q=0,ye=0,V=et,Z=se.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${V}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(se.pointerId)}catch{}}}function Oe(se){if(!(!e||!t)&&!(se.target!==t&&!t.contains(se.target)&&se.target!==e)){M=!0,y=!1,E="narrow",w=!1,z=a,e.classList.add("is-dragging"),L=se.clientY,D=se.clientX,O=L,X=D,Q=performance.now(),q=0,ye=0,B=e.getBoundingClientRect().height,Z=se.pointerId;try{t.setPointerCapture(se.pointerId)}catch{}se.preventDefault()}}function Ye(se){if(!e||se.pointerType==="mouse"&&se.button!==0||se.target instanceof Element&&se.target.closest(".chrome-btn"))return;let ke=k();if(a==="closed"){let et=window.innerWidth-ee-g("r");if(se.clientX<et)return;We(se,"wide-open",ke),se.preventDefault();return}e.contains(se.target)&&(te(se.target)||(M=!0,y=!0,E="wide-close",w=!1,z=a,L=se.clientY,D=se.clientX,O=L,X=D,Q=performance.now(),q=0,ye=0,V=0,Z=se.pointerId))}function ue(se){l()?Ye(se):Oe(se)}function Re(se){if(!M||!e||Z!=null&&se.pointerId!==Z)return;let ke=performance.now(),et=Math.max(1,ke-Q),xe=Math.hypot(se.clientX-D,se.clientY-L);if(y){if(xe<=G)return;let Te=se.clientX-D,$=se.clientY-L;if(Math.abs(Te)<Math.abs($)*1.15||Te<=0){M=!1,y=!1,E=null,Z=null;return}y=!1,w=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(se.pointerId)}catch{}se.preventDefault()}if(xe>G&&(w=!0),E==="narrow"){let Te=L-se.clientY;q=(O-se.clientY)/et*1e3,O=se.clientY,Q=ke;let $=Ce(),ve=le(),be=Math.max($,Math.min(ve,B+Te));e.style.height=`${be}px`;return}let A=se.clientX-D;ye=(se.clientX-X)/et*1e3,X=se.clientX,Q=ke;let j=k(),J=Math.max(0,Math.min(j,V+A));e.style.transform=`translateX(${J}px)`}function He(se,ke){let et=[{name:"peek",h:Ce()},{name:"partial",h:K()},{name:"full",h:le()}],xe=Math.max(0,et.findIndex(ve=>ve.name===z)),A=et[xe].h;if(Math.abs(se-A)<36&&Math.abs(ke)<1100)return z;let j=se+ke*.05,J=(et[0].h+et[1].h)/2,Te=(et[1].h+et[2].h)/2,$=j<J?0:j<Te?1:2;if($>xe+1&&($=xe+1),$<xe-1&&($=xe-1),$===2&&xe<2){let ve=Te+(et[2].h-Te)*.25;se<ve&&ke<1400&&($=1)}return et[$].name}function Le(se,ke){let et=k();return et<=0||Math.abs(se-(z==="closed"?et:0))<28&&Math.abs(ke)<800?z:ke>900?"closed":ke<-900?"open":se>et*.45?"closed":"open"}function Xe(se){if(!M||!e||Z!=null&&se.pointerId!==Z)return;let ke=E,et=y;if(M=!1,y=!1,E=null,Z=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),et&&!w)return;if(!w){ke==="narrow"?(e.style.height="",me()):ke==="wide-open"?(Ee(),m("open")):Ee();return}if(ke==="narrow"){let j=e.getBoundingClientRect().height;e.style.height="",m(He(j,q));return}let xe=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),A=xe?parseFloat(xe[1]):0;Ee(),m(Le(A,ye))}t?.addEventListener("pointerdown",se=>{l()||ue(se)}),t?.addEventListener("pointermove",Re),t?.addEventListener("pointerup",Xe),t?.addEventListener("pointercancel",Xe),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",se=>{l()&&Ye(se)},{capture:!0}),document.addEventListener("pointermove",Re,{capture:!0}),document.addEventListener("pointerup",Xe,{capture:!0}),document.addEventListener("pointercancel",Xe,{capture:!0});let qe=()=>{e&&(e.style.height=""),Ee(),i&&(i.style.overflow=""),p()};r.addEventListener?r.addEventListener("change",qe):r.addListener(qe);function ot(){n(s.matches)}return ot(),s.addEventListener?s.addEventListener("change",ot):s.addListener(ot),window.addEventListener("resize",()=>{f(),u()}),p(),v(),{getDetent:c,getSafeInsets:x,onDetentChange:h,refreshPartialHeight:d,setDetent:m}}function sh(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,r=!!n.thumbScrubOnly,s=xl(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,h=14,f=null,d=0,g=0,x=!1,m=!1,p=!1,b=!0;function S(){let O=`${(t===e?0:(s-e)/(t-e))*100}%`;l.style.width=O,c.style.left=O,o.setAttribute("aria-valuenow",String(s));let X=n.formatAriaValue?.(s)??String(s);o.setAttribute("aria-valuetext",X)}function v(z,O){let X=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!X||!(X.width>0)||!(X.height>0)?!0:z>=X.left-h&&z<=X.right+h&&O>=X.top-h&&O<=X.bottom+h}function M(z,O="input"){let X=cA(xl(z,e,t),e,t,i);if(X===s&&O==="silent"){S();return}s=X,S(),(O==="input"||O==="change")&&n.onInput?.(s),O==="change"&&n.onChange?.(s)}function E(z){let O=a.getBoundingClientRect(),X=Math.max(O.width,1),Q=xl((z-O.left)/X,0,1);return e+Q*(t-e)}function y(z){if(f==null)return;let O=m;f=null,x=!1,m=!1,b=!0,O&&n.onScrubEnd?.(),z&&O&&n.onChange?.(s)}function w(z){f==null&&(z.pointerType==="mouse"&&z.button!==0||(f=z.pointerId,d=z.clientX,g=z.clientY,p=!1,x=!1,m=!1,b=!r||v(z.clientX,z.clientY)))}function L(z){if(f!==z.pointerId)return;let O=z.clientX-d,X=z.clientY-g;if(!p&&Math.hypot(O,X)>u&&(p=!0),!x){if(!p)return;if(z.pointerType==="touch"&&Math.abs(X)>=Math.abs(O)){y(!1);return}if(!b){y(!1);return}x=!0,m=!0,n.onScrubStart?.();try{o.setPointerCapture(z.pointerId)}catch{}}M(E(z.clientX),"input"),z.preventDefault()}function D(z){if(f===z.pointerId){if(!p&&!m){f=null,x=!1,m=!1,b=!0,n.onTap?.();return}y(!0)}}function B(z){f===z.pointerId&&y(!1)}function V(z){let O=t-e,X=i>0?i:O/100,Q=O/10,q=s;switch(z.key){case"ArrowLeft":case"ArrowDown":q=s-X;break;case"ArrowRight":case"ArrowUp":q=s+X;break;case"PageDown":q=s-Q;break;case"PageUp":q=s+Q;break;case"Home":q=e;break;case"End":q=t;break;case"Enter":case" ":z.preventDefault(),n.onTap?.();return;default:return}z.preventDefault(),M(q,"change")}return o.addEventListener("pointerdown",w),o.addEventListener("pointermove",L),o.addEventListener("pointerup",D),o.addEventListener("pointercancel",B),o.addEventListener("keydown",V),S(),{el:o,get value(){return s},set value(z){M(z,"silent")},refresh(){S()}}}function xl(n,e,t){return Math.min(t,Math.max(e,n))}function cA(n,e,t,i){if(!(i>0))return xl(n,e,t);let r=Math.round((n-e)/i),s=Number((e+r*i).toPrecision(12));return xl(s,e,t)}var ly="blueprints.locale",uA={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},hA={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},fA={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","home.title":"Home","home.live":"Live","home.off":"Off","home.on":"On","home.statusOff":"Offline model. Taps only change this view.","home.statusConnecting":"Connecting to Home\u2026","home.statusLive":"Live: state from Home. Taps send commands.","home.statusLiveNoSim":"Live: state from Home. Rocker presses are off on this server.","home.statusUnreachable":"Home unreachable. Showing the offline model; retrying.","home.failed":"Home refused the command","home.deviceOffline":"Device offline (last known state)","home.unknown":"Unknown","home.level":"Level","home.warm":"Warm","home.cool":"Cool","home.lastEvent":"Last event","home.noEvents":"No presses yet","home.contactClosed":"Closed (contact)","home.contactOpen":"Open (no contact)","home.occupied":"Occupied","home.vacant":"Vacant","home.closedPct":"Closed","home.up":"Up","home.down":"Down","home.stop":"Stop","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},dA={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","home.title":"D\u016Fm","home.live":"\u017Div\u011B","home.off":"Vyp.","home.on":"Zap.","home.statusOff":"Offline model. Klepnut\xED m\u011Bn\xED jen tento pohled.","home.statusConnecting":"P\u0159ipojuji se k Home\u2026","home.statusLive":"\u017Div\u011B: stav z Home. Klepnut\xED pos\xEDlaj\xED p\u0159\xEDkazy.","home.statusLiveNoSim":"\u017Div\u011B: stav z Home. Stisky vyp\xEDna\u010D\u016F jsou na tomto serveru vypnut\xE9.","home.statusUnreachable":"Home nedostupn\xFD. Zobrazuji offline model a zkou\u0161\xEDm znovu.","home.failed":"Home p\u0159\xEDkaz odm\xEDtl","home.deviceOffline":"Za\u0159\xEDzen\xED offline (posledn\xED zn\xE1m\xFD stav)","home.unknown":"Nezn\xE1m\xFD","home.level":"Jas","home.warm":"Tepl\xE1","home.cool":"Studen\xE1","home.lastEvent":"Posledn\xED ud\xE1lost","home.noEvents":"Zat\xEDm bez stisku","home.contactClosed":"Zav\u0159eno (kontakt)","home.contactOpen":"Otev\u0159eno (bez kontaktu)","home.occupied":"Obsazeno","home.vacant":"Volno","home.closedPct":"Zav\u0159eno","home.up":"Nahoru","home.down":"Dol\u016F","home.stop":"Stop","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},bp={en:{...fA,...uA},cs:{...dA,...hA}},Ho=cy(),Mp=new Set;function cy(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function pA(){try{let n=localStorage.getItem(ly);if(n==="en"||n==="cs")return n}catch{}return cy()}function mA(n){try{localStorage.setItem(ly,n)}catch{}}function oh(){return Ho}function uy(n){if(!(n!=="en"&&n!=="cs")&&n!==Ho){Ho=n,mA(n);for(let e of Mp)try{e()}catch{}}}function Sp(n){return Mp.add(n),()=>Mp.delete(n)}function hy(){return Ho=pA(),Ho}function Nt(n){let e=bp[Ho]||bp.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=bp.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function wp(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Nt(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Nt(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Nt(i))})}var Ep=44,ah=.05,gA=.05;function lh(n){let e=n&&n.material;if(!e)return!1;let t=Array.isArray(e)?e:[e];return t.length?t.every(i=>i&&i.visible!==!1&&!(i.transparent&&(i.opacity??1)<.99)):!1}function dy(n,e,t={}){let i=t.isOccluder||lh,r=t.tolerance??ah,s=1/0;for(let o of n){let a=Number.isFinite(o.distance)?o.distance:0;if(a>s+r)break;let l=e(o);if(l)return{hit:o,claim:l,wallT:s};s===1/0&&i(o.object)&&(s=a)}return{hit:null,claim:null,wallT:s}}function py(n,e,t={}){let i=(t.diameterPx??Ep)/2,r=t.depthTie??gA,s=[];for(let c of n){if(!c||!Number.isFinite(c.x)||!Number.isFinite(c.y)||!(c.depth>0))continue;let u=Math.hypot(c.x-e.x,c.y-e.y);u>i||s.push({c,dist:u})}let o=t.isOccluded?s.filter(c=>!t.isOccluded(c.c)):s;if(!o.length)return null;let a=o[0];for(let c of o)c.c.depth<a.c.depth&&(a=c);let l=null;for(let c of o)(c.c.depth<=a.c.depth+r||a.c.group!=null&&c.c.group===a.c.group)&&(!l||c.dist<l.dist||c.dist===l.dist&&c.c.depth<l.c.depth)&&(l=c);return l?l.c:null}var Kn=new I;function my(n,e,t){e.updateMatrixWorld?.(),Kn.copy(n).applyMatrix4(e.matrixWorldInverse);let i=-Kn.z;return!(i>0)||(Kn.copy(n).project(e),!(Math.abs(Kn.x)<=1&&Math.abs(Kn.y)<=1)||!(Kn.z>=-1&&Kn.z<=1))?null:{x:(Kn.x+1)/2*t.w,y:(1-Kn.y)/2*t.h,depth:i}}var Ls=new ei,fy=new Ke;function gy(n,e,t,i,r={}){let s=r.keep||(()=>!0),o=r.isOccluder||lh,a=r.tolerance??ah,l;if(e.isOrthographicCamera)Kn.copy(n).project(e),fy.set(Kn.x,Kn.y),Ls.setFromCamera(fy,e),l=Kn.copy(n).sub(Ls.ray.origin).dot(Ls.ray.direction);else{let u=new I().setFromMatrixPosition(e.matrixWorld),h=Kn.copy(n).sub(u);if(l=h.length(),l<1e-9)return!1;Ls.set(u,h.normalize())}Ls.near=0,Ls.far=Math.max(0,l);let c=Ls.intersectObject(t,!0);for(let u of c){if(u.distance>=l-a)break;if(!(!s(u.object)||i(u.object))&&o(u.object))return!0}return!1}function xy(n,e,t){let i=n.getCenter(new I),r=n.getSize(new I),s=r.y/4,o=r.x>=r.z?new I(1,0,0):new I(0,0,1);o.dot(t)<0&&o.negate();let a=Math.max(r.x,r.z)/4,l=[];return e.forEach((c,u)=>{let h=i.clone();e.length>1&&h.addScaledVector(o,u===0?-a:a),l.push({rocker:c,position:"up",center:h.clone().setY(h.y+s)}),l.push({rocker:c,position:"down",center:h.clone().setY(h.y-s)})}),l}function Ds(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function Ns(n){if(!n||!n.visible||Ds(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function yy(){let n=[];function e(l){n.push(l),n.sort((c,u)=>(u.priority||0)-(c.priority||0))}function t(l,c){for(let u of n){let h=u.claim?.(l,c);if(h)return h}return null}function i(l,c){let u=[];for(let h of l)c&&!c(h)||u.push(h);return u}function r(l){let{camera:c,root:u,tap:h,size:f}=l||{};if(!c||!u||!h||!f)return null;let d=[];for(let b of n){let S=b.targets?.(l);if(Array.isArray(S))for(let v of S){if(!v?.center)continue;let M=my(v.center,c,f);M&&d.push({...v,...M,handler:b})}}if(!d.length)return null;let g=b=>Ns(b),x=py(d,h,{diameterPx:l.diameterPx??Ep,isOccluded:b=>gy(b.center,c,u,S=>!!b.owns?.(S),{keep:g})});if(!x)return null;let m={...x.hit,point:x.hit?.point??x.center,extended:!0},p=x.handler.claim?.(m,l);return p?{hit:m,claim:p,target:x}:null}function s(l,c,u,h={}){let f=i(l,u),d=dy(f,m=>t(m,c),{isOccluder:m=>lh(m)});if(d.claim)return{kind:"direct",hit:d.hit,claim:d.claim};let g={...c,maxT:d.wallT+ah};for(let m of n)if(h.run?m.fallback?.(f,g):m.probe?.(f,g))return{kind:"fallback"};let x=r(c);if(x)return{kind:"extended",hit:x.hit,claim:x.claim};for(let m of f){let p=t(m,c);if(p)return{kind:"legacy",hit:m,claim:p}}return null}function o(l,c,u){let h=s(l,c,u,{run:!0});if(h?.kind==="fallback")return!0;if(h?.claim)return h.claim.onTap(),!0;let f=i(l,u);for(let d of n)if(d.fallback?.(f,c))return!0;return!1}function a(l,c,u){let h=s(l,c,u);return h?.claim?Array.isArray(h.claim.actions)?h.claim.actions.slice():[]:[]}return{register:e,dispatch:o,actionsFor:a,resolve:s,handlers:n}}var _y=8,xA=56,vy=14,Tp=11,by=.5,yA=1e-4,ch=128,_A=.028,vA=5,bA=.995,MA=.999,My=18,SA=22,wA=14,Ap=new Ke,Sy=new ei,gi=new I,xi=new I,rr=new I,Bn=new I,Wo=new I,ir=new I,Vo=new I,Go=new I,Ft=new I,wy=new I,Xo=new I,EA=new gn;function Rp(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function Cp(n){return n.pointerType==="touch"}function Pp(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function Ey(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function Dy(n){let{scene:e,canvas:t,getCamera:i,controls:r,getRoot:s,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=n,c="idle",u=!1,h=!1,f=0,d=0,g=null,x=null,m=null,p=null,b=null,S=null,v=null,M="mouse",E=0,y=0,w=!1,L=!1,D=new Ht;D.name="MeasureOverlay",D.renderOrder=10,e.add(D);let B=new Ht;B.name="MeasureDimensions",e.add(B);let V=Ry(16766474),z=Ry(3458905),O=Cy(16766474,.75),X=PA(16766474);D.add(V,z,O,X),V.visible=!1,z.visible=!1,O.visible=!1,X.visible=!1;let Q=RA(t),q=[];function ye(){return u}function Z(xe){let A=!!xe;if(A===u){A&&ee();return}if(u=A,u)if(r.enabled=!1,c="placeFirst",G(),b=null,S=null,Ey()){let j=Math.max(1,t.clientWidth),J=Math.max(1,t.clientHeight);Ce(j*.5,J*.5,!0)}else Me();else r.enabled=!0,c="idle",G(),b=null,S=null,v=null,L=!1,Me(),a?.(null);l?.(u),ee(),le()}function G(){h=!1,g=null,x=null,m=null,p=null}function ee(){c==="placeSecond"&&b&&g?a?.(Rp(b.distanceTo(g))):u&&a?.(null)}function Me(){Q.hidden=!0,V.visible=!1,X.visible=!1}function Ce(xe,A,j=!1){f=xe,d=A,h=!0;let J=Oe(xe,A);if(J){let Te=J.point.clone(),$=J.kind,ve=J.edgeDir;if(p=null,c==="placeSecond"&&b){let be=Ye(b,S,J);be&&(Te=be.foot,$="perp",ve=be.edgeDir,p=be.edgeDir.clone())}g=Te,x=$,m=ve}else j?g||(x=null,m=null,p=null):(g=null,x=null,m=null,p=null);le(),ee()}function K(xe,A){let j=Ee(A)*vA;xe.scale.setScalar(Math.max(j,1e-6))}function le(){if(!u){Me(),z.visible=!1,O.visible=!1,X.visible=!1;return}b?(z.visible=!0,z.position.copy(b),K(z,b)):z.visible=!1,h?(Q.hidden=!1,Ay(Q,t,f,d,x),g?(V.visible=!0,V.position.copy(g),K(V,g),CA(V,x)):V.visible=!1):Me(),c==="placeSecond"&&b&&g?(Iy(O,b,g),O.visible=!0):O.visible=!1,c==="placeSecond"&&x==="perp"&&b&&g&&p?(Py(X,b,g,p,Ee),X.visible=!0):X.visible=!1}function k(xe){let A=t.getBoundingClientRect();return{x:xe.clientX-A.left,y:xe.clientY-A.top}}function te(xe,A,j){return j==="touch"?{x:xe,y:A-xA}:{x:xe,y:A}}function me(xe){let A=o()||[];for(let j of A)if(j.distanceToPoint(xe)<-yA)return!1;return!0}function Ee(xe){let A=i(),j=Math.max(1,t.clientHeight);if(A.isOrthographicCamera)return 2*((A.top-A.bottom)/(2*Math.max(A.zoom,1e-6)))/j;let J=A.position.distanceTo(xe),Te=A.fov*Math.PI/180;return 2*Math.tan(Te/2)*J/j/Math.max(A.zoom,1e-6)}function We(xe,A){A.copy(xe).project(i());let j=Math.max(1,t.clientWidth),J=Math.max(1,t.clientHeight);return A.x=(A.x*.5+.5)*j,A.y=(-A.y*.5+.5)*J,A}function Oe(xe,A){let j=s();if(!j)return null;let J=t.getBoundingClientRect();Ap.x=xe/Math.max(1,J.width)*2-1,Ap.y=-(A/Math.max(1,J.height))*2+1,Sy.setFromCamera(Ap,i());let Te=Sy.intersectObject(j,!0),$=null;for(let Fe of Te)if(!(!Fe.object.visible||Ds(Fe.object))&&me(Fe.point)){$=Fe;break}if(!$)return null;let ve=$.object,be=ve.geometry;if(!be?.getAttribute("position"))return{point:$.point.clone(),kind:"face",edgeDir:null,mesh:ve,triVerts:null,faceNormal:null};ve.updateWorldMatrix(!0,!1);let Se=Ee($.point),P=Se*vy,T=Se*Tp,W=be.getAttribute("position"),_e=be.getIndex(),de=$.faceIndex,he=[];if($.face)gi.fromBufferAttribute(W,$.face.a).applyMatrix4(ve.matrixWorld),xi.fromBufferAttribute(W,$.face.b).applyMatrix4(ve.matrixWorld),rr.fromBufferAttribute(W,$.face.c).applyMatrix4(ve.matrixWorld),he.push(gi.clone(),xi.clone(),rr.clone());else if(typeof de=="number"){let Fe,st,Y;_e?(Fe=_e.getX(de*3),st=_e.getX(de*3+1),Y=_e.getX(de*3+2)):(Fe=de*3,st=de*3+1,Y=de*3+2),gi.fromBufferAttribute(W,Fe).applyMatrix4(ve.matrixWorld),xi.fromBufferAttribute(W,st).applyMatrix4(ve.matrixWorld),rr.fromBufferAttribute(W,Y).applyMatrix4(ve.matrixWorld),he.push(gi.clone(),xi.clone(),rr.clone())}let pe=null;he.length===3&&(pe=new I().subVectors(he[1],he[0]).cross(Bn.subVectors(he[2],he[0])).normalize(),pe.lengthSq()<1e-12&&(pe=null));let ie=xe,ce=A,De=null;function F(Fe){if(!me(Fe)||Fe.distanceToSquared($.point)>P*P*4)return;We(Fe,Go);let st=Math.hypot(Go.x-ie,Go.y-ce);st>vy||(!De||st<De.distPx)&&(De={point:Fe.clone(),distPx:st})}for(let Fe of he)F(Fe);let ge=P*P*4,fe=W.count,Be=fe>8e3?2:1;for(let Fe=0;Fe<fe;Fe+=Be)Bn.fromBufferAttribute(W,Fe).applyMatrix4(ve.matrixWorld),!(Bn.distanceToSquared($.point)>ge)&&F(Bn);if(De)return{point:De.point,kind:"vertex",edgeDir:null,mesh:ve,triVerts:he.length?he:null,faceNormal:pe};let Ne=null;function Ue(Fe,st){Ft.copy(st).sub(Fe);let Y=Ft.lengthSq();if(Y<1e-18)return;let Pe=Bn.copy($.point).sub(Fe).dot(Ft)/Y;if(Pe=Math.min(1,Math.max(0,Pe)),Wo.copy(Fe).addScaledVector(Ft,Pe),!me(Wo)||Wo.distanceToSquared($.point)>T*T*4)return;We(Wo,Go);let rt=Math.hypot(Go.x-ie,Go.y-ce);if(rt>Tp)return;We(Fe,ir),We(st,Vo);let Ie=Vo.x-ir.x,dt=Vo.y-ir.y,Bt=Ie*Ie+dt*dt;if(Bt>1e-6){let Qt=((ie-ir.x)*Ie+(ce-ir.y)*dt)/Bt;Qt=Math.min(1,Math.max(0,Qt));let Xn=ir.x+Ie*Qt,Oi=ir.y+dt*Qt;if(Math.hypot(ie-Xn,ce-Oi)>Tp)return}(!Ne||rt<Ne.distPx)&&(Ne={point:Wo.clone(),distPx:rt,dir:Ft.clone().normalize()})}return he.length===3&&(Ue(he[0],he[1]),Ue(he[1],he[2]),Ue(he[2],he[0])),Ne?{point:Ne.point,kind:"edge",edgeDir:Ne.dir,mesh:ve,triVerts:he.length?he:null,faceNormal:pe}:{point:$.point.clone(),kind:"face",edgeDir:null,mesh:ve,triVerts:he.length?he:null,faceNormal:pe}}function Ye(xe,A,j){if(!j.mesh||!j.triVerts||j.triVerts.length!==3||!j.faceNormal||j.faceNormal.lengthSq()<1e-12)return null;let J=Ee(xe),Te=J*wA,$=Math.max(J*2,1e-5);if(Math.abs(uh(xe,j.triVerts[0],j.faceNormal))>$)return null;let ve=ue(j.mesh,j.triVerts[0],j.faceNormal,$);if(!ve.length)return null;let be=[];for(let T of ve)Ty(xe,T.a,T.b)<=Te&&be.push(T.dir.clone());if(A&&A.lengthSq()>1e-12&&be.push(A.clone().normalize()),!be.length)return null;let Se=J*My,P=null;for(let T of be)if(!(T.lengthSq()<1e-12)){T.normalize();for(let W of ve){if(Math.abs(W.dir.dot(T))<bA||Ty(xe,W.a,W.b)<=Te)continue;let _e=TA(xe,W.a,W.b);if(!me(_e)||xe.distanceTo(_e)*1e3<by||(Ft.copy(_e).sub(xe),Ft.lengthSq()<1e-16)||(Ft.normalize(),Math.abs(Ft.dot(T))>.08))continue;let he=j.point.distanceTo(_e);We(j.point,ir),We(_e,Vo);let pe=Math.hypot(ir.x-Vo.x,ir.y-Vo.y);if(he>Se*1.35&&pe>My)continue;let ie=pe+he/Math.max(J,1e-9);(!P||ie<P.score)&&(P={foot:_e.clone(),edgeDir:T.clone(),score:ie})}}return P?{foot:P.foot,edgeDir:P.edgeDir}:null}function ue(xe,A,j,J){let Te=xe.geometry,$=Te?.getAttribute("position");if(!$)return[];xe.updateWorldMatrix(!0,!1);let ve=Te.getIndex(),be=new Map,Se=Math.max(J*.25,1e-5);function P(he,pe,ie){Xo.subVectors(pe,he).cross(Bn.subVectors(ie,he)),!(Xo.lengthSq()<1e-16)&&(Xo.normalize(),!(Math.abs(Xo.dot(j))<MA)&&(Math.abs(uh(he,A,j))>J||Math.abs(uh(pe,A,j))>J||Math.abs(uh(ie,A,j))>J||(T(he,pe),T(pe,ie),T(ie,he))))}function T(he,pe){if(Ft.copy(pe).sub(he),Ft.lengthSq()<1e-16)return;let ie=AA(he,pe,Se);be.has(ie)||be.set(ie,{a:he.clone(),b:pe.clone(),dir:Ft.clone().normalize()})}let W=ve?ve.count/3:$.count/3,_e=12e3,de=W>_e?Math.ceil(W/_e):1;for(let he=0;he<W;he+=de){let pe,ie,ce;if(ve){let De=he*3;pe=ve.getX(De),ie=ve.getX(De+1),ce=ve.getX(De+2)}else pe=he*3,ie=he*3+1,ce=he*3+2;gi.fromBufferAttribute($,pe).applyMatrix4(xe.matrixWorld),xi.fromBufferAttribute($,ie).applyMatrix4(xe.matrixWorld),rr.fromBufferAttribute($,ce).applyMatrix4(xe.matrixWorld),P(gi,xi,rr)}return[...be.values()]}function Re(){if(g){if(c==="placeFirst"){b=g.clone(),S=m?m.clone():null,c="placeSecond",p=null,(Cp({pointerType:M})||!Ey())&&(h=!1,g=null,x=null,m=null,Me()),le(),ee();return}if(c==="placeSecond"&&b){if(b.distanceTo(g)*1e3<by)return;He(b,g),Z(!1)}}}function He(xe,A){let j=new Ht;j.name="Dimension";let J=Cy(16752394,1);Iy(J,xe,A),J.visible=!0;let Te=xe.clone().lerp(A,.5),$=xe.distanceTo(A),ve=IA(Rp($));ve.position.copy(Te),j.add(J,ve),B.add(j),q.push({group:j,sprite:ve,mid:Te.clone(),span:$}),Le(ve,xe,A,Te,$)}function Le(xe,A,j,J,Te){let $=i();if($.getWorldDirection(wy),Ft.copy(j).sub(A),Ft.lengthSq()<1e-16){xe.position.copy(J);return}Ft.normalize(),Bn.crossVectors(Ft,wy),Bn.lengthSq()<1e-10&&Bn.copy($.up),Bn.normalize();let ve=Math.max(Te*_A,Ee(J)*18);xe.position.copy(J).addScaledVector(Bn,ve);let be=Ee(xe.position)*56;xe.scale.set(be*2.2,be,1)}function Xe(){z.visible&&b&&K(z,b),V.visible&&g&&K(V,g),h&&Ay(Q,t,f,d,x),X.visible&&b&&g&&p&&x==="perp"&&Py(X,b,g,p,Ee);for(let xe of q){let j=xe.group.children[0].geometry.getAttribute("position");gi.fromBufferAttribute(j,0),xi.fromBufferAttribute(j,1),Le(xe.sprite,gi,xi,xe.mid,xe.span)}}function qe(xe){if(!u||c==="idle"||!Pp(xe)||v!==null)return;let{x:A,y:j}=k(xe),J=te(A,j,xe.pointerType);Ce(J.x,J.y,!0)}function ot(xe){if(!u||c==="idle"||xe.button!==void 0&&xe.button!==0||v!==null)return;v=xe.pointerId,M=xe.pointerType||"mouse";let{x:A,y:j}=k(xe);E=A,y=j,w=!1,L=!1;try{t.setPointerCapture(xe.pointerId)}catch{}if(Pp(xe)){let J=te(A,j,M);Ce(J.x,J.y,!0)}xe.preventDefault()}function se(xe){if(!u)return;if(v===null){qe(xe);return}if(v!==xe.pointerId)return;let{x:A,y:j}=k(xe);if(Math.hypot(A-E,j-y)>=_y&&(w=!0,L=!0),Cp(xe)){if(!L)return;let Te=te(A,j,"touch");Ce(Te.x,Te.y,!0)}else if(Pp(xe)){let Te=te(A,j,M);Ce(Te.x,Te.y,!0)}xe.preventDefault()}function ke(xe){if(!u||v!==xe.pointerId)return;let{x:A,y:j}=k(xe);Math.hypot(A-E,j-y)>=_y&&(w=!0,L=!0),v=null;try{t.releasePointerCapture(xe.pointerId)}catch{}if(Cp(xe)){w?L=!1:(L=!1,h&&g&&Re()),xe.preventDefault();return}!w&&g&&Re(),L=!1,xe.preventDefault()}function et(xe){v===xe.pointerId&&(v=null,L=!1)}return t.addEventListener("pointerdown",ot),t.addEventListener("pointermove",se),t.addEventListener("pointerup",ke),t.addEventListener("pointercancel",et),{isActive:ye,setActive:Z,update:Xe,formatMm:Rp}}function uh(n,e,t){return EA.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function Ty(n,e,t){Ft.copy(t).sub(e);let i=Ft.lengthSq();if(i<1e-18)return n.distanceTo(e);let r=Bn.copy(n).sub(e).dot(Ft)/i;return r=Math.min(1,Math.max(0,r)),Wo.copy(e).addScaledVector(Ft,r).distanceTo(n)}function TA(n,e,t){Ft.copy(t).sub(e);let i=Ft.lengthSq();if(i<1e-18)return e.clone();let r=Bn.copy(n).sub(e).dot(Ft)/i;return r=Math.min(1,Math.max(0,r)),e.clone().addScaledVector(Ft,r)}function AA(n,e,t){let i=Math.round(n.x/t),r=Math.round(n.y/t),s=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return i<o||i===o&&r<a||i===o&&r===a&&s<=l?`${i},${r},${s}|${o},${a},${l}`:`${o},${a},${l}|${i},${r},${s}`}function RA(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function Ay(n,e,t,i,r){let s=e.getBoundingClientRect();n.style.left=`${s.left+t}px`,n.style.top=`${s.top+i}px`,n.dataset.snap=r||"none"}function Ry(n){let e=new La(1,16,12),t=new on({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new pt(e,t);return i.renderOrder=20,i.visible=!1,i}function CA(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function Cy(n,e){let t=new Ut,i=new Float32Array(6);t.setAttribute("position",new kt(i,3));let r=new _r({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),s=new Wi(t,r);return s.renderOrder=19,s.frustumCulled=!1,s.visible=!1,s}function PA(n){let e=new Ut,t=new Float32Array(9);e.setAttribute("position",new kt(t,3));let i=new _r({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),r=new Wi(e,i);return r.renderOrder=22,r.frustumCulled=!1,r.visible=!1,r}function Py(n,e,t,i,r){let s=r(t)*SA;if(Ft.copy(e).sub(t),Ft.lengthSq()<1e-16){n.visible=!1;return}if(Ft.normalize(),Bn.copy(i).normalize(),Xo.crossVectors(Bn,Ft),Xo.lengthSq()<1e-12){n.visible=!1;return}gi.copy(t).addScaledVector(Bn,s),xi.copy(t),rr.copy(t).addScaledVector(Ft,s);let o=n.geometry.getAttribute("position");o.setXYZ(0,gi.x,gi.y,gi.z),o.setXYZ(1,xi.x,xi.y,xi.z),o.setXYZ(2,rr.x,rr.y,rr.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function Iy(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function IA(n){let e=document.createElement("canvas");e.width=ch*2,e.height=ch;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(ch*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(n),c=Math.ceil(l.width),u=Math.round(ch*.42),h=c+o*2,f=u+a*2,d=(e.width-h)/2,g=(e.height-f)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",Ly(t,d,g,h,f,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,Ly(t,d,g,h,f,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new vr(e);i.colorSpace=At,i.needsUpdate=!0;let r=new Mo({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),s=new Ma(r);return s.renderOrder=21,s.center.set(.5,.5),s}function Ly(n,e,t,i,r,s){let o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function hh(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function Ni(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function Ny(n){let e="part",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let s=Ni(i);if(s.part&&(e=s.part),s.element)return{part:s.part,element:s.element}}t=t.parent||null}return{part:e,element:null}}var dh=12,LA=500,DA=Math.PI/2,NA=.03,Oy=.001;function OA(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function UA(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>dh?"drag":"tap"}function ph(n,e){return(e>=0?1:-1)*n*DA}function FA(n,e=null){let t=n.length,i=new Map,r=a=>{let l=i.has(a)?i.get(a):a;return l!==a?(l=r(l),i.set(a,l)):i.has(a)||i.set(a,a),l},s=(a,l)=>{let c=r(a),u=r(l);c!==u&&i.set(c,u)};if(e){let a=new Map,l=1e4,c=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<c;u++){let h=`${Math.round(e.getX(u)*l)},${Math.round(e.getY(u)*l)},${Math.round(e.getZ(u)*l)}`,f=a.get(h);f===void 0?a.set(h,u):s(u,f)}}for(let a=0;a+2<t;a+=3)s(n[a],n[a+1]),s(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let l=r(n[a]),c=o.get(l);c||(c=[],o.set(l,c)),c.push(a)}return[...o.values()]}function Uy(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let r=FA(t.array,i);if(r.length<2)return[n];let s=e.getAttribute("normal"),o=[];for(let a of r){let l=new Map,c=[],u=[],h=[],f=x=>{let m=l.get(x);return m!==void 0||(m=c.length/3,l.set(x,m),c.push(i.getX(x),i.getY(x),i.getZ(x)),s&&u.push(s.getX(x),s.getY(x),s.getZ(x))),m};for(let x of a)h.push(f(t.getX(x)),f(t.getX(x+1)),f(t.getX(x+2)));let d=new Ut;d.setAttribute("position",new Vt(c,3)),u.length&&d.setAttribute("normal",new Vt(u,3)),d.setIndex(h);let g=new pt(d,n.material);g.name=n.name,g.position.copy(n.position),g.quaternion.copy(n.quaternion),g.scale.copy(n.scale),g.visible=n.visible,n.parent.add(g),o.push(g)}return n.parent.remove(n),e.dispose?.(),o}function BA(n,e=[]){let t=[];n.traverse(s=>{let o=s.name||"";if(Ni(o).part!=="door")return;let a=s.parent?.name||"";Ni(a).part!=="door"&&t.push(s)});let i=new Set((e||[]).filter(s=>s&&s.kind==="drawer"&&s.element).map(s=>String(s.element)));i.size&&n.traverse(s=>{let o=Ni(s.name||"");!o.element||!i.has(o.element)||Ni(s.parent?.name||"").element!==o.element&&t.push(s)});let r=[];for(let s of t){if(s.isMesh){r.push(...Uy(s));continue}let o=[];if(s.traverse(a=>{a.isMesh&&o.push(a)}),o.length===1){let a=Uy(o[0]);if(a.length>1){r.push(...a);continue}}r.push(s)}return r}function kA(n,e,t=NA){let i=[];for(let a of n)for(let l of e){if(!l||!(l.kind==="drawer"&&Array.isArray(l.slide))&&(l.kind!=="hinged"||!l.hinge))continue;let u=l.center;if(!Array.isArray(u)||u.length<3)continue;let h=a.center.x-Number(u[0]),f=a.center.y-Number(u[1]),d=a.center.z-Number(u[2]),g=Math.hypot(h,f,d);g<=t&&i.push({distance:g,entry:a,record:l})}i.sort((a,l)=>a.distance-l.distance);let r=new Set,s=new Set,o=[];for(let a of i)r.has(a.entry)||s.has(a.record.id)||(r.add(a.entry),s.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function zA(n){return n.updateWorldMatrix(!0,!0),new zt().setFromObject(n).getCenter(new I)}function HA(n,e){let t=n.parent;if(!t)return null;if(e.kind==="drawer")return VA(n,e);let i=new Ht;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=new I(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(r)),i.updateWorldMatrix(!0,!1),i.attach(n);let s={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=s};return o(i),n.traverse(o),s}function VA(n,e){let t=n.parent;if(!t)return null;let i=new Ht;i.name=`drawer:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=e.center.map(Number),s=e.slide.map(Number),o=t.worldToLocal(new I(r[0],r[1],r[2])),a=t.worldToLocal(new I(r[0]+s[0],r[1]+s[1],r[2]+s[2]));i.updateWorldMatrix(!0,!1),i.attach(n);let l={id:e.id,kind:"drawer",pivot:i,host:n,slideLocal:a.sub(o),sign:1,goal:0,anim:null},c=u=>{u.userData.bpDoor=l};return c(i),n.traverse(c),l}function Os(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/LA;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*OA(i)}var Fy=new $t,yl=new I;function GA(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;yl.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(Fy).invert(),yl.applyQuaternion(Fy)),!(yl.lengthSq()<1e-12)&&(yl.normalize(),n.rotateOnAxis(yl,e))}function WA(n,e){let t=Os(n,e);return n.slideLocal?(n.pivot.position.copy(n.slideLocal).multiplyScalar(t),t):(GA(n.pivot,ph(t,n.sign)),t)}function XA(n,e){let t=Os(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function qA(n,e){let t=Os(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var fh=new I,$A=new on({side:Dt,transparent:!0,opacity:0,depthWrite:!1});function YA(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(m=>{m.isMesh&&m.geometry?.getAttribute?.("position")&&e.push(m)}),!e.length)return null;let t=new I,i=new I,r=new I;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,r),t.lengthSq()<1e-12||i.lengthSq()<1e-12||r.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),r.normalize();let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let m of e){let p=m.geometry;p.boundingBox||p.computeBoundingBox();let b=p.boundingBox,S=[b.min.x,b.max.x],v=[b.min.y,b.max.y],M=[b.min.z,b.max.z];for(let E of S)for(let y of v)for(let w of M){fh.set(E,y,w).applyMatrix4(m.matrixWorld);let L=fh.dot(t),D=fh.dot(i),B=fh.dot(r);L<s&&(s=L),D<o&&(o=D),B<a&&(a=B),L>l&&(l=L),D>c&&(c=D),B>u&&(u=B)}}let h=[(l-s)/2,(c-o)/2,(u-a)/2];if(h.some(m=>!(m>1e-6)))return null;let f=(s+l)/2,d=(o+c)/2,g=(a+u)/2;return{center:new I(t.x*f+i.x*d+r.x*g,t.y*f+i.y*d+r.y*g,t.z*f+i.z*d+r.z*g),axes:[t,i,r],half:h}}function ZA(n,e){let t=new Xi(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new pt(t,$A);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function KA(n,e){let t=n.origin,i=n.direction,r=0,s=1/0;for(let o=0;o<3;o++){let a=e.axes[o],l=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),c=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(c)>1e-8){let h=(l+u)/c,f=(l-u)/c;if(h>f){let d=h;h=f,f=d}if(h>r&&(r=h),f<s&&(s=f),r>s)return null}else if(-l-u>0||-l+u<0)return null}return s<0?null:{tEnter:r,tExit:s}}function JA(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function By(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!Ds(e))return e.userData.bpDoor;e=e.parent}return null}function jA(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function QA(n){return Ns(n.object)}function eR(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function ky(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),r=[],s=new ei,o=new Ke,a=null,l=0,c=null;function u(){c&&clearTimeout(c),c=null}function h(M,E,y){try{n.onToggle?.(M,{from:E,to:y})}catch(w){console.warn("door onToggle",w)}}let f=yy();f.register({id:"door",priority:100,claim(M,E){let y=By(M.object);if(!y||y.host?.userData?.bpIfcHidden)return null;let w=E.now??performance.now(),L=Os(y,w)>Oy,D=()=>{let B=E.now??performance.now(),V=Os(y,B);XA(y,B),h(y,V,y.goal)};return{onTap:D,actions:[{id:"door",labelKey:L?"ui.close":"ui.open",run:D}]}},targets(){let M=[];for(let E of r){let y=E.host;if(!y||y.userData?.bpIfcHidden||!jA(y))continue;let w=new zt().setFromObject(y);if(w.isEmpty())continue;let L=w.getCenter(new I);M.push({center:L,group:`door:${E.id}`,hit:{object:y,point:L},owns:D=>By(D)===E})}return M}});function d(M){let E=[],y=Number.isFinite(M.maxT)?M.maxT:1/0;for(let w of r){if(!w.obb||w.host?.userData?.bpIfcHidden||Os(w,M.now)<=Oy)continue;let L=KA(M.raycaster.ray,w.obb);!L||L.tEnter>y||E.push({binding:w,tEnter:L.tEnter})}return JA(E)}f.register({id:"opening",priority:10,probe:(M,E)=>!!d(E),fallback(M,E){let y=d(E);if(!y)return!1;let w=Os(y,E.now);return qA(y,E.now)?(h(y,w,0),!0):!1}});function g(M){for(let w of r)eR(w);if(r.length=0,!M||!e.length)return 0;M.updateWorldMatrix(!0,!0);let y=BA(M,e).map(w=>({host:w,center:zA(w)}));for(let w of kA(y,e)){let L=HA(w.entry.host,w.record);if(!L)continue;let D=L.kind==="drawer"?null:YA(L.host);L.obb=D,L.proxy=D?ZA(D,`opening:${L.id}`):null,r.push(L)}return r.length}function x(M){let E=!1;for(let y of r){let w=!!y.anim;!w&&y.shown===y.goal||(WA(y,M),y.shown=y.anim?null:y.goal,w&&(E=!0))}return E}function m(M){if(!(M.button!==void 0&&M.button!==0)){if(l+=1,l>1){a=null;return}a={id:M.pointerId,x:M.clientX,y:M.clientY,moved:0,pointers:1,modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey,consumed:!1},u(),c=setTimeout(()=>{c=null,!(!a||a.consumed||hh({dt:500,dx:a.moved,dy:0,pointers:l,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function p(M){if(!a||M.pointerId!==a.id)return;let E=Math.hypot(M.clientX-a.x,M.clientY-a.y);E>a.moved&&(a.moved=E),a.moved>dh&&u()}function b(M){if(l=Math.max(0,l-1),u(),!a||M.pointerId!==a.id)return;let E=a;if(a=null,E.consumed)return;let y=Math.max(E.moved,Math.hypot(M.clientX-E.x,M.clientY-E.y));UA({dx:y,dy:0,pointers:l>0?2:1,button:M.button,blocked:i(),modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey})==="tap"&&v(M)}function S(){l=Math.max(0,l-1),a=null}function v(M){let E=n.getCamera();if(!E||!r.length)return;let y=t.getBoundingClientRect(),w=y.width||t.clientWidth||1,L=y.height||t.clientHeight||1;o.x=(M.clientX-y.left)/w*2-1,o.y=-((M.clientY-y.top)/L)*2+1,s.setFromCamera(o,E);let B=r[0]?.pivot?.parent;for(;B?.parent;)B=B.parent;if(!B)return;let V=s.intersectObject(B,!0);f.dispatch(V,{raycaster:s,now:performance.now(),camera:E,root:B,tap:{x:M.clientX-y.left,y:M.clientY-y.top},size:{w,h:L}},QA)}return t.addEventListener("pointerdown",m,!0),t.addEventListener("pointermove",p,!0),t.addEventListener("pointerup",b,!0),t.addEventListener("pointercancel",S,!0),t.addEventListener("contextmenu",M=>M.preventDefault()),{bind:g,step:x,bindings:r,taps:f}}var tR=700,nR=36,qo=36;function iR(n,e=!1){let t=Math.min(Math.max(n,0),1),i=t<.2?1:1-(t-.2)/.8;if(e)return{opacity:i,rise:0,scale:1};let r=1-(1-t)*(1-t),s=t<.15?.7+.3*t/.15:1;return{opacity:i,rise:nR*r,scale:s}}function zy(n,e){let t=e.x-n.x,i=e.y-n.y;return Math.hypot(t,i)<1e-6?null:Math.atan2(i,t)*180/Math.PI}function rR(n){return n==="down"?90:-90}function Hy(n,e,t){let i=n[0]-e[0],r=n[2]-e[2],s=Math.cos(t),o=Math.sin(t);return[e[0]+s*i+o*r,n[1],e[2]-o*i+s*r]}function sR(n,e,t){let i=zy(n,e);if(i==null)return null;let r=e.x-n.x,s=e.y-n.y,o=(n.x+e.x)/2,a=(n.y+e.y)/2,c=r*(t.y-a)-s*(t.x-o)>=0?1:-1;return{angle:i+45*c,bend:c}}function oR(n=tR){let e=[],t=1;return{items:e,add(i,r){let s={id:t++,t0:i,data:r};return e.push(s),s},step(i){let r=[],s=[];for(let o=e.length-1;o>=0;o-=1)(i-e[o].t0)/n>=1&&s.push(...e.splice(o,1));for(let o of e)r.push({item:o,t:(i-o.t0)/n});return{alive:r,expired:s}}}}var aR="http://www.w3.org/2000/svg",Ip='fill="#16181d" stroke="#fff" stroke-width="2.2" stroke-linejoin="round" paint-order="stroke"',lR={arrow:`<path ${Ip} d="M4 12.5 H17 V6 L29 16 L17 26 V19.5 H4 Z"/>`,hinge:`<path fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path fill="none" stroke="#16181d" stroke-width="4.4" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path ${Ip} d="M17 5.5 L28 13 L17 20.5 Z"/>`,ring:`<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" stroke-width="6"/><circle cx="16" cy="16" r="9" fill="none" stroke="#16181d" stroke-width="3"/><circle cx="16" cy="16" r="3" ${Ip}/>`},os=null;function cR(n=globalThis){try{let e=n.navigator;if(e&&typeof e.vibrate=="function"&&e.vibrate(10))return"vibrate";let t=n.document,i=n.matchMedia?.("(pointer: coarse)")?.matches;if(!t||!i)return"none";if(!os){os=t.createElement("label"),os.setAttribute("aria-hidden","true"),os.style.display="none";let r=t.createElement("input");r.type="checkbox",r.setAttribute("switch",""),os.appendChild(r)}return t.head.appendChild(os),os.click(),os.remove(),"ios-switch"}catch{return"none"}}function Vy(n){let e=n.document||globalThis.document,t=n.now||(()=>performance.now()),i=n.requestFrame||(p=>globalThis.requestAnimationFrame(p)),r=n.reducedMotion||(()=>!!globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches),s=n.haptics||(()=>cR()),o=oR(),a=new I,l=null,c=!1;function u(){return l||(l=e.createElement("div"),l.className="bp-feedback",l.setAttribute("aria-hidden","true"),Object.assign(l.style,{position:"fixed",left:"0",top:"0",width:"0",height:"0",pointerEvents:"none",zIndex:"40"}),e.body.appendChild(l),l)}function h(p){let b=n.getCamera();if(!b||(Array.isArray(p)?a.set(p[0],p[1],p[2]):a.copy(p),b.updateMatrixWorld?.(),a.project(b),!Number.isFinite(a.x)||a.z>1||a.z<-1))return null;let S=n.canvas.getBoundingClientRect();return{x:S.left+(a.x+1)/2*S.width,y:S.top+(1-a.y)/2*S.height}}function f(p,b){let S=h(p),v=Array.isArray(p)?new I(...p):p.clone(),M=Array.isArray(b)?new I(...b):b.clone(),E=M.length();if(E<1e-9)return null;let y=h(v.add(M.multiplyScalar(.1/E)));return!S||!y?null:zy(S,y)}function d(p){if(p.haptic!==!1)try{s()}catch{}try{return g(p)}catch(b){return console.warn("feedback",b),null}}function g(p){if(!e?.body||!p?.worldPos)return null;let b="arrow",S=-90,v=1;if(p.kind==="switch")S=rR(p.direction||"up");else if(p.kind==="slide"){let L=p.worldDir?f(p.worldPos,p.worldDir):null;if(L==null)return null;S=L}else if(p.kind==="hinge"){let L=h(p.worldPos),D=p.to?h(p.to):null,B=p.hinge?h(p.hinge):null,V=L&&D&&B?sR(L,D,B):null;if(!V)return null;b="hinge",S=V.angle,v=V.bend}else p.kind==="light"&&(b="ring",S=0);let M=Array.isArray(p.worldPos)?new I(...p.worldPos):p.worldPos.clone();if(p.kind==="hinge"&&p.to){let L=Array.isArray(p.to)?new I(...p.to):p.to;M.lerp(L,.5)}let E=e.createElement("div");E.className=`bp-feedback-item bp-feedback-${p.kind}`,Object.assign(E.style,{position:"absolute",left:"0",top:"0",width:`${qo}px`,height:`${qo}px`,marginLeft:`${-qo/2}px`,marginTop:`${-qo/2}px`,willChange:"transform, opacity",filter:"drop-shadow(0 1px 2px rgba(0,0,0,.45))"});let y=e.createElementNS(aR,"svg");y.setAttribute("viewBox","0 0 32 32"),y.setAttribute("width",String(qo)),y.setAttribute("height",String(qo)),y.style.overflow="visible",y.style.transform=`rotate(${S}deg) scale(1, ${v})`,y.innerHTML=lR[b],E.appendChild(y),u().appendChild(E);let w=o.add(t(),{el:E,anchor:M,kind:p.kind});return x(w,0),c||(c=!0,i(m)),w}function x(p,b){let{el:S,anchor:v,kind:M}=p.data,E=h(v);if(!E){S.style.opacity="0";return}let y=iR(b,r()),w=M==="light"?.8+.7*Math.min(Math.max(b,0),1):y.scale,L=M==="light"?0:y.rise;S.style.opacity=String(y.opacity),S.style.transform=`translate(${E.x.toFixed(1)}px, ${(E.y-L).toFixed(1)}px) scale(${w.toFixed(3)})`}function m(){let{alive:p,expired:b}=o.step(t());for(let S of b)S.data.el.remove();for(let{item:S,t:v}of p)x(S,v);p.length?i(m):c=!1}return{showFeedback:d,count:()=>o.items.length,tick:m}}var uR=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t),actions:(n,e,t,i)=>i.switchActions?.(n,e,t)},{type:"IfcActuator",id:"cover",priority:55,liveOnly:!0,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onCover?.(n,e,t),actions:(n,e,t,i)=>i.coverActions?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t)}];function Gy(n,e){for(let t of uR)n.register({id:t.id,priority:t.priority,claim(i,r){let s=e.elementOf?.(i.object);if(!s||s.type!==t.type||t.liveOnly&&!e.isLive?.(s))return null;let o=()=>t.run(s,i,r,e),a=t.actions?.(s,i,r,e);return{onTap:o,actions:Array.isArray(a)&&a.length?a:[{id:t.id,labelKey:t.labelKey(s,e),run:o}]}},targets(i){let r=e.targetsFor?.(t.type,i);return Array.isArray(r)?t.liveOnly?r.filter(s=>e.isLive?.(s.element)):r:[]}})}var hR="https://home-test.tail9f879b.ts.net",Xy="blueprints.homeMode",fR=new Set(["IfcLightFixture","IfcSwitchingDevice","IfcSensor","IfcActuator"]),Wy=[2e3,5e3,15e3,3e4,6e4],dR=5e3;function qy(n){for(let e of Object.values(n?.elements||{}))if(e&&fR.has(e.type||""))return!0;return!1}function $y(n={}){let e;try{e=new URLSearchParams(n.search||"")}catch{e=new URLSearchParams}let t="live",i=null;try{i=n.storage?.getItem(Xy)??null}catch{i=null}(i==="off"||i==="live")&&(t=i);let r=(e.get("home")||"").trim().toLowerCase();(r==="off"||r==="live")&&(t=r);let s=hR,o=(e.get("homeUrl")||"").trim();if(o)try{let a=new URL(o);(a.protocol==="https:"||a.protocol==="http:")&&(s=a.href.replace(/\/+$/,""))}catch{}return{mode:t,baseUrl:s}}function Yy(n,e){try{n?.setItem(Xy,e)}catch{}}function pR(n){let e=new URL(n.replace(/\/+$/,"")+"/events");return e.protocol=e.protocol==="http:"?"ws:":"wss:",e.href}function mR(n,e,t=""){return`${n.replace(/\/+$/,"")}/devices/${encodeURIComponent(e)}${t}`}function gR(n,e){return`${n.replace(/\/+$/,"")}/simulate/devices/${encodeURIComponent(e)}/press`}var mh=4868682;function Lp(n){let e=[[2200,16751135],[3e3,16758835],[4e3,16766814],[5e3,16773816],[6500,15266303]],t=Number.isFinite(n)?Math.min(Math.max(n,e[0][0]),e.at(-1)[0]):3e3,i=0;for(;i<e.length-2&&t>e[i+1][0];)i+=1;let[r,s]=e[i],[o,a]=e[i+1],l=(t-r)/(o-r),c=(h,f)=>h>>f&255,u=h=>Math.round(c(s,h)+(c(a,h)-c(s,h))*l);return u(16)<<16|u(8)<<8|u(0)}function Dp(n){let e=n?.state||{},t=!!(n?.online&&e.onOff?.onOff===!0),i=e.levelControl?.currentLevel,r=Number.isFinite(i)?Math.min(Math.max(i/254,0),1):1,s=e.colorControl?.colorTemperatureMireds,o=Number.isFinite(s)&&s>0?Math.round(1e6/s):null,a=t?Lp(o):mh;return{on:t,level:r,kelvin:o,color:a}}function vl(n){return n?.objectType==="DoublePushButton"?["rocker-1","rocker-2"]:["rocker"]}function Zy(n,e){let t=vl(n);return{rocker:t.length>1?t[e.side<0?0:1]:t[0],position:e.dy>=0?"up":"down",kind:"short"}}function Ky(n,e){if(!n)return[];let t=[];n.online||t.push(e("home.deviceOffline"));let i=n.state||{};switch(n.deviceType){case"ColorTemperatureLight":{let r=i.onOff?.onOff;t.push(r==null?e("home.unknown"):e(r?"home.on":"home.off"));let s=Dp({...n,online:!0});Number.isFinite(i.levelControl?.currentLevel)&&t.push(`${e("home.level")} ${Math.round(s.level*100)} %`),s.kelvin&&t.push(`${s.kelvin} K`);let o=i.derived?.channels;o&&t.push(`${e("home.warm")} ${Math.round(o.warm)} % \xB7 ${e("home.cool")} ${Math.round(o.cool)} %`);break}case"GenericSwitch":{let r=i.switch?.lastEvent;r?t.push(`${e("home.lastEvent")}: ${r.rocker} ${r.position} ${r.event}`):t.push(e("home.noEvents"));break}case"ContactSensor":{let r=i.booleanState?.stateValue;t.push(r==null?e("home.unknown"):e(r?"home.contactClosed":"home.contactOpen"));break}case"OccupancySensor":{let r=i.occupancySensing?.occupancy;t.push(r==null?e("home.unknown"):r.occupied?e("home.occupied"):e("home.vacant"));break}case"WindowCovering":{let r=i.windowCovering?.currentPositionLiftPercent100ths;t.push(r==null?e("home.unknown"):`${e("home.closedPct")} ${Math.round(r/100)} %`);break}default:break}return t}function Jy(n){let e=n.fetchImpl||globalThis.fetch?.bind(globalThis),t=n.WebSocketImpl||globalThis.WebSocket,i=n.setTimer||((v,M)=>setTimeout(v,M)),r=n.clearTimer||(v=>clearTimeout(v)),s=new Map,o="off",a=!1,l=!1,c=0,u=0,h=null,f=null;function d(v,M){if(!(o===v&&!M)){o=v;try{n.onStatus?.(v,M)}catch(E){console.error("home onStatus",E)}}}function g(v,...M){try{v?.(...M)}catch(E){console.error("home handler",E)}}function x(v){if(!l||v!==u)return;let M=Wy[Math.min(c,Wy.length-1)];c+=1,f=i(()=>{f=null,l&&v===u&&b(v)},M)}function m(v){if(!v||typeof v.globalId!="string")return;let M=s.get(v.globalId);s.set(v.globalId,v),g(n.onDevice,v,M)}function p(v){let M;try{M=JSON.parse(typeof v=="string"?v:String(v))}catch{return}if(!(!M||typeof M!="object"))if(M.type==="snapshot"&&Array.isArray(M.devices)){c=0;for(let E of M.devices)m(E);d("live"),g(n.onSnapshot,M.devices)}else M.type==="state"&&M.device?m(M.device):M.type==="switch"&&M.event&&g(n.onSwitch,M.event)}async function b(v){if(!e||!t){d("unreachable","no fetch/WebSocket");return}d(o==="live"?"connecting":o==="unreachable"?"unreachable":"connecting");let M=null;try{let y=typeof AbortController=="function"?new AbortController:null,w=i(()=>y?.abort(),dR);try{let L=await e(`${n.baseUrl.replace(/\/+$/,"")}/health`,{signal:y?.signal,cache:"no-store"});L.ok&&(M=await L.json())}finally{r(w)}}catch{M=null}if(!l||v!==u)return;if(!M||M.status!=="ok"){d("unreachable"),x(v);return}a=!!M.simulation;let E;try{E=new t(pR(n.baseUrl))}catch{d("unreachable"),x(v);return}h=E,E.onmessage=y=>{v===u&&p(y.data)},E.onclose=()=>{h===E&&(h=null),!(!l||v!==u)&&(d(o==="live"?"connecting":"unreachable"),x(v))},E.onerror=()=>{}}async function S(v,M){if(!e||o!=="live")return{ok:!1,status:0};try{let E=await e(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)}),y="";if(!E.ok)try{let w=await E.json();y=w?.error?.message||w?.error?.code||""}catch{}return{ok:E.ok,status:E.status,error:y}}catch(E){return{ok:!1,status:0,error:String(E?.message||E)}}}return{start(){l||(l=!0,c=0,u+=1,b(u))},stop(){l=!1,u+=1,f!=null&&r(f),f=null;let v=h;h=null;try{v?.close()}catch{}s.clear(),a=!1,d("off")},status:()=>o,isLive:()=>o==="live",simulation:()=>a,device:v=>o==="live"?s.get(v):void 0,lastKnown:v=>s.get(v),devices:()=>[...s.values()],command:(v,M)=>S(mR(n.baseUrl,v,"/commands"),M),press:(v,M)=>S(gR(n.baseUrl,v),M)}}function jy(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(i=>e[i]):[];return{elements:e,roots:t}}function gh(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let r=i.parentId||null;(r===e||!r&&i.containerId===e)&&t.push(i)}return t.sort((i,r)=>{let s=(i.order??0)-(r.order??0);return s||String(i.name||"").localeCompare(String(r.name||""))}),t.map(i=>i.globalId)}function Np(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=s.parentId||s.containerId||null}return t.reverse(),t}function Op(n,e){return Np(n,e).slice(0,-1)}function Up(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of gh(n,s))r(a,o+1)};for(let s of n.roots)r(s,0);return t}function Qy(n){return Math.min(Math.max(0,n),4)*12}function e_(n,e,t,i,r=44,s=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/r)-s),l=Math.min(i,Math.ceil((o+e)/r)+s);return{start:a,end:Math.max(a,l)}}function Us(n,e){let t=[],i=[e],r=new Set;for(;i.length;){let s=i.pop();if(!(!s||r.has(s)||!n.elements[s])){r.add(s),t.push(s);for(let o of gh(n,s))i.push(o)}}return t}function t_(n,e){let t=null,i=null,r=new Set,s=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;s&&n.elements[s]&&!r.has(s);){r.add(s);let o=n.elements[s];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),s=o.containerId||o.parentId||null}return{storey:t,space:i}}function n_(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([r])=>r!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[r,s]of i)e.push(`${r}: ${i_(s)}`)}}return e}function i_(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function r_(n,e){return n&&n===e?"frame":"pulse"}function s_(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${i_(e.value)}`):[]}var xR=`<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.5 4.2h8.2v1.35H2.5V4.2zm0 5.1h8.2v1.35H2.5V9.3zm0 5.15h8.2V15.8H2.5v-1.35z"/>
  <path fill="currentColor" d="M13.2 6.15l3.15 3.15-3.15 3.15-1.05-1.05 1.35-1.35H11.2V8.55h2.3L12.15 7.2l1.05-1.05z"/>
</svg>`;function o_(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},closePopover(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let r=document.createElement("span");r.dataset.i18n="ui.inspector",r.textContent=n.t("ui.inspector");let s=document.createElement("span");s.className="ifc-entry-chevron",s.setAttribute("aria-hidden","true"),s.textContent="\u203A",i.append(r,s),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let l=document.createElement("button");l.type="button",l.className="ifc-back",l.dataset.noSheetDrag="true";let c=document.createElement("button");c.type="button",c.className="ifc-show-all",c.hidden=!0,c.dataset.noSheetDrag="true",a.append(l,c);let u=document.createElement("div");u.className="ifc-crumbs",u.dataset.noSheetDrag="true";let h=document.createElement("div");h.className="ifc-list";let f=document.createElement("div");f.className="ifc-list-spacer";let d=document.createElement("div");d.className="ifc-list-window",h.append(f,d);let g=document.createElement("div");g.className="ifc-head",g.append(a,u),o.append(g,h),e.append(t,o);let x=document.createElement("div");x.id="ifc-popover",x.hidden=!0,x.className="ifc-popover",document.body.append(x);let m=document.createElement("div");m.id="ifc-row-menu",m.hidden=!0,m.className="ifc-menu",document.body.append(m);let p=new Set,b=null,S=null,v=0;function M(){o.hidden=!0,t.hidden=!1,le()}function E(){t.hidden=!0,o.hidden=!1,D(),requestAnimationFrame(()=>D())}function y(){n.openSheet(),E(),e.scrollTop=0}i.addEventListener("click",()=>y()),l.addEventListener("click",()=>{M(),e.scrollTop=0}),c.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),D()});function w(ue){let Re=n.index.elements[ue];return Re&&(Re.name||Re.id||Re.type)||ue}function L(){u.replaceChildren();let ue=b?Np(n.index,b):[];if(!ue.length){u.hidden=!0;return}u.hidden=!1,ue.forEach((Re,He)=>{if(He){let Xe=document.createElement("span");Xe.className="ifc-crumb-sep",Xe.textContent="\u203A",u.append(Xe)}let Le=document.createElement("button");Le.type="button",Le.className="ifc-crumb",Le.textContent=w(Re),Le.addEventListener("click",()=>{b=Re;for(let Xe of Op(n.index,Re))p.add(Xe);D(),G(Re)}),u.append(Le)})}function D(){l.textContent=`\u2039 ${n.t("ui.menu")}`,c.textContent=n.t("ui.showAll"),c.hidden=!n.visibility.anyHidden(),r.textContent=n.t("ui.inspector"),L(),z()}function B(){let ue=e.getBoundingClientRect();return h.getBoundingClientRect().top-ue.top+e.scrollTop}function V(){let ue=e.getBoundingClientRect();return g.getBoundingClientRect().bottom-ue.top+6}function z(){let ue=Up(n.index,p);f.style.height=`${ue.length*44}px`;let Re=e_(e.scrollTop,e.clientHeight||320,B(),ue.length,44);d.replaceChildren(),d.style.transform=`translateY(${Re.start*44}px)`;for(let He=Re.start;He<Re.end;He++)d.append(O(ue[He]))}function O(ue){let Re=n.index.elements[ue.id],He=gh(n.index,ue.id),Le=document.createElement("div");if(Le.className="ifc-row",Le.dataset.id=ue.id,Le.style.paddingLeft=`${Qy(ue.depth)+8}px`,Le.style.height=`${44}px`,(ue.id===S||ue.id===b)&&Le.classList.add("is-target"),n.visibility.isHidden(ue.id)&&Le.classList.add("is-hidden"),He.length){let se=document.createElement("button");se.type="button",se.className="ifc-disclosure";let ke=p.has(ue.id);se.textContent=ke?"\u25BE":"\u203A",se.setAttribute("aria-expanded",ke?"true":"false"),se.setAttribute("aria-label",ke?n.t("ui.collapse"):n.t("ui.expand")),se.addEventListener("click",et=>{et.stopPropagation(),p.has(ue.id)?p.delete(ue.id):p.add(ue.id),D()}),Le.append(se)}else{let se=document.createElement("span");se.className="ifc-disclosure-spacer",Le.append(se)}let Xe=document.createElement("span");Xe.className="ifc-row-text";let qe=document.createElement("span");qe.className="ifc-row-name",qe.textContent=w(ue.id);let ot=document.createElement("span");return ot.className="ifc-row-meta",ot.textContent=Re?.type||"",Xe.append(qe,ot),Le.append(Xe),ye(Le,ue.id),Le}let X=0;function Q(ue){let Re=performance.now();if(Re-X<40)return;X=Re;let He=r_(b,ue);b=ue,n.onFrame(ue,{move:He==="frame"}),Z(ue),L()}function q(ue){return ue instanceof Element&&!!ue.closest(".ifc-disclosure")}function ye(ue,Re){let He=null,Le=0,Xe=()=>{Le&&window.clearTimeout(Le),Le=0},qe=(ke,et,xe)=>{q(xe)||(Xe(),He={x:ke,y:et,moved:0,consumed:!1},Le=window.setTimeout(()=>{Le=0,!(!He||He.consumed||hh({dt:500,dx:He.moved,dy:0,released:!1})!=="longpress")&&(He.consumed=!0,Me(Re,He.x,He.y))},500))},ot=(ke,et)=>{if(!He)return;let xe=Math.hypot(ke-He.x,et-He.y);xe>He.moved&&(He.moved=xe),He.moved>12&&Xe()},se=(ke,et,xe)=>{Xe();let A=He;He=null,!(!A||A.consumed||q(xe)||Math.max(A.moved,Math.hypot(ke-A.x,et-A.y))>12)&&Q(Re)};ue.addEventListener("pointerdown",ke=>{ke.button!==void 0&&ke.button!==0||qe(ke.clientX,ke.clientY,ke.target)}),ue.addEventListener("pointermove",ke=>ot(ke.clientX,ke.clientY)),ue.addEventListener("pointerup",ke=>{ke.pointerType!=="touch"&&se(ke.clientX,ke.clientY,ke.target)}),ue.addEventListener("pointercancel",()=>Xe()),ue.addEventListener("touchend",ke=>{let et=ke.changedTouches[0];et&&se(et.clientX,et.clientY,ke.target)},{passive:!0})}function Z(ue){S=ue,v&&window.clearTimeout(v),v=window.setTimeout(()=>{S===ue&&(S=null),z()},1600),z()}function G(ue){let He=Up(n.index,p).findIndex(Xe=>Xe.id===ue);if(He<0)return;let Le=B()+He*44;e.scrollTop=Math.max(0,Le-V()),z()}let ee=!1;function Me(ue,Re,He){k(),m.replaceChildren(),m.hidden=!1,ee=!1;let Le=n.visibility.isHidden(ue);K(Le?"ui.unhideThis":"ui.hideThis",()=>{Le?n.visibility.unhide(ue):n.visibility.hide(ue),Ce()}),K("ui.hideOthers",()=>{n.visibility.hideOthers(ue),Ce()}),K("ui.unhideOthers",()=>{n.visibility.unhideOthers(ue),Ce()}),te(m,Re,He)}function Ce(){n.onVisibility(),le(),D()}function K(ue,Re){let He=document.createElement("button");He.type="button",He.className="ifc-menu-btn",He.textContent=n.t(ue);let Le=!1,Xe=qe=>{qe.preventDefault(),qe.stopPropagation(),!Le&&(Le=!0,Re())};He.addEventListener("touchend",Xe),He.addEventListener("click",Xe),m.append(He)}function le(){m.hidden=!0,m.replaceChildren()}function k(){x.hidden=!0,x.replaceChildren()}function te(ue,Re,He){ue.hidden=!1,ue.style.left="0px",ue.style.top="0px";let Le=ue.getBoundingClientRect(),Xe=8,qe=Math.max(Xe,window.innerWidth-Le.width-Xe),ot=Math.min(Math.max(Xe,Re),qe),se=He+8;se+Le.height>window.innerHeight-Xe&&(se=Math.max(Xe,He-Le.height-8)),ue.style.left=`${ot}px`,ue.style.top=`${se}px`}function me(ue,Re,He,Le,Xe){if(le(),x.replaceChildren(),x.hidden=!1,!ue)Ee(n.t("ui.noIfc"),Re||"");else{let qe=document.createElement("div");qe.className="ifc-pop-id";let ot=document.createElement("button");ot.type="button",ot.className="ifc-pop-title";let se=document.createElement("div");se.className="ifc-kicker";let ke=document.createElement("div");ke.className="ifc-name";let et=ue.name||ue.id||"",xe=ue.globalId||"",A=!1,j=0,J=()=>{se.hidden=!A,se.textContent=A?n.t("ui.globalId"):"",ke.textContent=A?xe:et,ke.className=A?"ifc-gid":"ifc-name",ot.setAttribute("aria-label",A?et:n.t("ui.globalId"))},Te=T=>{T.preventDefault(),T.stopPropagation();let W=performance.now();W-j<80||(j=W,A=!A,J())};J(),ot.append(se,ke),ot.addEventListener("touchend",Te),ot.addEventListener("click",Te);let $=document.createElement("button");$.type="button",$.className="ifc-reveal",$.innerHTML=xR,$.setAttribute("aria-label",n.t("ui.reveal")),$.title=n.t("ui.reveal"),$.addEventListener("click",T=>{T.stopPropagation(),k(),Oe(ue.globalId)}),qe.append(ot,$),x.append(qe),Ee(n.t("ui.type"),ue.type||"");let ve=t_(n.index,ue.globalId);ve.storey&&Ee(n.t("ui.storey"),ve.storey.name||ve.storey.id),ve.space&&Ee(n.t("ui.space"),ve.space.name||ve.space.id);let be=s_(ue);be.length&&We(n.t("ui.dimensions"),be);let Se=n_(ue);Se.length&&We(n.t("ui.note"),Se);let P=n.liveLines?.(ue)||[];P.length&&We(n.t("home.live"),P)}if(He.length){let qe=document.createElement("div");qe.className="ifc-actions";for(let ot of He){let se=document.createElement("button");se.type="button",se.className="ifc-action",se.textContent=ot.label||n.t(ot.labelKey),se.addEventListener("click",ke=>{ke.stopPropagation(),ot.run(),n.onVisibility()}),qe.append(se)}x.append(qe)}te(x,Le,Xe)}function Ee(ue,Re){let He=document.createElement("div");He.className="ifc-line";let Le=document.createElement("div");Le.className="ifc-kicker",Le.textContent=ue;let Xe=document.createElement("div");Xe.className="ifc-value",Xe.textContent=Re,He.append(Le,Xe),x.append(He)}function We(ue,Re){let He=document.createElement("div");He.className="ifc-line";let Le=document.createElement("div");Le.className="ifc-kicker",Le.textContent=ue;let Xe=document.createElement("div");Xe.className="ifc-note",Xe.textContent=Re.join(`
`),He.append(Le,Xe),x.append(He)}function Oe(ue){if(n.index.elements[ue]){for(let Re of Op(n.index,ue))p.add(Re);b=ue,S=ue,n.openSheet(),E(),D(),requestAnimationFrame(()=>G(ue))}}e.addEventListener("scroll",()=>{o.hidden||z()},{passive:!0});let Ye=ue=>ue instanceof Node?!(!x.hidden&&x.contains(ue)||!m.hidden&&m.contains(ue)):!0;return document.addEventListener("pointerup",()=>{m.hidden||(ee=!0)},!0),document.addEventListener("pointerdown",ue=>{let Re=ue.target;!x.hidden&&Ye(Re)&&k(),!m.hidden&&ee&&Ye(Re)&&le()},!0),{open:y,refresh:D,closePopover:k,openPopover:me,reveal:Oe,isInspectorOpen:()=>!o.hidden}}function a_(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let r of Us(n,i))e.add(r)},unhide(i){for(let r of Us(n,i))e.delete(r)},hideOthers(i){let r=new Set(Us(n,i));for(let s of t())r.has(s)||e.add(s)},unhideOthers(i){let r=new Set(Us(n,i));for(let s of t())r.has(s)||e.delete(s)},showAll(){e.clear()}}}var Hp=.3,h_=1.5,yR=.5,Fp=new Ke,_R=new I,bh=new I,Bp=new I,xh=new I,yh=new I,$o=new I,_h=new I,kp=new $t,l_=new $t,vh=new $t,c_=new $t,zp=new Jr,vR=new I(0,1,0),u_=new ei;function bR(n,e,t=Hp,i=h_){let r=Number.isFinite(e)&&e>0?e:0,s=Number.isFinite(n)&&n>0?n:null;return s!=null&&s>=t?s:s!=null?Math.max(i,t):r>=t?r:Math.max(i,t)}function MR(n,e,t=Hp,i=h_){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function SR(n,e,t=Hp,i=yR){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function wR(n,e,t,i=1){let r=2*Math.PI*i/Math.max(1,t);return{theta:-n*r,phi:-e*r}}function ER(n,e,t,i,r){if(!i&&!r||(yh.copy(n.position).sub(t),yh.lengthSq()<1e-12))return!1;$o.copy(n.up),$o.lengthSq()<1e-12?$o.set(0,1,0):$o.normalize(),c_.setFromUnitVectors($o,vR),xh.copy(yh).applyQuaternion(c_),zp.setFromVector3(xh);let s=1e-6;return r=Math.min(Math.PI-s,Math.max(s,zp.phi+r))-zp.phi,kp.setFromAxisAngle($o,i),_h.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(kp),_h.lengthSq()<1e-12?!1:(_h.normalize(),l_.setFromAxisAngle(_h,r),vh.copy(l_).multiply(kp),xh.copy(yh).applyQuaternion(vh),n.position.copy(t).add(xh),e.sub(t).applyQuaternion(vh).add(t),n.quaternion.premultiply(vh),!0)}function TR(n,e,t){return!(t>0)||(n.getWorldDirection(bh),Bp.copy(n.position).addScaledVector(bh,t),Bp.distanceToSquared(e)<1e-12)?!1:(e.copy(Bp),!0)}function AR(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let r of i){let s=r&&r.clippingPlanes;if(s){for(let o of s)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function RR(n,e,t,i,r){if(!e||!t||e.isOrthographicCamera)return null;let s=n.getBoundingClientRect(),o=s.width||n.clientWidth||1,a=s.height||n.clientHeight||1;Fp.x=(i-s.left)/o*2-1,Fp.y=-((r-s.top)/a)*2+1,t.updateWorldMatrix(!0,!0),u_.setFromCamera(Fp,e);let l=u_.intersectObject(t,!0);e.getWorldDirection(bh);for(let c of l){let u=c.object;if(!u.visible||Ds(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!AR(u,c.point))continue;let f=c.distance;if(!(f>1e-4))continue;let d=_R.copy(c.point).sub(e.position).dot(bh);if(d>1e-4)return{point:c.point.clone(),slant:f,depth:d}}return null}function CR(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),r=new Map,s=null;function o(){return t.enabled!==!1&&!i()}function a(){let v=n.getCamera();return!!(v&&v.isPerspectiveCamera)}function l(v,M){return RR(e,n.getCamera(),n.getRoot(),v,M)}function c(v){let M=n.getCamera();!M||!a()||v==null||TR(M,t.target,v)}function u(v,M){let E=n.getCamera();if(!E||!a())return;let y=l(v,M),w=E.position.distanceTo(t.target);c(bR(y?y.slant:null,w))}function h(v,M){let E=n.getCamera();if(!E||!a())return;let y=l(v,M),w=E.position.distanceTo(t.target);c(MR(y?y.depth:null,w))}function f(){s=null,t.enableRotate=!0}function d(v){if(r.set(v.pointerId,{x:v.clientX,y:v.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(r.size>=2){f(),t.zoomToCursor=!0;let D=g(v);u(D.x,D.y);return}let M=v.pointerType==="touch",E=v.button??0;if(!M&&E===2){f(),h(v.clientX,v.clientY);return}if(!M&&E===1){f(),u(v.clientX,v.clientY);return}if(!M&&E!==0)return;if(!M&&(v.shiftKey||v.ctrlKey||v.metaKey)){f(),h(v.clientX,v.clientY);return}let y=n.getCamera(),w=l(v.clientX,v.clientY),L=y?y.position.distanceTo(t.target):0;if(!w||!SR(w.slant,L)){f();return}t.enableRotate=!1,s={id:v.pointerId,x:v.clientX,y:v.clientY,lastX:v.clientX,lastY:v.clientY,point:w.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function g(v){let M=v.clientX,E=v.clientY,y=1;for(let[w,L]of r)w!==v.pointerId&&(M+=L.x,E+=L.y,y+=1);return{x:M/y,y:E/y}}function x(v){let M=r.get(v.pointerId);if(M&&(M.x=v.clientX,M.y=v.clientY),!s||v.pointerId!==s.id||r.size!==1||!o())return;let E=n.getCamera();if(!E)return;let y=v.clientX-s.lastX,w=v.clientY-s.lastY;if(!s.dragging){if(Math.hypot(v.clientX-s.x,v.clientY-s.y)<=dh)return;s.dragging=!0}if(!y&&!w)return;let L=wR(y,w,e.clientHeight||1,t.rotateSpeed);ER(E,t.target,s.point,L.theta,L.phi),E.lookAt(t.target),s.lastX=v.clientX,s.lastY=v.clientY}function m(v){r.delete(v.pointerId),s&&s.id===v.pointerId&&f(),r.size<2&&(t.zoomToCursor=!1),r.size===0&&(t.enableRotate=!0)}function p(v){m(v)}function b(v){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||s&&s.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(v.clientX,v.clientY)}function S(){r.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:m,onPointerCancel:p,onWheel:b,onWheelDone:S}}function f_(n){let e=CR(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var Yo=class extends Li{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let r=0;r<t;r++)i[6*r]=e[r].x,i[6*r+1]=e[r].y,i[6*r+2]=e[r].z||0,i[6*r+3]=e[r+1].x,i[6*r+4]=e[r+1].y,i[6*r+5]=e[r+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Mh=class extends rs{constructor(e=new Yo,t=new ji({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var PR='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',IR=420,LR=36,DR=new I,d_=new I,p_=new I,Vp=new I,Fs=new I,as=new I;function Xp(n){return new I(n[0]*.001,n[2]*.001,-n[1]*.001)}function Gp(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function m_(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function NR(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function Sh(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function OR(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/IR,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function UR(n,e){if(e==="plate")return LR;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function Zo(n,e,t,i="center",r=null,s=1){let o=Number.isFinite(s)&&s>0?s:1,a=Math.max(8,Math.round(t*o)),l=n.map(y=>String(y)).filter(y=>y.length),c=document.createElement("canvas"),u=c.getContext("2d"),h=`600 ${a}px ${PR}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),g=Math.ceil(a*1.25);u&&(u.font=h);let x=a;if(u)for(let y of l)x=Math.max(x,u.measureText(y).width);let m=Math.ceil(x+f*2),p=Math.ceil(Math.max(l.length,1)*g+d*2),b=2;c.width=m*b,c.height=p*b;let S=c.getContext("2d");if(S){S.scale(b,b),S.clearRect(0,0,m,p);let y=e==="plate";S.font=h,S.textAlign="left",S.textBaseline="middle",S.lineJoin="round",S.miterLimit=2,S.lineWidth=Math.max(2,a*.28),S.strokeStyle=y?"#ffffff":"rgba(0,0,0,0.92)",S.fillStyle=r||(y?"#141414":"#f7f7f8"),l.forEach((w,L)=>{let D=f,B=d+g*L+g*.5;S.strokeText(w,D,B),S.fillText(w,D,B)})}let v=new vr(c);v.colorSpace=At,v.flipY=!0,v.needsUpdate=!0;let M=new on({map:v,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Dt}),E=new pt(new hi(1,1),M);return E.renderOrder=30,E.frustumCulled=!1,E.userData.cssWidth=m,E.userData.cssHeight=p,E.userData.anchor=i,E.userData.fill=r,E.userData.fontScale=o,E}function Wp(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function sr(n,e=!1){let t=new Yo;t.setPositions([0,0,0,0,0,0]);let i=new ji({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let r=new Mh(t,i);return r.renderOrder=25,r.frustumCulled=!1,r.computeLineDistances(),r}function Lr(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function g_(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:r,getVisibleWidthM:s,getTarget:o}=n,a=n.getExaggeration||(()=>1),l=new Ht;l.name="Annotations",l.userData.blueprintAnnotations=!0,e.add(l);let c=null,u="viewer",h=!0,f=0,d=[],g=null,x=null,m=null;function p(){return u==="plate"?1315860:15921908}function b(G){return G&&G.color!=null?Gp(G.color,p()):c&&c.annotationColor!=null?Gp(c.annotationColor,p()):p()}function S(G){return Wp(b(G))}function v(G){let ee=Number(G&&G.size);return Number.isFinite(ee)&&ee>0?ee:1}function M(G){G.traverse(ee=>{ee.geometry&&ee.geometry.dispose();let Me=ee.material;Me&&(Me.map&&Me.map.dispose(),Me.dispose())})}function E(){for(let G of[...l.children])l.remove(G),M(G);d=[],g=null,x=null,m=null}function y(){return UR(i(),u)}function w(){l.visible=!!c&&h}function L(){if(E(),f=y(),!c){w();return}let G=r(),ee=p(),Me=f,Ce=Array.isArray(c.annotations)?c.annotations:[];for(let te of Ce)if(!(!te||typeof te!="object")){if(te.kind==="callout"&&Array.isArray(te.anchor)){let me=Sh(te.text,G);if(!me)continue;let Ee=Zo(me.split(`
`),u,Me,"center",S(te),v(te)),We=(te.leader===!1?[]:m_(te)).map(()=>sr(b(te)));l.add(...We,Ee),d.push({kind:"callout",sprite:Ee,lines:We,data:te})}else if(te.kind==="dim"&&Array.isArray(te.a)&&Array.isArray(te.b)){let me=b(te),Ee=Zo(["0"],u,Me,"center",Wp(me),v(te)),We=sr(me),Oe=sr(me),Ye=sr(me),ue=sr(me),Re=sr(me);l.add(We,Oe,Ye,ue,Re,Ee),d.push({kind:"dim",sprite:Ee,lines:[We,Oe,Ye,ue,Re],data:te})}else if(te.kind==="line"&&Array.isArray(te.points)&&te.points.length>=2){let me=Gp(te.color,p()),We=[sr(me,!!te.dashed)];te.arrow&&We.push(sr(me,!1),sr(me,!1));let Oe=null,Ye=Sh(te.text,G);Ye&&(Oe=Zo(Ye.split(`
`),u,Me,"center",Wp(me),v(te))),l.add(...We),Oe&&l.add(Oe),d.push({kind:"line",sprite:Oe,lines:We,data:te})}}let K=Sh(c.title,G),le=c.project?String(c.project):"",k=[...K.split(`
`),le].filter(Boolean);k.length&&(g=Zo(k,u,Me,"topleft"),l.add(g)),x=Zo(["1:1"],u,Me,"bottomleft"),m=sr(ee),l.add(m,x),w()}function D(G){let ee=Xp(G),Me=a();return Me!==1&&(ee.y*=Me),ee}function B(G,ee=DR){return ee.copy(G).project(t())}function V(G,ee,Me,Ce=new I){return Ce.set(G,ee,Me).unproject(t())}function z(G){let ee=t(),Me=i(),Ce=Math.max(1,Me.clientHeight);if(ee.isOrthographicCamera){let k=Math.max(ee.zoom,1e-6);return(ee.top-ee.bottom)/k/Ce}let K=Math.max(ee.position.distanceTo(G),1e-4),le=(ee.fov||45)*Math.PI/180;return 2*Math.tan(le/2)*K/Ce}let O=new I,X=new I;function Q(G,ee){let Me=t(),Ce=z(ee),K=Ce*G.userData.cssWidth,le=Ce*G.userData.cssHeight;O.set(1,0,0).applyQuaternion(Me.quaternion),X.set(0,1,0).applyQuaternion(Me.quaternion);let k=G.userData.anchor||"center";G.position.copy(ee),k==="topleft"?(G.position.addScaledVector(O,K*.5),G.position.addScaledVector(X,-le*.5)):k==="bottomleft"&&(G.position.addScaledVector(O,K*.5),G.position.addScaledVector(X,le*.5)),G.quaternion.copy(Me.quaternion),G.scale.set(K,le,1)}function q(){let G=i(),ee=Math.max(1,G.width),Me=Math.max(1,G.height);l.traverse(Ce=>{let K=Ce.material;K&&K.resolution&&K.resolution.set(ee,Me)})}function ye(G,ee){let Me=Zo(ee,u,f||y(),G.userData.anchor,G.userData.fill,G.userData.fontScale||1);G.material.map?.dispose(),G.material.dispose(),G.material=Me.material,G.userData.cssWidth=Me.userData.cssWidth,G.userData.cssHeight=Me.userData.cssHeight,Me.geometry.dispose()}function Z(){if(!c||!h||(y()!==f&&L(),!l.visible))return;q();let ee=r();t().updateMatrixWorld();for(let k of d)if(k.kind==="callout"){let te=D(k.data.anchor),me=B(te,d_),Ee=Array.isArray(k.data.offset)?k.data.offset:[.08,.06],We=me.x+Number(Ee[0]||0)*2,Oe=me.y+Number(Ee[1]||0)*2,Ye=V(We,Oe,me.z,p_);Q(k.sprite,Ye);let ue=z(Ye),Re=ue*k.sprite.userData.cssWidth*.5,He=m_(k.data);for(let Le=0;Le<k.lines.length;Le+=1){let Xe=D(He[Le]||k.data.anchor);Fs.copy(Ye).sub(Xe);let qe=Fs.length();qe>Re+ue?(Fs.setLength(qe-Re),Fs.add(Xe)):Fs.copy(Ye),Lr(k.lines[Le],Xe,Fs)}}else if(k.kind==="dim"){let te=D(k.data.a),me=D(k.data.b),Ee=B(te,d_),We=B(me,p_),Oe=We.x-Ee.x,Ye=We.y-Ee.y,ue=Math.hypot(Oe,Ye)||1e-6;Oe/=ue,Ye/=ue;let Re=Number(k.data.offset)||.04,He=-Ye*Re*2,Le=Oe*Re*2,Xe=(Ee.z+We.z)*.5,qe=V(Ee.x+He,Ee.y+Le,Xe,new I),ot=V(We.x+He,We.y+Le,Xe,new I),se=z(qe),ke=se*6,et=se*8;as.copy(qe).sub(te);let xe=as.length()||1;as.multiplyScalar((xe+et)/xe);let A=te.clone().add(as);as.copy(ot).sub(me);let j=as.length()||1;as.multiplyScalar((j+et)/j);let J=me.clone().add(as),Te=te.clone().lerp(qe,Math.min(.85,ke/xe)),$=me.clone().lerp(ot,Math.min(.85,ke/j));Lr(k.lines[0],Te,A),Lr(k.lines[1],$,J),Lr(k.lines[2],qe,ot);let ve=se*10,Se=V(Ee.x+He-Ye*.012,Ee.y+Le+Oe*.012,Xe,new I).sub(qe);Se.lengthSq()<1e-16?Se.set(0,ve,0):Se.setLength(ve),Lr(k.lines[3],qe.clone().sub(Se),qe.clone().add(Se)),Lr(k.lines[4],ot.clone().sub(Se),ot.clone().add(Se)),Vp.copy(qe).lerp(ot,.5);let P=V(Ee.x+He-Ye*.03,Ee.y+Le+Oe*.03,Xe,new I).sub(V(Ee.x+He,Ee.y+Le,Xe,new I));P.lengthSq()>1e-12&&Vp.add(P);let W=Sh(k.data.text,ee)||NR(te.distanceTo(me));k.sprite.userData.labelText!==W&&(ye(k.sprite,[W]),k.sprite.userData.labelText=W),Q(k.sprite,Vp)}else if(k.kind==="line"){let te=k.data.points.map(Ee=>D(Ee)),me=[];for(let Ee of te)me.push(Ee.x,Ee.y,Ee.z);if(k.lines[0].geometry.setPositions(me),k.lines[0].computeLineDistances(),k.data.arrow&&te.length>=2&&k.lines.length>=3){let Ee=te[te.length-2],We=te[te.length-1],Oe=We.clone().sub(Ee);if(Oe.lengthSq()>1e-12){Oe.normalize();let Ye=z(We),ue=Oe.clone().multiplyScalar(-Ye*16),Re=new I().crossVectors(Oe,t().up).normalize().multiplyScalar(Ye*7);Re.lengthSq()<1e-16&&Re.set(Ye*7,0,0),Lr(k.lines[1],We,We.clone().add(ue).add(Re)),Lr(k.lines[2],We,We.clone().add(ue).sub(Re))}}if(k.sprite){let Ee=te[0].clone().lerp(te[te.length-1],.5);Q(k.sprite,Ee)}}let Ce=B(o(),Fs).z;if(g){let k=V(-.94,.9,Ce,new I);Q(g,k)}let K=s(),le=OR(K??NaN);if(x&&m){let k=K!=null&&K>8?2:1,te=V(-.9,-.86,Ce,new I),me=V(-.9+.08,-.86,Ce,new I).sub(te),Ee=z(te),We=K&&K>0?k/K*Math.max(1,i().clientWidth):80;me.lengthSq()>1e-12?me.setLength(Math.max(We*Ee,Ee*40)):me.set(Ee*80,0,0),Lr(m,te,te.clone().add(me));let Oe=x.userData.labelText,Ye=le?`${le}  \xB7  ${Math.round(k*1e3)} mm`:"";Oe!==Ye&&(ye(x,Ye?[Ye]:["\u2014"]),x.userData.labelText=Ye);let ue=V(-.9,-.8,Ce,new I).sub(te);Q(x,te.clone().add(ue))}}return{group:l,setSpec(G){c=G&&typeof G=="object"?G:null,L(),Z()},setInk(G){u=G==="plate"?"plate":"viewer",L(),Z()},setVisible(G){h=!!G,w(),l.visible&&Z()},isVisible(){return h},relocalize(){L(),Z()},glyphBoundsNdc(){let G=i(),ee=Math.max(1,G.clientWidth),Me=Math.max(1,G.clientHeight),Ce=1/0,K=-1/0,le=1/0,k=-1/0,te=!1;for(let me of d){let Ee=me.sprite;if(!Ee||Ee===g||Ee===x||me.kind!=="callout"&&me.kind!=="dim"&&me.kind!=="line")continue;let We=B(Ee.position),Oe=(Ee.userData.cssWidth||0)/ee,Ye=(Ee.userData.cssHeight||0)/Me;Ce=Math.min(Ce,We.x-Oe),K=Math.max(K,We.x+Oe),le=Math.min(le,We.y-Ye),k=Math.max(k,We.y+Ye),te=!0}return te?{minX:Ce,maxX:K,minY:le,maxY:k}:null},update:Z,clear(){c=null,E(),l.visible=!1}}}function x_(n){return n/25.4*72}function qp(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function FR(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,r)=>{e.toBlob(s=>{s?i(s):r(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function BR(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function kR(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Ml(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function zR(n){let e=n.width,t=n.height,i=n.data,r=new Uint8Array(e*t*3);for(let v=0,M=0;v<i.length;v+=4,M+=3){let E=i[v+3]/255;r[M]=Math.round(i[v]*E+255*(1-E)),r[M+1]=Math.round(i[v+1]*E+255*(1-E)),r[M+2]=Math.round(i[v+2]*E+255*(1-E))}let{bytes:s,filter:o}=await kR(r),a=x_(420),l=x_(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),h=[],f=0;function d(v){h.push(v),f+=v.length}let g=[0];function x(v,M){g[v]=f,d(Ml(`${v} 0 obj
`));for(let E of M)d(Ml(E));d(Ml(`
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
`,d(Ml(p));let b=new Uint8Array(f),S=0;for(let v of h)b.set(v,S),S+=v.length;return new Blob([b],{type:"application/pdf"})}async function y_(n){let e=await FR(n),t=await BR(e),i=await zR(t);return{png:e,pdf:i}}var $p="scene";function WR(){try{return(new URLSearchParams(location.search).get($p)||"").trim()}catch{return""}}function v_(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set($p,t):e.searchParams.delete($p);let i=`${e.pathname}${e.search}${e.hash}`,r=`${location.pathname}${location.search}${location.hash}`;i!==r&&history.replaceState(null,"",i)}catch{}}function XR(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],r=Array.isArray(t.partGroups)?t.partGroups:[],s=Array.isArray(t.doors)?t.doors:[],o=jy(t.ifc),a=new Map,l=()=>{},c=String(t.scene!=null?t.scene:WR()).trim();hy(),wp(document);let u=[],h=null,f=1842206,d=!0,g=Gx(),x=bx(),m=new Map,p=new Map,b=new Map,S=new Map,v=new Set,M=new Map,E=new Map,y=new Map,w=new Set,L=null;L=ay(_=>{d=_,f=_?1842206:15263981,h&&(h.background=new Je(f)),document.documentElement.style.colorScheme=_?"dark":"light",m.size&&jo()});let D=new Nu({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});D.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),D.outputColorSpace=At,D.toneMapping=Io,D.toneMappingExposure=1.05,D.localClippingEnabled=!0;let B=Ox(D);h=new Vn,h.background=new Je(f);let V=1,z=new Ht;z.name="VerticalExaggeration",h.add(z);function O(_){let C=Number(_);V=Number.isFinite(C)&&C>0?C:1,z.scale.set(1,V,1)}let X=30,Q=120,q=75,ye=125,Z="perspective",G=q,ee=q,Me=1,Ce=!1,K=new ln(45,1,.01,1e6),le=new Ri(-1,1,1,-1,.01,1e6),k=K,te=new Hu(k,n);te.enableDamping=!1,te.screenSpacePanning=!0;let me=()=>!1,Ee=ky({canvas:n,getCamera:()=>k,records:s,isBlocked:()=>me(),onLongPress:_=>l(_),onToggle:(_,C)=>q_(_,C)}),We=Vy({canvas:n,getCamera:()=>k});window.blueprintsFeedback=We;let Oe=new Map,Ye=new Map,ue={on:!0,level:1,color:Lp(3e3)},Re={on:!1,level:1,color:mh},He=new Map,Le=null,Xe=_=>_&&Le?Le.device(_.globalId):void 0;Gy(Ee.taps,{elementOf:_=>Il(_),isOn:_=>!!Oe.get(_.globalId),isOpen:_=>{let C=Xe(_);if(C?.deviceType==="WindowCovering"){let N=C.state?.windowCovering?.targetPositionLiftPercent100ths;return N!=null&&N<5e3}return!!Ye.get(_.globalId)},isLive:_=>!!Xe(_),onLight:_=>H_(_),onSwitch:(_,C)=>Y_(_,C),switchActions:_=>Z_(_),onCover:_=>K_(_),coverActions:_=>J_(_),onWindow:_=>j_(_),targetsFor:(_,C)=>W_(_,C)});let qe=g_({scene:h,getCamera:()=>k,getCanvas:()=>n,getLocale:oh,getVisibleWidthM:()=>{if(!k.isOrthographicCamera)return null;let _=Math.max(k.zoom,1e-6);return(k.right-k.left)/_},getTarget:()=>te.target,getExaggeration:()=>V}),ot=null,se=null;h.add(new za(16777215,.45));let ke=new Zr(16777215,1.15);ke.position.set(.6,1,.4),h.add(ke);let et=new Zr(16777215,.4);et.position.set(-.5,.2,-.6),h.add(et);let xe=new Fo(D);h.environment=xe.fromScene(new Vu,.04).texture,xe.dispose();let A=null;f_({canvas:n,controls:te,getCamera:()=>k,getRoot:()=>A,isBlocked:()=>me()||te.enabled===!1});let j=new zt,J=new I,Te=new I,$=new I,ve=new I,be=new I,Se=[],P=1,T=!1,W=!1,_e=!1;new Fu().parse(e,"",_=>{A=_.scene,z.add(A),Ee.bind(A),A.traverse(N=>{if(!N.isMesh)return;let U=Ny(N);N.userData.bpPart=U.part,N.userData.bpElementKey=U.element,U.element&&(a.has(U.element)||a.set(U.element,[]),a.get(U.element).push(N));let oe=U.part;if(m.has(oe)||m.set(oe,[]),m.get(oe).push(N),N.material){let we=Array.isArray(N.material)?N.material:[N.material];for(let Ae of we)"side"in Ae&&(Ae.side=Dt)}}),_i(),Qo(),R(),re(),Ph();let C=Ze(c);C&&(ze=`scene:${String(C.id).trim()}`),gt(),ls(),Qe(),Tt(),jo(),C&&Dr(C),nt(),L?.refreshPartialHeight(),E_(),T_(),Vs(),Gs()},_=>{he(String(_?.message||_))});function he(_){let C=document.getElementById("err");C&&(C.style.display="block",C.textContent=_)}function pe(){A&&(j.setFromObject(A),j.getSize(J),j.getCenter(Te))}function ie(){let _=Math.max(1,n.clientWidth),C=Math.max(1,n.clientHeight);return _/C}function ce(_,C){let N=_*Math.PI/180;return 2*Math.atan(Math.tan(N/2)/Math.max(C,1e-6))}function De(){let _=ie();K.aspect=_,K.fov=ce(G,_)*180/Math.PI,K.updateProjectionMatrix()}function F(_,C){let N=ie(),U=Math.max(_,1e-6)*Math.tan(C/2),oe=U*N;le.left=-oe,le.right=oe,le.top=U,le.bottom=-U,le.updateProjectionMatrix()}function ge(){let _=ie(),N=Math.max(le.top,1e-6)*_;le.left=-N,le.right=N,le.updateProjectionMatrix()}function fe(_,C){let N=ie(),U=Math.max(_,1e-6),we=Math.max(C,1e-6),Ae=we*N;Ae<U&&(Ae=U,we=Ae/Math.max(N,1e-6)),Me=1,le.left=-Ae,le.right=Ae,le.top=we,le.bottom=-we,le.updateProjectionMatrix(),Fe()}function Be(_){let C=Math.max(_,1e-4),N=$.copy(k.position).sub(te.target);N.lengthSq()<1e-12?N.set(0,0,1):N.normalize(),k.position.copy(te.target).addScaledVector(N,C)}function Ne(_){_!==k&&(_.position.copy(k.position),_.quaternion.copy(k.quaternion),_.up.copy(k.up),_.near=k.near,_.far=k.far,k=_,te.object=k,te.update())}function Ue(){let _=Math.abs(or)>.05||Math.abs(ar)>.05||Math.abs(vi-1)>.001?vi:1;return Me*_}function Fe(){k.zoom=Ue(),k.updateProjectionMatrix()}function st(){if(Ce||W||!k.isOrthographicCamera)return;let _=Math.abs(or)>.05||Math.abs(ar)>.05||Math.abs(vi-1)>.001?vi:1;Me=Math.max(k.zoom/Math.max(_,1e-6),1e-6)}function Y(){if(Z==="ortho")return;ee=G;let _=k.position.distanceTo(te.target),C=ce(G,ie());F(_,C),Me=1,yi(()=>{Ce=!0,Ne(le),Z="ortho",Fe(),Ce=!1}),Xn()}function Pe(_){if(Z!=="ortho")return;let C=dt(_??ee),N=Math.max(le.top,1e-6)/Math.max(Me,1e-6),U=ce(C,ie()),oe=N/Math.max(Math.tan(U/2),1e-8);G=C,ee=C,Me=1,yi(()=>{Ce=!0,Ne(K),Z="perspective",De(),Be(oe),Fe(),kn(),te.update(),Ce=!1}),Xn()}function rt(_,C={}){let N=dt(_);if(Z==="ortho"){Pe(N);return}let U=ie(),oe=ce(G,U),we=ce(N,U),Ae=k.position.distanceTo(te.target);G=N,ee=N,yi(()=>{if(De(),C.reframe!==!1){let $e=Math.tan(oe/2)/Math.max(Math.tan(we/2),1e-8);Be(Ae*$e),kn(),te.update()}Fe()}),Xn()}function Ie(){Z==="ortho"?Pe(ee):Y()}function dt(_){return Math.min(Q,Math.max(X,_))}function Bt(){return Z==="ortho"?ye:G}function Qt(_){return _>Q?"ISO":`${Math.round(_)}\xB0`}function Xn(){ot&&(ot.value=Bt()),se&&(se.textContent=Z==="ortho"?"ISO":`${Math.round(G)}\xB0`),ot?.refresh()}function Oi(_){if(_>Q){Z!=="ortho"?Y():Xn();return}let C=dt(_);Z==="ortho"?Pe(C):rt(C,{reframe:!0})}function ls(){let _=document.getElementById("fov");if(!_)return;_.replaceChildren();let C=document.createElement("div");C.className="fov-row";let N=document.createElement("span");N.className="fov-label",N.textContent=Nt("ui.fov"),se=document.createElement("span"),se.className="fov-value",se.textContent=`${Math.round(G)}\xB0`,ot=sh({min:X,max:ye,step:1,value:Bt(),ariaLabel:"Field of view",formatAriaValue:Qt,onInput:Ae=>Oi(Ae),onChange:Ae=>Oi(Ae),onTap:()=>Ie()}),ot.el.classList.add("fov-range");let U=document.createElement("div");U.className="fov-detent",U.setAttribute("aria-hidden","true");let oe=(Q-X)/(ye-X);U.style.left=`${oe*100}%`,ot.el.querySelector(".coop-range-track")?.append(U),C.append(N,ot.el,se),_.append(C),Xn()}function kn(){let _=Math.max(J.x,J.y,J.z,.01),C=k.position.distanceTo(te.target),N=Math.round(Math.min(Math.max(C/200,_/5e3,.001),C/10)*1e4)/1e4,U=Math.round(Math.max(C+_*4,_*8,10)*1e4)/1e4;k.near===N&&k.far===U||(k.near=N,k.far=U,k.updateProjectionMatrix())}function yi(_){W=!0;try{_()}finally{requestAnimationFrame(()=>{W=!1})}}De();function _i(){A&&(yi(()=>{pe(),te.target.copy(Te);let C=Math.max(J.x,J.y,J.z,1)*1.85;k.position.set(Te.x+C*.75,Te.y+C*.55,Te.z+C*.75),kn(),te.update()}),si())}function Ko(){for(let _ of m.keys())p.set(_,1),b.set(_,1),Pr(m.get(_)||[],1,{edgeMode:x});pe(),Or()}function Jo(_){if(A){if(je=null,qe.clear(),O(1),Ko(),Vs(),Gs(),K.up.set(0,1,0),le.up.set(0,1,0),k.up.set(0,1,0),_==="iso"){_i();return}yi(()=>{pe();let C=Math.max(J.x,J.y,J.z,1),N=C*1.85,U=Te;_==="front"?k.position.set(U.x,U.y,U.z+N):_==="top"?k.position.set(U.x,U.y+N,U.z+C*.01):_==="side"&&k.position.set(U.x-N,U.y,U.z),te.target.copy(U),kn(),te.update()}),si()}}function Dr(_){if(!A||!_)return;je=_,O(_.verticalExaggeration);let C=V;if(_.opacityDefault!=null||_.opacity&&typeof _.opacity=="object"){let we=_.opacityDefault!=null?Number(_.opacityDefault):1,Ae=_.opacity&&typeof _.opacity=="object"?_.opacity:{},$e=kx(Ae,u);for(let lt of m.keys()){let Et=Object.prototype.hasOwnProperty.call($e,lt)?$e[lt]:we;Nr(lt,Et,{skipUi:!0,skipClip:!0})}pe(),Or()}if(Object.prototype.hasOwnProperty.call(_,"cuts")){let we=Array.isArray(_.cuts)?_.cuts:[];Se.length=0;for(let Ae of we){let $e=Ae?.normal;if(!Array.isArray($e)||$e.length<3)continue;let lt=new I(Number($e[0])||0,Number($e[1])||0,Number($e[2])||0);if(lt.lengthSq()<1e-12)continue;lt.normalize();let Et=null,tn=Math.min(1,Math.max(0,Number(Ae.t)||0));if(Array.isArray(Ae.anchor)&&Ae.anchor.length>=3){Et=Xp(Ae.anchor),Et.y*=C;let{near:ai,far:nn}=Ui(lt),Jt=Et.dot(lt);tn=Math.min(1,Math.max(0,(Jt-ai)/Math.max(nn-ai,1e-6)))}Se.push({id:P++,normal:lt,t:tn,anchor:Et,locked:!0,label:Ot(lt)})}T=!1,vn(),Qe(),Tt(),L?.refreshPartialHeight()}_.projection==="ortho"?Z!=="ortho"?Y():Xn():_.hFovDeg!=null&&Number.isFinite(Number(_.hFovDeg))&&rt(Number(_.hFovDeg),{reframe:!1});let U=_.camera;U&&Array.isArray(U.target)&&Array.isArray(U.position)&&yi(()=>{Ce=!0;let we=new I(0,1,0);Array.isArray(U.up)&&U.up.length>=3&&(we.set(Number(U.up[0])||0,Number(U.up[1])||0,Number(U.up[2])||0),we.lengthSq()<1e-12?we.set(0,1,0):we.normalize()),K.up.copy(we),le.up.copy(we),k.up.copy(we),te.target.set(Number(U.target[0])||0,(Number(U.target[1])||0)*C,Number(U.target[2])||0),k.position.set(Number(U.position[0])||0,(Number(U.position[1])||0)*C,Number(U.position[2])||0),k.lookAt(te.target),Z==="ortho"&&Array.isArray(U.orthoFit)&&U.orthoFit.length>=2&&fe(Number(U.orthoFit[0])||.1,(Number(U.orthoFit[1])||.1)*C),pe(),kn(),te.update(),Ce=!1}),si();let oe=_.edges;(oe==="none"||oe==="transparent"||oe==="opaque")&&(x=oe,Fr()),qe.setSpec(_),Vs(),Gs()}function Nr(_,C,N={}){let U=Math.max(0,Math.min(1,Number(C)||0));p.set(_,U),U>0&&b.set(_,U),N.detach&&v.add(_),Pr(m.get(_)||[],U,{edgeMode:x}),!N.skipClip&&(pe(),N.skipUi||Or())}function Sl(_,C,N){let U=Math.max(0,Math.min(1,Number(C)||0));N&&S.set(N,U);for(let oe of _)v.has(oe)||(p.set(oe,U),U>0&&b.set(oe,U),Pr(m.get(oe)||[],U,{edgeMode:x}));pe(),Or()}function wl(_,C,N){v.delete(_);let U=N.filter(we=>!v.has(we)),oe=Bs(C,U);p.set(_,oe),oe>0&&b.set(_,oe),Pr(m.get(_)||[],oe,{edgeMode:x}),pe(),Or()}function cs(_){if(!_.length)return 1;let C=p.get(_[0])??1;for(let N=1;N<_.length;N++){let U=p.get(_[N])??1;if(Math.abs(U-C)>1e-4)return NaN}return C}function Bs(_,C){let N=C.filter(oe=>!v.has(oe)),U=cs(N.length?N:C);return Number.isNaN(U)?S.get(_)??1:U}function Or(){for(let[_,C]of M)C.value=(p.get(_)??1)*100;for(let[_,C]of E){let N=(C.el.dataset.leaves||"").split(",").map(U=>U.trim()).filter(Boolean);C.value=Bs(_,N)*100}for(let[_,C]of y){let N=v.has(_);C.hidden=!N,C.setAttribute("aria-hidden",N?"false":"true")}}function Ur(){return Se.filter(_=>_.locked).map(_=>vt(_))}function El(){let _=new Ke;return D.getDrawingBufferSize(_),{x:_.x,y:_.y}}function Fr(){if(m.size){if(x===Cs){Ax(A);return}Cx(m,!0,{clippingPlanes:Ur(),resolution:El(),edgeMode:x})}}function jo(){m.size&&(Hx(m,g,{isDark:d,clippingPlanes:Ur(),opacityByLabel:p,edgeMode:x}),g===gl?(D.toneMapping=Io,D.toneMappingExposure=1.05):(D.toneMapping=di,D.toneMappingExposure=1),Fr(),_p(m,Ur()),z_())}function Qo(){let _=document.getElementById("mats");if(_){_.replaceChildren();for(let[C,N]of[[th,"ui.solid"],[gl,"ui.realistic"]]){let U=document.createElement("button");U.type="button",U.dataset.mode=C,U.textContent=Nt(N),C===g&&U.classList.add("is-active"),U.addEventListener("click",()=>{g=C,Wx(C),_.querySelectorAll("button").forEach(oe=>{oe.classList.toggle("is-active",oe.dataset.mode===C)}),jo()}),_.append(U)}}}function R(){let _=document.getElementById("edges");if(_){_.replaceChildren();for(let[C,N]of[[Cs,"ui.edgesNone"],[Ps,"ui.edgesTransparent"],[pl,"ui.edgesOpaque"]]){let U=document.createElement("button");U.type="button",U.dataset.edgeMode=C,U.textContent=Nt(N),C===x&&U.classList.add("is-active"),U.addEventListener("click",()=>{x=C,lp(C),_.querySelectorAll("button").forEach(oe=>{oe.classList.toggle("is-active",oe.dataset.edgeMode===C)}),Fr(),rm()}),_.append(U)}}}function H(_,C,N,U){let oe=document.createElement("div");oe.className="part-opacity-wrap";let we,Ae=()=>{if(we.value/100>0)U(0);else{let lt=N();U(lt>0?lt:1)}};return we=sh({min:0,max:100,step:1,value:Math.round(C),ariaLabel:_,formatAriaValue:$e=>`${Math.round($e)}%`,thumbScrubOnly:!0,onInput:$e=>U($e/100),onChange:$e=>U($e/100),onTap:Ae}),we.el.classList.add("part-opacity"),oe.append(we.el),{wrap:oe,range:we}}function ae(){let _=document.getElementById("parts");if(!_)return;_.style.removeProperty("--part-name-col");let C=0;for(let N of _.querySelectorAll(".part-name")){if(N.closest(".part-children")?.hidden)continue;let oe=N.style.width;N.style.width="max-content",C=Math.max(C,Math.ceil(N.getBoundingClientRect().width)),N.style.width=oe}C>0&&_.style.setProperty("--part-name-col",`${C}px`)}function ne(_,C,N,U=null){if(_.type==="leaf"){let Pt=document.createElement("div");Pt.className="part-row part-leaf",Pt.style.setProperty("--part-depth",String(N)),Pt.dataset.leaf=_.id;let Ul=document.createElement("span");Ul.className="part-disclosure-spacer",Ul.setAttribute("aria-hidden","true");let Fl=document.createElement("span");Fl.className="part-name",Fl.textContent=_.label;let{wrap:gm,range:xm}=H(`${_.label} opacity`,(p.get(_.id)??1)*100,()=>b.get(_.id)??1,Bl=>Nr(_.id,Bl,{detach:!!U}));xm.el.dataset.leaf=_.id,M.set(_.id,xm);let Mi=null;if(U){Mi=document.createElement("button"),Mi.type="button",Mi.className="part-sync",Mi.textContent=Nt("ui.sync"),Mi.setAttribute("aria-label",`${Nt("ui.sync")} ${_.label}`);let Bl=v.has(_.id);Mi.hidden=!Bl,Mi.setAttribute("aria-hidden",Bl?"false":"true"),Mi.addEventListener("click",ov=>{ov.stopPropagation(),wl(_.id,U.groupId,U.leafIds)}),y.set(_.id,Mi)}Mi?Pt.append(Ul,Fl,gm,Mi):Pt.append(Ul,Fl,gm),C.append(Pt);return}let oe=nh(_),we=document.createElement("div");we.className="part-group",we.dataset.group=_.id;let Ae=document.createElement("div");Ae.className="part-row part-group-row",Ae.style.setProperty("--part-depth",String(N)),Ae.setAttribute("role","button"),Ae.tabIndex=0;let $e=document.createElement("button");$e.type="button",$e.className="part-disclosure",$e.setAttribute("aria-label",`Expand ${_.label}`),$e.setAttribute("aria-expanded","false");let lt=document.createElement("span");lt.className="part-name",lt.textContent=_.label;let Et=Bs(_.id,oe)||1;Et<=0&&(Et=1);let{wrap:tn,range:ai}=H(`${_.label} opacity`,Bs(_.id,oe)*100,()=>Et,Pt=>{Pt>0&&(Et=Pt),Sl(oe,Pt,_.id)});ai.el.dataset.group=_.id,ai.el.dataset.leaves=oe.join(","),E.set(_.id,ai),tn.addEventListener("click",Pt=>Pt.stopPropagation()),tn.addEventListener("pointerdown",Pt=>Pt.stopPropagation());let nn=document.createElement("div");nn.className="part-children",nn.hidden=!0;function Jt(Pt){Pt?w.add(_.id):w.delete(_.id),nn.hidden=!Pt,we.classList.toggle("is-expanded",Pt),$e.setAttribute("aria-expanded",Pt?"true":"false"),$e.setAttribute("aria-label",Pt?`Collapse ${_.label}`:`Expand ${_.label}`),requestAnimationFrame(()=>ae())}function ia(){Jt(!w.has(_.id))}$e.addEventListener("click",Pt=>{Pt.stopPropagation(),ia()}),Ae.addEventListener("click",Pt=>{tn.contains(Pt.target)||ia()}),Ae.addEventListener("keydown",Pt=>{(Pt.key==="Enter"||Pt.key===" ")&&(Pt.preventDefault(),ia())}),Ae.append($e,lt,tn),we.append(Ae,nn),C.append(we);let kh={groupId:_.id,leafIds:oe};for(let Pt of _.children)ne(Pt,nn,N+1,kh);Jt(w.has(_.id))}function re(){let _=document.getElementById("parts");if(!_)return;_.replaceChildren(),M.clear(),E.clear(),y.clear();for(let N of m.keys())p.has(N)||(p.set(N,1),Pr(m.get(N)||[],1,{edgeMode:x})),b.has(N)||b.set(N,1);let C=Bx(m.keys(),r,Nt);u=C;for(let N of C)ne(N,_,0,null);requestAnimationFrame(()=>ae())}let ze="iso",je=null,Ve=!1;function Ze(_){let C=String(_||"").trim();if(!C)return null;for(let N of i)if(String(N?.id||"").trim()===C)return N;return null}function nt(){let _=ze;_&&_.startsWith("scene:")?v_(_.slice(6)):v_(null)}function ut(){return document.querySelectorAll("#cams button, #scenes button")}function _t(){ze!=null&&(ze=null,ut().forEach(_=>{_.classList.remove("is-active")}),nt())}function tt(){let _=document.getElementById("scenes");if(!_){let C=document.getElementById("cams");_=document.createElement("div"),_.id="scenes",_.className="scene-list",C?.insertAdjacentElement("afterend",_)}return _}function gt(){let _=document.getElementById("cams");if(!_)return;_.replaceChildren();let C=tt();C.replaceChildren();function N(U,oe,we,Ae){let $e=document.createElement("button");$e.type="button",$e.dataset.preset=oe,$e.textContent=we,oe===ze&&$e.classList.add("is-active"),$e.addEventListener("click",()=>{ze=oe,ut().forEach(lt=>{lt.classList.toggle("is-active",lt.dataset.preset===oe)}),Ae(),nt()}),U.append($e)}for(let[U,oe]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])N(_,U,Nt(oe),()=>Jo(U));for(let U of i){let oe=String(U?.id||"").trim();if(!oe)continue;let we=Nt(`scene.${oe}`);N(C,`scene:${oe}`,we,()=>Dr(U))}C.hidden=C.childElementCount===0}function Zt(_=$){return _.copy(te.target).sub(k.position).normalize()}function Ot(_){let C=Math.hypot(_.x,_.z),N=(Math.atan2(_.x,_.z)*180/Math.PI+360)%360,U=Math.atan2(_.y,C)*180/Math.PI,oe=Math.abs(U).toFixed(0),we=U>=0?"\u2191":"\u2193";return`${N.toFixed(0)}\xB0 / ${oe}\xB0${we}`}function wt(){return Se.some(_=>!_.locked)}function Kt(){return Se.filter(_=>_.locked)}function Qe(){wt()||!(Kt().length===0||T)||Se.push({id:P++,normal:new I(0,0,1),t:0,locked:!1,label:Nt("ui.cut")})}function _n(_){let C=document.getElementById("cuts");if(!C)return;let N=C.querySelector(`[data-cut-id="${_.id}"]`);if(!N){Tt();return}let U=N.querySelector(".cut-label");if(U&&(U.textContent=_.locked?_.label:Nt("ui.cut")),_.locked&&!N.querySelector(".cut-remove")){let oe=document.createElement("button");oe.type="button",oe.className="cut-remove",oe.setAttribute("aria-label",Nt("ui.removeSection")),oe.textContent="\xD7",oe.addEventListener("click",()=>oi(_.id)),N.append(oe)}}function St(_){_.locked||(Zt(_.normal),_.locked=!0,_.label=Ot(_.normal),T=!1,vn(),_n(_))}function si(){Kt().length!==0&&(wt()||(T=!0,!_e&&(Qe(),Tt())))}function pn(){T&&(wt()||Kt().length!==0&&(Qe(),Tt()))}function Br(_,C){let N=Se.find(U=>U.id===_);if(N){if(N.locked||St(N),N.t=Math.min(1,Math.max(0,Number(C))),N.anchor=null,_e){en();return}vn()}}function oi(_){let C=Se.findIndex(N=>N.id===_);C<0||(Se.splice(C,1),Kt().length===0?(T=!1,wt()||Qe()):T&&!wt()&&Qe(),vn(),Tt(),L?.refreshPartialHeight())}function Ui(_){if(pe(),j.isEmpty())return{near:-1,far:1};let C=j.min,N=j.max,U=1/0,oe=-1/0;for(let $e=0;$e<2;$e++)for(let lt=0;lt<2;lt++)for(let Et=0;Et<2;Et++){be.set($e?N.x:C.x,lt?N.y:C.y,Et?N.z:C.z);let tn=be.dot(_);tn<U&&(U=tn),tn>oe&&(oe=tn)}let Ae=Math.max(oe-U,1e-6)*.02;return{near:U-Ae,far:oe+Ae}}function vt(_){if(_.anchor)return new gn().setFromNormalAndCoplanarPoint(_.normal,_.anchor);let{near:C,far:N}=Ui(_.normal),U=C+(N-C)*_.t;return ve.copy(_.normal).multiplyScalar(U),new gn().setFromNormalAndCoplanarPoint(_.normal,ve)}function en(){let _=Ur();return A&&(A.traverse(C=>{if(!C.isMesh||!C.material||Fn(C)||rh(C))return;let N=Array.isArray(C.material)?C.material:[C.material];for(let U of N){if(!U)continue;let oe=U.clippingPlanes?U.clippingPlanes.length:0;U.clippingPlanes=_,U.clipIntersection=!1,oe!==_.length&&(U.needsUpdate=!0)}}),cp(A,_)),_}function vn(){let _=en();A&&(_p(m,_),x!==Cs?Fr():cp(A,_))}function Tt(){let _=document.getElementById("cuts");if(_){_.replaceChildren();for(let C of Se){let N=document.createElement("div");N.className="cut-row",N.dataset.cutId=String(C.id);let U=document.createElement("span");U.className="cut-label",U.textContent=C.locked?C.label:Nt("ui.cut");let oe=()=>{_e&&(_e=!1,vn(),pn())},we=sh({min:0,max:1,step:.001,value:C.t,ariaLabel:C.locked?`Section ${C.label}`:"Section cut",onScrubStart:()=>{_e=!0,C.locked||St(C)},onScrubEnd:oe,onInput:Ae=>Br(C.id,Ae),onChange:Ae=>{Br(C.id,Ae),oe()}});if(N.append(U,we.el),C.locked){let Ae=document.createElement("button");Ae.type="button",Ae.className="cut-remove",Ae.setAttribute("aria-label",Nt("ui.removeSection")),Ae.textContent="\xD7",Ae.addEventListener("click",()=>oi(C.id)),N.append(Ae)}_.append(N)}L?.refreshPartialHeight()}}let Wt=!1,Jn=new I,ks=new I,Yp=!1;n.addEventListener("pointerdown",()=>{Wt=!0},{capture:!0});let Zp=()=>{Wt=!1};window.addEventListener("pointerup",Zp,{capture:!0}),window.addEventListener("pointercancel",Zp,{capture:!0}),te.addEventListener("start",()=>{_t(),Wt=!0}),te.addEventListener("change",()=>{st()}),te.addEventListener("end",()=>{Wt=!1,!W&&si()});let vi=1,or=0,ar=0,wh=1,Eh=0,Th=0,Ah=1,Rh=0,Ch=0,us=0,b_=280;function M_(){let _=Math.max(1,n.clientWidth),C=Math.max(1,n.clientHeight);if(!L)return{zoom:1,offX:0,offY:0,w:_,h:C};let{bottom:N,right:U}=L.getSafeInsets();if(N<=0&&U<=0)return{zoom:1,offX:0,offY:0,w:_,h:C};let oe=Math.max(1,_-U),we=Math.max(1,C-N),Ae=Math.min(oe/_,we/C),$e=U/2,lt=N/2;return{zoom:Ae,offX:$e,offY:lt,w:_,h:C}}function Kp(_,C){yi(()=>{Ce=!0,Math.abs(or)>.05||Math.abs(ar)>.05||Math.abs(vi-1)>.001?(k.zoom=Me*vi,k.setViewOffset(_,C,or,ar,_,C)):(k.clearViewOffset(),k.zoom=Me,vi=1,or=0,ar=0),k.updateProjectionMatrix(),Ce=!1})}function Jp(_=!0){let{zoom:C,offX:N,offY:U,w:oe,h:we}=M_();if(wh=C,Eh=N,Th=U,!_){vi=C,or=N,ar=U,us=0,Kp(oe,we);return}Ah=vi,Rh=or,Ch=ar,us=performance.now()}function S_(_){if(!us)return;let C=Math.min(1,(_-us)/b_),N=1-(1-C)**3;vi=Ah+(wh-Ah)*N,or=Rh+(Eh-Rh)*N,ar=Ch+(Th-Ch)*N;let U=Math.max(1,n.clientWidth),oe=Math.max(1,n.clientHeight);Kp(U,oe),C>=1&&(us=0)}function Tl(){let _=Math.max(1,n.clientWidth),C=Math.max(1,n.clientHeight);D.setSize(_,C,!1),Z==="perspective"?De():ge(),Jp(!1);let N=El();Rx(A,N.x,N.y)}Tl(),window.addEventListener("resize",Tl),L?.onDetentChange(()=>{Jp(!0)});let qn=document.getElementById("ar"),bn=document.getElementById("measure"),ea=!1,Al=()=>Nt("ui.measure");function Ph(){let _=document.getElementById("locale");if(_){_.replaceChildren();for(let[C,N]of[["cs","CS"],["en","EN"]]){let U=document.createElement("button");U.type="button",U.dataset.locale=C,U.textContent=N,C===oh()&&U.classList.add("is-active"),U.addEventListener("click",()=>{uy(C)}),_.append(U)}}}function w_(){wp(document),qn&&!ea&&(qn.textContent=Nt("ui.ar")),bn&&(bn.textContent=Al()),Vs(),Gs(),qe.relocalize();try{Qo(),R(),gt(),ls(),re(),Tt(),Ph(),fm()}catch(_){console.error("relocalizeUi",_);try{Ph()}catch{}}L?.refreshPartialHeight()}Sp(()=>w_());function E_(){qn&&(qn.hidden=!1,ea||(qn.textContent=Nt("ui.ar")))}function T_(){bn&&(bn.hidden=!1,bn.textContent=Al())}let zs=document.getElementById("drawing"),kr=document.getElementById("labels"),Hs=!0;function Vs(){zs&&(zs.hidden=!1,zs.disabled=!je||Rl,zs.textContent=Nt("ui.drawing"))}function Gs(){if(!kr)return;let _=!!je;kr.hidden=!_,kr.disabled=!_,kr.setAttribute("aria-pressed",Hs?"true":"false"),kr.classList.toggle("is-active",_&&Hs),kr.textContent=Nt("ui.labels")}function A_(){try{let _=new URLSearchParams(window.location.search).get("m");if(_&&_.trim())return _.trim()}catch{}return"model"}function R_(){let C=1,N=1.35;for(let U=0;U<6;U+=1){qe.update();let oe=qe.glyphBoundsNdc();if(!oe)return;let we=Math.max(-1+.04-oe.minX,oe.maxX-(1-.04),-1+.04-oe.minY,oe.maxY-(1-.04),0);if(we<.012||C>=N-.01)return;let Ae=Math.min(N/C,Math.max(1.05,1+we*1.6));C*=Ae,k.isOrthographicCamera?(le.left*=Ae,le.right*=Ae,le.top*=Ae,le.bottom*=Ae,le.updateProjectionMatrix()):($.copy(k.position).sub(te.target).multiplyScalar(Ae),k.position.copy(te.target).add($),kn())}}function jp(){us=0,vi=1,or=0,ar=0,wh=1,Eh=0,Th=0,k.clearViewOffset(),k.zoom=Me,k.updateProjectionMatrix()}let Rl=!1;async function Qp(){if(Rl||!A||!je)return null;Rl=!0,Vs(),Ve=!0;let _=je,C=x,N=h.background,U=D.getPixelRatio(),oe=n.style.width,we=n.style.height,Ae=L?.getDetent?.()??null,$e=bi?.isActive()??!1,lt=qe.isVisible();try{$e&&bi?.setActive(!1),qe.setVisible(!0),L?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,D.setPixelRatio(1),Tl(),jp(),x=pl,Fr(),h.background=new Je(16777215),qe.setInk("plate"),Dr(_),jp(),R_(),qe.update(),B.render(h,k,A,im,{quality:"high"});let{png:Et,pdf:tn}=await y_(n),ai=`${A_()}_${String(_.id||"scene")}`;return{png:Et,pdf:tn,stem:ai}}finally{n.style.width=oe,n.style.height=we,D.setPixelRatio(U),x=C,h.background=N,qe.setInk("viewer"),qe.setVisible(lt),Ae&&L?.setDetent(Ae),Tl(),Fr(),_&&Dr(_),$e&&bi?.setActive(!0),Ve=!1,Rl=!1,Vs(),Gs(),requestAnimationFrame(Ol)}}window.blueprintCaptureDrawing=async()=>{let _=await Qp();return _?{png:_.png,pdf:_.pdf,stem:_.stem}:null},window.blueprintSetView=(_={})=>{if(!A||!_)return!1;let C=_.projection==="ortho"?"ortho":"perspective",N=Number.isFinite(Number(_.hFovDeg))?Number(_.hFovDeg):G;return C==="perspective"&&Z==="ortho"&&Pe(N),C==="perspective"&&rt(N,{reframe:!1}),yi(()=>{Ce=!0;let U=new I(0,1,0);if(Array.isArray(_.up)&&_.up.length>=3&&(U.set(Number(_.up[0])||0,Number(_.up[1])||0,Number(_.up[2])||0),U.lengthSq()>1e-12?U.normalize():U.set(0,1,0)),K.up.copy(U),le.up.copy(U),k.up.copy(U),Array.isArray(_.target)&&te.target.set(Number(_.target[0])||0,Number(_.target[1])||0,Number(_.target[2])||0),Array.isArray(_.position)&&k.position.set(Number(_.position[0])||0,Number(_.position[1])||0,Number(_.position[2])||0),k.lookAt(te.target),C==="ortho"){let oe=k.position.distanceTo(te.target),we=ce(N,ie());F(oe,we),Me=1,Z!=="ortho"&&(Ne(le),Z="ortho"),Fe(),Xn()}pe(),kn(),te.update(),Ce=!1}),an=!0,!0},kr&&kr.addEventListener("click",()=>{Hs=!Hs,qe.setVisible(Hs),Gs()}),zs&&zs.addEventListener("click",()=>{(async()=>{let _=await Qp();_&&(qp(_.png,`${_.stem}.png`),qp(_.pdf,`${_.stem}.pdf`))})()});let bi=null;h&&(bi=Dy({scene:h,canvas:n,getCamera:()=>k,controls:te,getRoot:()=>A,getClipPlanes:()=>Ur(),onLiveLength:_=>{bn&&(_?(bn.textContent=_,bn.classList.add("is-live")):(bn.textContent=Al(),bn.classList.remove("is-live")))},onActiveChange:_=>{an=!0,bn&&(bn.classList.toggle("is-active",_),bn.setAttribute("aria-pressed",_?"true":"false"),_||(bn.textContent=Al(),bn.classList.remove("is-live")))}})),bn&&bn.addEventListener("click",()=>{bi&&bi.setActive(!bi.isActive())}),me=()=>!!bi?.isActive();function em(){if(!A)return null;A.updateWorldMatrix(!0,!0);let _=Kt().map(oe=>vt(oe)),C=new Ht;if(C.name="ARContent",A.traverse(oe=>{if(!oe.isMesh||!oe.visible||Fn(oe))return;let we=ey(oe,_);we&&C.add(we)}),!C.children.length)return null;C.updateMatrixWorld(!0);let N=vp(C),U=new Ht;return U.name="ARExport",U.add(C),sy(C,N),U.userData.arPlacement=N,U}async function tm(){if(ea||!A)return;ea=!0;let _=qn?.textContent||"AR";qn&&(qn.disabled=!0,qn.textContent="\u2026");try{let C=em();if(!C)throw new Error("Nothing visible to export. Show at least one part.");let U=await new qu().parseAsync(C,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),oe=new Blob([U],{type:"model/vnd.usdz+zip"}),we=URL.createObjectURL(oe),Ae=document.createElement("a");Ae.rel="ar",Ae.href=we,Ae.download="view.usdz";let $e=document.createElement("img");$e.alt="AR",Ae.appendChild($e),document.body.appendChild(Ae),Ae.click(),Ae.remove(),setTimeout(()=>URL.revokeObjectURL(we),6e4)}catch(C){he(String(C?.message||C))}finally{ea=!1,qn&&(qn.disabled=!1,qn.textContent=_)}}qn&&qn.addEventListener("click",()=>{tm()});let nm={scene:h,get camera(){return k},controls:te,parts:m,partOpacity:p,cuts:Se,scenes:i,setPartOpacity:Nr,setCameraPreset:Jo,applyScene:Dr,setHFov:rt,toggleFovIso:Ie,get projection(){return Z},get hFovDeg(){return G},setCutT:Br,removeCut:oi,frameIso:_i,openArQuickLook:tm,buildArExportScene:em,getPeelQuality:()=>na};window.BlueprintsViewer=nm;function im(){for(let _ of p.values())if(_<1-1e-4)return!0;return!1}function rm(){for(let[_,C]of m){let N=p.get(_)??1;Pr(C,N,{edgeMode:x})}}let sm=!1,an=!0,lr=null,Cl=a_(o),Ih=new ei,Lh=new Ke,Pl=o_({index:o,visibility:Cl,t:Nt,openSheet(){let _=window.matchMedia("(min-width: 768px)").matches;L?.setDetent(_?"open":"partial")},onFrame:(_,C)=>{C?.move?O_(_):N_(_)},onVisibility:()=>F_(),actionsFor:()=>[],liveLines:_=>{let C=Le?.lastKnown(_.globalId);return C?Ky(C,Nt):[]}});function Il(_){let C=_;for(;C;){let N=C.userData?.bpElementKey||Ni(C.name||"").element;if(N){for(let U of Object.values(o.elements))if(U.id===N)return U}C=C.parent}return null}function om(_){return _?a.get(_)||[]:[]}function Fi(_){if(!_)return[];let C=om(_.id);if(C.length)return C;let N=[];for(let U of Us(o,_.globalId)){let oe=o.elements[U];oe&&oe!==_&&N.push(...om(oe.id))}return N}function Ws(_){let C=new zt,N=new I;for(let U of _){let oe=U.geometry;if(!oe)continue;oe.boundingBox||oe.computeBoundingBox();let we=oe.boundingBox;if(we){U.updateWorldMatrix(!0,!1);for(let Ae of[we.min.x,we.max.x])for(let $e of[we.min.y,we.max.y])for(let lt of[we.min.z,we.max.z])N.set(Ae,$e,lt).applyMatrix4(U.matrixWorld),C.expandByPoint(N)}}return C}let C_=480,Bi=null;function P_(_){let C=Math.min(1,Math.max(0,_));return C<.5?4*C*C*C:1-(-2*C+2)**3/2}function I_(_){let C=_.getSize(be),N=Math.max(C.x,C.y,C.z,.2),U=_.getCenter(new I),oe=k.position.clone().sub(te.target);oe.lengthSq()<1e-8?oe.set(.75,.55,.75):oe.normalize();let we;if(k.isOrthographicCamera)we=Math.max(k.position.distanceTo(te.target),N*1.4);else{let Ae=(k.fov||45)*Math.PI/180;we=Math.max(N*.62/Math.max(Math.tan(Ae/2),.001),N*1.25)}return{center:U,position:U.clone().addScaledVector(oe,we),span:N}}function L_(_){Bi={t0:performance.now(),fromPos:k.position.clone(),toPos:_.position,fromTarget:te.target.clone(),toTarget:_.center,span:_.span},an=!0}function D_(_){if(!Bi)return;let C=Math.min(1,(_-Bi.t0)/C_),N=P_(C);k.position.lerpVectors(Bi.fromPos,Bi.toPos,N),te.target.lerpVectors(Bi.fromTarget,Bi.toTarget,N),k.isOrthographicCamera&&fe(Bi.span*.62,Bi.span*.62),W=!0,te.update(),pe(),kn(),an=!0,C>=1&&(Bi=null,requestAnimationFrame(()=>{W=!1}))}function N_(_){let C=Fi(o.elements[_]);C.length&&am(C),an=!0}function O_(_){let C=o.elements[_],N=Fi(C);if(!N.length)return;let U=Ws(N);U.isEmpty()||(L_(I_(U)),am(N),an=!0)}function am(_){lr&&lm();let C=[];for(let N of _){if(!N.isMesh||!N.material)continue;let U=Array.isArray(N.material)?N.material:[N.material],oe=U.map(we=>{let Ae=we.clone();return Ae.emissive?(Ae.emissive.setHex(16756768),Ae.emissiveIntensity=0):Ae.color&&(Ae.userData.bpPulseBase=Ae.color.getHex()),C.push(Ae),Ae});N.userData.bpPulseMaterial=U,N.material=oe.length===1?oe[0]:oe}lr={meshes:_,clones:C,t0:performance.now()}}function lm(){if(lr){for(let _ of lr.meshes){let C=_.userData.bpPulseMaterial;C&&(_.material=C.length===1?C[0]:C),delete _.userData.bpPulseMaterial}for(let _ of lr.clones)_.dispose?.();lr=null}}function U_(_){if(!lr)return;let C=(_-lr.t0)/900;if(C>=1){lm(),an=!0;return}let N=Math.sin(Math.min(C,1)*Math.PI);for(let U of lr.clones)U.emissive?U.emissiveIntensity=.85*N:U.color&&U.userData.bpPulseBase!=null&&U.color.setHex(U.userData.bpPulseBase).offsetHSL(.08,.2,.18*N);an=!0}function F_(){let _=new Set;for(let C of Object.values(o.elements))Cl.isHidden(C.globalId)&&C.id&&_.add(C.id);for(let[C,N]of a){let U=_.has(C);for(let oe of N){oe.userData.bpIfcHidden=U;for(let we of oe.children||[])(we?.userData?.isEdgeOverlay||we?.userData?.isSectionCap)&&(we.visible=!U)}}for(let C of Ee.bindings){let N=Ni(C.host?.name||"").element,U=!!(N&&_.has(N));C.host&&(C.host.userData.bpIfcHidden=U)}for(let[C,N]of m)Pr(N,p.get(C)??1,{edgeMode:x});an=!0}function B_(_,C){let U=(Array.isArray(_.material)?_.material:[_.material]).map(oe=>{if(!oe)return oe;if(oe.userData.bpOwned)return C(oe);let we=oe.clone();return we.userData.bpOwned=!0,C(we)});_.material=U.length===1?U[0]:U}function Ll(_,C){let N="restore"in C&&C.restore,U=!N&&!!C.on;Oe.set(_.globalId,U),N?He.delete(_.globalId):He.set(_.globalId,C);let oe=N?1:Math.min(Math.max(C.level??1,0),1),we=new Je(N?0:C.color);U&&we.lerp(new Je(mh),.35*(1-oe));for(let Ae of Fi(_))B_(Ae,$e=>($e.color&&($e.userData.bpLightBase==null&&($e.userData.bpLightBase=$e.color.getHex()),N?$e.color.setHex($e.userData.bpLightBase):$e.color.copy(we)),$e.emissive&&(U?($e.emissive.copy(we),$e.emissiveIntensity=.3+.35*oe):($e.emissive.setHex(0),$e.emissiveIntensity=0)),$e));an=!0}function k_(_){let C=!Oe.get(_.globalId);Ll(_,C?ue:Re)}function z_(){for(let[_,C]of[...He]){let N=o.elements[_];N&&Ll(N,C)}}function Dl(_){_?.ok||(console.warn("Home command failed",_),Bh=`${Nt("home.failed")}${_?.status?` (${_.status})`:""}${_?.error?`: ${_.error}`:""}`,ta(),window.setTimeout(()=>{Bh="",ta()},4e3))}function H_(_){if(X_(_),Xe(_)?.deviceType!=="ColorTemperatureLight"){k_(_);return}Le.command(_.globalId,{type:"toggle"}).then(Dl)}function V_(_,C){let N=Fi(_);if(!C?.point||!N.length)return{dy:1,side:-1};let oe=Ws(N).getCenter(new I),we=new I().setFromMatrixColumn(k.matrixWorld,0),Ae=C.point.clone().sub(oe);return{dy:Ae.y,side:Ae.dot(we)}}let cm=new Map;function G_(_){let C=cm.get(_);return C||(C=Object.values(o.elements).filter(N=>N.type===_),cm.set(_,C)),C}function W_(_,C){let N=C?.camera||k,U=new I().setFromMatrixColumn(N.matrixWorld,0),oe=[];for(let we of G_(_)){if(Cl.isHidden(we.globalId))continue;let Ae=Fi(we).filter(nn=>{if(!Ns(nn))return!1;for(let Jt=nn;Jt;Jt=Jt.parent)if(!Jt.visible)return!1;return!0});if(!Ae.length)continue;let $e=Ws(Ae);if($e.isEmpty())continue;let lt=new Set(Ae),Et=nn=>{for(let Jt=nn;Jt;Jt=Jt.parent)if(lt.has(Jt))return!0;return Il(nn)===we},tn=Ae[0],ai=_==="IfcSwitchingDevice"?xy($e,vl(we),U).map(nn=>nn.center):[$e.getCenter(new I)];for(let nn of ai)oe.push({element:we,center:nn,group:we.globalId,hit:{object:tn,point:nn},owns:Et})}return oe}let Dh=new Map;function Nh(_,C,N=!0){let U=Fi(_);if(!U.length)return;let oe=Ws(U),we=oe.getCenter(new I),Ae=oe.getSize(new I),$e=C.position==="down"?-1:1;we.y+=$e*Ae.y/4;let lt=vl(_);if(lt.length>1){let Et=new I().setFromMatrixColumn(k.matrixWorld,0);if(Et.y=0,Et.lengthSq()>1e-9){Et.normalize();let tn=C.rocker===lt[0]?-1:1;we.addScaledVector(Et,tn*Math.max(Ae.x,Ae.z)/4)}}We.showFeedback({worldPos:we,kind:"switch",direction:C.position,haptic:N})}function X_(_){let C=Fi(_);C.length&&We.showFeedback({worldPos:Ws(C).getCenter(new I),kind:"light"})}function q_(_,C){if(!_?.host||C.from===C.to)return;let N=new zt().setFromObject(_.host);if(N.isEmpty())return;let U=N.getCenter(new I),oe=C.to>C.from;if(_.slideLocal){let lt=_.pivot.parent;if(!lt)return;lt.updateWorldMatrix(!0,!1);let Et=_.slideLocal.clone().transformDirection(lt.matrixWorld);oe||Et.negate(),We.showFeedback({worldPos:U,kind:"slide",worldDir:Et});return}let we=_.pivot.getWorldPosition(new I),Ae=ph(C.to,_.sign)-ph(C.from,_.sign),$e=Hy(U.toArray(),we.toArray(),Ae);We.showFeedback({worldPos:U,kind:"hinge",hinge:we,to:$e})}function $_(_,C){let N=Fi(_),U=N[0];if(!U?.parent)return;U.parent.updateWorldMatrix(!0,!1);let oe=new I(C?1:-1,0,0).transformDirection(U.parent.matrixWorld);We.showFeedback({worldPos:Ws(N).getCenter(new I),kind:"slide",worldDir:oe})}function um(_,C){Nh(_,C),Oh(_),Dh.set(_.globalId,performance.now()),Le.press(_.globalId,C).then(Dl)}function Y_(_,C){let N=Xe(_),U=Zy(_,V_(_,C));if(N?.deviceType!=="GenericSwitch"||!Le.simulation()){Nh(_,U),Oh(_);return}um(_,U)}function Z_(_){if(Xe(_)?.deviceType!=="GenericSwitch"||!Le.simulation())return null;let N=vl(_),U=[];return N.forEach((oe,we)=>{for(let Ae of["up","down"]){let $e=Nt(Ae==="up"?"home.up":"home.down");U.push({id:`switch-${oe}-${Ae}`,labelKey:Ae==="up"?"home.up":"home.down",label:N.length>1?`${we+1} ${$e}`:$e,run:()=>um(_,{rocker:oe,position:Ae,kind:"short"})})}}),U}function K_(_){let C=Xe(_);if(C?.deviceType!=="WindowCovering")return;let N=C.state?.windowCovering?.targetPositionLiftPercent100ths,U=N!=null&&N<5e3;Le.command(_.globalId,{type:U?"coverClose":"coverOpen"}).then(Dl)}function J_(_){return Xe(_)?.deviceType!=="WindowCovering"?null:[["coverOpen","ui.open"],["coverClose","ui.close"],["coverStop","home.stop"]].map(([N,U])=>({id:N,labelKey:U,run:()=>Le.command(_.globalId,{type:N}).then(Dl)}))}function Oh(_){for(let C of Fi(_)){if(C.userData.bpPressing)continue;C.userData.bpPressing=!0;let N=C.position.y;C.position.y=N-.004,window.setTimeout(()=>{C.position.y=N,C.userData.bpPressing=!1,an=!0},160)}an=!0}function j_(_){let C=!Ye.get(_.globalId);$_(_,C),Ye.set(_.globalId,C);for(let N of Fi(_)){N.userData.bpSlideOrigin||(N.userData.bpSlideOrigin=N.position.clone());let U=N.geometry;U&&!U.boundingBox&&U.computeBoundingBox();let oe=U?.boundingBox?U.boundingBox.max.x-U.boundingBox.min.x:.4;N.position.copy(N.userData.bpSlideOrigin),C&&(N.position.x+=oe*.8)}an=!0}function Q_(_){if(me())return;let C=k;if(!C||!A)return;let N=n.getBoundingClientRect(),U=N.width||n.clientWidth||1,oe=N.height||n.clientHeight||1;Lh.x=(_.clientX-N.left)/U*2-1,Lh.y=-((_.clientY-N.top)/oe)*2+1,Ih.setFromCamera(Lh,C);let we=Ih.intersectObject(A,!0).filter(Jt=>Ns(Jt.object)),Ae=A;for(;Ae.parent;)Ae=Ae.parent;let $e={raycaster:Ih,now:performance.now(),camera:C,root:Ae,tap:{x:_.clientX-N.left,y:_.clientY-N.top},size:{w:U,h:oe}},lt=Ee.taps.resolve(we,$e,Jt=>Ns(Jt.object));if(lt&&(lt.kind==="direct"||lt.kind==="extended")&&lt.hit?.object){let Jt=lt.hit.object,ia=Array.isArray(lt.claim?.actions)?lt.claim.actions.slice():[],kh=Jt.userData?.bpPart||Ni(Jt.name||"").part;Pl.openPopover(Il(Jt),kh,ia,_.clientX,_.clientY);return}let Et=we[0];if(!Et){Pl.closePopover();return}let tn=Il(Et.object),ai=Et.object.userData?.bpPart||Ni(Et.object.name||"").part,nn=lt?.kind==="legacy"&&Array.isArray(lt.claim?.actions)?lt.claim.actions.slice():[];Pl.openPopover(tn,ai,nn,_.clientX,_.clientY)}l=Q_;let Uh=$y({search:typeof location<"u"?location.search:"",storage:typeof localStorage<"u"?localStorage:null}),hm=qy(o),Fh=Uh.mode,Bh="",cr=null;function ev(_){let C=o.elements[_.globalId];C&&_.deviceType==="ColorTemperatureLight"&&Ll(C,Dp(_))}function tv(){for(let _ of[...Oe.keys()]){let C=o.elements[_];C&&Ll(C,{restore:!0})}}function ta(){if(!cr)return;let _=Le?Le.status():"off",C=_==="live"?Le.simulation()?"home.statusLive":"home.statusLiveNoSim":_==="connecting"?"home.statusConnecting":_==="unreachable"?"home.statusUnreachable":"home.statusOff";cr.textContent=Bh||Nt(C),cr.dataset.status=_,cr.title=_==="off"?"":Uh.baseUrl}function fm(){if(!hm)return;let _=document.getElementById("section-home");if(!_){let U=document.getElementById("section-locale");if(!U?.parentNode)return;_=document.createElement("section"),_.className="sheet-section",_.id="section-home",U.parentNode.insertBefore(_,U)}_.replaceChildren();let C=document.createElement("h2");C.className="sheet-title",C.textContent=Nt("home.title");let N=document.createElement("div");N.className="seg",N.id="home-mode",N.setAttribute("role","group"),N.setAttribute("aria-label",Nt("home.title"));for(let[U,oe]of[["live","home.live"],["off","home.off"]]){let we=document.createElement("button");we.type="button",we.dataset.homeMode=U,we.textContent=Nt(oe),U===Fh&&we.classList.add("is-active"),we.addEventListener("click",()=>nv(U)),N.append(we)}cr=document.createElement("p"),cr.className="home-status",cr.setAttribute("aria-live","polite"),cr.style.cssText="margin:0.5rem 0 0;font-size:0.76rem;line-height:1.35;color:var(--fg-secondary)",_.append(C,N,cr),ta()}function nv(_){Fh=_,Yy(typeof localStorage<"u"?localStorage:null,_),document.querySelectorAll("#home-mode button").forEach(C=>{C.classList.toggle("is-active",C.dataset.homeMode===_)}),Le&&(_==="live"?Le.start():(Le.stop(),tv()),ta())}hm&&(Le=Jy({baseUrl:Uh.baseUrl,onStatus:()=>{ta(),an=!0},onDevice:_=>ev(_),onSwitch:_=>{if(_.event!=="initialPress")return;let C=o.elements[_.globalId],N=performance.now()-(Dh.get(_.globalId)??-1/0)<3e3;Dh.delete(_.globalId),C&&!N&&((_.position==="up"||_.position==="down")&&Nh(C,{rocker:_.rocker,position:_.position},!1),Oh(C))}}),fm(),Fh==="live"&&Le.start(),window.blueprintsHome=Le),Sp(()=>Pl.refresh());let dm=null,pm=null,na="fast",mm=null,Nl=!1;n.addEventListener("pointermove",()=>{bi?.isActive()&&(an=!0)}),n.addEventListener("pointerup",()=>{bi?.isActive()&&(an=!0)});function iv(){let _=k.view;return[k.position.x,k.position.y,k.position.z,k.quaternion.x,k.quaternion.y,k.quaternion.z,k.quaternion.w,k.zoom,k.near,k.far,k.fov||0,k.left,k.right,k.top,k.bottom,te.target.x,te.target.y,te.target.z,n.width,n.height,_&&_.enabled?1:0,_?_.offsetX:0,_?_.offsetY:0,_?_.fullWidth:0,_?_.fullHeight:0,Z==="ortho"?1:0]}function rv(){let _=iv(),C=dm,N=!C||C.length!==_.length;if(!N&&C){for(let U=0;U<_.length;U++)if(_[U]!==C[U]){N=!0;break}}return N&&(dm=_),N}function sv(){let _=[g,x,oh(),Hs?"1":"0",String(f)],C=h?.background;C&&C.isColor&&_.push(C.getHexString());for(let[U,oe]of p)_.push(U,Number(oe).toFixed(3));for(let U of Se)_.push(String(U.id),U.locked?"1":"0",Number(U.t).toFixed(4));let N=Cl.hiddenIds();return _.push(N.length?N.slice().sort().join(","):"-"),_.join("|")}function Ol(){if(Ve)return;let _=performance.now();Ee.step(_)&&(an=!0),U_(_),D_(_),S_(_),te.update(),A&&kn(),Yp||(Jn.copy(k.position),ks.copy(te.target),Yp=!0);let C=k.position.distanceToSquared(Jn)>1e-8||te.target.distanceToSquared(ks)>1e-8;Jn.copy(k.position),ks.copy(te.target);let N=sv(),U=N!==pm,oe=rv();if(U&&(Nl=!0),na=!Wt&&!C&&!U&&!_e&&!us&&!Nl?"high":"fast",!an&&!U&&!oe&&!(na!==mm)&&!Nl){requestAnimationFrame(Ol);return}an=!1,pm=N,mm=na,U||(Nl=!1),bi?.update(),qe.update();let $e=B.render(h,k,A,im,{quality:na,batchKey:N,deferPrime:U||_e});sm&&!$e&&rm(),sm=$e,requestAnimationFrame(Ol)}return Ol(),nm}return fv(qR);})();
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
