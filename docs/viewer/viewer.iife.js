var BlueprintsViewerBundle=(()=>{var gc=Object.defineProperty;var Um=Object.getOwnPropertyDescriptor;var Nm=Object.getOwnPropertyNames;var Om=Object.prototype.hasOwnProperty;var Fm=(i,e)=>{for(var t in e)gc(i,t,{get:e[t],enumerable:!0})},Bm=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Nm(e))!Om.call(i,s)&&s!==t&&gc(i,s,{get:()=>e[s],enumerable:!(n=Um(e,s))||n.enumerable});return i};var zm=i=>Bm(gc({},"__esModule",{value:!0}),i);var $M={};Fm($M,{mountViewer:()=>ZM});var ja="172",ls={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vf=0,nu=1,Gf=2;var iu=1,Wf=2,gi=3,wn=0,en=1,It=2,Dn=0,Bn=1,su=2,ru=3,ou=4,Qa=5,In=100,Xf=101,qf=102,Yf=103,Zf=104,Uo=200,Gi=201,$f=202,Kf=203,ys=204,Fi=205,Jf=206,No=207,jf=208,Qf=209,ed=210,td=211,nd=212,id=213,sd=214,el=0,tl=1,nl=2,Ms=3,il=4,sl=5,rl=6,ol=7,au=0,rd=1,od=2,ni=0,ad=1,ld=2,cd=3,Oo=4,ud=5,hd=6,fd=7,Wc="attached",dd="detached",lu=300,Cs=301,Ps=302,al=303,ll=304,Fo=306,Qn=1e3,oi=1001,pr=1002,Nt=1003,cl=1004;var Is=1005;var Ot=1006,Sr=1007;var ii=1008;var kn=1009,cu=1010,uu=1011,Er=1012,ul=1013,us=1014,An=1015,Wi=1016,hl=1017,fl=1018,Ls=1020,hu=35902,fu=1021,du=1022,Yt=1023,pu=1024,mu=1025,vs=1026,bs=1027,dl=1028,pl=1029,gu=1030,ml=1031;var gl=1033,Bo=33776,zo=33777,ko=33778,Ho=33779,_l=35840,xl=35841,vl=35842,yl=35843,Ml=36196,bl=37492,Sl=37496,El=37808,wl=37809,Tl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Il=37815,Ll=37816,Dl=37817,Ul=37818,Nl=37819,Ol=37820,Fl=37821,Vo=36492,Bl=36494,zl=36495,_u=36283,kl=36284,Hl=36285,Vl=36286;var Ss=2300,Es=2301,Ua=2302,Xc=2400,qc=2401,Yc=2402,pd=2500;var xu=0,Go=1,wr=2,md=3200,gd=3201;var vu=0,_d=1,si="",pt="srgb",Jt="srgb-linear",no="linear",mt="srgb";var xs=7680;var Zc=519,xd=512,vd=513,yd=514,yu=515,Md=516,bd=517,Sd=518,Ed=519,Na=35044;var Mu="300 es",ai=2e3,io=2001,li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=1234567,fr=Math.PI/180,ws=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function bu(i,e){return(i%e+e)%e}function km(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hm(i,e,t){return i!==e?(t-i)/(e-i):0}function to(i,e,t){return(1-t)*i+t*e}function Vm(i,e,t,n){return to(i,e,1-Math.exp(-t*n))}function Gm(i,e=1){return e-Math.abs(bu(i,e*2)-e)}function Wm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ym(i,e){return i+Math.random()*(e-i)}function Zm(i){return i*(.5-Math.random())}function $m(i){i!==void 0&&(Qh=i);let e=Qh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Km(i){return i*fr}function Jm(i){return i*ws}function jm(i){return(i&i-1)===0&&i!==0}function Qm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ds={DEG2RAD:fr,RAD2DEG:ws,generateUUID:jn,clamp:Qe,euclideanModulo:bu,mapLinear:km,inverseLerp:Hm,lerp:to,damp:Vm,pingpong:Gm,smoothstep:Wm,smootherstep:Xm,randInt:qm,randFloat:Ym,randFloatSpread:Zm,seededRandom:$m,degToRad:Km,radToDeg:Jm,isPowerOfTwo:jm,ceilPowerOfTwo:Qm,floorPowerOfTwo:eg,setQuaternionFromProperEuler:tg,normalize:dt,denormalize:Jn},Ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],E=s[1],S=s[4],M=s[7],L=s[2],T=s[5],I=s[8];return r[0]=o*_+a*E+l*L,r[3]=o*m+a*S+l*T,r[6]=o*d+a*M+l*I,r[1]=c*_+u*E+h*L,r[4]=c*m+u*S+h*T,r[7]=c*d+u*M+h*I,r[2]=f*_+p*E+g*L,r[5]=f*m+p*S+g*T,r[8]=f*d+p*M+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_c=new Je;function Su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wd(){let i=mr("canvas");return i.style.display="block",i}var ef={};function Us(i){i in ef||(ef[i]=!0,console.warn(i))}function Td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ad(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rd(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var tf=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nf=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ng(){let i={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?no:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jt]:{primaries:e,whitePoint:n,transfer:no,toXYZ:tf,fromXYZ:nf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:tf,fromXYZ:nf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),i}var ot=ng();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,Oa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=mr("canvas")),$s.width=e.width,$s.height=e.height;let n=$s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ig=0,so=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xc(s[o].image)):r.push(xc(s[o]))}else r=xc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function xc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sg=0,Bt=class i extends li{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=Ot,o=ii,a=Yt,l=kn,c=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=jn(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=lu;Bt.DEFAULT_ANISOTROPY=1;var it=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(p+1)/2,L=(d+1)/2,T=(u+f)/4,I=(h+_)/4,U=(g+m)/4;return S>M&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=I/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=U/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=I/r,s=U/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fa=class extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new so(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends Fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ro=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a,d=l*f+c*p+u*g+h*_,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){let L=Math.sqrt(S),T=Math.atan2(L,d*E);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}let M=a*E;if(l=l*m+f*M,c=c*m+p*M,u=u*m+g*M,h=h*m+_*M,m===1-a){let L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vc=new P,sf=new xn,Pt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),sa.subVectors(this.max,Wr),Ks.subVectors(e.a,Wr),Js.subVectors(e.b,Wr),js.subVectors(e.c,Wr),Ji.subVectors(Js,Ks),ji.subVectors(js,Js),ps.subVectors(Ks,js);let t=[0,-Ji.z,Ji.y,0,-ji.z,ji.y,0,-ps.z,ps.y,Ji.z,0,-Ji.x,ji.z,0,-ji.x,ps.z,0,-ps.x,-Ji.y,Ji.x,0,-ji.y,ji.x,0,-ps.y,ps.x,0];return!yc(t,Ks,Js,js,sa)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,Ks,Js,js,sa))?!1:(ra.crossVectors(Ji,ji),t=[ra.x,ra.y,ra.z],yc(t,Ks,Js,js,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ci=[new P,new P,new P,new P,new P,new P,new P,new P],Zn=new P,ia=new Pt,Ks=new P,Js=new P,js=new P,Ji=new P,ji=new P,ps=new P,Wr=new P,sa=new P,ra=new P,ms=new P;function yc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ms.fromArray(i,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var rg=new Pt,Xr=new P,Mc=new P,Xt=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Mc)),this.expandByPoint(Xr.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pi=new P,bc=new P,oa=new P,Qi=new P,Sc=new P,aa=new P,Ec=new P,ci=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){bc.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(bc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(oa),a=Qi.dot(this.direction),l=-Qi.dot(oa),c=Qi.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bc).addScaledVector(oa,f),p}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);let n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,s,r){Sc.subVectors(t,e),aa.subVectors(n,e),Ec.crossVectors(Sc,aa);let o=this.direction.dot(Ec),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);let l=a*this.direction.dot(aa.crossVectors(Qi,aa));if(l<0)return null;let c=a*this.direction.dot(Sc.cross(Qi));if(c<0||l+c>o)return null;let u=-a*Qi.dot(Ec);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(og,e,ag)}lookAt(e,t,n){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),es.crossVectors(n,Cn),es.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),es.crossVectors(n,Cn)),es.normalize(),la.crossVectors(Cn,es),s[0]=es.x,s[4]=la.x,s[8]=Cn.x,s[1]=es.y,s[5]=la.y,s[9]=Cn.y,s[2]=es.z,s[6]=la.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],S=n[7],M=n[11],L=n[15],T=s[0],I=s[4],U=s[8],v=s[12],y=s[1],D=s[5],z=s[9],F=s[13],Z=s[2],te=s[6],j=s[10],oe=s[14],Y=s[3],re=s[7],ve=s[11],ne=s[15];return r[0]=o*T+a*y+l*Z+c*Y,r[4]=o*I+a*D+l*te+c*re,r[8]=o*U+a*z+l*j+c*ve,r[12]=o*v+a*F+l*oe+c*ne,r[1]=u*T+h*y+f*Z+p*Y,r[5]=u*I+h*D+f*te+p*re,r[9]=u*U+h*z+f*j+p*ve,r[13]=u*v+h*F+f*oe+p*ne,r[2]=g*T+_*y+m*Z+d*Y,r[6]=g*I+_*D+m*te+d*re,r[10]=g*U+_*z+m*j+d*ve,r[14]=g*v+_*F+m*oe+d*ne,r[3]=E*T+S*y+M*Z+L*Y,r[7]=E*I+S*D+M*te+L*re,r[11]=E*U+S*z+M*j+L*ve,r[15]=E*v+S*F+M*oe+L*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],E=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,S=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,M=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,L=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=t*E+n*S+s*M+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=E*I,e[1]=(_*f*r-h*m*r-_*s*p+n*m*p+h*s*d-n*f*d)*I,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*I,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*I,e[4]=S*I,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*I,e[8]=M*I,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*d-t*h*d)*I,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*d+t*a*d)*I,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*I,e[12]=L*I,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*I,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,E=l*c,S=l*u,M=l*h,L=n.x,T=n.y,I=n.z;return s[0]=(1-(_+d))*L,s[1]=(p+M)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+d))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+S)*I,s[9]=(m-E)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),a=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$n.copy(this);let c=1/r,u=1/o,h=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ai){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===ai)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===io)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ai){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,p=(n+s)*u,g,_;if(a===ai)g=(o+r)*h,_=-2*h;else if(a===io)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qs=new P,$n=new $e,og=new P(0,0,0),ag=new P(1,1,1),es=new P,la=new P,Cn=new P,rf=new $e,of=new xn,ei=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return of.setFromEuler(this),this.setFromQuaternion(of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lg=0,af=new P,er=new xn,Ii=new $e,ca=new P,qr=new P,cg=new P,ug=new xn,lf=new P(1,0,0),cf=new P(0,1,0),uf=new P(0,0,1),hf={type:"added"},hg={type:"removed"},tr={type:"childadded",child:null},wc={type:"childremoved",child:null},wt=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new ei,n=new xn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Je}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(cf,e)}rotateZ(e){return this.rotateOnAxis(uf,e)}translateOnAxis(e,t){return af.copy(e).applyQuaternion(this.quaternion),this.position.add(af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(cf,e)}translateZ(e){return this.translateOnAxis(uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ca.copy(e):ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(qr,ca,this.up):Ii.lookAt(ca,qr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Ii),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hf),tr.child=e,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hf),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};wt.DEFAULT_UP=new P(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new P,Li=new P,Tc=new P,Di=new P,nr=new P,ir=new P,ff=new P,Ac=new P,Rc=new P,Cc=new P,Pc=new it,Ic=new it,Lc=new it,ri=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),Li.subVectors(n,t),Tc.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(Li),l=Kn.dot(Tc),c=Li.dot(Li),u=Li.dot(Tc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Pc.setScalar(0),Ic.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(e,t),Ic.fromBufferAttribute(e,n),Lc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Pc,r.x),o.addScaledVector(Ic,r.y),o.addScaledVector(Lc,r.z),o}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),Li.subVectors(e,t),Kn.cross(Li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Kn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;nr.subVectors(s,n),ir.subVectors(r,n),Ac.subVectors(e,n);let l=nr.dot(Ac),c=ir.dot(Ac);if(l<=0&&c<=0)return t.copy(n);Rc.subVectors(e,s);let u=nr.dot(Rc),h=ir.dot(Rc);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(nr,o);Cc.subVectors(e,r);let p=nr.dot(Cc),g=ir.dot(Cc);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ir,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return ff.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(ff,a);let d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=bu(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Dc(o,r,e+1/3),this.g=Dc(o,r,e),this.b=Dc(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ot.fromWorkingColorSpace(cn.copy(this),e),Math.round(Qe(cn.r*255,0,255))*65536+Math.round(Qe(cn.g*255,0,255))*256+Math.round(Qe(cn.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=pt){ot.fromWorkingColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(ua);let n=to(ts.h,ua.h,t),s=to(ts.s,ua.s,t),r=to(ts.l,ua.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Ie;Ie.NAMES=Cd;var fg=0,vn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Bn,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ys,this.blendDst=Fi,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bn&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ys&&(n.blendSrc=this.blendSrc),this.blendDst!==Fi&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new P,ha=new Ue,Mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}};var oo=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ao=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Lt=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},dg=0,Fn=new $e,Uc=new wt,sr=new P,Pn=new Pt,Yr=new Pt,Wt=new P,Ct=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?ao:oo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Pn.min,Yr.min),Pn.expandByPoint(Wt),Wt.addVectors(Pn.max,Yr.max),Pn.expandByPoint(Wt)):(Pn.expandByPoint(Yr.min),Pn.expandByPoint(Yr.max))}Pn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(e,c),Wt.add(sr)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new P,l[U]=new P;let c=new P,u=new P,h=new P,f=new Ue,p=new Ue,g=new Ue,_=new P,m=new P;function d(U,v,y){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[U].add(_),a[v].add(_),a[y].add(_),l[U].add(m),l[v].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,v=E.length;U<v;++U){let y=E[U],D=y.start,z=y.count;for(let F=D,Z=D+z;F<Z;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let S=new P,M=new P,L=new P,T=new P;function I(U){L.fromBufferAttribute(s,U),T.copy(L);let v=a[U];S.copy(v),S.sub(L.multiplyScalar(L.dot(v))).normalize(),M.crossVectors(T,v);let D=M.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,D)}for(let U=0,v=E.length;U<v;++U){let y=E[U],D=y.start,z=y.count;for(let F=D,Z=D+z;F<Z;F+=3)I(e.getX(F+0)),I(e.getX(F+1)),I(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},df=new $e,gs=new ci,fa=new Xt,pf=new P,da=new P,pa=new P,ma=new P,Nc=new P,ga=new P,mf=new P,_a=new P,je=class extends wt{constructor(e=new Ct,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Nc.fromBufferAttribute(h,e),o?ga.addScaledVector(Nc,u):ga.addScaledVector(Nc.sub(t),u))}t.add(ga)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(fa.containsPoint(gs.origin)===!1&&(gs.intersectSphere(fa,pf)===null||gs.origin.distanceToSquared(pf)>(e.far-e.near)**2))&&(df.copy(r).invert(),gs.copy(e.ray).applyMatrix4(df),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,L=S;M<L;M+=3){let T=a.getX(M),I=a.getX(M+1),U=a.getX(M+2);s=xa(this,d,e,n,c,u,h,T,I,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let E=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=xa(this,o,e,n,c,u,h,E,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,L=S;M<L;M+=3){let T=M,I=M+1,U=M+2;s=xa(this,d,e,n,c,u,h,T,I,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let E=m,S=m+1,M=m+2;s=xa(this,o,e,n,c,u,h,E,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pg(i,e,t,n,s,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===wn,a),l===null)return null;_a.copy(a),_a.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:i}}function xa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,da),i.getVertexPosition(l,pa),i.getVertexPosition(c,ma);let u=pg(i,e,t,n,da,pa,ma,mf);if(u){let h=new P;ri.getBarycoord(mf,da,pa,ma,h),s&&(u.uv=ri.getInterpolatedAttribute(s,a,l,c,h,new Ue)),r&&(u.uv1=ri.getInterpolatedAttribute(r,a,l,c,h,new Ue)),o&&(u.normal=ri.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};ri.getNormal(da,pa,ma,f.normal),u.face=f,u.barycoord=h}return u}var is=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function g(_,m,d,E,S,M,L,T,I,U,v){let y=M/I,D=L/U,z=M/2,F=L/2,Z=T/2,te=I+1,j=U+1,oe=0,Y=0,re=new P;for(let ve=0;ve<j;ve++){let ne=ve*D-F;for(let fe=0;fe<te;fe++){let Me=fe*y-z;re[_]=Me*E,re[m]=ne*S,re[d]=Z,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[d]=T>0?1:-1,u.push(re.x,re.y,re.z),h.push(fe/I),h.push(1-ve/U),oe+=1}}for(let ve=0;ve<U;ve++)for(let ne=0;ne<I;ne++){let fe=f+ne+te*ve,Me=f+ne+te*(ve+1),q=f+(ne+1)+te*(ve+1),ie=f+(ne+1)+te*ve;l.push(fe,Me,ie),l.push(Me,q,ie),Y+=6}a.addGroup(p,Y,v),p+=Y,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=Ns(i[t]);for(let s in n)e[s]=n[s]}return e}function mg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Wo={clone:Ns,merge:dn},gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zt=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},lo=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ns=new P,gf=new Ue,_f=new Ue,Ut=class extends lo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,gf,_f),t.subVectors(_f,gf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rr=-90,or=1,za=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(rr,or,e,t);s.layers=this.layers,this.add(s);let r=new Ut(rr,or,e,t);r.layers=this.layers,this.add(r);let o=new Ut(rr,or,e,t);o.layers=this.layers,this.add(o);let a=new Ut(rr,or,e,t);a.layers=this.layers,this.add(a);let l=new Ut(rr,or,e,t);l.layers=this.layers,this.add(l);let c=new Ut(rr,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},co=class extends Bt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ka=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new co(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new is(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Dn});r.uniforms.tEquirect.value=t;let o=new je(s,r),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=Ot),new za(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};var zn=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ss=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Na,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new P,hn=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_r=class extends vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,Zr=new P,lr=new P,cr=new P,ur=new Ue,$r=new Ue,Pd=new $e,va=new P,Kr=new P,ya=new P,xf=new Ue,Oc=new Ue,vf=new Ue,uo=class extends wt{constructor(e=new _r){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ss(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new hn(n,3,0,!1)),ar.setAttribute("uv",new hn(n,2,3,!1))}this.geometry=ar,this.material=e,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),Pd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ma(va.set(-.5,-.5,0),cr,o,lr,s,r),Ma(Kr.set(.5,-.5,0),cr,o,lr,s,r),Ma(ya.set(.5,.5,0),cr,o,lr,s,r),xf.set(0,0),Oc.set(1,0),vf.set(1,1);let a=e.ray.intersectTriangle(va,Kr,ya,!1,Zr);if(a===null&&(Ma(Kr.set(-.5,.5,0),cr,o,lr,s,r),Oc.set(0,1),a=e.ray.intersectTriangle(va,ya,Kr,!1,Zr),a===null))return;let l=e.ray.origin.distanceTo(Zr);l<e.near||l>e.far||t.push({distance:l,point:Zr.clone(),uv:ri.getInterpolation(Zr,va,Kr,ya,xf,Oc,vf,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ma(i,e,t,n,s,r){ur.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?($r.x=r*ur.x-s*ur.y,$r.y=s*ur.x+r*ur.y):$r.copy(ur),i.copy(e),i.x+=$r.x,i.y+=$r.y,i.applyMatrix4(Pd)}var yf=new P,Mf=new it,bf=new it,xg=new P,Sf=new $e,ba=new P,Fc=new Xt,Ef=new $e,Bc=new ci,ho=class extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wc,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ba),this.boundingBox.expandByPoint(ba)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ba),this.boundingSphere.expandByPoint(ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fc.copy(this.boundingSphere),Fc.applyMatrix4(s),e.ray.intersectsSphere(Fc)!==!1&&(Ef.copy(s).invert(),Bc.copy(e.ray).applyMatrix4(Ef),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Mf.fromBufferAttribute(s.attributes.skinIndex,e),bf.fromBufferAttribute(s.attributes.skinWeight,e),yf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=bf.getComponent(r);if(o!==0){let a=Mf.getComponent(r);Sf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(xg.copy(yf).applyMatrix4(Sf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},xr=class extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},fo=class extends Bt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Nt,u=Nt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wf=new $e,vg=new $e,po=class i{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:vg;wf.multiplyMatrices(a,t[r]),wf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fo(t,e,e,Yt,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new xr),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},rs=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new $e,Tf=new $e,Sa=[],Af=new Pt,yg=new $e,Jr=new je,jr=new Xt,mo=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),Af.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Af)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),jr.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),Tf.multiplyMatrices(n,hr),Jr.matrixWorld=Tf,Jr.raycast(e,Sa);for(let o=0,a=Sa.length;o<a;o++){let l=Sa[o];l.instanceId=r,l.object=this,t.push(l)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fo(new Float32Array(s*this.count),s,this.count,dl,An));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},zc=new P,Mg=new P,bg=new Je,un=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zc.subVectors(n,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bg.getNormalMatrix(e),s=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new Xt,Ea=new P,vr=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,o=new un){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],E=s[13],S=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-p,M-d).normalize(),n[1].setComponents(l+r,f+c,m+p,M+d).normalize(),n[2].setComponents(l+o,f+u,m+g,M+E).normalize(),n[3].setComponents(l-o,f-u,m-g,M-E).normalize(),n[4].setComponents(l-a,f-h,m-_,M-S).normalize(),t===ai)n[5].setComponents(l+a,f+h,m+_,M+S).normalize();else if(t===io)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ea.x=s.normal.x>0?e.max.x:e.min.x,Ea.y=s.normal.y>0?e.max.y:e.min.y,Ea.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bi=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ha=new P,Va=new P,Rf=new $e,Qr=new ci,wa=new Xt,kc=new P,Cf=new P,ui=class extends wt{constructor(e=new Ct,t=new Bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ha.fromBufferAttribute(t,s-1),Va.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ha.distanceTo(Va);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;Rf.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(Rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let d=u.getX(_),E=u.getX(_+1),S=Ta(this,e,Qr,l,d,E);S&&t.push(S)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(p),d=Ta(this,e,Qr,l,_,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let d=Ta(this,e,Qr,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){let _=Ta(this,e,Qr,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ta(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Ha.fromBufferAttribute(o,s),Va.fromBufferAttribute(o,r),t.distanceSqToSegment(Ha,Va,kc,Cf)>n)return;kc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(kc);if(!(l<e.near||l>e.far))return{distance:l,point:Cf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Pf=new P,If=new P,go=class extends ui{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pf.fromBufferAttribute(t,s),If.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pf.distanceTo(If);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_o=class extends ui{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},yr=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lf=new $e,$c=new ci,Aa=new Xt,Ra=new P,xo=class extends wt{constructor(e=new Ct,t=new yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Lf.copy(s).invert(),$c.copy(e.ray).applyMatrix4(Lf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){let m=c.getX(g);Ra.fromBufferAttribute(h,m),Df(Ra,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Ra.fromBufferAttribute(h,g),Df(Ra,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Df(i,e,t,n,s,r,o){let a=$c.distanceSqToPoint(i);if(a<t){let l=new P;$c.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var qt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Ts=class extends Bt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vo=class extends Bt{constructor(e,t,n,s,r,o,a,l,c,u=vs){if(u!==vs&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vs&&(n=us),n===void 0&&u===bs&&(n=Ls),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Ca=new P,Pa=new P,Hc=new P,Ia=new ri,yo=class extends Ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(fr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:d}=Ia;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Ia.getNormal(Hc),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){let S=(E+1)%3,M=h[E],L=h[S],T=Ia[u[E]],I=Ia[u[S]],U=`${M}_${L}`,v=`${L}_${M}`;v in f&&f[v]?(Hc.dot(f[v].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(I.x,I.y,I.z)),f[v]=null):U in f||(f[U]={index0:c[E],index1:c[S],normal:Hc.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:m}=f[g];Ca.fromBufferAttribute(a,_),Pa.fromBufferAttribute(a,m),p.push(Ca.x,Ca.y,Ca.z),p.push(Pa.x,Pa.y,Pa.z)}this.setAttribute("position",new Lt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var hi=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){let E=d*f-o;for(let S=0;S<c;S++){let M=S*h-r;g.push(M,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let S=E+c*d,M=E+c*(d+1),L=E+1+c*(d+1),T=E+1+c*d;p.push(S,M,T),p.push(M,L,T)}this.setIndex(p),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mo=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new P,f=new P,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let E=[],S=d/n,M=0;d===0&&o===0?M=.5/t:d===n&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){let T=L/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+M,1-S),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){let S=u[d][E+1],M=u[d][E],L=u[d+1][E],T=u[d+1][E+1];(d!==0||o>0)&&p.push(S,M,T),(d!==n-1||l<Math.PI)&&p.push(M,L,T)}this.setIndex(p),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bo=class extends Ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new P,r=new P;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,p=h.count;for(let g=f,_=f+p;g<_;g+=3)for(let m=0;m<3;m++){let d=a.getX(g+m),E=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,E),Uf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Uf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Lt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Uf(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Tn=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fn=class extends Tn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ga=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wa=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function La(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Eg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Nf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Id(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qc:r=e,a=2*t-n;break;case Yc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qc:o=e,l=2*n-t;break;case Yc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let L=0;L!==a;++L)r[L]=d*o[u+L]+E*o[c+L]+S*o[l+L]+M*o[h+L];return r}},qa=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Ya=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case Es:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Es;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Sg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ua,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Es;var ki=class extends Ln{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Ss;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends Ln{};So.prototype.ValueTypeName="color";var fi=class extends Ln{};fi.prototype.ValueTypeName="number";var Za=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},di=class extends Ln{InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}};di.prototype.ValueTypeName="quaternion";di.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Ln{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Ss;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends Ln{};pi.prototype.ValueTypeName="vector";var Eo=class{constructor(e="",t=-1,n=[],s=pd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Tg(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Eg(l);l=Nf(l,1,u),c=Nf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new fi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,_){if(p.length!==0){let m=[],d=[];Id(p,m,d,g),m.length!==0&&_.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(let _ in p){let m=[],d=[];for(let E=0;E!==f[g].morphTargets.length;++E){let S=f[g];m.push(S.time),d.push(S.morphTarget===_?1:0)}s.push(new fi(".morphTargetInfluence["+_+"]",m,d))}l=p.length*o}else{let p=".bones["+t[h].name+"]";n(pi,p+".position",f,"pos",s),n(di,p+".quaternion",f,"rot",s),n(pi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function wg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fi;case"vector":case"vector2":case"vector3":case"vector4":return pi;case"color":return So;case"quaternion":return di;case"bool":case"boolean":return ki;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Tg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=wg(i.type);if(i.times===void 0){let t=[],n=[];Id(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},$a=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Ld=new $a,mi=class{constructor(e){this.manager=e!==void 0?e:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ui={},Kc=class extends Error{constructor(e,t){super(e),this.response=t}},Mr=class extends mi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ui[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,_=0,m=new ReadableStream({start(d){E();function E(){h.read().then(({done:S,value:M})=>{if(S)d.close();else{_+=M.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,I=u.length;T<I;T++){let U=u[T];U.onProgress&&U.onProgress(L)}d.enqueue(M),E()}},S=>{d.error(S)})}}});return new Response(m)}else throw new Kc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ni.add(e,c);let u=Ui[e];delete Ui[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ka=class extends mi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=mr("img");function l(){u(),Ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var wo=class extends mi{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,o=new Ka(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},As=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Vc=new $e,Of=new P,Ff=new P,To=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Of.setFromMatrixPosition(e.matrixWorld),t.position.copy(Of),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),Vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jc=class extends To{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ao=class extends As{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bf=new $e,eo=new P,Gc=new P,jc=class extends To{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(eo),Gc.copy(n.position),Gc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Gc),n.updateMatrixWorld(),s.makeTranslation(-eo.x,-eo.y,-eo.z),Bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bf)}},Rs=class extends As{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ti=class extends lo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qc=class extends To{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ro=class extends As{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Co=class extends Ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Po=class extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(e,l),r.manager.itemStart(e)}};var Ja=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var wu="\\[\\]\\.:\\/",Ag=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",Rg="[^"+wu.replace("\\.","")+"]",Cg=/((?:WC+[\/:])*)/.source.replace("WC",Tu),Pg=/(WCOD+)?/.source.replace("WCOD",Rg),Ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),Lg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),Dg=new RegExp("^"+Cg+Pg+Ig+Lg+"$"),Ug=["material","materials","bones","map"],eu=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(e){let t=Dg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ug.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=eu;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JM=new Float32Array(1);var as=class extends ss{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var zf=new $e,Io=class{constructor(e,t,n=0,s=1/0){this.ray=new ci(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zf),this}intersectObject(e,t=!0,n=[]){return tu(e,this,n,t),n.sort(kf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)tu(e[s],this,n,t);return n.sort(kf),n}};function kf(i,e){return i.distance-e.distance}function tu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)tu(r[o],e,t,!0)}}var br=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Hf=new P,Da=new P,Lo=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Hf.subVectors(e,this.start),Da.subVectors(this.end,this.start);let n=Da.dot(Da),r=Da.dot(Hf)/n;return t&&(r=Qe(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Do=class extends li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function Au(i,e,t,n){let s=Ng(n);switch(t){case fu:return i*e;case pu:return i*e;case mu:return i*e*2;case dl:return i*e/s.components*s.byteLength;case pl:return i*e/s.components*s.byteLength;case gu:return i*e*2/s.components*s.byteLength;case ml:return i*e*2/s.components*s.byteLength;case du:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case gl:return i*e*4/s.components*s.byteLength;case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:case yl:return Math.max(i,16)*Math.max(e,8)/4;case _l:case vl:return Math.max(i,8)*Math.max(e,8)/2;case Ml:case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vo:case Bl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _u:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hl:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ng(i){switch(i){case kn:case cu:return{byteLength:1,components:1};case Er:case uu:case Wi:return{byteLength:2,components:1};case hl:case fl:return{byteLength:2,components:4};case us:case ul:case An:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);function np(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Og(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Jg=`#ifdef USE_BUMPMAP
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,N0=`struct PhysicalMaterial {
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
}`,O0=`
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
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
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M_=`float getShadowMask() {
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
}`,b_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S_=`#ifdef USE_SKINNING
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
#endif`,E_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P_=`#ifdef USE_TRANSMISSION
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
#endif`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F_=`uniform sampler2D t2D;
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,G_=`#if DEPTH_PACKING == 3200
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
}`,W_=`#define DISTANCE
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
}`,X_=`#define DISTANCE
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`uniform float scale;
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
}`,$_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,J_=`uniform vec3 diffuse;
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
}`,j_=`#define LAMBERT
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
}`,Q_=`#define LAMBERT
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
}`,ex=`#define MATCAP
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
}`,tx=`#define MATCAP
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
}`,nx=`#define NORMAL
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
}`,ix=`#define NORMAL
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
}`,sx=`#define PHONG
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
}`,rx=`#define PHONG
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
}`,ox=`#define STANDARD
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
}`,ax=`#define STANDARD
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
}`,lx=`#define TOON
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
}`,cx=`#define TOON
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
}`,ux=`uniform float size;
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
}`,hx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,dx=`uniform vec3 color;
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
}`,px=`uniform float rotation;
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
}`,mx=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Fg,alphahash_pars_fragment:Bg,alphamap_fragment:zg,alphamap_pars_fragment:kg,alphatest_fragment:Hg,alphatest_pars_fragment:Vg,aomap_fragment:Gg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:qg,begin_vertex:Yg,beginnormal_vertex:Zg,bsdfs:$g,iridescence_fragment:Kg,bumpmap_pars_fragment:Jg,clipping_planes_fragment:jg,clipping_planes_pars_fragment:Qg,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:o0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:u0,emissivemap_fragment:h0,emissivemap_pars_fragment:f0,colorspace_fragment:d0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:C0,envmap_vertex:v0,fog_vertex:y0,fog_pars_vertex:M0,fog_fragment:b0,fog_pars_fragment:S0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:w0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:P0,lights_toon_pars_fragment:I0,lights_phong_fragment:L0,lights_phong_pars_fragment:D0,lights_physical_fragment:U0,lights_physical_pars_fragment:N0,lights_fragment_begin:O0,lights_fragment_maps:F0,lights_fragment_end:B0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:V0,map_fragment:G0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:$0,morphcolor_vertex:K0,morphnormal_vertex:J0,morphtarget_pars_vertex:j0,morphtarget_vertex:Q0,normal_fragment_begin:e_,normal_fragment_maps:t_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:s_,normalmap_pars_fragment:r_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:c_,opaque_fragment:u_,packing:h_,premultiplied_alpha_fragment:f_,project_vertex:d_,dithering_fragment:p_,dithering_pars_fragment:m_,roughnessmap_fragment:g_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:v_,shadowmap_vertex:y_,shadowmask_pars_fragment:M_,skinbase_vertex:b_,skinning_pars_vertex:S_,skinning_vertex:E_,skinnormal_vertex:w_,specularmap_fragment:T_,specularmap_pars_fragment:A_,tonemapping_fragment:R_,tonemapping_pars_fragment:C_,transmission_fragment:P_,transmission_pars_fragment:I_,uv_pars_fragment:L_,uv_pars_vertex:D_,uv_vertex:U_,worldpos_vertex:N_,background_vert:O_,background_frag:F_,backgroundCube_vert:B_,backgroundCube_frag:z_,cube_vert:k_,cube_frag:H_,depth_vert:V_,depth_frag:G_,distanceRGBA_vert:W_,distanceRGBA_frag:X_,equirect_vert:q_,equirect_frag:Y_,linedashed_vert:Z_,linedashed_frag:$_,meshbasic_vert:K_,meshbasic_frag:J_,meshlambert_vert:j_,meshlambert_frag:Q_,meshmatcap_vert:ex,meshmatcap_frag:tx,meshnormal_vert:nx,meshnormal_frag:ix,meshphong_vert:sx,meshphong_frag:rx,meshphysical_vert:ox,meshphysical_frag:ax,meshtoon_vert:lx,meshtoon_frag:cx,points_vert:ux,points_frag:hx,shadow_vert:fx,shadow_frag:dx,sprite_vert:px,sprite_frag:mx},ye={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},yn={basic:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:dn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:dn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:dn([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:dn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:dn([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:dn([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:dn([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:dn([ye.lights,ye.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};yn.physical={uniforms:dn([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Gl={r:0,b:0,g:0},Os=new ei,gx=new $e;function _x(i,e,t,n,s,r,o){let a=new Ie(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function _(S){let M=!1,L=g(S);L===null?d(a,l):L&&L.isColor&&(d(L,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){let L=g(M);L&&(L.isCubeTexture||L.mapping===Fo)?(u===void 0&&(u=new je(new is(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Ns(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Os.copy(M.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gx.makeRotationFromEuler(Os)),u.material.toneMapped=ot.getTransfer(L.colorSpace)!==mt,(h!==L||f!==L.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=L,f=L.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new je(new hi(2,2),new zt({name:"BackgroundMaterial",uniforms:Ns(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ot.getTransfer(L.colorSpace)!==mt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||f!==L.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=L,f=L.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,M){S.getRGB(Gl,Eu(i)),n.buffers.color.setClear(Gl.r,Gl.g,Gl.b,M,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:_,addToRenderList:m,dispose:E}}function xx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,D,z,F,Z){let te=!1,j=h(F,z,D);r!==j&&(r=j,c(r.object)),te=p(y,F,z,Z),te&&g(y,F,z,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(y,D,z,F),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,D,z){let F=z.wireframe===!0,Z=n[y.id];Z===void 0&&(Z={},n[y.id]=Z);let te=Z[D.id];te===void 0&&(te={},Z[D.id]=te);let j=te[F];return j===void 0&&(j=f(l()),te[F]=j),j}function f(y){let D=[],z=[],F=[];for(let Z=0;Z<t;Z++)D[Z]=0,z[Z]=0,F[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,D,z,F){let Z=r.attributes,te=D.attributes,j=0,oe=z.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let ve=Z[Y],ne=te[Y];if(ne===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ve===void 0||ve.attribute!==ne||ne&&ve.data!==ne.data)return!0;j++}return r.attributesNum!==j||r.index!==F}function g(y,D,z,F){let Z={},te=D.attributes,j=0,oe=z.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let ve=te[Y];ve===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));let ne={};ne.attribute=ve,ve&&ve.data&&(ne.data=ve.data),Z[Y]=ne,j++}r.attributes=Z,r.attributesNum=j,r.index=F}function _(){let y=r.newAttributes;for(let D=0,z=y.length;D<z;D++)y[D]=0}function m(y){d(y,0)}function d(y,D){let z=r.newAttributes,F=r.enabledAttributes,Z=r.attributeDivisors;z[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),Z[y]!==D&&(i.vertexAttribDivisor(y,D),Z[y]=D)}function E(){let y=r.newAttributes,D=r.enabledAttributes;for(let z=0,F=D.length;z<F;z++)D[z]!==y[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function S(y,D,z,F,Z,te,j){j===!0?i.vertexAttribIPointer(y,D,z,Z,te):i.vertexAttribPointer(y,D,z,F,Z,te)}function M(y,D,z,F){_();let Z=F.attributes,te=z.getAttributes(),j=D.defaultAttributeValues;for(let oe in te){let Y=te[oe];if(Y.location>=0){let re=Z[oe];if(re===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){let ve=re.normalized,ne=re.itemSize,fe=e.get(re);if(fe===void 0)continue;let Me=fe.buffer,q=fe.type,ie=fe.bytesPerElement,he=q===i.INT||q===i.UNSIGNED_INT||re.gpuType===ul;if(re.isInterleavedBufferAttribute){let le=re.data,pe=le.stride,we=re.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Y.locationSize;Oe++)d(Y.location+Oe,le.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<Y.locationSize;Oe++)m(Y.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Oe=0;Oe<Y.locationSize;Oe++)S(Y.location+Oe,ne/Y.locationSize,q,ve,pe*ie,(we+ne/Y.locationSize*Oe)*ie,he)}else{if(re.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)d(Y.location+le,re.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let le=0;le<Y.locationSize;le++)m(Y.location+le);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let le=0;le<Y.locationSize;le++)S(Y.location+le,ne/Y.locationSize,q,ve,ne*ie,ne/Y.locationSize*le*ie,he)}}else if(j!==void 0){let ve=j[oe];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(Y.location,ve);break;case 3:i.vertexAttrib3fv(Y.location,ve);break;case 4:i.vertexAttrib4fv(Y.location,ve);break;default:i.vertexAttrib1fv(Y.location,ve)}}}}E()}function L(){U();for(let y in n){let D=n[y];for(let z in D){let F=D[z];for(let Z in F)u(F[Z].object),delete F[Z];delete D[z]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let D=n[y.id];for(let z in D){let F=D[z];for(let Z in F)u(F[Z].object),delete F[Z];delete D[z]}delete n[y.id]}function I(y){for(let D in n){let z=n[D];if(z[y.id]===void 0)continue;let F=z[y.id];for(let Z in F)u(F[Z].object),delete F[Z];delete z[y.id]}}function U(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function vx(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Yt&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let U=I===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==kn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==An&&!U)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:L,maxSamples:T}}function Mx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new un,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let E=r?0:n,S=E*4,M=d.clippingState||null;l.value=M,M=u(g,f,S,p);for(let L=0;L!==S;++L)M[L]=t[L];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,M=p;S!==_;++S,M+=4)o.copy(h[S]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bx(i){let e=new WeakMap;function t(o,a){return a===al?o.mapping=Cs:a===ll&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===al||a===ll)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ka(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ar=4,Dd=[.125,.215,.35,.446,.526,.582],zs=20,Ru=new ti,Ud=new Ie,Cu=null,Pu=0,Iu=0,Lu=!1,Bs=(1+Math.sqrt(5))/2,Tr=1/Bs,Nd=[new P(-Bs,Tr,0),new P(Bs,Tr,0),new P(-Tr,0,Bs),new P(Tr,0,Bs),new P(0,Bs,-Tr),new P(0,Bs,Tr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Cr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Pu,Iu),this._renderer.xr.enabled=Lu,e.scissorTest=!1,Wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Wi,format:Yt,colorSpace:Jt,depthBuffer:!1},s=Od(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sx(r)),this._blurMaterial=Ex(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Ru)}_sceneToCubeUV(e,t,n,s){let a=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ud),u.toneMapping=ni,u.autoClear=!1;let p=new Qt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new je(new is,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ud),_=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let S=this._cubeSize;Wl(s,E*S,d>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Cs||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Wl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ru)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nd[(s-r-1)%Nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new je(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):zs;m>zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let d=[],E=0;for(let I=0;I<zs;++I){let U=I/_,v=Math.exp(-U*U/2);d.push(v),I===0?E+=v:I<m&&(E+=2*v)}for(let I=0;I<d.length;I++)d[I]=d[I]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let M=this._sizeLods[s],L=3*M*(s>S-Ar?s-S+Ar:0),T=4*(this._cubeSize-M);Wl(t,L,T,3*M,2*M),l.setRenderTarget(t),l.render(h,Ru)}};function Sx(i){let e=[],t=[],n=[],s=i,r=i-Ar+1+Dd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ar?l=Dd[o-i+Ar-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),S=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let T=0;T<p;T++){let I=T%3*2/3-1,U=T>2?0:-1,v=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];E.set(v,_*g*T),S.set(f,m*g*T);let y=[T,T,T,T,T,T];M.set(y,d*g*T)}let L=new Ct;L.setAttribute("position",new Mt(E,_)),L.setAttribute("uv",new Mt(S,m)),L.setAttribute("faceIndex",new Mt(M,d)),e.push(L),s>Ar&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Od(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ex(i,e,t){let n=new Float32Array(zs),s=new P(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Fd(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Bd(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Vu(){return`

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
	`}function wx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===al||l===ll,u=l===Cs||l===Ps;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Cr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Cr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ax(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){let f=[],p=h.index,g=h.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let S=0,M=E.length;S<M;S+=3){let L=E[S+0],T=E[S+1],I=E[S+2];f.push(L,T,T,I,I,L)}}else if(g!==void 0){let E=g.array;_=g.version;for(let S=0,M=E.length/3-1;S<M;S+=3){let L=S+0,T=S+1,I=S+2;f.push(L,T,T,I,I,L)}}else return;let m=new(Su(f)?ao:oo)(f,1);m.version=_;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Rx(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*_[E];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Px(i,e,t){let n=new WeakMap,s=new it;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let v=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let M=a.attributes.position.count*S,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*L*4*h),I=new ro(T,M,L,h);I.type=An,I.needsUpdate=!0;let U=S*4;for(let y=0;y<h;y++){let D=m[y],z=d[y],F=E[y],Z=M*L*4*y;for(let te=0;te<D.count;te++){let j=te*U;p===!0&&(s.fromBufferAttribute(D,te),T[Z+j+0]=s.x,T[Z+j+1]=s.y,T[Z+j+2]=s.z,T[Z+j+3]=0),g===!0&&(s.fromBufferAttribute(z,te),T[Z+j+4]=s.x,T[Z+j+5]=s.y,T[Z+j+6]=s.z,T[Z+j+7]=0),_===!0&&(s.fromBufferAttribute(F,te),T[Z+j+8]=s.x,T[Z+j+9]=s.y,T[Z+j+10]=s.z,T[Z+j+11]=F.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new Ue(M,L)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ix(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ip=new Bt,zd=new vo(1,1),sp=new ro,rp=new Ba,op=new co,kd=[],Hd=[],Vd=new Float32Array(16),Gd=new Float32Array(9),Wd=new Float32Array(4);function Pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yl(i,e){let t=Hd[e];t===void 0&&(t=new Int32Array(e),Hd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function Ox(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Wd.set(n),i.uniformMatrix2fv(this.addr,!1,Wd),Ht(t,n)}}function Fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Gd.set(n),i.uniformMatrix3fv(this.addr,!1,Gd),Ht(t,n)}}function Bx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Vd.set(n),i.uniformMatrix4fv(this.addr,!1,Vd),Ht(t,n)}}function zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function Gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zd.compareFunction=yu,r=zd):r=ip,t.setTexture2D(e||r,s)}function Zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rp,s)}function $x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||op,s)}function Kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sp,s)}function Jx(i){switch(i){case 5126:return Lx;case 35664:return Dx;case 35665:return Ux;case 35666:return Nx;case 35674:return Ox;case 35675:return Fx;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return kx;case 35668:case 35672:return Hx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Kx}}function jx(i,e){i.uniform1fv(this.addr,e)}function Qx(i,e){let t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}function ev(i,e){let t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}function tv(i,e){let t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}function nv(i,e){let t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function iv(i,e){let t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sv(i,e){let t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rv(i,e){i.uniform1iv(this.addr,e)}function ov(i,e){i.uniform2iv(this.addr,e)}function av(i,e){i.uniform3iv(this.addr,e)}function lv(i,e){i.uniform4iv(this.addr,e)}function cv(i,e){i.uniform1uiv(this.addr,e)}function uv(i,e){i.uniform2uiv(this.addr,e)}function hv(i,e){i.uniform3uiv(this.addr,e)}function fv(i,e){i.uniform4uiv(this.addr,e)}function dv(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ip,r[o])}function pv(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rp,r[o])}function mv(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||op,r[o])}function gv(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sp,r[o])}function _v(i){switch(i){case 5126:return jx;case 35664:return Qx;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return uv;case 36295:return hv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var Uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}},Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_v(t.type)}},Ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Du=/(\w+)(\])?(\[|\.)?/g;function Xd(i,e){i.seq.push(e),i.map[e.id]=e}function xv(i,e,t){let n=i.name,s=n.length;for(Du.lastIndex=0;;){let r=Du.exec(n),o=Du.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xd(t,c===void 0?new Uu(a,i,e):new Nu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ou(a),Xd(t,h)),t=h}}}var Rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);xv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function qd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vv=37297,yv=0;function Mv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Yd=new Je;function bv(i){ot._getMatrix(Yd,ot.workingColorSpace,i);let e=`mat3( ${Yd.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case no:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Mv(i.getShaderSource(e),o)}else return s}function Sv(i,e){let t=bv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ev(i,e){let t;switch(e){case ad:t="Linear";break;case ld:t="Reinhard";break;case cd:t="Cineon";break;case Oo:t="ACESFilmic";break;case hd:t="AgX";break;case fd:t="Neutral";break;case ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xl=new P;function wv(){ot.getLuminanceCoefficients(Xl);let i=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function Av(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xo(i){return i!==""}function $d(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(i){return i.replace(Cv,Iv)}var Pv=new Map;function Iv(i,e){let t=et[e];if(t===void 0){let n=Pv.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fu(t)}var Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(i){return i.replace(Lv,Dv)}function Dv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Uv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ov(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Fv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case au:e="ENVMAP_BLENDING_MULTIPLY";break;case rd:e="ENVMAP_BLENDING_MIX";break;case od:e="ENVMAP_BLENDING_ADD";break}return e}function Bv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Uv(t),c=Nv(t),u=Ov(t),h=Fv(t),f=Bv(t),p=Tv(t),g=Av(r),_=s.createProgram(),m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),d.length>0&&(d+=`
`)):(m=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),d=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?et.tonemapping_pars_fragment:"",t.toneMapping!==ni?Ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Sv("linearToOutputTexel",t.outputColorSpace),wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),o=Fu(o),o=$d(o,t),o=Kd(o,t),a=Fu(a),a=$d(a,t),a=Kd(a,t),o=Jd(o),a=Jd(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=E+m+o,M=E+d+a,L=qd(s,s.VERTEX_SHADER,S),T=qd(s,s.FRAGMENT_SHADER,M);s.attachShader(_,L),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(D){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(L).trim(),Z=s.getShaderInfoLog(T).trim(),te=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,T);else{let oe=Zd(s,L,"vertex"),Y=Zd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+oe+`
`+Y)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||Z==="")&&(j=!1);j&&(D.diagnostics={runnable:te,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(L),s.deleteShader(T),U=new Rr(s,_),v=Rv(s,_)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,vv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}var kv=0,Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zu(e),t.set(e,n)),n}},zu=class{constructor(e){this.id=kv++,this.code=e,this.usedTimes=0}};function Hv(i,e,t,n,s,r,o){let a=new gr,l=new Bu,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,D,z,F){let Z=z.fog,te=F.geometry,j=v.isMeshStandardMaterial?z.environment:null,oe=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),Y=oe&&oe.mapping===Fo?oe.image.height:null,re=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let ve=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ne=ve!==void 0?ve.length:0,fe=0;te.morphAttributes.position!==void 0&&(fe=1),te.morphAttributes.normal!==void 0&&(fe=2),te.morphAttributes.color!==void 0&&(fe=3);let Me,q,ie,he;if(re){let Fe=yn[re];Me=Fe.vertexShader,q=Fe.fragmentShader}else Me=v.vertexShader,q=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),he=l.getFragmentShaderID(v);let le=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,lt=!!v.map,Ye=!!v.matcap,tt=!!oe,N=!!v.aoMap,bt=!!v.lightMap,Ze=!!v.bumpMap,Ge=!!v.normalMap,Le=!!v.displacementMap,nt=!!v.emissiveMap,W=!!v.metalnessMap,w=!!v.roughnessMap,x=v.anisotropy>0,A=v.clearcoat>0,k=v.dispersion>0,R=v.iridescence>0,B=v.sheen>0,ce=v.transmission>0,K=x&&!!v.anisotropyMap,se=A&&!!v.clearcoatMap,De=A&&!!v.clearcoatNormalMap,ue=A&&!!v.clearcoatRoughnessMap,ge=R&&!!v.iridescenceMap,Ae=R&&!!v.iridescenceThicknessMap,Re=B&&!!v.sheenColorMap,me=B&&!!v.sheenRoughnessMap,He=!!v.specularMap,_e=!!v.specularColorMap,Ve=!!v.specularIntensityMap,O=ce&&!!v.transmissionMap,xe=ce&&!!v.thicknessMap,ee=!!v.gradientMap,ae=!!v.alphaMap,Ee=v.alphaTest>0,be=!!v.alphaHash,We=!!v.extensions,ht=ni;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ht=i.toneMapping);let Tt={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:Me,fragmentShader:q,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Jt,alphaToCoverage:!!v.alphaToCoverage,map:lt,matcap:Ye,envMap:tt,envMapMode:tt&&oe.mapping,envMapCubeUVHeight:Y,aoMap:N,lightMap:bt,bumpMap:Ze,normalMap:Ge,displacementMap:f&&Le,emissiveMap:nt,normalMapObjectSpace:Ge&&v.normalMapType===_d,normalMapTangentSpace:Ge&&v.normalMapType===vu,metalnessMap:W,roughnessMap:w,anisotropy:x,anisotropyMap:K,clearcoat:A,clearcoatMap:se,clearcoatNormalMap:De,clearcoatRoughnessMap:ue,dispersion:k,iridescence:R,iridescenceMap:ge,iridescenceThicknessMap:Ae,sheen:B,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:He,specularColorMap:_e,specularIntensityMap:Ve,transmission:ce,transmissionMap:O,thicknessMap:xe,gradientMap:ee,opaque:v.transparent===!1&&v.blending===Bn&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ee,alphaHash:be,combine:v.combine,mapUv:lt&&_(v.map.channel),aoMapUv:N&&_(v.aoMap.channel),lightMapUv:bt&&_(v.lightMap.channel),bumpMapUv:Ze&&_(v.bumpMap.channel),normalMapUv:Ge&&_(v.normalMap.channel),displacementMapUv:Le&&_(v.displacementMap.channel),emissiveMapUv:nt&&_(v.emissiveMap.channel),metalnessMapUv:W&&_(v.metalnessMap.channel),roughnessMapUv:w&&_(v.roughnessMap.channel),anisotropyMapUv:K&&_(v.anisotropyMap.channel),clearcoatMapUv:se&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(v.sheenRoughnessMap.channel),specularMapUv:He&&_(v.specularMap.channel),specularColorMapUv:_e&&_(v.specularColorMap.channel),specularIntensityMapUv:Ve&&_(v.specularIntensityMap.channel),transmissionMapUv:O&&_(v.transmissionMap.channel),thicknessMapUv:xe&&_(v.thicknessMap.channel),alphaMapUv:ae&&_(v.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ge||x),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!te.attributes.uv&&(lt||ae),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:pe,skinning:F.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:lt&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:nt&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===It,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:We&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&v.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function d(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)y.push(D),y.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(E(y,v),S(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function E(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function S(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){let y=g[v.type],D;if(y){let z=yn[y];D=Wo.clone(z.uniforms)}else D=v.uniforms;return D}function L(v,y){let D;for(let z=0,F=u.length;z<F;z++){let Z=u[z];if(Z.cacheKey===y){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new zv(i,y,v,r),u.push(D)),D}function T(v){if(--v.usedTimes===0){let y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function I(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:L,releaseProgram:T,releaseShaderCache:I,programs:u,dispose:U}}function Vv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ep(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){let d=o(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,_,m){let d=o(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Gv),n.length>1&&n.sort(f||Qd),s.length>1&&s.sort(f||Qd)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Wv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ep,i.set(n,[o])):s>=r.length?(o=new ep,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ie};break;case"SpotLight":t={position:new P,direction:new P,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function qv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Yv=0;function Zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $v(i){let e=new Xv,t=qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new $e,o=new $e;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,E=0,S=0,M=0,L=0,T=0,I=0;c.sort(Zv);for(let v=0,y=c.length;v<y;v++){let D=c[v],z=D.color,F=D.intensity,Z=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*F,h+=z.g*F,f+=z.b*F;else if(D.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(D.sh.coefficients[j],F);I++}else if(D.isDirectionalLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let oe=D.shadow,Y=t.get(D);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=j,p++}else if(D.isSpotLight){let j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(z).multiplyScalar(F),j.distance=Z,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,n.spot[_]=j;let oe=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,oe.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=oe.matrix,D.castShadow){let Y=t.get(D);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=te,M++}_++}else if(D.isRectAreaLight){let j=e.get(D);j.color.copy(z).multiplyScalar(F),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=j,m++}else if(D.isPointLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){let oe=D.shadow,Y=t.get(D);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,Y.shadowCameraNear=oe.camera.near,Y.shadowCameraFar=oe.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=j,g++}else if(D.isHemisphereLight){let j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(F),j.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[d]=j,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==E||U.numPointShadows!==S||U.numSpotShadows!==M||U.numSpotMaps!==L||U.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=E,U.numPointShadows=S,U.numSpotShadows=M,U.numSpotMaps=L,U.numLightProbes=I,n.version=Yv++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let S=c[d];if(S.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(S.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function tp(i){let e=new $v(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Kv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new tp(i),e.set(s,[a])):r>=o.length?(a=new tp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
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
}`;function Qv(i,e,t){let n=new vr,s=new Ue,r=new Ue,o=new it,a=new Ga({depthPacking:gd}),l=new Wa,c={},u=t.maxTextureSize,h={[wn]:en,[en]:wn,[It]:It},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Jv,fragmentShader:jv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new je(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let d=this.type;this.render=function(T,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Dn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=d!==gi&&this.type===gi,Z=d===gi&&this.type!==gi;for(let te=0,j=T.length;te<j;te++){let oe=T[te],Y=oe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let re=Y.getFrameExtents();if(s.multiply(re),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,Y.mapSize.y=r.y)),Y.map===null||F===!0||Z===!0){let ne=this.type!==gi?{minFilter:Nt,magFilter:Nt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new jt(s.x,s.y,ne),Y.map.texture.name=oe.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ve=Y.getViewportCount();for(let ne=0;ne<ve;ne++){let fe=Y.getViewport(ne);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),z.viewport(o),Y.updateMatrices(oe,ne),n=Y.getFrustum(),M(I,U,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===gi&&E(Y,U),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(v,y,D)};function E(T,I){let U=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,U,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,U,p,_,null)}function S(T,I,U,v){let y=null,D=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=U.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let z=y.uuid,F=I.uuid,Z=c[z];Z===void 0&&(Z={},c[z]=Z);let te=Z[F];te===void 0&&(te=y.clone(),Z[F]=te,I.addEventListener("dispose",L)),y=te}if(y.visible=I.visible,y.wireframe=I.wireframe,v===gi?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:h[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=i.properties.get(y);z.light=U}return y}function M(T,I,U,v,y){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===gi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let F=e.update(T),Z=T.material;if(Array.isArray(Z)){let te=F.groups;for(let j=0,oe=te.length;j<oe;j++){let Y=te[j],re=Z[Y.materialIndex];if(re&&re.visible){let ve=S(T,re,v,y);T.onBeforeShadow(i,T,I,U,F,ve,Y),i.renderBufferDirect(U,null,F,ve,T,Y),T.onAfterShadow(i,T,I,U,F,ve,Y)}}}else if(Z.visible){let te=S(T,Z,v,y);T.onBeforeShadow(i,T,I,U,F,te,null),i.renderBufferDirect(U,null,F,te,T,null),T.onAfterShadow(i,T,I,U,F,te,null)}}let z=T.children;for(let F=0,Z=z.length;F<Z;F++)M(z[F],I,U,v,y)}function L(T){T.target.removeEventListener("dispose",L);for(let U in c){let v=c[U],y=T.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}var ey={[el]:tl,[nl]:rl,[il]:ol,[Ms]:sl,[tl]:el,[rl]:nl,[ol]:il,[sl]:Ms};function ty(i,e){function t(){let O=!1,xe=new it,ee=null,ae=new it(0,0,0,0);return{setMask:function(Ee){ee!==Ee&&!O&&(i.colorMask(Ee,Ee,Ee,Ee),ee=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,be,We,ht,Tt){Tt===!0&&(Ee*=ht,be*=ht,We*=ht),xe.set(Ee,be,We,ht),ae.equals(xe)===!1&&(i.clearColor(Ee,be,We,ht),ae.copy(xe))},reset:function(){O=!1,ee=null,ae.set(-1,0,0,0)}}}function n(){let O=!1,xe=!1,ee=null,ae=null,Ee=null;return{setReversed:function(be){if(xe!==be){let We=e.get("EXT_clip_control");xe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);let ht=Ee;Ee=null,this.setClear(ht)}xe=be},getReversed:function(){return xe},setTest:function(be){be?le(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(be){ee!==be&&!O&&(i.depthMask(be),ee=be)},setFunc:function(be){if(xe&&(be=ey[be]),ae!==be){switch(be){case el:i.depthFunc(i.NEVER);break;case tl:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case sl:i.depthFunc(i.GEQUAL);break;case rl:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=be}},setLocked:function(be){O=be},setClear:function(be){Ee!==be&&(xe&&(be=1-be),i.clearDepth(be),Ee=be)},reset:function(){O=!1,ee=null,ae=null,Ee=null,xe=!1}}}function s(){let O=!1,xe=null,ee=null,ae=null,Ee=null,be=null,We=null,ht=null,Tt=null;return{setTest:function(Fe){O||(Fe?le(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Fe){xe!==Fe&&!O&&(i.stencilMask(Fe),xe=Fe)},setFunc:function(Fe,Et,Gt){(ee!==Fe||ae!==Et||Ee!==Gt)&&(i.stencilFunc(Fe,Et,Gt),ee=Fe,ae=Et,Ee=Gt)},setOp:function(Fe,Et,Gt){(be!==Fe||We!==Et||ht!==Gt)&&(i.stencilOp(Fe,Et,Gt),be=Fe,We=Et,ht=Gt)},setLocked:function(Fe){O=Fe},setClear:function(Fe){Tt!==Fe&&(i.clearStencil(Fe),Tt=Fe)},reset:function(){O=!1,xe=null,ee=null,ae=null,Ee=null,be=null,We=null,ht=null,Tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,S=null,M=null,L=null,T=null,I=new Ie(0,0,0),U=0,v=!1,y=null,D=null,z=null,F=null,Z=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,oe=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=oe>=2);let re=null,ve={},ne=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Me=new it().fromArray(ne),q=new it().fromArray(fe);function ie(O,xe,ee,ae){let Ee=new Uint8Array(4),be=i.createTexture();i.bindTexture(O,be),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<ee;We++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(xe+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return be}let he={};he[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(Ms),Ze(!1),Ge(nu),le(i.CULL_FACE),N(Dn);function le(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function pe(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function we(O,xe){return h[O]!==xe?(i.bindFramebuffer(O,xe),h[O]=xe,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Oe(O,xe){let ee=p,ae=!1;if(O){ee=f.get(xe),ee===void 0&&(ee=[],f.set(xe,ee));let Ee=O.textures;if(ee.length!==Ee.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let be=0,We=Ee.length;be<We;be++)ee[be]=i.COLOR_ATTACHMENT0+be;ee.length=Ee.length,ae=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ae=!0);ae&&i.drawBuffers(ee)}function lt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Ye={[In]:i.FUNC_ADD,[Xf]:i.FUNC_SUBTRACT,[qf]:i.FUNC_REVERSE_SUBTRACT};Ye[Yf]=i.MIN,Ye[Zf]=i.MAX;let tt={[Uo]:i.ZERO,[Gi]:i.ONE,[$f]:i.SRC_COLOR,[ys]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[jf]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[Fi]:i.ONE_MINUS_SRC_ALPHA,[Qf]:i.ONE_MINUS_DST_COLOR,[No]:i.ONE_MINUS_DST_ALPHA,[td]:i.CONSTANT_COLOR,[nd]:i.ONE_MINUS_CONSTANT_COLOR,[id]:i.CONSTANT_ALPHA,[sd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(O,xe,ee,ae,Ee,be,We,ht,Tt,Fe){if(O===Dn){_===!0&&(pe(i.BLEND),_=!1);return}if(_===!1&&(le(i.BLEND),_=!0),O!==Qa){if(O!==m||Fe!==v){if((d!==In||M!==In)&&(i.blendEquation(i.FUNC_ADD),d=In,M=In),Fe)switch(O){case Bn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,S=null,L=null,T=null,I.set(0,0,0),U=0,m=O,v=Fe}return}Ee=Ee||xe,be=be||ee,We=We||ae,(xe!==d||Ee!==M)&&(i.blendEquationSeparate(Ye[xe],Ye[Ee]),d=xe,M=Ee),(ee!==E||ae!==S||be!==L||We!==T)&&(i.blendFuncSeparate(tt[ee],tt[ae],tt[be],tt[We]),E=ee,S=ae,L=be,T=We),(ht.equals(I)===!1||Tt!==U)&&(i.blendColor(ht.r,ht.g,ht.b,Tt),I.copy(ht),U=Tt),m=O,v=!1}function bt(O,xe){O.side===It?pe(i.CULL_FACE):le(i.CULL_FACE);let ee=O.side===en;xe&&(ee=!ee),Ze(ee),O.blending===Bn&&O.transparent===!1?N(Dn):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ae=O.stencilWrite;a.setTest(ae),ae&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function Ge(O){O!==Vf?(le(i.CULL_FACE),O!==D&&(O===nu?i.cullFace(i.BACK):O===Gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),D=O}function Le(O){O!==z&&(j&&i.lineWidth(O),z=O)}function nt(O,xe,ee){O?(le(i.POLYGON_OFFSET_FILL),(F!==xe||Z!==ee)&&(i.polygonOffset(xe,ee),F=xe,Z=ee)):pe(i.POLYGON_OFFSET_FILL)}function W(O){O?le(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function w(O){O===void 0&&(O=i.TEXTURE0+te-1),re!==O&&(i.activeTexture(O),re=O)}function x(O,xe,ee){ee===void 0&&(re===null?ee=i.TEXTURE0+te-1:ee=re);let ae=ve[ee];ae===void 0&&(ae={type:void 0,texture:void 0},ve[ee]=ae),(ae.type!==O||ae.texture!==xe)&&(re!==ee&&(i.activeTexture(ee),re=ee),i.bindTexture(O,xe||he[O]),ae.type=O,ae.texture=xe)}function A(){let O=ve[re];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function R(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(O){Me.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Me.copy(O))}function me(O){q.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),q.copy(O))}function He(O,xe){let ee=c.get(xe);ee===void 0&&(ee=new WeakMap,c.set(xe,ee));let ae=ee.get(O);ae===void 0&&(ae=i.getUniformBlockIndex(xe,O.name),ee.set(O,ae))}function _e(O,xe){let ae=c.get(xe).get(O);l.get(xe)!==ae&&(i.uniformBlockBinding(xe,ae,O.__bindingPointIndex),l.set(xe,ae))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,ve={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,S=null,M=null,L=null,T=null,I=new Ie(0,0,0),U=0,v=!1,y=null,D=null,z=null,F=null,Z=null,Me.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:pe,bindFramebuffer:we,drawBuffers:Oe,useProgram:lt,setBlending:N,setMaterial:bt,setFlipSided:Ze,setCullFace:Ge,setLineWidth:Le,setPolygonOffset:nt,setScissorTest:W,activeTexture:w,bindTexture:x,unbindTexture:A,compressedTexImage2D:k,compressedTexImage3D:R,texImage2D:ge,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:_e,texStorage2D:De,texStorage3D:ue,texSubImage2D:B,texSubImage3D:ce,compressedTexSubImage2D:K,compressedTexSubImage3D:se,scissor:Re,viewport:me,reset:Ve}}function ny(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):mr("canvas")}function _(w,x,A){let k=1,R=W(w);if((R.width>A||R.height>A)&&(k=A/Math.max(R.width,R.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let B=Math.floor(k*R.width),ce=Math.floor(k*R.height);h===void 0&&(h=g(B,ce));let K=x?g(B,ce):h;return K.width=B,K.height=ce,K.getContext("2d").drawImage(w,0,0,B,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+B+"x"+ce+")."),K}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,x,A,k,R=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let B=x;if(x===i.RED&&(A===i.FLOAT&&(B=i.R32F),A===i.HALF_FLOAT&&(B=i.R16F),A===i.UNSIGNED_BYTE&&(B=i.R8)),x===i.RED_INTEGER&&(A===i.UNSIGNED_BYTE&&(B=i.R8UI),A===i.UNSIGNED_SHORT&&(B=i.R16UI),A===i.UNSIGNED_INT&&(B=i.R32UI),A===i.BYTE&&(B=i.R8I),A===i.SHORT&&(B=i.R16I),A===i.INT&&(B=i.R32I)),x===i.RG&&(A===i.FLOAT&&(B=i.RG32F),A===i.HALF_FLOAT&&(B=i.RG16F),A===i.UNSIGNED_BYTE&&(B=i.RG8)),x===i.RG_INTEGER&&(A===i.UNSIGNED_BYTE&&(B=i.RG8UI),A===i.UNSIGNED_SHORT&&(B=i.RG16UI),A===i.UNSIGNED_INT&&(B=i.RG32UI),A===i.BYTE&&(B=i.RG8I),A===i.SHORT&&(B=i.RG16I),A===i.INT&&(B=i.RG32I)),x===i.RGB_INTEGER&&(A===i.UNSIGNED_BYTE&&(B=i.RGB8UI),A===i.UNSIGNED_SHORT&&(B=i.RGB16UI),A===i.UNSIGNED_INT&&(B=i.RGB32UI),A===i.BYTE&&(B=i.RGB8I),A===i.SHORT&&(B=i.RGB16I),A===i.INT&&(B=i.RGB32I)),x===i.RGBA_INTEGER&&(A===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),A===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),A===i.UNSIGNED_INT&&(B=i.RGBA32UI),A===i.BYTE&&(B=i.RGBA8I),A===i.SHORT&&(B=i.RGBA16I),A===i.INT&&(B=i.RGBA32I)),x===i.RGB&&A===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),x===i.RGBA){let ce=R?no:ot.getTransfer(k);A===i.FLOAT&&(B=i.RGBA32F),A===i.HALF_FLOAT&&(B=i.RGBA16F),A===i.UNSIGNED_BYTE&&(B=ce===mt?i.SRGB8_ALPHA8:i.RGBA8),A===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),A===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function M(w,x){let A;return w?x===null||x===us||x===Ls?A=i.DEPTH24_STENCIL8:x===An?A=i.DEPTH32F_STENCIL8:x===Er&&(A=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===us||x===Ls?A=i.DEPTH_COMPONENT24:x===An?A=i.DEPTH_COMPONENT32F:x===Er&&(A=i.DEPTH_COMPONENT16),A}function L(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==Ot?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){let x=w.target;x.removeEventListener("dispose",T),U(x),x.isVideoTexture&&u.delete(x)}function I(w){let x=w.target;x.removeEventListener("dispose",I),y(x)}function U(w){let x=n.get(w);if(x.__webglInit===void 0)return;let A=w.source,k=f.get(A);if(k){let R=k[x.__cacheKey];R.usedTimes--,R.usedTimes===0&&v(w),Object.keys(k).length===0&&f.delete(A)}n.remove(w)}function v(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let A=w.source,k=f.get(A);delete k[x.__cacheKey],o.memory.textures--}function y(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let R=0;R<x.__webglFramebuffer[k].length;R++)i.deleteFramebuffer(x.__webglFramebuffer[k][R]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let A=w.textures;for(let k=0,R=A.length;k<R;k++){let B=n.get(A[k]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(A[k])}n.remove(w)}let D=0;function z(){D=0}function F(){let w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function Z(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function te(w,x){let A=n.get(w);if(w.isVideoTexture&&Le(w),w.isRenderTargetTexture===!1&&w.version>0&&A.__version!==w.version){let k=w.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(A,w,x);return}}t.bindTexture(i.TEXTURE_2D,A.__webglTexture,i.TEXTURE0+x)}function j(w,x){let A=n.get(w);if(w.version>0&&A.__version!==w.version){q(A,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,A.__webglTexture,i.TEXTURE0+x)}function oe(w,x){let A=n.get(w);if(w.version>0&&A.__version!==w.version){q(A,w,x);return}t.bindTexture(i.TEXTURE_3D,A.__webglTexture,i.TEXTURE0+x)}function Y(w,x){let A=n.get(w);if(w.version>0&&A.__version!==w.version){ie(A,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+x)}let re={[Qn]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},ve={[Nt]:i.NEAREST,[cl]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},ne={[xd]:i.NEVER,[Ed]:i.ALWAYS,[vd]:i.LESS,[yu]:i.LEQUAL,[yd]:i.EQUAL,[Sd]:i.GEQUAL,[Md]:i.GREATER,[bd]:i.NOTEQUAL};function fe(w,x){if(x.type===An&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ot||x.magFilter===Sr||x.magFilter===Is||x.magFilter===ii||x.minFilter===Ot||x.minFilter===Sr||x.minFilter===Is||x.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,re[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,re[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,re[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ve[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==Is&&x.minFilter!==ii||x.type===An&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let A=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Me(w,x){let A=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));let k=x.source,R=f.get(k);R===void 0&&(R={},f.set(k,R));let B=Z(x);if(B!==w.__cacheKey){R[B]===void 0&&(R[B]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,A=!0),R[B].usedTimes++;let ce=R[w.__cacheKey];ce!==void 0&&(R[w.__cacheKey].usedTimes--,ce.usedTimes===0&&v(x)),w.__cacheKey=B,w.__webglTexture=R[B].texture}return A}function q(w,x,A){let k=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=i.TEXTURE_3D);let R=Me(w,x),B=x.source;t.bindTexture(k,w.__webglTexture,i.TEXTURE0+A);let ce=n.get(B);if(B.version!==ce.__version||R===!0){t.activeTexture(i.TEXTURE0+A);let K=ot.getPrimaries(ot.workingColorSpace),se=x.colorSpace===si?null:ot.getPrimaries(x.colorSpace),De=x.colorSpace===si||K===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ue=_(x.image,!1,s.maxTextureSize);ue=nt(x,ue);let ge=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),Re=S(x.internalFormat,ge,Ae,x.colorSpace,x.isVideoTexture);fe(k,x);let me,He=x.mipmaps,_e=x.isVideoTexture!==!0,Ve=ce.__version===void 0||R===!0,O=B.dataReady,xe=L(x,ue);if(x.isDepthTexture)Re=M(x.format===bs,x.type),Ve&&(_e?t.texStorage2D(i.TEXTURE_2D,1,Re,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Re,ue.width,ue.height,0,ge,Ae,null));else if(x.isDataTexture)if(He.length>0){_e&&Ve&&t.texStorage2D(i.TEXTURE_2D,xe,Re,He[0].width,He[0].height);for(let ee=0,ae=He.length;ee<ae;ee++)me=He[ee],_e?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,me.width,me.height,ge,Ae,me.data):t.texImage2D(i.TEXTURE_2D,ee,Re,me.width,me.height,0,ge,Ae,me.data);x.generateMipmaps=!1}else _e?(Ve&&t.texStorage2D(i.TEXTURE_2D,xe,Re,ue.width,ue.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,ge,Ae,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Re,ue.width,ue.height,0,ge,Ae,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){_e&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Re,He[0].width,He[0].height,ue.depth);for(let ee=0,ae=He.length;ee<ae;ee++)if(me=He[ee],x.format!==Yt)if(ge!==null)if(_e){if(O)if(x.layerUpdates.size>0){let Ee=Au(me.width,me.height,x.format,x.type);for(let be of x.layerUpdates){let We=me.data.subarray(be*Ee/me.data.BYTES_PER_ELEMENT,(be+1)*Ee/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,be,me.width,me.height,1,ge,We)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,ue.depth,ge,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Re,me.width,me.height,ue.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,ue.depth,ge,Ae,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Re,me.width,me.height,ue.depth,0,ge,Ae,me.data)}else{_e&&Ve&&t.texStorage2D(i.TEXTURE_2D,xe,Re,He[0].width,He[0].height);for(let ee=0,ae=He.length;ee<ae;ee++)me=He[ee],x.format!==Yt?ge!==null?_e?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,me.width,me.height,ge,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,me.width,me.height,ge,Ae,me.data):t.texImage2D(i.TEXTURE_2D,ee,Re,me.width,me.height,0,ge,Ae,me.data)}else if(x.isDataArrayTexture)if(_e){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Re,ue.width,ue.height,ue.depth),O)if(x.layerUpdates.size>0){let ee=Au(ue.width,ue.height,x.format,x.type);for(let ae of x.layerUpdates){let Ee=ue.data.subarray(ae*ee/ue.data.BYTES_PER_ELEMENT,(ae+1)*ee/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,ue.width,ue.height,1,ge,Ae,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ge,Ae,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ue.width,ue.height,ue.depth,0,ge,Ae,ue.data);else if(x.isData3DTexture)_e?(Ve&&t.texStorage3D(i.TEXTURE_3D,xe,Re,ue.width,ue.height,ue.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ge,Ae,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ue.width,ue.height,ue.depth,0,ge,Ae,ue.data);else if(x.isFramebufferTexture){if(Ve)if(_e)t.texStorage2D(i.TEXTURE_2D,xe,Re,ue.width,ue.height);else{let ee=ue.width,ae=ue.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Re,ee,ae,0,ge,Ae,null),ee>>=1,ae>>=1}}else if(He.length>0){if(_e&&Ve){let ee=W(He[0]);t.texStorage2D(i.TEXTURE_2D,xe,Re,ee.width,ee.height)}for(let ee=0,ae=He.length;ee<ae;ee++)me=He[ee],_e?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ge,Ae,me):t.texImage2D(i.TEXTURE_2D,ee,Re,ge,Ae,me);x.generateMipmaps=!1}else if(_e){if(Ve){let ee=W(ue);t.texStorage2D(i.TEXTURE_2D,xe,Re,ee.width,ee.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Ae,ue)}else t.texImage2D(i.TEXTURE_2D,0,Re,ge,Ae,ue);m(x)&&d(k),ce.__version=B.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ie(w,x,A){if(x.image.length!==6)return;let k=Me(w,x),R=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+A);let B=n.get(R);if(R.version!==B.__version||k===!0){t.activeTexture(i.TEXTURE0+A);let ce=ot.getPrimaries(ot.workingColorSpace),K=x.colorSpace===si?null:ot.getPrimaries(x.colorSpace),se=x.colorSpace===si||ce===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let De=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let ae=0;ae<6;ae++)!De&&!ue?ge[ae]=_(x.image[ae],!0,s.maxCubemapSize):ge[ae]=ue?x.image[ae].image:x.image[ae],ge[ae]=nt(x,ge[ae]);let Ae=ge[0],Re=r.convert(x.format,x.colorSpace),me=r.convert(x.type),He=S(x.internalFormat,Re,me,x.colorSpace),_e=x.isVideoTexture!==!0,Ve=B.__version===void 0||k===!0,O=R.dataReady,xe=L(x,Ae);fe(i.TEXTURE_CUBE_MAP,x);let ee;if(De){_e&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,Ae.width,Ae.height);for(let ae=0;ae<6;ae++){ee=ge[ae].mipmaps;for(let Ee=0;Ee<ee.length;Ee++){let be=ee[Ee];x.format!==Yt?Re!==null?_e?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,be.width,be.height,Re,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,He,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,be.width,be.height,Re,me,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,He,be.width,be.height,0,Re,me,be.data)}}}else{if(ee=x.mipmaps,_e&&Ve){ee.length>0&&xe++;let ae=W(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ue){_e?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ge[ae].width,ge[ae].height,Re,me,ge[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,ge[ae].width,ge[ae].height,0,Re,me,ge[ae].data);for(let Ee=0;Ee<ee.length;Ee++){let We=ee[Ee].image[ae].image;_e?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,We.width,We.height,Re,me,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,He,We.width,We.height,0,Re,me,We.data)}}else{_e?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re,me,ge[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,Re,me,ge[ae]);for(let Ee=0;Ee<ee.length;Ee++){let be=ee[Ee];_e?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,Re,me,be.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,He,Re,me,be.image[ae])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),B.__version=R.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function he(w,x,A,k,R,B){let ce=r.convert(A.format,A.colorSpace),K=r.convert(A.type),se=S(A.internalFormat,ce,K,A.colorSpace),De=n.get(x),ue=n.get(A);if(ue.__renderTarget=x,!De.__hasExternalTextures){let ge=Math.max(1,x.width>>B),Ae=Math.max(1,x.height>>B);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?t.texImage3D(R,B,se,ge,Ae,x.depth,0,ce,K,null):t.texImage2D(R,B,se,ge,Ae,0,ce,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ge(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,R,ue.__webglTexture,0,Ze(x)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,R,ue.__webglTexture,B),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(w,x,A){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let k=x.depthTexture,R=k&&k.isDepthTexture?k.type:null,B=M(x.stencilBuffer,R),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=Ze(x);Ge(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,B,x.width,x.height):A?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,B,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,B,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,w)}else{let k=x.textures;for(let R=0;R<k.length;R++){let B=k[R],ce=r.convert(B.format,B.colorSpace),K=r.convert(B.type),se=S(B.internalFormat,ce,K,B.colorSpace),De=Ze(x);A&&Ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,se,x.width,x.height):Ge(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=n.get(x.depthTexture);k.__renderTarget=x,(!k.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),te(x.depthTexture,0);let R=k.__webglTexture,B=Ze(x);if(x.depthTexture.format===vs)Ge(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0);else if(x.depthTexture.format===bs)Ge(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function we(w){let x=n.get(w),A=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let k=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){let R=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",R)};k.addEventListener("dispose",R),x.__depthDisposeCallback=R}x.__boundDepthTexture=k}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");pe(x.__webglFramebuffer,w)}else if(A){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=i.createRenderbuffer(),le(x.__webglDepthbuffer[k],w,!1);else{let R=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=x.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,B)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),le(x.__webglDepthbuffer,w,!1);else{let k=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,R=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,R),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,R)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(w,x,A){let k=n.get(w);x!==void 0&&he(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),A!==void 0&&we(w)}function lt(w){let x=w.texture,A=n.get(w),k=n.get(x);w.addEventListener("dispose",I);let R=w.textures,B=w.isWebGLCubeRenderTarget===!0,ce=R.length>1;if(ce||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=x.version,o.memory.textures++),B){A.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer[K]=[];for(let se=0;se<x.mipmaps.length;se++)A.__webglFramebuffer[K][se]=i.createFramebuffer()}else A.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)A.__webglFramebuffer[K]=i.createFramebuffer()}else A.__webglFramebuffer=i.createFramebuffer();if(ce)for(let K=0,se=R.length;K<se;K++){let De=n.get(R[K]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ge(w)===!1){A.__webglMultisampledFramebuffer=i.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let K=0;K<R.length;K++){let se=R[K];A.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,A.__webglColorRenderbuffer[K]);let De=r.convert(se.format,se.colorSpace),ue=r.convert(se.type),ge=S(se.internalFormat,De,ue,se.colorSpace,w.isXRRenderTarget===!0),Ae=Ze(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ge,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,A.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(A.__webglDepthRenderbuffer=i.createRenderbuffer(),le(A.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),fe(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)he(A.__webglFramebuffer[K][se],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se);else he(A.__webglFramebuffer[K],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let K=0,se=R.length;K<se;K++){let De=R[K],ue=n.get(De);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),fe(i.TEXTURE_2D,De),he(A.__webglFramebuffer,w,De,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),m(De)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,k.__webglTexture),fe(K,x),x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)he(A.__webglFramebuffer[se],w,x,i.COLOR_ATTACHMENT0,K,se);else he(A.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,K,0);m(x)&&d(K),t.unbindTexture()}w.depthBuffer&&we(w)}function Ye(w){let x=w.textures;for(let A=0,k=x.length;A<k;A++){let R=x[A];if(m(R)){let B=E(w),ce=n.get(R).__webglTexture;t.bindTexture(B,ce),d(B),t.unbindTexture()}}}let tt=[],N=[];function bt(w){if(w.samples>0){if(Ge(w)===!1){let x=w.textures,A=w.width,k=w.height,R=i.COLOR_BUFFER_BIT,B=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(w),K=x.length>1;if(K)for(let se=0;se<x.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let se=0;se<x.length;se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[se]);let De=n.get(x[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,A,k,0,0,A,k,R,i.NEAREST),l===!0&&(tt.length=0,N.length=0,tt.push(i.COLOR_ATTACHMENT0+se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(tt.push(B),N.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let se=0;se<x.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,ce.__webglColorRenderbuffer[se]);let De=n.get(x[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ze(w){return Math.min(s.maxSamples,w.samples)}function Ge(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Le(w){let x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function nt(w,x){let A=w.colorSpace,k=w.format,R=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||A!==Jt&&A!==si&&(ot.getTransfer(A)===mt?(k!==Yt||R!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),x}function W(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=j,this.setTexture3D=oe,this.setTextureCube=Y,this.rebindTextures=Oe,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ge}function iy(i,e){function t(n,s=si){let r,o=ot.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.BYTE;if(n===uu)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===us)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===du)return i.RGB;if(n===Yt)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===dl)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===gu)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Bo||n===zo||n===ko||n===Ho)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===xl||n===vl||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===bl||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===bl)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Ol||n===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Bl||n===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===kl||n===Hl||n===Vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sy={type:"move"},qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
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

}`,ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zt({vertexShader:ry,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends li{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,_=new ku,m=t.getContextAttributes(),d=null,E=null,S=[],M=[],L=new Ue,T=null,I=new Ut;I.viewport=new it;let U=new Ut;U.viewport=new it;let v=[I,U],y=new Ja,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=S[q];return ie===void 0&&(ie=new qo,S[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=S[q];return ie===void 0&&(ie=new qo,S[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=S[q];return ie===void 0&&(ie=new qo,S[q]=ie),ie.getHandSpace()};function F(q){let ie=M.indexOf(q.inputSource);if(ie===-1)return;let he=S[ie];he!==void 0&&(he.update(q.inputSource,q.frame,c||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",te);for(let q=0;q<S.length;q++){let ie=M[q];ie!==null&&(M[q]=null,S[q].disconnect(ie))}D=null,z=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,E=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let he=null,le=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?bs:vs,le=m.stencil?Ls:us);let we={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(we),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new jt(f.textureWidth,f.textureHeight,{format:Yt,type:kn,depthTexture:new vo(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{let he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new jt(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(q){for(let ie=0;ie<q.removed.length;ie++){let he=q.removed[ie],le=M.indexOf(he);le>=0&&(M[le]=null,S[le].disconnect(he))}for(let ie=0;ie<q.added.length;ie++){let he=q.added[ie],le=M.indexOf(he);if(le===-1){for(let we=0;we<S.length;we++)if(we>=M.length){M.push(he),le=we;break}else if(M[we]===null){M[we]=he,le=we;break}if(le===-1)break}let pe=S[le];pe&&pe.connect(he)}}let j=new P,oe=new P;function Y(q,ie,he){j.setFromMatrixPosition(ie.matrixWorld),oe.setFromMatrixPosition(he.matrixWorld);let le=j.distanceTo(oe),pe=ie.projectionMatrix.elements,we=he.projectionMatrix.elements,Oe=pe[14]/(pe[10]-1),lt=pe[14]/(pe[10]+1),Ye=(pe[9]+1)/pe[5],tt=(pe[9]-1)/pe[5],N=(pe[8]-1)/pe[0],bt=(we[8]+1)/we[0],Ze=Oe*N,Ge=Oe*bt,Le=le/(-N+bt),nt=Le*-N;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(nt),q.translateZ(Le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),pe[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let W=Oe+Le,w=lt+Le,x=Ze-nt,A=Ge+(le-nt),k=Ye*lt/w*W,R=tt*lt/w*W;q.projectionMatrix.makePerspective(x,A,k,R,W,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ie=q.near,he=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(he=_.depthFar)),y.near=U.near=I.near=ie,y.far=U.far=I.far=he,(D!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,z=y.far),I.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,y.layers.mask=I.layers.mask|U.layers.mask;let le=q.parent,pe=y.cameras;re(y,le);for(let we=0;we<pe.length;we++)re(pe[we],le);pe.length===2?Y(y,I,U):y.projectionMatrix.copy(I.projectionMatrix),ve(q,y,le)};function ve(q,ie,he){he===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ws*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ne=null;function fe(q,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){let he=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let le=!1;he.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let we=0;we<he.length;we++){let Oe=he[we],lt=null;if(p!==null)lt=p.getViewport(Oe);else{let tt=h.getViewSubImage(f,Oe);lt=tt.viewport,we===0&&(e.setRenderTargetTextures(E,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(E))}let Ye=v[we];Ye===void 0&&(Ye=new Ut,Ye.layers.enable(we),Ye.viewport=new it,v[we]=Ye),Ye.matrix.fromArray(Oe.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Oe.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(lt.x,lt.y,lt.width,lt.height),we===0&&(y.matrix.copy(Ye.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Ye)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")){let we=h.getDepthInformation(he[0]);we&&we.isValid&&we.texture&&_.init(e,we,s.renderState)}}for(let he=0;he<S.length;he++){let le=M[he],pe=S[he];le!==null&&pe!==void 0&&pe.update(le,ie,c||o)}ne&&ne(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Me=new np;Me.setAnimationLoop(fe),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}},Fs=new ei,ay=new $e;function ly(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Eu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=e.get(d),S=E.envMap,M=E.envMapRotation;S&&(m.envMap.value=S,Fs.copy(M),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(ay.makeRotationFromEuler(Fs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let M=S.program;n.uniformBlockBinding(E,M)}function c(E,S){let M=s[E.id];M===void 0&&(g(E),M=u(E),s[E.id]=M,E.addEventListener("dispose",m));let L=S.program;n.updateUBOMapping(E,L);let T=e.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function u(E){let S=h();E.__bindingPointIndex=S;let M=i.createBuffer(),L=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let S=s[E.id],M=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,I=M.length;T<I;T++){let U=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,y=U.length;v<y;v++){let D=U[v];if(p(D,T,v,L)===!0){let z=D.__offset,F=Array.isArray(D.value)?D.value:[D.value],Z=0;for(let te=0;te<F.length;te++){let j=F[te],oe=_(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,z+Z,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,Z),Z+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,M,L){let T=E.value,I=S+"_"+M;if(L[I]===void 0)return typeof T=="number"||typeof T=="boolean"?L[I]=T:L[I]=T.clone(),!0;{let U=L[I];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return L[I]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(E){let S=E.uniforms,M=0,L=16;for(let I=0,U=S.length;I<U;I++){let v=Array.isArray(S[I])?S[I]:[S[I]];for(let y=0,D=v.length;y<D;y++){let z=v[y],F=Array.isArray(z.value)?z.value:[z.value];for(let Z=0,te=F.length;Z<te;Z++){let j=F[Z],oe=_(j),Y=M%L,re=Y%oe.boundary,ve=Y+re;M+=re,ve!==0&&L-ve<oe.storage&&(M+=L-ve),z.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=oe.storage}}}let T=M%L;return T>0&&(M+=L-T),E.__size=M,E.__cache={},this}function _(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ql=class{constructor(e={}){let{canvas:t=wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=ni,this.toneMappingExposure=1;let M=this,L=!1,T=0,I=0,U=null,v=-1,y=null,D=new it,z=new it,F=null,Z=new Ie(0),te=0,j=t.width,oe=t.height,Y=1,re=null,ve=null,ne=new it(0,0,j,oe),fe=new it(0,0,j,oe),Me=!1,q=new vr,ie=!1,he=!1;this.transmissionResolutionScale=1;let le=new $e,pe=new $e,we=new P,Oe=new it,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function tt(){return U===null?Y:1}let N=n;function bt(b,H){return t.getContext(b,H)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",be,!1),N===null){let H="webgl2";if(N=bt(H,b),N===null)throw bt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ze,Ge,Le,nt,W,w,x,A,k,R,B,ce,K,se,De,ue,ge,Ae,Re,me,He,_e,Ve,O;function xe(){Ze=new Tx(N),Ze.init(),_e=new iy(N,Ze),Ge=new yx(N,Ze,e,_e),Le=new ty(N,Ze),Ge.reverseDepthBuffer&&f&&Le.buffers.depth.setReversed(!0),nt=new Cx(N),W=new Vv,w=new ny(N,Ze,Le,W,Ge,_e,nt),x=new bx(M),A=new wx(M),k=new Og(N),Ve=new xx(N,k),R=new Ax(N,k,nt,Ve),B=new Ix(N,R,k,nt),Re=new Px(N,Ge,w),ue=new Mx(W),ce=new Hv(M,x,A,Ze,Ge,Ve,ue),K=new ly(M,W),se=new Wv,De=new Kv(Ze),Ae=new _x(M,x,A,Le,B,p,l),ge=new Qv(M,B,Ge),O=new cy(N,nt,Ge,Le),me=new vx(N,Ze,nt),He=new Rx(N,Ze,nt),nt.programs=ce.programs,M.capabilities=Ge,M.extensions=Ze,M.properties=W,M.renderLists=se,M.shadowMap=ge,M.state=Le,M.info=nt}xe();let ee=new Hu(M,N);this.xr=ee,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=Ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(j,oe,!1))},this.getSize=function(b){return b.set(j,oe)},this.setSize=function(b,H,$=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,oe=H,t.width=Math.floor(b*Y),t.height=Math.floor(H*Y),$===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(j*Y,oe*Y).floor()},this.setDrawingBufferSize=function(b,H,$){j=b,oe=H,Y=$,t.width=Math.floor(b*$),t.height=Math.floor(H*$),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(ne)},this.setViewport=function(b,H,$,J){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,H,$,J),Le.viewport(D.copy(ne).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(fe)},this.setScissor=function(b,H,$,J){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,H,$,J),Le.scissor(z.copy(fe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(b){Le.setScissorTest(Me=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(b=!0,H=!0,$=!0){let J=0;if(b){let V=!1;if(U!==null){let de=U.texture.format;V=de===gl||de===ml||de===pl}if(V){let de=U.texture.type,Se=de===kn||de===us||de===Er||de===Ls||de===hl||de===fl,Ce=Ae.getClearColor(),Pe=Ae.getClearAlpha(),Xe=Ce.r,qe=Ce.g,ze=Ce.b;Se?(g[0]=Xe,g[1]=qe,g[2]=ze,g[3]=Pe,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Xe,_[1]=qe,_[2]=ze,_[3]=Pe,N.clearBufferiv(N.COLOR,0,_))}else J|=N.COLOR_BUFFER_BIT}H&&(J|=N.DEPTH_BUFFER_BIT),$&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ae.dispose(),se.dispose(),De.dispose(),W.dispose(),x.dispose(),A.dispose(),B.dispose(),Ve.dispose(),O.dispose(),ce.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Ei),ee.removeEventListener("sessionend",wi),gn.stop()};function ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let b=nt.autoReset,H=ge.enabled,$=ge.autoUpdate,J=ge.needsUpdate,V=ge.type;xe(),nt.autoReset=b,ge.enabled=H,ge.autoUpdate=$,ge.needsUpdate=J,ge.type=V}function be(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function We(b){let H=b.target;H.removeEventListener("dispose",We),ht(H)}function ht(b){Tt(b),W.remove(b)}function Tt(b){let H=W.get(b).programs;H!==void 0&&(H.forEach(function($){ce.releaseProgram($)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,$,J,V,de){H===null&&(H=lt);let Se=V.isMesh&&V.matrixWorld.determinant()<0,Ce=ds(b,H,$,J,V);Le.setMaterial(J,Se);let Pe=$.index,Xe=1;if(J.wireframe===!0){if(Pe=R.getWireframeAttribute($),Pe===void 0)return;Xe=2}let qe=$.drawRange,ze=$.attributes.position,rt=qe.start*Xe,at=(qe.start+qe.count)*Xe;de!==null&&(rt=Math.max(rt,de.start*Xe),at=Math.min(at,(de.start+de.count)*Xe)),Pe!==null?(rt=Math.max(rt,0),at=Math.min(at,Pe.count)):ze!=null&&(rt=Math.max(rt,0),at=Math.min(at,ze.count));let At=at-rt;if(At<0||At===1/0)return;Ve.setup(V,J,Ce,$,Pe);let _t,Ke=me;if(Pe!==null&&(_t=k.get(Pe),Ke=He,Ke.setIndex(_t)),V.isMesh)J.wireframe===!0?(Le.setLineWidth(J.wireframeLinewidth*tt()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(V.isLine){let Ne=J.linewidth;Ne===void 0&&(Ne=1),Le.setLineWidth(Ne*tt()),V.isLineSegments?Ke.setMode(N.LINES):V.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else V.isPoints?Ke.setMode(N.POINTS):V.isSprite&&Ke.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ke.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Ke.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ne=V._multiDrawStarts,St=V._multiDrawCounts,ct=V._multiDrawCount,Mn=Pe?k.get(Pe).bytesPerElement:1,Ti=W.get(J).currentProgram.getUniforms();for(let Zt=0;Zt<ct;Zt++)Ti.setValue(N,"_gl_DrawID",Zt),Ke.render(Ne[Zt]/Mn,St[Zt])}else if(V.isInstancedMesh)Ke.renderInstances(rt,At,V.count);else if($.isInstancedBufferGeometry){let Ne=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,St=Math.min($.instanceCount,Ne);Ke.renderInstances(rt,At,St)}else Ke.render(rt,At)};function Fe(b,H,$){b.transparent===!0&&b.side===It&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,Xs(b,H,$),b.side=wn,b.needsUpdate=!0,Xs(b,H,$),b.side=It):Xs(b,H,$)}this.compile=function(b,H,$=null){$===null&&($=b),d=De.get($),d.init(H),S.push(d),$.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),b!==$&&b.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();let J=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let de=V.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){let Ce=de[Se];Fe(Ce,$,V),J.add(Ce)}else Fe(de,$,V),J.add(de)}),S.pop(),d=null,J},this.compileAsync=function(b,H,$=null){let J=this.compile(b,H,$);return new Promise(V=>{function de(){if(J.forEach(function(Se){W.get(Se).currentProgram.isReady()&&J.delete(Se)}),J.size===0){V(b);return}setTimeout(de,10)}Ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Et=null;function Gt(b){Et&&Et(b)}function Ei(){gn.stop()}function wi(){gn.start()}let gn=new np;gn.setAnimationLoop(Gt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(b){Et=b,ee.setAnimationLoop(b),b===null?gn.stop():gn.start()},ee.addEventListener("sessionstart",Ei),ee.addEventListener("sessionend",wi),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(H),H=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,H,U),d=De.get(b,S.length),d.init(H),S.push(d),pe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q.setFromProjectionMatrix(pe),he=this.localClippingEnabled,ie=ue.init(this.clippingPlanes,he),m=se.get(b,E.length),m.init(),E.push(m),ee.enabled===!0&&ee.isPresenting===!0){let de=M.xr.getDepthSensingMesh();de!==null&&Wn(de,H,-1/0,M.sortObjects)}Wn(b,H,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(re,ve),Ye=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ye&&Ae.addToRenderList(m,b),this.info.render.frame++,ie===!0&&ue.beginShadows();let $=d.state.shadowsArray;ge.render($,b,H),ie===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,V=m.transmissive;if(d.setupLights(),H.isArrayCamera){let de=H.cameras;if(V.length>0)for(let Se=0,Ce=de.length;Se<Ce;Se++){let Pe=de[Se];Nn(J,V,b,Pe)}Ye&&Ae.render(b);for(let Se=0,Ce=de.length;Se<Ce;Se++){let Pe=de[Se];fs(m,b,Pe,Pe.viewport)}}else V.length>0&&Nn(J,V,b,H),Ye&&Ae.render(b),fs(m,b,H);U!==null&&I===0&&(w.updateMultisampleRenderTarget(U),w.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(M,b,H),Ve.resetDefaultState(),v=-1,y=null,S.pop(),S.length>0?(d=S[S.length-1],ie===!0&&ue.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Wn(b,H,$,J){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){J&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);let Se=B.update(b),Ce=b.material;Ce.visible&&m.push(b,Se,Ce,$,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){let Se=B.update(b),Ce=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Oe.copy(Se.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(Ce)){let Pe=Se.groups;for(let Xe=0,qe=Pe.length;Xe<qe;Xe++){let ze=Pe[Xe],rt=Ce[ze.materialIndex];rt&&rt.visible&&m.push(b,Se,rt,$,Oe.z,ze)}}else Ce.visible&&m.push(b,Se,Ce,$,Oe.z,null)}}let de=b.children;for(let Se=0,Ce=de.length;Se<Ce;Se++)Wn(de[Se],H,$,J)}function fs(b,H,$,J){let V=b.opaque,de=b.transmissive,Se=b.transparent;d.setupLightsView($),ie===!0&&ue.setGlobalState(M.clippingPlanes,$),J&&Le.viewport(D.copy(J)),V.length>0&&Zi(V,H,$),de.length>0&&Zi(de,H,$),Se.length>0&&Zi(Se,H,$),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Nn(b,H,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new jt(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Wi:kn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let de=d.state.transmissionRenderTarget[J.id],Se=J.viewport||D;de.setSize(Se.z*M.transmissionResolutionScale,Se.w*M.transmissionResolutionScale);let Ce=M.getRenderTarget();M.setRenderTarget(de),M.getClearColor(Z),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),Ye&&Ae.render($);let Pe=M.toneMapping;M.toneMapping=ni;let Xe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),ie===!0&&ue.setGlobalState(M.clippingPlanes,J),Zi(b,$,J),w.updateMultisampleRenderTarget(de),w.updateRenderTargetMipmap(de),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ze=0,rt=H.length;ze<rt;ze++){let at=H[ze],At=at.object,_t=at.geometry,Ke=at.material,Ne=at.group;if(Ke.side===It&&At.layers.test(J.layers)){let St=Ke.side;Ke.side=en,Ke.needsUpdate=!0,Ws(At,$,J,_t,Ke,Ne),Ke.side=St,Ke.needsUpdate=!0,qe=!0}}qe===!0&&(w.updateMultisampleRenderTarget(de),w.updateRenderTargetMipmap(de))}M.setRenderTarget(Ce),M.setClearColor(Z,te),Xe!==void 0&&(J.viewport=Xe),M.toneMapping=Pe}function Zi(b,H,$){let J=H.isScene===!0?H.overrideMaterial:null;for(let V=0,de=b.length;V<de;V++){let Se=b[V],Ce=Se.object,Pe=Se.geometry,Xe=J===null?Se.material:J,qe=Se.group;Ce.layers.test($.layers)&&Ws(Ce,H,$,Pe,Xe,qe)}}function Ws(b,H,$,J,V,de){b.onBeforeRender(M,H,$,J,V,de),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(M,H,$,J,b,de),V.transparent===!0&&V.side===It&&V.forceSinglePass===!1?(V.side=en,V.needsUpdate=!0,M.renderBufferDirect($,H,J,V,b,de),V.side=wn,V.needsUpdate=!0,M.renderBufferDirect($,H,J,V,b,de),V.side=It):M.renderBufferDirect($,H,J,V,b,de),b.onAfterRender(M,H,$,J,V,de)}function Xs(b,H,$){H.isScene!==!0&&(H=lt);let J=W.get(b),V=d.state.lights,de=d.state.shadowsArray,Se=V.state.version,Ce=ce.getParameters(b,V.state,de,H,$),Pe=ce.getProgramCacheKey(Ce),Xe=J.programs;J.environment=b.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(b.isMeshStandardMaterial?A:x).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Xe===void 0&&(b.addEventListener("dispose",We),Xe=new Map,J.programs=Xe);let qe=Xe.get(Pe);if(qe!==void 0){if(J.currentProgram===qe&&J.lightsStateVersion===Se)return $i(b,Ce),qe}else Ce.uniforms=ce.getUniforms(b),b.onBeforeCompile(Ce,M),qe=ce.acquireProgram(Ce,Pe),Xe.set(Pe,qe),J.uniforms=Ce.uniforms;let ze=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=ue.uniform),$i(b,Ce),J.needsLights=hc(b),J.lightsStateVersion=Se,J.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=qe,J.uniformsList=null,qe}function Hr(b){if(b.uniformsList===null){let H=b.currentProgram.getUniforms();b.uniformsList=Rr.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function $i(b,H){let $=W.get(b);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function ds(b,H,$,J,V){H.isScene!==!0&&(H=lt),w.resetTextureUnits();let de=H.fog,Se=J.isMeshStandardMaterial?H.environment:null,Ce=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Jt,Pe=(J.isMeshStandardMaterial?A:x).get(J.envMap||Se),Xe=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qe=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!$.morphAttributes.position,rt=!!$.morphAttributes.normal,at=!!$.morphAttributes.color,At=ni;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=M.toneMapping);let _t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ke=_t!==void 0?_t.length:0,Ne=W.get(J),St=d.state.lights;if(ie===!0&&(he===!0||b!==y)){let $t=b===y&&J.id===v;ue.setState(J,b,$t)}let ct=!1;J.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==St.state.version||Ne.outputColorSpace!==Ce||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==Pe||J.fog===!0&&Ne.fog!==de||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==qe||Ne.morphTargets!==ze||Ne.morphNormals!==rt||Ne.morphColors!==at||Ne.toneMapping!==At||Ne.morphTargetsCount!==Ke)&&(ct=!0):(ct=!0,Ne.__version=J.version);let Mn=Ne.currentProgram;ct===!0&&(Mn=Xs(J,H,V));let Ti=!1,Zt=!1,Ai=!1,xt=Mn.getUniforms(),Ft=Ne.uniforms;if(Le.useProgram(Mn.program)&&(Ti=!0,Zt=!0,Ai=!0),J.id!==v&&(v=J.id,Zt=!0),Ti||y!==b){Le.buffers.depth.getReversed()?(le.copy(b.projectionMatrix),Ad(le),Rd(le),xt.setValue(N,"projectionMatrix",le)):xt.setValue(N,"projectionMatrix",b.projectionMatrix),xt.setValue(N,"viewMatrix",b.matrixWorldInverse);let Kt=xt.map.cameraPosition;Kt!==void 0&&Kt.setValue(N,we.setFromMatrixPosition(b.matrixWorld)),Ge.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&xt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Zt=!0,Ai=!0)}if(V.isSkinnedMesh){xt.setOptional(N,V,"bindMatrix"),xt.setOptional(N,V,"bindMatrixInverse");let $t=V.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),xt.setValue(N,"boneTexture",$t.boneTexture,w))}V.isBatchedMesh&&(xt.setOptional(N,V,"batchingTexture"),xt.setValue(N,"batchingTexture",V._matricesTexture,w),xt.setOptional(N,V,"batchingIdTexture"),xt.setValue(N,"batchingIdTexture",V._indirectTexture,w),xt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&xt.setValue(N,"batchingColorTexture",V._colorsTexture,w));let bn=$.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Re.update(V,$,Mn),(Zt||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,xt.setValue(N,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ft.envMap.value=Pe,Ft.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(Ft.envMapIntensity.value=H.environmentIntensity),Zt&&(xt.setValue(N,"toneMappingExposure",M.toneMappingExposure),Ne.needsLights&&Ki(Ft,Ai),de&&J.fog===!0&&K.refreshFogUniforms(Ft,de),K.refreshMaterialUniforms(Ft,J,Y,oe,d.state.transmissionRenderTarget[b.id]),Rr.upload(N,Hr(Ne),Ft,w)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Rr.upload(N,Hr(Ne),Ft,w),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&xt.setValue(N,"center",V.center),xt.setValue(N,"modelViewMatrix",V.modelViewMatrix),xt.setValue(N,"normalMatrix",V.normalMatrix),xt.setValue(N,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let $t=J.uniformsGroups;for(let Kt=0,Ys=$t.length;Kt<Ys;Kt++){let Ri=$t[Kt];O.update(Ri,Mn),O.bind(Ri,Mn)}}return Mn}function Ki(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function hc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,H,$){W.get(b.texture).__webglTexture=H,W.get(b.depthTexture).__webglTexture=$;let J=W.get(b);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){let $=W.get(b);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};let na=N.createFramebuffer();this.setRenderTarget=function(b,H=0,$=0){U=b,T=H,I=$;let J=!0,V=null,de=!1,Se=!1;if(b){let Pe=W.get(b);if(Pe.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(Pe.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Pe.__hasExternalTextures)w.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ze=b.depthTexture;if(Pe.__boundDepthTexture!==ze){if(ze!==null&&W.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}let Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Se=!0);let qe=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qe[H])?V=qe[H][$]:V=qe[H],de=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?V=W.get(b).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[$]:V=qe,D.copy(b.viewport),z.copy(b.scissor),F=b.scissorTest}else D.copy(ne).multiplyScalar(Y).floor(),z.copy(fe).multiplyScalar(Y).floor(),F=Me;if($!==0&&(V=na),Le.bindFramebuffer(N.FRAMEBUFFER,V)&&J&&Le.drawBuffers(b,V),Le.viewport(D),Le.scissor(z),Le.setScissorTest(F),de){let Pe=W.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,$)}else if(Se){let Pe=W.get(b.texture),Xe=H;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.__webglTexture,$,Xe)}else if(b!==null&&$!==0){let Pe=W.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pe.__webglTexture,$)}v=-1},this.readRenderTargetPixels=function(b,H,$,J,V,de,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){Le.bindFramebuffer(N.FRAMEBUFFER,Ce);try{let Pe=b.texture,Xe=Pe.format,qe=Pe.type;if(!Ge.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-J&&$>=0&&$<=b.height-V&&N.readPixels(H,$,J,V,_e.convert(Xe),_e.convert(qe),de)}finally{let Pe=U!==null?W.get(U).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,H,$,J,V,de,Se){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){let Pe=b.texture,Xe=Pe.format,qe=Pe.type;if(!Ge.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-J&&$>=0&&$<=b.height-V){Le.bindFramebuffer(N.FRAMEBUFFER,Ce);let ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(H,$,J,V,_e.convert(Xe),_e.convert(qe),0);let rt=U!==null?W.get(U).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,rt);let at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Td(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.deleteBuffer(ze),N.deleteSync(at),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,H=null,$=0){b.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);let J=Math.pow(2,-$),V=Math.floor(b.image.width*J),de=Math.floor(b.image.height*J),Se=H!==null?H.x:0,Ce=H!==null?H.y:0;w.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,Se,Ce,V,de),Le.unbindTexture()};let qs=N.createFramebuffer(),fc=N.createFramebuffer();this.copyTextureToTexture=function(b,H,$=null,J=null,V=0,de=null){b.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,b=arguments[1],H=arguments[2],de=arguments[3]||0,$=null),de===null&&(V!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=V,V=0):de=0);let Se,Ce,Pe,Xe,qe,ze,rt,at,At,_t=b.isCompressedTexture?b.mipmaps[de]:b.image;if($!==null)Se=$.max.x-$.min.x,Ce=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,Xe=$.min.x,qe=$.min.y,ze=$.isBox3?$.min.z:0;else{let bn=Math.pow(2,-V);Se=Math.floor(_t.width*bn),Ce=Math.floor(_t.height*bn),b.isDataArrayTexture?Pe=_t.depth:b.isData3DTexture?Pe=Math.floor(_t.depth*bn):Pe=1,Xe=0,qe=0,ze=0}J!==null?(rt=J.x,at=J.y,At=J.z):(rt=0,at=0,At=0);let Ke=_e.convert(H.format),Ne=_e.convert(H.type),St;H.isData3DTexture?(w.setTexture3D(H,0),St=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(w.setTexture2DArray(H,0),St=N.TEXTURE_2D_ARRAY):(w.setTexture2D(H,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let ct=N.getParameter(N.UNPACK_ROW_LENGTH),Mn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ti=N.getParameter(N.UNPACK_SKIP_PIXELS),Zt=N.getParameter(N.UNPACK_SKIP_ROWS),Ai=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);let xt=b.isDataArrayTexture||b.isData3DTexture,Ft=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){let bn=W.get(b),$t=W.get(H),Kt=W.get(bn.__renderTarget),Ys=W.get($t.__renderTarget);Le.bindFramebuffer(N.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let Ri=0;Ri<Pe;Ri++)xt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(b).__webglTexture,V,ze+Ri),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(H).__webglTexture,de,At+Ri)),N.blitFramebuffer(Xe,qe,Se,Ce,rt,at,Se,Ce,N.DEPTH_BUFFER_BIT,N.NEAREST);Le.bindFramebuffer(N.READ_FRAMEBUFFER,null),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||W.has(b)){let bn=W.get(b),$t=W.get(H);Le.bindFramebuffer(N.READ_FRAMEBUFFER,qs),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,fc);for(let Kt=0;Kt<Pe;Kt++)xt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bn.__webglTexture,V,ze+Kt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bn.__webglTexture,V),Ft?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.__webglTexture,de,At+Kt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$t.__webglTexture,de),V!==0?N.blitFramebuffer(Xe,qe,Se,Ce,rt,at,Se,Ce,N.COLOR_BUFFER_BIT,N.NEAREST):Ft?N.copyTexSubImage3D(St,de,rt,at,At+Kt,Xe,qe,Se,Ce):N.copyTexSubImage2D(St,de,rt,at,Xe,qe,Se,Ce);Le.bindFramebuffer(N.READ_FRAMEBUFFER,null),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ft?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(St,de,rt,at,At,Se,Ce,Pe,Ke,Ne,_t.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(St,de,rt,at,At,Se,Ce,Pe,Ke,_t.data):N.texSubImage3D(St,de,rt,at,At,Se,Ce,Pe,Ke,Ne,_t):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,rt,at,Se,Ce,Ke,Ne,_t.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,rt,at,_t.width,_t.height,Ke,_t.data):N.texSubImage2D(N.TEXTURE_2D,de,rt,at,Se,Ce,Ke,Ne,_t);N.pixelStorei(N.UNPACK_ROW_LENGTH,ct),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ti),N.pixelStorei(N.UNPACK_SKIP_ROWS,Zt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ai),de===0&&H.generateMipmaps&&N.generateMipmap(St),Le.unbindTexture()},this.copyTextureToTexture3D=function(b,H,$=null,J=null,V=0){return b.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,b=arguments[2],H=arguments[3],V=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,H,$,J,V)},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),Le.unbindTexture()},this.resetState=function(){T=0,I=0,U=null,Le.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};function Gu(i,e){if(e===xu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===wr||e===Go){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===wr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Zl=class extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ku(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new uh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Vi.extractUrlBase(e);o=Vi.resolveURL(c,this.path)}else o=Vi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Mr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hp){try{o[st.KHR_BINARY_GLTF]=new hh(e)}catch(h){s&&s(h);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new xh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new Zu;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new fh(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new dh;break;case st.KHR_MESH_QUANTIZATION:o[h]=new ph;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function uy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Yu=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Jt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new os(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rs(u),c.distance=h;break;case"spot":c=new Ao(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Zu=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ku=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(r)}},Ju=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},ju=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Qu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,pt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},th=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],Jt),Promise.all(r)}},nh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},ih=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],Jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,pt)),Promise.all(r)}},sh=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},rh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},oh=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ah=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},lh=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ch=class{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},uh=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let _=new $e,m=new P,d=new xn,E=new P(1,1,1),S=new mo(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,M),l.SCALE&&E.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,_.compose(m,d,E));for(let M in l)if(M==="_COLOR_0"){let L=l[M];S.instanceColor=new rs(L.array,L.itemSize,L.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);wt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},hp="glTF",Yo=12,ap={JSON:1313821514,BIN:5130562},hh=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Yo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Yo,r=new DataView(e,Yo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ap.JSON){let c=new Uint8Array(e,Yo+o,a);this.content=n.decode(c)}else if(l===ap.BIN){let c=Yo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},fh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=gh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=gh[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],p=Ir[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(p)},a,c,Jt,f)})})}},dh=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ph=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},$l=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,_=g-c,m=-2*p+3*f,d=p-f,E=1-m,S=d-f+h;for(let M=0;M!==a;M++){let L=o[_+M+a],T=o[_+M+l]*u,I=o[g+M+a],U=o[g+M]*u;r[M]=E*L+S*T+m*I+d*U}return r}},hy=new xn,mh=class extends $l{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return hy.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lp={9728:Nt,9729:Ot,9984:cl,9985:Sr,9986:Is,9987:ii},cp={33071:oi,33648:pr,10497:Qn},Wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fy={CUBICSPLINE:void 0,LINEAR:Es,STEP:Ss},Xu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Tn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wn})),i.DefaultMaterial}function Hs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function py(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function my(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gy(i){let e,t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qu(t.attributes):e=i.indices+":"+qu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+qu(i.targets[n]);return e}function qu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function _h(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _y(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var xy=new $e,xh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new wo(this.options.manager):this.textureLoader=new Po(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Hs(r,a,s),Xi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Vi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Wu[s.type],a=Ir[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Mt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Wu[s.type],c=Ir[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(p&&p!==h){let d=Math.floor(f/p),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,S=t.cache.get(E);S||(_=new c(a,d*p,s.count*p/u),S=new ss(_,p/u),t.cache.add(E,S)),m=new hn(S,l,f%p/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new Mt(_,l,g);if(s.sparse!==void 0){let d=Wu.SCALAR,E=Ir[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,L=new E(o[1],S,s.sparse.count*d),T=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,U=L.length;I<U;I++){let v=L[I];if(m.setX(v,T[I*l]),l>=2&&m.setY(v,T[I*l+1]),l>=3&&m.setZ(v,T[I*l+2]),l>=4&&m.setW(v,T[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=lp[f.magFilter]||Ot,u.minFilter=lp[f.minFilter]||ii,u.wrapS=cp[f.wrapS]||Qn,u.wrapT=cp[f.wrapT]||Qn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Nt&&u.minFilter!==Ot,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Bt(_);m.needsUpdate=!0,f(m)}),t.load(Vi.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Xi(h,o),h.userData.mimeType=o.mimeType||_y(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new yr,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bi,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Tn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let h=s[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Jt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,pt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=It);let u=r.alphaMode||Xu.OPAQUE;if(u===Xu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Xu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Qt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Qt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Qt){let h=r.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],Jt)}return r.emissiveTexture!==void 0&&o!==Qt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Xi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Hs(s,h,r),h})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return up(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=gy(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=up(new Ct,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?dy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let _=u[p],m=o[p],d,E=c[p];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new ho(_,E):new je(_,E),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Hn.TRIANGLE_STRIP?d.geometry=Gu(d.geometry,Go):m.mode===Hn.TRIANGLE_FAN&&(d.geometry=Gu(d.geometry,wr));else if(m.mode===Hn.LINES)d=new go(_,E);else if(m.mode===Hn.LINE_STRIP)d=new ui(_,E);else if(m.mode===Hn.LINE_LOOP)d=new _o(_,E);else if(m.mode===Hn.POINTS)d=new xo(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&my(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Xi(d,r),m.extensions&&Hs(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Hs(s,h[0],r),h[0];let f=new qt;r.extensions&&Hs(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Ds.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new $e;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new po(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],_=h[3],m=h[4],d=[];for(let E=0,S=f.length;E<S;E++){let M=f[E],L=p[E],T=g[E],I=_[E],U=m[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let v=n._createAnimationTracks(M,L,T,I,U);if(v)for(let y=0;y<v.length;y++)d.push(v[y])}return new Eo(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,xy)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new xr:c.length>1?u=new qt:c.length===1?u=c[0]:u=new wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Xi(u,r),r.extensions&&Hs(n,u,r),r.matrix!==void 0){let h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new qt;n.name&&(r.name=s.createUniqueName(n.name)),Xi(r,n),n.extensions&&Hs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof vn||f instanceof Bt)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];hs[r.path]===hs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(hs[r.path]){case hs.weights:c=fi;break;case hs.rotation:c=di;break;case hs.position:case hs.scale:c=pi;break;default:switch(n.itemSize){case 1:c=fi;break;case 2:case 3:default:c=pi;break}break}let u=s.interpolation!==void 0?fy[s.interpolation]:Es,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+hs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=_h(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof di?mh:$l;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vy(i,e,t){let n=e.attributes,s=new Pt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let u=_h(Ir[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let _=_h(Ir[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Xt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function up(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=gh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Xi(i,e),vy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?py(i,e.targets,t):i})}var fp={type:"change"},yh={type:"start"},pp={type:"end"},Kl=new ci,dp=new un,yy=Math.cos(70*Ds.DEG2RAD),Vt=new P,Rn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6,Jl=class extends Do{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:cs.ROTATE,TWO:cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new xn,this._lastTargetPosition=new P,this._quat=new xn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new br,this._sphericalDelta=new br,this._scale=1,this._panOffset=new P,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new P,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=by.bind(this),this._onPointerDown=My.bind(this),this._onPointerUp=Sy.bind(this),this._onContextMenu=Py.bind(this),this._onMouseWheel=Ty.bind(this),this._onKeyDown=Ay.bind(this),this._onTouchStart=Ry.bind(this),this._onTouchMove=Cy.bind(this),this._onMouseDown=Ey.bind(this),this._onMouseMove=wy.bind(this),this._interceptControlDown=Iy.bind(this),this._interceptControlUp=Ly.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fp),this.update(),this.state=vt.NONE}update(e=null){let t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rn:n>Math.PI&&(n-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Vt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Kl.origin.copy(this.object.position),Kl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kl.direction))<yy?this.object.lookAt(this.target):(dp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kl.intersectPlane(dp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(fp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Vt.copy(s).sub(this.target);let r=Vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function My(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function by(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Sy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pp),this.state=vt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ey(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=vt.DOLLY;break;case ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}break;case ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(yh)}function wy(i){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ty(i){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(i.preventDefault(),this.dispatchEvent(yh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pp))}function Ay(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ry(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=vt.TOUCH_ROTATE;break;case cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=vt.TOUCH_DOLLY_PAN;break;case cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(yh)}function Cy(i){switch(this._trackPointer(i),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=vt.NONE}}function Py(i){this.enabled!==!1&&i.preventDefault()}function Iy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ly(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var jl=class extends zn{constructor(){super();let e=new is;e.deleteAttribute("uv");let t=new Tn({side:en}),n=new Tn,s=new Rs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new je(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new je(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new je(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new je(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new je(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new je(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new je(e,Lr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let p=new je(e,Lr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new je(e,Lr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new je(e,Lr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new je(e,Lr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let d=new je(e,Lr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Lr(i){let e=new Qt;return e.color.setScalar(i),e}var nn=Uint8Array,Un=Uint16Array,Th=Int32Array,Ah=new nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Rh=new nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),mp=new nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Mp=function(i,e){for(var t=new Un(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Th(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},bp=Mp(Ah,2),Dy=bp.b,bh=bp.r;Dy[28]=258,bh[258]=28;var Sp=Mp(Rh,0),VE=Sp.b,gp=Sp.r,Sh=new Un(32768);for(ft=0;ft<32768;++ft)qi=(ft&43690)>>1|(ft&21845)<<1,qi=(qi&52428)>>2|(qi&13107)<<2,qi=(qi&61680)>>4|(qi&3855)<<4,Sh[ft]=((qi&65280)>>8|(qi&255)<<8)>>1;var qi,ft,Ko=function(i,e,t){for(var n=i.length,s=0,r=new Un(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new Un(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Un(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],h=o[i[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Sh[h]>>l]=c}else for(a=new Un(n),s=0;s<n;++s)i[s]&&(a[s]=Sh[o[i[s]-1]++]>>15-i[s]);return a},Vs=new nn(288);for(ft=0;ft<144;++ft)Vs[ft]=8;var ft;for(ft=144;ft<256;++ft)Vs[ft]=9;var ft;for(ft=256;ft<280;++ft)Vs[ft]=7;var ft;for(ft=280;ft<288;++ft)Vs[ft]=8;var ft,Ql=new nn(32);for(ft=0;ft<32;++ft)Ql[ft]=5;var ft,Uy=Ko(Vs,9,0);var Ny=Ko(Ql,5,0);var Ep=function(i){return(i+7)/8|0},wp=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new nn(i.subarray(e,t))};var Oy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ec=function(i,e,t){var n=new Error(e||Oy[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,ec),!t)throw n;return n};var Yi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Zo=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},Mh=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return{t:Ap,l:0};if(s==1){var o=new nn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(L,T){return L.f-T.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=s-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=r[0].s,n=1;n<s;++n)r[n].s>f&&(f=r[n].s);var p=new Un(f+1),g=Eh(t[u-1],p,0);if(g>e){var n=0,_=0,m=g-e,d=1<<m;for(r.sort(function(T,I){return p[I.s]-p[T.s]||T.f-I.f});n<s;++n){var E=r[n].s;if(p[E]>e)_+=d-(1<<g-p[E]),p[E]=e;else break}for(_>>=m;_>0;){var S=r[n].s;p[S]<e?_-=1<<e-p[S]++-1:++n}for(;n>=0&&_;--n){var M=r[n].s;p[M]==e&&(--p[M],++_)}g=e}return{t:new nn(p),l:g}},Eh=function(i,e,t){return i.s==-1?Math.max(Eh(i.l,e,t+1),Eh(i.r,e,t+1)):e[i.s]=t},_p=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new Un(++e),n=0,s=i[0],r=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[a]}return{c:t.subarray(0,n),n:e}},$o=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Tp=function(i,e,t){var n=t.length,s=Ep(e+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},xp=function(i,e,t,n,s,r,o,a,l,c,u){Yi(e,u++,t),++s[256];for(var h=Mh(s,15),f=h.t,p=h.l,g=Mh(r,15),_=g.t,m=g.l,d=_p(f),E=d.c,S=d.n,M=_p(_),L=M.c,T=M.n,I=new Un(19),U=0;U<E.length;++U)++I[E[U]&31];for(var U=0;U<L.length;++U)++I[L[U]&31];for(var v=Mh(I,7),y=v.t,D=v.l,z=19;z>4&&!y[mp[z-1]];--z);var F=c+5<<3,Z=$o(s,Vs)+$o(r,Ql)+o,te=$o(s,f)+$o(r,_)+o+14+3*z+$o(I,y)+2*I[16]+3*I[17]+7*I[18];if(l>=0&&F<=Z&&F<=te)return Tp(e,u,i.subarray(l,l+c));var j,oe,Y,re;if(Yi(e,u,1+(te<Z)),u+=2,te<Z){j=Ko(f,p,0),oe=f,Y=Ko(_,m,0),re=_;var ve=Ko(y,D,0);Yi(e,u,S-257),Yi(e,u+5,T-1),Yi(e,u+10,z-4),u+=14;for(var U=0;U<z;++U)Yi(e,u+3*U,y[mp[U]]);u+=3*z;for(var ne=[E,L],fe=0;fe<2;++fe)for(var Me=ne[fe],U=0;U<Me.length;++U){var q=Me[U]&31;Yi(e,u,ve[q]),u+=y[q],q>15&&(Yi(e,u,Me[U]>>5&127),u+=Me[U]>>12)}}else j=Uy,oe=Vs,Y=Ny,re=Ql;for(var U=0;U<a;++U){var ie=n[U];if(ie>255){var q=ie>>18&31;Zo(e,u,j[q+257]),u+=oe[q+257],q>7&&(Yi(e,u,ie>>23&31),u+=Ah[q]);var he=ie&31;Zo(e,u,Y[he]),u+=re[he],he>3&&(Zo(e,u,ie>>5&8191),u+=Rh[he])}else Zo(e,u,j[ie]),u+=oe[ie]}return Zo(e,u,j[256]),u+oe[256]},Fy=new Th([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ap=new nn(0),By=function(i,e,t,n,s,r){var o=r.z||i.length,a=new nn(n+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(n,a.length-s),c=r.l,u=(r.r||0)&7;if(e){u&&(l[0]=r.r>>3);for(var h=Fy[e-1],f=h>>13,p=h&8191,g=(1<<t)-1,_=r.p||new Un(32768),m=r.h||new Un(g+1),d=Math.ceil(t/3),E=2*d,S=function(N){return(i[N]^i[N+1]<<d^i[N+2]<<E)&g},M=new Th(25e3),L=new Un(288),T=new Un(32),I=0,U=0,v=r.i||0,y=0,D=r.w||0,z=0;v+2<o;++v){var F=S(v),Z=v&32767,te=m[F];if(_[Z]=te,m[F]=Z,D<=v){var j=o-v;if((I>7e3||y>24576)&&(j>423||!c)){u=xp(i,l,0,M,L,T,U,y,z,v-z,u),y=I=U=0,z=v;for(var oe=0;oe<286;++oe)L[oe]=0;for(var oe=0;oe<30;++oe)T[oe]=0}var Y=2,re=0,ve=p,ne=Z-te&32767;if(j>2&&F==S(v-ne))for(var fe=Math.min(f,j)-1,Me=Math.min(32767,v),q=Math.min(258,j);ne<=Me&&--ve&&Z!=te;){if(i[v+Y]==i[v+Y-ne]){for(var ie=0;ie<q&&i[v+ie]==i[v+ie-ne];++ie);if(ie>Y){if(Y=ie,re=ne,ie>fe)break;for(var he=Math.min(ne,ie-2),le=0,oe=0;oe<he;++oe){var pe=v-ne+oe&32767,we=_[pe],Oe=pe-we&32767;Oe>le&&(le=Oe,te=pe)}}}Z=te,te=_[Z],ne+=Z-te&32767}if(re){M[y++]=268435456|bh[Y]<<18|gp[re];var lt=bh[Y]&31,Ye=gp[re]&31;U+=Ah[lt]+Rh[Ye],++L[257+lt],++T[Ye],D=v+Y,++I}else M[y++]=i[v],++L[i[v]]}}for(v=Math.max(v,D);v<o;++v)M[y++]=i[v],++L[i[v]];u=xp(i,l,c,M,L,T,U,y,z,v-z,u),c||(r.r=u&7|l[u/8|0]<<3,u-=7,r.h=m,r.p=_,r.i=v,r.w=D)}else{for(var v=r.w||0;v<o+c;v+=65535){var tt=v+65535;tt>=o&&(l[u/8|0]=c,tt=o),u=Tp(l,u+1,i.subarray(v,tt))}r.i=o}return wp(a,0,n+Ep(u)+s)},zy=function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i}(),ky=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=zy[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}};var Hy=function(i,e,t,n,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new nn(r.length+i.length);o.set(r),o.set(i,r.length),i=o,s.w=r.length}return By(i,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,s)},Rp=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t};var tn=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};function Vy(i,e){return Hy(i,e||{},0,0)}var Cp=function(i,e,t,n){for(var s in i){var r=i[s],o=e+s,a=n;Array.isArray(r)&&(a=Rp(n,r[1]),r=r[0]),r instanceof nn?t[o]=[r,a]:(t[o+="/"]=[new nn(0),a],Cp(r,o,t,n))}},vp=typeof TextEncoder<"u"&&new TextEncoder,Gy=typeof TextDecoder<"u"&&new TextDecoder,Wy=0;try{Gy.decode(Ap,{stream:!0}),Wy=1}catch{}function Jo(i,e){if(e){for(var t=new nn(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(vp)return vp.encode(i);for(var s=i.length,r=new nn(i.length+(i.length>>1)),o=0,a=function(u){r[o++]=u},n=0;n<s;++n){if(o+5>r.length){var l=new nn(o+8+(s-n<<1));l.set(r),r=l}var c=i.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|i.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return wp(r,0,o)}var wh=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&ec(9),e+=n+4}return e},yp=function(i,e,t,n,s,r,o,a){var l=n.length,c=t.extra,u=a&&a.length,h=wh(c);tn(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r<0&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&ec(10),tn(i,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,r!=-1&&(tn(i,e,t.crc),tn(i,e+4,r<0?-r-2:r),tn(i,e+8,t.size)),tn(i,e+12,l),tn(i,e+14,h),e+=16,o!=null&&(tn(i,e,u),tn(i,e+6,t.attrs),tn(i,e+10,o),e+=14),i.set(n,e),e+=l,h)for(var g in c){var _=c[g],m=_.length;tn(i,e,+g),tn(i,e+2,m),i.set(_,e+4),e+=4+m}return u&&(i.set(a,e),e+=u),e},Xy=function(i,e,t,n,s){tn(i,e,101010256),tn(i,e+8,t),tn(i,e+10,t),tn(i,e+12,n),tn(i,e+16,s)};function Pp(i,e){e||(e={});var t={},n=[];Cp(i,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=Jo(o),f=h.length,p=c.comment,g=p&&Jo(p),_=g&&g.length,m=wh(c.extra);f>65535&&ec(11);var d=u?Vy(l,c):l,E=d.length,S=ky();S.p(l),n.push(Rp(c,{size:l.length,crc:S.d(),c:d,f:h,m:g,u:f!=o.length||g&&p.length!=_,o:s,compression:u})),s+=30+f+m+E,r+=76+2*(f+m)+(_||0)+E}for(var M=new nn(r+22),L=s,T=r-s,I=0;I<n.length;++I){var h=n[I];yp(M,h.o,h,h.f,h.u,h.c.length);var U=30+h.f.length+wh(h.extra);M.set(h.c,h.o+U),yp(M,s,h,h.f,h.u,h.c.length,h.o,h.m),s+=16+U+(h.m?h.m.length:0)}return Xy(M,s,n.length,T,L),M}var nc=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,n,s){this.parseAsync(e,s).then(t).catch(n)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},t);let n={},s="model.usda";n[s]=null;let r=Dp();r+=Yy(t);let o={},a={};e.traverseVisible(c=>{if(c.isMesh){let u=c.geometry,h=c.material;if(h.isMeshStandardMaterial){let f="geometries/Geometry_"+u.id+".usda";if(!(f in n)){let p=Jy(u);n[f]=$y(p)}h.uuid in o||(o[h.uuid]=h),r+=Ky(c,u,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(r+=oM(c))}),r+=Zy(),r+=iM(o,a,t.quickLookCompatible),n[s]=Jo(r),r=null;for(let c in a){let u=a[c];if(u.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");u=await this.textureUtils.decompress(u)}let h=qy(u.image,u.flipY,t.maxTextureSize),f=await new Promise(p=>h.toBlob(p,"image/png",1));n[`textures/Texture_${c}.png`]=new Uint8Array(await f.arrayBuffer())}let l=0;for(let c in n){let u=n[c],h=34+c.length;l+=h;let f=l&63;if(f!==4){let p=64-f,g=new Uint8Array(p);n[c]=[u,{extra:{12345:g}}]}l=u.length}return Pp(n,{level:0})}};function qy(i,e,t){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){let n=t/Math.max(i.width,i.height),s=document.createElement("canvas");s.width=i.width*Math.min(1,n),s.height=i.height*Math.min(1,n);let r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(i,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var pn=7;function Dp(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function Yy(i){return`def Xform "Root"
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
`}function Zy(){return`
		}
	}
}

`}function $y(i){let e=Dp();return e+=i,Jo(e)}function Ky(i,e,t){let n="Object_"+i.id,s=Up(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${s}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function Up(i){let e=i.elements;return`( ${tc(e,0)}, ${tc(e,4)}, ${tc(e,8)}, ${tc(e,12)} )`}function tc(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function Jy(i){return`
def "Geometry"
{
${jy(i)}
}
`}function jy(i){let e="Geometry",t=i.attributes,n=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${Qy(i)}]
		int[] faceVertexIndices = [${eM(i)}]
		normal3f[] normals = [${Ch(t.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${Ch(t.position,n)}]
${nM(t)}
		uniform token subdivisionScheme = "none"
	}
`}function Qy(i){let e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function eM(i){let e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)t.push(s)}return t.join(", ")}function Ch(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),o=i.getZ(n);t.push(`(${s.toPrecision(pn)}, ${r.toPrecision(pn)}, ${o.toPrecision(pn)})`)}return t.join(", ")}function tM(i){let e=[];for(let t=0;t<i.count;t++){let n=i.getX(t),s=i.getY(t);e.push(`(${n.toPrecision(pn)}, ${1-s.toPrecision(pn)})`)}return e.join(", ")}function nM(i){let e="";for(let n=0;n<4;n++){let s=n>0?n:"",r=i["uv"+s];r!==void 0&&(e+=`
		texCoord2f[] primvars:st${s} = [${tM(r)}] (
			interpolation = "vertex"
		)`)}let t=i.color;if(t!==void 0){let n=t.count;e+=`
	color3f[] primvars:displayColor = [${Ch(t,n)}] (
		interpolation = "vertex"
		)`}return e}function iM(i,e,t=!1){let n=[];for(let s in i){let r=i[s];n.push(sM(r,e,t))}return`def "Materials"
{
${n.join("")}
}

`}function sM(i,e,t=!1){let n="			",s=[],r=[];function o(a,l,c){let u=a.source.id+"_"+a.flipY;e[u]=a;let h=a.channel>0?"st"+a.channel:"st",f={1e3:"repeat",1001:"clamp",1002:"mirror"},p=a.repeat.clone(),g=a.offset.clone(),_=a.rotation,m=Math.sin(_),d=Math.cos(_);return g.y=1-g.y-p.y,t?(g.x=g.x/p.x,g.y=g.y/p.y,g.x+=m/p.x,g.y+=d-1):(g.x+=m*p.x,g.y+=(1-d)*p.y),`
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
			float inputs:rotation = ${(_*(180/Math.PI)).toFixed(pn)}
			float2 inputs:scale = ${Lp(p)}
			float2 inputs:translation = ${Lp(g)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+rM(c):""}
			token inputs:sourceColorSpace = "${a.colorSpace===si?"raw":"sRGB"}"
			token inputs:wrapS = "${f[a.wrapS]}"
			token inputs:wrapT = "${f[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${i.transparent||i.alphaTest>0?"float outputs:a":""}
		}`}return i.side===It&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i),i.map!==null?(s.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),s.push(`${n}float inputs:opacityThreshold = ${i.alphaTest}`)),r.push(o(i.map,"diffuse",i.color))):s.push(`${n}color3f inputs:diffuseColor = ${Ip(i.color)}`),i.emissiveMap!==null?(s.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`),r.push(o(i.emissiveMap,"emissive",new Ie(i.emissive.r*i.emissiveIntensity,i.emissive.g*i.emissiveIntensity,i.emissive.b*i.emissiveIntensity)))):i.emissive.getHex()>0&&s.push(`${n}color3f inputs:emissiveColor = ${Ip(i.emissive)}`),i.normalMap!==null&&(s.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),r.push(o(i.normalMap,"normal"))),i.aoMap!==null&&(s.push(`${n}float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`),r.push(o(i.aoMap,"occlusion",new Ie(i.aoMapIntensity,i.aoMapIntensity,i.aoMapIntensity)))),i.roughnessMap!==null?(s.push(`${n}float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`),r.push(o(i.roughnessMap,"roughness",new Ie(i.roughness,i.roughness,i.roughness)))):s.push(`${n}float inputs:roughness = ${i.roughness}`),i.metalnessMap!==null?(s.push(`${n}float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`),r.push(o(i.metalnessMap,"metallic",new Ie(i.metalness,i.metalness,i.metalness)))):s.push(`${n}float inputs:metallic = ${i.metalness}`),i.alphaMap!==null?(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),s.push(`${n}float inputs:opacityThreshold = 0.0001`),r.push(o(i.alphaMap,"opacity"))):s.push(`${n}float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial&&(i.clearcoatMap!==null?(s.push(`${n}float inputs:clearcoat.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatMap.id}_clearcoat.outputs:r>`),r.push(o(i.clearcoatMap,"clearcoat",new Ie(i.clearcoat,i.clearcoat,i.clearcoat)))):s.push(`${n}float inputs:clearcoat = ${i.clearcoat}`),i.clearcoatRoughnessMap!==null?(s.push(`${n}float inputs:clearcoatRoughness.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),r.push(o(i.clearcoatRoughnessMap,"clearcoatRoughness",new Ie(i.clearcoatRoughness,i.clearcoatRoughness,i.clearcoatRoughness)))):s.push(`${n}float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`),s.push(`${n}float inputs:ior = ${i.ior}`)),`
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
`}function Ip(i){return`(${i.r}, ${i.g}, ${i.b})`}function rM(i){return`(${i.r}, ${i.g}, ${i.b}, 1.0)`}function Lp(i){return`(${i.x}, ${i.y})`}function oM(i){let e=i.name?i.name:"Camera_"+i.id,t=Up(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),i.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(pn)}, ${i.far.toPrecision(pn)})
			float horizontalAperture = ${((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(pn)}
			float verticalAperture = ${((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(pn)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(pn)}, ${i.far.toPrecision(pn)})
			float focalLength = ${i.getFocalLength().toPrecision(pn)}
			float focusDistance = ${i.focus.toPrecision(pn)}
			float horizontalAperture = ${i.getFilmWidth().toPrecision(pn)}
			token projection = "perspective"
			float verticalAperture = ${i.getFilmHeight().toPrecision(pn)}
		}
	
	`}var Op="blueprints.materialMode",ic="solid",jo="realistic",aM={podlaha:[230,115,20],eps:[70,230,25],zdivo:[225,70,40],omitka:[255,225,120],nabytek:[255,150,0],pozednice:[200,85,10],koruna:[200,85,10],predstena:[0,195,245],pouzdro:[235,185,80],sdk:[230,230,235],krov:[200,85,10],vata:[0,210,155],soffit:[35,175,15],podhled:[15,85,245],krytina:[235,15,15],sklo:[140,210,255]},lM={podlaha:0,eps:1,zdivo:2,omitka:3,pouzdro:4,sdk:4,predstena:5,nabytek:6,soffit:7,pozednice:8,koruna:9,vata:10,krov:11,krytina:12,podhled:13,sklo:14},cM=[{id:"walls",label:"Walls",children:["zdivo","eps","omitka","predstena","pouzdro"]},{id:"roof",label:"Roof",children:["pozednice","koruna","krov","vata","soffit","podhled","krytina"]},{id:"interior",label:"Interior",children:["podlaha","nabytek"]}];function Fp(i){let e=new Set(i);function t(s){let r=[];for(let o of s){if(typeof o=="string"){if(!e.has(o))continue;e.delete(o),r.push({type:"leaf",id:o,label:o});continue}let a=t(o.children||[]);a.length&&r.push({type:"group",id:o.id,label:o.label,children:a})}return r}let n=t(cM);if(e.size){let s=[...e].sort((r,o)=>r.localeCompare(o)).map(r=>({type:"leaf",id:r,label:r}));n.push({type:"group",id:"other",label:"Other",children:s})}return n}function Ih(i){if(i.type==="leaf")return[i.id];let e=[];for(let t of i.children)e.push(...Ih(t));return e}function Qo(i,e){let t=Math.max(0,Math.min(1,Number(e)||0));for(let n of i){if(!n)continue;if(t<=0){n.visible=!1;continue}if(n.visible=!0,!n.isMesh)continue;let s=Array.isArray(n.material)?n.material:[n.material];for(let r of s)r&&(t<1?(r.transparent=!0,r.opacity=t,r.depthWrite=!1,r.depthTest=!0,r.side=It,r.forceSinglePass=!0,r.userData.needsDepthPeel=!0):(r.transparent=!1,r.opacity=1,r.depthWrite=!0,r.depthTest=!0,r.side=It,r.forceSinglePass=!1,r.blending=Bn,r.userData.needsDepthPeel=!1),r.needsUpdate=!0);typeof n.userData.opaqueRenderOrder!="number"&&(n.userData.opaqueRenderOrder=n.renderOrder||0),n.renderOrder=t<1?0:n.userData.opaqueRenderOrder}}var uM={podlaha:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},zdivo:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},omitka:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},nabytek:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},pozednice:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},koruna:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},predstena:{color:[0,195,245],roughness:.84,metalness:0,map:"plaster"},pouzdro:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},sdk:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},krov:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},vata:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit:{color:[35,175,15],roughness:.72,metalness:0,map:"plaster"},podhled:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},krytina:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},sklo:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"}},Ph=new Map;function hM(i){if(!i||i==="none")return null;let e=Ph.get(i);if(e)return e;let t=128,n=document.createElement("canvas");n.width=t,n.height=t;let s=n.getContext("2d");if(!s)return null;if(i==="wood"){s.fillStyle="#c49858",s.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;s.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,s.lineWidth=1.2,s.beginPath(),s.moveTo(0,o+a*.15),s.lineTo(t,o-a*.1),s.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;s.fillStyle="rgba(70, 40, 15, 0.22)",s.fillRect(a,l,2,7+o%5)}}else if(i==="foam"){s.fillStyle="#9ed468",s.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;s.beginPath(),s.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),s.fillStyle="rgba(255,255,255,0.55)",s.fill(),s.strokeStyle="rgba(40,90,30,0.35)",s.stroke()}}else if(i==="plaster"){let o=s.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}s.putImageData(o,0,0)}else if(i==="wool"){s.fillStyle="#88c860",s.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;s.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",s.fillRect(a,l,1+o%2,2+o%3)}}else if(i==="metal"){let o=s.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),s.fillStyle=o,s.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)s.fillStyle="rgba(255,255,255,0.22)",s.fillRect(0,a,t,2),s.fillStyle="rgba(0,0,0,0.28)",s.fillRect(0,a+4,t,2)}else if(i==="masonry"){s.fillStyle="#b88868",s.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;s.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,s.fillRect(h+1,f+1,a-2,o-2),s.strokeStyle="rgba(70,45,30,0.55)",s.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let r=new Ts(n);return r.colorSpace=pt,r.wrapS=Qn,r.wrapT=Qn,r.repeat.set(2.5,2.5),r.needsUpdate=!0,Ph.set(i,r),r}function Np(i){return new Ie(i[0]/255,i[1]/255,i[2]/255)}function fM(i){return aM[i]||[160,160,160]}function dM(i,e,t=0){i.side=It,t>0?(i.polygonOffset=!0,i.polygonOffsetFactor=-t,i.polygonOffsetUnits=-t*2):(i.polygonOffset=!1,i.polygonOffsetFactor=0,i.polygonOffsetUnits=0),e?(i.clippingPlanes=e,i.clipIntersection=!1):i.clippingPlanes=[],i.needsUpdate=!0}function Bp(i){i.computeBoundingBox();let e=i.boundingBox,t=new P;e.getSize(t);let n=Math.max(t.x,1e-6),s=Math.max(t.y,1e-6),r=Math.max(t.z,1e-6),o=Math.max(n,s,r);i.getAttribute("normal")||i.computeVertexNormals();let a=i.getAttribute("position"),l=i.getAttribute("normal");if(!a)return o;let c=i.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new P;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let p=Math.abs(l.getX(f)),g=Math.abs(l.getY(f)),_=Math.abs(l.getZ(f)),m,d;g>=p&&g>=_?(m=(h.x-e.min.x)/n,d=(h.z-e.min.z)/r):p>=_?(m=(h.z-e.min.z)/r,d=(h.y-e.min.y)/s):(m=(h.x-e.min.x)/n,d=(h.y-e.min.y)/s),u[f*2]=m,u[f*2+1]=d}return i.setAttribute("uv",new Mt(u,2)),o}function pM(i,e){let t=hM(i);if(!t)return null;let n=t.clone();n.needsUpdate=!0;let s=Math.max(1.2,Math.min(12,e/400));return n.repeat.set(s,s),n}function zp(i,e,t={}){let n=t.clippingPlanes??null,s=e===jo,r=t.opacityByLabel??null;for(let[o,a]of i){let l=fM(o),c=lM[o]??0,u=1e3;if(s)for(let m of a)m.isMesh&&m.geometry&&(u=Math.max(u,Bp(m.geometry)));let h=1,f;if(s){let m=uM[o]||{color:l,roughness:.7,metalness:0,map:"none"};h=typeof m.opacity=="number"?m.opacity:1;let d=Np(m.color),E=pM(m.map||"none",u);m.clearcoat?f=new fn({color:d,map:E,roughness:m.roughness,metalness:m.metalness,clearcoat:m.clearcoat,clearcoatRoughness:m.clearcoatRoughness??.3,envMapIntensity:.85}):f=new Tn({color:d,map:E,roughness:m.roughness,metalness:m.metalness,envMapIntensity:m.metalness>.05?1.1:.55})}else f=new Qt({color:Np(l)});dM(f,n,c),f.userData.presetOpacity=h;let p=new Set;for(let m of a){if(!m.isMesh)continue;let d=m.material;if(d){let E=Array.isArray(d)?d:[d];for(let S of E)p.add(S)}m.material=f,m.userData.opaqueRenderOrder=c,m.renderOrder=c}for(let m of p)m!==f&&(m.map&&[...Ph.values()].includes(m.map)?m.map=null:m.map&&(m.map.dispose?.(),m.map=null),m.dispose?.());let g=1;r&&(r instanceof Map?g=r.has(o)?r.get(o):1:typeof r[o]=="number"&&(g=r[o]));let _=Math.max(0,Math.min(1,h*(Number(g)||0)));Qo(a,_)}}function kp(i,e){let n=(Array.isArray(i)?i:[i]).map(s=>{if(!s)return new Tn({color:13421772,roughness:.65,metalness:0,side:wn});let r=s.color?s.color.clone():new Ie(13421772),o=typeof s.roughness=="number"?s.roughness:.65,a=typeof s.metalness=="number"?s.metalness:0,l=null;s.map&&e&&(Bp(e),l=s.map.clone(),l.needsUpdate=!0);let c=new Tn({color:r,map:l,roughness:o,metalness:a,side:wn,transparent:!!s.transparent,opacity:typeof s.opacity=="number"?s.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(i)?n:n[0]}function Hp(){try{let i=localStorage.getItem(Op);if(i===jo||i===ic)return i}catch{}return ic}function Vp(i){try{localStorage.setItem(Op,i)}catch{}}var Lh=1e-5;function Dr(i,e,t,n){let s=t/(t-n);return i.clone().lerp(e,s)}function mM(i,e,t){let[n,s,r]=i,o=e.distanceToPoint(n),a=e.distanceToPoint(s),l=e.distanceToPoint(r),c=o>=-Lh,u=a>=-Lh,h=l>=-Lh,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([n,s,r]);return}if(f===0)return;let p=[n,s,r],g=[o,a,l],_=[c,u,h];if(f===1){let S=_.findIndex(Boolean),M=(S+1)%3,L=(S+2)%3,T=p[S],I=Dr(p[S],p[M],g[S],g[M]),U=Dr(p[S],p[L],g[S],g[L]);t.push([T,I,U]);return}let m=_.findIndex(S=>!S),d=(m+1)%3,E=(m+2)%3;if(_[d]){let S=p[d],M=p[E],L=Dr(p[m],p[d],g[m],g[d]),T=Dr(p[m],p[E],g[m],g[E]);t.push([S,M,L]),t.push([M,T,L])}else{let S=p[E],M=Dr(p[m],p[d],g[m],g[d]),L=Dr(p[m],p[E],g[m],g[E]);t.push([S,M,L])}}function gM(i,e){let t=i;for(let n of e){let s=[];for(let r of t)mM(r,n,s);if(t=s,t.length===0)break}return t}function _M(i,e){let t=i.getAttribute("position");if(!t)return[];let n=new P,s=[],r=i.getIndex();function o(a,l,c){s.push([n.fromBufferAttribute(t,a).applyMatrix4(e).clone(),n.fromBufferAttribute(t,l).applyMatrix4(e).clone(),n.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(r)for(let a=0;a<r.count;a+=3)o(r.getX(a),r.getX(a+1),r.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return s}function xM(i){let e=new Float32Array(i.length*9),t=0;for(let[s,r,o]of i)e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let n=new Ct;return n.setAttribute("position",new Mt(e,3)),n.computeVertexNormals(),n}function Gp(i,e){if(!i.visible||!i.geometry)return null;let t=_M(i.geometry,i.matrixWorld);if(t.length===0)return null;let n=e.length?gM(t,e):t;if(n.length===0)return null;let s=xM(n),r=kp(i.material,s),o=new je(s,r);return o.name=i.name,o}var vM=2,yM=.45,Wp=.015;function Dh(i){let e=new Pt().setFromObject(i);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:Wp};let t=new P;e.getSize(t);let n=Math.max(t.x,t.y,t.z,1e-9),s=n>vM?yM/n:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:n,scale:s,liftM:Wp}}function Xp(i,e=Dh(i)){let{cx:t,cz:n,minY:s,scale:r,liftM:o}=e;return i.position.set(-t*r,-s*r+o,-n*r),i.scale.setScalar(r),i.updateMatrixWorld(!0),e}var MM=`
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
  align-items: center;
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
#measure:not([hidden]) { min-width: auto; }

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

.part-row input.part-opacity {
  flex: 1 1 auto;
  width: 100%;
  height: 2.85rem;
  margin: 0;
  padding: 0;
  accent-color: var(--accent);
  cursor: pointer;
  touch-action: none;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
}

.part-row input.part-opacity:focus {
  outline: none;
}

.part-row input.part-opacity:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: 0.35rem;
}

.part-row input.part-opacity::-webkit-slider-runnable-track {
  height: 0.28rem;
  border-radius: 999px;
  background: var(--fill-active);
}

.part-row input.part-opacity::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.55rem;
  height: 1.55rem;
  margin-top: calc((0.28rem - 1.55rem) / 2);
  border-radius: 50%;
  border: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.28);
  /* Invisible padding enlarges the grab target beyond the visible knob. */
  cursor: pointer;
}

.part-row input.part-opacity::-moz-range-track {
  height: 0.28rem;
  border-radius: 999px;
  background: var(--fill-active);
  border: 0;
}

.part-row input.part-opacity::-moz-range-thumb {
  width: 1.55rem;
  height: 1.55rem;
  border-radius: 50%;
  border: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.28);
  cursor: pointer;
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
`,qp=!1;function bM(){if(qp)return;qp=!0;let i=document.createElement("style");i.id="bp-viewer-chrome",i.textContent=MM,document.head.appendChild(i)}function Yp(i){bM();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),n=document.getElementById("sheet-scroll"),s=window.matchMedia("(min-width: 768px)"),r=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return s.matches}function c(){return a}function u(){for(let W of o)W(a)}function h(W){o.push(W),W(a)}function f(){if(!e||!n)return;let W=document.getElementById("section-view"),w=document.getElementById("section-cuts"),x=t?.offsetHeight||22,A=16,k=0;if(W&&(k+=W.offsetHeight),w){let De=w.querySelector(".sheet-title"),ue=w.querySelector(".cut-row");k+=32,De&&(k+=De.offsetHeight+8),ue?k+=ue.offsetHeight:k+=w.offsetHeight}let R=x+k+A,B=window.innerHeight||640,ce=Math.round(B*.28),K=Math.round(B*.45),se=Math.max(ce,Math.min(K,Math.round(R)));return e.style.setProperty("--sheet-partial-h",`${se}px`),se}function p(){f(),!l()&&a==="partial"&&u()}function g(W){let w=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${W}`).trim(),x=parseFloat(w);return Number.isFinite(x)?x:0}function _(){let W={top:0,right:0,bottom:0,left:0};if(!e)return W;if(l()){if(a!=="open")return W;let x=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(x)),bottom:0,left:0}}if(a!=="partial")return W;let w=Math.round(q()+g("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,w)),left:0}}function m(W,w={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(W)||(W=l()?"open":"peek"),a=W,e.dataset.detent=W,e.classList.toggle("sheet-open",W!=="peek"&&W!=="closed"),document.body.classList.toggle("sheet-open",W!=="peek"&&W!=="closed"),M(),w.silent||u()}function d(){l()?m("open"):m("peek"),f()}let E=document.getElementById("top-chrome"),S=document.getElementById("sheet-toggle");if(!S&&E){let W=E.querySelector(".top-chrome-end");W||(W=document.createElement("div"),W.className="top-chrome-end",E.append(W)),S=document.createElement("button"),S.type="button",S.id="sheet-toggle",S.className="chrome-btn sheet-toggle",W.append(S)}function M(){if(!S)return;let W=a==="open";S.setAttribute("aria-expanded",W?"true":"false"),S.setAttribute("aria-label",W?"Hide controls":"Show controls"),S.title=W?"Hide controls":"Show controls",S.textContent=W?"\u203A":"\u2039"}S?.addEventListener("click",()=>{l()&&m(a==="open"?"closed":"open")});let L=!1,T=null,I=!1,U=!1,v=0,y=0,D=0,z=0,F="peek",Z=0,te=0,j=0,oe=0,Y=0,re=null,ve=12,ne=28,fe='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function Me(){return Math.max(t?.offsetHeight||34,34)+8}function q(){return f()||window.innerHeight*.38}function ie(){let W=window.innerHeight||640;return Math.min(W*.92,W-72)}function he(){return e?.offsetWidth||0}function le(W){return W instanceof Element?!!W.closest(fe):!1}function pe(){if(l()){m(a==="open"?"closed":"open");return}m(a==="peek"?"partial":a==="partial"?"full":"peek")}function we(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Oe(W,w,x){if(e){L=!0,I=!1,T=w,U=!1,F=a,v=W.clientY,y=W.clientX,Z=v,te=y,j=performance.now(),oe=0,Y=0,z=x,re=W.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${z}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(W.pointerId)}catch{}}}function lt(W){if(!(!e||!t)&&!(W.target!==t&&!t.contains(W.target)&&W.target!==e)){L=!0,I=!1,T="narrow",U=!1,F=a,e.classList.add("is-dragging"),v=W.clientY,y=W.clientX,Z=v,te=y,j=performance.now(),oe=0,Y=0,D=e.getBoundingClientRect().height,re=W.pointerId;try{t.setPointerCapture(W.pointerId)}catch{}W.preventDefault()}}function Ye(W){if(!e||W.pointerType==="mouse"&&W.button!==0||W.target instanceof Element&&W.target.closest(".chrome-btn"))return;let w=he();if(a==="closed"){let x=window.innerWidth-ne-g("r");if(W.clientX<x)return;Oe(W,"wide-open",w),W.preventDefault();return}e.contains(W.target)&&(le(W.target)||(L=!0,I=!0,T="wide-close",U=!1,F=a,v=W.clientY,y=W.clientX,Z=v,te=y,j=performance.now(),oe=0,Y=0,z=0,re=W.pointerId))}function tt(W){l()?Ye(W):lt(W)}function N(W){if(!L||!e||re!=null&&W.pointerId!==re)return;let w=performance.now(),x=Math.max(1,w-j),A=Math.hypot(W.clientX-y,W.clientY-v);if(I){if(A<=ve)return;let ce=W.clientX-y,K=W.clientY-v;if(Math.abs(ce)<Math.abs(K)*1.15||ce<=0){L=!1,I=!1,T=null,re=null;return}I=!1,U=!0,e.classList.add("is-dragging"),n&&(n.style.overflow="hidden");try{e.setPointerCapture(W.pointerId)}catch{}W.preventDefault()}if(A>ve&&(U=!0),T==="narrow"){let ce=v-W.clientY;oe=(Z-W.clientY)/x*1e3,Z=W.clientY,j=w;let K=Me(),se=ie(),De=Math.max(K,Math.min(se,D+ce));e.style.height=`${De}px`;return}let k=W.clientX-y;Y=(W.clientX-te)/x*1e3,te=W.clientX,j=w;let R=he(),B=Math.max(0,Math.min(R,z+k));e.style.transform=`translateX(${B}px)`}function bt(W,w){let x=[{name:"peek",h:Me()},{name:"partial",h:q()},{name:"full",h:ie()}],A=Math.max(0,x.findIndex(se=>se.name===F)),k=x[A].h;if(Math.abs(W-k)<36&&Math.abs(w)<1100)return F;let R=W+w*.05,B=(x[0].h+x[1].h)/2,ce=(x[1].h+x[2].h)/2,K=R<B?0:R<ce?1:2;if(K>A+1&&(K=A+1),K<A-1&&(K=A-1),K===2&&A<2){let se=ce+(x[2].h-ce)*.25;W<se&&w<1400&&(K=1)}return x[K].name}function Ze(W,w){let x=he();return x<=0||Math.abs(W-(F==="closed"?x:0))<28&&Math.abs(w)<800?F:w>900?"closed":w<-900?"open":W>x*.45?"closed":"open"}function Ge(W){if(!L||!e||re!=null&&W.pointerId!==re)return;let w=T,x=I;if(L=!1,I=!1,T=null,re=null,e.classList.remove("is-dragging"),n&&(n.style.overflow=""),x&&!U)return;if(!U){w==="narrow"?(e.style.height="",pe()):w==="wide-open"?(we(),m("open")):we();return}if(w==="narrow"){let R=e.getBoundingClientRect().height;e.style.height="",m(bt(R,oe));return}let A=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),k=A?parseFloat(A[1]):0;we(),m(Ze(k,Y))}t?.addEventListener("pointerdown",W=>{l()||tt(W)}),t?.addEventListener("pointermove",N),t?.addEventListener("pointerup",Ge),t?.addEventListener("pointercancel",Ge),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",W=>{l()&&Ye(W)},{capture:!0}),document.addEventListener("pointermove",N,{capture:!0}),document.addEventListener("pointerup",Ge,{capture:!0}),document.addEventListener("pointercancel",Ge,{capture:!0});let Le=()=>{e&&(e.style.height=""),we(),n&&(n.style.overflow=""),d()};s.addEventListener?s.addEventListener("change",Le):s.addListener(Le);function nt(){i(r.matches)}return nt(),r.addEventListener?r.addEventListener("change",nt):r.addListener(nt),window.addEventListener("resize",()=>{f(),u()}),d(),M(),{getDetent:c,getSafeInsets:_,onDetentChange:h,refreshPartialHeight:p,setDetent:m}}function Uh(i={}){let e=i.min??0,t=i.max??1,n=i.step??.001,s=ea(i.value??e,e,t),r=document.createElement("div");r.className="coop-range",r.setAttribute("role","slider"),r.tabIndex=0,i.ariaLabel&&r.setAttribute("aria-label",i.ariaLabel),r.setAttribute("aria-valuemin",String(e)),r.setAttribute("aria-valuemax",String(t));let o=document.createElement("div");o.className="coop-range-track";let a=document.createElement("div");a.className="coop-range-fill";let l=document.createElement("div");l.className="coop-range-thumb",o.append(a,l),r.append(o);let c=10,u=null,h=0,f=0,p=!1,g=!1,_=!1;function m(){let y=`${(t===e?0:(s-e)/(t-e))*100}%`;a.style.width=y,l.style.left=y,r.setAttribute("aria-valuenow",String(s));let D=i.formatAriaValue?.(s)??String(s);r.setAttribute("aria-valuetext",D)}function d(v,y="input"){let D=SM(ea(v,e,t),e,t,n);if(D===s&&y==="silent"){m();return}s=D,m(),(y==="input"||y==="change")&&i.onInput?.(s),y==="change"&&i.onChange?.(s)}function E(v){let y=o.getBoundingClientRect(),D=Math.max(y.width,1),z=ea((v-y.left)/D,0,1);return e+z*(t-e)}function S(v){if(u==null)return;let y=g;u=null,p=!1,g=!1,y&&i.onScrubEnd?.(),v&&y&&i.onChange?.(s)}function M(v){u==null&&(v.pointerType==="mouse"&&v.button!==0||(u=v.pointerId,h=v.clientX,f=v.clientY,_=!1,p=!1,g=!1))}function L(v){if(u!==v.pointerId)return;let y=v.clientX-h,D=v.clientY-f;if(!_&&Math.hypot(y,D)>c&&(_=!0),!p){if(!_)return;if(v.pointerType==="touch"&&Math.abs(D)>=Math.abs(y)){S(!1);return}p=!0,g=!0,i.onScrubStart?.();try{r.setPointerCapture(v.pointerId)}catch{}}d(E(v.clientX),"input"),v.preventDefault()}function T(v){if(u===v.pointerId){if(!_&&!g){u=null,p=!1,g=!1,i.onTap?.();return}S(!0)}}function I(v){u===v.pointerId&&S(!1)}function U(v){let y=t-e,D=n>0?n:y/100,z=y/10,F=s;switch(v.key){case"ArrowLeft":case"ArrowDown":F=s-D;break;case"ArrowRight":case"ArrowUp":F=s+D;break;case"PageDown":F=s-z;break;case"PageUp":F=s+z;break;case"Home":F=e;break;case"End":F=t;break;case"Enter":case" ":v.preventDefault(),i.onTap?.();return;default:return}v.preventDefault(),d(F,"change")}return r.addEventListener("pointerdown",M),r.addEventListener("pointermove",L),r.addEventListener("pointerup",T),r.addEventListener("pointercancel",I),r.addEventListener("keydown",U),m(),{el:r,get value(){return s},set value(v){d(v,"silent")},refresh(){m()}}}function ea(i,e,t){return Math.min(t,Math.max(e,i))}function SM(i,e,t,n){if(!(n>0))return ea(i,e,t);let s=Math.round((i-e)/n),r=Number((e+s*n).toPrecision(12));return ea(r,e,t)}var Zp=new Pt,sc=new P,Ur=class extends Co{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Lt(e,3)),this.setAttribute("uv",new Lt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new as(t,6,1);return this.setAttribute("instanceStart",new hn(n,3,0)),this.setAttribute("instanceEnd",new hn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new as(t,6,1);return this.setAttribute("instanceColorStart",new hn(n,3,0)),this.setAttribute("instanceColorEnd",new hn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new bo(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Zp.setFromBufferAttribute(t),this.boundingBox.union(Zp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xt),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sc)),sc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};ye.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ue(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};yn.line={uniforms:Wo.merge([ye.common,ye.fog,ye.line]),vertexShader:`
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
		`};var Nr=class extends zt{constructor(e){super({type:"LineMaterial",uniforms:Wo.clone(yn.line.uniforms),vertexShader:yn.line.vertexShader,fragmentShader:yn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Nh=new it,$p=new P,Kp=new P,sn=new it,rn=new it,_i=new it,Oh=new P,Fh=new $e,on=new Lo,Jp=new P,rc=new Pt,oc=new Xt,xi=new it,vi,Gs;function jp(i,e,t){return xi.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),xi.multiplyScalar(1/xi.w),xi.x=Gs/t.width,xi.y=Gs/t.height,xi.applyMatrix4(i.projectionMatrixInverse),xi.multiplyScalar(1/xi.w),Math.abs(Math.max(xi.x,xi.y))}function EM(i,e){let t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){on.start.fromBufferAttribute(s,a),on.end.fromBufferAttribute(r,a),on.applyMatrix4(t);let c=new P,u=new P;vi.distanceSqToSegment(on.start,on.end,u,c),u.distanceTo(c)<Gs*.5&&e.push({point:u,pointOnLine:c,distance:vi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function wM(i,e,t){let n=e.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;vi.at(1,_i),_i.w=1,_i.applyMatrix4(e.matrixWorldInverse),_i.applyMatrix4(n),_i.multiplyScalar(1/_i.w),_i.x*=r.x/2,_i.y*=r.y/2,_i.z=0,Oh.copy(_i),Fh.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=u;f<p;f++){if(sn.fromBufferAttribute(l,f),rn.fromBufferAttribute(c,f),sn.w=1,rn.w=1,sn.applyMatrix4(Fh),rn.applyMatrix4(Fh),sn.z>h&&rn.z>h)continue;if(sn.z>h){let S=sn.z-rn.z,M=(sn.z-h)/S;sn.lerp(rn,M)}else if(rn.z>h){let S=rn.z-sn.z,M=(rn.z-h)/S;rn.lerp(sn,M)}sn.applyMatrix4(n),rn.applyMatrix4(n),sn.multiplyScalar(1/sn.w),rn.multiplyScalar(1/rn.w),sn.x*=r.x/2,sn.y*=r.y/2,rn.x*=r.x/2,rn.y*=r.y/2,on.start.copy(sn),on.start.z=0,on.end.copy(rn),on.end.z=0;let _=on.closestPointToPointParameter(Oh,!0);on.at(_,Jp);let m=Ds.lerp(sn.z,rn.z,_),d=m>=-1&&m<=1,E=Oh.distanceTo(Jp)<Gs*.5;if(d&&E){on.start.fromBufferAttribute(l,f),on.end.fromBufferAttribute(c,f),on.start.applyMatrix4(o),on.end.applyMatrix4(o);let S=new P,M=new P;vi.distanceSqToSegment(on.start,on.end,M,S),t.push({point:M,pointOnLine:S,distance:vi.origin.distanceTo(M),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var ac=class extends je{constructor(e=new Ur,t=new Nr({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)$p.fromBufferAttribute(t,o),Kp.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+$p.distanceTo(Kp);let r=new as(s,2,1);return e.setAttribute("instanceDistanceStart",new hn(r,1,0)),e.setAttribute("instanceDistanceEnd",new hn(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;vi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Gs=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),oc.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Gs*.5;else{let h=Math.max(s.near,oc.distanceToPoint(vi.origin));c=jp(s,h,l.resolution)}if(oc.radius+=c,vi.intersectsSphere(oc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),rc.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Gs*.5;else{let h=Math.max(s.near,rc.distanceToPoint(vi.origin));u=jp(s,h,l.resolution)}rc.expandByScalar(u),vi.intersectsBox(rc)!==!1&&(n?EM(this,t):wM(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Nh),this.material.uniforms.resolution.value.set(Nh.z,Nh.w))}};var tm="blueprints.edgesEnabled",TM=20,Qp=3.5,em=0;function nm(){try{let i=localStorage.getItem(tm);if(i==="1"||i==="true")return!0;if(i==="0"||i==="false")return!1}catch{}return!1}function im(i){try{localStorage.setItem(tm,i?"1":"0")}catch{}}function yi(i){return!!(i&&i.userData&&i.userData.isEdgeOverlay)}function AM(i){let e=new yo(i,TM),t=e.getAttribute("position"),n=t&&t.array?t.array instanceof Float32Array?t.array:new Float32Array(t.array):new Float32Array(0);e.dispose();let s=new Ur;return n.length>=6&&s.setPositions(n),s}function Bh(i){if(!i)return;i.parent?.remove(i),i.geometry?.dispose?.();let e=i.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function sm(i){if(!i)return;let e=[];i.traverse(t=>{yi(t)&&e.push(t)});for(let t of e)Bh(t)}function Or(i,e){i&&i.traverse(t=>{yi(t)&&(t.visible=e)})}function rm(i,e,t){if(!i)return;let n=Math.max(1,e),s=Math.max(1,t);i.traverse(r=>{if(!yi(r)||!r.material)return;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a?.resolution&&a.resolution.set(n,s)})}function om(i,e){if(!i)return;let t=e||[];i.traverse(n=>{if(!yi(n)||!n.material)return;let s=Array.isArray(n.material)?n.material:[n.material];for(let r of s)r&&(r.clippingPlanes=t,r.clipIntersection=!1,r.needsUpdate=!0)})}function am(i,e,t={}){let n=t.clippingPlanes??[],s=t.resolution||null;for(let[r,o]of i)for(let a of o){if(!a||!a.isMesh||!a.geometry||yi(a))continue;let l=null;for(let c of a.children)if(yi(c)){l=c;break}if(!e){l&&Bh(l);continue}if(l&&!l.isLineSegments2&&(Bh(l),l=null),l){let c=l.material;c&&(c.color&&c.color.setHex(em),typeof c.linewidth=="number"&&(c.linewidth=Qp),c.clippingPlanes=n,c.clipIntersection=!1,s&&c.resolution&&c.resolution.set(s.x,s.y),c.needsUpdate=!0)}else{let c=AM(a.geometry),u=new Nr({color:em,linewidth:Qp,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:!1,clippingPlanes:n,clipIntersection:!1});u.polygonOffset=!0,u.polygonOffsetFactor=-1,u.polygonOffsetUnits=-2,s&&u.resolution.set(s.x,s.y),l=new ac(c,u),l.computeLineDistances(),l.name=`${r}__edges`,l.userData.isEdgeOverlay=!0,l.userData.edgeLabel=r,l.raycast=()=>{},l.renderOrder=1e3,a.add(l)}}}var lm=!0,cm=5,zh=12,RM=zh,um=.001,CM=.5,PM=1,ta=1e5,Mi={value:0},an={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:um},uResolution:{value:new Ue(1,1)}};function lc(i){let e=i?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Mi.value),t.tPrevViewZ&&(t.tPrevViewZ.value=an.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=an.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=an.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=an.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(an.uResolution.value)}function IM(i){if(!i||i.userData.depthPeelPatched)return;i.userData.depthPeelPatched=!0;let e=i.customProgramCacheKey?.bind(i);i.customProgramCacheKey=()=>`${e?e():i.type}|depthPeel10`;let t=i.onBeforeCompile?.bind(i);i.onBeforeCompile=(n,s)=>{t?.(n,s),n.uniforms.uPeelStage=Mi,n.uniforms.tPrevViewZ=an.tPrevViewZ,n.uniforms.tPeelViewZ=an.tPeelViewZ,n.uniforms.tOpaqueViewZ=an.tOpaqueViewZ,n.uniforms.uViewZEps=an.uViewZEps,n.uniforms.uResolution=an.uResolution,i.userData.shader=n,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(ta*.5).toFixed(1)}) discard;
			// Tolerant band: anything from prev..peel that belongs to this layer.
			float peelEps = max(uViewZEps, 1e-3 * max(peelZ, 1.0));
			if (vPeelViewZ > peelZ + peelEps) discard;
		}
	}`)},i.needsUpdate=!0}function hm(i){let e=new Ue,t=new Ie,n=null,s=null,r=null,o=null,a=null,l=null,c=new ti(-1,1,1,-1,0,1),u=new zn,h=new zt({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Ie(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new je(new hi(2,2),h);u.add(f);let p=new zt({uniforms:{tSrc:{value:null}},vertexShader:`
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
        gl_FragColor = vec4(c.rgb * c.a, c.a);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Qa,blendSrc:No,blendDst:Gi,blendSrcAlpha:No,blendDstAlpha:Gi,blendEquation:In}),g=new je(new hi(2,2),p),_=new zn;_.add(g);let m=new zt({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),d=new je(new hi(2,2),m),E=new zn;E.add(d);let S=new zt({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:It,clipping:!0,blending:Dn});function M(ne,fe,Me={}){m.uniforms.uValue.value=fe;let q=i.autoClear;i.setRenderTarget(ne),Me.clearDepth&&(i.setClearColor(0,1),i.clear(!1,!0,!1)),i.autoClear=!1,i.render(E,c),i.autoClear=q}function L(){n?.dispose(),s?.dispose(),r?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),n=null,s=null,r=null,o=null,a=null,l=null}let T=0;function I(ne,fe,Me){let q=Math.max(1,Math.floor(ne)),ie=Math.max(1,Math.floor(fe)),he=Math.min(1,Math.max(.25,Me)),le=Math.max(1,Math.floor(q*he)),pe=Math.max(1,Math.floor(ie*he));if(n&&n.width===q&&n.height===ie&&r&&r.width===le&&r.height===pe&&T===he)return;L(),T=he,n=new jt(q,ie,{format:Yt,type:kn,colorSpace:pt,depthBuffer:!0,stencilBuffer:!1});let we={format:Yt,type:An,depthBuffer:!0,stencilBuffer:!1,magFilter:Nt,minFilter:Nt};s=new jt(le,pe,we),r=new jt(le,pe,we),o=new jt(le,pe,we),a=new jt(le,pe,{format:Yt,type:Wi,colorSpace:pt,depthBuffer:!1,stencilBuffer:!1,magFilter:Ot,minFilter:Ot}),l=new jt(le,pe,{format:Yt,type:Wi,colorSpace:pt,depthBuffer:!1,stencilBuffer:!1,magFilter:Ot,minFilter:Ot}),h.uniforms.tOpaque.value=n.texture,h.uniforms.tAccum.value=a.texture,an.tOpaqueViewZ.value=s.texture,an.uResolution.value.set(le,pe)}function U(ne){let fe=[],Me=[];return ne?(ne.traverse(q=>{if(!q.isMesh||!q.visible||yi(q))return;let ie=q,he=Array.isArray(ie.material)?ie.material:[ie.material],le=!1;for(let pe of he)if(pe&&pe.transparent&&pe.opacity<1-1e-4){le=!0;break}le?Me.push(ie):fe.push(ie)}),{opaque:fe,transparent:Me}):{opaque:fe,transparent:Me}}function v(ne,fe){for(let Me of ne)Me.visible=fe}function y(ne,fe){ne.blending=fe.blending,ne.blendSrc=fe.blendSrc,ne.blendDst=fe.blendDst,ne.blendSrcAlpha=fe.blendSrcAlpha,ne.blendDstAlpha=fe.blendDstAlpha,ne.blendEquation=fe.blendEquation,ne.blendEquationAlpha=fe.blendEquation}function D(ne){let fe=new Set;for(let Me of ne){let q=Array.isArray(Me.material)?Me.material:[Me.material];for(let ie of q)ie&&fe.add(ie)}return[...fe]}function z(ne,fe,Me){if(!Me)return;let q=Me.visible,ie=ne.background,he=i.autoClear;Me.visible=!1,ne.background=null,i.autoClear=!1,i.clearDepth(),i.render(ne,fe),Me.visible=q,ne.background=ie,i.autoClear=he}let F=new Float32Array(4),Z=new zt({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Dn}),te=new je(new hi(2,2),Z),j=new zn;j.add(te);function oe(ne,fe){Z.uniforms.tSrc.value=ne.texture;let Me=i.autoClear;i.setRenderTarget(fe),i.setClearColor(0,1),i.clear(),i.autoClear=!1,i.render(j,c),i.autoClear=Me}function Y(ne,fe=4){let Me=ne.width,q=ne.height,ie=ta*.5;for(let he=0;he<fe;he++)for(let le=0;le<fe;le++){let pe=Math.min(Me-1,Math.floor((le+.5)/fe*Me)),we=Math.min(q-1,Math.floor((he+.5)/fe*q));try{i.readRenderTargetPixels(ne,pe,we,1,1,F)}catch{continue}if(Number.isFinite(F[0])&&F[0]<ie)return!0}return!1}function re(ne,fe,Me,q,ie={}){if(!(lm&&(typeof q=="function"?q():!!q)))return Mi.value=0,i.setRenderTarget(null),i.render(ne,fe),!1;let{opaque:le,transparent:pe}=U(Me);if(!pe.length)return Mi.value=0,i.setRenderTarget(null),i.render(ne,fe),!1;let we=ie.quality==="high",Oe=we?PM:CM,lt=we?zh:cm;i.getDrawingBufferSize(e),I(e.x,e.y,Oe);let Ye=i.autoClear,tt=i.toneMapping,N=ne.background;N instanceof Ie?t.copy(N):t.set(1118481),h.uniforms.uBackground.value.copy(t);let bt=[];for(let R of[...le,...pe])bt.push({mesh:R,visible:R.visible});let Ze=D(pe),Ge=[];for(let R of Ze)IM(R),Ge.push({mat:R,snap:{blending:R.blending,blendSrc:R.blendSrc,blendDst:R.blendDst,blendSrcAlpha:R.blendSrcAlpha,blendDstAlpha:R.blendDstAlpha,blendEquation:R.blendEquation,blendEquationAlpha:R.blendEquationAlpha,depthWrite:R.depthWrite,depthTest:R.depthTest,transparent:R.transparent,opacity:R.opacity,colorWrite:R.colorWrite,side:R.side,forceSinglePass:R.forceSinglePass}});let Le=new Map;for(let R of pe)Le.set(R,R.onBeforeRender),R.onBeforeRender=function(ce,K,se,De,ue,ge){let Ae=Array.isArray(ue)?ue:[ue];for(let me of Ae)me&&lc(me);let Re=Le.get(R);typeof Re=="function"&&Re.call(this,ce,K,se,De,ue,ge)};let nt=null;for(let R of Ze)if(R.clippingPlanes?.length){nt=R.clippingPlanes;break}if(!nt)for(let R of le){let B=Array.isArray(R.material)?R.material:[R.material];for(let ce of B)if(ce?.clippingPlanes?.length){nt=ce.clippingPlanes;break}if(nt)break}S.clippingPlanes=nt||[],S.clipIntersection=!1,ne.background=null,i.autoClear=!0,Mi.value=0;let W=[];for(let R of ne.children)R!==Me&&(R.isLight||(W.push({obj:R,visible:R.visible}),R.visible=!1));function w(){for(let[R,B]of Le)R.onBeforeRender=B}function x(){for(let{mat:R,snap:B}of Ge)y(R,B),R.blendEquationAlpha=B.blendEquationAlpha,R.depthWrite=B.depthWrite,R.depthTest=B.depthTest,R.transparent=B.transparent,R.opacity=B.opacity,R.colorWrite=B.colorWrite!==!1,R.side=B.side,R.forceSinglePass=B.forceSinglePass,R.needsUpdate=!0;for(let{mesh:R,visible:B}of bt)R.visible=B;for(let{obj:R,visible:B}of W)R.visible=B;return w(),Or(Me,!0),Mi.value=0,ne.background=N,ne.overrideMaterial=null,i.toneMapping=tt,i.setRenderTarget(null),i.autoClear=!0,i.render(ne,fe),i.autoClear=Ye,!1}v(pe,!1),v(le,!0),Or(Me,!0),i.setRenderTarget(n),i.setClearColor(0,0),i.clear(),i.render(ne,fe),Or(Me,!1),i.setRenderTarget(s),i.setClearColor(0,1),M(s,ta,{clearDepth:!0});{let R=new Float32Array(4);try{i.readRenderTargetPixels(s,2,2,1,1,R)}catch{R[0]=0}if(!Number.isFinite(R[0])||R[0]<ta*.5)return x()}let A=ne.overrideMaterial;ne.overrideMaterial=S,i.setRenderTarget(s),i.autoClear=!1,i.render(ne,fe),i.autoClear=!0,ne.overrideMaterial=A,an.tOpaqueViewZ.value=s.texture,i.setRenderTarget(a),i.setClearColor(0,0),i.clear(),M(o,0),an.tPrevViewZ.value=o.texture,v(le,!1),v(pe,!0),Or(Me,!1);let k=!1;for(let R=0;R<lt;R++){an.tPrevViewZ.value=o.texture,an.tPeelViewZ.value=o.texture,Mi.value=1;for(let{mat:K}of Ge)K.depthWrite=!0,K.depthTest=!0,K.colorWrite=!0,K.transparent=!0,K.forceSinglePass=!0,y(K,{blending:Dn,blendSrc:Gi,blendDst:Uo,blendSrcAlpha:Gi,blendDstAlpha:Uo,blendEquation:In}),lc(K);if(i.setRenderTarget(r),i.setClearColor(0,1),i.clear(!1,!0,!1),M(r,ta),i.setRenderTarget(r),i.autoClear=!1,i.render(ne,fe),i.autoClear=!0,an.tPeelViewZ.value=r.texture,we){Mi.value=2;for(let{mat:se}of Ge)se.depthWrite=!1,se.depthTest=!1,se.colorWrite=!0,se.transparent=!0,se.forceSinglePass=!0,y(se,{blending:Bn,blendSrc:ys,blendDst:Fi,blendSrcAlpha:Gi,blendDstAlpha:Fi,blendEquation:In}),lc(se);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.render(ne,fe);let K=Y(r,12);if(R===0&&!K)return x();K&&(k=!0),p.uniforms.tSrc.value=l.texture,i.setRenderTarget(a),i.autoClear=!1,i.render(_,c),i.autoClear=!0,oe(r,o);continue}if(!Y(r,R===0?12:4)){if(R===0)return x();break}k=!0,Mi.value=2;for(let{mat:K}of Ge)K.depthWrite=!1,K.depthTest=!1,K.colorWrite=!0,K.transparent=!0,K.forceSinglePass=!0,y(K,{blending:Bn,blendSrc:ys,blendDst:Fi,blendSrcAlpha:Gi,blendDstAlpha:Fi,blendEquation:In}),lc(K);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.render(ne,fe),p.uniforms.tSrc.value=l.texture,i.setRenderTarget(a),i.autoClear=!1,i.render(_,c),i.autoClear=!0;let ce=o;o=r,r=ce}if(!k)return x();for(let{mat:R,snap:B}of Ge)y(R,B),R.blendEquationAlpha=B.blendEquationAlpha,R.depthWrite=B.depthWrite,R.depthTest=B.depthTest,R.transparent=B.transparent,R.opacity=B.opacity,R.colorWrite=B.colorWrite!==!1,R.side=B.side,R.forceSinglePass=B.forceSinglePass,R.needsUpdate=!0;for(let{mesh:R,visible:B}of bt)R.visible=B;for(let{obj:R,visible:B}of W)R.visible=B;return w(),Or(Me,!0),Mi.value=0,ne.background=N,i.toneMapping=tt,i.setRenderTarget(null),i.autoClear=!0,i.render(u,c),z(ne,fe,Me),i.autoClear=Ye,!0}function ve(){L(),h.dispose(),f.geometry.dispose(),p.dispose(),g.geometry.dispose(),m.dispose(),d.geometry.dispose(),S.dispose(),Z.dispose(),te.geometry.dispose()}return{render:re,dispose:ve,MAX_PEELS:RM,MAX_PEELS_FAST:cm,MAX_PEELS_HIGH:zh,VIEW_Z_EPSILON:um,USE_DEPTH_PEEL:lm}}var fm=8,LM=56,dm=14,kh=11,pm=.5,DM=1e-4,cc=128,UM=.028,NM=5,OM=.995,FM=.999,mm=18,BM=22,zM=14,Hh=new Ue,gm=new Io,Vn=new P,Gn=new P,Si=new P,mn=new P,zr=new P,bi=new P,Fr=new P,Br=new P,gt=new P,_m=new P,kr=new P,kM=new un;function Vh(i){let e=Math.abs(i)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function Gh(i){return i.pointerType==="touch"}function Wh(i){return i.pointerType==="mouse"||i.pointerType==="pen"}function xm(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function Tm(i){let{scene:e,canvas:t,getCamera:n,controls:s,getRoot:r,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=i,c="idle",u=!1,h=!1,f=0,p=0,g=null,_=null,m=null,d=null,E=null,S=null,M=null,L="mouse",T=0,I=0,U=!1,v=!1,y=new qt;y.name="MeasureOverlay",y.renderOrder=10,e.add(y);let D=new qt;D.name="MeasureDimensions",e.add(D);let z=Mm(16766474),F=Mm(3458905),Z=bm(16766474,.75),te=XM(16766474);y.add(z,F,Z,te),z.visible=!1,F.visible=!1,Z.visible=!1,te.visible=!1;let j=GM(t),oe=[];function Y(){return u}function re(A){let k=!!A;if(k===u){k&&ne();return}if(u=k,u)if(s.enabled=!1,c="placeFirst",ve(),E=null,S=null,xm()){let R=Math.max(1,t.clientWidth),B=Math.max(1,t.clientHeight);Me(R*.5,B*.5,!0)}else fe();else s.enabled=!0,c="idle",ve(),E=null,S=null,M=null,v=!1,fe(),a?.(null);l?.(u),ne(),ie()}function ve(){h=!1,g=null,_=null,m=null,d=null}function ne(){c==="placeSecond"&&E&&g?a?.(Vh(E.distanceTo(g))):u&&a?.(null)}function fe(){j.hidden=!0,z.visible=!1,te.visible=!1}function Me(A,k,R=!1){f=A,p=k,h=!0;let B=lt(A,k);if(B){let ce=B.point.clone(),K=B.kind,se=B.edgeDir;if(d=null,c==="placeSecond"&&E){let De=Ye(E,S,B);De&&(ce=De.foot,K="perp",se=De.edgeDir,d=De.edgeDir.clone())}g=ce,_=K,m=se}else R?g||(_=null,m=null,d=null):(g=null,_=null,m=null,d=null);ie(),ne()}function q(A,k){let R=we(k)*NM;A.scale.setScalar(Math.max(R,1e-6))}function ie(){if(!u){fe(),F.visible=!1,Z.visible=!1,te.visible=!1;return}E?(F.visible=!0,F.position.copy(E),q(F,E)):F.visible=!1,h?(j.hidden=!1,ym(j,t,f,p,_),g?(z.visible=!0,z.position.copy(g),q(z,g),WM(z,_)):z.visible=!1):fe(),c==="placeSecond"&&E&&g?(Em(Z,E,g),Z.visible=!0):Z.visible=!1,c==="placeSecond"&&_==="perp"&&E&&g&&d?(Sm(te,E,g,d,we),te.visible=!0):te.visible=!1}function he(A){let k=t.getBoundingClientRect();return{x:A.clientX-k.left,y:A.clientY-k.top}}function le(A,k,R){return R==="touch"?{x:A,y:k-LM}:{x:A,y:k}}function pe(A){let k=o()||[];for(let R of k)if(R.distanceToPoint(A)<-DM)return!1;return!0}function we(A){let k=n(),R=Math.max(1,t.clientHeight);if(k.isOrthographicCamera)return 2*((k.top-k.bottom)/(2*Math.max(k.zoom,1e-6)))/R;let B=k.position.distanceTo(A),ce=k.fov*Math.PI/180;return 2*Math.tan(ce/2)*B/R/Math.max(k.zoom,1e-6)}function Oe(A,k){k.copy(A).project(n());let R=Math.max(1,t.clientWidth),B=Math.max(1,t.clientHeight);return k.x=(k.x*.5+.5)*R,k.y=(-k.y*.5+.5)*B,k}function lt(A,k){let R=r();if(!R)return null;let B=t.getBoundingClientRect();Hh.x=A/Math.max(1,B.width)*2-1,Hh.y=-(k/Math.max(1,B.height))*2+1,gm.setFromCamera(Hh,n());let ce=gm.intersectObject(R,!0),K=null;for(let Fe of ce)if(Fe.object.visible&&pe(Fe.point)){K=Fe;break}if(!K)return null;let se=K.object,De=se.geometry;if(!De?.getAttribute("position"))return{point:K.point.clone(),kind:"face",edgeDir:null,mesh:se,triVerts:null,faceNormal:null};se.updateWorldMatrix(!0,!1);let ue=we(K.point),ge=ue*dm,Ae=ue*kh,Re=De.getAttribute("position"),me=De.getIndex(),He=K.faceIndex,_e=[];if(K.face)Vn.fromBufferAttribute(Re,K.face.a).applyMatrix4(se.matrixWorld),Gn.fromBufferAttribute(Re,K.face.b).applyMatrix4(se.matrixWorld),Si.fromBufferAttribute(Re,K.face.c).applyMatrix4(se.matrixWorld),_e.push(Vn.clone(),Gn.clone(),Si.clone());else if(typeof He=="number"){let Fe,Et,Gt;me?(Fe=me.getX(He*3),Et=me.getX(He*3+1),Gt=me.getX(He*3+2)):(Fe=He*3,Et=He*3+1,Gt=He*3+2),Vn.fromBufferAttribute(Re,Fe).applyMatrix4(se.matrixWorld),Gn.fromBufferAttribute(Re,Et).applyMatrix4(se.matrixWorld),Si.fromBufferAttribute(Re,Gt).applyMatrix4(se.matrixWorld),_e.push(Vn.clone(),Gn.clone(),Si.clone())}let Ve=null;_e.length===3&&(Ve=new P().subVectors(_e[1],_e[0]).cross(mn.subVectors(_e[2],_e[0])).normalize(),Ve.lengthSq()<1e-12&&(Ve=null));let O=A,xe=k,ee=null;function ae(Fe){if(!pe(Fe)||Fe.distanceToSquared(K.point)>ge*ge*4)return;Oe(Fe,Br);let Et=Math.hypot(Br.x-O,Br.y-xe);Et>dm||(!ee||Et<ee.distPx)&&(ee={point:Fe.clone(),distPx:Et})}for(let Fe of _e)ae(Fe);let Ee=ge*ge*4,be=Re.count,We=be>8e3?2:1;for(let Fe=0;Fe<be;Fe+=We)mn.fromBufferAttribute(Re,Fe).applyMatrix4(se.matrixWorld),!(mn.distanceToSquared(K.point)>Ee)&&ae(mn);if(ee)return{point:ee.point,kind:"vertex",edgeDir:null,mesh:se,triVerts:_e.length?_e:null,faceNormal:Ve};let ht=null;function Tt(Fe,Et){gt.copy(Et).sub(Fe);let Gt=gt.lengthSq();if(Gt<1e-18)return;let Ei=mn.copy(K.point).sub(Fe).dot(gt)/Gt;if(Ei=Math.min(1,Math.max(0,Ei)),zr.copy(Fe).addScaledVector(gt,Ei),!pe(zr)||zr.distanceToSquared(K.point)>Ae*Ae*4)return;Oe(zr,Br);let wi=Math.hypot(Br.x-O,Br.y-xe);if(wi>kh)return;Oe(Fe,bi),Oe(Et,Fr);let gn=Fr.x-bi.x,Wn=Fr.y-bi.y,fs=gn*gn+Wn*Wn;if(fs>1e-6){let Nn=((O-bi.x)*gn+(xe-bi.y)*Wn)/fs;Nn=Math.min(1,Math.max(0,Nn));let Zi=bi.x+gn*Nn,Ws=bi.y+Wn*Nn;if(Math.hypot(O-Zi,xe-Ws)>kh)return}(!ht||wi<ht.distPx)&&(ht={point:zr.clone(),distPx:wi,dir:gt.clone().normalize()})}return _e.length===3&&(Tt(_e[0],_e[1]),Tt(_e[1],_e[2]),Tt(_e[2],_e[0])),ht?{point:ht.point,kind:"edge",edgeDir:ht.dir,mesh:se,triVerts:_e.length?_e:null,faceNormal:Ve}:{point:K.point.clone(),kind:"face",edgeDir:null,mesh:se,triVerts:_e.length?_e:null,faceNormal:Ve}}function Ye(A,k,R){if(!R.mesh||!R.triVerts||R.triVerts.length!==3||!R.faceNormal||R.faceNormal.lengthSq()<1e-12)return null;let B=we(A),ce=B*zM,K=Math.max(B*2,1e-5);if(Math.abs(uc(A,R.triVerts[0],R.faceNormal))>K)return null;let se=tt(R.mesh,R.triVerts[0],R.faceNormal,K);if(!se.length)return null;let De=[];for(let Ae of se)vm(A,Ae.a,Ae.b)<=ce&&De.push(Ae.dir.clone());if(k&&k.lengthSq()>1e-12&&De.push(k.clone().normalize()),!De.length)return null;let ue=B*mm,ge=null;for(let Ae of De)if(!(Ae.lengthSq()<1e-12)){Ae.normalize();for(let Re of se){if(Math.abs(Re.dir.dot(Ae))<OM||vm(A,Re.a,Re.b)<=ce)continue;let me=HM(A,Re.a,Re.b);if(!pe(me)||A.distanceTo(me)*1e3<pm||(gt.copy(me).sub(A),gt.lengthSq()<1e-16)||(gt.normalize(),Math.abs(gt.dot(Ae))>.08))continue;let _e=R.point.distanceTo(me);Oe(R.point,bi),Oe(me,Fr);let Ve=Math.hypot(bi.x-Fr.x,bi.y-Fr.y);if(_e>ue*1.35&&Ve>mm)continue;let O=Ve+_e/Math.max(B,1e-9);(!ge||O<ge.score)&&(ge={foot:me.clone(),edgeDir:Ae.clone(),score:O})}}return ge?{foot:ge.foot,edgeDir:ge.edgeDir}:null}function tt(A,k,R,B){let ce=A.geometry,K=ce?.getAttribute("position");if(!K)return[];A.updateWorldMatrix(!0,!1);let se=ce.getIndex(),De=new Map,ue=Math.max(B*.25,1e-5);function ge(_e,Ve,O){kr.subVectors(Ve,_e).cross(mn.subVectors(O,_e)),!(kr.lengthSq()<1e-16)&&(kr.normalize(),!(Math.abs(kr.dot(R))<FM)&&(Math.abs(uc(_e,k,R))>B||Math.abs(uc(Ve,k,R))>B||Math.abs(uc(O,k,R))>B||(Ae(_e,Ve),Ae(Ve,O),Ae(O,_e))))}function Ae(_e,Ve){if(gt.copy(Ve).sub(_e),gt.lengthSq()<1e-16)return;let O=VM(_e,Ve,ue);De.has(O)||De.set(O,{a:_e.clone(),b:Ve.clone(),dir:gt.clone().normalize()})}let Re=se?se.count/3:K.count/3,me=12e3,He=Re>me?Math.ceil(Re/me):1;for(let _e=0;_e<Re;_e+=He){let Ve,O,xe;if(se){let ee=_e*3;Ve=se.getX(ee),O=se.getX(ee+1),xe=se.getX(ee+2)}else Ve=_e*3,O=_e*3+1,xe=_e*3+2;Vn.fromBufferAttribute(K,Ve).applyMatrix4(A.matrixWorld),Gn.fromBufferAttribute(K,O).applyMatrix4(A.matrixWorld),Si.fromBufferAttribute(K,xe).applyMatrix4(A.matrixWorld),ge(Vn,Gn,Si)}return[...De.values()]}function N(){if(g){if(c==="placeFirst"){E=g.clone(),S=m?m.clone():null,c="placeSecond",d=null,(Gh({pointerType:L})||!xm())&&(h=!1,g=null,_=null,m=null,fe()),ie(),ne();return}if(c==="placeSecond"&&E){if(E.distanceTo(g)*1e3<pm)return;bt(E,g),re(!1)}}}function bt(A,k){let R=new qt;R.name="Dimension";let B=bm(16752394,1);Em(B,A,k),B.visible=!0;let ce=A.clone().lerp(k,.5),K=A.distanceTo(k),se=qM(Vh(K));se.position.copy(ce),R.add(B,se),D.add(R),oe.push({group:R,sprite:se,mid:ce.clone(),span:K}),Ze(se,A,k,ce,K)}function Ze(A,k,R,B,ce){let K=n();if(K.getWorldDirection(_m),gt.copy(R).sub(k),gt.lengthSq()<1e-16){A.position.copy(B);return}gt.normalize(),mn.crossVectors(gt,_m),mn.lengthSq()<1e-10&&mn.copy(K.up),mn.normalize();let se=Math.max(ce*UM,we(B)*18);A.position.copy(B).addScaledVector(mn,se);let De=we(A.position)*56;A.scale.set(De*2.2,De,1)}function Ge(){F.visible&&E&&q(F,E),z.visible&&g&&q(z,g),h&&ym(j,t,f,p,_),te.visible&&E&&g&&d&&_==="perp"&&Sm(te,E,g,d,we);for(let A of oe){let R=A.group.children[0].geometry.getAttribute("position");Vn.fromBufferAttribute(R,0),Gn.fromBufferAttribute(R,1),Ze(A.sprite,Vn,Gn,A.mid,A.span)}}function Le(A){if(!u||c==="idle"||!Wh(A)||M!==null)return;let{x:k,y:R}=he(A),B=le(k,R,A.pointerType);Me(B.x,B.y,!0)}function nt(A){if(!u||c==="idle"||A.button!==void 0&&A.button!==0||M!==null)return;M=A.pointerId,L=A.pointerType||"mouse";let{x:k,y:R}=he(A);T=k,I=R,U=!1,v=!1;try{t.setPointerCapture(A.pointerId)}catch{}if(Wh(A)){let B=le(k,R,L);Me(B.x,B.y,!0)}A.preventDefault()}function W(A){if(!u)return;if(M===null){Le(A);return}if(M!==A.pointerId)return;let{x:k,y:R}=he(A);if(Math.hypot(k-T,R-I)>=fm&&(U=!0,v=!0),Gh(A)){if(!v)return;let ce=le(k,R,"touch");Me(ce.x,ce.y,!0)}else if(Wh(A)){let ce=le(k,R,L);Me(ce.x,ce.y,!0)}A.preventDefault()}function w(A){if(!u||M!==A.pointerId)return;let{x:k,y:R}=he(A);Math.hypot(k-T,R-I)>=fm&&(U=!0,v=!0),M=null;try{t.releasePointerCapture(A.pointerId)}catch{}if(Gh(A)){U?v=!1:(v=!1,h&&g&&N()),A.preventDefault();return}!U&&g&&N(),v=!1,A.preventDefault()}function x(A){M===A.pointerId&&(M=null,v=!1)}return t.addEventListener("pointerdown",nt),t.addEventListener("pointermove",W),t.addEventListener("pointerup",w),t.addEventListener("pointercancel",x),{isActive:Y,setActive:re,update:Ge,formatMm:Vh}}function uc(i,e,t){return kM.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(i)}function vm(i,e,t){gt.copy(t).sub(e);let n=gt.lengthSq();if(n<1e-18)return i.distanceTo(e);let s=mn.copy(i).sub(e).dot(gt)/n;return s=Math.min(1,Math.max(0,s)),zr.copy(e).addScaledVector(gt,s).distanceTo(i)}function HM(i,e,t){gt.copy(t).sub(e);let n=gt.lengthSq();if(n<1e-18)return e.clone();let s=mn.copy(i).sub(e).dot(gt)/n;return s=Math.min(1,Math.max(0,s)),e.clone().addScaledVector(gt,s)}function VM(i,e,t){let n=Math.round(i.x/t),s=Math.round(i.y/t),r=Math.round(i.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return n<o||n===o&&s<a||n===o&&s===a&&r<=l?`${n},${s},${r}|${o},${a},${l}`:`${o},${a},${l}|${n},${s},${r}`}function GM(i){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(i.parentElement||document.body).appendChild(e),e)}function ym(i,e,t,n,s){let r=e.getBoundingClientRect();i.style.left=`${r.left+t}px`,i.style.top=`${r.top+n}px`,i.dataset.snap=s||"none"}function Mm(i){let e=new Mo(1,16,12),t=new Qt({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),n=new je(e,t);return n.renderOrder=20,n.visible=!1,n}function WM(i,e){let t=i.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function bm(i,e){let t=new Ct,n=new Float32Array(6);t.setAttribute("position",new Mt(n,3));let s=new Bi({color:i,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),r=new ui(t,s);return r.renderOrder=19,r.frustumCulled=!1,r.visible=!1,r}function XM(i){let e=new Ct,t=new Float32Array(9);e.setAttribute("position",new Mt(t,3));let n=new Bi({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),s=new ui(e,n);return s.renderOrder=22,s.frustumCulled=!1,s.visible=!1,s}function Sm(i,e,t,n,s){let r=s(t)*BM;if(gt.copy(e).sub(t),gt.lengthSq()<1e-16){i.visible=!1;return}if(gt.normalize(),mn.copy(n).normalize(),kr.crossVectors(mn,gt),kr.lengthSq()<1e-12){i.visible=!1;return}Vn.copy(t).addScaledVector(mn,r),Gn.copy(t),Si.copy(t).addScaledVector(gt,r);let o=i.geometry.getAttribute("position");o.setXYZ(0,Vn.x,Vn.y,Vn.z),o.setXYZ(1,Gn.x,Gn.y,Gn.z),o.setXYZ(2,Si.x,Si.y,Si.z),o.needsUpdate=!0,i.geometry.computeBoundingSphere()}function Em(i,e,t){let n=i.geometry.getAttribute("position");n.setXYZ(0,e.x,e.y,e.z),n.setXYZ(1,t.x,t.y,t.z),n.needsUpdate=!0,i.geometry.computeBoundingSphere()}function qM(i){let e=document.createElement("canvas");e.width=cc*2,e.height=cc;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(cc*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(i),c=Math.ceil(l.width),u=Math.round(cc*.42),h=c+o*2,f=u+a*2,p=(e.width-h)/2,g=(e.height-f)/2,_=18;t.fillStyle="rgba(28, 28, 30, 0.78)",wm(t,p,g,h,f,_),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,wm(t,p,g,h,f,_),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(i,e.width/2,e.height/2+1)}let n=new Ts(e);n.colorSpace=pt,n.needsUpdate=!0;let s=new _r({map:n,depthTest:!1,depthWrite:!1,transparent:!0}),r=new uo(s);return r.renderOrder=21,r.center.set(.5,.5),r}function wm(i,e,t,n,s,r){let o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(e+o,t),i.arcTo(e+n,t,e+n,t+s,o),i.arcTo(e+n,t+s,e,t+s,o),i.arcTo(e,t+s,e,t,o),i.arcTo(e,t,e+n,t,o),i.closePath()}function ZM(i,e,t={}){let n=Array.isArray(t.scenes)?t.scenes:[],s=null,r=1842206,o=!0,a=Hp(),l=nm(),c=new Map,u=new Map,h=new Map,f=new Map,p=new Set,g=null;g=Yp(C=>{o=C,r=C?1842206:15263981,s&&(s.background=new Ie(r)),document.documentElement.style.colorScheme=C?"dark":"light",c.size&&Fe()});let _=new ql({canvas:i,antialias:!0,alpha:!1,logarithmicDepthBuffer:!0});_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.outputColorSpace=pt,_.toneMapping=Oo,_.toneMappingExposure=1.05,_.localClippingEnabled=!0;let m=hm(_);s=new zn,s.background=new Ie(r);let d=30,E=120,S=75,M=125,L="perspective",T=S,I=S,U=1,v=!1,y=new Ut(45,1,.01,1e6),D=new ti(-1,1,1,-1,.01,1e6),z=y,F=new Jl(z,i);F.enableDamping=!1,F.screenSpacePanning=!0;let Z=null,te=null;s.add(new Ro(16777215,.45));let j=new os(16777215,1.15);j.position.set(.6,1,.4),s.add(j);let oe=new os(16777215,.4);oe.position.set(-.5,.2,-.6),s.add(oe);let Y=new Cr(_);s.environment=Y.fromScene(new jl,.04).texture,Y.dispose();let re=null,ve=new Pt,ne=new P,fe=new P,Me=new P,q=new P,ie=new P,he=[],le=1,pe=!1,we=!1,Oe=!1;new Zl().parse(e,"",C=>{re=C.scene,s.add(re),re.traverse(G=>{if(!G.isMesh)return;let X=G.name||G.parent?.name||"part",Q=X.replace(/_\d+$/,"")||X;if(c.has(Q)||c.set(Q,[]),c.get(Q).push(G),G.material){let Te=Array.isArray(G.material)?G.material:[G.material];for(let ke of Te)"side"in ke&&(ke.side=It)}}),_e(),Et(),Gt(),fs(),Ws(),Re(),Ki(),de(),Fe(),g?.refreshPartialHeight(),Rm(),Cm()},C=>{Ye(String(C?.message||C))});function Ye(C){let G=document.getElementById("err");G&&(G.style.display="block",G.textContent=C)}function tt(){re&&(ve.setFromObject(re),ve.getSize(ne),ve.getCenter(fe))}function N(){let C=Math.max(1,i.clientWidth),G=Math.max(1,i.clientHeight);return C/G}function bt(C,G){let X=C*Math.PI/180;return 2*Math.atan(Math.tan(X/2)/Math.max(G,1e-6))}function Ze(){let C=N();y.aspect=C,y.fov=bt(T,C)*180/Math.PI,y.updateProjectionMatrix()}function Ge(C,G){let X=N(),Q=Math.max(C,1e-6)*Math.tan(G/2),Te=Q*X;D.left=-Te,D.right=Te,D.top=Q,D.bottom=-Q,D.updateProjectionMatrix()}function Le(){let C=N(),X=Math.max(D.top,1e-6)*C;D.left=-X,D.right=X,D.updateProjectionMatrix()}function nt(C,G){let X=N(),Q=Math.max(C,1e-6),ke=Math.max(G,1e-6),Be=ke*X;Be<Q&&(Be=Q,ke=Be/Math.max(X,1e-6)),U=1,D.left=-Be,D.right=Be,D.top=ke,D.bottom=-ke,D.updateProjectionMatrix(),A()}function W(C){let G=Math.max(C,1e-4),X=Me.copy(z.position).sub(F.target);X.lengthSq()<1e-12?X.set(0,0,1):X.normalize(),z.position.copy(F.target).addScaledVector(X,G)}function w(C){C!==z&&(C.position.copy(z.position),C.quaternion.copy(z.quaternion),C.up.copy(z.up),C.near=z.near,C.far=z.far,z=C,F.object=z,F.update())}function x(){let C=Math.abs(Ne)>.05||Math.abs(St)>.05||Math.abs(Ke-1)>.001?Ke:1;return U*C}function A(){z.zoom=x(),z.updateProjectionMatrix()}function k(){if(v||we||!z.isOrthographicCamera)return;let C=Math.abs(Ne)>.05||Math.abs(St)>.05||Math.abs(Ke-1)>.001?Ke:1;U=Math.max(z.zoom/Math.max(C,1e-6),1e-6)}function R(){if(L==="ortho")return;I=T;let C=z.position.distanceTo(F.target),G=bt(T,N());Ge(C,G),U=1,He(()=>{v=!0,w(D),L="ortho",A(),v=!1}),ge()}function B(C){if(L!=="ortho")return;let G=se(C??I),X=Math.max(D.top,1e-6)/Math.max(U,1e-6),Q=bt(G,N()),Te=X/Math.max(Math.tan(Q/2),1e-8);T=G,I=G,U=1,He(()=>{v=!0,w(y),L="perspective",Ze(),W(Te),A(),me(),F.update(),v=!1}),ge()}function ce(C,G={}){let X=se(C);if(L==="ortho"){B(X);return}let Q=N(),Te=bt(T,Q),ke=bt(X,Q),Be=z.position.distanceTo(F.target);T=X,I=X,He(()=>{if(Ze(),G.reframe!==!1){let Rt=Math.tan(Te/2)/Math.max(Math.tan(ke/2),1e-8);W(Be*Rt),me(),F.update()}A()}),ge()}function K(){L==="ortho"?B(I):R()}function se(C){return Math.min(E,Math.max(d,C))}function De(){return L==="ortho"?M:T}function ue(C){return C>E?"ISO":`${Math.round(C)}\xB0`}function ge(){Z&&(Z.value=De()),te&&(te.textContent=L==="ortho"?"ISO":`${Math.round(T)}\xB0`),Z?.refresh()}function Ae(C){if(C>E){L!=="ortho"?R():ge();return}let G=se(C);L==="ortho"?B(G):ce(G,{reframe:!0})}function Re(){let C=document.getElementById("fov");if(!C)return;C.replaceChildren();let G=document.createElement("div");G.className="fov-row";let X=document.createElement("span");X.className="fov-label",X.textContent="FOV",te=document.createElement("span"),te.className="fov-value",te.textContent=`${Math.round(T)}\xB0`,Z=Uh({min:d,max:M,step:1,value:De(),ariaLabel:"Field of view",formatAriaValue:ue,onInput:Be=>Ae(Be),onChange:Be=>Ae(Be),onTap:()=>K()}),Z.el.classList.add("fov-range");let Q=document.createElement("div");Q.className="fov-detent",Q.setAttribute("aria-hidden","true");let Te=(E-d)/(M-d);Q.style.left=`${Te*100}%`,Z.el.querySelector(".coop-range-track")?.append(Q),G.append(X,Z.el,te),C.append(G),ge()}function me(){let C=Math.max(ne.x,ne.y,ne.z,.01),G=z.position.distanceTo(F.target);z.near=Math.min(Math.max(G/200,C/5e3,.001),G/10),z.far=Math.max(G+C*4,C*8,10),z.updateProjectionMatrix()}function He(C){we=!0;try{C()}finally{requestAnimationFrame(()=>{we=!1})}}Ze();function _e(){re&&(He(()=>{tt(),F.target.copy(fe);let G=Math.max(ne.x,ne.y,ne.z,1)*1.85;z.position.set(fe.x+G*.75,fe.y+G*.55,fe.z+G*.75),me(),F.update()}),qs())}function Ve(C){if(re){if(y.up.set(0,1,0),D.up.set(0,1,0),z.up.set(0,1,0),C==="iso"){_e();return}He(()=>{tt();let G=Math.max(ne.x,ne.y,ne.z,1),X=G*1.85,Q=fe;C==="front"?z.position.set(Q.x,Q.y+G*.15,Q.z+X):C==="top"?z.position.set(Q.x,Q.y+X,Q.z+G*.01):C==="side"&&z.position.set(Q.x+X,Q.y+G*.15,Q.z),F.target.copy(Q),me(),F.update()}),qs()}}function O(C){if(!re||!C)return;if(C.opacityDefault!=null||C.opacity&&typeof C.opacity=="object"){let Q=C.opacityDefault!=null?Number(C.opacityDefault):1,Te=C.opacity&&typeof C.opacity=="object"?C.opacity:{};for(let ke of c.keys()){let Be=Object.prototype.hasOwnProperty.call(Te,ke)?Te[ke]:Q;xe(ke,Be,{skipUi:!0})}be()}if(Object.prototype.hasOwnProperty.call(C,"cuts")){let Q=Array.isArray(C.cuts)?C.cuts:[];he.length=0;for(let Te of Q){let ke=Te?.normal;if(!Array.isArray(ke)||ke.length<3)continue;let Be=new P(Number(ke[0])||0,Number(ke[1])||0,Number(ke[2])||0);if(Be.lengthSq()<1e-12)continue;Be.normalize();let Rt=Math.min(1,Math.max(0,Number(Te.t)||0));he.push({id:le++,normal:Be,t:Rt,locked:!0,label:Hr(Be)})}pe=!1,V(),Ki(),de(),g?.refreshPartialHeight()}C.projection==="ortho"?L!=="ortho"?R():ge():C.hFovDeg!=null&&Number.isFinite(Number(C.hFovDeg))&&ce(Number(C.hFovDeg),{reframe:!1});let X=C.camera;X&&Array.isArray(X.target)&&Array.isArray(X.position)&&He(()=>{v=!0;let Q=new P(0,1,0);Array.isArray(X.up)&&X.up.length>=3&&(Q.set(Number(X.up[0])||0,Number(X.up[1])||0,Number(X.up[2])||0),Q.lengthSq()<1e-12?Q.set(0,1,0):Q.normalize()),y.up.copy(Q),D.up.copy(Q),z.up.copy(Q),F.target.set(Number(X.target[0])||0,Number(X.target[1])||0,Number(X.target[2])||0),z.position.set(Number(X.position[0])||0,Number(X.position[1])||0,Number(X.position[2])||0),z.lookAt(F.target),L==="ortho"&&Array.isArray(X.orthoFit)&&X.orthoFit.length>=2&&nt(Number(X.orthoFit[0])||.1,Number(X.orthoFit[1])||.1),tt(),me(),F.update(),v=!1}),qs()}function xe(C,G,X={}){let Q=Math.max(0,Math.min(1,Number(G)||0));u.set(C,Q),Q>0&&h.set(C,Q),Qo(c.get(C)||[],Q),tt(),V(),X.skipUi||be()}function ee(C,G,X){let Q=Math.max(0,Math.min(1,Number(G)||0));X&&f.set(X,Q);for(let Te of C)u.set(Te,Q),Q>0&&h.set(Te,Q),Qo(c.get(Te)||[],Q);tt(),V(),be()}function ae(C){if(!C.length)return 1;let G=u.get(C[0])??1;for(let X=1;X<C.length;X++){let Q=u.get(C[X])??1;if(Math.abs(Q-G)>1e-4)return NaN}return G}function Ee(C,G){let X=ae(G);return Number.isNaN(X)?f.get(C)??1:X}function be(){let C=document.getElementById("parts");C&&(C.querySelectorAll("input.part-opacity[data-leaf]").forEach(G=>{if(!(G instanceof HTMLInputElement))return;let X=G.dataset.leaf;if(!X)return;let Q=Math.round((u.get(X)??1)*100);G.value=String(Q),G.setAttribute("aria-valuenow",String(Q))}),C.querySelectorAll("input.part-opacity[data-group]").forEach(G=>{if(!(G instanceof HTMLInputElement))return;let X=G.dataset.group;if(!X)return;let Q=(G.dataset.leaves||"").split(",").map(ke=>ke.trim()).filter(Boolean),Te=Math.round(Ee(X,Q)*100);G.value=String(Te),G.setAttribute("aria-valuenow",String(Te))}))}function We(){return he.filter(C=>C.locked).map(C=>J(C))}function ht(){let C=new Ue;return _.getDrawingBufferSize(C),{x:C.x,y:C.y}}function Tt(){if(c.size){if(!l){sm(re);return}am(c,!0,{clippingPlanes:We(),resolution:ht()})}}function Fe(){c.size&&(zp(c,a,{isDark:o,clippingPlanes:We(),opacityByLabel:u}),a===jo?(_.toneMapping=Oo,_.toneMappingExposure=1.05):(_.toneMapping=ni,_.toneMappingExposure=1),Tt())}function Et(){let C=document.getElementById("mats");if(C){C.replaceChildren();for(let[G,X]of[[ic,"Solid"],[jo,"Realistic"]]){let Q=document.createElement("button");Q.type="button",Q.dataset.mode=G,Q.textContent=X,G===a&&Q.classList.add("is-active"),Q.addEventListener("click",()=>{a=G,Vp(G),C.querySelectorAll("button").forEach(Te=>{Te.classList.toggle("is-active",Te.dataset.mode===G)}),Fe()}),C.append(Q)}}}function Gt(){let C=document.getElementById("edges");if(!C)return;C.replaceChildren();let G=document.createElement("button");G.type="button",G.dataset.edges="on",G.textContent="Edges",G.setAttribute("aria-pressed",l?"true":"false"),l&&G.classList.add("is-active"),G.addEventListener("click",()=>{l=!l,im(l),G.classList.toggle("is-active",l),G.setAttribute("aria-pressed",l?"true":"false"),Tt()}),C.append(G)}function Ei(C,G,X){let Q=!1,Te=0,ke=0,Be=0,Rt=!1,En=0,qn=6,On=Yn=>{!Q||Rt||(Math.abs(Yn.clientX-Te)>qn||Math.abs(Yn.clientY-ke)>qn)&&(Rt=!0)};C.addEventListener("pointerdown",Yn=>{Q=!0,Rt=!1,En=0,Te=Yn.clientX,ke=Yn.clientY,Be=Number(C.value)||0,window.addEventListener("pointermove",On);let Gr=Zs=>{if(window.removeEventListener("pointermove",On),!!Q){if(Zs.pointerType==="mouse"&&Zs.button!==0){Q=!1;return}if(Q=!1,Rt){X((Number(C.value)||0)/100);return}if(Be>0)X(0);else{let ut=G();X(ut>0?ut:1)}}};window.addEventListener("pointerup",Gr,{once:!0}),window.addEventListener("pointercancel",Gr,{once:!0})}),C.addEventListener("input",()=>{if(En+=1,Q&&!Rt){if(En<=1)return;Rt=!0}X((Number(C.value)||0)/100)})}function wi(C,G){let X=document.createElement("div");X.className="part-opacity-wrap";let Q=document.createElement("input");return Q.type="range",Q.className="part-opacity",Q.min="0",Q.max="100",Q.step="1",Q.value=String(Math.round(G)),Q.setAttribute("aria-label",C),Q.setAttribute("role","slider"),X.append(Q),{wrap:X,range:Q}}function gn(){let C=document.getElementById("parts");if(!C)return;C.style.removeProperty("--part-name-col");let G=0;for(let X of C.querySelectorAll(".part-name")){if(X.closest(".part-children")?.hidden)continue;let Te=X.style.width;X.style.width="max-content",G=Math.max(G,Math.ceil(X.getBoundingClientRect().width)),X.style.width=Te}G>0&&C.style.setProperty("--part-name-col",`${G}px`)}function Wn(C,G,X){if(C.type==="leaf"){let ut=document.createElement("div");ut.className="part-row part-leaf",ut.style.setProperty("--part-depth",String(X)),ut.dataset.leaf=C.id;let pc=document.createElement("span");pc.className="part-disclosure-spacer",pc.setAttribute("aria-hidden","true");let mc=document.createElement("span");mc.className="part-name",mc.textContent=C.label;let{wrap:Lm,range:jh}=wi(`${C.label} opacity`,(u.get(C.id)??1)*100);jh.dataset.leaf=C.id,Ei(jh,()=>h.get(C.id)??1,Dm=>xe(C.id,Dm)),ut.append(pc,mc,Lm),G.append(ut);return}let Q=Ih(C),Te=document.createElement("div");Te.className="part-group",Te.dataset.group=C.id;let ke=document.createElement("div");ke.className="part-row part-group-row",ke.style.setProperty("--part-depth",String(X)),ke.setAttribute("role","button"),ke.tabIndex=0;let Be=document.createElement("button");Be.type="button",Be.className="part-disclosure",Be.setAttribute("aria-label",`Expand ${C.label}`),Be.setAttribute("aria-expanded","false");let Rt=document.createElement("span");Rt.className="part-name",Rt.textContent=C.label;let{wrap:En,range:qn}=wi(`${C.label} opacity`,Ee(C.id,Q)*100);qn.dataset.group=C.id,qn.dataset.leaves=Q.join(",");let On=Ee(C.id,Q)||1;On<=0&&(On=1),Ei(qn,()=>On,ut=>{ut>0&&(On=ut),ee(Q,ut,C.id)}),En.addEventListener("click",ut=>ut.stopPropagation()),En.addEventListener("pointerdown",ut=>ut.stopPropagation());let Yn=document.createElement("div");Yn.className="part-children",Yn.hidden=!0;function Gr(ut){ut?p.add(C.id):p.delete(C.id),Yn.hidden=!ut,Te.classList.toggle("is-expanded",ut),Be.setAttribute("aria-expanded",ut?"true":"false"),Be.setAttribute("aria-label",ut?`Collapse ${C.label}`:`Expand ${C.label}`),requestAnimationFrame(()=>gn())}function Zs(){Gr(!p.has(C.id))}Be.addEventListener("click",ut=>{ut.stopPropagation(),Zs()}),ke.addEventListener("click",ut=>{ut.target===qn||En.contains(ut.target)||Zs()}),ke.addEventListener("keydown",ut=>{(ut.key==="Enter"||ut.key===" ")&&(ut.preventDefault(),Zs())}),ke.append(Be,Rt,En),Te.append(ke,Yn),G.append(Te);for(let ut of C.children)Wn(ut,Yn,X+1);Gr(p.has(C.id))}function fs(){let C=document.getElementById("parts");if(!C)return;C.replaceChildren();for(let X of c.keys())u.has(X)||u.set(X,1),h.has(X)||h.set(X,1);let G=Fp(c.keys());for(let X of G)Wn(X,C,0);requestAnimationFrame(()=>gn())}let Nn="iso";function Zi(){if(Nn==null)return;Nn=null,document.getElementById("cams")?.querySelectorAll("button").forEach(G=>{G.classList.remove("is-active")})}function Ws(){let C=document.getElementById("cams");if(!C)return;C.replaceChildren();function G(X,Q,Te){let ke=document.createElement("button");ke.type="button",ke.dataset.preset=X,ke.textContent=Q,X===Nn&&ke.classList.add("is-active"),ke.addEventListener("click",()=>{Nn=X,C.querySelectorAll("button").forEach(Be=>{Be.classList.toggle("is-active",Be.dataset.preset===X)}),Te()}),C.append(ke)}for(let[X,Q]of[["iso","Iso"],["front","Front"],["side","Side"],["top","Top"]])G(X,Q,()=>Ve(X));for(let X of n){let Q=String(X?.id||"").trim();if(!Q)continue;let Te=String(X.label||Q);G(`scene:${Q}`,Te,()=>O(X))}}function Xs(C=Me){return C.copy(F.target).sub(z.position).normalize()}function Hr(C){let G=Math.hypot(C.x,C.z),X=(Math.atan2(C.x,C.z)*180/Math.PI+360)%360,Q=Math.atan2(C.y,G)*180/Math.PI,Te=Math.abs(Q).toFixed(0),ke=Q>=0?"\u2191":"\u2193";return`${X.toFixed(0)}\xB0 / ${Te}\xB0${ke}`}function $i(){return he.some(C=>!C.locked)}function ds(){return he.filter(C=>C.locked)}function Ki(){$i()||!(ds().length===0||pe)||he.push({id:le++,normal:new P(0,0,1),t:0,locked:!1,label:"Cut"})}function hc(C){let G=document.getElementById("cuts");if(!G)return;let X=G.querySelector(`[data-cut-id="${C.id}"]`);if(!X){de();return}let Q=X.querySelector(".cut-label");if(Q&&(Q.textContent=C.locked?C.label:"Cut"),C.locked&&!X.querySelector(".cut-remove")){let Te=document.createElement("button");Te.type="button",Te.className="cut-remove",Te.setAttribute("aria-label","Remove section"),Te.textContent="\xD7",Te.addEventListener("click",()=>H(C.id)),X.append(Te)}}function na(C){C.locked||(Xs(C.normal),C.locked=!0,C.label=Hr(C.normal),pe=!1,V(),hc(C))}function qs(){ds().length!==0&&($i()||(pe=!0,!Oe&&(Ki(),de())))}function fc(){pe&&($i()||ds().length!==0&&(Ki(),de()))}function b(C,G){let X=he.find(Q=>Q.id===C);X&&(X.locked||na(X),X.t=Math.min(1,Math.max(0,Number(G))),V())}function H(C){let G=he.findIndex(X=>X.id===C);G<0||(he.splice(G,1),ds().length===0?(pe=!1,$i()||Ki()):pe&&!$i()&&Ki(),V(),de(),g?.refreshPartialHeight())}function $(C){if(tt(),ve.isEmpty())return{near:-1,far:1};let G=ve.min,X=ve.max,Q=1/0,Te=-1/0;for(let Rt=0;Rt<2;Rt++)for(let En=0;En<2;En++)for(let qn=0;qn<2;qn++){ie.set(Rt?X.x:G.x,En?X.y:G.y,qn?X.z:G.z);let On=ie.dot(C);On<Q&&(Q=On),On>Te&&(Te=On)}let Be=Math.max(Te-Q,1e-6)*.02;return{near:Q-Be,far:Te+Be}}function J(C){let{near:G,far:X}=$(C.normal),Q=G+(X-G)*C.t;return q.copy(C.normal).multiplyScalar(Q),new un().setFromNormalAndCoplanarPoint(C.normal,q)}function V(){let C=We();re&&(re.traverse(G=>{if(!G.isMesh||!G.material)return;let X=Array.isArray(G.material)?G.material:[G.material];for(let Q of X)Q.clippingPlanes=C,Q.clipIntersection=!1,Q.needsUpdate=!0}),om(re,C))}function de(){let C=document.getElementById("cuts");if(C){C.replaceChildren();for(let G of he){let X=document.createElement("div");X.className="cut-row",X.dataset.cutId=String(G.id);let Q=document.createElement("span");Q.className="cut-label",Q.textContent=G.locked?G.label:"Cut";let Te=()=>{Oe&&(Oe=!1,fc())},ke=Uh({min:0,max:1,step:.001,value:G.t,ariaLabel:G.locked?`Section ${G.label}`:"Section cut",onScrubStart:()=>{Oe=!0,G.locked||na(G)},onScrubEnd:Te,onInput:Be=>b(G.id,Be),onChange:Be=>{b(G.id,Be),Te()}});if(X.append(Q,ke.el),G.locked){let Be=document.createElement("button");Be.type="button",Be.className="cut-remove",Be.setAttribute("aria-label","Remove section"),Be.textContent="\xD7",Be.addEventListener("click",()=>H(G.id)),X.append(Be)}C.append(X)}g?.refreshPartialHeight()}}let Se=!1,Ce="high",Pe=10,Xe=1e-5,qe=new P,ze=new P,rt=!1,at=0;function At(){Se=!0}function _t(){Se=!1,at=performance.now()}i.addEventListener("pointerdown",At,{capture:!0}),window.addEventListener("pointerup",_t,{capture:!0}),window.addEventListener("pointercancel",_t,{capture:!0}),window.addEventListener("touchend",_t,{capture:!0}),window.addEventListener("touchcancel",_t,{capture:!0}),F.addEventListener("start",()=>{Zi(),At()}),F.addEventListener("change",()=>{k()}),F.addEventListener("end",()=>{_t(),!we&&qs()});let Ke=1,Ne=0,St=0,ct=1,Mn=0,Ti=0,Zt=1,Ai=0,xt=0,Ft=0,bn=280;function $t(){let C=Math.max(1,i.clientWidth),G=Math.max(1,i.clientHeight);if(!g)return{zoom:1,offX:0,offY:0,w:C,h:G};let{bottom:X,right:Q}=g.getSafeInsets();if(X<=0&&Q<=0)return{zoom:1,offX:0,offY:0,w:C,h:G};let Te=Math.max(1,C-Q),ke=Math.max(1,G-X),Be=Math.min(Te/C,ke/G),Rt=Q/2,En=X/2;return{zoom:Be,offX:Rt,offY:En,w:C,h:G}}function Kt(C,G){He(()=>{v=!0,Math.abs(Ne)>.05||Math.abs(St)>.05||Math.abs(Ke-1)>.001?(z.zoom=U*Ke,z.setViewOffset(C,G,Ne,St,C,G)):(z.clearViewOffset(),z.zoom=U,Ke=1,Ne=0,St=0),z.updateProjectionMatrix(),v=!1})}function Ys(C=!0){let{zoom:G,offX:X,offY:Q,w:Te,h:ke}=$t();if(ct=G,Mn=X,Ti=Q,!C){Ke=G,Ne=X,St=Q,Ft=0,Kt(Te,ke);return}Zt=Ke,Ai=Ne,xt=St,Ft=performance.now()}function Ri(C){if(!Ft)return;let G=Math.min(1,(C-Ft)/bn),X=1-(1-G)**3;Ke=Zt+(ct-Zt)*X,Ne=Ai+(Mn-Ai)*X,St=xt+(Ti-xt)*X;let Q=Math.max(1,i.clientWidth),Te=Math.max(1,i.clientHeight);Kt(Q,Te),G>=1&&(Ft=0)}function Xh(){let C=Math.max(1,i.clientWidth),G=Math.max(1,i.clientHeight);_.setSize(C,G,!1),L==="perspective"?Ze():Le(),Ys(!1);let X=ht();rm(re,X.x,X.y)}Xh(),window.addEventListener("resize",Xh),g?.onDetentChange(()=>{Ys(!0)});let Xn=document.getElementById("ar"),Sn=document.getElementById("measure"),dc=!1,qh="Measure";function Rm(){Xn&&(Xn.hidden=!1)}function Cm(){Sn&&(Sn.hidden=!1)}let Vr=null;s&&(Vr=Tm({scene:s,canvas:i,getCamera:()=>z,controls:F,getRoot:()=>re,getClipPlanes:()=>We(),onLiveLength:C=>{Sn&&(C?(Sn.textContent=C,Sn.classList.add("is-live")):(Sn.textContent=qh,Sn.classList.remove("is-live")))},onActiveChange:C=>{Sn&&(Sn.classList.toggle("is-active",C),Sn.setAttribute("aria-pressed",C?"true":"false"),C||(Sn.textContent=qh,Sn.classList.remove("is-live")))}})),Sn&&Sn.addEventListener("click",()=>{Vr&&Vr.setActive(!Vr.isActive())});function Yh(){if(!re)return null;re.updateWorldMatrix(!0,!0);let C=ds().map(Te=>J(Te)),G=new qt;if(G.name="ARContent",re.traverse(Te=>{if(!Te.isMesh||!Te.visible||yi(Te))return;let ke=Gp(Te,C);ke&&G.add(ke)}),!G.children.length)return null;G.updateMatrixWorld(!0);let X=Dh(G),Q=new qt;return Q.name="ARExport",Q.add(G),Xp(G,X),Q.userData.arPlacement=X,Q}async function Zh(){if(dc||!re)return;dc=!0;let C=Xn?.textContent||"AR";Xn&&(Xn.disabled=!0,Xn.textContent="\u2026");try{let G=Yh();if(!G)throw new Error("Nothing visible to export. Show at least one part.");let Q=await new nc().parseAsync(G,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),Te=new Blob([Q],{type:"model/vnd.usdz+zip"}),ke=URL.createObjectURL(Te),Be=document.createElement("a");Be.rel="ar",Be.href=ke,Be.download="view.usdz";let Rt=document.createElement("img");Rt.alt="AR",Be.appendChild(Rt),document.body.appendChild(Be),Be.click(),Be.remove(),setTimeout(()=>URL.revokeObjectURL(ke),6e4)}catch(G){Ye(String(G?.message||G))}finally{dc=!1,Xn&&(Xn.disabled=!1,Xn.textContent=C)}}Xn&&Xn.addEventListener("click",()=>{Zh()});let $h={scene:s,get camera(){return z},controls:F,parts:c,partOpacity:u,cuts:he,scenes:n,setPartOpacity:xe,setCameraPreset:Ve,applyScene:O,setHFov:ce,toggleFovIso:K,get projection(){return L},get hFovDeg(){return T},setCutT:b,removeCut:H,frameIso:_e,openArQuickLook:Zh,buildArExportScene:Yh,getPeelQuality:()=>Ce};window.BlueprintsViewer=$h;function Pm(){for(let C of u.values())if(C<1-1e-4)return!0;return!1}function Im(){for(let[C,G]of c){let X=u.get(C)??1;Qo(G,X)}}let Kh=!1;function Jh(){let C=performance.now();Ri(C),F.update(),re&&me(),Vr?.update(),rt||(qe.copy(z.position),ze.copy(F.target),rt=!0,at=C);let G=z.position.distanceToSquared(qe)>Xe||F.target.distanceToSquared(ze)>Xe;qe.copy(z.position),ze.copy(F.target),(Se||G)&&(at=C),Ce=Se||C-at<Pe||Ft!==0||Oe?"fast":"high";let Q=m.render(s,z,re,Pm,{quality:Ce});Kh&&!Q&&Im(),Kh=Q,requestAnimationFrame(Jh)}return Jh(),$h}return zm($M);})();
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
