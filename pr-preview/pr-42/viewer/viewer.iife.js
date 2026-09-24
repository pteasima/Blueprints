var BlueprintsViewerBundle=(()=>{var Qc=Object.defineProperty;var p0=Object.getOwnPropertyDescriptor;var m0=Object.getOwnPropertyNames;var g0=Object.prototype.hasOwnProperty;var _0=(i,e)=>{for(var t in e)Qc(i,t,{get:e[t],enumerable:!0})},x0=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of m0(e))!g0.call(i,s)&&s!==t&&Qc(i,s,{get:()=>e[s],enumerable:!(n=p0(e,s))||n.enumerable});return i};var y0=i=>x0(Qc({},"__esModule",{value:!0}),i);var TE={};_0(TE,{mountViewer:()=>wE});var Il="172",xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wd=0,zu=1,Xd=2;var ku=1,qd=2,wi=3,Dn=0,ln=1,mt=2,kn=0,oi=1,Hu=2,Vu=3,Gu=4,Dl=5,qn=100,Yd=101,$d=102,Zd=103,Kd=104,na=200,vs=201,jd=202,Jd=203,Lr=204,Ns=205,Qd=206,ia=207,ep=208,tp=209,np=210,ip=211,sp=212,rp=213,op=214,Ll=0,Ul=1,Nl=2,Os=3,Ol=4,Fl=5,Bl=6,zl=7,Wu=0,ap=1,lp=2,ui=0,cp=1,up=2,hp=3,sa=4,fp=5,dp=6,pp=7,Au="attached",mp="detached",Xu=300,Gs=301,Ws=302,kl=303,Hl=304,ra=306,ai=1e3,gi=1001,Ur=1002,kt=1003,Vl=1004;var Xs=1005;var Ht=1006,Wr=1007;var hi=1008;var Zn=1009,qu=1010,Yu=1011,Xr=1012,Gl=1013,Ms=1014,Ln=1015,Zi=1016,Wl=1017,Xl=1018,qs=1020,$u=35902,Zu=1021,Ku=1022,tn=1023,ju=1024,Ju=1025,Us=1026,Fs=1027,ql=1028,Yl=1029,Qu=1030,$l=1031;var Zl=1033,oa=33776,aa=33777,la=33778,ca=33779,Kl=35840,jl=35841,Jl=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,uc=37815,hc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,ua=36492,_c=36494,xc=36495,eh=36283,yc=36284,vc=36285,Mc=36286;var Bs=2300,zs=2301,pl=2302,Ru=2400,Cu=2401,Pu=2402,gp=2500;var th=0,ha=1,qr=2,_p=3200,xp=3201;var nh=0,yp=1,fi="",ft="srgb",on="srgb-linear",wo="linear",_t="srgb";var Ls=7680;var Iu=519,vp=512,Mp=513,bp=514,ih=515,Sp=516,Ep=517,wp=518,Tp=519,ml=35044;var sh="300 es",_i=2e3,To=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=1234567,Ir=Math.PI/180,ks=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function rh(i,e){return(i%e+e)%e}function v0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function M0(i,e,t){return i!==e?(t-i)/(e-i):0}function Eo(i,e,t){return(1-t)*i+t*e}function b0(i,e,t,n){return Eo(i,e,1-Math.exp(-t*n))}function S0(i,e=1){return e-Math.abs(rh(i,e*2)-e)}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function w0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function T0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function A0(i,e){return i+Math.random()*(e-i)}function R0(i){return i*(.5-Math.random())}function C0(i){i!==void 0&&(nd=i);let e=nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(i){return i*Ir}function I0(i){return i*ks}function D0(i){return(i&i-1)===0&&i!==0}function L0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function U0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function N0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ys={DEG2RAD:Ir,RAD2DEG:ks,generateUUID:ri,clamp:it,euclideanModulo:rh,mapLinear:v0,inverseLerp:M0,lerp:Eo,damp:b0,pingpong:S0,smoothstep:E0,smootherstep:w0,randInt:T0,randFloat:A0,randFloatSpread:R0,seededRandom:C0,degToRad:P0,radToDeg:I0,isPowerOfTwo:D0,ceilPowerOfTwo:L0,floorPowerOfTwo:U0,setQuaternionFromProperEuler:N0,normalize:gt,denormalize:si},Oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],v=s[4],x=s[7],P=s[2],A=s[5],C=s[8];return r[0]=o*_+a*M+l*P,r[3]=o*m+a*v+l*A,r[6]=o*p+a*x+l*C,r[1]=c*_+u*M+h*P,r[4]=c*m+u*v+h*A,r[7]=c*p+u*x+h*C,r[2]=f*_+d*M+g*P,r[5]=f*m+d*v+g*A,r[8]=f*p+d*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(eu.makeScale(e,t)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,t){return this.premultiply(eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eu=new et;function oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ap(){let i=Nr("canvas");return i.style.display="block",i}var id={};function $s(i){i in id||(id[i]=!0,console.warn(i))}function Rp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Cp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var sd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O0(){let i={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?wo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[on]:{primaries:e,whitePoint:n,transfer:wo,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),i}var ct=O0();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pr,gl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=Nr("canvas")),pr.width=e.width,pr.height=e.height;let n=pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F0=0,Ao=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tu(s[o].image)):r.push(tu(s[o]))}else r=tu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function tu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var B0=0,Wt=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gi,s=gi,r=Ht,o=hi,a=tn,l=Zn,c=i.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ri(),this.name="",this.source=new Ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Xu;Wt.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(d+1)/2,P=(p+1)/2,A=(u+f)/4,C=(h+_)/4,L=(g+m)/4;return v>x&&v>P?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=C/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=L/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=L/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new Ao(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends _l{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ro=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xl=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let P=Math.sqrt(v),A=Math.atan2(P,p*M);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}let x=a*M;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(od.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nu=new R,od=new Tn,It=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Ba.subVectors(this.max,fo),mr.subVectors(e.a,fo),gr.subVectors(e.b,fo),_r.subVectors(e.c,fo),as.subVectors(gr,mr),ls.subVectors(_r,gr),Cs.subVectors(mr,_r);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Cs.z,Cs.y,as.z,0,-as.x,ls.z,0,-ls.x,Cs.z,0,-Cs.x,-as.y,as.x,0,-ls.y,ls.x,0,-Cs.y,Cs.x,0];return!iu(t,mr,gr,_r,Ba)||(t=[1,0,0,0,1,0,0,0,1],!iu(t,mr,gr,_r,Ba))?!1:(za.crossVectors(as,ls),t=[za.x,za.y,za.z],iu(t,mr,gr,_r,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ni=[new R,new R,new R,new R,new R,new R,new R,new R],ti=new R,Fa=new It,mr=new R,gr=new R,_r=new R,as=new R,ls=new R,Cs=new R,fo=new R,Ba=new R,za=new R,Ps=new R;function iu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ps.fromArray(i,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),u=n.dot(Ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var z0=new It,po=new R,su=new R,Qt=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):z0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);let t=po.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(po,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(su)),this.expandByPoint(po.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Oi=new R,ru=new R,ka=new R,cs=new R,ou=new R,Ha=new R,au=new R,yi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ru.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(ru);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ka),a=cs.dot(this.direction),l=-cs.dot(ka),c=cs.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ru).addScaledVector(ka,f),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){ou.subVectors(t,e),Ha.subVectors(n,e),au.crossVectors(ou,Ha);let o=this.direction.dot(au),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);let l=a*this.direction.dot(Ha.crossVectors(cs,Ha));if(l<0)return null;let c=a*this.direction.dot(ou.cross(cs));if(c<0||l+c>o)return null;let u=-a*cs.dot(au);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,H0)}lookAt(e,t,n){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),us.crossVectors(n,Fn),us.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),us.crossVectors(n,Fn)),us.normalize(),Va.crossVectors(Fn,us),s[0]=us.x,s[4]=Va.x,s[8]=Fn.x,s[1]=us.y,s[5]=Va.y,s[9]=Fn.y,s[2]=us.z,s[6]=Va.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],v=n[7],x=n[11],P=n[15],A=s[0],C=s[4],L=s[8],b=s[12],S=s[1],N=s[5],Q=s[9],U=s[13],Y=s[2],B=s[6],V=s[10],ee=s[14],G=s[3],W=s[7],le=s[11],ce=s[15];return r[0]=o*A+a*S+l*Y+c*G,r[4]=o*C+a*N+l*B+c*W,r[8]=o*L+a*Q+l*V+c*le,r[12]=o*b+a*U+l*ee+c*ce,r[1]=u*A+h*S+f*Y+d*G,r[5]=u*C+h*N+f*B+d*W,r[9]=u*L+h*Q+f*V+d*le,r[13]=u*b+h*U+f*ee+d*ce,r[2]=g*A+_*S+m*Y+p*G,r[6]=g*C+_*N+m*B+p*W,r[10]=g*L+_*Q+m*V+p*le,r[14]=g*b+_*U+m*ee+p*ce,r[3]=M*A+v*S+x*Y+P*G,r[7]=M*C+v*N+x*B+P*W,r[11]=M*L+v*Q+x*V+P*le,r[15]=M*b+v*U+x*ee+P*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,x=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,P=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,A=t*M+n*v+s*x+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=M*C,e[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*C,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*C,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*C,e[4]=v*C,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*C,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*C,e[8]=x*C,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*C,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*C,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*C,e[12]=P*C,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*C,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*C,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=l*c,v=l*u,x=l*h,P=n.x,A=n.y,C=n.z;return s[0]=(1-(_+p))*P,s[1]=(d+x)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(f+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+v)*C,s[9]=(m-M)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=xr.set(s[0],s[1],s[2]).length(),o=xr.set(s[4],s[5],s[6]).length(),a=xr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);let c=1/r,u=1/o,h=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=_i){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===_i)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===To)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=_i){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,d=(n+s)*u,g,_;if(a===_i)g=(o+r)*h,_=-2*h;else if(a===To)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xr=new R,ni=new $e,k0=new R(0,0,0),H0=new R(1,1,1),us=new R,Va=new R,Fn=new R,ad=new $e,ld=new Tn,li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ad,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},V0=0,cd=new R,yr=new Tn,Fi=new $e,Ga=new R,mo=new R,G0=new R,W0=new Tn,ud=new R(1,0,0),hd=new R(0,1,0),fd=new R(0,0,1),dd={type:"added"},X0={type:"removed"},vr={type:"childadded",child:null},lu={type:"childremoved",child:null},At=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new li,n=new Tn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new et}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return cd.copy(e).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(mo,Ga,this.up):Fi.lookAt(Ga,mo,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(Fi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dd),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dd),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};At.DEFAULT_UP=new R(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new R,Bi=new R,cu=new R,zi=new R,Mr=new R,br=new R,pd=new R,uu=new R,hu=new R,fu=new R,du=new rt,pu=new rt,mu=new rt,mi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),Bi.subVectors(n,t),cu.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Bi),l=ii.dot(cu),c=Bi.dot(Bi),u=Bi.dot(cu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return du.setScalar(0),pu.setScalar(0),mu.setScalar(0),du.fromBufferAttribute(e,t),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(du,r.x),o.addScaledVector(pu,r.y),o.addScaledVector(mu,r.z),o}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),Bi.subVectors(e,t),ii.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ii.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Mr.subVectors(s,n),br.subVectors(r,n),uu.subVectors(e,n);let l=Mr.dot(uu),c=br.dot(uu);if(l<=0&&c<=0)return t.copy(n);hu.subVectors(e,s);let u=Mr.dot(hu),h=br.dot(hu);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Mr,o);fu.subVectors(e,r);let d=Mr.dot(fu),g=br.dot(fu);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(br,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return pd.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(pd,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Mr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function gu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=rh(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gu(o,r,e+1/3),this.g=gu(o,r,e),this.b=gu(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=Ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return ct.fromWorkingColorSpace(xn.copy(this),e),Math.round(it(xn.r*255,0,255))*65536+Math.round(it(xn.g*255,0,255))*256+Math.round(it(xn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(xn.copy(this),t);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ft){ct.fromWorkingColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,s=xn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Wa);let n=Eo(hs.h,Wa.h,t),s=Eo(hs.s,Wa.s,t),r=Eo(hs.l,Wa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Ue;Ue.NAMES=Ip;var q0=0,An=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=oi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lr,this.blendDst=Ns,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ns&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Nt=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new R,Xa=new Oe,xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}};var Co=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Po=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ut=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Y0=0,Xn=new $e,_u=new At,Sr=new R,Bn=new It,go=new It,Jt=new R,Tt=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oh(e)?Po:Co)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Bn.min,go.min),Bn.expandByPoint(Jt),Jt.addVectors(Bn.max,go.max),Bn.expandByPoint(Jt)):(Bn.expandByPoint(go.min),Bn.expandByPoint(go.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),Jt.add(Sr)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new R,l[L]=new R;let c=new R,u=new R,h=new R,f=new Oe,d=new Oe,g=new Oe,_=new R,m=new R;function p(L,b,S){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(N),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[L].add(_),a[b].add(_),a[S].add(_),l[L].add(m),l[b].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,b=M.length;L<b;++L){let S=M[L],N=S.start,Q=S.count;for(let U=N,Y=N+Q;U<Y;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let v=new R,x=new R,P=new R,A=new R;function C(L){P.fromBufferAttribute(s,L),A.copy(P);let b=a[L];v.copy(b),v.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(A,b);let N=x.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,N)}for(let L=0,b=M.length;L<b;++L){let S=M[L],N=S.start,Q=S.count;for(let U=N,Y=N+Q;U<Y;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new xt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},md=new $e,Is=new yi,qa=new Qt,gd=new R,Ya=new R,$a=new R,Za=new R,xu=new R,Ka=new R,_d=new R,ja=new R,je=class extends At{constructor(e=new Tt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(xu.fromBufferAttribute(h,e),o?Ka.addScaledVector(xu,u):Ka.addScaledVector(xu.sub(t),u))}t.add(Ka)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(qa.containsPoint(Is.origin)===!1&&(Is.intersectSphere(qa,gd)===null||Is.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),Is.copy(e.ray).applyMatrix4(md),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,P=v;x<P;x+=3){let A=a.getX(x),C=a.getX(x+1),L=a.getX(x+2);s=Ja(this,p,e,n,c,u,h,A,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=Ja(this,o,e,n,c,u,h,M,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,P=v;x<P;x+=3){let A=x,C=x+1,L=x+2;s=Ja(this,p,e,n,c,u,h,A,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=m,v=m+1,x=m+2;s=Ja(this,o,e,n,c,u,h,M,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function $0(i,e,t,n,s,r,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Dn,a),l===null)return null;ja.copy(a),ja.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ja);return c<t.near||c>t.far?null:{distance:c,point:ja.clone(),object:i}}function Ja(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ya),i.getVertexPosition(l,$a),i.getVertexPosition(c,Za);let u=$0(i,e,t,n,Ya,$a,Za,_d);if(u){let h=new R;mi.getBarycoord(_d,Ya,$a,Za,h),s&&(u.uv=mi.getInterpolatedAttribute(s,a,l,c,h,new Oe)),r&&(u.uv1=mi.getInterpolatedAttribute(r,a,l,c,h,new Oe)),o&&(u.normal=mi.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new R,materialIndex:0};mi.getNormal(Ya,$a,Za,f.normal),u.face=f,u.barycoord=h}return u}var ds=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function g(_,m,p,M,v,x,P,A,C,L,b){let S=x/C,N=P/L,Q=x/2,U=P/2,Y=A/2,B=C+1,V=L+1,ee=0,G=0,W=new R;for(let le=0;le<V;le++){let ce=le*N-U;for(let xe=0;xe<B;xe++){let oe=xe*S-Q;W[_]=oe*M,W[m]=ce*v,W[p]=Y,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=A>0?1:-1,u.push(W.x,W.y,W.z),h.push(xe/C),h.push(1-le/L),ee+=1}}for(let le=0;le<L;le++)for(let ce=0;ce<C;ce++){let xe=f+ce+B*le,oe=f+ce+B*(le+1),F=f+(ce+1)+B*(le+1),J=f+(ce+1)+B*le;l.push(xe,oe,J),l.push(oe,F,J),G+=6}a.addGroup(d,G,b),d+=G,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Mn(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Z0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var fa={clone:Zs,merge:Mn},K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Io=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fs=new R,xd=new Oe,yd=new Oe,zt=class extends Io{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,xd,yd),t.subVectors(yd,xd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Er=-90,wr=1,yl=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Er,wr,e,t);s.layers=this.layers,this.add(s);let r=new zt(Er,wr,e,t);r.layers=this.layers,this.add(r);let o=new zt(Er,wr,e,t);o.layers=this.layers,this.add(o);let a=new zt(Er,wr,e,t);a.layers=this.layers,this.add(a);let l=new zt(Er,wr,e,t);l.layers=this.layers,this.add(l);let c=new zt(Er,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Do=class extends Wt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vl=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Do(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ds(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:kn});r.uniforms.tEquirect.value=t;let o=new je(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=Ht),new yl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};var Yn=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ml,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new R,yn=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=class extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tr,_o=new R,Ar=new R,Rr=new R,Cr=new Oe,xo=new Oe,Dp=new $e,Qa=new R,yo=new R,el=new R,vd=new Oe,yu=new Oe,Md=new Oe,Lo=class extends At{constructor(e=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ps(t,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new yn(n,3,0,!1)),Tr.setAttribute("uv",new yn(n,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new Oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),Dp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Rr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;tl(Qa.set(-.5,-.5,0),Rr,o,Ar,s,r),tl(yo.set(.5,-.5,0),Rr,o,Ar,s,r),tl(el.set(.5,.5,0),Rr,o,Ar,s,r),vd.set(0,0),yu.set(1,0),Md.set(1,1);let a=e.ray.intersectTriangle(Qa,yo,el,!1,_o);if(a===null&&(tl(yo.set(-.5,.5,0),Rr,o,Ar,s,r),yu.set(0,1),a=e.ray.intersectTriangle(Qa,el,yo,!1,_o),a===null))return;let l=e.ray.origin.distanceTo(_o);l<e.near||l>e.far||t.push({distance:l,point:_o.clone(),uv:mi.getInterpolation(_o,Qa,yo,el,vd,yu,Md,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function tl(i,e,t,n,s,r){Cr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(xo.x=r*Cr.x-s*Cr.y,xo.y=s*Cr.x+r*Cr.y):xo.copy(Cr),i.copy(e),i.x+=xo.x,i.y+=xo.y,i.applyMatrix4(Dp)}var bd=new R,Sd=new rt,Ed=new rt,J0=new R,wd=new $e,nl=new R,vu=new Qt,Td=new $e,Mu=new yi,Uo=class extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Au,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new It),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nl),this.boundingBox.expandByPoint(nl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nl),this.boundingSphere.expandByPoint(nl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vu.copy(this.boundingSphere),vu.applyMatrix4(s),e.ray.intersectsSphere(vu)!==!1&&(Td.copy(s).invert(),Mu.copy(e.ray).applyMatrix4(Td),!(this.boundingBox!==null&&Mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Sd.fromBufferAttribute(s.attributes.skinIndex,e),Ed.fromBufferAttribute(s.attributes.skinWeight,e),bd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Ed.getComponent(r);if(o!==0){let a=Sd.getComponent(r);wd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(J0.copy(bd).applyMatrix4(wd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Br=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},No=class extends Wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=kt,u=kt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ad=new $e,Q0=new $e,Oo=class i{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Q0;Ad.multiplyMatrices(a,t[r]),Ad.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new No(t,e,e,tn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Br),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ms=class extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pr=new $e,Rd=new $e,il=[],Cd=new It,e_=new $e,vo=new je,Mo=new Qt,Fo=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,e_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new It),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),Cd.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(Cd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),Mo.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pr),Rd.multiplyMatrices(n,Pr),vo.matrixWorld=Rd,vo.raycast(e,il);for(let o=0,a=il.length;o<a;o++){let l=il[o];l.instanceId=r,l.object=this,t.push(l)}il.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new No(new Float32Array(s*this.count),s,this.count,ql,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},bu=new R,t_=new R,n_=new et,rn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bu.subVectors(n,t).cross(t_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||n_.getNormalMatrix(e),s=this.coplanarPoint(bu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ds=new Qt,sl=new R,zr=class{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,o=new rn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-d,x-p).normalize(),n[1].setComponents(l+r,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+u,m+g,x+M).normalize(),n[3].setComponents(l-o,f-u,m-g,x-M).normalize(),n[4].setComponents(l-a,f-h,m-_,x-v).normalize(),t===_i)n[5].setComponents(l+a,f+h,m+_,x+v).normalize();else if(t===To)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(sl.x=s.normal.x>0?e.max.x:e.min.x,sl.y=s.normal.y>0?e.max.y:e.min.y,sl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gi=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ml=new R,bl=new R,Pd=new $e,bo=new yi,rl=new Qt,Su=new R,Id=new R,vi=class extends At{constructor(e=new Tt,t=new Gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ml.fromBufferAttribute(t,s-1),bl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ml.distanceTo(bl);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(s),rl.radius+=r,e.ray.intersectsSphere(rl)===!1)return;Pd.copy(s).invert(),bo.copy(e.ray).applyMatrix4(Pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=u.getX(_),M=u.getX(_+1),v=ol(this,e,bo,l,p,M);v&&t.push(v)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(d),p=ol(this,e,bo,l,_,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=ol(this,e,bo,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){let _=ol(this,e,bo,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ol(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Ml.fromBufferAttribute(o,s),bl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ml,bl,Su,Id)>n)return;Su.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Su);if(!(l<e.near||l>e.far))return{distance:l,point:Id.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Dd=new R,Ld=new R,Bo=class extends vi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Dd.fromBufferAttribute(t,s),Ld.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Dd.distanceTo(Ld);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},zo=class extends vi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},kr=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ud=new $e,Du=new yi,al=new Qt,ll=new R,ko=class extends At{constructor(e=new Tt,t=new kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(s),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;Ud.copy(s).invert(),Du.copy(e.ray).applyMatrix4(Ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);ll.fromBufferAttribute(h,m),Nd(ll,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ll.fromBufferAttribute(h,g),Nd(ll,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nd(i,e,t,n,s,r,o){let a=Du.distanceSqToPoint(i);if(a<t){let l=new R;Du.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Dt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Wi=class extends Wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ho=class extends Wt{constructor(e,t,n,s,r,o,a,l,c,u=Us){if(u!==Us&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Us&&(n=Ms),n===void 0&&u===Fs&&(n=qs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var cl=new R,ul=new R,Eu=new R,hl=new mi,Vo=class extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ir*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:p}=hl;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),hl.getNormal(Eu),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){let v=(M+1)%3,x=h[M],P=h[v],A=hl[u[M]],C=hl[u[v]],L=`${x}_${P}`,b=`${P}_${x}`;b in f&&f[b]?(Eu.dot(f[b].normal)<=r&&(d.push(A.x,A.y,A.z),d.push(C.x,C.y,C.z)),f[b]=null):L in f||(f[L]={index0:c[M],index1:c[v],normal:Eu.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:m}=f[g];cl.fromBufferAttribute(a,_),ul.fromBufferAttribute(a,m),d.push(cl.x,cl.y,cl.z),d.push(ul.x,ul.y,ul.z)}this.setAttribute("position",new Ut(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var $n=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let M=p*f-o;for(let v=0;v<c;v++){let x=v*h-r;g.push(x,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let v=M+c*p,x=M+c*(p+1),P=M+1+c*(p+1),A=M+1+c*p;d.push(v,x,A),d.push(x,P,A)}this.setIndex(d),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Go=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new R,f=new R,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],v=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){let A=P/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+x,1-v),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let v=u[p][M+1],x=u[p][M],P=u[p+1][M],A=u[p+1][M+1];(p!==0||o>0)&&d.push(v,x,A),(p!==n-1||l<Math.PI)&&d.push(x,P,A)}this.setIndex(d),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wo=class extends Tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new R,r=new R;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let g=f,_=f+d;g<_;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),M=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,M),Od(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Od(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ut(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Od(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var vn=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},en=class extends vn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Hr=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sl=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function i_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function s_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Fd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Lp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Xi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends Xi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ru,endingEnd:Ru}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cu:r=e,a=2*t-n;break;case Pu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cu:o=e,l=2*n-t;break;case Pu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+M*o[c+P]+v*o[l+P]+x*o[h+P];return r}},wl=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Tl=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fl(t,this.TimeBufferType),this.values=fl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fl(e.times,Array),values:fl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new El(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case zs:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return zs;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&i_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=zs;var qi=class extends zn{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Bs;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends zn{};Xo.prototype.ValueTypeName="color";var Mi=class extends zn{};Mi.prototype.ValueTypeName="number";var Al=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},bi=class extends zn{InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};bi.prototype.ValueTypeName="quaternion";bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends zn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Bs;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends zn{};Si.prototype.ValueTypeName="vector";var qo=class{constructor(e="",t=-1,n=[],s=gp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(o_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=s_(l);l=Fd(l,1,u),c=Fd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Mi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,_){if(d.length!==0){let m=[],p=[];Lp(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let M=0;M!==f[g].morphTargets.length;++M){let v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}s.push(new Mi(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{let d=".bones["+t[h].name+"]";n(Si,d+".position",f,"pos",s),n(bi,d+".quaternion",f,"rot",s),n(Si,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function r_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return Si;case"color":return Xo;case"quaternion":return bi;case"bool":case"boolean":return qi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function o_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=r_(i.type);if(i.times===void 0){let t=[],n=[];Lp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Rl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},Up=new Rl,Ei=class{constructor(e){this.manager=e!==void 0?e:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki={},Lu=class extends Error{constructor(e,t){super(e),this.response=t}},Vr=class extends Ei{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:n,onError:s});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ki[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){M();function M(){h.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,C=u.length;A<C;A++){let L=u[A];L.onProgress&&L.onProgress(P)}p.enqueue(x),M()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Lu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Hi.add(e,c);let u=ki[e];delete ki[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Cl=class extends Ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Nr("img");function l(){u(),Hi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Yo=class extends Ei{constructor(e){super(e)}load(e,t,n,s){let r=new Wt,o=new Cl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hs=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var wu=new $e,Bd=new R,zd=new R,$o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bd),zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zd),t.updateMatrixWorld(),wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uu=class extends $o{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ks*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Zo=class extends Hs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Uu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},kd=new $e,So=new R,Tu=new R,Nu=class extends $o{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),n.position.copy(So),Tu.copy(n.position),Tu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tu),n.updateMatrixWorld(),s.makeTranslation(-So.x,-So.y,-So.z),kd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd)}},Vs=class extends Hs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ci=class extends Io{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ou=class extends $o{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Ou}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ko=class extends Hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var $i=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},jo=class extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Jo=class extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Hi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(e,l),r.manager.itemStart(e)}};var Pl=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var lh="\\[\\]\\.:\\/",a_=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",l_="[^"+lh.replace("\\.","")+"]",c_=/((?:WC+[\/:])*)/.source.replace("WC",ch),u_=/(WCOD+)?/.source.replace("WCOD",l_),h_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),f_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),d_=new RegExp("^"+c_+u_+h_+f_+"$"),p_=["material","materials","bones","map"],Fu=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(a_,"")}static parseTrackName(e){let t=d_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Fu;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RE=new Float32Array(1);var _s=class extends ps{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Hd=new $e,Qo=class{constructor(e,t,n=0,s=1/0){this.ray=new yi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hd),this}intersectObject(e,t=!0,n=[]){return Bu(e,this,n,t),n.sort(Vd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Bu(e[s],this,n,t);return n.sort(Vd),n}};function Vd(i,e){return i.distance-e.distance}function Bu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Bu(r[o],e,t,!0)}}var Gr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Gd=new R,dl=new R,ea=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Gd.subVectors(e,this.start),dl.subVectors(this.end,this.start);let n=dl.dot(dl),r=dl.dot(Gd)/n;return t&&(r=it(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ta=class extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function uh(i,e,t,n){let s=m_(n);switch(t){case Zu:return i*e;case ju:return i*e;case Ju:return i*e*2;case ql:return i*e/s.components*s.byteLength;case Yl:return i*e/s.components*s.byteLength;case Qu:return i*e*2/s.components*s.byteLength;case $l:return i*e*2/s.components*s.byteLength;case Ku:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case Zl:return i*e*4/s.components*s.byteLength;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:case Ql:return Math.max(i,16)*Math.max(e,8)/4;case Kl:case Jl:return Math.max(i,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ua:case _c:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eh:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m_(i){switch(i){case Zn:case qu:return{byteLength:1,components:1};case Xr:case Yu:case Zi:return{byteLength:2,components:1};case Wl:case Xl:return{byteLength:2,components:4};case Ms:case Gl:case Ln:return{byteLength:4,components:1};case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);function sm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function g_(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var __=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x_=`#ifdef USE_ALPHAHASH
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
#endif`,y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S_=`#ifdef USE_AOMAP
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
#endif`,E_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w_=`#ifdef USE_BATCHING
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
#endif`,T_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P_=`#ifdef USE_IRIDESCENCE
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
#endif`,I_=`#ifdef USE_BUMPMAP
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
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,k_=`#define PI 3.141592653589793
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
} // validated`,H_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V_=`vec3 transformedNormal = objectNormal;
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
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,J_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
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
}`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lx=`uniform bool receiveShadow;
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
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,px=`PhysicalMaterial material;
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
#endif`,mx=`struct PhysicalMaterial {
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
}`,gx=`
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
#endif`,_x=`#if defined( RE_IndirectDiffuse )
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tx=`#if defined( USE_POINTS_UV )
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
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zx=`#ifdef USE_NORMALMAP
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
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ey=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ty=`float getShadowMask() {
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
}`,ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
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
}`,Sy=`#if DEPTH_PACKING == 3200
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
}`,Ey=`#define DISTANCE
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
}`,wy=`#define DISTANCE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`uniform float scale;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Dy=`#define LAMBERT
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
}`,Ly=`#define LAMBERT
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
}`,Uy=`#define MATCAP
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
}`,Ny=`#define MATCAP
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
}`,Oy=`#define NORMAL
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
}`,Fy=`#define NORMAL
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
}`,By=`#define PHONG
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
}`,zy=`#define PHONG
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
}`,ky=`#define STANDARD
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
}`,Hy=`#define STANDARD
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
}`,Vy=`#define TOON
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
}`,Gy=`#define TOON
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
}`,Wy=`uniform float size;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,Yy=`uniform vec3 color;
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
}`,$y=`uniform float rotation;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:__,alphahash_pars_fragment:x_,alphamap_fragment:y_,alphamap_pars_fragment:v_,alphatest_fragment:M_,alphatest_pars_fragment:b_,aomap_fragment:S_,aomap_pars_fragment:E_,batching_pars_vertex:w_,batching_vertex:T_,begin_vertex:A_,beginnormal_vertex:R_,bsdfs:C_,iridescence_fragment:P_,bumpmap_pars_fragment:I_,clipping_planes_fragment:D_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:U_,clipping_planes_vertex:N_,color_fragment:O_,color_pars_fragment:F_,color_pars_vertex:B_,color_vertex:z_,common:k_,cube_uv_reflection_fragment:H_,defaultnormal_vertex:V_,displacementmap_pars_vertex:G_,displacementmap_vertex:W_,emissivemap_fragment:X_,emissivemap_pars_fragment:q_,colorspace_fragment:Y_,colorspace_pars_fragment:$_,envmap_fragment:Z_,envmap_common_pars_fragment:K_,envmap_pars_fragment:j_,envmap_pars_vertex:J_,envmap_physical_pars_fragment:cx,envmap_vertex:Q_,fog_vertex:ex,fog_pars_vertex:tx,fog_fragment:nx,fog_pars_fragment:ix,gradientmap_pars_fragment:sx,lightmap_pars_fragment:rx,lights_lambert_fragment:ox,lights_lambert_pars_fragment:ax,lights_pars_begin:lx,lights_toon_fragment:ux,lights_toon_pars_fragment:hx,lights_phong_fragment:fx,lights_phong_pars_fragment:dx,lights_physical_fragment:px,lights_physical_pars_fragment:mx,lights_fragment_begin:gx,lights_fragment_maps:_x,lights_fragment_end:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:bx,map_fragment:Sx,map_pars_fragment:Ex,map_particle_fragment:wx,map_particle_pars_fragment:Tx,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Cx,morphcolor_vertex:Px,morphnormal_vertex:Ix,morphtarget_pars_vertex:Dx,morphtarget_vertex:Lx,normal_fragment_begin:Ux,normal_fragment_maps:Nx,normal_pars_fragment:Ox,normal_pars_vertex:Fx,normal_vertex:Bx,normalmap_pars_fragment:zx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Gx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:qx,project_vertex:Yx,dithering_fragment:$x,dithering_pars_fragment:Zx,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:Qx,shadowmap_vertex:ey,shadowmask_pars_fragment:ty,skinbase_vertex:ny,skinning_pars_vertex:iy,skinning_vertex:sy,skinnormal_vertex:ry,specularmap_fragment:oy,specularmap_pars_fragment:ay,tonemapping_fragment:ly,tonemapping_pars_fragment:cy,transmission_fragment:uy,transmission_pars_fragment:hy,uv_pars_fragment:fy,uv_pars_vertex:dy,uv_vertex:py,worldpos_vertex:my,background_vert:gy,background_frag:_y,backgroundCube_vert:xy,backgroundCube_frag:yy,cube_vert:vy,cube_frag:My,depth_vert:by,depth_frag:Sy,distanceRGBA_vert:Ey,distanceRGBA_frag:wy,equirect_vert:Ty,equirect_frag:Ay,linedashed_vert:Ry,linedashed_frag:Cy,meshbasic_vert:Py,meshbasic_frag:Iy,meshlambert_vert:Dy,meshlambert_frag:Ly,meshmatcap_vert:Uy,meshmatcap_frag:Ny,meshnormal_vert:Oy,meshnormal_frag:Fy,meshphong_vert:By,meshphong_frag:zy,meshphysical_vert:ky,meshphysical_frag:Hy,meshtoon_vert:Vy,meshtoon_frag:Gy,points_vert:Wy,points_frag:Xy,shadow_vert:qy,shadow_frag:Yy,sprite_vert:$y,sprite_frag:Zy},Te={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Rn={basic:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ue(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Mn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Mn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ue(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Mn([Te.points,Te.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Mn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Mn([Te.common,Te.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Mn([Te.sprite,Te.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Mn([Te.common,Te.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Mn([Te.lights,Te.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Rn.physical={uniforms:Mn([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var bc={r:0,b:0,g:0},Ks=new li,Ky=new $e;function jy(i,e,t,n,s,r,o){let a=new Ue(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1,P=g(v);P===null?p(a,l):P&&P.isColor&&(p(P,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){let P=g(x);P&&(P.isCubeTexture||P.mapping===ra)?(u===void 0&&(u=new je(new ds(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Zs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ks.copy(x.backgroundRotation),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ky.makeRotationFromEuler(Ks)),u.material.toneMapped=ct.getTransfer(P.colorSpace)!==_t,(h!==P||f!==P.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new je(new $n(2,2),new Xt({name:"BackgroundMaterial",uniforms:Zs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ct.getTransfer(P.colorSpace)!==_t,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,f=P.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(bc,ah(i)),n.buffers.color.setClear(bc.r,bc.g,bc.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m,dispose:M}}function Jy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,N,Q,U,Y){let B=!1,V=h(U,Q,N);r!==V&&(r=V,c(r.object)),B=d(S,U,Q,Y),B&&g(S,U,Q,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(S,N,Q,U),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,N,Q){let U=Q.wireframe===!0,Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let B=Y[N.id];B===void 0&&(B={},Y[N.id]=B);let V=B[U];return V===void 0&&(V=f(l()),B[U]=V),V}function f(S){let N=[],Q=[],U=[];for(let Y=0;Y<t;Y++)N[Y]=0,Q[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Q,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,N,Q,U){let Y=r.attributes,B=N.attributes,V=0,ee=Q.getAttributes();for(let G in ee)if(ee[G].location>=0){let le=Y[G],ce=B[G];if(ce===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),le===void 0||le.attribute!==ce||ce&&le.data!==ce.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function g(S,N,Q,U){let Y={},B=N.attributes,V=0,ee=Q.getAttributes();for(let G in ee)if(ee[G].location>=0){let le=B[G];le===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));let ce={};ce.attribute=le,le&&le.data&&(ce.data=le.data),Y[G]=ce,V++}r.attributes=Y,r.attributesNum=V,r.index=U}function _(){let S=r.newAttributes;for(let N=0,Q=S.length;N<Q;N++)S[N]=0}function m(S){p(S,0)}function p(S,N){let Q=r.newAttributes,U=r.enabledAttributes,Y=r.attributeDivisors;Q[S]=1,U[S]===0&&(i.enableVertexAttribArray(S),U[S]=1),Y[S]!==N&&(i.vertexAttribDivisor(S,N),Y[S]=N)}function M(){let S=r.newAttributes,N=r.enabledAttributes;for(let Q=0,U=N.length;Q<U;Q++)N[Q]!==S[Q]&&(i.disableVertexAttribArray(Q),N[Q]=0)}function v(S,N,Q,U,Y,B,V){V===!0?i.vertexAttribIPointer(S,N,Q,Y,B):i.vertexAttribPointer(S,N,Q,U,Y,B)}function x(S,N,Q,U){_();let Y=U.attributes,B=Q.getAttributes(),V=N.defaultAttributeValues;for(let ee in B){let G=B[ee];if(G.location>=0){let W=Y[ee];if(W===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){let le=W.normalized,ce=W.itemSize,xe=e.get(W);if(xe===void 0)continue;let oe=xe.buffer,F=xe.type,J=xe.bytesPerElement,ue=F===i.INT||F===i.UNSIGNED_INT||W.gpuType===Gl;if(W.isInterleavedBufferAttribute){let ie=W.data,ye=ie.stride,ge=W.offset;if(ie.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)p(G.location+Se,ie.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Se=0;Se<G.locationSize;Se++)m(G.location+Se);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Se=0;Se<G.locationSize;Se++)v(G.location+Se,ce/G.locationSize,F,le,ye*J,(ge+ce/G.locationSize*Se)*J,ue)}else{if(W.isInstancedBufferAttribute){for(let ie=0;ie<G.locationSize;ie++)p(G.location+ie,W.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ie=0;ie<G.locationSize;ie++)m(G.location+ie);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ie=0;ie<G.locationSize;ie++)v(G.location+ie,ce/G.locationSize,F,le,ce*J,ce/G.locationSize*ie*J,ue)}}else if(V!==void 0){let le=V[ee];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(G.location,le);break;case 3:i.vertexAttrib3fv(G.location,le);break;case 4:i.vertexAttrib4fv(G.location,le);break;default:i.vertexAttrib1fv(G.location,le)}}}}M()}function P(){L();for(let S in n){let N=n[S];for(let Q in N){let U=N[Q];for(let Y in U)u(U[Y].object),delete U[Y];delete N[Q]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let N=n[S.id];for(let Q in N){let U=N[Q];for(let Y in U)u(U[Y].object),delete U[Y];delete N[Q]}delete n[S.id]}function C(S){for(let N in n){let Q=n[N];if(Q[S.id]===void 0)continue;let U=Q[S.id];for(let Y in U)u(U[Y].object),delete U[Y];delete Q[S.id]}}function L(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Qy(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ev(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function tv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new rn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let M=r?0:n,v=M*4,x=p.clippingState||null;l.value=x,x=u(g,f,v,d);for(let P=0;P!==v;++P)x[P]=t[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function nv(i){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=Gs:a===Hl&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===kl||a===Hl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $r=4,Np=[.125,.215,.35,.446,.526,.582],Qs=20,hh=new ci,Op=new Ue,fh=null,dh=0,ph=0,mh=!1,Js=(1+Math.sqrt(5))/2,Yr=1/Js,Fp=[new R(-Js,Yr,0),new R(Js,Yr,0),new R(-Yr,0,Js),new R(Yr,0,Js),new R(0,Js,-Yr),new R(0,Js,Yr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,dh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Zi,format:tn,colorSpace:on,depthBuffer:!1},s=Bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(r)),this._blurMaterial=sv(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,hh)}_sceneToCubeUV(e,t,n,s){let a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Op),u.toneMapping=ui,u.autoClear=!1;let d=new Nt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new je(new ds,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Op),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Sc(s,M*v,p>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gs||e.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Sc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,hh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fp[(s-r-1)%Fp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new je(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Qs;m>Qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);let p=[],M=0;for(let C=0;C<Qs;++C){let L=C/_,b=Math.exp(-L*L/2);p.push(b),C===0?M+=b:C<m&&(M+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let x=this._sizeLods[s],P=3*x*(s>v-$r?s-v+$r:0),A=4*(this._cubeSize-x);Sc(t,P,A,3*x,2*x),l.setRenderTarget(t),l.render(h,hh)}};function iv(i){let e=[],t=[],n=[],s=i,r=i-$r+1+Np.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-$r?l=Np[o-i+$r-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){let C=A%3*2/3-1,L=A>2?0:-1,b=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];M.set(b,_*g*A),v.set(f,m*g*A);let S=[A,A,A,A,A,A];x.set(S,p*g*A)}let P=new Tt;P.setAttribute("position",new xt(M,_)),P.setAttribute("uv",new xt(v,m)),P.setAttribute("faceIndex",new xt(x,p)),e.push(P),s>$r&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bp(i,e,t){let n=new an(i,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sv(i,e,t){let n=new Float32Array(Qs),s=new R(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function zp(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function kp(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function rv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===kl||l===Hl,u=l===Gs||l===Ws;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Kr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Kr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ov(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function av(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let v=0,x=M.length;v<x;v+=3){let P=M[v+0],A=M[v+1],C=M[v+2];f.push(P,A,A,C,C,P)}}else if(g!==void 0){let M=g.array;_=g.version;for(let v=0,x=M.length/3-1;v<x;v+=3){let P=v+0,A=v+1,C=v+2;f.push(P,A,A,C,C,P)}}else return;let m=new(oh(f)?Po:Co)(f,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uv(i,e,t){let n=new WeakMap,s=new rt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*P*4*h),C=new Ro(A,x,P,h);C.type=Ln,C.needsUpdate=!0;let L=v*4;for(let S=0;S<h;S++){let N=m[S],Q=p[S],U=M[S],Y=x*P*4*S;for(let B=0;B<N.count;B++){let V=B*L;d===!0&&(s.fromBufferAttribute(N,B),A[Y+V+0]=s.x,A[Y+V+1]=s.y,A[Y+V+2]=s.z,A[Y+V+3]=0),g===!0&&(s.fromBufferAttribute(Q,B),A[Y+V+4]=s.x,A[Y+V+5]=s.y,A[Y+V+6]=s.z,A[Y+V+7]=0),_===!0&&(s.fromBufferAttribute(U,B),A[Y+V+8]=s.x,A[Y+V+9]=s.y,A[Y+V+10]=s.z,A[Y+V+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new Oe(x,P)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function hv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var rm=new Wt,Hp=new Ho(1,1),om=new Ro,am=new xl,lm=new Do,Vp=[],Gp=[],Wp=new Float32Array(16),Xp=new Float32Array(9),qp=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vp[s];if(r===void 0&&(r=new Float32Array(s),Vp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tc(i,e){let t=Gp[e];t===void 0&&(t=new Int32Array(e),Gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function gv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;qp.set(n),i.uniformMatrix2fv(this.addr,!1,qp),Yt(t,n)}}function _v(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Xp.set(n),i.uniformMatrix3fv(this.addr,!1,Xp),Yt(t,n)}}function xv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Wp.set(n),i.uniformMatrix4fv(this.addr,!1,Wp),Yt(t,n)}}function yv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hp.compareFunction=ih,r=Hp):r=rm,t.setTexture2D(e||r,s)}function Rv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||am,s)}function Cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||lm,s)}function Pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||om,s)}function Iv(i){switch(i){case 5126:return fv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return _v;case 35676:return xv;case 5124:case 35670:return yv;case 35667:case 35671:return vv;case 35668:case 35672:return Mv;case 35669:case 35673:return bv;case 5125:return Sv;case 36294:return Ev;case 36295:return wv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Dv(i,e){i.uniform1fv(this.addr,e)}function Lv(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function Uv(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function Nv(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ov(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fv(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bv(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zv(i,e){i.uniform1iv(this.addr,e)}function kv(i,e){i.uniform2iv(this.addr,e)}function Hv(i,e){i.uniform3iv(this.addr,e)}function Vv(i,e){i.uniform4iv(this.addr,e)}function Gv(i,e){i.uniform1uiv(this.addr,e)}function Wv(i,e){i.uniform2uiv(this.addr,e)}function Xv(i,e){i.uniform3uiv(this.addr,e)}function qv(i,e){i.uniform4uiv(this.addr,e)}function Yv(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rm,r[o])}function $v(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||am,r[o])}function Zv(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||lm,r[o])}function Kv(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||om,r[o])}function jv(i){switch(i){case 5126:return Dv;case 35664:return Lv;case 35665:return Uv;case 35666:return Nv;case 35674:return Ov;case 35675:return Fv;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Hv;case 35669:case 35673:return Vv;case 5125:return Gv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Kv}}var _h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iv(t.type)}},xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jv(t.type)}},yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function Yp(i,e){i.seq.push(e),i.map[e.id]=e}function Jv(i,e,t){let n=i.name,s=n.length;for(gh.lastIndex=0;;){let r=gh.exec(n),o=gh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yp(t,c===void 0?new _h(a,i,e):new xh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new yh(a),Yp(t,h)),t=h}}}var Zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Jv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function $p(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qv=37297,eM=0;function tM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Zp=new et;function nM(i){ct._getMatrix(Zp,ct.workingColorSpace,i);let e=`mat3( ${Zp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case wo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tM(i.getShaderSource(e),o)}else return s}function iM(i,e){let t=nM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sM(i,e){let t;switch(e){case cp:t="Linear";break;case up:t="Reinhard";break;case hp:t="Cineon";break;case sa:t="ACESFilmic";break;case dp:t="AgX";break;case pp:t="Neutral";break;case fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ec=new R;function rM(){ct.getLuminanceCoefficients(Ec);let i=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function aM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function da(i){return i!==""}function jp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(cM,hM)}var uM=new Map;function hM(i,e){let t=st[e];if(t===void 0){let n=uM.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vh(t)}var fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(i){return i.replace(fM,dM)}function dM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function em(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function pM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function mM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function _M(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wu:e="ENVMAP_BLENDING_MULTIPLY";break;case ap:e="ENVMAP_BLENDING_MIX";break;case lp:e="ENVMAP_BLENDING_ADD";break}return e}function xM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=pM(t),c=mM(t),u=gM(t),h=_M(t),f=xM(t),d=oM(t),g=aM(r),_=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),p.length>0&&(p+=`
`)):(m=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),p=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?st.tonemapping_pars_fragment:"",t.toneMapping!==ui?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,iM("linearToOutputTexel",t.outputColorSpace),rM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),o=vh(o),o=jp(o,t),o=Jp(o,t),a=vh(a),a=jp(a,t),a=Jp(a,t),o=Qp(o),a=Qp(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+m+o,x=M+p+a,P=$p(s,s.VERTEX_SHADER,v),A=$p(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(N){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(P).trim(),Y=s.getShaderInfoLog(A).trim(),B=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,A);else{let ee=Kp(s,P,"vertex"),G=Kp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Q+`
`+ee+`
`+G)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(U===""||Y==="")&&(V=!1);V&&(N.diagnostics={runnable:B,programLog:Q,vertexShader:{log:U,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(P),s.deleteShader(A),L=new Zr(s,_),b=lM(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Qv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}var vM=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bh(e),t.set(e,n)),n}},bh=class{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}};function MM(i,e,t,n,s,r,o){let a=new Or,l=new Mh,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,N,Q,U){let Y=Q.fog,B=U.geometry,V=b.isMeshStandardMaterial?Q.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),G=ee&&ee.mapping===ra?ee.image.height:null,W=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=le!==void 0?le.length:0,xe=0;B.morphAttributes.position!==void 0&&(xe=1),B.morphAttributes.normal!==void 0&&(xe=2),B.morphAttributes.color!==void 0&&(xe=3);let oe,F,J,ue;if(W){let Fe=Rn[W];oe=Fe.vertexShader,F=Fe.fragmentShader}else oe=b.vertexShader,F=b.fragmentShader,l.update(b),J=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);let ie=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),ge=U.isInstancedMesh===!0,Se=U.isBatchedMesh===!0,Ze=!!b.map,We=!!b.matcap,Je=!!ee,D=!!b.aoMap,St=!!b.lightMap,Be=!!b.bumpMap,Ve=!!b.normalMap,Ie=!!b.displacementMap,tt=!!b.emissiveMap,j=!!b.metalnessMap,T=!!b.roughnessMap,y=b.anisotropy>0,I=b.clearcoat>0,k=b.dispersion>0,K=b.iridescence>0,Z=b.sheen>0,pe=b.transmission>0,ae=y&&!!b.anisotropyMap,z=I&&!!b.clearcoatMap,he=I&&!!b.clearcoatNormalMap,de=I&&!!b.clearcoatRoughnessMap,Ee=K&&!!b.iridescenceMap,Ce=K&&!!b.iridescenceThicknessMap,Pe=Z&&!!b.sheenColorMap,be=Z&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,ve=!!b.specularColorMap,ze=!!b.specularIntensityMap,O=pe&&!!b.transmissionMap,Me=pe&&!!b.thicknessMap,re=!!b.gradientMap,fe=!!b.alphaMap,Ae=b.alphaTest>0,we=!!b.alphaHash,Ke=!!b.extensions,ht=ui;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ht=i.toneMapping);let Rt={shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:oe,fragmentShader:F,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Se,batchingColor:Se&&U._colorsTexture!==null,instancing:ge,instancingColor:ge&&U.instanceColor!==null,instancingMorph:ge&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:on,alphaToCoverage:!!b.alphaToCoverage,map:Ze,matcap:We,envMap:Je,envMapMode:Je&&ee.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:St,bumpMap:Be,normalMap:Ve,displacementMap:f&&Ie,emissiveMap:tt,normalMapObjectSpace:Ve&&b.normalMapType===yp,normalMapTangentSpace:Ve&&b.normalMapType===nh,metalnessMap:j,roughnessMap:T,anisotropy:y,anisotropyMap:ae,clearcoat:I,clearcoatMap:z,clearcoatNormalMap:he,clearcoatRoughnessMap:de,dispersion:k,iridescence:K,iridescenceMap:Ee,iridescenceThicknessMap:Ce,sheen:Z,sheenColorMap:Pe,sheenRoughnessMap:be,specularMap:Ye,specularColorMap:ve,specularIntensityMap:ze,transmission:pe,transmissionMap:O,thicknessMap:Me,gradientMap:re,opaque:b.transparent===!1&&b.blending===oi&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ae,alphaHash:we,combine:b.combine,mapUv:Ze&&_(b.map.channel),aoMapUv:D&&_(b.aoMap.channel),lightMapUv:St&&_(b.lightMap.channel),bumpMapUv:Be&&_(b.bumpMap.channel),normalMapUv:Ve&&_(b.normalMap.channel),displacementMapUv:Ie&&_(b.displacementMap.channel),emissiveMapUv:tt&&_(b.emissiveMap.channel),metalnessMapUv:j&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:ae&&_(b.anisotropyMap.channel),clearcoatMapUv:z&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(b.sheenRoughnessMap.channel),specularMapUv:Ye&&_(b.specularMap.channel),specularColorMapUv:ve&&_(b.specularColorMap.channel),specularIntensityMapUv:ze&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:Me&&_(b.thicknessMap.channel),alphaMapUv:fe&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ve||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Ze||fe),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ze&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===_t,decodeVideoTextureEmissive:tt&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===_t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===mt,flipSided:b.side===ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ke&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&b.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)S.push(N),S.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(M(S,b),v(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let S=g[b.type],N;if(S){let Q=Rn[S];N=fa.clone(Q.uniforms)}else N=b.uniforms;return N}function P(b,S){let N;for(let Q=0,U=u.length;Q<U;Q++){let Y=u[Q];if(Y.cacheKey===S){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new yM(i,S,b,r),u.push(N)),N}function A(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:L}}function bM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function SM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||SM),n.length>1&&n.sort(f||tm),s.length>1&&s.sort(f||tm)}function u(){for(let h=e,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function EM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new nm,i.set(n,[o])):s>=r.length?(o=new nm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function TM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var AM=0;function RM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function CM(i){let e=new wM,t=TM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new $e,o=new $e;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,v=0,x=0,P=0,A=0,C=0;c.sort(RM);for(let b=0,S=c.length;b<S;b++){let N=c[b],Q=N.color,U=N.intensity,Y=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=Q.r*U,h+=Q.g*U,f+=Q.b*U;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],U);C++}else if(N.isDirectionalLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ee=N.shadow,G=t.get(N);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=N.shadow.matrix,M++}n.directional[d]=V,d++}else if(N.isSpotLight){let V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(Q).multiplyScalar(U),V.distance=Y,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[_]=V;let ee=N.shadow;if(N.map&&(n.spotLightMap[P]=N.map,P++,ee.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[_]=ee.matrix,N.castShadow){let G=t.get(N);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=B,x++}_++}else if(N.isRectAreaLight){let V=e.get(N);V.color.copy(Q).multiplyScalar(U),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=V,m++}else if(N.isPointLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let ee=N.shadow,G=t.get(N);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=N.shadow.matrix,v++}n.point[g]=V,g++}else if(N.isHemisphereLight){let V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(U),V.groundColor.copy(N.groundColor).multiplyScalar(U),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==P||L.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=P,L.numLightProbes=C,n.version=AM++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let v=c[p];if(v.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(v.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function im(i){let e=new CM(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function PM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new im(i),e.set(s,[a])):r>=o.length?(a=new im(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DM=`uniform sampler2D shadow_pass;
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
}`;function LM(i,e,t){let n=new zr,s=new Oe,r=new Oe,o=new rt,a=new Hr({depthPacking:xp}),l=new Sl,c={},u=t.maxTextureSize,h={[Dn]:ln,[ln]:Dn,[mt]:mt},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:IM,fragmentShader:DM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new je(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let p=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(kn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let U=p!==wi&&this.type===wi,Y=p===wi&&this.type!==wi;for(let B=0,V=A.length;B<V;B++){let ee=A[B],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let W=G.getFrameExtents();if(s.multiply(W),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||U===!0||Y===!0){let ce=this.type!==wi?{minFilter:kt,magFilter:kt}:{};G.map!==null&&G.map.dispose(),G.map=new an(s.x,s.y,ce),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let le=G.getViewportCount();for(let ce=0;ce<le;ce++){let xe=G.getViewport(ce);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),Q.viewport(o),G.updateMatrices(ee,ce),n=G.getFrustum(),x(C,L,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===wi&&M(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,N)};function M(A,C){let L=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new an(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,L,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,L,d,_,null)}function v(A,C,L,b){let S=null,N=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)S=N;else if(S=L.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let Q=S.uuid,U=C.uuid,Y=c[Q];Y===void 0&&(Y={},c[Q]=Y);let B=Y[U];B===void 0&&(B=S.clone(),Y[U]=B,C.addEventListener("dispose",P)),S=B}if(S.visible=C.visible,S.wireframe=C.wireframe,b===wi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Q=i.properties.get(S);Q.light=L}return S}function x(A,C,L,b,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===wi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let U=e.update(A),Y=A.material;if(Array.isArray(Y)){let B=U.groups;for(let V=0,ee=B.length;V<ee;V++){let G=B[V],W=Y[G.materialIndex];if(W&&W.visible){let le=v(A,W,b,S);A.onBeforeShadow(i,A,C,L,U,le,G),i.renderBufferDirect(L,null,U,le,A,G),A.onAfterShadow(i,A,C,L,U,le,G)}}}else if(Y.visible){let B=v(A,Y,b,S);A.onBeforeShadow(i,A,C,L,U,B,null),i.renderBufferDirect(L,null,U,B,A,null),A.onAfterShadow(i,A,C,L,U,B,null)}}let Q=A.children;for(let U=0,Y=Q.length;U<Y;U++)x(Q[U],C,L,b,S)}function P(A){A.target.removeEventListener("dispose",P);for(let L in c){let b=c[L],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var UM={[Ll]:Ul,[Nl]:Bl,[Ol]:zl,[Os]:Fl,[Ul]:Ll,[Bl]:Nl,[zl]:Ol,[Fl]:Os};function NM(i,e){function t(){let O=!1,Me=new rt,re=null,fe=new rt(0,0,0,0);return{setMask:function(Ae){re!==Ae&&!O&&(i.colorMask(Ae,Ae,Ae,Ae),re=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,we,Ke,ht,Rt){Rt===!0&&(Ae*=ht,we*=ht,Ke*=ht),Me.set(Ae,we,Ke,ht),fe.equals(Me)===!1&&(i.clearColor(Ae,we,Ke,ht),fe.copy(Me))},reset:function(){O=!1,re=null,fe.set(-1,0,0,0)}}}function n(){let O=!1,Me=!1,re=null,fe=null,Ae=null;return{setReversed:function(we){if(Me!==we){let Ke=e.get("EXT_clip_control");Me?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);let ht=Ae;Ae=null,this.setClear(ht)}Me=we},getReversed:function(){return Me},setTest:function(we){we?ie(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(we){re!==we&&!O&&(i.depthMask(we),re=we)},setFunc:function(we){if(Me&&(we=UM[we]),fe!==we){switch(we){case Ll:i.depthFunc(i.NEVER);break;case Ul:i.depthFunc(i.ALWAYS);break;case Nl:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case Ol:i.depthFunc(i.EQUAL);break;case Fl:i.depthFunc(i.GEQUAL);break;case Bl:i.depthFunc(i.GREATER);break;case zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=we}},setLocked:function(we){O=we},setClear:function(we){Ae!==we&&(Me&&(we=1-we),i.clearDepth(we),Ae=we)},reset:function(){O=!1,re=null,fe=null,Ae=null,Me=!1}}}function s(){let O=!1,Me=null,re=null,fe=null,Ae=null,we=null,Ke=null,ht=null,Rt=null;return{setTest:function(Fe){O||(Fe?ie(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Fe){Me!==Fe&&!O&&(i.stencilMask(Fe),Me=Fe)},setFunc:function(Fe,Et,Zt){(re!==Fe||fe!==Et||Ae!==Zt)&&(i.stencilFunc(Fe,Et,Zt),re=Fe,fe=Et,Ae=Zt)},setOp:function(Fe,Et,Zt){(we!==Fe||Ke!==Et||ht!==Zt)&&(i.stencilOp(Fe,Et,Zt),we=Fe,Ke=Et,ht=Zt)},setLocked:function(Fe){O=Fe},setClear:function(Fe){Rt!==Fe&&(i.clearStencil(Fe),Rt=Fe)},reset:function(){O=!1,Me=null,re=null,fe=null,Ae=null,we=null,Ke=null,ht=null,Rt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,P=null,A=null,C=new Ue(0,0,0),L=0,b=!1,S=null,N=null,Q=null,U=null,Y=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=ee>=2);let W=null,le={},ce=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),oe=new rt().fromArray(ce),F=new rt().fromArray(xe);function J(O,Me,re,fe){let Ae=new Uint8Array(4),we=i.createTexture();i.bindTexture(O,we),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<re;Ke++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(Me+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return we}let ue={};ue[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Os),Be(!1),Ve(zu),ie(i.CULL_FACE),D(kn);function ie(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function ye(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function ge(O,Me){return h[O]!==Me?(i.bindFramebuffer(O,Me),h[O]=Me,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Me),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function Se(O,Me){let re=d,fe=!1;if(O){re=f.get(Me),re===void 0&&(re=[],f.set(Me,re));let Ae=O.textures;if(re.length!==Ae.length||re[0]!==i.COLOR_ATTACHMENT0){for(let we=0,Ke=Ae.length;we<Ke;we++)re[we]=i.COLOR_ATTACHMENT0+we;re.length=Ae.length,fe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,fe=!0);fe&&i.drawBuffers(re)}function Ze(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let We={[qn]:i.FUNC_ADD,[Yd]:i.FUNC_SUBTRACT,[$d]:i.FUNC_REVERSE_SUBTRACT};We[Zd]=i.MIN,We[Kd]=i.MAX;let Je={[na]:i.ZERO,[vs]:i.ONE,[jd]:i.SRC_COLOR,[Lr]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[ep]:i.DST_COLOR,[Qd]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[Ns]:i.ONE_MINUS_SRC_ALPHA,[tp]:i.ONE_MINUS_DST_COLOR,[ia]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[op]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,Me,re,fe,Ae,we,Ke,ht,Rt,Fe){if(O===kn){_===!0&&(ye(i.BLEND),_=!1);return}if(_===!1&&(ie(i.BLEND),_=!0),O!==Dl){if(O!==m||Fe!==b){if((p!==qn||x!==qn)&&(i.blendEquation(i.FUNC_ADD),p=qn,x=qn),Fe)switch(O){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hu:i.blendFunc(i.ONE,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,v=null,P=null,A=null,C.set(0,0,0),L=0,m=O,b=Fe}return}Ae=Ae||Me,we=we||re,Ke=Ke||fe,(Me!==p||Ae!==x)&&(i.blendEquationSeparate(We[Me],We[Ae]),p=Me,x=Ae),(re!==M||fe!==v||we!==P||Ke!==A)&&(i.blendFuncSeparate(Je[re],Je[fe],Je[we],Je[Ke]),M=re,v=fe,P=we,A=Ke),(ht.equals(C)===!1||Rt!==L)&&(i.blendColor(ht.r,ht.g,ht.b,Rt),C.copy(ht),L=Rt),m=O,b=!1}function St(O,Me){O.side===mt?ye(i.CULL_FACE):ie(i.CULL_FACE);let re=O.side===ln;Me&&(re=!re),Be(re),O.blending===oi&&O.transparent===!1?D(kn):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let fe=O.stencilWrite;a.setTest(fe),fe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),tt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function Ve(O){O!==Wd?(ie(i.CULL_FACE),O!==N&&(O===zu?i.cullFace(i.BACK):O===Xd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),N=O}function Ie(O){O!==Q&&(V&&i.lineWidth(O),Q=O)}function tt(O,Me,re){O?(ie(i.POLYGON_OFFSET_FILL),(U!==Me||Y!==re)&&(i.polygonOffset(Me,re),U=Me,Y=re)):ye(i.POLYGON_OFFSET_FILL)}function j(O){O?ie(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function T(O){O===void 0&&(O=i.TEXTURE0+B-1),W!==O&&(i.activeTexture(O),W=O)}function y(O,Me,re){re===void 0&&(W===null?re=i.TEXTURE0+B-1:re=W);let fe=le[re];fe===void 0&&(fe={type:void 0,texture:void 0},le[re]=fe),(fe.type!==O||fe.texture!==Me)&&(W!==re&&(i.activeTexture(re),W=re),i.bindTexture(O,Me||ue[O]),fe.type=O,fe.texture=Me)}function I(){let O=le[W];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(O){oe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),oe.copy(O))}function be(O){F.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),F.copy(O))}function Ye(O,Me){let re=c.get(Me);re===void 0&&(re=new WeakMap,c.set(Me,re));let fe=re.get(O);fe===void 0&&(fe=i.getUniformBlockIndex(Me,O.name),re.set(O,fe))}function ve(O,Me){let fe=c.get(Me).get(O);l.get(Me)!==fe&&(i.uniformBlockBinding(Me,fe,O.__bindingPointIndex),l.set(Me,fe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,le={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,P=null,A=null,C=new Ue(0,0,0),L=0,b=!1,S=null,N=null,Q=null,U=null,Y=null,oe.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:ye,bindFramebuffer:ge,drawBuffers:Se,useProgram:Ze,setBlending:D,setMaterial:St,setFlipSided:Be,setCullFace:Ve,setLineWidth:Ie,setPolygonOffset:tt,setScissorTest:j,activeTexture:T,bindTexture:y,unbindTexture:I,compressedTexImage2D:k,compressedTexImage3D:K,texImage2D:Ee,texImage3D:Ce,updateUBOMapping:Ye,uniformBlockBinding:ve,texStorage2D:he,texStorage3D:de,texSubImage2D:Z,texSubImage3D:pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:z,scissor:Pe,viewport:be,reset:ze}}function OM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):Nr("canvas")}function _(T,y,I){let k=1,K=j(T);if((K.width>I||K.height>I)&&(k=I/Math.max(K.width,K.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Z=Math.floor(k*K.width),pe=Math.floor(k*K.height);h===void 0&&(h=g(Z,pe));let ae=y?g(Z,pe):h;return ae.width=Z,ae.height=pe,ae.getContext("2d").drawImage(T,0,0,Z,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+pe+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,y,I,k,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===i.RED&&(I===i.FLOAT&&(Z=i.R32F),I===i.HALF_FLOAT&&(Z=i.R16F),I===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.R8UI),I===i.UNSIGNED_SHORT&&(Z=i.R16UI),I===i.UNSIGNED_INT&&(Z=i.R32UI),I===i.BYTE&&(Z=i.R8I),I===i.SHORT&&(Z=i.R16I),I===i.INT&&(Z=i.R32I)),y===i.RG&&(I===i.FLOAT&&(Z=i.RG32F),I===i.HALF_FLOAT&&(Z=i.RG16F),I===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.RG8UI),I===i.UNSIGNED_SHORT&&(Z=i.RG16UI),I===i.UNSIGNED_INT&&(Z=i.RG32UI),I===i.BYTE&&(Z=i.RG8I),I===i.SHORT&&(Z=i.RG16I),I===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),I===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),I===i.UNSIGNED_INT&&(Z=i.RGB32UI),I===i.BYTE&&(Z=i.RGB8I),I===i.SHORT&&(Z=i.RGB16I),I===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),I===i.UNSIGNED_INT&&(Z=i.RGBA32UI),I===i.BYTE&&(Z=i.RGBA8I),I===i.SHORT&&(Z=i.RGBA16I),I===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){let pe=K?wo:ct.getTransfer(k);I===i.FLOAT&&(Z=i.RGBA32F),I===i.HALF_FLOAT&&(Z=i.RGBA16F),I===i.UNSIGNED_BYTE&&(Z=pe===_t?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(T,y){let I;return T?y===null||y===Ms||y===qs?I=i.DEPTH24_STENCIL8:y===Ln?I=i.DEPTH32F_STENCIL8:y===Xr&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ms||y===qs?I=i.DEPTH_COMPONENT24:y===Ln?I=i.DEPTH_COMPONENT32F:y===Xr&&(I=i.DEPTH_COMPONENT16),I}function P(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==kt&&T.minFilter!==Ht?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){let y=T.target;y.removeEventListener("dispose",A),L(y),y.isVideoTexture&&u.delete(y)}function C(T){let y=T.target;y.removeEventListener("dispose",C),S(y)}function L(T){let y=n.get(T);if(y.__webglInit===void 0)return;let I=T.source,k=f.get(I);if(k){let K=k[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(T),Object.keys(k).length===0&&f.delete(I)}n.remove(T)}function b(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let I=T.source,k=f.get(I);delete k[y.__cacheKey],o.memory.textures--}function S(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let K=0;K<y.__webglFramebuffer[k].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[k][K]);else i.deleteFramebuffer(y.__webglFramebuffer[k]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)i.deleteFramebuffer(y.__webglFramebuffer[k]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let k=0;k<y.__webglColorRenderbuffer.length;k++)y.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[k]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let I=T.textures;for(let k=0,K=I.length;k<K;k++){let Z=n.get(I[k]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(I[k])}n.remove(T)}let N=0;function Q(){N=0}function U(){let T=N;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),N+=1,T}function Y(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function B(T,y){let I=n.get(T);if(T.isVideoTexture&&Ie(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){let k=T.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(I,T,y);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+y)}function V(T,y){let I=n.get(T);if(T.version>0&&I.__version!==T.version){F(I,T,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+y)}function ee(T,y){let I=n.get(T);if(T.version>0&&I.__version!==T.version){F(I,T,y);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+y)}function G(T,y){let I=n.get(T);if(T.version>0&&I.__version!==T.version){J(I,T,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+y)}let W={[ai]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},le={[kt]:i.NEAREST,[Vl]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},ce={[vp]:i.NEVER,[Tp]:i.ALWAYS,[Mp]:i.LESS,[ih]:i.LEQUAL,[bp]:i.EQUAL,[wp]:i.GEQUAL,[Sp]:i.GREATER,[Ep]:i.NOTEQUAL};function xe(T,y){if(y.type===Ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ht||y.magFilter===Wr||y.magFilter===Xs||y.magFilter===hi||y.minFilter===Ht||y.minFilter===Wr||y.minFilter===Xs||y.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,W[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,W[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,W[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,le[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===kt||y.minFilter!==Xs&&y.minFilter!==hi||y.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function oe(T,y){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));let k=y.source,K=f.get(k);K===void 0&&(K={},f.set(k,K));let Z=Y(y);if(Z!==T.__cacheKey){K[Z]===void 0&&(K[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),K[Z].usedTimes++;let pe=K[T.__cacheKey];pe!==void 0&&(K[T.__cacheKey].usedTimes--,pe.usedTimes===0&&b(y)),T.__cacheKey=Z,T.__webglTexture=K[Z].texture}return I}function F(T,y,I){let k=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=i.TEXTURE_3D);let K=oe(T,y),Z=y.source;t.bindTexture(k,T.__webglTexture,i.TEXTURE0+I);let pe=n.get(Z);if(Z.version!==pe.__version||K===!0){t.activeTexture(i.TEXTURE0+I);let ae=ct.getPrimaries(ct.workingColorSpace),z=y.colorSpace===fi?null:ct.getPrimaries(y.colorSpace),he=y.colorSpace===fi||ae===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let de=_(y.image,!1,s.maxTextureSize);de=tt(y,de);let Ee=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type),Pe=v(y.internalFormat,Ee,Ce,y.colorSpace,y.isVideoTexture);xe(k,y);let be,Ye=y.mipmaps,ve=y.isVideoTexture!==!0,ze=pe.__version===void 0||K===!0,O=Z.dataReady,Me=P(y,de);if(y.isDepthTexture)Pe=x(y.format===Fs,y.type),ze&&(ve?t.texStorage2D(i.TEXTURE_2D,1,Pe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Pe,de.width,de.height,0,Ee,Ce,null));else if(y.isDataTexture)if(Ye.length>0){ve&&ze&&t.texStorage2D(i.TEXTURE_2D,Me,Pe,Ye[0].width,Ye[0].height);for(let re=0,fe=Ye.length;re<fe;re++)be=Ye[re],ve?O&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,be.width,be.height,Ee,Ce,be.data):t.texImage2D(i.TEXTURE_2D,re,Pe,be.width,be.height,0,Ee,Ce,be.data);y.generateMipmaps=!1}else ve?(ze&&t.texStorage2D(i.TEXTURE_2D,Me,Pe,de.width,de.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ee,Ce,de.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,de.width,de.height,0,Ee,Ce,de.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ve&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Pe,Ye[0].width,Ye[0].height,de.depth);for(let re=0,fe=Ye.length;re<fe;re++)if(be=Ye[re],y.format!==tn)if(Ee!==null)if(ve){if(O)if(y.layerUpdates.size>0){let Ae=uh(be.width,be.height,y.format,y.type);for(let we of y.layerUpdates){let Ke=be.data.subarray(we*Ae/be.data.BYTES_PER_ELEMENT,(we+1)*Ae/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,we,be.width,be.height,1,Ee,Ke)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,de.depth,Ee,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Pe,be.width,be.height,de.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,de.depth,Ee,Ce,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Pe,be.width,be.height,de.depth,0,Ee,Ce,be.data)}else{ve&&ze&&t.texStorage2D(i.TEXTURE_2D,Me,Pe,Ye[0].width,Ye[0].height);for(let re=0,fe=Ye.length;re<fe;re++)be=Ye[re],y.format!==tn?Ee!==null?ve?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?O&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,be.width,be.height,Ee,Ce,be.data):t.texImage2D(i.TEXTURE_2D,re,Pe,be.width,be.height,0,Ee,Ce,be.data)}else if(y.isDataArrayTexture)if(ve){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Pe,de.width,de.height,de.depth),O)if(y.layerUpdates.size>0){let re=uh(de.width,de.height,y.format,y.type);for(let fe of y.layerUpdates){let Ae=de.data.subarray(fe*re/de.data.BYTES_PER_ELEMENT,(fe+1)*re/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,de.width,de.height,1,Ee,Ce,Ae)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ee,Ce,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,de.width,de.height,de.depth,0,Ee,Ce,de.data);else if(y.isData3DTexture)ve?(ze&&t.texStorage3D(i.TEXTURE_3D,Me,Pe,de.width,de.height,de.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ee,Ce,de.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,de.width,de.height,de.depth,0,Ee,Ce,de.data);else if(y.isFramebufferTexture){if(ze)if(ve)t.texStorage2D(i.TEXTURE_2D,Me,Pe,de.width,de.height);else{let re=de.width,fe=de.height;for(let Ae=0;Ae<Me;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Pe,re,fe,0,Ee,Ce,null),re>>=1,fe>>=1}}else if(Ye.length>0){if(ve&&ze){let re=j(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Me,Pe,re.width,re.height)}for(let re=0,fe=Ye.length;re<fe;re++)be=Ye[re],ve?O&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ee,Ce,be):t.texImage2D(i.TEXTURE_2D,re,Pe,Ee,Ce,be);y.generateMipmaps=!1}else if(ve){if(ze){let re=j(de);t.texStorage2D(i.TEXTURE_2D,Me,Pe,re.width,re.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ce,de)}else t.texImage2D(i.TEXTURE_2D,0,Pe,Ee,Ce,de);m(y)&&p(k),pe.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function J(T,y,I){if(y.image.length!==6)return;let k=oe(T,y),K=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+I);let Z=n.get(K);if(K.version!==Z.__version||k===!0){t.activeTexture(i.TEXTURE0+I);let pe=ct.getPrimaries(ct.workingColorSpace),ae=y.colorSpace===fi?null:ct.getPrimaries(y.colorSpace),z=y.colorSpace===fi||pe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let he=y.isCompressedTexture||y.image[0].isCompressedTexture,de=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let fe=0;fe<6;fe++)!he&&!de?Ee[fe]=_(y.image[fe],!0,s.maxCubemapSize):Ee[fe]=de?y.image[fe].image:y.image[fe],Ee[fe]=tt(y,Ee[fe]);let Ce=Ee[0],Pe=r.convert(y.format,y.colorSpace),be=r.convert(y.type),Ye=v(y.internalFormat,Pe,be,y.colorSpace),ve=y.isVideoTexture!==!0,ze=Z.__version===void 0||k===!0,O=K.dataReady,Me=P(y,Ce);xe(i.TEXTURE_CUBE_MAP,y);let re;if(he){ve&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ye,Ce.width,Ce.height);for(let fe=0;fe<6;fe++){re=Ee[fe].mipmaps;for(let Ae=0;Ae<re.length;Ae++){let we=re[Ae];y.format!==tn?Pe!==null?ve?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,we.width,we.height,Pe,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,Ye,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,we.width,we.height,Pe,be,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,Ye,we.width,we.height,0,Pe,be,we.data)}}}else{if(re=y.mipmaps,ve&&ze){re.length>0&&Me++;let fe=j(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ye,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(de){ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee[fe].width,Ee[fe].height,Pe,be,Ee[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ye,Ee[fe].width,Ee[fe].height,0,Pe,be,Ee[fe].data);for(let Ae=0;Ae<re.length;Ae++){let Ke=re[Ae].image[fe].image;ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,Ke.width,Ke.height,Pe,be,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,Ye,Ke.width,Ke.height,0,Pe,be,Ke.data)}}else{ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Pe,be,Ee[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ye,Pe,be,Ee[fe]);for(let Ae=0;Ae<re.length;Ae++){let we=re[Ae];ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,Pe,be,we.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,Ye,Pe,be,we.image[fe])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Z.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ue(T,y,I,k,K,Z){let pe=r.convert(I.format,I.colorSpace),ae=r.convert(I.type),z=v(I.internalFormat,pe,ae,I.colorSpace),he=n.get(y),de=n.get(I);if(de.__renderTarget=y,!he.__hasExternalTextures){let Ee=Math.max(1,y.width>>Z),Ce=Math.max(1,y.height>>Z);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Z,z,Ee,Ce,y.depth,0,pe,ae,null):t.texImage2D(K,Z,z,Ee,Ce,0,pe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ve(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,K,de.__webglTexture,0,Be(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,K,de.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(T,y,I){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let k=y.depthTexture,K=k&&k.isDepthTexture?k.type:null,Z=x(y.stencilBuffer,K),pe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Be(y);Ve(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Z,y.width,y.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,T)}else{let k=y.textures;for(let K=0;K<k.length;K++){let Z=k[K],pe=r.convert(Z.format,Z.colorSpace),ae=r.convert(Z.type),z=v(Z.internalFormat,pe,ae,Z.colorSpace),he=Be(y);I&&Ve(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,z,y.width,y.height):Ve(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,z,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=n.get(y.depthTexture);k.__renderTarget=y,(!k.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);let K=k.__webglTexture,Z=Be(y);if(y.depthTexture.format===Us)Ve(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===Fs)Ve(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ge(T){let y=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),k){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=k}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ye(y.__webglFramebuffer,T)}else if(I){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]===void 0)y.__webglDepthbuffer[k]=i.createRenderbuffer(),ie(y.__webglDepthbuffer[k],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ie(y.__webglDepthbuffer,T,!1);else{let k=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(T,y,I){let k=n.get(T);y!==void 0&&ue(k.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&ge(T)}function Ze(T){let y=T.texture,I=n.get(T),k=n.get(y);T.addEventListener("dispose",C);let K=T.textures,Z=T.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=y.version,o.memory.textures++),Z){I.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[ae]=[];for(let z=0;z<y.mipmaps.length;z++)I.__webglFramebuffer[ae][z]=i.createFramebuffer()}else I.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)I.__webglFramebuffer[ae]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(pe)for(let ae=0,z=K.length;ae<z;ae++){let he=n.get(K[ae]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Ve(T)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){let z=K[ae];I.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ae]);let he=r.convert(z.format,z.colorSpace),de=r.convert(z.type),Ee=v(z.internalFormat,he,de,z.colorSpace,T.isXRRenderTarget===!0),Ce=Be(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,I.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),xe(i.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let z=0;z<y.mipmaps.length;z++)ue(I.__webglFramebuffer[ae][z],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,z);else ue(I.__webglFramebuffer[ae],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ae=0,z=K.length;ae<z;ae++){let he=K[ae],de=n.get(he);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),xe(i.TEXTURE_2D,he),ue(I.__webglFramebuffer,T,he,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(he)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,k.__webglTexture),xe(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let z=0;z<y.mipmaps.length;z++)ue(I.__webglFramebuffer[z],T,y,i.COLOR_ATTACHMENT0,ae,z);else ue(I.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,ae,0);m(y)&&p(ae),t.unbindTexture()}T.depthBuffer&&ge(T)}function We(T){let y=T.textures;for(let I=0,k=y.length;I<k;I++){let K=y[I];if(m(K)){let Z=M(T),pe=n.get(K).__webglTexture;t.bindTexture(Z,pe),p(Z),t.unbindTexture()}}}let Je=[],D=[];function St(T){if(T.samples>0){if(Ve(T)===!1){let y=T.textures,I=T.width,k=T.height,K=i.COLOR_BUFFER_BIT,Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(T),ae=y.length>1;if(ae)for(let z=0;z<y.length;z++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let z=0;z<y.length;z++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[z]);let he=n.get(y[z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,I,k,0,0,I,k,K,i.NEAREST),l===!0&&(Je.length=0,D.length=0,Je.push(i.COLOR_ATTACHMENT0+z),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Je.push(Z),D.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let z=0;z<y.length;z++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,pe.__webglColorRenderbuffer[z]);let he=n.get(y[z]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Be(T){return Math.min(s.maxSamples,T.samples)}function Ve(T){let y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ie(T){let y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function tt(T,y){let I=T.colorSpace,k=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==on&&I!==fi&&(ct.getTransfer(I)===_t?(k!==tn||K!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function j(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=Q,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=ee,this.setTextureCube=G,this.rebindTextures=Se,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ve}function FM(i,e){function t(n,s=fi){let r,o=ct.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return i.BYTE;if(n===Yu)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===Gl)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===Zu)return i.ALPHA;if(n===Ku)return i.RGB;if(n===tn)return i.RGBA;if(n===ju)return i.LUMINANCE;if(n===Ju)return i.LUMINANCE_ALPHA;if(n===Us)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===ql)return i.RED;if(n===Yl)return i.RED_INTEGER;if(n===Qu)return i.RG;if(n===$l)return i.RG_INTEGER;if(n===Zl)return i.RGBA_INTEGER;if(n===oa||n===aa||n===la||n===ca)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===jl||n===Jl||n===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===tc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===_c||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===yc||n===vc||n===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var BM={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xt({vertexShader:zM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,_=new Sh,m=t.getContextAttributes(),p=null,M=null,v=[],x=[],P=new Oe,A=null,C=new zt;C.viewport=new rt;let L=new zt;L.viewport=new rt;let b=[C,L],S=new Pl,N=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let J=v[F];return J===void 0&&(J=new pa,v[F]=J),J.getTargetRaySpace()},this.getControllerGrip=function(F){let J=v[F];return J===void 0&&(J=new pa,v[F]=J),J.getGripSpace()},this.getHand=function(F){let J=v[F];return J===void 0&&(J=new pa,v[F]=J),J.getHandSpace()};function U(F){let J=x.indexOf(F.inputSource);if(J===-1)return;let ue=v[J];ue!==void 0&&(ue.update(F.inputSource,F.frame,c||o),ue.dispatchEvent({type:F.type,data:F.inputSource}))}function Y(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",B);for(let F=0;F<v.length;F++){let J=x[F];J!==null&&(x[F]=null,v[F].disconnect(J))}N=null,Q=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,M=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let ue=null,ie=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Fs:Us,ie=m.stencil?qs:Ms);let ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new an(f.textureWidth,f.textureHeight,{format:tn,type:Zn,depthTexture:new Ho(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{let ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new an(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(F){for(let J=0;J<F.removed.length;J++){let ue=F.removed[J],ie=x.indexOf(ue);ie>=0&&(x[ie]=null,v[ie].disconnect(ue))}for(let J=0;J<F.added.length;J++){let ue=F.added[J],ie=x.indexOf(ue);if(ie===-1){for(let ge=0;ge<v.length;ge++)if(ge>=x.length){x.push(ue),ie=ge;break}else if(x[ge]===null){x[ge]=ue,ie=ge;break}if(ie===-1)break}let ye=v[ie];ye&&ye.connect(ue)}}let V=new R,ee=new R;function G(F,J,ue){V.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(ue.matrixWorld);let ie=V.distanceTo(ee),ye=J.projectionMatrix.elements,ge=ue.projectionMatrix.elements,Se=ye[14]/(ye[10]-1),Ze=ye[14]/(ye[10]+1),We=(ye[9]+1)/ye[5],Je=(ye[9]-1)/ye[5],D=(ye[8]-1)/ye[0],St=(ge[8]+1)/ge[0],Be=Se*D,Ve=Se*St,Ie=ie/(-D+St),tt=Ie*-D;if(J.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(tt),F.translateZ(Ie),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ye[10]===-1)F.projectionMatrix.copy(J.projectionMatrix),F.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let j=Se+Ie,T=Ze+Ie,y=Be-tt,I=Ve+(ie-tt),k=We*Ze/T*j,K=Je*Ze/T*j;F.projectionMatrix.makePerspective(y,I,k,K,j,T),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function W(F,J){J===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(J.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let J=F.near,ue=F.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),S.near=L.near=C.near=J,S.far=L.far=C.far=ue,(N!==S.near||Q!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,Q=S.far),C.layers.mask=F.layers.mask|2,L.layers.mask=F.layers.mask|4,S.layers.mask=C.layers.mask|L.layers.mask;let ie=F.parent,ye=S.cameras;W(S,ie);for(let ge=0;ge<ye.length;ge++)W(ye[ge],ie);ye.length===2?G(S,C,L):S.projectionMatrix.copy(C.projectionMatrix),le(F,S,ie)};function le(F,J,ue){ue===null?F.matrix.copy(J.matrixWorld):(F.matrix.copy(ue.matrixWorld),F.matrix.invert(),F.matrix.multiply(J.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(J.projectionMatrix),F.projectionMatrixInverse.copy(J.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ks*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ce=null;function xe(F,J){if(u=J.getViewerPose(c||o),g=J,u!==null){let ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ie=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let ge=0;ge<ue.length;ge++){let Se=ue[ge],Ze=null;if(d!==null)Ze=d.getViewport(Se);else{let Je=h.getViewSubImage(f,Se);Ze=Je.viewport,ge===0&&(e.setRenderTargetTextures(M,Je.colorTexture,f.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(M))}let We=b[ge];We===void 0&&(We=new zt,We.layers.enable(ge),We.viewport=new rt,b[ge]=We),We.matrix.fromArray(Se.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Se.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ge===0&&(S.matrix.copy(We.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ie===!0&&S.cameras.push(We)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")){let ge=h.getDepthInformation(ue[0]);ge&&ge.isValid&&ge.texture&&_.init(e,ge,s.renderState)}}for(let ue=0;ue<v.length;ue++){let ie=x[ue],ye=v[ue];ie!==null&&ye!==void 0&&ye.update(ie,J,c||o)}ce&&ce(F,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let oe=new sm;oe.setAnimationLoop(xe),this.setAnimationLoop=function(F){ce=F},this.dispose=function(){}}},js=new li,HM=new $e;function VM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ah(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),v=M.envMap,x=M.envMapRotation;v&&(m.envMap.value=v,js.copy(x),js.x*=-1,js.y*=-1,js.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(js)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function GM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let x=v.program;n.uniformBlockBinding(M,x)}function c(M,v){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));let P=v.program;n.updateUBOMapping(M,P);let A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){let v=h();M.__bindingPointIndex=v;let x=i.createBuffer(),P=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=s[M.id],x=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,C=x.length;A<C;A++){let L=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,S=L.length;b<S;b++){let N=L[b];if(d(N,A,b,P)===!0){let Q=N.__offset,U=Array.isArray(N.value)?N.value:[N.value],Y=0;for(let B=0;B<U.length;B++){let V=U[B],ee=_(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,Q+Y,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,Y),Y+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,x,P){let A=M.value,C=v+"_"+x;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{let L=P[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(M){let v=M.uniforms,x=0,P=16;for(let C=0,L=v.length;C<L;C++){let b=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,N=b.length;S<N;S++){let Q=b[S],U=Array.isArray(Q.value)?Q.value:[Q.value];for(let Y=0,B=U.length;Y<B;Y++){let V=U[Y],ee=_(V),G=x%P,W=G%ee.boundary,le=G+W;x+=W,le!==0&&P-le<ee.storage&&(x+=P-le),Q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=x,x+=ee.storage}}}let A=x%P;return A>0&&(x+=P-A),M.__size=x,M.__cache={},this}function _(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var wc=class{constructor(e={}){let{canvas:t=Ap(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,M=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this.toneMapping=ui,this.toneMappingExposure=1;let x=this,P=!1,A=0,C=0,L=null,b=-1,S=null,N=new rt,Q=new rt,U=null,Y=new Ue(0),B=0,V=t.width,ee=t.height,G=1,W=null,le=null,ce=new rt(0,0,V,ee),xe=new rt(0,0,V,ee),oe=!1,F=new zr,J=!1,ue=!1;this.transmissionResolutionScale=1;let ie=new $e,ye=new $e,ge=new R,Se=new rt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Je(){return L===null?G:1}let D=n;function St(w,X){return t.getContext(w,X)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Il}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",we,!1),D===null){let X="webgl2";if(D=St(X,w),D===null)throw St(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,Ve,Ie,tt,j,T,y,I,k,K,Z,pe,ae,z,he,de,Ee,Ce,Pe,be,Ye,ve,ze,O;function Me(){Be=new ov(D),Be.init(),ve=new FM(D,Be),Ve=new ev(D,Be,e,ve),Ie=new NM(D,Be),Ve.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),tt=new cv(D),j=new bM,T=new OM(D,Be,Ie,j,Ve,ve,tt),y=new nv(x),I=new rv(x),k=new g_(D),ze=new Jy(D,k),K=new av(D,k,tt,ze),Z=new hv(D,K,k,tt),Pe=new uv(D,Ve,T),de=new tv(j),pe=new MM(x,y,I,Be,Ve,ze,de),ae=new VM(x,j),z=new EM,he=new PM(Be),Ce=new jy(x,y,I,Ie,Z,d,l),Ee=new LM(x,Z,Ve),O=new GM(D,tt,Ve,Ie),be=new Qy(D,Be,tt),Ye=new lv(D,Be,tt),tt.programs=pe.programs,x.capabilities=Ve,x.extensions=Be,x.properties=j,x.renderLists=z,x.shadowMap=Ee,x.state=Ie,x.info=tt}Me();let re=new Eh(x,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(V,ee,!1))},this.getSize=function(w){return w.set(V,ee)},this.setSize=function(w,X,ne=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,ee=X,t.width=Math.floor(w*G),t.height=Math.floor(X*G),ne===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(V*G,ee*G).floor()},this.setDrawingBufferSize=function(w,X,ne){V=w,ee=X,G=ne,t.width=Math.floor(w*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,X,ne,se){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,X,ne,se),Ie.viewport(N.copy(ce).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,X,ne,se){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,X,ne,se),Ie.scissor(Q.copy(xe).multiplyScalar(G).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){Ie.setScissorTest(oe=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(w=!0,X=!0,ne=!0){let se=0;if(w){let $=!1;if(L!==null){let _e=L.texture.format;$=_e===Zl||_e===$l||_e===Yl}if($){let _e=L.texture.type,Re=_e===Zn||_e===Ms||_e===Xr||_e===qs||_e===Wl||_e===Xl,Le=Ce.getClearColor(),De=Ce.getClearAlpha(),Xe=Le.r,qe=Le.g,ke=Le.b;Re?(g[0]=Xe,g[1]=qe,g[2]=ke,g[3]=De,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Xe,_[1]=qe,_[2]=ke,_[3]=De,D.clearBufferiv(D.COLOR,0,_))}else se|=D.COLOR_BUFFER_BIT}X&&(se|=D.DEPTH_BUFFER_BIT),ne&&(se|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ce.dispose(),z.dispose(),he.dispose(),j.dispose(),y.dispose(),I.dispose(),Z.dispose(),ze.dispose(),O.dispose(),pe.dispose(),re.dispose(),re.removeEventListener("sessionstart",ts),re.removeEventListener("sessionend",ns),nn.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let w=tt.autoReset,X=Ee.enabled,ne=Ee.autoUpdate,se=Ee.needsUpdate,$=Ee.type;Me(),tt.autoReset=w,Ee.enabled=X,Ee.autoUpdate=ne,Ee.needsUpdate=se,Ee.type=$}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){let X=w.target;X.removeEventListener("dispose",Ke),ht(X)}function ht(w){Rt(w),j.remove(w)}function Rt(w){let X=j.get(w).programs;X!==void 0&&(X.forEach(function(ne){pe.releaseProgram(ne)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,ne,se,$,_e){X===null&&(X=Ze);let Re=$.isMesh&&$.matrixWorld.determinant()<0,Le=Aa(w,X,ne,se,$);Ie.setMaterial(se,Re);let De=ne.index,Xe=1;if(se.wireframe===!0){if(De=K.getWireframeAttribute(ne),De===void 0)return;Xe=2}let qe=ne.drawRange,ke=ne.attributes.position,at=qe.start*Xe,ut=(qe.start+qe.count)*Xe;_e!==null&&(at=Math.max(at,_e.start*Xe),ut=Math.min(ut,(_e.start+_e.count)*Xe)),De!==null?(at=Math.max(at,0),ut=Math.min(ut,De.count)):ke!=null&&(at=Math.max(at,0),ut=Math.min(ut,ke.count));let Pt=ut-at;if(Pt<0||Pt===1/0)return;ze.setup($,se,Le,ne,De);let wt,lt=be;if(De!==null&&(wt=k.get(De),lt=Ye,lt.setIndex(wt)),$.isMesh)se.wireframe===!0?(Ie.setLineWidth(se.wireframeLinewidth*Je()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if($.isLine){let He=se.linewidth;He===void 0&&(He=1),Ie.setLineWidth(He*Je()),$.isLineSegments?lt.setMode(D.LINES):$.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else $.isPoints?lt.setMode(D.POINTS):$.isSprite&&lt.setMode(D.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)lt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))lt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let He=$._multiDrawStarts,Ot=$._multiDrawCounts,nt=$._multiDrawCount,Vt=De?k.get(De).bytesPerElement:1,Kt=j.get(se).currentProgram.getUniforms();for(let Ct=0;Ct<nt;Ct++)Kt.setValue(D,"_gl_DrawID",Ct),lt.render(He[Ct]/Vt,Ot[Ct])}else if($.isInstancedMesh)lt.renderInstances(at,Pt,$.count);else if(ne.isInstancedBufferGeometry){let He=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ot=Math.min(ne.instanceCount,He);lt.renderInstances(at,Pt,Ot)}else lt.render(at,Pt)};function Fe(w,X,ne){w.transparent===!0&&w.side===mt&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,Ts(w,X,ne),w.side=Dn,w.needsUpdate=!0,Ts(w,X,ne),w.side=mt):Ts(w,X,ne)}this.compile=function(w,X,ne=null){ne===null&&(ne=w),p=he.get(ne),p.init(X),v.push(p),ne.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),w!==ne&&w.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let se=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let _e=$.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){let Le=_e[Re];Fe(Le,ne,$),se.add(Le)}else Fe(_e,ne,$),se.add(_e)}),v.pop(),p=null,se},this.compileAsync=function(w,X,ne=null){let se=this.compile(w,X,ne);return new Promise($=>{function _e(){if(se.forEach(function(Re){j.get(Re).currentProgram.isReady()&&se.delete(Re)}),se.size===0){$(w);return}setTimeout(_e,10)}Be.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Et=null;function Zt(w){Et&&Et(w)}function ts(){nn.stop()}function ns(){nn.start()}let nn=new sm;nn.setAnimationLoop(Zt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(w){Et=w,re.setAnimationLoop(w),w===null?nn.stop():nn.start()},re.addEventListener("sessionstart",ts),re.addEventListener("sessionend",ns),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(X),X=re.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,X,L),p=he.get(w,v.length),p.init(X),v.push(p),ye.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),F.setFromProjectionMatrix(ye),ue=this.localClippingEnabled,J=de.init(this.clippingPlanes,ue),m=z.get(w,M.length),m.init(),M.push(m),re.enabled===!0&&re.isPresenting===!0){let _e=x.xr.getDepthSensingMesh();_e!==null&&Cn(_e,X,-1/0,x.sortObjects)}Cn(w,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(W,le),We=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,We&&Ce.addToRenderList(m,w),this.info.render.frame++,J===!0&&de.beginShadows();let ne=p.state.shadowsArray;Ee.render(ne,w,X),J===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=m.opaque,$=m.transmissive;if(p.setupLights(),X.isArrayCamera){let _e=X.cameras;if($.length>0)for(let Re=0,Le=_e.length;Re<Le;Re++){let De=_e[Re];di(se,$,w,De)}We&&Ce.render(w);for(let Re=0,Le=_e.length;Re<Le;Re++){let De=_e[Re];Qn(m,w,De,De.viewport)}}else $.length>0&&di(se,$,w,X),We&&Ce.render(w),Qn(m,w,X);L!==null&&C===0&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,X),ze.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],J===!0&&de.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Cn(w,X,ne,se){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||F.intersectsSprite(w)){se&&Se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);let Re=Z.update(w),Le=w.material;Le.visible&&m.push(w,Re,Le,ne,Se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||F.intersectsObject(w))){let Re=Z.update(w),Le=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Se.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Se.copy(Re.boundingSphere.center)),Se.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(Le)){let De=Re.groups;for(let Xe=0,qe=De.length;Xe<qe;Xe++){let ke=De[Xe],at=Le[ke.materialIndex];at&&at.visible&&m.push(w,Re,at,ne,Se.z,ke)}}else Le.visible&&m.push(w,Re,Le,ne,Se.z,null)}}let _e=w.children;for(let Re=0,Le=_e.length;Re<Le;Re++)Cn(_e[Re],X,ne,se)}function Qn(w,X,ne,se){let $=w.opaque,_e=w.transmissive,Re=w.transparent;p.setupLightsView(ne),J===!0&&de.setGlobalState(x.clippingPlanes,ne),se&&Ie.viewport(N.copy(se)),$.length>0&&Wn($,X,ne),_e.length>0&&Wn(_e,X,ne),Re.length>0&&Wn(Re,X,ne),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function di(w,X,ne,se){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new an(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Zi:Zn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let _e=p.state.transmissionRenderTarget[se.id],Re=se.viewport||N;_e.setSize(Re.z*x.transmissionResolutionScale,Re.w*x.transmissionResolutionScale);let Le=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(Y),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),We&&Ce.render(ne);let De=x.toneMapping;x.toneMapping=ui;let Xe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),J===!0&&de.setGlobalState(x.clippingPlanes,se),Wn(w,ne,se),T.updateMultisampleRenderTarget(_e),T.updateRenderTargetMipmap(_e),Be.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ke=0,at=X.length;ke<at;ke++){let ut=X[ke],Pt=ut.object,wt=ut.geometry,lt=ut.material,He=ut.group;if(lt.side===mt&&Pt.layers.test(se.layers)){let Ot=lt.side;lt.side=ln,lt.needsUpdate=!0,is(Pt,ne,se,wt,lt,He),lt.side=Ot,lt.needsUpdate=!0,qe=!0}}qe===!0&&(T.updateMultisampleRenderTarget(_e),T.updateRenderTargetMipmap(_e))}x.setRenderTarget(Le),x.setClearColor(Y,B),Xe!==void 0&&(se.viewport=Xe),x.toneMapping=De}function Wn(w,X,ne){let se=X.isScene===!0?X.overrideMaterial:null;for(let $=0,_e=w.length;$<_e;$++){let Re=w[$],Le=Re.object,De=Re.geometry,Xe=se===null?Re.material:se,qe=Re.group;Le.layers.test(ne.layers)&&is(Le,X,ne,De,Xe,qe)}}function is(w,X,ne,se,$,_e){w.onBeforeRender(x,X,ne,se,$,_e),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(x,X,ne,se,w,_e),$.transparent===!0&&$.side===mt&&$.forceSinglePass===!1?($.side=ln,$.needsUpdate=!0,x.renderBufferDirect(ne,X,se,$,w,_e),$.side=Dn,$.needsUpdate=!0,x.renderBufferDirect(ne,X,se,$,w,_e),$.side=mt):x.renderBufferDirect(ne,X,se,$,w,_e),w.onAfterRender(x,X,ne,se,$,_e)}function Ts(w,X,ne){X.isScene!==!0&&(X=Ze);let se=j.get(w),$=p.state.lights,_e=p.state.shadowsArray,Re=$.state.version,Le=pe.getParameters(w,$.state,_e,X,ne),De=pe.getProgramCacheKey(Le),Xe=se.programs;se.environment=w.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(w.isMeshStandardMaterial?I:y).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",Ke),Xe=new Map,se.programs=Xe);let qe=Xe.get(De);if(qe!==void 0){if(se.currentProgram===qe&&se.lightsStateVersion===Re)return ao(w,Le),qe}else Le.uniforms=pe.getUniforms(w),w.onBeforeCompile(Le,x),qe=pe.acquireProgram(Le,De),Xe.set(De,qe),se.uniforms=Le.uniforms;let ke=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=de.uniform),ao(w,Le),se.needsLights=Ca(w),se.lightsStateVersion=Re,se.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.directionalShadowMap.value=$.state.directionalShadowMap,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotShadowMap.value=$.state.spotShadowMap,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMap.value=$.state.pointShadowMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=qe,se.uniformsList=null,qe}function oo(w){if(w.uniformsList===null){let X=w.currentProgram.getUniforms();w.uniformsList=Zr.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function ao(w,X){let ne=j.get(w);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function Aa(w,X,ne,se,$){X.isScene!==!0&&(X=Ze),T.resetTextureUnits();let _e=X.fog,Re=se.isMeshStandardMaterial?X.environment:null,Le=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:on,De=(se.isMeshStandardMaterial?I:y).get(se.envMap||Re),Xe=se.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,qe=!!ne.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ke=!!ne.morphAttributes.position,at=!!ne.morphAttributes.normal,ut=!!ne.morphAttributes.color,Pt=ui;se.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pt=x.toneMapping);let wt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,lt=wt!==void 0?wt.length:0,He=j.get(se),Ot=p.state.lights;if(J===!0&&(ue===!0||w!==S)){let Gt=w===S&&se.id===b;de.setState(se,w,Gt)}let nt=!1;se.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ot.state.version||He.outputColorSpace!==Le||$.isBatchedMesh&&He.batching===!1||!$.isBatchedMesh&&He.batching===!0||$.isBatchedMesh&&He.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&He.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&He.instancing===!1||!$.isInstancedMesh&&He.instancing===!0||$.isSkinnedMesh&&He.skinning===!1||!$.isSkinnedMesh&&He.skinning===!0||$.isInstancedMesh&&He.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&He.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&He.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&He.instancingMorph===!1&&$.morphTexture!==null||He.envMap!==De||se.fog===!0&&He.fog!==_e||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==de.numPlanes||He.numIntersection!==de.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==qe||He.morphTargets!==ke||He.morphNormals!==at||He.morphColors!==ut||He.toneMapping!==Pt||He.morphTargetsCount!==lt)&&(nt=!0):(nt=!0,He.__version=se.version);let Vt=He.currentProgram;nt===!0&&(Vt=Ts(se,X,$));let Kt=!1,Ct=!1,En=!1,vt=Vt.getUniforms(),mn=He.uniforms;if(Ie.useProgram(Vt.program)&&(Kt=!0,Ct=!0,En=!0),se.id!==b&&(b=se.id,Ct=!0),Kt||S!==w){Ie.buffers.depth.getReversed()?(ie.copy(w.projectionMatrix),Cp(ie),Pp(ie),vt.setValue(D,"projectionMatrix",ie)):vt.setValue(D,"projectionMatrix",w.projectionMatrix),vt.setValue(D,"viewMatrix",w.matrixWorldInverse);let jt=vt.map.cameraPosition;jt!==void 0&&jt.setValue(D,ge.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&vt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Ct=!0,En=!0)}if($.isSkinnedMesh){vt.setOptional(D,$,"bindMatrix"),vt.setOptional(D,$,"bindMatrixInverse");let Gt=$.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),vt.setValue(D,"boneTexture",Gt.boneTexture,T))}$.isBatchedMesh&&(vt.setOptional(D,$,"batchingTexture"),vt.setValue(D,"batchingTexture",$._matricesTexture,T),vt.setOptional(D,$,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",$._indirectTexture,T),vt.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",$._colorsTexture,T));let gn=ne.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Pe.update($,ne,Vt),(Ct||He.receiveShadow!==$.receiveShadow)&&(He.receiveShadow=$.receiveShadow,vt.setValue(D,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(mn.envMap.value=De,mn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(mn.envMapIntensity.value=X.environmentIntensity),Ct&&(vt.setValue(D,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Ra(mn,En),_e&&se.fog===!0&&ae.refreshFogUniforms(mn,_e),ae.refreshMaterialUniforms(mn,se,G,ee,p.state.transmissionRenderTarget[w.id]),Zr.upload(D,oo(He),mn,T)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Zr.upload(D,oo(He),mn,T),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&vt.setValue(D,"center",$.center),vt.setValue(D,"modelViewMatrix",$.modelViewMatrix),vt.setValue(D,"normalMatrix",$.normalMatrix),vt.setValue(D,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let Gt=se.uniformsGroups;for(let jt=0,As=Gt.length;jt<As;jt++){let Pn=Gt[jt];O.update(Pn,Vt),O.bind(Pn,Vt)}}return Vt}function Ra(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Ca(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,X,ne){j.get(w.texture).__webglTexture=X,j.get(w.depthTexture).__webglTexture=ne;let se=j.get(w);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ne===void 0,se.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,X){let ne=j.get(w);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};let ss=D.createFramebuffer();this.setRenderTarget=function(w,X=0,ne=0){L=w,A=X,C=ne;let se=!0,$=null,_e=!1,Re=!1;if(w){let De=j.get(w);if(De.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(D.FRAMEBUFFER,null),se=!1;else if(De.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(De.__hasExternalTextures)T.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ke=w.depthTexture;if(De.__boundDepthTexture!==ke){if(ke!==null&&j.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);let qe=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[X])?$=qe[X][ne]:$=qe[X],_e=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?$=j.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?$=qe[ne]:$=qe,N.copy(w.viewport),Q.copy(w.scissor),U=w.scissorTest}else N.copy(ce).multiplyScalar(G).floor(),Q.copy(xe).multiplyScalar(G).floor(),U=oe;if(ne!==0&&($=ss),Ie.bindFramebuffer(D.FRAMEBUFFER,$)&&se&&Ie.drawBuffers(w,$),Ie.viewport(N),Ie.scissor(Q),Ie.setScissorTest(U),_e){let De=j.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+X,De.__webglTexture,ne)}else if(Re){let De=j.get(w.texture),Xe=X;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.__webglTexture,ne,Xe)}else if(w!==null&&ne!==0){let De=j.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,De.__webglTexture,ne)}b=-1},this.readRenderTargetPixels=function(w,X,ne,se,$,_e,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){Ie.bindFramebuffer(D.FRAMEBUFFER,Le);try{let De=w.texture,Xe=De.format,qe=De.type;if(!Ve.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-se&&ne>=0&&ne<=w.height-$&&D.readPixels(X,ne,se,$,ve.convert(Xe),ve.convert(qe),_e)}finally{let De=L!==null?j.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,X,ne,se,$,_e,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){let De=w.texture,Xe=De.format,qe=De.type;if(!Ve.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=w.width-se&&ne>=0&&ne<=w.height-$){Ie.bindFramebuffer(D.FRAMEBUFFER,Le);let ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.bufferData(D.PIXEL_PACK_BUFFER,_e.byteLength,D.STREAM_READ),D.readPixels(X,ne,se,$,ve.convert(Xe),ve.convert(qe),0);let at=L!==null?j.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,at);let ut=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Rp(D,ut,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_e),D.deleteBuffer(ke),D.deleteSync(ut),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,X=null,ne=0){w.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1]);let se=Math.pow(2,-ne),$=Math.floor(w.image.width*se),_e=Math.floor(w.image.height*se),Re=X!==null?X.x:0,Le=X!==null?X.y:0;T.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,ne,0,0,Re,Le,$,_e),Ie.unbindTexture()};let rs=D.createFramebuffer(),lo=D.createFramebuffer();this.copyTextureToTexture=function(w,X,ne=null,se=null,$=0,_e=null){w.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,w=arguments[1],X=arguments[2],_e=arguments[3]||0,ne=null),_e===null&&($!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=$,$=0):_e=0);let Re,Le,De,Xe,qe,ke,at,ut,Pt,wt=w.isCompressedTexture?w.mipmaps[_e]:w.image;if(ne!==null)Re=ne.max.x-ne.min.x,Le=ne.max.y-ne.min.y,De=ne.isBox3?ne.max.z-ne.min.z:1,Xe=ne.min.x,qe=ne.min.y,ke=ne.isBox3?ne.min.z:0;else{let gn=Math.pow(2,-$);Re=Math.floor(wt.width*gn),Le=Math.floor(wt.height*gn),w.isDataArrayTexture?De=wt.depth:w.isData3DTexture?De=Math.floor(wt.depth*gn):De=1,Xe=0,qe=0,ke=0}se!==null?(at=se.x,ut=se.y,Pt=se.z):(at=0,ut=0,Pt=0);let lt=ve.convert(X.format),He=ve.convert(X.type),Ot;X.isData3DTexture?(T.setTexture3D(X,0),Ot=D.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(T.setTexture2DArray(X,0),Ot=D.TEXTURE_2D_ARRAY):(T.setTexture2D(X,0),Ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,X.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,X.unpackAlignment);let nt=D.getParameter(D.UNPACK_ROW_LENGTH),Vt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Kt=D.getParameter(D.UNPACK_SKIP_PIXELS),Ct=D.getParameter(D.UNPACK_SKIP_ROWS),En=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke);let vt=w.isDataArrayTexture||w.isData3DTexture,mn=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){let gn=j.get(w),Gt=j.get(X),jt=j.get(gn.__renderTarget),As=j.get(Gt.__renderTarget);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,jt.__webglFramebuffer),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Pn=0;Pn<De;Pn++)vt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,j.get(w).__webglTexture,$,ke+Pn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,j.get(X).__webglTexture,_e,Pt+Pn)),D.blitFramebuffer(Xe,qe,Re,Le,at,ut,Re,Le,D.DEPTH_BUFFER_BIT,D.NEAREST);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||j.has(w)){let gn=j.get(w),Gt=j.get(X);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,rs),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,lo);for(let jt=0;jt<De;jt++)vt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,$,ke+jt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,$),mn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gt.__webglTexture,_e,Pt+jt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gt.__webglTexture,_e),$!==0?D.blitFramebuffer(Xe,qe,Re,Le,at,ut,Re,Le,D.COLOR_BUFFER_BIT,D.NEAREST):mn?D.copyTexSubImage3D(Ot,_e,at,ut,Pt+jt,Xe,qe,Re,Le):D.copyTexSubImage2D(Ot,_e,at,ut,Xe,qe,Re,Le);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ot,_e,at,ut,Pt,Re,Le,De,lt,He,wt.data):X.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,_e,at,ut,Pt,Re,Le,De,lt,wt.data):D.texSubImage3D(Ot,_e,at,ut,Pt,Re,Le,De,lt,He,wt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,_e,at,ut,Re,Le,lt,He,wt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,_e,at,ut,wt.width,wt.height,lt,wt.data):D.texSubImage2D(D.TEXTURE_2D,_e,at,ut,Re,Le,lt,He,wt);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Vt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,En),_e===0&&X.generateMipmaps&&D.generateMipmap(Ot),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,X,ne=null,se=null,$=0){return w.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,se=arguments[1]||null,w=arguments[2],X=arguments[3],$=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,ne,se,$)},this.initRenderTarget=function(w){j.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,Ie.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};function Th(i,e){if(e===th)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qr||e===ha){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===qr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ac=class extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Lh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=$i.extractUrlBase(e);o=$i.resolveURL(c,this.path)}else o=$i.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dm){try{o[ot.KHR_BINARY_GLTF]=new $h(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new tf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new Ih;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new Zh(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new Kh;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new jh;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function WM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ph=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ue(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vs(u),c.distance=h;break;case"spot":c=new Zo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Ih=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){let s=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}},Dh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Lh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Nh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Fh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Bh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],on),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ft)),Promise.all(r)}},Hh=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Wh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Xh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},qh=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},Yh=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Kn.TRIANGLES&&c.mode!==Kn.TRIANGLE_STRIP&&c.mode!==Kn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let _=new $e,m=new R,p=new Tn,M=new R(1,1,1),v=new Fo(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(m,p,M));for(let x in l)if(x==="_COLOR_0"){let P=l[x];v.instanceColor=new ms(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);At.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},dm="glTF",ma=12,cm={JSON:1313821514,BIN:5130562},$h=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ma),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ma,r=new DataView(e,ma),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===cm.JSON){let c=new Uint8Array(e,ma+o,a);this.content=n.decode(c)}else if(l===cm.BIN){let c=ma+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Qh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Qh[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Jr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let g in d.attributes){let _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,on,f)})})}},Kh=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},jh=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Rc=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,M=1-m,v=p-f+h;for(let x=0;x!==a;x++){let P=o[_+x+a],A=o[_+x+l]*u,C=o[g+x+a],L=o[g+x]*u;r[x]=M*P+v*A+m*C+p*L}return r}},XM=new Tn,Jh=class extends Rc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return XM.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},um={9728:kt,9729:Ht,9984:Vl,9985:Wr,9986:Xs,9987:hi},hm={33071:gi,33648:Ur,10497:ai},Ah={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qM={CUBICSPLINE:void 0,LINEAR:zs,STEP:Bs},Rh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function YM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new vn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),i.DefaultMaterial}function er(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $M(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function ZM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KM(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ch(t.attributes):e=i.indices+":"+Ch(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ch(i.targets[n]);return e}function Ch(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ef(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var JM=new $e,tf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Yo(this.options.manager):this.textureLoader=new Jo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return er(r,a,s),ji(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load($i.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Ah[s.type],a=Jr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new xt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Ah[s.type],c=Jr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(d&&d!==h){let p=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(M);v||(_=new c(a,p*d,s.count*d/u),v=new ps(_,d/u),t.cache.add(M,v)),m=new yn(v,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new xt(_,l,g);if(s.sparse!==void 0){let p=Ah.SCALAR,M=Jr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,P=new M(o[1],v,s.sparse.count*p),A=new c(o[2],x,s.sparse.count*l);a!==null&&(m=new xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,L=P.length;C<L;C++){let b=P[C];if(m.setX(b,A[C*l]),l>=2&&m.setY(b,A[C*l+1]),l>=3&&m.setZ(b,A[C*l+2]),l>=4&&m.setW(b,A[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=um[f.magFilter]||Ht,u.minFilter=um[f.minFilter]||hi,u.wrapS=hm[f.wrapS]||ai,u.wrapT=hm[f.wrapT]||ai,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==kt&&u.minFilter!==Ht,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Wt(_);m.needsUpdate=!0,f(m)}),t.load($i.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ji(h,o),h.userData.mimeType=o.mimeType||jM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new kr,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Gi,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return vn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let h=s[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],on),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mt);let u=r.alphaMode||Rh.OPAQUE;if(u===Rh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Rh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Nt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Nt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Nt){let h=r.emissiveFactor;a.emissive=new Ue().setRGB(h[0],h[1],h[2],on)}return r.emissiveTexture!==void 0&&o!==Nt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ji(h,r),t.associations.set(h,{materials:e}),r.extensions&&er(s,h,r),h})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=KM(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=fm(new Tt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?YM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let _=u[d],m=o[d],p,M=c[d];if(m.mode===Kn.TRIANGLES||m.mode===Kn.TRIANGLE_STRIP||m.mode===Kn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Uo(_,M):new je(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Kn.TRIANGLE_STRIP?p.geometry=Th(p.geometry,ha):m.mode===Kn.TRIANGLE_FAN&&(p.geometry=Th(p.geometry,qr));else if(m.mode===Kn.LINES)p=new Bo(_,M);else if(m.mode===Kn.LINE_STRIP)p=new vi(_,M);else if(m.mode===Kn.LINE_LOOP)p=new zo(_,M);else if(m.mode===Kn.POINTS)p=new ko(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ZM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ji(p,r),m.extensions&&er(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&er(s,h[0],r),h[0];let f=new Dt;r.extensions&&er(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(Ys.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ci(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new $e;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Oo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,v=f.length;M<v;M++){let x=f[M],P=d[M],A=g[M],C=_[M],L=m[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let b=n._createAnimationTracks(x,P,A,C,L);if(b)for(let S=0;S<b.length;S++)p.push(b[S])}return new qo(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,JM)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Br:c.length>1?u=new Dt:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ji(u,r),r.extensions&&er(n,u,r),r.matrix!==void 0){let h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Dt;n.name&&(r.name=s.createUniqueName(n.name)),ji(r,n),n.extensions&&er(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof An||f instanceof Wt)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];bs[r.path]===bs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(bs[r.path]){case bs.weights:c=Mi;break;case bs.rotation:c=bi;break;case bs.position:case bs.scale:c=Si;break;default:switch(n.itemSize){case 1:c=Mi;break;case 2:case 3:default:c=Si;break}break}let u=s.interpolation!==void 0?qM[s.interpolation]:zs,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+bs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ef(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof bi?Jh:Rc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function QM(i,e,t){let n=e.attributes,s=new It;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let u=ef(Jr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,l=new R;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=ef(Jr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Qt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function fm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Qh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ct.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),ji(i,e),QM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?$M(i,e.targets,t):i})}var pm={type:"change"},sf={type:"start"},gm={type:"end"},Cc=new yi,mm=new rn,eb=Math.cos(70*Ys.DEG2RAD),$t=new R,Un=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nf=1e-6,Pc=class extends ta{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Tn,this._lastTargetPosition=new R,this._quat=new Tn().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gr,this._sphericalDelta=new Gr,this._scale=1,this._panOffset=new R,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new R,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nb.bind(this),this._onPointerDown=tb.bind(this),this._onPointerUp=ib.bind(this),this._onContextMenu=ub.bind(this),this._onMouseWheel=ob.bind(this),this._onKeyDown=ab.bind(this),this._onTouchStart=lb.bind(this),this._onTouchMove=cb.bind(this),this._onMouseDown=sb.bind(this),this._onMouseMove=rb.bind(this),this._interceptControlDown=hb.bind(this),this._interceptControlUp=fb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pm),this.update(),this.state=Mt.NONE}update(e=null){let t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=$t.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<eb?this.object.lookAt(this.target):(mm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(mm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nf||this._lastTargetPosition.distanceToSquared(this.target)>nf?(this.dispatchEvent(pm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$t.copy(s).sub(this.target);let r=$t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function tb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function nb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ib(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gm),this.state=Mt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Mt.DOLLY;break;case xs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}break;case xs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(sf)}function rb(i){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ob(i){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(i.preventDefault(),this.dispatchEvent(sf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gm))}function ab(i){this.enabled!==!1&&this._handleKeyDown(i)}function lb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Mt.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Mt.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(sf)}function cb(i){switch(this._trackPointer(i),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Mt.NONE}}function ub(i){this.enabled!==!1&&i.preventDefault()}function hb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ic=class extends Yn{constructor(){super();let e=new ds;e.deleteAttribute("uv");let t=new vn({side:ln}),n=new vn,s=new Vs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new je(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new je(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new je(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new je(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new je(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new je(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new je(e,Qr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new je(e,Qr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new je(e,Qr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new je(e,Qr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new je(e,Qr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new je(e,Qr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qr(i){let e=new Nt;return e.color.setScalar(i),e}var un=Uint8Array,Hn=Uint16Array,uf=Int32Array,hf=new un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ff=new un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_m=new un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Sm=function(i,e){for(var t=new Hn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new uf(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Em=Sm(hf,2),db=Em.b,of=Em.r;db[28]=258,of[258]=28;var wm=Sm(ff,0),y1=wm.b,xm=wm.r,af=new Hn(32768);for(dt=0;dt<32768;++dt)Ji=(dt&43690)>>1|(dt&21845)<<1,Ji=(Ji&52428)>>2|(Ji&13107)<<2,Ji=(Ji&61680)>>4|(Ji&3855)<<4,af[dt]=((Ji&65280)>>8|(Ji&255)<<8)>>1;var Ji,dt,xa=function(i,e,t){for(var n=i.length,s=0,r=new Hn(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new Hn(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Hn(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],h=o[i[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[af[h]>>l]=c}else for(a=new Hn(n),s=0;s<n;++s)i[s]&&(a[s]=af[o[i[s]-1]++]>>15-i[s]);return a},tr=new un(288);for(dt=0;dt<144;++dt)tr[dt]=8;var dt;for(dt=144;dt<256;++dt)tr[dt]=9;var dt;for(dt=256;dt<280;++dt)tr[dt]=7;var dt;for(dt=280;dt<288;++dt)tr[dt]=8;var dt,Dc=new un(32);for(dt=0;dt<32;++dt)Dc[dt]=5;var dt,pb=xa(tr,9,0);var mb=xa(Dc,5,0);var Tm=function(i){return(i+7)/8|0},Am=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new un(i.subarray(e,t))};var gb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Lc=function(i,e,t){var n=new Error(e||gb[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Lc),!t)throw n;return n};var Qi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},ga=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},rf=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return{t:Cm,l:0};if(s==1){var o=new un(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(P,A){return P.f-A.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=s-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=r[0].s,n=1;n<s;++n)r[n].s>f&&(f=r[n].s);var d=new Hn(f+1),g=lf(t[u-1],d,0);if(g>e){var n=0,_=0,m=g-e,p=1<<m;for(r.sort(function(A,C){return d[C.s]-d[A.s]||A.f-C.f});n<s;++n){var M=r[n].s;if(d[M]>e)_+=p-(1<<g-d[M]),d[M]=e;else break}for(_>>=m;_>0;){var v=r[n].s;d[v]<e?_-=1<<e-d[v]++-1:++n}for(;n>=0&&_;--n){var x=r[n].s;d[x]==e&&(--d[x],++_)}g=e}return{t:new un(d),l:g}},lf=function(i,e,t){return i.s==-1?Math.max(lf(i.l,e,t+1),lf(i.r,e,t+1)):e[i.s]=t},ym=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new Hn(++e),n=0,s=i[0],r=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[a]}return{c:t.subarray(0,n),n:e}},_a=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Rm=function(i,e,t){var n=t.length,s=Tm(e+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},vm=function(i,e,t,n,s,r,o,a,l,c,u){Qi(e,u++,t),++s[256];for(var h=rf(s,15),f=h.t,d=h.l,g=rf(r,15),_=g.t,m=g.l,p=ym(f),M=p.c,v=p.n,x=ym(_),P=x.c,A=x.n,C=new Hn(19),L=0;L<M.length;++L)++C[M[L]&31];for(var L=0;L<P.length;++L)++C[P[L]&31];for(var b=rf(C,7),S=b.t,N=b.l,Q=19;Q>4&&!S[_m[Q-1]];--Q);var U=c+5<<3,Y=_a(s,tr)+_a(r,Dc)+o,B=_a(s,f)+_a(r,_)+o+14+3*Q+_a(C,S)+2*C[16]+3*C[17]+7*C[18];if(l>=0&&U<=Y&&U<=B)return Rm(e,u,i.subarray(l,l+c));var V,ee,G,W;if(Qi(e,u,1+(B<Y)),u+=2,B<Y){V=xa(f,d,0),ee=f,G=xa(_,m,0),W=_;var le=xa(S,N,0);Qi(e,u,v-257),Qi(e,u+5,A-1),Qi(e,u+10,Q-4),u+=14;for(var L=0;L<Q;++L)Qi(e,u+3*L,S[_m[L]]);u+=3*Q;for(var ce=[M,P],xe=0;xe<2;++xe)for(var oe=ce[xe],L=0;L<oe.length;++L){var F=oe[L]&31;Qi(e,u,le[F]),u+=S[F],F>15&&(Qi(e,u,oe[L]>>5&127),u+=oe[L]>>12)}}else V=pb,ee=tr,G=mb,W=Dc;for(var L=0;L<a;++L){var J=n[L];if(J>255){var F=J>>18&31;ga(e,u,V[F+257]),u+=ee[F+257],F>7&&(Qi(e,u,J>>23&31),u+=hf[F]);var ue=J&31;ga(e,u,G[ue]),u+=W[ue],ue>3&&(ga(e,u,J>>5&8191),u+=ff[ue])}else ga(e,u,V[J]),u+=ee[J]}return ga(e,u,V[256]),u+ee[256]},_b=new uf([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Cm=new un(0),xb=function(i,e,t,n,s,r){var o=r.z||i.length,a=new un(n+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(n,a.length-s),c=r.l,u=(r.r||0)&7;if(e){u&&(l[0]=r.r>>3);for(var h=_b[e-1],f=h>>13,d=h&8191,g=(1<<t)-1,_=r.p||new Hn(32768),m=r.h||new Hn(g+1),p=Math.ceil(t/3),M=2*p,v=function(D){return(i[D]^i[D+1]<<p^i[D+2]<<M)&g},x=new uf(25e3),P=new Hn(288),A=new Hn(32),C=0,L=0,b=r.i||0,S=0,N=r.w||0,Q=0;b+2<o;++b){var U=v(b),Y=b&32767,B=m[U];if(_[Y]=B,m[U]=Y,N<=b){var V=o-b;if((C>7e3||S>24576)&&(V>423||!c)){u=vm(i,l,0,x,P,A,L,S,Q,b-Q,u),S=C=L=0,Q=b;for(var ee=0;ee<286;++ee)P[ee]=0;for(var ee=0;ee<30;++ee)A[ee]=0}var G=2,W=0,le=d,ce=Y-B&32767;if(V>2&&U==v(b-ce))for(var xe=Math.min(f,V)-1,oe=Math.min(32767,b),F=Math.min(258,V);ce<=oe&&--le&&Y!=B;){if(i[b+G]==i[b+G-ce]){for(var J=0;J<F&&i[b+J]==i[b+J-ce];++J);if(J>G){if(G=J,W=ce,J>xe)break;for(var ue=Math.min(ce,J-2),ie=0,ee=0;ee<ue;++ee){var ye=b-ce+ee&32767,ge=_[ye],Se=ye-ge&32767;Se>ie&&(ie=Se,B=ye)}}}Y=B,B=_[Y],ce+=Y-B&32767}if(W){x[S++]=268435456|of[G]<<18|xm[W];var Ze=of[G]&31,We=xm[W]&31;L+=hf[Ze]+ff[We],++P[257+Ze],++A[We],N=b+G,++C}else x[S++]=i[b],++P[i[b]]}}for(b=Math.max(b,N);b<o;++b)x[S++]=i[b],++P[i[b]];u=vm(i,l,c,x,P,A,L,S,Q,b-Q,u),c||(r.r=u&7|l[u/8|0]<<3,u-=7,r.h=m,r.p=_,r.i=b,r.w=N)}else{for(var b=r.w||0;b<o+c;b+=65535){var Je=b+65535;Je>=o&&(l[u/8|0]=c,Je=o),u=Rm(l,u+1,i.subarray(b,Je))}r.i=o}return Am(a,0,n+Tm(u)+s)},yb=function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i}(),vb=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=yb[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}};var Mb=function(i,e,t,n,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new un(r.length+i.length);o.set(r),o.set(i,r.length),i=o,s.w=r.length}return xb(i,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,s)},Pm=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t};var cn=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};function bb(i,e){return Mb(i,e||{},0,0)}var Im=function(i,e,t,n){for(var s in i){var r=i[s],o=e+s,a=n;Array.isArray(r)&&(a=Pm(n,r[1]),r=r[0]),r instanceof un?t[o]=[r,a]:(t[o+="/"]=[new un(0),a],Im(r,o,t,n))}},Mm=typeof TextEncoder<"u"&&new TextEncoder,Sb=typeof TextDecoder<"u"&&new TextDecoder,Eb=0;try{Sb.decode(Cm,{stream:!0}),Eb=1}catch{}function ya(i,e){if(e){for(var t=new un(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Mm)return Mm.encode(i);for(var s=i.length,r=new un(i.length+(i.length>>1)),o=0,a=function(u){r[o++]=u},n=0;n<s;++n){if(o+5>r.length){var l=new un(o+8+(s-n<<1));l.set(r),r=l}var c=i.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|i.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return Am(r,0,o)}var cf=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Lc(9),e+=n+4}return e},bm=function(i,e,t,n,s,r,o,a){var l=n.length,c=t.extra,u=a&&a.length,h=cf(c);cn(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r<0&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Lc(10),cn(i,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,r!=-1&&(cn(i,e,t.crc),cn(i,e+4,r<0?-r-2:r),cn(i,e+8,t.size)),cn(i,e+12,l),cn(i,e+14,h),e+=16,o!=null&&(cn(i,e,u),cn(i,e+6,t.attrs),cn(i,e+10,o),e+=14),i.set(n,e),e+=l,h)for(var g in c){var _=c[g],m=_.length;cn(i,e,+g),cn(i,e+2,m),i.set(_,e+4),e+=4+m}return u&&(i.set(a,e),e+=u),e},wb=function(i,e,t,n,s){cn(i,e,101010256),cn(i,e+8,t),cn(i,e+10,t),cn(i,e+12,n),cn(i,e+16,s)};function Dm(i,e){e||(e={});var t={},n=[];Im(i,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=ya(o),f=h.length,d=c.comment,g=d&&ya(d),_=g&&g.length,m=cf(c.extra);f>65535&&Lc(11);var p=u?bb(l,c):l,M=p.length,v=vb();v.p(l),n.push(Pm(c,{size:l.length,crc:v.d(),c:p,f:h,m:g,u:f!=o.length||g&&d.length!=_,o:s,compression:u})),s+=30+f+m+M,r+=76+2*(f+m)+(_||0)+M}for(var x=new un(r+22),P=s,A=r-s,C=0;C<n.length;++C){var h=n[C];bm(x,h.o,h,h.f,h.u,h.c.length);var L=30+h.f.length+cf(h.extra);x.set(h.c,h.o+L),bm(x,s,h,h.f,h.u,h.c.length,h.o,h.m),s+=16+L+(h.m?h.m.length:0)}return wb(x,s,n.length,A,P),x}var Nc=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,n,s){this.parseAsync(e,s).then(t).catch(n)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},t);let n={},s="model.usda";n[s]=null;let r=Nm();r+=Ab(t);let o={},a={};e.traverseVisible(c=>{if(c.isMesh){let u=c.geometry,h=c.material;if(h.isMeshStandardMaterial){let f="geometries/Geometry_"+u.id+".usda";if(!(f in n)){let d=Ib(u);n[f]=Cb(d)}h.uuid in o||(o[h.uuid]=h),r+=Pb(c,u,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(r+=kb(c))}),r+=Rb(),r+=Fb(o,a,t.quickLookCompatible),n[s]=ya(r),r=null;for(let c in a){let u=a[c];if(u.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");u=await this.textureUtils.decompress(u)}let h=Tb(u.image,u.flipY,t.maxTextureSize),f=await new Promise(d=>h.toBlob(d,"image/png",1));n[`textures/Texture_${c}.png`]=new Uint8Array(await f.arrayBuffer())}let l=0;for(let c in n){let u=n[c],h=34+c.length;l+=h;let f=l&63;if(f!==4){let d=64-f,g=new Uint8Array(d);n[c]=[u,{extra:{12345:g}}]}l=u.length}return Dm(n,{level:0})}};function Tb(i,e,t){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){let n=t/Math.max(i.width,i.height),s=document.createElement("canvas");s.width=i.width*Math.min(1,n),s.height=i.height*Math.min(1,n);let r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(i,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var bn=7;function Nm(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function Ab(i){return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{${i.includeAnchoringProperties===!0?`
		token preliminary:anchoring:type = "${i.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${i.ar.planeAnchoring.alignment}"
	`:""}
`}function Rb(){return`
		}
	}
}

`}function Cb(i){let e=Nm();return e+=i,ya(e)}function Pb(i,e,t){let n="Object_"+i.id,s=Om(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${s}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function Om(i){let e=i.elements;return`( ${Uc(e,0)}, ${Uc(e,4)}, ${Uc(e,8)}, ${Uc(e,12)} )`}function Uc(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function Ib(i){return`
def "Geometry"
{
${Db(i)}
}
`}function Db(i){let e="Geometry",t=i.attributes,n=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${Lb(i)}]
		int[] faceVertexIndices = [${Ub(i)}]
		normal3f[] normals = [${df(t.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${df(t.position,n)}]
${Ob(t)}
		uniform token subdivisionScheme = "none"
	}
`}function Lb(i){let e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function Ub(i){let e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)t.push(s)}return t.join(", ")}function df(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),o=i.getZ(n);t.push(`(${s.toPrecision(bn)}, ${r.toPrecision(bn)}, ${o.toPrecision(bn)})`)}return t.join(", ")}function Nb(i){let e=[];for(let t=0;t<i.count;t++){let n=i.getX(t),s=i.getY(t);e.push(`(${n.toPrecision(bn)}, ${1-s.toPrecision(bn)})`)}return e.join(", ")}function Ob(i){let e="";for(let n=0;n<4;n++){let s=n>0?n:"",r=i["uv"+s];r!==void 0&&(e+=`
		texCoord2f[] primvars:st${s} = [${Nb(r)}] (
			interpolation = "vertex"
		)`)}let t=i.color;if(t!==void 0){let n=t.count;e+=`
	color3f[] primvars:displayColor = [${df(t,n)}] (
		interpolation = "vertex"
		)`}return e}function Fb(i,e,t=!1){let n=[];for(let s in i){let r=i[s];n.push(Bb(r,e,t))}return`def "Materials"
{
${n.join("")}
}

`}function Bb(i,e,t=!1){let n="			",s=[],r=[];function o(a,l,c){let u=a.source.id+"_"+a.flipY;e[u]=a;let h=a.channel>0?"st"+a.channel:"st",f={1e3:"repeat",1001:"clamp",1002:"mirror"},d=a.repeat.clone(),g=a.offset.clone(),_=a.rotation,m=Math.sin(_),p=Math.cos(_);return g.y=1-g.y-d.y,t?(g.x=g.x/d.x,g.y=g.y/d.y,g.x+=m/d.x,g.y+=p-1):(g.x+=m*d.x,g.y+=(1-p)*d.y),`
		def Shader "PrimvarReader_${l}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${h}"
			float2 outputs:result
		}

		def Shader "Transform2d_${l}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${i.id}/PrimvarReader_${l}.outputs:result>
			float inputs:rotation = ${(_*(180/Math.PI)).toFixed(bn)}
			float2 inputs:scale = ${Um(d)}
			float2 inputs:translation = ${Um(g)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+zb(c):""}
			token inputs:sourceColorSpace = "${a.colorSpace===fi?"raw":"sRGB"}"
			token inputs:wrapS = "${f[a.wrapS]}"
			token inputs:wrapT = "${f[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${i.transparent||i.alphaTest>0?"float outputs:a":""}
		}`}return i.side===mt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i),i.map!==null?(s.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),s.push(`${n}float inputs:opacityThreshold = ${i.alphaTest}`)),r.push(o(i.map,"diffuse",i.color))):s.push(`${n}color3f inputs:diffuseColor = ${Lm(i.color)}`),i.emissiveMap!==null?(s.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`),r.push(o(i.emissiveMap,"emissive",new Ue(i.emissive.r*i.emissiveIntensity,i.emissive.g*i.emissiveIntensity,i.emissive.b*i.emissiveIntensity)))):i.emissive.getHex()>0&&s.push(`${n}color3f inputs:emissiveColor = ${Lm(i.emissive)}`),i.normalMap!==null&&(s.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),r.push(o(i.normalMap,"normal"))),i.aoMap!==null&&(s.push(`${n}float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`),r.push(o(i.aoMap,"occlusion",new Ue(i.aoMapIntensity,i.aoMapIntensity,i.aoMapIntensity)))),i.roughnessMap!==null?(s.push(`${n}float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`),r.push(o(i.roughnessMap,"roughness",new Ue(i.roughness,i.roughness,i.roughness)))):s.push(`${n}float inputs:roughness = ${i.roughness}`),i.metalnessMap!==null?(s.push(`${n}float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`),r.push(o(i.metalnessMap,"metallic",new Ue(i.metalness,i.metalness,i.metalness)))):s.push(`${n}float inputs:metallic = ${i.metalness}`),i.alphaMap!==null?(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),s.push(`${n}float inputs:opacityThreshold = 0.0001`),r.push(o(i.alphaMap,"opacity"))):s.push(`${n}float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial&&(i.clearcoatMap!==null?(s.push(`${n}float inputs:clearcoat.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatMap.id}_clearcoat.outputs:r>`),r.push(o(i.clearcoatMap,"clearcoat",new Ue(i.clearcoat,i.clearcoat,i.clearcoat)))):s.push(`${n}float inputs:clearcoat = ${i.clearcoat}`),i.clearcoatRoughnessMap!==null?(s.push(`${n}float inputs:clearcoatRoughness.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),r.push(o(i.clearcoatRoughnessMap,"clearcoatRoughness",new Ue(i.clearcoatRoughness,i.clearcoatRoughness,i.clearcoatRoughness)))):s.push(`${n}float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`),s.push(`${n}float inputs:ior = ${i.ior}`)),`
	def Material "Material_${i.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${s.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${i.id}/PreviewSurface.outputs:surface>

${r.join(`
`)}

	}
`}function Lm(i){return`(${i.r}, ${i.g}, ${i.b})`}function zb(i){return`(${i.r}, ${i.g}, ${i.b}, 1.0)`}function Um(i){return`(${i.x}, ${i.y})`}function kb(i){let e=i.name?i.name:"Camera_"+i.id,t=Om(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),i.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(bn)}, ${i.far.toPrecision(bn)})
			float horizontalAperture = ${((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(bn)}
			float verticalAperture = ${((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(bn)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(bn)}, ${i.far.toPrecision(bn)})
			float focalLength = ${i.getFocalLength().toPrecision(bn)}
			float focusDistance = ${i.focus.toPrecision(bn)}
			float horizontalAperture = ${i.getFilmWidth().toPrecision(bn)}
			token projection = "perspective"
			float verticalAperture = ${i.getFilmHeight().toPrecision(bn)}
		}
	
	`}var Bm="blueprints.materialMode",Oc="solid",va="realistic",Hb={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_naturheld_flex_50:[35,175,15],slope_battens:[160,100,30],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_naturheld_flex_50:[35,175,15],soffit_battens:[160,100,30],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100]},Vb={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,slope_naturheld_flex_50:7,soffit_naturheld_flex_50:7,slope_battens:8,soffit_battens:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,bass_wall_hanger:9,racking_strap:9,wall_plate:9,plenum_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14},Gb=15e-6,Wb=1;function mf(i,e=0){if(i.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(i.userData.layerDepthBias=t,!(t>0))return;i.userData.layerDepthPatched=!0;let n=i.onBeforeCompile?.bind(i),s=i.customProgramCacheKey?.bind(i),r=Gb.toExponential(8);i.onBeforeCompile=(o,a)=>{n?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if defined( USE_LOGDEPTHBUF )
	{
		float bpFaceBias = ${t}.0 * ${r};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},i.customProgramCacheKey=()=>`${s?s():i.type}|bpLayerDepth-r${Wb}-${t}`,i.needsUpdate=!0}var Xb=[];function zm(i,e,t){let n=new Set(i),s=Array.isArray(e)&&e.length?e:Xb,r=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!n.has(u))continue;n.delete(u),c.push({type:"leaf",id:u,label:r(u)});continue}let h=o(u.children||[]);h.length&&c.push({type:"group",id:u.id,label:r(u.id),children:h})}return c}let a=o(s);if(n.size){let l=[...n].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:r(c)}));a.push({type:"group",id:"other",label:r("other"),children:l})}return a}function km(i,e){if(!i||typeof i!="object")return{};let t=new Map;for(let s of e)s.type==="group"&&t.set(s.id,Fc(s));let n={};for(let[s,r]of Object.entries(i)){let o=t.get(s);if(o&&o.length)for(let a of o)n[a]=r;else n[s]=r}return n}function Fc(i){if(i.type==="leaf")return[i.id];let e=[];for(let t of i.children)e.push(...Fc(t));return e}function qb(i,e,t="transparent"){if(t==="none")return;let n=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let s of i.children||[]){if(!s?.userData?.isEdgeOverlay||!s.material)continue;let r=Array.isArray(s.material)?s.material:[s.material];for(let o of r)o&&(n<1?(o.transparent=!0,o.opacity=n,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Ss(i,e,t={}){let n=Math.max(0,Math.min(1,Number(e)||0)),s=t.edgeMode??"transparent";for(let r of i){if(!r)continue;if(n<=0){r.visible=!1;continue}if(r.visible=!0,!r.isMesh)continue;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a&&(n<1?(a.transparent=!0,a.opacity=n,a.depthWrite=!1,a.depthTest=!0,a.side=mt,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=mt,a.forceSinglePass=!1,a.blending=oi,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof r.userData.opaqueRenderOrder!="number"&&(r.userData.opaqueRenderOrder=r.renderOrder||0),r.renderOrder=n<1?0:r.userData.opaqueRenderOrder,qb(r,n,s);for(let a of r.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=r.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=n,c.transparent=n<1,c.depthWrite=n>=1,c.depthTest=!0,c.forceSinglePass=n<1,c.side=mt,c.needsUpdate=!0)}}}var Yb={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_flex_50:{color:[35,175,15],roughness:.92,metalness:0,map:"wool"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_battens:{color:[160,100,30],roughness:.55,metalness:0,map:"wood"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_naturheld_flex_50:{color:[35,175,15],roughness:.92,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_battens:{color:[160,100,30],roughness:.55,metalness:0,map:"wood"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"}},pf=new Map;function $b(i){if(!i||i==="none")return null;let e=pf.get(i);if(e)return e;let t=128,n=document.createElement("canvas");n.width=t,n.height=t;let s=n.getContext("2d");if(!s)return null;if(i==="wood"){s.fillStyle="#c49858",s.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;s.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,s.lineWidth=1.2,s.beginPath(),s.moveTo(0,o+a*.15),s.lineTo(t,o-a*.1),s.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;s.fillStyle="rgba(70, 40, 15, 0.22)",s.fillRect(a,l,2,7+o%5)}}else if(i==="foam"){s.fillStyle="#9ed468",s.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;s.beginPath(),s.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),s.fillStyle="rgba(255,255,255,0.55)",s.fill(),s.strokeStyle="rgba(40,90,30,0.35)",s.stroke()}}else if(i==="plaster"){let o=s.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}s.putImageData(o,0,0)}else if(i==="wool"){s.fillStyle="#88c860",s.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;s.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",s.fillRect(a,l,1+o%2,2+o%3)}}else if(i==="metal"){let o=s.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),s.fillStyle=o,s.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)s.fillStyle="rgba(255,255,255,0.22)",s.fillRect(0,a,t,2),s.fillStyle="rgba(0,0,0,0.28)",s.fillRect(0,a+4,t,2)}else if(i==="masonry"){s.fillStyle="#b88868",s.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;s.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,s.fillRect(h+1,f+1,a-2,o-2),s.strokeStyle="rgba(70,45,30,0.55)",s.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let r=new Wi(n);return r.colorSpace=ft,r.wrapS=ai,r.wrapT=ai,r.repeat.set(2.5,2.5),r.needsUpdate=!0,pf.set(i,r),r}function Fm(i){return new Ue(i[0]/255,i[1]/255,i[2]/255)}function Zb(i){return Hb[i]||[160,160,160]}function Kb(i,e,t=0){i.side=mt,t>0?(i.polygonOffset=!0,i.polygonOffsetFactor=-t,i.polygonOffsetUnits=-t*2):(i.polygonOffset=!1,i.polygonOffsetFactor=0,i.polygonOffsetUnits=0),e?(i.clippingPlanes=e,i.clipIntersection=!1):i.clippingPlanes=[],mf(i,t),i.needsUpdate=!0}function Hm(i){i.computeBoundingBox();let e=i.boundingBox,t=new R;e.getSize(t);let n=Math.max(t.x,1e-6),s=Math.max(t.y,1e-6),r=Math.max(t.z,1e-6),o=Math.max(n,s,r);i.getAttribute("normal")||i.computeVertexNormals();let a=i.getAttribute("position"),l=i.getAttribute("normal");if(!a)return o;let c=i.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new R;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(l.getX(f)),g=Math.abs(l.getY(f)),_=Math.abs(l.getZ(f)),m,p;g>=d&&g>=_?(m=(h.x-e.min.x)/n,p=(h.z-e.min.z)/r):d>=_?(m=(h.z-e.min.z)/r,p=(h.y-e.min.y)/s):(m=(h.x-e.min.x)/n,p=(h.y-e.min.y)/s),u[f*2]=m,u[f*2+1]=p}return i.setAttribute("uv",new xt(u,2)),o}function jb(i,e){let t=$b(i);if(!t)return null;let n=t.clone();n.needsUpdate=!0;let s=Math.max(1.2,Math.min(12,e/400));return n.repeat.set(s,s),n}function Vm(i,e,t={}){let n=t.clippingPlanes??null,s=e===va,r=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of i){let c=Zb(a),u=Vb[a]??0,h=1e3;if(s)for(let p of l)p.isMesh&&p.geometry&&(h=Math.max(h,Hm(p.geometry)));let f=1,d;if(s){let p=Yb[a]||{color:c,roughness:.7,metalness:0,map:"none"};f=typeof p.opacity=="number"?p.opacity:1;let M=Fm(p.color),v=jb(p.map||"none",h);p.clearcoat?d=new en({color:M,map:v,roughness:p.roughness,metalness:p.metalness,clearcoat:p.clearcoat,clearcoatRoughness:p.clearcoatRoughness??.3,envMapIntensity:.85}):d=new vn({color:M,map:v,roughness:p.roughness,metalness:p.metalness,envMapIntensity:p.metalness>.05?1.1:.55})}else d=new Nt({color:Fm(c)});Kb(d,n,u),d.userData.presetOpacity=f;let g=new Set;for(let p of l){if(!p.isMesh)continue;let M=p.material;if(M){let v=Array.isArray(M)?M:[M];for(let x of v)g.add(x)}p.material=d,p.userData.opaqueRenderOrder=u,p.renderOrder=u}for(let p of g)p!==d&&(p.map&&[...pf.values()].includes(p.map)?p.map=null:p.map&&(p.map.dispose?.(),p.map=null),p.dispose?.());let _=1;r&&(r instanceof Map?_=r.has(a)?r.get(a):1:typeof r[a]=="number"&&(_=r[a]));let m=Math.max(0,Math.min(1,f*(Number(_)||0)));Ss(l,m,{edgeMode:o})}}function Gm(i,e){let n=(Array.isArray(i)?i:[i]).map(s=>{if(!s)return new vn({color:13421772,roughness:.65,metalness:0,side:Dn});let r=s.color?s.color.clone():new Ue(13421772),o=typeof s.roughness=="number"?s.roughness:.65,a=typeof s.metalness=="number"?s.metalness:0,l=null;s.map&&e&&(Hm(e),l=s.map.clone(),l.needsUpdate=!0);let c=new vn({color:r,map:l,roughness:o,metalness:a,side:Dn,transparent:!!s.transparent,opacity:typeof s.opacity=="number"?s.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(i)?n:n[0]}function Wm(){try{let i=localStorage.getItem(Bm);if(i===va||i===Oc)return i}catch{}return Oc}function Xm(i){try{localStorage.setItem(Bm,i)}catch{}}var Ti=1e-5,qm=new WeakMap;function Vn(i,e,t,n){let s=t/(t-n);return i.clone().lerp(e,s)}function Jb(i,e,t){let[n,s,r]=i,o=e.distanceToPoint(n),a=e.distanceToPoint(s),l=e.distanceToPoint(r),c=o>=-Ti,u=a>=-Ti,h=l>=-Ti,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([n,s,r]);return}if(f===0)return;let d=[n,s,r],g=[o,a,l],_=[c,u,h];if(f===1){let v=_.findIndex(Boolean),x=(v+1)%3,P=(v+2)%3,A=d[v],C=Vn(d[v],d[x],g[v],g[x]),L=Vn(d[v],d[P],g[v],g[P]);t.push([A,C,L]);return}let m=_.findIndex(v=>!v),p=(m+1)%3,M=(m+2)%3;if(_[p]){let v=d[p],x=d[M],P=Vn(d[m],d[p],g[m],g[p]),A=Vn(d[m],d[M],g[m],g[M]);t.push([v,x,P]),t.push([x,A,P])}else{let v=d[M],x=Vn(d[m],d[p],g[m],g[p]),P=Vn(d[m],d[M],g[m],g[M]);t.push([v,x,P])}}function Qb(i,e){let[t,n,s]=i,r=e.distanceToPoint(t),o=e.distanceToPoint(n),a=e.distanceToPoint(s),l=r>=-Ti,c=o>=-Ti,u=a>=-Ti,h=(l?1:0)+(c?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,n,s],d=[r,o,a],g=[l,c,u];if(h===1){let M=g.findIndex(Boolean),v=(M+1)%3,x=(M+2)%3;return[Vn(f[M],f[v],d[M],d[v]),Vn(f[M],f[x],d[M],d[x])]}let _=g.findIndex(M=>!M),m=(_+1)%3,p=(_+2)%3;return g[m]?[Vn(f[_],f[m],d[_],d[m]),Vn(f[_],f[p],d[_],d[p])]:[Vn(f[_],f[m],d[_],d[m]),Vn(f[_],f[p],d[_],d[p])]}function eS(i,e,t){let n=i.clone(),s=e.clone();for(let r of t){let o=r.distanceToPoint(n),a=r.distanceToPoint(s),l=o>=-Ti,c=a>=-Ti;if(l&&c)continue;if(!l&&!c)return null;let u=Vn(n,s,o,a);l?s=u:n=u}return n.distanceToSquared(s)<Ti*Ti?null:[n,s]}function tS(i,e){let t=i;for(let n of e){let s=[];for(let r of t)Jb(r,n,s);if(t=s,t.length===0)break}return t}function nS(i,e){let t=i.getAttribute("position");if(!t)return[];let n=new R,s=[],r=i.getIndex();function o(a,l,c){s.push([n.fromBufferAttribute(t,a).applyMatrix4(e).clone(),n.fromBufferAttribute(t,l).applyMatrix4(e).clone(),n.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(r)for(let a=0;a<r.count;a+=3)o(r.getX(a),r.getX(a+1),r.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return s}function iS(i){let e=i.getAttribute("position");if(!e)return[];let t=new R,n=[],s=i.getIndex();function r(o,a,l){n.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(s)for(let o=0;o<s.count;o+=3)r(s.getX(o),s.getX(o+1),s.getX(o+2));else for(let o=0;o<e.count;o+=3)r(o,o+1,o+2);return n}var nr=1e-6,sS=2e-4,Ym=new WeakMap;function rS(i){let e="";for(let t of i)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function $m(i){let e=t=>Math.round(t/nr);return`${e(i.x)},${e(i.y)},${e(i.z)}`}function jm(i,e){let t=rS(e),n=Ym.get(i);if(n&&n.key===t)return n;let s=[],r=[],o=qm.get(i);if(o||(o=iS(i),qm.set(i,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((f,d)=>d!==l),h=[];for(let f of o){let d=Qb(f,c);if(!d)continue;let g=u.length?eS(d[0],d[1],u):d;g&&(h.push(g),s.push(g[0].x,g[0].y,g[0].z,g[1].x,g[1].y,g[1].z))}r.push(h)}let a={key:t,segments:new Float32Array(s),perPlane:r};return Ym.set(i,a),a}function oS(i){let e=new Map,t=[],n=new Map;for(let[o,a]of i){let l=$m(o),c=$m(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1}),n.has(l)||n.set(l,[]),n.has(c)||n.set(c,[]),n.get(l).push(u),n.get(c).push(u)}function s(o,a){let l=n.get(o)||[],c=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of l){if(t[d].used)continue;if(!f)return d;let g=t[d],_=g.a===o?g.b:g.a,m=e.get(_),p=h.x-f.x,M=h.y-f.y,v=h.z-f.z,x=m.x-h.x,P=m.y-h.y,A=m.z-h.z,C=p*x+M*P+v*A;C>u&&(u=C,c=d)}return c}let r=[];for(let o=0;o<t.length;o++){if(t[o].used)continue;let a=[],l=[],c=o,u=t[c].a,h=u,f=null,d=!1,g=t.length+2;for(let _=0;_<g;_++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let m=t[c].a===u?t[c].b:t[c].a;if(m===h){d=!0;break}let p=s(m,u);if(p<0)break;f=u,u=m,c=p}d&&a.length>=3&&r.push(a)}return r}function aS(i){let e=i.clone().normalize(),t=Math.abs(e.x)<.9?new R(1,0,0):new R(0,1,0),n=new R().crossVectors(t,e).normalize(),s=new R().crossVectors(e,n).normalize();return{u:n,v:s,n:e}}function lS(i,e,t,n){return i.map(s=>{let r=s.clone().sub(e);return{x:r.dot(t),y:r.dot(n),p3:s}})}function cS(i){let e=0;for(let t=0;t<i.length;t++){let n=(t+1)%i.length;e+=i[t].x*i[n].y-i[n].x*i[t].y}return e*.5}function uS(i){return cS(i)<0&&i.reverse(),i}function Zm(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s].y,a=t[r].y,l=t[s].x,c=t[r].x;o>e!=a>e&&i<(c-l)*(e-o)/(a-o+0)+l&&(n=!n)}return n}function es(i,e,t){return(e.x-i.x)*(t.y-i.y)-(e.y-i.y)*(t.x-i.x)}function hS(i,e,t,n){let s=es(i,e,t),r=es(i,e,n),o=es(t,n,i),a=es(t,n,e);return s*r<0&&o*a<0}function Km(i,e,t,n){let s=t.length;for(let r=0;r<s;r++){let o=(r+1)%s;if(!(n>=0&&(r===n||o===n))&&hS(i,e,t[r],t[o]))return!0}return!1}function fS(i,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let n=e[t],s=-1,r=1/0,o=i.length;for(let f=0;f<o;f++){let d=i[f],g=i[(f+1)%o];if(d.y>n.y==g.y>n.y)continue;let _=g.y-d.y;if(Math.abs(_)<1e-15)continue;let m=(n.y-d.y)/_;if(m<-1e-8||m>1+1e-8)continue;let p=d.x+m*(g.x-d.x);p>=n.x-1e-8&&p<r&&(r=p,s=f)}let a=[];s>=0&&a.push(s,(s+1)%o);let l=0,c=1/0;for(let f=0;f<o;f++){let d=(i[f].x-n.x)**2+(i[f].y-n.y)**2;d<c&&(c=d,l=f)}a.push(l);let u=-1;for(let f of a)if(!Km(n,i[f],i,f)&&!Km(n,i[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(i[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(i[f])}return h}function gf(i,e){return(i.x-e.x)**2+(i.y-e.y)**2<=nr*nr}function dS(i,e,t,n){if(gf(i,e)||gf(i,t)||gf(i,n))return!1;let s=es(e,t,i),r=es(t,n,i),o=es(n,e,i),a=s<-1e-14||r<-1e-14||o<-1e-14,l=s>1e-14||r>1e-14||o>1e-14;return!(a&&l)}function pS(i){let e=[];for(let s of i){let r=e[e.length-1];r&&(r.x-s.x)**2+(r.y-s.y)**2<nr*nr||e.push(s)}if(e.length>=2){let s=e[0],r=e[e.length-1];(s.x-r.x)**2+(s.y-r.y)**2<nr*nr&&e.pop()}let t=[],n=e.length*e.length+8;for(;e.length>3&&n-- >0;){let s=!1,r=e.length;for(let o=0;o<r;o++){let a=(o+r-1)%r,l=(o+1)%r,c=e[a],u=e[o],h=e[l],f=es(c,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),s=!0;break}let d=!1;for(let g=0;g<r;g++)if(!(g===o||g===a||g===l)&&dS(e[g],c,u,h)){d=!0;break}if(!d){t.push([c.p3,u.p3,h.p3]),e.splice(o,1),s=!0;break}}if(!s)break}return e.length===3&&es(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function mS(i,e,t){if(!i.length)return[];let{u:n,v:s,n:r}=aS(e.normal),o=i[0][0],a=i.map(u=>uS(lS(u,o,n,s))),l=a.map((u,h)=>{let f=u[0],d=0;for(let g=0;g<a.length;g++)g!==h&&Zm(f.x,f.y,a[g])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!Zm(a[d][0].x,a[d][0].y,h))continue;let g=fS(h,a[d]);g&&(h=g)}let f=pS(h);for(let d of f)c.push(d.map(g=>g.clone().addScaledVector(r,t)))}return c}function Jm(i,e){return!i||!e?.length?[]:jm(i,e).perPlane}function Qm(i,e,t=0){if(!i?.length||!e)return new Float32Array(0);let n=oS(i),s=mS(n,e,sS+Math.max(0,t));if(!s.length)return new Float32Array(0);let r=new Float32Array(s.length*9),o=0;for(let[a,l,c]of s)r[o++]=a.x,r[o++]=a.y,r[o++]=a.z,r[o++]=l.x,r[o++]=l.y,r[o++]=l.z,r[o++]=c.x,r[o++]=c.y,r[o++]=c.z;return r}function eg(i,e){return!i||!e?.length?new Float32Array(0):jm(i,e).segments}function Bc(i,e){if(!i?.length)return[];let t=new $e().copy(e).invert();return i.map(n=>n.clone().applyMatrix4(t))}function gS(i){let e=new Float32Array(i.length*9),t=0;for(let[s,r,o]of i)e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let n=new Tt;return n.setAttribute("position",new xt(e,3)),n.computeVertexNormals(),n}function tg(i,e){if(!i.visible||!i.geometry)return null;let t=nS(i.geometry,i.matrixWorld);if(t.length===0)return null;let n=e.length?tS(t,e):t;if(n.length===0)return null;let s=gS(n),r=Gm(i.material,s),o=new je(s,r);return o.name=i.name,o}var _S=5e-5;function kc(i){return!!(i&&i.userData&&i.userData.isSectionCap)}function _f(i){return i?Array.isArray(i)?i[0]||null:i:null}function ig(i,e){let t;return i.isMeshPhysicalMaterial?t=new en:i.isMeshStandardMaterial?t=new vn:t=new Nt,i.color&&t.color&&t.color.copy(i.color),i.map&&"map"in t&&(t.map=i.map),typeof i.roughness=="number"&&"roughness"in t&&(t.roughness=i.roughness),typeof i.metalness=="number"&&"metalness"in t&&(t.metalness=i.metalness),typeof i.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=i.clearcoat,t.clearcoatRoughness=i.clearcoatRoughness??.3),typeof i.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=i.envMapIntensity),t.opacity=typeof i.opacity=="number"?i.opacity:1,t.transparent=!!i.transparent,t.depthWrite=i.depthWrite!==!1,t.depthTest=i.depthTest!==!1,t.side=mt,t.forceSinglePass=!!i.forceSinglePass,t.toneMapped=i.toneMapped!==!1,t.polygonOffset=!!i.polygonOffset,t.polygonOffsetFactor=i.polygonOffsetFactor||0,t.polygonOffsetUnits=i.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,mf(t,i.userData?.layerDepthBias||0),t.needsUpdate=!0,t}function zc(i){i.parent?.remove(i),i.geometry?.dispose?.();let e=i.material,t=Array.isArray(e)?e:[e];for(let n of t)n&&(n.map=null),n?.dispose?.()}function xS(i){let e="";for(let t of i)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function yS(i,e){if(!i)return null;for(let t of i.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function sg(i,e){let t=new Set;for(let n of i){let s=n.parent;if(!s||t.has(s))continue;t.add(s);let r=yS(s,e);if(r)return r}return null}function ng(i,e,t){i.visible=!0;for(let n of i.children){if(!n.isMesh)continue;let s=_f(n.material);s&&(e.color&&s.color&&s.color.copy(e.color),s.opacity=typeof e.opacity=="number"?e.opacity:1,s.transparent=!!e.transparent,s.depthWrite=e.depthWrite!==!1,s.depthTest=e.depthTest!==!1,s.forceSinglePass=!!e.forceSinglePass,s.side=mt,s.needsUpdate=!0,n.visible=!0,n.renderOrder=t)}}function vS(i,e,t,n){let s=e.filter(d=>d?.isMesh&&d.visible&&!kc(d)&&d.geometry),r=sg(e,i);if(!s.length||!t.length){r&&zc(r);return}let o=s[0],a=o.parent;if(!a)return;r&&r.parent!==a&&zc(r);let l=r&&r.parent===a?r:new Dt;for(let d of[...l.children])zc(d);l.parent||(l.name=`${i}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=i,a.add(l));let c=_f(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new $e().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of s){d.updateWorldMatrix(!0,!1);let g=Bc(t,d.matrixWorld),_=Jm(d.geometry,g);for(let m=0;m<t.length;m++){let p=_[m]||[];for(let[M,v]of p)f[m].push([M.clone().applyMatrix4(d.matrixWorld),v.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let g=Qm(f[d],t[d],h*_S);if(g.length<9)continue;for(let M=0;M<g.length;M+=3){let v=new R(g[M],g[M+1],g[M+2]).applyMatrix4(u);g[M]=v.x,g[M+1]=v.y,g[M+2]=v.z}let _=new Tt;_.setAttribute("position",new xt(g,3)),_.computeVertexNormals();let m=t.filter((M,v)=>v!==d),p=new je(_,ig(c,m));p.name=`${i}__cap${d}`,p.userData.isSectionCap=!0,p.userData.capPlaneIndex=d,p.userData.capLabel=i,p.renderOrder=o.renderOrder,p.raycast=()=>{},l.add(p)}l.userData.bpCapSig=n,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function xf(i,e){let t=e||[],n=xS(t);for(let[s,r]of i){let o=(r||[]).filter(u=>u&&!kc(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=sg(o,s);if(!t.length||!a.length){l&&zc(l);continue}let c=_f(a[0].material);if(l&&l.userData.bpCapSig===n&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){ng(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===n&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((_,m)=>m!==f):t;u.material=ig(c,d);let g=Array.isArray(h)?h:[h];for(let _ of g)_&&(_.map=null),_?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,ng(l,c,a[0].renderOrder||0);continue}vS(s,o,t,n)}}var MS=2,bS=.45,rg=.015;function yf(i){let e=new It().setFromObject(i);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:rg};let t=new R;e.getSize(t);let n=Math.max(t.x,t.y,t.z,1e-9),s=n>MS?bS/n:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:n,scale:s,liftM:rg}}function og(i,e=yf(i)){let{cx:t,cz:n,minY:s,scale:r,liftM:o}=e;return i.position.set(-t*r,-s*r+o,-n*r),i.scale.setScalar(r),i.updateMatrixWorld(!0),e}var SS=`
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
`,ag=!1;function ES(){if(ag)return;ag=!0;let i=document.createElement("style");i.id="bp-viewer-chrome",i.textContent=SS,document.head.appendChild(i)}function lg(i){ES();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),n=document.getElementById("sheet-scroll"),s=window.matchMedia("(min-width: 768px)"),r=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return s.matches}function c(){return a}function u(){for(let j of o)j(a)}function h(j){o.push(j),j(a)}function f(){if(!e||!n)return;let j=document.getElementById("section-view"),T=document.getElementById("section-cuts"),y=t?.offsetHeight||22,I=16,k=0;if(j&&(k+=j.offsetHeight),T){let he=T.querySelector(".sheet-title"),de=T.querySelector(".cut-row");k+=32,he&&(k+=he.offsetHeight+8),de?k+=de.offsetHeight:k+=T.offsetHeight}let K=y+k+I,Z=window.innerHeight||640,pe=Math.round(Z*.28),ae=Math.round(Z*.45),z=Math.max(pe,Math.min(ae,Math.round(K)));return e.style.setProperty("--sheet-partial-h",`${z}px`),z}function d(){f(),!l()&&a==="partial"&&u()}function g(j){let T=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${j}`).trim(),y=parseFloat(T);return Number.isFinite(y)?y:0}function _(){let j={top:0,right:0,bottom:0,left:0};if(!e)return j;if(l()){if(a!=="open")return j;let y=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(y)),bottom:0,left:0}}if(a!=="partial")return j;let T=Math.round(F()+g("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,T)),left:0}}function m(j,T={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(j)||(j=l()?"open":"peek"),a=j,e.dataset.detent=j,e.classList.toggle("sheet-open",j!=="peek"&&j!=="closed"),document.body.classList.toggle("sheet-open",j!=="peek"&&j!=="closed"),x(),T.silent||u()}function p(){l()?m("open"):m("peek"),f()}let M=document.getElementById("top-chrome"),v=document.getElementById("sheet-toggle");if(!v&&M){let j=M.querySelector(".top-chrome-end");j||(j=document.createElement("div"),j.className="top-chrome-end",M.append(j)),v=document.createElement("button"),v.type="button",v.id="sheet-toggle",v.className="chrome-btn sheet-toggle",j.append(v)}function x(){if(!v)return;let j=a==="open";v.setAttribute("aria-expanded",j?"true":"false"),v.setAttribute("aria-label",j?"Hide controls":"Show controls"),v.title=j?"Hide controls":"Show controls",v.textContent=j?"\u203A":"\u2039"}v?.addEventListener("click",()=>{l()&&m(a==="open"?"closed":"open")});let P=!1,A=null,C=!1,L=!1,b=0,S=0,N=0,Q=0,U="peek",Y=0,B=0,V=0,ee=0,G=0,W=null,le=12,ce=28,xe='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function oe(){return Math.max(t?.offsetHeight||34,34)+8}function F(){return f()||window.innerHeight*.38}function J(){let j=window.innerHeight||640;return Math.min(j*.92,j-72)}function ue(){return e?.offsetWidth||0}function ie(j){return j instanceof Element?!!j.closest(xe):!1}function ye(){if(l()){m(a==="open"?"closed":"open");return}m(a==="peek"?"partial":a==="partial"?"full":"peek")}function ge(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Se(j,T,y){if(e){P=!0,C=!1,A=T,L=!1,U=a,b=j.clientY,S=j.clientX,Y=b,B=S,V=performance.now(),ee=0,G=0,Q=y,W=j.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${Q}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(j.pointerId)}catch{}}}function Ze(j){if(!(!e||!t)&&!(j.target!==t&&!t.contains(j.target)&&j.target!==e)){P=!0,C=!1,A="narrow",L=!1,U=a,e.classList.add("is-dragging"),b=j.clientY,S=j.clientX,Y=b,B=S,V=performance.now(),ee=0,G=0,N=e.getBoundingClientRect().height,W=j.pointerId;try{t.setPointerCapture(j.pointerId)}catch{}j.preventDefault()}}function We(j){if(!e||j.pointerType==="mouse"&&j.button!==0||j.target instanceof Element&&j.target.closest(".chrome-btn"))return;let T=ue();if(a==="closed"){let y=window.innerWidth-ce-g("r");if(j.clientX<y)return;Se(j,"wide-open",T),j.preventDefault();return}e.contains(j.target)&&(ie(j.target)||(P=!0,C=!0,A="wide-close",L=!1,U=a,b=j.clientY,S=j.clientX,Y=b,B=S,V=performance.now(),ee=0,G=0,Q=0,W=j.pointerId))}function Je(j){l()?We(j):Ze(j)}function D(j){if(!P||!e||W!=null&&j.pointerId!==W)return;let T=performance.now(),y=Math.max(1,T-V),I=Math.hypot(j.clientX-S,j.clientY-b);if(C){if(I<=le)return;let pe=j.clientX-S,ae=j.clientY-b;if(Math.abs(pe)<Math.abs(ae)*1.15||pe<=0){P=!1,C=!1,A=null,W=null;return}C=!1,L=!0,e.classList.add("is-dragging"),n&&(n.style.overflow="hidden");try{e.setPointerCapture(j.pointerId)}catch{}j.preventDefault()}if(I>le&&(L=!0),A==="narrow"){let pe=b-j.clientY;ee=(Y-j.clientY)/y*1e3,Y=j.clientY,V=T;let ae=oe(),z=J(),he=Math.max(ae,Math.min(z,N+pe));e.style.height=`${he}px`;return}let k=j.clientX-S;G=(j.clientX-B)/y*1e3,B=j.clientX,V=T;let K=ue(),Z=Math.max(0,Math.min(K,Q+k));e.style.transform=`translateX(${Z}px)`}function St(j,T){let y=[{name:"peek",h:oe()},{name:"partial",h:F()},{name:"full",h:J()}],I=Math.max(0,y.findIndex(z=>z.name===U)),k=y[I].h;if(Math.abs(j-k)<36&&Math.abs(T)<1100)return U;let K=j+T*.05,Z=(y[0].h+y[1].h)/2,pe=(y[1].h+y[2].h)/2,ae=K<Z?0:K<pe?1:2;if(ae>I+1&&(ae=I+1),ae<I-1&&(ae=I-1),ae===2&&I<2){let z=pe+(y[2].h-pe)*.25;j<z&&T<1400&&(ae=1)}return y[ae].name}function Be(j,T){let y=ue();return y<=0||Math.abs(j-(U==="closed"?y:0))<28&&Math.abs(T)<800?U:T>900?"closed":T<-900?"open":j>y*.45?"closed":"open"}function Ve(j){if(!P||!e||W!=null&&j.pointerId!==W)return;let T=A,y=C;if(P=!1,C=!1,A=null,W=null,e.classList.remove("is-dragging"),n&&(n.style.overflow=""),y&&!L)return;if(!L){T==="narrow"?(e.style.height="",ye()):T==="wide-open"?(ge(),m("open")):ge();return}if(T==="narrow"){let K=e.getBoundingClientRect().height;e.style.height="",m(St(K,ee));return}let I=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),k=I?parseFloat(I[1]):0;ge(),m(Be(k,G))}t?.addEventListener("pointerdown",j=>{l()||Je(j)}),t?.addEventListener("pointermove",D),t?.addEventListener("pointerup",Ve),t?.addEventListener("pointercancel",Ve),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",j=>{l()&&We(j)},{capture:!0}),document.addEventListener("pointermove",D,{capture:!0}),document.addEventListener("pointerup",Ve,{capture:!0}),document.addEventListener("pointercancel",Ve,{capture:!0});let Ie=()=>{e&&(e.style.height=""),ge(),n&&(n.style.overflow=""),p()};s.addEventListener?s.addEventListener("change",Ie):s.addListener(Ie);function tt(){i(r.matches)}return tt(),r.addEventListener?r.addEventListener("change",tt):r.addListener(tt),window.addEventListener("resize",()=>{f(),u()}),p(),x(),{getDetent:c,getSafeInsets:_,onDetentChange:h,refreshPartialHeight:d,setDetent:m}}function Hc(i={}){let e=i.min??0,t=i.max??1,n=i.step??.001,s=!!i.thumbScrubOnly,r=Ma(i.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,i.ariaLabel&&o.setAttribute("aria-label",i.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,h=14,f=null,d=0,g=0,_=!1,m=!1,p=!1,M=!0;function v(){let Y=`${(t===e?0:(r-e)/(t-e))*100}%`;l.style.width=Y,c.style.left=Y,o.setAttribute("aria-valuenow",String(r));let B=i.formatAriaValue?.(r)??String(r);o.setAttribute("aria-valuetext",B)}function x(U,Y){let B=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!B||!(B.width>0)||!(B.height>0)?!0:U>=B.left-h&&U<=B.right+h&&Y>=B.top-h&&Y<=B.bottom+h}function P(U,Y="input"){let B=wS(Ma(U,e,t),e,t,n);if(B===r&&Y==="silent"){v();return}r=B,v(),(Y==="input"||Y==="change")&&i.onInput?.(r),Y==="change"&&i.onChange?.(r)}function A(U){let Y=a.getBoundingClientRect(),B=Math.max(Y.width,1),V=Ma((U-Y.left)/B,0,1);return e+V*(t-e)}function C(U){if(f==null)return;let Y=m;f=null,_=!1,m=!1,M=!0,Y&&i.onScrubEnd?.(),U&&Y&&i.onChange?.(r)}function L(U){f==null&&(U.pointerType==="mouse"&&U.button!==0||(f=U.pointerId,d=U.clientX,g=U.clientY,p=!1,_=!1,m=!1,M=!s||x(U.clientX,U.clientY)))}function b(U){if(f!==U.pointerId)return;let Y=U.clientX-d,B=U.clientY-g;if(!p&&Math.hypot(Y,B)>u&&(p=!0),!_){if(!p)return;if(U.pointerType==="touch"&&Math.abs(B)>=Math.abs(Y)){C(!1);return}if(!M){C(!1);return}_=!0,m=!0,i.onScrubStart?.();try{o.setPointerCapture(U.pointerId)}catch{}}P(A(U.clientX),"input"),U.preventDefault()}function S(U){if(f===U.pointerId){if(!p&&!m){f=null,_=!1,m=!1,M=!0,i.onTap?.();return}C(!0)}}function N(U){f===U.pointerId&&C(!1)}function Q(U){let Y=t-e,B=n>0?n:Y/100,V=Y/10,ee=r;switch(U.key){case"ArrowLeft":case"ArrowDown":ee=r-B;break;case"ArrowRight":case"ArrowUp":ee=r+B;break;case"PageDown":ee=r-V;break;case"PageUp":ee=r+V;break;case"Home":ee=e;break;case"End":ee=t;break;case"Enter":case" ":U.preventDefault(),i.onTap?.();return;default:return}U.preventDefault(),P(ee,"change")}return o.addEventListener("pointerdown",L),o.addEventListener("pointermove",b),o.addEventListener("pointerup",S),o.addEventListener("pointercancel",N),o.addEventListener("keydown",Q),v(),{el:o,get value(){return r},set value(U){P(U,"silent")},refresh(){v()}}}function Ma(i,e,t){return Math.min(t,Math.max(e,i))}function wS(i,e,t,n){if(!(n>0))return Ma(i,e,t);let s=Math.round((i-e)/n),r=Number((e+s*n).toPrecision(12));return Ma(r,e,t)}var cg="blueprints.locale",TS={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool",racking_strap:"Racking strap",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_naturheld_flex_50:"NaturHeld Flex 50",slope_battens:"KVH battens",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_direct_hanger:"Direct hanger 125",slope_nonius:"Nonius hanger",soffit_naturheld_140:"NaturHeld 140",soffit_naturheld_flex_50:"NaturHeld Flex 50",soffit_battens:"KVH battens",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius hanger",bass_mineral_wool:"Mineral wool",bass_gkb:"GKB plasterboard",bass_cd:"CD frame",bass_wall_hanger:"CD wall hanger"},AS={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vlna",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_naturheld_flex_50:"NaturHeld Flex 50",slope_battens:"Lat\u011B KVH",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 125",slope_nonius:"Nonius z\xE1v\u011Bs",soffit_naturheld_140:"NaturHeld 140",soffit_naturheld_flex_50:"NaturHeld Flex 50",soffit_battens:"Lat\u011B KVH",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius z\xE1v\u011Bs",bass_mineral_wool:"Miner\xE1ln\xED vata",bass_gkb:"GKB s\xE1drokarton",bass_cd:"CD r\xE1m",bass_wall_hanger:"T\u0159men CD"},RS={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","scene.soffit":"Soffit","scene.gable":"Gable","scene.sikmina-lattice":"Slopes lattice","scene.sikmina-section":"Slopes section"},CS={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez"},vf={en:{...RS,...TS},cs:{...CS,...AS}},eo=ug(),Mf=new Set;function ug(){try{let i=typeof navigator<"u"&&navigator.language||"";if(String(i).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function PS(){try{let i=localStorage.getItem(cg);if(i==="en"||i==="cs")return i}catch{}return ug()}function IS(i){try{localStorage.setItem(cg,i)}catch{}}function Vc(){return eo}function hg(i){if(!(i!=="en"&&i!=="cs")&&i!==eo){eo=i,IS(i);for(let e of Mf)try{e()}catch{}}}function fg(i){return Mf.add(i),()=>Mf.delete(i)}function dg(){return eo=PS(),eo}function Lt(i){let e=vf[eo]||vf.en;if(Object.prototype.hasOwnProperty.call(e,i))return e[i];let t=vf.en;return Object.prototype.hasOwnProperty.call(t,i)?t[i]:i.startsWith("scene.")?i.slice(6):i}function bf(i){let e=i||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let n=t.getAttribute("data-i18n");n&&(t.textContent=Lt(n))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let n=t.getAttribute("data-i18n-aria");n&&t.setAttribute("aria-label",Lt(n))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let n=t.getAttribute("data-i18n-title");n&&t.setAttribute("title",Lt(n))})}var pg=new It,Gc=new R,Ai=class extends jo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ut(e,3)),this.setAttribute("uv",new Ut(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new _s(t,6,1);return this.setAttribute("instanceStart",new yn(n,3,0)),this.setAttribute("instanceEnd",new yn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new _s(t,6,1);return this.setAttribute("instanceColorStart",new yn(n,3,0)),this.setAttribute("instanceColorEnd",new yn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Wo(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),pg.setFromBufferAttribute(t),this.boundingBox.union(pg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Gc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gc)),Gc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Gc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};Te.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Rn.line={uniforms:fa.merge([Te.common,Te.fog,Te.line]),vertexShader:`
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
		`};var Ri=class extends Xt{constructor(e){super({type:"LineMaterial",uniforms:fa.clone(Rn.line.uniforms),vertexShader:Rn.line.vertexShader,fragmentShader:Rn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Sf=new rt,mg=new R,gg=new R,hn=new rt,fn=new rt,Ci=new rt,Ef=new R,wf=new $e,dn=new ea,_g=new R,Wc=new It,Xc=new Qt,Pi=new rt,Ii,ir;function xg(i,e,t){return Pi.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Pi.multiplyScalar(1/Pi.w),Pi.x=ir/t.width,Pi.y=ir/t.height,Pi.applyMatrix4(i.projectionMatrixInverse),Pi.multiplyScalar(1/Pi.w),Math.abs(Math.max(Pi.x,Pi.y))}function DS(i,e){let t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){dn.start.fromBufferAttribute(s,a),dn.end.fromBufferAttribute(r,a),dn.applyMatrix4(t);let c=new R,u=new R;Ii.distanceSqToSegment(dn.start,dn.end,u,c),u.distanceTo(c)<ir*.5&&e.push({point:u,pointOnLine:c,distance:Ii.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function LS(i,e,t){let n=e.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;Ii.at(1,Ci),Ci.w=1,Ci.applyMatrix4(e.matrixWorldInverse),Ci.applyMatrix4(n),Ci.multiplyScalar(1/Ci.w),Ci.x*=r.x/2,Ci.y*=r.y/2,Ci.z=0,Ef.copy(Ci),wf.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(hn.fromBufferAttribute(l,f),fn.fromBufferAttribute(c,f),hn.w=1,fn.w=1,hn.applyMatrix4(wf),fn.applyMatrix4(wf),hn.z>h&&fn.z>h)continue;if(hn.z>h){let v=hn.z-fn.z,x=(hn.z-h)/v;hn.lerp(fn,x)}else if(fn.z>h){let v=fn.z-hn.z,x=(fn.z-h)/v;fn.lerp(hn,x)}hn.applyMatrix4(n),fn.applyMatrix4(n),hn.multiplyScalar(1/hn.w),fn.multiplyScalar(1/fn.w),hn.x*=r.x/2,hn.y*=r.y/2,fn.x*=r.x/2,fn.y*=r.y/2,dn.start.copy(hn),dn.start.z=0,dn.end.copy(fn),dn.end.z=0;let _=dn.closestPointToPointParameter(Ef,!0);dn.at(_,_g);let m=Ys.lerp(hn.z,fn.z,_),p=m>=-1&&m<=1,M=Ef.distanceTo(_g)<ir*.5;if(p&&M){dn.start.fromBufferAttribute(l,f),dn.end.fromBufferAttribute(c,f),dn.start.applyMatrix4(o),dn.end.applyMatrix4(o);let v=new R,x=new R;Ii.distanceSqToSegment(dn.start,dn.end,x,v),t.push({point:x,pointOnLine:v,distance:Ii.origin.distanceTo(x),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var sr=class extends je{constructor(e=new Ai,t=new Ri({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)mg.fromBufferAttribute(t,o),gg.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+mg.distanceTo(gg);let r=new _s(s,2,1);return e.setAttribute("instanceDistanceStart",new yn(r,1,0)),e.setAttribute("instanceDistanceEnd",new yn(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ii=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;ir=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Xc.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=ir*.5;else{let h=Math.max(s.near,Xc.distanceToPoint(Ii.origin));c=xg(s,h,l.resolution)}if(Xc.radius+=c,Ii.intersectsSphere(Xc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Wc.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=ir*.5;else{let h=Math.max(s.near,Wc.distanceToPoint(Ii.origin));u=xg(s,h,l.resolution)}Wc.expandByScalar(u),Ii.intersectsBox(Wc)!==!1&&(n?DS(this,t):LS(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Sf),this.material.uniforms.resolution.value.set(Sf.z,Sf.w))}};var bg="blueprints.edgeMode",US="blueprints.edgesEnabled",rr="none",or="transparent",Sa="opaque",NS=20,Sg=2.5,Eg=0,yg=1e-4,Tf=5e-4,ba=1,OS=2;function vg(i){return i===rr||i===or||i===Sa?i:i==="1"||i==="true"?or:i==="0"||i==="false"?rr:null}function wg(){try{let i=vg(localStorage.getItem(bg));if(i)return i;let e=vg(localStorage.getItem(US));if(e)return Rf(e),e}catch{}return or}function Rf(i){try{localStorage.setItem(bg,i)}catch{}}function Gn(i){return!!(i&&i.userData&&i.userData.isEdgeOverlay)}function FS(i){let e=new Vo(i,NS),t=e.getAttribute("position"),n=t&&t.array?t.array instanceof Float32Array?t.array.slice():Float32Array.from(t.array):new Float32Array(0);return e.dispose(),n}function BS(i,e){if(!e.length)return i;if(!i.length)return e;let t=new Float32Array(i.length+e.length);return t.set(i,0),t.set(e,i.length),t}function zS(i,e){if(!i)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(i.transparent=!0,i.opacity=t,i.depthWrite=!1):(i.transparent=!1,i.opacity=1),i.needsUpdate=!0}function kS(i){if(!i?.visible)return 0;let e=Array.isArray(i.material)?i.material[0]:i.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function HS(i,e=or){return e===rr?0:e===Sa?i?.visible===!1?0:1:kS(i)}function Mg(i,e,t=1){let n=Math.max(0,Math.min(1,Number(t)||0)),s=new Ri({color:Eg,linewidth:Sg,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:n<1,opacity:n<1?n:1,clippingPlanes:i,clipIntersection:!1});return s.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <logdepthbuf_vertex>",`gl_Position.z -= ${yg} * gl_Position.w;
			#include <logdepthbuf_vertex>`),r.fragmentShader=r.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= max( ${Tf}, fwidth( gl_FragDepth ) );
			#else
				gl_FragDepth = gl_FragCoord.z - ${Tf};
			#endif`)},s.customProgramCacheKey=()=>`bp-edge-depth-bias-r${OS}-${Tf}-${yg}`,e&&s.resolution.set(e.x,e.y),s}function qc(i){if(!i)return;i.parent?.remove(i),i.geometry?.dispose?.();let e=i.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function Tg(i){if(!i)return;let e=[];i.traverse(t=>{Gn(t)&&e.push(t)});for(let t of e)qc(t)}function Es(i,e){i&&i.traverse(t=>{Gn(t)&&(t.visible=e)})}function Ag(i,e,t){if(!i)return;let n=Math.max(1,e),s=Math.max(1,t);i.traverse(r=>{if(!Gn(r)||!r.material)return;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a?.resolution&&a.resolution.set(n,s)})}function Rg(i,e){if(!i)return;let t=e||[];i.traverse(n=>{if(!Gn(n)||!n.material)return;let s=Array.isArray(n.material)?n.material:[n.material];for(let r of s)r&&(r.clippingPlanes=t,r.clipIntersection=!1,r.needsUpdate=!0)})}function VS(i,e,t){i.updateWorldMatrix(!0,!1);let n=i.userData.bpHardEdgePositions;n instanceof Float32Array||(n=FS(i.geometry),i.userData.bpHardEdgePositions=n);let s=Bc(t,i.matrixWorld),r=eg(i.geometry,s),o=BS(n,r),a=new Ai;o.length>=6&&a.setPositions(o);let l=e.geometry;e.geometry=a,e.computeLineDistances(),l?.dispose?.()}function Cg(i,e,t={}){let n=t.clippingPlanes??[],s=t.resolution||null,r=t.edgeMode??or;for(let[o,a]of i)for(let l of a){if(!l||!l.isMesh||!l.geometry||Gn(l))continue;let c=null;for(let h of l.children)if(Gn(h)){c=h;break}if(!e){c&&qc(c);continue}c&&!c.isLineSegments2&&(qc(c),c=null);let u=HS(l,r);if(c){let h=c.material;if(!h||typeof h.customProgramCacheKey!="function"){qc(c);let f=Mg(n,s,u),d=new Ai;c=new sr(d,f),c.name=`${o}__edges`,c.userData.isEdgeOverlay=!0,c.userData.edgeLabel=o,c.raycast=()=>{},c.renderOrder=1e3,c.layers.set(ba),l.add(c)}else h.color&&h.color.setHex(Eg),typeof h.linewidth=="number"&&(h.linewidth=Sg),h.clippingPlanes=n,h.clipIntersection=!1,s&&h.resolution&&h.resolution.set(s.x,s.y),zS(h,u),h.needsUpdate=!0}else{let h=Mg(n,s,u),f=new Ai;c=new sr(f,h),c.name=`${o}__edges`,c.userData.isEdgeOverlay=!0,c.userData.edgeLabel=o,c.raycast=()=>{},c.renderOrder=1e3,c.layers.set(ba),l.add(c)}c.layers.set(ba),VS(l,c,n)}}var Af=null;function GS(){return Af||(Af=new Hr({depthTest:!0,depthWrite:!0,colorWrite:!1,side:mt})),Af}function WS(i){let e=[];return i.traverse(t=>{if(e.length||Gn(t)||t.userData?.isSectionCap||!t.isMesh||!t.material)return;let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)if(s?.clippingPlanes?.length){e=s.clippingPlanes;return}}),e}function Cf(i,e,t,n,s={}){if(!n)return;let r=!!s.reuseDepth,o=[],a=!1;if(n.traverse(d=>{if(Gn(d)){a=!0;return}if(r||!d.isMesh||!d.material)return;let g=Array.isArray(d.material)?d.material:[d.material];for(let _ of g)_&&o.push({mat:_,colorWrite:_.colorWrite!==!1,depthWrite:_.depthWrite!==!1,depthTest:_.depthTest!==!1,transparent:!!_.transparent})}),!a)return;let l=i.autoClear,c=e.background,u=e.overrideMaterial,h=t.layers.mask;if(e.background=null,i.autoClear=!1,r){Es(n,!0),t.layers.set(ba),i.render(e,t),t.layers.mask=h,e.background=c,e.overrideMaterial=u,i.autoClear=l;return}Es(n,!1);let f=GS();f.clippingPlanes=WS(n),f.clipIntersection=!1,e.overrideMaterial=f,i.clearDepth(),i.render(e,t),e.overrideMaterial=null,Es(n,!0);for(let d of o)d.mat.colorWrite=!1,d.mat.depthWrite=!1,d.mat.depthTest=!0,d.mat.transparent=!1;t.layers.enable(ba),i.render(e,t),t.layers.mask=h;for(let d of o)d.mat.colorWrite=d.colorWrite,d.mat.depthWrite=d.depthWrite,d.mat.depthTest=d.depthTest,d.mat.transparent=d.transparent;e.background=c,e.overrideMaterial=u,i.autoClear=l}var Pg=!0,Ig=5,If=12,XS=If,Dg=.001,qS=.5,YS=1,Yc=1e5,Di={value:0},pn={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Dg},uResolution:{value:new Oe(1,1)}};function Pf(i){let e=i?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Di.value),t.tPrevViewZ&&(t.tPrevViewZ.value=pn.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=pn.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=pn.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=pn.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(pn.uResolution.value)}function $S(i){if(!i||i.userData.depthPeelPatched)return;i.userData.depthPeelPatched=!0;let e=i.customProgramCacheKey?.bind(i);i.customProgramCacheKey=()=>`${e?e():i.type}|depthPeel10`;let t=i.onBeforeCompile?.bind(i);i.onBeforeCompile=(n,s)=>{t?.(n,s),n.uniforms.uPeelStage=Di,n.uniforms.tPrevViewZ=pn.tPrevViewZ,n.uniforms.tPeelViewZ=pn.tPeelViewZ,n.uniforms.tOpaqueViewZ=pn.tOpaqueViewZ,n.uniforms.uViewZEps=pn.uViewZEps,n.uniforms.uResolution=pn.uResolution,i.userData.shader=n,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vPeelViewZ;`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
	vPeelViewZ = -mvPosition.z;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPeelStage;
uniform sampler2D tPrevViewZ;
uniform sampler2D tPeelViewZ;
uniform sampler2D tOpaqueViewZ;
uniform float uViewZEps;
uniform vec2 uResolution;
varying float vPeelViewZ;`),n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
	if (uPeelStage > 0.5) {
		vec2 peelUv = gl_FragCoord.xy / uResolution;
		float opaqueZ = texture2D(tOpaqueViewZ, peelUv).r;
		float prevZ = texture2D(tPrevViewZ, peelUv).r;
		float eps = max(uViewZEps, 1e-3 * max(vPeelViewZ, 1.0));
		// Behind an opaque solid (linear eye-space Z). Skip when opaqueZ is
		// ~0 (dead clear / failed float RT) so we do not discard every frag.
		if (opaqueZ > 1e-4 && vPeelViewZ >= opaqueZ - eps) discard;
		// Already peeled (at or in front of previous layer).
		if (vPeelViewZ <= prevZ + eps) discard;
		if (uPeelStage < 1.5) {
			// Depth peel: write linear view-Z; nearest wins via depthTest LESS.
			gl_FragColor = vec4(vPeelViewZ, 0.0, 0.0, 1.0);
		} else {
			float peelZ = texture2D(tPeelViewZ, peelUv).r;
			if (peelZ > ${(Yc*.5).toFixed(1)}) discard;
			// Tolerant band: anything from prev..peel that belongs to this layer.
			float peelEps = max(uViewZEps, 1e-3 * max(peelZ, 1.0));
			if (vPeelViewZ > peelZ + peelEps) discard;
		}
	}`)},i.needsUpdate=!0}function Lg(i){let e=new Oe,t=new Ue,n=null,s=null,r=null,o=null,a=null,l=null,c=new ci(-1,1,1,-1,0,1),u=new Yn,h=new Xt({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Ue(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new je(new $n(2,2),h);u.add(f);let d=new Xt({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Dl,blendSrc:ia,blendDst:vs,blendSrcAlpha:ia,blendDstAlpha:vs,blendEquation:qn}),g=new je(new $n(2,2),d),_=new Yn;_.add(g);let m=new Xt({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),p=new je(new $n(2,2),m),M=new Yn;M.add(p);let v=new Xt({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:mt,clipping:!0,blending:kn});function x(oe,F,J={}){m.uniforms.uValue.value=F;let ue=i.autoClear;i.setRenderTarget(oe),J.clearDepth&&(i.setClearColor(0,1),i.clear(!1,!0,!1)),i.autoClear=!1,i.render(M,c),i.autoClear=ue}function P(){n?.dispose(),s?.dispose(),r?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),n=null,s=null,r=null,o=null,a=null,l=null}let A=0;function C(oe,F,J){let ue=Math.max(1,Math.floor(oe)),ie=Math.max(1,Math.floor(F)),ye=Math.min(1,Math.max(.25,J)),ge=Math.max(1,Math.floor(ue*ye)),Se=Math.max(1,Math.floor(ie*ye));if(n&&n.width===ue&&n.height===ie&&r&&r.width===ge&&r.height===Se&&A===ye)return;P(),A=ye,n=new an(ue,ie,{format:tn,type:Zn,colorSpace:ft,depthBuffer:!0,stencilBuffer:!1});let Ze={format:tn,type:Ln,depthBuffer:!0,stencilBuffer:!1,magFilter:kt,minFilter:kt};s=new an(ge,Se,Ze),r=new an(ge,Se,Ze),o=new an(ge,Se,Ze),a=new an(ge,Se,{format:tn,type:Zi,colorSpace:ft,depthBuffer:!1,stencilBuffer:!1,magFilter:Ht,minFilter:Ht}),l=new an(ge,Se,{format:tn,type:Zi,colorSpace:ft,depthBuffer:!1,stencilBuffer:!1,magFilter:Ht,minFilter:Ht}),h.uniforms.tOpaque.value=n.texture,h.uniforms.tAccum.value=a.texture,pn.tOpaqueViewZ.value=s.texture,pn.uResolution.value.set(ge,Se)}function L(oe){let F=[],J=[];return oe?(oe.traverse(ue=>{if(!ue.isMesh||!ue.visible||Gn(ue))return;let ie=ue,ye=Array.isArray(ie.material)?ie.material:[ie.material],ge=!1;for(let Se of ye)if(Se&&Se.transparent&&Se.opacity<1-1e-4){ge=!0;break}ge?J.push(ie):F.push(ie)}),{opaque:F,transparent:J}):{opaque:F,transparent:J}}function b(oe,F){for(let J of oe)J.visible=F}function S(oe,F){oe.blending=F.blending,oe.blendSrc=F.blendSrc,oe.blendDst=F.blendDst,oe.blendSrcAlpha=F.blendSrcAlpha,oe.blendDstAlpha=F.blendDstAlpha,oe.blendEquation=F.blendEquation,oe.blendEquationAlpha=F.blendEquation}function N(oe){let F=new Set;for(let J of oe){let ue=Array.isArray(J.material)?J.material:[J.material];for(let ie of ue)ie&&F.add(ie)}return[...F]}function Q(oe,F,J){if(!J)return;let ue=J.visible,ie=oe.background,ye=i.autoClear;J.visible=!1,oe.background=null,i.autoClear=!1,i.clearDepth(),i.render(oe,F),J.visible=ue,oe.background=ie,i.autoClear=ye}let U=new Xt({uniforms:{tSrc:{value:null}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tSrc;
      varying vec2 vUv;
      void main() {
        gl_FragColor = texture2D(tSrc, vUv);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:kn}),Y=new je(new $n(2,2),U),B=new Yn;B.add(Y);function V(oe,F){U.uniforms.tSrc.value=oe.texture;let J=i.autoClear;i.setRenderTarget(F),i.setClearColor(0,1),i.clear(),i.autoClear=!1,i.render(B,c),i.autoClear=J}function ee(oe){return oe.children.filter(F=>F.userData?.blueprintAnnotations)}function G(oe,F){for(let J of oe)J.visible=F}function W(oe,F,J){ee(oe).some(ue=>ue.visible)&&Q(oe,F,J)}function le(oe,F,J,ue={}){Es(J,!1);let ie=ee(oe),ye=ie.map(ge=>ge.visible);G(ie,!1),i.setRenderTarget(null),i.autoClear=!0,i.render(oe,F),ue.skipEdges||Cf(i,oe,F,J,{reuseDepth:!!ue.reuseDepth}),ie.forEach((ge,Se)=>{ge.visible=ye[Se]}),W(oe,F,J)}function ce(oe,F,J,ue,ie={}){if(!(Pg&&(typeof ue=="function"?ue():!!ue)))return Di.value=0,le(oe,F,J,{reuseDepth:!0}),!1;if(ie.quality!=="high")return Di.value=0,le(oe,F,J,{reuseDepth:!0}),!0;let{opaque:ge,transparent:Se}=L(J);if(!Se.length)return Di.value=0,le(oe,F,J,{reuseDepth:!0}),!1;let Ze=ie.quality==="high",We=Ze?YS:qS,Je=Ze?If:Ig;i.getDrawingBufferSize(e),C(e.x,e.y,We);let D=i.autoClear,St=i.toneMapping,Be=oe.background;Be instanceof Ue?t.copy(Be):t.set(1118481),h.uniforms.uBackground.value.copy(t);let Ve=[];for(let z of[...ge,...Se])Ve.push({mesh:z,visible:z.visible});let Ie=N(Se),tt=[];for(let z of Ie)$S(z),tt.push({mat:z,snap:{blending:z.blending,blendSrc:z.blendSrc,blendDst:z.blendDst,blendSrcAlpha:z.blendSrcAlpha,blendDstAlpha:z.blendDstAlpha,blendEquation:z.blendEquation,blendEquationAlpha:z.blendEquationAlpha,depthWrite:z.depthWrite,depthTest:z.depthTest,transparent:z.transparent,opacity:z.opacity,colorWrite:z.colorWrite,side:z.side,forceSinglePass:z.forceSinglePass}});let j=new Map;for(let z of Se)j.set(z,z.onBeforeRender),z.onBeforeRender=function(de,Ee,Ce,Pe,be,Ye){let ve=Array.isArray(be)?be:[be];for(let O of ve)O&&Pf(O);let ze=j.get(z);typeof ze=="function"&&ze.call(this,de,Ee,Ce,Pe,be,Ye)};let T=null;for(let z of Ie)if(z.clippingPlanes?.length){T=z.clippingPlanes;break}if(!T)for(let z of ge){let he=Array.isArray(z.material)?z.material:[z.material];for(let de of he)if(de?.clippingPlanes?.length){T=de.clippingPlanes;break}if(T)break}v.clippingPlanes=T||[],v.clipIntersection=!1,oe.background=null,i.autoClear=!0,Di.value=0;let y=[];for(let z of oe.children)z!==J&&(z.isLight||(y.push({obj:z,visible:z.visible}),z.visible=!1));function I(){for(let[z,he]of j)z.onBeforeRender=he}function k(){for(let{mat:z,snap:he}of tt)S(z,he),z.blendEquationAlpha=he.blendEquationAlpha,z.depthWrite=he.depthWrite,z.depthTest=he.depthTest,z.transparent=he.transparent,z.opacity=he.opacity,z.colorWrite=he.colorWrite!==!1,z.side=he.side,z.forceSinglePass=he.forceSinglePass,z.needsUpdate=!0;for(let{mesh:z,visible:he}of Ve)z.visible=he;for(let{obj:z,visible:he}of y)z.visible=he;return I(),Di.value=0,oe.background=Be,oe.overrideMaterial=null,i.toneMapping=St,i.setRenderTarget(null),i.autoClear=!0,le(oe,F,J),i.autoClear=D,!1}if(b(Se,!1),b(ge,!0),Es(J,!1),i.setRenderTarget(n),i.setClearColor(0,0),i.clear(),i.render(oe,F),i.setRenderTarget(s),i.setClearColor(0,1),x(s,Yc,{clearDepth:!0}),Ze){let z=new Float32Array(4);try{i.readRenderTargetPixels(s,2,2,1,1,z)}catch{z[0]=0}if(!Number.isFinite(z[0])||z[0]<Yc*.5)return k()}let K=oe.overrideMaterial;oe.overrideMaterial=v,i.setRenderTarget(s),i.autoClear=!1,i.render(oe,F),i.autoClear=!0,oe.overrideMaterial=K,pn.tOpaqueViewZ.value=s.texture,i.setRenderTarget(a),i.setClearColor(0,0),i.clear(),x(o,0),pn.tPrevViewZ.value=o.texture,b(ge,!1),b(Se,!0),Es(J,!1);let Z=!1;for(let z=0;z<Je;z++){pn.tPrevViewZ.value=o.texture,pn.tPeelViewZ.value=o.texture,Di.value=1;for(let{mat:he}of tt)he.depthWrite=!0,he.depthTest=!0,he.colorWrite=!0,he.transparent=!0,he.forceSinglePass=!0,S(he,{blending:kn,blendSrc:vs,blendDst:na,blendSrcAlpha:vs,blendDstAlpha:na,blendEquation:qn}),Pf(he);i.setRenderTarget(r),i.setClearColor(0,1),i.clear(!1,!0,!1),x(r,Yc),i.setRenderTarget(r),i.autoClear=!1,i.render(oe,F),i.autoClear=!0,pn.tPeelViewZ.value=r.texture,Di.value=2;for(let{mat:he}of tt)he.depthWrite=!1,he.depthTest=!1,he.colorWrite=!0,he.transparent=!0,he.forceSinglePass=!0,S(he,{blending:oi,blendSrc:Lr,blendDst:Ns,blendSrcAlpha:vs,blendDstAlpha:Ns,blendEquation:qn}),Pf(he);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.render(oe,F),Z=!0,d.uniforms.tSrc.value=l.texture,i.setRenderTarget(a),i.autoClear=!1,i.render(_,c),i.autoClear=!0,V(r,o)}if(!Z)return k();for(let{mat:z,snap:he}of tt)S(z,he),z.blendEquationAlpha=he.blendEquationAlpha,z.depthWrite=he.depthWrite,z.depthTest=he.depthTest,z.transparent=he.transparent,z.opacity=he.opacity,z.colorWrite=he.colorWrite!==!1,z.side=he.side,z.forceSinglePass=he.forceSinglePass,z.needsUpdate=!0;for(let{mesh:z,visible:he}of Ve)z.visible=he;for(let{obj:z,visible:he}of y)z.visible=he;I(),Es(J,!0),Di.value=0,oe.background=Be,i.toneMapping=St,i.setRenderTarget(null),i.autoClear=!0,i.render(u,c);let pe=ee(oe),ae=pe.map(z=>z.visible);return G(pe,!1),Ze&&Cf(i,oe,F,J,{reuseDepth:!1}),pe.forEach((z,he)=>{z.visible=ae[he]}),W(oe,F,J),i.autoClear=D,!0}function xe(){P(),h.dispose(),f.geometry.dispose(),d.dispose(),g.geometry.dispose(),m.dispose(),p.geometry.dispose(),v.dispose(),U.dispose(),Y.geometry.dispose()}return{render:ce,dispose:xe,MAX_PEELS:XS,MAX_PEELS_FAST:Ig,MAX_PEELS_HIGH:If,VIEW_Z_EPSILON:Dg,USE_DEPTH_PEEL:Pg}}var Ug=8,ZS=56,Ng=14,Df=11,Og=.5,KS=1e-4,$c=128,jS=.028,JS=5,QS=.995,eE=.999,Fg=18,tE=22,nE=14,Lf=new Oe,Bg=new Qo,jn=new R,Jn=new R,Ui=new R,Sn=new R,io=new R,Li=new R,to=new R,no=new R,yt=new R,zg=new R,so=new R,iE=new rn;function Uf(i){let e=Math.abs(i)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function Nf(i){return i.pointerType==="touch"}function Of(i){return i.pointerType==="mouse"||i.pointerType==="pen"}function kg(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function $g(i){let{scene:e,canvas:t,getCamera:n,controls:s,getRoot:r,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=i,c="idle",u=!1,h=!1,f=0,d=0,g=null,_=null,m=null,p=null,M=null,v=null,x=null,P="mouse",A=0,C=0,L=!1,b=!1,S=new Dt;S.name="MeasureOverlay",S.renderOrder=10,e.add(S);let N=new Dt;N.name="MeasureDimensions",e.add(N);let Q=Gg(16766474),U=Gg(3458905),Y=Wg(16766474,.75),B=lE(16766474);S.add(Q,U,Y,B),Q.visible=!1,U.visible=!1,Y.visible=!1,B.visible=!1;let V=oE(t),ee=[];function G(){return u}function W(I){let k=!!I;if(k===u){k&&ce();return}if(u=k,u)if(s.enabled=!1,c="placeFirst",le(),M=null,v=null,kg()){let K=Math.max(1,t.clientWidth),Z=Math.max(1,t.clientHeight);oe(K*.5,Z*.5,!0)}else xe();else s.enabled=!0,c="idle",le(),M=null,v=null,x=null,b=!1,xe(),a?.(null);l?.(u),ce(),J()}function le(){h=!1,g=null,_=null,m=null,p=null}function ce(){c==="placeSecond"&&M&&g?a?.(Uf(M.distanceTo(g))):u&&a?.(null)}function xe(){V.hidden=!0,Q.visible=!1,B.visible=!1}function oe(I,k,K=!1){f=I,d=k,h=!0;let Z=Ze(I,k);if(Z){let pe=Z.point.clone(),ae=Z.kind,z=Z.edgeDir;if(p=null,c==="placeSecond"&&M){let he=We(M,v,Z);he&&(pe=he.foot,ae="perp",z=he.edgeDir,p=he.edgeDir.clone())}g=pe,_=ae,m=z}else K?g||(_=null,m=null,p=null):(g=null,_=null,m=null,p=null);J(),ce()}function F(I,k){let K=ge(k)*JS;I.scale.setScalar(Math.max(K,1e-6))}function J(){if(!u){xe(),U.visible=!1,Y.visible=!1,B.visible=!1;return}M?(U.visible=!0,U.position.copy(M),F(U,M)):U.visible=!1,h?(V.hidden=!1,Vg(V,t,f,d,_),g?(Q.visible=!0,Q.position.copy(g),F(Q,g),aE(Q,_)):Q.visible=!1):xe(),c==="placeSecond"&&M&&g?(qg(Y,M,g),Y.visible=!0):Y.visible=!1,c==="placeSecond"&&_==="perp"&&M&&g&&p?(Xg(B,M,g,p,ge),B.visible=!0):B.visible=!1}function ue(I){let k=t.getBoundingClientRect();return{x:I.clientX-k.left,y:I.clientY-k.top}}function ie(I,k,K){return K==="touch"?{x:I,y:k-ZS}:{x:I,y:k}}function ye(I){let k=o()||[];for(let K of k)if(K.distanceToPoint(I)<-KS)return!1;return!0}function ge(I){let k=n(),K=Math.max(1,t.clientHeight);if(k.isOrthographicCamera)return 2*((k.top-k.bottom)/(2*Math.max(k.zoom,1e-6)))/K;let Z=k.position.distanceTo(I),pe=k.fov*Math.PI/180;return 2*Math.tan(pe/2)*Z/K/Math.max(k.zoom,1e-6)}function Se(I,k){k.copy(I).project(n());let K=Math.max(1,t.clientWidth),Z=Math.max(1,t.clientHeight);return k.x=(k.x*.5+.5)*K,k.y=(-k.y*.5+.5)*Z,k}function Ze(I,k){let K=r();if(!K)return null;let Z=t.getBoundingClientRect();Lf.x=I/Math.max(1,Z.width)*2-1,Lf.y=-(k/Math.max(1,Z.height))*2+1,Bg.setFromCamera(Lf,n());let pe=Bg.intersectObject(K,!0),ae=null;for(let Fe of pe)if(Fe.object.visible&&ye(Fe.point)){ae=Fe;break}if(!ae)return null;let z=ae.object,he=z.geometry;if(!he?.getAttribute("position"))return{point:ae.point.clone(),kind:"face",edgeDir:null,mesh:z,triVerts:null,faceNormal:null};z.updateWorldMatrix(!0,!1);let de=ge(ae.point),Ee=de*Ng,Ce=de*Df,Pe=he.getAttribute("position"),be=he.getIndex(),Ye=ae.faceIndex,ve=[];if(ae.face)jn.fromBufferAttribute(Pe,ae.face.a).applyMatrix4(z.matrixWorld),Jn.fromBufferAttribute(Pe,ae.face.b).applyMatrix4(z.matrixWorld),Ui.fromBufferAttribute(Pe,ae.face.c).applyMatrix4(z.matrixWorld),ve.push(jn.clone(),Jn.clone(),Ui.clone());else if(typeof Ye=="number"){let Fe,Et,Zt;be?(Fe=be.getX(Ye*3),Et=be.getX(Ye*3+1),Zt=be.getX(Ye*3+2)):(Fe=Ye*3,Et=Ye*3+1,Zt=Ye*3+2),jn.fromBufferAttribute(Pe,Fe).applyMatrix4(z.matrixWorld),Jn.fromBufferAttribute(Pe,Et).applyMatrix4(z.matrixWorld),Ui.fromBufferAttribute(Pe,Zt).applyMatrix4(z.matrixWorld),ve.push(jn.clone(),Jn.clone(),Ui.clone())}let ze=null;ve.length===3&&(ze=new R().subVectors(ve[1],ve[0]).cross(Sn.subVectors(ve[2],ve[0])).normalize(),ze.lengthSq()<1e-12&&(ze=null));let O=I,Me=k,re=null;function fe(Fe){if(!ye(Fe)||Fe.distanceToSquared(ae.point)>Ee*Ee*4)return;Se(Fe,no);let Et=Math.hypot(no.x-O,no.y-Me);Et>Ng||(!re||Et<re.distPx)&&(re={point:Fe.clone(),distPx:Et})}for(let Fe of ve)fe(Fe);let Ae=Ee*Ee*4,we=Pe.count,Ke=we>8e3?2:1;for(let Fe=0;Fe<we;Fe+=Ke)Sn.fromBufferAttribute(Pe,Fe).applyMatrix4(z.matrixWorld),!(Sn.distanceToSquared(ae.point)>Ae)&&fe(Sn);if(re)return{point:re.point,kind:"vertex",edgeDir:null,mesh:z,triVerts:ve.length?ve:null,faceNormal:ze};let ht=null;function Rt(Fe,Et){yt.copy(Et).sub(Fe);let Zt=yt.lengthSq();if(Zt<1e-18)return;let ts=Sn.copy(ae.point).sub(Fe).dot(yt)/Zt;if(ts=Math.min(1,Math.max(0,ts)),io.copy(Fe).addScaledVector(yt,ts),!ye(io)||io.distanceToSquared(ae.point)>Ce*Ce*4)return;Se(io,no);let ns=Math.hypot(no.x-O,no.y-Me);if(ns>Df)return;Se(Fe,Li),Se(Et,to);let nn=to.x-Li.x,Cn=to.y-Li.y,Qn=nn*nn+Cn*Cn;if(Qn>1e-6){let di=((O-Li.x)*nn+(Me-Li.y)*Cn)/Qn;di=Math.min(1,Math.max(0,di));let Wn=Li.x+nn*di,is=Li.y+Cn*di;if(Math.hypot(O-Wn,Me-is)>Df)return}(!ht||ns<ht.distPx)&&(ht={point:io.clone(),distPx:ns,dir:yt.clone().normalize()})}return ve.length===3&&(Rt(ve[0],ve[1]),Rt(ve[1],ve[2]),Rt(ve[2],ve[0])),ht?{point:ht.point,kind:"edge",edgeDir:ht.dir,mesh:z,triVerts:ve.length?ve:null,faceNormal:ze}:{point:ae.point.clone(),kind:"face",edgeDir:null,mesh:z,triVerts:ve.length?ve:null,faceNormal:ze}}function We(I,k,K){if(!K.mesh||!K.triVerts||K.triVerts.length!==3||!K.faceNormal||K.faceNormal.lengthSq()<1e-12)return null;let Z=ge(I),pe=Z*nE,ae=Math.max(Z*2,1e-5);if(Math.abs(Zc(I,K.triVerts[0],K.faceNormal))>ae)return null;let z=Je(K.mesh,K.triVerts[0],K.faceNormal,ae);if(!z.length)return null;let he=[];for(let Ce of z)Hg(I,Ce.a,Ce.b)<=pe&&he.push(Ce.dir.clone());if(k&&k.lengthSq()>1e-12&&he.push(k.clone().normalize()),!he.length)return null;let de=Z*Fg,Ee=null;for(let Ce of he)if(!(Ce.lengthSq()<1e-12)){Ce.normalize();for(let Pe of z){if(Math.abs(Pe.dir.dot(Ce))<QS||Hg(I,Pe.a,Pe.b)<=pe)continue;let be=sE(I,Pe.a,Pe.b);if(!ye(be)||I.distanceTo(be)*1e3<Og||(yt.copy(be).sub(I),yt.lengthSq()<1e-16)||(yt.normalize(),Math.abs(yt.dot(Ce))>.08))continue;let ve=K.point.distanceTo(be);Se(K.point,Li),Se(be,to);let ze=Math.hypot(Li.x-to.x,Li.y-to.y);if(ve>de*1.35&&ze>Fg)continue;let O=ze+ve/Math.max(Z,1e-9);(!Ee||O<Ee.score)&&(Ee={foot:be.clone(),edgeDir:Ce.clone(),score:O})}}return Ee?{foot:Ee.foot,edgeDir:Ee.edgeDir}:null}function Je(I,k,K,Z){let pe=I.geometry,ae=pe?.getAttribute("position");if(!ae)return[];I.updateWorldMatrix(!0,!1);let z=pe.getIndex(),he=new Map,de=Math.max(Z*.25,1e-5);function Ee(ve,ze,O){so.subVectors(ze,ve).cross(Sn.subVectors(O,ve)),!(so.lengthSq()<1e-16)&&(so.normalize(),!(Math.abs(so.dot(K))<eE)&&(Math.abs(Zc(ve,k,K))>Z||Math.abs(Zc(ze,k,K))>Z||Math.abs(Zc(O,k,K))>Z||(Ce(ve,ze),Ce(ze,O),Ce(O,ve))))}function Ce(ve,ze){if(yt.copy(ze).sub(ve),yt.lengthSq()<1e-16)return;let O=rE(ve,ze,de);he.has(O)||he.set(O,{a:ve.clone(),b:ze.clone(),dir:yt.clone().normalize()})}let Pe=z?z.count/3:ae.count/3,be=12e3,Ye=Pe>be?Math.ceil(Pe/be):1;for(let ve=0;ve<Pe;ve+=Ye){let ze,O,Me;if(z){let re=ve*3;ze=z.getX(re),O=z.getX(re+1),Me=z.getX(re+2)}else ze=ve*3,O=ve*3+1,Me=ve*3+2;jn.fromBufferAttribute(ae,ze).applyMatrix4(I.matrixWorld),Jn.fromBufferAttribute(ae,O).applyMatrix4(I.matrixWorld),Ui.fromBufferAttribute(ae,Me).applyMatrix4(I.matrixWorld),Ee(jn,Jn,Ui)}return[...he.values()]}function D(){if(g){if(c==="placeFirst"){M=g.clone(),v=m?m.clone():null,c="placeSecond",p=null,(Nf({pointerType:P})||!kg())&&(h=!1,g=null,_=null,m=null,xe()),J(),ce();return}if(c==="placeSecond"&&M){if(M.distanceTo(g)*1e3<Og)return;St(M,g),W(!1)}}}function St(I,k){let K=new Dt;K.name="Dimension";let Z=Wg(16752394,1);qg(Z,I,k),Z.visible=!0;let pe=I.clone().lerp(k,.5),ae=I.distanceTo(k),z=cE(Uf(ae));z.position.copy(pe),K.add(Z,z),N.add(K),ee.push({group:K,sprite:z,mid:pe.clone(),span:ae}),Be(z,I,k,pe,ae)}function Be(I,k,K,Z,pe){let ae=n();if(ae.getWorldDirection(zg),yt.copy(K).sub(k),yt.lengthSq()<1e-16){I.position.copy(Z);return}yt.normalize(),Sn.crossVectors(yt,zg),Sn.lengthSq()<1e-10&&Sn.copy(ae.up),Sn.normalize();let z=Math.max(pe*jS,ge(Z)*18);I.position.copy(Z).addScaledVector(Sn,z);let he=ge(I.position)*56;I.scale.set(he*2.2,he,1)}function Ve(){U.visible&&M&&F(U,M),Q.visible&&g&&F(Q,g),h&&Vg(V,t,f,d,_),B.visible&&M&&g&&p&&_==="perp"&&Xg(B,M,g,p,ge);for(let I of ee){let K=I.group.children[0].geometry.getAttribute("position");jn.fromBufferAttribute(K,0),Jn.fromBufferAttribute(K,1),Be(I.sprite,jn,Jn,I.mid,I.span)}}function Ie(I){if(!u||c==="idle"||!Of(I)||x!==null)return;let{x:k,y:K}=ue(I),Z=ie(k,K,I.pointerType);oe(Z.x,Z.y,!0)}function tt(I){if(!u||c==="idle"||I.button!==void 0&&I.button!==0||x!==null)return;x=I.pointerId,P=I.pointerType||"mouse";let{x:k,y:K}=ue(I);A=k,C=K,L=!1,b=!1;try{t.setPointerCapture(I.pointerId)}catch{}if(Of(I)){let Z=ie(k,K,P);oe(Z.x,Z.y,!0)}I.preventDefault()}function j(I){if(!u)return;if(x===null){Ie(I);return}if(x!==I.pointerId)return;let{x:k,y:K}=ue(I);if(Math.hypot(k-A,K-C)>=Ug&&(L=!0,b=!0),Nf(I)){if(!b)return;let pe=ie(k,K,"touch");oe(pe.x,pe.y,!0)}else if(Of(I)){let pe=ie(k,K,P);oe(pe.x,pe.y,!0)}I.preventDefault()}function T(I){if(!u||x!==I.pointerId)return;let{x:k,y:K}=ue(I);Math.hypot(k-A,K-C)>=Ug&&(L=!0,b=!0),x=null;try{t.releasePointerCapture(I.pointerId)}catch{}if(Nf(I)){L?b=!1:(b=!1,h&&g&&D()),I.preventDefault();return}!L&&g&&D(),b=!1,I.preventDefault()}function y(I){x===I.pointerId&&(x=null,b=!1)}return t.addEventListener("pointerdown",tt),t.addEventListener("pointermove",j),t.addEventListener("pointerup",T),t.addEventListener("pointercancel",y),{isActive:G,setActive:W,update:Ve,formatMm:Uf}}function Zc(i,e,t){return iE.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(i)}function Hg(i,e,t){yt.copy(t).sub(e);let n=yt.lengthSq();if(n<1e-18)return i.distanceTo(e);let s=Sn.copy(i).sub(e).dot(yt)/n;return s=Math.min(1,Math.max(0,s)),io.copy(e).addScaledVector(yt,s).distanceTo(i)}function sE(i,e,t){yt.copy(t).sub(e);let n=yt.lengthSq();if(n<1e-18)return e.clone();let s=Sn.copy(i).sub(e).dot(yt)/n;return s=Math.min(1,Math.max(0,s)),e.clone().addScaledVector(yt,s)}function rE(i,e,t){let n=Math.round(i.x/t),s=Math.round(i.y/t),r=Math.round(i.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return n<o||n===o&&s<a||n===o&&s===a&&r<=l?`${n},${s},${r}|${o},${a},${l}`:`${o},${a},${l}|${n},${s},${r}`}function oE(i){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(i.parentElement||document.body).appendChild(e),e)}function Vg(i,e,t,n,s){let r=e.getBoundingClientRect();i.style.left=`${r.left+t}px`,i.style.top=`${r.top+n}px`,i.dataset.snap=s||"none"}function Gg(i){let e=new Go(1,16,12),t=new Nt({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),n=new je(e,t);return n.renderOrder=20,n.visible=!1,n}function aE(i,e){let t=i.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function Wg(i,e){let t=new Tt,n=new Float32Array(6);t.setAttribute("position",new xt(n,3));let s=new Gi({color:i,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),r=new vi(t,s);return r.renderOrder=19,r.frustumCulled=!1,r.visible=!1,r}function lE(i){let e=new Tt,t=new Float32Array(9);e.setAttribute("position",new xt(t,3));let n=new Gi({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),s=new vi(e,n);return s.renderOrder=22,s.frustumCulled=!1,s.visible=!1,s}function Xg(i,e,t,n,s){let r=s(t)*tE;if(yt.copy(e).sub(t),yt.lengthSq()<1e-16){i.visible=!1;return}if(yt.normalize(),Sn.copy(n).normalize(),so.crossVectors(Sn,yt),so.lengthSq()<1e-12){i.visible=!1;return}jn.copy(t).addScaledVector(Sn,r),Jn.copy(t),Ui.copy(t).addScaledVector(yt,r);let o=i.geometry.getAttribute("position");o.setXYZ(0,jn.x,jn.y,jn.z),o.setXYZ(1,Jn.x,Jn.y,Jn.z),o.setXYZ(2,Ui.x,Ui.y,Ui.z),o.needsUpdate=!0,i.geometry.computeBoundingSphere()}function qg(i,e,t){let n=i.geometry.getAttribute("position");n.setXYZ(0,e.x,e.y,e.z),n.setXYZ(1,t.x,t.y,t.z),n.needsUpdate=!0,i.geometry.computeBoundingSphere()}function cE(i){let e=document.createElement("canvas");e.width=$c*2,e.height=$c;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round($c*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(i),c=Math.ceil(l.width),u=Math.round($c*.42),h=c+o*2,f=u+a*2,d=(e.width-h)/2,g=(e.height-f)/2,_=18;t.fillStyle="rgba(28, 28, 30, 0.78)",Yg(t,d,g,h,f,_),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,Yg(t,d,g,h,f,_),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(i,e.width/2,e.height/2+1)}let n=new Wi(e);n.colorSpace=ft,n.needsUpdate=!0;let s=new Fr({map:n,depthTest:!1,depthWrite:!1,transparent:!0}),r=new Lo(s);return r.renderOrder=21,r.center.set(.5,.5),r}function Yg(i,e,t,n,s,r){let o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(e+o,t),i.arcTo(e+n,t,e+n,t+s,o),i.arcTo(e+n,t+s,e,t+s,o),i.arcTo(e,t+s,e,t,o),i.arcTo(e,t,e+n,t,o),i.closePath()}var ro=class extends Ai{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Kc=class extends sr{constructor(e=new ro,t=new Ri({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var uE='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',hE=420,fE=36,dE=new R,Zg=new R,Kg=new R,Ff=new R,ar=new R,ws=new R;function wa(i){return new R(i[0]*.001,i[2]*.001,-i[1]*.001)}function pE(i){let e=Math.abs(i)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function Bf(i,e){return i==null?"":typeof i=="string"?i:String(i[e==="cs"?"cs":"en"]||i.en||i.cs||"")}function mE(i){if(!Number.isFinite(i)||i<=0)return"";let e=i*1e3/hE,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function gE(i,e){if(e==="plate")return fE;let t=Math.min(Math.max(1,i.clientWidth),Math.max(1,i.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function Ea(i,e,t,n="center"){let s=i.map(v=>String(v)).filter(v=>v.length),r=document.createElement("canvas"),o=r.getContext("2d"),a=`600 ${t}px ${uE}`,l=Math.ceil(t*.35),c=Math.ceil(t*.2),u=Math.ceil(t*1.25);o&&(o.font=a);let h=t;if(o)for(let v of s)h=Math.max(h,o.measureText(v).width);let f=Math.ceil(h+l*2),d=Math.ceil(Math.max(s.length,1)*u+c*2),g=2;r.width=f*g,r.height=d*g;let _=r.getContext("2d");if(_){_.scale(g,g),_.clearRect(0,0,f,d);let v=e==="plate";_.font=a,_.textAlign="left",_.textBaseline="middle",_.lineJoin="round",_.miterLimit=2,_.lineWidth=Math.max(2,t*.28),_.strokeStyle=v?"#ffffff":"rgba(0,0,0,0.92)",_.fillStyle=v?"#141414":"#f7f7f8",s.forEach((x,P)=>{let A=l,C=c+u*P+u*.5;_.strokeText(x,A,C),_.fillText(x,A,C)})}let m=new Wi(r);m.colorSpace=ft,m.flipY=!0,m.needsUpdate=!0;let p=new Nt({map:m,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:mt}),M=new je(new $n(1,1),p);return M.renderOrder=30,M.frustumCulled=!1,M.userData.cssWidth=f,M.userData.cssHeight=d,M.userData.anchor=n,M}function lr(i){let e=new ro;e.setPositions([0,0,0,0,0,0]);let t=new Ri({color:i,linewidth:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1}),n=new Kc(e,t);return n.renderOrder=25,n.frustumCulled=!1,n.computeLineDistances(),n}function cr(i,e,t){i.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),i.computeLineDistances()}function jg(i){let{scene:e,getCamera:t,getCanvas:n,getLocale:s,getVisibleWidthM:r,getTarget:o}=i,a=new Dt;a.name="Annotations",a.userData.blueprintAnnotations=!0,e.add(a);let l=null,c="viewer",u=!0,h=0,f=[],d=null,g=null,_=null;function m(){return c==="plate"?1315860:15921908}function p(B){B.traverse(V=>{V.geometry&&V.geometry.dispose();let ee=V.material;ee&&(ee.map&&ee.map.dispose(),ee.dispose())})}function M(){for(let B of[...a.children])a.remove(B),p(B);f=[],d=null,g=null,_=null}function v(){return gE(n(),c)}function x(){a.visible=!!l&&u}function P(){if(M(),h=v(),!l){x();return}let B=s(),V=m(),ee=h,G=Array.isArray(l.annotations)?l.annotations:[];for(let xe of G)if(!(!xe||typeof xe!="object")){if(xe.kind==="callout"&&Array.isArray(xe.anchor)){let oe=Bf(xe.text,B);if(!oe)continue;let F=Ea(oe.split(`
`),c,ee),J=lr(V);a.add(J,F),f.push({kind:"callout",sprite:F,lines:[J],data:xe})}else if(xe.kind==="dim"&&Array.isArray(xe.a)&&Array.isArray(xe.b)){let oe=Ea(["0"],c,ee),F=lr(V),J=lr(V),ue=lr(V),ie=lr(V),ye=lr(V);a.add(F,J,ue,ie,ye,oe),f.push({kind:"dim",sprite:oe,lines:[F,J,ue,ie,ye],data:xe})}}let W=Bf(l.title,B),le=l.project?String(l.project):"",ce=[...W.split(`
`),le].filter(Boolean);ce.length&&(d=Ea(ce,c,ee,"topleft"),a.add(d)),g=Ea(["1:1"],c,ee,"bottomleft"),_=lr(V),a.add(_,g),x()}function A(B,V=dE){return V.copy(B).project(t())}function C(B,V,ee,G=new R){return G.set(B,V,ee).unproject(t())}function L(B){let V=t(),ee=n(),G=Math.max(1,ee.clientHeight);if(V.isOrthographicCamera){let ce=Math.max(V.zoom,1e-6);return(V.top-V.bottom)/ce/G}let W=Math.max(V.position.distanceTo(B),1e-4),le=(V.fov||45)*Math.PI/180;return 2*Math.tan(le/2)*W/G}let b=new R,S=new R;function N(B,V){let ee=t(),G=L(V),W=G*B.userData.cssWidth,le=G*B.userData.cssHeight;b.set(1,0,0).applyQuaternion(ee.quaternion),S.set(0,1,0).applyQuaternion(ee.quaternion);let ce=B.userData.anchor||"center";B.position.copy(V),ce==="topleft"?(B.position.addScaledVector(b,W*.5),B.position.addScaledVector(S,-le*.5)):ce==="bottomleft"&&(B.position.addScaledVector(b,W*.5),B.position.addScaledVector(S,le*.5)),B.quaternion.copy(ee.quaternion),B.scale.set(W,le,1)}function Q(){let B=n(),V=Math.max(1,B.width),ee=Math.max(1,B.height);a.traverse(G=>{let W=G.material;W&&W.resolution&&W.resolution.set(V,ee)})}function U(B,V){let ee=Ea(V,c,h||v(),B.userData.anchor);B.material.map?.dispose(),B.material.dispose(),B.material=ee.material,B.userData.cssWidth=ee.userData.cssWidth,B.userData.cssHeight=ee.userData.cssHeight,ee.geometry.dispose()}function Y(){if(!l||!u||(v()!==h&&P(),!a.visible))return;Q();let V=s();t().updateMatrixWorld();for(let ce of f)if(ce.kind==="callout"){let xe=wa(ce.data.anchor),oe=A(xe,Zg),F=Array.isArray(ce.data.offset)?ce.data.offset:[.08,.06],J=oe.x+Number(F[0]||0)*2,ue=oe.y+Number(F[1]||0)*2,ie=C(J,ue,oe.z,Kg);N(ce.sprite,ie);let ye=L(ie),ge=ye*ce.sprite.userData.cssWidth*.5;ar.copy(ie).sub(xe);let Se=ar.length();Se>ge+ye?(ar.setLength(Se-ge),ar.add(xe)):ar.copy(ie),cr(ce.lines[0],xe,ar)}else if(ce.kind==="dim"){let xe=wa(ce.data.a),oe=wa(ce.data.b),F=A(xe,Zg),J=A(oe,Kg),ue=J.x-F.x,ie=J.y-F.y,ye=Math.hypot(ue,ie)||1e-6;ue/=ye,ie/=ye;let ge=Number(ce.data.offset)||.04,Se=-ie*ge*2,Ze=ue*ge*2,We=(F.z+J.z)*.5,Je=C(F.x+Se,F.y+Ze,We,new R),D=C(J.x+Se,J.y+Ze,We,new R),St=L(Je),Be=St*6,Ve=St*8;ws.copy(Je).sub(xe);let Ie=ws.length()||1;ws.multiplyScalar((Ie+Ve)/Ie);let tt=xe.clone().add(ws);ws.copy(D).sub(oe);let j=ws.length()||1;ws.multiplyScalar((j+Ve)/j);let T=oe.clone().add(ws),y=xe.clone().lerp(Je,Math.min(.85,Be/Ie)),I=oe.clone().lerp(D,Math.min(.85,Be/j));cr(ce.lines[0],y,tt),cr(ce.lines[1],I,T),cr(ce.lines[2],Je,D);let k=St*10,Z=C(F.x+Se-ie*.012,F.y+Ze+ue*.012,We,new R).sub(Je);Z.lengthSq()<1e-16?Z.set(0,k,0):Z.setLength(k),cr(ce.lines[3],Je.clone().sub(Z),Je.clone().add(Z)),cr(ce.lines[4],D.clone().sub(Z),D.clone().add(Z)),Ff.copy(Je).lerp(D,.5);let pe=C(F.x+Se-ie*.03,F.y+Ze+ue*.03,We,new R).sub(C(F.x+Se,F.y+Ze,We,new R));pe.lengthSq()>1e-12&&Ff.add(pe);let z=Bf(ce.data.text,V)||pE(xe.distanceTo(oe));ce.sprite.userData.labelText!==z&&(U(ce.sprite,[z]),ce.sprite.userData.labelText=z),N(ce.sprite,Ff)}let G=A(o(),ar).z;if(d){let ce=C(-.94,.9,G,new R);N(d,ce)}let W=r(),le=mE(W??NaN);if(g&&_){let ce=W!=null&&W>8?2:1,xe=C(-.9,-.86,G,new R),oe=C(-.9+.08,-.86,G,new R).sub(xe),F=L(xe),J=W&&W>0?ce/W*Math.max(1,n().clientWidth):80;oe.lengthSq()>1e-12?oe.setLength(Math.max(J*F,F*40)):oe.set(F*80,0,0),cr(_,xe,xe.clone().add(oe));let ue=g.userData.labelText,ie=le?`${le}  \xB7  ${Math.round(ce*1e3)} mm`:"";ue!==ie&&(U(g,ie?[ie]:["\u2014"]),g.userData.labelText=ie);let ye=C(-.9,-.8,G,new R).sub(xe);N(g,xe.clone().add(ye))}}return{group:a,setSpec(B){l=B&&typeof B=="object"?B:null,P(),Y()},setInk(B){c=B==="plate"?"plate":"viewer",P(),Y()},setVisible(B){u=!!B,x(),a.visible&&Y()},isVisible(){return u},relocalize(){P(),Y()},update:Y,clear(){l=null,M(),a.visible=!1}}}function Jg(i){return i/25.4*72}function zf(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function _E(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d");return t?(t.drawImage(i,0,0),new Promise((n,s)=>{e.toBlob(r=>{r?n(r):s(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function xE(i){let e=await createImageBitmap(i),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d",{willReadFrequently:!0});if(!n)throw new Error("2D canvas unavailable");return n.drawImage(e,0,0),e.close?.(),n.getImageData(0,0,t.width,t.height)}async function yE(i){if(typeof CompressionStream>"u")return{bytes:i,filter:""};let e=new Blob([i]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Ta(i){return typeof i=="string"?new TextEncoder().encode(i):i}async function vE(i){let e=i.width,t=i.height,n=i.data,s=new Uint8Array(e*t*3);for(let x=0,P=0;x<n.length;x+=4,P+=3){let A=n[x+3]/255;s[P]=Math.round(n[x]*A+255*(1-A)),s[P+1]=Math.round(n[x+1]*A+255*(1-A)),s[P+2]=Math.round(n[x+2]*A+255*(1-A))}let{bytes:r,filter:o}=await yE(s),a=Jg(420),l=Jg(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),h=[],f=0;function d(x){h.push(x),f+=x.length}let g=[0];function _(x,P){g[x]=f,d(Ta(`${x} 0 obj
`));for(let A of P)d(Ta(A));d(Ta(`
endobj
`))}d(Ta(`%PDF-1.4
`)),_(1,["<< /Type /Catalog /Pages 2 0 R >>"]),_(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),_(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${l.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),_(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),_(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${r.length} >>
stream
`,r,`
endstream`]);let m=f,p=`xref
0 6
0000000000 65535 f 
`;for(let x=1;x<=5;x++)p+=`${String(g[x]).padStart(10,"0")} 00000 n 
`;p+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${m}
%%EOF
`,d(Ta(p));let M=new Uint8Array(f),v=0;for(let x of h)M.set(x,v),v+=x.length;return new Blob([M],{type:"application/pdf"})}async function Qg(i){let e=await _E(i),t=await xE(e),n=await vE(t);return{png:e,pdf:n}}var kf="scene";function EE(){try{return(new URLSearchParams(location.search).get(kf)||"").trim()}catch{return""}}function t0(i){try{let e=new URL(location.href),t=i!=null?String(i).trim():"";t?e.searchParams.set(kf,t):e.searchParams.delete(kf);let n=`${e.pathname}${e.search}${e.hash}`,s=`${location.pathname}${location.search}${location.hash}`;n!==s&&history.replaceState(null,"",n)}catch{}}function wE(i,e,t={}){let n=Array.isArray(t.scenes)?t.scenes:[],s=Array.isArray(t.partGroups)?t.partGroups:[],r=String(t.scene!=null?t.scene:EE()).trim();dg(),bf(document);let o=[],a=null,l=1842206,c=!0,u=Wm(),h=wg(),f=new Map,d=new Map,g=new Map,_=new Map,m=new Set,p=new Map,M=new Map,v=new Map,x=new Set,P=null;P=lg(E=>{c=E,l=E?1842206:15263981,a&&(a.background=new Ue(l)),document.documentElement.style.colorScheme=E?"dark":"light",f.size&&is()});let A=new wc({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});A.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),A.outputColorSpace=ft,A.toneMapping=sa,A.toneMappingExposure=1.05,A.localClippingEnabled=!0;let C=Lg(A);a=new Yn,a.background=new Ue(l);let L=30,b=120,S=75,N=125,Q="perspective",U=S,Y=S,B=1,V=!1,ee=new zt(45,1,.01,1e6),G=new ci(-1,1,1,-1,.01,1e6),W=ee,le=new Pc(W,i);le.enableDamping=!1,le.screenSpacePanning=!0;let ce=jg({scene:a,getCamera:()=>W,getCanvas:()=>i,getLocale:Vc,getVisibleWidthM:()=>{if(!W.isOrthographicCamera)return null;let E=Math.max(W.zoom,1e-6);return(W.right-W.left)/E},getTarget:()=>le.target}),xe=null,oe=null;a.add(new Ko(16777215,.45));let F=new gs(16777215,1.15);F.position.set(.6,1,.4),a.add(F);let J=new gs(16777215,.4);J.position.set(-.5,.2,-.6),a.add(J);let ue=new Kr(A);a.environment=ue.fromScene(new Ic,.04).texture,ue.dispose();let ie=null,ye=new It,ge=new R,Se=new R,Ze=new R,We=new R,Je=new R,D=[],St=1,Be=!1,Ve=!1,Ie=!1;new Ac().parse(e,"",E=>{ie=E.scene,a.add(ie),ie.traverse(q=>{if(!q.isMesh)return;let te=q.name||q.parent?.name||"part",me=te.replace(/_\d+$/,"")||te;if(f.has(me)||f.set(me,[]),f.get(me).push(q),q.material){let Ge=Array.isArray(q.material)?q.material:[q.material];for(let Ne of Ge)"side"in Ne&&(Ne.side=mt)}}),Ke(),Ts(),oo(),Ca(),jc();let H=w(r);H&&(ss=`scene:${String(H.id).trim()}`),_e(),fe(),qe(),Vt(),is(),H&&Fe(H),X(),P?.refreshPartialHeight(),o0(),a0(),fr(),dr()},E=>{j(String(E?.message||E))});function j(E){let H=document.getElementById("err");H&&(H.style.display="block",H.textContent=E)}function T(){ie&&(ye.setFromObject(ie),ye.getSize(ge),ye.getCenter(Se))}function y(){let E=Math.max(1,i.clientWidth),H=Math.max(1,i.clientHeight);return E/H}function I(E,H){let q=E*Math.PI/180;return 2*Math.atan(Math.tan(q/2)/Math.max(H,1e-6))}function k(){let E=y();ee.aspect=E,ee.fov=I(U,E)*180/Math.PI,ee.updateProjectionMatrix()}function K(E,H){let q=y(),te=Math.max(E,1e-6)*Math.tan(H/2),me=te*q;G.left=-me,G.right=me,G.top=te,G.bottom=-te,G.updateProjectionMatrix()}function Z(){let E=y(),q=Math.max(G.top,1e-6)*E;G.left=-q,G.right=q,G.updateProjectionMatrix()}function pe(E,H){let q=y(),te=Math.max(E,1e-6),Ge=Math.max(H,1e-6),Ne=Ge*q;Ne<te&&(Ne=te,Ge=Ne/Math.max(q,1e-6)),B=1,G.left=-Ne,G.right=Ne,G.top=Ge,G.bottom=-Ge,G.updateProjectionMatrix(),de()}function ae(E){let H=Math.max(E,1e-4),q=Ze.copy(W.position).sub(le.target);q.lengthSq()<1e-12?q.set(0,0,1):q.normalize(),W.position.copy(le.target).addScaledVector(q,H)}function z(E){E!==W&&(E.position.copy(W.position),E.quaternion.copy(W.quaternion),E.up.copy(W.up),E.near=W.near,E.far=W.far,W=E,le.object=W,le.update())}function he(){let E=Math.abs(Ct)>.05||Math.abs(En)>.05||Math.abs(Kt-1)>.001?Kt:1;return B*E}function de(){W.zoom=he(),W.updateProjectionMatrix()}function Ee(){if(V||Ve||!W.isOrthographicCamera)return;let E=Math.abs(Ct)>.05||Math.abs(En)>.05||Math.abs(Kt-1)>.001?Kt:1;B=Math.max(W.zoom/Math.max(E,1e-6),1e-6)}function Ce(){if(Q==="ortho")return;Y=U;let E=W.position.distanceTo(le.target),H=I(U,y());K(E,H),B=1,we(()=>{V=!0,z(G),Q="ortho",de(),V=!1}),Me()}function Pe(E){if(Q!=="ortho")return;let H=ve(E??Y),q=Math.max(G.top,1e-6)/Math.max(B,1e-6),te=I(H,y()),me=q/Math.max(Math.tan(te/2),1e-8);U=H,Y=H,B=1,we(()=>{V=!0,z(ee),Q="perspective",k(),ae(me),de(),Ae(),le.update(),V=!1}),Me()}function be(E,H={}){let q=ve(E);if(Q==="ortho"){Pe(q);return}let te=y(),me=I(U,te),Ge=I(q,te),Ne=W.position.distanceTo(le.target);U=q,Y=q,we(()=>{if(k(),H.reframe!==!1){let Qe=Math.tan(me/2)/Math.max(Math.tan(Ge/2),1e-8);ae(Ne*Qe),Ae(),le.update()}de()}),Me()}function Ye(){Q==="ortho"?Pe(Y):Ce()}function ve(E){return Math.min(b,Math.max(L,E))}function ze(){return Q==="ortho"?N:U}function O(E){return E>b?"ISO":`${Math.round(E)}\xB0`}function Me(){xe&&(xe.value=ze()),oe&&(oe.textContent=Q==="ortho"?"ISO":`${Math.round(U)}\xB0`),xe?.refresh()}function re(E){if(E>b){Q!=="ortho"?Ce():Me();return}let H=ve(E);Q==="ortho"?Pe(H):be(H,{reframe:!0})}function fe(){let E=document.getElementById("fov");if(!E)return;E.replaceChildren();let H=document.createElement("div");H.className="fov-row";let q=document.createElement("span");q.className="fov-label",q.textContent=Lt("ui.fov"),oe=document.createElement("span"),oe.className="fov-value",oe.textContent=`${Math.round(U)}\xB0`,xe=Hc({min:L,max:N,step:1,value:ze(),ariaLabel:"Field of view",formatAriaValue:O,onInput:Ne=>re(Ne),onChange:Ne=>re(Ne),onTap:()=>Ye()}),xe.el.classList.add("fov-range");let te=document.createElement("div");te.className="fov-detent",te.setAttribute("aria-hidden","true");let me=(b-L)/(N-L);te.style.left=`${me*100}%`,xe.el.querySelector(".coop-range-track")?.append(te),H.append(q,xe.el,oe),E.append(H),Me()}function Ae(){let E=Math.max(ge.x,ge.y,ge.z,.01),H=W.position.distanceTo(le.target),q=Math.round(Math.min(Math.max(H/200,E/5e3,.001),H/10)*1e4)/1e4,te=Math.round(Math.max(H+E*4,E*8,10)*1e4)/1e4;W.near===q&&W.far===te||(W.near=q,W.far=te,W.updateProjectionMatrix())}function we(E){Ve=!0;try{E()}finally{requestAnimationFrame(()=>{Ve=!1})}}k();function Ke(){ie&&(we(()=>{T(),le.target.copy(Se);let H=Math.max(ge.x,ge.y,ge.z,1)*1.85;W.position.set(Se.x+H*.75,Se.y+H*.55,Se.z+H*.75),Ae(),le.update()}),ut())}function ht(){for(let E of f.keys())d.set(E,1),g.set(E,1),Ss(f.get(E)||[],1,{edgeMode:h});T(),nt(),Cn()}function Rt(E){if(ie){if(rs=null,ce.clear(),ht(),fr(),dr(),ee.up.set(0,1,0),G.up.set(0,1,0),W.up.set(0,1,0),E==="iso"){Ke();return}we(()=>{T();let H=Math.max(ge.x,ge.y,ge.z,1),q=H*1.85,te=Se;E==="front"?W.position.set(te.x,te.y,te.z+q):E==="top"?W.position.set(te.x,te.y+q,te.z+H*.01):E==="side"&&W.position.set(te.x-q,te.y,te.z),le.target.copy(te),Ae(),le.update()}),ut()}}function Fe(E){if(!ie||!E)return;if(rs=E,E.opacityDefault!=null||E.opacity&&typeof E.opacity=="object"){let te=E.opacityDefault!=null?Number(E.opacityDefault):1,me=E.opacity&&typeof E.opacity=="object"?E.opacity:{},Ge=km(me,o);for(let Ne of f.keys()){let Qe=Object.prototype.hasOwnProperty.call(Ge,Ne)?Ge[Ne]:te;Et(Ne,Qe,{skipUi:!0,skipClip:!0})}T(),nt(),Cn()}if(Object.prototype.hasOwnProperty.call(E,"cuts")){let te=Array.isArray(E.cuts)?E.cuts:[];D.length=0;for(let me of te){let Ge=me?.normal;if(!Array.isArray(Ge)||Ge.length<3)continue;let Ne=new R(Number(Ge[0])||0,Number(Ge[1])||0,Number(Ge[2])||0);if(Ne.lengthSq()<1e-12)continue;Ne.normalize();let Qe=null,Ft=Math.min(1,Math.max(0,Number(me.t)||0));if(Array.isArray(me.anchor)&&me.anchor.length>=3){Qe=wa(me.anchor);let{near:Nn,far:On}=He(Ne),Rs=Qe.dot(Ne);Ft=Math.min(1,Math.max(0,(Rs-Nn)/Math.max(On-Nn,1e-6)))}D.push({id:St++,normal:Ne,t:Ft,anchor:Qe,locked:!0,label:Le(Ne)})}Be=!1,nt(),qe(),Vt(),P?.refreshPartialHeight()}E.projection==="ortho"?Q!=="ortho"?Ce():Me():E.hFovDeg!=null&&Number.isFinite(Number(E.hFovDeg))&&be(Number(E.hFovDeg),{reframe:!1});let q=E.camera;q&&Array.isArray(q.target)&&Array.isArray(q.position)&&we(()=>{V=!0;let te=new R(0,1,0);Array.isArray(q.up)&&q.up.length>=3&&(te.set(Number(q.up[0])||0,Number(q.up[1])||0,Number(q.up[2])||0),te.lengthSq()<1e-12?te.set(0,1,0):te.normalize()),ee.up.copy(te),G.up.copy(te),W.up.copy(te),le.target.set(Number(q.target[0])||0,Number(q.target[1])||0,Number(q.target[2])||0),W.position.set(Number(q.position[0])||0,Number(q.position[1])||0,Number(q.position[2])||0),W.lookAt(le.target),Q==="ortho"&&Array.isArray(q.orthoFit)&&q.orthoFit.length>=2&&pe(Number(q.orthoFit[0])||.1,Number(q.orthoFit[1])||.1),T(),Ae(),le.update(),V=!1}),ut(),ce.setSpec(E),fr(),dr()}function Et(E,H,q={}){let te=Math.max(0,Math.min(1,Number(H)||0));d.set(E,te),te>0&&g.set(E,te),q.detach&&m.add(E),Ss(f.get(E)||[],te,{edgeMode:h}),!q.skipClip&&(T(),nt(),q.skipUi||Cn())}function Zt(E,H,q){let te=Math.max(0,Math.min(1,Number(H)||0));q&&_.set(q,te);for(let me of E)m.has(me)||(d.set(me,te),te>0&&g.set(me,te),Ss(f.get(me)||[],te,{edgeMode:h}));T(),nt(),Cn()}function ts(E,H,q){m.delete(E);let te=q.filter(Ge=>!m.has(Ge)),me=nn(H,te);d.set(E,me),me>0&&g.set(E,me),Ss(f.get(E)||[],me,{edgeMode:h}),T(),nt(),Cn()}function ns(E){if(!E.length)return 1;let H=d.get(E[0])??1;for(let q=1;q<E.length;q++){let te=d.get(E[q])??1;if(Math.abs(te-H)>1e-4)return NaN}return H}function nn(E,H){let q=H.filter(me=>!m.has(me)),te=ns(q.length?q:H);return Number.isNaN(te)?_.get(E)??1:te}function Cn(){for(let[E,H]of p)H.value=(d.get(E)??1)*100;for(let[E,H]of M){let q=(H.el.dataset.leaves||"").split(",").map(te=>te.trim()).filter(Boolean);H.value=nn(E,q)*100}for(let[E,H]of v){let q=m.has(E);H.hidden=!q,H.setAttribute("aria-hidden",q?"false":"true")}}function Qn(){return D.filter(E=>E.locked).map(E=>Ot(E))}function di(){let E=new Oe;return A.getDrawingBufferSize(E),{x:E.x,y:E.y}}function Wn(){if(f.size){if(h===rr){Tg(ie);return}Cg(f,!0,{clippingPlanes:Qn(),resolution:di(),edgeMode:h})}}function is(){f.size&&(Vm(f,u,{isDark:c,clippingPlanes:Qn(),opacityByLabel:d,edgeMode:h}),u===va?(A.toneMapping=sa,A.toneMappingExposure=1.05):(A.toneMapping=ui,A.toneMappingExposure=1),Wn(),xf(f,Qn()))}function Ts(){let E=document.getElementById("mats");if(E){E.replaceChildren();for(let[H,q]of[[Oc,"ui.solid"],[va,"ui.realistic"]]){let te=document.createElement("button");te.type="button",te.dataset.mode=H,te.textContent=Lt(q),H===u&&te.classList.add("is-active"),te.addEventListener("click",()=>{u=H,Xm(H),E.querySelectorAll("button").forEach(me=>{me.classList.toggle("is-active",me.dataset.mode===H)}),is()}),E.append(te)}}}function oo(){let E=document.getElementById("edges");if(E){E.replaceChildren();for(let[H,q]of[[rr,"ui.edgesNone"],[or,"ui.edgesTransparent"],[Sa,"ui.edgesOpaque"]]){let te=document.createElement("button");te.type="button",te.dataset.edgeMode=H,te.textContent=Lt(q),H===h&&te.classList.add("is-active"),te.addEventListener("click",()=>{h=H,Rf(H),E.querySelectorAll("button").forEach(me=>{me.classList.toggle("is-active",me.dataset.edgeMode===H)}),Wn(),Zf()}),E.append(te)}}}function ao(E,H,q,te){let me=document.createElement("div");me.className="part-opacity-wrap";let Ge,Ne=()=>{if(Ge.value/100>0)te(0);else{let Ft=q();te(Ft>0?Ft:1)}};return Ge=Hc({min:0,max:100,step:1,value:Math.round(H),ariaLabel:E,formatAriaValue:Qe=>`${Math.round(Qe)}%`,thumbScrubOnly:!0,onInput:Qe=>te(Qe/100),onChange:Qe=>te(Qe/100),onTap:Ne}),Ge.el.classList.add("part-opacity"),me.append(Ge.el),{wrap:me,range:Ge}}function Aa(){let E=document.getElementById("parts");if(!E)return;E.style.removeProperty("--part-name-col");let H=0;for(let q of E.querySelectorAll(".part-name")){if(q.closest(".part-children")?.hidden)continue;let me=q.style.width;q.style.width="max-content",H=Math.max(H,Math.ceil(q.getBoundingClientRect().width)),q.style.width=me}H>0&&E.style.setProperty("--part-name-col",`${H}px`)}function Ra(E,H,q,te=null){if(E.type==="leaf"){let pt=document.createElement("div");pt.className="part-row part-leaf",pt.style.setProperty("--part-depth",String(q)),pt.dataset.leaf=E.id;let Ua=document.createElement("span");Ua.className="part-disclosure-spacer",Ua.setAttribute("aria-hidden","true");let Na=document.createElement("span");Na.className="part-name",Na.textContent=E.label;let{wrap:ed,range:td}=ao(`${E.label} opacity`,(d.get(E.id)??1)*100,()=>g.get(E.id)??1,Oa=>Et(E.id,Oa,{detach:!!te}));td.el.dataset.leaf=E.id,p.set(E.id,td);let ei=null;if(te){ei=document.createElement("button"),ei.type="button",ei.className="part-sync",ei.textContent=Lt("ui.sync"),ei.setAttribute("aria-label",`${Lt("ui.sync")} ${E.label}`);let Oa=m.has(E.id);ei.hidden=!Oa,ei.setAttribute("aria-hidden",Oa?"false":"true"),ei.addEventListener("click",d0=>{d0.stopPropagation(),ts(E.id,te.groupId,te.leafIds)}),v.set(E.id,ei)}ei?pt.append(Ua,Na,ed,ei):pt.append(Ua,Na,ed),H.append(pt);return}let me=Fc(E),Ge=document.createElement("div");Ge.className="part-group",Ge.dataset.group=E.id;let Ne=document.createElement("div");Ne.className="part-row part-group-row",Ne.style.setProperty("--part-depth",String(q)),Ne.setAttribute("role","button"),Ne.tabIndex=0;let Qe=document.createElement("button");Qe.type="button",Qe.className="part-disclosure",Qe.setAttribute("aria-label",`Expand ${E.label}`),Qe.setAttribute("aria-expanded","false");let Ft=document.createElement("span");Ft.className="part-name",Ft.textContent=E.label;let Nn=nn(E.id,me)||1;Nn<=0&&(Nn=1);let{wrap:On,range:Rs}=ao(`${E.label} opacity`,nn(E.id,me)*100,()=>Nn,pt=>{pt>0&&(Nn=pt),Zt(me,pt,E.id)});Rs.el.dataset.group=E.id,Rs.el.dataset.leaves=me.join(","),M.set(E.id,Rs),On.addEventListener("click",pt=>pt.stopPropagation()),On.addEventListener("pointerdown",pt=>pt.stopPropagation());let ho=document.createElement("div");ho.className="part-children",ho.hidden=!0;function Qf(pt){pt?x.add(E.id):x.delete(E.id),ho.hidden=!pt,Ge.classList.toggle("is-expanded",pt),Qe.setAttribute("aria-expanded",pt?"true":"false"),Qe.setAttribute("aria-label",pt?`Collapse ${E.label}`:`Expand ${E.label}`),requestAnimationFrame(()=>Aa())}function Jc(){Qf(!x.has(E.id))}Qe.addEventListener("click",pt=>{pt.stopPropagation(),Jc()}),Ne.addEventListener("click",pt=>{On.contains(pt.target)||Jc()}),Ne.addEventListener("keydown",pt=>{(pt.key==="Enter"||pt.key===" ")&&(pt.preventDefault(),Jc())}),Ne.append(Qe,Ft,On),Ge.append(Ne,ho),H.append(Ge);let f0={groupId:E.id,leafIds:me};for(let pt of E.children)Ra(pt,ho,q+1,f0);Qf(x.has(E.id))}function Ca(){let E=document.getElementById("parts");if(!E)return;E.replaceChildren(),p.clear(),M.clear(),v.clear();for(let q of f.keys())d.has(q)||(d.set(q,1),Ss(f.get(q)||[],1,{edgeMode:h})),g.has(q)||g.set(q,1);let H=zm(f.keys(),s,Lt);o=H;for(let q of H)Ra(q,E,0,null);requestAnimationFrame(()=>Aa())}let ss="iso",rs=null,lo=!1;function w(E){let H=String(E||"").trim();if(!H)return null;for(let q of n)if(String(q?.id||"").trim()===H)return q;return null}function X(){let E=ss;E&&E.startsWith("scene:")?t0(E.slice(6)):t0(null)}function ne(){return document.querySelectorAll("#cams button, #scenes button")}function se(){ss!=null&&(ss=null,ne().forEach(E=>{E.classList.remove("is-active")}),X())}function $(){let E=document.getElementById("scenes");if(!E){let H=document.getElementById("cams");E=document.createElement("div"),E.id="scenes",E.className="scene-list",H?.insertAdjacentElement("afterend",E)}return E}function _e(){let E=document.getElementById("cams");if(!E)return;E.replaceChildren();let H=$();H.replaceChildren();function q(te,me,Ge,Ne){let Qe=document.createElement("button");Qe.type="button",Qe.dataset.preset=me,Qe.textContent=Ge,me===ss&&Qe.classList.add("is-active"),Qe.addEventListener("click",()=>{ss=me,ne().forEach(Ft=>{Ft.classList.toggle("is-active",Ft.dataset.preset===me)}),Ne(),X()}),te.append(Qe)}for(let[te,me]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])q(E,te,Lt(me),()=>Rt(te));for(let te of n){let me=String(te?.id||"").trim();if(!me)continue;let Ge=Lt(`scene.${me}`);q(H,`scene:${me}`,Ge,()=>Fe(te))}H.hidden=H.childElementCount===0}function Re(E=Ze){return E.copy(le.target).sub(W.position).normalize()}function Le(E){let H=Math.hypot(E.x,E.z),q=(Math.atan2(E.x,E.z)*180/Math.PI+360)%360,te=Math.atan2(E.y,H)*180/Math.PI,me=Math.abs(te).toFixed(0),Ge=te>=0?"\u2191":"\u2193";return`${q.toFixed(0)}\xB0 / ${me}\xB0${Ge}`}function De(){return D.some(E=>!E.locked)}function Xe(){return D.filter(E=>E.locked)}function qe(){De()||!(Xe().length===0||Be)||D.push({id:St++,normal:new R(0,0,1),t:0,locked:!1,label:Lt("ui.cut")})}function ke(E){let H=document.getElementById("cuts");if(!H)return;let q=H.querySelector(`[data-cut-id="${E.id}"]`);if(!q){Vt();return}let te=q.querySelector(".cut-label");if(te&&(te.textContent=E.locked?E.label:Lt("ui.cut")),E.locked&&!q.querySelector(".cut-remove")){let me=document.createElement("button");me.type="button",me.className="cut-remove",me.setAttribute("aria-label",Lt("ui.removeSection")),me.textContent="\xD7",me.addEventListener("click",()=>lt(E.id)),q.append(me)}}function at(E){E.locked||(Re(E.normal),E.locked=!0,E.label=Le(E.normal),Be=!1,nt(),ke(E))}function ut(){Xe().length!==0&&(De()||(Be=!0,!Ie&&(qe(),Vt())))}function Pt(){Be&&(De()||Xe().length!==0&&(qe(),Vt()))}function wt(E,H){let q=D.find(te=>te.id===E);q&&(q.locked||at(q),q.t=Math.min(1,Math.max(0,Number(H))),q.anchor=null,nt())}function lt(E){let H=D.findIndex(q=>q.id===E);H<0||(D.splice(H,1),Xe().length===0?(Be=!1,De()||qe()):Be&&!De()&&qe(),nt(),Vt(),P?.refreshPartialHeight())}function He(E){if(T(),ye.isEmpty())return{near:-1,far:1};let H=ye.min,q=ye.max,te=1/0,me=-1/0;for(let Qe=0;Qe<2;Qe++)for(let Ft=0;Ft<2;Ft++)for(let Nn=0;Nn<2;Nn++){Je.set(Qe?q.x:H.x,Ft?q.y:H.y,Nn?q.z:H.z);let On=Je.dot(E);On<te&&(te=On),On>me&&(me=On)}let Ne=Math.max(me-te,1e-6)*.02;return{near:te-Ne,far:me+Ne}}function Ot(E){if(E.anchor)return new rn().setFromNormalAndCoplanarPoint(E.normal,E.anchor);let{near:H,far:q}=He(E.normal),te=H+(q-H)*E.t;return We.copy(E.normal).multiplyScalar(te),new rn().setFromNormalAndCoplanarPoint(E.normal,We)}function nt(){let E=Qn();ie&&(ie.traverse(H=>{if(!H.isMesh||!H.material||Gn(H)||kc(H))return;let q=Array.isArray(H.material)?H.material:[H.material];for(let te of q)te.clippingPlanes=E,te.clipIntersection=!1,te.needsUpdate=!0}),xf(f,E),h!==rr?Wn():Rg(ie,E))}function Vt(){let E=document.getElementById("cuts");if(E){E.replaceChildren();for(let H of D){let q=document.createElement("div");q.className="cut-row",q.dataset.cutId=String(H.id);let te=document.createElement("span");te.className="cut-label",te.textContent=H.locked?H.label:Lt("ui.cut");let me=()=>{Ie&&(Ie=!1,Pt())},Ge=Hc({min:0,max:1,step:.001,value:H.t,ariaLabel:H.locked?`Section ${H.label}`:"Section cut",onScrubStart:()=>{Ie=!0,H.locked||at(H)},onScrubEnd:me,onInput:Ne=>wt(H.id,Ne),onChange:Ne=>{wt(H.id,Ne),me()}});if(q.append(te,Ge.el),H.locked){let Ne=document.createElement("button");Ne.type="button",Ne.className="cut-remove",Ne.setAttribute("aria-label",Lt("ui.removeSection")),Ne.textContent="\xD7",Ne.addEventListener("click",()=>lt(H.id)),q.append(Ne)}E.append(q)}P?.refreshPartialHeight()}}le.addEventListener("start",()=>{se()}),le.addEventListener("change",()=>{Ee()}),le.addEventListener("end",()=>{Ve||ut()});let Kt=1,Ct=0,En=0,vt=1,mn=0,gn=0,Gt=1,jt=0,As=0,Pn=0,n0=280;function i0(){let E=Math.max(1,i.clientWidth),H=Math.max(1,i.clientHeight);if(!P)return{zoom:1,offX:0,offY:0,w:E,h:H};let{bottom:q,right:te}=P.getSafeInsets();if(q<=0&&te<=0)return{zoom:1,offX:0,offY:0,w:E,h:H};let me=Math.max(1,E-te),Ge=Math.max(1,H-q),Ne=Math.min(me/E,Ge/H),Qe=te/2,Ft=q/2;return{zoom:Ne,offX:Qe,offY:Ft,w:E,h:H}}function Hf(E,H){we(()=>{V=!0,Math.abs(Ct)>.05||Math.abs(En)>.05||Math.abs(Kt-1)>.001?(W.zoom=B*Kt,W.setViewOffset(E,H,Ct,En,E,H)):(W.clearViewOffset(),W.zoom=B,Kt=1,Ct=0,En=0),W.updateProjectionMatrix(),V=!1})}function Vf(E=!0){let{zoom:H,offX:q,offY:te,w:me,h:Ge}=i0();if(vt=H,mn=q,gn=te,!E){Kt=H,Ct=q,En=te,Pn=0,Hf(me,Ge);return}Gt=Kt,jt=Ct,As=En,Pn=performance.now()}function s0(E){if(!Pn)return;let H=Math.min(1,(E-Pn)/n0),q=1-(1-H)**3;Kt=Gt+(vt-Gt)*q,Ct=jt+(mn-jt)*q,En=As+(gn-As)*q;let te=Math.max(1,i.clientWidth),me=Math.max(1,i.clientHeight);Hf(te,me),H>=1&&(Pn=0)}function Pa(){let E=Math.max(1,i.clientWidth),H=Math.max(1,i.clientHeight);A.setSize(E,H,!1),Q==="perspective"?k():Z(),Vf(!1);let q=di();Ag(ie,q.x,q.y)}Pa(),window.addEventListener("resize",Pa),P?.onDetentChange(()=>{Vf(!0)});let In=document.getElementById("ar"),sn=document.getElementById("measure"),co=!1,Ia=()=>Lt("ui.measure");function jc(){let E=document.getElementById("locale");if(E){E.replaceChildren();for(let[H,q]of[["cs","CS"],["en","EN"]]){let te=document.createElement("button");te.type="button",te.dataset.locale=H,te.textContent=q,H===Vc()&&te.classList.add("is-active"),te.addEventListener("click",()=>{hg(H)}),E.append(te)}}}function r0(){bf(document),In&&!co&&(In.textContent=Lt("ui.ar")),sn&&(sn.textContent=Ia()),fr(),dr(),ce.relocalize();try{Ts(),oo(),_e(),fe(),Ca(),Vt(),jc()}catch(E){console.error("relocalizeUi",E);try{jc()}catch{}}P?.refreshPartialHeight()}fg(()=>r0());function o0(){In&&(In.hidden=!1,co||(In.textContent=Lt("ui.ar")))}function a0(){sn&&(sn.hidden=!1,sn.textContent=Ia())}let ur=document.getElementById("drawing"),os=document.getElementById("labels"),hr=!0;function fr(){ur&&(ur.hidden=!1,ur.disabled=!rs||Da,ur.textContent=Lt("ui.drawing"))}function dr(){if(!os)return;let E=!!rs;os.hidden=!E,os.disabled=!E,os.setAttribute("aria-pressed",hr?"true":"false"),os.classList.toggle("is-active",E&&hr),os.textContent=Lt("ui.labels")}function l0(){try{let E=new URLSearchParams(window.location.search).get("m");if(E&&E.trim())return E.trim()}catch{}return"model"}function Gf(){Pn=0,Kt=1,Ct=0,En=0,vt=1,mn=0,gn=0,W.clearViewOffset(),W.zoom=B,W.updateProjectionMatrix()}let Da=!1;async function Wf(){if(Da||!ie||!rs)return null;Da=!0,fr(),lo=!0;let E=rs,H=h,q=a.background,te=A.getPixelRatio(),me=i.style.width,Ge=i.style.height,Ne=P?.getDetent?.()??null,Qe=pi?.isActive()??!1,Ft=ce.isVisible();try{Qe&&pi?.setActive(!1),ce.setVisible(!0),P?.setDetent("closed"),i.style.width=`${2400}px`,i.style.height=`${1697}px`,A.setPixelRatio(1),Pa(),Gf(),h=Sa,Wn(),a.background=new Ue(16777215),ce.setInk("plate"),Fe(E),Gf(),ce.update(),C.render(a,W,ie,$f,{quality:"high"});let{png:Nn,pdf:On}=await Qg(i),Rs=`${l0()}_${String(E.id||"scene")}`;return{png:Nn,pdf:On,stem:Rs}}finally{i.style.width=me,i.style.height=Ge,A.setPixelRatio(te),h=H,a.background=q,ce.setInk("viewer"),ce.setVisible(Ft),Ne&&P?.setDetent(Ne),Pa(),Wn(),E&&Fe(E),Qe&&pi?.setActive(!0),lo=!1,Da=!1,fr(),dr(),requestAnimationFrame(La)}}window.blueprintCaptureDrawing=async()=>{let E=await Wf();return E?{png:E.png,pdf:E.pdf,stem:E.stem}:null},os&&os.addEventListener("click",()=>{hr=!hr,ce.setVisible(hr),dr()}),ur&&ur.addEventListener("click",()=>{(async()=>{let E=await Wf();E&&(zf(E.png,`${E.stem}.png`),zf(E.pdf,`${E.stem}.pdf`))})()});let pi=null;a&&(pi=$g({scene:a,canvas:i,getCamera:()=>W,controls:le,getRoot:()=>ie,getClipPlanes:()=>Qn(),onLiveLength:E=>{sn&&(E?(sn.textContent=E,sn.classList.add("is-live")):(sn.textContent=Ia(),sn.classList.remove("is-live")))},onActiveChange:E=>{uo=!0,sn&&(sn.classList.toggle("is-active",E),sn.setAttribute("aria-pressed",E?"true":"false"),E||(sn.textContent=Ia(),sn.classList.remove("is-live")))}})),sn&&sn.addEventListener("click",()=>{pi&&pi.setActive(!pi.isActive())});function Xf(){if(!ie)return null;ie.updateWorldMatrix(!0,!0);let E=Xe().map(me=>Ot(me)),H=new Dt;if(H.name="ARContent",ie.traverse(me=>{if(!me.isMesh||!me.visible||Gn(me))return;let Ge=tg(me,E);Ge&&H.add(Ge)}),!H.children.length)return null;H.updateMatrixWorld(!0);let q=yf(H),te=new Dt;return te.name="ARExport",te.add(H),og(H,q),te.userData.arPlacement=q,te}async function qf(){if(co||!ie)return;co=!0;let E=In?.textContent||"AR";In&&(In.disabled=!0,In.textContent="\u2026");try{let H=Xf();if(!H)throw new Error("Nothing visible to export. Show at least one part.");let te=await new Nc().parseAsync(H,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),me=new Blob([te],{type:"model/vnd.usdz+zip"}),Ge=URL.createObjectURL(me),Ne=document.createElement("a");Ne.rel="ar",Ne.href=Ge,Ne.download="view.usdz";let Qe=document.createElement("img");Qe.alt="AR",Ne.appendChild(Qe),document.body.appendChild(Ne),Ne.click(),Ne.remove(),setTimeout(()=>URL.revokeObjectURL(Ge),6e4)}catch(H){j(String(H?.message||H))}finally{co=!1,In&&(In.disabled=!1,In.textContent=E)}}In&&In.addEventListener("click",()=>{qf()});let Yf={scene:a,get camera(){return W},controls:le,parts:f,partOpacity:d,cuts:D,scenes:n,setPartOpacity:Et,setCameraPreset:Rt,applyScene:Fe,setHFov:be,toggleFovIso:Ye,get projection(){return Q},get hFovDeg(){return U},setCutT:wt,removeCut:lt,frameIso:Ke,openArQuickLook:qf,buildArExportScene:Xf,getPeelQuality:()=>"fast"};window.BlueprintsViewer=Yf;function $f(){for(let E of d.values())if(E<1-1e-4)return!0;return!1}function Zf(){for(let[E,H]of f){let q=d.get(E)??1;Ss(H,q,{edgeMode:h})}}let Kf=!1,uo=!0,jf=null,Jf=null;i.addEventListener("pointermove",()=>{pi?.isActive()&&(uo=!0)}),i.addEventListener("pointerup",()=>{pi?.isActive()&&(uo=!0)});function c0(){let E=W.view;return[W.position.x,W.position.y,W.position.z,W.quaternion.x,W.quaternion.y,W.quaternion.z,W.quaternion.w,W.zoom,W.near,W.far,W.fov||0,W.left,W.right,W.top,W.bottom,le.target.x,le.target.y,le.target.z,i.width,i.height,E&&E.enabled?1:0,E?E.offsetX:0,E?E.offsetY:0,E?E.fullWidth:0,E?E.fullHeight:0,Q==="ortho"?1:0]}function u0(){let E=c0(),H=jf,q=!H||H.length!==E.length;if(!q&&H){for(let te=0;te<E.length;te++)if(E[te]!==H[te]){q=!0;break}}return q&&(jf=E),q}function h0(){let E=[u,h,Vc(),hr?"1":"0",String(l)],H=a?.background;H&&H.isColor&&E.push(H.getHexString());for(let[q,te]of d)E.push(q,Number(te).toFixed(3));for(let q of D)E.push(String(q.id),q.locked?"1":"0",Number(q.t).toFixed(4));return E.join("|")}function La(){if(lo)return;let E=performance.now();s0(E),le.update(),ie&&Ae();let H=h0(),q=H!==Jf,te=u0();if(!uo&&!q&&!te){requestAnimationFrame(La);return}uo=!1,Jf=H,pi?.update(),ce.update();let me=C.render(a,W,ie,$f,{quality:"fast"});Kf&&!me&&Zf(),Kf=me,requestAnimationFrame(La)}return La(),Yf}return y0(TE);})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
