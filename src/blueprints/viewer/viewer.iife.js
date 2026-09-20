var BlueprintsViewerBundle=(()=>{var Uc=Object.defineProperty;var bg=Object.getOwnPropertyDescriptor;var Sg=Object.getOwnPropertyNames;var Eg=Object.prototype.hasOwnProperty;var wg=(s,e)=>{for(var n in e)Uc(s,n,{get:e[n],enumerable:!0})},Tg=(s,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Sg(e))!Eg.call(s,r)&&r!==n&&Uc(s,r,{get:()=>e[r],enumerable:!(i=bg(e,r))||i.enumerable});return s};var Ag=s=>Tg(Uc({},"__esModule",{value:!0}),s);var iS={};wg(iS,{mountViewer:()=>nS});var ul="172",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pd=0,yu=1,md=2;var Mu=1,gd=2,Mi=3,An=0,on=1,Pt=2,Nn=0,Hn=1,bu=2,Su=3,Eu=4,hl=5,Dn=100,_d=101,xd=102,vd=103,yd=104,Vo=200,Yi=201,Md=202,bd=203,ws=204,Hi=205,Sd=206,Go=207,Ed=208,wd=209,Td=210,Ad=211,Rd=212,Cd=213,Pd=214,fl=0,dl=1,pl=2,Ts=3,ml=4,gl=5,_l=6,xl=7,wu=0,Id=1,Ld=2,oi=0,Dd=1,Ud=2,Nd=3,Wo=4,Od=5,Fd=6,Bd=7,lu="attached",zd="detached",Tu=300,Us=301,Ns=302,vl=303,yl=304,Xo=306,ii=1e3,hi=1001,vr=1002,zt=1003,Ml=1004;var Os=1005;var kt=1006,Cr=1007;var ai=1008;var Gn=1009,Au=1010,Ru=1011,Pr=1012,bl=1013,ps=1014,Cn=1015,Zi=1016,Sl=1017,El=1018,Fs=1020,Cu=35902,Pu=1021,Iu=1022,jt=1023,Lu=1024,Du=1025,Es=1026,As=1027,wl=1028,Tl=1029,Uu=1030,Al=1031;var Rl=1033,qo=33776,Yo=33777,Zo=33778,$o=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Dl=36196,Ul=37492,Nl=37496,Ol=37808,Fl=37809,Bl=37810,zl=37811,kl=37812,Hl=37813,Vl=37814,Gl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,Zl=37820,$l=37821,Ko=36492,Kl=36494,Jl=36495,Nu=36283,jl=36284,Ql=36285,ec=36286;var Rs=2300,Cs=2301,Ya=2302,cu=2400,uu=2401,hu=2402,kd=2500;var Ou=0,Jo=1,Ir=2,Hd=3200,Vd=3201;var Fu=0,Gd=1,li="",xt="srgb",nn="srgb-linear",uo="linear",vt="srgb";var Ss=7680;var fu=519,Wd=512,Xd=513,qd=514,Bu=515,Yd=516,Zd=517,$d=518,Kd=519,Za=35044;var zu="300 es",fi=2e3,ho=2001,di=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tf=1234567,_r=Math.PI/180,Ps=180/Math.PI;function ni(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function et(s,e,n){return Math.max(e,Math.min(n,s))}function ku(s,e){return(s%e+e)%e}function Rg(s,e,n,i,r){return i+(s-e)*(r-i)/(n-e)}function Cg(s,e,n){return s!==e?(n-s)/(e-s):0}function co(s,e,n){return(1-n)*s+n*e}function Pg(s,e,n,i){return co(s,e,1-Math.exp(-n*i))}function Ig(s,e=1){return e-Math.abs(ku(s,e*2)-e)}function Lg(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function Dg(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function Ug(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ng(s,e){return s+Math.random()*(e-s)}function Og(s){return s*(.5-Math.random())}function Fg(s){s!==void 0&&(Tf=s);let e=Tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bg(s){return s*_r}function zg(s){return s*Ps}function kg(s){return(s&s-1)===0&&s!==0}function Hg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gg(s,e,n,i,r){let o=Math.cos,a=Math.sin,l=o(n/2),c=a(n/2),u=o((e+i)/2),h=a((e+i)/2),f=o((e-i)/2),d=a((e-i)/2),m=o((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":s.set(l*h,c*f,c*d,l*u);break;case"YZY":s.set(c*d,l*h,c*f,l*u);break;case"ZXZ":s.set(c*f,c*d,l*h,l*u);break;case"XZX":s.set(l*h,c*_,c*m,l*u);break;case"YXY":s.set(c*m,l*h,c*_,l*u);break;case"ZYZ":s.set(c*_,c*m,l*h,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Bs={DEG2RAD:_r,RAD2DEG:Ps,generateUUID:ni,clamp:et,euclideanModulo:ku,mapLinear:Rg,inverseLerp:Cg,lerp:co,damp:Pg,pingpong:Ig,smoothstep:Lg,smootherstep:Dg,randInt:Ug,randFloat:Ng,randFloatSpread:Og,seededRandom:Fg,degToRad:Bg,radToDeg:zg,isPowerOfTwo:kg,ceilPowerOfTwo:Hg,floorPowerOfTwo:Vg,setQuaternionFromProperEuler:Gg,normalize:_t,denormalize:ti},Ne=class s{constructor(e=0,n=0){s.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class s{constructor(e,n,i,r,o,a,l,c,u){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,l,c,u)}set(e,n,i,r,o,a,l,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=o,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,o=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],h=i[4],f=i[7],d=i[2],m=i[5],_=i[8],x=r[0],g=r[3],p=r[6],w=r[1],S=r[4],y=r[7],D=r[2],R=r[5],I=r[8];return o[0]=a*x+l*w+c*D,o[3]=a*g+l*S+c*R,o[6]=a*p+l*y+c*I,o[1]=u*x+h*w+f*D,o[4]=u*g+h*S+f*R,o[7]=u*p+h*y+f*I,o[2]=d*x+m*w+_*D,o[5]=d*g+m*S+_*R,o[8]=d*p+m*y+_*I,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*l*u-i*o*h+i*l*c+r*o*u-r*a*c}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=h*a-l*u,d=l*c-h*o,m=u*o-a*c,_=n*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=f*x,e[1]=(r*u-h*i)*x,e[2]=(l*i-r*a)*x,e[3]=d*x,e[4]=(h*n-r*c)*x,e[5]=(r*o-l*n)*x,e[6]=m*x,e[7]=(i*c-u*n)*x,e[8]=(a*n-i*o)*x,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,a,l){let c=Math.cos(o),u=Math.sin(o);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Nc.makeScale(e,n)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new je;function Hu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jd(){let s=yr("canvas");return s.style.display="block",s}var Af={};function zs(s){s in Af||(Af[s]=!0,console.warn(s))}function jd(s,e,n){return new Promise(function(i,r){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function Qd(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ep(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Rf=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cf=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wg(){let s={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(r,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===vt&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?uo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,a){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[nn]:{primaries:e,whitePoint:i,transfer:uo,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),s}var lt=Wg();function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var er,$a=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=yr("canvas")),er.width=e.width,er.height=e.height;let i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=er}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=yr("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=ki(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xg=0,fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(Oc(r[a].image)):o.push(Oc(r[a]))}else o=Oc(r);i.url=o}return n||(e.images[this.uuid]=i),i}};function Oc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$a.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qg=0,Ht=class s extends di{constructor(e=s.DEFAULT_IMAGE,n=s.DEFAULT_MAPPING,i=hi,r=hi,o=kt,a=ai,l=jt,c=Gn,u=s.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=ni(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Tu;Ht.DEFAULT_ANISOTROPY=1;var st=class s{constructor(e=0,n=0,i=0,r=1){s.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],m=c[5],_=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(u+1)/2,y=(m+1)/2,D=(p+1)/2,R=(h+d)/4,I=(f+x)/4,U=(_+g)/4;return S>y&&S>D?S<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(S),r=R/i,o=I/i):y>D?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=R/r,o=U/r):D<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),i=I/o,r=U/o),this.set(i,r,o,n),this}let w=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(g-_)/w,this.y=(f-x)/w,this.z=(d-h)/w,this.w=Math.acos((u+m+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends di{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let o=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let n=Object.assign({},e.texture.image);return this.texture.source=new fo(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Ka{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},po=class extends Ht{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends Ht{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,a,l){let c=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3],d=o[a+0],m=o[a+1],_=o[a+2],x=o[a+3];if(l===0){e[n+0]=c,e[n+1]=u,e[n+2]=h,e[n+3]=f;return}if(l===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(f!==x||c!==d||u!==m||h!==_){let g=1-l,p=c*d+u*m+h*_+f*x,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let D=Math.sqrt(S),R=Math.atan2(D,p*w);g=Math.sin(g*R)/D,l=Math.sin(l*R)/D}let y=l*w;if(c=c*g+d*y,u=u*g+m*y,h=h*g+_*y,f=f*g+x*y,g===1-l){let D=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=D,u*=D,h*=D,f*=D}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,a){let l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],f=o[a],d=o[a+1],m=o[a+2],_=o[a+3];return e[n]=l*_+h*f+c*m-u*d,e[n+1]=c*_+h*d+u*f-l*m,e[n+2]=u*_+h*m+l*d-c*f,e[n+3]=h*_-l*f-c*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,o=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),f=l(o/2),d=c(i/2),m=c(r/2),_=c(o/2);switch(a){case"XYZ":this._x=d*h*f+u*m*_,this._y=u*m*f-d*h*_,this._z=u*h*_+d*m*f,this._w=u*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+u*m*_,this._y=u*m*f-d*h*_,this._z=u*h*_-d*m*f,this._w=u*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-u*m*_,this._y=u*m*f+d*h*_,this._z=u*h*_+d*m*f,this._w=u*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-u*m*_,this._y=u*m*f+d*h*_,this._z=u*h*_-d*m*f,this._w=u*h*f+d*m*_;break;case"YZX":this._x=d*h*f+u*m*_,this._y=u*m*f+d*h*_,this._z=u*h*_-d*m*f,this._w=u*h*f-d*m*_;break;case"XZY":this._x=d*h*f-u*m*_,this._y=u*m*f-d*h*_,this._z=u*h*_+d*m*f,this._w=u*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],o=n[8],a=n[1],l=n[5],c=n[9],u=n[2],h=n[6],f=n[10],d=i+l+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(o-u)*m,this._z=(a-r)*m}else if(i>l&&i>f){let m=2*Math.sqrt(1+i-l-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+u)/m}else if(l>f){let m=2*Math.sqrt(1+l-i-f);this._w=(o-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-i-l);this._w=(a-r)/m,this._x=(o+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,o=e._z,a=e._w,l=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*l+r*u-o*c,this._y=r*h+a*c+o*l-i*u,this._z=o*h+a*u+i*c-r*l,this._w=a*h-i*l-r*c-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,o=this._z,a=this._w,l=a*e._w+i*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;let c=1-l*l;if(c<=Number.EPSILON){let m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}let u=Math.sqrt(c),h=Math.atan2(u,l),f=Math.sin((1-n)*h)/u,d=Math.sin(n*h)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(e=0,n=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pf.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,o=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),h=2*(l*n-o*r),f=2*(o*i-a*n);return this.x=n+c*u+a*f-l*h,this.y=i+c*h+l*u-o*f,this.z=r+c*f+o*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,o=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-o*l,this.y=o*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new P,Pf=new Sn,Dt=class{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(o,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),_a.subVectors(this.max,jr),tr.subVectors(e.a,jr),nr.subVectors(e.b,jr),ir.subVectors(e.c,jr),ts.subVectors(nr,tr),ns.subVectors(ir,nr),vs.subVectors(tr,ir);let n=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-vs.z,vs.y,ts.z,0,-ts.x,ns.z,0,-ns.x,vs.z,0,-vs.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-vs.y,vs.x,0];return!Bc(n,tr,nr,ir,_a)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,tr,nr,ir,_a))?!1:(xa.crossVectors(ts,ns),n=[xa.x,xa.y,xa.z],Bc(n,tr,nr,ir,_a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Di=[new P,new P,new P,new P,new P,new P,new P,new P],jn=new P,ga=new Dt,tr=new P,nr=new P,ir=new P,ts=new P,ns=new P,vs=new P,jr=new P,_a=new P,xa=new P,ys=new P;function Bc(s,e,n,i,r){for(let o=0,a=s.length-3;o<=a;o+=3){ys.fromArray(s,o);let l=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),c=e.dot(ys),u=n.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}var Yg=new Dt,Qr=new P,zc=new P,Kt=class{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Yg.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let n=Qr.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(zc)),this.expandByPoint(Qr.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ui=new P,kc=new P,va=new P,is=new P,Hc=new P,ya=new P,Vc=new P,pi=class{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){kc.copy(e).add(n).multiplyScalar(.5),va.copy(n).sub(e).normalize(),is.copy(this.origin).sub(kc);let o=e.distanceTo(n)*.5,a=-this.direction.dot(va),l=is.dot(this.direction),c=-is.dot(va),u=is.lengthSq(),h=Math.abs(1-a*a),f,d,m,_;if(h>0)if(f=a*c-l,d=a*l-c,_=o*h,f>=0)if(d>=-_)if(d<=_){let x=1/h;f*=x,d*=x,m=f*(f+a*d+2*l)+d*(a*f+d+2*c)+u}else d=o,f=Math.max(0,-(a*d+l)),m=-f*f+d*(d+2*c)+u;else d=-o,f=Math.max(0,-(a*d+l)),m=-f*f+d*(d+2*c)+u;else d<=-_?(f=Math.max(0,-(-a*o+l)),d=f>0?-o:Math.min(Math.max(-o,-c),o),m=-f*f+d*(d+2*c)+u):d<=_?(f=0,d=Math.min(Math.max(-o,-c),o),m=d*(d+2*c)+u):(f=Math.max(0,-(a*o+l)),d=f>0?o:Math.min(Math.max(-o,-c),o),m=-f*f+d*(d+2*c)+u);else d=a>0?-o:o,f=Math.max(0,-(a*d+l)),m=-f*f+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(kc).addScaledVector(va,d),m}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);let i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,o=e.radius*e.radius;if(r>o)return null;let a=Math.sqrt(o-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,a,l,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(o=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(l=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,i,r,o){Hc.subVectors(n,e),ya.subVectors(i,e),Vc.crossVectors(Hc,ya);let a=this.direction.dot(Vc),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;is.subVectors(this.origin,e);let c=l*this.direction.dot(ya.crossVectors(is,ya));if(c<0)return null;let u=l*this.direction.dot(Hc.cross(is));if(u<0||c+u>a)return null;let h=-l*is.dot(Vc);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class s{constructor(e,n,i,r,o,a,l,c,u,h,f,d,m,_,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,l,c,u,h,f,d,m,_,x,g)}set(e,n,i,r,o,a,l,c,u,h,f,d,m,_,x,g){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=a,p[9]=l,p[13]=c,p[2]=u,p[6]=h,p[10]=f,p[14]=d,p[3]=m,p[7]=_,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),o=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){let d=a*h,m=a*f,_=l*h,x=l*f;n[0]=c*h,n[4]=-c*f,n[8]=u,n[1]=m+_*u,n[5]=d-x*u,n[9]=-l*c,n[2]=x-d*u,n[6]=_+m*u,n[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*f,_=u*h,x=u*f;n[0]=d+x*l,n[4]=_*l-m,n[8]=a*u,n[1]=a*f,n[5]=a*h,n[9]=-l,n[2]=m*l-_,n[6]=x+d*l,n[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*f,_=u*h,x=u*f;n[0]=d-x*l,n[4]=-a*f,n[8]=_+m*l,n[1]=m+_*l,n[5]=a*h,n[9]=x-d*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*f,_=l*h,x=l*f;n[0]=c*h,n[4]=_*u-m,n[8]=d*u+x,n[1]=c*f,n[5]=x*u+d,n[9]=m*u-_,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*u,_=l*c,x=l*u;n[0]=c*h,n[4]=x-d*f,n[8]=_*f+m,n[1]=f,n[5]=a*h,n[9]=-l*h,n[2]=-u*h,n[6]=m*f+_,n[10]=d-x*f}else if(e.order==="XZY"){let d=a*c,m=a*u,_=l*c,x=l*u;n[0]=c*h,n[4]=-f,n[8]=u*h,n[1]=d*f+x,n[5]=a*h,n[9]=m*f-_,n[2]=_*f-m,n[6]=l*h,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,$g)}lookAt(e,n,i){let r=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),ss.crossVectors(i,In),ss.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),ss.crossVectors(i,In)),ss.normalize(),Ma.crossVectors(In,ss),r[0]=ss.x,r[4]=Ma.x,r[8]=In.x,r[1]=ss.y,r[5]=Ma.y,r[9]=In.y,r[2]=ss.z,r[6]=Ma.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,o=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],h=i[1],f=i[5],d=i[9],m=i[13],_=i[2],x=i[6],g=i[10],p=i[14],w=i[3],S=i[7],y=i[11],D=i[15],R=r[0],I=r[4],U=r[8],M=r[12],b=r[1],B=r[5],$=r[9],F=r[13],X=r[2],J=r[6],K=r[10],oe=r[14],Y=r[3],te=r[7],he=r[11],Se=r[15];return o[0]=a*R+l*b+c*X+u*Y,o[4]=a*I+l*B+c*J+u*te,o[8]=a*U+l*$+c*K+u*he,o[12]=a*M+l*F+c*oe+u*Se,o[1]=h*R+f*b+d*X+m*Y,o[5]=h*I+f*B+d*J+m*te,o[9]=h*U+f*$+d*K+m*he,o[13]=h*M+f*F+d*oe+m*Se,o[2]=_*R+x*b+g*X+p*Y,o[6]=_*I+x*B+g*J+p*te,o[10]=_*U+x*$+g*K+p*he,o[14]=_*M+x*F+g*oe+p*Se,o[3]=w*R+S*b+y*X+D*Y,o[7]=w*I+S*B+y*J+D*te,o[11]=w*U+S*$+y*K+D*he,o[15]=w*M+S*F+y*oe+D*Se,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],m=e[14],_=e[3],x=e[7],g=e[11],p=e[15];return _*(+o*c*f-r*u*f-o*l*d+i*u*d+r*l*m-i*c*m)+x*(+n*c*m-n*u*d+o*a*d-r*a*m+r*u*h-o*c*h)+g*(+n*u*f-n*l*m-o*a*f+i*a*m+o*l*h-i*u*h)+p*(-r*l*h-n*c*f+n*l*d+r*a*f-i*a*d+i*c*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],m=e[11],_=e[12],x=e[13],g=e[14],p=e[15],w=f*g*u-x*d*u+x*c*m-l*g*m-f*c*p+l*d*p,S=_*d*u-h*g*u-_*c*m+a*g*m+h*c*p-a*d*p,y=h*x*u-_*f*u+_*l*m-a*x*m-h*l*p+a*f*p,D=_*f*c-h*x*c-_*l*d+a*x*d+h*l*g-a*f*g,R=n*w+i*S+r*y+o*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=w*I,e[1]=(x*d*o-f*g*o-x*r*m+i*g*m+f*r*p-i*d*p)*I,e[2]=(l*g*o-x*c*o+x*r*u-i*g*u-l*r*p+i*c*p)*I,e[3]=(f*c*o-l*d*o-f*r*u+i*d*u+l*r*m-i*c*m)*I,e[4]=S*I,e[5]=(h*g*o-_*d*o+_*r*m-n*g*m-h*r*p+n*d*p)*I,e[6]=(_*c*o-a*g*o-_*r*u+n*g*u+a*r*p-n*c*p)*I,e[7]=(a*d*o-h*c*o+h*r*u-n*d*u-a*r*m+n*c*m)*I,e[8]=y*I,e[9]=(_*f*o-h*x*o-_*i*m+n*x*m+h*i*p-n*f*p)*I,e[10]=(a*x*o-_*l*o+_*i*u-n*x*u-a*i*p+n*l*p)*I,e[11]=(h*l*o-a*f*o-h*i*u+n*f*u+a*i*m-n*l*m)*I,e[12]=D*I,e[13]=(h*x*r-_*f*r+_*i*d-n*x*d-h*i*g+n*f*g)*I,e[14]=(_*l*r-a*x*r-_*i*c+n*x*c+a*i*g-n*l*g)*I,e[15]=(a*f*r-h*l*r+h*i*c-n*f*c-a*i*d+n*l*d)*I,this}scale(e){let n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),o=1-i,a=e.x,l=e.y,c=e.z,u=o*a,h=o*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*a,0,u*c-r*l,h*c+r*a,o*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,o=n._x,a=n._y,l=n._z,c=n._w,u=o+o,h=a+a,f=l+l,d=o*u,m=o*h,_=o*f,x=a*h,g=a*f,p=l*f,w=c*u,S=c*h,y=c*f,D=i.x,R=i.y,I=i.z;return r[0]=(1-(x+p))*D,r[1]=(m+y)*D,r[2]=(_-S)*D,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(d+p))*R,r[6]=(g+w)*R,r[7]=0,r[8]=(_+S)*I,r[9]=(g-w)*I,r[10]=(1-(d+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,o=sr.set(r[0],r[1],r[2]).length(),a=sr.set(r[4],r[5],r[6]).length(),l=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);let u=1/o,h=1/a,f=1/l;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,n.setFromRotationMatrix(Qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,o,a,l=fi){let c=this.elements,u=2*o/(n-e),h=2*o/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r),m,_;if(l===fi)m=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(l===ho)m=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,o,a,l=fi){let c=this.elements,u=1/(n-e),h=1/(i-r),f=1/(a-o),d=(n+e)*u,m=(i+r)*h,_,x;if(l===fi)_=(a+o)*f,x=-2*f;else if(l===ho)_=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},sr=new P,Qn=new Ze,Zg=new P(0,0,0),$g=new P(1,1,1),ss=new P,Ma=new P,In=new P,If=new Ze,Lf=new Sn,si=class s{constructor(e=0,n=0,i=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,o=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return If.makeRotationFromQuaternion(e),this.setFromRotationMatrix(If,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kg=0,Df=new P,rr=new Sn,Ni=new Ze,ba=new P,eo=new P,Jg=new P,jg=new Sn,Uf=new P(1,0,0),Nf=new P(0,1,0),Of=new P(0,0,1),Ff={type:"added"},Qg={type:"removed"},or={type:"childadded",child:null},Gc={type:"childremoved",child:null},Ct=class s extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,n=new si,i=new Sn,r=new P(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new je}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rr.setFromAxisAngle(e,n),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,n){return rr.setFromAxisAngle(e,n),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Uf,e)}rotateY(e){return this.rotateOnAxis(Nf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,n){return Df.copy(e).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Uf,e)}translateY(e){return this.translateOnAxis(Nf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ba.copy(e):ba.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(eo,ba,this.up):Ni.lookAt(ba,eo,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Ni),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ff),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Qg),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ff),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,Jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];o(e.shapes,f)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(o(e.animations,c))}}if(n){let l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ct.DEFAULT_UP=new P(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new P,Oi=new P,Wc=new P,Fi=new P,ar=new P,lr=new P,Bf=new P,Xc=new P,qc=new P,Yc=new P,Zc=new st,$c=new st,Kc=new st,ui=class s{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){ei.subVectors(r,n),Oi.subVectors(i,n),Wc.subVectors(e,n);let a=ei.dot(ei),l=ei.dot(Oi),c=ei.dot(Wc),u=Oi.dot(Oi),h=Oi.dot(Wc),f=a*u-l*l;if(f===0)return o.set(0,0,0),null;let d=1/f,m=(u*c-l*h)*d,_=(a*h-l*c)*d;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,o,a,l,c){return this.getBarycoord(e,n,i,r,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Fi.x),c.addScaledVector(a,Fi.y),c.addScaledVector(l,Fi.z),c)}static getInterpolatedAttribute(e,n,i,r,o,a){return Zc.setScalar(0),$c.setScalar(0),Kc.setScalar(0),Zc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,i),Kc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zc,o.x),a.addScaledVector($c,o.y),a.addScaledVector(Kc,o.z),a}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Oi.subVectors(e,n),ei.cross(Oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ei.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return s.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return s.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,o=this.c,a,l;ar.subVectors(r,i),lr.subVectors(o,i),Xc.subVectors(e,i);let c=ar.dot(Xc),u=lr.dot(Xc);if(c<=0&&u<=0)return n.copy(i);qc.subVectors(e,r);let h=ar.dot(qc),f=lr.dot(qc);if(h>=0&&f<=h)return n.copy(r);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(ar,a);Yc.subVectors(e,o);let m=ar.dot(Yc),_=lr.dot(Yc);if(_>=0&&m<=_)return n.copy(o);let x=m*u-c*_;if(x<=0&&u>=0&&_<=0)return l=u/(u-_),n.copy(i).addScaledVector(lr,l);let g=h*_-m*f;if(g<=0&&f-h>=0&&m-_>=0)return Bf.subVectors(o,r),l=(f-h)/(f-h+(m-_)),n.copy(r).addScaledVector(Bf,l);let p=1/(g+x+d);return a=x*p,l=d*p,n.copy(i).addScaledVector(ar,a).addScaledVector(lr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Jc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}var Ue=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=ku(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=Jc(a,o,e+1/3),this.g=Jc(a,o,e),this.b=Jc(a,o,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,n=xt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xt){let i=tp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return lt.fromWorkingColorSpace(pn.copy(this),e),Math.round(et(pn.r*255,0,255))*65536+Math.round(et(pn.g*255,0,255))*256+Math.round(et(pn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(pn.copy(this),n);let i=pn.r,r=pn.g,o=pn.b,a=Math.max(i,r,o),l=Math.min(i,r,o),c,u,h=(l+a)/2;if(l===a)c=0,u=0;else{let f=a-l;switch(u=h<=.5?f/(a+l):f/(2-a-l),a){case i:c=(r-o)/f+(r<o?6:0);break;case r:c=(o-i)/f+2;break;case o:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=xt){lt.fromWorkingColorSpace(pn.copy(this),e);let n=pn.r,i=pn.g,r=pn.b;return e!==xt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+n,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rs),e.getHSL(Sa);let i=co(rs.h,Sa.h,n),r=co(rs.s,Sa.s,n),o=co(rs.l,Sa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Ue;Ue.NAMES=tp;var e0=0,En=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Hn,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ws,this.blendDst=Hi,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(i.blending=this.blending),this.side!==An&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ws&&(i.blendSrc=this.blendSrc),this.blendDst!==Hi&&(i.blendDst=this.blendDst),this.blendEquation!==Dn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}if(n){let o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rn=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new P,Ea=new Ne,wt=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Za,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ea.fromBufferAttribute(this,n),Ea.applyMatrix3(e),this.setXY(n,Ea.x,Ea.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ti(n,this.array)),n}setX(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ti(n,this.array)),n}setY(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ti(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ti(n,this.array)),n}setW(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}};var mo=class extends wt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var go=class extends wt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Nt=class extends wt{constructor(e,n,i){super(new Float32Array(e),n,i)}},t0=0,kn=new Ze,jc=new Ct,cr=new P,Ln=new Dt,to=new Dt,$t=new P,Lt=class s extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hu(e)?go:mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new je().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(i,3))}else{let i=Math.min(e.length,n.count);for(let r=0;r<i;r++){let o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let o=n[i];Ln.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){let l=n[o];to.setFromBufferAttribute(l),this.morphTargetsRelative?($t.addVectors(Ln.min,to.min),Ln.expandByPoint($t),$t.addVectors(Ln.max,to.max),Ln.expandByPoint($t)):(Ln.expandByPoint(to.min),Ln.expandByPoint(to.max))}Ln.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)$t.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared($t));if(n)for(let o=0,a=n.length;o<a;o++){let l=n[o],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)$t.fromBufferAttribute(l,u),c&&(cr.fromBufferAttribute(e,u),$t.add(cr)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),l=[],c=[];for(let U=0;U<i.count;U++)l[U]=new P,c[U]=new P;let u=new P,h=new P,f=new P,d=new Ne,m=new Ne,_=new Ne,x=new P,g=new P;function p(U,M,b){u.fromBufferAttribute(i,U),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,b),d.fromBufferAttribute(o,U),m.fromBufferAttribute(o,M),_.fromBufferAttribute(o,b),h.sub(u),f.sub(u),m.sub(d),_.sub(d);let B=1/(m.x*_.y-_.x*m.y);isFinite(B)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(B),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(B),l[U].add(x),l[M].add(x),l[b].add(x),c[U].add(g),c[M].add(g),c[b].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,M=w.length;U<M;++U){let b=w[U],B=b.start,$=b.count;for(let F=B,X=B+$;F<X;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let S=new P,y=new P,D=new P,R=new P;function I(U){D.fromBufferAttribute(r,U),R.copy(D);let M=l[U];S.copy(M),S.sub(D.multiplyScalar(D.dot(M))).normalize(),y.crossVectors(R,M);let B=y.dot(c[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,B)}for(let U=0,M=w.length;U<M;++U){let b=w[U],B=b.start,$=b.count;for(let F=B,X=B+$;F<X;F+=3)I(e.getX(F+0)),I(e.getX(F+1)),I(e.getX(F+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P,f=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){let _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),l.add(h),c.add(h),u.add(h),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(l,c){let u=l.array,h=l.itemSize,f=l.normalized,d=new u.constructor(c.length*h),m=0,_=0;for(let x=0,g=c.length;x<g;x++){l.isInterleavedBufferAttribute?m=c[x]*l.data.stride+l.offset:m=c[x]*h;for(let p=0;p<h;p++)d[_++]=u[m++]}return new wt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new s,i=this.index.array,r=this.attributes;for(let l in r){let c=r[l],u=e(c,i);n.setAttribute(l,u)}let o=this.morphAttributes;for(let l in o){let c=[],u=o[l];for(let h=0,f=u.length;h<f;h++){let d=u[h],m=e(d,i);c.push(m)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let u=i[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let m=u[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(n))}let o=e.morphAttributes;for(let u in o){let h=[],f=o[u];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zf=new Ze,Ms=new pi,wa=new Kt,kf=new P,Ta=new P,Aa=new P,Ra=new P,Qc=new P,Ca=new P,Hf=new P,Pa=new P,Qe=class extends Ct{constructor(e=new Lt,n=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(o&&l){Ca.set(0,0,0);for(let c=0,u=o.length;c<u;c++){let h=l[c],f=o[c];h!==0&&(Qc.fromBufferAttribute(f,e),a?Ca.addScaledVector(Qc,h):Ca.addScaledVector(Qc.sub(n),h))}n.add(Ca)}return n}raycast(e,n){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(o),Ms.copy(e.ray).recast(e.near),!(wa.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(wa,kf)===null||Ms.origin.distanceToSquared(kf)>(e.far-e.near)**2))&&(zf.copy(o).invert(),Ms.copy(e.ray).applyMatrix4(zf),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ms)))}_computeIntersections(e,n,i){let r,o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,u=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,d=o.groups,m=o.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){let g=d[_],p=a[g.materialIndex],w=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=w,D=S;y<D;y+=3){let R=l.getX(y),I=l.getX(y+1),U=l.getX(y+2);r=Ia(this,p,e,i,u,h,f,R,I,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){let w=l.getX(g),S=l.getX(g+1),y=l.getX(g+2);r=Ia(this,a,e,i,u,h,f,w,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){let g=d[_],p=a[g.materialIndex],w=Math.max(g.start,m.start),S=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let y=w,D=S;y<D;y+=3){let R=y,I=y+1,U=y+2;r=Ia(this,p,e,i,u,h,f,R,I,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){let w=g,S=g+1,y=g+2;r=Ia(this,a,e,i,u,h,f,w,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}};function n0(s,e,n,i,r,o,a,l){let c;if(e.side===on?c=i.intersectTriangle(a,o,r,!0,l):c=i.intersectTriangle(r,o,a,e.side===An,l),c===null)return null;Pa.copy(l),Pa.applyMatrix4(s.matrixWorld);let u=n.ray.origin.distanceTo(Pa);return u<n.near||u>n.far?null:{distance:u,point:Pa.clone(),object:s}}function Ia(s,e,n,i,r,o,a,l,c,u){s.getVertexPosition(l,Ta),s.getVertexPosition(c,Aa),s.getVertexPosition(u,Ra);let h=n0(s,e,n,i,Ta,Aa,Ra,Hf);if(h){let f=new P;ui.getBarycoord(Hf,Ta,Aa,Ra,f),r&&(h.uv=ui.getInterpolatedAttribute(r,l,c,u,f,new Ne)),o&&(h.uv1=ui.getInterpolatedAttribute(o,l,c,u,f,new Ne)),a&&(h.normal=ui.getInterpolatedAttribute(a,l,c,u,f,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:l,b:c,c:u,normal:new P,materialIndex:0};ui.getNormal(Ta,Aa,Ra,d.normal),h.face=d,h.barycoord=f}return h}var as=class s extends Lt{constructor(e=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};let l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,m=0;_("z","y","x",-1,-1,i,n,e,a,o,0),_("z","y","x",1,-1,i,n,-e,a,o,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(f,2));function _(x,g,p,w,S,y,D,R,I,U,M){let b=y/I,B=D/U,$=y/2,F=D/2,X=R/2,J=I+1,K=U+1,oe=0,Y=0,te=new P;for(let he=0;he<K;he++){let Se=he*B-F;for(let ue=0;ue<J;ue++){let me=ue*b-$;te[x]=me*w,te[g]=Se*S,te[p]=X,u.push(te.x,te.y,te.z),te[x]=0,te[g]=0,te[p]=R>0?1:-1,h.push(te.x,te.y,te.z),f.push(ue/I),f.push(1-he/U),oe+=1}}for(let he=0;he<U;he++)for(let Se=0;Se<I;Se++){let ue=d+Se+J*he,me=d+Se+J*(he+1),G=d+(Se+1)+J*(he+1),ae=d+(Se+1)+J*he;c.push(ue,me,ae),c.push(me,G,ae),Y+=6}l.addGroup(m,Y,M),m+=Y,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(s){let e={};for(let n in s){e[n]={};for(let i in s[n]){let r=s[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function xn(s){let e={};for(let n=0;n<s.length;n++){let i=ks(s[n]);for(let r in i)e[r]=i[r]}return e}function i0(s){let e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Vu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var jo={clone:ks,merge:xn},s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},_o=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},os=new P,Vf=new Ne,Gf=new Ne,Bt=class extends _o{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,n){return this.getViewBounds(e,Vf,Gf),n.subVectors(Gf,Vf)}setViewOffset(e,n,i,r,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(_r*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}let l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ur=-90,hr=1,ja=class extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(ur,hr,e,n);r.layers=this.layers,this.add(r);let o=new Bt(ur,hr,e,n);o.layers=this.layers,this.add(o);let a=new Bt(ur,hr,e,n);a.layers=this.layers,this.add(a);let l=new Bt(ur,hr,e,n);l.layers=this.layers,this.add(l);let c=new Bt(ur,hr,e,n);c.layers=this.layers,this.add(c);let u=new Bt(ur,hr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,l,c]=n;for(let u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,a,l,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},xo=class extends Ht{constructor(e,n,i,r,o,a,l,c,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,o,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qa=class extends sn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xo(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new as(5,5,5),o=new Vt({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Nn});o.uniforms.tEquirect.value=n;let a=new Qe(r,o),l=n.minFilter;return n.minFilter===ai&&(n.minFilter=kt),new ja(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){let o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}};var Vn=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},ls=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new P,gn=class s{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ti(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ti(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ti(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ti(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new wt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},br=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fr,no=new P,dr=new P,pr=new P,mr=new Ne,io=new Ne,np=new Ze,La=new P,so=new P,Da=new P,Wf=new Ne,eu=new Ne,Xf=new Ne,vo=class extends Ct{constructor(e=new br){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new Lt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ls(n,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new gn(i,3,0,!1)),fr.setAttribute("uv",new gn(i,2,3,!1))}this.geometry=fr,this.material=e,this.center=new Ne(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),np.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-pr.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let a=this.center;Ua(La.set(-.5,-.5,0),pr,a,dr,r,o),Ua(so.set(.5,-.5,0),pr,a,dr,r,o),Ua(Da.set(.5,.5,0),pr,a,dr,r,o),Wf.set(0,0),eu.set(1,0),Xf.set(1,1);let l=e.ray.intersectTriangle(La,so,Da,!1,no);if(l===null&&(Ua(so.set(-.5,.5,0),pr,a,dr,r,o),eu.set(0,1),l=e.ray.intersectTriangle(La,Da,so,!1,no),l===null))return;let c=e.ray.origin.distanceTo(no);c<e.near||c>e.far||n.push({distance:c,point:no.clone(),uv:ui.getInterpolation(no,La,so,Da,Wf,eu,Xf,new Ne),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ua(s,e,n,i,r,o){mr.subVectors(s,n).addScalar(.5).multiply(i),r!==void 0?(io.x=o*mr.x-r*mr.y,io.y=r*mr.x+o*mr.y):io.copy(mr),s.copy(e),s.x+=io.x,s.y+=io.y,s.applyMatrix4(np)}var qf=new P,Yf=new st,Zf=new st,o0=new P,$f=new Ze,Na=new P,tu=new Kt,Kf=new Ze,nu=new pi,yo=class extends Qe{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lu,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dt),this.boundingBox.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Na),this.boundingBox.expandByPoint(Na)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kt),this.boundingSphere.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Na),this.boundingSphere.expandByPoint(Na)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tu.copy(this.boundingSphere),tu.applyMatrix4(r),e.ray.intersectsSphere(tu)!==!1&&(Kf.copy(r).invert(),nu.copy(e.ray).applyMatrix4(Kf),!(this.boundingBox!==null&&nu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,nu)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){e.fromBufferAttribute(n,i);let o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){let i=this.skeleton,r=this.geometry;Yf.fromBufferAttribute(r.attributes.skinIndex,e),Zf.fromBufferAttribute(r.attributes.skinWeight,e),qf.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let o=0;o<4;o++){let a=Zf.getComponent(o);if(a!==0){let l=Yf.getComponent(o);$f.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),n.addScaledVector(o0.copy(qf).applyMatrix4($f),a)}}return n.applyMatrix4(this.bindMatrixInverse)}},Sr=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},Mo=class extends Ht{constructor(e=null,n=1,i=1,r,o,a,l,c,u=zt,h=zt,f,d){super(null,a,l,c,u,h,r,o,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jf=new Ze,a0=new Ze,bo=class s{constructor(e=[],n=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){let i=new Ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,a=e.length;o<a;o++){let l=e[o]?e[o].matrixWorld:a0;Jf.multiplyMatrices(l,n[o]),Jf.toArray(i,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let n=new Float32Array(e*e*4);n.set(this.boneMatrices);let i=new Mo(n,e,e,jt,Cn);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){let r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let o=e.bones[i],a=n[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new Sr),this.bones.push(a),this.boneInverses.push(new Ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let n=this.bones,i=this.boneInverses;for(let r=0,o=n.length;r<o;r++){let a=n[r];e.bones.push(a.uuid);let l=i[r];e.boneInverses.push(l.toArray())}return e}},cs=class extends wt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new Ze,jf=new Ze,Oa=[],Qf=new Dt,l0=new Ze,ro=new Qe,oo=new Kt,So=class extends Qe{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new cs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,l0)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Dt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,gr),Qf.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(Qf)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,gr),oo.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(oo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,a=e*o+1;for(let l=0;l<i.length;l++)i[l]=r[a+l]}raycast(e,n){let i=this.matrixWorld,r=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,gr),jf.multiplyMatrices(i,gr),ro.matrixWorld=jf,ro.raycast(e,Oa);for(let a=0,l=Oa.length;a<l;a++){let c=Oa[a];c.instanceId=o,c.object=this,n.push(c)}Oa.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){let i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mo(new Float32Array(r*this.count),r,this.count,wl,Cn));let o=this.morphTexture.source.data.data,a=0;for(let u=0;u<i.length;u++)a+=i[u];let l=this.geometry.morphTargetsRelative?1:1-a,c=r*e;o[c]=l,o.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},iu=new P,c0=new P,u0=new je,mn=class{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=iu.subVectors(i,n).cross(c0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||u0.getNormalMatrix(e),r=this.coplanarPoint(iu).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bs=new Kt,Fa=new P,Er=class{constructor(e=new mn,n=new mn,i=new mn,r=new mn,o=new mn,a=new mn){this.planes=[e,n,i,r,o,a]}set(e,n,i,r,o,a){let l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],_=r[9],x=r[10],g=r[11],p=r[12],w=r[13],S=r[14],y=r[15];if(i[0].setComponents(c-o,d-u,g-m,y-p).normalize(),i[1].setComponents(c+o,d+u,g+m,y+p).normalize(),i[2].setComponents(c+a,d+h,g+_,y+w).normalize(),i[3].setComponents(c-a,d-h,g-_,y-w).normalize(),i[4].setComponents(c-l,d-f,g-x,y-S).normalize(),n===fi)i[5].setComponents(c+l,d+f,g+x,y+S).normalize();else if(n===ho)i[5].setComponents(l,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vi=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},el=new P,tl=new P,ed=new Ze,ao=new pi,Ba=new Kt,su=new P,td=new P,mi=class extends Ct{constructor(e=new Lt,n=new Vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)el.fromBufferAttribute(n,r-1),tl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=el.distanceTo(tl);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(r),Ba.radius+=o,e.ray.intersectsSphere(Ba)===!1)return;ed.copy(r).invert(),ao.copy(e.ray).applyMatrix4(ed);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=m,g=_-1;x<g;x+=u){let p=h.getX(x),w=h.getX(x+1),S=za(this,e,ao,c,p,w);S&&n.push(S)}if(this.isLineLoop){let x=h.getX(_-1),g=h.getX(m),p=za(this,e,ao,c,x,g);p&&n.push(p)}}else{let m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=m,g=_-1;x<g;x+=u){let p=za(this,e,ao,c,x,x+1);p&&n.push(p)}if(this.isLineLoop){let x=za(this,e,ao,c,_-1,m);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}};function za(s,e,n,i,r,o){let a=s.geometry.attributes.position;if(el.fromBufferAttribute(a,r),tl.fromBufferAttribute(a,o),n.distanceSqToSegment(el,tl,su,td)>i)return;su.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(su);if(!(c<e.near||c>e.far))return{distance:c,point:td.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}var nd=new P,id=new P,Eo=class extends mi{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)nd.fromBufferAttribute(n,r),id.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nd.distanceTo(id);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wo=class extends mi{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}},wr=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sd=new Ze,du=new pi,ka=new Kt,Ha=new P,To=class extends Ct{constructor(e=new Lt,n=new wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ka.radius+=o,e.ray.intersectsSphere(ka)===!1)return;sd.copy(r).invert(),du.copy(e.ray).applyMatrix4(sd);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,x=m;_<x;_++){let g=u.getX(_);Ha.fromBufferAttribute(f,g),rd(Ha,g,c,r,e,n,this)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,x=m;_<x;_++)Ha.fromBufferAttribute(f,_),rd(Ha,_,c,r,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}};function rd(s,e,n,i,r,o,a){let l=du.distanceSqToPoint(s);if(l<n){let c=new P;du.closestPointToPoint(s,c),c.applyMatrix4(i);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Jt=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Is=class extends Ht{constructor(e,n,i,r,o,a,l,c,u){super(e,n,i,r,o,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ao=class extends Ht{constructor(e,n,i,r,o,a,l,c,u,h=Es){if(h!==Es&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Es&&(i=ps),i===void 0&&h===As&&(i=Fs),super(null,r,o,a,l,c,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}};var Va=new P,Ga=new P,ru=new P,Wa=new ui,Ro=class extends Lt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){let r=Math.pow(10,4),o=Math.cos(_r*n),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,u=[0,0,0],h=["a","b","c"],f=new Array(3),d={},m=[];for(let _=0;_<c;_+=3){a?(u[0]=a.getX(_),u[1]=a.getX(_+1),u[2]=a.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);let{a:x,b:g,c:p}=Wa;if(x.fromBufferAttribute(l,u[0]),g.fromBufferAttribute(l,u[1]),p.fromBufferAttribute(l,u[2]),Wa.getNormal(ru),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let w=0;w<3;w++){let S=(w+1)%3,y=f[w],D=f[S],R=Wa[h[w]],I=Wa[h[S]],U=`${y}_${D}`,M=`${D}_${y}`;M in d&&d[M]?(ru.dot(d[M].normal)<=o&&(m.push(R.x,R.y,R.z),m.push(I.x,I.y,I.z)),d[M]=null):U in d||(d[U]={index0:u[w],index1:u[S],normal:ru.clone()})}}for(let _ in d)if(d[_]){let{index0:x,index1:g}=d[_];Va.fromBufferAttribute(l,x),Ga.fromBufferAttribute(l,g),m.push(Va.x,Va.y,Va.z),m.push(Ga.x,Ga.y,Ga.z)}this.setAttribute("position",new Nt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var gi=class s extends Lt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let o=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,f=e/l,d=n/c,m=[],_=[],x=[],g=[];for(let p=0;p<h;p++){let w=p*d-a;for(let S=0;S<u;S++){let y=S*f-o;_.push(y,-w,0),x.push(0,0,1),g.push(S/l),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<l;w++){let S=w+u*p,y=w+u*(p+1),D=w+1+u*(p+1),R=w+1+u*p;m.push(S,y,R),m.push(y,D,R)}this.setIndex(m),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Co=class s extends Lt{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),u=0,h=[],f=new P,d=new P,m=[],_=[],x=[],g=[];for(let p=0;p<=i;p++){let w=[],S=p/i,y=0;p===0&&a===0?y=.5/n:p===i&&c===Math.PI&&(y=-.5/n);for(let D=0;D<=n;D++){let R=D/n;f.x=-e*Math.cos(r+R*o)*Math.sin(a+S*l),f.y=e*Math.cos(a+S*l),f.z=e*Math.sin(r+R*o)*Math.sin(a+S*l),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(R+y,1-S),w.push(u++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<n;w++){let S=h[p][w+1],y=h[p][w],D=h[p+1][w],R=h[p+1][w+1];(p!==0||a>0)&&m.push(S,y,R),(p!==i-1||c<Math.PI)&&m.push(y,D,R)}this.setIndex(m),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Po=class extends Lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let n=[],i=new Set,r=new P,o=new P;if(e.index!==null){let a=e.attributes.position,l=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){let f=c[u],d=f.start,m=f.count;for(let _=d,x=d+m;_<x;_+=3)for(let g=0;g<3;g++){let p=l.getX(_+g),w=l.getX(_+(g+1)%3);r.fromBufferAttribute(a,p),o.fromBufferAttribute(a,w),od(r,o,i)===!0&&(n.push(r.x,r.y,r.z),n.push(o.x,o.y,o.z))}}}else{let a=e.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let u=0;u<3;u++){let h=3*l+u,f=3*l+(u+1)%3;r.fromBufferAttribute(a,h),o.fromBufferAttribute(a,f),od(r,o,i)===!0&&(n.push(r.x,r.y,r.z),n.push(o.x,o.y,o.z))}}this.setAttribute("position",new Nt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function od(s,e,n){let i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}var Rn=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_n=class extends Rn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Tr=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nl=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xa(s,e,n){return!s||!n&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function h0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function f0(s){function e(r,o){return s[r]-s[o]}let n=s.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i}function ad(s,e,n){let i=s.length,r=new s.constructor(i);for(let o=0,a=0;a!==i;++o){let l=n[o]*e;for(let c=0;c!==e;++c)r[a++]=s[l+c]}return r}function ip(s,e,n,i){let r=1,o=s[0];for(;o!==void 0&&o[i]===void 0;)o=s[r++];if(o===void 0)return;let a=o[i];if(a!==void 0)if(Array.isArray(a))do a=o[i],a!==void 0&&(e.push(o.time),n.push.apply(n,a)),o=s[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[i],a!==void 0&&(e.push(o.time),a.toArray(n,n.length)),o=s[r++];while(o!==void 0);else do a=o[i],a!==void 0&&(e.push(o.time),n.push(a)),o=s[r++];while(o!==void 0)}var Gi=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],o=n[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let l=i+2;;){if(r===void 0){if(e<o)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(o=r,r=n[++i],e<r)break e}a=n.length;break t}if(!(e>=o)){let l=n[1];e<l&&(i=2,o=l);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=n[--i-1],e>=o)break e}a=i,i=0;break t}break n}for(;i<a;){let l=i+a>>>1;e<n[l]?a=l:i=l+1}if(r=n[i],o=n[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let a=0;a!==r;++a)n[a]=i[o+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},il=class extends Gi{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cu,endingEnd:cu}}intervalChanged_(e,n,i){let r=this.parameterPositions,o=e-2,a=e+1,l=r[o],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case uu:o=e,l=2*n-i;break;case hu:o=r.length-2,l=n+r[o]-r[o+1];break;default:o=e,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case uu:a=e,c=2*i-n;break;case hu:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=n}let u=(i-n)*.5,h=this.valueSize;this._weightPrev=u/(n-l),this._weightNext=u/(c-i),this._offsetPrev=o*h,this._offsetNext=a*h}interpolate_(e,n,i,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(i-n)/(r-n),x=_*_,g=x*_,p=-d*g+2*d*x-d*_,w=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*_+1,S=(-1-m)*g+(1.5+m)*x+.5*_,y=m*g-m*x;for(let D=0;D!==l;++D)o[D]=p*a[h+D]+w*a[u+D]+S*a[c+D]+y*a[f+D];return o}},sl=class extends Gi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=(i-n)/(r-n),f=1-h;for(let d=0;d!==l;++d)o[d]=a[u+d]*f+a[c+d]*h;return o}},rl=class extends Gi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xa(n,this.TimeBufferType),this.values=Xa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Xa(e.times,Array),values:Xa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new il(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Rs:n=this.InterpolantFactoryMethodDiscrete;break;case Cs:n=this.InterpolantFactoryMethodLinear;break;case Ya:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,o=0,a=r-1;for(;o!==r&&i[o]<e;)++o;for(;a!==-1&&i[a]>n;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);let l=this.getValueSize();this.times=i.slice(o,a),this.values=this.values.slice(o*l,a*l)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==o;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(r!==void 0&&h0(r))for(let l=0,c=r.length;l!==c;++l){let u=r[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ya,o=e.length-1,a=1;for(let l=1;l<o;++l){let c=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(r)c=!0;else{let f=l*i,d=f-i,m=f+i;for(let _=0;_!==i;++_){let x=n[f+_];if(x!==n[d+_]||x!==n[m+_]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let f=l*i,d=a*i;for(let m=0;m!==i;++m)n[d+m]=n[f+m]}++a}}if(o>0){e[a]=e[o];for(let l=o*i,c=a*i,u=0;u!==i;++u)n[c+u]=n[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Cs;var Wi=class extends Un{constructor(e,n,i){super(e,n,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Rs;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends Un{};Io.prototype.ValueTypeName="color";var _i=class extends Un{};_i.prototype.ValueTypeName="number";var ol=class extends Gi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-n)/(r-n),u=e*l;for(let h=u+l;u!==h;u+=4)Sn.slerpFlat(o,0,a,u-l,a,u,c);return o}},xi=class extends Un{InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}};xi.prototype.ValueTypeName="quaternion";xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Un{constructor(e,n,i){super(e,n,i)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Rs;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends Un{};vi.prototype.ValueTypeName="vector";var Lo=class{constructor(e="",n=-1,i=[],r=kd){this.name=e,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){let n=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,l=i.length;a!==l;++a)n.push(p0(i[a]).scale(r));let o=new this(e.name,e.duration,n,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){let n=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=i.length;o!==a;++o)n.push(Un.toJSON(i[o]));return r}static CreateFromMorphTargetSequence(e,n,i,r){let o=n.length,a=[];for(let l=0;l<o;l++){let c=[],u=[];c.push((l+o-1)%o,l,(l+1)%o),u.push(0,1,0);let h=f0(c);c=ad(c,1,h),u=ad(u,1,h),!r&&c[0]===0&&(c.push(o),u.push(u[0])),a.push(new _i(".morphTargetInfluences["+n[l].name+"]",c,u).scale(1/i))}return new this(e,-1,a)}static findByName(e,n){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,n,i){let r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){let u=e[l],h=u.name.match(o);if(h&&h.length>1){let f=h[1],d=r[f];d||(r[f]=d=[]),d.push(u)}}let a=[];for(let l in r)a.push(this.CreateFromMorphTargetSequence(l,r[l],n,i));return a}static parseAnimation(e,n){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(f,d,m,_,x){if(m.length!==0){let g=[],p=[];ip(m,g,p,_),g.length!==0&&x.push(new f(d,g,p))}},r=[],o=e.name||"default",a=e.fps||30,l=e.blendMode,c=e.length||-1,u=e.hierarchy||[];for(let f=0;f<u.length;f++){let d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)m[d[_].morphTargets[x]]=-1;for(let x in m){let g=[],p=[];for(let w=0;w!==d[_].morphTargets.length;++w){let S=d[_];g.push(S.time),p.push(S.morphTarget===x?1:0)}r.push(new _i(".morphTargetInfluence["+x+"]",g,p))}c=m.length*a}else{let m=".bones["+n[f].name+"]";i(vi,m+".position",d,"pos",r),i(xi,m+".quaternion",d,"rot",r),i(vi,m+".scale",d,"scl",r)}}return r.length===0?null:new this(o,c,r,l)}resetDuration(){let e=this.tracks,n=0;for(let i=0,r=e.length;i!==r;++i){let o=this.tracks[i];n=Math.max(n,o.times[o.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function d0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _i;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return Io;case"quaternion":return xi;case"bool":case"boolean":return Wi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function p0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=d0(s.type);if(s.times===void 0){let n=[],i=[];ip(s.keys,n,i,"value"),s.times=n,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var zi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},al=class{constructor(e,n,i){let r=this,o=!1,a=0,l=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){l++,o===!1&&r.onStart!==void 0&&r.onStart(h,a,l),o=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,l),a===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let m=u[f],_=u[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},sp=new al,yi=class{constructor(e){this.manager=e!==void 0?e:sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi={},pu=class extends Error{constructor(e,n){super(e),this.response=n}},Ar=class extends yi{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=zi.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(o),this.manager.itemEnd(e)},0),o;if(Bi[e]!==void 0){Bi[e].push({onLoad:n,onProgress:i,onError:r});return}Bi[e]=[],Bi[e].push({onLoad:n,onProgress:i,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let h=Bi[e],f=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),m=d?parseInt(d):0,_=m!==0,x=0,g=new ReadableStream({start(p){w();function w(){f.read().then(({done:S,value:y})=>{if(S)p.close();else{x+=y.byteLength;let D=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let R=0,I=h.length;R<I;R++){let U=h[R];U.onProgress&&U.onProgress(D)}p.enqueue(y),w()}},S=>{p.error(S)})}}});return new Response(g)}else throw new pu(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return u.json();default:if(l===void 0)return u.text();{let f=/charset="?([^;"\s]*)"?/i.exec(l),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return u.arrayBuffer().then(_=>m.decode(_))}}}).then(u=>{zi.add(e,u);let h=Bi[e];delete Bi[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onLoad&&m.onLoad(u)}}).catch(u=>{let h=Bi[e];if(h===void 0)throw this.manager.itemError(e),u;delete Bi[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ll=class extends yi{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,a=zi.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(a),o.manager.itemEnd(e)},0),a;let l=yr("img");function c(){h(),zi.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(f){h(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}};var Do=class extends yi{constructor(e){super(e)}load(e,n,i,r){let o=new Ht,a=new ll(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){o.image=l,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}},Ls=class extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var ou=new Ze,ld=new P,cd=new P,Uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;ld.setFromMatrixPosition(e.matrixWorld),n.position.copy(ld),cd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(cd),n.updateMatrixWorld(),ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mu=class extends Uo{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let n=this.camera,i=Ps*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},No=class extends Ls{constructor(e,n,i=0,r=Math.PI/3,o=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new mu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ud=new Ze,lo=new P,au=new P,gu=class extends Uo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){let i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),i.position.copy(lo),au.copy(i.position),au.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(au),i.updateMatrixWorld(),r.makeTranslation(-lo.x,-lo.y,-lo.z),ud.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}},Ds=class extends Ls{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ri=class extends _o{constructor(e=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},_u=class extends Uo{constructor(){super(new ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends Ls{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new _u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Oo=class extends Ls{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var qi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let n="";for(let i=0,r=e.length;i<r;i++)n+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(e){let n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}},Fo=class extends Lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Bo=class extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,a=zi.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(u=>{n&&n(u),o.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){n&&n(a),o.manager.itemEnd(e)},0),a}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;let c=fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(u){return zi.add(e,u),n&&n(u),o.manager.itemEnd(e),u}).catch(function(u){r&&r(u),zi.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});zi.add(e,c),o.manager.itemStart(e)}};var cl=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var Gu="\\[\\]\\.:\\/",m0=new RegExp("["+Gu+"]","g"),Wu="[^"+Gu+"]",g0="[^"+Gu.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",Wu),x0=/(WCOD+)?/.source.replace("WCOD",g0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),M0=new RegExp("^"+_0+x0+v0+y0+"$"),b0=["material","materials","bones","map"],xu=class{constructor(e,n,i){let r=i||Et.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Et=class s{constructor(e,n,i){this.path=n,this.parsedPath=i||s.parseTrackName(n),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,n,i):new s(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(e){let n=M0.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);b0.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,o=n.propertyIndex;if(e||(e=s.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=xu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rS=new Float32Array(1);var hs=class extends ls{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){let n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}};var hd=new Ze,zo=class{constructor(e,n,i=0,r=1/0){this.ray=new pi(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(e,n=!0,i=[]){return vu(e,this,i,n),i.sort(fd),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)vu(e[r],this,i,n);return i.sort(fd),i}};function fd(s,e){return s.distance-e.distance}function vu(s,e,n,i){let r=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){let o=s.children;for(let a=0,l=o.length;a<l;a++)vu(o[a],e,n,!0)}}var Rr=class{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var dd=new P,qa=new P,ko=class{constructor(e=new P,n=new P){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){dd.subVectors(e,this.start),qa.subVectors(this.end,this.start);let i=qa.dot(qa),o=qa.dot(dd)/i;return n&&(o=et(o,0,1)),o}closestPointToPoint(e,n,i){let r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ho=class extends di{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function Xu(s,e,n,i){let r=S0(i);switch(n){case Pu:return s*e;case Lu:return s*e;case Du:return s*e*2;case wl:return s*e/r.components*r.byteLength;case Tl:return s*e/r.components*r.byteLength;case Uu:return s*e*2/r.components*r.byteLength;case Al:return s*e*2/r.components*r.byteLength;case Iu:return s*e*3/r.components*r.byteLength;case jt:return s*e*4/r.components*r.byteLength;case Rl:return s*e*4/r.components*r.byteLength;case qo:case Yo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zo:case $o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Ll:return Math.max(s,16)*Math.max(e,8)/4;case Cl:case Il:return Math.max(s,8)*Math.max(e,8)/2;case Dl:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ko:case Kl:case Jl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Nu:case jl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ql:case ec:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function S0(s){switch(s){case Gn:case Au:return{byteLength:1,components:1};case Pr:case Ru:case Zi:return{byteLength:2,components:1};case Sl:case El:return{byteLength:2,components:4};case ps:case bl:case Cn:return{byteLength:4,components:1};case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);function Rp(){let s=null,e=!1,n=null,i=null;function r(o,a){n(o,a),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){s=o}}}function E0(s){let e=new WeakMap;function n(l,c){let u=l.array,h=l.usage,f=u.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,u,h),l.onUploadCallback();let m;if(u instanceof Float32Array)m=s.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=s.SHORT;else if(u instanceof Uint32Array)m=s.UNSIGNED_INT;else if(u instanceof Int32Array)m=s.INT;else if(u instanceof Int8Array)m=s.BYTE;else if(u instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,c,u){let h=c.array,f=c.updateRanges;if(s.bindBuffer(u,l),f.length===0)s.bufferSubData(u,0,h);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){let _=f[d],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){let x=f[m];s.bufferSubData(u,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(s.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:o,update:a}}var w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
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
}`,d_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
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
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
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
#endif`,S_=`struct PhysicalMaterial {
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
}`,E_=`
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
#endif`,w_=`#if defined( RE_IndirectDiffuse )
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
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
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cx=`float getShadowMask() {
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
}`,ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
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
}`,Ix=`#if DEPTH_PACKING == 3200
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
}`,Lx=`#define DISTANCE
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
}`,Dx=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`uniform float scale;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 diffuse;
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
}`,kx=`#define LAMBERT
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
}`,Hx=`#define LAMBERT
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
}`,Vx=`#define MATCAP
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
}`,Gx=`#define MATCAP
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define PHONG
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
}`,Yx=`#define PHONG
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
}`,Zx=`#define STANDARD
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
}`,$x=`#define STANDARD
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
}`,Kx=`#define TOON
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
}`,Jx=`#define TOON
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
}`,jx=`uniform float size;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,tv=`uniform vec3 color;
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
}`,nv=`uniform float rotation;
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
}`,iv=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:w0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:N0,beginnormal_vertex:O0,bsdfs:F0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:Y0,common:Z0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:K0,displacementmap_pars_vertex:J0,displacementmap_vertex:j0,emissivemap_fragment:Q0,emissivemap_pars_fragment:e_,colorspace_fragment:t_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:s_,envmap_pars_fragment:r_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:__,envmap_vertex:a_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:u_,fog_pars_fragment:h_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:d_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:x_,lights_toon_pars_fragment:v_,lights_phong_fragment:y_,lights_phong_pars_fragment:M_,lights_physical_fragment:b_,lights_physical_pars_fragment:S_,lights_fragment_begin:E_,lights_fragment_maps:w_,lights_fragment_end:T_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:P_,map_fragment:I_,map_pars_fragment:L_,map_particle_fragment:D_,map_particle_pars_fragment:U_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:O_,morphinstance_vertex:F_,morphcolor_vertex:B_,morphnormal_vertex:z_,morphtarget_pars_vertex:k_,morphtarget_vertex:H_,normal_fragment_begin:V_,normal_fragment_maps:G_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:$_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:J_,opaque_fragment:j_,packing:Q_,premultiplied_alpha_fragment:ex,project_vertex:tx,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:sx,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:ax,shadowmap_vertex:lx,shadowmask_pars_fragment:cx,skinbase_vertex:ux,skinning_pars_vertex:hx,skinning_vertex:fx,skinnormal_vertex:dx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:_x,transmission_fragment:xx,transmission_pars_fragment:vx,uv_pars_fragment:yx,uv_pars_vertex:Mx,uv_vertex:bx,worldpos_vertex:Sx,background_vert:Ex,background_frag:wx,backgroundCube_vert:Tx,backgroundCube_frag:Ax,cube_vert:Rx,cube_frag:Cx,depth_vert:Px,depth_frag:Ix,distanceRGBA_vert:Lx,distanceRGBA_frag:Dx,equirect_vert:Ux,equirect_frag:Nx,linedashed_vert:Ox,linedashed_frag:Fx,meshbasic_vert:Bx,meshbasic_frag:zx,meshlambert_vert:kx,meshlambert_frag:Hx,meshmatcap_vert:Vx,meshmatcap_frag:Gx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:Yx,meshphysical_vert:Zx,meshphysical_frag:$x,meshtoon_vert:Kx,meshtoon_frag:Jx,points_vert:jx,points_frag:Qx,shadow_vert:ev,shadow_frag:tv,sprite_vert:nv,sprite_frag:iv},Ee={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},wn={basic:{uniforms:xn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:xn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:xn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:xn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:xn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:xn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:xn([Ee.points,Ee.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:xn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:xn([Ee.common,Ee.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:xn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:xn([Ee.sprite,Ee.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:xn([Ee.common,Ee.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:xn([Ee.lights,Ee.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};wn.physical={uniforms:xn([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var tc={r:0,b:0,g:0},Hs=new si,sv=new Ze;function rv(s,e,n,i,r,o,a){let l=new Ue(0),c=o===!0?0:1,u,h,f=null,d=0,m=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?n:e).get(y)),y}function x(S){let y=!1,D=_(S);D===null?p(l,c):D&&D.isColor&&(p(D,1),y=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(S,y){let D=_(y);D&&(D.isCubeTexture||D.mapping===Xo)?(h===void 0&&(h=new Qe(new as(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:ks(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Hs.copy(y.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(Hs)),h.material.toneMapped=lt.getTransfer(D.colorSpace)!==vt,(f!==D||d!==D.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,f=D,d=D.version,m=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new Qe(new gi(2,2),new Vt({name:"BackgroundMaterial",uniforms:ks(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=lt.getTransfer(D.colorSpace)!==vt,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||d!==D.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,f=D,d=D.version,m=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null))}function p(S,y){S.getRGB(tc,Vu(s)),i.buffers.color.setClear(tc.r,tc.g,tc.b,y,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return l},setClearColor:function(S,y=1){l.set(S),c=y,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(l,c)},render:x,addToRenderList:g,dispose:w}}function ov(s,e){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},r=d(null),o=r,a=!1;function l(b,B,$,F,X){let J=!1,K=f(F,$,B);o!==K&&(o=K,u(o.object)),J=m(b,F,$,X),J&&_(b,F,$,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(b,B,$,F),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return s.createVertexArray()}function u(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function f(b,B,$){let F=$.wireframe===!0,X=i[b.id];X===void 0&&(X={},i[b.id]=X);let J=X[B.id];J===void 0&&(J={},X[B.id]=J);let K=J[F];return K===void 0&&(K=d(c()),J[F]=K),K}function d(b){let B=[],$=[],F=[];for(let X=0;X<n;X++)B[X]=0,$[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:F,object:b,attributes:{},index:null}}function m(b,B,$,F){let X=o.attributes,J=B.attributes,K=0,oe=$.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let he=X[Y],Se=J[Y];if(Se===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;K++}return o.attributesNum!==K||o.index!==F}function _(b,B,$,F){let X={},J=B.attributes,K=0,oe=$.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let he=J[Y];he===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(he=b.instanceColor));let Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),X[Y]=Se,K++}o.attributes=X,o.attributesNum=K,o.index=F}function x(){let b=o.newAttributes;for(let B=0,$=b.length;B<$;B++)b[B]=0}function g(b){p(b,0)}function p(b,B){let $=o.newAttributes,F=o.enabledAttributes,X=o.attributeDivisors;$[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),X[b]!==B&&(s.vertexAttribDivisor(b,B),X[b]=B)}function w(){let b=o.newAttributes,B=o.enabledAttributes;for(let $=0,F=B.length;$<F;$++)B[$]!==b[$]&&(s.disableVertexAttribArray($),B[$]=0)}function S(b,B,$,F,X,J,K){K===!0?s.vertexAttribIPointer(b,B,$,X,J):s.vertexAttribPointer(b,B,$,F,X,J)}function y(b,B,$,F){x();let X=F.attributes,J=$.getAttributes(),K=B.defaultAttributeValues;for(let oe in J){let Y=J[oe];if(Y.location>=0){let te=X[oe];if(te===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){let he=te.normalized,Se=te.itemSize,ue=e.get(te);if(ue===void 0)continue;let me=ue.buffer,G=ue.type,ae=ue.bytesPerElement,ce=G===s.INT||G===s.UNSIGNED_INT||te.gpuType===bl;if(te.isInterleavedBufferAttribute){let fe=te.data,ge=fe.stride,_e=te.offset;if(fe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Y.locationSize;Oe++)p(Y.location+Oe,fe.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Oe=0;Oe<Y.locationSize;Oe++)g(Y.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,me);for(let Oe=0;Oe<Y.locationSize;Oe++)S(Y.location+Oe,Se/Y.locationSize,G,he,ge*ae,(_e+Se/Y.locationSize*Oe)*ae,ce)}else{if(te.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)p(Y.location+fe,te.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<Y.locationSize;fe++)g(Y.location+fe);s.bindBuffer(s.ARRAY_BUFFER,me);for(let fe=0;fe<Y.locationSize;fe++)S(Y.location+fe,Se/Y.locationSize,G,he,Se*ae,Se/Y.locationSize*fe*ae,ce)}}else if(K!==void 0){let he=K[oe];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(Y.location,he);break;case 3:s.vertexAttrib3fv(Y.location,he);break;case 4:s.vertexAttrib4fv(Y.location,he);break;default:s.vertexAttrib1fv(Y.location,he)}}}}w()}function D(){U();for(let b in i){let B=i[b];for(let $ in B){let F=B[$];for(let X in F)h(F[X].object),delete F[X];delete B[$]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;let B=i[b.id];for(let $ in B){let F=B[$];for(let X in F)h(F[X].object),delete F[X];delete B[$]}delete i[b.id]}function I(b){for(let B in i){let $=i[B];if($[b.id]===void 0)continue;let F=$[b.id];for(let X in F)h(F[X].object),delete F[X];delete $[b.id]}}function U(){M(),a=!0,o!==r&&(o=r,u(o.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:U,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function av(s,e,n){let i;function r(u){i=u}function o(u,h){s.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,f){f!==0&&(s.drawArraysInstanced(i,u,h,f),n.update(h,i,f))}function l(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];n.update(m,i,1)}function c(u,h,f,d){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)a(u[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,h,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=h[x]*d[x];n.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function lv(s,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==jt&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(I){let U=I===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Gn&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Cn&&!U)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp",h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:D,maxSamples:R}}function cv(s){let e=this,n=null,i=0,r=!1,o=!1,a=new mn,l=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,m){let _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!r||_===null||_.length===0||o&&!g)o?h(null):u();else{let w=o?0:i,S=w*4,y=p.clippingState||null;c.value=y,y=h(_,d,S,m);for(let D=0;D!==S;++D)y[D]=n[D];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,_){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=c.value,_!==!0||g===null){let p=m+x*4,w=d.matrixWorldInverse;l.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=m;S!==x;++S,y+=4)a.copy(f[S]).applyMatrix4(w,l),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function uv(s){let e=new WeakMap;function n(a,l){return l===vl?a.mapping=Us:l===yl&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){let l=a.mapping;if(l===vl||l===yl)if(e.has(a)){let c=e.get(a).texture;return n(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let u=new Qa(c.height);return u.fromEquirectangularTexture(s,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}var Dr=4,rp=[.125,.215,.35,.446,.526,.582],Ws=20,qu=new ri,op=new Ue,Yu=null,Zu=0,$u=0,Ku=!1,Gs=(1+Math.sqrt(5))/2,Lr=1/Gs,ap=[new P(-Gs,Lr,0),new P(Gs,Lr,0),new P(-Lr,0,Gs),new P(Lr,0,Gs),new P(0,Gs,-Lr),new P(0,Gs,Lr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Nr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,Zu,$u),this._renderer.xr.enabled=Ku,e.scissorTest=!1,nc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Zi,format:jt,colorSpace:nn,depthBuffer:!1},r=lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,n,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hv(o)),this._blurMaterial=fv(o,e,n)}return r}_compileMaterial(e){let n=new Qe(this._lodPlanes[0],e);this._renderer.compile(n,qu)}_sceneToCubeUV(e,n,i,r){let l=new Bt(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(op),h.toneMapping=oi,h.autoClear=!1;let m=new rn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new Qe(new as,m),x=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,x=!0):(m.color.copy(op),x=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(l.up.set(0,c[p],0),l.lookAt(u[p],0,0)):w===1?(l.up.set(0,0,c[p]),l.lookAt(0,u[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,u[p]));let S=this._cubeSize;nc(r,w*S,p>2?S:0,S,S),h.setRenderTarget(r),x&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Us||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());let o=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;let c=this._cubeSize;nc(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,qu)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let o=1;o<r;o++){let a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=ap[(r-o-1)%ap.length];this._blur(e,o-1,o,a,l)}n.autoClear=i}_blur(e,n,i,r,o){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,a,l){let c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Qe(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ws-1),x=o/_,g=isFinite(o)?1+Math.floor(h*x):Ws;g>Ws&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ws}`);let p=[],w=0;for(let I=0;I<Ws;++I){let U=I/x,M=Math.exp(-U*U/2);p.push(M),I===0?w+=M:I<g&&(w+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",l&&(d.poleAxis.value=l);let{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;let y=this._sizeLods[r],D=3*y*(r>S-Dr?r-S+Dr:0),R=4*(this._cubeSize-y);nc(n,D,R,3*y,2*y),c.setRenderTarget(n),c.render(f,qu)}};function hv(s){let e=[],n=[],i=[],r=s,o=s-Dr+1+rp.length;for(let a=0;a<o;a++){let l=Math.pow(2,r);n.push(l);let c=1/l;a>s-Dr?c=rp[a-s+Dr-1]:a===0&&(c=0),i.push(c);let u=1/(l-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,x=3,g=2,p=1,w=new Float32Array(x*_*m),S=new Float32Array(g*_*m),y=new Float32Array(p*_*m);for(let R=0;R<m;R++){let I=R%3*2/3-1,U=R>2?0:-1,M=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];w.set(M,x*_*R),S.set(d,g*_*R);let b=[R,R,R,R,R,R];y.set(b,p*_*R)}let D=new Lt;D.setAttribute("position",new wt(w,x)),D.setAttribute("uv",new wt(S,g)),D.setAttribute("faceIndex",new wt(y,p)),e.push(D),r>Dr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lp(s,e,n){let i=new sn(s,e,n);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nc(s,e,n,i,r){s.viewport.set(e,n,i,r),s.scissor.set(e,n,i,r)}function fv(s,e,n){let i=new Float32Array(Ws),r=new P(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function cp(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function up(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function dv(s){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){let c=l.mapping,u=c===vl||c===yl,h=c===Us||c===Ns;if(u||h){let f=e.get(l),d=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return n===null&&(n=new Nr(s)),f=u?n.fromEquirectangular(l,f):n.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),f.texture;if(f!==void 0)return f.texture;{let m=l.image;return u&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new Nr(s)),f=u?n.fromEquirectangular(l):n.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),l.addEventListener("dispose",o),f.texture):null}}}return l}function r(l){let c=0,u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function o(l){let c=l.target;c.removeEventListener("dispose",o);let u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function pv(s){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&zs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mv(s,e,n,i){let r={},o=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];let m=o.get(d);m&&(e.remove(m),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function l(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(f){let d=f.attributes;for(let m in d)e.update(d[m],s.ARRAY_BUFFER)}function u(f){let d=[],m=f.index,_=f.attributes.position,x=0;if(m!==null){let w=m.array;x=m.version;for(let S=0,y=w.length;S<y;S+=3){let D=w[S+0],R=w[S+1],I=w[S+2];d.push(D,R,R,I,I,D)}}else if(_!==void 0){let w=_.array;x=_.version;for(let S=0,y=w.length/3-1;S<y;S+=3){let D=S+0,R=S+1,I=S+2;d.push(D,R,R,I,I,D)}}else return;let g=new(Hu(d)?go:mo)(d,1);g.version=x;let p=o.get(f);p&&e.remove(p),o.set(f,g)}function h(f){let d=o.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return o.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function gv(s,e,n){let i;function r(d){i=d}let o,a;function l(d){o=d.type,a=d.bytesPerElement}function c(d,m){s.drawElements(i,m,o,d*a),n.update(m,i,1)}function u(d,m,_){_!==0&&(s.drawElementsInstanced(i,m,o,d*a,_),n.update(m,i,_))}function h(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,d,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];n.update(g,i,1)}function f(d,m,_,x){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)u(d[p]/a,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,o,d,0,x,0,_);let p=0;for(let w=0;w<_;w++)p+=m[w]*x[w];n.update(p,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function _v(s){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,l){switch(n.calls++,a){case s.TRIANGLES:n.triangles+=l*(o/3);break;case s.LINES:n.lines+=l*(o/2);break;case s.LINE_STRIP:n.lines+=l*(o-1);break;case s.LINE_LOOP:n.lines+=l*o;break;case s.POINTS:n.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xv(s,e,n){let i=new WeakMap,r=new st;function o(a,l,c){let u=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(l);if(d===void 0||d.count!==f){let M=function(){I.dispose(),i.delete(l),l.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let m=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],w=l.morphAttributes.color||[],S=0;m===!0&&(S=1),_===!0&&(S=2),x===!0&&(S=3);let y=l.attributes.position.count*S,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*D*4*f),I=new po(R,y,D,f);I.type=Cn,I.needsUpdate=!0;let U=S*4;for(let b=0;b<f;b++){let B=g[b],$=p[b],F=w[b],X=y*D*4*b;for(let J=0;J<B.count;J++){let K=J*U;m===!0&&(r.fromBufferAttribute(B,J),R[X+K+0]=r.x,R[X+K+1]=r.y,R[X+K+2]=r.z,R[X+K+3]=0),_===!0&&(r.fromBufferAttribute($,J),R[X+K+4]=r.x,R[X+K+5]=r.y,R[X+K+6]=r.z,R[X+K+7]=0),x===!0&&(r.fromBufferAttribute(F,J),R[X+K+8]=r.x,R[X+K+9]=r.y,R[X+K+10]=r.z,R[X+K+11]=F.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new Ne(y,D)},i.set(l,d),l.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,n);else{let m=0;for(let x=0;x<u.length;x++)m+=u[x];let _=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",u)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function vv(s,e,n,i){let r=new WeakMap;function o(c){let u=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}var Cp=new Ht,hp=new Ao(1,1),Pp=new po,Ip=new Ja,Lp=new xo,fp=[],dp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function Or(s,e,n){let i=s[0];if(i<=0||i>0)return s;let r=e*n,o=fp[r];if(o===void 0&&(o=new Float32Array(r),fp[r]=o),e!==0){i.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=n,s[a].toArray(o,l)}return o}function Gt(s,e){if(s.length!==e.length)return!1;for(let n=0,i=s.length;n<i;n++)if(s[n]!==e[n])return!1;return!0}function Wt(s,e){for(let n=0,i=e.length;n<i;n++)s[n]=e[n]}function rc(s,e){let n=dp[e];n===void 0&&(n=new Int32Array(e),dp[e]=n);for(let i=0;i!==e;++i)n[i]=s.allocateTextureUnit();return n}function yv(s,e){let n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Mv(s,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;s.uniform2fv(this.addr,e),Wt(n,e)}}function bv(s,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;s.uniform3fv(this.addr,e),Wt(n,e)}}function Sv(s,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;s.uniform4fv(this.addr,e),Wt(n,e)}}function Ev(s,e){let n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;gp.set(i),s.uniformMatrix2fv(this.addr,!1,gp),Wt(n,i)}}function wv(s,e){let n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;mp.set(i),s.uniformMatrix3fv(this.addr,!1,mp),Wt(n,i)}}function Tv(s,e){let n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;pp.set(i),s.uniformMatrix4fv(this.addr,!1,pp),Wt(n,i)}}function Av(s,e){let n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Rv(s,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;s.uniform2iv(this.addr,e),Wt(n,e)}}function Cv(s,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;s.uniform3iv(this.addr,e),Wt(n,e)}}function Pv(s,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;s.uniform4iv(this.addr,e),Wt(n,e)}}function Iv(s,e){let n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Lv(s,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;s.uniform2uiv(this.addr,e),Wt(n,e)}}function Dv(s,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;s.uniform3uiv(this.addr,e),Wt(n,e)}}function Uv(s,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;s.uniform4uiv(this.addr,e),Wt(n,e)}}function Nv(s,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);let o;this.type===s.SAMPLER_2D_SHADOW?(hp.compareFunction=Bu,o=hp):o=Cp,n.setTexture2D(e||o,r)}function Ov(s,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ip,r)}function Fv(s,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lp,r)}function Bv(s,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Pp,r)}function zv(s){switch(s){case 5126:return yv;case 35664:return Mv;case 35665:return bv;case 35666:return Sv;case 35674:return Ev;case 35675:return wv;case 35676:return Tv;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Iv;case 36294:return Lv;case 36295:return Dv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Bv}}function kv(s,e){s.uniform1fv(this.addr,e)}function Hv(s,e){let n=Or(e,this.size,2);s.uniform2fv(this.addr,n)}function Vv(s,e){let n=Or(e,this.size,3);s.uniform3fv(this.addr,n)}function Gv(s,e){let n=Or(e,this.size,4);s.uniform4fv(this.addr,n)}function Wv(s,e){let n=Or(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Xv(s,e){let n=Or(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function qv(s,e){let n=Or(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Yv(s,e){s.uniform1iv(this.addr,e)}function Zv(s,e){s.uniform2iv(this.addr,e)}function $v(s,e){s.uniform3iv(this.addr,e)}function Kv(s,e){s.uniform4iv(this.addr,e)}function Jv(s,e){s.uniform1uiv(this.addr,e)}function jv(s,e){s.uniform2uiv(this.addr,e)}function Qv(s,e){s.uniform3uiv(this.addr,e)}function ey(s,e){s.uniform4uiv(this.addr,e)}function ty(s,e,n){let i=this.cache,r=e.length,o=rc(n,r);Gt(i,o)||(s.uniform1iv(this.addr,o),Wt(i,o));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Cp,o[a])}function ny(s,e,n){let i=this.cache,r=e.length,o=rc(n,r);Gt(i,o)||(s.uniform1iv(this.addr,o),Wt(i,o));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ip,o[a])}function iy(s,e,n){let i=this.cache,r=e.length,o=rc(n,r);Gt(i,o)||(s.uniform1iv(this.addr,o),Wt(i,o));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Lp,o[a])}function sy(s,e,n){let i=this.cache,r=e.length,o=rc(n,r);Gt(i,o)||(s.uniform1iv(this.addr,o),Wt(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Pp,o[a])}function ry(s){switch(s){case 5126:return kv;case 35664:return Hv;case 35665:return Vv;case 35666:return Gv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Kv;case 5125:return Jv;case 36294:return jv;case 36295:return Qv;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}var ju=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zv(n.type)}},Qu=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ry(n.type)}},eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let o=0,a=r.length;o!==a;++o){let l=r[o];l.setValue(e,n[l.id],i)}}},Ju=/(\w+)(\])?(\[|\.)?/g;function _p(s,e){s.seq.push(e),s.map[e.id]=e}function oy(s,e,n){let i=s.name,r=i.length;for(Ju.lastIndex=0;;){let o=Ju.exec(i),a=Ju.lastIndex,l=o[1],c=o[2]==="]",u=o[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){_p(n,u===void 0?new ju(l,s,e):new Qu(l,s,e));break}else{let f=n.map[l];f===void 0&&(f=new eh(l),_p(n,f)),n=f}}}var Ur=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(n,r),a=e.getUniformLocation(n,o.name);oy(o,a,this)}}setValue(e,n,i,r){let o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){let l=n[o],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,o=e.length;r!==o;++r){let a=e[r];a.id in n&&i.push(a)}return i}};function xp(s,e,n){let i=s.createShader(e);return s.shaderSource(i,n),s.compileShader(i),i}var ay=37297,ly=0;function cy(s,e){let n=s.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=r;a<o;a++){let l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}var vp=new je;function uy(s){lt._getMatrix(vp,lt.workingColorSpace,s);let e=`mat3( ${vp.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(s)){case uo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yp(s,e,n){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+cy(s.getShaderSource(e),a)}else return r}function hy(s,e){let n=uy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function fy(s,e){let n;switch(e){case Dd:n="Linear";break;case Ud:n="Reinhard";break;case Nd:n="Cineon";break;case Wo:n="ACESFilmic";break;case Fd:n="AgX";break;case Bd:n="Neutral";break;case Od:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ic=new P;function dy(){lt.getLuminanceCoefficients(ic);let s=ic.x.toFixed(4),e=ic.y.toFixed(4),n=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function py(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function my(s){let e=[];for(let n in s){let i=s[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gy(s,e){let n={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=s.getActiveAttrib(e,r),a=o.name,l=1;o.type===s.FLOAT_MAT2&&(l=2),o.type===s.FLOAT_MAT3&&(l=3),o.type===s.FLOAT_MAT4&&(l=4),n[a]={type:o.type,location:s.getAttribLocation(e,a),locationSize:l}}return n}function Qo(s){return s!==""}function Mp(s,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(s){return s.replace(_y,vy)}var xy=new Map;function vy(s,e){let n=tt[e];if(n===void 0){let i=xy.get(e);if(i!==void 0)n=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return th(n)}var yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(s){return s.replace(yy,My)}function My(s,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ep(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function by(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Sy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ey(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function wy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wu:e="ENVMAP_BLENDING_MULTIPLY";break;case Id:e="ENVMAP_BLENDING_MIX";break;case Ld:e="ENVMAP_BLENDING_ADD";break}return e}function Ty(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ay(s,e,n,i){let r=s.getContext(),o=n.defines,a=n.vertexShader,l=n.fragmentShader,c=by(n),u=Sy(n),h=Ey(n),f=wy(n),d=Ty(n),m=py(n),_=my(o),x=r.createProgram(),g,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Qo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Qo).join(`
`),p.length>0&&(p+=`
`)):(g=[Ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),p=[Ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?tt.tonemapping_pars_fragment:"",n.toneMapping!==oi?fy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,hy("linearToOutputTexel",n.outputColorSpace),dy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qo).join(`
`)),a=th(a),a=Mp(a,n),a=bp(a,n),l=th(l),l=Mp(l,n),l=bp(l,n),a=Sp(a),l=Sp(l),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+g+a,y=w+p+l,D=xp(r,r.VERTEX_SHADER,S),R=xp(r,r.FRAGMENT_SHADER,y);r.attachShader(x,D),r.attachShader(x,R),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(B){if(s.debug.checkShaderErrors){let $=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(D).trim(),X=r.getShaderInfoLog(R).trim(),J=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,x,D,R);else{let oe=yp(r,D,"vertex"),Y=yp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+$+`
`+oe+`
`+Y)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(F===""||X==="")&&(K=!1);K&&(B.diagnostics={runnable:J,programLog:$,vertexShader:{log:F,prefix:g},fragmentShader:{log:X,prefix:p}})}r.deleteShader(D),r.deleteShader(R),U=new Ur(r,x),M=gy(r,x)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,ay)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=R,this}var Ry=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new ih(e),n.set(e,i)),i}},ih=class{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}};function Cy(s,e,n,i,r,o,a){let l=new Mr,c=new nh,u=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures,m=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return u.add(M),M===0?"uv":`uv${M}`}function g(M,b,B,$,F){let X=$.fog,J=F.geometry,K=M.isMeshStandardMaterial?$.environment:null,oe=(M.isMeshStandardMaterial?n:e).get(M.envMap||K),Y=oe&&oe.mapping===Xo?oe.image.height:null,te=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=he!==void 0?he.length:0,ue=0;J.morphAttributes.position!==void 0&&(ue=1),J.morphAttributes.normal!==void 0&&(ue=2),J.morphAttributes.color!==void 0&&(ue=3);let me,G,ae,ce;if(te){let Be=wn[te];me=Be.vertexShader,G=Be.fragmentShader}else me=M.vertexShader,G=M.fragmentShader,c.update(M),ae=c.getVertexShaderID(M),ce=c.getFragmentShaderID(M);let fe=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),_e=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,ct=!!M.map,$e=!!M.matcap,Je=!!oe,N=!!M.aoMap,gt=!!M.lightMap,qe=!!M.bumpMap,We=!!M.normalMap,Le=!!M.displacementMap,nt=!!M.emissiveMap,q=!!M.metalnessMap,T=!!M.roughnessMap,v=M.anisotropy>0,C=M.clearcoat>0,z=M.dispersion>0,W=M.iridescence>0,L=M.sheen>0,re=M.transmission>0,se=v&&!!M.anisotropyMap,ie=C&&!!M.clearcoatMap,Re=C&&!!M.clearcoatNormalMap,de=C&&!!M.clearcoatRoughnessMap,xe=W&&!!M.iridescenceMap,Ce=W&&!!M.iridescenceThicknessMap,Pe=L&&!!M.sheenColorMap,ye=L&&!!M.sheenRoughnessMap,Ve=!!M.specularMap,ve=!!M.specularColorMap,Ge=!!M.specularIntensityMap,O=re&&!!M.transmissionMap,Me=re&&!!M.thicknessMap,ne=!!M.gradientMap,le=!!M.alphaMap,we=M.alphaTest>0,Te=!!M.alphaHash,Ke=!!M.extensions,ht=oi;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ht=s.toneMapping);let Tt={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:me,fragmentShader:G,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:_e,instancingColor:_e&&F.instanceColor!==null,instancingMorph:_e&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:nn,alphaToCoverage:!!M.alphaToCoverage,map:ct,matcap:$e,envMap:Je,envMapMode:Je&&oe.mapping,envMapCubeUVHeight:Y,aoMap:N,lightMap:gt,bumpMap:qe,normalMap:We,displacementMap:d&&Le,emissiveMap:nt,normalMapObjectSpace:We&&M.normalMapType===Gd,normalMapTangentSpace:We&&M.normalMapType===Fu,metalnessMap:q,roughnessMap:T,anisotropy:v,anisotropyMap:se,clearcoat:C,clearcoatMap:ie,clearcoatNormalMap:Re,clearcoatRoughnessMap:de,dispersion:z,iridescence:W,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:L,sheenColorMap:Pe,sheenRoughnessMap:ye,specularMap:Ve,specularColorMap:ve,specularIntensityMap:Ge,transmission:re,transmissionMap:O,thicknessMap:Me,gradientMap:ne,opaque:M.transparent===!1&&M.blending===Hn&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:we,alphaHash:Te,combine:M.combine,mapUv:ct&&x(M.map.channel),aoMapUv:N&&x(M.aoMap.channel),lightMapUv:gt&&x(M.lightMap.channel),bumpMapUv:qe&&x(M.bumpMap.channel),normalMapUv:We&&x(M.normalMap.channel),displacementMapUv:Le&&x(M.displacementMap.channel),emissiveMapUv:nt&&x(M.emissiveMap.channel),metalnessMapUv:q&&x(M.metalnessMap.channel),roughnessMapUv:T&&x(M.roughnessMap.channel),anisotropyMapUv:se&&x(M.anisotropyMap.channel),clearcoatMapUv:ie&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(M.sheenRoughnessMap.channel),specularMapUv:Ve&&x(M.specularMap.channel),specularColorMapUv:ve&&x(M.specularColorMap.channel),specularIntensityMapUv:Ge&&x(M.specularIntensityMap.channel),transmissionMapUv:O&&x(M.transmissionMap.channel),thicknessMapUv:Me&&x(M.thicknessMap.channel),alphaMapUv:le&&x(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(We||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(ct||le),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:ct&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===vt,decodeVideoTextureEmissive:nt&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pt,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ke&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&M.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Tt.vertexUv1s=u.has(1),Tt.vertexUv2s=u.has(2),Tt.vertexUv3s=u.has(3),u.clear(),Tt}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let B in M.defines)b.push(B),b.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(w(b,M),S(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function w(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function S(M,b){l.disableAll(),b.supportsVertexTextures&&l.enable(0),b.instancing&&l.enable(1),b.instancingColor&&l.enable(2),b.instancingMorph&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),b.alphaHash&&l.enable(18),b.batching&&l.enable(19),b.dispersion&&l.enable(20),b.batchingColor&&l.enable(21),M.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.reverseDepthBuffer&&l.enable(4),b.skinning&&l.enable(5),b.morphTargets&&l.enable(6),b.morphNormals&&l.enable(7),b.morphColors&&l.enable(8),b.premultipliedAlpha&&l.enable(9),b.shadowMapEnabled&&l.enable(10),b.doubleSided&&l.enable(11),b.flipSided&&l.enable(12),b.useDepthPacking&&l.enable(13),b.dithering&&l.enable(14),b.transmission&&l.enable(15),b.sheen&&l.enable(16),b.opaque&&l.enable(17),b.pointsUvs&&l.enable(18),b.decodeVideoTexture&&l.enable(19),b.decodeVideoTextureEmissive&&l.enable(20),b.alphaToCoverage&&l.enable(21),M.push(l.mask)}function y(M){let b=_[M.type],B;if(b){let $=wn[b];B=jo.clone($.uniforms)}else B=M.uniforms;return B}function D(M,b){let B;for(let $=0,F=h.length;$<F;$++){let X=h[$];if(X.cacheKey===b){B=X,++B.usedTimes;break}}return B===void 0&&(B=new Ay(s,b,M,o),h.push(B)),B}function R(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function I(M){c.remove(M)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:U}}function Py(){let s=new WeakMap;function e(a){return s.has(a)}function n(a){let l=s.get(a);return l===void 0&&(l={},s.set(a,l)),l}function i(a){s.delete(a)}function r(a,l,c){s.get(a)[l]=c}function o(){s=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function Iy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Tp(){let s=[],e=0,n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,m,_,x,g){let p=s[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},s[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=g),e++,p}function l(f,d,m,_,x,g){let p=a(f,d,m,_,x,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function c(f,d,m,_,x,g){let p=a(f,d,m,_,x,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function u(f,d){n.length>1&&n.sort(f||Iy),i.length>1&&i.sort(d||wp),r.length>1&&r.sort(d||wp)}function h(){for(let f=e,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function Ly(){let s=new WeakMap;function e(i,r){let o=s.get(i),a;return o===void 0?(a=new Tp,s.set(i,[a])):r>=o.length?(a=new Tp,o.push(a)):a=o[r],a}function n(){s=new WeakMap}return{get:e,dispose:n}}function Dy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Ue};break;case"SpotLight":n={position:new P,direction:new P,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":n={color:new Ue,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=n,n}}}function Uy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}var Ny=0;function Oy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Fy(s){let e=new Dy,n=Uy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);let r=new P,o=new Ze,a=new Ze;function l(u){let h=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,_=0,x=0,g=0,p=0,w=0,S=0,y=0,D=0,R=0,I=0;u.sort(Oy);for(let M=0,b=u.length;M<b;M++){let B=u[M],$=B.color,F=B.intensity,X=B.distance,J=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=$.r*F,f+=$.g*F,d+=$.b*F;else if(B.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(B.sh.coefficients[K],F);I++}else if(B.isDirectionalLight){let K=e.get(B);if(K.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let oe=B.shadow,Y=n.get(B);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=B.shadow.matrix,w++}i.directional[m]=K,m++}else if(B.isSpotLight){let K=e.get(B);K.position.setFromMatrixPosition(B.matrixWorld),K.color.copy($).multiplyScalar(F),K.distance=X,K.coneCos=Math.cos(B.angle),K.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),K.decay=B.decay,i.spot[x]=K;let oe=B.shadow;if(B.map&&(i.spotLightMap[D]=B.map,D++,oe.updateMatrices(B),B.castShadow&&R++),i.spotLightMatrix[x]=oe.matrix,B.castShadow){let Y=n.get(B);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=J,y++}x++}else if(B.isRectAreaLight){let K=e.get(B);K.color.copy($).multiplyScalar(F),K.halfWidth.set(B.width*.5,0,0),K.halfHeight.set(0,B.height*.5,0),i.rectArea[g]=K,g++}else if(B.isPointLight){let K=e.get(B);if(K.color.copy(B.color).multiplyScalar(B.intensity),K.distance=B.distance,K.decay=B.decay,B.castShadow){let oe=B.shadow,Y=n.get(B);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,Y.shadowCameraNear=oe.camera.near,Y.shadowCameraFar=oe.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=B.shadow.matrix,S++}i.point[_]=K,_++}else if(B.isHemisphereLight){let K=e.get(B);K.skyColor.copy(B.color).multiplyScalar(F),K.groundColor.copy(B.groundColor).multiplyScalar(F),i.hemi[p]=K,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==w||U.numPointShadows!==S||U.numSpotShadows!==y||U.numSpotMaps!==D||U.numLightProbes!==I)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,U.directionalLength=m,U.pointLength=_,U.spotLength=x,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=w,U.numPointShadows=S,U.numSpotShadows=y,U.numSpotMaps=D,U.numLightProbes=I,i.version=Ny++)}function c(u,h){let f=0,d=0,m=0,_=0,x=0,g=h.matrixWorldInverse;for(let p=0,w=u.length;p<w;p++){let S=u[p];if(S.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(S.isSpotLight){let y=i.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(S.isRectAreaLight){let y=i.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:l,setupView:c,state:i}}function Ap(s){let e=new Fy(s),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(){e.setup(n)}function c(h){e.setupView(n,h)}let u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function By(s){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Ap(s),e.set(r,[l])):o>=a.length?(l=new Ap(s),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ky=`uniform sampler2D shadow_pass;
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
}`;function Hy(s,e,n){let i=new Er,r=new Ne,o=new Ne,a=new st,l=new Tr({depthPacking:Vd}),c=new nl,u={},h=n.maxTextureSize,f={[An]:on,[on]:An,[Pt]:Pt},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:zy,fragmentShader:ky}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new Lt;_.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Qe(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let p=this.type;this.render=function(R,I,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let M=s.getRenderTarget(),b=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Nn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let F=p!==Mi&&this.type===Mi,X=p===Mi&&this.type!==Mi;for(let J=0,K=R.length;J<K;J++){let oe=R[J],Y=oe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);let te=Y.getFrameExtents();if(r.multiply(te),o.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/te.x),r.x=o.x*te.x,Y.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/te.y),r.y=o.y*te.y,Y.mapSize.y=o.y)),Y.map===null||F===!0||X===!0){let Se=this.type!==Mi?{minFilter:zt,magFilter:zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new sn(r.x,r.y,Se),Y.map.texture.name=oe.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let he=Y.getViewportCount();for(let Se=0;Se<he;Se++){let ue=Y.getViewport(Se);a.set(o.x*ue.x,o.y*ue.y,o.x*ue.z,o.y*ue.w),$.viewport(a),Y.updateMatrices(oe,Se),i=Y.getFrustum(),y(I,U,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===Mi&&w(Y,U),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(M,b,B)};function w(R,I){let U=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new sn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(I,null,U,d,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(I,null,U,m,x,null)}function S(R,I,U,M){let b=null,B=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)b=B;else if(b=U.isPointLight===!0?c:l,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let $=b.uuid,F=I.uuid,X=u[$];X===void 0&&(X={},u[$]=X);let J=X[F];J===void 0&&(J=b.clone(),X[F]=J,I.addEventListener("dispose",D)),b=J}if(b.visible=I.visible,b.wireframe=I.wireframe,M===Mi?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:f[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let $=s.properties.get(b);$.light=U}return b}function y(R,I,U,M,b){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Mi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let F=e.update(R),X=R.material;if(Array.isArray(X)){let J=F.groups;for(let K=0,oe=J.length;K<oe;K++){let Y=J[K],te=X[Y.materialIndex];if(te&&te.visible){let he=S(R,te,M,b);R.onBeforeShadow(s,R,I,U,F,he,Y),s.renderBufferDirect(U,null,F,he,R,Y),R.onAfterShadow(s,R,I,U,F,he,Y)}}}else if(X.visible){let J=S(R,X,M,b);R.onBeforeShadow(s,R,I,U,F,J,null),s.renderBufferDirect(U,null,F,J,R,null),R.onAfterShadow(s,R,I,U,F,J,null)}}let $=R.children;for(let F=0,X=$.length;F<X;F++)y($[F],I,U,M,b)}function D(R){R.target.removeEventListener("dispose",D);for(let U in u){let M=u[U],b=R.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var Vy={[fl]:dl,[pl]:_l,[ml]:xl,[Ts]:gl,[dl]:fl,[_l]:pl,[xl]:ml,[gl]:Ts};function Gy(s,e){function n(){let O=!1,Me=new st,ne=null,le=new st(0,0,0,0);return{setMask:function(we){ne!==we&&!O&&(s.colorMask(we,we,we,we),ne=we)},setLocked:function(we){O=we},setClear:function(we,Te,Ke,ht,Tt){Tt===!0&&(we*=ht,Te*=ht,Ke*=ht),Me.set(we,Te,Ke,ht),le.equals(Me)===!1&&(s.clearColor(we,Te,Ke,ht),le.copy(Me))},reset:function(){O=!1,ne=null,le.set(-1,0,0,0)}}}function i(){let O=!1,Me=!1,ne=null,le=null,we=null;return{setReversed:function(Te){if(Me!==Te){let Ke=e.get("EXT_clip_control");Me?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);let ht=we;we=null,this.setClear(ht)}Me=Te},getReversed:function(){return Me},setTest:function(Te){Te?fe(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Te){ne!==Te&&!O&&(s.depthMask(Te),ne=Te)},setFunc:function(Te){if(Me&&(Te=Vy[Te]),le!==Te){switch(Te){case fl:s.depthFunc(s.NEVER);break;case dl:s.depthFunc(s.ALWAYS);break;case pl:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case ml:s.depthFunc(s.EQUAL);break;case gl:s.depthFunc(s.GEQUAL);break;case _l:s.depthFunc(s.GREATER);break;case xl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Te}},setLocked:function(Te){O=Te},setClear:function(Te){we!==Te&&(Me&&(Te=1-Te),s.clearDepth(Te),we=Te)},reset:function(){O=!1,ne=null,le=null,we=null,Me=!1}}}function r(){let O=!1,Me=null,ne=null,le=null,we=null,Te=null,Ke=null,ht=null,Tt=null;return{setTest:function(Be){O||(Be?fe(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Be){Me!==Be&&!O&&(s.stencilMask(Be),Me=Be)},setFunc:function(Be,At,Yt){(ne!==Be||le!==At||we!==Yt)&&(s.stencilFunc(Be,At,Yt),ne=Be,le=At,we=Yt)},setOp:function(Be,At,Yt){(Te!==Be||Ke!==At||ht!==Yt)&&(s.stencilOp(Be,At,Yt),Te=Be,Ke=At,ht=Yt)},setLocked:function(Be){O=Be},setClear:function(Be){Tt!==Be&&(s.clearStencil(Be),Tt=Be)},reset:function(){O=!1,Me=null,ne=null,le=null,we=null,Te=null,Ke=null,ht=null,Tt=null}}}let o=new n,a=new i,l=new r,c=new WeakMap,u=new WeakMap,h={},f={},d=new WeakMap,m=[],_=null,x=!1,g=null,p=null,w=null,S=null,y=null,D=null,R=null,I=new Ue(0,0,0),U=0,M=!1,b=null,B=null,$=null,F=null,X=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,oe=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=oe>=2);let te=null,he={},Se=s.getParameter(s.SCISSOR_BOX),ue=s.getParameter(s.VIEWPORT),me=new st().fromArray(Se),G=new st().fromArray(ue);function ae(O,Me,ne,le){let we=new Uint8Array(4),Te=s.createTexture();s.bindTexture(O,Te),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<ne;Ke++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Me+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Te}let ce={};ce[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),fe(s.DEPTH_TEST),a.setFunc(Ts),qe(!1),We(yu),fe(s.CULL_FACE),N(Nn);function fe(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function ge(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function _e(O,Me){return f[O]!==Me?(s.bindFramebuffer(O,Me),f[O]=Me,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Me),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function Oe(O,Me){let ne=m,le=!1;if(O){ne=d.get(Me),ne===void 0&&(ne=[],d.set(Me,ne));let we=O.textures;if(ne.length!==we.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,Ke=we.length;Te<Ke;Te++)ne[Te]=s.COLOR_ATTACHMENT0+Te;ne.length=we.length,le=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,le=!0);le&&s.drawBuffers(ne)}function ct(O){return _!==O?(s.useProgram(O),_=O,!0):!1}let $e={[Dn]:s.FUNC_ADD,[_d]:s.FUNC_SUBTRACT,[xd]:s.FUNC_REVERSE_SUBTRACT};$e[vd]=s.MIN,$e[yd]=s.MAX;let Je={[Vo]:s.ZERO,[Yi]:s.ONE,[Md]:s.SRC_COLOR,[ws]:s.SRC_ALPHA,[Td]:s.SRC_ALPHA_SATURATE,[Ed]:s.DST_COLOR,[Sd]:s.DST_ALPHA,[bd]:s.ONE_MINUS_SRC_COLOR,[Hi]:s.ONE_MINUS_SRC_ALPHA,[wd]:s.ONE_MINUS_DST_COLOR,[Go]:s.ONE_MINUS_DST_ALPHA,[Ad]:s.CONSTANT_COLOR,[Rd]:s.ONE_MINUS_CONSTANT_COLOR,[Cd]:s.CONSTANT_ALPHA,[Pd]:s.ONE_MINUS_CONSTANT_ALPHA};function N(O,Me,ne,le,we,Te,Ke,ht,Tt,Be){if(O===Nn){x===!0&&(ge(s.BLEND),x=!1);return}if(x===!1&&(fe(s.BLEND),x=!0),O!==hl){if(O!==g||Be!==M){if((p!==Dn||y!==Dn)&&(s.blendEquation(s.FUNC_ADD),p=Dn,y=Dn),Be)switch(O){case Hn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bu:s.blendFunc(s.ONE,s.ONE);break;case Su:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Hn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Su:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,S=null,D=null,R=null,I.set(0,0,0),U=0,g=O,M=Be}return}we=we||Me,Te=Te||ne,Ke=Ke||le,(Me!==p||we!==y)&&(s.blendEquationSeparate($e[Me],$e[we]),p=Me,y=we),(ne!==w||le!==S||Te!==D||Ke!==R)&&(s.blendFuncSeparate(Je[ne],Je[le],Je[Te],Je[Ke]),w=ne,S=le,D=Te,R=Ke),(ht.equals(I)===!1||Tt!==U)&&(s.blendColor(ht.r,ht.g,ht.b,Tt),I.copy(ht),U=Tt),g=O,M=!1}function gt(O,Me){O.side===Pt?ge(s.CULL_FACE):fe(s.CULL_FACE);let ne=O.side===on;Me&&(ne=!ne),qe(ne),O.blending===Hn&&O.transparent===!1?N(Nn):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),o.setMask(O.colorWrite);let le=O.stencilWrite;l.setTest(le),le&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(O){b!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),b=O)}function We(O){O!==pd?(fe(s.CULL_FACE),O!==B&&(O===yu?s.cullFace(s.BACK):O===md?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),B=O}function Le(O){O!==$&&(K&&s.lineWidth(O),$=O)}function nt(O,Me,ne){O?(fe(s.POLYGON_OFFSET_FILL),(F!==Me||X!==ne)&&(s.polygonOffset(Me,ne),F=Me,X=ne)):ge(s.POLYGON_OFFSET_FILL)}function q(O){O?fe(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function T(O){O===void 0&&(O=s.TEXTURE0+J-1),te!==O&&(s.activeTexture(O),te=O)}function v(O,Me,ne){ne===void 0&&(te===null?ne=s.TEXTURE0+J-1:ne=te);let le=he[ne];le===void 0&&(le={type:void 0,texture:void 0},he[ne]=le),(le.type!==O||le.texture!==Me)&&(te!==ne&&(s.activeTexture(ne),te=ne),s.bindTexture(O,Me||ce[O]),le.type=O,le.texture=Me)}function C(){let O=he[te];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(O){me.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),me.copy(O))}function ye(O){G.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),G.copy(O))}function Ve(O,Me){let ne=u.get(Me);ne===void 0&&(ne=new WeakMap,u.set(Me,ne));let le=ne.get(O);le===void 0&&(le=s.getUniformBlockIndex(Me,O.name),ne.set(O,le))}function ve(O,Me){let le=u.get(Me).get(O);c.get(Me)!==le&&(s.uniformBlockBinding(Me,le,O.__bindingPointIndex),c.set(Me,le))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},te=null,he={},f={},d=new WeakMap,m=[],_=null,x=!1,g=null,p=null,w=null,S=null,y=null,D=null,R=null,I=new Ue(0,0,0),U=0,M=!1,b=null,B=null,$=null,F=null,X=null,me.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:fe,disable:ge,bindFramebuffer:_e,drawBuffers:Oe,useProgram:ct,setBlending:N,setMaterial:gt,setFlipSided:qe,setCullFace:We,setLineWidth:Le,setPolygonOffset:nt,setScissorTest:q,activeTexture:T,bindTexture:v,unbindTexture:C,compressedTexImage2D:z,compressedTexImage3D:W,texImage2D:xe,texImage3D:Ce,updateUBOMapping:Ve,uniformBlockBinding:ve,texStorage2D:Re,texStorage3D:de,texSubImage2D:L,texSubImage3D:re,compressedTexSubImage2D:se,compressedTexSubImage3D:ie,scissor:Pe,viewport:ye,reset:Ge}}function Wy(s,e,n,i,r,o,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ne,h=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return m?new OffscreenCanvas(T,v):yr("canvas")}function x(T,v,C){let z=1,W=q(T);if((W.width>C||W.height>C)&&(z=C/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let L=Math.floor(z*W.width),re=Math.floor(z*W.height);f===void 0&&(f=_(L,re));let se=v?_(L,re):f;return se.width=L,se.height=re,se.getContext("2d").drawImage(T,0,0,L,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+L+"x"+re+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(T,v,C,z,W=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let L=v;if(v===s.RED&&(C===s.FLOAT&&(L=s.R32F),C===s.HALF_FLOAT&&(L=s.R16F),C===s.UNSIGNED_BYTE&&(L=s.R8)),v===s.RED_INTEGER&&(C===s.UNSIGNED_BYTE&&(L=s.R8UI),C===s.UNSIGNED_SHORT&&(L=s.R16UI),C===s.UNSIGNED_INT&&(L=s.R32UI),C===s.BYTE&&(L=s.R8I),C===s.SHORT&&(L=s.R16I),C===s.INT&&(L=s.R32I)),v===s.RG&&(C===s.FLOAT&&(L=s.RG32F),C===s.HALF_FLOAT&&(L=s.RG16F),C===s.UNSIGNED_BYTE&&(L=s.RG8)),v===s.RG_INTEGER&&(C===s.UNSIGNED_BYTE&&(L=s.RG8UI),C===s.UNSIGNED_SHORT&&(L=s.RG16UI),C===s.UNSIGNED_INT&&(L=s.RG32UI),C===s.BYTE&&(L=s.RG8I),C===s.SHORT&&(L=s.RG16I),C===s.INT&&(L=s.RG32I)),v===s.RGB_INTEGER&&(C===s.UNSIGNED_BYTE&&(L=s.RGB8UI),C===s.UNSIGNED_SHORT&&(L=s.RGB16UI),C===s.UNSIGNED_INT&&(L=s.RGB32UI),C===s.BYTE&&(L=s.RGB8I),C===s.SHORT&&(L=s.RGB16I),C===s.INT&&(L=s.RGB32I)),v===s.RGBA_INTEGER&&(C===s.UNSIGNED_BYTE&&(L=s.RGBA8UI),C===s.UNSIGNED_SHORT&&(L=s.RGBA16UI),C===s.UNSIGNED_INT&&(L=s.RGBA32UI),C===s.BYTE&&(L=s.RGBA8I),C===s.SHORT&&(L=s.RGBA16I),C===s.INT&&(L=s.RGBA32I)),v===s.RGB&&C===s.UNSIGNED_INT_5_9_9_9_REV&&(L=s.RGB9_E5),v===s.RGBA){let re=W?uo:lt.getTransfer(z);C===s.FLOAT&&(L=s.RGBA32F),C===s.HALF_FLOAT&&(L=s.RGBA16F),C===s.UNSIGNED_BYTE&&(L=re===vt?s.SRGB8_ALPHA8:s.RGBA8),C===s.UNSIGNED_SHORT_4_4_4_4&&(L=s.RGBA4),C===s.UNSIGNED_SHORT_5_5_5_1&&(L=s.RGB5_A1)}return(L===s.R16F||L===s.R32F||L===s.RG16F||L===s.RG32F||L===s.RGBA16F||L===s.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function y(T,v){let C;return T?v===null||v===ps||v===Fs?C=s.DEPTH24_STENCIL8:v===Cn?C=s.DEPTH32F_STENCIL8:v===Pr&&(C=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ps||v===Fs?C=s.DEPTH_COMPONENT24:v===Cn?C=s.DEPTH_COMPONENT32F:v===Pr&&(C=s.DEPTH_COMPONENT16),C}function D(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==kt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){let v=T.target;v.removeEventListener("dispose",R),U(v),v.isVideoTexture&&h.delete(v)}function I(T){let v=T.target;v.removeEventListener("dispose",I),b(v)}function U(T){let v=i.get(T);if(v.__webglInit===void 0)return;let C=T.source,z=d.get(C);if(z){let W=z[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&M(T),Object.keys(z).length===0&&d.delete(C)}i.remove(T)}function M(T){let v=i.get(T);s.deleteTexture(v.__webglTexture);let C=T.source,z=d.get(C);delete z[v.__cacheKey],a.memory.textures--}function b(T){let v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let W=0;W<v.__webglFramebuffer[z].length;W++)s.deleteFramebuffer(v.__webglFramebuffer[z][W]);else s.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)s.deleteFramebuffer(v.__webglFramebuffer[z]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let C=T.textures;for(let z=0,W=C.length;z<W;z++){let L=i.get(C[z]);L.__webglTexture&&(s.deleteTexture(L.__webglTexture),a.memory.textures--),i.remove(C[z])}i.remove(T)}let B=0;function $(){B=0}function F(){let T=B;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),B+=1,T}function X(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function J(T,v){let C=i.get(T);if(T.isVideoTexture&&Le(T),T.isRenderTargetTexture===!1&&T.version>0&&C.__version!==T.version){let z=T.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(C,T,v);return}}n.bindTexture(s.TEXTURE_2D,C.__webglTexture,s.TEXTURE0+v)}function K(T,v){let C=i.get(T);if(T.version>0&&C.__version!==T.version){G(C,T,v);return}n.bindTexture(s.TEXTURE_2D_ARRAY,C.__webglTexture,s.TEXTURE0+v)}function oe(T,v){let C=i.get(T);if(T.version>0&&C.__version!==T.version){G(C,T,v);return}n.bindTexture(s.TEXTURE_3D,C.__webglTexture,s.TEXTURE0+v)}function Y(T,v){let C=i.get(T);if(T.version>0&&C.__version!==T.version){ae(C,T,v);return}n.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+v)}let te={[ii]:s.REPEAT,[hi]:s.CLAMP_TO_EDGE,[vr]:s.MIRRORED_REPEAT},he={[zt]:s.NEAREST,[Ml]:s.NEAREST_MIPMAP_NEAREST,[Os]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[Cr]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},Se={[Wd]:s.NEVER,[Kd]:s.ALWAYS,[Xd]:s.LESS,[Bu]:s.LEQUAL,[qd]:s.EQUAL,[$d]:s.GEQUAL,[Yd]:s.GREATER,[Zd]:s.NOTEQUAL};function ue(T,v){if(v.type===Cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===kt||v.magFilter===Cr||v.magFilter===Os||v.magFilter===ai||v.minFilter===kt||v.minFilter===Cr||v.minFilter===Os||v.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,te[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,te[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,te[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,he[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==Os&&v.minFilter!==ai||v.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function me(T,v){let C=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));let z=v.source,W=d.get(z);W===void 0&&(W={},d.set(z,W));let L=X(v);if(L!==T.__cacheKey){W[L]===void 0&&(W[L]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,C=!0),W[L].usedTimes++;let re=W[T.__cacheKey];re!==void 0&&(W[T.__cacheKey].usedTimes--,re.usedTimes===0&&M(v)),T.__cacheKey=L,T.__webglTexture=W[L].texture}return C}function G(T,v,C){let z=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=s.TEXTURE_3D);let W=me(T,v),L=v.source;n.bindTexture(z,T.__webglTexture,s.TEXTURE0+C);let re=i.get(L);if(L.version!==re.__version||W===!0){n.activeTexture(s.TEXTURE0+C);let se=lt.getPrimaries(lt.workingColorSpace),ie=v.colorSpace===li?null:lt.getPrimaries(v.colorSpace),Re=v.colorSpace===li||se===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let de=x(v.image,!1,r.maxTextureSize);de=nt(v,de);let xe=o.convert(v.format,v.colorSpace),Ce=o.convert(v.type),Pe=S(v.internalFormat,xe,Ce,v.colorSpace,v.isVideoTexture);ue(z,v);let ye,Ve=v.mipmaps,ve=v.isVideoTexture!==!0,Ge=re.__version===void 0||W===!0,O=L.dataReady,Me=D(v,de);if(v.isDepthTexture)Pe=y(v.format===As,v.type),Ge&&(ve?n.texStorage2D(s.TEXTURE_2D,1,Pe,de.width,de.height):n.texImage2D(s.TEXTURE_2D,0,Pe,de.width,de.height,0,xe,Ce,null));else if(v.isDataTexture)if(Ve.length>0){ve&&Ge&&n.texStorage2D(s.TEXTURE_2D,Me,Pe,Ve[0].width,Ve[0].height);for(let ne=0,le=Ve.length;ne<le;ne++)ye=Ve[ne],ve?O&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,ye.width,ye.height,xe,Ce,ye.data):n.texImage2D(s.TEXTURE_2D,ne,Pe,ye.width,ye.height,0,xe,Ce,ye.data);v.generateMipmaps=!1}else ve?(Ge&&n.texStorage2D(s.TEXTURE_2D,Me,Pe,de.width,de.height),O&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,de.width,de.height,xe,Ce,de.data)):n.texImage2D(s.TEXTURE_2D,0,Pe,de.width,de.height,0,xe,Ce,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ve&&Ge&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Pe,Ve[0].width,Ve[0].height,de.depth);for(let ne=0,le=Ve.length;ne<le;ne++)if(ye=Ve[ne],v.format!==jt)if(xe!==null)if(ve){if(O)if(v.layerUpdates.size>0){let we=Xu(ye.width,ye.height,v.format,v.type);for(let Te of v.layerUpdates){let Ke=ye.data.subarray(Te*we/ye.data.BYTES_PER_ELEMENT,(Te+1)*we/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Te,ye.width,ye.height,1,xe,Ke)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ye.width,ye.height,de.depth,xe,ye.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Pe,ye.width,ye.height,de.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?O&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ye.width,ye.height,de.depth,xe,Ce,ye.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ne,Pe,ye.width,ye.height,de.depth,0,xe,Ce,ye.data)}else{ve&&Ge&&n.texStorage2D(s.TEXTURE_2D,Me,Pe,Ve[0].width,Ve[0].height);for(let ne=0,le=Ve.length;ne<le;ne++)ye=Ve[ne],v.format!==jt?xe!==null?ve?O&&n.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ye.width,ye.height,xe,ye.data):n.compressedTexImage2D(s.TEXTURE_2D,ne,Pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?O&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,ye.width,ye.height,xe,Ce,ye.data):n.texImage2D(s.TEXTURE_2D,ne,Pe,ye.width,ye.height,0,xe,Ce,ye.data)}else if(v.isDataArrayTexture)if(ve){if(Ge&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Pe,de.width,de.height,de.depth),O)if(v.layerUpdates.size>0){let ne=Xu(de.width,de.height,v.format,v.type);for(let le of v.layerUpdates){let we=de.data.subarray(le*ne/de.data.BYTES_PER_ELEMENT,(le+1)*ne/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,xe,Ce,we)}v.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,Ce,de.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,de.width,de.height,de.depth,0,xe,Ce,de.data);else if(v.isData3DTexture)ve?(Ge&&n.texStorage3D(s.TEXTURE_3D,Me,Pe,de.width,de.height,de.depth),O&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,Ce,de.data)):n.texImage3D(s.TEXTURE_3D,0,Pe,de.width,de.height,de.depth,0,xe,Ce,de.data);else if(v.isFramebufferTexture){if(Ge)if(ve)n.texStorage2D(s.TEXTURE_2D,Me,Pe,de.width,de.height);else{let ne=de.width,le=de.height;for(let we=0;we<Me;we++)n.texImage2D(s.TEXTURE_2D,we,Pe,ne,le,0,xe,Ce,null),ne>>=1,le>>=1}}else if(Ve.length>0){if(ve&&Ge){let ne=q(Ve[0]);n.texStorage2D(s.TEXTURE_2D,Me,Pe,ne.width,ne.height)}for(let ne=0,le=Ve.length;ne<le;ne++)ye=Ve[ne],ve?O&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,xe,Ce,ye):n.texImage2D(s.TEXTURE_2D,ne,Pe,xe,Ce,ye);v.generateMipmaps=!1}else if(ve){if(Ge){let ne=q(de);n.texStorage2D(s.TEXTURE_2D,Me,Pe,ne.width,ne.height)}O&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Ce,de)}else n.texImage2D(s.TEXTURE_2D,0,Pe,xe,Ce,de);g(v)&&p(z),re.__version=L.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ae(T,v,C){if(v.image.length!==6)return;let z=me(T,v),W=v.source;n.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+C);let L=i.get(W);if(W.version!==L.__version||z===!0){n.activeTexture(s.TEXTURE0+C);let re=lt.getPrimaries(lt.workingColorSpace),se=v.colorSpace===li?null:lt.getPrimaries(v.colorSpace),ie=v.colorSpace===li||re===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Re=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let le=0;le<6;le++)!Re&&!de?xe[le]=x(v.image[le],!0,r.maxCubemapSize):xe[le]=de?v.image[le].image:v.image[le],xe[le]=nt(v,xe[le]);let Ce=xe[0],Pe=o.convert(v.format,v.colorSpace),ye=o.convert(v.type),Ve=S(v.internalFormat,Pe,ye,v.colorSpace),ve=v.isVideoTexture!==!0,Ge=L.__version===void 0||z===!0,O=W.dataReady,Me=D(v,Ce);ue(s.TEXTURE_CUBE_MAP,v);let ne;if(Re){ve&&Ge&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Ve,Ce.width,Ce.height);for(let le=0;le<6;le++){ne=xe[le].mipmaps;for(let we=0;we<ne.length;we++){let Te=ne[we];v.format!==jt?Pe!==null?ve?O&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,0,0,Te.width,Te.height,Pe,Te.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,Ve,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?O&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,0,0,Te.width,Te.height,Pe,ye,Te.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,Ve,Te.width,Te.height,0,Pe,ye,Te.data)}}}else{if(ne=v.mipmaps,ve&&Ge){ne.length>0&&Me++;let le=q(xe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Ve,le.width,le.height)}for(let le=0;le<6;le++)if(de){ve?O&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,xe[le].width,xe[le].height,Pe,ye,xe[le].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ve,xe[le].width,xe[le].height,0,Pe,ye,xe[le].data);for(let we=0;we<ne.length;we++){let Ke=ne[we].image[le].image;ve?O&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,0,0,Ke.width,Ke.height,Pe,ye,Ke.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,Ve,Ke.width,Ke.height,0,Pe,ye,Ke.data)}}else{ve?O&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,ye,xe[le]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ve,Pe,ye,xe[le]);for(let we=0;we<ne.length;we++){let Te=ne[we];ve?O&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,0,0,Pe,ye,Te.image[le]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,Ve,Pe,ye,Te.image[le])}}}g(v)&&p(s.TEXTURE_CUBE_MAP),L.__version=W.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ce(T,v,C,z,W,L){let re=o.convert(C.format,C.colorSpace),se=o.convert(C.type),ie=S(C.internalFormat,re,se,C.colorSpace),Re=i.get(v),de=i.get(C);if(de.__renderTarget=v,!Re.__hasExternalTextures){let xe=Math.max(1,v.width>>L),Ce=Math.max(1,v.height>>L);W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?n.texImage3D(W,L,ie,xe,Ce,v.depth,0,re,se,null):n.texImage2D(W,L,ie,xe,Ce,0,re,se,null)}n.bindFramebuffer(s.FRAMEBUFFER,T),We(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,z,W,de.__webglTexture,0,qe(v)):(W===s.TEXTURE_2D||W>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,z,W,de.__webglTexture,L),n.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(T,v,C){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){let z=v.depthTexture,W=z&&z.isDepthTexture?z.type:null,L=y(v.stencilBuffer,W),re=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=qe(v);We(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,L,v.width,v.height):C?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,L,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,L,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,T)}else{let z=v.textures;for(let W=0;W<z.length;W++){let L=z[W],re=o.convert(L.format,L.colorSpace),se=o.convert(L.type),ie=S(L.internalFormat,re,se,L.colorSpace),Re=qe(v);C&&We(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ie,v.width,v.height):We(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,ie,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ie,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=i.get(v.depthTexture);z.__renderTarget=v,(!z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let W=z.__webglTexture,L=qe(v);if(v.depthTexture.format===Es)We(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,W,0,L):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,W,0);else if(v.depthTexture.format===As)We(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,W,0,L):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function _e(T){let v=i.get(T),C=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let z=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){let W=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),v.__depthDisposeCallback=W}v.__boundDepthTexture=z}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");ge(v.__webglFramebuffer,T)}else if(C){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=s.createRenderbuffer(),fe(v.__webglDepthbuffer[z],T,!1);else{let W=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,L=v.__webglDepthbuffer[z];s.bindRenderbuffer(s.RENDERBUFFER,L),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,L)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),fe(v.__webglDepthbuffer,T,!1);else{let z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,z,s.RENDERBUFFER,W)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(T,v,C){let z=i.get(T);v!==void 0&&ce(z.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),C!==void 0&&_e(T)}function ct(T){let v=T.texture,C=i.get(T),z=i.get(v);T.addEventListener("dispose",I);let W=T.textures,L=T.isWebGLCubeRenderTarget===!0,re=W.length>1;if(re||(z.__webglTexture===void 0&&(z.__webglTexture=s.createTexture()),z.__version=v.version,a.memory.textures++),L){C.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[se]=[];for(let ie=0;ie<v.mipmaps.length;ie++)C.__webglFramebuffer[se][ie]=s.createFramebuffer()}else C.__webglFramebuffer[se]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)C.__webglFramebuffer[se]=s.createFramebuffer()}else C.__webglFramebuffer=s.createFramebuffer();if(re)for(let se=0,ie=W.length;se<ie;se++){let Re=i.get(W[se]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&We(T)===!1){C.__webglMultisampledFramebuffer=s.createFramebuffer(),C.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let se=0;se<W.length;se++){let ie=W[se];C.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,C.__webglColorRenderbuffer[se]);let Re=o.convert(ie.format,ie.colorSpace),de=o.convert(ie.type),xe=S(ie.internalFormat,Re,de,ie.colorSpace,T.isXRRenderTarget===!0),Ce=qe(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,xe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,C.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(C.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(C.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(L){n.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture),ue(s.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)ce(C.__webglFramebuffer[se][ie],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ie);else ce(C.__webglFramebuffer[se],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);g(v)&&p(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){for(let se=0,ie=W.length;se<ie;se++){let Re=W[se],de=i.get(Re);n.bindTexture(s.TEXTURE_2D,de.__webglTexture),ue(s.TEXTURE_2D,Re),ce(C.__webglFramebuffer,T,Re,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,0),g(Re)&&p(s.TEXTURE_2D)}n.unbindTexture()}else{let se=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(se,z.__webglTexture),ue(se,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)ce(C.__webglFramebuffer[ie],T,v,s.COLOR_ATTACHMENT0,se,ie);else ce(C.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,se,0);g(v)&&p(se),n.unbindTexture()}T.depthBuffer&&_e(T)}function $e(T){let v=T.textures;for(let C=0,z=v.length;C<z;C++){let W=v[C];if(g(W)){let L=w(T),re=i.get(W).__webglTexture;n.bindTexture(L,re),p(L),n.unbindTexture()}}}let Je=[],N=[];function gt(T){if(T.samples>0){if(We(T)===!1){let v=T.textures,C=T.width,z=T.height,W=s.COLOR_BUFFER_BIT,L=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=i.get(T),se=v.length>1;if(se)for(let ie=0;ie<v.length;ie++)n.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ie=0;ie<v.length;ie++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[ie]);let Re=i.get(v[ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,C,z,0,0,C,z,W,s.NEAREST),c===!0&&(Je.length=0,N.length=0,Je.push(s.COLOR_ATTACHMENT0+ie),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Je.push(L),N.push(L),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let ie=0;ie<v.length;ie++){n.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,re.__webglColorRenderbuffer[ie]);let Re=i.get(v[ie]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.TEXTURE_2D,Re,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function qe(T){return Math.min(r.maxSamples,T.samples)}function We(T){let v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Le(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function nt(T,v){let C=T.colorSpace,z=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||C!==nn&&C!==li&&(lt.getTransfer(C)===vt?(z!==jt||W!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function q(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=Y,this.rebindTextures=Oe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=We}function Xy(s,e){function n(i,r=li){let o,a=lt.getTransfer(r);if(i===Gn)return s.UNSIGNED_BYTE;if(i===Sl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===El)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Cu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Au)return s.BYTE;if(i===Ru)return s.SHORT;if(i===Pr)return s.UNSIGNED_SHORT;if(i===bl)return s.INT;if(i===ps)return s.UNSIGNED_INT;if(i===Cn)return s.FLOAT;if(i===Zi)return s.HALF_FLOAT;if(i===Pu)return s.ALPHA;if(i===Iu)return s.RGB;if(i===jt)return s.RGBA;if(i===Lu)return s.LUMINANCE;if(i===Du)return s.LUMINANCE_ALPHA;if(i===Es)return s.DEPTH_COMPONENT;if(i===As)return s.DEPTH_STENCIL;if(i===wl)return s.RED;if(i===Tl)return s.RED_INTEGER;if(i===Uu)return s.RG;if(i===Al)return s.RG_INTEGER;if(i===Rl)return s.RGBA_INTEGER;if(i===qo||i===Yo||i===Zo||i===$o)if(a===vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Pl||i===Il||i===Ll)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Cl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ll)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Ul||i===Nl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Dl||i===Ul)return a===vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Nl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ol||i===Fl||i===Bl||i===zl||i===kl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===$l)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ol)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ql)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===Kl||i===Jl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Ko)return a===vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nu||i===jl||i===Ql||i===ec)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ko)return o.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ql)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:n}}var qy={type:"move"},ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,a=null,l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let x of e.hand.values()){let g=n.getJointPose(x,i),p=this._getHandJoint(u,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&d>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zy=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new Ht,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Vt({vertexShader:Yy,fragmentShader:Zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qe(new gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends di{constructor(e,n){super();let i=this,r=null,o=1,a=null,l="local-floor",c=1,u=null,h=null,f=null,d=null,m=null,_=null,x=new sh,g=n.getContextAttributes(),p=null,w=null,S=[],y=[],D=new Ne,R=null,I=new Bt;I.viewport=new st;let U=new Bt;U.viewport=new st;let M=[I,U],b=new cl,B=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ae=S[G];return ae===void 0&&(ae=new ea,S[G]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(G){let ae=S[G];return ae===void 0&&(ae=new ea,S[G]=ae),ae.getGripSpace()},this.getHand=function(G){let ae=S[G];return ae===void 0&&(ae=new ea,S[G]=ae),ae.getHandSpace()};function F(G){let ae=y.indexOf(G.inputSource);if(ae===-1)return;let ce=S[ae];ce!==void 0&&(ce.update(G.inputSource,G.frame,u||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let G=0;G<S.length;G++){let ae=y[G];ae!==null&&(y[G]=null,S[G].disconnect(ae))}B=null,$=null,x.reset(),e.setRenderTarget(p),m=null,d=null,f=null,r=null,w=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let ce=null,fe=null,ge=null;g.depth&&(ge=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=g.stencil?As:Es,fe=g.stencil?Fs:ps);let _e={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:o};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new sn(d.textureWidth,d.textureHeight,{format:jt,type:Gn,depthTexture:new Ao(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new sn(m.framebufferWidth,m.framebufferHeight,{format:jt,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(G){for(let ae=0;ae<G.removed.length;ae++){let ce=G.removed[ae],fe=y.indexOf(ce);fe>=0&&(y[fe]=null,S[fe].disconnect(ce))}for(let ae=0;ae<G.added.length;ae++){let ce=G.added[ae],fe=y.indexOf(ce);if(fe===-1){for(let _e=0;_e<S.length;_e++)if(_e>=y.length){y.push(ce),fe=_e;break}else if(y[_e]===null){y[_e]=ce,fe=_e;break}if(fe===-1)break}let ge=S[fe];ge&&ge.connect(ce)}}let K=new P,oe=new P;function Y(G,ae,ce){K.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(ce.matrixWorld);let fe=K.distanceTo(oe),ge=ae.projectionMatrix.elements,_e=ce.projectionMatrix.elements,Oe=ge[14]/(ge[10]-1),ct=ge[14]/(ge[10]+1),$e=(ge[9]+1)/ge[5],Je=(ge[9]-1)/ge[5],N=(ge[8]-1)/ge[0],gt=(_e[8]+1)/_e[0],qe=Oe*N,We=Oe*gt,Le=fe/(-N+gt),nt=Le*-N;if(ae.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(nt),G.translateZ(Le),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ge[10]===-1)G.projectionMatrix.copy(ae.projectionMatrix),G.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let q=Oe+Le,T=ct+Le,v=qe-nt,C=We+(fe-nt),z=$e*ct/T*q,W=Je*ct/T*q;G.projectionMatrix.makePerspective(v,C,z,W,q,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function te(G,ae){ae===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ae.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ae=G.near,ce=G.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),b.near=U.near=I.near=ae,b.far=U.far=I.far=ce,(B!==b.near||$!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),B=b.near,$=b.far),I.layers.mask=G.layers.mask|2,U.layers.mask=G.layers.mask|4,b.layers.mask=I.layers.mask|U.layers.mask;let fe=G.parent,ge=b.cameras;te(b,fe);for(let _e=0;_e<ge.length;_e++)te(ge[_e],fe);ge.length===2?Y(b,I,U):b.projectionMatrix.copy(I.projectionMatrix),he(G,b,fe)};function he(G,ae,ce){ce===null?G.matrix.copy(ae.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(ae.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ae.projectionMatrix),G.projectionMatrixInverse.copy(ae.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ps*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let Se=null;function ue(G,ae){if(h=ae.getViewerPose(u||a),_=ae,h!==null){let ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let fe=!1;ce.length!==b.cameras.length&&(b.cameras.length=0,fe=!0);for(let _e=0;_e<ce.length;_e++){let Oe=ce[_e],ct=null;if(m!==null)ct=m.getViewport(Oe);else{let Je=f.getViewSubImage(d,Oe);ct=Je.viewport,_e===0&&(e.setRenderTargetTextures(w,Je.colorTexture,d.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(w))}let $e=M[_e];$e===void 0&&($e=new Bt,$e.layers.enable(_e),$e.viewport=new st,M[_e]=$e),$e.matrix.fromArray(Oe.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Oe.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ct.x,ct.y,ct.width,ct.height),_e===0&&(b.matrix.copy($e.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),fe===!0&&b.cameras.push($e)}let ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){let _e=f.getDepthInformation(ce[0]);_e&&_e.isValid&&_e.texture&&x.init(e,_e,r.renderState)}}for(let ce=0;ce<S.length;ce++){let fe=y[ce],ge=S[ce];fe!==null&&ge!==void 0&&ge.update(fe,ae,u||a)}Se&&Se(G,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}let me=new Rp;me.setAnimationLoop(ue),this.setAnimationLoop=function(G){Se=G},this.dispose=function(){}}},Vs=new si,$y=new Ze;function Ky(s,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Vu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,y)):p.isMeshMatcapMaterial?(o(g,p),_(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),x(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?c(g,p,w,S):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=e.get(p),S=w.envMap,y=w.envMapRotation;S&&(g.envMap.value=S,Vs.copy(y),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),g.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(Vs)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=S*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Jy(s,e,n,i){let r={},o={},a=[],l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let y=S.program;i.uniformBlockBinding(w,y)}function u(w,S){let y=r[w.id];y===void 0&&(_(w),y=h(w),r[w.id]=y,w.addEventListener("dispose",g));let D=S.program;i.updateUBOMapping(w,D);let R=e.render.frame;o[w.id]!==R&&(d(w),o[w.id]=R)}function h(w){let S=f();w.__bindingPointIndex=S;let y=s.createBuffer(),D=w.__size,R=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,D,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function f(){for(let w=0;w<l;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let S=r[w.id],y=w.uniforms,D=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,I=y.length;R<I;R++){let U=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,b=U.length;M<b;M++){let B=U[M];if(m(B,R,M,D)===!0){let $=B.__offset,F=Array.isArray(B.value)?B.value:[B.value],X=0;for(let J=0;J<F.length;J++){let K=F[J],oe=x(K);typeof K=="number"||typeof K=="boolean"?(B.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,$+X,B.__data)):K.isMatrix3?(B.__data[0]=K.elements[0],B.__data[1]=K.elements[1],B.__data[2]=K.elements[2],B.__data[3]=0,B.__data[4]=K.elements[3],B.__data[5]=K.elements[4],B.__data[6]=K.elements[5],B.__data[7]=0,B.__data[8]=K.elements[6],B.__data[9]=K.elements[7],B.__data[10]=K.elements[8],B.__data[11]=0):(K.toArray(B.__data,X),X+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(w,S,y,D){let R=w.value,I=S+"_"+y;if(D[I]===void 0)return typeof R=="number"||typeof R=="boolean"?D[I]=R:D[I]=R.clone(),!0;{let U=D[I];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return D[I]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function _(w){let S=w.uniforms,y=0,D=16;for(let I=0,U=S.length;I<U;I++){let M=Array.isArray(S[I])?S[I]:[S[I]];for(let b=0,B=M.length;b<B;b++){let $=M[b],F=Array.isArray($.value)?$.value:[$.value];for(let X=0,J=F.length;X<J;X++){let K=F[X],oe=x(K),Y=y%D,te=Y%oe.boundary,he=Y+te;y+=te,he!==0&&D-he<oe.storage&&(y+=D-he),$.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=oe.storage}}}let R=y%D;return R>0&&(y+=D-R),w.__size=y,w.__cache={},this}function x(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){let S=w.target;S.removeEventListener("dispose",g);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(let w in r)s.deleteBuffer(r[w]);a=[],r={},o={}}return{bind:c,update:u,dispose:p}}var sc=class{constructor(e={}){let{canvas:n=Jd(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let _=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,w=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=oi,this.toneMappingExposure=1;let y=this,D=!1,R=0,I=0,U=null,M=-1,b=null,B=new st,$=new st,F=null,X=new Ue(0),J=0,K=n.width,oe=n.height,Y=1,te=null,he=null,Se=new st(0,0,K,oe),ue=new st(0,0,K,oe),me=!1,G=new Er,ae=!1,ce=!1;this.transmissionResolutionScale=1;let fe=new Ze,ge=new Ze,_e=new P,Oe=new st,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Je(){return U===null?Y:1}let N=i;function gt(E,k){return n.getContext(E,k)}try{let E={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ul}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Te,!1),N===null){let k="webgl2";if(N=gt(k,E),N===null)throw gt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let qe,We,Le,nt,q,T,v,C,z,W,L,re,se,ie,Re,de,xe,Ce,Pe,ye,Ve,ve,Ge,O;function Me(){qe=new pv(N),qe.init(),ve=new Xy(N,qe),We=new lv(N,qe,e,ve),Le=new Gy(N,qe),We.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),nt=new _v(N),q=new Py,T=new Wy(N,qe,Le,q,We,ve,nt),v=new uv(y),C=new dv(y),z=new E0(N),Ge=new ov(N,z),W=new mv(N,z,nt,Ge),L=new vv(N,W,z,nt),Pe=new xv(N,We,T),de=new cv(q),re=new Cy(y,v,C,qe,We,Ge,de),se=new Ky(y,q),ie=new Ly,Re=new By(qe),Ce=new rv(y,v,C,Le,L,m,c),xe=new Hy(y,L,We),O=new Jy(N,nt,We,Le),ye=new av(N,qe,nt),Ve=new gv(N,qe,nt),nt.programs=re.programs,y.capabilities=We,y.extensions=qe,y.properties=q,y.renderLists=ie,y.shadowMap=xe,y.state=Le,y.info=nt}Me();let ne=new rh(y,N);this.xr=ne,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(K,oe,!1))},this.getSize=function(E){return E.set(K,oe)},this.setSize=function(E,k,j=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,oe=k,n.width=Math.floor(E*Y),n.height=Math.floor(k*Y),j===!0&&(n.style.width=E+"px",n.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(K*Y,oe*Y).floor()},this.setDrawingBufferSize=function(E,k,j){K=E,oe=k,Y=j,n.width=Math.floor(E*j),n.height=Math.floor(k*j),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(Se)},this.setViewport=function(E,k,j,Q){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,k,j,Q),Le.viewport(B.copy(Se).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,k,j,Q){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,k,j,Q),Le.scissor($.copy(ue).multiplyScalar(Y).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(E){Le.setScissorTest(me=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,k=!0,j=!0){let Q=0;if(E){let H=!1;if(U!==null){let pe=U.texture.format;H=pe===Rl||pe===Al||pe===Tl}if(H){let pe=U.texture.type,Ae=pe===Gn||pe===ps||pe===Pr||pe===Fs||pe===Sl||pe===El,Ie=Ce.getClearColor(),De=Ce.getClearAlpha(),Xe=Ie.r,Ye=Ie.g,ze=Ie.b;Ae?(_[0]=Xe,_[1]=Ye,_[2]=ze,_[3]=De,N.clearBufferuiv(N.COLOR,0,_)):(x[0]=Xe,x[1]=Ye,x[2]=ze,x[3]=De,N.clearBufferiv(N.COLOR,0,x))}else Q|=N.COLOR_BUFFER_BIT}k&&(Q|=N.DEPTH_BUFFER_BIT),j&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Ce.dispose(),ie.dispose(),Re.dispose(),q.dispose(),v.dispose(),C.dispose(),L.dispose(),Ge.dispose(),O.dispose(),re.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Yn),ne.removeEventListener("sessionend",Zn),Qt.stop()};function le(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let E=nt.autoReset,k=xe.enabled,j=xe.autoUpdate,Q=xe.needsUpdate,H=xe.type;Me(),nt.autoReset=E,xe.enabled=k,xe.autoUpdate=j,xe.needsUpdate=Q,xe.type=H}function Te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ke(E){let k=E.target;k.removeEventListener("dispose",Ke),ht(k)}function ht(E){Tt(E),q.remove(E)}function Tt(E){let k=q.get(E).programs;k!==void 0&&(k.forEach(function(j){re.releaseProgram(j)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,j,Q,H,pe){k===null&&(k=ct);let Ae=H.isMesh&&H.matrixWorld.determinant()<0,Ie=ua(E,k,j,Q,H);Le.setMaterial(Q,Ae);let De=j.index,Xe=1;if(Q.wireframe===!0){if(De=W.getWireframeAttribute(j),De===void 0)return;Xe=2}let Ye=j.drawRange,ze=j.attributes.position,ot=Ye.start*Xe,it=(Ye.start+Ye.count)*Xe;pe!==null&&(ot=Math.max(ot,pe.start*Xe),it=Math.min(it,(pe.start+pe.count)*Xe)),De!==null?(ot=Math.max(ot,0),it=Math.min(it,De.count)):ze!=null&&(ot=Math.max(ot,0),it=Math.min(it,ze.count));let Mt=it-ot;if(Mt<0||Mt===1/0)return;Ge.setup(H,Q,Ie,j,De);let St,at=ye;if(De!==null&&(St=z.get(De),at=Ve,at.setIndex(St)),H.isMesh)Q.wireframe===!0?(Le.setLineWidth(Q.wireframeLinewidth*Je()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(H.isLine){let He=Q.linewidth;He===void 0&&(He=1),Le.setLineWidth(He*Je()),H.isLineSegments?at.setMode(N.LINES):H.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else H.isPoints?at.setMode(N.POINTS):H.isSprite&&at.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)at.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let He=H._multiDrawStarts,Ot=H._multiDrawCounts,ut=H._multiDrawCount,Mn=De?z.get(De).bytesPerElement:1,Ii=q.get(Q).currentProgram.getUniforms();for(let Zt=0;Zt<ut;Zt++)Ii.setValue(N,"_gl_DrawID",Zt),at.render(He[Zt]/Mn,Ot[Zt])}else if(H.isInstancedMesh)at.renderInstances(ot,Mt,H.count);else if(j.isInstancedBufferGeometry){let He=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ot=Math.min(j.instanceCount,He);at.renderInstances(ot,Mt,Ot)}else at.render(ot,Mt)};function Be(E,k,j){E.transparent===!0&&E.side===Pt&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,xs(E,k,j),E.side=An,E.needsUpdate=!0,xs(E,k,j),E.side=Pt):xs(E,k,j)}this.compile=function(E,k,j=null){j===null&&(j=E),p=Re.get(j),p.init(k),S.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==j&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let Q=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pe=H.material;if(pe)if(Array.isArray(pe))for(let Ae=0;Ae<pe.length;Ae++){let Ie=pe[Ae];Be(Ie,j,H),Q.add(Ie)}else Be(pe,j,H),Q.add(pe)}),S.pop(),p=null,Q},this.compileAsync=function(E,k,j=null){let Q=this.compile(E,k,j);return new Promise(H=>{function pe(){if(Q.forEach(function(Ae){q.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){H(E);return}setTimeout(pe,10)}qe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let At=null;function Yt(E){At&&At(E)}function Yn(){Qt.stop()}function Zn(){Qt.start()}let Qt=new Rp;Qt.setAnimationLoop(Yt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(E){At=E,ne.setAnimationLoop(E),E===null?Qt.stop():Qt.start()},ne.addEventListener("sessionstart",Yn),ne.addEventListener("sessionend",Zn),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(k),k=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,k,U),p=Re.get(E,S.length),p.init(k),S.push(p),ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(ge),ce=this.localClippingEnabled,ae=de.init(this.clippingPlanes,ce),g=ie.get(E,w.length),g.init(),w.push(g),ne.enabled===!0&&ne.isPresenting===!0){let pe=y.xr.getDepthSensingMesh();pe!==null&&$n(pe,k,-1/0,y.sortObjects)}$n(E,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(te,he),$e=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,$e&&Ce.addToRenderList(g,E),this.info.render.frame++,ae===!0&&de.beginShadows();let j=p.state.shadowsArray;xe.render(j,E,k),ae===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=g.opaque,H=g.transmissive;if(p.setupLights(),k.isArrayCamera){let pe=k.cameras;if(H.length>0)for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){let De=pe[Ae];Kn(Q,H,E,De)}$e&&Ce.render(E);for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){let De=pe[Ae];Ci(g,E,De,De.viewport)}}else H.length>0&&Kn(Q,H,E,k),$e&&Ce.render(E),Ci(g,E,k);U!==null&&I===0&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(y,E,k),Ge.resetDefaultState(),M=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],ae===!0&&de.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function $n(E,k,j,Q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){Q&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);let Ae=L.update(E),Ie=E.material;Ie.visible&&g.push(E,Ae,Ie,j,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){let Ae=L.update(E),Ie=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Oe.copy(Ae.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(ge)),Array.isArray(Ie)){let De=Ae.groups;for(let Xe=0,Ye=De.length;Xe<Ye;Xe++){let ze=De[Xe],ot=Ie[ze.materialIndex];ot&&ot.visible&&g.push(E,Ae,ot,j,Oe.z,ze)}}else Ie.visible&&g.push(E,Ae,Ie,j,Oe.z,null)}}let pe=E.children;for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++)$n(pe[Ae],k,j,Q)}function Ci(E,k,j,Q){let H=E.opaque,pe=E.transmissive,Ae=E.transparent;p.setupLightsView(j),ae===!0&&de.setGlobalState(y.clippingPlanes,j),Q&&Le.viewport(B.copy(Q)),H.length>0&&Pi(H,k,j),pe.length>0&&Pi(pe,k,j),Ae.length>0&&Pi(Ae,k,j),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Kn(E,k,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new sn(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Zi:Gn,minFilter:ai,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let pe=p.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||B;pe.setSize(Ae.z*y.transmissionResolutionScale,Ae.w*y.transmissionResolutionScale);let Ie=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(X),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),$e&&Ce.render(j);let De=y.toneMapping;y.toneMapping=oi;let Xe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ae===!0&&de.setGlobalState(y.clippingPlanes,Q),Pi(E,j,Q),T.updateMultisampleRenderTarget(pe),T.updateRenderTargetMipmap(pe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ze=0,ot=k.length;ze<ot;ze++){let it=k[ze],Mt=it.object,St=it.geometry,at=it.material,He=it.group;if(at.side===Pt&&Mt.layers.test(Q.layers)){let Ot=at.side;at.side=on,at.needsUpdate=!0,_s(Mt,j,Q,St,at,He),at.side=Ot,at.needsUpdate=!0,Ye=!0}}Ye===!0&&(T.updateMultisampleRenderTarget(pe),T.updateRenderTargetMipmap(pe))}y.setRenderTarget(Ie),y.setClearColor(X,J),Xe!==void 0&&(Q.viewport=Xe),y.toneMapping=De}function Pi(E,k,j){let Q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,pe=E.length;H<pe;H++){let Ae=E[H],Ie=Ae.object,De=Ae.geometry,Xe=Q===null?Ae.material:Q,Ye=Ae.group;Ie.layers.test(j.layers)&&_s(Ie,k,j,De,Xe,Ye)}}function _s(E,k,j,Q,H,pe){E.onBeforeRender(y,k,j,Q,H,pe),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(y,k,j,Q,E,pe),H.transparent===!0&&H.side===Pt&&H.forceSinglePass===!1?(H.side=on,H.needsUpdate=!0,y.renderBufferDirect(j,k,Q,H,E,pe),H.side=An,H.needsUpdate=!0,y.renderBufferDirect(j,k,Q,H,E,pe),H.side=Pt):y.renderBufferDirect(j,k,Q,H,E,pe),E.onAfterRender(y,k,j,Q,H,pe)}function xs(E,k,j){k.isScene!==!0&&(k=ct);let Q=q.get(E),H=p.state.lights,pe=p.state.shadowsArray,Ae=H.state.version,Ie=re.getParameters(E,H.state,pe,k,j),De=re.getProgramCacheKey(Ie),Xe=Q.programs;Q.environment=E.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(E.isMeshStandardMaterial?C:v).get(E.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",Ke),Xe=new Map,Q.programs=Xe);let Ye=Xe.get(De);if(Ye!==void 0){if(Q.currentProgram===Ye&&Q.lightsStateVersion===Ae)return Yr(E,Ie),Ye}else Ie.uniforms=re.getUniforms(E),E.onBeforeCompile(Ie,y),Ye=re.acquireProgram(Ie,De),Xe.set(De,Ye),Q.uniforms=Ie.uniforms;let ze=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=de.uniform),Yr(E,Ie),Q.needsLights=Tc(E),Q.lightsStateVersion=Ae,Q.needsLights&&(ze.ambientLightColor.value=H.state.ambient,ze.lightProbe.value=H.state.probe,ze.directionalLights.value=H.state.directional,ze.directionalLightShadows.value=H.state.directionalShadow,ze.spotLights.value=H.state.spot,ze.spotLightShadows.value=H.state.spotShadow,ze.rectAreaLights.value=H.state.rectArea,ze.ltc_1.value=H.state.rectAreaLTC1,ze.ltc_2.value=H.state.rectAreaLTC2,ze.pointLights.value=H.state.point,ze.pointLightShadows.value=H.state.pointShadow,ze.hemisphereLights.value=H.state.hemi,ze.directionalShadowMap.value=H.state.directionalShadowMap,ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ze.spotShadowMap.value=H.state.spotShadowMap,ze.spotLightMatrix.value=H.state.spotLightMatrix,ze.spotLightMap.value=H.state.spotLightMap,ze.pointShadowMap.value=H.state.pointShadowMap,ze.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=Ye,Q.uniformsList=null,Ye}function qr(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Ur.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Yr(E,k){let j=q.get(E);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function ua(E,k,j,Q,H){k.isScene!==!0&&(k=ct),T.resetTextureUnits();let pe=k.fog,Ae=Q.isMeshStandardMaterial?k.environment:null,Ie=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:nn,De=(Q.isMeshStandardMaterial?C:v).get(Q.envMap||Ae),Xe=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ye=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ze=!!j.morphAttributes.position,ot=!!j.morphAttributes.normal,it=!!j.morphAttributes.color,Mt=oi;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Mt=y.toneMapping);let St=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,at=St!==void 0?St.length:0,He=q.get(Q),Ot=p.state.lights;if(ae===!0&&(ce===!0||E!==b)){let Rt=E===b&&Q.id===M;de.setState(Q,E,Rt)}let ut=!1;Q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ot.state.version||He.outputColorSpace!==Ie||H.isBatchedMesh&&He.batching===!1||!H.isBatchedMesh&&He.batching===!0||H.isBatchedMesh&&He.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&He.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||H.isInstancedMesh&&He.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&He.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&He.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&He.instancingMorph===!1&&H.morphTexture!==null||He.envMap!==De||Q.fog===!0&&He.fog!==pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==de.numPlanes||He.numIntersection!==de.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==Ye||He.morphTargets!==ze||He.morphNormals!==ot||He.morphColors!==it||He.toneMapping!==Mt||He.morphTargetsCount!==at)&&(ut=!0):(ut=!0,He.__version=Q.version);let Mn=He.currentProgram;ut===!0&&(Mn=xs(Q,k,H));let Ii=!1,Zt=!1,Qi=!1,dt=Mn.getUniforms(),It=He.uniforms;if(Le.useProgram(Mn.program)&&(Ii=!0,Zt=!0,Qi=!0),Q.id!==M&&(M=Q.id,Zt=!0),Ii||b!==E){Le.buffers.depth.getReversed()?(fe.copy(E.projectionMatrix),Qd(fe),ep(fe),dt.setValue(N,"projectionMatrix",fe)):dt.setValue(N,"projectionMatrix",E.projectionMatrix),dt.setValue(N,"viewMatrix",E.matrixWorldInverse);let en=dt.map.cameraPosition;en!==void 0&&en.setValue(N,_e.setFromMatrixPosition(E.matrixWorld)),We.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&dt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Zt=!0,Qi=!0)}if(H.isSkinnedMesh){dt.setOptional(N,H,"bindMatrix"),dt.setOptional(N,H,"bindMatrixInverse");let Rt=H.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(N,"boneTexture",Rt.boneTexture,T))}H.isBatchedMesh&&(dt.setOptional(N,H,"batchingTexture"),dt.setValue(N,"batchingTexture",H._matricesTexture,T),dt.setOptional(N,H,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",H._indirectTexture,T),dt.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",H._colorsTexture,T));let Ut=j.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&Pe.update(H,j,Mn),(Zt||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,dt.setValue(N,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(It.envMap.value=De,It.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(It.envMapIntensity.value=k.environmentIntensity),Zt&&(dt.setValue(N,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&ji(It,Qi),pe&&Q.fog===!0&&se.refreshFogUniforms(It,pe),se.refreshMaterialUniforms(It,Q,Y,oe,p.state.transmissionRenderTarget[E.id]),Ur.upload(N,qr(He),It,T)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ur.upload(N,qr(He),It,T),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&dt.setValue(N,"center",H.center),dt.setValue(N,"modelViewMatrix",H.modelViewMatrix),dt.setValue(N,"normalMatrix",H.normalMatrix),dt.setValue(N,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Rt=Q.uniformsGroups;for(let en=0,js=Rt.length;en<js;en++){let ci=Rt[en];O.update(ci,Mn),O.bind(ci,Mn)}}return Mn}function ji(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Tc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,k,j){q.get(E.texture).__webglTexture=k,q.get(E.depthTexture).__webglTexture=j;let Q=q.get(E);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){let j=q.get(E);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0};let Zr=N.createFramebuffer();this.setRenderTarget=function(E,k=0,j=0){U=E,R=k,I=j;let Q=!0,H=null,pe=!1,Ae=!1;if(E){let De=q.get(E);if(De.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(De.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(De.__hasExternalTextures)T.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ze=E.depthTexture;if(De.__boundDepthTexture!==ze){if(ze!==null&&q.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}let Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ae=!0);let Ye=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?H=Ye[k][j]:H=Ye[k],pe=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?H=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?H=Ye[j]:H=Ye,B.copy(E.viewport),$.copy(E.scissor),F=E.scissorTest}else B.copy(Se).multiplyScalar(Y).floor(),$.copy(ue).multiplyScalar(Y).floor(),F=me;if(j!==0&&(H=Zr),Le.bindFramebuffer(N.FRAMEBUFFER,H)&&Q&&Le.drawBuffers(E,H),Le.viewport(B),Le.scissor($),Le.setScissorTest(F),pe){let De=q.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,j)}else if(Ae){let De=q.get(E.texture),Xe=k;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,j,Xe)}else if(E!==null&&j!==0){let De=q.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,De.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(E,k,j,Q,H,pe,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){Le.bindFramebuffer(N.FRAMEBUFFER,Ie);try{let De=E.texture,Xe=De.format,Ye=De.type;if(!We.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Q&&j>=0&&j<=E.height-H&&N.readPixels(k,j,Q,H,ve.convert(Xe),ve.convert(Ye),pe)}finally{let De=U!==null?q.get(U).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,k,j,Q,H,pe,Ae){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){let De=E.texture,Xe=De.format,Ye=De.type;if(!We.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-Q&&j>=0&&j<=E.height-H){Le.bindFramebuffer(N.FRAMEBUFFER,Ie);let ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(k,j,Q,H,ve.convert(Xe),ve.convert(Ye),0);let ot=U!==null?q.get(U).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,ot);let it=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await jd(N,it,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.deleteBuffer(ze),N.deleteSync(it),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,j=0){E.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);let Q=Math.pow(2,-j),H=Math.floor(E.image.width*Q),pe=Math.floor(E.image.height*Q),Ae=k!==null?k.x:0,Ie=k!==null?k.y:0;T.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Ae,Ie,H,pe),Le.unbindTexture()};let Ac=N.createFramebuffer(),ha=N.createFramebuffer();this.copyTextureToTexture=function(E,k,j=null,Q=null,H=0,pe=null){E.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,E=arguments[1],k=arguments[2],pe=arguments[3]||0,j=null),pe===null&&(H!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=H,H=0):pe=0);let Ae,Ie,De,Xe,Ye,ze,ot,it,Mt,St=E.isCompressedTexture?E.mipmaps[pe]:E.image;if(j!==null)Ae=j.max.x-j.min.x,Ie=j.max.y-j.min.y,De=j.isBox3?j.max.z-j.min.z:1,Xe=j.min.x,Ye=j.min.y,ze=j.isBox3?j.min.z:0;else{let Ut=Math.pow(2,-H);Ae=Math.floor(St.width*Ut),Ie=Math.floor(St.height*Ut),E.isDataArrayTexture?De=St.depth:E.isData3DTexture?De=Math.floor(St.depth*Ut):De=1,Xe=0,Ye=0,ze=0}Q!==null?(ot=Q.x,it=Q.y,Mt=Q.z):(ot=0,it=0,Mt=0);let at=ve.convert(k.format),He=ve.convert(k.type),Ot;k.isData3DTexture?(T.setTexture3D(k,0),Ot=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),Ot=N.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),Ot=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);let ut=N.getParameter(N.UNPACK_ROW_LENGTH),Mn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ii=N.getParameter(N.UNPACK_SKIP_PIXELS),Zt=N.getParameter(N.UNPACK_SKIP_ROWS),Qi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);let dt=E.isDataArrayTexture||E.isData3DTexture,It=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Ut=q.get(E),Rt=q.get(k),en=q.get(Ut.__renderTarget),js=q.get(Rt.__renderTarget);Le.bindFramebuffer(N.READ_FRAMEBUFFER,en.__webglFramebuffer),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let ci=0;ci<De;ci++)dt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(E).__webglTexture,H,ze+ci),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(k).__webglTexture,pe,Mt+ci)),N.blitFramebuffer(Xe,Ye,Ae,Ie,ot,it,Ae,Ie,N.DEPTH_BUFFER_BIT,N.NEAREST);Le.bindFramebuffer(N.READ_FRAMEBUFFER,null),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||q.has(E)){let Ut=q.get(E),Rt=q.get(k);Le.bindFramebuffer(N.READ_FRAMEBUFFER,Ac),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,ha);for(let en=0;en<De;en++)dt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.__webglTexture,H,ze+en):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ut.__webglTexture,H),It?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.__webglTexture,pe,Mt+en):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Rt.__webglTexture,pe),H!==0?N.blitFramebuffer(Xe,Ye,Ae,Ie,ot,it,Ae,Ie,N.COLOR_BUFFER_BIT,N.NEAREST):It?N.copyTexSubImage3D(Ot,pe,ot,it,Mt+en,Xe,Ye,Ae,Ie):N.copyTexSubImage2D(Ot,pe,ot,it,Xe,Ye,Ae,Ie);Le.bindFramebuffer(N.READ_FRAMEBUFFER,null),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else It?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Ot,pe,ot,it,Mt,Ae,Ie,De,at,He,St.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Ot,pe,ot,it,Mt,Ae,Ie,De,at,St.data):N.texSubImage3D(Ot,pe,ot,it,Mt,Ae,Ie,De,at,He,St):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,ot,it,Ae,Ie,at,He,St.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,ot,it,St.width,St.height,at,St.data):N.texSubImage2D(N.TEXTURE_2D,pe,ot,it,Ae,Ie,at,He,St);N.pixelStorei(N.UNPACK_ROW_LENGTH,ut),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ii),N.pixelStorei(N.UNPACK_SKIP_ROWS,Zt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qi),pe===0&&k.generateMipmaps&&N.generateMipmap(Ot),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,k,j=null,Q=null,H=0){return E.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,E=arguments[2],k=arguments[3],H=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,j,Q,H)},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){R=0,I=0,U=null,Le.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}};function ah(s,e){if(e===Ou)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ir||e===Jo){let n=s.getIndex();if(n===null){let a=[],l=s.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);s.setIndex(a),n=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=n.count-2,r=[];if(e===Ir)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2))):(r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let o=s.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var oc=class extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new ph(n)}),this.register(function(n){return new mh(n)}),this.register(function(n){return new Eh(n)}),this.register(function(n){return new wh(n)}),this.register(function(n){return new Th(n)}),this.register(function(n){return new _h(n)}),this.register(function(n){return new xh(n)}),this.register(function(n){return new vh(n)}),this.register(function(n){return new yh(n)}),this.register(function(n){return new dh(n)}),this.register(function(n){return new Mh(n)}),this.register(function(n){return new gh(n)}),this.register(function(n){return new Sh(n)}),this.register(function(n){return new bh(n)}),this.register(function(n){return new hh(n)}),this.register(function(n){return new Ah(n)}),this.register(function(n){return new Rh(n)})}load(e,n,i,r){let o=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=qi.extractUrlBase(e);a=qi.resolveURL(u,this.path)}else a=qi.extractUrlBase(e);this.manager.itemStart(e);let l=function(u){r?r(u):console.error(u),o.manager.itemError(e),o.manager.itemEnd(e)},c=new Ar(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{o.parse(u,a,function(h){n(h),o.manager.itemEnd(e)},l)}catch(h){l(h)}},i,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,r){let o,a={},l={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Fp){try{a[rt.KHR_BINARY_GLTF]=new Ch(e)}catch(f){r&&r(f);return}o=JSON.parse(a[rt.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Oh(o,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,a[f.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){let f=o.extensionsUsed[h],d=o.extensionsRequired||[];switch(f){case rt.KHR_MATERIALS_UNLIT:a[f]=new fh;break;case rt.KHR_DRACO_MESH_COMPRESSION:a[f]=new Ph(o,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:a[f]=new Ih;break;case rt.KHR_MESH_QUANTIZATION:a[f]=new Lh;break;default:d.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(a),u.setPlugins(l),u.parse(i,r)}parseAsync(e,n){let i=this;return new Promise(function(r,o){i.parse(e,n,r,o)})}};function jy(){let s={};return{get:function(e){return s[e]},add:function(e,n){s[e]=n},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hh=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){let o=n[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){let n=this.parser,i="light:"+e,r=n.cache.get(i);if(r)return r;let o=n.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e],u,h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],nn);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new us(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Ds(h),u.distance=f;break;case"spot":u=new No(h),u.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,$i(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=n.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),n.cache.add(i,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){let n=this,i=this.parser,o=i.json.nodes[e],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return i._getNodeRef(n.cache,l,c)})}},fh=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,n,i){let r=[];e.color=new Ue(1,1,1),e.opacity=1;let o=n.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){let a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",o.baseColorTexture,xt))}return Promise.all(r)}},dh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(n.emissiveIntensity=o),Promise.resolve()}},ph=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(i.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let l=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Ne(l,l)}return Promise.all(o)}},mh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=r.extensions[this.name];return n.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(i.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}},_h=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[];n.sheenColor=new Ue(0,0,0),n.sheenRoughness=0,n.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let l=a.sheenColorFactor;n.sheenColor.setRGB(l[0],l[1],l[2],nn)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(i.assignTexture(n,"sheenColorMap",a.sheenColorTexture,xt)),a.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}},xh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(i.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}},vh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(i.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;let l=a.attenuationColor||[1,1,1];return n.attenuationColor=new Ue().setRGB(l[0],l[1],l[2],nn),Promise.all(o)}},yh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=r.extensions[this.name];return n.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}},Mh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(i.assignTexture(n,"specularIntensityMap",a.specularTexture));let l=a.specularColorFactor||[1,1,1];return n.specularColor=new Ue().setRGB(l[0],l[1],l[2],nn),a.specularColorTexture!==void 0&&o.push(i.assignTexture(n,"specularColorMap",a.specularColorTexture,xt)),Promise.all(o)}},bh=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(i.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(o)}},Sh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_n}extendMaterialParams(e,n){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(i.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}},Eh=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let o=r.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,o.source,a)}},wh=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let n=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[n])return null;let a=o.extensions[n],l=r.images[a.source],c=i.textureLoader;if(l.uri){let u=i.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}},Th=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let n=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[n])return null;let a=o.extensions[n],l=r.images[a.source],c=i.textureLoader;if(l.uri){let u=i.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}},Ah=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){let c=r.byteOffset||0,u=r.byteLength||0,h=r.count,f=r.byteStride,d=new Uint8Array(l,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,r.mode,r.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(m),h,f,d,r.mode,r.filter),m})})}else return null}},Rh=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=n.meshes[i.mesh];for(let u of r.primitives)if(u.mode!==Wn.TRIANGLES&&u.mode!==Wn.TRIANGLE_STRIP&&u.mode!==Wn.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=i.extensions[this.name].attributes,l=[],c={};for(let u in a)l.push(this.parser.getDependency("accessor",a[u]).then(h=>(c[u]=h,c[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(u=>{let h=u.pop(),f=h.isGroup?h.children:[h],d=u[0].count,m=[];for(let _ of f){let x=new Ze,g=new P,p=new Sn,w=new P(1,1,1),S=new So(_.geometry,_.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&w.fromBufferAttribute(c.SCALE,y),S.setMatrixAt(y,x.compose(g,p,w));for(let y in c)if(y==="_COLOR_0"){let D=c[y];S.instanceColor=new cs(D.array,D.itemSize,D.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,c[y]);Ct.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),m.push(S)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}},Fp="glTF",ta=12,Dp={JSON:1313821514,BIN:5130562},Ch=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let n=new DataView(e,0,ta),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Fp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-ta,o=new DataView(e,ta),a=0;for(;a<r;){let l=o.getUint32(a,!0);a+=4;let c=o.getUint32(a,!0);if(a+=4,c===Dp.JSON){let u=new Uint8Array(e,ta+a,l);this.content=i.decode(u)}else if(c===Dp.BIN){let u=ta+a;this.body=e.slice(u,u+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ph=class{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){let i=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},u={};for(let h in a){let f=Uh[h]||h.toLowerCase();l[f]=a[h]}for(let h in e.attributes){let f=Uh[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],m=Fr[d.componentType];u[f]=m.name,c[f]=d.normalized===!0}}return n.getDependency("bufferView",o).then(function(h){return new Promise(function(f,d){r.decodeDracoFile(h,function(m){for(let _ in m.attributes){let x=m.attributes[_],g=c[_];g!==void 0&&(x.normalized=g)}f(m)},l,u,nn,d)})})}},Ih=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}},Lh=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},ac=class extends Gi{constructor(e,n,i,r){super(e,n,i,r)}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let a=0;a!==r;a++)n[a]=i[o+a];return n}interpolate_(e,n,i,r){let o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,u=l*3,h=r-n,f=(i-n)/h,d=f*f,m=d*f,_=e*u,x=_-u,g=-2*m+3*d,p=m-d,w=1-g,S=p-d+f;for(let y=0;y!==l;y++){let D=a[x+y+l],R=a[x+y+c]*h,I=a[_+y+l],U=a[_+y]*h;o[y]=w*D+S*R+g*I+p*U}return o}},Qy=new Sn,Dh=class extends ac{interpolate_(e,n,i,r){let o=super.interpolate_(e,n,i,r);return Qy.fromArray(o).normalize().toArray(o),o}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Up={9728:zt,9729:kt,9984:Ml,9985:Cr,9986:Os,9987:ai},Np={33071:hi,33648:vr,10497:ii},lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eM={CUBICSPLINE:void 0,LINEAR:Cs,STEP:Rs},ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Rn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),s.DefaultMaterial}function qs(s,e,n){for(let i in n.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function $i(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nM(s,e,n){let i=!1,r=!1,o=!1;for(let u=0,h=e.length;u<h;u++){let f=e[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(s);let a=[],l=[],c=[];for(let u=0,h=e.length;u<h;u++){let f=e[u];if(i){let d=f.POSITION!==void 0?n.getDependency("accessor",f.POSITION):s.attributes.position;a.push(d)}if(r){let d=f.NORMAL!==void 0?n.getDependency("accessor",f.NORMAL):s.attributes.normal;l.push(d)}if(o){let d=f.COLOR_0!==void 0?n.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){let h=u[0],f=u[1],d=u[2];return i&&(s.morphAttributes.position=h),r&&(s.morphAttributes.normal=f),o&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function iM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)s.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(s.morphTargetInfluences.length===n.length){s.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)s.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sM(s){let e,n=s.extensions&&s.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+uh(n.attributes):e=s.indices+":"+uh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,r=s.targets.length;i<r;i++)e+=":"+uh(s.targets[i]);return e}function uh(s){let e="",n=Object.keys(s).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+s[n[i]]+";";return e}function Nh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var oM=new Ze,Oh=class{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new jy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,o=!1,a=-1;if(typeof navigator<"u"){let l=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(l)===!0;let c=l.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,o=l.indexOf("Firefox")>-1,a=o?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||o&&a<98?this.textureLoader=new Do(this.options.manager):this.textureLoader=new Bo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ar(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){let i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let l={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return qs(o,l,r),$i(l,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(let c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(n)}_markDefs(){let e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=n.length;r<o;r++){let a=n[r].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let r=0,o=e.length;r<o;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;let r=i.clone(),o=(a,l)=>{let c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(let[u,h]of a.children.entries())o(h,l.children[u])};return o(i,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){let n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){let r=e(n[i]);if(r)return r}return null}_invokeAll(e){let n=Object.values(this.plugins);n.unshift(this);let i=[];for(let r=0;r<n.length;r++){let o=e(n[r]);o&&i.push(o)}return i}getDependency(e,n){let i=e+":"+n,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(n)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(o,a){return i.getDependency(e,a)})),this.cache.add(e,n)}return n}loadBuffer(e){let n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(o,a){i.load(qi.resolveURL(n.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){let n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){let r=n.byteLength||0,o=n.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(e){let n=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=lh[r.type],l=Fr[r.componentType],c=r.normalized===!0,u=new l(r.count*a);return Promise.resolve(new wt(u,a,c))}let o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){let l=a[0],c=lh[r.type],u=Fr[r.componentType],h=u.BYTES_PER_ELEMENT,f=h*c,d=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0,x,g;if(m&&m!==f){let p=Math.floor(d/m),w="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,S=n.cache.get(w);S||(x=new u(l,p*m,r.count*m/h),S=new ls(x,m/h),n.cache.add(w,S)),g=new gn(S,c,d%m/h,_)}else l===null?x=new u(r.count*c):x=new u(l,d,r.count*c),g=new wt(x,c,_);if(r.sparse!==void 0){let p=lh.SCALAR,w=Fr[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,D=new w(a[1],S,r.sparse.count*p),R=new u(a[2],y,r.sparse.count*c);l!==null&&(g=new wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,U=D.length;I<U;I++){let M=D[I];if(g.setX(M,R[I*c]),c>=2&&g.setY(M,R[I*c+1]),c>=3&&g.setZ(M,R[I*c+2]),c>=4&&g.setW(M,R[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(e){let n=this.json,i=this.options,o=n.textures[e].source,a=n.images[o],l=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,o,l)}loadTextureImage(e,n,i){let r=this,o=this.json,a=o.textures[e],l=o.images[n],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let u=this.loadImageSource(n,i).then(function(h){h.flipY=!1,h.name=a.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);let d=(o.samplers||{})[a.sampler]||{};return h.magFilter=Up[d.magFilter]||kt,h.minFilter=Up[d.minFilter]||ai,h.wrapS=Np[d.wrapS]||ii,h.wrapT=Np[d.wrapT]||ii,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==kt,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,n){let i=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=r.images[e],l=self.URL||self.webkitURL,c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(f){u=!0;let d=new Blob([f],{type:a.mimeType});return c=l.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(f){return new Promise(function(d,m){let _=d;n.isImageBitmapLoader===!0&&(_=function(x){let g=new Ht(x);g.needsUpdate=!0,d(g)}),n.load(qi.resolveURL(f,o.path),_,void 0,m)})}).then(function(f){return u===!0&&l.revokeObjectURL(c),$i(f,a),f.userData.mimeType=a.mimeType||rM(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,n,i,r){let o=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),o.extensions[rt.KHR_TEXTURE_TRANSFORM]){let l=i.extensions!==void 0?i.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let c=o.associations.get(a);a=o.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),o.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[n]=a,a})}assignFinalMaterial(e){let n=e.geometry,i=e.material,r=n.attributes.tangent===void 0,o=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+i.uuid,c=this.cache.get(l);c||(c=new wr,En.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(l,c)),i=c}else if(e.isLine){let l="LineBasicMaterial:"+i.uuid,c=this.cache.get(l);c||(c=new Vi,En.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(l,c)),i=c}if(r||o||a){let l="ClonedMaterial:"+i.uuid+":";r&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=i.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Rn}loadMaterial(e){let n=this,i=this.json,r=this.extensions,o=i.materials[e],a,l={},c=o.extensions||{},u=[];if(c[rt.KHR_MATERIALS_UNLIT]){let f=r[rt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(l,o,n))}else{let f=o.pbrMetallicRoughness||{};if(l.color=new Ue(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],nn),l.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(n.assignTexture(l,"map",f.baseColorTexture,xt)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(n.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),u.push(n.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}o.doubleSided===!0&&(l.side=Pt);let h=o.alphaMode||ch.OPAQUE;if(h===ch.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===ch.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==rn&&(u.push(n.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new Ne(1,1),o.normalTexture.scale!==void 0)){let f=o.normalTexture.scale;l.normalScale.set(f,f)}if(o.occlusionTexture!==void 0&&a!==rn&&(u.push(n.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==rn){let f=o.emissiveFactor;l.emissive=new Ue().setRGB(f[0],f[1],f[2],nn)}return o.emissiveTexture!==void 0&&a!==rn&&u.push(n.assignTexture(l,"emissiveMap",o.emissiveTexture,xt)),Promise.all(u).then(function(){let f=new a(l);return o.name&&(f.name=o.name),$i(f,o),n.associations.set(f,{materials:e}),o.extensions&&qs(r,f,o),f})}createUniqueName(e){let n=Et.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){let n=this,i=this.extensions,r=this.primitiveCache;function o(l){return i[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,n).then(function(c){return Op(c,l,n)})}let a=[];for(let l=0,c=e.length;l<c;l++){let u=e[l],h=sM(u),f=r[h];if(f)a.push(f.promise);else{let d;u.extensions&&u.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=o(u):d=Op(new Lt,u,n),r[h]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let n=this,i=this.json,r=this.extensions,o=i.meshes[e],a=o.primitives,l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c].material===void 0?tM(this.cache):this.getDependency("material",a[c].material);l.push(h)}return l.push(n.loadGeometries(a)),Promise.all(l).then(function(c){let u=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let m=0,_=h.length;m<_;m++){let x=h[m],g=a[m],p,w=u[m];if(g.mode===Wn.TRIANGLES||g.mode===Wn.TRIANGLE_STRIP||g.mode===Wn.TRIANGLE_FAN||g.mode===void 0)p=o.isSkinnedMesh===!0?new yo(x,w):new Qe(x,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Wn.TRIANGLE_STRIP?p.geometry=ah(p.geometry,Jo):g.mode===Wn.TRIANGLE_FAN&&(p.geometry=ah(p.geometry,Ir));else if(g.mode===Wn.LINES)p=new Eo(x,w);else if(g.mode===Wn.LINE_STRIP)p=new mi(x,w);else if(g.mode===Wn.LINE_LOOP)p=new wo(x,w);else if(g.mode===Wn.POINTS)p=new To(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&iM(p,o),p.name=n.createUniqueName(o.name||"mesh_"+e),$i(p,o),g.extensions&&qs(r,p,g),n.assignFinalMaterial(p),f.push(p)}for(let m=0,_=f.length;m<_;m++)n.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return o.extensions&&qs(r,f[0],o),f[0];let d=new Jt;o.extensions&&qs(r,d,o),n.associations.set(d,{meshes:e});for(let m=0,_=f.length;m<_;m++)d.add(f[m]);return d})}loadCamera(e){let n,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new Bt(Bs.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new ri(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),$i(n,i),Promise.resolve(n)}loadSkin(e){let n=this.json.skins[e],i=[];for(let r=0,o=n.joints.length;r<o;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let o=r.pop(),a=r,l=[],c=[];for(let u=0,h=a.length;u<h;u++){let f=a[u];if(f){l.push(f);let d=new Ze;o!==null&&d.fromArray(o.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[u])}return new bo(l,c)})}loadAnimation(e){let n=this.json,i=this,r=n.animations[e],o=r.name?r.name:"animation_"+e,a=[],l=[],c=[],u=[],h=[];for(let f=0,d=r.channels.length;f<d;f++){let m=r.channels[f],_=r.samplers[m.sampler],x=m.target,g=x.node,p=r.parameters!==void 0?r.parameters[_.input]:_.input,w=r.parameters!==void 0?r.parameters[_.output]:_.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",w)),u.push(_),h.push(x))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(f){let d=f[0],m=f[1],_=f[2],x=f[3],g=f[4],p=[];for(let w=0,S=d.length;w<S;w++){let y=d[w],D=m[w],R=_[w],I=x[w],U=g[w];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=i._createAnimationTracks(y,D,R,I,U);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new Lo(o,void 0,p)})}createNodeMesh(e){let n=this.json,i=this,r=n.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){let a=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,u=r.weights.length;c<u;c++)l.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let n=this.json,i=this,r=n.nodes[e],o=i._loadNodeShallow(e),a=[],l=r.children||[];for(let u=0,h=l.length;u<h;u++)a.push(i.getDependency("node",l[u]));let c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),c]).then(function(u){let h=u[0],f=u[1],d=u[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,oM)});for(let m=0,_=f.length;m<_;m++)h.add(f[m]);return h})}_loadNodeShallow(e){let n=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let o=n.nodes[e],a=o.name?r.createUniqueName(o.name):"",l=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&l.push(c),o.camera!==void 0&&l.push(r.getDependency("camera",o.camera).then(function(u){return r._getNodeRef(r.cameraCache,o.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){l.push(u)}),this.nodeCache[e]=Promise.all(l).then(function(u){let h;if(o.isBone===!0?h=new Sr:u.length>1?h=new Jt:u.length===1?h=u[0]:h=new Ct,h!==u[0])for(let f=0,d=u.length;f<d;f++)h.add(u[f]);if(o.name&&(h.userData.name=o.name,h.name=a),$i(h,o),o.extensions&&qs(i,h,o),o.matrix!==void 0){let f=new Ze;f.fromArray(o.matrix),h.applyMatrix4(f)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let n=this.extensions,i=this.json.scenes[e],r=this,o=new Jt;i.name&&(o.name=r.createUniqueName(i.name)),$i(o,i),i.extensions&&qs(n,o,i);let a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(r.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let h=0,f=c.length;h<f;h++)o.add(c[h]);let u=h=>{let f=new Map;for(let[d,m]of r.associations)(d instanceof En||d instanceof Ht)&&f.set(d,m);return h.traverse(d=>{let m=r.associations.get(d);m!=null&&f.set(d,m)}),f};return r.associations=u(o),o})}_createAnimationTracks(e,n,i,r,o){let a=[],l=e.name?e.name:e.uuid,c=[];ms[o.path]===ms.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(l);let u;switch(ms[o.path]){case ms.weights:u=_i;break;case ms.rotation:u=xi;break;case ms.position:case ms.scale:u=vi;break;default:switch(i.itemSize){case 1:u=_i;break;case 2:case 3:default:u=vi;break}break}let h=r.interpolation!==void 0?eM[r.interpolation]:Cs,f=this._getArrayFromAccessor(i);for(let d=0,m=c.length;d<m;d++){let _=new u(c[d]+"."+ms[o.path],n.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){let i=Nh(n.constructor),r=new Float32Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=n[o]*i;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof xi?Dh:ac;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function aM(s,e,n){let i=e.attributes,r=new Dt;if(i.POSITION!==void 0){let l=n.json.accessors[i.POSITION],c=l.min,u=l.max;if(c!==void 0&&u!==void 0){if(r.set(new P(c[0],c[1],c[2]),new P(u[0],u[1],u[2])),l.normalized){let h=Nh(Fr[l.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let o=e.targets;if(o!==void 0){let l=new P,c=new P;for(let u=0,h=o.length;u<h;u++){let f=o[u];if(f.POSITION!==void 0){let d=n.json.accessors[f.POSITION],m=d.min,_=d.max;if(m!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(_[2]))),d.normalized){let x=Nh(Fr[d.componentType]);c.multiplyScalar(x)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(l)}s.boundingBox=r;let a=new Kt;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=a}function Op(s,e,n){let i=e.attributes,r=[];function o(a,l){return n.getDependency("accessor",a).then(function(c){s.setAttribute(l,c)})}for(let a in i){let l=Uh[a]||a.toLowerCase();l in s.attributes||r.push(o(i[a],l))}if(e.indices!==void 0&&!s.index){let a=n.getDependency("accessor",e.indices).then(function(l){s.setIndex(l)});r.push(a)}return lt.workingColorSpace!==nn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),$i(s,e),aM(s,e,n),Promise.all(r).then(function(){return e.targets!==void 0?nM(s,e.targets,n):s})}var Bp={type:"change"},Bh={type:"start"},kp={type:"end"},lc=new pi,zp=new mn,lM=Math.cos(70*Bs.DEG2RAD),Xt=new P,Pn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fh=1e-6,cc=class extends Ho{constructor(e,n=null){super(e,n),this.state=bt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Sn,this._lastTargetPosition=new P,this._quat=new Sn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rr,this._sphericalDelta=new Rr,this._scale=1,this._panOffset=new P,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new P,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uM.bind(this),this._onPointerDown=cM.bind(this),this._onPointerUp=hM.bind(this),this._onContextMenu=xM.bind(this),this._onMouseWheel=pM.bind(this),this._onKeyDown=mM.bind(this),this._onTouchStart=gM.bind(this),this._onTouchMove=_M.bind(this),this._onMouseDown=fM.bind(this),this._onMouseMove=dM.bind(this),this._interceptControlDown=vM.bind(this),this._interceptControlUp=yM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bp),this.update(),this.state=bt.NONE}update(e=null){let n=this.object.position;Xt.copy(n).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),r<-Math.PI?r+=Pn:r>Math.PI&&(r-=Pn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let l=Xt.length();a=this._clampDistance(l*this._scale);let c=l-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;let u=new P(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(l),this.object.updateMatrixWorld(),a=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<lM?this.object.lookAt(this.target):(zp.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(zp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Fh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fh||this._lastTargetPosition.distanceToSquared(this.target)>Fh?(this.dispatchEvent(Bp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Pn/60*this.autoRotateSpeed*e:Pn/60/60*this.autoRotateSpeed}_getZoomScale(e){let n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Xt.setFromMatrixColumn(n,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,n){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(n,1):(Xt.setFromMatrixColumn(n,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Xt.copy(r).sub(this.target);let o=Xt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*n*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,o=n-i.top,a=i.width,l=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+n.x)*.5,l=(e.pageY+n.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ne,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){let n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function cM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function uM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function hM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kp),this.state=bt.NONE;break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function fM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=bt.DOLLY;break;case fs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}break;case fs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Bh)}function dM(s){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function pM(s){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(s.preventDefault(),this.dispatchEvent(Bh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(kp))}function mM(s){this.enabled!==!1&&this._handleKeyDown(s)}function gM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=bt.TOUCH_ROTATE;break;case ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=bt.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Bh)}function _M(s){switch(this._trackPointer(s),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=bt.NONE}}function xM(s){this.enabled!==!1&&s.preventDefault()}function vM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var uc=class extends Vn{constructor(){super();let e=new as;e.deleteAttribute("uv");let n=new Rn({side:on}),i=new Rn,r=new Ds(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let o=new Qe(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let a=new Qe(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let l=new Qe(e,i);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let c=new Qe(e,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let u=new Qe(e,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let h=new Qe(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new Qe(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let d=new Qe(e,Br(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let m=new Qe(e,Br(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let _=new Qe(e,Br(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let x=new Qe(e,Br(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new Qe(e,Br(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new Qe(e,Br(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(let n of e)n.dispose()}};function Br(s){let e=new rn;return e.color.setScalar(s),e}var ln=Uint8Array,On=Uint16Array,Wh=Int32Array,Xh=new ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),qh=new ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Hp=new ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Yp=function(s,e){for(var n=new On(31),i=0;i<31;++i)n[i]=e+=1<<s[i-1];for(var r=new Wh(n[30]),i=1;i<30;++i)for(var o=n[i];o<n[i+1];++o)r[o]=o-n[i]<<5|i;return{b:n,r}},Zp=Yp(Xh,2),MM=Zp.b,kh=Zp.r;MM[28]=258,kh[258]=28;var $p=Yp(qh,0),Kw=$p.b,Vp=$p.r,Hh=new On(32768);for(ft=0;ft<32768;++ft)Ki=(ft&43690)>>1|(ft&21845)<<1,Ki=(Ki&52428)>>2|(Ki&13107)<<2,Ki=(Ki&61680)>>4|(Ki&3855)<<4,Hh[ft]=((Ki&65280)>>8|(Ki&255)<<8)>>1;var Ki,ft,sa=function(s,e,n){for(var i=s.length,r=0,o=new On(e);r<i;++r)s[r]&&++o[s[r]-1];var a=new On(e);for(r=1;r<e;++r)a[r]=a[r-1]+o[r-1]<<1;var l;if(n){l=new On(1<<e);var c=15-e;for(r=0;r<i;++r)if(s[r])for(var u=r<<4|s[r],h=e-s[r],f=a[s[r]-1]++<<h,d=f|(1<<h)-1;f<=d;++f)l[Hh[f]>>c]=u}else for(l=new On(i),r=0;r<i;++r)s[r]&&(l[r]=Hh[a[s[r]-1]++]>>15-s[r]);return l},Ys=new ln(288);for(ft=0;ft<144;++ft)Ys[ft]=8;var ft;for(ft=144;ft<256;++ft)Ys[ft]=9;var ft;for(ft=256;ft<280;++ft)Ys[ft]=7;var ft;for(ft=280;ft<288;++ft)Ys[ft]=8;var ft,hc=new ln(32);for(ft=0;ft<32;++ft)hc[ft]=5;var ft,bM=sa(Ys,9,0);var SM=sa(hc,5,0);var Kp=function(s){return(s+7)/8|0},Jp=function(s,e,n){return(e==null||e<0)&&(e=0),(n==null||n>s.length)&&(n=s.length),new ln(s.subarray(e,n))};var EM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fc=function(s,e,n){var i=new Error(e||EM[s]);if(i.code=s,Error.captureStackTrace&&Error.captureStackTrace(i,fc),!n)throw i;return i};var Ji=function(s,e,n){n<<=e&7;var i=e/8|0;s[i]|=n,s[i+1]|=n>>8},na=function(s,e,n){n<<=e&7;var i=e/8|0;s[i]|=n,s[i+1]|=n>>8,s[i+2]|=n>>16},zh=function(s,e){for(var n=[],i=0;i<s.length;++i)s[i]&&n.push({s:i,f:s[i]});var r=n.length,o=n.slice();if(!r)return{t:Qp,l:0};if(r==1){var a=new ln(n[0].s+1);return a[n[0].s]=1,{t:a,l:1}}n.sort(function(D,R){return D.f-R.f}),n.push({s:-1,f:25001});var l=n[0],c=n[1],u=0,h=1,f=2;for(n[0]={s:-1,f:l.f+c.f,l,r:c};h!=r-1;)l=n[n[u].f<n[f].f?u++:f++],c=n[u!=h&&n[u].f<n[f].f?u++:f++],n[h++]={s:-1,f:l.f+c.f,l,r:c};for(var d=o[0].s,i=1;i<r;++i)o[i].s>d&&(d=o[i].s);var m=new On(d+1),_=Vh(n[h-1],m,0);if(_>e){var i=0,x=0,g=_-e,p=1<<g;for(o.sort(function(R,I){return m[I.s]-m[R.s]||R.f-I.f});i<r;++i){var w=o[i].s;if(m[w]>e)x+=p-(1<<_-m[w]),m[w]=e;else break}for(x>>=g;x>0;){var S=o[i].s;m[S]<e?x-=1<<e-m[S]++-1:++i}for(;i>=0&&x;--i){var y=o[i].s;m[y]==e&&(--m[y],++x)}_=e}return{t:new ln(m),l:_}},Vh=function(s,e,n){return s.s==-1?Math.max(Vh(s.l,e,n+1),Vh(s.r,e,n+1)):e[s.s]=n},Gp=function(s){for(var e=s.length;e&&!s[--e];);for(var n=new On(++e),i=0,r=s[0],o=1,a=function(c){n[i++]=c},l=1;l<=e;++l)if(s[l]==r&&l!=e)++o;else{if(!r&&o>2){for(;o>138;o-=138)a(32754);o>2&&(a(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(a(r),--o;o>6;o-=6)a(8304);o>2&&(a(o-3<<5|8208),o=0)}for(;o--;)a(r);o=1,r=s[l]}return{c:n.subarray(0,i),n:e}},ia=function(s,e){for(var n=0,i=0;i<e.length;++i)n+=s[i]*e[i];return n},jp=function(s,e,n){var i=n.length,r=Kp(e+2);s[r]=i&255,s[r+1]=i>>8,s[r+2]=s[r]^255,s[r+3]=s[r+1]^255;for(var o=0;o<i;++o)s[r+o+4]=n[o];return(r+4+i)*8},Wp=function(s,e,n,i,r,o,a,l,c,u,h){Ji(e,h++,n),++r[256];for(var f=zh(r,15),d=f.t,m=f.l,_=zh(o,15),x=_.t,g=_.l,p=Gp(d),w=p.c,S=p.n,y=Gp(x),D=y.c,R=y.n,I=new On(19),U=0;U<w.length;++U)++I[w[U]&31];for(var U=0;U<D.length;++U)++I[D[U]&31];for(var M=zh(I,7),b=M.t,B=M.l,$=19;$>4&&!b[Hp[$-1]];--$);var F=u+5<<3,X=ia(r,Ys)+ia(o,hc)+a,J=ia(r,d)+ia(o,x)+a+14+3*$+ia(I,b)+2*I[16]+3*I[17]+7*I[18];if(c>=0&&F<=X&&F<=J)return jp(e,h,s.subarray(c,c+u));var K,oe,Y,te;if(Ji(e,h,1+(J<X)),h+=2,J<X){K=sa(d,m,0),oe=d,Y=sa(x,g,0),te=x;var he=sa(b,B,0);Ji(e,h,S-257),Ji(e,h+5,R-1),Ji(e,h+10,$-4),h+=14;for(var U=0;U<$;++U)Ji(e,h+3*U,b[Hp[U]]);h+=3*$;for(var Se=[w,D],ue=0;ue<2;++ue)for(var me=Se[ue],U=0;U<me.length;++U){var G=me[U]&31;Ji(e,h,he[G]),h+=b[G],G>15&&(Ji(e,h,me[U]>>5&127),h+=me[U]>>12)}}else K=bM,oe=Ys,Y=SM,te=hc;for(var U=0;U<l;++U){var ae=i[U];if(ae>255){var G=ae>>18&31;na(e,h,K[G+257]),h+=oe[G+257],G>7&&(Ji(e,h,ae>>23&31),h+=Xh[G]);var ce=ae&31;na(e,h,Y[ce]),h+=te[ce],ce>3&&(na(e,h,ae>>5&8191),h+=qh[ce])}else na(e,h,K[ae]),h+=oe[ae]}return na(e,h,K[256]),h+oe[256]},wM=new Wh([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Qp=new ln(0),TM=function(s,e,n,i,r,o){var a=o.z||s.length,l=new ln(i+a+5*(1+Math.ceil(a/7e3))+r),c=l.subarray(i,l.length-r),u=o.l,h=(o.r||0)&7;if(e){h&&(c[0]=o.r>>3);for(var f=wM[e-1],d=f>>13,m=f&8191,_=(1<<n)-1,x=o.p||new On(32768),g=o.h||new On(_+1),p=Math.ceil(n/3),w=2*p,S=function(N){return(s[N]^s[N+1]<<p^s[N+2]<<w)&_},y=new Wh(25e3),D=new On(288),R=new On(32),I=0,U=0,M=o.i||0,b=0,B=o.w||0,$=0;M+2<a;++M){var F=S(M),X=M&32767,J=g[F];if(x[X]=J,g[F]=X,B<=M){var K=a-M;if((I>7e3||b>24576)&&(K>423||!u)){h=Wp(s,c,0,y,D,R,U,b,$,M-$,h),b=I=U=0,$=M;for(var oe=0;oe<286;++oe)D[oe]=0;for(var oe=0;oe<30;++oe)R[oe]=0}var Y=2,te=0,he=m,Se=X-J&32767;if(K>2&&F==S(M-Se))for(var ue=Math.min(d,K)-1,me=Math.min(32767,M),G=Math.min(258,K);Se<=me&&--he&&X!=J;){if(s[M+Y]==s[M+Y-Se]){for(var ae=0;ae<G&&s[M+ae]==s[M+ae-Se];++ae);if(ae>Y){if(Y=ae,te=Se,ae>ue)break;for(var ce=Math.min(Se,ae-2),fe=0,oe=0;oe<ce;++oe){var ge=M-Se+oe&32767,_e=x[ge],Oe=ge-_e&32767;Oe>fe&&(fe=Oe,J=ge)}}}X=J,J=x[X],Se+=X-J&32767}if(te){y[b++]=268435456|kh[Y]<<18|Vp[te];var ct=kh[Y]&31,$e=Vp[te]&31;U+=Xh[ct]+qh[$e],++D[257+ct],++R[$e],B=M+Y,++I}else y[b++]=s[M],++D[s[M]]}}for(M=Math.max(M,B);M<a;++M)y[b++]=s[M],++D[s[M]];h=Wp(s,c,u,y,D,R,U,b,$,M-$,h),u||(o.r=h&7|c[h/8|0]<<3,h-=7,o.h=g,o.p=x,o.i=M,o.w=B)}else{for(var M=o.w||0;M<a+u;M+=65535){var Je=M+65535;Je>=a&&(c[h/8|0]=u,Je=a),h=jp(c,h+1,s.subarray(M,Je))}o.i=a}return Jp(l,0,i+Kp(h)+r)},AM=function(){for(var s=new Int32Array(256),e=0;e<256;++e){for(var n=e,i=9;--i;)n=(n&1&&-306674912)^n>>>1;s[e]=n}return s}(),RM=function(){var s=-1;return{p:function(e){for(var n=s,i=0;i<e.length;++i)n=AM[n&255^e[i]]^n>>>8;s=n},d:function(){return~s}}};var CM=function(s,e,n,i,r){if(!r&&(r={l:1},e.dictionary)){var o=e.dictionary.subarray(-32768),a=new ln(o.length+s.length);a.set(o),a.set(s,o.length),s=a,r.w=o.length}return TM(s,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):20:12+e.mem,n,i,r)},em=function(s,e){var n={};for(var i in s)n[i]=s[i];for(var i in e)n[i]=e[i];return n};var an=function(s,e,n){for(;n;++e)s[e]=n,n>>>=8};function PM(s,e){return CM(s,e||{},0,0)}var tm=function(s,e,n,i){for(var r in s){var o=s[r],a=e+r,l=i;Array.isArray(o)&&(l=em(i,o[1]),o=o[0]),o instanceof ln?n[a]=[o,l]:(n[a+="/"]=[new ln(0),l],tm(o,a,n,i))}},Xp=typeof TextEncoder<"u"&&new TextEncoder,IM=typeof TextDecoder<"u"&&new TextDecoder,LM=0;try{IM.decode(Qp,{stream:!0}),LM=1}catch{}function ra(s,e){if(e){for(var n=new ln(s.length),i=0;i<s.length;++i)n[i]=s.charCodeAt(i);return n}if(Xp)return Xp.encode(s);for(var r=s.length,o=new ln(s.length+(s.length>>1)),a=0,l=function(h){o[a++]=h},i=0;i<r;++i){if(a+5>o.length){var c=new ln(a+8+(r-i<<1));c.set(o),o=c}var u=s.charCodeAt(i);u<128||e?l(u):u<2048?(l(192|u>>6),l(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|s.charCodeAt(++i)&1023,l(240|u>>18),l(128|u>>12&63),l(128|u>>6&63),l(128|u&63)):(l(224|u>>12),l(128|u>>6&63),l(128|u&63))}return Jp(o,0,a)}var Gh=function(s){var e=0;if(s)for(var n in s){var i=s[n].length;i>65535&&fc(9),e+=i+4}return e},qp=function(s,e,n,i,r,o,a,l){var c=i.length,u=n.extra,h=l&&l.length,f=Gh(u);an(s,e,a!=null?33639248:67324752),e+=4,a!=null&&(s[e++]=20,s[e++]=n.os),s[e]=20,e+=2,s[e++]=n.flag<<1|(o<0&&8),s[e++]=r&&8,s[e++]=n.compression&255,s[e++]=n.compression>>8;var d=new Date(n.mtime==null?Date.now():n.mtime),m=d.getFullYear()-1980;if((m<0||m>119)&&fc(10),an(s,e,m<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,o!=-1&&(an(s,e,n.crc),an(s,e+4,o<0?-o-2:o),an(s,e+8,n.size)),an(s,e+12,c),an(s,e+14,f),e+=16,a!=null&&(an(s,e,h),an(s,e+6,n.attrs),an(s,e+10,a),e+=14),s.set(i,e),e+=c,f)for(var _ in u){var x=u[_],g=x.length;an(s,e,+_),an(s,e+2,g),s.set(x,e+4),e+=4+g}return h&&(s.set(l,e),e+=h),e},DM=function(s,e,n,i,r){an(s,e,101010256),an(s,e+8,n),an(s,e+10,n),an(s,e+12,i),an(s,e+16,r)};function nm(s,e){e||(e={});var n={},i=[];tm(s,"",n,e);var r=0,o=0;for(var a in n){var l=n[a],c=l[0],u=l[1],h=u.level==0?0:8,f=ra(a),d=f.length,m=u.comment,_=m&&ra(m),x=_&&_.length,g=Gh(u.extra);d>65535&&fc(11);var p=h?PM(c,u):c,w=p.length,S=RM();S.p(c),i.push(em(u,{size:c.length,crc:S.d(),c:p,f,m:_,u:d!=a.length||_&&m.length!=x,o:r,compression:h})),r+=30+d+g+w,o+=76+2*(d+g)+(x||0)+w}for(var y=new ln(o+22),D=r,R=o-r,I=0;I<i.length;++I){var f=i[I];qp(y,f.o,f,f.f,f.u,f.c.length);var U=30+f.f.length+Gh(f.extra);y.set(f.c,f.o+U),qp(y,r,f,f.f,f.u,f.c.length,f.o,f.m),r+=16+U+(f.m?f.m.length:0)}return DM(y,r,i.length,R,D),y}var pc=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,n,i,r){this.parseAsync(e,r).then(n).catch(i)}async parseAsync(e,n={}){n=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},n);let i={},r="model.usda";i[r]=null;let o=rm();o+=NM(n);let a={},l={};e.traverseVisible(u=>{if(u.isMesh){let h=u.geometry,f=u.material;if(f.isMeshStandardMaterial){let d="geometries/Geometry_"+h.id+".usda";if(!(d in i)){let m=zM(h);i[d]=FM(m)}f.uuid in a||(a[f.uuid]=f),o+=BM(u,h,f)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",u)}else u.isCamera&&(o+=ZM(u))}),o+=OM(),o+=XM(a,l,n.quickLookCompatible),i[r]=ra(o),o=null;for(let u in l){let h=l[u];if(h.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");h=await this.textureUtils.decompress(h)}let f=UM(h.image,h.flipY,n.maxTextureSize),d=await new Promise(m=>f.toBlob(m,"image/png",1));i[`textures/Texture_${u}.png`]=new Uint8Array(await d.arrayBuffer())}let c=0;for(let u in i){let h=i[u],f=34+u.length;c+=f;let d=c&63;if(d!==4){let m=64-d,_=new Uint8Array(m);i[u]=[h,{extra:{12345:_}}]}c=h.length}return nm(i,{level:0})}};function UM(s,e,n){if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&s instanceof ImageBitmap){let i=n/Math.max(s.width,s.height),r=document.createElement("canvas");r.width=s.width*Math.min(1,i),r.height=s.height*Math.min(1,i);let o=r.getContext("2d");return e===!0&&(o.translate(0,r.height),o.scale(1,-1)),o.drawImage(s,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var vn=7;function rm(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function NM(s){return`def Xform "Root"
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
		{${s.includeAnchoringProperties===!0?`
		token preliminary:anchoring:type = "${s.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${s.ar.planeAnchoring.alignment}"
	`:""}
`}function OM(){return`
		}
	}
}

`}function FM(s){let e=rm();return e+=s,ra(e)}function BM(s,e,n){let i="Object_"+s.id,r=om(s.matrixWorld);return s.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s),`def Xform "${i}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${r}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${n.id}>
}

`}function om(s){let e=s.elements;return`( ${dc(e,0)}, ${dc(e,4)}, ${dc(e,8)}, ${dc(e,12)} )`}function dc(s,e){return`(${s[e+0]}, ${s[e+1]}, ${s[e+2]}, ${s[e+3]})`}function zM(s){return`
def "Geometry"
{
${kM(s)}
}
`}function kM(s){let e="Geometry",n=s.attributes,i=n.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${HM(s)}]
		int[] faceVertexIndices = [${VM(s)}]
		normal3f[] normals = [${Yh(n.normal,i)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${Yh(n.position,i)}]
${WM(n)}
		uniform token subdivisionScheme = "none"
	}
`}function HM(s){let e=s.index!==null?s.index.count:s.attributes.position.count;return Array(e/3).fill(3).join(", ")}function VM(s){let e=s.index,n=[];if(e!==null)for(let i=0;i<e.count;i++)n.push(e.getX(i));else{let i=s.attributes.position.count;for(let r=0;r<i;r++)n.push(r)}return n.join(", ")}function Yh(s,e){if(s===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let n=[];for(let i=0;i<s.count;i++){let r=s.getX(i),o=s.getY(i),a=s.getZ(i);n.push(`(${r.toPrecision(vn)}, ${o.toPrecision(vn)}, ${a.toPrecision(vn)})`)}return n.join(", ")}function GM(s){let e=[];for(let n=0;n<s.count;n++){let i=s.getX(n),r=s.getY(n);e.push(`(${i.toPrecision(vn)}, ${1-r.toPrecision(vn)})`)}return e.join(", ")}function WM(s){let e="";for(let i=0;i<4;i++){let r=i>0?i:"",o=s["uv"+r];o!==void 0&&(e+=`
		texCoord2f[] primvars:st${r} = [${GM(o)}] (
			interpolation = "vertex"
		)`)}let n=s.color;if(n!==void 0){let i=n.count;e+=`
	color3f[] primvars:displayColor = [${Yh(n,i)}] (
		interpolation = "vertex"
		)`}return e}function XM(s,e,n=!1){let i=[];for(let r in s){let o=s[r];i.push(qM(o,e,n))}return`def "Materials"
{
${i.join("")}
}

`}function qM(s,e,n=!1){let i="			",r=[],o=[];function a(l,c,u){let h=l.source.id+"_"+l.flipY;e[h]=l;let f=l.channel>0?"st"+l.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},m=l.repeat.clone(),_=l.offset.clone(),x=l.rotation,g=Math.sin(x),p=Math.cos(x);return _.y=1-_.y-m.y,n?(_.x=_.x/m.x,_.y=_.y/m.y,_.x+=g/m.x,_.y+=p-1):(_.x+=g*m.x,_.y+=(1-p)*m.y),`
		def Shader "PrimvarReader_${c}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${f}"
			float2 outputs:result
		}

		def Shader "Transform2d_${c}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${s.id}/PrimvarReader_${c}.outputs:result>
			float inputs:rotation = ${(x*(180/Math.PI)).toFixed(vn)}
			float2 inputs:scale = ${sm(m)}
			float2 inputs:translation = ${sm(_)}
			float2 outputs:result
		}

		def Shader "Texture_${l.id}_${c}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${h}.png@
			float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${c}.outputs:result>
			${u!==void 0?"float4 inputs:scale = "+YM(u):""}
			token inputs:sourceColorSpace = "${l.colorSpace===li?"raw":"sRGB"}"
			token inputs:wrapS = "${d[l.wrapS]}"
			token inputs:wrapT = "${d[l.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${s.transparent||s.alphaTest>0?"float outputs:a":""}
		}`}return s.side===Pt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",s),s.map!==null?(r.push(`${i}color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`),s.transparent?r.push(`${i}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`):s.alphaTest>0&&(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`),r.push(`${i}float inputs:opacityThreshold = ${s.alphaTest}`)),o.push(a(s.map,"diffuse",s.color))):r.push(`${i}color3f inputs:diffuseColor = ${im(s.color)}`),s.emissiveMap!==null?(r.push(`${i}color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`),o.push(a(s.emissiveMap,"emissive",new Ue(s.emissive.r*s.emissiveIntensity,s.emissive.g*s.emissiveIntensity,s.emissive.b*s.emissiveIntensity)))):s.emissive.getHex()>0&&r.push(`${i}color3f inputs:emissiveColor = ${im(s.emissive)}`),s.normalMap!==null&&(r.push(`${i}normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`),o.push(a(s.normalMap,"normal"))),s.aoMap!==null&&(r.push(`${i}float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`),o.push(a(s.aoMap,"occlusion",new Ue(s.aoMapIntensity,s.aoMapIntensity,s.aoMapIntensity)))),s.roughnessMap!==null?(r.push(`${i}float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`),o.push(a(s.roughnessMap,"roughness",new Ue(s.roughness,s.roughness,s.roughness)))):r.push(`${i}float inputs:roughness = ${s.roughness}`),s.metalnessMap!==null?(r.push(`${i}float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`),o.push(a(s.metalnessMap,"metallic",new Ue(s.metalness,s.metalness,s.metalness)))):r.push(`${i}float inputs:metallic = ${s.metalness}`),s.alphaMap!==null?(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`),r.push(`${i}float inputs:opacityThreshold = 0.0001`),o.push(a(s.alphaMap,"opacity"))):r.push(`${i}float inputs:opacity = ${s.opacity}`),s.isMeshPhysicalMaterial&&(s.clearcoatMap!==null?(r.push(`${i}float inputs:clearcoat.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatMap.id}_clearcoat.outputs:r>`),o.push(a(s.clearcoatMap,"clearcoat",new Ue(s.clearcoat,s.clearcoat,s.clearcoat)))):r.push(`${i}float inputs:clearcoat = ${s.clearcoat}`),s.clearcoatRoughnessMap!==null?(r.push(`${i}float inputs:clearcoatRoughness.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),o.push(a(s.clearcoatRoughnessMap,"clearcoatRoughness",new Ue(s.clearcoatRoughness,s.clearcoatRoughness,s.clearcoatRoughness)))):r.push(`${i}float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`),r.push(`${i}float inputs:ior = ${s.ior}`)),`
	def Material "Material_${s.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${r.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>

${o.join(`
`)}

	}
`}function im(s){return`(${s.r}, ${s.g}, ${s.b})`}function YM(s){return`(${s.r}, ${s.g}, ${s.b}, 1.0)`}function sm(s){return`(${s.x}, ${s.y})`}function ZM(s){let e=s.name?s.name:"Camera_"+s.id,n=om(s.matrixWorld);return s.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s),s.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${n}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${s.near.toPrecision(vn)}, ${s.far.toPrecision(vn)})
			float horizontalAperture = ${((Math.abs(s.left)+Math.abs(s.right))*10).toPrecision(vn)}
			float verticalAperture = ${((Math.abs(s.top)+Math.abs(s.bottom))*10).toPrecision(vn)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${n}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${s.near.toPrecision(vn)}, ${s.far.toPrecision(vn)})
			float focalLength = ${s.getFocalLength().toPrecision(vn)}
			float focusDistance = ${s.focus.toPrecision(vn)}
			float horizontalAperture = ${s.getFilmWidth().toPrecision(vn)}
			token projection = "perspective"
			float verticalAperture = ${s.getFilmHeight().toPrecision(vn)}
		}
	
	`}var lm="blueprints.materialMode",mc="solid",oa="realistic",$M={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],plaster:[255,225,120],furniture:[255,150,0],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_naturheld_flex_50:[35,175,15],slope_battens:[160,100,30],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_naturheld_flex_50:[35,175,15],soffit_battens:[160,100,30],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100]},KM={floor:0,eps:1,masonry:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,slope_naturheld_flex_50:7,soffit_naturheld_flex_50:7,slope_battens:8,soffit_battens:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,bass_wall_hanger:9,racking_strap:9,wall_plate:9,plenum_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14},JM=[];function cm(s,e,n){let i=new Set(s),r=Array.isArray(e)&&e.length?e:JM,o=typeof n=="function"?n:c=>c;function a(c){let u=[];for(let h of c){if(typeof h=="string"){if(!i.has(h))continue;i.delete(h),u.push({type:"leaf",id:h,label:o(h)});continue}let f=a(h.children||[]);f.length&&u.push({type:"group",id:h.id,label:o(h.id),children:f})}return u}let l=a(r);if(i.size){let c=[...i].sort((u,h)=>u.localeCompare(h)).map(u=>({type:"leaf",id:u,label:o(u)}));l.push({type:"group",id:"other",label:o("other"),children:c})}return l}function um(s,e){if(!s||typeof s!="object")return{};let n=new Map;for(let r of e)r.type==="group"&&n.set(r.id,gc(r));let i={};for(let[r,o]of Object.entries(s)){let a=n.get(r);if(a&&a.length)for(let l of a)i[l]=o;else i[r]=o}return i}function gc(s){if(s.type==="leaf")return[s.id];let e=[];for(let n of s.children)e.push(...gc(n));return e}function jM(s,e,n="transparent"){if(n==="none")return;let i=n==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let r of s.children||[]){if(!r?.userData?.isEdgeOverlay||!r.material)continue;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a&&(i<1?(a.transparent=!0,a.opacity=i,a.depthWrite=!1):(a.transparent=!1,a.opacity=1),a.needsUpdate=!0)}}function zr(s,e,n={}){let i=Math.max(0,Math.min(1,Number(e)||0)),r=n.edgeMode??"transparent";for(let o of s){if(!o)continue;if(i<=0){o.visible=!1;continue}if(o.visible=!0,!o.isMesh)continue;let a=Array.isArray(o.material)?o.material:[o.material];for(let l of a)l&&(i<1?(l.transparent=!0,l.opacity=i,l.depthWrite=!1,l.depthTest=!0,l.side=Pt,l.forceSinglePass=!0,l.userData.needsDepthPeel=!0):(l.transparent=!1,l.opacity=1,l.depthWrite=!0,l.depthTest=!0,l.side=Pt,l.forceSinglePass=!1,l.blending=Hn,l.userData.needsDepthPeel=!1),l.needsUpdate=!0);typeof o.userData.opaqueRenderOrder!="number"&&(o.userData.opaqueRenderOrder=o.renderOrder||0),o.renderOrder=i<1?0:o.userData.opaqueRenderOrder,jM(o,i,r)}}var QM={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_flex_50:{color:[35,175,15],roughness:.92,metalness:0,map:"wool"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_battens:{color:[160,100,30],roughness:.55,metalness:0,map:"wood"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_naturheld_flex_50:{color:[35,175,15],roughness:.92,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_battens:{color:[160,100,30],roughness:.55,metalness:0,map:"wood"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"}},Zh=new Map;function eb(s){if(!s||s==="none")return null;let e=Zh.get(s);if(e)return e;let n=128,i=document.createElement("canvas");i.width=n,i.height=n;let r=i.getContext("2d");if(!r)return null;if(s==="wood"){r.fillStyle="#c49858",r.fillRect(0,0,n,n);for(let a=0;a<n;a++){let l=Math.sin(a*.35)*8+Math.sin(a*.11)*4,c=130+a*17%50;r.strokeStyle=`rgba(${c-40}, ${c-60}, ${c-100}, 0.55)`,r.lineWidth=1.2,r.beginPath(),r.moveTo(0,a+l*.15),r.lineTo(n,a-l*.1),r.stroke()}for(let a=0;a<60;a++){let l=a*37%n,c=a*53%n;r.fillStyle="rgba(70, 40, 15, 0.22)",r.fillRect(l,c,2,7+a%5)}}else if(s==="foam"){r.fillStyle="#9ed468",r.fillRect(0,0,n,n);for(let a=0;a<n;a+=7)for(let l=0;l<n;l+=7){let c=a/7%2*3.5,u=2.4+l*a%5*.2;r.beginPath(),r.arc(l+c+3.5,a+3.5,u,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.55)",r.fill(),r.strokeStyle="rgba(40,90,30,0.35)",r.stroke()}}else if(s==="plaster"){let a=r.createImageData(n,n);for(let l=0;l<a.data.length;l+=4){let c=200+l*13%45;a.data[l]=c,a.data[l+1]=c-10,a.data[l+2]=c-22,a.data[l+3]=255}r.putImageData(a,0,0)}else if(s==="wool"){r.fillStyle="#88c860",r.fillRect(0,0,n,n);for(let a=0;a<1400;a++){let l=a*47%n,c=a*91%n;r.fillStyle=a%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",r.fillRect(l,c,1+a%2,2+a%3)}}else if(s==="metal"){let a=r.createLinearGradient(0,0,n,n);a.addColorStop(0,"#a02820"),a.addColorStop(.4,"#f07060"),a.addColorStop(.55,"#701810"),a.addColorStop(1,"#d04838"),r.fillStyle=a,r.fillRect(0,0,n,n);for(let l=0;l<n;l+=9)r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(0,l,n,2),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(0,l+4,n,2)}else if(s==="masonry"){r.fillStyle="#b88868",r.fillRect(0,0,n,n);let a=16,l=32;for(let c=0;c<n/a;c++){let u=c%2*(l/2);for(let h=-1;h<n/l+1;h++){let f=h*l+u,d=c*a;r.fillStyle=`rgba(${170+(c+h)%3*18}, ${110+c%4*10}, ${70+h%3*12}, 0.75)`,r.fillRect(f+1,d+1,l-2,a-2),r.strokeStyle="rgba(70,45,30,0.55)",r.strokeRect(f+.5,d+.5,l-1,a-1)}}}else return null;let o=new Is(i);return o.colorSpace=xt,o.wrapS=ii,o.wrapT=ii,o.repeat.set(2.5,2.5),o.needsUpdate=!0,Zh.set(s,o),o}function am(s){return new Ue(s[0]/255,s[1]/255,s[2]/255)}function tb(s){return $M[s]||[160,160,160]}function nb(s,e,n=0){s.side=Pt,n>0?(s.polygonOffset=!0,s.polygonOffsetFactor=-n,s.polygonOffsetUnits=-n*2):(s.polygonOffset=!1,s.polygonOffsetFactor=0,s.polygonOffsetUnits=0),e?(s.clippingPlanes=e,s.clipIntersection=!1):s.clippingPlanes=[],s.needsUpdate=!0}function hm(s){s.computeBoundingBox();let e=s.boundingBox,n=new P;e.getSize(n);let i=Math.max(n.x,1e-6),r=Math.max(n.y,1e-6),o=Math.max(n.z,1e-6),a=Math.max(i,r,o);s.getAttribute("normal")||s.computeVertexNormals();let l=s.getAttribute("position"),c=s.getAttribute("normal");if(!l)return a;let u=s.getAttribute("uv");if(u&&u.count===l.count)return a;let h=new Float32Array(l.count*2),f=new P;for(let d=0;d<l.count;d++){f.fromBufferAttribute(l,d);let m=Math.abs(c.getX(d)),_=Math.abs(c.getY(d)),x=Math.abs(c.getZ(d)),g,p;_>=m&&_>=x?(g=(f.x-e.min.x)/i,p=(f.z-e.min.z)/o):m>=x?(g=(f.z-e.min.z)/o,p=(f.y-e.min.y)/r):(g=(f.x-e.min.x)/i,p=(f.y-e.min.y)/r),h[d*2]=g,h[d*2+1]=p}return s.setAttribute("uv",new wt(h,2)),a}function ib(s,e){let n=eb(s);if(!n)return null;let i=n.clone();i.needsUpdate=!0;let r=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(r,r),i}function fm(s,e,n={}){let i=n.clippingPlanes??null,r=e===oa,o=n.opacityByLabel??null,a=n.edgeMode??"transparent";for(let[l,c]of s){let u=tb(l),h=KM[l]??0,f=1e3;if(r)for(let p of c)p.isMesh&&p.geometry&&(f=Math.max(f,hm(p.geometry)));let d=1,m;if(r){let p=QM[l]||{color:u,roughness:.7,metalness:0,map:"none"};d=typeof p.opacity=="number"?p.opacity:1;let w=am(p.color),S=ib(p.map||"none",f);p.clearcoat?m=new _n({color:w,map:S,roughness:p.roughness,metalness:p.metalness,clearcoat:p.clearcoat,clearcoatRoughness:p.clearcoatRoughness??.3,envMapIntensity:.85}):m=new Rn({color:w,map:S,roughness:p.roughness,metalness:p.metalness,envMapIntensity:p.metalness>.05?1.1:.55})}else m=new rn({color:am(u)});nb(m,i,h),m.userData.presetOpacity=d;let _=new Set;for(let p of c){if(!p.isMesh)continue;let w=p.material;if(w){let S=Array.isArray(w)?w:[w];for(let y of S)_.add(y)}p.material=m,p.userData.opaqueRenderOrder=h,p.renderOrder=h}for(let p of _)p!==m&&(p.map&&[...Zh.values()].includes(p.map)?p.map=null:p.map&&(p.map.dispose?.(),p.map=null),p.dispose?.());let x=1;o&&(o instanceof Map?x=o.has(l)?o.get(l):1:typeof o[l]=="number"&&(x=o[l]));let g=Math.max(0,Math.min(1,d*(Number(x)||0)));zr(c,g,{edgeMode:a})}}function dm(s,e){let i=(Array.isArray(s)?s:[s]).map(r=>{if(!r)return new Rn({color:13421772,roughness:.65,metalness:0,side:An});let o=r.color?r.color.clone():new Ue(13421772),a=typeof r.roughness=="number"?r.roughness:.65,l=typeof r.metalness=="number"?r.metalness:0,c=null;r.map&&e&&(hm(e),c=r.map.clone(),c.needsUpdate=!0);let u=new Rn({color:o,map:c,roughness:a,metalness:l,side:An,transparent:!!r.transparent,opacity:typeof r.opacity=="number"?r.opacity:1});return u.clippingPlanes=null,u.clipIntersection=!1,u});return Array.isArray(s)?i:i[0]}function pm(){try{let s=localStorage.getItem(lm);if(s===oa||s===mc)return s}catch{}return mc}function mm(s){try{localStorage.setItem(lm,s)}catch{}}var bi=1e-5,gm=new WeakMap;function Fn(s,e,n,i){let r=n/(n-i);return s.clone().lerp(e,r)}function sb(s,e,n){let[i,r,o]=s,a=e.distanceToPoint(i),l=e.distanceToPoint(r),c=e.distanceToPoint(o),u=a>=-bi,h=l>=-bi,f=c>=-bi,d=(u?1:0)+(h?1:0)+(f?1:0);if(d===3){n.push([i,r,o]);return}if(d===0)return;let m=[i,r,o],_=[a,l,c],x=[u,h,f];if(d===1){let S=x.findIndex(Boolean),y=(S+1)%3,D=(S+2)%3,R=m[S],I=Fn(m[S],m[y],_[S],_[y]),U=Fn(m[S],m[D],_[S],_[D]);n.push([R,I,U]);return}let g=x.findIndex(S=>!S),p=(g+1)%3,w=(g+2)%3;if(x[p]){let S=m[p],y=m[w],D=Fn(m[g],m[p],_[g],_[p]),R=Fn(m[g],m[w],_[g],_[w]);n.push([S,y,D]),n.push([y,R,D])}else{let S=m[w],y=Fn(m[g],m[p],_[g],_[p]),D=Fn(m[g],m[w],_[g],_[w]);n.push([S,y,D])}}function rb(s,e){let[n,i,r]=s,o=e.distanceToPoint(n),a=e.distanceToPoint(i),l=e.distanceToPoint(r),c=o>=-bi,u=a>=-bi,h=l>=-bi,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===0||f===3)return null;let d=[n,i,r],m=[o,a,l],_=[c,u,h];if(f===1){let w=_.findIndex(Boolean),S=(w+1)%3,y=(w+2)%3;return[Fn(d[w],d[S],m[w],m[S]),Fn(d[w],d[y],m[w],m[y])]}let x=_.findIndex(w=>!w),g=(x+1)%3,p=(x+2)%3;return _[g]?[Fn(d[x],d[g],m[x],m[g]),Fn(d[x],d[p],m[x],m[p])]:[Fn(d[x],d[g],m[x],m[g]),Fn(d[x],d[p],m[x],m[p])]}function ob(s,e,n){let i=s.clone(),r=e.clone();for(let o of n){let a=o.distanceToPoint(i),l=o.distanceToPoint(r),c=a>=-bi,u=l>=-bi;if(c&&u)continue;if(!c&&!u)return null;let h=Fn(i,r,a,l);c?r=h:i=h}return i.distanceToSquared(r)<bi*bi?null:[i,r]}function ab(s,e){let n=s;for(let i of e){let r=[];for(let o of n)sb(o,i,r);if(n=r,n.length===0)break}return n}function lb(s,e){let n=s.getAttribute("position");if(!n)return[];let i=new P,r=[],o=s.getIndex();function a(l,c,u){r.push([i.fromBufferAttribute(n,l).applyMatrix4(e).clone(),i.fromBufferAttribute(n,c).applyMatrix4(e).clone(),i.fromBufferAttribute(n,u).applyMatrix4(e).clone()])}if(o)for(let l=0;l<o.count;l+=3)a(o.getX(l),o.getX(l+1),o.getX(l+2));else for(let l=0;l<n.count;l+=3)a(l,l+1,l+2);return r}function cb(s){let e=s.getAttribute("position");if(!e)return[];let n=new P,i=[],r=s.getIndex();function o(a,l,c){i.push([n.fromBufferAttribute(e,a).clone(),n.fromBufferAttribute(e,l).clone(),n.fromBufferAttribute(e,c).clone()])}if(r)for(let a=0;a<r.count;a+=3)o(r.getX(a),r.getX(a+1),r.getX(a+2));else for(let a=0;a<e.count;a+=3)o(a,a+1,a+2);return i}function _m(s,e){if(!s||!e?.length)return new Float32Array(0);let n=gm.get(s);if(n||(n=cb(s),gm.set(s,n)),!n.length)return new Float32Array(0);let i=[];for(let r=0;r<e.length;r++){let o=e[r],a=e.filter((l,c)=>c!==r);for(let l of n){let c=rb(l,o);if(!c)continue;let u=a.length?ob(c[0],c[1],a):c;u&&i.push(u[0].x,u[0].y,u[0].z,u[1].x,u[1].y,u[1].z)}}return new Float32Array(i)}function xm(s,e){if(!s?.length)return[];let n=new Ze().copy(e).invert();return s.map(i=>i.clone().applyMatrix4(n))}function ub(s){let e=new Float32Array(s.length*9),n=0;for(let[r,o,a]of s)e[n++]=r.x,e[n++]=r.y,e[n++]=r.z,e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=a.x,e[n++]=a.y,e[n++]=a.z;let i=new Lt;return i.setAttribute("position",new wt(e,3)),i.computeVertexNormals(),i}function vm(s,e){if(!s.visible||!s.geometry)return null;let n=lb(s.geometry,s.matrixWorld);if(n.length===0)return null;let i=e.length?ab(n,e):n;if(i.length===0)return null;let r=ub(i),o=dm(s.material,r),a=new Qe(r,o);return a.name=s.name,a}var hb=2,fb=.45,ym=.015;function $h(s){let e=new Dt().setFromObject(s);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:ym};let n=new P;e.getSize(n);let i=Math.max(n.x,n.y,n.z,1e-9),r=i>hb?fb/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:r,liftM:ym}}function Mm(s,e=$h(s)){let{cx:n,cz:i,minY:r,scale:o,liftM:a}=e;return s.position.set(-n*o,-r*o+a,-i*o),s.scale.setScalar(o),s.updateMatrixWorld(!0),e}var db=`
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
`,bm=!1;function pb(){if(bm)return;bm=!0;let s=document.createElement("style");s.id="bp-viewer-chrome",s.textContent=db,document.head.appendChild(s)}function Sm(s){pb();let e=document.getElementById("sheet"),n=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),r=window.matchMedia("(min-width: 768px)"),o=window.matchMedia("(prefers-color-scheme: dark)"),a=[],l="peek";function c(){return r.matches}function u(){return l}function h(){for(let q of a)q(l)}function f(q){a.push(q),q(l)}function d(){if(!e||!i)return;let q=document.getElementById("section-view"),T=document.getElementById("section-cuts"),v=n?.offsetHeight||22,C=16,z=0;if(q&&(z+=q.offsetHeight),T){let Re=T.querySelector(".sheet-title"),de=T.querySelector(".cut-row");z+=32,Re&&(z+=Re.offsetHeight+8),de?z+=de.offsetHeight:z+=T.offsetHeight}let W=v+z+C,L=window.innerHeight||640,re=Math.round(L*.28),se=Math.round(L*.45),ie=Math.max(re,Math.min(se,Math.round(W)));return e.style.setProperty("--sheet-partial-h",`${ie}px`),ie}function m(){d(),!c()&&l==="partial"&&h()}function _(q){let T=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${q}`).trim(),v=parseFloat(T);return Number.isFinite(v)?v:0}function x(){let q={top:0,right:0,bottom:0,left:0};if(!e)return q;if(c()){if(l!=="open")return q;let v=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(v)),bottom:0,left:0}}if(l!=="partial")return q;let T=Math.round(G()+_("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,T)),left:0}}function g(q,T={}){if(!e)return;(c()?["closed","open"]:["peek","partial","full"]).includes(q)||(q=c()?"open":"peek"),l=q,e.dataset.detent=q,e.classList.toggle("sheet-open",q!=="peek"&&q!=="closed"),document.body.classList.toggle("sheet-open",q!=="peek"&&q!=="closed"),y(),T.silent||h()}function p(){c()?g("open"):g("peek"),d()}let w=document.getElementById("top-chrome"),S=document.getElementById("sheet-toggle");if(!S&&w){let q=w.querySelector(".top-chrome-end");q||(q=document.createElement("div"),q.className="top-chrome-end",w.append(q)),S=document.createElement("button"),S.type="button",S.id="sheet-toggle",S.className="chrome-btn sheet-toggle",q.append(S)}function y(){if(!S)return;let q=l==="open";S.setAttribute("aria-expanded",q?"true":"false"),S.setAttribute("aria-label",q?"Hide controls":"Show controls"),S.title=q?"Hide controls":"Show controls",S.textContent=q?"\u203A":"\u2039"}S?.addEventListener("click",()=>{c()&&g(l==="open"?"closed":"open")});let D=!1,R=null,I=!1,U=!1,M=0,b=0,B=0,$=0,F="peek",X=0,J=0,K=0,oe=0,Y=0,te=null,he=12,Se=28,ue='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function me(){return Math.max(n?.offsetHeight||34,34)+8}function G(){return d()||window.innerHeight*.38}function ae(){let q=window.innerHeight||640;return Math.min(q*.92,q-72)}function ce(){return e?.offsetWidth||0}function fe(q){return q instanceof Element?!!q.closest(ue):!1}function ge(){if(c()){g(l==="open"?"closed":"open");return}g(l==="peek"?"partial":l==="partial"?"full":"peek")}function _e(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Oe(q,T,v){if(e){D=!0,I=!1,R=T,U=!1,F=l,M=q.clientY,b=q.clientX,X=M,J=b,K=performance.now(),oe=0,Y=0,$=v,te=q.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${$}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(q.pointerId)}catch{}}}function ct(q){if(!(!e||!n)&&!(q.target!==n&&!n.contains(q.target)&&q.target!==e)){D=!0,I=!1,R="narrow",U=!1,F=l,e.classList.add("is-dragging"),M=q.clientY,b=q.clientX,X=M,J=b,K=performance.now(),oe=0,Y=0,B=e.getBoundingClientRect().height,te=q.pointerId;try{n.setPointerCapture(q.pointerId)}catch{}q.preventDefault()}}function $e(q){if(!e||q.pointerType==="mouse"&&q.button!==0||q.target instanceof Element&&q.target.closest(".chrome-btn"))return;let T=ce();if(l==="closed"){let v=window.innerWidth-Se-_("r");if(q.clientX<v)return;Oe(q,"wide-open",T),q.preventDefault();return}e.contains(q.target)&&(fe(q.target)||(D=!0,I=!0,R="wide-close",U=!1,F=l,M=q.clientY,b=q.clientX,X=M,J=b,K=performance.now(),oe=0,Y=0,$=0,te=q.pointerId))}function Je(q){c()?$e(q):ct(q)}function N(q){if(!D||!e||te!=null&&q.pointerId!==te)return;let T=performance.now(),v=Math.max(1,T-K),C=Math.hypot(q.clientX-b,q.clientY-M);if(I){if(C<=he)return;let re=q.clientX-b,se=q.clientY-M;if(Math.abs(re)<Math.abs(se)*1.15||re<=0){D=!1,I=!1,R=null,te=null;return}I=!1,U=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(q.pointerId)}catch{}q.preventDefault()}if(C>he&&(U=!0),R==="narrow"){let re=M-q.clientY;oe=(X-q.clientY)/v*1e3,X=q.clientY,K=T;let se=me(),ie=ae(),Re=Math.max(se,Math.min(ie,B+re));e.style.height=`${Re}px`;return}let z=q.clientX-b;Y=(q.clientX-J)/v*1e3,J=q.clientX,K=T;let W=ce(),L=Math.max(0,Math.min(W,$+z));e.style.transform=`translateX(${L}px)`}function gt(q,T){let v=[{name:"peek",h:me()},{name:"partial",h:G()},{name:"full",h:ae()}],C=Math.max(0,v.findIndex(ie=>ie.name===F)),z=v[C].h;if(Math.abs(q-z)<36&&Math.abs(T)<1100)return F;let W=q+T*.05,L=(v[0].h+v[1].h)/2,re=(v[1].h+v[2].h)/2,se=W<L?0:W<re?1:2;if(se>C+1&&(se=C+1),se<C-1&&(se=C-1),se===2&&C<2){let ie=re+(v[2].h-re)*.25;q<ie&&T<1400&&(se=1)}return v[se].name}function qe(q,T){let v=ce();return v<=0||Math.abs(q-(F==="closed"?v:0))<28&&Math.abs(T)<800?F:T>900?"closed":T<-900?"open":q>v*.45?"closed":"open"}function We(q){if(!D||!e||te!=null&&q.pointerId!==te)return;let T=R,v=I;if(D=!1,I=!1,R=null,te=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),v&&!U)return;if(!U){T==="narrow"?(e.style.height="",ge()):T==="wide-open"?(_e(),g("open")):_e();return}if(T==="narrow"){let W=e.getBoundingClientRect().height;e.style.height="",g(gt(W,oe));return}let C=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),z=C?parseFloat(C[1]):0;_e(),g(qe(z,Y))}n?.addEventListener("pointerdown",q=>{c()||Je(q)}),n?.addEventListener("pointermove",N),n?.addEventListener("pointerup",We),n?.addEventListener("pointercancel",We),n&&n.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",q=>{c()&&$e(q)},{capture:!0}),document.addEventListener("pointermove",N,{capture:!0}),document.addEventListener("pointerup",We,{capture:!0}),document.addEventListener("pointercancel",We,{capture:!0});let Le=()=>{e&&(e.style.height=""),_e(),i&&(i.style.overflow=""),p()};r.addEventListener?r.addEventListener("change",Le):r.addListener(Le);function nt(){s(o.matches)}return nt(),o.addEventListener?o.addEventListener("change",nt):o.addListener(nt),window.addEventListener("resize",()=>{d(),h()}),p(),y(),{getDetent:u,getSafeInsets:x,onDetentChange:f,refreshPartialHeight:m,setDetent:g}}function _c(s={}){let e=s.min??0,n=s.max??1,i=s.step??.001,r=!!s.thumbScrubOnly,o=aa(s.value??e,e,n),a=document.createElement("div");a.className="coop-range",a.setAttribute("role","slider"),a.tabIndex=0,s.ariaLabel&&a.setAttribute("aria-label",s.ariaLabel),a.setAttribute("aria-valuemin",String(e)),a.setAttribute("aria-valuemax",String(n));let l=document.createElement("div");l.className="coop-range-track";let c=document.createElement("div");c.className="coop-range-fill";let u=document.createElement("div");u.className="coop-range-thumb",l.append(c,u),a.append(l);let h=10,f=14,d=null,m=0,_=0,x=!1,g=!1,p=!1,w=!0;function S(){let X=`${(n===e?0:(o-e)/(n-e))*100}%`;c.style.width=X,u.style.left=X,a.setAttribute("aria-valuenow",String(o));let J=s.formatAriaValue?.(o)??String(o);a.setAttribute("aria-valuetext",J)}function y(F,X){let J=typeof u.getBoundingClientRect=="function"?u.getBoundingClientRect():null;return!J||!(J.width>0)||!(J.height>0)?!0:F>=J.left-f&&F<=J.right+f&&X>=J.top-f&&X<=J.bottom+f}function D(F,X="input"){let J=mb(aa(F,e,n),e,n,i);if(J===o&&X==="silent"){S();return}o=J,S(),(X==="input"||X==="change")&&s.onInput?.(o),X==="change"&&s.onChange?.(o)}function R(F){let X=l.getBoundingClientRect(),J=Math.max(X.width,1),K=aa((F-X.left)/J,0,1);return e+K*(n-e)}function I(F){if(d==null)return;let X=g;d=null,x=!1,g=!1,w=!0,X&&s.onScrubEnd?.(),F&&X&&s.onChange?.(o)}function U(F){d==null&&(F.pointerType==="mouse"&&F.button!==0||(d=F.pointerId,m=F.clientX,_=F.clientY,p=!1,x=!1,g=!1,w=!r||y(F.clientX,F.clientY)))}function M(F){if(d!==F.pointerId)return;let X=F.clientX-m,J=F.clientY-_;if(!p&&Math.hypot(X,J)>h&&(p=!0),!x){if(!p)return;if(F.pointerType==="touch"&&Math.abs(J)>=Math.abs(X)){I(!1);return}if(!w){I(!1);return}x=!0,g=!0,s.onScrubStart?.();try{a.setPointerCapture(F.pointerId)}catch{}}D(R(F.clientX),"input"),F.preventDefault()}function b(F){if(d===F.pointerId){if(!p&&!g){d=null,x=!1,g=!1,w=!0,s.onTap?.();return}I(!0)}}function B(F){d===F.pointerId&&I(!1)}function $(F){let X=n-e,J=i>0?i:X/100,K=X/10,oe=o;switch(F.key){case"ArrowLeft":case"ArrowDown":oe=o-J;break;case"ArrowRight":case"ArrowUp":oe=o+J;break;case"PageDown":oe=o-K;break;case"PageUp":oe=o+K;break;case"Home":oe=e;break;case"End":oe=n;break;case"Enter":case" ":F.preventDefault(),s.onTap?.();return;default:return}F.preventDefault(),D(oe,"change")}return a.addEventListener("pointerdown",U),a.addEventListener("pointermove",M),a.addEventListener("pointerup",b),a.addEventListener("pointercancel",B),a.addEventListener("keydown",$),S(),{el:a,get value(){return o},set value(F){D(F,"silent")},refresh(){S()}}}function aa(s,e,n){return Math.min(n,Math.max(e,s))}function mb(s,e,n,i){if(!(i>0))return aa(s,e,n);let r=Math.round((s-e)/i),o=Number((e+r*i).toPrecision(12));return aa(o,e,n)}var Em="blueprints.locale",gb={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",other:"Other",floor:"Floor",masonry:"Masonry",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Domo Plus plenum",racking_strap:"Racking strap",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_naturheld_flex_50:"NaturHeld Flex 50",slope_battens:"KVH battens",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_nonius:"Nonius hanger",soffit_naturheld_140:"NaturHeld 140",soffit_naturheld_flex_50:"NaturHeld Flex 50",soffit_battens:"KVH battens",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius hanger",bass_mineral_wool:"Mineral wool",bass_gkb:"GKB plasterboard",bass_cd:"CD frame",bass_wall_hanger:"CD wall hanger"},_b={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Domo Plus",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_naturheld_flex_50:"NaturHeld Flex 50",slope_battens:"Lat\u011B KVH",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_nonius:"Nonius z\xE1v\u011Bs",soffit_naturheld_140:"NaturHeld 140",soffit_naturheld_flex_50:"NaturHeld Flex 50",soffit_battens:"Lat\u011B KVH",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius z\xE1v\u011Bs",bass_mineral_wool:"Miner\xE1ln\xED vata",bass_gkb:"GKB s\xE1drokarton",bass_cd:"CD r\xE1m",bass_wall_hanger:"T\u0159men CD"},xb={"ui.view":"View","ui.sections":"Sections","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","scene.soffit":"Soffit","scene.gable":"Gable"},vb={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt"},Kh={en:{...xb,...gb},cs:{...vb,..._b}},kr=wm(),Jh=new Set;function wm(){try{let s=typeof navigator<"u"&&navigator.language||"";if(String(s).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function yb(){try{let s=localStorage.getItem(Em);if(s==="en"||s==="cs")return s}catch{}return wm()}function Mb(s){try{localStorage.setItem(Em,s)}catch{}}function Tm(){return kr}function Am(s){if(!(s!=="en"&&s!=="cs")&&s!==kr){kr=s,Mb(s);for(let e of Jh)try{e()}catch{}}}function Rm(s){return Jh.add(s),()=>Jh.delete(s)}function Cm(){return kr=yb(),kr}function qt(s){let e=Kh[kr]||Kh.en;if(Object.prototype.hasOwnProperty.call(e,s))return e[s];let n=Kh.en;return Object.prototype.hasOwnProperty.call(n,s)?n[s]:s.startsWith("scene.")?s.slice(6):s}function jh(s){let e=s||document;e.querySelectorAll("[data-i18n]").forEach(n=>{let i=n.getAttribute("data-i18n");i&&(n.textContent=qt(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(n=>{let i=n.getAttribute("data-i18n-aria");i&&n.setAttribute("aria-label",qt(i))}),e.querySelectorAll("[data-i18n-title]").forEach(n=>{let i=n.getAttribute("data-i18n-title");i&&n.setAttribute("title",qt(i))})}var Pm=new Dt,xc=new P,gs=class extends Fo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Nt(e,3)),this.setAttribute("uv",new Nt(n,2))}applyMatrix4(e){let n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let i=new hs(n,6,1);return this.setAttribute("instanceStart",new gn(i,3,0)),this.setAttribute("instanceEnd",new gn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let i=new hs(n,6,1);return this.setAttribute("instanceColorStart",new gn(i,3,0)),this.setAttribute("instanceColorEnd",new gn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Po(e.geometry)),this}fromLineSegments(e){let n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Pm.setFromBufferAttribute(n),this.boundingBox.union(Pm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)xc.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(xc)),xc.fromBufferAttribute(n,o),r=Math.max(r,i.distanceToSquared(xc));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};Ee.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ne(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};wn.line={uniforms:jo.merge([Ee.common,Ee.fog,Ee.line]),vertexShader:`
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
		`};var Hr=class extends Vt{constructor(e){super({type:"LineMaterial",uniforms:jo.clone(wn.line.uniforms),vertexShader:wn.line.vertexShader,fragmentShader:wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Qh=new st,Im=new P,Lm=new P,cn=new st,un=new st,Si=new st,ef=new P,tf=new Ze,hn=new ko,Dm=new P,vc=new Dt,yc=new Kt,Ei=new st,wi,Zs;function Um(s,e,n){return Ei.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),Ei.multiplyScalar(1/Ei.w),Ei.x=Zs/n.width,Ei.y=Zs/n.height,Ei.applyMatrix4(s.projectionMatrixInverse),Ei.multiplyScalar(1/Ei.w),Math.abs(Math.max(Ei.x,Ei.y))}function bb(s,e){let n=s.matrixWorld,i=s.geometry,r=i.attributes.instanceStart,o=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let l=0,c=a;l<c;l++){hn.start.fromBufferAttribute(r,l),hn.end.fromBufferAttribute(o,l),hn.applyMatrix4(n);let u=new P,h=new P;wi.distanceSqToSegment(hn.start,hn.end,h,u),h.distanceTo(u)<Zs*.5&&e.push({point:h,pointOnLine:u,distance:wi.origin.distanceTo(h),object:s,face:null,faceIndex:l,uv:null,uv1:null})}}function Sb(s,e,n){let i=e.projectionMatrix,o=s.material.resolution,a=s.matrixWorld,l=s.geometry,c=l.attributes.instanceStart,u=l.attributes.instanceEnd,h=Math.min(l.instanceCount,c.count),f=-e.near;wi.at(1,Si),Si.w=1,Si.applyMatrix4(e.matrixWorldInverse),Si.applyMatrix4(i),Si.multiplyScalar(1/Si.w),Si.x*=o.x/2,Si.y*=o.y/2,Si.z=0,ef.copy(Si),tf.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,m=h;d<m;d++){if(cn.fromBufferAttribute(c,d),un.fromBufferAttribute(u,d),cn.w=1,un.w=1,cn.applyMatrix4(tf),un.applyMatrix4(tf),cn.z>f&&un.z>f)continue;if(cn.z>f){let S=cn.z-un.z,y=(cn.z-f)/S;cn.lerp(un,y)}else if(un.z>f){let S=un.z-cn.z,y=(un.z-f)/S;un.lerp(cn,y)}cn.applyMatrix4(i),un.applyMatrix4(i),cn.multiplyScalar(1/cn.w),un.multiplyScalar(1/un.w),cn.x*=o.x/2,cn.y*=o.y/2,un.x*=o.x/2,un.y*=o.y/2,hn.start.copy(cn),hn.start.z=0,hn.end.copy(un),hn.end.z=0;let x=hn.closestPointToPointParameter(ef,!0);hn.at(x,Dm);let g=Bs.lerp(cn.z,un.z,x),p=g>=-1&&g<=1,w=ef.distanceTo(Dm)<Zs*.5;if(p&&w){hn.start.fromBufferAttribute(c,d),hn.end.fromBufferAttribute(u,d),hn.start.applyMatrix4(a),hn.end.applyMatrix4(a);let S=new P,y=new P;wi.distanceSqToSegment(hn.start,hn.end,y,S),n.push({point:y,pointOnLine:S,distance:wi.origin.distanceTo(y),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}}var la=class extends Qe{constructor(e=new gs,n=new Hr({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let a=0,l=0,c=n.count;a<c;a++,l+=2)Im.fromBufferAttribute(n,a),Lm.fromBufferAttribute(i,a),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Im.distanceTo(Lm);let o=new hs(r,2,1);return e.setAttribute("instanceDistanceStart",new gn(o,1,0)),e.setAttribute("instanceDistanceEnd",new gn(o,1,1)),this}raycast(e,n){let i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let o=e.params.Line2!==void 0&&e.params.Line2.threshold||0;wi=e.ray;let a=this.matrixWorld,l=this.geometry,c=this.material;Zs=c.linewidth+o,l.boundingSphere===null&&l.computeBoundingSphere(),yc.copy(l.boundingSphere).applyMatrix4(a);let u;if(i)u=Zs*.5;else{let f=Math.max(r.near,yc.distanceToPoint(wi.origin));u=Um(r,f,c.resolution)}if(yc.radius+=u,wi.intersectsSphere(yc)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),vc.copy(l.boundingBox).applyMatrix4(a);let h;if(i)h=Zs*.5;else{let f=Math.max(r.near,vc.distanceToPoint(wi.origin));h=Um(r,f,c.resolution)}vc.expandByScalar(h),wi.intersectsBox(vc)!==!1&&(i?bb(this,n):Sb(this,r,n))}onBeforeRender(e){let n=this.material.uniforms;n&&n.resolution&&(e.getViewport(Qh),this.material.uniforms.resolution.value.set(Qh.z,Qh.w))}};var Bm="blueprints.edgeMode",Eb="blueprints.edgesEnabled",$s="none",Ks="transparent",bc="opaque",wb=20,zm=2.5,km=0,Nm=1e-4,nf=5e-4,Tb=2;function Om(s){return s===$s||s===Ks||s===bc?s:s==="1"||s==="true"?Ks:s==="0"||s==="false"?$s:null}function Hm(){try{let s=Om(localStorage.getItem(Bm));if(s)return s;let e=Om(localStorage.getItem(Eb));if(e)return rf(e),e}catch{}return Ks}function rf(s){try{localStorage.setItem(Bm,s)}catch{}}function Bn(s){return!!(s&&s.userData&&s.userData.isEdgeOverlay)}function Ab(s){let e=new Ro(s,wb),n=e.getAttribute("position"),i=n&&n.array?n.array instanceof Float32Array?n.array.slice():Float32Array.from(n.array):new Float32Array(0);return e.dispose(),i}function Rb(s,e){if(!e.length)return s;if(!s.length)return e;let n=new Float32Array(s.length+e.length);return n.set(s,0),n.set(e,s.length),n}function Cb(s,e){if(!s)return;let n=Math.max(0,Math.min(1,Number(e)||0));n<1?(s.transparent=!0,s.opacity=n,s.depthWrite=!1):(s.transparent=!1,s.opacity=1),s.needsUpdate=!0}function Pb(s){if(!s?.visible)return 0;let e=Array.isArray(s.material)?s.material[0]:s.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function Ib(s,e=Ks){return e===$s?0:e===bc?s?.visible===!1?0:1:Pb(s)}function Fm(s,e,n=1){let i=Math.max(0,Math.min(1,Number(n)||0)),r=new Hr({color:km,linewidth:zm,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:i<1,opacity:i<1?i:1,clippingPlanes:s,clipIntersection:!1});return r.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <logdepthbuf_vertex>",`gl_Position.z -= ${Nm} * gl_Position.w;
			#include <logdepthbuf_vertex>`),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= max( ${nf}, fwidth( gl_FragDepth ) );
			#else
				gl_FragDepth = gl_FragCoord.z - ${nf};
			#endif`)},r.customProgramCacheKey=()=>`bp-edge-depth-bias-r${Tb}-${nf}-${Nm}`,e&&r.resolution.set(e.x,e.y),r}function Mc(s){if(!s)return;s.parent?.remove(s),s.geometry?.dispose?.();let e=s.material;if(Array.isArray(e))for(let n of e)n?.dispose?.();else e?.dispose?.()}function Vm(s){if(!s)return;let e=[];s.traverse(n=>{Bn(n)&&e.push(n)});for(let n of e)Mc(n)}function Js(s,e){s&&s.traverse(n=>{Bn(n)&&(n.visible=e)})}function Gm(s,e,n){if(!s)return;let i=Math.max(1,e),r=Math.max(1,n);s.traverse(o=>{if(!Bn(o)||!o.material)return;let a=Array.isArray(o.material)?o.material:[o.material];for(let l of a)l?.resolution&&l.resolution.set(i,r)})}function Wm(s,e){if(!s)return;let n=e||[];s.traverse(i=>{if(!Bn(i)||!i.material)return;let r=Array.isArray(i.material)?i.material:[i.material];for(let o of r)o&&(o.clippingPlanes=n,o.clipIntersection=!1,o.needsUpdate=!0)})}function Lb(s,e,n){s.updateWorldMatrix(!0,!1);let i=s.userData.bpHardEdgePositions;i instanceof Float32Array||(i=Ab(s.geometry),s.userData.bpHardEdgePositions=i);let r=xm(n,s.matrixWorld),o=_m(s.geometry,r),a=Rb(i,o),l=new gs;a.length>=6&&l.setPositions(a);let c=e.geometry;e.geometry=l,e.computeLineDistances(),c?.dispose?.()}function Xm(s,e,n={}){let i=n.clippingPlanes??[],r=n.resolution||null,o=n.edgeMode??Ks;for(let[a,l]of s)for(let c of l){if(!c||!c.isMesh||!c.geometry||Bn(c))continue;let u=null;for(let f of c.children)if(Bn(f)){u=f;break}if(!e){u&&Mc(u);continue}u&&!u.isLineSegments2&&(Mc(u),u=null);let h=Ib(c,o);if(u){let f=u.material;if(!f||typeof f.customProgramCacheKey!="function"){Mc(u);let d=Fm(i,r,h),m=new gs;u=new la(m,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,c.add(u)}else f.color&&f.color.setHex(km),typeof f.linewidth=="number"&&(f.linewidth=zm),f.clippingPlanes=i,f.clipIntersection=!1,r&&f.resolution&&f.resolution.set(r.x,r.y),Cb(f,h),f.needsUpdate=!0}else{let f=Fm(i,r,h),d=new gs;u=new la(d,f),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,c.add(u)}Lb(c,u,i)}}var sf=null;function Db(){return sf||(sf=new Tr({depthTest:!0,depthWrite:!0,colorWrite:!1,side:Pt})),sf}function Ub(s){let e=[];return s.traverse(n=>{if(e.length||Bn(n)||!n.isMesh||!n.material)return;let i=Array.isArray(n.material)?n.material:[n.material];for(let r of i)if(r?.clippingPlanes?.length){e=r.clippingPlanes;return}}),e}function of(s,e,n,i){if(!i)return;let r=[],o=!1;if(i.traverse(h=>{if(Bn(h)){o=!0;return}if(!h.isMesh||!h.material)return;let f=Array.isArray(h.material)?h.material:[h.material];for(let d of f)d&&r.push({mat:d,colorWrite:d.colorWrite!==!1,depthWrite:d.depthWrite!==!1,depthTest:d.depthTest!==!1,transparent:!!d.transparent})}),!o)return;let a=s.autoClear,l=e.background,c=e.overrideMaterial;e.background=null,s.autoClear=!1,Js(i,!1);let u=Db();u.clippingPlanes=Ub(i),u.clipIntersection=!1,e.overrideMaterial=u,s.clearDepth(),s.render(e,n),e.overrideMaterial=null,Js(i,!0);for(let h of r)h.mat.colorWrite=!1,h.mat.depthWrite=!1,h.mat.depthTest=!0,h.mat.transparent=!1;s.render(e,n);for(let h of r)h.mat.colorWrite=h.colorWrite,h.mat.depthWrite=h.depthWrite,h.mat.depthTest=h.depthTest,h.mat.transparent=h.transparent;e.background=l,e.overrideMaterial=c,s.autoClear=a}var qm=!0,Ym=5,af=12,Nb=af,Zm=.001,Ob=.5,Fb=1,ca=1e5,Ti={value:0},fn={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Zm},uResolution:{value:new Ne(1,1)}};function Sc(s){let e=s?.userData?.shader;if(!e?.uniforms)return;let n=e.uniforms;n.uPeelStage&&(n.uPeelStage.value=Ti.value),n.tPrevViewZ&&(n.tPrevViewZ.value=fn.tPrevViewZ.value),n.tPeelViewZ&&(n.tPeelViewZ.value=fn.tPeelViewZ.value),n.tOpaqueViewZ&&(n.tOpaqueViewZ.value=fn.tOpaqueViewZ.value),n.uViewZEps&&(n.uViewZEps.value=fn.uViewZEps.value),n.uResolution&&n.uResolution.value.copy(fn.uResolution.value)}function Bb(s){if(!s||s.userData.depthPeelPatched)return;s.userData.depthPeelPatched=!0;let e=s.customProgramCacheKey?.bind(s);s.customProgramCacheKey=()=>`${e?e():s.type}|depthPeel10`;let n=s.onBeforeCompile?.bind(s);s.onBeforeCompile=(i,r)=>{n?.(i,r),i.uniforms.uPeelStage=Ti,i.uniforms.tPrevViewZ=fn.tPrevViewZ,i.uniforms.tPeelViewZ=fn.tPeelViewZ,i.uniforms.tOpaqueViewZ=fn.tOpaqueViewZ,i.uniforms.uViewZEps=fn.uViewZEps,i.uniforms.uResolution=fn.uResolution,s.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying float vPeelViewZ;`),i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
	vPeelViewZ = -mvPosition.z;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPeelStage;
uniform sampler2D tPrevViewZ;
uniform sampler2D tPeelViewZ;
uniform sampler2D tOpaqueViewZ;
uniform float uViewZEps;
uniform vec2 uResolution;
varying float vPeelViewZ;`),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
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
			if (peelZ > ${(ca*.5).toFixed(1)}) discard;
			// Tolerant band: anything from prev..peel that belongs to this layer.
			float peelEps = max(uViewZEps, 1e-3 * max(peelZ, 1.0));
			if (vPeelViewZ > peelZ + peelEps) discard;
		}
	}`)},s.needsUpdate=!0}function $m(s){let e=new Ne,n=new Ue,i=null,r=null,o=null,a=null,l=null,c=null,u=new ri(-1,1,1,-1,0,1),h=new Vn,f=new Vt({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Ue(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),d=new Qe(new gi(2,2),f);h.add(d);let m=new Vt({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:hl,blendSrc:Go,blendDst:Yi,blendSrcAlpha:Go,blendDstAlpha:Yi,blendEquation:Dn}),_=new Qe(new gi(2,2),m),x=new Vn;x.add(_);let g=new Vt({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),p=new Qe(new gi(2,2),g),w=new Vn;w.add(p);let S=new Vt({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Pt,clipping:!0,blending:Nn});function y(ue,me,G={}){g.uniforms.uValue.value=me;let ae=s.autoClear;s.setRenderTarget(ue),G.clearDepth&&(s.setClearColor(0,1),s.clear(!1,!0,!1)),s.autoClear=!1,s.render(w,u),s.autoClear=ae}function D(){i?.dispose(),r?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),c?.dispose(),i=null,r=null,o=null,a=null,l=null,c=null}let R=0;function I(ue,me,G){let ae=Math.max(1,Math.floor(ue)),ce=Math.max(1,Math.floor(me)),fe=Math.min(1,Math.max(.25,G)),ge=Math.max(1,Math.floor(ae*fe)),_e=Math.max(1,Math.floor(ce*fe));if(i&&i.width===ae&&i.height===ce&&o&&o.width===ge&&o.height===_e&&R===fe)return;D(),R=fe,i=new sn(ae,ce,{format:jt,type:Gn,colorSpace:xt,depthBuffer:!0,stencilBuffer:!1});let Oe={format:jt,type:Cn,depthBuffer:!0,stencilBuffer:!1,magFilter:zt,minFilter:zt};r=new sn(ge,_e,Oe),o=new sn(ge,_e,Oe),a=new sn(ge,_e,Oe),l=new sn(ge,_e,{format:jt,type:Zi,colorSpace:xt,depthBuffer:!1,stencilBuffer:!1,magFilter:kt,minFilter:kt}),c=new sn(ge,_e,{format:jt,type:Zi,colorSpace:xt,depthBuffer:!1,stencilBuffer:!1,magFilter:kt,minFilter:kt}),f.uniforms.tOpaque.value=i.texture,f.uniforms.tAccum.value=l.texture,fn.tOpaqueViewZ.value=r.texture,fn.uResolution.value.set(ge,_e)}function U(ue){let me=[],G=[];return ue?(ue.traverse(ae=>{if(!ae.isMesh||!ae.visible||Bn(ae))return;let ce=ae,fe=Array.isArray(ce.material)?ce.material:[ce.material],ge=!1;for(let _e of fe)if(_e&&_e.transparent&&_e.opacity<1-1e-4){ge=!0;break}ge?G.push(ce):me.push(ce)}),{opaque:me,transparent:G}):{opaque:me,transparent:G}}function M(ue,me){for(let G of ue)G.visible=me}function b(ue,me){ue.blending=me.blending,ue.blendSrc=me.blendSrc,ue.blendDst=me.blendDst,ue.blendSrcAlpha=me.blendSrcAlpha,ue.blendDstAlpha=me.blendDstAlpha,ue.blendEquation=me.blendEquation,ue.blendEquationAlpha=me.blendEquation}function B(ue){let me=new Set;for(let G of ue){let ae=Array.isArray(G.material)?G.material:[G.material];for(let ce of ae)ce&&me.add(ce)}return[...me]}function $(ue,me,G){if(!G)return;let ae=G.visible,ce=ue.background,fe=s.autoClear;G.visible=!1,ue.background=null,s.autoClear=!1,s.clearDepth(),s.render(ue,me),G.visible=ae,ue.background=ce,s.autoClear=fe}let F=new Float32Array(4),X=new Vt({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Nn}),J=new Qe(new gi(2,2),X),K=new Vn;K.add(J);function oe(ue,me){X.uniforms.tSrc.value=ue.texture;let G=s.autoClear;s.setRenderTarget(me),s.setClearColor(0,1),s.clear(),s.autoClear=!1,s.render(K,u),s.autoClear=G}function Y(ue,me=4){let G=ue.width,ae=ue.height,ce=ca*.5;for(let fe=0;fe<me;fe++)for(let ge=0;ge<me;ge++){let _e=Math.min(G-1,Math.floor((ge+.5)/me*G)),Oe=Math.min(ae-1,Math.floor((fe+.5)/me*ae));try{s.readRenderTargetPixels(ue,_e,Oe,1,1,F)}catch{continue}if(Number.isFinite(F[0])&&F[0]<ce)return!0}return!1}function te(ue,me,G){Js(G,!1),s.setRenderTarget(null),s.render(ue,me),of(s,ue,me,G)}function he(ue,me,G,ae,ce={}){if(!(qm&&(typeof ae=="function"?ae():!!ae)))return Ti.value=0,te(ue,me,G),!1;let{opaque:ge,transparent:_e}=U(G);if(!_e.length)return Ti.value=0,te(ue,me,G),!1;let Oe=ce.quality==="high",ct=Oe?Fb:Ob,$e=Oe?af:Ym;s.getDrawingBufferSize(e),I(e.x,e.y,ct);let Je=s.autoClear,N=s.toneMapping,gt=ue.background;gt instanceof Ue?n.copy(gt):n.set(1118481),f.uniforms.uBackground.value.copy(n);let qe=[];for(let L of[...ge,..._e])qe.push({mesh:L,visible:L.visible});let We=B(_e),Le=[];for(let L of We)Bb(L),Le.push({mat:L,snap:{blending:L.blending,blendSrc:L.blendSrc,blendDst:L.blendDst,blendSrcAlpha:L.blendSrcAlpha,blendDstAlpha:L.blendDstAlpha,blendEquation:L.blendEquation,blendEquationAlpha:L.blendEquationAlpha,depthWrite:L.depthWrite,depthTest:L.depthTest,transparent:L.transparent,opacity:L.opacity,colorWrite:L.colorWrite,side:L.side,forceSinglePass:L.forceSinglePass}});let nt=new Map;for(let L of _e)nt.set(L,L.onBeforeRender),L.onBeforeRender=function(se,ie,Re,de,xe,Ce){let Pe=Array.isArray(xe)?xe:[xe];for(let Ve of Pe)Ve&&Sc(Ve);let ye=nt.get(L);typeof ye=="function"&&ye.call(this,se,ie,Re,de,xe,Ce)};let q=null;for(let L of We)if(L.clippingPlanes?.length){q=L.clippingPlanes;break}if(!q)for(let L of ge){let re=Array.isArray(L.material)?L.material:[L.material];for(let se of re)if(se?.clippingPlanes?.length){q=se.clippingPlanes;break}if(q)break}S.clippingPlanes=q||[],S.clipIntersection=!1,ue.background=null,s.autoClear=!0,Ti.value=0;let T=[];for(let L of ue.children)L!==G&&(L.isLight||(T.push({obj:L,visible:L.visible}),L.visible=!1));function v(){for(let[L,re]of nt)L.onBeforeRender=re}function C(){for(let{mat:L,snap:re}of Le)b(L,re),L.blendEquationAlpha=re.blendEquationAlpha,L.depthWrite=re.depthWrite,L.depthTest=re.depthTest,L.transparent=re.transparent,L.opacity=re.opacity,L.colorWrite=re.colorWrite!==!1,L.side=re.side,L.forceSinglePass=re.forceSinglePass,L.needsUpdate=!0;for(let{mesh:L,visible:re}of qe)L.visible=re;for(let{obj:L,visible:re}of T)L.visible=re;return v(),Ti.value=0,ue.background=gt,ue.overrideMaterial=null,s.toneMapping=N,s.setRenderTarget(null),s.autoClear=!0,te(ue,me,G),s.autoClear=Je,!1}M(_e,!1),M(ge,!0),Js(G,!1),s.setRenderTarget(i),s.setClearColor(0,0),s.clear(),s.render(ue,me),s.setRenderTarget(r),s.setClearColor(0,1),y(r,ca,{clearDepth:!0});{let L=new Float32Array(4);try{s.readRenderTargetPixels(r,2,2,1,1,L)}catch{L[0]=0}if(!Number.isFinite(L[0])||L[0]<ca*.5)return C()}let z=ue.overrideMaterial;ue.overrideMaterial=S,s.setRenderTarget(r),s.autoClear=!1,s.render(ue,me),s.autoClear=!0,ue.overrideMaterial=z,fn.tOpaqueViewZ.value=r.texture,s.setRenderTarget(l),s.setClearColor(0,0),s.clear(),y(a,0),fn.tPrevViewZ.value=a.texture,M(ge,!1),M(_e,!0),Js(G,!1);let W=!1;for(let L=0;L<$e;L++){fn.tPrevViewZ.value=a.texture,fn.tPeelViewZ.value=a.texture,Ti.value=1;for(let{mat:ie}of Le)ie.depthWrite=!0,ie.depthTest=!0,ie.colorWrite=!0,ie.transparent=!0,ie.forceSinglePass=!0,b(ie,{blending:Nn,blendSrc:Yi,blendDst:Vo,blendSrcAlpha:Yi,blendDstAlpha:Vo,blendEquation:Dn}),Sc(ie);if(s.setRenderTarget(o),s.setClearColor(0,1),s.clear(!1,!0,!1),y(o,ca),s.setRenderTarget(o),s.autoClear=!1,s.render(ue,me),s.autoClear=!0,fn.tPeelViewZ.value=o.texture,Oe){Ti.value=2;for(let{mat:Re}of Le)Re.depthWrite=!1,Re.depthTest=!1,Re.colorWrite=!0,Re.transparent=!0,Re.forceSinglePass=!0,b(Re,{blending:Hn,blendSrc:ws,blendDst:Hi,blendSrcAlpha:Yi,blendDstAlpha:Hi,blendEquation:Dn}),Sc(Re);s.setRenderTarget(c),s.setClearColor(0,0),s.clear(),s.render(ue,me);let ie=Y(o,12);if(L===0&&!ie)return C();ie&&(W=!0),m.uniforms.tSrc.value=c.texture,s.setRenderTarget(l),s.autoClear=!1,s.render(x,u),s.autoClear=!0,oe(o,a);continue}if(!Y(o,L===0?12:4)){if(L===0)return C();break}W=!0,Ti.value=2;for(let{mat:ie}of Le)ie.depthWrite=!1,ie.depthTest=!1,ie.colorWrite=!0,ie.transparent=!0,ie.forceSinglePass=!0,b(ie,{blending:Hn,blendSrc:ws,blendDst:Hi,blendSrcAlpha:Yi,blendDstAlpha:Hi,blendEquation:Dn}),Sc(ie);s.setRenderTarget(c),s.setClearColor(0,0),s.clear(),s.render(ue,me),m.uniforms.tSrc.value=c.texture,s.setRenderTarget(l),s.autoClear=!1,s.render(x,u),s.autoClear=!0;let se=a;a=o,o=se}if(!W)return C();for(let{mat:L,snap:re}of Le)b(L,re),L.blendEquationAlpha=re.blendEquationAlpha,L.depthWrite=re.depthWrite,L.depthTest=re.depthTest,L.transparent=re.transparent,L.opacity=re.opacity,L.colorWrite=re.colorWrite!==!1,L.side=re.side,L.forceSinglePass=re.forceSinglePass,L.needsUpdate=!0;for(let{mesh:L,visible:re}of qe)L.visible=re;for(let{obj:L,visible:re}of T)L.visible=re;return v(),Js(G,!0),Ti.value=0,ue.background=gt,s.toneMapping=N,s.setRenderTarget(null),s.autoClear=!0,s.render(h,u),of(s,ue,me,G),$(ue,me,G),s.autoClear=Je,!0}function Se(){D(),f.dispose(),d.geometry.dispose(),m.dispose(),_.geometry.dispose(),g.dispose(),p.geometry.dispose(),S.dispose(),X.dispose(),J.geometry.dispose()}return{render:he,dispose:Se,MAX_PEELS:Nb,MAX_PEELS_FAST:Ym,MAX_PEELS_HIGH:af,VIEW_Z_EPSILON:Zm,USE_DEPTH_PEEL:qm}}var Km=8,zb=56,Jm=14,lf=11,jm=.5,kb=1e-4,Ec=128,Hb=.028,Vb=5,Gb=.995,Wb=.999,Qm=18,Xb=22,qb=14,cf=new Ne,eg=new zo,Xn=new P,qn=new P,Ri=new P,yn=new P,Wr=new P,Ai=new P,Vr=new P,Gr=new P,yt=new P,tg=new P,Xr=new P,Yb=new mn;function uf(s){let e=Math.abs(s)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function hf(s){return s.pointerType==="touch"}function ff(s){return s.pointerType==="mouse"||s.pointerType==="pen"}function ng(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function ug(s){let{scene:e,canvas:n,getCamera:i,controls:r,getRoot:o,getClipPlanes:a,onLiveLength:l,onActiveChange:c}=s,u="idle",h=!1,f=!1,d=0,m=0,_=null,x=null,g=null,p=null,w=null,S=null,y=null,D="mouse",R=0,I=0,U=!1,M=!1,b=new Jt;b.name="MeasureOverlay",b.renderOrder=10,e.add(b);let B=new Jt;B.name="MeasureDimensions",e.add(B);let $=rg(16766474),F=rg(3458905),X=og(16766474,.75),J=jb(16766474);b.add($,F,X,J),$.visible=!1,F.visible=!1,X.visible=!1,J.visible=!1;let K=Kb(n),oe=[];function Y(){return h}function te(C){let z=!!C;if(z===h){z&&Se();return}if(h=z,h)if(r.enabled=!1,u="placeFirst",he(),w=null,S=null,ng()){let W=Math.max(1,n.clientWidth),L=Math.max(1,n.clientHeight);me(W*.5,L*.5,!0)}else ue();else r.enabled=!0,u="idle",he(),w=null,S=null,y=null,M=!1,ue(),l?.(null);c?.(h),Se(),ae()}function he(){f=!1,_=null,x=null,g=null,p=null}function Se(){u==="placeSecond"&&w&&_?l?.(uf(w.distanceTo(_))):h&&l?.(null)}function ue(){K.hidden=!0,$.visible=!1,J.visible=!1}function me(C,z,W=!1){d=C,m=z,f=!0;let L=ct(C,z);if(L){let re=L.point.clone(),se=L.kind,ie=L.edgeDir;if(p=null,u==="placeSecond"&&w){let Re=$e(w,S,L);Re&&(re=Re.foot,se="perp",ie=Re.edgeDir,p=Re.edgeDir.clone())}_=re,x=se,g=ie}else W?_||(x=null,g=null,p=null):(_=null,x=null,g=null,p=null);ae(),Se()}function G(C,z){let W=_e(z)*Vb;C.scale.setScalar(Math.max(W,1e-6))}function ae(){if(!h){ue(),F.visible=!1,X.visible=!1,J.visible=!1;return}w?(F.visible=!0,F.position.copy(w),G(F,w)):F.visible=!1,f?(K.hidden=!1,sg(K,n,d,m,x),_?($.visible=!0,$.position.copy(_),G($,_),Jb($,x)):$.visible=!1):ue(),u==="placeSecond"&&w&&_?(lg(X,w,_),X.visible=!0):X.visible=!1,u==="placeSecond"&&x==="perp"&&w&&_&&p?(ag(J,w,_,p,_e),J.visible=!0):J.visible=!1}function ce(C){let z=n.getBoundingClientRect();return{x:C.clientX-z.left,y:C.clientY-z.top}}function fe(C,z,W){return W==="touch"?{x:C,y:z-zb}:{x:C,y:z}}function ge(C){let z=a()||[];for(let W of z)if(W.distanceToPoint(C)<-kb)return!1;return!0}function _e(C){let z=i(),W=Math.max(1,n.clientHeight);if(z.isOrthographicCamera)return 2*((z.top-z.bottom)/(2*Math.max(z.zoom,1e-6)))/W;let L=z.position.distanceTo(C),re=z.fov*Math.PI/180;return 2*Math.tan(re/2)*L/W/Math.max(z.zoom,1e-6)}function Oe(C,z){z.copy(C).project(i());let W=Math.max(1,n.clientWidth),L=Math.max(1,n.clientHeight);return z.x=(z.x*.5+.5)*W,z.y=(-z.y*.5+.5)*L,z}function ct(C,z){let W=o();if(!W)return null;let L=n.getBoundingClientRect();cf.x=C/Math.max(1,L.width)*2-1,cf.y=-(z/Math.max(1,L.height))*2+1,eg.setFromCamera(cf,i());let re=eg.intersectObject(W,!0),se=null;for(let Be of re)if(Be.object.visible&&ge(Be.point)){se=Be;break}if(!se)return null;let ie=se.object,Re=ie.geometry;if(!Re?.getAttribute("position"))return{point:se.point.clone(),kind:"face",edgeDir:null,mesh:ie,triVerts:null,faceNormal:null};ie.updateWorldMatrix(!0,!1);let de=_e(se.point),xe=de*Jm,Ce=de*lf,Pe=Re.getAttribute("position"),ye=Re.getIndex(),Ve=se.faceIndex,ve=[];if(se.face)Xn.fromBufferAttribute(Pe,se.face.a).applyMatrix4(ie.matrixWorld),qn.fromBufferAttribute(Pe,se.face.b).applyMatrix4(ie.matrixWorld),Ri.fromBufferAttribute(Pe,se.face.c).applyMatrix4(ie.matrixWorld),ve.push(Xn.clone(),qn.clone(),Ri.clone());else if(typeof Ve=="number"){let Be,At,Yt;ye?(Be=ye.getX(Ve*3),At=ye.getX(Ve*3+1),Yt=ye.getX(Ve*3+2)):(Be=Ve*3,At=Ve*3+1,Yt=Ve*3+2),Xn.fromBufferAttribute(Pe,Be).applyMatrix4(ie.matrixWorld),qn.fromBufferAttribute(Pe,At).applyMatrix4(ie.matrixWorld),Ri.fromBufferAttribute(Pe,Yt).applyMatrix4(ie.matrixWorld),ve.push(Xn.clone(),qn.clone(),Ri.clone())}let Ge=null;ve.length===3&&(Ge=new P().subVectors(ve[1],ve[0]).cross(yn.subVectors(ve[2],ve[0])).normalize(),Ge.lengthSq()<1e-12&&(Ge=null));let O=C,Me=z,ne=null;function le(Be){if(!ge(Be)||Be.distanceToSquared(se.point)>xe*xe*4)return;Oe(Be,Gr);let At=Math.hypot(Gr.x-O,Gr.y-Me);At>Jm||(!ne||At<ne.distPx)&&(ne={point:Be.clone(),distPx:At})}for(let Be of ve)le(Be);let we=xe*xe*4,Te=Pe.count,Ke=Te>8e3?2:1;for(let Be=0;Be<Te;Be+=Ke)yn.fromBufferAttribute(Pe,Be).applyMatrix4(ie.matrixWorld),!(yn.distanceToSquared(se.point)>we)&&le(yn);if(ne)return{point:ne.point,kind:"vertex",edgeDir:null,mesh:ie,triVerts:ve.length?ve:null,faceNormal:Ge};let ht=null;function Tt(Be,At){yt.copy(At).sub(Be);let Yt=yt.lengthSq();if(Yt<1e-18)return;let Yn=yn.copy(se.point).sub(Be).dot(yt)/Yt;if(Yn=Math.min(1,Math.max(0,Yn)),Wr.copy(Be).addScaledVector(yt,Yn),!ge(Wr)||Wr.distanceToSquared(se.point)>Ce*Ce*4)return;Oe(Wr,Gr);let Zn=Math.hypot(Gr.x-O,Gr.y-Me);if(Zn>lf)return;Oe(Be,Ai),Oe(At,Vr);let Qt=Vr.x-Ai.x,$n=Vr.y-Ai.y,Ci=Qt*Qt+$n*$n;if(Ci>1e-6){let Kn=((O-Ai.x)*Qt+(Me-Ai.y)*$n)/Ci;Kn=Math.min(1,Math.max(0,Kn));let Pi=Ai.x+Qt*Kn,_s=Ai.y+$n*Kn;if(Math.hypot(O-Pi,Me-_s)>lf)return}(!ht||Zn<ht.distPx)&&(ht={point:Wr.clone(),distPx:Zn,dir:yt.clone().normalize()})}return ve.length===3&&(Tt(ve[0],ve[1]),Tt(ve[1],ve[2]),Tt(ve[2],ve[0])),ht?{point:ht.point,kind:"edge",edgeDir:ht.dir,mesh:ie,triVerts:ve.length?ve:null,faceNormal:Ge}:{point:se.point.clone(),kind:"face",edgeDir:null,mesh:ie,triVerts:ve.length?ve:null,faceNormal:Ge}}function $e(C,z,W){if(!W.mesh||!W.triVerts||W.triVerts.length!==3||!W.faceNormal||W.faceNormal.lengthSq()<1e-12)return null;let L=_e(C),re=L*qb,se=Math.max(L*2,1e-5);if(Math.abs(wc(C,W.triVerts[0],W.faceNormal))>se)return null;let ie=Je(W.mesh,W.triVerts[0],W.faceNormal,se);if(!ie.length)return null;let Re=[];for(let Ce of ie)ig(C,Ce.a,Ce.b)<=re&&Re.push(Ce.dir.clone());if(z&&z.lengthSq()>1e-12&&Re.push(z.clone().normalize()),!Re.length)return null;let de=L*Qm,xe=null;for(let Ce of Re)if(!(Ce.lengthSq()<1e-12)){Ce.normalize();for(let Pe of ie){if(Math.abs(Pe.dir.dot(Ce))<Gb||ig(C,Pe.a,Pe.b)<=re)continue;let ye=Zb(C,Pe.a,Pe.b);if(!ge(ye)||C.distanceTo(ye)*1e3<jm||(yt.copy(ye).sub(C),yt.lengthSq()<1e-16)||(yt.normalize(),Math.abs(yt.dot(Ce))>.08))continue;let ve=W.point.distanceTo(ye);Oe(W.point,Ai),Oe(ye,Vr);let Ge=Math.hypot(Ai.x-Vr.x,Ai.y-Vr.y);if(ve>de*1.35&&Ge>Qm)continue;let O=Ge+ve/Math.max(L,1e-9);(!xe||O<xe.score)&&(xe={foot:ye.clone(),edgeDir:Ce.clone(),score:O})}}return xe?{foot:xe.foot,edgeDir:xe.edgeDir}:null}function Je(C,z,W,L){let re=C.geometry,se=re?.getAttribute("position");if(!se)return[];C.updateWorldMatrix(!0,!1);let ie=re.getIndex(),Re=new Map,de=Math.max(L*.25,1e-5);function xe(ve,Ge,O){Xr.subVectors(Ge,ve).cross(yn.subVectors(O,ve)),!(Xr.lengthSq()<1e-16)&&(Xr.normalize(),!(Math.abs(Xr.dot(W))<Wb)&&(Math.abs(wc(ve,z,W))>L||Math.abs(wc(Ge,z,W))>L||Math.abs(wc(O,z,W))>L||(Ce(ve,Ge),Ce(Ge,O),Ce(O,ve))))}function Ce(ve,Ge){if(yt.copy(Ge).sub(ve),yt.lengthSq()<1e-16)return;let O=$b(ve,Ge,de);Re.has(O)||Re.set(O,{a:ve.clone(),b:Ge.clone(),dir:yt.clone().normalize()})}let Pe=ie?ie.count/3:se.count/3,ye=12e3,Ve=Pe>ye?Math.ceil(Pe/ye):1;for(let ve=0;ve<Pe;ve+=Ve){let Ge,O,Me;if(ie){let ne=ve*3;Ge=ie.getX(ne),O=ie.getX(ne+1),Me=ie.getX(ne+2)}else Ge=ve*3,O=ve*3+1,Me=ve*3+2;Xn.fromBufferAttribute(se,Ge).applyMatrix4(C.matrixWorld),qn.fromBufferAttribute(se,O).applyMatrix4(C.matrixWorld),Ri.fromBufferAttribute(se,Me).applyMatrix4(C.matrixWorld),xe(Xn,qn,Ri)}return[...Re.values()]}function N(){if(_){if(u==="placeFirst"){w=_.clone(),S=g?g.clone():null,u="placeSecond",p=null,(hf({pointerType:D})||!ng())&&(f=!1,_=null,x=null,g=null,ue()),ae(),Se();return}if(u==="placeSecond"&&w){if(w.distanceTo(_)*1e3<jm)return;gt(w,_),te(!1)}}}function gt(C,z){let W=new Jt;W.name="Dimension";let L=og(16752394,1);lg(L,C,z),L.visible=!0;let re=C.clone().lerp(z,.5),se=C.distanceTo(z),ie=Qb(uf(se));ie.position.copy(re),W.add(L,ie),B.add(W),oe.push({group:W,sprite:ie,mid:re.clone(),span:se}),qe(ie,C,z,re,se)}function qe(C,z,W,L,re){let se=i();if(se.getWorldDirection(tg),yt.copy(W).sub(z),yt.lengthSq()<1e-16){C.position.copy(L);return}yt.normalize(),yn.crossVectors(yt,tg),yn.lengthSq()<1e-10&&yn.copy(se.up),yn.normalize();let ie=Math.max(re*Hb,_e(L)*18);C.position.copy(L).addScaledVector(yn,ie);let Re=_e(C.position)*56;C.scale.set(Re*2.2,Re,1)}function We(){F.visible&&w&&G(F,w),$.visible&&_&&G($,_),f&&sg(K,n,d,m,x),J.visible&&w&&_&&p&&x==="perp"&&ag(J,w,_,p,_e);for(let C of oe){let W=C.group.children[0].geometry.getAttribute("position");Xn.fromBufferAttribute(W,0),qn.fromBufferAttribute(W,1),qe(C.sprite,Xn,qn,C.mid,C.span)}}function Le(C){if(!h||u==="idle"||!ff(C)||y!==null)return;let{x:z,y:W}=ce(C),L=fe(z,W,C.pointerType);me(L.x,L.y,!0)}function nt(C){if(!h||u==="idle"||C.button!==void 0&&C.button!==0||y!==null)return;y=C.pointerId,D=C.pointerType||"mouse";let{x:z,y:W}=ce(C);R=z,I=W,U=!1,M=!1;try{n.setPointerCapture(C.pointerId)}catch{}if(ff(C)){let L=fe(z,W,D);me(L.x,L.y,!0)}C.preventDefault()}function q(C){if(!h)return;if(y===null){Le(C);return}if(y!==C.pointerId)return;let{x:z,y:W}=ce(C);if(Math.hypot(z-R,W-I)>=Km&&(U=!0,M=!0),hf(C)){if(!M)return;let re=fe(z,W,"touch");me(re.x,re.y,!0)}else if(ff(C)){let re=fe(z,W,D);me(re.x,re.y,!0)}C.preventDefault()}function T(C){if(!h||y!==C.pointerId)return;let{x:z,y:W}=ce(C);Math.hypot(z-R,W-I)>=Km&&(U=!0,M=!0),y=null;try{n.releasePointerCapture(C.pointerId)}catch{}if(hf(C)){U?M=!1:(M=!1,f&&_&&N()),C.preventDefault();return}!U&&_&&N(),M=!1,C.preventDefault()}function v(C){y===C.pointerId&&(y=null,M=!1)}return n.addEventListener("pointerdown",nt),n.addEventListener("pointermove",q),n.addEventListener("pointerup",T),n.addEventListener("pointercancel",v),{isActive:Y,setActive:te,update:We,formatMm:uf}}function wc(s,e,n){return Yb.setFromNormalAndCoplanarPoint(n,e).distanceToPoint(s)}function ig(s,e,n){yt.copy(n).sub(e);let i=yt.lengthSq();if(i<1e-18)return s.distanceTo(e);let r=yn.copy(s).sub(e).dot(yt)/i;return r=Math.min(1,Math.max(0,r)),Wr.copy(e).addScaledVector(yt,r).distanceTo(s)}function Zb(s,e,n){yt.copy(n).sub(e);let i=yt.lengthSq();if(i<1e-18)return e.clone();let r=yn.copy(s).sub(e).dot(yt)/i;return r=Math.min(1,Math.max(0,r)),e.clone().addScaledVector(yt,r)}function $b(s,e,n){let i=Math.round(s.x/n),r=Math.round(s.y/n),o=Math.round(s.z/n),a=Math.round(e.x/n),l=Math.round(e.y/n),c=Math.round(e.z/n);return i<a||i===a&&r<l||i===a&&r===l&&o<=c?`${i},${r},${o}|${a},${l},${c}`:`${a},${l},${c}|${i},${r},${o}`}function Kb(s){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(s.parentElement||document.body).appendChild(e),e)}function sg(s,e,n,i,r){let o=e.getBoundingClientRect();s.style.left=`${o.left+n}px`,s.style.top=`${o.top+i}px`,s.dataset.snap=r||"none"}function rg(s){let e=new Co(1,16,12),n=new rn({color:s,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new Qe(e,n);return i.renderOrder=20,i.visible=!1,i}function Jb(s,e){let n=s.material;e==="vertex"?n.color.setHex(16729402):e==="edge"||e==="perp"?n.color.setHex(16766474):n.color.setHex(6607615)}function og(s,e){let n=new Lt,i=new Float32Array(6);n.setAttribute("position",new wt(i,3));let r=new Vi({color:s,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),o=new mi(n,r);return o.renderOrder=19,o.frustumCulled=!1,o.visible=!1,o}function jb(s){let e=new Lt,n=new Float32Array(9);e.setAttribute("position",new wt(n,3));let i=new Vi({color:s,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),r=new mi(e,i);return r.renderOrder=22,r.frustumCulled=!1,r.visible=!1,r}function ag(s,e,n,i,r){let o=r(n)*Xb;if(yt.copy(e).sub(n),yt.lengthSq()<1e-16){s.visible=!1;return}if(yt.normalize(),yn.copy(i).normalize(),Xr.crossVectors(yn,yt),Xr.lengthSq()<1e-12){s.visible=!1;return}Xn.copy(n).addScaledVector(yn,o),qn.copy(n),Ri.copy(n).addScaledVector(yt,o);let a=s.geometry.getAttribute("position");a.setXYZ(0,Xn.x,Xn.y,Xn.z),a.setXYZ(1,qn.x,qn.y,qn.z),a.setXYZ(2,Ri.x,Ri.y,Ri.z),a.needsUpdate=!0,s.geometry.computeBoundingSphere()}function lg(s,e,n){let i=s.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,n.x,n.y,n.z),i.needsUpdate=!0,s.geometry.computeBoundingSphere()}function Qb(s){let e=document.createElement("canvas");e.width=Ec*2,e.height=Ec;let n=e.getContext("2d");if(n){n.clearRect(0,0,e.width,e.height);let a=18,l=14;n.font=`600 ${Math.round(Ec*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let c=n.measureText(s),u=Math.ceil(c.width),h=Math.round(Ec*.42),f=u+a*2,d=h+l*2,m=(e.width-f)/2,_=(e.height-d)/2,x=18;n.fillStyle="rgba(28, 28, 30, 0.78)",cg(n,m,_,f,d,x),n.fill(),n.strokeStyle="rgba(255, 255, 255, 0.22)",n.lineWidth=2,cg(n,m,_,f,d,x),n.stroke(),n.fillStyle="#f5f5f7",n.textAlign="center",n.textBaseline="middle",n.fillText(s,e.width/2,e.height/2+1)}let i=new Is(e);i.colorSpace=xt,i.needsUpdate=!0;let r=new br({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),o=new vo(r);return o.renderOrder=21,o.center.set(.5,.5),o}function cg(s,e,n,i,r,o){let a=Math.min(o,i/2,r/2);s.beginPath(),s.moveTo(e+a,n),s.arcTo(e+i,n,e+i,n+r,a),s.arcTo(e+i,n+r,e,n+r,a),s.arcTo(e,n+r,e,n,a),s.arcTo(e,n,e+i,n,a),s.closePath()}var df="scene";function tS(){try{return(new URLSearchParams(location.search).get(df)||"").trim()}catch{return""}}function fg(s){try{let e=new URL(location.href),n=s!=null?String(s).trim():"";n?e.searchParams.set(df,n):e.searchParams.delete(df);let i=`${e.pathname}${e.search}${e.hash}`,r=`${location.pathname}${location.search}${location.hash}`;i!==r&&history.replaceState(null,"",i)}catch{}}function nS(s,e,n={}){let i=Array.isArray(n.scenes)?n.scenes:[],r=Array.isArray(n.partGroups)?n.partGroups:[],o=String(n.scene!=null?n.scene:tS()).trim();Cm(),jh(document);let a=[],l=null,c=1842206,u=!0,h=pm(),f=Hm(),d=new Map,m=new Map,_=new Map,x=new Map,g=new Set,p=new Map,w=new Map,S=new Map,y=new Set,D=null;D=Sm(A=>{u=A,c=A?1842206:15263981,l&&(l.background=new Ue(c)),document.documentElement.style.colorScheme=A?"dark":"light",d.size&&Kn()});let R=new sc({canvas:s,antialias:!0,alpha:!1,logarithmicDepthBuffer:!0});R.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),R.outputColorSpace=xt,R.toneMapping=Wo,R.toneMappingExposure=1.05,R.localClippingEnabled=!0;let I=$m(R);l=new Vn,l.background=new Ue(c);let U=30,M=120,b=75,B=125,$="perspective",F=b,X=b,J=1,K=!1,oe=new Bt(45,1,.01,1e6),Y=new ri(-1,1,1,-1,.01,1e6),te=oe,he=new cc(te,s);he.enableDamping=!1,he.screenSpacePanning=!0;let Se=null,ue=null;l.add(new Oo(16777215,.45));let me=new us(16777215,1.15);me.position.set(.6,1,.4),l.add(me);let G=new us(16777215,.4);G.position.set(-.5,.2,-.6),l.add(G);let ae=new Nr(R);l.environment=ae.fromScene(new uc,.04).texture,ae.dispose();let ce=null,fe=new Dt,ge=new P,_e=new P,Oe=new P,ct=new P,$e=new P,Je=[],N=1,gt=!1,qe=!1,We=!1;new oc().parse(e,"",A=>{ce=A.scene,l.add(ce),ce.traverse(Z=>{if(!Z.isMesh)return;let ee=Z.name||Z.parent?.name||"part",be=ee.replace(/_\d+$/,"")||ee;if(d.has(be)||d.set(be,[]),d.get(be).push(Z),Z.material){let ke=Array.isArray(Z.material)?Z.material:[Z.material];for(let Fe of ke)"side"in Fe&&(Fe.side=Pt)}}),Te(),Pi(),_s(),ua(),Ic();let V=Tc(o);V&&(ji=`scene:${String(V.id).trim()}`),ha(),ne(),H(),Mt(),Kn(),V&&ht(V),Zr(),D?.refreshPartialHeight(),_g(),xg()},A=>{nt(String(A?.message||A))});function nt(A){let V=document.getElementById("err");V&&(V.style.display="block",V.textContent=A)}function q(){ce&&(fe.setFromObject(ce),fe.getSize(ge),fe.getCenter(_e))}function T(){let A=Math.max(1,s.clientWidth),V=Math.max(1,s.clientHeight);return A/V}function v(A,V){let Z=A*Math.PI/180;return 2*Math.atan(Math.tan(Z/2)/Math.max(V,1e-6))}function C(){let A=T();oe.aspect=A,oe.fov=v(F,A)*180/Math.PI,oe.updateProjectionMatrix()}function z(A,V){let Z=T(),ee=Math.max(A,1e-6)*Math.tan(V/2),be=ee*Z;Y.left=-be,Y.right=be,Y.top=ee,Y.bottom=-ee,Y.updateProjectionMatrix()}function W(){let A=T(),Z=Math.max(Y.top,1e-6)*A;Y.left=-Z,Y.right=Z,Y.updateProjectionMatrix()}function L(A,V){let Z=T(),ee=Math.max(A,1e-6),ke=Math.max(V,1e-6),Fe=ke*Z;Fe<ee&&(Fe=ee,ke=Fe/Math.max(Z,1e-6)),J=1,Y.left=-Fe,Y.right=Fe,Y.top=ke,Y.bottom=-ke,Y.updateProjectionMatrix(),Re()}function re(A){let V=Math.max(A,1e-4),Z=Oe.copy(te.position).sub(he.target);Z.lengthSq()<1e-12?Z.set(0,0,1):Z.normalize(),te.position.copy(he.target).addScaledVector(Z,V)}function se(A){A!==te&&(A.position.copy(te.position),A.quaternion.copy(te.quaternion),A.up.copy(te.up),A.near=te.near,A.far=te.far,te=A,he.object=te,he.update())}function ie(){let A=Math.abs(Ut)>.05||Math.abs(Rt)>.05||Math.abs(It-1)>.001?It:1;return J*A}function Re(){te.zoom=ie(),te.updateProjectionMatrix()}function de(){if(K||qe||!te.isOrthographicCamera)return;let A=Math.abs(Ut)>.05||Math.abs(Rt)>.05||Math.abs(It-1)>.001?It:1;J=Math.max(te.zoom/Math.max(A,1e-6),1e-6)}function xe(){if($==="ortho")return;X=F;let A=te.position.distanceTo(he.target),V=v(F,T());z(A,V),J=1,we(()=>{K=!0,se(Y),$="ortho",Re(),K=!1}),O()}function Ce(A){if($!=="ortho")return;let V=Ve(A??X),Z=Math.max(Y.top,1e-6)/Math.max(J,1e-6),ee=v(V,T()),be=Z/Math.max(Math.tan(ee/2),1e-8);F=V,X=V,J=1,we(()=>{K=!0,se(oe),$="perspective",C(),re(be),Re(),le(),he.update(),K=!1}),O()}function Pe(A,V={}){let Z=Ve(A);if($==="ortho"){Ce(Z);return}let ee=T(),be=v(F,ee),ke=v(Z,ee),Fe=te.position.distanceTo(he.target);F=Z,X=Z,we(()=>{if(C(),V.reframe!==!1){let pt=Math.tan(be/2)/Math.max(Math.tan(ke/2),1e-8);re(Fe*pt),le(),he.update()}Re()}),O()}function ye(){$==="ortho"?Ce(X):xe()}function Ve(A){return Math.min(M,Math.max(U,A))}function ve(){return $==="ortho"?B:F}function Ge(A){return A>M?"ISO":`${Math.round(A)}\xB0`}function O(){Se&&(Se.value=ve()),ue&&(ue.textContent=$==="ortho"?"ISO":`${Math.round(F)}\xB0`),Se?.refresh()}function Me(A){if(A>M){$!=="ortho"?xe():O();return}let V=Ve(A);$==="ortho"?Ce(V):Pe(V,{reframe:!0})}function ne(){let A=document.getElementById("fov");if(!A)return;A.replaceChildren();let V=document.createElement("div");V.className="fov-row";let Z=document.createElement("span");Z.className="fov-label",Z.textContent=qt("ui.fov"),ue=document.createElement("span"),ue.className="fov-value",ue.textContent=`${Math.round(F)}\xB0`,Se=_c({min:U,max:B,step:1,value:ve(),ariaLabel:"Field of view",formatAriaValue:Ge,onInput:Fe=>Me(Fe),onChange:Fe=>Me(Fe),onTap:()=>ye()}),Se.el.classList.add("fov-range");let ee=document.createElement("div");ee.className="fov-detent",ee.setAttribute("aria-hidden","true");let be=(M-U)/(B-U);ee.style.left=`${be*100}%`,Se.el.querySelector(".coop-range-track")?.append(ee),V.append(Z,Se.el,ue),A.append(V),O()}function le(){let A=Math.max(ge.x,ge.y,ge.z,.01),V=te.position.distanceTo(he.target);te.near=Math.min(Math.max(V/200,A/5e3,.001),V/10),te.far=Math.max(V+A*4,A*8,10),te.updateProjectionMatrix()}function we(A){qe=!0;try{A()}finally{requestAnimationFrame(()=>{qe=!1})}}C();function Te(){ce&&(we(()=>{q(),he.target.copy(_e);let V=Math.max(ge.x,ge.y,ge.z,1)*1.85;te.position.set(_e.x+V*.75,_e.y+V*.55,_e.z+V*.75),le(),he.update()}),Ie())}function Ke(A){if(ce){if(oe.up.set(0,1,0),Y.up.set(0,1,0),te.up.set(0,1,0),A==="iso"){Te();return}we(()=>{q();let V=Math.max(ge.x,ge.y,ge.z,1),Z=V*1.85,ee=_e;A==="front"?te.position.set(ee.x,ee.y,ee.z+Z):A==="top"?te.position.set(ee.x,ee.y+Z,ee.z+V*.01):A==="side"&&te.position.set(ee.x-Z,ee.y,ee.z),he.target.copy(ee),le(),he.update()}),Ie()}}function ht(A){if(!ce||!A)return;if(A.opacityDefault!=null||A.opacity&&typeof A.opacity=="object"){let ee=A.opacityDefault!=null?Number(A.opacityDefault):1,be=A.opacity&&typeof A.opacity=="object"?A.opacity:{},ke=um(be,a);for(let Fe of d.keys()){let pt=Object.prototype.hasOwnProperty.call(ke,Fe)?ke[Fe]:ee;Tt(Fe,pt,{skipUi:!0})}Zn()}if(Object.prototype.hasOwnProperty.call(A,"cuts")){let ee=Array.isArray(A.cuts)?A.cuts:[];Je.length=0;for(let be of ee){let ke=be?.normal;if(!Array.isArray(ke)||ke.length<3)continue;let Fe=new P(Number(ke[0])||0,Number(ke[1])||0,Number(ke[2])||0);if(Fe.lengthSq()<1e-12)continue;Fe.normalize();let pt=Math.min(1,Math.max(0,Number(be.t)||0));Je.push({id:N++,normal:Fe,t:pt,locked:!0,label:k(Fe)})}gt=!1,it(),H(),Mt(),D?.refreshPartialHeight()}A.projection==="ortho"?$!=="ortho"?xe():O():A.hFovDeg!=null&&Number.isFinite(Number(A.hFovDeg))&&Pe(Number(A.hFovDeg),{reframe:!1});let Z=A.camera;Z&&Array.isArray(Z.target)&&Array.isArray(Z.position)&&we(()=>{K=!0;let ee=new P(0,1,0);Array.isArray(Z.up)&&Z.up.length>=3&&(ee.set(Number(Z.up[0])||0,Number(Z.up[1])||0,Number(Z.up[2])||0),ee.lengthSq()<1e-12?ee.set(0,1,0):ee.normalize()),oe.up.copy(ee),Y.up.copy(ee),te.up.copy(ee),he.target.set(Number(Z.target[0])||0,Number(Z.target[1])||0,Number(Z.target[2])||0),te.position.set(Number(Z.position[0])||0,Number(Z.position[1])||0,Number(Z.position[2])||0),te.lookAt(he.target),$==="ortho"&&Array.isArray(Z.orthoFit)&&Z.orthoFit.length>=2&&L(Number(Z.orthoFit[0])||.1,Number(Z.orthoFit[1])||.1),q(),le(),he.update(),K=!1}),Ie()}function Tt(A,V,Z={}){let ee=Math.max(0,Math.min(1,Number(V)||0));m.set(A,ee),ee>0&&_.set(A,ee),Z.detach&&g.add(A),zr(d.get(A)||[],ee,{edgeMode:f}),q(),it(),Z.skipUi||Zn()}function Be(A,V,Z){let ee=Math.max(0,Math.min(1,Number(V)||0));Z&&x.set(Z,ee);for(let be of A)g.has(be)||(m.set(be,ee),ee>0&&_.set(be,ee),zr(d.get(be)||[],ee,{edgeMode:f}));q(),it(),Zn()}function At(A,V,Z){g.delete(A);let ee=Z.filter(ke=>!g.has(ke)),be=Yn(V,ee);m.set(A,be),be>0&&_.set(A,be),zr(d.get(A)||[],be,{edgeMode:f}),q(),it(),Zn()}function Yt(A){if(!A.length)return 1;let V=m.get(A[0])??1;for(let Z=1;Z<A.length;Z++){let ee=m.get(A[Z])??1;if(Math.abs(ee-V)>1e-4)return NaN}return V}function Yn(A,V){let Z=V.filter(be=>!g.has(be)),ee=Yt(Z.length?Z:V);return Number.isNaN(ee)?x.get(A)??1:ee}function Zn(){for(let[A,V]of p)V.value=(m.get(A)??1)*100;for(let[A,V]of w){let Z=(V.el.dataset.leaves||"").split(",").map(ee=>ee.trim()).filter(Boolean);V.value=Yn(A,Z)*100}for(let[A,V]of S){let Z=g.has(A);V.hidden=!Z,V.setAttribute("aria-hidden",Z?"false":"true")}}function Qt(){return Je.filter(A=>A.locked).map(A=>ot(A))}function $n(){let A=new Ne;return R.getDrawingBufferSize(A),{x:A.x,y:A.y}}function Ci(){if(d.size){if(f===$s){Vm(ce);return}Xm(d,!0,{clippingPlanes:Qt(),resolution:$n(),edgeMode:f})}}function Kn(){d.size&&(fm(d,h,{isDark:u,clippingPlanes:Qt(),opacityByLabel:m,edgeMode:f}),h===oa?(R.toneMapping=Wo,R.toneMappingExposure=1.05):(R.toneMapping=oi,R.toneMappingExposure=1),Ci())}function Pi(){let A=document.getElementById("mats");if(A){A.replaceChildren();for(let[V,Z]of[[mc,"ui.solid"],[oa,"ui.realistic"]]){let ee=document.createElement("button");ee.type="button",ee.dataset.mode=V,ee.textContent=qt(Z),V===h&&ee.classList.add("is-active"),ee.addEventListener("click",()=>{h=V,mm(V),A.querySelectorAll("button").forEach(be=>{be.classList.toggle("is-active",be.dataset.mode===V)}),Kn()}),A.append(ee)}}}function _s(){let A=document.getElementById("edges");if(A){A.replaceChildren();for(let[V,Z]of[[$s,"ui.edgesNone"],[Ks,"ui.edgesTransparent"],[bc,"ui.edgesOpaque"]]){let ee=document.createElement("button");ee.type="button",ee.dataset.edgeMode=V,ee.textContent=qt(Z),V===f&&ee.classList.add("is-active"),ee.addEventListener("click",()=>{f=V,rf(V),A.querySelectorAll("button").forEach(be=>{be.classList.toggle("is-active",be.dataset.edgeMode===V)}),Ci(),yf()}),A.append(ee)}}}function xs(A,V,Z,ee){let be=document.createElement("div");be.className="part-opacity-wrap";let ke,Fe=()=>{if(ke.value/100>0)ee(0);else{let zn=Z();ee(zn>0?zn:1)}};return ke=_c({min:0,max:100,step:1,value:Math.round(V),ariaLabel:A,formatAriaValue:pt=>`${Math.round(pt)}%`,thumbScrubOnly:!0,onInput:pt=>ee(pt/100),onChange:pt=>ee(pt/100),onTap:Fe}),ke.el.classList.add("part-opacity"),be.append(ke.el),{wrap:be,range:ke}}function qr(){let A=document.getElementById("parts");if(!A)return;A.style.removeProperty("--part-name-col");let V=0;for(let Z of A.querySelectorAll(".part-name")){if(Z.closest(".part-children")?.hidden)continue;let be=Z.style.width;Z.style.width="max-content",V=Math.max(V,Math.ceil(Z.getBoundingClientRect().width)),Z.style.width=be}V>0&&A.style.setProperty("--part-name-col",`${V}px`)}function Yr(A,V,Z,ee=null){if(A.type==="leaf"){let mt=document.createElement("div");mt.className="part-row part-leaf",mt.style.setProperty("--part-depth",String(Z)),mt.dataset.leaf=A.id;let da=document.createElement("span");da.className="part-disclosure-spacer",da.setAttribute("aria-hidden","true");let pa=document.createElement("span");pa.className="part-name",pa.textContent=A.label;let{wrap:Ef,range:wf}=xs(`${A.label} opacity`,(m.get(A.id)??1)*100,()=>_.get(A.id)??1,ma=>Tt(A.id,ma,{detach:!!ee}));wf.el.dataset.leaf=A.id,p.set(A.id,wf);let Jn=null;if(ee){Jn=document.createElement("button"),Jn.type="button",Jn.className="part-sync",Jn.textContent=qt("ui.sync"),Jn.setAttribute("aria-label",`${qt("ui.sync")} ${A.label}`);let ma=g.has(A.id);Jn.hidden=!ma,Jn.setAttribute("aria-hidden",ma?"false":"true"),Jn.addEventListener("click",Mg=>{Mg.stopPropagation(),At(A.id,ee.groupId,ee.leafIds)}),S.set(A.id,Jn)}Jn?mt.append(da,pa,Ef,Jn):mt.append(da,pa,Ef),V.append(mt);return}let be=gc(A),ke=document.createElement("div");ke.className="part-group",ke.dataset.group=A.id;let Fe=document.createElement("div");Fe.className="part-row part-group-row",Fe.style.setProperty("--part-depth",String(Z)),Fe.setAttribute("role","button"),Fe.tabIndex=0;let pt=document.createElement("button");pt.type="button",pt.className="part-disclosure",pt.setAttribute("aria-label",`Expand ${A.label}`),pt.setAttribute("aria-expanded","false");let zn=document.createElement("span");zn.className="part-name",zn.textContent=A.label;let es=Yn(A.id,be)||1;es<=0&&(es=1);let{wrap:Li,range:Lc}=xs(`${A.label} opacity`,Yn(A.id,be)*100,()=>es,mt=>{mt>0&&(es=mt),Be(be,mt,A.id)});Lc.el.dataset.group=A.id,Lc.el.dataset.leaves=be.join(","),w.set(A.id,Lc),Li.addEventListener("click",mt=>mt.stopPropagation()),Li.addEventListener("pointerdown",mt=>mt.stopPropagation());let Jr=document.createElement("div");Jr.className="part-children",Jr.hidden=!0;function Sf(mt){mt?y.add(A.id):y.delete(A.id),Jr.hidden=!mt,ke.classList.toggle("is-expanded",mt),pt.setAttribute("aria-expanded",mt?"true":"false"),pt.setAttribute("aria-label",mt?`Collapse ${A.label}`:`Expand ${A.label}`),requestAnimationFrame(()=>qr())}function Dc(){Sf(!y.has(A.id))}pt.addEventListener("click",mt=>{mt.stopPropagation(),Dc()}),Fe.addEventListener("click",mt=>{Li.contains(mt.target)||Dc()}),Fe.addEventListener("keydown",mt=>{(mt.key==="Enter"||mt.key===" ")&&(mt.preventDefault(),Dc())}),Fe.append(pt,zn,Li),ke.append(Fe,Jr),V.append(ke);let yg={groupId:A.id,leafIds:be};for(let mt of A.children)Yr(mt,Jr,Z+1,yg);Sf(y.has(A.id))}function ua(){let A=document.getElementById("parts");if(!A)return;A.replaceChildren(),p.clear(),w.clear(),S.clear();for(let Z of d.keys())m.has(Z)||m.set(Z,1),_.has(Z)||_.set(Z,1);let V=cm(d.keys(),r,t);a=V;for(let Z of V)Yr(Z,A,0,null);requestAnimationFrame(()=>qr())}let ji="iso";function Tc(A){let V=String(A||"").trim();if(!V)return null;for(let Z of i)if(String(Z?.id||"").trim()===V)return Z;return null}function Zr(){let A=ji;A&&A.startsWith("scene:")?fg(A.slice(6)):fg(null)}function Ac(){if(ji==null)return;ji=null,document.getElementById("cams")?.querySelectorAll("button").forEach(V=>{V.classList.remove("is-active")}),Zr()}function ha(){let A=document.getElementById("cams");if(!A)return;A.replaceChildren();function V(Z,ee,be){let ke=document.createElement("button");ke.type="button",ke.dataset.preset=Z,ke.textContent=ee,Z===ji&&ke.classList.add("is-active"),ke.addEventListener("click",()=>{ji=Z,A.querySelectorAll("button").forEach(Fe=>{Fe.classList.toggle("is-active",Fe.dataset.preset===Z)}),be(),Zr()}),A.append(ke)}for(let[Z,ee]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])V(Z,qt(ee),()=>Ke(Z));for(let Z of i){let ee=String(Z?.id||"").trim();if(!ee)continue;let be=qt(`scene.${ee}`);V(`scene:${ee}`,be,()=>ht(Z))}}function E(A=Oe){return A.copy(he.target).sub(te.position).normalize()}function k(A){let V=Math.hypot(A.x,A.z),Z=(Math.atan2(A.x,A.z)*180/Math.PI+360)%360,ee=Math.atan2(A.y,V)*180/Math.PI,be=Math.abs(ee).toFixed(0),ke=ee>=0?"\u2191":"\u2193";return`${Z.toFixed(0)}\xB0 / ${be}\xB0${ke}`}function j(){return Je.some(A=>!A.locked)}function Q(){return Je.filter(A=>A.locked)}function H(){j()||!(Q().length===0||gt)||Je.push({id:N++,normal:new P(0,0,1),t:0,locked:!1,label:qt("ui.cut")})}function pe(A){let V=document.getElementById("cuts");if(!V)return;let Z=V.querySelector(`[data-cut-id="${A.id}"]`);if(!Z){Mt();return}let ee=Z.querySelector(".cut-label");if(ee&&(ee.textContent=A.locked?A.label:qt("ui.cut")),A.locked&&!Z.querySelector(".cut-remove")){let be=document.createElement("button");be.type="button",be.className="cut-remove",be.setAttribute("aria-label",qt("ui.removeSection")),be.textContent="\xD7",be.addEventListener("click",()=>Ye(A.id)),Z.append(be)}}function Ae(A){A.locked||(E(A.normal),A.locked=!0,A.label=k(A.normal),gt=!1,it(),pe(A))}function Ie(){Q().length!==0&&(j()||(gt=!0,!We&&(H(),Mt())))}function De(){gt&&(j()||Q().length!==0&&(H(),Mt()))}function Xe(A,V){let Z=Je.find(ee=>ee.id===A);Z&&(Z.locked||Ae(Z),Z.t=Math.min(1,Math.max(0,Number(V))),it())}function Ye(A){let V=Je.findIndex(Z=>Z.id===A);V<0||(Je.splice(V,1),Q().length===0?(gt=!1,j()||H()):gt&&!j()&&H(),it(),Mt(),D?.refreshPartialHeight())}function ze(A){if(q(),fe.isEmpty())return{near:-1,far:1};let V=fe.min,Z=fe.max,ee=1/0,be=-1/0;for(let pt=0;pt<2;pt++)for(let zn=0;zn<2;zn++)for(let es=0;es<2;es++){$e.set(pt?Z.x:V.x,zn?Z.y:V.y,es?Z.z:V.z);let Li=$e.dot(A);Li<ee&&(ee=Li),Li>be&&(be=Li)}let Fe=Math.max(be-ee,1e-6)*.02;return{near:ee-Fe,far:be+Fe}}function ot(A){let{near:V,far:Z}=ze(A.normal),ee=V+(Z-V)*A.t;return ct.copy(A.normal).multiplyScalar(ee),new mn().setFromNormalAndCoplanarPoint(A.normal,ct)}function it(){let A=Qt();ce&&(ce.traverse(V=>{if(!V.isMesh||!V.material||Bn(V))return;let Z=Array.isArray(V.material)?V.material:[V.material];for(let ee of Z)ee.clippingPlanes=A,ee.clipIntersection=!1,ee.needsUpdate=!0}),f!==$s?Ci():Wm(ce,A))}function Mt(){let A=document.getElementById("cuts");if(A){A.replaceChildren();for(let V of Je){let Z=document.createElement("div");Z.className="cut-row",Z.dataset.cutId=String(V.id);let ee=document.createElement("span");ee.className="cut-label",ee.textContent=V.locked?V.label:qt("ui.cut");let be=()=>{We&&(We=!1,De())},ke=_c({min:0,max:1,step:.001,value:V.t,ariaLabel:V.locked?`Section ${V.label}`:"Section cut",onScrubStart:()=>{We=!0,V.locked||Ae(V)},onScrubEnd:be,onInput:Fe=>Xe(V.id,Fe),onChange:Fe=>{Xe(V.id,Fe),be()}});if(Z.append(ee,ke.el),V.locked){let Fe=document.createElement("button");Fe.type="button",Fe.className="cut-remove",Fe.setAttribute("aria-label",qt("ui.removeSection")),Fe.textContent="\xD7",Fe.addEventListener("click",()=>Ye(V.id)),Z.append(Fe)}A.append(Z)}D?.refreshPartialHeight()}}let St=!1,at="high",He=10,Ot=1e-5,ut=new P,Mn=new P,Ii=!1,Zt=0;function Qi(){St=!0}function dt(){St=!1,Zt=performance.now()}s.addEventListener("pointerdown",Qi,{capture:!0}),window.addEventListener("pointerup",dt,{capture:!0}),window.addEventListener("pointercancel",dt,{capture:!0}),window.addEventListener("touchend",dt,{capture:!0}),window.addEventListener("touchcancel",dt,{capture:!0}),he.addEventListener("start",()=>{Ac(),Qi()}),he.addEventListener("change",()=>{de()}),he.addEventListener("end",()=>{dt(),!qe&&Ie()});let It=1,Ut=0,Rt=0,en=1,js=0,ci=0,Rc=1,Cc=0,Pc=0,Qs=0,dg=280;function pg(){let A=Math.max(1,s.clientWidth),V=Math.max(1,s.clientHeight);if(!D)return{zoom:1,offX:0,offY:0,w:A,h:V};let{bottom:Z,right:ee}=D.getSafeInsets();if(Z<=0&&ee<=0)return{zoom:1,offX:0,offY:0,w:A,h:V};let be=Math.max(1,A-ee),ke=Math.max(1,V-Z),Fe=Math.min(be/A,ke/V),pt=ee/2,zn=Z/2;return{zoom:Fe,offX:pt,offY:zn,w:A,h:V}}function pf(A,V){we(()=>{K=!0,Math.abs(Ut)>.05||Math.abs(Rt)>.05||Math.abs(It-1)>.001?(te.zoom=J*It,te.setViewOffset(A,V,Ut,Rt,A,V)):(te.clearViewOffset(),te.zoom=J,It=1,Ut=0,Rt=0),te.updateProjectionMatrix(),K=!1})}function mf(A=!0){let{zoom:V,offX:Z,offY:ee,w:be,h:ke}=pg();if(en=V,js=Z,ci=ee,!A){It=V,Ut=Z,Rt=ee,Qs=0,pf(be,ke);return}Rc=It,Cc=Ut,Pc=Rt,Qs=performance.now()}function mg(A){if(!Qs)return;let V=Math.min(1,(A-Qs)/dg),Z=1-(1-V)**3;It=Rc+(en-Rc)*Z,Ut=Cc+(js-Cc)*Z,Rt=Pc+(ci-Pc)*Z;let ee=Math.max(1,s.clientWidth),be=Math.max(1,s.clientHeight);pf(ee,be),V>=1&&(Qs=0)}function gf(){let A=Math.max(1,s.clientWidth),V=Math.max(1,s.clientHeight);R.setSize(A,V,!1),$==="perspective"?C():W(),mf(!1);let Z=$n();Gm(ce,Z.x,Z.y)}gf(),window.addEventListener("resize",gf),D?.onDetentChange(()=>{mf(!0)});let Tn=document.getElementById("ar"),tn=document.getElementById("measure"),$r=!1,fa=()=>qt("ui.measure");function Ic(){let A=document.getElementById("locale");if(A){A.replaceChildren();for(let[V,Z]of[["cs","CS"],["en","EN"]]){let ee=document.createElement("button");ee.type="button",ee.dataset.locale=V,ee.textContent=Z,V===Tm()&&ee.classList.add("is-active"),ee.addEventListener("click",()=>{Am(V)}),A.append(ee)}}}function gg(){jh(document),Tn&&!$r&&(Tn.textContent=qt("ui.ar")),tn&&(tn.textContent=fa());try{Pi(),_s(),ha(),ne(),ua(),Mt(),Ic()}catch(A){console.error("relocalizeUi",A);try{Ic()}catch{}}D?.refreshPartialHeight()}Rm(()=>gg());function _g(){Tn&&(Tn.hidden=!1,$r||(Tn.textContent=qt("ui.ar")))}function xg(){tn&&(tn.hidden=!1,tn.textContent=fa())}let Kr=null;l&&(Kr=ug({scene:l,canvas:s,getCamera:()=>te,controls:he,getRoot:()=>ce,getClipPlanes:()=>Qt(),onLiveLength:A=>{tn&&(A?(tn.textContent=A,tn.classList.add("is-live")):(tn.textContent=fa(),tn.classList.remove("is-live")))},onActiveChange:A=>{tn&&(tn.classList.toggle("is-active",A),tn.setAttribute("aria-pressed",A?"true":"false"),A||(tn.textContent=fa(),tn.classList.remove("is-live")))}})),tn&&tn.addEventListener("click",()=>{Kr&&Kr.setActive(!Kr.isActive())});function _f(){if(!ce)return null;ce.updateWorldMatrix(!0,!0);let A=Q().map(be=>ot(be)),V=new Jt;if(V.name="ARContent",ce.traverse(be=>{if(!be.isMesh||!be.visible||Bn(be))return;let ke=vm(be,A);ke&&V.add(ke)}),!V.children.length)return null;V.updateMatrixWorld(!0);let Z=$h(V),ee=new Jt;return ee.name="ARExport",ee.add(V),Mm(V,Z),ee.userData.arPlacement=Z,ee}async function xf(){if($r||!ce)return;$r=!0;let A=Tn?.textContent||"AR";Tn&&(Tn.disabled=!0,Tn.textContent="\u2026");try{let V=_f();if(!V)throw new Error("Nothing visible to export. Show at least one part.");let ee=await new pc().parseAsync(V,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),be=new Blob([ee],{type:"model/vnd.usdz+zip"}),ke=URL.createObjectURL(be),Fe=document.createElement("a");Fe.rel="ar",Fe.href=ke,Fe.download="view.usdz";let pt=document.createElement("img");pt.alt="AR",Fe.appendChild(pt),document.body.appendChild(Fe),Fe.click(),Fe.remove(),setTimeout(()=>URL.revokeObjectURL(ke),6e4)}catch(V){nt(String(V?.message||V))}finally{$r=!1,Tn&&(Tn.disabled=!1,Tn.textContent=A)}}Tn&&Tn.addEventListener("click",()=>{xf()});let vf={scene:l,get camera(){return te},controls:he,parts:d,partOpacity:m,cuts:Je,scenes:i,setPartOpacity:Tt,setCameraPreset:Ke,applyScene:ht,setHFov:Pe,toggleFovIso:ye,get projection(){return $},get hFovDeg(){return F},setCutT:Xe,removeCut:Ye,frameIso:Te,openArQuickLook:xf,buildArExportScene:_f,getPeelQuality:()=>at};window.BlueprintsViewer=vf;function vg(){for(let A of m.values())if(A<1-1e-4)return!0;return!1}function yf(){for(let[A,V]of d){let Z=m.get(A)??1;zr(V,Z,{edgeMode:f})}}let Mf=!1;function bf(){let A=performance.now();mg(A),he.update(),ce&&le(),Kr?.update(),Ii||(ut.copy(te.position),Mn.copy(he.target),Ii=!0,Zt=A);let V=te.position.distanceToSquared(ut)>Ot||he.target.distanceToSquared(Mn)>Ot;ut.copy(te.position),Mn.copy(he.target),(St||V)&&(Zt=A),at=St||A-Zt<He||Qs!==0||We?"fast":"high";let ee=I.render(l,te,ce,vg,{quality:at});Mf&&!ee&&yf(),Mf=ee,requestAnimationFrame(bf)}return bf(),vf}return Ag(iS);})();
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
