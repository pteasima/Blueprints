var BlueprintsViewerBundle=(()=>{var sf=Object.defineProperty;var cM=Object.getOwnPropertyDescriptor;var uM=Object.getOwnPropertyNames;var hM=Object.prototype.hasOwnProperty;var fM=(n,e)=>{for(var t in e)sf(n,t,{get:e[t],enumerable:!0})},dM=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of uM(e))!hM.call(n,r)&&r!==t&&sf(n,r,{get:()=>e[r],enumerable:!(i=cM(e,r))||i.enumerable});return n};var pM=n=>dM(sf({},"__esModule",{value:!0}),n);var b2={};fM(b2,{mountViewer:()=>v2});var is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},s0=0,qf=1,o0=2;var Rs=1,a0=2,Bo=3,ui=0,Mn=1,Nt=2,_i=0,Qi=1,$f=2,Yf=3,Zf=4,tu=5;var Ni=100,l0=101,c0=102,u0=103,h0=104,el=200,ss=201,f0=202,d0=203,tl=204,ko=205,p0=206,nl=207,m0=208,g0=209,x0=210,y0=211,_0=212,v0=213,b0=214,Ic=0,Lc=1,Dc=2,So=3,Nc=4,Oc=5,Fc=6,Uc=7,nu=0,M0=1,S0=2,vi=0,Kf=1,jf=2,Jf=3,Cs=4,Qf=5,ed=6,td=7,Df="attached",w0="detached",nd=300,Ps=301,zo=302,iu=303,ru=304,Jn=1e3,xi=1001,wo=1002,Yt=1003,su=1004;var Is=1005;var Zt=1006,Ho=1007;var bi=1008;var Dn=1009,id=1010,rd=1011,Vo=1012,ou=1013,Oi=1014,qn=1015,ti=1016,au=1017,lu=1018,Ls=1020,sd=35902,od=35899,ad=1021,ld=1022,Sn=1023,Er=1026,Or=1027,cu=1028,uu=1029,os=1030,hu=1031;var fu=1033,il=33776,rl=33777,sl=33778,ol=33779,du=35840,pu=35841,mu=35842,gu=35843,xu=36196,yu=37492,_u=37496,vu=37488,bu=37489,al=37490,Mu=37491,Su=37808,wu=37809,Eu=37810,Tu=37811,Au=37812,Ru=37813,Cu=37814,Pu=37815,Iu=37816,Lu=37817,Du=37818,Nu=37819,Ou=37820,Fu=37821,Uu=36492,Bu=36494,ku=36495,zu=36283,Hu=36284,ll=36285,Vu=36286;var Ms=2300,Ss=2301,Cc=2302,Nf=2303,Of=2400,Ff=2401,Uf=2402,E0=2500;var cd=0,cl=1,Go=2,T0=3200;var ul=0,A0=1,hi="",At="srgb",Wn="srgb-linear",Ta="linear",Dt="srgb";var Pc=7680;var R0=519,C0=512,P0=513,I0=514,ud=515,L0=516,D0=517,hd=518,fd=519,dd=35044;var pd="300 es",yi=2e3,Eo=2001;function mM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function N0(){let n=To("canvas");return n.style.display="block",n}var dg={},Ao=null;function Aa(...n){let e="THREE."+n.shift();Ao?Ao("log",e,...n):console.log(e,...n)}function O0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=O0(n);let e="THREE."+n.shift();if(Ao)Ao("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=O0(n);let e="THREE."+n.shift();if(Ao)Ao("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function bs(...n){let e=n.join(" ");e in dg||(dg[e]=!0,st(...n))}function F0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var U0={[Ic]:Ic,[Dc]:Fc,[Nc]:Nc,[So]:Oc,[Lc]:Lc,[Fc]:Dc,[Uc]:Uc,[Oc]:So},Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pg=1234567,bo=Math.PI/180,ws=180/Math.PI;function er(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function md(n,e){return(n%e+e)%e}function xM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function yM(n,e,t){return n!==e?(t-n)/(e-n):0}function Ea(n,e,t){return(1-t)*n+t*e}function _M(n,e,t,i){return Ea(n,e,1-Math.exp(-t*i))}function vM(n,e=1){return e-Math.abs(md(n,e*2)-e)}function bM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function MM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function SM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wM(n,e){return n+Math.random()*(e-n)}function EM(n){return n*(.5-Math.random())}function TM(n){n!==void 0&&(pg=n);let e=pg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AM(n){return n*bo}function RM(n){return n*ws}function CM(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function PM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function IM(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*x,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*x,a*l);break;case"ZYZ":n.set(c*x,c*d,a*u,a*l);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xd(n,e){if(e.constructor===Float32Array)return n;let t=Gu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function yd(n,e){if(e.constructor===Float32Array)return n;let t=Gu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var tr={DEG2RAD:bo,RAD2DEG:ws,generateUUID:er,clamp:ft,euclideanModulo:md,mapLinear:xM,inverseLerp:yM,lerp:Ea,damp:_M,pingpong:vM,smoothstep:bM,smootherstep:MM,randInt:SM,randFloat:wM,randFloatSpread:EM,seededRandom:TM,degToRad:AM,radToDeg:RM,isPowerOfTwo:CM,ceilPowerOfTwo:PM,floorPowerOfTwo:gd,setQuaternionFromProperEuler:IM,normalize:yd,denormalize:xd},je=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],x=s[o+2],y=s[o+3];if(h!==y||c!==f||l!==d||u!==x){let g=c*f+l*d+u*x+h*y;g<0&&(f=-f,d=-d,x=-x,y=-y,g=-g);let m=1-a;if(g<.9995){let _=Math.acos(g),T=Math.sin(_);m=Math.sin(m*_)/T,a=Math.sin(a*_)/T,c=c*m+f*a,l=l*m+d*a,u=u*m+x*a,h=h*m+y*a}else{c=c*m+f*a,l=l*m+d*a,u=u*m+x*a,h=h*m+y*a;let _=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=_,l*=_,u*=_,h*=_}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],x=s[o+3];return e[t]=a*x+u*h+c*d-l*f,e[t+1]=c*x+u*f+l*h-a*d,e[t+2]=l*x+u*d+a*f-c*h,e[t+3]=u*x-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h-f*d*x;break;case"YXZ":this._x=f*u*h+l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h+f*d*x;break;case"ZXY":this._x=f*u*h-l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h-f*d*x;break;case"ZYX":this._x=f*u*h-l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h+f*d*x;break;case"YZX":this._x=f*u*h+l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h-f*d*x;break;case"XZY":this._x=f*u*h-l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h+f*d*x;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return of.copy(this).projectOnVector(e),this.sub(of)}reflect(e){return this.sub(of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},of=new D,mg=new Wt,ut=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],x=i[8],y=r[0],g=r[3],m=r[6],_=r[1],T=r[4],M=r[7],E=r[2],C=r[5],v=r[8];return s[0]=o*y+a*_+c*E,s[3]=o*g+a*T+c*C,s[6]=o*m+a*M+c*v,s[1]=l*y+u*_+h*E,s[4]=l*g+u*T+h*C,s[7]=l*m+u*M+h*v,s[2]=f*y+d*_+x*E,s[5]=f*g+d*T+x*C,s[8]=f*m+d*M+x*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,x=t*h+i*f+r*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=h*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=d*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(af.makeScale(e,t)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(af.makeRotation(-e)),this}translate(e,t){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},af=new ut,gg=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LM(){let n={enabled:!0,workingColorSpace:Wn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Dt&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(r.r=Mo(r.r),r.g=Mo(r.g),r.b=Mo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?Ta:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wn]:{primaries:e,whitePoint:i,transfer:Ta,toXYZ:gg,fromXYZ:xg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:gg,fromXYZ:xg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}var yt=LM();function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var eo,Bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{eo===void 0&&(eo=To("canvas")),eo.width=e.width,eo.height=e.height;let r=eo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=eo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},DM=0,Ro=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lf(r[o].image)):s.push(lf(r[o]))}else s=lf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function lf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var NM=0,cf=new D,hn=class n extends Li{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=xi,r=xi,s=Zt,o=bi,a=Sn,c=Dn,l=n.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=er(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cf).x}get height(){return this.source.getSize(cf).y}get depth(){return this.source.getSize(cf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=nd;hn.DEFAULT_ANISOTROPY=1;var wt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],x=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,M=(d+1)/2,E=(m+1)/2,C=(u+f)/4,v=(h+y)/4,R=(x+g)/4;return T>M&&T>E?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=v/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=R/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=v/s,r=R/s),this.set(i,r,s,t),this}let _=Math.sqrt((g-x)*(g-x)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(h-y)/_,this.z=(f-u)/_,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kc=class extends Li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new hn({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ro(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends kc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ra=class extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zc=class extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ot=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,c,l,u,h,f,d,x,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,f,d,x,y,g)}set(e,t,i,r,s,o,a,c,l,u,h,f,d,x,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=x,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/to.setFromMatrixColumn(e,0).length(),s=1/to.setFromMatrixColumn(e,1).length(),o=1/to.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,x=a*u,y=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+x*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,x=l*u,y=l*h;t[0]=f+y*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-x,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,x=l*u,y=l*h;t[0]=f-y*a,t[4]=-o*h,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,d=o*h,x=a*u,y=a*h;t[0]=c*u,t[4]=x*l-d,t[8]=f*l+y,t[1]=c*h,t[5]=y*l+f,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,x=a*c,y=a*l;t[0]=c*u,t[4]=y-f*h,t[8]=x*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+x,t[10]=f-y*h}else if(e.order==="XZY"){let f=o*c,d=o*l,x=a*c,y=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+y,t[5]=o*u,t[9]=d*h-x,t[2]=x*h-d,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OM,e,FM)}lookAt(e,t,i){let r=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Xr.crossVectors(i,ai),Xr.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Xr.crossVectors(i,ai)),Xr.normalize(),jl.crossVectors(ai,Xr),r[0]=Xr.x,r[4]=jl.x,r[8]=ai.x,r[1]=Xr.y,r[5]=jl.y,r[9]=ai.y,r[2]=Xr.z,r[6]=jl.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],x=i[2],y=i[6],g=i[10],m=i[14],_=i[3],T=i[7],M=i[11],E=i[15],C=r[0],v=r[4],R=r[8],O=r[12],U=r[1],W=r[5],te=r[9],ee=r[13],B=r[2],$=r[6],k=r[10],J=r[14],ge=r[3],ie=r[7],j=r[11],ue=r[15];return s[0]=o*C+a*U+c*B+l*ge,s[4]=o*v+a*W+c*$+l*ie,s[8]=o*R+a*te+c*k+l*j,s[12]=o*O+a*ee+c*J+l*ue,s[1]=u*C+h*U+f*B+d*ge,s[5]=u*v+h*W+f*$+d*ie,s[9]=u*R+h*te+f*k+d*j,s[13]=u*O+h*ee+f*J+d*ue,s[2]=x*C+y*U+g*B+m*ge,s[6]=x*v+y*W+g*$+m*ie,s[10]=x*R+y*te+g*k+m*j,s[14]=x*O+y*ee+g*J+m*ue,s[3]=_*C+T*U+M*B+E*ge,s[7]=_*v+T*W+M*$+E*ie,s[11]=_*R+T*te+M*k+E*j,s[15]=_*O+T*ee+M*J+E*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],x=e[3],y=e[7],g=e[11],m=e[15],_=c*d-l*f,T=a*d-l*h,M=a*f-c*h,E=o*d-l*u,C=o*f-c*u,v=o*h-a*u;return t*(y*_-g*T+m*M)-i*(x*_-g*E+m*C)+r*(x*T-y*E+m*v)-s*(x*M-y*C+g*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(s*u-a*c)+r*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],x=e[12],y=e[13],g=e[14],m=e[15],_=t*a-i*o,T=t*c-r*o,M=t*l-s*o,E=i*c-r*a,C=i*l-s*a,v=r*l-s*c,R=u*y-h*x,O=u*g-f*x,U=u*m-d*x,W=h*g-f*y,te=h*m-d*y,ee=f*m-d*g,B=_*ee-T*te+M*W+E*U-C*O+v*R;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/B;return e[0]=(a*ee-c*te+l*W)*$,e[1]=(r*te-i*ee-s*W)*$,e[2]=(y*v-g*C+m*E)*$,e[3]=(f*C-h*v-d*E)*$,e[4]=(c*U-o*ee-l*O)*$,e[5]=(t*ee-r*U+s*O)*$,e[6]=(g*M-x*v-m*T)*$,e[7]=(u*v-f*M+d*T)*$,e[8]=(o*te-a*U+l*R)*$,e[9]=(i*U-t*te-s*R)*$,e[10]=(x*C-y*M+m*_)*$,e[11]=(h*M-u*C-d*_)*$,e[12]=(a*O-o*W-c*R)*$,e[13]=(t*W-i*O+r*R)*$,e[14]=(y*T-x*E-g*_)*$,e[15]=(u*E-h*T+f*_)*$,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,x=s*h,y=o*u,g=o*h,m=a*h,_=c*l,T=c*u,M=c*h,E=i.x,C=i.y,v=i.z;return r[0]=(1-(y+m))*E,r[1]=(d+M)*E,r[2]=(x-T)*E,r[3]=0,r[4]=(d-M)*C,r[5]=(1-(f+m))*C,r[6]=(g+_)*C,r[7]=0,r[8]=(x+T)*v,r[9]=(g-_)*v,r[10]=(1-(f+y))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=to.set(r[0],r[1],r[2]).length(),a=to.set(r[4],r[5],r[6]).length(),c=to.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ci.copy(this);let l=1/o,u=1/a,h=1/c;return Ci.elements[0]*=l,Ci.elements[1]*=l,Ci.elements[2]*=l,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=h,Ci.elements[9]*=h,Ci.elements[10]*=h,t.setFromRotationMatrix(Ci),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=yi,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),x,y;if(c)x=s/(o-s),y=o*s/(o-s);else if(a===yi)x=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Eo)x=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=yi,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),x,y;if(c)x=1/(o-s),y=o/(o-s);else if(a===yi)x=-2/(o-s),y=-(o+s)/(o-s);else if(a===Eo)x=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},to=new D,Ci=new ot,OM=new D(0,0,0),FM=new D(1,1,1),Xr=new D,jl=new D,ai=new D,yg=new ot,_g=new Wt,qi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},UM=0,vg=new D,no=new Wt,yr=new ot,Jl=new D,da=new D,BM=new D,kM=new Wt,bg=new D(1,0,0),Mg=new D(0,1,0),Sg=new D(0,0,1),wg={type:"added"},zM={type:"removed"},io={type:"childadded",child:null},uf={type:"childremoved",child:null},Vt=class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new qi,i=new Wt,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new ut}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(bg,e)}rotateY(e){return this.rotateOnAxis(Mg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,t){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bg,e)}translateY(e){return this.translateOnAxis(Mg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jl.copy(e):Jl.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(da,Jl,this.up):yr.lookAt(Jl,da,this.up),this.quaternion.setFromRotationMatrix(yr),r&&(yr.extractRotation(r.matrixWorld),no.setFromRotationMatrix(yr),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wg),io.child=e,this.dispatchEvent(io),io.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zM),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wg),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,BM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,kM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},HM={type:"move"},Po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},B0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function hf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=md(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hf(o,s,e+1/3),this.g=hf(o,s,e),this.b=hf(o,s,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=B0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return yt.workingToColorSpace(Pn.copy(this),e),Math.round(ft(Pn.r*255,0,255))*65536+Math.round(ft(Pn.g*255,0,255))*256+Math.round(ft(Pn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Pn.copy(this),t);let i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=At){yt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,i=Pn.g,r=Pn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(Ql);let i=Ea(qr.h,Ql.h,t),r=Ea(qr.s,Ql.s,t),s=Ea(qr.l,Ql.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Je;Je.NAMES=B0;var Xn=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pi=new D,_r=new D,ff=new D,vr=new D,ro=new D,so=new D,Eg=new D,df=new D,pf=new D,mf=new D,gf=new wt,xf=new wt,yf=new wt,Wi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pi.subVectors(e,t),r.cross(Pi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Pi.subVectors(r,t),_r.subVectors(i,t),ff.subVectors(e,t);let o=Pi.dot(Pi),a=Pi.dot(_r),c=Pi.dot(ff),l=_r.dot(_r),u=_r.dot(ff),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,x=(o*u-a*c)*f;return s.set(1-d-x,x,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,vr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vr.x),c.addScaledVector(o,vr.y),c.addScaledVector(a,vr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return gf.setScalar(0),xf.setScalar(0),yf.setScalar(0),gf.fromBufferAttribute(e,t),xf.fromBufferAttribute(e,i),yf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gf,s.x),o.addScaledVector(xf,s.y),o.addScaledVector(yf,s.z),o}static isFrontFacing(e,t,i,r){return Pi.subVectors(i,t),_r.subVectors(e,t),Pi.cross(_r).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),Pi.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;ro.subVectors(r,i),so.subVectors(s,i),df.subVectors(e,i);let c=ro.dot(df),l=so.dot(df);if(c<=0&&l<=0)return t.copy(i);pf.subVectors(e,r);let u=ro.dot(pf),h=so.dot(pf);if(u>=0&&h<=u)return t.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),t.copy(i).addScaledVector(ro,o);mf.subVectors(e,s);let d=ro.dot(mf),x=so.dot(mf);if(x>=0&&d<=x)return t.copy(s);let y=d*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(i).addScaledVector(so,a);let g=u*x-d*h;if(g<=0&&h-u>=0&&d-x>=0)return Eg.subVectors(s,r),a=(h-u)/(h-u+(d-x)),t.copy(r).addScaledVector(Eg,a);let m=1/(g+y+f);return o=y*m,a=f*m,t.copy(i).addScaledVector(ro,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ii):Ii.fromBufferAttribute(s,o),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ec.copy(i.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),tc.subVectors(this.max,pa),oo.subVectors(e.a,pa),ao.subVectors(e.b,pa),lo.subVectors(e.c,pa),$r.subVectors(ao,oo),Yr.subVectors(lo,ao),xs.subVectors(oo,lo);let t=[0,-$r.z,$r.y,0,-Yr.z,Yr.y,0,-xs.z,xs.y,$r.z,0,-$r.x,Yr.z,0,-Yr.x,xs.z,0,-xs.x,-$r.y,$r.x,0,-Yr.y,Yr.x,0,-xs.y,xs.x,0];return!_f(t,oo,ao,lo,tc)||(t=[1,0,0,0,1,0,0,0,1],!_f(t,oo,ao,lo,tc))?!1:(nc.crossVectors($r,Yr),t=[nc.x,nc.y,nc.z],_f(t,oo,ao,lo,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},br=[new D,new D,new D,new D,new D,new D,new D,new D],Ii=new D,ec=new vt,oo=new D,ao=new D,lo=new D,$r=new D,Yr=new D,xs=new D,pa=new D,tc=new D,nc=new D,ys=new D;function _f(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ys.fromArray(n,s);let a=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),c=e.dot(ys),l=t.dot(ys),u=i.dot(ys);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var on=new D,ic=new je,VM=0,Ut=class extends Li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dd,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?Gu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yd(e,this.array)}};var Ca=class extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Pa=class extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Gt=class extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}},GM=new vt,ma=new D,vf=new D,yn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):GM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);let t=ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(vf)),this.expandByPoint(ma.copy(e.center).sub(vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},WM=0,gi=new ot,bf=new Vt,co=new D,li=new vt,ga=new vt,gn=new D,Bt=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mM(e)?Pa:Ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,i){return gi.makeTranslation(e,t,i),this.applyMatrix4(gi),this}scale(e,t,i){return gi.makeScale(e,t,i),this.applyMatrix4(gi),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(li.min,ga.min),li.expandByPoint(gn),gn.addVectors(li.max,ga.max),li.expandByPoint(gn)):(li.expandByPoint(ga.min),li.expandByPoint(ga.max))}li.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)gn.fromBufferAttribute(a,l),c&&(co.fromBufferAttribute(e,l),gn.add(co)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ut(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let O=0;O<i.count;O++)a[O]=new D,c[O]=new D;let u=new D,h=new D,f=new D,d=new je,x=new je,y=new je,g=new D,m=new D;function _(O,U,W){l[O]=l[U]=l[W]=1,u.fromBufferAttribute(i,O),h.fromBufferAttribute(i,U),f.fromBufferAttribute(i,W),d.fromBufferAttribute(s,O),x.fromBufferAttribute(s,U),y.fromBufferAttribute(s,W),h.sub(u),f.sub(u),x.sub(d),y.sub(d);let te=1/(x.x*y.y-y.x*x.y);isFinite(te)&&(g.copy(h).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(te),m.copy(f).multiplyScalar(x.x).addScaledVector(h,-y.x).multiplyScalar(te),a[O].add(g),a[U].add(g),a[W].add(g),c[O].add(m),c[U].add(m),c[W].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,U=T.length;O<U;++O){let W=T[O],te=W.start,ee=W.count;for(let B=te,$=te+ee;B<$;B+=3)_(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new D,E=new D,C=new D,v=new D;function R(O){C.fromBufferAttribute(r,O),v.copy(C);let U=a[O];M.copy(U),M.sub(C.multiplyScalar(C.dot(U))).normalize(),E.crossVectors(v,U);let te=E.dot(c[O])<0?-1:1;o.setXYZW(O,M.x,M.y,M.z,te)}for(let O=0,U=i.count;O<U;++O)l[O]&&R(O);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,x=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let m=0;m<u;m++)f[x++]=l[d++]}return new Ut(f,u,h)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dd,this.updateRanges=[],this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Tg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Tg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Tg(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=er()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Gn=new D,In=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Gu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yd(e,this.data.array)}},Mf=new D,XM=new D,qM=new ut,xn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Mf.subVectors(i,t).cross(XM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Mf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qM.getNormalMatrix(e),r=this.coplanarPoint(Mf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$M=0,Ln=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Qi,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=ko,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pc,this.stencilZFail=Pc,this.stencilZPass=Pc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Io=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},uo,xa=new D,ho=new D,fo=new D,po=new je,ya=new je,k0=new ot,rc=new D,_a=new D,sc=new D,Ag=new je,Sf=new je,Rg=new je,Ia=class extends Vt{constructor(e=new Io){if(super(),this.isSprite=!0,this.type="Sprite",uo===void 0){uo=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jr(t,5);uo.setIndex([0,1,2,0,2,3]),uo.setAttribute("position",new In(i,3,0,!1)),uo.setAttribute("uv",new In(i,2,3,!1))}this.geometry=uo,this.material=e,this.center=new je(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ho.setFromMatrixScale(this.matrixWorld),k0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ho.multiplyScalar(-fo.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;oc(rc.set(-.5,-.5,0),fo,o,ho,r,s),oc(_a.set(.5,-.5,0),fo,o,ho,r,s),oc(sc.set(.5,.5,0),fo,o,ho,r,s),Ag.set(0,0),Sf.set(1,0),Rg.set(1,1);let a=e.ray.intersectTriangle(rc,_a,sc,!1,xa);if(a===null&&(oc(_a.set(-.5,.5,0),fo,o,ho,r,s),Sf.set(0,1),a=e.ray.intersectTriangle(rc,sc,_a,!1,xa),a===null))return;let c=e.ray.origin.distanceTo(xa);c<e.near||c>e.far||t.push({distance:c,point:xa.clone(),uv:Wi.getInterpolation(xa,rc,_a,sc,Ag,Sf,Rg,new je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function oc(n,e,t,i,r,s){po.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ya.x=s*po.x-r*po.y,ya.y=r*po.x+s*po.y):ya.copy(po),n.copy(e),n.x+=ya.x,n.y+=ya.y,n.applyMatrix4(k0)}var Mr=new D,wf=new D,ac=new D,lc=new D,$i=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wf.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),lc.copy(this.origin).sub(wf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ac),a=lc.dot(this.direction),c=-lc.dot(ac),l=lc.lengthSq(),u=Math.abs(1-o*o),h,f,d,x;if(u>0)if(h=o*c-a,f=o*a-c,x=s*u,h>=0)if(f>=-x)if(f<=x){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=x?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(wf).addScaledVector(ac,f),d}intersectSphere(e,t){if(e.radius<0)return null;Mr.subVectors(e.center,this.origin);let i=Mr.dot(this.direction),r=Mr.dot(Mr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,x=t.x-o.x,y=t.y-o.y,g=t.z-o.z,m=i.x-o.x,_=i.y-o.y,T=i.z-o.z,M=Math.abs(c),E=Math.abs(l),C=Math.abs(u),v,R,O,U,W,te,ee,B,$,k,J,ge;if(M>=E&&M>=C?(O=c,te=h,$=x,ge=m,c>=0?(v=l,R=u,U=f,W=d,ee=y,B=g,k=_,J=T):(v=u,R=l,U=d,W=f,ee=g,B=y,k=T,J=_)):E>=C?(O=l,te=f,$=y,ge=_,l>=0?(v=u,R=c,U=d,W=h,ee=g,B=x,k=T,J=m):(v=c,R=u,U=h,W=d,ee=x,B=g,k=m,J=T)):(O=u,te=d,$=g,ge=T,u>=0?(v=c,R=l,U=h,W=f,ee=x,B=y,k=m,J=_):(v=l,R=c,U=f,W=h,ee=y,B=x,k=_,J=m)),O===0)return null;let ie=v/O,j=R/O,ue=1/O,Ae=U-ie*te,De=W-j*te,re=ee-ie*$,Me=B-j*$,fe=k-ie*ge,Q=J-j*ge,le=fe*Me-Q*re,Ce=Ae*Q-De*fe,Oe=re*De-Me*Ae;if(r){if(le<0||Ce<0||Oe<0)return null}else if((le<0||Ce<0||Oe<0)&&(le>0||Ce>0||Oe>0))return null;let Le=le+Ce+Oe;if(Le===0)return null;let ze=ue*(le*te+Ce*$+Oe*ge);return(Le>0?ze<0:ze>0)?null:this.at(ze/Le,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cg=new ot,_s=new $i,cc=new yn,Pg=new D,uc=new D,hc=new D,fc=new D,Ef=new D,dc=new D,Ig=new D,pc=new D,dt=class extends Vt{constructor(e=new Bt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){dc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(Ef.fromBufferAttribute(h,e),o?dc.addScaledVector(Ef,u):dc.addScaledVector(Ef.sub(t),u))}t.add(dc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(s),_s.copy(e.ray).recast(e.near),!(cc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(cc,Pg)===null||_s.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Cg.copy(s).invert(),_s.copy(e.ray).applyMatrix4(Cg),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],m=o[g.materialIndex],_=Math.max(g.start,d.start),T=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=_,E=T;M<E;M+=3){let C=a.getX(M),v=a.getX(M+1),R=a.getX(M+2);r=mc(this,m,e,i,l,u,h,C,v,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=x,m=y;g<m;g+=3){let _=a.getX(g),T=a.getX(g+1),M=a.getX(g+2);r=mc(this,o,e,i,l,u,h,_,T,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],m=o[g.materialIndex],_=Math.max(g.start,d.start),T=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=_,E=T;M<E;M+=3){let C=M,v=M+1,R=M+2;r=mc(this,m,e,i,l,u,h,C,v,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let g=x,m=y;g<m;g+=3){let _=g,T=g+1,M=g+2;r=mc(this,o,e,i,l,u,h,_,T,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function YM(n,e,t,i,r,s,o,a){let c;if(e.side===Mn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ui,a),c===null)return null;pc.copy(a),pc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(pc);return l<t.near||l>t.far?null:{distance:l,point:pc.clone(),object:n}}function mc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,uc),n.getVertexPosition(c,hc),n.getVertexPosition(l,fc);let u=YM(n,e,t,i,uc,hc,fc,Ig);if(u){let h=new D;Wi.getBarycoord(Ig,uc,hc,fc,h),r&&(u.uv=Wi.getInterpolatedAttribute(r,a,c,l,h,new je)),s&&(u.uv1=Wi.getInterpolatedAttribute(s,a,c,l,h,new je)),o&&(u.normal=Wi.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new D,materialIndex:0};Wi.getNormal(uc,hc,fc,f.normal),u.face=f,u.barycoord=h}return u}var va=new wt,Lg=new wt,Dg=new wt,ZM=new wt,Ng=new ot,gc=new D,Tf=new yn,Og=new ot,Af=new $i,La=class extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Df,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gc),this.boundingBox.expandByPoint(gc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gc),this.boundingSphere.expandByPoint(gc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tf.copy(this.boundingSphere),Tf.applyMatrix4(r),e.ray.intersectsSphere(Tf)!==!1&&(Og.copy(r).invert(),Af.copy(e.ray).applyMatrix4(Og),!(this.boundingBox!==null&&Af.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Af)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===w0?this.bindMatrixInverse.copy(this.bindMatrix).invert():st("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Lg.fromBufferAttribute(r.attributes.skinIndex,e),Dg.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(va.copy(t),t.set(0,0,0,0)):(va.set(t.x,t.y,t.z,1),t.set(0,0,0)),va.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Dg.getComponent(s);if(o!==0){let a=Lg.getComponent(s);Ng.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ZM.copy(va).applyMatrix4(Ng),o)}}return t.isVector4&&(t.w=va.w),t.applyMatrix4(this.bindMatrixInverse)}},Lo=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Do=class extends hn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Yt,u=Yt,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fg=new ot,KM=new ot,Da=class n{constructor(e=[],t=[]){this.uuid=er(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){st("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ot;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:KM;Fg.multiplyMatrices(a,t[s]),Fg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Do(t,e,e,Sn,qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(st("Skeleton: No bone found with UUID:",s),o=new Lo),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},Tr=class extends Ut{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mo=new ot,Ug=new ot,xc=[],Bg=new vt,jM=new ot,ba=new dt,Ma=new yn,Es=class extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,jM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mo),Bg.copy(e.boundingBox).applyMatrix4(mo),this.boundingBox.union(Bg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mo),Ma.copy(e.boundingSphere).applyMatrix4(mo),this.boundingSphere.union(Ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(i),e.ray.intersectsSphere(Ma)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mo),Ug.multiplyMatrices(i,mo),ba.matrixWorld=Ug,ba.raycast(e,xc);for(let o=0,a=xc.length;o<a;o++){let c=xc[o];c.instanceId=s,c.object=this,t.push(c)}xc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Do(new Float32Array(r*this.count),r,this.count,cu,qn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;return s[c]=a,s.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new yn,JM=new je(.5,.5),yc=new D,Jr=class{constructor(e=new xn,t=new xn,i=new xn,r=new xn,s=new xn,o=new xn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],x=s[8],y=s[9],g=s[10],m=s[11],_=s[12],T=s[13],M=s[14],E=s[15];if(r[0].setComponents(l-o,d-u,m-x,E-_).normalize(),r[1].setComponents(l+o,d+u,m+x,E+_).normalize(),r[2].setComponents(l+a,d+h,m+y,E+T).normalize(),r[3].setComponents(l-a,d-h,m-y,E-T).normalize(),i)r[4].setComponents(c,f,g,M).normalize(),r[5].setComponents(l-c,d-f,m-g,E-M).normalize();else if(r[4].setComponents(l-c,d-f,m-g,E-M).normalize(),t===yi)r[5].setComponents(l+c,d+f,m+g,E+M).normalize();else if(t===Eo)r[5].setComponents(c,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=JM.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(yc.x=r.normal.x>0?e.max.x:e.min.x,yc.y=r.normal.y>0?e.max.y:e.min.y,yc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kg=new ot,Hc=class n{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];kg.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Jr),i[r].setFromProjectionMatrix(kg,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Jr),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ar=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vc=new D,Gc=new D,zg=new ot,Sa=new $i,_c=new yn,Rf=new D,Hg=new D,Yi=class extends Vt{constructor(e=new Bt,t=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Vc.fromBufferAttribute(t,r-1),Gc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Vc.distanceTo(Gc);e.setAttribute("lineDistance",new Gt(i,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(r),_c.radius+=s,e.ray.intersectsSphere(_c)===!1)return;zg.copy(r).invert(),Sa.copy(e.ray).applyMatrix4(zg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let y=d,g=x-1;y<g;y+=l){let m=u.getX(y),_=u.getX(y+1),T=vc(this,e,Sa,c,m,_,y);T&&t.push(T)}if(this.isLineLoop){let y=u.getX(x-1),g=u.getX(d),m=vc(this,e,Sa,c,y,g,x-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let y=d,g=x-1;y<g;y+=l){let m=vc(this,e,Sa,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=vc(this,e,Sa,c,x-1,d,x-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function vc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Vc.fromBufferAttribute(a,r),Gc.fromBufferAttribute(a,s),t.distanceSqToSegment(Vc,Gc,Rf,Hg)>i)return;Rf.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Rf);if(!(l<e.near||l>e.far))return{distance:l,point:Hg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Vg=new D,Gg=new D,Na=class extends Yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vg.fromBufferAttribute(t,r),Gg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vg.distanceTo(Gg);e.setAttribute("lineDistance",new Gt(i,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oa=class extends Yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},No=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wg=new ot,Bf=new $i,bc=new yn,Mc=new D,Fa=class extends Vt{constructor(e=new Bt,t=new No){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(r),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;Wg.copy(r).invert(),Bf.copy(e.ray).applyMatrix4(Wg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,y=d;x<y;x++){let g=l.getX(x);Mc.fromBufferAttribute(h,g),Xg(Mc,g,c,r,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let x=f,y=d;x<y;x++)Mc.fromBufferAttribute(h,x),Xg(Mc,x,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xg(n,e,t,i,r,s,o){let a=Bf.distanceSqToPoint(n);if(a<t){let c=new D;Bf.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ua=class extends hn{constructor(e=[],t=Ps,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rr=class extends hn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Cr=class extends hn{constructor(e,t,i=Oi,r,s,o,a=Yt,c=Yt,l,u=Er,h=1){if(u!==Er&&u!==Or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ro(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ba=class extends Cr{constructor(e,t=Oi,i=Ps,r,s,o=Yt,a=Yt,c,l=Er){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ka=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zi=class n extends Bt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function x(y,g,m,_,T,M,E,C,v,R,O){let U=M/v,W=E/R,te=M/2,ee=E/2,B=C/2,$=v+1,k=R+1,J=0,ge=0,ie=new D;for(let j=0;j<k;j++){let ue=j*W-ee;for(let Ae=0;Ae<$;Ae++){let De=Ae*U-te;ie[y]=De*_,ie[g]=ue*T,ie[m]=B,l.push(ie.x,ie.y,ie.z),ie[y]=0,ie[g]=0,ie[m]=C>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Ae/v),h.push(1-j/R),J+=1}}for(let j=0;j<R;j++)for(let ue=0;ue<v;ue++){let Ae=f+ue+$*j,De=f+ue+$*(j+1),re=f+(ue+1)+$*(j+1),Me=f+(ue+1)+$*j;c.push(Ae,De,Me),c.push(De,re,Me),ge+=6}a.addGroup(d,ge,O),d+=ge,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Sc=new D,wc=new D,Cf=new D,Ec=new Wi,za=class extends Bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(bo*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let x=0;x<c;x+=3){o?(l[0]=o.getX(x),l[1]=o.getX(x+1),l[2]=o.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);let{a:y,b:g,c:m}=Ec;if(y.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Ec.getNormal(Cf),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){let T=(_+1)%3,M=h[_],E=h[T],C=Ec[u[_]],v=Ec[u[T]],R=`${M}_${E}`,O=`${E}_${M}`,U=f.get(O);U?(Cf.dot(U.normal)<=s&&(d.push(C.x,C.y,C.z),d.push(v.x,v.y,v.z)),f.set(O,null)):f.has(R)||f.set(R,{index0:l[_],index1:l[T],normal:Cf.clone()})}}for(let x of f.values())if(x){let{index0:y,index1:g}=x;Sc.fromBufferAttribute(a,y),wc.fromBufferAttribute(a,g),d.push(Sc.x,Sc.y,Sc.z),d.push(wc.x,wc.y,wc.z)}this.setAttribute("position",new Gt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Qn=class n extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],x=[],y=[],g=[];for(let m=0;m<u;m++){let _=m*f-o;for(let T=0;T<l;T++){let M=T*h-s;x.push(M,-_,0),y.push(0,0,1),g.push(T/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let T=_+l*m,M=_+l*(m+1),E=_+1+l*(m+1),C=_+1+l*m;d.push(T,M,C),d.push(M,E,C)}this.setIndex(d),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ha=class n extends Bt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new D,f=new D,d=[],x=[],y=[],g=[];for(let m=0;m<=i;m++){let _=[],T=m/i,M=o+T*a,E=e*Math.cos(M),C=Math.sqrt(e*e-E*E),v=0;m===0&&o===0?v=.5/t:m===i&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){let O=R/t,U=r+O*s;h.x=-C*Math.cos(U),h.y=E,h.z=C*Math.sin(U),x.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),g.push(O+v,1-T),_.push(l++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let T=u[m][_+1],M=u[m][_],E=u[m+1][_],C=u[m+1][_+1];(m!==0||o>0)&&d.push(T,M,C),(m!==i-1||c<Math.PI)&&d.push(M,E,C)}this.setIndex(d),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Va=class extends Bt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new D,s=new D;if(e.index!==null){let o=e.attributes.position,a=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],f=h.start,d=h.count;for(let x=f,y=f+d;x<y;x+=3)for(let g=0;g<3;g++){let m=a.getX(x+g),_=a.getX(x+(g+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,_),qg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,h=3*a+(l+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),qg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Gt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function qg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Ds(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if($g(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if($g(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Nn(n){let e={};for(let t=0;t<n.length;t++){let i=Ds(n[t]);for(let r in i)e[r]=i[r]}return e}function $g(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function QM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _d(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var hl={clone:Ds,merge:Nn},eS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eS,this.fragmentShader=tS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new D().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wc=class extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fn=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nn=class extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return bs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){bs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ga=class extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=nu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xc=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qc=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function nS(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Yg(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function iS(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var Ki=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$c=class extends Ki{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Of,endingEnd:Of}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ff:s=e,a=2*t-i;break;case Uf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ff:o=e,c=2*i-t;break;case Uf:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(i-t)/(r-t),y=x*x,g=y*x,m=-f*g+2*f*y-f*x,_=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*x+1,T=(-1-d)*g+(1.5+d)*y+.5*x,M=d*g-d*y;for(let E=0;E!==a;++E)s[E]=m*o[u+E]+_*o[l+E]+T*o[c+E]+M*o[h+E];return s}},Yc=class extends Ki{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},Zc=class extends Ki{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Kc=class extends Ki{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let x=(i-t)/(r-t),y=1-x;for(let g=0;g!==a;++g)s[g]=o[l+g]*y+o[c+g]*x;return s}let f=a*2,d=e-1;for(let x=0;x!==a;++x){let y=o[l+x],g=o[c+x],m=d*f+x*2,_=h[m],T=h[m+1],M=e*f+x*2,E=u[M],C=u[M+1],v=sS(i,t,_,E,r);s[x]=z0(v,y,T,C,g)}return s}};function z0(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function rS(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function sS(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=z0(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let c=rS(s,e,t,i,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var ei=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),wa(e.settings)&&(i.settings={inTangents:Kr(e.settings.inTangents,Array),outTangents:Kr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Kc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case Cc:t=this.InterpolantFactoryMethodSmooth;break;case Nf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return st("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return Cc;case this.InterpolantFactoryMethodBezier:return Nf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;wa(this.settings)&&(Zg(this.settings.inTangents,e),Zg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;wa(this.settings)&&(Kg(this.settings.inTangents,e),Kg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ct("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&gM(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Cc,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let h=a*i,f=h-i,d=h+i;for(let x=0;x!==i;++x){let y=t[h+x];if(y!==t[f+x]||y!==t[d+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,wa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Zg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Kg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Ss;var Pr=class extends ei{constructor(e,t,i){super(e,t,i)}};Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=Ms;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends ei{constructor(e,t,i,r){super(e,t,i,r)}};Wa.prototype.ValueTypeName="color";var Ir=class extends ei{constructor(e,t,i,r){super(e,t,i,r)}};Ir.prototype.ValueTypeName="number";var jc=class extends Ki{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Wt.slerpFlat(s,0,o,l-a,o,l,c);return s}},Lr=class extends ei{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends ei{constructor(e,t,i){super(e,t,i)}};Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Ms;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends ei{constructor(e,t,i,r){super(e,t,i,r)}};Qr.prototype.ValueTypeName="vector";var Xa=class{constructor(e="",t=-1,i=[],r=E0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=er(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(aS(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(ei.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=nS(c);c=Yg(c,1,u),l=Yg(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ir(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function oS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ir;case"vector":case"vector2":case"vector3":case"vector4":return Qr;case"color":return Wa;case"quaternion":return Lr;case"bool":case"boolean":return Pr;case"string":return Dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function aS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=oS(n.type);if(n.times===void 0){let i=[],r=[];iS(n.keys,i,r,"value"),n.times=i,n.values=r}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),wa(n.settings)&&(t.settings={inTangents:Kr(n.settings.inTangents,Float32Array),outTangents:Kr(n.settings.outTangents,Float32Array)}),t}var Xi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(jg(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!jg(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function jg(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Jc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],x=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},H0=new Jc,ji=class{constructor(e){this.manager=e!==void 0?e:H0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr={},kf=class extends Error{constructor(e,t){super(e),this.response=t}},Oo=class extends ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Xi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Sr[e]!==void 0){Sr[e].push({onLoad:t,onProgress:i,onError:r});return}Sr[e]=[],Sr[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&st("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Sr[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0,y=0,g=new ReadableStream({start(m){_();function _(){h.read().then(({done:T,value:M})=>{if(T)m.close();else{y+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:x,loaded:y,total:d});for(let C=0,v=u.length;C<v;C++){let R=u[C];R.onProgress&&R.onProgress(E)}m.enqueue(M),_()}},T=>{m.error(T)})}}});return new Response(g)}else throw new kf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{Xi.add(`file:${e}`,l);let u=Sr[e];delete Sr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=Sr[e];if(u===void 0)throw this.manager.itemError(e),l;delete Sr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var go=new WeakMap,Qc=class extends ji{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=go.get(o);h===void 0&&(h=[],go.set(o,h)),h.push({onLoad:t,onError:r})}return o}let a=To("img");function c(){u(),t&&t(this);let h=go.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}go.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),Xi.remove(`image:${e}`);let f=go.get(this)||[];for(let d=0;d<f.length;d++){let x=f[d];x.onError&&x.onError(h)}go.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xi.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ts=class extends ji{constructor(e){super(e)}load(e,t,i,r){let s=new hn,o=new Qc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},es=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qa=class extends es{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Pf=new ot,Jg=new D,Qg=new D,Fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Jg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jg),Qg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Pf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Pf,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Eo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Pf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Tc=new D,Ac=new Wt,Gi=new D,$a=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,Ac,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Tc,Ac,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zr=new D,e0=new je,t0=new je,un=class extends $a{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,e0,t0),t.subVectors(t0,e0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zf=class extends Fo{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ws*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ya=class extends es{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new zf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Hf=class extends Fo{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},As=class extends es{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Hf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Di=class extends $a{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vf=class extends Fo{constructor(){super(new Di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ji=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Vf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Za=class extends es{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Nr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ka=class extends Bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var If=new WeakMap,ja=class extends ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&st("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&st("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Xi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{If.has(o)===!0?(r&&r(If.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),If.set(c,l),Xi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Xi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xo=-90,yo=1,Uo=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new un(xo,yo,e,t);r.layers=this.layers,this.add(r);let s=new un(xo,yo,e,t);s.layers=this.layers,this.add(s);let o=new un(xo,yo,e,t);o.layers=this.layers,this.add(o);let a=new un(xo,yo,e,t);a.layers=this.layers,this.add(a);let c=new un(xo,yo,e,t);c.layers=this.layers,this.add(c);let l=new un(xo,yo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},eu=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var vd="\\[\\]\\.:\\/",lS=new RegExp("["+vd+"]","g"),bd="[^"+vd+"]",cS="[^"+vd.replace("\\.","")+"]",uS=/((?:WC+[\/:])*)/.source.replace("WC",bd),hS=/(WCOD+)?/.source.replace("WCOD",cS),fS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),dS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),pS=new RegExp("^"+uS+hS+fS+dS+"$"),mS=["material","materials","bones","map"],Gf=class{constructor(e,t,i){let r=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lS,"")}static parseTrackName(e){let t=pS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);mS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Gf;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S2=new Float32Array(1);var ts=class extends jr{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var n0=new ot,ci=class{constructor(e,t,i=0,r=1/0){this.ray=new $i(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return n0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(n0),this}intersectObject(e,t=!0,i=[]){return Wf(e,this,i,t),i.sort(i0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wf(e[r],this,i,t);return i.sort(i0),i}};function i0(n,e){return n.distance-e.distance}function Wf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Wf(s[o],e,t,!0)}}var ns=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Xf=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};var r0=new D,Rc=new D,_o=new D,vo=new D,Lf=new D,gS=new D,xS=new D,Ja=class{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){r0.subVectors(e,this.start),Rc.subVectors(this.end,this.start);let i=Rc.dot(Rc);if(i===0)return 0;let s=Rc.dot(r0)/i;return t&&(s=ft(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=gS,i=xS){let r=10000000000000001e-32,s,o,a=this.start,c=e.start,l=this.end,u=e.end;_o.subVectors(l,a),vo.subVectors(u,c),Lf.subVectors(a,c);let h=_o.dot(_o),f=vo.dot(vo),d=vo.dot(Lf);if(h<=r&&f<=r)return t.copy(a),i.copy(c),t.distanceToSquared(i);if(h<=r)s=0,o=d/f,o=ft(o,0,1);else{let x=_o.dot(Lf);if(f<=r)o=0,s=ft(-x/h,0,1);else{let y=_o.dot(vo),g=h*f-y*y;g!==0?s=ft((y*d-x*f)/g,0,1):s=0,o=(y*s+d)/f,o<0?(o=0,s=ft(-x/h,0,1)):o>1&&(o=1,s=ft((y-x)/h,0,1))}}return t.copy(a).addScaledVector(_o,s),i.copy(c).addScaledVector(vo,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Qa=class extends Li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Md(n,e,t,i){let r=yS(i);switch(t){case ad:return n*e;case cu:return n*e/r.components*r.byteLength;case uu:return n*e/r.components*r.byteLength;case os:return n*e*2/r.components*r.byteLength;case hu:return n*e*2/r.components*r.byteLength;case ld:return n*e*3/r.components*r.byteLength;case Sn:return n*e*4/r.components*r.byteLength;case fu:return n*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pu:case gu:return Math.max(n,16)*Math.max(e,8)/4;case du:case mu:return Math.max(n,8)*Math.max(e,8)/2;case xu:case yu:case vu:case bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _u:case al:case Mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Au:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Du:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uu:case Bu:case ku:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zu:case Hu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ll:case Vu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yS(n){switch(n){case Dn:case id:return{byteLength:1,components:1};case Vo:case rd:case ti:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case Oi:case ou:case qn:return{byteLength:4,components:1};case sd:case od:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cx(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vS(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<h.length;d++){let x=h[f],y=h[d];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,x=h.length;d<x;d++){let y=h[d];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var bS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MS=`#ifdef USE_ALPHAHASH
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
#endif`,SS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ES=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AS=`#ifdef USE_AOMAP
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
#endif`,RS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
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
#endif`,PS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NS=`#ifdef USE_IRIDESCENCE
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
#endif`,OS=`#ifdef USE_BUMPMAP
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,WS=`#define PI 3.141592653589793
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
} // validated`,XS=`vec3 transformedNormal = objectNormal;
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
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KS="gl_FragColor = linearToOutputTexel( gl_FragColor );",jS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JS=`#ifdef USE_ENVMAP
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
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ow=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aw=`#ifdef USE_GRADIENTMAP
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
}`,lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fw=`#ifdef USE_ENVMAP
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
#endif`,dw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xw=`PhysicalMaterial material;
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
#endif`,yw=`uniform sampler2D dfgLUT;
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
}`,_w=`
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
#endif`,vw=`#if defined( RE_IndirectDiffuse )
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
#endif`,bw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mw=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Sw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ew=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pw=`#if defined( USE_POINTS_UV )
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
#endif`,Iw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nw=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fw=`#ifdef USE_MORPHTARGETS
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
#endif`,Uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gw=`#ifdef USE_NORMALMAP
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
#endif`,Ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sE=`float getShadowMask() {
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
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform float backgroundBlurriness;
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
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
}`,AE=`#if DEPTH_PACKING == 3200
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
}`,RE=`#define DISTANCE
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
}`,CE=`#define DISTANCE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,DE=`uniform vec3 diffuse;
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
}`,NE=`#include <common>
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
}`,OE=`uniform vec3 diffuse;
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
}`,FE=`#define LAMBERT
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
}`,UE=`#define LAMBERT
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
}`,BE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,zE=`#define NORMAL
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
}`,HE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,GE=`#define PHONG
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
}`,WE=`#define STANDARD
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
}`,XE=`#define STANDARD
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
}`,qE=`#define TOON
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
}`,$E=`#define TOON
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
}`,YE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,jE=`uniform vec3 color;
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
}`,JE=`uniform float rotation;
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
}`,QE=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:bS,alphahash_pars_fragment:MS,alphamap_fragment:SS,alphamap_pars_fragment:wS,alphatest_fragment:ES,alphatest_pars_fragment:TS,aomap_fragment:AS,aomap_pars_fragment:RS,batching_pars_vertex:CS,batching_vertex:PS,begin_vertex:IS,beginnormal_vertex:LS,bsdfs:DS,iridescence_fragment:NS,bumpmap_pars_fragment:OS,clipping_planes_fragment:FS,clipping_planes_pars_fragment:US,clipping_planes_pars_vertex:BS,clipping_planes_vertex:kS,color_fragment:zS,color_pars_fragment:HS,color_pars_vertex:VS,color_vertex:GS,common:WS,defaultnormal_vertex:XS,displacementmap_pars_vertex:qS,displacementmap_vertex:$S,emissivemap_fragment:YS,emissivemap_pars_fragment:ZS,colorspace_fragment:KS,colorspace_pars_fragment:jS,envmap_fragment:JS,envmap_common_pars_fragment:QS,envmap_pars_fragment:ew,envmap_pars_vertex:tw,envmap_physical_pars_fragment:fw,envmap_vertex:nw,fog_vertex:iw,fog_pars_vertex:rw,fog_fragment:sw,fog_pars_fragment:ow,gradientmap_pars_fragment:aw,lightmap_pars_fragment:lw,lights_lambert_fragment:cw,lights_lambert_pars_fragment:uw,lights_pars_begin:hw,lights_toon_fragment:dw,lights_toon_pars_fragment:pw,lights_phong_fragment:mw,lights_phong_pars_fragment:gw,lights_physical_fragment:xw,lights_physical_pars_fragment:yw,lights_fragment_begin:_w,lights_fragment_maps:vw,lights_fragment_end:bw,lightprobes_pars_fragment:Mw,logdepthbuf_fragment:Sw,logdepthbuf_pars_fragment:ww,logdepthbuf_pars_vertex:Ew,logdepthbuf_vertex:Tw,map_fragment:Aw,map_pars_fragment:Rw,map_particle_fragment:Cw,map_particle_pars_fragment:Pw,metalnessmap_fragment:Iw,metalnessmap_pars_fragment:Lw,morphinstance_vertex:Dw,morphcolor_vertex:Nw,morphnormal_vertex:Ow,morphtarget_pars_vertex:Fw,morphtarget_vertex:Uw,normal_fragment_begin:Bw,normal_fragment_maps:kw,normal_pars_fragment:zw,normal_pars_vertex:Hw,normal_vertex:Vw,normalmap_pars_fragment:Gw,clearcoat_normal_fragment_begin:Ww,clearcoat_normal_fragment_maps:Xw,clearcoat_pars_fragment:qw,iridescence_pars_fragment:$w,opaque_fragment:Yw,packing:Zw,premultiplied_alpha_fragment:Kw,project_vertex:jw,dithering_fragment:Jw,dithering_pars_fragment:Qw,roughnessmap_fragment:eE,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:aE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:uE,specularmap_pars_fragment:hE,tonemapping_fragment:fE,tonemapping_pars_fragment:dE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:xE,uv_vertex:yE,worldpos_vertex:_E,background_vert:vE,background_frag:bE,backgroundCube_vert:ME,backgroundCube_frag:SE,cube_vert:wE,cube_frag:EE,depth_vert:TE,depth_frag:AE,distance_vert:RE,distance_frag:CE,equirect_vert:PE,equirect_frag:IE,linedashed_vert:LE,linedashed_frag:DE,meshbasic_vert:NE,meshbasic_frag:OE,meshlambert_vert:FE,meshlambert_frag:UE,meshmatcap_vert:BE,meshmatcap_frag:kE,meshnormal_vert:zE,meshnormal_frag:HE,meshphong_vert:VE,meshphong_frag:GE,meshphysical_vert:WE,meshphysical_frag:XE,meshtoon_vert:qE,meshtoon_frag:$E,points_vert:YE,points_frag:ZE,shadow_vert:KE,shadow_frag:jE,sprite_vert:JE,sprite_frag:QE},$e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},$n={basic:{uniforms:Nn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Nn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Nn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Nn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Nn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Je(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Nn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Nn([$e.points,$e.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Nn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Nn([$e.common,$e.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Nn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Nn([$e.sprite,$e.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Nn([$e.common,$e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Nn([$e.lights,$e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};$n.physical={uniforms:Nn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Wu={r:0,b:0,g:0},e1=new ot,ux=new ut;ux.set(-1,0,0,0,1,0,0,0,1);function t1(n,e,t,i,r,s){let o=new Je(0),a=r===!0?0:1,c,l,u=null,h=0,f=null;function d(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){let M=_.backgroundBlurriness>0;T=e.get(T,M)}return T}function x(_){let T=!1,M=d(_);M===null?g(o,a):M&&M.isColor&&(g(M,1),T=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,T){let M=d(T);M&&M.isCubeTexture?(l===void 0&&(l=new dt(new Zi(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Ds($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(e1.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ux),l.material.toneMapped=yt.getTransfer(M.colorSpace)!==Dt,(u!==M||h!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new dt(new Qn(2,2),new _n({name:"BackgroundMaterial",uniforms:Ds($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=yt.getTransfer(M.colorSpace)!==Dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,T){_.getRGB(Wu,_d(n)),t.buffers.color.setClear(Wu.r,Wu.g,Wu.b,T,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,T=1){o.set(_),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:x,addToRenderList:y,dispose:m}}function n1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(W,te,ee,B,$){let k=!1,J=h(W,B,ee,te);s!==J&&(s=J,l(s.object)),k=d(W,B,ee,$),k&&x(W,B,ee,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,M(W,te,ee,B),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(W){return n.bindVertexArray(W)}function u(W){return n.deleteVertexArray(W)}function h(W,te,ee,B){let $=B.wireframe===!0,k=i[te.id];k===void 0&&(k={},i[te.id]=k);let J=W.isInstancedMesh===!0?W.id:0,ge=k[J];ge===void 0&&(ge={},k[J]=ge);let ie=ge[ee.id];ie===void 0&&(ie={},ge[ee.id]=ie);let j=ie[$];return j===void 0&&(j=f(c()),ie[$]=j),j}function f(W){let te=[],ee=[],B=[];for(let $=0;$<t;$++)te[$]=0,ee[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:ee,attributeDivisors:B,object:W,attributes:{},index:null}}function d(W,te,ee,B){let $=s.attributes,k=te.attributes,J=0,ge=ee.getAttributes();for(let ie in ge)if(ge[ie].location>=0){let ue=$[ie],Ae=k[ie];if(Ae===void 0&&(ie==="instanceMatrix"&&W.instanceMatrix&&(Ae=W.instanceMatrix),ie==="instanceColor"&&W.instanceColor&&(Ae=W.instanceColor)),ue===void 0||ue.attribute!==Ae||Ae&&ue.data!==Ae.data)return!0;J++}return s.attributesNum!==J||s.index!==B}function x(W,te,ee,B){let $={},k=te.attributes,J=0,ge=ee.getAttributes();for(let ie in ge)if(ge[ie].location>=0){let ue=k[ie];ue===void 0&&(ie==="instanceMatrix"&&W.instanceMatrix&&(ue=W.instanceMatrix),ie==="instanceColor"&&W.instanceColor&&(ue=W.instanceColor));let Ae={};Ae.attribute=ue,ue&&ue.data&&(Ae.data=ue.data),$[ie]=Ae,J++}s.attributes=$,s.attributesNum=J,s.index=B}function y(){let W=s.newAttributes;for(let te=0,ee=W.length;te<ee;te++)W[te]=0}function g(W){m(W,0)}function m(W,te){let ee=s.newAttributes,B=s.enabledAttributes,$=s.attributeDivisors;ee[W]=1,B[W]===0&&(n.enableVertexAttribArray(W),B[W]=1),$[W]!==te&&(n.vertexAttribDivisor(W,te),$[W]=te)}function _(){let W=s.newAttributes,te=s.enabledAttributes;for(let ee=0,B=te.length;ee<B;ee++)te[ee]!==W[ee]&&(n.disableVertexAttribArray(ee),te[ee]=0)}function T(W,te,ee,B,$,k,J){J===!0?n.vertexAttribIPointer(W,te,ee,$,k):n.vertexAttribPointer(W,te,ee,B,$,k)}function M(W,te,ee,B){y();let $=B.attributes,k=ee.getAttributes(),J=te.defaultAttributeValues;for(let ge in k){let ie=k[ge];if(ie.location>=0){let j=$[ge];if(j===void 0&&(ge==="instanceMatrix"&&W.instanceMatrix&&(j=W.instanceMatrix),ge==="instanceColor"&&W.instanceColor&&(j=W.instanceColor)),j!==void 0){let ue=j.normalized,Ae=j.itemSize,De=e.get(j);if(De===void 0)continue;let re=De.buffer,Me=De.type,fe=De.bytesPerElement,Q=Me===n.INT||Me===n.UNSIGNED_INT||j.gpuType===ou;if(j.isInterleavedBufferAttribute){let le=j.data,Ce=le.isInterleavedBuffer===!0?le.stride:le.itemSize,Oe=j.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let Le=0;Le<ie.locationSize;Le++)m(ie.location+Le,le.meshPerAttribute);W.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<ie.locationSize;Le++)g(ie.location+Le);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Le=0;Le<ie.locationSize;Le++)T(ie.location+Le,Ae/ie.locationSize,Me,ue,Ce*fe,(Oe+Ae/ie.locationSize*Le)*fe,Q)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<ie.locationSize;le++)m(ie.location+le,j.meshPerAttribute);W.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<ie.locationSize;le++)g(ie.location+le);n.bindBuffer(n.ARRAY_BUFFER,re);for(let le=0;le<ie.locationSize;le++)T(ie.location+le,Ae/ie.locationSize,Me,ue,Ae*fe,Ae/ie.locationSize*le*fe,Q)}}else if(J!==void 0){let ue=J[ge];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(ie.location,ue);break;case 3:n.vertexAttrib3fv(ie.location,ue);break;case 4:n.vertexAttrib4fv(ie.location,ue);break;default:n.vertexAttrib1fv(ie.location,ue)}}}}_()}function E(){O();for(let W in i){let te=i[W];for(let ee in te){let B=te[ee];for(let $ in B){let k=B[$];for(let J in k)u(k[J].object),delete k[J];delete B[$]}}delete i[W]}}function C(W){if(i[W.id]===void 0)return;let te=i[W.id];for(let ee in te){let B=te[ee];for(let $ in B){let k=B[$];for(let J in k)u(k[J].object),delete k[J];delete B[$]}}delete i[W.id]}function v(W){for(let te in i){let ee=i[te];for(let B in ee){let $=ee[B];if($[W.id]===void 0)continue;let k=$[W.id];for(let J in k)u(k[J].object),delete k[J];delete $[W.id]}}}function R(W){for(let te in i){let ee=i[te],B=W.isInstancedMesh===!0?W.id:0,$=ee[B];if($!==void 0){for(let k in $){let J=$[k];for(let ge in J)u(J[ge].object),delete J[ge];delete $[k]}delete ee[B],Object.keys(ee).length===0&&delete i[te]}}}function O(){U(),o=!0,s!==r&&(s=r,l(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfObject:R,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function i1(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function r1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==Sn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let R=v===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Dn&&v!==qn&&!R&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(st("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&st("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:M,maxSamples:E,samples:C}}function s1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new xn,a=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let x=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!r||x===null||x.length===0||s&&!g)s?u(null):l();else{let _=s?0:i,T=_*4,M=m.clippingState||null;c.value=M,M=u(x,f,T,d);for(let E=0;E!==T;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,x){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=c.value,x!==!0||g===null){let m=d+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,M=d;T!==y;++T,M+=4)o.copy(h[T]).applyMatrix4(_,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var pl=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ua(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zi(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:_i});s.uniforms.tEquirect.value=t;let o=new dt(r,s),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Zt),new Uo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},V0=256,o1=3,a1=20,hx=256,fx=16,l1=3,c1=new D,u1=new Je,Xo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Uo(1,10,null),this._boxMesh=new dt(new Zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=c1}=s,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,x=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(u1));let g=new Uo(i,r,u);return g.position.copy(a),g.update(c,e),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=x,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(V0,gd(e))}_fromTexture(e,t){e.mapping===Ps||e.mapping===zo?this._setSize(e.image.length===0?V0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=G0(e,!1,!1),i=Math.log2(e)-o1;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=G0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ps||e.mapping===zo?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=W0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=h1(),this._integrationMaterial=f1());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/fx);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-l1)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(hx*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=d1());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function G0(n,e,t){return new pl(n,{minFilter:bi,generateMipmaps:e,type:ti,colorSpace:Wn,depthBuffer:t})}function ml(n,e,t){return new _n({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:Mn,blending:_i,depthTest:!1,depthWrite:!1})}function h1(){return ml("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hx}u

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
	`)}function f1(){return ml("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fx}},`

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
	`)}function d1(){return ml("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${a1}
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
	`)}function W0(){return ml("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function X0(){return ml("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function p1(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===iu||d===ru)if(e.has(f)){let x=e.get(f).texture;return a(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let y=new pl(x.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,x=d===iu||d===ru,y=d===Ps||d===zo;if(x||y){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Xo(n)),g=x?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return x&&_&&_.height>0||y&&_&&c(_)?(i===null&&(i=new Xo(n)),g=x?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===iu?f.mapping=Ps:d===ru&&(f.mapping=zo),f}function c(f){let d=0,x=6;for(let y=0;y<x;y++)f[y]!==void 0&&d++;return d===x}function l(f){let d=f.target;d.removeEventListener("dispose",l);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function m1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&bs("WebGLRenderer: "+i+" extension not supported."),r}}}function g1(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(x=>delete r[x]);function a(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(let g in x.attributes)e.remove(x.attributes[g]);x.removeEventListener("dispose",a),delete r[x.id],o.unregister(x);let y=s.get(x);y&&(e.remove(y),s.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(x,y){return r[y.id]!==void 0||(y.addEventListener("dispose",a),r[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function u(x){let y=x.attributes;for(let g in y)e.update(y[g],n.ARRAY_BUFFER)}function h(x){let y=x.index,g=x.attributes.position,m=0;if(g===void 0)return;let _=y!==null?y.array.length:g.array.length/3-1,T=g.count>=65535?Pa:Ca,M=new T(Math.ceil(_/3)*6,1),E=M.array;if(y!==null){let v=y.array;m=y.version;for(let R=0,O=0;R<_;R+=3){let U=v[R+0],W=v[R+1],te=v[R+2];E[O++]=U,E[O++]=W,E[O++]=W,E[O++]=te,E[O++]=te,E[O++]=U}}else{m=g.version;for(let v=0,R=0;v<_;v+=3){let O=v+0,U=v+1,W=v+2;E[R++]=O,E[R++]=U,E[R++]=U,E[R++]=W,E[R++]=W,E[R++]=O}}M.version=m;let C=s.get(x);C&&e.remove(C),s.set(x,M)}function f(x){let y=s.get(x);if(y){let g=x.index;g!==null&&y.version<g.version&&h(x)}else h(x);return s.get(x)}function d(){for(let x in r){let y=r[x].deref();y!==void 0&&c(y)}}return{get:l,update:u,getWireframeAttribute:f,dispose:d}}function x1(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,s,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let y=0;for(let g=0;g<d;g++)y+=f[g];t.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function y1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _1(n,e,t){let i=new WeakMap,r=new wt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let O=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],T=0;d===!0&&(T=1),x===!0&&(T=2),y===!0&&(T=3);let M=a.attributes.position.count*T,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let C=new Float32Array(M*E*4*h),v=new Ra(C,M,E,h);v.type=qn,v.needsUpdate=!0;let R=T*4;for(let U=0;U<h;U++){let W=g[U],te=m[U],ee=_[U],B=M*E*4*U;for(let $=0;$<W.count;$++){let k=$*R;d===!0&&(r.fromBufferAttribute(W,$),C[B+k+0]=r.x,C[B+k+1]=r.y,C[B+k+2]=r.z,C[B+k+3]=0),x===!0&&(r.fromBufferAttribute(te,$),C[B+k+4]=r.x,C[B+k+5]=r.y,C[B+k+6]=r.z,C[B+k+7]=0),y===!0&&(r.fromBufferAttribute(ee,$),C[B+k+8]=r.x,C[B+k+9]=r.y,C[B+k+10]=r.z,C[B+k+11]=ee.itemSize===4?r.w:1)}}f={count:h,texture:v,size:new je(M,E)},i.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function v1(n,e,t,i,r){let s=new WeakMap;function o(l){let u=r.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var b1={[Kf]:"LINEAR_TONE_MAPPING",[jf]:"REINHARD_TONE_MAPPING",[Jf]:"CINEON_TONE_MAPPING",[Cs]:"ACES_FILMIC_TONE_MAPPING",[ed]:"AGX_TONE_MAPPING",[td]:"NEUTRAL_TONE_MAPPING",[Qf]:"CUSTOM_TONE_MAPPING"};function M1(n,e,t,i,r,s){let o=new an(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,u=new Bt;u.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let h=new Wc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new dt(u,h),d=new Di(-1,1,1,-1,0,1),x=null,y=null,g=!1,m,_=null,T=[],M=!1;this.setSize=function(E,C){o.setSize(E,C),a!==null&&a.setSize(E,C),c!==null&&c.setSize(E,C);for(let v=0;v<T.length;v++){let R=T[v];R.setSize&&R.setSize(E,C)}},this.setEffects=function(E){T=E,M=T.length>0&&T[0].isRenderPass===!0;let C=o.width,v=o.height;T.length>0&&a===null&&(a=new an(C,v,{type:ti,depthBuffer:!1,stencilBuffer:!1}),c=new an(C,v,{type:ti,depthBuffer:!1,stencilBuffer:!1}));let R=r===!0&&T.some(O=>O.needsDepthTexture===!0);R!==(o.depthTexture!==null)&&(R===!0&&l===null&&(l=new Cr(C,v),s===!0&&(l.format=Or,l.type=Ls)),o.dispose(),o.depthTexture=R?l:null,o.resolveDepthBuffer=R,o.storeMultisampledDepthBuffer=R);for(let O=0;O<T.length;O++){let U=T[O];U.setSize&&U.setSize(C,v),R&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(l)}},this.begin=function(E,C){if(g||E.toneMapping===vi&&T.length===0)return!1;if(_=C,C!==null){let v=C.width,R=C.height;(o.width!==v||o.height!==R)&&this.setSize(v,R)}return M===!1&&E.setRenderTarget(o),m=E.toneMapping,E.toneMapping=vi,!0},this.hasRenderPass=function(){return M},this.end=function(E,C){E.toneMapping=m,g=!0;let v=o,R=a;for(let O=0;O<T.length;O++){let U=T[O];U.enabled!==!1&&(U.render(E,R,v,C),U.needsSwap!==!1&&(v=R,R=R===a?c:a))}if(x!==E.outputColorSpace||y!==E.toneMapping){x=E.outputColorSpace,y=E.toneMapping,h.defines={},yt.getTransfer(x)===Dt&&(h.defines.SRGB_TRANSFER="");let O=b1[y];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(_),E.render(f,d),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var dx=new hn,px=new Cr(1,1),mx=new Ba(1),gx=new Ra,xx=new zc,yx=new Ua,q0=[],$0=[],Y0=new Float32Array(16),Z0=new Float32Array(9),K0=new Float32Array(4);function qo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=q0[r];if(s===void 0&&(s=new Float32Array(r),q0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $u(n,e){let t=$0[e];t===void 0&&(t=new Int32Array(e),$0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function S1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function T1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function A1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;K0.set(i),n.uniformMatrix2fv(this.addr,!1,K0),pn(t,i)}}function R1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;Z0.set(i),n.uniformMatrix3fv(this.addr,!1,Z0),pn(t,i)}}function C1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;Y0.set(i),n.uniformMatrix4fv(this.addr,!1,Y0),pn(t,i)}}function P1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function I1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function D1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function N1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function O1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function U1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function Yu(n){return n.version===0&&(n.compareFunction=fd,n.needsUpdate=!0),n}function B1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Yu(px):s=dx,t.setTexture2D(e||s,r)}function k1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xx,r)}function z1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Yu(mx):s=yx,t.setTextureCube(e||s,r)}function H1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gx,r)}function V1(n){switch(n){case 5126:return S1;case 35664:return w1;case 35665:return E1;case 35666:return T1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return P1;case 35667:case 35671:return I1;case 35668:case 35672:return L1;case 35669:case 35673:return D1;case 5125:return N1;case 36294:return O1;case 36295:return F1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return H1}}function G1(n,e){n.uniform1fv(this.addr,e)}function W1(n,e){let t=qo(e,this.size,2);n.uniform2fv(this.addr,t)}function X1(n,e){let t=qo(e,this.size,3);n.uniform3fv(this.addr,t)}function q1(n,e){let t=qo(e,this.size,4);n.uniform4fv(this.addr,t)}function $1(n,e){let t=qo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Y1(n,e){let t=qo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Z1(n,e){let t=qo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K1(n,e){n.uniform1iv(this.addr,e)}function j1(n,e){n.uniform2iv(this.addr,e)}function J1(n,e){n.uniform3iv(this.addr,e)}function Q1(n,e){n.uniform4iv(this.addr,e)}function eT(n,e){n.uniform1uiv(this.addr,e)}function tT(n,e){n.uniform2uiv(this.addr,e)}function nT(n,e){n.uniform3uiv(this.addr,e)}function iT(n,e){n.uniform4uiv(this.addr,e)}function rT(n,e,t){let i=this.cache,r=e.length,s=$u(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Yu(px):o=dx;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function sT(n,e,t){let i=this.cache,r=e.length,s=$u(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xx,s[o])}function oT(n,e,t){let i=this.cache,r=e.length,s=$u(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Yu(mx):o=yx;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function aT(n,e,t){let i=this.cache,r=e.length,s=$u(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gx,s[o])}function lT(n){switch(n){case 5126:return G1;case 35664:return W1;case 35665:return X1;case 35666:return q1;case 35674:return $1;case 35675:return Y1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return j1;case 35668:case 35672:return J1;case 35669:case 35673:return Q1;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}var Ed=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V1(t.type)}},Td=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lT(t.type)}},Ad=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Sd=/(\w+)(\])?(\[|\.)?/g;function j0(n,e){n.seq.push(e),n.map[e.id]=e}function cT(n,e,t){let i=n.name,r=i.length;for(Sd.lastIndex=0;;){let s=Sd.exec(i),o=Sd.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){j0(t,l===void 0?new Ed(a,n,e):new Td(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Ad(a),j0(t,h)),t=h}}}var Wo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);cT(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function J0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var uT=37297,hT=0;function fT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Q0=new ut;function dT(n){yt._getMatrix(Q0,yt.workingColorSpace,n);let e=`mat3( ${Q0.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case Ta:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ex(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+fT(n.getShaderSource(e),a)}else return s}function pT(n,e){let t=dT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var mT={[Kf]:"Linear",[jf]:"Reinhard",[Jf]:"Cineon",[Cs]:"ACESFilmic",[ed]:"AgX",[td]:"Neutral",[Qf]:"Custom"};function gT(n,e){let t=mT[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xu=new D;function xT(){yt.getLuminanceCoefficients(Xu);let n=Xu.x.toFixed(4),e=Xu.y.toFixed(4),t=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function _T(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dl(n){return n!==""}function tx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function nx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(n){return n.replace(bT,MT)}function MT(n,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Rd(t)}var ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ix(n){return n.replace(ST,wT)}function wT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rx(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var ET={[Rs]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function TT(n){return ET[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var AT={[zo]:"ENVMAP_MODE_REFRACTION"};function RT(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":AT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var CT={[nu]:"ENVMAP_BLENDING_MULTIPLY",[M0]:"ENVMAP_BLENDING_MIX",[S0]:"ENVMAP_BLENDING_ADD"};function PT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":CT[n.combine]||"ENVMAP_BLENDING_NONE"}function IT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=TT(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=RT(t),h=PT(t),f=yT(t),d=_T(s),x=r.createProgram(),y,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(dl).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(dl).join(`
`),g.length>0&&(g+=`
`)):(y=[rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),g=[rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?gt.tonemapping_pars_fragment:"",t.toneMapping!==vi?gT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,pT("linearToOutputTexel",t.outputColorSpace),xT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dl).join(`
`)),o=Rd(o),o=tx(o,t),o=nx(o,t),a=Rd(a),a=tx(a,t),a=nx(a,t),o=ix(o),a=ix(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=m+y+o,T=m+g+a,M=J0(r,r.VERTEX_SHADER,_),E=J0(r,r.FRAGMENT_SHADER,T);r.attachShader(x,M),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(U){if(n.debug.checkShaderErrors){let W=r.getProgramInfoLog(x)||"",te=r.getShaderInfoLog(M)||"",ee=r.getShaderInfoLog(E)||"",B=W.trim(),$=te.trim(),k=ee.trim(),J=!0,ge=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,M,E);else{let ie=ex(r,M,"vertex"),j=ex(r,E,"fragment");ct("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+ie+`
`+j)}else B!==""?st("WebGLProgram: Program Info Log:",B):($===""||k==="")&&(ge=!1);ge&&(U.diagnostics={runnable:J,programLog:B,vertexShader:{log:$,prefix:y},fragmentShader:{log:k,prefix:g}})}r.deleteShader(M),r.deleteShader(E),v=new Wo(r,x),R=vT(r,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(x,uT)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}var LT=0,Cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Pd(e),t.set(e,i)),i}},Pd=class{constructor(e){this.id=LT++,this.code=e,this.usedTimes=0}};function DT(n){return n===os||n===al||n===ll}function NT(n,e,t,i,r,s){let o=new Co,a=new Cd,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,R,O,U,W,te){let ee=U.fog,B=W.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||$,k),ge=f[v.type],ie=i.precision;v.precision!==null&&(ie=i.getMaxPrecision(v.precision),ie!==v.precision&&st("WebGLProgram.getParameters:",v.precision,"not supported, using",ie,"instead."));let j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=j!==void 0?j.length:0,Ae=0;B.morphAttributes.position!==void 0&&(Ae=1),B.morphAttributes.normal!==void 0&&(Ae=2),B.morphAttributes.color!==void 0&&(Ae=3);let De,re,Me,fe;if(ge){let Ne=$n[ge];De=Ne.vertexShader,re=Ne.fragmentShader}else{De=v.vertexShader,re=v.fragmentShader;let Ne=a.getVertexShaderStage(v),mt=a.getFragmentShaderStage(v);a.update(v,Ne,mt),Me=Ne.id,fe=mt.id}let Q=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),Ce=W.isInstancedMesh===!0,Oe=W.isBatchedMesh===!0,Le=!!v.map,ze=!!v.matcap,ve=!!J,Te=ve&&J.isPMREMTexture===!0,He=!!v.aoMap,Be=!!v.lightMap,We=!!v.bumpMap&&v.wireframe===!1,Ge=!!v.normalMap,rt=!!v.displacementMap,pe=!!v.emissiveMap,ke=!!v.metalnessMap,Ze=!!v.roughnessMap,Ee=v.anisotropy>0,P=v.clearcoat>0,de=v.diffuseRoughness>0,me=v.dispersion>0,Re=v.retroreflectivity>0,ae=v.iridescence>0,p=v.sheen>0,N=v.transmission>0,Z=Ee&&!!v.anisotropyMap,A=P&&!!v.clearcoatMap,w=P&&!!v.clearcoatNormalMap,S=P&&!!v.clearcoatRoughnessMap,H=de&&!!v.diffuseRoughnessMap,z=ae&&!!v.iridescenceMap,Y=ae&&!!v.iridescenceThicknessMap,K=p&&!!v.sheenColorMap,q=p&&!!v.sheenRoughnessMap,V=!!v.specularMap,he=!!v.specularColorMap,F=!!v.specularIntensityMap,oe=N&&!!v.transmissionMap,se=N&&!!v.thicknessMap,we=!!v.gradientMap,Se=!!v.alphaMap,Fe=v.alphaTest>0,Ve=!!v.alphaHash,it=!!v.extensions,ce=vi;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ce=n.toneMapping);let Ue=Te?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,at={shaderID:ge,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:re,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:ie,batching:Oe,batchingColor:Oe&&W._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&W.instanceColor!==null,instancingMorph:Ce&&W.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Le,matcap:ze,envMap:ve,envMapMode:ve&&J.mapping,envMapPMREM:Te,envMapMaxLod:Te?Ue.length-1:null,envMapSize:Te?Ue[0].width:null,aoMap:He,lightMap:Be,bumpMap:We,normalMap:Ge,displacementMap:rt,emissiveMap:pe,normalMapObjectSpace:Ge&&v.normalMapType===A0,normalMapTangentSpace:Ge&&v.normalMapType===ul,packedNormalMap:Ge&&v.normalMapType===ul&&DT(v.normalMap.format),metalnessMap:ke,roughnessMap:Ze,anisotropy:Ee,anisotropyMap:Z,clearcoat:P,clearcoatMap:A,clearcoatNormalMap:w,clearcoatRoughnessMap:S,diffuseRoughness:de,diffuseRoughnessMap:H,dispersion:me,retroreflection:Re,iridescence:ae,iridescenceMap:z,iridescenceThicknessMap:Y,sheen:p,sheenColorMap:K,sheenRoughnessMap:q,specularMap:V,specularColorMap:he,specularIntensityMap:F,transmission:N,transmissionMap:oe,thicknessMap:se,gradientMap:we,opaque:v.transparent===!1&&v.blending===Qi&&v.alphaToCoverage===!1,alphaMap:Se,alphaTest:Fe,alphaHash:Ve,combine:v.combine,mapUv:Le&&d(v.map.channel),aoMapUv:He&&d(v.aoMap.channel),lightMapUv:Be&&d(v.lightMap.channel),bumpMapUv:We&&d(v.bumpMap.channel),normalMapUv:Ge&&d(v.normalMap.channel),displacementMapUv:rt&&d(v.displacementMap.channel),emissiveMapUv:pe&&d(v.emissiveMap.channel),metalnessMapUv:ke&&d(v.metalnessMap.channel),roughnessMapUv:Ze&&d(v.roughnessMap.channel),anisotropyMapUv:Z&&d(v.anisotropyMap.channel),clearcoatMapUv:A&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:w&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:S&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:H&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:z&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:K&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(v.sheenRoughnessMap.channel),specularMapUv:V&&d(v.specularMap.channel),specularColorMapUv:he&&d(v.specularColorMap.channel),specularIntensityMapUv:F&&d(v.specularIntensityMap.channel),transmissionMapUv:oe&&d(v.transmissionMap.channel),thicknessMapUv:se&&d(v.thicknessMap.channel),alphaMapUv:Se&&d(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ge||Ee),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!B.attributes.uv&&(Le||Se),fog:!!ee,useFog:v.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&Ge===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ae,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:te.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:Le&&v.map.isVideoTexture===!0&&yt.getTransfer(v.map.colorSpace)===Dt,decodeVideoTextureEmissive:pe&&v.emissiveMap.isVideoTexture===!0&&yt.getTransfer(v.emissiveMap.colorSpace)===Dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nt,flipSided:v.side===Mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function y(v){let R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)R.push(O),R.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(g(R,v),m(R,v),R.push(n.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function g(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapPMREM),v.push(R.envMapMaxLod),v.push(R.envMapSize),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.diffuseRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.numSunLights),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numSunLightShadows),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.numLightProbeGrids),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function m(v,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.diffuseRoughness&&o.enable(25),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let R=f[v.type],O;if(R){let U=$n[R];O=hl.clone(U.uniforms)}else O=v.uniforms;return O}function T(v,R){let O=u.get(R);return O!==void 0?++O.usedTimes:(O=new IT(n,R,v,r),l.push(O),u.set(R,O)),O}function M(v){if(--v.usedTimes===0){let R=l.indexOf(v);l[R]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:_,acquireProgram:T,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:C}}function OT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function FT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function sx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ox(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,x,y,g,m){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:x,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:m},n[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=x,_.materialVariant=o(f),_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=g,_.group=m),e++,_}function c(f,d,x,y,g,m,_){_.reversedDepth===!0&&(g=-g);let T=a(f,d,x,y,g,m);x.transmission>0?i.push(T):x.transparent===!0?r.push(T):t.push(T)}function l(f,d,x,y,g,m){let _=a(f,d,x,y,g,m);x.transmission>0?i.unshift(_):x.transparent===!0?r.unshift(_):t.unshift(_)}function u(f,d){t.length>1&&t.sort(f||FT),i.length>1&&i.sort(d||sx),r.length>1&&r.sort(d||sx)}function h(){for(let f=e,d=n.length;f<d;f++){let x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function UT(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new ox,n.set(i,[o])):r>=s.length?(o=new ox,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function BT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Je};break;case"SpotLight":t={position:new D,direction:new D,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function kT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var zT=0;function HT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VT(n){let e=new BT,t=kT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);let r=new D,s=new ot,o=new ot;function a(l){let u=0,h=0,f=0;for(let te=0;te<9;te++)i.probe[te].set(0,0,0);let d=0,x=0,y=0,g=0,m=0,_=0,T=0,M=0,E=0,C=0,v=0,R=0,O=0,U=0;l.sort(HT);for(let te=0,ee=l.length;te<ee;te++){let B=l[te],$=B.color,k=B.intensity,J=B.distance,ge=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===os?ge=B.shadow.map.texture:ge=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=$.r*k,h+=$.g*k,f+=$.b*k;else if(B.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(B.sh.coefficients[ie],k);U++}else if(B.isSunLight){let ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let j=B.shadow,ue=t.get(B);ue.shadowIntensity=j.intensity,ue.shadowBias=j.bias,ue.shadowNormalBias=j.normalBias,ue.shadowRadius=j.radius,ue.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[x]=ue,i.sunShadowMap[x]=ge;let Ae=j.getViewportCount();for(let De=0;De<Ae;De++)i.sunShadowMatrix[y+De]=j.getMatrix(De),i.sunShadowCascade[y+De]=j._cascadeData[De];y+=Ae,x++}i.sun[d]=ie,d++}else if(B.isDirectionalLight){let ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let j=B.shadow,ue=t.get(B);ue.shadowIntensity=j.intensity,ue.shadowBias=j.bias,ue.shadowNormalBias=j.normalBias,ue.shadowRadius=j.radius,ue.shadowMapSize=j.mapSize,i.directionalShadow[g]=ue,i.directionalShadowMap[g]=ge,i.directionalShadowMatrix[g]=B.shadow.matrix,E++}i.directional[g]=ie,g++}else if(B.isSpotLight){let ie=e.get(B);ie.position.setFromMatrixPosition(B.matrixWorld),ie.color.copy($).multiplyScalar(k),ie.distance=J,ie.coneCos=Math.cos(B.angle),ie.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ie.decay=B.decay,i.spot[_]=ie;let j=B.shadow;if(B.map&&(i.spotLightMap[R]=B.map,R++,j.updateMatrices(B),B.castShadow&&O++),i.spotLightMatrix[_]=j.matrix,B.castShadow){let ue=t.get(B);ue.shadowIntensity=j.intensity,ue.shadowBias=j.bias,ue.shadowNormalBias=j.normalBias,ue.shadowRadius=j.radius,ue.shadowMapSize=j.mapSize,i.spotShadow[_]=ue,i.spotShadowMap[_]=ge,v++}_++}else if(B.isRectAreaLight){let ie=e.get(B);ie.color.copy($).multiplyScalar(k),ie.halfWidth.set(B.width*.5,0,0),ie.halfHeight.set(0,B.height*.5,0),i.rectArea[T]=ie,T++}else if(B.isPointLight){let ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),ie.distance=B.distance,ie.decay=B.decay,B.castShadow){let j=B.shadow,ue=t.get(B);ue.shadowIntensity=j.intensity,ue.shadowBias=j.bias,ue.shadowNormalBias=j.normalBias,ue.shadowRadius=j.radius,ue.shadowMapSize=j.mapSize,ue.shadowCameraNear=j.camera.near,ue.shadowCameraFar=j.camera.far,i.pointShadow[m]=ue,i.pointShadowMap[m]=ge,i.pointShadowMatrix[m]=B.shadow.matrix,C++}i.point[m]=ie,m++}else if(B.isHemisphereLight){let ie=e.get(B);ie.skyColor.copy(B.color).multiplyScalar(k),ie.groundColor.copy(B.groundColor).multiplyScalar(k),i.hemi[M]=ie,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$e.LTC_FLOAT_1,i.rectAreaLTC2=$e.LTC_FLOAT_2):(i.rectAreaLTC1=$e.LTC_HALF_1,i.rectAreaLTC2=$e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let W=i.hash;(W.sunLength!==d||W.directionalLength!==g||W.pointLength!==m||W.spotLength!==_||W.rectAreaLength!==T||W.hemiLength!==M||W.numSunShadows!==x||W.numDirectionalShadows!==E||W.numPointShadows!==C||W.numSpotShadows!==v||W.numSpotMaps!==R||W.numLightProbes!==U)&&(i.sun.length=d,i.directional.length=g,i.spot.length=_,i.rectArea.length=T,i.point.length=m,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+R-O,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=U,W.sunLength=d,W.directionalLength=g,W.pointLength=m,W.spotLength=_,W.rectAreaLength=T,W.hemiLength=M,W.numSunShadows=x,W.numDirectionalShadows=E,W.numPointShadows=C,W.numSpotShadows=v,W.numSpotMaps=R,W.numLightProbes=U,i.version=zT++)}function c(l,u){let h=0,f=0,d=0,x=0,y=0,g=0,m=u.matrixWorldInverse;for(let _=0,T=l.length;_<T;_++){let M=l[_];if(M.isSunLight){let E=i.sun[h];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),h++}else if(M.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isSpotLight){let E=i.spot[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),x++}else if(M.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:i}}function ax(n){let e=new VT(n),t=[],i=[],r=[];function s(h){u.camera=h,t.length=0,i.length=0,r.length=0}function o(h){h.isLightProbeGrid?r.push(h):t.push(h)}function a(h){i.push(h)}function c(){e.setup(t),r.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function l(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function GT(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new ax(n),e.set(r,[a])):s>=o.length?(a=new ax(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var WT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XT=`uniform sampler2D shadow_pass;
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
}`,qT=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],$T=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],lx=new ot,fl=new D,wd=new D;function YT(n,e,t){let i=new Jr,r=new je,s=new je,o=new wt,a=new Xc,c=new qc,l={},u=t.maxTextureSize,h={[ui]:Mn,[Mn]:ui,[Nt]:Nt},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:WT,fragmentShader:XT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Bt;x.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new dt(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let m=this.type;this.render=function(C,v,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===a0&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);let O=n.getRenderTarget(),U=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),te=n.state;te.setBlending(_i),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);let ee=m!==this.type;ee&&v.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach($=>$.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,$=C.length;B<$;B++){let k=C[B],J=k.shadow;if(J===void 0){st("WebGLShadowMap:",k,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let ge=J.getFrameExtents();r.multiply(ge),s.copy(J.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,J.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,J.mapSize.y=s.y));let ie=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=ie,J.map===null||ee===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Bo){if(k.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new an(r.x,r.y,{format:os,type:ti,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),J.map.texture.name=k.name+".shadowMap",J.map.depthTexture=new Cr(r.x,r.y,qn),J.map.depthTexture.name=k.name+".shadowMapDepth",J.map.depthTexture.format=Er,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Yt,J.map.depthTexture.magFilter=Yt}else k.isPointLight?(J.map=new pl(r.x),J.map.depthTexture=new Ba(r.x,Oi)):(J.map=new an(r.x,r.y),J.map.depthTexture=new Cr(r.x,r.y,Oi)),J.map.depthTexture.name=k.name+".shadowMap",J.map.depthTexture.format=Er,this.type===Rs?(J.map.depthTexture.compareFunction=ie?hd:ud,J.map.depthTexture.minFilter=Zt,J.map.depthTexture.magFilter=Zt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Yt,J.map.depthTexture.magFilter=Yt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==r.x||J.map.height!==r.y)&&J.map.setSize(r.x,r.y);let j=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();k.isPointLight!==!0&&J.updateMatrices(k,R);let ue=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:R.layers;for(let Ae=0;Ae<j;Ae++){let De=J.getCamera(Ae);if(k.isPointLight){let re=J.camera,Me=J.matrix,fe=k.distance||re.far;fe!==re.far&&(re.far=fe,re.updateProjectionMatrix()),fl.setFromMatrixPosition(k.matrixWorld),re.position.copy(fl),wd.copy(re.position),wd.add(qT[Ae]),re.up.copy($T[Ae]),re.lookAt(wd),re.updateMatrixWorld(),Me.makeTranslation(-fl.x,-fl.y,-fl.z),lx.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),J._frustum.setFromProjectionMatrix(lx,re.coordinateSystem,re.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,Ae),n.clear();else{Ae===0&&(n.setRenderTarget(J.map),n.clear());let re=J.getViewport(Ae);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),te.viewport(o)}i=J.getFrustum(Ae),M(v,R,De,k,ue,this.type)}J.isPointLightShadow!==!0&&this.type===Bo&&_(J,R),J.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(O,U,W)};function _(C,v){let R=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null?C.mapPass=new an(r.x,r.y,{format:os,type:ti}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(v,null,R,f,y,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(v,null,R,d,y,null)}function T(C,v,R,O){let U=null,W=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0)U=W;else if(U=R.isPointLight===!0?c:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let te=U.uuid,ee=v.uuid,B=l[te];B===void 0&&(B={},l[te]=B);let $=B[ee];$===void 0&&($=U.clone(),B[ee]=$,v.addEventListener("dispose",E)),U=$}if(U.visible=v.visible,U.wireframe=v.wireframe,O===Bo?U.side=v.shadowSide!==null?v.shadowSide:v.side:U.side=v.shadowSide!==null?v.shadowSide:h[v.side],U.alphaMap=v.alphaMap,U.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,U.map=v.map,U.clipShadows=v.clipShadows,U.clippingPlanes=v.clippingPlanes,U.clipIntersection=v.clipIntersection,U.displacementMap=v.displacementMap,U.displacementScale=v.displacementScale,U.displacementBias=v.displacementBias,U.wireframeLinewidth=v.wireframeLinewidth,U.linewidth=v.linewidth,R.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let te=n.properties.get(U);te.light=R}return U}function M(C,v,R,O,U,W){if(C.visible===!1)return;if(C.layers.test(U)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&W===Bo)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);let B=e.update(C),$=C.material;if(Array.isArray($)){let k=B.groups;for(let J=0,ge=k.length;J<ge;J++){let ie=k[J],j=$[ie.materialIndex];if(j&&j.visible){let ue=T(C,j,O,W);C.onBeforeShadow(n,C,v,R,B,ue,ie),n.renderBufferDirect(R,null,B,ue,C,ie),C.onAfterShadow(n,C,v,R,B,ue,ie)}}}else if($.visible){let k=T(C,$,O,W);C.onBeforeShadow(n,C,v,R,B,k,null),n.renderBufferDirect(R,null,B,k,C,null),C.onAfterShadow(n,C,v,R,B,k,null)}}let ee=C.children;for(let B=0,$=ee.length;B<$;B++)M(ee[B],v,R,O,U,W)}function E(C){C.target.removeEventListener("dispose",E);for(let R in l){let O=l[R],U=C.target.uuid;U in O&&(O[U].dispose(),delete O[U])}}}function ZT(n,e){function t(){let F=!1,oe=new wt,se=null,we=new wt(0,0,0,0);return{setMask:function(Se){se!==Se&&!F&&(n.colorMask(Se,Se,Se,Se),se=Se)},setLocked:function(Se){F=Se},setClear:function(Se,Fe,Ve,it,ce){ce===!0&&(Se*=it,Fe*=it,Ve*=it),oe.set(Se,Fe,Ve,it),we.equals(oe)===!1&&(n.clearColor(Se,Fe,Ve,it),we.copy(oe))},reset:function(){F=!1,se=null,we.set(-1,0,0,0)}}}function i(){let F=!1,oe=!1,se=null,we=null,Se=null;return{setReversed:function(Fe){if(oe!==Fe){let Ve=e.get("EXT_clip_control");Fe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),oe=Fe;let it=Se;Se=null,this.setClear(it)}},getReversed:function(){return oe},setTest:function(Fe){Fe?le(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Fe){se!==Fe&&!F&&(n.depthMask(Fe),se=Fe)},setFunc:function(Fe){if(oe&&(Fe=U0[Fe]),we!==Fe){switch(Fe){case Ic:n.depthFunc(n.NEVER);break;case Lc:n.depthFunc(n.ALWAYS);break;case Dc:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case Nc:n.depthFunc(n.EQUAL);break;case Oc:n.depthFunc(n.GEQUAL);break;case Fc:n.depthFunc(n.GREATER);break;case Uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=Fe}},setLocked:function(Fe){F=Fe},setClear:function(Fe){Se!==Fe&&(Se=Fe,oe&&(Fe=1-Fe),n.clearDepth(Fe))},reset:function(){F=!1,se=null,we=null,Se=null,oe=!1}}}function r(){let F=!1,oe=null,se=null,we=null,Se=null,Fe=null,Ve=null,it=null,ce=null;return{setTest:function(Ue){F||(Ue?le(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Ue){oe!==Ue&&!F&&(n.stencilMask(Ue),oe=Ue)},setFunc:function(Ue,at,Ne){(se!==Ue||we!==at||Se!==Ne)&&(n.stencilFunc(Ue,at,Ne),se=Ue,we=at,Se=Ne)},setOp:function(Ue,at,Ne){(Fe!==Ue||Ve!==at||it!==Ne)&&(n.stencilOp(Ue,at,Ne),Fe=Ue,Ve=at,it=Ne)},setLocked:function(Ue){F=Ue},setClear:function(Ue){ce!==Ue&&(n.clearStencil(Ue),ce=Ue)},reset:function(){F=!1,oe=null,se=null,we=null,Se=null,Fe=null,Ve=null,it=null,ce=null}}}let s=new t,o=new i,a=new r,c={},l=new WeakMap,u={},h={},f={},d=new WeakMap,x=[],y=null,g=!1,m=null,_=null,T=null,M=null,E=null,C=null,v=null,R=new Je(0,0,0),O=0,U=!1,W=null,te=null,ee=null,B=null,$=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ge=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=ge>=1):ie.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=ge>=2);let j=null,ue={},Ae=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),re=new wt().fromArray(Ae),Me=new wt().fromArray(De);function fe(F,oe,se,we){let Se=new Uint8Array(4),Fe=n.createTexture();n.bindTexture(F,Fe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<se;Ve++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(oe+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Fe}let Q={};Q[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(So),We(!1),Ge(qf),le(n.CULL_FACE),He(_i);function le(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ce(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Oe(F,oe){return f[F]!==oe?(n.bindFramebuffer(F,oe),f[F]=oe,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=oe),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Le(F,oe){let se=x,we=!1;if(F){se=d.get(oe),se===void 0&&(se=[],d.set(oe,se));let Se=F.textures;if(se.length!==Se.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Fe=0,Ve=Se.length;Fe<Ve;Fe++)se[Fe]=n.COLOR_ATTACHMENT0+Fe;se.length=Se.length,we=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,we=!0);we&&n.drawBuffers(se)}function ze(F){return y!==F?(n.useProgram(F),y=F,!0):!1}let ve={[Ni]:n.FUNC_ADD,[l0]:n.FUNC_SUBTRACT,[c0]:n.FUNC_REVERSE_SUBTRACT};ve[u0]=n.MIN,ve[h0]=n.MAX;let Te={[el]:n.ZERO,[ss]:n.ONE,[f0]:n.SRC_COLOR,[tl]:n.SRC_ALPHA,[x0]:n.SRC_ALPHA_SATURATE,[m0]:n.DST_COLOR,[p0]:n.DST_ALPHA,[d0]:n.ONE_MINUS_SRC_COLOR,[ko]:n.ONE_MINUS_SRC_ALPHA,[g0]:n.ONE_MINUS_DST_COLOR,[nl]:n.ONE_MINUS_DST_ALPHA,[y0]:n.CONSTANT_COLOR,[_0]:n.ONE_MINUS_CONSTANT_COLOR,[v0]:n.CONSTANT_ALPHA,[b0]:n.ONE_MINUS_CONSTANT_ALPHA};function He(F,oe,se,we,Se,Fe,Ve,it,ce,Ue){if(F===_i){g===!0&&(Ce(n.BLEND),g=!1);return}if(g===!1&&(le(n.BLEND),g=!0),F!==tu){if(F!==m||Ue!==U){if((_!==Ni||E!==Ni)&&(n.blendEquation(n.FUNC_ADD),_=Ni,E=Ni),Ue)switch(F){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $f:n.blendFunc(n.ONE,n.ONE);break;case Yf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",F);break}else switch(F){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $f:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yf:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zf:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",F);break}T=null,M=null,C=null,v=null,R.set(0,0,0),O=0,m=F,U=Ue}return}Se=Se||oe,Fe=Fe||se,Ve=Ve||we,(oe!==_||Se!==E)&&(n.blendEquationSeparate(ve[oe],ve[Se]),_=oe,E=Se),(se!==T||we!==M||Fe!==C||Ve!==v)&&(n.blendFuncSeparate(Te[se],Te[we],Te[Fe],Te[Ve]),T=se,M=we,C=Fe,v=Ve),(it.equals(R)===!1||ce!==O)&&(n.blendColor(it.r,it.g,it.b,ce),R.copy(it),O=ce),m=F,U=!1}function Be(F,oe){F.side===Nt?Ce(n.CULL_FACE):le(n.CULL_FACE);let se=F.side===Mn;oe&&(se=!se),We(se),F.blending===Qi&&F.transparent===!1?He(_i):He(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let we=F.stencilWrite;a.setTest(we),we&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),pe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(F){W!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),W=F)}function Ge(F){F!==s0?(le(n.CULL_FACE),F!==te&&(F===qf?n.cullFace(n.BACK):F===o0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),te=F}function rt(F){F!==ee&&(J&&n.lineWidth(F),ee=F)}function pe(F,oe,se){F?(le(n.POLYGON_OFFSET_FILL),(B!==oe||$!==se)&&(B=oe,$=se,o.getReversed()&&(oe=-oe,se=-se),n.polygonOffset(oe,se))):Ce(n.POLYGON_OFFSET_FILL)}function ke(F){F?le(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Ze(F){F===void 0&&(F=n.TEXTURE0+k-1),j!==F&&(n.activeTexture(F),j=F)}function Ee(F,oe,se){se===void 0&&(j===null?se=n.TEXTURE0+k-1:se=j);let we=ue[se];we===void 0&&(we={type:void 0,texture:void 0},ue[se]=we),(we.type!==F||we.texture!==oe)&&(j!==se&&(n.activeTexture(se),j=se),n.bindTexture(F,oe||Q[F]),we.type=F,we.texture=oe)}function P(){let F=ue[j];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function de(){try{n.compressedTexImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function me(){try{n.compressedTexImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function Re(){try{n.texSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function ae(){try{n.texSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function p(){try{n.compressedTexSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function N(){try{n.compressedTexSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function Z(){try{n.texStorage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function A(){try{n.texStorage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function w(){try{n.texImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function S(){try{n.texImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function H(F){return h[F]!==void 0?h[F]:n.getParameter(F)}function z(F,oe){h[F]!==oe&&(n.pixelStorei(F,oe),h[F]=oe)}function Y(F){re.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),re.copy(F))}function K(F){Me.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Me.copy(F))}function q(F,oe){let se=l.get(oe);se===void 0&&(se=new WeakMap,l.set(oe,se));let we=se.get(F);we===void 0&&(we=n.getUniformBlockIndex(oe,F.name),n.uniformBlockBinding(oe,we,we),se.set(F,we))}function V(F,oe,se){let Se=l.get(oe).get(F);c[Se]!==se&&(n.bindBufferBase(n.UNIFORM_BUFFER,Se,se),c[Se]=se)}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},j=null,ue={},f={},c={},d=new WeakMap,x=[],y=null,g=!1,m=null,_=null,T=null,M=null,E=null,C=null,v=null,R=new Je(0,0,0),O=0,U=!1,W=null,te=null,ee=null,B=null,$=null,re.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Ce,bindFramebuffer:Oe,drawBuffers:Le,useProgram:ze,setBlending:He,setMaterial:Be,setFlipSided:We,setCullFace:Ge,setLineWidth:rt,setPolygonOffset:pe,setScissorTest:ke,activeTexture:Ze,bindTexture:Ee,unbindTexture:P,compressedTexImage2D:de,compressedTexImage3D:me,texImage2D:w,texImage3D:S,pixelStorei:z,getParameter:H,updateUBOMapping:q,uniformBlockBinding:V,texStorage2D:Z,texStorage3D:A,texSubImage2D:Re,texSubImage3D:ae,compressedTexSubImage2D:p,compressedTexSubImage3D:N,scissor:Y,viewport:K,reset:he}}function KT(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,u=new WeakMap,h=new Set,f,d=new WeakMap,x=new Set,y=new FinalizationRegistry(A=>x.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,w){return g?new OffscreenCanvas(A,w):To("canvas")}function _(A,w,S){let H=1,z=Z(A);if((z.width>S||z.height>S)&&(H=S/Math.max(z.width,z.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Y=Math.floor(H*z.width),K=Math.floor(H*z.height);f===void 0&&(f=m(Y,K));let q=w?m(Y,K):f;return q.width=Y,q.height=K,q.getContext("2d").drawImage(A,0,0,Y,K),st("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+Y+"x"+K+")."),q}else return"data"in A&&st("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),A;return A}function T(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(A,w,S,H,z,Y=!1){if(A!==null){if(n[A]!==void 0)return n[A];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K;H&&(K=e.get("EXT_texture_norm16"),K||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=w;if(w===n.RED&&(S===n.FLOAT&&(q=n.R32F),S===n.HALF_FLOAT&&(q=n.R16F),S===n.UNSIGNED_BYTE&&(q=n.R8),S===n.UNSIGNED_SHORT&&K&&(q=K.R16_EXT),S===n.SHORT&&K&&(q=K.R16_SNORM_EXT)),w===n.RED_INTEGER&&(S===n.UNSIGNED_BYTE&&(q=n.R8UI),S===n.UNSIGNED_SHORT&&(q=n.R16UI),S===n.UNSIGNED_INT&&(q=n.R32UI),S===n.BYTE&&(q=n.R8I),S===n.SHORT&&(q=n.R16I),S===n.INT&&(q=n.R32I)),w===n.RG&&(S===n.FLOAT&&(q=n.RG32F),S===n.HALF_FLOAT&&(q=n.RG16F),S===n.UNSIGNED_BYTE&&(q=n.RG8),S===n.UNSIGNED_SHORT&&K&&(q=K.RG16_EXT),S===n.SHORT&&K&&(q=K.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(S===n.UNSIGNED_BYTE&&(q=n.RG8UI),S===n.UNSIGNED_SHORT&&(q=n.RG16UI),S===n.UNSIGNED_INT&&(q=n.RG32UI),S===n.BYTE&&(q=n.RG8I),S===n.SHORT&&(q=n.RG16I),S===n.INT&&(q=n.RG32I)),w===n.RGB_INTEGER&&(S===n.UNSIGNED_BYTE&&(q=n.RGB8UI),S===n.UNSIGNED_SHORT&&(q=n.RGB16UI),S===n.UNSIGNED_INT&&(q=n.RGB32UI),S===n.BYTE&&(q=n.RGB8I),S===n.SHORT&&(q=n.RGB16I),S===n.INT&&(q=n.RGB32I)),w===n.RGBA_INTEGER&&(S===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),S===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),S===n.UNSIGNED_INT&&(q=n.RGBA32UI),S===n.BYTE&&(q=n.RGBA8I),S===n.SHORT&&(q=n.RGBA16I),S===n.INT&&(q=n.RGBA32I)),w===n.RGB&&(S===n.UNSIGNED_SHORT&&K&&(q=K.RGB16_EXT),S===n.SHORT&&K&&(q=K.RGB16_SNORM_EXT),S===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),S===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),w===n.RGBA){let V=Y?Ta:yt.getTransfer(z);S===n.FLOAT&&(q=n.RGBA32F),S===n.HALF_FLOAT&&(q=n.RGBA16F),S===n.UNSIGNED_BYTE&&(q=V===Dt?n.SRGB8_ALPHA8:n.RGBA8),S===n.UNSIGNED_SHORT&&K&&(q=K.RGBA16_EXT),S===n.SHORT&&K&&(q=K.RGBA16_SNORM_EXT),S===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),S===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(A,w){let S;return A?w===null||w===Oi||w===Ls?S=n.DEPTH24_STENCIL8:w===qn?S=n.DEPTH32F_STENCIL8:w===Vo&&(S=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Oi||w===Ls?S=n.DEPTH_COMPONENT24:w===qn?S=n.DEPTH_COMPONENT32F:w===Vo&&(S=n.DEPTH_COMPONENT16),S}function R(A,w){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==Zt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function O(A){let w=new WeakRef(A);i.get(A).__ref=w,x.add(w),y.register(A,w,w)}function U(A){let w=i.get(A).__ref;w!==void 0&&(x.delete(w),y.unregister(w))}function W(A){ee(A.target)}function te(A){B(A.target)}function ee(A){A.removeEventListener("dispose",W),U(A),k(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function B(A){A.removeEventListener("dispose",te),U(A),ge(A)}function $(){for(let A of x){let w=A.deref();w!==void 0&&(w.isRenderTarget===!0?B(w):ee(w))}x.clear(),h.clear()}function k(A){let w=i.get(A);if(w.__webglInit===void 0)return;let S=A.source,H=d.get(S);if(H){let z=H[w.__cacheKey];z.usedTimes--,z.usedTimes===0&&J(A),Object.keys(H).length===0&&d.delete(S)}i.remove(A)}function J(A){let w=i.get(A);n.deleteTexture(w.__webglTexture);let S=A.source,H=d.get(S);delete H[w.__cacheKey],o.memory.textures--}function ge(A){let w=i.get(A);w.__depthDisposeCallback&&w.__depthDisposeCallback();let S=A.depthTexture;if(S&&S.renderTarget===A&&ee(S),A.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(w.__webglFramebuffer[z]))for(let Y=0;Y<w.__webglFramebuffer[z].length;Y++)n.deleteFramebuffer(w.__webglFramebuffer[z][Y]);else n.deleteFramebuffer(w.__webglFramebuffer[z]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[z])}else{if(Array.isArray(w.__webglFramebuffer))for(let z=0;z<w.__webglFramebuffer.length;z++)n.deleteFramebuffer(w.__webglFramebuffer[z]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let z=0;z<w.__webglColorRenderbuffer.length;z++)w.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[z]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=A.textures;for(let z=0,Y=H.length;z<Y;z++){let K=i.get(H[z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(H[z])}i.remove(A)}let ie=0;function j(){ie=0}function ue(){return ie}function Ae(A){ie=A}function De(){let A=ie;return A>=r.maxTextures&&st("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),ie+=1,A}function re(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.mipmapsAutoUpdate),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function Me(A,w){let S=i.get(A);if(A.isVideoTexture&&p(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&S.__version!==A.version){let H=A.image;if(H===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(S,A,w);return}}else A.isExternalTexture&&(S.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,S.__webglTexture,n.TEXTURE0+w)}function fe(A,w){let S=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&S.__version!==A.version){Be(S,A,w);return}else A.isExternalTexture&&(S.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,S.__webglTexture,n.TEXTURE0+w)}function Q(A,w){let S=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&S.__version!==A.version){Be(S,A,w);return}t.bindTexture(n.TEXTURE_3D,S.__webglTexture,n.TEXTURE0+w)}function le(A,w){let S=i.get(A);if(A.version>0&&S.__version!==A.version){We(S,A,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+w)}let Ce={[Jn]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[wo]:n.MIRRORED_REPEAT},Oe={[Yt]:n.NEAREST,[su]:n.NEAREST_MIPMAP_NEAREST,[Is]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Ho]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},Le={[C0]:n.NEVER,[fd]:n.ALWAYS,[P0]:n.LESS,[ud]:n.LEQUAL,[I0]:n.EQUAL,[hd]:n.GEQUAL,[L0]:n.GREATER,[D0]:n.NOTEQUAL};function ze(A,w){if(w.type===qn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zt||w.magFilter===Ho||w.magFilter===Is||w.magFilter===bi||w.minFilter===Zt||w.minFilter===Ho||w.minFilter===Is||w.minFilter===bi)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Ce[w.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Ce[w.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Ce[w.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Oe[w.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Oe[w.minFilter]),w.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==Is&&w.minFilter!==bi||w.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let S=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ve(A,w){let S=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",W),O(w));let H=w.source,z=d.get(H);z===void 0&&(z={},d.set(H,z));let Y=re(w);if(Y!==A.__cacheKey){z[Y]===void 0&&(z[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,S=!0),z[Y].usedTimes++;let K=z[A.__cacheKey];K!==void 0&&(z[A.__cacheKey].usedTimes--,K.usedTimes===0&&J(w)),A.__cacheKey=Y,A.__webglTexture=z[Y].texture}return S}function Te(A,w,S){return Math.floor(Math.floor(A/S)/w)}function He(A,w,S,H){let Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,S,H,w.data);else{Y.sort((F,oe)=>F.start-oe.start);let K=0;for(let F=1;F<Y.length;F++){let oe=Y[K],se=Y[F],we=oe.start+oe.count,Se=Te(se.start,w.width,4),Fe=Te(oe.start,w.width,4);se.start<=we+1&&Se===Fe&&Te(se.start+se.count-1,w.width,4)===Se?oe.count=Math.max(oe.count,se.start+se.count-oe.start):(++K,Y[K]=se)}Y.length=K+1;let q=t.getParameter(n.UNPACK_ROW_LENGTH),V=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let F=0,oe=Y.length;F<oe;F++){let se=Y[F],we=Math.floor(se.start/4),Se=Math.ceil(se.count/4),Fe=we%w.width,Ve=Math.floor(we/w.width),it=Se,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(n.TEXTURE_2D,0,Fe,Ve,it,ce,S,H,w.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,V),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function Be(A,w,S){let H=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(H=n.TEXTURE_3D);let z=ve(A,w),Y=w.source;t.bindTexture(H,A.__webglTexture,n.TEXTURE0+S);let K=i.get(Y);if(Y.version!==K.__version||z===!0){if(t.activeTexture(n.TEXTURE0+S),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ce=yt.getPrimaries(yt.workingColorSpace),Ue=w.colorSpace===hi?null:yt.getPrimaries(w.colorSpace),at=w.colorSpace===hi||ce===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let V=_(w.image,!1,r.maxTextureSize);V=N(w,V);let he=s.convert(w.format,w.colorSpace),F=s.convert(w.type),oe=C(w.internalFormat,he,F,w.normalized,w.colorSpace,w.isVideoTexture);ze(H,w);let se,we=w.mipmaps,Se=w.isVideoTexture!==!0,Fe=K.__version===void 0||z===!0,Ve=Y.dataReady,it=R(w,V);if(w.isDepthTexture)oe=v(w.format===Or,w.type),Fe&&(Se?t.texStorage2D(n.TEXTURE_2D,1,oe,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,oe,V.width,V.height,0,he,F,null));else if(w.isDataTexture)if(we.length>0){Se&&Fe&&t.texStorage2D(n.TEXTURE_2D,it,oe,we[0].width,we[0].height);for(let ce=0,Ue=we.length;ce<Ue;ce++)se=we[ce],Se?Ve&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,se.width,se.height,he,F,se.data):t.texImage2D(n.TEXTURE_2D,ce,oe,se.width,se.height,0,he,F,se.data);w.generateMipmaps=!1}else Se?(Fe&&t.texStorage2D(n.TEXTURE_2D,it,oe,V.width,V.height),Ve&&He(w,V,he,F)):t.texImage2D(n.TEXTURE_2D,0,oe,V.width,V.height,0,he,F,V.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Se&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,oe,we[0].width,we[0].height,V.depth);for(let ce=0,Ue=we.length;ce<Ue;ce++)if(se=we[ce],w.format!==Sn)if(he!==null)if(Se){if(Ve)if(w.layerUpdates.size>0){let at=Md(se.width,se.height,w.format,w.type);for(let Ne of w.layerUpdates){let mt=se.data.subarray(Ne*at/se.data.BYTES_PER_ELEMENT,(Ne+1)*at/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Ne,se.width,se.height,1,he,mt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,se.width,se.height,V.depth,he,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,oe,se.width,se.height,V.depth,0,se.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?Ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,se.width,se.height,V.depth,he,F,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,oe,se.width,se.height,V.depth,0,he,F,se.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Se&&Fe&&t.texStorage2D(n.TEXTURE_2D,it,oe,we[0].width,we[0].height);for(let ce=0,Ue=we.length;ce<Ue;ce++)se=we[ce],w.format!==Sn?he!==null?Se?Ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,se.width,se.height,he,se.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,oe,se.width,se.height,0,se.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?Ve&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,se.width,se.height,he,F,se.data):t.texImage2D(n.TEXTURE_2D,ce,oe,se.width,se.height,0,he,F,se.data)}else if(w.isDataArrayTexture)if(Se){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,oe,V.width,V.height,V.depth),Ve)if(w.layerUpdates.size>0){let ce=Md(V.width,V.height,w.format,w.type);for(let Ue of w.layerUpdates){let at=V.data.subarray(Ue*ce/V.data.BYTES_PER_ELEMENT,(Ue+1)*ce/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ue,V.width,V.height,1,he,F,at)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,he,F,V.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,V.width,V.height,V.depth,0,he,F,V.data);else if(w.isData3DTexture)Se?(Fe&&t.texStorage3D(n.TEXTURE_3D,it,oe,V.width,V.height,V.depth),Ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,he,F,V.data)):t.texImage3D(n.TEXTURE_3D,0,oe,V.width,V.height,V.depth,0,he,F,V.data);else if(w.isFramebufferTexture){if(Fe)if(Se)t.texStorage2D(n.TEXTURE_2D,it,oe,V.width,V.height);else{let ce=V.width,Ue=V.height;for(let at=0;at<it;at++)t.texImage2D(n.TEXTURE_2D,at,oe,ce,Ue,0,he,F,null),ce>>=1,Ue>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),V.parentNode!==ce){ce.appendChild(V),h.add(w),ce.onpaint=Ue=>{let at=Ue.changedElements;for(let Ne of h)at.includes(Ne.image)&&(Ne.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,V);else{let at=n.RGBA,Ne=n.RGBA,mt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,at,Ne,mt,V)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(we.length>0){if(Se&&Fe){let ce=Z(we[0]);t.texStorage2D(n.TEXTURE_2D,it,oe,ce.width,ce.height)}for(let ce=0,Ue=we.length;ce<Ue;ce++)se=we[ce],Se?Ve&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,he,F,se):t.texImage2D(n.TEXTURE_2D,ce,oe,he,F,se);w.generateMipmaps=!1}else if(Se){if(Fe){let ce=Z(V);t.texStorage2D(n.TEXTURE_2D,it,oe,ce.width,ce.height)}Ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,F,V)}else t.texImage2D(n.TEXTURE_2D,0,oe,he,F,V);T(w)&&w.mipmapsAutoUpdate===!0&&M(H),K.__version=Y.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function We(A,w,S){if(w.image.length!==6)return;let H=ve(A,w),z=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+S);let Y=i.get(z);if(z.version!==Y.__version||H===!0){t.activeTexture(n.TEXTURE0+S);let K=yt.getPrimaries(yt.workingColorSpace),q=w.colorSpace===hi?null:yt.getPrimaries(w.colorSpace),V=w.colorSpace===hi||K===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let he=w.isCompressedTexture||w.image[0].isCompressedTexture,F=w.image[0]&&w.image[0].isDataTexture,oe=[];for(let Ne=0;Ne<6;Ne++)!he&&!F?oe[Ne]=_(w.image[Ne],!0,r.maxCubemapSize):oe[Ne]=F?w.image[Ne].image:w.image[Ne],oe[Ne]=N(w,oe[Ne]);let se=oe[0],we=s.convert(w.format,w.colorSpace),Se=s.convert(w.type),Fe=C(w.internalFormat,we,Se,w.normalized,w.colorSpace),Ve=w.isVideoTexture!==!0,it=Y.__version===void 0||H===!0,ce=z.dataReady,Ue=R(w,se);ze(n.TEXTURE_CUBE_MAP,w);let at;if(w.isDepthTexture){if(Fe=v(w.format===Or,w.type),it)if(Ve)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Fe,se.width,se.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Fe,se.width,se.height,0,we,Se,null)}else if(he){Ve&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Fe,se.width,se.height);for(let Ne=0;Ne<6;Ne++){at=oe[Ne].mipmaps;for(let mt=0;mt<at.length;mt++){let zt=at[mt];w.format!==Sn?we!==null?Ve?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,mt,0,0,zt.width,zt.height,we,zt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,mt,Fe,zt.width,zt.height,0,zt.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,mt,0,0,zt.width,zt.height,we,Se,zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,mt,Fe,zt.width,zt.height,0,we,Se,zt.data)}}}else{if(at=w.mipmaps,Ve&&it){at.length>0&&Ue++;let Ne=Z(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Fe,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(F){Ve?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,oe[Ne].width,oe[Ne].height,we,Se,oe[Ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Fe,oe[Ne].width,oe[Ne].height,0,we,Se,oe[Ne].data);for(let mt=0;mt<at.length;mt++){let Kt=at[mt].image[Ne].image;Ve?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,mt+1,0,0,Kt.width,Kt.height,we,Se,Kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,mt+1,Fe,Kt.width,Kt.height,0,we,Se,Kt.data)}}else{Ve?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,we,Se,oe[Ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Fe,we,Se,oe[Ne]);for(let mt=0;mt<at.length;mt++){let zt=at[mt];Ve?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,mt+1,0,0,we,Se,zt.image[Ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,mt+1,Fe,we,Se,zt.image[Ne])}}}T(w)&&w.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),Y.__version=z.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ge(A,w,S,H,z,Y){let K=s.convert(S.format,S.colorSpace),q=s.convert(S.type),V=C(S.internalFormat,K,q,S.normalized,S.colorSpace),he=i.get(w),F=i.get(S);if(F.__renderTarget=w,!he.__hasExternalTextures){let oe=Math.max(1,w.width>>Y),se=Math.max(1,w.height>>Y);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?t.texImage3D(z,Y,V,oe,se,w.depth,0,K,q,null):t.texImage2D(z,Y,V,oe,se,0,K,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ae(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,z,F.__webglTexture,0,Re(w)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,z,F.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(A,w,S){if(n.bindRenderbuffer(n.RENDERBUFFER,A),w.depthBuffer){let H=w.depthTexture,z=H&&H.isDepthTexture?H.type:null,Y=v(w.stencilBuffer,z),K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ae(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(w),Y,w.width,w.height):S?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(w),Y,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Y,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,A)}else{let H=w.textures;for(let z=0;z<H.length;z++){let Y=H[z],K=s.convert(Y.format,Y.colorSpace),q=s.convert(Y.type),V=C(Y.internalFormat,K,q,Y.normalized,Y.colorSpace);ae(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(w),V,w.width,w.height):S?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(w),V,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,V,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(A,w,S){let H=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let z=i.get(w.depthTexture);z.__renderTarget=w;let Y=H?w.depthTexture.image[0]:w.depthTexture.image;(!z.__webglTexture||Y.width!==w.width||Y.height!==w.height)&&(Y.width=w.width,Y.height=w.height,w.depthTexture.needsUpdate=!0),H?le(w.depthTexture,0):Me(w.depthTexture,0);let K=z.__webglTexture,q=Re(w),V=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+S:n.TEXTURE_2D,he=w.depthTexture.format===Or?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Er)ae(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,V,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,he,V,K,0);else if(w.depthTexture.format===Or)ae(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,V,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,he,V,K,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(A){let w=i.get(A),S=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),H){let z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,H.removeEventListener("dispose",z)};H.addEventListener("dispose",z),w.__depthDisposeCallback=z}w.__boundDepthTexture=H}if(A.depthTexture&&!w.__autoAllocateDepthBuffer)if(S)for(let H=0;H<6;H++)pe(w.__webglFramebuffer[H],A,H);else A.texture.mipmaps.length>0?pe(w.__webglFramebuffer[0],A,0):pe(w.__webglFramebuffer,A,0);else if(S){w.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[H]),w.__webglDepthbuffer[H]===void 0)w.__webglDepthbuffer[H]=n.createRenderbuffer(),rt(w.__webglDepthbuffer[H],A,!1);else{let z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,Y)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),rt(w.__webglDepthbuffer,A,!1);else{let z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(A,w,S){let H=i.get(A);w!==void 0&&Ge(H.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),S!==void 0&&ke(A)}function Ee(A){let w=A.texture,S=i.get(A),H=i.get(w);A.addEventListener("dispose",te),O(A);let z=A.textures,Y=A.isWebGLCubeRenderTarget===!0,K=z.length>1;if(K||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=w.version,o.memory.textures++),Y){S.__webglFramebuffer=[];for(let q=0;q<6;q++)if(w.mipmaps.length>0){S.__webglFramebuffer[q]=[];for(let V=0;V<w.mipmaps.length;V++)S.__webglFramebuffer[q][V]=n.createFramebuffer()}else S.__webglFramebuffer[q]=n.createFramebuffer()}else{if(w.mipmaps.length>0){S.__webglFramebuffer=[];for(let q=0;q<w.mipmaps.length;q++)S.__webglFramebuffer[q]=n.createFramebuffer()}else S.__webglFramebuffer=n.createFramebuffer();if(K)for(let q=0,V=z.length;q<V;q++){let he=i.get(z[q]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ae(A)===!1){S.__webglMultisampledFramebuffer=n.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let q=0;q<z.length;q++){let V=z[q];S.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,S.__webglColorRenderbuffer[q]);let he=s.convert(V.format,V.colorSpace),F=s.convert(V.type),oe=C(V.internalFormat,he,F,V.normalized,V.colorSpace,A.isXRRenderTarget===!0),se=Re(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,oe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,S.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(S.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(S.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),ze(n.TEXTURE_CUBE_MAP,w);for(let q=0;q<6;q++)if(w.mipmaps.length>0)for(let V=0;V<w.mipmaps.length;V++)Ge(S.__webglFramebuffer[q][V],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,V);else Ge(S.__webglFramebuffer[q],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);T(w)?M(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(K){for(let q=0,V=z.length;q<V;q++){let he=z[q],F=i.get(he),oe=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,F.__webglTexture),ze(oe,he),Ge(S.__webglFramebuffer,A,he,n.COLOR_ATTACHMENT0+q,oe,0),T(he)&&M(oe)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,H.__webglTexture),ze(q,w),w.mipmaps.length>0)for(let V=0;V<w.mipmaps.length;V++)Ge(S.__webglFramebuffer[V],A,w,n.COLOR_ATTACHMENT0,q,V);else Ge(S.__webglFramebuffer,A,w,n.COLOR_ATTACHMENT0,q,0);T(w)?M(q):w.mipmaps.length>0&&n.texParameteri(q,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&ke(A)}function P(A){let w=A.textures;for(let S=0,H=w.length;S<H;S++){let z=w[S];if(T(z)&&z.mipmapsAutoUpdate===!0){let Y=E(A),K=i.get(z).__webglTexture;t.bindTexture(Y,K),M(Y),t.unbindTexture()}}}let de=[];function me(A){if(A.samples>0){if(ae(A)===!1){let w=A.textures,S=A.width,H=A.height,z=n.COLOR_BUFFER_BIT,Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=i.get(A),q=w.length>1;if(q)for(let he=0;he<w.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let he=0;he<w.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,K.__webglColorRenderbuffer[he]);let F=i.get(w[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,S,H,0,0,S,H,z,n.NEAREST),c===!0&&(de.length=0,de.push(n.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&de.push(Y),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let he=0;he<w.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,K.__webglColorRenderbuffer[he]);let F=i.get(w[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,F,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let w=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Re(A){return Math.min(r.maxSamples,A.samples)}function ae(A){let w=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function p(A){let w=o.render.frame;u.get(A)!==w&&(u.set(A,w),A.update())}function N(A,w){let S=A.colorSpace,H=A.format,z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||S!==Wn&&S!==hi&&(yt.getTransfer(S)===Dt?(H!==Sn||z!==Dn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",S)),w}function Z(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=De,this.resetTextureUnits=j,this.getTextureUnits=ue,this.setTextureUnits=Ae,this.setTexture2D=Me,this.setTexture2DArray=fe,this.setTexture3D=Q,this.setTextureCube=le,this.rebindTextures=Ze,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=ae,this.dispose=$}function jT(n,e){function t(i,r=hi){let s,o=yt.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===od)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===id)return n.BYTE;if(i===rd)return n.SHORT;if(i===Vo)return n.UNSIGNED_SHORT;if(i===ou)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===ti)return n.HALF_FLOAT;if(i===ad)return n.ALPHA;if(i===ld)return n.RGB;if(i===Sn)return n.RGBA;if(i===Er)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===cu)return n.RED;if(i===uu)return n.RED_INTEGER;if(i===os)return n.RG;if(i===hu)return n.RG_INTEGER;if(i===fu)return n.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===ol)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===du||i===pu||i===mu||i===gu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===du)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xu||i===yu||i===_u||i===vu||i===bu||i===al||i===Mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xu||i===yu)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_u)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vu)return s.COMPRESSED_R11_EAC;if(i===bu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===al)return s.COMPRESSED_RG11_EAC;if(i===Mu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Su||i===wu||i===Eu||i===Tu||i===Au||i===Ru||i===Cu||i===Pu||i===Iu||i===Lu||i===Du||i===Nu||i===Ou||i===Fu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Su)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Au)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ru)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Iu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Du)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ou)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uu||i===Bu||i===ku)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Uu)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ku)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zu||i===Hu||i===ll||i===Vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var JT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QT=`
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

}`,Id=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _n({vertexShader:JT,fragmentShader:QT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ld=class extends Li{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,x=null,y=typeof XRWebGLBinding<"u",g=new Id,m={},_=t.getContextAttributes(),T=null,M=null,E=[],C=[],v=new je,R=null,O=null,U=new un;U.viewport=new wt;let W=new un;W.viewport=new wt;let te=[U,W],ee=new eu,B=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Me=E[re];return Me===void 0&&(Me=new Po,E[re]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(re){let Me=E[re];return Me===void 0&&(Me=new Po,E[re]=Me),Me.getGripSpace()},this.getHand=function(re){let Me=E[re];return Me===void 0&&(Me=new Po,E[re]=Me),Me.getHandSpace()};function k(re){let Me=C.indexOf(re.inputSource);if(Me===-1)return;let fe=E[Me];fe!==void 0&&(fe.update(re.inputSource,re.frame,l||o),fe.dispatchEvent({type:re.type,data:re.inputSource}))}function J(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ge);for(let re=0;re<E.length;re++){let Me=C[re];Me!==null&&(C[re]=null,E[re].disconnect(Me))}B=null,$=null,g.reset();for(let re in m)delete m[re];if(e.setRenderTarget(T),d=null,f=null,h=null,r=null,M=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(v.width,v.height,!1),O!==null){let re=O.camera;re.fov=O.fov,re.zoom=O.zoom,re.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ge),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Q=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?Or:Er,Q=_.stencil?Ls:Oi);let Ce={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new an(f.textureWidth,f.textureHeight,{format:Sn,type:Dn,depthTexture:new Cr(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new an(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ge(re){for(let Me=0;Me<re.removed.length;Me++){let fe=re.removed[Me],Q=C.indexOf(fe);Q>=0&&(C[Q]=null,E[Q].disconnect(fe))}for(let Me=0;Me<re.added.length;Me++){let fe=re.added[Me],Q=C.indexOf(fe);if(Q===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=C.length){C.push(fe),Q=Ce;break}else if(C[Ce]===null){C[Ce]=fe,Q=Ce;break}if(Q===-1)break}let le=E[Q];le&&le.connect(fe)}}function ie(re,Me){Me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let Me=re.near,fe=re.far;g.texture!==null&&(g.depthNear>0&&(Me=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),ee.near=W.near=U.near=Me,ee.far=W.far=U.far=fe,(B!==ee.near||$!==ee.far)&&(r.updateRenderState({depthNear:ee.near,depthFar:ee.far}),B=ee.near,$=ee.far),ee.layers.mask=re.layers.mask|6,U.layers.mask=ee.layers.mask&-5,W.layers.mask=ee.layers.mask&-3;let Q=re.parent,le=ee.cameras;ie(ee,Q);for(let Ce=0;Ce<le.length;Ce++)ie(le[Ce],Q);ee.projectionMatrix.copy(U.projectionMatrix),ee.projectionMatrixInverse.copy(U.projectionMatrixInverse),O===null&&re.isPerspectiveCamera&&(O={camera:re,fov:re.fov,zoom:re.zoom}),j(re,ee,Q)};function j(re,Me,fe){fe===null?re.matrix.copy(Me.matrixWorld):(re.matrix.copy(fe.matrixWorld),re.matrix.invert(),re.matrix.multiply(Me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ws*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(re){c=re,f!==null&&(f.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(ee)},this.getCameraTexture=function(re){return m[re]};let ue=null;function Ae(re,Me){if(u=Me.getViewerPose(l||o),x=Me,u!==null){let fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Q=!1;fe.length!==ee.cameras.length&&(ee.cameras.length=0,Q=!0);for(let Le=0;Le<fe.length;Le++){let ze=fe[Le],ve=null;if(d!==null)ve=d.getViewport(ze);else{let He=h.getViewSubImage(f,ze);ve=He.viewport,Le===0&&(e.setRenderTargetTextures(M,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(M))}let Te=te[Le];Te===void 0&&(Te=new un,Te.layers.enable(Le),Te.viewport=new wt,te[Le]=Te),Te.matrix.fromArray(ze.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ze.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(ve.x,ve.y,ve.width,ve.height),Le===0&&(ee.matrix.copy(Te.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Q===!0&&ee.cameras.push(Te)}let le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let Le=h.getDepthInformation(fe[0]);Le&&Le.isValid&&Le.texture&&g.init(Le,r.renderState)}if(le&&le.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Le=0;Le<fe.length;Le++){let ze=fe[Le].camera;if(ze){let ve=m[ze];ve||(ve=new ka,m[ze]=ve);let Te=h.getCameraImage(ze);ve.sourceTexture=Te}}}}for(let fe=0;fe<E.length;fe++){let Q=C[fe],le=E[fe];Q!==null&&le!==void 0&&le.update(Q,Me,l||o)}ue&&ue(re,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),x=null}let De=new cx;De.setAnimationLoop(Ae),this.setAnimationLoop=function(re){ue=re},this.dispose=function(){}}},eA=new ot,_x=new ut;_x.set(-1,0,0,0,1,0,0,0,1);function tA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,_d(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,_,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),x(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,_,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),T=_.envMap,M=_.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(eA.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(_x),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nA(n,e,t,i){let r={},s={};function o(_,T){let M=T.program;i.uniformBlockBinding(_,M,r[_.id])}function a(_,T){let M=r[_.id];M===void 0&&(x(_),M=c(_),r[_.id]=M,_.addEventListener("dispose",g));let E=T.program;i.updateUBOMapping(_,E);let C=e.render.frame;s[_.id]!==C&&(l(_),s[_.id]=C)}function c(_){let T=n.createBuffer(),M=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function l(_){let T=r[_.id],M=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,v=M.length;C<v;C++){let R=M[C];if(Array.isArray(R))for(let O=0,U=R.length;O<U;O++)u(R[O],C,O,E);else u(R,C,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,T,M,E){if(f(_,T,M,E)===!0){let C=_.__offset,v=_.value;if(Array.isArray(v)){let R=0;for(let O=0;O<v.length;O++){let U=v[O],W=y(U,!0);h(U,_.__data,R),R+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else h(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,_.__data)}}function h(_,T,M){typeof _=="number"||typeof _=="boolean"?T[M]=_:_.isMatrix3?(T[M]=_.elements[0],T[M+1]=_.elements[1],T[M+2]=_.elements[2],T[M+3]=0,T[M+4]=_.elements[3],T[M+5]=_.elements[4],T[M+6]=_.elements[5],T[M+7]=0,T[M+8]=_.elements[6],T[M+9]=_.elements[7],T[M+10]=_.elements[8],T[M+11]=0):ArrayBuffer.isView(_)?T.set(_.subarray(0,T.length-M),M):_.toArray(T,M)}function f(_,T,M,E){let C=_.value,v=T+"_"+M;if(Array.isArray(C)){E[v]===void 0&&(E[v]=[]);let R=E[v],O=!1;for(let U=0;U<C.length;U++)d(C[U],R,U)===!0&&(O=!0);return O}return d(C,E,v)}function d(_,T,M){if(T[M]===void 0)return typeof _=="number"||typeof _=="boolean"?T[M]=_:ArrayBuffer.isView(_)?T[M]=_.slice():T[M]=_.clone(),!0;{let E=T[M];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return T[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function x(_){let T=_.uniforms,M=0,E=16;for(let v=0,R=T.length;v<R;v++){let O=Array.isArray(T[v])?T[v]:[T[v]];for(let U=0,W=O.length;U<W;U++){let te=O[U],ee=Array.isArray(te.value)?te.value:[te.value],B=Array.isArray(T[v])||Array.isArray(te.value),$=M;for(let J=0,ge=ee.length;J<ge;J++){let ie=ee[J],j=y(ie,B),ue=M%E,Ae=ue%j.boundary,De=ue+Ae;M+=Ae,De!==0&&E-De<j.storage&&(M+=E-De),J===0&&($=M),M+=j.storage}let k=te.type==="int"?Int32Array:te.type==="uint"?Uint32Array:Float32Array;te.__data=new k((M-$)/Float32Array.BYTES_PER_ELEMENT),te.__offset=$}}let C=M%E;return C>0&&(M+=E-C),_.__size=M,_.__cache={},this}function y(_,T){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):st("WebGLRenderer: Unsupported uniform value type.",_),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(_){let T=_.target;T.removeEventListener("dispose",g),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(let _ in r)n.deleteBuffer(r[_]);r={},s={}}return{bind:o,update:a,dispose:m}}var iA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nr=null;function rA(){return nr===null&&(nr=new Do(iA,16,16,os,ti),nr.name="DFG_LUT",nr.minFilter=Zt,nr.magFilter=Zt,nr.wrapS=xi,nr.wrapT=xi,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}var qu=class{constructor(e={}){let{canvas:t=N0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Dn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;let y=d,g=new Set([fu,hu,uu]),m=new Set([Dn,Oi,Vo,Ls,au,lu]),_=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,C=null,v=[],R=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,W=!1,te=null,ee=null,B=null,$=null;this._outputColorSpace=At;let k=0,J=0,ge=null,ie=-1,j=null,ue=new wt,Ae=new wt,De=null,re=new Je(0),Me=0,fe=t.width,Q=t.height,le=1,Ce=null,Oe=null,Le=new wt(0,0,fe,Q),ze=new wt(0,0,fe,Q),ve=!1,Te=new Jr,He=new Hc,Be=!1,We=!1,Ge=new ot,rt=new D,pe=new wt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function Ee(){return ge===null?le:1}let P=i;function de(L,ne){return t.getContext(L,ne)}let me,Re,ae,p,N,Z,A,w,S,H,z,Y,K,q,V,he,F,oe,se,we,Se,Fe,Ve;try{let L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),P===null){let ne="webgl2";if(P=de(ne,L),P===null)throw de(ne)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(L){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),ct("WebGLRenderer: "+L.message),L}function it(){me=new m1(P),me.init(),Se=new jT(P,me),Re=new r1(P,me,e,Se),ae=new ZT(P,me),Re.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),ee=P.createFramebuffer(),B=P.createFramebuffer(),$=P.createFramebuffer(),p=new y1(P),N=new OT,Z=new KT(P,me,ae,N,Re,Se,p),A=new p1(U),w=new vS(P),Fe=new n1(P,w),S=new g1(P,w,p,Fe),H=new v1(P,S,w,Fe,p),oe=new _1(P,Re,Z),V=new s1(N),z=new NT(U,A,me,Re,Fe,V),Y=new tA(U,N),K=new UT,q=new GT(me),F=new t1(U,A,ae,H,x,c),he=new YT(U,H,Re),Ve=new nA(P,p,Re,ae),se=new i1(P,me,p),we=new x1(P,me,p),p.programs=z.programs,U.capabilities=Re,U.extensions=me,U.properties=N,U.renderLists=K,U.shadowMap=he,U.state=ae,U.info=p}y!==Dn&&(O=new M1(y,t.width,t.height,a,r,s));let ce=new Ld(U,P);this.xr=ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let L=me.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=me.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(L){L!==void 0&&(le=L,this.setSize(fe,Q,!1))},this.getSize=function(L){return L.set(fe,Q)},this.setSize=function(L,ne,be=!0){if(ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=L,Q=ne,t.width=Math.floor(L*le),t.height=Math.floor(ne*le),be===!0&&(t.style.width=L+"px",t.style.height=ne+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,L,ne)},this.getDrawingBufferSize=function(L){return L.set(fe*le,Q*le).floor()},this.setDrawingBufferSize=function(L,ne,be){fe=L,Q=ne,le=be,t.width=Math.floor(L*be),t.height=Math.floor(ne*be),this.setViewport(0,0,L,ne)},this.setEffects=function(L){if(y===Dn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let ne=0;ne<L.length;ne++)if(L[ne].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(ue)},this.getViewport=function(L){return L.copy(Le)},this.setViewport=function(L,ne,be,xe){L.isVector4?Le.set(L.x,L.y,L.z,L.w):Le.set(L,ne,be,xe),ae.viewport(ue.copy(Le).multiplyScalar(Ee()).round())},this.getScissor=function(L){return L.copy(ze)},this.setScissor=function(L,ne,be,xe){L.isVector4?ze.set(L.x,L.y,L.z,L.w):ze.set(L,ne,be,xe),ae.scissor(Ae.copy(ze).multiplyScalar(Ee()).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(L){ae.setScissorTest(ve=L)},this.setOpaqueSort=function(L){Ce=L},this.setTransparentSort=function(L){Oe=L},this.getClearColor=function(L){return L.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(L=!0,ne=!0,be=!0){let xe=0;if(L){let ye=!1;if(ge!==null){let qe=ge.texture.format;ye=g.has(qe)}if(ye){let qe=ge.texture.type,et=m.has(qe),Xe=F.getClearColor(),Ke=F.getClearAlpha(),nt=Xe.r,ht=Xe.g,xt=Xe.b;et?(_[0]=nt,_[1]=ht,_[2]=xt,_[3]=Ke,P.clearBufferuiv(P.COLOR,0,_)):(T[0]=nt,T[1]=ht,T[2]=xt,T[3]=Ke,P.clearBufferiv(P.COLOR,0,T))}else xe|=P.COLOR_BUFFER_BIT}ne&&(xe|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),be&&(xe|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),xe!==0&&P.clear(xe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),te=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),F.dispose(),K.dispose(),q.dispose(),Z.dispose(),N.dispose(),A.dispose(),H.dispose(),S.dispose(),Fe.dispose(),Ve.dispose(),z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Hr),ce.removeEventListener("sessionend",Ol),Hn.stop()};function Ue(L){L.preventDefault(),Aa("WebGLRenderer: Context Lost."),W=!0}function at(){Aa("WebGLRenderer: Context Restored."),W=!1;let L=p.autoReset,ne=he.enabled,be=he.autoUpdate,xe=he.needsUpdate,ye=he.type;it(),p.autoReset=L,he.enabled=ne,he.autoUpdate=be,he.needsUpdate=xe,he.type=ye}function Ne(L){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function mt(L){let ne=L.target;ne.removeEventListener("dispose",mt),zt(ne)}function zt(L){Kt(L),N.remove(L)}function Kt(L){let ne=N.get(L).programs;ne!==void 0&&(ne.forEach(function(be){z.releaseProgram(be)}),L.isShaderMaterial&&z.releaseShaderCache(L))}this.renderBufferDirect=function(L,ne,be,xe,ye,qe){ne===null&&(ne=ke);let et=ye.isMesh&&ye.matrixWorld.determinantAffine()<0,Xe=Bh(L,ne,be,xe,ye);ae.setMaterial(xe,et);let Ke=be.index,nt=1;if(xe.wireframe===!0){if(Ke=S.getWireframeAttribute(be),Ke===void 0)return;nt=2}let ht=be.drawRange,xt=be.attributes.position,Qe=ht.start*nt,pt=(ht.start+ht.count)*nt;qe!==null&&(Qe=Math.max(Qe,qe.start*nt),pt=Math.min(pt,(qe.start+qe.count)*nt)),Ke!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,Ke.count)):xt!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,xt.count));let $t=pt-Qe;if($t<0||$t===1/0)return;Fe.setup(ye,xe,Xe,be,Ke);let Ht,Rt=se;if(Ke!==null&&(Ht=w.get(Ke),Rt=we,Rt.setIndex(Ht)),ye.isMesh)xe.wireframe===!0?(ae.setLineWidth(xe.wireframeLinewidth*Ee()),Rt.setMode(P.LINES)):Rt.setMode(P.TRIANGLES);else if(ye.isLine){let ln=xe.linewidth;ln===void 0&&(ln=1),ae.setLineWidth(ln*Ee()),ye.isLineSegments?Rt.setMode(P.LINES):ye.isLineLoop?Rt.setMode(P.LINE_LOOP):Rt.setMode(P.LINE_STRIP)}else ye.isPoints?Rt.setMode(P.POINTS):ye.isSprite&&Rt.setMode(P.TRIANGLES);if(ye.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ye._multiDrawStarts,ye._multiDrawCounts,ye._multiDrawCount);else{let ln=ye._multiDrawStarts,tt=ye._multiDrawCounts,vn=ye._multiDrawCount,Et=Ke?w.get(Ke).bytesPerElement:1,dr=N.get(xe).currentProgram.getUniforms();for(let cn=0;cn<vn;cn++)dr.setValue(P,"_gl_DrawID",cn),Rt.render(ln[cn]/Et,tt[cn])}else if(ye.isInstancedMesh)Rt.renderInstances(Qe,$t,ye.count);else if(be.isInstancedBufferGeometry){let ln=be._maxInstanceCount!==void 0?be._maxInstanceCount:1/0,tt=Math.min(be.instanceCount,ln);Rt.renderInstances(Qe,$t,tt)}else Rt.render(Qe,$t)};function Ei(L,ne,be,xe){te!==null&&L.isNodeMaterial&&te.setObject(xe,L),Be===!0&&V.setState(L,be,!1),L.transparent===!0&&L.side===Nt&&L.forceSinglePass===!1?(L.side=Mn,L.needsUpdate=!0,Vr(L,ne,xe),L.side=ui,L.needsUpdate=!0,Vr(L,ne,xe),L.side=Nt):Vr(L,ne,xe)}this.compile=function(L,ne,be=null){be===null&&(be=L),te!==null&&te.renderStart(L,ne,be),C=q.get(be),C.init(ne),R.push(C),be.traverseVisible(function(ye){ye.isLight&&ye.layers.test(ne.layers)&&(C.pushLight(ye),ye.castShadow&&C.pushShadow(ye))}),L!==be&&L.traverseVisible(function(ye){ye.isLight&&ye.layers.test(ne.layers)&&(C.pushLight(ye),ye.castShadow&&C.pushShadow(ye))}),C.setupLights(),te!==null&&te.updateLights(C.state.lightsArray),We=this.localClippingEnabled,Be=V.init(this.clippingPlanes,We),Be===!0&&V.setGlobalState(this.clippingPlanes,ne),te!==null&&he.render(C.state.shadowsArray,be,ne);let xe=new Set;return L.traverse(function(ye){if(!(ye.isMesh||ye.isPoints||ye.isLine||ye.isSprite))return;let qe=ye.material;if(qe)if(Array.isArray(qe))for(let et=0;et<qe.length;et++){let Xe=qe[et];Ei(Xe,be,ne,ye),xe.add(Xe)}else Ei(qe,be,ne,ye),xe.add(qe)}),C=R.pop(),te!==null&&te.renderEnd(),xe},this.compileAsync=function(L,ne,be=null){let xe=this.compile(L,ne,be);return new Promise(ye=>{function qe(){if(xe.forEach(function(et){let Ke=N.get(et).currentProgram;(Ke===void 0||Ke.isReady())&&xe.delete(et)}),xe.size===0){ye(L);return}setTimeout(qe,10)}me.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let zi=null;function zr(L){zi&&zi(L)}function Hr(){Hn.stop()}function Ol(){Hn.start()}let Hn=new cx;Hn.setAnimationLoop(zr),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(L){zi=L,ce.setAnimationLoop(L),L===null?Hn.stop():Hn.start()},ce.addEventListener("sessionstart",Hr),ce.addEventListener("sessionend",Ol),this.render=function(L,ne){if(ne!==void 0&&ne.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;te!==null&&te.renderStart(L,ne);let be=ce.enabled===!0&&ce.isPresenting===!0,xe=O!==null&&(ge===null||be)&&O.begin(U,ge);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(ne),ne=ce.getCamera()),L.isScene===!0&&L.onBeforeRender(U,L,ne,ge),C=q.get(L,R.length),C.init(ne),C.state.textureUnits=Z.getTextureUnits(),R.push(C),Ge.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),ne.isArrayCamera?He.setFromArrayCamera(ne):Te.setFromProjectionMatrix(Ge,yi,ne.reversedDepth),We=this.localClippingEnabled,Be=V.init(this.clippingPlanes,We),E=K.get(L,v.length),E.init(),v.push(E),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let et=U.xr.getDepthSensingMesh();et!==null&&Xs(et,ne,-1/0,U.sortObjects)}Xs(L,ne,0,U.sortObjects),E.finish(),te!==null&&te.updateLights(C.state.lightsArray),U.sortObjects===!0&&E.sort(Ce,Oe),Ze=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ze&&F.addToRenderList(E,L),this.info.autoReset===!0&&this.info.reset(),Be===!0&&V.beginShadows();let ye=C.state.shadowsArray;if(he.render(ye,L,ne),Be===!0&&V.endShadows(),(xe&&O.hasRenderPass())===!1){let et=E.opaque,Xe=E.transmissive;if(C.setupLights(),ne.isArrayCamera){let Ke=ne.cameras;if(Xe.length>0)for(let nt=0,ht=Ke.length;nt<ht;nt++){let xt=Ke[nt];mi(et,Xe,L,xt)}Ze&&F.render(L);for(let nt=0,ht=Ke.length;nt<ht;nt++){let xt=Ke[nt];sa(E,L,xt,xt.viewport)}}else Xe.length>0&&mi(et,Xe,L,ne),Ze&&F.render(L),sa(E,L,ne)}ge!==null&&J===0&&(Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge)),xe&&O.end(U),L.isScene===!0&&L.onAfterRender(U,L,ne),Fe.resetDefaultState(),ie=-1,j=null,R.pop(),R.length>0?(C=R[R.length-1],Z.setTextureUnits(C.state.textureUnits),Be===!0&&V.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,te!==null&&te.renderEnd()};function Xs(L,ne,be,xe){if(L.visible===!1)return;if(L.layers.test(ne.layers)){if(L.isGroup)be=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ne);else if(L.isLight)C.pushLight(L),L.castShadow&&C.pushShadow(L);else if(L.isSprite){let et=ne.isArrayCamera?He:Te;if(!L.frustumCulled||L.intersectsFrustum(et)){xe&&pe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ge);let Xe=H.update(L),Ke=L.material;Ke.visible&&E.push(L,Xe,Ke,be,pe.z,null,ne)}}else if(L.isMesh||L.isLine||L.isPoints){let et=ne.isArrayCamera?He:Te;if(!L.frustumCulled||L.intersectsFrustum(et)){let Xe=H.update(L),Ke=L.material;if(xe&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),pe.copy(L.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),pe.copy(Xe.boundingSphere.center)),pe.applyMatrix4(L.matrixWorld).applyMatrix4(Ge)),Array.isArray(Ke)){let nt=Xe.groups;for(let ht=0,xt=nt.length;ht<xt;ht++){let Qe=nt[ht],pt=Ke[Qe.materialIndex];pt&&pt.visible&&E.push(L,Xe,pt,be,pe.z,Qe,ne)}}else Ke.visible&&E.push(L,Xe,Ke,be,pe.z,null,ne)}}}let qe=L.children;for(let et=0,Xe=qe.length;et<Xe;et++)Xs(qe[et],ne,be,xe)}function sa(L,ne,be,xe){let{opaque:ye,transmissive:qe,transparent:et}=L;C.setupLightsView(be),Be===!0&&V.setGlobalState(U.clippingPlanes,be),xe&&ae.viewport(ue.copy(xe)),ye.length>0&&ri(ye,ne,be),qe.length>0&&ri(qe,ne,be),et.length>0&&ri(et,ne,be),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function mi(L,ne,be,xe){if((be.isScene===!0?be.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[xe.id]===void 0){let Qe=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[xe.id]=new an(1,1,{generateMipmaps:!0,type:Qe?ti:Dn,minFilter:bi,samples:Math.max(4,Re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let qe=C.state.transmissionRenderTarget[xe.id],et=xe.viewport||ue;qe.setSize(et.z*U.transmissionResolutionScale,et.w*U.transmissionResolutionScale);let Xe=U.getRenderTarget(),Ke=U.getActiveCubeFace(),nt=U.getActiveMipmapLevel();U.setRenderTarget(qe),U.getClearColor(re),Me=U.getClearAlpha(),Me<1&&U.setClearColor(16777215,.5),U.clear(),Ze&&F.render(be);let ht=U.toneMapping;U.toneMapping=vi;let xt=xe.viewport;if(xe.viewport!==void 0&&(xe.viewport=void 0),C.setupLightsView(xe),Be===!0&&V.setGlobalState(U.clippingPlanes,xe),ri(L,be,xe),Z.updateMultisampleRenderTarget(qe),Z.updateRenderTargetMipmap(qe),me.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let pt=0,$t=ne.length;pt<$t;pt++){let Ht=ne[pt],{object:Rt,geometry:ln,material:tt,group:vn}=Ht;if(tt.side===Nt&&Rt.layers.test(xe.layers)){let Et=tt.side;tt.side=Mn,tt.needsUpdate=!0,qs(Rt,be,xe,ln,tt,vn),tt.side=Et,tt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Z.updateMultisampleRenderTarget(qe),Z.updateRenderTargetMipmap(qe))}U.setRenderTarget(Xe,Ke,nt),U.setClearColor(re,Me),xt!==void 0&&(xe.viewport=xt),U.toneMapping=ht}function ri(L,ne,be){let xe=ne.isScene===!0?ne.overrideMaterial:null;for(let ye=0,qe=L.length;ye<qe;ye++){let et=L[ye],{object:Xe,geometry:Ke,group:nt}=et,ht=et.material;ht.allowOverride===!0&&xe!==null&&(ht=xe),Xe.layers.test(be.layers)&&qs(Xe,ne,be,Ke,ht,nt)}}function qs(L,ne,be,xe,ye,qe){te!==null&&ye.isNodeMaterial&&te.setObject(L,ye),L.onBeforeRender(U,ne,be,xe,ye,qe),L.modelViewMatrix.multiplyMatrices(be.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ye.onBeforeRender(U,ne,be,xe,L,qe),ye.transparent===!0&&ye.side===Nt&&ye.forceSinglePass===!1?(ye.side=Mn,ye.needsUpdate=!0,U.renderBufferDirect(be,ne,xe,ye,L,qe),ye.side=ui,ye.needsUpdate=!0,U.renderBufferDirect(be,ne,xe,ye,L,qe),ye.side=Nt):U.renderBufferDirect(be,ne,xe,ye,L,qe),L.onAfterRender(U,ne,be,xe,ye,qe)}function Fl(L){let ne=0;for(let be of L)be.texture!==null&&ne++;return ne}function Vr(L,ne,be){ne.isScene!==!0&&(ne=ke);let xe=N.get(L),ye=C.state.lights,qe=C.state.shadowsArray,et=ye.state.version,Xe=z.getParameters(L,ye.state,qe,ne,be,C.state.lightProbeGridArray),Ke=z.getProgramCacheKey(Xe),nt=xe.programs;xe.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?ne.environment:null,xe.fog=ne.fog;let ht=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;xe.envMap=A.get(L.envMap||xe.environment,ht),xe.envMapRotation=xe.environment!==null&&L.envMap===null?ne.environmentRotation:L.envMapRotation,nt===void 0&&(L.addEventListener("dispose",mt),nt=new Map,xe.programs=nt,xe.programVariants=new Map);let xt=nt.get(Ke);if(xt!==void 0){if(xe.currentProgram===xt&&xe.lightsStateVersion===et)return Ul(L,Xe),xt}else Xe.uniforms=z.getUniforms(L),te!==null&&L.isNodeMaterial&&te.build(L,be,Xe),L.onBeforeCompile(Xe,U),xt=z.acquireProgram(Xe,Ke),nt.set(Ke,xt),xe.uniforms=Xe.uniforms;let Qe=xe.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=V.uniform),Ul(L,Xe),xe.needsLights=Ys(L),xe.lightsStateVersion=et,xe.needsLights&&(Qe.ambientLightColor.value=ye.state.ambient,Qe.lightProbe.value=ye.state.probe,Qe.sunLights.value=ye.state.sun,Qe.sunLightShadows.value=ye.state.sunShadow,Qe.directionalLights.value=ye.state.directional,Qe.directionalLightShadows.value=ye.state.directionalShadow,Qe.spotLights.value=ye.state.spot,Qe.spotLightShadows.value=ye.state.spotShadow,Qe.rectAreaLights.value=ye.state.rectArea,Qe.ltc_1.value=ye.state.rectAreaLTC1,Qe.ltc_2.value=ye.state.rectAreaLTC2,Qe.pointLights.value=ye.state.point,Qe.pointLightShadows.value=ye.state.pointShadow,Qe.hemisphereLights.value=ye.state.hemi,Qe.sunShadowMatrix.value=ye.state.sunShadowMatrix,Qe.sunShadowCascade.value=ye.state.sunShadowCascade,Qe.directionalShadowMatrix.value=ye.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ye.state.spotLightMatrix,Qe.spotLightMap.value=ye.state.spotLightMap,Qe.pointShadowMatrix.value=ye.state.pointShadowMatrix),xe.numLightProbeGrids=Fl(C.state.lightProbeGridArray),xe.currentProgram=xt,xe.uniformsList=null,xt}function ps(L,ne,be,xe,ye){let qe=N.get(L),et=qe.currentProgram.id+","+xe+","+ye,Xe=qe.programVariants.get(et);return Xe===void 0?(Xe=Vr(L,ne,be),qe.programVariants.set(et,Xe)):(qe.currentProgram=Xe,qe.uniformsList=null,qe.outputColorSpace=xe,qe.toneMapping=ye),Xe}function $s(L){if(L.uniformsList===null){let ne=L.currentProgram.getUniforms();L.uniformsList=Wo.seqWithValue(ne.seq,L.uniforms)}return L.uniformsList}function Ul(L,ne){let be=N.get(L);be.outputColorSpace=ne.outputColorSpace,be.batching=ne.batching,be.batchingColor=ne.batchingColor,be.instancing=ne.instancing,be.instancingColor=ne.instancingColor,be.instancingMorph=ne.instancingMorph,be.skinning=ne.skinning,be.morphTargets=ne.morphTargets,be.morphNormals=ne.morphNormals,be.morphColors=ne.morphColors,be.morphTargetsCount=ne.morphTargetsCount,be.numClippingPlanes=ne.numClippingPlanes,be.numIntersection=ne.numClipIntersection,be.vertexAlphas=ne.vertexAlphas,be.vertexTangents=ne.vertexTangents,be.toneMapping=ne.toneMapping}function Bh(L,ne,be,xe,ye){ne.isScene!==!0&&(ne=ke),Z.resetTextureUnits();let qe=ne.fog,et=xe.isMeshStandardMaterial||xe.isMeshLambertMaterial||xe.isMeshPhongMaterial?ne.environment:null,Xe=ge===null?U.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:yt.workingColorSpace,Ke=xe.isMeshStandardMaterial||xe.isMeshLambertMaterial&&!xe.envMap||xe.isMeshPhongMaterial&&!xe.envMap,nt=A.get(xe.envMap||et,Ke),ht=xe.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,xt=!!be.attributes.tangent&&(!!xe.normalMap||xe.anisotropy>0),Qe=!!be.morphAttributes.position,pt=!!be.morphAttributes.normal,$t=!!be.morphAttributes.color,Ht=vi;xe.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ht=U.toneMapping);let Rt=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,ln=Rt!==void 0?Rt.length:0,tt=N.get(xe),vn=C.state.lights;if(Be===!0&&(We===!0||L!==j)){let Xt=L===j&&xe.id===ie;V.setState(xe,L,Xt)}let Et=!1,dr=!1;xe.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==vn.state.version||ye.isBatchedMesh&&tt.batching===!1||!ye.isBatchedMesh&&tt.batching===!0||ye.isBatchedMesh&&tt.batchingColor===!0&&ye._colorsTexture===null||ye.isBatchedMesh&&tt.batchingColor===!1&&ye._colorsTexture!==null||ye.isInstancedMesh&&tt.instancing===!1||!ye.isInstancedMesh&&tt.instancing===!0||ye.isSkinnedMesh&&tt.skinning===!1||!ye.isSkinnedMesh&&tt.skinning===!0||ye.isInstancedMesh&&tt.instancingColor===!0&&ye.instanceColor===null||ye.isInstancedMesh&&tt.instancingColor===!1&&ye.instanceColor!==null||ye.isInstancedMesh&&tt.instancingMorph===!0&&ye.morphTexture===null||ye.isInstancedMesh&&tt.instancingMorph===!1&&ye.morphTexture!==null||tt.envMap!==nt||xe.fog===!0&&tt.fog!==qe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==V.numPlanes||tt.numIntersection!==V.numIntersection)||tt.vertexAlphas!==ht||tt.vertexTangents!==xt||tt.morphTargets!==Qe||tt.morphNormals!==pt||tt.morphColors!==$t||tt.morphTargetsCount!==ln||tt.numLightProbeGrids!==Fl(C.state.lightProbeGridArray)?Et=!0:(tt.outputColorSpace!==Xe||tt.toneMapping!==Ht)&&(dr=!0):(Et=!0,tt.__version=xe.version);let cn=tt.currentProgram;(Et===!0||dr===!0)&&(cn=dr===!0?ps(xe,ne,ye,Xe,Ht):Vr(xe,ne,ye),te&&xe.isNodeMaterial&&te.onUpdateProgram(xe,cn,tt));let Hi=!1,Zn=!1,Kn=!1,Mt=cn.getUniforms(),sn=tt.uniforms;if(ae.useProgram(cn.program)&&(Hi=!0,Zn=!0,Kn=!0),xe.id!==ie&&(ie=xe.id,Zn=!0),Hi||j!==L){ae.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Mt.setValue(P,"projectionMatrix",L.projectionMatrix),Mt.setValue(P,"viewMatrix",L.matrixWorldInverse);let Jt=Mt.map.cameraPosition;Jt!==void 0&&Jt.setValue(P,rt.setFromMatrixPosition(L.matrixWorld)),Re.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(xe.isMeshPhongMaterial||xe.isMeshToonMaterial||xe.isMeshLambertMaterial||xe.isMeshBasicMaterial||xe.isMeshStandardMaterial||xe.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",L.isOrthographicCamera===!0),j!==L&&(j=L,Zn=!0,Kn=!0)}if(tt.needsLights&&(vn.state.sunShadowMap.length>0&&Mt.setValue(P,"sunShadowMap",vn.state.sunShadowMap,Z),vn.state.directionalShadowMap.length>0&&Mt.setValue(P,"directionalShadowMap",vn.state.directionalShadowMap,Z),vn.state.spotShadowMap.length>0&&Mt.setValue(P,"spotShadowMap",vn.state.spotShadowMap,Z),vn.state.pointShadowMap.length>0&&Mt.setValue(P,"pointShadowMap",vn.state.pointShadowMap,Z)),ye.isSkinnedMesh){Mt.setOptional(P,ye,"bindMatrix"),Mt.setOptional(P,ye,"bindMatrixInverse");let Xt=ye.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Mt.setValue(P,"boneTexture",Xt.boneTexture,Z))}ye.isBatchedMesh&&(Mt.setOptional(P,ye,"batchingTexture"),Mt.setValue(P,"batchingTexture",ye._matricesTexture,Z),Mt.setOptional(P,ye,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",ye._indirectTexture,Z),Mt.setOptional(P,ye,"batchingColorTexture"),ye._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",ye._colorsTexture,Z));let Rn=be.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&oe.update(ye,be,cn),(Zn||tt.receiveShadow!==ye.receiveShadow)&&(tt.receiveShadow=ye.receiveShadow,Mt.setValue(P,"receiveShadow",ye.receiveShadow)),(xe.isMeshStandardMaterial||xe.isMeshLambertMaterial||xe.isMeshPhongMaterial)&&xe.envMap===null&&ne.environment!==null&&(sn.envMapIntensity.value=ne.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=rA()),Zn){if(Mt.setValue(P,"toneMappingExposure",U.toneMappingExposure),tt.needsLights&&kh(sn,Kn),qe&&xe.fog===!0&&Y.refreshFogUniforms(sn,qe),Y.refreshMaterialUniforms(sn,xe,le,Q,C.state.transmissionRenderTarget[L.id]),tt.needsLights&&tt.numLightProbeGrids>0){let Xt=M,Jt=0;for(let si of C.state.lightProbeGridArray)si.texture!==null&&(Xt.textures[Jt]=si.texture,Xt.min[Jt]=si.boundingBox.min,Xt.max[Jt]=si.boundingBox.max,Xt.resolution[Jt]=si.resolution,Jt++);for(let si in Xt)Xt[si].length=Jt;sn.probesSH.value=Xt.textures,sn.probesMin.value=Xt.min,sn.probesMax.value=Xt.max,sn.probesResolution.value=Xt.resolution}Wo.upload(P,$s(tt),sn,Z)}if(xe.isShaderMaterial&&xe.uniformsNeedUpdate===!0&&(Wo.upload(P,$s(tt),sn,Z),xe.uniformsNeedUpdate=!1),xe.isSpriteMaterial&&Mt.setValue(P,"center",ye.center),Mt.setValue(P,"modelViewMatrix",ye.modelViewMatrix),Mt.setValue(P,"normalMatrix",ye.normalMatrix),Mt.setValue(P,"modelMatrix",ye.matrixWorld),xe.uniformsGroups!==void 0){let Xt=xe.uniformsGroups;for(let Jt=0,si=Xt.length;Jt<si;Jt++){let oa=Xt[Jt];Ve.update(oa,cn),Ve.bind(oa,cn)}}return cn}function kh(L,ne){L.ambientLightColor.needsUpdate=ne,L.lightProbe.needsUpdate=ne,L.sunLights.needsUpdate=ne,L.sunLightShadows.needsUpdate=ne,L.directionalLights.needsUpdate=ne,L.directionalLightShadows.needsUpdate=ne,L.pointLights.needsUpdate=ne,L.pointLightShadows.needsUpdate=ne,L.spotLights.needsUpdate=ne,L.spotLightShadows.needsUpdate=ne,L.rectAreaLights.needsUpdate=ne,L.hemisphereLights.needsUpdate=ne}function Ys(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ge},this.setRenderTargetTextures=function(L,ne,be){let xe=N.get(L);xe.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,xe.__autoAllocateDepthBuffer===!1&&(xe.__useRenderToTexture=!1),N.get(L.texture).__webglTexture=ne,N.get(L.depthTexture).__webglTexture=xe.__autoAllocateDepthBuffer?void 0:be,xe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,ne){let be=N.get(L);be.__webglFramebuffer=ne,be.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(L,ne=0,be=0){ge=L,k=ne,J=be;let xe=null,ye=!1,qe=!1;if(L){let Xe=N.get(L);if(Xe.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(P.FRAMEBUFFER,Xe.__webglFramebuffer),ue.copy(L.viewport),Ae.copy(L.scissor),De=L.scissorTest,ae.viewport(ue),ae.scissor(Ae),ae.setScissorTest(De),ie=-1;return}else if(Xe.__webglFramebuffer===void 0)Z.setupRenderTarget(L);else if(Xe.__hasExternalTextures)Z.rebindTextures(L,N.get(L.texture).__webglTexture,N.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let ht=L.depthTexture;if(Xe.__boundDepthTexture!==ht){if(ht!==null&&N.has(ht)&&(L.width!==ht.image.width||L.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(L)}}let Ke=L.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(qe=!0);let nt=N.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(nt[ne])?xe=nt[ne][be]:xe=nt[ne],ye=!0):L.samples>0&&Z.useMultisampledRTT(L)===!1?xe=N.get(L).__webglMultisampledFramebuffer:Array.isArray(nt)?xe=nt[be]:xe=nt,ue.copy(L.viewport),Ae.copy(L.scissor),De=L.scissorTest}else ue.copy(Le).multiplyScalar(le).floor(),Ae.copy(ze).multiplyScalar(le).floor(),De=ve;if(be!==0&&(xe=ee),ae.bindFramebuffer(P.FRAMEBUFFER,xe)&&ae.drawBuffers(L,xe),ae.viewport(ue),ae.scissor(Ae),ae.setScissorTest(De),ye){let Xe=N.get(L.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Xe.__webglTexture,be)}else if(qe){let Xe=ne;for(let Ke=0;Ke<L.textures.length;Ke++){let nt=N.get(L.textures[Ke]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ke,nt.__webglTexture,be,Xe)}}else if(L!==null&&be!==0){let Xe=N.get(L.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xe.__webglTexture,be)}ie=-1};function Gr(L){let ne=N.get(L);return(ne.__readFormat!==L.format||ne.__readType!==L.type)&&(ne.__readFormat=L.format,ne.__readType=L.type,ne.__formatReadable=Re.textureFormatReadable(L.format),ne.__typeReadable=Re.textureTypeReadable(L.type)),ne}this.readRenderTargetPixels=function(L,ne,be,xe,ye,qe,et,Xe=0){if(!(L&&L.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=N.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&et!==void 0&&(Ke=Ke[et],Array.isArray(Ke)&&(Ke=Ke[0])),Ke){ae.bindFramebuffer(P.FRAMEBUFFER,Ke);try{let nt=L.textures[Xe],ht=nt.format,xt=nt.type;L.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Xe);let Qe=Gr(nt);if(Qe.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=L.width-xe&&be>=0&&be<=L.height-ye&&P.readPixels(ne,be,xe,ye,Se.convert(ht),Se.convert(xt),qe)}finally{let nt=ge!==null?N.get(ge).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(L,ne,be,xe,ye,qe,et,Xe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=N.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&et!==void 0&&(Ke=Ke[et],Array.isArray(Ke)&&(Ke=Ke[0])),Ke)if(ne>=0&&ne<=L.width-xe&&be>=0&&be<=L.height-ye){ae.bindFramebuffer(P.FRAMEBUFFER,Ke);let nt=L.textures[Xe],ht=nt.format,xt=nt.type;L.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Xe);let Qe=Gr(nt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,pt),P.bufferData(P.PIXEL_PACK_BUFFER,qe.byteLength,P.STREAM_READ),P.readPixels(ne,be,xe,ye,Se.convert(ht),Se.convert(xt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let $t=ge!==null?N.get(ge).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,$t);let Ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await F0(P,Ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,pt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,qe),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(pt),P.deleteSync(Ht),qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,ne=null,be=0){let xe=Math.pow(2,-be),ye=Math.floor(L.image.width*xe),qe=Math.floor(L.image.height*xe),et=ne!==null?ne.x:0,Xe=ne!==null?ne.y:0;Z.setTexture2D(L,0),P.copyTexSubImage2D(P.TEXTURE_2D,be,0,0,et,Xe,ye,qe),ae.unbindTexture()},this.copyTextureToTexture=function(L,ne,be=null,xe=null,ye=0,qe=0){let et,Xe,Ke,nt,ht,xt,Qe,pt,$t,Ht=L.isCompressedTexture?L.mipmaps[qe]:L.image;if(be!==null)et=be.max.x-be.min.x,Xe=be.max.y-be.min.y,Ke=be.isBox3?be.max.z-be.min.z:1,nt=be.min.x,ht=be.min.y,xt=be.isBox3?be.min.z:0;else{let Mt=Math.pow(2,-ye);et=Math.floor(Ht.width*Mt),Xe=Math.floor(Ht.height*Mt),L.isDataArrayTexture?Ke=Ht.depth:L.isData3DTexture?Ke=Math.floor(Ht.depth*Mt):Ke=1,nt=0,ht=0,xt=0}xe!==null?(Qe=xe.x,pt=xe.y,$t=xe.z):(Qe=0,pt=0,$t=0);let Rt=Se.convert(ne.format),ln=Se.convert(ne.type),tt;ne.isData3DTexture?(Z.setTexture3D(ne,0),tt=P.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(Z.setTexture2DArray(ne,0),tt=P.TEXTURE_2D_ARRAY):(Z.setTexture2D(ne,0),tt=P.TEXTURE_2D),ae.activeTexture(P.TEXTURE0),ae.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ne.flipY),ae.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),ae.pixelStorei(P.UNPACK_ALIGNMENT,ne.unpackAlignment);let vn=ae.getParameter(P.UNPACK_ROW_LENGTH),Et=ae.getParameter(P.UNPACK_IMAGE_HEIGHT),dr=ae.getParameter(P.UNPACK_SKIP_PIXELS),cn=ae.getParameter(P.UNPACK_SKIP_ROWS),Hi=ae.getParameter(P.UNPACK_SKIP_IMAGES);ae.pixelStorei(P.UNPACK_ROW_LENGTH,Ht.width),ae.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ht.height),ae.pixelStorei(P.UNPACK_SKIP_PIXELS,nt),ae.pixelStorei(P.UNPACK_SKIP_ROWS,ht),ae.pixelStorei(P.UNPACK_SKIP_IMAGES,xt);let Zn=L.isDataArrayTexture||L.isData3DTexture,Kn=ne.isDataArrayTexture||ne.isData3DTexture;if(L.isDepthTexture){let Mt=N.get(L),sn=N.get(ne),Rn=N.get(Mt.__renderTarget),Xt=N.get(sn.__renderTarget);ae.bindFramebuffer(P.READ_FRAMEBUFFER,Rn.__webglFramebuffer),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Jt=0;Jt<Ke;Jt++)Zn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,N.get(L).__webglTexture,ye,xt+Jt),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,N.get(ne).__webglTexture,qe,$t+Jt)),P.blitFramebuffer(nt,ht,nt+et,ht+Xe,Qe,pt,Qe+et,pt+Xe,P.DEPTH_BUFFER_BIT,P.NEAREST);ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(ye!==0||L.isRenderTargetTexture||N.has(L)){let Mt=N.get(L),sn=N.get(ne);ae.bindFramebuffer(P.READ_FRAMEBUFFER,B),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,$);for(let Rn=0;Rn<Ke;Rn++)Zn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.__webglTexture,ye,xt+Rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mt.__webglTexture,ye),Kn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,sn.__webglTexture,qe,$t+Rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,sn.__webglTexture,qe),ye!==0?P.blitFramebuffer(nt,ht,nt+et,ht+Xe,Qe,pt,Qe+et,pt+Xe,P.COLOR_BUFFER_BIT,P.NEAREST):Kn?P.copyTexSubImage3D(tt,qe,Qe,pt,$t+Rn,nt,ht,et,Xe):P.copyTexSubImage2D(tt,qe,Qe,pt,nt,ht,et,Xe);ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Kn?L.isDataTexture||L.isData3DTexture?P.texSubImage3D(tt,qe,Qe,pt,$t,et,Xe,Ke,Rt,ln,Ht.data):ne.isCompressedArrayTexture?P.compressedTexSubImage3D(tt,qe,Qe,pt,$t,et,Xe,Ke,Rt,Ht.data):P.texSubImage3D(tt,qe,Qe,pt,$t,et,Xe,Ke,Rt,ln,Ht):L.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,qe,Qe,pt,et,Xe,Rt,ln,Ht.data):L.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,qe,Qe,pt,Ht.width,Ht.height,Rt,Ht.data):P.texSubImage2D(P.TEXTURE_2D,qe,Qe,pt,et,Xe,Rt,ln,Ht);ae.pixelStorei(P.UNPACK_ROW_LENGTH,vn),ae.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Et),ae.pixelStorei(P.UNPACK_SKIP_PIXELS,dr),ae.pixelStorei(P.UNPACK_SKIP_ROWS,cn),ae.pixelStorei(P.UNPACK_SKIP_IMAGES,Hi),qe===0&&ne.generateMipmaps===!0&&ne.mipmapsAutoUpdate===!0&&P.generateMipmap(tt),ae.unbindTexture()},this.initRenderTarget=function(L){N.get(L).__webglFramebuffer===void 0&&Z.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Z.setTextureCube(L,0):L.isData3DTexture?Z.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Z.setTexture2DArray(L,0):Z.setTexture2D(L,0),ae.unbindTexture()},this.resetState=function(){k=0,J=0,ge=null,ae.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};function bx(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Bt;c.morphTargetsRelative=a;let l=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in h.attributes){if(!i.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;s[x]===void 0&&(s[x]=[]),s[x].push(h.attributes[x]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in h.morphAttributes){if(!r.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[x].length!==n[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;o[x]===void 0&&(o[x]=[]),o[x].push(h.morphAttributes[x]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let x;if(t)x=h.index.count;else if(h.attributes.position!==void 0)x=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,x,u),l+=x}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let x=0;x<d.count;++x)h.push(d.getX(x)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(let u in s){let h=vx(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let x=vx(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}}return c}function vx(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new Ut(o,t,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,d=u.count;f<d;f++)for(let x=0;x<t;x++){let y=u.getComponent(f,x);a.setComponent(f+h,x,y)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Dd(n,e){if(e===cd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Go||e===cl){let t=n.getIndex();if(t===null){let s=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===Go)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Mx(n){let e=new Map,t=new Map,i=n.clone();return Sx(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Sx(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Sx(n.children[i],e.children[i],t)}var Yo=class extends ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Zu(t,_t.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zu(t,_t.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ep(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Nr.extractUrlBase(e);o=Nr.resolveURL(l,this.path)}else o=Nr.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Oo(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rx){try{o[_t.KHR_BINARY_GLTF]=new tp(e)}catch(h){r&&r(h);return}s=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new lp(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case _t.KHR_MATERIALS_UNLIT:o[h]=new Bd;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[h]=new np(s,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[h]=new ip;break;case _t.KHR_MESH_QUANTIZATION:o[h]=new rp;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function sA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function jt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ud=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new Je(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Wn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ji(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new As(u),l.distance=h;break;case"spot":l=new Ya(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ir(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},Bd=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,i){let r=[];e.color=new Je(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,At))}return Promise.all(r)}},kd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},zd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(s,s)}return Promise.all(r)}},Hd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(r)}},Vd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Gd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},Wd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Wn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,At)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},Xd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},qd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(s[0],s[1],s[2],Wn),Promise.all(r)}},$d=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Yd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(s[0],s[1],s[2],Wn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,At)),Promise.all(r)}},Zd=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},Kd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},jd=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Jd=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},Qd=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},Zu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},ep=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let l of r.primitives)if(l.mode!==Mi.TRIANGLES&&l.mode!==Mi.TRIANGLE_STRIP&&l.mode!==Mi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let x of h){let y=new ot,g=new D,m=new Wt,_=new D(1,1,1),T=new Es(x.geometry,x.material,f);for(let E=0;E<f;E++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&_.fromBufferAttribute(c.SCALE,E),T.setMatrixAt(E,y.compose(g,m,_));let M=null;for(let E in c)if(E==="_COLOR_0"){let C=c[E];T.instanceColor=new Tr(C.array,C.itemSize,C.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(M===null){let v=T.geometry;M=new Bt,M.name=v.name;for(let R in v.attributes)M.setAttribute(R,v.attributes[R]);for(let R in v.morphAttributes)M.morphAttributes[R]=v.morphAttributes[R];v.index!==null&&M.setIndex(v.index),M.morphTargetsRelative=v.morphTargetsRelative;for(let R of v.groups)M.addGroup(R.start,R.count,R.materialIndex);v.boundingBox!==null&&(M.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(M.boundingSphere=v.boundingSphere.clone()),M.drawRange.start=v.drawRange.start,M.drawRange.count=v.drawRange.count,M.userData=Object.assign({},v.userData),T.geometry=M}let C=c[E];M.setAttribute(E,new Tr(C.array,C.itemSize,C.normalized))}Vt.prototype.copy.call(T,x),this.parser.assignFinalMaterial(T),d.push(T)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Rx="glTF",gl=12,wx={JSON:1313821514,BIN:5130562},tp=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,gl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-gl,s=new DataView(e,gl),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===wx.JSON){let l=new Uint8Array(e,gl+o,a);this.content=i.decode(l)}else if(c===wx.BIN){let l=gl+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},np=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=op[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=op[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=$o[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let x in d.attributes){let y=d.attributes[x],g=c[x];g!==void 0&&(y.normalized=g)}h(d)},a,l,Wn,f)})})}},ip=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},rp=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},Ku=class extends Ki{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,h=(i-t)/u,f=h*h,d=f*h,x=e*l,y=x-l,g=-2*d+3*f,m=d-f,_=1-g,T=m-f+h;for(let M=0;M!==a;M++){let E=o[y+M+a],C=o[y+M+c]*u,v=o[x+M+a],R=o[x+M]*u;s[M]=_*E+T*C+g*v+m*R}return s}},oA=new Wt,sp=class extends Ku{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return oA.fromArray(s).normalize().toArray(s),s}},Mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$o={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ex={9728:Yt,9729:Zt,9984:su,9985:Ho,9986:Is,9987:bi},Tx={33071:xi,33648:wo,10497:Jn},Nd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},op={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aA={CUBICSPLINE:void 0,LINEAR:Ss,STEP:Ms},Od={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),n.DefaultMaterial}function Ns(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ir(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cA(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function uA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hA(n){let e,t=n.extensions&&n.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fd(t.attributes):e=n.indices+":"+Fd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Fd(n.targets[i]);return e}function Fd(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ap(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var dA=new ot,lp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?(this.textureLoader=new Ts(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ja(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ns(s,a,r),ir(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(Nr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=Nd[r.type],a=$o[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Ut(l,o,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=Nd[r.type],l=$o[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0,y,g;if(d&&d!==h){let m=Math.floor(f/d),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,T=t.cache.get(_);T||(y=new l(a,m*d,r.count*d/u),T=new jr(y,d/u),t.cache.add(_,T)),g=new In(T,c,f%d/u,x)}else a===null?y=new l(r.count*c):y=new l(a,f,r.count*c),g=new Ut(y,c,x);if(r.sparse!==void 0){let m=Nd.SCALAR,_=$o[r.sparse.indices.componentType],T=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,E=new _(o[1],T,r.sparse.count*m),C=new l(o[2],M,r.sparse.count*c);a!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let v=0,R=E.length;v<R;v++){let O=E[v];if(g.setX(O,C[v*c]),c>=2&&g.setY(O,C[v*c+1]),c>=3&&g.setZ(O,C[v*c+2]),c>=4&&g.setW(O,C[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ex[f.magFilter]||Zt,u.minFilter=Ex[f.minFilter]||bi,u.wrapS=Tx[f.wrapS]||Jn,u.wrapT=Tx[f.wrapT]||Jn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Yt&&u.minFilter!==Zt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=r.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,x){t.parse(f,d,x)})});else{if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(c).then(function(f){return new Promise(function(d,x){let y=d;t.isImageBitmapLoader===!0&&(y=function(g){let m=new hn(g);m.needsUpdate=!0,d(m)}),t.load(Nr.resolveURL(f,s.path),y,void 0,x)})})}let h=u.then(function(f){return l===!0&&a.revokeObjectURL(c),ir(f,o),f.userData.mimeType=o.mimeType||fA(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[_t.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new No,Ln.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Ar,Ln.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return fn}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},c=s.extensions||{},l=[];if(c[_t.KHR_MATERIALS_UNLIT]){let h=r[_t.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Wn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Nt);let u=s.alphaMode||Od.OPAQUE;if(u===Od.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Od.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new je(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==tn){let h=s.emissiveFactor;a.emissive=new Je().setRGB(h[0],h[1],h[2],Wn)}return s.emissiveTexture!==void 0&&o!==tn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,At)),Promise.all(l).then(function(){let h=new o(a);return s.name&&(h.name=s.name),ir(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ns(r,h,s),h})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ax(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=hA(l),h=r[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Ax(new Bt,l,t),l.mode===Mi.TRIANGLE_STRIP?f=f.then(d=>Dd(d,cl)):l.mode===Mi.TRIANGLE_FAN&&(f=f.then(d=>Dd(d,Go))),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?lA(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,x=u.length;d<x;d++){let y=u[d],g=o[d],m,_=l[d];if(g.mode===Mi.TRIANGLES||g.mode===Mi.TRIANGLE_STRIP||g.mode===Mi.TRIANGLE_FAN||g.mode===void 0){let T=s.isSkinnedMesh===!0,M=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");T&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=T&&M?new La(y,_):new dt(y,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Mi.LINES)m=new Na(y,_);else if(g.mode===Mi.LINE_STRIP)m=new Yi(y,_);else if(g.mode===Mi.LINE_LOOP)m=new Oa(y,_);else if(g.mode===Mi.POINTS)m=new Fa(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&uA(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),ir(m,s),g.extensions&&Ns(r,m,g),t.assignFinalMaterial(m),h.push(m)}for(let d=0,x=h.length;d<x;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ns(r,h[0],s),h[0];let f=new Tt;s.extensions&&Ns(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,x=h.length;d<x;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(tr.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Di(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ir(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new ot;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Da(a,c)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],x=r.samplers[d.sampler],y=d.target,g=y.node,m=r.parameters!==void 0?r.parameters[x.input]:x.input,_=r.parameters!==void 0?r.parameters[x.output]:x.output;y.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(x),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],x=h[2],y=h[3],g=h[4],m=[];for(let T=0,M=f.length;T<M;T++){let E=f[T],C=d[T],v=x[T],R=y[T],O=g[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let U=i._createAnimationTracks(E,C,v,R,O);if(U)for(let W=0;W<U.length;W++)m.push(U[W])}let _=new Xa(s,void 0,m);return ir(_,r),_})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));let c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,dA)});for(let d=0,x=h.length;d<x;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,x=h[0];u.pivot=new D().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],x.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Lo:l.length>1?u=new Tt:l.length===1?u=l[0]:u=new Vt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),ir(u,s),s.extensions&&Ns(i,u,s),s.matrix!==void 0){let h=new ot;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new Tt;i.name&&(s.name=r.createUniqueName(i.name)),ir(s,i),i.extensions&&Ns(t,s,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){let f=c[u];f.parent!==null?s.add(Mx(f)):s.add(f)}let l=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof Ln||f instanceof hn)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}as[s.path]===as.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(as[s.path]){case as.weights:u=Ir;break;case as.rotation:u=Lr;break;case as.translation:case as.scale:u=Qr;break;default:i.itemSize===1?u=Ir:u=Qr;break}let h=r.interpolation!==void 0?aA[r.interpolation]:Ss,f=this._getArrayFromAccessor(i);for(let d=0,x=c.length;d<x;d++){let y=new u(c[d]+"."+as[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=ap(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Lr?sp:Ku;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function pA(n,e,t){let i=e.attributes,r=new vt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let u=ap($o[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new D,c=new D;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){let y=ap($o[f.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new yn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Ax(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=op[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return yt.workingColorSpace!==Wn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),ir(n,e),pA(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?cA(n,e.targets,t):n})}var Cx={type:"change"},up={type:"start"},Ix={type:"end"},ju=new $i,Px=new xn,mA=Math.cos(70*tr.DEG2RAD),mn=new D,ni=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cp=1e-6,Ju=class extends Qa{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Wt,this._lastTargetPosition=new D,this._quat=new Wt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ns,this._sphericalDelta=new ns,this._scale=1,this._panOffset=new D,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new D,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xA.bind(this),this._onPointerDown=gA.bind(this),this._onPointerUp=yA.bind(this),this._onContextMenu=EA.bind(this),this._onMouseWheel=bA.bind(this),this._onKeyDown=MA.bind(this),this._onTouchStart=SA.bind(this),this._onTouchMove=wA.bind(this),this._onMouseDown=_A.bind(this),this._onMouseMove=vA.bind(this),this._interceptControlDown=TA.bind(this),this._interceptControlUp=AA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ct.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cx),this.update(),this.state=Ct.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;mn.copy(t).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ni:i>Math.PI&&(i-=ni),r<-Math.PI?r+=ni:r>Math.PI&&(r-=ni),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=mn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ju.origin.copy(this.object.position),ju.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ju.direction))<mA?this.object.lookAt(this.target):(Px.setFromNormalAndCoplanarPoint(this.object.up,this.target),ju.intersectPlane(Px,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>cp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cp||this._lastTargetPosition.distanceToSquared(this.target)>cp?(this.dispatchEvent(Cx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mn.setFromMatrixColumn(t,0),mn.multiplyScalar(-e),this._panOffset.add(mn)}_panUp(e,t){this.screenSpacePanning===!0?mn.setFromMatrixColumn(t,1):(mn.setFromMatrixColumn(t,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(e),this._panOffset.add(mn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;mn.copy(r).sub(this.target);let s=mn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/t.clientHeight),this._rotateUp(ni*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/t.clientHeight),this._rotateUp(ni*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function gA(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function xA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function yA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ix),this.state=Ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _A(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ct.DOLLY;break;case is.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}break;case is.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(up)}function vA(n){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function bA(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(n.preventDefault(),this.dispatchEvent(up),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ix))}function MA(n){this.enabled!==!1&&this._handleKeyDown(n)}function SA(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1){this.state=Ct.NONE;break}this._handleTouchStartRotate(n),this.state=Ct.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1){this.state=Ct.NONE;break}this._handleTouchStartPan(n),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ct.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(up)}function wA(n){switch(this._trackPointer(n),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ct.NONE}}function EA(n){this.enabled!==!1&&n.preventDefault()}function TA(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AA(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qu=class extends Xn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Zi;e.deleteAttribute("uv");let t=new fn({side:Mn}),i=new fn,r=new As(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new dt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Es(e,i,6),a=new Vt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new dt(e,Zo(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new dt(e,Zo(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new dt(e,Zo(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new dt(e,Zo(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new dt(e,Zo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new dt(e,Zo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zo(n){return new Ga({color:0,emissive:16777215,emissiveIntensity:n})}var Fn=Uint8Array,fi=Uint16Array,gp=Int32Array,xp=new Fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yp=new Fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Lx=new Fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Bx=function(n,e){for(var t=new fi(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new gp(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},kx=Bx(xp,2),RA=kx.b,fp=kx.r;RA[28]=258,fp[258]=28;var zx=Bx(yp,0),AL=zx.b,Dx=zx.r,dp=new fi(32768);for(Pt=0;Pt<32768;++Pt)Fr=(Pt&43690)>>1|(Pt&21845)<<1,Fr=(Fr&52428)>>2|(Fr&13107)<<2,Fr=(Fr&61680)>>4|(Fr&3855)<<4,dp[Pt]=((Fr&65280)>>8|(Fr&255)<<8)>>1;var Fr,Pt,_l=(function(n,e,t){for(var i=n.length,r=0,s=new fi(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new fi(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new fi(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[dp[h]>>c]=l}else for(a=new fi(i),r=0;r<i;++r)n[r]&&(a[r]=dp[o[n[r]-1]++]>>15-n[r]);return a}),Os=new Fn(288);for(Pt=0;Pt<144;++Pt)Os[Pt]=8;var Pt;for(Pt=144;Pt<256;++Pt)Os[Pt]=9;var Pt;for(Pt=256;Pt<280;++Pt)Os[Pt]=7;var Pt;for(Pt=280;Pt<288;++Pt)Os[Pt]=8;var Pt,eh=new Fn(32);for(Pt=0;Pt<32;++Pt)eh[Pt]=5;var Pt,CA=_l(Os,9,0);var PA=_l(eh,5,0);var Hx=function(n){return(n+7)/8|0},Vx=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Fn(n.subarray(e,t))};var IA=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],th=function(n,e,t){var i=new Error(e||IA[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,th),!t)throw i;return i};var Ur=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},xl=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},hp=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:Wx,l:0};if(r==1){var o=new Fn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(E,C){return E.f-C.f}),t.push({s:-1,f:25001});var a=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=r-1;)a=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var d=new fi(f+1),x=pp(t[u-1],d,0);if(x>e){var i=0,y=0,g=x-e,m=1<<g;for(s.sort(function(C,v){return d[v.s]-d[C.s]||C.f-v.f});i<r;++i){var _=s[i].s;if(d[_]>e)y+=m-(1<<x-d[_]),d[_]=e;else break}for(y>>=g;y>0;){var T=s[i].s;d[T]<e?y-=1<<e-d[T]++-1:++i}for(;i>=0&&y;--i){var M=s[i].s;d[M]==e&&(--d[M],++y)}x=e}return{t:new Fn(d),l:x}},pp=function(n,e,t){return n.s==-1?Math.max(pp(n.l,e,t+1),pp(n.r,e,t+1)):e[n.s]=t},Nx=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new fi(++e),i=0,r=n[0],s=1,o=function(c){t[i++]=c},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},yl=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},Gx=function(n,e,t){var i=t.length,r=Hx(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},Ox=function(n,e,t,i,r,s,o,a,c,l,u){Ur(e,u++,t),++r[256];for(var h=hp(r,15),f=h.t,d=h.l,x=hp(s,15),y=x.t,g=x.l,m=Nx(f),_=m.c,T=m.n,M=Nx(y),E=M.c,C=M.n,v=new fi(19),R=0;R<_.length;++R)++v[_[R]&31];for(var R=0;R<E.length;++R)++v[E[R]&31];for(var O=hp(v,7),U=O.t,W=O.l,te=19;te>4&&!U[Lx[te-1]];--te);var ee=l+5<<3,B=yl(r,Os)+yl(s,eh)+o,$=yl(r,f)+yl(s,y)+o+14+3*te+yl(v,U)+2*v[16]+3*v[17]+7*v[18];if(c>=0&&ee<=B&&ee<=$)return Gx(e,u,n.subarray(c,c+l));var k,J,ge,ie;if(Ur(e,u,1+($<B)),u+=2,$<B){k=_l(f,d,0),J=f,ge=_l(y,g,0),ie=y;var j=_l(U,W,0);Ur(e,u,T-257),Ur(e,u+5,C-1),Ur(e,u+10,te-4),u+=14;for(var R=0;R<te;++R)Ur(e,u+3*R,U[Lx[R]]);u+=3*te;for(var ue=[_,E],Ae=0;Ae<2;++Ae)for(var De=ue[Ae],R=0;R<De.length;++R){var re=De[R]&31;Ur(e,u,j[re]),u+=U[re],re>15&&(Ur(e,u,De[R]>>5&127),u+=De[R]>>12)}}else k=CA,J=Os,ge=PA,ie=eh;for(var R=0;R<a;++R){var Me=i[R];if(Me>255){var re=Me>>18&31;xl(e,u,k[re+257]),u+=J[re+257],re>7&&(Ur(e,u,Me>>23&31),u+=xp[re]);var fe=Me&31;xl(e,u,ge[fe]),u+=ie[fe],fe>3&&(xl(e,u,Me>>5&8191),u+=yp[fe])}else xl(e,u,k[Me]),u+=J[Me]}return xl(e,u,k[256]),u+J[256]},LA=new gp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Wx=new Fn(0),DA=function(n,e,t,i,r,s){var o=s.z||n.length,a=new Fn(i+o+5*(1+Math.ceil(o/7e3))+r),c=a.subarray(i,a.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=LA[e-1],f=h>>13,d=h&8191,x=(1<<t)-1,y=s.p||new fi(32768),g=s.h||new fi(x+1),m=Math.ceil(t/3),_=2*m,T=function(Te){return(n[Te]^n[Te+1]<<m^n[Te+2]<<_)&x},M=new gp(25e3),E=new fi(288),C=new fi(32),v=0,R=0,O=s.i||0,U=0,W=s.w||0,te=0;O+2<o;++O){var ee=T(O),B=O&32767,$=g[ee];if(y[B]=$,g[ee]=B,W<=O){var k=o-O;if((v>7e3||U>24576)&&(k>423||!l)){u=Ox(n,c,0,M,E,C,R,U,te,O-te,u),U=v=R=0,te=O;for(var J=0;J<286;++J)E[J]=0;for(var J=0;J<30;++J)C[J]=0}var ge=2,ie=0,j=d,ue=B-$&32767;if(k>2&&ee==T(O-ue))for(var Ae=Math.min(f,k)-1,De=Math.min(32767,O),re=Math.min(258,k);ue<=De&&--j&&B!=$;){if(n[O+ge]==n[O+ge-ue]){for(var Me=0;Me<re&&n[O+Me]==n[O+Me-ue];++Me);if(Me>ge){if(ge=Me,ie=ue,Me>Ae)break;for(var fe=Math.min(ue,Me-2),Q=0,J=0;J<fe;++J){var le=O-ue+J&32767,Ce=y[le],Oe=le-Ce&32767;Oe>Q&&(Q=Oe,$=le)}}}B=$,$=y[B],ue+=B-$&32767}if(ie){M[U++]=268435456|fp[ge]<<18|Dx[ie];var Le=fp[ge]&31,ze=Dx[ie]&31;R+=xp[Le]+yp[ze],++E[257+Le],++C[ze],W=O+ge,++v}else M[U++]=n[O],++E[n[O]]}}for(O=Math.max(O,W);O<o;++O)M[U++]=n[O],++E[n[O]];u=Ox(n,c,l,M,E,C,R,U,te,O-te,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=g,s.p=y,s.i=O,s.w=W)}else{for(var O=s.w||0;O<o+l;O+=65535){var ve=O+65535;ve>=o&&(c[u/8|0]=l,ve=o),u=Gx(c,u+1,n.subarray(O,ve))}s.i=o}return Vx(a,0,i+Hx(u)+r)},NA=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),OA=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=NA[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var FA=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new Fn(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return DA(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},Xx=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var wn=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function UA(n,e){return FA(n,e||{},0,0)}var qx=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=Xx(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?t[o]=[s,a]:(t[o+="/"]=[new Fn(0),a],qx(s,o,t,i))}},Fx=typeof TextEncoder<"u"&&new TextEncoder,BA=typeof TextDecoder<"u"&&new TextDecoder,kA=0;try{BA.decode(Wx,{stream:!0}),kA=1}catch{}function vl(n,e){if(e){for(var t=new Fn(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(Fx)return Fx.encode(n);for(var r=n.length,s=new Fn(n.length+(n.length>>1)),o=0,a=function(u){s[o++]=u},i=0;i<r;++i){if(o+5>s.length){var c=new Fn(o+8+(r-i<<1));c.set(s),s=c}var l=n.charCodeAt(i);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++i)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return Vx(s,0,o)}var mp=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&th(9),e+=i+4}return e},Ux=function(n,e,t,i,r,s,o,a){var c=i.length,l=t.extra,u=a&&a.length,h=mp(l);wn(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&th(10),wn(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(wn(n,e,t.crc),wn(n,e+4,s<0?-s-2:s),wn(n,e+8,t.size)),wn(n,e+12,c),wn(n,e+14,h),e+=16,o!=null&&(wn(n,e,u),wn(n,e+6,t.attrs),wn(n,e+10,o),e+=14),n.set(i,e),e+=c,h)for(var x in l){var y=l[x],g=y.length;wn(n,e,+x),wn(n,e+2,g),n.set(y,e+4),e+=4+g}return u&&(n.set(a,e),e+=u),e},zA=function(n,e,t,i,r){wn(n,e,101010256),wn(n,e+8,t),wn(n,e+10,t),wn(n,e+12,i),wn(n,e+16,r)};function $x(n,e){e||(e={});var t={},i=[];qx(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],c=a[0],l=a[1],u=l.level==0?0:8,h=vl(o),f=h.length,d=l.comment,x=d&&vl(d),y=x&&x.length,g=mp(l.extra);f>65535&&th(11);var m=u?UA(c,l):c,_=m.length,T=OA();T.p(c),i.push(Xx(l,{size:c.length,crc:T.d(),c:m,f:h,m:x,u:f!=o.length||x&&d.length!=y,o:r,compression:u})),r+=30+f+g+_,s+=76+2*(f+g)+(y||0)+_}for(var M=new Fn(s+22),E=r,C=s-r,v=0;v<i.length;++v){var h=i[v];Ux(M,h.o,h,h.f,h.u,h.c.length);var R=30+h.f.length+mp(h.extra);M.set(h.c,h.o+R),Ux(M,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+R+(h.m?h.m.length:0)}return zA(M,r,i.length,C,E),M}var Un=class{constructor(e,t="",i=[],r=[]){this.name=e,this.type=t,this.metadata=i,this.properties=r,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(u=>{let h=u.key,f=u.value;if(Array.isArray(f)){let d=[];return d.push(`${h} = {`),f.forEach(x=>{d.push(`${t}		${x}`)}),d.push(`${t}	}`),d.join(`
`)}else return`${h} = ${f}`}),r=i.length?` (
${i.map(u=>`${t}	${u}`).join(`
`)}
${t})`:"",s=this.properties.map(u=>{let h=u.property.replace(/\n/g,`
`+t+"	"),f=u.metadata.length?` (
${u.metadata.map(d=>`${t}		${d}`).join(`
`)}
${t}	)`:"";return`${t}	${h}${f}`}),o=this.children.map(u=>u.toString(e+1)),a=[];if(s.length>0&&a.push(...s),o.length>0){s.length>0&&a.push("");for(let u=0;u<o.length;u++)a.push(o[u]),u<o.length-1&&a.push("")}let c=a.join(`
`),l=this.type?this.type+" ":"";return`${t}def ${l}"${this.name}"${r}
${t}{
${c}
${t}}`}},ih=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,r){this.parseAsync(e,r).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,r={},s="model.usda";r[s]=null;let o=VA(e,t.animations);t.animationTracks=o;let a=new Un("Root","Xform"),c=new Un("Scenes","Scope");c.addMetadata("kind",'"sceneLibrary"'),a.addChild(c);let l="Scene",u=new Un(l,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${l}"`]),u.addMetadata("sceneName",`"${l}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),c.addChild(u);let h,f={},d={};e.isScene?ey(e,u,f,i,r,t):ty(e,u,f,i,r,t);let x=jA(f,d,t.quickLookCompatible),y=o.size>0?{fps:t.animationFrameRate,endTimeCode:GA(t.animations)*t.animationFrameRate}:null;h=Qx(y)+`
`+a.toString()+`

`+x.toString(),r[s]=vl(h),h=null;for(let m in d){let _=d[m];if(_.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");_=await this.textureUtils.decompress(_)}let T=HA(_.image,_.flipY,t.maxTextureSize),M=_.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",E=await new Promise(C=>T.toBlob(C,M));r[`textures/Texture_${m}.${Jx(_)}`]=new Uint8Array(await E.arrayBuffer())}let g=0;for(let m in r){let _=r[m],T=34+m.length;g+=T;let M=g&63;if(M!==4){let E=64-M,C=new Uint8Array(E);r[m]=[_,{extra:{12345:C}}]}g=_.length}return $x(r,{level:0,mtime:new Date})}};function jx(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function Jx(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function HA(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),r=document.createElement("canvas");r.width=n.width*Math.min(1,i),r.height=n.height*Math.min(1,i);let s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(n,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var bt=7;function Qx(n=null){return`#usda 1.0
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
`}function VA(n,e){let t=new Map;for(let i=0;i<e.length;i++){let r=e[i];for(let s=0;s<r.tracks.length;s++){let o=r.tracks[s],a=Lt.parseTrackName(o.name),c=Lt.findNode(n,a.nodeName);if(c==null)continue;let l=a.propertyName;if(l!=="position"&&l!=="quaternion"&&l!=="scale")continue;let u=t.get(c);u===void 0&&(u={},t.set(c,u)),u[l]=o}}return t}function GA(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function Yx(n,e,t,i){let r=t.times,s=t.values,o=[];for(let a=0;a<r.length;a++){let c=a*3;o.push(`${(r[a]*i).toPrecision(bt)}: (${s[c].toPrecision(bt)}, ${s[c+1].toPrecision(bt)}, ${s[c+2].toPrecision(bt)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function WA(n,e){let t=n.times,i=n.values,r=[];for(let s=0;s<t.length;s++){let o=s*4;r.push(`${(t[s]*e).toPrecision(bt)}: (${i[o+3].toPrecision(bt)}, ${i[o].toPrecision(bt)}, ${i[o+1].toPrecision(bt)}, ${i[o+2].toPrecision(bt)})`)}return`quatf xformOp:orient.timeSamples = {
	${r.join(`,
	`)},
}`}function ey(n,e,t,i,r,s){for(let o=0,a=n.children.length;o<a;o++)ty(n.children[o],e,t,i,r,s)}function ty(n,e,t,i,r,s){if(n.visible===!1&&s.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,c=Array.isArray(n.material),l=c?n.material:[n.material];for(let h=0;h<l.length;h++){let f=l[h];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let u=l.map(h=>t[h.uuid]);if(c===!1){let h=`geometries/Geometry_${a.id}.usda`;if(!(h in r)){let f=$A(a);r[h]=vl(Qx()+`
`+f.toString())}}o=XA(n,a,u,i,s)}else n.isCamera?o=eR(n,i,s):o=iy(n,i,s);e.addChild(o),ey(n,o,t,i,r,s)}function ny(n,e,t){let i=t.animationTracks.get(e),r=e.pivot!==null;if(!r&&i===void 0){let l=qA(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${l}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let s=t.animationFrameRate,o=e.position,a=e.quaternion,c=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(Yx("xformOp:translate","float3",i.position,s)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(bt)}, ${o.y.toPrecision(bt)}, ${o.z.toPrecision(bt)})`),r){let l=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${l.x.toPrecision(bt)}, ${l.y.toPrecision(bt)}, ${l.z.toPrecision(bt)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(WA(i.quaternion,s)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(bt)}, ${a.x.toPrecision(bt)}, ${a.y.toPrecision(bt)}, ${a.z.toPrecision(bt)})`),i!==void 0&&i.scale!==void 0?n.addProperty(Yx("xformOp:scale","float3",i.scale,s)):n.addProperty(`float3 xformOp:scale = (${c.x.toPrecision(bt)}, ${c.y.toPrecision(bt)}, ${c.z.toPrecision(bt)})`),r?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function iy(n,e,t){let i=jx(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Un(i,"Xform");return ny(r,n,t),r}function XA(n,e,t,i,r){let s=iy(n,i,r);return t.length===1?(s.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),s.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),s.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):s.addChild(ry(e,t)),s}function qA(n){let e=n.elements;return`( ${nh(e,0)}, ${nh(e,4)}, ${nh(e,8)}, ${nh(e,12)} )`}function nh(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function $A(n){let e=new Un("Geometry"),t=ry(n);return e.addChild(t),e}function ry(n,e=null){let t="Geometry",i=n.attributes,r=i.position.count,s=new Un(t,"Mesh");s.addProperty(`int[] faceVertexCounts = [${YA(n)}]`),s.addProperty(`int[] faceVertexIndices = [${ZA(n)}]`),s.addProperty(`normal3f[] normals = [${_p(i.normal,r)}]`,['interpolation = "vertex"']),s.addProperty(`point3f[] points = [${_p(i.position,r)}]`);for(let a=0;a<4;a++){let c=a>0?a:"",l=i["uv"+c];l!==void 0&&s.addProperty(`texCoord2f[] primvars:st${c} = [${KA(l)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&s.addProperty(`color3f[] primvars:displayColor = [${_p(o,r)}]`,['interpolation = "vertex"']),s.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,c=(n.index!==null?n.index.count:i.position.count)/3;for(let l=0;l<a.length;l++){let u=a[l],h=e[u.materialIndex];if(h===void 0)continue;let f=Math.floor(u.start/3),d=Math.min(f+Math.floor(u.count/3),c),x=[];for(let g=f;g<d;g++)x.push(g);let y=new Un(`subset_${l}`,"GeomSubset");y.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),y.addProperty('uniform token elementType = "face"'),y.addProperty('uniform token familyName = "materialBind"'),y.addProperty(`int[] indices = [${x.join(", ")}]`),y.addProperty(`rel material:binding = </Materials/Material_${h.id}>`),s.addChild(y)}}return s}function YA(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function ZA(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let r=0;r<i;r++)t.push(r)}return t.join(", ")}function _p(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let r=n.getX(i),s=n.getY(i),o=n.getZ(i);t.push(`(${r.toPrecision(bt)}, ${s.toPrecision(bt)}, ${o.toPrecision(bt)})`)}return t.join(", ")}function KA(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),r=n.getY(t);e.push(`(${i.toPrecision(bt)}, ${1-r.toPrecision(bt)})`)}return e.join(", ")}function jA(n,e,t=!1){let i=new Un("Materials");for(let r in n){let s=n[r];i.addChild(JA(s,e,t))}return i}function JA(n,e,t=!1){let i=new Un(`Material_${n.id}`,"Material");function r(o,a,c){let l=o.source.id+"_"+o.flipY;e[l]=o;let u=o.channel>0?"st"+o.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),x=o.rotation,y=Math.sin(x),g=Math.cos(x);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=y/f.x,d.y+=g-1):(d.x+=y*f.x,d.y+=(1-g)*f.y);let m=new Un(`PrimvarReader_${a}`,"Shader");m.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),m.addProperty("float2 inputs:fallback = (0.0, 0.0)"),m.addProperty(`string inputs:varname = "${u}"`),m.addProperty("float2 outputs:result");let _=new Un(`Transform2d_${a}`,"Shader");_.addProperty('uniform token info:id = "UsdTransform2d"'),_.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),_.addProperty(`float inputs:rotation = ${(x*(180/Math.PI)).toFixed(bt)}`),_.addProperty(`float2 inputs:scale = ${Kx(f)}`),_.addProperty(`float2 inputs:translation = ${Kx(d)}`),_.addProperty("float2 outputs:result");let T=new Un(`Texture_${o.id}_${a}`,"Shader");if(T.addProperty('uniform token info:id = "UsdUVTexture"'),T.addProperty(`asset inputs:file = @textures/Texture_${l}.${Jx(o)}@`),T.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),c!==void 0){let M=a==="diffuse"?n.opacity:1;T.addProperty(`float4 inputs:scale = ${QA(c,M)}`)}if(a==="normal"){let M=n.normalScale.x;T.addProperty(`float4 inputs:scale = (${2*M}, ${2*M}, 2, 1)`),T.addProperty(`float4 inputs:bias = (${-M}, ${-M}, -1, 0)`)}return T.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===hi?"raw":"sRGB"}"`),T.addProperty(`token inputs:wrapS = "${h[o.wrapS]}"`),T.addProperty(`token inputs:wrapT = "${h[o.wrapT]}"`),T.addProperty("float outputs:r"),T.addProperty("float outputs:g"),T.addProperty("float outputs:b"),T.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&T.addProperty("float outputs:a"),[m,_,T]}n.side===Nt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let s=new Un("PreviewSurface","Shader");if(s.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(s.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),s.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),r(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):s.addProperty(`color3f inputs:diffuseColor = ${Zx(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){s.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new Je(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);r(n.emissiveMap,"emissive",a).forEach(l=>i.addChild(l))}else n.emissive.getHex()>0&&s.addProperty(`color3f inputs:emissiveColor = ${Zx(n.emissive)}`)}if(n.normalMap&&(s.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),r(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){s.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new Je(o,o,o);r(n.aoMap,"occlusion",a).forEach(l=>i.addChild(l))}if(n.roughnessMap){s.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new Je(n.roughness,n.roughness,n.roughness);r(n.roughnessMap,"roughness",o).forEach(c=>i.addChild(c))}else s.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){s.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new Je(n.metalness,n.metalness,n.metalness);r(n.metalnessMap,"metallic",o).forEach(c=>i.addChild(c))}else s.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),s.addProperty("float inputs:opacityThreshold = 0.0001"),r(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):s.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){s.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new Je(n.clearcoat,n.clearcoat,n.clearcoat);r(n.clearcoatMap,"clearcoat",o).forEach(c=>i.addChild(c))}else s.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){s.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new Je(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);r(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(c=>i.addChild(c))}else s.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);s.addProperty(`float inputs:ior = ${n.ior}`)}return s.addProperty("int inputs:useSpecularWorkflow = 0"),s.addProperty("token outputs:surface"),i.addChild(s),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function Zx(n){return`(${n.r}, ${n.g}, ${n.b})`}function QA(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function Kx(n){return`(${n.x}, ${n.y})`}function eR(n,e,t){let i=jx(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Un(i,"Camera");ny(r,n,t);let s=n.isOrthographicCamera?"orthographic":"perspective";r.addProperty(`token projection = "${s}"`);let o=`(${n.near.toPrecision(bt)}, ${n.far.toPrecision(bt)})`;r.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(bt):a=n.getFilmWidth().toPrecision(bt),r.addProperty(`float horizontalAperture = ${a}`);let c;if(n.isOrthographicCamera?c=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(bt):c=n.getFilmHeight().toPrecision(bt),r.addProperty(`float verticalAperture = ${c}`),n.isPerspectiveCamera){let l=n.getFocalLength().toPrecision(bt);r.addProperty(`float focalLength = ${l}`);let u=n.focus.toPrecision(bt);r.addProperty(`float focusDistance = ${u}`)}return r}var sy=new vt,rh=new D,Fi=class extends Ka{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Gt(e,3)),this.setAttribute("uv",new Gt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new ts(t,6,1);return this.setAttribute("instanceStart",new In(i,3,0)),this.setAttribute("instanceEnd",new In(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new ts(t,6,1);return this.setAttribute("instanceColorStart",new In(i,3,0)),this.setAttribute("instanceColorEnd",new In(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Va(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),sy.setFromBufferAttribute(t),this.boundingBox.union(sy))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rh.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rh)),rh.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(rh));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};$e.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new je},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$n.line={uniforms:hl.merge([$e.common,$e.fog,$e.line]),vertexShader:`
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
		`};var rr=class extends _n{constructor(e){super({type:"LineMaterial",uniforms:hl.clone($n.line.uniforms),vertexShader:$n.line.vertexShader,fragmentShader:$n.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var vp=new wt,oy=new D,ay=new D,En=new wt,Tn=new wt,sr=new wt,bp=new D,Mp=new ot,An=new Ja,ly=new D,sh=new vt,oh=new yn,or=new wt,ar,Fs;function cy(n,e,t){return or.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),or.multiplyScalar(1/or.w),or.x=Fs/t.width,or.y=Fs/t.height,or.applyMatrix4(n.projectionMatrixInverse),or.multiplyScalar(1/or.w),Math.abs(Math.max(or.x,or.y))}function tR(n,e){let t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,c=o;a<c;a++){An.start.fromBufferAttribute(r,a),An.end.fromBufferAttribute(s,a),An.applyMatrix4(t);let l=new D,u=new D;ar.distanceSqToSegment(An.start,An.end,u,l),u.distanceTo(l)<Fs*.5&&e.push({point:u,pointOnLine:l,distance:ar.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function nR(n,e,t){let i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;ar.at(1,sr),sr.w=1,sr.applyMatrix4(e.matrixWorldInverse),sr.applyMatrix4(i),sr.multiplyScalar(1/sr.w),sr.x*=s.x/2,sr.y*=s.y/2,sr.z=0,bp.copy(sr),Mp.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(En.fromBufferAttribute(c,f),Tn.fromBufferAttribute(l,f),En.w=1,Tn.w=1,En.applyMatrix4(Mp),Tn.applyMatrix4(Mp),En.z>h&&Tn.z>h)continue;if(En.z>h){let T=En.z-Tn.z,M=(En.z-h)/T;En.lerp(Tn,M)}else if(Tn.z>h){let T=Tn.z-En.z,M=(Tn.z-h)/T;Tn.lerp(En,M)}En.applyMatrix4(i),Tn.applyMatrix4(i),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=s.x/2,En.y*=s.y/2,Tn.x*=s.x/2,Tn.y*=s.y/2,An.start.copy(En),An.start.z=0,An.end.copy(Tn),An.end.z=0;let y=An.closestPointToPointParameter(bp,!0);An.at(y,ly);let g=tr.lerp(En.z,Tn.z,y),m=g>=-1&&g<=1,_=bp.distanceTo(ly)<Fs*.5;if(m&&_){An.start.fromBufferAttribute(c,f),An.end.fromBufferAttribute(l,f),An.start.applyMatrix4(o),An.end.applyMatrix4(o);let T=new D,M=new D;ar.distanceSqToSegment(An.start,An.end,M,T),t.push({point:M,pointOnLine:T,distance:ar.origin.distanceTo(M),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var ls=class extends dt{constructor(e=new Fi,t=new rr({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)oy.fromBufferAttribute(t,o),ay.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+oy.distanceTo(ay);let s=new ts(r,2,1);return e.setAttribute("instanceDistanceStart",new In(s,1,0)),e.setAttribute("instanceDistanceEnd",new In(s,1,1)),this}raycast(e,t){let i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ar=e.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Fs=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),oh.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=Fs*.5;else{let h=Math.max(r.near,oh.distanceToPoint(ar.origin));l=cy(r,h,c.resolution)}if(oh.radius+=l,ar.intersectsSphere(oh)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),sh.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Fs*.5;else{let h=Math.max(r.near,sh.distanceToPoint(ar.origin));u=cy(r,h,c.resolution)}sh.expandByScalar(u),ar.intersectsBox(sh)!==!1&&(i?tR(this,t):nR(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(vp),this.material.uniforms.resolution.value.set(vp.z,vp.w))}};var fy="blueprints.edgeMode",iR="blueprints.edgesEnabled",Us="none",Bs="transparent",Ml="opaque",rR=20,dy=2.5,py=0,lh=35e-5,wp=2e-6;function sR(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*wp}var bl=1,my=4,oR=.0012,aR=.0036,lR=.02,cR=.0035,uy=.012;function hy(n){return n===Us||n===Bs||n===Ml?n:n==="1"||n==="true"?Bs:n==="0"||n==="false"?Us:null}function gy(){try{let n=hy(localStorage.getItem(fy));if(n)return n;let e=hy(localStorage.getItem(iR));if(e)return Tp(e),e}catch{}return Bs}function Tp(n){try{localStorage.setItem(fy,n)}catch{}}function Bn(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function xy(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new za(n,rR),i=t.getAttribute("position"),r=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),r}function uR(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var ah=new D;function yy(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],r=n[t+1],s=n[t+2],o=n[t+3],a=n[t+4],c=n[t+5],l=o-i,u=a-r,h=c-s,f=Math.hypot(l,u,h);f<1e-6||e.push({ax:i,ay:r,az:s,bx:o,by:a,bz:c,dx:l/f,dy:u/f,dz:h/f,len:f})}return e}function hR(n,e,t,i,r,s){let o=d=>Math.round(d/5e-4),a=o(n),c=o(e),l=o(t),u=o(i),h=o(r),f=o(s);if(a>u||a===u&&c>h||a===u&&c===h&&l>f){let d=a;a=u,u=d;let x=c;c=h,h=x;let y=l;l=f,f=y}return`${a},${c},${l},${u},${h},${f}`}function _y(n){let e=yy(n),t=[],i=new Set;for(let r=0;r<e.length;r++){let s=e[r];for(let o=r+1;o<e.length;o++){let a=e[o];if(Math.abs(s.dx*a.dx+s.dy*a.dy+s.dz*a.dz)<.985)continue;let l=s.ax-a.ax,u=s.ay-a.ay,h=s.az-a.az,f=l*s.dx+u*s.dy+h*s.dz,d=l-f*s.dx,x=u-f*s.dy,y=h-f*s.dz,g=Math.hypot(d,x,y);if(g<oR||g>aR)continue;let m=(a.ax-s.ax)*s.dx+(a.ay-s.ay)*s.dy+(a.az-s.az)*s.dz,_=(a.bx-s.ax)*s.dx+(a.by-s.ay)*s.dy+(a.bz-s.az)*s.dz,T=Math.max(0,Math.min(m,_)),M=Math.min(s.len,Math.max(m,_));if(M-T<lR)continue;let E=-d/g*(g*.5),C=-x/g*(g*.5),v=-y/g*(g*.5),R=s.ax+s.dx*T+E,O=s.ay+s.dy*T+C,U=s.az+s.dz*T+v,W=s.ax+s.dx*M+E,te=s.ay+s.dy*M+C,ee=s.az+s.dz*M+v,B=hR(R,O,U,W,te,ee);i.has(B)||(i.add(B),t.push(R,O,U,W,te,ee))}}return new Float32Array(t)}function fR(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,r=0,s=0,o=t?t.count:e.count,a=l=>{let u=t?t.getX(l):l;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let l=0;l+2<o;l+=3){let u=a(l),h=a(l+1),f=a(l+2),d=h[0]-u[0],x=h[1]-u[1],y=h[2]-u[2],g=f[0]-u[0],m=f[1]-u[1],_=f[2]-u[2];i+=x*_-y*m,r+=y*g-d*_,s+=d*m-x*g}let c=Math.hypot(i,r,s)||1;return{x:i/c,y:r/c,z:s/c}}function dR(n,e){let t=n.getAttribute("position"),i,r,s;Math.abs(e.z)<.9?(i=-e.y,r=e.x,s=0):(i=0,r=-e.z,s=e.y);let o=Math.hypot(i,r,s)||1;i/=o,r/=o,s/=o;let a=e.y*s-e.z*r,c=e.z*i-e.x*s,l=e.x*r-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let x=0;x<t.count;x++){let y=t.getX(x),g=t.getY(x),m=t.getZ(x),_=y*i+g*r+m*s,T=y*a+g*c+m*l;_<u&&(u=_),_>h&&(h=_),T<f&&(f=T),T>d&&(d=T)}return Math.min(h-u,d-f)}function pR(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=fR(n),i=dR(n,t);return t.z>.5?i>uy:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>uy}function vy(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let r=0;r<e.length;r+=3)ah.set(e[r],e[r+1],e[r+2]).applyMatrix4(t),i[r]=ah.x,i[r+1]=ah.y,i[r+2]=ah.z;return i}function mR(n,e,t){if(!t||t.length<6)return n;let i=vy(e,n),r=yy(t),s=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],c=i[o+1],l=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,x=h-c,y=f-l,g=Math.hypot(d,x,y);if(g<1e-6)continue;let m=d/g,_=x/g,T=y/g,M=!1;for(let E of r){if(Math.abs(m*E.dx+_*E.dy+T*E.dz)<.95)continue;let v=a-E.ax,R=c-E.ay,O=l-E.az,U=v*E.dx+R*E.dy+O*E.dz,W=v-U*E.dx,te=R-U*E.dy,ee=O-U*E.dz;if(Math.hypot(W,te,ee)>cR)continue;let B=(a-E.ax)*E.dx+(c-E.ay)*E.dy+(l-E.az)*E.dz,$=(u-E.ax)*E.dx+(h-E.ay)*E.dy+(f-E.az)*E.dz,k=Math.min(B,$),J=Math.max(B,$);if(Math.min(J,E.len)-Math.max(k,0)>.01){M=!0;break}}M||s.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(s)}function gR(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function xR(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function yR(n,e=Bs){return e===Us?0:e===Ml?n?.visible===!1?0:1:xR(n)}function Ep(n,e,t=1,i=wp){let r=Math.max(0,Math.min(1,Number(t)||0)),s=Number.isFinite(i)?i:wp,o=new rr({color:py,linewidth:dy,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:r<1,opacity:r<1?r:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${lh};
			end.z += ${lh};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if ${Cp}
				gl_FragDepth -= ${s};
			#else
				gl_FragDepth = gl_FragCoord.z - ${s};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${my}-${s}-${lh}`,e&&o.resolution.set(e.x,e.y),o}function by(n,e,t,i){let r=Math.max(0,Math.min(1,Number(e)||0)),s=Ep(t,null,r);s.depthTest=!1,s.depthWrite=!1,s.transparent=!0,s.opacity=r;let o=s.onBeforeCompile?.bind(s),a=s.customProgramCacheKey?.bind(s);s.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,s.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},s.needsUpdate=!0;let c=new Fi;c.setPositions(n);let l=new ls(c,s);return l.frustumCulled=!1,l.matrixAutoUpdate=!1,l.renderOrder=1e3,l.raycast=()=>{},l.userData.isPeeledEdgeBatch=!0,l}function ch(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function My(n){if(!n)return;let e=[];n.traverse(t=>{Bn(t)&&e.push(t)});for(let t of e)ch(t)}function cs(n,e){n&&n.traverse(t=>{Bn(t)&&(t.visible=e)})}function Sy(n,e,t){if(!n)return;let i=Math.max(1,e),r=Math.max(1,t);n.traverse(s=>{if(!Bn(s)||!s.material)return;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a?.resolution&&a.resolution.set(i,r)})}function Ap(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!Bn(i)||!i.material)return;let r=Array.isArray(i.material)?i.material:[i.material];for(let s of r){if(!s)continue;let o=s.clippingPlanes?s.clippingPlanes.length:0;s.clippingPlanes=t,s.clipIntersection=!1,o!==t.length&&(s.needsUpdate=!0)}})}function _R(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=xy(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?_y(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?pR(n.geometry)?mR(i,n,t):new Float32Array(0):i}function vR(n,e,t,i,r){n.updateWorldMatrix(!0,!1);let s=_R(n,i,r),o=uh(t,n.matrixWorld),a=Ey(n.geometry,o),c=uR(s,a),l=new Fi,u=e.geometry;c.length>=6?(l.setPositions(c),e.geometry=l,e.computeLineDistances()):e.geometry=l,u?.dispose?.()}function bR(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let r=i.userData.bpHardEdgePositions;r instanceof Float32Array||(r=xy(i.geometry),i.userData.bpHardEdgePositions=r);let s=_y(r);if(s.length<6)continue;let o=vy(i,s);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function wy(n,e,t={}){let i=t.clippingPlanes??[],r=t.resolution||null,s=t.edgeMode??Bs,o=e?bR(n):new Float32Array(0);for(let[a,c]of n)for(let l of c){if(!l||!l.isMesh||!l.geometry||Bn(l))continue;let u=null;for(let d of l.children)if(Bn(d)){u=d;break}if(!e){u&&ch(u);continue}u&&!u.isLineSegments2&&(ch(u),u=null);let h=yR(l,s),f=sR(l);if(u){let d=u.material,x=d?.customProgramCacheKey?.(),y=`bp-edge-depth-bias-r${my}-${f}-${lh}`;if(!d||typeof d.customProgramCacheKey!="function"||x!==y){ch(u);let g=Ep(i,r,h,f),m=new Fi;u=new ls(m,g),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(bl),l.add(u)}else d.color&&d.color.setHex(py),typeof d.linewidth=="number"&&(d.linewidth=dy),d.clippingPlanes=i,d.clipIntersection=!1,r&&d.resolution&&d.resolution.set(r.x,r.y),gR(d,h),d.needsUpdate=!0}else{let d=Ep(i,r,h,f),x=new Fi;u=new ls(x,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(bl),l.add(u)}u.layers.set(bl),vR(l,u,i,a,o)}}function MR(n){if(!n.isMesh||Bn(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function Rp(n,e,t,i,r={}){if(!i)return;let s=!!r.reuseDepth,o=!1;if(i.traverse(y=>{Bn(y)&&(o=!0)}),!o){Sp(n);return}let a=n.autoClear,c=e.background,l=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,s){cs(i,!0),t.layers.set(bl),n.render(e,t),t.layers.mask=u,e.background=c,e.overrideMaterial=l,n.autoClear=a,Sp(n);return}cs(i,!1);let h=[];i.traverse(y=>{!MR(y)||y.visible===!1||(h.push(y),y.visible=!1)});let f=[],d=new Set;e.traverse(y=>{if(!y.isMesh||Bn(y)||y.visible===!1)return;let g=Array.isArray(y.material)?y.material:[y.material];for(let m of g)!m||d.has(m)||(d.add(m),f.push({mat:m,colorWrite:m.colorWrite!==!1,depthWrite:m.depthWrite!==!1}),m.colorWrite=!1,m.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let y of f)y.mat.colorWrite=y.colorWrite,y.mat.depthWrite=y.depthWrite;for(let y of h)y.visible=!0}cs(i,!0);let x=[];r.opaqueEdgesOnly&&i.traverse(y=>{if(!Bn(y))return;let g=Array.isArray(y.material)?y.material[0]:y.material;g&&g.transparent&&g.opacity<1-1e-4&&(x.push(y),y.visible=!1)}),t.layers.set(bl);try{n.render(e,t)}finally{for(let y of x)y.visible=!0}t.layers.mask=u,e.background=c,e.overrideMaterial=l,n.autoClear=a,Sp(n)}function Sp(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var Ty=!0,Ay=5,Lp=12,SR=Lp,Cy=.001,wR=.5,ER=1;function Ry(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let r=t.children;if(r)for(let s=0;s<r.length;s++){let o=r[s];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var hh=1e5,Ui={value:0},rn={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Cy},uResolution:{value:new je(1,1)}};function Pp(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Ui.value),t.tPrevViewZ&&(t.tPrevViewZ.value=rn.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=rn.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=rn.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=rn.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(rn.uResolution.value)}function Sl(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,r)=>{t?.(i,r),i.uniforms.uPeelStage=Ui,i.uniforms.tPrevViewZ=rn.tPrevViewZ,i.uniforms.tPeelViewZ=rn.tPeelViewZ,i.uniforms.tOpaqueViewZ=rn.tOpaqueViewZ,i.uniforms.uViewZEps=rn.uViewZEps,i.uniforms.uResolution=rn.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(hh*.5).toFixed(1)}) discard;
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
#endif`)},n.needsUpdate=!0}function Ip(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function Py(n){let e=new je,t=new Je,i=null,r=null,s=null,o=null,a=null,c=null,l=new Di(-1,1,1,-1,0,1),u=new Xn,h=new _n({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Je(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new dt(new Qn(2,2),h);u.add(f);let d=new _n({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:tu,blendSrc:nl,blendDst:ss,blendSrcAlpha:nl,blendDstAlpha:ss,blendEquation:Ni}),x=new dt(new Qn(2,2),d),y=new Xn;y.add(x);let g=new _n({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:_i}),m=new dt(new Qn(2,2),g),_=new Xn;_.add(m);let T=new _n({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:_i}),M=new dt(new Qn(2,2),T),E=new Xn;E.add(M);function C(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function v(P){C();let de=n.autoClear;n.setRenderTarget(P),n.autoClear=!1,n.render(E,l),n.autoClear=de}let R=new _n({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Nt,clipping:!0,blending:_i});function O(P,de,me={}){g.uniforms.uValue.value=de;let Re=n.autoClear;C(),n.setRenderTarget(P),me.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(_,l),n.autoClear=Re}function U(){i?.dispose(),r?.dispose(),s?.dispose(),o?.dispose(),a?.dispose(),c?.dispose(),i=null,r=null,s=null,o=null,a=null,c=null}let W=0;function te(P,de,me){let Re=Math.max(1,Math.floor(P)),ae=Math.max(1,Math.floor(de)),p=Math.min(1,Math.max(.25,me)),N=Math.max(1,Math.floor(Re*p)),Z=Math.max(1,Math.floor(ae*p));if(i&&i.width===Re&&i.height===ae&&s&&s.width===N&&s.height===Z&&W===p)return;U(),W=p,i=new an(Re,ae,{format:Sn,type:Dn,colorSpace:At,depthBuffer:!0,stencilBuffer:!1});let A={format:Sn,type:qn,depthBuffer:!0,stencilBuffer:!1,magFilter:Yt,minFilter:Yt};r=new an(N,Z,A),s=new an(N,Z,A),o=new an(N,Z,A),a=new an(N,Z,{format:Sn,type:ti,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:Zt,minFilter:Zt}),c=new an(N,Z,{format:Sn,type:ti,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:Zt,minFilter:Zt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,rn.tOpaqueViewZ.value=r.texture,rn.uResolution.value.set(N,Z)}function ee(P){let de=[],me=[];return P?(P.traverse(Re=>{if(!Re.isMesh||!Re.visible||Bn(Re))return;let ae=Re,p=Array.isArray(ae.material)?ae.material:[ae.material],N=!1;for(let Z of p)if(Z&&Z.transparent&&Z.opacity<1-1e-4){N=!0;break}N?me.push(ae):de.push(ae)}),{opaque:de,transparent:me}):{opaque:de,transparent:me}}function B(P,de){for(let me of P)me.visible=de}function $(P,de){P.blending=de.blending,P.blendSrc=de.blendSrc,P.blendDst=de.blendDst,P.blendSrcAlpha=de.blendSrcAlpha,P.blendDstAlpha=de.blendDstAlpha,P.blendEquation=de.blendEquation,P.blendEquationAlpha=de.blendEquation}let k={meshes:[],sources:[],key:""},J={meshes:[],sources:[],key:""},ge="",ie="",j=new Xn,ue=new Xn,Ae=new Xn,De=[];function re(P){for(let de of P.meshes)de.geometry.dispose();P.meshes=[],P.sources=[],P.key=""}function Me(){for(let P of De){Ae.remove(P),P.geometry?.dispose?.();let de=P.material;if(Array.isArray(de))for(let me of de)me?.dispose?.();else de?.dispose?.()}De=[]}function fe(){re(k),re(J),Me(),ge="",ie=""}function Q(P){if(Me(),!P.length)return;let de=new Map,me=new D;for(let ae of P){let p=null;for(let K of ae.children)if(Bn(K)){p=K;break}if(!p?.geometry)continue;let N=p.material,Z=N&&N.transparent&&typeof N.opacity=="number"?N.opacity:1;if(!(Z<1-1e-4))continue;let A=p.geometry.getAttribute("instanceStart"),w=p.geometry.getAttribute("instanceEnd");if(!A||!w||!A.count)continue;let S=Z.toFixed(3),H=de.get(S);H||(H={opacity:Z,planes:N.clippingPlanes||[],chunks:[]},de.set(S,H)),ae.updateWorldMatrix(!0,!1);let z=A.count,Y=new Float32Array(z*6);for(let K=0;K<z;K++)me.fromBufferAttribute(A,K).applyMatrix4(ae.matrixWorld),Y[K*6]=me.x,Y[K*6+1]=me.y,Y[K*6+2]=me.z,me.fromBufferAttribute(w,K).applyMatrix4(ae.matrixWorld),Y[K*6+3]=me.x,Y[K*6+4]=me.y,Y[K*6+5]=me.z;H.chunks.push(Y)}let Re={stage:Ui,prevZ:rn.tPrevViewZ,peelZ:rn.tPeelViewZ,opaqueZ:rn.tOpaqueViewZ,eps:rn.uViewZEps,resolution:rn.uResolution};for(let ae of de.values()){let p=0;for(let w of ae.chunks)p+=w.length;if(p<6)continue;let N=new Float32Array(p),Z=0;for(let w of ae.chunks)N.set(w,Z),Z+=w.length;let A=by(N,ae.opacity,ae.planes,Re);Ae.add(A),De.push(A)}}function le(P,de,me,Re){if(!me.length)return;let ae=`${Ry(me)}#${Ry(de)}`;Re&&Re===ge&&ae===ie&&k.meshes.length||(Le(k,P,me),Le(J,P,de),k.sources.length===me.length&&J.sources.length===de.length&&(Q(me),ge=Re||"",ie=ae))}function Ce(P){return Object.keys(P.attributes).sort().join(",")}function Oe(P){let de=P.geometry,me=de.index?de.toNonIndexed():de.clone();return me.applyMatrix4(P.matrixWorld),me}function Le(P,de,me){let Re=String(me.length);for(let p of me){let N=Array.isArray(p.material)?"m":p.material?.id||0;Re+=`.${p.id}:${N}`}if(Re===P.key)return;de.updateWorldMatrix(!0,!0),re(P),P.key=Re;let ae=new Map;for(let p of me){if(!p.geometry||Array.isArray(p.material)||!p.material)continue;let N=`${p.material.uuid}:${Ce(p.geometry)}`,Z=ae.get(N);Z||(Z={mat:p.material,meshes:[]},ae.set(N,Z)),Z.meshes.push(p)}for(let p of ae.values()){let N=[];try{for(let w of p.meshes)N.push(Oe(w));let Z=bx(N,!1);if(!Z)continue;let A=new dt(Z,p.mat);A.frustumCulled=!1,A.matrixAutoUpdate=!1,A.renderOrder=0,A.userData.isPeelBatch=!0,P.meshes.push(A),P.sources.push(...p.meshes)}catch{}finally{for(let Z of N)Z.dispose()}}}function ze(P,de,me,Re){if(!P.meshes.length||P.sources.length!==de.length)return n.render(me,Re),!1;j.environment=me.environment,j.environmentIntensity=me.environmentIntensity,j.fog=me.fog;let ae=[];for(let p of me.children)p.isLight&&ae.push(p);for(let p of ae)j.add(p);for(let p of P.meshes)j.add(p);n.render(j,Re);for(let p of P.meshes)j.remove(p);for(let p of ae)me.add(p);return!0}function ve(P,de,me){ze(k,me,P,de)}function Te(P,de,me){me.length&&ze(J,me,P,de)}function He(P,de,me){if(!J.meshes.length||J.sources.length!==de.length)return!1;ue.overrideMaterial=me;for(let Re of J.meshes)ue.add(Re);n.render(ue,P),ue.overrideMaterial=null;for(let Re of J.meshes)ue.remove(Re);return!0}function Be(P){let de=new Set;for(let me of P){let Re=Array.isArray(me.material)?me.material:[me.material];for(let ae of Re)ae&&de.add(ae)}return[...de]}function We(P,de,me){if(!me)return;let Re=me.visible,ae=P.background,p=n.autoClear;me.visible=!1;let N=P.children.filter(Z=>Z.userData?.bpStage&&Z.visible);for(let Z of N)Z.visible=!1;P.background=null,n.autoClear=!1,C(),n.clearDepth(),n.render(P,de);for(let Z of N)Z.visible=!0;me.visible=Re,P.background=ae,n.autoClear=p}function Ge(P){return P.children.filter(de=>de.userData?.blueprintAnnotations)}function rt(P,de){for(let me of P)me.visible=de}function pe(P,de,me){Ge(P).some(Re=>Re.visible)&&We(P,de,me)}function ke(P,de,me,Re={}){cs(me,!1);let ae=Ge(P),p=ae.map(N=>N.visible);rt(ae,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(P,de),Re.skipEdges||Rp(n,P,de,me,{reuseDepth:!!Re.reuseDepth}),ae.forEach((N,Z)=>{N.visible=p[Z]}),pe(P,de,me)}function Ze(P,de,me,Re,ae={}){if(!(Ty&&(typeof Re=="function"?Re():!!Re)))return Ui.value=0,ke(P,de,me,{reuseDepth:!0}),!1;if(ae.quality!=="high"){Ui.value=0,ke(P,de,me,{reuseDepth:!0});let ce=ae.batchKey||"";if(me&&!ae.deferPrime&&ce!==ge){let Ue=ee(me);le(me,Ue.opaque,Ue.transparent,ce)}return!0}let{opaque:N,transparent:Z}=ee(me);if(!Z.length)return Ui.value=0,ke(P,de,me,{reuseDepth:!0}),!1;me&&le(me,N,Z,ae.batchKey||"");let A=ae.quality==="high",w=A?ER:wR,S=A?Lp:Ay;n.getDrawingBufferSize(e),te(e.x,e.y,w);let H=n.autoClear,z=n.toneMapping,Y=P.background;Y instanceof Je?t.copy(Y):t.set(1118481),h.uniforms.uBackground.value.copy(t);let K=[];for(let ce of[...N,...Z])K.push({mesh:ce,visible:ce.visible});let q=Be(Z),V=[];for(let ce of q)Sl(ce),V.push({mat:ce,snap:{blending:ce.blending,blendSrc:ce.blendSrc,blendDst:ce.blendDst,blendSrcAlpha:ce.blendSrcAlpha,blendDstAlpha:ce.blendDstAlpha,blendEquation:ce.blendEquation,blendEquationAlpha:ce.blendEquationAlpha,depthWrite:ce.depthWrite,depthTest:ce.depthTest,transparent:ce.transparent,opacity:ce.opacity,colorWrite:ce.colorWrite,side:ce.side,forceSinglePass:ce.forceSinglePass}});Ip(q,!0);let he=new Map;for(let ce of Z)he.set(ce,ce.onBeforeRender),ce.onBeforeRender=function(at,Ne,mt,zt,Kt,Ei){let zi=Array.isArray(Kt)?Kt:[Kt];for(let Hr of zi)Hr&&Pp(Hr);let zr=he.get(ce);typeof zr=="function"&&zr.call(this,at,Ne,mt,zt,Kt,Ei)};let F=null;for(let ce of q)if(ce.clippingPlanes?.length){F=ce.clippingPlanes;break}if(!F)for(let ce of N){let Ue=Array.isArray(ce.material)?ce.material:[ce.material];for(let at of Ue)if(at?.clippingPlanes?.length){F=at.clippingPlanes;break}if(F)break}R.clippingPlanes=F||[],R.clipIntersection=!1,P.background=null,n.autoClear=!0,Ui.value=0;let oe=[];for(let ce of P.children)ce!==me&&(ce.isLight||ce.userData?.bpStage||(oe.push({obj:ce,visible:ce.visible}),ce.visible=!1));function se(){for(let[ce,Ue]of he)ce.onBeforeRender=Ue}function we(){for(let{mat:ce,snap:Ue}of V)$(ce,Ue),ce.blendEquationAlpha=Ue.blendEquationAlpha,ce.depthWrite=Ue.depthWrite,ce.depthTest=Ue.depthTest,ce.transparent=Ue.transparent,ce.opacity=Ue.opacity,ce.colorWrite=Ue.colorWrite!==!1,ce.side=Ue.side,ce.forceSinglePass=Ue.forceSinglePass,ce.needsUpdate=!0;for(let{mesh:ce,visible:Ue}of K)ce.visible=Ue;for(let{obj:ce,visible:Ue}of oe)ce.visible=Ue;return se(),Ip(q,!1),Ui.value=0,P.background=Y,P.overrideMaterial=null,n.toneMapping=z,n.setRenderTarget(null),n.autoClear=!0,ke(P,de,me),n.autoClear=H,!1}if(B(Z,!1),B(N,!0),cs(me,!1),C(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),Te(P,de,N),n.setRenderTarget(r),n.setClearColor(0,1),O(r,hh,{clearDepth:!0}),A){let ce=new Float32Array(4);try{n.readRenderTargetPixels(r,2,2,1,1,ce)}catch{ce[0]=0}if(!Number.isFinite(ce[0])||ce[0]<hh*.5)return we()}let Se=P.overrideMaterial;n.setRenderTarget(r),n.autoClear=!1,He(de,N,R)||(P.overrideMaterial=R,n.render(P,de),P.overrideMaterial=Se),n.autoClear=!0,rn.tOpaqueViewZ.value=r.texture,v(a),O(o,0),rn.tPrevViewZ.value=o.texture,B(N,!1),B(Z,!0),cs(me,!1);let Fe=!1;for(let ce=0;ce<S;ce++){rn.tPrevViewZ.value=o.texture,rn.tPeelViewZ.value=o.texture,Ui.value=1;for(let{mat:Ne}of V)Ne.depthWrite=!0,Ne.depthTest=!0,Ne.colorWrite=!0,Ne.transparent=!0,Ne.forceSinglePass=!0,$(Ne,{blending:_i,blendSrc:ss,blendDst:el,blendSrcAlpha:ss,blendDstAlpha:el,blendEquation:Ni}),Pp(Ne);C(),n.setRenderTarget(s),n.setClearColor(0,1),n.clear(!1,!0,!1),O(s,hh),n.setRenderTarget(s),n.autoClear=!1,ve(P,de,Z),n.autoClear=!0,rn.tPeelViewZ.value=s.texture,Ui.value=2;for(let{mat:Ne}of V)Ne.depthWrite=!1,Ne.depthTest=!1,Ne.colorWrite=!0,Ne.transparent=!0,Ne.forceSinglePass=!0,$(Ne,{blending:Qi,blendSrc:tl,blendDst:ko,blendSrcAlpha:ss,blendDstAlpha:ko,blendEquation:Ni}),Pp(Ne);v(c);let Ue=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(c),ve(P,de,Z),n.autoClear=Ue,De.length&&c){for(let mt of De)mt.material?.resolution?.set(c.width,c.height);let Ne=de.layers.mask;de.layers.set(0),n.autoClear=!1,n.render(Ae,de),de.layers.mask=Ne,n.autoClear=!0}Fe=!0,d.uniforms.tSrc.value=c.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(y,l),n.autoClear=!0;let at=o;o=s,s=at}if(!Fe)return we();for(let{mat:ce,snap:Ue}of V)$(ce,Ue),ce.blendEquationAlpha=Ue.blendEquationAlpha,ce.depthWrite=Ue.depthWrite,ce.depthTest=Ue.depthTest,ce.transparent=Ue.transparent,ce.opacity=Ue.opacity,ce.colorWrite=Ue.colorWrite!==!1,ce.side=Ue.side,ce.forceSinglePass=Ue.forceSinglePass;for(let{mesh:ce,visible:Ue}of K)ce.visible=Ue;for(let{obj:ce,visible:Ue}of oe)ce.visible=Ue;se(),cs(me,!0),Ip(q,!1),Ui.value=0,P.background=Y,n.toneMapping=z,n.setRenderTarget(null),n.autoClear=!0,n.render(u,l);let Ve=Ge(P),it=Ve.map(ce=>ce.visible);return rt(Ve,!1),A&&me&&Rp(n,P,de,me,{opaqueEdgesOnly:De.length>0}),Ve.forEach((ce,Ue)=>{ce.visible=it[Ue]}),pe(P,de,me),n.autoClear=H,!0}function Ee(){fe(),U(),h.dispose(),f.geometry.dispose(),d.dispose(),x.geometry.dispose(),g.dispose(),m.geometry.dispose(),T.dispose(),M.geometry.dispose(),R.dispose()}return{render:Ze,dispose:Ee,MAX_PEELS:SR,MAX_PEELS_FAST:Ay,MAX_PEELS_HIGH:Lp,VIEW_Z_EPSILON:Cy,USE_DEPTH_PEEL:Ty}}var Ly="blueprints.materialMode",fh="solid",wl="shaded",ks="realistic",TR=[fh,wl,ks],AR={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],worktop:[236,233,226],hob:[24,24,27],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},Np={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,worktop:6,hob:7,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},RR=2e-6,CR=3,Cp="defined( USE_LOGARITHMIC_DEPTH_BUFFER ) || defined( USE_LOGDEPTHBUF )";function Op(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),r=n.customProgramCacheKey?.bind(n),s=RR.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if ${Cp}
	{
		float bpFaceBias = ${t}.0 * ${s};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${r?r():n.type}|bpLayerDepth-r${CR}-${t}`,n.needsUpdate=!0}var PR=[];function Dy(n,e,t){let i=new Set(n),r=Array.isArray(e)&&e.length?e:PR,s=typeof t=="function"?t:c=>c;function o(c){let l=[];for(let u of c){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),l.push({type:"leaf",id:u,label:s(u)});continue}let h=o(u.children||[]);h.length&&l.push({type:"group",id:u.id,label:s(u.id),children:h})}return l}let a=o(r);if(i.size){let c=[...i].sort((l,u)=>l.localeCompare(u)).map(l=>({type:"leaf",id:l,label:s(l)}));a.push({type:"group",id:"other",label:s("other"),children:c})}return a}function Ny(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let r of e)r.type==="group"&&t.set(r.id,dh(r));let i={};for(let[r,s]of Object.entries(n)){let o=t.get(r);if(o&&o.length)for(let a of o)i[a]=s;else i[r]=s}return i}function dh(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...dh(t));return e}function IR(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let r of n.children||[]){if(!r?.userData?.isEdgeOverlay||!r.material)continue;let s=Array.isArray(r.material)?r.material:[r.material];for(let o of s)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Bi(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),r=t.edgeMode??"transparent";for(let s of n){if(!s)continue;if(i<=0||s.userData?.bpIfcHidden){s.visible=!1;continue}if(s.visible=!0,!s.isMesh)continue;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o){if(!a)continue;let c=a.userData?.presetOpacity,l=typeof c=="number"?i*Math.max(0,Math.min(1,c)):i;l<1?(a.transparent=!0,a.opacity=l,a.depthWrite=!1,a.depthTest=!0,a.side=Nt,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Nt,a.forceSinglePass=!1,a.blending=Qi,a.userData.needsDepthPeel=!1),a.needsUpdate=!0}typeof s.userData.opaqueRenderOrder!="number"&&(s.userData.opaqueRenderOrder=s.renderOrder||0),s.renderOrder=i<1?0:s.userData.opaqueRenderOrder,IR(s,i,r);for(let a of s.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=s.renderOrder;let c=Array.isArray(a.material)?a.material:[a.material];for(let l of c)l&&(l.opacity=i,l.transparent=i<1,l.depthWrite=i>=1,l.depthTest=!0,l.forceSinglePass=i<1,l.side=Nt,l.needsUpdate=!0)}}}var LR={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},worktop:{color:[236,233,226],roughness:.3,metalness:0,clearcoat:.4,clearcoatRoughness:.2,map:"plaster"},hob:{color:[24,24,27],roughness:.1,metalness:0,clearcoat:.8,clearcoatRoughness:.05,map:"none"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},Dp=new Map;function DR(n){if(!n||n==="none")return null;let e=Dp.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let r=i.getContext("2d");if(!r)return null;if(n==="wood"){r.fillStyle="#c49858",r.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,c=130+o*17%50;r.strokeStyle=`rgba(${c-40}, ${c-60}, ${c-100}, 0.55)`,r.lineWidth=1.2,r.beginPath(),r.moveTo(0,o+a*.15),r.lineTo(t,o-a*.1),r.stroke()}for(let o=0;o<60;o++){let a=o*37%t,c=o*53%t;r.fillStyle="rgba(70, 40, 15, 0.22)",r.fillRect(a,c,2,7+o%5)}}else if(n==="foam"){r.fillStyle="#9ed468",r.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let c=o/7%2*3.5,l=2.4+a*o%5*.2;r.beginPath(),r.arc(a+c+3.5,o+3.5,l,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.55)",r.fill(),r.strokeStyle="rgba(40,90,30,0.35)",r.stroke()}}else if(n==="plaster"){let o=r.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let c=200+a*13%45;o.data[a]=c,o.data[a+1]=c-10,o.data[a+2]=c-22,o.data[a+3]=255}r.putImageData(o,0,0)}else if(n==="wool"){r.fillStyle="#88c860",r.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,c=o*91%t;r.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",r.fillRect(a,c,1+o%2,2+o%3)}}else if(n==="metal"){let o=r.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),r.fillStyle=o,r.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(0,a,t,2),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(0,a+4,t,2)}else if(n==="masonry"){r.fillStyle="#b88868",r.fillRect(0,0,t,t);let o=16,a=32;for(let c=0;c<t/o;c++){let l=c%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+l,f=c*o;r.fillStyle=`rgba(${170+(c+u)%3*18}, ${110+c%4*10}, ${70+u%3*12}, 0.75)`,r.fillRect(h+1,f+1,a-2,o-2),r.strokeStyle="rgba(70,45,30,0.55)",r.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let s=new Rr(i);return s.colorSpace=At,s.wrapS=Jn,s.wrapT=Jn,s.repeat.set(2.5,2.5),s.needsUpdate=!0,Dp.set(n,s),s}function Iy(n){return new Je(n[0]/255,n[1]/255,n[2]/255)}function NR(n){return AR[n]||[160,160,160]}function El(n,e,t=0){n.side=Nt,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],Op(n,t),Sl(n),n.needsUpdate=!0}function Oy(n){n.computeBoundingBox();let e=n.boundingBox,t=new D;e.getSize(t);let i=Math.max(t.x,1e-6),r=Math.max(t.y,1e-6),s=Math.max(t.z,1e-6),o=Math.max(i,r,s);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),c=n.getAttribute("normal");if(!a)return o;let l=n.getAttribute("uv");if(l&&l.count===a.count)return o;let u=new Float32Array(a.count*2),h=new D;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(c.getX(f)),x=Math.abs(c.getY(f)),y=Math.abs(c.getZ(f)),g,m;x>=d&&x>=y?(g=(h.x-e.min.x)/i,m=(h.z-e.min.z)/s):d>=y?(g=(h.z-e.min.z)/s,m=(h.y-e.min.y)/r):(g=(h.x-e.min.x)/i,m=(h.y-e.min.y)/r),u[f*2]=g,u[f*2+1]=m}return n.setAttribute("uv",new Ut(u,2)),o}function OR(n,e){let t=DR(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let r=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(r,r),i}function ph(n){let e=new Set(Dp.values());for(let t of n)if(t){for(let i of["map","normalMap","roughnessMap","aoMap"]){let r=t[i];r&&(!e.has(r)&&!r.userData?.bpShared&&r.dispose?.(),t[i]=null)}t.dispose?.()}}function Fy(n,e,t={}){let i=t.clippingPlanes??null,r=e===wl,s=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,c]of n){let l=NR(a),u=Np[a]??0,h=1e3;if(r)for(let g of c)g.isMesh&&g.geometry&&(h=Math.max(h,Oy(g.geometry)));let f=1,d;if(r){let g=LR[a]||{color:l,roughness:.7,metalness:0,map:"none"};f=typeof g.opacity=="number"?g.opacity:1;let m=Iy(g.color),_=OR(g.map||"none",h);g.clearcoat?d=new nn({color:m,map:_,roughness:g.roughness,metalness:g.metalness,clearcoat:g.clearcoat,clearcoatRoughness:g.clearcoatRoughness??.3,envMapIntensity:.85}):d=new fn({color:m,map:_,roughness:g.roughness,metalness:g.metalness,envMapIntensity:g.metalness>.05?1.1:.55})}else d=new tn({color:Iy(l)});El(d,i,u),d.userData.presetOpacity=f;let x=new Set;for(let g of c){if(!g.isMesh)continue;let m=g.material;if(m){let _=Array.isArray(m)?m:[m];for(let T of _)x.add(T)}g.material=d,g.userData.opaqueRenderOrder=u,g.renderOrder=u}x.delete(d),ph(x);let y=1;s&&(s instanceof Map?y=s.has(a)?s.get(a):1:typeof s[a]=="number"&&(y=s[a])),Bi(c,Number(y)||0,{edgeMode:o})}}function Uy(n,e){let i=(Array.isArray(n)?n:[n]).map(r=>{if(!r)return new fn({color:13421772,roughness:.65,metalness:0,side:ui});let s=r.color?r.color.clone():new Je(13421772),o=typeof r.roughness=="number"?r.roughness:.65,a=typeof r.metalness=="number"?r.metalness:0,c=null;r.map&&e&&(Oy(e),c=r.map.clone(),c.needsUpdate=!0);let l=new fn({color:s,map:c,roughness:o,metalness:a,side:ui,transparent:!!r.transparent,opacity:typeof r.opacity=="number"?r.opacity:1});return l.clippingPlanes=null,l.clipIntersection=!1,l});return Array.isArray(n)?i:i[0]}function By(){try{let n=localStorage.getItem(Ly);if(n&&TR.includes(n))return n}catch{}return fh}function ky(n){try{localStorage.setItem(Ly,n)}catch{}}var lr=1e-5,zy=new WeakMap;function di(n,e,t,i){let r=t/(t-i);return n.clone().lerp(e,r)}function FR(n,e,t){let[i,r,s]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(r),c=e.distanceToPoint(s),l=o>=-lr,u=a>=-lr,h=c>=-lr,f=(l?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,r,s]);return}if(f===0)return;let d=[i,r,s],x=[o,a,c],y=[l,u,h];if(f===1){let T=y.findIndex(Boolean),M=(T+1)%3,E=(T+2)%3,C=d[T],v=di(d[T],d[M],x[T],x[M]),R=di(d[T],d[E],x[T],x[E]);t.push([C,v,R]);return}let g=y.findIndex(T=>!T),m=(g+1)%3,_=(g+2)%3;if(y[m]){let T=d[m],M=d[_],E=di(d[g],d[m],x[g],x[m]),C=di(d[g],d[_],x[g],x[_]);t.push([T,M,E]),t.push([M,C,E])}else{let T=d[_],M=di(d[g],d[m],x[g],x[m]),E=di(d[g],d[_],x[g],x[_]);t.push([T,M,E])}}function UR(n,e){let[t,i,r]=n,s=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(r),c=s>=-lr,l=o>=-lr,u=a>=-lr,h=(c?1:0)+(l?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,r],d=[s,o,a],x=[c,l,u];if(h===1){let _=x.findIndex(Boolean),T=(_+1)%3,M=(_+2)%3;return[di(f[_],f[T],d[_],d[T]),di(f[_],f[M],d[_],d[M])]}let y=x.findIndex(_=>!_),g=(y+1)%3,m=(y+2)%3;return x[g]?[di(f[y],f[g],d[y],d[g]),di(f[y],f[m],d[y],d[m])]:[di(f[y],f[g],d[y],d[g]),di(f[y],f[m],d[y],d[m])]}function BR(n,e,t){let i=n.clone(),r=e.clone();for(let s of t){let o=s.distanceToPoint(i),a=s.distanceToPoint(r),c=o>=-lr,l=a>=-lr;if(c&&l)continue;if(!c&&!l)return null;let u=di(i,r,o,a);c?r=u:i=u}return i.distanceToSquared(r)<lr*lr?null:[i,r]}function kR(n,e){let t=n;for(let i of e){let r=[];for(let s of t)FR(s,i,r);if(t=r,t.length===0)break}return t}function zR(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new D,r=[],s=n.getIndex();function o(a,c,l){r.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone()])}if(s)for(let a=0;a<s.count;a+=3)o(s.getX(a),s.getX(a+1),s.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return r}function HR(n){let e=n.getAttribute("position");if(!e)return[];let t=new D,i=[],r=n.getIndex();function s(o,a,c){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,c).clone()])}if(r)for(let o=0;o<r.count;o+=3)s(r.getX(o),r.getX(o+1),r.getX(o+2));else for(let o=0;o<e.count;o+=3)s(o,o+1,o+2);return i}var zs=1e-6,Hy=2e-4,VR=2e-4,Vy=new WeakMap;function GR(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function Gy(n){let e=t=>Math.round(t/zs);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function qy(n,e){let t=GR(e),i=Vy.get(n);if(i&&i.key===t)return i;let r=[],s=[],o=zy.get(n);if(o||(o=HR(n),zy.set(n,o)),o.length&&e?.length)for(let c=0;c<e.length;c++){let l=e[c],u=e.filter((f,d)=>d!==c),h=[];for(let f of o){let d=UR(f,l);if(!d)continue;let x=u.length?BR(d[0],d[1],u):d;x&&(h.push(x),r.push(x[0].x,x[0].y,x[0].z,x[1].x,x[1].y,x[1].z))}s.push(h)}let a={key:t,segments:new Float32Array(r),perPlane:s};return Vy.set(n,a),a}function WR(n,e,t){let i=new Map;for(let c of n.keys())i.set(c,c);function r(c){let l=c;for(;i.get(l)!==l;){let u=i.get(i.get(l));i.set(l,u),l=u}return l}function s(c){let l=r(c),u=0;for(let h of t.get(l)||[])e[h].dead||u++;return u}function o(){let c=[];for(let l of n.keys())r(l)===l&&s(l)%2&&c.push(l);return c}let a=Hy*Hy;for(let c=0;c<e.length+2;c++){let l=o();if(l.length<2)break;let u=-1,h=-1,f=1/0;for(let m=0;m<l.length;m++){let _=n.get(l[m]);for(let T=m+1;T<l.length;T++){let M=n.get(l[T]),E=_.x-M.x,C=_.y-M.y,v=_.z-M.z,R=E*E+C*C+v*v;R<f&&(f=R,u=m,h=T)}}if(f>a)break;let d=l[u],x=l[h],y=n.get(d),g=n.get(x);y.add(g).multiplyScalar(.5);for(let m of t.get(x)||[]){let _=e[m];if(_.dead)continue;let T=r(_.a===x?_.b:_.a);if(T===d){_.dead=!0;continue}_.a=d,_.b=T,t.has(d)||t.set(d,[]),t.get(d).push(m)}i.set(x,d)}}function XR(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let c=Gy(o),l=Gy(a);if(c===l)continue;e.has(c)||e.set(c,o.clone()),e.has(l)||e.set(l,a.clone());let u=t.length;t.push({a:c,b:l,used:!1,dead:!1}),i.has(c)||i.set(c,[]),i.has(l)||i.set(l,[]),i.get(c).push(u),i.get(l).push(u)}WR(e,t,i);function r(o,a){let c=i.get(o)||[],l=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of c){if(t[d].used||t[d].dead)continue;if(!f)return d;let x=t[d],y=x.a===o?x.b:x.a,g=e.get(y),m=h.x-f.x,_=h.y-f.y,T=h.z-f.z,M=g.x-h.x,E=g.y-h.y,C=g.z-h.z,v=m*M+_*E+T*C;v>u&&(u=v,l=d)}return l}let s=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],c=[],l=o,u=t[l].a,h=u,f=null,d=!1,x=t.length+2;for(let y=0;y<x;y++){t[l].used=!0,c.push(l),a.push(e.get(u).clone());let g=t[l].a===u?t[l].b:t[l].a;if(g===h){d=!0;break}let m=r(g,u);if(m<0)break;f=u,u=g,l=m}d&&a.length>=3&&s.push(a)}return s}function qR(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new D(1,0,0):new D(0,1,0),i=new D().crossVectors(t,e).normalize(),r=new D().crossVectors(e,i).normalize();return{u:i,v:r,n:e}}function $R(n,e,t,i){return n.map(r=>{let s=r.clone().sub(e);return{x:s.dot(t),y:s.dot(i),p3:r}})}function YR(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function ZR(n){return YR(n)<0&&n.reverse(),n}function Wy(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){let o=t[r].y,a=t[s].y,c=t[r].x,l=t[s].x;o>e!=a>e&&n<(l-c)*(e-o)/(a-o+0)+c&&(i=!i)}return i}function Br(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function KR(n,e,t,i){let r=Br(n,e,t),s=Br(n,e,i),o=Br(t,i,n),a=Br(t,i,e);return r*s<0&&o*a<0}function Xy(n,e,t,i){let r=t.length;for(let s=0;s<r;s++){let o=(s+1)%r;if(!(i>=0&&(s===i||o===i))&&KR(n,e,t[s],t[o]))return!0}return!1}function jR(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],r=-1,s=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],x=n[(f+1)%o];if(d.y>i.y==x.y>i.y)continue;let y=x.y-d.y;if(Math.abs(y)<1e-15)continue;let g=(i.y-d.y)/y;if(g<-1e-8||g>1+1e-8)continue;let m=d.x+g*(x.x-d.x);m>=i.x-1e-8&&m<s&&(s=m,r=f)}let a=[];r>=0&&a.push(r,(r+1)%o);let c=0,l=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<l&&(l=d,c=f)}a.push(c);let u=-1;for(let f of a)if(!Xy(i,n[f],n,f)&&!Xy(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function Fp(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=zs*zs}function JR(n,e,t,i){if(Fp(n,e)||Fp(n,t)||Fp(n,i))return!1;let r=Br(e,t,n),s=Br(t,i,n),o=Br(i,e,n),a=r<-1e-14||s<-1e-14||o<-1e-14,c=r>1e-14||s>1e-14||o>1e-14;return!(a&&c)}function QR(n){let e=[];for(let r of n){let s=e[e.length-1];s&&(s.x-r.x)**2+(s.y-r.y)**2<zs*zs||e.push(r)}if(e.length>=2){let r=e[0],s=e[e.length-1];(r.x-s.x)**2+(r.y-s.y)**2<zs*zs&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let r=!1,s=e.length;for(let o=0;o<s;o++){let a=(o+s-1)%s,c=(o+1)%s,l=e[a],u=e[o],h=e[c],f=Br(l,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),r=!0;break}let d=!1;for(let x=0;x<s;x++)if(!(x===o||x===a||x===c)&&JR(e[x],l,u,h)){d=!0;break}if(!d){t.push([l.p3,u.p3,h.p3]),e.splice(o,1),r=!0;break}}if(!r)break}return e.length===3&&Br(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function eC(n,e,t){if(!n.length)return[];let{u:i,v:r,n:s}=qR(e.normal),o=n[0][0],a=n.map(u=>ZR($R(u,o,i,r))),c=a.map((u,h)=>{let f=u[0],d=0;for(let x=0;x<a.length;x++)x!==h&&Wy(f.x,f.y,a[x])&&d++;return d}),l=[];for(let u=0;u<a.length;u++){if(c[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(c[d]!==c[u]+1||!Wy(a[d][0].x,a[d][0].y,h))continue;let x=jR(h,a[d]);x&&(h=x)}let f=QR(h);for(let d of f)l.push(d.map(x=>x.clone().addScaledVector(s,t)))}return l}function $y(n,e){return!n||!e?.length?[]:qy(n,e).perPlane}function Yy(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=XR(n),r=eC(i,e,VR+Math.max(0,t));if(!r.length)return new Float32Array(0);let s=new Float32Array(r.length*9),o=0;for(let[a,c,l]of r)s[o++]=a.x,s[o++]=a.y,s[o++]=a.z,s[o++]=c.x,s[o++]=c.y,s[o++]=c.z,s[o++]=l.x,s[o++]=l.y,s[o++]=l.z;return s}function Ey(n,e){return!n||!e?.length?new Float32Array(0):qy(n,e).segments}function uh(n,e){if(!n?.length)return[];let t=new ot().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function tC(n){let e=new Float32Array(n.length*9),t=0;for(let[r,s,o]of n)e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new Bt;return i.setAttribute("position",new Ut(e,3)),i.computeVertexNormals(),i}function Zy(n,e){if(!n.visible||!n.geometry)return null;let t=zR(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?kR(t,e):t;if(i.length===0)return null;let r=tC(i),s=Uy(n.material,r),o=new dt(r,s);return o.name=n.name,o}var nC=5e-5;function gh(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function Up(n){return n?Array.isArray(n)?n[0]||null:n:null}function jy(n,e){let t;return n.isMeshPhysicalMaterial?t=new nn:n.isMeshStandardMaterial?t=new fn:t=new tn,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=Nt,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,Op(t,n.userData?.layerDepthBias||0),Sl(t),t.needsUpdate=!0,t}function mh(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function iC(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function rC(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function Jy(n,e){let t=new Set;for(let i of n){let r=i.parent;if(!r||t.has(r))continue;t.add(r);let s=rC(r,e);if(s)return s}return null}function Ky(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let r=Up(i.material);r&&(e.color&&r.color&&r.color.copy(e.color),r.opacity=typeof e.opacity=="number"?e.opacity:1,r.transparent=!!e.transparent,r.depthWrite=e.depthWrite!==!1,r.depthTest=e.depthTest!==!1,r.forceSinglePass=!!e.forceSinglePass,r.side=Nt,r.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function sC(n,e,t,i){let r=e.filter(d=>d?.isMesh&&d.visible&&!gh(d)&&d.geometry),s=Jy(e,n);if(!r.length||!t.length){s&&mh(s);return}let o=r[0],a=o.parent;if(!a)return;s&&s.parent!==a&&mh(s);let c=s&&s.parent===a?s:new Tt;for(let d of[...c.children])mh(d);c.parent||(c.name=`${n}__caps`,c.userData.isSectionCap=!0,c.userData.capLabel=n,a.add(c));let l=Up(o.material);if(!l)return;a.updateWorldMatrix(!0,!0);let u=new ot().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of r){d.updateWorldMatrix(!0,!1);let x=uh(t,d.matrixWorld),y=$y(d.geometry,x);for(let g=0;g<t.length;g++){let m=y[g]||[];for(let[_,T]of m)f[g].push([_.clone().applyMatrix4(d.matrixWorld),T.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let x=Yy(f[d],t[d],h*nC);if(x.length<9)continue;for(let _=0;_<x.length;_+=3){let T=new D(x[_],x[_+1],x[_+2]).applyMatrix4(u);x[_]=T.x,x[_+1]=T.y,x[_+2]=T.z}let y=new Bt;y.setAttribute("position",new Ut(x,3)),y.computeVertexNormals();let g=t.filter((_,T)=>T!==d),m=new dt(y,jy(l,g));m.name=`${n}__cap${d}`,m.userData.isSectionCap=!0,m.userData.capPlaneIndex=d,m.userData.capLabel=n,m.renderOrder=o.renderOrder,m.raycast=()=>{},c.add(m)}c.userData.bpCapSig=i,c.userData.bpCapMatUuid=l.uuid,c.visible=c.children.length>0}function Bp(n,e){let t=e||[],i=iC(t);for(let[r,s]of n){let o=(s||[]).filter(u=>u&&!gh(u));if(!o.length)continue;let a=o.filter(u=>u.visible),c=Jy(o,r);if(!t.length||!a.length){c&&mh(c);continue}let l=Up(a[0].material);if(c&&c.userData.bpCapSig===i&&l&&c.userData.bpCapMatUuid===l.uuid&&c.children.length){Ky(c,l,a[0].renderOrder||0);continue}if(c&&c.userData.bpCapSig===i&&l&&c.children.length){for(let u of c.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((y,g)=>g!==f):t;u.material=jy(l,d);let x=Array.isArray(h)?h:[h];for(let y of x)y&&(y.map=null),y?.dispose?.()}c.userData.bpCapMatUuid=l.uuid,Ky(c,l,a[0].renderOrder||0);continue}sC(r,o,t,i)}}var oC=2,aC=.45,Qy=.015;function kp(n){let e=new vt().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:Qy};let t=new D;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),r=i>oC?aC/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:r,liftM:Qy}}function e_(n,e=kp(n)){let{cx:t,cz:i,minY:r,scale:s,liftM:o}=e;return n.position.set(-t*s,-r*s+o,-i*s),n.scale.setScalar(s),n.updateMatrixWorld(!0),e}var lC=`
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
`,t_=!1;function cC(){if(t_)return;t_=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=lC,document.head.appendChild(n)}function n_(n){cC();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),r=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function c(){return r.matches}function l(){return a}function u(){for(let pe of o)pe(a)}function h(pe){o.push(pe),pe(a)}function f(){if(!e||!i)return;let pe=document.getElementById("sheet-inspector"),ke=document.getElementById("sheet-main");if(pe&&!pe.hidden&&ke?.hidden){let A=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(A)&&A>0)return A}let Ze=document.getElementById("section-view"),Ee=document.getElementById("section-cuts"),P=t?.offsetHeight||22,de=16,me=0;if(Ze&&(me+=Ze.offsetHeight),Ee){let A=Ee.querySelector(".sheet-title"),w=Ee.querySelector(".cut-row");me+=32,A&&(me+=A.offsetHeight+8),w?me+=w.offsetHeight:me+=Ee.offsetHeight}let Re=P+me+de,ae=window.innerHeight||640,p=Math.round(ae*.28),N=Math.round(ae*.45),Z=Math.max(p,Math.min(N,Math.round(Re)));return e.style.setProperty("--sheet-partial-h",`${Z}px`),Z}function d(){f(),!c()&&a==="partial"&&u()}function x(pe){let ke=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${pe}`).trim(),Ze=parseFloat(ke);return Number.isFinite(Ze)?Ze:0}function y(){let pe={top:0,right:0,bottom:0,left:0};if(!e)return pe;if(c()){if(a!=="open")return pe;let Ze=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(Ze)),bottom:0,left:0}}if(a!=="partial")return pe;let ke=Math.round(re()+x("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,ke)),left:0}}function g(pe,ke={}){if(!e)return;(c()?["closed","open"]:["peek","partial","full"]).includes(pe)||(pe=c()?"open":"peek"),a=pe,e.dataset.detent=pe,e.classList.toggle("sheet-open",pe!=="peek"&&pe!=="closed"),document.body.classList.toggle("sheet-open",pe!=="peek"&&pe!=="closed"),M(),ke.silent||u()}function m(){c()?g("open"):g("peek"),f()}let _=document.getElementById("top-chrome"),T=document.getElementById("sheet-toggle");if(!T&&_){let pe=_.querySelector(".top-chrome-end");pe||(pe=document.createElement("div"),pe.className="top-chrome-end",_.append(pe)),T=document.createElement("button"),T.type="button",T.id="sheet-toggle",T.className="chrome-btn sheet-toggle",pe.append(T)}function M(){if(!T)return;let pe=a==="open";T.setAttribute("aria-expanded",pe?"true":"false"),T.setAttribute("aria-label",pe?"Hide controls":"Show controls"),T.title=pe?"Hide controls":"Show controls",T.textContent=pe?"\u203A":"\u2039"}T?.addEventListener("click",()=>{c()&&g(a==="open"?"closed":"open")});let E=!1,C=null,v=!1,R=!1,O=0,U=0,W=0,te=0,ee="peek",B=0,$=0,k=0,J=0,ge=0,ie=null,j=12,ue=28,Ae='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function De(){return Math.max(t?.offsetHeight||34,34)+8}function re(){return f()||window.innerHeight*.38}function Me(){let pe=window.innerHeight||640;return Math.min(pe*.92,pe-72)}function fe(){return e?.offsetWidth||0}function Q(pe){return pe instanceof Element?!!pe.closest(Ae):!1}function le(){if(c()){g(a==="open"?"closed":"open");return}g(a==="peek"?"partial":a==="partial"?"full":"peek")}function Ce(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Oe(pe,ke,Ze){if(e){E=!0,v=!1,C=ke,R=!1,ee=a,O=pe.clientY,U=pe.clientX,B=O,$=U,k=performance.now(),J=0,ge=0,te=Ze,ie=pe.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${te}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(pe.pointerId)}catch{}}}function Le(pe){if(!(!e||!t)&&!(pe.target!==t&&!t.contains(pe.target)&&pe.target!==e)){E=!0,v=!1,C="narrow",R=!1,ee=a,e.classList.add("is-dragging"),O=pe.clientY,U=pe.clientX,B=O,$=U,k=performance.now(),J=0,ge=0,W=e.getBoundingClientRect().height,ie=pe.pointerId;try{t.setPointerCapture(pe.pointerId)}catch{}pe.preventDefault()}}function ze(pe){if(!e||pe.pointerType==="mouse"&&pe.button!==0||pe.target instanceof Element&&pe.target.closest(".chrome-btn"))return;let ke=fe();if(a==="closed"){let Ze=window.innerWidth-ue-x("r");if(pe.clientX<Ze)return;Oe(pe,"wide-open",ke),pe.preventDefault();return}e.contains(pe.target)&&(Q(pe.target)||(E=!0,v=!0,C="wide-close",R=!1,ee=a,O=pe.clientY,U=pe.clientX,B=O,$=U,k=performance.now(),J=0,ge=0,te=0,ie=pe.pointerId))}function ve(pe){c()?ze(pe):Le(pe)}function Te(pe){if(!E||!e||ie!=null&&pe.pointerId!==ie)return;let ke=performance.now(),Ze=Math.max(1,ke-k),Ee=Math.hypot(pe.clientX-U,pe.clientY-O);if(v){if(Ee<=j)return;let Re=pe.clientX-U,ae=pe.clientY-O;if(Math.abs(Re)<Math.abs(ae)*1.15||Re<=0){E=!1,v=!1,C=null,ie=null;return}v=!1,R=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(pe.pointerId)}catch{}pe.preventDefault()}if(Ee>j&&(R=!0),C==="narrow"){let Re=O-pe.clientY;J=(B-pe.clientY)/Ze*1e3,B=pe.clientY,k=ke;let ae=De(),p=Me(),N=Math.max(ae,Math.min(p,W+Re));e.style.height=`${N}px`;return}let P=pe.clientX-U;ge=(pe.clientX-$)/Ze*1e3,$=pe.clientX,k=ke;let de=fe(),me=Math.max(0,Math.min(de,te+P));e.style.transform=`translateX(${me}px)`}function He(pe,ke){let Ze=[{name:"peek",h:De()},{name:"partial",h:re()},{name:"full",h:Me()}],Ee=Math.max(0,Ze.findIndex(p=>p.name===ee)),P=Ze[Ee].h;if(Math.abs(pe-P)<36&&Math.abs(ke)<1100)return ee;let de=pe+ke*.05,me=(Ze[0].h+Ze[1].h)/2,Re=(Ze[1].h+Ze[2].h)/2,ae=de<me?0:de<Re?1:2;if(ae>Ee+1&&(ae=Ee+1),ae<Ee-1&&(ae=Ee-1),ae===2&&Ee<2){let p=Re+(Ze[2].h-Re)*.25;pe<p&&ke<1400&&(ae=1)}return Ze[ae].name}function Be(pe,ke){let Ze=fe();return Ze<=0||Math.abs(pe-(ee==="closed"?Ze:0))<28&&Math.abs(ke)<800?ee:ke>900?"closed":ke<-900?"open":pe>Ze*.45?"closed":"open"}function We(pe){if(!E||!e||ie!=null&&pe.pointerId!==ie)return;let ke=C,Ze=v;if(E=!1,v=!1,C=null,ie=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),Ze&&!R)return;if(!R){ke==="narrow"?(e.style.height="",le()):ke==="wide-open"?(Ce(),g("open")):Ce();return}if(ke==="narrow"){let de=e.getBoundingClientRect().height;e.style.height="",g(He(de,J));return}let Ee=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),P=Ee?parseFloat(Ee[1]):0;Ce(),g(Be(P,ge))}t?.addEventListener("pointerdown",pe=>{c()||ve(pe)}),t?.addEventListener("pointermove",Te),t?.addEventListener("pointerup",We),t?.addEventListener("pointercancel",We),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",pe=>{c()&&ze(pe)},{capture:!0}),document.addEventListener("pointermove",Te,{capture:!0}),document.addEventListener("pointerup",We,{capture:!0}),document.addEventListener("pointercancel",We,{capture:!0});let Ge=()=>{e&&(e.style.height=""),Ce(),i&&(i.style.overflow=""),m()};r.addEventListener?r.addEventListener("change",Ge):r.addListener(Ge);function rt(){n(s.matches)}return rt(),s.addEventListener?s.addEventListener("change",rt):s.addListener(rt),window.addEventListener("resize",()=>{f(),u()}),m(),M(),{getDetent:l,getSafeInsets:y,onDetentChange:h,refreshPartialHeight:d,setDetent:g}}function xh(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,r=!!n.thumbScrubOnly,s=Tl(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let c=document.createElement("div");c.className="coop-range-fill";let l=document.createElement("div");l.className="coop-range-thumb",a.append(c,l),o.append(a);let u=10,h=14,f=null,d=0,x=0,y=!1,g=!1,m=!1,_=!0;function T(){let B=`${(t===e?0:(s-e)/(t-e))*100}%`;c.style.width=B,l.style.left=B,o.setAttribute("aria-valuenow",String(s));let $=n.formatAriaValue?.(s)??String(s);o.setAttribute("aria-valuetext",$)}function M(ee,B){let $=typeof l.getBoundingClientRect=="function"?l.getBoundingClientRect():null;return!$||!($.width>0)||!($.height>0)?!0:ee>=$.left-h&&ee<=$.right+h&&B>=$.top-h&&B<=$.bottom+h}function E(ee,B="input"){let $=uC(Tl(ee,e,t),e,t,i);if($===s&&B==="silent"){T();return}s=$,T(),(B==="input"||B==="change")&&n.onInput?.(s),B==="change"&&n.onChange?.(s)}function C(ee){let B=a.getBoundingClientRect(),$=Math.max(B.width,1),k=Tl((ee-B.left)/$,0,1);return e+k*(t-e)}function v(ee){if(f==null)return;let B=g;f=null,y=!1,g=!1,_=!0,B&&n.onScrubEnd?.(),ee&&B&&n.onChange?.(s)}function R(ee){f==null&&(ee.pointerType==="mouse"&&ee.button!==0||(f=ee.pointerId,d=ee.clientX,x=ee.clientY,m=!1,y=!1,g=!1,_=!r||M(ee.clientX,ee.clientY)))}function O(ee){if(f!==ee.pointerId)return;let B=ee.clientX-d,$=ee.clientY-x;if(!m&&Math.hypot(B,$)>u&&(m=!0),!y){if(!m)return;if(ee.pointerType==="touch"&&Math.abs($)>=Math.abs(B)){v(!1);return}if(!_){v(!1);return}y=!0,g=!0,n.onScrubStart?.();try{o.setPointerCapture(ee.pointerId)}catch{}}E(C(ee.clientX),"input"),ee.preventDefault()}function U(ee){if(f===ee.pointerId){if(!m&&!g){f=null,y=!1,g=!1,_=!0,n.onTap?.();return}v(!0)}}function W(ee){f===ee.pointerId&&v(!1)}function te(ee){let B=t-e,$=i>0?i:B/100,k=B/10,J=s;switch(ee.key){case"ArrowLeft":case"ArrowDown":J=s-$;break;case"ArrowRight":case"ArrowUp":J=s+$;break;case"PageDown":J=s-k;break;case"PageUp":J=s+k;break;case"Home":J=e;break;case"End":J=t;break;case"Enter":case" ":ee.preventDefault(),n.onTap?.();return;default:return}ee.preventDefault(),E(J,"change")}return o.addEventListener("pointerdown",R),o.addEventListener("pointermove",O),o.addEventListener("pointerup",U),o.addEventListener("pointercancel",W),o.addEventListener("keydown",te),T(),{el:o,get value(){return s},set value(ee){E(ee,"silent")},refresh(){T()}}}function Tl(n,e,t){return Math.min(t,Math.max(e,n))}function uC(n,e,t,i){if(!(i>0))return Tl(n,e,t);let r=Math.round((n-e)/i),s=Number((e+r*i).toPrecision(12));return Tl(s,e,t)}var i_="blueprints.locale",hC={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",worktop:"Worktop",hob:"Hob",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},fC={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",worktop:"Pracovn\xED deska",hob:"Varn\xE1 deska",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},dC={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.shaded":"Shaded","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","home.title":"Home","home.live":"Live","home.off":"Off","home.on":"On","home.statusOff":"Offline model. Taps only change this view.","home.statusConnecting":"Connecting to Home\u2026","home.statusLive":"Live: state from Home. Taps send commands.","home.statusLiveNoSim":"Live: state from Home. Rocker presses are off on this server.","home.statusUnreachable":"Home unreachable. Showing the offline model; retrying.","home.failed":"Home refused the command","home.deviceOffline":"Device offline (last known state)","home.unknown":"Unknown","home.level":"Level","home.warm":"Warm","home.cool":"Cool","home.lastEvent":"Last event","home.noEvents":"No presses yet","home.contactClosed":"Closed (contact)","home.contactOpen":"Open (no contact)","home.occupied":"Occupied","home.vacant":"Vacant","home.closedPct":"Closed","home.up":"Up","home.down":"Down","home.stop":"Stop","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},pC={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.shaded":"St\xEDnovan\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","home.title":"D\u016Fm","home.live":"\u017Div\u011B","home.off":"Vyp.","home.on":"Zap.","home.statusOff":"Offline model. Klepnut\xED m\u011Bn\xED jen tento pohled.","home.statusConnecting":"P\u0159ipojuji se k Home\u2026","home.statusLive":"\u017Div\u011B: stav z Home. Klepnut\xED pos\xEDlaj\xED p\u0159\xEDkazy.","home.statusLiveNoSim":"\u017Div\u011B: stav z Home. Stisky vyp\xEDna\u010D\u016F jsou na tomto serveru vypnut\xE9.","home.statusUnreachable":"Home nedostupn\xFD. Zobrazuji offline model a zkou\u0161\xEDm znovu.","home.failed":"Home p\u0159\xEDkaz odm\xEDtl","home.deviceOffline":"Za\u0159\xEDzen\xED offline (posledn\xED zn\xE1m\xFD stav)","home.unknown":"Nezn\xE1m\xFD","home.level":"Jas","home.warm":"Tepl\xE1","home.cool":"Studen\xE1","home.lastEvent":"Posledn\xED ud\xE1lost","home.noEvents":"Zat\xEDm bez stisku","home.contactClosed":"Zav\u0159eno (kontakt)","home.contactOpen":"Otev\u0159eno (bez kontaktu)","home.occupied":"Obsazeno","home.vacant":"Volno","home.closedPct":"Zav\u0159eno","home.up":"Nahoru","home.down":"Dol\u016F","home.stop":"Stop","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},zp={en:{...dC,...hC},cs:{...pC,...fC}},Ko=r_(),Hp=new Set;function r_(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function mC(){try{let n=localStorage.getItem(i_);if(n==="en"||n==="cs")return n}catch{}return r_()}function gC(n){try{localStorage.setItem(i_,n)}catch{}}function yh(){return Ko}function s_(n){if(!(n!=="en"&&n!=="cs")&&n!==Ko){Ko=n,gC(n);for(let e of Hp)try{e()}catch{}}}function Vp(n){return Hp.add(n),()=>Hp.delete(n)}function o_(){return Ko=mC(),Ko}function Ot(n){let e=zp[Ko]||zp.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=zp.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function Gp(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Ot(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Ot(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Ot(i))})}function xC(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kn={},_h={},us={},a_;function Al(){if(a_)return us;a_=1;function n(o){return typeof o>"u"||o===null}function e(o){return typeof o=="object"&&o!==null}function t(o){return Array.isArray(o)?o:n(o)?[]:[o]}function i(o,a){if(a){let c=Object.keys(a);for(let l=0,u=c.length;l<u;l+=1){let h=c[l];o[h]=a[h]}}return o}function r(o,a){let c="";for(let l=0;l<a;l+=1)c+=o;return c}function s(o){return o===0&&Number.NEGATIVE_INFINITY===1/o}return us.isNothing=n,us.isObject=e,us.toArray=t,us.repeat=r,us.isNegativeZero=s,us.extend=i,us}var Wp,l_;function Rl(){if(l_)return Wp;l_=1;function n(t,i){let r="",s=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(r+='in "'+t.mark.name+'" '),r+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!i&&t.mark.snippet&&(r+=`

`+t.mark.snippet),s+" "+r):s}function e(t,i){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=i,this.message=n(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e.prototype.toString=function(i){return this.name+": "+n(this,i)},Wp=e,Wp}var Xp,c_;function yC(){if(c_)return Xp;c_=1;let n=Al();function e(r,s,o,a,c){let l="",u="",h=Math.floor(c/2)-1;return a-s>h&&(l=" ... ",s=a-h+l.length),o-a>h&&(u=" ...",o=a+h-u.length),{str:l+r.slice(s,o).replace(/\t/g,"\u2192")+u,pos:a-s+l.length}}function t(r,s){return n.repeat(" ",s-r.length)+r}function i(r,s){if(s=Object.create(s||null),!r.buffer)return null;s.maxLength||(s.maxLength=79),typeof s.indent!="number"&&(s.indent=1),typeof s.linesBefore!="number"&&(s.linesBefore=3),typeof s.linesAfter!="number"&&(s.linesAfter=2);let o=/\r?\n|\r|\0/g,a=[0],c=[],l,u=-1;for(;l=o.exec(r.buffer);)c.push(l.index),a.push(l.index+l[0].length),r.position<=l.index&&u<0&&(u=a.length-2);u<0&&(u=a.length-1);let h="",f=Math.min(r.line+s.linesAfter,c.length).toString().length,d=s.maxLength-(s.indent+f+3);for(let y=1;y<=s.linesBefore&&!(u-y<0);y++){let g=e(r.buffer,a[u-y],c[u-y],r.position-(a[u]-a[u-y]),d);h=n.repeat(" ",s.indent)+t((r.line-y+1).toString(),f)+" | "+g.str+`
`+h}let x=e(r.buffer,a[u],c[u],r.position,d);h+=n.repeat(" ",s.indent)+t((r.line+1).toString(),f)+" | "+x.str+`
`,h+=n.repeat("-",s.indent+f+3+x.pos)+`^
`;for(let y=1;y<=s.linesAfter&&!(u+y>=c.length);y++){let g=e(r.buffer,a[u+y],c[u+y],r.position-(a[u]-a[u+y]),d);h+=n.repeat(" ",s.indent)+t((r.line+y+1).toString(),f)+" | "+g.str+`
`}return h.replace(/\n$/,"")}return Xp=i,Xp}var qp,u_;function Yn(){if(u_)return qp;u_=1;let n=Rl(),e=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function i(s){let o={};return s!==null&&Object.keys(s).forEach(function(a){s[a].forEach(function(c){o[String(c)]=a})}),o}function r(s,o){if(o=o||{},Object.keys(o).forEach(function(a){if(e.indexOf(a)===-1)throw new n('Unknown option "'+a+'" is met in definition of "'+s+'" YAML type.')}),this.options=o,this.tag=s,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(a){return a},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.representName=o.representName||null,this.defaultStyle=o.defaultStyle||null,this.multi=o.multi||!1,this.styleAliases=i(o.styleAliases||null),t.indexOf(this.kind)===-1)throw new n('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}return qp=r,qp}var $p,h_;function L_(){if(h_)return $p;h_=1;let n=Rl(),e=Yn();function t(s,o){let a=[];return s[o].forEach(function(c){let l=a.length;a.forEach(function(u,h){u.tag===c.tag&&u.kind===c.kind&&u.multi===c.multi&&(l=h)}),a[l]=c}),a}function i(){let s={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function o(a){a.multi?(s.multi[a.kind].push(a),s.multi.fallback.push(a)):s[a.kind][a.tag]=s.fallback[a.tag]=a}for(let a=0,c=arguments.length;a<c;a+=1)arguments[a].forEach(o);return s}function r(s){return this.extend(s)}return r.prototype.extend=function(o){let a=[],c=[];if(o instanceof e)c.push(o);else if(Array.isArray(o))c=c.concat(o);else if(o&&(Array.isArray(o.implicit)||Array.isArray(o.explicit)))o.implicit&&(a=a.concat(o.implicit)),o.explicit&&(c=c.concat(o.explicit));else throw new n("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");a.forEach(function(u){if(!(u instanceof e))throw new n("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new n("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new n("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(u){if(!(u instanceof e))throw new n("Specified list of YAML types (or a single Type object) contains a non-Type object.")});let l=Object.create(r.prototype);return l.implicit=(this.implicit||[]).concat(a),l.explicit=(this.explicit||[]).concat(c),l.compiledImplicit=t(l,"implicit"),l.compiledExplicit=t(l,"explicit"),l.compiledTypeMap=i(l.compiledImplicit,l.compiledExplicit),l},$p=r,$p}var Yp,f_;function D_(){if(f_)return Yp;f_=1;let n=Yn();return Yp=new n("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Yp}var Zp,d_;function N_(){if(d_)return Zp;d_=1;let n=Yn();return Zp=new n("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Zp}var Kp,p_;function O_(){if(p_)return Kp;p_=1;let n=Yn();return Kp=new n("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Kp}var jp,m_;function F_(){if(m_)return jp;m_=1;let n=L_();return jp=new n({explicit:[D_(),N_(),O_()]}),jp}var Jp,g_;function U_(){if(g_)return Jp;g_=1;let n=Yn();function e(r){if(r===null)return!0;let s=r.length;return s===1&&r==="~"||s===4&&(r==="null"||r==="Null"||r==="NULL")}function t(){return null}function i(r){return r===null}return Jp=new n("tag:yaml.org,2002:null",{kind:"scalar",resolve:e,construct:t,predicate:i,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Jp}var Qp,x_;function B_(){if(x_)return Qp;x_=1;let n=Yn();function e(r){if(r===null)return!1;let s=r.length;return s===4&&(r==="true"||r==="True"||r==="TRUE")||s===5&&(r==="false"||r==="False"||r==="FALSE")}function t(r){return r==="true"||r==="True"||r==="TRUE"}function i(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return Qp=new n("tag:yaml.org,2002:bool",{kind:"scalar",resolve:e,construct:t,predicate:i,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),Qp}var em,y_;function k_(){if(y_)return em;y_=1;let n=Al(),e=Yn();function t(l){return l>=48&&l<=57||l>=65&&l<=70||l>=97&&l<=102}function i(l){return l>=48&&l<=55}function r(l){return l>=48&&l<=57}function s(l){if(l===null)return!1;let u=l.length,h=0,f=!1;if(!u)return!1;let d=l[h];if((d==="-"||d==="+")&&(d=l[++h]),d==="0"){if(h+1===u)return!0;if(d=l[++h],d==="b"){for(h++;h<u;h++){if(d=l[h],d!=="0"&&d!=="1")return!1;f=!0}return f&&isFinite(o(l))}if(d==="x"){for(h++;h<u;h++){if(!t(l.charCodeAt(h)))return!1;f=!0}return f&&isFinite(o(l))}if(d==="o"){for(h++;h<u;h++){if(!i(l.charCodeAt(h)))return!1;f=!0}return f&&isFinite(o(l))}}for(;h<u;h++){if(!r(l.charCodeAt(h)))return!1;f=!0}return f?isFinite(o(l)):!1}function o(l){let u=l,h=1,f=u[0];if((f==="-"||f==="+")&&(f==="-"&&(h=-1),u=u.slice(1),f=u[0]),u==="0")return 0;if(f==="0"){if(u[1]==="b")return h*parseInt(u.slice(2),2);if(u[1]==="x")return h*parseInt(u.slice(2),16);if(u[1]==="o")return h*parseInt(u.slice(2),8)}return h*parseInt(u,10)}function a(l){return o(l)}function c(l){return Object.prototype.toString.call(l)==="[object Number]"&&l%1===0&&!n.isNegativeZero(l)}return em=new e("tag:yaml.org,2002:int",{kind:"scalar",resolve:s,construct:a,predicate:c,represent:{binary:function(l){return l>=0?"0b"+l.toString(2):"-0b"+l.toString(2).slice(1)},octal:function(l){return l>=0?"0o"+l.toString(8):"-0o"+l.toString(8).slice(1)},decimal:function(l){return l.toString(10)},hexadecimal:function(l){return l>=0?"0x"+l.toString(16).toUpperCase():"-0x"+l.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),em}var tm,__;function z_(){if(__)return tm;__=1;let n=Al(),e=Yn(),t=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),i=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(l){return l===null||!t.test(l)?!1:isFinite(parseFloat(l,10))?!0:i.test(l)}function s(l){let u=l.toLowerCase(),h=u[0]==="-"?-1:1;return"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?h===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:h*parseFloat(u,10)}let o=/^[-+]?[0-9]+e/;function a(l,u){if(isNaN(l))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===l)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===l)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(n.isNegativeZero(l))return"-0.0";let h=l.toString(10);return o.test(h)?h.replace("e",".e"):h}function c(l){return Object.prototype.toString.call(l)==="[object Number]"&&(l%1!==0||n.isNegativeZero(l))}return tm=new e("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:s,predicate:c,represent:a,defaultStyle:"lowercase"}),tm}var nm,v_;function H_(){return v_||(v_=1,nm=F_().extend({implicit:[U_(),B_(),k_(),z_()]})),nm}var im,b_;function V_(){return b_||(b_=1,im=H_()),im}var rm,M_;function G_(){if(M_)return rm;M_=1;let n=Yn(),e=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function i(o){return o===null?!1:e.exec(o)!==null||t.exec(o)!==null}function r(o){let a=0,c=null,l=e.exec(o);if(l===null&&(l=t.exec(o)),l===null)throw new Error("Date resolve error");let u=+l[1],h=+l[2]-1,f=+l[3];if(!l[4])return new Date(Date.UTC(u,h,f));let d=+l[4],x=+l[5],y=+l[6];if(l[7]){for(a=l[7].slice(0,3);a.length<3;)a+="0";a=+a}if(l[9]){let m=+l[10],_=+(l[11]||0);c=(m*60+_)*6e4,l[9]==="-"&&(c=-c)}let g=new Date(Date.UTC(u,h,f,d,x,y,a));return c&&g.setTime(g.getTime()-c),g}function s(o){return o.toISOString()}return rm=new n("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:i,construct:r,instanceOf:Date,represent:s}),rm}var sm,S_;function W_(){if(S_)return sm;S_=1;let n=Yn();function e(t){return t==="<<"||t===null}return sm=new n("tag:yaml.org,2002:merge",{kind:"scalar",resolve:e}),sm}var om,w_;function X_(){if(w_)return om;w_=1;let n=Yn(),e=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function t(o){if(o===null)return!1;let a=0,c=o.length,l=e;for(let u=0;u<c;u++){let h=l.indexOf(o.charAt(u));if(!(h>64)){if(h<0)return!1;a+=6}}return a%8===0}function i(o){let a=o.replace(/[\r\n=]/g,""),c=a.length,l=e,u=0,h=[];for(let d=0;d<c;d++)d%4===0&&d&&(h.push(u>>16&255),h.push(u>>8&255),h.push(u&255)),u=u<<6|l.indexOf(a.charAt(d));let f=c%4*6;return f===0?(h.push(u>>16&255),h.push(u>>8&255),h.push(u&255)):f===18?(h.push(u>>10&255),h.push(u>>2&255)):f===12&&h.push(u>>4&255),new Uint8Array(h)}function r(o){let a="",c=0,l=o.length,u=e;for(let f=0;f<l;f++)f%3===0&&f&&(a+=u[c>>18&63],a+=u[c>>12&63],a+=u[c>>6&63],a+=u[c&63]),c=(c<<8)+o[f];let h=l%3;return h===0?(a+=u[c>>18&63],a+=u[c>>12&63],a+=u[c>>6&63],a+=u[c&63]):h===2?(a+=u[c>>10&63],a+=u[c>>4&63],a+=u[c<<2&63],a+=u[64]):h===1&&(a+=u[c>>2&63],a+=u[c<<4&63],a+=u[64],a+=u[64]),a}function s(o){return Object.prototype.toString.call(o)==="[object Uint8Array]"}return om=new n("tag:yaml.org,2002:binary",{kind:"scalar",resolve:t,construct:i,predicate:s,represent:r}),om}var am,E_;function q_(){if(E_)return am;E_=1;let n=Yn(),e=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function i(s){if(s===null)return!0;let o={},a=s;for(let c=0,l=a.length;c<l;c+=1){let u=a[c],h=!1;if(t.call(u)!=="[object Object]")return!1;let f;for(f in u)if(e.call(u,f))if(!h)h=!0;else return!1;if(!h||e.call(o,f))return!1;Object.defineProperty(o,f,{value:!0})}return!0}function r(s){return s!==null?s:[]}return am=new n("tag:yaml.org,2002:omap",{kind:"sequence",resolve:i,construct:r}),am}var lm,T_;function $_(){if(T_)return lm;T_=1;let n=Yn(),e=Object.prototype.toString;function t(r){if(r===null)return!0;let s=r,o=new Array(s.length);for(let a=0,c=s.length;a<c;a+=1){let l=s[a];if(e.call(l)!=="[object Object]")return!1;let u=Object.keys(l);if(u.length!==1)return!1;o[a]=[u[0],l[u[0]]]}return!0}function i(r){if(r===null)return[];let s=r,o=new Array(s.length);for(let a=0,c=s.length;a<c;a+=1){let l=s[a],u=Object.keys(l);o[a]=[u[0],l[u[0]]]}return o}return lm=new n("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:i}),lm}var cm,A_;function Y_(){if(A_)return cm;A_=1;let n=Yn(),e=Object.prototype.hasOwnProperty;function t(r){if(r===null)return!0;let s=r;for(let o in s)if(e.call(s,o)&&s[o]!==null)return!1;return!0}function i(r){return r!==null?r:{}}return cm=new n("tag:yaml.org,2002:set",{kind:"mapping",resolve:t,construct:i}),cm}var um,R_;function fm(){return R_||(R_=1,um=V_().extend({implicit:[G_(),W_()],explicit:[X_(),q_(),$_(),Y_()]})),um}var C_;function _C(){if(C_)return _h;C_=1;let n=Al(),e=Rl(),t=yC(),i=fm(),r=Object.prototype.hasOwnProperty,s=1,o=2,a=3,c=4,l=1,u=2,h=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,d=/[\x85\u2028\u2029]/,x=/[,\[\]{}]/,y=/^(?:!|!!|![0-9A-Za-z-]+!)$/,g=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function m(p){return Object.prototype.toString.call(p)}function _(p){return p===10||p===13}function T(p){return p===9||p===32}function M(p){return p===9||p===32||p===10||p===13}function E(p){return p===44||p===91||p===93||p===123||p===125}function C(p){if(p>=48&&p<=57)return p-48;let N=p|32;return N>=97&&N<=102?N-97+10:-1}function v(p){return p===120?2:p===117?4:p===85?8:0}function R(p){return p>=48&&p<=57?p-48:-1}function O(p){switch(p){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"\x85";case 95:return"\xA0";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function U(p){return p<=65535?String.fromCharCode(p):String.fromCharCode((p-65536>>10)+55296,(p-65536&1023)+56320)}function W(p,N,Z){N==="__proto__"?Object.defineProperty(p,N,{configurable:!0,enumerable:!0,writable:!0,value:Z}):p[N]=Z}let te=new Array(256),ee=new Array(256);for(let p=0;p<256;p++)te[p]=O(p)?1:0,ee[p]=O(p);function B(p,N){this.input=p,this.filename=N.filename||null,this.schema=N.schema||i,this.onWarning=N.onWarning||null,this.legacy=N.legacy||!1,this.json=N.json||!1,this.listener=N.listener||null,this.maxDepth=typeof N.maxDepth=="number"?N.maxDepth:100,this.maxTotalMergeKeys=typeof N.maxTotalMergeKeys=="number"?N.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=p.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function $(p,N){let Z={name:p.filename,buffer:p.input.slice(0,-1),position:p.position,line:p.line,column:p.position-p.lineStart};return Z.snippet=t(Z),new e(N,Z)}function k(p,N){throw $(p,N)}function J(p,N){p.onWarning&&p.onWarning.call(null,$(p,N))}function ge(p,N,Z){let A=p.anchorMapTransactions;if(A.length!==0){let w=A[A.length-1];r.call(w,N)||(w[N]={existed:r.call(p.anchorMap,N),value:p.anchorMap[N]})}p.anchorMap[N]=Z}function ie(p){p.anchorMapTransactions.push(Object.create(null))}function j(p){let N=p.anchorMapTransactions.pop(),Z=p.anchorMapTransactions;if(Z.length===0)return;let A=Z[Z.length-1],w=Object.keys(N);for(let S=0,H=w.length;S<H;S+=1){let z=w[S];r.call(A,z)||(A[z]=N[z])}}function ue(p){let N=p.anchorMapTransactions.pop(),Z=Object.keys(N);for(let A=Z.length-1;A>=0;A-=1){let w=N[Z[A]];w.existed?p.anchorMap[Z[A]]=w.value:delete p.anchorMap[Z[A]]}}function Ae(p){return{position:p.position,line:p.line,lineStart:p.lineStart,lineIndent:p.lineIndent,firstTabInLine:p.firstTabInLine,tag:p.tag,anchor:p.anchor,kind:p.kind,result:p.result}}function De(p,N){p.position=N.position,p.line=N.line,p.lineStart=N.lineStart,p.lineIndent=N.lineIndent,p.firstTabInLine=N.firstTabInLine,p.tag=N.tag,p.anchor=N.anchor,p.kind=N.kind,p.result=N.result}let re={YAML:function(N,Z,A){N.version!==null&&k(N,"duplication of %YAML directive"),A.length!==1&&k(N,"YAML directive accepts exactly one argument");let w=/^([0-9]+)\.([0-9]+)$/.exec(A[0]);w===null&&k(N,"ill-formed argument of the YAML directive");let S=parseInt(w[1],10),H=parseInt(w[2],10);S!==1&&k(N,"unacceptable YAML version of the document"),N.version=A[0],N.checkLineBreaks=H<2,H!==1&&H!==2&&J(N,"unsupported YAML version of the document")},TAG:function(N,Z,A){let w;A.length!==2&&k(N,"TAG directive accepts exactly two arguments");let S=A[0];w=A[1],y.test(S)||k(N,"ill-formed tag handle (first argument) of the TAG directive"),r.call(N.tagMap,S)&&k(N,'there is a previously declared suffix for "'+S+'" tag handle'),g.test(w)||k(N,"ill-formed tag prefix (second argument) of the TAG directive");try{w=decodeURIComponent(w)}catch{k(N,"tag prefix is malformed: "+w)}N.tagMap[S]=w}};function Me(p,N,Z,A){if(N<Z){let w=p.input.slice(N,Z);if(A)for(let S=0,H=w.length;S<H;S+=1){let z=w.charCodeAt(S);z===9||z>=32&&z<=1114111||k(p,"expected valid JSON character")}else f.test(w)&&k(p,"the stream contains non-printable characters");p.result+=w}}function fe(p){p.totalMergeKeys++,p.maxTotalMergeKeys!==-1&&p.totalMergeKeys>p.maxTotalMergeKeys&&k(p,"merge keys exceeded maxTotalMergeKeys ("+p.maxTotalMergeKeys+")")}function Q(p,N,Z,A){n.isObject(Z)||k(p,"cannot merge mappings; the provided source object is unacceptable"),fe(p);let w=Object.keys(Z);for(let S=0,H=w.length;S<H;S+=1){let z=w[S];fe(p),r.call(N,z)||(W(N,z,Z[z]),A[z]=!0)}}function le(p,N,Z,A,w,S,H,z,Y){if(Array.isArray(w)){w=Array.prototype.slice.call(w);for(let K=0,q=w.length;K<q;K+=1)Array.isArray(w[K])&&k(p,"nested arrays are not supported inside keys"),typeof w=="object"&&m(w[K])==="[object Object]"&&(w[K]="[object Object]")}if(typeof w=="object"&&m(w)==="[object Object]"&&(w="[object Object]"),w=String(w),N===null&&(N={}),A==="tag:yaml.org,2002:merge")if(Array.isArray(S)){S.length>100&&k(p,"abnormal merge sequence size");for(let K=0,q=S.length;K<q;K+=1)Q(p,N,S[K],Z)}else Q(p,N,S,Z);else!p.json&&!r.call(Z,w)&&r.call(N,w)&&(p.line=H||p.line,p.lineStart=z||p.lineStart,p.position=Y||p.position,k(p,"duplicated mapping key")),W(N,w,S),delete Z[w];return N}function Ce(p){let N=p.input.charCodeAt(p.position);N===10?p.position++:N===13?(p.position++,p.input.charCodeAt(p.position)===10&&p.position++):k(p,"a line break is expected"),p.line+=1,p.lineStart=p.position,p.firstTabInLine=-1}function Oe(p,N,Z){let A=0,w=p.input.charCodeAt(p.position);for(;w!==0;){for(;T(w);)w===9&&p.firstTabInLine===-1&&(p.firstTabInLine=p.position),w=p.input.charCodeAt(++p.position);if(N&&w===35)do w=p.input.charCodeAt(++p.position);while(w!==10&&w!==13&&w!==0);if(_(w))for(Ce(p),w=p.input.charCodeAt(p.position),A++,p.lineIndent=0;w===32;)p.lineIndent++,w=p.input.charCodeAt(++p.position);else break}return Z!==-1&&A!==0&&p.lineIndent<Z&&J(p,"deficient indentation"),A}function Le(p){let N=p.position,Z=p.input.charCodeAt(N);return!!((Z===45||Z===46)&&Z===p.input.charCodeAt(N+1)&&Z===p.input.charCodeAt(N+2)&&(N+=3,Z=p.input.charCodeAt(N),Z===0||M(Z)))}function ze(p,N){N===1?p.result+=" ":N>1&&(p.result+=n.repeat(`
`,N-1))}function ve(p,N,Z){let A,w,S,H,z,Y,K=p.kind,q=p.result,V=p.input.charCodeAt(p.position);if(M(V)||E(V)||V===35||V===38||V===42||V===33||V===124||V===62||V===39||V===34||V===37||V===64||V===96)return!1;if(V===63||V===45){let he=p.input.charCodeAt(p.position+1);if(M(he)||Z&&E(he))return!1}for(p.kind="scalar",p.result="",A=w=p.position,S=!1;V!==0;){if(V===58){let he=p.input.charCodeAt(p.position+1);if(M(he)||Z&&E(he))break}else if(V===35){let he=p.input.charCodeAt(p.position-1);if(M(he))break}else{if(p.position===p.lineStart&&Le(p)||Z&&E(V))break;if(_(V))if(H=p.line,z=p.lineStart,Y=p.lineIndent,Oe(p,!1,-1),p.lineIndent>=N){S=!0,V=p.input.charCodeAt(p.position);continue}else{p.position=w,p.line=H,p.lineStart=z,p.lineIndent=Y;break}}S&&(Me(p,A,w,!1),ze(p,p.line-H),A=w=p.position,S=!1),T(V)||(w=p.position+1),V=p.input.charCodeAt(++p.position)}return Me(p,A,w,!1),p.result?!0:(p.kind=K,p.result=q,!1)}function Te(p,N){let Z,A,w=p.input.charCodeAt(p.position);if(w!==39)return!1;for(p.kind="scalar",p.result="",p.position++,Z=A=p.position;(w=p.input.charCodeAt(p.position))!==0;)if(w===39)if(Me(p,Z,p.position,!0),w=p.input.charCodeAt(++p.position),w===39)Z=p.position,p.position++,A=p.position;else return!0;else _(w)?(Me(p,Z,A,!0),ze(p,Oe(p,!1,N)),Z=A=p.position):p.position===p.lineStart&&Le(p)?k(p,"unexpected end of the document within a single quoted scalar"):(p.position++,T(w)||(A=p.position));k(p,"unexpected end of the stream within a single quoted scalar")}function He(p,N){let Z,A,w,S=p.input.charCodeAt(p.position);if(S!==34)return!1;for(p.kind="scalar",p.result="",p.position++,Z=A=p.position;(S=p.input.charCodeAt(p.position))!==0;){if(S===34)return Me(p,Z,p.position,!0),p.position++,!0;if(S===92){if(Me(p,Z,p.position,!0),S=p.input.charCodeAt(++p.position),_(S))Oe(p,!1,N);else if(S<256&&te[S])p.result+=ee[S],p.position++;else if((w=v(S))>0){let H=w,z=0;for(;H>0;H--)S=p.input.charCodeAt(++p.position),(w=C(S))>=0?z=(z<<4)+w:k(p,"expected hexadecimal character");p.result+=U(z),p.position++}else k(p,"unknown escape sequence");Z=A=p.position}else _(S)?(Me(p,Z,A,!0),ze(p,Oe(p,!1,N)),Z=A=p.position):p.position===p.lineStart&&Le(p)?k(p,"unexpected end of the document within a double quoted scalar"):(p.position++,T(S)||(A=p.position))}k(p,"unexpected end of the stream within a double quoted scalar")}function Be(p,N){let Z=!0,A,w,S,H=p.tag,z,Y=p.anchor,K,q,V,he,F=Object.create(null),oe,se,we,Se=p.input.charCodeAt(p.position);if(Se===91)K=93,he=!1,z=[];else if(Se===123)K=125,he=!0,z={};else return!1;for(p.anchor!==null&&ge(p,p.anchor,z),Se=p.input.charCodeAt(++p.position);Se!==0;){if(Oe(p,!0,N),Se=p.input.charCodeAt(p.position),Se===K)return p.position++,p.tag=H,p.anchor=Y,p.kind=he?"mapping":"sequence",p.result=z,!0;if(Z?Se===44&&k(p,"expected the node content, but found ','"):k(p,"missed comma between flow collection entries"),se=oe=we=null,q=V=!1,Se===63){let Fe=p.input.charCodeAt(p.position+1);M(Fe)&&(q=V=!0,p.position++,Oe(p,!0,N))}A=p.line,w=p.lineStart,S=p.position,P(p,N,s,!1,!0),se=p.tag,oe=p.result,Oe(p,!0,N),Se=p.input.charCodeAt(p.position),(V||p.line===A)&&Se===58&&(q=!0,Se=p.input.charCodeAt(++p.position),Oe(p,!0,N),P(p,N,s,!1,!0),we=p.result),he?le(p,z,F,se,oe,we,A,w,S):q?z.push(le(p,null,F,se,oe,we,A,w,S)):z.push(oe),Oe(p,!0,N),Se=p.input.charCodeAt(p.position),Se===44?(Z=!0,Se=p.input.charCodeAt(++p.position)):Z=!1}k(p,"unexpected end of the stream within a flow collection")}function We(p,N){let Z,A=l,w=!1,S=!1,H=N,z=0,Y=!1,K,q=p.input.charCodeAt(p.position);if(q===124)Z=!1;else if(q===62)Z=!0;else return!1;for(p.kind="scalar",p.result="";q!==0;)if(q=p.input.charCodeAt(++p.position),q===43||q===45)l===A?A=q===43?h:u:k(p,"repeat of a chomping mode identifier");else if((K=R(q))>=0)K===0?k(p,"bad explicit indentation width of a block scalar; it cannot be less than one"):S?k(p,"repeat of an indentation width identifier"):(H=N+K-1,S=!0);else break;if(T(q)){do q=p.input.charCodeAt(++p.position);while(T(q));if(q===35)do q=p.input.charCodeAt(++p.position);while(!_(q)&&q!==0)}for(;q!==0;){for(Ce(p),p.lineIndent=0,q=p.input.charCodeAt(p.position);(!S||p.lineIndent<H)&&q===32;)p.lineIndent++,q=p.input.charCodeAt(++p.position);if(!S&&p.lineIndent>H&&(H=p.lineIndent),_(q)){z++;continue}if(!S&&H===0&&k(p,"missing indentation for block scalar"),p.lineIndent<H){A===h?p.result+=n.repeat(`
`,w?1+z:z):A===l&&w&&(p.result+=`
`);break}Z?T(q)?(Y=!0,p.result+=n.repeat(`
`,w?1+z:z)):Y?(Y=!1,p.result+=n.repeat(`
`,z+1)):z===0?w&&(p.result+=" "):p.result+=n.repeat(`
`,z):p.result+=n.repeat(`
`,w?1+z:z),w=!0,S=!0,z=0;let V=p.position;for(;!_(q)&&q!==0;)q=p.input.charCodeAt(++p.position);Me(p,V,p.position,!1)}return!0}function Ge(p,N){let Z=p.tag,A=p.anchor,w=[],S=!1;if(p.firstTabInLine!==-1)return!1;p.anchor!==null&&ge(p,p.anchor,w);let H=p.input.charCodeAt(p.position);for(;H!==0&&(p.firstTabInLine!==-1&&(p.position=p.firstTabInLine,k(p,"tab characters must not be used in indentation")),H===45);){let z=p.input.charCodeAt(p.position+1);if(!M(z))break;if(S=!0,p.position++,Oe(p,!0,-1)&&p.lineIndent<=N){w.push(null),H=p.input.charCodeAt(p.position);continue}let Y=p.line;if(P(p,N,a,!1,!0),w.push(p.result),Oe(p,!0,-1),H=p.input.charCodeAt(p.position),(p.line===Y||p.lineIndent>N)&&H!==0)k(p,"bad indentation of a sequence entry");else if(p.lineIndent<N)break}return S?(p.tag=Z,p.anchor=A,p.kind="sequence",p.result=w,!0):!1}function rt(p,N,Z){let A,w,S,H,z=p.tag,Y=p.anchor,K={},q=Object.create(null),V=null,he=null,F=null,oe=!1,se=!1;if(p.firstTabInLine!==-1)return!1;p.anchor!==null&&ge(p,p.anchor,K);let we=p.input.charCodeAt(p.position);for(;we!==0;){!oe&&p.firstTabInLine!==-1&&(p.position=p.firstTabInLine,k(p,"tab characters must not be used in indentation"));let Se=p.input.charCodeAt(p.position+1),Fe=p.line;if((we===63||we===58)&&M(Se))we===63?(oe&&(le(p,K,q,V,he,null,w,S,H),V=he=F=null),se=!0,oe=!0,A=!0):oe?(oe=!1,A=!0):k(p,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),p.position+=1,we=Se;else{if(w=p.line,S=p.lineStart,H=p.position,!P(p,Z,o,!1,!0))break;if(p.line===Fe){for(we=p.input.charCodeAt(p.position);T(we);)we=p.input.charCodeAt(++p.position);if(we===58)we=p.input.charCodeAt(++p.position),M(we)||k(p,"a whitespace character is expected after the key-value separator within a block mapping"),oe&&(le(p,K,q,V,he,null,w,S,H),V=he=F=null),se=!0,oe=!1,A=!1,V=p.tag,he=p.result;else if(se)k(p,"can not read an implicit mapping pair; a colon is missed");else return p.tag=z,p.anchor=Y,!0}else if(se)k(p,"can not read a block mapping entry; a multiline key may not be an implicit key");else return p.tag=z,p.anchor=Y,!0}if((p.line===Fe||p.lineIndent>N)&&(oe&&(w=p.line,S=p.lineStart,H=p.position),P(p,N,c,!0,A)&&(oe?he=p.result:F=p.result),oe||(le(p,K,q,V,he,F,w,S,H),V=he=F=null),Oe(p,!0,-1),we=p.input.charCodeAt(p.position)),(p.line===Fe||p.lineIndent>N)&&we!==0)k(p,"bad indentation of a mapping entry");else if(p.lineIndent<N)break}return oe&&le(p,K,q,V,he,null,w,S,H),se&&(p.tag=z,p.anchor=Y,p.kind="mapping",p.result=K),se}function pe(p){let N=!1,Z=!1,A,w,S=p.input.charCodeAt(p.position);if(S!==33)return!1;p.tag!==null&&k(p,"duplication of a tag property"),S=p.input.charCodeAt(++p.position),S===60?(N=!0,S=p.input.charCodeAt(++p.position)):S===33?(Z=!0,A="!!",S=p.input.charCodeAt(++p.position)):A="!";let H=p.position;if(N){do S=p.input.charCodeAt(++p.position);while(S!==0&&S!==62);p.position<p.length?(w=p.input.slice(H,p.position),S=p.input.charCodeAt(++p.position)):k(p,"unexpected end of the stream within a verbatim tag")}else{for(;S!==0&&!M(S);)S===33&&(Z?k(p,"tag suffix cannot contain exclamation marks"):(A=p.input.slice(H-1,p.position+1),y.test(A)||k(p,"named tag handle cannot contain such characters"),Z=!0,H=p.position+1)),S=p.input.charCodeAt(++p.position);w=p.input.slice(H,p.position),x.test(w)&&k(p,"tag suffix cannot contain flow indicator characters")}w&&!g.test(w)&&k(p,"tag name cannot contain such characters: "+w);try{w=decodeURIComponent(w)}catch{k(p,"tag name is malformed: "+w)}return N?p.tag=w:r.call(p.tagMap,A)?p.tag=p.tagMap[A]+w:A==="!"?p.tag="!"+w:A==="!!"?p.tag="tag:yaml.org,2002:"+w:k(p,'undeclared tag handle "'+A+'"'),!0}function ke(p){let N=p.input.charCodeAt(p.position);if(N!==38)return!1;p.anchor!==null&&k(p,"duplication of an anchor property"),N=p.input.charCodeAt(++p.position);let Z=p.position;for(;N!==0&&!M(N)&&!E(N);)N=p.input.charCodeAt(++p.position);return p.position===Z&&k(p,"name of an anchor node must contain at least one character"),p.anchor=p.input.slice(Z,p.position),!0}function Ze(p){let N=p.input.charCodeAt(p.position);if(N!==42)return!1;N=p.input.charCodeAt(++p.position);let Z=p.position;for(;N!==0&&!M(N)&&!E(N);)N=p.input.charCodeAt(++p.position);p.position===Z&&k(p,"name of an alias node must contain at least one character");let A=p.input.slice(Z,p.position);return r.call(p.anchorMap,A)||k(p,'unidentified alias "'+A+'"'),p.result=p.anchorMap[A],Oe(p,!0,-1),!0}function Ee(p,N,Z,A){let w=Ae(p);return ie(p),De(p,N),p.tag=null,p.anchor=null,p.kind=null,p.result=null,rt(p,Z,A)&&p.kind==="mapping"?(j(p),!0):(ue(p),De(p,w),!1)}function P(p,N,Z,A,w){let S,H,z=1,Y=!1,K=!1,q=null,V,he,F;p.depth>=p.maxDepth&&k(p,"nesting exceeded maxDepth ("+p.maxDepth+")"),p.depth+=1,p.listener!==null&&p.listener("open",p),p.tag=null,p.anchor=null,p.kind=null,p.result=null;let oe=S=H=c===Z||a===Z;if(A&&Oe(p,!0,-1)&&(Y=!0,p.lineIndent>N?z=1:p.lineIndent===N?z=0:p.lineIndent<N&&(z=-1)),z===1)for(;;){let se=p.input.charCodeAt(p.position),we=Ae(p);if(Y&&(se===33&&p.tag!==null||se===38&&p.anchor!==null)||!pe(p)&&!ke(p))break;q===null&&(q=we),Oe(p,!0,-1)?(Y=!0,H=oe,p.lineIndent>N?z=1:p.lineIndent===N?z=0:p.lineIndent<N&&(z=-1)):H=!1}if(H&&(H=Y||w),z===1||c===Z)if(s===Z||o===Z?he=N:he=N+1,F=p.position-p.lineStart,z===1)if(H&&(Ge(p,F)||rt(p,F,he))||Be(p,he))K=!0;else{let se=p.input.charCodeAt(p.position);q!==null&&oe&&!H&&se!==124&&se!==62&&Ee(p,q,q.position-q.lineStart,he)||S&&We(p,he)||Te(p,he)||He(p,he)?K=!0:Ze(p)?(K=!0,(p.tag!==null||p.anchor!==null)&&k(p,"alias node should not have any properties")):ve(p,he,s===Z)&&(K=!0,p.tag===null&&(p.tag="?")),p.anchor!==null&&ge(p,p.anchor,p.result)}else z===0&&(K=H&&Ge(p,F));if(p.tag===null)p.anchor!==null&&ge(p,p.anchor,p.result);else if(p.tag==="?"){p.result!==null&&p.kind!=="scalar"&&k(p,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+p.kind+'"');for(let se=0,we=p.implicitTypes.length;se<we;se+=1)if(V=p.implicitTypes[se],V.resolve(p.result)){p.result=V.construct(p.result),p.tag=V.tag,p.anchor!==null&&ge(p,p.anchor,p.result);break}}else if(p.tag!=="!"){if(r.call(p.typeMap[p.kind||"fallback"],p.tag))V=p.typeMap[p.kind||"fallback"][p.tag];else{V=null;let se=p.typeMap.multi[p.kind||"fallback"];for(let we=0,Se=se.length;we<Se;we+=1)if(p.tag.slice(0,se[we].tag.length)===se[we].tag){V=se[we];break}}V||k(p,"unknown tag !<"+p.tag+">"),p.result!==null&&V.kind!==p.kind&&k(p,"unacceptable node kind for !<"+p.tag+'> tag; it should be "'+V.kind+'", not "'+p.kind+'"'),V.resolve(p.result,p.tag)?(p.result=V.construct(p.result,p.tag),p.anchor!==null&&ge(p,p.anchor,p.result)):k(p,"cannot resolve a node with !<"+p.tag+"> explicit tag")}return p.listener!==null&&p.listener("close",p),p.depth-=1,p.tag!==null||p.anchor!==null||K}function de(p){let N=p.position,Z=!1,A;for(p.version=null,p.checkLineBreaks=p.legacy,p.tagMap=Object.create(null),p.anchorMap=Object.create(null);(A=p.input.charCodeAt(p.position))!==0&&(Oe(p,!0,-1),A=p.input.charCodeAt(p.position),!(p.lineIndent>0||A!==37));){Z=!0,A=p.input.charCodeAt(++p.position);let w=p.position;for(;A!==0&&!M(A);)A=p.input.charCodeAt(++p.position);let S=p.input.slice(w,p.position),H=[];for(S.length<1&&k(p,"directive name must not be less than one character in length");A!==0;){for(;T(A);)A=p.input.charCodeAt(++p.position);if(A===35){do A=p.input.charCodeAt(++p.position);while(A!==0&&!_(A));break}if(_(A))break;for(w=p.position;A!==0&&!M(A);)A=p.input.charCodeAt(++p.position);H.push(p.input.slice(w,p.position))}A!==0&&Ce(p),r.call(re,S)?re[S](p,S,H):J(p,'unknown document directive "'+S+'"')}if(Oe(p,!0,-1),p.lineIndent===0&&p.input.charCodeAt(p.position)===45&&p.input.charCodeAt(p.position+1)===45&&p.input.charCodeAt(p.position+2)===45?(p.position+=3,Oe(p,!0,-1)):Z&&k(p,"directives end mark is expected"),P(p,p.lineIndent-1,c,!1,!0),Oe(p,!0,-1),p.checkLineBreaks&&d.test(p.input.slice(N,p.position))&&J(p,"non-ASCII line breaks are interpreted as content"),p.documents.push(p.result),p.position===p.lineStart&&Le(p)){p.input.charCodeAt(p.position)===46&&(p.position+=3,Oe(p,!0,-1));return}p.position<p.length-1&&k(p,"end of the stream or a document separator is expected")}function me(p,N){p=String(p),N=N||{},p.length!==0&&(p.charCodeAt(p.length-1)!==10&&p.charCodeAt(p.length-1)!==13&&(p+=`
`),p.charCodeAt(0)===65279&&(p=p.slice(1)));let Z=new B(p,N),A=p.indexOf("\0");for(A!==-1&&(Z.position=A,k(Z,"null byte is not allowed in input")),Z.input+="\0";Z.input.charCodeAt(Z.position)===32;)Z.lineIndent+=1,Z.position+=1;for(;Z.position<Z.length-1;)de(Z);return Z.documents}function Re(p,N,Z){N!==null&&typeof N=="object"&&typeof Z>"u"&&(Z=N,N=null);let A=me(p,Z);if(typeof N!="function")return A;for(let w=0,S=A.length;w<S;w+=1)N(A[w])}function ae(p,N){let Z=me(p,N);if(Z.length!==0){if(Z.length===1)return Z[0];throw new e("expected a single document in the stream, but found more")}}return _h.loadAll=Re,_h.load=ae,_h}var hm={},P_;function vC(){if(P_)return hm;P_=1;let n=Al(),e=Rl(),t=fm(),i=Object.prototype.toString,r=Object.prototype.hasOwnProperty,s=65279,o=9,a=10,c=13,l=32,u=33,h=34,f=35,d=37,x=38,y=39,g=42,m=44,_=45,T=58,M=61,E=62,C=63,v=64,R=91,O=93,U=96,W=123,te=124,ee=125,B={};B[0]="\\0",B[7]="\\a",B[8]="\\b",B[9]="\\t",B[10]="\\n",B[11]="\\v",B[12]="\\f",B[13]="\\r",B[27]="\\e",B[34]='\\"',B[92]="\\\\",B[133]="\\N",B[160]="\\_",B[8232]="\\L",B[8233]="\\P";let $=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],k=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function J(S,H){if(H===null)return{};let z={},Y=Object.keys(H);for(let K=0,q=Y.length;K<q;K+=1){let V=Y[K],he=String(H[V]);V.slice(0,2)==="!!"&&(V="tag:yaml.org,2002:"+V.slice(2));let F=S.compiledTypeMap.fallback[V];F&&r.call(F.styleAliases,he)&&(he=F.styleAliases[he]),z[V]=he}return z}function ge(S){let H,z,Y=S.toString(16).toUpperCase();if(S<=255)H="x",z=2;else if(S<=65535)H="u",z=4;else if(S<=4294967295)H="U",z=8;else throw new e("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+H+n.repeat("0",z-Y.length)+Y}let ie=1,j=2;function ue(S){this.schema=S.schema||t,this.indent=Math.max(1,S.indent||2),this.noArrayIndent=S.noArrayIndent||!1,this.skipInvalid=S.skipInvalid||!1,this.flowLevel=n.isNothing(S.flowLevel)?-1:S.flowLevel,this.styleMap=J(this.schema,S.styles||null),this.sortKeys=S.sortKeys||!1,this.lineWidth=S.lineWidth||80,this.noRefs=S.noRefs||!1,this.noCompatMode=S.noCompatMode||!1,this.condenseFlow=S.condenseFlow||!1,this.quotingType=S.quotingType==='"'?j:ie,this.forceQuotes=S.forceQuotes||!1,this.replacer=typeof S.replacer=="function"?S.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Ae(S,H){let z=n.repeat(" ",H),Y=0,K="",q=S.length;for(;Y<q;){let V,he=S.indexOf(`
`,Y);he===-1?(V=S.slice(Y),Y=q):(V=S.slice(Y,he+1),Y=he+1),V.length&&V!==`
`&&(K+=z),K+=V}return K}function De(S,H){return`
`+n.repeat(" ",S.indent*H)}function re(S,H){for(let z=0,Y=S.implicitTypes.length;z<Y;z+=1)if(S.implicitTypes[z].resolve(H))return!0;return!1}function Me(S){return S===l||S===o}function fe(S){return S>=32&&S<=126||S>=161&&S<=55295&&S!==8232&&S!==8233||S>=57344&&S<=65533&&S!==s||S>=65536&&S<=1114111}function Q(S){return fe(S)&&S!==s&&S!==c&&S!==a}function le(S,H,z){let Y=Q(S),K=Y&&!Me(S);return(z?Y:Y&&S!==m&&S!==R&&S!==O&&S!==W&&S!==ee)&&S!==f&&!(H===T&&!K)||Q(H)&&!Me(H)&&S===f||H===T&&K}function Ce(S){return fe(S)&&S!==s&&!Me(S)&&S!==_&&S!==C&&S!==T&&S!==m&&S!==R&&S!==O&&S!==W&&S!==ee&&S!==f&&S!==x&&S!==g&&S!==u&&S!==te&&S!==M&&S!==E&&S!==y&&S!==h&&S!==d&&S!==v&&S!==U}function Oe(S){return!Me(S)&&S!==T}function Le(S,H){let z=S.charCodeAt(H),Y;return z>=55296&&z<=56319&&H+1<S.length&&(Y=S.charCodeAt(H+1),Y>=56320&&Y<=57343)?(z-55296)*1024+Y-56320+65536:z}function ze(S){return/^\n* /.test(S)}let ve=1,Te=2,He=3,Be=4,We=5;function Ge(S,H,z,Y,K,q,V,he){let F,oe=0,se=null,we=!1,Se=!1,Fe=Y!==-1,Ve=-1,it=Ce(Le(S,0))&&Oe(Le(S,S.length-1));if(H||V)for(F=0;F<S.length;oe>=65536?F+=2:F++){if(oe=Le(S,F),!fe(oe))return We;it=it&&le(oe,se,he),se=oe}else{for(F=0;F<S.length;oe>=65536?F+=2:F++){if(oe=Le(S,F),oe===a)we=!0,Fe&&(Se=Se||F-Ve-1>Y&&S[Ve+1]!==" ",Ve=F);else if(!fe(oe))return We;it=it&&le(oe,se,he),se=oe}Se=Se||Fe&&F-Ve-1>Y&&S[Ve+1]!==" "}return!we&&!Se?it&&!V&&!K(S)?ve:q===j?We:Te:z>9&&ze(S)?We:V?q===j?We:Te:Se?Be:He}function rt(S,H,z,Y,K){S.dump=(function(){if(H.length===0)return S.quotingType===j?'""':"''";if(!S.noCompatMode&&($.indexOf(H)!==-1||k.test(H)))return S.quotingType===j?'"'+H+'"':"'"+H+"'";let q=S.indent*Math.max(1,z),V=S.lineWidth===-1?-1:Math.max(Math.min(S.lineWidth,40),S.lineWidth-q),he=Y||S.flowLevel>-1&&z>=S.flowLevel;function F(oe){return re(S,oe)}switch(Ge(H,he,S.indent,V,F,S.quotingType,S.forceQuotes&&!Y,K)){case ve:return H;case Te:return"'"+H.replace(/'/g,"''")+"'";case He:return"|"+pe(H,S.indent)+ke(Ae(H,q));case Be:return">"+pe(H,S.indent)+ke(Ae(Ze(H,V),q));case We:return'"'+P(H)+'"';default:throw new e("impossible error: invalid scalar style")}})()}function pe(S,H){let z=ze(S)?String(H):"",Y=S[S.length-1]===`
`,q=Y&&(S[S.length-2]===`
`||S===`
`)?"+":Y?"":"-";return z+q+`
`}function ke(S){return S[S.length-1]===`
`?S.slice(0,-1):S}function Ze(S,H){let z=/(\n+)([^\n]*)/g,Y=(function(){let he=S.indexOf(`
`);return he=he!==-1?he:S.length,z.lastIndex=he,Ee(S.slice(0,he),H)})(),K=S[0]===`
`||S[0]===" ",q,V;for(;V=z.exec(S);){let he=V[1],F=V[2];q=F[0]===" ",Y+=he+(!K&&!q&&F!==""?`
`:"")+Ee(F,H),K=q}return Y}function Ee(S,H){if(S===""||S[0]===" ")return S;let z=/ [^ ]/g,Y,K=0,q,V=0,he=0,F="";for(;Y=z.exec(S);)he=Y.index,he-K>H&&(q=V>K?V:he,F+=`
`+S.slice(K,q),K=q+1),V=he;return F+=`
`,S.length-K>H&&V>K?F+=S.slice(K,V)+`
`+S.slice(V+1):F+=S.slice(K),F.slice(1)}function P(S){let H="",z=0;for(let Y=0;Y<S.length;z>=65536?Y+=2:Y++){z=Le(S,Y);let K=B[z];!K&&fe(z)?(H+=S[Y],z>=65536&&(H+=S[Y+1])):H+=K||ge(z)}return H}function de(S,H,z){let Y="",K=S.tag;for(let q=0,V=z.length;q<V;q+=1){let he=z[q];S.replacer&&(he=S.replacer.call(z,String(q),he)),(N(S,H,he,!1,!1)||typeof he>"u"&&N(S,H,null,!1,!1))&&(Y!==""&&(Y+=","+(S.condenseFlow?"":" ")),Y+=S.dump)}S.tag=K,S.dump="["+Y+"]"}function me(S,H,z,Y){let K="",q=S.tag;for(let V=0,he=z.length;V<he;V+=1){let F=z[V];S.replacer&&(F=S.replacer.call(z,String(V),F)),(N(S,H+1,F,!0,!0,!1,!0)||typeof F>"u"&&N(S,H+1,null,!0,!0,!1,!0))&&((!Y||K!=="")&&(K+=De(S,H)),S.dump&&a===S.dump.charCodeAt(0)?K+="-":K+="- ",K+=S.dump)}S.tag=q,S.dump=K||"[]"}function Re(S,H,z){let Y="",K=S.tag,q=Object.keys(z);for(let V=0,he=q.length;V<he;V+=1){let F="";Y!==""&&(F+=", "),S.condenseFlow&&(F+='"');let oe=q[V],se=z[oe];S.replacer&&(se=S.replacer.call(z,oe,se)),N(S,H,oe,!1,!1)&&(S.dump.length>1024&&(F+="? "),F+=S.dump+(S.condenseFlow?'"':"")+":"+(S.condenseFlow?"":" "),N(S,H,se,!1,!1)&&(F+=S.dump,Y+=F))}S.tag=K,S.dump="{"+Y+"}"}function ae(S,H,z,Y){let K="",q=S.tag,V=Object.keys(z);if(S.sortKeys===!0)V.sort();else if(typeof S.sortKeys=="function")V.sort(S.sortKeys);else if(S.sortKeys)throw new e("sortKeys must be a boolean or a function");for(let he=0,F=V.length;he<F;he+=1){let oe="";(!Y||K!=="")&&(oe+=De(S,H));let se=V[he],we=z[se];if(S.replacer&&(we=S.replacer.call(z,se,we)),!N(S,H+1,se,!0,!0,!0))continue;let Se=S.tag!==null&&S.tag!=="?"||S.dump&&S.dump.length>1024;Se&&(S.dump&&a===S.dump.charCodeAt(0)?oe+="?":oe+="? "),oe+=S.dump,Se&&(oe+=De(S,H)),N(S,H+1,we,!0,Se)&&(S.dump&&a===S.dump.charCodeAt(0)?oe+=":":oe+=": ",oe+=S.dump,K+=oe)}S.tag=q,S.dump=K||"{}"}function p(S,H,z){let Y=z?S.explicitTypes:S.implicitTypes;for(let K=0,q=Y.length;K<q;K+=1){let V=Y[K];if((V.instanceOf||V.predicate)&&(!V.instanceOf||typeof H=="object"&&H instanceof V.instanceOf)&&(!V.predicate||V.predicate(H))){if(z?V.multi&&V.representName?S.tag=V.representName(H):S.tag=V.tag:S.tag="?",V.represent){let he=S.styleMap[V.tag]||V.defaultStyle,F;if(i.call(V.represent)==="[object Function]")F=V.represent(H,he);else if(r.call(V.represent,he))F=V.represent[he](H,he);else throw new e("!<"+V.tag+'> tag resolver accepts not "'+he+'" style');S.dump=F}return!0}}return!1}function N(S,H,z,Y,K,q,V){S.tag=null,S.dump=z,p(S,z,!1)||p(S,z,!0);let he=i.call(S.dump),F=Y;Y&&(Y=S.flowLevel<0||S.flowLevel>H);let oe=he==="[object Object]"||he==="[object Array]",se,we;if(oe&&(se=S.duplicates.indexOf(z),we=se!==-1),(S.tag!==null&&S.tag!=="?"||we||S.indent!==2&&H>0)&&(K=!1),we&&S.usedDuplicates[se])S.dump="*ref_"+se;else{if(oe&&we&&!S.usedDuplicates[se]&&(S.usedDuplicates[se]=!0),he==="[object Object]")Y&&Object.keys(S.dump).length!==0?(ae(S,H,S.dump,K),we&&(S.dump="&ref_"+se+S.dump)):(Re(S,H,S.dump),we&&(S.dump="&ref_"+se+" "+S.dump));else if(he==="[object Array]")Y&&S.dump.length!==0?(S.noArrayIndent&&!V&&H>0?me(S,H-1,S.dump,K):me(S,H,S.dump,K),we&&(S.dump="&ref_"+se+S.dump)):(de(S,H,S.dump),we&&(S.dump="&ref_"+se+" "+S.dump));else if(he==="[object String]")S.tag!=="?"&&rt(S,S.dump,H,q,F);else{if(he==="[object Undefined]")return!1;if(S.skipInvalid)return!1;throw new e("unacceptable kind of an object to dump "+he)}if(S.tag!==null&&S.tag!=="?"){let Se=encodeURI(S.tag[0]==="!"?S.tag.slice(1):S.tag).replace(/!/g,"%21");S.tag[0]==="!"?Se="!"+Se:Se.slice(0,18)==="tag:yaml.org,2002:"?Se="!!"+Se.slice(18):Se="!<"+Se+">",S.dump=Se+" "+S.dump}}return!0}function Z(S,H){let z=[],Y=[];A(S,z,Y);let K=Y.length;for(let q=0;q<K;q+=1)H.duplicates.push(z[Y[q]]);H.usedDuplicates=new Array(K)}function A(S,H,z){if(S!==null&&typeof S=="object"){let Y=H.indexOf(S);if(Y!==-1)z.indexOf(Y)===-1&&z.push(Y);else if(H.push(S),Array.isArray(S))for(let K=0,q=S.length;K<q;K+=1)A(S[K],H,z);else{let K=Object.keys(S);for(let q=0,V=K.length;q<V;q+=1)A(S[K[q]],H,z)}}}function w(S,H){H=H||{};let z=new ue(H);z.noRefs||Z(S,z);let Y=S;return z.replacer&&(Y=z.replacer.call({"":Y},"",Y)),N(z,0,Y,!0,!0)?z.dump+`
`:""}return hm.dump=w,hm}var I_;function bC(){if(I_)return kn;I_=1;let n=_C(),e=vC();function t(i,r){return function(){throw new Error("Function yaml."+i+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return kn.Type=Yn(),kn.Schema=L_(),kn.FAILSAFE_SCHEMA=F_(),kn.JSON_SCHEMA=H_(),kn.CORE_SCHEMA=V_(),kn.DEFAULT_SCHEMA=fm(),kn.load=n.load,kn.loadAll=n.loadAll,kn.dump=e.dump,kn.YAMLException=Rl(),kn.types={binary:X_(),float:z_(),map:O_(),null:U_(),pairs:$_(),set:Y_(),timestamp:G_(),bool:B_(),int:k_(),merge:W_(),omap:q_(),seq:N_(),str:D_()},kn.safeLoad=t("safeLoad","load"),kn.safeLoadAll=t("safeLoadAll","loadAll"),kn.safeDump=t("safeDump","dump"),kn}var MC=bC(),dm=xC(MC),{Type:aD,Schema:lD,FAILSAFE_SCHEMA:cD,JSON_SCHEMA:uD,CORE_SCHEMA:hD,DEFAULT_SCHEMA:fD,load:dD,loadAll:pD,dump:mD,YAMLException:gD,types:xD,safeLoad:yD,safeLoadAll:_D,safeDump:vD}=dm;var pm={label:1,id_pattern:10,ids:100};function pi(n,e){let t=Number(n);return Number.isFinite(t)?t:e}function SC(n){return n==null?[]:(Array.isArray(n)?n:[n]).map(t=>String(t).trim()).filter(Boolean)}function mm(n,e=[],t="selector"){if(!n||typeof n!="object"||Array.isArray(n))return e.push(`${t}: expected {label, ids?, id_pattern?}`),null;let i=n;for(let o of Object.keys(i))["label","ids","id_pattern"].includes(o)||e.push(`${t}: unknown key "${o}" (label, ids, id_pattern)`);let r=String(i.label??"").trim();if(!r)return e.push(`${t}: missing label`),null;let s={label:r};if(i.ids!=null){let o=SC(i.ids);o.length?s.ids=o:e.push(`${t}: empty ids`)}if(i.id_pattern!=null)try{s.idPattern=new RegExp(String(i.id_pattern)),s.idPatternSource=String(i.id_pattern)}catch(o){return e.push(`${t}: id_pattern ${i.id_pattern}: ${o?.message||o}`),null}return s.ids&&s.idPattern&&e.push(`${t}: use ids or id_pattern, not both`),s}function wC(n){return n.replace(/\s/g,"_").replace(/[\[\]\.:\/]/g,"")}function vh(n,e){if(n.label!==e.part)return 0;let t=e.element||"";return n.ids?t&&n.ids.some(i=>i===t||wC(i)===t)?pm.ids:0:n.idPattern?t&&n.idPattern.test(t)?pm.id_pattern:0:pm.label}function EC(n,e,t){let i=[];if(!n||typeof n!="object")return i;let r=n.selectors;return r==null||(Array.isArray(r)?r:[r]).forEach((s,o)=>{let a=mm(s,e,`${t}.selectors[${o}]`);a&&i.push(a)}),i}var Z_=/^#?[0-9a-f]{6}$/i;function TC(n){let e=[],t=[],i=[];Array.isArray(n)?i=n:n&&typeof n=="object"&&Array.isArray(n.materials)?i=n.materials:e.push("catalogue: expected a YAML list of materials");let r=[],s=new Set;return i.forEach((o,a)=>{if(!o||typeof o!="object"){e.push(`entry ${a}: not a mapping`);return}let c=o,l=String(c.id??"").trim(),u=l||`entry ${a}`;l||e.push(`entry ${a}: missing id`),l&&s.has(l)&&e.push(`${l}: duplicate id`),s.add(l);let h=String(c.base_color??"").trim();Z_.test(h)||(e.push(`${u}: base_color "${h}" is not an sRGB hex like #a1b2c3`),h="#b4b4b4"),h.startsWith("#")||(h=`#${h}`);let f=Array.isArray(c.tile_size_m)?c.tile_size_m.map(T=>pi(T,NaN)):[],d=[1,1];f.length===2&&f.every(T=>T>0)?d=[f[0],f[1]]:c.tile_size_m!=null?e.push(`${u}: tile_size_m must be [w, h] in metres`):c.maps&&t.push(`${u}: maps without tile_size_m, assuming [1, 1]`);let x={};if(c.maps&&typeof c.maps=="object"){for(let T of["color","normal","roughness","ao"])c.maps[T]&&(x[T]=String(c.maps[T]));for(let T of Object.keys(c.maps))["color","normal","roughness","ao"].includes(T)||t.push(`${u}: maps.${T} is not used (color, normal, roughness, ao)`)}let y=EC(c.applies_to,e,`${u}.applies_to`),g=String(c.applies_to?.pending??"");!y.length&&!g&&t.push(`${u}: applies_to has no selectors and no pending`);let m=String(c.status??"").trim();m&&m!=="known"&&m!=="assumed"&&t.push(`${u}: status "${m}" is neither known nor assumed`);let _=c.sheen_color!=null&&Z_.test(String(c.sheen_color))?String(c.sheen_color):null;r.push({id:l,name:String(c.name??l),description:typeof c.applies_to=="string"?c.applies_to:String(c.applies_to?.description??""),pending:g,selectors:y,baseColor:h,roughness:Math.min(1,Math.max(0,pi(c.roughness,.7))),metalness:Math.min(1,Math.max(0,pi(c.metalness,0))),transmission:Math.min(1,Math.max(0,pi(c.transmission,0))),opacity:Math.min(1,Math.max(0,pi(c.opacity,1))),ior:c.ior!=null?pi(c.ior,1.5):null,thickness:c.thickness!=null?pi(c.thickness,0):null,clearcoat:Math.min(1,Math.max(0,pi(c.clearcoat,0))),clearcoatRoughness:Math.min(1,Math.max(0,pi(c.clearcoat_roughness,.1))),sheen:Math.min(1,Math.max(0,pi(c.sheen,0))),sheenColor:_?_.startsWith("#")?_:`#${_}`:null,sheenRoughness:Math.min(1,Math.max(0,pi(c.sheen_roughness,.8))),normalScale:pi(c.normal_scale,1),maps:x,tileSize:d,rotationDeg:pi(c.rotation_deg,0),directional:c.rotation_deg!=null,status:m||"assumed",source:Array.isArray(c.source)?c.source.join(" "):String(c.source??""),notes:String(c.notes??"")})}),{entries:r,errors:e,warnings:t}}function K_(n){let e;try{e=dm.load(n)}catch(t){return{entries:[],errors:[`catalogue YAML: ${t?.message||t}`],warnings:[]}}return TC(e)}function j_(n,e){let t=null;for(let i of n)for(let r of i.selectors){let s=vh(r,e);s>0&&(!t||s>t.score)&&(t={entry:i,score:s})}return t}function J_(n,e){let t=new Map(n.map(o=>[o.id,0])),i=[],r=[];for(let o of e){let a=new Map;for(let h of n)for(let f of h.selectors){let d=vh(f,o);d>(a.get(h.id)||0)&&a.set(h.id,d)}if(!a.size){i.push(o);continue}let c=Math.max(...a.values()),l=[...a].filter(([,h])=>h===c).map(([h])=>h);l.length>1&&r.push({info:o,ids:l});let u=n.find(h=>l.includes(h.id));u&&t.set(u.id,(t.get(u.id)||0)+1)}let s=[...t].filter(([,o])=>o===0).map(([o])=>o);return{hits:t,unused:s,unresolved:i,ties:r}}function Q_(n,e){if(/^(?:[a-z]+:)?\/\//i.test(n)||n.startsWith("data:")||n.startsWith("/"))return n;let t=e.split("?")[0].replace(/[^/]*$/,"");return n.startsWith("docs/")?`${t}../${n.slice(5)}`:t+n}function ev(n,e){let t=new Set,i=new Set,r=new Map;return n.traverse(s=>{let o=s;if(!o.isMesh)return;let c=(Array.isArray(o.material)?o.material:[o.material]).map(l=>{let u=String(l?.name||"").trim();if(!u)return l;r.has(u)||r.set(u,e(u));let h=r.get(u);return h?(t.add(u),h):(i.add(u),l)});o.material=Array.isArray(o.material)?c:c[0]}),{swapped:[...t],kept:[...i]}}function tv(n,e){let t=null,i=0;for(let r of n){let s=vh(r.selector,e);s>i&&(t=r,i=s)}return t}function nv(n){let e=[];for(let[t,i]of(Array.isArray(n)?n:[]).entries()){let r=i||{},s=[],o=mm(r.selector,s,`asset slot ${t}`);if(!o||!r.url){console.warn(`Realistic: asset slot ${t} ignored`,s.join("; ")||"missing url");continue}e.push({selector:o,url:String(r.url),fit:r.fit==="none"?"none":"contain"})}return e}function iv(n,e,t){let i=e[0].parent;if(!i)return null;let r=new vt;for(let x of e)r.expandByObject(x);let s=r.getSize(new D);n.updateMatrixWorld(!0);let o=new vt().setFromObject(n),a=o.getSize(new D),c=1;t==="contain"&&(c=Math.min(s.x/Math.max(a.x,1e-6),s.y/Math.max(a.y,1e-6),s.z/Math.max(a.z,1e-6)));let l=new Tt;l.name="bpAssetSlot",l.userData.bpAsset=!0,n.scale.multiplyScalar(c);let u=o.getCenter(new D).multiplyScalar(c);n.position.set(-u.x,-o.min.y*c,-u.z),l.add(n);let h=new D((r.min.x+r.max.x)/2,r.min.y,(r.min.z+r.max.z)/2);i.updateMatrixWorld(!0),l.position.copy(i.worldToLocal(h));let f=new Wt,d=new D;return i.matrixWorld.decompose(new D,f,d),l.quaternion.copy(f).invert(),l.scale.set(1/d.x,1/d.y,1/d.z),l.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,x.raycast=()=>{},x.userData.bpHitProxy=!0)}),i.add(l),l}var rv={glazing:{color:"#dfe9ec",roughness:.05,metalness:0,transmission:.9},screen:{color:"#e6eef0",roughness:.05,metalness:0,transmission:.9},default:{color:"#d9d5ce",roughness:.8,metalness:0}},AC="floor-pu-living";function RC(){try{let n=new URLSearchParams(location.search).get("quality");if(n==="low"||n==="high")return n}catch{}try{let n=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,e=typeof navigator<"u"&&navigator.userAgent||"";if(n||/iPhone|iPad|iPod|Android/i.test(e))return"low"}catch{}return"high"}function CC(n){return n==="low"?{maxTexture:1024,anisotropy:4,shadowMap:1024,transmission:!1,transmissionScale:.5}:{maxTexture:2048,anisotropy:8,shadowMap:2048,transmission:!0,transmissionScale:1}}function sv(n,e,t=!1){let i=n.geometry,r=i.getAttribute("position");if(!r)return null;i.getAttribute("normal")||i.computeVertexNormals();let s=i.getAttribute("normal"),o=new ot().multiplyMatrices(e,n.matrixWorld),a=new ut().getNormalMatrix(o),c=new D,l=new D,u=new Float32Array(r.count*2),h=new D(1,1,1);if(t){let f=new vt;for(let d=0;d<r.count;d++)f.expandByPoint(c.fromBufferAttribute(r,d).applyMatrix4(o));f.getSize(h)}for(let f=0;f<r.count;f++){c.fromBufferAttribute(r,f).applyMatrix4(o),l.fromBufferAttribute(s,f).applyMatrix3(a);let d=Math.abs(l.x),x=Math.abs(l.y),y=Math.abs(l.z),g,m,_,T;if(x>=d&&x>=y?(g=c.x,m=l.y>=0?-c.z:c.z,_=h.x,T=h.z):d>=y?(g=l.x>=0?-c.z:c.z,m=c.y,_=h.z,T=h.y):(g=l.z>=0?c.x:-c.x,m=c.y,_=h.x,T=h.y),t&&_>T*1.001){let M=g;g=-m,m=M}u[f*2]=g,u[f*2+1]=m}return new Ut(u,2)}function PC(n,e){let t=n.image,i=t?.width||0,r=t?.height||0;if(!i||!r||Math.max(i,r)<=e)return;let s=e/Math.max(i,r),o=document.createElement("canvas");o.width=Math.max(1,Math.round(i*s)),o.height=Math.max(1,Math.round(r*s)),o.getContext("2d")?.drawImage(t,0,0,o.width,o.height),n.image=o}function IC(n){let e=new Ts,t=Math.min(n.renderer.capabilities.getMaxAnisotropy?.()||1,n.budget.anisotropy),i=new Map,r=new Map,s=new Set,o=new Set,a=new Set;function c(y){i.clear();for(let g of y)i.set(g.id,g)}function l(y){if(s.has(y.id))return;s.add(y.id);let g=["color","normal","roughness","ao"];for(let m of g){let _=y.maps[m];if(!_)continue;let T=Q_(_,n.catalogueUrl);e.load(T,M=>{PC(M,n.budget.maxTexture),M.colorSpace=m==="color"?At:hi,M.wrapS=Jn,M.wrapT=Jn,M.anisotropy=t,M.repeat.set(1/y.tileSize[0],1/y.tileSize[1]),M.rotation=tr.degToRad(y.rotationDeg||0),M.userData.bpShared=!0,M.needsUpdate=!0,r.has(y.id)||r.set(y.id,{}),r.get(y.id)[m]=M;for(let E of a)E.userData.bpCatalogueId===y.id&&u(E,y);n.onTexture?.(y.id)},void 0,()=>{o.add(`${y.id}:${m} (${T})`),console.warn(`Realistic: texture ${T} for ${y.id} did not load; using base_color`)})}}function u(y,g){let m=r.get(g.id);if(!m)return;let _=y,T=!1;m.color&&_.map!==m.color&&(_.map=m.color,_.userData.bpLightBase==null&&_.color.set(16777215),T=!0),m.normal&&_.normalMap!==m.normal&&(_.normalMap=m.normal,_.normalScale.set(g.normalScale,g.normalScale),T=!0),m.roughness&&_.roughnessMap!==m.roughness&&(_.roughnessMap=m.roughness,_.roughness=1,T=!0),m.ao&&_.aoMap!==m.ao&&(_.aoMap=m.ao,_.aoMapIntensity=1,T=!0),T&&(_.needsUpdate=!0)}function h(y,g){let _=y.transmission>0||y.clearcoat>0||y.sheen>0||y.ior!=null?new nn:new fn;_.color.set(y.baseColor),_.roughness=y.roughness,_.metalness=y.metalness,_ instanceof nn&&(y.transmission>0&&g.transmission&&(_.transmission=y.transmission,_.thickness=y.thickness??.004),y.ior!=null&&(_.ior=y.ior),_.clearcoat=y.clearcoat,_.clearcoatRoughness=y.clearcoatRoughness,y.sheen>0&&(_.sheen=y.sheen,_.sheenRoughness=y.sheenRoughness,_.sheenColor.set(y.sheenColor||y.baseColor))),_.userData.bpCatalogueId=y.id,_.userData.bpRealistic=!0;let T=y.opacity;return y.transmission>0&&!g.transmission&&(T=Math.min(T,Math.max(.12,1-y.transmission*.85))),_.userData.presetOpacity=T,l(y),u(_,y),a.add(_),_}function f(y,g){let m=i.get(y);return m?h(m,g):null}function d(y){a.delete(y)}function x(y){let g=i.get(y.userData.bpCatalogueId);g&&u(y,g)}return{setEntries:c,create:h,bind:x,materialFor:f,release:d,entry:y=>i.get(y),failedTextures:()=>[...o]}}function LC(n){let{scene:e,renderer:t,budget:i}=n,r=new Ji(16774373,2);r.name="RealisticSun",r.castShadow=!0,r.shadow.mapSize.set(i.shadowMap,i.shadowMap),r.shadow.radius=3,r.shadow.blurSamples=12,r.shadow.bias=-4e-4,r.shadow.normalBias=.02,r.visible=!1;let s=new qa(14674162,9076594,.3);s.name="RealisticSky",s.visible=!1,e.add(r,r.target,s);let o=new dt(new Qn(1,1),new fn({color:11051931,roughness:.95,metalness:0}));o.name="RealisticStageFloor",o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o.visible=!1,o.raycast=()=>{},o.userData.bpHitProxy=!0,o.userData.bpStage=!0,e.add(o);let a=new Map(n.baseLights.map(f=>[f,f.intensity])),c=e.environmentIntensity??1,l=!1;function u(f){if(f.isEmpty())return;let d=f.getSize(new D),x=f.getCenter(new D),y=Math.max(d.x,d.y,d.z)*.5+.5,g=new D(-.55,1,.65).normalize();r.position.copy(x).addScaledVector(g,y*2.5),r.target.position.copy(x),r.target.updateMatrixWorld();let m=r.shadow.camera;m.left=-y,m.right=y,m.top=y,m.bottom=-y,m.near=.1,m.far=y*5,m.updateProjectionMatrix();let _=f.min.y<=0&&f.max.y>=0?0:f.min.y;o.position.set(x.x,_-.002,x.z),o.scale.set(Math.max(d.x,4)*3,Math.max(d.z,4)*3,1),t.shadowMap.needsUpdate=!0}function h(f){l=f,r.visible=f,s.visible=f,o.visible=f;for(let[d,x]of a)d.intensity=f?x*(d.isAmbientLight?0:.25):x;e.environmentIntensity=f?.5:c,t.shadowMap.enabled=f,t.shadowMap.type=Rs,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,t.transmissionResolutionScale=i.transmissionScale}return{fit:u,setEnabled:h,markDirty(){l&&(t.shadowMap.needsUpdate=!0)},get enabled(){return l},floor:o,sun:r}}function ov(n){let e=RC(),t=CC(e),i={transmission:t.transmission},r=IC({renderer:n.renderer,budget:t,catalogueUrl:n.catalogueUrl||"",onTexture:()=>n.onChange()}),s=LC({scene:n.scene,renderer:n.renderer,budget:t,baseLights:n.baseLights}),o=null,a=[],c=[],l=[],u=new Map,h=new Set,f=nv(n.assetSlots||[]),d=new tn({visible:!1});d.userData.bpAssetHidden=!0;let x=new Map,y=new Map,g=new Set;function m($){return x.has($)||x.set($,new Yo().loadAsync($).then(k=>k.scene).catch(k=>(console.warn(`Realistic: asset ${$} did not load; keeping generated geometry`,k),null))),x.get($)}function _($){let k=r.materialFor($,i);return k&&El(k,null,0),k}function T($,k,J){if(y.has($)){y.get($).visible=J.some(ge=>ge.visible);return}m(k.url).then(ge=>{if(!ge||y.has($)||!s.enabled){if(!ge)for(let ue of J)g.delete(ue);ge||n.onChange();return}let ie=ge.clone(!0);ev(ie,_);let j=iv(ie,J,k.fit);j&&y.set($,j),s.markDirty(),n.onChange()})}function M(){return o||(o=(n.catalogueText?Promise.resolve(n.catalogueText):n.catalogueUrl?fetch(n.catalogueUrl).then(k=>k.ok?k.text():""):Promise.resolve("")).catch(()=>"").then(k=>{if(!k)return l.push(`no catalogue at ${n.catalogueUrl}; every surface uses its fallback colour`),[];let J=K_(k);c=J.errors,l=J.warnings;for(let ge of c)console.warn(`Realistic catalogue: ${ge}`);return a=J.entries,r.setEntries(a),a}),o)}function E($){let k=u.get($);return k||(k={part:$.userData.bpPart||"part",element:$.userData.bpElementKey||null},u.set($,k)),k}function C($,k,J,ge){if(h.has($)&&$.geometry.userData.bpWorldUvAlign===ge)return;let ie=$.geometry,j=J.get(ie)||ie.userData.bpWorldUvOwner;if(j&&j!==$&&(ie=ie.clone(),$.geometry=ie,delete ie.userData.bpWorldUv),J.set(ie,$),ie.userData.bpWorldUvOwner=$,!ie.userData.bpWorldUv||ie.userData.bpWorldUvAlign!==ge){let ue=sv($,k,ge);if(!ue)return;"bpModelUv"in ie.userData||(ie.userData.bpModelUv=ie.getAttribute("uv")||null),ie.userData.bpWorldUv=ue,ie.userData.bpWorldUvAlign=ge}ie.setAttribute("uv",ie.userData.bpWorldUv),h.add($)}function v(){for(let $ of h){let k=$.geometry;k.userData.bpModelUv?k.setAttribute("uv",k.userData.bpModelUv):k.deleteAttribute("uv")}h.clear()}function R($){let k=rv[$]||rv.default;return{id:`uncatalogued:${$}`,name:`${$} (not in catalogue)`,description:"",selectors:[],baseColor:k.color,roughness:k.roughness,metalness:k.metalness,transmission:k.transmission||0,opacity:1,ior:k.transmission?1.5:null,thickness:null,clearcoat:0,clearcoatRoughness:.1,sheen:0,sheenColor:null,sheenRoughness:.8,normalScale:1,maps:{},tileSize:[1,1],rotationDeg:0,directional:!1,status:"assumed",source:"",notes:"",pending:""}}function O($,k,J={}){s.enabled||s.setEnabled(!0);let ge=J.clippingPlanes??null,ie=J.edgeMode??"transparent";k.updateMatrixWorld(!0);let j=k.matrixWorld.clone().invert(),ue=new Map,Ae=new Map;for(let[re,Me]of $){let fe=Np[re]??0,Q=new Map;for(let Le of Me){let ze=Le;if(!ze.isMesh)continue;let ve=E(ze),Te=f.length?tv(f,ve):null;if(Te&&ve.element){g.add(ze);let We=`${ve.part}__${ve.element}`;Ae.set(We,{slot:Te,meshes:[...Ae.get(We)?.meshes||[],ze]})}let He=j_(a,ve),Be=He?He.entry:R(re);Q.has(Be.id)||Q.set(Be.id,{entry:Be,meshes:[]}),Q.get(Be.id).meshes.push(ze),C(ze,j,ue,Be.directional),ze.castShadow=!0,ze.receiveShadow=!0}let le=new Set,Ce=1,Oe=J.opacityByLabel;Oe&&Oe.has(re)&&(Ce=Number(Oe.get(re))||0);for(let{entry:Le,meshes:ze}of Q.values()){let ve=r.create(Le,i);El(ve,ge,fe);for(let Te of ze){let He=Array.isArray(Te.material)?Te.material:[Te.material];for(let Be of He)Be&&le.add(Be);Te.material=ve,Te.userData.opaqueRenderOrder=fe,Te.renderOrder=fe}Bi(ze,Ce,{edgeMode:ie});for(let Te of ze)g.has(Te)&&(Te.material=d)}le.delete(d);for(let Le of le)r.release(Le);ph(le)}for(let re of y.values())re.visible=!1;for(let[re,{slot:Me,meshes:fe}]of Ae)T(re,Me,fe);let De=new vt().setFromObject(k);s.fit(De),te(j)}function U(){for(let $ of g)for(let k of $.children)(k.userData?.isEdgeOverlay||k.userData?.isSectionCap)&&(k.visible=!1)}let W=null;function te($){let k=s.floor,J=r.entry(AC);if(!J)return;let ge={entry:J};k.updateMatrixWorld(!0),k.geometry.setAttribute("uv",sv(k,$)),W?.userData.bpCatalogueId!==ge.entry.id&&(W&&(r.release(W),ph([W])),W=r.create(ge.entry,i),El(W,null,0),k.material=W)}function ee($){v();for(let k of y.values())k.visible=!1;for(let k of $.values())for(let J of k)J.castShadow=!1,J.receiveShadow=!1;s.setEnabled(!1)}function B($){let k=[];for(let ge of $.values())for(let ie of ge)ie.isMesh&&k.push(E(ie));let J=J_(a,k);return{tier:e,budget:t,entries:a.length,errors:c,warnings:l,unused:J.unused,unresolved:[...new Set(J.unresolved.map(ge=>`${ge.part}${ge.element?`/${ge.element}`:""}`))],ties:J.ties.map(ge=>({mesh:`${ge.info.part}/${ge.info.element}`,ids:ge.ids})),failedTextures:r.failedTextures()}}return{load:M,apply:O,afterRefresh:U,leave:ee,stage:s,registry:r,report:B,tier:e,budget:t,caps:i}}var gm=44,bh=.05,DC=.05;function Mh(n){let e=n&&n.material;if(!e)return!1;let t=Array.isArray(e)?e:[e];return t.length?t.every(i=>i&&i.visible!==!1&&!(i.transparent&&(i.opacity??1)<.99)):!1}function lv(n,e,t={}){let i=t.isOccluder||Mh,r=t.tolerance??bh,s=1/0;for(let o of n){let a=Number.isFinite(o.distance)?o.distance:0;if(a>s+r)break;let c=e(o);if(c)return{hit:o,claim:c,wallT:s};s===1/0&&i(o.object)&&(s=a)}return{hit:null,claim:null,wallT:s}}function cv(n,e,t={}){let i=(t.diameterPx??gm)/2,r=t.depthTie??DC,s=[];for(let l of n){if(!l||!Number.isFinite(l.x)||!Number.isFinite(l.y)||!(l.depth>0))continue;let u=Math.hypot(l.x-e.x,l.y-e.y);u>i||s.push({c:l,dist:u})}let o=t.isOccluded?s.filter(l=>!t.isOccluded(l.c)):s;if(!o.length)return null;let a=o[0];for(let l of o)l.c.depth<a.c.depth&&(a=l);let c=null;for(let l of o)(l.c.depth<=a.c.depth+r||a.c.group!=null&&l.c.group===a.c.group)&&(!c||l.dist<c.dist||l.dist===c.dist&&l.c.depth<c.c.depth)&&(c=l);return c?c.c:null}var ii=new D;function uv(n,e,t){e.updateMatrixWorld?.(),ii.copy(n).applyMatrix4(e.matrixWorldInverse);let i=-ii.z;return!(i>0)||(ii.copy(n).project(e),!(Math.abs(ii.x)<=1&&Math.abs(ii.y)<=1)||!(ii.z>=-1&&ii.z<=1))?null:{x:(ii.x+1)/2*t.w,y:(1-ii.y)/2*t.h,depth:i}}var hs=new ci,av=new je;function hv(n,e,t,i,r={}){let s=r.keep||(()=>!0),o=r.isOccluder||Mh,a=r.tolerance??bh,c;if(e.isOrthographicCamera)ii.copy(n).project(e),av.set(ii.x,ii.y),hs.setFromCamera(av,e),c=ii.copy(n).sub(hs.ray.origin).dot(hs.ray.direction);else{let u=new D().setFromMatrixPosition(e.matrixWorld),h=ii.copy(n).sub(u);if(c=h.length(),c<1e-9)return!1;hs.set(u,h.normalize())}hs.camera=e,hs.near=0,hs.far=Math.max(0,c);let l=hs.intersectObject(t,!0);for(let u of l){if(u.distance>=c-a)break;if(!(!s(u.object)||i(u.object))&&o(u.object))return!0}return!1}function fv(n,e,t){let i=n.getCenter(new D),r=n.getSize(new D),s=r.y/4,o=r.x>=r.z?new D(1,0,0):new D(0,0,1);o.dot(t)<0&&o.negate();let a=Math.max(r.x,r.z)/4,c=[];return e.forEach((l,u)=>{let h=i.clone();e.length>1&&h.addScaledVector(o,u===0?-a:a),c.push({rocker:l,position:"up",center:h.clone().setY(h.y+s)}),c.push({rocker:l,position:"down",center:h.clone().setY(h.y-s)})}),c}function Hs(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function Vs(n){if(!n||!n.visible||Hs(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function dv(){let n=[];function e(c){n.push(c),n.sort((l,u)=>(u.priority||0)-(l.priority||0))}function t(c,l){for(let u of n){let h=u.claim?.(c,l);if(h)return h}return null}function i(c,l){let u=[];for(let h of c)l&&!l(h)||u.push(h);return u}function r(c){let{camera:l,root:u,tap:h,size:f}=c||{};if(!l||!u||!h||!f)return null;let d=[];for(let _ of n){let T=_.targets?.(c);if(Array.isArray(T))for(let M of T){if(!M?.center)continue;let E=uv(M.center,l,f);E&&d.push({...M,...E,handler:_})}}if(!d.length)return null;let x=_=>Vs(_),y=cv(d,h,{diameterPx:c.diameterPx??gm,isOccluded:_=>hv(_.center,l,u,T=>!!_.owns?.(T),{keep:x})});if(!y)return null;let g={...y.hit,point:y.hit?.point??y.center,extended:!0},m=y.handler.claim?.(g,c);return m?{hit:g,claim:m,target:y}:null}function s(c,l,u,h={}){let f=i(c,u),d=lv(f,g=>t(g,l),{isOccluder:g=>Mh(g)});if(d.claim)return{kind:"direct",hit:d.hit,claim:d.claim};let x={...l,maxT:d.wallT+bh};for(let g of n)if(h.run?g.fallback?.(f,x):g.probe?.(f,x))return{kind:"fallback"};let y=r(l);if(y)return{kind:"extended",hit:y.hit,claim:y.claim};for(let g of f){let m=t(g,l);if(m)return{kind:"legacy",hit:g,claim:m}}return null}function o(c,l,u){let h=s(c,l,u,{run:!0});if(h?.kind==="fallback")return!0;if(h?.claim)return h.claim.onTap(),!0;let f=i(c,u);for(let d of n)if(d.fallback?.(f,l))return!0;return!1}function a(c,l,u){let h=s(c,l,u);return h?.claim?Array.isArray(h.claim.actions)?h.claim.actions.slice():[]:[]}return{register:e,dispatch:o,actionsFor:a,resolve:s,handlers:n}}var pv=8,NC=56,mv=14,xm=11,gv=.5,OC=1e-4,Sh=128,FC=.028,UC=5,BC=.995,kC=.999,xv=18,zC=22,HC=14,ym=new je,yv=new ci,Si=new D,wi=new D,ur=new D,zn=new D,Qo=new D,cr=new D,jo=new D,Jo=new D,kt=new D,_v=new D,ea=new D,VC=new xn;function _m(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function vm(n){return n.pointerType==="touch"}function bm(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function vv(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function Rv(n){let{scene:e,canvas:t,getCamera:i,controls:r,getRoot:s,getClipPlanes:o,onLiveLength:a,onActiveChange:c}=n,l="idle",u=!1,h=!1,f=0,d=0,x=null,y=null,g=null,m=null,_=null,T=null,M=null,E="mouse",C=0,v=0,R=!1,O=!1,U=new Tt;U.name="MeasureOverlay",U.renderOrder=10,e.add(U);let W=new Tt;W.name="MeasureDimensions",e.add(W);let te=Sv(16766474),ee=Sv(3458905),B=wv(16766474,.75),$=$C(16766474);U.add(te,ee,B,$),te.visible=!1,ee.visible=!1,B.visible=!1,$.visible=!1;let k=XC(t),J=[];function ge(){return u}function ie(Ee){let P=!!Ee;if(P===u){P&&ue();return}if(u=P,u)if(r.enabled=!1,l="placeFirst",j(),_=null,T=null,vv()){let de=Math.max(1,t.clientWidth),me=Math.max(1,t.clientHeight);De(de*.5,me*.5,!0)}else Ae();else r.enabled=!0,l="idle",j(),_=null,T=null,M=null,O=!1,Ae(),a?.(null);c?.(u),ue(),Me()}function j(){h=!1,x=null,y=null,g=null,m=null}function ue(){l==="placeSecond"&&_&&x?a?.(_m(_.distanceTo(x))):u&&a?.(null)}function Ae(){k.hidden=!0,te.visible=!1,$.visible=!1}function De(Ee,P,de=!1){f=Ee,d=P,h=!0;let me=Le(Ee,P);if(me){let Re=me.point.clone(),ae=me.kind,p=me.edgeDir;if(m=null,l==="placeSecond"&&_){let N=ze(_,T,me);N&&(Re=N.foot,ae="perp",p=N.edgeDir,m=N.edgeDir.clone())}x=Re,y=ae,g=p}else de?x||(y=null,g=null,m=null):(x=null,y=null,g=null,m=null);Me(),ue()}function re(Ee,P){let de=Ce(P)*UC;Ee.scale.setScalar(Math.max(de,1e-6))}function Me(){if(!u){Ae(),ee.visible=!1,B.visible=!1,$.visible=!1;return}_?(ee.visible=!0,ee.position.copy(_),re(ee,_)):ee.visible=!1,h?(k.hidden=!1,Mv(k,t,f,d,y),x?(te.visible=!0,te.position.copy(x),re(te,x),qC(te,y)):te.visible=!1):Ae(),l==="placeSecond"&&_&&x?(Tv(B,_,x),B.visible=!0):B.visible=!1,l==="placeSecond"&&y==="perp"&&_&&x&&m?(Ev($,_,x,m,Ce),$.visible=!0):$.visible=!1}function fe(Ee){let P=t.getBoundingClientRect();return{x:Ee.clientX-P.left,y:Ee.clientY-P.top}}function Q(Ee,P,de){return de==="touch"?{x:Ee,y:P-NC}:{x:Ee,y:P}}function le(Ee){let P=o()||[];for(let de of P)if(de.distanceToPoint(Ee)<-OC)return!1;return!0}function Ce(Ee){let P=i(),de=Math.max(1,t.clientHeight);if(P.isOrthographicCamera)return 2*((P.top-P.bottom)/(2*Math.max(P.zoom,1e-6)))/de;let me=P.position.distanceTo(Ee),Re=P.fov*Math.PI/180;return 2*Math.tan(Re/2)*me/de/Math.max(P.zoom,1e-6)}function Oe(Ee,P){P.copy(Ee).project(i());let de=Math.max(1,t.clientWidth),me=Math.max(1,t.clientHeight);return P.x=(P.x*.5+.5)*de,P.y=(-P.y*.5+.5)*me,P}function Le(Ee,P){let de=s();if(!de)return null;let me=t.getBoundingClientRect();ym.x=Ee/Math.max(1,me.width)*2-1,ym.y=-(P/Math.max(1,me.height))*2+1,yv.setFromCamera(ym,i());let Re=yv.intersectObject(de,!0),ae=null;for(let Ve of Re)if(!(!Ve.object.visible||Hs(Ve.object))&&le(Ve.point)){ae=Ve;break}if(!ae)return null;let p=ae.object,N=p.geometry;if(!N?.getAttribute("position"))return{point:ae.point.clone(),kind:"face",edgeDir:null,mesh:p,triVerts:null,faceNormal:null};p.updateWorldMatrix(!0,!1);let Z=Ce(ae.point),A=Z*mv,w=Z*xm,S=N.getAttribute("position"),H=N.getIndex(),z=ae.faceIndex,Y=[];if(ae.face)Si.fromBufferAttribute(S,ae.face.a).applyMatrix4(p.matrixWorld),wi.fromBufferAttribute(S,ae.face.b).applyMatrix4(p.matrixWorld),ur.fromBufferAttribute(S,ae.face.c).applyMatrix4(p.matrixWorld),Y.push(Si.clone(),wi.clone(),ur.clone());else if(typeof z=="number"){let Ve,it,ce;H?(Ve=H.getX(z*3),it=H.getX(z*3+1),ce=H.getX(z*3+2)):(Ve=z*3,it=z*3+1,ce=z*3+2),Si.fromBufferAttribute(S,Ve).applyMatrix4(p.matrixWorld),wi.fromBufferAttribute(S,it).applyMatrix4(p.matrixWorld),ur.fromBufferAttribute(S,ce).applyMatrix4(p.matrixWorld),Y.push(Si.clone(),wi.clone(),ur.clone())}let K=null;Y.length===3&&(K=new D().subVectors(Y[1],Y[0]).cross(zn.subVectors(Y[2],Y[0])).normalize(),K.lengthSq()<1e-12&&(K=null));let q=Ee,V=P,he=null;function F(Ve){if(!le(Ve)||Ve.distanceToSquared(ae.point)>A*A*4)return;Oe(Ve,Jo);let it=Math.hypot(Jo.x-q,Jo.y-V);it>mv||(!he||it<he.distPx)&&(he={point:Ve.clone(),distPx:it})}for(let Ve of Y)F(Ve);let oe=A*A*4,se=S.count,we=se>8e3?2:1;for(let Ve=0;Ve<se;Ve+=we)zn.fromBufferAttribute(S,Ve).applyMatrix4(p.matrixWorld),!(zn.distanceToSquared(ae.point)>oe)&&F(zn);if(he)return{point:he.point,kind:"vertex",edgeDir:null,mesh:p,triVerts:Y.length?Y:null,faceNormal:K};let Se=null;function Fe(Ve,it){kt.copy(it).sub(Ve);let ce=kt.lengthSq();if(ce<1e-18)return;let Ue=zn.copy(ae.point).sub(Ve).dot(kt)/ce;if(Ue=Math.min(1,Math.max(0,Ue)),Qo.copy(Ve).addScaledVector(kt,Ue),!le(Qo)||Qo.distanceToSquared(ae.point)>w*w*4)return;Oe(Qo,Jo);let at=Math.hypot(Jo.x-q,Jo.y-V);if(at>xm)return;Oe(Ve,cr),Oe(it,jo);let Ne=jo.x-cr.x,mt=jo.y-cr.y,zt=Ne*Ne+mt*mt;if(zt>1e-6){let Kt=((q-cr.x)*Ne+(V-cr.y)*mt)/zt;Kt=Math.min(1,Math.max(0,Kt));let Ei=cr.x+Ne*Kt,zi=cr.y+mt*Kt;if(Math.hypot(q-Ei,V-zi)>xm)return}(!Se||at<Se.distPx)&&(Se={point:Qo.clone(),distPx:at,dir:kt.clone().normalize()})}return Y.length===3&&(Fe(Y[0],Y[1]),Fe(Y[1],Y[2]),Fe(Y[2],Y[0])),Se?{point:Se.point,kind:"edge",edgeDir:Se.dir,mesh:p,triVerts:Y.length?Y:null,faceNormal:K}:{point:ae.point.clone(),kind:"face",edgeDir:null,mesh:p,triVerts:Y.length?Y:null,faceNormal:K}}function ze(Ee,P,de){if(!de.mesh||!de.triVerts||de.triVerts.length!==3||!de.faceNormal||de.faceNormal.lengthSq()<1e-12)return null;let me=Ce(Ee),Re=me*HC,ae=Math.max(me*2,1e-5);if(Math.abs(wh(Ee,de.triVerts[0],de.faceNormal))>ae)return null;let p=ve(de.mesh,de.triVerts[0],de.faceNormal,ae);if(!p.length)return null;let N=[];for(let w of p)bv(Ee,w.a,w.b)<=Re&&N.push(w.dir.clone());if(P&&P.lengthSq()>1e-12&&N.push(P.clone().normalize()),!N.length)return null;let Z=me*xv,A=null;for(let w of N)if(!(w.lengthSq()<1e-12)){w.normalize();for(let S of p){if(Math.abs(S.dir.dot(w))<BC||bv(Ee,S.a,S.b)<=Re)continue;let H=GC(Ee,S.a,S.b);if(!le(H)||Ee.distanceTo(H)*1e3<gv||(kt.copy(H).sub(Ee),kt.lengthSq()<1e-16)||(kt.normalize(),Math.abs(kt.dot(w))>.08))continue;let Y=de.point.distanceTo(H);Oe(de.point,cr),Oe(H,jo);let K=Math.hypot(cr.x-jo.x,cr.y-jo.y);if(Y>Z*1.35&&K>xv)continue;let q=K+Y/Math.max(me,1e-9);(!A||q<A.score)&&(A={foot:H.clone(),edgeDir:w.clone(),score:q})}}return A?{foot:A.foot,edgeDir:A.edgeDir}:null}function ve(Ee,P,de,me){let Re=Ee.geometry,ae=Re?.getAttribute("position");if(!ae)return[];Ee.updateWorldMatrix(!0,!1);let p=Re.getIndex(),N=new Map,Z=Math.max(me*.25,1e-5);function A(Y,K,q){ea.subVectors(K,Y).cross(zn.subVectors(q,Y)),!(ea.lengthSq()<1e-16)&&(ea.normalize(),!(Math.abs(ea.dot(de))<kC)&&(Math.abs(wh(Y,P,de))>me||Math.abs(wh(K,P,de))>me||Math.abs(wh(q,P,de))>me||(w(Y,K),w(K,q),w(q,Y))))}function w(Y,K){if(kt.copy(K).sub(Y),kt.lengthSq()<1e-16)return;let q=WC(Y,K,Z);N.has(q)||N.set(q,{a:Y.clone(),b:K.clone(),dir:kt.clone().normalize()})}let S=p?p.count/3:ae.count/3,H=12e3,z=S>H?Math.ceil(S/H):1;for(let Y=0;Y<S;Y+=z){let K,q,V;if(p){let he=Y*3;K=p.getX(he),q=p.getX(he+1),V=p.getX(he+2)}else K=Y*3,q=Y*3+1,V=Y*3+2;Si.fromBufferAttribute(ae,K).applyMatrix4(Ee.matrixWorld),wi.fromBufferAttribute(ae,q).applyMatrix4(Ee.matrixWorld),ur.fromBufferAttribute(ae,V).applyMatrix4(Ee.matrixWorld),A(Si,wi,ur)}return[...N.values()]}function Te(){if(x){if(l==="placeFirst"){_=x.clone(),T=g?g.clone():null,l="placeSecond",m=null,(vm({pointerType:E})||!vv())&&(h=!1,x=null,y=null,g=null,Ae()),Me(),ue();return}if(l==="placeSecond"&&_){if(_.distanceTo(x)*1e3<gv)return;He(_,x),ie(!1)}}}function He(Ee,P){let de=new Tt;de.name="Dimension";let me=wv(16752394,1);Tv(me,Ee,P),me.visible=!0;let Re=Ee.clone().lerp(P,.5),ae=Ee.distanceTo(P),p=YC(_m(ae));p.position.copy(Re),de.add(me,p),W.add(de),J.push({group:de,sprite:p,mid:Re.clone(),span:ae}),Be(p,Ee,P,Re,ae)}function Be(Ee,P,de,me,Re){let ae=i();if(ae.getWorldDirection(_v),kt.copy(de).sub(P),kt.lengthSq()<1e-16){Ee.position.copy(me);return}kt.normalize(),zn.crossVectors(kt,_v),zn.lengthSq()<1e-10&&zn.copy(ae.up),zn.normalize();let p=Math.max(Re*FC,Ce(me)*18);Ee.position.copy(me).addScaledVector(zn,p);let N=Ce(Ee.position)*56;Ee.scale.set(N*2.2,N,1)}function We(){ee.visible&&_&&re(ee,_),te.visible&&x&&re(te,x),h&&Mv(k,t,f,d,y),$.visible&&_&&x&&m&&y==="perp"&&Ev($,_,x,m,Ce);for(let Ee of J){let de=Ee.group.children[0].geometry.getAttribute("position");Si.fromBufferAttribute(de,0),wi.fromBufferAttribute(de,1),Be(Ee.sprite,Si,wi,Ee.mid,Ee.span)}}function Ge(Ee){if(!u||l==="idle"||!bm(Ee)||M!==null)return;let{x:P,y:de}=fe(Ee),me=Q(P,de,Ee.pointerType);De(me.x,me.y,!0)}function rt(Ee){if(!u||l==="idle"||Ee.button!==void 0&&Ee.button!==0||M!==null)return;M=Ee.pointerId,E=Ee.pointerType||"mouse";let{x:P,y:de}=fe(Ee);C=P,v=de,R=!1,O=!1;try{t.setPointerCapture(Ee.pointerId)}catch{}if(bm(Ee)){let me=Q(P,de,E);De(me.x,me.y,!0)}Ee.preventDefault()}function pe(Ee){if(!u)return;if(M===null){Ge(Ee);return}if(M!==Ee.pointerId)return;let{x:P,y:de}=fe(Ee);if(Math.hypot(P-C,de-v)>=pv&&(R=!0,O=!0),vm(Ee)){if(!O)return;let Re=Q(P,de,"touch");De(Re.x,Re.y,!0)}else if(bm(Ee)){let Re=Q(P,de,E);De(Re.x,Re.y,!0)}Ee.preventDefault()}function ke(Ee){if(!u||M!==Ee.pointerId)return;let{x:P,y:de}=fe(Ee);Math.hypot(P-C,de-v)>=pv&&(R=!0,O=!0),M=null;try{t.releasePointerCapture(Ee.pointerId)}catch{}if(vm(Ee)){R?O=!1:(O=!1,h&&x&&Te()),Ee.preventDefault();return}!R&&x&&Te(),O=!1,Ee.preventDefault()}function Ze(Ee){M===Ee.pointerId&&(M=null,O=!1)}return t.addEventListener("pointerdown",rt),t.addEventListener("pointermove",pe),t.addEventListener("pointerup",ke),t.addEventListener("pointercancel",Ze),{isActive:ge,setActive:ie,update:We,formatMm:_m}}function wh(n,e,t){return VC.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function bv(n,e,t){kt.copy(t).sub(e);let i=kt.lengthSq();if(i<1e-18)return n.distanceTo(e);let r=zn.copy(n).sub(e).dot(kt)/i;return r=Math.min(1,Math.max(0,r)),Qo.copy(e).addScaledVector(kt,r).distanceTo(n)}function GC(n,e,t){kt.copy(t).sub(e);let i=kt.lengthSq();if(i<1e-18)return e.clone();let r=zn.copy(n).sub(e).dot(kt)/i;return r=Math.min(1,Math.max(0,r)),e.clone().addScaledVector(kt,r)}function WC(n,e,t){let i=Math.round(n.x/t),r=Math.round(n.y/t),s=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),c=Math.round(e.z/t);return i<o||i===o&&r<a||i===o&&r===a&&s<=c?`${i},${r},${s}|${o},${a},${c}`:`${o},${a},${c}|${i},${r},${s}`}function XC(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function Mv(n,e,t,i,r){let s=e.getBoundingClientRect();n.style.left=`${s.left+t}px`,n.style.top=`${s.top+i}px`,n.dataset.snap=r||"none"}function Sv(n){let e=new Ha(1,16,12),t=new tn({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new dt(e,t);return i.renderOrder=20,i.visible=!1,i}function qC(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function wv(n,e){let t=new Bt,i=new Float32Array(6);t.setAttribute("position",new Ut(i,3));let r=new Ar({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),s=new Yi(t,r);return s.renderOrder=19,s.frustumCulled=!1,s.visible=!1,s}function $C(n){let e=new Bt,t=new Float32Array(9);e.setAttribute("position",new Ut(t,3));let i=new Ar({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),r=new Yi(e,i);return r.renderOrder=22,r.frustumCulled=!1,r.visible=!1,r}function Ev(n,e,t,i,r){let s=r(t)*zC;if(kt.copy(e).sub(t),kt.lengthSq()<1e-16){n.visible=!1;return}if(kt.normalize(),zn.copy(i).normalize(),ea.crossVectors(zn,kt),ea.lengthSq()<1e-12){n.visible=!1;return}Si.copy(t).addScaledVector(zn,s),wi.copy(t),ur.copy(t).addScaledVector(kt,s);let o=n.geometry.getAttribute("position");o.setXYZ(0,Si.x,Si.y,Si.z),o.setXYZ(1,wi.x,wi.y,wi.z),o.setXYZ(2,ur.x,ur.y,ur.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function Tv(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function YC(n){let e=document.createElement("canvas");e.width=Sh*2,e.height=Sh;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(Sh*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let c=t.measureText(n),l=Math.ceil(c.width),u=Math.round(Sh*.42),h=l+o*2,f=u+a*2,d=(e.width-h)/2,x=(e.height-f)/2,y=18;t.fillStyle="rgba(28, 28, 30, 0.78)",Av(t,d,x,h,f,y),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,Av(t,d,x,h,f,y),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new Rr(e);i.colorSpace=At,i.needsUpdate=!0;let r=new Io({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),s=new Ia(r);return s.renderOrder=21,s.center.set(.5,.5),s}function Av(n,e,t,i,r,s){let o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function Eh(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function ki(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function Cv(n){let e="",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let s=ki(i);if(s.part&&!e&&(e=s.part),s.element)return{part:s.part,element:s.element}}t=t.parent||null}return{part:e||"part",element:null}}var Ah=12,ZC=500,KC=Math.PI/2,jC=.03,Pv=.001;function JC(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function QC(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>Ah?"drag":"tap"}function Rh(n,e){return(e>=0?1:-1)*n*KC}function eP(n,e=null){let t=n.length,i=new Map,r=a=>{let c=i.has(a)?i.get(a):a;return c!==a?(c=r(c),i.set(a,c)):i.has(a)||i.set(a,a),c},s=(a,c)=>{let l=r(a),u=r(c);l!==u&&i.set(l,u)};if(e){let a=new Map,c=1e4,l=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<l;u++){let h=`${Math.round(e.getX(u)*c)},${Math.round(e.getY(u)*c)},${Math.round(e.getZ(u)*c)}`,f=a.get(h);f===void 0?a.set(h,u):s(u,f)}}for(let a=0;a+2<t;a+=3)s(n[a],n[a+1]),s(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let c=r(n[a]),l=o.get(c);l||(l=[],o.set(c,l)),l.push(a)}return[...o.values()]}function Iv(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let r=eP(t.array,i);if(r.length<2)return[n];let s=e.getAttribute("normal"),o=[];for(let a of r){let c=new Map,l=[],u=[],h=[],f=y=>{let g=c.get(y);return g!==void 0||(g=l.length/3,c.set(y,g),l.push(i.getX(y),i.getY(y),i.getZ(y)),s&&u.push(s.getX(y),s.getY(y),s.getZ(y))),g};for(let y of a)h.push(f(t.getX(y)),f(t.getX(y+1)),f(t.getX(y+2)));let d=new Bt;d.setAttribute("position",new Gt(l,3)),u.length&&d.setAttribute("normal",new Gt(u,3)),d.setIndex(h);let x=new dt(d,n.material);x.name=n.name,x.position.copy(n.position),x.quaternion.copy(n.quaternion),x.scale.copy(n.scale),x.visible=n.visible,n.parent.add(x),o.push(x)}return n.parent.remove(n),e.dispose?.(),o}function tP(n,e=[]){let t=[];n.traverse(s=>{let o=s.name||"";if(ki(o).part!=="door")return;let a=s.parent?.name||"";ki(a).part!=="door"&&t.push(s)});let i=new Set((e||[]).filter(s=>s&&s.kind==="drawer"&&s.element).map(s=>String(s.element)));i.size&&n.traverse(s=>{let o=ki(s.name||"");!o.element||!i.has(o.element)||ki(s.parent?.name||"").element!==o.element&&t.push(s)});let r=[];for(let s of t){if(s.isMesh){r.push(...Iv(s));continue}let o=[];if(s.traverse(a=>{a.isMesh&&o.push(a)}),o.length===1){let a=Iv(o[0]);if(a.length>1){r.push(...a);continue}}r.push(s)}return r}function nP(n,e,t=jC){let i=[];for(let a of n)for(let c of e){if(!c)continue;let l=c.kind==="drawer"&&Array.isArray(c.slide),u=Nv(c)||Ov(c);if(!l&&!u&&(c.kind!=="hinged"||!c.hinge))continue;let h=c.center;if(!Array.isArray(h)||h.length<3)continue;let f=a.center.x-Number(h[0]),d=a.center.y-Number(h[1]),x=a.center.z-Number(h[2]),y=Math.hypot(f,d,x);y<=t&&i.push({distance:y,entry:a,record:c})}i.sort((a,c)=>a.distance-c.distance);let r=new Set,s=new Set,o=[];for(let a of i)r.has(a.entry)||s.has(a.record.id)||(r.add(a.entry),s.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function iP(n){return n.updateWorldMatrix(!0,!0),new vt().setFromObject(n).getCenter(new D)}function rP(n,e){let t=n.parent;if(!t)return null;if(e.kind==="drawer")return sP(n,e);if(Nv(e))return uP(n,e);if(Ov(e))return cP(n,e);let i=new Tt;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=new D(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(r)),i.updateWorldMatrix(!0,!1),i.attach(n);let s={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=s};return o(i),n.traverse(o),s}function sP(n,e){let t=n.parent;if(!t)return null;let i=new Tt;i.name=`drawer:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=e.center.map(Number),s=e.slide.map(Number),o=t.worldToLocal(new D(r[0],r[1],r[2])),a=t.worldToLocal(new D(r[0]+s[0],r[1]+s[1],r[2]+s[2]));i.updateWorldMatrix(!0,!1),i.attach(n);let c={id:e.id,kind:"drawer",pivot:i,host:n,slideLocal:a.sub(o),sign:1,goal:0,anim:null},l=u=>{u.userData.bpDoor=c};return l(i),n.traverse(l),c}function Nv(n){return!!(n&&n.kind==="sliding"&&Array.isArray(n.start)&&Array.isArray(n.end)&&Array.isArray(n.panels)&&n.panels.length>0)}var oP=new D(1,0,0);function Ov(n){return!!(n&&n.kind==="sectional"&&["start","end","bottom","top","inward"].every(e=>Array.isArray(n[e]))&&Number(n.sections)>=1)}function aP(n,e,t){if(n<=e||t<=0)return{y:n,z:0,tilt:0};let i=Math.PI/2*t;if(n<=e+i){let r=(n-e)/t;return{y:e+t*Math.sin(r),z:t*(1-Math.cos(r)),tilt:r}}return{y:e+t,z:t+(n-e-i),tilt:Math.PI/2}}function lP(n,e){return n+Math.PI/2*Math.max(0,e)}function cP(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=E=>t.worldToLocal(new D(Number(E[0]),Number(E[1]),Number(E[2]))),r=i(e.start),s=i(e.end),o=i(e.bottom),a=i(e.top),c=i([Number(e.bottom[0])+Number(e.inward[0]),Number(e.bottom[1])+Number(e.inward[1]),Number(e.bottom[2])+Number(e.inward[2])]),l=s.clone().sub(r),u=a.clone().sub(o),h=u.length();if(l.lengthSq()<1e-12||h<1e-6)return null;l.normalize(),u.normalize();let f=c.sub(o);if(f.addScaledVector(u,-f.dot(u)).addScaledVector(l,-f.dot(l)),f.lengthSq()<1e-12)return null;f.normalize();let d=new D().crossVectors(u,f),x=new ot().makeBasis(d,u,f),y=new Tt;y.name=n.name,y.position.copy(o),y.quaternion.setFromRotationMatrix(x),t.add(y),y.updateWorldMatrix(!0,!1),y.attach(n);let g=Math.max(1,Math.round(Number(e.sections))),m=h/g,_=Math.max(0,Number(e.bend)||0),T=[];for(let E=0;E<g;E++){let C=E===0?n:n.clone(!0),v=new Tt;v.name=`section:${e.id}:${E}`;let R=new Tt;R.position.y=-m/2,R.scale.y=1/g,v.add(R),y.add(v),R.add(C),T.push({pivot:v,s0:(E+.5)*m})}let M={id:e.id,kind:"sectional",pivot:y,host:y,sections:T,rise:h,bend:_,travel:lP(h,_),sign:1,goal:0,anim:null};return Fv(M,0),y.traverse(E=>{E.userData.bpDoor=M}),M}function Fv(n,e){for(let t of n.sections){let i=aP(t.s0+e*n.travel,n.rise,n.bend);t.pivot.position.set(0,i.y,i.z),t.pivot.rotation.set(i.tilt,0,0)}}function uP(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=d=>t.worldToLocal(new D(Number(d[0]),Number(d[1]),Number(d[2]))),r=i(e.start),o=i(e.end).clone().sub(r);if(o.lengthSq()<1e-12)return null;let a=o.clone().normalize(),c=new Wt().setFromUnitVectors(oP,a),l=new Tt;l.name=n.name,t.add(l);let u=e.panels.map((d,x)=>x===0?n:n.clone(!0)),h=[];e.panels.forEach((d,x)=>{let y=Array.isArray(d.span)?d.span.map(Number):[0,1],g=Array.isArray(d.slide)?d.slide:[0,0,0],m=i([Number(e.start[0])+Number(g[0]),Number(e.start[1])+Number(g[1]),Number(e.start[2])+Number(g[2])]).sub(r),_=new Tt;_.name=`slide:${e.id}:${x}`,l.add(_);let T=new Tt;T.position.copy(r),T.quaternion.copy(c),_.add(T),_.updateWorldMatrix(!0,!0);let M=u[x];M!==n&&(t.add(M),M.updateWorldMatrix(!0,!0)),T.attach(M),T.scale.x=Math.max(.001,y[1]-y[0]);let E=o.clone().multiplyScalar(y[0]);_.position.copy(E),h.push({pivot:_,base:E,slideLocal:m,span:y})});let f={id:e.id,kind:"sliding",pivot:l,host:l,panels:h,sign:1,goal:0,anim:null};return l.traverse(d=>{d.userData.bpDoor=f}),f}function hr(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/ZC;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*JC(i)}var Lv=new Wt,Cl=new D;function hP(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;Cl.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(Lv).invert(),Cl.applyQuaternion(Lv)),!(Cl.lengthSq()<1e-12)&&(Cl.normalize(),n.rotateOnAxis(Cl,e))}function fP(n,e){let t=hr(n,e);if(n.sections)return Fv(n,t),t;if(n.panels){for(let i of n.panels)i.pivot.position.copy(i.base).addScaledVector(i.slideLocal,t);return t}return n.slideLocal?(n.pivot.position.copy(n.slideLocal).multiplyScalar(t),t):(hP(n.pivot,Rh(t,n.sign)),t)}function dP(n,e){let t=hr(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function pP(n,e){let t=hr(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var Th=new D,mP=new tn({side:Nt,transparent:!0,opacity:0,depthWrite:!1});function gP(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(g=>{g.isMesh&&g.geometry?.getAttribute?.("position")&&e.push(g)}),!e.length)return null;let t=new D,i=new D,r=new D;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,r),t.lengthSq()<1e-12||i.lengthSq()<1e-12||r.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),r.normalize();let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let g of e){let m=g.geometry;m.boundingBox||m.computeBoundingBox();let _=m.boundingBox,T=[_.min.x,_.max.x],M=[_.min.y,_.max.y],E=[_.min.z,_.max.z];for(let C of T)for(let v of M)for(let R of E){Th.set(C,v,R).applyMatrix4(g.matrixWorld);let O=Th.dot(t),U=Th.dot(i),W=Th.dot(r);O<s&&(s=O),U<o&&(o=U),W<a&&(a=W),O>c&&(c=O),U>l&&(l=U),W>u&&(u=W)}}let h=[(c-s)/2,(l-o)/2,(u-a)/2];if(h.some(g=>!(g>1e-6)))return null;let f=(s+c)/2,d=(o+l)/2,x=(a+u)/2;return{center:new D(t.x*f+i.x*d+r.x*x,t.y*f+i.y*d+r.y*x,t.z*f+i.z*d+r.z*x),axes:[t,i,r],half:h}}function xP(n,e){let t=new Zi(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new dt(t,mP);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function yP(n,e){let t=n.origin,i=n.direction,r=0,s=1/0;for(let o=0;o<3;o++){let a=e.axes[o],c=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),l=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(l)>1e-8){let h=(c+u)/l,f=(c-u)/l;if(h>f){let d=h;h=f,f=d}if(h>r&&(r=h),f<s&&(s=f),r>s)return null}else if(-c-u>0||-c+u<0)return null}return s<0?null:{tEnter:r,tExit:s}}function _P(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function Dv(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!Hs(e))return e.userData.bpDoor;e=e.parent}return null}function vP(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function bP(n){return Vs(n.object)}function MP(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function Uv(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),r=[],s=new ci,o=new je,a=null,c=0,l=null;function u(){l&&clearTimeout(l),l=null}function h(E,C,v){try{n.onToggle?.(E,{from:C,to:v})}catch(R){console.warn("door onToggle",R)}}let f=dv();f.register({id:"door",priority:100,claim(E,C){let v=Dv(E.object);if(!v||v.host?.userData?.bpIfcHidden)return null;let R=C.now??performance.now(),O=hr(v,R)>Pv,U=()=>{let W=C.now??performance.now(),te=hr(v,W);dP(v,W),h(v,te,v.goal)};return{onTap:U,actions:[{id:"door",labelKey:O?"ui.close":"ui.open",run:U}]}},targets(){let E=[];for(let C of r){let v=C.host;if(!v||v.userData?.bpIfcHidden||!vP(v))continue;let R=new vt().setFromObject(v);if(R.isEmpty())continue;let O=R.getCenter(new D);E.push({center:O,group:`door:${C.id}`,hit:{object:v,point:O},owns:U=>Dv(U)===C})}return E}});function d(E){let C=[],v=Number.isFinite(E.maxT)?E.maxT:1/0;for(let R of r){if(!R.obb||R.host?.userData?.bpIfcHidden||hr(R,E.now)<=Pv)continue;let O=yP(E.raycaster.ray,R.obb);!O||O.tEnter>v||C.push({binding:R,tEnter:O.tEnter})}return _P(C)}f.register({id:"opening",priority:10,probe:(E,C)=>!!d(C),fallback(E,C){let v=d(C);if(!v)return!1;let R=hr(v,C.now);return pP(v,C.now)?(h(v,R,0),!0):!1}});function x(E){for(let R of r)MP(R);if(r.length=0,!E||!e.length)return 0;E.updateWorldMatrix(!0,!0);let v=tP(E,e).map(R=>({host:R,center:iP(R)}));for(let R of nP(v,e)){let O=rP(R.entry.host,R.record);if(!O)continue;let U=O.kind==="drawer"?null:gP(O.host);O.obb=U,O.proxy=U?xP(U,`opening:${O.id}`):null,r.push(O)}return r.length}function y(E){let C=!1;for(let v of r){let R=!!v.anim;!R&&v.shown===v.goal||(fP(v,E),v.shown=v.anim?null:v.goal,R&&(C=!0))}return C}function g(E){if(!(E.button!==void 0&&E.button!==0)){if(c+=1,c>1){a=null;return}a={id:E.pointerId,x:E.clientX,y:E.clientY,moved:0,pointers:1,modifiers:E.altKey||E.ctrlKey||E.metaKey||E.shiftKey,consumed:!1},u(),l=setTimeout(()=>{l=null,!(!a||a.consumed||Eh({dt:500,dx:a.moved,dy:0,pointers:c,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function m(E){if(!a||E.pointerId!==a.id)return;let C=Math.hypot(E.clientX-a.x,E.clientY-a.y);C>a.moved&&(a.moved=C),a.moved>Ah&&u()}function _(E){if(c=Math.max(0,c-1),u(),!a||E.pointerId!==a.id)return;let C=a;if(a=null,C.consumed)return;let v=Math.max(C.moved,Math.hypot(E.clientX-C.x,E.clientY-C.y));QC({dx:v,dy:0,pointers:c>0?2:1,button:E.button,blocked:i(),modifiers:E.altKey||E.ctrlKey||E.metaKey||E.shiftKey})==="tap"&&M(E)}function T(){c=Math.max(0,c-1),a=null}function M(E){let C=n.getCamera();if(!C||!r.length)return;let v=t.getBoundingClientRect(),R=v.width||t.clientWidth||1,O=v.height||t.clientHeight||1;o.x=(E.clientX-v.left)/R*2-1,o.y=-((E.clientY-v.top)/O)*2+1,s.setFromCamera(o,C);let W=r[0]?.pivot?.parent;for(;W?.parent;)W=W.parent;if(!W)return;let te=s.intersectObject(W,!0);f.dispatch(te,{raycaster:s,now:performance.now(),camera:C,root:W,tap:{x:E.clientX-v.left,y:E.clientY-v.top},size:{w:R,h:O}},bP)}return t.addEventListener("pointerdown",g,!0),t.addEventListener("pointermove",m,!0),t.addEventListener("pointerup",_,!0),t.addEventListener("pointercancel",T,!0),t.addEventListener("contextmenu",E=>E.preventDefault()),{bind:x,step:y,bindings:r,taps:f}}var SP=.8,wP=.4,Bv=.01,EP=1e-9;function Mm(n){let e=Array.isArray(n?.slide)?n.slide.map(Number):[];return e.length===3&&e.some(t=>Math.abs(t)>EP)}function TP(n){return n?n.operable===!1?!1:Array.isArray(n.panels)&&n.panels.some(Mm):!0}function AP(n,e){let t=Array.isArray(n?.panels)?n.panels:[],i=-1,r=1/0;return t.forEach((s,o)=>{if(!Array.isArray(s.min)||!Array.isArray(s.max))return;let a=!0,c=0;for(let l=0;l<3;l++){let u=Number(s.min[l])-Bv,h=Number(s.max[l])+Bv;(e[l]<u||e[l]>h)&&(a=!1);let f=(Number(s.min[l])+Number(s.max[l]))/2;c+=(e[l]-f)**2}a&&c<r&&(i=o,r=c)}),i}var kv=new vt,Il=new D;function RP(n){let e=n.geometry;return e&&!e.boundingBox&&e.computeBoundingBox?.(),n.updateWorldMatrix?.(!0,!1),e?.boundingBox?(kv.copy(e.boundingBox).applyMatrix4(n.matrixWorld),kv.getCenter(Il)):n.getWorldPosition(Il),[Il.x,Il.y,Il.z]}function zv(n=[]){let e=new Map;for(let d of Array.isArray(n)?n:[])d&&d.id&&e.set(String(d.id),d);let t=new Map;function i(d){let x=0;for(let g of d){let m=g.geometry;m&&!m.boundingBox&&m.computeBoundingBox?.(),m?.boundingBox&&(x=Math.max(x,m.boundingBox.max.x-m.boundingBox.min.x))}let y=(x||wP)*SP;return{record:null,moving:d.map(g=>({mesh:g,slideLocal:new D(y,0,0),panel:0})),fixed:new Set,panelOf:new Map(d.map(g=>[g,0]))}}function r(d,x){let y=[],g=new Set,m=new Map;for(let _ of x){let T=RP(_),M=AP(d,T),E=M>=0?d.panels[M]:null;if(m.set(_,M),!E||!Mm(E)){g.add(_);continue}let C=E.slide.map(Number),v=_.parent,R=new D(C[0],C[1],C[2]);if(v){v.updateWorldMatrix(!0,!1);let O=v.worldToLocal(new D(T[0],T[1],T[2]));R=v.worldToLocal(new D(T[0]+C[0],T[1]+C[1],T[2]+C[2])).sub(O)}y.push({mesh:_,slideLocal:R,panel:M})}return{record:d,moving:y,fixed:g,panelOf:m}}function s(d,x){let y=t.get(d);if(y)return y;let g=e.get(String(d))||null,m=g?r(g,x):i(x);for(let{mesh:_}of m.moving)_.userData.bpSlideOrigin||(_.userData.bpSlideOrigin=_.position.clone());return y={...m,goal:0,anim:null,shown:0},t.set(d,y),y}function o(d){return e.get(String(d))||null}function a(d){return TP(o(d))}function c(d,x){if(!a(d))return[];let y=s(d,x),g=new Set(y.moving.map(m=>m.mesh));return x.filter(m=>g.has(m))}function l(d,x,y){let g=new Set(c(d,x));if(!g.size)return!1;if(!y)return!0;for(let m=y;m;m=m.parent)if(g.has(m))return!0;return!1}function u(d,x,y,g){if(!a(d))return!1;let m=s(d,x);if(!m.moving.length)return!1;let _=hr(m,g);return m.goal=y?1:0,m.anim={from:_,to:m.goal,t0:g},m.shown=null,!0}function h(d){let y=o(d)?.panels?.find(Mm);return y?y.slide.map(Number):null}function f(d){let x=!1;for(let y of t.values()){if(!y.anim&&y.shown===y.goal)continue;let g=hr(y,d);for(let{mesh:m,slideLocal:_}of y.moving)m.position.copy(m.userData.bpSlideOrigin).addScaledVector(_,g);y.shown=y.anim?null:y.goal,x=!0}return x}return{slide:u,step:f,slides:t,isOperable:a,operableMeshes:c,acceptsHit:l,slideOf:h,recordOf:o}}var CP=700,PP=36,ta=36;function IP(n,e=!1){let t=Math.min(Math.max(n,0),1),i=t<.2?1:1-(t-.2)/.8;if(e)return{opacity:i,rise:0,scale:1};let r=1-(1-t)*(1-t),s=t<.15?.7+.3*t/.15:1;return{opacity:i,rise:PP*r,scale:s}}function Hv(n,e){let t=e.x-n.x,i=e.y-n.y;return Math.hypot(t,i)<1e-6?null:Math.atan2(i,t)*180/Math.PI}function LP(n){return n==="down"?90:-90}function Vv(n,e,t){let i=n[0]-e[0],r=n[2]-e[2],s=Math.cos(t),o=Math.sin(t);return[e[0]+s*i+o*r,n[1],e[2]-o*i+s*r]}function DP(n,e,t){let i=Hv(n,e);if(i==null)return null;let r=e.x-n.x,s=e.y-n.y,o=(n.x+e.x)/2,a=(n.y+e.y)/2,l=r*(t.y-a)-s*(t.x-o)>=0?1:-1;return{angle:i+45*l,bend:l}}function NP(n=CP){let e=[],t=1;return{items:e,add(i,r){let s={id:t++,t0:i,data:r};return e.push(s),s},step(i){let r=[],s=[];for(let o=e.length-1;o>=0;o-=1)(i-e[o].t0)/n>=1&&s.push(...e.splice(o,1));for(let o of e)r.push({item:o,t:(i-o.t0)/n});return{alive:r,expired:s}}}}var OP="http://www.w3.org/2000/svg",Sm='fill="#16181d" stroke="#fff" stroke-width="2.2" stroke-linejoin="round" paint-order="stroke"',FP={arrow:`<path ${Sm} d="M4 12.5 H17 V6 L29 16 L17 26 V19.5 H4 Z"/>`,hinge:`<path fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path fill="none" stroke="#16181d" stroke-width="4.4" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path ${Sm} d="M17 5.5 L28 13 L17 20.5 Z"/>`,ring:`<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" stroke-width="6"/><circle cx="16" cy="16" r="9" fill="none" stroke="#16181d" stroke-width="3"/><circle cx="16" cy="16" r="3" ${Sm}/>`},fs=null;function UP(n=globalThis){try{let e=n.navigator;if(e&&typeof e.vibrate=="function"&&e.vibrate(10))return"vibrate";let t=n.document,i=n.matchMedia?.("(pointer: coarse)")?.matches;if(!t||!i)return"none";if(!fs){fs=t.createElement("label"),fs.setAttribute("aria-hidden","true"),fs.style.display="none";let r=t.createElement("input");r.type="checkbox",r.setAttribute("switch",""),fs.appendChild(r)}return t.head.appendChild(fs),fs.click(),fs.remove(),"ios-switch"}catch{return"none"}}function Gv(n){let e=n.document||globalThis.document,t=n.now||(()=>performance.now()),i=n.requestFrame||(m=>globalThis.requestAnimationFrame(m)),r=n.reducedMotion||(()=>!!globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches),s=n.haptics||(()=>UP()),o=NP(),a=new D,c=null,l=!1;function u(){return c||(c=e.createElement("div"),c.className="bp-feedback",c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"fixed",left:"0",top:"0",width:"0",height:"0",pointerEvents:"none",zIndex:"40"}),e.body.appendChild(c),c)}function h(m){let _=n.getCamera();if(!_||(Array.isArray(m)?a.set(m[0],m[1],m[2]):a.copy(m),_.updateMatrixWorld?.(),a.project(_),!Number.isFinite(a.x)||a.z>1||a.z<-1))return null;let T=n.canvas.getBoundingClientRect();return{x:T.left+(a.x+1)/2*T.width,y:T.top+(1-a.y)/2*T.height}}function f(m,_){let T=h(m),M=Array.isArray(m)?new D(...m):m.clone(),E=Array.isArray(_)?new D(..._):_.clone(),C=E.length();if(C<1e-9)return null;let v=h(M.add(E.multiplyScalar(.1/C)));return!T||!v?null:Hv(T,v)}function d(m){if(m.haptic!==!1)try{s()}catch{}try{return x(m)}catch(_){return console.warn("feedback",_),null}}function x(m){if(!e?.body||!m?.worldPos)return null;let _="arrow",T=-90,M=1;if(m.kind==="switch"||m.kind==="lift")T=LP(m.direction||"up");else if(m.kind==="slide"){let O=m.worldDir?f(m.worldPos,m.worldDir):null;if(O==null)return null;T=O}else if(m.kind==="hinge"){let O=h(m.worldPos),U=m.to?h(m.to):null,W=m.hinge?h(m.hinge):null,te=O&&U&&W?DP(O,U,W):null;if(!te)return null;_="hinge",T=te.angle,M=te.bend}else m.kind==="light"&&(_="ring",T=0);let E=Array.isArray(m.worldPos)?new D(...m.worldPos):m.worldPos.clone();if(m.kind==="hinge"&&m.to){let O=Array.isArray(m.to)?new D(...m.to):m.to;E.lerp(O,.5)}let C=e.createElement("div");C.className=`bp-feedback-item bp-feedback-${m.kind}`,Object.assign(C.style,{position:"absolute",left:"0",top:"0",width:`${ta}px`,height:`${ta}px`,marginLeft:`${-ta/2}px`,marginTop:`${-ta/2}px`,willChange:"transform, opacity",filter:"drop-shadow(0 1px 2px rgba(0,0,0,.45))"});let v=e.createElementNS(OP,"svg");v.setAttribute("viewBox","0 0 32 32"),v.setAttribute("width",String(ta)),v.setAttribute("height",String(ta)),v.style.overflow="visible",v.style.transform=`rotate(${T}deg) scale(1, ${M})`,v.innerHTML=FP[_],C.appendChild(v),u().appendChild(C);let R=o.add(t(),{el:C,anchor:E,kind:m.kind});return y(R,0),l||(l=!0,i(g)),R}function y(m,_){let{el:T,anchor:M,kind:E}=m.data,C=h(M);if(!C){T.style.opacity="0";return}let v=IP(_,r()),R=E==="light"?.8+.7*Math.min(Math.max(_,0),1):v.scale,O=E==="light"?0:v.rise;T.style.opacity=String(v.opacity),T.style.transform=`translate(${C.x.toFixed(1)}px, ${(C.y-O).toFixed(1)}px) scale(${R.toFixed(3)})`}function g(){let{alive:m,expired:_}=o.step(t());for(let T of _)T.data.el.remove();for(let{item:T,t:M}of m)y(T,M);m.length?i(g):l=!1}return{showFeedback:d,count:()=>o.items.length,tick:g}}var BP=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t),actions:(n,e,t,i)=>i.switchActions?.(n,e,t)},{type:"IfcActuator",id:"cover",priority:55,liveOnly:!0,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onCover?.(n,e,t),actions:(n,e,t,i)=>i.coverActions?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t),accepts:(n,e,t)=>t.windowAccepts?t.windowAccepts(n,e):!0}];function Wv(n,e){for(let t of BP)n.register({id:t.id,priority:t.priority,claim(i,r){let s=e.elementOf?.(i.object);if(!s||s.type!==t.type||t.liveOnly&&!e.isLive?.(s)||t.accepts&&!t.accepts(s,i,e))return null;let o=()=>t.run(s,i,r,e),a=t.actions?.(s,i,r,e);return{onTap:o,actions:Array.isArray(a)&&a.length?a:[{id:t.id,labelKey:t.labelKey(s,e),run:o}]}},targets(i){let r=e.targetsFor?.(t.type,i);return Array.isArray(r)?t.liveOnly?r.filter(s=>e.isLive?.(s.element)):r:[]}})}var kP="https://home-test.tail9f879b.ts.net",qv="blueprints.homeMode",zP=new Set(["IfcLightFixture","IfcSwitchingDevice","IfcSensor","IfcActuator"]),Xv=[2e3,5e3,15e3,3e4,6e4],HP=5e3;function $v(n){for(let e of Object.values(n?.elements||{}))if(e&&zP.has(e.type||""))return!0;return!1}function Yv(n={}){let e;try{e=new URLSearchParams(n.search||"")}catch{e=new URLSearchParams}let t="live",i=null;try{i=n.storage?.getItem(qv)??null}catch{i=null}(i==="off"||i==="live")&&(t=i);let r=(e.get("home")||"").trim().toLowerCase();(r==="off"||r==="live")&&(t=r);let s=kP,o=(e.get("homeUrl")||"").trim();if(o)try{let a=new URL(o);(a.protocol==="https:"||a.protocol==="http:")&&(s=a.href.replace(/\/+$/,""))}catch{}return{mode:t,baseUrl:s}}function Zv(n,e){try{n?.setItem(qv,e)}catch{}}function VP(n){let e=new URL(n.replace(/\/+$/,"")+"/events");return e.protocol=e.protocol==="http:"?"ws:":"wss:",e.href}function GP(n,e,t=""){return`${n.replace(/\/+$/,"")}/devices/${encodeURIComponent(e)}${t}`}function WP(n,e){return`${n.replace(/\/+$/,"")}/simulate/devices/${encodeURIComponent(e)}/press`}var Ch=4868682;function wm(n){let e=[[2200,16751135],[3e3,16758835],[4e3,16766814],[5e3,16773816],[6500,15266303]],t=Number.isFinite(n)?Math.min(Math.max(n,e[0][0]),e.at(-1)[0]):3e3,i=0;for(;i<e.length-2&&t>e[i+1][0];)i+=1;let[r,s]=e[i],[o,a]=e[i+1],c=(t-r)/(o-r),l=(h,f)=>h>>f&255,u=h=>Math.round(l(s,h)+(l(a,h)-l(s,h))*c);return u(16)<<16|u(8)<<8|u(0)}function Em(n){let e=n?.state||{},t=!!(n?.online&&e.onOff?.onOff===!0),i=e.levelControl?.currentLevel,r=Number.isFinite(i)?Math.min(Math.max(i/254,0),1):1,s=e.colorControl?.colorTemperatureMireds,o=Number.isFinite(s)&&s>0?Math.round(1e6/s):null,a=t?wm(o):Ch;return{on:t,level:r,kelvin:o,color:a}}function Ll(n){return n?.objectType==="DoublePushButton"?["rocker-1","rocker-2"]:["rocker"]}function Kv(n,e){let t=Ll(n);return{rocker:t.length>1?t[e.side<0?0:1]:t[0],position:e.dy>=0?"up":"down",kind:"short"}}function jv(n,e){if(!n)return[];let t=[];n.online||t.push(e("home.deviceOffline"));let i=n.state||{};switch(n.deviceType){case"ColorTemperatureLight":{let r=i.onOff?.onOff;t.push(r==null?e("home.unknown"):e(r?"home.on":"home.off"));let s=Em({...n,online:!0});Number.isFinite(i.levelControl?.currentLevel)&&t.push(`${e("home.level")} ${Math.round(s.level*100)} %`),s.kelvin&&t.push(`${s.kelvin} K`);let o=i.derived?.channels;o&&t.push(`${e("home.warm")} ${Math.round(o.warm)} % \xB7 ${e("home.cool")} ${Math.round(o.cool)} %`);break}case"GenericSwitch":{let r=i.switch?.lastEvent;r?t.push(`${e("home.lastEvent")}: ${r.rocker} ${r.position} ${r.event}`):t.push(e("home.noEvents"));break}case"ContactSensor":{let r=i.booleanState?.stateValue;t.push(r==null?e("home.unknown"):e(r?"home.contactClosed":"home.contactOpen"));break}case"OccupancySensor":{let r=i.occupancySensing?.occupancy;t.push(r==null?e("home.unknown"):r.occupied?e("home.occupied"):e("home.vacant"));break}case"WindowCovering":{let r=i.windowCovering?.currentPositionLiftPercent100ths;t.push(r==null?e("home.unknown"):`${e("home.closedPct")} ${Math.round(r/100)} %`);break}default:break}return t}function Jv(n){let e=n.fetchImpl||globalThis.fetch?.bind(globalThis),t=n.WebSocketImpl||globalThis.WebSocket,i=n.setTimer||((M,E)=>setTimeout(M,E)),r=n.clearTimer||(M=>clearTimeout(M)),s=new Map,o="off",a=!1,c=!1,l=0,u=0,h=null,f=null;function d(M,E){if(!(o===M&&!E)){o=M;try{n.onStatus?.(M,E)}catch(C){console.error("home onStatus",C)}}}function x(M,...E){try{M?.(...E)}catch(C){console.error("home handler",C)}}function y(M){if(!c||M!==u)return;let E=Xv[Math.min(l,Xv.length-1)];l+=1,f=i(()=>{f=null,c&&M===u&&_(M)},E)}function g(M){if(!M||typeof M.globalId!="string")return;let E=s.get(M.globalId);s.set(M.globalId,M),x(n.onDevice,M,E)}function m(M){let E;try{E=JSON.parse(typeof M=="string"?M:String(M))}catch{return}if(!(!E||typeof E!="object"))if(E.type==="snapshot"&&Array.isArray(E.devices)){l=0;for(let C of E.devices)g(C);d("live"),x(n.onSnapshot,E.devices)}else E.type==="state"&&E.device?g(E.device):E.type==="switch"&&E.event&&x(n.onSwitch,E.event)}async function _(M){if(!e||!t){d("unreachable","no fetch/WebSocket");return}d(o==="live"?"connecting":o==="unreachable"?"unreachable":"connecting");let E=null;try{let v=typeof AbortController=="function"?new AbortController:null,R=i(()=>v?.abort(),HP);try{let O=await e(`${n.baseUrl.replace(/\/+$/,"")}/health`,{signal:v?.signal,cache:"no-store"});O.ok&&(E=await O.json())}finally{r(R)}}catch{E=null}if(!c||M!==u)return;if(!E||E.status!=="ok"){d("unreachable"),y(M);return}a=!!E.simulation;let C;try{C=new t(VP(n.baseUrl))}catch{d("unreachable"),y(M);return}h=C,C.onmessage=v=>{M===u&&m(v.data)},C.onclose=()=>{h===C&&(h=null),!(!c||M!==u)&&(d(o==="live"?"connecting":"unreachable"),y(M))},C.onerror=()=>{}}async function T(M,E){if(!e||o!=="live")return{ok:!1,status:0};try{let C=await e(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)}),v="";if(!C.ok)try{let R=await C.json();v=R?.error?.message||R?.error?.code||""}catch{}return{ok:C.ok,status:C.status,error:v}}catch(C){return{ok:!1,status:0,error:String(C?.message||C)}}}return{start(){c||(c=!0,l=0,u+=1,_(u))},stop(){c=!1,u+=1,f!=null&&r(f),f=null;let M=h;h=null;try{M?.close()}catch{}s.clear(),a=!1,d("off")},status:()=>o,isLive:()=>o==="live",simulation:()=>a,device:M=>o==="live"?s.get(M):void 0,lastKnown:M=>s.get(M),devices:()=>[...s.values()],command:(M,E)=>T(GP(n.baseUrl,M,"/commands"),E),press:(M,E)=>T(WP(n.baseUrl,M),E)}}function eb(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(i=>e[i]):[];return{elements:e,roots:t}}function Ph(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let r=i.parentId||null;(r===e||!r&&i.containerId===e)&&t.push(i)}return t.sort((i,r)=>{let s=(i.order??0)-(r.order??0);return s||String(i.name||"").localeCompare(String(r.name||""))}),t.map(i=>i.globalId)}function Tm(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=s.parentId||s.containerId||null}return t.reverse(),t}function Am(n,e){return Tm(n,e).slice(0,-1)}function Rm(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of Ph(n,s))r(a,o+1)};for(let s of n.roots)r(s,0);return t}function tb(n){return Math.min(Math.max(0,n),4)*12}function nb(n,e,t,i,r=44,s=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/r)-s),c=Math.min(i,Math.ceil((o+e)/r)+s);return{start:a,end:Math.max(a,c)}}var Qv=new WeakMap;function XP(n,e){let t=Qv.get(n.elements);if(!t){t=new Map;for(let i of Object.values(n.elements))for(let r of i?.groups||[])t.has(r)||t.set(r,[]),t.get(r).push(i.globalId);Qv.set(n.elements,t)}return t.get(e)||[]}function Gs(n,e){let t=[],i=[e],r=new Set;for(;i.length;){let s=i.pop();if(!(!s||r.has(s)||!n.elements[s])){r.add(s),t.push(s);for(let o of Ph(n,s))i.push(o);for(let o of XP(n,s))i.push(o)}}return t}function ib(n,e){let t=null,i=null,r=new Set,s=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;s&&n.elements[s]&&!r.has(s);){r.add(s);let o=n.elements[s];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),s=o.containerId||o.parentId||null}return{storey:t,space:i}}function rb(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([r])=>r!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[r,s]of i)e.push(`${r}: ${sb(s)}`)}}return e}function sb(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function ob(n,e){return n&&n===e?"frame":"pulse"}function ab(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${sb(e.value)}`):[]}var qP=`<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.5 4.2h8.2v1.35H2.5V4.2zm0 5.1h8.2v1.35H2.5V9.3zm0 5.15h8.2V15.8H2.5v-1.35z"/>
  <path fill="currentColor" d="M13.2 6.15l3.15 3.15-3.15 3.15-1.05-1.05 1.35-1.35H11.2V8.55h2.3L12.15 7.2l1.05-1.05z"/>
</svg>`;function lb(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},closePopover(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let r=document.createElement("span");r.dataset.i18n="ui.inspector",r.textContent=n.t("ui.inspector");let s=document.createElement("span");s.className="ifc-entry-chevron",s.setAttribute("aria-hidden","true"),s.textContent="\u203A",i.append(r,s),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let c=document.createElement("button");c.type="button",c.className="ifc-back",c.dataset.noSheetDrag="true";let l=document.createElement("button");l.type="button",l.className="ifc-show-all",l.hidden=!0,l.dataset.noSheetDrag="true",a.append(c,l);let u=document.createElement("div");u.className="ifc-crumbs",u.dataset.noSheetDrag="true";let h=document.createElement("div");h.className="ifc-list";let f=document.createElement("div");f.className="ifc-list-spacer";let d=document.createElement("div");d.className="ifc-list-window",h.append(f,d);let x=document.createElement("div");x.className="ifc-head",x.append(a,u),o.append(x,h),e.append(t,o);let y=document.createElement("div");y.id="ifc-popover",y.hidden=!0,y.className="ifc-popover",document.body.append(y);let g=document.createElement("div");g.id="ifc-row-menu",g.hidden=!0,g.className="ifc-menu",document.body.append(g);let m=new Set,_=null,T=null,M=0;function E(){o.hidden=!0,t.hidden=!1,Me()}function C(){t.hidden=!0,o.hidden=!1,U(),requestAnimationFrame(()=>U())}function v(){n.openSheet(),C(),e.scrollTop=0}i.addEventListener("click",()=>v()),c.addEventListener("click",()=>{E(),e.scrollTop=0}),l.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),U()});function R(ve){let Te=n.index.elements[ve];return Te&&(Te.name||Te.id||Te.type)||ve}function O(){u.replaceChildren();let ve=_?Tm(n.index,_):[];if(!ve.length){u.hidden=!0;return}u.hidden=!1,ve.forEach((Te,He)=>{if(He){let We=document.createElement("span");We.className="ifc-crumb-sep",We.textContent="\u203A",u.append(We)}let Be=document.createElement("button");Be.type="button",Be.className="ifc-crumb",Be.textContent=R(Te),Be.addEventListener("click",()=>{_=Te;for(let We of Am(n.index,Te))m.add(We);U(),j(Te)}),u.append(Be)})}function U(){c.textContent=`\u2039 ${n.t("ui.menu")}`,l.textContent=n.t("ui.showAll"),l.hidden=!n.visibility.anyHidden(),r.textContent=n.t("ui.inspector"),O(),ee()}function W(){let ve=e.getBoundingClientRect();return h.getBoundingClientRect().top-ve.top+e.scrollTop}function te(){let ve=e.getBoundingClientRect();return x.getBoundingClientRect().bottom-ve.top+6}function ee(){let ve=Rm(n.index,m);f.style.height=`${ve.length*44}px`;let Te=nb(e.scrollTop,e.clientHeight||320,W(),ve.length,44);d.replaceChildren(),d.style.transform=`translateY(${Te.start*44}px)`;for(let He=Te.start;He<Te.end;He++)d.append(B(ve[He]))}function B(ve){let Te=n.index.elements[ve.id],He=Ph(n.index,ve.id),Be=document.createElement("div");if(Be.className="ifc-row",Be.dataset.id=ve.id,Be.style.paddingLeft=`${tb(ve.depth)+8}px`,Be.style.height=`${44}px`,(ve.id===T||ve.id===_)&&Be.classList.add("is-target"),n.visibility.isHidden(ve.id)&&Be.classList.add("is-hidden"),He.length){let pe=document.createElement("button");pe.type="button",pe.className="ifc-disclosure";let ke=m.has(ve.id);pe.textContent=ke?"\u25BE":"\u203A",pe.setAttribute("aria-expanded",ke?"true":"false"),pe.setAttribute("aria-label",ke?n.t("ui.collapse"):n.t("ui.expand")),pe.addEventListener("click",Ze=>{Ze.stopPropagation(),m.has(ve.id)?m.delete(ve.id):m.add(ve.id),U()}),Be.append(pe)}else{let pe=document.createElement("span");pe.className="ifc-disclosure-spacer",Be.append(pe)}let We=document.createElement("span");We.className="ifc-row-text";let Ge=document.createElement("span");Ge.className="ifc-row-name",Ge.textContent=R(ve.id);let rt=document.createElement("span");return rt.className="ifc-row-meta",rt.textContent=Te?.type||"",We.append(Ge,rt),Be.append(We),ge(Be,ve.id),Be}let $=0;function k(ve){let Te=performance.now();if(Te-$<40)return;$=Te;let He=ob(_,ve);_=ve,n.onFrame(ve,{move:He==="frame"}),ie(ve),O()}function J(ve){return ve instanceof Element&&!!ve.closest(".ifc-disclosure")}function ge(ve,Te){let He=null,Be=0,We=()=>{Be&&window.clearTimeout(Be),Be=0},Ge=(ke,Ze,Ee)=>{J(Ee)||(We(),He={x:ke,y:Ze,moved:0,consumed:!1},Be=window.setTimeout(()=>{Be=0,!(!He||He.consumed||Eh({dt:500,dx:He.moved,dy:0,released:!1})!=="longpress")&&(He.consumed=!0,Ae(Te,He.x,He.y))},500))},rt=(ke,Ze)=>{if(!He)return;let Ee=Math.hypot(ke-He.x,Ze-He.y);Ee>He.moved&&(He.moved=Ee),He.moved>12&&We()},pe=(ke,Ze,Ee)=>{We();let P=He;He=null,!(!P||P.consumed||J(Ee)||Math.max(P.moved,Math.hypot(ke-P.x,Ze-P.y))>12)&&k(Te)};ve.addEventListener("pointerdown",ke=>{ke.button!==void 0&&ke.button!==0||Ge(ke.clientX,ke.clientY,ke.target)}),ve.addEventListener("pointermove",ke=>rt(ke.clientX,ke.clientY)),ve.addEventListener("pointerup",ke=>{ke.pointerType!=="touch"&&pe(ke.clientX,ke.clientY,ke.target)}),ve.addEventListener("pointercancel",()=>We()),ve.addEventListener("touchend",ke=>{let Ze=ke.changedTouches[0];Ze&&pe(Ze.clientX,Ze.clientY,ke.target)},{passive:!0})}function ie(ve){T=ve,M&&window.clearTimeout(M),M=window.setTimeout(()=>{T===ve&&(T=null),ee()},1600),ee()}function j(ve){let He=Rm(n.index,m).findIndex(We=>We.id===ve);if(He<0)return;let Be=W()+He*44;e.scrollTop=Math.max(0,Be-te()),ee()}let ue=!1;function Ae(ve,Te,He){fe(),g.replaceChildren(),g.hidden=!1,ue=!1;let Be=n.visibility.isHidden(ve);re(Be?"ui.unhideThis":"ui.hideThis",()=>{Be?n.visibility.unhide(ve):n.visibility.hide(ve),De()}),re("ui.hideOthers",()=>{n.visibility.hideOthers(ve),De()}),re("ui.unhideOthers",()=>{n.visibility.unhideOthers(ve),De()}),Q(g,Te,He)}function De(){n.onVisibility(),Me(),U()}function re(ve,Te){let He=document.createElement("button");He.type="button",He.className="ifc-menu-btn",He.textContent=n.t(ve);let Be=!1,We=Ge=>{Ge.preventDefault(),Ge.stopPropagation(),!Be&&(Be=!0,Te())};He.addEventListener("touchend",We),He.addEventListener("click",We),g.append(He)}function Me(){g.hidden=!0,g.replaceChildren()}function fe(){y.hidden=!0,y.replaceChildren()}function Q(ve,Te,He){ve.hidden=!1,ve.style.left="0px",ve.style.top="0px";let Be=ve.getBoundingClientRect(),We=8,Ge=Math.max(We,window.innerWidth-Be.width-We),rt=Math.min(Math.max(We,Te),Ge),pe=He+8;pe+Be.height>window.innerHeight-We&&(pe=Math.max(We,He-Be.height-8)),ve.style.left=`${rt}px`,ve.style.top=`${pe}px`}function le(ve,Te,He,Be,We){if(Me(),y.replaceChildren(),y.hidden=!1,!ve)Ce(n.t("ui.noIfc"),Te||"");else{let Ge=document.createElement("div");Ge.className="ifc-pop-id";let rt=document.createElement("button");rt.type="button",rt.className="ifc-pop-title";let pe=document.createElement("div");pe.className="ifc-kicker";let ke=document.createElement("div");ke.className="ifc-name";let Ze=ve.name||ve.id||"",Ee=ve.globalId||"",P=!1,de=0,me=()=>{pe.hidden=!P,pe.textContent=P?n.t("ui.globalId"):"",ke.textContent=P?Ee:Ze,ke.className=P?"ifc-gid":"ifc-name",rt.setAttribute("aria-label",P?Ze:n.t("ui.globalId"))},Re=w=>{w.preventDefault(),w.stopPropagation();let S=performance.now();S-de<80||(de=S,P=!P,me())};me(),rt.append(pe,ke),rt.addEventListener("touchend",Re),rt.addEventListener("click",Re);let ae=document.createElement("button");ae.type="button",ae.className="ifc-reveal",ae.innerHTML=qP,ae.setAttribute("aria-label",n.t("ui.reveal")),ae.title=n.t("ui.reveal"),ae.addEventListener("click",w=>{w.stopPropagation(),fe(),Le(ve.globalId)}),Ge.append(rt,ae),y.append(Ge),Ce(n.t("ui.type"),ve.type||"");let p=ib(n.index,ve.globalId);p.storey&&Ce(n.t("ui.storey"),p.storey.name||p.storey.id),p.space&&Ce(n.t("ui.space"),p.space.name||p.space.id);let N=ab(ve);N.length&&Oe(n.t("ui.dimensions"),N);let Z=rb(ve);Z.length&&Oe(n.t("ui.note"),Z);let A=n.liveLines?.(ve)||[];A.length&&Oe(n.t("home.live"),A)}if(He.length){let Ge=document.createElement("div");Ge.className="ifc-actions";for(let rt of He){let pe=document.createElement("button");pe.type="button",pe.className="ifc-action",pe.textContent=rt.label||n.t(rt.labelKey),pe.addEventListener("click",ke=>{ke.stopPropagation(),rt.run(),n.onVisibility()}),Ge.append(pe)}y.append(Ge)}Q(y,Be,We)}function Ce(ve,Te){let He=document.createElement("div");He.className="ifc-line";let Be=document.createElement("div");Be.className="ifc-kicker",Be.textContent=ve;let We=document.createElement("div");We.className="ifc-value",We.textContent=Te,He.append(Be,We),y.append(He)}function Oe(ve,Te){let He=document.createElement("div");He.className="ifc-line";let Be=document.createElement("div");Be.className="ifc-kicker",Be.textContent=ve;let We=document.createElement("div");We.className="ifc-note",We.textContent=Te.join(`
`),He.append(Be,We),y.append(He)}function Le(ve){if(n.index.elements[ve]){for(let Te of Am(n.index,ve))m.add(Te);_=ve,T=ve,n.openSheet(),C(),U(),requestAnimationFrame(()=>j(ve))}}e.addEventListener("scroll",()=>{o.hidden||ee()},{passive:!0});let ze=ve=>ve instanceof Node?!(!y.hidden&&y.contains(ve)||!g.hidden&&g.contains(ve)):!0;return document.addEventListener("pointerup",()=>{g.hidden||(ue=!0)},!0),document.addEventListener("pointerdown",ve=>{let Te=ve.target;!y.hidden&&ze(Te)&&fe(),!g.hidden&&ue&&ze(Te)&&Me()},!0),{open:v,refresh:U,closePopover:fe,openPopover:le,reveal:Le,isInspectorOpen:()=>!o.hidden}}function cb(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let r of Gs(n,i))e.add(r)},unhide(i){for(let r of Gs(n,i))e.delete(r)},hideOthers(i){let r=new Set(Gs(n,i));for(let s of t())r.has(s)||e.add(s)},unhideOthers(i){let r=new Set(Gs(n,i));for(let s of t())r.has(s)||e.delete(s)},showAll(){e.clear()}}}var Dm=.3,db=1.5,$P=.5,Cm=new je,YP=new D,Oh=new D,Pm=new D,Ih=new D,Lh=new D,na=new D,Dh=new D,Im=new Wt,ub=new Wt,Nh=new Wt,hb=new Wt,Lm=new ns,ZP=new D(0,1,0),fb=new ci;function KP(n,e,t=Dm,i=db){let r=Number.isFinite(e)&&e>0?e:0,s=Number.isFinite(n)&&n>0?n:null;return s!=null&&s>=t?s:s!=null?Math.max(i,t):r>=t?r:Math.max(i,t)}function jP(n,e,t=Dm,i=db){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function JP(n,e,t=Dm,i=$P){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function QP(n,e,t,i=1){let r=2*Math.PI*i/Math.max(1,t);return{theta:-n*r,phi:-e*r}}function e2(n,e,t,i,r){if(!i&&!r||(Lh.copy(n.position).sub(t),Lh.lengthSq()<1e-12))return!1;na.copy(n.up),na.lengthSq()<1e-12?na.set(0,1,0):na.normalize(),hb.setFromUnitVectors(na,ZP),Ih.copy(Lh).applyQuaternion(hb),Lm.setFromVector3(Ih);let s=1e-6;return r=Math.min(Math.PI-s,Math.max(s,Lm.phi+r))-Lm.phi,Im.setFromAxisAngle(na,i),Dh.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(Im),Dh.lengthSq()<1e-12?!1:(Dh.normalize(),ub.setFromAxisAngle(Dh,r),Nh.copy(ub).multiply(Im),Ih.copy(Lh).applyQuaternion(Nh),n.position.copy(t).add(Ih),e.sub(t).applyQuaternion(Nh).add(t),n.quaternion.premultiply(Nh),!0)}function t2(n,e,t){return!(t>0)||(n.getWorldDirection(Oh),Pm.copy(n.position).addScaledVector(Oh,t),Pm.distanceToSquared(e)<1e-12)?!1:(e.copy(Pm),!0)}function n2(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let r of i){let s=r&&r.clippingPlanes;if(s){for(let o of s)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function i2(n,e,t,i,r){if(!e||!t||e.isOrthographicCamera)return null;let s=n.getBoundingClientRect(),o=s.width||n.clientWidth||1,a=s.height||n.clientHeight||1;Cm.x=(i-s.left)/o*2-1,Cm.y=-((r-s.top)/a)*2+1,t.updateWorldMatrix(!0,!0),fb.setFromCamera(Cm,e);let c=fb.intersectObject(t,!0);e.getWorldDirection(Oh);for(let l of c){let u=l.object;if(!u.visible||Hs(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!n2(u,l.point))continue;let f=l.distance;if(!(f>1e-4))continue;let d=YP.copy(l.point).sub(e.position).dot(Oh);if(d>1e-4)return{point:l.point.clone(),slant:f,depth:d}}return null}function r2(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),r=new Map,s=null;function o(){return t.enabled!==!1&&!i()}function a(){let M=n.getCamera();return!!(M&&M.isPerspectiveCamera)}function c(M,E){return i2(e,n.getCamera(),n.getRoot(),M,E)}function l(M){let E=n.getCamera();!E||!a()||M==null||t2(E,t.target,M)}function u(M,E){let C=n.getCamera();if(!C||!a())return;let v=c(M,E),R=C.position.distanceTo(t.target);l(KP(v?v.slant:null,R))}function h(M,E){let C=n.getCamera();if(!C||!a())return;let v=c(M,E),R=C.position.distanceTo(t.target);l(jP(v?v.depth:null,R))}function f(){s=null,t.enableRotate=!0}function d(M){if(r.set(M.pointerId,{x:M.clientX,y:M.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(r.size>=2){f(),t.zoomToCursor=!0;let U=x(M);u(U.x,U.y);return}let E=M.pointerType==="touch",C=M.button??0;if(!E&&C===2){f(),h(M.clientX,M.clientY);return}if(!E&&C===1){f(),u(M.clientX,M.clientY);return}if(!E&&C!==0)return;if(!E&&(M.shiftKey||M.ctrlKey||M.metaKey)){f(),h(M.clientX,M.clientY);return}let v=n.getCamera(),R=c(M.clientX,M.clientY),O=v?v.position.distanceTo(t.target):0;if(!R||!JP(R.slant,O)){f();return}t.enableRotate=!1,s={id:M.pointerId,x:M.clientX,y:M.clientY,lastX:M.clientX,lastY:M.clientY,point:R.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function x(M){let E=M.clientX,C=M.clientY,v=1;for(let[R,O]of r)R!==M.pointerId&&(E+=O.x,C+=O.y,v+=1);return{x:E/v,y:C/v}}function y(M){let E=r.get(M.pointerId);if(E&&(E.x=M.clientX,E.y=M.clientY),!s||M.pointerId!==s.id||r.size!==1||!o())return;let C=n.getCamera();if(!C)return;let v=M.clientX-s.lastX,R=M.clientY-s.lastY;if(!s.dragging){if(Math.hypot(M.clientX-s.x,M.clientY-s.y)<=Ah)return;s.dragging=!0}if(!v&&!R)return;let O=QP(v,R,e.clientHeight||1,t.rotateSpeed);e2(C,t.target,s.point,O.theta,O.phi),C.lookAt(t.target),s.lastX=M.clientX,s.lastY=M.clientY}function g(M){r.delete(M.pointerId),s&&s.id===M.pointerId&&f(),r.size<2&&(t.zoomToCursor=!1),r.size===0&&(t.enableRotate=!0)}function m(M){g(M)}function _(M){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||s&&s.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(M.clientX,M.clientY)}function T(){r.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:y,onPointerUp:g,onPointerCancel:m,onWheel:_,onWheelDone:T}}function pb(n){let e=r2(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var ia=class extends Fi{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let r=0;r<t;r++)i[6*r]=e[r].x,i[6*r+1]=e[r].y,i[6*r+2]=e[r].z||0,i[6*r+3]=e[r+1].x,i[6*r+4]=e[r+1].y,i[6*r+5]=e[r+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Fh=class extends ls{constructor(e=new ia,t=new rr({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var s2='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',o2=420,a2=36,l2=new D,mb=new D,gb=new D,Nm=new D,Ws=new D,ds=new D;function Um(n){return new D(n[0]*.001,n[2]*.001,-n[1]*.001)}function Om(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function xb(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function c2(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function Uh(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function u2(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/o2,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function h2(n,e){if(e==="plate")return a2;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function ra(n,e,t,i="center",r=null,s=1){let o=Number.isFinite(s)&&s>0?s:1,a=Math.max(8,Math.round(t*o)),c=n.map(v=>String(v)).filter(v=>v.length),l=document.createElement("canvas"),u=l.getContext("2d"),h=`600 ${a}px ${s2}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),x=Math.ceil(a*1.25);u&&(u.font=h);let y=a;if(u)for(let v of c)y=Math.max(y,u.measureText(v).width);let g=Math.ceil(y+f*2),m=Math.ceil(Math.max(c.length,1)*x+d*2),_=2;l.width=g*_,l.height=m*_;let T=l.getContext("2d");if(T){T.scale(_,_),T.clearRect(0,0,g,m);let v=e==="plate";T.font=h,T.textAlign="left",T.textBaseline="middle",T.lineJoin="round",T.miterLimit=2,T.lineWidth=Math.max(2,a*.28),T.strokeStyle=v?"#ffffff":"rgba(0,0,0,0.92)",T.fillStyle=r||(v?"#141414":"#f7f7f8"),c.forEach((R,O)=>{let U=f,W=d+x*O+x*.5;T.strokeText(R,U,W),T.fillText(R,U,W)})}let M=new Rr(l);M.colorSpace=At,M.flipY=!0,M.needsUpdate=!0;let E=new tn({map:M,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Nt}),C=new dt(new Qn(1,1),E);return C.renderOrder=30,C.frustumCulled=!1,C.userData.cssWidth=g,C.userData.cssHeight=m,C.userData.anchor=i,C.userData.fill=r,C.userData.fontScale=o,C}function Fm(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function fr(n,e=!1){let t=new ia;t.setPositions([0,0,0,0,0,0]);let i=new rr({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let r=new Fh(t,i);return r.renderOrder=25,r.frustumCulled=!1,r.computeLineDistances(),r}function kr(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function yb(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:r,getVisibleWidthM:s,getTarget:o}=n,a=n.getExaggeration||(()=>1),c=new Tt;c.name="Annotations",c.userData.blueprintAnnotations=!0,e.add(c);let l=null,u="viewer",h=!0,f=0,d=[],x=null,y=null,g=null;function m(){return u==="plate"?1315860:15921908}function _(j){return j&&j.color!=null?Om(j.color,m()):l&&l.annotationColor!=null?Om(l.annotationColor,m()):m()}function T(j){return Fm(_(j))}function M(j){let ue=Number(j&&j.size);return Number.isFinite(ue)&&ue>0?ue:1}function E(j){j.traverse(ue=>{ue.geometry&&ue.geometry.dispose();let Ae=ue.material;Ae&&(Ae.map&&Ae.map.dispose(),Ae.dispose())})}function C(){for(let j of[...c.children])c.remove(j),E(j);d=[],x=null,y=null,g=null}function v(){return h2(i(),u)}function R(){c.visible=!!l&&h}function O(){if(C(),f=v(),!l){R();return}let j=r(),ue=m(),Ae=f,De=Array.isArray(l.annotations)?l.annotations:[];for(let Q of De)if(!(!Q||typeof Q!="object")){if(Q.kind==="callout"&&Array.isArray(Q.anchor)){let le=Uh(Q.text,j);if(!le)continue;let Ce=ra(le.split(`
`),u,Ae,"center",T(Q),M(Q)),Oe=(Q.leader===!1?[]:xb(Q)).map(()=>fr(_(Q)));c.add(...Oe,Ce),d.push({kind:"callout",sprite:Ce,lines:Oe,data:Q})}else if(Q.kind==="dim"&&Array.isArray(Q.a)&&Array.isArray(Q.b)){let le=_(Q),Ce=ra(["0"],u,Ae,"center",Fm(le),M(Q)),Oe=fr(le),Le=fr(le),ze=fr(le),ve=fr(le),Te=fr(le);c.add(Oe,Le,ze,ve,Te,Ce),d.push({kind:"dim",sprite:Ce,lines:[Oe,Le,ze,ve,Te],data:Q})}else if(Q.kind==="line"&&Array.isArray(Q.points)&&Q.points.length>=2){let le=Om(Q.color,m()),Oe=[fr(le,!!Q.dashed)];Q.arrow&&Oe.push(fr(le,!1),fr(le,!1));let Le=null,ze=Uh(Q.text,j);ze&&(Le=ra(ze.split(`
`),u,Ae,"center",Fm(le),M(Q))),c.add(...Oe),Le&&c.add(Le),d.push({kind:"line",sprite:Le,lines:Oe,data:Q})}}let re=Uh(l.title,j),Me=l.project?String(l.project):"",fe=[...re.split(`
`),Me].filter(Boolean);fe.length&&(x=ra(fe,u,Ae,"topleft"),c.add(x)),y=ra(["1:1"],u,Ae,"bottomleft"),g=fr(ue),c.add(g,y),R()}function U(j){let ue=Um(j),Ae=a();return Ae!==1&&(ue.y*=Ae),ue}function W(j,ue=l2){return ue.copy(j).project(t())}function te(j,ue,Ae,De=new D){return De.set(j,ue,Ae).unproject(t())}function ee(j){let ue=t(),Ae=i(),De=Math.max(1,Ae.clientHeight);if(ue.isOrthographicCamera){let fe=Math.max(ue.zoom,1e-6);return(ue.top-ue.bottom)/fe/De}let re=Math.max(ue.position.distanceTo(j),1e-4),Me=(ue.fov||45)*Math.PI/180;return 2*Math.tan(Me/2)*re/De}let B=new D,$=new D;function k(j,ue){let Ae=t(),De=ee(ue),re=De*j.userData.cssWidth,Me=De*j.userData.cssHeight;B.set(1,0,0).applyQuaternion(Ae.quaternion),$.set(0,1,0).applyQuaternion(Ae.quaternion);let fe=j.userData.anchor||"center";j.position.copy(ue),fe==="topleft"?(j.position.addScaledVector(B,re*.5),j.position.addScaledVector($,-Me*.5)):fe==="bottomleft"&&(j.position.addScaledVector(B,re*.5),j.position.addScaledVector($,Me*.5)),j.quaternion.copy(Ae.quaternion),j.scale.set(re,Me,1)}function J(){let j=i(),ue=Math.max(1,j.width),Ae=Math.max(1,j.height);c.traverse(De=>{let re=De.material;re&&re.resolution&&re.resolution.set(ue,Ae)})}function ge(j,ue){let Ae=ra(ue,u,f||v(),j.userData.anchor,j.userData.fill,j.userData.fontScale||1);j.material.map?.dispose(),j.material.dispose(),j.material=Ae.material,j.userData.cssWidth=Ae.userData.cssWidth,j.userData.cssHeight=Ae.userData.cssHeight,Ae.geometry.dispose()}function ie(){if(!l||!h||(v()!==f&&O(),!c.visible))return;J();let ue=r();t().updateMatrixWorld();for(let fe of d)if(fe.kind==="callout"){let Q=U(fe.data.anchor),le=W(Q,mb),Ce=Array.isArray(fe.data.offset)?fe.data.offset:[.08,.06],Oe=le.x+Number(Ce[0]||0)*2,Le=le.y+Number(Ce[1]||0)*2,ze=te(Oe,Le,le.z,gb);k(fe.sprite,ze);let ve=ee(ze),Te=ve*fe.sprite.userData.cssWidth*.5,He=xb(fe.data);for(let Be=0;Be<fe.lines.length;Be+=1){let We=U(He[Be]||fe.data.anchor);Ws.copy(ze).sub(We);let Ge=Ws.length();Ge>Te+ve?(Ws.setLength(Ge-Te),Ws.add(We)):Ws.copy(ze),kr(fe.lines[Be],We,Ws)}}else if(fe.kind==="dim"){let Q=U(fe.data.a),le=U(fe.data.b),Ce=W(Q,mb),Oe=W(le,gb),Le=Oe.x-Ce.x,ze=Oe.y-Ce.y,ve=Math.hypot(Le,ze)||1e-6;Le/=ve,ze/=ve;let Te=Number(fe.data.offset)||.04,He=-ze*Te*2,Be=Le*Te*2,We=(Ce.z+Oe.z)*.5,Ge=te(Ce.x+He,Ce.y+Be,We,new D),rt=te(Oe.x+He,Oe.y+Be,We,new D),pe=ee(Ge),ke=pe*6,Ze=pe*8;ds.copy(Ge).sub(Q);let Ee=ds.length()||1;ds.multiplyScalar((Ee+Ze)/Ee);let P=Q.clone().add(ds);ds.copy(rt).sub(le);let de=ds.length()||1;ds.multiplyScalar((de+Ze)/de);let me=le.clone().add(ds),Re=Q.clone().lerp(Ge,Math.min(.85,ke/Ee)),ae=le.clone().lerp(rt,Math.min(.85,ke/de));kr(fe.lines[0],Re,P),kr(fe.lines[1],ae,me),kr(fe.lines[2],Ge,rt);let p=pe*10,Z=te(Ce.x+He-ze*.012,Ce.y+Be+Le*.012,We,new D).sub(Ge);Z.lengthSq()<1e-16?Z.set(0,p,0):Z.setLength(p),kr(fe.lines[3],Ge.clone().sub(Z),Ge.clone().add(Z)),kr(fe.lines[4],rt.clone().sub(Z),rt.clone().add(Z)),Nm.copy(Ge).lerp(rt,.5);let A=te(Ce.x+He-ze*.03,Ce.y+Be+Le*.03,We,new D).sub(te(Ce.x+He,Ce.y+Be,We,new D));A.lengthSq()>1e-12&&Nm.add(A);let S=Uh(fe.data.text,ue)||c2(Q.distanceTo(le));fe.sprite.userData.labelText!==S&&(ge(fe.sprite,[S]),fe.sprite.userData.labelText=S),k(fe.sprite,Nm)}else if(fe.kind==="line"){let Q=fe.data.points.map(Ce=>U(Ce)),le=[];for(let Ce of Q)le.push(Ce.x,Ce.y,Ce.z);if(fe.lines[0].geometry.setPositions(le),fe.lines[0].computeLineDistances(),fe.data.arrow&&Q.length>=2&&fe.lines.length>=3){let Ce=Q[Q.length-2],Oe=Q[Q.length-1],Le=Oe.clone().sub(Ce);if(Le.lengthSq()>1e-12){Le.normalize();let ze=ee(Oe),ve=Le.clone().multiplyScalar(-ze*16),Te=new D().crossVectors(Le,t().up).normalize().multiplyScalar(ze*7);Te.lengthSq()<1e-16&&Te.set(ze*7,0,0),kr(fe.lines[1],Oe,Oe.clone().add(ve).add(Te)),kr(fe.lines[2],Oe,Oe.clone().add(ve).sub(Te))}}if(fe.sprite){let Ce=Q[0].clone().lerp(Q[Q.length-1],.5);k(fe.sprite,Ce)}}let De=W(o(),Ws).z;if(x){let fe=te(-.94,.9,De,new D);k(x,fe)}let re=s(),Me=u2(re??NaN);if(y&&g){let fe=re!=null&&re>8?2:1,Q=te(-.9,-.86,De,new D),le=te(-.9+.08,-.86,De,new D).sub(Q),Ce=ee(Q),Oe=re&&re>0?fe/re*Math.max(1,i().clientWidth):80;le.lengthSq()>1e-12?le.setLength(Math.max(Oe*Ce,Ce*40)):le.set(Ce*80,0,0),kr(g,Q,Q.clone().add(le));let Le=y.userData.labelText,ze=Me?`${Me}  \xB7  ${Math.round(fe*1e3)} mm`:"";Le!==ze&&(ge(y,ze?[ze]:["\u2014"]),y.userData.labelText=ze);let ve=te(-.9,-.8,De,new D).sub(Q);k(y,Q.clone().add(ve))}}return{group:c,setSpec(j){l=j&&typeof j=="object"?j:null,O(),ie()},setInk(j){u=j==="plate"?"plate":"viewer",O(),ie()},setVisible(j){h=!!j,R(),c.visible&&ie()},isVisible(){return h},relocalize(){O(),ie()},glyphBoundsNdc(){let j=i(),ue=Math.max(1,j.clientWidth),Ae=Math.max(1,j.clientHeight),De=1/0,re=-1/0,Me=1/0,fe=-1/0,Q=!1;for(let le of d){let Ce=le.sprite;if(!Ce||Ce===x||Ce===y||le.kind!=="callout"&&le.kind!=="dim"&&le.kind!=="line")continue;let Oe=W(Ce.position),Le=(Ce.userData.cssWidth||0)/ue,ze=(Ce.userData.cssHeight||0)/Ae;De=Math.min(De,Oe.x-Le),re=Math.max(re,Oe.x+Le),Me=Math.min(Me,Oe.y-ze),fe=Math.max(fe,Oe.y+ze),Q=!0}return Q?{minX:De,maxX:re,minY:Me,maxY:fe}:null},update:ie,clear(){l=null,C(),c.visible=!1}}}function _b(n){return n/25.4*72}function Bm(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function f2(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,r)=>{e.toBlob(s=>{s?i(s):r(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function d2(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function p2(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Nl(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function m2(n){let e=n.width,t=n.height,i=n.data,r=new Uint8Array(e*t*3);for(let M=0,E=0;M<i.length;M+=4,E+=3){let C=i[M+3]/255;r[E]=Math.round(i[M]*C+255*(1-C)),r[E+1]=Math.round(i[M+1]*C+255*(1-C)),r[E+2]=Math.round(i[M+2]*C+255*(1-C))}let{bytes:s,filter:o}=await p2(r),a=_b(420),c=_b(297),l=`q
${a.toFixed(3)} 0 0 ${c.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(l),h=[],f=0;function d(M){h.push(M),f+=M.length}let x=[0];function y(M,E){x[M]=f,d(Nl(`${M} 0 obj
`));for(let C of E)d(Nl(C));d(Nl(`
endobj
`))}d(Nl(`%PDF-1.4
`)),y(1,["<< /Type /Catalog /Pages 2 0 R >>"]),y(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),y(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${c.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),y(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),y(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${s.length} >>
stream
`,s,`
endstream`]);let g=f,m=`xref
0 6
0000000000 65535 f 
`;for(let M=1;M<=5;M++)m+=`${String(x[M]).padStart(10,"0")} 00000 n 
`;m+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${g}
%%EOF
`,d(Nl(m));let _=new Uint8Array(f),T=0;for(let M of h)_.set(M,T),T+=M.length;return new Blob([_],{type:"application/pdf"})}async function vb(n){let e=await f2(n),t=await d2(e),i=await m2(t);return{png:e,pdf:i}}var km="scene";function _2(){try{return(new URLSearchParams(location.search).get(km)||"").trim()}catch{return""}}function Mb(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set(km,t):e.searchParams.delete(km);let i=`${e.pathname}${e.search}${e.hash}`,r=`${location.pathname}${location.search}${location.hash}`;i!==r&&history.replaceState(null,"",i)}catch{}}function v2(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],r=Array.isArray(t.partGroups)?t.partGroups:[],s=Array.isArray(t.doors)?t.doors:[],o=Array.isArray(t.windows)?t.windows:[],a=eb(t.ifc),c=new Map,l=()=>{},u=String(t.scene!=null?t.scene:_2()).trim();o_(),Gp(document);let h=[],f=null,d=1842206,x=!0,y=By(),g=gy(),m=new Map,_=new Map,T=new Map,M=new Map,E=new Set,C=new Map,v=new Map,R=new Map,O=new Set,U=null;U=n_(b=>{x=b,d=b?1842206:15263981,f&&(f.background=new Je(d)),document.documentElement.style.colorScheme=b?"dark":"light",m.size&&ye()});let W=new qu({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});W.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),W.outputColorSpace=At,W.toneMapping=Cs,W.toneMappingExposure=1.05,W.localClippingEnabled=!0;let te=Py(W);f=new Xn,f.background=new Je(d);let ee=1,B=new Tt;B.name="VerticalExaggeration",f.add(B);function $(b){let I=Number(b);ee=Number.isFinite(I)&&I>0?I:1,B.scale.set(1,ee,1)}let k=30,J=120,ge=75,ie=125,j="perspective",ue=ge,Ae=ge,De=1,re=!1,Me=new un(45,1,.01,1e6),fe=new Di(-1,1,1,-1,.01,1e6),Q=Me,le=new Ju(Q,n);le.enableDamping=!1,le.screenSpacePanning=!0;let Ce=()=>!1,Oe=Uv({canvas:n,getCamera:()=>Q,records:s,isBlocked:()=>Ce(),onLongPress:b=>l(b),onToggle:(b,I)=>$b(b,I)}),Le=Gv({canvas:n,getCamera:()=>Q});window.blueprintsFeedback=Le;let ze=new Map,ve=new Map,Te=zv(o),He={on:!0,level:1,color:wm(3e3)},Be={on:!1,level:1,color:Ch},We=new Map,Ge=null,rt=b=>b&&Ge?Ge.device(b.globalId):void 0;Wv(Oe.taps,{elementOf:b=>Gl(b),isOn:b=>!!ze.get(b.globalId),isOpen:b=>{let I=rt(b);if(I?.deviceType==="WindowCovering"){let G=I.state?.windowCovering?.targetPositionLiftPercent100ths;return G!=null&&G<5e3}return!!ve.get(b.globalId)},isLive:b=>!!rt(b),onLight:b=>Vb(b),onSwitch:(b,I)=>Kb(b,I),switchActions:b=>jb(b),onCover:b=>Jb(b),coverActions:b=>Qb(b),onWindow:b=>eM(b),windowAccepts:(b,I)=>Zb(b,I?.object),targetsFor:(b,I)=>Xb(b,I)});let pe=yb({scene:f,getCamera:()=>Q,getCanvas:()=>n,getLocale:yh,getVisibleWidthM:()=>{if(!Q.isOrthographicCamera)return null;let b=Math.max(Q.zoom,1e-6);return(Q.right-Q.left)/b},getTarget:()=>le.target,getExaggeration:()=>ee}),ke=null,Ze=null,Ee=new Za(16777215,.45);f.add(Ee);let P=new Ji(16777215,1.15);P.position.set(.6,1,.4),f.add(P);let de=new Ji(16777215,.4);de.position.set(-.5,.2,-.6),f.add(de);let me=new Xo(W);f.environment=me.fromScene(new Qu,.04).texture,me.dispose();let Re=null;function ae(){return Re||(Re=ov({renderer:W,scene:f,baseLights:[Ee,P,de],catalogueUrl:t.materialsUrl||null,catalogueText:t.materialsText||null,assetSlots:Array.isArray(t.fixtureAssets)?t.fixtureAssets:[],onChange:()=>{p?.traverse(b=>{if(!b.isMesh)return;let I=Array.isArray(b.material)?b.material:[b.material];for(let G of I)G?.userData?.bpOwned&&G.userData.bpCatalogueId&&Re?.registry.bind(G)}),Qt=!0}}),Re)}window.blueprintsRealistic={report:()=>Re?Re.report(m):null,renderer:W,lights:()=>Object.values(a.elements).filter(b=>{let I=b?oi(b):[];return I.length>0&&I.every(G=>G.userData.bpPart==="light")}).map(b=>({globalId:b.globalId,name:b.name})),toggleLight:b=>{let I=a.elements[b];I&&ig(I)},get controller(){return Re}};let p=null;pb({canvas:n,controls:le,getCamera:()=>Q,getRoot:()=>p,isBlocked:()=>Ce()||le.enabled===!1});let N=new vt,Z=new D,A=new D,w=new D,S=new D,H=new D,z=[],Y=1,K=!1,q=!1,V=!1;new Yo().parse(e,"",b=>{p=b.scene,B.add(p),Oe.bind(p),p.traverse(G=>{if(!G.isMesh)return;let X=Cv(G);G.userData.bpPart=X.part,G.userData.bpElementKey=X.element,X.element&&(c.has(X.element)||c.set(X.element,[]),c.get(X.element).push(G));let _e=X.part;if(m.has(_e)||m.set(_e,[]),m.get(_e).push(G),G.material){let Pe=Array.isArray(G.material)?G.material:[G.material];for(let Ie of Pe)"side"in Ie&&(Ie.side=Nt)}}),qs(),et(),Xe(),xt(),Yh();let I=Ht(u);I&&(Qe=`scene:${String(I.id).trim()}`),Et(),sa(),Kn(),ms(),ye(),I&&ps(I),Rt(),U?.refreshPartialHeight(),Ab(),Rb(),js(),Js()},b=>{F(String(b?.message||b))});function F(b){let I=document.getElementById("err");I&&(I.style.display="block",I.textContent=b)}function oe(){p&&(N.setFromObject(p),N.getSize(Z),N.getCenter(A))}function se(){let b=Math.max(1,n.clientWidth),I=Math.max(1,n.clientHeight);return b/I}function we(b,I){let G=b*Math.PI/180;return 2*Math.atan(Math.tan(G/2)/Math.max(I,1e-6))}function Se(){let b=se();Me.aspect=b,Me.fov=we(ue,b)*180/Math.PI,Me.updateProjectionMatrix()}function Fe(b,I){let G=se(),X=Math.max(b,1e-6)*Math.tan(I/2),_e=X*G;fe.left=-_e,fe.right=_e,fe.top=X,fe.bottom=-X,fe.updateProjectionMatrix()}function Ve(){let b=se(),G=Math.max(fe.top,1e-6)*b;fe.left=-G,fe.right=G,fe.updateProjectionMatrix()}function it(b,I){let G=se(),X=Math.max(b,1e-6),Pe=Math.max(I,1e-6),Ie=Pe*G;Ie<X&&(Ie=X,Pe=Ie/Math.max(G,1e-6)),De=1,fe.left=-Ie,fe.right=Ie,fe.top=Pe,fe.bottom=-Pe,fe.updateProjectionMatrix(),Ne()}function ce(b){let I=Math.max(b,1e-4),G=w.copy(Q.position).sub(le.target);G.lengthSq()<1e-12?G.set(0,0,1):G.normalize(),Q.position.copy(le.target).addScaledVector(G,I)}function Ue(b){b!==Q&&(b.position.copy(Q.position),b.quaternion.copy(Q.quaternion),b.up.copy(Q.up),b.near=Q.near,b.far=Q.far,Q=b,le.object=Q,le.update())}function at(){let b=Math.abs(pr)>.05||Math.abs(mr)>.05||Math.abs(Ti-1)>.001?Ti:1;return De*b}function Ne(){Q.zoom=at(),Q.updateProjectionMatrix()}function mt(){if(re||q||!Q.isOrthographicCamera)return;let b=Math.abs(pr)>.05||Math.abs(mr)>.05||Math.abs(Ti-1)>.001?Ti:1;De=Math.max(Q.zoom/Math.max(b,1e-6),1e-6)}function zt(){if(j==="ortho")return;Ae=ue;let b=Q.position.distanceTo(le.target),I=we(ue,se());Fe(b,I),De=1,ri(()=>{re=!0,Ue(fe),j="ortho",Ne(),re=!1}),Hn()}function Kt(b){if(j!=="ortho")return;let I=zr(b??Ae),G=Math.max(fe.top,1e-6)/Math.max(De,1e-6),X=we(I,se()),_e=G/Math.max(Math.tan(X/2),1e-8);ue=I,Ae=I,De=1,ri(()=>{re=!0,Ue(Me),j="perspective",Se(),ce(_e),Ne(),mi(),le.update(),re=!1}),Hn()}function Ei(b,I={}){let G=zr(b);if(j==="ortho"){Kt(G);return}let X=se(),_e=we(ue,X),Pe=we(G,X),Ie=Q.position.distanceTo(le.target);ue=G,Ae=G,ri(()=>{if(Se(),I.reframe!==!1){let Ye=Math.tan(_e/2)/Math.max(Math.tan(Pe/2),1e-8);ce(Ie*Ye),mi(),le.update()}Ne()}),Hn()}function zi(){j==="ortho"?Kt(Ae):zt()}function zr(b){return Math.min(J,Math.max(k,b))}function Hr(){return j==="ortho"?ie:ue}function Ol(b){return b>J?"ISO":`${Math.round(b)}\xB0`}function Hn(){ke&&(ke.value=Hr()),Ze&&(Ze.textContent=j==="ortho"?"ISO":`${Math.round(ue)}\xB0`),ke?.refresh()}function Xs(b){if(b>J){j!=="ortho"?zt():Hn();return}let I=zr(b);j==="ortho"?Kt(I):Ei(I,{reframe:!0})}function sa(){let b=document.getElementById("fov");if(!b)return;b.replaceChildren();let I=document.createElement("div");I.className="fov-row";let G=document.createElement("span");G.className="fov-label",G.textContent=Ot("ui.fov"),Ze=document.createElement("span"),Ze.className="fov-value",Ze.textContent=`${Math.round(ue)}\xB0`,ke=xh({min:k,max:ie,step:1,value:Hr(),ariaLabel:"Field of view",formatAriaValue:Ol,onInput:Ie=>Xs(Ie),onChange:Ie=>Xs(Ie),onTap:()=>zi()}),ke.el.classList.add("fov-range");let X=document.createElement("div");X.className="fov-detent",X.setAttribute("aria-hidden","true");let _e=(J-k)/(ie-k);X.style.left=`${_e*100}%`,ke.el.querySelector(".coop-range-track")?.append(X),I.append(G,ke.el,Ze),b.append(I),Hn()}function mi(){let b=Math.max(Z.x,Z.y,Z.z,.01),I=Q.position.distanceTo(le.target),G=Math.round(Math.min(Math.max(I/200,b/5e3,.001),I/10)*1e4)/1e4,X=Math.round(Math.max(I+b*4,b*8,10)*1e4)/1e4;Q.near===G&&Q.far===X||(Q.near=G,Q.far=X,Q.updateProjectionMatrix())}function ri(b){q=!0;try{b()}finally{requestAnimationFrame(()=>{q=!1})}}Se();function qs(){p&&(ri(()=>{oe(),le.target.copy(A);let I=Math.max(Z.x,Z.y,Z.z,1)*1.85;Q.position.set(A.x+I*.75,A.y+I*.55,A.z+I*.75),mi(),le.update()}),Rn())}function Fl(){for(let b of m.keys())_.set(b,1),T.set(b,1),Bi(m.get(b)||[],1,{edgeMode:g});oe(),Gr()}function Vr(b){if(p){if(pt=null,pe.clear(),$(1),Fl(),js(),Js(),Me.up.set(0,1,0),fe.up.set(0,1,0),Q.up.set(0,1,0),b==="iso"){qs();return}ri(()=>{oe();let I=Math.max(Z.x,Z.y,Z.z,1),G=I*1.85,X=A;b==="front"?Q.position.set(X.x,X.y,X.z+G):b==="top"?Q.position.set(X.x,X.y+G,X.z+I*.01):b==="side"&&Q.position.set(X.x-G,X.y,X.z),le.target.copy(X),mi(),le.update()}),Rn()}}function ps(b){if(!p||!b)return;pt=b,$(b.verticalExaggeration);let I=ee;if(b.opacityDefault!=null||b.opacity&&typeof b.opacity=="object"){let Pe=b.opacityDefault!=null?Number(b.opacityDefault):1,Ie=b.opacity&&typeof b.opacity=="object"?b.opacity:{},Ye=Ny(Ie,h);for(let lt of m.keys()){let St=Object.prototype.hasOwnProperty.call(Ye,lt)?Ye[lt]:Pe;$s(lt,St,{skipUi:!0,skipClip:!0})}oe(),Gr()}if(Object.prototype.hasOwnProperty.call(b,"cuts")){let Pe=Array.isArray(b.cuts)?b.cuts:[];z.length=0;for(let Ie of Pe){let Ye=Ie?.normal;if(!Array.isArray(Ye)||Ye.length<3)continue;let lt=new D(Number(Ye[0])||0,Number(Ye[1])||0,Number(Ye[2])||0);if(lt.lengthSq()<1e-12)continue;lt.normalize();let St=null,en=Math.min(1,Math.max(0,Number(Ie.t)||0));if(Array.isArray(Ie.anchor)&&Ie.anchor.length>=3){St=Um(Ie.anchor),St.y*=I;let{near:Vn,far:qt}=oa(lt),Ft=St.dot(lt);en=Math.min(1,Math.max(0,(Ft-Vn)/Math.max(qt-Vn,1e-6)))}z.push({id:Y++,normal:lt,t:en,anchor:St,locked:!0,label:cn(lt)})}K=!1,aa(),Kn(),ms(),U?.refreshPartialHeight()}b.projection==="ortho"?j!=="ortho"?zt():Hn():b.hFovDeg!=null&&Number.isFinite(Number(b.hFovDeg))&&Ei(Number(b.hFovDeg),{reframe:!1});let X=b.camera;X&&Array.isArray(X.target)&&Array.isArray(X.position)&&ri(()=>{re=!0;let Pe=new D(0,1,0);Array.isArray(X.up)&&X.up.length>=3&&(Pe.set(Number(X.up[0])||0,Number(X.up[1])||0,Number(X.up[2])||0),Pe.lengthSq()<1e-12?Pe.set(0,1,0):Pe.normalize()),Me.up.copy(Pe),fe.up.copy(Pe),Q.up.copy(Pe),le.target.set(Number(X.target[0])||0,(Number(X.target[1])||0)*I,Number(X.target[2])||0),Q.position.set(Number(X.position[0])||0,(Number(X.position[1])||0)*I,Number(X.position[2])||0),Q.lookAt(le.target),j==="ortho"&&Array.isArray(X.orthoFit)&&X.orthoFit.length>=2&&it(Number(X.orthoFit[0])||.1,(Number(X.orthoFit[1])||.1)*I),oe(),mi(),le.update(),re=!1}),Rn();let _e=b.edges;(_e==="none"||_e==="transparent"||_e==="opaque")&&(g=_e,be()),pe.setSpec(b),js(),Js()}function $s(b,I,G={}){let X=Math.max(0,Math.min(1,Number(I)||0));_.set(b,X),X>0&&T.set(b,X),G.detach&&E.add(b),Bi(m.get(b)||[],X,{edgeMode:g}),!G.skipClip&&(oe(),G.skipUi||Gr())}function Ul(b,I,G){let X=Math.max(0,Math.min(1,Number(I)||0));G&&M.set(G,X);for(let _e of b)E.has(_e)||(_.set(_e,X),X>0&&T.set(_e,X),Bi(m.get(_e)||[],X,{edgeMode:g}));oe(),Gr()}function Bh(b,I,G){E.delete(b);let X=G.filter(Pe=>!E.has(Pe)),_e=Ys(I,X);_.set(b,_e),_e>0&&T.set(b,_e),Bi(m.get(b)||[],_e,{edgeMode:g}),oe(),Gr()}function kh(b){if(!b.length)return 1;let I=_.get(b[0])??1;for(let G=1;G<b.length;G++){let X=_.get(b[G])??1;if(Math.abs(X-I)>1e-4)return NaN}return I}function Ys(b,I){let G=I.filter(_e=>!E.has(_e)),X=kh(G.length?G:I);return Number.isNaN(X)?M.get(b)??1:X}function Gr(){for(let[b,I]of C)I.value=(_.get(b)??1)*100;for(let[b,I]of v){let G=(I.el.dataset.leaves||"").split(",").map(X=>X.trim()).filter(Boolean);I.value=Ys(b,G)*100}for(let[b,I]of R){let G=E.has(b);I.hidden=!G,I.setAttribute("aria-hidden",G?"false":"true")}}function L(){return z.filter(b=>b.locked).map(b=>zm(b))}function ne(){let b=new je;return W.getDrawingBufferSize(b),{x:b.x,y:b.y}}function be(){if(m.size){if(g===Us){My(p);return}wy(m,!0,{clippingPlanes:L(),resolution:ne(),edgeMode:g})}}let xe=0;function ye(){if(!m.size)return;let b=++xe;if(y===ks){let I=ae();I.load().then(()=>{b!==xe||y!==ks||!p||(I.apply(m,p,{clippingPlanes:L(),opacityByLabel:_,edgeMode:g}),qe())});return}Re?.stage.enabled&&Re.leave(m),Fy(m,y,{isDark:x,clippingPlanes:L(),opacityByLabel:_,edgeMode:g}),qe()}function qe(){y===ks?(W.toneMapping=Cs,W.toneMappingExposure=1):y===wl?(W.toneMapping=Cs,W.toneMappingExposure=1.05):(W.toneMapping=vi,W.toneMappingExposure=1),be(),Bp(m,L()),y===ks&&Re?.afterRefresh(),Hb(),Qt=!0}function et(){let b=document.getElementById("mats");if(b){b.replaceChildren();for(let[I,G]of[[fh,"ui.solid"],[wl,"ui.shaded"],[ks,"ui.realistic"]]){let X=document.createElement("button");X.type="button",X.dataset.mode=I,X.textContent=Ot(G),I===y&&X.classList.add("is-active"),X.addEventListener("click",()=>{y=I,ky(I),b.querySelectorAll("button").forEach(_e=>{_e.classList.toggle("is-active",_e.dataset.mode===I)}),ye()}),b.append(X)}}}function Xe(){let b=document.getElementById("edges");if(b){b.replaceChildren();for(let[I,G]of[[Us,"ui.edgesNone"],[Bs,"ui.edgesTransparent"],[Ml,"ui.edgesOpaque"]]){let X=document.createElement("button");X.type="button",X.dataset.edgeMode=I,X.textContent=Ot(G),I===g&&X.classList.add("is-active"),X.addEventListener("click",()=>{g=I,Tp(I),b.querySelectorAll("button").forEach(_e=>{_e.classList.toggle("is-active",_e.dataset.edgeMode===I)}),be(),Jm()}),b.append(X)}}}function Ke(b,I,G,X){let _e=document.createElement("div");_e.className="part-opacity-wrap";let Pe,Ie=()=>{if(Pe.value/100>0)X(0);else{let lt=G();X(lt>0?lt:1)}};return Pe=xh({min:0,max:100,step:1,value:Math.round(I),ariaLabel:b,formatAriaValue:Ye=>`${Math.round(Ye)}%`,thumbScrubOnly:!0,onInput:Ye=>X(Ye/100),onChange:Ye=>X(Ye/100),onTap:Ie}),Pe.el.classList.add("part-opacity"),_e.append(Pe.el),{wrap:_e,range:Pe}}function nt(){let b=document.getElementById("parts");if(!b)return;b.style.removeProperty("--part-name-col");let I=0;for(let G of b.querySelectorAll(".part-name")){if(G.closest(".part-children")?.hidden)continue;let _e=G.style.width;G.style.width="max-content",I=Math.max(I,Math.ceil(G.getBoundingClientRect().width)),G.style.width=_e}I>0&&b.style.setProperty("--part-name-col",`${I}px`)}function ht(b,I,G,X=null){if(b.type==="leaf"){let It=document.createElement("div");It.className="part-row part-leaf",It.style.setProperty("--part-depth",String(G)),It.dataset.leaf=b.id;let Yl=document.createElement("span");Yl.className="part-disclosure-spacer",Yl.setAttribute("aria-hidden","true");let Zl=document.createElement("span");Zl.className="part-name",Zl.textContent=b.label;let{wrap:hg,range:fg}=Ke(`${b.label} opacity`,(_.get(b.id)??1)*100,()=>T.get(b.id)??1,Kl=>$s(b.id,Kl,{detach:!!X}));fg.el.dataset.leaf=b.id,C.set(b.id,fg);let Ri=null;if(X){Ri=document.createElement("button"),Ri.type="button",Ri.className="part-sync",Ri.textContent=Ot("ui.sync"),Ri.setAttribute("aria-label",`${Ot("ui.sync")} ${b.label}`);let Kl=E.has(b.id);Ri.hidden=!Kl,Ri.setAttribute("aria-hidden",Kl?"false":"true"),Ri.addEventListener("click",lM=>{lM.stopPropagation(),Bh(b.id,X.groupId,X.leafIds)}),R.set(b.id,Ri)}Ri?It.append(Yl,Zl,hg,Ri):It.append(Yl,Zl,hg),I.append(It);return}let _e=dh(b),Pe=document.createElement("div");Pe.className="part-group",Pe.dataset.group=b.id;let Ie=document.createElement("div");Ie.className="part-row part-group-row",Ie.style.setProperty("--part-depth",String(G)),Ie.setAttribute("role","button"),Ie.tabIndex=0;let Ye=document.createElement("button");Ye.type="button",Ye.className="part-disclosure",Ye.setAttribute("aria-label",`Expand ${b.label}`),Ye.setAttribute("aria-expanded","false");let lt=document.createElement("span");lt.className="part-name",lt.textContent=b.label;let St=Ys(b.id,_e)||1;St<=0&&(St=1);let{wrap:en,range:Vn}=Ke(`${b.label} opacity`,Ys(b.id,_e)*100,()=>St,It=>{It>0&&(St=It),Ul(_e,It,b.id)});Vn.el.dataset.group=b.id,Vn.el.dataset.leaves=_e.join(","),v.set(b.id,Vn),en.addEventListener("click",It=>It.stopPropagation()),en.addEventListener("pointerdown",It=>It.stopPropagation());let qt=document.createElement("div");qt.className="part-children",qt.hidden=!0;function Ft(It){It?O.add(b.id):O.delete(b.id),qt.hidden=!It,Pe.classList.toggle("is-expanded",It),Ye.setAttribute("aria-expanded",It?"true":"false"),Ye.setAttribute("aria-label",It?`Collapse ${b.label}`:`Expand ${b.label}`),requestAnimationFrame(()=>nt())}function fa(){Ft(!O.has(b.id))}Ye.addEventListener("click",It=>{It.stopPropagation(),fa()}),Ie.addEventListener("click",It=>{en.contains(It.target)||fa()}),Ie.addEventListener("keydown",It=>{(It.key==="Enter"||It.key===" ")&&(It.preventDefault(),fa())}),Ie.append(Ye,lt,en),Pe.append(Ie,qt),I.append(Pe);let rf={groupId:b.id,leafIds:_e};for(let It of b.children)ht(It,qt,G+1,rf);Ft(O.has(b.id))}function xt(){let b=document.getElementById("parts");if(!b)return;b.replaceChildren(),C.clear(),v.clear(),R.clear();for(let G of m.keys())_.has(G)||(_.set(G,1),Bi(m.get(G)||[],1,{edgeMode:g})),T.has(G)||T.set(G,1);let I=Dy(m.keys(),r,Ot);h=I;for(let G of I)ht(G,b,0,null);requestAnimationFrame(()=>nt())}let Qe="iso",pt=null,$t=!1;function Ht(b){let I=String(b||"").trim();if(!I)return null;for(let G of i)if(String(G?.id||"").trim()===I)return G;return null}function Rt(){let b=Qe;b&&b.startsWith("scene:")?Mb(b.slice(6)):Mb(null)}function ln(){return document.querySelectorAll("#cams button, #scenes button")}function tt(){Qe!=null&&(Qe=null,ln().forEach(b=>{b.classList.remove("is-active")}),Rt())}function vn(){let b=document.getElementById("scenes");if(!b){let I=document.getElementById("cams");b=document.createElement("div"),b.id="scenes",b.className="scene-list",I?.insertAdjacentElement("afterend",b)}return b}function Et(){let b=document.getElementById("cams");if(!b)return;b.replaceChildren();let I=vn();I.replaceChildren();function G(X,_e,Pe,Ie){let Ye=document.createElement("button");Ye.type="button",Ye.dataset.preset=_e,Ye.textContent=Pe,_e===Qe&&Ye.classList.add("is-active"),Ye.addEventListener("click",()=>{Qe=_e,ln().forEach(lt=>{lt.classList.toggle("is-active",lt.dataset.preset===_e)}),Ie(),Rt()}),X.append(Ye)}for(let[X,_e]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])G(b,X,Ot(_e),()=>Vr(X));for(let X of i){let _e=String(X?.id||"").trim();if(!_e)continue;let Pe=Ot(`scene.${_e}`);G(I,`scene:${_e}`,Pe,()=>ps(X))}I.hidden=I.childElementCount===0}function dr(b=w){return b.copy(le.target).sub(Q.position).normalize()}function cn(b){let I=Math.hypot(b.x,b.z),G=(Math.atan2(b.x,b.z)*180/Math.PI+360)%360,X=Math.atan2(b.y,I)*180/Math.PI,_e=Math.abs(X).toFixed(0),Pe=X>=0?"\u2191":"\u2193";return`${G.toFixed(0)}\xB0 / ${_e}\xB0${Pe}`}function Hi(){return z.some(b=>!b.locked)}function Zn(){return z.filter(b=>b.locked)}function Kn(){Hi()||!(Zn().length===0||K)||z.push({id:Y++,normal:new D(0,0,1),t:0,locked:!1,label:Ot("ui.cut")})}function Mt(b){let I=document.getElementById("cuts");if(!I)return;let G=I.querySelector(`[data-cut-id="${b.id}"]`);if(!G){ms();return}let X=G.querySelector(".cut-label");if(X&&(X.textContent=b.locked?b.label:Ot("ui.cut")),b.locked&&!G.querySelector(".cut-remove")){let _e=document.createElement("button");_e.type="button",_e.className="cut-remove",_e.setAttribute("aria-label",Ot("ui.removeSection")),_e.textContent="\xD7",_e.addEventListener("click",()=>si(b.id)),G.append(_e)}}function sn(b){b.locked||(dr(b.normal),b.locked=!0,b.label=cn(b.normal),K=!1,aa(),Mt(b))}function Rn(){Zn().length!==0&&(Hi()||(K=!0,!V&&(Kn(),ms())))}function Xt(){K&&(Hi()||Zn().length!==0&&(Kn(),ms()))}function Jt(b,I){let G=z.find(X=>X.id===b);if(G){if(G.locked||sn(G),G.t=Math.min(1,Math.max(0,Number(I))),G.anchor=null,V){Hm();return}aa()}}function si(b){let I=z.findIndex(G=>G.id===b);I<0||(z.splice(I,1),Zn().length===0?(K=!1,Hi()||Kn()):K&&!Hi()&&Kn(),aa(),ms(),U?.refreshPartialHeight())}function oa(b){if(oe(),N.isEmpty())return{near:-1,far:1};let I=N.min,G=N.max,X=1/0,_e=-1/0;for(let Ye=0;Ye<2;Ye++)for(let lt=0;lt<2;lt++)for(let St=0;St<2;St++){H.set(Ye?G.x:I.x,lt?G.y:I.y,St?G.z:I.z);let en=H.dot(b);en<X&&(X=en),en>_e&&(_e=en)}let Ie=Math.max(_e-X,1e-6)*.02;return{near:X-Ie,far:_e+Ie}}function zm(b){if(b.anchor)return new xn().setFromNormalAndCoplanarPoint(b.normal,b.anchor);let{near:I,far:G}=oa(b.normal),X=I+(G-I)*b.t;return S.copy(b.normal).multiplyScalar(X),new xn().setFromNormalAndCoplanarPoint(b.normal,S)}function Hm(){let b=L();return p&&(p.traverse(I=>{if(!I.isMesh||!I.material||Bn(I)||gh(I))return;let G=Array.isArray(I.material)?I.material:[I.material];for(let X of G){if(!X)continue;let _e=X.clippingPlanes?X.clippingPlanes.length:0;X.clippingPlanes=b,X.clipIntersection=!1,_e!==b.length&&(X.needsUpdate=!0)}}),Ap(p,b)),b}function aa(){let b=Hm();p&&(Bp(m,b),g!==Us?be():Ap(p,b))}function ms(){let b=document.getElementById("cuts");if(b){b.replaceChildren();for(let I of z){let G=document.createElement("div");G.className="cut-row",G.dataset.cutId=String(I.id);let X=document.createElement("span");X.className="cut-label",X.textContent=I.locked?I.label:Ot("ui.cut");let _e=()=>{V&&(V=!1,aa(),Xt())},Pe=xh({min:0,max:1,step:.001,value:I.t,ariaLabel:I.locked?`Section ${I.label}`:"Section cut",onScrubStart:()=>{V=!0,I.locked||sn(I)},onScrubEnd:_e,onInput:Ie=>Jt(I.id,Ie),onChange:Ie=>{Jt(I.id,Ie),_e()}});if(G.append(X,Pe.el),I.locked){let Ie=document.createElement("button");Ie.type="button",Ie.className="cut-remove",Ie.setAttribute("aria-label",Ot("ui.removeSection")),Ie.textContent="\xD7",Ie.addEventListener("click",()=>si(I.id)),G.append(Ie)}b.append(G)}U?.refreshPartialHeight()}}let la=!1,zh=new D,Hh=new D,Vm=!1;n.addEventListener("pointerdown",()=>{la=!0},{capture:!0});let Gm=()=>{la=!1};window.addEventListener("pointerup",Gm,{capture:!0}),window.addEventListener("pointercancel",Gm,{capture:!0}),le.addEventListener("start",()=>{tt(),la=!0}),le.addEventListener("change",()=>{mt()}),le.addEventListener("end",()=>{la=!1,!q&&Rn()});let Ti=1,pr=0,mr=0,Vh=1,Gh=0,Wh=0,Xh=1,qh=0,$h=0,gs=0,Sb=280;function wb(){let b=Math.max(1,n.clientWidth),I=Math.max(1,n.clientHeight);if(!U)return{zoom:1,offX:0,offY:0,w:b,h:I};let{bottom:G,right:X}=U.getSafeInsets();if(G<=0&&X<=0)return{zoom:1,offX:0,offY:0,w:b,h:I};let _e=Math.max(1,b-X),Pe=Math.max(1,I-G),Ie=Math.min(_e/b,Pe/I),Ye=X/2,lt=G/2;return{zoom:Ie,offX:Ye,offY:lt,w:b,h:I}}function Wm(b,I){ri(()=>{re=!0,Math.abs(pr)>.05||Math.abs(mr)>.05||Math.abs(Ti-1)>.001?(Q.zoom=De*Ti,Q.setViewOffset(b,I,pr,mr,b,I)):(Q.clearViewOffset(),Q.zoom=De,Ti=1,pr=0,mr=0),Q.updateProjectionMatrix(),re=!1})}function Xm(b=!0){let{zoom:I,offX:G,offY:X,w:_e,h:Pe}=wb();if(Vh=I,Gh=G,Wh=X,!b){Ti=I,pr=G,mr=X,gs=0,Wm(_e,Pe);return}Xh=Ti,qh=pr,$h=mr,gs=performance.now()}function Eb(b){if(!gs)return;let I=Math.min(1,(b-gs)/Sb),G=1-(1-I)**3;Ti=Xh+(Vh-Xh)*G,pr=qh+(Gh-qh)*G,mr=$h+(Wh-$h)*G;let X=Math.max(1,n.clientWidth),_e=Math.max(1,n.clientHeight);Wm(X,_e),I>=1&&(gs=0)}function Bl(){let b=Math.max(1,n.clientWidth),I=Math.max(1,n.clientHeight);W.setSize(b,I,!1),j==="perspective"?Se():Ve(),Xm(!1);let G=ne();Sy(p,G.x,G.y)}Bl(),window.addEventListener("resize",Bl),U?.onDetentChange(()=>{Xm(!0)});let jn=document.getElementById("ar"),bn=document.getElementById("measure"),ca=!1,kl=()=>Ot("ui.measure");function Yh(){let b=document.getElementById("locale");if(b){b.replaceChildren();for(let[I,G]of[["cs","CS"],["en","EN"]]){let X=document.createElement("button");X.type="button",X.dataset.locale=I,X.textContent=G,I===yh()&&X.classList.add("is-active"),X.addEventListener("click",()=>{s_(I)}),b.append(X)}}}function Tb(){Gp(document),jn&&!ca&&(jn.textContent=Ot("ui.ar")),bn&&(bn.textContent=kl()),js(),Js(),pe.relocalize();try{et(),Xe(),Et(),sa(),xt(),ms(),Yh(),ag()}catch(b){console.error("relocalizeUi",b);try{Yh()}catch{}}U?.refreshPartialHeight()}Vp(()=>Tb());function Ab(){jn&&(jn.hidden=!1,ca||(jn.textContent=Ot("ui.ar")))}function Rb(){bn&&(bn.hidden=!1,bn.textContent=kl())}let Zs=document.getElementById("drawing"),Wr=document.getElementById("labels"),Ks=!0;function js(){Zs&&(Zs.hidden=!1,Zs.disabled=!pt||zl,Zs.textContent=Ot("ui.drawing"))}function Js(){if(!Wr)return;let b=!!pt;Wr.hidden=!b,Wr.disabled=!b,Wr.setAttribute("aria-pressed",Ks?"true":"false"),Wr.classList.toggle("is-active",b&&Ks),Wr.textContent=Ot("ui.labels")}function Cb(){try{let b=new URLSearchParams(window.location.search).get("m");if(b&&b.trim())return b.trim()}catch{}return"model"}function Pb(){let I=1,G=1.35;for(let X=0;X<6;X+=1){pe.update();let _e=pe.glyphBoundsNdc();if(!_e)return;let Pe=Math.max(-1+.04-_e.minX,_e.maxX-(1-.04),-1+.04-_e.minY,_e.maxY-(1-.04),0);if(Pe<.012||I>=G-.01)return;let Ie=Math.min(G/I,Math.max(1.05,1+Pe*1.6));I*=Ie,Q.isOrthographicCamera?(fe.left*=Ie,fe.right*=Ie,fe.top*=Ie,fe.bottom*=Ie,fe.updateProjectionMatrix()):(w.copy(Q.position).sub(le.target).multiplyScalar(Ie),Q.position.copy(le.target).add(w),mi())}}function qm(){gs=0,Ti=1,pr=0,mr=0,Vh=1,Gh=0,Wh=0,Q.clearViewOffset(),Q.zoom=De,Q.updateProjectionMatrix()}let zl=!1;async function $m(){if(zl||!p||!pt)return null;zl=!0,js(),$t=!0;let b=pt,I=g,G=f.background,X=W.getPixelRatio(),_e=n.style.width,Pe=n.style.height,Ie=U?.getDetent?.()??null,Ye=Ai?.isActive()??!1,lt=pe.isVisible();try{Ye&&Ai?.setActive(!1),pe.setVisible(!0),U?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,W.setPixelRatio(1),Bl(),qm(),g=Ml,be(),f.background=new Je(16777215),pe.setInk("plate"),ps(b),qm(),Pb(),pe.update(),te.render(f,Q,p,jm,{quality:"high"});let{png:St,pdf:en}=await vb(n),Vn=`${Cb()}_${String(b.id||"scene")}`;return{png:St,pdf:en,stem:Vn}}finally{n.style.width=_e,n.style.height=Pe,W.setPixelRatio(X),g=I,f.background=G,pe.setInk("viewer"),pe.setVisible(lt),Ie&&U?.setDetent(Ie),Bl(),be(),b&&ps(b),Ye&&Ai?.setActive(!0),$t=!1,zl=!1,js(),Js(),requestAnimationFrame($l)}}window.blueprintCaptureDrawing=async()=>{let b=await $m();return b?{png:b.png,pdf:b.pdf,stem:b.stem}:null},window.blueprintSetView=(b={})=>{if(!p||!b)return!1;let I=b.projection==="ortho"?"ortho":"perspective",G=Number.isFinite(Number(b.hFovDeg))?Number(b.hFovDeg):ue;return I==="perspective"&&j==="ortho"&&Kt(G),I==="perspective"&&Ei(G,{reframe:!1}),ri(()=>{re=!0;let X=new D(0,1,0);if(Array.isArray(b.up)&&b.up.length>=3&&(X.set(Number(b.up[0])||0,Number(b.up[1])||0,Number(b.up[2])||0),X.lengthSq()>1e-12?X.normalize():X.set(0,1,0)),Me.up.copy(X),fe.up.copy(X),Q.up.copy(X),Array.isArray(b.target)&&le.target.set(Number(b.target[0])||0,Number(b.target[1])||0,Number(b.target[2])||0),Array.isArray(b.position)&&Q.position.set(Number(b.position[0])||0,Number(b.position[1])||0,Number(b.position[2])||0),Q.lookAt(le.target),I==="ortho"){let _e=Q.position.distanceTo(le.target),Pe=we(G,se());Fe(_e,Pe),De=1,j!=="ortho"&&(Ue(fe),j="ortho"),Ne(),Hn()}oe(),mi(),le.update(),re=!1}),Qt=!0,!0},Wr&&Wr.addEventListener("click",()=>{Ks=!Ks,pe.setVisible(Ks),Js()}),Zs&&Zs.addEventListener("click",()=>{(async()=>{let b=await $m();b&&(Bm(b.png,`${b.stem}.png`),Bm(b.pdf,`${b.stem}.pdf`))})()});let Ai=null;f&&(Ai=Rv({scene:f,canvas:n,getCamera:()=>Q,controls:le,getRoot:()=>p,getClipPlanes:()=>L(),onLiveLength:b=>{bn&&(b?(bn.textContent=b,bn.classList.add("is-live")):(bn.textContent=kl(),bn.classList.remove("is-live")))},onActiveChange:b=>{Qt=!0,bn&&(bn.classList.toggle("is-active",b),bn.setAttribute("aria-pressed",b?"true":"false"),b||(bn.textContent=kl(),bn.classList.remove("is-live")))}})),bn&&bn.addEventListener("click",()=>{Ai&&Ai.setActive(!Ai.isActive())}),Ce=()=>!!Ai?.isActive();function Ym(){if(!p)return null;p.updateWorldMatrix(!0,!0);let b=Zn().map(_e=>zm(_e)),I=new Tt;if(I.name="ARContent",p.traverse(_e=>{if(!_e.isMesh||!_e.visible||Bn(_e))return;let Pe=Zy(_e,b);Pe&&I.add(Pe)}),!I.children.length)return null;I.updateMatrixWorld(!0);let G=kp(I),X=new Tt;return X.name="ARExport",X.add(I),e_(I,G),X.userData.arPlacement=G,X}async function Zm(){if(ca||!p)return;ca=!0;let b=jn?.textContent||"AR";jn&&(jn.disabled=!0,jn.textContent="\u2026");try{let I=Ym();if(!I)throw new Error("Nothing visible to export. Show at least one part.");let X=await new ih().parseAsync(I,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),_e=new Blob([X],{type:"model/vnd.usdz+zip"}),Pe=URL.createObjectURL(_e),Ie=document.createElement("a");Ie.rel="ar",Ie.href=Pe,Ie.download="view.usdz";let Ye=document.createElement("img");Ye.alt="AR",Ie.appendChild(Ye),document.body.appendChild(Ie),Ie.click(),Ie.remove(),setTimeout(()=>URL.revokeObjectURL(Pe),6e4)}catch(I){F(String(I?.message||I))}finally{ca=!1,jn&&(jn.disabled=!1,jn.textContent=b)}}jn&&jn.addEventListener("click",()=>{Zm()});let Km={scene:f,get camera(){return Q},controls:le,parts:m,partOpacity:_,cuts:z,scenes:i,setPartOpacity:$s,setCameraPreset:Vr,applyScene:ps,setHFov:Ei,toggleFovIso:zi,get projection(){return j},get hFovDeg(){return ue},setCutT:Jt,removeCut:si,frameIso:qs,openArQuickLook:Zm,buildArExportScene:Ym,getPeelQuality:()=>ha};window.BlueprintsViewer=Km;function jm(){for(let b of _.values())if(b<1-1e-4)return!0;return!1}function Jm(){for(let[b,I]of m){let G=_.get(b)??1;Bi(I,G,{edgeMode:g})}}let Qm=!1,Qt=!0,gr=null,Hl=cb(a),Zh=new ci,Kh=new je,Vl=lb({index:a,visibility:Hl,t:Ot,openSheet(){let b=window.matchMedia("(min-width: 768px)").matches;U?.setDetent(b?"open":"partial")},onFrame:(b,I)=>{I?.move?Ub(b):Fb(b)},onVisibility:()=>kb(),actionsFor:()=>[],liveLines:b=>{let I=Ge?.lastKnown(b.globalId);return I?jv(I,Ot):[]}});function Gl(b){let I=b;for(;I;){let G=I.userData?.bpElementKey||ki(I.name||"").element;if(G){for(let X of Object.values(a.elements))if(X.id===G)return X}I=I.parent}return null}function eg(b){return b?c.get(b)||[]:[]}function oi(b){if(!b)return[];let I=eg(b.id);if(I.length)return I;let G=[];for(let X of Gs(a,b.globalId)){let _e=a.elements[X];_e&&_e!==b&&G.push(...eg(_e.id))}return G}function Qs(b){let I=new vt,G=new D;for(let X of b){let _e=X.geometry;if(!_e)continue;_e.boundingBox||_e.computeBoundingBox();let Pe=_e.boundingBox;if(Pe){X.updateWorldMatrix(!0,!1);for(let Ie of[Pe.min.x,Pe.max.x])for(let Ye of[Pe.min.y,Pe.max.y])for(let lt of[Pe.min.z,Pe.max.z])G.set(Ie,Ye,lt).applyMatrix4(X.matrixWorld),I.expandByPoint(G)}}return I}let Ib=480,Vi=null;function Lb(b){let I=Math.min(1,Math.max(0,b));return I<.5?4*I*I*I:1-(-2*I+2)**3/2}function Db(b){let I=b.getSize(H),G=Math.max(I.x,I.y,I.z,.2),X=b.getCenter(new D),_e=Q.position.clone().sub(le.target);_e.lengthSq()<1e-8?_e.set(.75,.55,.75):_e.normalize();let Pe;if(Q.isOrthographicCamera)Pe=Math.max(Q.position.distanceTo(le.target),G*1.4);else{let Ie=(Q.fov||45)*Math.PI/180;Pe=Math.max(G*.62/Math.max(Math.tan(Ie/2),.001),G*1.25)}return{center:X,position:X.clone().addScaledVector(_e,Pe),span:G}}function Nb(b){Vi={t0:performance.now(),fromPos:Q.position.clone(),toPos:b.position,fromTarget:le.target.clone(),toTarget:b.center,span:b.span},Qt=!0}function Ob(b){if(!Vi)return;let I=Math.min(1,(b-Vi.t0)/Ib),G=Lb(I);Q.position.lerpVectors(Vi.fromPos,Vi.toPos,G),le.target.lerpVectors(Vi.fromTarget,Vi.toTarget,G),Q.isOrthographicCamera&&it(Vi.span*.62,Vi.span*.62),q=!0,le.update(),oe(),mi(),Qt=!0,I>=1&&(Vi=null,requestAnimationFrame(()=>{q=!1}))}function Fb(b){let I=oi(a.elements[b]);I.length&&tg(I),Qt=!0}function Ub(b){let I=a.elements[b],G=oi(I);if(!G.length)return;let X=Qs(G);X.isEmpty()||(Nb(Db(X)),tg(G),Qt=!0)}function tg(b){gr&&ng();let I=[];for(let G of b){if(!G.isMesh||!G.material)continue;let X=Array.isArray(G.material)?G.material:[G.material],_e=X.map(Pe=>{let Ie=Pe.clone();return Ie.emissive?(Ie.emissive.setHex(16756768),Ie.emissiveIntensity=0):Ie.color&&(Ie.userData.bpPulseBase=Ie.color.getHex()),I.push(Ie),Ie});G.userData.bpPulseMaterial=X,G.material=_e.length===1?_e[0]:_e}gr={meshes:b,clones:I,t0:performance.now()}}function ng(){if(gr){for(let b of gr.meshes){let I=b.userData.bpPulseMaterial;I&&(b.material=I.length===1?I[0]:I),delete b.userData.bpPulseMaterial}for(let b of gr.clones)b.dispose?.();gr=null}}function Bb(b){if(!gr)return;let I=(b-gr.t0)/900;if(I>=1){ng(),Qt=!0;return}let G=Math.sin(Math.min(I,1)*Math.PI);for(let X of gr.clones)X.emissive?X.emissiveIntensity=.85*G:X.color&&X.userData.bpPulseBase!=null&&X.color.setHex(X.userData.bpPulseBase).offsetHSL(.08,.2,.18*G);Qt=!0}function kb(){let b=new Set;for(let I of Object.values(a.elements))Hl.isHidden(I.globalId)&&I.id&&b.add(I.id);for(let[I,G]of c){let X=b.has(I);for(let _e of G){_e.userData.bpIfcHidden=X;for(let Pe of _e.children||[])(Pe?.userData?.isEdgeOverlay||Pe?.userData?.isSectionCap)&&(Pe.visible=!X)}}for(let I of Oe.bindings){let G=ki(I.host?.name||"").element,X=!!(G&&b.has(G));I.host&&(I.host.userData.bpIfcHidden=X)}for(let[I,G]of m)Bi(G,_.get(I)??1,{edgeMode:g});Qt=!0}function zb(b,I){let X=(Array.isArray(b.material)?b.material:[b.material]).map(_e=>{if(!_e)return _e;if(_e.userData.bpOwned)return I(_e);let Pe=_e.clone();return Pe.userData.bpOwned=!0,I(Pe)});b.material=X.length===1?X[0]:X}function Wl(b,I){let G="restore"in I&&I.restore,X=!G&&!!I.on;ze.set(b.globalId,X),G?We.delete(b.globalId):We.set(b.globalId,I);let _e=G?1:Math.min(Math.max(I.level??1,0),1),Pe=new Je(G?0:I.color);X&&Pe.lerp(new Je(Ch),.35*(1-_e));for(let Ie of oi(b))zb(Ie,Ye=>(Ye.color&&(Ye.userData.bpLightBase==null&&(Ye.userData.bpLightBase=Ye.color.getHex()),G?Ye.color.setHex(Ye.userData.bpLightBase):Ye.color.copy(Pe)),Ye.emissive&&(X?(Ye.emissive.copy(Pe),Ye.emissiveIntensity=.3+.35*_e):(Ye.emissive.setHex(0),Ye.emissiveIntensity=0)),Ye));Qt=!0}function ig(b){let I=!ze.get(b.globalId);Wl(b,I?He:Be)}function Hb(){for(let[b,I]of[...We]){let G=a.elements[b];G&&Wl(G,I)}}function Xl(b){b?.ok||(console.warn("Home command failed",b),nf=`${Ot("home.failed")}${b?.status?` (${b.status})`:""}${b?.error?`: ${b.error}`:""}`,ua(),window.setTimeout(()=>{nf="",ua()},4e3))}function Vb(b){if(qb(b),rt(b)?.deviceType!=="ColorTemperatureLight"){ig(b);return}Ge.command(b.globalId,{type:"toggle"}).then(Xl)}function Gb(b,I){let G=oi(b);if(!I?.point||!G.length)return{dy:1,side:-1};let _e=Qs(G).getCenter(new D),Pe=new D().setFromMatrixColumn(Q.matrixWorld,0),Ie=I.point.clone().sub(_e);return{dy:Ie.y,side:Ie.dot(Pe)}}let rg=new Map;function Wb(b){let I=rg.get(b);return I||(I=Object.values(a.elements).filter(G=>G.type===b),rg.set(b,I)),I}function Xb(b,I){let G=I?.camera||Q,X=new D().setFromMatrixColumn(G.matrixWorld,0),_e=[];for(let Pe of Wb(b)){if(Hl.isHidden(Pe.globalId))continue;let Ie=oi(Pe).filter(qt=>{if(!Vs(qt))return!1;for(let Ft=qt;Ft;Ft=Ft.parent)if(!Ft.visible)return!1;return!0});if(b==="IfcWindow"){let qt=new Set(Te.operableMeshes(Pe.id,oi(Pe)));for(let Ft=Ie.length-1;Ft>=0;Ft--)qt.has(Ie[Ft])||Ie.splice(Ft,1)}if(!Ie.length)continue;let Ye=Qs(Ie);if(Ye.isEmpty())continue;let lt=new Set(Ie),St=qt=>{for(let Ft=qt;Ft;Ft=Ft.parent)if(lt.has(Ft))return!0;return Gl(qt)===Pe},en=Ie[0],Vn=b==="IfcSwitchingDevice"?fv(Ye,Ll(Pe),X).map(qt=>qt.center):[Ye.getCenter(new D)];for(let qt of Vn)_e.push({element:Pe,center:qt,group:Pe.globalId,hit:{object:en,point:qt},owns:St})}return _e}let jh=new Map;function Jh(b,I,G=!0){let X=oi(b);if(!X.length)return;let _e=Qs(X),Pe=_e.getCenter(new D),Ie=_e.getSize(new D),Ye=I.position==="down"?-1:1;Pe.y+=Ye*Ie.y/4;let lt=Ll(b);if(lt.length>1){let St=new D().setFromMatrixColumn(Q.matrixWorld,0);if(St.y=0,St.lengthSq()>1e-9){St.normalize();let en=I.rocker===lt[0]?-1:1;Pe.addScaledVector(St,en*Math.max(Ie.x,Ie.z)/4)}}Le.showFeedback({worldPos:Pe,kind:"switch",direction:I.position,haptic:G})}function qb(b){let I=oi(b);I.length&&Le.showFeedback({worldPos:Qs(I).getCenter(new D),kind:"light"})}function $b(b,I){if(!b?.host||I.from===I.to)return;let G=new vt().setFromObject(b.host);if(G.isEmpty())return;let X=G.getCenter(new D),_e=I.to>I.from;if(b.sections){Le.showFeedback({worldPos:X,kind:"lift",direction:_e?"up":"down"});return}if(b.panels){let lt=b.pivot.parent;if(!lt)return;lt.updateWorldMatrix(!0,!1),b.panels.forEach((St,en)=>{let Vn=new vt().setFromObject(St.pivot);if(Vn.isEmpty())return;let qt=St.slideLocal.clone().transformDirection(lt.matrixWorld);_e||qt.negate();let Ft=Vn.getCenter(new D);Le.showFeedback({worldPos:Ft,kind:"slide",worldDir:qt,haptic:en===0})});return}if(b.slideLocal){let lt=b.pivot.parent;if(!lt)return;lt.updateWorldMatrix(!0,!1);let St=b.slideLocal.clone().transformDirection(lt.matrixWorld);_e||St.negate(),Le.showFeedback({worldPos:X,kind:"slide",worldDir:St});return}let Pe=b.pivot.getWorldPosition(new D),Ie=Rh(I.to,b.sign)-Rh(I.from,b.sign),Ye=Vv(X.toArray(),Pe.toArray(),Ie);Le.showFeedback({worldPos:X,kind:"hinge",hinge:Pe,to:Ye})}function Yb(b,I){let G=oi(b),X=Te.operableMeshes(b.id,G),_e=X[0];if(!_e?.parent)return;let Pe=Te.slideOf(b.id),Ie;Pe?(Ie=new D(Pe[0],Pe[1],Pe[2]).normalize(),I||Ie.negate()):(_e.parent.updateWorldMatrix(!0,!1),Ie=new D(I?1:-1,0,0).transformDirection(_e.parent.matrixWorld)),Le.showFeedback({worldPos:Qs(X).getCenter(new D),kind:"slide",worldDir:Ie})}function Zb(b,I){return b?Te.acceptsHit(b.id,oi(b),I):!1}function sg(b,I){Jh(b,I),Qh(b),jh.set(b.globalId,performance.now()),Ge.press(b.globalId,I).then(Xl)}function Kb(b,I){let G=rt(b),X=Kv(b,Gb(b,I));if(G?.deviceType!=="GenericSwitch"||!Ge.simulation()){Jh(b,X),Qh(b);return}sg(b,X)}function jb(b){if(rt(b)?.deviceType!=="GenericSwitch"||!Ge.simulation())return null;let G=Ll(b),X=[];return G.forEach((_e,Pe)=>{for(let Ie of["up","down"]){let Ye=Ot(Ie==="up"?"home.up":"home.down");X.push({id:`switch-${_e}-${Ie}`,labelKey:Ie==="up"?"home.up":"home.down",label:G.length>1?`${Pe+1} ${Ye}`:Ye,run:()=>sg(b,{rocker:_e,position:Ie,kind:"short"})})}}),X}function Jb(b){let I=rt(b);if(I?.deviceType!=="WindowCovering")return;let G=I.state?.windowCovering?.targetPositionLiftPercent100ths,X=G!=null&&G<5e3;Ge.command(b.globalId,{type:X?"coverClose":"coverOpen"}).then(Xl)}function Qb(b){return rt(b)?.deviceType!=="WindowCovering"?null:[["coverOpen","ui.open"],["coverClose","ui.close"],["coverStop","home.stop"]].map(([G,X])=>({id:G,labelKey:X,run:()=>Ge.command(b.globalId,{type:G}).then(Xl)}))}function Qh(b){for(let I of oi(b)){if(I.userData.bpPressing)continue;I.userData.bpPressing=!0;let G=I.position.y;I.position.y=G-.004,window.setTimeout(()=>{I.position.y=G,I.userData.bpPressing=!1,Qt=!0},160)}Qt=!0}function eM(b){let I=!ve.get(b.globalId);Te.slide(b.id,oi(b),I,performance.now())&&(Yb(b,I),ve.set(b.globalId,I),Qt=!0)}function tM(b){if(Ce())return;let I=Q;if(!I||!p)return;let G=n.getBoundingClientRect(),X=G.width||n.clientWidth||1,_e=G.height||n.clientHeight||1;Kh.x=(b.clientX-G.left)/X*2-1,Kh.y=-((b.clientY-G.top)/_e)*2+1,Zh.setFromCamera(Kh,I);let Pe=Zh.intersectObject(p,!0).filter(Ft=>Vs(Ft.object)),Ie=p;for(;Ie.parent;)Ie=Ie.parent;let Ye={raycaster:Zh,now:performance.now(),camera:I,root:Ie,tap:{x:b.clientX-G.left,y:b.clientY-G.top},size:{w:X,h:_e}},lt=Oe.taps.resolve(Pe,Ye,Ft=>Vs(Ft.object));if(lt&&(lt.kind==="direct"||lt.kind==="extended")&&lt.hit?.object){let Ft=lt.hit.object,fa=Array.isArray(lt.claim?.actions)?lt.claim.actions.slice():[],rf=Ft.userData?.bpPart||ki(Ft.name||"").part;Vl.openPopover(Gl(Ft),rf,fa,b.clientX,b.clientY);return}let St=Pe[0];if(!St){Vl.closePopover();return}let en=Gl(St.object),Vn=St.object.userData?.bpPart||ki(St.object.name||"").part,qt=lt?.kind==="legacy"&&Array.isArray(lt.claim?.actions)?lt.claim.actions.slice():[];Vl.openPopover(en,Vn,qt,b.clientX,b.clientY)}l=tM;let ef=Yv({search:typeof location<"u"?location.search:"",storage:typeof localStorage<"u"?localStorage:null}),og=$v(a),tf=ef.mode,nf="",xr=null;function nM(b){let I=a.elements[b.globalId];I&&b.deviceType==="ColorTemperatureLight"&&Wl(I,Em(b))}function iM(){for(let b of[...ze.keys()]){let I=a.elements[b];I&&Wl(I,{restore:!0})}}function ua(){if(!xr)return;let b=Ge?Ge.status():"off",I=b==="live"?Ge.simulation()?"home.statusLive":"home.statusLiveNoSim":b==="connecting"?"home.statusConnecting":b==="unreachable"?"home.statusUnreachable":"home.statusOff";xr.textContent=nf||Ot(I),xr.dataset.status=b,xr.title=b==="off"?"":ef.baseUrl}function ag(){if(!og)return;let b=document.getElementById("section-home");if(!b){let X=document.getElementById("section-locale");if(!X?.parentNode)return;b=document.createElement("section"),b.className="sheet-section",b.id="section-home",X.parentNode.insertBefore(b,X)}b.replaceChildren();let I=document.createElement("h2");I.className="sheet-title",I.textContent=Ot("home.title");let G=document.createElement("div");G.className="seg",G.id="home-mode",G.setAttribute("role","group"),G.setAttribute("aria-label",Ot("home.title"));for(let[X,_e]of[["live","home.live"],["off","home.off"]]){let Pe=document.createElement("button");Pe.type="button",Pe.dataset.homeMode=X,Pe.textContent=Ot(_e),X===tf&&Pe.classList.add("is-active"),Pe.addEventListener("click",()=>rM(X)),G.append(Pe)}xr=document.createElement("p"),xr.className="home-status",xr.setAttribute("aria-live","polite"),xr.style.cssText="margin:0.5rem 0 0;font-size:0.76rem;line-height:1.35;color:var(--fg-secondary)",b.append(I,G,xr),ua()}function rM(b){tf=b,Zv(typeof localStorage<"u"?localStorage:null,b),document.querySelectorAll("#home-mode button").forEach(I=>{I.classList.toggle("is-active",I.dataset.homeMode===b)}),Ge&&(b==="live"?Ge.start():(Ge.stop(),iM()),ua())}og&&(Ge=Jv({baseUrl:ef.baseUrl,onStatus:()=>{ua(),Qt=!0},onDevice:b=>nM(b),onSwitch:b=>{if(b.event!=="initialPress")return;let I=a.elements[b.globalId],G=performance.now()-(jh.get(b.globalId)??-1/0)<3e3;jh.delete(b.globalId),I&&!G&&((b.position==="up"||b.position==="down")&&Jh(I,{rocker:b.rocker,position:b.position},!1),Qh(I))}}),ag(),tf==="live"&&Ge.start(),window.blueprintsHome=Ge),Vp(()=>Vl.refresh());let lg=null,cg=null,ha="fast",ug=null,ql=!1;n.addEventListener("pointermove",()=>{Ai?.isActive()&&(Qt=!0)}),n.addEventListener("pointerup",()=>{Ai?.isActive()&&(Qt=!0)});function sM(){let b=Q.view;return[Q.position.x,Q.position.y,Q.position.z,Q.quaternion.x,Q.quaternion.y,Q.quaternion.z,Q.quaternion.w,Q.zoom,Q.near,Q.far,Q.fov||0,Q.left,Q.right,Q.top,Q.bottom,le.target.x,le.target.y,le.target.z,n.width,n.height,b&&b.enabled?1:0,b?b.offsetX:0,b?b.offsetY:0,b?b.fullWidth:0,b?b.fullHeight:0,j==="ortho"?1:0]}function oM(){let b=sM(),I=lg,G=!I||I.length!==b.length;if(!G&&I){for(let X=0;X<b.length;X++)if(b[X]!==I[X]){G=!0;break}}return G&&(lg=b),G}function aM(){let b=[y,g,yh(),Ks?"1":"0",String(d)],I=f?.background;I&&I.isColor&&b.push(I.getHexString());for(let[X,_e]of _)b.push(X,Number(_e).toFixed(3));for(let X of z)b.push(String(X.id),X.locked?"1":"0",Number(X.t).toFixed(4));let G=Hl.hiddenIds();return b.push(G.length?G.slice().sort().join(","):"-"),b.join("|")}function $l(){if($t)return;let b=performance.now();Oe.step(b)&&(Qt=!0,Re?.stage.markDirty()),Te.step(b)&&(Qt=!0,Re?.stage.markDirty()),Bb(b),Ob(b),Eb(b),le.update(),p&&mi(),Vm||(zh.copy(Q.position),Hh.copy(le.target),Vm=!0);let I=Q.position.distanceToSquared(zh)>1e-8||le.target.distanceToSquared(Hh)>1e-8;zh.copy(Q.position),Hh.copy(le.target);let G=aM(),X=G!==cg;X&&Re?.stage.markDirty();let _e=oM();if(X&&(ql=!0),ha=!la&&!I&&!X&&!V&&!gs&&!ql?"high":"fast",!Qt&&!X&&!_e&&!(ha!==ug)&&!ql){requestAnimationFrame($l);return}Qt=!1,cg=G,ug=ha,X||(ql=!1),Ai?.update(),pe.update();let Ye=te.render(f,Q,p,jm,{quality:ha,batchKey:G,deferPrime:X||V});Qm&&!Ye&&Jm(),Qm=Ye,requestAnimationFrame($l)}return $l(),Km}return pM(b2);})();
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
