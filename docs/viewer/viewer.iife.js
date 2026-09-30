var BlueprintsViewerBundle=(()=>{var lu=Object.defineProperty;var A0=Object.getOwnPropertyDescriptor;var R0=Object.getOwnPropertyNames;var C0=Object.prototype.hasOwnProperty;var P0=(i,e)=>{for(var t in e)lu(i,t,{get:e[t],enumerable:!0})},I0=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of R0(e))!C0.call(i,s)&&s!==t&&lu(i,s,{get:()=>e[s],enumerable:!(n=A0(e,s))||n.enumerable});return i};var D0=i=>I0(lu({},"__esModule",{value:!0}),i);var FE={};P0(FE,{mountViewer:()=>OE});var Nl="172",ys={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},np=0,Zu=1,ip=2;var $u=1,sp=2,Ci=3,In=0,cn=1,bt=2,qn=0,ri=1,Ku=2,ju=3,Ju=4,Ol=5,Xn=100,rp=101,op=102,ap=103,lp=104,ia=200,Ms=201,cp=202,up=203,Ur=204,Fs=205,hp=206,sa=207,fp=208,dp=209,pp=210,mp=211,gp=212,_p=213,xp=214,Fl=0,Bl=1,zl=2,Bs=3,kl=4,Hl=5,Vl=6,Gl=7,Qu=0,yp=1,vp=2,ui=0,Mp=1,bp=2,Sp=3,ra=4,Ep=5,wp=6,Tp=7,Ou="attached",Ap="detached",eh=300,Xs=301,qs=302,Wl=303,Xl=304,oa=306,oi=1e3,vi=1001,Nr=1002,Wt=1003,ql=1004;var Ys=1005;var Xt=1006,Wr=1007;var hi=1008;var Yn=1009,th=1010,nh=1011,Xr=1012,Yl=1013,bs=1014,Ln=1015,Ji=1016,Zl=1017,$l=1018,Zs=1020,ih=35902,sh=1021,rh=1022,tn=1023,oh=1024,ah=1025,Os=1026,zs=1027,Kl=1028,jl=1029,lh=1030,Jl=1031;var Ql=1033,aa=33776,la=33777,ca=33778,ua=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,lc=37809,cc=37810,uc=37811,hc=37812,fc=37813,dc=37814,pc=37815,mc=37816,gc=37817,_c=37818,xc=37819,yc=37820,vc=37821,ha=36492,Mc=36494,bc=36495,ch=36283,Sc=36284,Ec=36285,wc=36286;var ks=2300,Hs=2301,_l=2302,Fu=2400,Bu=2401,zu=2402,Rp=2500;var uh=0,fa=1,qr=2,Cp=3200,Pp=3201;var hh=0,Ip=1,fi="",ft="srgb",an="srgb-linear",To="linear",_t="srgb";var Ns=7680;var ku=519,Dp=512,Lp=513,Up=514,fh=515,Np=516,Op=517,Fp=518,Bp=519,xl=35044;var dh="300 es",Mi=2e3,Ao=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=1234567,Dr=Math.PI/180,Vs=180/Math.PI;function si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function ph(i,e){return(i%e+e)%e}function L0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function U0(i,e,t){return i!==e?(t-i)/(e-i):0}function wo(i,e,t){return(1-t)*i+t*e}function N0(i,e,t,n){return wo(i,e,1-Math.exp(-t*n))}function O0(i,e=1){return e-Math.abs(ph(i,e*2)-e)}function F0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function B0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function z0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function k0(i,e){return i+Math.random()*(e-i)}function H0(i){return i*(.5-Math.random())}function V0(i){i!==void 0&&(pd=i);let e=pd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function G0(i){return i*Dr}function W0(i){return i*Vs}function X0(i){return(i&i-1)===0&&i!==0}function q0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Y0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Z0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $s={DEG2RAD:Dr,RAD2DEG:Vs,generateUUID:si,clamp:it,euclideanModulo:ph,mapLinear:L0,inverseLerp:U0,lerp:wo,damp:N0,pingpong:O0,smoothstep:F0,smootherstep:B0,randInt:z0,randFloat:k0,randFloatSpread:H0,seededRandom:V0,degToRad:G0,radToDeg:W0,isPowerOfTwo:X0,ceilPowerOfTwo:q0,floorPowerOfTwo:Y0,setQuaternionFromProperEuler:Z0,normalize:gt,denormalize:ii},Be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],v=s[4],y=s[7],I=s[2],R=s[5],P=s[8];return r[0]=o*_+a*M+l*I,r[3]=o*m+a*v+l*R,r[6]=o*p+a*y+l*P,r[1]=c*_+u*M+h*I,r[4]=c*m+u*v+h*R,r[7]=c*p+u*y+h*P,r[2]=f*_+d*M+g*I,r[5]=f*m+d*v+g*R,r[8]=f*p+d*y+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cu.makeScale(e,t)),this}rotate(e){return this.premultiply(cu.makeRotation(-e)),this}translate(e,t){return this.premultiply(cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cu=new tt;function mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zp(){let i=Or("canvas");return i.style.display="block",i}var md={};function Ks(i){i in md||(md[i]=!0,console.warn(i))}function kp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Hp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var gd=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_d=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){let i={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?To:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[an]:{primaries:e,whitePoint:n,transfer:To,toXYZ:gd,fromXYZ:_d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:gd,fromXYZ:_d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),i}var ct=$0();function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mr,yl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mr===void 0&&(mr=Or("canvas")),mr.width=e.width,mr.height=e.height;let n=mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},K0=0,Ro=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uu(s[o].image)):r.push(uu(s[o]))}else r=uu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function uu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var j0=0,Yt=class i extends bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vi,s=vi,r=Xt,o=hi,a=tn,l=Yn,c=i.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=si(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=eh;Yt.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(d+1)/2,I=(p+1)/2,R=(u+f)/4,P=(h+_)/4,N=(g+m)/4;return v>y&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=P/n):y>I?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=N/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=N/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Yt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new Ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Co=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ml=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let I=Math.sqrt(v),R=Math.atan2(I,p*M);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}let y=a*M;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+_*y,m===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hu=new C,xd=new Tn,Lt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Ha.subVectors(this.max,po),gr.subVectors(e.a,po),_r.subVectors(e.b,po),xr.subVectors(e.c,po),ls.subVectors(_r,gr),cs.subVectors(xr,_r),Is.subVectors(gr,xr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Is.z,Is.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Is.z,0,-Is.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Is.y,Is.x,0];return!fu(t,gr,_r,xr,Ha)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,gr,_r,xr,Ha))?!1:(Va.crossVectors(ls,cs),t=[Va.x,Va.y,Va.z],fu(t,gr,_r,xr,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new C,new C,new C,new C,new C,new C,new C,new C],ei=new C,ka=new Lt,gr=new C,_r=new C,xr=new C,ls=new C,cs=new C,Is=new C,po=new C,Ha=new C,Va=new C,Ds=new C;function fu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ds.fromArray(i,r);let a=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),u=n.dot(Ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var J0=new Lt,mo=new C,du=new C,Jt=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):J0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);let t=mo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(du)),this.expandByPoint(mo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new C,pu=new C,Ga=new C,us=new C,mu=new C,Wa=new C,gu=new C,Si=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pu.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),us.copy(this.origin).sub(pu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ga),a=us.dot(this.direction),l=-us.dot(Ga),c=us.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pu).addScaledVector(Ga,f),d}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){mu.subVectors(t,e),Wa.subVectors(n,e),gu.crossVectors(mu,Wa);let o=this.direction.dot(gu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);let l=a*this.direction.dot(Wa.crossVectors(us,Wa));if(l<0)return null;let c=a*this.direction.dot(mu.cross(us));if(c<0||l+c>o)return null;let u=-a*us.dot(gu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),o=1/yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q0,e,e_)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),hs.crossVectors(n,Bn),hs.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),hs.crossVectors(n,Bn)),hs.normalize(),Xa.crossVectors(Bn,hs),s[0]=hs.x,s[4]=Xa.x,s[8]=Bn.x,s[1]=hs.y,s[5]=Xa.y,s[9]=Bn.y,s[2]=hs.z,s[6]=Xa.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],v=n[7],y=n[11],I=n[15],R=s[0],P=s[4],N=s[8],b=s[12],E=s[1],O=s[5],K=s[9],F=s[13],Y=s[2],k=s[6],V=s[10],te=s[14],X=s[3],W=s[7],ce=s[11],ue=s[15];return r[0]=o*R+a*E+l*Y+c*X,r[4]=o*P+a*O+l*k+c*W,r[8]=o*N+a*K+l*V+c*ce,r[12]=o*b+a*F+l*te+c*ue,r[1]=u*R+h*E+f*Y+d*X,r[5]=u*P+h*O+f*k+d*W,r[9]=u*N+h*K+f*V+d*ce,r[13]=u*b+h*F+f*te+d*ue,r[2]=g*R+_*E+m*Y+p*X,r[6]=g*P+_*O+m*k+p*W,r[10]=g*N+_*K+m*V+p*ce,r[14]=g*b+_*F+m*te+p*ue,r[3]=M*R+v*E+y*Y+I*X,r[7]=M*P+v*O+y*k+I*W,r[11]=M*N+v*K+y*V+I*ce,r[15]=M*b+v*F+y*te+I*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,I=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,R=t*M+n*v+s*y+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return e[0]=M*P,e[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*P,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*P,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*P,e[4]=v*P,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*P,e[8]=y*P,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*P,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*P,e[12]=I*P,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*P,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*P,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=l*c,v=l*u,y=l*h,I=n.x,R=n.y,P=n.z;return s[0]=(1-(_+p))*I,s[1]=(d+y)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(d-y)*R,s[5]=(1-(f+p))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(g+v)*P,s[9]=(m-M)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=yr.set(s[0],s[1],s[2]).length(),o=yr.set(s[4],s[5],s[6]).length(),a=yr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let c=1/r,u=1/o,h=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Mi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===Mi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ao)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Mi){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,d=(n+s)*u,g,_;if(a===Mi)g=(o+r)*h,_=-2*h;else if(a===Ao)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yr=new C,ti=new je,Q0=new C(0,0,0),e_=new C(1,1,1),hs=new C,Xa=new C,Bn=new C,yd=new je,vd=new Tn,ai=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},t_=0,Md=new C,vr=new Tn,ki=new je,qa=new C,go=new C,n_=new C,i_=new Tn,bd=new C(1,0,0),Sd=new C(0,1,0),Ed=new C(0,0,1),wd={type:"added"},s_={type:"removed"},Mr={type:"childadded",child:null},_u={type:"childremoved",child:null},Pt=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new ai,n=new Tn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new tt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(Sd,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return Md.copy(e).applyQuaternion(this.quaternion),this.position.add(Md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(Sd,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(go,qa,this.up):ki.lookAt(qa,go,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),vr.setFromRotationMatrix(ki),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wd),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s_),_u.child=e,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wd),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,n_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,i_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new C(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new C,Hi=new C,xu=new C,Vi=new C,br=new C,Sr=new C,Td=new C,yu=new C,vu=new C,Mu=new C,bu=new rt,Su=new rt,Eu=new rt,yi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ni.subVectors(s,t),Hi.subVectors(n,t),xu.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Hi),l=ni.dot(xu),c=Hi.dot(Hi),u=Hi.dot(xu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return bu.setScalar(0),Su.setScalar(0),Eu.setScalar(0),bu.fromBufferAttribute(e,t),Su.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bu,r.x),o.addScaledVector(Su,r.y),o.addScaledVector(Eu,r.z),o}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),Hi.subVectors(e,t),ni.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ni.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;br.subVectors(s,n),Sr.subVectors(r,n),yu.subVectors(e,n);let l=br.dot(yu),c=Sr.dot(yu);if(l<=0&&c<=0)return t.copy(n);vu.subVectors(e,s);let u=br.dot(vu),h=Sr.dot(vu);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(br,o);Mu.subVectors(e,r);let d=br.dot(Mu),g=Sr.dot(Mu);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Sr,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Td.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Td,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(br,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function wu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=ph(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wu(o,r,e+1/3),this.g=wu(o,r,e),this.b=wu(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=Gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return ct.fromWorkingColorSpace(gn.copy(this),e),Math.round(it(gn.r*255,0,255))*65536+Math.round(it(gn.g*255,0,255))*256+Math.round(it(gn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(gn.copy(this),t);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=ft){ct.fromWorkingColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,s=gn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(Ya);let n=wo(fs.h,Ya.h,t),s=wo(fs.s,Ya.s,t),r=wo(fs.l,Ya.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Fe;Fe.NAMES=Gp;var r_=0,An=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=si(),this.name="",this.type="Material",this.blending=ri,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Fs,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ur&&(n.blendSrc=this.blendSrc),this.blendDst!==Fs&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Bt=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new C,Za=new Be,mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xl&&(e.usage=this.usage),e}};var Po=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Io=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ft=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},o_=0,Wn=new je,Tu=new Pt,Er=new C,zn=new Lt,_o=new Lt,jt=new C,Rt=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mh(e)?Io:Po)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(zn.min,_o.min),zn.expandByPoint(jt),jt.addVectors(zn.max,_o.max),zn.expandByPoint(jt)):(zn.expandByPoint(_o.min),zn.expandByPoint(_o.max))}zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(e,c),jt.add(Er)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new C,l[N]=new C;let c=new C,u=new C,h=new C,f=new Be,d=new Be,g=new Be,_=new C,m=new C;function p(N,b,E){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,E),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let O=1/(d.x*g.y-g.x*d.y);isFinite(O)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(O),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(O),a[N].add(_),a[b].add(_),a[E].add(_),l[N].add(m),l[b].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let N=0,b=M.length;N<b;++N){let E=M[N],O=E.start,K=E.count;for(let F=O,Y=O+K;F<Y;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new C,y=new C,I=new C,R=new C;function P(N){I.fromBufferAttribute(s,N),R.copy(I);let b=a[N];v.copy(b),v.sub(I.multiplyScalar(I.dot(b))).normalize(),y.crossVectors(R,b);let O=y.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,O)}for(let N=0,b=M.length;N<b;++N){let E=M[N],O=E.start,K=E.count;for(let F=O,Y=O+K;F<Y;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ad=new je,Ls=new Si,$a=new Jt,Rd=new C,Ka=new C,ja=new C,Ja=new C,Au=new C,Qa=new C,Cd=new C,el=new C,Je=class extends Pt{constructor(e=new Rt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Au.fromBufferAttribute(h,e),o?Qa.addScaledVector(Au,u):Qa.addScaledVector(Au.sub(t),u))}t.add(Qa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!($a.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere($a,Rd)===null||Ls.origin.distanceToSquared(Rd)>(e.far-e.near)**2))&&(Ad.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(Ad),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,I=v;y<I;y+=3){let R=a.getX(y),P=a.getX(y+1),N=a.getX(y+2);s=tl(this,p,e,n,c,u,h,R,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=tl(this,o,e,n,c,u,h,M,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,I=v;y<I;y+=3){let R=y,P=y+1,N=y+2;s=tl(this,p,e,n,c,u,h,R,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=m,v=m+1,y=m+2;s=tl(this,o,e,n,c,u,h,M,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function a_(i,e,t,n,s,r,o,a){let l;if(e.side===cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===In,a),l===null)return null;el.copy(a),el.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(el);return c<t.near||c>t.far?null:{distance:c,point:el.clone(),object:i}}function tl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ka),i.getVertexPosition(l,ja),i.getVertexPosition(c,Ja);let u=a_(i,e,t,n,Ka,ja,Ja,Cd);if(u){let h=new C;yi.getBarycoord(Cd,Ka,ja,Ja,h),s&&(u.uv=yi.getInterpolatedAttribute(s,a,l,c,h,new Be)),r&&(u.uv1=yi.getInterpolatedAttribute(r,a,l,c,h,new Be)),o&&(u.normal=yi.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};yi.getNormal(Ka,ja,Ja,f.normal),u.face=f,u.barycoord=h}return u}var ps=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(h,2));function g(_,m,p,M,v,y,I,R,P,N,b){let E=y/P,O=I/N,K=y/2,F=I/2,Y=R/2,k=P+1,V=N+1,te=0,X=0,W=new C;for(let ce=0;ce<V;ce++){let ue=ce*O-F;for(let ye=0;ye<k;ye++){let Ie=ye*E-K;W[_]=Ie*M,W[m]=ue*v,W[p]=Y,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=R>0?1:-1,u.push(W.x,W.y,W.z),h.push(ye/P),h.push(1-ce/N),te+=1}}for(let ce=0;ce<N;ce++)for(let ue=0;ue<P;ue++){let ye=f+ue+k*ce,Ie=f+ue+k*(ce+1),ee=f+(ue+1)+k*(ce+1),ae=f+(ue+1)+k*ce;l.push(ye,Ie,ae),l.push(Ie,ee,ae),X+=6}a.addGroup(d,X,b),d+=X,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=js(i[t]);for(let s in n)e[s]=n[s]}return e}function l_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var da={clone:js,merge:yn},c_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c_,this.fragmentShader=u_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=l_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Do=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ds=new C,Pd=new Be,Id=new Be,Gt=class extends Do{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,Pd,Id),t.subVectors(Id,Pd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wr=-90,Tr=1,bl=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(wr,Tr,e,t);s.layers=this.layers,this.add(s);let r=new Gt(wr,Tr,e,t);r.layers=this.layers,this.add(r);let o=new Gt(wr,Tr,e,t);o.layers=this.layers,this.add(o);let a=new Gt(wr,Tr,e,t);a.layers=this.layers,this.add(a);let l=new Gt(wr,Tr,e,t);l.layers=this.layers,this.add(l);let c=new Gt(wr,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Lo=class extends Yt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sl=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ps(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:qn});r.uniforms.tEquirect.value=t;let o=new Je(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=Xt),new bl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};var Dn=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ms=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xl,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new C,_n=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Br=class extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ar,xo=new C,Rr=new C,Cr=new C,Pr=new Be,yo=new Be,Wp=new je,nl=new C,vo=new C,il=new C,Dd=new Be,Ru=new Be,Ld=new Be,Uo=class extends Pt{constructor(e=new Br){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ms(t,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new _n(n,3,0,!1)),Ar.setAttribute("uv",new _n(n,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new Be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rr.setFromMatrixScale(this.matrixWorld),Wp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rr.multiplyScalar(-Cr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;sl(nl.set(-.5,-.5,0),Cr,o,Rr,s,r),sl(vo.set(.5,-.5,0),Cr,o,Rr,s,r),sl(il.set(.5,.5,0),Cr,o,Rr,s,r),Dd.set(0,0),Ru.set(1,0),Ld.set(1,1);let a=e.ray.intersectTriangle(nl,vo,il,!1,xo);if(a===null&&(sl(vo.set(-.5,.5,0),Cr,o,Rr,s,r),Ru.set(0,1),a=e.ray.intersectTriangle(nl,il,vo,!1,xo),a===null))return;let l=e.ray.origin.distanceTo(xo);l<e.near||l>e.far||t.push({distance:l,point:xo.clone(),uv:yi.getInterpolation(xo,nl,vo,il,Dd,Ru,Ld,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function sl(i,e,t,n,s,r){Pr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(yo.x=r*Pr.x-s*Pr.y,yo.y=s*Pr.x+r*Pr.y):yo.copy(Pr),i.copy(e),i.x+=yo.x,i.y+=yo.y,i.applyMatrix4(Wp)}var Ud=new C,Nd=new rt,Od=new rt,h_=new C,Fd=new je,rl=new C,Cu=new Jt,Bd=new je,Pu=new Si,No=class extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ou,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingBox.expandByPoint(rl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingSphere.expandByPoint(rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cu.copy(this.boundingSphere),Cu.applyMatrix4(s),e.ray.intersectsSphere(Cu)!==!1&&(Bd.copy(s).invert(),Pu.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&Pu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Nd.fromBufferAttribute(s.attributes.skinIndex,e),Od.fromBufferAttribute(s.attributes.skinWeight,e),Ud.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Od.getComponent(r);if(o!==0){let a=Nd.getComponent(r);Fd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(h_.copy(Ud).applyMatrix4(Fd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},zr=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Oo=class extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Wt,u=Wt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zd=new je,f_=new je,Fo=class i{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:f_;zd.multiplyMatrices(a,t[r]),zd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Oo(t,e,e,tn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zr),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},gs=class extends mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ir=new je,kd=new je,ol=[],Hd=new Lt,d_=new je,Mo=new Je,bo=new Jt,Bo=class extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,d_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),Hd.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(Hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),bo.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),e.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ir),kd.multiplyMatrices(n,Ir),Mo.matrixWorld=kd,Mo.raycast(e,ol);for(let o=0,a=ol.length;o<a;o++){let l=ol[o];l.instanceId=r,l.object=this,t.push(l)}ol.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oo(new Float32Array(s*this.count),s,this.count,Kl,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Iu=new C,p_=new C,m_=new tt,on=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Iu.subVectors(n,t).cross(p_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Iu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||m_.getNormalMatrix(e),s=this.coplanarPoint(Iu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Jt,al=new C,kr=class{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,o=new on){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,m-d,y-p).normalize(),n[1].setComponents(l+r,f+c,m+d,y+p).normalize(),n[2].setComponents(l+o,f+u,m+g,y+M).normalize(),n[3].setComponents(l-o,f-u,m-g,y-M).normalize(),n[4].setComponents(l-a,f-h,m-_,y-v).normalize(),t===Mi)n[5].setComponents(l+a,f+h,m+_,y+v).normalize();else if(t===Ao)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(al.x=s.normal.x>0?e.max.x:e.min.x,al.y=s.normal.y>0?e.max.y:e.min.y,al.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qi=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},El=new C,wl=new C,Vd=new je,So=new Si,ll=new Jt,Du=new C,Gd=new C,Ei=class extends Pt{constructor(e=new Rt,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)El.fromBufferAttribute(t,s-1),wl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=El.distanceTo(wl);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(s),ll.radius+=r,e.ray.intersectsSphere(ll)===!1)return;Vd.copy(s).invert(),So.copy(e.ray).applyMatrix4(Vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=u.getX(_),M=u.getX(_+1),v=cl(this,e,So,l,p,M);v&&t.push(v)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(d),p=cl(this,e,So,l,_,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=cl(this,e,So,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){let _=cl(this,e,So,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cl(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(El.fromBufferAttribute(o,s),wl.fromBufferAttribute(o,r),t.distanceSqToSegment(El,wl,Du,Gd)>n)return;Du.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Du);if(!(l<e.near||l>e.far))return{distance:l,point:Gd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Wd=new C,Xd=new C,zo=class extends Ei{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wd.fromBufferAttribute(t,s),Xd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wd.distanceTo(Xd);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ko=class extends Ei{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hr=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qd=new je,Hu=new Si,ul=new Jt,hl=new C,Ho=class extends Pt{constructor(e=new Rt,t=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;qd.copy(s).invert(),Hu.copy(e.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);hl.fromBufferAttribute(h,m),Yd(hl,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)hl.fromBufferAttribute(h,g),Yd(hl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yd(i,e,t,n,s,r,o){let a=Hu.distanceSqToPoint(i);if(a<t){let l=new C;Hu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ut=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Yi=class extends Yt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vo=class extends Yt{constructor(e,t,n,s,r,o,a,l,c,u=Os){if(u!==Os&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Os&&(n=bs),n===void 0&&u===zs&&(n=Zs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var fl=new C,dl=new C,Lu=new C,pl=new yi,Go=class extends Rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Dr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:p}=pl;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),pl.getNormal(Lu),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){let v=(M+1)%3,y=h[M],I=h[v],R=pl[u[M]],P=pl[u[v]],N=`${y}_${I}`,b=`${I}_${y}`;b in f&&f[b]?(Lu.dot(f[b].normal)<=r&&(d.push(R.x,R.y,R.z),d.push(P.x,P.y,P.z)),f[b]=null):N in f||(f[N]={index0:c[M],index1:c[v],normal:Lu.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:m}=f[g];fl.fromBufferAttribute(a,_),dl.fromBufferAttribute(a,m),d.push(fl.x,fl.y,fl.z),d.push(dl.x,dl.y,dl.z)}this.setAttribute("position",new Ft(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var li=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let M=p*f-o;for(let v=0;v<c;v++){let y=v*h-r;g.push(y,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let v=M+c*p,y=M+c*(p+1),I=M+1+c*(p+1),R=M+1+c*p;d.push(v,y,R),d.push(y,I,R)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Wo=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],v=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){let R=I/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(R+y,1-v),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let v=u[p][M+1],y=u[p][M],I=u[p+1][M],R=u[p+1][M+1];(p!==0||o>0)&&d.push(v,y,R),(p!==n-1||l<Math.PI)&&d.push(y,I,R)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xo=class extends Rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new C,r=new C;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let g=f,_=f+d;g<_;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),M=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,M),Zd(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Zd(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ft(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Zd(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var xn=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},en=class extends xn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Tl=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Al=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ml(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function g_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function __(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function $d(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Xp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rl=class extends Zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fu,endingEnd:Fu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bu:r=e,a=2*t-n;break;case zu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bu:o=e,l=2*n-t;break;case zu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+M*o[c+I]+v*o[l+I]+y*o[h+I];return r}},Cl=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Pl=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ml(t,this.TimeBufferType),this.values=ml(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ml(e.times,Array),values:ml(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&g_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_l,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Hs;var $i=class extends kn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=ks;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends kn{};qo.prototype.ValueTypeName="color";var wi=class extends kn{};wi.prototype.ValueTypeName="number";var Il=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ti=class extends kn{InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends kn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=ks;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends kn{};Ai.prototype.ValueTypeName="vector";var Yo=class{constructor(e="",t=-1,n=[],s=Rp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(y_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=__(l);l=$d(l,1,u),c=$d(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new wi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,_){if(d.length!==0){let m=[],p=[];Xp(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let M=0;M!==f[g].morphTargets.length;++M){let v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}s.push(new wi(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{let d=".bones["+t[h].name+"]";n(Ai,d+".position",f,"pos",s),n(Ti,d+".quaternion",f,"rot",s),n(Ai,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function x_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Ai;case"color":return qo;case"quaternion":return Ti;case"bool":case"boolean":return $i;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function y_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=x_(i.type);if(i.times===void 0){let t=[],n=[];Xp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Dl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},qp=new Dl,Ri=class{constructor(e){this.manager=e!==void 0?e:qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},Vu=class extends Error{constructor(e,t){super(e),this.response=t}},Vr=class extends Ri{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Gi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){M();function M(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let R=0,P=u.length;R<P;R++){let N=u[R];N.onProgress&&N.onProgress(I)}p.enqueue(y),M()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Vu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Wi.add(e,c);let u=Gi[e];delete Gi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Gi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ll=class extends Ri{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Or("img");function l(){u(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Zo=class extends Ri{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,o=new Ll(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Gs=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Uu=new je,Kd=new C,jd=new C,$o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jd),t.updateMatrixWorld(),Uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gu=class extends $o{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ko=class extends Gs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Jd=new je,Eo=new C,Nu=new C,Wu=class extends $o{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Eo),Nu.copy(n.position),Nu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nu),n.updateMatrixWorld(),s.makeTranslation(-Eo.x,-Eo.y,-Eo.z),Jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd)}},Ws=class extends Gs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ci=class extends Do{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xu=class extends $o{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Xu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jo=class extends Gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ji=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Jo=class extends Rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Qo=class extends Ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,l),r.manager.itemStart(e)}};var Ul=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var _h="\\[\\]\\.:\\/",v_=new RegExp("["+_h+"]","g"),xh="[^"+_h+"]",M_="[^"+_h.replace("\\.","")+"]",b_=/((?:WC+[\/:])*)/.source.replace("WC",xh),S_=/(WCOD+)?/.source.replace("WCOD",M_),E_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),w_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),T_=new RegExp("^"+b_+S_+E_+w_+"$"),A_=["material","materials","bones","map"],qu=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v_,"")}static parseTrackName(e){let t=T_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);A_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=qu;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zE=new Float32Array(1);var xs=class extends ms{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Qd=new je,ea=class{constructor(e,t,n=0,s=1/0){this.ray=new Si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qd),this}intersectObject(e,t=!0,n=[]){return Yu(e,this,n,t),n.sort(ep),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Yu(e[s],this,n,t);return n.sort(ep),n}};function ep(i,e){return i.distance-e.distance}function Yu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Yu(r[o],e,t,!0)}}var Gr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var tp=new C,gl=new C,ta=class{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){tp.subVectors(e,this.start),gl.subVectors(this.end,this.start);let n=gl.dot(gl),r=gl.dot(tp)/n;return t&&(r=it(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var na=class extends bi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function yh(i,e,t,n){let s=R_(n);switch(t){case sh:return i*e;case oh:return i*e;case ah:return i*e*2;case Kl:return i*e/s.components*s.byteLength;case jl:return i*e/s.components*s.byteLength;case lh:return i*e*2/s.components*s.byteLength;case Jl:return i*e*2/s.components*s.byteLength;case rh:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case Ql:return i*e*4/s.components*s.byteLength;case aa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case sc:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ha:case Mc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ch:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ec:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R_(i){switch(i){case Yn:case th:return{byteLength:1,components:1};case Xr:case nh:case Ji:return{byteLength:2,components:1};case Zl:case $l:return{byteLength:2,components:4};case bs:case Yl:case Ln:return{byteLength:4,components:1};case ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);function gm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function C_(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var P_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O_=`#ifdef USE_AOMAP
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
#endif`,F_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`#ifdef USE_BATCHING
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
#endif`,z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G_=`#ifdef USE_IRIDESCENCE
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
#endif`,W_=`#ifdef USE_BUMPMAP
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
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q_=`#define PI 3.141592653589793
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
} // validated`,ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_x=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
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
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
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
#endif`,Rx=`struct PhysicalMaterial {
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
}`,Cx=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zx=`#if defined( USE_POINTS_UV )
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
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,py=`float getShadowMask() {
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
}`,my=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,_y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`#include <common>
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
}`,Oy=`#if DEPTH_PACKING == 3200
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
}`,Fy=`#define DISTANCE
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
}`,By=`#define DISTANCE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#define LAMBERT
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
}`,qy=`#define LAMBERT
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
}`,Yy=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,$y=`#define NORMAL
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
}`,Ky=`#define NORMAL
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
}`,jy=`#define PHONG
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
}`,Jy=`#define PHONG
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
}`,Qy=`#define STANDARD
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
}`,ev=`#define STANDARD
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
}`,tv=`#define TOON
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
}`,nv=`#define TOON
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
}`,iv=`uniform float size;
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,ov=`uniform vec3 color;
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
}`,av=`uniform float rotation;
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
}`,lv=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:P_,alphahash_pars_fragment:I_,alphamap_fragment:D_,alphamap_pars_fragment:L_,alphatest_fragment:U_,alphatest_pars_fragment:N_,aomap_fragment:O_,aomap_pars_fragment:F_,batching_pars_vertex:B_,batching_vertex:z_,begin_vertex:k_,beginnormal_vertex:H_,bsdfs:V_,iridescence_fragment:G_,bumpmap_pars_fragment:W_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:Y_,clipping_planes_vertex:Z_,color_fragment:$_,color_pars_fragment:K_,color_pars_vertex:j_,color_vertex:J_,common:Q_,cube_uv_reflection_fragment:ex,defaultnormal_vertex:tx,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:sx,emissivemap_pars_fragment:rx,colorspace_fragment:ox,colorspace_pars_fragment:ax,envmap_fragment:lx,envmap_common_pars_fragment:cx,envmap_pars_fragment:ux,envmap_pars_vertex:hx,envmap_physical_pars_fragment:bx,envmap_vertex:fx,fog_vertex:dx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:gx,gradientmap_pars_fragment:_x,lightmap_pars_fragment:xx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:vx,lights_pars_begin:Mx,lights_toon_fragment:Sx,lights_toon_pars_fragment:Ex,lights_phong_fragment:wx,lights_phong_pars_fragment:Tx,lights_physical_fragment:Ax,lights_physical_pars_fragment:Rx,lights_fragment_begin:Cx,lights_fragment_maps:Px,lights_fragment_end:Ix,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Nx,map_fragment:Ox,map_pars_fragment:Fx,map_particle_fragment:Bx,map_particle_pars_fragment:zx,metalnessmap_fragment:kx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Vx,morphcolor_vertex:Gx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:qx,normal_fragment_begin:Yx,normal_fragment_maps:Zx,normal_pars_fragment:$x,normal_pars_vertex:Kx,normal_vertex:jx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:ey,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ny,opaque_fragment:iy,packing:sy,premultiplied_alpha_fragment:ry,project_vertex:oy,dithering_fragment:ay,dithering_pars_fragment:ly,roughnessmap_fragment:cy,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:hy,shadowmap_pars_vertex:fy,shadowmap_vertex:dy,shadowmask_pars_fragment:py,skinbase_vertex:my,skinning_pars_vertex:gy,skinning_vertex:_y,skinnormal_vertex:xy,specularmap_fragment:yy,specularmap_pars_fragment:vy,tonemapping_fragment:My,tonemapping_pars_fragment:by,transmission_fragment:Sy,transmission_pars_fragment:Ey,uv_pars_fragment:wy,uv_pars_vertex:Ty,uv_vertex:Ay,worldpos_vertex:Ry,background_vert:Cy,background_frag:Py,backgroundCube_vert:Iy,backgroundCube_frag:Dy,cube_vert:Ly,cube_frag:Uy,depth_vert:Ny,depth_frag:Oy,distanceRGBA_vert:Fy,distanceRGBA_frag:By,equirect_vert:zy,equirect_frag:ky,linedashed_vert:Hy,linedashed_frag:Vy,meshbasic_vert:Gy,meshbasic_frag:Wy,meshlambert_vert:Xy,meshlambert_frag:qy,meshmatcap_vert:Yy,meshmatcap_frag:Zy,meshnormal_vert:$y,meshnormal_frag:Ky,meshphong_vert:jy,meshphong_frag:Jy,meshphysical_vert:Qy,meshphysical_frag:ev,meshtoon_vert:tv,meshtoon_frag:nv,points_vert:iv,points_frag:sv,shadow_vert:rv,shadow_frag:ov,sprite_vert:av,sprite_frag:lv},we={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Rn={basic:{uniforms:yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Fe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:yn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:yn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Fe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:yn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:yn([we.points,we.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:yn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:yn([we.common,we.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:yn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:yn([we.sprite,we.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:yn([we.common,we.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:yn([we.lights,we.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Rn.physical={uniforms:yn([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Tc={r:0,b:0,g:0},Js=new ai,cv=new je;function uv(i,e,t,n,s,r,o){let a=new Fe(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1,I=g(v);I===null?p(a,l):I&&I.isColor&&(p(I,1),y=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let I=g(y);I&&(I.isCubeTexture||I.mapping===oa)?(u===void 0&&(u=new Je(new ps(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:js(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Js.copy(y.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(Js)),u.material.toneMapped=ct.getTransfer(I.colorSpace)!==_t,(h!==I||f!==I.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,f=I.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Je(new li(2,2),new Qt({name:"BackgroundMaterial",uniforms:js(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ct.getTransfer(I.colorSpace)!==_t,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=I,f=I.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(Tc,gh(i)),n.buffers.color.setClear(Tc.r,Tc.g,Tc.b,y,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m,dispose:M}}function hv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(E,O,K,F,Y){let k=!1,V=h(F,K,O);r!==V&&(r=V,c(r.object)),k=d(E,F,K,Y),k&&g(E,F,K,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(E,O,K,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,O,K){let F=K.wireframe===!0,Y=n[E.id];Y===void 0&&(Y={},n[E.id]=Y);let k=Y[O.id];k===void 0&&(k={},Y[O.id]=k);let V=k[F];return V===void 0&&(V=f(l()),k[F]=V),V}function f(E){let O=[],K=[],F=[];for(let Y=0;Y<t;Y++)O[Y]=0,K[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:F,object:E,attributes:{},index:null}}function d(E,O,K,F){let Y=r.attributes,k=O.attributes,V=0,te=K.getAttributes();for(let X in te)if(te[X].location>=0){let ce=Y[X],ue=k[X];if(ue===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),ce===void 0||ce.attribute!==ue||ue&&ce.data!==ue.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(E,O,K,F){let Y={},k=O.attributes,V=0,te=K.getAttributes();for(let X in te)if(te[X].location>=0){let ce=k[X];ce===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor));let ue={};ue.attribute=ce,ce&&ce.data&&(ue.data=ce.data),Y[X]=ue,V++}r.attributes=Y,r.attributesNum=V,r.index=F}function _(){let E=r.newAttributes;for(let O=0,K=E.length;O<K;O++)E[O]=0}function m(E){p(E,0)}function p(E,O){let K=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;K[E]=1,F[E]===0&&(i.enableVertexAttribArray(E),F[E]=1),Y[E]!==O&&(i.vertexAttribDivisor(E,O),Y[E]=O)}function M(){let E=r.newAttributes,O=r.enabledAttributes;for(let K=0,F=O.length;K<F;K++)O[K]!==E[K]&&(i.disableVertexAttribArray(K),O[K]=0)}function v(E,O,K,F,Y,k,V){V===!0?i.vertexAttribIPointer(E,O,K,Y,k):i.vertexAttribPointer(E,O,K,F,Y,k)}function y(E,O,K,F){_();let Y=F.attributes,k=K.getAttributes(),V=O.defaultAttributeValues;for(let te in k){let X=k[te];if(X.location>=0){let W=Y[te];if(W===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(W=E.instanceColor)),W!==void 0){let ce=W.normalized,ue=W.itemSize,ye=e.get(W);if(ye===void 0)continue;let Ie=ye.buffer,ee=ye.type,ae=ye.bytesPerElement,_e=ee===i.INT||ee===i.UNSIGNED_INT||W.gpuType===Yl;if(W.isInterleavedBufferAttribute){let oe=W.data,Te=oe.stride,Ae=W.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<X.locationSize;Ne++)p(X.location+Ne,oe.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)m(X.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let Ne=0;Ne<X.locationSize;Ne++)v(X.location+Ne,ue/X.locationSize,ee,ce,Te*ae,(Ae+ue/X.locationSize*Ne)*ae,_e)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)p(X.location+oe,W.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<X.locationSize;oe++)m(X.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let oe=0;oe<X.locationSize;oe++)v(X.location+oe,ue/X.locationSize,ee,ce,ue*ae,ue/X.locationSize*oe*ae,_e)}}else if(V!==void 0){let ce=V[te];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(X.location,ce);break;case 3:i.vertexAttrib3fv(X.location,ce);break;case 4:i.vertexAttrib4fv(X.location,ce);break;default:i.vertexAttrib1fv(X.location,ce)}}}}M()}function I(){N();for(let E in n){let O=n[E];for(let K in O){let F=O[K];for(let Y in F)u(F[Y].object),delete F[Y];delete O[K]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;let O=n[E.id];for(let K in O){let F=O[K];for(let Y in F)u(F[Y].object),delete F[Y];delete O[K]}delete n[E.id]}function P(E){for(let O in n){let K=n[O];if(K[E.id]===void 0)continue;let F=K[E.id];for(let Y in F)u(F[Y].object),delete F[Y];delete K[E.id]}}function N(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function fv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==tn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let N=P===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Yn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ln&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:I,maxSamples:R}}function pv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new on,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let M=r?0:n,v=M*4,y=p.clippingState||null;l.value=y,y=u(g,f,v,d);for(let I=0;I!==v;++I)y[I]=t[I];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function mv(i){let e=new WeakMap;function t(o,a){return a===Wl?o.mapping=Xs:a===Xl&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wl||a===Xl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Zr=4,Yp=[.125,.215,.35,.446,.526,.582],tr=20,vh=new ci,Zp=new Fe,Mh=null,bh=0,Sh=0,Eh=!1,er=(1+Math.sqrt(5))/2,Yr=1/er,$p=[new C(-er,Yr,0),new C(er,Yr,0),new C(-Yr,0,er),new C(Yr,0,er),new C(0,er,-Yr),new C(0,er,Yr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Mh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mh,bh,Sh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,Ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Ji,format:tn,colorSpace:an,depthBuffer:!1},s=Kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gv(r)),this._blurMaterial=_v(r,e,t)}return s}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,vh)}_sceneToCubeUV(e,t,n,s){let a=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zp),u.toneMapping=ui,u.autoClear=!1;let d=new Bt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Je(new ps,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Zp),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Ac(s,M*v,p>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Xs||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ac(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$p[(s-r-1)%$p.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Je(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*tr-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):tr;m>tr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);let p=[],M=0;for(let P=0;P<tr;++P){let N=P/_,b=Math.exp(-N*N/2);p.push(b),P===0?M+=b:P<m&&(M+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let y=this._sizeLods[s],I=3*y*(s>v-Zr?s-v+Zr:0),R=4*(this._cubeSize-y);Ac(t,I,R,3*y,2*y),l.setRenderTarget(t),l.render(h,vh)}};function gv(i){let e=[],t=[],n=[],s=i,r=i-Zr+1+Yp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Zr?l=Yp[o-i+Zr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),v=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let R=0;R<d;R++){let P=R%3*2/3-1,N=R>2?0:-1,b=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];M.set(b,_*g*R),v.set(f,m*g*R);let E=[R,R,R,R,R,R];y.set(E,p*g*R)}let I=new Rt;I.setAttribute("position",new mt(M,_)),I.setAttribute("uv",new mt(v,m)),I.setAttribute("faceIndex",new mt(y,p)),e.push(I),s>Zr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kp(i,e,t){let n=new ln(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ac(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _v(i,e,t){let n=new Float32Array(tr),s=new C(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function jp(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Jp(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Uh(){return`

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
	`}function xv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wl||l===Xl,u=l===Xs||l===qs;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Kr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Kr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function yv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vv(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let v=0,y=M.length;v<y;v+=3){let I=M[v+0],R=M[v+1],P=M[v+2];f.push(I,R,R,P,P,I)}}else if(g!==void 0){let M=g.array;_=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){let I=v+0,R=v+1,P=v+2;f.push(I,R,R,P,P,I)}}else return;let m=new(mh(f)?Io:Po)(f,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Mv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sv(i,e,t){let n=new WeakMap,s=new rt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*I*4*h),P=new Co(R,y,I,h);P.type=Ln,P.needsUpdate=!0;let N=v*4;for(let E=0;E<h;E++){let O=m[E],K=p[E],F=M[E],Y=y*I*4*E;for(let k=0;k<O.count;k++){let V=k*N;d===!0&&(s.fromBufferAttribute(O,k),R[Y+V+0]=s.x,R[Y+V+1]=s.y,R[Y+V+2]=s.z,R[Y+V+3]=0),g===!0&&(s.fromBufferAttribute(K,k),R[Y+V+4]=s.x,R[Y+V+5]=s.y,R[Y+V+6]=s.z,R[Y+V+7]=0),_===!0&&(s.fromBufferAttribute(F,k),R[Y+V+8]=s.x,R[Y+V+9]=s.y,R[Y+V+10]=s.z,R[Y+V+11]=F.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new Be(y,I)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ev(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var _m=new Yt,Qp=new Vo(1,1),xm=new Co,ym=new Ml,vm=new Lo,em=[],tm=[],nm=new Float32Array(16),im=new Float32Array(9),sm=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=em[s];if(r===void 0&&(r=new Float32Array(s),em[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pc(i,e){let t=tm[e];t===void 0&&(t=new Int32Array(e),tm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;sm.set(n),i.uniformMatrix2fv(this.addr,!1,sm),$t(t,n)}}function Pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;im.set(n),i.uniformMatrix3fv(this.addr,!1,im),$t(t,n)}}function Iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;nm.set(n),i.uniformMatrix4fv(this.addr,!1,nm),$t(t,n)}}function Dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qp.compareFunction=fh,r=Qp):r=_m,t.setTexture2D(e||r,s)}function Hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ym,s)}function Vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vm,s)}function Gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xm,s)}function Wv(i){switch(i){case 5126:return wv;case 35664:return Tv;case 35665:return Av;case 35666:return Rv;case 35674:return Cv;case 35675:return Pv;case 35676:return Iv;case 5124:case 35670:return Dv;case 35667:case 35671:return Lv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Ov;case 36294:return Fv;case 36295:return Bv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Xv(i,e){i.uniform1fv(this.addr,e)}function qv(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function Yv(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function Zv(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function $v(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kv(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jv(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jv(i,e){i.uniform1iv(this.addr,e)}function Qv(i,e){i.uniform2iv(this.addr,e)}function eM(i,e){i.uniform3iv(this.addr,e)}function tM(i,e){i.uniform4iv(this.addr,e)}function nM(i,e){i.uniform1uiv(this.addr,e)}function iM(i,e){i.uniform2uiv(this.addr,e)}function sM(i,e){i.uniform3uiv(this.addr,e)}function rM(i,e){i.uniform4uiv(this.addr,e)}function oM(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_m,r[o])}function aM(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ym,r[o])}function lM(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vm,r[o])}function cM(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xm,r[o])}function uM(i){switch(i){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return Zv;case 35674:return $v;case 35675:return Kv;case 35676:return jv;case 5124:case 35670:return Jv;case 35667:case 35671:return Qv;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return sM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}var Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wv(t.type)}},Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uM(t.type)}},Rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},wh=/(\w+)(\])?(\[|\.)?/g;function rm(i,e){i.seq.push(e),i.map[e.id]=e}function hM(i,e,t){let n=i.name,s=n.length;for(wh.lastIndex=0;;){let r=wh.exec(n),o=wh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rm(t,c===void 0?new Th(a,i,e):new Ah(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Rh(a),rm(t,h)),t=h}}}var $r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hM(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function om(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fM=37297,dM=0;function pM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var am=new tt;function mM(i){ct._getMatrix(am,ct.workingColorSpace,i);let e=`mat3( ${am.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case To:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pM(i.getShaderSource(e),o)}else return s}function gM(i,e){let t=mM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _M(i,e){let t;switch(e){case Mp:t="Linear";break;case bp:t="Reinhard";break;case Sp:t="Cineon";break;case ra:t="ACESFilmic";break;case wp:t="AgX";break;case Tp:t="Neutral";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Rc=new C;function xM(){ct.getLuminanceCoefficients(Rc);let i=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function vM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function MM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function pa(i){return i!==""}function cm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(i){return i.replace(bM,EM)}var SM=new Map;function EM(i,e){let t=st[e];if(t===void 0){let n=SM.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ch(t)}var wM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(i){return i.replace(wM,TM)}function TM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function AM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function PM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qu:e="ENVMAP_BLENDING_MULTIPLY";break;case yp:e="ENVMAP_BLENDING_MIX";break;case vp:e="ENVMAP_BLENDING_ADD";break}return e}function IM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function DM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=AM(t),c=RM(t),u=CM(t),h=PM(t),f=IM(t),d=yM(t),g=vM(r),_=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(m=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?st.tonemapping_pars_fragment:"",t.toneMapping!==ui?_M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,gM("linearToOutputTexel",t.outputColorSpace),xM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),o=Ch(o),o=cm(o,t),o=um(o,t),a=Ch(a),a=cm(a,t),a=um(a,t),o=hm(o),a=hm(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+m+o,y=M+p+a,I=om(s,s.VERTEX_SHADER,v),R=om(s,s.FRAGMENT_SHADER,y);s.attachShader(_,I),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(O){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(I).trim(),Y=s.getShaderInfoLog(R).trim(),k=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,R);else{let te=lm(s,I,"vertex"),X=lm(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+K+`
`+te+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(F===""||Y==="")&&(V=!1);V&&(O.diagnostics={runnable:k,programLog:K,vertexShader:{log:F,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(I),s.deleteShader(R),N=new $r(s,_),b=MM(s,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,fM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=R,this}var LM=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ih(e),t.set(e,n)),n}},Ih=class{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}};function UM(i,e,t,n,s,r,o){let a=new Fr,l=new Ph,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,O,K,F){let Y=K.fog,k=F.geometry,V=b.isMeshStandardMaterial?K.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),X=te&&te.mapping===oa?te.image.height:null,W=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ue=ce!==void 0?ce.length:0,ye=0;k.morphAttributes.position!==void 0&&(ye=1),k.morphAttributes.normal!==void 0&&(ye=2),k.morphAttributes.color!==void 0&&(ye=3);let Ie,ee,ae,_e;if(W){let ze=Rn[W];Ie=ze.vertexShader,ee=ze.fragmentShader}else Ie=b.vertexShader,ee=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);let oe=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ae=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,nt=!!b.map,He=!!b.matcap,et=!!te,L=!!b.aoMap,yt=!!b.lightMap,Ye=!!b.bumpMap,Ze=!!b.normalMap,J=!!b.displacementMap,de=!!b.emissiveMap,D=!!b.metalnessMap,S=!!b.roughnessMap,x=b.anisotropy>0,A=b.clearcoat>0,U=b.dispersion>0,B=b.iridescence>0,H=b.sheen>0,pe=b.transmission>0,re=x&&!!b.anisotropyMap,le=A&&!!b.clearcoatMap,Le=A&&!!b.clearcoatNormalMap,fe=A&&!!b.clearcoatRoughnessMap,ge=B&&!!b.iridescenceMap,Re=B&&!!b.iridescenceThicknessMap,Ce=H&&!!b.sheenColorMap,Se=H&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,ve=!!b.specularColorMap,ke=!!b.specularIntensityMap,z=pe&&!!b.transmissionMap,Me=pe&&!!b.thicknessMap,se=!!b.gradientMap,he=!!b.alphaMap,Ee=b.alphaTest>0,j=!!b.alphaHash,be=!!b.extensions,Ge=ui;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ge=i.toneMapping);let Et={shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:ee,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&F.instanceColor!==null,instancingMorph:Ae&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:an,alphaToCoverage:!!b.alphaToCoverage,map:nt,matcap:He,envMap:et,envMapMode:et&&te.mapping,envMapCubeUVHeight:X,aoMap:L,lightMap:yt,bumpMap:Ye,normalMap:Ze,displacementMap:f&&J,emissiveMap:de,normalMapObjectSpace:Ze&&b.normalMapType===Ip,normalMapTangentSpace:Ze&&b.normalMapType===hh,metalnessMap:D,roughnessMap:S,anisotropy:x,anisotropyMap:re,clearcoat:A,clearcoatMap:le,clearcoatNormalMap:Le,clearcoatRoughnessMap:fe,dispersion:U,iridescence:B,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:H,sheenColorMap:Ce,sheenRoughnessMap:Se,specularMap:Ve,specularColorMap:ve,specularIntensityMap:ke,transmission:pe,transmissionMap:z,thicknessMap:Me,gradientMap:se,opaque:b.transparent===!1&&b.blending===ri&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Ee,alphaHash:j,combine:b.combine,mapUv:nt&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:yt&&_(b.lightMap.channel),bumpMapUv:Ye&&_(b.bumpMap.channel),normalMapUv:Ze&&_(b.normalMap.channel),displacementMapUv:J&&_(b.displacementMap.channel),emissiveMapUv:de&&_(b.emissiveMap.channel),metalnessMapUv:D&&_(b.metalnessMap.channel),roughnessMapUv:S&&_(b.roughnessMap.channel),anisotropyMapUv:re&&_(b.anisotropyMap.channel),clearcoatMapUv:le&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(b.sheenRoughnessMap.channel),specularMapUv:Ve&&_(b.specularMap.channel),specularColorMapUv:ve&&_(b.specularColorMap.channel),specularIntensityMapUv:ke&&_(b.specularIntensityMap.channel),transmissionMapUv:z&&_(b.transmissionMap.channel),thicknessMapUv:Me&&_(b.thicknessMap.channel),alphaMapUv:he&&_(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ze||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(nt||he),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:nt&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===_t,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===_t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bt,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let O in b.defines)E.push(O),E.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(M(E,b),v(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function M(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let E=g[b.type],O;if(E){let K=Rn[E];O=da.clone(K.uniforms)}else O=b.uniforms;return O}function I(b,E){let O;for(let K=0,F=u.length;K<F;K++){let Y=u[K];if(Y.cacheKey===E){O=Y,++O.usedTimes;break}}return O===void 0&&(O=new DM(i,E,b,r),u.push(O)),O}function R(b){if(--b.usedTimes===0){let E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:I,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:N}}function NM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function OM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||OM),n.length>1&&n.sort(f||dm),s.length>1&&s.sort(f||dm)}function u(){for(let h=e,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function FM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pm,i.set(n,[o])):s>=r.length?(o=new pm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function BM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Fe};break;case"SpotLight":t={position:new C,direction:new C,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function zM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var kM=0;function HM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function VM(i){let e=new BM,t=zM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new je,o=new je;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,v=0,y=0,I=0,R=0,P=0;c.sort(HM);for(let b=0,E=c.length;b<E;b++){let O=c[b],K=O.color,F=O.intensity,Y=O.distance,k=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=K.r*F,h+=K.g*F,f+=K.b*F;else if(O.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(O.sh.coefficients[V],F);P++}else if(O.isDirectionalLight){let V=e.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let te=O.shadow,X=t.get(O);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=O.shadow.matrix,M++}n.directional[d]=V,d++}else if(O.isSpotLight){let V=e.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(K).multiplyScalar(F),V.distance=Y,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,n.spot[_]=V;let te=O.shadow;if(O.map&&(n.spotLightMap[I]=O.map,I++,te.updateMatrices(O),O.castShadow&&R++),n.spotLightMatrix[_]=te.matrix,O.castShadow){let X=t.get(O);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=k,y++}_++}else if(O.isRectAreaLight){let V=e.get(O);V.color.copy(K).multiplyScalar(F),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=V,m++}else if(O.isPointLight){let V=e.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity),V.distance=O.distance,V.decay=O.decay,O.castShadow){let te=O.shadow,X=t.get(O);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=O.shadow.matrix,v++}n.point[g]=V,g++}else if(O.isHemisphereLight){let V=e.get(O);V.skyColor.copy(O.color).multiplyScalar(F),V.groundColor.copy(O.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==M||N.numPointShadows!==v||N.numSpotShadows!==y||N.numSpotMaps!==I||N.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=M,N.numPointShadows=v,N.numSpotShadows=y,N.numSpotMaps=I,N.numLightProbes=P,n.version=kM++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let v=c[p];if(v.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function mm(i){let e=new VM(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function GM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new mm(i),e.set(s,[a])):r>=o.length?(a=new mm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XM=`uniform sampler2D shadow_pass;
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
}`;function qM(i,e,t){let n=new kr,s=new Be,r=new Be,o=new rt,a=new Tl({depthPacking:Pp}),l=new Al,c={},u=t.maxTextureSize,h={[In]:cn,[cn]:In,[bt]:bt},f=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:WM,fragmentShader:XM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Je(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let p=this.type;this.render=function(R,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let b=i.getRenderTarget(),E=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),K=i.state;K.setBlending(qn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let F=p!==Ci&&this.type===Ci,Y=p===Ci&&this.type!==Ci;for(let k=0,V=R.length;k<V;k++){let te=R[k],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||F===!0||Y===!0){let ue=this.type!==Ci?{minFilter:Wt,magFilter:Wt}:{};X.map!==null&&X.map.dispose(),X.map=new ln(s.x,s.y,ue),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ce=X.getViewportCount();for(let ue=0;ue<ce;ue++){let ye=X.getViewport(ue);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),K.viewport(o),X.updateMatrices(te,ue),n=X.getFrustum(),y(P,N,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===Ci&&M(X,N),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,E,O)};function M(R,P){let N=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ln(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,N,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,N,d,_,null)}function v(R,P,N,b){let E=null,O=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)E=O;else if(E=N.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let K=E.uuid,F=P.uuid,Y=c[K];Y===void 0&&(Y={},c[K]=Y);let k=Y[F];k===void 0&&(k=E.clone(),Y[F]=k,P.addEventListener("dispose",I)),E=k}if(E.visible=P.visible,E.wireframe=P.wireframe,b===Ci?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:h[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let K=i.properties.get(E);K.light=N}return E}function y(R,P,N,b,E){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Ci)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let F=e.update(R),Y=R.material;if(Array.isArray(Y)){let k=F.groups;for(let V=0,te=k.length;V<te;V++){let X=k[V],W=Y[X.materialIndex];if(W&&W.visible){let ce=v(R,W,b,E);R.onBeforeShadow(i,R,P,N,F,ce,X),i.renderBufferDirect(N,null,F,ce,R,X),R.onAfterShadow(i,R,P,N,F,ce,X)}}}else if(Y.visible){let k=v(R,Y,b,E);R.onBeforeShadow(i,R,P,N,F,k,null),i.renderBufferDirect(N,null,F,k,R,null),R.onAfterShadow(i,R,P,N,F,k,null)}}let K=R.children;for(let F=0,Y=K.length;F<Y;F++)y(K[F],P,N,b,E)}function I(R){R.target.removeEventListener("dispose",I);for(let N in c){let b=c[N],E=R.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var YM={[Fl]:Bl,[zl]:Vl,[kl]:Gl,[Bs]:Hl,[Bl]:Fl,[Vl]:zl,[Gl]:kl,[Hl]:Bs};function ZM(i,e){function t(){let z=!1,Me=new rt,se=null,he=new rt(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!z&&(i.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){z=Ee},setClear:function(Ee,j,be,Ge,Et){Et===!0&&(Ee*=Ge,j*=Ge,be*=Ge),Me.set(Ee,j,be,Ge),he.equals(Me)===!1&&(i.clearColor(Ee,j,be,Ge),he.copy(Me))},reset:function(){z=!1,se=null,he.set(-1,0,0,0)}}}function n(){let z=!1,Me=!1,se=null,he=null,Ee=null;return{setReversed:function(j){if(Me!==j){let be=e.get("EXT_clip_control");Me?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT);let Ge=Ee;Ee=null,this.setClear(Ge)}Me=j},getReversed:function(){return Me},setTest:function(j){j?oe(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(j){se!==j&&!z&&(i.depthMask(j),se=j)},setFunc:function(j){if(Me&&(j=YM[j]),he!==j){switch(j){case Fl:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case zl:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case kl:i.depthFunc(i.EQUAL);break;case Hl:i.depthFunc(i.GEQUAL);break;case Vl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=j}},setLocked:function(j){z=j},setClear:function(j){Ee!==j&&(Me&&(j=1-j),i.clearDepth(j),Ee=j)},reset:function(){z=!1,se=null,he=null,Ee=null,Me=!1}}}function s(){let z=!1,Me=null,se=null,he=null,Ee=null,j=null,be=null,Ge=null,Et=null;return{setTest:function(ze){z||(ze?oe(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(ze){Me!==ze&&!z&&(i.stencilMask(ze),Me=ze)},setFunc:function(ze,vt,It){(se!==ze||he!==vt||Ee!==It)&&(i.stencilFunc(ze,vt,It),se=ze,he=vt,Ee=It)},setOp:function(ze,vt,It){(j!==ze||be!==vt||Ge!==It)&&(i.stencilOp(ze,vt,It),j=ze,be=vt,Ge=It)},setLocked:function(ze){z=ze},setClear:function(ze){Et!==ze&&(i.clearStencil(ze),Et=ze)},reset:function(){z=!1,Me=null,se=null,he=null,Ee=null,j=null,be=null,Ge=null,Et=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,v=null,y=null,I=null,R=null,P=new Fe(0,0,0),N=0,b=!1,E=null,O=null,K=null,F=null,Y=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,te=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=te>=2);let W=null,ce={},ue=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Ie=new rt().fromArray(ue),ee=new rt().fromArray(ye);function ae(z,Me,se,he){let Ee=new Uint8Array(4),j=i.createTexture();i.bindTexture(z,j),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<se;be++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(Me+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return j}let _e={};_e[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Bs),Ye(!1),Ze(Zu),oe(i.CULL_FACE),L(qn);function oe(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function Te(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Ae(z,Me){return h[z]!==Me?(i.bindFramebuffer(z,Me),h[z]=Me,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Me),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ne(z,Me){let se=d,he=!1;if(z){se=f.get(Me),se===void 0&&(se=[],f.set(Me,se));let Ee=z.textures;if(se.length!==Ee.length||se[0]!==i.COLOR_ATTACHMENT0){for(let j=0,be=Ee.length;j<be;j++)se[j]=i.COLOR_ATTACHMENT0+j;se.length=Ee.length,he=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,he=!0);he&&i.drawBuffers(se)}function nt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let He={[Xn]:i.FUNC_ADD,[rp]:i.FUNC_SUBTRACT,[op]:i.FUNC_REVERSE_SUBTRACT};He[ap]=i.MIN,He[lp]=i.MAX;let et={[ia]:i.ZERO,[Ms]:i.ONE,[cp]:i.SRC_COLOR,[Ur]:i.SRC_ALPHA,[pp]:i.SRC_ALPHA_SATURATE,[fp]:i.DST_COLOR,[hp]:i.DST_ALPHA,[up]:i.ONE_MINUS_SRC_COLOR,[Fs]:i.ONE_MINUS_SRC_ALPHA,[dp]:i.ONE_MINUS_DST_COLOR,[sa]:i.ONE_MINUS_DST_ALPHA,[mp]:i.CONSTANT_COLOR,[gp]:i.ONE_MINUS_CONSTANT_COLOR,[_p]:i.CONSTANT_ALPHA,[xp]:i.ONE_MINUS_CONSTANT_ALPHA};function L(z,Me,se,he,Ee,j,be,Ge,Et,ze){if(z===qn){_===!0&&(Te(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),z!==Ol){if(z!==m||ze!==b){if((p!==Xn||y!==Xn)&&(i.blendEquation(i.FUNC_ADD),p=Xn,y=Xn),ze)switch(z){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ku:i.blendFunc(i.ONE,i.ONE);break;case ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ku:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ju:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,v=null,I=null,R=null,P.set(0,0,0),N=0,m=z,b=ze}return}Ee=Ee||Me,j=j||se,be=be||he,(Me!==p||Ee!==y)&&(i.blendEquationSeparate(He[Me],He[Ee]),p=Me,y=Ee),(se!==M||he!==v||j!==I||be!==R)&&(i.blendFuncSeparate(et[se],et[he],et[j],et[be]),M=se,v=he,I=j,R=be),(Ge.equals(P)===!1||Et!==N)&&(i.blendColor(Ge.r,Ge.g,Ge.b,Et),P.copy(Ge),N=Et),m=z,b=!1}function yt(z,Me){z.side===bt?Te(i.CULL_FACE):oe(i.CULL_FACE);let se=z.side===cn;Me&&(se=!se),Ye(se),z.blending===ri&&z.transparent===!1?L(qn):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let he=z.stencilWrite;a.setTest(he),he&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),de(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(z){E!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),E=z)}function Ze(z){z!==np?(oe(i.CULL_FACE),z!==O&&(z===Zu?i.cullFace(i.BACK):z===ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),O=z}function J(z){z!==K&&(V&&i.lineWidth(z),K=z)}function de(z,Me,se){z?(oe(i.POLYGON_OFFSET_FILL),(F!==Me||Y!==se)&&(i.polygonOffset(Me,se),F=Me,Y=se)):Te(i.POLYGON_OFFSET_FILL)}function D(z){z?oe(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function S(z){z===void 0&&(z=i.TEXTURE0+k-1),W!==z&&(i.activeTexture(z),W=z)}function x(z,Me,se){se===void 0&&(W===null?se=i.TEXTURE0+k-1:se=W);let he=ce[se];he===void 0&&(he={type:void 0,texture:void 0},ce[se]=he),(he.type!==z||he.texture!==Me)&&(W!==se&&(i.activeTexture(se),W=se),i.bindTexture(z,Me||_e[z]),he.type=z,he.texture=Me)}function A(){let z=ce[W];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function U(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){Ie.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ie.copy(z))}function Se(z){ee.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ee.copy(z))}function Ve(z,Me){let se=c.get(Me);se===void 0&&(se=new WeakMap,c.set(Me,se));let he=se.get(z);he===void 0&&(he=i.getUniformBlockIndex(Me,z.name),se.set(z,he))}function ve(z,Me){let he=c.get(Me).get(z);l.get(Me)!==he&&(i.uniformBlockBinding(Me,he,z.__bindingPointIndex),l.set(Me,he))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,ce={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,v=null,y=null,I=null,R=null,P=new Fe(0,0,0),N=0,b=!1,E=null,O=null,K=null,F=null,Y=null,Ie.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Te,bindFramebuffer:Ae,drawBuffers:Ne,useProgram:nt,setBlending:L,setMaterial:yt,setFlipSided:Ye,setCullFace:Ze,setLineWidth:J,setPolygonOffset:de,setScissorTest:D,activeTexture:S,bindTexture:x,unbindTexture:A,compressedTexImage2D:U,compressedTexImage3D:B,texImage2D:ge,texImage3D:Re,updateUBOMapping:Ve,uniformBlockBinding:ve,texStorage2D:Le,texStorage3D:fe,texSubImage2D:H,texSubImage3D:pe,compressedTexSubImage2D:re,compressedTexSubImage3D:le,scissor:Ce,viewport:Se,reset:ke}}function $M(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return d?new OffscreenCanvas(S,x):Or("canvas")}function _(S,x,A){let U=1,B=D(S);if((B.width>A||B.height>A)&&(U=A/Math.max(B.width,B.height)),U<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let H=Math.floor(U*B.width),pe=Math.floor(U*B.height);h===void 0&&(h=g(H,pe));let re=x?g(H,pe):h;return re.width=H,re.height=pe,re.getContext("2d").drawImage(S,0,0,H,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+H+"x"+pe+")."),re}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){i.generateMipmap(S)}function M(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(S,x,A,U,B=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=x;if(x===i.RED&&(A===i.FLOAT&&(H=i.R32F),A===i.HALF_FLOAT&&(H=i.R16F),A===i.UNSIGNED_BYTE&&(H=i.R8)),x===i.RED_INTEGER&&(A===i.UNSIGNED_BYTE&&(H=i.R8UI),A===i.UNSIGNED_SHORT&&(H=i.R16UI),A===i.UNSIGNED_INT&&(H=i.R32UI),A===i.BYTE&&(H=i.R8I),A===i.SHORT&&(H=i.R16I),A===i.INT&&(H=i.R32I)),x===i.RG&&(A===i.FLOAT&&(H=i.RG32F),A===i.HALF_FLOAT&&(H=i.RG16F),A===i.UNSIGNED_BYTE&&(H=i.RG8)),x===i.RG_INTEGER&&(A===i.UNSIGNED_BYTE&&(H=i.RG8UI),A===i.UNSIGNED_SHORT&&(H=i.RG16UI),A===i.UNSIGNED_INT&&(H=i.RG32UI),A===i.BYTE&&(H=i.RG8I),A===i.SHORT&&(H=i.RG16I),A===i.INT&&(H=i.RG32I)),x===i.RGB_INTEGER&&(A===i.UNSIGNED_BYTE&&(H=i.RGB8UI),A===i.UNSIGNED_SHORT&&(H=i.RGB16UI),A===i.UNSIGNED_INT&&(H=i.RGB32UI),A===i.BYTE&&(H=i.RGB8I),A===i.SHORT&&(H=i.RGB16I),A===i.INT&&(H=i.RGB32I)),x===i.RGBA_INTEGER&&(A===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),A===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),A===i.UNSIGNED_INT&&(H=i.RGBA32UI),A===i.BYTE&&(H=i.RGBA8I),A===i.SHORT&&(H=i.RGBA16I),A===i.INT&&(H=i.RGBA32I)),x===i.RGB&&A===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),x===i.RGBA){let pe=B?To:ct.getTransfer(U);A===i.FLOAT&&(H=i.RGBA32F),A===i.HALF_FLOAT&&(H=i.RGBA16F),A===i.UNSIGNED_BYTE&&(H=pe===_t?i.SRGB8_ALPHA8:i.RGBA8),A===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),A===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(S,x){let A;return S?x===null||x===bs||x===Zs?A=i.DEPTH24_STENCIL8:x===Ln?A=i.DEPTH32F_STENCIL8:x===Xr&&(A=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bs||x===Zs?A=i.DEPTH_COMPONENT24:x===Ln?A=i.DEPTH_COMPONENT32F:x===Xr&&(A=i.DEPTH_COMPONENT16),A}function I(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Wt&&S.minFilter!==Xt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function R(S){let x=S.target;x.removeEventListener("dispose",R),N(x),x.isVideoTexture&&u.delete(x)}function P(S){let x=S.target;x.removeEventListener("dispose",P),E(x)}function N(S){let x=n.get(S);if(x.__webglInit===void 0)return;let A=S.source,U=f.get(A);if(U){let B=U[x.__cacheKey];B.usedTimes--,B.usedTimes===0&&b(S),Object.keys(U).length===0&&f.delete(A)}n.remove(S)}function b(S){let x=n.get(S);i.deleteTexture(x.__webglTexture);let A=S.source,U=f.get(A);delete U[x.__cacheKey],o.memory.textures--}function E(S){let x=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(x.__webglFramebuffer[U]))for(let B=0;B<x.__webglFramebuffer[U].length;B++)i.deleteFramebuffer(x.__webglFramebuffer[U][B]);else i.deleteFramebuffer(x.__webglFramebuffer[U]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[U])}else{if(Array.isArray(x.__webglFramebuffer))for(let U=0;U<x.__webglFramebuffer.length;U++)i.deleteFramebuffer(x.__webglFramebuffer[U]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let U=0;U<x.__webglColorRenderbuffer.length;U++)x.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[U]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let A=S.textures;for(let U=0,B=A.length;U<B;U++){let H=n.get(A[U]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(A[U])}n.remove(S)}let O=0;function K(){O=0}function F(){let S=O;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),O+=1,S}function Y(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function k(S,x){let A=n.get(S);if(S.isVideoTexture&&J(S),S.isRenderTargetTexture===!1&&S.version>0&&A.__version!==S.version){let U=S.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(A,S,x);return}}t.bindTexture(i.TEXTURE_2D,A.__webglTexture,i.TEXTURE0+x)}function V(S,x){let A=n.get(S);if(S.version>0&&A.__version!==S.version){ee(A,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,A.__webglTexture,i.TEXTURE0+x)}function te(S,x){let A=n.get(S);if(S.version>0&&A.__version!==S.version){ee(A,S,x);return}t.bindTexture(i.TEXTURE_3D,A.__webglTexture,i.TEXTURE0+x)}function X(S,x){let A=n.get(S);if(S.version>0&&A.__version!==S.version){ae(A,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+x)}let W={[oi]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Nr]:i.MIRRORED_REPEAT},ce={[Wt]:i.NEAREST,[ql]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},ue={[Dp]:i.NEVER,[Bp]:i.ALWAYS,[Lp]:i.LESS,[fh]:i.LEQUAL,[Up]:i.EQUAL,[Fp]:i.GEQUAL,[Np]:i.GREATER,[Op]:i.NOTEQUAL};function ye(S,x){if(x.type===Ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Xt||x.magFilter===Wr||x.magFilter===Ys||x.magFilter===hi||x.minFilter===Xt||x.minFilter===Wr||x.minFilter===Ys||x.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,W[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,W[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,W[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ce[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Wt||x.minFilter!==Ys&&x.minFilter!==hi||x.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let A=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ie(S,x){let A=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",R));let U=x.source,B=f.get(U);B===void 0&&(B={},f.set(U,B));let H=Y(x);if(H!==S.__cacheKey){B[H]===void 0&&(B[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,A=!0),B[H].usedTimes++;let pe=B[S.__cacheKey];pe!==void 0&&(B[S.__cacheKey].usedTimes--,pe.usedTimes===0&&b(x)),S.__cacheKey=H,S.__webglTexture=B[H].texture}return A}function ee(S,x,A){let U=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(U=i.TEXTURE_3D);let B=Ie(S,x),H=x.source;t.bindTexture(U,S.__webglTexture,i.TEXTURE0+A);let pe=n.get(H);if(H.version!==pe.__version||B===!0){t.activeTexture(i.TEXTURE0+A);let re=ct.getPrimaries(ct.workingColorSpace),le=x.colorSpace===fi?null:ct.getPrimaries(x.colorSpace),Le=x.colorSpace===fi||re===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let fe=_(x.image,!1,s.maxTextureSize);fe=de(x,fe);let ge=r.convert(x.format,x.colorSpace),Re=r.convert(x.type),Ce=v(x.internalFormat,ge,Re,x.colorSpace,x.isVideoTexture);ye(U,x);let Se,Ve=x.mipmaps,ve=x.isVideoTexture!==!0,ke=pe.__version===void 0||B===!0,z=H.dataReady,Me=I(x,fe);if(x.isDepthTexture)Ce=y(x.format===zs,x.type),ke&&(ve?t.texStorage2D(i.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,ge,Re,null));else if(x.isDataTexture)if(Ve.length>0){ve&&ke&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,Ve[0].width,Ve[0].height);for(let se=0,he=Ve.length;se<he;se++)Se=Ve[se],ve?z&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Se.width,Se.height,ge,Re,Se.data):t.texImage2D(i.TEXTURE_2D,se,Ce,Se.width,Se.height,0,ge,Re,Se.data);x.generateMipmaps=!1}else ve?(ke&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,fe.width,fe.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,ge,Re,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,ge,Re,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ve&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,Ve[0].width,Ve[0].height,fe.depth);for(let se=0,he=Ve.length;se<he;se++)if(Se=Ve[se],x.format!==tn)if(ge!==null)if(ve){if(z)if(x.layerUpdates.size>0){let Ee=yh(Se.width,Se.height,x.format,x.type);for(let j of x.layerUpdates){let be=Se.data.subarray(j*Ee/Se.data.BYTES_PER_ELEMENT,(j+1)*Ee/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,j,Se.width,Se.height,1,ge,be)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,fe.depth,ge,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ce,Se.width,Se.height,fe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,fe.depth,ge,Re,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ce,Se.width,Se.height,fe.depth,0,ge,Re,Se.data)}else{ve&&ke&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,Ve[0].width,Ve[0].height);for(let se=0,he=Ve.length;se<he;se++)Se=Ve[se],x.format!==tn?ge!==null?ve?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Se.width,Se.height,ge,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?z&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Se.width,Se.height,ge,Re,Se.data):t.texImage2D(i.TEXTURE_2D,se,Ce,Se.width,Se.height,0,ge,Re,Se.data)}else if(x.isDataArrayTexture)if(ve){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,fe.width,fe.height,fe.depth),z)if(x.layerUpdates.size>0){let se=yh(fe.width,fe.height,x.format,x.type);for(let he of x.layerUpdates){let Ee=fe.data.subarray(he*se/fe.data.BYTES_PER_ELEMENT,(he+1)*se/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,fe.width,fe.height,1,ge,Re,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ge,Re,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,ge,Re,fe.data);else if(x.isData3DTexture)ve?(ke&&t.texStorage3D(i.TEXTURE_3D,Me,Ce,fe.width,fe.height,fe.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ge,Re,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,ge,Re,fe.data);else if(x.isFramebufferTexture){if(ke)if(ve)t.texStorage2D(i.TEXTURE_2D,Me,Ce,fe.width,fe.height);else{let se=fe.width,he=fe.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ce,se,he,0,ge,Re,null),se>>=1,he>>=1}}else if(Ve.length>0){if(ve&&ke){let se=D(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ce,se.width,se.height)}for(let se=0,he=Ve.length;se<he;se++)Se=Ve[se],ve?z&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge,Re,Se):t.texImage2D(i.TEXTURE_2D,se,Ce,ge,Re,Se);x.generateMipmaps=!1}else if(ve){if(ke){let se=D(fe);t.texStorage2D(i.TEXTURE_2D,Me,Ce,se.width,se.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Re,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ge,Re,fe);m(x)&&p(U),pe.__version=H.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ae(S,x,A){if(x.image.length!==6)return;let U=Ie(S,x),B=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+A);let H=n.get(B);if(B.version!==H.__version||U===!0){t.activeTexture(i.TEXTURE0+A);let pe=ct.getPrimaries(ct.workingColorSpace),re=x.colorSpace===fi?null:ct.getPrimaries(x.colorSpace),le=x.colorSpace===fi||pe===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Le=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let he=0;he<6;he++)!Le&&!fe?ge[he]=_(x.image[he],!0,s.maxCubemapSize):ge[he]=fe?x.image[he].image:x.image[he],ge[he]=de(x,ge[he]);let Re=ge[0],Ce=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),Ve=v(x.internalFormat,Ce,Se,x.colorSpace),ve=x.isVideoTexture!==!0,ke=H.__version===void 0||U===!0,z=B.dataReady,Me=I(x,Re);ye(i.TEXTURE_CUBE_MAP,x);let se;if(Le){ve&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ve,Re.width,Re.height);for(let he=0;he<6;he++){se=ge[he].mipmaps;for(let Ee=0;Ee<se.length;Ee++){let j=se[Ee];x.format!==tn?Ce!==null?ve?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,j.width,j.height,Ce,j.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,Ve,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,j.width,j.height,Ce,Se,j.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,Ve,j.width,j.height,0,Ce,Se,j.data)}}}else{if(se=x.mipmaps,ve&&ke){se.length>0&&Me++;let he=D(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ve,he.width,he.height)}for(let he=0;he<6;he++)if(fe){ve?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ge[he].width,ge[he].height,Ce,Se,ge[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ve,ge[he].width,ge[he].height,0,Ce,Se,ge[he].data);for(let Ee=0;Ee<se.length;Ee++){let be=se[Ee].image[he].image;ve?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,be.width,be.height,Ce,Se,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,Ve,be.width,be.height,0,Ce,Se,be.data)}}else{ve?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce,Se,ge[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ve,Ce,Se,ge[he]);for(let Ee=0;Ee<se.length;Ee++){let j=se[Ee];ve?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,Ce,Se,j.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,Ve,Ce,Se,j.image[he])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),H.__version=B.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function _e(S,x,A,U,B,H){let pe=r.convert(A.format,A.colorSpace),re=r.convert(A.type),le=v(A.internalFormat,pe,re,A.colorSpace),Le=n.get(x),fe=n.get(A);if(fe.__renderTarget=x,!Le.__hasExternalTextures){let ge=Math.max(1,x.width>>H),Re=Math.max(1,x.height>>H);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,H,le,ge,Re,x.depth,0,pe,re,null):t.texImage2D(B,H,le,ge,Re,0,pe,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Ze(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,B,fe.__webglTexture,0,Ye(x)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,B,fe.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(S,x,A){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer){let U=x.depthTexture,B=U&&U.isDepthTexture?U.type:null,H=y(x.stencilBuffer,B),pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=Ye(x);Ze(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,H,x.width,x.height):A?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,H,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,H,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,S)}else{let U=x.textures;for(let B=0;B<U.length;B++){let H=U[B],pe=r.convert(H.format,H.colorSpace),re=r.convert(H.type),le=v(H.internalFormat,pe,re,H.colorSpace),Le=Ye(x);A&&Ze(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,le,x.width,x.height):Ze(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,le,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,le,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=n.get(x.depthTexture);U.__renderTarget=x,(!U.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);let B=U.__webglTexture,H=Ye(x);if(x.depthTexture.format===Os)Ze(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(x.depthTexture.format===zs)Ze(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Ae(S){let x=n.get(S),A=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){let U=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),U){let B=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,U.removeEventListener("dispose",B)};U.addEventListener("dispose",B),x.__depthDisposeCallback=B}x.__boundDepthTexture=U}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");Te(x.__webglFramebuffer,S)}else if(A){x.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[U]),x.__webglDepthbuffer[U]===void 0)x.__webglDepthbuffer[U]=i.createRenderbuffer(),oe(x.__webglDepthbuffer[U],S,!1);else{let B=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,H)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),oe(x.__webglDepthbuffer,S,!1);else{let U=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,B)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(S,x,A){let U=n.get(S);x!==void 0&&_e(U.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),A!==void 0&&Ae(S)}function nt(S){let x=S.texture,A=n.get(S),U=n.get(x);S.addEventListener("dispose",P);let B=S.textures,H=S.isWebGLCubeRenderTarget===!0,pe=B.length>1;if(pe||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=x.version,o.memory.textures++),H){A.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer[re]=[];for(let le=0;le<x.mipmaps.length;le++)A.__webglFramebuffer[re][le]=i.createFramebuffer()}else A.__webglFramebuffer[re]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)A.__webglFramebuffer[re]=i.createFramebuffer()}else A.__webglFramebuffer=i.createFramebuffer();if(pe)for(let re=0,le=B.length;re<le;re++){let Le=n.get(B[re]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&Ze(S)===!1){A.__webglMultisampledFramebuffer=i.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let re=0;re<B.length;re++){let le=B[re];A.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,A.__webglColorRenderbuffer[re]);let Le=r.convert(le.format,le.colorSpace),fe=r.convert(le.type),ge=v(le.internalFormat,Le,fe,le.colorSpace,S.isXRRenderTarget===!0),Re=Ye(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ge,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,A.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(A.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(A.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),ye(i.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)_e(A.__webglFramebuffer[re][le],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else _e(A.__webglFramebuffer[re],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let re=0,le=B.length;re<le;re++){let Le=B[re],fe=n.get(Le);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),ye(i.TEXTURE_2D,Le),_e(A.__webglFramebuffer,S,Le,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),m(Le)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(re=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,U.__webglTexture),ye(re,x),x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)_e(A.__webglFramebuffer[le],S,x,i.COLOR_ATTACHMENT0,re,le);else _e(A.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,re,0);m(x)&&p(re),t.unbindTexture()}S.depthBuffer&&Ae(S)}function He(S){let x=S.textures;for(let A=0,U=x.length;A<U;A++){let B=x[A];if(m(B)){let H=M(S),pe=n.get(B).__webglTexture;t.bindTexture(H,pe),p(H),t.unbindTexture()}}}let et=[],L=[];function yt(S){if(S.samples>0){if(Ze(S)===!1){let x=S.textures,A=S.width,U=S.height,B=i.COLOR_BUFFER_BIT,H=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(S),re=x.length>1;if(re)for(let le=0;le<x.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let le=0;le<x.length;le++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[le]);let Le=n.get(x[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,A,U,0,0,A,U,B,i.NEAREST),l===!0&&(et.length=0,L.length=0,et.push(i.COLOR_ATTACHMENT0+le),S.depthBuffer&&S.resolveDepthBuffer===!1&&(et.push(H),L.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let le=0;le<x.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,pe.__webglColorRenderbuffer[le]);let Le=n.get(x[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let x=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ye(S){return Math.min(s.maxSamples,S.samples)}function Ze(S){let x=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function J(S){let x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function de(S,x){let A=S.colorSpace,U=S.format,B=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||A!==an&&A!==fi&&(ct.getTransfer(A)===_t?(U!==tn||B!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),x}function D(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=Ne,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ze}function KM(i,e){function t(n,s=fi){let r,o=ct.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.BYTE;if(n===nh)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===bs)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Ji)return i.HALF_FLOAT;if(n===sh)return i.ALPHA;if(n===rh)return i.RGB;if(n===tn)return i.RGBA;if(n===oh)return i.LUMINANCE;if(n===ah)return i.LUMINANCE_ALPHA;if(n===Os)return i.DEPTH_COMPONENT;if(n===zs)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===lh)return i.RG;if(n===Jl)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===aa||n===la||n===ca||n===ua)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===xc||n===yc||n===vc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===Mc||n===bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ha)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ch||n===Sc||n===Ec||n===wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var jM={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},JM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Yt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qt({vertexShader:JM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends bi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,_=new Dh,m=t.getContextAttributes(),p=null,M=null,v=[],y=[],I=new Be,R=null,P=new Gt;P.viewport=new rt;let N=new Gt;N.viewport=new rt;let b=[P,N],E=new Ul,O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ae=v[ee];return ae===void 0&&(ae=new ma,v[ee]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ee){let ae=v[ee];return ae===void 0&&(ae=new ma,v[ee]=ae),ae.getGripSpace()},this.getHand=function(ee){let ae=v[ee];return ae===void 0&&(ae=new ma,v[ee]=ae),ae.getHandSpace()};function F(ee){let ae=y.indexOf(ee.inputSource);if(ae===-1)return;let _e=v[ae];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,c||o),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Y(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",k);for(let ee=0;ee<v.length;ee++){let ae=y[ee];ae!==null&&(y[ee]=null,v[ee].disconnect(ae))}O=null,K=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,M=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let _e=null,oe=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?zs:Os,oe=m.stencil?Zs:bs);let Ae={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ln(f.textureWidth,f.textureHeight,{format:tn,type:Yn,depthTexture:new Vo(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ln(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(ee){for(let ae=0;ae<ee.removed.length;ae++){let _e=ee.removed[ae],oe=y.indexOf(_e);oe>=0&&(y[oe]=null,v[oe].disconnect(_e))}for(let ae=0;ae<ee.added.length;ae++){let _e=ee.added[ae],oe=y.indexOf(_e);if(oe===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=y.length){y.push(_e),oe=Ae;break}else if(y[Ae]===null){y[Ae]=_e,oe=Ae;break}if(oe===-1)break}let Te=v[oe];Te&&Te.connect(_e)}}let V=new C,te=new C;function X(ee,ae,_e){V.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);let oe=V.distanceTo(te),Te=ae.projectionMatrix.elements,Ae=_e.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),nt=Te[14]/(Te[10]+1),He=(Te[9]+1)/Te[5],et=(Te[9]-1)/Te[5],L=(Te[8]-1)/Te[0],yt=(Ae[8]+1)/Ae[0],Ye=Ne*L,Ze=Ne*yt,J=oe/(-L+yt),de=J*-L;if(ae.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(de),ee.translateZ(J),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Te[10]===-1)ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let D=Ne+J,S=nt+J,x=Ye-de,A=Ze+(oe-de),U=He*nt/S*D,B=et*nt/S*D;ee.projectionMatrix.makePerspective(x,A,U,B,D,S),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function W(ee,ae){ae===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ae.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ae=ee.near,_e=ee.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),E.near=N.near=P.near=ae,E.far=N.far=P.far=_e,(O!==E.near||K!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,K=E.far),P.layers.mask=ee.layers.mask|2,N.layers.mask=ee.layers.mask|4,E.layers.mask=P.layers.mask|N.layers.mask;let oe=ee.parent,Te=E.cameras;W(E,oe);for(let Ae=0;Ae<Te.length;Ae++)W(Te[Ae],oe);Te.length===2?X(E,P,N):E.projectionMatrix.copy(P.projectionMatrix),ce(ee,E,oe)};function ce(ee,ae,_e){_e===null?ee.matrix.copy(ae.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ae.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Vs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let ue=null;function ye(ee,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){let _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let oe=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,oe=!0);for(let Ae=0;Ae<_e.length;Ae++){let Ne=_e[Ae],nt=null;if(d!==null)nt=d.getViewport(Ne);else{let et=h.getViewSubImage(f,Ne);nt=et.viewport,Ae===0&&(e.setRenderTargetTextures(M,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(M))}let He=b[Ae];He===void 0&&(He=new Gt,He.layers.enable(Ae),He.viewport=new rt,b[Ae]=He),He.matrix.fromArray(Ne.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ne.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(nt.x,nt.y,nt.width,nt.height),Ae===0&&(E.matrix.copy(He.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),oe===!0&&E.cameras.push(He)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let Ae=h.getDepthInformation(_e[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,s.renderState)}}for(let _e=0;_e<v.length;_e++){let oe=y[_e],Te=v[_e];oe!==null&&Te!==void 0&&Te.update(oe,ae,c||o)}ue&&ue(ee,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Ie=new gm;Ie.setAnimationLoop(ye),this.setAnimationLoop=function(ee){ue=ee},this.dispose=function(){}}},Qs=new ai,eb=new je;function tb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),v=M.envMap,y=M.envMapRotation;v&&(m.envMap.value=v,Qs.copy(y),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),m.envMapRotation.value.setFromMatrix4(eb.makeRotationFromEuler(Qs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",m));let I=v.program;n.updateUBOMapping(M,I);let R=e.render.frame;r[M.id]!==R&&(f(M),r[M.id]=R)}function u(M){let v=h();M.__bindingPointIndex=v;let y=i.createBuffer(),I=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=s[M.id],y=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,P=y.length;R<P;R++){let N=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,E=N.length;b<E;b++){let O=N[b];if(d(O,R,b,I)===!0){let K=O.__offset,F=Array.isArray(O.value)?O.value:[O.value],Y=0;for(let k=0;k<F.length;k++){let V=F[k],te=_(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,K+Y,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,Y),Y+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,y,I){let R=M.value,P=v+"_"+y;if(I[P]===void 0)return typeof R=="number"||typeof R=="boolean"?I[P]=R:I[P]=R.clone(),!0;{let N=I[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return I[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(M){let v=M.uniforms,y=0,I=16;for(let P=0,N=v.length;P<N;P++){let b=Array.isArray(v[P])?v[P]:[v[P]];for(let E=0,O=b.length;E<O;E++){let K=b[E],F=Array.isArray(K.value)?K.value:[K.value];for(let Y=0,k=F.length;Y<k;Y++){let V=F[Y],te=_(V),X=y%I,W=X%te.boundary,ce=X+W;y+=W,ce!==0&&I-ce<te.storage&&(y+=I-ce),K.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=y,y+=te.storage}}}let R=y%I;return R>0&&(y+=I-R),M.__size=y,M.__cache={},this}function _(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Cc=class{constructor(e={}){let{canvas:t=zp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,M=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this.toneMapping=ui,this.toneMappingExposure=1;let y=this,I=!1,R=0,P=0,N=null,b=-1,E=null,O=new rt,K=new rt,F=null,Y=new Fe(0),k=0,V=t.width,te=t.height,X=1,W=null,ce=null,ue=new rt(0,0,V,te),ye=new rt(0,0,V,te),Ie=!1,ee=new kr,ae=!1,_e=!1;this.transmissionResolutionScale=1;let oe=new je,Te=new je,Ae=new C,Ne=new rt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function et(){return N===null?X:1}let L=n;function yt(T,q){return t.getContext(T,q)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",j,!1),L===null){let q="webgl2";if(L=yt(q,T),L===null)throw yt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,Ze,J,de,D,S,x,A,U,B,H,pe,re,le,Le,fe,ge,Re,Ce,Se,Ve,ve,ke,z;function Me(){Ye=new yv(L),Ye.init(),ve=new KM(L,Ye),Ze=new dv(L,Ye,e,ve),J=new ZM(L,Ye),Ze.reverseDepthBuffer&&f&&J.buffers.depth.setReversed(!0),de=new bv(L),D=new NM,S=new $M(L,Ye,J,D,Ze,ve,de),x=new mv(y),A=new xv(y),U=new C_(L),ke=new hv(L,U),B=new vv(L,U,de,ke),H=new Ev(L,B,U,de),Ce=new Sv(L,Ze,S),fe=new pv(D),pe=new UM(y,x,A,Ye,Ze,ke,fe),re=new tb(y,D),le=new FM,Le=new GM(Ye),Re=new uv(y,x,A,J,H,d,l),ge=new qM(y,H,Ze),z=new nb(L,de,Ze,J),Se=new fv(L,Ye,de),Ve=new Mv(L,Ye,de),de.programs=pe.programs,y.capabilities=Ze,y.extensions=Ye,y.properties=D,y.renderLists=le,y.shadowMap=ge,y.state=J,y.info=de}Me();let se=new Lh(y,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(V,te,!1))},this.getSize=function(T){return T.set(V,te)},this.setSize=function(T,q,ne=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,te=q,t.width=Math.floor(T*X),t.height=Math.floor(q*X),ne===!0&&(t.style.width=T+"px",t.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(V*X,te*X).floor()},this.setDrawingBufferSize=function(T,q,ne){V=T,te=q,X=ne,t.width=Math.floor(T*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,q,ne,ie){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,q,ne,ie),J.viewport(O.copy(ue).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(ye)},this.setScissor=function(T,q,ne,ie){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,q,ne,ie),J.scissor(K.copy(ye).multiplyScalar(X).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){J.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(T=!0,q=!0,ne=!0){let ie=0;if(T){let $=!1;if(N!==null){let xe=N.texture.format;$=xe===Ql||xe===Jl||xe===jl}if($){let xe=N.texture.type,Pe=xe===Yn||xe===bs||xe===Xr||xe===Zs||xe===Zl||xe===$l,Ue=Re.getClearColor(),De=Re.getClearAlpha(),$e=Ue.r,Ke=Ue.g,We=Ue.b;Pe?(g[0]=$e,g[1]=Ke,g[2]=We,g[3]=De,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=$e,_[1]=Ke,_[2]=We,_[3]=De,L.clearBufferiv(L.COLOR,0,_))}else ie|=L.COLOR_BUFFER_BIT}q&&(ie|=L.DEPTH_BUFFER_BIT),ne&&(ie|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",j,!1),Re.dispose(),le.dispose(),Le.dispose(),D.dispose(),x.dispose(),A.dispose(),H.dispose(),ke.dispose(),z.dispose(),pe.dispose(),se.dispose(),se.removeEventListener("sessionstart",mi),se.removeEventListener("sessionend",gi),zt.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let T=de.autoReset,q=ge.enabled,ne=ge.autoUpdate,ie=ge.needsUpdate,$=ge.type;Me(),de.autoReset=T,ge.enabled=q,ge.autoUpdate=ne,ge.needsUpdate=ie,ge.type=$}function j(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){let q=T.target;q.removeEventListener("dispose",be),Ge(q)}function Ge(T){Et(T),D.remove(T)}function Et(T){let q=D.get(T).programs;q!==void 0&&(q.forEach(function(ne){pe.releaseProgram(ne)}),T.isShaderMaterial&&pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,ne,ie,$,xe){q===null&&(q=nt);let Pe=$.isMesh&&$.matrixWorld.determinant()<0,Ue=Ca(T,q,ne,ie,$);J.setMaterial(ie,Pe);let De=ne.index,$e=1;if(ie.wireframe===!0){if(De=B.getWireframeAttribute(ne),De===void 0)return;$e=2}let Ke=ne.drawRange,We=ne.attributes.position,at=Ke.start*$e,ut=(Ke.start+Ke.count)*$e;xe!==null&&(at=Math.max(at,xe.start*$e),ut=Math.min(ut,(xe.start+xe.count)*$e)),De!==null?(at=Math.max(at,0),ut=Math.min(ut,De.count)):We!=null&&(at=Math.max(at,0),ut=Math.min(ut,We.count));let Dt=ut-at;if(Dt<0||Dt===1/0)return;ke.setup($,ie,Ue,ne,De);let At,lt=Se;if(De!==null&&(At=U.get(De),lt=Ve,lt.setIndex(At)),$.isMesh)ie.wireframe===!0?(J.setLineWidth(ie.wireframeLinewidth*et()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if($.isLine){let Xe=ie.linewidth;Xe===void 0&&(Xe=1),J.setLineWidth(Xe*et()),$.isLineSegments?lt.setMode(L.LINES):$.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else $.isPoints?lt.setMode(L.POINTS):$.isSprite&&lt.setMode(L.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)lt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))lt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Xe=$._multiDrawStarts,kt=$._multiDrawCounts,ht=$._multiDrawCount,sn=De?U.get(De).bytesPerElement:1,Cn=D.get(ie).currentProgram.getUniforms();for(let qt=0;qt<ht;qt++)Cn.setValue(L,"_gl_DrawID",qt),lt.render(Xe[qt]/sn,kt[qt])}else if($.isInstancedMesh)lt.renderInstances(at,Dt,$.count);else if(ne.isInstancedBufferGeometry){let Xe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,kt=Math.min(ne.instanceCount,Xe);lt.renderInstances(at,Dt,kt)}else lt.render(at,Dt)};function ze(T,q,ne){T.transparent===!0&&T.side===bt&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,Rs(T,q,ne),T.side=In,T.needsUpdate=!0,Rs(T,q,ne),T.side=bt):Rs(T,q,ne)}this.compile=function(T,q,ne=null){ne===null&&(ne=T),p=Le.get(ne),p.init(q),v.push(p),ne.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),T!==ne&&T.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let ie=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let xe=$.material;if(xe)if(Array.isArray(xe))for(let Pe=0;Pe<xe.length;Pe++){let Ue=xe[Pe];ze(Ue,ne,$),ie.add(Ue)}else ze(xe,ne,$),ie.add(xe)}),v.pop(),p=null,ie},this.compileAsync=function(T,q,ne=null){let ie=this.compile(T,q,ne);return new Promise($=>{function xe(){if(ie.forEach(function(Pe){D.get(Pe).currentProgram.isReady()&&ie.delete(Pe)}),ie.size===0){$(T);return}setTimeout(xe,10)}Ye.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let vt=null;function It(T){vt&&vt(T)}function mi(){zt.stop()}function gi(){zt.start()}let zt=new gm;zt.setAnimationLoop(It),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(T){vt=T,se.setAnimationLoop(T),T===null?zt.stop():zt.start()},se.addEventListener("sessionstart",mi),se.addEventListener("sessionend",gi),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(q),q=se.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,q,N),p=Le.get(T,v.length),p.init(q),v.push(p),Te.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ee.setFromProjectionMatrix(Te),_e=this.localClippingEnabled,ae=fe.init(this.clippingPlanes,_e),m=le.get(T,M.length),m.init(),M.push(m),se.enabled===!0&&se.isPresenting===!0){let xe=y.xr.getDepthSensingMesh();xe!==null&&nn(xe,q,-1/0,y.sortObjects)}nn(T,q,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,ce),He=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,He&&Re.addToRenderList(m,T),this.info.render.frame++,ae===!0&&fe.beginShadows();let ne=p.state.shadowsArray;ge.render(ne,T,q),ae===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=m.opaque,$=m.transmissive;if(p.setupLights(),q.isArrayCamera){let xe=q.cameras;if($.length>0)for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++){let De=xe[Pe];_i(ie,$,T,De)}He&&Re.render(T);for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++){let De=xe[Pe];jn(m,T,De,De.viewport)}}else $.length>0&&_i(ie,$,T,q),He&&Re.render(T),jn(m,T,q);N!==null&&P===0&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(y,T,q),ke.resetDefaultState(),b=-1,E=null,v.pop(),v.length>0?(p=v[v.length-1],ae===!0&&fe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function nn(T,q,ne,ie){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){ie&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);let Pe=H.update(T),Ue=T.material;Ue.visible&&m.push(T,Pe,Ue,ne,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){let Pe=H.update(T),Ue=T.material;if(ie&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ne.copy(Pe.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(Ue)){let De=Pe.groups;for(let $e=0,Ke=De.length;$e<Ke;$e++){let We=De[$e],at=Ue[We.materialIndex];at&&at.visible&&m.push(T,Pe,at,ne,Ne.z,We)}}else Ue.visible&&m.push(T,Pe,Ue,ne,Ne.z,null)}}let xe=T.children;for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++)nn(xe[Pe],q,ne,ie)}function jn(T,q,ne,ie){let $=T.opaque,xe=T.transmissive,Pe=T.transparent;p.setupLightsView(ne),ae===!0&&fe.setGlobalState(y.clippingPlanes,ne),ie&&J.viewport(O.copy(ie)),$.length>0&&Gn($,q,ne),xe.length>0&&Gn(xe,q,ne),Pe.length>0&&Gn(Pe,q,ne),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function _i(T,q,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new ln(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Ji:Yn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let xe=p.state.transmissionRenderTarget[ie.id],Pe=ie.viewport||O;xe.setSize(Pe.z*y.transmissionResolutionScale,Pe.w*y.transmissionResolutionScale);let Ue=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(Y),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),He&&Re.render(ne);let De=y.toneMapping;y.toneMapping=ui;let $e=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),ae===!0&&fe.setGlobalState(y.clippingPlanes,ie),Gn(T,ne,ie),S.updateMultisampleRenderTarget(xe),S.updateRenderTargetMipmap(xe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let We=0,at=q.length;We<at;We++){let ut=q[We],Dt=ut.object,At=ut.geometry,lt=ut.material,Xe=ut.group;if(lt.side===bt&&Dt.layers.test(ie.layers)){let kt=lt.side;lt.side=cn,lt.needsUpdate=!0,ss(Dt,ne,ie,At,lt,Xe),lt.side=kt,lt.needsUpdate=!0,Ke=!0}}Ke===!0&&(S.updateMultisampleRenderTarget(xe),S.updateRenderTargetMipmap(xe))}y.setRenderTarget(Ue),y.setClearColor(Y,k),$e!==void 0&&(ie.viewport=$e),y.toneMapping=De}function Gn(T,q,ne){let ie=q.isScene===!0?q.overrideMaterial:null;for(let $=0,xe=T.length;$<xe;$++){let Pe=T[$],Ue=Pe.object,De=Pe.geometry,$e=ie===null?Pe.material:ie,Ke=Pe.group;Ue.layers.test(ne.layers)&&ss(Ue,q,ne,De,$e,Ke)}}function ss(T,q,ne,ie,$,xe){T.onBeforeRender(y,q,ne,ie,$,xe),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(y,q,ne,ie,T,xe),$.transparent===!0&&$.side===bt&&$.forceSinglePass===!1?($.side=cn,$.needsUpdate=!0,y.renderBufferDirect(ne,q,ie,$,T,xe),$.side=In,$.needsUpdate=!0,y.renderBufferDirect(ne,q,ie,$,T,xe),$.side=bt):y.renderBufferDirect(ne,q,ie,$,T,xe),T.onAfterRender(y,q,ne,ie,$,xe)}function Rs(T,q,ne){q.isScene!==!0&&(q=nt);let ie=D.get(T),$=p.state.lights,xe=p.state.shadowsArray,Pe=$.state.version,Ue=pe.getParameters(T,$.state,xe,q,ne),De=pe.getProgramCacheKey(Ue),$e=ie.programs;ie.environment=T.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(T.isMeshStandardMaterial?A:x).get(T.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",be),$e=new Map,ie.programs=$e);let Ke=$e.get(De);if(Ke!==void 0){if(ie.currentProgram===Ke&&ie.lightsStateVersion===Pe)return ao(T,Ue),Ke}else Ue.uniforms=pe.getUniforms(T),T.onBeforeCompile(Ue,y),Ke=pe.acquireProgram(Ue,De),$e.set(De,Ke),ie.uniforms=Ue.uniforms;let We=ie.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=fe.uniform),ao(T,Ue),ie.needsLights=Ia(T),ie.lightsStateVersion=Pe,ie.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),ie.currentProgram=Ke,ie.uniformsList=null,Ke}function oo(T){if(T.uniformsList===null){let q=T.currentProgram.getUniforms();T.uniformsList=$r.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function ao(T,q){let ne=D.get(T);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function Ca(T,q,ne,ie,$){q.isScene!==!0&&(q=nt),S.resetTextureUnits();let xe=q.fog,Pe=ie.isMeshStandardMaterial?q.environment:null,Ue=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:an,De=(ie.isMeshStandardMaterial?A:x).get(ie.envMap||Pe),$e=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ke=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),We=!!ne.morphAttributes.position,at=!!ne.morphAttributes.normal,ut=!!ne.morphAttributes.color,Dt=ui;ie.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Dt=y.toneMapping);let At=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,lt=At!==void 0?At.length:0,Xe=D.get(ie),kt=p.state.lights;if(ae===!0&&(_e===!0||T!==E)){let wt=T===E&&ie.id===b;fe.setState(ie,T,wt)}let ht=!1;ie.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==kt.state.version||Xe.outputColorSpace!==Ue||$.isBatchedMesh&&Xe.batching===!1||!$.isBatchedMesh&&Xe.batching===!0||$.isBatchedMesh&&Xe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Xe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Xe.instancing===!1||!$.isInstancedMesh&&Xe.instancing===!0||$.isSkinnedMesh&&Xe.skinning===!1||!$.isSkinnedMesh&&Xe.skinning===!0||$.isInstancedMesh&&Xe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xe.instancingMorph===!1&&$.morphTexture!==null||Xe.envMap!==De||ie.fog===!0&&Xe.fog!==xe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==fe.numPlanes||Xe.numIntersection!==fe.numIntersection)||Xe.vertexAlphas!==$e||Xe.vertexTangents!==Ke||Xe.morphTargets!==We||Xe.morphNormals!==at||Xe.morphColors!==ut||Xe.toneMapping!==Dt||Xe.morphTargetsCount!==lt)&&(ht=!0):(ht=!0,Xe.__version=ie.version);let sn=Xe.currentProgram;ht===!0&&(sn=Rs(ie,q,$));let Cn=!1,qt=!1,Fi=!1,Mt=sn.getUniforms(),Sn=Xe.uniforms;if(J.useProgram(sn.program)&&(Cn=!0,qt=!0,Fi=!0),ie.id!==b&&(b=ie.id,qt=!0),Cn||E!==T){J.buffers.depth.getReversed()?(oe.copy(T.projectionMatrix),Hp(oe),Vp(oe),Mt.setValue(L,"projectionMatrix",oe)):Mt.setValue(L,"projectionMatrix",T.projectionMatrix),Mt.setValue(L,"viewMatrix",T.matrixWorldInverse);let Ct=Mt.map.cameraPosition;Ct!==void 0&&Ct.setValue(L,Ae.setFromMatrixPosition(T.matrixWorld)),Ze.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,qt=!0,Fi=!0)}if($.isSkinnedMesh){Mt.setOptional(L,$,"bindMatrix"),Mt.setOptional(L,$,"bindMatrixInverse");let wt=$.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),Mt.setValue(L,"boneTexture",wt.boneTexture,S))}$.isBatchedMesh&&(Mt.setOptional(L,$,"batchingTexture"),Mt.setValue(L,"batchingTexture",$._matricesTexture,S),Mt.setOptional(L,$,"batchingIdTexture"),Mt.setValue(L,"batchingIdTexture",$._indirectTexture,S),Mt.setOptional(L,$,"batchingColorTexture"),$._colorsTexture!==null&&Mt.setValue(L,"batchingColorTexture",$._colorsTexture,S));let En=ne.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Ce.update($,ne,sn),(qt||Xe.receiveShadow!==$.receiveShadow)&&(Xe.receiveShadow=$.receiveShadow,Mt.setValue(L,"receiveShadow",$.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Sn.envMap.value=De,Sn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),qt&&(Mt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&Pa(Sn,Fi),xe&&ie.fog===!0&&re.refreshFogUniforms(Sn,xe),re.refreshMaterialUniforms(Sn,ie,X,te,p.state.transmissionRenderTarget[T.id]),$r.upload(L,oo(Xe),Sn,S)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&($r.upload(L,oo(Xe),Sn,S),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Mt.setValue(L,"center",$.center),Mt.setValue(L,"modelViewMatrix",$.modelViewMatrix),Mt.setValue(L,"normalMatrix",$.normalMatrix),Mt.setValue(L,"modelMatrix",$.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let wt=ie.uniformsGroups;for(let Ct=0,Nn=wt.length;Ct<Nn;Ct++){let Jn=wt[Ct];z.update(Jn,sn),z.bind(Jn,sn)}}return sn}function Pa(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Ia(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,q,ne){D.get(T.texture).__webglTexture=q,D.get(T.depthTexture).__webglTexture=ne;let ie=D.get(T);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,q){let ne=D.get(T);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};let rs=L.createFramebuffer();this.setRenderTarget=function(T,q=0,ne=0){N=T,R=q,P=ne;let ie=!0,$=null,xe=!1,Pe=!1;if(T){let De=D.get(T);if(De.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(L.FRAMEBUFFER,null),ie=!1;else if(De.__webglFramebuffer===void 0)S.setupRenderTarget(T);else if(De.__hasExternalTextures)S.rebindTextures(T,D.get(T.texture).__webglTexture,D.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let We=T.depthTexture;if(De.__boundDepthTexture!==We){if(We!==null&&D.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(T)}}let $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Pe=!0);let Ke=D.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[q])?$=Ke[q][ne]:$=Ke[q],xe=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?$=D.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?$=Ke[ne]:$=Ke,O.copy(T.viewport),K.copy(T.scissor),F=T.scissorTest}else O.copy(ue).multiplyScalar(X).floor(),K.copy(ye).multiplyScalar(X).floor(),F=Ie;if(ne!==0&&($=rs),J.bindFramebuffer(L.FRAMEBUFFER,$)&&ie&&J.drawBuffers(T,$),J.viewport(O),J.scissor(K),J.setScissorTest(F),xe){let De=D.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,De.__webglTexture,ne)}else if(Pe){let De=D.get(T.texture),$e=q;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,ne,$e)}else if(T!==null&&ne!==0){let De=D.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,ne)}b=-1},this.readRenderTargetPixels=function(T,q,ne,ie,$,xe,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=D.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){J.bindFramebuffer(L.FRAMEBUFFER,Ue);try{let De=T.texture,$e=De.format,Ke=De.type;if(!Ze.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-ie&&ne>=0&&ne<=T.height-$&&L.readPixels(q,ne,ie,$,ve.convert($e),ve.convert(Ke),xe)}finally{let De=N!==null?D.get(N).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,q,ne,ie,$,xe,Pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=D.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){let De=T.texture,$e=De.format,Ke=De.type;if(!Ze.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=T.width-ie&&ne>=0&&ne<=T.height-$){J.bindFramebuffer(L.FRAMEBUFFER,Ue);let We=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.bufferData(L.PIXEL_PACK_BUFFER,xe.byteLength,L.STREAM_READ),L.readPixels(q,ne,ie,$,ve.convert($e),ve.convert(Ke),0);let at=N!==null?D.get(N).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,at);let ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await kp(L,ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xe),L.deleteBuffer(We),L.deleteSync(ut),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,q=null,ne=0){T.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1]);let ie=Math.pow(2,-ne),$=Math.floor(T.image.width*ie),xe=Math.floor(T.image.height*ie),Pe=q!==null?q.x:0,Ue=q!==null?q.y:0;S.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,ne,0,0,Pe,Ue,$,xe),J.unbindTexture()};let os=L.createFramebuffer(),lo=L.createFramebuffer();this.copyTextureToTexture=function(T,q,ne=null,ie=null,$=0,xe=null){T.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,T=arguments[1],q=arguments[2],xe=arguments[3]||0,ne=null),xe===null&&($!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=$,$=0):xe=0);let Pe,Ue,De,$e,Ke,We,at,ut,Dt,At=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(ne!==null)Pe=ne.max.x-ne.min.x,Ue=ne.max.y-ne.min.y,De=ne.isBox3?ne.max.z-ne.min.z:1,$e=ne.min.x,Ke=ne.min.y,We=ne.isBox3?ne.min.z:0;else{let En=Math.pow(2,-$);Pe=Math.floor(At.width*En),Ue=Math.floor(At.height*En),T.isDataArrayTexture?De=At.depth:T.isData3DTexture?De=Math.floor(At.depth*En):De=1,$e=0,Ke=0,We=0}ie!==null?(at=ie.x,ut=ie.y,Dt=ie.z):(at=0,ut=0,Dt=0);let lt=ve.convert(q.format),Xe=ve.convert(q.type),kt;q.isData3DTexture?(S.setTexture3D(q,0),kt=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(S.setTexture2DArray(q,0),kt=L.TEXTURE_2D_ARRAY):(S.setTexture2D(q,0),kt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);let ht=L.getParameter(L.UNPACK_ROW_LENGTH),sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),qt=L.getParameter(L.UNPACK_SKIP_ROWS),Fi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$e),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,We);let Mt=T.isDataArrayTexture||T.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){let En=D.get(T),wt=D.get(q),Ct=D.get(En.__renderTarget),Nn=D.get(wt.__renderTarget);J.bindFramebuffer(L.READ_FRAMEBUFFER,Ct.__webglFramebuffer),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Jn=0;Jn<De;Jn++)Mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.get(T).__webglTexture,$,We+Jn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.get(q).__webglTexture,xe,Dt+Jn)),L.blitFramebuffer($e,Ke,Pe,Ue,at,ut,Pe,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);J.bindFramebuffer(L.READ_FRAMEBUFFER,null),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||D.has(T)){let En=D.get(T),wt=D.get(q);J.bindFramebuffer(L.READ_FRAMEBUFFER,os),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,lo);for(let Ct=0;Ct<De;Ct++)Mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,En.__webglTexture,$,We+Ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,En.__webglTexture,$),Sn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,xe,Dt+Ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,xe),$!==0?L.blitFramebuffer($e,Ke,Pe,Ue,at,ut,Pe,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):Sn?L.copyTexSubImage3D(kt,xe,at,ut,Dt+Ct,$e,Ke,Pe,Ue):L.copyTexSubImage2D(kt,xe,at,ut,$e,Ke,Pe,Ue);J.bindFramebuffer(L.READ_FRAMEBUFFER,null),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Sn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(kt,xe,at,ut,Dt,Pe,Ue,De,lt,Xe,At.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(kt,xe,at,ut,Dt,Pe,Ue,De,lt,At.data):L.texSubImage3D(kt,xe,at,ut,Dt,Pe,Ue,De,lt,Xe,At):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,xe,at,ut,Pe,Ue,lt,Xe,At.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,xe,at,ut,At.width,At.height,lt,At.data):L.texSubImage2D(L.TEXTURE_2D,xe,at,ut,Pe,Ue,lt,Xe,At);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fi),xe===0&&q.generateMipmaps&&L.generateMipmap(kt),J.unbindTexture()},this.copyTextureToTexture3D=function(T,q,ne=null,ie=null,$=0){return T.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,T=arguments[2],q=arguments[3],$=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,q,ne,ie,$)},this.initRenderTarget=function(T){D.get(T).__webglFramebuffer===void 0&&S.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),J.unbindTexture()},this.resetState=function(){R=0,P=0,N=null,J.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};function bm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Rt,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Mm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let g=Mm(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Mm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new mt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Nh(i,e){if(e===uh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qr||e===fa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===qr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ic=class extends Ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ji.extractUrlBase(e);o=ji.resolveURL(c,this.path)}else o=ji.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Am){try{o[ot.KHR_BINARY_GLTF]=new sf(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new hf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new kh;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new rf(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new of;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new af;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ib(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zh=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new _s(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ws(u),c.distance=h;break;case"spot":c=new Ko(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},kh=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){let s=[];e.color=new Fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],an)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],an),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],an),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ft)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Qh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ef=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tf=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},nf=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Zn.TRIANGLES&&c.mode!==Zn.TRIANGLE_STRIP&&c.mode!==Zn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let _=new je,m=new C,p=new Tn,M=new C(1,1,1),v=new Bo(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,_.compose(m,p,M));for(let y in l)if(y==="_COLOR_0"){let I=l[y];v.instanceColor=new gs(I.array,I.itemSize,I.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Pt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Am="glTF",ga=12,Sm={JSON:1313821514,BIN:5130562},sf=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ga),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Am)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ga,r=new DataView(e,ga),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Sm.JSON){let c=new Uint8Array(e,ga+o,a);this.content=n.decode(c)}else if(l===Sm.BIN){let c=ga+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},rf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=cf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=cf[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Jr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let g in d.attributes){let _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,an,f)})})}},of=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},af=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Dc=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,M=1-m,v=p-f+h;for(let y=0;y!==a;y++){let I=o[_+y+a],R=o[_+y+l]*u,P=o[g+y+a],N=o[g+y]*u;r[y]=M*I+v*R+m*P+p*N}return r}},sb=new Tn,lf=class extends Dc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return sb.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Em={9728:Wt,9729:Xt,9984:ql,9985:Wr,9986:Ys,9987:hi},wm={33071:vi,33648:Nr,10497:oi},Oh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rb={CUBICSPLINE:void 0,LINEAR:Hs,STEP:ks},Fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ob(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new xn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),i.DefaultMaterial}function nr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function es(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ab(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function lb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cb(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bh(t.attributes):e=i.indices+":"+Bh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Bh(i.targets[n]);return e}function Bh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function uf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ub(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hb=new je,hf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ib,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Zo(this.options.manager):this.textureLoader=new Qo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return nr(r,a,s),es(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ji.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Oh[s.type],a=Jr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new mt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Oh[s.type],c=Jr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(d&&d!==h){let p=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(M);v||(_=new c(a,p*d,s.count*d/u),v=new ms(_,d/u),t.cache.add(M,v)),m=new _n(v,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new mt(_,l,g);if(s.sparse!==void 0){let p=Oh.SCALAR,M=Jr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,I=new M(o[1],v,s.sparse.count*p),R=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,N=I.length;P<N;P++){let b=I[P];if(m.setX(b,R[P*l]),l>=2&&m.setY(b,R[P*l+1]),l>=3&&m.setZ(b,R[P*l+2]),l>=4&&m.setW(b,R[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Em[f.magFilter]||Xt,u.minFilter=Em[f.minFilter]||hi,u.wrapS=wm[f.wrapS]||oi,u.wrapT=wm[f.wrapT]||oi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Wt&&u.minFilter!==Xt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Yt(_);m.needsUpdate=!0,f(m)}),t.load(ji.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),es(h,o),h.userData.mimeType=o.mimeType||ub(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Hr,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new qi,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return xn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let h=s[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],an),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bt);let u=r.alphaMode||Fh.OPAQUE;if(u===Fh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Fh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bt){let h=r.emissiveFactor;a.emissive=new Fe().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&o!==Bt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),es(h,r),t.associations.set(h,{materials:e}),r.extensions&&nr(s,h,r),h})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Tm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=cb(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Tm(new Rt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?ob(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let _=u[d],m=o[d],p,M=c[d];if(m.mode===Zn.TRIANGLES||m.mode===Zn.TRIANGLE_STRIP||m.mode===Zn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new No(_,M):new Je(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Zn.TRIANGLE_STRIP?p.geometry=Nh(p.geometry,fa):m.mode===Zn.TRIANGLE_FAN&&(p.geometry=Nh(p.geometry,qr));else if(m.mode===Zn.LINES)p=new zo(_,M);else if(m.mode===Zn.LINE_STRIP)p=new Ei(_,M);else if(m.mode===Zn.LINE_LOOP)p=new ko(_,M);else if(m.mode===Zn.POINTS)p=new Ho(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&lb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),es(p,r),m.extensions&&nr(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&nr(s,h[0],r),h[0];let f=new Ut;r.extensions&&nr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt($s.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ci(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),es(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,v=f.length;M<v;M++){let y=f[M],I=d[M],R=g[M],P=_[M],N=m[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let b=n._createAnimationTracks(y,I,R,P,N);if(b)for(let E=0;E<b.length;E++)p.push(b[E])}return new Yo(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,hb)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new zr:c.length>1?u=new Ut:c.length===1?u=c[0]:u=new Pt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),es(u,r),r.extensions&&nr(n,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ut;n.name&&(r.name=s.createUniqueName(n.name)),es(r,n),n.extensions&&nr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof An||f instanceof Yt)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ss[r.path]===Ss.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ss[r.path]){case Ss.weights:c=wi;break;case Ss.rotation:c=Ti;break;case Ss.position:case Ss.scale:c=Ai;break;default:switch(n.itemSize){case 1:c=wi;break;case 2:case 3:default:c=Ai;break}break}let u=s.interpolation!==void 0?rb[s.interpolation]:Hs,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Ss[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=uf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ti?lf:Dc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fb(i,e,t){let n=e.attributes,s=new Lt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let u=uf(Jr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=uf(Jr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Jt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Tm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=cf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ct.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),es(i,e),fb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ab(i,e.targets,t):i})}var Rm={type:"change"},df={type:"start"},Pm={type:"end"},Lc=new Si,Cm=new on,db=Math.cos(70*$s.DEG2RAD),Kt=new C,Un=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ff=1e-6,Uc=class extends na{constructor(e,t=null){super(e,t),this.state=St.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Tn,this._lastTargetPosition=new C,this._quat=new Tn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gr,this._sphericalDelta=new Gr,this._scale=1,this._panOffset=new C,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new C,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mb.bind(this),this._onPointerDown=pb.bind(this),this._onPointerUp=gb.bind(this),this._onContextMenu=Sb.bind(this),this._onMouseWheel=yb.bind(this),this._onKeyDown=vb.bind(this),this._onTouchStart=Mb.bind(this),this._onTouchMove=bb.bind(this),this._onMouseDown=_b.bind(this),this._onMouseMove=xb.bind(this),this._interceptControlDown=Eb.bind(this),this._interceptControlUp=wb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rm),this.update(),this.state=St.NONE}update(e=null){let t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Kt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<db?this.object.lookAt(this.target):(Cm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(Cm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ff||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ff||this._lastTargetPosition.distanceToSquared(this.target)>ff?(this.dispatchEvent(Rm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Kt.copy(s).sub(this.target);let r=Kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function pb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function mb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function gb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pm),this.state=St.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _b(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=St.DOLLY;break;case ys.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}break;case ys.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(df)}function xb(i){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yb(i){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(i.preventDefault(),this.dispatchEvent(df),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Pm))}function vb(i){this.enabled!==!1&&this._handleKeyDown(i)}function Mb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=St.TOUCH_ROTATE;break;case vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=St.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(df)}function bb(i){switch(this._trackPointer(i),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=St.NONE}}function Sb(i){this.enabled!==!1&&i.preventDefault()}function Eb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Nc=class extends Dn{constructor(){super();let e=new ps;e.deleteAttribute("uv");let t=new xn({side:cn}),n=new xn,s=new Ws(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Je(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Je(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Je(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Je(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new Je(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new Je(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new Je(e,Qr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Je(e,Qr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new Je(e,Qr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Je(e,Qr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new Je(e,Qr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Je(e,Qr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qr(i){let e=new Bt;return e.color.setScalar(i),e}var hn=Uint8Array,Hn=Uint16Array,yf=Int32Array,vf=new hn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Mf=new hn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Im=new hn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fm=function(i,e){for(var t=new Hn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new yf(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Bm=Fm(vf,2),Tb=Bm.b,mf=Bm.r;Tb[28]=258,mf[258]=28;var zm=Fm(Mf,0),PT=zm.b,Dm=zm.r,gf=new Hn(32768);for(dt=0;dt<32768;++dt)ts=(dt&43690)>>1|(dt&21845)<<1,ts=(ts&52428)>>2|(ts&13107)<<2,ts=(ts&61680)>>4|(ts&3855)<<4,gf[dt]=((ts&65280)>>8|(ts&255)<<8)>>1;var ts,dt,ya=function(i,e,t){for(var n=i.length,s=0,r=new Hn(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new Hn(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Hn(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],h=o[i[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[gf[h]>>l]=c}else for(a=new Hn(n),s=0;s<n;++s)i[s]&&(a[s]=gf[o[i[s]-1]++]>>15-i[s]);return a},ir=new hn(288);for(dt=0;dt<144;++dt)ir[dt]=8;var dt;for(dt=144;dt<256;++dt)ir[dt]=9;var dt;for(dt=256;dt<280;++dt)ir[dt]=7;var dt;for(dt=280;dt<288;++dt)ir[dt]=8;var dt,Oc=new hn(32);for(dt=0;dt<32;++dt)Oc[dt]=5;var dt,Ab=ya(ir,9,0);var Rb=ya(Oc,5,0);var km=function(i){return(i+7)/8|0},Hm=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new hn(i.subarray(e,t))};var Cb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Fc=function(i,e,t){var n=new Error(e||Cb[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Fc),!t)throw n;return n};var ns=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},_a=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},pf=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return{t:Gm,l:0};if(s==1){var o=new hn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(I,R){return I.f-R.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=s-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=r[0].s,n=1;n<s;++n)r[n].s>f&&(f=r[n].s);var d=new Hn(f+1),g=_f(t[u-1],d,0);if(g>e){var n=0,_=0,m=g-e,p=1<<m;for(r.sort(function(R,P){return d[P.s]-d[R.s]||R.f-P.f});n<s;++n){var M=r[n].s;if(d[M]>e)_+=p-(1<<g-d[M]),d[M]=e;else break}for(_>>=m;_>0;){var v=r[n].s;d[v]<e?_-=1<<e-d[v]++-1:++n}for(;n>=0&&_;--n){var y=r[n].s;d[y]==e&&(--d[y],++_)}g=e}return{t:new hn(d),l:g}},_f=function(i,e,t){return i.s==-1?Math.max(_f(i.l,e,t+1),_f(i.r,e,t+1)):e[i.s]=t},Lm=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new Hn(++e),n=0,s=i[0],r=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[a]}return{c:t.subarray(0,n),n:e}},xa=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Vm=function(i,e,t){var n=t.length,s=km(e+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},Um=function(i,e,t,n,s,r,o,a,l,c,u){ns(e,u++,t),++s[256];for(var h=pf(s,15),f=h.t,d=h.l,g=pf(r,15),_=g.t,m=g.l,p=Lm(f),M=p.c,v=p.n,y=Lm(_),I=y.c,R=y.n,P=new Hn(19),N=0;N<M.length;++N)++P[M[N]&31];for(var N=0;N<I.length;++N)++P[I[N]&31];for(var b=pf(P,7),E=b.t,O=b.l,K=19;K>4&&!E[Im[K-1]];--K);var F=c+5<<3,Y=xa(s,ir)+xa(r,Oc)+o,k=xa(s,f)+xa(r,_)+o+14+3*K+xa(P,E)+2*P[16]+3*P[17]+7*P[18];if(l>=0&&F<=Y&&F<=k)return Vm(e,u,i.subarray(l,l+c));var V,te,X,W;if(ns(e,u,1+(k<Y)),u+=2,k<Y){V=ya(f,d,0),te=f,X=ya(_,m,0),W=_;var ce=ya(E,O,0);ns(e,u,v-257),ns(e,u+5,R-1),ns(e,u+10,K-4),u+=14;for(var N=0;N<K;++N)ns(e,u+3*N,E[Im[N]]);u+=3*K;for(var ue=[M,I],ye=0;ye<2;++ye)for(var Ie=ue[ye],N=0;N<Ie.length;++N){var ee=Ie[N]&31;ns(e,u,ce[ee]),u+=E[ee],ee>15&&(ns(e,u,Ie[N]>>5&127),u+=Ie[N]>>12)}}else V=Ab,te=ir,X=Rb,W=Oc;for(var N=0;N<a;++N){var ae=n[N];if(ae>255){var ee=ae>>18&31;_a(e,u,V[ee+257]),u+=te[ee+257],ee>7&&(ns(e,u,ae>>23&31),u+=vf[ee]);var _e=ae&31;_a(e,u,X[_e]),u+=W[_e],_e>3&&(_a(e,u,ae>>5&8191),u+=Mf[_e])}else _a(e,u,V[ae]),u+=te[ae]}return _a(e,u,V[256]),u+te[256]},Pb=new yf([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Gm=new hn(0),Ib=function(i,e,t,n,s,r){var o=r.z||i.length,a=new hn(n+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(n,a.length-s),c=r.l,u=(r.r||0)&7;if(e){u&&(l[0]=r.r>>3);for(var h=Pb[e-1],f=h>>13,d=h&8191,g=(1<<t)-1,_=r.p||new Hn(32768),m=r.h||new Hn(g+1),p=Math.ceil(t/3),M=2*p,v=function(L){return(i[L]^i[L+1]<<p^i[L+2]<<M)&g},y=new yf(25e3),I=new Hn(288),R=new Hn(32),P=0,N=0,b=r.i||0,E=0,O=r.w||0,K=0;b+2<o;++b){var F=v(b),Y=b&32767,k=m[F];if(_[Y]=k,m[F]=Y,O<=b){var V=o-b;if((P>7e3||E>24576)&&(V>423||!c)){u=Um(i,l,0,y,I,R,N,E,K,b-K,u),E=P=N=0,K=b;for(var te=0;te<286;++te)I[te]=0;for(var te=0;te<30;++te)R[te]=0}var X=2,W=0,ce=d,ue=Y-k&32767;if(V>2&&F==v(b-ue))for(var ye=Math.min(f,V)-1,Ie=Math.min(32767,b),ee=Math.min(258,V);ue<=Ie&&--ce&&Y!=k;){if(i[b+X]==i[b+X-ue]){for(var ae=0;ae<ee&&i[b+ae]==i[b+ae-ue];++ae);if(ae>X){if(X=ae,W=ue,ae>ye)break;for(var _e=Math.min(ue,ae-2),oe=0,te=0;te<_e;++te){var Te=b-ue+te&32767,Ae=_[Te],Ne=Te-Ae&32767;Ne>oe&&(oe=Ne,k=Te)}}}Y=k,k=_[Y],ue+=Y-k&32767}if(W){y[E++]=268435456|mf[X]<<18|Dm[W];var nt=mf[X]&31,He=Dm[W]&31;N+=vf[nt]+Mf[He],++I[257+nt],++R[He],O=b+X,++P}else y[E++]=i[b],++I[i[b]]}}for(b=Math.max(b,O);b<o;++b)y[E++]=i[b],++I[i[b]];u=Um(i,l,c,y,I,R,N,E,K,b-K,u),c||(r.r=u&7|l[u/8|0]<<3,u-=7,r.h=m,r.p=_,r.i=b,r.w=O)}else{for(var b=r.w||0;b<o+c;b+=65535){var et=b+65535;et>=o&&(l[u/8|0]=c,et=o),u=Vm(l,u+1,i.subarray(b,et))}r.i=o}return Hm(a,0,n+km(u)+s)},Db=function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i}(),Lb=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Db[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}};var Ub=function(i,e,t,n,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new hn(r.length+i.length);o.set(r),o.set(i,r.length),i=o,s.w=r.length}return Ib(i,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,s)},Wm=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t};var un=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};function Nb(i,e){return Ub(i,e||{},0,0)}var Xm=function(i,e,t,n){for(var s in i){var r=i[s],o=e+s,a=n;Array.isArray(r)&&(a=Wm(n,r[1]),r=r[0]),r instanceof hn?t[o]=[r,a]:(t[o+="/"]=[new hn(0),a],Xm(r,o,t,n))}},Nm=typeof TextEncoder<"u"&&new TextEncoder,Ob=typeof TextDecoder<"u"&&new TextDecoder,Fb=0;try{Ob.decode(Gm,{stream:!0}),Fb=1}catch{}function va(i,e){if(e){for(var t=new hn(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Nm)return Nm.encode(i);for(var s=i.length,r=new hn(i.length+(i.length>>1)),o=0,a=function(u){r[o++]=u},n=0;n<s;++n){if(o+5>r.length){var l=new hn(o+8+(s-n<<1));l.set(r),r=l}var c=i.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|i.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return Hm(r,0,o)}var xf=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Fc(9),e+=n+4}return e},Om=function(i,e,t,n,s,r,o,a){var l=n.length,c=t.extra,u=a&&a.length,h=xf(c);un(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r<0&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Fc(10),un(i,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,r!=-1&&(un(i,e,t.crc),un(i,e+4,r<0?-r-2:r),un(i,e+8,t.size)),un(i,e+12,l),un(i,e+14,h),e+=16,o!=null&&(un(i,e,u),un(i,e+6,t.attrs),un(i,e+10,o),e+=14),i.set(n,e),e+=l,h)for(var g in c){var _=c[g],m=_.length;un(i,e,+g),un(i,e+2,m),i.set(_,e+4),e+=4+m}return u&&(i.set(a,e),e+=u),e},Bb=function(i,e,t,n,s){un(i,e,101010256),un(i,e+8,t),un(i,e+10,t),un(i,e+12,n),un(i,e+16,s)};function qm(i,e){e||(e={});var t={},n=[];Xm(i,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=va(o),f=h.length,d=c.comment,g=d&&va(d),_=g&&g.length,m=xf(c.extra);f>65535&&Fc(11);var p=u?Nb(l,c):l,M=p.length,v=Lb();v.p(l),n.push(Wm(c,{size:l.length,crc:v.d(),c:p,f:h,m:g,u:f!=o.length||g&&d.length!=_,o:s,compression:u})),s+=30+f+m+M,r+=76+2*(f+m)+(_||0)+M}for(var y=new hn(r+22),I=s,R=r-s,P=0;P<n.length;++P){var h=n[P];Om(y,h.o,h,h.f,h.u,h.c.length);var N=30+h.f.length+xf(h.extra);y.set(h.c,h.o+N),Om(y,s,h,h.f,h.u,h.c.length,h.o,h.m),s+=16+N+(h.m?h.m.length:0)}return Bb(y,s,n.length,R,I),y}var zc=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,n,s){this.parseAsync(e,s).then(t).catch(n)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},t);let n={},s="model.usda";n[s]=null;let r=$m();r+=kb(t);let o={},a={};e.traverseVisible(c=>{if(c.isMesh){let u=c.geometry,h=c.material;if(h.isMeshStandardMaterial){let f="geometries/Geometry_"+u.id+".usda";if(!(f in n)){let d=Wb(u);n[f]=Vb(d)}h.uuid in o||(o[h.uuid]=h),r+=Gb(c,u,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(r+=Qb(c))}),r+=Hb(),r+=Kb(o,a,t.quickLookCompatible),n[s]=va(r),r=null;for(let c in a){let u=a[c];if(u.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");u=await this.textureUtils.decompress(u)}let h=zb(u.image,u.flipY,t.maxTextureSize),f=await new Promise(d=>h.toBlob(d,"image/png",1));n[`textures/Texture_${c}.png`]=new Uint8Array(await f.arrayBuffer())}let l=0;for(let c in n){let u=n[c],h=34+c.length;l+=h;let f=l&63;if(f!==4){let d=64-f,g=new Uint8Array(d);n[c]=[u,{extra:{12345:g}}]}l=u.length}return qm(n,{level:0})}};function zb(i,e,t){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){let n=t/Math.max(i.width,i.height),s=document.createElement("canvas");s.width=i.width*Math.min(1,n),s.height=i.height*Math.min(1,n);let r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(i,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var vn=7;function $m(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function kb(i){return`def Xform "Root"
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
`}function Hb(){return`
		}
	}
}

`}function Vb(i){let e=$m();return e+=i,va(e)}function Gb(i,e,t){let n="Object_"+i.id,s=Km(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${s}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function Km(i){let e=i.elements;return`( ${Bc(e,0)}, ${Bc(e,4)}, ${Bc(e,8)}, ${Bc(e,12)} )`}function Bc(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function Wb(i){return`
def "Geometry"
{
${Xb(i)}
}
`}function Xb(i){let e="Geometry",t=i.attributes,n=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${qb(i)}]
		int[] faceVertexIndices = [${Yb(i)}]
		normal3f[] normals = [${bf(t.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${bf(t.position,n)}]
${$b(t)}
		uniform token subdivisionScheme = "none"
	}
`}function qb(i){let e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function Yb(i){let e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)t.push(s)}return t.join(", ")}function bf(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),o=i.getZ(n);t.push(`(${s.toPrecision(vn)}, ${r.toPrecision(vn)}, ${o.toPrecision(vn)})`)}return t.join(", ")}function Zb(i){let e=[];for(let t=0;t<i.count;t++){let n=i.getX(t),s=i.getY(t);e.push(`(${n.toPrecision(vn)}, ${1-s.toPrecision(vn)})`)}return e.join(", ")}function $b(i){let e="";for(let n=0;n<4;n++){let s=n>0?n:"",r=i["uv"+s];r!==void 0&&(e+=`
		texCoord2f[] primvars:st${s} = [${Zb(r)}] (
			interpolation = "vertex"
		)`)}let t=i.color;if(t!==void 0){let n=t.count;e+=`
	color3f[] primvars:displayColor = [${bf(t,n)}] (
		interpolation = "vertex"
		)`}return e}function Kb(i,e,t=!1){let n=[];for(let s in i){let r=i[s];n.push(jb(r,e,t))}return`def "Materials"
{
${n.join("")}
}

`}function jb(i,e,t=!1){let n="			",s=[],r=[];function o(a,l,c){let u=a.source.id+"_"+a.flipY;e[u]=a;let h=a.channel>0?"st"+a.channel:"st",f={1e3:"repeat",1001:"clamp",1002:"mirror"},d=a.repeat.clone(),g=a.offset.clone(),_=a.rotation,m=Math.sin(_),p=Math.cos(_);return g.y=1-g.y-d.y,t?(g.x=g.x/d.x,g.y=g.y/d.y,g.x+=m/d.x,g.y+=p-1):(g.x+=m*d.x,g.y+=(1-p)*d.y),`
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
			float inputs:rotation = ${(_*(180/Math.PI)).toFixed(vn)}
			float2 inputs:scale = ${Zm(d)}
			float2 inputs:translation = ${Zm(g)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+Jb(c):""}
			token inputs:sourceColorSpace = "${a.colorSpace===fi?"raw":"sRGB"}"
			token inputs:wrapS = "${f[a.wrapS]}"
			token inputs:wrapT = "${f[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${i.transparent||i.alphaTest>0?"float outputs:a":""}
		}`}return i.side===bt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i),i.map!==null?(s.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),s.push(`${n}float inputs:opacityThreshold = ${i.alphaTest}`)),r.push(o(i.map,"diffuse",i.color))):s.push(`${n}color3f inputs:diffuseColor = ${Ym(i.color)}`),i.emissiveMap!==null?(s.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`),r.push(o(i.emissiveMap,"emissive",new Fe(i.emissive.r*i.emissiveIntensity,i.emissive.g*i.emissiveIntensity,i.emissive.b*i.emissiveIntensity)))):i.emissive.getHex()>0&&s.push(`${n}color3f inputs:emissiveColor = ${Ym(i.emissive)}`),i.normalMap!==null&&(s.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),r.push(o(i.normalMap,"normal"))),i.aoMap!==null&&(s.push(`${n}float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`),r.push(o(i.aoMap,"occlusion",new Fe(i.aoMapIntensity,i.aoMapIntensity,i.aoMapIntensity)))),i.roughnessMap!==null?(s.push(`${n}float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`),r.push(o(i.roughnessMap,"roughness",new Fe(i.roughness,i.roughness,i.roughness)))):s.push(`${n}float inputs:roughness = ${i.roughness}`),i.metalnessMap!==null?(s.push(`${n}float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`),r.push(o(i.metalnessMap,"metallic",new Fe(i.metalness,i.metalness,i.metalness)))):s.push(`${n}float inputs:metallic = ${i.metalness}`),i.alphaMap!==null?(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),s.push(`${n}float inputs:opacityThreshold = 0.0001`),r.push(o(i.alphaMap,"opacity"))):s.push(`${n}float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial&&(i.clearcoatMap!==null?(s.push(`${n}float inputs:clearcoat.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatMap.id}_clearcoat.outputs:r>`),r.push(o(i.clearcoatMap,"clearcoat",new Fe(i.clearcoat,i.clearcoat,i.clearcoat)))):s.push(`${n}float inputs:clearcoat = ${i.clearcoat}`),i.clearcoatRoughnessMap!==null?(s.push(`${n}float inputs:clearcoatRoughness.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),r.push(o(i.clearcoatRoughnessMap,"clearcoatRoughness",new Fe(i.clearcoatRoughness,i.clearcoatRoughness,i.clearcoatRoughness)))):s.push(`${n}float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`),s.push(`${n}float inputs:ior = ${i.ior}`)),`
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
`}function Ym(i){return`(${i.r}, ${i.g}, ${i.b})`}function Jb(i){return`(${i.r}, ${i.g}, ${i.b}, 1.0)`}function Zm(i){return`(${i.x}, ${i.y})`}function Qb(i){let e=i.name?i.name:"Camera_"+i.id,t=Km(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),i.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(vn)}, ${i.far.toPrecision(vn)})
			float horizontalAperture = ${((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(vn)}
			float verticalAperture = ${((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(vn)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(vn)}, ${i.far.toPrecision(vn)})
			float focalLength = ${i.getFocalLength().toPrecision(vn)}
			float focusDistance = ${i.focus.toPrecision(vn)}
			float horizontalAperture = ${i.getFilmWidth().toPrecision(vn)}
			token projection = "perspective"
			float verticalAperture = ${i.getFilmHeight().toPrecision(vn)}
		}
	
	`}var jm=new Lt,kc=new C,di=class extends Jo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ft(e,3)),this.setAttribute("uv",new Ft(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new xs(t,6,1);return this.setAttribute("instanceStart",new _n(n,3,0)),this.setAttribute("instanceEnd",new _n(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new xs(t,6,1);return this.setAttribute("instanceColorStart",new _n(n,3,0)),this.setAttribute("instanceColorEnd",new _n(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Xo(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),jm.setFromBufferAttribute(t),this.boundingBox.union(jm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kc)),kc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(kc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};we.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Be(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Rn.line={uniforms:da.merge([we.common,we.fog,we.line]),vertexShader:`
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
		`};var Pi=class extends Qt{constructor(e){super({type:"LineMaterial",uniforms:da.clone(Rn.line.uniforms),vertexShader:Rn.line.vertexShader,fragmentShader:Rn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Sf=new rt,Jm=new C,Qm=new C,fn=new rt,dn=new rt,Ii=new rt,Ef=new C,wf=new je,pn=new ta,eg=new C,Hc=new Lt,Vc=new Jt,Di=new rt,Li,sr;function tg(i,e,t){return Di.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Di.multiplyScalar(1/Di.w),Di.x=sr/t.width,Di.y=sr/t.height,Di.applyMatrix4(i.projectionMatrixInverse),Di.multiplyScalar(1/Di.w),Math.abs(Math.max(Di.x,Di.y))}function eS(i,e){let t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){pn.start.fromBufferAttribute(s,a),pn.end.fromBufferAttribute(r,a),pn.applyMatrix4(t);let c=new C,u=new C;Li.distanceSqToSegment(pn.start,pn.end,u,c),u.distanceTo(c)<sr*.5&&e.push({point:u,pointOnLine:c,distance:Li.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function tS(i,e,t){let n=e.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;Li.at(1,Ii),Ii.w=1,Ii.applyMatrix4(e.matrixWorldInverse),Ii.applyMatrix4(n),Ii.multiplyScalar(1/Ii.w),Ii.x*=r.x/2,Ii.y*=r.y/2,Ii.z=0,Ef.copy(Ii),wf.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(fn.fromBufferAttribute(l,f),dn.fromBufferAttribute(c,f),fn.w=1,dn.w=1,fn.applyMatrix4(wf),dn.applyMatrix4(wf),fn.z>h&&dn.z>h)continue;if(fn.z>h){let v=fn.z-dn.z,y=(fn.z-h)/v;fn.lerp(dn,y)}else if(dn.z>h){let v=dn.z-fn.z,y=(dn.z-h)/v;dn.lerp(fn,y)}fn.applyMatrix4(n),dn.applyMatrix4(n),fn.multiplyScalar(1/fn.w),dn.multiplyScalar(1/dn.w),fn.x*=r.x/2,fn.y*=r.y/2,dn.x*=r.x/2,dn.y*=r.y/2,pn.start.copy(fn),pn.start.z=0,pn.end.copy(dn),pn.end.z=0;let _=pn.closestPointToPointParameter(Ef,!0);pn.at(_,eg);let m=$s.lerp(fn.z,dn.z,_),p=m>=-1&&m<=1,M=Ef.distanceTo(eg)<sr*.5;if(p&&M){pn.start.fromBufferAttribute(l,f),pn.end.fromBufferAttribute(c,f),pn.start.applyMatrix4(o),pn.end.applyMatrix4(o);let v=new C,y=new C;Li.distanceSqToSegment(pn.start,pn.end,y,v),t.push({point:y,pointOnLine:v,distance:Li.origin.distanceTo(y),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var Es=class extends Je{constructor(e=new di,t=new Pi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Jm.fromBufferAttribute(t,o),Qm.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Jm.distanceTo(Qm);let r=new xs(s,2,1);return e.setAttribute("instanceDistanceStart",new _n(r,1,0)),e.setAttribute("instanceDistanceEnd",new _n(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Li=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;sr=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Vc.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=sr*.5;else{let h=Math.max(s.near,Vc.distanceToPoint(Li.origin));c=tg(s,h,l.resolution)}if(Vc.radius+=c,Li.intersectsSphere(Vc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Hc.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=sr*.5;else{let h=Math.max(s.near,Hc.distanceToPoint(Li.origin));u=tg(s,h,l.resolution)}Hc.expandByScalar(u),Li.intersectsBox(Hc)!==!1&&(n?eS(this,t):tS(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Sf),this.material.uniforms.resolution.value.set(Sf.z,Sf.w))}};var sg="blueprints.edgeMode",nS="blueprints.edgesEnabled",rr="none",or="transparent",ba="opaque",iS=20,rg=2.5,og=0,ng=1e-4,Tf=5e-4,Ma=1,sS=2;function ig(i){return i===rr||i===or||i===ba?i:i==="1"||i==="true"?or:i==="0"||i==="false"?rr:null}function ag(){try{let i=ig(localStorage.getItem(sg));if(i)return i;let e=ig(localStorage.getItem(nS));if(e)return Rf(e),e}catch{}return or}function Rf(i){try{localStorage.setItem(sg,i)}catch{}}function Mn(i){return!!(i&&i.userData&&i.userData.isEdgeOverlay)}function rS(i){let e=new Go(i,iS),t=e.getAttribute("position"),n=t&&t.array?t.array instanceof Float32Array?t.array.slice():Float32Array.from(t.array):new Float32Array(0);return e.dispose(),n}function oS(i,e){if(!e.length)return i;if(!i.length)return e;let t=new Float32Array(i.length+e.length);return t.set(i,0),t.set(e,i.length),t}function aS(i,e){if(!i)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(i.transparent=!0,i.opacity=t,i.depthWrite=!1):(i.transparent=!1,i.opacity=1),i.needsUpdate=!0}function lS(i){if(!i?.visible)return 0;let e=Array.isArray(i.material)?i.material[0]:i.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function cS(i,e=or){return e===rr?0:e===ba?i?.visible===!1?0:1:lS(i)}function Af(i,e,t=1){let n=Math.max(0,Math.min(1,Number(t)||0)),s=new Pi({color:og,linewidth:rg,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:n<1,opacity:n<1?n:1,clippingPlanes:i,clipIntersection:!1});return s.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <logdepthbuf_vertex>",`gl_Position.z -= ${ng} * gl_Position.w;
			#include <logdepthbuf_vertex>`),r.fragmentShader=r.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= max( ${Tf}, fwidth( gl_FragDepth ) );
			#else
				gl_FragDepth = gl_FragCoord.z - ${Tf};
			#endif`)},s.customProgramCacheKey=()=>`bp-edge-depth-bias-r${sS}-${Tf}-${ng}`,e&&s.resolution.set(e.x,e.y),s}function lg(i,e,t,n){let s=Math.max(0,Math.min(1,Number(e)||0)),r=Af(t,null,s);r.depthTest=!1,r.depthWrite=!1,r.transparent=!0,r.opacity=s;let o=r.onBeforeCompile?.bind(r),a=r.customProgramCacheKey?.bind(r);r.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,r.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=n.stage,u.uniforms.tPrevViewZ=n.prevZ,u.uniforms.tPeelViewZ=n.peelZ,u.uniforms.tOpaqueViewZ=n.opaqueZ,u.uniforms.uViewZEps=n.eps,u.uniforms.uBpPeelRes=n.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},r.needsUpdate=!0;let l=new di;l.setPositions(i);let c=new Es(l,r);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.renderOrder=1e3,c.raycast=()=>{},c.userData.isPeeledEdgeBatch=!0,c}function Gc(i){if(!i)return;i.parent?.remove(i),i.geometry?.dispose?.();let e=i.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function cg(i){if(!i)return;let e=[];i.traverse(t=>{Mn(t)&&e.push(t)});for(let t of e)Gc(t)}function ws(i,e){i&&i.traverse(t=>{Mn(t)&&(t.visible=e)})}function ug(i,e,t){if(!i)return;let n=Math.max(1,e),s=Math.max(1,t);i.traverse(r=>{if(!Mn(r)||!r.material)return;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a?.resolution&&a.resolution.set(n,s)})}function Cf(i,e){if(!i)return;let t=e||[];i.traverse(n=>{if(!Mn(n)||!n.material)return;let s=Array.isArray(n.material)?n.material:[n.material];for(let r of s){if(!r)continue;let o=r.clippingPlanes?r.clippingPlanes.length:0;r.clippingPlanes=t,r.clipIntersection=!1,o!==t.length&&(r.needsUpdate=!0)}})}function uS(i,e,t){i.updateWorldMatrix(!0,!1);let n=i.userData.bpHardEdgePositions;n instanceof Float32Array||(n=rS(i.geometry),i.userData.bpHardEdgePositions=n);let s=Wc(t,i.matrixWorld),r=fg(i.geometry,s),o=oS(n,r),a=new di;o.length>=6&&a.setPositions(o);let l=e.geometry;e.geometry=a,e.computeLineDistances(),l?.dispose?.()}function hg(i,e,t={}){let n=t.clippingPlanes??[],s=t.resolution||null,r=t.edgeMode??or;for(let[o,a]of i)for(let l of a){if(!l||!l.isMesh||!l.geometry||Mn(l))continue;let c=null;for(let h of l.children)if(Mn(h)){c=h;break}if(!e){c&&Gc(c);continue}c&&!c.isLineSegments2&&(Gc(c),c=null);let u=cS(l,r);if(c){let h=c.material;if(!h||typeof h.customProgramCacheKey!="function"){Gc(c);let f=Af(n,s,u),d=new di;c=new Es(d,f),c.name=`${o}__edges`,c.userData.isEdgeOverlay=!0,c.userData.edgeLabel=o,c.raycast=()=>{},c.renderOrder=1e3,c.layers.set(Ma),l.add(c)}else h.color&&h.color.setHex(og),typeof h.linewidth=="number"&&(h.linewidth=rg),h.clippingPlanes=n,h.clipIntersection=!1,s&&h.resolution&&h.resolution.set(s.x,s.y),aS(h,u),h.needsUpdate=!0}else{let h=Af(n,s,u),f=new di;c=new Es(f,h),c.name=`${o}__edges`,c.userData.isEdgeOverlay=!0,c.userData.edgeLabel=o,c.raycast=()=>{},c.renderOrder=1e3,c.layers.set(Ma),l.add(c)}c.layers.set(Ma),uS(l,c,n)}}function hS(i){if(!i.isMesh||Mn(i))return!1;let e=Array.isArray(i.material)?i.material[0]:i.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function Pf(i,e,t,n,s={}){if(!n)return;let r=!!s.reuseDepth,o=!1;if(n.traverse(_=>{Mn(_)&&(o=!0)}),!o)return;let a=i.autoClear,l=e.background,c=e.overrideMaterial,u=t.layers.mask;if(e.background=null,i.autoClear=!1,r){ws(n,!0),t.layers.set(Ma),i.render(e,t),t.layers.mask=u,e.background=l,e.overrideMaterial=c,i.autoClear=a;return}ws(n,!1);let h=[];n.traverse(_=>{!hS(_)||_.visible===!1||(h.push(_),_.visible=!1)});let f=[],d=new Set;e.traverse(_=>{if(!_.isMesh||Mn(_)||_.visible===!1)return;let m=Array.isArray(_.material)?_.material:[_.material];for(let p of m)!p||d.has(p)||(d.add(p),f.push({mat:p,colorWrite:p.colorWrite!==!1,depthWrite:p.depthWrite!==!1}),p.colorWrite=!1,p.depthWrite=!0)}),e.overrideMaterial=null,i.clearDepth();try{i.render(e,t)}finally{for(let _ of f)_.mat.colorWrite=_.colorWrite,_.mat.depthWrite=_.depthWrite;for(let _ of h)_.visible=!0}ws(n,!0);let g=[];s.opaqueEdgesOnly&&n.traverse(_=>{if(!Mn(_))return;let m=Array.isArray(_.material)?_.material[0]:_.material;m&&m.transparent&&m.opacity<1-1e-4&&(g.push(_),_.visible=!1)}),t.layers.set(Ma);try{i.render(e,t)}finally{for(let _ of g)_.visible=!0}t.layers.mask=u,e.background=l,e.overrideMaterial=c,i.autoClear=a}var dg=!0,pg=5,Lf=12,fS=Lf,mg=.001,dS=.5,pS=1,Xc=1e5,pi={value:0},Nt={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:mg},uResolution:{value:new Be(1,1)}};function If(i){let e=i?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=pi.value),t.tPrevViewZ&&(t.tPrevViewZ.value=Nt.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=Nt.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=Nt.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=Nt.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(Nt.uResolution.value)}function Sa(i){if(!i||i.userData.depthPeelPatched)return;i.userData.depthPeelPatched=!0;let e=i.customProgramCacheKey?.bind(i);i.customProgramCacheKey=()=>`${e?e():i.type}|depthPeel11|${i.defines?.USE_BP_PEEL?1:0}`;let t=i.onBeforeCompile?.bind(i);i.onBeforeCompile=(n,s)=>{t?.(n,s),n.uniforms.uPeelStage=pi,n.uniforms.tPrevViewZ=Nt.tPrevViewZ,n.uniforms.tPeelViewZ=Nt.tPeelViewZ,n.uniforms.tOpaqueViewZ=Nt.tOpaqueViewZ,n.uniforms.uViewZEps=Nt.uViewZEps,n.uniforms.uResolution=Nt.uResolution,i.userData.shader=n,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(Xc*.5).toFixed(1)}) discard;
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
#endif`)},i.needsUpdate=!0}function Df(i,e){for(let t of i){if(!t)continue;let n=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==n&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function gg(i){let e=new Be,t=new Fe,n=null,s=null,r=null,o=null,a=null,l=null,c=new ci(-1,1,1,-1,0,1),u=new Dn,h=new Qt({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Fe(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new Je(new li(2,2),h);u.add(f);let d=new Qt({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Ol,blendSrc:sa,blendDst:Ms,blendSrcAlpha:sa,blendDstAlpha:Ms,blendEquation:Xn}),g=new Je(new li(2,2),d),_=new Dn;_.add(g);let m=new Qt({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),p=new Je(new li(2,2),m),M=new Dn;M.add(p);let v=new Qt({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:bt,clipping:!0,blending:qn});function y(J,de,D={}){m.uniforms.uValue.value=de;let S=i.autoClear;i.setRenderTarget(J),D.clearDepth&&(i.setClearColor(0,1),i.clear(!1,!0,!1)),i.autoClear=!1,i.render(M,c),i.autoClear=S}function I(){n?.dispose(),s?.dispose(),r?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),n=null,s=null,r=null,o=null,a=null,l=null}let R=0;function P(J,de,D){let S=Math.max(1,Math.floor(J)),x=Math.max(1,Math.floor(de)),A=Math.min(1,Math.max(.25,D)),U=Math.max(1,Math.floor(S*A)),B=Math.max(1,Math.floor(x*A));if(n&&n.width===S&&n.height===x&&r&&r.width===U&&r.height===B&&R===A)return;I(),R=A,n=new ln(S,x,{format:tn,type:Yn,colorSpace:ft,depthBuffer:!0,stencilBuffer:!1});let H={format:tn,type:Ln,depthBuffer:!0,stencilBuffer:!1,magFilter:Wt,minFilter:Wt};s=new ln(U,B,H),r=new ln(U,B,H),o=new ln(U,B,H),a=new ln(U,B,{format:tn,type:Ji,colorSpace:ft,depthBuffer:!1,stencilBuffer:!1,magFilter:Xt,minFilter:Xt}),l=new ln(U,B,{format:tn,type:Ji,colorSpace:ft,depthBuffer:!1,stencilBuffer:!1,magFilter:Xt,minFilter:Xt}),h.uniforms.tOpaque.value=n.texture,h.uniforms.tAccum.value=a.texture,Nt.tOpaqueViewZ.value=s.texture,Nt.uResolution.value.set(U,B)}function N(J){let de=[],D=[];return J?(J.traverse(S=>{if(!S.isMesh||!S.visible||Mn(S))return;let x=S,A=Array.isArray(x.material)?x.material:[x.material],U=!1;for(let B of A)if(B&&B.transparent&&B.opacity<1-1e-4){U=!0;break}U?D.push(x):de.push(x)}),{opaque:de,transparent:D}):{opaque:de,transparent:D}}function b(J,de){for(let D of J)D.visible=de}function E(J,de){J.blending=de.blending,J.blendSrc=de.blendSrc,J.blendDst=de.blendDst,J.blendSrcAlpha=de.blendSrcAlpha,J.blendDstAlpha=de.blendDstAlpha,J.blendEquation=de.blendEquation,J.blendEquationAlpha=de.blendEquation}let O={meshes:[],sources:[],key:""},K={meshes:[],sources:[],key:""},F="",Y=new Dn,k=new Dn,V=new Dn,te=[];function X(J){for(let de of J.meshes)de.geometry.dispose();J.meshes=[],J.sources=[],J.key=""}function W(){for(let J of te){V.remove(J),J.geometry?.dispose?.();let de=J.material;if(Array.isArray(de))for(let D of de)D?.dispose?.();else de?.dispose?.()}te=[]}function ce(){X(O),X(K),W(),F=""}function ue(J){if(W(),!J.length)return;let de=new Map,D=new C;for(let x of J){let A=null;for(let ge of x.children)if(Mn(ge)){A=ge;break}if(!A?.geometry)continue;let U=A.material,B=U&&U.transparent&&typeof U.opacity=="number"?U.opacity:1;if(!(B<1-1e-4))continue;let H=A.geometry.getAttribute("instanceStart"),pe=A.geometry.getAttribute("instanceEnd");if(!H||!pe||!H.count)continue;let re=B.toFixed(3),le=de.get(re);le||(le={opacity:B,planes:U.clippingPlanes||[],chunks:[]},de.set(re,le)),x.updateWorldMatrix(!0,!1);let Le=H.count,fe=new Float32Array(Le*6);for(let ge=0;ge<Le;ge++)D.fromBufferAttribute(H,ge).applyMatrix4(x.matrixWorld),fe[ge*6]=D.x,fe[ge*6+1]=D.y,fe[ge*6+2]=D.z,D.fromBufferAttribute(pe,ge).applyMatrix4(x.matrixWorld),fe[ge*6+3]=D.x,fe[ge*6+4]=D.y,fe[ge*6+5]=D.z;le.chunks.push(fe)}let S={stage:pi,prevZ:Nt.tPrevViewZ,peelZ:Nt.tPeelViewZ,opaqueZ:Nt.tOpaqueViewZ,eps:Nt.uViewZEps,resolution:Nt.uResolution};for(let x of de.values()){let A=0;for(let pe of x.chunks)A+=pe.length;if(A<6)continue;let U=new Float32Array(A),B=0;for(let pe of x.chunks)U.set(pe,B),B+=pe.length;let H=lg(U,x.opacity,x.planes,S);V.add(H),te.push(H)}}function ye(J,de,D,S){D.length&&(S&&S===F&&O.meshes.length||(ae(O,J,D),ae(K,J,de),O.sources.length===D.length&&K.sources.length===de.length&&(ue(D),F=S||"")))}function Ie(J){return Object.keys(J.attributes).sort().join(",")}function ee(J){let de=J.geometry,D=de.index?de.toNonIndexed():de.clone();return D.applyMatrix4(J.matrixWorld),D}function ae(J,de,D){let S=String(D.length);for(let A of D){let U=Array.isArray(A.material)?"m":A.material?.id||0;S+=`.${A.id}:${U}`}if(S===J.key)return;de.updateWorldMatrix(!0,!0),X(J),J.key=S;let x=new Map;for(let A of D){if(!A.geometry||Array.isArray(A.material)||!A.material)continue;let U=`${A.material.uuid}:${Ie(A.geometry)}`,B=x.get(U);B||(B={mat:A.material,meshes:[]},x.set(U,B)),B.meshes.push(A)}for(let A of x.values()){let U=[];try{for(let pe of A.meshes)U.push(ee(pe));let B=bm(U,!1);if(!B)continue;let H=new Je(B,A.mat);H.frustumCulled=!1,H.matrixAutoUpdate=!1,H.renderOrder=0,H.userData.isPeelBatch=!0,J.meshes.push(H),J.sources.push(...A.meshes)}catch{}finally{for(let B of U)B.dispose()}}}function _e(J,de,D,S){if(!J.meshes.length||J.sources.length!==de.length)return i.render(D,S),!1;Y.environment=D.environment,Y.environmentIntensity=D.environmentIntensity,Y.fog=D.fog;let x=[];for(let A of D.children)A.isLight&&x.push(A);for(let A of x)Y.add(A);for(let A of J.meshes)Y.add(A);i.render(Y,S);for(let A of J.meshes)Y.remove(A);for(let A of x)D.add(A);return!0}function oe(J,de,D){_e(O,D,J,de)}function Te(J,de,D){D.length&&_e(K,D,J,de)}function Ae(J,de,D){if(!K.meshes.length||K.sources.length!==de.length)return!1;k.overrideMaterial=D;for(let S of K.meshes)k.add(S);i.render(k,J),k.overrideMaterial=null;for(let S of K.meshes)k.remove(S);return!0}function Ne(J){let de=new Set;for(let D of J){let S=Array.isArray(D.material)?D.material:[D.material];for(let x of S)x&&de.add(x)}return[...de]}function nt(J,de,D){if(!D)return;let S=D.visible,x=J.background,A=i.autoClear;D.visible=!1,J.background=null,i.autoClear=!1,i.clearDepth(),i.render(J,de),D.visible=S,J.background=x,i.autoClear=A}function He(J){return J.children.filter(de=>de.userData?.blueprintAnnotations)}function et(J,de){for(let D of J)D.visible=de}function L(J,de,D){He(J).some(S=>S.visible)&&nt(J,de,D)}function yt(J,de,D,S={}){ws(D,!1);let x=He(J),A=x.map(U=>U.visible);et(x,!1),i.setRenderTarget(null),i.autoClear=!0,i.render(J,de),S.skipEdges||Pf(i,J,de,D,{reuseDepth:!!S.reuseDepth}),x.forEach((U,B)=>{U.visible=A[B]}),L(J,de,D)}function Ye(J,de,D,S,x={}){if(!(dg&&(typeof S=="function"?S():!!S)))return pi.value=0,yt(J,de,D,{reuseDepth:!0}),!1;if(x.quality!=="high"){pi.value=0,yt(J,de,D,{reuseDepth:!0});let j=x.batchKey||"";if(D&&!x.deferPrime&&j!==F){let be=N(D);ye(D,be.opaque,be.transparent,j)}return!0}let{opaque:U,transparent:B}=N(D);if(!B.length)return pi.value=0,yt(J,de,D,{reuseDepth:!0}),!1;D&&ye(D,U,B,x.batchKey||"");let H=x.quality==="high",pe=H?pS:dS,re=H?Lf:pg;i.getDrawingBufferSize(e),P(e.x,e.y,pe);let le=i.autoClear,Le=i.toneMapping,fe=J.background;fe instanceof Fe?t.copy(fe):t.set(1118481),h.uniforms.uBackground.value.copy(t);let ge=[];for(let j of[...U,...B])ge.push({mesh:j,visible:j.visible});let Re=Ne(B),Ce=[];for(let j of Re)Sa(j),Ce.push({mat:j,snap:{blending:j.blending,blendSrc:j.blendSrc,blendDst:j.blendDst,blendSrcAlpha:j.blendSrcAlpha,blendDstAlpha:j.blendDstAlpha,blendEquation:j.blendEquation,blendEquationAlpha:j.blendEquationAlpha,depthWrite:j.depthWrite,depthTest:j.depthTest,transparent:j.transparent,opacity:j.opacity,colorWrite:j.colorWrite,side:j.side,forceSinglePass:j.forceSinglePass}});Df(Re,!0);let Se=new Map;for(let j of B)Se.set(j,j.onBeforeRender),j.onBeforeRender=function(Ge,Et,ze,vt,It,mi){let gi=Array.isArray(It)?It:[It];for(let nn of gi)nn&&If(nn);let zt=Se.get(j);typeof zt=="function"&&zt.call(this,Ge,Et,ze,vt,It,mi)};let Ve=null;for(let j of Re)if(j.clippingPlanes?.length){Ve=j.clippingPlanes;break}if(!Ve)for(let j of U){let be=Array.isArray(j.material)?j.material:[j.material];for(let Ge of be)if(Ge?.clippingPlanes?.length){Ve=Ge.clippingPlanes;break}if(Ve)break}v.clippingPlanes=Ve||[],v.clipIntersection=!1,J.background=null,i.autoClear=!0,pi.value=0;let ve=[];for(let j of J.children)j!==D&&(j.isLight||(ve.push({obj:j,visible:j.visible}),j.visible=!1));function ke(){for(let[j,be]of Se)j.onBeforeRender=be}function z(){for(let{mat:j,snap:be}of Ce)E(j,be),j.blendEquationAlpha=be.blendEquationAlpha,j.depthWrite=be.depthWrite,j.depthTest=be.depthTest,j.transparent=be.transparent,j.opacity=be.opacity,j.colorWrite=be.colorWrite!==!1,j.side=be.side,j.forceSinglePass=be.forceSinglePass,j.needsUpdate=!0;for(let{mesh:j,visible:be}of ge)j.visible=be;for(let{obj:j,visible:be}of ve)j.visible=be;return ke(),Df(Re,!1),pi.value=0,J.background=fe,J.overrideMaterial=null,i.toneMapping=Le,i.setRenderTarget(null),i.autoClear=!0,yt(J,de,D),i.autoClear=le,!1}if(b(B,!1),b(U,!0),ws(D,!1),i.setRenderTarget(n),i.setClearColor(0,0),i.clear(),Te(J,de,U),i.setRenderTarget(s),i.setClearColor(0,1),y(s,Xc,{clearDepth:!0}),H){let j=new Float32Array(4);try{i.readRenderTargetPixels(s,2,2,1,1,j)}catch{j[0]=0}if(!Number.isFinite(j[0])||j[0]<Xc*.5)return z()}let Me=J.overrideMaterial;i.setRenderTarget(s),i.autoClear=!1,Ae(de,U,v)||(J.overrideMaterial=v,i.render(J,de),J.overrideMaterial=Me),i.autoClear=!0,Nt.tOpaqueViewZ.value=s.texture,i.setRenderTarget(a),i.setClearColor(0,0),i.clear(),y(o,0),Nt.tPrevViewZ.value=o.texture,b(U,!1),b(B,!0),ws(D,!1);let se=!1;for(let j=0;j<re;j++){Nt.tPrevViewZ.value=o.texture,Nt.tPeelViewZ.value=o.texture,pi.value=1;for(let{mat:Ge}of Ce)Ge.depthWrite=!0,Ge.depthTest=!0,Ge.colorWrite=!0,Ge.transparent=!0,Ge.forceSinglePass=!0,E(Ge,{blending:qn,blendSrc:Ms,blendDst:ia,blendSrcAlpha:Ms,blendDstAlpha:ia,blendEquation:Xn}),If(Ge);i.setRenderTarget(r),i.setClearColor(0,1),i.clear(!1,!0,!1),y(r,Xc),i.setRenderTarget(r),i.autoClear=!1,oe(J,de,B),i.autoClear=!0,Nt.tPeelViewZ.value=r.texture,pi.value=2;for(let{mat:Ge}of Ce)Ge.depthWrite=!1,Ge.depthTest=!1,Ge.colorWrite=!0,Ge.transparent=!0,Ge.forceSinglePass=!0,E(Ge,{blending:ri,blendSrc:Ur,blendDst:Fs,blendSrcAlpha:Ms,blendDstAlpha:Fs,blendEquation:Xn}),If(Ge);if(i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),oe(J,de,B),te.length&&l){for(let Et of te)Et.material?.resolution?.set(l.width,l.height);let Ge=de.layers.mask;de.layers.set(0),i.autoClear=!1,i.render(V,de),de.layers.mask=Ge,i.autoClear=!0}se=!0,d.uniforms.tSrc.value=l.texture,i.setRenderTarget(a),i.autoClear=!1,i.render(_,c),i.autoClear=!0;let be=o;o=r,r=be}if(!se)return z();for(let{mat:j,snap:be}of Ce)E(j,be),j.blendEquationAlpha=be.blendEquationAlpha,j.depthWrite=be.depthWrite,j.depthTest=be.depthTest,j.transparent=be.transparent,j.opacity=be.opacity,j.colorWrite=be.colorWrite!==!1,j.side=be.side,j.forceSinglePass=be.forceSinglePass;for(let{mesh:j,visible:be}of ge)j.visible=be;for(let{obj:j,visible:be}of ve)j.visible=be;ke(),ws(D,!0),Df(Re,!1),pi.value=0,J.background=fe,i.toneMapping=Le,i.setRenderTarget(null),i.autoClear=!0,i.render(u,c);let he=He(J),Ee=he.map(j=>j.visible);return et(he,!1),H&&D&&Pf(i,J,de,D,{opaqueEdgesOnly:te.length>0}),he.forEach((j,be)=>{j.visible=Ee[be]}),L(J,de,D),i.autoClear=le,!0}function Ze(){ce(),I(),h.dispose(),f.geometry.dispose(),d.dispose(),g.geometry.dispose(),m.dispose(),p.geometry.dispose(),v.dispose()}return{render:Ye,dispose:Ze,MAX_PEELS:fS,MAX_PEELS_FAST:pg,MAX_PEELS_HIGH:Lf,VIEW_Z_EPSILON:mg,USE_DEPTH_PEEL:dg}}var xg="blueprints.materialMode",qc="solid",Ea="realistic",mS={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_naturheld_flex_50:[35,175,15],slope_battens:[160,100,30],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_naturheld_flex_50:[35,175,15],soffit_battens:[160,100,30],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100]},gS={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,slope_naturheld_flex_50:7,soffit_naturheld_flex_50:7,slope_battens:8,soffit_battens:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,bass_wall_hanger:9,racking_strap:9,wall_plate:9,plenum_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14},_S=15e-6,xS=1;function Nf(i,e=0){if(i.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(i.userData.layerDepthBias=t,!(t>0))return;i.userData.layerDepthPatched=!0;let n=i.onBeforeCompile?.bind(i),s=i.customProgramCacheKey?.bind(i),r=_S.toExponential(8);i.onBeforeCompile=(o,a)=>{n?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if defined( USE_LOGDEPTHBUF )
	{
		float bpFaceBias = ${t}.0 * ${r};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},i.customProgramCacheKey=()=>`${s?s():i.type}|bpLayerDepth-r${xS}-${t}`,i.needsUpdate=!0}var yS=[];function yg(i,e,t){let n=new Set(i),s=Array.isArray(e)&&e.length?e:yS,r=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!n.has(u))continue;n.delete(u),c.push({type:"leaf",id:u,label:r(u)});continue}let h=o(u.children||[]);h.length&&c.push({type:"group",id:u.id,label:r(u.id),children:h})}return c}let a=o(s);if(n.size){let l=[...n].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:r(c)}));a.push({type:"group",id:"other",label:r("other"),children:l})}return a}function vg(i,e){if(!i||typeof i!="object")return{};let t=new Map;for(let s of e)s.type==="group"&&t.set(s.id,Yc(s));let n={};for(let[s,r]of Object.entries(i)){let o=t.get(s);if(o&&o.length)for(let a of o)n[a]=r;else n[s]=r}return n}function Yc(i){if(i.type==="leaf")return[i.id];let e=[];for(let t of i.children)e.push(...Yc(t));return e}function vS(i,e,t="transparent"){if(t==="none")return;let n=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let s of i.children||[]){if(!s?.userData?.isEdgeOverlay||!s.material)continue;let r=Array.isArray(s.material)?s.material:[s.material];for(let o of r)o&&(n<1?(o.transparent=!0,o.opacity=n,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Ts(i,e,t={}){let n=Math.max(0,Math.min(1,Number(e)||0)),s=t.edgeMode??"transparent";for(let r of i){if(!r)continue;if(n<=0){r.visible=!1;continue}if(r.visible=!0,!r.isMesh)continue;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a&&(n<1?(a.transparent=!0,a.opacity=n,a.depthWrite=!1,a.depthTest=!0,a.side=bt,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=bt,a.forceSinglePass=!1,a.blending=ri,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof r.userData.opaqueRenderOrder!="number"&&(r.userData.opaqueRenderOrder=r.renderOrder||0),r.renderOrder=n<1?0:r.userData.opaqueRenderOrder,vS(r,n,s);for(let a of r.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=r.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=n,c.transparent=n<1,c.depthWrite=n>=1,c.depthTest=!0,c.forceSinglePass=n<1,c.side=bt,c.needsUpdate=!0)}}}var MS={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_flex_50:{color:[35,175,15],roughness:.92,metalness:0,map:"wool"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_battens:{color:[160,100,30],roughness:.55,metalness:0,map:"wood"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_naturheld_flex_50:{color:[35,175,15],roughness:.92,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_battens:{color:[160,100,30],roughness:.55,metalness:0,map:"wood"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"}},Uf=new Map;function bS(i){if(!i||i==="none")return null;let e=Uf.get(i);if(e)return e;let t=128,n=document.createElement("canvas");n.width=t,n.height=t;let s=n.getContext("2d");if(!s)return null;if(i==="wood"){s.fillStyle="#c49858",s.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;s.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,s.lineWidth=1.2,s.beginPath(),s.moveTo(0,o+a*.15),s.lineTo(t,o-a*.1),s.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;s.fillStyle="rgba(70, 40, 15, 0.22)",s.fillRect(a,l,2,7+o%5)}}else if(i==="foam"){s.fillStyle="#9ed468",s.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;s.beginPath(),s.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),s.fillStyle="rgba(255,255,255,0.55)",s.fill(),s.strokeStyle="rgba(40,90,30,0.35)",s.stroke()}}else if(i==="plaster"){let o=s.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}s.putImageData(o,0,0)}else if(i==="wool"){s.fillStyle="#88c860",s.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;s.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",s.fillRect(a,l,1+o%2,2+o%3)}}else if(i==="metal"){let o=s.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),s.fillStyle=o,s.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)s.fillStyle="rgba(255,255,255,0.22)",s.fillRect(0,a,t,2),s.fillStyle="rgba(0,0,0,0.28)",s.fillRect(0,a+4,t,2)}else if(i==="masonry"){s.fillStyle="#b88868",s.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;s.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,s.fillRect(h+1,f+1,a-2,o-2),s.strokeStyle="rgba(70,45,30,0.55)",s.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let r=new Yi(n);return r.colorSpace=ft,r.wrapS=oi,r.wrapT=oi,r.repeat.set(2.5,2.5),r.needsUpdate=!0,Uf.set(i,r),r}function _g(i){return new Fe(i[0]/255,i[1]/255,i[2]/255)}function SS(i){return mS[i]||[160,160,160]}function ES(i,e,t=0){i.side=bt,t>0?(i.polygonOffset=!0,i.polygonOffsetFactor=-t,i.polygonOffsetUnits=-t*2):(i.polygonOffset=!1,i.polygonOffsetFactor=0,i.polygonOffsetUnits=0),e?(i.clippingPlanes=e,i.clipIntersection=!1):i.clippingPlanes=[],Nf(i,t),Sa(i),i.needsUpdate=!0}function Mg(i){i.computeBoundingBox();let e=i.boundingBox,t=new C;e.getSize(t);let n=Math.max(t.x,1e-6),s=Math.max(t.y,1e-6),r=Math.max(t.z,1e-6),o=Math.max(n,s,r);i.getAttribute("normal")||i.computeVertexNormals();let a=i.getAttribute("position"),l=i.getAttribute("normal");if(!a)return o;let c=i.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new C;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(l.getX(f)),g=Math.abs(l.getY(f)),_=Math.abs(l.getZ(f)),m,p;g>=d&&g>=_?(m=(h.x-e.min.x)/n,p=(h.z-e.min.z)/r):d>=_?(m=(h.z-e.min.z)/r,p=(h.y-e.min.y)/s):(m=(h.x-e.min.x)/n,p=(h.y-e.min.y)/s),u[f*2]=m,u[f*2+1]=p}return i.setAttribute("uv",new mt(u,2)),o}function wS(i,e){let t=bS(i);if(!t)return null;let n=t.clone();n.needsUpdate=!0;let s=Math.max(1.2,Math.min(12,e/400));return n.repeat.set(s,s),n}function bg(i,e,t={}){let n=t.clippingPlanes??null,s=e===Ea,r=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of i){let c=SS(a),u=gS[a]??0,h=1e3;if(s)for(let p of l)p.isMesh&&p.geometry&&(h=Math.max(h,Mg(p.geometry)));let f=1,d;if(s){let p=MS[a]||{color:c,roughness:.7,metalness:0,map:"none"};f=typeof p.opacity=="number"?p.opacity:1;let M=_g(p.color),v=wS(p.map||"none",h);p.clearcoat?d=new en({color:M,map:v,roughness:p.roughness,metalness:p.metalness,clearcoat:p.clearcoat,clearcoatRoughness:p.clearcoatRoughness??.3,envMapIntensity:.85}):d=new xn({color:M,map:v,roughness:p.roughness,metalness:p.metalness,envMapIntensity:p.metalness>.05?1.1:.55})}else d=new Bt({color:_g(c)});ES(d,n,u),d.userData.presetOpacity=f;let g=new Set;for(let p of l){if(!p.isMesh)continue;let M=p.material;if(M){let v=Array.isArray(M)?M:[M];for(let y of v)g.add(y)}p.material=d,p.userData.opaqueRenderOrder=u,p.renderOrder=u}for(let p of g)p!==d&&(p.map&&[...Uf.values()].includes(p.map)?p.map=null:p.map&&(p.map.dispose?.(),p.map=null),p.dispose?.());let _=1;r&&(r instanceof Map?_=r.has(a)?r.get(a):1:typeof r[a]=="number"&&(_=r[a]));let m=Math.max(0,Math.min(1,f*(Number(_)||0)));Ts(l,m,{edgeMode:o})}}function Sg(i,e){let n=(Array.isArray(i)?i:[i]).map(s=>{if(!s)return new xn({color:13421772,roughness:.65,metalness:0,side:In});let r=s.color?s.color.clone():new Fe(13421772),o=typeof s.roughness=="number"?s.roughness:.65,a=typeof s.metalness=="number"?s.metalness:0,l=null;s.map&&e&&(Mg(e),l=s.map.clone(),l.needsUpdate=!0);let c=new xn({color:r,map:l,roughness:o,metalness:a,side:In,transparent:!!s.transparent,opacity:typeof s.opacity=="number"?s.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(i)?n:n[0]}function Eg(){try{let i=localStorage.getItem(xg);if(i===Ea||i===qc)return i}catch{}return qc}function wg(i){try{localStorage.setItem(xg,i)}catch{}}var Ui=1e-5,Tg=new WeakMap;function Vn(i,e,t,n){let s=t/(t-n);return i.clone().lerp(e,s)}function TS(i,e,t){let[n,s,r]=i,o=e.distanceToPoint(n),a=e.distanceToPoint(s),l=e.distanceToPoint(r),c=o>=-Ui,u=a>=-Ui,h=l>=-Ui,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([n,s,r]);return}if(f===0)return;let d=[n,s,r],g=[o,a,l],_=[c,u,h];if(f===1){let v=_.findIndex(Boolean),y=(v+1)%3,I=(v+2)%3,R=d[v],P=Vn(d[v],d[y],g[v],g[y]),N=Vn(d[v],d[I],g[v],g[I]);t.push([R,P,N]);return}let m=_.findIndex(v=>!v),p=(m+1)%3,M=(m+2)%3;if(_[p]){let v=d[p],y=d[M],I=Vn(d[m],d[p],g[m],g[p]),R=Vn(d[m],d[M],g[m],g[M]);t.push([v,y,I]),t.push([y,R,I])}else{let v=d[M],y=Vn(d[m],d[p],g[m],g[p]),I=Vn(d[m],d[M],g[m],g[M]);t.push([v,y,I])}}function AS(i,e){let[t,n,s]=i,r=e.distanceToPoint(t),o=e.distanceToPoint(n),a=e.distanceToPoint(s),l=r>=-Ui,c=o>=-Ui,u=a>=-Ui,h=(l?1:0)+(c?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,n,s],d=[r,o,a],g=[l,c,u];if(h===1){let M=g.findIndex(Boolean),v=(M+1)%3,y=(M+2)%3;return[Vn(f[M],f[v],d[M],d[v]),Vn(f[M],f[y],d[M],d[y])]}let _=g.findIndex(M=>!M),m=(_+1)%3,p=(_+2)%3;return g[m]?[Vn(f[_],f[m],d[_],d[m]),Vn(f[_],f[p],d[_],d[p])]:[Vn(f[_],f[m],d[_],d[m]),Vn(f[_],f[p],d[_],d[p])]}function RS(i,e,t){let n=i.clone(),s=e.clone();for(let r of t){let o=r.distanceToPoint(n),a=r.distanceToPoint(s),l=o>=-Ui,c=a>=-Ui;if(l&&c)continue;if(!l&&!c)return null;let u=Vn(n,s,o,a);l?s=u:n=u}return n.distanceToSquared(s)<Ui*Ui?null:[n,s]}function CS(i,e){let t=i;for(let n of e){let s=[];for(let r of t)TS(r,n,s);if(t=s,t.length===0)break}return t}function PS(i,e){let t=i.getAttribute("position");if(!t)return[];let n=new C,s=[],r=i.getIndex();function o(a,l,c){s.push([n.fromBufferAttribute(t,a).applyMatrix4(e).clone(),n.fromBufferAttribute(t,l).applyMatrix4(e).clone(),n.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(r)for(let a=0;a<r.count;a+=3)o(r.getX(a),r.getX(a+1),r.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return s}function IS(i){let e=i.getAttribute("position");if(!e)return[];let t=new C,n=[],s=i.getIndex();function r(o,a,l){n.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(s)for(let o=0;o<s.count;o+=3)r(s.getX(o),s.getX(o+1),s.getX(o+2));else for(let o=0;o<e.count;o+=3)r(o,o+1,o+2);return n}var ar=1e-6,DS=2e-4,Ag=new WeakMap;function LS(i){let e="";for(let t of i)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function Rg(i){let e=t=>Math.round(t/ar);return`${e(i.x)},${e(i.y)},${e(i.z)}`}function Ig(i,e){let t=LS(e),n=Ag.get(i);if(n&&n.key===t)return n;let s=[],r=[],o=Tg.get(i);if(o||(o=IS(i),Tg.set(i,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((f,d)=>d!==l),h=[];for(let f of o){let d=AS(f,c);if(!d)continue;let g=u.length?RS(d[0],d[1],u):d;g&&(h.push(g),s.push(g[0].x,g[0].y,g[0].z,g[1].x,g[1].y,g[1].z))}r.push(h)}let a={key:t,segments:new Float32Array(s),perPlane:r};return Ag.set(i,a),a}function US(i){let e=new Map,t=[],n=new Map;for(let[o,a]of i){let l=Rg(o),c=Rg(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1}),n.has(l)||n.set(l,[]),n.has(c)||n.set(c,[]),n.get(l).push(u),n.get(c).push(u)}function s(o,a){let l=n.get(o)||[],c=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of l){if(t[d].used)continue;if(!f)return d;let g=t[d],_=g.a===o?g.b:g.a,m=e.get(_),p=h.x-f.x,M=h.y-f.y,v=h.z-f.z,y=m.x-h.x,I=m.y-h.y,R=m.z-h.z,P=p*y+M*I+v*R;P>u&&(u=P,c=d)}return c}let r=[];for(let o=0;o<t.length;o++){if(t[o].used)continue;let a=[],l=[],c=o,u=t[c].a,h=u,f=null,d=!1,g=t.length+2;for(let _=0;_<g;_++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let m=t[c].a===u?t[c].b:t[c].a;if(m===h){d=!0;break}let p=s(m,u);if(p<0)break;f=u,u=m,c=p}d&&a.length>=3&&r.push(a)}return r}function NS(i){let e=i.clone().normalize(),t=Math.abs(e.x)<.9?new C(1,0,0):new C(0,1,0),n=new C().crossVectors(t,e).normalize(),s=new C().crossVectors(e,n).normalize();return{u:n,v:s,n:e}}function OS(i,e,t,n){return i.map(s=>{let r=s.clone().sub(e);return{x:r.dot(t),y:r.dot(n),p3:s}})}function FS(i){let e=0;for(let t=0;t<i.length;t++){let n=(t+1)%i.length;e+=i[t].x*i[n].y-i[n].x*i[t].y}return e*.5}function BS(i){return FS(i)<0&&i.reverse(),i}function Cg(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s].y,a=t[r].y,l=t[s].x,c=t[r].x;o>e!=a>e&&i<(c-l)*(e-o)/(a-o+0)+l&&(n=!n)}return n}function is(i,e,t){return(e.x-i.x)*(t.y-i.y)-(e.y-i.y)*(t.x-i.x)}function zS(i,e,t,n){let s=is(i,e,t),r=is(i,e,n),o=is(t,n,i),a=is(t,n,e);return s*r<0&&o*a<0}function Pg(i,e,t,n){let s=t.length;for(let r=0;r<s;r++){let o=(r+1)%s;if(!(n>=0&&(r===n||o===n))&&zS(i,e,t[r],t[o]))return!0}return!1}function kS(i,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let n=e[t],s=-1,r=1/0,o=i.length;for(let f=0;f<o;f++){let d=i[f],g=i[(f+1)%o];if(d.y>n.y==g.y>n.y)continue;let _=g.y-d.y;if(Math.abs(_)<1e-15)continue;let m=(n.y-d.y)/_;if(m<-1e-8||m>1+1e-8)continue;let p=d.x+m*(g.x-d.x);p>=n.x-1e-8&&p<r&&(r=p,s=f)}let a=[];s>=0&&a.push(s,(s+1)%o);let l=0,c=1/0;for(let f=0;f<o;f++){let d=(i[f].x-n.x)**2+(i[f].y-n.y)**2;d<c&&(c=d,l=f)}a.push(l);let u=-1;for(let f of a)if(!Pg(n,i[f],i,f)&&!Pg(n,i[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(i[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(i[f])}return h}function Of(i,e){return(i.x-e.x)**2+(i.y-e.y)**2<=ar*ar}function HS(i,e,t,n){if(Of(i,e)||Of(i,t)||Of(i,n))return!1;let s=is(e,t,i),r=is(t,n,i),o=is(n,e,i),a=s<-1e-14||r<-1e-14||o<-1e-14,l=s>1e-14||r>1e-14||o>1e-14;return!(a&&l)}function VS(i){let e=[];for(let s of i){let r=e[e.length-1];r&&(r.x-s.x)**2+(r.y-s.y)**2<ar*ar||e.push(s)}if(e.length>=2){let s=e[0],r=e[e.length-1];(s.x-r.x)**2+(s.y-r.y)**2<ar*ar&&e.pop()}let t=[],n=e.length*e.length+8;for(;e.length>3&&n-- >0;){let s=!1,r=e.length;for(let o=0;o<r;o++){let a=(o+r-1)%r,l=(o+1)%r,c=e[a],u=e[o],h=e[l],f=is(c,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),s=!0;break}let d=!1;for(let g=0;g<r;g++)if(!(g===o||g===a||g===l)&&HS(e[g],c,u,h)){d=!0;break}if(!d){t.push([c.p3,u.p3,h.p3]),e.splice(o,1),s=!0;break}}if(!s)break}return e.length===3&&is(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function GS(i,e,t){if(!i.length)return[];let{u:n,v:s,n:r}=NS(e.normal),o=i[0][0],a=i.map(u=>BS(OS(u,o,n,s))),l=a.map((u,h)=>{let f=u[0],d=0;for(let g=0;g<a.length;g++)g!==h&&Cg(f.x,f.y,a[g])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!Cg(a[d][0].x,a[d][0].y,h))continue;let g=kS(h,a[d]);g&&(h=g)}let f=VS(h);for(let d of f)c.push(d.map(g=>g.clone().addScaledVector(r,t)))}return c}function Dg(i,e){return!i||!e?.length?[]:Ig(i,e).perPlane}function Lg(i,e,t=0){if(!i?.length||!e)return new Float32Array(0);let n=US(i),s=GS(n,e,DS+Math.max(0,t));if(!s.length)return new Float32Array(0);let r=new Float32Array(s.length*9),o=0;for(let[a,l,c]of s)r[o++]=a.x,r[o++]=a.y,r[o++]=a.z,r[o++]=l.x,r[o++]=l.y,r[o++]=l.z,r[o++]=c.x,r[o++]=c.y,r[o++]=c.z;return r}function fg(i,e){return!i||!e?.length?new Float32Array(0):Ig(i,e).segments}function Wc(i,e){if(!i?.length)return[];let t=new je().copy(e).invert();return i.map(n=>n.clone().applyMatrix4(t))}function WS(i){let e=new Float32Array(i.length*9),t=0;for(let[s,r,o]of i)e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let n=new Rt;return n.setAttribute("position",new mt(e,3)),n.computeVertexNormals(),n}function Ug(i,e){if(!i.visible||!i.geometry)return null;let t=PS(i.geometry,i.matrixWorld);if(t.length===0)return null;let n=e.length?CS(t,e):t;if(n.length===0)return null;let s=WS(n),r=Sg(i.material,s),o=new Je(s,r);return o.name=i.name,o}var XS=5e-5;function $c(i){return!!(i&&i.userData&&i.userData.isSectionCap)}function Ff(i){return i?Array.isArray(i)?i[0]||null:i:null}function Og(i,e){let t;return i.isMeshPhysicalMaterial?t=new en:i.isMeshStandardMaterial?t=new xn:t=new Bt,i.color&&t.color&&t.color.copy(i.color),i.map&&"map"in t&&(t.map=i.map),typeof i.roughness=="number"&&"roughness"in t&&(t.roughness=i.roughness),typeof i.metalness=="number"&&"metalness"in t&&(t.metalness=i.metalness),typeof i.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=i.clearcoat,t.clearcoatRoughness=i.clearcoatRoughness??.3),typeof i.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=i.envMapIntensity),t.opacity=typeof i.opacity=="number"?i.opacity:1,t.transparent=!!i.transparent,t.depthWrite=i.depthWrite!==!1,t.depthTest=i.depthTest!==!1,t.side=bt,t.forceSinglePass=!!i.forceSinglePass,t.toneMapped=i.toneMapped!==!1,t.polygonOffset=!!i.polygonOffset,t.polygonOffsetFactor=i.polygonOffsetFactor||0,t.polygonOffsetUnits=i.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,Nf(t,i.userData?.layerDepthBias||0),Sa(t),t.needsUpdate=!0,t}function Zc(i){i.parent?.remove(i),i.geometry?.dispose?.();let e=i.material,t=Array.isArray(e)?e:[e];for(let n of t)n&&(n.map=null),n?.dispose?.()}function qS(i){let e="";for(let t of i)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function YS(i,e){if(!i)return null;for(let t of i.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function Fg(i,e){let t=new Set;for(let n of i){let s=n.parent;if(!s||t.has(s))continue;t.add(s);let r=YS(s,e);if(r)return r}return null}function Ng(i,e,t){i.visible=!0;for(let n of i.children){if(!n.isMesh)continue;let s=Ff(n.material);s&&(e.color&&s.color&&s.color.copy(e.color),s.opacity=typeof e.opacity=="number"?e.opacity:1,s.transparent=!!e.transparent,s.depthWrite=e.depthWrite!==!1,s.depthTest=e.depthTest!==!1,s.forceSinglePass=!!e.forceSinglePass,s.side=bt,s.needsUpdate=!0,n.visible=!0,n.renderOrder=t)}}function ZS(i,e,t,n){let s=e.filter(d=>d?.isMesh&&d.visible&&!$c(d)&&d.geometry),r=Fg(e,i);if(!s.length||!t.length){r&&Zc(r);return}let o=s[0],a=o.parent;if(!a)return;r&&r.parent!==a&&Zc(r);let l=r&&r.parent===a?r:new Ut;for(let d of[...l.children])Zc(d);l.parent||(l.name=`${i}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=i,a.add(l));let c=Ff(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new je().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of s){d.updateWorldMatrix(!0,!1);let g=Wc(t,d.matrixWorld),_=Dg(d.geometry,g);for(let m=0;m<t.length;m++){let p=_[m]||[];for(let[M,v]of p)f[m].push([M.clone().applyMatrix4(d.matrixWorld),v.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let g=Lg(f[d],t[d],h*XS);if(g.length<9)continue;for(let M=0;M<g.length;M+=3){let v=new C(g[M],g[M+1],g[M+2]).applyMatrix4(u);g[M]=v.x,g[M+1]=v.y,g[M+2]=v.z}let _=new Rt;_.setAttribute("position",new mt(g,3)),_.computeVertexNormals();let m=t.filter((M,v)=>v!==d),p=new Je(_,Og(c,m));p.name=`${i}__cap${d}`,p.userData.isSectionCap=!0,p.userData.capPlaneIndex=d,p.userData.capLabel=i,p.renderOrder=o.renderOrder,p.raycast=()=>{},l.add(p)}l.userData.bpCapSig=n,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function Bf(i,e){let t=e||[],n=qS(t);for(let[s,r]of i){let o=(r||[]).filter(u=>u&&!$c(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=Fg(o,s);if(!t.length||!a.length){l&&Zc(l);continue}let c=Ff(a[0].material);if(l&&l.userData.bpCapSig===n&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){Ng(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===n&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((_,m)=>m!==f):t;u.material=Og(c,d);let g=Array.isArray(h)?h:[h];for(let _ of g)_&&(_.map=null),_?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,Ng(l,c,a[0].renderOrder||0);continue}ZS(s,o,t,n)}}var $S=2,KS=.45,Bg=.015;function zf(i){let e=new Lt().setFromObject(i);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:Bg};let t=new C;e.getSize(t);let n=Math.max(t.x,t.y,t.z,1e-9),s=n>$S?KS/n:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:n,scale:s,liftM:Bg}}function zg(i,e=zf(i)){let{cx:t,cz:n,minY:s,scale:r,liftM:o}=e;return i.position.set(-t*r,-s*r+o,-n*r),i.scale.setScalar(r),i.updateMatrixWorld(!0),e}var jS=`
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
`,kg=!1;function JS(){if(kg)return;kg=!0;let i=document.createElement("style");i.id="bp-viewer-chrome",i.textContent=jS,document.head.appendChild(i)}function Hg(i){JS();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),n=document.getElementById("sheet-scroll"),s=window.matchMedia("(min-width: 768px)"),r=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return s.matches}function c(){return a}function u(){for(let D of o)D(a)}function h(D){o.push(D),D(a)}function f(){if(!e||!n)return;let D=document.getElementById("section-view"),S=document.getElementById("section-cuts"),x=t?.offsetHeight||22,A=16,U=0;if(D&&(U+=D.offsetHeight),S){let Le=S.querySelector(".sheet-title"),fe=S.querySelector(".cut-row");U+=32,Le&&(U+=Le.offsetHeight+8),fe?U+=fe.offsetHeight:U+=S.offsetHeight}let B=x+U+A,H=window.innerHeight||640,pe=Math.round(H*.28),re=Math.round(H*.45),le=Math.max(pe,Math.min(re,Math.round(B)));return e.style.setProperty("--sheet-partial-h",`${le}px`),le}function d(){f(),!l()&&a==="partial"&&u()}function g(D){let S=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${D}`).trim(),x=parseFloat(S);return Number.isFinite(x)?x:0}function _(){let D={top:0,right:0,bottom:0,left:0};if(!e)return D;if(l()){if(a!=="open")return D;let x=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(x)),bottom:0,left:0}}if(a!=="partial")return D;let S=Math.round(ee()+g("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,S)),left:0}}function m(D,S={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(D)||(D=l()?"open":"peek"),a=D,e.dataset.detent=D,e.classList.toggle("sheet-open",D!=="peek"&&D!=="closed"),document.body.classList.toggle("sheet-open",D!=="peek"&&D!=="closed"),y(),S.silent||u()}function p(){l()?m("open"):m("peek"),f()}let M=document.getElementById("top-chrome"),v=document.getElementById("sheet-toggle");if(!v&&M){let D=M.querySelector(".top-chrome-end");D||(D=document.createElement("div"),D.className="top-chrome-end",M.append(D)),v=document.createElement("button"),v.type="button",v.id="sheet-toggle",v.className="chrome-btn sheet-toggle",D.append(v)}function y(){if(!v)return;let D=a==="open";v.setAttribute("aria-expanded",D?"true":"false"),v.setAttribute("aria-label",D?"Hide controls":"Show controls"),v.title=D?"Hide controls":"Show controls",v.textContent=D?"\u203A":"\u2039"}v?.addEventListener("click",()=>{l()&&m(a==="open"?"closed":"open")});let I=!1,R=null,P=!1,N=!1,b=0,E=0,O=0,K=0,F="peek",Y=0,k=0,V=0,te=0,X=0,W=null,ce=12,ue=28,ye='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function Ie(){return Math.max(t?.offsetHeight||34,34)+8}function ee(){return f()||window.innerHeight*.38}function ae(){let D=window.innerHeight||640;return Math.min(D*.92,D-72)}function _e(){return e?.offsetWidth||0}function oe(D){return D instanceof Element?!!D.closest(ye):!1}function Te(){if(l()){m(a==="open"?"closed":"open");return}m(a==="peek"?"partial":a==="partial"?"full":"peek")}function Ae(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Ne(D,S,x){if(e){I=!0,P=!1,R=S,N=!1,F=a,b=D.clientY,E=D.clientX,Y=b,k=E,V=performance.now(),te=0,X=0,K=x,W=D.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${K}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(D.pointerId)}catch{}}}function nt(D){if(!(!e||!t)&&!(D.target!==t&&!t.contains(D.target)&&D.target!==e)){I=!0,P=!1,R="narrow",N=!1,F=a,e.classList.add("is-dragging"),b=D.clientY,E=D.clientX,Y=b,k=E,V=performance.now(),te=0,X=0,O=e.getBoundingClientRect().height,W=D.pointerId;try{t.setPointerCapture(D.pointerId)}catch{}D.preventDefault()}}function He(D){if(!e||D.pointerType==="mouse"&&D.button!==0||D.target instanceof Element&&D.target.closest(".chrome-btn"))return;let S=_e();if(a==="closed"){let x=window.innerWidth-ue-g("r");if(D.clientX<x)return;Ne(D,"wide-open",S),D.preventDefault();return}e.contains(D.target)&&(oe(D.target)||(I=!0,P=!0,R="wide-close",N=!1,F=a,b=D.clientY,E=D.clientX,Y=b,k=E,V=performance.now(),te=0,X=0,K=0,W=D.pointerId))}function et(D){l()?He(D):nt(D)}function L(D){if(!I||!e||W!=null&&D.pointerId!==W)return;let S=performance.now(),x=Math.max(1,S-V),A=Math.hypot(D.clientX-E,D.clientY-b);if(P){if(A<=ce)return;let pe=D.clientX-E,re=D.clientY-b;if(Math.abs(pe)<Math.abs(re)*1.15||pe<=0){I=!1,P=!1,R=null,W=null;return}P=!1,N=!0,e.classList.add("is-dragging"),n&&(n.style.overflow="hidden");try{e.setPointerCapture(D.pointerId)}catch{}D.preventDefault()}if(A>ce&&(N=!0),R==="narrow"){let pe=b-D.clientY;te=(Y-D.clientY)/x*1e3,Y=D.clientY,V=S;let re=Ie(),le=ae(),Le=Math.max(re,Math.min(le,O+pe));e.style.height=`${Le}px`;return}let U=D.clientX-E;X=(D.clientX-k)/x*1e3,k=D.clientX,V=S;let B=_e(),H=Math.max(0,Math.min(B,K+U));e.style.transform=`translateX(${H}px)`}function yt(D,S){let x=[{name:"peek",h:Ie()},{name:"partial",h:ee()},{name:"full",h:ae()}],A=Math.max(0,x.findIndex(le=>le.name===F)),U=x[A].h;if(Math.abs(D-U)<36&&Math.abs(S)<1100)return F;let B=D+S*.05,H=(x[0].h+x[1].h)/2,pe=(x[1].h+x[2].h)/2,re=B<H?0:B<pe?1:2;if(re>A+1&&(re=A+1),re<A-1&&(re=A-1),re===2&&A<2){let le=pe+(x[2].h-pe)*.25;D<le&&S<1400&&(re=1)}return x[re].name}function Ye(D,S){let x=_e();return x<=0||Math.abs(D-(F==="closed"?x:0))<28&&Math.abs(S)<800?F:S>900?"closed":S<-900?"open":D>x*.45?"closed":"open"}function Ze(D){if(!I||!e||W!=null&&D.pointerId!==W)return;let S=R,x=P;if(I=!1,P=!1,R=null,W=null,e.classList.remove("is-dragging"),n&&(n.style.overflow=""),x&&!N)return;if(!N){S==="narrow"?(e.style.height="",Te()):S==="wide-open"?(Ae(),m("open")):Ae();return}if(S==="narrow"){let B=e.getBoundingClientRect().height;e.style.height="",m(yt(B,te));return}let A=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),U=A?parseFloat(A[1]):0;Ae(),m(Ye(U,X))}t?.addEventListener("pointerdown",D=>{l()||et(D)}),t?.addEventListener("pointermove",L),t?.addEventListener("pointerup",Ze),t?.addEventListener("pointercancel",Ze),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",D=>{l()&&He(D)},{capture:!0}),document.addEventListener("pointermove",L,{capture:!0}),document.addEventListener("pointerup",Ze,{capture:!0}),document.addEventListener("pointercancel",Ze,{capture:!0});let J=()=>{e&&(e.style.height=""),Ae(),n&&(n.style.overflow=""),p()};s.addEventListener?s.addEventListener("change",J):s.addListener(J);function de(){i(r.matches)}return de(),r.addEventListener?r.addEventListener("change",de):r.addListener(de),window.addEventListener("resize",()=>{f(),u()}),p(),y(),{getDetent:c,getSafeInsets:_,onDetentChange:h,refreshPartialHeight:d,setDetent:m}}function Kc(i={}){let e=i.min??0,t=i.max??1,n=i.step??.001,s=!!i.thumbScrubOnly,r=wa(i.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,i.ariaLabel&&o.setAttribute("aria-label",i.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,h=14,f=null,d=0,g=0,_=!1,m=!1,p=!1,M=!0;function v(){let Y=`${(t===e?0:(r-e)/(t-e))*100}%`;l.style.width=Y,c.style.left=Y,o.setAttribute("aria-valuenow",String(r));let k=i.formatAriaValue?.(r)??String(r);o.setAttribute("aria-valuetext",k)}function y(F,Y){let k=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!k||!(k.width>0)||!(k.height>0)?!0:F>=k.left-h&&F<=k.right+h&&Y>=k.top-h&&Y<=k.bottom+h}function I(F,Y="input"){let k=QS(wa(F,e,t),e,t,n);if(k===r&&Y==="silent"){v();return}r=k,v(),(Y==="input"||Y==="change")&&i.onInput?.(r),Y==="change"&&i.onChange?.(r)}function R(F){let Y=a.getBoundingClientRect(),k=Math.max(Y.width,1),V=wa((F-Y.left)/k,0,1);return e+V*(t-e)}function P(F){if(f==null)return;let Y=m;f=null,_=!1,m=!1,M=!0,Y&&i.onScrubEnd?.(),F&&Y&&i.onChange?.(r)}function N(F){f==null&&(F.pointerType==="mouse"&&F.button!==0||(f=F.pointerId,d=F.clientX,g=F.clientY,p=!1,_=!1,m=!1,M=!s||y(F.clientX,F.clientY)))}function b(F){if(f!==F.pointerId)return;let Y=F.clientX-d,k=F.clientY-g;if(!p&&Math.hypot(Y,k)>u&&(p=!0),!_){if(!p)return;if(F.pointerType==="touch"&&Math.abs(k)>=Math.abs(Y)){P(!1);return}if(!M){P(!1);return}_=!0,m=!0,i.onScrubStart?.();try{o.setPointerCapture(F.pointerId)}catch{}}I(R(F.clientX),"input"),F.preventDefault()}function E(F){if(f===F.pointerId){if(!p&&!m){f=null,_=!1,m=!1,M=!0,i.onTap?.();return}P(!0)}}function O(F){f===F.pointerId&&P(!1)}function K(F){let Y=t-e,k=n>0?n:Y/100,V=Y/10,te=r;switch(F.key){case"ArrowLeft":case"ArrowDown":te=r-k;break;case"ArrowRight":case"ArrowUp":te=r+k;break;case"PageDown":te=r-V;break;case"PageUp":te=r+V;break;case"Home":te=e;break;case"End":te=t;break;case"Enter":case" ":F.preventDefault(),i.onTap?.();return;default:return}F.preventDefault(),I(te,"change")}return o.addEventListener("pointerdown",N),o.addEventListener("pointermove",b),o.addEventListener("pointerup",E),o.addEventListener("pointercancel",O),o.addEventListener("keydown",K),v(),{el:o,get value(){return r},set value(F){I(F,"silent")},refresh(){v()}}}function wa(i,e,t){return Math.min(t,Math.max(e,i))}function QS(i,e,t,n){if(!(n>0))return wa(i,e,t);let s=Math.round((i-e)/n),r=Number((e+s*n).toPrecision(12));return wa(r,e,t)}var Vg="blueprints.locale",eE={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool",racking_strap:"Racking strap",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_naturheld_flex_50:"NaturHeld Flex 50",slope_battens:"KVH battens",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_direct_hanger:"Direct hanger 125",slope_nonius:"Nonius hanger",soffit_naturheld_140:"NaturHeld 140",soffit_naturheld_flex_50:"NaturHeld Flex 50",soffit_battens:"KVH battens",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius hanger",bass_mineral_wool:"Mineral wool",bass_gkb:"GKB plasterboard",bass_cd:"CD frame",bass_wall_hanger:"CD wall hanger"},tE={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vlna",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_naturheld_flex_50:"NaturHeld Flex 50",slope_battens:"Lat\u011B KVH",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 125",slope_nonius:"Nonius z\xE1v\u011Bs",soffit_naturheld_140:"NaturHeld 140",soffit_naturheld_flex_50:"NaturHeld Flex 50",soffit_battens:"Lat\u011B KVH",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius z\xE1v\u011Bs",bass_mineral_wool:"Miner\xE1ln\xED vata",bass_gkb:"GKB s\xE1drokarton",bass_cd:"CD r\xE1m",bass_wall_hanger:"T\u0159men CD"},nE={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","scene.soffit":"Soffit","scene.gable":"Gable","scene.sikmina-lattice":"Slopes lattice","scene.sikmina-section":"Slopes section"},iE={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez"},kf={en:{...nE,...eE},cs:{...iE,...tE}},eo=Gg(),Hf=new Set;function Gg(){try{let i=typeof navigator<"u"&&navigator.language||"";if(String(i).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function sE(){try{let i=localStorage.getItem(Vg);if(i==="en"||i==="cs")return i}catch{}return Gg()}function rE(i){try{localStorage.setItem(Vg,i)}catch{}}function jc(){return eo}function Wg(i){if(!(i!=="en"&&i!=="cs")&&i!==eo){eo=i,rE(i);for(let e of Hf)try{e()}catch{}}}function Xg(i){return Hf.add(i),()=>Hf.delete(i)}function qg(){return eo=sE(),eo}function Ot(i){let e=kf[eo]||kf.en;if(Object.prototype.hasOwnProperty.call(e,i))return e[i];let t=kf.en;return Object.prototype.hasOwnProperty.call(t,i)?t[i]:i.startsWith("scene.")?i.slice(6):i}function Vf(i){let e=i||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let n=t.getAttribute("data-i18n");n&&(t.textContent=Ot(n))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let n=t.getAttribute("data-i18n-aria");n&&t.setAttribute("aria-label",Ot(n))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let n=t.getAttribute("data-i18n-title");n&&t.setAttribute("title",Ot(n))})}var Yg=8,oE=56,Zg=14,Gf=11,$g=.5,aE=1e-4,Jc=128,lE=.028,cE=5,uE=.995,hE=.999,Kg=18,fE=22,dE=14,Wf=new Be,jg=new ea,$n=new C,Kn=new C,Oi=new C,bn=new C,io=new C,Ni=new C,to=new C,no=new C,xt=new C,Jg=new C,so=new C,pE=new on;function Xf(i){let e=Math.abs(i)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function qf(i){return i.pointerType==="touch"}function Yf(i){return i.pointerType==="mouse"||i.pointerType==="pen"}function Qg(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function a0(i){let{scene:e,canvas:t,getCamera:n,controls:s,getRoot:r,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=i,c="idle",u=!1,h=!1,f=0,d=0,g=null,_=null,m=null,p=null,M=null,v=null,y=null,I="mouse",R=0,P=0,N=!1,b=!1,E=new Ut;E.name="MeasureOverlay",E.renderOrder=10,e.add(E);let O=new Ut;O.name="MeasureDimensions",e.add(O);let K=n0(16766474),F=n0(3458905),Y=i0(16766474,.75),k=yE(16766474);E.add(K,F,Y,k),K.visible=!1,F.visible=!1,Y.visible=!1,k.visible=!1;let V=_E(t),te=[];function X(){return u}function W(A){let U=!!A;if(U===u){U&&ue();return}if(u=U,u)if(s.enabled=!1,c="placeFirst",ce(),M=null,v=null,Qg()){let B=Math.max(1,t.clientWidth),H=Math.max(1,t.clientHeight);Ie(B*.5,H*.5,!0)}else ye();else s.enabled=!0,c="idle",ce(),M=null,v=null,y=null,b=!1,ye(),a?.(null);l?.(u),ue(),ae()}function ce(){h=!1,g=null,_=null,m=null,p=null}function ue(){c==="placeSecond"&&M&&g?a?.(Xf(M.distanceTo(g))):u&&a?.(null)}function ye(){V.hidden=!0,K.visible=!1,k.visible=!1}function Ie(A,U,B=!1){f=A,d=U,h=!0;let H=nt(A,U);if(H){let pe=H.point.clone(),re=H.kind,le=H.edgeDir;if(p=null,c==="placeSecond"&&M){let Le=He(M,v,H);Le&&(pe=Le.foot,re="perp",le=Le.edgeDir,p=Le.edgeDir.clone())}g=pe,_=re,m=le}else B?g||(_=null,m=null,p=null):(g=null,_=null,m=null,p=null);ae(),ue()}function ee(A,U){let B=Ae(U)*cE;A.scale.setScalar(Math.max(B,1e-6))}function ae(){if(!u){ye(),F.visible=!1,Y.visible=!1,k.visible=!1;return}M?(F.visible=!0,F.position.copy(M),ee(F,M)):F.visible=!1,h?(V.hidden=!1,t0(V,t,f,d,_),g?(K.visible=!0,K.position.copy(g),ee(K,g),xE(K,_)):K.visible=!1):ye(),c==="placeSecond"&&M&&g?(r0(Y,M,g),Y.visible=!0):Y.visible=!1,c==="placeSecond"&&_==="perp"&&M&&g&&p?(s0(k,M,g,p,Ae),k.visible=!0):k.visible=!1}function _e(A){let U=t.getBoundingClientRect();return{x:A.clientX-U.left,y:A.clientY-U.top}}function oe(A,U,B){return B==="touch"?{x:A,y:U-oE}:{x:A,y:U}}function Te(A){let U=o()||[];for(let B of U)if(B.distanceToPoint(A)<-aE)return!1;return!0}function Ae(A){let U=n(),B=Math.max(1,t.clientHeight);if(U.isOrthographicCamera)return 2*((U.top-U.bottom)/(2*Math.max(U.zoom,1e-6)))/B;let H=U.position.distanceTo(A),pe=U.fov*Math.PI/180;return 2*Math.tan(pe/2)*H/B/Math.max(U.zoom,1e-6)}function Ne(A,U){U.copy(A).project(n());let B=Math.max(1,t.clientWidth),H=Math.max(1,t.clientHeight);return U.x=(U.x*.5+.5)*B,U.y=(-U.y*.5+.5)*H,U}function nt(A,U){let B=r();if(!B)return null;let H=t.getBoundingClientRect();Wf.x=A/Math.max(1,H.width)*2-1,Wf.y=-(U/Math.max(1,H.height))*2+1,jg.setFromCamera(Wf,n());let pe=jg.intersectObject(B,!0),re=null;for(let ze of pe)if(ze.object.visible&&Te(ze.point)){re=ze;break}if(!re)return null;let le=re.object,Le=le.geometry;if(!Le?.getAttribute("position"))return{point:re.point.clone(),kind:"face",edgeDir:null,mesh:le,triVerts:null,faceNormal:null};le.updateWorldMatrix(!0,!1);let fe=Ae(re.point),ge=fe*Zg,Re=fe*Gf,Ce=Le.getAttribute("position"),Se=Le.getIndex(),Ve=re.faceIndex,ve=[];if(re.face)$n.fromBufferAttribute(Ce,re.face.a).applyMatrix4(le.matrixWorld),Kn.fromBufferAttribute(Ce,re.face.b).applyMatrix4(le.matrixWorld),Oi.fromBufferAttribute(Ce,re.face.c).applyMatrix4(le.matrixWorld),ve.push($n.clone(),Kn.clone(),Oi.clone());else if(typeof Ve=="number"){let ze,vt,It;Se?(ze=Se.getX(Ve*3),vt=Se.getX(Ve*3+1),It=Se.getX(Ve*3+2)):(ze=Ve*3,vt=Ve*3+1,It=Ve*3+2),$n.fromBufferAttribute(Ce,ze).applyMatrix4(le.matrixWorld),Kn.fromBufferAttribute(Ce,vt).applyMatrix4(le.matrixWorld),Oi.fromBufferAttribute(Ce,It).applyMatrix4(le.matrixWorld),ve.push($n.clone(),Kn.clone(),Oi.clone())}let ke=null;ve.length===3&&(ke=new C().subVectors(ve[1],ve[0]).cross(bn.subVectors(ve[2],ve[0])).normalize(),ke.lengthSq()<1e-12&&(ke=null));let z=A,Me=U,se=null;function he(ze){if(!Te(ze)||ze.distanceToSquared(re.point)>ge*ge*4)return;Ne(ze,no);let vt=Math.hypot(no.x-z,no.y-Me);vt>Zg||(!se||vt<se.distPx)&&(se={point:ze.clone(),distPx:vt})}for(let ze of ve)he(ze);let Ee=ge*ge*4,j=Ce.count,be=j>8e3?2:1;for(let ze=0;ze<j;ze+=be)bn.fromBufferAttribute(Ce,ze).applyMatrix4(le.matrixWorld),!(bn.distanceToSquared(re.point)>Ee)&&he(bn);if(se)return{point:se.point,kind:"vertex",edgeDir:null,mesh:le,triVerts:ve.length?ve:null,faceNormal:ke};let Ge=null;function Et(ze,vt){xt.copy(vt).sub(ze);let It=xt.lengthSq();if(It<1e-18)return;let mi=bn.copy(re.point).sub(ze).dot(xt)/It;if(mi=Math.min(1,Math.max(0,mi)),io.copy(ze).addScaledVector(xt,mi),!Te(io)||io.distanceToSquared(re.point)>Re*Re*4)return;Ne(io,no);let gi=Math.hypot(no.x-z,no.y-Me);if(gi>Gf)return;Ne(ze,Ni),Ne(vt,to);let zt=to.x-Ni.x,nn=to.y-Ni.y,jn=zt*zt+nn*nn;if(jn>1e-6){let _i=((z-Ni.x)*zt+(Me-Ni.y)*nn)/jn;_i=Math.min(1,Math.max(0,_i));let Gn=Ni.x+zt*_i,ss=Ni.y+nn*_i;if(Math.hypot(z-Gn,Me-ss)>Gf)return}(!Ge||gi<Ge.distPx)&&(Ge={point:io.clone(),distPx:gi,dir:xt.clone().normalize()})}return ve.length===3&&(Et(ve[0],ve[1]),Et(ve[1],ve[2]),Et(ve[2],ve[0])),Ge?{point:Ge.point,kind:"edge",edgeDir:Ge.dir,mesh:le,triVerts:ve.length?ve:null,faceNormal:ke}:{point:re.point.clone(),kind:"face",edgeDir:null,mesh:le,triVerts:ve.length?ve:null,faceNormal:ke}}function He(A,U,B){if(!B.mesh||!B.triVerts||B.triVerts.length!==3||!B.faceNormal||B.faceNormal.lengthSq()<1e-12)return null;let H=Ae(A),pe=H*dE,re=Math.max(H*2,1e-5);if(Math.abs(Qc(A,B.triVerts[0],B.faceNormal))>re)return null;let le=et(B.mesh,B.triVerts[0],B.faceNormal,re);if(!le.length)return null;let Le=[];for(let Re of le)e0(A,Re.a,Re.b)<=pe&&Le.push(Re.dir.clone());if(U&&U.lengthSq()>1e-12&&Le.push(U.clone().normalize()),!Le.length)return null;let fe=H*Kg,ge=null;for(let Re of Le)if(!(Re.lengthSq()<1e-12)){Re.normalize();for(let Ce of le){if(Math.abs(Ce.dir.dot(Re))<uE||e0(A,Ce.a,Ce.b)<=pe)continue;let Se=mE(A,Ce.a,Ce.b);if(!Te(Se)||A.distanceTo(Se)*1e3<$g||(xt.copy(Se).sub(A),xt.lengthSq()<1e-16)||(xt.normalize(),Math.abs(xt.dot(Re))>.08))continue;let ve=B.point.distanceTo(Se);Ne(B.point,Ni),Ne(Se,to);let ke=Math.hypot(Ni.x-to.x,Ni.y-to.y);if(ve>fe*1.35&&ke>Kg)continue;let z=ke+ve/Math.max(H,1e-9);(!ge||z<ge.score)&&(ge={foot:Se.clone(),edgeDir:Re.clone(),score:z})}}return ge?{foot:ge.foot,edgeDir:ge.edgeDir}:null}function et(A,U,B,H){let pe=A.geometry,re=pe?.getAttribute("position");if(!re)return[];A.updateWorldMatrix(!0,!1);let le=pe.getIndex(),Le=new Map,fe=Math.max(H*.25,1e-5);function ge(ve,ke,z){so.subVectors(ke,ve).cross(bn.subVectors(z,ve)),!(so.lengthSq()<1e-16)&&(so.normalize(),!(Math.abs(so.dot(B))<hE)&&(Math.abs(Qc(ve,U,B))>H||Math.abs(Qc(ke,U,B))>H||Math.abs(Qc(z,U,B))>H||(Re(ve,ke),Re(ke,z),Re(z,ve))))}function Re(ve,ke){if(xt.copy(ke).sub(ve),xt.lengthSq()<1e-16)return;let z=gE(ve,ke,fe);Le.has(z)||Le.set(z,{a:ve.clone(),b:ke.clone(),dir:xt.clone().normalize()})}let Ce=le?le.count/3:re.count/3,Se=12e3,Ve=Ce>Se?Math.ceil(Ce/Se):1;for(let ve=0;ve<Ce;ve+=Ve){let ke,z,Me;if(le){let se=ve*3;ke=le.getX(se),z=le.getX(se+1),Me=le.getX(se+2)}else ke=ve*3,z=ve*3+1,Me=ve*3+2;$n.fromBufferAttribute(re,ke).applyMatrix4(A.matrixWorld),Kn.fromBufferAttribute(re,z).applyMatrix4(A.matrixWorld),Oi.fromBufferAttribute(re,Me).applyMatrix4(A.matrixWorld),ge($n,Kn,Oi)}return[...Le.values()]}function L(){if(g){if(c==="placeFirst"){M=g.clone(),v=m?m.clone():null,c="placeSecond",p=null,(qf({pointerType:I})||!Qg())&&(h=!1,g=null,_=null,m=null,ye()),ae(),ue();return}if(c==="placeSecond"&&M){if(M.distanceTo(g)*1e3<$g)return;yt(M,g),W(!1)}}}function yt(A,U){let B=new Ut;B.name="Dimension";let H=i0(16752394,1);r0(H,A,U),H.visible=!0;let pe=A.clone().lerp(U,.5),re=A.distanceTo(U),le=vE(Xf(re));le.position.copy(pe),B.add(H,le),O.add(B),te.push({group:B,sprite:le,mid:pe.clone(),span:re}),Ye(le,A,U,pe,re)}function Ye(A,U,B,H,pe){let re=n();if(re.getWorldDirection(Jg),xt.copy(B).sub(U),xt.lengthSq()<1e-16){A.position.copy(H);return}xt.normalize(),bn.crossVectors(xt,Jg),bn.lengthSq()<1e-10&&bn.copy(re.up),bn.normalize();let le=Math.max(pe*lE,Ae(H)*18);A.position.copy(H).addScaledVector(bn,le);let Le=Ae(A.position)*56;A.scale.set(Le*2.2,Le,1)}function Ze(){F.visible&&M&&ee(F,M),K.visible&&g&&ee(K,g),h&&t0(V,t,f,d,_),k.visible&&M&&g&&p&&_==="perp"&&s0(k,M,g,p,Ae);for(let A of te){let B=A.group.children[0].geometry.getAttribute("position");$n.fromBufferAttribute(B,0),Kn.fromBufferAttribute(B,1),Ye(A.sprite,$n,Kn,A.mid,A.span)}}function J(A){if(!u||c==="idle"||!Yf(A)||y!==null)return;let{x:U,y:B}=_e(A),H=oe(U,B,A.pointerType);Ie(H.x,H.y,!0)}function de(A){if(!u||c==="idle"||A.button!==void 0&&A.button!==0||y!==null)return;y=A.pointerId,I=A.pointerType||"mouse";let{x:U,y:B}=_e(A);R=U,P=B,N=!1,b=!1;try{t.setPointerCapture(A.pointerId)}catch{}if(Yf(A)){let H=oe(U,B,I);Ie(H.x,H.y,!0)}A.preventDefault()}function D(A){if(!u)return;if(y===null){J(A);return}if(y!==A.pointerId)return;let{x:U,y:B}=_e(A);if(Math.hypot(U-R,B-P)>=Yg&&(N=!0,b=!0),qf(A)){if(!b)return;let pe=oe(U,B,"touch");Ie(pe.x,pe.y,!0)}else if(Yf(A)){let pe=oe(U,B,I);Ie(pe.x,pe.y,!0)}A.preventDefault()}function S(A){if(!u||y!==A.pointerId)return;let{x:U,y:B}=_e(A);Math.hypot(U-R,B-P)>=Yg&&(N=!0,b=!0),y=null;try{t.releasePointerCapture(A.pointerId)}catch{}if(qf(A)){N?b=!1:(b=!1,h&&g&&L()),A.preventDefault();return}!N&&g&&L(),b=!1,A.preventDefault()}function x(A){y===A.pointerId&&(y=null,b=!1)}return t.addEventListener("pointerdown",de),t.addEventListener("pointermove",D),t.addEventListener("pointerup",S),t.addEventListener("pointercancel",x),{isActive:X,setActive:W,update:Ze,formatMm:Xf}}function Qc(i,e,t){return pE.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(i)}function e0(i,e,t){xt.copy(t).sub(e);let n=xt.lengthSq();if(n<1e-18)return i.distanceTo(e);let s=bn.copy(i).sub(e).dot(xt)/n;return s=Math.min(1,Math.max(0,s)),io.copy(e).addScaledVector(xt,s).distanceTo(i)}function mE(i,e,t){xt.copy(t).sub(e);let n=xt.lengthSq();if(n<1e-18)return e.clone();let s=bn.copy(i).sub(e).dot(xt)/n;return s=Math.min(1,Math.max(0,s)),e.clone().addScaledVector(xt,s)}function gE(i,e,t){let n=Math.round(i.x/t),s=Math.round(i.y/t),r=Math.round(i.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return n<o||n===o&&s<a||n===o&&s===a&&r<=l?`${n},${s},${r}|${o},${a},${l}`:`${o},${a},${l}|${n},${s},${r}`}function _E(i){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(i.parentElement||document.body).appendChild(e),e)}function t0(i,e,t,n,s){let r=e.getBoundingClientRect();i.style.left=`${r.left+t}px`,i.style.top=`${r.top+n}px`,i.dataset.snap=s||"none"}function n0(i){let e=new Wo(1,16,12),t=new Bt({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),n=new Je(e,t);return n.renderOrder=20,n.visible=!1,n}function xE(i,e){let t=i.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function i0(i,e){let t=new Rt,n=new Float32Array(6);t.setAttribute("position",new mt(n,3));let s=new qi({color:i,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),r=new Ei(t,s);return r.renderOrder=19,r.frustumCulled=!1,r.visible=!1,r}function yE(i){let e=new Rt,t=new Float32Array(9);e.setAttribute("position",new mt(t,3));let n=new qi({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),s=new Ei(e,n);return s.renderOrder=22,s.frustumCulled=!1,s.visible=!1,s}function s0(i,e,t,n,s){let r=s(t)*fE;if(xt.copy(e).sub(t),xt.lengthSq()<1e-16){i.visible=!1;return}if(xt.normalize(),bn.copy(n).normalize(),so.crossVectors(bn,xt),so.lengthSq()<1e-12){i.visible=!1;return}$n.copy(t).addScaledVector(bn,r),Kn.copy(t),Oi.copy(t).addScaledVector(xt,r);let o=i.geometry.getAttribute("position");o.setXYZ(0,$n.x,$n.y,$n.z),o.setXYZ(1,Kn.x,Kn.y,Kn.z),o.setXYZ(2,Oi.x,Oi.y,Oi.z),o.needsUpdate=!0,i.geometry.computeBoundingSphere()}function r0(i,e,t){let n=i.geometry.getAttribute("position");n.setXYZ(0,e.x,e.y,e.z),n.setXYZ(1,t.x,t.y,t.z),n.needsUpdate=!0,i.geometry.computeBoundingSphere()}function vE(i){let e=document.createElement("canvas");e.width=Jc*2,e.height=Jc;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(Jc*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(i),c=Math.ceil(l.width),u=Math.round(Jc*.42),h=c+o*2,f=u+a*2,d=(e.width-h)/2,g=(e.height-f)/2,_=18;t.fillStyle="rgba(28, 28, 30, 0.78)",o0(t,d,g,h,f,_),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,o0(t,d,g,h,f,_),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(i,e.width/2,e.height/2+1)}let n=new Yi(e);n.colorSpace=ft,n.needsUpdate=!0;let s=new Br({map:n,depthTest:!1,depthWrite:!1,transparent:!0}),r=new Uo(s);return r.renderOrder=21,r.center.set(.5,.5),r}function o0(i,e,t,n,s,r){let o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(e+o,t),i.arcTo(e+n,t,e+n,t+s,o),i.arcTo(e+n,t+s,e,t+s,o),i.arcTo(e,t+s,e,t,o),i.arcTo(e,t,e+n,t,o),i.closePath()}var ro=class extends di{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var eu=class extends Es{constructor(e=new ro,t=new Pi({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var ME='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',bE=420,SE=36,EE=new C,l0=new C,c0=new C,Zf=new C,lr=new C,As=new C;function Aa(i){return new C(i[0]*.001,i[2]*.001,-i[1]*.001)}function wE(i){let e=Math.abs(i)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function $f(i,e){return i==null?"":typeof i=="string"?i:String(i[e==="cs"?"cs":"en"]||i.en||i.cs||"")}function TE(i){if(!Number.isFinite(i)||i<=0)return"";let e=i*1e3/bE,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function AE(i,e){if(e==="plate")return SE;let t=Math.min(Math.max(1,i.clientWidth),Math.max(1,i.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function Ta(i,e,t,n="center"){let s=i.map(v=>String(v)).filter(v=>v.length),r=document.createElement("canvas"),o=r.getContext("2d"),a=`600 ${t}px ${ME}`,l=Math.ceil(t*.35),c=Math.ceil(t*.2),u=Math.ceil(t*1.25);o&&(o.font=a);let h=t;if(o)for(let v of s)h=Math.max(h,o.measureText(v).width);let f=Math.ceil(h+l*2),d=Math.ceil(Math.max(s.length,1)*u+c*2),g=2;r.width=f*g,r.height=d*g;let _=r.getContext("2d");if(_){_.scale(g,g),_.clearRect(0,0,f,d);let v=e==="plate";_.font=a,_.textAlign="left",_.textBaseline="middle",_.lineJoin="round",_.miterLimit=2,_.lineWidth=Math.max(2,t*.28),_.strokeStyle=v?"#ffffff":"rgba(0,0,0,0.92)",_.fillStyle=v?"#141414":"#f7f7f8",s.forEach((y,I)=>{let R=l,P=c+u*I+u*.5;_.strokeText(y,R,P),_.fillText(y,R,P)})}let m=new Yi(r);m.colorSpace=ft,m.flipY=!0,m.needsUpdate=!0;let p=new Bt({map:m,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:bt}),M=new Je(new li(1,1),p);return M.renderOrder=30,M.frustumCulled=!1,M.userData.cssWidth=f,M.userData.cssHeight=d,M.userData.anchor=n,M}function cr(i){let e=new ro;e.setPositions([0,0,0,0,0,0]);let t=new Pi({color:i,linewidth:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1}),n=new eu(e,t);return n.renderOrder=25,n.frustumCulled=!1,n.computeLineDistances(),n}function ur(i,e,t){i.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),i.computeLineDistances()}function u0(i){let{scene:e,getCamera:t,getCanvas:n,getLocale:s,getVisibleWidthM:r,getTarget:o}=i,a=new Ut;a.name="Annotations",a.userData.blueprintAnnotations=!0,e.add(a);let l=null,c="viewer",u=!0,h=0,f=[],d=null,g=null,_=null;function m(){return c==="plate"?1315860:15921908}function p(k){k.traverse(V=>{V.geometry&&V.geometry.dispose();let te=V.material;te&&(te.map&&te.map.dispose(),te.dispose())})}function M(){for(let k of[...a.children])a.remove(k),p(k);f=[],d=null,g=null,_=null}function v(){return AE(n(),c)}function y(){a.visible=!!l&&u}function I(){if(M(),h=v(),!l){y();return}let k=s(),V=m(),te=h,X=Array.isArray(l.annotations)?l.annotations:[];for(let ye of X)if(!(!ye||typeof ye!="object")){if(ye.kind==="callout"&&Array.isArray(ye.anchor)){let Ie=$f(ye.text,k);if(!Ie)continue;let ee=Ta(Ie.split(`
`),c,te),ae=cr(V);a.add(ae,ee),f.push({kind:"callout",sprite:ee,lines:[ae],data:ye})}else if(ye.kind==="dim"&&Array.isArray(ye.a)&&Array.isArray(ye.b)){let Ie=Ta(["0"],c,te),ee=cr(V),ae=cr(V),_e=cr(V),oe=cr(V),Te=cr(V);a.add(ee,ae,_e,oe,Te,Ie),f.push({kind:"dim",sprite:Ie,lines:[ee,ae,_e,oe,Te],data:ye})}}let W=$f(l.title,k),ce=l.project?String(l.project):"",ue=[...W.split(`
`),ce].filter(Boolean);ue.length&&(d=Ta(ue,c,te,"topleft"),a.add(d)),g=Ta(["1:1"],c,te,"bottomleft"),_=cr(V),a.add(_,g),y()}function R(k,V=EE){return V.copy(k).project(t())}function P(k,V,te,X=new C){return X.set(k,V,te).unproject(t())}function N(k){let V=t(),te=n(),X=Math.max(1,te.clientHeight);if(V.isOrthographicCamera){let ue=Math.max(V.zoom,1e-6);return(V.top-V.bottom)/ue/X}let W=Math.max(V.position.distanceTo(k),1e-4),ce=(V.fov||45)*Math.PI/180;return 2*Math.tan(ce/2)*W/X}let b=new C,E=new C;function O(k,V){let te=t(),X=N(V),W=X*k.userData.cssWidth,ce=X*k.userData.cssHeight;b.set(1,0,0).applyQuaternion(te.quaternion),E.set(0,1,0).applyQuaternion(te.quaternion);let ue=k.userData.anchor||"center";k.position.copy(V),ue==="topleft"?(k.position.addScaledVector(b,W*.5),k.position.addScaledVector(E,-ce*.5)):ue==="bottomleft"&&(k.position.addScaledVector(b,W*.5),k.position.addScaledVector(E,ce*.5)),k.quaternion.copy(te.quaternion),k.scale.set(W,ce,1)}function K(){let k=n(),V=Math.max(1,k.width),te=Math.max(1,k.height);a.traverse(X=>{let W=X.material;W&&W.resolution&&W.resolution.set(V,te)})}function F(k,V){let te=Ta(V,c,h||v(),k.userData.anchor);k.material.map?.dispose(),k.material.dispose(),k.material=te.material,k.userData.cssWidth=te.userData.cssWidth,k.userData.cssHeight=te.userData.cssHeight,te.geometry.dispose()}function Y(){if(!l||!u||(v()!==h&&I(),!a.visible))return;K();let V=s();t().updateMatrixWorld();for(let ue of f)if(ue.kind==="callout"){let ye=Aa(ue.data.anchor),Ie=R(ye,l0),ee=Array.isArray(ue.data.offset)?ue.data.offset:[.08,.06],ae=Ie.x+Number(ee[0]||0)*2,_e=Ie.y+Number(ee[1]||0)*2,oe=P(ae,_e,Ie.z,c0);O(ue.sprite,oe);let Te=N(oe),Ae=Te*ue.sprite.userData.cssWidth*.5;lr.copy(oe).sub(ye);let Ne=lr.length();Ne>Ae+Te?(lr.setLength(Ne-Ae),lr.add(ye)):lr.copy(oe),ur(ue.lines[0],ye,lr)}else if(ue.kind==="dim"){let ye=Aa(ue.data.a),Ie=Aa(ue.data.b),ee=R(ye,l0),ae=R(Ie,c0),_e=ae.x-ee.x,oe=ae.y-ee.y,Te=Math.hypot(_e,oe)||1e-6;_e/=Te,oe/=Te;let Ae=Number(ue.data.offset)||.04,Ne=-oe*Ae*2,nt=_e*Ae*2,He=(ee.z+ae.z)*.5,et=P(ee.x+Ne,ee.y+nt,He,new C),L=P(ae.x+Ne,ae.y+nt,He,new C),yt=N(et),Ye=yt*6,Ze=yt*8;As.copy(et).sub(ye);let J=As.length()||1;As.multiplyScalar((J+Ze)/J);let de=ye.clone().add(As);As.copy(L).sub(Ie);let D=As.length()||1;As.multiplyScalar((D+Ze)/D);let S=Ie.clone().add(As),x=ye.clone().lerp(et,Math.min(.85,Ye/J)),A=Ie.clone().lerp(L,Math.min(.85,Ye/D));ur(ue.lines[0],x,de),ur(ue.lines[1],A,S),ur(ue.lines[2],et,L);let U=yt*10,H=P(ee.x+Ne-oe*.012,ee.y+nt+_e*.012,He,new C).sub(et);H.lengthSq()<1e-16?H.set(0,U,0):H.setLength(U),ur(ue.lines[3],et.clone().sub(H),et.clone().add(H)),ur(ue.lines[4],L.clone().sub(H),L.clone().add(H)),Zf.copy(et).lerp(L,.5);let pe=P(ee.x+Ne-oe*.03,ee.y+nt+_e*.03,He,new C).sub(P(ee.x+Ne,ee.y+nt,He,new C));pe.lengthSq()>1e-12&&Zf.add(pe);let le=$f(ue.data.text,V)||wE(ye.distanceTo(Ie));ue.sprite.userData.labelText!==le&&(F(ue.sprite,[le]),ue.sprite.userData.labelText=le),O(ue.sprite,Zf)}let X=R(o(),lr).z;if(d){let ue=P(-.94,.9,X,new C);O(d,ue)}let W=r(),ce=TE(W??NaN);if(g&&_){let ue=W!=null&&W>8?2:1,ye=P(-.9,-.86,X,new C),Ie=P(-.9+.08,-.86,X,new C).sub(ye),ee=N(ye),ae=W&&W>0?ue/W*Math.max(1,n().clientWidth):80;Ie.lengthSq()>1e-12?Ie.setLength(Math.max(ae*ee,ee*40)):Ie.set(ee*80,0,0),ur(_,ye,ye.clone().add(Ie));let _e=g.userData.labelText,oe=ce?`${ce}  \xB7  ${Math.round(ue*1e3)} mm`:"";_e!==oe&&(F(g,oe?[oe]:["\u2014"]),g.userData.labelText=oe);let Te=P(-.9,-.8,X,new C).sub(ye);O(g,ye.clone().add(Te))}}return{group:a,setSpec(k){l=k&&typeof k=="object"?k:null,I(),Y()},setInk(k){c=k==="plate"?"plate":"viewer",I(),Y()},setVisible(k){u=!!k,y(),a.visible&&Y()},isVisible(){return u},relocalize(){I(),Y()},update:Y,clear(){l=null,M(),a.visible=!1}}}function h0(i){return i/25.4*72}function Kf(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function RE(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d");return t?(t.drawImage(i,0,0),new Promise((n,s)=>{e.toBlob(r=>{r?n(r):s(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function CE(i){let e=await createImageBitmap(i),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d",{willReadFrequently:!0});if(!n)throw new Error("2D canvas unavailable");return n.drawImage(e,0,0),e.close?.(),n.getImageData(0,0,t.width,t.height)}async function PE(i){if(typeof CompressionStream>"u")return{bytes:i,filter:""};let e=new Blob([i]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Ra(i){return typeof i=="string"?new TextEncoder().encode(i):i}async function IE(i){let e=i.width,t=i.height,n=i.data,s=new Uint8Array(e*t*3);for(let y=0,I=0;y<n.length;y+=4,I+=3){let R=n[y+3]/255;s[I]=Math.round(n[y]*R+255*(1-R)),s[I+1]=Math.round(n[y+1]*R+255*(1-R)),s[I+2]=Math.round(n[y+2]*R+255*(1-R))}let{bytes:r,filter:o}=await PE(s),a=h0(420),l=h0(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),h=[],f=0;function d(y){h.push(y),f+=y.length}let g=[0];function _(y,I){g[y]=f,d(Ra(`${y} 0 obj
`));for(let R of I)d(Ra(R));d(Ra(`
endobj
`))}d(Ra(`%PDF-1.4
`)),_(1,["<< /Type /Catalog /Pages 2 0 R >>"]),_(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),_(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${l.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),_(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),_(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${r.length} >>
stream
`,r,`
endstream`]);let m=f,p=`xref
0 6
0000000000 65535 f 
`;for(let y=1;y<=5;y++)p+=`${String(g[y]).padStart(10,"0")} 00000 n 
`;p+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${m}
%%EOF
`,d(Ra(p));let M=new Uint8Array(f),v=0;for(let y of h)M.set(y,v),v+=y.length;return new Blob([M],{type:"application/pdf"})}async function f0(i){let e=await RE(i),t=await CE(e),n=await IE(t);return{png:e,pdf:n}}var jf="scene";function NE(){try{return(new URLSearchParams(location.search).get(jf)||"").trim()}catch{return""}}function p0(i){try{let e=new URL(location.href),t=i!=null?String(i).trim():"";t?e.searchParams.set(jf,t):e.searchParams.delete(jf);let n=`${e.pathname}${e.search}${e.hash}`,s=`${location.pathname}${location.search}${location.hash}`;n!==s&&history.replaceState(null,"",n)}catch{}}function OE(i,e,t={}){let n=Array.isArray(t.scenes)?t.scenes:[],s=Array.isArray(t.partGroups)?t.partGroups:[],r=String(t.scene!=null?t.scene:NE()).trim();qg(),Vf(document);let o=[],a=null,l=1842206,c=!0,u=Eg(),h=ag(),f=new Map,d=new Map,g=new Map,_=new Map,m=new Set,p=new Map,M=new Map,v=new Map,y=new Set,I=null;I=Hg(w=>{c=w,l=w?1842206:15263981,a&&(a.background=new Fe(l)),document.documentElement.style.colorScheme=w?"dark":"light",f.size&&ss()});let R=new Cc({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});R.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),R.outputColorSpace=ft,R.toneMapping=ra,R.toneMappingExposure=1.05,R.localClippingEnabled=!0;let P=gg(R);a=new Dn,a.background=new Fe(l);let N=30,b=120,E=75,O=125,K="perspective",F=E,Y=E,k=1,V=!1,te=new Gt(45,1,.01,1e6),X=new ci(-1,1,1,-1,.01,1e6),W=te,ce=new Uc(W,i);ce.enableDamping=!1,ce.screenSpacePanning=!0;let ue=u0({scene:a,getCamera:()=>W,getCanvas:()=>i,getLocale:jc,getVisibleWidthM:()=>{if(!W.isOrthographicCamera)return null;let w=Math.max(W.zoom,1e-6);return(W.right-W.left)/w},getTarget:()=>ce.target}),ye=null,Ie=null;a.add(new jo(16777215,.45));let ee=new _s(16777215,1.15);ee.position.set(.6,1,.4),a.add(ee);let ae=new _s(16777215,.4);ae.position.set(-.5,.2,-.6),a.add(ae);let _e=new Kr(R);a.environment=_e.fromScene(new Nc,.04).texture,_e.dispose();let oe=null,Te=new Lt,Ae=new C,Ne=new C,nt=new C,He=new C,et=new C,L=[],yt=1,Ye=!1,Ze=!1,J=!1;new Ic().parse(e,"",w=>{oe=w.scene,a.add(oe),oe.traverse(Z=>{if(!Z.isMesh)return;let Q=Z.name||Z.parent?.name||"part",me=Q.replace(/_\d+$/,"")||Q;if(f.has(me)||f.set(me,[]),f.get(me).push(Z),Z.material){let qe=Array.isArray(Z.material)?Z.material:[Z.material];for(let Oe of qe)"side"in Oe&&(Oe.side=bt)}}),be(),Rs(),oo(),Ia(),ou();let G=T(r);G&&(rs=`scene:${String(G.id).trim()}`),xe(),he(),Ke(),Cn(),ss(),G&&ze(G),q(),I?.refreshPartialHeight(),y0(),v0(),dr(),pr()},w=>{D(String(w?.message||w))});function D(w){let G=document.getElementById("err");G&&(G.style.display="block",G.textContent=w)}function S(){oe&&(Te.setFromObject(oe),Te.getSize(Ae),Te.getCenter(Ne))}function x(){let w=Math.max(1,i.clientWidth),G=Math.max(1,i.clientHeight);return w/G}function A(w,G){let Z=w*Math.PI/180;return 2*Math.atan(Math.tan(Z/2)/Math.max(G,1e-6))}function U(){let w=x();te.aspect=w,te.fov=A(F,w)*180/Math.PI,te.updateProjectionMatrix()}function B(w,G){let Z=x(),Q=Math.max(w,1e-6)*Math.tan(G/2),me=Q*Z;X.left=-me,X.right=me,X.top=Q,X.bottom=-Q,X.updateProjectionMatrix()}function H(){let w=x(),Z=Math.max(X.top,1e-6)*w;X.left=-Z,X.right=Z,X.updateProjectionMatrix()}function pe(w,G){let Z=x(),Q=Math.max(w,1e-6),qe=Math.max(G,1e-6),Oe=qe*Z;Oe<Q&&(Oe=Q,qe=Oe/Math.max(Z,1e-6)),k=1,X.left=-Oe,X.right=Oe,X.top=qe,X.bottom=-qe,X.updateProjectionMatrix(),fe()}function re(w){let G=Math.max(w,1e-4),Z=nt.copy(W.position).sub(ce.target);Z.lengthSq()<1e-12?Z.set(0,0,1):Z.normalize(),W.position.copy(ce.target).addScaledVector(Z,G)}function le(w){w!==W&&(w.position.copy(W.position),w.quaternion.copy(W.quaternion),w.up.copy(W.up),w.near=W.near,w.far=W.far,W=w,ce.object=W,ce.update())}function Le(){let w=Math.abs(Ct)>.05||Math.abs(Nn)>.05||Math.abs(wt-1)>.001?wt:1;return k*w}function fe(){W.zoom=Le(),W.updateProjectionMatrix()}function ge(){if(V||Ze||!W.isOrthographicCamera)return;let w=Math.abs(Ct)>.05||Math.abs(Nn)>.05||Math.abs(wt-1)>.001?wt:1;k=Math.max(W.zoom/Math.max(w,1e-6),1e-6)}function Re(){if(K==="ortho")return;Y=F;let w=W.position.distanceTo(ce.target),G=A(F,x());B(w,G),k=1,j(()=>{V=!0,le(X),K="ortho",fe(),V=!1}),Me()}function Ce(w){if(K!=="ortho")return;let G=ve(w??Y),Z=Math.max(X.top,1e-6)/Math.max(k,1e-6),Q=A(G,x()),me=Z/Math.max(Math.tan(Q/2),1e-8);F=G,Y=G,k=1,j(()=>{V=!0,le(te),K="perspective",U(),re(me),fe(),Ee(),ce.update(),V=!1}),Me()}function Se(w,G={}){let Z=ve(w);if(K==="ortho"){Ce(Z);return}let Q=x(),me=A(F,Q),qe=A(Z,Q),Oe=W.position.distanceTo(ce.target);F=Z,Y=Z,j(()=>{if(U(),G.reframe!==!1){let Qe=Math.tan(me/2)/Math.max(Math.tan(qe/2),1e-8);re(Oe*Qe),Ee(),ce.update()}fe()}),Me()}function Ve(){K==="ortho"?Ce(Y):Re()}function ve(w){return Math.min(b,Math.max(N,w))}function ke(){return K==="ortho"?O:F}function z(w){return w>b?"ISO":`${Math.round(w)}\xB0`}function Me(){ye&&(ye.value=ke()),Ie&&(Ie.textContent=K==="ortho"?"ISO":`${Math.round(F)}\xB0`),ye?.refresh()}function se(w){if(w>b){K!=="ortho"?Re():Me();return}let G=ve(w);K==="ortho"?Ce(G):Se(G,{reframe:!0})}function he(){let w=document.getElementById("fov");if(!w)return;w.replaceChildren();let G=document.createElement("div");G.className="fov-row";let Z=document.createElement("span");Z.className="fov-label",Z.textContent=Ot("ui.fov"),Ie=document.createElement("span"),Ie.className="fov-value",Ie.textContent=`${Math.round(F)}\xB0`,ye=Kc({min:N,max:O,step:1,value:ke(),ariaLabel:"Field of view",formatAriaValue:z,onInput:Oe=>se(Oe),onChange:Oe=>se(Oe),onTap:()=>Ve()}),ye.el.classList.add("fov-range");let Q=document.createElement("div");Q.className="fov-detent",Q.setAttribute("aria-hidden","true");let me=(b-N)/(O-N);Q.style.left=`${me*100}%`,ye.el.querySelector(".coop-range-track")?.append(Q),G.append(Z,ye.el,Ie),w.append(G),Me()}function Ee(){let w=Math.max(Ae.x,Ae.y,Ae.z,.01),G=W.position.distanceTo(ce.target),Z=Math.round(Math.min(Math.max(G/200,w/5e3,.001),G/10)*1e4)/1e4,Q=Math.round(Math.max(G+w*4,w*8,10)*1e4)/1e4;W.near===Z&&W.far===Q||(W.near=Z,W.far=Q,W.updateProjectionMatrix())}function j(w){Ze=!0;try{w()}finally{requestAnimationFrame(()=>{Ze=!1})}}U();function be(){oe&&(j(()=>{S(),ce.target.copy(Ne);let G=Math.max(Ae.x,Ae.y,Ae.z,1)*1.85;W.position.set(Ne.x+G*.75,Ne.y+G*.55,Ne.z+G*.75),Ee(),ce.update()}),ut())}function Ge(){for(let w of f.keys())d.set(w,1),g.set(w,1),Ts(f.get(w)||[],1,{edgeMode:h});S(),nn()}function Et(w){if(oe){if(os=null,ue.clear(),Ge(),dr(),pr(),te.up.set(0,1,0),X.up.set(0,1,0),W.up.set(0,1,0),w==="iso"){be();return}j(()=>{S();let G=Math.max(Ae.x,Ae.y,Ae.z,1),Z=G*1.85,Q=Ne;w==="front"?W.position.set(Q.x,Q.y,Q.z+Z):w==="top"?W.position.set(Q.x,Q.y+Z,Q.z+G*.01):w==="side"&&W.position.set(Q.x-Z,Q.y,Q.z),ce.target.copy(Q),Ee(),ce.update()}),ut()}}function ze(w){if(!oe||!w)return;if(os=w,w.opacityDefault!=null||w.opacity&&typeof w.opacity=="object"){let Q=w.opacityDefault!=null?Number(w.opacityDefault):1,me=w.opacity&&typeof w.opacity=="object"?w.opacity:{},qe=vg(me,o);for(let Oe of f.keys()){let Qe=Object.prototype.hasOwnProperty.call(qe,Oe)?qe[Oe]:Q;vt(Oe,Qe,{skipUi:!0,skipClip:!0})}S(),nn()}if(Object.prototype.hasOwnProperty.call(w,"cuts")){let Q=Array.isArray(w.cuts)?w.cuts:[];L.length=0;for(let me of Q){let qe=me?.normal;if(!Array.isArray(qe)||qe.length<3)continue;let Oe=new C(Number(qe[0])||0,Number(qe[1])||0,Number(qe[2])||0);if(Oe.lengthSq()<1e-12)continue;Oe.normalize();let Qe=null,Ht=Math.min(1,Math.max(0,Number(me.t)||0));if(Array.isArray(me.anchor)&&me.anchor.length>=3){Qe=Aa(me.anchor);let{near:On,far:Fn}=Xe(Oe),Ps=Qe.dot(Oe);Ht=Math.min(1,Math.max(0,(Ps-On)/Math.max(Fn-On,1e-6)))}L.push({id:yt++,normal:Oe,t:Ht,anchor:Qe,locked:!0,label:Ue(Oe)})}Ye=!1,sn(),Ke(),Cn(),I?.refreshPartialHeight()}w.projection==="ortho"?K!=="ortho"?Re():Me():w.hFovDeg!=null&&Number.isFinite(Number(w.hFovDeg))&&Se(Number(w.hFovDeg),{reframe:!1});let Z=w.camera;Z&&Array.isArray(Z.target)&&Array.isArray(Z.position)&&j(()=>{V=!0;let Q=new C(0,1,0);Array.isArray(Z.up)&&Z.up.length>=3&&(Q.set(Number(Z.up[0])||0,Number(Z.up[1])||0,Number(Z.up[2])||0),Q.lengthSq()<1e-12?Q.set(0,1,0):Q.normalize()),te.up.copy(Q),X.up.copy(Q),W.up.copy(Q),ce.target.set(Number(Z.target[0])||0,Number(Z.target[1])||0,Number(Z.target[2])||0),W.position.set(Number(Z.position[0])||0,Number(Z.position[1])||0,Number(Z.position[2])||0),W.lookAt(ce.target),K==="ortho"&&Array.isArray(Z.orthoFit)&&Z.orthoFit.length>=2&&pe(Number(Z.orthoFit[0])||.1,Number(Z.orthoFit[1])||.1),S(),Ee(),ce.update(),V=!1}),ut(),ue.setSpec(w),dr(),pr()}function vt(w,G,Z={}){let Q=Math.max(0,Math.min(1,Number(G)||0));d.set(w,Q),Q>0&&g.set(w,Q),Z.detach&&m.add(w),Ts(f.get(w)||[],Q,{edgeMode:h}),!Z.skipClip&&(S(),Z.skipUi||nn())}function It(w,G,Z){let Q=Math.max(0,Math.min(1,Number(G)||0));Z&&_.set(Z,Q);for(let me of w)m.has(me)||(d.set(me,Q),Q>0&&g.set(me,Q),Ts(f.get(me)||[],Q,{edgeMode:h}));S(),nn()}function mi(w,G,Z){m.delete(w);let Q=Z.filter(qe=>!m.has(qe)),me=zt(G,Q);d.set(w,me),me>0&&g.set(w,me),Ts(f.get(w)||[],me,{edgeMode:h}),S(),nn()}function gi(w){if(!w.length)return 1;let G=d.get(w[0])??1;for(let Z=1;Z<w.length;Z++){let Q=d.get(w[Z])??1;if(Math.abs(Q-G)>1e-4)return NaN}return G}function zt(w,G){let Z=G.filter(me=>!m.has(me)),Q=gi(Z.length?Z:G);return Number.isNaN(Q)?_.get(w)??1:Q}function nn(){for(let[w,G]of p)G.value=(d.get(w)??1)*100;for(let[w,G]of M){let Z=(G.el.dataset.leaves||"").split(",").map(Q=>Q.trim()).filter(Boolean);G.value=zt(w,Z)*100}for(let[w,G]of v){let Z=m.has(w);G.hidden=!Z,G.setAttribute("aria-hidden",Z?"false":"true")}}function jn(){return L.filter(w=>w.locked).map(w=>kt(w))}function _i(){let w=new Be;return R.getDrawingBufferSize(w),{x:w.x,y:w.y}}function Gn(){if(f.size){if(h===rr){cg(oe);return}hg(f,!0,{clippingPlanes:jn(),resolution:_i(),edgeMode:h})}}function ss(){f.size&&(bg(f,u,{isDark:c,clippingPlanes:jn(),opacityByLabel:d,edgeMode:h}),u===Ea?(R.toneMapping=ra,R.toneMappingExposure=1.05):(R.toneMapping=ui,R.toneMappingExposure=1),Gn(),Bf(f,jn()))}function Rs(){let w=document.getElementById("mats");if(w){w.replaceChildren();for(let[G,Z]of[[qc,"ui.solid"],[Ea,"ui.realistic"]]){let Q=document.createElement("button");Q.type="button",Q.dataset.mode=G,Q.textContent=Ot(Z),G===u&&Q.classList.add("is-active"),Q.addEventListener("click",()=>{u=G,wg(G),w.querySelectorAll("button").forEach(me=>{me.classList.toggle("is-active",me.dataset.mode===G)}),ss()}),w.append(Q)}}}function oo(){let w=document.getElementById("edges");if(w){w.replaceChildren();for(let[G,Z]of[[rr,"ui.edgesNone"],[or,"ui.edgesTransparent"],[ba,"ui.edgesOpaque"]]){let Q=document.createElement("button");Q.type="button",Q.dataset.edgeMode=G,Q.textContent=Ot(Z),G===h&&Q.classList.add("is-active"),Q.addEventListener("click",()=>{h=G,Rf(G),w.querySelectorAll("button").forEach(me=>{me.classList.toggle("is-active",me.dataset.edgeMode===G)}),Gn(),od()}),w.append(Q)}}}function ao(w,G,Z,Q){let me=document.createElement("div");me.className="part-opacity-wrap";let qe,Oe=()=>{if(qe.value/100>0)Q(0);else{let Ht=Z();Q(Ht>0?Ht:1)}};return qe=Kc({min:0,max:100,step:1,value:Math.round(G),ariaLabel:w,formatAriaValue:Qe=>`${Math.round(Qe)}%`,thumbScrubOnly:!0,onInput:Qe=>Q(Qe/100),onChange:Qe=>Q(Qe/100),onTap:Oe}),qe.el.classList.add("part-opacity"),me.append(qe.el),{wrap:me,range:qe}}function Ca(){let w=document.getElementById("parts");if(!w)return;w.style.removeProperty("--part-name-col");let G=0;for(let Z of w.querySelectorAll(".part-name")){if(Z.closest(".part-children")?.hidden)continue;let me=Z.style.width;Z.style.width="max-content",G=Math.max(G,Math.ceil(Z.getBoundingClientRect().width)),Z.style.width=me}G>0&&w.style.setProperty("--part-name-col",`${G}px`)}function Pa(w,G,Z,Q=null){if(w.type==="leaf"){let pt=document.createElement("div");pt.className="part-row part-leaf",pt.style.setProperty("--part-depth",String(Z)),pt.dataset.leaf=w.id;let Fa=document.createElement("span");Fa.className="part-disclosure-spacer",Fa.setAttribute("aria-hidden","true");let Ba=document.createElement("span");Ba.className="part-name",Ba.textContent=w.label;let{wrap:fd,range:dd}=ao(`${w.label} opacity`,(d.get(w.id)??1)*100,()=>g.get(w.id)??1,za=>vt(w.id,za,{detach:!!Q}));dd.el.dataset.leaf=w.id,p.set(w.id,dd);let Qn=null;if(Q){Qn=document.createElement("button"),Qn.type="button",Qn.className="part-sync",Qn.textContent=Ot("ui.sync"),Qn.setAttribute("aria-label",`${Ot("ui.sync")} ${w.label}`);let za=m.has(w.id);Qn.hidden=!za,Qn.setAttribute("aria-hidden",za?"false":"true"),Qn.addEventListener("click",T0=>{T0.stopPropagation(),mi(w.id,Q.groupId,Q.leafIds)}),v.set(w.id,Qn)}Qn?pt.append(Fa,Ba,fd,Qn):pt.append(Fa,Ba,fd),G.append(pt);return}let me=Yc(w),qe=document.createElement("div");qe.className="part-group",qe.dataset.group=w.id;let Oe=document.createElement("div");Oe.className="part-row part-group-row",Oe.style.setProperty("--part-depth",String(Z)),Oe.setAttribute("role","button"),Oe.tabIndex=0;let Qe=document.createElement("button");Qe.type="button",Qe.className="part-disclosure",Qe.setAttribute("aria-label",`Expand ${w.label}`),Qe.setAttribute("aria-expanded","false");let Ht=document.createElement("span");Ht.className="part-name",Ht.textContent=w.label;let On=zt(w.id,me)||1;On<=0&&(On=1);let{wrap:Fn,range:Ps}=ao(`${w.label} opacity`,zt(w.id,me)*100,()=>On,pt=>{pt>0&&(On=pt),It(me,pt,w.id)});Ps.el.dataset.group=w.id,Ps.el.dataset.leaves=me.join(","),M.set(w.id,Ps),Fn.addEventListener("click",pt=>pt.stopPropagation()),Fn.addEventListener("pointerdown",pt=>pt.stopPropagation());let fo=document.createElement("div");fo.className="part-children",fo.hidden=!0;function hd(pt){pt?y.add(w.id):y.delete(w.id),fo.hidden=!pt,qe.classList.toggle("is-expanded",pt),Qe.setAttribute("aria-expanded",pt?"true":"false"),Qe.setAttribute("aria-label",pt?`Collapse ${w.label}`:`Expand ${w.label}`),requestAnimationFrame(()=>Ca())}function au(){hd(!y.has(w.id))}Qe.addEventListener("click",pt=>{pt.stopPropagation(),au()}),Oe.addEventListener("click",pt=>{Fn.contains(pt.target)||au()}),Oe.addEventListener("keydown",pt=>{(pt.key==="Enter"||pt.key===" ")&&(pt.preventDefault(),au())}),Oe.append(Qe,Ht,Fn),qe.append(Oe,fo),G.append(qe);let w0={groupId:w.id,leafIds:me};for(let pt of w.children)Pa(pt,fo,Z+1,w0);hd(y.has(w.id))}function Ia(){let w=document.getElementById("parts");if(!w)return;w.replaceChildren(),p.clear(),M.clear(),v.clear();for(let Z of f.keys())d.has(Z)||(d.set(Z,1),Ts(f.get(Z)||[],1,{edgeMode:h})),g.has(Z)||g.set(Z,1);let G=yg(f.keys(),s,Ot);o=G;for(let Z of G)Pa(Z,w,0,null);requestAnimationFrame(()=>Ca())}let rs="iso",os=null,lo=!1;function T(w){let G=String(w||"").trim();if(!G)return null;for(let Z of n)if(String(Z?.id||"").trim()===G)return Z;return null}function q(){let w=rs;w&&w.startsWith("scene:")?p0(w.slice(6)):p0(null)}function ne(){return document.querySelectorAll("#cams button, #scenes button")}function ie(){rs!=null&&(rs=null,ne().forEach(w=>{w.classList.remove("is-active")}),q())}function $(){let w=document.getElementById("scenes");if(!w){let G=document.getElementById("cams");w=document.createElement("div"),w.id="scenes",w.className="scene-list",G?.insertAdjacentElement("afterend",w)}return w}function xe(){let w=document.getElementById("cams");if(!w)return;w.replaceChildren();let G=$();G.replaceChildren();function Z(Q,me,qe,Oe){let Qe=document.createElement("button");Qe.type="button",Qe.dataset.preset=me,Qe.textContent=qe,me===rs&&Qe.classList.add("is-active"),Qe.addEventListener("click",()=>{rs=me,ne().forEach(Ht=>{Ht.classList.toggle("is-active",Ht.dataset.preset===me)}),Oe(),q()}),Q.append(Qe)}for(let[Q,me]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])Z(w,Q,Ot(me),()=>Et(Q));for(let Q of n){let me=String(Q?.id||"").trim();if(!me)continue;let qe=Ot(`scene.${me}`);Z(G,`scene:${me}`,qe,()=>ze(Q))}G.hidden=G.childElementCount===0}function Pe(w=nt){return w.copy(ce.target).sub(W.position).normalize()}function Ue(w){let G=Math.hypot(w.x,w.z),Z=(Math.atan2(w.x,w.z)*180/Math.PI+360)%360,Q=Math.atan2(w.y,G)*180/Math.PI,me=Math.abs(Q).toFixed(0),qe=Q>=0?"\u2191":"\u2193";return`${Z.toFixed(0)}\xB0 / ${me}\xB0${qe}`}function De(){return L.some(w=>!w.locked)}function $e(){return L.filter(w=>w.locked)}function Ke(){De()||!($e().length===0||Ye)||L.push({id:yt++,normal:new C(0,0,1),t:0,locked:!1,label:Ot("ui.cut")})}function We(w){let G=document.getElementById("cuts");if(!G)return;let Z=G.querySelector(`[data-cut-id="${w.id}"]`);if(!Z){Cn();return}let Q=Z.querySelector(".cut-label");if(Q&&(Q.textContent=w.locked?w.label:Ot("ui.cut")),w.locked&&!Z.querySelector(".cut-remove")){let me=document.createElement("button");me.type="button",me.className="cut-remove",me.setAttribute("aria-label",Ot("ui.removeSection")),me.textContent="\xD7",me.addEventListener("click",()=>lt(w.id)),Z.append(me)}}function at(w){w.locked||(Pe(w.normal),w.locked=!0,w.label=Ue(w.normal),Ye=!1,sn(),We(w))}function ut(){$e().length!==0&&(De()||(Ye=!0,!J&&(Ke(),Cn())))}function Dt(){Ye&&(De()||$e().length!==0&&(Ke(),Cn()))}function At(w,G){let Z=L.find(Q=>Q.id===w);if(Z){if(Z.locked||at(Z),Z.t=Math.min(1,Math.max(0,Number(G))),Z.anchor=null,J){ht();return}sn()}}function lt(w){let G=L.findIndex(Z=>Z.id===w);G<0||(L.splice(G,1),$e().length===0?(Ye=!1,De()||Ke()):Ye&&!De()&&Ke(),sn(),Cn(),I?.refreshPartialHeight())}function Xe(w){if(S(),Te.isEmpty())return{near:-1,far:1};let G=Te.min,Z=Te.max,Q=1/0,me=-1/0;for(let Qe=0;Qe<2;Qe++)for(let Ht=0;Ht<2;Ht++)for(let On=0;On<2;On++){et.set(Qe?Z.x:G.x,Ht?Z.y:G.y,On?Z.z:G.z);let Fn=et.dot(w);Fn<Q&&(Q=Fn),Fn>me&&(me=Fn)}let Oe=Math.max(me-Q,1e-6)*.02;return{near:Q-Oe,far:me+Oe}}function kt(w){if(w.anchor)return new on().setFromNormalAndCoplanarPoint(w.normal,w.anchor);let{near:G,far:Z}=Xe(w.normal),Q=G+(Z-G)*w.t;return He.copy(w.normal).multiplyScalar(Q),new on().setFromNormalAndCoplanarPoint(w.normal,He)}function ht(){let w=jn();return oe&&(oe.traverse(G=>{if(!G.isMesh||!G.material||Mn(G)||$c(G))return;let Z=Array.isArray(G.material)?G.material:[G.material];for(let Q of Z){if(!Q)continue;let me=Q.clippingPlanes?Q.clippingPlanes.length:0;Q.clippingPlanes=w,Q.clipIntersection=!1,me!==w.length&&(Q.needsUpdate=!0)}}),Cf(oe,w)),w}function sn(){let w=ht();oe&&(Bf(f,w),h!==rr?Gn():Cf(oe,w))}function Cn(){let w=document.getElementById("cuts");if(w){w.replaceChildren();for(let G of L){let Z=document.createElement("div");Z.className="cut-row",Z.dataset.cutId=String(G.id);let Q=document.createElement("span");Q.className="cut-label",Q.textContent=G.locked?G.label:Ot("ui.cut");let me=()=>{J&&(J=!1,sn(),Dt())},qe=Kc({min:0,max:1,step:.001,value:G.t,ariaLabel:G.locked?`Section ${G.label}`:"Section cut",onScrubStart:()=>{J=!0,G.locked||at(G)},onScrubEnd:me,onInput:Oe=>At(G.id,Oe),onChange:Oe=>{At(G.id,Oe),me()}});if(Z.append(Q,qe.el),G.locked){let Oe=document.createElement("button");Oe.type="button",Oe.className="cut-remove",Oe.setAttribute("aria-label",Ot("ui.removeSection")),Oe.textContent="\xD7",Oe.addEventListener("click",()=>lt(G.id)),Z.append(Oe)}w.append(Z)}I?.refreshPartialHeight()}}let qt=!1,Fi=new C,Mt=new C,Sn=!1;i.addEventListener("pointerdown",()=>{qt=!0},{capture:!0});let En=()=>{qt=!1};window.addEventListener("pointerup",En,{capture:!0}),window.addEventListener("pointercancel",En,{capture:!0}),ce.addEventListener("start",()=>{ie(),qt=!0}),ce.addEventListener("change",()=>{ge()}),ce.addEventListener("end",()=>{qt=!1,!Ze&&ut()});let wt=1,Ct=0,Nn=0,Jn=1,tu=0,nu=0,iu=1,su=0,ru=0,Cs=0,m0=280;function g0(){let w=Math.max(1,i.clientWidth),G=Math.max(1,i.clientHeight);if(!I)return{zoom:1,offX:0,offY:0,w,h:G};let{bottom:Z,right:Q}=I.getSafeInsets();if(Z<=0&&Q<=0)return{zoom:1,offX:0,offY:0,w,h:G};let me=Math.max(1,w-Q),qe=Math.max(1,G-Z),Oe=Math.min(me/w,qe/G),Qe=Q/2,Ht=Z/2;return{zoom:Oe,offX:Qe,offY:Ht,w,h:G}}function Jf(w,G){j(()=>{V=!0,Math.abs(Ct)>.05||Math.abs(Nn)>.05||Math.abs(wt-1)>.001?(W.zoom=k*wt,W.setViewOffset(w,G,Ct,Nn,w,G)):(W.clearViewOffset(),W.zoom=k,wt=1,Ct=0,Nn=0),W.updateProjectionMatrix(),V=!1})}function Qf(w=!0){let{zoom:G,offX:Z,offY:Q,w:me,h:qe}=g0();if(Jn=G,tu=Z,nu=Q,!w){wt=G,Ct=Z,Nn=Q,Cs=0,Jf(me,qe);return}iu=wt,su=Ct,ru=Nn,Cs=performance.now()}function _0(w){if(!Cs)return;let G=Math.min(1,(w-Cs)/m0),Z=1-(1-G)**3;wt=iu+(Jn-iu)*Z,Ct=su+(tu-su)*Z,Nn=ru+(nu-ru)*Z;let Q=Math.max(1,i.clientWidth),me=Math.max(1,i.clientHeight);Jf(Q,me),G>=1&&(Cs=0)}function Da(){let w=Math.max(1,i.clientWidth),G=Math.max(1,i.clientHeight);R.setSize(w,G,!1),K==="perspective"?U():H(),Qf(!1);let Z=_i();ug(oe,Z.x,Z.y)}Da(),window.addEventListener("resize",Da),I?.onDetentChange(()=>{Qf(!0)});let Pn=document.getElementById("ar"),rn=document.getElementById("measure"),co=!1,La=()=>Ot("ui.measure");function ou(){let w=document.getElementById("locale");if(w){w.replaceChildren();for(let[G,Z]of[["cs","CS"],["en","EN"]]){let Q=document.createElement("button");Q.type="button",Q.dataset.locale=G,Q.textContent=Z,G===jc()&&Q.classList.add("is-active"),Q.addEventListener("click",()=>{Wg(G)}),w.append(Q)}}}function x0(){Vf(document),Pn&&!co&&(Pn.textContent=Ot("ui.ar")),rn&&(rn.textContent=La()),dr(),pr(),ue.relocalize();try{Rs(),oo(),xe(),he(),Ia(),Cn(),ou()}catch(w){console.error("relocalizeUi",w);try{ou()}catch{}}I?.refreshPartialHeight()}Xg(()=>x0());function y0(){Pn&&(Pn.hidden=!1,co||(Pn.textContent=Ot("ui.ar")))}function v0(){rn&&(rn.hidden=!1,rn.textContent=La())}let hr=document.getElementById("drawing"),as=document.getElementById("labels"),fr=!0;function dr(){hr&&(hr.hidden=!1,hr.disabled=!os||Ua,hr.textContent=Ot("ui.drawing"))}function pr(){if(!as)return;let w=!!os;as.hidden=!w,as.disabled=!w,as.setAttribute("aria-pressed",fr?"true":"false"),as.classList.toggle("is-active",w&&fr),as.textContent=Ot("ui.labels")}function M0(){try{let w=new URLSearchParams(window.location.search).get("m");if(w&&w.trim())return w.trim()}catch{}return"model"}function ed(){Cs=0,wt=1,Ct=0,Nn=0,Jn=1,tu=0,nu=0,W.clearViewOffset(),W.zoom=k,W.updateProjectionMatrix()}let Ua=!1;async function td(){if(Ua||!oe||!os)return null;Ua=!0,dr(),lo=!0;let w=os,G=h,Z=a.background,Q=R.getPixelRatio(),me=i.style.width,qe=i.style.height,Oe=I?.getDetent?.()??null,Qe=xi?.isActive()??!1,Ht=ue.isVisible();try{Qe&&xi?.setActive(!1),ue.setVisible(!0),I?.setDetent("closed"),i.style.width=`${2400}px`,i.style.height=`${1697}px`,R.setPixelRatio(1),Da(),ed(),h=ba,Gn(),a.background=new Fe(16777215),ue.setInk("plate"),ze(w),ed(),ue.update(),P.render(a,W,oe,rd,{quality:"high"});let{png:On,pdf:Fn}=await f0(i),Ps=`${M0()}_${String(w.id||"scene")}`;return{png:On,pdf:Fn,stem:Ps}}finally{i.style.width=me,i.style.height=qe,R.setPixelRatio(Q),h=G,a.background=Z,ue.setInk("viewer"),ue.setVisible(Ht),Oe&&I?.setDetent(Oe),Da(),Gn(),w&&ze(w),Qe&&xi?.setActive(!0),lo=!1,Ua=!1,dr(),pr(),requestAnimationFrame(Oa)}}window.blueprintCaptureDrawing=async()=>{let w=await td();return w?{png:w.png,pdf:w.pdf,stem:w.stem}:null},as&&as.addEventListener("click",()=>{fr=!fr,ue.setVisible(fr),pr()}),hr&&hr.addEventListener("click",()=>{(async()=>{let w=await td();w&&(Kf(w.png,`${w.stem}.png`),Kf(w.pdf,`${w.stem}.pdf`))})()});let xi=null;a&&(xi=a0({scene:a,canvas:i,getCamera:()=>W,controls:ce,getRoot:()=>oe,getClipPlanes:()=>jn(),onLiveLength:w=>{rn&&(w?(rn.textContent=w,rn.classList.add("is-live")):(rn.textContent=La(),rn.classList.remove("is-live")))},onActiveChange:w=>{uo=!0,rn&&(rn.classList.toggle("is-active",w),rn.setAttribute("aria-pressed",w?"true":"false"),w||(rn.textContent=La(),rn.classList.remove("is-live")))}})),rn&&rn.addEventListener("click",()=>{xi&&xi.setActive(!xi.isActive())});function nd(){if(!oe)return null;oe.updateWorldMatrix(!0,!0);let w=$e().map(me=>kt(me)),G=new Ut;if(G.name="ARContent",oe.traverse(me=>{if(!me.isMesh||!me.visible||Mn(me))return;let qe=Ug(me,w);qe&&G.add(qe)}),!G.children.length)return null;G.updateMatrixWorld(!0);let Z=zf(G),Q=new Ut;return Q.name="ARExport",Q.add(G),zg(G,Z),Q.userData.arPlacement=Z,Q}async function id(){if(co||!oe)return;co=!0;let w=Pn?.textContent||"AR";Pn&&(Pn.disabled=!0,Pn.textContent="\u2026");try{let G=nd();if(!G)throw new Error("Nothing visible to export. Show at least one part.");let Q=await new zc().parseAsync(G,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),me=new Blob([Q],{type:"model/vnd.usdz+zip"}),qe=URL.createObjectURL(me),Oe=document.createElement("a");Oe.rel="ar",Oe.href=qe,Oe.download="view.usdz";let Qe=document.createElement("img");Qe.alt="AR",Oe.appendChild(Qe),document.body.appendChild(Oe),Oe.click(),Oe.remove(),setTimeout(()=>URL.revokeObjectURL(qe),6e4)}catch(G){D(String(G?.message||G))}finally{co=!1,Pn&&(Pn.disabled=!1,Pn.textContent=w)}}Pn&&Pn.addEventListener("click",()=>{id()});let sd={scene:a,get camera(){return W},controls:ce,parts:f,partOpacity:d,cuts:L,scenes:n,setPartOpacity:vt,setCameraPreset:Et,applyScene:ze,setHFov:Se,toggleFovIso:Ve,get projection(){return K},get hFovDeg(){return F},setCutT:At,removeCut:lt,frameIso:be,openArQuickLook:id,buildArExportScene:nd,getPeelQuality:()=>ho};window.BlueprintsViewer=sd;function rd(){for(let w of d.values())if(w<1-1e-4)return!0;return!1}function od(){for(let[w,G]of f){let Z=d.get(w)??1;Ts(G,Z,{edgeMode:h})}}let ad=!1,uo=!0,ld=null,cd=null,ho="fast",ud=null,Na=!1;i.addEventListener("pointermove",()=>{xi?.isActive()&&(uo=!0)}),i.addEventListener("pointerup",()=>{xi?.isActive()&&(uo=!0)});function b0(){let w=W.view;return[W.position.x,W.position.y,W.position.z,W.quaternion.x,W.quaternion.y,W.quaternion.z,W.quaternion.w,W.zoom,W.near,W.far,W.fov||0,W.left,W.right,W.top,W.bottom,ce.target.x,ce.target.y,ce.target.z,i.width,i.height,w&&w.enabled?1:0,w?w.offsetX:0,w?w.offsetY:0,w?w.fullWidth:0,w?w.fullHeight:0,K==="ortho"?1:0]}function S0(){let w=b0(),G=ld,Z=!G||G.length!==w.length;if(!Z&&G){for(let Q=0;Q<w.length;Q++)if(w[Q]!==G[Q]){Z=!0;break}}return Z&&(ld=w),Z}function E0(){let w=[u,h,jc(),fr?"1":"0",String(l)],G=a?.background;G&&G.isColor&&w.push(G.getHexString());for(let[Z,Q]of d)w.push(Z,Number(Q).toFixed(3));for(let Z of L)w.push(String(Z.id),Z.locked?"1":"0",Number(Z.t).toFixed(4));return w.join("|")}function Oa(){if(lo)return;let w=performance.now();_0(w),ce.update(),oe&&Ee(),Sn||(Fi.copy(W.position),Mt.copy(ce.target),Sn=!0);let G=W.position.distanceToSquared(Fi)>1e-8||ce.target.distanceToSquared(Mt)>1e-8;Fi.copy(W.position),Mt.copy(ce.target);let Z=E0(),Q=Z!==cd,me=S0();if(Q&&(Na=!0),ho=!qt&&!G&&!Q&&!J&&!Cs&&!Na?"high":"fast",!uo&&!Q&&!me&&!(ho!==ud)&&!Na){requestAnimationFrame(Oa);return}uo=!1,cd=Z,ud=ho,Q||(Na=!1),xi?.update(),ue.update();let Qe=P.render(a,W,oe,rd,{quality:ho,batchKey:Z,deferPrime:Q});ad&&!Qe&&od(),ad=Qe,requestAnimationFrame(Oa)}return Oa(),sd}return D0(FE);})();
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
