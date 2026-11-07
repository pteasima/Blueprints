var BlueprintsViewerBundle=(()=>{var bu=Object.defineProperty;var mx=Object.getOwnPropertyDescriptor;var gx=Object.getOwnPropertyNames;var xx=Object.prototype.hasOwnProperty;var _x=(i,e)=>{for(var t in e)bu(i,t,{get:e[t],enumerable:!0})},yx=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of gx(e))!xx.call(i,r)&&r!==t&&bu(i,r,{get:()=>e[r],enumerable:!(n=mx(e,r))||n.enumerable});return i};var vx=i=>yx(bu({},"__esModule",{value:!0}),i);var c1={};_x(c1,{mountViewer:()=>a1});var kc="172",Rr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tp=0,ch=1,Ap=2;var lh=1,Rp=2,Di=3,Nn=0,fn=1,At=2,On=0,ui=1,uh=2,hh=3,fh=4,Hc=5,Zn=100,Cp=101,Pp=102,Ip=103,Dp=104,aa=200,Pr=201,Lp=202,Up=203,Vs=204,Yr=205,Np=206,ca=207,Op=208,Fp=209,Bp=210,zp=211,kp=212,Hp=213,Vp=214,Vc=0,Gc=1,Wc=2,Zr=3,Xc=4,qc=5,Yc=6,Zc=7,dh=0,Gp=1,Wp=2,pi=0,Xp=1,qp=2,Yp=3,la=4,Zp=5,$p=6,Kp=7,Ku="attached",jp="detached",ph=300,ts=301,ns=302,$c=303,Kc=304,ua=306,hi=1e3,Si=1001,Gs=1002,qt=1003,jc=1004;var is=1005;var Yt=1006,js=1007;var mi=1008;var Kn=1009,mh=1010,gh=1011,Js=1012,Jc=1013,Ir=1014,Fn=1015,rr=1016,Qc=1017,el=1018,rs=1020,xh=35902,_h=1021,yh=1022,sn=1023,vh=1024,Mh=1025,qr=1026,$r=1027,tl=1028,nl=1029,bh=1030,il=1031;var rl=1033,ha=33776,fa=33777,da=33778,pa=33779,sl=35840,ol=35841,al=35842,cl=35843,ll=36196,ul=37492,hl=37496,fl=37808,dl=37809,pl=37810,ml=37811,gl=37812,xl=37813,_l=37814,yl=37815,vl=37816,Ml=37817,bl=37818,Sl=37819,El=37820,wl=37821,ma=36492,Tl=36494,Al=36495,Sh=36283,Rl=36284,Cl=36285,Pl=36286;var Kr=2300,jr=2301,bc=2302,ju=2400,Ju=2401,Qu=2402,Jp=2500;var Eh=0,ga=1,Qs=2,Qp=3200,em=3201;var wh=0,tm=1,gi="",xt="srgb",un="srgb-linear",Io="linear",bt="srgb";var Xr=7680;var eh=519,nm=512,im=513,rm=514,Th=515,sm=516,om=517,am=518,cm=519,Sc=35044;var Ah="300 es",Ei=2e3,Do=2001,wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,ks=Math.PI/180,Jr=180/Math.PI;function li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Rh(i,e){return(i%e+e)%e}function Mx(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bx(i,e,t){return i!==e?(t-i)/(e-i):0}function Po(i,e,t){return(1-t)*i+t*e}function Sx(i,e,t,n){return Po(i,e,1-Math.exp(-t*n))}function Ex(i,e=1){return e-Math.abs(Rh(i,e*2)-e)}function wx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ax(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rx(i,e){return i+Math.random()*(e-i)}function Cx(i){return i*(.5-Math.random())}function Px(i){i!==void 0&&(Bd=i);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ix(i){return i*ks}function Dx(i){return i*Jr}function Lx(i){return(i&i-1)===0&&i!==0}function Ux(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ox(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ss={DEG2RAD:ks,RAD2DEG:Jr,generateUUID:li,clamp:rt,euclideanModulo:Rh,mapLinear:Mx,inverseLerp:bx,lerp:Po,damp:Sx,pingpong:Ex,smoothstep:wx,smootherstep:Tx,randInt:Ax,randFloat:Rx,randFloatSpread:Cx,seededRandom:Px,degToRad:Ix,radToDeg:Dx,isPowerOfTwo:Lx,ceilPowerOfTwo:Ux,floorPowerOfTwo:Nx,setQuaternionFromProperEuler:Ox,normalize:Mt,denormalize:ci},Be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=r[0],m=r[3],p=r[6],y=r[1],v=r[4],_=r[7],C=r[2],T=r[5],R=r[8];return s[0]=o*x+a*y+c*C,s[3]=o*m+a*v+c*T,s[6]=o*p+a*_+c*R,s[1]=l*x+u*y+h*C,s[4]=l*m+u*v+h*T,s[7]=l*p+u*_+h*R,s[2]=f*x+d*y+g*C,s[5]=f*m+d*v+g*T,s[8]=f*p+d*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(r*l-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Su.makeScale(e,t)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,t){return this.premultiply(Su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Su=new it;function Ch(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lm(){let i=Ws("canvas");return i.style.display="block",i}var zd={};function os(i){i in zd||(zd[i]=!0,console.warn(i))}function um(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function hm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var kd=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fx(){let i={enabled:!0,workingColorSpace:un,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===bt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(r.r=Hs(r.r),r.g=Hs(r.g),r.b=Hs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gi?Io:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[un]:{primaries:e,whitePoint:n,transfer:Io,toXYZ:kd,fromXYZ:Hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:kd,fromXYZ:Hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var ht=Fx();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,Ec=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=Ws("canvas")),Ss.width=e.width,Ss.height=e.height;let n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bx=0,Lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Eu(r[o].image)):s.push(Eu(r[o]))}else s=Eu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Eu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zx=0,Zt=class i extends wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Si,r=Si,s=Yt,o=mi,a=sn,c=Kn,l=i.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=li(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=ph;Zt.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(d+1)/2,C=(p+1)/2,T=(u+f)/4,R=(h+x)/4,L=(g+m)/4;return v>_&&v>C?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=T/n,s=R/n):_>C?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=T/r,s=L/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=R/s,r=L/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wc=class extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new Lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends wc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Uo=class extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==d||u!==g){let m=1-a,p=c*f+l*d+u*g+h*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,p*y);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let _=a*y;if(c=c*m+f*_,l=l*m+d*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wu=new P,Vd=new Bt,Nt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),qa.subVectors(this.max,yo),Es.subVectors(e.a,yo),ws.subVectors(e.b,yo),Ts.subVectors(e.c,yo),gr.subVectors(ws,Es),xr.subVectors(Ts,ws),Hr.subVectors(Es,Ts);let t=[0,-gr.z,gr.y,0,-xr.z,xr.y,0,-Hr.z,Hr.y,gr.z,0,-gr.x,xr.z,0,-xr.x,Hr.z,0,-Hr.x,-gr.y,gr.x,0,-xr.y,xr.x,0,-Hr.y,Hr.x,0];return!Tu(t,Es,ws,Ts,qa)||(t=[1,0,0,0,1,0,0,0,1],!Tu(t,Es,ws,Ts,qa))?!1:(Ya.crossVectors(gr,xr),t=[Ya.x,Ya.y,Ya.z],Tu(t,Es,ws,Ts,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gi=[new P,new P,new P,new P,new P,new P,new P,new P],si=new P,Xa=new Nt,Es=new P,ws=new P,Ts=new P,gr=new P,xr=new P,Hr=new P,yo=new P,qa=new P,Ya=new P,Vr=new P;function Tu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Vr.fromArray(i,s);let a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),c=e.dot(Vr),l=t.dot(Vr),u=n.dot(Vr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var kx=new Nt,vo=new P,Au=new P,nn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);let t=vo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(Au)),this.expandByPoint(vo.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wi=new P,Ru=new P,Za=new P,_r=new P,Cu=new P,$a=new P,Pu=new P,Ti=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ru.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Ru);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Za),a=_r.dot(this.direction),c=-_r.dot(Za),l=_r.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ru).addScaledVector(Za,f),d}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);let n=Wi.dot(this.direction),r=Wi.dot(Wi)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,r,s){Cu.subVectors(t,e),$a.subVectors(n,e),Pu.crossVectors(Cu,$a);let o=this.direction.dot(Pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,e);let c=a*this.direction.dot($a.crossVectors(_r,$a));if(c<0)return null;let l=a*this.direction.dot(Cu.cross(_r));if(l<0||c+l>o)return null;let u=-a*_r.dot(Pu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,r,s,o,a,c,l,u,h,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,f,d,g,x,m)}set(e,t,n,r,s,o,a,c,l,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hx,e,Vx)}lookAt(e,t,n){let r=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),yr.crossVectors(n,kn),yr.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),yr.crossVectors(n,kn)),yr.normalize(),Ka.crossVectors(kn,yr),r[0]=yr.x,r[4]=Ka.x,r[8]=kn.x,r[1]=yr.y,r[5]=Ka.y,r[9]=kn.y,r[2]=yr.z,r[6]=Ka.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],C=n[15],T=r[0],R=r[4],L=r[8],b=r[12],S=r[1],F=r[5],j=r[9],z=r[13],q=r[2],Q=r[6],Y=r[10],ce=r[14],J=r[3],de=r[7],ee=r[11],he=r[15];return s[0]=o*T+a*S+c*q+l*J,s[4]=o*R+a*F+c*Q+l*de,s[8]=o*L+a*j+c*Y+l*ee,s[12]=o*b+a*z+c*ce+l*he,s[1]=u*T+h*S+f*q+d*J,s[5]=u*R+h*F+f*Q+d*de,s[9]=u*L+h*j+f*Y+d*ee,s[13]=u*b+h*z+f*ce+d*he,s[2]=g*T+x*S+m*q+p*J,s[6]=g*R+x*F+m*Q+p*de,s[10]=g*L+x*j+m*Y+p*ee,s[14]=g*b+x*z+m*ce+p*he,s[3]=y*T+v*S+_*q+C*J,s[7]=y*R+v*F+_*Q+C*de,s[11]=y*L+v*j+_*Y+C*ee,s[15]=y*b+v*z+_*ce+C*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*d-n*c*d)+x*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-r*a*u-t*c*h+t*a*f+r*o*h-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=h*m*l-x*f*l+x*c*d-a*m*d-h*c*p+a*f*p,v=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,_=u*x*l-g*h*l+g*a*d-o*x*d-u*a*p+o*h*p,C=g*h*c-u*x*c-g*a*f+o*x*f+u*a*m-o*h*m,T=t*y+n*v+r*_+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=y*R,e[1]=(x*f*s-h*m*s-x*r*d+n*m*d+h*r*p-n*f*p)*R,e[2]=(a*m*s-x*c*s+x*r*l-n*m*l-a*r*p+n*c*p)*R,e[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*d-n*c*d)*R,e[4]=v*R,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*R,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*R,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*d+t*c*d)*R,e[8]=_*R,e[9]=(g*h*s-u*x*s-g*n*d+t*x*d+u*n*p-t*h*p)*R,e[10]=(o*x*s-g*a*s+g*n*l-t*x*l-o*n*p+t*a*p)*R,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*R,e[12]=C*R,e[13]=(u*x*r-g*h*r+g*n*f-t*x*f-u*n*m+t*h*m)*R,e[14]=(g*a*r-o*x*r-g*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*f+t*a*f)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,x=o*u,m=o*h,p=a*h,y=c*l,v=c*u,_=c*h,C=n.x,T=n.y,R=n.z;return r[0]=(1-(x+p))*C,r[1]=(d+_)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(d-_)*T,r[5]=(1-(f+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+v)*R,r[9]=(m-y)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=As.set(r[0],r[1],r[2]).length(),o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);let l=1/s,u=1/o,h=1/a;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,t.setFromRotationMatrix(oi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ei){let c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),d,g;if(a===Ei)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Do)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ei){let c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*l,d=(n+r)*u,g,x;if(a===Ei)g=(o+s)*h,x=-2*h;else if(a===Do)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},As=new P,oi=new Ke,Hx=new P(0,0,0),Vx=new P(1,1,1),yr=new P,Ka=new P,kn=new P,Gd=new Ke,Wd=new Bt,fi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gx=0,Xd=new P,Rs=new Bt,Xi=new Ke,ja=new P,Mo=new P,Wx=new P,Xx=new Bt,qd=new P(1,0,0),Yd=new P(0,1,0),Zd=new P(0,0,1),$d={type:"added"},qx={type:"removed"},Cs={type:"childadded",child:null},Iu={type:"childremoved",child:null},Ot=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new fi,n=new Bt,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new it}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(Yd,e)}rotateZ(e){return this.rotateOnAxis(Zd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(Yd,e)}translateZ(e){return this.translateOnAxis(Zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ja.copy(e):ja.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Mo,ja,this.up):Xi.lookAt(ja,Mo,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(Xi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($d),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qx),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($d),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,Wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,Xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ot.DEFAULT_UP=new P(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new P,qi=new P,Du=new P,Yi=new P,Ps=new P,Is=new P,Kd=new P,Lu=new P,Uu=new P,Nu=new P,Ou=new ct,Fu=new ct,Bu=new ct,bi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ai.subVectors(e,t),r.cross(ai);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ai.subVectors(r,t),qi.subVectors(n,t),Du.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(qi),c=ai.dot(Du),l=qi.dot(qi),u=qi.dot(Du),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yi.x),c.addScaledVector(o,Yi.y),c.addScaledVector(a,Yi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ou.setScalar(0),Fu.setScalar(0),Bu.setScalar(0),Ou.fromBufferAttribute(e,t),Fu.fromBufferAttribute(e,n),Bu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ou,s.x),o.addScaledVector(Fu,s.y),o.addScaledVector(Bu,s.z),o}static isFrontFacing(e,t,n,r){return ai.subVectors(n,t),qi.subVectors(e,t),ai.cross(qi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),ai.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Ps.subVectors(r,n),Is.subVectors(s,n),Lu.subVectors(e,n);let c=Ps.dot(Lu),l=Is.dot(Lu);if(c<=0&&l<=0)return t.copy(n);Uu.subVectors(e,r);let u=Ps.dot(Uu),h=Is.dot(Uu);if(u>=0&&h<=u)return t.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ps,o);Nu.subVectors(e,s);let d=Ps.dot(Nu),g=Is.dot(Nu);if(g>=0&&d<=g)return t.copy(s);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Is,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Kd.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Kd,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Ps,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function zu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=Rh(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zu(o,s,e+1/3),this.g=zu(o,s,e),this.b=zu(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return ht.fromWorkingColorSpace(yn.copy(this),e),Math.round(rt(yn.r*255,0,255))*65536+Math.round(rt(yn.g*255,0,255))*256+Math.round(rt(yn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(yn.copy(this),t);let n=yn.r,r=yn.g,s=yn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=xt){ht.fromWorkingColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,r=yn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(Ja);let n=Po(vr.h,Ja.h,t),r=Po(vr.s,Ja.s,t),s=Po(vr.l,Ja.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new ke;ke.NAMES=dm;var Yx=0,Cn=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ui,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vs,this.blendDst=Yr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vs&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ht=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new P,Qa=new Be,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}};var No=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oo=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ut=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zx=0,Yn=new Ke,ku=new Ot,Ds=new P,Hn=new Nt,bo=new Nt,tn=new P,Tt=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?Oo:No)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ut(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Hn.min,bo.min),Hn.expandByPoint(tn),tn.addVectors(Hn.max,bo.max),Hn.expandByPoint(tn)):(Hn.expandByPoint(bo.min),Hn.expandByPoint(bo.max))}Hn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(e,l),tn.add(Ds)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new P,c[L]=new P;let l=new P,u=new P,h=new P,f=new Be,d=new Be,g=new Be,x=new P,m=new P;function p(L,b,S){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,L),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),d.sub(f),g.sub(f);let F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(F),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(F),a[L].add(x),a[b].add(x),a[S].add(x),c[L].add(m),c[b].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,b=y.length;L<b;++L){let S=y[L],F=S.start,j=S.count;for(let z=F,q=F+j;z<q;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let v=new P,_=new P,C=new P,T=new P;function R(L){C.fromBufferAttribute(r,L),T.copy(C);let b=a[L];v.copy(b),v.sub(C.multiplyScalar(C.dot(b))).normalize(),_.crossVectors(T,b);let F=_.dot(c[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,F)}for(let L=0,b=y.length;L<b;++L){let S=y[L],F=S.start,j=S.count;for(let z=F,q=F+j;z<q;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jd=new Ke,Gr=new Ti,ec=new nn,Jd=new P,tc=new P,nc=new P,ic=new P,Hu=new P,rc=new P,Qd=new P,sc=new P,je=class extends Ot{constructor(e=new Tt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){rc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(Hu.fromBufferAttribute(h,e),o?rc.addScaledVector(Hu,u):rc.addScaledVector(Hu.sub(t),u))}t.add(rc)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!(ec.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(ec,Jd)===null||Gr.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&(jd.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(jd),!(n.boundingBox!==null&&Gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,C=v;_<C;_+=3){let T=a.getX(_),R=a.getX(_+1),L=a.getX(_+2);r=oc(this,p,e,n,l,u,h,T,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);r=oc(this,o,e,n,l,u,h,y,v,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,C=v;_<C;_+=3){let T=_,R=_+1,L=_+2;r=oc(this,p,e,n,l,u,h,T,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,_=m+2;r=oc(this,o,e,n,l,u,h,y,v,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function $x(i,e,t,n,r,s,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Nn,a),c===null)return null;sc.copy(a),sc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(sc);return l<t.near||l>t.far?null:{distance:l,point:sc.clone(),object:i}}function oc(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,tc),i.getVertexPosition(c,nc),i.getVertexPosition(l,ic);let u=$x(i,e,t,n,tc,nc,ic,Qd);if(u){let h=new P;bi.getBarycoord(Qd,tc,nc,ic,h),r&&(u.uv=bi.getInterpolatedAttribute(r,a,c,l,h,new Be)),s&&(u.uv1=bi.getInterpolatedAttribute(s,a,c,l,h,new Be)),o&&(u.normal=bi.getInterpolatedAttribute(o,a,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new P,materialIndex:0};bi.getNormal(tc,nc,ic,f.normal),u.face=f,u.barycoord=h}return u}var br=class i extends Tt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function g(x,m,p,y,v,_,C,T,R,L,b){let S=_/R,F=C/L,j=_/2,z=C/2,q=T/2,Q=R+1,Y=L+1,ce=0,J=0,de=new P;for(let ee=0;ee<Y;ee++){let he=ee*F-z;for(let pe=0;pe<Q;pe++){let ne=pe*S-j;de[x]=ne*y,de[m]=he*v,de[p]=q,l.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=T>0?1:-1,u.push(de.x,de.y,de.z),h.push(pe/R),h.push(1-ee/L),ce+=1}}for(let ee=0;ee<L;ee++)for(let he=0;he<R;he++){let pe=f+he+Q*ee,ne=f+he+Q*(ee+1),H=f+(he+1)+Q*(ee+1),ue=f+(he+1)+Q*ee;c.push(pe,ne,ue),c.push(ne,H,ue),J+=6}a.addGroup(d,J,b),d+=J,f+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function as(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=as(i[t]);for(let r in n)e[r]=n[r]}return e}function Kx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ph(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var xa={clone:as,merge:bn},jx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jx,this.fragmentShader=Jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fo=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mr=new P,ep=new Be,tp=new Be,Xt=class extends Fo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,ep,tp),t.subVectors(tp,ep)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ls=-90,Us=1,Ac=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xt(Ls,Us,e,t);r.layers=this.layers,this.add(r);let s=new Xt(Ls,Us,e,t);s.layers=this.layers,this.add(s);let o=new Xt(Ls,Us,e,t);o.layers=this.layers,this.add(o);let a=new Xt(Ls,Us,e,t);a.layers=this.layers,this.add(a);let c=new Xt(Ls,Us,e,t);c.layers=this.layers,this.add(c);let l=new Xt(Ls,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Bo=class extends Zt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ts,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rc=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new br(5,5,5),s=new $t({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:On});s.uniforms.tEquirect.value=t;let o=new je(r,s),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Yt),new Ac(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};var Pn=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new P,vn=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qs=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ns,So=new P,Os=new P,Fs=new P,Bs=new Be,Eo=new Be,pm=new Ke,ac=new P,wo=new P,cc=new P,np=new Be,Vu=new Be,ip=new Be,zo=class extends Ot{constructor(e=new qs){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sr(t,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new vn(n,3,0,!1)),Ns.setAttribute("uv",new vn(n,2,3,!1))}this.geometry=Ns,this.material=e,this.center=new Be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),pm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Fs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;lc(ac.set(-.5,-.5,0),Fs,o,Os,r,s),lc(wo.set(.5,-.5,0),Fs,o,Os,r,s),lc(cc.set(.5,.5,0),Fs,o,Os,r,s),np.set(0,0),Vu.set(1,0),ip.set(1,1);let a=e.ray.intersectTriangle(ac,wo,cc,!1,So);if(a===null&&(lc(wo.set(-.5,.5,0),Fs,o,Os,r,s),Vu.set(0,1),a=e.ray.intersectTriangle(ac,cc,wo,!1,So),a===null))return;let c=e.ray.origin.distanceTo(So);c<e.near||c>e.far||t.push({distance:c,point:So.clone(),uv:bi.getInterpolation(So,ac,wo,cc,np,Vu,ip,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function lc(i,e,t,n,r,s){Bs.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Eo.x=s*Bs.x-r*Bs.y,Eo.y=r*Bs.x+s*Bs.y):Eo.copy(Bs),i.copy(e),i.x+=Eo.x,i.y+=Eo.y,i.applyMatrix4(pm)}var rp=new P,sp=new ct,op=new ct,Qx=new P,ap=new Ke,uc=new P,Gu=new nn,cp=new Ke,Wu=new Ti,ko=class extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ku,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uc),this.boundingBox.expandByPoint(uc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uc),this.boundingSphere.expandByPoint(uc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gu.copy(this.boundingSphere),Gu.applyMatrix4(r),e.ray.intersectsSphere(Gu)!==!1&&(cp.copy(r).invert(),Wu.copy(e.ray).applyMatrix4(cp),!(this.boundingBox!==null&&Wu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ku?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;sp.fromBufferAttribute(r.attributes.skinIndex,e),op.fromBufferAttribute(r.attributes.skinWeight,e),rp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=op.getComponent(s);if(o!==0){let a=sp.getComponent(s);ap.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Qx.copy(rp).applyMatrix4(ap),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ys=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ho=class extends Zt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=qt,u=qt,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lp=new Ke,e_=new Ke,Vo=class i{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:e_;lp.multiplyMatrices(a,t[s]),lp.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ho(t,e,e,sn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ys),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Er=class extends vt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new Ke,up=new Ke,hc=[],hp=new Nt,t_=new Ke,To=new je,Ao=new nn,Go=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,t_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),hp.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(hp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Ao.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ao.copy(this.boundingSphere),Ao.applyMatrix4(n),e.ray.intersectsSphere(Ao)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,zs),up.multiplyMatrices(n,zs),To.matrixWorld=up,To.raycast(e,hc);for(let o=0,a=hc.length;o<a;o++){let c=hc[o];c.instanceId=s,c.object=this,t.push(c)}hc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ho(new Float32Array(r*this.count),r,this.count,tl,Fn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Xu=new P,n_=new P,i_=new it,ln=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Xu.subVectors(n,t).cross(n_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||i_.getNormalMatrix(e),r=this.coplanarPoint(Xu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wr=new nn,fc=new P,Zs=class{constructor(e=new ln,t=new ln,n=new ln,r=new ln,s=new ln,o=new ln){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],x=r[10],m=r[11],p=r[12],y=r[13],v=r[14],_=r[15];if(n[0].setComponents(c-s,f-l,m-d,_-p).normalize(),n[1].setComponents(c+s,f+l,m+d,_+p).normalize(),n[2].setComponents(c+o,f+u,m+g,_+y).normalize(),n[3].setComponents(c-o,f-u,m-g,_-y).normalize(),n[4].setComponents(c-a,f-h,m-x,_-v).normalize(),t===Ei)n[5].setComponents(c+a,f+h,m+x,_+v).normalize();else if(t===Do)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fc.x=r.normal.x>0?e.max.x:e.min.x,fc.y=r.normal.y>0?e.max.y:e.min.y,fc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ji=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cc=new P,Pc=new P,fp=new Ke,Ro=new Ti,dc=new nn,qu=new P,dp=new P,Ai=class extends Ot{constructor(e=new Tt,t=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Cc.fromBufferAttribute(t,r-1),Pc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Cc.distanceTo(Pc);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(r),dc.radius+=s,e.ray.intersectsSphere(dc)===!1)return;fp.copy(r).invert(),Ro.copy(e.ray).applyMatrix4(fp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=u.getX(x),y=u.getX(x+1),v=pc(this,e,Ro,c,p,y);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=pc(this,e,Ro,c,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=pc(this,e,Ro,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=pc(this,e,Ro,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function pc(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(Cc.fromBufferAttribute(o,r),Pc.fromBufferAttribute(o,s),t.distanceSqToSegment(Cc,Pc,qu,dp)>n)return;qu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qu);if(!(c<e.near||c>e.far))return{distance:c,point:dp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var pp=new P,mp=new P,Wo=class extends Ai{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)pp.fromBufferAttribute(t,r),mp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+pp.distanceTo(mp);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xo=class extends Ai{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$s=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gp=new Ke,th=new Ti,mc=new nn,gc=new P,qo=class extends Ot{constructor(e=new Tt,t=new $s){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(r),mc.radius+=s,e.ray.intersectsSphere(mc)===!1)return;gp.copy(r).invert(),th.copy(e.ray).applyMatrix4(gp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=l.getX(g);gc.fromBufferAttribute(h,m),xp(gc,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)gc.fromBufferAttribute(h,g),xp(gc,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function xp(i,e,t,n,r,s,o){let a=th.distanceSqToPoint(i);if(a<t){let c=new P;th.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Lt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Ji=class extends Zt{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yo=class extends Zt{constructor(e,t,n,r,s,o,a,c,l,u=qr){if(u!==qr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qr&&(n=Ir),n===void 0&&u===$r&&(n=rs),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=c!==void 0?c:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var xc=new P,_c=new P,Yu=new P,yc=new bi,Zo=class extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ks*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:p}=yc;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),yc.getNormal(Yu),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let v=(y+1)%3,_=h[y],C=h[v],T=yc[u[y]],R=yc[u[v]],L=`${_}_${C}`,b=`${C}_${_}`;b in f&&f[b]?(Yu.dot(f[b].normal)<=s&&(d.push(T.x,T.y,T.z),d.push(R.x,R.y,R.z)),f[b]=null):L in f||(f[L]={index0:l[y],index1:l[v],normal:Yu.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];xc.fromBufferAttribute(a,x),_c.fromBufferAttribute(a,m),d.push(xc.x,xc.y,xc.z),d.push(_c.x,_c.y,_c.z)}this.setAttribute("position",new Ut(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var $n=class i extends Tt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let y=p*f-o;for(let v=0;v<l;v++){let _=v*h-s;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let v=y+l*p,_=y+l*(p+1),C=y+1+l*(p+1),T=y+1+l*p;d.push(v,_,T),d.push(_,C,T)}this.setIndex(d),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var $o=class i extends Tt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new P,f=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let T=C/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(T+_,1-v),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=u[p][y+1],_=u[p][y],C=u[p+1][y],T=u[p+1][y+1];(p!==0||o>0)&&d.push(v,_,T),(p!==n-1||c<Math.PI)&&d.push(_,C,T)}this.setIndex(d),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ko=class extends Tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new P,s=new P;if(e.index!==null){let o=e.attributes.position,a=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],f=h.start,d=h.count;for(let g=f,x=f+d;g<x;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),y=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,y),_p(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,h=3*a+(l+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),_p(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ut(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function _p(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var Mn=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rn=class extends Mn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ic=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dc=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function r_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function s_(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function yp(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function mm(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}var Qi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lc=class extends Qi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ju,endingEnd:ju}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ju:s=e,a=2*t-n;break;case Qu:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ju:o=e,c=2*n-t;break;case Qu:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+y*o[l+C]+v*o[c+C]+_*o[h+C];return s}},Uc=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},Nc=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vc(t,this.TimeBufferType),this.values=vc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vc(e.times,Array),values:vc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case bc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&r_(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===bc,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=jr;var er=class extends Vn{constructor(e,t,n){super(e,t,n)}};er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Kr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends Vn{};jo.prototype.ValueTypeName="color";var Ri=class extends Vn{};Ri.prototype.ValueTypeName="number";var Oc=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Bt.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ci=class extends Vn{InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}};Ci.prototype.ValueTypeName="quaternion";Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var tr=class extends Vn{constructor(e,t,n){super(e,t,n)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Kr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Vn{};Pi.prototype.ValueTypeName="vector";var Jo=class{constructor(e="",t=-1,n=[],r=Jp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(a_(n[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Vn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=s_(c);c=yp(c,1,u),l=yp(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ri(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,x){if(d.length!==0){let m=[],p=[];mm(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){let v=f[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}r.push(new Ri(".morphTargetInfluence["+x+"]",m,p))}c=d.length*o}else{let d=".bones["+t[h].name+"]";n(Pi,d+".position",f,"pos",r),n(Ci,d+".quaternion",f,"rot",r),n(Pi,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function o_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Pi;case"color":return jo;case"quaternion":return Ci;case"bool":case"boolean":return er;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function a_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=o_(i.type);if(i.times===void 0){let t=[],n=[];mm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var $i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Fc=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},gm=new Fc,Ii=class{constructor(e){this.manager=e!==void 0?e:gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zi={},nh=class extends Error{constructor(e,t){super(e),this.response=t}},Ks=class extends Ii{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=$i.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:r});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Zi[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){y();function y(){h.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,R=u.length;T<R;T++){let L=u[T];L.onProgress&&L.onProgress(C)}p.enqueue(_),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new nh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{$i.add(e,l);let u=Zi[e];delete Zi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=Zi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Zi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Bc=class extends Ii{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=$i.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Ws("img");function c(){u(),$i.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Qo=class extends Ii{constructor(e){super(e)}load(e,t,n,r){let s=new Zt,o=new Bc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Qr=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Zu=new Ke,vp=new P,Mp=new P,ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(vp),Mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mp),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ih=class extends ea{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ta=class extends Qr{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ih}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bp=new Ke,Co=new P,$u=new P,rh=class extends ea{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Co.setFromMatrixPosition(e.matrixWorld),n.position.copy(Co),$u.copy(n.position),$u.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($u),n.updateMatrixWorld(),r.makeTranslation(-Co.x,-Co.y,-Co.z),bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp)}},es=class extends Qr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},di=class extends Fo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sh=class extends ea{constructor(){super(new di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wr=class extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},na=class extends Qr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var nr=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ia=class extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ra=class extends Ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=$i.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return $i.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),$i.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});$i.add(e,c),s.manager.itemStart(e)}};var zc=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var Ih="\\[\\]\\.:\\/",c_=new RegExp("["+Ih+"]","g"),Dh="[^"+Ih+"]",l_="[^"+Ih.replace("\\.","")+"]",u_=/((?:WC+[\/:])*)/.source.replace("WC",Dh),h_=/(WCOD+)?/.source.replace("WCOD",l_),f_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),d_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),p_=new RegExp("^"+u_+h_+f_+d_+"$"),m_=["material","materials","bones","map"],oh=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(c_,"")}static parseTrackName(e){let t=p_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);m_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=oh;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u1=new Float32Array(1);var Tr=class extends Sr{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Sp=new Ke,ir=class{constructor(e,t,n=0,r=1/0){this.ray=new Ti(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sp),this}intersectObject(e,t=!0,n=[]){return ah(e,this,n,t),n.sort(Ep),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ah(e[r],this,n,t);return n.sort(Ep),n}};function Ep(i,e){return i.distance-e.distance}function ah(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)ah(s[o],e,t,!0)}}var Ar=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var wp=new P,Mc=new P,sa=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){wp.subVectors(e,this.start),Mc.subVectors(this.end,this.start);let n=Mc.dot(Mc),s=Mc.dot(wp)/n;return t&&(s=rt(s,0,1)),s}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var oa=class extends wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function Lh(i,e,t,n){let r=g_(n);switch(t){case _h:return i*e;case vh:return i*e;case Mh:return i*e*2;case tl:return i*e/r.components*r.byteLength;case nl:return i*e/r.components*r.byteLength;case bh:return i*e*2/r.components*r.byteLength;case il:return i*e*2/r.components*r.byteLength;case yh:return i*e*3/r.components*r.byteLength;case sn:return i*e*4/r.components*r.byteLength;case rl:return i*e*4/r.components*r.byteLength;case ha:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(i,16)*Math.max(e,8)/4;case sl:case al:return Math.max(i,8)*Math.max(e,8)/2;case ll:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ma:case Tl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sh:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g_(i){switch(i){case Kn:case mh:return{byteLength:1,components:1};case Js:case gh:case rr:return{byteLength:2,components:1};case Qc:case el:return{byteLength:2,components:4};case Ir:case Jc:case Fn:return{byteLength:4,components:1};case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);function km(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function x_(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var __=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y_=`#ifdef USE_ALPHAHASH
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
#endif`,v_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E_=`#ifdef USE_AOMAP
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
#endif`,w_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T_=`#ifdef USE_BATCHING
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
#endif`,A_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I_=`#ifdef USE_IRIDESCENCE
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
#endif`,D_=`#ifdef USE_BUMPMAP
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
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,H_=`#define PI 3.141592653589793
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
} // validated`,V_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G_=`vec3 transformedNormal = objectNormal;
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
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sy=`#ifdef USE_GRADIENTMAP
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
}`,oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ly=`uniform bool receiveShadow;
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
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,my=`PhysicalMaterial material;
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
#endif`,gy=`struct PhysicalMaterial {
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
}`,xy=`
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
#endif`,_y=`#if defined( RE_IndirectDiffuse )
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
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ay=`#if defined( USE_POINTS_UV )
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
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`#ifdef USE_MORPHTARGETS
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
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ky=`#ifdef USE_NORMALMAP
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
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nv=`float getShadowMask() {
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
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ov=`#ifdef USE_SKINNING
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
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,fv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`#include <common>
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
}`,Ev=`#if DEPTH_PACKING == 3200
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
}`,wv=`#define DISTANCE
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
}`,Tv=`#define DISTANCE
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`uniform float scale;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Iv=`#include <common>
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Lv=`#define LAMBERT
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
}`,Uv=`#define LAMBERT
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
}`,Nv=`#define MATCAP
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
}`,Ov=`#define MATCAP
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
}`,Fv=`#define NORMAL
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
}`,Bv=`#define NORMAL
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
}`,zv=`#define PHONG
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
}`,kv=`#define PHONG
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
}`,Hv=`#define STANDARD
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
}`,Vv=`#define STANDARD
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
}`,Gv=`#define TOON
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
}`,Wv=`#define TOON
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
}`,Xv=`uniform float size;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,Zv=`uniform vec3 color;
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
}`,$v=`uniform float rotation;
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
}`,Kv=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:__,alphahash_pars_fragment:y_,alphamap_fragment:v_,alphamap_pars_fragment:M_,alphatest_fragment:b_,alphatest_pars_fragment:S_,aomap_fragment:E_,aomap_pars_fragment:w_,batching_pars_vertex:T_,batching_vertex:A_,begin_vertex:R_,beginnormal_vertex:C_,bsdfs:P_,iridescence_fragment:I_,bumpmap_pars_fragment:D_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:U_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:O_,color_fragment:F_,color_pars_fragment:B_,color_pars_vertex:z_,color_vertex:k_,common:H_,cube_uv_reflection_fragment:V_,defaultnormal_vertex:G_,displacementmap_pars_vertex:W_,displacementmap_vertex:X_,emissivemap_fragment:q_,emissivemap_pars_fragment:Y_,colorspace_fragment:Z_,colorspace_pars_fragment:$_,envmap_fragment:K_,envmap_common_pars_fragment:j_,envmap_pars_fragment:J_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:uy,envmap_vertex:ey,fog_vertex:ty,fog_pars_vertex:ny,fog_fragment:iy,fog_pars_fragment:ry,gradientmap_pars_fragment:sy,lightmap_pars_fragment:oy,lights_lambert_fragment:ay,lights_lambert_pars_fragment:cy,lights_pars_begin:ly,lights_toon_fragment:hy,lights_toon_pars_fragment:fy,lights_phong_fragment:dy,lights_phong_pars_fragment:py,lights_physical_fragment:my,lights_physical_pars_fragment:gy,lights_fragment_begin:xy,lights_fragment_maps:_y,lights_fragment_end:yy,logdepthbuf_fragment:vy,logdepthbuf_pars_fragment:My,logdepthbuf_pars_vertex:by,logdepthbuf_vertex:Sy,map_fragment:Ey,map_pars_fragment:wy,map_particle_fragment:Ty,map_particle_pars_fragment:Ay,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Cy,morphinstance_vertex:Py,morphcolor_vertex:Iy,morphnormal_vertex:Dy,morphtarget_pars_vertex:Ly,morphtarget_vertex:Uy,normal_fragment_begin:Ny,normal_fragment_maps:Oy,normal_pars_fragment:Fy,normal_pars_vertex:By,normal_vertex:zy,normalmap_pars_fragment:ky,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Vy,clearcoat_pars_fragment:Gy,iridescence_pars_fragment:Wy,opaque_fragment:Xy,packing:qy,premultiplied_alpha_fragment:Yy,project_vertex:Zy,dithering_fragment:$y,dithering_pars_fragment:Ky,roughnessmap_fragment:jy,roughnessmap_pars_fragment:Jy,shadowmap_pars_fragment:Qy,shadowmap_pars_vertex:ev,shadowmap_vertex:tv,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:rv,skinning_vertex:sv,skinnormal_vertex:ov,specularmap_fragment:av,specularmap_pars_fragment:cv,tonemapping_fragment:lv,tonemapping_pars_fragment:uv,transmission_fragment:hv,transmission_pars_fragment:fv,uv_pars_fragment:dv,uv_pars_vertex:pv,uv_vertex:mv,worldpos_vertex:gv,background_vert:xv,background_frag:_v,backgroundCube_vert:yv,backgroundCube_frag:vv,cube_vert:Mv,cube_frag:bv,depth_vert:Sv,depth_frag:Ev,distanceRGBA_vert:wv,distanceRGBA_frag:Tv,equirect_vert:Av,equirect_frag:Rv,linedashed_vert:Cv,linedashed_frag:Pv,meshbasic_vert:Iv,meshbasic_frag:Dv,meshlambert_vert:Lv,meshlambert_frag:Uv,meshmatcap_vert:Nv,meshmatcap_frag:Ov,meshnormal_vert:Fv,meshnormal_frag:Bv,meshphong_vert:zv,meshphong_frag:kv,meshphysical_vert:Hv,meshphysical_frag:Vv,meshtoon_vert:Gv,meshtoon_frag:Wv,points_vert:Xv,points_frag:qv,shadow_vert:Yv,shadow_frag:Zv,sprite_vert:$v,sprite_frag:Kv},Ae={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},In={basic:{uniforms:bn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:bn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:bn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:bn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:bn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:bn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:bn([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:bn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:bn([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:bn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:bn([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:bn([Ae.common,Ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:bn([Ae.lights,Ae.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};In.physical={uniforms:bn([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Il={r:0,b:0,g:0},cs=new fi,jv=new Ke;function Jv(i,e,t,n,r,s,o){let a=new ke(0),c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1,C=g(v);C===null?p(a,c):C&&C.isColor&&(p(C,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){let C=g(_);C&&(C.isCubeTexture||C.mapping===ua)?(u===void 0&&(u=new je(new br(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:as(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cs.copy(_.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(cs)),u.material.toneMapped=ht.getTransfer(C.colorSpace)!==bt,(h!==C||f!==C.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new je(new $n(2,2),new $t({name:"BackgroundMaterial",uniforms:as(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ht.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=C,f=C.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(Il,Ph(i)),n.buffers.color.setClear(Il.r,Il.g,Il.b,_,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m,dispose:y}}function Qv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(S,F,j,z,q){let Q=!1,Y=h(z,j,F);s!==Y&&(s=Y,l(s.object)),Q=d(S,z,j,q),Q&&g(S,z,j,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,_(S,F,j,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,F,j){let z=j.wireframe===!0,q=n[S.id];q===void 0&&(q={},n[S.id]=q);let Q=q[F.id];Q===void 0&&(Q={},q[F.id]=Q);let Y=Q[z];return Y===void 0&&(Y=f(c()),Q[z]=Y),Y}function f(S){let F=[],j=[],z=[];for(let q=0;q<t;q++)F[q]=0,j[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,F,j,z){let q=s.attributes,Q=F.attributes,Y=0,ce=j.getAttributes();for(let J in ce)if(ce[J].location>=0){let ee=q[J],he=Q[J];if(he===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),ee===void 0||ee.attribute!==he||he&&ee.data!==he.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function g(S,F,j,z){let q={},Q=F.attributes,Y=0,ce=j.getAttributes();for(let J in ce)if(ce[J].location>=0){let ee=Q[J];ee===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));let he={};he.attribute=ee,ee&&ee.data&&(he.data=ee.data),q[J]=he,Y++}s.attributes=q,s.attributesNum=Y,s.index=z}function x(){let S=s.newAttributes;for(let F=0,j=S.length;F<j;F++)S[F]=0}function m(S){p(S,0)}function p(S,F){let j=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;j[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),q[S]!==F&&(i.vertexAttribDivisor(S,F),q[S]=F)}function y(){let S=s.newAttributes,F=s.enabledAttributes;for(let j=0,z=F.length;j<z;j++)F[j]!==S[j]&&(i.disableVertexAttribArray(j),F[j]=0)}function v(S,F,j,z,q,Q,Y){Y===!0?i.vertexAttribIPointer(S,F,j,q,Q):i.vertexAttribPointer(S,F,j,z,q,Q)}function _(S,F,j,z){x();let q=z.attributes,Q=j.getAttributes(),Y=F.defaultAttributeValues;for(let ce in Q){let J=Q[ce];if(J.location>=0){let de=q[ce];if(de===void 0&&(ce==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),ce==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){let ee=de.normalized,he=de.itemSize,pe=e.get(de);if(pe===void 0)continue;let ne=pe.buffer,H=pe.type,ue=pe.bytesPerElement,le=H===i.INT||H===i.UNSIGNED_INT||de.gpuType===Jc;if(de.isInterleavedBufferAttribute){let te=de.data,xe=te.stride,me=de.offset;if(te.isInstancedInterleavedBuffer){for(let we=0;we<J.locationSize;we++)p(J.location+we,te.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<J.locationSize;we++)m(J.location+we);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let we=0;we<J.locationSize;we++)v(J.location+we,he/J.locationSize,H,ee,xe*ue,(me+he/J.locationSize*we)*ue,le)}else{if(de.isInstancedBufferAttribute){for(let te=0;te<J.locationSize;te++)p(J.location+te,de.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let te=0;te<J.locationSize;te++)m(J.location+te);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let te=0;te<J.locationSize;te++)v(J.location+te,he/J.locationSize,H,ee,he*ue,he/J.locationSize*te*ue,le)}}else if(Y!==void 0){let ee=Y[ce];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(J.location,ee);break;case 3:i.vertexAttrib3fv(J.location,ee);break;case 4:i.vertexAttrib4fv(J.location,ee);break;default:i.vertexAttrib1fv(J.location,ee)}}}}y()}function C(){L();for(let S in n){let F=n[S];for(let j in F){let z=F[j];for(let q in z)u(z[q].object),delete z[q];delete F[j]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let F=n[S.id];for(let j in F){let z=F[j];for(let q in z)u(z[q].object),delete z[q];delete F[j]}delete n[S.id]}function R(S){for(let F in n){let j=n[F];if(j[S.id]===void 0)continue;let z=j[S.id];for(let q in z)u(z[q].object),delete z[q];delete j[S.id]}}function L(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function eM(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let L=R===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:C,maxSamples:T}}function nM(i){let e=this,t=null,n=0,r=!1,s=!1,o=new ln,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let y=s?0:n,v=y*4,_=p.clippingState||null;c.value=_,_=u(g,f,v,d);for(let C=0;C!==v;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=d;v!==x;++v,_+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function iM(i){let e=new WeakMap;function t(o,a){return a===$c?o.mapping=ts:a===Kc&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$c||a===Kc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Rc(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var to=4,xm=[.125,.215,.35,.446,.526,.582],hs=20,Uh=new di,_m=new ke,Nh=null,Oh=0,Fh=0,Bh=!1,us=(1+Math.sqrt(5))/2,eo=1/us,ym=[new P(-us,eo,0),new P(us,eo,0),new P(-eo,0,us),new P(eo,0,us),new P(0,us,-eo),new P(0,us,eo),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Oh,Fh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:rr,format:sn,colorSpace:un,depthBuffer:!1},r=vm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rM(s)),this._blurMaterial=sM(s,e,t)}return r}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Uh)}_sceneToCubeUV(e,t,n,r){let a=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_m),u.toneMapping=pi,u.autoClear=!1;let d=new Ht({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new je(new br,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(_m),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Dl(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ts||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Dl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Uh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ym[(r-s-1)%ym.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new je(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hs-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):hs;m>hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);let p=[],y=0;for(let R=0;R<hs;++R){let L=R/x,b=Math.exp(-L*L/2);p.push(b),R===0?y+=b:R<m&&(y+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let _=this._sizeLods[r],C=3*_*(r>v-to?r-v+to:0),T=4*(this._cubeSize-_);Dl(t,C,T,3*_,2*_),c.setRenderTarget(t),c.render(h,Uh)}};function rM(i){let e=[],t=[],n=[],r=i,s=i-to+1+xm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-to?c=xm[o-i+to-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),v=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,L=T>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];y.set(b,x*g*T),v.set(f,m*g*T);let S=[T,T,T,T,T,T];_.set(S,p*g*T)}let C=new Tt;C.setAttribute("position",new vt(y,x)),C.setAttribute("uv",new vt(v,m)),C.setAttribute("faceIndex",new vt(_,p)),e.push(C),r>to&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vm(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function sM(i,e,t){let n=new Float32Array(hs),r=new P(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Mm(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function bm(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Zh(){return`

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
	`}function oM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===$c||c===Kc,u=c===ts||c===ns;if(l||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new io(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new io(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function aM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cM(i,e,t,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,_=y.length;v<_;v+=3){let C=y[v+0],T=y[v+1],R=y[v+2];f.push(C,T,T,R,R,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let C=v+0,T=v+1,R=v+2;f.push(C,T,T,R,R,C)}}else return;let m=new(Ch(f)?Oo:No)(f,1);m.version=x;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function lM(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*x[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function uM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hM(i,e,t){let n=new WeakMap,r=new ct;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*C*4*h),R=new Uo(T,_,C,h);R.type=Fn,R.needsUpdate=!0;let L=v*4;for(let S=0;S<h;S++){let F=m[S],j=p[S],z=y[S],q=_*C*4*S;for(let Q=0;Q<F.count;Q++){let Y=Q*L;d===!0&&(r.fromBufferAttribute(F,Q),T[q+Y+0]=r.x,T[q+Y+1]=r.y,T[q+Y+2]=r.z,T[q+Y+3]=0),g===!0&&(r.fromBufferAttribute(j,Q),T[q+Y+4]=r.x,T[q+Y+5]=r.y,T[q+Y+6]=r.z,T[q+Y+7]=0),x===!0&&(r.fromBufferAttribute(z,Q),T[q+Y+8]=r.x,T[q+Y+9]=r.y,T[q+Y+10]=r.z,T[q+Y+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new Be(_,C)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function fM(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Hm=new Zt,Sm=new Yo(1,1),Vm=new Uo,Gm=new Tc,Wm=new Bo,Em=[],wm=[],Tm=new Float32Array(16),Am=new Float32Array(9),Rm=new Float32Array(4);function ro(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Em[r];if(s===void 0&&(s=new Float32Array(r),Em[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nl(i,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function mM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function gM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function xM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Rm.set(n),i.uniformMatrix2fv(this.addr,!1,Rm),jt(t,n)}}function _M(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Am.set(n),i.uniformMatrix3fv(this.addr,!1,Am),jt(t,n)}}function yM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Tm.set(n),i.uniformMatrix4fv(this.addr,!1,Tm),jt(t,n)}}function vM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function MM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function bM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function SM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function EM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function TM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function AM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function RM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Sm.compareFunction=Th,s=Sm):s=Hm,t.setTexture2D(e||s,r)}function CM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gm,r)}function PM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wm,r)}function IM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vm,r)}function DM(i){switch(i){case 5126:return dM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return xM;case 35675:return _M;case 35676:return yM;case 5124:case 35670:return vM;case 35667:case 35671:return MM;case 35668:case 35672:return bM;case 35669:case 35673:return SM;case 5125:return EM;case 36294:return wM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return IM}}function LM(i,e){i.uniform1fv(this.addr,e)}function UM(i,e){let t=ro(e,this.size,2);i.uniform2fv(this.addr,t)}function NM(i,e){let t=ro(e,this.size,3);i.uniform3fv(this.addr,t)}function OM(i,e){let t=ro(e,this.size,4);i.uniform4fv(this.addr,t)}function FM(i,e){let t=ro(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function BM(i,e){let t=ro(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zM(i,e){let t=ro(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kM(i,e){i.uniform1iv(this.addr,e)}function HM(i,e){i.uniform2iv(this.addr,e)}function VM(i,e){i.uniform3iv(this.addr,e)}function GM(i,e){i.uniform4iv(this.addr,e)}function WM(i,e){i.uniform1uiv(this.addr,e)}function XM(i,e){i.uniform2uiv(this.addr,e)}function qM(i,e){i.uniform3uiv(this.addr,e)}function YM(i,e){i.uniform4uiv(this.addr,e)}function ZM(i,e,t){let n=this.cache,r=e.length,s=Nl(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hm,s[o])}function $M(i,e,t){let n=this.cache,r=e.length,s=Nl(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gm,s[o])}function KM(i,e,t){let n=this.cache,r=e.length,s=Nl(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wm,s[o])}function jM(i,e,t){let n=this.cache,r=e.length,s=Nl(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vm,s[o])}function JM(i){switch(i){case 5126:return LM;case 35664:return UM;case 35665:return NM;case 35666:return OM;case 35674:return FM;case 35675:return BM;case 35676:return zM;case 5124:case 35670:return kM;case 35667:case 35671:return HM;case 35668:case 35672:return VM;case 35669:case 35673:return GM;case 5125:return WM;case 36294:return XM;case 36295:return qM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return jM}}var kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=DM(t.type)}},Hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JM(t.type)}},Vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},zh=/(\w+)(\])?(\[|\.)?/g;function Cm(i,e){i.seq.push(e),i.map[e.id]=e}function QM(i,e,t){let n=i.name,r=n.length;for(zh.lastIndex=0;;){let s=zh.exec(n),o=zh.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Cm(t,l===void 0?new kh(a,i,e):new Hh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Vh(a),Cm(t,h)),t=h}}}var no=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);QM(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Pm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var eb=37297,tb=0;function nb(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Im=new it;function ib(i){ht._getMatrix(Im,ht.workingColorSpace,i);let e=`mat3( ${Im.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Io:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nb(i.getShaderSource(e),o)}else return r}function rb(i,e){let t=ib(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sb(i,e){let t;switch(e){case Xp:t="Linear";break;case qp:t="Reinhard";break;case Yp:t="Cineon";break;case la:t="ACESFilmic";break;case $p:t="AgX";break;case Kp:t="Neutral";break;case Zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new P;function ob(){ht.getLuminanceCoefficients(Ll);let i=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ab(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function cb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _a(i){return i!==""}function Lm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(i){return i.replace(ub,fb)}var hb=new Map;function fb(i,e){let t=st[e];if(t===void 0){let n=hb.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}var db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(i){return i.replace(db,pb)}function pb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Om(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function mb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function gb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:e="ENVMAP_MODE_REFRACTION";break}return e}function _b(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dh:e="ENVMAP_BLENDING_MULTIPLY";break;case Gp:e="ENVMAP_BLENDING_MIX";break;case Wp:e="ENVMAP_BLENDING_ADD";break}return e}function yb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vb(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=mb(t),l=gb(t),u=xb(t),h=_b(t),f=yb(t),d=ab(t),g=cb(s),x=r.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_a).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_a).join(`
`),p.length>0&&(p+=`
`)):(m=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),p=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?st.tonemapping_pars_fragment:"",t.toneMapping!==pi?sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,rb("linearToOutputTexel",t.outputColorSpace),ob(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),o=Gh(o),o=Lm(o,t),o=Um(o,t),a=Gh(a),a=Lm(a,t),a=Um(a,t),o=Nm(o),a=Nm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,_=y+p+a,C=Pm(r,r.VERTEX_SHADER,v),T=Pm(r,r.FRAGMENT_SHADER,_);r.attachShader(x,C),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(F){if(i.debug.checkShaderErrors){let j=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(C).trim(),q=r.getShaderInfoLog(T).trim(),Q=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,C,T);else{let ce=Dm(r,C,"vertex"),J=Dm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+j+`
`+ce+`
`+J)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(z===""||q==="")&&(Y=!1);Y&&(F.diagnostics={runnable:Q,programLog:j,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(C),r.deleteShader(T),L=new no(r,x),b=lb(r,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,eb)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var Mb=0,Wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xh(e),t.set(e,n)),n}},Xh=class{constructor(e){this.id=Mb++,this.code=e,this.usedTimes=0}};function bb(i,e,t,n,r,s,o){let a=new Xs,c=new Wh,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,F,j,z){let q=j.fog,Q=z.geometry,Y=b.isMeshStandardMaterial?j.environment:null,ce=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),J=ce&&ce.mapping===ua?ce.image.height:null,de=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ee=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,he=ee!==void 0?ee.length:0,pe=0;Q.morphAttributes.position!==void 0&&(pe=1),Q.morphAttributes.normal!==void 0&&(pe=2),Q.morphAttributes.color!==void 0&&(pe=3);let ne,H,ue,le;if(de){let Ge=In[de];ne=Ge.vertexShader,H=Ge.fragmentShader}else ne=b.vertexShader,H=b.fragmentShader,c.update(b),ue=c.getVertexShaderID(b),le=c.getFragmentShaderID(b);let te=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),me=z.isInstancedMesh===!0,we=z.isBatchedMesh===!0,He=!!b.map,De=!!b.matcap,Le=!!ce,O=!!b.aoMap,lt=!!b.lightMap,We=!!b.bumpMap,Xe=!!b.normalMap,Pe=!!b.displacementMap,nt=!!b.emissiveMap,Z=!!b.metalnessMap,A=!!b.roughnessMap,M=b.anisotropy>0,D=b.clearcoat>0,I=b.dispersion>0,U=b.iridescence>0,N=b.sheen>0,oe=b.transmission>0,X=M&&!!b.anisotropyMap,$=D&&!!b.clearcoatMap,_e=D&&!!b.clearcoatNormalMap,ie=D&&!!b.clearcoatRoughnessMap,ye=U&&!!b.iridescenceMap,Te=U&&!!b.iridescenceThicknessMap,Ie=N&&!!b.sheenColorMap,Ee=N&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,Me=!!b.specularColorMap,Oe=!!b.specularIntensityMap,B=oe&&!!b.transmissionMap,Se=oe&&!!b.thicknessMap,ae=!!b.gradientMap,fe=!!b.alphaMap,Re=b.alphaTest>0,Ce=!!b.alphaHash,Je=!!b.extensions,ot=pi;b.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ot=i.toneMapping);let It={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:H,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:we,batchingColor:we&&z._colorsTexture!==null,instancing:me,instancingColor:me&&z.instanceColor!==null,instancingMorph:me&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:un,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:De,envMap:Le,envMapMode:Le&&ce.mapping,envMapCubeUVHeight:J,aoMap:O,lightMap:lt,bumpMap:We,normalMap:Xe,displacementMap:f&&Pe,emissiveMap:nt,normalMapObjectSpace:Xe&&b.normalMapType===tm,normalMapTangentSpace:Xe&&b.normalMapType===wh,metalnessMap:Z,roughnessMap:A,anisotropy:M,anisotropyMap:X,clearcoat:D,clearcoatMap:$,clearcoatNormalMap:_e,clearcoatRoughnessMap:ie,dispersion:I,iridescence:U,iridescenceMap:ye,iridescenceThicknessMap:Te,sheen:N,sheenColorMap:Ie,sheenRoughnessMap:Ee,specularMap:Ye,specularColorMap:Me,specularIntensityMap:Oe,transmission:oe,transmissionMap:B,thicknessMap:Se,gradientMap:ae,opaque:b.transparent===!1&&b.blending===ui&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Re,alphaHash:Ce,combine:b.combine,mapUv:He&&x(b.map.channel),aoMapUv:O&&x(b.aoMap.channel),lightMapUv:lt&&x(b.lightMap.channel),bumpMapUv:We&&x(b.bumpMap.channel),normalMapUv:Xe&&x(b.normalMap.channel),displacementMapUv:Pe&&x(b.displacementMap.channel),emissiveMapUv:nt&&x(b.emissiveMap.channel),metalnessMapUv:Z&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:X&&x(b.anisotropyMap.channel),clearcoatMapUv:$&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(b.sheenRoughnessMap.channel),specularMapUv:Ye&&x(b.specularMap.channel),specularColorMapUv:Me&&x(b.specularColorMap.channel),specularIntensityMapUv:Oe&&x(b.specularIntensityMap.channel),transmissionMapUv:B&&x(b.transmissionMap.channel),thicknessMapUv:Se&&x(b.thicknessMap.channel),alphaMapUv:fe&&x(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Xe||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(He||fe),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===bt,decodeVideoTextureEmissive:nt&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===At,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Je&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&b.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let F in b.defines)S.push(F),S.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(y(S,b),v(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let S=g[b.type],F;if(S){let j=In[S];F=xa.clone(j.uniforms)}else F=b.uniforms;return F}function C(b,S){let F;for(let j=0,z=u.length;j<z;j++){let q=u[j];if(q.cacheKey===S){F=q,++F.usedTimes;break}}return F===void 0&&(F=new vb(i,S,b,s),u.push(F)),F}function T(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:L}}function Sb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Eb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bm(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Eb),n.length>1&&n.sort(f||Fm),r.length>1&&r.sort(f||Fm)}function u(){for(let h=e,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function wb(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Bm,i.set(n,[o])):r>=s.length?(o=new Bm,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Ab(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Rb=0;function Cb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pb(i){let e=new Tb,t=Ab(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let r=new P,s=new Ke,o=new Ke;function a(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,v=0,_=0,C=0,T=0,R=0;l.sort(Cb);for(let b=0,S=l.length;b<S;b++){let F=l[b],j=F.color,z=F.intensity,q=F.distance,Q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=j.r*z,h+=j.g*z,f+=j.b*z;else if(F.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(F.sh.coefficients[Y],z);R++}else if(F.isDirectionalLight){let Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ce=F.shadow,J=t.get(F);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=F.shadow.matrix,y++}n.directional[d]=Y,d++}else if(F.isSpotLight){let Y=e.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy(j).multiplyScalar(z),Y.distance=q,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,n.spot[x]=Y;let ce=F.shadow;if(F.map&&(n.spotLightMap[C]=F.map,C++,ce.updateMatrices(F),F.castShadow&&T++),n.spotLightMatrix[x]=ce.matrix,F.castShadow){let J=t.get(F);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=Q,_++}x++}else if(F.isRectAreaLight){let Y=e.get(F);Y.color.copy(j).multiplyScalar(z),Y.halfWidth.set(F.width*.5,0,0),Y.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=Y,m++}else if(F.isPointLight){let Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){let ce=F.shadow,J=t.get(F);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,J.shadowCameraNear=ce.camera.near,J.shadowCameraFar=ce.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=F.shadow.matrix,v++}n.point[g]=Y,g++}else if(F.isHemisphereLight){let Y=e.get(F);Y.skyColor.copy(F.color).multiplyScalar(z),Y.groundColor.copy(F.groundColor).multiplyScalar(z),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==v||L.numSpotShadows!==_||L.numSpotMaps!==C||L.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=d,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=_,L.numSpotMaps=C,L.numLightProbes=R,n.version=Rb++)}function c(l,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let v=l[p];if(v.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(v.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function zm(i){let e=new Pb(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Ib(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new zm(i),e.set(r,[a])):s>=o.length?(a=new zm(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`;function Ub(i,e,t){let n=new Zs,r=new Be,s=new Be,o=new ct,a=new Ic({depthPacking:em}),c=new Dc,l={},u=t.maxTextureSize,h={[Nn]:fn,[fn]:Nn,[At]:At},f=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Db,fragmentShader:Lb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new je(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(T,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),j=i.state;j.setBlending(On),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let z=p!==Di&&this.type===Di,q=p===Di&&this.type!==Di;for(let Q=0,Y=T.length;Q<Y;Q++){let ce=T[Q],J=ce.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let de=J.getFrameExtents();if(r.multiply(de),s.copy(J.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,J.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,J.mapSize.y=s.y)),J.map===null||z===!0||q===!0){let he=this.type!==Di?{minFilter:qt,magFilter:qt}:{};J.map!==null&&J.map.dispose(),J.map=new hn(r.x,r.y,he),J.map.texture.name=ce.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let ee=J.getViewportCount();for(let he=0;he<ee;he++){let pe=J.getViewport(he);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),j.viewport(o),J.updateMatrices(ce,he),n=J.getFrustum(),_(R,L,J.camera,ce,this.type)}J.isPointLightShadow!==!0&&this.type===Di&&y(J,L),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,F)};function y(T,R){let L=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hn(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,d,x,null)}function v(T,R,L,b){let S=null,F=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)S=F;else if(S=L.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let j=S.uuid,z=R.uuid,q=l[j];q===void 0&&(q={},l[j]=q);let Q=q[z];Q===void 0&&(Q=S.clone(),q[z]=Q,R.addEventListener("dispose",C)),S=Q}if(S.visible=R.visible,S.wireframe=R.wireframe,b===Di?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let j=i.properties.get(S);j.light=L}return S}function _(T,R,L,b,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Di)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let z=e.update(T),q=T.material;if(Array.isArray(q)){let Q=z.groups;for(let Y=0,ce=Q.length;Y<ce;Y++){let J=Q[Y],de=q[J.materialIndex];if(de&&de.visible){let ee=v(T,de,b,S);T.onBeforeShadow(i,T,R,L,z,ee,J),i.renderBufferDirect(L,null,z,ee,T,J),T.onAfterShadow(i,T,R,L,z,ee,J)}}}else if(q.visible){let Q=v(T,q,b,S);T.onBeforeShadow(i,T,R,L,z,Q,null),i.renderBufferDirect(L,null,z,Q,T,null),T.onAfterShadow(i,T,R,L,z,Q,null)}}let j=T.children;for(let z=0,q=j.length;z<q;z++)_(j[z],R,L,b,S)}function C(T){T.target.removeEventListener("dispose",C);for(let L in l){let b=l[L],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var Nb={[Vc]:Gc,[Wc]:Yc,[Xc]:Zc,[Zr]:qc,[Gc]:Vc,[Yc]:Wc,[Zc]:Xc,[qc]:Zr};function Ob(i,e){function t(){let B=!1,Se=new ct,ae=null,fe=new ct(0,0,0,0);return{setMask:function(Re){ae!==Re&&!B&&(i.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){B=Re},setClear:function(Re,Ce,Je,ot,It){It===!0&&(Re*=ot,Ce*=ot,Je*=ot),Se.set(Re,Ce,Je,ot),fe.equals(Se)===!1&&(i.clearColor(Re,Ce,Je,ot),fe.copy(Se))},reset:function(){B=!1,ae=null,fe.set(-1,0,0,0)}}}function n(){let B=!1,Se=!1,ae=null,fe=null,Re=null;return{setReversed:function(Ce){if(Se!==Ce){let Je=e.get("EXT_clip_control");Se?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);let ot=Re;Re=null,this.setClear(ot)}Se=Ce},getReversed:function(){return Se},setTest:function(Ce){Ce?te(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Ce){ae!==Ce&&!B&&(i.depthMask(Ce),ae=Ce)},setFunc:function(Ce){if(Se&&(Ce=Nb[Ce]),fe!==Ce){switch(Ce){case Vc:i.depthFunc(i.NEVER);break;case Gc:i.depthFunc(i.ALWAYS);break;case Wc:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case Xc:i.depthFunc(i.EQUAL);break;case qc:i.depthFunc(i.GEQUAL);break;case Yc:i.depthFunc(i.GREATER);break;case Zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Ce}},setLocked:function(Ce){B=Ce},setClear:function(Ce){Re!==Ce&&(Se&&(Ce=1-Ce),i.clearDepth(Ce),Re=Ce)},reset:function(){B=!1,ae=null,fe=null,Re=null,Se=!1}}}function r(){let B=!1,Se=null,ae=null,fe=null,Re=null,Ce=null,Je=null,ot=null,It=null;return{setTest:function(Ge){B||(Ge?te(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Ge){Se!==Ge&&!B&&(i.stencilMask(Ge),Se=Ge)},setFunc:function(Ge,mt,ge){(ae!==Ge||fe!==mt||Re!==ge)&&(i.stencilFunc(Ge,mt,ge),ae=Ge,fe=mt,Re=ge)},setOp:function(Ge,mt,ge){(Ce!==Ge||Je!==mt||ot!==ge)&&(i.stencilOp(Ge,mt,ge),Ce=Ge,Je=mt,ot=ge)},setLocked:function(Ge){B=Ge},setClear:function(Ge){It!==Ge&&(i.clearStencil(Ge),It=Ge)},reset:function(){B=!1,Se=null,ae=null,fe=null,Re=null,Ce=null,Je=null,ot=null,It=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,C=null,T=null,R=new ke(0,0,0),L=0,b=!1,S=null,F=null,j=null,z=null,q=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ce=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=ce>=1):J.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=ce>=2);let de=null,ee={},he=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),ne=new ct().fromArray(he),H=new ct().fromArray(pe);function ue(B,Se,ae,fe){let Re=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(B,Ce),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<ae;Je++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Se+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Ce}let le={};le[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Zr),We(!1),Xe(ch),te(i.CULL_FACE),O(On);function te(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function xe(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function me(B,Se){return h[B]!==Se?(i.bindFramebuffer(B,Se),h[B]=Se,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function we(B,Se){let ae=d,fe=!1;if(B){ae=f.get(Se),ae===void 0&&(ae=[],f.set(Se,ae));let Re=B.textures;if(ae.length!==Re.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Je=Re.length;Ce<Je;Ce++)ae[Ce]=i.COLOR_ATTACHMENT0+Ce;ae.length=Re.length,fe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ae)}function He(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let De={[Zn]:i.FUNC_ADD,[Cp]:i.FUNC_SUBTRACT,[Pp]:i.FUNC_REVERSE_SUBTRACT};De[Ip]=i.MIN,De[Dp]=i.MAX;let Le={[aa]:i.ZERO,[Pr]:i.ONE,[Lp]:i.SRC_COLOR,[Vs]:i.SRC_ALPHA,[Bp]:i.SRC_ALPHA_SATURATE,[Op]:i.DST_COLOR,[Np]:i.DST_ALPHA,[Up]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[Fp]:i.ONE_MINUS_DST_COLOR,[ca]:i.ONE_MINUS_DST_ALPHA,[zp]:i.CONSTANT_COLOR,[kp]:i.ONE_MINUS_CONSTANT_COLOR,[Hp]:i.CONSTANT_ALPHA,[Vp]:i.ONE_MINUS_CONSTANT_ALPHA};function O(B,Se,ae,fe,Re,Ce,Je,ot,It,Ge){if(B===On){x===!0&&(xe(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),B!==Hc){if(B!==m||Ge!==b){if((p!==Zn||_!==Zn)&&(i.blendEquation(i.FUNC_ADD),p=Zn,_=Zn),Ge)switch(B){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,v=null,C=null,T=null,R.set(0,0,0),L=0,m=B,b=Ge}return}Re=Re||Se,Ce=Ce||ae,Je=Je||fe,(Se!==p||Re!==_)&&(i.blendEquationSeparate(De[Se],De[Re]),p=Se,_=Re),(ae!==y||fe!==v||Ce!==C||Je!==T)&&(i.blendFuncSeparate(Le[ae],Le[fe],Le[Ce],Le[Je]),y=ae,v=fe,C=Ce,T=Je),(ot.equals(R)===!1||It!==L)&&(i.blendColor(ot.r,ot.g,ot.b,It),R.copy(ot),L=It),m=B,b=!1}function lt(B,Se){B.side===At?xe(i.CULL_FACE):te(i.CULL_FACE);let ae=B.side===fn;Se&&(ae=!ae),We(ae),B.blending===ui&&B.transparent===!1?O(On):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let fe=B.stencilWrite;a.setTest(fe),fe&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),nt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function Xe(B){B!==Tp?(te(i.CULL_FACE),B!==F&&(B===ch?i.cullFace(i.BACK):B===Ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),F=B}function Pe(B){B!==j&&(Y&&i.lineWidth(B),j=B)}function nt(B,Se,ae){B?(te(i.POLYGON_OFFSET_FILL),(z!==Se||q!==ae)&&(i.polygonOffset(Se,ae),z=Se,q=ae)):xe(i.POLYGON_OFFSET_FILL)}function Z(B){B?te(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function A(B){B===void 0&&(B=i.TEXTURE0+Q-1),de!==B&&(i.activeTexture(B),de=B)}function M(B,Se,ae){ae===void 0&&(de===null?ae=i.TEXTURE0+Q-1:ae=de);let fe=ee[ae];fe===void 0&&(fe={type:void 0,texture:void 0},ee[ae]=fe),(fe.type!==B||fe.texture!==Se)&&(de!==ae&&(i.activeTexture(ae),de=ae),i.bindTexture(B,Se||le[B]),fe.type=B,fe.texture=Se)}function D(){let B=ee[de];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function I(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(B){ne.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ne.copy(B))}function Ee(B){H.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),H.copy(B))}function Ye(B,Se){let ae=l.get(Se);ae===void 0&&(ae=new WeakMap,l.set(Se,ae));let fe=ae.get(B);fe===void 0&&(fe=i.getUniformBlockIndex(Se,B.name),ae.set(B,fe))}function Me(B,Se){let fe=l.get(Se).get(B);c.get(Se)!==fe&&(i.uniformBlockBinding(Se,fe,B.__bindingPointIndex),c.set(Se,fe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,ee={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,C=null,T=null,R=new ke(0,0,0),L=0,b=!1,S=null,F=null,j=null,z=null,q=null,ne.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:xe,bindFramebuffer:me,drawBuffers:we,useProgram:He,setBlending:O,setMaterial:lt,setFlipSided:We,setCullFace:Xe,setLineWidth:Pe,setPolygonOffset:nt,setScissorTest:Z,activeTexture:A,bindTexture:M,unbindTexture:D,compressedTexImage2D:I,compressedTexImage3D:U,texImage2D:ye,texImage3D:Te,updateUBOMapping:Ye,uniformBlockBinding:Me,texStorage2D:_e,texStorage3D:ie,texSubImage2D:N,texSubImage3D:oe,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:Ie,viewport:Ee,reset:Oe}}function Fb(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return d?new OffscreenCanvas(A,M):Ws("canvas")}function x(A,M,D){let I=1,U=Z(A);if((U.width>D||U.height>D)&&(I=D/Math.max(U.width,U.height)),I<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let N=Math.floor(I*U.width),oe=Math.floor(I*U.height);h===void 0&&(h=g(N,oe));let X=M?g(N,oe):h;return X.width=N,X.height=oe,X.getContext("2d").drawImage(A,0,0,N,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+N+"x"+oe+")."),X}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,M,D,I,U=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let N=M;if(M===i.RED&&(D===i.FLOAT&&(N=i.R32F),D===i.HALF_FLOAT&&(N=i.R16F),D===i.UNSIGNED_BYTE&&(N=i.R8)),M===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(N=i.R8UI),D===i.UNSIGNED_SHORT&&(N=i.R16UI),D===i.UNSIGNED_INT&&(N=i.R32UI),D===i.BYTE&&(N=i.R8I),D===i.SHORT&&(N=i.R16I),D===i.INT&&(N=i.R32I)),M===i.RG&&(D===i.FLOAT&&(N=i.RG32F),D===i.HALF_FLOAT&&(N=i.RG16F),D===i.UNSIGNED_BYTE&&(N=i.RG8)),M===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(N=i.RG8UI),D===i.UNSIGNED_SHORT&&(N=i.RG16UI),D===i.UNSIGNED_INT&&(N=i.RG32UI),D===i.BYTE&&(N=i.RG8I),D===i.SHORT&&(N=i.RG16I),D===i.INT&&(N=i.RG32I)),M===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(N=i.RGB8UI),D===i.UNSIGNED_SHORT&&(N=i.RGB16UI),D===i.UNSIGNED_INT&&(N=i.RGB32UI),D===i.BYTE&&(N=i.RGB8I),D===i.SHORT&&(N=i.RGB16I),D===i.INT&&(N=i.RGB32I)),M===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),D===i.UNSIGNED_INT&&(N=i.RGBA32UI),D===i.BYTE&&(N=i.RGBA8I),D===i.SHORT&&(N=i.RGBA16I),D===i.INT&&(N=i.RGBA32I)),M===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),M===i.RGBA){let oe=U?Io:ht.getTransfer(I);D===i.FLOAT&&(N=i.RGBA32F),D===i.HALF_FLOAT&&(N=i.RGBA16F),D===i.UNSIGNED_BYTE&&(N=oe===bt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function _(A,M){let D;return A?M===null||M===Ir||M===rs?D=i.DEPTH24_STENCIL8:M===Fn?D=i.DEPTH32F_STENCIL8:M===Js&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ir||M===rs?D=i.DEPTH_COMPONENT24:M===Fn?D=i.DEPTH_COMPONENT32F:M===Js&&(D=i.DEPTH_COMPONENT16),D}function C(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Yt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){let M=A.target;M.removeEventListener("dispose",T),L(M),M.isVideoTexture&&u.delete(M)}function R(A){let M=A.target;M.removeEventListener("dispose",R),S(M)}function L(A){let M=n.get(A);if(M.__webglInit===void 0)return;let D=A.source,I=f.get(D);if(I){let U=I[M.__cacheKey];U.usedTimes--,U.usedTimes===0&&b(A),Object.keys(I).length===0&&f.delete(D)}n.remove(A)}function b(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let D=A.source,I=f.get(D);delete I[M.__cacheKey],o.memory.textures--}function S(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(M.__webglFramebuffer[I]))for(let U=0;U<M.__webglFramebuffer[I].length;U++)i.deleteFramebuffer(M.__webglFramebuffer[I][U]);else i.deleteFramebuffer(M.__webglFramebuffer[I]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[I])}else{if(Array.isArray(M.__webglFramebuffer))for(let I=0;I<M.__webglFramebuffer.length;I++)i.deleteFramebuffer(M.__webglFramebuffer[I]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let I=0;I<M.__webglColorRenderbuffer.length;I++)M.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[I]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let D=A.textures;for(let I=0,U=D.length;I<U;I++){let N=n.get(D[I]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),o.memory.textures--),n.remove(D[I])}n.remove(A)}let F=0;function j(){F=0}function z(){let A=F;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function q(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Q(A,M){let D=n.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){let I=A.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(D,A,M);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+M)}function Y(A,M){let D=n.get(A);if(A.version>0&&D.__version!==A.version){H(D,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+M)}function ce(A,M){let D=n.get(A);if(A.version>0&&D.__version!==A.version){H(D,A,M);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+M)}function J(A,M){let D=n.get(A);if(A.version>0&&D.__version!==A.version){ue(D,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+M)}let de={[hi]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[Gs]:i.MIRRORED_REPEAT},ee={[qt]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},he={[nm]:i.NEVER,[cm]:i.ALWAYS,[im]:i.LESS,[Th]:i.LEQUAL,[rm]:i.EQUAL,[am]:i.GEQUAL,[sm]:i.GREATER,[om]:i.NOTEQUAL};function pe(A,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Yt||M.magFilter===js||M.magFilter===is||M.magFilter===mi||M.minFilter===Yt||M.minFilter===js||M.minFilter===is||M.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,de[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,de[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,de[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ee[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ee[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qt||M.minFilter!==is&&M.minFilter!==mi||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ne(A,M){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));let I=M.source,U=f.get(I);U===void 0&&(U={},f.set(I,U));let N=q(M);if(N!==A.__cacheKey){U[N]===void 0&&(U[N]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),U[N].usedTimes++;let oe=U[A.__cacheKey];oe!==void 0&&(U[A.__cacheKey].usedTimes--,oe.usedTimes===0&&b(M)),A.__cacheKey=N,A.__webglTexture=U[N].texture}return D}function H(A,M,D){let I=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(I=i.TEXTURE_3D);let U=ne(A,M),N=M.source;t.bindTexture(I,A.__webglTexture,i.TEXTURE0+D);let oe=n.get(N);if(N.version!==oe.__version||U===!0){t.activeTexture(i.TEXTURE0+D);let X=ht.getPrimaries(ht.workingColorSpace),$=M.colorSpace===gi?null:ht.getPrimaries(M.colorSpace),_e=M.colorSpace===gi||X===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ie=x(M.image,!1,r.maxTextureSize);ie=nt(M,ie);let ye=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),Ie=v(M.internalFormat,ye,Te,M.colorSpace,M.isVideoTexture);pe(I,M);let Ee,Ye=M.mipmaps,Me=M.isVideoTexture!==!0,Oe=oe.__version===void 0||U===!0,B=N.dataReady,Se=C(M,ie);if(M.isDepthTexture)Ie=_(M.format===$r,M.type),Oe&&(Me?t.texStorage2D(i.TEXTURE_2D,1,Ie,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ye,Te,null));else if(M.isDataTexture)if(Ye.length>0){Me&&Oe&&t.texStorage2D(i.TEXTURE_2D,Se,Ie,Ye[0].width,Ye[0].height);for(let ae=0,fe=Ye.length;ae<fe;ae++)Ee=Ye[ae],Me?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,ye,Te,Ee.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,Ee.width,Ee.height,0,ye,Te,Ee.data);M.generateMipmaps=!1}else Me?(Oe&&t.texStorage2D(i.TEXTURE_2D,Se,Ie,ie.width,ie.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ye,Te,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ye,Te,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Me&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ie,Ye[0].width,Ye[0].height,ie.depth);for(let ae=0,fe=Ye.length;ae<fe;ae++)if(Ee=Ye[ae],M.format!==sn)if(ye!==null)if(Me){if(B)if(M.layerUpdates.size>0){let Re=Lh(Ee.width,Ee.height,M.format,M.type);for(let Ce of M.layerUpdates){let Je=Ee.data.subarray(Ce*Re/Ee.data.BYTES_PER_ELEMENT,(Ce+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ce,Ee.width,Ee.height,1,ye,Je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,ie.depth,ye,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,Ee.width,Ee.height,ie.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,ie.depth,ye,Te,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,Ee.width,Ee.height,ie.depth,0,ye,Te,Ee.data)}else{Me&&Oe&&t.texStorage2D(i.TEXTURE_2D,Se,Ie,Ye[0].width,Ye[0].height);for(let ae=0,fe=Ye.length;ae<fe;ae++)Ee=Ye[ae],M.format!==sn?ye!==null?Me?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ie,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,ye,Te,Ee.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,Ee.width,Ee.height,0,ye,Te,Ee.data)}else if(M.isDataArrayTexture)if(Me){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ie,ie.width,ie.height,ie.depth),B)if(M.layerUpdates.size>0){let ae=Lh(ie.width,ie.height,M.format,M.type);for(let fe of M.layerUpdates){let Re=ie.data.subarray(fe*ae/ie.data.BYTES_PER_ELEMENT,(fe+1)*ae/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,ie.width,ie.height,1,ye,Te,Re)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,Te,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ie.width,ie.height,ie.depth,0,ye,Te,ie.data);else if(M.isData3DTexture)Me?(Oe&&t.texStorage3D(i.TEXTURE_3D,Se,Ie,ie.width,ie.height,ie.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,Te,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ie.width,ie.height,ie.depth,0,ye,Te,ie.data);else if(M.isFramebufferTexture){if(Oe)if(Me)t.texStorage2D(i.TEXTURE_2D,Se,Ie,ie.width,ie.height);else{let ae=ie.width,fe=ie.height;for(let Re=0;Re<Se;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ie,ae,fe,0,ye,Te,null),ae>>=1,fe>>=1}}else if(Ye.length>0){if(Me&&Oe){let ae=Z(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ie,ae.width,ae.height)}for(let ae=0,fe=Ye.length;ae<fe;ae++)Ee=Ye[ae],Me?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye,Te,Ee):t.texImage2D(i.TEXTURE_2D,ae,Ie,ye,Te,Ee);M.generateMipmaps=!1}else if(Me){if(Oe){let ae=Z(ie);t.texStorage2D(i.TEXTURE_2D,Se,Ie,ae.width,ae.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Te,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ie,ye,Te,ie);m(M)&&p(I),oe.__version=N.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ue(A,M,D){if(M.image.length!==6)return;let I=ne(A,M),U=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+D);let N=n.get(U);if(U.version!==N.__version||I===!0){t.activeTexture(i.TEXTURE0+D);let oe=ht.getPrimaries(ht.workingColorSpace),X=M.colorSpace===gi?null:ht.getPrimaries(M.colorSpace),$=M.colorSpace===gi||oe===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let _e=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let fe=0;fe<6;fe++)!_e&&!ie?ye[fe]=x(M.image[fe],!0,r.maxCubemapSize):ye[fe]=ie?M.image[fe].image:M.image[fe],ye[fe]=nt(M,ye[fe]);let Te=ye[0],Ie=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),Ye=v(M.internalFormat,Ie,Ee,M.colorSpace),Me=M.isVideoTexture!==!0,Oe=N.__version===void 0||I===!0,B=U.dataReady,Se=C(M,Te);pe(i.TEXTURE_CUBE_MAP,M);let ae;if(_e){Me&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ye,Te.width,Te.height);for(let fe=0;fe<6;fe++){ae=ye[fe].mipmaps;for(let Re=0;Re<ae.length;Re++){let Ce=ae[Re];M.format!==sn?Ie!==null?Me?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,Ye,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,0,0,Ce.width,Ce.height,Ie,Ee,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,Ye,Ce.width,Ce.height,0,Ie,Ee,Ce.data)}}}else{if(ae=M.mipmaps,Me&&Oe){ae.length>0&&Se++;let fe=Z(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ye,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ie){Me?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ye[fe].width,ye[fe].height,Ie,Ee,ye[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ye,ye[fe].width,ye[fe].height,0,Ie,Ee,ye[fe].data);for(let Re=0;Re<ae.length;Re++){let Je=ae[Re].image[fe].image;Me?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,0,0,Je.width,Je.height,Ie,Ee,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,Ye,Je.width,Je.height,0,Ie,Ee,Je.data)}}else{Me?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ie,Ee,ye[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ye,Ie,Ee,ye[fe]);for(let Re=0;Re<ae.length;Re++){let Ce=ae[Re];Me?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,0,0,Ie,Ee,Ce.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,Ye,Ie,Ee,Ce.image[fe])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),N.__version=U.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function le(A,M,D,I,U,N){let oe=s.convert(D.format,D.colorSpace),X=s.convert(D.type),$=v(D.internalFormat,oe,X,D.colorSpace),_e=n.get(M),ie=n.get(D);if(ie.__renderTarget=M,!_e.__hasExternalTextures){let ye=Math.max(1,M.width>>N),Te=Math.max(1,M.height>>N);U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?t.texImage3D(U,N,$,ye,Te,M.depth,0,oe,X,null):t.texImage2D(U,N,$,ye,Te,0,oe,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Xe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,U,ie.__webglTexture,0,We(M)):(U===i.TEXTURE_2D||U>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,U,ie.__webglTexture,N),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(A,M,D){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let I=M.depthTexture,U=I&&I.isDepthTexture?I.type:null,N=_(M.stencilBuffer,U),oe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=We(M);Xe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X,N,M.width,M.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,X,N,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,N,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,A)}else{let I=M.textures;for(let U=0;U<I.length;U++){let N=I[U],oe=s.convert(N.format,N.colorSpace),X=s.convert(N.type),$=v(N.internalFormat,oe,X,N.colorSpace),_e=We(M);D&&Xe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,$,M.width,M.height):Xe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=n.get(M.depthTexture);I.__renderTarget=M,(!I.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);let U=I.__webglTexture,N=We(M);if(M.depthTexture.format===qr)Xe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0);else if(M.depthTexture.format===$r)Xe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function me(A){let M=n.get(A),D=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let I=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),I){let U=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,I.removeEventListener("dispose",U)};I.addEventListener("dispose",U),M.__depthDisposeCallback=U}M.__boundDepthTexture=I}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");xe(M.__webglFramebuffer,A)}else if(D){M.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[I]),M.__webglDepthbuffer[I]===void 0)M.__webglDepthbuffer[I]=i.createRenderbuffer(),te(M.__webglDepthbuffer[I],A,!1);else{let U=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=M.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,N)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),te(M.__webglDepthbuffer,A,!1);else{let I=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,U)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(A,M,D){let I=n.get(A);M!==void 0&&le(I.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&me(A)}function He(A){let M=A.texture,D=n.get(A),I=n.get(M);A.addEventListener("dispose",R);let U=A.textures,N=A.isWebGLCubeRenderTarget===!0,oe=U.length>1;if(oe||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=M.version,o.memory.textures++),N){D.__webglFramebuffer=[];for(let X=0;X<6;X++)if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[X]=[];for(let $=0;$<M.mipmaps.length;$++)D.__webglFramebuffer[X][$]=i.createFramebuffer()}else D.__webglFramebuffer[X]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let X=0;X<M.mipmaps.length;X++)D.__webglFramebuffer[X]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(oe)for(let X=0,$=U.length;X<$;X++){let _e=n.get(U[X]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let X=0;X<U.length;X++){let $=U[X];D.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[X]);let _e=s.convert($.format,$.colorSpace),ie=s.convert($.type),ye=v($.internalFormat,_e,ie,$.colorSpace,A.isXRRenderTarget===!0),Te=We(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ye,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,D.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),te(D.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),pe(i.TEXTURE_CUBE_MAP,M);for(let X=0;X<6;X++)if(M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)le(D.__webglFramebuffer[X][$],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$);else le(D.__webglFramebuffer[X],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let X=0,$=U.length;X<$;X++){let _e=U[X],ie=n.get(_e);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),pe(i.TEXTURE_2D,_e),le(D.__webglFramebuffer,A,_e,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,0),m(_e)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,I.__webglTexture),pe(X,M),M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)le(D.__webglFramebuffer[$],A,M,i.COLOR_ATTACHMENT0,X,$);else le(D.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,X,0);m(M)&&p(X),t.unbindTexture()}A.depthBuffer&&me(A)}function De(A){let M=A.textures;for(let D=0,I=M.length;D<I;D++){let U=M[D];if(m(U)){let N=y(A),oe=n.get(U).__webglTexture;t.bindTexture(N,oe),p(N),t.unbindTexture()}}}let Le=[],O=[];function lt(A){if(A.samples>0){if(Xe(A)===!1){let M=A.textures,D=A.width,I=A.height,U=i.COLOR_BUFFER_BIT,N=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(A),X=M.length>1;if(X)for(let $=0;$<M.length;$++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let $=0;$<M.length;$++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(U|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(U|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[$]);let _e=n.get(M[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,D,I,0,0,D,I,U,i.NEAREST),c===!0&&(Le.length=0,O.length=0,Le.push(i.COLOR_ATTACHMENT0+$),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Le.push(N),O.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let $=0;$<M.length;$++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,oe.__webglColorRenderbuffer[$]);let _e=n.get(M[$]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function We(A){return Math.min(r.maxSamples,A.samples)}function Xe(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(A){let M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function nt(A,M){let D=A.colorSpace,I=A.format,U=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==un&&D!==gi&&(ht.getTransfer(D)===bt?(I!==sn||U!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),M}function Z(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=ce,this.setTextureCube=J,this.rebindTextures=we,this.setupRenderTarget=He,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Xe}function Bb(i,e){function t(n,r=gi){let s,o=ht.getTransfer(r);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===el)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.BYTE;if(n===gh)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===Jc)return i.INT;if(n===Ir)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===_h)return i.ALPHA;if(n===yh)return i.RGB;if(n===sn)return i.RGBA;if(n===vh)return i.LUMINANCE;if(n===Mh)return i.LUMINANCE_ALPHA;if(n===qr)return i.DEPTH_COMPONENT;if(n===$r)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===bh)return i.RG;if(n===il)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===ha||n===fa||n===da||n===pa)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===ol||n===al||n===cl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===sl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===ul||n===hl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ll||n===ul)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===hl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===bl||n===Sl||n===El||n===wl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===Tl||n===Al)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ma)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sh||n===Rl||n===Cl||n===Pl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ma)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Rl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var zb={type:"move"},ya=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zb)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
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

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:kb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yh=class extends wi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,x=new qh,m=t.getContextAttributes(),p=null,y=null,v=[],_=[],C=new Be,T=null,R=new Xt;R.viewport=new ct;let L=new Xt;L.viewport=new ct;let b=[R,L],S=new zc,F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ue=v[H];return ue===void 0&&(ue=new ya,v[H]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(H){let ue=v[H];return ue===void 0&&(ue=new ya,v[H]=ue),ue.getGripSpace()},this.getHand=function(H){let ue=v[H];return ue===void 0&&(ue=new ya,v[H]=ue),ue.getHandSpace()};function z(H){let ue=_.indexOf(H.inputSource);if(ue===-1)return;let le=v[ue];le!==void 0&&(le.update(H.inputSource,H.frame,l||o),le.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Q);for(let H=0;H<v.length;H++){let ue=_[H];ue!==null&&(_[H]=null,v[H].disconnect(ue))}F=null,j=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,y=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let le=null,te=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?$r:qr,te=m.stencil?rs:Ir);let me={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new hn(f.textureWidth,f.textureHeight,{format:sn,type:Kn,depthTexture:new Yo(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new hn(d.framebufferWidth,d.framebufferHeight,{format:sn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(H){for(let ue=0;ue<H.removed.length;ue++){let le=H.removed[ue],te=_.indexOf(le);te>=0&&(_[te]=null,v[te].disconnect(le))}for(let ue=0;ue<H.added.length;ue++){let le=H.added[ue],te=_.indexOf(le);if(te===-1){for(let me=0;me<v.length;me++)if(me>=_.length){_.push(le),te=me;break}else if(_[me]===null){_[me]=le,te=me;break}if(te===-1)break}let xe=v[te];xe&&xe.connect(le)}}let Y=new P,ce=new P;function J(H,ue,le){Y.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(le.matrixWorld);let te=Y.distanceTo(ce),xe=ue.projectionMatrix.elements,me=le.projectionMatrix.elements,we=xe[14]/(xe[10]-1),He=xe[14]/(xe[10]+1),De=(xe[9]+1)/xe[5],Le=(xe[9]-1)/xe[5],O=(xe[8]-1)/xe[0],lt=(me[8]+1)/me[0],We=we*O,Xe=we*lt,Pe=te/(-O+lt),nt=Pe*-O;if(ue.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(nt),H.translateZ(Pe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),xe[10]===-1)H.projectionMatrix.copy(ue.projectionMatrix),H.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let Z=we+Pe,A=He+Pe,M=We-nt,D=Xe+(te-nt),I=De*He/A*Z,U=Le*He/A*Z;H.projectionMatrix.makePerspective(M,D,I,U,Z,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function de(H,ue){ue===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ue.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ue=H.near,le=H.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(le=x.depthFar)),S.near=L.near=R.near=ue,S.far=L.far=R.far=le,(F!==S.near||j!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,j=S.far),R.layers.mask=H.layers.mask|2,L.layers.mask=H.layers.mask|4,S.layers.mask=R.layers.mask|L.layers.mask;let te=H.parent,xe=S.cameras;de(S,te);for(let me=0;me<xe.length;me++)de(xe[me],te);xe.length===2?J(S,R,L):S.projectionMatrix.copy(R.projectionMatrix),ee(H,S,te)};function ee(H,ue,le){le===null?H.matrix.copy(ue.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(ue.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ue.projectionMatrix),H.projectionMatrixInverse.copy(ue.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Jr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let he=null;function pe(H,ue){if(u=ue.getViewerPose(l||o),g=ue,u!==null){let le=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let te=!1;le.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let me=0;me<le.length;me++){let we=le[me],He=null;if(d!==null)He=d.getViewport(we);else{let Le=h.getViewSubImage(f,we);He=Le.viewport,me===0&&(e.setRenderTargetTextures(y,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(y))}let De=b[me];De===void 0&&(De=new Xt,De.layers.enable(me),De.viewport=new ct,b[me]=De),De.matrix.fromArray(we.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(we.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(He.x,He.y,He.width,He.height),me===0&&(S.matrix.copy(De.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),te===!0&&S.cameras.push(De)}let xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")){let me=h.getDepthInformation(le[0]);me&&me.isValid&&me.texture&&x.init(e,me,r.renderState)}}for(let le=0;le<v.length;le++){let te=_[le],xe=v[le];te!==null&&xe!==void 0&&xe.update(te,ue,l||o)}he&&he(H,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}let ne=new km;ne.setAnimationLoop(pe),this.setAnimationLoop=function(H){he=H},this.dispose=function(){}}},ls=new fi,Vb=new Ke;function Gb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ph(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,ls.copy(_),ls.x*=-1,ls.y*=-1,ls.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(ls)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wb(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=r[y.id];_===void 0&&(g(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(y,C);let T=e.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function u(y){let v=h();y.__bindingPointIndex=v;let _=i.createBuffer(),C=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=r[y.id],_=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,R=_.length;T<R;T++){let L=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,S=L.length;b<S;b++){let F=L[b];if(d(F,T,b,C)===!0){let j=F.__offset,z=Array.isArray(F.value)?F.value:[F.value],q=0;for(let Q=0;Q<z.length;Q++){let Y=z[Q],ce=x(Y);typeof Y=="number"||typeof Y=="boolean"?(F.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,j+q,F.__data)):Y.isMatrix3?(F.__data[0]=Y.elements[0],F.__data[1]=Y.elements[1],F.__data[2]=Y.elements[2],F.__data[3]=0,F.__data[4]=Y.elements[3],F.__data[5]=Y.elements[4],F.__data[6]=Y.elements[5],F.__data[7]=0,F.__data[8]=Y.elements[6],F.__data[9]=Y.elements[7],F.__data[10]=Y.elements[8],F.__data[11]=0):(Y.toArray(F.__data,q),q+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,_,C){let T=y.value,R=v+"_"+_;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let L=C[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(y){let v=y.uniforms,_=0,C=16;for(let R=0,L=v.length;R<L;R++){let b=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,F=b.length;S<F;S++){let j=b[S],z=Array.isArray(j.value)?j.value:[j.value];for(let q=0,Q=z.length;q<Q;q++){let Y=z[q],ce=x(Y),J=_%C,de=J%ce.boundary,ee=J+de;_+=de,ee!==0&&C-ee<ce.storage&&(_+=C-ee),j.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=_,_+=ce.storage}}}let T=_%C;return T>0&&(_+=C-T),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Ul=class{constructor(e={}){let{canvas:t=lm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=pi,this.toneMappingExposure=1;let _=this,C=!1,T=0,R=0,L=null,b=-1,S=null,F=new ct,j=new ct,z=null,q=new ke(0),Q=0,Y=t.width,ce=t.height,J=1,de=null,ee=null,he=new ct(0,0,Y,ce),pe=new ct(0,0,Y,ce),ne=!1,H=new Zs,ue=!1,le=!1;this.transmissionResolutionScale=1;let te=new Ke,xe=new Ke,me=new P,we=new ct,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Le(){return L===null?J:1}let O=n;function lt(w,V){return t.getContext(w,V)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),O===null){let V="webgl2";if(O=lt(V,w),O===null)throw lt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let We,Xe,Pe,nt,Z,A,M,D,I,U,N,oe,X,$,_e,ie,ye,Te,Ie,Ee,Ye,Me,Oe,B;function Se(){We=new aM(O),We.init(),Me=new Bb(O,We),Xe=new tM(O,We,e,Me),Pe=new Ob(O,We),Xe.reverseDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),nt=new uM(O),Z=new Sb,A=new Fb(O,We,Pe,Z,Xe,Me,nt),M=new iM(_),D=new oM(_),I=new x_(O),Oe=new Qv(O,I),U=new cM(O,I,nt,Oe),N=new fM(O,U,I,nt),Ie=new hM(O,Xe,A),ie=new nM(Z),oe=new bb(_,M,D,We,Xe,Oe,ie),X=new Gb(_,Z),$=new wb,_e=new Ib(We),Te=new Jv(_,M,D,Pe,N,d,c),ye=new Ub(_,N,Xe),B=new Wb(O,nt,Xe,Pe),Ee=new eM(O,We,nt),Ye=new lM(O,We,nt),nt.programs=oe.programs,_.capabilities=Xe,_.extensions=We,_.properties=Z,_.renderLists=$,_.shadowMap=ye,_.state=Pe,_.info=nt}Se();let ae=new Yh(_,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=We.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=We.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(Y,ce,!1))},this.getSize=function(w){return w.set(Y,ce)},this.setSize=function(w,V,re=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,ce=V,t.width=Math.floor(w*J),t.height=Math.floor(V*J),re===!0&&(t.style.width=w+"px",t.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(Y*J,ce*J).floor()},this.setDrawingBufferSize=function(w,V,re){Y=w,ce=V,J=re,t.width=Math.floor(w*re),t.height=Math.floor(V*re),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(he)},this.setViewport=function(w,V,re,se){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,V,re,se),Pe.viewport(F.copy(he).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(pe)},this.setScissor=function(w,V,re,se){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,V,re,se),Pe.scissor(j.copy(pe).multiplyScalar(J).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){Pe.setScissorTest(ne=w)},this.setOpaqueSort=function(w){de=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(w=!0,V=!0,re=!0){let se=0;if(w){let W=!1;if(L!==null){let be=L.texture.format;W=be===rl||be===il||be===nl}if(W){let be=L.texture.type,Ue=be===Kn||be===Ir||be===Js||be===rs||be===Qc||be===el,Fe=Te.getClearColor(),ze=Te.getClearAlpha(),et=Fe.r,tt=Fe.g,qe=Fe.b;Ue?(g[0]=et,g[1]=tt,g[2]=qe,g[3]=ze,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=et,x[1]=tt,x[2]=qe,x[3]=ze,O.clearBufferiv(O.COLOR,0,x))}else se|=O.COLOR_BUFFER_BIT}V&&(se|=O.DEPTH_BUFFER_BIT),re&&(se|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Te.dispose(),$.dispose(),_e.dispose(),Z.dispose(),M.dispose(),D.dispose(),N.dispose(),Oe.dispose(),B.dispose(),oe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",$e),ae.removeEventListener("sessionend",Tn),ft.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=nt.autoReset,V=ye.enabled,re=ye.autoUpdate,se=ye.needsUpdate,W=ye.type;Se(),nt.autoReset=w,ye.enabled=V,ye.autoUpdate=re,ye.needsUpdate=se,ye.type=W}function Ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Je(w){let V=w.target;V.removeEventListener("dispose",Je),ot(V)}function ot(w){It(w),Z.remove(w)}function It(w){let V=Z.get(w).programs;V!==void 0&&(V.forEach(function(re){oe.releaseProgram(re)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,re,se,W,be){V===null&&(V=He);let Ue=W.isMesh&&W.matrixWorld.determinant()<0,Fe=Da(w,V,re,se,W);Pe.setMaterial(se,Ue);let ze=re.index,et=1;if(se.wireframe===!0){if(ze=U.getWireframeAttribute(re),ze===void 0)return;et=2}let tt=re.drawRange,qe=re.attributes.position,dt=tt.start*et,gt=(tt.start+tt.count)*et;be!==null&&(dt=Math.max(dt,be.start*et),gt=Math.min(gt,(be.start+be.count)*et)),ze!==null?(dt=Math.max(dt,0),gt=Math.min(gt,ze.count)):qe!=null&&(dt=Math.max(dt,0),gt=Math.min(gt,qe.count));let Dt=gt-dt;if(Dt<0||Dt===1/0)return;Oe.setup(W,se,Fe,re,ze);let Et,at=Ee;if(ze!==null&&(Et=I.get(ze),at=Ye,at.setIndex(Et)),W.isMesh)se.wireframe===!0?(Pe.setLineWidth(se.wireframeLinewidth*Le()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(W.isLine){let Ze=se.linewidth;Ze===void 0&&(Ze=1),Pe.setLineWidth(Ze*Le()),W.isLineSegments?at.setMode(O.LINES):W.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else W.isPoints?at.setMode(O.POINTS):W.isSprite&&at.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)at.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))at.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ze=W._multiDrawStarts,Vt=W._multiDrawCounts,pt=W._multiDrawCount,zn=ze?I.get(ze).bytesPerElement:1,Mi=Z.get(se).currentProgram.getUniforms();for(let on=0;on<pt;on++)Mi.setValue(O,"_gl_DrawID",on),at.render(Ze[on]/zn,Vt[on])}else if(W.isInstancedMesh)at.renderInstances(dt,Dt,W.count);else if(re.isInstancedBufferGeometry){let Ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Vt=Math.min(re.instanceCount,Ze);at.renderInstances(dt,Dt,Vt)}else at.render(dt,Dt)};function Ge(w,V,re){w.transparent===!0&&w.side===At&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,qn(w,V,re),w.side=Nn,w.needsUpdate=!0,qn(w,V,re),w.side=At):qn(w,V,re)}this.compile=function(w,V,re=null){re===null&&(re=w),p=_e.get(re),p.init(V),v.push(p),re.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),w!==re&&w.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let se=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let be=W.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){let Fe=be[Ue];Ge(Fe,re,W),se.add(Fe)}else Ge(be,re,W),se.add(be)}),v.pop(),p=null,se},this.compileAsync=function(w,V,re=null){let se=this.compile(w,V,re);return new Promise(W=>{function be(){if(se.forEach(function(Ue){Z.get(Ue).currentProgram.isReady()&&se.delete(Ue)}),se.size===0){W(w);return}setTimeout(be,10)}We.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let mt=null;function ge(w){mt&&mt(w)}function $e(){ft.stop()}function Tn(){ft.start()}let ft=new km;ft.setAnimationLoop(ge),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(w){mt=w,ae.setAnimationLoop(w),w===null?ft.stop():ft.start()},ae.addEventListener("sessionstart",$e),ae.addEventListener("sessionend",Tn),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(V),V=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,V,L),p=_e.get(w,v.length),p.init(V),v.push(p),xe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),H.setFromProjectionMatrix(xe),le=this.localClippingEnabled,ue=ie.init(this.clippingPlanes,le),m=$.get(w,y.length),m.init(),y.push(m),ae.enabled===!0&&ae.isPresenting===!0){let be=_.xr.getDepthSensingMesh();be!==null&&Qt(be,V,-1/0,_.sortObjects)}Qt(w,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(de,ee),De=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,De&&Te.addToRenderList(m,w),this.info.render.frame++,ue===!0&&ie.beginShadows();let re=p.state.shadowsArray;ye.render(re,w,V),ue===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=m.opaque,W=m.transmissive;if(p.setupLights(),V.isArrayCamera){let be=V.cameras;if(W.length>0)for(let Ue=0,Fe=be.length;Ue<Fe;Ue++){let ze=be[Ue];Dn(se,W,w,ze)}De&&Te.render(w);for(let Ue=0,Fe=be.length;Ue<Fe;Ue++){let ze=be[Ue];Xn(m,w,ze,ze.viewport)}}else W.length>0&&Dn(se,W,w,V),De&&Te.render(w),Xn(m,w,V);L!==null&&R===0&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,V),Oe.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],ue===!0&&ie.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Qt(w,V,re,se){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){se&&we.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);let Ue=N.update(w),Fe=w.material;Fe.visible&&m.push(w,Ue,Fe,re,we.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){let Ue=N.update(w),Fe=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),we.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),we.copy(Ue.boundingSphere.center)),we.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(Fe)){let ze=Ue.groups;for(let et=0,tt=ze.length;et<tt;et++){let qe=ze[et],dt=Fe[qe.materialIndex];dt&&dt.visible&&m.push(w,Ue,dt,re,we.z,qe)}}else Fe.visible&&m.push(w,Ue,Fe,re,we.z,null)}}let be=w.children;for(let Ue=0,Fe=be.length;Ue<Fe;Ue++)Qt(be[Ue],V,re,se)}function Xn(w,V,re,se){let W=w.opaque,be=w.transmissive,Ue=w.transparent;p.setupLightsView(re),ue===!0&&ie.setGlobalState(_.clippingPlanes,re),se&&Pe.viewport(F.copy(se)),W.length>0&&vi(W,V,re),be.length>0&&vi(be,V,re),Ue.length>0&&vi(Ue,V,re),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Dn(w,V,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new hn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?rr:Kn,minFilter:mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let be=p.state.transmissionRenderTarget[se.id],Ue=se.viewport||F;be.setSize(Ue.z*_.transmissionResolutionScale,Ue.w*_.transmissionResolutionScale);let Fe=_.getRenderTarget();_.setRenderTarget(be),_.getClearColor(q),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),De&&Te.render(re);let ze=_.toneMapping;_.toneMapping=pi;let et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),ue===!0&&ie.setGlobalState(_.clippingPlanes,se),vi(w,re,se),A.updateMultisampleRenderTarget(be),A.updateRenderTargetMipmap(be),We.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let qe=0,dt=V.length;qe<dt;qe++){let gt=V[qe],Dt=gt.object,Et=gt.geometry,at=gt.material,Ze=gt.group;if(at.side===At&&Dt.layers.test(se.layers)){let Vt=at.side;at.side=fn,at.needsUpdate=!0,ur(Dt,re,se,Et,at,Ze),at.side=Vt,at.needsUpdate=!0,tt=!0}}tt===!0&&(A.updateMultisampleRenderTarget(be),A.updateRenderTargetMipmap(be))}_.setRenderTarget(Fe),_.setClearColor(q,Q),et!==void 0&&(se.viewport=et),_.toneMapping=ze}function vi(w,V,re){let se=V.isScene===!0?V.overrideMaterial:null;for(let W=0,be=w.length;W<be;W++){let Ue=w[W],Fe=Ue.object,ze=Ue.geometry,et=se===null?Ue.material:se,tt=Ue.group;Fe.layers.test(re.layers)&&ur(Fe,V,re,ze,et,tt)}}function ur(w,V,re,se,W,be){w.onBeforeRender(_,V,re,se,W,be),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(_,V,re,se,w,be),W.transparent===!0&&W.side===At&&W.forceSinglePass===!1?(W.side=fn,W.needsUpdate=!0,_.renderBufferDirect(re,V,se,W,w,be),W.side=Nn,W.needsUpdate=!0,_.renderBufferDirect(re,V,se,W,w,be),W.side=At):_.renderBufferDirect(re,V,se,W,w,be),w.onAfterRender(_,V,re,se,W,be)}function qn(w,V,re){V.isScene!==!0&&(V=He);let se=Z.get(w),W=p.state.lights,be=p.state.shadowsArray,Ue=W.state.version,Fe=oe.getParameters(w,W.state,be,V,re),ze=oe.getProgramCacheKey(Fe),et=se.programs;se.environment=w.isMeshStandardMaterial?V.environment:null,se.fog=V.fog,se.envMap=(w.isMeshStandardMaterial?D:M).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",Je),et=new Map,se.programs=et);let tt=et.get(ze);if(tt!==void 0){if(se.currentProgram===tt&&se.lightsStateVersion===Ue)return hr(w,Fe),tt}else Fe.uniforms=oe.getUniforms(w),w.onBeforeCompile(Fe,_),tt=oe.acquireProgram(Fe,ze),et.set(ze,tt),se.uniforms=Fe.uniforms;let qe=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=ie.uniform),hr(w,Fe),se.needsLights=go(w),se.lightsStateVersion=Ue,se.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.directionalShadowMap.value=W.state.directionalShadowMap,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotShadowMap.value=W.state.spotShadowMap,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMap.value=W.state.pointShadowMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),se.currentProgram=tt,se.uniformsList=null,tt}function ei(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=no.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function hr(w,V){let re=Z.get(w);re.outputColorSpace=V.outputColorSpace,re.batching=V.batching,re.batchingColor=V.batchingColor,re.instancing=V.instancing,re.instancingColor=V.instancingColor,re.instancingMorph=V.instancingMorph,re.skinning=V.skinning,re.morphTargets=V.morphTargets,re.morphNormals=V.morphNormals,re.morphColors=V.morphColors,re.morphTargetsCount=V.morphTargetsCount,re.numClippingPlanes=V.numClippingPlanes,re.numIntersection=V.numClipIntersection,re.vertexAlphas=V.vertexAlphas,re.vertexTangents=V.vertexTangents,re.toneMapping=V.toneMapping}function Da(w,V,re,se,W){V.isScene!==!0&&(V=He),A.resetTextureUnits();let be=V.fog,Ue=se.isMeshStandardMaterial?V.environment:null,Fe=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:un,ze=(se.isMeshStandardMaterial?D:M).get(se.envMap||Ue),et=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,tt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,gt=!!re.morphAttributes.color,Dt=pi;se.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=_.toneMapping);let Et=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,at=Et!==void 0?Et.length:0,Ze=Z.get(se),Vt=p.state.lights;if(ue===!0&&(le===!0||w!==S)){let Ft=w===S&&se.id===b;ie.setState(se,w,Ft)}let pt=!1;se.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Vt.state.version||Ze.outputColorSpace!==Fe||W.isBatchedMesh&&Ze.batching===!1||!W.isBatchedMesh&&Ze.batching===!0||W.isBatchedMesh&&Ze.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ze.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ze.instancing===!1||!W.isInstancedMesh&&Ze.instancing===!0||W.isSkinnedMesh&&Ze.skinning===!1||!W.isSkinnedMesh&&Ze.skinning===!0||W.isInstancedMesh&&Ze.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ze.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ze.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ze.instancingMorph===!1&&W.morphTexture!==null||Ze.envMap!==ze||se.fog===!0&&Ze.fog!==be||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ie.numPlanes||Ze.numIntersection!==ie.numIntersection)||Ze.vertexAlphas!==et||Ze.vertexTangents!==tt||Ze.morphTargets!==qe||Ze.morphNormals!==dt||Ze.morphColors!==gt||Ze.toneMapping!==Dt||Ze.morphTargetsCount!==at)&&(pt=!0):(pt=!0,Ze.__version=se.version);let zn=Ze.currentProgram;pt===!0&&(zn=qn(se,V,W));let Mi=!1,on=!1,dr=!1,Ct=zn.getUniforms(),An=Ze.uniforms;if(Pe.useProgram(zn.program)&&(Mi=!0,on=!0,dr=!0),se.id!==b&&(b=se.id,on=!0),Mi||S!==w){Pe.buffers.depth.getReversed()?(te.copy(w.projectionMatrix),hm(te),fm(te),Ct.setValue(O,"projectionMatrix",te)):Ct.setValue(O,"projectionMatrix",w.projectionMatrix),Ct.setValue(O,"viewMatrix",w.matrixWorldInverse);let Gt=Ct.map.cameraPosition;Gt!==void 0&&Gt.setValue(O,me.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,on=!0,dr=!0)}if(W.isSkinnedMesh){Ct.setOptional(O,W,"bindMatrix"),Ct.setOptional(O,W,"bindMatrixInverse");let Ft=W.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Ct.setValue(O,"boneTexture",Ft.boneTexture,A))}W.isBatchedMesh&&(Ct.setOptional(O,W,"batchingTexture"),Ct.setValue(O,"batchingTexture",W._matricesTexture,A),Ct.setOptional(O,W,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",W._indirectTexture,A),Ct.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",W._colorsTexture,A));let en=re.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Ie.update(W,re,zn),(on||Ze.receiveShadow!==W.receiveShadow)&&(Ze.receiveShadow=W.receiveShadow,Ct.setValue(O,"receiveShadow",W.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(An.envMap.value=ze,An.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&V.environment!==null&&(An.envMapIntensity.value=V.environmentIntensity),on&&(Ct.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ze.needsLights&&fr(An,dr),be&&se.fog===!0&&X.refreshFogUniforms(An,be),X.refreshMaterialUniforms(An,se,J,ce,p.state.transmissionRenderTarget[w.id]),no.upload(O,ei(Ze),An,A)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(no.upload(O,ei(Ze),An,A),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ct.setValue(O,"center",W.center),Ct.setValue(O,"modelViewMatrix",W.modelViewMatrix),Ct.setValue(O,"normalMatrix",W.normalMatrix),Ct.setValue(O,"modelMatrix",W.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let Ft=se.uniformsGroups;for(let Gt=0,Fr=Ft.length;Gt<Fr;Gt++){let ti=Ft[Gt];B.update(ti,zn),B.bind(ti,zn)}}return zn}function fr(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function go(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,V,re){Z.get(w.texture).__webglTexture=V,Z.get(w.depthTexture).__webglTexture=re;let se=Z.get(w);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){let re=Z.get(w);re.__webglFramebuffer=V,re.__useDefaultFramebuffer=V===void 0};let La=O.createFramebuffer();this.setRenderTarget=function(w,V=0,re=0){L=w,T=V,R=re;let se=!0,W=null,be=!1,Ue=!1;if(w){let ze=Z.get(w);if(ze.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(O.FRAMEBUFFER,null),se=!1;else if(ze.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(ze.__hasExternalTextures)A.rebindTextures(w,Z.get(w.texture).__webglTexture,Z.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let qe=w.depthTexture;if(ze.__boundDepthTexture!==qe){if(qe!==null&&Z.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);let tt=Z.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(tt[V])?W=tt[V][re]:W=tt[V],be=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?W=Z.get(w).__webglMultisampledFramebuffer:Array.isArray(tt)?W=tt[re]:W=tt,F.copy(w.viewport),j.copy(w.scissor),z=w.scissorTest}else F.copy(he).multiplyScalar(J).floor(),j.copy(pe).multiplyScalar(J).floor(),z=ne;if(re!==0&&(W=La),Pe.bindFramebuffer(O.FRAMEBUFFER,W)&&se&&Pe.drawBuffers(w,W),Pe.viewport(F),Pe.scissor(j),Pe.setScissorTest(z),be){let ze=Z.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,re)}else if(Ue){let ze=Z.get(w.texture),et=V;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.__webglTexture,re,et)}else if(w!==null&&re!==0){let ze=Z.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ze.__webglTexture,re)}b=-1},this.readRenderTargetPixels=function(w,V,re,se,W,be,Ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Z.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){Pe.bindFramebuffer(O.FRAMEBUFFER,Fe);try{let ze=w.texture,et=ze.format,tt=ze.type;if(!Xe.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-se&&re>=0&&re<=w.height-W&&O.readPixels(V,re,se,W,Me.convert(et),Me.convert(tt),be)}finally{let ze=L!==null?Z.get(L).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,V,re,se,W,be,Ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Z.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){let ze=w.texture,et=ze.format,tt=ze.type;if(!Xe.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-se&&re>=0&&re<=w.height-W){Pe.bindFramebuffer(O.FRAMEBUFFER,Fe);let qe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,qe),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),O.readPixels(V,re,se,W,Me.convert(et),Me.convert(tt),0);let dt=L!==null?Z.get(L).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,dt);let gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await um(O,gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,qe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.deleteBuffer(qe),O.deleteSync(gt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,re=0){w.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);let se=Math.pow(2,-re),W=Math.floor(w.image.width*se),be=Math.floor(w.image.height*se),Ue=V!==null?V.x:0,Fe=V!==null?V.y:0;A.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,re,0,0,Ue,Fe,W,be),Pe.unbindTexture()};let Ua=O.createFramebuffer(),Na=O.createFramebuffer();this.copyTextureToTexture=function(w,V,re=null,se=null,W=0,be=null){w.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,w=arguments[1],V=arguments[2],be=arguments[3]||0,re=null),be===null&&(W!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=W,W=0):be=0);let Ue,Fe,ze,et,tt,qe,dt,gt,Dt,Et=w.isCompressedTexture?w.mipmaps[be]:w.image;if(re!==null)Ue=re.max.x-re.min.x,Fe=re.max.y-re.min.y,ze=re.isBox3?re.max.z-re.min.z:1,et=re.min.x,tt=re.min.y,qe=re.isBox3?re.min.z:0;else{let en=Math.pow(2,-W);Ue=Math.floor(Et.width*en),Fe=Math.floor(Et.height*en),w.isDataArrayTexture?ze=Et.depth:w.isData3DTexture?ze=Math.floor(Et.depth*en):ze=1,et=0,tt=0,qe=0}se!==null?(dt=se.x,gt=se.y,Dt=se.z):(dt=0,gt=0,Dt=0);let at=Me.convert(V.format),Ze=Me.convert(V.type),Vt;V.isData3DTexture?(A.setTexture3D(V,0),Vt=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(A.setTexture2DArray(V,0),Vt=O.TEXTURE_2D_ARRAY):(A.setTexture2D(V,0),Vt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);let pt=O.getParameter(O.UNPACK_ROW_LENGTH),zn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Mi=O.getParameter(O.UNPACK_SKIP_PIXELS),on=O.getParameter(O.UNPACK_SKIP_ROWS),dr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,et),O.pixelStorei(O.UNPACK_SKIP_ROWS,tt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qe);let Ct=w.isDataArrayTexture||w.isData3DTexture,An=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let en=Z.get(w),Ft=Z.get(V),Gt=Z.get(en.__renderTarget),Fr=Z.get(Ft.__renderTarget);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let ti=0;ti<ze;ti++)Ct&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(w).__webglTexture,W,qe+ti),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(V).__webglTexture,be,Dt+ti)),O.blitFramebuffer(et,tt,Ue,Fe,dt,gt,Ue,Fe,O.DEPTH_BUFFER_BIT,O.NEAREST);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||Z.has(w)){let en=Z.get(w),Ft=Z.get(V);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,Ua),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Na);for(let Gt=0;Gt<ze;Gt++)Ct?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,W,qe+Gt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,W),An?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.__webglTexture,be,Dt+Gt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ft.__webglTexture,be),W!==0?O.blitFramebuffer(et,tt,Ue,Fe,dt,gt,Ue,Fe,O.COLOR_BUFFER_BIT,O.NEAREST):An?O.copyTexSubImage3D(Vt,be,dt,gt,Dt+Gt,et,tt,Ue,Fe):O.copyTexSubImage2D(Vt,be,dt,gt,et,tt,Ue,Fe);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else An?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Vt,be,dt,gt,Dt,Ue,Fe,ze,at,Ze,Et.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Vt,be,dt,gt,Dt,Ue,Fe,ze,at,Et.data):O.texSubImage3D(Vt,be,dt,gt,Dt,Ue,Fe,ze,at,Ze,Et):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,dt,gt,Ue,Fe,at,Ze,Et.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,dt,gt,Et.width,Et.height,at,Et.data):O.texSubImage2D(O.TEXTURE_2D,be,dt,gt,Ue,Fe,at,Ze,Et);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,zn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Mi),O.pixelStorei(O.UNPACK_SKIP_ROWS,on),O.pixelStorei(O.UNPACK_SKIP_IMAGES,dr),be===0&&V.generateMipmaps&&O.generateMipmap(Vt),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,V,re=null,se=null,W=0){return w.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,w=arguments[2],V=arguments[3],W=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,V,re,se,W)},this.initRenderTarget=function(w){Z.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,Pe.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function qm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Tt,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in s){let h=Xm(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=Xm(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Xm(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new vt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function $h(i,e){if(e===Eh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Qs||e===ga){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Qs)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ol=class extends Ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new xf(t)})}load(e,t,n,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=nr.extractUrlBase(e);o=nr.resolveURL(l,this.path)}else o=nr.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ks(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===jm){try{o[ut.KHR_BINARY_GLTF]=new _f(e)}catch(h){r&&r(h);return}s=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new wf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ut.KHR_MATERIALS_UNLIT:o[h]=new ef;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[h]=new yf(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[h]=new vf;break;case ut.KHR_MESH_QUANTIZATION:o[h]=new Mf;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function Xb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qh=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new ke(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],un);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new wr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new es(u),l.distance=h;break;case"spot":l=new ta(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,sr(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},ef=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){let r=[];e.color=new ke(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],un),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},nf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(s)}},rf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},sf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},of=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],un)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,xt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},af=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},cf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(a[0],a[1],a[2],un),Promise.all(s)}},lf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},uf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(a[0],a[1],a[2],un),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,xt)),Promise.all(s)}},hf=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},ff=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},df=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},pf=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mf=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},gf=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},xf=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==jn.TRIANGLES&&l.mode!==jn.TRIANGLE_STRIP&&l.mode!==jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let g of h){let x=new Ke,m=new P,p=new Bt,y=new P(1,1,1),v=new Go(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,x.compose(m,p,y));for(let _ in c)if(_==="_COLOR_0"){let C=c[_];v.instanceColor=new Er(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Ot.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},jm="glTF",va=12,Ym={JSON:1313821514,BIN:5130562},_f=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,va),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-va,s=new DataView(e,va),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===Ym.JSON){let l=new Uint8Array(e,va+o,a);this.content=n.decode(l)}else if(c===Ym.BIN){let l=va+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},yf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=Sf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Sf[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=so[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(d)},a,l,un,f)})})}},vf=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Mf=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},Fl=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,x=g-l,m=-2*d+3*f,p=d-f,y=1-m,v=p-f+h;for(let _=0;_!==a;_++){let C=o[x+_+a],T=o[x+_+c]*u,R=o[g+_+a],L=o[g+_]*u;s[_]=y*C+v*T+m*R+p*L}return s}},qb=new Bt,bf=class extends Fl{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return qb.fromArray(s).normalize().toArray(s),s}},jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zm={9728:qt,9729:Yt,9984:jc,9985:js,9986:is,9987:mi},$m={33071:Si,33648:Gs,10497:hi},Kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yb={CUBICSPLINE:void 0,LINEAR:jr,STEP:Kr},jh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),i.DefaultMaterial}function fs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function sr(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $b(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Kb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jb(i){let e,t=i.extensions&&i.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jh(t.attributes):e=i.indices+":"+Jh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Jh(i.targets[n]);return e}function Jh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ef(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Qb=new Ke,wf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Qo(this.options.manager):this.textureLoader=new ra(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ks(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return fs(s,a,r),sr(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())s(u,a.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){n.load(nr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=Kh[r.type],a=so[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new vt(l,o,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=Kh[r.type],l=so[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,v=t.cache.get(y);v||(x=new l(a,p*d,r.count*d/u),v=new Sr(x,d/u),t.cache.add(y,v)),m=new vn(v,c,f%d/u,g)}else a===null?x=new l(r.count*c):x=new l(a,f,r.count*c),m=new vt(x,c,g);if(r.sparse!==void 0){let p=Kh.SCALAR,y=so[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,C=new y(o[1],v,r.sparse.count*p),T=new l(o[2],_,r.sparse.count*c);a!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,L=C.length;R<L;R++){let b=C[R];if(m.setX(b,T[R*c]),c>=2&&m.setY(b,T[R*c+1]),c>=3&&m.setZ(b,T[R*c+2]),c>=4&&m.setW(b,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Zm[f.magFilter]||Yt,u.minFilter=Zm[f.minFilter]||mi,u.wrapS=$m[f.wrapS]||hi,u.wrapT=$m[f.wrapT]||hi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==Yt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=r.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Zt(x);m.needsUpdate=!0,f(m)}),t.load(nr.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),sr(h,o),h.userData.mimeType=o.mimeType||Jb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new $s,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ji,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Mn}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],o,a={},c=s.extensions||{},l=[];if(c[ut.KHR_MATERIALS_UNLIT]){let h=r[ut.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],un),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,xt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=At);let u=s.alphaMode||jh.OPAQUE;if(u===jh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===jh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ht&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Be(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Ht&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ht){let h=s.emissiveFactor;a.emissive=new ke().setRGB(h[0],h[1],h[2],un)}return s.emissiveTexture!==void 0&&o!==Ht&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){let h=new o(a);return s.name&&(h.name=s.name),sr(h,s),t.associations.set(h,{materials:e}),s.extensions&&fs(r,h,s),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Km(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=jb(l),h=r[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Km(new Tt,l,t),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?Zb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=o[d],p,y=l[d];if(m.mode===jn.TRIANGLES||m.mode===jn.TRIANGLE_STRIP||m.mode===jn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new ko(x,y):new je(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===jn.TRIANGLE_STRIP?p.geometry=$h(p.geometry,ga):m.mode===jn.TRIANGLE_FAN&&(p.geometry=$h(p.geometry,Qs));else if(m.mode===jn.LINES)p=new Wo(x,y);else if(m.mode===jn.LINE_STRIP)p=new Ai(x,y);else if(m.mode===jn.LINE_LOOP)p=new Xo(x,y);else if(m.mode===jn.POINTS)p=new qo(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Kb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),sr(p,s),m.extensions&&fs(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&fs(r,h[0],s),h[0];let f=new Lt;s.extensions&&fs(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(ss.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new di(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),sr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new Ke;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Vo(a,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],g=r.samplers[d.sampler],x=d.target,m=x.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let y=0,v=f.length;y<v;y++){let _=f[y],C=d[y],T=g[y],R=x[y],L=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,C,T,R,L);if(b)for(let S=0;S<b.length;S++)p.push(b[S])}return new Jo(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Qb)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Ys:l.length>1?u=new Lt:l.length===1?u=l[0]:u=new Ot,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),sr(u,s),s.extensions&&fs(n,u,s),s.matrix!==void 0){let h=new Ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new Lt;n.name&&(s.name=r.createUniqueName(n.name)),sr(s,n),n.extensions&&fs(t,s,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);let l=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof Cn||f instanceof Zt)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let o=[],a=e.name?e.name:e.uuid,c=[];Dr[s.path]===Dr.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Dr[s.path]){case Dr.weights:l=Ri;break;case Dr.rotation:l=Ci;break;case Dr.position:case Dr.scale:l=Pi;break;default:switch(n.itemSize){case 1:l=Ri;break;case 2:case 3:default:l=Pi;break}break}let u=r.interpolation!==void 0?Yb[r.interpolation]:jr,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+Dr[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ef(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof Ci?bf:Fl;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function eS(i,e,t){let n=e.attributes,r=new Nt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){let u=Ef(so[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new P,c=new P;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=Ef(so[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;let o=new nn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Km(i,e,t){let n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Sf[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ht.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),sr(i,e),eS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?$b(i,e.targets,t):i})}var Jm={type:"change"},Af={type:"start"},eg={type:"end"},Bl=new Ti,Qm=new ln,tS=Math.cos(70*ss.DEG2RAD),Jt=new P,Bn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tf=1e-6,zl=class extends oa{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Bt,this._lastTargetPosition=new P,this._quat=new Bt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ar,this._sphericalDelta=new Ar,this._scale=1,this._panOffset=new P,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new P,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iS.bind(this),this._onPointerDown=nS.bind(this),this._onPointerUp=rS.bind(this),this._onContextMenu=hS.bind(this),this._onMouseWheel=aS.bind(this),this._onKeyDown=cS.bind(this),this._onTouchStart=lS.bind(this),this._onTouchMove=uS.bind(this),this._onMouseDown=sS.bind(this),this._onMouseMove=oS.bind(this),this._interceptControlDown=fS.bind(this),this._interceptControlUp=dS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jm),this.update(),this.state=Rt.NONE}update(e=null){let t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),r<-Math.PI?r+=Bn:r>Math.PI&&(r-=Bn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Jt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bl.origin.copy(this.object.position),Bl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bl.direction))<tS?this.object.lookAt(this.target):(Qm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bl.intersectPlane(Qm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Tf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tf||this._lastTargetPosition.distanceToSquared(this.target)>Tf?(this.dispatchEvent(Jm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bn/60*this.autoRotateSpeed*e:Bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Jt.copy(r).sub(this.target);let s=Jt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function nS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function iS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function rS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eg),this.state=Rt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Rt.DOLLY;break;case Rr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}break;case Rr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Af)}function oS(i){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function aS(i){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(i.preventDefault(),this.dispatchEvent(Af),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(eg))}function cS(i){this.enabled!==!1&&this._handleKeyDown(i)}function lS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Rt.TOUCH_ROTATE;break;case Cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Rt.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Af)}function uS(i){switch(this._trackPointer(i),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Rt.NONE}}function hS(i){this.enabled!==!1&&i.preventDefault()}function fS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var kl=class extends Pn{constructor(){super();let e=new br;e.deleteAttribute("uv");let t=new Mn({side:fn}),n=new Mn,r=new es(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new je(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new je(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new je(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new je(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new je(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let u=new je(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new je(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new je(e,oo(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new je(e,oo(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new je(e,oo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new je(e,oo(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new je(e,oo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new je(e,oo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function oo(i){let e=new Ht;return e.color.setScalar(i),e}var pn=Uint8Array,Gn=Uint16Array,Lf=Int32Array,Uf=new pn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Nf=new pn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tg=new pn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ag=function(i,e){for(var t=new Gn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Lf(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},cg=ag(Uf,2),pS=cg.b,Cf=cg.r;pS[28]=258,Cf[258]=28;var lg=ag(Nf,0),tR=lg.b,ng=lg.r,Pf=new Gn(32768);for(_t=0;_t<32768;++_t)or=(_t&43690)>>1|(_t&21845)<<1,or=(or&52428)>>2|(or&13107)<<2,or=(or&61680)>>4|(or&3855)<<4,Pf[_t]=((or&65280)>>8|(or&255)<<8)>>1;var or,_t,Sa=function(i,e,t){for(var n=i.length,r=0,s=new Gn(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Gn(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Gn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Pf[h]>>c]=l}else for(a=new Gn(n),r=0;r<n;++r)i[r]&&(a[r]=Pf[o[i[r]-1]++]>>15-i[r]);return a},ds=new pn(288);for(_t=0;_t<144;++_t)ds[_t]=8;var _t;for(_t=144;_t<256;++_t)ds[_t]=9;var _t;for(_t=256;_t<280;++_t)ds[_t]=7;var _t;for(_t=280;_t<288;++_t)ds[_t]=8;var _t,Hl=new pn(32);for(_t=0;_t<32;++_t)Hl[_t]=5;var _t,mS=Sa(ds,9,0);var gS=Sa(Hl,5,0);var ug=function(i){return(i+7)/8|0},hg=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new pn(i.subarray(e,t))};var xS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Vl=function(i,e,t){var n=new Error(e||xS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Vl),!t)throw n;return n};var ar=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Ma=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},Rf=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:dg,l:0};if(r==1){var o=new pn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(C,T){return C.f-T.f}),t.push({s:-1,f:25001});var a=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=r-1;)a=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var d=new Gn(f+1),g=If(t[u-1],d,0);if(g>e){var n=0,x=0,m=g-e,p=1<<m;for(s.sort(function(T,R){return d[R.s]-d[T.s]||T.f-R.f});n<r;++n){var y=s[n].s;if(d[y]>e)x+=p-(1<<g-d[y]),d[y]=e;else break}for(x>>=m;x>0;){var v=s[n].s;d[v]<e?x-=1<<e-d[v]++-1:++n}for(;n>=0&&x;--n){var _=s[n].s;d[_]==e&&(--d[_],++x)}g=e}return{t:new pn(d),l:g}},If=function(i,e,t){return i.s==-1?Math.max(If(i.l,e,t+1),If(i.r,e,t+1)):e[i.s]=t},ig=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new Gn(++e),n=0,r=i[0],s=1,o=function(c){t[n++]=c},a=1;a<=e;++a)if(i[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=i[a]}return{c:t.subarray(0,n),n:e}},ba=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},fg=function(i,e,t){var n=t.length,r=ug(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},rg=function(i,e,t,n,r,s,o,a,c,l,u){ar(e,u++,t),++r[256];for(var h=Rf(r,15),f=h.t,d=h.l,g=Rf(s,15),x=g.t,m=g.l,p=ig(f),y=p.c,v=p.n,_=ig(x),C=_.c,T=_.n,R=new Gn(19),L=0;L<y.length;++L)++R[y[L]&31];for(var L=0;L<C.length;++L)++R[C[L]&31];for(var b=Rf(R,7),S=b.t,F=b.l,j=19;j>4&&!S[tg[j-1]];--j);var z=l+5<<3,q=ba(r,ds)+ba(s,Hl)+o,Q=ba(r,f)+ba(s,x)+o+14+3*j+ba(R,S)+2*R[16]+3*R[17]+7*R[18];if(c>=0&&z<=q&&z<=Q)return fg(e,u,i.subarray(c,c+l));var Y,ce,J,de;if(ar(e,u,1+(Q<q)),u+=2,Q<q){Y=Sa(f,d,0),ce=f,J=Sa(x,m,0),de=x;var ee=Sa(S,F,0);ar(e,u,v-257),ar(e,u+5,T-1),ar(e,u+10,j-4),u+=14;for(var L=0;L<j;++L)ar(e,u+3*L,S[tg[L]]);u+=3*j;for(var he=[y,C],pe=0;pe<2;++pe)for(var ne=he[pe],L=0;L<ne.length;++L){var H=ne[L]&31;ar(e,u,ee[H]),u+=S[H],H>15&&(ar(e,u,ne[L]>>5&127),u+=ne[L]>>12)}}else Y=mS,ce=ds,J=gS,de=Hl;for(var L=0;L<a;++L){var ue=n[L];if(ue>255){var H=ue>>18&31;Ma(e,u,Y[H+257]),u+=ce[H+257],H>7&&(ar(e,u,ue>>23&31),u+=Uf[H]);var le=ue&31;Ma(e,u,J[le]),u+=de[le],le>3&&(Ma(e,u,ue>>5&8191),u+=Nf[le])}else Ma(e,u,Y[ue]),u+=ce[ue]}return Ma(e,u,Y[256]),u+ce[256]},_S=new Lf([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),dg=new pn(0),yS=function(i,e,t,n,r,s){var o=s.z||i.length,a=new pn(n+o+5*(1+Math.ceil(o/7e3))+r),c=a.subarray(n,a.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=_S[e-1],f=h>>13,d=h&8191,g=(1<<t)-1,x=s.p||new Gn(32768),m=s.h||new Gn(g+1),p=Math.ceil(t/3),y=2*p,v=function(O){return(i[O]^i[O+1]<<p^i[O+2]<<y)&g},_=new Lf(25e3),C=new Gn(288),T=new Gn(32),R=0,L=0,b=s.i||0,S=0,F=s.w||0,j=0;b+2<o;++b){var z=v(b),q=b&32767,Q=m[z];if(x[q]=Q,m[z]=q,F<=b){var Y=o-b;if((R>7e3||S>24576)&&(Y>423||!l)){u=rg(i,c,0,_,C,T,L,S,j,b-j,u),S=R=L=0,j=b;for(var ce=0;ce<286;++ce)C[ce]=0;for(var ce=0;ce<30;++ce)T[ce]=0}var J=2,de=0,ee=d,he=q-Q&32767;if(Y>2&&z==v(b-he))for(var pe=Math.min(f,Y)-1,ne=Math.min(32767,b),H=Math.min(258,Y);he<=ne&&--ee&&q!=Q;){if(i[b+J]==i[b+J-he]){for(var ue=0;ue<H&&i[b+ue]==i[b+ue-he];++ue);if(ue>J){if(J=ue,de=he,ue>pe)break;for(var le=Math.min(he,ue-2),te=0,ce=0;ce<le;++ce){var xe=b-he+ce&32767,me=x[xe],we=xe-me&32767;we>te&&(te=we,Q=xe)}}}q=Q,Q=x[q],he+=q-Q&32767}if(de){_[S++]=268435456|Cf[J]<<18|ng[de];var He=Cf[J]&31,De=ng[de]&31;L+=Uf[He]+Nf[De],++C[257+He],++T[De],F=b+J,++R}else _[S++]=i[b],++C[i[b]]}}for(b=Math.max(b,F);b<o;++b)_[S++]=i[b],++C[i[b]];u=rg(i,c,l,_,C,T,L,S,j,b-j,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=x,s.i=b,s.w=F)}else{for(var b=s.w||0;b<o+l;b+=65535){var Le=b+65535;Le>=o&&(c[u/8|0]=l,Le=o),u=fg(c,u+1,i.subarray(b,Le))}s.i=o}return hg(a,0,n+ug(u)+r)},vS=function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i}(),MS=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=vS[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}};var bS=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new pn(s.length+i.length);o.set(s),o.set(i,s.length),i=o,r.w=s.length}return yS(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},pg=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t};var dn=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};function SS(i,e){return bS(i,e||{},0,0)}var mg=function(i,e,t,n){for(var r in i){var s=i[r],o=e+r,a=n;Array.isArray(s)&&(a=pg(n,s[1]),s=s[0]),s instanceof pn?t[o]=[s,a]:(t[o+="/"]=[new pn(0),a],mg(s,o,t,n))}},sg=typeof TextEncoder<"u"&&new TextEncoder,ES=typeof TextDecoder<"u"&&new TextDecoder,wS=0;try{ES.decode(dg,{stream:!0}),wS=1}catch{}function Ea(i,e){if(e){for(var t=new pn(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(sg)return sg.encode(i);for(var r=i.length,s=new pn(i.length+(i.length>>1)),o=0,a=function(u){s[o++]=u},n=0;n<r;++n){if(o+5>s.length){var c=new pn(o+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return hg(s,0,o)}var Df=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Vl(9),e+=n+4}return e},og=function(i,e,t,n,r,s,o,a){var c=n.length,l=t.extra,u=a&&a.length,h=Df(l);dn(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Vl(10),dn(i,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(dn(i,e,t.crc),dn(i,e+4,s<0?-s-2:s),dn(i,e+8,t.size)),dn(i,e+12,c),dn(i,e+14,h),e+=16,o!=null&&(dn(i,e,u),dn(i,e+6,t.attrs),dn(i,e+10,o),e+=14),i.set(n,e),e+=c,h)for(var g in l){var x=l[g],m=x.length;dn(i,e,+g),dn(i,e+2,m),i.set(x,e+4),e+=4+m}return u&&(i.set(a,e),e+=u),e},TS=function(i,e,t,n,r){dn(i,e,101010256),dn(i,e+8,t),dn(i,e+10,t),dn(i,e+12,n),dn(i,e+16,r)};function gg(i,e){e||(e={});var t={},n=[];mg(i,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],c=a[0],l=a[1],u=l.level==0?0:8,h=Ea(o),f=h.length,d=l.comment,g=d&&Ea(d),x=g&&g.length,m=Df(l.extra);f>65535&&Vl(11);var p=u?SS(c,l):c,y=p.length,v=MS();v.p(c),n.push(pg(l,{size:c.length,crc:v.d(),c:p,f:h,m:g,u:f!=o.length||g&&d.length!=x,o:r,compression:u})),r+=30+f+m+y,s+=76+2*(f+m)+(x||0)+y}for(var _=new pn(s+22),C=r,T=s-r,R=0;R<n.length;++R){var h=n[R];og(_,h.o,h,h.f,h.u,h.c.length);var L=30+h.f.length+Df(h.extra);_.set(h.c,h.o+L),og(_,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+L+(h.m?h.m.length:0)}return TS(_,r,n.length,T,C),_}var Wl=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,n,r){this.parseAsync(e,r).then(t).catch(n)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},t);let n={},r="model.usda";n[r]=null;let s=yg();s+=RS(t);let o={},a={};e.traverseVisible(l=>{if(l.isMesh){let u=l.geometry,h=l.material;if(h.isMeshStandardMaterial){let f="geometries/Geometry_"+u.id+".usda";if(!(f in n)){let d=DS(u);n[f]=PS(d)}h.uuid in o||(o[h.uuid]=h),s+=IS(l,u,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",l)}else l.isCamera&&(s+=HS(l))}),s+=CS(),s+=BS(o,a,t.quickLookCompatible),n[r]=Ea(s),s=null;for(let l in a){let u=a[l];if(u.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");u=await this.textureUtils.decompress(u)}let h=AS(u.image,u.flipY,t.maxTextureSize),f=await new Promise(d=>h.toBlob(d,"image/png",1));n[`textures/Texture_${l}.png`]=new Uint8Array(await f.arrayBuffer())}let c=0;for(let l in n){let u=n[l],h=34+l.length;c+=h;let f=c&63;if(f!==4){let d=64-f,g=new Uint8Array(d);n[l]=[u,{extra:{12345:g}}]}c=u.length}return gg(n,{level:0})}};function AS(i,e,t){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){let n=t/Math.max(i.width,i.height),r=document.createElement("canvas");r.width=i.width*Math.min(1,n),r.height=i.height*Math.min(1,n);let s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(i,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var Sn=7;function yg(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function RS(i){return`def Xform "Root"
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
`}function CS(){return`
		}
	}
}

`}function PS(i){let e=yg();return e+=i,Ea(e)}function IS(i,e,t){let n="Object_"+i.id,r=vg(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${r}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function vg(i){let e=i.elements;return`( ${Gl(e,0)}, ${Gl(e,4)}, ${Gl(e,8)}, ${Gl(e,12)} )`}function Gl(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function DS(i){return`
def "Geometry"
{
${LS(i)}
}
`}function LS(i){let e="Geometry",t=i.attributes,n=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${US(i)}]
		int[] faceVertexIndices = [${NS(i)}]
		normal3f[] normals = [${Of(t.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${Of(t.position,n)}]
${FS(t)}
		uniform token subdivisionScheme = "none"
	}
`}function US(i){let e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function NS(i){let e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{let n=i.attributes.position.count;for(let r=0;r<n;r++)t.push(r)}return t.join(", ")}function Of(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let n=0;n<i.count;n++){let r=i.getX(n),s=i.getY(n),o=i.getZ(n);t.push(`(${r.toPrecision(Sn)}, ${s.toPrecision(Sn)}, ${o.toPrecision(Sn)})`)}return t.join(", ")}function OS(i){let e=[];for(let t=0;t<i.count;t++){let n=i.getX(t),r=i.getY(t);e.push(`(${n.toPrecision(Sn)}, ${1-r.toPrecision(Sn)})`)}return e.join(", ")}function FS(i){let e="";for(let n=0;n<4;n++){let r=n>0?n:"",s=i["uv"+r];s!==void 0&&(e+=`
		texCoord2f[] primvars:st${r} = [${OS(s)}] (
			interpolation = "vertex"
		)`)}let t=i.color;if(t!==void 0){let n=t.count;e+=`
	color3f[] primvars:displayColor = [${Of(t,n)}] (
		interpolation = "vertex"
		)`}return e}function BS(i,e,t=!1){let n=[];for(let r in i){let s=i[r];n.push(zS(s,e,t))}return`def "Materials"
{
${n.join("")}
}

`}function zS(i,e,t=!1){let n="			",r=[],s=[];function o(a,c,l){let u=a.source.id+"_"+a.flipY;e[u]=a;let h=a.channel>0?"st"+a.channel:"st",f={1e3:"repeat",1001:"clamp",1002:"mirror"},d=a.repeat.clone(),g=a.offset.clone(),x=a.rotation,m=Math.sin(x),p=Math.cos(x);return g.y=1-g.y-d.y,t?(g.x=g.x/d.x,g.y=g.y/d.y,g.x+=m/d.x,g.y+=p-1):(g.x+=m*d.x,g.y+=(1-p)*d.y),`
		def Shader "PrimvarReader_${c}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${h}"
			float2 outputs:result
		}

		def Shader "Transform2d_${c}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${i.id}/PrimvarReader_${c}.outputs:result>
			float inputs:rotation = ${(x*(180/Math.PI)).toFixed(Sn)}
			float2 inputs:scale = ${_g(d)}
			float2 inputs:translation = ${_g(g)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${c}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${c}.outputs:result>
			${l!==void 0?"float4 inputs:scale = "+kS(l):""}
			token inputs:sourceColorSpace = "${a.colorSpace===gi?"raw":"sRGB"}"
			token inputs:wrapS = "${f[a.wrapS]}"
			token inputs:wrapT = "${f[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${i.transparent||i.alphaTest>0?"float outputs:a":""}
		}`}return i.side===At&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i),i.map!==null?(r.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?r.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(r.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),r.push(`${n}float inputs:opacityThreshold = ${i.alphaTest}`)),s.push(o(i.map,"diffuse",i.color))):r.push(`${n}color3f inputs:diffuseColor = ${xg(i.color)}`),i.emissiveMap!==null?(r.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`),s.push(o(i.emissiveMap,"emissive",new ke(i.emissive.r*i.emissiveIntensity,i.emissive.g*i.emissiveIntensity,i.emissive.b*i.emissiveIntensity)))):i.emissive.getHex()>0&&r.push(`${n}color3f inputs:emissiveColor = ${xg(i.emissive)}`),i.normalMap!==null&&(r.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),s.push(o(i.normalMap,"normal"))),i.aoMap!==null&&(r.push(`${n}float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`),s.push(o(i.aoMap,"occlusion",new ke(i.aoMapIntensity,i.aoMapIntensity,i.aoMapIntensity)))),i.roughnessMap!==null?(r.push(`${n}float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`),s.push(o(i.roughnessMap,"roughness",new ke(i.roughness,i.roughness,i.roughness)))):r.push(`${n}float inputs:roughness = ${i.roughness}`),i.metalnessMap!==null?(r.push(`${n}float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`),s.push(o(i.metalnessMap,"metallic",new ke(i.metalness,i.metalness,i.metalness)))):r.push(`${n}float inputs:metallic = ${i.metalness}`),i.alphaMap!==null?(r.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),r.push(`${n}float inputs:opacityThreshold = 0.0001`),s.push(o(i.alphaMap,"opacity"))):r.push(`${n}float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial&&(i.clearcoatMap!==null?(r.push(`${n}float inputs:clearcoat.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatMap.id}_clearcoat.outputs:r>`),s.push(o(i.clearcoatMap,"clearcoat",new ke(i.clearcoat,i.clearcoat,i.clearcoat)))):r.push(`${n}float inputs:clearcoat = ${i.clearcoat}`),i.clearcoatRoughnessMap!==null?(r.push(`${n}float inputs:clearcoatRoughness.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),s.push(o(i.clearcoatRoughnessMap,"clearcoatRoughness",new ke(i.clearcoatRoughness,i.clearcoatRoughness,i.clearcoatRoughness)))):r.push(`${n}float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`),r.push(`${n}float inputs:ior = ${i.ior}`)),`
	def Material "Material_${i.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${r.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${i.id}/PreviewSurface.outputs:surface>

${s.join(`
`)}

	}
`}function xg(i){return`(${i.r}, ${i.g}, ${i.b})`}function kS(i){return`(${i.r}, ${i.g}, ${i.b}, 1.0)`}function _g(i){return`(${i.x}, ${i.y})`}function HS(i){let e=i.name?i.name:"Camera_"+i.id,t=vg(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),i.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(Sn)}, ${i.far.toPrecision(Sn)})
			float horizontalAperture = ${((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(Sn)}
			float verticalAperture = ${((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(Sn)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(Sn)}, ${i.far.toPrecision(Sn)})
			float focalLength = ${i.getFocalLength().toPrecision(Sn)}
			float focusDistance = ${i.focus.toPrecision(Sn)}
			float horizontalAperture = ${i.getFilmWidth().toPrecision(Sn)}
			token projection = "perspective"
			float verticalAperture = ${i.getFilmHeight().toPrecision(Sn)}
		}
	
	`}var Mg=new Nt,Xl=new P,_i=class extends ia{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ut(e,3)),this.setAttribute("uv",new Ut(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Tr(t,6,1);return this.setAttribute("instanceStart",new vn(n,3,0)),this.setAttribute("instanceEnd",new vn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Tr(t,6,1);return this.setAttribute("instanceColorStart",new vn(n,3,0)),this.setAttribute("instanceColorEnd",new vn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ko(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Mg.setFromBufferAttribute(t),this.boundingBox.union(Mg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Xl.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xl)),Xl.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Xl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};Ae.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Be(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};In.line={uniforms:xa.merge([Ae.common,Ae.fog,Ae.line]),vertexShader:`
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
		`};var Li=class extends $t{constructor(e){super({type:"LineMaterial",uniforms:xa.clone(In.line.uniforms),vertexShader:In.line.vertexShader,fragmentShader:In.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Ff=new ct,bg=new P,Sg=new P,mn=new ct,gn=new ct,Ui=new ct,Bf=new P,zf=new Ke,xn=new sa,Eg=new P,ql=new Nt,Yl=new nn,Ni=new ct,Oi,ps;function wg(i,e,t){return Ni.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Ni.multiplyScalar(1/Ni.w),Ni.x=ps/t.width,Ni.y=ps/t.height,Ni.applyMatrix4(i.projectionMatrixInverse),Ni.multiplyScalar(1/Ni.w),Math.abs(Math.max(Ni.x,Ni.y))}function VS(i,e){let t=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let a=0,c=o;a<c;a++){xn.start.fromBufferAttribute(r,a),xn.end.fromBufferAttribute(s,a),xn.applyMatrix4(t);let l=new P,u=new P;Oi.distanceSqToSegment(xn.start,xn.end,u,l),u.distanceTo(l)<ps*.5&&e.push({point:u,pointOnLine:l,distance:Oi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function GS(i,e,t){let n=e.projectionMatrix,s=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;Oi.at(1,Ui),Ui.w=1,Ui.applyMatrix4(e.matrixWorldInverse),Ui.applyMatrix4(n),Ui.multiplyScalar(1/Ui.w),Ui.x*=s.x/2,Ui.y*=s.y/2,Ui.z=0,Bf.copy(Ui),zf.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(mn.fromBufferAttribute(c,f),gn.fromBufferAttribute(l,f),mn.w=1,gn.w=1,mn.applyMatrix4(zf),gn.applyMatrix4(zf),mn.z>h&&gn.z>h)continue;if(mn.z>h){let v=mn.z-gn.z,_=(mn.z-h)/v;mn.lerp(gn,_)}else if(gn.z>h){let v=gn.z-mn.z,_=(gn.z-h)/v;gn.lerp(mn,_)}mn.applyMatrix4(n),gn.applyMatrix4(n),mn.multiplyScalar(1/mn.w),gn.multiplyScalar(1/gn.w),mn.x*=s.x/2,mn.y*=s.y/2,gn.x*=s.x/2,gn.y*=s.y/2,xn.start.copy(mn),xn.start.z=0,xn.end.copy(gn),xn.end.z=0;let x=xn.closestPointToPointParameter(Bf,!0);xn.at(x,Eg);let m=ss.lerp(mn.z,gn.z,x),p=m>=-1&&m<=1,y=Bf.distanceTo(Eg)<ps*.5;if(p&&y){xn.start.fromBufferAttribute(c,f),xn.end.fromBufferAttribute(l,f),xn.start.applyMatrix4(o),xn.end.applyMatrix4(o);let v=new P,_=new P;Oi.distanceSqToSegment(xn.start,xn.end,_,v),t.push({point:_,pointOnLine:v,distance:Oi.origin.distanceTo(_),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var Lr=class extends je{constructor(e=new _i,t=new Li({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)bg.fromBufferAttribute(t,o),Sg.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+bg.distanceTo(Sg);let s=new Tr(r,2,1);return e.setAttribute("instanceDistanceStart",new vn(s,1,0)),e.setAttribute("instanceDistanceEnd",new vn(s,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Oi=e.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;ps=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Yl.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=ps*.5;else{let h=Math.max(r.near,Yl.distanceToPoint(Oi.origin));l=wg(r,h,c.resolution)}if(Yl.radius+=l,Oi.intersectsSphere(Yl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ql.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=ps*.5;else{let h=Math.max(r.near,ql.distanceToPoint(Oi.origin));u=wg(r,h,c.resolution)}ql.expandByScalar(u),Oi.intersectsBox(ql)!==!1&&(n?VS(this,t):GS(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Ff),this.material.uniforms.resolution.value.set(Ff.z,Ff.w))}};var Rg="blueprints.edgeMode",WS="blueprints.edgesEnabled",ms="none",gs="transparent",Ta="opaque",XS=20,Cg=2.5,Pg=0,$l=35e-5,Hf=2e-6;function qS(i){let t=(Array.isArray(i?.material)?i.material[0]:i?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*Hf}var wa=1,Ig=3,YS=.0012,ZS=.0036,$S=.02,KS=.0035,Tg=.012;function Ag(i){return i===ms||i===gs||i===Ta?i:i==="1"||i==="true"?gs:i==="0"||i==="false"?ms:null}function Dg(){try{let i=Ag(localStorage.getItem(Rg));if(i)return i;let e=Ag(localStorage.getItem(WS));if(e)return Gf(e),e}catch{}return gs}function Gf(i){try{localStorage.setItem(Rg,i)}catch{}}function En(i){return!!(i&&i.userData&&i.userData.isEdgeOverlay)}function Lg(i){let e=i?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new Zo(i,XS),n=t.getAttribute("position"),r=n&&n.array?n.array instanceof Float32Array?n.array.slice():Float32Array.from(n.array):new Float32Array(0);return t.dispose(),r}function jS(i,e){if(!e.length)return i;if(!i.length)return e;let t=new Float32Array(i.length+e.length);return t.set(i,0),t.set(e,i.length),t}var Zl=new P;function Ug(i){let e=[];for(let t=0;t+5<i.length;t+=6){let n=i[t],r=i[t+1],s=i[t+2],o=i[t+3],a=i[t+4],c=i[t+5],l=o-n,u=a-r,h=c-s,f=Math.hypot(l,u,h);f<1e-6||e.push({ax:n,ay:r,az:s,bx:o,by:a,bz:c,dx:l/f,dy:u/f,dz:h/f,len:f})}return e}function JS(i,e,t,n,r,s){let o=d=>Math.round(d/5e-4),a=o(i),c=o(e),l=o(t),u=o(n),h=o(r),f=o(s);if(a>u||a===u&&c>h||a===u&&c===h&&l>f){let d=a;a=u,u=d;let g=c;c=h,h=g;let x=l;l=f,f=x}return`${a},${c},${l},${u},${h},${f}`}function Ng(i){let e=Ug(i),t=[],n=new Set;for(let r=0;r<e.length;r++){let s=e[r];for(let o=r+1;o<e.length;o++){let a=e[o];if(Math.abs(s.dx*a.dx+s.dy*a.dy+s.dz*a.dz)<.985)continue;let l=s.ax-a.ax,u=s.ay-a.ay,h=s.az-a.az,f=l*s.dx+u*s.dy+h*s.dz,d=l-f*s.dx,g=u-f*s.dy,x=h-f*s.dz,m=Math.hypot(d,g,x);if(m<YS||m>ZS)continue;let p=(a.ax-s.ax)*s.dx+(a.ay-s.ay)*s.dy+(a.az-s.az)*s.dz,y=(a.bx-s.ax)*s.dx+(a.by-s.ay)*s.dy+(a.bz-s.az)*s.dz,v=Math.max(0,Math.min(p,y)),_=Math.min(s.len,Math.max(p,y));if(_-v<$S)continue;let C=-d/m*(m*.5),T=-g/m*(m*.5),R=-x/m*(m*.5),L=s.ax+s.dx*v+C,b=s.ay+s.dy*v+T,S=s.az+s.dz*v+R,F=s.ax+s.dx*_+C,j=s.ay+s.dy*_+T,z=s.az+s.dz*_+R,q=JS(L,b,S,F,j,z);n.has(q)||(n.add(q),t.push(L,b,S,F,j,z))}}return new Float32Array(t)}function QS(i){let e=i.getAttribute("position"),t=i.getIndex(),n=0,r=0,s=0,o=t?t.count:e.count,a=l=>{let u=t?t.getX(l):l;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let l=0;l+2<o;l+=3){let u=a(l),h=a(l+1),f=a(l+2),d=h[0]-u[0],g=h[1]-u[1],x=h[2]-u[2],m=f[0]-u[0],p=f[1]-u[1],y=f[2]-u[2];n+=g*y-x*p,r+=x*m-d*y,s+=d*p-g*m}let c=Math.hypot(n,r,s)||1;return{x:n/c,y:r/c,z:s/c}}function eE(i,e){let t=i.getAttribute("position"),n,r,s;Math.abs(e.z)<.9?(n=-e.y,r=e.x,s=0):(n=0,r=-e.z,s=e.y);let o=Math.hypot(n,r,s)||1;n/=o,r/=o,s/=o;let a=e.y*s-e.z*r,c=e.z*n-e.x*s,l=e.x*r-e.y*n,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let g=0;g<t.count;g++){let x=t.getX(g),m=t.getY(g),p=t.getZ(g),y=x*n+m*r+p*s,v=x*a+m*c+p*l;y<u&&(u=y),y>h&&(h=y),v<f&&(f=v),v>d&&(d=v)}return Math.min(h-u,d-f)}function tE(i){let e=i.getAttribute("position");if(!e||e.count<3)return!1;let t=QS(i),n=eE(i,t);return t.z>.5?n>Tg:t.z<-.5||(i.boundingBox||i.computeBoundingBox(),i.boundingBox.max.z-i.boundingBox.min.z<.05)?!1:n>Tg}function Og(i,e){i.updateWorldMatrix(!0,!1);let t=i.matrixWorld,n=new Float32Array(e.length);for(let r=0;r<e.length;r+=3)Zl.set(e[r],e[r+1],e[r+2]).applyMatrix4(t),n[r]=Zl.x,n[r+1]=Zl.y,n[r+2]=Zl.z;return n}function nE(i,e,t){if(!t||t.length<6)return i;let n=Og(e,i),r=Ug(t),s=[];for(let o=0;o+5<i.length;o+=6){let a=n[o],c=n[o+1],l=n[o+2],u=n[o+3],h=n[o+4],f=n[o+5],d=u-a,g=h-c,x=f-l,m=Math.hypot(d,g,x);if(m<1e-6)continue;let p=d/m,y=g/m,v=x/m,_=!1;for(let C of r){if(Math.abs(p*C.dx+y*C.dy+v*C.dz)<.95)continue;let R=a-C.ax,L=c-C.ay,b=l-C.az,S=R*C.dx+L*C.dy+b*C.dz,F=R-S*C.dx,j=L-S*C.dy,z=b-S*C.dz;if(Math.hypot(F,j,z)>KS)continue;let q=(a-C.ax)*C.dx+(c-C.ay)*C.dy+(l-C.az)*C.dz,Q=(u-C.ax)*C.dx+(h-C.ay)*C.dy+(f-C.az)*C.dz,Y=Math.min(q,Q),ce=Math.max(q,Q);if(Math.min(ce,C.len)-Math.max(Y,0)>.01){_=!0;break}}_||s.push(i[o],i[o+1],i[o+2],i[o+3],i[o+4],i[o+5])}return new Float32Array(s)}function iE(i,e){if(!i)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(i.transparent=!0,i.opacity=t,i.depthWrite=!1):(i.transparent=!1,i.opacity=1),i.needsUpdate=!0}function rE(i){if(!i?.visible)return 0;let e=Array.isArray(i.material)?i.material[0]:i.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function sE(i,e=gs){return e===ms?0:e===Ta?i?.visible===!1?0:1:rE(i)}function Vf(i,e,t=1,n=Hf){let r=Math.max(0,Math.min(1,Number(t)||0)),s=Number.isFinite(n)?n:Hf,o=new Li({color:Pg,linewidth:Cg,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:r<1,opacity:r<1?r:1,clippingPlanes:i,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${$l};
			end.z += ${$l};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= ${s};
			#else
				gl_FragDepth = gl_FragCoord.z - ${s};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${Ig}-${s}-${$l}`,e&&o.resolution.set(e.x,e.y),o}function Fg(i,e,t,n){let r=Math.max(0,Math.min(1,Number(e)||0)),s=Vf(t,null,r);s.depthTest=!1,s.depthWrite=!1,s.transparent=!0,s.opacity=r;let o=s.onBeforeCompile?.bind(s),a=s.customProgramCacheKey?.bind(s);s.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,s.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=n.stage,u.uniforms.tPrevViewZ=n.prevZ,u.uniforms.tPeelViewZ=n.peelZ,u.uniforms.tOpaqueViewZ=n.opaqueZ,u.uniforms.uViewZEps=n.eps,u.uniforms.uBpPeelRes=n.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},s.needsUpdate=!0;let c=new _i;c.setPositions(i);let l=new Lr(c,s);return l.frustumCulled=!1,l.matrixAutoUpdate=!1,l.renderOrder=1e3,l.raycast=()=>{},l.userData.isPeeledEdgeBatch=!0,l}function Kl(i){if(!i)return;i.parent?.remove(i),i.geometry?.dispose?.();let e=i.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function Bg(i){if(!i)return;let e=[];i.traverse(t=>{En(t)&&e.push(t)});for(let t of e)Kl(t)}function Ur(i,e){i&&i.traverse(t=>{En(t)&&(t.visible=e)})}function zg(i,e,t){if(!i)return;let n=Math.max(1,e),r=Math.max(1,t);i.traverse(s=>{if(!En(s)||!s.material)return;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a?.resolution&&a.resolution.set(n,r)})}function Wf(i,e){if(!i)return;let t=e||[];i.traverse(n=>{if(!En(n)||!n.material)return;let r=Array.isArray(n.material)?n.material:[n.material];for(let s of r){if(!s)continue;let o=s.clippingPlanes?s.clippingPlanes.length:0;s.clippingPlanes=t,s.clipIntersection=!1,o!==t.length&&(s.needsUpdate=!0)}})}function oE(i,e,t){let n=i.userData.bpHardEdgePositions;return n instanceof Float32Array||(n=Lg(i.geometry),i.userData.bpHardEdgePositions=n),e==="grout"?Ng(n):e==="tile"||e==="floor_tile"||e==="wall_tile"?tE(i.geometry)?nE(n,i,t):new Float32Array(0):n}function aE(i,e,t,n,r){i.updateWorldMatrix(!0,!1);let s=oE(i,n,r),o=jl(t,i.matrixWorld),a=Hg(i.geometry,o),c=jS(s,a),l=new _i,u=e.geometry;c.length>=6?(l.setPositions(c),e.geometry=l,e.computeLineDistances()):e.geometry=l,u?.dispose?.()}function cE(i){let e=[],t=i.get("grout")||[];for(let n of t){if(!n||!n.isMesh||!n.geometry)continue;let r=n.userData.bpHardEdgePositions;r instanceof Float32Array||(r=Lg(n.geometry),n.userData.bpHardEdgePositions=r);let s=Ng(r);if(s.length<6)continue;let o=Og(n,s);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function kg(i,e,t={}){let n=t.clippingPlanes??[],r=t.resolution||null,s=t.edgeMode??gs,o=e?cE(i):new Float32Array(0);for(let[a,c]of i)for(let l of c){if(!l||!l.isMesh||!l.geometry||En(l))continue;let u=null;for(let d of l.children)if(En(d)){u=d;break}if(!e){u&&Kl(u);continue}u&&!u.isLineSegments2&&(Kl(u),u=null);let h=sE(l,s),f=qS(l);if(u){let d=u.material,g=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${Ig}-${f}-${$l}`;if(!d||typeof d.customProgramCacheKey!="function"||g!==x){Kl(u);let m=Vf(n,r,h,f),p=new _i;u=new Lr(p,m),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(wa),l.add(u)}else d.color&&d.color.setHex(Pg),typeof d.linewidth=="number"&&(d.linewidth=Cg),d.clippingPlanes=n,d.clipIntersection=!1,r&&d.resolution&&d.resolution.set(r.x,r.y),iE(d,h),d.needsUpdate=!0}else{let d=Vf(n,r,h,f),g=new _i;u=new Lr(g,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(wa),l.add(u)}u.layers.set(wa),aE(l,u,n,a,o)}}function lE(i){if(!i.isMesh||En(i))return!1;let e=Array.isArray(i.material)?i.material[0]:i.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function Xf(i,e,t,n,r={}){if(!n)return;let s=!!r.reuseDepth,o=!1;if(n.traverse(x=>{En(x)&&(o=!0)}),!o){kf(i);return}let a=i.autoClear,c=e.background,l=e.overrideMaterial,u=t.layers.mask;if(e.background=null,i.autoClear=!1,s){Ur(n,!0),t.layers.set(wa),i.render(e,t),t.layers.mask=u,e.background=c,e.overrideMaterial=l,i.autoClear=a,kf(i);return}Ur(n,!1);let h=[];n.traverse(x=>{!lE(x)||x.visible===!1||(h.push(x),x.visible=!1)});let f=[],d=new Set;e.traverse(x=>{if(!x.isMesh||En(x)||x.visible===!1)return;let m=Array.isArray(x.material)?x.material:[x.material];for(let p of m)!p||d.has(p)||(d.add(p),f.push({mat:p,colorWrite:p.colorWrite!==!1,depthWrite:p.depthWrite!==!1}),p.colorWrite=!1,p.depthWrite=!0)}),e.overrideMaterial=null,i.clearDepth();try{i.render(e,t)}finally{for(let x of f)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of h)x.visible=!0}Ur(n,!0);let g=[];r.opaqueEdgesOnly&&n.traverse(x=>{if(!En(x))return;let m=Array.isArray(x.material)?x.material[0]:x.material;m&&m.transparent&&m.opacity<1-1e-4&&(g.push(x),x.visible=!1)}),t.layers.set(wa);try{i.render(e,t)}finally{for(let x of g)x.visible=!0}t.layers.mask=u,e.background=c,e.overrideMaterial=l,i.autoClear=a,kf(i)}function kf(i){i.state.buffers.color.setMask(!0),i.state.buffers.depth.setMask(!0)}var Vg=!0,Gg=5,Zf=12,uE=Zf,Xg=.001,hE=.5,fE=1;function Wg(i){let e=String(i.length);for(let t of i){let n=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${n}:${t.geometry?.id??0}`;let r=t.children;if(r)for(let s=0;s<r.length;s++){let o=r[s];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var Jl=1e5,yi={value:0},zt={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Xg},uResolution:{value:new Be(1,1)}};function qf(i){let e=i?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=yi.value),t.tPrevViewZ&&(t.tPrevViewZ.value=zt.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=zt.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=zt.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=zt.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(zt.uResolution.value)}function Aa(i){if(!i||i.userData.depthPeelPatched)return;i.userData.depthPeelPatched=!0;let e=i.customProgramCacheKey?.bind(i);i.customProgramCacheKey=()=>`${e?e():i.type}|depthPeel11|${i.defines?.USE_BP_PEEL?1:0}`;let t=i.onBeforeCompile?.bind(i);i.onBeforeCompile=(n,r)=>{t?.(n,r),n.uniforms.uPeelStage=yi,n.uniforms.tPrevViewZ=zt.tPrevViewZ,n.uniforms.tPeelViewZ=zt.tPeelViewZ,n.uniforms.tOpaqueViewZ=zt.tOpaqueViewZ,n.uniforms.uViewZEps=zt.uViewZEps,n.uniforms.uResolution=zt.uResolution,i.userData.shader=n,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(Jl*.5).toFixed(1)}) discard;
			float peelEps = max(uViewZEps, 1e-3 * max(peelZ, 1.0));
			if (vPeelViewZ > peelZ + peelEps) discard;
		}
	}
#endif`,o="#include <alphahash_fragment>";n.fragmentShader.includes(o)&&(n.fragmentShader=n.fragmentShader.replace(o,`${o}
${s}`)),n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
#ifdef USE_BP_PEEL
	if (uPeelStage > 0.5 && uPeelStage < 1.5) {
		gl_FragColor = vec4(vPeelViewZ, 0.0, 0.0, 1.0);
	}
#endif`)},i.needsUpdate=!0}function Yf(i,e){for(let t of i){if(!t)continue;let n=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==n&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function qg(i){let e=new Be,t=new ke,n=null,r=null,s=null,o=null,a=null,c=null,l=new di(-1,1,1,-1,0,1),u=new Pn,h=new $t({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new ke(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new je(new $n(2,2),h);u.add(f);let d=new $t({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Hc,blendSrc:ca,blendDst:Pr,blendSrcAlpha:ca,blendDstAlpha:Pr,blendEquation:Zn}),g=new je(new $n(2,2),d),x=new Pn;x.add(g);let m=new $t({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:On}),p=new je(new $n(2,2),m),y=new Pn;y.add(p);let v=new $t({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:On}),_=new je(new $n(2,2),v),C=new Pn;C.add(_);function T(){i.state.buffers.color.setMask(!0),i.state.buffers.depth.setMask(!0)}function R(I){T();let U=i.autoClear;i.setRenderTarget(I),i.autoClear=!1,i.render(C,l),i.autoClear=U}let L=new $t({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:At,clipping:!0,blending:On});function b(I,U,N={}){m.uniforms.uValue.value=U;let oe=i.autoClear;T(),i.setRenderTarget(I),N.clearDepth&&(i.setClearColor(0,1),i.clear(!1,!0,!1)),i.autoClear=!1,i.render(y,l),i.autoClear=oe}function S(){n?.dispose(),r?.dispose(),s?.dispose(),o?.dispose(),a?.dispose(),c?.dispose(),n=null,r=null,s=null,o=null,a=null,c=null}let F=0;function j(I,U,N){let oe=Math.max(1,Math.floor(I)),X=Math.max(1,Math.floor(U)),$=Math.min(1,Math.max(.25,N)),_e=Math.max(1,Math.floor(oe*$)),ie=Math.max(1,Math.floor(X*$));if(n&&n.width===oe&&n.height===X&&s&&s.width===_e&&s.height===ie&&F===$)return;S(),F=$,n=new hn(oe,X,{format:sn,type:Kn,colorSpace:xt,depthBuffer:!0,stencilBuffer:!1});let ye={format:sn,type:Fn,depthBuffer:!0,stencilBuffer:!1,magFilter:qt,minFilter:qt};r=new hn(_e,ie,ye),s=new hn(_e,ie,ye),o=new hn(_e,ie,ye),a=new hn(_e,ie,{format:sn,type:rr,colorSpace:xt,depthBuffer:!1,stencilBuffer:!1,magFilter:Yt,minFilter:Yt}),c=new hn(_e,ie,{format:sn,type:rr,colorSpace:xt,depthBuffer:!1,stencilBuffer:!1,magFilter:Yt,minFilter:Yt}),h.uniforms.tOpaque.value=n.texture,h.uniforms.tAccum.value=a.texture,zt.tOpaqueViewZ.value=r.texture,zt.uResolution.value.set(_e,ie)}function z(I){let U=[],N=[];return I?(I.traverse(oe=>{if(!oe.isMesh||!oe.visible||En(oe))return;let X=oe,$=Array.isArray(X.material)?X.material:[X.material],_e=!1;for(let ie of $)if(ie&&ie.transparent&&ie.opacity<1-1e-4){_e=!0;break}_e?N.push(X):U.push(X)}),{opaque:U,transparent:N}):{opaque:U,transparent:N}}function q(I,U){for(let N of I)N.visible=U}function Q(I,U){I.blending=U.blending,I.blendSrc=U.blendSrc,I.blendDst=U.blendDst,I.blendSrcAlpha=U.blendSrcAlpha,I.blendDstAlpha=U.blendDstAlpha,I.blendEquation=U.blendEquation,I.blendEquationAlpha=U.blendEquation}let Y={meshes:[],sources:[],key:""},ce={meshes:[],sources:[],key:""},J="",de="",ee=new Pn,he=new Pn,pe=new Pn,ne=[];function H(I){for(let U of I.meshes)U.geometry.dispose();I.meshes=[],I.sources=[],I.key=""}function ue(){for(let I of ne){pe.remove(I),I.geometry?.dispose?.();let U=I.material;if(Array.isArray(U))for(let N of U)N?.dispose?.();else U?.dispose?.()}ne=[]}function le(){H(Y),H(ce),ue(),J="",de=""}function te(I){if(ue(),!I.length)return;let U=new Map,N=new P;for(let X of I){let $=null;for(let Oe of X.children)if(En(Oe)){$=Oe;break}if(!$?.geometry)continue;let _e=$.material,ie=_e&&_e.transparent&&typeof _e.opacity=="number"?_e.opacity:1;if(!(ie<1-1e-4))continue;let ye=$.geometry.getAttribute("instanceStart"),Te=$.geometry.getAttribute("instanceEnd");if(!ye||!Te||!ye.count)continue;let Ie=ie.toFixed(3),Ee=U.get(Ie);Ee||(Ee={opacity:ie,planes:_e.clippingPlanes||[],chunks:[]},U.set(Ie,Ee)),X.updateWorldMatrix(!0,!1);let Ye=ye.count,Me=new Float32Array(Ye*6);for(let Oe=0;Oe<Ye;Oe++)N.fromBufferAttribute(ye,Oe).applyMatrix4(X.matrixWorld),Me[Oe*6]=N.x,Me[Oe*6+1]=N.y,Me[Oe*6+2]=N.z,N.fromBufferAttribute(Te,Oe).applyMatrix4(X.matrixWorld),Me[Oe*6+3]=N.x,Me[Oe*6+4]=N.y,Me[Oe*6+5]=N.z;Ee.chunks.push(Me)}let oe={stage:yi,prevZ:zt.tPrevViewZ,peelZ:zt.tPeelViewZ,opaqueZ:zt.tOpaqueViewZ,eps:zt.uViewZEps,resolution:zt.uResolution};for(let X of U.values()){let $=0;for(let Te of X.chunks)$+=Te.length;if($<6)continue;let _e=new Float32Array($),ie=0;for(let Te of X.chunks)_e.set(Te,ie),ie+=Te.length;let ye=Fg(_e,X.opacity,X.planes,oe);pe.add(ye),ne.push(ye)}}function xe(I,U,N,oe){if(!N.length)return;let X=`${Wg(N)}#${Wg(U)}`;oe&&oe===J&&X===de&&Y.meshes.length||(He(Y,I,N),He(ce,I,U),Y.sources.length===N.length&&ce.sources.length===U.length&&(te(N),J=oe||"",de=X))}function me(I){return Object.keys(I.attributes).sort().join(",")}function we(I){let U=I.geometry,N=U.index?U.toNonIndexed():U.clone();return N.applyMatrix4(I.matrixWorld),N}function He(I,U,N){let oe=String(N.length);for(let $ of N){let _e=Array.isArray($.material)?"m":$.material?.id||0;oe+=`.${$.id}:${_e}`}if(oe===I.key)return;U.updateWorldMatrix(!0,!0),H(I),I.key=oe;let X=new Map;for(let $ of N){if(!$.geometry||Array.isArray($.material)||!$.material)continue;let _e=`${$.material.uuid}:${me($.geometry)}`,ie=X.get(_e);ie||(ie={mat:$.material,meshes:[]},X.set(_e,ie)),ie.meshes.push($)}for(let $ of X.values()){let _e=[];try{for(let Te of $.meshes)_e.push(we(Te));let ie=qm(_e,!1);if(!ie)continue;let ye=new je(ie,$.mat);ye.frustumCulled=!1,ye.matrixAutoUpdate=!1,ye.renderOrder=0,ye.userData.isPeelBatch=!0,I.meshes.push(ye),I.sources.push(...$.meshes)}catch{}finally{for(let ie of _e)ie.dispose()}}}function De(I,U,N,oe){if(!I.meshes.length||I.sources.length!==U.length)return i.render(N,oe),!1;ee.environment=N.environment,ee.environmentIntensity=N.environmentIntensity,ee.fog=N.fog;let X=[];for(let $ of N.children)$.isLight&&X.push($);for(let $ of X)ee.add($);for(let $ of I.meshes)ee.add($);i.render(ee,oe);for(let $ of I.meshes)ee.remove($);for(let $ of X)N.add($);return!0}function Le(I,U,N){De(Y,N,I,U)}function O(I,U,N){N.length&&De(ce,N,I,U)}function lt(I,U,N){if(!ce.meshes.length||ce.sources.length!==U.length)return!1;he.overrideMaterial=N;for(let oe of ce.meshes)he.add(oe);i.render(he,I),he.overrideMaterial=null;for(let oe of ce.meshes)he.remove(oe);return!0}function We(I){let U=new Set;for(let N of I){let oe=Array.isArray(N.material)?N.material:[N.material];for(let X of oe)X&&U.add(X)}return[...U]}function Xe(I,U,N){if(!N)return;let oe=N.visible,X=I.background,$=i.autoClear;N.visible=!1,I.background=null,i.autoClear=!1,T(),i.clearDepth(),i.render(I,U),N.visible=oe,I.background=X,i.autoClear=$}function Pe(I){return I.children.filter(U=>U.userData?.blueprintAnnotations)}function nt(I,U){for(let N of I)N.visible=U}function Z(I,U,N){Pe(I).some(oe=>oe.visible)&&Xe(I,U,N)}function A(I,U,N,oe={}){Ur(N,!1);let X=Pe(I),$=X.map(_e=>_e.visible);nt(X,!1),i.setRenderTarget(null),i.autoClear=!0,i.render(I,U),oe.skipEdges||Xf(i,I,U,N,{reuseDepth:!!oe.reuseDepth}),X.forEach((_e,ie)=>{_e.visible=$[ie]}),Z(I,U,N)}function M(I,U,N,oe,X={}){if(!(Vg&&(typeof oe=="function"?oe():!!oe)))return yi.value=0,A(I,U,N,{reuseDepth:!0}),!1;if(X.quality!=="high"){yi.value=0,A(I,U,N,{reuseDepth:!0});let ge=X.batchKey||"";if(N&&!X.deferPrime&&ge!==J){let $e=z(N);xe(N,$e.opaque,$e.transparent,ge)}return!0}let{opaque:_e,transparent:ie}=z(N);if(!ie.length)return yi.value=0,A(I,U,N,{reuseDepth:!0}),!1;N&&xe(N,_e,ie,X.batchKey||"");let ye=X.quality==="high",Te=ye?fE:hE,Ie=ye?Zf:Gg;i.getDrawingBufferSize(e),j(e.x,e.y,Te);let Ee=i.autoClear,Ye=i.toneMapping,Me=I.background;Me instanceof ke?t.copy(Me):t.set(1118481),h.uniforms.uBackground.value.copy(t);let Oe=[];for(let ge of[..._e,...ie])Oe.push({mesh:ge,visible:ge.visible});let B=We(ie),Se=[];for(let ge of B)Aa(ge),Se.push({mat:ge,snap:{blending:ge.blending,blendSrc:ge.blendSrc,blendDst:ge.blendDst,blendSrcAlpha:ge.blendSrcAlpha,blendDstAlpha:ge.blendDstAlpha,blendEquation:ge.blendEquation,blendEquationAlpha:ge.blendEquationAlpha,depthWrite:ge.depthWrite,depthTest:ge.depthTest,transparent:ge.transparent,opacity:ge.opacity,colorWrite:ge.colorWrite,side:ge.side,forceSinglePass:ge.forceSinglePass}});Yf(B,!0);let ae=new Map;for(let ge of ie)ae.set(ge,ge.onBeforeRender),ge.onBeforeRender=function(Tn,ft,Qt,Xn,Dn,vi){let ur=Array.isArray(Dn)?Dn:[Dn];for(let ei of ur)ei&&qf(ei);let qn=ae.get(ge);typeof qn=="function"&&qn.call(this,Tn,ft,Qt,Xn,Dn,vi)};let fe=null;for(let ge of B)if(ge.clippingPlanes?.length){fe=ge.clippingPlanes;break}if(!fe)for(let ge of _e){let $e=Array.isArray(ge.material)?ge.material:[ge.material];for(let Tn of $e)if(Tn?.clippingPlanes?.length){fe=Tn.clippingPlanes;break}if(fe)break}L.clippingPlanes=fe||[],L.clipIntersection=!1,I.background=null,i.autoClear=!0,yi.value=0;let Re=[];for(let ge of I.children)ge!==N&&(ge.isLight||(Re.push({obj:ge,visible:ge.visible}),ge.visible=!1));function Ce(){for(let[ge,$e]of ae)ge.onBeforeRender=$e}function Je(){for(let{mat:ge,snap:$e}of Se)Q(ge,$e),ge.blendEquationAlpha=$e.blendEquationAlpha,ge.depthWrite=$e.depthWrite,ge.depthTest=$e.depthTest,ge.transparent=$e.transparent,ge.opacity=$e.opacity,ge.colorWrite=$e.colorWrite!==!1,ge.side=$e.side,ge.forceSinglePass=$e.forceSinglePass,ge.needsUpdate=!0;for(let{mesh:ge,visible:$e}of Oe)ge.visible=$e;for(let{obj:ge,visible:$e}of Re)ge.visible=$e;return Ce(),Yf(B,!1),yi.value=0,I.background=Me,I.overrideMaterial=null,i.toneMapping=Ye,i.setRenderTarget(null),i.autoClear=!0,A(I,U,N),i.autoClear=Ee,!1}if(q(ie,!1),q(_e,!0),Ur(N,!1),T(),i.setRenderTarget(n),i.setClearColor(0,0),i.clear(),O(I,U,_e),i.setRenderTarget(r),i.setClearColor(0,1),b(r,Jl,{clearDepth:!0}),ye){let ge=new Float32Array(4);try{i.readRenderTargetPixels(r,2,2,1,1,ge)}catch{ge[0]=0}if(!Number.isFinite(ge[0])||ge[0]<Jl*.5)return Je()}let ot=I.overrideMaterial;i.setRenderTarget(r),i.autoClear=!1,lt(U,_e,L)||(I.overrideMaterial=L,i.render(I,U),I.overrideMaterial=ot),i.autoClear=!0,zt.tOpaqueViewZ.value=r.texture,R(a),b(o,0),zt.tPrevViewZ.value=o.texture,q(_e,!1),q(ie,!0),Ur(N,!1);let It=!1;for(let ge=0;ge<Ie;ge++){zt.tPrevViewZ.value=o.texture,zt.tPeelViewZ.value=o.texture,yi.value=1;for(let{mat:ft}of Se)ft.depthWrite=!0,ft.depthTest=!0,ft.colorWrite=!0,ft.transparent=!0,ft.forceSinglePass=!0,Q(ft,{blending:On,blendSrc:Pr,blendDst:aa,blendSrcAlpha:Pr,blendDstAlpha:aa,blendEquation:Zn}),qf(ft);T(),i.setRenderTarget(s),i.setClearColor(0,1),i.clear(!1,!0,!1),b(s,Jl),i.setRenderTarget(s),i.autoClear=!1,Le(I,U,ie),i.autoClear=!0,zt.tPeelViewZ.value=s.texture,yi.value=2;for(let{mat:ft}of Se)ft.depthWrite=!1,ft.depthTest=!1,ft.colorWrite=!0,ft.transparent=!0,ft.forceSinglePass=!0,Q(ft,{blending:ui,blendSrc:Vs,blendDst:Yr,blendSrcAlpha:Pr,blendDstAlpha:Yr,blendEquation:Zn}),qf(ft);R(c);let $e=i.autoClear;if(i.autoClear=!1,i.setRenderTarget(c),Le(I,U,ie),i.autoClear=$e,ne.length&&c){for(let Qt of ne)Qt.material?.resolution?.set(c.width,c.height);let ft=U.layers.mask;U.layers.set(0),i.autoClear=!1,i.render(pe,U),U.layers.mask=ft,i.autoClear=!0}It=!0,d.uniforms.tSrc.value=c.texture,i.setRenderTarget(a),i.autoClear=!1,i.render(x,l),i.autoClear=!0;let Tn=o;o=s,s=Tn}if(!It)return Je();for(let{mat:ge,snap:$e}of Se)Q(ge,$e),ge.blendEquationAlpha=$e.blendEquationAlpha,ge.depthWrite=$e.depthWrite,ge.depthTest=$e.depthTest,ge.transparent=$e.transparent,ge.opacity=$e.opacity,ge.colorWrite=$e.colorWrite!==!1,ge.side=$e.side,ge.forceSinglePass=$e.forceSinglePass;for(let{mesh:ge,visible:$e}of Oe)ge.visible=$e;for(let{obj:ge,visible:$e}of Re)ge.visible=$e;Ce(),Ur(N,!0),Yf(B,!1),yi.value=0,I.background=Me,i.toneMapping=Ye,i.setRenderTarget(null),i.autoClear=!0,i.render(u,l);let Ge=Pe(I),mt=Ge.map(ge=>ge.visible);return nt(Ge,!1),ye&&N&&Xf(i,I,U,N,{opaqueEdgesOnly:ne.length>0}),Ge.forEach((ge,$e)=>{ge.visible=mt[$e]}),Z(I,U,N),i.autoClear=Ee,!0}function D(){le(),S(),h.dispose(),f.geometry.dispose(),d.dispose(),g.geometry.dispose(),m.dispose(),p.geometry.dispose(),v.dispose(),_.geometry.dispose(),L.dispose()}return{render:M,dispose:D,MAX_PEELS:uE,MAX_PEELS_FAST:Gg,MAX_PEELS_HIGH:Zf,VIEW_Z_EPSILON:Xg,USE_DEPTH_PEEL:Vg}}var Zg="blueprints.materialMode",Ql="solid",Ra="realistic",dE={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},pE={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},mE=2e-6,gE=2;function Kf(i,e=0){if(i.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(i.userData.layerDepthBias=t,!(t>0))return;i.userData.layerDepthPatched=!0;let n=i.onBeforeCompile?.bind(i),r=i.customProgramCacheKey?.bind(i),s=mE.toExponential(8);i.onBeforeCompile=(o,a)=>{n?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if defined( USE_LOGDEPTHBUF )
	{
		float bpFaceBias = ${t}.0 * ${s};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},i.customProgramCacheKey=()=>`${r?r():i.type}|bpLayerDepth-r${gE}-${t}`,i.needsUpdate=!0}var xE=[];function $g(i,e,t){let n=new Set(i),r=Array.isArray(e)&&e.length?e:xE,s=typeof t=="function"?t:c=>c;function o(c){let l=[];for(let u of c){if(typeof u=="string"){if(!n.has(u))continue;n.delete(u),l.push({type:"leaf",id:u,label:s(u)});continue}let h=o(u.children||[]);h.length&&l.push({type:"group",id:u.id,label:s(u.id),children:h})}return l}let a=o(r);if(n.size){let c=[...n].sort((l,u)=>l.localeCompare(u)).map(l=>({type:"leaf",id:l,label:s(l)}));a.push({type:"group",id:"other",label:s("other"),children:c})}return a}function Kg(i,e){if(!i||typeof i!="object")return{};let t=new Map;for(let r of e)r.type==="group"&&t.set(r.id,eu(r));let n={};for(let[r,s]of Object.entries(i)){let o=t.get(r);if(o&&o.length)for(let a of o)n[a]=s;else n[r]=s}return n}function eu(i){if(i.type==="leaf")return[i.id];let e=[];for(let t of i.children)e.push(...eu(t));return e}function _E(i,e,t="transparent"){if(t==="none")return;let n=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let r of i.children||[]){if(!r?.userData?.isEdgeOverlay||!r.material)continue;let s=Array.isArray(r.material)?r.material:[r.material];for(let o of s)o&&(n<1?(o.transparent=!0,o.opacity=n,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Nr(i,e,t={}){let n=Math.max(0,Math.min(1,Number(e)||0)),r=t.edgeMode??"transparent";for(let s of i){if(!s)continue;if(n<=0){s.visible=!1;continue}if(s.visible=!0,!s.isMesh)continue;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a&&(n<1?(a.transparent=!0,a.opacity=n,a.depthWrite=!1,a.depthTest=!0,a.side=At,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=At,a.forceSinglePass=!1,a.blending=ui,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof s.userData.opaqueRenderOrder!="number"&&(s.userData.opaqueRenderOrder=s.renderOrder||0),s.renderOrder=n<1?0:s.userData.opaqueRenderOrder,_E(s,n,r);for(let a of s.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=s.renderOrder;let c=Array.isArray(a.material)?a.material:[a.material];for(let l of c)l&&(l.opacity=n,l.transparent=n<1,l.depthWrite=n>=1,l.depthTest=!0,l.forceSinglePass=n<1,l.side=At,l.needsUpdate=!0)}}}var yE={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},$f=new Map;function vE(i){if(!i||i==="none")return null;let e=$f.get(i);if(e)return e;let t=128,n=document.createElement("canvas");n.width=t,n.height=t;let r=n.getContext("2d");if(!r)return null;if(i==="wood"){r.fillStyle="#c49858",r.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,c=130+o*17%50;r.strokeStyle=`rgba(${c-40}, ${c-60}, ${c-100}, 0.55)`,r.lineWidth=1.2,r.beginPath(),r.moveTo(0,o+a*.15),r.lineTo(t,o-a*.1),r.stroke()}for(let o=0;o<60;o++){let a=o*37%t,c=o*53%t;r.fillStyle="rgba(70, 40, 15, 0.22)",r.fillRect(a,c,2,7+o%5)}}else if(i==="foam"){r.fillStyle="#9ed468",r.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let c=o/7%2*3.5,l=2.4+a*o%5*.2;r.beginPath(),r.arc(a+c+3.5,o+3.5,l,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.55)",r.fill(),r.strokeStyle="rgba(40,90,30,0.35)",r.stroke()}}else if(i==="plaster"){let o=r.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let c=200+a*13%45;o.data[a]=c,o.data[a+1]=c-10,o.data[a+2]=c-22,o.data[a+3]=255}r.putImageData(o,0,0)}else if(i==="wool"){r.fillStyle="#88c860",r.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,c=o*91%t;r.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",r.fillRect(a,c,1+o%2,2+o%3)}}else if(i==="metal"){let o=r.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),r.fillStyle=o,r.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(0,a,t,2),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(0,a+4,t,2)}else if(i==="masonry"){r.fillStyle="#b88868",r.fillRect(0,0,t,t);let o=16,a=32;for(let c=0;c<t/o;c++){let l=c%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+l,f=c*o;r.fillStyle=`rgba(${170+(c+u)%3*18}, ${110+c%4*10}, ${70+u%3*12}, 0.75)`,r.fillRect(h+1,f+1,a-2,o-2),r.strokeStyle="rgba(70,45,30,0.55)",r.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let s=new Ji(n);return s.colorSpace=xt,s.wrapS=hi,s.wrapT=hi,s.repeat.set(2.5,2.5),s.needsUpdate=!0,$f.set(i,s),s}function Yg(i){return new ke(i[0]/255,i[1]/255,i[2]/255)}function ME(i){return dE[i]||[160,160,160]}function bE(i,e,t=0){i.side=At,t>0?(i.polygonOffset=!0,i.polygonOffsetFactor=-t,i.polygonOffsetUnits=-t*2):(i.polygonOffset=!1,i.polygonOffsetFactor=0,i.polygonOffsetUnits=0),e?(i.clippingPlanes=e,i.clipIntersection=!1):i.clippingPlanes=[],Kf(i,t),Aa(i),i.needsUpdate=!0}function jg(i){i.computeBoundingBox();let e=i.boundingBox,t=new P;e.getSize(t);let n=Math.max(t.x,1e-6),r=Math.max(t.y,1e-6),s=Math.max(t.z,1e-6),o=Math.max(n,r,s);i.getAttribute("normal")||i.computeVertexNormals();let a=i.getAttribute("position"),c=i.getAttribute("normal");if(!a)return o;let l=i.getAttribute("uv");if(l&&l.count===a.count)return o;let u=new Float32Array(a.count*2),h=new P;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(c.getX(f)),g=Math.abs(c.getY(f)),x=Math.abs(c.getZ(f)),m,p;g>=d&&g>=x?(m=(h.x-e.min.x)/n,p=(h.z-e.min.z)/s):d>=x?(m=(h.z-e.min.z)/s,p=(h.y-e.min.y)/r):(m=(h.x-e.min.x)/n,p=(h.y-e.min.y)/r),u[f*2]=m,u[f*2+1]=p}return i.setAttribute("uv",new vt(u,2)),o}function SE(i,e){let t=vE(i);if(!t)return null;let n=t.clone();n.needsUpdate=!0;let r=Math.max(1.2,Math.min(12,e/400));return n.repeat.set(r,r),n}function Jg(i,e,t={}){let n=t.clippingPlanes??null,r=e===Ra,s=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,c]of i){let l=ME(a),u=pE[a]??0,h=1e3;if(r)for(let p of c)p.isMesh&&p.geometry&&(h=Math.max(h,jg(p.geometry)));let f=1,d;if(r){let p=yE[a]||{color:l,roughness:.7,metalness:0,map:"none"};f=typeof p.opacity=="number"?p.opacity:1;let y=Yg(p.color),v=SE(p.map||"none",h);p.clearcoat?d=new rn({color:y,map:v,roughness:p.roughness,metalness:p.metalness,clearcoat:p.clearcoat,clearcoatRoughness:p.clearcoatRoughness??.3,envMapIntensity:.85}):d=new Mn({color:y,map:v,roughness:p.roughness,metalness:p.metalness,envMapIntensity:p.metalness>.05?1.1:.55})}else d=new Ht({color:Yg(l)});bE(d,n,u),d.userData.presetOpacity=f;let g=new Set;for(let p of c){if(!p.isMesh)continue;let y=p.material;if(y){let v=Array.isArray(y)?y:[y];for(let _ of v)g.add(_)}p.material=d,p.userData.opaqueRenderOrder=u,p.renderOrder=u}for(let p of g)p!==d&&(p.map&&[...$f.values()].includes(p.map)?p.map=null:p.map&&(p.map.dispose?.(),p.map=null),p.dispose?.());let x=1;s&&(s instanceof Map?x=s.has(a)?s.get(a):1:typeof s[a]=="number"&&(x=s[a]));let m=Math.max(0,Math.min(1,f*(Number(x)||0)));Nr(c,m,{edgeMode:o})}}function Qg(i,e){let n=(Array.isArray(i)?i:[i]).map(r=>{if(!r)return new Mn({color:13421772,roughness:.65,metalness:0,side:Nn});let s=r.color?r.color.clone():new ke(13421772),o=typeof r.roughness=="number"?r.roughness:.65,a=typeof r.metalness=="number"?r.metalness:0,c=null;r.map&&e&&(jg(e),c=r.map.clone(),c.needsUpdate=!0);let l=new Mn({color:s,map:c,roughness:o,metalness:a,side:Nn,transparent:!!r.transparent,opacity:typeof r.opacity=="number"?r.opacity:1});return l.clippingPlanes=null,l.clipIntersection=!1,l});return Array.isArray(i)?n:n[0]}function e0(){try{let i=localStorage.getItem(Zg);if(i===Ra||i===Ql)return i}catch{}return Ql}function t0(i){try{localStorage.setItem(Zg,i)}catch{}}var Fi=1e-5,n0=new WeakMap;function Wn(i,e,t,n){let r=t/(t-n);return i.clone().lerp(e,r)}function EE(i,e,t){let[n,r,s]=i,o=e.distanceToPoint(n),a=e.distanceToPoint(r),c=e.distanceToPoint(s),l=o>=-Fi,u=a>=-Fi,h=c>=-Fi,f=(l?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([n,r,s]);return}if(f===0)return;let d=[n,r,s],g=[o,a,c],x=[l,u,h];if(f===1){let v=x.findIndex(Boolean),_=(v+1)%3,C=(v+2)%3,T=d[v],R=Wn(d[v],d[_],g[v],g[_]),L=Wn(d[v],d[C],g[v],g[C]);t.push([T,R,L]);return}let m=x.findIndex(v=>!v),p=(m+1)%3,y=(m+2)%3;if(x[p]){let v=d[p],_=d[y],C=Wn(d[m],d[p],g[m],g[p]),T=Wn(d[m],d[y],g[m],g[y]);t.push([v,_,C]),t.push([_,T,C])}else{let v=d[y],_=Wn(d[m],d[p],g[m],g[p]),C=Wn(d[m],d[y],g[m],g[y]);t.push([v,_,C])}}function wE(i,e){let[t,n,r]=i,s=e.distanceToPoint(t),o=e.distanceToPoint(n),a=e.distanceToPoint(r),c=s>=-Fi,l=o>=-Fi,u=a>=-Fi,h=(c?1:0)+(l?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,n,r],d=[s,o,a],g=[c,l,u];if(h===1){let y=g.findIndex(Boolean),v=(y+1)%3,_=(y+2)%3;return[Wn(f[y],f[v],d[y],d[v]),Wn(f[y],f[_],d[y],d[_])]}let x=g.findIndex(y=>!y),m=(x+1)%3,p=(x+2)%3;return g[m]?[Wn(f[x],f[m],d[x],d[m]),Wn(f[x],f[p],d[x],d[p])]:[Wn(f[x],f[m],d[x],d[m]),Wn(f[x],f[p],d[x],d[p])]}function TE(i,e,t){let n=i.clone(),r=e.clone();for(let s of t){let o=s.distanceToPoint(n),a=s.distanceToPoint(r),c=o>=-Fi,l=a>=-Fi;if(c&&l)continue;if(!c&&!l)return null;let u=Wn(n,r,o,a);c?r=u:n=u}return n.distanceToSquared(r)<Fi*Fi?null:[n,r]}function AE(i,e){let t=i;for(let n of e){let r=[];for(let s of t)EE(s,n,r);if(t=r,t.length===0)break}return t}function RE(i,e){let t=i.getAttribute("position");if(!t)return[];let n=new P,r=[],s=i.getIndex();function o(a,c,l){r.push([n.fromBufferAttribute(t,a).applyMatrix4(e).clone(),n.fromBufferAttribute(t,c).applyMatrix4(e).clone(),n.fromBufferAttribute(t,l).applyMatrix4(e).clone()])}if(s)for(let a=0;a<s.count;a+=3)o(s.getX(a),s.getX(a+1),s.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return r}function CE(i){let e=i.getAttribute("position");if(!e)return[];let t=new P,n=[],r=i.getIndex();function s(o,a,c){n.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,c).clone()])}if(r)for(let o=0;o<r.count;o+=3)s(r.getX(o),r.getX(o+1),r.getX(o+2));else for(let o=0;o<e.count;o+=3)s(o,o+1,o+2);return n}var xs=1e-6,i0=2e-4,PE=2e-4,r0=new WeakMap;function IE(i){let e="";for(let t of i)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function s0(i){let e=t=>Math.round(t/xs);return`${e(i.x)},${e(i.y)},${e(i.z)}`}function c0(i,e){let t=IE(e),n=r0.get(i);if(n&&n.key===t)return n;let r=[],s=[],o=n0.get(i);if(o||(o=CE(i),n0.set(i,o)),o.length&&e?.length)for(let c=0;c<e.length;c++){let l=e[c],u=e.filter((f,d)=>d!==c),h=[];for(let f of o){let d=wE(f,l);if(!d)continue;let g=u.length?TE(d[0],d[1],u):d;g&&(h.push(g),r.push(g[0].x,g[0].y,g[0].z,g[1].x,g[1].y,g[1].z))}s.push(h)}let a={key:t,segments:new Float32Array(r),perPlane:s};return r0.set(i,a),a}function DE(i,e,t){let n=new Map;for(let c of i.keys())n.set(c,c);function r(c){let l=c;for(;n.get(l)!==l;){let u=n.get(n.get(l));n.set(l,u),l=u}return l}function s(c){let l=r(c),u=0;for(let h of t.get(l)||[])e[h].dead||u++;return u}function o(){let c=[];for(let l of i.keys())r(l)===l&&s(l)%2&&c.push(l);return c}let a=i0*i0;for(let c=0;c<e.length+2;c++){let l=o();if(l.length<2)break;let u=-1,h=-1,f=1/0;for(let p=0;p<l.length;p++){let y=i.get(l[p]);for(let v=p+1;v<l.length;v++){let _=i.get(l[v]),C=y.x-_.x,T=y.y-_.y,R=y.z-_.z,L=C*C+T*T+R*R;L<f&&(f=L,u=p,h=v)}}if(f>a)break;let d=l[u],g=l[h],x=i.get(d),m=i.get(g);x.add(m).multiplyScalar(.5);for(let p of t.get(g)||[]){let y=e[p];if(y.dead)continue;let v=r(y.a===g?y.b:y.a);if(v===d){y.dead=!0;continue}y.a=d,y.b=v,t.has(d)||t.set(d,[]),t.get(d).push(p)}n.set(g,d)}}function LE(i){let e=new Map,t=[],n=new Map;for(let[o,a]of i){let c=s0(o),l=s0(a);if(c===l)continue;e.has(c)||e.set(c,o.clone()),e.has(l)||e.set(l,a.clone());let u=t.length;t.push({a:c,b:l,used:!1,dead:!1}),n.has(c)||n.set(c,[]),n.has(l)||n.set(l,[]),n.get(c).push(u),n.get(l).push(u)}DE(e,t,n);function r(o,a){let c=n.get(o)||[],l=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of c){if(t[d].used||t[d].dead)continue;if(!f)return d;let g=t[d],x=g.a===o?g.b:g.a,m=e.get(x),p=h.x-f.x,y=h.y-f.y,v=h.z-f.z,_=m.x-h.x,C=m.y-h.y,T=m.z-h.z,R=p*_+y*C+v*T;R>u&&(u=R,l=d)}return l}let s=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],c=[],l=o,u=t[l].a,h=u,f=null,d=!1,g=t.length+2;for(let x=0;x<g;x++){t[l].used=!0,c.push(l),a.push(e.get(u).clone());let m=t[l].a===u?t[l].b:t[l].a;if(m===h){d=!0;break}let p=r(m,u);if(p<0)break;f=u,u=m,l=p}d&&a.length>=3&&s.push(a)}return s}function UE(i){let e=i.clone().normalize(),t=Math.abs(e.x)<.9?new P(1,0,0):new P(0,1,0),n=new P().crossVectors(t,e).normalize(),r=new P().crossVectors(e,n).normalize();return{u:n,v:r,n:e}}function NE(i,e,t,n){return i.map(r=>{let s=r.clone().sub(e);return{x:s.dot(t),y:s.dot(n),p3:r}})}function OE(i){let e=0;for(let t=0;t<i.length;t++){let n=(t+1)%i.length;e+=i[t].x*i[n].y-i[n].x*i[t].y}return e*.5}function FE(i){return OE(i)<0&&i.reverse(),i}function o0(i,e,t){let n=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){let o=t[r].y,a=t[s].y,c=t[r].x,l=t[s].x;o>e!=a>e&&i<(l-c)*(e-o)/(a-o+0)+c&&(n=!n)}return n}function cr(i,e,t){return(e.x-i.x)*(t.y-i.y)-(e.y-i.y)*(t.x-i.x)}function BE(i,e,t,n){let r=cr(i,e,t),s=cr(i,e,n),o=cr(t,n,i),a=cr(t,n,e);return r*s<0&&o*a<0}function a0(i,e,t,n){let r=t.length;for(let s=0;s<r;s++){let o=(s+1)%r;if(!(n>=0&&(s===n||o===n))&&BE(i,e,t[s],t[o]))return!0}return!1}function zE(i,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let n=e[t],r=-1,s=1/0,o=i.length;for(let f=0;f<o;f++){let d=i[f],g=i[(f+1)%o];if(d.y>n.y==g.y>n.y)continue;let x=g.y-d.y;if(Math.abs(x)<1e-15)continue;let m=(n.y-d.y)/x;if(m<-1e-8||m>1+1e-8)continue;let p=d.x+m*(g.x-d.x);p>=n.x-1e-8&&p<s&&(s=p,r=f)}let a=[];r>=0&&a.push(r,(r+1)%o);let c=0,l=1/0;for(let f=0;f<o;f++){let d=(i[f].x-n.x)**2+(i[f].y-n.y)**2;d<l&&(l=d,c=f)}a.push(c);let u=-1;for(let f of a)if(!a0(n,i[f],i,f)&&!a0(n,i[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(i[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(i[f])}return h}function jf(i,e){return(i.x-e.x)**2+(i.y-e.y)**2<=xs*xs}function kE(i,e,t,n){if(jf(i,e)||jf(i,t)||jf(i,n))return!1;let r=cr(e,t,i),s=cr(t,n,i),o=cr(n,e,i),a=r<-1e-14||s<-1e-14||o<-1e-14,c=r>1e-14||s>1e-14||o>1e-14;return!(a&&c)}function HE(i){let e=[];for(let r of i){let s=e[e.length-1];s&&(s.x-r.x)**2+(s.y-r.y)**2<xs*xs||e.push(r)}if(e.length>=2){let r=e[0],s=e[e.length-1];(r.x-s.x)**2+(r.y-s.y)**2<xs*xs&&e.pop()}let t=[],n=e.length*e.length+8;for(;e.length>3&&n-- >0;){let r=!1,s=e.length;for(let o=0;o<s;o++){let a=(o+s-1)%s,c=(o+1)%s,l=e[a],u=e[o],h=e[c],f=cr(l,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),r=!0;break}let d=!1;for(let g=0;g<s;g++)if(!(g===o||g===a||g===c)&&kE(e[g],l,u,h)){d=!0;break}if(!d){t.push([l.p3,u.p3,h.p3]),e.splice(o,1),r=!0;break}}if(!r)break}return e.length===3&&cr(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function VE(i,e,t){if(!i.length)return[];let{u:n,v:r,n:s}=UE(e.normal),o=i[0][0],a=i.map(u=>FE(NE(u,o,n,r))),c=a.map((u,h)=>{let f=u[0],d=0;for(let g=0;g<a.length;g++)g!==h&&o0(f.x,f.y,a[g])&&d++;return d}),l=[];for(let u=0;u<a.length;u++){if(c[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(c[d]!==c[u]+1||!o0(a[d][0].x,a[d][0].y,h))continue;let g=zE(h,a[d]);g&&(h=g)}let f=HE(h);for(let d of f)l.push(d.map(g=>g.clone().addScaledVector(s,t)))}return l}function l0(i,e){return!i||!e?.length?[]:c0(i,e).perPlane}function u0(i,e,t=0){if(!i?.length||!e)return new Float32Array(0);let n=LE(i),r=VE(n,e,PE+Math.max(0,t));if(!r.length)return new Float32Array(0);let s=new Float32Array(r.length*9),o=0;for(let[a,c,l]of r)s[o++]=a.x,s[o++]=a.y,s[o++]=a.z,s[o++]=c.x,s[o++]=c.y,s[o++]=c.z,s[o++]=l.x,s[o++]=l.y,s[o++]=l.z;return s}function Hg(i,e){return!i||!e?.length?new Float32Array(0):c0(i,e).segments}function jl(i,e){if(!i?.length)return[];let t=new Ke().copy(e).invert();return i.map(n=>n.clone().applyMatrix4(t))}function GE(i){let e=new Float32Array(i.length*9),t=0;for(let[r,s,o]of i)e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let n=new Tt;return n.setAttribute("position",new vt(e,3)),n.computeVertexNormals(),n}function h0(i,e){if(!i.visible||!i.geometry)return null;let t=RE(i.geometry,i.matrixWorld);if(t.length===0)return null;let n=e.length?AE(t,e):t;if(n.length===0)return null;let r=GE(n),s=Qg(i.material,r),o=new je(r,s);return o.name=i.name,o}var WE=5e-5;function nu(i){return!!(i&&i.userData&&i.userData.isSectionCap)}function Jf(i){return i?Array.isArray(i)?i[0]||null:i:null}function d0(i,e){let t;return i.isMeshPhysicalMaterial?t=new rn:i.isMeshStandardMaterial?t=new Mn:t=new Ht,i.color&&t.color&&t.color.copy(i.color),i.map&&"map"in t&&(t.map=i.map),typeof i.roughness=="number"&&"roughness"in t&&(t.roughness=i.roughness),typeof i.metalness=="number"&&"metalness"in t&&(t.metalness=i.metalness),typeof i.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=i.clearcoat,t.clearcoatRoughness=i.clearcoatRoughness??.3),typeof i.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=i.envMapIntensity),t.opacity=typeof i.opacity=="number"?i.opacity:1,t.transparent=!!i.transparent,t.depthWrite=i.depthWrite!==!1,t.depthTest=i.depthTest!==!1,t.side=At,t.forceSinglePass=!!i.forceSinglePass,t.toneMapped=i.toneMapped!==!1,t.polygonOffset=!!i.polygonOffset,t.polygonOffsetFactor=i.polygonOffsetFactor||0,t.polygonOffsetUnits=i.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,Kf(t,i.userData?.layerDepthBias||0),Aa(t),t.needsUpdate=!0,t}function tu(i){i.parent?.remove(i),i.geometry?.dispose?.();let e=i.material,t=Array.isArray(e)?e:[e];for(let n of t)n&&(n.map=null),n?.dispose?.()}function XE(i){let e="";for(let t of i)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function qE(i,e){if(!i)return null;for(let t of i.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function p0(i,e){let t=new Set;for(let n of i){let r=n.parent;if(!r||t.has(r))continue;t.add(r);let s=qE(r,e);if(s)return s}return null}function f0(i,e,t){i.visible=!0;for(let n of i.children){if(!n.isMesh)continue;let r=Jf(n.material);r&&(e.color&&r.color&&r.color.copy(e.color),r.opacity=typeof e.opacity=="number"?e.opacity:1,r.transparent=!!e.transparent,r.depthWrite=e.depthWrite!==!1,r.depthTest=e.depthTest!==!1,r.forceSinglePass=!!e.forceSinglePass,r.side=At,r.needsUpdate=!0,n.visible=!0,n.renderOrder=t)}}function YE(i,e,t,n){let r=e.filter(d=>d?.isMesh&&d.visible&&!nu(d)&&d.geometry),s=p0(e,i);if(!r.length||!t.length){s&&tu(s);return}let o=r[0],a=o.parent;if(!a)return;s&&s.parent!==a&&tu(s);let c=s&&s.parent===a?s:new Lt;for(let d of[...c.children])tu(d);c.parent||(c.name=`${i}__caps`,c.userData.isSectionCap=!0,c.userData.capLabel=i,a.add(c));let l=Jf(o.material);if(!l)return;a.updateWorldMatrix(!0,!0);let u=new Ke().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of r){d.updateWorldMatrix(!0,!1);let g=jl(t,d.matrixWorld),x=l0(d.geometry,g);for(let m=0;m<t.length;m++){let p=x[m]||[];for(let[y,v]of p)f[m].push([y.clone().applyMatrix4(d.matrixWorld),v.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let g=u0(f[d],t[d],h*WE);if(g.length<9)continue;for(let y=0;y<g.length;y+=3){let v=new P(g[y],g[y+1],g[y+2]).applyMatrix4(u);g[y]=v.x,g[y+1]=v.y,g[y+2]=v.z}let x=new Tt;x.setAttribute("position",new vt(g,3)),x.computeVertexNormals();let m=t.filter((y,v)=>v!==d),p=new je(x,d0(l,m));p.name=`${i}__cap${d}`,p.userData.isSectionCap=!0,p.userData.capPlaneIndex=d,p.userData.capLabel=i,p.renderOrder=o.renderOrder,p.raycast=()=>{},c.add(p)}c.userData.bpCapSig=n,c.userData.bpCapMatUuid=l.uuid,c.visible=c.children.length>0}function Qf(i,e){let t=e||[],n=XE(t);for(let[r,s]of i){let o=(s||[]).filter(u=>u&&!nu(u));if(!o.length)continue;let a=o.filter(u=>u.visible),c=p0(o,r);if(!t.length||!a.length){c&&tu(c);continue}let l=Jf(a[0].material);if(c&&c.userData.bpCapSig===n&&l&&c.userData.bpCapMatUuid===l.uuid&&c.children.length){f0(c,l,a[0].renderOrder||0);continue}if(c&&c.userData.bpCapSig===n&&l&&c.children.length){for(let u of c.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((x,m)=>m!==f):t;u.material=d0(l,d);let g=Array.isArray(h)?h:[h];for(let x of g)x&&(x.map=null),x?.dispose?.()}c.userData.bpCapMatUuid=l.uuid,f0(c,l,a[0].renderOrder||0);continue}YE(r,o,t,n)}}var ZE=2,$E=.45,m0=.015;function ed(i){let e=new Nt().setFromObject(i);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:m0};let t=new P;e.getSize(t);let n=Math.max(t.x,t.y,t.z,1e-9),r=n>ZE?$E/n:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:n,scale:r,liftM:m0}}function g0(i,e=ed(i)){let{cx:t,cz:n,minY:r,scale:s,liftM:o}=e;return i.position.set(-t*s,-r*s+o,-n*s),i.scale.setScalar(s),i.updateMatrixWorld(!0),e}var KE=`
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
`,x0=!1;function jE(){if(x0)return;x0=!0;let i=document.createElement("style");i.id="bp-viewer-chrome",i.textContent=KE,document.head.appendChild(i)}function _0(i){jE();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),n=document.getElementById("sheet-scroll"),r=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function c(){return r.matches}function l(){return a}function u(){for(let Z of o)Z(a)}function h(Z){o.push(Z),Z(a)}function f(){if(!e||!n)return;let Z=document.getElementById("section-view"),A=document.getElementById("section-cuts"),M=t?.offsetHeight||22,D=16,I=0;if(Z&&(I+=Z.offsetHeight),A){let _e=A.querySelector(".sheet-title"),ie=A.querySelector(".cut-row");I+=32,_e&&(I+=_e.offsetHeight+8),ie?I+=ie.offsetHeight:I+=A.offsetHeight}let U=M+I+D,N=window.innerHeight||640,oe=Math.round(N*.28),X=Math.round(N*.45),$=Math.max(oe,Math.min(X,Math.round(U)));return e.style.setProperty("--sheet-partial-h",`${$}px`),$}function d(){f(),!c()&&a==="partial"&&u()}function g(Z){let A=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${Z}`).trim(),M=parseFloat(A);return Number.isFinite(M)?M:0}function x(){let Z={top:0,right:0,bottom:0,left:0};if(!e)return Z;if(c()){if(a!=="open")return Z;let M=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(M)),bottom:0,left:0}}if(a!=="partial")return Z;let A=Math.round(H()+g("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,A)),left:0}}function m(Z,A={}){if(!e)return;(c()?["closed","open"]:["peek","partial","full"]).includes(Z)||(Z=c()?"open":"peek"),a=Z,e.dataset.detent=Z,e.classList.toggle("sheet-open",Z!=="peek"&&Z!=="closed"),document.body.classList.toggle("sheet-open",Z!=="peek"&&Z!=="closed"),_(),A.silent||u()}function p(){c()?m("open"):m("peek"),f()}let y=document.getElementById("top-chrome"),v=document.getElementById("sheet-toggle");if(!v&&y){let Z=y.querySelector(".top-chrome-end");Z||(Z=document.createElement("div"),Z.className="top-chrome-end",y.append(Z)),v=document.createElement("button"),v.type="button",v.id="sheet-toggle",v.className="chrome-btn sheet-toggle",Z.append(v)}function _(){if(!v)return;let Z=a==="open";v.setAttribute("aria-expanded",Z?"true":"false"),v.setAttribute("aria-label",Z?"Hide controls":"Show controls"),v.title=Z?"Hide controls":"Show controls",v.textContent=Z?"\u203A":"\u2039"}v?.addEventListener("click",()=>{c()&&m(a==="open"?"closed":"open")});let C=!1,T=null,R=!1,L=!1,b=0,S=0,F=0,j=0,z="peek",q=0,Q=0,Y=0,ce=0,J=0,de=null,ee=12,he=28,pe='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function ne(){return Math.max(t?.offsetHeight||34,34)+8}function H(){return f()||window.innerHeight*.38}function ue(){let Z=window.innerHeight||640;return Math.min(Z*.92,Z-72)}function le(){return e?.offsetWidth||0}function te(Z){return Z instanceof Element?!!Z.closest(pe):!1}function xe(){if(c()){m(a==="open"?"closed":"open");return}m(a==="peek"?"partial":a==="partial"?"full":"peek")}function me(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function we(Z,A,M){if(e){C=!0,R=!1,T=A,L=!1,z=a,b=Z.clientY,S=Z.clientX,q=b,Q=S,Y=performance.now(),ce=0,J=0,j=M,de=Z.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${j}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(Z.pointerId)}catch{}}}function He(Z){if(!(!e||!t)&&!(Z.target!==t&&!t.contains(Z.target)&&Z.target!==e)){C=!0,R=!1,T="narrow",L=!1,z=a,e.classList.add("is-dragging"),b=Z.clientY,S=Z.clientX,q=b,Q=S,Y=performance.now(),ce=0,J=0,F=e.getBoundingClientRect().height,de=Z.pointerId;try{t.setPointerCapture(Z.pointerId)}catch{}Z.preventDefault()}}function De(Z){if(!e||Z.pointerType==="mouse"&&Z.button!==0||Z.target instanceof Element&&Z.target.closest(".chrome-btn"))return;let A=le();if(a==="closed"){let M=window.innerWidth-he-g("r");if(Z.clientX<M)return;we(Z,"wide-open",A),Z.preventDefault();return}e.contains(Z.target)&&(te(Z.target)||(C=!0,R=!0,T="wide-close",L=!1,z=a,b=Z.clientY,S=Z.clientX,q=b,Q=S,Y=performance.now(),ce=0,J=0,j=0,de=Z.pointerId))}function Le(Z){c()?De(Z):He(Z)}function O(Z){if(!C||!e||de!=null&&Z.pointerId!==de)return;let A=performance.now(),M=Math.max(1,A-Y),D=Math.hypot(Z.clientX-S,Z.clientY-b);if(R){if(D<=ee)return;let oe=Z.clientX-S,X=Z.clientY-b;if(Math.abs(oe)<Math.abs(X)*1.15||oe<=0){C=!1,R=!1,T=null,de=null;return}R=!1,L=!0,e.classList.add("is-dragging"),n&&(n.style.overflow="hidden");try{e.setPointerCapture(Z.pointerId)}catch{}Z.preventDefault()}if(D>ee&&(L=!0),T==="narrow"){let oe=b-Z.clientY;ce=(q-Z.clientY)/M*1e3,q=Z.clientY,Y=A;let X=ne(),$=ue(),_e=Math.max(X,Math.min($,F+oe));e.style.height=`${_e}px`;return}let I=Z.clientX-S;J=(Z.clientX-Q)/M*1e3,Q=Z.clientX,Y=A;let U=le(),N=Math.max(0,Math.min(U,j+I));e.style.transform=`translateX(${N}px)`}function lt(Z,A){let M=[{name:"peek",h:ne()},{name:"partial",h:H()},{name:"full",h:ue()}],D=Math.max(0,M.findIndex($=>$.name===z)),I=M[D].h;if(Math.abs(Z-I)<36&&Math.abs(A)<1100)return z;let U=Z+A*.05,N=(M[0].h+M[1].h)/2,oe=(M[1].h+M[2].h)/2,X=U<N?0:U<oe?1:2;if(X>D+1&&(X=D+1),X<D-1&&(X=D-1),X===2&&D<2){let $=oe+(M[2].h-oe)*.25;Z<$&&A<1400&&(X=1)}return M[X].name}function We(Z,A){let M=le();return M<=0||Math.abs(Z-(z==="closed"?M:0))<28&&Math.abs(A)<800?z:A>900?"closed":A<-900?"open":Z>M*.45?"closed":"open"}function Xe(Z){if(!C||!e||de!=null&&Z.pointerId!==de)return;let A=T,M=R;if(C=!1,R=!1,T=null,de=null,e.classList.remove("is-dragging"),n&&(n.style.overflow=""),M&&!L)return;if(!L){A==="narrow"?(e.style.height="",xe()):A==="wide-open"?(me(),m("open")):me();return}if(A==="narrow"){let U=e.getBoundingClientRect().height;e.style.height="",m(lt(U,ce));return}let D=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),I=D?parseFloat(D[1]):0;me(),m(We(I,J))}t?.addEventListener("pointerdown",Z=>{c()||Le(Z)}),t?.addEventListener("pointermove",O),t?.addEventListener("pointerup",Xe),t?.addEventListener("pointercancel",Xe),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",Z=>{c()&&De(Z)},{capture:!0}),document.addEventListener("pointermove",O,{capture:!0}),document.addEventListener("pointerup",Xe,{capture:!0}),document.addEventListener("pointercancel",Xe,{capture:!0});let Pe=()=>{e&&(e.style.height=""),me(),n&&(n.style.overflow=""),p()};r.addEventListener?r.addEventListener("change",Pe):r.addListener(Pe);function nt(){i(s.matches)}return nt(),s.addEventListener?s.addEventListener("change",nt):s.addListener(nt),window.addEventListener("resize",()=>{f(),u()}),p(),_(),{getDetent:l,getSafeInsets:x,onDetentChange:h,refreshPartialHeight:d,setDetent:m}}function iu(i={}){let e=i.min??0,t=i.max??1,n=i.step??.001,r=!!i.thumbScrubOnly,s=Ca(i.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,i.ariaLabel&&o.setAttribute("aria-label",i.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let c=document.createElement("div");c.className="coop-range-fill";let l=document.createElement("div");l.className="coop-range-thumb",a.append(c,l),o.append(a);let u=10,h=14,f=null,d=0,g=0,x=!1,m=!1,p=!1,y=!0;function v(){let q=`${(t===e?0:(s-e)/(t-e))*100}%`;c.style.width=q,l.style.left=q,o.setAttribute("aria-valuenow",String(s));let Q=i.formatAriaValue?.(s)??String(s);o.setAttribute("aria-valuetext",Q)}function _(z,q){let Q=typeof l.getBoundingClientRect=="function"?l.getBoundingClientRect():null;return!Q||!(Q.width>0)||!(Q.height>0)?!0:z>=Q.left-h&&z<=Q.right+h&&q>=Q.top-h&&q<=Q.bottom+h}function C(z,q="input"){let Q=JE(Ca(z,e,t),e,t,n);if(Q===s&&q==="silent"){v();return}s=Q,v(),(q==="input"||q==="change")&&i.onInput?.(s),q==="change"&&i.onChange?.(s)}function T(z){let q=a.getBoundingClientRect(),Q=Math.max(q.width,1),Y=Ca((z-q.left)/Q,0,1);return e+Y*(t-e)}function R(z){if(f==null)return;let q=m;f=null,x=!1,m=!1,y=!0,q&&i.onScrubEnd?.(),z&&q&&i.onChange?.(s)}function L(z){f==null&&(z.pointerType==="mouse"&&z.button!==0||(f=z.pointerId,d=z.clientX,g=z.clientY,p=!1,x=!1,m=!1,y=!r||_(z.clientX,z.clientY)))}function b(z){if(f!==z.pointerId)return;let q=z.clientX-d,Q=z.clientY-g;if(!p&&Math.hypot(q,Q)>u&&(p=!0),!x){if(!p)return;if(z.pointerType==="touch"&&Math.abs(Q)>=Math.abs(q)){R(!1);return}if(!y){R(!1);return}x=!0,m=!0,i.onScrubStart?.();try{o.setPointerCapture(z.pointerId)}catch{}}C(T(z.clientX),"input"),z.preventDefault()}function S(z){if(f===z.pointerId){if(!p&&!m){f=null,x=!1,m=!1,y=!0,i.onTap?.();return}R(!0)}}function F(z){f===z.pointerId&&R(!1)}function j(z){let q=t-e,Q=n>0?n:q/100,Y=q/10,ce=s;switch(z.key){case"ArrowLeft":case"ArrowDown":ce=s-Q;break;case"ArrowRight":case"ArrowUp":ce=s+Q;break;case"PageDown":ce=s-Y;break;case"PageUp":ce=s+Y;break;case"Home":ce=e;break;case"End":ce=t;break;case"Enter":case" ":z.preventDefault(),i.onTap?.();return;default:return}z.preventDefault(),C(ce,"change")}return o.addEventListener("pointerdown",L),o.addEventListener("pointermove",b),o.addEventListener("pointerup",S),o.addEventListener("pointercancel",F),o.addEventListener("keydown",j),v(),{el:o,get value(){return s},set value(z){C(z,"silent")},refresh(){v()}}}function Ca(i,e,t){return Math.min(t,Math.max(e,i))}function JE(i,e,t,n){if(!(n>0))return Ca(i,e,t);let r=Math.round((i-e)/n),s=Number((e+r*n).toPrecision(12));return Ca(s,e,t)}var y0="blueprints.locale",QE={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},ew={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},tw={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},nw={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},td={en:{...tw,...QE},cs:{...nw,...ew}},ao=v0(),nd=new Set;function v0(){try{let i=typeof navigator<"u"&&navigator.language||"";if(String(i).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function iw(){try{let i=localStorage.getItem(y0);if(i==="en"||i==="cs")return i}catch{}return v0()}function rw(i){try{localStorage.setItem(y0,i)}catch{}}function ru(){return ao}function M0(i){if(!(i!=="en"&&i!=="cs")&&i!==ao){ao=i,rw(i);for(let e of nd)try{e()}catch{}}}function b0(i){return nd.add(i),()=>nd.delete(i)}function S0(){return ao=iw(),ao}function kt(i){let e=td[ao]||td.en;if(Object.prototype.hasOwnProperty.call(e,i))return e[i];let t=td.en;return Object.prototype.hasOwnProperty.call(t,i)?t[i]:i.startsWith("scene.")?i.slice(6):i}function id(i){let e=i||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let n=t.getAttribute("data-i18n");n&&(t.textContent=kt(n))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let n=t.getAttribute("data-i18n-aria");n&&t.setAttribute("aria-label",kt(n))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let n=t.getAttribute("data-i18n-title");n&&t.setAttribute("title",kt(n))})}var E0=8,sw=56,w0=14,rd=11,T0=.5,ow=1e-4,su=128,aw=.028,cw=5,lw=.995,uw=.999,A0=18,hw=22,fw=14,sd=new Be,R0=new ir,Jn=new P,Qn=new P,zi=new P,wn=new P,uo=new P,Bi=new P,co=new P,lo=new P,St=new P,C0=new P,ho=new P,dw=new ln;function od(i){let e=Math.abs(i)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function ad(i){return i.pointerType==="touch"}function cd(i){return i.pointerType==="mouse"||i.pointerType==="pen"}function P0(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function B0(i){let{scene:e,canvas:t,getCamera:n,controls:r,getRoot:s,getClipPlanes:o,onLiveLength:a,onActiveChange:c}=i,l="idle",u=!1,h=!1,f=0,d=0,g=null,x=null,m=null,p=null,y=null,v=null,_=null,C="mouse",T=0,R=0,L=!1,b=!1,S=new Lt;S.name="MeasureOverlay",S.renderOrder=10,e.add(S);let F=new Lt;F.name="MeasureDimensions",e.add(F);let j=L0(16766474),z=L0(3458905),q=U0(16766474,.75),Q=_w(16766474);S.add(j,z,q,Q),j.visible=!1,z.visible=!1,q.visible=!1,Q.visible=!1;let Y=gw(t),ce=[];function J(){return u}function de(D){let I=!!D;if(I===u){I&&he();return}if(u=I,u)if(r.enabled=!1,l="placeFirst",ee(),y=null,v=null,P0()){let U=Math.max(1,t.clientWidth),N=Math.max(1,t.clientHeight);ne(U*.5,N*.5,!0)}else pe();else r.enabled=!0,l="idle",ee(),y=null,v=null,_=null,b=!1,pe(),a?.(null);c?.(u),he(),ue()}function ee(){h=!1,g=null,x=null,m=null,p=null}function he(){l==="placeSecond"&&y&&g?a?.(od(y.distanceTo(g))):u&&a?.(null)}function pe(){Y.hidden=!0,j.visible=!1,Q.visible=!1}function ne(D,I,U=!1){f=D,d=I,h=!0;let N=He(D,I);if(N){let oe=N.point.clone(),X=N.kind,$=N.edgeDir;if(p=null,l==="placeSecond"&&y){let _e=De(y,v,N);_e&&(oe=_e.foot,X="perp",$=_e.edgeDir,p=_e.edgeDir.clone())}g=oe,x=X,m=$}else U?g||(x=null,m=null,p=null):(g=null,x=null,m=null,p=null);ue(),he()}function H(D,I){let U=me(I)*cw;D.scale.setScalar(Math.max(U,1e-6))}function ue(){if(!u){pe(),z.visible=!1,q.visible=!1,Q.visible=!1;return}y?(z.visible=!0,z.position.copy(y),H(z,y)):z.visible=!1,h?(Y.hidden=!1,D0(Y,t,f,d,x),g?(j.visible=!0,j.position.copy(g),H(j,g),xw(j,x)):j.visible=!1):pe(),l==="placeSecond"&&y&&g?(O0(q,y,g),q.visible=!0):q.visible=!1,l==="placeSecond"&&x==="perp"&&y&&g&&p?(N0(Q,y,g,p,me),Q.visible=!0):Q.visible=!1}function le(D){let I=t.getBoundingClientRect();return{x:D.clientX-I.left,y:D.clientY-I.top}}function te(D,I,U){return U==="touch"?{x:D,y:I-sw}:{x:D,y:I}}function xe(D){let I=o()||[];for(let U of I)if(U.distanceToPoint(D)<-ow)return!1;return!0}function me(D){let I=n(),U=Math.max(1,t.clientHeight);if(I.isOrthographicCamera)return 2*((I.top-I.bottom)/(2*Math.max(I.zoom,1e-6)))/U;let N=I.position.distanceTo(D),oe=I.fov*Math.PI/180;return 2*Math.tan(oe/2)*N/U/Math.max(I.zoom,1e-6)}function we(D,I){I.copy(D).project(n());let U=Math.max(1,t.clientWidth),N=Math.max(1,t.clientHeight);return I.x=(I.x*.5+.5)*U,I.y=(-I.y*.5+.5)*N,I}function He(D,I){let U=s();if(!U)return null;let N=t.getBoundingClientRect();sd.x=D/Math.max(1,N.width)*2-1,sd.y=-(I/Math.max(1,N.height))*2+1,R0.setFromCamera(sd,n());let oe=R0.intersectObject(U,!0),X=null;for(let Ge of oe)if(Ge.object.visible&&xe(Ge.point)){X=Ge;break}if(!X)return null;let $=X.object,_e=$.geometry;if(!_e?.getAttribute("position"))return{point:X.point.clone(),kind:"face",edgeDir:null,mesh:$,triVerts:null,faceNormal:null};$.updateWorldMatrix(!0,!1);let ie=me(X.point),ye=ie*w0,Te=ie*rd,Ie=_e.getAttribute("position"),Ee=_e.getIndex(),Ye=X.faceIndex,Me=[];if(X.face)Jn.fromBufferAttribute(Ie,X.face.a).applyMatrix4($.matrixWorld),Qn.fromBufferAttribute(Ie,X.face.b).applyMatrix4($.matrixWorld),zi.fromBufferAttribute(Ie,X.face.c).applyMatrix4($.matrixWorld),Me.push(Jn.clone(),Qn.clone(),zi.clone());else if(typeof Ye=="number"){let Ge,mt,ge;Ee?(Ge=Ee.getX(Ye*3),mt=Ee.getX(Ye*3+1),ge=Ee.getX(Ye*3+2)):(Ge=Ye*3,mt=Ye*3+1,ge=Ye*3+2),Jn.fromBufferAttribute(Ie,Ge).applyMatrix4($.matrixWorld),Qn.fromBufferAttribute(Ie,mt).applyMatrix4($.matrixWorld),zi.fromBufferAttribute(Ie,ge).applyMatrix4($.matrixWorld),Me.push(Jn.clone(),Qn.clone(),zi.clone())}let Oe=null;Me.length===3&&(Oe=new P().subVectors(Me[1],Me[0]).cross(wn.subVectors(Me[2],Me[0])).normalize(),Oe.lengthSq()<1e-12&&(Oe=null));let B=D,Se=I,ae=null;function fe(Ge){if(!xe(Ge)||Ge.distanceToSquared(X.point)>ye*ye*4)return;we(Ge,lo);let mt=Math.hypot(lo.x-B,lo.y-Se);mt>w0||(!ae||mt<ae.distPx)&&(ae={point:Ge.clone(),distPx:mt})}for(let Ge of Me)fe(Ge);let Re=ye*ye*4,Ce=Ie.count,Je=Ce>8e3?2:1;for(let Ge=0;Ge<Ce;Ge+=Je)wn.fromBufferAttribute(Ie,Ge).applyMatrix4($.matrixWorld),!(wn.distanceToSquared(X.point)>Re)&&fe(wn);if(ae)return{point:ae.point,kind:"vertex",edgeDir:null,mesh:$,triVerts:Me.length?Me:null,faceNormal:Oe};let ot=null;function It(Ge,mt){St.copy(mt).sub(Ge);let ge=St.lengthSq();if(ge<1e-18)return;let $e=wn.copy(X.point).sub(Ge).dot(St)/ge;if($e=Math.min(1,Math.max(0,$e)),uo.copy(Ge).addScaledVector(St,$e),!xe(uo)||uo.distanceToSquared(X.point)>Te*Te*4)return;we(uo,lo);let Tn=Math.hypot(lo.x-B,lo.y-Se);if(Tn>rd)return;we(Ge,Bi),we(mt,co);let ft=co.x-Bi.x,Qt=co.y-Bi.y,Xn=ft*ft+Qt*Qt;if(Xn>1e-6){let Dn=((B-Bi.x)*ft+(Se-Bi.y)*Qt)/Xn;Dn=Math.min(1,Math.max(0,Dn));let vi=Bi.x+ft*Dn,ur=Bi.y+Qt*Dn;if(Math.hypot(B-vi,Se-ur)>rd)return}(!ot||Tn<ot.distPx)&&(ot={point:uo.clone(),distPx:Tn,dir:St.clone().normalize()})}return Me.length===3&&(It(Me[0],Me[1]),It(Me[1],Me[2]),It(Me[2],Me[0])),ot?{point:ot.point,kind:"edge",edgeDir:ot.dir,mesh:$,triVerts:Me.length?Me:null,faceNormal:Oe}:{point:X.point.clone(),kind:"face",edgeDir:null,mesh:$,triVerts:Me.length?Me:null,faceNormal:Oe}}function De(D,I,U){if(!U.mesh||!U.triVerts||U.triVerts.length!==3||!U.faceNormal||U.faceNormal.lengthSq()<1e-12)return null;let N=me(D),oe=N*fw,X=Math.max(N*2,1e-5);if(Math.abs(ou(D,U.triVerts[0],U.faceNormal))>X)return null;let $=Le(U.mesh,U.triVerts[0],U.faceNormal,X);if(!$.length)return null;let _e=[];for(let Te of $)I0(D,Te.a,Te.b)<=oe&&_e.push(Te.dir.clone());if(I&&I.lengthSq()>1e-12&&_e.push(I.clone().normalize()),!_e.length)return null;let ie=N*A0,ye=null;for(let Te of _e)if(!(Te.lengthSq()<1e-12)){Te.normalize();for(let Ie of $){if(Math.abs(Ie.dir.dot(Te))<lw||I0(D,Ie.a,Ie.b)<=oe)continue;let Ee=pw(D,Ie.a,Ie.b);if(!xe(Ee)||D.distanceTo(Ee)*1e3<T0||(St.copy(Ee).sub(D),St.lengthSq()<1e-16)||(St.normalize(),Math.abs(St.dot(Te))>.08))continue;let Me=U.point.distanceTo(Ee);we(U.point,Bi),we(Ee,co);let Oe=Math.hypot(Bi.x-co.x,Bi.y-co.y);if(Me>ie*1.35&&Oe>A0)continue;let B=Oe+Me/Math.max(N,1e-9);(!ye||B<ye.score)&&(ye={foot:Ee.clone(),edgeDir:Te.clone(),score:B})}}return ye?{foot:ye.foot,edgeDir:ye.edgeDir}:null}function Le(D,I,U,N){let oe=D.geometry,X=oe?.getAttribute("position");if(!X)return[];D.updateWorldMatrix(!0,!1);let $=oe.getIndex(),_e=new Map,ie=Math.max(N*.25,1e-5);function ye(Me,Oe,B){ho.subVectors(Oe,Me).cross(wn.subVectors(B,Me)),!(ho.lengthSq()<1e-16)&&(ho.normalize(),!(Math.abs(ho.dot(U))<uw)&&(Math.abs(ou(Me,I,U))>N||Math.abs(ou(Oe,I,U))>N||Math.abs(ou(B,I,U))>N||(Te(Me,Oe),Te(Oe,B),Te(B,Me))))}function Te(Me,Oe){if(St.copy(Oe).sub(Me),St.lengthSq()<1e-16)return;let B=mw(Me,Oe,ie);_e.has(B)||_e.set(B,{a:Me.clone(),b:Oe.clone(),dir:St.clone().normalize()})}let Ie=$?$.count/3:X.count/3,Ee=12e3,Ye=Ie>Ee?Math.ceil(Ie/Ee):1;for(let Me=0;Me<Ie;Me+=Ye){let Oe,B,Se;if($){let ae=Me*3;Oe=$.getX(ae),B=$.getX(ae+1),Se=$.getX(ae+2)}else Oe=Me*3,B=Me*3+1,Se=Me*3+2;Jn.fromBufferAttribute(X,Oe).applyMatrix4(D.matrixWorld),Qn.fromBufferAttribute(X,B).applyMatrix4(D.matrixWorld),zi.fromBufferAttribute(X,Se).applyMatrix4(D.matrixWorld),ye(Jn,Qn,zi)}return[..._e.values()]}function O(){if(g){if(l==="placeFirst"){y=g.clone(),v=m?m.clone():null,l="placeSecond",p=null,(ad({pointerType:C})||!P0())&&(h=!1,g=null,x=null,m=null,pe()),ue(),he();return}if(l==="placeSecond"&&y){if(y.distanceTo(g)*1e3<T0)return;lt(y,g),de(!1)}}}function lt(D,I){let U=new Lt;U.name="Dimension";let N=U0(16752394,1);O0(N,D,I),N.visible=!0;let oe=D.clone().lerp(I,.5),X=D.distanceTo(I),$=yw(od(X));$.position.copy(oe),U.add(N,$),F.add(U),ce.push({group:U,sprite:$,mid:oe.clone(),span:X}),We($,D,I,oe,X)}function We(D,I,U,N,oe){let X=n();if(X.getWorldDirection(C0),St.copy(U).sub(I),St.lengthSq()<1e-16){D.position.copy(N);return}St.normalize(),wn.crossVectors(St,C0),wn.lengthSq()<1e-10&&wn.copy(X.up),wn.normalize();let $=Math.max(oe*aw,me(N)*18);D.position.copy(N).addScaledVector(wn,$);let _e=me(D.position)*56;D.scale.set(_e*2.2,_e,1)}function Xe(){z.visible&&y&&H(z,y),j.visible&&g&&H(j,g),h&&D0(Y,t,f,d,x),Q.visible&&y&&g&&p&&x==="perp"&&N0(Q,y,g,p,me);for(let D of ce){let U=D.group.children[0].geometry.getAttribute("position");Jn.fromBufferAttribute(U,0),Qn.fromBufferAttribute(U,1),We(D.sprite,Jn,Qn,D.mid,D.span)}}function Pe(D){if(!u||l==="idle"||!cd(D)||_!==null)return;let{x:I,y:U}=le(D),N=te(I,U,D.pointerType);ne(N.x,N.y,!0)}function nt(D){if(!u||l==="idle"||D.button!==void 0&&D.button!==0||_!==null)return;_=D.pointerId,C=D.pointerType||"mouse";let{x:I,y:U}=le(D);T=I,R=U,L=!1,b=!1;try{t.setPointerCapture(D.pointerId)}catch{}if(cd(D)){let N=te(I,U,C);ne(N.x,N.y,!0)}D.preventDefault()}function Z(D){if(!u)return;if(_===null){Pe(D);return}if(_!==D.pointerId)return;let{x:I,y:U}=le(D);if(Math.hypot(I-T,U-R)>=E0&&(L=!0,b=!0),ad(D)){if(!b)return;let oe=te(I,U,"touch");ne(oe.x,oe.y,!0)}else if(cd(D)){let oe=te(I,U,C);ne(oe.x,oe.y,!0)}D.preventDefault()}function A(D){if(!u||_!==D.pointerId)return;let{x:I,y:U}=le(D);Math.hypot(I-T,U-R)>=E0&&(L=!0,b=!0),_=null;try{t.releasePointerCapture(D.pointerId)}catch{}if(ad(D)){L?b=!1:(b=!1,h&&g&&O()),D.preventDefault();return}!L&&g&&O(),b=!1,D.preventDefault()}function M(D){_===D.pointerId&&(_=null,b=!1)}return t.addEventListener("pointerdown",nt),t.addEventListener("pointermove",Z),t.addEventListener("pointerup",A),t.addEventListener("pointercancel",M),{isActive:J,setActive:de,update:Xe,formatMm:od}}function ou(i,e,t){return dw.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(i)}function I0(i,e,t){St.copy(t).sub(e);let n=St.lengthSq();if(n<1e-18)return i.distanceTo(e);let r=wn.copy(i).sub(e).dot(St)/n;return r=Math.min(1,Math.max(0,r)),uo.copy(e).addScaledVector(St,r).distanceTo(i)}function pw(i,e,t){St.copy(t).sub(e);let n=St.lengthSq();if(n<1e-18)return e.clone();let r=wn.copy(i).sub(e).dot(St)/n;return r=Math.min(1,Math.max(0,r)),e.clone().addScaledVector(St,r)}function mw(i,e,t){let n=Math.round(i.x/t),r=Math.round(i.y/t),s=Math.round(i.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),c=Math.round(e.z/t);return n<o||n===o&&r<a||n===o&&r===a&&s<=c?`${n},${r},${s}|${o},${a},${c}`:`${o},${a},${c}|${n},${r},${s}`}function gw(i){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(i.parentElement||document.body).appendChild(e),e)}function D0(i,e,t,n,r){let s=e.getBoundingClientRect();i.style.left=`${s.left+t}px`,i.style.top=`${s.top+n}px`,i.dataset.snap=r||"none"}function L0(i){let e=new $o(1,16,12),t=new Ht({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),n=new je(e,t);return n.renderOrder=20,n.visible=!1,n}function xw(i,e){let t=i.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function U0(i,e){let t=new Tt,n=new Float32Array(6);t.setAttribute("position",new vt(n,3));let r=new ji({color:i,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),s=new Ai(t,r);return s.renderOrder=19,s.frustumCulled=!1,s.visible=!1,s}function _w(i){let e=new Tt,t=new Float32Array(9);e.setAttribute("position",new vt(t,3));let n=new ji({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),r=new Ai(e,n);return r.renderOrder=22,r.frustumCulled=!1,r.visible=!1,r}function N0(i,e,t,n,r){let s=r(t)*hw;if(St.copy(e).sub(t),St.lengthSq()<1e-16){i.visible=!1;return}if(St.normalize(),wn.copy(n).normalize(),ho.crossVectors(wn,St),ho.lengthSq()<1e-12){i.visible=!1;return}Jn.copy(t).addScaledVector(wn,s),Qn.copy(t),zi.copy(t).addScaledVector(St,s);let o=i.geometry.getAttribute("position");o.setXYZ(0,Jn.x,Jn.y,Jn.z),o.setXYZ(1,Qn.x,Qn.y,Qn.z),o.setXYZ(2,zi.x,zi.y,zi.z),o.needsUpdate=!0,i.geometry.computeBoundingSphere()}function O0(i,e,t){let n=i.geometry.getAttribute("position");n.setXYZ(0,e.x,e.y,e.z),n.setXYZ(1,t.x,t.y,t.z),n.needsUpdate=!0,i.geometry.computeBoundingSphere()}function yw(i){let e=document.createElement("canvas");e.width=su*2,e.height=su;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(su*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let c=t.measureText(i),l=Math.ceil(c.width),u=Math.round(su*.42),h=l+o*2,f=u+a*2,d=(e.width-h)/2,g=(e.height-f)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",F0(t,d,g,h,f,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,F0(t,d,g,h,f,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(i,e.width/2,e.height/2+1)}let n=new Ji(e);n.colorSpace=xt,n.needsUpdate=!0;let r=new qs({map:n,depthTest:!1,depthWrite:!1,transparent:!0}),s=new zo(r);return s.renderOrder=21,s.center.set(.5,.5),s}function F0(i,e,t,n,r,s){let o=Math.min(s,n/2,r/2);i.beginPath(),i.moveTo(e+o,t),i.arcTo(e+n,t,e+n,t+r,o),i.arcTo(e+n,t+r,e,t+r,o),i.arcTo(e,t+r,e,t,o),i.arcTo(e,t,e+n,t,o),i.closePath()}var ld=12,vw=500,Mw=Math.PI/2,bw=.03;function Sw(i){let e=Math.min(1,Math.max(0,i));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function Ew(i){return i.blocked||i.modifiers||i.button!==void 0&&i.button!==0||(i.pointers??1)>1?"ignore":Math.hypot(i.dx,i.dy)>ld?"drag":"tap"}function ww(i,e){return(e>=0?1:-1)*i*Mw}function Tw(i,e=null){let t=i.length,n=new Map,r=a=>{let c=n.has(a)?n.get(a):a;return c!==a?(c=r(c),n.set(a,c)):n.has(a)||n.set(a,a),c},s=(a,c)=>{let l=r(a),u=r(c);l!==u&&n.set(l,u)};if(e){let a=new Map,c=1e4,l=e.count??i.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<l;u++){let h=`${Math.round(e.getX(u)*c)},${Math.round(e.getY(u)*c)},${Math.round(e.getZ(u)*c)}`,f=a.get(h);f===void 0?a.set(h,u):s(u,f)}}for(let a=0;a+2<t;a+=3)s(i[a],i[a+1]),s(i[a+1],i[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let c=r(i[a]),l=o.get(c);l||(l=[],o.set(c,l)),l.push(a)}return[...o.values()]}function z0(i){let e=i.geometry,t=e?.getIndex?.(),n=e?.getAttribute?.("position");if(!t||!n||!i.parent)return[i];let r=Tw(t.array,n);if(r.length<2)return[i];let s=e.getAttribute("normal"),o=[];for(let a of r){let c=new Map,l=[],u=[],h=[],f=x=>{let m=c.get(x);return m!==void 0||(m=l.length/3,c.set(x,m),l.push(n.getX(x),n.getY(x),n.getZ(x)),s&&u.push(s.getX(x),s.getY(x),s.getZ(x))),m};for(let x of a)h.push(f(t.getX(x)),f(t.getX(x+1)),f(t.getX(x+2)));let d=new Tt;d.setAttribute("position",new Ut(l,3)),u.length&&d.setAttribute("normal",new Ut(u,3)),d.setIndex(h);let g=new je(d,i.material);g.name=i.name,g.position.copy(i.position),g.quaternion.copy(i.quaternion),g.scale.copy(i.scale),g.visible=i.visible,i.parent.add(g),o.push(g)}return i.parent.remove(i),e.dispose?.(),o}function Aw(i){let e=[];i.traverse(n=>{(n.name||"").replace(/_\d+$/,"")!=="door"||(n.parent?.name||"").replace(/_\d+$/,"")==="door"||e.push(n)});let t=[];for(let n of e){if(n.isMesh){t.push(...z0(n));continue}let r=[];if(n.traverse(s=>{s.isMesh&&r.push(s)}),r.length===1){let s=z0(r[0]);if(s.length>1){t.push(...s);continue}}t.push(n)}return t}function Rw(i,e,t=bw){let n=[];for(let a of i)for(let c of e){if(!c||c.kind!=="hinged"||!c.hinge)continue;let l=c.center;if(!Array.isArray(l)||l.length<3)continue;let u=a.center.x-Number(l[0]),h=a.center.y-Number(l[1]),f=a.center.z-Number(l[2]),d=Math.hypot(u,h,f);d<=t&&n.push({distance:d,entry:a,record:c})}n.sort((a,c)=>a.distance-c.distance);let r=new Set,s=new Set,o=[];for(let a of n)r.has(a.entry)||s.has(a.record.id)||(r.add(a.entry),s.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function Cw(i){return i.updateWorldMatrix(!0,!0),new Nt().setFromObject(i).getCenter(new P)}function Pw(i,e){let t=i.parent;if(!t)return null;let n=new Lt;n.name=`hinge:${e.id}`,t.add(n),t.updateWorldMatrix(!0,!1);let r=new P(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));n.position.copy(t.worldToLocal(r)),n.updateWorldMatrix(!0,!1),n.attach(i);let s={id:e.id,pivot:n,host:i,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=s};return o(n),i.traverse(o),s}function H0(i,e){let t=i.anim;if(!t)return i.goal;let n=(e-t.t0)/vw;return n>=1?(i.anim=null,i.goal=t.to,t.to):t.from+(t.to-t.from)*Sw(n)}var k0=new Bt,Pa=new P;function Iw(i,e){if(i.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=i.parent;Pa.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(k0).invert(),Pa.applyQuaternion(k0)),!(Pa.lengthSq()<1e-12)&&(Pa.normalize(),i.rotateOnAxis(Pa,e))}function Dw(i,e){let t=H0(i,e);return Iw(i.pivot,ww(t,i.sign)),t}function Lw(i,e){let t=H0(i,e),n=i.goal>.5?0:1;i.goal=n,i.anim={from:t,to:n,t0:e}}function V0(i){let e=Array.isArray(i.records)?i.records:[],t=i.canvas,n=i.isBlocked||(()=>!1),r=[],s=new ir,o=new Be,a=null,c=0;function l(m){if(r.length=0,!m||!e.length)return 0;m.updateWorldMatrix(!0,!0);let y=Aw(m).map(v=>({host:v,center:Cw(v)}));for(let v of Rw(y,e)){let _=Pw(v.entry.host,v.record);_&&r.push(_)}return r.length}function u(m){let p=!1;for(let y of r){let v=!!y.anim;!v&&y.shown===y.goal||(Dw(y,m),y.shown=y.anim?null:y.goal,v&&(p=!0))}return p}function h(m){if(!(m.button!==void 0&&m.button!==0)){if(c+=1,c>1){a=null;return}a={id:m.pointerId,x:m.clientX,y:m.clientY,moved:0,pointers:1}}}function f(m){if(!a||m.pointerId!==a.id)return;let p=Math.hypot(m.clientX-a.x,m.clientY-a.y);p>a.moved&&(a.moved=p)}function d(m){if(c=Math.max(0,c-1),!a||m.pointerId!==a.id)return;let p=a;a=null;let y=Math.max(p.moved,Math.hypot(m.clientX-p.x,m.clientY-p.y));Ew({dx:y,dy:0,pointers:c>0?2:1,button:m.button,blocked:n(),modifiers:m.altKey||m.ctrlKey||m.metaKey||m.shiftKey})==="tap"&&x(m)}function g(){c=Math.max(0,c-1),a=null}function x(m){let p=i.getCamera();if(!p||!r.length)return;let y=t.getBoundingClientRect(),v=y.width||t.clientWidth||1,_=y.height||t.clientHeight||1;o.x=(m.clientX-y.left)/v*2-1,o.y=-((m.clientY-y.top)/_)*2+1,s.setFromCamera(o,p);let T=r[0]?.pivot?.parent;for(;T?.parent;)T=T.parent;if(!T)return;let R=s.intersectObject(T,!0);for(let L of R){let b=L.object;if(!b.visible||b.userData?.isEdgeOverlay||b.userData?.isSectionCap)continue;let S=b,F=null;for(;S;){if(S.userData?.bpDoor){F=S.userData.bpDoor;break}S=S.parent}F&&Lw(F,performance.now());return}}return t.addEventListener("pointerdown",h,!0),t.addEventListener("pointermove",f,!0),t.addEventListener("pointerup",d,!0),t.addEventListener("pointercancel",g,!0),{bind:l,step:u,bindings:r}}var pd=.3,q0=1.5,Uw=.5,ud=new Be,Nw=new P,hu=new P,hd=new P,au=new P,cu=new P,fo=new P,lu=new P,fd=new Bt,G0=new Bt,uu=new Bt,W0=new Bt,dd=new Ar,Ow=new P(0,1,0),X0=new ir;function Fw(i,e,t=pd,n=q0){let r=Number.isFinite(e)&&e>0?e:0,s=Number.isFinite(i)&&i>0?i:null;return s!=null&&s>=t?s:s!=null?Math.max(n,t):r>=t?r:Math.max(n,t)}function Bw(i,e,t=pd,n=q0){return Number.isFinite(i)&&i>.001?i:e>=t?null:Math.max(n,t)}function zw(i,e,t=pd,n=Uw){return Number.isFinite(i)&&i>0?!(e>0)||e<t?!0:i<e*n:!1}function kw(i,e,t,n=1){let r=2*Math.PI*n/Math.max(1,t);return{theta:-i*r,phi:-e*r}}function Hw(i,e,t,n,r){if(!n&&!r||(cu.copy(i.position).sub(t),cu.lengthSq()<1e-12))return!1;fo.copy(i.up),fo.lengthSq()<1e-12?fo.set(0,1,0):fo.normalize(),W0.setFromUnitVectors(fo,Ow),au.copy(cu).applyQuaternion(W0),dd.setFromVector3(au);let s=1e-6;return r=Math.min(Math.PI-s,Math.max(s,dd.phi+r))-dd.phi,fd.setFromAxisAngle(fo,n),lu.set(1,0,0).applyQuaternion(i.quaternion).applyQuaternion(fd),lu.lengthSq()<1e-12?!1:(lu.normalize(),G0.setFromAxisAngle(lu,r),uu.copy(G0).multiply(fd),au.copy(cu).applyQuaternion(uu),i.position.copy(t).add(au),e.sub(t).applyQuaternion(uu).add(t),i.quaternion.premultiply(uu),!0)}function Vw(i,e,t){return!(t>0)||(i.getWorldDirection(hu),hd.copy(i.position).addScaledVector(hu,t),hd.distanceToSquared(e)<1e-12)?!1:(e.copy(hd),!0)}function Gw(i,e){let t=i.material,n=Array.isArray(t)?t:[t];for(let r of n){let s=r&&r.clippingPlanes;if(s){for(let o of s)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function Ww(i,e,t,n,r){if(!e||!t||e.isOrthographicCamera)return null;let s=i.getBoundingClientRect(),o=s.width||i.clientWidth||1,a=s.height||i.clientHeight||1;ud.x=(n-s.left)/o*2-1,ud.y=-((r-s.top)/a)*2+1,t.updateWorldMatrix(!0,!0),X0.setFromCamera(ud,e);let c=X0.intersectObject(t,!0);e.getWorldDirection(hu);for(let l of c){let u=l.object;if(!u.visible)continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!Gw(u,l.point))continue;let f=l.distance;if(!(f>1e-4))continue;let d=Nw.copy(l.point).sub(e.position).dot(hu);if(d>1e-4)return{point:l.point.clone(),slant:f,depth:d}}return null}function Xw(i){let{canvas:e,controls:t}=i,n=i.isBlocked||(()=>!1),r=new Map,s=null;function o(){return t.enabled!==!1&&!n()}function a(){let _=i.getCamera();return!!(_&&_.isPerspectiveCamera)}function c(_,C){return Ww(e,i.getCamera(),i.getRoot(),_,C)}function l(_){let C=i.getCamera();!C||!a()||_==null||Vw(C,t.target,_)}function u(_,C){let T=i.getCamera();if(!T||!a())return;let R=c(_,C),L=T.position.distanceTo(t.target);l(Fw(R?R.slant:null,L))}function h(_,C){let T=i.getCamera();if(!T||!a())return;let R=c(_,C),L=T.position.distanceTo(t.target);l(Bw(R?R.depth:null,L))}function f(){s=null,t.enableRotate=!0}function d(_){if(r.set(_.pointerId,{x:_.clientX,y:_.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(r.size>=2){f(),t.zoomToCursor=!0;let S=g(_);u(S.x,S.y);return}let C=_.pointerType==="touch",T=_.button??0;if(!C&&T===2){f(),h(_.clientX,_.clientY);return}if(!C&&T===1){f(),u(_.clientX,_.clientY);return}if(!C&&T!==0)return;if(!C&&(_.shiftKey||_.ctrlKey||_.metaKey)){f(),h(_.clientX,_.clientY);return}let R=i.getCamera(),L=c(_.clientX,_.clientY),b=R?R.position.distanceTo(t.target):0;if(!L||!zw(L.slant,b)){f();return}t.enableRotate=!1,s={id:_.pointerId,x:_.clientX,y:_.clientY,lastX:_.clientX,lastY:_.clientY,point:L.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function g(_){let C=_.clientX,T=_.clientY,R=1;for(let[L,b]of r)L!==_.pointerId&&(C+=b.x,T+=b.y,R+=1);return{x:C/R,y:T/R}}function x(_){let C=r.get(_.pointerId);if(C&&(C.x=_.clientX,C.y=_.clientY),!s||_.pointerId!==s.id||r.size!==1||!o())return;let T=i.getCamera();if(!T)return;let R=_.clientX-s.lastX,L=_.clientY-s.lastY;if(!s.dragging){if(Math.hypot(_.clientX-s.x,_.clientY-s.y)<=ld)return;s.dragging=!0}if(!R&&!L)return;let b=kw(R,L,e.clientHeight||1,t.rotateSpeed);Hw(T,t.target,s.point,b.theta,b.phi),T.lookAt(t.target),s.lastX=_.clientX,s.lastY=_.clientY}function m(_){r.delete(_.pointerId),s&&s.id===_.pointerId&&f(),r.size<2&&(t.zoomToCursor=!1),r.size===0&&(t.enableRotate=!0)}function p(_){m(_)}function y(_){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||s&&s.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(_.clientX,_.clientY)}function v(){r.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:m,onPointerCancel:p,onWheel:y,onWheelDone:v}}function Y0(i){let e=Xw(i),t={capture:!0};return i.canvas.addEventListener("pointerdown",e.onPointerDown,t),i.canvas.addEventListener("pointermove",e.onPointerMove,t),i.canvas.addEventListener("pointerup",e.onPointerUp,t),i.canvas.addEventListener("pointercancel",e.onPointerCancel,t),i.canvas.addEventListener("wheel",e.onWheel,t),i.canvas.addEventListener("wheel",e.onWheelDone),e}var po=class extends _i{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let r=0;r<t;r++)n[6*r]=e[r].x,n[6*r+1]=e[r].y,n[6*r+2]=e[r].z||0,n[6*r+3]=e[r+1].x,n[6*r+4]=e[r+1].y,n[6*r+5]=e[r+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var fu=class extends Lr{constructor(e=new po,t=new Li({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var qw='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',Yw=420,Zw=36,$w=new P,Z0=new P,$0=new P,md=new P,_s=new P,Or=new P;function _d(i){return new P(i[0]*.001,i[2]*.001,-i[1]*.001)}function gd(i,e){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i!="string")return e;let t=i.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function K0(i){let e=[];if(Array.isArray(i.anchor)&&i.anchor.length>=3&&e.push(i.anchor),Array.isArray(i.tips))for(let t of i.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[i.anchor]}function Kw(i){let e=Math.abs(i)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function du(i,e){return i==null?"":typeof i=="string"?i:String(i[e==="cs"?"cs":"en"]||i.en||i.cs||"")}function jw(i){if(!Number.isFinite(i)||i<=0)return"";let e=i*1e3/Yw,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function Jw(i,e){if(e==="plate")return Zw;let t=Math.min(Math.max(1,i.clientWidth),Math.max(1,i.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function mo(i,e,t,n="center",r=null,s=1){let o=Number.isFinite(s)&&s>0?s:1,a=Math.max(8,Math.round(t*o)),c=i.map(R=>String(R)).filter(R=>R.length),l=document.createElement("canvas"),u=l.getContext("2d"),h=`600 ${a}px ${qw}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),g=Math.ceil(a*1.25);u&&(u.font=h);let x=a;if(u)for(let R of c)x=Math.max(x,u.measureText(R).width);let m=Math.ceil(x+f*2),p=Math.ceil(Math.max(c.length,1)*g+d*2),y=2;l.width=m*y,l.height=p*y;let v=l.getContext("2d");if(v){v.scale(y,y),v.clearRect(0,0,m,p);let R=e==="plate";v.font=h,v.textAlign="left",v.textBaseline="middle",v.lineJoin="round",v.miterLimit=2,v.lineWidth=Math.max(2,a*.28),v.strokeStyle=R?"#ffffff":"rgba(0,0,0,0.92)",v.fillStyle=r||(R?"#141414":"#f7f7f8"),c.forEach((L,b)=>{let S=f,F=d+g*b+g*.5;v.strokeText(L,S,F),v.fillText(L,S,F)})}let _=new Ji(l);_.colorSpace=xt,_.flipY=!0,_.needsUpdate=!0;let C=new Ht({map:_,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:At}),T=new je(new $n(1,1),C);return T.renderOrder=30,T.frustumCulled=!1,T.userData.cssWidth=m,T.userData.cssHeight=p,T.userData.anchor=n,T.userData.fill=r,T.userData.fontScale=o,T}function xd(i){return`#${(i>>>0).toString(16).padStart(6,"0")}`}function ki(i,e=!1){let t=new po;t.setPositions([0,0,0,0,0,0]);let n=new Li({color:i,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(n.dashed=!0);let r=new fu(t,n);return r.renderOrder=25,r.frustumCulled=!1,r.computeLineDistances(),r}function lr(i,e,t){i.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),i.computeLineDistances()}function j0(i){let{scene:e,getCamera:t,getCanvas:n,getLocale:r,getVisibleWidthM:s,getTarget:o}=i,a=i.getExaggeration||(()=>1),c=new Lt;c.name="Annotations",c.userData.blueprintAnnotations=!0,e.add(c);let l=null,u="viewer",h=!0,f=0,d=[],g=null,x=null,m=null;function p(){return u==="plate"?1315860:15921908}function y(ee){return ee&&ee.color!=null?gd(ee.color,p()):l&&l.annotationColor!=null?gd(l.annotationColor,p()):p()}function v(ee){return xd(y(ee))}function _(ee){let he=Number(ee&&ee.size);return Number.isFinite(he)&&he>0?he:1}function C(ee){ee.traverse(he=>{he.geometry&&he.geometry.dispose();let pe=he.material;pe&&(pe.map&&pe.map.dispose(),pe.dispose())})}function T(){for(let ee of[...c.children])c.remove(ee),C(ee);d=[],g=null,x=null,m=null}function R(){return Jw(n(),u)}function L(){c.visible=!!l&&h}function b(){if(T(),f=R(),!l){L();return}let ee=r(),he=p(),pe=f,ne=Array.isArray(l.annotations)?l.annotations:[];for(let te of ne)if(!(!te||typeof te!="object")){if(te.kind==="callout"&&Array.isArray(te.anchor)){let xe=du(te.text,ee);if(!xe)continue;let me=mo(xe.split(`
`),u,pe,"center",v(te),_(te)),we=(te.leader===!1?[]:K0(te)).map(()=>ki(y(te)));c.add(...we,me),d.push({kind:"callout",sprite:me,lines:we,data:te})}else if(te.kind==="dim"&&Array.isArray(te.a)&&Array.isArray(te.b)){let xe=y(te),me=mo(["0"],u,pe,"center",xd(xe),_(te)),we=ki(xe),He=ki(xe),De=ki(xe),Le=ki(xe),O=ki(xe);c.add(we,He,De,Le,O,me),d.push({kind:"dim",sprite:me,lines:[we,He,De,Le,O],data:te})}else if(te.kind==="line"&&Array.isArray(te.points)&&te.points.length>=2){let xe=gd(te.color,p()),we=[ki(xe,!!te.dashed)];te.arrow&&we.push(ki(xe,!1),ki(xe,!1));let He=null,De=du(te.text,ee);De&&(He=mo(De.split(`
`),u,pe,"center",xd(xe),_(te))),c.add(...we),He&&c.add(He),d.push({kind:"line",sprite:He,lines:we,data:te})}}let H=du(l.title,ee),ue=l.project?String(l.project):"",le=[...H.split(`
`),ue].filter(Boolean);le.length&&(g=mo(le,u,pe,"topleft"),c.add(g)),x=mo(["1:1"],u,pe,"bottomleft"),m=ki(he),c.add(m,x),L()}function S(ee){let he=_d(ee),pe=a();return pe!==1&&(he.y*=pe),he}function F(ee,he=$w){return he.copy(ee).project(t())}function j(ee,he,pe,ne=new P){return ne.set(ee,he,pe).unproject(t())}function z(ee){let he=t(),pe=n(),ne=Math.max(1,pe.clientHeight);if(he.isOrthographicCamera){let le=Math.max(he.zoom,1e-6);return(he.top-he.bottom)/le/ne}let H=Math.max(he.position.distanceTo(ee),1e-4),ue=(he.fov||45)*Math.PI/180;return 2*Math.tan(ue/2)*H/ne}let q=new P,Q=new P;function Y(ee,he){let pe=t(),ne=z(he),H=ne*ee.userData.cssWidth,ue=ne*ee.userData.cssHeight;q.set(1,0,0).applyQuaternion(pe.quaternion),Q.set(0,1,0).applyQuaternion(pe.quaternion);let le=ee.userData.anchor||"center";ee.position.copy(he),le==="topleft"?(ee.position.addScaledVector(q,H*.5),ee.position.addScaledVector(Q,-ue*.5)):le==="bottomleft"&&(ee.position.addScaledVector(q,H*.5),ee.position.addScaledVector(Q,ue*.5)),ee.quaternion.copy(pe.quaternion),ee.scale.set(H,ue,1)}function ce(){let ee=n(),he=Math.max(1,ee.width),pe=Math.max(1,ee.height);c.traverse(ne=>{let H=ne.material;H&&H.resolution&&H.resolution.set(he,pe)})}function J(ee,he){let pe=mo(he,u,f||R(),ee.userData.anchor,ee.userData.fill,ee.userData.fontScale||1);ee.material.map?.dispose(),ee.material.dispose(),ee.material=pe.material,ee.userData.cssWidth=pe.userData.cssWidth,ee.userData.cssHeight=pe.userData.cssHeight,pe.geometry.dispose()}function de(){if(!l||!h||(R()!==f&&b(),!c.visible))return;ce();let he=r();t().updateMatrixWorld();for(let le of d)if(le.kind==="callout"){let te=S(le.data.anchor),xe=F(te,Z0),me=Array.isArray(le.data.offset)?le.data.offset:[.08,.06],we=xe.x+Number(me[0]||0)*2,He=xe.y+Number(me[1]||0)*2,De=j(we,He,xe.z,$0);Y(le.sprite,De);let Le=z(De),O=Le*le.sprite.userData.cssWidth*.5,lt=K0(le.data);for(let We=0;We<le.lines.length;We+=1){let Xe=S(lt[We]||le.data.anchor);_s.copy(De).sub(Xe);let Pe=_s.length();Pe>O+Le?(_s.setLength(Pe-O),_s.add(Xe)):_s.copy(De),lr(le.lines[We],Xe,_s)}}else if(le.kind==="dim"){let te=S(le.data.a),xe=S(le.data.b),me=F(te,Z0),we=F(xe,$0),He=we.x-me.x,De=we.y-me.y,Le=Math.hypot(He,De)||1e-6;He/=Le,De/=Le;let O=Number(le.data.offset)||.04,lt=-De*O*2,We=He*O*2,Xe=(me.z+we.z)*.5,Pe=j(me.x+lt,me.y+We,Xe,new P),nt=j(we.x+lt,we.y+We,Xe,new P),Z=z(Pe),A=Z*6,M=Z*8;Or.copy(Pe).sub(te);let D=Or.length()||1;Or.multiplyScalar((D+M)/D);let I=te.clone().add(Or);Or.copy(nt).sub(xe);let U=Or.length()||1;Or.multiplyScalar((U+M)/U);let N=xe.clone().add(Or),oe=te.clone().lerp(Pe,Math.min(.85,A/D)),X=xe.clone().lerp(nt,Math.min(.85,A/U));lr(le.lines[0],oe,I),lr(le.lines[1],X,N),lr(le.lines[2],Pe,nt);let $=Z*10,ie=j(me.x+lt-De*.012,me.y+We+He*.012,Xe,new P).sub(Pe);ie.lengthSq()<1e-16?ie.set(0,$,0):ie.setLength($),lr(le.lines[3],Pe.clone().sub(ie),Pe.clone().add(ie)),lr(le.lines[4],nt.clone().sub(ie),nt.clone().add(ie)),md.copy(Pe).lerp(nt,.5);let ye=j(me.x+lt-De*.03,me.y+We+He*.03,Xe,new P).sub(j(me.x+lt,me.y+We,Xe,new P));ye.lengthSq()>1e-12&&md.add(ye);let Ie=du(le.data.text,he)||Kw(te.distanceTo(xe));le.sprite.userData.labelText!==Ie&&(J(le.sprite,[Ie]),le.sprite.userData.labelText=Ie),Y(le.sprite,md)}else if(le.kind==="line"){let te=le.data.points.map(me=>S(me)),xe=[];for(let me of te)xe.push(me.x,me.y,me.z);if(le.lines[0].geometry.setPositions(xe),le.lines[0].computeLineDistances(),le.data.arrow&&te.length>=2&&le.lines.length>=3){let me=te[te.length-2],we=te[te.length-1],He=we.clone().sub(me);if(He.lengthSq()>1e-12){He.normalize();let De=z(we),Le=He.clone().multiplyScalar(-De*16),O=new P().crossVectors(He,t().up).normalize().multiplyScalar(De*7);O.lengthSq()<1e-16&&O.set(De*7,0,0),lr(le.lines[1],we,we.clone().add(Le).add(O)),lr(le.lines[2],we,we.clone().add(Le).sub(O))}}if(le.sprite){let me=te[0].clone().lerp(te[te.length-1],.5);Y(le.sprite,me)}}let ne=F(o(),_s).z;if(g){let le=j(-.94,.9,ne,new P);Y(g,le)}let H=s(),ue=jw(H??NaN);if(x&&m){let le=H!=null&&H>8?2:1,te=j(-.9,-.86,ne,new P),xe=j(-.9+.08,-.86,ne,new P).sub(te),me=z(te),we=H&&H>0?le/H*Math.max(1,n().clientWidth):80;xe.lengthSq()>1e-12?xe.setLength(Math.max(we*me,me*40)):xe.set(me*80,0,0),lr(m,te,te.clone().add(xe));let He=x.userData.labelText,De=ue?`${ue}  \xB7  ${Math.round(le*1e3)} mm`:"";He!==De&&(J(x,De?[De]:["\u2014"]),x.userData.labelText=De);let Le=j(-.9,-.8,ne,new P).sub(te);Y(x,te.clone().add(Le))}}return{group:c,setSpec(ee){l=ee&&typeof ee=="object"?ee:null,b(),de()},setInk(ee){u=ee==="plate"?"plate":"viewer",b(),de()},setVisible(ee){h=!!ee,L(),c.visible&&de()},isVisible(){return h},relocalize(){b(),de()},glyphBoundsNdc(){let ee=n(),he=Math.max(1,ee.clientWidth),pe=Math.max(1,ee.clientHeight),ne=1/0,H=-1/0,ue=1/0,le=-1/0,te=!1;for(let xe of d){let me=xe.sprite;if(!me||me===g||me===x||xe.kind!=="callout"&&xe.kind!=="dim"&&xe.kind!=="line")continue;let we=F(me.position),He=(me.userData.cssWidth||0)/he,De=(me.userData.cssHeight||0)/pe;ne=Math.min(ne,we.x-He),H=Math.max(H,we.x+He),ue=Math.min(ue,we.y-De),le=Math.max(le,we.y+De),te=!0}return te?{minX:ne,maxX:H,minY:ue,maxY:le}:null},update:de,clear(){l=null,T(),c.visible=!1}}}function J0(i){return i/25.4*72}function yd(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function Qw(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d");return t?(t.drawImage(i,0,0),new Promise((n,r)=>{e.toBlob(s=>{s?n(s):r(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function e1(i){let e=await createImageBitmap(i),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d",{willReadFrequently:!0});if(!n)throw new Error("2D canvas unavailable");return n.drawImage(e,0,0),e.close?.(),n.getImageData(0,0,t.width,t.height)}async function t1(i){if(typeof CompressionStream>"u")return{bytes:i,filter:""};let e=new Blob([i]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Ia(i){return typeof i=="string"?new TextEncoder().encode(i):i}async function n1(i){let e=i.width,t=i.height,n=i.data,r=new Uint8Array(e*t*3);for(let _=0,C=0;_<n.length;_+=4,C+=3){let T=n[_+3]/255;r[C]=Math.round(n[_]*T+255*(1-T)),r[C+1]=Math.round(n[_+1]*T+255*(1-T)),r[C+2]=Math.round(n[_+2]*T+255*(1-T))}let{bytes:s,filter:o}=await t1(r),a=J0(420),c=J0(297),l=`q
${a.toFixed(3)} 0 0 ${c.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(l),h=[],f=0;function d(_){h.push(_),f+=_.length}let g=[0];function x(_,C){g[_]=f,d(Ia(`${_} 0 obj
`));for(let T of C)d(Ia(T));d(Ia(`
endobj
`))}d(Ia(`%PDF-1.4
`)),x(1,["<< /Type /Catalog /Pages 2 0 R >>"]),x(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),x(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${c.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),x(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),x(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${s.length} >>
stream
`,s,`
endstream`]);let m=f,p=`xref
0 6
0000000000 65535 f 
`;for(let _=1;_<=5;_++)p+=`${String(g[_]).padStart(10,"0")} 00000 n 
`;p+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${m}
%%EOF
`,d(Ia(p));let y=new Uint8Array(f),v=0;for(let _ of h)y.set(_,v),v+=_.length;return new Blob([y],{type:"application/pdf"})}async function Q0(i){let e=await Qw(i),t=await e1(e),n=await n1(t);return{png:e,pdf:n}}var vd="scene";function o1(){try{return(new URLSearchParams(location.search).get(vd)||"").trim()}catch{return""}}function tx(i){try{let e=new URL(location.href),t=i!=null?String(i).trim():"";t?e.searchParams.set(vd,t):e.searchParams.delete(vd);let n=`${e.pathname}${e.search}${e.hash}`,r=`${location.pathname}${location.search}${location.hash}`;n!==r&&history.replaceState(null,"",n)}catch{}}function a1(i,e,t={}){let n=Array.isArray(t.scenes)?t.scenes:[],r=Array.isArray(t.partGroups)?t.partGroups:[],s=Array.isArray(t.doors)?t.doors:[],o=String(t.scene!=null?t.scene:o1()).trim();S0(),id(document);let a=[],c=null,l=1842206,u=!0,h=e0(),f=Dg(),d=new Map,g=new Map,x=new Map,m=new Map,p=new Set,y=new Map,v=new Map,_=new Map,C=new Set,T=null;T=_0(E=>{u=E,l=E?1842206:15263981,c&&(c.background=new ke(l)),document.documentElement.style.colorScheme=E?"dark":"light",d.size&&go()});let R=new Ul({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});R.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),R.outputColorSpace=xt,R.toneMapping=la,R.toneMappingExposure=1.05,R.localClippingEnabled=!0;let L=qg(R);c=new Pn,c.background=new ke(l);let b=1,S=new Lt;S.name="VerticalExaggeration",c.add(S);function F(E){let k=Number(E);b=Number.isFinite(k)&&k>0?k:1,S.scale.set(1,b,1)}let j=30,z=120,q=75,Q=125,Y="perspective",ce=q,J=q,de=1,ee=!1,he=new Xt(45,1,.01,1e6),pe=new di(-1,1,1,-1,.01,1e6),ne=he,H=new zl(ne,i);H.enableDamping=!1,H.screenSpacePanning=!0;let ue=()=>!1,le=V0({canvas:i,getCamera:()=>ne,records:s,isBlocked:()=>ue()}),te=j0({scene:c,getCamera:()=>ne,getCanvas:()=>i,getLocale:ru,getVisibleWidthM:()=>{if(!ne.isOrthographicCamera)return null;let E=Math.max(ne.zoom,1e-6);return(ne.right-ne.left)/E},getTarget:()=>H.target,getExaggeration:()=>b}),xe=null,me=null;c.add(new na(16777215,.45));let we=new wr(16777215,1.15);we.position.set(.6,1,.4),c.add(we);let He=new wr(16777215,.4);He.position.set(-.5,.2,-.6),c.add(He);let De=new io(R);c.environment=De.fromScene(new kl,.04).texture,De.dispose();let Le=null;Y0({canvas:i,controls:H,getCamera:()=>ne,getRoot:()=>Le,isBlocked:()=>ue()||H.enabled===!1});let O=new Nt,lt=new P,We=new P,Xe=new P,Pe=new P,nt=new P,Z=[],A=1,M=!1,D=!1,I=!1;new Ol().parse(e,"",E=>{Le=E.scene,S.add(Le),le.bind(Le),Le.traverse(K=>{if(!K.isMesh)return;let G=K.name||K.parent?.name||"part",ve=G.replace(/_\d+$/,"")||G;if(d.has(ve)||d.set(ve,[]),d.get(ve).push(K),K.material){let Ve=Array.isArray(K.material)?K.material:[K.material];for(let Ne of Ve)"side"in Ne&&(Ne.side=At)}}),$e(),La(),Ua(),re(),vu();let k=Ue(o);k&&(se=`scene:${String(k.id).trim()}`),qe(),Ge(),at(),Ft(),go(),k&&Qt(k),Fe(),T?.refreshPartialHeight(),ox(),ax(),Ms(),bs()},E=>{N(String(E?.message||E))});function N(E){let k=document.getElementById("err");k&&(k.style.display="block",k.textContent=E)}function oe(){Le&&(O.setFromObject(Le),O.getSize(lt),O.getCenter(We))}function X(){let E=Math.max(1,i.clientWidth),k=Math.max(1,i.clientHeight);return E/k}function $(E,k){let K=E*Math.PI/180;return 2*Math.atan(Math.tan(K/2)/Math.max(k,1e-6))}function _e(){let E=X();he.aspect=E,he.fov=$(ce,E)*180/Math.PI,he.updateProjectionMatrix()}function ie(E,k){let K=X(),G=Math.max(E,1e-6)*Math.tan(k/2),ve=G*K;pe.left=-ve,pe.right=ve,pe.top=G,pe.bottom=-G,pe.updateProjectionMatrix()}function ye(){let E=X(),K=Math.max(pe.top,1e-6)*E;pe.left=-K,pe.right=K,pe.updateProjectionMatrix()}function Te(E,k){let K=X(),G=Math.max(E,1e-6),Ve=Math.max(k,1e-6),Ne=Ve*K;Ne<G&&(Ne=G,Ve=Ne/Math.max(K,1e-6)),de=1,pe.left=-Ne,pe.right=Ne,pe.top=Ve,pe.bottom=-Ve,pe.updateProjectionMatrix(),Me()}function Ie(E){let k=Math.max(E,1e-4),K=Xe.copy(ne.position).sub(H.target);K.lengthSq()<1e-12?K.set(0,0,1):K.normalize(),ne.position.copy(H.target).addScaledVector(K,k)}function Ee(E){E!==ne&&(E.position.copy(ne.position),E.quaternion.copy(ne.quaternion),E.up.copy(ne.up),E.near=ne.near,E.far=ne.far,ne=E,H.object=ne,H.update())}function Ye(){let E=Math.abs(Hi)>.05||Math.abs(Vi)>.05||Math.abs(ni-1)>.001?ni:1;return de*E}function Me(){ne.zoom=Ye(),ne.updateProjectionMatrix()}function Oe(){if(ee||D||!ne.isOrthographicCamera)return;let E=Math.abs(Hi)>.05||Math.abs(Vi)>.05||Math.abs(ni-1)>.001?ni:1;de=Math.max(ne.zoom/Math.max(E,1e-6),1e-6)}function B(){if(Y==="ortho")return;J=ce;let E=ne.position.distanceTo(H.target),k=$(ce,X());ie(E,k),de=1,ge(()=>{ee=!0,Ee(pe),Y="ortho",Me(),ee=!1}),ot()}function Se(E){if(Y!=="ortho")return;let k=Re(E??J),K=Math.max(pe.top,1e-6)/Math.max(de,1e-6),G=$(k,X()),ve=K/Math.max(Math.tan(G/2),1e-8);ce=k,J=k,de=1,ge(()=>{ee=!0,Ee(he),Y="perspective",_e(),Ie(ve),Me(),mt(),H.update(),ee=!1}),ot()}function ae(E,k={}){let K=Re(E);if(Y==="ortho"){Se(K);return}let G=X(),ve=$(ce,G),Ve=$(K,G),Ne=ne.position.distanceTo(H.target);ce=K,J=K,ge(()=>{if(_e(),k.reframe!==!1){let Qe=Math.tan(ve/2)/Math.max(Math.tan(Ve/2),1e-8);Ie(Ne*Qe),mt(),H.update()}Me()}),ot()}function fe(){Y==="ortho"?Se(J):B()}function Re(E){return Math.min(z,Math.max(j,E))}function Ce(){return Y==="ortho"?Q:ce}function Je(E){return E>z?"ISO":`${Math.round(E)}\xB0`}function ot(){xe&&(xe.value=Ce()),me&&(me.textContent=Y==="ortho"?"ISO":`${Math.round(ce)}\xB0`),xe?.refresh()}function It(E){if(E>z){Y!=="ortho"?B():ot();return}let k=Re(E);Y==="ortho"?Se(k):ae(k,{reframe:!0})}function Ge(){let E=document.getElementById("fov");if(!E)return;E.replaceChildren();let k=document.createElement("div");k.className="fov-row";let K=document.createElement("span");K.className="fov-label",K.textContent=kt("ui.fov"),me=document.createElement("span"),me.className="fov-value",me.textContent=`${Math.round(ce)}\xB0`,xe=iu({min:j,max:Q,step:1,value:Ce(),ariaLabel:"Field of view",formatAriaValue:Je,onInput:Ne=>It(Ne),onChange:Ne=>It(Ne),onTap:()=>fe()}),xe.el.classList.add("fov-range");let G=document.createElement("div");G.className="fov-detent",G.setAttribute("aria-hidden","true");let ve=(z-j)/(Q-j);G.style.left=`${ve*100}%`,xe.el.querySelector(".coop-range-track")?.append(G),k.append(K,xe.el,me),E.append(k),ot()}function mt(){let E=Math.max(lt.x,lt.y,lt.z,.01),k=ne.position.distanceTo(H.target),K=Math.round(Math.min(Math.max(k/200,E/5e3,.001),k/10)*1e4)/1e4,G=Math.round(Math.max(k+E*4,E*8,10)*1e4)/1e4;ne.near===K&&ne.far===G||(ne.near=K,ne.far=G,ne.updateProjectionMatrix())}function ge(E){D=!0;try{E()}finally{requestAnimationFrame(()=>{D=!1})}}_e();function $e(){Le&&(ge(()=>{oe(),H.target.copy(We);let k=Math.max(lt.x,lt.y,lt.z,1)*1.85;ne.position.set(We.x+k*.75,We.y+k*.55,We.z+k*.75),mt(),H.update()}),pt())}function Tn(){for(let E of d.keys())g.set(E,1),x.set(E,1),Nr(d.get(E)||[],1,{edgeMode:f});oe(),ei()}function ft(E){if(Le){if(W=null,te.clear(),F(1),Tn(),Ms(),bs(),he.up.set(0,1,0),pe.up.set(0,1,0),ne.up.set(0,1,0),E==="iso"){$e();return}ge(()=>{oe();let k=Math.max(lt.x,lt.y,lt.z,1),K=k*1.85,G=We;E==="front"?ne.position.set(G.x,G.y,G.z+K):E==="top"?ne.position.set(G.x,G.y+K,G.z+k*.01):E==="side"&&ne.position.set(G.x-K,G.y,G.z),H.target.copy(G),mt(),H.update()}),pt()}}function Qt(E){if(!Le||!E)return;W=E,F(E.verticalExaggeration);let k=b;if(E.opacityDefault!=null||E.opacity&&typeof E.opacity=="object"){let Ve=E.opacityDefault!=null?Number(E.opacityDefault):1,Ne=E.opacity&&typeof E.opacity=="object"?E.opacity:{},Qe=Kg(Ne,a);for(let wt of d.keys()){let cn=Object.prototype.hasOwnProperty.call(Qe,wt)?Qe[wt]:Ve;Xn(wt,cn,{skipUi:!0,skipClip:!0})}oe(),ei()}if(Object.prototype.hasOwnProperty.call(E,"cuts")){let Ve=Array.isArray(E.cuts)?E.cuts:[];Z.length=0;for(let Ne of Ve){let Qe=Ne?.normal;if(!Array.isArray(Qe)||Qe.length<3)continue;let wt=new P(Number(Qe[0])||0,Number(Qe[1])||0,Number(Qe[2])||0);if(wt.lengthSq()<1e-12)continue;wt.normalize();let cn=null,Un=Math.min(1,Math.max(0,Number(Ne.t)||0));if(Array.isArray(Ne.anchor)&&Ne.anchor.length>=3){cn=_d(Ne.anchor),cn.y*=k;let{near:mr,far:kr}=dr(wt),Ha=cn.dot(wt);Un=Math.min(1,Math.max(0,(Ha-mr)/Math.max(kr-mr,1e-6)))}Z.push({id:A++,normal:wt,t:Un,anchor:cn,locked:!0,label:gt(wt)})}M=!1,en(),at(),Ft(),T?.refreshPartialHeight()}E.projection==="ortho"?Y!=="ortho"?B():ot():E.hFovDeg!=null&&Number.isFinite(Number(E.hFovDeg))&&ae(Number(E.hFovDeg),{reframe:!1});let G=E.camera;G&&Array.isArray(G.target)&&Array.isArray(G.position)&&ge(()=>{ee=!0;let Ve=new P(0,1,0);Array.isArray(G.up)&&G.up.length>=3&&(Ve.set(Number(G.up[0])||0,Number(G.up[1])||0,Number(G.up[2])||0),Ve.lengthSq()<1e-12?Ve.set(0,1,0):Ve.normalize()),he.up.copy(Ve),pe.up.copy(Ve),ne.up.copy(Ve),H.target.set(Number(G.target[0])||0,(Number(G.target[1])||0)*k,Number(G.target[2])||0),ne.position.set(Number(G.position[0])||0,(Number(G.position[1])||0)*k,Number(G.position[2])||0),ne.lookAt(H.target),Y==="ortho"&&Array.isArray(G.orthoFit)&&G.orthoFit.length>=2&&Te(Number(G.orthoFit[0])||.1,(Number(G.orthoFit[1])||.1)*k),oe(),mt(),H.update(),ee=!1}),pt();let ve=E.edges;(ve==="none"||ve==="transparent"||ve==="opaque")&&(f=ve,fr()),te.setSpec(E),Ms(),bs()}function Xn(E,k,K={}){let G=Math.max(0,Math.min(1,Number(k)||0));g.set(E,G),G>0&&x.set(E,G),K.detach&&p.add(E),Nr(d.get(E)||[],G,{edgeMode:f}),!K.skipClip&&(oe(),K.skipUi||ei())}function Dn(E,k,K){let G=Math.max(0,Math.min(1,Number(k)||0));K&&m.set(K,G);for(let ve of E)p.has(ve)||(g.set(ve,G),G>0&&x.set(ve,G),Nr(d.get(ve)||[],G,{edgeMode:f}));oe(),ei()}function vi(E,k,K){p.delete(E);let G=K.filter(Ve=>!p.has(Ve)),ve=qn(k,G);g.set(E,ve),ve>0&&x.set(E,ve),Nr(d.get(E)||[],ve,{edgeMode:f}),oe(),ei()}function ur(E){if(!E.length)return 1;let k=g.get(E[0])??1;for(let K=1;K<E.length;K++){let G=g.get(E[K])??1;if(Math.abs(G-k)>1e-4)return NaN}return k}function qn(E,k){let K=k.filter(ve=>!p.has(ve)),G=ur(K.length?K:k);return Number.isNaN(G)?m.get(E)??1:G}function ei(){for(let[E,k]of y)k.value=(g.get(E)??1)*100;for(let[E,k]of v){let K=(k.el.dataset.leaves||"").split(",").map(G=>G.trim()).filter(Boolean);k.value=qn(E,K)*100}for(let[E,k]of _){let K=p.has(E);k.hidden=!K,k.setAttribute("aria-hidden",K?"false":"true")}}function hr(){return Z.filter(E=>E.locked).map(E=>Ct(E))}function Da(){let E=new Be;return R.getDrawingBufferSize(E),{x:E.x,y:E.y}}function fr(){if(d.size){if(f===ms){Bg(Le);return}kg(d,!0,{clippingPlanes:hr(),resolution:Da(),edgeMode:f})}}function go(){d.size&&(Jg(d,h,{isDark:u,clippingPlanes:hr(),opacityByLabel:g,edgeMode:f}),h===Ra?(R.toneMapping=la,R.toneMappingExposure=1.05):(R.toneMapping=pi,R.toneMappingExposure=1),fr(),Qf(d,hr()))}function La(){let E=document.getElementById("mats");if(E){E.replaceChildren();for(let[k,K]of[[Ql,"ui.solid"],[Ra,"ui.realistic"]]){let G=document.createElement("button");G.type="button",G.dataset.mode=k,G.textContent=kt(K),k===h&&G.classList.add("is-active"),G.addEventListener("click",()=>{h=k,t0(k),E.querySelectorAll("button").forEach(ve=>{ve.classList.toggle("is-active",ve.dataset.mode===k)}),go()}),E.append(G)}}}function Ua(){let E=document.getElementById("edges");if(E){E.replaceChildren();for(let[k,K]of[[ms,"ui.edgesNone"],[gs,"ui.edgesTransparent"],[Ta,"ui.edgesOpaque"]]){let G=document.createElement("button");G.type="button",G.dataset.edgeMode=k,G.textContent=kt(K),k===f&&G.classList.add("is-active"),G.addEventListener("click",()=>{f=k,Gf(k),E.querySelectorAll("button").forEach(ve=>{ve.classList.toggle("is-active",ve.dataset.edgeMode===k)}),fr(),Id()}),E.append(G)}}}function Na(E,k,K,G){let ve=document.createElement("div");ve.className="part-opacity-wrap";let Ve,Ne=()=>{if(Ve.value/100>0)G(0);else{let wt=K();G(wt>0?wt:1)}};return Ve=iu({min:0,max:100,step:1,value:Math.round(k),ariaLabel:E,formatAriaValue:Qe=>`${Math.round(Qe)}%`,thumbScrubOnly:!0,onInput:Qe=>G(Qe/100),onChange:Qe=>G(Qe/100),onTap:Ne}),Ve.el.classList.add("part-opacity"),ve.append(Ve.el),{wrap:ve,range:Ve}}function w(){let E=document.getElementById("parts");if(!E)return;E.style.removeProperty("--part-name-col");let k=0;for(let K of E.querySelectorAll(".part-name")){if(K.closest(".part-children")?.hidden)continue;let ve=K.style.width;K.style.width="max-content",k=Math.max(k,Math.ceil(K.getBoundingClientRect().width)),K.style.width=ve}k>0&&E.style.setProperty("--part-name-col",`${k}px`)}function V(E,k,K,G=null){if(E.type==="leaf"){let yt=document.createElement("div");yt.className="part-row part-leaf",yt.style.setProperty("--part-depth",String(K)),yt.dataset.leaf=E.id;let Va=document.createElement("span");Va.className="part-disclosure-spacer",Va.setAttribute("aria-hidden","true");let Ga=document.createElement("span");Ga.className="part-name",Ga.textContent=E.label;let{wrap:Od,range:Fd}=Na(`${E.label} opacity`,(g.get(E.id)??1)*100,()=>x.get(E.id)??1,Wa=>Xn(E.id,Wa,{detach:!!G}));Fd.el.dataset.leaf=E.id,y.set(E.id,Fd);let ri=null;if(G){ri=document.createElement("button"),ri.type="button",ri.className="part-sync",ri.textContent=kt("ui.sync"),ri.setAttribute("aria-label",`${kt("ui.sync")} ${E.label}`);let Wa=p.has(E.id);ri.hidden=!Wa,ri.setAttribute("aria-hidden",Wa?"false":"true"),ri.addEventListener("click",px=>{px.stopPropagation(),vi(E.id,G.groupId,G.leafIds)}),_.set(E.id,ri)}ri?yt.append(Va,Ga,Od,ri):yt.append(Va,Ga,Od),k.append(yt);return}let ve=eu(E),Ve=document.createElement("div");Ve.className="part-group",Ve.dataset.group=E.id;let Ne=document.createElement("div");Ne.className="part-row part-group-row",Ne.style.setProperty("--part-depth",String(K)),Ne.setAttribute("role","button"),Ne.tabIndex=0;let Qe=document.createElement("button");Qe.type="button",Qe.className="part-disclosure",Qe.setAttribute("aria-label",`Expand ${E.label}`),Qe.setAttribute("aria-expanded","false");let wt=document.createElement("span");wt.className="part-name",wt.textContent=E.label;let cn=qn(E.id,ve)||1;cn<=0&&(cn=1);let{wrap:Un,range:mr}=Na(`${E.label} opacity`,qn(E.id,ve)*100,()=>cn,yt=>{yt>0&&(cn=yt),Dn(ve,yt,E.id)});mr.el.dataset.group=E.id,mr.el.dataset.leaves=ve.join(","),v.set(E.id,mr),Un.addEventListener("click",yt=>yt.stopPropagation()),Un.addEventListener("pointerdown",yt=>yt.stopPropagation());let kr=document.createElement("div");kr.className="part-children",kr.hidden=!0;function Ha(yt){yt?C.add(E.id):C.delete(E.id),kr.hidden=!yt,Ve.classList.toggle("is-expanded",yt),Qe.setAttribute("aria-expanded",yt?"true":"false"),Qe.setAttribute("aria-label",yt?`Collapse ${E.label}`:`Expand ${E.label}`),requestAnimationFrame(()=>w())}function Mu(){Ha(!C.has(E.id))}Qe.addEventListener("click",yt=>{yt.stopPropagation(),Mu()}),Ne.addEventListener("click",yt=>{Un.contains(yt.target)||Mu()}),Ne.addEventListener("keydown",yt=>{(yt.key==="Enter"||yt.key===" ")&&(yt.preventDefault(),Mu())}),Ne.append(Qe,wt,Un),Ve.append(Ne,kr),k.append(Ve);let dx={groupId:E.id,leafIds:ve};for(let yt of E.children)V(yt,kr,K+1,dx);Ha(C.has(E.id))}function re(){let E=document.getElementById("parts");if(!E)return;E.replaceChildren(),y.clear(),v.clear(),_.clear();for(let K of d.keys())g.has(K)||(g.set(K,1),Nr(d.get(K)||[],1,{edgeMode:f})),x.has(K)||x.set(K,1);let k=$g(d.keys(),r,kt);a=k;for(let K of k)V(K,E,0,null);requestAnimationFrame(()=>w())}let se="iso",W=null,be=!1;function Ue(E){let k=String(E||"").trim();if(!k)return null;for(let K of n)if(String(K?.id||"").trim()===k)return K;return null}function Fe(){let E=se;E&&E.startsWith("scene:")?tx(E.slice(6)):tx(null)}function ze(){return document.querySelectorAll("#cams button, #scenes button")}function et(){se!=null&&(se=null,ze().forEach(E=>{E.classList.remove("is-active")}),Fe())}function tt(){let E=document.getElementById("scenes");if(!E){let k=document.getElementById("cams");E=document.createElement("div"),E.id="scenes",E.className="scene-list",k?.insertAdjacentElement("afterend",E)}return E}function qe(){let E=document.getElementById("cams");if(!E)return;E.replaceChildren();let k=tt();k.replaceChildren();function K(G,ve,Ve,Ne){let Qe=document.createElement("button");Qe.type="button",Qe.dataset.preset=ve,Qe.textContent=Ve,ve===se&&Qe.classList.add("is-active"),Qe.addEventListener("click",()=>{se=ve,ze().forEach(wt=>{wt.classList.toggle("is-active",wt.dataset.preset===ve)}),Ne(),Fe()}),G.append(Qe)}for(let[G,ve]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])K(E,G,kt(ve),()=>ft(G));for(let G of n){let ve=String(G?.id||"").trim();if(!ve)continue;let Ve=kt(`scene.${ve}`);K(k,`scene:${ve}`,Ve,()=>Qt(G))}k.hidden=k.childElementCount===0}function dt(E=Xe){return E.copy(H.target).sub(ne.position).normalize()}function gt(E){let k=Math.hypot(E.x,E.z),K=(Math.atan2(E.x,E.z)*180/Math.PI+360)%360,G=Math.atan2(E.y,k)*180/Math.PI,ve=Math.abs(G).toFixed(0),Ve=G>=0?"\u2191":"\u2193";return`${K.toFixed(0)}\xB0 / ${ve}\xB0${Ve}`}function Dt(){return Z.some(E=>!E.locked)}function Et(){return Z.filter(E=>E.locked)}function at(){Dt()||!(Et().length===0||M)||Z.push({id:A++,normal:new P(0,0,1),t:0,locked:!1,label:kt("ui.cut")})}function Ze(E){let k=document.getElementById("cuts");if(!k)return;let K=k.querySelector(`[data-cut-id="${E.id}"]`);if(!K){Ft();return}let G=K.querySelector(".cut-label");if(G&&(G.textContent=E.locked?E.label:kt("ui.cut")),E.locked&&!K.querySelector(".cut-remove")){let ve=document.createElement("button");ve.type="button",ve.className="cut-remove",ve.setAttribute("aria-label",kt("ui.removeSection")),ve.textContent="\xD7",ve.addEventListener("click",()=>on(E.id)),K.append(ve)}}function Vt(E){E.locked||(dt(E.normal),E.locked=!0,E.label=gt(E.normal),M=!1,en(),Ze(E))}function pt(){Et().length!==0&&(Dt()||(M=!0,!I&&(at(),Ft())))}function zn(){M&&(Dt()||Et().length!==0&&(at(),Ft()))}function Mi(E,k){let K=Z.find(G=>G.id===E);if(K){if(K.locked||Vt(K),K.t=Math.min(1,Math.max(0,Number(k))),K.anchor=null,I){An();return}en()}}function on(E){let k=Z.findIndex(K=>K.id===E);k<0||(Z.splice(k,1),Et().length===0?(M=!1,Dt()||at()):M&&!Dt()&&at(),en(),Ft(),T?.refreshPartialHeight())}function dr(E){if(oe(),O.isEmpty())return{near:-1,far:1};let k=O.min,K=O.max,G=1/0,ve=-1/0;for(let Qe=0;Qe<2;Qe++)for(let wt=0;wt<2;wt++)for(let cn=0;cn<2;cn++){nt.set(Qe?K.x:k.x,wt?K.y:k.y,cn?K.z:k.z);let Un=nt.dot(E);Un<G&&(G=Un),Un>ve&&(ve=Un)}let Ne=Math.max(ve-G,1e-6)*.02;return{near:G-Ne,far:ve+Ne}}function Ct(E){if(E.anchor)return new ln().setFromNormalAndCoplanarPoint(E.normal,E.anchor);let{near:k,far:K}=dr(E.normal),G=k+(K-k)*E.t;return Pe.copy(E.normal).multiplyScalar(G),new ln().setFromNormalAndCoplanarPoint(E.normal,Pe)}function An(){let E=hr();return Le&&(Le.traverse(k=>{if(!k.isMesh||!k.material||En(k)||nu(k))return;let K=Array.isArray(k.material)?k.material:[k.material];for(let G of K){if(!G)continue;let ve=G.clippingPlanes?G.clippingPlanes.length:0;G.clippingPlanes=E,G.clipIntersection=!1,ve!==E.length&&(G.needsUpdate=!0)}}),Wf(Le,E)),E}function en(){let E=An();Le&&(Qf(d,E),f!==ms?fr():Wf(Le,E))}function Ft(){let E=document.getElementById("cuts");if(E){E.replaceChildren();for(let k of Z){let K=document.createElement("div");K.className="cut-row",K.dataset.cutId=String(k.id);let G=document.createElement("span");G.className="cut-label",G.textContent=k.locked?k.label:kt("ui.cut");let ve=()=>{I&&(I=!1,en(),zn())},Ve=iu({min:0,max:1,step:.001,value:k.t,ariaLabel:k.locked?`Section ${k.label}`:"Section cut",onScrubStart:()=>{I=!0,k.locked||Vt(k)},onScrubEnd:ve,onInput:Ne=>Mi(k.id,Ne),onChange:Ne=>{Mi(k.id,Ne),ve()}});if(K.append(G,Ve.el),k.locked){let Ne=document.createElement("button");Ne.type="button",Ne.className="cut-remove",Ne.setAttribute("aria-label",kt("ui.removeSection")),Ne.textContent="\xD7",Ne.addEventListener("click",()=>on(k.id)),K.append(Ne)}E.append(K)}T?.refreshPartialHeight()}}let Gt=!1,Fr=new P,ti=new P,Md=!1;i.addEventListener("pointerdown",()=>{Gt=!0},{capture:!0});let bd=()=>{Gt=!1};window.addEventListener("pointerup",bd,{capture:!0}),window.addEventListener("pointercancel",bd,{capture:!0}),H.addEventListener("start",()=>{et(),Gt=!0}),H.addEventListener("change",()=>{Oe()}),H.addEventListener("end",()=>{Gt=!1,!D&&pt()});let ni=1,Hi=0,Vi=0,pu=1,mu=0,gu=0,xu=1,_u=0,yu=0,Br=0,nx=280;function ix(){let E=Math.max(1,i.clientWidth),k=Math.max(1,i.clientHeight);if(!T)return{zoom:1,offX:0,offY:0,w:E,h:k};let{bottom:K,right:G}=T.getSafeInsets();if(K<=0&&G<=0)return{zoom:1,offX:0,offY:0,w:E,h:k};let ve=Math.max(1,E-G),Ve=Math.max(1,k-K),Ne=Math.min(ve/E,Ve/k),Qe=G/2,wt=K/2;return{zoom:Ne,offX:Qe,offY:wt,w:E,h:k}}function Sd(E,k){ge(()=>{ee=!0,Math.abs(Hi)>.05||Math.abs(Vi)>.05||Math.abs(ni-1)>.001?(ne.zoom=de*ni,ne.setViewOffset(E,k,Hi,Vi,E,k)):(ne.clearViewOffset(),ne.zoom=de,ni=1,Hi=0,Vi=0),ne.updateProjectionMatrix(),ee=!1})}function Ed(E=!0){let{zoom:k,offX:K,offY:G,w:ve,h:Ve}=ix();if(pu=k,mu=K,gu=G,!E){ni=k,Hi=K,Vi=G,Br=0,Sd(ve,Ve);return}xu=ni,_u=Hi,yu=Vi,Br=performance.now()}function rx(E){if(!Br)return;let k=Math.min(1,(E-Br)/nx),K=1-(1-k)**3;ni=xu+(pu-xu)*K,Hi=_u+(mu-_u)*K,Vi=yu+(gu-yu)*K;let G=Math.max(1,i.clientWidth),ve=Math.max(1,i.clientHeight);Sd(G,ve),k>=1&&(Br=0)}function Oa(){let E=Math.max(1,i.clientWidth),k=Math.max(1,i.clientHeight);R.setSize(E,k,!1),Y==="perspective"?_e():ye(),Ed(!1);let K=Da();zg(Le,K.x,K.y)}Oa(),window.addEventListener("resize",Oa),T?.onDetentChange(()=>{Ed(!0)});let Ln=document.getElementById("ar"),an=document.getElementById("measure"),xo=!1,Fa=()=>kt("ui.measure");function vu(){let E=document.getElementById("locale");if(E){E.replaceChildren();for(let[k,K]of[["cs","CS"],["en","EN"]]){let G=document.createElement("button");G.type="button",G.dataset.locale=k,G.textContent=K,k===ru()&&G.classList.add("is-active"),G.addEventListener("click",()=>{M0(k)}),E.append(G)}}}function sx(){id(document),Ln&&!xo&&(Ln.textContent=kt("ui.ar")),an&&(an.textContent=Fa()),Ms(),bs(),te.relocalize();try{La(),Ua(),qe(),Ge(),re(),Ft(),vu()}catch(E){console.error("relocalizeUi",E);try{vu()}catch{}}T?.refreshPartialHeight()}b0(()=>sx());function ox(){Ln&&(Ln.hidden=!1,xo||(Ln.textContent=kt("ui.ar")))}function ax(){an&&(an.hidden=!1,an.textContent=Fa())}let ys=document.getElementById("drawing"),pr=document.getElementById("labels"),vs=!0;function Ms(){ys&&(ys.hidden=!1,ys.disabled=!W||Ba,ys.textContent=kt("ui.drawing"))}function bs(){if(!pr)return;let E=!!W;pr.hidden=!E,pr.disabled=!E,pr.setAttribute("aria-pressed",vs?"true":"false"),pr.classList.toggle("is-active",E&&vs),pr.textContent=kt("ui.labels")}function cx(){try{let E=new URLSearchParams(window.location.search).get("m");if(E&&E.trim())return E.trim()}catch{}return"model"}function lx(){let k=1,K=1.35;for(let G=0;G<6;G+=1){te.update();let ve=te.glyphBoundsNdc();if(!ve)return;let Ve=Math.max(-1+.04-ve.minX,ve.maxX-(1-.04),-1+.04-ve.minY,ve.maxY-(1-.04),0);if(Ve<.012||k>=K-.01)return;let Ne=Math.min(K/k,Math.max(1.05,1+Ve*1.6));k*=Ne,ne.isOrthographicCamera?(pe.left*=Ne,pe.right*=Ne,pe.top*=Ne,pe.bottom*=Ne,pe.updateProjectionMatrix()):(Xe.copy(ne.position).sub(H.target).multiplyScalar(Ne),ne.position.copy(H.target).add(Xe),mt())}}function wd(){Br=0,ni=1,Hi=0,Vi=0,pu=1,mu=0,gu=0,ne.clearViewOffset(),ne.zoom=de,ne.updateProjectionMatrix()}let Ba=!1;async function Td(){if(Ba||!Le||!W)return null;Ba=!0,Ms(),be=!0;let E=W,k=f,K=c.background,G=R.getPixelRatio(),ve=i.style.width,Ve=i.style.height,Ne=T?.getDetent?.()??null,Qe=ii?.isActive()??!1,wt=te.isVisible();try{Qe&&ii?.setActive(!1),te.setVisible(!0),T?.setDetent("closed"),i.style.width=`${2400}px`,i.style.height=`${1697}px`,R.setPixelRatio(1),Oa(),wd(),f=Ta,fr(),c.background=new ke(16777215),te.setInk("plate"),Qt(E),wd(),lx(),te.update(),L.render(c,ne,Le,Pd,{quality:"high"});let{png:cn,pdf:Un}=await Q0(i),mr=`${cx()}_${String(E.id||"scene")}`;return{png:cn,pdf:Un,stem:mr}}finally{i.style.width=ve,i.style.height=Ve,R.setPixelRatio(G),f=k,c.background=K,te.setInk("viewer"),te.setVisible(wt),Ne&&T?.setDetent(Ne),Oa(),fr(),E&&Qt(E),Qe&&ii?.setActive(!0),be=!1,Ba=!1,Ms(),bs(),requestAnimationFrame(ka)}}window.blueprintCaptureDrawing=async()=>{let E=await Td();return E?{png:E.png,pdf:E.pdf,stem:E.stem}:null},window.blueprintSetView=(E={})=>{if(!Le||!E)return!1;let k=E.projection==="ortho"?"ortho":"perspective",K=Number.isFinite(Number(E.hFovDeg))?Number(E.hFovDeg):ce;return k==="perspective"&&Y==="ortho"&&Se(K),k==="perspective"&&ae(K,{reframe:!1}),ge(()=>{ee=!0;let G=new P(0,1,0);if(Array.isArray(E.up)&&E.up.length>=3&&(G.set(Number(E.up[0])||0,Number(E.up[1])||0,Number(E.up[2])||0),G.lengthSq()>1e-12?G.normalize():G.set(0,1,0)),he.up.copy(G),pe.up.copy(G),ne.up.copy(G),Array.isArray(E.target)&&H.target.set(Number(E.target[0])||0,Number(E.target[1])||0,Number(E.target[2])||0),Array.isArray(E.position)&&ne.position.set(Number(E.position[0])||0,Number(E.position[1])||0,Number(E.position[2])||0),ne.lookAt(H.target),k==="ortho"){let ve=ne.position.distanceTo(H.target),Ve=$(K,X());ie(ve,Ve),de=1,Y!=="ortho"&&(Ee(pe),Y="ortho"),Me(),ot()}oe(),mt(),H.update(),ee=!1}),zr=!0,!0},pr&&pr.addEventListener("click",()=>{vs=!vs,te.setVisible(vs),bs()}),ys&&ys.addEventListener("click",()=>{(async()=>{let E=await Td();E&&(yd(E.png,`${E.stem}.png`),yd(E.pdf,`${E.stem}.pdf`))})()});let ii=null;c&&(ii=B0({scene:c,canvas:i,getCamera:()=>ne,controls:H,getRoot:()=>Le,getClipPlanes:()=>hr(),onLiveLength:E=>{an&&(E?(an.textContent=E,an.classList.add("is-live")):(an.textContent=Fa(),an.classList.remove("is-live")))},onActiveChange:E=>{zr=!0,an&&(an.classList.toggle("is-active",E),an.setAttribute("aria-pressed",E?"true":"false"),E||(an.textContent=Fa(),an.classList.remove("is-live")))}})),an&&an.addEventListener("click",()=>{ii&&ii.setActive(!ii.isActive())}),ue=()=>!!ii?.isActive();function Ad(){if(!Le)return null;Le.updateWorldMatrix(!0,!0);let E=Et().map(ve=>Ct(ve)),k=new Lt;if(k.name="ARContent",Le.traverse(ve=>{if(!ve.isMesh||!ve.visible||En(ve))return;let Ve=h0(ve,E);Ve&&k.add(Ve)}),!k.children.length)return null;k.updateMatrixWorld(!0);let K=ed(k),G=new Lt;return G.name="ARExport",G.add(k),g0(k,K),G.userData.arPlacement=K,G}async function Rd(){if(xo||!Le)return;xo=!0;let E=Ln?.textContent||"AR";Ln&&(Ln.disabled=!0,Ln.textContent="\u2026");try{let k=Ad();if(!k)throw new Error("Nothing visible to export. Show at least one part.");let G=await new Wl().parseAsync(k,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),ve=new Blob([G],{type:"model/vnd.usdz+zip"}),Ve=URL.createObjectURL(ve),Ne=document.createElement("a");Ne.rel="ar",Ne.href=Ve,Ne.download="view.usdz";let Qe=document.createElement("img");Qe.alt="AR",Ne.appendChild(Qe),document.body.appendChild(Ne),Ne.click(),Ne.remove(),setTimeout(()=>URL.revokeObjectURL(Ve),6e4)}catch(k){N(String(k?.message||k))}finally{xo=!1,Ln&&(Ln.disabled=!1,Ln.textContent=E)}}Ln&&Ln.addEventListener("click",()=>{Rd()});let Cd={scene:c,get camera(){return ne},controls:H,parts:d,partOpacity:g,cuts:Z,scenes:n,setPartOpacity:Xn,setCameraPreset:ft,applyScene:Qt,setHFov:ae,toggleFovIso:fe,get projection(){return Y},get hFovDeg(){return ce},setCutT:Mi,removeCut:on,frameIso:$e,openArQuickLook:Rd,buildArExportScene:Ad,getPeelQuality:()=>_o};window.BlueprintsViewer=Cd;function Pd(){for(let E of g.values())if(E<1-1e-4)return!0;return!1}function Id(){for(let[E,k]of d){let K=g.get(E)??1;Nr(k,K,{edgeMode:f})}}let Dd=!1,zr=!0,Ld=null,Ud=null,_o="fast",Nd=null,za=!1;i.addEventListener("pointermove",()=>{ii?.isActive()&&(zr=!0)}),i.addEventListener("pointerup",()=>{ii?.isActive()&&(zr=!0)});function ux(){let E=ne.view;return[ne.position.x,ne.position.y,ne.position.z,ne.quaternion.x,ne.quaternion.y,ne.quaternion.z,ne.quaternion.w,ne.zoom,ne.near,ne.far,ne.fov||0,ne.left,ne.right,ne.top,ne.bottom,H.target.x,H.target.y,H.target.z,i.width,i.height,E&&E.enabled?1:0,E?E.offsetX:0,E?E.offsetY:0,E?E.fullWidth:0,E?E.fullHeight:0,Y==="ortho"?1:0]}function hx(){let E=ux(),k=Ld,K=!k||k.length!==E.length;if(!K&&k){for(let G=0;G<E.length;G++)if(E[G]!==k[G]){K=!0;break}}return K&&(Ld=E),K}function fx(){let E=[h,f,ru(),vs?"1":"0",String(l)],k=c?.background;k&&k.isColor&&E.push(k.getHexString());for(let[K,G]of g)E.push(K,Number(G).toFixed(3));for(let K of Z)E.push(String(K.id),K.locked?"1":"0",Number(K.t).toFixed(4));return E.join("|")}function ka(){if(be)return;let E=performance.now();le.step(E)&&(zr=!0),rx(E),H.update(),Le&&mt(),Md||(Fr.copy(ne.position),ti.copy(H.target),Md=!0);let k=ne.position.distanceToSquared(Fr)>1e-8||H.target.distanceToSquared(ti)>1e-8;Fr.copy(ne.position),ti.copy(H.target);let K=fx(),G=K!==Ud,ve=hx();if(G&&(za=!0),_o=!Gt&&!k&&!G&&!I&&!Br&&!za?"high":"fast",!zr&&!G&&!ve&&!(_o!==Nd)&&!za){requestAnimationFrame(ka);return}zr=!1,Ud=K,Nd=_o,G||(za=!1),ii?.update(),te.update();let Qe=L.render(c,ne,Le,Pd,{quality:_o,batchKey:K,deferPrime:G||I});Dd&&!Qe&&Id(),Dd=Qe,requestAnimationFrame(ka)}return ka(),Cd}return vx(c1);})();
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
