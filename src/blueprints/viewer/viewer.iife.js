var BlueprintsViewerBundle=(()=>{var Xu=Object.defineProperty;var yy=Object.getOwnPropertyDescriptor;var _y=Object.getOwnPropertyNames;var vy=Object.prototype.hasOwnProperty;var by=(n,e)=>{for(var t in e)Xu(n,t,{get:e[t],enumerable:!0})},My=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of _y(e))!vy.call(n,r)&&r!==t&&Xu(n,r,{get:()=>e[r],enumerable:!(i=yy(e,r))||i.enumerable});return n};var Sy=n=>My(Xu({},"__esModule",{value:!0}),n);var MT={};by(MT,{mountViewer:()=>bT});var jc="172",Pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nm=0,Ih=1,im=2;var Dh=1,rm=2,Ui=3,Bn=0,pn=1,bt=2,zn=0,ui=1,Lh=2,Nh=3,Uh=4,Jc=5,Kn=100,sm=101,om=102,am=103,cm=104,ga=200,Dr=201,lm=202,um=203,Zs=204,Kr=205,hm=206,xa=207,fm=208,dm=209,pm=210,mm=211,gm=212,xm=213,ym=214,Qc=0,el=1,tl=2,jr=3,nl=4,il=5,rl=6,sl=7,Oh=0,_m=1,vm=2,mi=0,bm=1,Mm=2,Sm=3,ya=4,Em=5,wm=6,Tm=7,_h="attached",Am="detached",Fh=300,rs=301,ss=302,ol=303,al=304,_a=306,hi=1e3,wi=1001,Ks=1002,Xt=1003,cl=1004;var os=1005;var qt=1006,ro=1007;var gi=1008;var Jn=1009,Bh=1010,zh=1011,so=1012,ll=1013,Lr=1014,kn=1015,lr=1016,ul=1017,hl=1018,as=1020,kh=35902,Hh=1021,Vh=1022,on=1023,Gh=1024,Wh=1025,Zr=1026,Jr=1027,fl=1028,dl=1029,Xh=1030,pl=1031;var ml=1033,va=33776,ba=33777,Ma=33778,Sa=33779,gl=35840,xl=35841,yl=35842,_l=35843,vl=36196,bl=37492,Ml=37496,Sl=37808,El=37809,wl=37810,Tl=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Il=37816,Dl=37817,Ll=37818,Nl=37819,Ul=37820,Ol=37821,Ea=36492,Fl=36494,Bl=36495,qh=36283,zl=36284,kl=36285,Hl=36286;var Qr=2300,es=2301,Lc=2302,vh=2400,bh=2401,Mh=2402,Rm=2500;var Yh=0,wa=1,oo=2,Cm=3200,Pm=3201;var $h=0,Im=1,xi="",xt="srgb",fn="srgb-linear",ko="linear",Et="srgb";var $r=7680;var Sh=519,Dm=512,Lm=513,Nm=514,Zh=515,Um=516,Om=517,Fm=518,Bm=519,Nc=35044;var Kh="300 es",Ti=2e3,Ho=2001,Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pp=1234567,Ys=Math.PI/180,ts=180/Math.PI;function li(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function jh(n,e){return(n%e+e)%e}function Ey(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function wy(n,e,t){return n!==e?(t-n)/(e-n):0}function zo(n,e,t){return(1-t)*n+t*e}function Ty(n,e,t,i){return zo(n,e,1-Math.exp(-t*i))}function Ay(n,e=1){return e-Math.abs(jh(n,e*2)-e)}function Ry(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Py(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Iy(n,e){return n+Math.random()*(e-n)}function Dy(n){return n*(.5-Math.random())}function Ly(n){n!==void 0&&(pp=n);let e=pp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ny(n){return n*Ys}function Uy(n){return n*ts}function Oy(n){return(n&n-1)===0&&n!==0}function Fy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function By(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zy(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var cs={DEG2RAD:Ys,RAD2DEG:ts,generateUUID:li,clamp:st,euclideanModulo:jh,mapLinear:Ey,inverseLerp:wy,lerp:zo,damp:Ty,pingpong:Ay,smoothstep:Ry,smootherstep:Cy,randInt:Py,randFloat:Iy,randFloatSpread:Dy,seededRandom:Ly,degToRad:Ny,radToDeg:Uy,isPowerOfTwo:Oy,ceilPowerOfTwo:Fy,floorPowerOfTwo:By,setQuaternionFromProperEuler:zy,normalize:St,denormalize:ci},Ve=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=r[0],m=r[3],p=r[6],b=r[1],v=r[4],y=r[7],A=r[2],R=r[5],C=r[8];return s[0]=o*x+a*b+c*A,s[3]=o*m+a*v+c*R,s[6]=o*p+a*y+c*C,s[1]=l*x+u*b+h*A,s[4]=l*m+u*v+h*R,s[7]=l*p+u*y+h*C,s[2]=f*x+d*b+g*A,s[5]=f*m+d*v+g*R,s[8]=f*p+d*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qu.makeScale(e,t)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qu=new rt;function Jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zm(){let n=js("canvas");return n.style.display="block",n}var mp={};function ls(n){n in mp||(mp[n]=!0,console.warn(n))}function km(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Hm(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vm(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var gp=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xp=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ky(){let n={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xi?ko:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fn]:{primaries:e,whitePoint:i,transfer:ko,toXYZ:gp,fromXYZ:xp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:gp,fromXYZ:xp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),n}var ft=ky();function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ps,Uc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=js("canvas")),Ps.width=e.width,Ps.height=e.height;let i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=js("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=nr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hy=0,Vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yu(r[o].image)):s.push(Yu(r[o]))}else s=Yu(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Yu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Uc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vy=0,Zt=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=wi,r=wi,s=qt,o=gi,a=on,c=Jn,l=n.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=li(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Fh;Zt.DEFAULT_ANISOTROPY=1;var at=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,y=(d+1)/2,A=(p+1)/2,R=(u+f)/4,C=(h+x)/4,N=(g+m)/4;return v>y&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=C/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=N/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends Ai{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Oc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Go=class extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fc=class extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==d||u!==g){let m=1-a,p=c*f+l*d+u*g+h*x,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),R=Math.atan2(A,p*b);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}let y=a*b;if(c=c*m+f*y,l=l*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$u=new P,yp=new kt,It=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),ic.subVectors(this.max,Ro),Is.subVectors(e.a,Ro),Ds.subVectors(e.b,Ro),Ls.subVectors(e.c,Ro),_r.subVectors(Ds,Is),vr.subVectors(Ls,Ds),Wr.subVectors(Is,Ls);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Wr.z,Wr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Wr.z,0,-Wr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Wr.y,Wr.x,0];return!Zu(t,Is,Ds,Ls,ic)||(t=[1,0,0,0,1,0,0,0,1],!Zu(t,Is,Ds,Ls,ic))?!1:(rc.crossVectors(_r,vr),t=[rc.x,rc.y,rc.z],Zu(t,Is,Ds,Ls,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zi=[new P,new P,new P,new P,new P,new P,new P,new P],si=new P,nc=new It,Is=new P,Ds=new P,Ls=new P,_r=new P,vr=new P,Wr=new P,Ro=new P,ic=new P,rc=new P,Xr=new P;function Zu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xr.fromArray(n,s);let a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),c=e.dot(Xr),l=t.dot(Xr),u=i.dot(Xr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Gy=new It,Co=new P,Ku=new P,rn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Gy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);let t=Co.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Ku)),this.expandByPoint(Co.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ki=new P,ju=new P,sc=new P,br=new P,Ju=new P,oc=new P,Qu=new P,Ri=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ju.copy(e).add(t).multiplyScalar(.5),sc.copy(t).sub(e).normalize(),br.copy(this.origin).sub(ju);let s=e.distanceTo(t)*.5,o=-this.direction.dot(sc),a=br.dot(this.direction),c=-br.dot(sc),l=br.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ju).addScaledVector(sc,f),d}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);let i=Ki.dot(this.direction),r=Ki.dot(Ki)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,r,s){Ju.subVectors(t,e),oc.subVectors(i,e),Qu.crossVectors(Ju,oc);let o=this.direction.dot(Qu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;br.subVectors(this.origin,e);let c=a*this.direction.dot(oc.crossVectors(br,oc));if(c<0)return null;let l=a*this.direction.dot(Ju.cross(br));if(l<0||c+l>o)return null;let u=-a*br.dot(Qu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class n{constructor(e,t,i,r,s,o,a,c,l,u,h,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,f,d,g,x,m)}set(e,t,i,r,s,o,a,c,l,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,Xy)}lookAt(e,t,i){let r=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Mr.crossVectors(i,Wn),Mr.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Mr.crossVectors(i,Wn)),Mr.normalize(),ac.crossVectors(Wn,Mr),r[0]=Mr.x,r[4]=ac.x,r[8]=Wn.x,r[1]=Mr.y,r[5]=ac.y,r[9]=Wn.y,r[2]=Mr.z,r[6]=ac.z,r[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],v=i[7],y=i[11],A=i[15],R=r[0],C=r[4],N=r[8],E=r[12],S=r[1],z=r[5],J=r[9],V=r[13],$=r[2],ee=r[6],Q=r[10],he=r[14],te=r[3],de=r[7],ne=r[11],me=r[15];return s[0]=o*R+a*S+c*$+l*te,s[4]=o*C+a*z+c*ee+l*de,s[8]=o*N+a*J+c*Q+l*ne,s[12]=o*E+a*V+c*he+l*me,s[1]=u*R+h*S+f*$+d*te,s[5]=u*C+h*z+f*ee+d*de,s[9]=u*N+h*J+f*Q+d*ne,s[13]=u*E+h*V+f*he+d*me,s[2]=g*R+x*S+m*$+p*te,s[6]=g*C+x*z+m*ee+p*de,s[10]=g*N+x*J+m*Q+p*ne,s[14]=g*E+x*V+m*he+p*me,s[3]=b*R+v*S+y*$+A*te,s[7]=b*C+v*z+y*ee+A*de,s[11]=b*N+v*J+y*Q+A*ne,s[15]=b*E+v*V+y*he+A*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+x*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+p*(-r*a*u-t*c*h+t*a*f+r*o*h-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=h*m*l-x*f*l+x*c*d-a*m*d-h*c*p+a*f*p,v=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,y=u*x*l-g*h*l+g*a*d-o*x*d-u*a*p+o*h*p,A=g*h*c-u*x*c-g*a*f+o*x*f+u*a*m-o*h*m,R=t*b+i*v+r*y+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=b*C,e[1]=(x*f*s-h*m*s-x*r*d+i*m*d+h*r*p-i*f*p)*C,e[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*p+i*c*p)*C,e[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*C,e[4]=v*C,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*C,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*d+t*c*d)*C,e[8]=y*C,e[9]=(g*h*s-u*x*s-g*i*d+t*x*d+u*i*p-t*h*p)*C,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*d-t*a*d)*C,e[12]=A*C,e[13]=(u*x*r-g*h*r+g*i*f-t*x*f-u*i*m+t*h*m)*C,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*m-t*a*m)*C,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,x=o*u,m=o*h,p=a*h,b=c*l,v=c*u,y=c*h,A=i.x,R=i.y,C=i.z;return r[0]=(1-(x+p))*A,r[1]=(d+y)*A,r[2]=(g-v)*A,r[3]=0,r[4]=(d-y)*R,r[5]=(1-(f+p))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(g+v)*C,r[9]=(m-b)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ns.set(r[0],r[1],r[2]).length(),o=Ns.set(r[4],r[5],r[6]).length(),a=Ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);let l=1/s,u=1/o,h=1/a;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,t.setFromRotationMatrix(oi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ti){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r),d,g;if(a===Ti)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ho)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ti){let c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*l,d=(i+r)*u,g,x;if(a===Ti)g=(o+s)*h,x=-2*h;else if(a===Ho)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ns=new P,oi=new tt,Wy=new P(0,0,0),Xy=new P(1,1,1),Mr=new P,ac=new P,Wn=new P,_p=new tt,vp=new kt,fi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _p.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_p,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vp.setFromEuler(this),this.setFromQuaternion(vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qy=0,bp=new P,Us=new kt,ji=new tt,cc=new P,Po=new P,Yy=new P,$y=new kt,Mp=new P(1,0,0),Sp=new P(0,1,0),Ep=new P(0,0,1),wp={type:"added"},Zy={type:"removed"},Os={type:"childadded",child:null},eh={type:"childremoved",child:null},Ut=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new fi,i=new kt,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new rt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Mp,e)}rotateY(e){return this.rotateOnAxis(Sp,e)}rotateZ(e){return this.rotateOnAxis(Ep,e)}translateOnAxis(e,t){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mp,e)}translateY(e){return this.translateOnAxis(Sp,e)}translateZ(e){return this.translateOnAxis(Ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cc.copy(e):cc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Po,cc,this.up):ji.lookAt(cc,Po,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),Us.setFromRotationMatrix(ji),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wp),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zy),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wp),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,Yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,$y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ut.DEFAULT_UP=new P(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new P,Ji=new P,th=new P,Qi=new P,Fs=new P,Bs=new P,Tp=new P,nh=new P,ih=new P,rh=new P,sh=new at,oh=new at,ah=new at,Ei=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ai.subVectors(e,t),r.cross(ai);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ai.subVectors(r,t),Ji.subVectors(i,t),th.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(Ji),c=ai.dot(th),l=Ji.dot(Ji),u=Ji.dot(th),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qi.x),c.addScaledVector(o,Qi.y),c.addScaledVector(a,Qi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return sh.setScalar(0),oh.setScalar(0),ah.setScalar(0),sh.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sh,s.x),o.addScaledVector(oh,s.y),o.addScaledVector(ah,s.z),o}static isFrontFacing(e,t,i,r){return ai.subVectors(i,t),Ji.subVectors(e,t),ai.cross(Ji).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),ai.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Fs.subVectors(r,i),Bs.subVectors(s,i),nh.subVectors(e,i);let c=Fs.dot(nh),l=Bs.dot(nh);if(c<=0&&l<=0)return t.copy(i);ih.subVectors(e,r);let u=Fs.dot(ih),h=Bs.dot(ih);if(u>=0&&h<=u)return t.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Fs,o);rh.subVectors(e,s);let d=Fs.dot(rh),g=Bs.dot(rh);if(g>=0&&d<=g)return t.copy(s);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Bs,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Tp.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Tp,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},lc={h:0,s:0,l:0};function ch(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=jh(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ch(o,s,e+1/3),this.g=ch(o,s,e),this.b=ch(o,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let i=Gm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return ft.fromWorkingColorSpace(En.copy(this),e),Math.round(st(En.r*255,0,255))*65536+Math.round(st(En.g*255,0,255))*256+Math.round(st(En.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(En.copy(this),t);let i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=xt){ft.fromWorkingColorSpace(En.copy(this),e);let t=En.r,i=En.g,r=En.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(lc);let i=zo(Sr.h,lc.h,t),r=zo(Sr.s,lc.s,t),s=zo(Sr.l,lc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new qe;qe.NAMES=Gm;var Ky=0,Ln=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ui,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zs,this.blendDst=Kr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zs&&(i.blendSrc=this.blendSrc),this.blendDst!==Kr&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ot=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new P,uc=new Ve,vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}};var Wo=class extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xo=class extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Nt=class extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},jy=0,Zn=new tt,lh=new Ut,zs=new P,Xn=new It,Io=new It,nn=new P,Tt=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?Xo:Wo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Xn.min,Io.min),Xn.expandByPoint(nn),nn.addVectors(Xn.max,Io.max),Xn.expandByPoint(nn)):(Xn.expandByPoint(Io.min),Xn.expandByPoint(Io.max))}Xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),nn.add(zs)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new P,c[N]=new P;let l=new P,u=new P,h=new P,f=new Ve,d=new Ve,g=new Ve,x=new P,m=new P;function p(N,E,S){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,N),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),d.sub(f),g.sub(f);let z=1/(d.x*g.y-g.x*d.y);isFinite(z)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(z),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(z),a[N].add(x),a[E].add(x),a[S].add(x),c[N].add(m),c[E].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,E=b.length;N<E;++N){let S=b[N],z=S.start,J=S.count;for(let V=z,$=z+J;V<$;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let v=new P,y=new P,A=new P,R=new P;function C(N){A.fromBufferAttribute(r,N),R.copy(A);let E=a[N];v.copy(E),v.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(R,E);let z=y.dot(c[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,z)}for(let N=0,E=b.length;N<E;++N){let S=b[N],z=S.start,J=S.count;for(let V=z,$=z+J;V<$;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ap=new tt,qr=new Ri,hc=new rn,Rp=new P,fc=new P,dc=new P,pc=new P,uh=new P,mc=new P,Cp=new P,gc=new P,nt=class extends Ut{constructor(e=new Tt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){mc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(uh.fromBufferAttribute(h,e),o?mc.addScaledVector(uh,u):mc.addScaledVector(uh.sub(t),u))}t.add(mc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(hc.containsPoint(qr.origin)===!1&&(qr.intersectSphere(hc,Rp)===null||qr.origin.distanceToSquared(Rp)>(e.far-e.near)**2))&&(Ap.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Ap),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,A=v;y<A;y+=3){let R=a.getX(y),C=a.getX(y+1),N=a.getX(y+2);r=xc(this,p,e,i,l,u,h,R,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=xc(this,o,e,i,l,u,h,b,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,A=v;y<A;y+=3){let R=y,C=y+1,N=y+2;r=xc(this,p,e,i,l,u,h,R,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=m,v=m+1,y=m+2;r=xc(this,o,e,i,l,u,h,b,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Jy(n,e,t,i,r,s,o,a){let c;if(e.side===pn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Bn,a),c===null)return null;gc.copy(a),gc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(gc);return l<t.near||l>t.far?null:{distance:l,point:gc.clone(),object:n}}function xc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,fc),n.getVertexPosition(c,dc),n.getVertexPosition(l,pc);let u=Jy(n,e,t,i,fc,dc,pc,Cp);if(u){let h=new P;Ei.getBarycoord(Cp,fc,dc,pc,h),r&&(u.uv=Ei.getInterpolatedAttribute(r,a,c,l,h,new Ve)),s&&(u.uv1=Ei.getInterpolatedAttribute(s,a,c,l,h,new Ve)),o&&(u.normal=Ei.getInterpolatedAttribute(o,a,c,l,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new P,materialIndex:0};Ei.getNormal(fc,dc,pc,f.normal),u.face=f,u.barycoord=h}return u}var Ci=class n extends Tt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function g(x,m,p,b,v,y,A,R,C,N,E){let S=y/C,z=A/N,J=y/2,V=A/2,$=R/2,ee=C+1,Q=N+1,he=0,te=0,de=new P;for(let ne=0;ne<Q;ne++){let me=ne*z-V;for(let Me=0;Me<ee;Me++){let De=Me*S-J;de[x]=De*b,de[m]=me*v,de[p]=$,l.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=R>0?1:-1,u.push(de.x,de.y,de.z),h.push(Me/C),h.push(1-ne/N),he+=1}}for(let ne=0;ne<N;ne++)for(let me=0;me<C;me++){let Me=f+me+ee*ne,De=f+me+ee*(ne+1),j=f+(me+1)+ee*(ne+1),ie=f+(me+1)+ee*ne;c.push(Me,De,ie),c.push(De,j,ie),te+=6}a.addGroup(d,te,E),d+=te,f+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function us(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function An(n){let e={};for(let t=0;t<n.length;t++){let i=us(n[t]);for(let r in i)e[r]=i[r]}return e}function Qy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Ta={clone:us,merge:An},e_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e_,this.fragmentShader=t_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qo=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Er=new P,Pp=new Ve,Ip=new Ve,Wt=class extends qo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,Pp,Ip),t.subVectors(Ip,Pp)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Hs=1,Bc=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Wt(ks,Hs,e,t);r.layers=this.layers,this.add(r);let s=new Wt(ks,Hs,e,t);s.layers=this.layers,this.add(s);let o=new Wt(ks,Hs,e,t);o.layers=this.layers,this.add(o);let a=new Wt(ks,Hs,e,t);a.layers=this.layers,this.add(a);let c=new Wt(ks,Hs,e,t);c.layers=this.layers,this.add(c);let l=new Wt(ks,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Yo=class extends Zt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zc=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ci(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:zn});s.uniforms.tEquirect.value=t;let o=new nt(r,s),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=qt),new Bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};var Nn=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dn=new P,wn=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qs=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vs,Do=new P,Gs=new P,Ws=new P,Xs=new Ve,Lo=new Ve,Wm=new tt,yc=new P,No=new P,_c=new P,Dp=new Ve,hh=new Ve,Lp=new Ve,$o=class extends Ut{constructor(e=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wr(t,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new wn(i,3,0,!1)),Vs.setAttribute("uv",new wn(i,2,3,!1))}this.geometry=Vs,this.material=e,this.center=new Ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Wm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Ws.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;vc(yc.set(-.5,-.5,0),Ws,o,Gs,r,s),vc(No.set(.5,-.5,0),Ws,o,Gs,r,s),vc(_c.set(.5,.5,0),Ws,o,Gs,r,s),Dp.set(0,0),hh.set(1,0),Lp.set(1,1);let a=e.ray.intersectTriangle(yc,No,_c,!1,Do);if(a===null&&(vc(No.set(-.5,.5,0),Ws,o,Gs,r,s),hh.set(0,1),a=e.ray.intersectTriangle(yc,_c,No,!1,Do),a===null))return;let c=e.ray.origin.distanceTo(Do);c<e.near||c>e.far||t.push({distance:c,point:Do.clone(),uv:Ei.getInterpolation(Do,yc,No,_c,Dp,hh,Lp,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function vc(n,e,t,i,r,s){Xs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Lo.x=s*Xs.x-r*Xs.y,Lo.y=r*Xs.x+s*Xs.y):Lo.copy(Xs),n.copy(e),n.x+=Lo.x,n.y+=Lo.y,n.applyMatrix4(Wm)}var Np=new P,Up=new at,Op=new at,n_=new P,Fp=new tt,bc=new P,fh=new rn,Bp=new tt,dh=new Ri,Zo=class extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new It),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,bc),this.boundingBox.expandByPoint(bc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,bc),this.boundingSphere.expandByPoint(bc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fh.copy(this.boundingSphere),fh.applyMatrix4(r),e.ray.intersectsSphere(fh)!==!1&&(Bp.copy(r).invert(),dh.copy(e.ray).applyMatrix4(Bp),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Am?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Up.fromBufferAttribute(r.attributes.skinIndex,e),Op.fromBufferAttribute(r.attributes.skinWeight,e),Np.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Op.getComponent(s);if(o!==0){let a=Up.getComponent(s);Fp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(n_.copy(Np).applyMatrix4(Fp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},eo=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ko=class extends Zt{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Xt,u=Xt,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zp=new tt,i_=new tt,jo=class n{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new tt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:i_;zp.multiplyMatrices(a,t[s]),zp.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ko(t,e,e,on,kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new eo),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},Tr=class extends vt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new tt,kp=new tt,Mc=[],Hp=new It,r_=new tt,Uo=new nt,Oo=new rn,Jo=class extends nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,r_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new It),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),Hp.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(Hp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),Oo.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(i),e.ray.intersectsSphere(Oo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qs),kp.multiplyMatrices(i,qs),Uo.matrixWorld=kp,Uo.raycast(e,Mc);for(let o=0,a=Mc.length;o<a;o++){let c=Mc[o];c.instanceId=s,c.object=this,t.push(c)}Mc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ko(new Float32Array(r*this.count),r,this.count,fl,kn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},ph=new P,s_=new P,o_=new rt,hn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ph.subVectors(i,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ph),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||o_.getNormalMatrix(e),r=this.coplanarPoint(ph).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yr=new rn,Sc=new P,to=class{constructor(e=new hn,t=new hn,i=new hn,r=new hn,s=new hn,o=new hn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],x=r[10],m=r[11],p=r[12],b=r[13],v=r[14],y=r[15];if(i[0].setComponents(c-s,f-l,m-d,y-p).normalize(),i[1].setComponents(c+s,f+l,m+d,y+p).normalize(),i[2].setComponents(c+o,f+u,m+g,y+b).normalize(),i[3].setComponents(c-o,f-u,m-g,y-b).normalize(),i[4].setComponents(c-a,f-h,m-x,y-v).normalize(),t===Ti)i[5].setComponents(c+a,f+h,m+x,y+v).normalize();else if(t===Ho)i[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Sc.x=r.normal.x>0?e.max.x:e.min.x,Sc.y=r.normal.y>0?e.max.y:e.min.y,Sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ir=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},kc=new P,Hc=new P,Vp=new tt,Fo=new Ri,Ec=new rn,mh=new P,Gp=new P,Pi=class extends Ut{constructor(e=new Tt,t=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)kc.fromBufferAttribute(t,r-1),Hc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=kc.distanceTo(Hc);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(r),Ec.radius+=s,e.ray.intersectsSphere(Ec)===!1)return;Vp.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(Vp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=u.getX(x),b=u.getX(x+1),v=wc(this,e,Fo,c,p,b);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=wc(this,e,Fo,c,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=wc(this,e,Fo,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=wc(this,e,Fo,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function wc(n,e,t,i,r,s){let o=n.geometry.attributes.position;if(kc.fromBufferAttribute(o,r),Hc.fromBufferAttribute(o,s),t.distanceSqToSegment(kc,Hc,mh,Gp)>i)return;mh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(mh);if(!(c<e.near||c>e.far))return{distance:c,point:Gp.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var Wp=new P,Xp=new P,Qo=class extends Pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Wp.fromBufferAttribute(t,r),Xp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Wp.distanceTo(Xp);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ea=class extends Pi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},no=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qp=new tt,Eh=new Ri,Tc=new rn,Ac=new P,ta=class extends Ut{constructor(e=new Tt,t=new no){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(r),Tc.radius+=s,e.ray.intersectsSphere(Tc)===!1)return;qp.copy(r).invert(),Eh.copy(e.ray).applyMatrix4(qp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=l.getX(g);Ac.fromBufferAttribute(h,m),Yp(Ac,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Ac.fromBufferAttribute(h,g),Yp(Ac,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Yp(n,e,t,i,r,s,o){let a=Eh.distanceSqToPoint(n);if(a<t){let c=new P;Eh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Dt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}};var rr=class extends Zt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},na=class extends Zt{constructor(e,t,i,r,s,o,a,c,l,u=Zr){if(u!==Zr&&u!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zr&&(i=Lr),i===void 0&&u===Jr&&(i=as),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Rc=new P,Cc=new P,gh=new P,Pc=new Ei,ia=class extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ys*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:p}=Pc;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Pc.getNormal(gh),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let v=(b+1)%3,y=h[b],A=h[v],R=Pc[u[b]],C=Pc[u[v]],N=`${y}_${A}`,E=`${A}_${y}`;E in f&&f[E]?(gh.dot(f[E].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(C.x,C.y,C.z)),f[E]=null):N in f||(f[N]={index0:l[b],index1:l[v],normal:gh.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];Rc.fromBufferAttribute(a,x),Cc.fromBufferAttribute(a,m),d.push(Rc.x,Rc.y,Rc.z),d.push(Cc.x,Cc.y,Cc.z)}this.setAttribute("position",new Nt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var jn=class n extends Tt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let v=0;v<l;v++){let y=v*h-s;g.push(y,-b,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let v=b+l*p,y=b+l*(p+1),A=b+1+l*(p+1),R=b+1+l*p;d.push(v,y,R),d.push(y,A,R)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ra=class n extends Tt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new P,f=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let b=[],v=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&c===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let R=A/t;h.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(R+y,1-v),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let v=u[p][b+1],y=u[p][b],A=u[p+1][b],R=u[p+1][b+1];(p!==0||o>0)&&d.push(v,y,R),(p!==i-1||c<Math.PI)&&d.push(y,A,R)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sa=class extends Tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new P,s=new P;if(e.index!==null){let o=e.attributes.position,a=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],f=h.start,d=h.count;for(let g=f,x=f+d;g<x;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),b=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,b),$p(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,h=3*a+(l+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),$p(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Nt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function $p(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var Tn=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sn=class extends Tn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Vc=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gc=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ic(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function a_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function c_(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Zp(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function Xm(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var sr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wc=class extends sr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:s=e,a=2*t-i;break;case Mh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case bh:o=e,c=2*i-t;break;case Mh:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+b*o[l+A]+v*o[c+A]+y*o[h+A];return s}},Xc=class extends sr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},qc=class extends sr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ic(t,this.TimeBufferType),this.values=Ic(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ic(e.times,Array),values:Ic(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case es:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&a_(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Lc,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=es;var or=class extends qn{constructor(e,t,i){super(e,t,i)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Qr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends qn{};oa.prototype.ValueTypeName="color";var Ii=class extends qn{};Ii.prototype.ValueTypeName="number";var Yc=class extends sr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)kt.slerpFlat(s,0,o,l-a,o,l,c);return s}},Di=class extends qn{InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}};Di.prototype.ValueTypeName="quaternion";Di.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends qn{constructor(e,t,i){super(e,t,i)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Qr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends qn{};Li.prototype.ValueTypeName="vector";var aa=class{constructor(e="",t=-1,i=[],r=Rm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(u_(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(qn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=c_(c);c=Zp(c,1,u),l=Zp(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ii(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,d,g,x){if(d.length!==0){let m=[],p=[];Xm(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let b=0;b!==f[g].morphTargets.length;++b){let v=f[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}r.push(new Ii(".morphTargetInfluence["+x+"]",m,p))}c=d.length*o}else{let d=".bones["+t[h].name+"]";i(Li,d+".position",f,"pos",r),i(Di,d+".quaternion",f,"rot",r),i(Li,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function l_(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return oa;case"quaternion":return Di;case"bool":case"boolean":return or;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function u_(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=l_(n.type);if(n.times===void 0){let t=[],i=[];Xm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var tr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},$c=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},qm=new $c,Ni=class{constructor(e){this.manager=e!==void 0?e:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var er={},wh=class extends Error{constructor(e,t){super(e),this.response=t}},io=class extends Ni{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=tr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(er[e]!==void 0){er[e].push({onLoad:t,onProgress:i,onError:r});return}er[e]=[],er[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=er[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){b();function b(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{x+=y.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let R=0,C=u.length;R<C;R++){let N=u[R];N.onProgress&&N.onProgress(A)}p.enqueue(y),b()}},v=>{p.error(v)})}}});return new Response(m)}else throw new wh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{tr.add(e,l);let u=er[e];delete er[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=er[e];if(u===void 0)throw this.manager.itemError(e),l;delete er[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Zc=class extends Ni{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=tr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=js("img");function c(){u(),tr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var ca=class extends Ni{constructor(e){super(e)}load(e,t,i,r){let s=new Zt,o=new Zc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},ns=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var xh=new tt,Kp=new P,jp=new P,la=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Kp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kp),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Th=class extends la{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ts*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ua=class extends ns{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Th}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Jp=new tt,Bo=new P,yh=new P,Ah=class extends la{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Bo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Bo),yh.copy(i.position),yh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(yh),i.updateMatrixWorld(),r.makeTranslation(-Bo.x,-Bo.y,-Bo.z),Jp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jp)}},is=class extends ns{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},di=class extends qo{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rh=class extends la{constructor(){super(new di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ar=class extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Rh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ha=class extends ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var cr=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},fa=class extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var da=class extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=tr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return tr.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),tr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});tr.add(e,c),s.manager.itemStart(e)}};var Kc=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var ef="\\[\\]\\.:\\/",h_=new RegExp("["+ef+"]","g"),tf="[^"+ef+"]",f_="[^"+ef.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",tf),p_=/(WCOD+)?/.source.replace("WCOD",f_),m_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tf),g_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tf),x_=new RegExp("^"+d_+p_+m_+g_+"$"),y_=["material","materials","bones","map"],Ch=class{constructor(e,t,i){let r=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h_,"")}static parseTrackName(e){let t=x_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);y_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Ch;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ET=new Float32Array(1);var Rr=class extends wr{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Qp=new tt,pi=class{constructor(e,t,i=0,r=1/0){this.ray=new Ri(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qp),this}intersectObject(e,t=!0,i=[]){return Ph(e,this,i,t),i.sort(em),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ph(e[r],this,i,t);return i.sort(em),i}};function em(n,e){return n.distance-e.distance}function Ph(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Ph(s[o],e,t,!0)}}var Cr=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var tm=new P,Dc=new P,pa=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){tm.subVectors(e,this.start),Dc.subVectors(this.end,this.start);let i=Dc.dot(Dc),s=Dc.dot(tm)/i;return t&&(s=st(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ma=class extends Ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function nf(n,e,t,i){let r=__(i);switch(t){case Hh:return n*e;case Gh:return n*e;case Wh:return n*e*2;case fl:return n*e/r.components*r.byteLength;case dl:return n*e/r.components*r.byteLength;case Xh:return n*e*2/r.components*r.byteLength;case pl:return n*e*2/r.components*r.byteLength;case Vh:return n*e*3/r.components*r.byteLength;case on:return n*e*4/r.components*r.byteLength;case ml:return n*e*4/r.components*r.byteLength;case va:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:case _l:return Math.max(n,16)*Math.max(e,8)/4;case gl:case yl:return Math.max(n,8)*Math.max(e,8)/2;case vl:case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Fl:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qh:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kl:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function __(n){switch(n){case Jn:case Bh:return{byteLength:1,components:1};case so:case zh:case lr:return{byteLength:2,components:1};case ul:case hl:return{byteLength:2,components:4};case Lr:case ll:case kn:return{byteLength:4,components:1};case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);function gg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function v_(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var b_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M_=`#ifdef USE_ALPHAHASH
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
#endif`,S_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
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
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C_=`#ifdef USE_BATCHING
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
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N_=`#ifdef USE_IRIDESCENCE
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
#endif`,U_=`#ifdef USE_BUMPMAP
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
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,W_=`#define PI 3.141592653589793
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
} // validated`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q_=`vec3 transformedNormal = objectNormal;
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
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j_="gl_FragColor = linearToOutputTexel( gl_FragColor );",J_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
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
}`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
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
#endif`,dv=`#ifdef USE_ENVMAP
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
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
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
#endif`,_v=`struct PhysicalMaterial {
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
}`,vv=`
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ev=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pv=`#if defined( USE_POINTS_UV )
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
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
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
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gv=`#ifdef USE_NORMALMAP
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
#endif`,Wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sb=`float getShadowMask() {
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
}`,ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
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
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pb=`#ifdef USE_TRANSMISSION
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
#endif`,mb=`#ifdef USE_TRANSMISSION
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
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
}`,Ab=`#if DEPTH_PACKING == 3200
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
}`,Rb=`#define DISTANCE
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
}`,Cb=`#define DISTANCE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`uniform float scale;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Nb=`#include <common>
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Ob=`#define LAMBERT
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
}`,Fb=`#define LAMBERT
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
}`,Bb=`#define MATCAP
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
}`,zb=`#define MATCAP
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
}`,kb=`#define NORMAL
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
}`,Hb=`#define NORMAL
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
}`,Vb=`#define PHONG
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
}`,Gb=`#define PHONG
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
}`,Wb=`#define STANDARD
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
}`,Xb=`#define STANDARD
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
}`,qb=`#define TOON
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
}`,Yb=`#define TOON
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
}`,$b=`uniform float size;
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Kb=`#include <common>
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
}`,jb=`uniform vec3 color;
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
}`,Jb=`uniform float rotation;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:b_,alphahash_pars_fragment:M_,alphamap_fragment:S_,alphamap_pars_fragment:E_,alphatest_fragment:w_,alphatest_pars_fragment:T_,aomap_fragment:A_,aomap_pars_fragment:R_,batching_pars_vertex:C_,batching_vertex:P_,begin_vertex:I_,beginnormal_vertex:D_,bsdfs:L_,iridescence_fragment:N_,bumpmap_pars_fragment:U_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:F_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:z_,color_fragment:k_,color_pars_fragment:H_,color_pars_vertex:V_,color_vertex:G_,common:W_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:q_,displacementmap_pars_vertex:Y_,displacementmap_vertex:$_,emissivemap_fragment:Z_,emissivemap_pars_fragment:K_,colorspace_fragment:j_,colorspace_pars_fragment:J_,envmap_fragment:Q_,envmap_common_pars_fragment:ev,envmap_pars_fragment:tv,envmap_pars_vertex:nv,envmap_physical_pars_fragment:dv,envmap_vertex:iv,fog_vertex:rv,fog_pars_vertex:sv,fog_fragment:ov,fog_pars_fragment:av,gradientmap_pars_fragment:cv,lightmap_pars_fragment:lv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:hv,lights_pars_begin:fv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:xv,lights_physical_fragment:yv,lights_physical_pars_fragment:_v,lights_fragment_begin:vv,lights_fragment_maps:bv,lights_fragment_end:Mv,logdepthbuf_fragment:Sv,logdepthbuf_pars_fragment:Ev,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Tv,map_fragment:Av,map_pars_fragment:Rv,map_particle_fragment:Cv,map_particle_pars_fragment:Pv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Lv,morphcolor_vertex:Nv,morphnormal_vertex:Uv,morphtarget_pars_vertex:Ov,morphtarget_vertex:Fv,normal_fragment_begin:Bv,normal_fragment_maps:zv,normal_pars_fragment:kv,normal_pars_vertex:Hv,normal_vertex:Vv,normalmap_pars_fragment:Gv,clearcoat_normal_fragment_begin:Wv,clearcoat_normal_fragment_maps:Xv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Yv,opaque_fragment:$v,packing:Zv,premultiplied_alpha_fragment:Kv,project_vertex:jv,dithering_fragment:Jv,dithering_pars_fragment:Qv,roughnessmap_fragment:eb,roughnessmap_pars_fragment:tb,shadowmap_pars_fragment:nb,shadowmap_pars_vertex:ib,shadowmap_vertex:rb,shadowmask_pars_fragment:sb,skinbase_vertex:ob,skinning_pars_vertex:ab,skinning_vertex:cb,skinnormal_vertex:lb,specularmap_fragment:ub,specularmap_pars_fragment:hb,tonemapping_fragment:fb,tonemapping_pars_fragment:db,transmission_fragment:pb,transmission_pars_fragment:mb,uv_pars_fragment:gb,uv_pars_vertex:xb,uv_vertex:yb,worldpos_vertex:_b,background_vert:vb,background_frag:bb,backgroundCube_vert:Mb,backgroundCube_frag:Sb,cube_vert:Eb,cube_frag:wb,depth_vert:Tb,depth_frag:Ab,distanceRGBA_vert:Rb,distanceRGBA_frag:Cb,equirect_vert:Pb,equirect_frag:Ib,linedashed_vert:Db,linedashed_frag:Lb,meshbasic_vert:Nb,meshbasic_frag:Ub,meshlambert_vert:Ob,meshlambert_frag:Fb,meshmatcap_vert:Bb,meshmatcap_frag:zb,meshnormal_vert:kb,meshnormal_frag:Hb,meshphong_vert:Vb,meshphong_frag:Gb,meshphysical_vert:Wb,meshphysical_frag:Xb,meshtoon_vert:qb,meshtoon_frag:Yb,points_vert:$b,points_frag:Zb,shadow_vert:Kb,shadow_frag:jb,sprite_vert:Jb,sprite_frag:Qb},Fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Un={basic:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:An([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:An([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:An([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:An([Fe.points,Fe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:An([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:An([Fe.common,Fe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:An([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:An([Fe.sprite,Fe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:An([Fe.common,Fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:An([Fe.lights,Fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Un.physical={uniforms:An([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Vl={r:0,b:0,g:0},hs=new fi,eM=new tt;function tM(n,e,t,i,r,s,o){let a=new qe(0),c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1,A=g(v);A===null?p(a,c):A&&A.isColor&&(p(A,1),y=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===_a)?(u===void 0&&(u=new nt(new Ci(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:us(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hs.copy(y.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(hs)),u.material.toneMapped=ft.getTransfer(A.colorSpace)!==Et,(h!==A||f!==A.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new nt(new jn(2,2),new Kt({name:"BackgroundMaterial",uniforms:us(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ft.getTransfer(A.colorSpace)!==Et,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(Vl,Qh(n)),i.buffers.color.setClear(Vl.r,Vl.g,Vl.b,y,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m,dispose:b}}function nM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(S,z,J,V,$){let ee=!1,Q=h(V,J,z);s!==Q&&(s=Q,l(s.object)),ee=d(S,V,J,$),ee&&g(S,V,J,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(S,z,J,V),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,z,J){let V=J.wireframe===!0,$=i[S.id];$===void 0&&($={},i[S.id]=$);let ee=$[z.id];ee===void 0&&(ee={},$[z.id]=ee);let Q=ee[V];return Q===void 0&&(Q=f(c()),ee[V]=Q),Q}function f(S){let z=[],J=[],V=[];for(let $=0;$<t;$++)z[$]=0,J[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:V,object:S,attributes:{},index:null}}function d(S,z,J,V){let $=s.attributes,ee=z.attributes,Q=0,he=J.getAttributes();for(let te in he)if(he[te].location>=0){let ne=$[te],me=ee[te];if(me===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),ne===void 0||ne.attribute!==me||me&&ne.data!==me.data)return!0;Q++}return s.attributesNum!==Q||s.index!==V}function g(S,z,J,V){let $={},ee=z.attributes,Q=0,he=J.getAttributes();for(let te in he)if(he[te].location>=0){let ne=ee[te];ne===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));let me={};me.attribute=ne,ne&&ne.data&&(me.data=ne.data),$[te]=me,Q++}s.attributes=$,s.attributesNum=Q,s.index=V}function x(){let S=s.newAttributes;for(let z=0,J=S.length;z<J;z++)S[z]=0}function m(S){p(S,0)}function p(S,z){let J=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;J[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),$[S]!==z&&(n.vertexAttribDivisor(S,z),$[S]=z)}function b(){let S=s.newAttributes,z=s.enabledAttributes;for(let J=0,V=z.length;J<V;J++)z[J]!==S[J]&&(n.disableVertexAttribArray(J),z[J]=0)}function v(S,z,J,V,$,ee,Q){Q===!0?n.vertexAttribIPointer(S,z,J,$,ee):n.vertexAttribPointer(S,z,J,V,$,ee)}function y(S,z,J,V){x();let $=V.attributes,ee=J.getAttributes(),Q=z.defaultAttributeValues;for(let he in ee){let te=ee[he];if(te.location>=0){let de=$[he];if(de===void 0&&(he==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),he==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){let ne=de.normalized,me=de.itemSize,Me=e.get(de);if(Me===void 0)continue;let De=Me.buffer,j=Me.type,ie=Me.bytesPerElement,H=j===n.INT||j===n.UNSIGNED_INT||de.gpuType===ll;if(de.isInterleavedBufferAttribute){let X=de.data,ye=X.stride,xe=de.offset;if(X.isInstancedInterleavedBuffer){for(let Ce=0;Ce<te.locationSize;Ce++)p(te.location+Ce,X.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ce=0;Ce<te.locationSize;Ce++)m(te.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Ce=0;Ce<te.locationSize;Ce++)v(te.location+Ce,me/te.locationSize,j,ne,ye*ie,(xe+me/te.locationSize*Ce)*ie,H)}else{if(de.isInstancedBufferAttribute){for(let X=0;X<te.locationSize;X++)p(te.location+X,de.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let X=0;X<te.locationSize;X++)m(te.location+X);n.bindBuffer(n.ARRAY_BUFFER,De);for(let X=0;X<te.locationSize;X++)v(te.location+X,me/te.locationSize,j,ne,me*ie,me/te.locationSize*X*ie,H)}}else if(Q!==void 0){let ne=Q[he];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(te.location,ne);break;case 3:n.vertexAttrib3fv(te.location,ne);break;case 4:n.vertexAttrib4fv(te.location,ne);break;default:n.vertexAttrib1fv(te.location,ne)}}}}b()}function A(){N();for(let S in i){let z=i[S];for(let J in z){let V=z[J];for(let $ in V)u(V[$].object),delete V[$];delete z[J]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;let z=i[S.id];for(let J in z){let V=z[J];for(let $ in V)u(V[$].object),delete V[$];delete z[J]}delete i[S.id]}function C(S){for(let z in i){let J=i[z];if(J[S.id]===void 0)continue;let V=J[S.id];for(let $ in V)u(V[$].object),delete V[$];delete J[S.id]}}function N(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function iM(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function c(l,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==on&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let N=C===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==kn&&!N)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:R}}function sM(n){let e=this,t=null,i=0,r=!1,s=!1,o=new hn,a=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,v=b*4,y=p.clippingState||null;c.value=y,y=u(g,f,v,d);for(let A=0;A!==v;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function oM(n){let e=new WeakMap;function t(o,a){return a===ol?o.mapping=rs:a===al&&(o.mapping=ss),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ol||a===al)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new zc(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var co=4,Ym=[.125,.215,.35,.446,.526,.582],ps=20,rf=new di,$m=new qe,sf=null,of=0,af=0,cf=!1,ds=(1+Math.sqrt(5))/2,ao=1/ds,Zm=[new P(-ds,ao,0),new P(ds,ao,0),new P(-ao,0,ds),new P(ao,0,ds),new P(0,ds,-ao),new P(0,ds,ao),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,of,af),this._renderer.xr.enabled=cf,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:lr,format:on,colorSpace:fn,depthBuffer:!1},r=Km(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aM(s)),this._blurMaterial=cM(s,e,t)}return r}_compileMaterial(e){let t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,rf)}_sceneToCubeUV(e,t,i,r){let a=new Wt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($m),u.toneMapping=mi,u.autoClear=!1;let d=new Ot({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new nt(new Ci,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy($m),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Gl(r,b*v,p>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===rs||e.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Gl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,rf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zm[(r-s-1)%Zm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new nt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ps-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):ps;m>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);let p=[],b=0;for(let C=0;C<ps;++C){let N=C/x,E=Math.exp(-N*N/2);p.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let y=this._sizeLods[r],A=3*y*(r>v-co?r-v+co:0),R=4*(this._cubeSize-y);Gl(t,A,R,3*y,2*y),c.setRenderTarget(t),c.render(h,rf)}};function aM(n){let e=[],t=[],i=[],r=n,s=n-co+1+Ym.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-co?c=Ym[o-n+co-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*d),v=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let R=0;R<d;R++){let C=R%3*2/3-1,N=R>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];b.set(E,x*g*R),v.set(f,m*g*R);let S=[R,R,R,R,R,R];y.set(S,p*g*R)}let A=new Tt;A.setAttribute("position",new vt(b,x)),A.setAttribute("uv",new vt(v,m)),A.setAttribute("faceIndex",new vt(y,p)),e.push(A),r>co&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Km(n,e,t){let i=new dn(n,e,t);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cM(n,e,t){let i=new Float32Array(ps),r=new P(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yf(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function jm(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Jm(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}function lM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===ol||c===al,u=c===rs||c===ss;if(l||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new uo(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new uo(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function uM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ls("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hM(n,e,t,i){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let b=d.array;x=d.version;for(let v=0,y=b.length;v<y;v+=3){let A=b[v+0],R=b[v+1],C=b[v+2];f.push(A,R,R,C,C,A)}}else if(g!==void 0){let b=g.array;x=g.version;for(let v=0,y=b.length/3-1;v<y;v+=3){let A=v+0,R=v+1,C=v+2;f.push(A,R,R,C,C,A)}}else return;let m=new(Jh(f)?Xo:Wo)(f,1);m.version=x;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function fM(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*x[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function dM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pM(n,e,t){let i=new WeakMap,r=new at;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*A*4*h),C=new Go(R,y,A,h);C.type=kn,C.needsUpdate=!0;let N=v*4;for(let S=0;S<h;S++){let z=m[S],J=p[S],V=b[S],$=y*A*4*S;for(let ee=0;ee<z.count;ee++){let Q=ee*N;d===!0&&(r.fromBufferAttribute(z,ee),R[$+Q+0]=r.x,R[$+Q+1]=r.y,R[$+Q+2]=r.z,R[$+Q+3]=0),g===!0&&(r.fromBufferAttribute(J,ee),R[$+Q+4]=r.x,R[$+Q+5]=r.y,R[$+Q+6]=r.z,R[$+Q+7]=0),x===!0&&(r.fromBufferAttribute(V,ee),R[$+Q+8]=r.x,R[$+Q+9]=r.y,R[$+Q+10]=r.z,R[$+Q+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Ve(y,A)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function mM(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var xg=new Zt,Qm=new na(1,1),yg=new Go,_g=new Fc,vg=new Yo,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function ho(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=eg[r];if(s===void 0&&(s=new Float32Array(r),eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ql(n,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function _M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function vM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;rg.set(i),n.uniformMatrix2fv(this.addr,!1,rg),Jt(t,i)}}function bM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;ig.set(i),n.uniformMatrix3fv(this.addr,!1,ig),Jt(t,i)}}function MM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;ng.set(i),n.uniformMatrix4fv(this.addr,!1,ng),Jt(t,i)}}function SM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function EM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function AM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function CM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function PM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function IM(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Qm.compareFunction=Zh,s=Qm):s=xg,t.setTexture2D(e||s,r)}function DM(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_g,r)}function LM(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vg,r)}function NM(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||yg,r)}function UM(n){switch(n){case 5126:return gM;case 35664:return xM;case 35665:return yM;case 35666:return _M;case 35674:return vM;case 35675:return bM;case 35676:return MM;case 5124:case 35670:return SM;case 35667:case 35671:return EM;case 35668:case 35672:return wM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return NM}}function OM(n,e){n.uniform1fv(this.addr,e)}function FM(n,e){let t=ho(e,this.size,2);n.uniform2fv(this.addr,t)}function BM(n,e){let t=ho(e,this.size,3);n.uniform3fv(this.addr,t)}function zM(n,e){let t=ho(e,this.size,4);n.uniform4fv(this.addr,t)}function kM(n,e){let t=ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HM(n,e){let t=ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VM(n,e){let t=ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GM(n,e){n.uniform1iv(this.addr,e)}function WM(n,e){n.uniform2iv(this.addr,e)}function XM(n,e){n.uniform3iv(this.addr,e)}function qM(n,e){n.uniform4iv(this.addr,e)}function YM(n,e){n.uniform1uiv(this.addr,e)}function $M(n,e){n.uniform2uiv(this.addr,e)}function ZM(n,e){n.uniform3uiv(this.addr,e)}function KM(n,e){n.uniform4uiv(this.addr,e)}function jM(n,e,t){let i=this.cache,r=e.length,s=ql(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xg,s[o])}function JM(n,e,t){let i=this.cache,r=e.length,s=ql(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_g,s[o])}function QM(n,e,t){let i=this.cache,r=e.length,s=ql(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vg,s[o])}function eS(n,e,t){let i=this.cache,r=e.length,s=ql(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||yg,s[o])}function tS(n){switch(n){case 5126:return OM;case 35664:return FM;case 35665:return BM;case 35666:return zM;case 35674:return kM;case 35675:return HM;case 35676:return VM;case 5124:case 35670:return GM;case 35667:case 35671:return WM;case 35668:case 35672:return XM;case 35669:case 35673:return qM;case 5125:return YM;case 36294:return $M;case 36295:return ZM;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return eS}}var uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=UM(t.type)}},hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tS(t.type)}},ff=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},lf=/(\w+)(\])?(\[|\.)?/g;function sg(n,e){n.seq.push(e),n.map[e.id]=e}function nS(n,e,t){let i=n.name,r=i.length;for(lf.lastIndex=0;;){let s=lf.exec(i),o=lf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){sg(t,l===void 0?new uf(a,n,e):new hf(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new ff(a),sg(t,h)),t=h}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nS(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function og(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iS=37297,rS=0;function sS(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ag=new rt;function oS(n){ft._getMatrix(ag,ft.workingColorSpace,n);let e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case ko:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sS(n.getShaderSource(e),o)}else return r}function aS(n,e){let t=oS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cS(n,e){let t;switch(e){case bm:t="Linear";break;case Mm:t="Reinhard";break;case Sm:t="Cineon";break;case ya:t="ACESFilmic";break;case wm:t="AgX";break;case Tm:t="Neutral";break;case Em:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wl=new P;function lS(){ft.getLuminanceCoefficients(Wl);let n=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function hS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Aa(n){return n!==""}function lg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dS=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(n){return n.replace(dS,mS)}var pS=new Map;function mS(n,e){let t=ot[e];if(t===void 0){let i=pS.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return df(t)}var gS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(n){return n.replace(gS,xS)}function xS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function yS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function _S(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rs:case ss:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function bS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oh:e="ENVMAP_BLENDING_MULTIPLY";break;case _m:e="ENVMAP_BLENDING_MIX";break;case vm:e="ENVMAP_BLENDING_ADD";break}return e}function MS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SS(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=yS(t),l=_S(t),u=vS(t),h=bS(t),f=MS(t),d=uS(t),g=hS(s),x=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),p.length>0&&(p+=`
`)):(m=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),p=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ot.tonemapping_pars_fragment:"",t.toneMapping!==mi?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,aS("linearToOutputTexel",t.outputColorSpace),lS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),o=df(o),o=lg(o,t),o=ug(o,t),a=df(a),a=lg(a,t),a=ug(a,t),o=hg(o),a=hg(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=b+m+o,y=b+p+a,A=og(r,r.VERTEX_SHADER,v),R=og(r,r.FRAGMENT_SHADER,y);r.attachShader(x,A),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(z){if(n.debug.checkShaderErrors){let J=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(A).trim(),$=r.getShaderInfoLog(R).trim(),ee=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,R);else{let he=cg(r,A,"vertex"),te=cg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+he+`
`+te)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(V===""||$==="")&&(Q=!1);Q&&(z.diagnostics={runnable:ee,programLog:J,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(A),r.deleteShader(R),N=new lo(r,x),E=fS(r,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,iS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}var ES=0,pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new mf(e),t.set(e,i)),i}},mf=class{constructor(e){this.id=ES++,this.code=e,this.usedTimes=0}};function wS(n,e,t,i,r,s,o){let a=new Js,c=new pf,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,z,J,V){let $=J.fog,ee=V.geometry,Q=E.isMeshStandardMaterial?J.environment:null,he=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),te=he&&he.mapping===_a?he.image.height:null,de=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let ne=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,me=ne!==void 0?ne.length:0,Me=0;ee.morphAttributes.position!==void 0&&(Me=1),ee.morphAttributes.normal!==void 0&&(Me=2),ee.morphAttributes.color!==void 0&&(Me=3);let De,j,ie,H;if(de){let Ye=Un[de];De=Ye.vertexShader,j=Ye.fragmentShader}else De=E.vertexShader,j=E.fragmentShader,c.update(E),ie=c.getVertexShaderID(E),H=c.getFragmentShaderID(E);let X=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),xe=V.isInstancedMesh===!0,Ce=V.isBatchedMesh===!0,Xe=!!E.map,Pe=!!E.matcap,ce=!!he,L=!!E.aoMap,Ue=!!E.lightMap,be=!!E.bumpMap,Te=!!E.normalMap,pe=!!E.displacementMap,We=!!E.emissiveMap,W=!!E.metalnessMap,w=!!E.roughnessMap,M=E.anisotropy>0,U=E.clearcoat>0,I=E.dispersion>0,O=E.iridescence>0,F=E.sheen>0,oe=E.transmission>0,q=M&&!!E.anisotropyMap,Z=U&&!!E.clearcoatMap,_e=U&&!!E.clearcoatNormalMap,re=U&&!!E.clearcoatRoughnessMap,fe=O&&!!E.iridescenceMap,Ee=O&&!!E.iridescenceThicknessMap,Ne=F&&!!E.sheenColorMap,Ae=F&&!!E.sheenRoughnessMap,$e=!!E.specularMap,Se=!!E.specularColorMap,ke=!!E.specularIntensityMap,G=oe&&!!E.transmissionMap,Re=oe&&!!E.thicknessMap,le=!!E.gradientMap,ge=!!E.alphaMap,Be=E.alphaTest>0,Oe=!!E.alphaHash,et=!!E.extensions,ut=mi;E.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ut=n.toneMapping);let Pt={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:De,fragmentShader:j,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:H,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&V._colorsTexture!==null,instancing:xe,instancingColor:xe&&V.instanceColor!==null,instancingMorph:xe&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:fn,alphaToCoverage:!!E.alphaToCoverage,map:Xe,matcap:Pe,envMap:ce,envMapMode:ce&&he.mapping,envMapCubeUVHeight:te,aoMap:L,lightMap:Ue,bumpMap:be,normalMap:Te,displacementMap:f&&pe,emissiveMap:We,normalMapObjectSpace:Te&&E.normalMapType===Im,normalMapTangentSpace:Te&&E.normalMapType===$h,metalnessMap:W,roughnessMap:w,anisotropy:M,anisotropyMap:q,clearcoat:U,clearcoatMap:Z,clearcoatNormalMap:_e,clearcoatRoughnessMap:re,dispersion:I,iridescence:O,iridescenceMap:fe,iridescenceThicknessMap:Ee,sheen:F,sheenColorMap:Ne,sheenRoughnessMap:Ae,specularMap:$e,specularColorMap:Se,specularIntensityMap:ke,transmission:oe,transmissionMap:G,thicknessMap:Re,gradientMap:le,opaque:E.transparent===!1&&E.blending===ui&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:Be,alphaHash:Oe,combine:E.combine,mapUv:Xe&&x(E.map.channel),aoMapUv:L&&x(E.aoMap.channel),lightMapUv:Ue&&x(E.lightMap.channel),bumpMapUv:be&&x(E.bumpMap.channel),normalMapUv:Te&&x(E.normalMap.channel),displacementMapUv:pe&&x(E.displacementMap.channel),emissiveMapUv:We&&x(E.emissiveMap.channel),metalnessMapUv:W&&x(E.metalnessMap.channel),roughnessMapUv:w&&x(E.roughnessMap.channel),anisotropyMapUv:q&&x(E.anisotropyMap.channel),clearcoatMapUv:Z&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(E.sheenRoughnessMap.channel),specularMapUv:$e&&x(E.specularMap.channel),specularColorMapUv:Se&&x(E.specularColorMap.channel),specularIntensityMapUv:ke&&x(E.specularIntensityMap.channel),transmissionMapUv:G&&x(E.transmissionMap.channel),thicknessMapUv:Re&&x(E.thicknessMap.channel),alphaMapUv:ge&&x(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Te||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ee.attributes.uv&&(Xe||ge),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:V.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===Et,decodeVideoTextureEmissive:We&&E.emissiveMap.isVideoTexture===!0&&ft.getTransfer(E.emissiveMap.colorSpace)===Et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bt,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:et&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function p(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let z in E.defines)S.push(z),S.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(b(S,E),v(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function b(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let S=g[E.type],z;if(S){let J=Un[S];z=Ta.clone(J.uniforms)}else z=E.uniforms;return z}function A(E,S){let z;for(let J=0,V=u.length;J<V;J++){let $=u[J];if($.cacheKey===S){z=$,++z.usedTimes;break}}return z===void 0&&(z=new SS(n,S,E,s),u.push(z)),z}function R(E){if(--E.usedTimes===0){let S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:N}}function TS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function AS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pg(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||AS),i.length>1&&i.sort(f||dg),r.length>1&&r.sort(f||dg)}function u(){for(let h=e,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function RS(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new pg,n.set(i,[o])):r>=s.length?(o=new pg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function CS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function PS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var IS=0;function DS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LS(n){let e=new CS,t=PS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let r=new P,s=new tt,o=new tt;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,b=0,v=0,y=0,A=0,R=0,C=0;l.sort(DS);for(let E=0,S=l.length;E<S;E++){let z=l[E],J=z.color,V=z.intensity,$=z.distance,ee=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)u+=J.r*V,h+=J.g*V,f+=J.b*V;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(z.sh.coefficients[Q],V);C++}else if(z.isDirectionalLight){let Q=e.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let he=z.shadow,te=t.get(z);te.shadowIntensity=he.intensity,te.shadowBias=he.bias,te.shadowNormalBias=he.normalBias,te.shadowRadius=he.radius,te.shadowMapSize=he.mapSize,i.directionalShadow[d]=te,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=z.shadow.matrix,b++}i.directional[d]=Q,d++}else if(z.isSpotLight){let Q=e.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(J).multiplyScalar(V),Q.distance=$,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,i.spot[x]=Q;let he=z.shadow;if(z.map&&(i.spotLightMap[A]=z.map,A++,he.updateMatrices(z),z.castShadow&&R++),i.spotLightMatrix[x]=he.matrix,z.castShadow){let te=t.get(z);te.shadowIntensity=he.intensity,te.shadowBias=he.bias,te.shadowNormalBias=he.normalBias,te.shadowRadius=he.radius,te.shadowMapSize=he.mapSize,i.spotShadow[x]=te,i.spotShadowMap[x]=ee,y++}x++}else if(z.isRectAreaLight){let Q=e.get(z);Q.color.copy(J).multiplyScalar(V),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),i.rectArea[m]=Q,m++}else if(z.isPointLight){let Q=e.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){let he=z.shadow,te=t.get(z);te.shadowIntensity=he.intensity,te.shadowBias=he.bias,te.shadowNormalBias=he.normalBias,te.shadowRadius=he.radius,te.shadowMapSize=he.mapSize,te.shadowCameraNear=he.camera.near,te.shadowCameraFar=he.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=z.shadow.matrix,v++}i.point[g]=Q,g++}else if(z.isHemisphereLight){let Q=e.get(z);Q.skyColor.copy(z.color).multiplyScalar(V),Q.groundColor.copy(z.groundColor).multiplyScalar(V),i.hemi[p]=Q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==b||N.numPointShadows!==v||N.numSpotShadows!==y||N.numSpotMaps!==A||N.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,N.directionalLength=d,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=b,N.numPointShadows=v,N.numSpotShadows=y,N.numSpotMaps=A,N.numLightProbes=C,i.version=IS++)}function c(l,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let v=l[p];if(v.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(v.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function mg(n){let e=new LS(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function NS(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new mg(n),e.set(r,[a])):s>=o.length?(a=new mg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var US=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OS=`uniform sampler2D shadow_pass;
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
}`;function FS(n,e,t){let i=new to,r=new Ve,s=new Ve,o=new at,a=new Vc({depthPacking:Pm}),c=new Gc,l={},u=t.maxTextureSize,h={[Bn]:pn,[pn]:Bn,[bt]:bt},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:US,fragmentShader:OS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let p=this.type;this.render=function(R,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=n.getRenderTarget(),S=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),J=n.state;J.setBlending(zn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let V=p!==Ui&&this.type===Ui,$=p===Ui&&this.type!==Ui;for(let ee=0,Q=R.length;ee<Q;ee++){let he=R[ee],te=he.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);let de=te.getFrameExtents();if(r.multiply(de),s.copy(te.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,te.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,te.mapSize.y=s.y)),te.map===null||V===!0||$===!0){let me=this.type!==Ui?{minFilter:Xt,magFilter:Xt}:{};te.map!==null&&te.map.dispose(),te.map=new dn(r.x,r.y,me),te.map.texture.name=he.name+".shadowMap",te.camera.updateProjectionMatrix()}n.setRenderTarget(te.map),n.clear();let ne=te.getViewportCount();for(let me=0;me<ne;me++){let Me=te.getViewport(me);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),J.viewport(o),te.updateMatrices(he,me),i=te.getFrustum(),y(C,N,te.camera,he,this.type)}te.isPointLightShadow!==!0&&this.type===Ui&&b(te,N),te.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,z)};function b(R,C){let N=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new dn(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,N,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,N,d,x,null)}function v(R,C,N,E){let S=null,z=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)S=z;else if(S=N.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let J=S.uuid,V=C.uuid,$=l[J];$===void 0&&($={},l[J]=$);let ee=$[V];ee===void 0&&(ee=S.clone(),$[V]=ee,C.addEventListener("dispose",A)),S=ee}if(S.visible=C.visible,S.wireframe=C.wireframe,E===Ui?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let J=n.properties.get(S);J.light=N}return S}function y(R,C,N,E,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Ui)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let V=e.update(R),$=R.material;if(Array.isArray($)){let ee=V.groups;for(let Q=0,he=ee.length;Q<he;Q++){let te=ee[Q],de=$[te.materialIndex];if(de&&de.visible){let ne=v(R,de,E,S);R.onBeforeShadow(n,R,C,N,V,ne,te),n.renderBufferDirect(N,null,V,ne,R,te),R.onAfterShadow(n,R,C,N,V,ne,te)}}}else if($.visible){let ee=v(R,$,E,S);R.onBeforeShadow(n,R,C,N,V,ee,null),n.renderBufferDirect(N,null,V,ee,R,null),R.onAfterShadow(n,R,C,N,V,ee,null)}}let J=R.children;for(let V=0,$=J.length;V<$;V++)y(J[V],C,N,E,S)}function A(R){R.target.removeEventListener("dispose",A);for(let N in l){let E=l[N],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var BS={[Qc]:el,[tl]:rl,[nl]:sl,[jr]:il,[el]:Qc,[rl]:tl,[sl]:nl,[il]:jr};function zS(n,e){function t(){let G=!1,Re=new at,le=null,ge=new at(0,0,0,0);return{setMask:function(Be){le!==Be&&!G&&(n.colorMask(Be,Be,Be,Be),le=Be)},setLocked:function(Be){G=Be},setClear:function(Be,Oe,et,ut,Pt){Pt===!0&&(Be*=ut,Oe*=ut,et*=ut),Re.set(Be,Oe,et,ut),ge.equals(Re)===!1&&(n.clearColor(Be,Oe,et,ut),ge.copy(Re))},reset:function(){G=!1,le=null,ge.set(-1,0,0,0)}}}function i(){let G=!1,Re=!1,le=null,ge=null,Be=null;return{setReversed:function(Oe){if(Re!==Oe){let et=e.get("EXT_clip_control");Re?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);let ut=Be;Be=null,this.setClear(ut)}Re=Oe},getReversed:function(){return Re},setTest:function(Oe){Oe?X(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(Oe){le!==Oe&&!G&&(n.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(Re&&(Oe=BS[Oe]),ge!==Oe){switch(Oe){case Qc:n.depthFunc(n.NEVER);break;case el:n.depthFunc(n.ALWAYS);break;case tl:n.depthFunc(n.LESS);break;case jr:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case il:n.depthFunc(n.GEQUAL);break;case rl:n.depthFunc(n.GREATER);break;case sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Oe}},setLocked:function(Oe){G=Oe},setClear:function(Oe){Be!==Oe&&(Re&&(Oe=1-Oe),n.clearDepth(Oe),Be=Oe)},reset:function(){G=!1,le=null,ge=null,Be=null,Re=!1}}}function r(){let G=!1,Re=null,le=null,ge=null,Be=null,Oe=null,et=null,ut=null,Pt=null;return{setTest:function(Ye){G||(Ye?X(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(Ye){Re!==Ye&&!G&&(n.stencilMask(Ye),Re=Ye)},setFunc:function(Ye,Rt,ve){(le!==Ye||ge!==Rt||Be!==ve)&&(n.stencilFunc(Ye,Rt,ve),le=Ye,ge=Rt,Be=ve)},setOp:function(Ye,Rt,ve){(Oe!==Ye||et!==Rt||ut!==ve)&&(n.stencilOp(Ye,Rt,ve),Oe=Ye,et=Rt,ut=ve)},setLocked:function(Ye){G=Ye},setClear:function(Ye){Pt!==Ye&&(n.clearStencil(Ye),Pt=Ye)},reset:function(){G=!1,Re=null,le=null,ge=null,Be=null,Oe=null,et=null,ut=null,Pt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,v=null,y=null,A=null,R=null,C=new qe(0,0,0),N=0,E=!1,S=null,z=null,J=null,V=null,$=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,he=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(te)[1]),Q=he>=1):te.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Q=he>=2);let de=null,ne={},me=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),De=new at().fromArray(me),j=new at().fromArray(Me);function ie(G,Re,le,ge){let Be=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(G,Oe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<le;et++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Re+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return Oe}let H={};H[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(n.DEPTH_TEST),o.setFunc(jr),be(!1),Te(Ih),X(n.CULL_FACE),L(zn);function X(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function ye(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function xe(G,Re){return h[G]!==Re?(n.bindFramebuffer(G,Re),h[G]=Re,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Re),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ce(G,Re){let le=d,ge=!1;if(G){le=f.get(Re),le===void 0&&(le=[],f.set(Re,le));let Be=G.textures;if(le.length!==Be.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,et=Be.length;Oe<et;Oe++)le[Oe]=n.COLOR_ATTACHMENT0+Oe;le.length=Be.length,ge=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ge=!0);ge&&n.drawBuffers(le)}function Xe(G){return g!==G?(n.useProgram(G),g=G,!0):!1}let Pe={[Kn]:n.FUNC_ADD,[sm]:n.FUNC_SUBTRACT,[om]:n.FUNC_REVERSE_SUBTRACT};Pe[am]=n.MIN,Pe[cm]=n.MAX;let ce={[ga]:n.ZERO,[Dr]:n.ONE,[lm]:n.SRC_COLOR,[Zs]:n.SRC_ALPHA,[pm]:n.SRC_ALPHA_SATURATE,[fm]:n.DST_COLOR,[hm]:n.DST_ALPHA,[um]:n.ONE_MINUS_SRC_COLOR,[Kr]:n.ONE_MINUS_SRC_ALPHA,[dm]:n.ONE_MINUS_DST_COLOR,[xa]:n.ONE_MINUS_DST_ALPHA,[mm]:n.CONSTANT_COLOR,[gm]:n.ONE_MINUS_CONSTANT_COLOR,[xm]:n.CONSTANT_ALPHA,[ym]:n.ONE_MINUS_CONSTANT_ALPHA};function L(G,Re,le,ge,Be,Oe,et,ut,Pt,Ye){if(G===zn){x===!0&&(ye(n.BLEND),x=!1);return}if(x===!1&&(X(n.BLEND),x=!0),G!==Jc){if(G!==m||Ye!==E){if((p!==Kn||y!==Kn)&&(n.blendEquation(n.FUNC_ADD),p=Kn,y=Kn),Ye)switch(G){case ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,v=null,A=null,R=null,C.set(0,0,0),N=0,m=G,E=Ye}return}Be=Be||Re,Oe=Oe||le,et=et||ge,(Re!==p||Be!==y)&&(n.blendEquationSeparate(Pe[Re],Pe[Be]),p=Re,y=Be),(le!==b||ge!==v||Oe!==A||et!==R)&&(n.blendFuncSeparate(ce[le],ce[ge],ce[Oe],ce[et]),b=le,v=ge,A=Oe,R=et),(ut.equals(C)===!1||Pt!==N)&&(n.blendColor(ut.r,ut.g,ut.b,Pt),C.copy(ut),N=Pt),m=G,E=!1}function Ue(G,Re){G.side===bt?ye(n.CULL_FACE):X(n.CULL_FACE);let le=G.side===pn;Re&&(le=!le),be(le),G.blending===ui&&G.transparent===!1?L(zn):L(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);let ge=G.stencilWrite;a.setTest(ge),ge&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),We(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(G){S!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),S=G)}function Te(G){G!==nm?(X(n.CULL_FACE),G!==z&&(G===Ih?n.cullFace(n.BACK):G===im?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),z=G}function pe(G){G!==J&&(Q&&n.lineWidth(G),J=G)}function We(G,Re,le){G?(X(n.POLYGON_OFFSET_FILL),(V!==Re||$!==le)&&(n.polygonOffset(Re,le),V=Re,$=le)):ye(n.POLYGON_OFFSET_FILL)}function W(G){G?X(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function w(G){G===void 0&&(G=n.TEXTURE0+ee-1),de!==G&&(n.activeTexture(G),de=G)}function M(G,Re,le){le===void 0&&(de===null?le=n.TEXTURE0+ee-1:le=de);let ge=ne[le];ge===void 0&&(ge={type:void 0,texture:void 0},ne[le]=ge),(ge.type!==G||ge.texture!==Re)&&(de!==le&&(n.activeTexture(le),de=le),n.bindTexture(G,Re||H[G]),ge.type=G,ge.texture=Re)}function U(){let G=ne[de];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function F(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){De.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),De.copy(G))}function Ae(G){j.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),j.copy(G))}function $e(G,Re){let le=l.get(Re);le===void 0&&(le=new WeakMap,l.set(Re,le));let ge=le.get(G);ge===void 0&&(ge=n.getUniformBlockIndex(Re,G.name),le.set(G,ge))}function Se(G,Re){let ge=l.get(Re).get(G);c.get(Re)!==ge&&(n.uniformBlockBinding(Re,ge,G.__bindingPointIndex),c.set(Re,ge))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,ne={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,v=null,y=null,A=null,R=null,C=new qe(0,0,0),N=0,E=!1,S=null,z=null,J=null,V=null,$=null,De.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:ye,bindFramebuffer:xe,drawBuffers:Ce,useProgram:Xe,setBlending:L,setMaterial:Ue,setFlipSided:be,setCullFace:Te,setLineWidth:pe,setPolygonOffset:We,setScissorTest:W,activeTexture:w,bindTexture:M,unbindTexture:U,compressedTexImage2D:I,compressedTexImage3D:O,texImage2D:fe,texImage3D:Ee,updateUBOMapping:$e,uniformBlockBinding:Se,texStorage2D:_e,texStorage3D:re,texSubImage2D:F,texSubImage3D:oe,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:Ne,viewport:Ae,reset:ke}}function kS(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return d?new OffscreenCanvas(w,M):js("canvas")}function x(w,M,U){let I=1,O=W(w);if((O.width>U||O.height>U)&&(I=U/Math.max(O.width,O.height)),I<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let F=Math.floor(I*O.width),oe=Math.floor(I*O.height);h===void 0&&(h=g(F,oe));let q=M?g(F,oe):h;return q.width=F,q.height=oe,q.getContext("2d").drawImage(w,0,0,F,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+F+"x"+oe+")."),q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(w,M,U,I,O=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let F=M;if(M===n.RED&&(U===n.FLOAT&&(F=n.R32F),U===n.HALF_FLOAT&&(F=n.R16F),U===n.UNSIGNED_BYTE&&(F=n.R8)),M===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(F=n.R8UI),U===n.UNSIGNED_SHORT&&(F=n.R16UI),U===n.UNSIGNED_INT&&(F=n.R32UI),U===n.BYTE&&(F=n.R8I),U===n.SHORT&&(F=n.R16I),U===n.INT&&(F=n.R32I)),M===n.RG&&(U===n.FLOAT&&(F=n.RG32F),U===n.HALF_FLOAT&&(F=n.RG16F),U===n.UNSIGNED_BYTE&&(F=n.RG8)),M===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(F=n.RG8UI),U===n.UNSIGNED_SHORT&&(F=n.RG16UI),U===n.UNSIGNED_INT&&(F=n.RG32UI),U===n.BYTE&&(F=n.RG8I),U===n.SHORT&&(F=n.RG16I),U===n.INT&&(F=n.RG32I)),M===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(F=n.RGB8UI),U===n.UNSIGNED_SHORT&&(F=n.RGB16UI),U===n.UNSIGNED_INT&&(F=n.RGB32UI),U===n.BYTE&&(F=n.RGB8I),U===n.SHORT&&(F=n.RGB16I),U===n.INT&&(F=n.RGB32I)),M===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(F=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(F=n.RGBA16UI),U===n.UNSIGNED_INT&&(F=n.RGBA32UI),U===n.BYTE&&(F=n.RGBA8I),U===n.SHORT&&(F=n.RGBA16I),U===n.INT&&(F=n.RGBA32I)),M===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(F=n.RGB9_E5),M===n.RGBA){let oe=O?ko:ft.getTransfer(I);U===n.FLOAT&&(F=n.RGBA32F),U===n.HALF_FLOAT&&(F=n.RGBA16F),U===n.UNSIGNED_BYTE&&(F=oe===Et?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(F=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(F=n.RGB5_A1)}return(F===n.R16F||F===n.R32F||F===n.RG16F||F===n.RG32F||F===n.RGBA16F||F===n.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function y(w,M){let U;return w?M===null||M===Lr||M===as?U=n.DEPTH24_STENCIL8:M===kn?U=n.DEPTH32F_STENCIL8:M===so&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Lr||M===as?U=n.DEPTH_COMPONENT24:M===kn?U=n.DEPTH_COMPONENT32F:M===so&&(U=n.DEPTH_COMPONENT16),U}function A(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Xt&&w.minFilter!==qt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){let M=w.target;M.removeEventListener("dispose",R),N(M),M.isVideoTexture&&u.delete(M)}function C(w){let M=w.target;M.removeEventListener("dispose",C),S(M)}function N(w){let M=i.get(w);if(M.__webglInit===void 0)return;let U=w.source,I=f.get(U);if(I){let O=I[M.__cacheKey];O.usedTimes--,O.usedTimes===0&&E(w),Object.keys(I).length===0&&f.delete(U)}i.remove(w)}function E(w){let M=i.get(w);n.deleteTexture(M.__webglTexture);let U=w.source,I=f.get(U);delete I[M.__cacheKey],o.memory.textures--}function S(w){let M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(M.__webglFramebuffer[I]))for(let O=0;O<M.__webglFramebuffer[I].length;O++)n.deleteFramebuffer(M.__webglFramebuffer[I][O]);else n.deleteFramebuffer(M.__webglFramebuffer[I]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[I])}else{if(Array.isArray(M.__webglFramebuffer))for(let I=0;I<M.__webglFramebuffer.length;I++)n.deleteFramebuffer(M.__webglFramebuffer[I]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let I=0;I<M.__webglColorRenderbuffer.length;I++)M.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[I]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let U=w.textures;for(let I=0,O=U.length;I<O;I++){let F=i.get(U[I]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),o.memory.textures--),i.remove(U[I])}i.remove(w)}let z=0;function J(){z=0}function V(){let w=z;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),z+=1,w}function $(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ee(w,M){let U=i.get(w);if(w.isVideoTexture&&pe(w),w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){let I=w.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,w,M);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+M)}function Q(w,M){let U=i.get(w);if(w.version>0&&U.__version!==w.version){j(U,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+M)}function he(w,M){let U=i.get(w);if(w.version>0&&U.__version!==w.version){j(U,w,M);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+M)}function te(w,M){let U=i.get(w);if(w.version>0&&U.__version!==w.version){ie(U,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+M)}let de={[hi]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[Ks]:n.MIRRORED_REPEAT},ne={[Xt]:n.NEAREST,[cl]:n.NEAREST_MIPMAP_NEAREST,[os]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[ro]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},me={[Dm]:n.NEVER,[Bm]:n.ALWAYS,[Lm]:n.LESS,[Zh]:n.LEQUAL,[Nm]:n.EQUAL,[Fm]:n.GEQUAL,[Um]:n.GREATER,[Om]:n.NOTEQUAL};function Me(w,M){if(M.type===kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qt||M.magFilter===ro||M.magFilter===os||M.magFilter===gi||M.minFilter===qt||M.minFilter===ro||M.minFilter===os||M.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,de[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,de[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,de[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ne[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ne[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xt||M.minFilter!==os&&M.minFilter!==gi||M.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function De(w,M){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));let I=M.source,O=f.get(I);O===void 0&&(O={},f.set(I,O));let F=$(M);if(F!==w.__cacheKey){O[F]===void 0&&(O[F]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),O[F].usedTimes++;let oe=O[w.__cacheKey];oe!==void 0&&(O[w.__cacheKey].usedTimes--,oe.usedTimes===0&&E(M)),w.__cacheKey=F,w.__webglTexture=O[F].texture}return U}function j(w,M,U){let I=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(I=n.TEXTURE_3D);let O=De(w,M),F=M.source;t.bindTexture(I,w.__webglTexture,n.TEXTURE0+U);let oe=i.get(F);if(F.version!==oe.__version||O===!0){t.activeTexture(n.TEXTURE0+U);let q=ft.getPrimaries(ft.workingColorSpace),Z=M.colorSpace===xi?null:ft.getPrimaries(M.colorSpace),_e=M.colorSpace===xi||q===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let re=x(M.image,!1,r.maxTextureSize);re=We(M,re);let fe=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),Ne=v(M.internalFormat,fe,Ee,M.colorSpace,M.isVideoTexture);Me(I,M);let Ae,$e=M.mipmaps,Se=M.isVideoTexture!==!0,ke=oe.__version===void 0||O===!0,G=F.dataReady,Re=A(M,re);if(M.isDepthTexture)Ne=y(M.format===Jr,M.type),ke&&(Se?t.texStorage2D(n.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,fe,Ee,null));else if(M.isDataTexture)if($e.length>0){Se&&ke&&t.texStorage2D(n.TEXTURE_2D,Re,Ne,$e[0].width,$e[0].height);for(let le=0,ge=$e.length;le<ge;le++)Ae=$e[le],Se?G&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ae.width,Ae.height,fe,Ee,Ae.data):t.texImage2D(n.TEXTURE_2D,le,Ne,Ae.width,Ae.height,0,fe,Ee,Ae.data);M.generateMipmaps=!1}else Se?(ke&&t.texStorage2D(n.TEXTURE_2D,Re,Ne,re.width,re.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,fe,Ee,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,fe,Ee,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Se&&ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ne,$e[0].width,$e[0].height,re.depth);for(let le=0,ge=$e.length;le<ge;le++)if(Ae=$e[le],M.format!==on)if(fe!==null)if(Se){if(G)if(M.layerUpdates.size>0){let Be=nf(Ae.width,Ae.height,M.format,M.type);for(let Oe of M.layerUpdates){let et=Ae.data.subarray(Oe*Be/Ae.data.BYTES_PER_ELEMENT,(Oe+1)*Be/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,Oe,Ae.width,Ae.height,1,fe,et)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ae.width,Ae.height,re.depth,fe,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Ne,Ae.width,Ae.height,re.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ae.width,Ae.height,re.depth,fe,Ee,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Ne,Ae.width,Ae.height,re.depth,0,fe,Ee,Ae.data)}else{Se&&ke&&t.texStorage2D(n.TEXTURE_2D,Re,Ne,$e[0].width,$e[0].height);for(let le=0,ge=$e.length;le<ge;le++)Ae=$e[le],M.format!==on?fe!==null?Se?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ae.width,Ae.height,fe,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Ne,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?G&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ae.width,Ae.height,fe,Ee,Ae.data):t.texImage2D(n.TEXTURE_2D,le,Ne,Ae.width,Ae.height,0,fe,Ee,Ae.data)}else if(M.isDataArrayTexture)if(Se){if(ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ne,re.width,re.height,re.depth),G)if(M.layerUpdates.size>0){let le=nf(re.width,re.height,M.format,M.type);for(let ge of M.layerUpdates){let Be=re.data.subarray(ge*le/re.data.BYTES_PER_ELEMENT,(ge+1)*le/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,re.width,re.height,1,fe,Ee,Be)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Ee,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,fe,Ee,re.data);else if(M.isData3DTexture)Se?(ke&&t.texStorage3D(n.TEXTURE_3D,Re,Ne,re.width,re.height,re.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Ee,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,fe,Ee,re.data);else if(M.isFramebufferTexture){if(ke)if(Se)t.texStorage2D(n.TEXTURE_2D,Re,Ne,re.width,re.height);else{let le=re.width,ge=re.height;for(let Be=0;Be<Re;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ne,le,ge,0,fe,Ee,null),le>>=1,ge>>=1}}else if($e.length>0){if(Se&&ke){let le=W($e[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ne,le.width,le.height)}for(let le=0,ge=$e.length;le<ge;le++)Ae=$e[le],Se?G&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,fe,Ee,Ae):t.texImage2D(n.TEXTURE_2D,le,Ne,fe,Ee,Ae);M.generateMipmaps=!1}else if(Se){if(ke){let le=W(re);t.texStorage2D(n.TEXTURE_2D,Re,Ne,le.width,le.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ee,re)}else t.texImage2D(n.TEXTURE_2D,0,Ne,fe,Ee,re);m(M)&&p(I),oe.__version=F.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ie(w,M,U){if(M.image.length!==6)return;let I=De(w,M),O=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+U);let F=i.get(O);if(O.version!==F.__version||I===!0){t.activeTexture(n.TEXTURE0+U);let oe=ft.getPrimaries(ft.workingColorSpace),q=M.colorSpace===xi?null:ft.getPrimaries(M.colorSpace),Z=M.colorSpace===xi||oe===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let _e=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let ge=0;ge<6;ge++)!_e&&!re?fe[ge]=x(M.image[ge],!0,r.maxCubemapSize):fe[ge]=re?M.image[ge].image:M.image[ge],fe[ge]=We(M,fe[ge]);let Ee=fe[0],Ne=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type),$e=v(M.internalFormat,Ne,Ae,M.colorSpace),Se=M.isVideoTexture!==!0,ke=F.__version===void 0||I===!0,G=O.dataReady,Re=A(M,Ee);Me(n.TEXTURE_CUBE_MAP,M);let le;if(_e){Se&&ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,$e,Ee.width,Ee.height);for(let ge=0;ge<6;ge++){le=fe[ge].mipmaps;for(let Be=0;Be<le.length;Be++){let Oe=le[Be];M.format!==on?Ne!==null?Se?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,0,0,Oe.width,Oe.height,Ne,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,$e,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,0,0,Oe.width,Oe.height,Ne,Ae,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,$e,Oe.width,Oe.height,0,Ne,Ae,Oe.data)}}}else{if(le=M.mipmaps,Se&&ke){le.length>0&&Re++;let ge=W(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,$e,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(re){Se?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,fe[ge].width,fe[ge].height,Ne,Ae,fe[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,$e,fe[ge].width,fe[ge].height,0,Ne,Ae,fe[ge].data);for(let Be=0;Be<le.length;Be++){let et=le[Be].image[ge].image;Se?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,0,0,et.width,et.height,Ne,Ae,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,$e,et.width,et.height,0,Ne,Ae,et.data)}}else{Se?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ne,Ae,fe[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,$e,Ne,Ae,fe[ge]);for(let Be=0;Be<le.length;Be++){let Oe=le[Be];Se?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,0,0,Ne,Ae,Oe.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,$e,Ne,Ae,Oe.image[ge])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),F.__version=O.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function H(w,M,U,I,O,F){let oe=s.convert(U.format,U.colorSpace),q=s.convert(U.type),Z=v(U.internalFormat,oe,q,U.colorSpace),_e=i.get(M),re=i.get(U);if(re.__renderTarget=M,!_e.__hasExternalTextures){let fe=Math.max(1,M.width>>F),Ee=Math.max(1,M.height>>F);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,F,Z,fe,Ee,M.depth,0,oe,q,null):t.texImage2D(O,F,Z,fe,Ee,0,oe,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Te(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,O,re.__webglTexture,0,be(M)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,O,re.__webglTexture,F),t.bindFramebuffer(n.FRAMEBUFFER,null)}function X(w,M,U){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){let I=M.depthTexture,O=I&&I.isDepthTexture?I.type:null,F=y(M.stencilBuffer,O),oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=be(M);Te(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,F,M.width,M.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,F,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,F,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,w)}else{let I=M.textures;for(let O=0;O<I.length;O++){let F=I[O],oe=s.convert(F.format,F.colorSpace),q=s.convert(F.type),Z=v(F.internalFormat,oe,q,F.colorSpace),_e=be(M);U&&Te(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,Z,M.width,M.height):Te(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=i.get(M.depthTexture);I.__renderTarget=M,(!I.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let O=I.__webglTexture,F=be(M);if(M.depthTexture.format===Zr)Te(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(M.depthTexture.format===Jr)Te(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function xe(w){let M=i.get(w),U=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let I=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),I){let O=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,I.removeEventListener("dispose",O)};I.addEventListener("dispose",O),M.__depthDisposeCallback=O}M.__boundDepthTexture=I}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ye(M.__webglFramebuffer,w)}else if(U){M.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[I]),M.__webglDepthbuffer[I]===void 0)M.__webglDepthbuffer[I]=n.createRenderbuffer(),X(M.__webglDepthbuffer[I],w,!1);else{let O=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=M.__webglDepthbuffer[I];n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,F)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),X(M.__webglDepthbuffer,w,!1);else{let I=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,O)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(w,M,U){let I=i.get(w);M!==void 0&&H(I.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&xe(w)}function Xe(w){let M=w.texture,U=i.get(w),I=i.get(M);w.addEventListener("dispose",C);let O=w.textures,F=w.isWebGLCubeRenderTarget===!0,oe=O.length>1;if(oe||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=M.version,o.memory.textures++),F){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let Z=0;Z<M.mipmaps.length;Z++)U.__webglFramebuffer[q][Z]=n.createFramebuffer()}else U.__webglFramebuffer[q]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)U.__webglFramebuffer[q]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(oe)for(let q=0,Z=O.length;q<Z;q++){let _e=i.get(O[q]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Te(w)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<O.length;q++){let Z=O[q];U.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[q]);let _e=s.convert(Z.format,Z.colorSpace),re=s.convert(Z.type),fe=v(Z.internalFormat,_e,re,Z.colorSpace,w.isXRRenderTarget===!0),Ee=be(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,fe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,U.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),X(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),Me(n.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)H(U.__webglFramebuffer[q][Z],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else H(U.__webglFramebuffer[q],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let q=0,Z=O.length;q<Z;q++){let _e=O[q],re=i.get(_e);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),Me(n.TEXTURE_2D,_e),H(U.__webglFramebuffer,w,_e,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D,0),m(_e)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(q=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,I.__webglTexture),Me(q,M),M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)H(U.__webglFramebuffer[Z],w,M,n.COLOR_ATTACHMENT0,q,Z);else H(U.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,q,0);m(M)&&p(q),t.unbindTexture()}w.depthBuffer&&xe(w)}function Pe(w){let M=w.textures;for(let U=0,I=M.length;U<I;U++){let O=M[U];if(m(O)){let F=b(w),oe=i.get(O).__webglTexture;t.bindTexture(F,oe),p(F),t.unbindTexture()}}}let ce=[],L=[];function Ue(w){if(w.samples>0){if(Te(w)===!1){let M=w.textures,U=w.width,I=w.height,O=n.COLOR_BUFFER_BIT,F=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(w),q=M.length>1;if(q)for(let Z=0;Z<M.length;Z++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Z=0;Z<M.length;Z++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Z]);let _e=i.get(M[Z]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,U,I,0,0,U,I,O,n.NEAREST),c===!0&&(ce.length=0,L.length=0,ce.push(n.COLOR_ATTACHMENT0+Z),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ce.push(F),L.push(F),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let Z=0;Z<M.length;Z++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Z]);let _e=i.get(M[Z]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function be(w){return Math.min(r.maxSamples,w.samples)}function Te(w){let M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pe(w){let M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function We(w,M){let U=w.colorSpace,I=w.format,O=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==fn&&U!==xi&&(ft.getTransfer(U)===Et?(I!==on||O!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}function W(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=te,this.rebindTextures=Ce,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Te}function HS(n,e){function t(i,r=xi){let s,o=ft.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return n.BYTE;if(i===zh)return n.SHORT;if(i===so)return n.UNSIGNED_SHORT;if(i===ll)return n.INT;if(i===Lr)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===lr)return n.HALF_FLOAT;if(i===Hh)return n.ALPHA;if(i===Vh)return n.RGB;if(i===on)return n.RGBA;if(i===Gh)return n.LUMINANCE;if(i===Wh)return n.LUMINANCE_ALPHA;if(i===Zr)return n.DEPTH_COMPONENT;if(i===Jr)return n.DEPTH_STENCIL;if(i===fl)return n.RED;if(i===dl)return n.RED_INTEGER;if(i===Xh)return n.RG;if(i===pl)return n.RG_INTEGER;if(i===ml)return n.RGBA_INTEGER;if(i===va||i===ba||i===Ma||i===Sa)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===xl||i===yl||i===_l)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===bl||i===Ml)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vl||i===bl)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ml)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sl||i===El||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Dl||i===Ll||i===Nl||i===Ul||i===Ol)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===El)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Il)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===Fl||i===Bl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ea)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qh||i===zl||i===kl||i===Hl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var VS={type:"move"},Ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VS)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},GS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WS=`
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

}`,gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Kt({vertexShader:GS,fragmentShader:WS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xf=class extends Ai{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,x=new gf,m=t.getContextAttributes(),p=null,b=null,v=[],y=[],A=new Ve,R=null,C=new Wt;C.viewport=new at;let N=new Wt;N.viewport=new at;let E=[C,N],S=new Kc,z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=v[j];return ie===void 0&&(ie=new Ra,v[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=v[j];return ie===void 0&&(ie=new Ra,v[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=v[j];return ie===void 0&&(ie=new Ra,v[j]=ie),ie.getHandSpace()};function V(j){let ie=y.indexOf(j.inputSource);if(ie===-1)return;let H=v[ie];H!==void 0&&(H.update(j.inputSource,j.frame,l||o),H.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ee);for(let j=0;j<v.length;j++){let ie=y[j];ie!==null&&(y[j]=null,v[j].disconnect(ie))}z=null,J=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,b=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let H=null,X=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=m.stencil?Jr:Zr,X=m.stencil?as:Lr);let xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new dn(f.textureWidth,f.textureHeight,{format:on,type:Jn,depthTexture:new na(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{let H={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new dn(d.framebufferWidth,d.framebufferHeight,{format:on,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(j){for(let ie=0;ie<j.removed.length;ie++){let H=j.removed[ie],X=y.indexOf(H);X>=0&&(y[X]=null,v[X].disconnect(H))}for(let ie=0;ie<j.added.length;ie++){let H=j.added[ie],X=y.indexOf(H);if(X===-1){for(let xe=0;xe<v.length;xe++)if(xe>=y.length){y.push(H),X=xe;break}else if(y[xe]===null){y[xe]=H,X=xe;break}if(X===-1)break}let ye=v[X];ye&&ye.connect(H)}}let Q=new P,he=new P;function te(j,ie,H){Q.setFromMatrixPosition(ie.matrixWorld),he.setFromMatrixPosition(H.matrixWorld);let X=Q.distanceTo(he),ye=ie.projectionMatrix.elements,xe=H.projectionMatrix.elements,Ce=ye[14]/(ye[10]-1),Xe=ye[14]/(ye[10]+1),Pe=(ye[9]+1)/ye[5],ce=(ye[9]-1)/ye[5],L=(ye[8]-1)/ye[0],Ue=(xe[8]+1)/xe[0],be=Ce*L,Te=Ce*Ue,pe=X/(-L+Ue),We=pe*-L;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(We),j.translateZ(pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let W=Ce+pe,w=Xe+pe,M=be-We,U=Te+(X-We),I=Pe*Xe/w*W,O=ce*Xe/w*W;j.projectionMatrix.makePerspective(M,U,I,O,W,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function de(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,H=j.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(H=x.depthFar)),S.near=N.near=C.near=ie,S.far=N.far=C.far=H,(z!==S.near||J!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),z=S.near,J=S.far),C.layers.mask=j.layers.mask|2,N.layers.mask=j.layers.mask|4,S.layers.mask=C.layers.mask|N.layers.mask;let X=j.parent,ye=S.cameras;de(S,X);for(let xe=0;xe<ye.length;xe++)de(ye[xe],X);ye.length===2?te(S,C,N):S.projectionMatrix.copy(C.projectionMatrix),ne(j,S,X)};function ne(j,ie,H){H===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(H.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ts*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let me=null;function Me(j,ie){if(u=ie.getViewerPose(l||o),g=ie,u!==null){let H=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let X=!1;H.length!==S.cameras.length&&(S.cameras.length=0,X=!0);for(let xe=0;xe<H.length;xe++){let Ce=H[xe],Xe=null;if(d!==null)Xe=d.getViewport(Ce);else{let ce=h.getViewSubImage(f,Ce);Xe=ce.viewport,xe===0&&(e.setRenderTargetTextures(b,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(b))}let Pe=E[xe];Pe===void 0&&(Pe=new Wt,Pe.layers.enable(xe),Pe.viewport=new at,E[xe]=Pe),Pe.matrix.fromArray(Ce.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ce.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),xe===0&&(S.matrix.copy(Pe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),X===!0&&S.cameras.push(Pe)}let ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){let xe=h.getDepthInformation(H[0]);xe&&xe.isValid&&xe.texture&&x.init(e,xe,r.renderState)}}for(let H=0;H<v.length;H++){let X=y[H],ye=v[H];X!==null&&ye!==void 0&&ye.update(X,ie,l||o)}me&&me(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let De=new gg;De.setAnimationLoop(Me),this.setAnimationLoop=function(j){me=j},this.dispose=function(){}}},fs=new fi,XS=new tt;function qS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),v=b.envMap,y=b.envMapRotation;v&&(m.envMap.value=v,fs.copy(y),fs.x*=-1,fs.y*=-1,fs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(XS.makeRotationFromEuler(fs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YS(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){let y=v.program;i.uniformBlockBinding(b,y)}function l(b,v){let y=r[b.id];y===void 0&&(g(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(b,A);let R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function u(b){let v=h();b.__bindingPointIndex=v;let y=n.createBuffer(),A=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=r[b.id],y=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,C=y.length;R<C;R++){let N=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,S=N.length;E<S;E++){let z=N[E];if(d(z,R,E,A)===!0){let J=z.__offset,V=Array.isArray(z.value)?z.value:[z.value],$=0;for(let ee=0;ee<V.length;ee++){let Q=V[ee],he=x(Q);typeof Q=="number"||typeof Q=="boolean"?(z.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,J+$,z.__data)):Q.isMatrix3?(z.__data[0]=Q.elements[0],z.__data[1]=Q.elements[1],z.__data[2]=Q.elements[2],z.__data[3]=0,z.__data[4]=Q.elements[3],z.__data[5]=Q.elements[4],z.__data[6]=Q.elements[5],z.__data[7]=0,z.__data[8]=Q.elements[6],z.__data[9]=Q.elements[7],z.__data[10]=Q.elements[8],z.__data[11]=0):(Q.toArray(z.__data,$),$+=he.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,v,y,A){let R=b.value,C=v+"_"+y;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{let N=A[C];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[C]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(b){let v=b.uniforms,y=0,A=16;for(let C=0,N=v.length;C<N;C++){let E=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,z=E.length;S<z;S++){let J=E[S],V=Array.isArray(J.value)?J.value:[J.value];for(let $=0,ee=V.length;$<ee;$++){let Q=V[$],he=x(Q),te=y%A,de=te%he.boundary,ne=te+de;y+=de,ne!==0&&A-ne<he.storage&&(y+=A-ne),J.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=y,y+=he.storage}}}let R=y%A;return R>0&&(y+=A-R),b.__size=y,b.__cache={},this}function x(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){let v=b.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Xl=class{constructor(e={}){let{canvas:t=zm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,b=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=mi,this.toneMappingExposure=1;let y=this,A=!1,R=0,C=0,N=null,E=-1,S=null,z=new at,J=new at,V=null,$=new qe(0),ee=0,Q=t.width,he=t.height,te=1,de=null,ne=null,me=new at(0,0,Q,he),Me=new at(0,0,Q,he),De=!1,j=new to,ie=!1,H=!1;this.transmissionResolutionScale=1;let X=new tt,ye=new tt,xe=new P,Ce=new at,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function ce(){return N===null?te:1}let L=i;function Ue(T,Y){return t.getContext(T,Y)}try{let T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),L===null){let Y="webgl2";if(L=Ue(Y,T),L===null)throw Ue(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,Te,pe,We,W,w,M,U,I,O,F,oe,q,Z,_e,re,fe,Ee,Ne,Ae,$e,Se,ke,G;function Re(){be=new uM(L),be.init(),Se=new HS(L,be),Te=new rM(L,be,e,Se),pe=new zS(L,be),Te.reverseDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),We=new dM(L),W=new TS,w=new kS(L,be,pe,W,Te,Se,We),M=new oM(y),U=new lM(y),I=new v_(L),ke=new nM(L,I),O=new hM(L,I,We,ke),F=new mM(L,O,I,We),Ne=new pM(L,Te,w),re=new sM(W),oe=new wS(y,M,U,be,Te,ke,re),q=new qS(y,W),Z=new RS,_e=new NS(be),Ee=new tM(y,M,U,pe,F,d,c),fe=new FS(y,F,Te),G=new YS(L,We,Te,pe),Ae=new iM(L,be,We),$e=new fM(L,be,We),We.programs=oe.programs,y.capabilities=Te,y.extensions=be,y.properties=W,y.renderLists=Z,y.shadowMap=fe,y.state=pe,y.info=We}Re();let le=new xf(y,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(Q,he,!1))},this.getSize=function(T){return T.set(Q,he)},this.setSize=function(T,Y,se=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,he=Y,t.width=Math.floor(T*te),t.height=Math.floor(Y*te),se===!0&&(t.style.width=T+"px",t.style.height=Y+"px"),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(Q*te,he*te).floor()},this.setDrawingBufferSize=function(T,Y,se){Q=T,he=Y,te=se,t.width=Math.floor(T*se),t.height=Math.floor(Y*se),this.setViewport(0,0,T,Y)},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,Y,se,ae){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,Y,se,ae),pe.viewport(z.copy(me).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,Y,se,ae){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,Y,se,ae),pe.scissor(J.copy(Me).multiplyScalar(te).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){pe.setScissorTest(De=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){ne=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,Y=!0,se=!0){let ae=0;if(T){let K=!1;if(N!==null){let we=N.texture.format;K=we===ml||we===pl||we===dl}if(K){let we=N.texture.type,ze=we===Jn||we===Lr||we===so||we===as||we===ul||we===hl,Ge=Ee.getClearColor(),He=Ee.getClearAlpha(),Je=Ge.r,it=Ge.g,Ke=Ge.b;ze?(g[0]=Je,g[1]=it,g[2]=Ke,g[3]=He,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Je,x[1]=it,x[2]=Ke,x[3]=He,L.clearBufferiv(L.COLOR,0,x))}else ae|=L.COLOR_BUFFER_BIT}Y&&(ae|=L.DEPTH_BUFFER_BIT),se&&(ae|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Ee.dispose(),Z.dispose(),_e.dispose(),W.dispose(),M.dispose(),U.dispose(),F.dispose(),ke.dispose(),G.dispose(),oe.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ze),le.removeEventListener("sessionend",vn),dt.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=We.autoReset,Y=fe.enabled,se=fe.autoUpdate,ae=fe.needsUpdate,K=fe.type;Re(),We.autoReset=T,fe.enabled=Y,fe.autoUpdate=se,fe.needsUpdate=ae,fe.type=K}function Oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function et(T){let Y=T.target;Y.removeEventListener("dispose",et),ut(Y)}function ut(T){Pt(T),W.remove(T)}function Pt(T){let Y=W.get(T).programs;Y!==void 0&&(Y.forEach(function(se){oe.releaseProgram(se)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,se,ae,K,we){Y===null&&(Y=Xe);let ze=K.isMesh&&K.matrixWorld.determinant()<0,Ge=Cu(T,Y,se,ae,K);pe.setMaterial(ae,ze);let He=se.index,Je=1;if(ae.wireframe===!0){if(He=O.getWireframeAttribute(se),He===void 0)return;Je=2}let it=se.drawRange,Ke=se.attributes.position,ct=it.start*Je,mt=(it.start+it.count)*Je;we!==null&&(ct=Math.max(ct,we.start*Je),mt=Math.min(mt,(we.start+we.count)*Je)),He!==null?(ct=Math.max(ct,0),mt=Math.min(mt,He.count)):Ke!=null&&(ct=Math.max(ct,0),mt=Math.min(mt,Ke.count));let zt=mt-ct;if(zt<0||zt===1/0)return;ke.setup(K,ae,Ge,se,He);let Lt,pt=Ae;if(He!==null&&(Lt=I.get(He),pt=$e,pt.setIndex(Lt)),K.isMesh)ae.wireframe===!0?(pe.setLineWidth(ae.wireframeLinewidth*ce()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(K.isLine){let je=ae.linewidth;je===void 0&&(je=1),pe.setLineWidth(je*ce()),K.isLineSegments?pt.setMode(L.LINES):K.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else K.isPoints?pt.setMode(L.POINTS):K.isSprite&&pt.setMode(L.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)pt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))pt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let je=K._multiDrawStarts,Vt=K._multiDrawCounts,ht=K._multiDrawCount,cn=He?I.get(He).bytesPerElement:1,Gn=W.get(ae).currentProgram.getUniforms();for(let In=0;In<ht;In++)Gn.setValue(L,"_gl_DrawID",In),pt.render(je[In]/cn,Vt[In])}else if(K.isInstancedMesh)pt.renderInstances(ct,zt,K.count);else if(se.isInstancedBufferGeometry){let je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Vt=Math.min(se.instanceCount,je);pt.renderInstances(ct,zt,Vt)}else pt.render(ct,zt)};function Ye(T,Y,se){T.transparent===!0&&T.side===bt&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Vn(T,Y,se),T.side=Bn,T.needsUpdate=!0,Vn(T,Y,se),T.side=bt):Vn(T,Y,se)}this.compile=function(T,Y,se=null){se===null&&(se=T),p=_e.get(se),p.init(Y),v.push(p),se.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),T!==se&&T.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();let ae=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let we=K.material;if(we)if(Array.isArray(we))for(let ze=0;ze<we.length;ze++){let Ge=we[ze];Ye(Ge,se,K),ae.add(Ge)}else Ye(we,se,K),ae.add(we)}),v.pop(),p=null,ae},this.compileAsync=function(T,Y,se=null){let ae=this.compile(T,Y,se);return new Promise(K=>{function we(){if(ae.forEach(function(ze){W.get(ze).currentProgram.isReady()&&ae.delete(ze)}),ae.size===0){K(T);return}setTimeout(we,10)}be.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Rt=null;function ve(T){Rt&&Rt(T)}function Ze(){dt.stop()}function vn(){dt.start()}let dt=new gg;dt.setAnimationLoop(ve),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(T){Rt=T,le.setAnimationLoop(T),T===null?dt.stop():dt.start()},le.addEventListener("sessionstart",Ze),le.addEventListener("sessionend",vn),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(Y),Y=le.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,Y,N),p=_e.get(T,v.length),p.init(Y),v.push(p),ye.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),j.setFromProjectionMatrix(ye),H=this.localClippingEnabled,ie=re.init(this.clippingPlanes,H),m=Z.get(T,b.length),m.init(),b.push(m),le.enabled===!0&&le.isPresenting===!0){let we=y.xr.getDepthSensingMesh();we!==null&&Bt(we,Y,-1/0,y.sortObjects)}Bt(T,Y,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(de,ne),Pe=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Pe&&Ee.addToRenderList(m,T),this.info.render.frame++,ie===!0&&re.beginShadows();let se=p.state.shadowsArray;fe.render(se,T,Y),ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let ae=m.opaque,K=m.transmissive;if(p.setupLights(),Y.isArrayCamera){let we=Y.cameras;if(K.length>0)for(let ze=0,Ge=we.length;ze<Ge;ze++){let He=we[ze];bn(ae,K,T,He)}Pe&&Ee.render(T);for(let ze=0,Ge=we.length;ze<Ge;ze++){let He=we[ze];an(m,T,He,He.viewport)}}else K.length>0&&bn(ae,K,T,Y),Pe&&Ee.render(T),an(m,T,Y);N!==null&&C===0&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(y,T,Y),ke.resetDefaultState(),E=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],ie===!0&&re.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Bt(T,Y,se,ae){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)se=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){ae&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);let ze=F.update(T),Ge=T.material;Ge.visible&&m.push(T,ze,Ge,se,Ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){let ze=F.update(T),Ge=T.material;if(ae&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ce.copy(ze.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(ye)),Array.isArray(Ge)){let He=ze.groups;for(let Je=0,it=He.length;Je<it;Je++){let Ke=He[Je],ct=Ge[Ke.materialIndex];ct&&ct.visible&&m.push(T,ze,ct,se,Ce.z,Ke)}}else Ge.visible&&m.push(T,ze,Ge,se,Ce.z,null)}}let we=T.children;for(let ze=0,Ge=we.length;ze<Ge;ze++)Bt(we[ze],Y,se,ae)}function an(T,Y,se,ae){let K=T.opaque,we=T.transmissive,ze=T.transparent;p.setupLightsView(se),ie===!0&&re.setGlobalState(y.clippingPlanes,se),ae&&pe.viewport(z.copy(ae)),K.length>0&&bi(K,Y,se),we.length>0&&bi(we,Y,se),ze.length>0&&bi(ze,Y,se),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function bn(T,Y,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ae.id]===void 0&&(p.state.transmissionRenderTarget[ae.id]=new dn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?lr:Jn,minFilter:gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let we=p.state.transmissionRenderTarget[ae.id],ze=ae.viewport||z;we.setSize(ze.z*y.transmissionResolutionScale,ze.w*y.transmissionResolutionScale);let Ge=y.getRenderTarget();y.setRenderTarget(we),y.getClearColor($),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),Pe&&Ee.render(se);let He=y.toneMapping;y.toneMapping=mi;let Je=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),p.setupLightsView(ae),ie===!0&&re.setGlobalState(y.clippingPlanes,ae),bi(T,se,ae),w.updateMultisampleRenderTarget(we),w.updateRenderTargetMipmap(we),be.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ke=0,ct=Y.length;Ke<ct;Ke++){let mt=Y[Ke],zt=mt.object,Lt=mt.geometry,pt=mt.material,je=mt.group;if(pt.side===bt&&zt.layers.test(ae.layers)){let Vt=pt.side;pt.side=pn,pt.needsUpdate=!0,Wi(zt,se,ae,Lt,pt,je),pt.side=Vt,pt.needsUpdate=!0,it=!0}}it===!0&&(w.updateMultisampleRenderTarget(we),w.updateRenderTargetMipmap(we))}y.setRenderTarget(Ge),y.setClearColor($,ee),Je!==void 0&&(ae.viewport=Je),y.toneMapping=He}function bi(T,Y,se){let ae=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,we=T.length;K<we;K++){let ze=T[K],Ge=ze.object,He=ze.geometry,Je=ae===null?ze.material:ae,it=ze.group;Ge.layers.test(se.layers)&&Wi(Ge,Y,se,He,Je,it)}}function Wi(T,Y,se,ae,K,we){T.onBeforeRender(y,Y,se,ae,K,we),T.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(y,Y,se,ae,T,we),K.transparent===!0&&K.side===bt&&K.forceSinglePass===!1?(K.side=pn,K.needsUpdate=!0,y.renderBufferDirect(se,Y,ae,K,T,we),K.side=Bn,K.needsUpdate=!0,y.renderBufferDirect(se,Y,ae,K,T,we),K.side=bt):y.renderBufferDirect(se,Y,ae,K,T,we),T.onAfterRender(y,Y,se,ae,K,we)}function Vn(T,Y,se){Y.isScene!==!0&&(Y=Xe);let ae=W.get(T),K=p.state.lights,we=p.state.shadowsArray,ze=K.state.version,Ge=oe.getParameters(T,K.state,we,Y,se),He=oe.getProgramCacheKey(Ge),Je=ae.programs;ae.environment=T.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(T.isMeshStandardMaterial?U:M).get(T.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,Je===void 0&&(T.addEventListener("dispose",et),Je=new Map,ae.programs=Je);let it=Je.get(He);if(it!==void 0){if(ae.currentProgram===it&&ae.lightsStateVersion===ze)return Xa(T,Ge),it}else Ge.uniforms=oe.getUniforms(T),T.onBeforeCompile(Ge,y),it=oe.acquireProgram(Ge,He),Je.set(He,it),ae.uniforms=Ge.uniforms;let Ke=ae.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=re.uniform),Xa(T,Ge),ae.needsLights=Es(T),ae.lightsStateVersion=ze,ae.needsLights&&(Ke.ambientLightColor.value=K.state.ambient,Ke.lightProbe.value=K.state.probe,Ke.directionalLights.value=K.state.directional,Ke.directionalLightShadows.value=K.state.directionalShadow,Ke.spotLights.value=K.state.spot,Ke.spotLightShadows.value=K.state.spotShadow,Ke.rectAreaLights.value=K.state.rectArea,Ke.ltc_1.value=K.state.rectAreaLTC1,Ke.ltc_2.value=K.state.rectAreaLTC2,Ke.pointLights.value=K.state.point,Ke.pointLightShadows.value=K.state.pointShadow,Ke.hemisphereLights.value=K.state.hemi,Ke.directionalShadowMap.value=K.state.directionalShadowMap,Ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ke.spotShadowMap.value=K.state.spotShadowMap,Ke.spotLightMatrix.value=K.state.spotLightMatrix,Ke.spotLightMap.value=K.state.spotLightMap,Ke.pointShadowMap.value=K.state.pointShadowMap,Ke.pointShadowMatrix.value=K.state.pointShadowMatrix),ae.currentProgram=it,ae.uniformsList=null,it}function Xi(T){if(T.uniformsList===null){let Y=T.currentProgram.getUniforms();T.uniformsList=lo.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function Xa(T,Y){let se=W.get(T);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Cu(T,Y,se,ae,K){Y.isScene!==!0&&(Y=Xe),w.resetTextureUnits();let we=Y.fog,ze=ae.isMeshStandardMaterial?Y.environment:null,Ge=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fn,He=(ae.isMeshStandardMaterial?U:M).get(ae.envMap||ze),Je=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ke=!!se.morphAttributes.position,ct=!!se.morphAttributes.normal,mt=!!se.morphAttributes.color,zt=mi;ae.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(zt=y.toneMapping);let Lt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,pt=Lt!==void 0?Lt.length:0,je=W.get(ae),Vt=p.state.lights;if(ie===!0&&(H===!0||T!==S)){let Yt=T===S&&ae.id===E;re.setState(ae,T,Yt)}let ht=!1;ae.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Vt.state.version||je.outputColorSpace!==Ge||K.isBatchedMesh&&je.batching===!1||!K.isBatchedMesh&&je.batching===!0||K.isBatchedMesh&&je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&je.instancingMorph===!1&&K.morphTexture!==null||je.envMap!==He||ae.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==re.numPlanes||je.numIntersection!==re.numIntersection)||je.vertexAlphas!==Je||je.vertexTangents!==it||je.morphTargets!==Ke||je.morphNormals!==ct||je.morphColors!==mt||je.toneMapping!==zt||je.morphTargetsCount!==pt)&&(ht=!0):(ht=!0,je.__version=ae.version);let cn=je.currentProgram;ht===!0&&(cn=Vn(ae,Y,K));let Gn=!1,In=!1,gr=!1,Mt=cn.getUniforms(),On=je.uniforms;if(pe.useProgram(cn.program)&&(Gn=!0,In=!0,gr=!0),ae.id!==E&&(E=ae.id,In=!0),Gn||S!==T){pe.buffers.depth.getReversed()?(X.copy(T.projectionMatrix),Hm(X),Vm(X),Mt.setValue(L,"projectionMatrix",X)):Mt.setValue(L,"projectionMatrix",T.projectionMatrix),Mt.setValue(L,"viewMatrix",T.matrixWorldInverse);let ln=Mt.map.cameraPosition;ln!==void 0&&ln.setValue(L,xe.setFromMatrixPosition(T.matrixWorld)),Te.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,In=!0,gr=!0)}if(K.isSkinnedMesh){Mt.setOptional(L,K,"bindMatrix"),Mt.setOptional(L,K,"bindMatrixInverse");let Yt=K.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Mt.setValue(L,"boneTexture",Yt.boneTexture,w))}K.isBatchedMesh&&(Mt.setOptional(L,K,"batchingTexture"),Mt.setValue(L,"batchingTexture",K._matricesTexture,w),Mt.setOptional(L,K,"batchingIdTexture"),Mt.setValue(L,"batchingIdTexture",K._indirectTexture,w),Mt.setOptional(L,K,"batchingColorTexture"),K._colorsTexture!==null&&Mt.setValue(L,"batchingColorTexture",K._colorsTexture,w));let Mn=se.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Ne.update(K,se,cn),(In||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,Mt.setValue(L,"receiveShadow",K.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(On.envMap.value=He,On.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(On.envMapIntensity.value=Y.environmentIntensity),In&&(Mt.setValue(L,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&Pu(On,gr),we&&ae.fog===!0&&q.refreshFogUniforms(On,we),q.refreshMaterialUniforms(On,ae,te,he,p.state.transmissionRenderTarget[T.id]),lo.upload(L,Xi(je),On,w)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(lo.upload(L,Xi(je),On,w),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Mt.setValue(L,"center",K.center),Mt.setValue(L,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(L,"normalMatrix",K.normalMatrix),Mt.setValue(L,"modelMatrix",K.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){let Yt=ae.uniformsGroups;for(let ln=0,ws=Yt.length;ln<ws;ln++){let Mi=Yt[ln];G.update(Mi,cn),G.bind(Mi,cn)}}return cn}function Pu(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function Es(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,Y,se){W.get(T.texture).__webglTexture=Y,W.get(T.depthTexture).__webglTexture=se;let ae=W.get(T);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,Y){let se=W.get(T);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};let zr=L.createFramebuffer();this.setRenderTarget=function(T,Y=0,se=0){N=T,R=Y,C=se;let ae=!0,K=null,we=!1,ze=!1;if(T){let He=W.get(T);if(He.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(L.FRAMEBUFFER,null),ae=!1;else if(He.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(He.__hasExternalTextures)w.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ke=T.depthTexture;if(He.__boundDepthTexture!==Ke){if(Ke!==null&&W.has(Ke)&&(T.width!==Ke.image.width||T.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}let Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ze=!0);let it=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?K=it[Y][se]:K=it[Y],we=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?K=W.get(T).__webglMultisampledFramebuffer:Array.isArray(it)?K=it[se]:K=it,z.copy(T.viewport),J.copy(T.scissor),V=T.scissorTest}else z.copy(me).multiplyScalar(te).floor(),J.copy(Me).multiplyScalar(te).floor(),V=De;if(se!==0&&(K=zr),pe.bindFramebuffer(L.FRAMEBUFFER,K)&&ae&&pe.drawBuffers(T,K),pe.viewport(z),pe.scissor(J),pe.setScissorTest(V),we){let He=W.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,se)}else if(ze){let He=W.get(T.texture),Je=Y;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.__webglTexture,se,Je)}else if(T!==null&&se!==0){let He=W.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,He.__webglTexture,se)}E=-1},this.readRenderTargetPixels=function(T,Y,se,ae,K,we,ze){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){pe.bindFramebuffer(L.FRAMEBUFFER,Ge);try{let He=T.texture,Je=He.format,it=He.type;if(!Te.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-ae&&se>=0&&se<=T.height-K&&L.readPixels(Y,se,ae,K,Se.convert(Je),Se.convert(it),we)}finally{let He=N!==null?W.get(N).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,Y,se,ae,K,we,ze){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){let He=T.texture,Je=He.format,it=He.type;if(!Te.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=T.width-ae&&se>=0&&se<=T.height-K){pe.bindFramebuffer(L.FRAMEBUFFER,Ge);let Ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.bufferData(L.PIXEL_PACK_BUFFER,we.byteLength,L.STREAM_READ),L.readPixels(Y,se,ae,K,Se.convert(Je),Se.convert(it),0);let ct=N!==null?W.get(N).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,ct);let mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await km(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,we),L.deleteBuffer(Ke),L.deleteSync(mt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,Y=null,se=0){T.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1]);let ae=Math.pow(2,-se),K=Math.floor(T.image.width*ae),we=Math.floor(T.image.height*ae),ze=Y!==null?Y.x:0,Ge=Y!==null?Y.y:0;w.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,se,0,0,ze,Ge,K,we),pe.unbindTexture()};let kr=L.createFramebuffer(),qa=L.createFramebuffer();this.copyTextureToTexture=function(T,Y,se=null,ae=null,K=0,we=null){T.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,T=arguments[1],Y=arguments[2],we=arguments[3]||0,se=null),we===null&&(K!==0?(ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=K,K=0):we=0);let ze,Ge,He,Je,it,Ke,ct,mt,zt,Lt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(se!==null)ze=se.max.x-se.min.x,Ge=se.max.y-se.min.y,He=se.isBox3?se.max.z-se.min.z:1,Je=se.min.x,it=se.min.y,Ke=se.isBox3?se.min.z:0;else{let Mn=Math.pow(2,-K);ze=Math.floor(Lt.width*Mn),Ge=Math.floor(Lt.height*Mn),T.isDataArrayTexture?He=Lt.depth:T.isData3DTexture?He=Math.floor(Lt.depth*Mn):He=1,Je=0,it=0,Ke=0}ae!==null?(ct=ae.x,mt=ae.y,zt=ae.z):(ct=0,mt=0,zt=0);let pt=Se.convert(Y.format),je=Se.convert(Y.type),Vt;Y.isData3DTexture?(w.setTexture3D(Y,0),Vt=L.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(w.setTexture2DArray(Y,0),Vt=L.TEXTURE_2D_ARRAY):(w.setTexture2D(Y,0),Vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment);let ht=L.getParameter(L.UNPACK_ROW_LENGTH),cn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Gn=L.getParameter(L.UNPACK_SKIP_PIXELS),In=L.getParameter(L.UNPACK_SKIP_ROWS),gr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Je),L.pixelStorei(L.UNPACK_SKIP_ROWS,it),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ke);let Mt=T.isDataArrayTexture||T.isData3DTexture,On=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){let Mn=W.get(T),Yt=W.get(Y),ln=W.get(Mn.__renderTarget),ws=W.get(Yt.__renderTarget);pe.bindFramebuffer(L.READ_FRAMEBUFFER,ln.__webglFramebuffer),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let Mi=0;Mi<He;Mi++)Mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(T).__webglTexture,K,Ke+Mi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(Y).__webglTexture,we,zt+Mi)),L.blitFramebuffer(Je,it,ze,Ge,ct,mt,ze,Ge,L.DEPTH_BUFFER_BIT,L.NEAREST);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||W.has(T)){let Mn=W.get(T),Yt=W.get(Y);pe.bindFramebuffer(L.READ_FRAMEBUFFER,kr),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,qa);for(let ln=0;ln<He;ln++)Mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mn.__webglTexture,K,Ke+ln):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mn.__webglTexture,K),On?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yt.__webglTexture,we,zt+ln):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yt.__webglTexture,we),K!==0?L.blitFramebuffer(Je,it,ze,Ge,ct,mt,ze,Ge,L.COLOR_BUFFER_BIT,L.NEAREST):On?L.copyTexSubImage3D(Vt,we,ct,mt,zt+ln,Je,it,ze,Ge):L.copyTexSubImage2D(Vt,we,ct,mt,Je,it,ze,Ge);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else On?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Vt,we,ct,mt,zt,ze,Ge,He,pt,je,Lt.data):Y.isCompressedArrayTexture?L.compressedTexSubImage3D(Vt,we,ct,mt,zt,ze,Ge,He,pt,Lt.data):L.texSubImage3D(Vt,we,ct,mt,zt,ze,Ge,He,pt,je,Lt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,we,ct,mt,ze,Ge,pt,je,Lt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,we,ct,mt,Lt.width,Lt.height,pt,Lt.data):L.texSubImage2D(L.TEXTURE_2D,we,ct,mt,ze,Ge,pt,je,Lt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,cn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gn),L.pixelStorei(L.UNPACK_SKIP_ROWS,In),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gr),we===0&&Y.generateMipmaps&&L.generateMipmap(Vt),pe.unbindTexture()},this.copyTextureToTexture3D=function(T,Y,se=null,ae=null,K=0){return T.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,T=arguments[2],Y=arguments[3],K=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,Y,se,ae,K)},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){R=0,C=0,N=null,pe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};function Mg(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Tt,l=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(let u in s){let h=bg(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=bg(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function bg(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new vt(o,t,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function _f(n,e){if(e===Yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===oo||e===wa){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===oo)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Yl=class extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new kf(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=cr.extractUrlBase(e);o=cr.resolveURL(l,this.path)}else o=cr.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new io(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ag){try{o[lt.KHR_BINARY_GLTF]=new Hf(e)}catch(h){r&&r(h);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new $f(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case lt.KHR_MATERIALS_UNLIT:o[h]=new Ef;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Vf(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[h]=new Gf;break;case lt.KHR_MESH_QUANTIZATION:o[h]=new Wf;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function $S(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sf=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new qe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],fn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ar(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new is(u),l.distance=h;break;case"spot":l=new ua(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ur(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},Ef=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,i){let r=[];e.color=new qe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Tf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(s)}},Af=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Rf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},Cf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,xt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Pf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},If=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],fn),Promise.all(s)}},Df=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Lf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,xt)),Promise.all(s)}},Nf=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},Of=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Ff=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bf=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zf=class{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},kf=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let l of r.primitives)if(l.mode!==Qn.TRIANGLES&&l.mode!==Qn.TRIANGLE_STRIP&&l.mode!==Qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let g of h){let x=new tt,m=new P,p=new kt,b=new P(1,1,1),v=new Jo(g.geometry,g.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&b.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,x.compose(m,p,b));for(let y in c)if(y==="_COLOR_0"){let A=c[y];v.instanceColor=new Tr(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Ut.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Ag="glTF",Ca=12,Sg={JSON:1313821514,BIN:5130562},Hf=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ca),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ag)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ca,s=new DataView(e,Ca),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===Sg.JSON){let l=new Uint8Array(e,Ca+o,a);this.content=i.decode(l)}else if(c===Sg.BIN){let l=Ca+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=qf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=qf[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=fo[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(d)},a,l,fn,f)})})}},Gf=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Wf=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},$l=class extends sr{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,h=(i-t)/u,f=h*h,d=f*h,g=e*l,x=g-l,m=-2*d+3*f,p=d-f,b=1-m,v=p-f+h;for(let y=0;y!==a;y++){let A=o[x+y+a],R=o[x+y+c]*u,C=o[g+y+a],N=o[g+y]*u;s[y]=b*A+v*R+m*C+p*N}return s}},ZS=new kt,Xf=class extends $l{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return ZS.fromArray(s).normalize().toArray(s),s}},Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eg={9728:Xt,9729:qt,9984:cl,9985:ro,9986:os,9987:gi},wg={33071:wi,33648:Ks,10497:hi},vf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},KS={CUBICSPLINE:void 0,LINEAR:es,STEP:Qr},bf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Tn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),n.DefaultMaterial}function ms(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ur(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function JS(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function QS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eE(n){let e,t=n.extensions&&n.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mf(t.attributes):e=n.indices+":"+Mf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Mf(n.targets[i]);return e}function Mf(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Yf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var nE=new tt,$f=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $S,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new ca(this.options.manager):this.textureLoader=new da(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new io(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return ms(s,a,r),ur(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(cr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=vf[r.type],a=fo[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new vt(l,o,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=vf[r.type],l=fo[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,v=t.cache.get(b);v||(x=new l(a,p*d,r.count*d/u),v=new wr(x,d/u),t.cache.add(b,v)),m=new wn(v,c,f%d/u,g)}else a===null?x=new l(r.count*c):x=new l(a,f,r.count*c),m=new vt(x,c,g);if(r.sparse!==void 0){let p=vf.SCALAR,b=fo[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,A=new b(o[1],v,r.sparse.count*p),R=new l(o[2],y,r.sparse.count*c);a!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,N=A.length;C<N;C++){let E=A[C];if(m.setX(E,R[C*c]),c>=2&&m.setY(E,R[C*c+1]),c>=3&&m.setZ(E,R[C*c+2]),c>=4&&m.setW(E,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Eg[f.magFilter]||qt,u.minFilter=Eg[f.minFilter]||gi,u.wrapS=wg[f.wrapS]||hi,u.wrapT=wg[f.wrapT]||hi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==qt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=r.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Zt(x);m.needsUpdate=!0,f(m)}),t.load(cr.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ur(h,o),h.userData.mimeType=o.mimeType||tE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new no,Ln.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new ir,Ln.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Tn}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},c=s.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){let h=r[lt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],fn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,xt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=bt);let u=s.alphaMode||bf.OPAQUE;if(u===bf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===bf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ot&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Ot&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ot){let h=s.emissiveFactor;a.emissive=new qe().setRGB(h[0],h[1],h[2],fn)}return s.emissiveTexture!==void 0&&o!==Ot&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){let h=new o(a);return s.name&&(h.name=s.name),ur(h,s),t.associations.set(h,{materials:e}),s.extensions&&ms(r,h,s),h})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Tg(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=eE(l),h=r[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Tg(new Tt,l,t),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?jS(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=o[d],p,b=l[d];if(m.mode===Qn.TRIANGLES||m.mode===Qn.TRIANGLE_STRIP||m.mode===Qn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Zo(x,b):new nt(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Qn.TRIANGLE_STRIP?p.geometry=_f(p.geometry,wa):m.mode===Qn.TRIANGLE_FAN&&(p.geometry=_f(p.geometry,oo));else if(m.mode===Qn.LINES)p=new Qo(x,b);else if(m.mode===Qn.LINE_STRIP)p=new Pi(x,b);else if(m.mode===Qn.LINE_LOOP)p=new ea(x,b);else if(m.mode===Qn.POINTS)p=new ta(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&QS(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ur(p,s),m.extensions&&ms(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&ms(r,h[0],s),h[0];let f=new Dt;s.extensions&&ms(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Wt(cs.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new di(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ur(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new tt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new jo(a,c)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],g=r.samplers[d.sampler],x=d.target,m=x.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,b=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let b=0,v=f.length;b<v;b++){let y=f[b],A=d[b],R=g[b],C=x[b],N=m[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let E=i._createAnimationTracks(y,A,R,C,N);if(E)for(let S=0;S<E.length;S++)p.push(E[S])}return new aa(s,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));let c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,nE)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new eo:l.length>1?u=new Dt:l.length===1?u=l[0]:u=new Ut,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),ur(u,s),s.extensions&&ms(i,u,s),s.matrix!==void 0){let h=new tt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new Dt;i.name&&(s.name=r.createUniqueName(i.name)),ur(s,i),i.extensions&&ms(t,s,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);let l=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof Ln||f instanceof Zt)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,c=[];Nr[s.path]===Nr.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Nr[s.path]){case Nr.weights:l=Ii;break;case Nr.rotation:l=Di;break;case Nr.position:case Nr.scale:l=Li;break;default:switch(i.itemSize){case 1:l=Ii;break;case 2:case 3:default:l=Li;break}break}let u=r.interpolation!==void 0?KS[r.interpolation]:es,h=this._getArrayFromAccessor(i);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+Nr[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Yf(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Di?Xf:$l;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function iE(n,e,t){let i=e.attributes,r=new It;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){let u=Yf(fo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new P,c=new P;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=Yf(fo[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new rn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Tg(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=qf[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return ft.workingColorSpace!==fn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),ur(n,e),iE(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?JS(n,e.targets,t):n})}var Rg={type:"change"},Kf={type:"start"},Pg={type:"end"},Zl=new Ri,Cg=new hn,rE=Math.cos(70*cs.DEG2RAD),Qt=new P,Hn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zf=1e-6,Kl=class extends ma{constructor(e,t=null){super(e,t),this.state=At.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new kt,this._lastTargetPosition=new P,this._quat=new kt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cr,this._sphericalDelta=new Cr,this._scale=1,this._panOffset=new P,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new P,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oE.bind(this),this._onPointerDown=sE.bind(this),this._onPointerUp=aE.bind(this),this._onContextMenu=pE.bind(this),this._onMouseWheel=uE.bind(this),this._onKeyDown=hE.bind(this),this._onTouchStart=fE.bind(this),this._onTouchMove=dE.bind(this),this._onMouseDown=cE.bind(this),this._onMouseMove=lE.bind(this),this._interceptControlDown=mE.bind(this),this._interceptControlUp=gE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rg),this.update(),this.state=At.NONE}update(e=null){let t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),r<-Math.PI?r+=Hn:r>Math.PI&&(r-=Hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Qt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zl.origin.copy(this.object.position),Zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zl.direction))<rE?this.object.lookAt(this.target):(Cg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zl.intersectPlane(Cg,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Zf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zf||this._lastTargetPosition.distanceToSquared(this.target)>Zf?(this.dispatchEvent(Rg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Qt.copy(r).sub(this.target);let s=Qt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function sE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function oE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function aE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pg),this.state=At.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=At.DOLLY;break;case Pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}break;case Pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Kf)}function lE(n){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function uE(n){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(n.preventDefault(),this.dispatchEvent(Kf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Pg))}function hE(n){this.enabled!==!1&&this._handleKeyDown(n)}function fE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=At.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=At.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Kf)}function dE(n){switch(this._trackPointer(n),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=At.NONE}}function pE(n){this.enabled!==!1&&n.preventDefault()}function mE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var jl=class extends Nn{constructor(){super();let e=new Ci;e.deleteAttribute("uv");let t=new Tn({side:pn}),i=new Tn,r=new is(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new nt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new nt(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new nt(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new nt(e,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new nt(e,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let u=new nt(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new nt(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new nt(e,po(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new nt(e,po(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new nt(e,po(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new nt(e,po(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new nt(e,po(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new nt(e,po(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function po(n){let e=new Ot;return e.color.setScalar(n),e}var gn=Uint8Array,Yn=Uint16Array,nd=Int32Array,id=new gn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rd=new gn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ig=new gn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fg=function(n,e){for(var t=new Yn(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new nd(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Bg=Fg(id,2),xE=Bg.b,Jf=Bg.r;xE[28]=258,Jf[258]=28;var zg=Fg(rd,0),mC=zg.b,Dg=zg.r,Qf=new Yn(32768);for(yt=0;yt<32768;++yt)hr=(yt&43690)>>1|(yt&21845)<<1,hr=(hr&52428)>>2|(hr&13107)<<2,hr=(hr&61680)>>4|(hr&3855)<<4,Qf[yt]=((hr&65280)>>8|(hr&255)<<8)>>1;var hr,yt,Da=function(n,e,t){for(var i=n.length,r=0,s=new Yn(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new Yn(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Yn(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Qf[h]>>c]=l}else for(a=new Yn(i),r=0;r<i;++r)n[r]&&(a[r]=Qf[o[n[r]-1]++]>>15-n[r]);return a},gs=new gn(288);for(yt=0;yt<144;++yt)gs[yt]=8;var yt;for(yt=144;yt<256;++yt)gs[yt]=9;var yt;for(yt=256;yt<280;++yt)gs[yt]=7;var yt;for(yt=280;yt<288;++yt)gs[yt]=8;var yt,Jl=new gn(32);for(yt=0;yt<32;++yt)Jl[yt]=5;var yt,yE=Da(gs,9,0);var _E=Da(Jl,5,0);var kg=function(n){return(n+7)/8|0},Hg=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new gn(n.subarray(e,t))};var vE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ql=function(n,e,t){var i=new Error(e||vE[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Ql),!t)throw i;return i};var fr=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},Pa=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},jf=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:Gg,l:0};if(r==1){var o=new gn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(A,R){return A.f-R.f}),t.push({s:-1,f:25001});var a=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=r-1;)a=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var d=new Yn(f+1),g=ed(t[u-1],d,0);if(g>e){var i=0,x=0,m=g-e,p=1<<m;for(s.sort(function(R,C){return d[C.s]-d[R.s]||R.f-C.f});i<r;++i){var b=s[i].s;if(d[b]>e)x+=p-(1<<g-d[b]),d[b]=e;else break}for(x>>=m;x>0;){var v=s[i].s;d[v]<e?x-=1<<e-d[v]++-1:++i}for(;i>=0&&x;--i){var y=s[i].s;d[y]==e&&(--d[y],++x)}g=e}return{t:new gn(d),l:g}},ed=function(n,e,t){return n.s==-1?Math.max(ed(n.l,e,t+1),ed(n.r,e,t+1)):e[n.s]=t},Lg=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new Yn(++e),i=0,r=n[0],s=1,o=function(c){t[i++]=c},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},Ia=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},Vg=function(n,e,t){var i=t.length,r=kg(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},Ng=function(n,e,t,i,r,s,o,a,c,l,u){fr(e,u++,t),++r[256];for(var h=jf(r,15),f=h.t,d=h.l,g=jf(s,15),x=g.t,m=g.l,p=Lg(f),b=p.c,v=p.n,y=Lg(x),A=y.c,R=y.n,C=new Yn(19),N=0;N<b.length;++N)++C[b[N]&31];for(var N=0;N<A.length;++N)++C[A[N]&31];for(var E=jf(C,7),S=E.t,z=E.l,J=19;J>4&&!S[Ig[J-1]];--J);var V=l+5<<3,$=Ia(r,gs)+Ia(s,Jl)+o,ee=Ia(r,f)+Ia(s,x)+o+14+3*J+Ia(C,S)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&V<=$&&V<=ee)return Vg(e,u,n.subarray(c,c+l));var Q,he,te,de;if(fr(e,u,1+(ee<$)),u+=2,ee<$){Q=Da(f,d,0),he=f,te=Da(x,m,0),de=x;var ne=Da(S,z,0);fr(e,u,v-257),fr(e,u+5,R-1),fr(e,u+10,J-4),u+=14;for(var N=0;N<J;++N)fr(e,u+3*N,S[Ig[N]]);u+=3*J;for(var me=[b,A],Me=0;Me<2;++Me)for(var De=me[Me],N=0;N<De.length;++N){var j=De[N]&31;fr(e,u,ne[j]),u+=S[j],j>15&&(fr(e,u,De[N]>>5&127),u+=De[N]>>12)}}else Q=yE,he=gs,te=_E,de=Jl;for(var N=0;N<a;++N){var ie=i[N];if(ie>255){var j=ie>>18&31;Pa(e,u,Q[j+257]),u+=he[j+257],j>7&&(fr(e,u,ie>>23&31),u+=id[j]);var H=ie&31;Pa(e,u,te[H]),u+=de[H],H>3&&(Pa(e,u,ie>>5&8191),u+=rd[H])}else Pa(e,u,Q[ie]),u+=he[ie]}return Pa(e,u,Q[256]),u+he[256]},bE=new nd([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Gg=new gn(0),ME=function(n,e,t,i,r,s){var o=s.z||n.length,a=new gn(i+o+5*(1+Math.ceil(o/7e3))+r),c=a.subarray(i,a.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=bE[e-1],f=h>>13,d=h&8191,g=(1<<t)-1,x=s.p||new Yn(32768),m=s.h||new Yn(g+1),p=Math.ceil(t/3),b=2*p,v=function(L){return(n[L]^n[L+1]<<p^n[L+2]<<b)&g},y=new nd(25e3),A=new Yn(288),R=new Yn(32),C=0,N=0,E=s.i||0,S=0,z=s.w||0,J=0;E+2<o;++E){var V=v(E),$=E&32767,ee=m[V];if(x[$]=ee,m[V]=$,z<=E){var Q=o-E;if((C>7e3||S>24576)&&(Q>423||!l)){u=Ng(n,c,0,y,A,R,N,S,J,E-J,u),S=C=N=0,J=E;for(var he=0;he<286;++he)A[he]=0;for(var he=0;he<30;++he)R[he]=0}var te=2,de=0,ne=d,me=$-ee&32767;if(Q>2&&V==v(E-me))for(var Me=Math.min(f,Q)-1,De=Math.min(32767,E),j=Math.min(258,Q);me<=De&&--ne&&$!=ee;){if(n[E+te]==n[E+te-me]){for(var ie=0;ie<j&&n[E+ie]==n[E+ie-me];++ie);if(ie>te){if(te=ie,de=me,ie>Me)break;for(var H=Math.min(me,ie-2),X=0,he=0;he<H;++he){var ye=E-me+he&32767,xe=x[ye],Ce=ye-xe&32767;Ce>X&&(X=Ce,ee=ye)}}}$=ee,ee=x[$],me+=$-ee&32767}if(de){y[S++]=268435456|Jf[te]<<18|Dg[de];var Xe=Jf[te]&31,Pe=Dg[de]&31;N+=id[Xe]+rd[Pe],++A[257+Xe],++R[Pe],z=E+te,++C}else y[S++]=n[E],++A[n[E]]}}for(E=Math.max(E,z);E<o;++E)y[S++]=n[E],++A[n[E]];u=Ng(n,c,l,y,A,R,N,S,J,E-J,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=x,s.i=E,s.w=z)}else{for(var E=s.w||0;E<o+l;E+=65535){var ce=E+65535;ce>=o&&(c[u/8|0]=l,ce=o),u=Vg(c,u+1,n.subarray(E,ce))}s.i=o}return Hg(a,0,i+kg(u)+r)},SE=function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n}(),EE=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=SE[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var wE=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new gn(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return ME(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},Wg=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var mn=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function TE(n,e){return wE(n,e||{},0,0)}var Xg=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=Wg(i,s[1]),s=s[0]),s instanceof gn?t[o]=[s,a]:(t[o+="/"]=[new gn(0),a],Xg(s,o,t,i))}},Ug=typeof TextEncoder<"u"&&new TextEncoder,AE=typeof TextDecoder<"u"&&new TextDecoder,RE=0;try{AE.decode(Gg,{stream:!0}),RE=1}catch{}function La(n,e){if(e){for(var t=new gn(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(Ug)return Ug.encode(n);for(var r=n.length,s=new gn(n.length+(n.length>>1)),o=0,a=function(u){s[o++]=u},i=0;i<r;++i){if(o+5>s.length){var c=new gn(o+8+(r-i<<1));c.set(s),s=c}var l=n.charCodeAt(i);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++i)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return Hg(s,0,o)}var td=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Ql(9),e+=i+4}return e},Og=function(n,e,t,i,r,s,o,a){var c=i.length,l=t.extra,u=a&&a.length,h=td(l);mn(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Ql(10),mn(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(mn(n,e,t.crc),mn(n,e+4,s<0?-s-2:s),mn(n,e+8,t.size)),mn(n,e+12,c),mn(n,e+14,h),e+=16,o!=null&&(mn(n,e,u),mn(n,e+6,t.attrs),mn(n,e+10,o),e+=14),n.set(i,e),e+=c,h)for(var g in l){var x=l[g],m=x.length;mn(n,e,+g),mn(n,e+2,m),n.set(x,e+4),e+=4+m}return u&&(n.set(a,e),e+=u),e},CE=function(n,e,t,i,r){mn(n,e,101010256),mn(n,e+8,t),mn(n,e+10,t),mn(n,e+12,i),mn(n,e+16,r)};function qg(n,e){e||(e={});var t={},i=[];Xg(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],c=a[0],l=a[1],u=l.level==0?0:8,h=La(o),f=h.length,d=l.comment,g=d&&La(d),x=g&&g.length,m=td(l.extra);f>65535&&Ql(11);var p=u?TE(c,l):c,b=p.length,v=EE();v.p(c),i.push(Wg(l,{size:c.length,crc:v.d(),c:p,f:h,m:g,u:f!=o.length||g&&d.length!=x,o:r,compression:u})),r+=30+f+m+b,s+=76+2*(f+m)+(x||0)+b}for(var y=new gn(s+22),A=r,R=s-r,C=0;C<i.length;++C){var h=i[C];Og(y,h.o,h,h.f,h.u,h.c.length);var N=30+h.f.length+td(h.extra);y.set(h.c,h.o+N),Og(y,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+N+(h.m?h.m.length:0)}return CE(y,r,i.length,R,A),y}var tu=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,r){this.parseAsync(e,r).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},t);let i={},r="model.usda";i[r]=null;let s=Zg();s+=IE(t);let o={},a={};e.traverseVisible(l=>{if(l.isMesh){let u=l.geometry,h=l.material;if(h.isMeshStandardMaterial){let f="geometries/Geometry_"+u.id+".usda";if(!(f in i)){let d=UE(u);i[f]=LE(d)}h.uuid in o||(o[h.uuid]=h),s+=NE(l,u,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",l)}else l.isCamera&&(s+=WE(l))}),s+=DE(),s+=HE(o,a,t.quickLookCompatible),i[r]=La(s),s=null;for(let l in a){let u=a[l];if(u.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");u=await this.textureUtils.decompress(u)}let h=PE(u.image,u.flipY,t.maxTextureSize),f=await new Promise(d=>h.toBlob(d,"image/png",1));i[`textures/Texture_${l}.png`]=new Uint8Array(await f.arrayBuffer())}let c=0;for(let l in i){let u=i[l],h=34+l.length;c+=h;let f=c&63;if(f!==4){let d=64-f,g=new Uint8Array(d);i[l]=[u,{extra:{12345:g}}]}c=u.length}return qg(i,{level:0})}};function PE(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),r=document.createElement("canvas");r.width=n.width*Math.min(1,i),r.height=n.height*Math.min(1,i);let s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(n,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var Rn=7;function Zg(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function IE(n){return`def Xform "Root"
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
		{${n.includeAnchoringProperties===!0?`
		token preliminary:anchoring:type = "${n.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${n.ar.planeAnchoring.alignment}"
	`:""}
`}function DE(){return`
		}
	}
}

`}function LE(n){let e=Zg();return e+=n,La(e)}function NE(n,e,t){let i="Object_"+n.id,r=Kg(n.matrixWorld);return n.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n),`def Xform "${i}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${r}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function Kg(n){let e=n.elements;return`( ${eu(e,0)}, ${eu(e,4)}, ${eu(e,8)}, ${eu(e,12)} )`}function eu(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function UE(n){return`
def "Geometry"
{
${OE(n)}
}
`}function OE(n){let e="Geometry",t=n.attributes,i=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${FE(n)}]
		int[] faceVertexIndices = [${BE(n)}]
		normal3f[] normals = [${sd(t.normal,i)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${sd(t.position,i)}]
${kE(t)}
		uniform token subdivisionScheme = "none"
	}
`}function FE(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function BE(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let r=0;r<i;r++)t.push(r)}return t.join(", ")}function sd(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let r=n.getX(i),s=n.getY(i),o=n.getZ(i);t.push(`(${r.toPrecision(Rn)}, ${s.toPrecision(Rn)}, ${o.toPrecision(Rn)})`)}return t.join(", ")}function zE(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),r=n.getY(t);e.push(`(${i.toPrecision(Rn)}, ${1-r.toPrecision(Rn)})`)}return e.join(", ")}function kE(n){let e="";for(let i=0;i<4;i++){let r=i>0?i:"",s=n["uv"+r];s!==void 0&&(e+=`
		texCoord2f[] primvars:st${r} = [${zE(s)}] (
			interpolation = "vertex"
		)`)}let t=n.color;if(t!==void 0){let i=t.count;e+=`
	color3f[] primvars:displayColor = [${sd(t,i)}] (
		interpolation = "vertex"
		)`}return e}function HE(n,e,t=!1){let i=[];for(let r in n){let s=n[r];i.push(VE(s,e,t))}return`def "Materials"
{
${i.join("")}
}

`}function VE(n,e,t=!1){let i="			",r=[],s=[];function o(a,c,l){let u=a.source.id+"_"+a.flipY;e[u]=a;let h=a.channel>0?"st"+a.channel:"st",f={1e3:"repeat",1001:"clamp",1002:"mirror"},d=a.repeat.clone(),g=a.offset.clone(),x=a.rotation,m=Math.sin(x),p=Math.cos(x);return g.y=1-g.y-d.y,t?(g.x=g.x/d.x,g.y=g.y/d.y,g.x+=m/d.x,g.y+=p-1):(g.x+=m*d.x,g.y+=(1-p)*d.y),`
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
			token inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${c}.outputs:result>
			float inputs:rotation = ${(x*(180/Math.PI)).toFixed(Rn)}
			float2 inputs:scale = ${$g(d)}
			float2 inputs:translation = ${$g(g)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${c}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${c}.outputs:result>
			${l!==void 0?"float4 inputs:scale = "+GE(l):""}
			token inputs:sourceColorSpace = "${a.colorSpace===xi?"raw":"sRGB"}"
			token inputs:wrapS = "${f[a.wrapS]}"
			token inputs:wrapT = "${f[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${n.transparent||n.alphaTest>0?"float outputs:a":""}
		}`}return n.side===bt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n),n.map!==null?(r.push(`${i}color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?r.push(`${i}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),r.push(`${i}float inputs:opacityThreshold = ${n.alphaTest}`)),s.push(o(n.map,"diffuse",n.color))):r.push(`${i}color3f inputs:diffuseColor = ${Yg(n.color)}`),n.emissiveMap!==null?(r.push(`${i}color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`),s.push(o(n.emissiveMap,"emissive",new qe(n.emissive.r*n.emissiveIntensity,n.emissive.g*n.emissiveIntensity,n.emissive.b*n.emissiveIntensity)))):n.emissive.getHex()>0&&r.push(`${i}color3f inputs:emissiveColor = ${Yg(n.emissive)}`),n.normalMap!==null&&(r.push(`${i}normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),s.push(o(n.normalMap,"normal"))),n.aoMap!==null&&(r.push(`${i}float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`),s.push(o(n.aoMap,"occlusion",new qe(n.aoMapIntensity,n.aoMapIntensity,n.aoMapIntensity)))),n.roughnessMap!==null?(r.push(`${i}float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`),s.push(o(n.roughnessMap,"roughness",new qe(n.roughness,n.roughness,n.roughness)))):r.push(`${i}float inputs:roughness = ${n.roughness}`),n.metalnessMap!==null?(r.push(`${i}float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`),s.push(o(n.metalnessMap,"metallic",new qe(n.metalness,n.metalness,n.metalness)))):r.push(`${i}float inputs:metallic = ${n.metalness}`),n.alphaMap!==null?(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),r.push(`${i}float inputs:opacityThreshold = 0.0001`),s.push(o(n.alphaMap,"opacity"))):r.push(`${i}float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial&&(n.clearcoatMap!==null?(r.push(`${i}float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`),s.push(o(n.clearcoatMap,"clearcoat",new qe(n.clearcoat,n.clearcoat,n.clearcoat)))):r.push(`${i}float inputs:clearcoat = ${n.clearcoat}`),n.clearcoatRoughnessMap!==null?(r.push(`${i}float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),s.push(o(n.clearcoatRoughnessMap,"clearcoatRoughness",new qe(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness)))):r.push(`${i}float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`),r.push(`${i}float inputs:ior = ${n.ior}`)),`
	def Material "Material_${n.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${r.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>

${s.join(`
`)}

	}
`}function Yg(n){return`(${n.r}, ${n.g}, ${n.b})`}function GE(n){return`(${n.r}, ${n.g}, ${n.b}, 1.0)`}function $g(n){return`(${n.x}, ${n.y})`}function WE(n){let e=n.name?n.name:"Camera_"+n.id,t=Kg(n.matrixWorld);return n.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n),n.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${n.near.toPrecision(Rn)}, ${n.far.toPrecision(Rn)})
			float horizontalAperture = ${((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(Rn)}
			float verticalAperture = ${((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(Rn)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${n.near.toPrecision(Rn)}, ${n.far.toPrecision(Rn)})
			float focalLength = ${n.getFocalLength().toPrecision(Rn)}
			float focusDistance = ${n.focus.toPrecision(Rn)}
			float horizontalAperture = ${n.getFilmWidth().toPrecision(Rn)}
			token projection = "perspective"
			float verticalAperture = ${n.getFilmHeight().toPrecision(Rn)}
		}
	
	`}var jg=new It,nu=new P,_i=class extends fa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Nt(e,3)),this.setAttribute("uv",new Nt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Rr(t,6,1);return this.setAttribute("instanceStart",new wn(i,3,0)),this.setAttribute("instanceEnd",new wn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Rr(t,6,1);return this.setAttribute("instanceColorStart",new wn(i,3,0)),this.setAttribute("instanceColorEnd",new wn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new sa(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),jg.setFromBufferAttribute(t),this.boundingBox.union(jg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)nu.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nu)),nu.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(nu));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};Fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ve(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Un.line={uniforms:Ta.merge([Fe.common,Fe.fog,Fe.line]),vertexShader:`
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
		`};var Oi=class extends Kt{constructor(e){super({type:"LineMaterial",uniforms:Ta.clone(Un.line.uniforms),vertexShader:Un.line.vertexShader,fragmentShader:Un.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var od=new at,Jg=new P,Qg=new P,xn=new at,yn=new at,Fi=new at,ad=new P,cd=new tt,_n=new pa,e0=new P,iu=new It,ru=new rn,Bi=new at,zi,xs;function t0(n,e,t){return Bi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Bi.multiplyScalar(1/Bi.w),Bi.x=xs/t.width,Bi.y=xs/t.height,Bi.applyMatrix4(n.projectionMatrixInverse),Bi.multiplyScalar(1/Bi.w),Math.abs(Math.max(Bi.x,Bi.y))}function XE(n,e){let t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,c=o;a<c;a++){_n.start.fromBufferAttribute(r,a),_n.end.fromBufferAttribute(s,a),_n.applyMatrix4(t);let l=new P,u=new P;zi.distanceSqToSegment(_n.start,_n.end,u,l),u.distanceTo(l)<xs*.5&&e.push({point:u,pointOnLine:l,distance:zi.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function qE(n,e,t){let i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;zi.at(1,Fi),Fi.w=1,Fi.applyMatrix4(e.matrixWorldInverse),Fi.applyMatrix4(i),Fi.multiplyScalar(1/Fi.w),Fi.x*=s.x/2,Fi.y*=s.y/2,Fi.z=0,ad.copy(Fi),cd.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(xn.fromBufferAttribute(c,f),yn.fromBufferAttribute(l,f),xn.w=1,yn.w=1,xn.applyMatrix4(cd),yn.applyMatrix4(cd),xn.z>h&&yn.z>h)continue;if(xn.z>h){let v=xn.z-yn.z,y=(xn.z-h)/v;xn.lerp(yn,y)}else if(yn.z>h){let v=yn.z-xn.z,y=(yn.z-h)/v;yn.lerp(xn,y)}xn.applyMatrix4(i),yn.applyMatrix4(i),xn.multiplyScalar(1/xn.w),yn.multiplyScalar(1/yn.w),xn.x*=s.x/2,xn.y*=s.y/2,yn.x*=s.x/2,yn.y*=s.y/2,_n.start.copy(xn),_n.start.z=0,_n.end.copy(yn),_n.end.z=0;let x=_n.closestPointToPointParameter(ad,!0);_n.at(x,e0);let m=cs.lerp(xn.z,yn.z,x),p=m>=-1&&m<=1,b=ad.distanceTo(e0)<xs*.5;if(p&&b){_n.start.fromBufferAttribute(c,f),_n.end.fromBufferAttribute(l,f),_n.start.applyMatrix4(o),_n.end.applyMatrix4(o);let v=new P,y=new P;zi.distanceSqToSegment(_n.start,_n.end,y,v),t.push({point:y,pointOnLine:v,distance:zi.origin.distanceTo(y),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var Ur=class extends nt{constructor(e=new _i,t=new Oi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Jg.fromBufferAttribute(t,o),Qg.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Jg.distanceTo(Qg);let s=new Rr(r,2,1);return e.setAttribute("instanceDistanceStart",new wn(s,1,0)),e.setAttribute("instanceDistanceEnd",new wn(s,1,1)),this}raycast(e,t){let i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;zi=e.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;xs=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),ru.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=xs*.5;else{let h=Math.max(r.near,ru.distanceToPoint(zi.origin));l=t0(r,h,c.resolution)}if(ru.radius+=l,zi.intersectsSphere(ru)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),iu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=xs*.5;else{let h=Math.max(r.near,iu.distanceToPoint(zi.origin));u=t0(r,h,c.resolution)}iu.expandByScalar(u),zi.intersectsBox(iu)!==!1&&(i?XE(this,t):qE(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(od),this.material.uniforms.resolution.value.set(od.z,od.w))}};var r0="blueprints.edgeMode",YE="blueprints.edgesEnabled",ys="none",_s="transparent",Ua="opaque",$E=20,s0=2.5,o0=0,ou=35e-5,ud=2e-6;function ZE(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*ud}var Na=1,a0=3,KE=.0012,jE=.0036,JE=.02,QE=.0035,n0=.012;function i0(n){return n===ys||n===_s||n===Ua?n:n==="1"||n==="true"?_s:n==="0"||n==="false"?ys:null}function c0(){try{let n=i0(localStorage.getItem(r0));if(n)return n;let e=i0(localStorage.getItem(YE));if(e)return fd(e),e}catch{}return _s}function fd(n){try{localStorage.setItem(r0,n)}catch{}}function Cn(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function l0(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new ia(n,$E),i=t.getAttribute("position"),r=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),r}function ew(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var su=new P;function u0(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],r=n[t+1],s=n[t+2],o=n[t+3],a=n[t+4],c=n[t+5],l=o-i,u=a-r,h=c-s,f=Math.hypot(l,u,h);f<1e-6||e.push({ax:i,ay:r,az:s,bx:o,by:a,bz:c,dx:l/f,dy:u/f,dz:h/f,len:f})}return e}function tw(n,e,t,i,r,s){let o=d=>Math.round(d/5e-4),a=o(n),c=o(e),l=o(t),u=o(i),h=o(r),f=o(s);if(a>u||a===u&&c>h||a===u&&c===h&&l>f){let d=a;a=u,u=d;let g=c;c=h,h=g;let x=l;l=f,f=x}return`${a},${c},${l},${u},${h},${f}`}function h0(n){let e=u0(n),t=[],i=new Set;for(let r=0;r<e.length;r++){let s=e[r];for(let o=r+1;o<e.length;o++){let a=e[o];if(Math.abs(s.dx*a.dx+s.dy*a.dy+s.dz*a.dz)<.985)continue;let l=s.ax-a.ax,u=s.ay-a.ay,h=s.az-a.az,f=l*s.dx+u*s.dy+h*s.dz,d=l-f*s.dx,g=u-f*s.dy,x=h-f*s.dz,m=Math.hypot(d,g,x);if(m<KE||m>jE)continue;let p=(a.ax-s.ax)*s.dx+(a.ay-s.ay)*s.dy+(a.az-s.az)*s.dz,b=(a.bx-s.ax)*s.dx+(a.by-s.ay)*s.dy+(a.bz-s.az)*s.dz,v=Math.max(0,Math.min(p,b)),y=Math.min(s.len,Math.max(p,b));if(y-v<JE)continue;let A=-d/m*(m*.5),R=-g/m*(m*.5),C=-x/m*(m*.5),N=s.ax+s.dx*v+A,E=s.ay+s.dy*v+R,S=s.az+s.dz*v+C,z=s.ax+s.dx*y+A,J=s.ay+s.dy*y+R,V=s.az+s.dz*y+C,$=tw(N,E,S,z,J,V);i.has($)||(i.add($),t.push(N,E,S,z,J,V))}}return new Float32Array(t)}function nw(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,r=0,s=0,o=t?t.count:e.count,a=l=>{let u=t?t.getX(l):l;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let l=0;l+2<o;l+=3){let u=a(l),h=a(l+1),f=a(l+2),d=h[0]-u[0],g=h[1]-u[1],x=h[2]-u[2],m=f[0]-u[0],p=f[1]-u[1],b=f[2]-u[2];i+=g*b-x*p,r+=x*m-d*b,s+=d*p-g*m}let c=Math.hypot(i,r,s)||1;return{x:i/c,y:r/c,z:s/c}}function iw(n,e){let t=n.getAttribute("position"),i,r,s;Math.abs(e.z)<.9?(i=-e.y,r=e.x,s=0):(i=0,r=-e.z,s=e.y);let o=Math.hypot(i,r,s)||1;i/=o,r/=o,s/=o;let a=e.y*s-e.z*r,c=e.z*i-e.x*s,l=e.x*r-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let g=0;g<t.count;g++){let x=t.getX(g),m=t.getY(g),p=t.getZ(g),b=x*i+m*r+p*s,v=x*a+m*c+p*l;b<u&&(u=b),b>h&&(h=b),v<f&&(f=v),v>d&&(d=v)}return Math.min(h-u,d-f)}function rw(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=nw(n),i=iw(n,t);return t.z>.5?i>n0:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>n0}function f0(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let r=0;r<e.length;r+=3)su.set(e[r],e[r+1],e[r+2]).applyMatrix4(t),i[r]=su.x,i[r+1]=su.y,i[r+2]=su.z;return i}function sw(n,e,t){if(!t||t.length<6)return n;let i=f0(e,n),r=u0(t),s=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],c=i[o+1],l=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,g=h-c,x=f-l,m=Math.hypot(d,g,x);if(m<1e-6)continue;let p=d/m,b=g/m,v=x/m,y=!1;for(let A of r){if(Math.abs(p*A.dx+b*A.dy+v*A.dz)<.95)continue;let C=a-A.ax,N=c-A.ay,E=l-A.az,S=C*A.dx+N*A.dy+E*A.dz,z=C-S*A.dx,J=N-S*A.dy,V=E-S*A.dz;if(Math.hypot(z,J,V)>QE)continue;let $=(a-A.ax)*A.dx+(c-A.ay)*A.dy+(l-A.az)*A.dz,ee=(u-A.ax)*A.dx+(h-A.ay)*A.dy+(f-A.az)*A.dz,Q=Math.min($,ee),he=Math.max($,ee);if(Math.min(he,A.len)-Math.max(Q,0)>.01){y=!0;break}}y||s.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(s)}function ow(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function aw(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function cw(n,e=_s){return e===ys?0:e===Ua?n?.visible===!1?0:1:aw(n)}function hd(n,e,t=1,i=ud){let r=Math.max(0,Math.min(1,Number(t)||0)),s=Number.isFinite(i)?i:ud,o=new Oi({color:o0,linewidth:s0,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:r<1,opacity:r<1?r:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${ou};
			end.z += ${ou};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= ${s};
			#else
				gl_FragDepth = gl_FragCoord.z - ${s};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${a0}-${s}-${ou}`,e&&o.resolution.set(e.x,e.y),o}function d0(n,e,t,i){let r=Math.max(0,Math.min(1,Number(e)||0)),s=hd(t,null,r);s.depthTest=!1,s.depthWrite=!1,s.transparent=!0,s.opacity=r;let o=s.onBeforeCompile?.bind(s),a=s.customProgramCacheKey?.bind(s);s.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,s.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},s.needsUpdate=!0;let c=new _i;c.setPositions(n);let l=new Ur(c,s);return l.frustumCulled=!1,l.matrixAutoUpdate=!1,l.renderOrder=1e3,l.raycast=()=>{},l.userData.isPeeledEdgeBatch=!0,l}function au(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function p0(n){if(!n)return;let e=[];n.traverse(t=>{Cn(t)&&e.push(t)});for(let t of e)au(t)}function Or(n,e){n&&n.traverse(t=>{Cn(t)&&(t.visible=e)})}function m0(n,e,t){if(!n)return;let i=Math.max(1,e),r=Math.max(1,t);n.traverse(s=>{if(!Cn(s)||!s.material)return;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a?.resolution&&a.resolution.set(i,r)})}function dd(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!Cn(i)||!i.material)return;let r=Array.isArray(i.material)?i.material:[i.material];for(let s of r){if(!s)continue;let o=s.clippingPlanes?s.clippingPlanes.length:0;s.clippingPlanes=t,s.clipIntersection=!1,o!==t.length&&(s.needsUpdate=!0)}})}function lw(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=l0(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?h0(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?rw(n.geometry)?sw(i,n,t):new Float32Array(0):i}function uw(n,e,t,i,r){n.updateWorldMatrix(!0,!1);let s=lw(n,i,r),o=cu(t,n.matrixWorld),a=x0(n.geometry,o),c=ew(s,a),l=new _i,u=e.geometry;c.length>=6?(l.setPositions(c),e.geometry=l,e.computeLineDistances()):e.geometry=l,u?.dispose?.()}function hw(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let r=i.userData.bpHardEdgePositions;r instanceof Float32Array||(r=l0(i.geometry),i.userData.bpHardEdgePositions=r);let s=h0(r);if(s.length<6)continue;let o=f0(i,s);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function g0(n,e,t={}){let i=t.clippingPlanes??[],r=t.resolution||null,s=t.edgeMode??_s,o=e?hw(n):new Float32Array(0);for(let[a,c]of n)for(let l of c){if(!l||!l.isMesh||!l.geometry||Cn(l))continue;let u=null;for(let d of l.children)if(Cn(d)){u=d;break}if(!e){u&&au(u);continue}u&&!u.isLineSegments2&&(au(u),u=null);let h=cw(l,s),f=ZE(l);if(u){let d=u.material,g=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${a0}-${f}-${ou}`;if(!d||typeof d.customProgramCacheKey!="function"||g!==x){au(u);let m=hd(i,r,h,f),p=new _i;u=new Ur(p,m),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(Na),l.add(u)}else d.color&&d.color.setHex(o0),typeof d.linewidth=="number"&&(d.linewidth=s0),d.clippingPlanes=i,d.clipIntersection=!1,r&&d.resolution&&d.resolution.set(r.x,r.y),ow(d,h),d.needsUpdate=!0}else{let d=hd(i,r,h,f),g=new _i;u=new Ur(g,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(Na),l.add(u)}u.layers.set(Na),uw(l,u,i,a,o)}}function fw(n){if(!n.isMesh||Cn(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function pd(n,e,t,i,r={}){if(!i)return;let s=!!r.reuseDepth,o=!1;if(i.traverse(x=>{Cn(x)&&(o=!0)}),!o){ld(n);return}let a=n.autoClear,c=e.background,l=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,s){Or(i,!0),t.layers.set(Na),n.render(e,t),t.layers.mask=u,e.background=c,e.overrideMaterial=l,n.autoClear=a,ld(n);return}Or(i,!1);let h=[];i.traverse(x=>{!fw(x)||x.visible===!1||(h.push(x),x.visible=!1)});let f=[],d=new Set;e.traverse(x=>{if(!x.isMesh||Cn(x)||x.visible===!1)return;let m=Array.isArray(x.material)?x.material:[x.material];for(let p of m)!p||d.has(p)||(d.add(p),f.push({mat:p,colorWrite:p.colorWrite!==!1,depthWrite:p.depthWrite!==!1}),p.colorWrite=!1,p.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let x of f)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of h)x.visible=!0}Or(i,!0);let g=[];r.opaqueEdgesOnly&&i.traverse(x=>{if(!Cn(x))return;let m=Array.isArray(x.material)?x.material[0]:x.material;m&&m.transparent&&m.opacity<1-1e-4&&(g.push(x),x.visible=!1)}),t.layers.set(Na);try{n.render(e,t)}finally{for(let x of g)x.visible=!0}t.layers.mask=u,e.background=c,e.overrideMaterial=l,n.autoClear=a,ld(n)}function ld(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var y0=!0,_0=5,xd=12,dw=xd,b0=.001,pw=.5,mw=1;function v0(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let r=t.children;if(r)for(let s=0;s<r.length;s++){let o=r[s];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var lu=1e5,vi={value:0},Ht={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:b0},uResolution:{value:new Ve(1,1)}};function md(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=vi.value),t.tPrevViewZ&&(t.tPrevViewZ.value=Ht.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=Ht.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=Ht.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=Ht.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(Ht.uResolution.value)}function Oa(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,r)=>{t?.(i,r),i.uniforms.uPeelStage=vi,i.uniforms.tPrevViewZ=Ht.tPrevViewZ,i.uniforms.tPeelViewZ=Ht.tPeelViewZ,i.uniforms.tOpaqueViewZ=Ht.tOpaqueViewZ,i.uniforms.uViewZEps=Ht.uViewZEps,i.uniforms.uResolution=Ht.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(lu*.5).toFixed(1)}) discard;
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
#endif`)},n.needsUpdate=!0}function gd(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function M0(n){let e=new Ve,t=new qe,i=null,r=null,s=null,o=null,a=null,c=null,l=new di(-1,1,1,-1,0,1),u=new Nn,h=new Kt({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new qe(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new nt(new jn(2,2),h);u.add(f);let d=new Kt({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Jc,blendSrc:xa,blendDst:Dr,blendSrcAlpha:xa,blendDstAlpha:Dr,blendEquation:Kn}),g=new nt(new jn(2,2),d),x=new Nn;x.add(g);let m=new Kt({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:zn}),p=new nt(new jn(2,2),m),b=new Nn;b.add(p);let v=new Kt({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:zn}),y=new nt(new jn(2,2),v),A=new Nn;A.add(y);function R(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function C(I){R();let O=n.autoClear;n.setRenderTarget(I),n.autoClear=!1,n.render(A,l),n.autoClear=O}let N=new Kt({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:bt,clipping:!0,blending:zn});function E(I,O,F={}){m.uniforms.uValue.value=O;let oe=n.autoClear;R(),n.setRenderTarget(I),F.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(b,l),n.autoClear=oe}function S(){i?.dispose(),r?.dispose(),s?.dispose(),o?.dispose(),a?.dispose(),c?.dispose(),i=null,r=null,s=null,o=null,a=null,c=null}let z=0;function J(I,O,F){let oe=Math.max(1,Math.floor(I)),q=Math.max(1,Math.floor(O)),Z=Math.min(1,Math.max(.25,F)),_e=Math.max(1,Math.floor(oe*Z)),re=Math.max(1,Math.floor(q*Z));if(i&&i.width===oe&&i.height===q&&s&&s.width===_e&&s.height===re&&z===Z)return;S(),z=Z,i=new dn(oe,q,{format:on,type:Jn,colorSpace:xt,depthBuffer:!0,stencilBuffer:!1});let fe={format:on,type:kn,depthBuffer:!0,stencilBuffer:!1,magFilter:Xt,minFilter:Xt};r=new dn(_e,re,fe),s=new dn(_e,re,fe),o=new dn(_e,re,fe),a=new dn(_e,re,{format:on,type:lr,colorSpace:xt,depthBuffer:!1,stencilBuffer:!1,magFilter:qt,minFilter:qt}),c=new dn(_e,re,{format:on,type:lr,colorSpace:xt,depthBuffer:!1,stencilBuffer:!1,magFilter:qt,minFilter:qt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,Ht.tOpaqueViewZ.value=r.texture,Ht.uResolution.value.set(_e,re)}function V(I){let O=[],F=[];return I?(I.traverse(oe=>{if(!oe.isMesh||!oe.visible||Cn(oe))return;let q=oe,Z=Array.isArray(q.material)?q.material:[q.material],_e=!1;for(let re of Z)if(re&&re.transparent&&re.opacity<1-1e-4){_e=!0;break}_e?F.push(q):O.push(q)}),{opaque:O,transparent:F}):{opaque:O,transparent:F}}function $(I,O){for(let F of I)F.visible=O}function ee(I,O){I.blending=O.blending,I.blendSrc=O.blendSrc,I.blendDst=O.blendDst,I.blendSrcAlpha=O.blendSrcAlpha,I.blendDstAlpha=O.blendDstAlpha,I.blendEquation=O.blendEquation,I.blendEquationAlpha=O.blendEquation}let Q={meshes:[],sources:[],key:""},he={meshes:[],sources:[],key:""},te="",de="",ne=new Nn,me=new Nn,Me=new Nn,De=[];function j(I){for(let O of I.meshes)O.geometry.dispose();I.meshes=[],I.sources=[],I.key=""}function ie(){for(let I of De){Me.remove(I),I.geometry?.dispose?.();let O=I.material;if(Array.isArray(O))for(let F of O)F?.dispose?.();else O?.dispose?.()}De=[]}function H(){j(Q),j(he),ie(),te="",de=""}function X(I){if(ie(),!I.length)return;let O=new Map,F=new P;for(let q of I){let Z=null;for(let ke of q.children)if(Cn(ke)){Z=ke;break}if(!Z?.geometry)continue;let _e=Z.material,re=_e&&_e.transparent&&typeof _e.opacity=="number"?_e.opacity:1;if(!(re<1-1e-4))continue;let fe=Z.geometry.getAttribute("instanceStart"),Ee=Z.geometry.getAttribute("instanceEnd");if(!fe||!Ee||!fe.count)continue;let Ne=re.toFixed(3),Ae=O.get(Ne);Ae||(Ae={opacity:re,planes:_e.clippingPlanes||[],chunks:[]},O.set(Ne,Ae)),q.updateWorldMatrix(!0,!1);let $e=fe.count,Se=new Float32Array($e*6);for(let ke=0;ke<$e;ke++)F.fromBufferAttribute(fe,ke).applyMatrix4(q.matrixWorld),Se[ke*6]=F.x,Se[ke*6+1]=F.y,Se[ke*6+2]=F.z,F.fromBufferAttribute(Ee,ke).applyMatrix4(q.matrixWorld),Se[ke*6+3]=F.x,Se[ke*6+4]=F.y,Se[ke*6+5]=F.z;Ae.chunks.push(Se)}let oe={stage:vi,prevZ:Ht.tPrevViewZ,peelZ:Ht.tPeelViewZ,opaqueZ:Ht.tOpaqueViewZ,eps:Ht.uViewZEps,resolution:Ht.uResolution};for(let q of O.values()){let Z=0;for(let Ee of q.chunks)Z+=Ee.length;if(Z<6)continue;let _e=new Float32Array(Z),re=0;for(let Ee of q.chunks)_e.set(Ee,re),re+=Ee.length;let fe=d0(_e,q.opacity,q.planes,oe);Me.add(fe),De.push(fe)}}function ye(I,O,F,oe){if(!F.length)return;let q=`${v0(F)}#${v0(O)}`;oe&&oe===te&&q===de&&Q.meshes.length||(Xe(Q,I,F),Xe(he,I,O),Q.sources.length===F.length&&he.sources.length===O.length&&(X(F),te=oe||"",de=q))}function xe(I){return Object.keys(I.attributes).sort().join(",")}function Ce(I){let O=I.geometry,F=O.index?O.toNonIndexed():O.clone();return F.applyMatrix4(I.matrixWorld),F}function Xe(I,O,F){let oe=String(F.length);for(let Z of F){let _e=Array.isArray(Z.material)?"m":Z.material?.id||0;oe+=`.${Z.id}:${_e}`}if(oe===I.key)return;O.updateWorldMatrix(!0,!0),j(I),I.key=oe;let q=new Map;for(let Z of F){if(!Z.geometry||Array.isArray(Z.material)||!Z.material)continue;let _e=`${Z.material.uuid}:${xe(Z.geometry)}`,re=q.get(_e);re||(re={mat:Z.material,meshes:[]},q.set(_e,re)),re.meshes.push(Z)}for(let Z of q.values()){let _e=[];try{for(let Ee of Z.meshes)_e.push(Ce(Ee));let re=Mg(_e,!1);if(!re)continue;let fe=new nt(re,Z.mat);fe.frustumCulled=!1,fe.matrixAutoUpdate=!1,fe.renderOrder=0,fe.userData.isPeelBatch=!0,I.meshes.push(fe),I.sources.push(...Z.meshes)}catch{}finally{for(let re of _e)re.dispose()}}}function Pe(I,O,F,oe){if(!I.meshes.length||I.sources.length!==O.length)return n.render(F,oe),!1;ne.environment=F.environment,ne.environmentIntensity=F.environmentIntensity,ne.fog=F.fog;let q=[];for(let Z of F.children)Z.isLight&&q.push(Z);for(let Z of q)ne.add(Z);for(let Z of I.meshes)ne.add(Z);n.render(ne,oe);for(let Z of I.meshes)ne.remove(Z);for(let Z of q)F.add(Z);return!0}function ce(I,O,F){Pe(Q,F,I,O)}function L(I,O,F){F.length&&Pe(he,F,I,O)}function Ue(I,O,F){if(!he.meshes.length||he.sources.length!==O.length)return!1;me.overrideMaterial=F;for(let oe of he.meshes)me.add(oe);n.render(me,I),me.overrideMaterial=null;for(let oe of he.meshes)me.remove(oe);return!0}function be(I){let O=new Set;for(let F of I){let oe=Array.isArray(F.material)?F.material:[F.material];for(let q of oe)q&&O.add(q)}return[...O]}function Te(I,O,F){if(!F)return;let oe=F.visible,q=I.background,Z=n.autoClear;F.visible=!1,I.background=null,n.autoClear=!1,R(),n.clearDepth(),n.render(I,O),F.visible=oe,I.background=q,n.autoClear=Z}function pe(I){return I.children.filter(O=>O.userData?.blueprintAnnotations)}function We(I,O){for(let F of I)F.visible=O}function W(I,O,F){pe(I).some(oe=>oe.visible)&&Te(I,O,F)}function w(I,O,F,oe={}){Or(F,!1);let q=pe(I),Z=q.map(_e=>_e.visible);We(q,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(I,O),oe.skipEdges||pd(n,I,O,F,{reuseDepth:!!oe.reuseDepth}),q.forEach((_e,re)=>{_e.visible=Z[re]}),W(I,O,F)}function M(I,O,F,oe,q={}){if(!(y0&&(typeof oe=="function"?oe():!!oe)))return vi.value=0,w(I,O,F,{reuseDepth:!0}),!1;if(q.quality!=="high"){vi.value=0,w(I,O,F,{reuseDepth:!0});let ve=q.batchKey||"";if(F&&!q.deferPrime&&ve!==te){let Ze=V(F);ye(F,Ze.opaque,Ze.transparent,ve)}return!0}let{opaque:_e,transparent:re}=V(F);if(!re.length)return vi.value=0,w(I,O,F,{reuseDepth:!0}),!1;F&&ye(F,_e,re,q.batchKey||"");let fe=q.quality==="high",Ee=fe?mw:pw,Ne=fe?xd:_0;n.getDrawingBufferSize(e),J(e.x,e.y,Ee);let Ae=n.autoClear,$e=n.toneMapping,Se=I.background;Se instanceof qe?t.copy(Se):t.set(1118481),h.uniforms.uBackground.value.copy(t);let ke=[];for(let ve of[..._e,...re])ke.push({mesh:ve,visible:ve.visible});let G=be(re),Re=[];for(let ve of G)Oa(ve),Re.push({mat:ve,snap:{blending:ve.blending,blendSrc:ve.blendSrc,blendDst:ve.blendDst,blendSrcAlpha:ve.blendSrcAlpha,blendDstAlpha:ve.blendDstAlpha,blendEquation:ve.blendEquation,blendEquationAlpha:ve.blendEquationAlpha,depthWrite:ve.depthWrite,depthTest:ve.depthTest,transparent:ve.transparent,opacity:ve.opacity,colorWrite:ve.colorWrite,side:ve.side,forceSinglePass:ve.forceSinglePass}});gd(G,!0);let le=new Map;for(let ve of re)le.set(ve,ve.onBeforeRender),ve.onBeforeRender=function(vn,dt,Bt,an,bn,bi){let Wi=Array.isArray(bn)?bn:[bn];for(let Xi of Wi)Xi&&md(Xi);let Vn=le.get(ve);typeof Vn=="function"&&Vn.call(this,vn,dt,Bt,an,bn,bi)};let ge=null;for(let ve of G)if(ve.clippingPlanes?.length){ge=ve.clippingPlanes;break}if(!ge)for(let ve of _e){let Ze=Array.isArray(ve.material)?ve.material:[ve.material];for(let vn of Ze)if(vn?.clippingPlanes?.length){ge=vn.clippingPlanes;break}if(ge)break}N.clippingPlanes=ge||[],N.clipIntersection=!1,I.background=null,n.autoClear=!0,vi.value=0;let Be=[];for(let ve of I.children)ve!==F&&(ve.isLight||(Be.push({obj:ve,visible:ve.visible}),ve.visible=!1));function Oe(){for(let[ve,Ze]of le)ve.onBeforeRender=Ze}function et(){for(let{mat:ve,snap:Ze}of Re)ee(ve,Ze),ve.blendEquationAlpha=Ze.blendEquationAlpha,ve.depthWrite=Ze.depthWrite,ve.depthTest=Ze.depthTest,ve.transparent=Ze.transparent,ve.opacity=Ze.opacity,ve.colorWrite=Ze.colorWrite!==!1,ve.side=Ze.side,ve.forceSinglePass=Ze.forceSinglePass,ve.needsUpdate=!0;for(let{mesh:ve,visible:Ze}of ke)ve.visible=Ze;for(let{obj:ve,visible:Ze}of Be)ve.visible=Ze;return Oe(),gd(G,!1),vi.value=0,I.background=Se,I.overrideMaterial=null,n.toneMapping=$e,n.setRenderTarget(null),n.autoClear=!0,w(I,O,F),n.autoClear=Ae,!1}if($(re,!1),$(_e,!0),Or(F,!1),R(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),L(I,O,_e),n.setRenderTarget(r),n.setClearColor(0,1),E(r,lu,{clearDepth:!0}),fe){let ve=new Float32Array(4);try{n.readRenderTargetPixels(r,2,2,1,1,ve)}catch{ve[0]=0}if(!Number.isFinite(ve[0])||ve[0]<lu*.5)return et()}let ut=I.overrideMaterial;n.setRenderTarget(r),n.autoClear=!1,Ue(O,_e,N)||(I.overrideMaterial=N,n.render(I,O),I.overrideMaterial=ut),n.autoClear=!0,Ht.tOpaqueViewZ.value=r.texture,C(a),E(o,0),Ht.tPrevViewZ.value=o.texture,$(_e,!1),$(re,!0),Or(F,!1);let Pt=!1;for(let ve=0;ve<Ne;ve++){Ht.tPrevViewZ.value=o.texture,Ht.tPeelViewZ.value=o.texture,vi.value=1;for(let{mat:dt}of Re)dt.depthWrite=!0,dt.depthTest=!0,dt.colorWrite=!0,dt.transparent=!0,dt.forceSinglePass=!0,ee(dt,{blending:zn,blendSrc:Dr,blendDst:ga,blendSrcAlpha:Dr,blendDstAlpha:ga,blendEquation:Kn}),md(dt);R(),n.setRenderTarget(s),n.setClearColor(0,1),n.clear(!1,!0,!1),E(s,lu),n.setRenderTarget(s),n.autoClear=!1,ce(I,O,re),n.autoClear=!0,Ht.tPeelViewZ.value=s.texture,vi.value=2;for(let{mat:dt}of Re)dt.depthWrite=!1,dt.depthTest=!1,dt.colorWrite=!0,dt.transparent=!0,dt.forceSinglePass=!0,ee(dt,{blending:ui,blendSrc:Zs,blendDst:Kr,blendSrcAlpha:Dr,blendDstAlpha:Kr,blendEquation:Kn}),md(dt);C(c);let Ze=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(c),ce(I,O,re),n.autoClear=Ze,De.length&&c){for(let Bt of De)Bt.material?.resolution?.set(c.width,c.height);let dt=O.layers.mask;O.layers.set(0),n.autoClear=!1,n.render(Me,O),O.layers.mask=dt,n.autoClear=!0}Pt=!0,d.uniforms.tSrc.value=c.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(x,l),n.autoClear=!0;let vn=o;o=s,s=vn}if(!Pt)return et();for(let{mat:ve,snap:Ze}of Re)ee(ve,Ze),ve.blendEquationAlpha=Ze.blendEquationAlpha,ve.depthWrite=Ze.depthWrite,ve.depthTest=Ze.depthTest,ve.transparent=Ze.transparent,ve.opacity=Ze.opacity,ve.colorWrite=Ze.colorWrite!==!1,ve.side=Ze.side,ve.forceSinglePass=Ze.forceSinglePass;for(let{mesh:ve,visible:Ze}of ke)ve.visible=Ze;for(let{obj:ve,visible:Ze}of Be)ve.visible=Ze;Oe(),Or(F,!0),gd(G,!1),vi.value=0,I.background=Se,n.toneMapping=$e,n.setRenderTarget(null),n.autoClear=!0,n.render(u,l);let Ye=pe(I),Rt=Ye.map(ve=>ve.visible);return We(Ye,!1),fe&&F&&pd(n,I,O,F,{opaqueEdgesOnly:De.length>0}),Ye.forEach((ve,Ze)=>{ve.visible=Rt[Ze]}),W(I,O,F),n.autoClear=Ae,!0}function U(){H(),S(),h.dispose(),f.geometry.dispose(),d.dispose(),g.geometry.dispose(),m.dispose(),p.geometry.dispose(),v.dispose(),y.geometry.dispose(),N.dispose()}return{render:M,dispose:U,MAX_PEELS:dw,MAX_PEELS_FAST:_0,MAX_PEELS_HIGH:xd,VIEW_Z_EPSILON:b0,USE_DEPTH_PEEL:y0}}var E0="blueprints.materialMode",uu="solid",Fa="realistic",gw={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},xw={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},yw=2e-6,_w=2;function _d(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),r=n.customProgramCacheKey?.bind(n),s=yw.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if defined( USE_LOGDEPTHBUF )
	{
		float bpFaceBias = ${t}.0 * ${s};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${r?r():n.type}|bpLayerDepth-r${_w}-${t}`,n.needsUpdate=!0}var vw=[];function w0(n,e,t){let i=new Set(n),r=Array.isArray(e)&&e.length?e:vw,s=typeof t=="function"?t:c=>c;function o(c){let l=[];for(let u of c){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),l.push({type:"leaf",id:u,label:s(u)});continue}let h=o(u.children||[]);h.length&&l.push({type:"group",id:u.id,label:s(u.id),children:h})}return l}let a=o(r);if(i.size){let c=[...i].sort((l,u)=>l.localeCompare(u)).map(l=>({type:"leaf",id:l,label:s(l)}));a.push({type:"group",id:"other",label:s("other"),children:c})}return a}function T0(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let r of e)r.type==="group"&&t.set(r.id,hu(r));let i={};for(let[r,s]of Object.entries(n)){let o=t.get(r);if(o&&o.length)for(let a of o)i[a]=s;else i[r]=s}return i}function hu(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...hu(t));return e}function bw(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let r of n.children||[]){if(!r?.userData?.isEdgeOverlay||!r.material)continue;let s=Array.isArray(r.material)?r.material:[r.material];for(let o of s)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function dr(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),r=t.edgeMode??"transparent";for(let s of n){if(!s)continue;if(i<=0||s.userData?.bpIfcHidden){s.visible=!1;continue}if(s.visible=!0,!s.isMesh)continue;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a&&(i<1?(a.transparent=!0,a.opacity=i,a.depthWrite=!1,a.depthTest=!0,a.side=bt,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=bt,a.forceSinglePass=!1,a.blending=ui,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof s.userData.opaqueRenderOrder!="number"&&(s.userData.opaqueRenderOrder=s.renderOrder||0),s.renderOrder=i<1?0:s.userData.opaqueRenderOrder,bw(s,i,r);for(let a of s.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=s.renderOrder;let c=Array.isArray(a.material)?a.material:[a.material];for(let l of c)l&&(l.opacity=i,l.transparent=i<1,l.depthWrite=i>=1,l.depthTest=!0,l.forceSinglePass=i<1,l.side=bt,l.needsUpdate=!0)}}}var Mw={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},yd=new Map;function Sw(n){if(!n||n==="none")return null;let e=yd.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let r=i.getContext("2d");if(!r)return null;if(n==="wood"){r.fillStyle="#c49858",r.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,c=130+o*17%50;r.strokeStyle=`rgba(${c-40}, ${c-60}, ${c-100}, 0.55)`,r.lineWidth=1.2,r.beginPath(),r.moveTo(0,o+a*.15),r.lineTo(t,o-a*.1),r.stroke()}for(let o=0;o<60;o++){let a=o*37%t,c=o*53%t;r.fillStyle="rgba(70, 40, 15, 0.22)",r.fillRect(a,c,2,7+o%5)}}else if(n==="foam"){r.fillStyle="#9ed468",r.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let c=o/7%2*3.5,l=2.4+a*o%5*.2;r.beginPath(),r.arc(a+c+3.5,o+3.5,l,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.55)",r.fill(),r.strokeStyle="rgba(40,90,30,0.35)",r.stroke()}}else if(n==="plaster"){let o=r.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let c=200+a*13%45;o.data[a]=c,o.data[a+1]=c-10,o.data[a+2]=c-22,o.data[a+3]=255}r.putImageData(o,0,0)}else if(n==="wool"){r.fillStyle="#88c860",r.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,c=o*91%t;r.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",r.fillRect(a,c,1+o%2,2+o%3)}}else if(n==="metal"){let o=r.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),r.fillStyle=o,r.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(0,a,t,2),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(0,a+4,t,2)}else if(n==="masonry"){r.fillStyle="#b88868",r.fillRect(0,0,t,t);let o=16,a=32;for(let c=0;c<t/o;c++){let l=c%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+l,f=c*o;r.fillStyle=`rgba(${170+(c+u)%3*18}, ${110+c%4*10}, ${70+u%3*12}, 0.75)`,r.fillRect(h+1,f+1,a-2,o-2),r.strokeStyle="rgba(70,45,30,0.55)",r.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let s=new rr(i);return s.colorSpace=xt,s.wrapS=hi,s.wrapT=hi,s.repeat.set(2.5,2.5),s.needsUpdate=!0,yd.set(n,s),s}function S0(n){return new qe(n[0]/255,n[1]/255,n[2]/255)}function Ew(n){return gw[n]||[160,160,160]}function ww(n,e,t=0){n.side=bt,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],_d(n,t),Oa(n),n.needsUpdate=!0}function A0(n){n.computeBoundingBox();let e=n.boundingBox,t=new P;e.getSize(t);let i=Math.max(t.x,1e-6),r=Math.max(t.y,1e-6),s=Math.max(t.z,1e-6),o=Math.max(i,r,s);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),c=n.getAttribute("normal");if(!a)return o;let l=n.getAttribute("uv");if(l&&l.count===a.count)return o;let u=new Float32Array(a.count*2),h=new P;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(c.getX(f)),g=Math.abs(c.getY(f)),x=Math.abs(c.getZ(f)),m,p;g>=d&&g>=x?(m=(h.x-e.min.x)/i,p=(h.z-e.min.z)/s):d>=x?(m=(h.z-e.min.z)/s,p=(h.y-e.min.y)/r):(m=(h.x-e.min.x)/i,p=(h.y-e.min.y)/r),u[f*2]=m,u[f*2+1]=p}return n.setAttribute("uv",new vt(u,2)),o}function Tw(n,e){let t=Sw(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let r=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(r,r),i}function R0(n,e,t={}){let i=t.clippingPlanes??null,r=e===Fa,s=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,c]of n){let l=Ew(a),u=xw[a]??0,h=1e3;if(r)for(let p of c)p.isMesh&&p.geometry&&(h=Math.max(h,A0(p.geometry)));let f=1,d;if(r){let p=Mw[a]||{color:l,roughness:.7,metalness:0,map:"none"};f=typeof p.opacity=="number"?p.opacity:1;let b=S0(p.color),v=Tw(p.map||"none",h);p.clearcoat?d=new sn({color:b,map:v,roughness:p.roughness,metalness:p.metalness,clearcoat:p.clearcoat,clearcoatRoughness:p.clearcoatRoughness??.3,envMapIntensity:.85}):d=new Tn({color:b,map:v,roughness:p.roughness,metalness:p.metalness,envMapIntensity:p.metalness>.05?1.1:.55})}else d=new Ot({color:S0(l)});ww(d,i,u),d.userData.presetOpacity=f;let g=new Set;for(let p of c){if(!p.isMesh)continue;let b=p.material;if(b){let v=Array.isArray(b)?b:[b];for(let y of v)g.add(y)}p.material=d,p.userData.opaqueRenderOrder=u,p.renderOrder=u}for(let p of g)p!==d&&(p.map&&[...yd.values()].includes(p.map)?p.map=null:p.map&&(p.map.dispose?.(),p.map=null),p.dispose?.());let x=1;s&&(s instanceof Map?x=s.has(a)?s.get(a):1:typeof s[a]=="number"&&(x=s[a]));let m=Math.max(0,Math.min(1,f*(Number(x)||0)));dr(c,m,{edgeMode:o})}}function C0(n,e){let i=(Array.isArray(n)?n:[n]).map(r=>{if(!r)return new Tn({color:13421772,roughness:.65,metalness:0,side:Bn});let s=r.color?r.color.clone():new qe(13421772),o=typeof r.roughness=="number"?r.roughness:.65,a=typeof r.metalness=="number"?r.metalness:0,c=null;r.map&&e&&(A0(e),c=r.map.clone(),c.needsUpdate=!0);let l=new Tn({color:s,map:c,roughness:o,metalness:a,side:Bn,transparent:!!r.transparent,opacity:typeof r.opacity=="number"?r.opacity:1});return l.clippingPlanes=null,l.clipIntersection=!1,l});return Array.isArray(n)?i:i[0]}function P0(){try{let n=localStorage.getItem(E0);if(n===Fa||n===uu)return n}catch{}return uu}function I0(n){try{localStorage.setItem(E0,n)}catch{}}var ki=1e-5,D0=new WeakMap;function $n(n,e,t,i){let r=t/(t-i);return n.clone().lerp(e,r)}function Aw(n,e,t){let[i,r,s]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(r),c=e.distanceToPoint(s),l=o>=-ki,u=a>=-ki,h=c>=-ki,f=(l?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,r,s]);return}if(f===0)return;let d=[i,r,s],g=[o,a,c],x=[l,u,h];if(f===1){let v=x.findIndex(Boolean),y=(v+1)%3,A=(v+2)%3,R=d[v],C=$n(d[v],d[y],g[v],g[y]),N=$n(d[v],d[A],g[v],g[A]);t.push([R,C,N]);return}let m=x.findIndex(v=>!v),p=(m+1)%3,b=(m+2)%3;if(x[p]){let v=d[p],y=d[b],A=$n(d[m],d[p],g[m],g[p]),R=$n(d[m],d[b],g[m],g[b]);t.push([v,y,A]),t.push([y,R,A])}else{let v=d[b],y=$n(d[m],d[p],g[m],g[p]),A=$n(d[m],d[b],g[m],g[b]);t.push([v,y,A])}}function Rw(n,e){let[t,i,r]=n,s=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(r),c=s>=-ki,l=o>=-ki,u=a>=-ki,h=(c?1:0)+(l?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,r],d=[s,o,a],g=[c,l,u];if(h===1){let b=g.findIndex(Boolean),v=(b+1)%3,y=(b+2)%3;return[$n(f[b],f[v],d[b],d[v]),$n(f[b],f[y],d[b],d[y])]}let x=g.findIndex(b=>!b),m=(x+1)%3,p=(x+2)%3;return g[m]?[$n(f[x],f[m],d[x],d[m]),$n(f[x],f[p],d[x],d[p])]:[$n(f[x],f[m],d[x],d[m]),$n(f[x],f[p],d[x],d[p])]}function Cw(n,e,t){let i=n.clone(),r=e.clone();for(let s of t){let o=s.distanceToPoint(i),a=s.distanceToPoint(r),c=o>=-ki,l=a>=-ki;if(c&&l)continue;if(!c&&!l)return null;let u=$n(i,r,o,a);c?r=u:i=u}return i.distanceToSquared(r)<ki*ki?null:[i,r]}function Pw(n,e){let t=n;for(let i of e){let r=[];for(let s of t)Aw(s,i,r);if(t=r,t.length===0)break}return t}function Iw(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new P,r=[],s=n.getIndex();function o(a,c,l){r.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone()])}if(s)for(let a=0;a<s.count;a+=3)o(s.getX(a),s.getX(a+1),s.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return r}function Dw(n){let e=n.getAttribute("position");if(!e)return[];let t=new P,i=[],r=n.getIndex();function s(o,a,c){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,c).clone()])}if(r)for(let o=0;o<r.count;o+=3)s(r.getX(o),r.getX(o+1),r.getX(o+2));else for(let o=0;o<e.count;o+=3)s(o,o+1,o+2);return i}var vs=1e-6,L0=2e-4,Lw=2e-4,N0=new WeakMap;function Nw(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function U0(n){let e=t=>Math.round(t/vs);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function B0(n,e){let t=Nw(e),i=N0.get(n);if(i&&i.key===t)return i;let r=[],s=[],o=D0.get(n);if(o||(o=Dw(n),D0.set(n,o)),o.length&&e?.length)for(let c=0;c<e.length;c++){let l=e[c],u=e.filter((f,d)=>d!==c),h=[];for(let f of o){let d=Rw(f,l);if(!d)continue;let g=u.length?Cw(d[0],d[1],u):d;g&&(h.push(g),r.push(g[0].x,g[0].y,g[0].z,g[1].x,g[1].y,g[1].z))}s.push(h)}let a={key:t,segments:new Float32Array(r),perPlane:s};return N0.set(n,a),a}function Uw(n,e,t){let i=new Map;for(let c of n.keys())i.set(c,c);function r(c){let l=c;for(;i.get(l)!==l;){let u=i.get(i.get(l));i.set(l,u),l=u}return l}function s(c){let l=r(c),u=0;for(let h of t.get(l)||[])e[h].dead||u++;return u}function o(){let c=[];for(let l of n.keys())r(l)===l&&s(l)%2&&c.push(l);return c}let a=L0*L0;for(let c=0;c<e.length+2;c++){let l=o();if(l.length<2)break;let u=-1,h=-1,f=1/0;for(let p=0;p<l.length;p++){let b=n.get(l[p]);for(let v=p+1;v<l.length;v++){let y=n.get(l[v]),A=b.x-y.x,R=b.y-y.y,C=b.z-y.z,N=A*A+R*R+C*C;N<f&&(f=N,u=p,h=v)}}if(f>a)break;let d=l[u],g=l[h],x=n.get(d),m=n.get(g);x.add(m).multiplyScalar(.5);for(let p of t.get(g)||[]){let b=e[p];if(b.dead)continue;let v=r(b.a===g?b.b:b.a);if(v===d){b.dead=!0;continue}b.a=d,b.b=v,t.has(d)||t.set(d,[]),t.get(d).push(p)}i.set(g,d)}}function Ow(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let c=U0(o),l=U0(a);if(c===l)continue;e.has(c)||e.set(c,o.clone()),e.has(l)||e.set(l,a.clone());let u=t.length;t.push({a:c,b:l,used:!1,dead:!1}),i.has(c)||i.set(c,[]),i.has(l)||i.set(l,[]),i.get(c).push(u),i.get(l).push(u)}Uw(e,t,i);function r(o,a){let c=i.get(o)||[],l=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of c){if(t[d].used||t[d].dead)continue;if(!f)return d;let g=t[d],x=g.a===o?g.b:g.a,m=e.get(x),p=h.x-f.x,b=h.y-f.y,v=h.z-f.z,y=m.x-h.x,A=m.y-h.y,R=m.z-h.z,C=p*y+b*A+v*R;C>u&&(u=C,l=d)}return l}let s=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],c=[],l=o,u=t[l].a,h=u,f=null,d=!1,g=t.length+2;for(let x=0;x<g;x++){t[l].used=!0,c.push(l),a.push(e.get(u).clone());let m=t[l].a===u?t[l].b:t[l].a;if(m===h){d=!0;break}let p=r(m,u);if(p<0)break;f=u,u=m,l=p}d&&a.length>=3&&s.push(a)}return s}function Fw(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new P(1,0,0):new P(0,1,0),i=new P().crossVectors(t,e).normalize(),r=new P().crossVectors(e,i).normalize();return{u:i,v:r,n:e}}function Bw(n,e,t,i){return n.map(r=>{let s=r.clone().sub(e);return{x:s.dot(t),y:s.dot(i),p3:r}})}function zw(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function kw(n){return zw(n)<0&&n.reverse(),n}function O0(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){let o=t[r].y,a=t[s].y,c=t[r].x,l=t[s].x;o>e!=a>e&&n<(l-c)*(e-o)/(a-o+0)+c&&(i=!i)}return i}function pr(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function Hw(n,e,t,i){let r=pr(n,e,t),s=pr(n,e,i),o=pr(t,i,n),a=pr(t,i,e);return r*s<0&&o*a<0}function F0(n,e,t,i){let r=t.length;for(let s=0;s<r;s++){let o=(s+1)%r;if(!(i>=0&&(s===i||o===i))&&Hw(n,e,t[s],t[o]))return!0}return!1}function Vw(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],r=-1,s=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],g=n[(f+1)%o];if(d.y>i.y==g.y>i.y)continue;let x=g.y-d.y;if(Math.abs(x)<1e-15)continue;let m=(i.y-d.y)/x;if(m<-1e-8||m>1+1e-8)continue;let p=d.x+m*(g.x-d.x);p>=i.x-1e-8&&p<s&&(s=p,r=f)}let a=[];r>=0&&a.push(r,(r+1)%o);let c=0,l=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<l&&(l=d,c=f)}a.push(c);let u=-1;for(let f of a)if(!F0(i,n[f],n,f)&&!F0(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function vd(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=vs*vs}function Gw(n,e,t,i){if(vd(n,e)||vd(n,t)||vd(n,i))return!1;let r=pr(e,t,n),s=pr(t,i,n),o=pr(i,e,n),a=r<-1e-14||s<-1e-14||o<-1e-14,c=r>1e-14||s>1e-14||o>1e-14;return!(a&&c)}function Ww(n){let e=[];for(let r of n){let s=e[e.length-1];s&&(s.x-r.x)**2+(s.y-r.y)**2<vs*vs||e.push(r)}if(e.length>=2){let r=e[0],s=e[e.length-1];(r.x-s.x)**2+(r.y-s.y)**2<vs*vs&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let r=!1,s=e.length;for(let o=0;o<s;o++){let a=(o+s-1)%s,c=(o+1)%s,l=e[a],u=e[o],h=e[c],f=pr(l,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),r=!0;break}let d=!1;for(let g=0;g<s;g++)if(!(g===o||g===a||g===c)&&Gw(e[g],l,u,h)){d=!0;break}if(!d){t.push([l.p3,u.p3,h.p3]),e.splice(o,1),r=!0;break}}if(!r)break}return e.length===3&&pr(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function Xw(n,e,t){if(!n.length)return[];let{u:i,v:r,n:s}=Fw(e.normal),o=n[0][0],a=n.map(u=>kw(Bw(u,o,i,r))),c=a.map((u,h)=>{let f=u[0],d=0;for(let g=0;g<a.length;g++)g!==h&&O0(f.x,f.y,a[g])&&d++;return d}),l=[];for(let u=0;u<a.length;u++){if(c[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(c[d]!==c[u]+1||!O0(a[d][0].x,a[d][0].y,h))continue;let g=Vw(h,a[d]);g&&(h=g)}let f=Ww(h);for(let d of f)l.push(d.map(g=>g.clone().addScaledVector(s,t)))}return l}function z0(n,e){return!n||!e?.length?[]:B0(n,e).perPlane}function k0(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=Ow(n),r=Xw(i,e,Lw+Math.max(0,t));if(!r.length)return new Float32Array(0);let s=new Float32Array(r.length*9),o=0;for(let[a,c,l]of r)s[o++]=a.x,s[o++]=a.y,s[o++]=a.z,s[o++]=c.x,s[o++]=c.y,s[o++]=c.z,s[o++]=l.x,s[o++]=l.y,s[o++]=l.z;return s}function x0(n,e){return!n||!e?.length?new Float32Array(0):B0(n,e).segments}function cu(n,e){if(!n?.length)return[];let t=new tt().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function qw(n){let e=new Float32Array(n.length*9),t=0;for(let[r,s,o]of n)e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new Tt;return i.setAttribute("position",new vt(e,3)),i.computeVertexNormals(),i}function H0(n,e){if(!n.visible||!n.geometry)return null;let t=Iw(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?Pw(t,e):t;if(i.length===0)return null;let r=qw(i),s=C0(n.material,r),o=new nt(r,s);return o.name=n.name,o}var Yw=5e-5;function du(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function bd(n){return n?Array.isArray(n)?n[0]||null:n:null}function G0(n,e){let t;return n.isMeshPhysicalMaterial?t=new sn:n.isMeshStandardMaterial?t=new Tn:t=new Ot,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=bt,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,_d(t,n.userData?.layerDepthBias||0),Oa(t),t.needsUpdate=!0,t}function fu(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function $w(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function Zw(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function W0(n,e){let t=new Set;for(let i of n){let r=i.parent;if(!r||t.has(r))continue;t.add(r);let s=Zw(r,e);if(s)return s}return null}function V0(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let r=bd(i.material);r&&(e.color&&r.color&&r.color.copy(e.color),r.opacity=typeof e.opacity=="number"?e.opacity:1,r.transparent=!!e.transparent,r.depthWrite=e.depthWrite!==!1,r.depthTest=e.depthTest!==!1,r.forceSinglePass=!!e.forceSinglePass,r.side=bt,r.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function Kw(n,e,t,i){let r=e.filter(d=>d?.isMesh&&d.visible&&!du(d)&&d.geometry),s=W0(e,n);if(!r.length||!t.length){s&&fu(s);return}let o=r[0],a=o.parent;if(!a)return;s&&s.parent!==a&&fu(s);let c=s&&s.parent===a?s:new Dt;for(let d of[...c.children])fu(d);c.parent||(c.name=`${n}__caps`,c.userData.isSectionCap=!0,c.userData.capLabel=n,a.add(c));let l=bd(o.material);if(!l)return;a.updateWorldMatrix(!0,!0);let u=new tt().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of r){d.updateWorldMatrix(!0,!1);let g=cu(t,d.matrixWorld),x=z0(d.geometry,g);for(let m=0;m<t.length;m++){let p=x[m]||[];for(let[b,v]of p)f[m].push([b.clone().applyMatrix4(d.matrixWorld),v.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let g=k0(f[d],t[d],h*Yw);if(g.length<9)continue;for(let b=0;b<g.length;b+=3){let v=new P(g[b],g[b+1],g[b+2]).applyMatrix4(u);g[b]=v.x,g[b+1]=v.y,g[b+2]=v.z}let x=new Tt;x.setAttribute("position",new vt(g,3)),x.computeVertexNormals();let m=t.filter((b,v)=>v!==d),p=new nt(x,G0(l,m));p.name=`${n}__cap${d}`,p.userData.isSectionCap=!0,p.userData.capPlaneIndex=d,p.userData.capLabel=n,p.renderOrder=o.renderOrder,p.raycast=()=>{},c.add(p)}c.userData.bpCapSig=i,c.userData.bpCapMatUuid=l.uuid,c.visible=c.children.length>0}function Md(n,e){let t=e||[],i=$w(t);for(let[r,s]of n){let o=(s||[]).filter(u=>u&&!du(u));if(!o.length)continue;let a=o.filter(u=>u.visible),c=W0(o,r);if(!t.length||!a.length){c&&fu(c);continue}let l=bd(a[0].material);if(c&&c.userData.bpCapSig===i&&l&&c.userData.bpCapMatUuid===l.uuid&&c.children.length){V0(c,l,a[0].renderOrder||0);continue}if(c&&c.userData.bpCapSig===i&&l&&c.children.length){for(let u of c.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((x,m)=>m!==f):t;u.material=G0(l,d);let g=Array.isArray(h)?h:[h];for(let x of g)x&&(x.map=null),x?.dispose?.()}c.userData.bpCapMatUuid=l.uuid,V0(c,l,a[0].renderOrder||0);continue}Kw(r,o,t,i)}}var jw=2,Jw=.45,X0=.015;function Sd(n){let e=new It().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:X0};let t=new P;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),r=i>jw?Jw/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:r,liftM:X0}}function q0(n,e=Sd(n)){let{cx:t,cz:i,minY:r,scale:s,liftM:o}=e;return n.position.set(-t*s,-r*s+o,-i*s),n.scale.setScalar(s),n.updateMatrixWorld(!0),e}var Qw=`
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
`,Y0=!1;function e1(){if(Y0)return;Y0=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=Qw,document.head.appendChild(n)}function $0(n){e1();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),r=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function c(){return r.matches}function l(){return a}function u(){for(let W of o)W(a)}function h(W){o.push(W),W(a)}function f(){if(!e||!i)return;let W=document.getElementById("sheet-inspector"),w=document.getElementById("sheet-main");if(W&&!W.hidden&&w?.hidden){let fe=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(fe)&&fe>0)return fe}let M=document.getElementById("section-view"),U=document.getElementById("section-cuts"),I=t?.offsetHeight||22,O=16,F=0;if(M&&(F+=M.offsetHeight),U){let fe=U.querySelector(".sheet-title"),Ee=U.querySelector(".cut-row");F+=32,fe&&(F+=fe.offsetHeight+8),Ee?F+=Ee.offsetHeight:F+=U.offsetHeight}let oe=I+F+O,q=window.innerHeight||640,Z=Math.round(q*.28),_e=Math.round(q*.45),re=Math.max(Z,Math.min(_e,Math.round(oe)));return e.style.setProperty("--sheet-partial-h",`${re}px`),re}function d(){f(),!c()&&a==="partial"&&u()}function g(W){let w=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${W}`).trim(),M=parseFloat(w);return Number.isFinite(M)?M:0}function x(){let W={top:0,right:0,bottom:0,left:0};if(!e)return W;if(c()){if(a!=="open")return W;let M=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(M)),bottom:0,left:0}}if(a!=="partial")return W;let w=Math.round(j()+g("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,w)),left:0}}function m(W,w={}){if(!e)return;(c()?["closed","open"]:["peek","partial","full"]).includes(W)||(W=c()?"open":"peek"),a=W,e.dataset.detent=W,e.classList.toggle("sheet-open",W!=="peek"&&W!=="closed"),document.body.classList.toggle("sheet-open",W!=="peek"&&W!=="closed"),y(),w.silent||u()}function p(){c()?m("open"):m("peek"),f()}let b=document.getElementById("top-chrome"),v=document.getElementById("sheet-toggle");if(!v&&b){let W=b.querySelector(".top-chrome-end");W||(W=document.createElement("div"),W.className="top-chrome-end",b.append(W)),v=document.createElement("button"),v.type="button",v.id="sheet-toggle",v.className="chrome-btn sheet-toggle",W.append(v)}function y(){if(!v)return;let W=a==="open";v.setAttribute("aria-expanded",W?"true":"false"),v.setAttribute("aria-label",W?"Hide controls":"Show controls"),v.title=W?"Hide controls":"Show controls",v.textContent=W?"\u203A":"\u2039"}v?.addEventListener("click",()=>{c()&&m(a==="open"?"closed":"open")});let A=!1,R=null,C=!1,N=!1,E=0,S=0,z=0,J=0,V="peek",$=0,ee=0,Q=0,he=0,te=0,de=null,ne=12,me=28,Me='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function De(){return Math.max(t?.offsetHeight||34,34)+8}function j(){return f()||window.innerHeight*.38}function ie(){let W=window.innerHeight||640;return Math.min(W*.92,W-72)}function H(){return e?.offsetWidth||0}function X(W){return W instanceof Element?!!W.closest(Me):!1}function ye(){if(c()){m(a==="open"?"closed":"open");return}m(a==="peek"?"partial":a==="partial"?"full":"peek")}function xe(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Ce(W,w,M){if(e){A=!0,C=!1,R=w,N=!1,V=a,E=W.clientY,S=W.clientX,$=E,ee=S,Q=performance.now(),he=0,te=0,J=M,de=W.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${J}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(W.pointerId)}catch{}}}function Xe(W){if(!(!e||!t)&&!(W.target!==t&&!t.contains(W.target)&&W.target!==e)){A=!0,C=!1,R="narrow",N=!1,V=a,e.classList.add("is-dragging"),E=W.clientY,S=W.clientX,$=E,ee=S,Q=performance.now(),he=0,te=0,z=e.getBoundingClientRect().height,de=W.pointerId;try{t.setPointerCapture(W.pointerId)}catch{}W.preventDefault()}}function Pe(W){if(!e||W.pointerType==="mouse"&&W.button!==0||W.target instanceof Element&&W.target.closest(".chrome-btn"))return;let w=H();if(a==="closed"){let M=window.innerWidth-me-g("r");if(W.clientX<M)return;Ce(W,"wide-open",w),W.preventDefault();return}e.contains(W.target)&&(X(W.target)||(A=!0,C=!0,R="wide-close",N=!1,V=a,E=W.clientY,S=W.clientX,$=E,ee=S,Q=performance.now(),he=0,te=0,J=0,de=W.pointerId))}function ce(W){c()?Pe(W):Xe(W)}function L(W){if(!A||!e||de!=null&&W.pointerId!==de)return;let w=performance.now(),M=Math.max(1,w-Q),U=Math.hypot(W.clientX-S,W.clientY-E);if(C){if(U<=ne)return;let oe=W.clientX-S,q=W.clientY-E;if(Math.abs(oe)<Math.abs(q)*1.15||oe<=0){A=!1,C=!1,R=null,de=null;return}C=!1,N=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(W.pointerId)}catch{}W.preventDefault()}if(U>ne&&(N=!0),R==="narrow"){let oe=E-W.clientY;he=($-W.clientY)/M*1e3,$=W.clientY,Q=w;let q=De(),Z=ie(),_e=Math.max(q,Math.min(Z,z+oe));e.style.height=`${_e}px`;return}let I=W.clientX-S;te=(W.clientX-ee)/M*1e3,ee=W.clientX,Q=w;let O=H(),F=Math.max(0,Math.min(O,J+I));e.style.transform=`translateX(${F}px)`}function Ue(W,w){let M=[{name:"peek",h:De()},{name:"partial",h:j()},{name:"full",h:ie()}],U=Math.max(0,M.findIndex(Z=>Z.name===V)),I=M[U].h;if(Math.abs(W-I)<36&&Math.abs(w)<1100)return V;let O=W+w*.05,F=(M[0].h+M[1].h)/2,oe=(M[1].h+M[2].h)/2,q=O<F?0:O<oe?1:2;if(q>U+1&&(q=U+1),q<U-1&&(q=U-1),q===2&&U<2){let Z=oe+(M[2].h-oe)*.25;W<Z&&w<1400&&(q=1)}return M[q].name}function be(W,w){let M=H();return M<=0||Math.abs(W-(V==="closed"?M:0))<28&&Math.abs(w)<800?V:w>900?"closed":w<-900?"open":W>M*.45?"closed":"open"}function Te(W){if(!A||!e||de!=null&&W.pointerId!==de)return;let w=R,M=C;if(A=!1,C=!1,R=null,de=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),M&&!N)return;if(!N){w==="narrow"?(e.style.height="",ye()):w==="wide-open"?(xe(),m("open")):xe();return}if(w==="narrow"){let O=e.getBoundingClientRect().height;e.style.height="",m(Ue(O,he));return}let U=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),I=U?parseFloat(U[1]):0;xe(),m(be(I,te))}t?.addEventListener("pointerdown",W=>{c()||ce(W)}),t?.addEventListener("pointermove",L),t?.addEventListener("pointerup",Te),t?.addEventListener("pointercancel",Te),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",W=>{c()&&Pe(W)},{capture:!0}),document.addEventListener("pointermove",L,{capture:!0}),document.addEventListener("pointerup",Te,{capture:!0}),document.addEventListener("pointercancel",Te,{capture:!0});let pe=()=>{e&&(e.style.height=""),xe(),i&&(i.style.overflow=""),p()};r.addEventListener?r.addEventListener("change",pe):r.addListener(pe);function We(){n(s.matches)}return We(),s.addEventListener?s.addEventListener("change",We):s.addListener(We),window.addEventListener("resize",()=>{f(),u()}),p(),y(),{getDetent:l,getSafeInsets:x,onDetentChange:h,refreshPartialHeight:d,setDetent:m}}function pu(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,r=!!n.thumbScrubOnly,s=Ba(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let c=document.createElement("div");c.className="coop-range-fill";let l=document.createElement("div");l.className="coop-range-thumb",a.append(c,l),o.append(a);let u=10,h=14,f=null,d=0,g=0,x=!1,m=!1,p=!1,b=!0;function v(){let $=`${(t===e?0:(s-e)/(t-e))*100}%`;c.style.width=$,l.style.left=$,o.setAttribute("aria-valuenow",String(s));let ee=n.formatAriaValue?.(s)??String(s);o.setAttribute("aria-valuetext",ee)}function y(V,$){let ee=typeof l.getBoundingClientRect=="function"?l.getBoundingClientRect():null;return!ee||!(ee.width>0)||!(ee.height>0)?!0:V>=ee.left-h&&V<=ee.right+h&&$>=ee.top-h&&$<=ee.bottom+h}function A(V,$="input"){let ee=t1(Ba(V,e,t),e,t,i);if(ee===s&&$==="silent"){v();return}s=ee,v(),($==="input"||$==="change")&&n.onInput?.(s),$==="change"&&n.onChange?.(s)}function R(V){let $=a.getBoundingClientRect(),ee=Math.max($.width,1),Q=Ba((V-$.left)/ee,0,1);return e+Q*(t-e)}function C(V){if(f==null)return;let $=m;f=null,x=!1,m=!1,b=!0,$&&n.onScrubEnd?.(),V&&$&&n.onChange?.(s)}function N(V){f==null&&(V.pointerType==="mouse"&&V.button!==0||(f=V.pointerId,d=V.clientX,g=V.clientY,p=!1,x=!1,m=!1,b=!r||y(V.clientX,V.clientY)))}function E(V){if(f!==V.pointerId)return;let $=V.clientX-d,ee=V.clientY-g;if(!p&&Math.hypot($,ee)>u&&(p=!0),!x){if(!p)return;if(V.pointerType==="touch"&&Math.abs(ee)>=Math.abs($)){C(!1);return}if(!b){C(!1);return}x=!0,m=!0,n.onScrubStart?.();try{o.setPointerCapture(V.pointerId)}catch{}}A(R(V.clientX),"input"),V.preventDefault()}function S(V){if(f===V.pointerId){if(!p&&!m){f=null,x=!1,m=!1,b=!0,n.onTap?.();return}C(!0)}}function z(V){f===V.pointerId&&C(!1)}function J(V){let $=t-e,ee=i>0?i:$/100,Q=$/10,he=s;switch(V.key){case"ArrowLeft":case"ArrowDown":he=s-ee;break;case"ArrowRight":case"ArrowUp":he=s+ee;break;case"PageDown":he=s-Q;break;case"PageUp":he=s+Q;break;case"Home":he=e;break;case"End":he=t;break;case"Enter":case" ":V.preventDefault(),n.onTap?.();return;default:return}V.preventDefault(),A(he,"change")}return o.addEventListener("pointerdown",N),o.addEventListener("pointermove",E),o.addEventListener("pointerup",S),o.addEventListener("pointercancel",z),o.addEventListener("keydown",J),v(),{el:o,get value(){return s},set value(V){A(V,"silent")},refresh(){v()}}}function Ba(n,e,t){return Math.min(t,Math.max(e,n))}function t1(n,e,t,i){if(!(i>0))return Ba(n,e,t);let r=Math.round((n-e)/i),s=Number((e+r*i).toPrecision(12));return Ba(s,e,t)}var Z0="blueprints.locale",n1={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},i1={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},r1={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},s1={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},Ed={en:{...r1,...n1},cs:{...s1,...i1}},mo=K0(),wd=new Set;function K0(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function o1(){try{let n=localStorage.getItem(Z0);if(n==="en"||n==="cs")return n}catch{}return K0()}function a1(n){try{localStorage.setItem(Z0,n)}catch{}}function mu(){return mo}function j0(n){if(!(n!=="en"&&n!=="cs")&&n!==mo){mo=n,a1(n);for(let e of wd)try{e()}catch{}}}function Td(n){return wd.add(n),()=>wd.delete(n)}function J0(){return mo=o1(),mo}function Ft(n){let e=Ed[mo]||Ed.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=Ed.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function Ad(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Ft(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Ft(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Ft(i))})}function bs(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function za(n){if(!n||!n.visible||bs(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function Q0(){let n=[];function e(r){n.push(r),n.sort((s,o)=>(o.priority||0)-(s.priority||0))}function t(r,s,o){let a=[];for(let c of r)o&&!o(c)||a.push(c);for(let c of a)for(let l of n){let u=l.claim?.(c,s);if(u)return u.onTap(),!0}for(let c of n)if(c.fallback?.(a,s))return!0;return!1}function i(r,s,o){let a=[];for(let c of r)o&&!o(c)||a.push(c);for(let c of a)for(let l of n){let u=l.claim?.(c,s);if(u)return Array.isArray(u.actions)?u.actions.slice():[]}return[]}return{register:e,dispatch:t,actionsFor:i,handlers:n}}var ex=8,c1=56,tx=14,Rd=11,nx=.5,l1=1e-4,gu=128,u1=.028,h1=5,f1=.995,d1=.999,ix=18,p1=22,m1=14,Cd=new Ve,rx=new pi,ei=new P,ti=new P,Vi=new P,Pn=new P,yo=new P,Hi=new P,go=new P,xo=new P,wt=new P,sx=new P,_o=new P,g1=new hn;function Pd(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function Id(n){return n.pointerType==="touch"}function Dd(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function ox(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function px(n){let{scene:e,canvas:t,getCamera:i,controls:r,getRoot:s,getClipPlanes:o,onLiveLength:a,onActiveChange:c}=n,l="idle",u=!1,h=!1,f=0,d=0,g=null,x=null,m=null,p=null,b=null,v=null,y=null,A="mouse",R=0,C=0,N=!1,E=!1,S=new Dt;S.name="MeasureOverlay",S.renderOrder=10,e.add(S);let z=new Dt;z.name="MeasureDimensions",e.add(z);let J=lx(16766474),V=lx(3458905),$=ux(16766474,.75),ee=b1(16766474);S.add(J,V,$,ee),J.visible=!1,V.visible=!1,$.visible=!1,ee.visible=!1;let Q=_1(t),he=[];function te(){return u}function de(U){let I=!!U;if(I===u){I&&me();return}if(u=I,u)if(r.enabled=!1,l="placeFirst",ne(),b=null,v=null,ox()){let O=Math.max(1,t.clientWidth),F=Math.max(1,t.clientHeight);De(O*.5,F*.5,!0)}else Me();else r.enabled=!0,l="idle",ne(),b=null,v=null,y=null,E=!1,Me(),a?.(null);c?.(u),me(),ie()}function ne(){h=!1,g=null,x=null,m=null,p=null}function me(){l==="placeSecond"&&b&&g?a?.(Pd(b.distanceTo(g))):u&&a?.(null)}function Me(){Q.hidden=!0,J.visible=!1,ee.visible=!1}function De(U,I,O=!1){f=U,d=I,h=!0;let F=Xe(U,I);if(F){let oe=F.point.clone(),q=F.kind,Z=F.edgeDir;if(p=null,l==="placeSecond"&&b){let _e=Pe(b,v,F);_e&&(oe=_e.foot,q="perp",Z=_e.edgeDir,p=_e.edgeDir.clone())}g=oe,x=q,m=Z}else O?g||(x=null,m=null,p=null):(g=null,x=null,m=null,p=null);ie(),me()}function j(U,I){let O=xe(I)*h1;U.scale.setScalar(Math.max(O,1e-6))}function ie(){if(!u){Me(),V.visible=!1,$.visible=!1,ee.visible=!1;return}b?(V.visible=!0,V.position.copy(b),j(V,b)):V.visible=!1,h?(Q.hidden=!1,cx(Q,t,f,d,x),g?(J.visible=!0,J.position.copy(g),j(J,g),v1(J,x)):J.visible=!1):Me(),l==="placeSecond"&&b&&g?(fx($,b,g),$.visible=!0):$.visible=!1,l==="placeSecond"&&x==="perp"&&b&&g&&p?(hx(ee,b,g,p,xe),ee.visible=!0):ee.visible=!1}function H(U){let I=t.getBoundingClientRect();return{x:U.clientX-I.left,y:U.clientY-I.top}}function X(U,I,O){return O==="touch"?{x:U,y:I-c1}:{x:U,y:I}}function ye(U){let I=o()||[];for(let O of I)if(O.distanceToPoint(U)<-l1)return!1;return!0}function xe(U){let I=i(),O=Math.max(1,t.clientHeight);if(I.isOrthographicCamera)return 2*((I.top-I.bottom)/(2*Math.max(I.zoom,1e-6)))/O;let F=I.position.distanceTo(U),oe=I.fov*Math.PI/180;return 2*Math.tan(oe/2)*F/O/Math.max(I.zoom,1e-6)}function Ce(U,I){I.copy(U).project(i());let O=Math.max(1,t.clientWidth),F=Math.max(1,t.clientHeight);return I.x=(I.x*.5+.5)*O,I.y=(-I.y*.5+.5)*F,I}function Xe(U,I){let O=s();if(!O)return null;let F=t.getBoundingClientRect();Cd.x=U/Math.max(1,F.width)*2-1,Cd.y=-(I/Math.max(1,F.height))*2+1,rx.setFromCamera(Cd,i());let oe=rx.intersectObject(O,!0),q=null;for(let Ye of oe)if(!(!Ye.object.visible||bs(Ye.object))&&ye(Ye.point)){q=Ye;break}if(!q)return null;let Z=q.object,_e=Z.geometry;if(!_e?.getAttribute("position"))return{point:q.point.clone(),kind:"face",edgeDir:null,mesh:Z,triVerts:null,faceNormal:null};Z.updateWorldMatrix(!0,!1);let re=xe(q.point),fe=re*tx,Ee=re*Rd,Ne=_e.getAttribute("position"),Ae=_e.getIndex(),$e=q.faceIndex,Se=[];if(q.face)ei.fromBufferAttribute(Ne,q.face.a).applyMatrix4(Z.matrixWorld),ti.fromBufferAttribute(Ne,q.face.b).applyMatrix4(Z.matrixWorld),Vi.fromBufferAttribute(Ne,q.face.c).applyMatrix4(Z.matrixWorld),Se.push(ei.clone(),ti.clone(),Vi.clone());else if(typeof $e=="number"){let Ye,Rt,ve;Ae?(Ye=Ae.getX($e*3),Rt=Ae.getX($e*3+1),ve=Ae.getX($e*3+2)):(Ye=$e*3,Rt=$e*3+1,ve=$e*3+2),ei.fromBufferAttribute(Ne,Ye).applyMatrix4(Z.matrixWorld),ti.fromBufferAttribute(Ne,Rt).applyMatrix4(Z.matrixWorld),Vi.fromBufferAttribute(Ne,ve).applyMatrix4(Z.matrixWorld),Se.push(ei.clone(),ti.clone(),Vi.clone())}let ke=null;Se.length===3&&(ke=new P().subVectors(Se[1],Se[0]).cross(Pn.subVectors(Se[2],Se[0])).normalize(),ke.lengthSq()<1e-12&&(ke=null));let G=U,Re=I,le=null;function ge(Ye){if(!ye(Ye)||Ye.distanceToSquared(q.point)>fe*fe*4)return;Ce(Ye,xo);let Rt=Math.hypot(xo.x-G,xo.y-Re);Rt>tx||(!le||Rt<le.distPx)&&(le={point:Ye.clone(),distPx:Rt})}for(let Ye of Se)ge(Ye);let Be=fe*fe*4,Oe=Ne.count,et=Oe>8e3?2:1;for(let Ye=0;Ye<Oe;Ye+=et)Pn.fromBufferAttribute(Ne,Ye).applyMatrix4(Z.matrixWorld),!(Pn.distanceToSquared(q.point)>Be)&&ge(Pn);if(le)return{point:le.point,kind:"vertex",edgeDir:null,mesh:Z,triVerts:Se.length?Se:null,faceNormal:ke};let ut=null;function Pt(Ye,Rt){wt.copy(Rt).sub(Ye);let ve=wt.lengthSq();if(ve<1e-18)return;let Ze=Pn.copy(q.point).sub(Ye).dot(wt)/ve;if(Ze=Math.min(1,Math.max(0,Ze)),yo.copy(Ye).addScaledVector(wt,Ze),!ye(yo)||yo.distanceToSquared(q.point)>Ee*Ee*4)return;Ce(yo,xo);let vn=Math.hypot(xo.x-G,xo.y-Re);if(vn>Rd)return;Ce(Ye,Hi),Ce(Rt,go);let dt=go.x-Hi.x,Bt=go.y-Hi.y,an=dt*dt+Bt*Bt;if(an>1e-6){let bn=((G-Hi.x)*dt+(Re-Hi.y)*Bt)/an;bn=Math.min(1,Math.max(0,bn));let bi=Hi.x+dt*bn,Wi=Hi.y+Bt*bn;if(Math.hypot(G-bi,Re-Wi)>Rd)return}(!ut||vn<ut.distPx)&&(ut={point:yo.clone(),distPx:vn,dir:wt.clone().normalize()})}return Se.length===3&&(Pt(Se[0],Se[1]),Pt(Se[1],Se[2]),Pt(Se[2],Se[0])),ut?{point:ut.point,kind:"edge",edgeDir:ut.dir,mesh:Z,triVerts:Se.length?Se:null,faceNormal:ke}:{point:q.point.clone(),kind:"face",edgeDir:null,mesh:Z,triVerts:Se.length?Se:null,faceNormal:ke}}function Pe(U,I,O){if(!O.mesh||!O.triVerts||O.triVerts.length!==3||!O.faceNormal||O.faceNormal.lengthSq()<1e-12)return null;let F=xe(U),oe=F*m1,q=Math.max(F*2,1e-5);if(Math.abs(xu(U,O.triVerts[0],O.faceNormal))>q)return null;let Z=ce(O.mesh,O.triVerts[0],O.faceNormal,q);if(!Z.length)return null;let _e=[];for(let Ee of Z)ax(U,Ee.a,Ee.b)<=oe&&_e.push(Ee.dir.clone());if(I&&I.lengthSq()>1e-12&&_e.push(I.clone().normalize()),!_e.length)return null;let re=F*ix,fe=null;for(let Ee of _e)if(!(Ee.lengthSq()<1e-12)){Ee.normalize();for(let Ne of Z){if(Math.abs(Ne.dir.dot(Ee))<f1||ax(U,Ne.a,Ne.b)<=oe)continue;let Ae=x1(U,Ne.a,Ne.b);if(!ye(Ae)||U.distanceTo(Ae)*1e3<nx||(wt.copy(Ae).sub(U),wt.lengthSq()<1e-16)||(wt.normalize(),Math.abs(wt.dot(Ee))>.08))continue;let Se=O.point.distanceTo(Ae);Ce(O.point,Hi),Ce(Ae,go);let ke=Math.hypot(Hi.x-go.x,Hi.y-go.y);if(Se>re*1.35&&ke>ix)continue;let G=ke+Se/Math.max(F,1e-9);(!fe||G<fe.score)&&(fe={foot:Ae.clone(),edgeDir:Ee.clone(),score:G})}}return fe?{foot:fe.foot,edgeDir:fe.edgeDir}:null}function ce(U,I,O,F){let oe=U.geometry,q=oe?.getAttribute("position");if(!q)return[];U.updateWorldMatrix(!0,!1);let Z=oe.getIndex(),_e=new Map,re=Math.max(F*.25,1e-5);function fe(Se,ke,G){_o.subVectors(ke,Se).cross(Pn.subVectors(G,Se)),!(_o.lengthSq()<1e-16)&&(_o.normalize(),!(Math.abs(_o.dot(O))<d1)&&(Math.abs(xu(Se,I,O))>F||Math.abs(xu(ke,I,O))>F||Math.abs(xu(G,I,O))>F||(Ee(Se,ke),Ee(ke,G),Ee(G,Se))))}function Ee(Se,ke){if(wt.copy(ke).sub(Se),wt.lengthSq()<1e-16)return;let G=y1(Se,ke,re);_e.has(G)||_e.set(G,{a:Se.clone(),b:ke.clone(),dir:wt.clone().normalize()})}let Ne=Z?Z.count/3:q.count/3,Ae=12e3,$e=Ne>Ae?Math.ceil(Ne/Ae):1;for(let Se=0;Se<Ne;Se+=$e){let ke,G,Re;if(Z){let le=Se*3;ke=Z.getX(le),G=Z.getX(le+1),Re=Z.getX(le+2)}else ke=Se*3,G=Se*3+1,Re=Se*3+2;ei.fromBufferAttribute(q,ke).applyMatrix4(U.matrixWorld),ti.fromBufferAttribute(q,G).applyMatrix4(U.matrixWorld),Vi.fromBufferAttribute(q,Re).applyMatrix4(U.matrixWorld),fe(ei,ti,Vi)}return[..._e.values()]}function L(){if(g){if(l==="placeFirst"){b=g.clone(),v=m?m.clone():null,l="placeSecond",p=null,(Id({pointerType:A})||!ox())&&(h=!1,g=null,x=null,m=null,Me()),ie(),me();return}if(l==="placeSecond"&&b){if(b.distanceTo(g)*1e3<nx)return;Ue(b,g),de(!1)}}}function Ue(U,I){let O=new Dt;O.name="Dimension";let F=ux(16752394,1);fx(F,U,I),F.visible=!0;let oe=U.clone().lerp(I,.5),q=U.distanceTo(I),Z=M1(Pd(q));Z.position.copy(oe),O.add(F,Z),z.add(O),he.push({group:O,sprite:Z,mid:oe.clone(),span:q}),be(Z,U,I,oe,q)}function be(U,I,O,F,oe){let q=i();if(q.getWorldDirection(sx),wt.copy(O).sub(I),wt.lengthSq()<1e-16){U.position.copy(F);return}wt.normalize(),Pn.crossVectors(wt,sx),Pn.lengthSq()<1e-10&&Pn.copy(q.up),Pn.normalize();let Z=Math.max(oe*u1,xe(F)*18);U.position.copy(F).addScaledVector(Pn,Z);let _e=xe(U.position)*56;U.scale.set(_e*2.2,_e,1)}function Te(){V.visible&&b&&j(V,b),J.visible&&g&&j(J,g),h&&cx(Q,t,f,d,x),ee.visible&&b&&g&&p&&x==="perp"&&hx(ee,b,g,p,xe);for(let U of he){let O=U.group.children[0].geometry.getAttribute("position");ei.fromBufferAttribute(O,0),ti.fromBufferAttribute(O,1),be(U.sprite,ei,ti,U.mid,U.span)}}function pe(U){if(!u||l==="idle"||!Dd(U)||y!==null)return;let{x:I,y:O}=H(U),F=X(I,O,U.pointerType);De(F.x,F.y,!0)}function We(U){if(!u||l==="idle"||U.button!==void 0&&U.button!==0||y!==null)return;y=U.pointerId,A=U.pointerType||"mouse";let{x:I,y:O}=H(U);R=I,C=O,N=!1,E=!1;try{t.setPointerCapture(U.pointerId)}catch{}if(Dd(U)){let F=X(I,O,A);De(F.x,F.y,!0)}U.preventDefault()}function W(U){if(!u)return;if(y===null){pe(U);return}if(y!==U.pointerId)return;let{x:I,y:O}=H(U);if(Math.hypot(I-R,O-C)>=ex&&(N=!0,E=!0),Id(U)){if(!E)return;let oe=X(I,O,"touch");De(oe.x,oe.y,!0)}else if(Dd(U)){let oe=X(I,O,A);De(oe.x,oe.y,!0)}U.preventDefault()}function w(U){if(!u||y!==U.pointerId)return;let{x:I,y:O}=H(U);Math.hypot(I-R,O-C)>=ex&&(N=!0,E=!0),y=null;try{t.releasePointerCapture(U.pointerId)}catch{}if(Id(U)){N?E=!1:(E=!1,h&&g&&L()),U.preventDefault();return}!N&&g&&L(),E=!1,U.preventDefault()}function M(U){y===U.pointerId&&(y=null,E=!1)}return t.addEventListener("pointerdown",We),t.addEventListener("pointermove",W),t.addEventListener("pointerup",w),t.addEventListener("pointercancel",M),{isActive:te,setActive:de,update:Te,formatMm:Pd}}function xu(n,e,t){return g1.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function ax(n,e,t){wt.copy(t).sub(e);let i=wt.lengthSq();if(i<1e-18)return n.distanceTo(e);let r=Pn.copy(n).sub(e).dot(wt)/i;return r=Math.min(1,Math.max(0,r)),yo.copy(e).addScaledVector(wt,r).distanceTo(n)}function x1(n,e,t){wt.copy(t).sub(e);let i=wt.lengthSq();if(i<1e-18)return e.clone();let r=Pn.copy(n).sub(e).dot(wt)/i;return r=Math.min(1,Math.max(0,r)),e.clone().addScaledVector(wt,r)}function y1(n,e,t){let i=Math.round(n.x/t),r=Math.round(n.y/t),s=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),c=Math.round(e.z/t);return i<o||i===o&&r<a||i===o&&r===a&&s<=c?`${i},${r},${s}|${o},${a},${c}`:`${o},${a},${c}|${i},${r},${s}`}function _1(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function cx(n,e,t,i,r){let s=e.getBoundingClientRect();n.style.left=`${s.left+t}px`,n.style.top=`${s.top+i}px`,n.dataset.snap=r||"none"}function lx(n){let e=new ra(1,16,12),t=new Ot({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new nt(e,t);return i.renderOrder=20,i.visible=!1,i}function v1(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function ux(n,e){let t=new Tt,i=new Float32Array(6);t.setAttribute("position",new vt(i,3));let r=new ir({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),s=new Pi(t,r);return s.renderOrder=19,s.frustumCulled=!1,s.visible=!1,s}function b1(n){let e=new Tt,t=new Float32Array(9);e.setAttribute("position",new vt(t,3));let i=new ir({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),r=new Pi(e,i);return r.renderOrder=22,r.frustumCulled=!1,r.visible=!1,r}function hx(n,e,t,i,r){let s=r(t)*p1;if(wt.copy(e).sub(t),wt.lengthSq()<1e-16){n.visible=!1;return}if(wt.normalize(),Pn.copy(i).normalize(),_o.crossVectors(Pn,wt),_o.lengthSq()<1e-12){n.visible=!1;return}ei.copy(t).addScaledVector(Pn,s),ti.copy(t),Vi.copy(t).addScaledVector(wt,s);let o=n.geometry.getAttribute("position");o.setXYZ(0,ei.x,ei.y,ei.z),o.setXYZ(1,ti.x,ti.y,ti.z),o.setXYZ(2,Vi.x,Vi.y,Vi.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function fx(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function M1(n){let e=document.createElement("canvas");e.width=gu*2,e.height=gu;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(gu*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let c=t.measureText(n),l=Math.ceil(c.width),u=Math.round(gu*.42),h=l+o*2,f=u+a*2,d=(e.width-h)/2,g=(e.height-f)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",dx(t,d,g,h,f,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,dx(t,d,g,h,f,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new rr(e);i.colorSpace=xt,i.needsUpdate=!0;let r=new Qs({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),s=new $o(r);return s.renderOrder=21,s.center.set(.5,.5),s}function dx(n,e,t,i,r,s){let o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function yu(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function Fr(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function mx(n){let e="part",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let s=Fr(i);if(s.part&&(e=s.part),s.element)return{part:s.part,element:s.element}}t=t.parent||null}return{part:e,element:null}}var vu=12,S1=500,E1=Math.PI/2,w1=.03,gx=.001;function T1(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function A1(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>vu?"drag":"tap"}function R1(n,e){return(e>=0?1:-1)*n*E1}function C1(n,e=null){let t=n.length,i=new Map,r=a=>{let c=i.has(a)?i.get(a):a;return c!==a?(c=r(c),i.set(a,c)):i.has(a)||i.set(a,a),c},s=(a,c)=>{let l=r(a),u=r(c);l!==u&&i.set(l,u)};if(e){let a=new Map,c=1e4,l=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<l;u++){let h=`${Math.round(e.getX(u)*c)},${Math.round(e.getY(u)*c)},${Math.round(e.getZ(u)*c)}`,f=a.get(h);f===void 0?a.set(h,u):s(u,f)}}for(let a=0;a+2<t;a+=3)s(n[a],n[a+1]),s(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let c=r(n[a]),l=o.get(c);l||(l=[],o.set(c,l)),l.push(a)}return[...o.values()]}function xx(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let r=C1(t.array,i);if(r.length<2)return[n];let s=e.getAttribute("normal"),o=[];for(let a of r){let c=new Map,l=[],u=[],h=[],f=x=>{let m=c.get(x);return m!==void 0||(m=l.length/3,c.set(x,m),l.push(i.getX(x),i.getY(x),i.getZ(x)),s&&u.push(s.getX(x),s.getY(x),s.getZ(x))),m};for(let x of a)h.push(f(t.getX(x)),f(t.getX(x+1)),f(t.getX(x+2)));let d=new Tt;d.setAttribute("position",new Nt(l,3)),u.length&&d.setAttribute("normal",new Nt(u,3)),d.setIndex(h);let g=new nt(d,n.material);g.name=n.name,g.position.copy(n.position),g.quaternion.copy(n.quaternion),g.scale.copy(n.scale),g.visible=n.visible,n.parent.add(g),o.push(g)}return n.parent.remove(n),e.dispose?.(),o}function P1(n){let e=[];n.traverse(i=>{let r=i.name||"";if(Fr(r).part!=="door")return;let s=i.parent?.name||"";Fr(s).part!=="door"&&e.push(i)});let t=[];for(let i of e){if(i.isMesh){t.push(...xx(i));continue}let r=[];if(i.traverse(s=>{s.isMesh&&r.push(s)}),r.length===1){let s=xx(r[0]);if(s.length>1){t.push(...s);continue}}t.push(i)}return t}function I1(n,e,t=w1){let i=[];for(let a of n)for(let c of e){if(!c||c.kind!=="hinged"||!c.hinge)continue;let l=c.center;if(!Array.isArray(l)||l.length<3)continue;let u=a.center.x-Number(l[0]),h=a.center.y-Number(l[1]),f=a.center.z-Number(l[2]),d=Math.hypot(u,h,f);d<=t&&i.push({distance:d,entry:a,record:c})}i.sort((a,c)=>a.distance-c.distance);let r=new Set,s=new Set,o=[];for(let a of i)r.has(a.entry)||s.has(a.record.id)||(r.add(a.entry),s.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function D1(n){return n.updateWorldMatrix(!0,!0),new It().setFromObject(n).getCenter(new P)}function L1(n,e){let t=n.parent;if(!t)return null;let i=new Dt;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=new P(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(r)),i.updateWorldMatrix(!0,!1),i.attach(n);let s={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=s};return o(i),n.traverse(o),s}function Va(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/S1;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*T1(i)}var yx=new kt,ka=new P;function N1(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;ka.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(yx).invert(),ka.applyQuaternion(yx)),!(ka.lengthSq()<1e-12)&&(ka.normalize(),n.rotateOnAxis(ka,e))}function U1(n,e){let t=Va(n,e);return N1(n.pivot,R1(t,n.sign)),t}function O1(n,e){let t=Va(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function F1(n,e){let t=Va(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var _u=new P,B1=new Ot({side:bt,transparent:!0,opacity:0,depthWrite:!1});function z1(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(m=>{m.isMesh&&m.geometry?.getAttribute?.("position")&&e.push(m)}),!e.length)return null;let t=new P,i=new P,r=new P;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,r),t.lengthSq()<1e-12||i.lengthSq()<1e-12||r.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),r.normalize();let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let m of e){let p=m.geometry;p.boundingBox||p.computeBoundingBox();let b=p.boundingBox,v=[b.min.x,b.max.x],y=[b.min.y,b.max.y],A=[b.min.z,b.max.z];for(let R of v)for(let C of y)for(let N of A){_u.set(R,C,N).applyMatrix4(m.matrixWorld);let E=_u.dot(t),S=_u.dot(i),z=_u.dot(r);E<s&&(s=E),S<o&&(o=S),z<a&&(a=z),E>c&&(c=E),S>l&&(l=S),z>u&&(u=z)}}let h=[(c-s)/2,(l-o)/2,(u-a)/2];if(h.some(m=>!(m>1e-6)))return null;let f=(s+c)/2,d=(o+l)/2,g=(a+u)/2;return{center:new P(t.x*f+i.x*d+r.x*g,t.y*f+i.y*d+r.y*g,t.z*f+i.z*d+r.z*g),axes:[t,i,r],half:h}}function k1(n,e){let t=new Ci(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new nt(t,B1);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function H1(n,e){let t=n.origin,i=n.direction,r=0,s=1/0;for(let o=0;o<3;o++){let a=e.axes[o],c=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),l=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(l)>1e-8){let h=(c+u)/l,f=(c-u)/l;if(h>f){let d=h;h=f,f=d}if(h>r&&(r=h),f<s&&(s=f),r>s)return null}else if(-c-u>0||-c+u<0)return null}return s<0?null:{tEnter:r,tExit:s}}function V1(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function G1(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!bs(e))return e.userData.bpDoor;e=e.parent}return null}function W1(n){return za(n.object)}function X1(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function _x(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),r=[],s=new pi,o=new Ve,a=null,c=0,l=null;function u(){l&&clearTimeout(l),l=null}let h=Q0();h.register({id:"door",priority:100,claim(v,y){let A=G1(v.object);if(!A||A.host?.userData?.bpIfcHidden)return null;let R=y.now??performance.now(),C=Va(A,R)>gx,N=()=>O1(A,y.now??performance.now());return{onTap:N,actions:[{id:"door",labelKey:C?"ui.close":"ui.open",run:N}]}}}),h.register({id:"opening",priority:10,fallback(v,y){let A=[];for(let C of r){if(!C.obb||C.host?.userData?.bpIfcHidden||Va(C,y.now)<=gx)continue;let N=H1(y.raycaster.ray,C.obb);N&&A.push({binding:C,tEnter:N.tEnter})}let R=V1(A);return R?F1(R,y.now):!1}});function f(v){for(let R of r)X1(R);if(r.length=0,!v||!e.length)return 0;v.updateWorldMatrix(!0,!0);let A=P1(v).map(R=>({host:R,center:D1(R)}));for(let R of I1(A,e)){let C=L1(R.entry.host,R.record);if(!C)continue;let N=z1(C.host);C.obb=N,C.proxy=N?k1(N,`opening:${C.id}`):null,r.push(C)}return r.length}function d(v){let y=!1;for(let A of r){let R=!!A.anim;!R&&A.shown===A.goal||(U1(A,v),A.shown=A.anim?null:A.goal,R&&(y=!0))}return y}function g(v){if(!(v.button!==void 0&&v.button!==0)){if(c+=1,c>1){a=null;return}a={id:v.pointerId,x:v.clientX,y:v.clientY,moved:0,pointers:1,modifiers:v.altKey||v.ctrlKey||v.metaKey||v.shiftKey,consumed:!1},u(),l=setTimeout(()=>{l=null,!(!a||a.consumed||yu({dt:500,dx:a.moved,dy:0,pointers:c,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function x(v){if(!a||v.pointerId!==a.id)return;let y=Math.hypot(v.clientX-a.x,v.clientY-a.y);y>a.moved&&(a.moved=y),a.moved>vu&&u()}function m(v){if(c=Math.max(0,c-1),u(),!a||v.pointerId!==a.id)return;let y=a;if(a=null,y.consumed)return;let A=Math.max(y.moved,Math.hypot(v.clientX-y.x,v.clientY-y.y));A1({dx:A,dy:0,pointers:c>0?2:1,button:v.button,blocked:i(),modifiers:v.altKey||v.ctrlKey||v.metaKey||v.shiftKey})==="tap"&&b(v)}function p(){c=Math.max(0,c-1),a=null}function b(v){let y=n.getCamera();if(!y||!r.length)return;let A=t.getBoundingClientRect(),R=A.width||t.clientWidth||1,C=A.height||t.clientHeight||1;o.x=(v.clientX-A.left)/R*2-1,o.y=-((v.clientY-A.top)/C)*2+1,s.setFromCamera(o,y);let E=r[0]?.pivot?.parent;for(;E?.parent;)E=E.parent;if(!E)return;let S=s.intersectObject(E,!0);h.dispatch(S,{raycaster:s,now:performance.now()},W1)}return t.addEventListener("pointerdown",g,!0),t.addEventListener("pointermove",x,!0),t.addEventListener("pointerup",m,!0),t.addEventListener("pointercancel",p,!0),t.addEventListener("contextmenu",v=>v.preventDefault()),{bind:f,step:d,bindings:r,taps:h}}var q1=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t)}];function vx(n,e){for(let t of q1)n.register({id:t.id,priority:t.priority,claim(i,r){let s=e.elementOf?.(i.object);if(!s||s.type!==t.type)return null;let o=()=>t.run(s,i,r,e);return{onTap:o,actions:[{id:t.id,labelKey:t.labelKey(s,e),run:o}]}}})}function bx(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(i=>e[i]):[];return{elements:e,roots:t}}function bu(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let r=i.parentId||null;(r===e||!r&&i.containerId===e)&&t.push(i)}return t.sort((i,r)=>{let s=(i.order??0)-(r.order??0);return s||String(i.name||"").localeCompare(String(r.name||""))}),t.map(i=>i.globalId)}function Ld(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=s.parentId||s.containerId||null}return t.reverse(),t}function Nd(n,e){return Ld(n,e).slice(0,-1)}function Ud(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of bu(n,s))r(a,o+1)};for(let s of n.roots)r(s,0);return t}function Mx(n){return Math.min(Math.max(0,n),4)*12}function Sx(n,e,t,i,r=44,s=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/r)-s),c=Math.min(i,Math.ceil((o+e)/r)+s);return{start:a,end:Math.max(a,c)}}function Ms(n,e){let t=[],i=[e],r=new Set;for(;i.length;){let s=i.pop();if(!(!s||r.has(s)||!n.elements[s])){r.add(s),t.push(s);for(let o of bu(n,s))i.push(o)}}return t}function Ex(n,e){let t=null,i=null,r=new Set,s=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;s&&n.elements[s]&&!r.has(s);){r.add(s);let o=n.elements[s];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),s=o.containerId||o.parentId||null}return{storey:t,space:i}}function wx(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([r])=>r!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[r,s]of i)e.push(`${r}: ${Tx(s)}`)}}return e}function Tx(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function Ax(n,e){return n&&n===e?"frame":"pulse"}function Rx(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${Tx(e.value)}`):[]}var Y1=`<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.5 4.2h8.2v1.35H2.5V4.2zm0 5.1h8.2v1.35H2.5V9.3zm0 5.15h8.2V15.8H2.5v-1.35z"/>
  <path fill="currentColor" d="M13.2 6.15l3.15 3.15-3.15 3.15-1.05-1.05 1.35-1.35H11.2V8.55h2.3L12.15 7.2l1.05-1.05z"/>
</svg>`;function Cx(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},closePopover(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let r=document.createElement("span");r.dataset.i18n="ui.inspector",r.textContent=n.t("ui.inspector");let s=document.createElement("span");s.className="ifc-entry-chevron",s.setAttribute("aria-hidden","true"),s.textContent="\u203A",i.append(r,s),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let c=document.createElement("button");c.type="button",c.className="ifc-back",c.dataset.noSheetDrag="true";let l=document.createElement("button");l.type="button",l.className="ifc-show-all",l.hidden=!0,l.dataset.noSheetDrag="true",a.append(c,l);let u=document.createElement("div");u.className="ifc-crumbs",u.dataset.noSheetDrag="true";let h=document.createElement("div");h.className="ifc-list";let f=document.createElement("div");f.className="ifc-list-spacer";let d=document.createElement("div");d.className="ifc-list-window",h.append(f,d);let g=document.createElement("div");g.className="ifc-head",g.append(a,u),o.append(g,h),e.append(t,o);let x=document.createElement("div");x.id="ifc-popover",x.hidden=!0,x.className="ifc-popover",document.body.append(x);let m=document.createElement("div");m.id="ifc-row-menu",m.hidden=!0,m.className="ifc-menu",document.body.append(m);let p=new Set,b=null,v=null,y=0;function A(){o.hidden=!0,t.hidden=!1,ie()}function R(){t.hidden=!0,o.hidden=!1,S(),requestAnimationFrame(()=>S())}function C(){n.openSheet(),R(),e.scrollTop=0}i.addEventListener("click",()=>C()),c.addEventListener("click",()=>{A(),e.scrollTop=0}),l.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),S()});function N(ce){let L=n.index.elements[ce];return L&&(L.name||L.id||L.type)||ce}function E(){u.replaceChildren();let ce=b?Ld(n.index,b):[];if(!ce.length){u.hidden=!0;return}u.hidden=!1,ce.forEach((L,Ue)=>{if(Ue){let Te=document.createElement("span");Te.className="ifc-crumb-sep",Te.textContent="\u203A",u.append(Te)}let be=document.createElement("button");be.type="button",be.className="ifc-crumb",be.textContent=N(L),be.addEventListener("click",()=>{b=L;for(let Te of Nd(n.index,L))p.add(Te);S(),ne(L)}),u.append(be)})}function S(){c.textContent=`\u2039 ${n.t("ui.menu")}`,l.textContent=n.t("ui.showAll"),l.hidden=!n.visibility.anyHidden(),r.textContent=n.t("ui.inspector"),E(),V()}function z(){let ce=e.getBoundingClientRect();return h.getBoundingClientRect().top-ce.top+e.scrollTop}function J(){let ce=e.getBoundingClientRect();return g.getBoundingClientRect().bottom-ce.top+6}function V(){let ce=Ud(n.index,p);f.style.height=`${ce.length*44}px`;let L=Sx(e.scrollTop,e.clientHeight||320,z(),ce.length,44);d.replaceChildren(),d.style.transform=`translateY(${L.start*44}px)`;for(let Ue=L.start;Ue<L.end;Ue++)d.append($(ce[Ue]))}function $(ce){let L=n.index.elements[ce.id],Ue=bu(n.index,ce.id),be=document.createElement("div");if(be.className="ifc-row",be.dataset.id=ce.id,be.style.paddingLeft=`${Mx(ce.depth)+8}px`,be.style.height=`${44}px`,(ce.id===v||ce.id===b)&&be.classList.add("is-target"),n.visibility.isHidden(ce.id)&&be.classList.add("is-hidden"),Ue.length){let W=document.createElement("button");W.type="button",W.className="ifc-disclosure";let w=p.has(ce.id);W.textContent=w?"\u25BE":"\u203A",W.setAttribute("aria-expanded",w?"true":"false"),W.setAttribute("aria-label",w?n.t("ui.collapse"):n.t("ui.expand")),W.addEventListener("click",M=>{M.stopPropagation(),p.has(ce.id)?p.delete(ce.id):p.add(ce.id),S()}),be.append(W)}else{let W=document.createElement("span");W.className="ifc-disclosure-spacer",be.append(W)}let Te=document.createElement("span");Te.className="ifc-row-text";let pe=document.createElement("span");pe.className="ifc-row-name",pe.textContent=N(ce.id);let We=document.createElement("span");return We.className="ifc-row-meta",We.textContent=L?.type||"",Te.append(pe,We),be.append(Te),te(be,ce.id),be}let ee=0;function Q(ce){let L=performance.now();if(L-ee<40)return;ee=L;let Ue=Ax(b,ce);b=ce,n.onFrame(ce,{move:Ue==="frame"}),de(ce),E()}function he(ce){return ce instanceof Element&&!!ce.closest(".ifc-disclosure")}function te(ce,L){let Ue=null,be=0,Te=()=>{be&&window.clearTimeout(be),be=0},pe=(w,M,U)=>{he(U)||(Te(),Ue={x:w,y:M,moved:0,consumed:!1},be=window.setTimeout(()=>{be=0,!(!Ue||Ue.consumed||yu({dt:500,dx:Ue.moved,dy:0,released:!1})!=="longpress")&&(Ue.consumed=!0,Me(L,Ue.x,Ue.y))},500))},We=(w,M)=>{if(!Ue)return;let U=Math.hypot(w-Ue.x,M-Ue.y);U>Ue.moved&&(Ue.moved=U),Ue.moved>12&&Te()},W=(w,M,U)=>{Te();let I=Ue;Ue=null,!(!I||I.consumed||he(U)||Math.max(I.moved,Math.hypot(w-I.x,M-I.y))>12)&&Q(L)};ce.addEventListener("pointerdown",w=>{w.button!==void 0&&w.button!==0||pe(w.clientX,w.clientY,w.target)}),ce.addEventListener("pointermove",w=>We(w.clientX,w.clientY)),ce.addEventListener("pointerup",w=>{w.pointerType!=="touch"&&W(w.clientX,w.clientY,w.target)}),ce.addEventListener("pointercancel",()=>Te()),ce.addEventListener("touchend",w=>{let M=w.changedTouches[0];M&&W(M.clientX,M.clientY,w.target)},{passive:!0})}function de(ce){v=ce,y&&window.clearTimeout(y),y=window.setTimeout(()=>{v===ce&&(v=null),V()},1600),V()}function ne(ce){let Ue=Ud(n.index,p).findIndex(Te=>Te.id===ce);if(Ue<0)return;let be=z()+Ue*44;e.scrollTop=Math.max(0,be-J()),V()}let me=!1;function Me(ce,L,Ue){H(),m.replaceChildren(),m.hidden=!1,me=!1;let be=n.visibility.isHidden(ce);j(be?"ui.unhideThis":"ui.hideThis",()=>{be?n.visibility.unhide(ce):n.visibility.hide(ce),De()}),j("ui.hideOthers",()=>{n.visibility.hideOthers(ce),De()}),j("ui.unhideOthers",()=>{n.visibility.unhideOthers(ce),De()}),X(m,L,Ue)}function De(){n.onVisibility(),ie(),S()}function j(ce,L){let Ue=document.createElement("button");Ue.type="button",Ue.className="ifc-menu-btn",Ue.textContent=n.t(ce);let be=!1,Te=pe=>{pe.preventDefault(),pe.stopPropagation(),!be&&(be=!0,L())};Ue.addEventListener("touchend",Te),Ue.addEventListener("click",Te),m.append(Ue)}function ie(){m.hidden=!0,m.replaceChildren()}function H(){x.hidden=!0,x.replaceChildren()}function X(ce,L,Ue){ce.hidden=!1,ce.style.left="0px",ce.style.top="0px";let be=ce.getBoundingClientRect(),Te=8,pe=Math.max(Te,window.innerWidth-be.width-Te),We=Math.min(Math.max(Te,L),pe),W=Ue+8;W+be.height>window.innerHeight-Te&&(W=Math.max(Te,Ue-be.height-8)),ce.style.left=`${We}px`,ce.style.top=`${W}px`}function ye(ce,L,Ue,be,Te){if(ie(),x.replaceChildren(),x.hidden=!1,!ce)xe(n.t("ui.noIfc"),L||"");else{let pe=document.createElement("div");pe.className="ifc-pop-id";let We=document.createElement("button");We.type="button",We.className="ifc-pop-title";let W=document.createElement("div");W.className="ifc-kicker";let w=document.createElement("div");w.className="ifc-name";let M=ce.name||ce.id||"",U=ce.globalId||"",I=!1,O=0,F=()=>{W.hidden=!I,W.textContent=I?n.t("ui.globalId"):"",w.textContent=I?U:M,w.className=I?"ifc-gid":"ifc-name",We.setAttribute("aria-label",I?M:n.t("ui.globalId"))},oe=fe=>{fe.preventDefault(),fe.stopPropagation();let Ee=performance.now();Ee-O<80||(O=Ee,I=!I,F())};F(),We.append(W,w),We.addEventListener("touchend",oe),We.addEventListener("click",oe);let q=document.createElement("button");q.type="button",q.className="ifc-reveal",q.innerHTML=Y1,q.setAttribute("aria-label",n.t("ui.reveal")),q.title=n.t("ui.reveal"),q.addEventListener("click",fe=>{fe.stopPropagation(),H(),Xe(ce.globalId)}),pe.append(We,q),x.append(pe),xe(n.t("ui.type"),ce.type||"");let Z=Ex(n.index,ce.globalId);Z.storey&&xe(n.t("ui.storey"),Z.storey.name||Z.storey.id),Z.space&&xe(n.t("ui.space"),Z.space.name||Z.space.id);let _e=Rx(ce);_e.length&&Ce(n.t("ui.dimensions"),_e);let re=wx(ce);re.length&&Ce(n.t("ui.note"),re)}if(Ue.length){let pe=document.createElement("div");pe.className="ifc-actions";for(let We of Ue){let W=document.createElement("button");W.type="button",W.className="ifc-action",W.textContent=n.t(We.labelKey),W.addEventListener("click",w=>{w.stopPropagation(),We.run(),n.onVisibility()}),pe.append(W)}x.append(pe)}X(x,be,Te)}function xe(ce,L){let Ue=document.createElement("div");Ue.className="ifc-line";let be=document.createElement("div");be.className="ifc-kicker",be.textContent=ce;let Te=document.createElement("div");Te.className="ifc-value",Te.textContent=L,Ue.append(be,Te),x.append(Ue)}function Ce(ce,L){let Ue=document.createElement("div");Ue.className="ifc-line";let be=document.createElement("div");be.className="ifc-kicker",be.textContent=ce;let Te=document.createElement("div");Te.className="ifc-note",Te.textContent=L.join(`
`),Ue.append(be,Te),x.append(Ue)}function Xe(ce){if(n.index.elements[ce]){for(let L of Nd(n.index,ce))p.add(L);b=ce,v=ce,n.openSheet(),R(),S(),requestAnimationFrame(()=>ne(ce))}}e.addEventListener("scroll",()=>{o.hidden||V()},{passive:!0});let Pe=ce=>ce instanceof Node?!(!x.hidden&&x.contains(ce)||!m.hidden&&m.contains(ce)):!0;return document.addEventListener("pointerup",()=>{m.hidden||(me=!0)},!0),document.addEventListener("pointerdown",ce=>{let L=ce.target;!x.hidden&&Pe(L)&&H(),!m.hidden&&me&&Pe(L)&&ie()},!0),{open:C,refresh:S,closePopover:H,openPopover:ye,reveal:Xe,isInspectorOpen:()=>!o.hidden}}function Px(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let r of Ms(n,i))e.add(r)},unhide(i){for(let r of Ms(n,i))e.delete(r)},hideOthers(i){let r=new Set(Ms(n,i));for(let s of t())r.has(s)||e.add(s)},unhideOthers(i){let r=new Set(Ms(n,i));for(let s of t())r.has(s)||e.delete(s)},showAll(){e.clear()}}}var kd=.3,Nx=1.5,$1=.5,Od=new Ve,Z1=new P,Tu=new P,Fd=new P,Mu=new P,Su=new P,vo=new P,Eu=new P,Bd=new kt,Ix=new kt,wu=new kt,Dx=new kt,zd=new Cr,K1=new P(0,1,0),Lx=new pi;function j1(n,e,t=kd,i=Nx){let r=Number.isFinite(e)&&e>0?e:0,s=Number.isFinite(n)&&n>0?n:null;return s!=null&&s>=t?s:s!=null?Math.max(i,t):r>=t?r:Math.max(i,t)}function J1(n,e,t=kd,i=Nx){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function Q1(n,e,t=kd,i=$1){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function eT(n,e,t,i=1){let r=2*Math.PI*i/Math.max(1,t);return{theta:-n*r,phi:-e*r}}function tT(n,e,t,i,r){if(!i&&!r||(Su.copy(n.position).sub(t),Su.lengthSq()<1e-12))return!1;vo.copy(n.up),vo.lengthSq()<1e-12?vo.set(0,1,0):vo.normalize(),Dx.setFromUnitVectors(vo,K1),Mu.copy(Su).applyQuaternion(Dx),zd.setFromVector3(Mu);let s=1e-6;return r=Math.min(Math.PI-s,Math.max(s,zd.phi+r))-zd.phi,Bd.setFromAxisAngle(vo,i),Eu.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(Bd),Eu.lengthSq()<1e-12?!1:(Eu.normalize(),Ix.setFromAxisAngle(Eu,r),wu.copy(Ix).multiply(Bd),Mu.copy(Su).applyQuaternion(wu),n.position.copy(t).add(Mu),e.sub(t).applyQuaternion(wu).add(t),n.quaternion.premultiply(wu),!0)}function nT(n,e,t){return!(t>0)||(n.getWorldDirection(Tu),Fd.copy(n.position).addScaledVector(Tu,t),Fd.distanceToSquared(e)<1e-12)?!1:(e.copy(Fd),!0)}function iT(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let r of i){let s=r&&r.clippingPlanes;if(s){for(let o of s)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function rT(n,e,t,i,r){if(!e||!t||e.isOrthographicCamera)return null;let s=n.getBoundingClientRect(),o=s.width||n.clientWidth||1,a=s.height||n.clientHeight||1;Od.x=(i-s.left)/o*2-1,Od.y=-((r-s.top)/a)*2+1,t.updateWorldMatrix(!0,!0),Lx.setFromCamera(Od,e);let c=Lx.intersectObject(t,!0);e.getWorldDirection(Tu);for(let l of c){let u=l.object;if(!u.visible||bs(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!iT(u,l.point))continue;let f=l.distance;if(!(f>1e-4))continue;let d=Z1.copy(l.point).sub(e.position).dot(Tu);if(d>1e-4)return{point:l.point.clone(),slant:f,depth:d}}return null}function sT(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),r=new Map,s=null;function o(){return t.enabled!==!1&&!i()}function a(){let y=n.getCamera();return!!(y&&y.isPerspectiveCamera)}function c(y,A){return rT(e,n.getCamera(),n.getRoot(),y,A)}function l(y){let A=n.getCamera();!A||!a()||y==null||nT(A,t.target,y)}function u(y,A){let R=n.getCamera();if(!R||!a())return;let C=c(y,A),N=R.position.distanceTo(t.target);l(j1(C?C.slant:null,N))}function h(y,A){let R=n.getCamera();if(!R||!a())return;let C=c(y,A),N=R.position.distanceTo(t.target);l(J1(C?C.depth:null,N))}function f(){s=null,t.enableRotate=!0}function d(y){if(r.set(y.pointerId,{x:y.clientX,y:y.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(r.size>=2){f(),t.zoomToCursor=!0;let S=g(y);u(S.x,S.y);return}let A=y.pointerType==="touch",R=y.button??0;if(!A&&R===2){f(),h(y.clientX,y.clientY);return}if(!A&&R===1){f(),u(y.clientX,y.clientY);return}if(!A&&R!==0)return;if(!A&&(y.shiftKey||y.ctrlKey||y.metaKey)){f(),h(y.clientX,y.clientY);return}let C=n.getCamera(),N=c(y.clientX,y.clientY),E=C?C.position.distanceTo(t.target):0;if(!N||!Q1(N.slant,E)){f();return}t.enableRotate=!1,s={id:y.pointerId,x:y.clientX,y:y.clientY,lastX:y.clientX,lastY:y.clientY,point:N.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function g(y){let A=y.clientX,R=y.clientY,C=1;for(let[N,E]of r)N!==y.pointerId&&(A+=E.x,R+=E.y,C+=1);return{x:A/C,y:R/C}}function x(y){let A=r.get(y.pointerId);if(A&&(A.x=y.clientX,A.y=y.clientY),!s||y.pointerId!==s.id||r.size!==1||!o())return;let R=n.getCamera();if(!R)return;let C=y.clientX-s.lastX,N=y.clientY-s.lastY;if(!s.dragging){if(Math.hypot(y.clientX-s.x,y.clientY-s.y)<=vu)return;s.dragging=!0}if(!C&&!N)return;let E=eT(C,N,e.clientHeight||1,t.rotateSpeed);tT(R,t.target,s.point,E.theta,E.phi),R.lookAt(t.target),s.lastX=y.clientX,s.lastY=y.clientY}function m(y){r.delete(y.pointerId),s&&s.id===y.pointerId&&f(),r.size<2&&(t.zoomToCursor=!1),r.size===0&&(t.enableRotate=!0)}function p(y){m(y)}function b(y){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||s&&s.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(y.clientX,y.clientY)}function v(){r.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:m,onPointerCancel:p,onWheel:b,onWheelDone:v}}function Ux(n){let e=sT(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var bo=class extends _i{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let r=0;r<t;r++)i[6*r]=e[r].x,i[6*r+1]=e[r].y,i[6*r+2]=e[r].z||0,i[6*r+3]=e[r+1].x,i[6*r+4]=e[r+1].y,i[6*r+5]=e[r+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Au=class extends Ur{constructor(e=new bo,t=new Oi({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var oT='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',aT=420,cT=36,lT=new P,Ox=new P,Fx=new P,Hd=new P,Ss=new P,Br=new P;function Wd(n){return new P(n[0]*.001,n[2]*.001,-n[1]*.001)}function Vd(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function Bx(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function uT(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function Ru(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function hT(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/aT,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function fT(n,e){if(e==="plate")return cT;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function Mo(n,e,t,i="center",r=null,s=1){let o=Number.isFinite(s)&&s>0?s:1,a=Math.max(8,Math.round(t*o)),c=n.map(C=>String(C)).filter(C=>C.length),l=document.createElement("canvas"),u=l.getContext("2d"),h=`600 ${a}px ${oT}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),g=Math.ceil(a*1.25);u&&(u.font=h);let x=a;if(u)for(let C of c)x=Math.max(x,u.measureText(C).width);let m=Math.ceil(x+f*2),p=Math.ceil(Math.max(c.length,1)*g+d*2),b=2;l.width=m*b,l.height=p*b;let v=l.getContext("2d");if(v){v.scale(b,b),v.clearRect(0,0,m,p);let C=e==="plate";v.font=h,v.textAlign="left",v.textBaseline="middle",v.lineJoin="round",v.miterLimit=2,v.lineWidth=Math.max(2,a*.28),v.strokeStyle=C?"#ffffff":"rgba(0,0,0,0.92)",v.fillStyle=r||(C?"#141414":"#f7f7f8"),c.forEach((N,E)=>{let S=f,z=d+g*E+g*.5;v.strokeText(N,S,z),v.fillText(N,S,z)})}let y=new rr(l);y.colorSpace=xt,y.flipY=!0,y.needsUpdate=!0;let A=new Ot({map:y,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:bt}),R=new nt(new jn(1,1),A);return R.renderOrder=30,R.frustumCulled=!1,R.userData.cssWidth=m,R.userData.cssHeight=p,R.userData.anchor=i,R.userData.fill=r,R.userData.fontScale=o,R}function Gd(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function Gi(n,e=!1){let t=new bo;t.setPositions([0,0,0,0,0,0]);let i=new Oi({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let r=new Au(t,i);return r.renderOrder=25,r.frustumCulled=!1,r.computeLineDistances(),r}function mr(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function zx(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:r,getVisibleWidthM:s,getTarget:o}=n,a=n.getExaggeration||(()=>1),c=new Dt;c.name="Annotations",c.userData.blueprintAnnotations=!0,e.add(c);let l=null,u="viewer",h=!0,f=0,d=[],g=null,x=null,m=null;function p(){return u==="plate"?1315860:15921908}function b(ne){return ne&&ne.color!=null?Vd(ne.color,p()):l&&l.annotationColor!=null?Vd(l.annotationColor,p()):p()}function v(ne){return Gd(b(ne))}function y(ne){let me=Number(ne&&ne.size);return Number.isFinite(me)&&me>0?me:1}function A(ne){ne.traverse(me=>{me.geometry&&me.geometry.dispose();let Me=me.material;Me&&(Me.map&&Me.map.dispose(),Me.dispose())})}function R(){for(let ne of[...c.children])c.remove(ne),A(ne);d=[],g=null,x=null,m=null}function C(){return fT(i(),u)}function N(){c.visible=!!l&&h}function E(){if(R(),f=C(),!l){N();return}let ne=r(),me=p(),Me=f,De=Array.isArray(l.annotations)?l.annotations:[];for(let X of De)if(!(!X||typeof X!="object")){if(X.kind==="callout"&&Array.isArray(X.anchor)){let ye=Ru(X.text,ne);if(!ye)continue;let xe=Mo(ye.split(`
`),u,Me,"center",v(X),y(X)),Ce=(X.leader===!1?[]:Bx(X)).map(()=>Gi(b(X)));c.add(...Ce,xe),d.push({kind:"callout",sprite:xe,lines:Ce,data:X})}else if(X.kind==="dim"&&Array.isArray(X.a)&&Array.isArray(X.b)){let ye=b(X),xe=Mo(["0"],u,Me,"center",Gd(ye),y(X)),Ce=Gi(ye),Xe=Gi(ye),Pe=Gi(ye),ce=Gi(ye),L=Gi(ye);c.add(Ce,Xe,Pe,ce,L,xe),d.push({kind:"dim",sprite:xe,lines:[Ce,Xe,Pe,ce,L],data:X})}else if(X.kind==="line"&&Array.isArray(X.points)&&X.points.length>=2){let ye=Vd(X.color,p()),Ce=[Gi(ye,!!X.dashed)];X.arrow&&Ce.push(Gi(ye,!1),Gi(ye,!1));let Xe=null,Pe=Ru(X.text,ne);Pe&&(Xe=Mo(Pe.split(`
`),u,Me,"center",Gd(ye),y(X))),c.add(...Ce),Xe&&c.add(Xe),d.push({kind:"line",sprite:Xe,lines:Ce,data:X})}}let j=Ru(l.title,ne),ie=l.project?String(l.project):"",H=[...j.split(`
`),ie].filter(Boolean);H.length&&(g=Mo(H,u,Me,"topleft"),c.add(g)),x=Mo(["1:1"],u,Me,"bottomleft"),m=Gi(me),c.add(m,x),N()}function S(ne){let me=Wd(ne),Me=a();return Me!==1&&(me.y*=Me),me}function z(ne,me=lT){return me.copy(ne).project(t())}function J(ne,me,Me,De=new P){return De.set(ne,me,Me).unproject(t())}function V(ne){let me=t(),Me=i(),De=Math.max(1,Me.clientHeight);if(me.isOrthographicCamera){let H=Math.max(me.zoom,1e-6);return(me.top-me.bottom)/H/De}let j=Math.max(me.position.distanceTo(ne),1e-4),ie=(me.fov||45)*Math.PI/180;return 2*Math.tan(ie/2)*j/De}let $=new P,ee=new P;function Q(ne,me){let Me=t(),De=V(me),j=De*ne.userData.cssWidth,ie=De*ne.userData.cssHeight;$.set(1,0,0).applyQuaternion(Me.quaternion),ee.set(0,1,0).applyQuaternion(Me.quaternion);let H=ne.userData.anchor||"center";ne.position.copy(me),H==="topleft"?(ne.position.addScaledVector($,j*.5),ne.position.addScaledVector(ee,-ie*.5)):H==="bottomleft"&&(ne.position.addScaledVector($,j*.5),ne.position.addScaledVector(ee,ie*.5)),ne.quaternion.copy(Me.quaternion),ne.scale.set(j,ie,1)}function he(){let ne=i(),me=Math.max(1,ne.width),Me=Math.max(1,ne.height);c.traverse(De=>{let j=De.material;j&&j.resolution&&j.resolution.set(me,Me)})}function te(ne,me){let Me=Mo(me,u,f||C(),ne.userData.anchor,ne.userData.fill,ne.userData.fontScale||1);ne.material.map?.dispose(),ne.material.dispose(),ne.material=Me.material,ne.userData.cssWidth=Me.userData.cssWidth,ne.userData.cssHeight=Me.userData.cssHeight,Me.geometry.dispose()}function de(){if(!l||!h||(C()!==f&&E(),!c.visible))return;he();let me=r();t().updateMatrixWorld();for(let H of d)if(H.kind==="callout"){let X=S(H.data.anchor),ye=z(X,Ox),xe=Array.isArray(H.data.offset)?H.data.offset:[.08,.06],Ce=ye.x+Number(xe[0]||0)*2,Xe=ye.y+Number(xe[1]||0)*2,Pe=J(Ce,Xe,ye.z,Fx);Q(H.sprite,Pe);let ce=V(Pe),L=ce*H.sprite.userData.cssWidth*.5,Ue=Bx(H.data);for(let be=0;be<H.lines.length;be+=1){let Te=S(Ue[be]||H.data.anchor);Ss.copy(Pe).sub(Te);let pe=Ss.length();pe>L+ce?(Ss.setLength(pe-L),Ss.add(Te)):Ss.copy(Pe),mr(H.lines[be],Te,Ss)}}else if(H.kind==="dim"){let X=S(H.data.a),ye=S(H.data.b),xe=z(X,Ox),Ce=z(ye,Fx),Xe=Ce.x-xe.x,Pe=Ce.y-xe.y,ce=Math.hypot(Xe,Pe)||1e-6;Xe/=ce,Pe/=ce;let L=Number(H.data.offset)||.04,Ue=-Pe*L*2,be=Xe*L*2,Te=(xe.z+Ce.z)*.5,pe=J(xe.x+Ue,xe.y+be,Te,new P),We=J(Ce.x+Ue,Ce.y+be,Te,new P),W=V(pe),w=W*6,M=W*8;Br.copy(pe).sub(X);let U=Br.length()||1;Br.multiplyScalar((U+M)/U);let I=X.clone().add(Br);Br.copy(We).sub(ye);let O=Br.length()||1;Br.multiplyScalar((O+M)/O);let F=ye.clone().add(Br),oe=X.clone().lerp(pe,Math.min(.85,w/U)),q=ye.clone().lerp(We,Math.min(.85,w/O));mr(H.lines[0],oe,I),mr(H.lines[1],q,F),mr(H.lines[2],pe,We);let Z=W*10,re=J(xe.x+Ue-Pe*.012,xe.y+be+Xe*.012,Te,new P).sub(pe);re.lengthSq()<1e-16?re.set(0,Z,0):re.setLength(Z),mr(H.lines[3],pe.clone().sub(re),pe.clone().add(re)),mr(H.lines[4],We.clone().sub(re),We.clone().add(re)),Hd.copy(pe).lerp(We,.5);let fe=J(xe.x+Ue-Pe*.03,xe.y+be+Xe*.03,Te,new P).sub(J(xe.x+Ue,xe.y+be,Te,new P));fe.lengthSq()>1e-12&&Hd.add(fe);let Ne=Ru(H.data.text,me)||uT(X.distanceTo(ye));H.sprite.userData.labelText!==Ne&&(te(H.sprite,[Ne]),H.sprite.userData.labelText=Ne),Q(H.sprite,Hd)}else if(H.kind==="line"){let X=H.data.points.map(xe=>S(xe)),ye=[];for(let xe of X)ye.push(xe.x,xe.y,xe.z);if(H.lines[0].geometry.setPositions(ye),H.lines[0].computeLineDistances(),H.data.arrow&&X.length>=2&&H.lines.length>=3){let xe=X[X.length-2],Ce=X[X.length-1],Xe=Ce.clone().sub(xe);if(Xe.lengthSq()>1e-12){Xe.normalize();let Pe=V(Ce),ce=Xe.clone().multiplyScalar(-Pe*16),L=new P().crossVectors(Xe,t().up).normalize().multiplyScalar(Pe*7);L.lengthSq()<1e-16&&L.set(Pe*7,0,0),mr(H.lines[1],Ce,Ce.clone().add(ce).add(L)),mr(H.lines[2],Ce,Ce.clone().add(ce).sub(L))}}if(H.sprite){let xe=X[0].clone().lerp(X[X.length-1],.5);Q(H.sprite,xe)}}let De=z(o(),Ss).z;if(g){let H=J(-.94,.9,De,new P);Q(g,H)}let j=s(),ie=hT(j??NaN);if(x&&m){let H=j!=null&&j>8?2:1,X=J(-.9,-.86,De,new P),ye=J(-.9+.08,-.86,De,new P).sub(X),xe=V(X),Ce=j&&j>0?H/j*Math.max(1,i().clientWidth):80;ye.lengthSq()>1e-12?ye.setLength(Math.max(Ce*xe,xe*40)):ye.set(xe*80,0,0),mr(m,X,X.clone().add(ye));let Xe=x.userData.labelText,Pe=ie?`${ie}  \xB7  ${Math.round(H*1e3)} mm`:"";Xe!==Pe&&(te(x,Pe?[Pe]:["\u2014"]),x.userData.labelText=Pe);let ce=J(-.9,-.8,De,new P).sub(X);Q(x,X.clone().add(ce))}}return{group:c,setSpec(ne){l=ne&&typeof ne=="object"?ne:null,E(),de()},setInk(ne){u=ne==="plate"?"plate":"viewer",E(),de()},setVisible(ne){h=!!ne,N(),c.visible&&de()},isVisible(){return h},relocalize(){E(),de()},glyphBoundsNdc(){let ne=i(),me=Math.max(1,ne.clientWidth),Me=Math.max(1,ne.clientHeight),De=1/0,j=-1/0,ie=1/0,H=-1/0,X=!1;for(let ye of d){let xe=ye.sprite;if(!xe||xe===g||xe===x||ye.kind!=="callout"&&ye.kind!=="dim"&&ye.kind!=="line")continue;let Ce=z(xe.position),Xe=(xe.userData.cssWidth||0)/me,Pe=(xe.userData.cssHeight||0)/Me;De=Math.min(De,Ce.x-Xe),j=Math.max(j,Ce.x+Xe),ie=Math.min(ie,Ce.y-Pe),H=Math.max(H,Ce.y+Pe),X=!0}return X?{minX:De,maxX:j,minY:ie,maxY:H}:null},update:de,clear(){l=null,R(),c.visible=!1}}}function kx(n){return n/25.4*72}function Xd(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function dT(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,r)=>{e.toBlob(s=>{s?i(s):r(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function pT(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function mT(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Wa(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function gT(n){let e=n.width,t=n.height,i=n.data,r=new Uint8Array(e*t*3);for(let y=0,A=0;y<i.length;y+=4,A+=3){let R=i[y+3]/255;r[A]=Math.round(i[y]*R+255*(1-R)),r[A+1]=Math.round(i[y+1]*R+255*(1-R)),r[A+2]=Math.round(i[y+2]*R+255*(1-R))}let{bytes:s,filter:o}=await mT(r),a=kx(420),c=kx(297),l=`q
${a.toFixed(3)} 0 0 ${c.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(l),h=[],f=0;function d(y){h.push(y),f+=y.length}let g=[0];function x(y,A){g[y]=f,d(Wa(`${y} 0 obj
`));for(let R of A)d(Wa(R));d(Wa(`
endobj
`))}d(Wa(`%PDF-1.4
`)),x(1,["<< /Type /Catalog /Pages 2 0 R >>"]),x(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),x(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${c.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),x(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),x(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${s.length} >>
stream
`,s,`
endstream`]);let m=f,p=`xref
0 6
0000000000 65535 f 
`;for(let y=1;y<=5;y++)p+=`${String(g[y]).padStart(10,"0")} 00000 n 
`;p+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${m}
%%EOF
`,d(Wa(p));let b=new Uint8Array(f),v=0;for(let y of h)b.set(y,v),v+=y.length;return new Blob([b],{type:"application/pdf"})}async function Hx(n){let e=await dT(n),t=await pT(e),i=await gT(t);return{png:e,pdf:i}}var qd="scene";function vT(){try{return(new URLSearchParams(location.search).get(qd)||"").trim()}catch{return""}}function Gx(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set(qd,t):e.searchParams.delete(qd);let i=`${e.pathname}${e.search}${e.hash}`,r=`${location.pathname}${location.search}${location.hash}`;i!==r&&history.replaceState(null,"",i)}catch{}}function bT(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],r=Array.isArray(t.partGroups)?t.partGroups:[],s=Array.isArray(t.doors)?t.doors:[],o=bx(t.ifc),a=new Map,c=()=>{},l=String(t.scene!=null?t.scene:vT()).trim();J0(),Ad(document);let u=[],h=null,f=1842206,d=!0,g=P0(),x=c0(),m=new Map,p=new Map,b=new Map,v=new Map,y=new Set,A=new Map,R=new Map,C=new Map,N=new Set,E=null;E=$0(_=>{d=_,f=_?1842206:15263981,h&&(h.background=new qe(f)),document.documentElement.style.colorScheme=_?"dark":"light",m.size&&Y()});let S=new Xl({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});S.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),S.outputColorSpace=xt,S.toneMapping=ya,S.toneMappingExposure=1.05,S.localClippingEnabled=!0;let z=M0(S);h=new Nn,h.background=new qe(f);let J=1,V=new Dt;V.name="VerticalExaggeration",h.add(V);function $(_){let D=Number(_);J=Number.isFinite(D)&&D>0?D:1,V.scale.set(1,J,1)}let ee=30,Q=120,he=75,te=125,de="perspective",ne=he,me=he,Me=1,De=!1,j=new Wt(45,1,.01,1e6),ie=new di(-1,1,1,-1,.01,1e6),H=j,X=new Kl(H,n);X.enableDamping=!1,X.screenSpacePanning=!0;let ye=()=>!1,xe=_x({canvas:n,getCamera:()=>H,records:s,isBlocked:()=>ye(),onLongPress:_=>c(_)}),Ce=new Map,Xe=new Map;vx(xe.taps,{elementOf:_=>sp(_),isOn:_=>!!Ce.get(_.globalId),isOpen:_=>!!Xe.get(_.globalId),onLight:_=>ly(_),onSwitch:_=>uy(_),onWindow:_=>hy(_)});let Pe=zx({scene:h,getCamera:()=>H,getCanvas:()=>n,getLocale:mu,getVisibleWidthM:()=>{if(!H.isOrthographicCamera)return null;let _=Math.max(H.zoom,1e-6);return(H.right-H.left)/_},getTarget:()=>X.target,getExaggeration:()=>J}),ce=null,L=null;h.add(new ha(16777215,.45));let Ue=new Ar(16777215,1.15);Ue.position.set(.6,1,.4),h.add(Ue);let be=new Ar(16777215,.4);be.position.set(-.5,.2,-.6),h.add(be);let Te=new uo(S);h.environment=Te.fromScene(new jl,.04).texture,Te.dispose();let pe=null;Ux({canvas:n,controls:X,getCamera:()=>H,getRoot:()=>pe,isBlocked:()=>ye()||X.enabled===!1});let We=new It,W=new P,w=new P,M=new P,U=new P,I=new P,O=[],F=1,oe=!1,q=!1,Z=!1;new Yl().parse(e,"",_=>{pe=_.scene,V.add(pe),xe.bind(pe),pe.traverse(k=>{if(!k.isMesh)return;let B=mx(k);k.userData.bpPart=B.part,k.userData.bpElementKey=B.element,B.element&&(a.has(B.element)||a.set(B.element,[]),a.get(B.element).push(k));let ue=B.part;if(m.has(ue)||m.set(ue,[]),m.get(ue).push(k),k.material){let Le=Array.isArray(k.material)?k.material:[k.material];for(let Ie of Le)"side"in Ie&&(Ie.side=bt)}}),bn(),se(),ae(),Ge(),zu();let D=Ke(l);D&&(He=`scene:${String(D.id).trim()}`),pt(),dt(),Gn(),Hr(),Y(),D&&Vn(D),ct(),E?.refreshPartialHeight(),$x(),Zx(),Rs(),Cs()},_=>{re(String(_?.message||_))});function re(_){let D=document.getElementById("err");D&&(D.style.display="block",D.textContent=_)}function fe(){pe&&(We.setFromObject(pe),We.getSize(W),We.getCenter(w))}function Ee(){let _=Math.max(1,n.clientWidth),D=Math.max(1,n.clientHeight);return _/D}function Ne(_,D){let k=_*Math.PI/180;return 2*Math.atan(Math.tan(k/2)/Math.max(D,1e-6))}function Ae(){let _=Ee();j.aspect=_,j.fov=Ne(ne,_)*180/Math.PI,j.updateProjectionMatrix()}function $e(_,D){let k=Ee(),B=Math.max(_,1e-6)*Math.tan(D/2),ue=B*k;ie.left=-ue,ie.right=ue,ie.top=B,ie.bottom=-B,ie.updateProjectionMatrix()}function Se(){let _=Ee(),k=Math.max(ie.top,1e-6)*_;ie.left=-k,ie.right=k,ie.updateProjectionMatrix()}function ke(_,D){let k=Ee(),B=Math.max(_,1e-6),Le=Math.max(D,1e-6),Ie=Le*k;Ie<B&&(Ie=B,Le=Ie/Math.max(k,1e-6)),Me=1,ie.left=-Ie,ie.right=Ie,ie.top=Le,ie.bottom=-Le,ie.updateProjectionMatrix(),ge()}function G(_){let D=Math.max(_,1e-4),k=M.copy(H.position).sub(X.target);k.lengthSq()<1e-12?k.set(0,0,1):k.normalize(),H.position.copy(X.target).addScaledVector(k,D)}function Re(_){_!==H&&(_.position.copy(H.position),_.quaternion.copy(H.quaternion),_.up.copy(H.up),_.near=H.near,_.far=H.far,H=_,X.object=H,X.update())}function le(){let _=Math.abs(qi)>.05||Math.abs(Yi)>.05||Math.abs(ni-1)>.001?ni:1;return Me*_}function ge(){H.zoom=le(),H.updateProjectionMatrix()}function Be(){if(De||q||!H.isOrthographicCamera)return;let _=Math.abs(qi)>.05||Math.abs(Yi)>.05||Math.abs(ni-1)>.001?ni:1;Me=Math.max(H.zoom/Math.max(_,1e-6),1e-6)}function Oe(){if(de==="ortho")return;me=ne;let _=H.position.distanceTo(X.target),D=Ne(ne,Ee());$e(_,D),Me=1,an(()=>{De=!0,Re(ie),de="ortho",ge(),De=!1}),Ze()}function et(_){if(de!=="ortho")return;let D=Ye(_??me),k=Math.max(ie.top,1e-6)/Math.max(Me,1e-6),B=Ne(D,Ee()),ue=k/Math.max(Math.tan(B/2),1e-8);ne=D,me=D,Me=1,an(()=>{De=!0,Re(j),de="perspective",Ae(),G(ue),ge(),Bt(),X.update(),De=!1}),Ze()}function ut(_,D={}){let k=Ye(_);if(de==="ortho"){et(k);return}let B=Ee(),ue=Ne(ne,B),Le=Ne(k,B),Ie=H.position.distanceTo(X.target);ne=k,me=k,an(()=>{if(Ae(),D.reframe!==!1){let Qe=Math.tan(ue/2)/Math.max(Math.tan(Le/2),1e-8);G(Ie*Qe),Bt(),X.update()}ge()}),Ze()}function Pt(){de==="ortho"?et(me):Oe()}function Ye(_){return Math.min(Q,Math.max(ee,_))}function Rt(){return de==="ortho"?te:ne}function ve(_){return _>Q?"ISO":`${Math.round(_)}\xB0`}function Ze(){ce&&(ce.value=Rt()),L&&(L.textContent=de==="ortho"?"ISO":`${Math.round(ne)}\xB0`),ce?.refresh()}function vn(_){if(_>Q){de!=="ortho"?Oe():Ze();return}let D=Ye(_);de==="ortho"?et(D):ut(D,{reframe:!0})}function dt(){let _=document.getElementById("fov");if(!_)return;_.replaceChildren();let D=document.createElement("div");D.className="fov-row";let k=document.createElement("span");k.className="fov-label",k.textContent=Ft("ui.fov"),L=document.createElement("span"),L.className="fov-value",L.textContent=`${Math.round(ne)}\xB0`,ce=pu({min:ee,max:te,step:1,value:Rt(),ariaLabel:"Field of view",formatAriaValue:ve,onInput:Ie=>vn(Ie),onChange:Ie=>vn(Ie),onTap:()=>Pt()}),ce.el.classList.add("fov-range");let B=document.createElement("div");B.className="fov-detent",B.setAttribute("aria-hidden","true");let ue=(Q-ee)/(te-ee);B.style.left=`${ue*100}%`,ce.el.querySelector(".coop-range-track")?.append(B),D.append(k,ce.el,L),_.append(D),Ze()}function Bt(){let _=Math.max(W.x,W.y,W.z,.01),D=H.position.distanceTo(X.target),k=Math.round(Math.min(Math.max(D/200,_/5e3,.001),D/10)*1e4)/1e4,B=Math.round(Math.max(D+_*4,_*8,10)*1e4)/1e4;H.near===k&&H.far===B||(H.near=k,H.far=B,H.updateProjectionMatrix())}function an(_){q=!0;try{_()}finally{requestAnimationFrame(()=>{q=!1})}}Ae();function bn(){pe&&(an(()=>{fe(),X.target.copy(w);let D=Math.max(W.x,W.y,W.z,1)*1.85;H.position.set(w.x+D*.75,w.y+D*.55,w.z+D*.75),Bt(),X.update()}),Mt())}function bi(){for(let _ of m.keys())p.set(_,1),b.set(_,1),dr(m.get(_)||[],1,{edgeMode:x});fe(),zr()}function Wi(_){if(pe){if(Je=null,Pe.clear(),$(1),bi(),Rs(),Cs(),j.up.set(0,1,0),ie.up.set(0,1,0),H.up.set(0,1,0),_==="iso"){bn();return}an(()=>{fe();let D=Math.max(W.x,W.y,W.z,1),k=D*1.85,B=w;_==="front"?H.position.set(B.x,B.y,B.z+k):_==="top"?H.position.set(B.x,B.y+k,B.z+D*.01):_==="side"&&H.position.set(B.x-k,B.y,B.z),X.target.copy(B),Bt(),X.update()}),Mt()}}function Vn(_){if(!pe||!_)return;Je=_,$(_.verticalExaggeration);let D=J;if(_.opacityDefault!=null||_.opacity&&typeof _.opacity=="object"){let Le=_.opacityDefault!=null?Number(_.opacityDefault):1,Ie=_.opacity&&typeof _.opacity=="object"?_.opacity:{},Qe=T0(Ie,u);for(let gt of m.keys()){let $t=Object.prototype.hasOwnProperty.call(Qe,gt)?Qe[gt]:Le;Xi(gt,$t,{skipUi:!0,skipClip:!0})}fe(),zr()}if(Object.prototype.hasOwnProperty.call(_,"cuts")){let Le=Array.isArray(_.cuts)?_.cuts:[];O.length=0;for(let Ie of Le){let Qe=Ie?.normal;if(!Array.isArray(Qe)||Qe.length<3)continue;let gt=new P(Number(Qe[0])||0,Number(Qe[1])||0,Number(Qe[2])||0);if(gt.lengthSq()<1e-12)continue;gt.normalize();let $t=null,tn=Math.min(1,Math.max(0,Number(Ie.t)||0));if(Array.isArray(Ie.anchor)&&Ie.anchor.length>=3){$t=Wd(Ie.anchor),$t.y*=D;let{near:yr,far:Gr}=ln(gt),Ja=$t.dot(gt);tn=Math.min(1,Math.max(0,(Ja-yr)/Math.max(Gr-yr,1e-6)))}O.push({id:F++,normal:gt,t:tn,anchor:$t,locked:!0,label:Vt(gt)})}oe=!1,So(),Gn(),Hr(),E?.refreshPartialHeight()}_.projection==="ortho"?de!=="ortho"?Oe():Ze():_.hFovDeg!=null&&Number.isFinite(Number(_.hFovDeg))&&ut(Number(_.hFovDeg),{reframe:!1});let B=_.camera;B&&Array.isArray(B.target)&&Array.isArray(B.position)&&an(()=>{De=!0;let Le=new P(0,1,0);Array.isArray(B.up)&&B.up.length>=3&&(Le.set(Number(B.up[0])||0,Number(B.up[1])||0,Number(B.up[2])||0),Le.lengthSq()<1e-12?Le.set(0,1,0):Le.normalize()),j.up.copy(Le),ie.up.copy(Le),H.up.copy(Le),X.target.set(Number(B.target[0])||0,(Number(B.target[1])||0)*D,Number(B.target[2])||0),H.position.set(Number(B.position[0])||0,(Number(B.position[1])||0)*D,Number(B.position[2])||0),H.lookAt(X.target),de==="ortho"&&Array.isArray(B.orthoFit)&&B.orthoFit.length>=2&&ke(Number(B.orthoFit[0])||.1,(Number(B.orthoFit[1])||.1)*D),fe(),Bt(),X.update(),De=!1}),Mt();let ue=_.edges;(ue==="none"||ue==="transparent"||ue==="opaque")&&(x=ue,T()),Pe.setSpec(_),Rs(),Cs()}function Xi(_,D,k={}){let B=Math.max(0,Math.min(1,Number(D)||0));p.set(_,B),B>0&&b.set(_,B),k.detach&&y.add(_),dr(m.get(_)||[],B,{edgeMode:x}),!k.skipClip&&(fe(),k.skipUi||zr())}function Xa(_,D,k){let B=Math.max(0,Math.min(1,Number(D)||0));k&&v.set(k,B);for(let ue of _)y.has(ue)||(p.set(ue,B),B>0&&b.set(ue,B),dr(m.get(ue)||[],B,{edgeMode:x}));fe(),zr()}function Cu(_,D,k){y.delete(_);let B=k.filter(Le=>!y.has(Le)),ue=Es(D,B);p.set(_,ue),ue>0&&b.set(_,ue),dr(m.get(_)||[],ue,{edgeMode:x}),fe(),zr()}function Pu(_){if(!_.length)return 1;let D=p.get(_[0])??1;for(let k=1;k<_.length;k++){let B=p.get(_[k])??1;if(Math.abs(B-D)>1e-4)return NaN}return D}function Es(_,D){let k=D.filter(ue=>!y.has(ue)),B=Pu(k.length?k:D);return Number.isNaN(B)?v.get(_)??1:B}function zr(){for(let[_,D]of A)D.value=(p.get(_)??1)*100;for(let[_,D]of R){let k=(D.el.dataset.leaves||"").split(",").map(B=>B.trim()).filter(Boolean);D.value=Es(_,k)*100}for(let[_,D]of C){let k=y.has(_);D.hidden=!k,D.setAttribute("aria-hidden",k?"false":"true")}}function kr(){return O.filter(_=>_.locked).map(_=>ws(_))}function qa(){let _=new Ve;return S.getDrawingBufferSize(_),{x:_.x,y:_.y}}function T(){if(m.size){if(x===ys){p0(pe);return}g0(m,!0,{clippingPlanes:kr(),resolution:qa(),edgeMode:x})}}function Y(){m.size&&(R0(m,g,{isDark:d,clippingPlanes:kr(),opacityByLabel:p,edgeMode:x}),g===Fa?(S.toneMapping=ya,S.toneMappingExposure=1.05):(S.toneMapping=mi,S.toneMappingExposure=1),T(),Md(m,kr()))}function se(){let _=document.getElementById("mats");if(_){_.replaceChildren();for(let[D,k]of[[uu,"ui.solid"],[Fa,"ui.realistic"]]){let B=document.createElement("button");B.type="button",B.dataset.mode=D,B.textContent=Ft(k),D===g&&B.classList.add("is-active"),B.addEventListener("click",()=>{g=D,I0(D),_.querySelectorAll("button").forEach(ue=>{ue.classList.toggle("is-active",ue.dataset.mode===D)}),Y()}),_.append(B)}}}function ae(){let _=document.getElementById("edges");if(_){_.replaceChildren();for(let[D,k]of[[ys,"ui.edgesNone"],[_s,"ui.edgesTransparent"],[Ua,"ui.edgesOpaque"]]){let B=document.createElement("button");B.type="button",B.dataset.edgeMode=D,B.textContent=Ft(k),D===x&&B.classList.add("is-active"),B.addEventListener("click",()=>{x=D,fd(D),_.querySelectorAll("button").forEach(ue=>{ue.classList.toggle("is-active",ue.dataset.edgeMode===D)}),T(),ip()}),_.append(B)}}}function K(_,D,k,B){let ue=document.createElement("div");ue.className="part-opacity-wrap";let Le,Ie=()=>{if(Le.value/100>0)B(0);else{let gt=k();B(gt>0?gt:1)}};return Le=pu({min:0,max:100,step:1,value:Math.round(D),ariaLabel:_,formatAriaValue:Qe=>`${Math.round(Qe)}%`,thumbScrubOnly:!0,onInput:Qe=>B(Qe/100),onChange:Qe=>B(Qe/100),onTap:Ie}),Le.el.classList.add("part-opacity"),ue.append(Le.el),{wrap:ue,range:Le}}function we(){let _=document.getElementById("parts");if(!_)return;_.style.removeProperty("--part-name-col");let D=0;for(let k of _.querySelectorAll(".part-name")){if(k.closest(".part-children")?.hidden)continue;let ue=k.style.width;k.style.width="max-content",D=Math.max(D,Math.ceil(k.getBoundingClientRect().width)),k.style.width=ue}D>0&&_.style.setProperty("--part-name-col",`${D}px`)}function ze(_,D,k,B=null){if(_.type==="leaf"){let _t=document.createElement("div");_t.className="part-row part-leaf",_t.style.setProperty("--part-depth",String(k)),_t.dataset.leaf=_.id;let Qa=document.createElement("span");Qa.className="part-disclosure-spacer",Qa.setAttribute("aria-hidden","true");let ec=document.createElement("span");ec.className="part-name",ec.textContent=_.label;let{wrap:fp,range:dp}=K(`${_.label} opacity`,(p.get(_.id)??1)*100,()=>b.get(_.id)??1,tc=>Xi(_.id,tc,{detach:!!B}));dp.el.dataset.leaf=_.id,A.set(_.id,dp);let ri=null;if(B){ri=document.createElement("button"),ri.type="button",ri.className="part-sync",ri.textContent=Ft("ui.sync"),ri.setAttribute("aria-label",`${Ft("ui.sync")} ${_.label}`);let tc=y.has(_.id);ri.hidden=!tc,ri.setAttribute("aria-hidden",tc?"false":"true"),ri.addEventListener("click",xy=>{xy.stopPropagation(),Cu(_.id,B.groupId,B.leafIds)}),C.set(_.id,ri)}ri?_t.append(Qa,ec,fp,ri):_t.append(Qa,ec,fp),D.append(_t);return}let ue=hu(_),Le=document.createElement("div");Le.className="part-group",Le.dataset.group=_.id;let Ie=document.createElement("div");Ie.className="part-row part-group-row",Ie.style.setProperty("--part-depth",String(k)),Ie.setAttribute("role","button"),Ie.tabIndex=0;let Qe=document.createElement("button");Qe.type="button",Qe.className="part-disclosure",Qe.setAttribute("aria-label",`Expand ${_.label}`),Qe.setAttribute("aria-expanded","false");let gt=document.createElement("span");gt.className="part-name",gt.textContent=_.label;let $t=Es(_.id,ue)||1;$t<=0&&($t=1);let{wrap:tn,range:yr}=K(`${_.label} opacity`,Es(_.id,ue)*100,()=>$t,_t=>{_t>0&&($t=_t),Xa(ue,_t,_.id)});yr.el.dataset.group=_.id,yr.el.dataset.leaves=ue.join(","),R.set(_.id,yr),tn.addEventListener("click",_t=>_t.stopPropagation()),tn.addEventListener("pointerdown",_t=>_t.stopPropagation());let Gr=document.createElement("div");Gr.className="part-children",Gr.hidden=!0;function Ja(_t){_t?N.add(_.id):N.delete(_.id),Gr.hidden=!_t,Le.classList.toggle("is-expanded",_t),Qe.setAttribute("aria-expanded",_t?"true":"false"),Qe.setAttribute("aria-label",_t?`Collapse ${_.label}`:`Expand ${_.label}`),requestAnimationFrame(()=>we())}function Wu(){Ja(!N.has(_.id))}Qe.addEventListener("click",_t=>{_t.stopPropagation(),Wu()}),Ie.addEventListener("click",_t=>{tn.contains(_t.target)||Wu()}),Ie.addEventListener("keydown",_t=>{(_t.key==="Enter"||_t.key===" ")&&(_t.preventDefault(),Wu())}),Ie.append(Qe,gt,tn),Le.append(Ie,Gr),D.append(Le);let gy={groupId:_.id,leafIds:ue};for(let _t of _.children)ze(_t,Gr,k+1,gy);Ja(N.has(_.id))}function Ge(){let _=document.getElementById("parts");if(!_)return;_.replaceChildren(),A.clear(),R.clear(),C.clear();for(let k of m.keys())p.has(k)||(p.set(k,1),dr(m.get(k)||[],1,{edgeMode:x})),b.has(k)||b.set(k,1);let D=w0(m.keys(),r,Ft);u=D;for(let k of D)ze(k,_,0,null);requestAnimationFrame(()=>we())}let He="iso",Je=null,it=!1;function Ke(_){let D=String(_||"").trim();if(!D)return null;for(let k of i)if(String(k?.id||"").trim()===D)return k;return null}function ct(){let _=He;_&&_.startsWith("scene:")?Gx(_.slice(6)):Gx(null)}function mt(){return document.querySelectorAll("#cams button, #scenes button")}function zt(){He!=null&&(He=null,mt().forEach(_=>{_.classList.remove("is-active")}),ct())}function Lt(){let _=document.getElementById("scenes");if(!_){let D=document.getElementById("cams");_=document.createElement("div"),_.id="scenes",_.className="scene-list",D?.insertAdjacentElement("afterend",_)}return _}function pt(){let _=document.getElementById("cams");if(!_)return;_.replaceChildren();let D=Lt();D.replaceChildren();function k(B,ue,Le,Ie){let Qe=document.createElement("button");Qe.type="button",Qe.dataset.preset=ue,Qe.textContent=Le,ue===He&&Qe.classList.add("is-active"),Qe.addEventListener("click",()=>{He=ue,mt().forEach(gt=>{gt.classList.toggle("is-active",gt.dataset.preset===ue)}),Ie(),ct()}),B.append(Qe)}for(let[B,ue]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])k(_,B,Ft(ue),()=>Wi(B));for(let B of i){let ue=String(B?.id||"").trim();if(!ue)continue;let Le=Ft(`scene.${ue}`);k(D,`scene:${ue}`,Le,()=>Vn(B))}D.hidden=D.childElementCount===0}function je(_=M){return _.copy(X.target).sub(H.position).normalize()}function Vt(_){let D=Math.hypot(_.x,_.z),k=(Math.atan2(_.x,_.z)*180/Math.PI+360)%360,B=Math.atan2(_.y,D)*180/Math.PI,ue=Math.abs(B).toFixed(0),Le=B>=0?"\u2191":"\u2193";return`${k.toFixed(0)}\xB0 / ${ue}\xB0${Le}`}function ht(){return O.some(_=>!_.locked)}function cn(){return O.filter(_=>_.locked)}function Gn(){ht()||!(cn().length===0||oe)||O.push({id:F++,normal:new P(0,0,1),t:0,locked:!1,label:Ft("ui.cut")})}function In(_){let D=document.getElementById("cuts");if(!D)return;let k=D.querySelector(`[data-cut-id="${_.id}"]`);if(!k){Hr();return}let B=k.querySelector(".cut-label");if(B&&(B.textContent=_.locked?_.label:Ft("ui.cut")),_.locked&&!k.querySelector(".cut-remove")){let ue=document.createElement("button");ue.type="button",ue.className="cut-remove",ue.setAttribute("aria-label",Ft("ui.removeSection")),ue.textContent="\xD7",ue.addEventListener("click",()=>Yt(_.id)),k.append(ue)}}function gr(_){_.locked||(je(_.normal),_.locked=!0,_.label=Vt(_.normal),oe=!1,So(),In(_))}function Mt(){cn().length!==0&&(ht()||(oe=!0,!Z&&(Gn(),Hr())))}function On(){oe&&(ht()||cn().length!==0&&(Gn(),Hr()))}function Mn(_,D){let k=O.find(B=>B.id===_);if(k){if(k.locked||gr(k),k.t=Math.min(1,Math.max(0,Number(D))),k.anchor=null,Z){Mi();return}So()}}function Yt(_){let D=O.findIndex(k=>k.id===_);D<0||(O.splice(D,1),cn().length===0?(oe=!1,ht()||Gn()):oe&&!ht()&&Gn(),So(),Hr(),E?.refreshPartialHeight())}function ln(_){if(fe(),We.isEmpty())return{near:-1,far:1};let D=We.min,k=We.max,B=1/0,ue=-1/0;for(let Qe=0;Qe<2;Qe++)for(let gt=0;gt<2;gt++)for(let $t=0;$t<2;$t++){I.set(Qe?k.x:D.x,gt?k.y:D.y,$t?k.z:D.z);let tn=I.dot(_);tn<B&&(B=tn),tn>ue&&(ue=tn)}let Ie=Math.max(ue-B,1e-6)*.02;return{near:B-Ie,far:ue+Ie}}function ws(_){if(_.anchor)return new hn().setFromNormalAndCoplanarPoint(_.normal,_.anchor);let{near:D,far:k}=ln(_.normal),B=D+(k-D)*_.t;return U.copy(_.normal).multiplyScalar(B),new hn().setFromNormalAndCoplanarPoint(_.normal,U)}function Mi(){let _=kr();return pe&&(pe.traverse(D=>{if(!D.isMesh||!D.material||Cn(D)||du(D))return;let k=Array.isArray(D.material)?D.material:[D.material];for(let B of k){if(!B)continue;let ue=B.clippingPlanes?B.clippingPlanes.length:0;B.clippingPlanes=_,B.clipIntersection=!1,ue!==_.length&&(B.needsUpdate=!0)}}),dd(pe,_)),_}function So(){let _=Mi();pe&&(Md(m,_),x!==ys?T():dd(pe,_))}function Hr(){let _=document.getElementById("cuts");if(_){_.replaceChildren();for(let D of O){let k=document.createElement("div");k.className="cut-row",k.dataset.cutId=String(D.id);let B=document.createElement("span");B.className="cut-label",B.textContent=D.locked?D.label:Ft("ui.cut");let ue=()=>{Z&&(Z=!1,So(),On())},Le=pu({min:0,max:1,step:.001,value:D.t,ariaLabel:D.locked?`Section ${D.label}`:"Section cut",onScrubStart:()=>{Z=!0,D.locked||gr(D)},onScrubEnd:ue,onInput:Ie=>Mn(D.id,Ie),onChange:Ie=>{Mn(D.id,Ie),ue()}});if(k.append(B,Le.el),D.locked){let Ie=document.createElement("button");Ie.type="button",Ie.className="cut-remove",Ie.setAttribute("aria-label",Ft("ui.removeSection")),Ie.textContent="\xD7",Ie.addEventListener("click",()=>Yt(D.id)),k.append(Ie)}_.append(k)}E?.refreshPartialHeight()}}let Eo=!1,Iu=new P,Du=new P,Yd=!1;n.addEventListener("pointerdown",()=>{Eo=!0},{capture:!0});let $d=()=>{Eo=!1};window.addEventListener("pointerup",$d,{capture:!0}),window.addEventListener("pointercancel",$d,{capture:!0}),X.addEventListener("start",()=>{zt(),Eo=!0}),X.addEventListener("change",()=>{Be()}),X.addEventListener("end",()=>{Eo=!1,!q&&Mt()});let ni=1,qi=0,Yi=0,Lu=1,Nu=0,Uu=0,Ou=1,Fu=0,Bu=0,Vr=0,Wx=280;function Xx(){let _=Math.max(1,n.clientWidth),D=Math.max(1,n.clientHeight);if(!E)return{zoom:1,offX:0,offY:0,w:_,h:D};let{bottom:k,right:B}=E.getSafeInsets();if(k<=0&&B<=0)return{zoom:1,offX:0,offY:0,w:_,h:D};let ue=Math.max(1,_-B),Le=Math.max(1,D-k),Ie=Math.min(ue/_,Le/D),Qe=B/2,gt=k/2;return{zoom:Ie,offX:Qe,offY:gt,w:_,h:D}}function Zd(_,D){an(()=>{De=!0,Math.abs(qi)>.05||Math.abs(Yi)>.05||Math.abs(ni-1)>.001?(H.zoom=Me*ni,H.setViewOffset(_,D,qi,Yi,_,D)):(H.clearViewOffset(),H.zoom=Me,ni=1,qi=0,Yi=0),H.updateProjectionMatrix(),De=!1})}function Kd(_=!0){let{zoom:D,offX:k,offY:B,w:ue,h:Le}=Xx();if(Lu=D,Nu=k,Uu=B,!_){ni=D,qi=k,Yi=B,Vr=0,Zd(ue,Le);return}Ou=ni,Fu=qi,Bu=Yi,Vr=performance.now()}function qx(_){if(!Vr)return;let D=Math.min(1,(_-Vr)/Wx),k=1-(1-D)**3;ni=Ou+(Lu-Ou)*k,qi=Fu+(Nu-Fu)*k,Yi=Bu+(Uu-Bu)*k;let B=Math.max(1,n.clientWidth),ue=Math.max(1,n.clientHeight);Zd(B,ue),D>=1&&(Vr=0)}function Ya(){let _=Math.max(1,n.clientWidth),D=Math.max(1,n.clientHeight);S.setSize(_,D,!1),de==="perspective"?Ae():Se(),Kd(!1);let k=qa();m0(pe,k.x,k.y)}Ya(),window.addEventListener("resize",Ya),E?.onDetentChange(()=>{Kd(!0)});let Fn=document.getElementById("ar"),un=document.getElementById("measure"),wo=!1,$a=()=>Ft("ui.measure");function zu(){let _=document.getElementById("locale");if(_){_.replaceChildren();for(let[D,k]of[["cs","CS"],["en","EN"]]){let B=document.createElement("button");B.type="button",B.dataset.locale=D,B.textContent=k,D===mu()&&B.classList.add("is-active"),B.addEventListener("click",()=>{j0(D)}),_.append(B)}}}function Yx(){Ad(document),Fn&&!wo&&(Fn.textContent=Ft("ui.ar")),un&&(un.textContent=$a()),Rs(),Cs(),Pe.relocalize();try{se(),ae(),pt(),dt(),Ge(),Hr(),zu()}catch(_){console.error("relocalizeUi",_);try{zu()}catch{}}E?.refreshPartialHeight()}Td(()=>Yx());function $x(){Fn&&(Fn.hidden=!1,wo||(Fn.textContent=Ft("ui.ar")))}function Zx(){un&&(un.hidden=!1,un.textContent=$a())}let Ts=document.getElementById("drawing"),xr=document.getElementById("labels"),As=!0;function Rs(){Ts&&(Ts.hidden=!1,Ts.disabled=!Je||Za,Ts.textContent=Ft("ui.drawing"))}function Cs(){if(!xr)return;let _=!!Je;xr.hidden=!_,xr.disabled=!_,xr.setAttribute("aria-pressed",As?"true":"false"),xr.classList.toggle("is-active",_&&As),xr.textContent=Ft("ui.labels")}function Kx(){try{let _=new URLSearchParams(window.location.search).get("m");if(_&&_.trim())return _.trim()}catch{}return"model"}function jx(){let D=1,k=1.35;for(let B=0;B<6;B+=1){Pe.update();let ue=Pe.glyphBoundsNdc();if(!ue)return;let Le=Math.max(-1+.04-ue.minX,ue.maxX-(1-.04),-1+.04-ue.minY,ue.maxY-(1-.04),0);if(Le<.012||D>=k-.01)return;let Ie=Math.min(k/D,Math.max(1.05,1+Le*1.6));D*=Ie,H.isOrthographicCamera?(ie.left*=Ie,ie.right*=Ie,ie.top*=Ie,ie.bottom*=Ie,ie.updateProjectionMatrix()):(M.copy(H.position).sub(X.target).multiplyScalar(Ie),H.position.copy(X.target).add(M),Bt())}}function jd(){Vr=0,ni=1,qi=0,Yi=0,Lu=1,Nu=0,Uu=0,H.clearViewOffset(),H.zoom=Me,H.updateProjectionMatrix()}let Za=!1;async function Jd(){if(Za||!pe||!Je)return null;Za=!0,Rs(),it=!0;let _=Je,D=x,k=h.background,B=S.getPixelRatio(),ue=n.style.width,Le=n.style.height,Ie=E?.getDetent?.()??null,Qe=ii?.isActive()??!1,gt=Pe.isVisible();try{Qe&&ii?.setActive(!1),Pe.setVisible(!0),E?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,S.setPixelRatio(1),Ya(),jd(),x=Ua,T(),h.background=new qe(16777215),Pe.setInk("plate"),Vn(_),jd(),jx(),Pe.update(),z.render(h,H,pe,np,{quality:"high"});let{png:$t,pdf:tn}=await Hx(n),yr=`${Kx()}_${String(_.id||"scene")}`;return{png:$t,pdf:tn,stem:yr}}finally{n.style.width=ue,n.style.height=Le,S.setPixelRatio(B),x=D,h.background=k,Pe.setInk("viewer"),Pe.setVisible(gt),Ie&&E?.setDetent(Ie),Ya(),T(),_&&Vn(_),Qe&&ii?.setActive(!0),it=!1,Za=!1,Rs(),Cs(),requestAnimationFrame(ja)}}window.blueprintCaptureDrawing=async()=>{let _=await Jd();return _?{png:_.png,pdf:_.pdf,stem:_.stem}:null},window.blueprintSetView=(_={})=>{if(!pe||!_)return!1;let D=_.projection==="ortho"?"ortho":"perspective",k=Number.isFinite(Number(_.hFovDeg))?Number(_.hFovDeg):ne;return D==="perspective"&&de==="ortho"&&et(k),D==="perspective"&&ut(k,{reframe:!1}),an(()=>{De=!0;let B=new P(0,1,0);if(Array.isArray(_.up)&&_.up.length>=3&&(B.set(Number(_.up[0])||0,Number(_.up[1])||0,Number(_.up[2])||0),B.lengthSq()>1e-12?B.normalize():B.set(0,1,0)),j.up.copy(B),ie.up.copy(B),H.up.copy(B),Array.isArray(_.target)&&X.target.set(Number(_.target[0])||0,Number(_.target[1])||0,Number(_.target[2])||0),Array.isArray(_.position)&&H.position.set(Number(_.position[0])||0,Number(_.position[1])||0,Number(_.position[2])||0),H.lookAt(X.target),D==="ortho"){let ue=H.position.distanceTo(X.target),Le=Ne(k,Ee());$e(ue,Le),Me=1,de!=="ortho"&&(Re(ie),de="ortho"),ge(),Ze()}fe(),Bt(),X.update(),De=!1}),en=!0,!0},xr&&xr.addEventListener("click",()=>{As=!As,Pe.setVisible(As),Cs()}),Ts&&Ts.addEventListener("click",()=>{(async()=>{let _=await Jd();_&&(Xd(_.png,`${_.stem}.png`),Xd(_.pdf,`${_.stem}.pdf`))})()});let ii=null;h&&(ii=px({scene:h,canvas:n,getCamera:()=>H,controls:X,getRoot:()=>pe,getClipPlanes:()=>kr(),onLiveLength:_=>{un&&(_?(un.textContent=_,un.classList.add("is-live")):(un.textContent=$a(),un.classList.remove("is-live")))},onActiveChange:_=>{en=!0,un&&(un.classList.toggle("is-active",_),un.setAttribute("aria-pressed",_?"true":"false"),_||(un.textContent=$a(),un.classList.remove("is-live")))}})),un&&un.addEventListener("click",()=>{ii&&ii.setActive(!ii.isActive())}),ye=()=>!!ii?.isActive();function Qd(){if(!pe)return null;pe.updateWorldMatrix(!0,!0);let _=cn().map(ue=>ws(ue)),D=new Dt;if(D.name="ARContent",pe.traverse(ue=>{if(!ue.isMesh||!ue.visible||Cn(ue))return;let Le=H0(ue,_);Le&&D.add(Le)}),!D.children.length)return null;D.updateMatrixWorld(!0);let k=Sd(D),B=new Dt;return B.name="ARExport",B.add(D),q0(D,k),B.userData.arPlacement=k,B}async function ep(){if(wo||!pe)return;wo=!0;let _=Fn?.textContent||"AR";Fn&&(Fn.disabled=!0,Fn.textContent="\u2026");try{let D=Qd();if(!D)throw new Error("Nothing visible to export. Show at least one part.");let B=await new tu().parseAsync(D,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),ue=new Blob([B],{type:"model/vnd.usdz+zip"}),Le=URL.createObjectURL(ue),Ie=document.createElement("a");Ie.rel="ar",Ie.href=Le,Ie.download="view.usdz";let Qe=document.createElement("img");Qe.alt="AR",Ie.appendChild(Qe),document.body.appendChild(Ie),Ie.click(),Ie.remove(),setTimeout(()=>URL.revokeObjectURL(Le),6e4)}catch(D){re(String(D?.message||D))}finally{wo=!1,Fn&&(Fn.disabled=!1,Fn.textContent=_)}}Fn&&Fn.addEventListener("click",()=>{ep()});let tp={scene:h,get camera(){return H},controls:X,parts:m,partOpacity:p,cuts:O,scenes:i,setPartOpacity:Xi,setCameraPreset:Wi,applyScene:Vn,setHFov:ut,toggleFovIso:Pt,get projection(){return de},get hFovDeg(){return ne},setCutT:Mn,removeCut:Yt,frameIso:bn,openArQuickLook:ep,buildArExportScene:Qd,getPeelQuality:()=>Ao};window.BlueprintsViewer=tp;function np(){for(let _ of p.values())if(_<1-1e-4)return!0;return!1}function ip(){for(let[_,D]of m){let k=p.get(_)??1;dr(D,k,{edgeMode:x})}}let rp=!1,en=!0,$i=null,ku=Px(o),Hu=new pi,Vu=new Ve,Gu=Cx({index:o,visibility:ku,t:Ft,openSheet(){let _=window.matchMedia("(min-width: 768px)").matches;E?.setDetent(_?"open":"partial")},onFrame:(_,D)=>{D?.move?sy(_):ry(_)},onVisibility:()=>ay(),actionsFor:()=>[]});function sp(_){let D=_;for(;D;){let k=D.userData?.bpElementKey||Fr(D.name||"").element;if(k){for(let B of Object.values(o.elements))if(B.id===k)return B}D=D.parent}return null}function op(_){return _?a.get(_)||[]:[]}function To(_){if(!_)return[];let D=op(_.id);if(D.length)return D;let k=[];for(let B of Ms(o,_.globalId)){let ue=o.elements[B];ue&&ue!==_&&k.push(...op(ue.id))}return k}function Jx(_){let D=new It,k=new P;for(let B of _){let ue=B.geometry;if(!ue)continue;ue.boundingBox||ue.computeBoundingBox();let Le=ue.boundingBox;if(Le){B.updateWorldMatrix(!0,!1);for(let Ie of[Le.min.x,Le.max.x])for(let Qe of[Le.min.y,Le.max.y])for(let gt of[Le.min.z,Le.max.z])k.set(Ie,Qe,gt).applyMatrix4(B.matrixWorld),D.expandByPoint(k)}}return D}let Qx=480,Si=null;function ey(_){let D=Math.min(1,Math.max(0,_));return D<.5?4*D*D*D:1-(-2*D+2)**3/2}function ty(_){let D=_.getSize(I),k=Math.max(D.x,D.y,D.z,.2),B=_.getCenter(new P),ue=H.position.clone().sub(X.target);ue.lengthSq()<1e-8?ue.set(.75,.55,.75):ue.normalize();let Le;if(H.isOrthographicCamera)Le=Math.max(H.position.distanceTo(X.target),k*1.4);else{let Ie=(H.fov||45)*Math.PI/180;Le=Math.max(k*.62/Math.max(Math.tan(Ie/2),.001),k*1.25)}return{center:B,position:B.clone().addScaledVector(ue,Le),span:k}}function ny(_){Si={t0:performance.now(),fromPos:H.position.clone(),toPos:_.position,fromTarget:X.target.clone(),toTarget:_.center,span:_.span},en=!0}function iy(_){if(!Si)return;let D=Math.min(1,(_-Si.t0)/Qx),k=ey(D);H.position.lerpVectors(Si.fromPos,Si.toPos,k),X.target.lerpVectors(Si.fromTarget,Si.toTarget,k),H.isOrthographicCamera&&ke(Si.span*.62,Si.span*.62),q=!0,X.update(),fe(),Bt(),en=!0,D>=1&&(Si=null,requestAnimationFrame(()=>{q=!1}))}function ry(_){let D=To(o.elements[_]);D.length&&ap(D),en=!0}function sy(_){let D=o.elements[_],k=To(D);if(!k.length)return;let B=Jx(k);B.isEmpty()||(ny(ty(B)),ap(k),en=!0)}function ap(_){$i&&cp();let D=[];for(let k of _){if(!k.isMesh||!k.material)continue;let B=Array.isArray(k.material)?k.material:[k.material],ue=B.map(Le=>{let Ie=Le.clone();return Ie.emissive?(Ie.emissive.setHex(16756768),Ie.emissiveIntensity=0):Ie.color&&(Ie.userData.bpPulseBase=Ie.color.getHex()),D.push(Ie),Ie});k.userData.bpPulseMaterial=B,k.material=ue.length===1?ue[0]:ue}$i={meshes:_,clones:D,t0:performance.now()}}function cp(){if($i){for(let _ of $i.meshes){let D=_.userData.bpPulseMaterial;D&&(_.material=D.length===1?D[0]:D),delete _.userData.bpPulseMaterial}for(let _ of $i.clones)_.dispose?.();$i=null}}function oy(_){if(!$i)return;let D=(_-$i.t0)/900;if(D>=1){cp(),en=!0;return}let k=Math.sin(Math.min(D,1)*Math.PI);for(let B of $i.clones)B.emissive?B.emissiveIntensity=.85*k:B.color&&B.userData.bpPulseBase!=null&&B.color.setHex(B.userData.bpPulseBase).offsetHSL(.08,.2,.18*k);en=!0}function ay(){let _=new Set;for(let D of Object.values(o.elements))ku.isHidden(D.globalId)&&D.id&&_.add(D.id);for(let[D,k]of a){let B=_.has(D);for(let ue of k){ue.userData.bpIfcHidden=B;for(let Le of ue.children||[])(Le?.userData?.isEdgeOverlay||Le?.userData?.isSectionCap)&&(Le.visible=!B)}}for(let D of xe.bindings){let k=Fr(D.host?.name||"").element,B=!!(k&&_.has(k));D.host&&(D.host.userData.bpIfcHidden=B)}for(let[D,k]of m)dr(k,p.get(D)??1,{edgeMode:x});en=!0}function cy(_,D){let B=(Array.isArray(_.material)?_.material:[_.material]).map(ue=>{if(!ue)return ue;if(ue.userData.bpOwned)return D(ue);let Le=ue.clone();return Le.userData.bpOwned=!0,D(Le)});_.material=B.length===1?B[0]:B}function ly(_){let D=!Ce.get(_.globalId);Ce.set(_.globalId,D);for(let k of To(_))cy(k,B=>(B.emissive?(B.emissive.setHex(D?16773570:0),B.emissiveIntensity=D?.9:0):B.color&&(B.userData.bpLightBase==null&&(B.userData.bpLightBase=B.color.getHex()),B.color.setHex(D?16774079:B.userData.bpLightBase)),B));en=!0}function uy(_){for(let D of To(_)){if(D.userData.bpPressing)continue;D.userData.bpPressing=!0;let k=D.position.y;D.position.y=k-.004,window.setTimeout(()=>{D.position.y=k,D.userData.bpPressing=!1,en=!0},160)}en=!0}function hy(_){let D=!Xe.get(_.globalId);Xe.set(_.globalId,D);for(let k of To(_)){k.userData.bpSlideOrigin||(k.userData.bpSlideOrigin=k.position.clone());let B=k.geometry;B&&!B.boundingBox&&B.computeBoundingBox();let ue=B?.boundingBox?B.boundingBox.max.x-B.boundingBox.min.x:.4;k.position.copy(k.userData.bpSlideOrigin),D&&(k.position.x+=ue*.8)}en=!0}function fy(_){if(ye())return;let D=H;if(!D||!pe)return;let k=n.getBoundingClientRect(),B=k.width||n.clientWidth||1,ue=k.height||n.clientHeight||1;Vu.x=(_.clientX-k.left)/B*2-1,Vu.y=-((_.clientY-k.top)/ue)*2+1,Hu.setFromCamera(Vu,D);let Le=Hu.intersectObject(pe,!0).filter(tn=>za(tn.object)),Ie=Le[0];if(!Ie){Gu.closePopover();return}let Qe=sp(Ie.object),gt=Ie.object.userData?.bpPart||Fr(Ie.object.name||"").part,$t=xe.taps.actionsFor(Le,{raycaster:Hu,now:performance.now()},tn=>za(tn.object));Gu.openPopover(Qe,gt,$t,_.clientX,_.clientY)}c=fy,Td(()=>Gu.refresh());let lp=null,up=null,Ao="fast",hp=null,Ka=!1;n.addEventListener("pointermove",()=>{ii?.isActive()&&(en=!0)}),n.addEventListener("pointerup",()=>{ii?.isActive()&&(en=!0)});function dy(){let _=H.view;return[H.position.x,H.position.y,H.position.z,H.quaternion.x,H.quaternion.y,H.quaternion.z,H.quaternion.w,H.zoom,H.near,H.far,H.fov||0,H.left,H.right,H.top,H.bottom,X.target.x,X.target.y,X.target.z,n.width,n.height,_&&_.enabled?1:0,_?_.offsetX:0,_?_.offsetY:0,_?_.fullWidth:0,_?_.fullHeight:0,de==="ortho"?1:0]}function py(){let _=dy(),D=lp,k=!D||D.length!==_.length;if(!k&&D){for(let B=0;B<_.length;B++)if(_[B]!==D[B]){k=!0;break}}return k&&(lp=_),k}function my(){let _=[g,x,mu(),As?"1":"0",String(f)],D=h?.background;D&&D.isColor&&_.push(D.getHexString());for(let[B,ue]of p)_.push(B,Number(ue).toFixed(3));for(let B of O)_.push(String(B.id),B.locked?"1":"0",Number(B.t).toFixed(4));let k=ku.hiddenIds();return _.push(k.length?k.slice().sort().join(","):"-"),_.join("|")}function ja(){if(it)return;let _=performance.now();xe.step(_)&&(en=!0),oy(_),iy(_),qx(_),X.update(),pe&&Bt(),Yd||(Iu.copy(H.position),Du.copy(X.target),Yd=!0);let D=H.position.distanceToSquared(Iu)>1e-8||X.target.distanceToSquared(Du)>1e-8;Iu.copy(H.position),Du.copy(X.target);let k=my(),B=k!==up,ue=py();if(B&&(Ka=!0),Ao=!Eo&&!D&&!B&&!Z&&!Vr&&!Ka?"high":"fast",!en&&!B&&!ue&&!(Ao!==hp)&&!Ka){requestAnimationFrame(ja);return}en=!1,up=k,hp=Ao,B||(Ka=!1),ii?.update(),Pe.update();let Qe=z.render(h,H,pe,np,{quality:Ao,batchKey:k,deferPrime:B||Z});rp&&!Qe&&ip(),rp=Qe,requestAnimationFrame(ja)}return ja(),tp}return Sy(MT);})();
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
