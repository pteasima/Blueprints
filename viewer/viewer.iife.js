var BlueprintsViewerBundle=(()=>{var af=Object.defineProperty;var xM=Object.getOwnPropertyDescriptor;var yM=Object.getOwnPropertyNames;var _M=Object.prototype.hasOwnProperty;var vM=(n,e)=>{for(var t in e)af(n,t,{get:e[t],enumerable:!0})},bM=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of yM(e))!_M.call(n,r)&&r!==t&&af(n,r,{get:()=>e[r],enumerable:!(i=xM(e,r))||i.enumerable});return n};var MM=n=>bM(af({},"__esModule",{value:!0}),n);var I2={};vM(I2,{mountViewer:()=>P2});var rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},l0=0,Yf=1,c0=2;var Is=1,u0=2,ko=3,fi=0,Mn=1,Ft=2,bi=0,er=1,Zf=2,Kf=3,jf=4,eu=5;var Fi=100,h0=101,f0=102,d0=103,p0=104,tl=200,os=201,m0=202,g0=203,nl=204,zo=205,x0=206,il=207,y0=208,_0=209,v0=210,b0=211,M0=212,S0=213,w0=214,Pc=0,Ic=1,Lc=2,wo=3,Dc=4,Nc=5,Oc=6,Fc=7,tu=0,E0=1,T0=2,Mi=0,Jf=1,Qf=2,ed=3,Ls=4,td=5,nd=6,id=7,Of="attached",A0="detached",rd=300,Ds=301,Ho=302,nu=303,iu=304,ei=1e3,_i=1001,Eo=1002,Yt=1003,ru=1004;var Ns=1005;var Zt=1006,Vo=1007;var Si=1008;var Dn=1009,sd=1010,od=1011,Go=1012,su=1013,Ui=1014,qn=1015,ii=1016,ou=1017,au=1018,Os=1020,ad=35902,ld=35899,cd=1021,ud=1022,Sn=1023,Tr=1026,Fr=1027,lu=1028,cu=1029,as=1030,uu=1031;var hu=1033,rl=33776,sl=33777,ol=33778,al=33779,fu=35840,du=35841,pu=35842,mu=35843,gu=36196,xu=37492,yu=37496,_u=37488,vu=37489,ll=37490,bu=37491,Mu=37808,Su=37809,wu=37810,Eu=37811,Tu=37812,Au=37813,Ru=37814,Cu=37815,Pu=37816,Iu=37817,Lu=37818,Du=37819,Nu=37820,Ou=37821,Fu=36492,Uu=36494,Bu=36495,ku=36283,zu=36284,cl=36285,Hu=36286;var Es=2300,Ts=2301,Rc=2302,Ff=2303,Uf=2400,Bf=2401,kf=2402,R0=2500;var hd=0,ul=1,Wo=2,C0=3200;var hl=0,P0=1,di="",At="srgb",Wn="srgb-linear",Aa="linear",Ot="srgb";var Cc=7680;var I0=519,L0=512,D0=513,N0=514,fd=515,O0=516,F0=517,dd=518,pd=519,md=35044;var gd="300 es",vi=2e3,To=2001;function SM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U0(){let n=Ao("canvas");return n.style.display="block",n}var gg={},Ro=null;function Ra(...n){let e="THREE."+n.shift();Ro?Ro("log",e,...n):console.log(e,...n)}function B0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function nt(...n){n=B0(n);let e="THREE."+n.shift();if(Ro)Ro("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=B0(n);let e="THREE."+n.shift();if(Ro)Ro("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ws(...n){let e=n.join(" ");e in gg||(gg[e]=!0,nt(...n))}function k0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var z0={[Pc]:Pc,[Lc]:Oc,[Dc]:Dc,[wo]:Nc,[Ic]:Ic,[Oc]:Lc,[Fc]:Fc,[Nc]:wo},Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xg=1234567,Mo=Math.PI/180,As=180/Math.PI;function tr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function xd(n,e){return(n%e+e)%e}function EM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function TM(n,e,t){return n!==e?(t-n)/(e-n):0}function Ta(n,e,t){return(1-t)*n+t*e}function AM(n,e,t,i){return Ta(n,e,1-Math.exp(-t*i))}function RM(n,e=1){return e-Math.abs(xd(n,e*2)-e)}function CM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function PM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function IM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function LM(n,e){return n+Math.random()*(e-n)}function DM(n){return n*(.5-Math.random())}function NM(n){n!==void 0&&(xg=n);let e=xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OM(n){return n*Mo}function FM(n){return n*As}function UM(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function BM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kM(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*x,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*x,a*l);break;case"ZYZ":n.set(c*x,c*d,a*u,a*l);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _d(n,e){if(e.constructor===Float32Array)return n;let t=Vu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function vd(n,e){if(e.constructor===Float32Array)return n;let t=Vu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var nr={DEG2RAD:Mo,RAD2DEG:As,generateUUID:tr,clamp:ht,euclideanModulo:xd,mapLinear:EM,inverseLerp:TM,lerp:Ta,damp:AM,pingpong:RM,smoothstep:CM,smootherstep:PM,randInt:IM,randFloat:LM,randFloatSpread:DM,seededRandom:NM,degToRad:OM,radToDeg:FM,isPowerOfTwo:UM,ceilPowerOfTwo:BM,floorPowerOfTwo:yd,setQuaternionFromProperEuler:kM,normalize:vd,denormalize:_d},Xe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],x=s[o+2],y=s[o+3];if(h!==y||c!==f||l!==d||u!==x){let g=c*f+l*d+u*x+h*y;g<0&&(f=-f,d=-d,x=-x,y=-y,g=-g);let m=1-a;if(g<.9995){let v=Math.acos(g),T=Math.sin(v);m=Math.sin(m*v)/T,a=Math.sin(a*v)/T,c=c*m+f*a,l=l*m+d*a,u=u*m+x*a,h=h*m+y*a}else{c=c*m+f*a,l=l*m+d*a,u=u*m+x*a,h=h*m+y*a;let v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],x=s[o+3];return e[t]=a*x+u*h+c*d-l*f,e[t+1]=c*x+u*f+l*h-a*d,e[t+2]=l*x+u*d+a*f-c*h,e[t+3]=u*x-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h-f*d*x;break;case"YXZ":this._x=f*u*h+l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h+f*d*x;break;case"ZXY":this._x=f*u*h-l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h-f*d*x;break;case"ZYX":this._x=f*u*h-l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h+f*d*x;break;case"YZX":this._x=f*u*h+l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h-f*d*x;break;case"XZY":this._x=f*u*h-l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h+f*d*x;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lf=new N,yg=new Wt,lt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],x=i[8],y=r[0],g=r[3],m=r[6],v=r[1],T=r[4],M=r[7],E=r[2],R=r[5],_=r[8];return s[0]=o*y+a*v+c*E,s[3]=o*g+a*T+c*R,s[6]=o*m+a*M+c*_,s[1]=l*y+u*v+h*E,s[4]=l*g+u*T+h*R,s[7]=l*m+u*M+h*_,s[2]=f*y+d*v+x*E,s[5]=f*g+d*T+x*R,s[8]=f*m+d*M+x*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,x=t*h+i*f+r*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=h*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=d*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cf.makeScale(e,t)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cf.makeRotation(-e)),this}translate(e,t){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cf=new lt,_g=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vg=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zM(){let n={enabled:!0,workingColorSpace:Wn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ot&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(r.r=So(r.r),r.g=So(r.g),r.b=So(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?Aa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wn]:{primaries:e,whitePoint:i,transfer:Aa,toXYZ:_g,fromXYZ:vg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:_g,fromXYZ:vg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}var yt=zM();function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function So(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var to,Uc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{to===void 0&&(to=Ao("canvas")),to.width=e.width,to.height=e.height;let r=to.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=to}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ao("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},HM=0,Co=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uf(r[o].image)):s.push(uf(r[o]))}else s=uf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function uf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Uc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var VM=0,hf=new N,hn=class n extends Ni{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=_i,r=_i,s=Zt,o=Si,a=Sn,c=Dn,l=n.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=tr(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hf).x}get height(){return this.source.getSize(hf).y}get depth(){return this.source.getSize(hf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ei:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ei:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=rd;hn.DEFAULT_ANISOTROPY=1;var wt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],x=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,M=(d+1)/2,E=(m+1)/2,R=(u+f)/4,_=(h+y)/4,A=(x+g)/4;return T>M&&T>E?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=_/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=A/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=_/s,r=A/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-x)*(g-x)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(h-y)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bc=class extends Ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new hn({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Co(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Bc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ca=class extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kc=class extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var rt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,c,l,u,h,f,d,x,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,f,d,x,y,g)}set(e,t,i,r,s,o,a,c,l,u,h,f,d,x,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=x,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/no.setFromMatrixColumn(e,0).length(),s=1/no.setFromMatrixColumn(e,1).length(),o=1/no.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,x=a*u,y=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+x*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,x=l*u,y=l*h;t[0]=f+y*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-x,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,x=l*u,y=l*h;t[0]=f-y*a,t[4]=-o*h,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,d=o*h,x=a*u,y=a*h;t[0]=c*u,t[4]=x*l-d,t[8]=f*l+y,t[1]=c*h,t[5]=y*l+f,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,x=a*c,y=a*l;t[0]=c*u,t[4]=y-f*h,t[8]=x*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+x,t[10]=f-y*h}else if(e.order==="XZY"){let f=o*c,d=o*l,x=a*c,y=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+y,t[5]=o*u,t[9]=d*h-x,t[2]=x*h-d,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,WM)}lookAt(e,t,i){let r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),qr.crossVectors(i,ci),qr.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),qr.crossVectors(i,ci)),qr.normalize(),Kl.crossVectors(ci,qr),r[0]=qr.x,r[4]=Kl.x,r[8]=ci.x,r[1]=qr.y,r[5]=Kl.y,r[9]=ci.y,r[2]=qr.z,r[6]=Kl.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],x=i[2],y=i[6],g=i[10],m=i[14],v=i[3],T=i[7],M=i[11],E=i[15],R=r[0],_=r[4],A=r[8],U=r[12],k=r[1],Y=r[5],re=r[9],Q=r[13],B=r[2],K=r[6],z=r[10],ie=r[14],ge=r[3],ae=r[7],ne=r[11],fe=r[15];return s[0]=o*R+a*k+c*B+l*ge,s[4]=o*_+a*Y+c*K+l*ae,s[8]=o*A+a*re+c*z+l*ne,s[12]=o*U+a*Q+c*ie+l*fe,s[1]=u*R+h*k+f*B+d*ge,s[5]=u*_+h*Y+f*K+d*ae,s[9]=u*A+h*re+f*z+d*ne,s[13]=u*U+h*Q+f*ie+d*fe,s[2]=x*R+y*k+g*B+m*ge,s[6]=x*_+y*Y+g*K+m*ae,s[10]=x*A+y*re+g*z+m*ne,s[14]=x*U+y*Q+g*ie+m*fe,s[3]=v*R+T*k+M*B+E*ge,s[7]=v*_+T*Y+M*K+E*ae,s[11]=v*A+T*re+M*z+E*ne,s[15]=v*U+T*Q+M*ie+E*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],x=e[3],y=e[7],g=e[11],m=e[15],v=c*d-l*f,T=a*d-l*h,M=a*f-c*h,E=o*d-l*u,R=o*f-c*u,_=o*h-a*u;return t*(y*v-g*T+m*M)-i*(x*v-g*E+m*R)+r*(x*T-y*E+m*_)-s*(x*M-y*R+g*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(s*u-a*c)+r*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],x=e[12],y=e[13],g=e[14],m=e[15],v=t*a-i*o,T=t*c-r*o,M=t*l-s*o,E=i*c-r*a,R=i*l-s*a,_=r*l-s*c,A=u*y-h*x,U=u*g-f*x,k=u*m-d*x,Y=h*g-f*y,re=h*m-d*y,Q=f*m-d*g,B=v*Q-T*re+M*Y+E*k-R*U+_*A;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/B;return e[0]=(a*Q-c*re+l*Y)*K,e[1]=(r*re-i*Q-s*Y)*K,e[2]=(y*_-g*R+m*E)*K,e[3]=(f*R-h*_-d*E)*K,e[4]=(c*k-o*Q-l*U)*K,e[5]=(t*Q-r*k+s*U)*K,e[6]=(g*M-x*_-m*T)*K,e[7]=(u*_-f*M+d*T)*K,e[8]=(o*re-a*k+l*A)*K,e[9]=(i*k-t*re-s*A)*K,e[10]=(x*R-y*M+m*v)*K,e[11]=(h*M-u*R-d*v)*K,e[12]=(a*U-o*Y-c*A)*K,e[13]=(t*Y-i*U+r*A)*K,e[14]=(y*T-x*E-g*v)*K,e[15]=(u*E-h*T+f*v)*K,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,x=s*h,y=o*u,g=o*h,m=a*h,v=c*l,T=c*u,M=c*h,E=i.x,R=i.y,_=i.z;return r[0]=(1-(y+m))*E,r[1]=(d+M)*E,r[2]=(x-T)*E,r[3]=0,r[4]=(d-M)*R,r[5]=(1-(f+m))*R,r[6]=(g+v)*R,r[7]=0,r[8]=(x+T)*_,r[9]=(g-v)*_,r[10]=(1-(f+y))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=no.set(r[0],r[1],r[2]).length(),a=no.set(r[4],r[5],r[6]).length(),c=no.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ii.copy(this);let l=1/o,u=1/a,h=1/c;return Ii.elements[0]*=l,Ii.elements[1]*=l,Ii.elements[2]*=l,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=h,Ii.elements[9]*=h,Ii.elements[10]*=h,t.setFromRotationMatrix(Ii),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=vi,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),x,y;if(c)x=s/(o-s),y=o*s/(o-s);else if(a===vi)x=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===To)x=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vi,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),x,y;if(c)x=1/(o-s),y=o/(o-s);else if(a===vi)x=-2/(o-s),y=-(o+s)/(o-s);else if(a===To)x=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},no=new N,Ii=new rt,GM=new N(0,0,0),WM=new N(1,1,1),qr=new N,Kl=new N,ci=new N,bg=new rt,Mg=new Wt,$i=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},XM=0,Sg=new N,io=new Wt,_r=new rt,jl=new N,pa=new N,qM=new N,$M=new Wt,wg=new N(1,0,0),Eg=new N(0,1,0),Tg=new N(0,0,1),Ag={type:"added"},YM={type:"removed"},ro={type:"childadded",child:null},ff={type:"childremoved",child:null},Vt=class n extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new $i,i=new Wt,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new lt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,t){return Sg.copy(e).applyQuaternion(this.quaternion),this.position.add(Sg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jl.copy(e):jl.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(pa,jl,this.up):_r.lookAt(jl,pa,this.up),this.quaternion.setFromRotationMatrix(_r),r&&(_r.extractRotation(r.matrixWorld),io.setFromRotationMatrix(_r),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),ro.child=e,this.dispatchEvent(ro),ro.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YM),ff.child=e,this.dispatchEvent(ff),ff.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,qM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,$M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new N(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ZM={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},H0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function df(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=xd(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=df(o,s,e+1/3),this.g=df(o,s,e),this.b=df(o,s,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=H0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return yt.workingToColorSpace(Pn.copy(this),e),Math.round(ht(Pn.r*255,0,255))*65536+Math.round(ht(Pn.g*255,0,255))*256+Math.round(ht(Pn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Pn.copy(this),t);let i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=At){yt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,i=Pn.g,r=Pn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(Jl);let i=Ta($r.h,Jl.h,t),r=Ta($r.s,Jl.s,t),s=Ta($r.l,Jl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new $e;$e.NAMES=H0;var Xn=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Li=new N,vr=new N,pf=new N,br=new N,so=new N,oo=new N,Rg=new N,mf=new N,gf=new N,xf=new N,yf=new wt,_f=new wt,vf=new wt,Xi=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Li.subVectors(e,t),r.cross(Li);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Li.subVectors(r,t),vr.subVectors(i,t),pf.subVectors(e,t);let o=Li.dot(Li),a=Li.dot(vr),c=Li.dot(pf),l=vr.dot(vr),u=vr.dot(pf),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,x=(o*u-a*c)*f;return s.set(1-d-x,x,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,br)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,br.x),c.addScaledVector(o,br.y),c.addScaledVector(a,br.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return yf.setScalar(0),_f.setScalar(0),vf.setScalar(0),yf.fromBufferAttribute(e,t),_f.fromBufferAttribute(e,i),vf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yf,s.x),o.addScaledVector(_f,s.y),o.addScaledVector(vf,s.z),o}static isFrontFacing(e,t,i,r){return Li.subVectors(i,t),vr.subVectors(e,t),Li.cross(vr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Li.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;so.subVectors(r,i),oo.subVectors(s,i),mf.subVectors(e,i);let c=so.dot(mf),l=oo.dot(mf);if(c<=0&&l<=0)return t.copy(i);gf.subVectors(e,r);let u=so.dot(gf),h=oo.dot(gf);if(u>=0&&h<=u)return t.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),t.copy(i).addScaledVector(so,o);xf.subVectors(e,s);let d=so.dot(xf),x=oo.dot(xf);if(x>=0&&d<=x)return t.copy(s);let y=d*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(i).addScaledVector(oo,a);let g=u*x-d*h;if(g<=0&&h-u>=0&&d-x>=0)return Rg.subVectors(s,r),a=(h-u)/(h-u+(d-x)),t.copy(r).addScaledVector(Rg,a);let m=1/(g+y+f);return o=y*m,a=f*m,t.copy(i).addScaledVector(so,o).addScaledVector(oo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vt=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ql.copy(i.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),ec.subVectors(this.max,ma),ao.subVectors(e.a,ma),lo.subVectors(e.b,ma),co.subVectors(e.c,ma),Yr.subVectors(lo,ao),Zr.subVectors(co,lo),vs.subVectors(ao,co);let t=[0,-Yr.z,Yr.y,0,-Zr.z,Zr.y,0,-vs.z,vs.y,Yr.z,0,-Yr.x,Zr.z,0,-Zr.x,vs.z,0,-vs.x,-Yr.y,Yr.x,0,-Zr.y,Zr.x,0,-vs.y,vs.x,0];return!bf(t,ao,lo,co,ec)||(t=[1,0,0,0,1,0,0,0,1],!bf(t,ao,lo,co,ec))?!1:(tc.crossVectors(Yr,Zr),t=[tc.x,tc.y,tc.z],bf(t,ao,lo,co,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mr=[new N,new N,new N,new N,new N,new N,new N,new N],Di=new N,Ql=new vt,ao=new N,lo=new N,co=new N,Yr=new N,Zr=new N,vs=new N,ma=new N,ec=new N,tc=new N,bs=new N;function bf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){bs.fromArray(n,s);let a=r.x*Math.abs(bs.x)+r.y*Math.abs(bs.y)+r.z*Math.abs(bs.z),c=e.dot(bs),l=t.dot(bs),u=i.dot(bs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var on=new N,nc=new Xe,KM=0,Bt=class extends Ni{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=md,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?Vu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_d(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):vd(e,this.array)}};var Pa=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ia=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Gt=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},jM=new vt,ga=new N,Mf=new N,yn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):jM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Mf)),this.expandByPoint(ga.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},JM=0,yi=new rt,Sf=new Vt,uo=new N,ui=new vt,xa=new vt,gn=new N,kt=class n extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SM(e)?Ia:Pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];xa.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(ui.min,xa.min),ui.expandByPoint(gn),gn.addVectors(ui.max,xa.max),ui.expandByPoint(gn)):(ui.expandByPoint(xa.min),ui.expandByPoint(xa.max))}ui.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)gn.fromBufferAttribute(a,l),c&&(uo.fromBufferAttribute(e,l),gn.add(uo)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Bt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let U=0;U<i.count;U++)a[U]=new N,c[U]=new N;let u=new N,h=new N,f=new N,d=new Xe,x=new Xe,y=new Xe,g=new N,m=new N;function v(U,k,Y){l[U]=l[k]=l[Y]=1,u.fromBufferAttribute(i,U),h.fromBufferAttribute(i,k),f.fromBufferAttribute(i,Y),d.fromBufferAttribute(s,U),x.fromBufferAttribute(s,k),y.fromBufferAttribute(s,Y),h.sub(u),f.sub(u),x.sub(d),y.sub(d);let re=1/(x.x*y.y-y.x*x.y);isFinite(re)&&(g.copy(h).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(re),m.copy(f).multiplyScalar(x.x).addScaledVector(h,-y.x).multiplyScalar(re),a[U].add(g),a[k].add(g),a[Y].add(g),c[U].add(m),c[k].add(m),c[Y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,k=T.length;U<k;++U){let Y=T[U],re=Y.start,Q=Y.count;for(let B=re,K=re+Q;B<K;B+=3)v(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new N,E=new N,R=new N,_=new N;function A(U){R.fromBufferAttribute(r,U),_.copy(R);let k=a[U];M.copy(k),M.sub(R.multiplyScalar(R.dot(k))).normalize(),E.crossVectors(_,k);let re=E.dot(c[U])<0?-1:1;o.setXYZW(U,M.x,M.y,M.z,re)}for(let U=0,k=i.count;U<k;++U)l[U]&&A(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,x=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let m=0;m<u;m++)f[x++]=l[d++]}return new Bt(f,u,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=md,this.updateRanges=[],this.version=0,this.uuid=tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Cg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Cg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Cg(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=tr()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Gn=new N,In=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Vu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_d(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):vd(e,this.data.array)}},wf=new N,QM=new N,eS=new lt,xn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=wf.subVectors(i,t).cross(QM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(wf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||eS.getNormalMatrix(e),r=this.coplanarPoint(wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},tS=0,Ln=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=er,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=zo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cc,this.stencilZFail=Cc,this.stencilZPass=Cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Lo=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ho,ya=new N,fo=new N,po=new N,mo=new Xe,_a=new Xe,V0=new rt,ic=new N,va=new N,rc=new N,Pg=new Xe,Ef=new Xe,Ig=new Xe,La=class extends Vt{constructor(e=new Lo){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jr(t,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new In(i,3,0,!1)),ho.setAttribute("uv",new In(i,2,3,!1))}this.geometry=ho,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fo.setFromMatrixScale(this.matrixWorld),V0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),po.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fo.multiplyScalar(-po.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;sc(ic.set(-.5,-.5,0),po,o,fo,r,s),sc(va.set(.5,-.5,0),po,o,fo,r,s),sc(rc.set(.5,.5,0),po,o,fo,r,s),Pg.set(0,0),Ef.set(1,0),Ig.set(1,1);let a=e.ray.intersectTriangle(ic,va,rc,!1,ya);if(a===null&&(sc(va.set(-.5,.5,0),po,o,fo,r,s),Ef.set(0,1),a=e.ray.intersectTriangle(ic,rc,va,!1,ya),a===null))return;let c=e.ray.origin.distanceTo(ya);c<e.near||c>e.far||t.push({distance:c,point:ya.clone(),uv:Xi.getInterpolation(ya,ic,va,rc,Pg,Ef,Ig,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function sc(n,e,t,i,r,s){mo.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(_a.x=s*mo.x-r*mo.y,_a.y=r*mo.x+s*mo.y):_a.copy(mo),n.copy(e),n.x+=_a.x,n.y+=_a.y,n.applyMatrix4(V0)}var Sr=new N,Tf=new N,oc=new N,ac=new N,Yi=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tf.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),ac.copy(this.origin).sub(Tf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(oc),a=ac.dot(this.direction),c=-ac.dot(oc),l=ac.lengthSq(),u=Math.abs(1-o*o),h,f,d,x;if(u>0)if(h=o*c-a,f=o*a-c,x=s*u,h>=0)if(f>=-x)if(f<=x){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=x?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tf).addScaledVector(oc,f),d}intersectSphere(e,t){if(e.radius<0)return null;Sr.subVectors(e.center,this.origin);let i=Sr.dot(this.direction),r=Sr.dot(Sr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,x=t.x-o.x,y=t.y-o.y,g=t.z-o.z,m=i.x-o.x,v=i.y-o.y,T=i.z-o.z,M=Math.abs(c),E=Math.abs(l),R=Math.abs(u),_,A,U,k,Y,re,Q,B,K,z,ie,ge;if(M>=E&&M>=R?(U=c,re=h,K=x,ge=m,c>=0?(_=l,A=u,k=f,Y=d,Q=y,B=g,z=v,ie=T):(_=u,A=l,k=d,Y=f,Q=g,B=y,z=T,ie=v)):E>=R?(U=l,re=f,K=y,ge=v,l>=0?(_=u,A=c,k=d,Y=h,Q=g,B=x,z=T,ie=m):(_=c,A=u,k=h,Y=d,Q=x,B=g,z=m,ie=T)):(U=u,re=d,K=g,ge=T,u>=0?(_=c,A=l,k=h,Y=f,Q=x,B=y,z=m,ie=v):(_=l,A=c,k=f,Y=h,Q=y,B=x,z=v,ie=m)),U===0)return null;let ae=_/U,ne=A/U,fe=1/U,we=k-ae*re,De=Y-ne*re,le=Q-ae*K,Me=B-ne*K,de=z-ae*ge,ee=ie-ne*ge,ue=de*Me-ee*le,Ce=we*ee-De*de,Fe=le*De-Me*we;if(r){if(ue<0||Ce<0||Fe<0)return null}else if((ue<0||Ce<0||Fe<0)&&(ue>0||Ce>0||Fe>0))return null;let Ne=ue+Ce+Fe;if(Ne===0)return null;let Ue=fe*(ue*re+Ce*K+Fe*ge);return(Ne>0?Ue<0:Ue>0)?null:this.at(Ue/Ne,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lg=new rt,Ms=new Yi,lc=new yn,Dg=new N,cc=new N,uc=new N,hc=new N,Af=new N,fc=new N,Ng=new N,dc=new N,ft=class extends Vt{constructor(e=new kt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){fc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(Af.fromBufferAttribute(h,e),o?fc.addScaledVector(Af,u):fc.addScaledVector(Af.sub(t),u))}t.add(fc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),Ms.copy(e.ray).recast(e.near),!(lc.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(lc,Dg)===null||Ms.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Lg.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(Lg),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],m=o[g.materialIndex],v=Math.max(g.start,d.start),T=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=v,E=T;M<E;M+=3){let R=a.getX(M),_=a.getX(M+1),A=a.getX(M+2);r=pc(this,m,e,i,l,u,h,R,_,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=x,m=y;g<m;g+=3){let v=a.getX(g),T=a.getX(g+1),M=a.getX(g+2);r=pc(this,o,e,i,l,u,h,v,T,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],m=o[g.materialIndex],v=Math.max(g.start,d.start),T=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=v,E=T;M<E;M+=3){let R=M,_=M+1,A=M+2;r=pc(this,m,e,i,l,u,h,R,_,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let g=x,m=y;g<m;g+=3){let v=g,T=g+1,M=g+2;r=pc(this,o,e,i,l,u,h,v,T,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function nS(n,e,t,i,r,s,o,a){let c;if(e.side===Mn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===fi,a),c===null)return null;dc.copy(a),dc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(dc);return l<t.near||l>t.far?null:{distance:l,point:dc.clone(),object:n}}function pc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,cc),n.getVertexPosition(c,uc),n.getVertexPosition(l,hc);let u=nS(n,e,t,i,cc,uc,hc,Ng);if(u){let h=new N;Xi.getBarycoord(Ng,cc,uc,hc,h),r&&(u.uv=Xi.getInterpolatedAttribute(r,a,c,l,h,new Xe)),s&&(u.uv1=Xi.getInterpolatedAttribute(s,a,c,l,h,new Xe)),o&&(u.normal=Xi.getInterpolatedAttribute(o,a,c,l,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new N,materialIndex:0};Xi.getNormal(cc,uc,hc,f.normal),u.face=f,u.barycoord=h}return u}var ba=new wt,Og=new wt,Fg=new wt,iS=new wt,Ug=new rt,mc=new N,Rf=new yn,Bg=new rt,Cf=new Yi,Da=class extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Of,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,mc),this.boundingBox.expandByPoint(mc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,mc),this.boundingSphere.expandByPoint(mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rf.copy(this.boundingSphere),Rf.applyMatrix4(r),e.ray.intersectsSphere(Rf)!==!1&&(Bg.copy(r).invert(),Cf.copy(e.ray).applyMatrix4(Bg),!(this.boundingBox!==null&&Cf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Of?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===A0?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Og.fromBufferAttribute(r.attributes.skinIndex,e),Fg.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ba.copy(t),t.set(0,0,0,0)):(ba.set(t.x,t.y,t.z,1),t.set(0,0,0)),ba.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Fg.getComponent(s);if(o!==0){let a=Og.getComponent(s);Ug.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(iS.copy(ba).applyMatrix4(Ug),o)}}return t.isVector4&&(t.w=ba.w),t.applyMatrix4(this.bindMatrixInverse)}},Do=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},No=class extends hn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Yt,u=Yt,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kg=new rt,rS=new rt,Na=class n{constructor(e=[],t=[]){this.uuid=tr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new rt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:rS;kg.multiplyMatrices(a,t[s]),kg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new No(t,e,e,Sn,qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(nt("Skeleton: No bone found with UUID:",s),o=new Do),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},Ar=class extends Bt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},go=new rt,zg=new rt,gc=[],Hg=new vt,sS=new rt,Ma=new ft,Sa=new yn,Rs=class extends ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,sS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,go),Hg.copy(e.boundingBox).applyMatrix4(go),this.boundingBox.union(Hg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,go),Sa.copy(e.boundingSphere).applyMatrix4(go),this.boundingSphere.union(Sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),e.ray.intersectsSphere(Sa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,go),zg.multiplyMatrices(i,go),Ma.matrixWorld=zg,Ma.raycast(e,gc);for(let o=0,a=gc.length;o<a;o++){let c=gc[o];c.instanceId=s,c.object=this,t.push(c)}gc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new No(new Float32Array(r*this.count),r,this.count,lu,qn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;return s[c]=a,s.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new yn,oS=new Xe(.5,.5),xc=new N,Qr=class{constructor(e=new xn,t=new xn,i=new xn,r=new xn,s=new xn,o=new xn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],x=s[8],y=s[9],g=s[10],m=s[11],v=s[12],T=s[13],M=s[14],E=s[15];if(r[0].setComponents(l-o,d-u,m-x,E-v).normalize(),r[1].setComponents(l+o,d+u,m+x,E+v).normalize(),r[2].setComponents(l+a,d+h,m+y,E+T).normalize(),r[3].setComponents(l-a,d-h,m-y,E-T).normalize(),i)r[4].setComponents(c,f,g,M).normalize(),r[5].setComponents(l-c,d-f,m-g,E-M).normalize();else if(r[4].setComponents(l-c,d-f,m-g,E-M).normalize(),t===vi)r[5].setComponents(l+c,d+f,m+g,E+M).normalize();else if(t===To)r[5].setComponents(c,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=oS.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(xc.x=r.normal.x>0?e.max.x:e.min.x,xc.y=r.normal.y>0?e.max.y:e.min.y,xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vg=new rt,zc=class n{constructor(){this.coordinateSystem=vi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Vg.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Qr),i[r].setFromProjectionMatrix(Vg,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Qr),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Rr=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Hc=new N,Vc=new N,Gg=new rt,wa=new Yi,yc=new yn,Pf=new N,Wg=new N,Zi=class extends Vt{constructor(e=new kt,t=new Rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Hc.fromBufferAttribute(t,r-1),Vc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Hc.distanceTo(Vc);e.setAttribute("lineDistance",new Gt(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(r),yc.radius+=s,e.ray.intersectsSphere(yc)===!1)return;Gg.copy(r).invert(),wa.copy(e.ray).applyMatrix4(Gg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let y=d,g=x-1;y<g;y+=l){let m=u.getX(y),v=u.getX(y+1),T=_c(this,e,wa,c,m,v,y);T&&t.push(T)}if(this.isLineLoop){let y=u.getX(x-1),g=u.getX(d),m=_c(this,e,wa,c,y,g,x-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let y=d,g=x-1;y<g;y+=l){let m=_c(this,e,wa,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=_c(this,e,wa,c,x-1,d,x-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function _c(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Hc.fromBufferAttribute(a,r),Vc.fromBufferAttribute(a,s),t.distanceSqToSegment(Hc,Vc,Pf,Wg)>i)return;Pf.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Pf);if(!(l<e.near||l>e.far))return{distance:l,point:Wg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Xg=new N,qg=new N,Oa=class extends Zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Xg.fromBufferAttribute(t,r),qg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Xg.distanceTo(qg);e.setAttribute("lineDistance",new Gt(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fa=class extends Zi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Oo=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$g=new rt,zf=new Yi,vc=new yn,bc=new N,Ua=class extends Vt{constructor(e=new kt,t=new Oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(r),vc.radius+=s,e.ray.intersectsSphere(vc)===!1)return;$g.copy(r).invert(),zf.copy(e.ray).applyMatrix4($g);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,y=d;x<y;x++){let g=l.getX(x);bc.fromBufferAttribute(h,g),Yg(bc,g,c,r,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let x=f,y=d;x<y;x++)bc.fromBufferAttribute(h,x),Yg(bc,x,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Yg(n,e,t,i,r,s,o){let a=zf.distanceSqToPoint(n);if(a<t){let c=new N;zf.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ba=class extends hn{constructor(e=[],t=Ds,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cr=class extends hn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pr=class extends hn{constructor(e,t,i=Ui,r,s,o,a=Yt,c=Yt,l,u=Tr,h=1){if(u!==Tr&&u!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ka=class extends Pr{constructor(e,t=Ui,i=Ds,r,s,o=Yt,a=Yt,c,l=Tr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},za=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ki=class n extends kt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function x(y,g,m,v,T,M,E,R,_,A,U){let k=M/_,Y=E/A,re=M/2,Q=E/2,B=R/2,K=_+1,z=A+1,ie=0,ge=0,ae=new N;for(let ne=0;ne<z;ne++){let fe=ne*Y-Q;for(let we=0;we<K;we++){let De=we*k-re;ae[y]=De*v,ae[g]=fe*T,ae[m]=B,l.push(ae.x,ae.y,ae.z),ae[y]=0,ae[g]=0,ae[m]=R>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(we/_),h.push(1-ne/A),ie+=1}}for(let ne=0;ne<A;ne++)for(let fe=0;fe<_;fe++){let we=f+fe+K*ne,De=f+fe+K*(ne+1),le=f+(fe+1)+K*(ne+1),Me=f+(fe+1)+K*ne;c.push(we,De,Me),c.push(De,le,Me),ge+=6}a.addGroup(d,ge,U),d+=ge,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Mc=new N,Sc=new N,If=new N,wc=new Xi,Ha=class extends kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Mo*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let x=0;x<c;x+=3){o?(l[0]=o.getX(x),l[1]=o.getX(x+1),l[2]=o.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);let{a:y,b:g,c:m}=wc;if(y.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),wc.getNormal(If),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){let T=(v+1)%3,M=h[v],E=h[T],R=wc[u[v]],_=wc[u[T]],A=`${M}_${E}`,U=`${E}_${M}`,k=f.get(U);k?(If.dot(k.normal)<=s&&(d.push(R.x,R.y,R.z),d.push(_.x,_.y,_.z)),f.set(U,null)):f.has(A)||f.set(A,{index0:l[v],index1:l[T],normal:If.clone()})}}for(let x of f.values())if(x){let{index0:y,index1:g}=x;Mc.fromBufferAttribute(a,y),Sc.fromBufferAttribute(a,g),d.push(Mc.x,Mc.y,Mc.z),d.push(Sc.x,Sc.y,Sc.z)}this.setAttribute("position",new Gt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ti=class n extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],x=[],y=[],g=[];for(let m=0;m<u;m++){let v=m*f-o;for(let T=0;T<l;T++){let M=T*h-s;x.push(M,-v,0),y.push(0,0,1),g.push(T/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let T=v+l*m,M=v+l*(m+1),E=v+1+l*(m+1),R=v+1+l*m;d.push(T,M,R),d.push(M,E,R)}this.setIndex(d),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Va=class n extends kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new N,f=new N,d=[],x=[],y=[],g=[];for(let m=0;m<=i;m++){let v=[],T=m/i,M=o+T*a,E=e*Math.cos(M),R=Math.sqrt(e*e-E*E),_=0;m===0&&o===0?_=.5/t:m===i&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let U=A/t,k=r+U*s;h.x=-R*Math.cos(k),h.y=E,h.z=R*Math.sin(k),x.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),g.push(U+_,1-T),v.push(l++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let T=u[m][v+1],M=u[m][v],E=u[m+1][v],R=u[m+1][v+1];(m!==0||o>0)&&d.push(T,M,R),(m!==i-1||c<Math.PI)&&d.push(M,E,R)}this.setIndex(d),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ga=class extends kt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new N,s=new N;if(e.index!==null){let o=e.attributes.position,a=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],f=h.start,d=h.count;for(let x=f,y=f+d;x<y;x+=3)for(let g=0;g<3;g++){let m=a.getX(x+g),v=a.getX(x+(g+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,v),Zg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,h=3*a+(l+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Zg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Gt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Zg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Fs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Kg(r))r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Kg(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Nn(n){let e={};for(let t=0;t<n.length;t++){let i=Fs(n[t]);for(let r in i)e[r]=i[r]}return e}function Kg(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function aS(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var fl={clone:Fs,merge:Nn},lS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lS,this.fragmentShader=cS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=aS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new N().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gc=class extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fn=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nn=class extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ws('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ws('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Wa=class extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=tu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wc=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xc=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function jr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ea(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function uS(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function jg(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function hS(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var ji=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qc=class extends ji{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uf,endingEnd:Uf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bf:s=e,a=2*t-i;break;case kf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Bf:o=e,c=2*i-t;break;case kf:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(i-t)/(r-t),y=x*x,g=y*x,m=-f*g+2*f*y-f*x,v=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*x+1,T=(-1-d)*g+(1.5+d)*y+.5*x,M=d*g-d*y;for(let E=0;E!==a;++E)s[E]=m*o[u+E]+v*o[l+E]+T*o[c+E]+M*o[h+E];return s}},$c=class extends ji{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},Yc=class extends ji{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zc=class extends ji{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let x=(i-t)/(r-t),y=1-x;for(let g=0;g!==a;++g)s[g]=o[l+g]*y+o[c+g]*x;return s}let f=a*2,d=e-1;for(let x=0;x!==a;++x){let y=o[l+x],g=o[c+x],m=d*f+x*2,v=h[m],T=h[m+1],M=e*f+x*2,E=u[M],R=u[M+1],_=dS(i,t,v,E,r);s[x]=G0(_,y,T,R,g)}return s}};function G0(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function fS(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function dS(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=G0(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let c=fS(s,e,t,i,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var ni=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Ea(e.settings)&&(i.settings={inTangents:jr(e.settings.inTangents,Array),outTangents:jr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case Rc:t=this.InterpolantFactoryMethodSmooth;break;case Ff:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return Rc;case this.InterpolantFactoryMethodBezier:return Ff}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Ea(this.settings)&&(Jg(this.settings.inTangents,e),Jg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Ea(this.settings)&&(Qg(this.settings.inTangents,e),Qg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){at("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){at("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&wM(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){at("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Rc,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let h=a*i,f=h-i,d=h+i;for(let x=0;x!==i;++x){let y=t[h+x];if(y!==t[f+x]||y!==t[d+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ea(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Jg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Qg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Ts;var Ir=class extends ni{constructor(e,t,i){super(e,t,i)}};Ir.prototype.ValueTypeName="bool";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=Es;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends ni{constructor(e,t,i,r){super(e,t,i,r)}};Xa.prototype.ValueTypeName="color";var Lr=class extends ni{constructor(e,t,i,r){super(e,t,i,r)}};Lr.prototype.ValueTypeName="number";var Kc=class extends ji{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Wt.slerpFlat(s,0,o,l-a,o,l,c);return s}},Dr=class extends ni{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Kc(this.times,this.values,this.getValueSize(),e)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends ni{constructor(e,t,i){super(e,t,i)}};Nr.prototype.ValueTypeName="string";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=Es;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends ni{constructor(e,t,i,r){super(e,t,i,r)}};es.prototype.ValueTypeName="vector";var qa=class{constructor(e="",t=-1,i=[],r=R0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=tr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(mS(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(ni.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=uS(c);c=jg(c,1,u),l=jg(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Lr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function pS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lr;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return Xa;case"quaternion":return Dr;case"bool":case"boolean":return Ir;case"string":return Nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function mS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=pS(n.type);if(n.times===void 0){let i=[],r=[];hS(n.keys,i,r,"value"),n.times=i,n.values=r}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Ea(n.settings)&&(t.settings={inTangents:jr(n.settings.inTangents,Float32Array),outTangents:jr(n.settings.outTangents,Float32Array)}),t}var qi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(e0(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!e0(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function e0(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var jc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],x=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},W0=new jc,Ji=class{constructor(e){this.manager=e!==void 0?e:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr={},Hf=class extends Error{constructor(e,t){super(e),this.response=t}},Fo=class extends Ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=qi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(wr[e]!==void 0){wr[e].push({onLoad:t,onProgress:i,onError:r});return}wr[e]=[],wr[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=wr[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0,y=0,g=new ReadableStream({start(m){v();function v(){h.read().then(({done:T,value:M})=>{if(T)m.close();else{y+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:x,loaded:y,total:d});for(let R=0,_=u.length;R<_;R++){let A=u[R];A.onProgress&&A.onProgress(E)}m.enqueue(M),v()}},T=>{m.error(T)})}}});return new Response(g)}else throw new Hf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{qi.add(`file:${e}`,l);let u=wr[e];delete wr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=wr[e];if(u===void 0)throw this.manager.itemError(e),l;delete wr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xo=new WeakMap,Jc=class extends Ji{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=qi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=xo.get(o);h===void 0&&(h=[],xo.set(o,h)),h.push({onLoad:t,onError:r})}return o}let a=Ao("img");function c(){u(),t&&t(this);let h=xo.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}xo.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),qi.remove(`image:${e}`);let f=xo.get(this)||[];for(let d=0;d<f.length;d++){let x=f[d];x.onError&&x.onError(h)}xo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qi.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Cs=class extends Ji{constructor(e){super(e)}load(e,t,i,r){let s=new hn,o=new Jc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},ts=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$a=class extends ts{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lf=new rt,t0=new N,n0=new N,Uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;t0.setFromMatrixPosition(e.matrixWorld),t.position.copy(t0),n0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(n0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Lf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Lf,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===To||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ec=new N,Tc=new Wt,Wi=new N,Ya=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ec,Tc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ec,Tc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ec,Tc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ec,Tc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kr=new N,i0=new Xe,r0=new Xe,un=class extends Ya{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,i0,r0),t.subVectors(r0,i0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vf=class extends Uo{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=As*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Za=class extends ts{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Vf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Gf=class extends Uo{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},Ps=class extends ts{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Gf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Oi=class extends Ya{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wf=class extends Uo{constructor(){super(new Oi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Wf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ka=class extends ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Or=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ja=class extends kt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Df=new WeakMap,Ja=class extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=qi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{Df.has(o)===!0?(r&&r(Df.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return qi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Df.set(c,l),qi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});qi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var yo=-90,_o=1,Bo=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new un(yo,_o,e,t);r.layers=this.layers,this.add(r);let s=new un(yo,_o,e,t);s.layers=this.layers,this.add(s);let o=new un(yo,_o,e,t);o.layers=this.layers,this.add(o);let a=new un(yo,_o,e,t);a.layers=this.layers,this.add(a);let c=new un(yo,_o,e,t);c.layers=this.layers,this.add(c);let l=new un(yo,_o,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Qc=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Md="\\[\\]\\.:\\/",gS=new RegExp("["+Md+"]","g"),Sd="[^"+Md+"]",xS="[^"+Md.replace("\\.","")+"]",yS=/((?:WC+[\/:])*)/.source.replace("WC",Sd),_S=/(WCOD+)?/.source.replace("WCOD",xS),vS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sd),bS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sd),MS=new RegExp("^"+yS+_S+vS+bS+"$"),SS=["material","materials","bones","map"],Xf=class{constructor(e,t,i){let r=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gS,"")}static parseTrackName(e){let t=MS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);SS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;at("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Xf;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D2=new Float32Array(1);var ns=class extends Jr{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var s0=new rt,hi=class{constructor(e,t,i=0,r=1/0){this.ray=new Yi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):at("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return s0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s0),this}intersectObject(e,t=!0,i=[]){return qf(e,this,i,t),i.sort(o0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)qf(e[r],this,i,t);return i.sort(o0),i}};function o0(n,e){return n.distance-e.distance}function qf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)qf(s[o],e,t,!0)}}var is=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var $f=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};var a0=new N,Ac=new N,vo=new N,bo=new N,Nf=new N,wS=new N,ES=new N,Qa=class{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){a0.subVectors(e,this.start),Ac.subVectors(this.end,this.start);let i=Ac.dot(Ac);if(i===0)return 0;let s=Ac.dot(a0)/i;return t&&(s=ht(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=wS,i=ES){let r=10000000000000001e-32,s,o,a=this.start,c=e.start,l=this.end,u=e.end;vo.subVectors(l,a),bo.subVectors(u,c),Nf.subVectors(a,c);let h=vo.dot(vo),f=bo.dot(bo),d=bo.dot(Nf);if(h<=r&&f<=r)return t.copy(a),i.copy(c),t.distanceToSquared(i);if(h<=r)s=0,o=d/f,o=ht(o,0,1);else{let x=vo.dot(Nf);if(f<=r)o=0,s=ht(-x/h,0,1);else{let y=vo.dot(bo),g=h*f-y*y;g!==0?s=ht((y*d-x*f)/g,0,1):s=0,o=(y*s+d)/f,o<0?(o=0,s=ht(-x/h,0,1)):o>1&&(o=1,s=ht((y-x)/h,0,1))}}return t.copy(a).addScaledVector(vo,s),i.copy(c).addScaledVector(bo,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var el=class extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function wd(n,e,t,i){let r=TS(i);switch(t){case cd:return n*e;case lu:return n*e/r.components*r.byteLength;case cu:return n*e/r.components*r.byteLength;case as:return n*e*2/r.components*r.byteLength;case uu:return n*e*2/r.components*r.byteLength;case ud:return n*e*3/r.components*r.byteLength;case Sn:return n*e*4/r.components*r.byteLength;case hu:return n*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case du:case mu:return Math.max(n,16)*Math.max(e,8)/4;case fu:case pu:return Math.max(n,8)*Math.max(e,8)/2;case gu:case xu:case _u:case vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yu:case ll:case bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Au:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Du:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fu:case Uu:case Bu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ku:case zu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cl:case Hu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TS(n){switch(n){case Dn:case sd:return{byteLength:1,components:1};case Go:case od:case ii:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case Ui:case su:case qn:return{byteLength:4,components:1};case ad:case ld:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function fx(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function RS(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<h.length;d++){let x=h[f],y=h[d];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,x=h.length;d<x;d++){let y=h[d];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var CS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PS=`#ifdef USE_ALPHAHASH
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
#endif`,IS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OS=`#ifdef USE_AOMAP
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
#endif`,FS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,US=`#ifdef USE_BATCHING
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
#endif`,BS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VS=`#ifdef USE_IRIDESCENCE
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
#endif`,GS=`#ifdef USE_BUMPMAP
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
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,KS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,JS=`#define PI 3.141592653589793
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
} // validated`,QS=`vec3 transformedNormal = objectNormal;
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
#endif`,ew=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rw="gl_FragColor = linearToOutputTexel( gl_FragColor );",sw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ow=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
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
#endif`,cw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uw=`#ifdef USE_ENVMAP
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
#endif`,hw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mw=`#ifdef USE_GRADIENTMAP
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
}`,gw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_w=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vw=`#ifdef USE_ENVMAP
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
#endif`,bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ww=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ew=`PhysicalMaterial material;
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
#endif`,Tw=`uniform sampler2D dfgLUT;
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
}`,Aw=`
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
#endif`,Rw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pw=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Iw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bw=`#if defined( USE_POINTS_UV )
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
#endif`,kw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vw=`#if defined( USE_MORPHCOLORS )
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
#endif`,Gw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ww=`#ifdef USE_MORPHTARGETS
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
#endif`,Xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$w=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jw=`#ifdef USE_NORMALMAP
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
#endif`,Jw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dE=`float getShadowMask() {
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
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
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
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
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
#endif`,SE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CE=`uniform sampler2D t2D;
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform float backgroundBlurriness;
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`#include <common>
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
}`,OE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#define DISTANCE
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
}`,UE=`#define DISTANCE
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
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
}`,HE=`uniform vec3 diffuse;
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
}`,VE=`#include <common>
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
}`,GE=`uniform vec3 diffuse;
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
}`,WE=`#define LAMBERT
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
}`,XE=`#define LAMBERT
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
}`,qE=`#define MATCAP
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
}`,$E=`#define MATCAP
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
}`,YE=`#define NORMAL
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
}`,ZE=`#define NORMAL
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
}`,KE=`#define PHONG
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
}`,jE=`#define PHONG
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
}`,JE=`#define STANDARD
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
}`,QE=`#define STANDARD
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
}`,e1=`#define TOON
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
}`,t1=`#define TOON
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
}`,n1=`uniform float size;
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
}`,i1=`uniform vec3 diffuse;
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
}`,r1=`#include <common>
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
}`,s1=`uniform vec3 color;
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
}`,o1=`uniform float rotation;
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
}`,a1=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:CS,alphahash_pars_fragment:PS,alphamap_fragment:IS,alphamap_pars_fragment:LS,alphatest_fragment:DS,alphatest_pars_fragment:NS,aomap_fragment:OS,aomap_pars_fragment:FS,batching_pars_vertex:US,batching_vertex:BS,begin_vertex:kS,beginnormal_vertex:zS,bsdfs:HS,iridescence_fragment:VS,bumpmap_pars_fragment:GS,clipping_planes_fragment:WS,clipping_planes_pars_fragment:XS,clipping_planes_pars_vertex:qS,clipping_planes_vertex:$S,color_fragment:YS,color_pars_fragment:ZS,color_pars_vertex:KS,color_vertex:jS,common:JS,defaultnormal_vertex:QS,displacementmap_pars_vertex:ew,displacementmap_vertex:tw,emissivemap_fragment:nw,emissivemap_pars_fragment:iw,colorspace_fragment:rw,colorspace_pars_fragment:sw,envmap_fragment:ow,envmap_common_pars_fragment:aw,envmap_pars_fragment:lw,envmap_pars_vertex:cw,envmap_physical_pars_fragment:vw,envmap_vertex:uw,fog_vertex:hw,fog_pars_vertex:fw,fog_fragment:dw,fog_pars_fragment:pw,gradientmap_pars_fragment:mw,lightmap_pars_fragment:gw,lights_lambert_fragment:xw,lights_lambert_pars_fragment:yw,lights_pars_begin:_w,lights_toon_fragment:bw,lights_toon_pars_fragment:Mw,lights_phong_fragment:Sw,lights_phong_pars_fragment:ww,lights_physical_fragment:Ew,lights_physical_pars_fragment:Tw,lights_fragment_begin:Aw,lights_fragment_maps:Rw,lights_fragment_end:Cw,lightprobes_pars_fragment:Pw,logdepthbuf_fragment:Iw,logdepthbuf_pars_fragment:Lw,logdepthbuf_pars_vertex:Dw,logdepthbuf_vertex:Nw,map_fragment:Ow,map_pars_fragment:Fw,map_particle_fragment:Uw,map_particle_pars_fragment:Bw,metalnessmap_fragment:kw,metalnessmap_pars_fragment:zw,morphinstance_vertex:Hw,morphcolor_vertex:Vw,morphnormal_vertex:Gw,morphtarget_pars_vertex:Ww,morphtarget_vertex:Xw,normal_fragment_begin:qw,normal_fragment_maps:$w,normal_pars_fragment:Yw,normal_pars_vertex:Zw,normal_vertex:Kw,normalmap_pars_fragment:jw,clearcoat_normal_fragment_begin:Jw,clearcoat_normal_fragment_maps:Qw,clearcoat_pars_fragment:eE,iridescence_pars_fragment:tE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:oE,dithering_pars_fragment:aE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:hE,shadowmap_vertex:fE,shadowmask_pars_fragment:dE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:xE,specularmap_fragment:yE,specularmap_pars_fragment:_E,tonemapping_fragment:vE,tonemapping_pars_fragment:bE,transmission_fragment:ME,transmission_pars_fragment:SE,uv_pars_fragment:wE,uv_pars_vertex:EE,uv_vertex:TE,worldpos_vertex:AE,background_vert:RE,background_frag:CE,backgroundCube_vert:PE,backgroundCube_frag:IE,cube_vert:LE,cube_frag:DE,depth_vert:NE,depth_frag:OE,distance_vert:FE,distance_frag:UE,equirect_vert:BE,equirect_frag:kE,linedashed_vert:zE,linedashed_frag:HE,meshbasic_vert:VE,meshbasic_frag:GE,meshlambert_vert:WE,meshlambert_frag:XE,meshmatcap_vert:qE,meshmatcap_frag:$E,meshnormal_vert:YE,meshnormal_frag:ZE,meshphong_vert:KE,meshphong_frag:jE,meshphysical_vert:JE,meshphysical_frag:QE,meshtoon_vert:e1,meshtoon_frag:t1,points_vert:n1,points_frag:i1,shadow_vert:r1,shadow_frag:s1,sprite_vert:o1,sprite_frag:a1},Ve={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},$n={basic:{uniforms:Nn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Nn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Nn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Nn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Nn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Nn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Nn([Ve.points,Ve.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Nn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Nn([Ve.common,Ve.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Nn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Nn([Ve.sprite,Ve.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Nn([Ve.common,Ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Nn([Ve.lights,Ve.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};$n.physical={uniforms:Nn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Gu={r:0,b:0,g:0},l1=new rt,dx=new lt;dx.set(-1,0,0,0,1,0,0,0,1);function c1(n,e,t,i,r,s){let o=new $e(0),a=r===!0?0:1,c,l,u=null,h=0,f=null;function d(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let M=v.backgroundBlurriness>0;T=e.get(T,M)}return T}function x(v){let T=!1,M=d(v);M===null?g(o,a):M&&M.isColor&&(g(M,1),T=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,T){let M=d(T);M&&M.isCubeTexture?(l===void 0&&(l=new ft(new Ki(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Fs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(l1.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dx),l.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ot,(u!==M||h!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ft(new ti(2,2),new _n({name:"BackgroundMaterial",uniforms:Fs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,T){v.getRGB(Gu,bd(n)),t.buffers.color.setClear(Gu.r,Gu.g,Gu.b,T,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:x,addToRenderList:y,dispose:m}}function u1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(Y,re,Q,B,K){let z=!1,ie=h(Y,B,Q,re);s!==ie&&(s=ie,l(s.object)),z=d(Y,B,Q,K),z&&x(Y,B,Q,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(Y,re,Q,B),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return n.createVertexArray()}function l(Y){return n.bindVertexArray(Y)}function u(Y){return n.deleteVertexArray(Y)}function h(Y,re,Q,B){let K=B.wireframe===!0,z=i[re.id];z===void 0&&(z={},i[re.id]=z);let ie=Y.isInstancedMesh===!0?Y.id:0,ge=z[ie];ge===void 0&&(ge={},z[ie]=ge);let ae=ge[Q.id];ae===void 0&&(ae={},ge[Q.id]=ae);let ne=ae[K];return ne===void 0&&(ne=f(c()),ae[K]=ne),ne}function f(Y){let re=[],Q=[],B=[];for(let K=0;K<t;K++)re[K]=0,Q[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:Q,attributeDivisors:B,object:Y,attributes:{},index:null}}function d(Y,re,Q,B){let K=s.attributes,z=re.attributes,ie=0,ge=Q.getAttributes();for(let ae in ge)if(ge[ae].location>=0){let fe=K[ae],we=z[ae];if(we===void 0&&(ae==="instanceMatrix"&&Y.instanceMatrix&&(we=Y.instanceMatrix),ae==="instanceColor"&&Y.instanceColor&&(we=Y.instanceColor)),fe===void 0||fe.attribute!==we||we&&fe.data!==we.data)return!0;ie++}return s.attributesNum!==ie||s.index!==B}function x(Y,re,Q,B){let K={},z=re.attributes,ie=0,ge=Q.getAttributes();for(let ae in ge)if(ge[ae].location>=0){let fe=z[ae];fe===void 0&&(ae==="instanceMatrix"&&Y.instanceMatrix&&(fe=Y.instanceMatrix),ae==="instanceColor"&&Y.instanceColor&&(fe=Y.instanceColor));let we={};we.attribute=fe,fe&&fe.data&&(we.data=fe.data),K[ae]=we,ie++}s.attributes=K,s.attributesNum=ie,s.index=B}function y(){let Y=s.newAttributes;for(let re=0,Q=Y.length;re<Q;re++)Y[re]=0}function g(Y){m(Y,0)}function m(Y,re){let Q=s.newAttributes,B=s.enabledAttributes,K=s.attributeDivisors;Q[Y]=1,B[Y]===0&&(n.enableVertexAttribArray(Y),B[Y]=1),K[Y]!==re&&(n.vertexAttribDivisor(Y,re),K[Y]=re)}function v(){let Y=s.newAttributes,re=s.enabledAttributes;for(let Q=0,B=re.length;Q<B;Q++)re[Q]!==Y[Q]&&(n.disableVertexAttribArray(Q),re[Q]=0)}function T(Y,re,Q,B,K,z,ie){ie===!0?n.vertexAttribIPointer(Y,re,Q,K,z):n.vertexAttribPointer(Y,re,Q,B,K,z)}function M(Y,re,Q,B){y();let K=B.attributes,z=Q.getAttributes(),ie=re.defaultAttributeValues;for(let ge in z){let ae=z[ge];if(ae.location>=0){let ne=K[ge];if(ne===void 0&&(ge==="instanceMatrix"&&Y.instanceMatrix&&(ne=Y.instanceMatrix),ge==="instanceColor"&&Y.instanceColor&&(ne=Y.instanceColor)),ne!==void 0){let fe=ne.normalized,we=ne.itemSize,De=e.get(ne);if(De===void 0)continue;let le=De.buffer,Me=De.type,de=De.bytesPerElement,ee=Me===n.INT||Me===n.UNSIGNED_INT||ne.gpuType===su;if(ne.isInterleavedBufferAttribute){let ue=ne.data,Ce=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,Fe=ne.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let Ne=0;Ne<ae.locationSize;Ne++)m(ae.location+Ne,ue.meshPerAttribute);Y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ne=0;Ne<ae.locationSize;Ne++)g(ae.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Ne=0;Ne<ae.locationSize;Ne++)T(ae.location+Ne,we/ae.locationSize,Me,fe,Ce*de,(Fe+we/ae.locationSize*Ne)*de,ee)}else{if(ne.isInstancedBufferAttribute){for(let ue=0;ue<ae.locationSize;ue++)m(ae.location+ue,ne.meshPerAttribute);Y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<ae.locationSize;ue++)g(ae.location+ue);n.bindBuffer(n.ARRAY_BUFFER,le);for(let ue=0;ue<ae.locationSize;ue++)T(ae.location+ue,we/ae.locationSize,Me,fe,we*de,we/ae.locationSize*ue*de,ee)}}else if(ie!==void 0){let fe=ie[ge];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(ae.location,fe);break;case 3:n.vertexAttrib3fv(ae.location,fe);break;case 4:n.vertexAttrib4fv(ae.location,fe);break;default:n.vertexAttrib1fv(ae.location,fe)}}}}v()}function E(){U();for(let Y in i){let re=i[Y];for(let Q in re){let B=re[Q];for(let K in B){let z=B[K];for(let ie in z)u(z[ie].object),delete z[ie];delete B[K]}}delete i[Y]}}function R(Y){if(i[Y.id]===void 0)return;let re=i[Y.id];for(let Q in re){let B=re[Q];for(let K in B){let z=B[K];for(let ie in z)u(z[ie].object),delete z[ie];delete B[K]}}delete i[Y.id]}function _(Y){for(let re in i){let Q=i[re];for(let B in Q){let K=Q[B];if(K[Y.id]===void 0)continue;let z=K[Y.id];for(let ie in z)u(z[ie].object),delete z[ie];delete K[Y.id]}}}function A(Y){for(let re in i){let Q=i[re],B=Y.isInstancedMesh===!0?Y.id:0,K=Q[B];if(K!==void 0){for(let z in K){let ie=K[z];for(let ge in ie)u(ie[ge].object),delete ie[ge];delete K[z]}delete Q[B],Object.keys(Q).length===0&&delete i[re]}}}function U(){k(),o=!0,s!==r&&(s=r,l(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:k,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfObject:A,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function h1(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function f1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(_){return!(_!==Sn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let A=_===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Dn&&_!==qn&&!A&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(nt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:M,maxSamples:E,samples:R}}function d1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new xn,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let x=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!r||x===null||x.length===0||s&&!g)s?u(null):l();else{let v=s?0:i,T=v*4,M=m.clippingState||null;c.value=M,M=u(x,f,T,d);for(let E=0;E!==T;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,x){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=c.value,x!==!0||g===null){let m=d+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,M=d;T!==y;++T,M+=4)o.copy(h[T]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var ml=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ba(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ki(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:bi});s.uniforms.tEquirect.value=t;let o=new ft(r,s),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=Zt),new Bo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},X0=256,p1=3,m1=20,px=256,mx=16,g1=3,x1=new N,y1=new $e,qo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bo(1,10,null),this._boxMesh=new ft(new Ki(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=x1}=s,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,x=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(y1));let g=new Bo(i,r,u);return g.position.copy(a),g.update(c,e),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=x,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(X0,yd(e))}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ho?this._setSize(e.image.length===0?X0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=q0(e,!1,!1),i=Math.log2(e)-p1;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=q0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ds||e.mapping===Ho?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_1(),this._integrationMaterial=v1());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/mx);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-g1)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(px*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=b1());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function q0(n,e,t){return new ml(n,{minFilter:Si,generateMipmaps:e,type:ii,colorSpace:Wn,depthBuffer:t})}function gl(n,e,t){return new _n({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:Mn,blending:bi,depthTest:!1,depthWrite:!1})}function _1(){return gl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${px}u

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
	`)}function v1(){return gl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mx}},`

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
	`)}function b1(){return gl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${m1}
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
	`)}function $0(){return gl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Y0(){return gl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function M1(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===nu||d===iu)if(e.has(f)){let x=e.get(f).texture;return a(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let y=new ml(x.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,x=d===nu||d===iu,y=d===Ds||d===Ho;if(x||y){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new qo(n)),g=x?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return x&&v&&v.height>0||y&&v&&c(v)?(i===null&&(i=new qo(n)),g=x?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===nu?f.mapping=Ds:d===iu&&(f.mapping=Ho),f}function c(f){let d=0,x=6;for(let y=0;y<x;y++)f[y]!==void 0&&d++;return d===x}function l(f){let d=f.target;d.removeEventListener("dispose",l);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function S1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ws("WebGLRenderer: "+i+" extension not supported."),r}}}function w1(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(x=>delete r[x]);function a(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(let g in x.attributes)e.remove(x.attributes[g]);x.removeEventListener("dispose",a),delete r[x.id],o.unregister(x);let y=s.get(x);y&&(e.remove(y),s.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(x,y){return r[y.id]!==void 0||(y.addEventListener("dispose",a),r[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function u(x){let y=x.attributes;for(let g in y)e.update(y[g],n.ARRAY_BUFFER)}function h(x){let y=x.index,g=x.attributes.position,m=0;if(g===void 0)return;let v=y!==null?y.array.length:g.array.length/3-1,T=g.count>=65535?Ia:Pa,M=new T(Math.ceil(v/3)*6,1),E=M.array;if(y!==null){let _=y.array;m=y.version;for(let A=0,U=0;A<v;A+=3){let k=_[A+0],Y=_[A+1],re=_[A+2];E[U++]=k,E[U++]=Y,E[U++]=Y,E[U++]=re,E[U++]=re,E[U++]=k}}else{m=g.version;for(let _=0,A=0;_<v;_+=3){let U=_+0,k=_+1,Y=_+2;E[A++]=U,E[A++]=k,E[A++]=k,E[A++]=Y,E[A++]=Y,E[A++]=U}}M.version=m;let R=s.get(x);R&&e.remove(R),s.set(x,M)}function f(x){let y=s.get(x);if(y){let g=x.index;g!==null&&y.version<g.version&&h(x)}else h(x);return s.get(x)}function d(){for(let x in r){let y=r[x].deref();y!==void 0&&c(y)}}return{get:l,update:u,getWireframeAttribute:f,dispose:d}}function E1(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,s,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let y=0;for(let g=0;g<d;g++)y+=f[g];t.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function T1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:at("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function A1(n,e,t){let i=new WeakMap,r=new wt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let U=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;d===!0&&(T=1),x===!0&&(T=2),y===!0&&(T=3);let M=a.attributes.position.count*T,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let R=new Float32Array(M*E*4*h),_=new Ca(R,M,E,h);_.type=qn,_.needsUpdate=!0;let A=T*4;for(let k=0;k<h;k++){let Y=g[k],re=m[k],Q=v[k],B=M*E*4*k;for(let K=0;K<Y.count;K++){let z=K*A;d===!0&&(r.fromBufferAttribute(Y,K),R[B+z+0]=r.x,R[B+z+1]=r.y,R[B+z+2]=r.z,R[B+z+3]=0),x===!0&&(r.fromBufferAttribute(re,K),R[B+z+4]=r.x,R[B+z+5]=r.y,R[B+z+6]=r.z,R[B+z+7]=0),y===!0&&(r.fromBufferAttribute(Q,K),R[B+z+8]=r.x,R[B+z+9]=r.y,R[B+z+10]=r.z,R[B+z+11]=Q.itemSize===4?r.w:1)}}f={count:h,texture:_,size:new Xe(M,E)},i.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function R1(n,e,t,i,r){let s=new WeakMap;function o(l){let u=r.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var C1={[Jf]:"LINEAR_TONE_MAPPING",[Qf]:"REINHARD_TONE_MAPPING",[ed]:"CINEON_TONE_MAPPING",[Ls]:"ACES_FILMIC_TONE_MAPPING",[nd]:"AGX_TONE_MAPPING",[id]:"NEUTRAL_TONE_MAPPING",[td]:"CUSTOM_TONE_MAPPING"};function P1(n,e,t,i,r,s){let o=new an(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,u=new kt;u.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let h=new Gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ft(u,h),d=new Oi(-1,1,1,-1,0,1),x=null,y=null,g=!1,m,v=null,T=[],M=!1;this.setSize=function(E,R){o.setSize(E,R),a!==null&&a.setSize(E,R),c!==null&&c.setSize(E,R);for(let _=0;_<T.length;_++){let A=T[_];A.setSize&&A.setSize(E,R)}},this.setEffects=function(E){T=E,M=T.length>0&&T[0].isRenderPass===!0;let R=o.width,_=o.height;T.length>0&&a===null&&(a=new an(R,_,{type:ii,depthBuffer:!1,stencilBuffer:!1}),c=new an(R,_,{type:ii,depthBuffer:!1,stencilBuffer:!1}));let A=r===!0&&T.some(U=>U.needsDepthTexture===!0);A!==(o.depthTexture!==null)&&(A===!0&&l===null&&(l=new Pr(R,_),s===!0&&(l.format=Fr,l.type=Os)),o.dispose(),o.depthTexture=A?l:null,o.resolveDepthBuffer=A,o.storeMultisampledDepthBuffer=A);for(let U=0;U<T.length;U++){let k=T[U];k.setSize&&k.setSize(R,_),A&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(l)}},this.begin=function(E,R){if(g||E.toneMapping===Mi&&T.length===0)return!1;if(v=R,R!==null){let _=R.width,A=R.height;(o.width!==_||o.height!==A)&&this.setSize(_,A)}return M===!1&&E.setRenderTarget(o),m=E.toneMapping,E.toneMapping=Mi,!0},this.hasRenderPass=function(){return M},this.end=function(E,R){E.toneMapping=m,g=!0;let _=o,A=a;for(let U=0;U<T.length;U++){let k=T[U];k.enabled!==!1&&(k.render(E,A,_,R),k.needsSwap!==!1&&(_=A,A=A===a?c:a))}if(x!==E.outputColorSpace||y!==E.toneMapping){x=E.outputColorSpace,y=E.toneMapping,h.defines={},yt.getTransfer(x)===Ot&&(h.defines.SRGB_TRANSFER="");let U=C1[y];U&&(h.defines[U]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(v),E.render(f,d),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var gx=new hn,xx=new Pr(1,1),yx=new ka(1),_x=new Ca,vx=new kc,bx=new Ba,Z0=[],K0=[],j0=new Float32Array(16),J0=new Float32Array(9),Q0=new Float32Array(4);function $o(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Z0[r];if(s===void 0&&(s=new Float32Array(r),Z0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qu(n,e){let t=K0[e];t===void 0&&(t=new Int32Array(e),K0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function I1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function D1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function N1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function O1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;Q0.set(i),n.uniformMatrix2fv(this.addr,!1,Q0),pn(t,i)}}function F1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;J0.set(i),n.uniformMatrix3fv(this.addr,!1,J0),pn(t,i)}}function U1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;j0.set(i),n.uniformMatrix4fv(this.addr,!1,j0),pn(t,i)}}function B1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function H1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function V1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function G1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function W1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function X1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function $u(n){return n.version===0&&(n.compareFunction=pd,n.needsUpdate=!0),n}function q1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=$u(xx):s=gx,t.setTexture2D(e||s,r)}function $1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vx,r)}function Y1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=$u(yx):s=bx,t.setTextureCube(e||s,r)}function Z1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_x,r)}function K1(n){switch(n){case 5126:return I1;case 35664:return L1;case 35665:return D1;case 35666:return N1;case 35674:return O1;case 35675:return F1;case 35676:return U1;case 5124:case 35670:return B1;case 35667:case 35671:return k1;case 35668:case 35672:return z1;case 35669:case 35673:return H1;case 5125:return V1;case 36294:return G1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return Z1}}function j1(n,e){n.uniform1fv(this.addr,e)}function J1(n,e){let t=$o(e,this.size,2);n.uniform2fv(this.addr,t)}function Q1(n,e){let t=$o(e,this.size,3);n.uniform3fv(this.addr,t)}function eT(n,e){let t=$o(e,this.size,4);n.uniform4fv(this.addr,t)}function tT(n,e){let t=$o(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nT(n,e){let t=$o(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iT(n,e){let t=$o(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rT(n,e){n.uniform1iv(this.addr,e)}function sT(n,e){n.uniform2iv(this.addr,e)}function oT(n,e){n.uniform3iv(this.addr,e)}function aT(n,e){n.uniform4iv(this.addr,e)}function lT(n,e){n.uniform1uiv(this.addr,e)}function cT(n,e){n.uniform2uiv(this.addr,e)}function uT(n,e){n.uniform3uiv(this.addr,e)}function hT(n,e){n.uniform4uiv(this.addr,e)}function fT(n,e,t){let i=this.cache,r=e.length,s=qu(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=$u(xx):o=gx;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function dT(n,e,t){let i=this.cache,r=e.length,s=qu(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vx,s[o])}function pT(n,e,t){let i=this.cache,r=e.length,s=qu(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=$u(yx):o=bx;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function mT(n,e,t){let i=this.cache,r=e.length,s=qu(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_x,s[o])}function gT(n){switch(n){case 5126:return j1;case 35664:return J1;case 35665:return Q1;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}var Ad=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=K1(t.type)}},Rd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gT(t.type)}},Cd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Ed=/(\w+)(\])?(\[|\.)?/g;function ex(n,e){n.seq.push(e),n.map[e.id]=e}function xT(n,e,t){let i=n.name,r=i.length;for(Ed.lastIndex=0;;){let s=Ed.exec(i),o=Ed.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ex(t,l===void 0?new Ad(a,n,e):new Rd(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Cd(a),ex(t,h)),t=h}}}var Xo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);xT(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function tx(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var yT=37297,_T=0;function vT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var nx=new lt;function bT(n){yt._getMatrix(nx,yt.workingColorSpace,n);let e=`mat3( ${nx.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case Aa:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ix(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+vT(n.getShaderSource(e),a)}else return s}function MT(n,e){let t=bT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ST={[Jf]:"Linear",[Qf]:"Reinhard",[ed]:"Cineon",[Ls]:"ACESFilmic",[nd]:"AgX",[id]:"Neutral",[td]:"Custom"};function wT(n,e){let t=ST[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wu=new N;function ET(){yt.getLuminanceCoefficients(Wu);let n=Wu.x.toFixed(4),e=Wu.y.toFixed(4),t=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function AT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function RT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function pl(n){return n!==""}function rx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function sx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var CT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(n){return n.replace(CT,PT)}function PT(n,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Pd(t)}var IT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ox(n){return n.replace(IT,LT)}function LT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ax(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var DT={[Is]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function NT(n){return DT[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var OT={[Ho]:"ENVMAP_MODE_REFRACTION"};function FT(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":OT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var UT={[tu]:"ENVMAP_BLENDING_MULTIPLY",[E0]:"ENVMAP_BLENDING_MIX",[T0]:"ENVMAP_BLENDING_ADD"};function BT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":UT[n.combine]||"ENVMAP_BLENDING_NONE"}function kT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=NT(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=FT(t),h=BT(t),f=TT(t),d=AT(s),x=r.createProgram(),y,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(pl).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(pl).join(`
`),g.length>0&&(g+=`
`)):(y=[ax(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),g=[ax(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Mi?wT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,MT("linearToOutputTexel",t.outputColorSpace),ET(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pl).join(`
`)),o=Pd(o),o=rx(o,t),o=sx(o,t),a=Pd(a),a=rx(a,t),a=sx(a,t),o=ox(o),a=ox(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+y+o,T=m+g+a,M=tx(r,r.VERTEX_SHADER,v),E=tx(r,r.FRAGMENT_SHADER,T);r.attachShader(x,M),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(k){if(n.debug.checkShaderErrors){let Y=r.getProgramInfoLog(x)||"",re=r.getShaderInfoLog(M)||"",Q=r.getShaderInfoLog(E)||"",B=Y.trim(),K=re.trim(),z=Q.trim(),ie=!0,ge=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,M,E);else{let ae=ix(r,M,"vertex"),ne=ix(r,E,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+B+`
`+ae+`
`+ne)}else B!==""?nt("WebGLProgram: Program Info Log:",B):(K===""||z==="")&&(ge=!1);ge&&(k.diagnostics={runnable:ie,programLog:B,vertexShader:{log:K,prefix:y},fragmentShader:{log:z,prefix:g}})}r.deleteShader(M),r.deleteShader(E),_=new Xo(r,x),A=RT(r,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(x,yT)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_T++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}var zT=0,Id=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ld(e),t.set(e,i)),i}},Ld=class{constructor(e){this.id=zT++,this.code=e,this.usedTimes=0}};function HT(n){return n===as||n===ll||n===cl}function VT(n,e,t,i,r,s){let o=new Po,a=new Id,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,A,U,k,Y,re){let Q=k.fog,B=Y.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?k.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||K,z),ge=f[_.type],ae=i.precision;_.precision!==null&&(ae=i.getMaxPrecision(_.precision),ae!==_.precision&&nt("WebGLProgram.getParameters:",_.precision,"not supported, using",ae,"instead."));let ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=ne!==void 0?ne.length:0,we=0;B.morphAttributes.position!==void 0&&(we=1),B.morphAttributes.normal!==void 0&&(we=2),B.morphAttributes.color!==void 0&&(we=3);let De,le,Me,de;if(ge){let Oe=$n[ge];De=Oe.vertexShader,le=Oe.fragmentShader}else{De=_.vertexShader,le=_.fragmentShader;let Oe=a.getVertexShaderStage(_),dt=a.getFragmentShaderStage(_);a.update(_,Oe,dt),Me=Oe.id,de=dt.id}let ee=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),Ce=Y.isInstancedMesh===!0,Fe=Y.isBatchedMesh===!0,Ne=!!_.map,Ue=!!_.matcap,qe=!!ie,Be=qe&&ie.isPMREMTexture===!0,ut=!!_.aoMap,it=!!_.lightMap,st=!!_.bumpMap&&_.wireframe===!1,Ye=!!_.normalMap,mt=!!_.displacementMap,Se=!!_.emissiveMap,Ke=!!_.metalnessMap,Qe=!!_.roughnessMap,Ee=_.anisotropy>0,L=_.clearcoat>0,me=_.diffuseRoughness>0,pe=_.dispersion>0,Te=_.retroreflectivity>0,he=_.iridescence>0,p=_.sheen>0,F=_.transmission>0,J=Ee&&!!_.anisotropyMap,C=L&&!!_.clearcoatMap,w=L&&!!_.clearcoatNormalMap,S=L&&!!_.clearcoatRoughnessMap,V=me&&!!_.diffuseRoughnessMap,H=he&&!!_.iridescenceMap,j=he&&!!_.iridescenceThicknessMap,te=p&&!!_.sheenColorMap,Z=p&&!!_.sheenRoughnessMap,W=!!_.specularMap,O=!!_.specularColorMap,P=!!_.specularIntensityMap,q=F&&!!_.transmissionMap,G=F&&!!_.thicknessMap,ce=!!_.gradientMap,ve=!!_.alphaMap,Re=_.alphaTest>0,Pe=!!_.alphaHash,ke=!!_.extensions,oe=Mi;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(oe=n.toneMapping);let Ie=Be?ie.isCompressedCubeTexture?ie.image[0].mipmaps:ie.mipmaps:null,je={shaderID:ge,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:le,defines:_.defines,customVertexShaderID:Me,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:ae,batching:Fe,batchingColor:Fe&&Y._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&Y.instanceColor!==null,instancingMorph:Ce&&Y.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ne,matcap:Ue,envMap:qe,envMapMode:qe&&ie.mapping,envMapPMREM:Be,envMapMaxLod:Be?Ie.length-1:null,envMapSize:Be?Ie[0].width:null,aoMap:ut,lightMap:it,bumpMap:st,normalMap:Ye,displacementMap:mt,emissiveMap:Se,normalMapObjectSpace:Ye&&_.normalMapType===P0,normalMapTangentSpace:Ye&&_.normalMapType===hl,packedNormalMap:Ye&&_.normalMapType===hl&&HT(_.normalMap.format),metalnessMap:Ke,roughnessMap:Qe,anisotropy:Ee,anisotropyMap:J,clearcoat:L,clearcoatMap:C,clearcoatNormalMap:w,clearcoatRoughnessMap:S,diffuseRoughness:me,diffuseRoughnessMap:V,dispersion:pe,retroreflection:Te,iridescence:he,iridescenceMap:H,iridescenceThicknessMap:j,sheen:p,sheenColorMap:te,sheenRoughnessMap:Z,specularMap:W,specularColorMap:O,specularIntensityMap:P,transmission:F,transmissionMap:q,thicknessMap:G,gradientMap:ce,opaque:_.transparent===!1&&_.blending===er&&_.alphaToCoverage===!1,alphaMap:ve,alphaTest:Re,alphaHash:Pe,combine:_.combine,mapUv:Ne&&d(_.map.channel),aoMapUv:ut&&d(_.aoMap.channel),lightMapUv:it&&d(_.lightMap.channel),bumpMapUv:st&&d(_.bumpMap.channel),normalMapUv:Ye&&d(_.normalMap.channel),displacementMapUv:mt&&d(_.displacementMap.channel),emissiveMapUv:Se&&d(_.emissiveMap.channel),metalnessMapUv:Ke&&d(_.metalnessMap.channel),roughnessMapUv:Qe&&d(_.roughnessMap.channel),anisotropyMapUv:J&&d(_.anisotropyMap.channel),clearcoatMapUv:C&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:S&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:V&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:H&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:te&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(_.sheenRoughnessMap.channel),specularMapUv:W&&d(_.specularMap.channel),specularColorMapUv:O&&d(_.specularColorMap.channel),specularIntensityMapUv:P&&d(_.specularIntensityMap.channel),transmissionMapUv:q&&d(_.transmissionMap.channel),thicknessMapUv:G&&d(_.thicknessMap.channel),alphaMapUv:ve&&d(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ye||Ee),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!B.attributes.uv&&(Ne||ve),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:we,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:re.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ne&&_.map.isVideoTexture===!0&&yt.getTransfer(_.map.colorSpace)===Ot,decodeVideoTextureEmissive:Se&&_.emissiveMap.isVideoTexture===!0&&yt.getTransfer(_.emissiveMap.colorSpace)===Ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ft,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ke&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&_.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function y(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)A.push(U),A.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(g(A,_),m(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function g(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapPMREM),_.push(A.envMapMaxLod),_.push(A.envMapSize),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.diffuseRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.numLightProbeGrids),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function m(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.diffuseRoughness&&o.enable(25),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let A=f[_.type],U;if(A){let k=$n[A];U=fl.clone(k.uniforms)}else U=_.uniforms;return U}function T(_,A){let U=u.get(A);return U!==void 0?++U.usedTimes:(U=new kT(n,A,_,r),l.push(U),u.set(A,U)),U}function M(_){if(--_.usedTimes===0){let A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:v,acquireProgram:T,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:R}}function GT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function WT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function lx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,x,y,g,m){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:x,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:m},n[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=x,v.materialVariant=o(f),v.groupOrder=y,v.renderOrder=f.renderOrder,v.z=g,v.group=m),e++,v}function c(f,d,x,y,g,m,v){v.reversedDepth===!0&&(g=-g);let T=a(f,d,x,y,g,m);x.transmission>0?i.push(T):x.transparent===!0?r.push(T):t.push(T)}function l(f,d,x,y,g,m){let v=a(f,d,x,y,g,m);x.transmission>0?i.unshift(v):x.transparent===!0?r.unshift(v):t.unshift(v)}function u(f,d){t.length>1&&t.sort(f||WT),i.length>1&&i.sort(d||lx),r.length>1&&r.sort(d||lx)}function h(){for(let f=e,d=n.length;f<d;f++){let x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function XT(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new cx,n.set(i,[o])):r>=s.length?(o=new cx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new $e};break;case"SpotLight":t={position:new N,direction:new N,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function $T(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var YT=0;function ZT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KT(n){let e=new qT,t=$T(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);let r=new N,s=new rt,o=new rt;function a(l){let u=0,h=0,f=0;for(let re=0;re<9;re++)i.probe[re].set(0,0,0);let d=0,x=0,y=0,g=0,m=0,v=0,T=0,M=0,E=0,R=0,_=0,A=0,U=0,k=0;l.sort(ZT);for(let re=0,Q=l.length;re<Q;re++){let B=l[re],K=B.color,z=B.intensity,ie=B.distance,ge=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===as?ge=B.shadow.map.texture:ge=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=K.r*z,h+=K.g*z,f+=K.b*z;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(B.sh.coefficients[ae],z);k++}else if(B.isSunLight){let ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ne=B.shadow,fe=t.get(B);fe.shadowIntensity=ne.intensity,fe.shadowBias=ne.bias,fe.shadowNormalBias=ne.normalBias,fe.shadowRadius=ne.radius,fe.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[x]=fe,i.sunShadowMap[x]=ge;let we=ne.getViewportCount();for(let De=0;De<we;De++)i.sunShadowMatrix[y+De]=ne.getMatrix(De),i.sunShadowCascade[y+De]=ne._cascadeData[De];y+=we,x++}i.sun[d]=ae,d++}else if(B.isDirectionalLight){let ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ne=B.shadow,fe=t.get(B);fe.shadowIntensity=ne.intensity,fe.shadowBias=ne.bias,fe.shadowNormalBias=ne.normalBias,fe.shadowRadius=ne.radius,fe.shadowMapSize=ne.mapSize,i.directionalShadow[g]=fe,i.directionalShadowMap[g]=ge,i.directionalShadowMatrix[g]=B.shadow.matrix,E++}i.directional[g]=ae,g++}else if(B.isSpotLight){let ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(K).multiplyScalar(z),ae.distance=ie,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,i.spot[v]=ae;let ne=B.shadow;if(B.map&&(i.spotLightMap[A]=B.map,A++,ne.updateMatrices(B),B.castShadow&&U++),i.spotLightMatrix[v]=ne.matrix,B.castShadow){let fe=t.get(B);fe.shadowIntensity=ne.intensity,fe.shadowBias=ne.bias,fe.shadowNormalBias=ne.normalBias,fe.shadowRadius=ne.radius,fe.shadowMapSize=ne.mapSize,i.spotShadow[v]=fe,i.spotShadowMap[v]=ge,_++}v++}else if(B.isRectAreaLight){let ae=e.get(B);ae.color.copy(K).multiplyScalar(z),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),i.rectArea[T]=ae,T++}else if(B.isPointLight){let ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){let ne=B.shadow,fe=t.get(B);fe.shadowIntensity=ne.intensity,fe.shadowBias=ne.bias,fe.shadowNormalBias=ne.normalBias,fe.shadowRadius=ne.radius,fe.shadowMapSize=ne.mapSize,fe.shadowCameraNear=ne.camera.near,fe.shadowCameraFar=ne.camera.far,i.pointShadow[m]=fe,i.pointShadowMap[m]=ge,i.pointShadowMatrix[m]=B.shadow.matrix,R++}i.point[m]=ae,m++}else if(B.isHemisphereLight){let ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(z),ae.groundColor.copy(B.groundColor).multiplyScalar(z),i.hemi[M]=ae,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ve.LTC_FLOAT_1,i.rectAreaLTC2=Ve.LTC_FLOAT_2):(i.rectAreaLTC1=Ve.LTC_HALF_1,i.rectAreaLTC2=Ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let Y=i.hash;(Y.sunLength!==d||Y.directionalLength!==g||Y.pointLength!==m||Y.spotLength!==v||Y.rectAreaLength!==T||Y.hemiLength!==M||Y.numSunShadows!==x||Y.numDirectionalShadows!==E||Y.numPointShadows!==R||Y.numSpotShadows!==_||Y.numSpotMaps!==A||Y.numLightProbes!==k)&&(i.sun.length=d,i.directional.length=g,i.spot.length=v,i.rectArea.length=T,i.point.length=m,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+A-U,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=k,Y.sunLength=d,Y.directionalLength=g,Y.pointLength=m,Y.spotLength=v,Y.rectAreaLength=T,Y.hemiLength=M,Y.numSunShadows=x,Y.numDirectionalShadows=E,Y.numPointShadows=R,Y.numSpotShadows=_,Y.numSpotMaps=A,Y.numLightProbes=k,i.version=YT++)}function c(l,u){let h=0,f=0,d=0,x=0,y=0,g=0,m=u.matrixWorldInverse;for(let v=0,T=l.length;v<T;v++){let M=l[v];if(M.isSunLight){let E=i.sun[h];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),h++}else if(M.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isSpotLight){let E=i.spot[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),x++}else if(M.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:i}}function ux(n){let e=new KT(n),t=[],i=[],r=[];function s(h){u.camera=h,t.length=0,i.length=0,r.length=0}function o(h){h.isLightProbeGrid?r.push(h):t.push(h)}function a(h){i.push(h)}function c(){e.setup(t),r.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function l(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function jT(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new ux(n),e.set(r,[a])):s>=o.length?(a=new ux(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var JT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QT=`uniform sampler2D shadow_pass;
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
}`,eA=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],tA=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],hx=new rt,dl=new N,Td=new N;function nA(n,e,t){let i=new Qr,r=new Xe,s=new Xe,o=new wt,a=new Wc,c=new Xc,l={},u=t.maxTextureSize,h={[fi]:Mn,[Mn]:fi,[Ft]:Ft},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:JT,fragmentShader:QT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new kt;x.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ft(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let m=this.type;this.render=function(R,_,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===u0&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let U=n.getRenderTarget(),k=n.getActiveCubeFace(),Y=n.getActiveMipmapLevel(),re=n.state;re.setBlending(bi),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);let Q=m!==this.type;Q&&_.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(K=>K.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,K=R.length;B<K;B++){let z=R[B],ie=z.shadow;if(ie===void 0){nt("WebGLShadowMap:",z,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);let ge=ie.getFrameExtents();r.multiply(ge),s.copy(ie.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,ie.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,ie.mapSize.y=s.y));let ae=n.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=ae,ie.map===null||Q===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===ko){if(z.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new an(r.x,r.y,{format:as,type:ii,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),ie.map.texture.name=z.name+".shadowMap",ie.map.depthTexture=new Pr(r.x,r.y,qn),ie.map.depthTexture.name=z.name+".shadowMapDepth",ie.map.depthTexture.format=Tr,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Yt,ie.map.depthTexture.magFilter=Yt}else z.isPointLight?(ie.map=new ml(r.x),ie.map.depthTexture=new ka(r.x,Ui)):(ie.map=new an(r.x,r.y),ie.map.depthTexture=new Pr(r.x,r.y,Ui)),ie.map.depthTexture.name=z.name+".shadowMap",ie.map.depthTexture.format=Tr,this.type===Is?(ie.map.depthTexture.compareFunction=ae?dd:fd,ie.map.depthTexture.minFilter=Zt,ie.map.depthTexture.magFilter=Zt):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Yt,ie.map.depthTexture.magFilter=Yt);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==r.x||ie.map.height!==r.y)&&ie.map.setSize(r.x,r.y);let ne=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();z.isPointLight!==!0&&ie.updateMatrices(z,A);let fe=(ie.camera.layers.mask&4294967294)!==0?ie.camera.layers:A.layers;for(let we=0;we<ne;we++){let De=ie.getCamera(we);if(z.isPointLight){let le=ie.camera,Me=ie.matrix,de=z.distance||le.far;de!==le.far&&(le.far=de,le.updateProjectionMatrix()),dl.setFromMatrixPosition(z.matrixWorld),le.position.copy(dl),Td.copy(le.position),Td.add(eA[we]),le.up.copy(tA[we]),le.lookAt(Td),le.updateMatrixWorld(),Me.makeTranslation(-dl.x,-dl.y,-dl.z),hx.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(hx,le.coordinateSystem,le.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)n.setRenderTarget(ie.map,we),n.clear();else{we===0&&(n.setRenderTarget(ie.map),n.clear());let le=ie.getViewport(we);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),re.viewport(o)}i=ie.getFrustum(we),M(_,A,De,z,fe,this.type)}ie.isPointLightShadow!==!0&&this.type===ko&&v(ie,A),ie.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(U,k,Y)};function v(R,_){let A=e.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new an(r.x,r.y,{format:as,type:ii}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(_,null,A,f,y,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(_,null,A,d,y,null)}function T(R,_,A,U){let k=null,Y=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(Y!==void 0)k=Y;else if(k=A.isPointLight===!0?c:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let re=k.uuid,Q=_.uuid,B=l[re];B===void 0&&(B={},l[re]=B);let K=B[Q];K===void 0&&(K=k.clone(),B[Q]=K,_.addEventListener("dispose",E)),k=K}if(k.visible=_.visible,k.wireframe=_.wireframe,U===ko?k.side=_.shadowSide!==null?_.shadowSide:_.side:k.side=_.shadowSide!==null?_.shadowSide:h[_.side],k.alphaMap=_.alphaMap,k.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,k.map=_.map,k.clipShadows=_.clipShadows,k.clippingPlanes=_.clippingPlanes,k.clipIntersection=_.clipIntersection,k.displacementMap=_.displacementMap,k.displacementScale=_.displacementScale,k.displacementBias=_.displacementBias,k.wireframeLinewidth=_.wireframeLinewidth,k.linewidth=_.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let re=n.properties.get(k);re.light=A}return k}function M(R,_,A,U,k,Y){if(R.visible===!1)return;if(R.layers.test(k)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&Y===ko)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);let B=e.update(R),K=R.material;if(Array.isArray(K)){let z=B.groups;for(let ie=0,ge=z.length;ie<ge;ie++){let ae=z[ie],ne=K[ae.materialIndex];if(ne&&ne.visible){let fe=T(R,ne,U,Y);R.onBeforeShadow(n,R,_,A,B,fe,ae),n.renderBufferDirect(A,null,B,fe,R,ae),R.onAfterShadow(n,R,_,A,B,fe,ae)}}}else if(K.visible){let z=T(R,K,U,Y);R.onBeforeShadow(n,R,_,A,B,z,null),n.renderBufferDirect(A,null,B,z,R,null),R.onAfterShadow(n,R,_,A,B,z,null)}}let Q=R.children;for(let B=0,K=Q.length;B<K;B++)M(Q[B],_,A,U,k,Y)}function E(R){R.target.removeEventListener("dispose",E);for(let A in l){let U=l[A],k=R.target.uuid;k in U&&(U[k].dispose(),delete U[k])}}}function iA(n,e){function t(){let P=!1,q=new wt,G=null,ce=new wt(0,0,0,0);return{setMask:function(ve){G!==ve&&!P&&(n.colorMask(ve,ve,ve,ve),G=ve)},setLocked:function(ve){P=ve},setClear:function(ve,Re,Pe,ke,oe){oe===!0&&(ve*=ke,Re*=ke,Pe*=ke),q.set(ve,Re,Pe,ke),ce.equals(q)===!1&&(n.clearColor(ve,Re,Pe,ke),ce.copy(q))},reset:function(){P=!1,G=null,ce.set(-1,0,0,0)}}}function i(){let P=!1,q=!1,G=null,ce=null,ve=null;return{setReversed:function(Re){if(q!==Re){let Pe=e.get("EXT_clip_control");Re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),q=Re;let ke=ve;ve=null,this.setClear(ke)}},getReversed:function(){return q},setTest:function(Re){Re?ue(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Re){G!==Re&&!P&&(n.depthMask(Re),G=Re)},setFunc:function(Re){if(q&&(Re=z0[Re]),ce!==Re){switch(Re){case Pc:n.depthFunc(n.NEVER);break;case Ic:n.depthFunc(n.ALWAYS);break;case Lc:n.depthFunc(n.LESS);break;case wo:n.depthFunc(n.LEQUAL);break;case Dc:n.depthFunc(n.EQUAL);break;case Nc:n.depthFunc(n.GEQUAL);break;case Oc:n.depthFunc(n.GREATER);break;case Fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Re}},setLocked:function(Re){P=Re},setClear:function(Re){ve!==Re&&(ve=Re,q&&(Re=1-Re),n.clearDepth(Re))},reset:function(){P=!1,G=null,ce=null,ve=null,q=!1}}}function r(){let P=!1,q=null,G=null,ce=null,ve=null,Re=null,Pe=null,ke=null,oe=null;return{setTest:function(Ie){P||(Ie?ue(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Ie){q!==Ie&&!P&&(n.stencilMask(Ie),q=Ie)},setFunc:function(Ie,je,Oe){(G!==Ie||ce!==je||ve!==Oe)&&(n.stencilFunc(Ie,je,Oe),G=Ie,ce=je,ve=Oe)},setOp:function(Ie,je,Oe){(Re!==Ie||Pe!==je||ke!==Oe)&&(n.stencilOp(Ie,je,Oe),Re=Ie,Pe=je,ke=Oe)},setLocked:function(Ie){P=Ie},setClear:function(Ie){oe!==Ie&&(n.clearStencil(Ie),oe=Ie)},reset:function(){P=!1,q=null,G=null,ce=null,ve=null,Re=null,Pe=null,ke=null,oe=null}}}let s=new t,o=new i,a=new r,c={},l=new WeakMap,u={},h={},f={},d=new WeakMap,x=[],y=null,g=!1,m=null,v=null,T=null,M=null,E=null,R=null,_=null,A=new $e(0,0,0),U=0,k=!1,Y=null,re=null,Q=null,B=null,K=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,ge=0,ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ie=ge>=1):ae.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ie=ge>=2);let ne=null,fe={},we=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),le=new wt().fromArray(we),Me=new wt().fromArray(De);function de(P,q,G,ce){let ve=new Uint8Array(4),Re=n.createTexture();n.bindTexture(P,Re),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<G;Pe++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(q,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(q+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Re}let ee={};ee[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(wo),st(!1),Ye(Yf),ue(n.CULL_FACE),ut(bi);function ue(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function Ce(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Fe(P,q){return f[P]!==q?(n.bindFramebuffer(P,q),f[P]=q,P===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=q),P===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=q),!0):!1}function Ne(P,q){let G=x,ce=!1;if(P){G=d.get(q),G===void 0&&(G=[],d.set(q,G));let ve=P.textures;if(G.length!==ve.length||G[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Pe=ve.length;Re<Pe;Re++)G[Re]=n.COLOR_ATTACHMENT0+Re;G.length=ve.length,ce=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,ce=!0);ce&&n.drawBuffers(G)}function Ue(P){return y!==P?(n.useProgram(P),y=P,!0):!1}let qe={[Fi]:n.FUNC_ADD,[h0]:n.FUNC_SUBTRACT,[f0]:n.FUNC_REVERSE_SUBTRACT};qe[d0]=n.MIN,qe[p0]=n.MAX;let Be={[tl]:n.ZERO,[os]:n.ONE,[m0]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[v0]:n.SRC_ALPHA_SATURATE,[y0]:n.DST_COLOR,[x0]:n.DST_ALPHA,[g0]:n.ONE_MINUS_SRC_COLOR,[zo]:n.ONE_MINUS_SRC_ALPHA,[_0]:n.ONE_MINUS_DST_COLOR,[il]:n.ONE_MINUS_DST_ALPHA,[b0]:n.CONSTANT_COLOR,[M0]:n.ONE_MINUS_CONSTANT_COLOR,[S0]:n.CONSTANT_ALPHA,[w0]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(P,q,G,ce,ve,Re,Pe,ke,oe,Ie){if(P===bi){g===!0&&(Ce(n.BLEND),g=!1);return}if(g===!1&&(ue(n.BLEND),g=!0),P!==eu){if(P!==m||Ie!==k){if((v!==Fi||E!==Fi)&&(n.blendEquation(n.FUNC_ADD),v=Fi,E=Fi),Ie)switch(P){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zf:n.blendFunc(n.ONE,n.ONE);break;case Kf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",P);break}else switch(P){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kf:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jf:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",P);break}T=null,M=null,R=null,_=null,A.set(0,0,0),U=0,m=P,k=Ie}return}ve=ve||q,Re=Re||G,Pe=Pe||ce,(q!==v||ve!==E)&&(n.blendEquationSeparate(qe[q],qe[ve]),v=q,E=ve),(G!==T||ce!==M||Re!==R||Pe!==_)&&(n.blendFuncSeparate(Be[G],Be[ce],Be[Re],Be[Pe]),T=G,M=ce,R=Re,_=Pe),(ke.equals(A)===!1||oe!==U)&&(n.blendColor(ke.r,ke.g,ke.b,oe),A.copy(ke),U=oe),m=P,k=!1}function it(P,q){P.side===Ft?Ce(n.CULL_FACE):ue(n.CULL_FACE);let G=P.side===Mn;q&&(G=!G),st(G),P.blending===er&&P.transparent===!1?ut(bi):ut(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);let ce=P.stencilWrite;a.setTest(ce),ce&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Se(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(P){Y!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),Y=P)}function Ye(P){P!==l0?(ue(n.CULL_FACE),P!==re&&(P===Yf?n.cullFace(n.BACK):P===c0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),re=P}function mt(P){P!==Q&&(ie&&n.lineWidth(P),Q=P)}function Se(P,q,G){P?(ue(n.POLYGON_OFFSET_FILL),(B!==q||K!==G)&&(B=q,K=G,o.getReversed()&&(q=-q,G=-G),n.polygonOffset(q,G))):Ce(n.POLYGON_OFFSET_FILL)}function Ke(P){P?ue(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Qe(P){P===void 0&&(P=n.TEXTURE0+z-1),ne!==P&&(n.activeTexture(P),ne=P)}function Ee(P,q,G){G===void 0&&(ne===null?G=n.TEXTURE0+z-1:G=ne);let ce=fe[G];ce===void 0&&(ce={type:void 0,texture:void 0},fe[G]=ce),(ce.type!==P||ce.texture!==q)&&(ne!==G&&(n.activeTexture(G),ne=G),n.bindTexture(P,q||ee[P]),ce.type=P,ce.texture=q)}function L(){let P=fe[ne];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function pe(){try{n.compressedTexImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function Te(){try{n.texSubImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function he(){try{n.texSubImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function p(){try{n.compressedTexSubImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function F(){try{n.compressedTexSubImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function J(){try{n.texStorage2D(...arguments)}catch(P){at("WebGLState:",P)}}function C(){try{n.texStorage3D(...arguments)}catch(P){at("WebGLState:",P)}}function w(){try{n.texImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function S(){try{n.texImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function V(P){return h[P]!==void 0?h[P]:n.getParameter(P)}function H(P,q){h[P]!==q&&(n.pixelStorei(P,q),h[P]=q)}function j(P){le.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),le.copy(P))}function te(P){Me.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Me.copy(P))}function Z(P,q){let G=l.get(q);G===void 0&&(G=new WeakMap,l.set(q,G));let ce=G.get(P);ce===void 0&&(ce=n.getUniformBlockIndex(q,P.name),n.uniformBlockBinding(q,ce,ce),G.set(P,ce))}function W(P,q,G){let ve=l.get(q).get(P);c[ve]!==G&&(n.bindBufferBase(n.UNIFORM_BUFFER,ve,G),c[ve]=G)}function O(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ne=null,fe={},f={},c={},d=new WeakMap,x=[],y=null,g=!1,m=null,v=null,T=null,M=null,E=null,R=null,_=null,A=new $e(0,0,0),U=0,k=!1,Y=null,re=null,Q=null,B=null,K=null,le.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Ce,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:Ue,setBlending:ut,setMaterial:it,setFlipSided:st,setCullFace:Ye,setLineWidth:mt,setPolygonOffset:Se,setScissorTest:Ke,activeTexture:Qe,bindTexture:Ee,unbindTexture:L,compressedTexImage2D:me,compressedTexImage3D:pe,texImage2D:w,texImage3D:S,pixelStorei:H,getParameter:V,updateUBOMapping:Z,uniformBlockBinding:W,texStorage2D:J,texStorage3D:C,texSubImage2D:Te,texSubImage3D:he,compressedTexSubImage2D:p,compressedTexSubImage3D:F,scissor:j,viewport:te,reset:O}}function rA(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap,h=new Set,f,d=new WeakMap,x=new Set,y=new FinalizationRegistry(C=>x.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,w){return g?new OffscreenCanvas(C,w):Ao("canvas")}function v(C,w,S){let V=1,H=J(C);if((H.width>S||H.height>S)&&(V=S/Math.max(H.width,H.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let j=Math.floor(V*H.width),te=Math.floor(V*H.height);f===void 0&&(f=m(j,te));let Z=w?m(j,te):f;return Z.width=j,Z.height=te,Z.getContext("2d").drawImage(C,0,0,j,te),nt("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+j+"x"+te+")."),Z}else return"data"in C&&nt("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),C;return C}function T(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(C,w,S,V,H,j=!1){if(C!==null){if(n[C]!==void 0)return n[C];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te;V&&(te=e.get("EXT_texture_norm16"),te||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=w;if(w===n.RED&&(S===n.FLOAT&&(Z=n.R32F),S===n.HALF_FLOAT&&(Z=n.R16F),S===n.UNSIGNED_BYTE&&(Z=n.R8),S===n.UNSIGNED_SHORT&&te&&(Z=te.R16_EXT),S===n.SHORT&&te&&(Z=te.R16_SNORM_EXT)),w===n.RED_INTEGER&&(S===n.UNSIGNED_BYTE&&(Z=n.R8UI),S===n.UNSIGNED_SHORT&&(Z=n.R16UI),S===n.UNSIGNED_INT&&(Z=n.R32UI),S===n.BYTE&&(Z=n.R8I),S===n.SHORT&&(Z=n.R16I),S===n.INT&&(Z=n.R32I)),w===n.RG&&(S===n.FLOAT&&(Z=n.RG32F),S===n.HALF_FLOAT&&(Z=n.RG16F),S===n.UNSIGNED_BYTE&&(Z=n.RG8),S===n.UNSIGNED_SHORT&&te&&(Z=te.RG16_EXT),S===n.SHORT&&te&&(Z=te.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(S===n.UNSIGNED_BYTE&&(Z=n.RG8UI),S===n.UNSIGNED_SHORT&&(Z=n.RG16UI),S===n.UNSIGNED_INT&&(Z=n.RG32UI),S===n.BYTE&&(Z=n.RG8I),S===n.SHORT&&(Z=n.RG16I),S===n.INT&&(Z=n.RG32I)),w===n.RGB_INTEGER&&(S===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),S===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),S===n.UNSIGNED_INT&&(Z=n.RGB32UI),S===n.BYTE&&(Z=n.RGB8I),S===n.SHORT&&(Z=n.RGB16I),S===n.INT&&(Z=n.RGB32I)),w===n.RGBA_INTEGER&&(S===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),S===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),S===n.UNSIGNED_INT&&(Z=n.RGBA32UI),S===n.BYTE&&(Z=n.RGBA8I),S===n.SHORT&&(Z=n.RGBA16I),S===n.INT&&(Z=n.RGBA32I)),w===n.RGB&&(S===n.UNSIGNED_SHORT&&te&&(Z=te.RGB16_EXT),S===n.SHORT&&te&&(Z=te.RGB16_SNORM_EXT),S===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),S===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),w===n.RGBA){let W=j?Aa:yt.getTransfer(H);S===n.FLOAT&&(Z=n.RGBA32F),S===n.HALF_FLOAT&&(Z=n.RGBA16F),S===n.UNSIGNED_BYTE&&(Z=W===Ot?n.SRGB8_ALPHA8:n.RGBA8),S===n.UNSIGNED_SHORT&&te&&(Z=te.RGBA16_EXT),S===n.SHORT&&te&&(Z=te.RGBA16_SNORM_EXT),S===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),S===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(C,w){let S;return C?w===null||w===Ui||w===Os?S=n.DEPTH24_STENCIL8:w===qn?S=n.DEPTH32F_STENCIL8:w===Go&&(S=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ui||w===Os?S=n.DEPTH_COMPONENT24:w===qn?S=n.DEPTH_COMPONENT32F:w===Go&&(S=n.DEPTH_COMPONENT16),S}function A(C,w){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==Zt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function U(C){let w=new WeakRef(C);i.get(C).__ref=w,x.add(w),y.register(C,w,w)}function k(C){let w=i.get(C).__ref;w!==void 0&&(x.delete(w),y.unregister(w))}function Y(C){Q(C.target)}function re(C){B(C.target)}function Q(C){C.removeEventListener("dispose",Y),k(C),z(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function B(C){C.removeEventListener("dispose",re),k(C),ge(C)}function K(){for(let C of x){let w=C.deref();w!==void 0&&(w.isRenderTarget===!0?B(w):Q(w))}x.clear(),h.clear()}function z(C){let w=i.get(C);if(w.__webglInit===void 0)return;let S=C.source,V=d.get(S);if(V){let H=V[w.__cacheKey];H.usedTimes--,H.usedTimes===0&&ie(C),Object.keys(V).length===0&&d.delete(S)}i.remove(C)}function ie(C){let w=i.get(C);n.deleteTexture(w.__webglTexture);let S=C.source,V=d.get(S);delete V[w.__cacheKey],o.memory.textures--}function ge(C){let w=i.get(C);w.__depthDisposeCallback&&w.__depthDisposeCallback();let S=C.depthTexture;if(S&&S.renderTarget===C&&Q(S),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(w.__webglFramebuffer[H]))for(let j=0;j<w.__webglFramebuffer[H].length;j++)n.deleteFramebuffer(w.__webglFramebuffer[H][j]);else n.deleteFramebuffer(w.__webglFramebuffer[H]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[H])}else{if(Array.isArray(w.__webglFramebuffer))for(let H=0;H<w.__webglFramebuffer.length;H++)n.deleteFramebuffer(w.__webglFramebuffer[H]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let H=0;H<w.__webglColorRenderbuffer.length;H++)w.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[H]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let V=C.textures;for(let H=0,j=V.length;H<j;H++){let te=i.get(V[H]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(V[H])}i.remove(C)}let ae=0;function ne(){ae=0}function fe(){return ae}function we(C){ae=C}function De(){let C=ae;return C>=r.maxTextures&&nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),ae+=1,C}function le(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.mipmapsAutoUpdate),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function Me(C,w){let S=i.get(C);if(C.isVideoTexture&&p(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&S.__version!==C.version){let V=C.image;if(V===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(S,C,w);return}}else C.isExternalTexture&&(S.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,S.__webglTexture,n.TEXTURE0+w)}function de(C,w){let S=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&S.__version!==C.version){it(S,C,w);return}else C.isExternalTexture&&(S.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,S.__webglTexture,n.TEXTURE0+w)}function ee(C,w){let S=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&S.__version!==C.version){it(S,C,w);return}t.bindTexture(n.TEXTURE_3D,S.__webglTexture,n.TEXTURE0+w)}function ue(C,w){let S=i.get(C);if(C.version>0&&S.__version!==C.version){st(S,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+w)}let Ce={[ei]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},Fe={[Yt]:n.NEAREST,[ru]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},Ne={[L0]:n.NEVER,[pd]:n.ALWAYS,[D0]:n.LESS,[fd]:n.LEQUAL,[N0]:n.EQUAL,[dd]:n.GEQUAL,[O0]:n.GREATER,[F0]:n.NOTEQUAL};function Ue(C,w){if(w.type===qn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zt||w.magFilter===Vo||w.magFilter===Ns||w.magFilter===Si||w.minFilter===Zt||w.minFilter===Vo||w.minFilter===Ns||w.minFilter===Si)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ce[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ce[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ce[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Fe[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Fe[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==Ns&&w.minFilter!==Si||w.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let S=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function qe(C,w){let S=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",Y),U(w));let V=w.source,H=d.get(V);H===void 0&&(H={},d.set(V,H));let j=le(w);if(j!==C.__cacheKey){H[j]===void 0&&(H[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,S=!0),H[j].usedTimes++;let te=H[C.__cacheKey];te!==void 0&&(H[C.__cacheKey].usedTimes--,te.usedTimes===0&&ie(w)),C.__cacheKey=j,C.__webglTexture=H[j].texture}return S}function Be(C,w,S){return Math.floor(Math.floor(C/S)/w)}function ut(C,w,S,V){let j=C.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,S,V,w.data);else{j.sort((P,q)=>P.start-q.start);let te=0;for(let P=1;P<j.length;P++){let q=j[te],G=j[P],ce=q.start+q.count,ve=Be(G.start,w.width,4),Re=Be(q.start,w.width,4);G.start<=ce+1&&ve===Re&&Be(G.start+G.count-1,w.width,4)===ve?q.count=Math.max(q.count,G.start+G.count-q.start):(++te,j[te]=G)}j.length=te+1;let Z=t.getParameter(n.UNPACK_ROW_LENGTH),W=t.getParameter(n.UNPACK_SKIP_PIXELS),O=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let P=0,q=j.length;P<q;P++){let G=j[P],ce=Math.floor(G.start/4),ve=Math.ceil(G.count/4),Re=ce%w.width,Pe=Math.floor(ce/w.width),ke=ve,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(n.TEXTURE_2D,0,Re,Pe,ke,oe,S,V,w.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,W),t.pixelStorei(n.UNPACK_SKIP_ROWS,O)}}function it(C,w,S){let V=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(V=n.TEXTURE_3D);let H=qe(C,w),j=w.source;t.bindTexture(V,C.__webglTexture,n.TEXTURE0+S);let te=i.get(j);if(j.version!==te.__version||H===!0){if(t.activeTexture(n.TEXTURE0+S),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let oe=yt.getPrimaries(yt.workingColorSpace),Ie=w.colorSpace===di?null:yt.getPrimaries(w.colorSpace),je=w.colorSpace===di||oe===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let W=v(w.image,!1,r.maxTextureSize);W=F(w,W);let O=s.convert(w.format,w.colorSpace),P=s.convert(w.type),q=R(w.internalFormat,O,P,w.normalized,w.colorSpace,w.isVideoTexture);Ue(V,w);let G,ce=w.mipmaps,ve=w.isVideoTexture!==!0,Re=te.__version===void 0||H===!0,Pe=j.dataReady,ke=A(w,W);if(w.isDepthTexture)q=_(w.format===Fr,w.type),Re&&(ve?t.texStorage2D(n.TEXTURE_2D,1,q,W.width,W.height):t.texImage2D(n.TEXTURE_2D,0,q,W.width,W.height,0,O,P,null));else if(w.isDataTexture)if(ce.length>0){ve&&Re&&t.texStorage2D(n.TEXTURE_2D,ke,q,ce[0].width,ce[0].height);for(let oe=0,Ie=ce.length;oe<Ie;oe++)G=ce[oe],ve?Pe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,G.width,G.height,O,P,G.data):t.texImage2D(n.TEXTURE_2D,oe,q,G.width,G.height,0,O,P,G.data);w.generateMipmaps=!1}else ve?(Re&&t.texStorage2D(n.TEXTURE_2D,ke,q,W.width,W.height),Pe&&ut(w,W,O,P)):t.texImage2D(n.TEXTURE_2D,0,q,W.width,W.height,0,O,P,W.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ve&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,q,ce[0].width,ce[0].height,W.depth);for(let oe=0,Ie=ce.length;oe<Ie;oe++)if(G=ce[oe],w.format!==Sn)if(O!==null)if(ve){if(Pe)if(w.layerUpdates.size>0){let je=wd(G.width,G.height,w.format,w.type);for(let Oe of w.layerUpdates){let dt=G.data.subarray(Oe*je/G.data.BYTES_PER_ELEMENT,(Oe+1)*je/G.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Oe,G.width,G.height,1,O,dt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,G.width,G.height,W.depth,O,G.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,q,G.width,G.height,W.depth,0,G.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,G.width,G.height,W.depth,O,P,G.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,q,G.width,G.height,W.depth,0,O,P,G.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ve&&Re&&t.texStorage2D(n.TEXTURE_2D,ke,q,ce[0].width,ce[0].height);for(let oe=0,Ie=ce.length;oe<Ie;oe++)G=ce[oe],w.format!==Sn?O!==null?ve?Pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,G.width,G.height,O,G.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,q,G.width,G.height,0,G.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Pe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,G.width,G.height,O,P,G.data):t.texImage2D(n.TEXTURE_2D,oe,q,G.width,G.height,0,O,P,G.data)}else if(w.isDataArrayTexture)if(ve){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,q,W.width,W.height,W.depth),Pe)if(w.layerUpdates.size>0){let oe=wd(W.width,W.height,w.format,w.type);for(let Ie of w.layerUpdates){let je=W.data.subarray(Ie*oe/W.data.BYTES_PER_ELEMENT,(Ie+1)*oe/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,W.width,W.height,1,O,P,je)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,O,P,W.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,q,W.width,W.height,W.depth,0,O,P,W.data);else if(w.isData3DTexture)ve?(Re&&t.texStorage3D(n.TEXTURE_3D,ke,q,W.width,W.height,W.depth),Pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,O,P,W.data)):t.texImage3D(n.TEXTURE_3D,0,q,W.width,W.height,W.depth,0,O,P,W.data);else if(w.isFramebufferTexture){if(Re)if(ve)t.texStorage2D(n.TEXTURE_2D,ke,q,W.width,W.height);else{let oe=W.width,Ie=W.height;for(let je=0;je<ke;je++)t.texImage2D(n.TEXTURE_2D,je,q,oe,Ie,0,O,P,null),oe>>=1,Ie>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),W.parentNode!==oe){oe.appendChild(W),h.add(w),oe.onpaint=Ie=>{let je=Ie.changedElements;for(let Oe of h)je.includes(Oe.image)&&(Oe.needsUpdate=!0)},oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,W);else{let je=n.RGBA,Oe=n.RGBA,dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,Oe,dt,W)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ce.length>0){if(ve&&Re){let oe=J(ce[0]);t.texStorage2D(n.TEXTURE_2D,ke,q,oe.width,oe.height)}for(let oe=0,Ie=ce.length;oe<Ie;oe++)G=ce[oe],ve?Pe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,O,P,G):t.texImage2D(n.TEXTURE_2D,oe,q,O,P,G);w.generateMipmaps=!1}else if(ve){if(Re){let oe=J(W);t.texStorage2D(n.TEXTURE_2D,ke,q,oe.width,oe.height)}Pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,O,P,W)}else t.texImage2D(n.TEXTURE_2D,0,q,O,P,W);T(w)&&w.mipmapsAutoUpdate===!0&&M(V),te.__version=j.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function st(C,w,S){if(w.image.length!==6)return;let V=qe(C,w),H=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+S);let j=i.get(H);if(H.version!==j.__version||V===!0){t.activeTexture(n.TEXTURE0+S);let te=yt.getPrimaries(yt.workingColorSpace),Z=w.colorSpace===di?null:yt.getPrimaries(w.colorSpace),W=w.colorSpace===di||te===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let O=w.isCompressedTexture||w.image[0].isCompressedTexture,P=w.image[0]&&w.image[0].isDataTexture,q=[];for(let Oe=0;Oe<6;Oe++)!O&&!P?q[Oe]=v(w.image[Oe],!0,r.maxCubemapSize):q[Oe]=P?w.image[Oe].image:w.image[Oe],q[Oe]=F(w,q[Oe]);let G=q[0],ce=s.convert(w.format,w.colorSpace),ve=s.convert(w.type),Re=R(w.internalFormat,ce,ve,w.normalized,w.colorSpace),Pe=w.isVideoTexture!==!0,ke=j.__version===void 0||V===!0,oe=H.dataReady,Ie=A(w,G);Ue(n.TEXTURE_CUBE_MAP,w);let je;if(w.isDepthTexture){if(Re=_(w.format===Fr,w.type),ke)if(Pe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Re,G.width,G.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Re,G.width,G.height,0,ce,ve,null)}else if(O){Pe&&ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Re,G.width,G.height);for(let Oe=0;Oe<6;Oe++){je=q[Oe].mipmaps;for(let dt=0;dt<je.length;dt++){let Rt=je[dt];w.format!==Sn?ce!==null?Pe?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,dt,0,0,Rt.width,Rt.height,ce,Rt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,dt,Re,Rt.width,Rt.height,0,Rt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,dt,0,0,Rt.width,Rt.height,ce,ve,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,dt,Re,Rt.width,Rt.height,0,ce,ve,Rt.data)}}}else{if(je=w.mipmaps,Pe&&ke){je.length>0&&Ie++;let Oe=J(q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Re,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(P){Pe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,q[Oe].width,q[Oe].height,ce,ve,q[Oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Re,q[Oe].width,q[Oe].height,0,ce,ve,q[Oe].data);for(let dt=0;dt<je.length;dt++){let Xt=je[dt].image[Oe].image;Pe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,dt+1,0,0,Xt.width,Xt.height,ce,ve,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,dt+1,Re,Xt.width,Xt.height,0,ce,ve,Xt.data)}}else{Pe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,ce,ve,q[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Re,ce,ve,q[Oe]);for(let dt=0;dt<je.length;dt++){let Rt=je[dt];Pe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,dt+1,0,0,ce,ve,Rt.image[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,dt+1,Re,ce,ve,Rt.image[Oe])}}}T(w)&&w.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),j.__version=H.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Ye(C,w,S,V,H,j){let te=s.convert(S.format,S.colorSpace),Z=s.convert(S.type),W=R(S.internalFormat,te,Z,S.normalized,S.colorSpace),O=i.get(w),P=i.get(S);if(P.__renderTarget=w,!O.__hasExternalTextures){let q=Math.max(1,w.width>>j),G=Math.max(1,w.height>>j);H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?t.texImage3D(H,j,W,q,G,w.depth,0,te,Z,null):t.texImage2D(H,j,W,q,G,0,te,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),he(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,H,P.__webglTexture,0,Te(w)):(H===n.TEXTURE_2D||H>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,H,P.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(C,w,S){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){let V=w.depthTexture,H=V&&V.isDepthTexture?V.type:null,j=_(w.stencilBuffer,H),te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;he(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(w),j,w.width,w.height):S?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(w),j,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,j,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,C)}else{let V=w.textures;for(let H=0;H<V.length;H++){let j=V[H],te=s.convert(j.format,j.colorSpace),Z=s.convert(j.type),W=R(j.internalFormat,te,Z,j.normalized,j.colorSpace);he(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(w),W,w.width,w.height):S?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(w),W,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,W,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(C,w,S){let V=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=i.get(w.depthTexture);H.__renderTarget=w;let j=V?w.depthTexture.image[0]:w.depthTexture.image;(!H.__webglTexture||j.width!==w.width||j.height!==w.height)&&(j.width=w.width,j.height=w.height,w.depthTexture.needsUpdate=!0),V?ue(w.depthTexture,0):Me(w.depthTexture,0);let te=H.__webglTexture,Z=Te(w),W=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+S:n.TEXTURE_2D,O=w.depthTexture.format===Fr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Tr)he(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,W,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,O,W,te,0);else if(w.depthTexture.format===Fr)he(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,W,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,O,W,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(C){let w=i.get(C),S=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),V){let H=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,V.removeEventListener("dispose",H)};V.addEventListener("dispose",H),w.__depthDisposeCallback=H}w.__boundDepthTexture=V}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(S)for(let V=0;V<6;V++)Se(w.__webglFramebuffer[V],C,V);else C.texture.mipmaps.length>0?Se(w.__webglFramebuffer[0],C,0):Se(w.__webglFramebuffer,C,0);else if(S){w.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[V]),w.__webglDepthbuffer[V]===void 0)w.__webglDepthbuffer[V]=n.createRenderbuffer(),mt(w.__webglDepthbuffer[V],C,!1);else{let H=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,j)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),mt(w.__webglDepthbuffer,C,!1);else{let H=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(C,w,S){let V=i.get(C);w!==void 0&&Ye(V.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),S!==void 0&&Ke(C)}function Ee(C){let w=C.texture,S=i.get(C),V=i.get(w);C.addEventListener("dispose",re),U(C);let H=C.textures,j=C.isWebGLCubeRenderTarget===!0,te=H.length>1;if(te||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=w.version,o.memory.textures++),j){S.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(w.mipmaps.length>0){S.__webglFramebuffer[Z]=[];for(let W=0;W<w.mipmaps.length;W++)S.__webglFramebuffer[Z][W]=n.createFramebuffer()}else S.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(w.mipmaps.length>0){S.__webglFramebuffer=[];for(let Z=0;Z<w.mipmaps.length;Z++)S.__webglFramebuffer[Z]=n.createFramebuffer()}else S.__webglFramebuffer=n.createFramebuffer();if(te)for(let Z=0,W=H.length;Z<W;Z++){let O=i.get(H[Z]);O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&he(C)===!1){S.__webglMultisampledFramebuffer=n.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let Z=0;Z<H.length;Z++){let W=H[Z];S.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,S.__webglColorRenderbuffer[Z]);let O=s.convert(W.format,W.colorSpace),P=s.convert(W.type),q=R(W.internalFormat,O,P,W.normalized,W.colorSpace,C.isXRRenderTarget===!0),G=Te(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,G,q,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,S.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(S.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(S.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,w);for(let Z=0;Z<6;Z++)if(w.mipmaps.length>0)for(let W=0;W<w.mipmaps.length;W++)Ye(S.__webglFramebuffer[Z][W],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,W);else Ye(S.__webglFramebuffer[Z],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);T(w)?M(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(te){for(let Z=0,W=H.length;Z<W;Z++){let O=H[Z],P=i.get(O),q=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,P.__webglTexture),Ue(q,O),Ye(S.__webglFramebuffer,C,O,n.COLOR_ATTACHMENT0+Z,q,0),T(O)&&M(q)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,V.__webglTexture),Ue(Z,w),w.mipmaps.length>0)for(let W=0;W<w.mipmaps.length;W++)Ye(S.__webglFramebuffer[W],C,w,n.COLOR_ATTACHMENT0,Z,W);else Ye(S.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,Z,0);T(w)?M(Z):w.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Ke(C)}function L(C){let w=C.textures;for(let S=0,V=w.length;S<V;S++){let H=w[S];if(T(H)&&H.mipmapsAutoUpdate===!0){let j=E(C),te=i.get(H).__webglTexture;t.bindTexture(j,te),M(j),t.unbindTexture()}}}let me=[];function pe(C){if(C.samples>0){if(he(C)===!1){let w=C.textures,S=C.width,V=C.height,H=n.COLOR_BUFFER_BIT,j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(C),Z=w.length>1;if(Z)for(let O=0;O<w.length;O++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let O=0;O<w.length;O++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(H|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(H|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[O]);let P=i.get(w[O]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,S,V,0,0,S,V,H,n.NEAREST),c===!0&&(me.length=0,me.push(n.COLOR_ATTACHMENT0+O),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&me.push(j),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let O=0;O<w.length;O++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,te.__webglColorRenderbuffer[O]);let P=i.get(w[O]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Te(C){return Math.min(r.maxSamples,C.samples)}function he(C){let w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function p(C){let w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function F(C,w){let S=C.colorSpace,V=C.format,H=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||S!==Wn&&S!==di&&(yt.getTransfer(S)===Ot?(V!==Sn||H!==Dn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",S)),w}function J(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=De,this.resetTextureUnits=ne,this.getTextureUnits=fe,this.setTextureUnits=we,this.setTexture2D=Me,this.setTexture2DArray=de,this.setTexture3D=ee,this.setTextureCube=ue,this.rebindTextures=Qe,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=he,this.dispose=K}function sA(n,e){function t(i,r=di){let s,o=yt.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===au)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ld)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sd)return n.BYTE;if(i===od)return n.SHORT;if(i===Go)return n.UNSIGNED_SHORT;if(i===su)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===ud)return n.RGB;if(i===Sn)return n.RGBA;if(i===Tr)return n.DEPTH_COMPONENT;if(i===Fr)return n.DEPTH_STENCIL;if(i===lu)return n.RED;if(i===cu)return n.RED_INTEGER;if(i===as)return n.RG;if(i===uu)return n.RG_INTEGER;if(i===hu)return n.RGBA_INTEGER;if(i===rl||i===sl||i===ol||i===al)if(o===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fu||i===du||i===pu||i===mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gu||i===xu||i===yu||i===_u||i===vu||i===ll||i===bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gu||i===xu)return o===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_u)return s.COMPRESSED_R11_EAC;if(i===vu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ll)return s.COMPRESSED_RG11_EAC;if(i===bu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mu||i===Su||i===wu||i===Eu||i===Tu||i===Au||i===Ru||i===Cu||i===Pu||i===Iu||i===Lu||i===Du||i===Nu||i===Ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Su)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Au)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ru)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Iu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Du)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ou)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fu||i===Uu||i===Bu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fu)return o===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ku||i===zu||i===cl||i===Hu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ku)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aA=`
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

}`,Dd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _n({vertexShader:oA,fragmentShader:aA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nd=class extends Ni{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,x=null,y=typeof XRWebGLBinding<"u",g=new Dd,m={},v=t.getContextAttributes(),T=null,M=null,E=[],R=[],_=new Xe,A=null,U=null,k=new un;k.viewport=new wt;let Y=new un;Y.viewport=new wt;let re=[k,Y],Q=new Qc,B=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Me=E[le];return Me===void 0&&(Me=new Io,E[le]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(le){let Me=E[le];return Me===void 0&&(Me=new Io,E[le]=Me),Me.getGripSpace()},this.getHand=function(le){let Me=E[le];return Me===void 0&&(Me=new Io,E[le]=Me),Me.getHandSpace()};function z(le){let Me=R.indexOf(le.inputSource);if(Me===-1)return;let de=E[Me];de!==void 0&&(de.update(le.inputSource,le.frame,l||o),de.dispatchEvent({type:le.type,data:le.inputSource}))}function ie(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",ge);for(let le=0;le<E.length;le++){let Me=R[le];Me!==null&&(R[le]=null,E[le].disconnect(Me))}B=null,K=null,g.reset();for(let le in m)delete m[le];if(e.setRenderTarget(T),d=null,f=null,h=null,r=null,M=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(_.width,_.height,!1),U!==null){let le=U.camera;le.fov=U.fov,le.zoom=U.zoom,le.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(le){l=le},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",ge),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ee=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?Fr:Tr,ee=v.stencil?Os:Ui);let Ce={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new an(f.textureWidth,f.textureHeight,{format:Sn,type:Dn,depthTexture:new Pr(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new an(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ge(le){for(let Me=0;Me<le.removed.length;Me++){let de=le.removed[Me],ee=R.indexOf(de);ee>=0&&(R[ee]=null,E[ee].disconnect(de))}for(let Me=0;Me<le.added.length;Me++){let de=le.added[Me],ee=R.indexOf(de);if(ee===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=R.length){R.push(de),ee=Ce;break}else if(R[Ce]===null){R[Ce]=de,ee=Ce;break}if(ee===-1)break}let ue=E[ee];ue&&ue.connect(de)}}function ae(le,Me){Me===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Me.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;let Me=le.near,de=le.far;g.texture!==null&&(g.depthNear>0&&(Me=g.depthNear),g.depthFar>0&&(de=g.depthFar)),Q.near=Y.near=k.near=Me,Q.far=Y.far=k.far=de,(B!==Q.near||K!==Q.far)&&(r.updateRenderState({depthNear:Q.near,depthFar:Q.far}),B=Q.near,K=Q.far),Q.layers.mask=le.layers.mask|6,k.layers.mask=Q.layers.mask&-5,Y.layers.mask=Q.layers.mask&-3;let ee=le.parent,ue=Q.cameras;ae(Q,ee);for(let Ce=0;Ce<ue.length;Ce++)ae(ue[Ce],ee);Q.projectionMatrix.copy(k.projectionMatrix),Q.projectionMatrixInverse.copy(k.projectionMatrixInverse),U===null&&le.isPerspectiveCamera&&(U={camera:le,fov:le.fov,zoom:le.zoom}),ne(le,Q,ee)};function ne(le,Me,de){de===null?le.matrix.copy(Me.matrixWorld):(le.matrix.copy(de.matrixWorld),le.matrix.invert(),le.matrix.multiply(Me.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=As*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(le){c=le,f!==null&&(f.fixedFoveation=le),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=le)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Q)},this.getCameraTexture=function(le){return m[le]};let fe=null;function we(le,Me){if(u=Me.getViewerPose(l||o),x=Me,u!==null){let de=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ee=!1;de.length!==Q.cameras.length&&(Q.cameras.length=0,ee=!0);for(let Ne=0;Ne<de.length;Ne++){let Ue=de[Ne],qe=null;if(d!==null)qe=d.getViewport(Ue);else{let ut=h.getViewSubImage(f,Ue);qe=ut.viewport,Ne===0&&(e.setRenderTargetTextures(M,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(M))}let Be=re[Ne];Be===void 0&&(Be=new un,Be.layers.enable(Ne),Be.viewport=new wt,re[Ne]=Be),Be.matrix.fromArray(Ue.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ue.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(qe.x,qe.y,qe.width,qe.height),Ne===0&&(Q.matrix.copy(Be.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),ee===!0&&Q.cameras.push(Be)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let Ne=h.getDepthInformation(de[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,r.renderState)}if(ue&&ue.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Ne=0;Ne<de.length;Ne++){let Ue=de[Ne].camera;if(Ue){let qe=m[Ue];qe||(qe=new za,m[Ue]=qe);let Be=h.getCameraImage(Ue);qe.sourceTexture=Be}}}}for(let de=0;de<E.length;de++){let ee=R[de],ue=E[de];ee!==null&&ue!==void 0&&ue.update(ee,Me,l||o)}fe&&fe(le,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),x=null}let De=new fx;De.setAnimationLoop(we),this.setAnimationLoop=function(le){fe=le},this.dispose=function(){}}},lA=new rt,Mx=new lt;Mx.set(-1,0,0,0,1,0,0,0,1);function cA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,bd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),x(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),T=v.envMap,M=v.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Mx),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uA(n,e,t,i){let r={},s={};function o(v,T){let M=T.program;i.uniformBlockBinding(v,M,r[v.id])}function a(v,T){let M=r[v.id];M===void 0&&(x(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",g));let E=T.program;i.updateUBOMapping(v,E);let R=e.render.frame;s[v.id]!==R&&(l(v),s[v.id]=R)}function c(v){let T=n.createBuffer(),M=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function l(v){let T=r[v.id],M=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,_=M.length;R<_;R++){let A=M[R];if(Array.isArray(A))for(let U=0,k=A.length;U<k;U++)u(A[U],R,U,E);else u(A,R,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,T,M,E){if(f(v,T,M,E)===!0){let R=v.__offset,_=v.value;if(Array.isArray(_)){let A=0;for(let U=0;U<_.length;U++){let k=_[U],Y=y(k,!0);h(k,v.__data,A),A+=Y.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,v.__data)}}function h(v,T,M){typeof v=="number"||typeof v=="boolean"?T[M]=v:v.isMatrix3?(T[M]=v.elements[0],T[M+1]=v.elements[1],T[M+2]=v.elements[2],T[M+3]=0,T[M+4]=v.elements[3],T[M+5]=v.elements[4],T[M+6]=v.elements[5],T[M+7]=0,T[M+8]=v.elements[6],T[M+9]=v.elements[7],T[M+10]=v.elements[8],T[M+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-M),M):v.toArray(T,M)}function f(v,T,M,E){let R=v.value,_=T+"_"+M;if(Array.isArray(R)){E[_]===void 0&&(E[_]=[]);let A=E[_],U=!1;for(let k=0;k<R.length;k++)d(R[k],A,k)===!0&&(U=!0);return U}return d(R,E,_)}function d(v,T,M){if(T[M]===void 0)return typeof v=="number"||typeof v=="boolean"?T[M]=v:ArrayBuffer.isView(v)?T[M]=v.slice():T[M]=v.clone(),!0;{let E=T[M];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return T[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function x(v){let T=v.uniforms,M=0,E=16;for(let _=0,A=T.length;_<A;_++){let U=Array.isArray(T[_])?T[_]:[T[_]];for(let k=0,Y=U.length;k<Y;k++){let re=U[k],Q=Array.isArray(re.value)?re.value:[re.value],B=Array.isArray(T[_])||Array.isArray(re.value),K=M;for(let ie=0,ge=Q.length;ie<ge;ie++){let ae=Q[ie],ne=y(ae,B),fe=M%E,we=fe%ne.boundary,De=fe+we;M+=we,De!==0&&E-De<ne.storage&&(M+=E-De),ie===0&&(K=M),M+=ne.storage}let z=re.type==="int"?Int32Array:re.type==="uint"?Uint32Array:Float32Array;re.__data=new z((M-K)/Float32Array.BYTES_PER_ELEMENT),re.__offset=K}}let R=M%E;return R>0&&(M+=E-R),v.__size=M,v.__cache={},this}function y(v,T){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){let T=v.target;T.removeEventListener("dispose",g),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(let v in r)n.deleteBuffer(r[v]);r={},s={}}return{bind:o,update:a,dispose:m}}var hA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ir=null;function fA(){return ir===null&&(ir=new No(hA,16,16,as,ii),ir.name="DFG_LUT",ir.minFilter=Zt,ir.magFilter=Zt,ir.wrapS=_i,ir.wrapT=_i,ir.generateMipmaps=!1,ir.needsUpdate=!0),ir}var Xu=class{constructor(e={}){let{canvas:t=U0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Dn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;let y=d,g=new Set([hu,uu,cu]),m=new Set([Dn,Ui,Go,Os,ou,au]),v=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,R=null,_=[],A=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,Y=!1,re=null,Q=null,B=null,K=null;this._outputColorSpace=At;let z=0,ie=0,ge=null,ae=-1,ne=null,fe=new wt,we=new wt,De=null,le=new $e(0),Me=0,de=t.width,ee=t.height,ue=1,Ce=null,Fe=null,Ne=new wt(0,0,de,ee),Ue=new wt(0,0,de,ee),qe=!1,Be=new Qr,ut=new zc,it=!1,st=!1,Ye=new rt,mt=new N,Se=new wt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Ee(){return ge===null?ue:1}let L=i;function me(D,se){return t.getContext(D,se)}let pe,Te,he,p,F,J,C,w,S,V,H,j,te,Z,W,O,P,q,G,ce,ve,Re,Pe;try{let D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),L===null){let se="webgl2";if(L=me(se,D),L===null)throw me(se)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(D){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),at("WebGLRenderer: "+D.message),D}function ke(){pe=new S1(L),pe.init(),ve=new sA(L,pe),Te=new f1(L,pe,e,ve),he=new iA(L,pe),Te.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),Q=L.createFramebuffer(),B=L.createFramebuffer(),K=L.createFramebuffer(),p=new T1(L),F=new GT,J=new rA(L,pe,he,F,Te,ve,p),C=new M1(k),w=new RS(L),Re=new u1(L,w),S=new w1(L,w,p,Re),V=new R1(L,S,w,Re,p),q=new A1(L,Te,J),W=new d1(F),H=new VT(k,C,pe,Te,Re,W),j=new cA(k,F),te=new XT,Z=new jT(pe),P=new c1(k,C,he,V,x,c),O=new nA(k,V,Te),Pe=new uA(L,p,Te,he),G=new h1(L,pe,p),ce=new E1(L,pe,p),p.programs=H.programs,k.capabilities=Te,k.extensions=pe,k.properties=F,k.renderLists=te,k.shadowMap=O,k.state=he,k.info=p}y!==Dn&&(U=new P1(y,t.width,t.height,a,r,s));let oe=new Nd(k,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let D=pe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=pe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(D){D!==void 0&&(ue=D,this.setSize(de,ee,!1))},this.getSize=function(D){return D.set(de,ee)},this.setSize=function(D,se,be=!0){if(oe.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}de=D,ee=se,t.width=Math.floor(D*ue),t.height=Math.floor(se*ue),be===!0&&(t.style.width=D+"px",t.style.height=se+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,D,se)},this.getDrawingBufferSize=function(D){return D.set(de*ue,ee*ue).floor()},this.setDrawingBufferSize=function(D,se,be){de=D,ee=se,ue=be,t.width=Math.floor(D*be),t.height=Math.floor(se*be),this.setViewport(0,0,D,se)},this.setEffects=function(D){if(y===Dn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let se=0;se<D.length;se++)if(D[se].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(fe)},this.getViewport=function(D){return D.copy(Ne)},this.setViewport=function(D,se,be,xe){D.isVector4?Ne.set(D.x,D.y,D.z,D.w):Ne.set(D,se,be,xe),he.viewport(fe.copy(Ne).multiplyScalar(Ee()).round())},this.getScissor=function(D){return D.copy(Ue)},this.setScissor=function(D,se,be,xe){D.isVector4?Ue.set(D.x,D.y,D.z,D.w):Ue.set(D,se,be,xe),he.scissor(we.copy(Ue).multiplyScalar(Ee()).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(D){he.setScissorTest(qe=D)},this.setOpaqueSort=function(D){Ce=D},this.setTransparentSort=function(D){Fe=D},this.getClearColor=function(D){return D.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(D=!0,se=!0,be=!0){let xe=0;if(D){let ye=!1;if(ge!==null){let He=ge.texture.format;ye=g.has(He)}if(ye){let He=ge.texture.type,Je=m.has(He),ze=P.getClearColor(),We=P.getClearAlpha(),tt=ze.r,ct=ze.g,xt=ze.b;Je?(v[0]=tt,v[1]=ct,v[2]=xt,v[3]=We,L.clearBufferuiv(L.COLOR,0,v)):(T[0]=tt,T[1]=ct,T[2]=xt,T[3]=We,L.clearBufferiv(L.COLOR,0,T))}else xe|=L.COLOR_BUFFER_BIT}se&&(xe|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),be&&(xe|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),xe!==0&&L.clear(xe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),re=D},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),P.dispose(),te.dispose(),Z.dispose(),J.dispose(),F.dispose(),C.dispose(),V.dispose(),S.dispose(),Re.dispose(),Pe.dispose(),H.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Vr),oe.removeEventListener("sessionend",Ol),Hn.stop()};function Ie(D){D.preventDefault(),Ra("WebGLRenderer: Context Lost."),Y=!0}function je(){Ra("WebGLRenderer: Context Restored."),Y=!1;let D=p.autoReset,se=O.enabled,be=O.autoUpdate,xe=O.needsUpdate,ye=O.type;ke(),p.autoReset=D,O.enabled=se,O.autoUpdate=be,O.needsUpdate=xe,O.type=ye}function Oe(D){at("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function dt(D){let se=D.target;se.removeEventListener("dispose",dt),Rt(se)}function Rt(D){Xt(D),F.remove(D)}function Xt(D){let se=F.get(D).programs;se!==void 0&&(se.forEach(function(be){H.releaseProgram(be)}),D.isShaderMaterial&&H.releaseShaderCache(D))}this.renderBufferDirect=function(D,se,be,xe,ye,He){se===null&&(se=Ke);let Je=ye.isMesh&&ye.matrixWorld.determinantAffine()<0,ze=kh(D,se,be,xe,ye);he.setMaterial(xe,Je);let We=be.index,tt=1;if(xe.wireframe===!0){if(We=S.getWireframeAttribute(be),We===void 0)return;tt=2}let ct=be.drawRange,xt=be.attributes.position,Ze=ct.start*tt,pt=(ct.start+ct.count)*tt;He!==null&&(Ze=Math.max(Ze,He.start*tt),pt=Math.min(pt,(He.start+He.count)*tt)),We!==null?(Ze=Math.max(Ze,0),pt=Math.min(pt,We.count)):xt!=null&&(Ze=Math.max(Ze,0),pt=Math.min(pt,xt.count));let $t=pt-Ze;if($t<0||$t===1/0)return;Re.setup(ye,xe,ze,be,We);let Ht,Ct=G;if(We!==null&&(Ht=w.get(We),Ct=ce,Ct.setIndex(Ht)),ye.isMesh)xe.wireframe===!0?(he.setLineWidth(xe.wireframeLinewidth*Ee()),Ct.setMode(L.LINES)):Ct.setMode(L.TRIANGLES);else if(ye.isLine){let ln=xe.linewidth;ln===void 0&&(ln=1),he.setLineWidth(ln*Ee()),ye.isLineSegments?Ct.setMode(L.LINES):ye.isLineLoop?Ct.setMode(L.LINE_LOOP):Ct.setMode(L.LINE_STRIP)}else ye.isPoints?Ct.setMode(L.POINTS):ye.isSprite&&Ct.setMode(L.TRIANGLES);if(ye.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ye._multiDrawStarts,ye._multiDrawCounts,ye._multiDrawCount);else{let ln=ye._multiDrawStarts,et=ye._multiDrawCounts,vn=ye._multiDrawCount,Et=We?w.get(We).bytesPerElement:1,pr=F.get(xe).currentProgram.getUniforms();for(let cn=0;cn<vn;cn++)pr.setValue(L,"_gl_DrawID",cn),Ct.render(ln[cn]/Et,et[cn])}else if(ye.isInstancedMesh)Ct.renderInstances(Ze,$t,ye.count);else if(be.isInstancedBufferGeometry){let ln=be._maxInstanceCount!==void 0?be._maxInstanceCount:1/0,et=Math.min(be.instanceCount,ln);Ct.renderInstances(Ze,$t,et)}else Ct.render(Ze,$t)};function Zn(D,se,be,xe){re!==null&&D.isNodeMaterial&&re.setObject(xe,D),it===!0&&W.setState(D,be,!1),D.transparent===!0&&D.side===Ft&&D.forceSinglePass===!1?(D.side=Mn,D.needsUpdate=!0,Gr(D,se,xe),D.side=fi,D.needsUpdate=!0,Gr(D,se,xe),D.side=Ft):Gr(D,se,xe)}this.compile=function(D,se,be=null){be===null&&(be=D),re!==null&&re.renderStart(D,se,be),R=Z.get(be),R.init(se),A.push(R),be.traverseVisible(function(ye){ye.isLight&&ye.layers.test(se.layers)&&(R.pushLight(ye),ye.castShadow&&R.pushShadow(ye))}),D!==be&&D.traverseVisible(function(ye){ye.isLight&&ye.layers.test(se.layers)&&(R.pushLight(ye),ye.castShadow&&R.pushShadow(ye))}),R.setupLights(),re!==null&&re.updateLights(R.state.lightsArray),st=this.localClippingEnabled,it=W.init(this.clippingPlanes,st),it===!0&&W.setGlobalState(this.clippingPlanes,se),re!==null&&O.render(R.state.shadowsArray,be,se);let xe=new Set;return D.traverse(function(ye){if(!(ye.isMesh||ye.isPoints||ye.isLine||ye.isSprite))return;let He=ye.material;if(He)if(Array.isArray(He))for(let Je=0;Je<He.length;Je++){let ze=He[Je];Zn(ze,be,se,ye),xe.add(ze)}else Zn(He,be,se,ye),xe.add(He)}),R=A.pop(),re!==null&&re.renderEnd(),xe},this.compileAsync=function(D,se,be=null){let xe=this.compile(D,se,be);return new Promise(ye=>{function He(){if(xe.forEach(function(Je){let We=F.get(Je).currentProgram;(We===void 0||We.isReady())&&xe.delete(Je)}),xe.size===0){ye(D);return}setTimeout(He,10)}pe.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let oi=null;function Hr(D){oi&&oi(D)}function Vr(){Hn.stop()}function Ol(){Hn.start()}let Hn=new fx;Hn.setAnimationLoop(Hr),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(D){oi=D,oe.setAnimationLoop(D),D===null?Hn.stop():Hn.start()},oe.addEventListener("sessionstart",Vr),oe.addEventListener("sessionend",Ol),this.render=function(D,se){if(se!==void 0&&se.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;re!==null&&re.renderStart(D,se);let be=oe.enabled===!0&&oe.isPresenting===!0,xe=U!==null&&(ge===null||be)&&U.begin(k,ge);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(se),se=oe.getCamera()),D.isScene===!0&&D.onBeforeRender(k,D,se,ge),R=Z.get(D,A.length),R.init(se),R.state.textureUnits=J.getTextureUnits(),A.push(R),Ye.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),se.isArrayCamera?ut.setFromArrayCamera(se):Be.setFromProjectionMatrix(Ye,vi,se.reversedDepth),st=this.localClippingEnabled,it=W.init(this.clippingPlanes,st),E=te.get(D,_.length),E.init(),_.push(E),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Je=k.xr.getDepthSensingMesh();Je!==null&&qs(Je,se,-1/0,k.sortObjects)}qs(D,se,0,k.sortObjects),E.finish(),re!==null&&re.updateLights(R.state.lightsArray),k.sortObjects===!0&&E.sort(Ce,Fe),Qe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Qe&&P.addToRenderList(E,D),this.info.autoReset===!0&&this.info.reset(),it===!0&&W.beginShadows();let ye=R.state.shadowsArray;if(O.render(ye,D,se),it===!0&&W.endShadows(),(xe&&U.hasRenderPass())===!1){let Je=E.opaque,ze=E.transmissive;if(R.setupLights(),se.isArrayCamera){let We=se.cameras;if(ze.length>0)for(let tt=0,ct=We.length;tt<ct;tt++){let xt=We[tt];xi(Je,ze,D,xt)}Qe&&P.render(D);for(let tt=0,ct=We.length;tt<ct;tt++){let xt=We[tt];aa(E,D,xt,xt.viewport)}}else ze.length>0&&xi(Je,ze,D,se),Qe&&P.render(D),aa(E,D,se)}ge!==null&&ie===0&&(J.updateMultisampleRenderTarget(ge),J.updateRenderTargetMipmap(ge)),xe&&U.end(k),D.isScene===!0&&D.onAfterRender(k,D,se),Re.resetDefaultState(),ae=-1,ne=null,A.pop(),A.length>0?(R=A[A.length-1],J.setTextureUnits(R.state.textureUnits),it===!0&&W.setGlobalState(k.clippingPlanes,R.state.camera)):R=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,re!==null&&re.renderEnd()};function qs(D,se,be,xe){if(D.visible===!1)return;if(D.layers.test(se.layers)){if(D.isGroup)be=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(se);else if(D.isLight)R.pushLight(D),D.castShadow&&R.pushShadow(D);else if(D.isSprite){let Je=se.isArrayCamera?ut:Be;if(!D.frustumCulled||D.intersectsFrustum(Je)){xe&&Se.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ye);let ze=V.update(D),We=D.material;We.visible&&E.push(D,ze,We,be,Se.z,null,se)}}else if(D.isMesh||D.isLine||D.isPoints){let Je=se.isArrayCamera?ut:Be;if(!D.frustumCulled||D.intersectsFrustum(Je)){let ze=V.update(D),We=D.material;if(xe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Se.copy(D.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Se.copy(ze.boundingSphere.center)),Se.applyMatrix4(D.matrixWorld).applyMatrix4(Ye)),Array.isArray(We)){let tt=ze.groups;for(let ct=0,xt=tt.length;ct<xt;ct++){let Ze=tt[ct],pt=We[Ze.materialIndex];pt&&pt.visible&&E.push(D,ze,pt,be,Se.z,Ze,se)}}else We.visible&&E.push(D,ze,We,be,Se.z,null,se)}}}let He=D.children;for(let Je=0,ze=He.length;Je<ze;Je++)qs(He[Je],se,be,xe)}function aa(D,se,be,xe){let{opaque:ye,transmissive:He,transparent:Je}=D;R.setupLightsView(be),it===!0&&W.setGlobalState(k.clippingPlanes,be),xe&&he.viewport(fe.copy(xe)),ye.length>0&&ai(ye,se,be),He.length>0&&ai(He,se,be),Je.length>0&&ai(Je,se,be),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function xi(D,se,be,xe){if((be.isScene===!0?be.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[xe.id]===void 0){let Ze=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[xe.id]=new an(1,1,{generateMipmaps:!0,type:Ze?ii:Dn,minFilter:Si,samples:Math.max(4,Te.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let He=R.state.transmissionRenderTarget[xe.id],Je=xe.viewport||fe;He.setSize(Je.z*k.transmissionResolutionScale,Je.w*k.transmissionResolutionScale);let ze=k.getRenderTarget(),We=k.getActiveCubeFace(),tt=k.getActiveMipmapLevel();k.setRenderTarget(He),k.getClearColor(le),Me=k.getClearAlpha(),Me<1&&k.setClearColor(16777215,.5),k.clear(),Qe&&P.render(be);let ct=k.toneMapping;k.toneMapping=Mi;let xt=xe.viewport;if(xe.viewport!==void 0&&(xe.viewport=void 0),R.setupLightsView(xe),it===!0&&W.setGlobalState(k.clippingPlanes,xe),ai(D,be,xe),J.updateMultisampleRenderTarget(He),J.updateRenderTargetMipmap(He),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let pt=0,$t=se.length;pt<$t;pt++){let Ht=se[pt],{object:Ct,geometry:ln,material:et,group:vn}=Ht;if(et.side===Ft&&Ct.layers.test(xe.layers)){let Et=et.side;et.side=Mn,et.needsUpdate=!0,$s(Ct,be,xe,ln,et,vn),et.side=Et,et.needsUpdate=!0,Ze=!0}}Ze===!0&&(J.updateMultisampleRenderTarget(He),J.updateRenderTargetMipmap(He))}k.setRenderTarget(ze,We,tt),k.setClearColor(le,Me),xt!==void 0&&(xe.viewport=xt),k.toneMapping=ct}function ai(D,se,be){let xe=se.isScene===!0?se.overrideMaterial:null;for(let ye=0,He=D.length;ye<He;ye++){let Je=D[ye],{object:ze,geometry:We,group:tt}=Je,ct=Je.material;ct.allowOverride===!0&&xe!==null&&(ct=xe),ze.layers.test(be.layers)&&$s(ze,se,be,We,ct,tt)}}function $s(D,se,be,xe,ye,He){re!==null&&ye.isNodeMaterial&&re.setObject(D,ye),D.onBeforeRender(k,se,be,xe,ye,He),D.modelViewMatrix.multiplyMatrices(be.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ye.onBeforeRender(k,se,be,xe,D,He),ye.transparent===!0&&ye.side===Ft&&ye.forceSinglePass===!1?(ye.side=Mn,ye.needsUpdate=!0,k.renderBufferDirect(be,se,xe,ye,D,He),ye.side=fi,ye.needsUpdate=!0,k.renderBufferDirect(be,se,xe,ye,D,He),ye.side=Ft):k.renderBufferDirect(be,se,xe,ye,D,He),D.onAfterRender(k,se,be,xe,ye,He)}function Fl(D){let se=0;for(let be of D)be.texture!==null&&se++;return se}function Gr(D,se,be){se.isScene!==!0&&(se=Ke);let xe=F.get(D),ye=R.state.lights,He=R.state.shadowsArray,Je=ye.state.version,ze=H.getParameters(D,ye.state,He,se,be,R.state.lightProbeGridArray),We=H.getProgramCacheKey(ze),tt=xe.programs;xe.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?se.environment:null,xe.fog=se.fog;let ct=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;xe.envMap=C.get(D.envMap||xe.environment,ct),xe.envMapRotation=xe.environment!==null&&D.envMap===null?se.environmentRotation:D.envMapRotation,tt===void 0&&(D.addEventListener("dispose",dt),tt=new Map,xe.programs=tt,xe.programVariants=new Map);let xt=tt.get(We);if(xt!==void 0){if(xe.currentProgram===xt&&xe.lightsStateVersion===Je)return Ul(D,ze),xt}else ze.uniforms=H.getUniforms(D),re!==null&&D.isNodeMaterial&&re.build(D,be,ze),D.onBeforeCompile(ze,k),xt=H.acquireProgram(ze,We),tt.set(We,xt),xe.uniforms=ze.uniforms;let Ze=xe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ze.clippingPlanes=W.uniform),Ul(D,ze),xe.needsLights=Zs(D),xe.lightsStateVersion=Je,xe.needsLights&&(Ze.ambientLightColor.value=ye.state.ambient,Ze.lightProbe.value=ye.state.probe,Ze.sunLights.value=ye.state.sun,Ze.sunLightShadows.value=ye.state.sunShadow,Ze.directionalLights.value=ye.state.directional,Ze.directionalLightShadows.value=ye.state.directionalShadow,Ze.spotLights.value=ye.state.spot,Ze.spotLightShadows.value=ye.state.spotShadow,Ze.rectAreaLights.value=ye.state.rectArea,Ze.ltc_1.value=ye.state.rectAreaLTC1,Ze.ltc_2.value=ye.state.rectAreaLTC2,Ze.pointLights.value=ye.state.point,Ze.pointLightShadows.value=ye.state.pointShadow,Ze.hemisphereLights.value=ye.state.hemi,Ze.sunShadowMatrix.value=ye.state.sunShadowMatrix,Ze.sunShadowCascade.value=ye.state.sunShadowCascade,Ze.directionalShadowMatrix.value=ye.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ye.state.spotLightMatrix,Ze.spotLightMap.value=ye.state.spotLightMap,Ze.pointShadowMatrix.value=ye.state.pointShadowMatrix),xe.numLightProbeGrids=Fl(R.state.lightProbeGridArray),xe.currentProgram=xt,xe.uniformsList=null,xt}function xs(D,se,be,xe,ye){let He=F.get(D),Je=He.currentProgram.id+","+xe+","+ye,ze=He.programVariants.get(Je);return ze===void 0?(ze=Gr(D,se,be),He.programVariants.set(Je,ze)):(He.currentProgram=ze,He.uniformsList=null,He.outputColorSpace=xe,He.toneMapping=ye),ze}function Ys(D){if(D.uniformsList===null){let se=D.currentProgram.getUniforms();D.uniformsList=Xo.seqWithValue(se.seq,D.uniforms)}return D.uniformsList}function Ul(D,se){let be=F.get(D);be.outputColorSpace=se.outputColorSpace,be.batching=se.batching,be.batchingColor=se.batchingColor,be.instancing=se.instancing,be.instancingColor=se.instancingColor,be.instancingMorph=se.instancingMorph,be.skinning=se.skinning,be.morphTargets=se.morphTargets,be.morphNormals=se.morphNormals,be.morphColors=se.morphColors,be.morphTargetsCount=se.morphTargetsCount,be.numClippingPlanes=se.numClippingPlanes,be.numIntersection=se.numClipIntersection,be.vertexAlphas=se.vertexAlphas,be.vertexTangents=se.vertexTangents,be.toneMapping=se.toneMapping}function kh(D,se,be,xe,ye){se.isScene!==!0&&(se=Ke),J.resetTextureUnits();let He=se.fog,Je=xe.isMeshStandardMaterial||xe.isMeshLambertMaterial||xe.isMeshPhongMaterial?se.environment:null,ze=ge===null?k.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:yt.workingColorSpace,We=xe.isMeshStandardMaterial||xe.isMeshLambertMaterial&&!xe.envMap||xe.isMeshPhongMaterial&&!xe.envMap,tt=C.get(xe.envMap||Je,We),ct=xe.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,xt=!!be.attributes.tangent&&(!!xe.normalMap||xe.anisotropy>0),Ze=!!be.morphAttributes.position,pt=!!be.morphAttributes.normal,$t=!!be.morphAttributes.color,Ht=Mi;xe.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ht=k.toneMapping);let Ct=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,ln=Ct!==void 0?Ct.length:0,et=F.get(xe),vn=R.state.lights;if(it===!0&&(st===!0||D!==ne)){let qt=D===ne&&xe.id===ae;W.setState(xe,D,qt)}let Et=!1,pr=!1;xe.version===et.__version?et.needsLights&&et.lightsStateVersion!==vn.state.version||ye.isBatchedMesh&&et.batching===!1||!ye.isBatchedMesh&&et.batching===!0||ye.isBatchedMesh&&et.batchingColor===!0&&ye._colorsTexture===null||ye.isBatchedMesh&&et.batchingColor===!1&&ye._colorsTexture!==null||ye.isInstancedMesh&&et.instancing===!1||!ye.isInstancedMesh&&et.instancing===!0||ye.isSkinnedMesh&&et.skinning===!1||!ye.isSkinnedMesh&&et.skinning===!0||ye.isInstancedMesh&&et.instancingColor===!0&&ye.instanceColor===null||ye.isInstancedMesh&&et.instancingColor===!1&&ye.instanceColor!==null||ye.isInstancedMesh&&et.instancingMorph===!0&&ye.morphTexture===null||ye.isInstancedMesh&&et.instancingMorph===!1&&ye.morphTexture!==null||et.envMap!==tt||xe.fog===!0&&et.fog!==He||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==W.numPlanes||et.numIntersection!==W.numIntersection)||et.vertexAlphas!==ct||et.vertexTangents!==xt||et.morphTargets!==Ze||et.morphNormals!==pt||et.morphColors!==$t||et.morphTargetsCount!==ln||et.numLightProbeGrids!==Fl(R.state.lightProbeGridArray)?Et=!0:(et.outputColorSpace!==ze||et.toneMapping!==Ht)&&(pr=!0):(Et=!0,et.__version=xe.version);let cn=et.currentProgram;(Et===!0||pr===!0)&&(cn=pr===!0?xs(xe,se,ye,ze,Ht):Gr(xe,se,ye),re&&xe.isNodeMaterial&&re.onUpdateProgram(xe,cn,et));let Vi=!1,Kn=!1,jn=!1,Mt=cn.getUniforms(),sn=et.uniforms;if(he.useProgram(cn.program)&&(Vi=!0,Kn=!0,jn=!0),xe.id!==ae&&(ae=xe.id,Kn=!0),Vi||ne!==D){he.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Mt.setValue(L,"projectionMatrix",D.projectionMatrix),Mt.setValue(L,"viewMatrix",D.matrixWorldInverse);let Jt=Mt.map.cameraPosition;Jt!==void 0&&Jt.setValue(L,mt.setFromMatrixPosition(D.matrixWorld)),Te.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(xe.isMeshPhongMaterial||xe.isMeshToonMaterial||xe.isMeshLambertMaterial||xe.isMeshBasicMaterial||xe.isMeshStandardMaterial||xe.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",D.isOrthographicCamera===!0),ne!==D&&(ne=D,Kn=!0,jn=!0)}if(et.needsLights&&(vn.state.sunShadowMap.length>0&&Mt.setValue(L,"sunShadowMap",vn.state.sunShadowMap,J),vn.state.directionalShadowMap.length>0&&Mt.setValue(L,"directionalShadowMap",vn.state.directionalShadowMap,J),vn.state.spotShadowMap.length>0&&Mt.setValue(L,"spotShadowMap",vn.state.spotShadowMap,J),vn.state.pointShadowMap.length>0&&Mt.setValue(L,"pointShadowMap",vn.state.pointShadowMap,J)),ye.isSkinnedMesh){Mt.setOptional(L,ye,"bindMatrix"),Mt.setOptional(L,ye,"bindMatrixInverse");let qt=ye.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Mt.setValue(L,"boneTexture",qt.boneTexture,J))}ye.isBatchedMesh&&(Mt.setOptional(L,ye,"batchingTexture"),Mt.setValue(L,"batchingTexture",ye._matricesTexture,J),Mt.setOptional(L,ye,"batchingIdTexture"),Mt.setValue(L,"batchingIdTexture",ye._indirectTexture,J),Mt.setOptional(L,ye,"batchingColorTexture"),ye._colorsTexture!==null&&Mt.setValue(L,"batchingColorTexture",ye._colorsTexture,J));let Rn=be.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&q.update(ye,be,cn),(Kn||et.receiveShadow!==ye.receiveShadow)&&(et.receiveShadow=ye.receiveShadow,Mt.setValue(L,"receiveShadow",ye.receiveShadow)),(xe.isMeshStandardMaterial||xe.isMeshLambertMaterial||xe.isMeshPhongMaterial)&&xe.envMap===null&&se.environment!==null&&(sn.envMapIntensity.value=se.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=fA()),Kn){if(Mt.setValue(L,"toneMappingExposure",k.toneMappingExposure),et.needsLights&&zh(sn,jn),He&&xe.fog===!0&&j.refreshFogUniforms(sn,He),j.refreshMaterialUniforms(sn,xe,ue,ee,R.state.transmissionRenderTarget[D.id]),et.needsLights&&et.numLightProbeGrids>0){let qt=M,Jt=0;for(let li of R.state.lightProbeGridArray)li.texture!==null&&(qt.textures[Jt]=li.texture,qt.min[Jt]=li.boundingBox.min,qt.max[Jt]=li.boundingBox.max,qt.resolution[Jt]=li.resolution,Jt++);for(let li in qt)qt[li].length=Jt;sn.probesSH.value=qt.textures,sn.probesMin.value=qt.min,sn.probesMax.value=qt.max,sn.probesResolution.value=qt.resolution}Xo.upload(L,Ys(et),sn,J)}if(xe.isShaderMaterial&&xe.uniformsNeedUpdate===!0&&(Xo.upload(L,Ys(et),sn,J),xe.uniformsNeedUpdate=!1),xe.isSpriteMaterial&&Mt.setValue(L,"center",ye.center),Mt.setValue(L,"modelViewMatrix",ye.modelViewMatrix),Mt.setValue(L,"normalMatrix",ye.normalMatrix),Mt.setValue(L,"modelMatrix",ye.matrixWorld),xe.uniformsGroups!==void 0){let qt=xe.uniformsGroups;for(let Jt=0,li=qt.length;Jt<li;Jt++){let la=qt[Jt];Pe.update(la,cn),Pe.bind(la,cn)}}return cn}function zh(D,se){D.ambientLightColor.needsUpdate=se,D.lightProbe.needsUpdate=se,D.sunLights.needsUpdate=se,D.sunLightShadows.needsUpdate=se,D.directionalLights.needsUpdate=se,D.directionalLightShadows.needsUpdate=se,D.pointLights.needsUpdate=se,D.pointLightShadows.needsUpdate=se,D.spotLights.needsUpdate=se,D.spotLightShadows.needsUpdate=se,D.rectAreaLights.needsUpdate=se,D.hemisphereLights.needsUpdate=se}function Zs(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return ge},this.setRenderTargetTextures=function(D,se,be){let xe=F.get(D);xe.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,xe.__autoAllocateDepthBuffer===!1&&(xe.__useRenderToTexture=!1),F.get(D.texture).__webglTexture=se,F.get(D.depthTexture).__webglTexture=xe.__autoAllocateDepthBuffer?void 0:be,xe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,se){let be=F.get(D);be.__webglFramebuffer=se,be.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(D,se=0,be=0){ge=D,z=se,ie=be;let xe=null,ye=!1,He=!1;if(D){let ze=F.get(D);if(ze.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(L.FRAMEBUFFER,ze.__webglFramebuffer),fe.copy(D.viewport),we.copy(D.scissor),De=D.scissorTest,he.viewport(fe),he.scissor(we),he.setScissorTest(De),ae=-1;return}else if(ze.__webglFramebuffer===void 0)J.setupRenderTarget(D);else if(ze.__hasExternalTextures)J.rebindTextures(D,F.get(D.texture).__webglTexture,F.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let ct=D.depthTexture;if(ze.__boundDepthTexture!==ct){if(ct!==null&&F.has(ct)&&(D.width!==ct.image.width||D.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(D)}}let We=D.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(He=!0);let tt=F.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(tt[se])?xe=tt[se][be]:xe=tt[se],ye=!0):D.samples>0&&J.useMultisampledRTT(D)===!1?xe=F.get(D).__webglMultisampledFramebuffer:Array.isArray(tt)?xe=tt[be]:xe=tt,fe.copy(D.viewport),we.copy(D.scissor),De=D.scissorTest}else fe.copy(Ne).multiplyScalar(ue).floor(),we.copy(Ue).multiplyScalar(ue).floor(),De=qe;if(be!==0&&(xe=Q),he.bindFramebuffer(L.FRAMEBUFFER,xe)&&he.drawBuffers(D,xe),he.viewport(fe),he.scissor(we),he.setScissorTest(De),ye){let ze=F.get(D.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze.__webglTexture,be)}else if(He){let ze=se;for(let We=0;We<D.textures.length;We++){let tt=F.get(D.textures[We]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+We,tt.__webglTexture,be,ze)}}else if(D!==null&&be!==0){let ze=F.get(D.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ze.__webglTexture,be)}ae=-1};function Wr(D){let se=F.get(D);return(se.__readFormat!==D.format||se.__readType!==D.type)&&(se.__readFormat=D.format,se.__readType=D.type,se.__formatReadable=Te.textureFormatReadable(D.format),se.__typeReadable=Te.textureTypeReadable(D.type)),se}this.readRenderTargetPixels=function(D,se,be,xe,ye,He,Je,ze=0){if(!(D&&D.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=F.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Je!==void 0&&(We=We[Je],Array.isArray(We)&&(We=We[0])),We){he.bindFramebuffer(L.FRAMEBUFFER,We);try{let tt=D.textures[ze],ct=tt.format,xt=tt.type;D.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ze);let Ze=Wr(tt);if(Ze.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=D.width-xe&&be>=0&&be<=D.height-ye&&L.readPixels(se,be,xe,ye,ve.convert(ct),ve.convert(xt),He)}finally{let tt=ge!==null?F.get(ge).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(D,se,be,xe,ye,He,Je,ze=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=F.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Je!==void 0&&(We=We[Je],Array.isArray(We)&&(We=We[0])),We)if(se>=0&&se<=D.width-xe&&be>=0&&be<=D.height-ye){he.bindFramebuffer(L.FRAMEBUFFER,We);let tt=D.textures[ze],ct=tt.format,xt=tt.type;D.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ze);let Ze=Wr(tt);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,pt),L.bufferData(L.PIXEL_PACK_BUFFER,He.byteLength,L.STREAM_READ),L.readPixels(se,be,xe,ye,ve.convert(ct),ve.convert(xt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let $t=ge!==null?F.get(ge).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,$t);let Ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await k0(L,Ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,pt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,He),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(pt),L.deleteSync(Ht),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,se=null,be=0){let xe=Math.pow(2,-be),ye=Math.floor(D.image.width*xe),He=Math.floor(D.image.height*xe),Je=se!==null?se.x:0,ze=se!==null?se.y:0;J.setTexture2D(D,0),L.copyTexSubImage2D(L.TEXTURE_2D,be,0,0,Je,ze,ye,He),he.unbindTexture()},this.copyTextureToTexture=function(D,se,be=null,xe=null,ye=0,He=0){let Je,ze,We,tt,ct,xt,Ze,pt,$t,Ht=D.isCompressedTexture?D.mipmaps[He]:D.image;if(be!==null)Je=be.max.x-be.min.x,ze=be.max.y-be.min.y,We=be.isBox3?be.max.z-be.min.z:1,tt=be.min.x,ct=be.min.y,xt=be.isBox3?be.min.z:0;else{let Mt=Math.pow(2,-ye);Je=Math.floor(Ht.width*Mt),ze=Math.floor(Ht.height*Mt),D.isDataArrayTexture?We=Ht.depth:D.isData3DTexture?We=Math.floor(Ht.depth*Mt):We=1,tt=0,ct=0,xt=0}xe!==null?(Ze=xe.x,pt=xe.y,$t=xe.z):(Ze=0,pt=0,$t=0);let Ct=ve.convert(se.format),ln=ve.convert(se.type),et;se.isData3DTexture?(J.setTexture3D(se,0),et=L.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(J.setTexture2DArray(se,0),et=L.TEXTURE_2D_ARRAY):(J.setTexture2D(se,0),et=L.TEXTURE_2D),he.activeTexture(L.TEXTURE0),he.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,se.flipY),he.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),he.pixelStorei(L.UNPACK_ALIGNMENT,se.unpackAlignment);let vn=he.getParameter(L.UNPACK_ROW_LENGTH),Et=he.getParameter(L.UNPACK_IMAGE_HEIGHT),pr=he.getParameter(L.UNPACK_SKIP_PIXELS),cn=he.getParameter(L.UNPACK_SKIP_ROWS),Vi=he.getParameter(L.UNPACK_SKIP_IMAGES);he.pixelStorei(L.UNPACK_ROW_LENGTH,Ht.width),he.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ht.height),he.pixelStorei(L.UNPACK_SKIP_PIXELS,tt),he.pixelStorei(L.UNPACK_SKIP_ROWS,ct),he.pixelStorei(L.UNPACK_SKIP_IMAGES,xt);let Kn=D.isDataArrayTexture||D.isData3DTexture,jn=se.isDataArrayTexture||se.isData3DTexture;if(D.isDepthTexture){let Mt=F.get(D),sn=F.get(se),Rn=F.get(Mt.__renderTarget),qt=F.get(sn.__renderTarget);he.bindFramebuffer(L.READ_FRAMEBUFFER,Rn.__webglFramebuffer),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Jt=0;Jt<We;Jt++)Kn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,F.get(D).__webglTexture,ye,xt+Jt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,F.get(se).__webglTexture,He,$t+Jt)),L.blitFramebuffer(tt,ct,tt+Je,ct+ze,Ze,pt,Ze+Je,pt+ze,L.DEPTH_BUFFER_BIT,L.NEAREST);he.bindFramebuffer(L.READ_FRAMEBUFFER,null),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(ye!==0||D.isRenderTargetTexture||F.has(D)){let Mt=F.get(D),sn=F.get(se);he.bindFramebuffer(L.READ_FRAMEBUFFER,B),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,K);for(let Rn=0;Rn<We;Rn++)Kn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,ye,xt+Rn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,ye),jn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sn.__webglTexture,He,$t+Rn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sn.__webglTexture,He),ye!==0?L.blitFramebuffer(tt,ct,tt+Je,ct+ze,Ze,pt,Ze+Je,pt+ze,L.COLOR_BUFFER_BIT,L.NEAREST):jn?L.copyTexSubImage3D(et,He,Ze,pt,$t+Rn,tt,ct,Je,ze):L.copyTexSubImage2D(et,He,Ze,pt,tt,ct,Je,ze);he.bindFramebuffer(L.READ_FRAMEBUFFER,null),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else jn?D.isDataTexture||D.isData3DTexture?L.texSubImage3D(et,He,Ze,pt,$t,Je,ze,We,Ct,ln,Ht.data):se.isCompressedArrayTexture?L.compressedTexSubImage3D(et,He,Ze,pt,$t,Je,ze,We,Ct,Ht.data):L.texSubImage3D(et,He,Ze,pt,$t,Je,ze,We,Ct,ln,Ht):D.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,He,Ze,pt,Je,ze,Ct,ln,Ht.data):D.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,He,Ze,pt,Ht.width,Ht.height,Ct,Ht.data):L.texSubImage2D(L.TEXTURE_2D,He,Ze,pt,Je,ze,Ct,ln,Ht);he.pixelStorei(L.UNPACK_ROW_LENGTH,vn),he.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et),he.pixelStorei(L.UNPACK_SKIP_PIXELS,pr),he.pixelStorei(L.UNPACK_SKIP_ROWS,cn),he.pixelStorei(L.UNPACK_SKIP_IMAGES,Vi),He===0&&se.generateMipmaps===!0&&se.mipmapsAutoUpdate===!0&&L.generateMipmap(et),he.unbindTexture()},this.initRenderTarget=function(D){F.get(D).__webglFramebuffer===void 0&&J.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?J.setTextureCube(D,0):D.isData3DTexture?J.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?J.setTexture2DArray(D,0):J.setTexture2D(D,0),he.unbindTexture()},this.resetState=function(){z=0,ie=0,ge=null,he.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};function wx(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new kt;c.morphTargetsRelative=a;let l=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in h.attributes){if(!i.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;s[x]===void 0&&(s[x]=[]),s[x].push(h.attributes[x]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in h.morphAttributes){if(!r.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[x].length!==n[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;o[x]===void 0&&(o[x]=[]),o[x].push(h.morphAttributes[x]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let x;if(t)x=h.index.count;else if(h.attributes.position!==void 0)x=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,x,u),l+=x}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let x=0;x<d.count;++x)h.push(d.getX(x)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(let u in s){let h=Sx(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let x=Sx(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}}return c}function Sx(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new Bt(o,t,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,d=u.count;f<d;f++)for(let x=0;x<t;x++){let y=u.getComponent(f,x);a.setComponent(f+h,x,y)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Od(n,e){if(e===hd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Wo||e===ul){let t=n.getIndex();if(t===null){let s=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===Wo)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Ex(n){let e=new Map,t=new Map,i=n.clone();return Tx(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Tx(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Tx(n.children[i],e.children[i],t)}var Zo=class extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new ep(t)}),this.register(function(t){return new tp(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Yu(t,_t.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Yu(t,_t.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new np(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Or.extractUrlBase(e);o=Or.resolveURL(l,this.path)}else o=Or.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Fo(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ix){try{o[_t.KHR_BINARY_GLTF]=new ip(e)}catch(h){r&&r(h);return}s=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new up(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case _t.KHR_MATERIALS_UNLIT:o[h]=new zd;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[h]=new rp(s,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[h]=new sp;break;case _t.KHR_MESH_QUANTIZATION:o[h]=new op;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function dA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function jt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kd=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new $e(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Wn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Qi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ps(u),l.distance=h;break;case"spot":l=new Za(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),rr(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},zd=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,i){let r=[];e.color=new $e(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,At))}return Promise.all(r)}},Hd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Vd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(s,s)}return Promise.all(r)}},Gd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(r)}},Wd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Xd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},qd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Wn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,At)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},$d=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},Yd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(s[0],s[1],s[2],Wn),Promise.all(r)}},Zd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Kd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(s[0],s[1],s[2],Wn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,At)),Promise.all(r)}},jd=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},Jd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?nn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},Qd=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},ep=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},tp=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},Yu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},np=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let l of r.primitives)if(l.mode!==wi.TRIANGLES&&l.mode!==wi.TRIANGLE_STRIP&&l.mode!==wi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let x of h){let y=new rt,g=new N,m=new Wt,v=new N(1,1,1),T=new Rs(x.geometry,x.material,f);for(let E=0;E<f;E++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&v.fromBufferAttribute(c.SCALE,E),T.setMatrixAt(E,y.compose(g,m,v));let M=null;for(let E in c)if(E==="_COLOR_0"){let R=c[E];T.instanceColor=new Ar(R.array,R.itemSize,R.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(M===null){let _=T.geometry;M=new kt,M.name=_.name;for(let A in _.attributes)M.setAttribute(A,_.attributes[A]);for(let A in _.morphAttributes)M.morphAttributes[A]=_.morphAttributes[A];_.index!==null&&M.setIndex(_.index),M.morphTargetsRelative=_.morphTargetsRelative;for(let A of _.groups)M.addGroup(A.start,A.count,A.materialIndex);_.boundingBox!==null&&(M.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(M.boundingSphere=_.boundingSphere.clone()),M.drawRange.start=_.drawRange.start,M.drawRange.count=_.drawRange.count,M.userData=Object.assign({},_.userData),T.geometry=M}let R=c[E];M.setAttribute(E,new Ar(R.array,R.itemSize,R.normalized))}Vt.prototype.copy.call(T,x),this.parser.assignFinalMaterial(T),d.push(T)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Ix="glTF",xl=12,Ax={JSON:1313821514,BIN:5130562},ip=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ix)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-xl,s=new DataView(e,xl),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===Ax.JSON){let l=new Uint8Array(e,xl+o,a);this.content=i.decode(l)}else if(c===Ax.BIN){let l=xl+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},rp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=lp[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=lp[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=Yo[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let x in d.attributes){let y=d.attributes[x],g=c[x];g!==void 0&&(y.normalized=g)}h(d)},a,l,Wn,f)})})}},sp=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},op=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},Zu=class extends ji{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,h=(i-t)/u,f=h*h,d=f*h,x=e*l,y=x-l,g=-2*d+3*f,m=d-f,v=1-g,T=m-f+h;for(let M=0;M!==a;M++){let E=o[y+M+a],R=o[y+M+c]*u,_=o[x+M+a],A=o[x+M]*u;s[M]=v*E+T*R+g*_+m*A}return s}},pA=new Wt,ap=class extends Zu{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return pA.fromArray(s).normalize().toArray(s),s}},wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rx={9728:Yt,9729:Zt,9984:ru,9985:Vo,9986:Ns,9987:Si},Cx={33071:_i,33648:Eo,10497:ei},Fd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mA={CUBICSPLINE:void 0,LINEAR:Ts,STEP:Es},Ud={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fi})),n.DefaultMaterial}function Us(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function rr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xA(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function yA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _A(n){let e,t=n.extensions&&n.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bd(t.attributes):e=n.indices+":"+Bd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Bd(n.targets[i]);return e}function Bd(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function cp(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bA=new rt,up=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?(this.textureLoader=new Cs(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ja(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Us(s,a,r),rr(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(Or.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=Fd[r.type],a=Yo[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Bt(l,o,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=Fd[r.type],l=Yo[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0,y,g;if(d&&d!==h){let m=Math.floor(f/d),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,T=t.cache.get(v);T||(y=new l(a,m*d,r.count*d/u),T=new Jr(y,d/u),t.cache.add(v,T)),g=new In(T,c,f%d/u,x)}else a===null?y=new l(r.count*c):y=new l(a,f,r.count*c),g=new Bt(y,c,x);if(r.sparse!==void 0){let m=Fd.SCALAR,v=Yo[r.sparse.indices.componentType],T=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,E=new v(o[1],T,r.sparse.count*m),R=new l(o[2],M,r.sparse.count*c);a!==null&&(g=new Bt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let _=0,A=E.length;_<A;_++){let U=E[_];if(g.setX(U,R[_*c]),c>=2&&g.setY(U,R[_*c+1]),c>=3&&g.setZ(U,R[_*c+2]),c>=4&&g.setW(U,R[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Rx[f.magFilter]||Zt,u.minFilter=Rx[f.minFilter]||Si,u.wrapS=Cx[f.wrapS]||ei,u.wrapT=Cx[f.wrapT]||ei,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Yt&&u.minFilter!==Zt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=r.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,x){t.parse(f,d,x)})});else{if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(c).then(function(f){return new Promise(function(d,x){let y=d;t.isImageBitmapLoader===!0&&(y=function(g){let m=new hn(g);m.needsUpdate=!0,d(m)}),t.load(Or.resolveURL(f,s.path),y,void 0,x)})})}let h=u.then(function(f){return l===!0&&a.revokeObjectURL(c),rr(f,o),f.userData.mimeType=o.mimeType||vA(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[_t.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Oo,Ln.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Rr,Ln.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return fn}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},c=s.extensions||{},l=[];if(c[_t.KHR_MATERIALS_UNLIT]){let h=r[_t.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Wn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ft);let u=s.alphaMode||Ud.OPAQUE;if(u===Ud.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ud.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==tn){let h=s.emissiveFactor;a.emissive=new $e().setRGB(h[0],h[1],h[2],Wn)}return s.emissiveTexture!==void 0&&o!==tn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,At)),Promise.all(l).then(function(){let h=new o(a);return s.name&&(h.name=s.name),rr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Us(r,h,s),h})}createUniqueName(e){let t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Px(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=_A(l),h=r[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Px(new kt,l,t),l.mode===wi.TRIANGLE_STRIP?f=f.then(d=>Od(d,ul)):l.mode===wi.TRIANGLE_FAN&&(f=f.then(d=>Od(d,Wo))),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?gA(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,x=u.length;d<x;d++){let y=u[d],g=o[d],m,v=l[d];if(g.mode===wi.TRIANGLES||g.mode===wi.TRIANGLE_STRIP||g.mode===wi.TRIANGLE_FAN||g.mode===void 0){let T=s.isSkinnedMesh===!0,M=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");T&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=T&&M?new Da(y,v):new ft(y,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===wi.LINES)m=new Oa(y,v);else if(g.mode===wi.LINE_STRIP)m=new Zi(y,v);else if(g.mode===wi.LINE_LOOP)m=new Fa(y,v);else if(g.mode===wi.POINTS)m=new Ua(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&yA(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),rr(m,s),g.extensions&&Us(r,m,g),t.assignFinalMaterial(m),h.push(m)}for(let d=0,x=h.length;d<x;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Us(r,h[0],s),h[0];let f=new Tt;s.extensions&&Us(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,x=h.length;d<x;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(nr.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Oi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),rr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new rt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Na(a,c)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],x=r.samplers[d.sampler],y=d.target,g=y.node,m=r.parameters!==void 0?r.parameters[x.input]:x.input,v=r.parameters!==void 0?r.parameters[x.output]:x.output;y.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(x),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],x=h[2],y=h[3],g=h[4],m=[];for(let T=0,M=f.length;T<M;T++){let E=f[T],R=d[T],_=x[T],A=y[T],U=g[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let k=i._createAnimationTracks(E,R,_,A,U);if(k)for(let Y=0;Y<k.length;Y++)m.push(k[Y])}let v=new qa(s,void 0,m);return rr(v,r),v})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));let c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,bA)});for(let d=0,x=h.length;d<x;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,x=h[0];u.pivot=new N().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],x.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Do:l.length>1?u=new Tt:l.length===1?u=l[0]:u=new Vt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),rr(u,s),s.extensions&&Us(i,u,s),s.matrix!==void 0){let h=new rt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new Tt;i.name&&(s.name=r.createUniqueName(i.name)),rr(s,i),i.extensions&&Us(t,s,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){let f=c[u];f.parent!==null?s.add(Ex(f)):s.add(f)}let l=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof Ln||f instanceof hn)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}ls[s.path]===ls.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(ls[s.path]){case ls.weights:u=Lr;break;case ls.rotation:u=Dr;break;case ls.translation:case ls.scale:u=es;break;default:i.itemSize===1?u=Lr:u=es;break}let h=r.interpolation!==void 0?mA[r.interpolation]:Ts,f=this._getArrayFromAccessor(i);for(let d=0,x=c.length;d<x;d++){let y=new u(c[d]+"."+ls[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=cp(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Dr?ap:Zu;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function MA(n,e,t){let i=e.attributes,r=new vt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){let u=cp(Yo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new N,c=new N;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){let y=cp(Yo[f.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new yn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Px(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=lp[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return yt.workingColorSpace!==Wn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),rr(n,e),MA(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?xA(n,e.targets,t):n})}var Lx={type:"change"},fp={type:"start"},Nx={type:"end"},Ku=new Yi,Dx=new xn,SA=Math.cos(70*nr.DEG2RAD),mn=new N,ri=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hp=1e-6,ju=class extends el{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Wt,this._lastTargetPosition=new N,this._quat=new Wt().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new is,this._sphericalDelta=new is,this._scale=1,this._panOffset=new N,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new N,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=EA.bind(this),this._onPointerDown=wA.bind(this),this._onPointerUp=TA.bind(this),this._onContextMenu=DA.bind(this),this._onMouseWheel=CA.bind(this),this._onKeyDown=PA.bind(this),this._onTouchStart=IA.bind(this),this._onTouchMove=LA.bind(this),this._onMouseDown=AA.bind(this),this._onMouseMove=RA.bind(this),this._interceptControlDown=NA.bind(this),this._interceptControlUp=OA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=It.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lx),this.update(),this.state=It.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;mn.copy(t).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ri:i>Math.PI&&(i-=ri),r<-Math.PI?r+=ri:r>Math.PI&&(r-=ri),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=mn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ku.origin.copy(this.object.position),Ku.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ku.direction))<SA?this.object.lookAt(this.target):(Dx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ku.intersectPlane(Dx,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>hp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hp||this._lastTargetPosition.distanceToSquared(this.target)>hp?(this.dispatchEvent(Lx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ri/60*this.autoRotateSpeed*e:ri/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mn.setFromMatrixColumn(t,0),mn.multiplyScalar(-e),this._panOffset.add(mn)}_panUp(e,t){this.screenSpacePanning===!0?mn.setFromMatrixColumn(t,1):(mn.setFromMatrixColumn(t,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(e),this._panOffset.add(mn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;mn.copy(r).sub(this.target);let s=mn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/t.clientHeight),this._rotateUp(ri*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/t.clientHeight),this._rotateUp(ri*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function wA(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function EA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function TA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nx),this.state=It.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function AA(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=It.DOLLY;break;case rs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}break;case rs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(fp)}function RA(n){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function CA(n){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(n.preventDefault(),this.dispatchEvent(fp),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Nx))}function PA(n){this.enabled!==!1&&this._handleKeyDown(n)}function IA(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1){this.state=It.NONE;break}this._handleTouchStartRotate(n),this.state=It.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1){this.state=It.NONE;break}this._handleTouchStartPan(n),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=It.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(fp)}function LA(n){switch(this._trackPointer(n),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=It.NONE}}function DA(n){this.enabled!==!1&&n.preventDefault()}function NA(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function OA(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ju=class extends Xn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ki;e.deleteAttribute("uv");let t=new fn({side:Mn}),i=new fn,r=new Ps(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new ft(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Rs(e,i,6),a=new Vt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new ft(e,Ko(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ft(e,Ko(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new ft(e,Ko(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ft(e,Ko(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new ft(e,Ko(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new ft(e,Ko(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ko(n){return new Wa({color:0,emissive:16777215,emissiveIntensity:n})}var Fn=Uint8Array,pi=Uint16Array,yp=Int32Array,_p=new Fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),vp=new Fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ox=new Fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hx=function(n,e){for(var t=new pi(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new yp(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Vx=Hx(_p,2),FA=Vx.b,pp=Vx.r;FA[28]=258,pp[258]=28;var Gx=Hx(vp,0),UL=Gx.b,Fx=Gx.r,mp=new pi(32768);for(Lt=0;Lt<32768;++Lt)Ur=(Lt&43690)>>1|(Lt&21845)<<1,Ur=(Ur&52428)>>2|(Ur&13107)<<2,Ur=(Ur&61680)>>4|(Ur&3855)<<4,mp[Lt]=((Ur&65280)>>8|(Ur&255)<<8)>>1;var Ur,Lt,vl=(function(n,e,t){for(var i=n.length,r=0,s=new pi(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new pi(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new pi(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[mp[h]>>c]=l}else for(a=new pi(i),r=0;r<i;++r)n[r]&&(a[r]=mp[o[n[r]-1]++]>>15-n[r]);return a}),Bs=new Fn(288);for(Lt=0;Lt<144;++Lt)Bs[Lt]=8;var Lt;for(Lt=144;Lt<256;++Lt)Bs[Lt]=9;var Lt;for(Lt=256;Lt<280;++Lt)Bs[Lt]=7;var Lt;for(Lt=280;Lt<288;++Lt)Bs[Lt]=8;var Lt,Qu=new Fn(32);for(Lt=0;Lt<32;++Lt)Qu[Lt]=5;var Lt,UA=vl(Bs,9,0);var BA=vl(Qu,5,0);var Wx=function(n){return(n+7)/8|0},Xx=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Fn(n.subarray(e,t))};var kA=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],eh=function(n,e,t){var i=new Error(e||kA[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,eh),!t)throw i;return i};var Br=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},yl=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},dp=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:$x,l:0};if(r==1){var o=new Fn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(E,R){return E.f-R.f}),t.push({s:-1,f:25001});var a=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=r-1;)a=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var d=new pi(f+1),x=gp(t[u-1],d,0);if(x>e){var i=0,y=0,g=x-e,m=1<<g;for(s.sort(function(R,_){return d[_.s]-d[R.s]||R.f-_.f});i<r;++i){var v=s[i].s;if(d[v]>e)y+=m-(1<<x-d[v]),d[v]=e;else break}for(y>>=g;y>0;){var T=s[i].s;d[T]<e?y-=1<<e-d[T]++-1:++i}for(;i>=0&&y;--i){var M=s[i].s;d[M]==e&&(--d[M],++y)}x=e}return{t:new Fn(d),l:x}},gp=function(n,e,t){return n.s==-1?Math.max(gp(n.l,e,t+1),gp(n.r,e,t+1)):e[n.s]=t},Ux=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new pi(++e),i=0,r=n[0],s=1,o=function(c){t[i++]=c},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},_l=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},qx=function(n,e,t){var i=t.length,r=Wx(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},Bx=function(n,e,t,i,r,s,o,a,c,l,u){Br(e,u++,t),++r[256];for(var h=dp(r,15),f=h.t,d=h.l,x=dp(s,15),y=x.t,g=x.l,m=Ux(f),v=m.c,T=m.n,M=Ux(y),E=M.c,R=M.n,_=new pi(19),A=0;A<v.length;++A)++_[v[A]&31];for(var A=0;A<E.length;++A)++_[E[A]&31];for(var U=dp(_,7),k=U.t,Y=U.l,re=19;re>4&&!k[Ox[re-1]];--re);var Q=l+5<<3,B=_l(r,Bs)+_l(s,Qu)+o,K=_l(r,f)+_l(s,y)+o+14+3*re+_l(_,k)+2*_[16]+3*_[17]+7*_[18];if(c>=0&&Q<=B&&Q<=K)return qx(e,u,n.subarray(c,c+l));var z,ie,ge,ae;if(Br(e,u,1+(K<B)),u+=2,K<B){z=vl(f,d,0),ie=f,ge=vl(y,g,0),ae=y;var ne=vl(k,Y,0);Br(e,u,T-257),Br(e,u+5,R-1),Br(e,u+10,re-4),u+=14;for(var A=0;A<re;++A)Br(e,u+3*A,k[Ox[A]]);u+=3*re;for(var fe=[v,E],we=0;we<2;++we)for(var De=fe[we],A=0;A<De.length;++A){var le=De[A]&31;Br(e,u,ne[le]),u+=k[le],le>15&&(Br(e,u,De[A]>>5&127),u+=De[A]>>12)}}else z=UA,ie=Bs,ge=BA,ae=Qu;for(var A=0;A<a;++A){var Me=i[A];if(Me>255){var le=Me>>18&31;yl(e,u,z[le+257]),u+=ie[le+257],le>7&&(Br(e,u,Me>>23&31),u+=_p[le]);var de=Me&31;yl(e,u,ge[de]),u+=ae[de],de>3&&(yl(e,u,Me>>5&8191),u+=vp[de])}else yl(e,u,z[Me]),u+=ie[Me]}return yl(e,u,z[256]),u+ie[256]},zA=new yp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),$x=new Fn(0),HA=function(n,e,t,i,r,s){var o=s.z||n.length,a=new Fn(i+o+5*(1+Math.ceil(o/7e3))+r),c=a.subarray(i,a.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=zA[e-1],f=h>>13,d=h&8191,x=(1<<t)-1,y=s.p||new pi(32768),g=s.h||new pi(x+1),m=Math.ceil(t/3),v=2*m,T=function(Be){return(n[Be]^n[Be+1]<<m^n[Be+2]<<v)&x},M=new yp(25e3),E=new pi(288),R=new pi(32),_=0,A=0,U=s.i||0,k=0,Y=s.w||0,re=0;U+2<o;++U){var Q=T(U),B=U&32767,K=g[Q];if(y[B]=K,g[Q]=B,Y<=U){var z=o-U;if((_>7e3||k>24576)&&(z>423||!l)){u=Bx(n,c,0,M,E,R,A,k,re,U-re,u),k=_=A=0,re=U;for(var ie=0;ie<286;++ie)E[ie]=0;for(var ie=0;ie<30;++ie)R[ie]=0}var ge=2,ae=0,ne=d,fe=B-K&32767;if(z>2&&Q==T(U-fe))for(var we=Math.min(f,z)-1,De=Math.min(32767,U),le=Math.min(258,z);fe<=De&&--ne&&B!=K;){if(n[U+ge]==n[U+ge-fe]){for(var Me=0;Me<le&&n[U+Me]==n[U+Me-fe];++Me);if(Me>ge){if(ge=Me,ae=fe,Me>we)break;for(var de=Math.min(fe,Me-2),ee=0,ie=0;ie<de;++ie){var ue=U-fe+ie&32767,Ce=y[ue],Fe=ue-Ce&32767;Fe>ee&&(ee=Fe,K=ue)}}}B=K,K=y[B],fe+=B-K&32767}if(ae){M[k++]=268435456|pp[ge]<<18|Fx[ae];var Ne=pp[ge]&31,Ue=Fx[ae]&31;A+=_p[Ne]+vp[Ue],++E[257+Ne],++R[Ue],Y=U+ge,++_}else M[k++]=n[U],++E[n[U]]}}for(U=Math.max(U,Y);U<o;++U)M[k++]=n[U],++E[n[U]];u=Bx(n,c,l,M,E,R,A,k,re,U-re,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=g,s.p=y,s.i=U,s.w=Y)}else{for(var U=s.w||0;U<o+l;U+=65535){var qe=U+65535;qe>=o&&(c[u/8|0]=l,qe=o),u=qx(c,u+1,n.subarray(U,qe))}s.i=o}return Xx(a,0,i+Wx(u)+r)},VA=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),GA=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=VA[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var WA=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new Fn(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return HA(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},Yx=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var wn=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function XA(n,e){return WA(n,e||{},0,0)}var Zx=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=Yx(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?t[o]=[s,a]:(t[o+="/"]=[new Fn(0),a],Zx(s,o,t,i))}},kx=typeof TextEncoder<"u"&&new TextEncoder,qA=typeof TextDecoder<"u"&&new TextDecoder,$A=0;try{qA.decode($x,{stream:!0}),$A=1}catch{}function bl(n,e){if(e){for(var t=new Fn(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(kx)return kx.encode(n);for(var r=n.length,s=new Fn(n.length+(n.length>>1)),o=0,a=function(u){s[o++]=u},i=0;i<r;++i){if(o+5>s.length){var c=new Fn(o+8+(r-i<<1));c.set(s),s=c}var l=n.charCodeAt(i);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++i)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return Xx(s,0,o)}var xp=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&eh(9),e+=i+4}return e},zx=function(n,e,t,i,r,s,o,a){var c=i.length,l=t.extra,u=a&&a.length,h=xp(l);wn(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&eh(10),wn(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(wn(n,e,t.crc),wn(n,e+4,s<0?-s-2:s),wn(n,e+8,t.size)),wn(n,e+12,c),wn(n,e+14,h),e+=16,o!=null&&(wn(n,e,u),wn(n,e+6,t.attrs),wn(n,e+10,o),e+=14),n.set(i,e),e+=c,h)for(var x in l){var y=l[x],g=y.length;wn(n,e,+x),wn(n,e+2,g),n.set(y,e+4),e+=4+g}return u&&(n.set(a,e),e+=u),e},YA=function(n,e,t,i,r){wn(n,e,101010256),wn(n,e+8,t),wn(n,e+10,t),wn(n,e+12,i),wn(n,e+16,r)};function Kx(n,e){e||(e={});var t={},i=[];Zx(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],c=a[0],l=a[1],u=l.level==0?0:8,h=bl(o),f=h.length,d=l.comment,x=d&&bl(d),y=x&&x.length,g=xp(l.extra);f>65535&&eh(11);var m=u?XA(c,l):c,v=m.length,T=GA();T.p(c),i.push(Yx(l,{size:c.length,crc:T.d(),c:m,f:h,m:x,u:f!=o.length||x&&d.length!=y,o:r,compression:u})),r+=30+f+g+v,s+=76+2*(f+g)+(y||0)+v}for(var M=new Fn(s+22),E=r,R=s-r,_=0;_<i.length;++_){var h=i[_];zx(M,h.o,h,h.f,h.u,h.c.length);var A=30+h.f.length+xp(h.extra);M.set(h.c,h.o+A),zx(M,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+A+(h.m?h.m.length:0)}return YA(M,r,i.length,R,E),M}var Un=class{constructor(e,t="",i=[],r=[]){this.name=e,this.type=t,this.metadata=i,this.properties=r,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(u=>{let h=u.key,f=u.value;if(Array.isArray(f)){let d=[];return d.push(`${h} = {`),f.forEach(x=>{d.push(`${t}		${x}`)}),d.push(`${t}	}`),d.join(`
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
${t}}`}},nh=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,r){this.parseAsync(e,r).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,r={},s="model.usda";r[s]=null;let o=KA(e,t.animations);t.animationTracks=o;let a=new Un("Root","Xform"),c=new Un("Scenes","Scope");c.addMetadata("kind",'"sceneLibrary"'),a.addChild(c);let l="Scene",u=new Un(l,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${l}"`]),u.addMetadata("sceneName",`"${l}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),c.addChild(u);let h,f={},d={};e.isScene?iy(e,u,f,i,r,t):ry(e,u,f,i,r,t);let x=sR(f,d,t.quickLookCompatible),y=o.size>0?{fps:t.animationFrameRate,endTimeCode:jA(t.animations)*t.animationFrameRate}:null;h=ny(y)+`
`+a.toString()+`

`+x.toString(),r[s]=bl(h),h=null;for(let m in d){let v=d[m];if(v.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");v=await this.textureUtils.decompress(v)}let T=ZA(v.image,v.flipY,t.maxTextureSize),M=v.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",E=await new Promise(R=>T.toBlob(R,M));r[`textures/Texture_${m}.${ty(v)}`]=new Uint8Array(await E.arrayBuffer())}let g=0;for(let m in r){let v=r[m],T=34+m.length;g+=T;let M=g&63;if(M!==4){let E=64-M,R=new Uint8Array(E);r[m]=[v,{extra:{12345:R}}]}g=v.length}return Kx(r,{level:0,mtime:new Date})}};function ey(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function ty(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function ZA(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),r=document.createElement("canvas");r.width=n.width*Math.min(1,i),r.height=n.height*Math.min(1,i);let s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(n,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var bt=7;function ny(n=null){return`#usda 1.0
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
`}function KA(n,e){let t=new Map;for(let i=0;i<e.length;i++){let r=e[i];for(let s=0;s<r.tracks.length;s++){let o=r.tracks[s],a=Nt.parseTrackName(o.name),c=Nt.findNode(n,a.nodeName);if(c==null)continue;let l=a.propertyName;if(l!=="position"&&l!=="quaternion"&&l!=="scale")continue;let u=t.get(c);u===void 0&&(u={},t.set(c,u)),u[l]=o}}return t}function jA(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function jx(n,e,t,i){let r=t.times,s=t.values,o=[];for(let a=0;a<r.length;a++){let c=a*3;o.push(`${(r[a]*i).toPrecision(bt)}: (${s[c].toPrecision(bt)}, ${s[c+1].toPrecision(bt)}, ${s[c+2].toPrecision(bt)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function JA(n,e){let t=n.times,i=n.values,r=[];for(let s=0;s<t.length;s++){let o=s*4;r.push(`${(t[s]*e).toPrecision(bt)}: (${i[o+3].toPrecision(bt)}, ${i[o].toPrecision(bt)}, ${i[o+1].toPrecision(bt)}, ${i[o+2].toPrecision(bt)})`)}return`quatf xformOp:orient.timeSamples = {
	${r.join(`,
	`)},
}`}function iy(n,e,t,i,r,s){for(let o=0,a=n.children.length;o<a;o++)ry(n.children[o],e,t,i,r,s)}function ry(n,e,t,i,r,s){if(n.visible===!1&&s.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,c=Array.isArray(n.material),l=c?n.material:[n.material];for(let h=0;h<l.length;h++){let f=l[h];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let u=l.map(h=>t[h.uuid]);if(c===!1){let h=`geometries/Geometry_${a.id}.usda`;if(!(h in r)){let f=tR(a);r[h]=bl(ny()+`
`+f.toString())}}o=QA(n,a,u,i,s)}else n.isCamera?o=lR(n,i,s):o=oy(n,i,s);e.addChild(o),iy(n,o,t,i,r,s)}function sy(n,e,t){let i=t.animationTracks.get(e),r=e.pivot!==null;if(!r&&i===void 0){let l=eR(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${l}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let s=t.animationFrameRate,o=e.position,a=e.quaternion,c=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(jx("xformOp:translate","float3",i.position,s)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(bt)}, ${o.y.toPrecision(bt)}, ${o.z.toPrecision(bt)})`),r){let l=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${l.x.toPrecision(bt)}, ${l.y.toPrecision(bt)}, ${l.z.toPrecision(bt)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(JA(i.quaternion,s)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(bt)}, ${a.x.toPrecision(bt)}, ${a.y.toPrecision(bt)}, ${a.z.toPrecision(bt)})`),i!==void 0&&i.scale!==void 0?n.addProperty(jx("xformOp:scale","float3",i.scale,s)):n.addProperty(`float3 xformOp:scale = (${c.x.toPrecision(bt)}, ${c.y.toPrecision(bt)}, ${c.z.toPrecision(bt)})`),r?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function oy(n,e,t){let i=ey(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Un(i,"Xform");return sy(r,n,t),r}function QA(n,e,t,i,r){let s=oy(n,i,r);return t.length===1?(s.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),s.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),s.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):s.addChild(ay(e,t)),s}function eR(n){let e=n.elements;return`( ${th(e,0)}, ${th(e,4)}, ${th(e,8)}, ${th(e,12)} )`}function th(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function tR(n){let e=new Un("Geometry"),t=ay(n);return e.addChild(t),e}function ay(n,e=null){let t="Geometry",i=n.attributes,r=i.position.count,s=new Un(t,"Mesh");s.addProperty(`int[] faceVertexCounts = [${nR(n)}]`),s.addProperty(`int[] faceVertexIndices = [${iR(n)}]`),s.addProperty(`normal3f[] normals = [${bp(i.normal,r)}]`,['interpolation = "vertex"']),s.addProperty(`point3f[] points = [${bp(i.position,r)}]`);for(let a=0;a<4;a++){let c=a>0?a:"",l=i["uv"+c];l!==void 0&&s.addProperty(`texCoord2f[] primvars:st${c} = [${rR(l)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&s.addProperty(`color3f[] primvars:displayColor = [${bp(o,r)}]`,['interpolation = "vertex"']),s.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,c=(n.index!==null?n.index.count:i.position.count)/3;for(let l=0;l<a.length;l++){let u=a[l],h=e[u.materialIndex];if(h===void 0)continue;let f=Math.floor(u.start/3),d=Math.min(f+Math.floor(u.count/3),c),x=[];for(let g=f;g<d;g++)x.push(g);let y=new Un(`subset_${l}`,"GeomSubset");y.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),y.addProperty('uniform token elementType = "face"'),y.addProperty('uniform token familyName = "materialBind"'),y.addProperty(`int[] indices = [${x.join(", ")}]`),y.addProperty(`rel material:binding = </Materials/Material_${h.id}>`),s.addChild(y)}}return s}function nR(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function iR(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let r=0;r<i;r++)t.push(r)}return t.join(", ")}function bp(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let r=n.getX(i),s=n.getY(i),o=n.getZ(i);t.push(`(${r.toPrecision(bt)}, ${s.toPrecision(bt)}, ${o.toPrecision(bt)})`)}return t.join(", ")}function rR(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),r=n.getY(t);e.push(`(${i.toPrecision(bt)}, ${1-r.toPrecision(bt)})`)}return e.join(", ")}function sR(n,e,t=!1){let i=new Un("Materials");for(let r in n){let s=n[r];i.addChild(oR(s,e,t))}return i}function oR(n,e,t=!1){let i=new Un(`Material_${n.id}`,"Material");function r(o,a,c){let l=o.source.id+"_"+o.flipY;e[l]=o;let u=o.channel>0?"st"+o.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),x=o.rotation,y=Math.sin(x),g=Math.cos(x);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=y/f.x,d.y+=g-1):(d.x+=y*f.x,d.y+=(1-g)*f.y);let m=new Un(`PrimvarReader_${a}`,"Shader");m.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),m.addProperty("float2 inputs:fallback = (0.0, 0.0)"),m.addProperty(`string inputs:varname = "${u}"`),m.addProperty("float2 outputs:result");let v=new Un(`Transform2d_${a}`,"Shader");v.addProperty('uniform token info:id = "UsdTransform2d"'),v.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),v.addProperty(`float inputs:rotation = ${(x*(180/Math.PI)).toFixed(bt)}`),v.addProperty(`float2 inputs:scale = ${Qx(f)}`),v.addProperty(`float2 inputs:translation = ${Qx(d)}`),v.addProperty("float2 outputs:result");let T=new Un(`Texture_${o.id}_${a}`,"Shader");if(T.addProperty('uniform token info:id = "UsdUVTexture"'),T.addProperty(`asset inputs:file = @textures/Texture_${l}.${ty(o)}@`),T.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),c!==void 0){let M=a==="diffuse"?n.opacity:1;T.addProperty(`float4 inputs:scale = ${aR(c,M)}`)}if(a==="normal"){let M=n.normalScale.x;T.addProperty(`float4 inputs:scale = (${2*M}, ${2*M}, 2, 1)`),T.addProperty(`float4 inputs:bias = (${-M}, ${-M}, -1, 0)`)}return T.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===di?"raw":"sRGB"}"`),T.addProperty(`token inputs:wrapS = "${h[o.wrapS]}"`),T.addProperty(`token inputs:wrapT = "${h[o.wrapT]}"`),T.addProperty("float outputs:r"),T.addProperty("float outputs:g"),T.addProperty("float outputs:b"),T.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&T.addProperty("float outputs:a"),[m,v,T]}n.side===Ft&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let s=new Un("PreviewSurface","Shader");if(s.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(s.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),s.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),r(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):s.addProperty(`color3f inputs:diffuseColor = ${Jx(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){s.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new $e(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);r(n.emissiveMap,"emissive",a).forEach(l=>i.addChild(l))}else n.emissive.getHex()>0&&s.addProperty(`color3f inputs:emissiveColor = ${Jx(n.emissive)}`)}if(n.normalMap&&(s.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),r(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){s.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new $e(o,o,o);r(n.aoMap,"occlusion",a).forEach(l=>i.addChild(l))}if(n.roughnessMap){s.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new $e(n.roughness,n.roughness,n.roughness);r(n.roughnessMap,"roughness",o).forEach(c=>i.addChild(c))}else s.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){s.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new $e(n.metalness,n.metalness,n.metalness);r(n.metalnessMap,"metallic",o).forEach(c=>i.addChild(c))}else s.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),s.addProperty("float inputs:opacityThreshold = 0.0001"),r(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):s.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){s.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new $e(n.clearcoat,n.clearcoat,n.clearcoat);r(n.clearcoatMap,"clearcoat",o).forEach(c=>i.addChild(c))}else s.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){s.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new $e(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);r(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(c=>i.addChild(c))}else s.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);s.addProperty(`float inputs:ior = ${n.ior}`)}return s.addProperty("int inputs:useSpecularWorkflow = 0"),s.addProperty("token outputs:surface"),i.addChild(s),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function Jx(n){return`(${n.r}, ${n.g}, ${n.b})`}function aR(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function Qx(n){return`(${n.x}, ${n.y})`}function lR(n,e,t){let i=ey(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Un(i,"Camera");sy(r,n,t);let s=n.isOrthographicCamera?"orthographic":"perspective";r.addProperty(`token projection = "${s}"`);let o=`(${n.near.toPrecision(bt)}, ${n.far.toPrecision(bt)})`;r.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(bt):a=n.getFilmWidth().toPrecision(bt),r.addProperty(`float horizontalAperture = ${a}`);let c;if(n.isOrthographicCamera?c=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(bt):c=n.getFilmHeight().toPrecision(bt),r.addProperty(`float verticalAperture = ${c}`),n.isPerspectiveCamera){let l=n.getFocalLength().toPrecision(bt);r.addProperty(`float focalLength = ${l}`);let u=n.focus.toPrecision(bt);r.addProperty(`float focusDistance = ${u}`)}return r}var ly=new vt,ih=new N,Bi=class extends ja{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Gt(e,3)),this.setAttribute("uv",new Gt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new ns(t,6,1);return this.setAttribute("instanceStart",new In(i,3,0)),this.setAttribute("instanceEnd",new In(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new ns(t,6,1);return this.setAttribute("instanceColorStart",new In(i,3,0)),this.setAttribute("instanceColorEnd",new In(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ga(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ly.setFromBufferAttribute(t),this.boundingBox.union(ly))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ih.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ih)),ih.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ih));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ve.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Xe},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$n.line={uniforms:fl.merge([Ve.common,Ve.fog,Ve.line]),vertexShader:`
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
		`};var sr=class extends _n{constructor(e){super({type:"LineMaterial",uniforms:fl.clone($n.line.uniforms),vertexShader:$n.line.vertexShader,fragmentShader:$n.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Mp=new wt,cy=new N,uy=new N,En=new wt,Tn=new wt,or=new wt,Sp=new N,wp=new rt,An=new Qa,hy=new N,rh=new vt,sh=new yn,ar=new wt,lr,ks;function fy(n,e,t){return ar.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ar.multiplyScalar(1/ar.w),ar.x=ks/t.width,ar.y=ks/t.height,ar.applyMatrix4(n.projectionMatrixInverse),ar.multiplyScalar(1/ar.w),Math.abs(Math.max(ar.x,ar.y))}function cR(n,e){let t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,c=o;a<c;a++){An.start.fromBufferAttribute(r,a),An.end.fromBufferAttribute(s,a),An.applyMatrix4(t);let l=new N,u=new N;lr.distanceSqToSegment(An.start,An.end,u,l),u.distanceTo(l)<ks*.5&&e.push({point:u,pointOnLine:l,distance:lr.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function uR(n,e,t){let i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;lr.at(1,or),or.w=1,or.applyMatrix4(e.matrixWorldInverse),or.applyMatrix4(i),or.multiplyScalar(1/or.w),or.x*=s.x/2,or.y*=s.y/2,or.z=0,Sp.copy(or),wp.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(En.fromBufferAttribute(c,f),Tn.fromBufferAttribute(l,f),En.w=1,Tn.w=1,En.applyMatrix4(wp),Tn.applyMatrix4(wp),En.z>h&&Tn.z>h)continue;if(En.z>h){let T=En.z-Tn.z,M=(En.z-h)/T;En.lerp(Tn,M)}else if(Tn.z>h){let T=Tn.z-En.z,M=(Tn.z-h)/T;Tn.lerp(En,M)}En.applyMatrix4(i),Tn.applyMatrix4(i),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=s.x/2,En.y*=s.y/2,Tn.x*=s.x/2,Tn.y*=s.y/2,An.start.copy(En),An.start.z=0,An.end.copy(Tn),An.end.z=0;let y=An.closestPointToPointParameter(Sp,!0);An.at(y,hy);let g=nr.lerp(En.z,Tn.z,y),m=g>=-1&&g<=1,v=Sp.distanceTo(hy)<ks*.5;if(m&&v){An.start.fromBufferAttribute(c,f),An.end.fromBufferAttribute(l,f),An.start.applyMatrix4(o),An.end.applyMatrix4(o);let T=new N,M=new N;lr.distanceSqToSegment(An.start,An.end,M,T),t.push({point:M,pointOnLine:T,distance:lr.origin.distanceTo(M),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var cs=class extends ft{constructor(e=new Bi,t=new sr({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)cy.fromBufferAttribute(t,o),uy.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+cy.distanceTo(uy);let s=new ns(r,2,1);return e.setAttribute("instanceDistanceStart",new In(s,1,0)),e.setAttribute("instanceDistanceEnd",new In(s,1,1)),this}raycast(e,t){let i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;lr=e.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;ks=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),sh.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=ks*.5;else{let h=Math.max(r.near,sh.distanceToPoint(lr.origin));l=fy(r,h,c.resolution)}if(sh.radius+=l,lr.intersectsSphere(sh)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),rh.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=ks*.5;else{let h=Math.max(r.near,rh.distanceToPoint(lr.origin));u=fy(r,h,c.resolution)}rh.expandByScalar(u),lr.intersectsBox(rh)!==!1&&(i?cR(this,t):uR(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Mp),this.material.uniforms.resolution.value.set(Mp.z,Mp.w))}};var my="blueprints.edgeMode",hR="blueprints.edgesEnabled",zs="none",Hs="transparent",Sl="opaque",fR=20,gy=2.5,xy=0,ah=35e-5,Tp=2e-6;function dR(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*Tp}var Ml=1,yy=4,pR=.0012,mR=.0036,gR=.02,xR=.0035,dy=.012;function py(n){return n===zs||n===Hs||n===Sl?n:n==="1"||n==="true"?Hs:n==="0"||n==="false"?zs:null}function _y(){try{let n=py(localStorage.getItem(my));if(n)return n;let e=py(localStorage.getItem(hR));if(e)return Rp(e),e}catch{}return Hs}function Rp(n){try{localStorage.setItem(my,n)}catch{}}function Bn(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function vy(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new Ha(n,fR),i=t.getAttribute("position"),r=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),r}function yR(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var oh=new N;function by(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],r=n[t+1],s=n[t+2],o=n[t+3],a=n[t+4],c=n[t+5],l=o-i,u=a-r,h=c-s,f=Math.hypot(l,u,h);f<1e-6||e.push({ax:i,ay:r,az:s,bx:o,by:a,bz:c,dx:l/f,dy:u/f,dz:h/f,len:f})}return e}function _R(n,e,t,i,r,s){let o=d=>Math.round(d/5e-4),a=o(n),c=o(e),l=o(t),u=o(i),h=o(r),f=o(s);if(a>u||a===u&&c>h||a===u&&c===h&&l>f){let d=a;a=u,u=d;let x=c;c=h,h=x;let y=l;l=f,f=y}return`${a},${c},${l},${u},${h},${f}`}function My(n){let e=by(n),t=[],i=new Set;for(let r=0;r<e.length;r++){let s=e[r];for(let o=r+1;o<e.length;o++){let a=e[o];if(Math.abs(s.dx*a.dx+s.dy*a.dy+s.dz*a.dz)<.985)continue;let l=s.ax-a.ax,u=s.ay-a.ay,h=s.az-a.az,f=l*s.dx+u*s.dy+h*s.dz,d=l-f*s.dx,x=u-f*s.dy,y=h-f*s.dz,g=Math.hypot(d,x,y);if(g<pR||g>mR)continue;let m=(a.ax-s.ax)*s.dx+(a.ay-s.ay)*s.dy+(a.az-s.az)*s.dz,v=(a.bx-s.ax)*s.dx+(a.by-s.ay)*s.dy+(a.bz-s.az)*s.dz,T=Math.max(0,Math.min(m,v)),M=Math.min(s.len,Math.max(m,v));if(M-T<gR)continue;let E=-d/g*(g*.5),R=-x/g*(g*.5),_=-y/g*(g*.5),A=s.ax+s.dx*T+E,U=s.ay+s.dy*T+R,k=s.az+s.dz*T+_,Y=s.ax+s.dx*M+E,re=s.ay+s.dy*M+R,Q=s.az+s.dz*M+_,B=_R(A,U,k,Y,re,Q);i.has(B)||(i.add(B),t.push(A,U,k,Y,re,Q))}}return new Float32Array(t)}function vR(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,r=0,s=0,o=t?t.count:e.count,a=l=>{let u=t?t.getX(l):l;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let l=0;l+2<o;l+=3){let u=a(l),h=a(l+1),f=a(l+2),d=h[0]-u[0],x=h[1]-u[1],y=h[2]-u[2],g=f[0]-u[0],m=f[1]-u[1],v=f[2]-u[2];i+=x*v-y*m,r+=y*g-d*v,s+=d*m-x*g}let c=Math.hypot(i,r,s)||1;return{x:i/c,y:r/c,z:s/c}}function bR(n,e){let t=n.getAttribute("position"),i,r,s;Math.abs(e.z)<.9?(i=-e.y,r=e.x,s=0):(i=0,r=-e.z,s=e.y);let o=Math.hypot(i,r,s)||1;i/=o,r/=o,s/=o;let a=e.y*s-e.z*r,c=e.z*i-e.x*s,l=e.x*r-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let x=0;x<t.count;x++){let y=t.getX(x),g=t.getY(x),m=t.getZ(x),v=y*i+g*r+m*s,T=y*a+g*c+m*l;v<u&&(u=v),v>h&&(h=v),T<f&&(f=T),T>d&&(d=T)}return Math.min(h-u,d-f)}function MR(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=vR(n),i=bR(n,t);return t.z>.5?i>dy:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>dy}function Sy(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let r=0;r<e.length;r+=3)oh.set(e[r],e[r+1],e[r+2]).applyMatrix4(t),i[r]=oh.x,i[r+1]=oh.y,i[r+2]=oh.z;return i}function SR(n,e,t){if(!t||t.length<6)return n;let i=Sy(e,n),r=by(t),s=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],c=i[o+1],l=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,x=h-c,y=f-l,g=Math.hypot(d,x,y);if(g<1e-6)continue;let m=d/g,v=x/g,T=y/g,M=!1;for(let E of r){if(Math.abs(m*E.dx+v*E.dy+T*E.dz)<.95)continue;let _=a-E.ax,A=c-E.ay,U=l-E.az,k=_*E.dx+A*E.dy+U*E.dz,Y=_-k*E.dx,re=A-k*E.dy,Q=U-k*E.dz;if(Math.hypot(Y,re,Q)>xR)continue;let B=(a-E.ax)*E.dx+(c-E.ay)*E.dy+(l-E.az)*E.dz,K=(u-E.ax)*E.dx+(h-E.ay)*E.dy+(f-E.az)*E.dz,z=Math.min(B,K),ie=Math.max(B,K);if(Math.min(ie,E.len)-Math.max(z,0)>.01){M=!0;break}}M||s.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(s)}function wR(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function ER(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function TR(n,e=Hs){return e===zs?0:e===Sl?n?.visible===!1?0:1:ER(n)}function Ap(n,e,t=1,i=Tp){let r=Math.max(0,Math.min(1,Number(t)||0)),s=Number.isFinite(i)?i:Tp,o=new sr({color:xy,linewidth:gy,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:r<1,opacity:r<1?r:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${ah};
			end.z += ${ah};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if ${Ip}
				gl_FragDepth -= ${s};
			#else
				gl_FragDepth = gl_FragCoord.z - ${s};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${yy}-${s}-${ah}`,e&&o.resolution.set(e.x,e.y),o}function wy(n,e,t,i){let r=Math.max(0,Math.min(1,Number(e)||0)),s=Ap(t,null,r);s.depthTest=!1,s.depthWrite=!1,s.transparent=!0,s.opacity=r;let o=s.onBeforeCompile?.bind(s),a=s.customProgramCacheKey?.bind(s);s.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,s.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},s.needsUpdate=!0;let c=new Bi;c.setPositions(n);let l=new cs(c,s);return l.frustumCulled=!1,l.matrixAutoUpdate=!1,l.renderOrder=1e3,l.raycast=()=>{},l.userData.isPeeledEdgeBatch=!0,l}function lh(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function Ey(n){if(!n)return;let e=[];n.traverse(t=>{Bn(t)&&e.push(t)});for(let t of e)lh(t)}function us(n,e){n&&n.traverse(t=>{Bn(t)&&(t.visible=e)})}function Ty(n,e,t){if(!n)return;let i=Math.max(1,e),r=Math.max(1,t);n.traverse(s=>{if(!Bn(s)||!s.material)return;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a?.resolution&&a.resolution.set(i,r)})}function Cp(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!Bn(i)||!i.material)return;let r=Array.isArray(i.material)?i.material:[i.material];for(let s of r){if(!s)continue;let o=s.clippingPlanes?s.clippingPlanes.length:0;s.clippingPlanes=t,s.clipIntersection=!1,o!==t.length&&(s.needsUpdate=!0)}})}function AR(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=vy(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?My(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?MR(n.geometry)?SR(i,n,t):new Float32Array(0):i}function RR(n,e,t,i,r){n.updateWorldMatrix(!0,!1);let s=AR(n,i,r),o=ch(t,n.matrixWorld),a=Ry(n.geometry,o),c=yR(s,a),l=new Bi,u=e.geometry;c.length>=6?(l.setPositions(c),e.geometry=l,e.computeLineDistances()):e.geometry=l,u?.dispose?.()}function CR(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let r=i.userData.bpHardEdgePositions;r instanceof Float32Array||(r=vy(i.geometry),i.userData.bpHardEdgePositions=r);let s=My(r);if(s.length<6)continue;let o=Sy(i,s);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function Ay(n,e,t={}){let i=t.clippingPlanes??[],r=t.resolution||null,s=t.edgeMode??Hs,o=e?CR(n):new Float32Array(0);for(let[a,c]of n)for(let l of c){if(!l||!l.isMesh||!l.geometry||Bn(l))continue;let u=null;for(let d of l.children)if(Bn(d)){u=d;break}if(!e){u&&lh(u);continue}u&&!u.isLineSegments2&&(lh(u),u=null);let h=TR(l,s),f=dR(l);if(u){let d=u.material,x=d?.customProgramCacheKey?.(),y=`bp-edge-depth-bias-r${yy}-${f}-${ah}`;if(!d||typeof d.customProgramCacheKey!="function"||x!==y){lh(u);let g=Ap(i,r,h,f),m=new Bi;u=new cs(m,g),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(Ml),l.add(u)}else d.color&&d.color.setHex(xy),typeof d.linewidth=="number"&&(d.linewidth=gy),d.clippingPlanes=i,d.clipIntersection=!1,r&&d.resolution&&d.resolution.set(r.x,r.y),wR(d,h),d.needsUpdate=!0}else{let d=Ap(i,r,h,f),x=new Bi;u=new cs(x,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(Ml),l.add(u)}u.layers.set(Ml),RR(l,u,i,a,o)}}function PR(n){if(!n.isMesh||Bn(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function Pp(n,e,t,i,r={}){if(!i)return;let s=!!r.reuseDepth,o=!1;if(i.traverse(y=>{Bn(y)&&(o=!0)}),!o){Ep(n);return}let a=n.autoClear,c=e.background,l=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,s){us(i,!0),t.layers.set(Ml),n.render(e,t),t.layers.mask=u,e.background=c,e.overrideMaterial=l,n.autoClear=a,Ep(n);return}us(i,!1);let h=[];i.traverse(y=>{!PR(y)||y.visible===!1||(h.push(y),y.visible=!1)});let f=[],d=new Set;e.traverse(y=>{if(!y.isMesh||Bn(y)||y.visible===!1)return;let g=Array.isArray(y.material)?y.material:[y.material];for(let m of g)!m||d.has(m)||(d.add(m),f.push({mat:m,colorWrite:m.colorWrite!==!1,depthWrite:m.depthWrite!==!1}),m.colorWrite=!1,m.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let y of f)y.mat.colorWrite=y.colorWrite,y.mat.depthWrite=y.depthWrite;for(let y of h)y.visible=!0}us(i,!0);let x=[];r.opaqueEdgesOnly&&i.traverse(y=>{if(!Bn(y))return;let g=Array.isArray(y.material)?y.material[0]:y.material;g&&g.transparent&&g.opacity<1-1e-4&&(x.push(y),y.visible=!1)}),t.layers.set(Ml);try{n.render(e,t)}finally{for(let y of x)y.visible=!0}t.layers.mask=u,e.background=c,e.overrideMaterial=l,n.autoClear=a,Ep(n)}function Ep(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var Cy=!0,Py=5,Np=12,IR=Np,Ly=.001,LR=.5,DR=1;function Iy(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let r=t.children;if(r)for(let s=0;s<r.length;s++){let o=r[s];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var uh=1e5,ki={value:0},rn={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Ly},uResolution:{value:new Xe(1,1)}};function Lp(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=ki.value),t.tPrevViewZ&&(t.tPrevViewZ.value=rn.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=rn.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=rn.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=rn.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(rn.uResolution.value)}function wl(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,r)=>{t?.(i,r),i.uniforms.uPeelStage=ki,i.uniforms.tPrevViewZ=rn.tPrevViewZ,i.uniforms.tPeelViewZ=rn.tPeelViewZ,i.uniforms.tOpaqueViewZ=rn.tOpaqueViewZ,i.uniforms.uViewZEps=rn.uViewZEps,i.uniforms.uResolution=rn.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(uh*.5).toFixed(1)}) discard;
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
#endif`)},n.needsUpdate=!0}function Dp(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function Dy(n){let e=new Xe,t=new $e,i=null,r=null,s=null,o=null,a=null,c=null,l=new Oi(-1,1,1,-1,0,1),u=new Xn,h=new _n({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new $e(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new ft(new ti(2,2),h);u.add(f);let d=new _n({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:eu,blendSrc:il,blendDst:os,blendSrcAlpha:il,blendDstAlpha:os,blendEquation:Fi}),x=new ft(new ti(2,2),d),y=new Xn;y.add(x);let g=new _n({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:bi}),m=new ft(new ti(2,2),g),v=new Xn;v.add(m);let T=new _n({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:bi}),M=new ft(new ti(2,2),T),E=new Xn;E.add(M);function R(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function _(L){R();let me=n.autoClear;n.setRenderTarget(L),n.autoClear=!1,n.render(E,l),n.autoClear=me}let A=new _n({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Ft,clipping:!0,blending:bi});function U(L,me,pe={}){g.uniforms.uValue.value=me;let Te=n.autoClear;R(),n.setRenderTarget(L),pe.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(v,l),n.autoClear=Te}function k(){i?.dispose(),r?.dispose(),s?.dispose(),o?.dispose(),a?.dispose(),c?.dispose(),i=null,r=null,s=null,o=null,a=null,c=null}let Y=0;function re(L,me,pe){let Te=Math.max(1,Math.floor(L)),he=Math.max(1,Math.floor(me)),p=Math.min(1,Math.max(.25,pe)),F=Math.max(1,Math.floor(Te*p)),J=Math.max(1,Math.floor(he*p));if(i&&i.width===Te&&i.height===he&&s&&s.width===F&&s.height===J&&Y===p)return;k(),Y=p,i=new an(Te,he,{format:Sn,type:Dn,colorSpace:At,depthBuffer:!0,stencilBuffer:!1});let C={format:Sn,type:qn,depthBuffer:!0,stencilBuffer:!1,magFilter:Yt,minFilter:Yt};r=new an(F,J,C),s=new an(F,J,C),o=new an(F,J,C),a=new an(F,J,{format:Sn,type:ii,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:Zt,minFilter:Zt}),c=new an(F,J,{format:Sn,type:ii,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:Zt,minFilter:Zt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,rn.tOpaqueViewZ.value=r.texture,rn.uResolution.value.set(F,J)}function Q(L){let me=[],pe=[];return L?(L.traverse(Te=>{if(!Te.isMesh||!Te.visible||Bn(Te))return;let he=Te,p=Array.isArray(he.material)?he.material:[he.material],F=!1;for(let J of p)if(J&&J.transparent&&J.opacity<1-1e-4){F=!0;break}F?pe.push(he):me.push(he)}),{opaque:me,transparent:pe}):{opaque:me,transparent:pe}}function B(L,me){for(let pe of L)pe.visible=me}function K(L,me){L.blending=me.blending,L.blendSrc=me.blendSrc,L.blendDst=me.blendDst,L.blendSrcAlpha=me.blendSrcAlpha,L.blendDstAlpha=me.blendDstAlpha,L.blendEquation=me.blendEquation,L.blendEquationAlpha=me.blendEquation}let z={meshes:[],sources:[],key:""},ie={meshes:[],sources:[],key:""},ge="",ae="",ne=new Xn,fe=new Xn,we=new Xn,De=[];function le(L){for(let me of L.meshes)me.geometry.dispose();L.meshes=[],L.sources=[],L.key=""}function Me(){for(let L of De){we.remove(L),L.geometry?.dispose?.();let me=L.material;if(Array.isArray(me))for(let pe of me)pe?.dispose?.();else me?.dispose?.()}De=[]}function de(){le(z),le(ie),Me(),ge="",ae=""}function ee(L){if(Me(),!L.length)return;let me=new Map,pe=new N;for(let he of L){let p=null;for(let te of he.children)if(Bn(te)){p=te;break}if(!p?.geometry)continue;let F=p.material,J=F&&F.transparent&&typeof F.opacity=="number"?F.opacity:1;if(!(J<1-1e-4))continue;let C=p.geometry.getAttribute("instanceStart"),w=p.geometry.getAttribute("instanceEnd");if(!C||!w||!C.count)continue;let S=J.toFixed(3),V=me.get(S);V||(V={opacity:J,planes:F.clippingPlanes||[],chunks:[]},me.set(S,V)),he.updateWorldMatrix(!0,!1);let H=C.count,j=new Float32Array(H*6);for(let te=0;te<H;te++)pe.fromBufferAttribute(C,te).applyMatrix4(he.matrixWorld),j[te*6]=pe.x,j[te*6+1]=pe.y,j[te*6+2]=pe.z,pe.fromBufferAttribute(w,te).applyMatrix4(he.matrixWorld),j[te*6+3]=pe.x,j[te*6+4]=pe.y,j[te*6+5]=pe.z;V.chunks.push(j)}let Te={stage:ki,prevZ:rn.tPrevViewZ,peelZ:rn.tPeelViewZ,opaqueZ:rn.tOpaqueViewZ,eps:rn.uViewZEps,resolution:rn.uResolution};for(let he of me.values()){let p=0;for(let w of he.chunks)p+=w.length;if(p<6)continue;let F=new Float32Array(p),J=0;for(let w of he.chunks)F.set(w,J),J+=w.length;let C=wy(F,he.opacity,he.planes,Te);we.add(C),De.push(C)}}function ue(L,me,pe,Te){if(!pe.length)return;let he=`${Iy(pe)}#${Iy(me)}`;Te&&Te===ge&&he===ae&&z.meshes.length||(Ne(z,L,pe),Ne(ie,L,me),z.sources.length===pe.length&&ie.sources.length===me.length&&(ee(pe),ge=Te||"",ae=he))}function Ce(L){return Object.keys(L.attributes).sort().join(",")}function Fe(L){let me=L.geometry,pe=me.index?me.toNonIndexed():me.clone();return pe.applyMatrix4(L.matrixWorld),pe}function Ne(L,me,pe){let Te=String(pe.length);for(let p of pe){let F=Array.isArray(p.material)?"m":p.material?.id||0;Te+=`.${p.id}:${F}`}if(Te===L.key)return;me.updateWorldMatrix(!0,!0),le(L),L.key=Te;let he=new Map;for(let p of pe){if(!p.geometry||Array.isArray(p.material)||!p.material)continue;let F=`${p.material.uuid}:${Ce(p.geometry)}`,J=he.get(F);J||(J={mat:p.material,meshes:[]},he.set(F,J)),J.meshes.push(p)}for(let p of he.values()){let F=[];try{for(let w of p.meshes)F.push(Fe(w));let J=wx(F,!1);if(!J)continue;let C=new ft(J,p.mat);C.frustumCulled=!1,C.matrixAutoUpdate=!1,C.renderOrder=0,C.userData.isPeelBatch=!0,L.meshes.push(C),L.sources.push(...p.meshes)}catch{}finally{for(let J of F)J.dispose()}}}function Ue(L,me,pe,Te){if(!L.meshes.length||L.sources.length!==me.length)return n.render(pe,Te),!1;ne.environment=pe.environment,ne.environmentIntensity=pe.environmentIntensity,ne.fog=pe.fog;let he=[];for(let p of pe.children)p.isLight&&he.push(p);for(let p of he)ne.add(p);for(let p of L.meshes)ne.add(p);n.render(ne,Te);for(let p of L.meshes)ne.remove(p);for(let p of he)pe.add(p);return!0}function qe(L,me,pe){Ue(z,pe,L,me)}function Be(L,me,pe){pe.length&&Ue(ie,pe,L,me)}function ut(L,me,pe){if(!ie.meshes.length||ie.sources.length!==me.length)return!1;fe.overrideMaterial=pe;for(let Te of ie.meshes)fe.add(Te);n.render(fe,L),fe.overrideMaterial=null;for(let Te of ie.meshes)fe.remove(Te);return!0}function it(L){let me=new Set;for(let pe of L){let Te=Array.isArray(pe.material)?pe.material:[pe.material];for(let he of Te)he&&me.add(he)}return[...me]}function st(L,me,pe){if(!pe)return;let Te=pe.visible,he=L.background,p=n.autoClear;pe.visible=!1;let F=L.children.filter(J=>J.userData?.bpStage&&J.visible);for(let J of F)J.visible=!1;L.background=null,n.autoClear=!1,R(),n.clearDepth(),n.render(L,me);for(let J of F)J.visible=!0;pe.visible=Te,L.background=he,n.autoClear=p}function Ye(L){return L.children.filter(me=>me.userData?.blueprintAnnotations)}function mt(L,me){for(let pe of L)pe.visible=me}function Se(L,me,pe){Ye(L).some(Te=>Te.visible)&&st(L,me,pe)}function Ke(L,me,pe,Te={}){us(pe,!1);let he=Ye(L),p=he.map(F=>F.visible);mt(he,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(L,me),Te.skipEdges||Pp(n,L,me,pe,{reuseDepth:!!Te.reuseDepth}),he.forEach((F,J)=>{F.visible=p[J]}),Se(L,me,pe)}function Qe(L,me,pe,Te,he={}){if(!(Cy&&(typeof Te=="function"?Te():!!Te)))return ki.value=0,Ke(L,me,pe,{reuseDepth:!0}),!1;if(he.quality!=="high"){ki.value=0,Ke(L,me,pe,{reuseDepth:!0});let oe=he.batchKey||"";if(pe&&!he.deferPrime&&oe!==ge){let Ie=Q(pe);ue(pe,Ie.opaque,Ie.transparent,oe)}return!0}let{opaque:F,transparent:J}=Q(pe);if(!J.length)return ki.value=0,Ke(L,me,pe,{reuseDepth:!0}),!1;pe&&ue(pe,F,J,he.batchKey||"");let C=he.quality==="high",w=C?DR:LR,S=C?Np:Py;n.getDrawingBufferSize(e),re(e.x,e.y,w);let V=n.autoClear,H=n.toneMapping,j=L.background;j instanceof $e?t.copy(j):t.set(1118481),h.uniforms.uBackground.value.copy(t);let te=[];for(let oe of[...F,...J])te.push({mesh:oe,visible:oe.visible});let Z=it(J),W=[];for(let oe of Z)wl(oe),W.push({mat:oe,snap:{blending:oe.blending,blendSrc:oe.blendSrc,blendDst:oe.blendDst,blendSrcAlpha:oe.blendSrcAlpha,blendDstAlpha:oe.blendDstAlpha,blendEquation:oe.blendEquation,blendEquationAlpha:oe.blendEquationAlpha,depthWrite:oe.depthWrite,depthTest:oe.depthTest,transparent:oe.transparent,opacity:oe.opacity,colorWrite:oe.colorWrite,side:oe.side,forceSinglePass:oe.forceSinglePass}});Dp(Z,!0);let O=new Map;for(let oe of J)O.set(oe,oe.onBeforeRender),oe.onBeforeRender=function(je,Oe,dt,Rt,Xt,Zn){let oi=Array.isArray(Xt)?Xt:[Xt];for(let Vr of oi)Vr&&Lp(Vr);let Hr=O.get(oe);typeof Hr=="function"&&Hr.call(this,je,Oe,dt,Rt,Xt,Zn)};let P=null;for(let oe of Z)if(oe.clippingPlanes?.length){P=oe.clippingPlanes;break}if(!P)for(let oe of F){let Ie=Array.isArray(oe.material)?oe.material:[oe.material];for(let je of Ie)if(je?.clippingPlanes?.length){P=je.clippingPlanes;break}if(P)break}A.clippingPlanes=P||[],A.clipIntersection=!1,L.background=null,n.autoClear=!0,ki.value=0;let q=[];for(let oe of L.children)oe!==pe&&(oe.isLight||oe.userData?.bpStage||(q.push({obj:oe,visible:oe.visible}),oe.visible=!1));function G(){for(let[oe,Ie]of O)oe.onBeforeRender=Ie}function ce(){for(let{mat:oe,snap:Ie}of W)K(oe,Ie),oe.blendEquationAlpha=Ie.blendEquationAlpha,oe.depthWrite=Ie.depthWrite,oe.depthTest=Ie.depthTest,oe.transparent=Ie.transparent,oe.opacity=Ie.opacity,oe.colorWrite=Ie.colorWrite!==!1,oe.side=Ie.side,oe.forceSinglePass=Ie.forceSinglePass,oe.needsUpdate=!0;for(let{mesh:oe,visible:Ie}of te)oe.visible=Ie;for(let{obj:oe,visible:Ie}of q)oe.visible=Ie;return G(),Dp(Z,!1),ki.value=0,L.background=j,L.overrideMaterial=null,n.toneMapping=H,n.setRenderTarget(null),n.autoClear=!0,Ke(L,me,pe),n.autoClear=V,!1}if(B(J,!1),B(F,!0),us(pe,!1),R(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),Be(L,me,F),n.setRenderTarget(r),n.setClearColor(0,1),U(r,uh,{clearDepth:!0}),C){let oe=new Float32Array(4);try{n.readRenderTargetPixels(r,2,2,1,1,oe)}catch{oe[0]=0}if(!Number.isFinite(oe[0])||oe[0]<uh*.5)return ce()}let ve=L.overrideMaterial;n.setRenderTarget(r),n.autoClear=!1,ut(me,F,A)||(L.overrideMaterial=A,n.render(L,me),L.overrideMaterial=ve),n.autoClear=!0,rn.tOpaqueViewZ.value=r.texture,_(a),U(o,0),rn.tPrevViewZ.value=o.texture,B(F,!1),B(J,!0),us(pe,!1);let Re=!1;for(let oe=0;oe<S;oe++){rn.tPrevViewZ.value=o.texture,rn.tPeelViewZ.value=o.texture,ki.value=1;for(let{mat:Oe}of W)Oe.depthWrite=!0,Oe.depthTest=!0,Oe.colorWrite=!0,Oe.transparent=!0,Oe.forceSinglePass=!0,K(Oe,{blending:bi,blendSrc:os,blendDst:tl,blendSrcAlpha:os,blendDstAlpha:tl,blendEquation:Fi}),Lp(Oe);R(),n.setRenderTarget(s),n.setClearColor(0,1),n.clear(!1,!0,!1),U(s,uh),n.setRenderTarget(s),n.autoClear=!1,qe(L,me,J),n.autoClear=!0,rn.tPeelViewZ.value=s.texture,ki.value=2;for(let{mat:Oe}of W)Oe.depthWrite=!1,Oe.depthTest=!1,Oe.colorWrite=!0,Oe.transparent=!0,Oe.forceSinglePass=!0,K(Oe,{blending:er,blendSrc:nl,blendDst:zo,blendSrcAlpha:os,blendDstAlpha:zo,blendEquation:Fi}),Lp(Oe);_(c);let Ie=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(c),qe(L,me,J),n.autoClear=Ie,De.length&&c){for(let dt of De)dt.material?.resolution?.set(c.width,c.height);let Oe=me.layers.mask;me.layers.set(0),n.autoClear=!1,n.render(we,me),me.layers.mask=Oe,n.autoClear=!0}Re=!0,d.uniforms.tSrc.value=c.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(y,l),n.autoClear=!0;let je=o;o=s,s=je}if(!Re)return ce();for(let{mat:oe,snap:Ie}of W)K(oe,Ie),oe.blendEquationAlpha=Ie.blendEquationAlpha,oe.depthWrite=Ie.depthWrite,oe.depthTest=Ie.depthTest,oe.transparent=Ie.transparent,oe.opacity=Ie.opacity,oe.colorWrite=Ie.colorWrite!==!1,oe.side=Ie.side,oe.forceSinglePass=Ie.forceSinglePass;for(let{mesh:oe,visible:Ie}of te)oe.visible=Ie;for(let{obj:oe,visible:Ie}of q)oe.visible=Ie;G(),us(pe,!0),Dp(Z,!1),ki.value=0,L.background=j,n.toneMapping=H,n.setRenderTarget(null),n.autoClear=!0,n.render(u,l);let Pe=Ye(L),ke=Pe.map(oe=>oe.visible);return mt(Pe,!1),C&&pe&&Pp(n,L,me,pe,{opaqueEdgesOnly:De.length>0}),Pe.forEach((oe,Ie)=>{oe.visible=ke[Ie]}),Se(L,me,pe),n.autoClear=V,!0}function Ee(){de(),k(),h.dispose(),f.geometry.dispose(),d.dispose(),x.geometry.dispose(),g.dispose(),m.geometry.dispose(),T.dispose(),M.geometry.dispose(),A.dispose()}return{render:Qe,dispose:Ee,MAX_PEELS:IR,MAX_PEELS_FAST:Py,MAX_PEELS_HIGH:Np,VIEW_Z_EPSILON:Ly,USE_DEPTH_PEEL:Cy}}var Oy="blueprints.materialMode",hh="solid",El="shaded",Vs="realistic",NR=[hh,El,Vs],OR={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],worktop:[236,233,226],hob:[24,24,27],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},Fp={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,worktop:6,hob:7,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},FR=2e-6,UR=3,Ip="defined( USE_LOGARITHMIC_DEPTH_BUFFER ) || defined( USE_LOGDEPTHBUF )";function Up(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),r=n.customProgramCacheKey?.bind(n),s=FR.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if ${Ip}
	{
		float bpFaceBias = ${t}.0 * ${s};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${r?r():n.type}|bpLayerDepth-r${UR}-${t}`,n.needsUpdate=!0}var BR=[];function Fy(n,e,t){let i=new Set(n),r=Array.isArray(e)&&e.length?e:BR,s=typeof t=="function"?t:c=>c;function o(c){let l=[];for(let u of c){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),l.push({type:"leaf",id:u,label:s(u)});continue}let h=o(u.children||[]);h.length&&l.push({type:"group",id:u.id,label:s(u.id),children:h})}return l}let a=o(r);if(i.size){let c=[...i].sort((l,u)=>l.localeCompare(u)).map(l=>({type:"leaf",id:l,label:s(l)}));a.push({type:"group",id:"other",label:s("other"),children:c})}return a}function Uy(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let r of e)r.type==="group"&&t.set(r.id,fh(r));let i={};for(let[r,s]of Object.entries(n)){let o=t.get(r);if(o&&o.length)for(let a of o)i[a]=s;else i[r]=s}return i}function fh(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...fh(t));return e}function kR(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let r of n.children||[]){if(!r?.userData?.isEdgeOverlay||!r.material)continue;let s=Array.isArray(r.material)?r.material:[r.material];for(let o of s)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function zi(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),r=t.edgeMode??"transparent";for(let s of n){if(!s)continue;if(i<=0||s.userData?.bpIfcHidden){s.visible=!1;continue}if(s.visible=!0,!s.isMesh)continue;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o){if(!a)continue;let c=a.userData?.presetOpacity,l=typeof c=="number"?i*Math.max(0,Math.min(1,c)):i;l<1?(a.transparent=!0,a.opacity=l,a.depthWrite=!1,a.depthTest=!0,a.side=Ft,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Ft,a.forceSinglePass=!1,a.blending=er,a.userData.needsDepthPeel=!1),a.needsUpdate=!0}typeof s.userData.opaqueRenderOrder!="number"&&(s.userData.opaqueRenderOrder=s.renderOrder||0),s.renderOrder=i<1?0:s.userData.opaqueRenderOrder,kR(s,i,r);for(let a of s.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=s.renderOrder;let c=Array.isArray(a.material)?a.material:[a.material];for(let l of c)l&&(l.opacity=i,l.transparent=i<1,l.depthWrite=i>=1,l.depthTest=!0,l.forceSinglePass=i<1,l.side=Ft,l.needsUpdate=!0)}}}var zR={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},worktop:{color:[236,233,226],roughness:.3,metalness:0,clearcoat:.4,clearcoatRoughness:.2,map:"plaster"},hob:{color:[24,24,27],roughness:.1,metalness:0,clearcoat:.8,clearcoatRoughness:.05,map:"none"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},Op=new Map;function HR(n){if(!n||n==="none")return null;let e=Op.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let r=i.getContext("2d");if(!r)return null;if(n==="wood"){r.fillStyle="#c49858",r.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,c=130+o*17%50;r.strokeStyle=`rgba(${c-40}, ${c-60}, ${c-100}, 0.55)`,r.lineWidth=1.2,r.beginPath(),r.moveTo(0,o+a*.15),r.lineTo(t,o-a*.1),r.stroke()}for(let o=0;o<60;o++){let a=o*37%t,c=o*53%t;r.fillStyle="rgba(70, 40, 15, 0.22)",r.fillRect(a,c,2,7+o%5)}}else if(n==="foam"){r.fillStyle="#9ed468",r.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let c=o/7%2*3.5,l=2.4+a*o%5*.2;r.beginPath(),r.arc(a+c+3.5,o+3.5,l,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.55)",r.fill(),r.strokeStyle="rgba(40,90,30,0.35)",r.stroke()}}else if(n==="plaster"){let o=r.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let c=200+a*13%45;o.data[a]=c,o.data[a+1]=c-10,o.data[a+2]=c-22,o.data[a+3]=255}r.putImageData(o,0,0)}else if(n==="wool"){r.fillStyle="#88c860",r.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,c=o*91%t;r.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",r.fillRect(a,c,1+o%2,2+o%3)}}else if(n==="metal"){let o=r.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),r.fillStyle=o,r.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(0,a,t,2),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(0,a+4,t,2)}else if(n==="masonry"){r.fillStyle="#b88868",r.fillRect(0,0,t,t);let o=16,a=32;for(let c=0;c<t/o;c++){let l=c%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+l,f=c*o;r.fillStyle=`rgba(${170+(c+u)%3*18}, ${110+c%4*10}, ${70+u%3*12}, 0.75)`,r.fillRect(h+1,f+1,a-2,o-2),r.strokeStyle="rgba(70,45,30,0.55)",r.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let s=new Cr(i);return s.colorSpace=At,s.wrapS=ei,s.wrapT=ei,s.repeat.set(2.5,2.5),s.needsUpdate=!0,Op.set(n,s),s}function Ny(n){return new $e(n[0]/255,n[1]/255,n[2]/255)}function VR(n){return OR[n]||[160,160,160]}function Tl(n,e,t=0){n.side=Ft,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],Up(n,t),wl(n),n.needsUpdate=!0}function By(n){n.computeBoundingBox();let e=n.boundingBox,t=new N;e.getSize(t);let i=Math.max(t.x,1e-6),r=Math.max(t.y,1e-6),s=Math.max(t.z,1e-6),o=Math.max(i,r,s);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),c=n.getAttribute("normal");if(!a)return o;let l=n.getAttribute("uv");if(l&&l.count===a.count)return o;let u=new Float32Array(a.count*2),h=new N;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(c.getX(f)),x=Math.abs(c.getY(f)),y=Math.abs(c.getZ(f)),g,m;x>=d&&x>=y?(g=(h.x-e.min.x)/i,m=(h.z-e.min.z)/s):d>=y?(g=(h.z-e.min.z)/s,m=(h.y-e.min.y)/r):(g=(h.x-e.min.x)/i,m=(h.y-e.min.y)/r),u[f*2]=g,u[f*2+1]=m}return n.setAttribute("uv",new Bt(u,2)),o}function GR(n,e){let t=HR(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let r=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(r,r),i}function dh(n){let e=new Set(Op.values());for(let t of n)if(t){for(let i of["map","normalMap","roughnessMap","aoMap"]){let r=t[i];r&&(!e.has(r)&&!r.userData?.bpShared&&r.dispose?.(),t[i]=null)}t.dispose?.()}}function ky(n,e,t={}){let i=t.clippingPlanes??null,r=e===El,s=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,c]of n){let l=VR(a),u=Fp[a]??0,h=1e3;if(r)for(let g of c)g.isMesh&&g.geometry&&(h=Math.max(h,By(g.geometry)));let f=1,d;if(r){let g=zR[a]||{color:l,roughness:.7,metalness:0,map:"none"};f=typeof g.opacity=="number"?g.opacity:1;let m=Ny(g.color),v=GR(g.map||"none",h);g.clearcoat?d=new nn({color:m,map:v,roughness:g.roughness,metalness:g.metalness,clearcoat:g.clearcoat,clearcoatRoughness:g.clearcoatRoughness??.3,envMapIntensity:.85}):d=new fn({color:m,map:v,roughness:g.roughness,metalness:g.metalness,envMapIntensity:g.metalness>.05?1.1:.55})}else d=new tn({color:Ny(l)});Tl(d,i,u),d.userData.presetOpacity=f;let x=new Set;for(let g of c){if(!g.isMesh)continue;let m=g.material;if(m){let v=Array.isArray(m)?m:[m];for(let T of v)x.add(T)}g.material=d,g.userData.opaqueRenderOrder=u,g.renderOrder=u}x.delete(d),dh(x);let y=1;s&&(s instanceof Map?y=s.has(a)?s.get(a):1:typeof s[a]=="number"&&(y=s[a])),zi(c,Number(y)||0,{edgeMode:o})}}function zy(n,e){let i=(Array.isArray(n)?n:[n]).map(r=>{if(!r)return new fn({color:13421772,roughness:.65,metalness:0,side:fi});let s=r.color?r.color.clone():new $e(13421772),o=typeof r.roughness=="number"?r.roughness:.65,a=typeof r.metalness=="number"?r.metalness:0,c=null;r.map&&e&&(By(e),c=r.map.clone(),c.needsUpdate=!0);let l=new fn({color:s,map:c,roughness:o,metalness:a,side:fi,transparent:!!r.transparent,opacity:typeof r.opacity=="number"?r.opacity:1});return l.clippingPlanes=null,l.clipIntersection=!1,l});return Array.isArray(n)?i:i[0]}function Hy(){try{let n=localStorage.getItem(Oy);if(n&&NR.includes(n))return n}catch{}return hh}function Vy(n){try{localStorage.setItem(Oy,n)}catch{}}var cr=1e-5,Gy=new WeakMap;function mi(n,e,t,i){let r=t/(t-i);return n.clone().lerp(e,r)}function WR(n,e,t){let[i,r,s]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(r),c=e.distanceToPoint(s),l=o>=-cr,u=a>=-cr,h=c>=-cr,f=(l?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,r,s]);return}if(f===0)return;let d=[i,r,s],x=[o,a,c],y=[l,u,h];if(f===1){let T=y.findIndex(Boolean),M=(T+1)%3,E=(T+2)%3,R=d[T],_=mi(d[T],d[M],x[T],x[M]),A=mi(d[T],d[E],x[T],x[E]);t.push([R,_,A]);return}let g=y.findIndex(T=>!T),m=(g+1)%3,v=(g+2)%3;if(y[m]){let T=d[m],M=d[v],E=mi(d[g],d[m],x[g],x[m]),R=mi(d[g],d[v],x[g],x[v]);t.push([T,M,E]),t.push([M,R,E])}else{let T=d[v],M=mi(d[g],d[m],x[g],x[m]),E=mi(d[g],d[v],x[g],x[v]);t.push([T,M,E])}}function XR(n,e){let[t,i,r]=n,s=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(r),c=s>=-cr,l=o>=-cr,u=a>=-cr,h=(c?1:0)+(l?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,r],d=[s,o,a],x=[c,l,u];if(h===1){let v=x.findIndex(Boolean),T=(v+1)%3,M=(v+2)%3;return[mi(f[v],f[T],d[v],d[T]),mi(f[v],f[M],d[v],d[M])]}let y=x.findIndex(v=>!v),g=(y+1)%3,m=(y+2)%3;return x[g]?[mi(f[y],f[g],d[y],d[g]),mi(f[y],f[m],d[y],d[m])]:[mi(f[y],f[g],d[y],d[g]),mi(f[y],f[m],d[y],d[m])]}function qR(n,e,t){let i=n.clone(),r=e.clone();for(let s of t){let o=s.distanceToPoint(i),a=s.distanceToPoint(r),c=o>=-cr,l=a>=-cr;if(c&&l)continue;if(!c&&!l)return null;let u=mi(i,r,o,a);c?r=u:i=u}return i.distanceToSquared(r)<cr*cr?null:[i,r]}function $R(n,e){let t=n;for(let i of e){let r=[];for(let s of t)WR(s,i,r);if(t=r,t.length===0)break}return t}function YR(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new N,r=[],s=n.getIndex();function o(a,c,l){r.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone()])}if(s)for(let a=0;a<s.count;a+=3)o(s.getX(a),s.getX(a+1),s.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return r}function ZR(n){let e=n.getAttribute("position");if(!e)return[];let t=new N,i=[],r=n.getIndex();function s(o,a,c){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,c).clone()])}if(r)for(let o=0;o<r.count;o+=3)s(r.getX(o),r.getX(o+1),r.getX(o+2));else for(let o=0;o<e.count;o+=3)s(o,o+1,o+2);return i}var Gs=1e-6,Wy=2e-4,KR=2e-4,Xy=new WeakMap;function jR(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function qy(n){let e=t=>Math.round(t/Gs);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function Zy(n,e){let t=jR(e),i=Xy.get(n);if(i&&i.key===t)return i;let r=[],s=[],o=Gy.get(n);if(o||(o=ZR(n),Gy.set(n,o)),o.length&&e?.length)for(let c=0;c<e.length;c++){let l=e[c],u=e.filter((f,d)=>d!==c),h=[];for(let f of o){let d=XR(f,l);if(!d)continue;let x=u.length?qR(d[0],d[1],u):d;x&&(h.push(x),r.push(x[0].x,x[0].y,x[0].z,x[1].x,x[1].y,x[1].z))}s.push(h)}let a={key:t,segments:new Float32Array(r),perPlane:s};return Xy.set(n,a),a}function JR(n,e,t){let i=new Map;for(let c of n.keys())i.set(c,c);function r(c){let l=c;for(;i.get(l)!==l;){let u=i.get(i.get(l));i.set(l,u),l=u}return l}function s(c){let l=r(c),u=0;for(let h of t.get(l)||[])e[h].dead||u++;return u}function o(){let c=[];for(let l of n.keys())r(l)===l&&s(l)%2&&c.push(l);return c}let a=Wy*Wy;for(let c=0;c<e.length+2;c++){let l=o();if(l.length<2)break;let u=-1,h=-1,f=1/0;for(let m=0;m<l.length;m++){let v=n.get(l[m]);for(let T=m+1;T<l.length;T++){let M=n.get(l[T]),E=v.x-M.x,R=v.y-M.y,_=v.z-M.z,A=E*E+R*R+_*_;A<f&&(f=A,u=m,h=T)}}if(f>a)break;let d=l[u],x=l[h],y=n.get(d),g=n.get(x);y.add(g).multiplyScalar(.5);for(let m of t.get(x)||[]){let v=e[m];if(v.dead)continue;let T=r(v.a===x?v.b:v.a);if(T===d){v.dead=!0;continue}v.a=d,v.b=T,t.has(d)||t.set(d,[]),t.get(d).push(m)}i.set(x,d)}}function QR(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let c=qy(o),l=qy(a);if(c===l)continue;e.has(c)||e.set(c,o.clone()),e.has(l)||e.set(l,a.clone());let u=t.length;t.push({a:c,b:l,used:!1,dead:!1}),i.has(c)||i.set(c,[]),i.has(l)||i.set(l,[]),i.get(c).push(u),i.get(l).push(u)}JR(e,t,i);function r(o,a){let c=i.get(o)||[],l=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of c){if(t[d].used||t[d].dead)continue;if(!f)return d;let x=t[d],y=x.a===o?x.b:x.a,g=e.get(y),m=h.x-f.x,v=h.y-f.y,T=h.z-f.z,M=g.x-h.x,E=g.y-h.y,R=g.z-h.z,_=m*M+v*E+T*R;_>u&&(u=_,l=d)}return l}let s=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],c=[],l=o,u=t[l].a,h=u,f=null,d=!1,x=t.length+2;for(let y=0;y<x;y++){t[l].used=!0,c.push(l),a.push(e.get(u).clone());let g=t[l].a===u?t[l].b:t[l].a;if(g===h){d=!0;break}let m=r(g,u);if(m<0)break;f=u,u=g,l=m}d&&a.length>=3&&s.push(a)}return s}function eC(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new N(1,0,0):new N(0,1,0),i=new N().crossVectors(t,e).normalize(),r=new N().crossVectors(e,i).normalize();return{u:i,v:r,n:e}}function tC(n,e,t,i){return n.map(r=>{let s=r.clone().sub(e);return{x:s.dot(t),y:s.dot(i),p3:r}})}function nC(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function iC(n){return nC(n)<0&&n.reverse(),n}function $y(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){let o=t[r].y,a=t[s].y,c=t[r].x,l=t[s].x;o>e!=a>e&&n<(l-c)*(e-o)/(a-o+0)+c&&(i=!i)}return i}function kr(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function rC(n,e,t,i){let r=kr(n,e,t),s=kr(n,e,i),o=kr(t,i,n),a=kr(t,i,e);return r*s<0&&o*a<0}function Yy(n,e,t,i){let r=t.length;for(let s=0;s<r;s++){let o=(s+1)%r;if(!(i>=0&&(s===i||o===i))&&rC(n,e,t[s],t[o]))return!0}return!1}function sC(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],r=-1,s=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],x=n[(f+1)%o];if(d.y>i.y==x.y>i.y)continue;let y=x.y-d.y;if(Math.abs(y)<1e-15)continue;let g=(i.y-d.y)/y;if(g<-1e-8||g>1+1e-8)continue;let m=d.x+g*(x.x-d.x);m>=i.x-1e-8&&m<s&&(s=m,r=f)}let a=[];r>=0&&a.push(r,(r+1)%o);let c=0,l=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<l&&(l=d,c=f)}a.push(c);let u=-1;for(let f of a)if(!Yy(i,n[f],n,f)&&!Yy(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function Bp(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=Gs*Gs}function oC(n,e,t,i){if(Bp(n,e)||Bp(n,t)||Bp(n,i))return!1;let r=kr(e,t,n),s=kr(t,i,n),o=kr(i,e,n),a=r<-1e-14||s<-1e-14||o<-1e-14,c=r>1e-14||s>1e-14||o>1e-14;return!(a&&c)}function aC(n){let e=[];for(let r of n){let s=e[e.length-1];s&&(s.x-r.x)**2+(s.y-r.y)**2<Gs*Gs||e.push(r)}if(e.length>=2){let r=e[0],s=e[e.length-1];(r.x-s.x)**2+(r.y-s.y)**2<Gs*Gs&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let r=!1,s=e.length;for(let o=0;o<s;o++){let a=(o+s-1)%s,c=(o+1)%s,l=e[a],u=e[o],h=e[c],f=kr(l,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),r=!0;break}let d=!1;for(let x=0;x<s;x++)if(!(x===o||x===a||x===c)&&oC(e[x],l,u,h)){d=!0;break}if(!d){t.push([l.p3,u.p3,h.p3]),e.splice(o,1),r=!0;break}}if(!r)break}return e.length===3&&kr(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function lC(n,e,t){if(!n.length)return[];let{u:i,v:r,n:s}=eC(e.normal),o=n[0][0],a=n.map(u=>iC(tC(u,o,i,r))),c=a.map((u,h)=>{let f=u[0],d=0;for(let x=0;x<a.length;x++)x!==h&&$y(f.x,f.y,a[x])&&d++;return d}),l=[];for(let u=0;u<a.length;u++){if(c[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(c[d]!==c[u]+1||!$y(a[d][0].x,a[d][0].y,h))continue;let x=sC(h,a[d]);x&&(h=x)}let f=aC(h);for(let d of f)l.push(d.map(x=>x.clone().addScaledVector(s,t)))}return l}function Ky(n,e){return!n||!e?.length?[]:Zy(n,e).perPlane}function jy(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=QR(n),r=lC(i,e,KR+Math.max(0,t));if(!r.length)return new Float32Array(0);let s=new Float32Array(r.length*9),o=0;for(let[a,c,l]of r)s[o++]=a.x,s[o++]=a.y,s[o++]=a.z,s[o++]=c.x,s[o++]=c.y,s[o++]=c.z,s[o++]=l.x,s[o++]=l.y,s[o++]=l.z;return s}function Ry(n,e){return!n||!e?.length?new Float32Array(0):Zy(n,e).segments}function ch(n,e){if(!n?.length)return[];let t=new rt().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function cC(n){let e=new Float32Array(n.length*9),t=0;for(let[r,s,o]of n)e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new kt;return i.setAttribute("position",new Bt(e,3)),i.computeVertexNormals(),i}function Jy(n,e){if(!n.visible||!n.geometry)return null;let t=YR(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?$R(t,e):t;if(i.length===0)return null;let r=cC(i),s=zy(n.material,r),o=new ft(r,s);return o.name=n.name,o}var uC=5e-5;function mh(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function kp(n){return n?Array.isArray(n)?n[0]||null:n:null}function e_(n,e){let t;return n.isMeshPhysicalMaterial?t=new nn:n.isMeshStandardMaterial?t=new fn:t=new tn,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=Ft,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,Up(t,n.userData?.layerDepthBias||0),wl(t),t.needsUpdate=!0,t}function ph(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function hC(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function fC(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function t_(n,e){let t=new Set;for(let i of n){let r=i.parent;if(!r||t.has(r))continue;t.add(r);let s=fC(r,e);if(s)return s}return null}function Qy(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let r=kp(i.material);r&&(e.color&&r.color&&r.color.copy(e.color),r.opacity=typeof e.opacity=="number"?e.opacity:1,r.transparent=!!e.transparent,r.depthWrite=e.depthWrite!==!1,r.depthTest=e.depthTest!==!1,r.forceSinglePass=!!e.forceSinglePass,r.side=Ft,r.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function dC(n,e,t,i){let r=e.filter(d=>d?.isMesh&&d.visible&&!mh(d)&&d.geometry),s=t_(e,n);if(!r.length||!t.length){s&&ph(s);return}let o=r[0],a=o.parent;if(!a)return;s&&s.parent!==a&&ph(s);let c=s&&s.parent===a?s:new Tt;for(let d of[...c.children])ph(d);c.parent||(c.name=`${n}__caps`,c.userData.isSectionCap=!0,c.userData.capLabel=n,a.add(c));let l=kp(o.material);if(!l)return;a.updateWorldMatrix(!0,!0);let u=new rt().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of r){d.updateWorldMatrix(!0,!1);let x=ch(t,d.matrixWorld),y=Ky(d.geometry,x);for(let g=0;g<t.length;g++){let m=y[g]||[];for(let[v,T]of m)f[g].push([v.clone().applyMatrix4(d.matrixWorld),T.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let x=jy(f[d],t[d],h*uC);if(x.length<9)continue;for(let v=0;v<x.length;v+=3){let T=new N(x[v],x[v+1],x[v+2]).applyMatrix4(u);x[v]=T.x,x[v+1]=T.y,x[v+2]=T.z}let y=new kt;y.setAttribute("position",new Bt(x,3)),y.computeVertexNormals();let g=t.filter((v,T)=>T!==d),m=new ft(y,e_(l,g));m.name=`${n}__cap${d}`,m.userData.isSectionCap=!0,m.userData.capPlaneIndex=d,m.userData.capLabel=n,m.renderOrder=o.renderOrder,m.raycast=()=>{},c.add(m)}c.userData.bpCapSig=i,c.userData.bpCapMatUuid=l.uuid,c.visible=c.children.length>0}function zp(n,e){let t=e||[],i=hC(t);for(let[r,s]of n){let o=(s||[]).filter(u=>u&&!mh(u));if(!o.length)continue;let a=o.filter(u=>u.visible),c=t_(o,r);if(!t.length||!a.length){c&&ph(c);continue}let l=kp(a[0].material);if(c&&c.userData.bpCapSig===i&&l&&c.userData.bpCapMatUuid===l.uuid&&c.children.length){Qy(c,l,a[0].renderOrder||0);continue}if(c&&c.userData.bpCapSig===i&&l&&c.children.length){for(let u of c.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((y,g)=>g!==f):t;u.material=e_(l,d);let x=Array.isArray(h)?h:[h];for(let y of x)y&&(y.map=null),y?.dispose?.()}c.userData.bpCapMatUuid=l.uuid,Qy(c,l,a[0].renderOrder||0);continue}dC(r,o,t,i)}}var pC=2,mC=.45,n_=.015;function Hp(n){let e=new vt().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:n_};let t=new N;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),r=i>pC?mC/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:r,liftM:n_}}function i_(n,e=Hp(n)){let{cx:t,cz:i,minY:r,scale:s,liftM:o}=e;return n.position.set(-t*s,-r*s+o,-i*s),n.scale.setScalar(s),n.updateMatrixWorld(!0),e}var gC=`
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
.ifc-back, .ifc-show-all, .ifc-crumb, .ifc-action, .ifc-menu-btn {
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
.ifc-menu {
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
.ifc-menu[hidden] { display: none; }
/* .seg { display: flex } and .ifc-crumbs { display: flex } beat the HTML
   hidden attribute on their own; force the picker and path bar off when
   JS sets hidden (info screens, and the Groups tab has no path bar). */
.seg[hidden],
.ifc-tabs[hidden],
.ifc-crumbs[hidden] { display: none; }
.ifc-info-swap {
  appearance: none;
  display: block;
  width: 100%;
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
.ifc-actions, .ifc-menu { display: flex; flex-direction: column; gap: 0.35rem; }
.ifc-info .ifc-actions { margin-top: 0.75rem; }
.ifc-action, .ifc-menu-btn {
  min-height: 2.75rem;
  padding: 0.45rem 0.7rem;
  border-radius: var(--radius-sm);
  background: var(--fill);
  color: var(--fg);
  font-size: 1rem;
  text-align: center;
}
.ifc-action:active, .ifc-menu-btn:active { background: var(--fill-active); }
.ifc-menu { z-index: 8; padding: 0.45rem; touch-action: manipulation; }
.ifc-tabs {
  margin: 0.15rem 0 0.35rem;
}
.ifc-panes {
  position: relative;
  overflow: hidden;
}
.ifc-panes-track {
  display: flex;
  width: 200%;
  will-change: transform;
  transition: transform 0.32s ease;
}
.ifc-panes-track.is-groups {
  transform: translateX(-50%);
}
.ifc-panes-track.is-instant {
  transition: none;
}
.ifc-pane {
  box-sizing: border-box;
  flex: 0 0 50%;
  width: 50%;
  min-width: 0;
}
@media (prefers-reduced-motion: reduce) {
  .ifc-panes-track { transition: none; }
}
.ifc-info {
  padding: 0.2rem 0 1.25rem;
}
.ifc-info-title {
  margin: 0.15rem 0 0.7rem;
}
.ifc-info-section {
  margin-top: 0.85rem;
}
.ifc-info-link {
  appearance: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.05rem;
  width: 100%;
  min-height: 2.75rem;
  margin-top: 0.3rem;
  padding: 0.4rem 0.7rem;
  border: 0;
  border-radius: var(--radius-sm);
  background: var(--fill);
  color: var(--fg);
  font: inherit;
  text-align: left;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.ifc-info-link:active { background: var(--fill-active); }
`,r_=!1;function xC(){if(r_)return;r_=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=gC,document.head.appendChild(n)}function s_(n){xC();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),r=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function c(){return r.matches}function l(){return a}function u(){for(let Se of o)Se(a)}function h(Se){o.push(Se),Se(a)}function f(){if(!e||!i)return;let Se=document.getElementById("sheet-inspector"),Ke=document.getElementById("sheet-main");if(Se&&!Se.hidden&&Ke?.hidden){let C=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(C)&&C>0)return C}let Qe=document.getElementById("section-view"),Ee=document.getElementById("section-cuts"),L=t?.offsetHeight||22,me=16,pe=0;if(Qe&&(pe+=Qe.offsetHeight),Ee){let C=Ee.querySelector(".sheet-title"),w=Ee.querySelector(".cut-row");pe+=32,C&&(pe+=C.offsetHeight+8),w?pe+=w.offsetHeight:pe+=Ee.offsetHeight}let Te=L+pe+me,he=window.innerHeight||640,p=Math.round(he*.28),F=Math.round(he*.45),J=Math.max(p,Math.min(F,Math.round(Te)));return e.style.setProperty("--sheet-partial-h",`${J}px`),J}function d(){f(),!c()&&a==="partial"&&u()}function x(Se){let Ke=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${Se}`).trim(),Qe=parseFloat(Ke);return Number.isFinite(Qe)?Qe:0}function y(){let Se={top:0,right:0,bottom:0,left:0};if(!e)return Se;if(c()){if(a!=="open")return Se;let Qe=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(Qe)),bottom:0,left:0}}if(a!=="partial")return Se;let Ke=Math.round(le()+x("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,Ke)),left:0}}function g(Se,Ke={}){if(!e)return;(c()?["closed","open"]:["peek","partial","full"]).includes(Se)||(Se=c()?"open":"peek"),a=Se,e.dataset.detent=Se,e.classList.toggle("sheet-open",Se!=="peek"&&Se!=="closed"),document.body.classList.toggle("sheet-open",Se!=="peek"&&Se!=="closed"),M(),Ke.silent||u()}function m(){c()?g("open"):g("peek"),f()}let v=document.getElementById("top-chrome"),T=document.getElementById("sheet-toggle");if(!T&&v){let Se=v.querySelector(".top-chrome-end");Se||(Se=document.createElement("div"),Se.className="top-chrome-end",v.append(Se)),T=document.createElement("button"),T.type="button",T.id="sheet-toggle",T.className="chrome-btn sheet-toggle",Se.append(T)}function M(){if(!T)return;let Se=a==="open";T.setAttribute("aria-expanded",Se?"true":"false"),T.setAttribute("aria-label",Se?"Hide controls":"Show controls"),T.title=Se?"Hide controls":"Show controls",T.textContent=Se?"\u203A":"\u2039"}T?.addEventListener("click",()=>{c()&&g(a==="open"?"closed":"open")});let E=!1,R=null,_=!1,A=!1,U=0,k=0,Y=0,re=0,Q="peek",B=0,K=0,z=0,ie=0,ge=0,ae=null,ne=12,fe=28,we='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function De(){return Math.max(t?.offsetHeight||34,34)+8}function le(){return f()||window.innerHeight*.38}function Me(){let Se=window.innerHeight||640;return Math.min(Se*.92,Se-72)}function de(){return e?.offsetWidth||0}function ee(Se){return Se instanceof Element?!!Se.closest(we):!1}function ue(){if(c()){g(a==="open"?"closed":"open");return}g(a==="peek"?"partial":a==="partial"?"full":"peek")}function Ce(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Fe(Se,Ke,Qe){if(e){E=!0,_=!1,R=Ke,A=!1,Q=a,U=Se.clientY,k=Se.clientX,B=U,K=k,z=performance.now(),ie=0,ge=0,re=Qe,ae=Se.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${re}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(Se.pointerId)}catch{}}}function Ne(Se){if(!(!e||!t)&&!(Se.target!==t&&!t.contains(Se.target)&&Se.target!==e)){E=!0,_=!1,R="narrow",A=!1,Q=a,e.classList.add("is-dragging"),U=Se.clientY,k=Se.clientX,B=U,K=k,z=performance.now(),ie=0,ge=0,Y=e.getBoundingClientRect().height,ae=Se.pointerId;try{t.setPointerCapture(Se.pointerId)}catch{}Se.preventDefault()}}function Ue(Se){if(!e||Se.pointerType==="mouse"&&Se.button!==0||Se.target instanceof Element&&Se.target.closest(".chrome-btn"))return;let Ke=de();if(a==="closed"){let Qe=window.innerWidth-fe-x("r");if(Se.clientX<Qe)return;Fe(Se,"wide-open",Ke),Se.preventDefault();return}e.contains(Se.target)&&(ee(Se.target)||(E=!0,_=!0,R="wide-close",A=!1,Q=a,U=Se.clientY,k=Se.clientX,B=U,K=k,z=performance.now(),ie=0,ge=0,re=0,ae=Se.pointerId))}function qe(Se){c()?Ue(Se):Ne(Se)}function Be(Se){if(!E||!e||ae!=null&&Se.pointerId!==ae)return;let Ke=performance.now(),Qe=Math.max(1,Ke-z),Ee=Math.hypot(Se.clientX-k,Se.clientY-U);if(_){if(Ee<=ne)return;let Te=Se.clientX-k,he=Se.clientY-U;if(Math.abs(Te)<Math.abs(he)*1.15||Te<=0){E=!1,_=!1,R=null,ae=null;return}_=!1,A=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(Se.pointerId)}catch{}Se.preventDefault()}if(Ee>ne&&(A=!0),R==="narrow"){let Te=U-Se.clientY;ie=(B-Se.clientY)/Qe*1e3,B=Se.clientY,z=Ke;let he=De(),p=Me(),F=Math.max(he,Math.min(p,Y+Te));e.style.height=`${F}px`;return}let L=Se.clientX-k;ge=(Se.clientX-K)/Qe*1e3,K=Se.clientX,z=Ke;let me=de(),pe=Math.max(0,Math.min(me,re+L));e.style.transform=`translateX(${pe}px)`}function ut(Se,Ke){let Qe=[{name:"peek",h:De()},{name:"partial",h:le()},{name:"full",h:Me()}],Ee=Math.max(0,Qe.findIndex(p=>p.name===Q)),L=Qe[Ee].h;if(Math.abs(Se-L)<36&&Math.abs(Ke)<1100)return Q;let me=Se+Ke*.05,pe=(Qe[0].h+Qe[1].h)/2,Te=(Qe[1].h+Qe[2].h)/2,he=me<pe?0:me<Te?1:2;if(he>Ee+1&&(he=Ee+1),he<Ee-1&&(he=Ee-1),he===2&&Ee<2){let p=Te+(Qe[2].h-Te)*.25;Se<p&&Ke<1400&&(he=1)}return Qe[he].name}function it(Se,Ke){let Qe=de();return Qe<=0||Math.abs(Se-(Q==="closed"?Qe:0))<28&&Math.abs(Ke)<800?Q:Ke>900?"closed":Ke<-900?"open":Se>Qe*.45?"closed":"open"}function st(Se){if(!E||!e||ae!=null&&Se.pointerId!==ae)return;let Ke=R,Qe=_;if(E=!1,_=!1,R=null,ae=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),Qe&&!A)return;if(!A){Ke==="narrow"?(e.style.height="",ue()):Ke==="wide-open"?(Ce(),g("open")):Ce();return}if(Ke==="narrow"){let me=e.getBoundingClientRect().height;e.style.height="",g(ut(me,ie));return}let Ee=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),L=Ee?parseFloat(Ee[1]):0;Ce(),g(it(L,ge))}t?.addEventListener("pointerdown",Se=>{c()||qe(Se)}),t?.addEventListener("pointermove",Be),t?.addEventListener("pointerup",st),t?.addEventListener("pointercancel",st),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",Se=>{c()&&Ue(Se)},{capture:!0}),document.addEventListener("pointermove",Be,{capture:!0}),document.addEventListener("pointerup",st,{capture:!0}),document.addEventListener("pointercancel",st,{capture:!0});let Ye=()=>{e&&(e.style.height=""),Ce(),i&&(i.style.overflow=""),m()};r.addEventListener?r.addEventListener("change",Ye):r.addListener(Ye);function mt(){n(s.matches)}return mt(),s.addEventListener?s.addEventListener("change",mt):s.addListener(mt),window.addEventListener("resize",()=>{f(),u()}),m(),M(),{getDetent:l,getSafeInsets:y,onDetentChange:h,refreshPartialHeight:d,setDetent:g}}function gh(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,r=!!n.thumbScrubOnly,s=Al(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let c=document.createElement("div");c.className="coop-range-fill";let l=document.createElement("div");l.className="coop-range-thumb",a.append(c,l),o.append(a);let u=10,h=14,f=null,d=0,x=0,y=!1,g=!1,m=!1,v=!0;function T(){let B=`${(t===e?0:(s-e)/(t-e))*100}%`;c.style.width=B,l.style.left=B,o.setAttribute("aria-valuenow",String(s));let K=n.formatAriaValue?.(s)??String(s);o.setAttribute("aria-valuetext",K)}function M(Q,B){let K=typeof l.getBoundingClientRect=="function"?l.getBoundingClientRect():null;return!K||!(K.width>0)||!(K.height>0)?!0:Q>=K.left-h&&Q<=K.right+h&&B>=K.top-h&&B<=K.bottom+h}function E(Q,B="input"){let K=yC(Al(Q,e,t),e,t,i);if(K===s&&B==="silent"){T();return}s=K,T(),(B==="input"||B==="change")&&n.onInput?.(s),B==="change"&&n.onChange?.(s)}function R(Q){let B=a.getBoundingClientRect(),K=Math.max(B.width,1),z=Al((Q-B.left)/K,0,1);return e+z*(t-e)}function _(Q){if(f==null)return;let B=g;f=null,y=!1,g=!1,v=!0,B&&n.onScrubEnd?.(),Q&&B&&n.onChange?.(s)}function A(Q){f==null&&(Q.pointerType==="mouse"&&Q.button!==0||(f=Q.pointerId,d=Q.clientX,x=Q.clientY,m=!1,y=!1,g=!1,v=!r||M(Q.clientX,Q.clientY)))}function U(Q){if(f!==Q.pointerId)return;let B=Q.clientX-d,K=Q.clientY-x;if(!m&&Math.hypot(B,K)>u&&(m=!0),!y){if(!m)return;if(Q.pointerType==="touch"&&Math.abs(K)>=Math.abs(B)){_(!1);return}if(!v){_(!1);return}y=!0,g=!0,n.onScrubStart?.();try{o.setPointerCapture(Q.pointerId)}catch{}}E(R(Q.clientX),"input"),Q.preventDefault()}function k(Q){if(f===Q.pointerId){if(!m&&!g){f=null,y=!1,g=!1,v=!0,n.onTap?.();return}_(!0)}}function Y(Q){f===Q.pointerId&&_(!1)}function re(Q){let B=t-e,K=i>0?i:B/100,z=B/10,ie=s;switch(Q.key){case"ArrowLeft":case"ArrowDown":ie=s-K;break;case"ArrowRight":case"ArrowUp":ie=s+K;break;case"PageDown":ie=s-z;break;case"PageUp":ie=s+z;break;case"Home":ie=e;break;case"End":ie=t;break;case"Enter":case" ":Q.preventDefault(),n.onTap?.();return;default:return}Q.preventDefault(),E(ie,"change")}return o.addEventListener("pointerdown",A),o.addEventListener("pointermove",U),o.addEventListener("pointerup",k),o.addEventListener("pointercancel",Y),o.addEventListener("keydown",re),T(),{el:o,get value(){return s},set value(Q){E(Q,"silent")},refresh(){T()}}}function Al(n,e,t){return Math.min(t,Math.max(e,n))}function yC(n,e,t,i){if(!(i>0))return Al(n,e,t);let r=Math.round((n-e)/i),s=Number((e+r*i).toPrecision(12));return Al(s,e,t)}var o_="blueprints.locale",_C={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",worktop:"Worktop",hob:"Hob",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},vC={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",worktop:"Pracovn\xED deska",hob:"Varn\xE1 deska",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},bC={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.shaded":"Shaded","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.frame":"Frame","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","ui.spatial":"Spatial","ui.groups":"Groups","ui.info":"Info","ui.parentGroups":"Parent groups","ui.childGroups":"Child groups","ui.childElements":"Child elements","home.title":"Home","home.live":"Live","home.off":"Off","home.on":"On","home.statusOff":"Offline model. Taps only change this view.","home.statusConnecting":"Connecting to Home\u2026","home.statusLive":"Live: state from Home. Taps send commands.","home.statusLiveNoSim":"Live: state from Home. Rocker presses are off on this server.","home.statusUnreachable":"Home unreachable. Showing the offline model; retrying.","home.failed":"Home refused the command","home.deviceOffline":"Device offline (last known state)","home.unknown":"Unknown","home.level":"Level","home.warm":"Warm","home.cool":"Cool","home.lastEvent":"Last event","home.noEvents":"No presses yet","home.contactClosed":"Closed (contact)","home.contactOpen":"Open (no contact)","home.occupied":"Occupied","home.vacant":"Vacant","home.closedPct":"Closed","home.up":"Up","home.down":"Down","home.stop":"Stop","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},MC={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.shaded":"St\xEDnovan\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.frame":"P\u0159ej\xEDt k prvku","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","ui.spatial":"Prostor","ui.groups":"Skupiny","ui.info":"Info","ui.parentGroups":"Nad\u0159azen\xE9 skupiny","ui.childGroups":"Podskupiny","ui.childElements":"Prvky","home.title":"D\u016Fm","home.live":"\u017Div\u011B","home.off":"Vyp.","home.on":"Zap.","home.statusOff":"Offline model. Klepnut\xED m\u011Bn\xED jen tento pohled.","home.statusConnecting":"P\u0159ipojuji se k Home\u2026","home.statusLive":"\u017Div\u011B: stav z Home. Klepnut\xED pos\xEDlaj\xED p\u0159\xEDkazy.","home.statusLiveNoSim":"\u017Div\u011B: stav z Home. Stisky vyp\xEDna\u010D\u016F jsou na tomto serveru vypnut\xE9.","home.statusUnreachable":"Home nedostupn\xFD. Zobrazuji offline model a zkou\u0161\xEDm znovu.","home.failed":"Home p\u0159\xEDkaz odm\xEDtl","home.deviceOffline":"Za\u0159\xEDzen\xED offline (posledn\xED zn\xE1m\xFD stav)","home.unknown":"Nezn\xE1m\xFD","home.level":"Jas","home.warm":"Tepl\xE1","home.cool":"Studen\xE1","home.lastEvent":"Posledn\xED ud\xE1lost","home.noEvents":"Zat\xEDm bez stisku","home.contactClosed":"Zav\u0159eno (kontakt)","home.contactOpen":"Otev\u0159eno (bez kontaktu)","home.occupied":"Obsazeno","home.vacant":"Volno","home.closedPct":"Zav\u0159eno","home.up":"Nahoru","home.down":"Dol\u016F","home.stop":"Stop","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},Vp={en:{...bC,..._C},cs:{...MC,...vC}},jo=a_(),Gp=new Set;function a_(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function SC(){try{let n=localStorage.getItem(o_);if(n==="en"||n==="cs")return n}catch{}return a_()}function wC(n){try{localStorage.setItem(o_,n)}catch{}}function xh(){return jo}function l_(n){if(!(n!=="en"&&n!=="cs")&&n!==jo){jo=n,wC(n);for(let e of Gp)try{e()}catch{}}}function Wp(n){return Gp.add(n),()=>Gp.delete(n)}function c_(){return jo=SC(),jo}function Ut(n){let e=Vp[jo]||Vp.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=Vp.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function Xp(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Ut(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Ut(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Ut(i))})}function EC(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kn={},yh={},hs={},u_;function Rl(){if(u_)return hs;u_=1;function n(o){return typeof o>"u"||o===null}function e(o){return typeof o=="object"&&o!==null}function t(o){return Array.isArray(o)?o:n(o)?[]:[o]}function i(o,a){if(a){let c=Object.keys(a);for(let l=0,u=c.length;l<u;l+=1){let h=c[l];o[h]=a[h]}}return o}function r(o,a){let c="";for(let l=0;l<a;l+=1)c+=o;return c}function s(o){return o===0&&Number.NEGATIVE_INFINITY===1/o}return hs.isNothing=n,hs.isObject=e,hs.toArray=t,hs.repeat=r,hs.isNegativeZero=s,hs.extend=i,hs}var qp,h_;function Cl(){if(h_)return qp;h_=1;function n(t,i){let r="",s=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(r+='in "'+t.mark.name+'" '),r+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!i&&t.mark.snippet&&(r+=`

`+t.mark.snippet),s+" "+r):s}function e(t,i){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=i,this.message=n(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e.prototype.toString=function(i){return this.name+": "+n(this,i)},qp=e,qp}var $p,f_;function TC(){if(f_)return $p;f_=1;let n=Rl();function e(r,s,o,a,c){let l="",u="",h=Math.floor(c/2)-1;return a-s>h&&(l=" ... ",s=a-h+l.length),o-a>h&&(u=" ...",o=a+h-u.length),{str:l+r.slice(s,o).replace(/\t/g,"\u2192")+u,pos:a-s+l.length}}function t(r,s){return n.repeat(" ",s-r.length)+r}function i(r,s){if(s=Object.create(s||null),!r.buffer)return null;s.maxLength||(s.maxLength=79),typeof s.indent!="number"&&(s.indent=1),typeof s.linesBefore!="number"&&(s.linesBefore=3),typeof s.linesAfter!="number"&&(s.linesAfter=2);let o=/\r?\n|\r|\0/g,a=[0],c=[],l,u=-1;for(;l=o.exec(r.buffer);)c.push(l.index),a.push(l.index+l[0].length),r.position<=l.index&&u<0&&(u=a.length-2);u<0&&(u=a.length-1);let h="",f=Math.min(r.line+s.linesAfter,c.length).toString().length,d=s.maxLength-(s.indent+f+3);for(let y=1;y<=s.linesBefore&&!(u-y<0);y++){let g=e(r.buffer,a[u-y],c[u-y],r.position-(a[u]-a[u-y]),d);h=n.repeat(" ",s.indent)+t((r.line-y+1).toString(),f)+" | "+g.str+`
`+h}let x=e(r.buffer,a[u],c[u],r.position,d);h+=n.repeat(" ",s.indent)+t((r.line+1).toString(),f)+" | "+x.str+`
`,h+=n.repeat("-",s.indent+f+3+x.pos)+`^
`;for(let y=1;y<=s.linesAfter&&!(u+y>=c.length);y++){let g=e(r.buffer,a[u+y],c[u+y],r.position-(a[u]-a[u+y]),d);h+=n.repeat(" ",s.indent)+t((r.line+y+1).toString(),f)+" | "+g.str+`
`}return h.replace(/\n$/,"")}return $p=i,$p}var Yp,d_;function Yn(){if(d_)return Yp;d_=1;let n=Cl(),e=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function i(s){let o={};return s!==null&&Object.keys(s).forEach(function(a){s[a].forEach(function(c){o[String(c)]=a})}),o}function r(s,o){if(o=o||{},Object.keys(o).forEach(function(a){if(e.indexOf(a)===-1)throw new n('Unknown option "'+a+'" is met in definition of "'+s+'" YAML type.')}),this.options=o,this.tag=s,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(a){return a},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.representName=o.representName||null,this.defaultStyle=o.defaultStyle||null,this.multi=o.multi||!1,this.styleAliases=i(o.styleAliases||null),t.indexOf(this.kind)===-1)throw new n('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}return Yp=r,Yp}var Zp,p_;function O_(){if(p_)return Zp;p_=1;let n=Cl(),e=Yn();function t(s,o){let a=[];return s[o].forEach(function(c){let l=a.length;a.forEach(function(u,h){u.tag===c.tag&&u.kind===c.kind&&u.multi===c.multi&&(l=h)}),a[l]=c}),a}function i(){let s={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function o(a){a.multi?(s.multi[a.kind].push(a),s.multi.fallback.push(a)):s[a.kind][a.tag]=s.fallback[a.tag]=a}for(let a=0,c=arguments.length;a<c;a+=1)arguments[a].forEach(o);return s}function r(s){return this.extend(s)}return r.prototype.extend=function(o){let a=[],c=[];if(o instanceof e)c.push(o);else if(Array.isArray(o))c=c.concat(o);else if(o&&(Array.isArray(o.implicit)||Array.isArray(o.explicit)))o.implicit&&(a=a.concat(o.implicit)),o.explicit&&(c=c.concat(o.explicit));else throw new n("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");a.forEach(function(u){if(!(u instanceof e))throw new n("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new n("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new n("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(u){if(!(u instanceof e))throw new n("Specified list of YAML types (or a single Type object) contains a non-Type object.")});let l=Object.create(r.prototype);return l.implicit=(this.implicit||[]).concat(a),l.explicit=(this.explicit||[]).concat(c),l.compiledImplicit=t(l,"implicit"),l.compiledExplicit=t(l,"explicit"),l.compiledTypeMap=i(l.compiledImplicit,l.compiledExplicit),l},Zp=r,Zp}var Kp,m_;function F_(){if(m_)return Kp;m_=1;let n=Yn();return Kp=new n("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Kp}var jp,g_;function U_(){if(g_)return jp;g_=1;let n=Yn();return jp=new n("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),jp}var Jp,x_;function B_(){if(x_)return Jp;x_=1;let n=Yn();return Jp=new n("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Jp}var Qp,y_;function k_(){if(y_)return Qp;y_=1;let n=O_();return Qp=new n({explicit:[F_(),U_(),B_()]}),Qp}var em,__;function z_(){if(__)return em;__=1;let n=Yn();function e(r){if(r===null)return!0;let s=r.length;return s===1&&r==="~"||s===4&&(r==="null"||r==="Null"||r==="NULL")}function t(){return null}function i(r){return r===null}return em=new n("tag:yaml.org,2002:null",{kind:"scalar",resolve:e,construct:t,predicate:i,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),em}var tm,v_;function H_(){if(v_)return tm;v_=1;let n=Yn();function e(r){if(r===null)return!1;let s=r.length;return s===4&&(r==="true"||r==="True"||r==="TRUE")||s===5&&(r==="false"||r==="False"||r==="FALSE")}function t(r){return r==="true"||r==="True"||r==="TRUE"}function i(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return tm=new n("tag:yaml.org,2002:bool",{kind:"scalar",resolve:e,construct:t,predicate:i,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),tm}var nm,b_;function V_(){if(b_)return nm;b_=1;let n=Rl(),e=Yn();function t(l){return l>=48&&l<=57||l>=65&&l<=70||l>=97&&l<=102}function i(l){return l>=48&&l<=55}function r(l){return l>=48&&l<=57}function s(l){if(l===null)return!1;let u=l.length,h=0,f=!1;if(!u)return!1;let d=l[h];if((d==="-"||d==="+")&&(d=l[++h]),d==="0"){if(h+1===u)return!0;if(d=l[++h],d==="b"){for(h++;h<u;h++){if(d=l[h],d!=="0"&&d!=="1")return!1;f=!0}return f&&isFinite(o(l))}if(d==="x"){for(h++;h<u;h++){if(!t(l.charCodeAt(h)))return!1;f=!0}return f&&isFinite(o(l))}if(d==="o"){for(h++;h<u;h++){if(!i(l.charCodeAt(h)))return!1;f=!0}return f&&isFinite(o(l))}}for(;h<u;h++){if(!r(l.charCodeAt(h)))return!1;f=!0}return f?isFinite(o(l)):!1}function o(l){let u=l,h=1,f=u[0];if((f==="-"||f==="+")&&(f==="-"&&(h=-1),u=u.slice(1),f=u[0]),u==="0")return 0;if(f==="0"){if(u[1]==="b")return h*parseInt(u.slice(2),2);if(u[1]==="x")return h*parseInt(u.slice(2),16);if(u[1]==="o")return h*parseInt(u.slice(2),8)}return h*parseInt(u,10)}function a(l){return o(l)}function c(l){return Object.prototype.toString.call(l)==="[object Number]"&&l%1===0&&!n.isNegativeZero(l)}return nm=new e("tag:yaml.org,2002:int",{kind:"scalar",resolve:s,construct:a,predicate:c,represent:{binary:function(l){return l>=0?"0b"+l.toString(2):"-0b"+l.toString(2).slice(1)},octal:function(l){return l>=0?"0o"+l.toString(8):"-0o"+l.toString(8).slice(1)},decimal:function(l){return l.toString(10)},hexadecimal:function(l){return l>=0?"0x"+l.toString(16).toUpperCase():"-0x"+l.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),nm}var im,M_;function G_(){if(M_)return im;M_=1;let n=Rl(),e=Yn(),t=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),i=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(l){return l===null||!t.test(l)?!1:isFinite(parseFloat(l,10))?!0:i.test(l)}function s(l){let u=l.toLowerCase(),h=u[0]==="-"?-1:1;return"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?h===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:h*parseFloat(u,10)}let o=/^[-+]?[0-9]+e/;function a(l,u){if(isNaN(l))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===l)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===l)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(n.isNegativeZero(l))return"-0.0";let h=l.toString(10);return o.test(h)?h.replace("e",".e"):h}function c(l){return Object.prototype.toString.call(l)==="[object Number]"&&(l%1!==0||n.isNegativeZero(l))}return im=new e("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:s,predicate:c,represent:a,defaultStyle:"lowercase"}),im}var rm,S_;function W_(){return S_||(S_=1,rm=k_().extend({implicit:[z_(),H_(),V_(),G_()]})),rm}var sm,w_;function X_(){return w_||(w_=1,sm=W_()),sm}var om,E_;function q_(){if(E_)return om;E_=1;let n=Yn(),e=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function i(o){return o===null?!1:e.exec(o)!==null||t.exec(o)!==null}function r(o){let a=0,c=null,l=e.exec(o);if(l===null&&(l=t.exec(o)),l===null)throw new Error("Date resolve error");let u=+l[1],h=+l[2]-1,f=+l[3];if(!l[4])return new Date(Date.UTC(u,h,f));let d=+l[4],x=+l[5],y=+l[6];if(l[7]){for(a=l[7].slice(0,3);a.length<3;)a+="0";a=+a}if(l[9]){let m=+l[10],v=+(l[11]||0);c=(m*60+v)*6e4,l[9]==="-"&&(c=-c)}let g=new Date(Date.UTC(u,h,f,d,x,y,a));return c&&g.setTime(g.getTime()-c),g}function s(o){return o.toISOString()}return om=new n("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:i,construct:r,instanceOf:Date,represent:s}),om}var am,T_;function $_(){if(T_)return am;T_=1;let n=Yn();function e(t){return t==="<<"||t===null}return am=new n("tag:yaml.org,2002:merge",{kind:"scalar",resolve:e}),am}var lm,A_;function Y_(){if(A_)return lm;A_=1;let n=Yn(),e=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function t(o){if(o===null)return!1;let a=0,c=o.length,l=e;for(let u=0;u<c;u++){let h=l.indexOf(o.charAt(u));if(!(h>64)){if(h<0)return!1;a+=6}}return a%8===0}function i(o){let a=o.replace(/[\r\n=]/g,""),c=a.length,l=e,u=0,h=[];for(let d=0;d<c;d++)d%4===0&&d&&(h.push(u>>16&255),h.push(u>>8&255),h.push(u&255)),u=u<<6|l.indexOf(a.charAt(d));let f=c%4*6;return f===0?(h.push(u>>16&255),h.push(u>>8&255),h.push(u&255)):f===18?(h.push(u>>10&255),h.push(u>>2&255)):f===12&&h.push(u>>4&255),new Uint8Array(h)}function r(o){let a="",c=0,l=o.length,u=e;for(let f=0;f<l;f++)f%3===0&&f&&(a+=u[c>>18&63],a+=u[c>>12&63],a+=u[c>>6&63],a+=u[c&63]),c=(c<<8)+o[f];let h=l%3;return h===0?(a+=u[c>>18&63],a+=u[c>>12&63],a+=u[c>>6&63],a+=u[c&63]):h===2?(a+=u[c>>10&63],a+=u[c>>4&63],a+=u[c<<2&63],a+=u[64]):h===1&&(a+=u[c>>2&63],a+=u[c<<4&63],a+=u[64],a+=u[64]),a}function s(o){return Object.prototype.toString.call(o)==="[object Uint8Array]"}return lm=new n("tag:yaml.org,2002:binary",{kind:"scalar",resolve:t,construct:i,predicate:s,represent:r}),lm}var cm,R_;function Z_(){if(R_)return cm;R_=1;let n=Yn(),e=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function i(s){if(s===null)return!0;let o={},a=s;for(let c=0,l=a.length;c<l;c+=1){let u=a[c],h=!1;if(t.call(u)!=="[object Object]")return!1;let f;for(f in u)if(e.call(u,f))if(!h)h=!0;else return!1;if(!h||e.call(o,f))return!1;Object.defineProperty(o,f,{value:!0})}return!0}function r(s){return s!==null?s:[]}return cm=new n("tag:yaml.org,2002:omap",{kind:"sequence",resolve:i,construct:r}),cm}var um,C_;function K_(){if(C_)return um;C_=1;let n=Yn(),e=Object.prototype.toString;function t(r){if(r===null)return!0;let s=r,o=new Array(s.length);for(let a=0,c=s.length;a<c;a+=1){let l=s[a];if(e.call(l)!=="[object Object]")return!1;let u=Object.keys(l);if(u.length!==1)return!1;o[a]=[u[0],l[u[0]]]}return!0}function i(r){if(r===null)return[];let s=r,o=new Array(s.length);for(let a=0,c=s.length;a<c;a+=1){let l=s[a],u=Object.keys(l);o[a]=[u[0],l[u[0]]]}return o}return um=new n("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:i}),um}var hm,P_;function j_(){if(P_)return hm;P_=1;let n=Yn(),e=Object.prototype.hasOwnProperty;function t(r){if(r===null)return!0;let s=r;for(let o in s)if(e.call(s,o)&&s[o]!==null)return!1;return!0}function i(r){return r!==null?r:{}}return hm=new n("tag:yaml.org,2002:set",{kind:"mapping",resolve:t,construct:i}),hm}var fm,I_;function pm(){return I_||(I_=1,fm=X_().extend({implicit:[q_(),$_()],explicit:[Y_(),Z_(),K_(),j_()]})),fm}var L_;function AC(){if(L_)return yh;L_=1;let n=Rl(),e=Cl(),t=TC(),i=pm(),r=Object.prototype.hasOwnProperty,s=1,o=2,a=3,c=4,l=1,u=2,h=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,d=/[\x85\u2028\u2029]/,x=/[,\[\]{}]/,y=/^(?:!|!!|![0-9A-Za-z-]+!)$/,g=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function m(p){return Object.prototype.toString.call(p)}function v(p){return p===10||p===13}function T(p){return p===9||p===32}function M(p){return p===9||p===32||p===10||p===13}function E(p){return p===44||p===91||p===93||p===123||p===125}function R(p){if(p>=48&&p<=57)return p-48;let F=p|32;return F>=97&&F<=102?F-97+10:-1}function _(p){return p===120?2:p===117?4:p===85?8:0}function A(p){return p>=48&&p<=57?p-48:-1}function U(p){switch(p){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"\x85";case 95:return"\xA0";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function k(p){return p<=65535?String.fromCharCode(p):String.fromCharCode((p-65536>>10)+55296,(p-65536&1023)+56320)}function Y(p,F,J){F==="__proto__"?Object.defineProperty(p,F,{configurable:!0,enumerable:!0,writable:!0,value:J}):p[F]=J}let re=new Array(256),Q=new Array(256);for(let p=0;p<256;p++)re[p]=U(p)?1:0,Q[p]=U(p);function B(p,F){this.input=p,this.filename=F.filename||null,this.schema=F.schema||i,this.onWarning=F.onWarning||null,this.legacy=F.legacy||!1,this.json=F.json||!1,this.listener=F.listener||null,this.maxDepth=typeof F.maxDepth=="number"?F.maxDepth:100,this.maxTotalMergeKeys=typeof F.maxTotalMergeKeys=="number"?F.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=p.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function K(p,F){let J={name:p.filename,buffer:p.input.slice(0,-1),position:p.position,line:p.line,column:p.position-p.lineStart};return J.snippet=t(J),new e(F,J)}function z(p,F){throw K(p,F)}function ie(p,F){p.onWarning&&p.onWarning.call(null,K(p,F))}function ge(p,F,J){let C=p.anchorMapTransactions;if(C.length!==0){let w=C[C.length-1];r.call(w,F)||(w[F]={existed:r.call(p.anchorMap,F),value:p.anchorMap[F]})}p.anchorMap[F]=J}function ae(p){p.anchorMapTransactions.push(Object.create(null))}function ne(p){let F=p.anchorMapTransactions.pop(),J=p.anchorMapTransactions;if(J.length===0)return;let C=J[J.length-1],w=Object.keys(F);for(let S=0,V=w.length;S<V;S+=1){let H=w[S];r.call(C,H)||(C[H]=F[H])}}function fe(p){let F=p.anchorMapTransactions.pop(),J=Object.keys(F);for(let C=J.length-1;C>=0;C-=1){let w=F[J[C]];w.existed?p.anchorMap[J[C]]=w.value:delete p.anchorMap[J[C]]}}function we(p){return{position:p.position,line:p.line,lineStart:p.lineStart,lineIndent:p.lineIndent,firstTabInLine:p.firstTabInLine,tag:p.tag,anchor:p.anchor,kind:p.kind,result:p.result}}function De(p,F){p.position=F.position,p.line=F.line,p.lineStart=F.lineStart,p.lineIndent=F.lineIndent,p.firstTabInLine=F.firstTabInLine,p.tag=F.tag,p.anchor=F.anchor,p.kind=F.kind,p.result=F.result}let le={YAML:function(F,J,C){F.version!==null&&z(F,"duplication of %YAML directive"),C.length!==1&&z(F,"YAML directive accepts exactly one argument");let w=/^([0-9]+)\.([0-9]+)$/.exec(C[0]);w===null&&z(F,"ill-formed argument of the YAML directive");let S=parseInt(w[1],10),V=parseInt(w[2],10);S!==1&&z(F,"unacceptable YAML version of the document"),F.version=C[0],F.checkLineBreaks=V<2,V!==1&&V!==2&&ie(F,"unsupported YAML version of the document")},TAG:function(F,J,C){let w;C.length!==2&&z(F,"TAG directive accepts exactly two arguments");let S=C[0];w=C[1],y.test(S)||z(F,"ill-formed tag handle (first argument) of the TAG directive"),r.call(F.tagMap,S)&&z(F,'there is a previously declared suffix for "'+S+'" tag handle'),g.test(w)||z(F,"ill-formed tag prefix (second argument) of the TAG directive");try{w=decodeURIComponent(w)}catch{z(F,"tag prefix is malformed: "+w)}F.tagMap[S]=w}};function Me(p,F,J,C){if(F<J){let w=p.input.slice(F,J);if(C)for(let S=0,V=w.length;S<V;S+=1){let H=w.charCodeAt(S);H===9||H>=32&&H<=1114111||z(p,"expected valid JSON character")}else f.test(w)&&z(p,"the stream contains non-printable characters");p.result+=w}}function de(p){p.totalMergeKeys++,p.maxTotalMergeKeys!==-1&&p.totalMergeKeys>p.maxTotalMergeKeys&&z(p,"merge keys exceeded maxTotalMergeKeys ("+p.maxTotalMergeKeys+")")}function ee(p,F,J,C){n.isObject(J)||z(p,"cannot merge mappings; the provided source object is unacceptable"),de(p);let w=Object.keys(J);for(let S=0,V=w.length;S<V;S+=1){let H=w[S];de(p),r.call(F,H)||(Y(F,H,J[H]),C[H]=!0)}}function ue(p,F,J,C,w,S,V,H,j){if(Array.isArray(w)){w=Array.prototype.slice.call(w);for(let te=0,Z=w.length;te<Z;te+=1)Array.isArray(w[te])&&z(p,"nested arrays are not supported inside keys"),typeof w=="object"&&m(w[te])==="[object Object]"&&(w[te]="[object Object]")}if(typeof w=="object"&&m(w)==="[object Object]"&&(w="[object Object]"),w=String(w),F===null&&(F={}),C==="tag:yaml.org,2002:merge")if(Array.isArray(S)){S.length>100&&z(p,"abnormal merge sequence size");for(let te=0,Z=S.length;te<Z;te+=1)ee(p,F,S[te],J)}else ee(p,F,S,J);else!p.json&&!r.call(J,w)&&r.call(F,w)&&(p.line=V||p.line,p.lineStart=H||p.lineStart,p.position=j||p.position,z(p,"duplicated mapping key")),Y(F,w,S),delete J[w];return F}function Ce(p){let F=p.input.charCodeAt(p.position);F===10?p.position++:F===13?(p.position++,p.input.charCodeAt(p.position)===10&&p.position++):z(p,"a line break is expected"),p.line+=1,p.lineStart=p.position,p.firstTabInLine=-1}function Fe(p,F,J){let C=0,w=p.input.charCodeAt(p.position);for(;w!==0;){for(;T(w);)w===9&&p.firstTabInLine===-1&&(p.firstTabInLine=p.position),w=p.input.charCodeAt(++p.position);if(F&&w===35)do w=p.input.charCodeAt(++p.position);while(w!==10&&w!==13&&w!==0);if(v(w))for(Ce(p),w=p.input.charCodeAt(p.position),C++,p.lineIndent=0;w===32;)p.lineIndent++,w=p.input.charCodeAt(++p.position);else break}return J!==-1&&C!==0&&p.lineIndent<J&&ie(p,"deficient indentation"),C}function Ne(p){let F=p.position,J=p.input.charCodeAt(F);return!!((J===45||J===46)&&J===p.input.charCodeAt(F+1)&&J===p.input.charCodeAt(F+2)&&(F+=3,J=p.input.charCodeAt(F),J===0||M(J)))}function Ue(p,F){F===1?p.result+=" ":F>1&&(p.result+=n.repeat(`
`,F-1))}function qe(p,F,J){let C,w,S,V,H,j,te=p.kind,Z=p.result,W=p.input.charCodeAt(p.position);if(M(W)||E(W)||W===35||W===38||W===42||W===33||W===124||W===62||W===39||W===34||W===37||W===64||W===96)return!1;if(W===63||W===45){let O=p.input.charCodeAt(p.position+1);if(M(O)||J&&E(O))return!1}for(p.kind="scalar",p.result="",C=w=p.position,S=!1;W!==0;){if(W===58){let O=p.input.charCodeAt(p.position+1);if(M(O)||J&&E(O))break}else if(W===35){let O=p.input.charCodeAt(p.position-1);if(M(O))break}else{if(p.position===p.lineStart&&Ne(p)||J&&E(W))break;if(v(W))if(V=p.line,H=p.lineStart,j=p.lineIndent,Fe(p,!1,-1),p.lineIndent>=F){S=!0,W=p.input.charCodeAt(p.position);continue}else{p.position=w,p.line=V,p.lineStart=H,p.lineIndent=j;break}}S&&(Me(p,C,w,!1),Ue(p,p.line-V),C=w=p.position,S=!1),T(W)||(w=p.position+1),W=p.input.charCodeAt(++p.position)}return Me(p,C,w,!1),p.result?!0:(p.kind=te,p.result=Z,!1)}function Be(p,F){let J,C,w=p.input.charCodeAt(p.position);if(w!==39)return!1;for(p.kind="scalar",p.result="",p.position++,J=C=p.position;(w=p.input.charCodeAt(p.position))!==0;)if(w===39)if(Me(p,J,p.position,!0),w=p.input.charCodeAt(++p.position),w===39)J=p.position,p.position++,C=p.position;else return!0;else v(w)?(Me(p,J,C,!0),Ue(p,Fe(p,!1,F)),J=C=p.position):p.position===p.lineStart&&Ne(p)?z(p,"unexpected end of the document within a single quoted scalar"):(p.position++,T(w)||(C=p.position));z(p,"unexpected end of the stream within a single quoted scalar")}function ut(p,F){let J,C,w,S=p.input.charCodeAt(p.position);if(S!==34)return!1;for(p.kind="scalar",p.result="",p.position++,J=C=p.position;(S=p.input.charCodeAt(p.position))!==0;){if(S===34)return Me(p,J,p.position,!0),p.position++,!0;if(S===92){if(Me(p,J,p.position,!0),S=p.input.charCodeAt(++p.position),v(S))Fe(p,!1,F);else if(S<256&&re[S])p.result+=Q[S],p.position++;else if((w=_(S))>0){let V=w,H=0;for(;V>0;V--)S=p.input.charCodeAt(++p.position),(w=R(S))>=0?H=(H<<4)+w:z(p,"expected hexadecimal character");p.result+=k(H),p.position++}else z(p,"unknown escape sequence");J=C=p.position}else v(S)?(Me(p,J,C,!0),Ue(p,Fe(p,!1,F)),J=C=p.position):p.position===p.lineStart&&Ne(p)?z(p,"unexpected end of the document within a double quoted scalar"):(p.position++,T(S)||(C=p.position))}z(p,"unexpected end of the stream within a double quoted scalar")}function it(p,F){let J=!0,C,w,S,V=p.tag,H,j=p.anchor,te,Z,W,O,P=Object.create(null),q,G,ce,ve=p.input.charCodeAt(p.position);if(ve===91)te=93,O=!1,H=[];else if(ve===123)te=125,O=!0,H={};else return!1;for(p.anchor!==null&&ge(p,p.anchor,H),ve=p.input.charCodeAt(++p.position);ve!==0;){if(Fe(p,!0,F),ve=p.input.charCodeAt(p.position),ve===te)return p.position++,p.tag=V,p.anchor=j,p.kind=O?"mapping":"sequence",p.result=H,!0;if(J?ve===44&&z(p,"expected the node content, but found ','"):z(p,"missed comma between flow collection entries"),G=q=ce=null,Z=W=!1,ve===63){let Re=p.input.charCodeAt(p.position+1);M(Re)&&(Z=W=!0,p.position++,Fe(p,!0,F))}C=p.line,w=p.lineStart,S=p.position,L(p,F,s,!1,!0),G=p.tag,q=p.result,Fe(p,!0,F),ve=p.input.charCodeAt(p.position),(W||p.line===C)&&ve===58&&(Z=!0,ve=p.input.charCodeAt(++p.position),Fe(p,!0,F),L(p,F,s,!1,!0),ce=p.result),O?ue(p,H,P,G,q,ce,C,w,S):Z?H.push(ue(p,null,P,G,q,ce,C,w,S)):H.push(q),Fe(p,!0,F),ve=p.input.charCodeAt(p.position),ve===44?(J=!0,ve=p.input.charCodeAt(++p.position)):J=!1}z(p,"unexpected end of the stream within a flow collection")}function st(p,F){let J,C=l,w=!1,S=!1,V=F,H=0,j=!1,te,Z=p.input.charCodeAt(p.position);if(Z===124)J=!1;else if(Z===62)J=!0;else return!1;for(p.kind="scalar",p.result="";Z!==0;)if(Z=p.input.charCodeAt(++p.position),Z===43||Z===45)l===C?C=Z===43?h:u:z(p,"repeat of a chomping mode identifier");else if((te=A(Z))>=0)te===0?z(p,"bad explicit indentation width of a block scalar; it cannot be less than one"):S?z(p,"repeat of an indentation width identifier"):(V=F+te-1,S=!0);else break;if(T(Z)){do Z=p.input.charCodeAt(++p.position);while(T(Z));if(Z===35)do Z=p.input.charCodeAt(++p.position);while(!v(Z)&&Z!==0)}for(;Z!==0;){for(Ce(p),p.lineIndent=0,Z=p.input.charCodeAt(p.position);(!S||p.lineIndent<V)&&Z===32;)p.lineIndent++,Z=p.input.charCodeAt(++p.position);if(!S&&p.lineIndent>V&&(V=p.lineIndent),v(Z)){H++;continue}if(!S&&V===0&&z(p,"missing indentation for block scalar"),p.lineIndent<V){C===h?p.result+=n.repeat(`
`,w?1+H:H):C===l&&w&&(p.result+=`
`);break}J?T(Z)?(j=!0,p.result+=n.repeat(`
`,w?1+H:H)):j?(j=!1,p.result+=n.repeat(`
`,H+1)):H===0?w&&(p.result+=" "):p.result+=n.repeat(`
`,H):p.result+=n.repeat(`
`,w?1+H:H),w=!0,S=!0,H=0;let W=p.position;for(;!v(Z)&&Z!==0;)Z=p.input.charCodeAt(++p.position);Me(p,W,p.position,!1)}return!0}function Ye(p,F){let J=p.tag,C=p.anchor,w=[],S=!1;if(p.firstTabInLine!==-1)return!1;p.anchor!==null&&ge(p,p.anchor,w);let V=p.input.charCodeAt(p.position);for(;V!==0&&(p.firstTabInLine!==-1&&(p.position=p.firstTabInLine,z(p,"tab characters must not be used in indentation")),V===45);){let H=p.input.charCodeAt(p.position+1);if(!M(H))break;if(S=!0,p.position++,Fe(p,!0,-1)&&p.lineIndent<=F){w.push(null),V=p.input.charCodeAt(p.position);continue}let j=p.line;if(L(p,F,a,!1,!0),w.push(p.result),Fe(p,!0,-1),V=p.input.charCodeAt(p.position),(p.line===j||p.lineIndent>F)&&V!==0)z(p,"bad indentation of a sequence entry");else if(p.lineIndent<F)break}return S?(p.tag=J,p.anchor=C,p.kind="sequence",p.result=w,!0):!1}function mt(p,F,J){let C,w,S,V,H=p.tag,j=p.anchor,te={},Z=Object.create(null),W=null,O=null,P=null,q=!1,G=!1;if(p.firstTabInLine!==-1)return!1;p.anchor!==null&&ge(p,p.anchor,te);let ce=p.input.charCodeAt(p.position);for(;ce!==0;){!q&&p.firstTabInLine!==-1&&(p.position=p.firstTabInLine,z(p,"tab characters must not be used in indentation"));let ve=p.input.charCodeAt(p.position+1),Re=p.line;if((ce===63||ce===58)&&M(ve))ce===63?(q&&(ue(p,te,Z,W,O,null,w,S,V),W=O=P=null),G=!0,q=!0,C=!0):q?(q=!1,C=!0):z(p,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),p.position+=1,ce=ve;else{if(w=p.line,S=p.lineStart,V=p.position,!L(p,J,o,!1,!0))break;if(p.line===Re){for(ce=p.input.charCodeAt(p.position);T(ce);)ce=p.input.charCodeAt(++p.position);if(ce===58)ce=p.input.charCodeAt(++p.position),M(ce)||z(p,"a whitespace character is expected after the key-value separator within a block mapping"),q&&(ue(p,te,Z,W,O,null,w,S,V),W=O=P=null),G=!0,q=!1,C=!1,W=p.tag,O=p.result;else if(G)z(p,"can not read an implicit mapping pair; a colon is missed");else return p.tag=H,p.anchor=j,!0}else if(G)z(p,"can not read a block mapping entry; a multiline key may not be an implicit key");else return p.tag=H,p.anchor=j,!0}if((p.line===Re||p.lineIndent>F)&&(q&&(w=p.line,S=p.lineStart,V=p.position),L(p,F,c,!0,C)&&(q?O=p.result:P=p.result),q||(ue(p,te,Z,W,O,P,w,S,V),W=O=P=null),Fe(p,!0,-1),ce=p.input.charCodeAt(p.position)),(p.line===Re||p.lineIndent>F)&&ce!==0)z(p,"bad indentation of a mapping entry");else if(p.lineIndent<F)break}return q&&ue(p,te,Z,W,O,null,w,S,V),G&&(p.tag=H,p.anchor=j,p.kind="mapping",p.result=te),G}function Se(p){let F=!1,J=!1,C,w,S=p.input.charCodeAt(p.position);if(S!==33)return!1;p.tag!==null&&z(p,"duplication of a tag property"),S=p.input.charCodeAt(++p.position),S===60?(F=!0,S=p.input.charCodeAt(++p.position)):S===33?(J=!0,C="!!",S=p.input.charCodeAt(++p.position)):C="!";let V=p.position;if(F){do S=p.input.charCodeAt(++p.position);while(S!==0&&S!==62);p.position<p.length?(w=p.input.slice(V,p.position),S=p.input.charCodeAt(++p.position)):z(p,"unexpected end of the stream within a verbatim tag")}else{for(;S!==0&&!M(S);)S===33&&(J?z(p,"tag suffix cannot contain exclamation marks"):(C=p.input.slice(V-1,p.position+1),y.test(C)||z(p,"named tag handle cannot contain such characters"),J=!0,V=p.position+1)),S=p.input.charCodeAt(++p.position);w=p.input.slice(V,p.position),x.test(w)&&z(p,"tag suffix cannot contain flow indicator characters")}w&&!g.test(w)&&z(p,"tag name cannot contain such characters: "+w);try{w=decodeURIComponent(w)}catch{z(p,"tag name is malformed: "+w)}return F?p.tag=w:r.call(p.tagMap,C)?p.tag=p.tagMap[C]+w:C==="!"?p.tag="!"+w:C==="!!"?p.tag="tag:yaml.org,2002:"+w:z(p,'undeclared tag handle "'+C+'"'),!0}function Ke(p){let F=p.input.charCodeAt(p.position);if(F!==38)return!1;p.anchor!==null&&z(p,"duplication of an anchor property"),F=p.input.charCodeAt(++p.position);let J=p.position;for(;F!==0&&!M(F)&&!E(F);)F=p.input.charCodeAt(++p.position);return p.position===J&&z(p,"name of an anchor node must contain at least one character"),p.anchor=p.input.slice(J,p.position),!0}function Qe(p){let F=p.input.charCodeAt(p.position);if(F!==42)return!1;F=p.input.charCodeAt(++p.position);let J=p.position;for(;F!==0&&!M(F)&&!E(F);)F=p.input.charCodeAt(++p.position);p.position===J&&z(p,"name of an alias node must contain at least one character");let C=p.input.slice(J,p.position);return r.call(p.anchorMap,C)||z(p,'unidentified alias "'+C+'"'),p.result=p.anchorMap[C],Fe(p,!0,-1),!0}function Ee(p,F,J,C){let w=we(p);return ae(p),De(p,F),p.tag=null,p.anchor=null,p.kind=null,p.result=null,mt(p,J,C)&&p.kind==="mapping"?(ne(p),!0):(fe(p),De(p,w),!1)}function L(p,F,J,C,w){let S,V,H=1,j=!1,te=!1,Z=null,W,O,P;p.depth>=p.maxDepth&&z(p,"nesting exceeded maxDepth ("+p.maxDepth+")"),p.depth+=1,p.listener!==null&&p.listener("open",p),p.tag=null,p.anchor=null,p.kind=null,p.result=null;let q=S=V=c===J||a===J;if(C&&Fe(p,!0,-1)&&(j=!0,p.lineIndent>F?H=1:p.lineIndent===F?H=0:p.lineIndent<F&&(H=-1)),H===1)for(;;){let G=p.input.charCodeAt(p.position),ce=we(p);if(j&&(G===33&&p.tag!==null||G===38&&p.anchor!==null)||!Se(p)&&!Ke(p))break;Z===null&&(Z=ce),Fe(p,!0,-1)?(j=!0,V=q,p.lineIndent>F?H=1:p.lineIndent===F?H=0:p.lineIndent<F&&(H=-1)):V=!1}if(V&&(V=j||w),H===1||c===J)if(s===J||o===J?O=F:O=F+1,P=p.position-p.lineStart,H===1)if(V&&(Ye(p,P)||mt(p,P,O))||it(p,O))te=!0;else{let G=p.input.charCodeAt(p.position);Z!==null&&q&&!V&&G!==124&&G!==62&&Ee(p,Z,Z.position-Z.lineStart,O)||S&&st(p,O)||Be(p,O)||ut(p,O)?te=!0:Qe(p)?(te=!0,(p.tag!==null||p.anchor!==null)&&z(p,"alias node should not have any properties")):qe(p,O,s===J)&&(te=!0,p.tag===null&&(p.tag="?")),p.anchor!==null&&ge(p,p.anchor,p.result)}else H===0&&(te=V&&Ye(p,P));if(p.tag===null)p.anchor!==null&&ge(p,p.anchor,p.result);else if(p.tag==="?"){p.result!==null&&p.kind!=="scalar"&&z(p,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+p.kind+'"');for(let G=0,ce=p.implicitTypes.length;G<ce;G+=1)if(W=p.implicitTypes[G],W.resolve(p.result)){p.result=W.construct(p.result),p.tag=W.tag,p.anchor!==null&&ge(p,p.anchor,p.result);break}}else if(p.tag!=="!"){if(r.call(p.typeMap[p.kind||"fallback"],p.tag))W=p.typeMap[p.kind||"fallback"][p.tag];else{W=null;let G=p.typeMap.multi[p.kind||"fallback"];for(let ce=0,ve=G.length;ce<ve;ce+=1)if(p.tag.slice(0,G[ce].tag.length)===G[ce].tag){W=G[ce];break}}W||z(p,"unknown tag !<"+p.tag+">"),p.result!==null&&W.kind!==p.kind&&z(p,"unacceptable node kind for !<"+p.tag+'> tag; it should be "'+W.kind+'", not "'+p.kind+'"'),W.resolve(p.result,p.tag)?(p.result=W.construct(p.result,p.tag),p.anchor!==null&&ge(p,p.anchor,p.result)):z(p,"cannot resolve a node with !<"+p.tag+"> explicit tag")}return p.listener!==null&&p.listener("close",p),p.depth-=1,p.tag!==null||p.anchor!==null||te}function me(p){let F=p.position,J=!1,C;for(p.version=null,p.checkLineBreaks=p.legacy,p.tagMap=Object.create(null),p.anchorMap=Object.create(null);(C=p.input.charCodeAt(p.position))!==0&&(Fe(p,!0,-1),C=p.input.charCodeAt(p.position),!(p.lineIndent>0||C!==37));){J=!0,C=p.input.charCodeAt(++p.position);let w=p.position;for(;C!==0&&!M(C);)C=p.input.charCodeAt(++p.position);let S=p.input.slice(w,p.position),V=[];for(S.length<1&&z(p,"directive name must not be less than one character in length");C!==0;){for(;T(C);)C=p.input.charCodeAt(++p.position);if(C===35){do C=p.input.charCodeAt(++p.position);while(C!==0&&!v(C));break}if(v(C))break;for(w=p.position;C!==0&&!M(C);)C=p.input.charCodeAt(++p.position);V.push(p.input.slice(w,p.position))}C!==0&&Ce(p),r.call(le,S)?le[S](p,S,V):ie(p,'unknown document directive "'+S+'"')}if(Fe(p,!0,-1),p.lineIndent===0&&p.input.charCodeAt(p.position)===45&&p.input.charCodeAt(p.position+1)===45&&p.input.charCodeAt(p.position+2)===45?(p.position+=3,Fe(p,!0,-1)):J&&z(p,"directives end mark is expected"),L(p,p.lineIndent-1,c,!1,!0),Fe(p,!0,-1),p.checkLineBreaks&&d.test(p.input.slice(F,p.position))&&ie(p,"non-ASCII line breaks are interpreted as content"),p.documents.push(p.result),p.position===p.lineStart&&Ne(p)){p.input.charCodeAt(p.position)===46&&(p.position+=3,Fe(p,!0,-1));return}p.position<p.length-1&&z(p,"end of the stream or a document separator is expected")}function pe(p,F){p=String(p),F=F||{},p.length!==0&&(p.charCodeAt(p.length-1)!==10&&p.charCodeAt(p.length-1)!==13&&(p+=`
`),p.charCodeAt(0)===65279&&(p=p.slice(1)));let J=new B(p,F),C=p.indexOf("\0");for(C!==-1&&(J.position=C,z(J,"null byte is not allowed in input")),J.input+="\0";J.input.charCodeAt(J.position)===32;)J.lineIndent+=1,J.position+=1;for(;J.position<J.length-1;)me(J);return J.documents}function Te(p,F,J){F!==null&&typeof F=="object"&&typeof J>"u"&&(J=F,F=null);let C=pe(p,J);if(typeof F!="function")return C;for(let w=0,S=C.length;w<S;w+=1)F(C[w])}function he(p,F){let J=pe(p,F);if(J.length!==0){if(J.length===1)return J[0];throw new e("expected a single document in the stream, but found more")}}return yh.loadAll=Te,yh.load=he,yh}var dm={},D_;function RC(){if(D_)return dm;D_=1;let n=Rl(),e=Cl(),t=pm(),i=Object.prototype.toString,r=Object.prototype.hasOwnProperty,s=65279,o=9,a=10,c=13,l=32,u=33,h=34,f=35,d=37,x=38,y=39,g=42,m=44,v=45,T=58,M=61,E=62,R=63,_=64,A=91,U=93,k=96,Y=123,re=124,Q=125,B={};B[0]="\\0",B[7]="\\a",B[8]="\\b",B[9]="\\t",B[10]="\\n",B[11]="\\v",B[12]="\\f",B[13]="\\r",B[27]="\\e",B[34]='\\"',B[92]="\\\\",B[133]="\\N",B[160]="\\_",B[8232]="\\L",B[8233]="\\P";let K=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],z=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function ie(S,V){if(V===null)return{};let H={},j=Object.keys(V);for(let te=0,Z=j.length;te<Z;te+=1){let W=j[te],O=String(V[W]);W.slice(0,2)==="!!"&&(W="tag:yaml.org,2002:"+W.slice(2));let P=S.compiledTypeMap.fallback[W];P&&r.call(P.styleAliases,O)&&(O=P.styleAliases[O]),H[W]=O}return H}function ge(S){let V,H,j=S.toString(16).toUpperCase();if(S<=255)V="x",H=2;else if(S<=65535)V="u",H=4;else if(S<=4294967295)V="U",H=8;else throw new e("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+V+n.repeat("0",H-j.length)+j}let ae=1,ne=2;function fe(S){this.schema=S.schema||t,this.indent=Math.max(1,S.indent||2),this.noArrayIndent=S.noArrayIndent||!1,this.skipInvalid=S.skipInvalid||!1,this.flowLevel=n.isNothing(S.flowLevel)?-1:S.flowLevel,this.styleMap=ie(this.schema,S.styles||null),this.sortKeys=S.sortKeys||!1,this.lineWidth=S.lineWidth||80,this.noRefs=S.noRefs||!1,this.noCompatMode=S.noCompatMode||!1,this.condenseFlow=S.condenseFlow||!1,this.quotingType=S.quotingType==='"'?ne:ae,this.forceQuotes=S.forceQuotes||!1,this.replacer=typeof S.replacer=="function"?S.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function we(S,V){let H=n.repeat(" ",V),j=0,te="",Z=S.length;for(;j<Z;){let W,O=S.indexOf(`
`,j);O===-1?(W=S.slice(j),j=Z):(W=S.slice(j,O+1),j=O+1),W.length&&W!==`
`&&(te+=H),te+=W}return te}function De(S,V){return`
`+n.repeat(" ",S.indent*V)}function le(S,V){for(let H=0,j=S.implicitTypes.length;H<j;H+=1)if(S.implicitTypes[H].resolve(V))return!0;return!1}function Me(S){return S===l||S===o}function de(S){return S>=32&&S<=126||S>=161&&S<=55295&&S!==8232&&S!==8233||S>=57344&&S<=65533&&S!==s||S>=65536&&S<=1114111}function ee(S){return de(S)&&S!==s&&S!==c&&S!==a}function ue(S,V,H){let j=ee(S),te=j&&!Me(S);return(H?j:j&&S!==m&&S!==A&&S!==U&&S!==Y&&S!==Q)&&S!==f&&!(V===T&&!te)||ee(V)&&!Me(V)&&S===f||V===T&&te}function Ce(S){return de(S)&&S!==s&&!Me(S)&&S!==v&&S!==R&&S!==T&&S!==m&&S!==A&&S!==U&&S!==Y&&S!==Q&&S!==f&&S!==x&&S!==g&&S!==u&&S!==re&&S!==M&&S!==E&&S!==y&&S!==h&&S!==d&&S!==_&&S!==k}function Fe(S){return!Me(S)&&S!==T}function Ne(S,V){let H=S.charCodeAt(V),j;return H>=55296&&H<=56319&&V+1<S.length&&(j=S.charCodeAt(V+1),j>=56320&&j<=57343)?(H-55296)*1024+j-56320+65536:H}function Ue(S){return/^\n* /.test(S)}let qe=1,Be=2,ut=3,it=4,st=5;function Ye(S,V,H,j,te,Z,W,O){let P,q=0,G=null,ce=!1,ve=!1,Re=j!==-1,Pe=-1,ke=Ce(Ne(S,0))&&Fe(Ne(S,S.length-1));if(V||W)for(P=0;P<S.length;q>=65536?P+=2:P++){if(q=Ne(S,P),!de(q))return st;ke=ke&&ue(q,G,O),G=q}else{for(P=0;P<S.length;q>=65536?P+=2:P++){if(q=Ne(S,P),q===a)ce=!0,Re&&(ve=ve||P-Pe-1>j&&S[Pe+1]!==" ",Pe=P);else if(!de(q))return st;ke=ke&&ue(q,G,O),G=q}ve=ve||Re&&P-Pe-1>j&&S[Pe+1]!==" "}return!ce&&!ve?ke&&!W&&!te(S)?qe:Z===ne?st:Be:H>9&&Ue(S)?st:W?Z===ne?st:Be:ve?it:ut}function mt(S,V,H,j,te){S.dump=(function(){if(V.length===0)return S.quotingType===ne?'""':"''";if(!S.noCompatMode&&(K.indexOf(V)!==-1||z.test(V)))return S.quotingType===ne?'"'+V+'"':"'"+V+"'";let Z=S.indent*Math.max(1,H),W=S.lineWidth===-1?-1:Math.max(Math.min(S.lineWidth,40),S.lineWidth-Z),O=j||S.flowLevel>-1&&H>=S.flowLevel;function P(q){return le(S,q)}switch(Ye(V,O,S.indent,W,P,S.quotingType,S.forceQuotes&&!j,te)){case qe:return V;case Be:return"'"+V.replace(/'/g,"''")+"'";case ut:return"|"+Se(V,S.indent)+Ke(we(V,Z));case it:return">"+Se(V,S.indent)+Ke(we(Qe(V,W),Z));case st:return'"'+L(V)+'"';default:throw new e("impossible error: invalid scalar style")}})()}function Se(S,V){let H=Ue(S)?String(V):"",j=S[S.length-1]===`
`,Z=j&&(S[S.length-2]===`
`||S===`
`)?"+":j?"":"-";return H+Z+`
`}function Ke(S){return S[S.length-1]===`
`?S.slice(0,-1):S}function Qe(S,V){let H=/(\n+)([^\n]*)/g,j=(function(){let O=S.indexOf(`
`);return O=O!==-1?O:S.length,H.lastIndex=O,Ee(S.slice(0,O),V)})(),te=S[0]===`
`||S[0]===" ",Z,W;for(;W=H.exec(S);){let O=W[1],P=W[2];Z=P[0]===" ",j+=O+(!te&&!Z&&P!==""?`
`:"")+Ee(P,V),te=Z}return j}function Ee(S,V){if(S===""||S[0]===" ")return S;let H=/ [^ ]/g,j,te=0,Z,W=0,O=0,P="";for(;j=H.exec(S);)O=j.index,O-te>V&&(Z=W>te?W:O,P+=`
`+S.slice(te,Z),te=Z+1),W=O;return P+=`
`,S.length-te>V&&W>te?P+=S.slice(te,W)+`
`+S.slice(W+1):P+=S.slice(te),P.slice(1)}function L(S){let V="",H=0;for(let j=0;j<S.length;H>=65536?j+=2:j++){H=Ne(S,j);let te=B[H];!te&&de(H)?(V+=S[j],H>=65536&&(V+=S[j+1])):V+=te||ge(H)}return V}function me(S,V,H){let j="",te=S.tag;for(let Z=0,W=H.length;Z<W;Z+=1){let O=H[Z];S.replacer&&(O=S.replacer.call(H,String(Z),O)),(F(S,V,O,!1,!1)||typeof O>"u"&&F(S,V,null,!1,!1))&&(j!==""&&(j+=","+(S.condenseFlow?"":" ")),j+=S.dump)}S.tag=te,S.dump="["+j+"]"}function pe(S,V,H,j){let te="",Z=S.tag;for(let W=0,O=H.length;W<O;W+=1){let P=H[W];S.replacer&&(P=S.replacer.call(H,String(W),P)),(F(S,V+1,P,!0,!0,!1,!0)||typeof P>"u"&&F(S,V+1,null,!0,!0,!1,!0))&&((!j||te!=="")&&(te+=De(S,V)),S.dump&&a===S.dump.charCodeAt(0)?te+="-":te+="- ",te+=S.dump)}S.tag=Z,S.dump=te||"[]"}function Te(S,V,H){let j="",te=S.tag,Z=Object.keys(H);for(let W=0,O=Z.length;W<O;W+=1){let P="";j!==""&&(P+=", "),S.condenseFlow&&(P+='"');let q=Z[W],G=H[q];S.replacer&&(G=S.replacer.call(H,q,G)),F(S,V,q,!1,!1)&&(S.dump.length>1024&&(P+="? "),P+=S.dump+(S.condenseFlow?'"':"")+":"+(S.condenseFlow?"":" "),F(S,V,G,!1,!1)&&(P+=S.dump,j+=P))}S.tag=te,S.dump="{"+j+"}"}function he(S,V,H,j){let te="",Z=S.tag,W=Object.keys(H);if(S.sortKeys===!0)W.sort();else if(typeof S.sortKeys=="function")W.sort(S.sortKeys);else if(S.sortKeys)throw new e("sortKeys must be a boolean or a function");for(let O=0,P=W.length;O<P;O+=1){let q="";(!j||te!=="")&&(q+=De(S,V));let G=W[O],ce=H[G];if(S.replacer&&(ce=S.replacer.call(H,G,ce)),!F(S,V+1,G,!0,!0,!0))continue;let ve=S.tag!==null&&S.tag!=="?"||S.dump&&S.dump.length>1024;ve&&(S.dump&&a===S.dump.charCodeAt(0)?q+="?":q+="? "),q+=S.dump,ve&&(q+=De(S,V)),F(S,V+1,ce,!0,ve)&&(S.dump&&a===S.dump.charCodeAt(0)?q+=":":q+=": ",q+=S.dump,te+=q)}S.tag=Z,S.dump=te||"{}"}function p(S,V,H){let j=H?S.explicitTypes:S.implicitTypes;for(let te=0,Z=j.length;te<Z;te+=1){let W=j[te];if((W.instanceOf||W.predicate)&&(!W.instanceOf||typeof V=="object"&&V instanceof W.instanceOf)&&(!W.predicate||W.predicate(V))){if(H?W.multi&&W.representName?S.tag=W.representName(V):S.tag=W.tag:S.tag="?",W.represent){let O=S.styleMap[W.tag]||W.defaultStyle,P;if(i.call(W.represent)==="[object Function]")P=W.represent(V,O);else if(r.call(W.represent,O))P=W.represent[O](V,O);else throw new e("!<"+W.tag+'> tag resolver accepts not "'+O+'" style');S.dump=P}return!0}}return!1}function F(S,V,H,j,te,Z,W){S.tag=null,S.dump=H,p(S,H,!1)||p(S,H,!0);let O=i.call(S.dump),P=j;j&&(j=S.flowLevel<0||S.flowLevel>V);let q=O==="[object Object]"||O==="[object Array]",G,ce;if(q&&(G=S.duplicates.indexOf(H),ce=G!==-1),(S.tag!==null&&S.tag!=="?"||ce||S.indent!==2&&V>0)&&(te=!1),ce&&S.usedDuplicates[G])S.dump="*ref_"+G;else{if(q&&ce&&!S.usedDuplicates[G]&&(S.usedDuplicates[G]=!0),O==="[object Object]")j&&Object.keys(S.dump).length!==0?(he(S,V,S.dump,te),ce&&(S.dump="&ref_"+G+S.dump)):(Te(S,V,S.dump),ce&&(S.dump="&ref_"+G+" "+S.dump));else if(O==="[object Array]")j&&S.dump.length!==0?(S.noArrayIndent&&!W&&V>0?pe(S,V-1,S.dump,te):pe(S,V,S.dump,te),ce&&(S.dump="&ref_"+G+S.dump)):(me(S,V,S.dump),ce&&(S.dump="&ref_"+G+" "+S.dump));else if(O==="[object String]")S.tag!=="?"&&mt(S,S.dump,V,Z,P);else{if(O==="[object Undefined]")return!1;if(S.skipInvalid)return!1;throw new e("unacceptable kind of an object to dump "+O)}if(S.tag!==null&&S.tag!=="?"){let ve=encodeURI(S.tag[0]==="!"?S.tag.slice(1):S.tag).replace(/!/g,"%21");S.tag[0]==="!"?ve="!"+ve:ve.slice(0,18)==="tag:yaml.org,2002:"?ve="!!"+ve.slice(18):ve="!<"+ve+">",S.dump=ve+" "+S.dump}}return!0}function J(S,V){let H=[],j=[];C(S,H,j);let te=j.length;for(let Z=0;Z<te;Z+=1)V.duplicates.push(H[j[Z]]);V.usedDuplicates=new Array(te)}function C(S,V,H){if(S!==null&&typeof S=="object"){let j=V.indexOf(S);if(j!==-1)H.indexOf(j)===-1&&H.push(j);else if(V.push(S),Array.isArray(S))for(let te=0,Z=S.length;te<Z;te+=1)C(S[te],V,H);else{let te=Object.keys(S);for(let Z=0,W=te.length;Z<W;Z+=1)C(S[te[Z]],V,H)}}}function w(S,V){V=V||{};let H=new fe(V);H.noRefs||J(S,H);let j=S;return H.replacer&&(j=H.replacer.call({"":j},"",j)),F(H,0,j,!0,!0)?H.dump+`
`:""}return dm.dump=w,dm}var N_;function CC(){if(N_)return kn;N_=1;let n=AC(),e=RC();function t(i,r){return function(){throw new Error("Function yaml."+i+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return kn.Type=Yn(),kn.Schema=O_(),kn.FAILSAFE_SCHEMA=k_(),kn.JSON_SCHEMA=W_(),kn.CORE_SCHEMA=X_(),kn.DEFAULT_SCHEMA=pm(),kn.load=n.load,kn.loadAll=n.loadAll,kn.dump=e.dump,kn.YAMLException=Cl(),kn.types={binary:Y_(),float:G_(),map:B_(),null:z_(),pairs:K_(),set:j_(),timestamp:q_(),bool:H_(),int:V_(),merge:$_(),omap:Z_(),seq:U_(),str:F_()},kn.safeLoad=t("safeLoad","load"),kn.safeLoadAll=t("safeLoadAll","loadAll"),kn.safeDump=t("safeDump","dump"),kn}var PC=CC(),mm=EC(PC),{Type:xD,Schema:yD,FAILSAFE_SCHEMA:_D,JSON_SCHEMA:vD,CORE_SCHEMA:bD,DEFAULT_SCHEMA:MD,load:SD,loadAll:wD,dump:ED,YAMLException:TD,types:AD,safeLoad:RD,safeLoadAll:CD,safeDump:PD}=mm;var gm={label:1,id_pattern:10,ids:100};function gi(n,e){let t=Number(n);return Number.isFinite(t)?t:e}function IC(n){return n==null?[]:(Array.isArray(n)?n:[n]).map(t=>String(t).trim()).filter(Boolean)}function xm(n,e=[],t="selector"){if(!n||typeof n!="object"||Array.isArray(n))return e.push(`${t}: expected {label, ids?, id_pattern?}`),null;let i=n;for(let o of Object.keys(i))["label","ids","id_pattern"].includes(o)||e.push(`${t}: unknown key "${o}" (label, ids, id_pattern)`);let r=String(i.label??"").trim();if(!r)return e.push(`${t}: missing label`),null;let s={label:r};if(i.ids!=null){let o=IC(i.ids);o.length?s.ids=o:e.push(`${t}: empty ids`)}if(i.id_pattern!=null)try{s.idPattern=new RegExp(String(i.id_pattern)),s.idPatternSource=String(i.id_pattern)}catch(o){return e.push(`${t}: id_pattern ${i.id_pattern}: ${o?.message||o}`),null}return s.ids&&s.idPattern&&e.push(`${t}: use ids or id_pattern, not both`),s}function LC(n){return n.replace(/\s/g,"_").replace(/[\[\]\.:\/]/g,"")}function _h(n,e){if(n.label!==e.part)return 0;let t=e.element||"";return n.ids?t&&n.ids.some(i=>i===t||LC(i)===t)?gm.ids:0:n.idPattern?t&&n.idPattern.test(t)?gm.id_pattern:0:gm.label}function DC(n,e,t){let i=[];if(!n||typeof n!="object")return i;let r=n.selectors;return r==null||(Array.isArray(r)?r:[r]).forEach((s,o)=>{let a=xm(s,e,`${t}.selectors[${o}]`);a&&i.push(a)}),i}var J_=/^#?[0-9a-f]{6}$/i;function NC(n){let e=[],t=[],i=[];Array.isArray(n)?i=n:n&&typeof n=="object"&&Array.isArray(n.materials)?i=n.materials:e.push("catalogue: expected a YAML list of materials");let r=[],s=new Set;return i.forEach((o,a)=>{if(!o||typeof o!="object"){e.push(`entry ${a}: not a mapping`);return}let c=o,l=String(c.id??"").trim(),u=l||`entry ${a}`;l||e.push(`entry ${a}: missing id`),l&&s.has(l)&&e.push(`${l}: duplicate id`),s.add(l);let h=String(c.base_color??"").trim();J_.test(h)||(e.push(`${u}: base_color "${h}" is not an sRGB hex like #a1b2c3`),h="#b4b4b4"),h.startsWith("#")||(h=`#${h}`);let f=Array.isArray(c.tile_size_m)?c.tile_size_m.map(T=>gi(T,NaN)):[],d=[1,1];f.length===2&&f.every(T=>T>0)?d=[f[0],f[1]]:c.tile_size_m!=null?e.push(`${u}: tile_size_m must be [w, h] in metres`):c.maps&&t.push(`${u}: maps without tile_size_m, assuming [1, 1]`);let x={};if(c.maps&&typeof c.maps=="object"){for(let T of["color","normal","roughness","ao"])c.maps[T]&&(x[T]=String(c.maps[T]));for(let T of Object.keys(c.maps))["color","normal","roughness","ao"].includes(T)||t.push(`${u}: maps.${T} is not used (color, normal, roughness, ao)`)}let y=DC(c.applies_to,e,`${u}.applies_to`),g=String(c.applies_to?.pending??"");!y.length&&!g&&t.push(`${u}: applies_to has no selectors and no pending`);let m=String(c.status??"").trim();m&&m!=="known"&&m!=="assumed"&&t.push(`${u}: status "${m}" is neither known nor assumed`);let v=c.sheen_color!=null&&J_.test(String(c.sheen_color))?String(c.sheen_color):null;r.push({id:l,name:String(c.name??l),description:typeof c.applies_to=="string"?c.applies_to:String(c.applies_to?.description??""),pending:g,selectors:y,baseColor:h,roughness:Math.min(1,Math.max(0,gi(c.roughness,.7))),metalness:Math.min(1,Math.max(0,gi(c.metalness,0))),transmission:Math.min(1,Math.max(0,gi(c.transmission,0))),opacity:Math.min(1,Math.max(0,gi(c.opacity,1))),ior:c.ior!=null?gi(c.ior,1.5):null,thickness:c.thickness!=null?gi(c.thickness,0):null,clearcoat:Math.min(1,Math.max(0,gi(c.clearcoat,0))),clearcoatRoughness:Math.min(1,Math.max(0,gi(c.clearcoat_roughness,.1))),sheen:Math.min(1,Math.max(0,gi(c.sheen,0))),sheenColor:v?v.startsWith("#")?v:`#${v}`:null,sheenRoughness:Math.min(1,Math.max(0,gi(c.sheen_roughness,.8))),normalScale:gi(c.normal_scale,1),maps:x,tileSize:d,rotationDeg:gi(c.rotation_deg,0),directional:c.rotation_deg!=null,status:m||"assumed",source:Array.isArray(c.source)?c.source.join(" "):String(c.source??""),notes:String(c.notes??"")})}),{entries:r,errors:e,warnings:t}}function Q_(n){let e;try{e=mm.load(n)}catch(t){return{entries:[],errors:[`catalogue YAML: ${t?.message||t}`],warnings:[]}}return NC(e)}function ev(n,e){let t=null;for(let i of n)for(let r of i.selectors){let s=_h(r,e);s>0&&(!t||s>t.score)&&(t={entry:i,score:s})}return t}function tv(n,e){let t=new Map(n.map(o=>[o.id,0])),i=[],r=[];for(let o of e){let a=new Map;for(let h of n)for(let f of h.selectors){let d=_h(f,o);d>(a.get(h.id)||0)&&a.set(h.id,d)}if(!a.size){i.push(o);continue}let c=Math.max(...a.values()),l=[...a].filter(([,h])=>h===c).map(([h])=>h);l.length>1&&r.push({info:o,ids:l});let u=n.find(h=>l.includes(h.id));u&&t.set(u.id,(t.get(u.id)||0)+1)}let s=[...t].filter(([,o])=>o===0).map(([o])=>o);return{hits:t,unused:s,unresolved:i,ties:r}}function nv(n,e){if(/^(?:[a-z]+:)?\/\//i.test(n)||n.startsWith("data:")||n.startsWith("/"))return n;let t=e.split("?")[0].replace(/[^/]*$/,"");return n.startsWith("docs/")?`${t}../${n.slice(5)}`:t+n}function iv(n,e){let t=new Set,i=new Set,r=new Map;return n.traverse(s=>{let o=s;if(!o.isMesh)return;let c=(Array.isArray(o.material)?o.material:[o.material]).map(l=>{let u=String(l?.name||"").trim();if(!u)return l;r.has(u)||r.set(u,e(u));let h=r.get(u);return h?(t.add(u),h):(i.add(u),l)});o.material=Array.isArray(o.material)?c:c[0]}),{swapped:[...t],kept:[...i]}}function rv(n,e){let t=null,i=0;for(let r of n){let s=_h(r.selector,e);s>i&&(t=r,i=s)}return t}function sv(n){let e=[];for(let[t,i]of(Array.isArray(n)?n:[]).entries()){let r=i||{},s=[],o=xm(r.selector,s,`asset slot ${t}`);if(!o||!r.url){console.warn(`Realistic: asset slot ${t} ignored`,s.join("; ")||"missing url");continue}e.push({selector:o,url:String(r.url),fit:r.fit==="none"?"none":"contain"})}return e}function ov(n,e,t){let i=e[0].parent;if(!i)return null;let r=new vt;for(let x of e)r.expandByObject(x);let s=r.getSize(new N);n.updateMatrixWorld(!0);let o=new vt().setFromObject(n),a=o.getSize(new N),c=1;t==="contain"&&(c=Math.min(s.x/Math.max(a.x,1e-6),s.y/Math.max(a.y,1e-6),s.z/Math.max(a.z,1e-6)));let l=new Tt;l.name="bpAssetSlot",l.userData.bpAsset=!0,n.scale.multiplyScalar(c);let u=o.getCenter(new N).multiplyScalar(c);n.position.set(-u.x,-o.min.y*c,-u.z),l.add(n);let h=new N((r.min.x+r.max.x)/2,r.min.y,(r.min.z+r.max.z)/2);i.updateMatrixWorld(!0),l.position.copy(i.worldToLocal(h));let f=new Wt,d=new N;return i.matrixWorld.decompose(new N,f,d),l.quaternion.copy(f).invert(),l.scale.set(1/d.x,1/d.y,1/d.z),l.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,x.raycast=()=>{},x.userData.bpHitProxy=!0)}),i.add(l),l}var av={glazing:{color:"#dfe9ec",roughness:.05,metalness:0,transmission:.9},screen:{color:"#e6eef0",roughness:.05,metalness:0,transmission:.9},default:{color:"#d9d5ce",roughness:.8,metalness:0}},OC="floor-pu-living";function FC(){try{let n=new URLSearchParams(location.search).get("quality");if(n==="low"||n==="high")return n}catch{}try{let n=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,e=typeof navigator<"u"&&navigator.userAgent||"";if(n||/iPhone|iPad|iPod|Android/i.test(e))return"low"}catch{}return"high"}function UC(n){return n==="low"?{maxTexture:1024,anisotropy:4,shadowMap:1024,transmission:!1,transmissionScale:.5}:{maxTexture:2048,anisotropy:8,shadowMap:2048,transmission:!0,transmissionScale:1}}function lv(n,e,t=!1){let i=n.geometry,r=i.getAttribute("position");if(!r)return null;i.getAttribute("normal")||i.computeVertexNormals();let s=i.getAttribute("normal"),o=new rt().multiplyMatrices(e,n.matrixWorld),a=new lt().getNormalMatrix(o),c=new N,l=new N,u=new Float32Array(r.count*2),h=new N(1,1,1);if(t){let f=new vt;for(let d=0;d<r.count;d++)f.expandByPoint(c.fromBufferAttribute(r,d).applyMatrix4(o));f.getSize(h)}for(let f=0;f<r.count;f++){c.fromBufferAttribute(r,f).applyMatrix4(o),l.fromBufferAttribute(s,f).applyMatrix3(a);let d=Math.abs(l.x),x=Math.abs(l.y),y=Math.abs(l.z),g,m,v,T;if(x>=d&&x>=y?(g=c.x,m=l.y>=0?-c.z:c.z,v=h.x,T=h.z):d>=y?(g=l.x>=0?-c.z:c.z,m=c.y,v=h.z,T=h.y):(g=l.z>=0?c.x:-c.x,m=c.y,v=h.x,T=h.y),t&&v>T*1.001){let M=g;g=-m,m=M}u[f*2]=g,u[f*2+1]=m}return new Bt(u,2)}function BC(n,e){let t=n.image,i=t?.width||0,r=t?.height||0;if(!i||!r||Math.max(i,r)<=e)return;let s=e/Math.max(i,r),o=document.createElement("canvas");o.width=Math.max(1,Math.round(i*s)),o.height=Math.max(1,Math.round(r*s)),o.getContext("2d")?.drawImage(t,0,0,o.width,o.height),n.image=o}function kC(n){let e=new Cs,t=Math.min(n.renderer.capabilities.getMaxAnisotropy?.()||1,n.budget.anisotropy),i=new Map,r=new Map,s=new Set,o=new Set,a=new Set;function c(y){i.clear();for(let g of y)i.set(g.id,g)}function l(y){if(s.has(y.id))return;s.add(y.id);let g=["color","normal","roughness","ao"];for(let m of g){let v=y.maps[m];if(!v)continue;let T=nv(v,n.catalogueUrl);e.load(T,M=>{BC(M,n.budget.maxTexture),M.colorSpace=m==="color"?At:di,M.wrapS=ei,M.wrapT=ei,M.anisotropy=t,M.repeat.set(1/y.tileSize[0],1/y.tileSize[1]),M.rotation=nr.degToRad(y.rotationDeg||0),M.userData.bpShared=!0,M.needsUpdate=!0,r.has(y.id)||r.set(y.id,{}),r.get(y.id)[m]=M;for(let E of a)E.userData.bpCatalogueId===y.id&&u(E,y);n.onTexture?.(y.id)},void 0,()=>{o.add(`${y.id}:${m} (${T})`),console.warn(`Realistic: texture ${T} for ${y.id} did not load; using base_color`)})}}function u(y,g){let m=r.get(g.id);if(!m)return;let v=y,T=!1;m.color&&v.map!==m.color&&(v.map=m.color,v.userData.bpLightBase==null&&v.color.set(16777215),T=!0),m.normal&&v.normalMap!==m.normal&&(v.normalMap=m.normal,v.normalScale.set(g.normalScale,g.normalScale),T=!0),m.roughness&&v.roughnessMap!==m.roughness&&(v.roughnessMap=m.roughness,v.roughness=1,T=!0),m.ao&&v.aoMap!==m.ao&&(v.aoMap=m.ao,v.aoMapIntensity=1,T=!0),T&&(v.needsUpdate=!0)}function h(y,g){let v=y.transmission>0||y.clearcoat>0||y.sheen>0||y.ior!=null?new nn:new fn;v.color.set(y.baseColor),v.roughness=y.roughness,v.metalness=y.metalness,v instanceof nn&&(y.transmission>0&&g.transmission&&(v.transmission=y.transmission,v.thickness=y.thickness??.004),y.ior!=null&&(v.ior=y.ior),v.clearcoat=y.clearcoat,v.clearcoatRoughness=y.clearcoatRoughness,y.sheen>0&&(v.sheen=y.sheen,v.sheenRoughness=y.sheenRoughness,v.sheenColor.set(y.sheenColor||y.baseColor))),v.userData.bpCatalogueId=y.id,v.userData.bpRealistic=!0;let T=y.opacity;return y.transmission>0&&!g.transmission&&(T=Math.min(T,Math.max(.12,1-y.transmission*.85))),v.userData.presetOpacity=T,l(y),u(v,y),a.add(v),v}function f(y,g){let m=i.get(y);return m?h(m,g):null}function d(y){a.delete(y)}function x(y){let g=i.get(y.userData.bpCatalogueId);g&&u(y,g)}return{setEntries:c,create:h,bind:x,materialFor:f,release:d,entry:y=>i.get(y),failedTextures:()=>[...o]}}function zC(n){let{scene:e,renderer:t,budget:i}=n,r=new Qi(16774373,2);r.name="RealisticSun",r.castShadow=!0,r.shadow.mapSize.set(i.shadowMap,i.shadowMap),r.shadow.radius=3,r.shadow.blurSamples=12,r.shadow.bias=-4e-4,r.shadow.normalBias=.02,r.visible=!1;let s=new $a(14674162,9076594,.3);s.name="RealisticSky",s.visible=!1,e.add(r,r.target,s);let o=new ft(new ti(1,1),new fn({color:11051931,roughness:.95,metalness:0}));o.name="RealisticStageFloor",o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o.visible=!1,o.raycast=()=>{},o.userData.bpHitProxy=!0,o.userData.bpStage=!0,e.add(o);let a=new Map(n.baseLights.map(f=>[f,f.intensity])),c=e.environmentIntensity??1,l=!1;function u(f){if(f.isEmpty())return;let d=f.getSize(new N),x=f.getCenter(new N),y=Math.max(d.x,d.y,d.z)*.5+.5,g=new N(-.55,1,.65).normalize();r.position.copy(x).addScaledVector(g,y*2.5),r.target.position.copy(x),r.target.updateMatrixWorld();let m=r.shadow.camera;m.left=-y,m.right=y,m.top=y,m.bottom=-y,m.near=.1,m.far=y*5,m.updateProjectionMatrix();let v=f.min.y<=0&&f.max.y>=0?0:f.min.y;o.position.set(x.x,v-.002,x.z),o.scale.set(Math.max(d.x,4)*3,Math.max(d.z,4)*3,1),t.shadowMap.needsUpdate=!0}function h(f){l=f,r.visible=f,s.visible=f,o.visible=f;for(let[d,x]of a)d.intensity=f?x*(d.isAmbientLight?0:.25):x;e.environmentIntensity=f?.5:c,t.shadowMap.enabled=f,t.shadowMap.type=Is,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,t.transmissionResolutionScale=i.transmissionScale}return{fit:u,setEnabled:h,markDirty(){l&&(t.shadowMap.needsUpdate=!0)},get enabled(){return l},floor:o,sun:r}}function cv(n){let e=FC(),t=UC(e),i={transmission:t.transmission},r=kC({renderer:n.renderer,budget:t,catalogueUrl:n.catalogueUrl||"",onTexture:()=>n.onChange()}),s=zC({scene:n.scene,renderer:n.renderer,budget:t,baseLights:n.baseLights}),o=null,a=[],c=[],l=[],u=new Map,h=new Set,f=sv(n.assetSlots||[]),d=new tn({visible:!1});d.userData.bpAssetHidden=!0;let x=new Map,y=new Map,g=new Set;function m(K){return x.has(K)||x.set(K,new Zo().loadAsync(K).then(z=>z.scene).catch(z=>(console.warn(`Realistic: asset ${K} did not load; keeping generated geometry`,z),null))),x.get(K)}function v(K){let z=r.materialFor(K,i);return z&&Tl(z,null,0),z}function T(K,z,ie){if(y.has(K)){y.get(K).visible=ie.some(ge=>ge.visible);return}m(z.url).then(ge=>{if(!ge||y.has(K)||!s.enabled){if(!ge)for(let fe of ie)g.delete(fe);ge||n.onChange();return}let ae=ge.clone(!0);iv(ae,v);let ne=ov(ae,ie,z.fit);ne&&y.set(K,ne),s.markDirty(),n.onChange()})}function M(){return o||(o=(n.catalogueText?Promise.resolve(n.catalogueText):n.catalogueUrl?fetch(n.catalogueUrl).then(z=>z.ok?z.text():""):Promise.resolve("")).catch(()=>"").then(z=>{if(!z)return l.push(`no catalogue at ${n.catalogueUrl}; every surface uses its fallback colour`),[];let ie=Q_(z);c=ie.errors,l=ie.warnings;for(let ge of c)console.warn(`Realistic catalogue: ${ge}`);return a=ie.entries,r.setEntries(a),a}),o)}function E(K){let z=u.get(K);return z||(z={part:K.userData.bpPart||"part",element:K.userData.bpElementKey||null},u.set(K,z)),z}function R(K,z,ie,ge){if(h.has(K)&&K.geometry.userData.bpWorldUvAlign===ge)return;let ae=K.geometry,ne=ie.get(ae)||ae.userData.bpWorldUvOwner;if(ne&&ne!==K&&(ae=ae.clone(),K.geometry=ae,delete ae.userData.bpWorldUv),ie.set(ae,K),ae.userData.bpWorldUvOwner=K,!ae.userData.bpWorldUv||ae.userData.bpWorldUvAlign!==ge){let fe=lv(K,z,ge);if(!fe)return;"bpModelUv"in ae.userData||(ae.userData.bpModelUv=ae.getAttribute("uv")||null),ae.userData.bpWorldUv=fe,ae.userData.bpWorldUvAlign=ge}ae.setAttribute("uv",ae.userData.bpWorldUv),h.add(K)}function _(){for(let K of h){let z=K.geometry;z.userData.bpModelUv?z.setAttribute("uv",z.userData.bpModelUv):z.deleteAttribute("uv")}h.clear()}function A(K){let z=av[K]||av.default;return{id:`uncatalogued:${K}`,name:`${K} (not in catalogue)`,description:"",selectors:[],baseColor:z.color,roughness:z.roughness,metalness:z.metalness,transmission:z.transmission||0,opacity:1,ior:z.transmission?1.5:null,thickness:null,clearcoat:0,clearcoatRoughness:.1,sheen:0,sheenColor:null,sheenRoughness:.8,normalScale:1,maps:{},tileSize:[1,1],rotationDeg:0,directional:!1,status:"assumed",source:"",notes:"",pending:""}}function U(K,z,ie={}){s.enabled||s.setEnabled(!0);let ge=ie.clippingPlanes??null,ae=ie.edgeMode??"transparent";z.updateMatrixWorld(!0);let ne=z.matrixWorld.clone().invert(),fe=new Map,we=new Map;for(let[le,Me]of K){let de=Fp[le]??0,ee=new Map;for(let Ne of Me){let Ue=Ne;if(!Ue.isMesh)continue;let qe=E(Ue),Be=f.length?rv(f,qe):null;if(Be&&qe.element){g.add(Ue);let st=`${qe.part}__${qe.element}`;we.set(st,{slot:Be,meshes:[...we.get(st)?.meshes||[],Ue]})}let ut=ev(a,qe),it=ut?ut.entry:A(le);ee.has(it.id)||ee.set(it.id,{entry:it,meshes:[]}),ee.get(it.id).meshes.push(Ue),R(Ue,ne,fe,it.directional),Ue.castShadow=!0,Ue.receiveShadow=!0}let ue=new Set,Ce=1,Fe=ie.opacityByLabel;Fe&&Fe.has(le)&&(Ce=Number(Fe.get(le))||0);for(let{entry:Ne,meshes:Ue}of ee.values()){let qe=r.create(Ne,i);Tl(qe,ge,de);for(let Be of Ue){let ut=Array.isArray(Be.material)?Be.material:[Be.material];for(let it of ut)it&&ue.add(it);Be.material=qe,Be.userData.opaqueRenderOrder=de,Be.renderOrder=de}zi(Ue,Ce,{edgeMode:ae});for(let Be of Ue)g.has(Be)&&(Be.material=d)}ue.delete(d);for(let Ne of ue)r.release(Ne);dh(ue)}for(let le of y.values())le.visible=!1;for(let[le,{slot:Me,meshes:de}]of we)T(le,Me,de);let De=new vt().setFromObject(z);s.fit(De),re(ne)}function k(){for(let K of g)for(let z of K.children)(z.userData?.isEdgeOverlay||z.userData?.isSectionCap)&&(z.visible=!1)}let Y=null;function re(K){let z=s.floor,ie=r.entry(OC);if(!ie)return;let ge={entry:ie};z.updateMatrixWorld(!0),z.geometry.setAttribute("uv",lv(z,K)),Y?.userData.bpCatalogueId!==ge.entry.id&&(Y&&(r.release(Y),dh([Y])),Y=r.create(ge.entry,i),Tl(Y,null,0),z.material=Y)}function Q(K){_();for(let z of y.values())z.visible=!1;for(let z of K.values())for(let ie of z)ie.castShadow=!1,ie.receiveShadow=!1;s.setEnabled(!1)}function B(K){let z=[];for(let ge of K.values())for(let ae of ge)ae.isMesh&&z.push(E(ae));let ie=tv(a,z);return{tier:e,budget:t,entries:a.length,errors:c,warnings:l,unused:ie.unused,unresolved:[...new Set(ie.unresolved.map(ge=>`${ge.part}${ge.element?`/${ge.element}`:""}`))],ties:ie.ties.map(ge=>({mesh:`${ge.info.part}/${ge.info.element}`,ids:ge.ids})),failedTextures:r.failedTextures()}}return{load:M,apply:U,afterRefresh:k,leave:Q,stage:s,registry:r,report:B,tier:e,budget:t,caps:i}}var ym=44,vh=.05,HC=.05;function bh(n){let e=n&&n.material;if(!e)return!1;let t=Array.isArray(e)?e:[e];return t.length?t.every(i=>i&&i.visible!==!1&&!(i.transparent&&(i.opacity??1)<.99)):!1}function hv(n,e,t={}){let i=t.isOccluder||bh,r=t.tolerance??vh,s=1/0;for(let o of n){let a=Number.isFinite(o.distance)?o.distance:0;if(a>s+r)break;let c=e(o);if(c)return{hit:o,claim:c,wallT:s};s===1/0&&i(o.object)&&(s=a)}return{hit:null,claim:null,wallT:s}}function fv(n,e,t={}){let i=(t.diameterPx??ym)/2,r=t.depthTie??HC,s=[];for(let l of n){if(!l||!Number.isFinite(l.x)||!Number.isFinite(l.y)||!(l.depth>0))continue;let u=Math.hypot(l.x-e.x,l.y-e.y);u>i||s.push({c:l,dist:u})}let o=t.isOccluded?s.filter(l=>!t.isOccluded(l.c)):s;if(!o.length)return null;let a=o[0];for(let l of o)l.c.depth<a.c.depth&&(a=l);let c=null;for(let l of o)(l.c.depth<=a.c.depth+r||a.c.group!=null&&l.c.group===a.c.group)&&(!c||l.dist<c.dist||l.dist===c.dist&&l.c.depth<c.c.depth)&&(c=l);return c?c.c:null}var si=new N;function dv(n,e,t){e.updateMatrixWorld?.(),si.copy(n).applyMatrix4(e.matrixWorldInverse);let i=-si.z;return!(i>0)||(si.copy(n).project(e),!(Math.abs(si.x)<=1&&Math.abs(si.y)<=1)||!(si.z>=-1&&si.z<=1))?null:{x:(si.x+1)/2*t.w,y:(1-si.y)/2*t.h,depth:i}}var fs=new hi,uv=new Xe;function pv(n,e,t,i,r={}){let s=r.keep||(()=>!0),o=r.isOccluder||bh,a=r.tolerance??vh,c;if(e.isOrthographicCamera)si.copy(n).project(e),uv.set(si.x,si.y),fs.setFromCamera(uv,e),c=si.copy(n).sub(fs.ray.origin).dot(fs.ray.direction);else{let u=new N().setFromMatrixPosition(e.matrixWorld),h=si.copy(n).sub(u);if(c=h.length(),c<1e-9)return!1;fs.set(u,h.normalize())}fs.camera=e,fs.near=0,fs.far=Math.max(0,c);let l=fs.intersectObject(t,!0);for(let u of l){if(u.distance>=c-a)break;if(!(!s(u.object)||i(u.object))&&o(u.object))return!0}return!1}function mv(n,e,t){let i=n.getCenter(new N),r=n.getSize(new N),s=r.y/4,o=r.x>=r.z?new N(1,0,0):new N(0,0,1);o.dot(t)<0&&o.negate();let a=Math.max(r.x,r.z)/4,c=[];return e.forEach((l,u)=>{let h=i.clone();e.length>1&&h.addScaledVector(o,u===0?-a:a),c.push({rocker:l,position:"up",center:h.clone().setY(h.y+s)}),c.push({rocker:l,position:"down",center:h.clone().setY(h.y-s)})}),c}function Ws(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function ds(n){if(!n||!n.visible||Ws(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function gv(){let n=[];function e(c){n.push(c),n.sort((l,u)=>(u.priority||0)-(l.priority||0))}function t(c,l){for(let u of n){let h=u.claim?.(c,l);if(h)return h}return null}function i(c,l){let u=[];for(let h of c)l&&!l(h)||u.push(h);return u}function r(c){let{camera:l,root:u,tap:h,size:f}=c||{};if(!l||!u||!h||!f)return null;let d=[];for(let v of n){let T=v.targets?.(c);if(Array.isArray(T))for(let M of T){if(!M?.center)continue;let E=dv(M.center,l,f);E&&d.push({...M,...E,handler:v})}}if(!d.length)return null;let x=v=>ds(v),y=fv(d,h,{diameterPx:c.diameterPx??ym,isOccluded:v=>pv(v.center,l,u,T=>!!v.owns?.(T),{keep:x})});if(!y)return null;let g={...y.hit,point:y.hit?.point??y.center,extended:!0},m=y.handler.claim?.(g,c);return m?{hit:g,claim:m,target:y}:null}function s(c,l,u,h={}){let f=i(c,u),d=hv(f,g=>t(g,l),{isOccluder:g=>bh(g)});if(d.claim)return{kind:"direct",hit:d.hit,claim:d.claim};let x={...l,maxT:d.wallT+vh};for(let g of n)if(h.run?g.fallback?.(f,x):g.probe?.(f,x))return{kind:"fallback"};let y=r(l);if(y)return{kind:"extended",hit:y.hit,claim:y.claim};for(let g of f){let m=t(g,l);if(m)return{kind:"legacy",hit:g,claim:m}}return null}function o(c,l,u){let h=s(c,l,u,{run:!0});if(h?.kind==="fallback")return!0;if(h?.claim)return h.claim.onTap(),!0;let f=i(c,u);for(let d of n)if(d.fallback?.(f,l))return!0;return!1}function a(c,l,u){let h=s(c,l,u);return h?.claim?Array.isArray(h.claim.actions)?h.claim.actions.slice():[]:[]}return{register:e,dispatch:o,actionsFor:a,resolve:s,handlers:n}}var xv=8,VC=56,yv=14,_m=11,_v=.5,GC=1e-4,Mh=128,WC=.028,XC=5,qC=.995,$C=.999,vv=18,YC=22,ZC=14,vm=new Xe,bv=new hi,Ei=new N,Ti=new N,hr=new N,zn=new N,ea=new N,ur=new N,Jo=new N,Qo=new N,zt=new N,Mv=new N,ta=new N,KC=new xn;function bm(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function Mm(n){return n.pointerType==="touch"}function Sm(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function Sv(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function Iv(n){let{scene:e,canvas:t,getCamera:i,controls:r,getRoot:s,getClipPlanes:o,onLiveLength:a,onActiveChange:c}=n,l="idle",u=!1,h=!1,f=0,d=0,x=null,y=null,g=null,m=null,v=null,T=null,M=null,E="mouse",R=0,_=0,A=!1,U=!1,k=new Tt;k.name="MeasureOverlay",k.renderOrder=10,e.add(k);let Y=new Tt;Y.name="MeasureDimensions",e.add(Y);let re=Tv(16766474),Q=Tv(3458905),B=Av(16766474,.75),K=tP(16766474);k.add(re,Q,B,K),re.visible=!1,Q.visible=!1,B.visible=!1,K.visible=!1;let z=QC(t),ie=[];function ge(){return u}function ae(Ee){let L=!!Ee;if(L===u){L&&fe();return}if(u=L,u)if(r.enabled=!1,l="placeFirst",ne(),v=null,T=null,Sv()){let me=Math.max(1,t.clientWidth),pe=Math.max(1,t.clientHeight);De(me*.5,pe*.5,!0)}else we();else r.enabled=!0,l="idle",ne(),v=null,T=null,M=null,U=!1,we(),a?.(null);c?.(u),fe(),Me()}function ne(){h=!1,x=null,y=null,g=null,m=null}function fe(){l==="placeSecond"&&v&&x?a?.(bm(v.distanceTo(x))):u&&a?.(null)}function we(){z.hidden=!0,re.visible=!1,K.visible=!1}function De(Ee,L,me=!1){f=Ee,d=L,h=!0;let pe=Ne(Ee,L);if(pe){let Te=pe.point.clone(),he=pe.kind,p=pe.edgeDir;if(m=null,l==="placeSecond"&&v){let F=Ue(v,T,pe);F&&(Te=F.foot,he="perp",p=F.edgeDir,m=F.edgeDir.clone())}x=Te,y=he,g=p}else me?x||(y=null,g=null,m=null):(x=null,y=null,g=null,m=null);Me(),fe()}function le(Ee,L){let me=Ce(L)*XC;Ee.scale.setScalar(Math.max(me,1e-6))}function Me(){if(!u){we(),Q.visible=!1,B.visible=!1,K.visible=!1;return}v?(Q.visible=!0,Q.position.copy(v),le(Q,v)):Q.visible=!1,h?(z.hidden=!1,Ev(z,t,f,d,y),x?(re.visible=!0,re.position.copy(x),le(re,x),eP(re,y)):re.visible=!1):we(),l==="placeSecond"&&v&&x?(Cv(B,v,x),B.visible=!0):B.visible=!1,l==="placeSecond"&&y==="perp"&&v&&x&&m?(Rv(K,v,x,m,Ce),K.visible=!0):K.visible=!1}function de(Ee){let L=t.getBoundingClientRect();return{x:Ee.clientX-L.left,y:Ee.clientY-L.top}}function ee(Ee,L,me){return me==="touch"?{x:Ee,y:L-VC}:{x:Ee,y:L}}function ue(Ee){let L=o()||[];for(let me of L)if(me.distanceToPoint(Ee)<-GC)return!1;return!0}function Ce(Ee){let L=i(),me=Math.max(1,t.clientHeight);if(L.isOrthographicCamera)return 2*((L.top-L.bottom)/(2*Math.max(L.zoom,1e-6)))/me;let pe=L.position.distanceTo(Ee),Te=L.fov*Math.PI/180;return 2*Math.tan(Te/2)*pe/me/Math.max(L.zoom,1e-6)}function Fe(Ee,L){L.copy(Ee).project(i());let me=Math.max(1,t.clientWidth),pe=Math.max(1,t.clientHeight);return L.x=(L.x*.5+.5)*me,L.y=(-L.y*.5+.5)*pe,L}function Ne(Ee,L){let me=s();if(!me)return null;let pe=t.getBoundingClientRect();vm.x=Ee/Math.max(1,pe.width)*2-1,vm.y=-(L/Math.max(1,pe.height))*2+1,bv.setFromCamera(vm,i());let Te=bv.intersectObject(me,!0),he=null;for(let Pe of Te)if(!(!Pe.object.visible||Ws(Pe.object))&&ue(Pe.point)){he=Pe;break}if(!he)return null;let p=he.object,F=p.geometry;if(!F?.getAttribute("position"))return{point:he.point.clone(),kind:"face",edgeDir:null,mesh:p,triVerts:null,faceNormal:null};p.updateWorldMatrix(!0,!1);let J=Ce(he.point),C=J*yv,w=J*_m,S=F.getAttribute("position"),V=F.getIndex(),H=he.faceIndex,j=[];if(he.face)Ei.fromBufferAttribute(S,he.face.a).applyMatrix4(p.matrixWorld),Ti.fromBufferAttribute(S,he.face.b).applyMatrix4(p.matrixWorld),hr.fromBufferAttribute(S,he.face.c).applyMatrix4(p.matrixWorld),j.push(Ei.clone(),Ti.clone(),hr.clone());else if(typeof H=="number"){let Pe,ke,oe;V?(Pe=V.getX(H*3),ke=V.getX(H*3+1),oe=V.getX(H*3+2)):(Pe=H*3,ke=H*3+1,oe=H*3+2),Ei.fromBufferAttribute(S,Pe).applyMatrix4(p.matrixWorld),Ti.fromBufferAttribute(S,ke).applyMatrix4(p.matrixWorld),hr.fromBufferAttribute(S,oe).applyMatrix4(p.matrixWorld),j.push(Ei.clone(),Ti.clone(),hr.clone())}let te=null;j.length===3&&(te=new N().subVectors(j[1],j[0]).cross(zn.subVectors(j[2],j[0])).normalize(),te.lengthSq()<1e-12&&(te=null));let Z=Ee,W=L,O=null;function P(Pe){if(!ue(Pe)||Pe.distanceToSquared(he.point)>C*C*4)return;Fe(Pe,Qo);let ke=Math.hypot(Qo.x-Z,Qo.y-W);ke>yv||(!O||ke<O.distPx)&&(O={point:Pe.clone(),distPx:ke})}for(let Pe of j)P(Pe);let q=C*C*4,G=S.count,ce=G>8e3?2:1;for(let Pe=0;Pe<G;Pe+=ce)zn.fromBufferAttribute(S,Pe).applyMatrix4(p.matrixWorld),!(zn.distanceToSquared(he.point)>q)&&P(zn);if(O)return{point:O.point,kind:"vertex",edgeDir:null,mesh:p,triVerts:j.length?j:null,faceNormal:te};let ve=null;function Re(Pe,ke){zt.copy(ke).sub(Pe);let oe=zt.lengthSq();if(oe<1e-18)return;let Ie=zn.copy(he.point).sub(Pe).dot(zt)/oe;if(Ie=Math.min(1,Math.max(0,Ie)),ea.copy(Pe).addScaledVector(zt,Ie),!ue(ea)||ea.distanceToSquared(he.point)>w*w*4)return;Fe(ea,Qo);let je=Math.hypot(Qo.x-Z,Qo.y-W);if(je>_m)return;Fe(Pe,ur),Fe(ke,Jo);let Oe=Jo.x-ur.x,dt=Jo.y-ur.y,Rt=Oe*Oe+dt*dt;if(Rt>1e-6){let Xt=((Z-ur.x)*Oe+(W-ur.y)*dt)/Rt;Xt=Math.min(1,Math.max(0,Xt));let Zn=ur.x+Oe*Xt,oi=ur.y+dt*Xt;if(Math.hypot(Z-Zn,W-oi)>_m)return}(!ve||je<ve.distPx)&&(ve={point:ea.clone(),distPx:je,dir:zt.clone().normalize()})}return j.length===3&&(Re(j[0],j[1]),Re(j[1],j[2]),Re(j[2],j[0])),ve?{point:ve.point,kind:"edge",edgeDir:ve.dir,mesh:p,triVerts:j.length?j:null,faceNormal:te}:{point:he.point.clone(),kind:"face",edgeDir:null,mesh:p,triVerts:j.length?j:null,faceNormal:te}}function Ue(Ee,L,me){if(!me.mesh||!me.triVerts||me.triVerts.length!==3||!me.faceNormal||me.faceNormal.lengthSq()<1e-12)return null;let pe=Ce(Ee),Te=pe*ZC,he=Math.max(pe*2,1e-5);if(Math.abs(Sh(Ee,me.triVerts[0],me.faceNormal))>he)return null;let p=qe(me.mesh,me.triVerts[0],me.faceNormal,he);if(!p.length)return null;let F=[];for(let w of p)wv(Ee,w.a,w.b)<=Te&&F.push(w.dir.clone());if(L&&L.lengthSq()>1e-12&&F.push(L.clone().normalize()),!F.length)return null;let J=pe*vv,C=null;for(let w of F)if(!(w.lengthSq()<1e-12)){w.normalize();for(let S of p){if(Math.abs(S.dir.dot(w))<qC||wv(Ee,S.a,S.b)<=Te)continue;let V=jC(Ee,S.a,S.b);if(!ue(V)||Ee.distanceTo(V)*1e3<_v||(zt.copy(V).sub(Ee),zt.lengthSq()<1e-16)||(zt.normalize(),Math.abs(zt.dot(w))>.08))continue;let j=me.point.distanceTo(V);Fe(me.point,ur),Fe(V,Jo);let te=Math.hypot(ur.x-Jo.x,ur.y-Jo.y);if(j>J*1.35&&te>vv)continue;let Z=te+j/Math.max(pe,1e-9);(!C||Z<C.score)&&(C={foot:V.clone(),edgeDir:w.clone(),score:Z})}}return C?{foot:C.foot,edgeDir:C.edgeDir}:null}function qe(Ee,L,me,pe){let Te=Ee.geometry,he=Te?.getAttribute("position");if(!he)return[];Ee.updateWorldMatrix(!0,!1);let p=Te.getIndex(),F=new Map,J=Math.max(pe*.25,1e-5);function C(j,te,Z){ta.subVectors(te,j).cross(zn.subVectors(Z,j)),!(ta.lengthSq()<1e-16)&&(ta.normalize(),!(Math.abs(ta.dot(me))<$C)&&(Math.abs(Sh(j,L,me))>pe||Math.abs(Sh(te,L,me))>pe||Math.abs(Sh(Z,L,me))>pe||(w(j,te),w(te,Z),w(Z,j))))}function w(j,te){if(zt.copy(te).sub(j),zt.lengthSq()<1e-16)return;let Z=JC(j,te,J);F.has(Z)||F.set(Z,{a:j.clone(),b:te.clone(),dir:zt.clone().normalize()})}let S=p?p.count/3:he.count/3,V=12e3,H=S>V?Math.ceil(S/V):1;for(let j=0;j<S;j+=H){let te,Z,W;if(p){let O=j*3;te=p.getX(O),Z=p.getX(O+1),W=p.getX(O+2)}else te=j*3,Z=j*3+1,W=j*3+2;Ei.fromBufferAttribute(he,te).applyMatrix4(Ee.matrixWorld),Ti.fromBufferAttribute(he,Z).applyMatrix4(Ee.matrixWorld),hr.fromBufferAttribute(he,W).applyMatrix4(Ee.matrixWorld),C(Ei,Ti,hr)}return[...F.values()]}function Be(){if(x){if(l==="placeFirst"){v=x.clone(),T=g?g.clone():null,l="placeSecond",m=null,(Mm({pointerType:E})||!Sv())&&(h=!1,x=null,y=null,g=null,we()),Me(),fe();return}if(l==="placeSecond"&&v){if(v.distanceTo(x)*1e3<_v)return;ut(v,x),ae(!1)}}}function ut(Ee,L){let me=new Tt;me.name="Dimension";let pe=Av(16752394,1);Cv(pe,Ee,L),pe.visible=!0;let Te=Ee.clone().lerp(L,.5),he=Ee.distanceTo(L),p=nP(bm(he));p.position.copy(Te),me.add(pe,p),Y.add(me),ie.push({group:me,sprite:p,mid:Te.clone(),span:he}),it(p,Ee,L,Te,he)}function it(Ee,L,me,pe,Te){let he=i();if(he.getWorldDirection(Mv),zt.copy(me).sub(L),zt.lengthSq()<1e-16){Ee.position.copy(pe);return}zt.normalize(),zn.crossVectors(zt,Mv),zn.lengthSq()<1e-10&&zn.copy(he.up),zn.normalize();let p=Math.max(Te*WC,Ce(pe)*18);Ee.position.copy(pe).addScaledVector(zn,p);let F=Ce(Ee.position)*56;Ee.scale.set(F*2.2,F,1)}function st(){Q.visible&&v&&le(Q,v),re.visible&&x&&le(re,x),h&&Ev(z,t,f,d,y),K.visible&&v&&x&&m&&y==="perp"&&Rv(K,v,x,m,Ce);for(let Ee of ie){let me=Ee.group.children[0].geometry.getAttribute("position");Ei.fromBufferAttribute(me,0),Ti.fromBufferAttribute(me,1),it(Ee.sprite,Ei,Ti,Ee.mid,Ee.span)}}function Ye(Ee){if(!u||l==="idle"||!Sm(Ee)||M!==null)return;let{x:L,y:me}=de(Ee),pe=ee(L,me,Ee.pointerType);De(pe.x,pe.y,!0)}function mt(Ee){if(!u||l==="idle"||Ee.button!==void 0&&Ee.button!==0||M!==null)return;M=Ee.pointerId,E=Ee.pointerType||"mouse";let{x:L,y:me}=de(Ee);R=L,_=me,A=!1,U=!1;try{t.setPointerCapture(Ee.pointerId)}catch{}if(Sm(Ee)){let pe=ee(L,me,E);De(pe.x,pe.y,!0)}Ee.preventDefault()}function Se(Ee){if(!u)return;if(M===null){Ye(Ee);return}if(M!==Ee.pointerId)return;let{x:L,y:me}=de(Ee);if(Math.hypot(L-R,me-_)>=xv&&(A=!0,U=!0),Mm(Ee)){if(!U)return;let Te=ee(L,me,"touch");De(Te.x,Te.y,!0)}else if(Sm(Ee)){let Te=ee(L,me,E);De(Te.x,Te.y,!0)}Ee.preventDefault()}function Ke(Ee){if(!u||M!==Ee.pointerId)return;let{x:L,y:me}=de(Ee);Math.hypot(L-R,me-_)>=xv&&(A=!0,U=!0),M=null;try{t.releasePointerCapture(Ee.pointerId)}catch{}if(Mm(Ee)){A?U=!1:(U=!1,h&&x&&Be()),Ee.preventDefault();return}!A&&x&&Be(),U=!1,Ee.preventDefault()}function Qe(Ee){M===Ee.pointerId&&(M=null,U=!1)}return t.addEventListener("pointerdown",mt),t.addEventListener("pointermove",Se),t.addEventListener("pointerup",Ke),t.addEventListener("pointercancel",Qe),{isActive:ge,setActive:ae,update:st,formatMm:bm}}function Sh(n,e,t){return KC.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function wv(n,e,t){zt.copy(t).sub(e);let i=zt.lengthSq();if(i<1e-18)return n.distanceTo(e);let r=zn.copy(n).sub(e).dot(zt)/i;return r=Math.min(1,Math.max(0,r)),ea.copy(e).addScaledVector(zt,r).distanceTo(n)}function jC(n,e,t){zt.copy(t).sub(e);let i=zt.lengthSq();if(i<1e-18)return e.clone();let r=zn.copy(n).sub(e).dot(zt)/i;return r=Math.min(1,Math.max(0,r)),e.clone().addScaledVector(zt,r)}function JC(n,e,t){let i=Math.round(n.x/t),r=Math.round(n.y/t),s=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),c=Math.round(e.z/t);return i<o||i===o&&r<a||i===o&&r===a&&s<=c?`${i},${r},${s}|${o},${a},${c}`:`${o},${a},${c}|${i},${r},${s}`}function QC(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function Ev(n,e,t,i,r){let s=e.getBoundingClientRect();n.style.left=`${s.left+t}px`,n.style.top=`${s.top+i}px`,n.dataset.snap=r||"none"}function Tv(n){let e=new Va(1,16,12),t=new tn({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new ft(e,t);return i.renderOrder=20,i.visible=!1,i}function eP(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function Av(n,e){let t=new kt,i=new Float32Array(6);t.setAttribute("position",new Bt(i,3));let r=new Rr({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),s=new Zi(t,r);return s.renderOrder=19,s.frustumCulled=!1,s.visible=!1,s}function tP(n){let e=new kt,t=new Float32Array(9);e.setAttribute("position",new Bt(t,3));let i=new Rr({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),r=new Zi(e,i);return r.renderOrder=22,r.frustumCulled=!1,r.visible=!1,r}function Rv(n,e,t,i,r){let s=r(t)*YC;if(zt.copy(e).sub(t),zt.lengthSq()<1e-16){n.visible=!1;return}if(zt.normalize(),zn.copy(i).normalize(),ta.crossVectors(zn,zt),ta.lengthSq()<1e-12){n.visible=!1;return}Ei.copy(t).addScaledVector(zn,s),Ti.copy(t),hr.copy(t).addScaledVector(zt,s);let o=n.geometry.getAttribute("position");o.setXYZ(0,Ei.x,Ei.y,Ei.z),o.setXYZ(1,Ti.x,Ti.y,Ti.z),o.setXYZ(2,hr.x,hr.y,hr.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function Cv(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function nP(n){let e=document.createElement("canvas");e.width=Mh*2,e.height=Mh;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(Mh*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let c=t.measureText(n),l=Math.ceil(c.width),u=Math.round(Mh*.42),h=l+o*2,f=u+a*2,d=(e.width-h)/2,x=(e.height-f)/2,y=18;t.fillStyle="rgba(28, 28, 30, 0.78)",Pv(t,d,x,h,f,y),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,Pv(t,d,x,h,f,y),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new Cr(e);i.colorSpace=At,i.needsUpdate=!0;let r=new Lo({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),s=new La(r);return s.renderOrder=21,s.center.set(.5,.5),s}function Pv(n,e,t,i,r,s){let o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function wh(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function Hi(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function Lv(n){let e="",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let s=Hi(i);if(s.part&&!e&&(e=s.part),s.element)return{part:s.part,element:s.element}}t=t.parent||null}return{part:e||"part",element:null}}var Th=12,iP=500,rP=Math.PI/2,sP=.03,Dv=.001;function oP(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function aP(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>Th?"drag":"tap"}function Ah(n,e){return(e>=0?1:-1)*n*rP}function lP(n,e=null){let t=n.length,i=new Map,r=a=>{let c=i.has(a)?i.get(a):a;return c!==a?(c=r(c),i.set(a,c)):i.has(a)||i.set(a,a),c},s=(a,c)=>{let l=r(a),u=r(c);l!==u&&i.set(l,u)};if(e){let a=new Map,c=1e4,l=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<l;u++){let h=`${Math.round(e.getX(u)*c)},${Math.round(e.getY(u)*c)},${Math.round(e.getZ(u)*c)}`,f=a.get(h);f===void 0?a.set(h,u):s(u,f)}}for(let a=0;a+2<t;a+=3)s(n[a],n[a+1]),s(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let c=r(n[a]),l=o.get(c);l||(l=[],o.set(c,l)),l.push(a)}return[...o.values()]}function Nv(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let r=lP(t.array,i);if(r.length<2)return[n];let s=e.getAttribute("normal"),o=[];for(let a of r){let c=new Map,l=[],u=[],h=[],f=y=>{let g=c.get(y);return g!==void 0||(g=l.length/3,c.set(y,g),l.push(i.getX(y),i.getY(y),i.getZ(y)),s&&u.push(s.getX(y),s.getY(y),s.getZ(y))),g};for(let y of a)h.push(f(t.getX(y)),f(t.getX(y+1)),f(t.getX(y+2)));let d=new kt;d.setAttribute("position",new Gt(l,3)),u.length&&d.setAttribute("normal",new Gt(u,3)),d.setIndex(h);let x=new ft(d,n.material);x.name=n.name,x.position.copy(n.position),x.quaternion.copy(n.quaternion),x.scale.copy(n.scale),x.visible=n.visible,n.parent.add(x),o.push(x)}return n.parent.remove(n),e.dispose?.(),o}function cP(n,e=[]){let t=[];n.traverse(s=>{let o=s.name||"";if(Hi(o).part!=="door")return;let a=s.parent?.name||"";Hi(a).part!=="door"&&t.push(s)});let i=new Set((e||[]).filter(s=>s&&(s.kind==="drawer"||s.kind==="hinged")&&s.element).map(s=>String(s.element)));i.size&&n.traverse(s=>{let o=Hi(s.name||"");!o.element||!i.has(o.element)||Hi(s.parent?.name||"").element!==o.element&&t.push(s)});let r=[];for(let s of t){if(s.isMesh){r.push(...Nv(s));continue}let o=[];if(s.traverse(a=>{a.isMesh&&o.push(a)}),o.length===1){let a=Nv(o[0]);if(a.length>1){r.push(...a);continue}}r.push(s)}return r}function uP(n,e,t=sP){let i=[];for(let a of n)for(let c of e){if(!c)continue;let l=c.kind==="drawer"&&Array.isArray(c.slide),u=Uv(c)||Bv(c);if(!l&&!u&&(c.kind!=="hinged"||!c.hinge))continue;let h=c.center;if(!Array.isArray(h)||h.length<3)continue;let f=a.center.x-Number(h[0]),d=a.center.y-Number(h[1]),x=a.center.z-Number(h[2]),y=Math.hypot(f,d,x);y<=t&&i.push({distance:y,entry:a,record:c})}i.sort((a,c)=>a.distance-c.distance);let r=new Set,s=new Set,o=[];for(let a of i)r.has(a.entry)||s.has(a.record.id)||(r.add(a.entry),s.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function hP(n){return n.updateWorldMatrix(!0,!0),new vt().setFromObject(n).getCenter(new N)}function fP(n,e){let t=n.parent;if(!t)return null;if(e.kind==="drawer")return dP(n,e);if(Uv(e))return yP(n,e);if(Bv(e))return xP(n,e);let i=new Tt;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=new N(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(r)),i.updateWorldMatrix(!0,!1),i.attach(n);let s={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=s};return o(i),n.traverse(o),s}function dP(n,e){let t=n.parent;if(!t)return null;let i=new Tt;i.name=`drawer:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=e.center.map(Number),s=e.slide.map(Number),o=t.worldToLocal(new N(r[0],r[1],r[2])),a=t.worldToLocal(new N(r[0]+s[0],r[1]+s[1],r[2]+s[2]));i.updateWorldMatrix(!0,!1),i.attach(n);let c={id:e.id,kind:"drawer",pivot:i,host:n,slideLocal:a.sub(o),sign:1,goal:0,anim:null},l=u=>{u.userData.bpDoor=c};return l(i),n.traverse(l),c}function Uv(n){return!!(n&&n.kind==="sliding"&&Array.isArray(n.start)&&Array.isArray(n.end)&&Array.isArray(n.panels)&&n.panels.length>0)}var pP=new N(1,0,0);function Bv(n){return!!(n&&n.kind==="sectional"&&["start","end","bottom","top","inward"].every(e=>Array.isArray(n[e]))&&Number(n.sections)>=1)}function mP(n,e,t){if(n<=e||t<=0)return{y:n,z:0,tilt:0};let i=Math.PI/2*t;if(n<=e+i){let r=(n-e)/t;return{y:e+t*Math.sin(r),z:t*(1-Math.cos(r)),tilt:r}}return{y:e+t,z:t+(n-e-i),tilt:Math.PI/2}}function gP(n,e){return n+Math.PI/2*Math.max(0,e)}function xP(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=E=>t.worldToLocal(new N(Number(E[0]),Number(E[1]),Number(E[2]))),r=i(e.start),s=i(e.end),o=i(e.bottom),a=i(e.top),c=i([Number(e.bottom[0])+Number(e.inward[0]),Number(e.bottom[1])+Number(e.inward[1]),Number(e.bottom[2])+Number(e.inward[2])]),l=s.clone().sub(r),u=a.clone().sub(o),h=u.length();if(l.lengthSq()<1e-12||h<1e-6)return null;l.normalize(),u.normalize();let f=c.sub(o);if(f.addScaledVector(u,-f.dot(u)).addScaledVector(l,-f.dot(l)),f.lengthSq()<1e-12)return null;f.normalize();let d=new N().crossVectors(u,f),x=new rt().makeBasis(d,u,f),y=new Tt;y.name=n.name,y.position.copy(o),y.quaternion.setFromRotationMatrix(x),t.add(y),y.updateWorldMatrix(!0,!1),y.attach(n);let g=Math.max(1,Math.round(Number(e.sections))),m=h/g,v=Math.max(0,Number(e.bend)||0),T=[];for(let E=0;E<g;E++){let R=E===0?n:n.clone(!0),_=new Tt;_.name=`section:${e.id}:${E}`;let A=new Tt;A.position.y=-m/2,A.scale.y=1/g,_.add(A),y.add(_),A.add(R),T.push({pivot:_,s0:(E+.5)*m})}let M={id:e.id,kind:"sectional",pivot:y,host:y,sections:T,rise:h,bend:v,travel:gP(h,v),sign:1,goal:0,anim:null};return kv(M,0),y.traverse(E=>{E.userData.bpDoor=M}),M}function kv(n,e){for(let t of n.sections){let i=mP(t.s0+e*n.travel,n.rise,n.bend);t.pivot.position.set(0,i.y,i.z),t.pivot.rotation.set(i.tilt,0,0)}}function yP(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=d=>t.worldToLocal(new N(Number(d[0]),Number(d[1]),Number(d[2]))),r=i(e.start),o=i(e.end).clone().sub(r);if(o.lengthSq()<1e-12)return null;let a=o.clone().normalize(),c=new Wt().setFromUnitVectors(pP,a),l=new Tt;l.name=n.name,t.add(l);let u=e.panels.map((d,x)=>x===0?n:n.clone(!0)),h=[];e.panels.forEach((d,x)=>{let y=Array.isArray(d.span)?d.span.map(Number):[0,1],g=Array.isArray(d.slide)?d.slide:[0,0,0],m=i([Number(e.start[0])+Number(g[0]),Number(e.start[1])+Number(g[1]),Number(e.start[2])+Number(g[2])]).sub(r),v=new Tt;v.name=`slide:${e.id}:${x}`,l.add(v);let T=new Tt;T.position.copy(r),T.quaternion.copy(c),v.add(T),v.updateWorldMatrix(!0,!0);let M=u[x];M!==n&&(t.add(M),M.updateWorldMatrix(!0,!0)),T.attach(M),T.scale.x=Math.max(.001,y[1]-y[0]);let E=o.clone().multiplyScalar(y[0]);v.position.copy(E),h.push({pivot:v,base:E,slideLocal:m,span:y})});let f={id:e.id,kind:"sliding",pivot:l,host:l,panels:h,sign:1,goal:0,anim:null};return l.traverse(d=>{d.userData.bpDoor=f}),f}function fr(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/iP;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*oP(i)}var Ov=new Wt,Pl=new N;function _P(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;Pl.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(Ov).invert(),Pl.applyQuaternion(Ov)),!(Pl.lengthSq()<1e-12)&&(Pl.normalize(),n.rotateOnAxis(Pl,e))}function vP(n,e){let t=fr(n,e);if(n.sections)return kv(n,t),t;if(n.panels){for(let i of n.panels)i.pivot.position.copy(i.base).addScaledVector(i.slideLocal,t);return t}return n.slideLocal?(n.pivot.position.copy(n.slideLocal).multiplyScalar(t),t):(_P(n.pivot,Ah(t,n.sign)),t)}function bP(n,e){let t=fr(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function MP(n,e){let t=fr(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var Eh=new N,SP=new tn({side:Ft,transparent:!0,opacity:0,depthWrite:!1});function wP(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(g=>{g.isMesh&&g.geometry?.getAttribute?.("position")&&e.push(g)}),!e.length)return null;let t=new N,i=new N,r=new N;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,r),t.lengthSq()<1e-12||i.lengthSq()<1e-12||r.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),r.normalize();let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let g of e){let m=g.geometry;m.boundingBox||m.computeBoundingBox();let v=m.boundingBox,T=[v.min.x,v.max.x],M=[v.min.y,v.max.y],E=[v.min.z,v.max.z];for(let R of T)for(let _ of M)for(let A of E){Eh.set(R,_,A).applyMatrix4(g.matrixWorld);let U=Eh.dot(t),k=Eh.dot(i),Y=Eh.dot(r);U<s&&(s=U),k<o&&(o=k),Y<a&&(a=Y),U>c&&(c=U),k>l&&(l=k),Y>u&&(u=Y)}}let h=[(c-s)/2,(l-o)/2,(u-a)/2];if(h.some(g=>!(g>1e-6)))return null;let f=(s+c)/2,d=(o+l)/2,x=(a+u)/2;return{center:new N(t.x*f+i.x*d+r.x*x,t.y*f+i.y*d+r.y*x,t.z*f+i.z*d+r.z*x),axes:[t,i,r],half:h}}function EP(n,e){let t=new Ki(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new ft(t,SP);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function TP(n,e){let t=n.origin,i=n.direction,r=0,s=1/0;for(let o=0;o<3;o++){let a=e.axes[o],c=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),l=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(l)>1e-8){let h=(c+u)/l,f=(c-u)/l;if(h>f){let d=h;h=f,f=d}if(h>r&&(r=h),f<s&&(s=f),r>s)return null}else if(-c-u>0||-c+u<0)return null}return s<0?null:{tEnter:r,tExit:s}}function AP(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function Fv(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!Ws(e))return e.userData.bpDoor;e=e.parent}return null}function RP(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function CP(n){return ds(n.object)}function PP(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function zv(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),r=[],s=new hi,o=new Xe,a=null,c=0,l=null;function u(){l&&clearTimeout(l),l=null}function h(E,R,_){try{n.onToggle?.(E,{from:R,to:_})}catch(A){console.warn("door onToggle",A)}}let f=gv();f.register({id:"door",priority:100,claim(E,R){let _=Fv(E.object);if(!_||_.host?.userData?.bpIfcHidden)return null;let A=R.now??performance.now(),U=fr(_,A)>Dv,k=()=>{let Y=R.now??performance.now(),re=fr(_,Y);bP(_,Y),h(_,re,_.goal)};return{onTap:k,actions:[{id:"door",labelKey:U?"ui.close":"ui.open",run:k}]}},targets(){let E=[];for(let R of r){let _=R.host;if(!_||_.userData?.bpIfcHidden||!RP(_))continue;let A=new vt().setFromObject(_);if(A.isEmpty())continue;let U=A.getCenter(new N);E.push({center:U,group:`door:${R.id}`,hit:{object:_,point:U},owns:k=>Fv(k)===R})}return E}});function d(E){let R=[],_=Number.isFinite(E.maxT)?E.maxT:1/0;for(let A of r){if(!A.obb||A.host?.userData?.bpIfcHidden||fr(A,E.now)<=Dv)continue;let U=TP(E.raycaster.ray,A.obb);!U||U.tEnter>_||R.push({binding:A,tEnter:U.tEnter})}return AP(R)}f.register({id:"opening",priority:10,probe:(E,R)=>!!d(R),fallback(E,R){let _=d(R);if(!_)return!1;let A=fr(_,R.now);return MP(_,R.now)?(h(_,A,0),!0):!1}});function x(E){for(let A of r)PP(A);if(r.length=0,!E||!e.length)return 0;E.updateWorldMatrix(!0,!0);let _=cP(E,e).map(A=>({host:A,center:hP(A)}));for(let A of uP(_,e)){let U=fP(A.entry.host,A.record);if(!U)continue;let k=U.kind==="drawer"?null:wP(U.host);U.obb=k,U.proxy=k?EP(k,`opening:${U.id}`):null,r.push(U)}return r.length}function y(E){let R=!1;for(let _ of r){let A=!!_.anim;!A&&_.shown===_.goal||(vP(_,E),_.shown=_.anim?null:_.goal,A&&(R=!0))}return R}function g(E){if(!(E.button!==void 0&&E.button!==0)){if(c+=1,c>1){a=null;return}a={id:E.pointerId,x:E.clientX,y:E.clientY,moved:0,pointers:1,modifiers:E.altKey||E.ctrlKey||E.metaKey||E.shiftKey,consumed:!1},u(),l=setTimeout(()=>{l=null,!(!a||a.consumed||wh({dt:500,dx:a.moved,dy:0,pointers:c,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function m(E){if(!a||E.pointerId!==a.id)return;let R=Math.hypot(E.clientX-a.x,E.clientY-a.y);R>a.moved&&(a.moved=R),a.moved>Th&&u()}function v(E){if(c=Math.max(0,c-1),u(),!a||E.pointerId!==a.id)return;let R=a;if(a=null,R.consumed)return;let _=Math.max(R.moved,Math.hypot(E.clientX-R.x,E.clientY-R.y));aP({dx:_,dy:0,pointers:c>0?2:1,button:E.button,blocked:i(),modifiers:E.altKey||E.ctrlKey||E.metaKey||E.shiftKey})==="tap"&&M(E)}function T(){c=Math.max(0,c-1),a=null}function M(E){let R=n.getCamera();if(!R||!r.length)return;let _=t.getBoundingClientRect(),A=_.width||t.clientWidth||1,U=_.height||t.clientHeight||1;o.x=(E.clientX-_.left)/A*2-1,o.y=-((E.clientY-_.top)/U)*2+1,s.setFromCamera(o,R);let Y=r[0]?.pivot?.parent;for(;Y?.parent;)Y=Y.parent;if(!Y)return;let re=s.intersectObject(Y,!0);f.dispatch(re,{raycaster:s,now:performance.now(),camera:R,root:Y,tap:{x:E.clientX-_.left,y:E.clientY-_.top},size:{w:A,h:U}},CP)}return t.addEventListener("pointerdown",g,!0),t.addEventListener("pointermove",m,!0),t.addEventListener("pointerup",v,!0),t.addEventListener("pointercancel",T,!0),t.addEventListener("contextmenu",E=>E.preventDefault()),{bind:x,step:y,bindings:r,taps:f}}var IP=.8,LP=.4,Hv=.01,DP=1e-9;function wm(n){let e=Array.isArray(n?.slide)?n.slide.map(Number):[];return e.length===3&&e.some(t=>Math.abs(t)>DP)}function NP(n){return n?n.operable===!1?!1:Array.isArray(n.panels)&&n.panels.some(wm):!0}function OP(n,e){let t=Array.isArray(n?.panels)?n.panels:[],i=-1,r=1/0;return t.forEach((s,o)=>{if(!Array.isArray(s.min)||!Array.isArray(s.max))return;let a=!0,c=0;for(let l=0;l<3;l++){let u=Number(s.min[l])-Hv,h=Number(s.max[l])+Hv;(e[l]<u||e[l]>h)&&(a=!1);let f=(Number(s.min[l])+Number(s.max[l]))/2;c+=(e[l]-f)**2}a&&c<r&&(i=o,r=c)}),i}var Vv=new vt,Ll=new N;function FP(n){let e=n.geometry;return e&&!e.boundingBox&&e.computeBoundingBox?.(),n.updateWorldMatrix?.(!0,!1),e?.boundingBox?(Vv.copy(e.boundingBox).applyMatrix4(n.matrixWorld),Vv.getCenter(Ll)):n.getWorldPosition(Ll),[Ll.x,Ll.y,Ll.z]}function Gv(n=[]){let e=new Map;for(let d of Array.isArray(n)?n:[])d&&d.id&&e.set(String(d.id),d);let t=new Map;function i(d){let x=0;for(let g of d){let m=g.geometry;m&&!m.boundingBox&&m.computeBoundingBox?.(),m?.boundingBox&&(x=Math.max(x,m.boundingBox.max.x-m.boundingBox.min.x))}let y=(x||LP)*IP;return{record:null,moving:d.map(g=>({mesh:g,slideLocal:new N(y,0,0),panel:0})),fixed:new Set,panelOf:new Map(d.map(g=>[g,0]))}}function r(d,x){let y=[],g=new Set,m=new Map;for(let v of x){let T=FP(v),M=OP(d,T),E=M>=0?d.panels[M]:null;if(m.set(v,M),!E||!wm(E)){g.add(v);continue}let R=E.slide.map(Number),_=v.parent,A=new N(R[0],R[1],R[2]);if(_){_.updateWorldMatrix(!0,!1);let U=_.worldToLocal(new N(T[0],T[1],T[2]));A=_.worldToLocal(new N(T[0]+R[0],T[1]+R[1],T[2]+R[2])).sub(U)}y.push({mesh:v,slideLocal:A,panel:M})}return{record:d,moving:y,fixed:g,panelOf:m}}function s(d,x){let y=t.get(d);if(y)return y;let g=e.get(String(d))||null,m=g?r(g,x):i(x);for(let{mesh:v}of m.moving)v.userData.bpSlideOrigin||(v.userData.bpSlideOrigin=v.position.clone());return y={...m,goal:0,anim:null,shown:0},t.set(d,y),y}function o(d){return e.get(String(d))||null}function a(d){return NP(o(d))}function c(d,x){if(!a(d))return[];let y=s(d,x),g=new Set(y.moving.map(m=>m.mesh));return x.filter(m=>g.has(m))}function l(d,x,y){let g=new Set(c(d,x));if(!g.size)return!1;if(!y)return!0;for(let m=y;m;m=m.parent)if(g.has(m))return!0;return!1}function u(d,x,y,g){if(!a(d))return!1;let m=s(d,x);if(!m.moving.length)return!1;let v=fr(m,g);return m.goal=y?1:0,m.anim={from:v,to:m.goal,t0:g},m.shown=null,!0}function h(d){let y=o(d)?.panels?.find(wm);return y?y.slide.map(Number):null}function f(d){let x=!1;for(let y of t.values()){if(!y.anim&&y.shown===y.goal)continue;let g=fr(y,d);for(let{mesh:m,slideLocal:v}of y.moving)m.position.copy(m.userData.bpSlideOrigin).addScaledVector(v,g);y.shown=y.anim?null:y.goal,x=!0}return x}return{slide:u,step:f,slides:t,isOperable:a,operableMeshes:c,acceptsHit:l,slideOf:h,recordOf:o}}var UP=700,BP=36,na=36;function kP(n,e=!1){let t=Math.min(Math.max(n,0),1),i=t<.2?1:1-(t-.2)/.8;if(e)return{opacity:i,rise:0,scale:1};let r=1-(1-t)*(1-t),s=t<.15?.7+.3*t/.15:1;return{opacity:i,rise:BP*r,scale:s}}function Wv(n,e){let t=e.x-n.x,i=e.y-n.y;return Math.hypot(t,i)<1e-6?null:Math.atan2(i,t)*180/Math.PI}function zP(n){return n==="down"?90:-90}function Xv(n,e,t){let i=n[0]-e[0],r=n[2]-e[2],s=Math.cos(t),o=Math.sin(t);return[e[0]+s*i+o*r,n[1],e[2]-o*i+s*r]}function HP(n,e,t){let i=Wv(n,e);if(i==null)return null;let r=e.x-n.x,s=e.y-n.y,o=(n.x+e.x)/2,a=(n.y+e.y)/2,l=r*(t.y-a)-s*(t.x-o)>=0?1:-1;return{angle:i+45*l,bend:l}}function VP(n=UP){let e=[],t=1;return{items:e,add(i,r){let s={id:t++,t0:i,data:r};return e.push(s),s},step(i){let r=[],s=[];for(let o=e.length-1;o>=0;o-=1)(i-e[o].t0)/n>=1&&s.push(...e.splice(o,1));for(let o of e)r.push({item:o,t:(i-o.t0)/n});return{alive:r,expired:s}}}}var GP="http://www.w3.org/2000/svg",Em='fill="#16181d" stroke="#fff" stroke-width="2.2" stroke-linejoin="round" paint-order="stroke"',WP={arrow:`<path ${Em} d="M4 12.5 H17 V6 L29 16 L17 26 V19.5 H4 Z"/>`,hinge:`<path fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path fill="none" stroke="#16181d" stroke-width="4.4" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path ${Em} d="M17 5.5 L28 13 L17 20.5 Z"/>`,ring:`<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" stroke-width="6"/><circle cx="16" cy="16" r="9" fill="none" stroke="#16181d" stroke-width="3"/><circle cx="16" cy="16" r="3" ${Em}/>`},ps=null;function XP(n=globalThis){try{let e=n.navigator;if(e&&typeof e.vibrate=="function"&&e.vibrate(10))return"vibrate";let t=n.document,i=n.matchMedia?.("(pointer: coarse)")?.matches;if(!t||!i)return"none";if(!ps){ps=t.createElement("label"),ps.setAttribute("aria-hidden","true"),ps.style.display="none";let r=t.createElement("input");r.type="checkbox",r.setAttribute("switch",""),ps.appendChild(r)}return t.head.appendChild(ps),ps.click(),ps.remove(),"ios-switch"}catch{return"none"}}function qv(n){let e=n.document||globalThis.document,t=n.now||(()=>performance.now()),i=n.requestFrame||(m=>globalThis.requestAnimationFrame(m)),r=n.reducedMotion||(()=>!!globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches),s=n.haptics||(()=>XP()),o=VP(),a=new N,c=null,l=!1;function u(){return c||(c=e.createElement("div"),c.className="bp-feedback",c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"fixed",left:"0",top:"0",width:"0",height:"0",pointerEvents:"none",zIndex:"40"}),e.body.appendChild(c),c)}function h(m){let v=n.getCamera();if(!v||(Array.isArray(m)?a.set(m[0],m[1],m[2]):a.copy(m),v.updateMatrixWorld?.(),a.project(v),!Number.isFinite(a.x)||a.z>1||a.z<-1))return null;let T=n.canvas.getBoundingClientRect();return{x:T.left+(a.x+1)/2*T.width,y:T.top+(1-a.y)/2*T.height}}function f(m,v){let T=h(m),M=Array.isArray(m)?new N(...m):m.clone(),E=Array.isArray(v)?new N(...v):v.clone(),R=E.length();if(R<1e-9)return null;let _=h(M.add(E.multiplyScalar(.1/R)));return!T||!_?null:Wv(T,_)}function d(m){if(m.haptic!==!1)try{s()}catch{}try{return x(m)}catch(v){return console.warn("feedback",v),null}}function x(m){if(!e?.body||!m?.worldPos)return null;let v="arrow",T=-90,M=1;if(m.kind==="switch"||m.kind==="lift")T=zP(m.direction||"up");else if(m.kind==="slide"){let U=m.worldDir?f(m.worldPos,m.worldDir):null;if(U==null)return null;T=U}else if(m.kind==="hinge"){let U=h(m.worldPos),k=m.to?h(m.to):null,Y=m.hinge?h(m.hinge):null,re=U&&k&&Y?HP(U,k,Y):null;if(!re)return null;v="hinge",T=re.angle,M=re.bend}else m.kind==="light"&&(v="ring",T=0);let E=Array.isArray(m.worldPos)?new N(...m.worldPos):m.worldPos.clone();if(m.kind==="hinge"&&m.to){let U=Array.isArray(m.to)?new N(...m.to):m.to;E.lerp(U,.5)}let R=e.createElement("div");R.className=`bp-feedback-item bp-feedback-${m.kind}`,Object.assign(R.style,{position:"absolute",left:"0",top:"0",width:`${na}px`,height:`${na}px`,marginLeft:`${-na/2}px`,marginTop:`${-na/2}px`,willChange:"transform, opacity",filter:"drop-shadow(0 1px 2px rgba(0,0,0,.45))"});let _=e.createElementNS(GP,"svg");_.setAttribute("viewBox","0 0 32 32"),_.setAttribute("width",String(na)),_.setAttribute("height",String(na)),_.style.overflow="visible",_.style.transform=`rotate(${T}deg) scale(1, ${M})`,_.innerHTML=WP[v],R.appendChild(_),u().appendChild(R);let A=o.add(t(),{el:R,anchor:E,kind:m.kind});return y(A,0),l||(l=!0,i(g)),A}function y(m,v){let{el:T,anchor:M,kind:E}=m.data,R=h(M);if(!R){T.style.opacity="0";return}let _=kP(v,r()),A=E==="light"?.8+.7*Math.min(Math.max(v,0),1):_.scale,U=E==="light"?0:_.rise;T.style.opacity=String(_.opacity),T.style.transform=`translate(${R.x.toFixed(1)}px, ${(R.y-U).toFixed(1)}px) scale(${A.toFixed(3)})`}function g(){let{alive:m,expired:v}=o.step(t());for(let T of v)T.data.el.remove();for(let{item:T,t:M}of m)y(T,M);m.length?i(g):l=!1}return{showFeedback:d,count:()=>o.items.length,tick:g}}var qP=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t),actions:(n,e,t,i)=>i.switchActions?.(n,e,t)},{type:"IfcActuator",id:"cover",priority:55,liveOnly:!0,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onCover?.(n,e,t),actions:(n,e,t,i)=>i.coverActions?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t),accepts:(n,e,t)=>t.windowAccepts?t.windowAccepts(n,e):!0}];function $v(n,e){for(let t of qP)n.register({id:t.id,priority:t.priority,claim(i,r){let s=e.elementOf?.(i.object);if(!s||s.type!==t.type||t.liveOnly&&!e.isLive?.(s)||t.accepts&&!t.accepts(s,i,e))return null;let o=()=>t.run(s,i,r,e),a=t.actions?.(s,i,r,e);return{onTap:o,actions:Array.isArray(a)&&a.length?a:[{id:t.id,labelKey:t.labelKey(s,e),run:o}]}},targets(i){let r=e.targetsFor?.(t.type,i);return Array.isArray(r)?t.liveOnly?r.filter(s=>e.isLive?.(s.element)):r:[]}})}var $P="https://home-test.tail9f879b.ts.net",Zv="blueprints.homeMode",YP=new Set(["IfcLightFixture","IfcSwitchingDevice","IfcSensor","IfcActuator"]),Yv=[2e3,5e3,15e3,3e4,6e4],ZP=5e3;function Kv(n){for(let e of Object.values(n?.elements||{}))if(e&&YP.has(e.type||""))return!0;return!1}function jv(n={}){let e;try{e=new URLSearchParams(n.search||"")}catch{e=new URLSearchParams}let t="live",i=null;try{i=n.storage?.getItem(Zv)??null}catch{i=null}(i==="off"||i==="live")&&(t=i);let r=(e.get("home")||"").trim().toLowerCase();(r==="off"||r==="live")&&(t=r);let s=$P,o=(e.get("homeUrl")||"").trim();if(o)try{let a=new URL(o);(a.protocol==="https:"||a.protocol==="http:")&&(s=a.href.replace(/\/+$/,""))}catch{}return{mode:t,baseUrl:s}}function Jv(n,e){try{n?.setItem(Zv,e)}catch{}}function KP(n){let e=new URL(n.replace(/\/+$/,"")+"/events");return e.protocol=e.protocol==="http:"?"ws:":"wss:",e.href}function jP(n,e,t=""){return`${n.replace(/\/+$/,"")}/devices/${encodeURIComponent(e)}${t}`}function JP(n,e){return`${n.replace(/\/+$/,"")}/simulate/devices/${encodeURIComponent(e)}/press`}var Rh=4868682;function Tm(n){let e=[[2200,16751135],[3e3,16758835],[4e3,16766814],[5e3,16773816],[6500,15266303]],t=Number.isFinite(n)?Math.min(Math.max(n,e[0][0]),e.at(-1)[0]):3e3,i=0;for(;i<e.length-2&&t>e[i+1][0];)i+=1;let[r,s]=e[i],[o,a]=e[i+1],c=(t-r)/(o-r),l=(h,f)=>h>>f&255,u=h=>Math.round(l(s,h)+(l(a,h)-l(s,h))*c);return u(16)<<16|u(8)<<8|u(0)}function Am(n){let e=n?.state||{},t=!!(n?.online&&e.onOff?.onOff===!0),i=e.levelControl?.currentLevel,r=Number.isFinite(i)?Math.min(Math.max(i/254,0),1):1,s=e.colorControl?.colorTemperatureMireds,o=Number.isFinite(s)&&s>0?Math.round(1e6/s):null,a=t?Tm(o):Rh;return{on:t,level:r,kelvin:o,color:a}}function Dl(n){return n?.objectType==="DoublePushButton"?["rocker-1","rocker-2"]:["rocker"]}function Qv(n,e){let t=Dl(n);return{rocker:t.length>1?t[e.side<0?0:1]:t[0],position:e.dy>=0?"up":"down",kind:"short"}}function eb(n,e){if(!n)return[];let t=[];n.online||t.push(e("home.deviceOffline"));let i=n.state||{};switch(n.deviceType){case"ColorTemperatureLight":{let r=i.onOff?.onOff;t.push(r==null?e("home.unknown"):e(r?"home.on":"home.off"));let s=Am({...n,online:!0});Number.isFinite(i.levelControl?.currentLevel)&&t.push(`${e("home.level")} ${Math.round(s.level*100)} %`),s.kelvin&&t.push(`${s.kelvin} K`);let o=i.derived?.channels;o&&t.push(`${e("home.warm")} ${Math.round(o.warm)} % \xB7 ${e("home.cool")} ${Math.round(o.cool)} %`);break}case"GenericSwitch":{let r=i.switch?.lastEvent;r?t.push(`${e("home.lastEvent")}: ${r.rocker} ${r.position} ${r.event}`):t.push(e("home.noEvents"));break}case"ContactSensor":{let r=i.booleanState?.stateValue;t.push(r==null?e("home.unknown"):e(r?"home.contactClosed":"home.contactOpen"));break}case"OccupancySensor":{let r=i.occupancySensing?.occupancy;t.push(r==null?e("home.unknown"):r.occupied?e("home.occupied"):e("home.vacant"));break}case"WindowCovering":{let r=i.windowCovering?.currentPositionLiftPercent100ths;t.push(r==null?e("home.unknown"):`${e("home.closedPct")} ${Math.round(r/100)} %`);break}default:break}return t}function tb(n){let e=n.fetchImpl||globalThis.fetch?.bind(globalThis),t=n.WebSocketImpl||globalThis.WebSocket,i=n.setTimer||((M,E)=>setTimeout(M,E)),r=n.clearTimer||(M=>clearTimeout(M)),s=new Map,o="off",a=!1,c=!1,l=0,u=0,h=null,f=null;function d(M,E){if(!(o===M&&!E)){o=M;try{n.onStatus?.(M,E)}catch(R){console.error("home onStatus",R)}}}function x(M,...E){try{M?.(...E)}catch(R){console.error("home handler",R)}}function y(M){if(!c||M!==u)return;let E=Yv[Math.min(l,Yv.length-1)];l+=1,f=i(()=>{f=null,c&&M===u&&v(M)},E)}function g(M){if(!M||typeof M.globalId!="string")return;let E=s.get(M.globalId);s.set(M.globalId,M),x(n.onDevice,M,E)}function m(M){let E;try{E=JSON.parse(typeof M=="string"?M:String(M))}catch{return}if(!(!E||typeof E!="object"))if(E.type==="snapshot"&&Array.isArray(E.devices)){l=0;for(let R of E.devices)g(R);d("live"),x(n.onSnapshot,E.devices)}else E.type==="state"&&E.device?g(E.device):E.type==="switch"&&E.event&&x(n.onSwitch,E.event)}async function v(M){if(!e||!t){d("unreachable","no fetch/WebSocket");return}d(o==="live"?"connecting":o==="unreachable"?"unreachable":"connecting");let E=null;try{let _=typeof AbortController=="function"?new AbortController:null,A=i(()=>_?.abort(),ZP);try{let U=await e(`${n.baseUrl.replace(/\/+$/,"")}/health`,{signal:_?.signal,cache:"no-store"});U.ok&&(E=await U.json())}finally{r(A)}}catch{E=null}if(!c||M!==u)return;if(!E||E.status!=="ok"){d("unreachable"),y(M);return}a=!!E.simulation;let R;try{R=new t(KP(n.baseUrl))}catch{d("unreachable"),y(M);return}h=R,R.onmessage=_=>{M===u&&m(_.data)},R.onclose=()=>{h===R&&(h=null),!(!c||M!==u)&&(d(o==="live"?"connecting":"unreachable"),y(M))},R.onerror=()=>{}}async function T(M,E){if(!e||o!=="live")return{ok:!1,status:0};try{let R=await e(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)}),_="";if(!R.ok)try{let A=await R.json();_=A?.error?.message||A?.error?.code||""}catch{}return{ok:R.ok,status:R.status,error:_}}catch(R){return{ok:!1,status:0,error:String(R?.message||R)}}}return{start(){c||(c=!0,l=0,u+=1,v(u))},stop(){c=!1,u+=1,f!=null&&r(f),f=null;let M=h;h=null;try{M?.close()}catch{}s.clear(),a=!1,d("off")},status:()=>o,isLive:()=>o==="live",simulation:()=>a,device:M=>o==="live"?s.get(M):void 0,lastKnown:M=>s.get(M),devices:()=>[...s.values()],command:(M,E)=>T(jP(n.baseUrl,M,"/commands"),E),press:(M,E)=>T(JP(n.baseUrl,M),E)}}var QP=new Set(["IfcGroup","IfcSystem","IfcZone","IfcDistributionSystem","IfcDistributionCircuit","IfcBuildingSystem","IfcStructuralAnalysisModel"]);function Ai(n){return QP.has(n?.type)}function Ch(n,e){return e?Array.isArray(n.groups)?n.groups.includes(e):Ai(n.elements?.[e]):!1}function ib(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(r=>e[r]):[],i=Array.isArray(n?.groups)?n.groups.filter(r=>e[r]):Object.values(e).filter(Ai).map(r=>r.globalId);return{elements:e,roots:t,groups:i}}function Ph(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let r=i.parentId||null;(r===e||!r&&i.containerId===e)&&t.push(i)}return t.sort((i,r)=>{let s=(i.order??0)-(r.order??0);return s||String(i.name||"").localeCompare(String(r.name||""))}),t.map(i=>i.globalId)}function Rm(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=s.parentId||s.containerId||null}return t.reverse(),t}function Cm(n,e){return Rm(n,e).slice(0,-1)}function Pm(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of Ph(n,s))r(a,o+1)};for(let s of n.roots)r(s,0);return t}function Ih(n,e){let t=n.elements[e];if(t&&Array.isArray(t.childGroupIds))return ob(n,t.childGroupIds.filter(r=>n.elements[r]));let i=[];for(let r of Object.values(n.elements)){if(!Ai(r))continue;(r.parentGroupIds||r.groups||[]).includes(e)&&i.push(r)}return i.sort(sb),i.map(r=>r.globalId)}function e2(n){let t=(Array.isArray(n.groups)?n.groups.filter(i=>n.elements[i]):Object.values(n.elements).filter(Ai).map(i=>i.globalId)).filter(i=>{let r=n.elements[i];return!(r.parentGroupIds||r.groups||[]).some(o=>Ch(n,o))});return ob(n,t)}function t2(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=(s.parentGroupIds||s.groups||[]).find(a=>Ch(n,a))||null}return t.reverse(),t}function rb(n,e){return t2(n,e).slice(0,-1)}function Im(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of Ih(n,s))r(a,o+1)};for(let s of e2(n))r(s,0);return t}function sb(n,e){let t=s=>{let o=s?.id||"";return o==="GRP-FURNITURE"?0:o==="GRP-ELECTRICAL"?1:10},i=t(n)-t(e);if(i)return i;let r=(n.order??0)-(e.order??0);return r||String(n.name||"").localeCompare(String(e.name||""))}function ob(n,e){let t=[],i=new Set;for(let r of e)!r||i.has(r)||!n.elements[r]||(i.add(r),t.push(r));return t.sort((r,s)=>sb(n.elements[r],n.elements[s])),t}function ab(n){return Math.min(Math.max(0,n),4)*12}function lb(n,e,t,i,r=44,s=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/r)-s),c=Math.min(i,Math.ceil((o+e)/r)+s);return{start:a,end:Math.max(a,c)}}var nb=new WeakMap;function n2(n,e){let t=n.elements[e];if(t&&(Array.isArray(t.memberIds)||Array.isArray(t.childGroupIds)))return[...t.childGroupIds||[],...t.memberIds||[]].filter(s=>s&&n.elements[s]);let i=nb.get(n.elements);if(!i){i=new Map;for(let r of Object.values(n.elements))for(let s of r?.groups||[])i.has(s)||i.set(s,[]),i.get(s).push(r.globalId);nb.set(n.elements,i)}return i.get(e)||[]}function ms(n,e){let t=[],i=[e],r=new Set;for(;i.length;){let s=i.pop();if(!(!s||r.has(s)||!n.elements[s])){r.add(s),t.push(s);for(let o of Ph(n,s))i.push(o);for(let o of n2(n,s))i.push(o)}}return t}function cb(n,e){let t=null,i=null,r=new Set,s=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;s&&n.elements[s]&&!r.has(s);){r.add(s);let o=n.elements[s];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),s=o.containerId||o.parentId||null}return{storey:t,space:i}}function ub(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([r])=>r!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[r,s]of i)e.push(`${r}: ${hb(s)}`)}}return e}function hb(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function fb(n,e){return n&&n===e?"frame":"pulse"}function db(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${hb(e.value)}`):[]}function pb(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},inspect(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let r=document.createElement("span");r.dataset.i18n="ui.inspector",r.textContent=n.t("ui.inspector");let s=document.createElement("span");s.className="ifc-entry-chevron",s.setAttribute("aria-hidden","true"),s.textContent="\u203A",i.append(r,s),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let c=document.createElement("button");c.type="button",c.className="ifc-back",c.dataset.noSheetDrag="true";let l=document.createElement("button");l.type="button",l.className="ifc-show-all",l.hidden=!0,l.dataset.noSheetDrag="true",a.append(c,l);let u=document.createElement("div");u.className="seg ifc-tabs",u.dataset.noSheetDrag="true";let h=document.createElement("button");h.type="button";let f=document.createElement("button");f.type="button",u.append(h,f);let d=document.createElement("div");d.className="ifc-crumbs",d.dataset.noSheetDrag="true";let x=document.createElement("div");x.className="ifc-tree";let y=document.createElement("div");y.className="ifc-panes";let g=document.createElement("div");g.className="ifc-panes-track";let m=ge(),v=ge();g.append(m.root,v.root),y.append(g),x.append(y);let T=document.createElement("div");T.className="ifc-info",T.hidden=!0;let M=document.createElement("div");M.className="ifc-head",M.append(a,u,d),o.append(M,x,T),e.append(t,o);let E=document.createElement("div");E.id="ifc-row-menu",E.hidden=!0,E.className="ifc-menu",document.body.append(E);let R=new Set,_=new Set,A="spatial",U=null,k=null,Y=null,re=0,Q=null,B=[],K=!1,z="",ie={spatial:0,groups:0};function ge(){let O=document.createElement("div");O.className="ifc-pane";let P=document.createElement("div");P.className="ifc-list";let q=document.createElement("div");q.className="ifc-list-spacer";let G=document.createElement("div");return G.className="ifc-list-window",P.append(q,G),O.append(P),{root:O,list:P,spacer:q,windowEl:G}}function ae(){o.hidden=!0,t.hidden=!1,pe(),Te()}function ne(){t.hidden=!0,o.hidden=!1,ee(),requestAnimationFrame(()=>ee())}function fe(){n.openSheet(),ne(),e.scrollTop=0}i.addEventListener("click",()=>fe()),c.addEventListener("click",()=>{if(Q){he();return}ae(),e.scrollTop=0}),l.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),ee()}),h.addEventListener("click",()=>we("spatial")),f.addEventListener("click",()=>we("groups"));function we(O,{animate:P=!0,keepScroll:q=!1}={}){if(O!=="spatial"&&O!=="groups"||A===O)return;Q||(ie[A]=e.scrollTop),A=O;let G=P&&!Q;G||g.classList.add("is-instant"),Q?g.classList.toggle("is-groups",A==="groups"):(ee(),q||(e.scrollTop=ie[O]||0),Be()),G||requestAnimationFrame(()=>g.classList.remove("is-instant"))}function De(O){let P=n.index.elements[O];return P&&(P.name||P.id||P.type)||O}function le(){return A==="groups"?k:U}function Me(O){A==="groups"?k=O:U=O}function de(){if(d.replaceChildren(),A!=="spatial"||Q){d.hidden=!0;return}let O=U?Rm(n.index,U):[];if(!O.length){d.hidden=!0;return}d.hidden=!1,O.forEach((P,q)=>{if(q){let ce=document.createElement("span");ce.className="ifc-crumb-sep",ce.textContent="\u203A",d.append(ce)}let G=document.createElement("button");G.type="button",G.className="ifc-crumb",G.textContent=De(P),G.addEventListener("click",()=>{U=P;for(let ce of Cm(n.index,P))R.add(ce);ee(),Ke(P)}),d.append(G)})}function ee(){let O=!!Q||K;if(O){let P=B.length?B[B.length-1]:null;c.textContent=P?`\u2039 ${De(P)}`:`\u2039 ${n.t("ui.inspector")}`}else c.textContent=`\u2039 ${n.t("ui.menu")}`;l.textContent=n.t("ui.showAll"),l.hidden=!n.visibility.anyHidden(),r.textContent=n.t("ui.inspector"),h.textContent=n.t("ui.spatial"),f.textContent=n.t("ui.groups"),h.classList.toggle("is-active",A==="spatial"),f.classList.toggle("is-active",A==="groups"),u.hidden=O,x.hidden=O,T.hidden=!O,g.classList.toggle("is-groups",A==="groups"),de(),O?J():Be()}function ue(O){let P=e.getBoundingClientRect();return O.getBoundingClientRect().top-P.top+e.scrollTop}function Ce(){let O=e.getBoundingClientRect();return M.getBoundingClientRect().bottom-O.top+6}function Fe(){return A==="groups"?v:m}function Ne(){return A==="groups"?Im(n.index,_):Pm(n.index,R)}function Ue(O){return A==="groups"?Ih(n.index,O):Ph(n.index,O)}function qe(O,P,q){if(O.spacer.style.height=`${P.length*44}px`,!q){O.windowEl.replaceChildren();return}let G=lb(e.scrollTop,e.clientHeight||320,ue(O.list),P.length,44);O.windowEl.replaceChildren(),O.windowEl.style.transform=`translateY(${G.start*44}px)`;for(let ce=G.start;ce<G.end;ce++)O.windowEl.append(ut(P[ce]))}function Be(){let O=Pm(n.index,R),P=Im(n.index,_),q=A==="groups"?P:O;y.style.height=`${q.length*44}px`,qe(m,O,A==="spatial"),qe(v,P,A==="groups")}function ut(O){let P=n.index.elements[O.id],q=Ue(O.id),G=document.createElement("div");if(G.className="ifc-row",G.dataset.id=O.id,G.style.paddingLeft=`${ab(O.depth)+8}px`,G.style.height=`${44}px`,(O.id===Y||O.id===le())&&G.classList.add("is-target"),n.visibility.isHidden(O.id)&&G.classList.add("is-hidden"),q.length){let Pe=document.createElement("button");Pe.type="button",Pe.className="ifc-disclosure";let ke=(A==="groups"?_:R).has(O.id);Pe.textContent=ke?"\u25BE":"\u203A",Pe.setAttribute("aria-expanded",ke?"true":"false"),Pe.setAttribute("aria-label",ke?n.t("ui.collapse"):n.t("ui.expand")),Pe.addEventListener("click",oe=>{oe.stopPropagation();let Ie=A==="groups"?_:R;Ie.has(O.id)?Ie.delete(O.id):Ie.add(O.id),ee()}),G.append(Pe)}else{let Pe=document.createElement("span");Pe.className="ifc-disclosure-spacer",G.append(Pe)}let ce=document.createElement("span");ce.className="ifc-row-text";let ve=document.createElement("span");ve.className="ifc-row-name",ve.textContent=De(O.id);let Re=document.createElement("span");return Re.className="ifc-row-meta",Re.textContent=P?.type||"",ce.append(ve,Re),G.append(ce),mt(G,O.id),G}let it=0;function st(O){let P=performance.now();if(P-it<40)return;it=P;let q=fb(le(),O);Me(O),n.onFrame(O,{move:q==="frame"}),Se(O),de(),Be()}function Ye(O){return O instanceof Element&&!!O.closest(".ifc-disclosure")}function mt(O,P){let q=null,G=0,ce=()=>{G&&window.clearTimeout(G),G=0},ve=(ke,oe,Ie)=>{Ye(Ie)||(ce(),q={x:ke,y:oe,moved:0,consumed:!1},G=window.setTimeout(()=>{G=0,!(!q||q.consumed||wh({dt:500,dx:q.moved,dy:0,released:!1})!=="longpress")&&(q.consumed=!0,Ee(P,q.x,q.y))},500))},Re=(ke,oe)=>{if(!q)return;let Ie=Math.hypot(ke-q.x,oe-q.y);Ie>q.moved&&(q.moved=Ie),q.moved>12&&ce()},Pe=(ke,oe,Ie)=>{ce();let je=q;q=null,!(!je||je.consumed||Ye(Ie)||Math.max(je.moved,Math.hypot(ke-je.x,oe-je.y))>12)&&st(P)};O.addEventListener("pointerdown",ke=>{ke.button!==void 0&&ke.button!==0||ve(ke.clientX,ke.clientY,ke.target)}),O.addEventListener("pointermove",ke=>Re(ke.clientX,ke.clientY)),O.addEventListener("pointerup",ke=>{ke.pointerType!=="touch"&&Pe(ke.clientX,ke.clientY,ke.target)}),O.addEventListener("pointercancel",()=>ce()),O.addEventListener("touchend",ke=>{let oe=ke.changedTouches[0];oe&&Pe(oe.clientX,oe.clientY,ke.target)},{passive:!0})}function Se(O){Y=O,re&&window.clearTimeout(re),re=window.setTimeout(()=>{Y===O&&(Y=null),Q||Be()},1600),Q||Be()}function Ke(O){let q=Ne().findIndex(ce=>ce.id===O);if(q<0)return;let G=ue(Fe().list)+q*44;e.scrollTop=Math.max(0,G-Ce()),Be()}let Qe=!1;function Ee(O,P,q){E.replaceChildren(),E.hidden=!1,Qe=!1,me("ui.info",()=>p(O,{fromMenu:!0}));let G=n.visibility.isHidden(O);me(G?"ui.unhideThis":"ui.hideThis",()=>{G?n.visibility.unhide(O):n.visibility.hide(O),L()}),me("ui.hideOthers",()=>{n.visibility.hideOthers(O),L()}),me("ui.unhideOthers",()=>{n.visibility.unhideOthers(O),L()}),j(E,P,q)}function L(){n.onVisibility(),pe(),ee()}function me(O,P){let q=document.createElement("button");q.type="button",q.className="ifc-menu-btn",q.textContent=n.t(O);let G=!1,ce=ve=>{ve.preventDefault(),ve.stopPropagation(),!G&&(G=!0,P())};q.addEventListener("touchend",ce),q.addEventListener("click",ce),E.append(q)}function pe(){E.hidden=!0,E.replaceChildren()}function Te(){Q=null,B=[],K=!1,z="",T.replaceChildren()}function he(){if(B.length){Q=B.pop(),F(Q,{switchTab:!0,openInfo:!1,animate:!0}),ee();return}Te(),ee(),requestAnimationFrame(()=>{let O=le();O&&Ke(O)})}function p(O,P={}){n.index.elements[O]&&(pe(),K=!1,z="",P.push&&Q&&Q!==O?B.push(Q):P.fromMenu&&(B=[]),Q=O,F(O,{switchTab:!0,openInfo:!1,animate:!0}),n.openSheet(),ne(),ee())}function F(O,P={}){if(!n.index.elements[O])return;let q=Ch(n.index,O),G=q?"groups":"spatial";if(P.switchTab!==!1&&A!==G&&we(G,{animate:P.animate!==!1,keepScroll:!0}),q){for(let ce of rb(n.index,O))_.add(ce);k=O}else{for(let ce of Cm(n.index,O))R.add(ce);U=O}if(Y=O,P.openInfo){p(O,{push:!0});return}Q||(ee(),requestAnimationFrame(()=>Ke(O)))}function J(){T.replaceChildren();let O=Q?n.index.elements[Q]:null;if(!O){S(n.t("ui.noIfc"),z||"");return}let P=document.createElement("button");P.type="button",P.className="ifc-info-swap";let q=document.createElement("div");q.className="ifc-kicker";let G=document.createElement("div");G.className="ifc-name";let ce=O.name||O.id||"",ve=O.globalId||"",Re=!1,Pe=0,ke=()=>{q.hidden=!Re,q.textContent=Re?n.t("ui.globalId"):"",G.textContent=Re?ve:ce,G.className=Re?"ifc-gid":"ifc-name",P.setAttribute("aria-label",Re?ce:n.t("ui.globalId"))},oe=Zn=>{Zn.preventDefault(),Zn.stopPropagation();let oi=performance.now();oi-Pe<80||(Pe=oi,Re=!Re,ke())};ke(),P.append(q,G),P.addEventListener("touchend",oe),P.addEventListener("click",oe);let Ie=document.createElement("div");Ie.className="ifc-info-title",Ie.append(P),T.append(Ie),S(n.t("ui.type"),O.type||"");let je=cb(n.index,O.globalId);je.storey&&S(n.t("ui.storey"),je.storey.name||je.storey.id),je.space&&S(n.t("ui.space"),je.space.name||je.space.id);let Oe=db(O);Oe.length&&V(n.t("ui.dimensions"),Oe);let dt=ub(O);dt.length&&V(n.t("ui.note"),dt);let Rt=n.liveLines?.(O)||[];Rt.length&&V(n.t("home.live"),Rt),Ai(O)?(H(n.t("ui.parentGroups"),O.parentGroupIds||O.groups||[]),H(n.t("ui.childGroups"),O.childGroupIds||Ih(n.index,O.globalId)),H(n.t("ui.childElements"),O.memberIds||[])):H(n.t("ui.groups"),O.groups||[]);let Xt=n.actionsFor?.(O)||[];w(Xt),w(C(O.globalId))}function C(O){if(!O||!n.index.elements[O])return[];let P=n.visibility.isHidden(O);return[{id:"frame",labelKey:"ui.frame",run:()=>n.onFrame(O,{move:!0})},{id:"hide",labelKey:P?"ui.unhideThis":"ui.hideThis",run:()=>{P?n.visibility.unhide(O):n.visibility.hide(O)}},{id:"hideOthers",labelKey:"ui.hideOthers",run:()=>n.visibility.hideOthers(O)},{id:"unhideOthers",labelKey:"ui.unhideOthers",run:()=>n.visibility.unhideOthers(O)}]}function w(O){if(!O.length)return;let P=document.createElement("div");P.className="ifc-actions";for(let q of O){let G=document.createElement("button");G.type="button",G.className="ifc-action",G.textContent=q.label||n.t(q.labelKey),G.addEventListener("click",ce=>{ce.preventDefault(),ce.stopPropagation(),q.run(),n.onVisibility(),ee()}),P.append(G)}T.append(P)}function S(O,P){let q=document.createElement("div");q.className="ifc-line";let G=document.createElement("div");G.className="ifc-kicker",G.textContent=O;let ce=document.createElement("div");ce.className="ifc-value",ce.textContent=P,q.append(G,ce),T.append(q)}function V(O,P){let q=document.createElement("div");q.className="ifc-line";let G=document.createElement("div");G.className="ifc-kicker",G.textContent=O;let ce=document.createElement("div");ce.className="ifc-note",ce.textContent=P.join(`
`),q.append(G,ce),T.append(q)}function H(O,P){let q=(P||[]).filter(ve=>n.index.elements[ve]);if(!q.length)return;let G=document.createElement("div");G.className="ifc-info-section";let ce=document.createElement("div");ce.className="ifc-kicker",ce.textContent=O,G.append(ce);for(let ve of q){let Re=document.createElement("button");Re.type="button",Re.className="ifc-info-link";let Pe=document.createElement("span");Pe.className="ifc-row-name",Pe.textContent=De(ve);let ke=document.createElement("span");ke.className="ifc-row-meta",ke.textContent=n.index.elements[ve]?.type||"",Re.append(Pe,ke),Re.addEventListener("click",oe=>{oe.preventDefault(),oe.stopPropagation(),F(ve,{switchTab:!0,openInfo:!0,animate:!0})}),G.append(Re)}T.append(G)}function j(O,P,q){O.hidden=!1,O.style.left="0px",O.style.top="0px";let G=O.getBoundingClientRect(),ce=8,ve=Math.max(ce,window.innerWidth-G.width-ce),Re=Math.min(Math.max(ce,P),ve),Pe=q+8;Pe+G.height>window.innerHeight-ce&&(Pe=Math.max(ce,q-G.height-8)),O.style.left=`${Re}px`,O.style.top=`${Pe}px`}function te(O,P={}){pe();let q=O?.globalId;q&&n.index.elements[q]?(K=!1,z="",B=[],Q=q,F(q,{switchTab:!0,openInfo:!1,animate:!1}),n.onFrame?.(q,{move:!1})):(Q=null,B=[],K=!0,z=P.partName||""),n.openSheet(),ne(),ee()}function Z(O){n.index.elements[O]&&(Te(),n.openSheet(),ne(),F(O,{switchTab:!0,openInfo:!1,animate:!1}))}e.addEventListener("scroll",()=>{!o.hidden&&!Q&&!K&&Be()},{passive:!0});let W=O=>O instanceof Node?!(!E.hidden&&E.contains(O)):!0;return document.addEventListener("pointerup",()=>{E.hidden||(Qe=!0)},!0),document.addEventListener("pointerdown",O=>{let P=O.target;!E.hidden&&Qe&&W(P)&&pe()},!0),{open:fe,refresh:ee,inspect:te,reveal:Z,isInspectorOpen:()=>!o.hidden}}function mb(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){let r=n.elements[i];if(Ai(r)){let s=ms(n,i).filter(o=>o!==i&&!Ai(n.elements[o]));return s.length?s.every(o=>e.has(o)):e.has(i)}return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let r of ms(n,i))(!Ai(n.elements[r])||r===i)&&e.add(r)},unhide(i){for(let r of ms(n,i))e.delete(r)},hideOthers(i){let r=new Set(ms(n,i));for(let s of t())r.has(s)||Ai(n.elements[s])||e.add(s)},unhideOthers(i){let r=new Set(ms(n,i));for(let s of t())r.has(s)||Ai(n.elements[s])||e.delete(s)},showAll(){e.clear()}}}var Fm=.3,_b=1.5,i2=.5,Lm=new Xe,r2=new N,Fh=new N,Dm=new N,Lh=new N,Dh=new N,ra=new N,Nh=new N,Nm=new Wt,gb=new Wt,Oh=new Wt,xb=new Wt,Om=new is,s2=new N(0,1,0),yb=new hi;function o2(n,e,t=Fm,i=_b){let r=Number.isFinite(e)&&e>0?e:0,s=Number.isFinite(n)&&n>0?n:null;return s!=null&&s>=t?s:s!=null?Math.max(i,t):r>=t?r:Math.max(i,t)}function a2(n,e,t=Fm,i=_b){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function l2(n,e,t=Fm,i=i2){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function c2(n,e,t,i=1){let r=2*Math.PI*i/Math.max(1,t);return{theta:-n*r,phi:-e*r}}function u2(n,e,t,i,r){if(!i&&!r||(Dh.copy(n.position).sub(t),Dh.lengthSq()<1e-12))return!1;ra.copy(n.up),ra.lengthSq()<1e-12?ra.set(0,1,0):ra.normalize(),xb.setFromUnitVectors(ra,s2),Lh.copy(Dh).applyQuaternion(xb),Om.setFromVector3(Lh);let s=1e-6;return r=Math.min(Math.PI-s,Math.max(s,Om.phi+r))-Om.phi,Nm.setFromAxisAngle(ra,i),Nh.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(Nm),Nh.lengthSq()<1e-12?!1:(Nh.normalize(),gb.setFromAxisAngle(Nh,r),Oh.copy(gb).multiply(Nm),Lh.copy(Dh).applyQuaternion(Oh),n.position.copy(t).add(Lh),e.sub(t).applyQuaternion(Oh).add(t),n.quaternion.premultiply(Oh),!0)}function h2(n,e,t){return!(t>0)||(n.getWorldDirection(Fh),Dm.copy(n.position).addScaledVector(Fh,t),Dm.distanceToSquared(e)<1e-12)?!1:(e.copy(Dm),!0)}function f2(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let r of i){let s=r&&r.clippingPlanes;if(s){for(let o of s)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function d2(n,e,t,i,r){if(!e||!t||e.isOrthographicCamera)return null;let s=n.getBoundingClientRect(),o=s.width||n.clientWidth||1,a=s.height||n.clientHeight||1;Lm.x=(i-s.left)/o*2-1,Lm.y=-((r-s.top)/a)*2+1,t.updateWorldMatrix(!0,!0),yb.setFromCamera(Lm,e);let c=yb.intersectObject(t,!0);e.getWorldDirection(Fh);for(let l of c){let u=l.object;if(!u.visible||Ws(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!f2(u,l.point))continue;let f=l.distance;if(!(f>1e-4))continue;let d=r2.copy(l.point).sub(e.position).dot(Fh);if(d>1e-4)return{point:l.point.clone(),slant:f,depth:d}}return null}function p2(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),r=new Map,s=null;function o(){return t.enabled!==!1&&!i()}function a(){let M=n.getCamera();return!!(M&&M.isPerspectiveCamera)}function c(M,E){return d2(e,n.getCamera(),n.getRoot(),M,E)}function l(M){let E=n.getCamera();!E||!a()||M==null||h2(E,t.target,M)}function u(M,E){let R=n.getCamera();if(!R||!a())return;let _=c(M,E),A=R.position.distanceTo(t.target);l(o2(_?_.slant:null,A))}function h(M,E){let R=n.getCamera();if(!R||!a())return;let _=c(M,E),A=R.position.distanceTo(t.target);l(a2(_?_.depth:null,A))}function f(){s=null,t.enableRotate=!0}function d(M){if(r.set(M.pointerId,{x:M.clientX,y:M.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(r.size>=2){f(),t.zoomToCursor=!0;let k=x(M);u(k.x,k.y);return}let E=M.pointerType==="touch",R=M.button??0;if(!E&&R===2){f(),h(M.clientX,M.clientY);return}if(!E&&R===1){f(),u(M.clientX,M.clientY);return}if(!E&&R!==0)return;if(!E&&(M.shiftKey||M.ctrlKey||M.metaKey)){f(),h(M.clientX,M.clientY);return}let _=n.getCamera(),A=c(M.clientX,M.clientY),U=_?_.position.distanceTo(t.target):0;if(!A||!l2(A.slant,U)){f();return}t.enableRotate=!1,s={id:M.pointerId,x:M.clientX,y:M.clientY,lastX:M.clientX,lastY:M.clientY,point:A.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function x(M){let E=M.clientX,R=M.clientY,_=1;for(let[A,U]of r)A!==M.pointerId&&(E+=U.x,R+=U.y,_+=1);return{x:E/_,y:R/_}}function y(M){let E=r.get(M.pointerId);if(E&&(E.x=M.clientX,E.y=M.clientY),!s||M.pointerId!==s.id||r.size!==1||!o())return;let R=n.getCamera();if(!R)return;let _=M.clientX-s.lastX,A=M.clientY-s.lastY;if(!s.dragging){if(Math.hypot(M.clientX-s.x,M.clientY-s.y)<=Th)return;s.dragging=!0}if(!_&&!A)return;let U=c2(_,A,e.clientHeight||1,t.rotateSpeed);u2(R,t.target,s.point,U.theta,U.phi),R.lookAt(t.target),s.lastX=M.clientX,s.lastY=M.clientY}function g(M){r.delete(M.pointerId),s&&s.id===M.pointerId&&f(),r.size<2&&(t.zoomToCursor=!1),r.size===0&&(t.enableRotate=!0)}function m(M){g(M)}function v(M){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||s&&s.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(M.clientX,M.clientY)}function T(){r.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:y,onPointerUp:g,onPointerCancel:m,onWheel:v,onWheelDone:T}}function vb(n){let e=p2(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var sa=class extends Bi{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let r=0;r<t;r++)i[6*r]=e[r].x,i[6*r+1]=e[r].y,i[6*r+2]=e[r].z||0,i[6*r+3]=e[r+1].x,i[6*r+4]=e[r+1].y,i[6*r+5]=e[r+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Uh=class extends cs{constructor(e=new sa,t=new sr({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var m2='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',g2=420,x2=36,y2=new N,bb=new N,Mb=new N,Um=new N,Xs=new N,gs=new N;function zm(n){return new N(n[0]*.001,n[2]*.001,-n[1]*.001)}function Bm(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function Sb(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function _2(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function Bh(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function v2(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/g2,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function b2(n,e){if(e==="plate")return x2;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function oa(n,e,t,i="center",r=null,s=1){let o=Number.isFinite(s)&&s>0?s:1,a=Math.max(8,Math.round(t*o)),c=n.map(_=>String(_)).filter(_=>_.length),l=document.createElement("canvas"),u=l.getContext("2d"),h=`600 ${a}px ${m2}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),x=Math.ceil(a*1.25);u&&(u.font=h);let y=a;if(u)for(let _ of c)y=Math.max(y,u.measureText(_).width);let g=Math.ceil(y+f*2),m=Math.ceil(Math.max(c.length,1)*x+d*2),v=2;l.width=g*v,l.height=m*v;let T=l.getContext("2d");if(T){T.scale(v,v),T.clearRect(0,0,g,m);let _=e==="plate";T.font=h,T.textAlign="left",T.textBaseline="middle",T.lineJoin="round",T.miterLimit=2,T.lineWidth=Math.max(2,a*.28),T.strokeStyle=_?"#ffffff":"rgba(0,0,0,0.92)",T.fillStyle=r||(_?"#141414":"#f7f7f8"),c.forEach((A,U)=>{let k=f,Y=d+x*U+x*.5;T.strokeText(A,k,Y),T.fillText(A,k,Y)})}let M=new Cr(l);M.colorSpace=At,M.flipY=!0,M.needsUpdate=!0;let E=new tn({map:M,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Ft}),R=new ft(new ti(1,1),E);return R.renderOrder=30,R.frustumCulled=!1,R.userData.cssWidth=g,R.userData.cssHeight=m,R.userData.anchor=i,R.userData.fill=r,R.userData.fontScale=o,R}function km(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function dr(n,e=!1){let t=new sa;t.setPositions([0,0,0,0,0,0]);let i=new sr({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let r=new Uh(t,i);return r.renderOrder=25,r.frustumCulled=!1,r.computeLineDistances(),r}function zr(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function wb(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:r,getVisibleWidthM:s,getTarget:o}=n,a=n.getExaggeration||(()=>1),c=new Tt;c.name="Annotations",c.userData.blueprintAnnotations=!0,e.add(c);let l=null,u="viewer",h=!0,f=0,d=[],x=null,y=null,g=null;function m(){return u==="plate"?1315860:15921908}function v(ne){return ne&&ne.color!=null?Bm(ne.color,m()):l&&l.annotationColor!=null?Bm(l.annotationColor,m()):m()}function T(ne){return km(v(ne))}function M(ne){let fe=Number(ne&&ne.size);return Number.isFinite(fe)&&fe>0?fe:1}function E(ne){ne.traverse(fe=>{fe.geometry&&fe.geometry.dispose();let we=fe.material;we&&(we.map&&we.map.dispose(),we.dispose())})}function R(){for(let ne of[...c.children])c.remove(ne),E(ne);d=[],x=null,y=null,g=null}function _(){return b2(i(),u)}function A(){c.visible=!!l&&h}function U(){if(R(),f=_(),!l){A();return}let ne=r(),fe=m(),we=f,De=Array.isArray(l.annotations)?l.annotations:[];for(let ee of De)if(!(!ee||typeof ee!="object")){if(ee.kind==="callout"&&Array.isArray(ee.anchor)){let ue=Bh(ee.text,ne);if(!ue)continue;let Ce=oa(ue.split(`
`),u,we,"center",T(ee),M(ee)),Fe=(ee.leader===!1?[]:Sb(ee)).map(()=>dr(v(ee)));c.add(...Fe,Ce),d.push({kind:"callout",sprite:Ce,lines:Fe,data:ee})}else if(ee.kind==="dim"&&Array.isArray(ee.a)&&Array.isArray(ee.b)){let ue=v(ee),Ce=oa(["0"],u,we,"center",km(ue),M(ee)),Fe=dr(ue),Ne=dr(ue),Ue=dr(ue),qe=dr(ue),Be=dr(ue);c.add(Fe,Ne,Ue,qe,Be,Ce),d.push({kind:"dim",sprite:Ce,lines:[Fe,Ne,Ue,qe,Be],data:ee})}else if(ee.kind==="line"&&Array.isArray(ee.points)&&ee.points.length>=2){let ue=Bm(ee.color,m()),Fe=[dr(ue,!!ee.dashed)];ee.arrow&&Fe.push(dr(ue,!1),dr(ue,!1));let Ne=null,Ue=Bh(ee.text,ne);Ue&&(Ne=oa(Ue.split(`
`),u,we,"center",km(ue),M(ee))),c.add(...Fe),Ne&&c.add(Ne),d.push({kind:"line",sprite:Ne,lines:Fe,data:ee})}}let le=Bh(l.title,ne),Me=l.project?String(l.project):"",de=[...le.split(`
`),Me].filter(Boolean);de.length&&(x=oa(de,u,we,"topleft"),c.add(x)),y=oa(["1:1"],u,we,"bottomleft"),g=dr(fe),c.add(g,y),A()}function k(ne){let fe=zm(ne),we=a();return we!==1&&(fe.y*=we),fe}function Y(ne,fe=y2){return fe.copy(ne).project(t())}function re(ne,fe,we,De=new N){return De.set(ne,fe,we).unproject(t())}function Q(ne){let fe=t(),we=i(),De=Math.max(1,we.clientHeight);if(fe.isOrthographicCamera){let de=Math.max(fe.zoom,1e-6);return(fe.top-fe.bottom)/de/De}let le=Math.max(fe.position.distanceTo(ne),1e-4),Me=(fe.fov||45)*Math.PI/180;return 2*Math.tan(Me/2)*le/De}let B=new N,K=new N;function z(ne,fe){let we=t(),De=Q(fe),le=De*ne.userData.cssWidth,Me=De*ne.userData.cssHeight;B.set(1,0,0).applyQuaternion(we.quaternion),K.set(0,1,0).applyQuaternion(we.quaternion);let de=ne.userData.anchor||"center";ne.position.copy(fe),de==="topleft"?(ne.position.addScaledVector(B,le*.5),ne.position.addScaledVector(K,-Me*.5)):de==="bottomleft"&&(ne.position.addScaledVector(B,le*.5),ne.position.addScaledVector(K,Me*.5)),ne.quaternion.copy(we.quaternion),ne.scale.set(le,Me,1)}function ie(){let ne=i(),fe=Math.max(1,ne.width),we=Math.max(1,ne.height);c.traverse(De=>{let le=De.material;le&&le.resolution&&le.resolution.set(fe,we)})}function ge(ne,fe){let we=oa(fe,u,f||_(),ne.userData.anchor,ne.userData.fill,ne.userData.fontScale||1);ne.material.map?.dispose(),ne.material.dispose(),ne.material=we.material,ne.userData.cssWidth=we.userData.cssWidth,ne.userData.cssHeight=we.userData.cssHeight,we.geometry.dispose()}function ae(){if(!l||!h||(_()!==f&&U(),!c.visible))return;ie();let fe=r();t().updateMatrixWorld();for(let de of d)if(de.kind==="callout"){let ee=k(de.data.anchor),ue=Y(ee,bb),Ce=Array.isArray(de.data.offset)?de.data.offset:[.08,.06],Fe=ue.x+Number(Ce[0]||0)*2,Ne=ue.y+Number(Ce[1]||0)*2,Ue=re(Fe,Ne,ue.z,Mb);z(de.sprite,Ue);let qe=Q(Ue),Be=qe*de.sprite.userData.cssWidth*.5,ut=Sb(de.data);for(let it=0;it<de.lines.length;it+=1){let st=k(ut[it]||de.data.anchor);Xs.copy(Ue).sub(st);let Ye=Xs.length();Ye>Be+qe?(Xs.setLength(Ye-Be),Xs.add(st)):Xs.copy(Ue),zr(de.lines[it],st,Xs)}}else if(de.kind==="dim"){let ee=k(de.data.a),ue=k(de.data.b),Ce=Y(ee,bb),Fe=Y(ue,Mb),Ne=Fe.x-Ce.x,Ue=Fe.y-Ce.y,qe=Math.hypot(Ne,Ue)||1e-6;Ne/=qe,Ue/=qe;let Be=Number(de.data.offset)||.04,ut=-Ue*Be*2,it=Ne*Be*2,st=(Ce.z+Fe.z)*.5,Ye=re(Ce.x+ut,Ce.y+it,st,new N),mt=re(Fe.x+ut,Fe.y+it,st,new N),Se=Q(Ye),Ke=Se*6,Qe=Se*8;gs.copy(Ye).sub(ee);let Ee=gs.length()||1;gs.multiplyScalar((Ee+Qe)/Ee);let L=ee.clone().add(gs);gs.copy(mt).sub(ue);let me=gs.length()||1;gs.multiplyScalar((me+Qe)/me);let pe=ue.clone().add(gs),Te=ee.clone().lerp(Ye,Math.min(.85,Ke/Ee)),he=ue.clone().lerp(mt,Math.min(.85,Ke/me));zr(de.lines[0],Te,L),zr(de.lines[1],he,pe),zr(de.lines[2],Ye,mt);let p=Se*10,J=re(Ce.x+ut-Ue*.012,Ce.y+it+Ne*.012,st,new N).sub(Ye);J.lengthSq()<1e-16?J.set(0,p,0):J.setLength(p),zr(de.lines[3],Ye.clone().sub(J),Ye.clone().add(J)),zr(de.lines[4],mt.clone().sub(J),mt.clone().add(J)),Um.copy(Ye).lerp(mt,.5);let C=re(Ce.x+ut-Ue*.03,Ce.y+it+Ne*.03,st,new N).sub(re(Ce.x+ut,Ce.y+it,st,new N));C.lengthSq()>1e-12&&Um.add(C);let S=Bh(de.data.text,fe)||_2(ee.distanceTo(ue));de.sprite.userData.labelText!==S&&(ge(de.sprite,[S]),de.sprite.userData.labelText=S),z(de.sprite,Um)}else if(de.kind==="line"){let ee=de.data.points.map(Ce=>k(Ce)),ue=[];for(let Ce of ee)ue.push(Ce.x,Ce.y,Ce.z);if(de.lines[0].geometry.setPositions(ue),de.lines[0].computeLineDistances(),de.data.arrow&&ee.length>=2&&de.lines.length>=3){let Ce=ee[ee.length-2],Fe=ee[ee.length-1],Ne=Fe.clone().sub(Ce);if(Ne.lengthSq()>1e-12){Ne.normalize();let Ue=Q(Fe),qe=Ne.clone().multiplyScalar(-Ue*16),Be=new N().crossVectors(Ne,t().up).normalize().multiplyScalar(Ue*7);Be.lengthSq()<1e-16&&Be.set(Ue*7,0,0),zr(de.lines[1],Fe,Fe.clone().add(qe).add(Be)),zr(de.lines[2],Fe,Fe.clone().add(qe).sub(Be))}}if(de.sprite){let Ce=ee[0].clone().lerp(ee[ee.length-1],.5);z(de.sprite,Ce)}}let De=Y(o(),Xs).z;if(x){let de=re(-.94,.9,De,new N);z(x,de)}let le=s(),Me=v2(le??NaN);if(y&&g){let de=le!=null&&le>8?2:1,ee=re(-.9,-.86,De,new N),ue=re(-.9+.08,-.86,De,new N).sub(ee),Ce=Q(ee),Fe=le&&le>0?de/le*Math.max(1,i().clientWidth):80;ue.lengthSq()>1e-12?ue.setLength(Math.max(Fe*Ce,Ce*40)):ue.set(Ce*80,0,0),zr(g,ee,ee.clone().add(ue));let Ne=y.userData.labelText,Ue=Me?`${Me}  \xB7  ${Math.round(de*1e3)} mm`:"";Ne!==Ue&&(ge(y,Ue?[Ue]:["\u2014"]),y.userData.labelText=Ue);let qe=re(-.9,-.8,De,new N).sub(ee);z(y,ee.clone().add(qe))}}return{group:c,setSpec(ne){l=ne&&typeof ne=="object"?ne:null,U(),ae()},setInk(ne){u=ne==="plate"?"plate":"viewer",U(),ae()},setVisible(ne){h=!!ne,A(),c.visible&&ae()},isVisible(){return h},relocalize(){U(),ae()},glyphBoundsNdc(){let ne=i(),fe=Math.max(1,ne.clientWidth),we=Math.max(1,ne.clientHeight),De=1/0,le=-1/0,Me=1/0,de=-1/0,ee=!1;for(let ue of d){let Ce=ue.sprite;if(!Ce||Ce===x||Ce===y||ue.kind!=="callout"&&ue.kind!=="dim"&&ue.kind!=="line")continue;let Fe=Y(Ce.position),Ne=(Ce.userData.cssWidth||0)/fe,Ue=(Ce.userData.cssHeight||0)/we;De=Math.min(De,Fe.x-Ne),le=Math.max(le,Fe.x+Ne),Me=Math.min(Me,Fe.y-Ue),de=Math.max(de,Fe.y+Ue),ee=!0}return ee?{minX:De,maxX:le,minY:Me,maxY:de}:null},update:ae,clear(){l=null,R(),c.visible=!1}}}function Eb(n){return n/25.4*72}function Hm(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function M2(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,r)=>{e.toBlob(s=>{s?i(s):r(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function S2(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function w2(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Nl(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function E2(n){let e=n.width,t=n.height,i=n.data,r=new Uint8Array(e*t*3);for(let M=0,E=0;M<i.length;M+=4,E+=3){let R=i[M+3]/255;r[E]=Math.round(i[M]*R+255*(1-R)),r[E+1]=Math.round(i[M+1]*R+255*(1-R)),r[E+2]=Math.round(i[M+2]*R+255*(1-R))}let{bytes:s,filter:o}=await w2(r),a=Eb(420),c=Eb(297),l=`q
${a.toFixed(3)} 0 0 ${c.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(l),h=[],f=0;function d(M){h.push(M),f+=M.length}let x=[0];function y(M,E){x[M]=f,d(Nl(`${M} 0 obj
`));for(let R of E)d(Nl(R));d(Nl(`
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
`,d(Nl(m));let v=new Uint8Array(f),T=0;for(let M of h)v.set(M,T),T+=M.length;return new Blob([v],{type:"application/pdf"})}async function Tb(n){let e=await M2(n),t=await S2(e),i=await E2(t);return{png:e,pdf:i}}var Vm="scene";function C2(){try{return(new URLSearchParams(location.search).get(Vm)||"").trim()}catch{return""}}function Rb(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set(Vm,t):e.searchParams.delete(Vm);let i=`${e.pathname}${e.search}${e.hash}`,r=`${location.pathname}${location.search}${location.hash}`;i!==r&&history.replaceState(null,"",i)}catch{}}function P2(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],r=Array.isArray(t.partGroups)?t.partGroups:[],s=Array.isArray(t.doors)?t.doors:[],o=Array.isArray(t.windows)?t.windows:[],a=ib(t.ifc),c=new Map,l=()=>{},u=String(t.scene!=null?t.scene:C2()).trim();c_(),Xp(document);let h=[],f=null,d=1842206,x=!0,y=Hy(),g=_y(),m=new Map,v=new Map,T=new Map,M=new Map,E=new Set,R=new Map,_=new Map,A=new Map,U=new Set,k=null;k=s_(b=>{x=b,d=b?1842206:15263981,f&&(f.background=new $e(d)),document.documentElement.style.colorScheme=b?"dark":"light",m.size&&ye()});let Y=new Xu({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});Y.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Y.outputColorSpace=At,Y.toneMapping=Ls,Y.toneMappingExposure=1.05,Y.localClippingEnabled=!0;let re=Dy(Y);f=new Xn,f.background=new $e(d);let Q=1,B=new Tt;B.name="VerticalExaggeration",f.add(B);function K(b){let I=Number(b);Q=Number.isFinite(I)&&I>0?I:1,B.scale.set(1,Q,1)}let z=30,ie=120,ge=75,ae=125,ne="perspective",fe=ge,we=ge,De=1,le=!1,Me=new un(45,1,.01,1e6),de=new Oi(-1,1,1,-1,.01,1e6),ee=Me,ue=new ju(ee,n);ue.enableDamping=!1,ue.screenSpacePanning=!0;let Ce=()=>!1,Fe=zv({canvas:n,getCamera:()=>ee,records:s,isBlocked:()=>Ce(),onLongPress:b=>l(b),onToggle:(b,I)=>Qb(b,I)}),Ne=qv({canvas:n,getCamera:()=>ee});window.blueprintsFeedback=Ne;let Ue=new Map,qe=new Map,Be=Gv(o),ut={on:!0,level:1,color:Tm(3e3)},it={on:!1,level:1,color:Rh},st=new Map,Ye=null,mt=b=>b&&Ye?Ye.device(b.globalId):void 0;$v(Fe.taps,{elementOf:b=>Vl(b),isOn:b=>!!Ue.get(b.globalId),isOpen:b=>{let I=mt(b);if(I?.deviceType==="WindowCovering"){let X=I.state?.windowCovering?.targetPositionLiftPercent100ths;return X!=null&&X<5e3}return!!qe.get(b.globalId)},isLive:b=>!!mt(b),onLight:b=>Yb(b),onSwitch:(b,I)=>nM(b,I),switchActions:b=>iM(b),onCover:b=>rM(b),coverActions:b=>sM(b),onWindow:b=>oM(b),windowAccepts:(b,I)=>tM(b,I?.object),targetsFor:(b,I)=>jb(b,I)});let Se=wb({scene:f,getCamera:()=>ee,getCanvas:()=>n,getLocale:xh,getVisibleWidthM:()=>{if(!ee.isOrthographicCamera)return null;let b=Math.max(ee.zoom,1e-6);return(ee.right-ee.left)/b},getTarget:()=>ue.target,getExaggeration:()=>Q}),Ke=null,Qe=null,Ee=new Ka(16777215,.45);f.add(Ee);let L=new Qi(16777215,1.15);L.position.set(.6,1,.4),f.add(L);let me=new Qi(16777215,.4);me.position.set(-.5,.2,-.6),f.add(me);let pe=new qo(Y);f.environment=pe.fromScene(new Ju,.04).texture,pe.dispose();let Te=null;function he(){return Te||(Te=cv({renderer:Y,scene:f,baseLights:[Ee,L,me],catalogueUrl:t.materialsUrl||null,catalogueText:t.materialsText||null,assetSlots:Array.isArray(t.fixtureAssets)?t.fixtureAssets:[],onChange:()=>{p?.traverse(b=>{if(!b.isMesh)return;let I=Array.isArray(b.material)?b.material:[b.material];for(let X of I)X?.userData?.bpOwned&&X.userData.bpCatalogueId&&Te?.registry.bind(X)}),Qt=!0}}),Te)}window.blueprintsRealistic={report:()=>Te?Te.report(m):null,renderer:Y,lights:()=>Object.values(a.elements).filter(b=>{let I=b?Qn(b):[];return I.length>0&&I.every(X=>X.userData.bpPart==="light")}).map(b=>({globalId:b.globalId,name:b.name})),toggleLight:b=>{let I=a.elements[b];I&&og(I)},get controller(){return Te}};let p=null;vb({canvas:n,controls:ue,getCamera:()=>ee,getRoot:()=>p,isBlocked:()=>Ce()||ue.enabled===!1});let F=new vt,J=new N,C=new N,w=new N,S=new N,V=new N,H=[],j=1,te=!1,Z=!1,W=!1;new Zo().parse(e,"",b=>{p=b.scene,B.add(p),Fe.bind(p),p.traverse(X=>{if(!X.isMesh)return;let $=Lv(X);X.userData.bpPart=$.part,X.userData.bpElementKey=$.element,$.element&&(c.has($.element)||c.set($.element,[]),c.get($.element).push(X));let _e=$.part;if(m.has(_e)||m.set(_e,[]),m.get(_e).push(X),X.material){let Ae=Array.isArray(X.material)?X.material:[X.material];for(let Le of Ae)"side"in Le&&(Le.side=Ft)}}),$s(),Je(),ze(),xt(),Zh();let I=Ht(u);I&&(Ze=`scene:${String(I.id).trim()}`),Et(),aa(),jn(),ys(),ye(),I&&xs(I),Ct(),k?.refreshPartialHeight(),Db(),Nb(),Js(),Qs()},b=>{P(String(b?.message||b))});function P(b){let I=document.getElementById("err");I&&(I.style.display="block",I.textContent=b)}function q(){p&&(F.setFromObject(p),F.getSize(J),F.getCenter(C))}function G(){let b=Math.max(1,n.clientWidth),I=Math.max(1,n.clientHeight);return b/I}function ce(b,I){let X=b*Math.PI/180;return 2*Math.atan(Math.tan(X/2)/Math.max(I,1e-6))}function ve(){let b=G();Me.aspect=b,Me.fov=ce(fe,b)*180/Math.PI,Me.updateProjectionMatrix()}function Re(b,I){let X=G(),$=Math.max(b,1e-6)*Math.tan(I/2),_e=$*X;de.left=-_e,de.right=_e,de.top=$,de.bottom=-$,de.updateProjectionMatrix()}function Pe(){let b=G(),X=Math.max(de.top,1e-6)*b;de.left=-X,de.right=X,de.updateProjectionMatrix()}function ke(b,I){let X=G(),$=Math.max(b,1e-6),Ae=Math.max(I,1e-6),Le=Ae*X;Le<$&&(Le=$,Ae=Le/Math.max(X,1e-6)),De=1,de.left=-Le,de.right=Le,de.top=Ae,de.bottom=-Ae,de.updateProjectionMatrix(),Oe()}function oe(b){let I=Math.max(b,1e-4),X=w.copy(ee.position).sub(ue.target);X.lengthSq()<1e-12?X.set(0,0,1):X.normalize(),ee.position.copy(ue.target).addScaledVector(X,I)}function Ie(b){b!==ee&&(b.position.copy(ee.position),b.quaternion.copy(ee.quaternion),b.up.copy(ee.up),b.near=ee.near,b.far=ee.far,ee=b,ue.object=ee,ue.update())}function je(){let b=Math.abs(mr)>.05||Math.abs(gr)>.05||Math.abs(Ri-1)>.001?Ri:1;return De*b}function Oe(){ee.zoom=je(),ee.updateProjectionMatrix()}function dt(){if(le||Z||!ee.isOrthographicCamera)return;let b=Math.abs(mr)>.05||Math.abs(gr)>.05||Math.abs(Ri-1)>.001?Ri:1;De=Math.max(ee.zoom/Math.max(b,1e-6),1e-6)}function Rt(){if(ne==="ortho")return;we=fe;let b=ee.position.distanceTo(ue.target),I=ce(fe,G());Re(b,I),De=1,ai(()=>{le=!0,Ie(de),ne="ortho",Oe(),le=!1}),Hn()}function Xt(b){if(ne!=="ortho")return;let I=Hr(b??we),X=Math.max(de.top,1e-6)/Math.max(De,1e-6),$=ce(I,G()),_e=X/Math.max(Math.tan($/2),1e-8);fe=I,we=I,De=1,ai(()=>{le=!0,Ie(Me),ne="perspective",ve(),oe(_e),Oe(),xi(),ue.update(),le=!1}),Hn()}function Zn(b,I={}){let X=Hr(b);if(ne==="ortho"){Xt(X);return}let $=G(),_e=ce(fe,$),Ae=ce(X,$),Le=ee.position.distanceTo(ue.target);fe=X,we=X,ai(()=>{if(ve(),I.reframe!==!1){let Ge=Math.tan(_e/2)/Math.max(Math.tan(Ae/2),1e-8);oe(Le*Ge),xi(),ue.update()}Oe()}),Hn()}function oi(){ne==="ortho"?Xt(we):Rt()}function Hr(b){return Math.min(ie,Math.max(z,b))}function Vr(){return ne==="ortho"?ae:fe}function Ol(b){return b>ie?"ISO":`${Math.round(b)}\xB0`}function Hn(){Ke&&(Ke.value=Vr()),Qe&&(Qe.textContent=ne==="ortho"?"ISO":`${Math.round(fe)}\xB0`),Ke?.refresh()}function qs(b){if(b>ie){ne!=="ortho"?Rt():Hn();return}let I=Hr(b);ne==="ortho"?Xt(I):Zn(I,{reframe:!0})}function aa(){let b=document.getElementById("fov");if(!b)return;b.replaceChildren();let I=document.createElement("div");I.className="fov-row";let X=document.createElement("span");X.className="fov-label",X.textContent=Ut("ui.fov"),Qe=document.createElement("span"),Qe.className="fov-value",Qe.textContent=`${Math.round(fe)}\xB0`,Ke=gh({min:z,max:ae,step:1,value:Vr(),ariaLabel:"Field of view",formatAriaValue:Ol,onInput:Le=>qs(Le),onChange:Le=>qs(Le),onTap:()=>oi()}),Ke.el.classList.add("fov-range");let $=document.createElement("div");$.className="fov-detent",$.setAttribute("aria-hidden","true");let _e=(ie-z)/(ae-z);$.style.left=`${_e*100}%`,Ke.el.querySelector(".coop-range-track")?.append($),I.append(X,Ke.el,Qe),b.append(I),Hn()}function xi(){let b=Math.max(J.x,J.y,J.z,.01),I=ee.position.distanceTo(ue.target),X=Math.round(Math.min(Math.max(I/200,b/5e3,.001),I/10)*1e4)/1e4,$=Math.round(Math.max(I+b*4,b*8,10)*1e4)/1e4;ee.near===X&&ee.far===$||(ee.near=X,ee.far=$,ee.updateProjectionMatrix())}function ai(b){Z=!0;try{b()}finally{requestAnimationFrame(()=>{Z=!1})}}ve();function $s(){p&&(ai(()=>{q(),ue.target.copy(C);let I=Math.max(J.x,J.y,J.z,1)*1.85;ee.position.set(C.x+I*.75,C.y+I*.55,C.z+I*.75),xi(),ue.update()}),Rn())}function Fl(){for(let b of m.keys())v.set(b,1),T.set(b,1),zi(m.get(b)||[],1,{edgeMode:g});q(),Wr()}function Gr(b){if(p){if(pt=null,Se.clear(),K(1),Fl(),Js(),Qs(),Me.up.set(0,1,0),de.up.set(0,1,0),ee.up.set(0,1,0),b==="iso"){$s();return}ai(()=>{q();let I=Math.max(J.x,J.y,J.z,1),X=I*1.85,$=C;b==="front"?ee.position.set($.x,$.y,$.z+X):b==="top"?ee.position.set($.x,$.y+X,$.z+I*.01):b==="side"&&ee.position.set($.x-X,$.y,$.z),ue.target.copy($),xi(),ue.update()}),Rn()}}function xs(b){if(!p||!b)return;pt=b,K(b.verticalExaggeration);let I=Q;if(b.opacityDefault!=null||b.opacity&&typeof b.opacity=="object"){let Ae=b.opacityDefault!=null?Number(b.opacityDefault):1,Le=b.opacity&&typeof b.opacity=="object"?b.opacity:{},Ge=Uy(Le,h);for(let ot of m.keys()){let St=Object.prototype.hasOwnProperty.call(Ge,ot)?Ge[ot]:Ae;Ys(ot,St,{skipUi:!0,skipClip:!0})}q(),Wr()}if(Object.prototype.hasOwnProperty.call(b,"cuts")){let Ae=Array.isArray(b.cuts)?b.cuts:[];H.length=0;for(let Le of Ae){let Ge=Le?.normal;if(!Array.isArray(Ge)||Ge.length<3)continue;let ot=new N(Number(Ge[0])||0,Number(Ge[1])||0,Number(Ge[2])||0);if(ot.lengthSq()<1e-12)continue;ot.normalize();let St=null,en=Math.min(1,Math.max(0,Number(Le.t)||0));if(Array.isArray(Le.anchor)&&Le.anchor.length>=3){St=zm(Le.anchor),St.y*=I;let{near:Vn,far:Pt}=la(ot),Kt=St.dot(ot);en=Math.min(1,Math.max(0,(Kt-Vn)/Math.max(Pt-Vn,1e-6)))}H.push({id:j++,normal:ot,t:en,anchor:St,locked:!0,label:cn(ot)})}te=!1,ca(),jn(),ys(),k?.refreshPartialHeight()}b.projection==="ortho"?ne!=="ortho"?Rt():Hn():b.hFovDeg!=null&&Number.isFinite(Number(b.hFovDeg))&&Zn(Number(b.hFovDeg),{reframe:!1});let $=b.camera;$&&Array.isArray($.target)&&Array.isArray($.position)&&ai(()=>{le=!0;let Ae=new N(0,1,0);Array.isArray($.up)&&$.up.length>=3&&(Ae.set(Number($.up[0])||0,Number($.up[1])||0,Number($.up[2])||0),Ae.lengthSq()<1e-12?Ae.set(0,1,0):Ae.normalize()),Me.up.copy(Ae),de.up.copy(Ae),ee.up.copy(Ae),ue.target.set(Number($.target[0])||0,(Number($.target[1])||0)*I,Number($.target[2])||0),ee.position.set(Number($.position[0])||0,(Number($.position[1])||0)*I,Number($.position[2])||0),ee.lookAt(ue.target),ne==="ortho"&&Array.isArray($.orthoFit)&&$.orthoFit.length>=2&&ke(Number($.orthoFit[0])||.1,(Number($.orthoFit[1])||.1)*I),q(),xi(),ue.update(),le=!1}),Rn();let _e=b.edges;(_e==="none"||_e==="transparent"||_e==="opaque")&&(g=_e,be()),Se.setSpec(b),Js(),Qs()}function Ys(b,I,X={}){let $=Math.max(0,Math.min(1,Number(I)||0));v.set(b,$),$>0&&T.set(b,$),X.detach&&E.add(b),zi(m.get(b)||[],$,{edgeMode:g}),!X.skipClip&&(q(),X.skipUi||Wr())}function Ul(b,I,X){let $=Math.max(0,Math.min(1,Number(I)||0));X&&M.set(X,$);for(let _e of b)E.has(_e)||(v.set(_e,$),$>0&&T.set(_e,$),zi(m.get(_e)||[],$,{edgeMode:g}));q(),Wr()}function kh(b,I,X){E.delete(b);let $=X.filter(Ae=>!E.has(Ae)),_e=Zs(I,$);v.set(b,_e),_e>0&&T.set(b,_e),zi(m.get(b)||[],_e,{edgeMode:g}),q(),Wr()}function zh(b){if(!b.length)return 1;let I=v.get(b[0])??1;for(let X=1;X<b.length;X++){let $=v.get(b[X])??1;if(Math.abs($-I)>1e-4)return NaN}return I}function Zs(b,I){let X=I.filter(_e=>!E.has(_e)),$=zh(X.length?X:I);return Number.isNaN($)?M.get(b)??1:$}function Wr(){for(let[b,I]of R)I.value=(v.get(b)??1)*100;for(let[b,I]of _){let X=(I.el.dataset.leaves||"").split(",").map($=>$.trim()).filter(Boolean);I.value=Zs(b,X)*100}for(let[b,I]of A){let X=E.has(b);I.hidden=!X,I.setAttribute("aria-hidden",X?"false":"true")}}function D(){return H.filter(b=>b.locked).map(b=>Gm(b))}function se(){let b=new Xe;return Y.getDrawingBufferSize(b),{x:b.x,y:b.y}}function be(){if(m.size){if(g===zs){Ey(p);return}Ay(m,!0,{clippingPlanes:D(),resolution:se(),edgeMode:g})}}let xe=0;function ye(){if(!m.size)return;let b=++xe;if(y===Vs){let I=he();I.load().then(()=>{b!==xe||y!==Vs||!p||(I.apply(m,p,{clippingPlanes:D(),opacityByLabel:v,edgeMode:g}),He())});return}Te?.stage.enabled&&Te.leave(m),ky(m,y,{isDark:x,clippingPlanes:D(),opacityByLabel:v,edgeMode:g}),He()}function He(){y===Vs?(Y.toneMapping=Ls,Y.toneMappingExposure=1):y===El?(Y.toneMapping=Ls,Y.toneMappingExposure=1.05):(Y.toneMapping=Mi,Y.toneMappingExposure=1),be(),zp(m,D()),y===Vs&&Te?.afterRefresh(),$b(),Qt=!0}function Je(){let b=document.getElementById("mats");if(b){b.replaceChildren();for(let[I,X]of[[hh,"ui.solid"],[El,"ui.shaded"],[Vs,"ui.realistic"]]){let $=document.createElement("button");$.type="button",$.dataset.mode=I,$.textContent=Ut(X),I===y&&$.classList.add("is-active"),$.addEventListener("click",()=>{y=I,Vy(I),b.querySelectorAll("button").forEach(_e=>{_e.classList.toggle("is-active",_e.dataset.mode===I)}),ye()}),b.append($)}}}function ze(){let b=document.getElementById("edges");if(b){b.replaceChildren();for(let[I,X]of[[zs,"ui.edgesNone"],[Hs,"ui.edgesTransparent"],[Sl,"ui.edgesOpaque"]]){let $=document.createElement("button");$.type="button",$.dataset.edgeMode=I,$.textContent=Ut(X),I===g&&$.classList.add("is-active"),$.addEventListener("click",()=>{g=I,Rp(I),b.querySelectorAll("button").forEach(_e=>{_e.classList.toggle("is-active",_e.dataset.edgeMode===I)}),be(),tg()}),b.append($)}}}function We(b,I,X,$){let _e=document.createElement("div");_e.className="part-opacity-wrap";let Ae,Le=()=>{if(Ae.value/100>0)$(0);else{let ot=X();$(ot>0?ot:1)}};return Ae=gh({min:0,max:100,step:1,value:Math.round(I),ariaLabel:b,formatAriaValue:Ge=>`${Math.round(Ge)}%`,thumbScrubOnly:!0,onInput:Ge=>$(Ge/100),onChange:Ge=>$(Ge/100),onTap:Le}),Ae.el.classList.add("part-opacity"),_e.append(Ae.el),{wrap:_e,range:Ae}}function tt(){let b=document.getElementById("parts");if(!b)return;b.style.removeProperty("--part-name-col");let I=0;for(let X of b.querySelectorAll(".part-name")){if(X.closest(".part-children")?.hidden)continue;let _e=X.style.width;X.style.width="max-content",I=Math.max(I,Math.ceil(X.getBoundingClientRect().width)),X.style.width=_e}I>0&&b.style.setProperty("--part-name-col",`${I}px`)}function ct(b,I,X,$=null){if(b.type==="leaf"){let Dt=document.createElement("div");Dt.className="part-row part-leaf",Dt.style.setProperty("--part-depth",String(X)),Dt.dataset.leaf=b.id;let $l=document.createElement("span");$l.className="part-disclosure-spacer",$l.setAttribute("aria-hidden","true");let Yl=document.createElement("span");Yl.className="part-name",Yl.textContent=b.label;let{wrap:pg,range:mg}=We(`${b.label} opacity`,(v.get(b.id)??1)*100,()=>T.get(b.id)??1,Zl=>Ys(b.id,Zl,{detach:!!$}));mg.el.dataset.leaf=b.id,R.set(b.id,mg);let Pi=null;if($){Pi=document.createElement("button"),Pi.type="button",Pi.className="part-sync",Pi.textContent=Ut("ui.sync"),Pi.setAttribute("aria-label",`${Ut("ui.sync")} ${b.label}`);let Zl=E.has(b.id);Pi.hidden=!Zl,Pi.setAttribute("aria-hidden",Zl?"false":"true"),Pi.addEventListener("click",gM=>{gM.stopPropagation(),kh(b.id,$.groupId,$.leafIds)}),A.set(b.id,Pi)}Pi?Dt.append($l,Yl,pg,Pi):Dt.append($l,Yl,pg),I.append(Dt);return}let _e=fh(b),Ae=document.createElement("div");Ae.className="part-group",Ae.dataset.group=b.id;let Le=document.createElement("div");Le.className="part-row part-group-row",Le.style.setProperty("--part-depth",String(X)),Le.setAttribute("role","button"),Le.tabIndex=0;let Ge=document.createElement("button");Ge.type="button",Ge.className="part-disclosure",Ge.setAttribute("aria-label",`Expand ${b.label}`),Ge.setAttribute("aria-expanded","false");let ot=document.createElement("span");ot.className="part-name",ot.textContent=b.label;let St=Zs(b.id,_e)||1;St<=0&&(St=1);let{wrap:en,range:Vn}=We(`${b.label} opacity`,Zs(b.id,_e)*100,()=>St,Dt=>{Dt>0&&(St=Dt),Ul(_e,Dt,b.id)});Vn.el.dataset.group=b.id,Vn.el.dataset.leaves=_e.join(","),_.set(b.id,Vn),en.addEventListener("click",Dt=>Dt.stopPropagation()),en.addEventListener("pointerdown",Dt=>Dt.stopPropagation());let Pt=document.createElement("div");Pt.className="part-children",Pt.hidden=!0;function Kt(Dt){Dt?U.add(b.id):U.delete(b.id),Pt.hidden=!Dt,Ae.classList.toggle("is-expanded",Dt),Ge.setAttribute("aria-expanded",Dt?"true":"false"),Ge.setAttribute("aria-label",Dt?`Collapse ${b.label}`:`Expand ${b.label}`),requestAnimationFrame(()=>tt())}function of(){Kt(!U.has(b.id))}Ge.addEventListener("click",Dt=>{Dt.stopPropagation(),of()}),Le.addEventListener("click",Dt=>{en.contains(Dt.target)||of()}),Le.addEventListener("keydown",Dt=>{(Dt.key==="Enter"||Dt.key===" ")&&(Dt.preventDefault(),of())}),Le.append(Ge,ot,en),Ae.append(Le,Pt),I.append(Ae);let mM={groupId:b.id,leafIds:_e};for(let Dt of b.children)ct(Dt,Pt,X+1,mM);Kt(U.has(b.id))}function xt(){let b=document.getElementById("parts");if(!b)return;b.replaceChildren(),R.clear(),_.clear(),A.clear();for(let X of m.keys())v.has(X)||(v.set(X,1),zi(m.get(X)||[],1,{edgeMode:g})),T.has(X)||T.set(X,1);let I=Fy(m.keys(),r,Ut);h=I;for(let X of I)ct(X,b,0,null);requestAnimationFrame(()=>tt())}let Ze="iso",pt=null,$t=!1;function Ht(b){let I=String(b||"").trim();if(!I)return null;for(let X of i)if(String(X?.id||"").trim()===I)return X;return null}function Ct(){let b=Ze;b&&b.startsWith("scene:")?Rb(b.slice(6)):Rb(null)}function ln(){return document.querySelectorAll("#cams button, #scenes button")}function et(){Ze!=null&&(Ze=null,ln().forEach(b=>{b.classList.remove("is-active")}),Ct())}function vn(){let b=document.getElementById("scenes");if(!b){let I=document.getElementById("cams");b=document.createElement("div"),b.id="scenes",b.className="scene-list",I?.insertAdjacentElement("afterend",b)}return b}function Et(){let b=document.getElementById("cams");if(!b)return;b.replaceChildren();let I=vn();I.replaceChildren();function X($,_e,Ae,Le){let Ge=document.createElement("button");Ge.type="button",Ge.dataset.preset=_e,Ge.textContent=Ae,_e===Ze&&Ge.classList.add("is-active"),Ge.addEventListener("click",()=>{Ze=_e,ln().forEach(ot=>{ot.classList.toggle("is-active",ot.dataset.preset===_e)}),Le(),Ct()}),$.append(Ge)}for(let[$,_e]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])X(b,$,Ut(_e),()=>Gr($));for(let $ of i){let _e=String($?.id||"").trim();if(!_e)continue;let Ae=Ut(`scene.${_e}`);X(I,`scene:${_e}`,Ae,()=>xs($))}I.hidden=I.childElementCount===0}function pr(b=w){return b.copy(ue.target).sub(ee.position).normalize()}function cn(b){let I=Math.hypot(b.x,b.z),X=(Math.atan2(b.x,b.z)*180/Math.PI+360)%360,$=Math.atan2(b.y,I)*180/Math.PI,_e=Math.abs($).toFixed(0),Ae=$>=0?"\u2191":"\u2193";return`${X.toFixed(0)}\xB0 / ${_e}\xB0${Ae}`}function Vi(){return H.some(b=>!b.locked)}function Kn(){return H.filter(b=>b.locked)}function jn(){Vi()||!(Kn().length===0||te)||H.push({id:j++,normal:new N(0,0,1),t:0,locked:!1,label:Ut("ui.cut")})}function Mt(b){let I=document.getElementById("cuts");if(!I)return;let X=I.querySelector(`[data-cut-id="${b.id}"]`);if(!X){ys();return}let $=X.querySelector(".cut-label");if($&&($.textContent=b.locked?b.label:Ut("ui.cut")),b.locked&&!X.querySelector(".cut-remove")){let _e=document.createElement("button");_e.type="button",_e.className="cut-remove",_e.setAttribute("aria-label",Ut("ui.removeSection")),_e.textContent="\xD7",_e.addEventListener("click",()=>li(b.id)),X.append(_e)}}function sn(b){b.locked||(pr(b.normal),b.locked=!0,b.label=cn(b.normal),te=!1,ca(),Mt(b))}function Rn(){Kn().length!==0&&(Vi()||(te=!0,!W&&(jn(),ys())))}function qt(){te&&(Vi()||Kn().length!==0&&(jn(),ys()))}function Jt(b,I){let X=H.find($=>$.id===b);if(X){if(X.locked||sn(X),X.t=Math.min(1,Math.max(0,Number(I))),X.anchor=null,W){Wm();return}ca()}}function li(b){let I=H.findIndex(X=>X.id===b);I<0||(H.splice(I,1),Kn().length===0?(te=!1,Vi()||jn()):te&&!Vi()&&jn(),ca(),ys(),k?.refreshPartialHeight())}function la(b){if(q(),F.isEmpty())return{near:-1,far:1};let I=F.min,X=F.max,$=1/0,_e=-1/0;for(let Ge=0;Ge<2;Ge++)for(let ot=0;ot<2;ot++)for(let St=0;St<2;St++){V.set(Ge?X.x:I.x,ot?X.y:I.y,St?X.z:I.z);let en=V.dot(b);en<$&&($=en),en>_e&&(_e=en)}let Le=Math.max(_e-$,1e-6)*.02;return{near:$-Le,far:_e+Le}}function Gm(b){if(b.anchor)return new xn().setFromNormalAndCoplanarPoint(b.normal,b.anchor);let{near:I,far:X}=la(b.normal),$=I+(X-I)*b.t;return S.copy(b.normal).multiplyScalar($),new xn().setFromNormalAndCoplanarPoint(b.normal,S)}function Wm(){let b=D();return p&&(p.traverse(I=>{if(!I.isMesh||!I.material||Bn(I)||mh(I))return;let X=Array.isArray(I.material)?I.material:[I.material];for(let $ of X){if(!$)continue;let _e=$.clippingPlanes?$.clippingPlanes.length:0;$.clippingPlanes=b,$.clipIntersection=!1,_e!==b.length&&($.needsUpdate=!0)}}),Cp(p,b)),b}function ca(){let b=Wm();p&&(zp(m,b),g!==zs?be():Cp(p,b))}function ys(){let b=document.getElementById("cuts");if(b){b.replaceChildren();for(let I of H){let X=document.createElement("div");X.className="cut-row",X.dataset.cutId=String(I.id);let $=document.createElement("span");$.className="cut-label",$.textContent=I.locked?I.label:Ut("ui.cut");let _e=()=>{W&&(W=!1,ca(),qt())},Ae=gh({min:0,max:1,step:.001,value:I.t,ariaLabel:I.locked?`Section ${I.label}`:"Section cut",onScrubStart:()=>{W=!0,I.locked||sn(I)},onScrubEnd:_e,onInput:Le=>Jt(I.id,Le),onChange:Le=>{Jt(I.id,Le),_e()}});if(X.append($,Ae.el),I.locked){let Le=document.createElement("button");Le.type="button",Le.className="cut-remove",Le.setAttribute("aria-label",Ut("ui.removeSection")),Le.textContent="\xD7",Le.addEventListener("click",()=>li(I.id)),X.append(Le)}b.append(X)}k?.refreshPartialHeight()}}let ua=!1,Hh=new N,Vh=new N,Xm=!1;n.addEventListener("pointerdown",()=>{ua=!0},{capture:!0});let qm=()=>{ua=!1};window.addEventListener("pointerup",qm,{capture:!0}),window.addEventListener("pointercancel",qm,{capture:!0}),ue.addEventListener("start",()=>{et(),ua=!0}),ue.addEventListener("change",()=>{dt()}),ue.addEventListener("end",()=>{ua=!1,!Z&&Rn()});let Ri=1,mr=0,gr=0,Gh=1,Wh=0,Xh=0,qh=1,$h=0,Yh=0,_s=0,Cb=280;function Pb(){let b=Math.max(1,n.clientWidth),I=Math.max(1,n.clientHeight);if(!k)return{zoom:1,offX:0,offY:0,w:b,h:I};let{bottom:X,right:$}=k.getSafeInsets();if(X<=0&&$<=0)return{zoom:1,offX:0,offY:0,w:b,h:I};let _e=Math.max(1,b-$),Ae=Math.max(1,I-X),Le=Math.min(_e/b,Ae/I),Ge=$/2,ot=X/2;return{zoom:Le,offX:Ge,offY:ot,w:b,h:I}}function $m(b,I){ai(()=>{le=!0,Math.abs(mr)>.05||Math.abs(gr)>.05||Math.abs(Ri-1)>.001?(ee.zoom=De*Ri,ee.setViewOffset(b,I,mr,gr,b,I)):(ee.clearViewOffset(),ee.zoom=De,Ri=1,mr=0,gr=0),ee.updateProjectionMatrix(),le=!1})}function Ym(b=!0){let{zoom:I,offX:X,offY:$,w:_e,h:Ae}=Pb();if(Gh=I,Wh=X,Xh=$,!b){Ri=I,mr=X,gr=$,_s=0,$m(_e,Ae);return}qh=Ri,$h=mr,Yh=gr,_s=performance.now()}function Ib(b){if(!_s)return;let I=Math.min(1,(b-_s)/Cb),X=1-(1-I)**3;Ri=qh+(Gh-qh)*X,mr=$h+(Wh-$h)*X,gr=Yh+(Xh-Yh)*X;let $=Math.max(1,n.clientWidth),_e=Math.max(1,n.clientHeight);$m($,_e),I>=1&&(_s=0)}function Bl(){let b=Math.max(1,n.clientWidth),I=Math.max(1,n.clientHeight);Y.setSize(b,I,!1),ne==="perspective"?ve():Pe(),Ym(!1);let X=se();Ty(p,X.x,X.y)}Bl(),window.addEventListener("resize",Bl),k?.onDetentChange(()=>{Ym(!0)});let Jn=document.getElementById("ar"),bn=document.getElementById("measure"),ha=!1,kl=()=>Ut("ui.measure");function Zh(){let b=document.getElementById("locale");if(b){b.replaceChildren();for(let[I,X]of[["cs","CS"],["en","EN"]]){let $=document.createElement("button");$.type="button",$.dataset.locale=I,$.textContent=X,I===xh()&&$.classList.add("is-active"),$.addEventListener("click",()=>{l_(I)}),b.append($)}}}function Lb(){Xp(document),Jn&&!ha&&(Jn.textContent=Ut("ui.ar")),bn&&(bn.textContent=kl()),Js(),Qs(),Se.relocalize();try{Je(),ze(),Et(),aa(),xt(),ys(),Zh(),ug()}catch(b){console.error("relocalizeUi",b);try{Zh()}catch{}}k?.refreshPartialHeight()}Wp(()=>Lb());function Db(){Jn&&(Jn.hidden=!1,ha||(Jn.textContent=Ut("ui.ar")))}function Nb(){bn&&(bn.hidden=!1,bn.textContent=kl())}let Ks=document.getElementById("drawing"),Xr=document.getElementById("labels"),js=!0;function Js(){Ks&&(Ks.hidden=!1,Ks.disabled=!pt||zl,Ks.textContent=Ut("ui.drawing"))}function Qs(){if(!Xr)return;let b=!!pt;Xr.hidden=!b,Xr.disabled=!b,Xr.setAttribute("aria-pressed",js?"true":"false"),Xr.classList.toggle("is-active",b&&js),Xr.textContent=Ut("ui.labels")}function Ob(){try{let b=new URLSearchParams(window.location.search).get("m");if(b&&b.trim())return b.trim()}catch{}return"model"}function Fb(){let I=1,X=1.35;for(let $=0;$<6;$+=1){Se.update();let _e=Se.glyphBoundsNdc();if(!_e)return;let Ae=Math.max(-1+.04-_e.minX,_e.maxX-(1-.04),-1+.04-_e.minY,_e.maxY-(1-.04),0);if(Ae<.012||I>=X-.01)return;let Le=Math.min(X/I,Math.max(1.05,1+Ae*1.6));I*=Le,ee.isOrthographicCamera?(de.left*=Le,de.right*=Le,de.top*=Le,de.bottom*=Le,de.updateProjectionMatrix()):(w.copy(ee.position).sub(ue.target).multiplyScalar(Le),ee.position.copy(ue.target).add(w),xi())}}function Zm(){_s=0,Ri=1,mr=0,gr=0,Gh=1,Wh=0,Xh=0,ee.clearViewOffset(),ee.zoom=De,ee.updateProjectionMatrix()}let zl=!1;async function Km(){if(zl||!p||!pt)return null;zl=!0,Js(),$t=!0;let b=pt,I=g,X=f.background,$=Y.getPixelRatio(),_e=n.style.width,Ae=n.style.height,Le=k?.getDetent?.()??null,Ge=Ci?.isActive()??!1,ot=Se.isVisible();try{Ge&&Ci?.setActive(!1),Se.setVisible(!0),k?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,Y.setPixelRatio(1),Bl(),Zm(),g=Sl,be(),f.background=new $e(16777215),Se.setInk("plate"),xs(b),Zm(),Fb(),Se.update(),re.render(f,ee,p,eg,{quality:"high"});let{png:St,pdf:en}=await Tb(n),Vn=`${Ob()}_${String(b.id||"scene")}`;return{png:St,pdf:en,stem:Vn}}finally{n.style.width=_e,n.style.height=Ae,Y.setPixelRatio($),g=I,f.background=X,Se.setInk("viewer"),Se.setVisible(ot),Le&&k?.setDetent(Le),Bl(),be(),b&&xs(b),Ge&&Ci?.setActive(!0),$t=!1,zl=!1,Js(),Qs(),requestAnimationFrame(ql)}}window.blueprintCaptureDrawing=async()=>{let b=await Km();return b?{png:b.png,pdf:b.pdf,stem:b.stem}:null},window.blueprintSetView=(b={})=>{if(!p||!b)return!1;let I=b.projection==="ortho"?"ortho":"perspective",X=Number.isFinite(Number(b.hFovDeg))?Number(b.hFovDeg):fe;return I==="perspective"&&ne==="ortho"&&Xt(X),I==="perspective"&&Zn(X,{reframe:!1}),ai(()=>{le=!0;let $=new N(0,1,0);if(Array.isArray(b.up)&&b.up.length>=3&&($.set(Number(b.up[0])||0,Number(b.up[1])||0,Number(b.up[2])||0),$.lengthSq()>1e-12?$.normalize():$.set(0,1,0)),Me.up.copy($),de.up.copy($),ee.up.copy($),Array.isArray(b.target)&&ue.target.set(Number(b.target[0])||0,Number(b.target[1])||0,Number(b.target[2])||0),Array.isArray(b.position)&&ee.position.set(Number(b.position[0])||0,Number(b.position[1])||0,Number(b.position[2])||0),ee.lookAt(ue.target),I==="ortho"){let _e=ee.position.distanceTo(ue.target),Ae=ce(X,G());Re(_e,Ae),De=1,ne!=="ortho"&&(Ie(de),ne="ortho"),Oe(),Hn()}q(),xi(),ue.update(),le=!1}),Qt=!0,!0},Xr&&Xr.addEventListener("click",()=>{js=!js,Se.setVisible(js),Qs()}),Ks&&Ks.addEventListener("click",()=>{(async()=>{let b=await Km();b&&(Hm(b.png,`${b.stem}.png`),Hm(b.pdf,`${b.stem}.pdf`))})()});let Ci=null;f&&(Ci=Iv({scene:f,canvas:n,getCamera:()=>ee,controls:ue,getRoot:()=>p,getClipPlanes:()=>D(),onLiveLength:b=>{bn&&(b?(bn.textContent=b,bn.classList.add("is-live")):(bn.textContent=kl(),bn.classList.remove("is-live")))},onActiveChange:b=>{Qt=!0,bn&&(bn.classList.toggle("is-active",b),bn.setAttribute("aria-pressed",b?"true":"false"),b||(bn.textContent=kl(),bn.classList.remove("is-live")))}})),bn&&bn.addEventListener("click",()=>{Ci&&Ci.setActive(!Ci.isActive())}),Ce=()=>!!Ci?.isActive();function jm(){if(!p)return null;p.updateWorldMatrix(!0,!0);let b=Kn().map(_e=>Gm(_e)),I=new Tt;if(I.name="ARContent",p.traverse(_e=>{if(!_e.isMesh||!_e.visible||Bn(_e))return;let Ae=Jy(_e,b);Ae&&I.add(Ae)}),!I.children.length)return null;I.updateMatrixWorld(!0);let X=Hp(I),$=new Tt;return $.name="ARExport",$.add(I),i_(I,X),$.userData.arPlacement=X,$}async function Jm(){if(ha||!p)return;ha=!0;let b=Jn?.textContent||"AR";Jn&&(Jn.disabled=!0,Jn.textContent="\u2026");try{let I=jm();if(!I)throw new Error("Nothing visible to export. Show at least one part.");let $=await new nh().parseAsync(I,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),_e=new Blob([$],{type:"model/vnd.usdz+zip"}),Ae=URL.createObjectURL(_e),Le=document.createElement("a");Le.rel="ar",Le.href=Ae,Le.download="view.usdz";let Ge=document.createElement("img");Ge.alt="AR",Le.appendChild(Ge),document.body.appendChild(Le),Le.click(),Le.remove(),setTimeout(()=>URL.revokeObjectURL(Ae),6e4)}catch(I){P(String(I?.message||I))}finally{ha=!1,Jn&&(Jn.disabled=!1,Jn.textContent=b)}}Jn&&Jn.addEventListener("click",()=>{Jm()});let Qm={scene:f,get camera(){return ee},controls:ue,parts:m,partOpacity:v,cuts:H,scenes:i,setPartOpacity:Ys,setCameraPreset:Gr,applyScene:xs,setHFov:Zn,toggleFovIso:oi,get projection(){return ne},get hFovDeg(){return fe},setCutT:Jt,removeCut:li,frameIso:$s,openArQuickLook:Jm,buildArExportScene:jm,getPeelQuality:()=>da};window.BlueprintsViewer=Qm;function eg(){for(let b of v.values())if(b<1-1e-4)return!0;return!1}function tg(){for(let[b,I]of m){let X=v.get(b)??1;zi(I,X,{edgeMode:g})}}let ng=!1,Qt=!0,xr=null,Hl=mb(a),Kh=new hi,jh=new Xe,Jh=pb({index:a,visibility:Hl,t:Ut,openSheet(){let b=window.matchMedia("(min-width: 768px)").matches;k?.setDetent(b?"open":"partial")},onFrame:(b,I)=>{I?.move?Gb(b):Vb(b)},onVisibility:()=>Xb(),actionsFor:b=>aM(b),liveLines:b=>{let I=Ye?.lastKnown(b.globalId);return I?eb(I,Ut):[]}});function Vl(b){let I=b;for(;I;){let X=I.userData?.bpElementKey||Hi(I.name||"").element;if(X){for(let $ of Object.values(a.elements))if($.id===X)return $}I=I.parent}return null}function ig(b){return b?c.get(b)||[]:[]}function Qn(b){if(!b)return[];let I=ig(b.id);if(I.length)return I;let X=[];for(let $ of ms(a,b.globalId)){let _e=a.elements[$];_e&&_e!==b&&X.push(...ig(_e.id))}return X}function eo(b){let I=new vt,X=new N;for(let $ of b){let _e=$.geometry;if(!_e)continue;_e.boundingBox||_e.computeBoundingBox();let Ae=_e.boundingBox;if(Ae){$.updateWorldMatrix(!0,!1);for(let Le of[Ae.min.x,Ae.max.x])for(let Ge of[Ae.min.y,Ae.max.y])for(let ot of[Ae.min.z,Ae.max.z])X.set(Le,Ge,ot).applyMatrix4($.matrixWorld),I.expandByPoint(X)}}return I}let Ub=480,Gi=null;function Bb(b){let I=Math.min(1,Math.max(0,b));return I<.5?4*I*I*I:1-(-2*I+2)**3/2}function kb(b){let I=b.getSize(V),X=Math.max(I.x,I.y,I.z,.2),$=b.getCenter(new N),_e=ee.position.clone().sub(ue.target);_e.lengthSq()<1e-8?_e.set(.75,.55,.75):_e.normalize();let Ae;if(ee.isOrthographicCamera)Ae=Math.max(ee.position.distanceTo(ue.target),X*1.4);else{let Le=(ee.fov||45)*Math.PI/180;Ae=Math.max(X*.62/Math.max(Math.tan(Le/2),.001),X*1.25)}return{center:$,position:$.clone().addScaledVector(_e,Ae),span:X}}function zb(b){Gi={t0:performance.now(),fromPos:ee.position.clone(),toPos:b.position,fromTarget:ue.target.clone(),toTarget:b.center,span:b.span},Qt=!0}function Hb(b){if(!Gi)return;let I=Math.min(1,(b-Gi.t0)/Ub),X=Bb(I);ee.position.lerpVectors(Gi.fromPos,Gi.toPos,X),ue.target.lerpVectors(Gi.fromTarget,Gi.toTarget,X),ee.isOrthographicCamera&&ke(Gi.span*.62,Gi.span*.62),Z=!0,ue.update(),q(),xi(),Qt=!0,I>=1&&(Gi=null,requestAnimationFrame(()=>{Z=!1}))}function Vb(b){let I=Qn(a.elements[b]);I.length&&rg(I),Qt=!0}function Gb(b){let I=a.elements[b],X=Qn(I);if(!X.length)return;let $=eo(X);$.isEmpty()||(zb(kb($)),rg(X),Qt=!0)}function rg(b){xr&&sg();let I=[];for(let X of b){if(!X.isMesh||!X.material)continue;let $=Array.isArray(X.material)?X.material:[X.material],_e=$.map(Ae=>{let Le=Ae.clone();return Le.emissive?(Le.emissive.setHex(16756768),Le.emissiveIntensity=0):Le.color&&(Le.userData.bpPulseBase=Le.color.getHex()),I.push(Le),Le});X.userData.bpPulseMaterial=$,X.material=_e.length===1?_e[0]:_e}xr={meshes:b,clones:I,t0:performance.now()}}function sg(){if(xr){for(let b of xr.meshes){let I=b.userData.bpPulseMaterial;I&&(b.material=I.length===1?I[0]:I),delete b.userData.bpPulseMaterial}for(let b of xr.clones)b.dispose?.();xr=null}}function Wb(b){if(!xr)return;let I=(b-xr.t0)/900;if(I>=1){sg(),Qt=!0;return}let X=Math.sin(Math.min(I,1)*Math.PI);for(let $ of xr.clones)$.emissive?$.emissiveIntensity=.85*X:$.color&&$.userData.bpPulseBase!=null&&$.color.setHex($.userData.bpPulseBase).offsetHSL(.08,.2,.18*X);Qt=!0}function Xb(){let b=new Set;for(let I of Object.values(a.elements))Hl.isHidden(I.globalId)&&I.id&&b.add(I.id);for(let[I,X]of c){let $=b.has(I);for(let _e of X){_e.userData.bpIfcHidden=$;for(let Ae of _e.children||[])(Ae?.userData?.isEdgeOverlay||Ae?.userData?.isSectionCap)&&(Ae.visible=!$)}}for(let I of Fe.bindings){let X=Hi(I.host?.name||"").element,$=!!(X&&b.has(X));I.host&&(I.host.userData.bpIfcHidden=$)}for(let[I,X]of m)zi(X,v.get(I)??1,{edgeMode:g});Qt=!0}function qb(b,I){let $=(Array.isArray(b.material)?b.material:[b.material]).map(_e=>{if(!_e)return _e;if(_e.userData.bpOwned)return I(_e);let Ae=_e.clone();return Ae.userData.bpOwned=!0,I(Ae)});b.material=$.length===1?$[0]:$}function Gl(b,I){let X="restore"in I&&I.restore,$=!X&&!!I.on;Ue.set(b.globalId,$),X?st.delete(b.globalId):st.set(b.globalId,I);let _e=X?1:Math.min(Math.max(I.level??1,0),1),Ae=new $e(X?0:I.color);$&&Ae.lerp(new $e(Rh),.35*(1-_e));for(let Le of Qn(b))qb(Le,Ge=>(Ge.color&&(Ge.userData.bpLightBase==null&&(Ge.userData.bpLightBase=Ge.color.getHex()),X?Ge.color.setHex(Ge.userData.bpLightBase):Ge.color.copy(Ae)),Ge.emissive&&($?(Ge.emissive.copy(Ae),Ge.emissiveIntensity=.3+.35*_e):(Ge.emissive.setHex(0),Ge.emissiveIntensity=0)),Ge));Qt=!0}function og(b){let I=!Ue.get(b.globalId);Gl(b,I?ut:it)}function $b(){for(let[b,I]of[...st]){let X=a.elements[b];X&&Gl(X,I)}}function Wl(b){b?.ok||(console.warn("Home command failed",b),sf=`${Ut("home.failed")}${b?.status?` (${b.status})`:""}${b?.error?`: ${b.error}`:""}`,fa(),window.setTimeout(()=>{sf="",fa()},4e3))}function Yb(b){if(Jb(b),mt(b)?.deviceType!=="ColorTemperatureLight"){og(b);return}Ye.command(b.globalId,{type:"toggle"}).then(Wl)}function Zb(b,I){let X=Qn(b);if(!I?.point||!X.length)return{dy:1,side:-1};let _e=eo(X).getCenter(new N),Ae=new N().setFromMatrixColumn(ee.matrixWorld,0),Le=I.point.clone().sub(_e);return{dy:Le.y,side:Le.dot(Ae)}}let ag=new Map;function Kb(b){let I=ag.get(b);return I||(I=Object.values(a.elements).filter(X=>X.type===b),ag.set(b,I)),I}function jb(b,I){let X=I?.camera||ee,$=new N().setFromMatrixColumn(X.matrixWorld,0),_e=[];for(let Ae of Kb(b)){if(Hl.isHidden(Ae.globalId))continue;let Le=Qn(Ae).filter(Pt=>{if(!ds(Pt))return!1;for(let Kt=Pt;Kt;Kt=Kt.parent)if(!Kt.visible)return!1;return!0});if(b==="IfcWindow"){let Pt=new Set(Be.operableMeshes(Ae.id,Qn(Ae)));for(let Kt=Le.length-1;Kt>=0;Kt--)Pt.has(Le[Kt])||Le.splice(Kt,1)}if(!Le.length)continue;let Ge=eo(Le);if(Ge.isEmpty())continue;let ot=new Set(Le),St=Pt=>{for(let Kt=Pt;Kt;Kt=Kt.parent)if(ot.has(Kt))return!0;return Vl(Pt)===Ae},en=Le[0],Vn=b==="IfcSwitchingDevice"?mv(Ge,Dl(Ae),$).map(Pt=>Pt.center):[Ge.getCenter(new N)];for(let Pt of Vn)_e.push({element:Ae,center:Pt,group:Ae.globalId,hit:{object:en,point:Pt},owns:St})}return _e}let Qh=new Map;function ef(b,I,X=!0){let $=Qn(b);if(!$.length)return;let _e=eo($),Ae=_e.getCenter(new N),Le=_e.getSize(new N),Ge=I.position==="down"?-1:1;Ae.y+=Ge*Le.y/4;let ot=Dl(b);if(ot.length>1){let St=new N().setFromMatrixColumn(ee.matrixWorld,0);if(St.y=0,St.lengthSq()>1e-9){St.normalize();let en=I.rocker===ot[0]?-1:1;Ae.addScaledVector(St,en*Math.max(Le.x,Le.z)/4)}}Ne.showFeedback({worldPos:Ae,kind:"switch",direction:I.position,haptic:X})}function Jb(b){let I=Qn(b);I.length&&Ne.showFeedback({worldPos:eo(I).getCenter(new N),kind:"light"})}function Qb(b,I){if(!b?.host||I.from===I.to)return;let X=new vt().setFromObject(b.host);if(X.isEmpty())return;let $=X.getCenter(new N),_e=I.to>I.from;if(b.sections){Ne.showFeedback({worldPos:$,kind:"lift",direction:_e?"up":"down"});return}if(b.panels){let ot=b.pivot.parent;if(!ot)return;ot.updateWorldMatrix(!0,!1),b.panels.forEach((St,en)=>{let Vn=new vt().setFromObject(St.pivot);if(Vn.isEmpty())return;let Pt=St.slideLocal.clone().transformDirection(ot.matrixWorld);_e||Pt.negate();let Kt=Vn.getCenter(new N);Ne.showFeedback({worldPos:Kt,kind:"slide",worldDir:Pt,haptic:en===0})});return}if(b.slideLocal){let ot=b.pivot.parent;if(!ot)return;ot.updateWorldMatrix(!0,!1);let St=b.slideLocal.clone().transformDirection(ot.matrixWorld);_e||St.negate(),Ne.showFeedback({worldPos:$,kind:"slide",worldDir:St});return}let Ae=b.pivot.getWorldPosition(new N),Le=Ah(I.to,b.sign)-Ah(I.from,b.sign),Ge=Xv($.toArray(),Ae.toArray(),Le);Ne.showFeedback({worldPos:$,kind:"hinge",hinge:Ae,to:Ge})}function eM(b,I){let X=Qn(b),$=Be.operableMeshes(b.id,X),_e=$[0];if(!_e?.parent)return;let Ae=Be.slideOf(b.id),Le;Ae?(Le=new N(Ae[0],Ae[1],Ae[2]).normalize(),I||Le.negate()):(_e.parent.updateWorldMatrix(!0,!1),Le=new N(I?1:-1,0,0).transformDirection(_e.parent.matrixWorld)),Ne.showFeedback({worldPos:eo($).getCenter(new N),kind:"slide",worldDir:Le})}function tM(b,I){return b?Be.acceptsHit(b.id,Qn(b),I):!1}function lg(b,I){ef(b,I),tf(b),Qh.set(b.globalId,performance.now()),Ye.press(b.globalId,I).then(Wl)}function nM(b,I){let X=mt(b),$=Qv(b,Zb(b,I));if(X?.deviceType!=="GenericSwitch"||!Ye.simulation()){ef(b,$),tf(b);return}lg(b,$)}function iM(b){if(mt(b)?.deviceType!=="GenericSwitch"||!Ye.simulation())return null;let X=Dl(b),$=[];return X.forEach((_e,Ae)=>{for(let Le of["up","down"]){let Ge=Ut(Le==="up"?"home.up":"home.down");$.push({id:`switch-${_e}-${Le}`,labelKey:Le==="up"?"home.up":"home.down",label:X.length>1?`${Ae+1} ${Ge}`:Ge,run:()=>lg(b,{rocker:_e,position:Le,kind:"short"})})}}),$}function rM(b){let I=mt(b);if(I?.deviceType!=="WindowCovering")return;let X=I.state?.windowCovering?.targetPositionLiftPercent100ths,$=X!=null&&X<5e3;Ye.command(b.globalId,{type:$?"coverClose":"coverOpen"}).then(Wl)}function sM(b){return mt(b)?.deviceType!=="WindowCovering"?null:[["coverOpen","ui.open"],["coverClose","ui.close"],["coverStop","home.stop"]].map(([X,$])=>({id:X,labelKey:$,run:()=>Ye.command(b.globalId,{type:X}).then(Wl)}))}function tf(b){for(let I of Qn(b)){if(I.userData.bpPressing)continue;I.userData.bpPressing=!0;let X=I.position.y;I.position.y=X-.004,window.setTimeout(()=>{I.position.y=X,I.userData.bpPressing=!1,Qt=!0},160)}Qt=!0}function oM(b){let I=!qe.get(b.globalId);Be.slide(b.id,Qn(b),I,performance.now())&&(eM(b,I),qe.set(b.globalId,I),Qt=!0)}function aM(b){if(!b)return[];let I={now:performance.now()},X=$=>ds($.object);for(let $ of Qn(b)){let Ae=Fe.taps.resolve([{object:$}],I,X)?.claim?.actions;if(Array.isArray(Ae)&&Ae.length)return Ae.slice()}return[]}function lM(b){if(Ce())return;let I=ee;if(!I||!p)return;let X=n.getBoundingClientRect(),$=X.width||n.clientWidth||1,_e=X.height||n.clientHeight||1;jh.x=(b.clientX-X.left)/$*2-1,jh.y=-((b.clientY-X.top)/_e)*2+1,Kh.setFromCamera(jh,I);let Ae=Kh.intersectObject(p,!0).filter(Pt=>ds(Pt.object)),Le=p;for(;Le.parent;)Le=Le.parent;let Ge={raycaster:Kh,now:performance.now(),camera:I,root:Le,tap:{x:b.clientX-X.left,y:b.clientY-X.top},size:{w:$,h:_e}},ot=Fe.taps.resolve(Ae,Ge,Pt=>ds(Pt.object));if(ot&&(ot.kind==="direct"||ot.kind==="extended")&&ot.hit?.object){let Pt=ot.hit.object,Kt=Pt.userData?.bpPart||Hi(Pt.name||"").part;Jh.inspect(Vl(Pt),{partName:Kt});return}let St=Ae[0];if(!St)return;let en=Vl(St.object),Vn=St.object.userData?.bpPart||Hi(St.object.name||"").part;Jh.inspect(en,{partName:Vn})}l=lM;let nf=jv({search:typeof location<"u"?location.search:"",storage:typeof localStorage<"u"?localStorage:null}),cg=Kv(a),rf=nf.mode,sf="",yr=null;function cM(b){let I=a.elements[b.globalId];I&&b.deviceType==="ColorTemperatureLight"&&Gl(I,Am(b))}function uM(){for(let b of[...Ue.keys()]){let I=a.elements[b];I&&Gl(I,{restore:!0})}}function fa(){if(!yr)return;let b=Ye?Ye.status():"off",I=b==="live"?Ye.simulation()?"home.statusLive":"home.statusLiveNoSim":b==="connecting"?"home.statusConnecting":b==="unreachable"?"home.statusUnreachable":"home.statusOff";yr.textContent=sf||Ut(I),yr.dataset.status=b,yr.title=b==="off"?"":nf.baseUrl}function ug(){if(!cg)return;let b=document.getElementById("section-home");if(!b){let $=document.getElementById("section-locale");if(!$?.parentNode)return;b=document.createElement("section"),b.className="sheet-section",b.id="section-home",$.parentNode.insertBefore(b,$)}b.replaceChildren();let I=document.createElement("h2");I.className="sheet-title",I.textContent=Ut("home.title");let X=document.createElement("div");X.className="seg",X.id="home-mode",X.setAttribute("role","group"),X.setAttribute("aria-label",Ut("home.title"));for(let[$,_e]of[["live","home.live"],["off","home.off"]]){let Ae=document.createElement("button");Ae.type="button",Ae.dataset.homeMode=$,Ae.textContent=Ut(_e),$===rf&&Ae.classList.add("is-active"),Ae.addEventListener("click",()=>hM($)),X.append(Ae)}yr=document.createElement("p"),yr.className="home-status",yr.setAttribute("aria-live","polite"),yr.style.cssText="margin:0.5rem 0 0;font-size:0.76rem;line-height:1.35;color:var(--fg-secondary)",b.append(I,X,yr),fa()}function hM(b){rf=b,Jv(typeof localStorage<"u"?localStorage:null,b),document.querySelectorAll("#home-mode button").forEach(I=>{I.classList.toggle("is-active",I.dataset.homeMode===b)}),Ye&&(b==="live"?Ye.start():(Ye.stop(),uM()),fa())}cg&&(Ye=tb({baseUrl:nf.baseUrl,onStatus:()=>{fa(),Qt=!0},onDevice:b=>cM(b),onSwitch:b=>{if(b.event!=="initialPress")return;let I=a.elements[b.globalId],X=performance.now()-(Qh.get(b.globalId)??-1/0)<3e3;Qh.delete(b.globalId),I&&!X&&((b.position==="up"||b.position==="down")&&ef(I,{rocker:b.rocker,position:b.position},!1),tf(I))}}),ug(),rf==="live"&&Ye.start(),window.blueprintsHome=Ye),Wp(()=>Jh.refresh());let hg=null,fg=null,da="fast",dg=null,Xl=!1;n.addEventListener("pointermove",()=>{Ci?.isActive()&&(Qt=!0)}),n.addEventListener("pointerup",()=>{Ci?.isActive()&&(Qt=!0)});function fM(){let b=ee.view;return[ee.position.x,ee.position.y,ee.position.z,ee.quaternion.x,ee.quaternion.y,ee.quaternion.z,ee.quaternion.w,ee.zoom,ee.near,ee.far,ee.fov||0,ee.left,ee.right,ee.top,ee.bottom,ue.target.x,ue.target.y,ue.target.z,n.width,n.height,b&&b.enabled?1:0,b?b.offsetX:0,b?b.offsetY:0,b?b.fullWidth:0,b?b.fullHeight:0,ne==="ortho"?1:0]}function dM(){let b=fM(),I=hg,X=!I||I.length!==b.length;if(!X&&I){for(let $=0;$<b.length;$++)if(b[$]!==I[$]){X=!0;break}}return X&&(hg=b),X}function pM(){let b=[y,g,xh(),js?"1":"0",String(d)],I=f?.background;I&&I.isColor&&b.push(I.getHexString());for(let[$,_e]of v)b.push($,Number(_e).toFixed(3));for(let $ of H)b.push(String($.id),$.locked?"1":"0",Number($.t).toFixed(4));let X=Hl.hiddenIds();return b.push(X.length?X.slice().sort().join(","):"-"),b.join("|")}function ql(){if($t)return;let b=performance.now();Fe.step(b)&&(Qt=!0,Te?.stage.markDirty()),Be.step(b)&&(Qt=!0,Te?.stage.markDirty()),Wb(b),Hb(b),Ib(b),ue.update(),p&&xi(),Xm||(Hh.copy(ee.position),Vh.copy(ue.target),Xm=!0);let I=ee.position.distanceToSquared(Hh)>1e-8||ue.target.distanceToSquared(Vh)>1e-8;Hh.copy(ee.position),Vh.copy(ue.target);let X=pM(),$=X!==fg;$&&Te?.stage.markDirty();let _e=dM();if($&&(Xl=!0),da=!ua&&!I&&!$&&!W&&!_s&&!Xl?"high":"fast",!Qt&&!$&&!_e&&!(da!==dg)&&!Xl){requestAnimationFrame(ql);return}Qt=!1,fg=X,dg=da,$||(Xl=!1),Ci?.update(),Se.update();let Ge=re.render(f,ee,p,eg,{quality:da,batchKey:X,deferPrime:$||W});ng&&!Ge&&tg(),ng=Ge,requestAnimationFrame(ql)}return ql(),Qm}return MM(I2);})();
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
