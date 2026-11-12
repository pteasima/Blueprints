var BlueprintsViewerBundle=(()=>{var qh=Object.defineProperty;var Tv=Object.getOwnPropertyDescriptor;var Av=Object.getOwnPropertyNames;var Rv=Object.prototype.hasOwnProperty;var Cv=(n,e)=>{for(var t in e)qh(n,t,{get:e[t],enumerable:!0})},Pv=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Av(e))!Rv.call(n,r)&&r!==t&&qh(n,r,{get:()=>e[r],enumerable:!(i=Tv(e,r))||i.enumerable});return n};var Iv=n=>Pv(qh({},"__esModule",{value:!0}),n);var TC={};Cv(TC,{mountViewer:()=>EC});var es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bg=0,Nf=1,Mg=2;var qa=1,Sg=2,Do=3,ri=0,Sn=1,Ot=2,pi=0,Ki=1,Of=2,Uf=3,Ff=4,Wc=5;var Li=100,wg=101,Eg=102,Tg=103,Ag=104,$a=200,ns=201,Rg=202,Cg=203,Ya=204,No=205,Pg=206,Za=207,Ig=208,Lg=209,Dg=210,Ng=211,Og=212,Ug=213,Fg=214,vc=0,bc=1,Mc=2,yo=3,Sc=4,wc=5,Ec=6,Tc=7,Xc=0,Bg=1,kg=2,mi=0,Bf=1,kf=2,zf=3,Oo=4,Hf=5,Vf=6,Gf=7,bf="attached",zg="detached",Wf=300,Cs=301,Uo=302,qc=303,$c=304,Ci=1e3,hi=1001,_o=1002,Yt=1003,Yc=1004;var Ps=1005;var Zt=1006,Fo=1007;var gi=1008;var On=1009,Xf=1010,qf=1011,Bo=1012,Zc=1013,Di=1014,qn=1015,jn=1016,Kc=1017,jc=1018,Is=1020,$f=35902,Yf=35899,Zf=1021,Kf=1022,wn=1023,Sr=1026,Dr=1027,Jc=1028,Qc=1029,is=1030,eu=1031;var tu=1033,Ka=33776,ja=33777,Ja=33778,Qa=33779,nu=35840,iu=35841,ru=35842,su=35843,ou=36196,au=37492,lu=37496,cu=37488,uu=37489,el=37490,hu=37491,fu=37808,du=37809,pu=37810,mu=37811,gu=37812,xu=37813,yu=37814,_u=37815,vu=37816,bu=37817,Mu=37818,Su=37819,wu=37820,Eu=37821,Tu=36492,Au=36494,Ru=36495,Cu=36283,Pu=36284,tl=36285,Iu=36286;var Ss=2300,ws=2301,yc=2302,Mf=2303,Sf=2400,wf=2401,Ef=2402,Hg=2500;var jf=0,nl=1,ko=2,Vg=3200;var il=0,Gg=1,Ni="",Tt="srgb",Wn="srgb-linear",ya="linear",Dt="srgb";var _c=7680;var Wg=519,Xg=512,qg=513,$g=514,Jf=515,Yg=516,Zg=517,Qf=518,ed=519,td=35044;var nd="300 es",fi=2e3,vo=2001;function Lv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Dv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kg(){let n=bo("canvas");return n.style.display="block",n}var Cm={},Mo=null;function _a(...n){let e="THREE."+n.shift();Mo?Mo("log",e,...n):console.log(e,...n)}function jg(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function nt(...n){n=jg(n);let e="THREE."+n.shift();if(Mo)Mo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function st(...n){n=jg(n);let e="THREE."+n.shift();if(Mo)Mo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ms(...n){let e=n.join(" ");e in Cm||(Cm[e]=!0,nt(...n))}function Jg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Qg={[vc]:vc,[Mc]:Ec,[Sc]:Sc,[yo]:wc,[bc]:bc,[Ec]:Mc,[Tc]:Tc,[wc]:yo},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pm=1234567,go=Math.PI/180,Es=180/Math.PI;function ji(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function id(n,e){return(n%e+e)%e}function Nv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ov(n,e,t){return n!==e?(t-n)/(e-n):0}function xa(n,e,t){return(1-t)*n+t*e}function Uv(n,e,t,i){return xa(n,e,1-Math.exp(-t*i))}function Fv(n,e=1){return e-Math.abs(id(n,e*2)-e)}function Bv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function kv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hv(n,e){return n+Math.random()*(e-n)}function Vv(n){return n*(.5-Math.random())}function Gv(n){n!==void 0&&(Pm=n);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wv(n){return n*go}function Xv(n){return n*Es}function qv(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function $v(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yv(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*u,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Lu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sd(n,e){if(e.constructor===Float32Array)return n;let t=Lu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function od(n,e){if(e.constructor===Float32Array)return n;let t=Lu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var rs={DEG2RAD:go,RAD2DEG:Es,generateUUID:ji,clamp:ct,euclideanModulo:id,mapLinear:Nv,inverseLerp:Ov,lerp:xa,damp:Uv,pingpong:Fv,smoothstep:Bv,smootherstep:kv,randInt:zv,randFloat:Hv,randFloatSpread:Vv,seededRandom:Gv,degToRad:Wv,radToDeg:Xv,isPowerOfTwo:qv,ceilPowerOfTwo:$v,floorPowerOfTwo:rd,setQuaternionFromProperEuler:Yv,normalize:od,denormalize:sd},Ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],m=s[o+2],x=s[o+3];if(h!==x||l!==f||c!==d||u!==m){let g=l*f+c*d+u*m+h*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let b=Math.acos(g),S=Math.sin(b);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Im.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Im.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $h.copy(this).projectOnVector(e),this.sub($h)}reflect(e){return this.sub($h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$h=new I,Im=new Kt,lt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],x=r[0],g=r[3],p=r[6],b=r[1],S=r[4],v=r[7],M=r[2],w=r[5],y=r[8];return s[0]=o*x+a*b+l*M,s[3]=o*g+a*S+l*w,s[6]=o*p+a*v+l*y,s[1]=c*x+u*b+h*M,s[4]=c*g+u*S+h*w,s[7]=c*p+u*v+h*y,s[2]=f*x+d*b+m*M,s[5]=f*g+d*S+m*w,s[8]=f*p+d*v+m*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yh.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yh.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yh=new lt,Lm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zv(){let n={enabled:!0,workingColorSpace:Wn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Dt&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(r.r=xo(r.r),r.g=xo(r.g),r.b=xo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?ya:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wn]:{primaries:e,whitePoint:i,transfer:ya,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}var mt=Zv();function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Zs,Ac=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zs===void 0&&(Zs=bo("canvas")),Zs.width=e.width,Zs.height=e.height;let r=Zs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kv=0,So=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zh(r[o].image)):s.push(Zh(r[o]))}else s=Zh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ac.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var jv=0,Kh=new I,fn=class n extends Pi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=hi,r=hi,s=Zt,o=gi,a=wn,l=On,c=n.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=ji(),this.name="",this.source=new So(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Wf;fn.DEFAULT_ANISOTROPY=1;var wt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(d+1)/2,M=(p+1)/2,w=(u+f)/4,y=(h+x)/4,E=(m+g)/4;return S>v&&S>M?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=y/i):v>M?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=E/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=y/s,r=E/s),this.set(i,r,s,t),this}let b=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new fn({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new So(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Rc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},va=class extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var rt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,m,x,g)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Ks.setFromMatrixColumn(e,0).length(),s=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jv,e,Qv)}lookAt(e,t,i){let r=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Vr.crossVectors(i,ti),Vr.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Vr.crossVectors(i,ti)),Vr.normalize(),zl.crossVectors(ti,Vr),r[0]=Vr.x,r[4]=zl.x,r[8]=ti.x,r[1]=Vr.y,r[5]=zl.y,r[9]=ti.y,r[2]=Vr.z,r[6]=zl.z,r[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],b=i[3],S=i[7],v=i[11],M=i[15],w=r[0],y=r[4],E=r[8],D=r[12],N=r[1],k=r[5],q=r[9],G=r[13],O=r[2],Y=r[6],ne=r[10],j=r[14],ve=r[3],ie=r[7],H=r[11],ee=r[15];return s[0]=o*w+a*N+l*O+c*ve,s[4]=o*y+a*k+l*Y+c*ie,s[8]=o*E+a*q+l*ne+c*H,s[12]=o*D+a*G+l*j+c*ee,s[1]=u*w+h*N+f*O+d*ve,s[5]=u*y+h*k+f*Y+d*ie,s[9]=u*E+h*q+f*ne+d*H,s[13]=u*D+h*G+f*j+d*ee,s[2]=m*w+x*N+g*O+p*ve,s[6]=m*y+x*k+g*Y+p*ie,s[10]=m*E+x*q+g*ne+p*H,s[14]=m*D+x*G+g*j+p*ee,s[3]=b*w+S*N+v*O+M*ve,s[7]=b*y+S*k+v*Y+M*ie,s[11]=b*E+S*q+v*ne+M*H,s[15]=b*D+S*G+v*j+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],b=l*d-c*f,S=a*d-c*h,v=a*f-l*h,M=o*d-c*u,w=o*f-l*u,y=o*h-a*u;return t*(x*b-g*S+p*v)-i*(m*b-g*M+p*w)+r*(m*S-x*M+p*y)-s*(m*v-x*w+g*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],b=t*a-i*o,S=t*l-r*o,v=t*c-s*o,M=i*l-r*a,w=i*c-s*a,y=r*c-s*l,E=u*x-h*m,D=u*g-f*m,N=u*p-d*m,k=h*g-f*x,q=h*p-d*x,G=f*p-d*g,O=b*G-S*q+v*k+M*N-w*D+y*E;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/O;return e[0]=(a*G-l*q+c*k)*Y,e[1]=(r*q-i*G-s*k)*Y,e[2]=(x*y-g*w+p*M)*Y,e[3]=(f*w-h*y-d*M)*Y,e[4]=(l*N-o*G-c*D)*Y,e[5]=(t*G-r*N+s*D)*Y,e[6]=(g*v-m*y-p*S)*Y,e[7]=(u*y-f*v+d*S)*Y,e[8]=(o*q-a*N+c*E)*Y,e[9]=(i*N-t*q-s*E)*Y,e[10]=(m*w-x*v+p*b)*Y,e[11]=(h*v-u*w-d*b)*Y,e[12]=(a*D-o*k-l*E)*Y,e[13]=(t*k-i*D+r*E)*Y,e[14]=(x*S-m*M-g*b)*Y,e[15]=(u*M-h*S+f*b)*Y,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,x=o*u,g=o*h,p=a*h,b=l*c,S=l*u,v=l*h,M=i.x,w=i.y,y=i.z;return r[0]=(1-(x+p))*M,r[1]=(d+v)*M,r[2]=(m-S)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+p))*w,r[6]=(g+b)*w,r[7]=0,r[8]=(m+S)*y,r[9]=(g-b)*y,r[10]=(1-(f+x))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Ks.set(r[0],r[1],r[2]).length(),a=Ks.set(r[4],r[5],r[6]).length(),l=Ks.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ti.copy(this);let c=1/o,u=1/a,h=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,t.setFromRotationMatrix(Ti),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=fi,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===fi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===vo)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fi,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===fi)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===vo)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ks=new I,Ti=new rt,Jv=new I(0,0,0),Qv=new I(1,1,1),Vr=new I,zl=new I,ti=new I,Nm=new rt,Om=new Kt,Wi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},eb=0,Um=new I,js=new Kt,gr=new rt,Hl=new I,sa=new I,tb=new I,nb=new Kt,Fm=new I(1,0,0),Bm=new I(0,1,0),km=new I(0,0,1),zm={type:"added"},ib={type:"removed"},Js={type:"childadded",child:null},jh={type:"childremoved",child:null},Xt=class n extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Wi,i=new Kt,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new lt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,t){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hl.copy(e):Hl.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(sa,Hl,this.up):gr.lookAt(Hl,sa,this.up),this.quaternion.setFromRotationMatrix(gr),r&&(gr.extractRotation(r.matrixWorld),js.setFromRotationMatrix(gr),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),Js.child=e,this.dispatchEvent(Js),Js.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ib),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new I(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rb={type:"move"},Eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Jh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=id(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Jh(o,s,e+1/3),this.g=Jh(o,s,e),this.b=Jh(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=e0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return mt.workingToColorSpace(In.copy(this),e),Math.round(ct(In.r*255,0,255))*65536+Math.round(ct(In.g*255,0,255))*256+Math.round(ct(In.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(In.copy(this),t);let i=In.r,r=In.g,s=In.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Tt){mt.workingToColorSpace(In.copy(this),e);let t=In.r,i=In.g,r=In.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(Vl);let i=xa(Gr.h,Vl.h,t),r=xa(Gr.s,Vl.s,t),s=xa(Gr.l,Vl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Xe;Xe.NAMES=e0;var Xn=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ai=new I,xr=new I,Qh=new I,yr=new I,Qs=new I,eo=new I,Hm=new I,ef=new I,tf=new I,nf=new I,rf=new wt,sf=new wt,of=new wt,Vi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ai.subVectors(e,t),r.cross(Ai);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ai.subVectors(r,t),xr.subVectors(i,t),Qh.subVectors(e,t);let o=Ai.dot(Ai),a=Ai.dot(xr),l=Ai.dot(Qh),c=xr.dot(xr),u=xr.dot(Qh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,yr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yr.x),l.addScaledVector(o,yr.y),l.addScaledVector(a,yr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rf,s.x),o.addScaledVector(sf,s.y),o.addScaledVector(of,s.z),o}static isFrontFacing(e,t,i,r){return Ai.subVectors(i,t),xr.subVectors(e,t),Ai.cross(xr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Ai.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Qs.subVectors(r,i),eo.subVectors(s,i),ef.subVectors(e,i);let l=Qs.dot(ef),c=eo.dot(ef);if(l<=0&&c<=0)return t.copy(i);tf.subVectors(e,r);let u=Qs.dot(tf),h=eo.dot(tf);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(Qs,o);nf.subVectors(e,s);let d=Qs.dot(nf),m=eo.dot(nf);if(m>=0&&d<=m)return t.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(eo,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Hm.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Hm,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Qs,o).addScaledVector(eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Wl.subVectors(this.max,oa),to.subVectors(e.a,oa),no.subVectors(e.b,oa),io.subVectors(e.c,oa),Wr.subVectors(no,to),Xr.subVectors(io,no),ys.subVectors(to,io);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-ys.z,ys.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,ys.z,0,-ys.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-ys.y,ys.x,0];return!af(t,to,no,io,Wl)||(t=[1,0,0,0,1,0,0,0,1],!af(t,to,no,io,Wl))?!1:(Xl.crossVectors(Wr,Xr),t=[Xl.x,Xl.y,Xl.z],af(t,to,no,io,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_r=[new I,new I,new I,new I,new I,new I,new I,new I],Ri=new I,Gl=new Nt,to=new I,no=new I,io=new I,Wr=new I,Xr=new I,ys=new I,oa=new I,Wl=new I,Xl=new I,_s=new I;function af(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_s.fromArray(n,s);let a=r.x*Math.abs(_s.x)+r.y*Math.abs(_s.y)+r.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var on=new I,ql=new Ge,sb=0,Vt=class extends Pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=td,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?Lu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):od(e,this.array)}};var ba=class extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ma=class extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Wt=class extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},ob=new Nt,aa=new I,lf=new I,_n=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ob.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(lf)),this.expandByPoint(aa.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ab=0,ui=new rt,cf=new Xt,ro=new I,ni=new Nt,la=new Nt,xn=new I,zt=class n extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lv(e)?Ma:ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];la.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(ni.min,la.min),ni.expandByPoint(xn),xn.addVectors(ni.max,la.max),ni.expandByPoint(xn)):(ni.expandByPoint(la.min),ni.expandByPoint(la.max))}ni.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xn.fromBufferAttribute(a,c),l&&(ro.fromBufferAttribute(e,c),xn.add(ro)),r=Math.max(r,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Vt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)a[D]=new I,l[D]=new I;let u=new I,h=new I,f=new I,d=new Ge,m=new Ge,x=new Ge,g=new I,p=new I;function b(D,N,k){c[D]=c[N]=c[k]=1,u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,N),f.fromBufferAttribute(i,k),d.fromBufferAttribute(s,D),m.fromBufferAttribute(s,N),x.fromBufferAttribute(s,k),h.sub(u),f.sub(u),m.sub(d),x.sub(d);let q=1/(m.x*x.y-x.x*m.y);isFinite(q)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(q),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(q),a[D].add(g),a[N].add(g),a[k].add(g),l[D].add(p),l[N].add(p),l[k].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,N=S.length;D<N;++D){let k=S[D],q=k.start,G=k.count;for(let O=q,Y=q+G;O<Y;O+=3)b(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new I,M=new I,w=new I,y=new I;function E(D){w.fromBufferAttribute(r,D),y.copy(w);let N=a[D];v.copy(N),v.sub(w.multiplyScalar(w.dot(N))).normalize(),M.crossVectors(y,N);let q=M.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,q)}for(let D=0,N=i.count;D<N;++D)c[D]&&E(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Vt(f,u,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=td,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Vm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Vm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Vm(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ji()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Gn=new I,Ln=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Lu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):od(e,this.data.array)}},uf=new I,lb=new I,cb=new lt,yn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=uf.subVectors(i,t).cross(lb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(uf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||cb.getNormalMatrix(e),r=this.coplanarPoint(uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ub=0,Dn=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Ki,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=No,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_c,this.stencilZFail=_c,this.stencilZPass=_c,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},To=class extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},so,ca=new I,oo=new I,ao=new I,lo=new Ge,ua=new Ge,t0=new rt,$l=new I,ha=new I,Yl=new I,Gm=new Ge,hf=new Ge,Wm=new Ge,Sa=class extends Xt{constructor(e=new To){if(super(),this.isSprite=!0,this.type="Sprite",so===void 0){so=new zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Yr(t,5);so.setIndex([0,1,2,0,2,3]),so.setAttribute("position",new Ln(i,3,0,!1)),so.setAttribute("uv",new Ln(i,2,3,!1))}this.geometry=so,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oo.setFromMatrixScale(this.matrixWorld),t0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oo.multiplyScalar(-ao.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Zl($l.set(-.5,-.5,0),ao,o,oo,r,s),Zl(ha.set(.5,-.5,0),ao,o,oo,r,s),Zl(Yl.set(.5,.5,0),ao,o,oo,r,s),Gm.set(0,0),hf.set(1,0),Wm.set(1,1);let a=e.ray.intersectTriangle($l,ha,Yl,!1,ca);if(a===null&&(Zl(ha.set(-.5,.5,0),ao,o,oo,r,s),hf.set(0,1),a=e.ray.intersectTriangle($l,Yl,ha,!1,ca),a===null))return;let l=e.ray.origin.distanceTo(ca);l<e.near||l>e.far||t.push({distance:l,point:ca.clone(),uv:Vi.getInterpolation(ca,$l,ha,Yl,Gm,hf,Wm,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Zl(n,e,t,i,r,s){lo.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ua.x=s*lo.x-r*lo.y,ua.y=r*lo.x+s*lo.y):ua.copy(lo),n.copy(e),n.x+=ua.x,n.y+=ua.y,n.applyMatrix4(t0)}var vr=new I,ff=new I,Kl=new I,jl=new I,Xi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ff.copy(e).add(t).multiplyScalar(.5),Kl.copy(t).sub(e).normalize(),jl.copy(this.origin).sub(ff);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Kl),a=jl.dot(this.direction),l=-jl.dot(Kl),c=jl.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ff).addScaledVector(Kl,f),d}intersectSphere(e,t){if(e.radius<0)return null;vr.subVectors(e.center,this.origin);let i=vr.dot(this.direction),r=vr.dot(vr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,g=t.z-o.z,p=i.x-o.x,b=i.y-o.y,S=i.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(u),y,E,D,N,k,q,G,O,Y,ne,j,ve;if(v>=M&&v>=w?(D=l,q=h,Y=m,ve=p,l>=0?(y=c,E=u,N=f,k=d,G=x,O=g,ne=b,j=S):(y=u,E=c,N=d,k=f,G=g,O=x,ne=S,j=b)):M>=w?(D=c,q=f,Y=x,ve=b,c>=0?(y=u,E=l,N=d,k=h,G=g,O=m,ne=S,j=p):(y=l,E=u,N=h,k=d,G=m,O=g,ne=p,j=S)):(D=u,q=d,Y=g,ve=S,u>=0?(y=l,E=c,N=h,k=f,G=m,O=x,ne=p,j=b):(y=c,E=l,N=f,k=h,G=x,O=m,ne=b,j=p)),D===0)return null;let ie=y/D,H=E/D,ee=1/D,Ae=N-ie*q,Ne=k-H*q,Q=G-ie*Y,xe=O-H*Y,re=ne-ie*ve,V=j-H*ve,te=re*xe-V*Q,Ie=Ae*V-Ne*re,We=Q*Ne-xe*Ae;if(r){if(te<0||Ie<0||We<0)return null}else if((te<0||Ie<0||We<0)&&(te>0||Ie>0||We>0))return null;let Oe=te+Ie+We;if(Oe===0)return null;let He=ee*(te*q+Ie*Y+We*ve);return(Oe>0?He<0:He>0)?null:this.at(He/Oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xm=new rt,vs=new Xi,Jl=new _n,qm=new I,Ql=new I,ec=new I,tc=new I,df=new I,nc=new I,$m=new I,ic=new I,ut=class extends Xt{constructor(e=new zt,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){nc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(df.fromBufferAttribute(h,e),o?nc.addScaledVector(df,u):nc.addScaledVector(df.sub(t),u))}t.add(nc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),vs.copy(e.ray).recast(e.near),!(Jl.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Jl,qm)===null||vs.origin.distanceToSquared(qm)>(e.far-e.near)**2))&&(Xm.copy(s).invert(),vs.copy(e.ray).applyMatrix4(Xm),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,M=S;v<M;v+=3){let w=a.getX(v),y=a.getX(v+1),E=a.getX(v+2);r=rc(this,p,e,i,c,u,h,w,y,E),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);r=rc(this,o,e,i,c,u,h,b,S,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,M=S;v<M;v+=3){let w=v,y=v+1,E=v+2;r=rc(this,p,e,i,c,u,h,w,y,E),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=g,S=g+1,v=g+2;r=rc(this,o,e,i,c,u,h,b,S,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function hb(n,e,t,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ri,a),l===null)return null;ic.copy(a),ic.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ic);return c<t.near||c>t.far?null:{distance:c,point:ic.clone(),object:n}}function rc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ql),n.getVertexPosition(l,ec),n.getVertexPosition(c,tc);let u=hb(n,e,t,i,Ql,ec,tc,$m);if(u){let h=new I;Vi.getBarycoord($m,Ql,ec,tc,h),r&&(u.uv=Vi.getInterpolatedAttribute(r,a,l,c,h,new Ge)),s&&(u.uv1=Vi.getInterpolatedAttribute(s,a,l,c,h,new Ge)),o&&(u.normal=Vi.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Vi.getNormal(Ql,ec,tc,f.normal),u.face=f,u.barycoord=h}return u}var fa=new wt,Ym=new wt,Zm=new wt,fb=new wt,Km=new rt,sc=new I,pf=new _n,jm=new rt,mf=new Xi,wa=class extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bf,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sc),this.boundingBox.expandByPoint(sc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sc),this.boundingSphere.expandByPoint(sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pf.copy(this.boundingSphere),pf.applyMatrix4(r),e.ray.intersectsSphere(pf)!==!1&&(jm.copy(r).invert(),mf.copy(e.ray).applyMatrix4(jm),!(this.boundingBox!==null&&mf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zg?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Ym.fromBufferAttribute(r.attributes.skinIndex,e),Zm.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(fa.copy(t),t.set(0,0,0,0)):(fa.set(t.x,t.y,t.z,1),t.set(0,0,0)),fa.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Zm.getComponent(s);if(o!==0){let a=Ym.getComponent(s);Km.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(fb.copy(fa).applyMatrix4(Km),o)}}return t.isVector4&&(t.w=fa.w),t.applyMatrix4(this.bindMatrixInverse)}},Ao=class extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ro=class extends fn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Yt,u=Yt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jm=new rt,db=new rt,Ea=class n{constructor(e=[],t=[]){this.uuid=ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new rt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:db;Jm.multiplyMatrices(a,t[s]),Jm.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ro(t,e,e,wn,qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(nt("Skeleton: No bone found with UUID:",s),o=new Ao),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},wr=class extends Vt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},co=new rt,Qm=new rt,oc=[],eg=new Nt,pb=new rt,da=new ut,pa=new _n,Ts=class extends ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,pb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,co),eg.copy(e.boundingBox).applyMatrix4(co),this.boundingBox.union(eg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,co),pa.copy(e.boundingSphere).applyMatrix4(co),this.boundingSphere.union(pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(i),e.ray.intersectsSphere(pa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,co),Qm.multiplyMatrices(i,co),da.matrixWorld=Qm,da.raycast(e,oc);for(let o=0,a=oc.length;o<a;o++){let l=oc[o];l.instanceId=s,l.object=this,t.push(l)}oc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(r*this.count),r,this.count,Jc,qn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new _n,mb=new Ge(.5,.5),ac=new I,Zr=class{constructor(e=new yn,t=new yn,i=new yn,r=new yn,s=new yn,o=new yn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],b=s[12],S=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,p-m,M-b).normalize(),r[1].setComponents(c+o,d+u,p+m,M+b).normalize(),r[2].setComponents(c+a,d+h,p+x,M+S).normalize(),r[3].setComponents(c-a,d-h,p-x,M-S).normalize(),i)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,p-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-g,M-v).normalize(),t===fi)r[5].setComponents(c+l,d+f,p+g,M+v).normalize();else if(t===vo)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);let t=mb.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ac.x=r.normal.x>0?e.max.x:e.min.x,ac.y=r.normal.y>0?e.max.y:e.min.y,ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tg=new rt,Pc=class n{constructor(){this.coordinateSystem=fi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];tg.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Zr),i[r].setFromProjectionMatrix(tg,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Zr),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Er=class extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ic=new I,Lc=new I,ng=new rt,ma=new Xi,lc=new _n,gf=new I,ig=new I,qi=class extends Xt{constructor(e=new zt,t=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ic.fromBufferAttribute(t,r-1),Lc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ic.distanceTo(Lc);e.setAttribute("lineDistance",new Wt(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(r),lc.radius+=s,e.ray.intersectsSphere(lc)===!1)return;ng.copy(r).invert(),ma.copy(e.ray).applyMatrix4(ng);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),b=u.getX(x+1),S=cc(this,e,ma,l,p,b,x);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=cc(this,e,ma,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=cc(this,e,ma,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=cc(this,e,ma,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function cc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Ic.fromBufferAttribute(a,r),Lc.fromBufferAttribute(a,s),t.distanceSqToSegment(Ic,Lc,gf,ig)>i)return;gf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(gf);if(!(c<e.near||c>e.far))return{distance:c,point:ig.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var rg=new I,sg=new I,Ta=class extends qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)rg.fromBufferAttribute(t,r),sg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+rg.distanceTo(sg);e.setAttribute("lineDistance",new Wt(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Aa=class extends qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Co=class extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},og=new rt,Tf=new Xi,uc=new _n,hc=new I,Ra=class extends Xt{constructor(e=new zt,t=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(r),uc.radius+=s,e.ray.intersectsSphere(uc)===!1)return;og.copy(r).invert(),Tf.copy(e.ray).applyMatrix4(og);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);hc.fromBufferAttribute(h,g),ag(hc,g,l,r,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,x=d;m<x;m++)hc.fromBufferAttribute(h,m),ag(hc,m,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ag(n,e,t,i,r,s,o){let a=Tf.distanceSqToPoint(n);if(a<t){let l=new I;Tf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ca=class extends fn{constructor(e=[],t=Cs,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tr=class extends fn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ar=class extends fn{constructor(e,t,i=Di,r,s,o,a=Yt,l=Yt,c,u=Sr,h=1){if(u!==Sr&&u!==Dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new So(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pa=class extends Ar{constructor(e,t=Di,i=Cs,r,s,o=Yt,a=Yt,l,c=Sr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ia=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$i=class n extends zt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(h,2));function m(x,g,p,b,S,v,M,w,y,E,D){let N=v/y,k=M/E,q=v/2,G=M/2,O=w/2,Y=y+1,ne=E+1,j=0,ve=0,ie=new I;for(let H=0;H<ne;H++){let ee=H*k-G;for(let Ae=0;Ae<Y;Ae++){let Ne=Ae*N-q;ie[x]=Ne*b,ie[g]=ee*S,ie[p]=O,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[g]=0,ie[p]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Ae/y),h.push(1-H/E),j+=1}}for(let H=0;H<E;H++)for(let ee=0;ee<y;ee++){let Ae=f+ee+Y*H,Ne=f+ee+Y*(H+1),Q=f+(ee+1)+Y*(H+1),xe=f+(ee+1)+Y*H;l.push(Ae,Ne,xe),l.push(Ne,Q,xe),ve+=6}a.addGroup(d,ve,D),d+=ve,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var fc=new I,dc=new I,xf=new I,pc=new Vi,La=class extends zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(go*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:p}=pc;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),pc.getNormal(xf),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let S=(b+1)%3,v=h[b],M=h[S],w=pc[u[b]],y=pc[u[S]],E=`${v}_${M}`,D=`${M}_${v}`,N=f.get(D);N?(xf.dot(N.normal)<=s&&(d.push(w.x,w.y,w.z),d.push(y.x,y.y,y.z)),f.set(D,null)):f.has(E)||f.set(E,{index0:c[b],index1:c[S],normal:xf.clone()})}}for(let m of f.values())if(m){let{index0:x,index1:g}=m;fc.fromBufferAttribute(a,x),dc.fromBufferAttribute(a,g),d.push(fc.x,fc.y,fc.z),d.push(dc.x,dc.y,dc.z)}this.setAttribute("position",new Wt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var di=class n extends zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let b=p*f-o;for(let S=0;S<c;S++){let v=S*h-s;m.push(v,-b,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,v=b+c*(p+1),M=b+1+c*(p+1),w=b+1+c*p;d.push(S,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Da=class n extends zt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,f=new I,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let b=[],S=p/i,v=o+S*a,M=e*Math.cos(v),w=Math.sqrt(e*e-M*M),y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let D=E/t,N=r+D*s;h.x=-w*Math.cos(N),h.y=M,h.z=w*Math.sin(N),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(D+y,1-S),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let S=u[p][b+1],v=u[p][b],M=u[p+1][b],w=u[p+1][b+1];(p!==0||o>0)&&d.push(S,v,w),(p!==i-1||l<Math.PI)&&d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Na=class extends zt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new I,s=new I;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let m=f,x=f+d;m<x;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),b=a.getX(m+(g+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,b),lg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),lg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Wt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function lg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(cg(r))r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(cg(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Un(n){let e={};for(let t=0;t<n.length;t++){let i=Ls(n[t]);for(let r in i)e[r]=i[r]}return e}function cg(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function gb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ad(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var rl={clone:Ls,merge:Un},xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new I().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dc=class extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nn=class extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends Nn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Oa=class extends Dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nc=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oc=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $r(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ga(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function _b(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function ug(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function vb(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var Yi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uc=class extends Yi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sf,endingEnd:Sf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case wf:s=e,a=2*t-i;break;case Ef:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wf:o=e,l=2*i-t;break;case Ef:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,b=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,S=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+b*o[c+M]+S*o[l+M]+v*o[h+M];return s}},Fc=class extends Yi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Bc=class extends Yi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},kc=class extends Yi{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-t)/(r-t),x=1-m;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*m;return s}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,b=h[p],S=h[p+1],v=e*f+m*2,M=u[v],w=u[v+1],y=Mb(i,t,b,M,r);s[m]=n0(y,x,S,w,g)}return s}};function n0(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function bb(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function Mb(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=n0(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let l=bb(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$r(t,this.TimeBufferType),this.values=$r(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$r(e.times,Array),values:$r(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),ga(e.settings)&&(i.settings={inTangents:$r(e.settings.inTangents,Array),outTangents:$r(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new kc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case ws:t=this.InterpolantFactoryMethodLinear;break;case yc:t=this.InterpolantFactoryMethodSmooth;break;case Mf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return yc;case this.InterpolantFactoryMethodBezier:return Mf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;ga(this.settings)&&(hg(this.settings.inTangents,e),hg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;ga(this.settings)&&(fg(this.settings.inTangents,e),fg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){st("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Dv(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===yc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let m=0;m!==i;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,ga(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function hg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function fg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=ws;var Rr=class extends Kn{constructor(e,t,i){super(e,t,i)}};Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=Ss;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Kn{constructor(e,t,i,r){super(e,t,i,r)}};Ua.prototype.ValueTypeName="color";var Cr=class extends Kn{constructor(e,t,i,r){super(e,t,i,r)}};Cr.prototype.ValueTypeName="number";var zc=class extends Yi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Kt.slerpFlat(s,0,o,c-a,o,c,l);return s}},Pr=class extends Kn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends Kn{constructor(e,t,i){super(e,t,i)}};Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=Ss;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends Kn{constructor(e,t,i,r){super(e,t,i,r)}};Kr.prototype.ValueTypeName="vector";var Fa=class{constructor(e="",t=-1,i=[],r=Hg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(wb(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(Kn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=_b(l);l=ug(l,1,u),c=ug(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Cr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Sb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return Kr;case"color":return Ua;case"quaternion":return Pr;case"bool":case"boolean":return Rr;case"string":return Ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function wb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Sb(n.type);if(n.times===void 0){let i=[],r=[];vb(n.keys,i,r,"value"),n.times=i,n.values=r}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),ga(n.settings)&&(t.settings={inTangents:$r(n.settings.inTangents,Float32Array),outTangents:$r(n.settings.outTangents,Float32Array)}),t}var Gi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(dg(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!dg(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function dg(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Hc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},i0=new Hc,Zi=class{constructor(e){this.manager=e!==void 0?e:i0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var br={},Af=class extends Error{constructor(e,t){super(e),this.response=t}},Po=class extends Zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Gi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(br[e]!==void 0){br[e].push({onLoad:t,onProgress:i,onError:r});return}br[e]=[],br[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=br[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){b();function b(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{x+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let w=0,y=u.length;w<y;w++){let E=u[w];E.onProgress&&E.onProgress(M)}p.enqueue(v),b()}},S=>{p.error(S)})}}});return new Response(g)}else throw new Af(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Gi.add(`file:${e}`,c);let u=br[e];delete br[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=br[e];if(u===void 0)throw this.manager.itemError(e),c;delete br[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var uo=new WeakMap,Vc=class extends Zi{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Gi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=uo.get(o);h===void 0&&(h=[],uo.set(o,h)),h.push({onLoad:t,onError:r})}return o}let a=bo("img");function l(){u(),t&&t(this);let h=uo.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}uo.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Gi.remove(`image:${e}`);let f=uo.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}uo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Gi.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ba=class extends Zi{constructor(e){super(e)}load(e,t,i,r){let s=new fn,o=new Vc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},As=class extends Xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var yf=new rt,pg=new I,mg=new I,Io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;pg.setFromMatrixPosition(e.matrixWorld),t.position.copy(pg),mg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){yf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(yf,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===vo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mc=new I,gc=new Kt,Hi=new I,ka=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mc,gc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(mc,gc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qr=new I,gg=new Ge,xg=new Ge,hn=class extends ka{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,gg,xg),t.subVectors(xg,gg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rf=class extends Io{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Es*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},za=class extends As{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Rf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Cf=class extends Io{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},Rs=class extends As{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Cf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ii=class extends ka{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pf=class extends Io{constructor(){super(new Ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Pf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ha=class extends As{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Lr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Va=class extends zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var _f=new WeakMap,Ga=class extends Zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Gi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{_f.has(o)===!0?(r&&r(_f.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),_f.set(l,c),Gi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Gi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ho=-90,fo=1,Lo=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new hn(ho,fo,e,t);r.layers=this.layers,this.add(r);let s=new hn(ho,fo,e,t);s.layers=this.layers,this.add(s);let o=new hn(ho,fo,e,t);o.layers=this.layers,this.add(o);let a=new hn(ho,fo,e,t);a.layers=this.layers,this.add(a);let l=new hn(ho,fo,e,t);l.layers=this.layers,this.add(l);let c=new hn(ho,fo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Gc=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ld="\\[\\]\\.:\\/",Eb=new RegExp("["+ld+"]","g"),cd="[^"+ld+"]",Tb="[^"+ld.replace("\\.","")+"]",Ab=/((?:WC+[\/:])*)/.source.replace("WC",cd),Rb=/(WCOD+)?/.source.replace("WCOD",Tb),Cb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cd),Pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cd),Ib=new RegExp("^"+Ab+Rb+Cb+Pb+"$"),Lb=["material","materials","bones","map"],If=class{constructor(e,t,i){let r=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eb,"")}static parseTrackName(e){let t=Ib.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Lb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=If;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RC=new Float32Array(1);var Jr=class extends Yr{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var yg=new rt,ii=class{constructor(e,t,i=0,r=1/0){this.ray=new Xi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yg),this}intersectObject(e,t=!0,i=[]){return Lf(e,this,i,t),i.sort(_g),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Lf(e[r],this,i,t);return i.sort(_g),i}};function _g(n,e){return n.distance-e.distance}function Lf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Lf(s[o],e,t,!0)}}var Qr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Df=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};var vg=new I,xc=new I,po=new I,mo=new I,vf=new I,Db=new I,Nb=new I,Wa=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){vg.subVectors(e,this.start),xc.subVectors(this.end,this.start);let i=xc.dot(xc);if(i===0)return 0;let s=xc.dot(vg)/i;return t&&(s=ct(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Db,i=Nb){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;po.subVectors(c,a),mo.subVectors(u,l),vf.subVectors(a,l);let h=po.dot(po),f=mo.dot(mo),d=mo.dot(vf);if(h<=r&&f<=r)return t.copy(a),i.copy(l),t.distanceToSquared(i);if(h<=r)s=0,o=d/f,o=ct(o,0,1);else{let m=po.dot(vf);if(f<=r)o=0,s=ct(-m/h,0,1);else{let x=po.dot(mo),g=h*f-x*x;g!==0?s=ct((x*d-m*f)/g,0,1):s=0,o=(x*s+d)/f,o<0?(o=0,s=ct(-m/h,0,1)):o>1&&(o=1,s=ct((x-m)/h,0,1))}}return t.copy(a).addScaledVector(po,s),i.copy(l).addScaledVector(mo,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Xa=class extends Pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ud(n,e,t,i){let r=Ob(i);switch(t){case Zf:return n*e;case Jc:return n*e/r.components*r.byteLength;case Qc:return n*e/r.components*r.byteLength;case is:return n*e*2/r.components*r.byteLength;case eu:return n*e*2/r.components*r.byteLength;case Kf:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case tu:return n*e*4/r.components*r.byteLength;case Ka:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case iu:case su:return Math.max(n,16)*Math.max(e,8)/4;case nu:case ru:return Math.max(n,8)*Math.max(e,8)/2;case ou:case au:case cu:case uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lu:case el:case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _u:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Su:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tu:case Au:case Ru:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cu:case Pu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case tl:case Iu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ob(n){switch(n){case On:case Xf:return{byteLength:1,components:1};case Bo:case qf:case jn:return{byteLength:2,components:1};case Kc:case jc:return{byteLength:2,components:4};case Di:case Zc:case qn:return{byteLength:4,components:1};case $f:case Yf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function E0(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Fb(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wb=`#ifdef USE_AOMAP
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
#endif`,Xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qb=`#ifdef USE_BATCHING
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
#endif`,$b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jb=`#ifdef USE_IRIDESCENCE
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
#endif`,Jb=`#ifdef USE_BUMPMAP
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
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,aM=`#define PI 3.141592653589793
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
} // validated`,lM=`vec3 transformedNormal = objectNormal;
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
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dM="gl_FragColor = linearToOutputTexel( gl_FragColor );",pM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
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
}`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,CM=`#ifdef USE_ENVMAP
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
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NM=`PhysicalMaterial material;
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
#endif`,OM=`uniform sampler2D dfgLUT;
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
}`,UM=`
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,zM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$M=`#if defined( USE_POINTS_UV )
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
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jM=`#if defined( USE_MORPHCOLORS )
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
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`#ifdef USE_MORPHTARGETS
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
#endif`,eS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
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
#endif`,aS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MS=`float getShadowMask() {
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
}`,SS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TS=`#ifdef USE_SKINNING
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
#endif`,AS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IS=`#ifdef USE_TRANSMISSION
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
#endif`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,FS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BS=`uniform sampler2D t2D;
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
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform float backgroundBlurriness;
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`#include <common>
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
}`,WS=`#if DEPTH_PACKING == 3200
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
}`,XS=`#define DISTANCE
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
}`,qS=`#define DISTANCE
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`uniform float scale;
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
}`,KS=`uniform vec3 diffuse;
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
}`,jS=`#include <common>
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
}`,JS=`uniform vec3 diffuse;
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
}`,QS=`#define LAMBERT
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
}`,ew=`#define LAMBERT
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
}`,tw=`#define MATCAP
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
}`,nw=`#define MATCAP
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
}`,iw=`#define NORMAL
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
}`,rw=`#define NORMAL
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
}`,sw=`#define PHONG
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
}`,ow=`#define PHONG
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
}`,aw=`#define STANDARD
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
}`,lw=`#define STANDARD
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
}`,cw=`#define TOON
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
}`,uw=`#define TOON
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
}`,hw=`uniform float size;
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
}`,fw=`uniform vec3 diffuse;
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
}`,dw=`#include <common>
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
}`,pw=`uniform vec3 color;
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
}`,mw=`uniform float rotation;
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
}`,gw=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Bb,alphahash_pars_fragment:kb,alphamap_fragment:zb,alphamap_pars_fragment:Hb,alphatest_fragment:Vb,alphatest_pars_fragment:Gb,aomap_fragment:Wb,aomap_pars_fragment:Xb,batching_pars_vertex:qb,batching_vertex:$b,begin_vertex:Yb,beginnormal_vertex:Zb,bsdfs:Kb,iridescence_fragment:jb,bumpmap_pars_fragment:Jb,clipping_planes_fragment:Qb,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:oM,common:aM,defaultnormal_vertex:lM,displacementmap_pars_vertex:cM,displacementmap_vertex:uM,emissivemap_fragment:hM,emissivemap_pars_fragment:fM,colorspace_fragment:dM,colorspace_pars_fragment:pM,envmap_fragment:mM,envmap_common_pars_fragment:gM,envmap_pars_fragment:xM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:CM,envmap_vertex:_M,fog_vertex:vM,fog_pars_vertex:bM,fog_fragment:MM,fog_pars_fragment:SM,gradientmap_pars_fragment:wM,lightmap_pars_fragment:EM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:AM,lights_pars_begin:RM,lights_toon_fragment:PM,lights_toon_pars_fragment:IM,lights_phong_fragment:LM,lights_phong_pars_fragment:DM,lights_physical_fragment:NM,lights_physical_pars_fragment:OM,lights_fragment_begin:UM,lights_fragment_maps:FM,lights_fragment_end:BM,lightprobes_pars_fragment:kM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:VM,logdepthbuf_vertex:GM,map_fragment:WM,map_pars_fragment:XM,map_particle_fragment:qM,map_particle_pars_fragment:$M,metalnessmap_fragment:YM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:KM,morphcolor_vertex:jM,morphnormal_vertex:JM,morphtarget_pars_vertex:QM,morphtarget_vertex:eS,normal_fragment_begin:tS,normal_fragment_maps:nS,normal_pars_fragment:iS,normal_pars_vertex:rS,normal_vertex:sS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:aS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:uS,opaque_fragment:hS,packing:fS,premultiplied_alpha_fragment:dS,project_vertex:pS,dithering_fragment:mS,dithering_pars_fragment:gS,roughnessmap_fragment:xS,roughnessmap_pars_fragment:yS,shadowmap_pars_fragment:_S,shadowmap_pars_vertex:vS,shadowmap_vertex:bS,shadowmask_pars_fragment:MS,skinbase_vertex:SS,skinning_pars_vertex:wS,skinning_vertex:ES,skinnormal_vertex:TS,specularmap_fragment:AS,specularmap_pars_fragment:RS,tonemapping_fragment:CS,tonemapping_pars_fragment:PS,transmission_fragment:IS,transmission_pars_fragment:LS,uv_pars_fragment:DS,uv_pars_vertex:NS,uv_vertex:OS,worldpos_vertex:US,background_vert:FS,background_frag:BS,backgroundCube_vert:kS,backgroundCube_frag:zS,cube_vert:HS,cube_frag:VS,depth_vert:GS,depth_frag:WS,distance_vert:XS,distance_frag:qS,equirect_vert:$S,equirect_frag:YS,linedashed_vert:ZS,linedashed_frag:KS,meshbasic_vert:jS,meshbasic_frag:JS,meshlambert_vert:QS,meshlambert_frag:ew,meshmatcap_vert:tw,meshmatcap_frag:nw,meshnormal_vert:iw,meshnormal_frag:rw,meshphong_vert:sw,meshphong_frag:ow,meshphysical_vert:aw,meshphysical_frag:lw,meshtoon_vert:cw,meshtoon_frag:uw,points_vert:hw,points_frag:fw,shadow_vert:dw,shadow_frag:pw,sprite_vert:mw,sprite_frag:gw},ze={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},$n={basic:{uniforms:Un([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Un([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Un([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Un([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Un([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Xe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Un([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Un([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Un([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Un([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Un([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Un([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Un([ze.common,ze.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Un([ze.lights,ze.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};$n.physical={uniforms:Un([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Du={r:0,b:0,g:0},xw=new rt,T0=new lt;T0.set(-1,0,0,0,1,0,0,0,1);function yw(n,e,t,i,r,s){let o=new Xe(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let v=b.backgroundBlurriness>0;S=e.get(S,v)}return S}function m(b){let S=!1,v=d(b);v===null?g(o,a):v&&v.isColor&&(g(v,1),S=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,S){let v=d(S);v&&v.isCubeTexture?(c===void 0&&(c=new ut(new $i(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Ls($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xw.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(T0),c.material.toneMapped=mt.getTransfer(v.colorSpace)!==Dt,(u!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ut(new di(2,2),new vn({name:"BackgroundMaterial",uniforms:Ls($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=mt.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,S){b.getRGB(Du,ad(n)),t.buffers.color.setClear(Du.r,Du.g,Du.b,S,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:m,addToRenderList:x,dispose:p}}function _w(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(k,q,G,O,Y){let ne=!1,j=h(k,O,G,q);s!==j&&(s=j,c(s.object)),ne=d(k,O,G,Y),ne&&m(k,O,G,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,v(k,q,G,O),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function u(k){return n.deleteVertexArray(k)}function h(k,q,G,O){let Y=O.wireframe===!0,ne=i[q.id];ne===void 0&&(ne={},i[q.id]=ne);let j=k.isInstancedMesh===!0?k.id:0,ve=ne[j];ve===void 0&&(ve={},ne[j]=ve);let ie=ve[G.id];ie===void 0&&(ie={},ve[G.id]=ie);let H=ie[Y];return H===void 0&&(H=f(l()),ie[Y]=H),H}function f(k){let q=[],G=[],O=[];for(let Y=0;Y<t;Y++)q[Y]=0,G[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:G,attributeDivisors:O,object:k,attributes:{},index:null}}function d(k,q,G,O){let Y=s.attributes,ne=q.attributes,j=0,ve=G.getAttributes();for(let ie in ve)if(ve[ie].location>=0){let ee=Y[ie],Ae=ne[ie];if(Ae===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(Ae=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(Ae=k.instanceColor)),ee===void 0||ee.attribute!==Ae||Ae&&ee.data!==Ae.data)return!0;j++}return s.attributesNum!==j||s.index!==O}function m(k,q,G,O){let Y={},ne=q.attributes,j=0,ve=G.getAttributes();for(let ie in ve)if(ve[ie].location>=0){let ee=ne[ie];ee===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor));let Ae={};Ae.attribute=ee,ee&&ee.data&&(Ae.data=ee.data),Y[ie]=Ae,j++}s.attributes=Y,s.attributesNum=j,s.index=O}function x(){let k=s.newAttributes;for(let q=0,G=k.length;q<G;q++)k[q]=0}function g(k){p(k,0)}function p(k,q){let G=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;G[k]=1,O[k]===0&&(n.enableVertexAttribArray(k),O[k]=1),Y[k]!==q&&(n.vertexAttribDivisor(k,q),Y[k]=q)}function b(){let k=s.newAttributes,q=s.enabledAttributes;for(let G=0,O=q.length;G<O;G++)q[G]!==k[G]&&(n.disableVertexAttribArray(G),q[G]=0)}function S(k,q,G,O,Y,ne,j){j===!0?n.vertexAttribIPointer(k,q,G,Y,ne):n.vertexAttribPointer(k,q,G,O,Y,ne)}function v(k,q,G,O){x();let Y=O.attributes,ne=G.getAttributes(),j=q.defaultAttributeValues;for(let ve in ne){let ie=ne[ve];if(ie.location>=0){let H=Y[ve];if(H===void 0&&(ve==="instanceMatrix"&&k.instanceMatrix&&(H=k.instanceMatrix),ve==="instanceColor"&&k.instanceColor&&(H=k.instanceColor)),H!==void 0){let ee=H.normalized,Ae=H.itemSize,Ne=e.get(H);if(Ne===void 0)continue;let Q=Ne.buffer,xe=Ne.type,re=Ne.bytesPerElement,V=xe===n.INT||xe===n.UNSIGNED_INT||H.gpuType===Zc;if(H.isInterleavedBufferAttribute){let te=H.data,Ie=te.isInterleavedBuffer===!0?te.stride:te.itemSize,We=H.offset;if(te.isInstancedInterleavedBuffer||te.isInstancedBufferAttribute){for(let Oe=0;Oe<ie.locationSize;Oe++)p(ie.location+Oe,te.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Oe=0;Oe<ie.locationSize;Oe++)g(ie.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Oe=0;Oe<ie.locationSize;Oe++)S(ie.location+Oe,Ae/ie.locationSize,xe,ee,Ie*re,(We+Ae/ie.locationSize*Oe)*re,V)}else{if(H.isInstancedBufferAttribute){for(let te=0;te<ie.locationSize;te++)p(ie.location+te,H.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let te=0;te<ie.locationSize;te++)g(ie.location+te);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let te=0;te<ie.locationSize;te++)S(ie.location+te,Ae/ie.locationSize,xe,ee,Ae*re,Ae/ie.locationSize*te*re,V)}}else if(j!==void 0){let ee=j[ve];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(ie.location,ee);break;case 3:n.vertexAttrib3fv(ie.location,ee);break;case 4:n.vertexAttrib4fv(ie.location,ee);break;default:n.vertexAttrib1fv(ie.location,ee)}}}}b()}function M(){D();for(let k in i){let q=i[k];for(let G in q){let O=q[G];for(let Y in O){let ne=O[Y];for(let j in ne)u(ne[j].object),delete ne[j];delete O[Y]}}delete i[k]}}function w(k){if(i[k.id]===void 0)return;let q=i[k.id];for(let G in q){let O=q[G];for(let Y in O){let ne=O[Y];for(let j in ne)u(ne[j].object),delete ne[j];delete O[Y]}}delete i[k.id]}function y(k){for(let q in i){let G=i[q];for(let O in G){let Y=G[O];if(Y[k.id]===void 0)continue;let ne=Y[k.id];for(let j in ne)u(ne[j].object),delete ne[j];delete Y[k.id]}}}function E(k){for(let q in i){let G=i[q],O=k.isInstancedMesh===!0?k.id:0,Y=G[O];if(Y!==void 0){for(let ne in Y){let j=Y[ne];for(let ve in j)u(j[ve].object),delete j[ve];delete Y[ne]}delete G[O],Object.keys(G).length===0&&delete i[q]}}}function D(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function vw(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function bw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(y){return!(y!==wn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let E=y===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==On&&y!==qn&&!E&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:w}}function Mw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new yn,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let b=s?0:i,S=b*4,v=p.clippingState||null;l.value=v,v=u(m,f,S,d);for(let M=0;M!==S;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var al=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ca(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $i(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:pi});s.uniforms.tEquirect.value=t;let o=new ut(r,s),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=Zt),new Lo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},r0=256,Sw=3,ww=20,A0=256,R0=16,Ew=3,Tw=new I,Aw=new Xe,Ho=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lo(1,10,null),this._boxMesh=new ut(new $i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=Tw}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Aw));let g=new Lo(i,r,u);return g.position.copy(a),g.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(r0,rd(e))}_fromTexture(e,t){e.mapping===Cs||e.mapping===Uo?this._setSize(e.image.length===0?r0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=s0(e,!1,!1),i=Math.log2(e)-Sw;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=s0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Cs||e.mapping===Uo?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=o0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Rw(),this._integrationMaterial=Cw());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/R0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Ew)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(A0*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Pw());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function s0(n,e,t){return new al(n,{minFilter:gi,generateMipmaps:e,type:jn,colorSpace:Wn,depthBuffer:t})}function ll(n,e,t){return new vn({name:n,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:Sn,blending:pi,depthTest:!1,depthWrite:!1})}function Rw(){return ll("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${A0}u

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
	`)}function Cw(){return ll("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:R0}},`

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
	`)}function Pw(){return ll("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ww}
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
	`)}function o0(){return ll("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function a0(){return ll("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Iw(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===qc||d===$c)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new al(m.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===qc||d===$c,x=d===Cs||d===Uo;if(m||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Ho(n)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let b=f.image;return m&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new Ho(n)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===qc?f.mapping=Cs:d===$c&&(f.mapping=Uo),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Lw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ms("WebGLRenderer: "+i+" extension not supported."),r}}}function Dw(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(m=>delete r[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete r[m.id],o.unregister(m);let x=s.get(m);x&&(e.remove(x),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return r[x.id]!==void 0||(x.addEventListener("dispose",a),r[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(m){let x=m.attributes;for(let g in x)e.update(x[g],n.ARRAY_BUFFER)}function h(m){let x=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let b=x!==null?x.array.length:g.array.length/3-1,S=g.count>=65535?Ma:ba,v=new S(Math.ceil(b/3)*6,1),M=v.array;if(x!==null){let y=x.array;p=x.version;for(let E=0,D=0;E<b;E+=3){let N=y[E+0],k=y[E+1],q=y[E+2];M[D++]=N,M[D++]=k,M[D++]=k,M[D++]=q,M[D++]=q,M[D++]=N}}else{p=g.version;for(let y=0,E=0;y<b;y+=3){let D=y+0,N=y+1,k=y+2;M[E++]=D,M[E++]=N,M[E++]=N,M[E++]=k,M[E++]=k,M[E++]=D}}v.version=p;let w=s.get(m);w&&e.remove(w),s.set(m,v)}function f(m){let x=s.get(m);if(x){let g=m.index;g!==null&&x.version<g.version&&h(m)}else h(m);return s.get(m)}function d(){for(let m in r){let x=r[m].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function Nw(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,s,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ow(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Uw(n,e,t){let i=new WeakMap,r=new wt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let D=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*M*4*h),y=new va(w,v,M,h);y.type=qn,y.needsUpdate=!0;let E=S*4;for(let N=0;N<h;N++){let k=g[N],q=p[N],G=b[N],O=v*M*4*N;for(let Y=0;Y<k.count;Y++){let ne=Y*E;d===!0&&(r.fromBufferAttribute(k,Y),w[O+ne+0]=r.x,w[O+ne+1]=r.y,w[O+ne+2]=r.z,w[O+ne+3]=0),m===!0&&(r.fromBufferAttribute(q,Y),w[O+ne+4]=r.x,w[O+ne+5]=r.y,w[O+ne+6]=r.z,w[O+ne+7]=0),x===!0&&(r.fromBufferAttribute(G,Y),w[O+ne+8]=r.x,w[O+ne+9]=r.y,w[O+ne+10]=r.z,w[O+ne+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new Ge(v,M)},i.set(a,f),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Fw(n,e,t,i,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Bw={[Bf]:"LINEAR_TONE_MAPPING",[kf]:"REINHARD_TONE_MAPPING",[zf]:"CINEON_TONE_MAPPING",[Oo]:"ACES_FILMIC_TONE_MAPPING",[Vf]:"AGX_TONE_MAPPING",[Gf]:"NEUTRAL_TONE_MAPPING",[Hf]:"CUSTOM_TONE_MAPPING"};function kw(n,e,t,i,r,s){let o=new an(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new zt;u.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Wt([0,2,0,0,2,0],2));let h=new Dc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ut(u,h),d=new Ii(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,b=null,S=[],v=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let y=0;y<S.length;y++){let E=S[y];E.setSize&&E.setSize(M,w)}},this.setEffects=function(M){S=M,v=S.length>0&&S[0].isRenderPass===!0;let w=o.width,y=o.height;S.length>0&&a===null&&(a=new an(w,y,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new an(w,y,{type:jn,depthBuffer:!1,stencilBuffer:!1}));let E=r===!0&&S.some(D=>D.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&c===null&&(c=new Ar(w,y),s===!0&&(c.format=Dr,c.type=Is)),o.dispose(),o.depthTexture=E?c:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let D=0;D<S.length;D++){let N=S[D];N.setSize&&N.setSize(w,y),E&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(M,w){if(g||M.toneMapping===mi&&S.length===0)return!1;if(b=w,w!==null){let y=w.width,E=w.height;(o.width!==y||o.height!==E)&&this.setSize(y,E)}return v===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=mi,!0},this.hasRenderPass=function(){return v},this.end=function(M,w){M.toneMapping=p,g=!0;let y=o,E=a;for(let D=0;D<S.length;D++){let N=S[D];N.enabled!==!1&&(N.render(M,E,y,w),N.needsSwap!==!1&&(y=E,E=E===a?l:a))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,h.defines={},mt.getTransfer(m)===Dt&&(h.defines.SRGB_TRANSFER="");let D=Bw[x];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(b),M.render(f,d),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var C0=new fn,P0=new Ar(1,1),I0=new Pa(1),L0=new va,D0=new Cc,N0=new Ca,l0=[],c0=[],u0=new Float32Array(16),h0=new Float32Array(9),f0=new Float32Array(4);function Vo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=l0[r];if(s===void 0&&(s=new Float32Array(r),l0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uu(n,e){let t=c0[e];t===void 0&&(t=new Int32Array(e),c0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function Vw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function Gw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function Ww(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;f0.set(i),n.uniformMatrix2fv(this.addr,!1,f0),mn(t,i)}}function Xw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;h0.set(i),n.uniformMatrix3fv(this.addr,!1,h0),mn(t,i)}}function qw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;u0.set(i),n.uniformMatrix4fv(this.addr,!1,u0),mn(t,i)}}function $w(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function Zw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function Kw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function jw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function Qw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function eE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function Fu(n){return n.version===0&&(n.compareFunction=ed,n.needsUpdate=!0),n}function tE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Fu(P0):s=C0,t.setTexture2D(e||s,r)}function nE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||D0,r)}function iE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Fu(I0):s=N0,t.setTextureCube(e||s,r)}function rE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||L0,r)}function sE(n){switch(n){case 5126:return zw;case 35664:return Hw;case 35665:return Vw;case 35666:return Gw;case 35674:return Ww;case 35675:return Xw;case 35676:return qw;case 5124:case 35670:return $w;case 35667:case 35671:return Yw;case 35668:case 35672:return Zw;case 35669:case 35673:return Kw;case 5125:return jw;case 36294:return Jw;case 36295:return Qw;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return rE}}function oE(n,e){n.uniform1fv(this.addr,e)}function aE(n,e){let t=Vo(e,this.size,2);n.uniform2fv(this.addr,t)}function lE(n,e){let t=Vo(e,this.size,3);n.uniform3fv(this.addr,t)}function cE(n,e){let t=Vo(e,this.size,4);n.uniform4fv(this.addr,t)}function uE(n,e){let t=Vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hE(n,e){let t=Vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fE(n,e){let t=Vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dE(n,e){n.uniform1iv(this.addr,e)}function pE(n,e){n.uniform2iv(this.addr,e)}function mE(n,e){n.uniform3iv(this.addr,e)}function gE(n,e){n.uniform4iv(this.addr,e)}function xE(n,e){n.uniform1uiv(this.addr,e)}function yE(n,e){n.uniform2uiv(this.addr,e)}function _E(n,e){n.uniform3uiv(this.addr,e)}function vE(n,e){n.uniform4uiv(this.addr,e)}function bE(n,e,t){let i=this.cache,r=e.length,s=Uu(t,r);pn(i,s)||(n.uniform1iv(this.addr,s),mn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Fu(P0):o=C0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function ME(n,e,t){let i=this.cache,r=e.length,s=Uu(t,r);pn(i,s)||(n.uniform1iv(this.addr,s),mn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||D0,s[o])}function SE(n,e,t){let i=this.cache,r=e.length,s=Uu(t,r);pn(i,s)||(n.uniform1iv(this.addr,s),mn(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Fu(I0):o=N0;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function wE(n,e,t){let i=this.cache,r=e.length,s=Uu(t,r);pn(i,s)||(n.uniform1iv(this.addr,s),mn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||L0,s[o])}function EE(n){switch(n){case 5126:return oE;case 35664:return aE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return hE;case 35676:return fE;case 5124:case 35670:return dE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return xE;case 36294:return yE;case 36295:return _E;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return SE;case 36289:case 36303:case 36311:case 36292:return wE}}var dd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sE(t.type)}},pd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EE(t.type)}},md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},hd=/(\w+)(\])?(\[|\.)?/g;function d0(n,e){n.seq.push(e),n.map[e.id]=e}function TE(n,e,t){let i=n.name,r=i.length;for(hd.lastIndex=0;;){let s=hd.exec(i),o=hd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){d0(t,c===void 0?new dd(a,n,e):new pd(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new md(a),d0(t,h)),t=h}}}var zo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);TE(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function p0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var AE=37297,RE=0;function CE(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var m0=new lt;function PE(n){mt._getMatrix(m0,mt.workingColorSpace,n);let e=`mat3( ${m0.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case ya:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function g0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+CE(n.getShaderSource(e),a)}else return s}function IE(n,e){let t=PE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var LE={[Bf]:"Linear",[kf]:"Reinhard",[zf]:"Cineon",[Oo]:"ACESFilmic",[Vf]:"AgX",[Gf]:"Neutral",[Hf]:"Custom"};function DE(n,e){let t=LE[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nu=new I;function NE(){mt.getLuminanceCoefficients(Nu);let n=Nu.x.toFixed(4),e=Nu.y.toFixed(4),t=Nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function UE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function FE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ol(n){return n!==""}function x0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function y0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var BE=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(n){return n.replace(BE,kE)}function kE(n,e){let t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return gd(t)}var zE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(n){return n.replace(zE,HE)}function HE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function v0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var VE={[qa]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function GE(n){return VE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var WE={[Uo]:"ENVMAP_MODE_REFRACTION"};function XE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":WE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qE={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[Bg]:"ENVMAP_BLENDING_MIX",[kg]:"ENVMAP_BLENDING_ADD"};function $E(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qE[n.combine]||"ENVMAP_BLENDING_NONE"}function YE(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=GE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=XE(t),h=$E(t),f=OE(t),d=UE(s),m=r.createProgram(),x,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ol).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ol).join(`
`),g.length>0&&(g+=`
`)):(x=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),g=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?pt.tonemapping_pars_fragment:"",t.toneMapping!==mi?DE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,IE("linearToOutputTexel",t.outputColorSpace),NE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ol).join(`
`)),o=gd(o),o=x0(o,t),o=y0(o,t),a=gd(a),a=x0(a,t),a=y0(a,t),o=_0(o),a=_0(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=p+x+o,S=p+g+a,v=p0(r,r.VERTEX_SHADER,b),M=p0(r,r.FRAGMENT_SHADER,S);r.attachShader(m,v),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function w(N){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(m)||"",q=r.getShaderInfoLog(v)||"",G=r.getShaderInfoLog(M)||"",O=k.trim(),Y=q.trim(),ne=G.trim(),j=!0,ve=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,v,M);else{let ie=g0(r,v,"vertex"),H=g0(r,M,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+ie+`
`+H)}else O!==""?nt("WebGLProgram: Program Info Log:",O):(Y===""||ne==="")&&(ve=!1);ve&&(N.diagnostics={runnable:j,programLog:O,vertexShader:{log:Y,prefix:x},fragmentShader:{log:ne,prefix:g}})}r.deleteShader(v),r.deleteShader(M),y=new zo(r,m),E=FE(r,m)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(m,AE)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=M,this}var ZE=0,xd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new yd(e),t.set(e,i)),i}},yd=class{constructor(e){this.id=ZE++,this.code=e,this.usedTimes=0}};function KE(n){return n===is||n===el||n===tl}function jE(n,e,t,i,r,s){let o=new wo,a=new xd,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,D,N,k,q){let G=N.fog,O=k.geometry,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=e.get(y.envMap||Y,ne),ve=f[y.type],ie=i.precision;y.precision!==null&&(ie=i.getMaxPrecision(y.precision),ie!==y.precision&&nt("WebGLProgram.getParameters:",y.precision,"not supported, using",ie,"instead."));let H=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=H!==void 0?H.length:0,Ae=0;O.morphAttributes.position!==void 0&&(Ae=1),O.morphAttributes.normal!==void 0&&(Ae=2),O.morphAttributes.color!==void 0&&(Ae=3);let Ne,Q,xe,re;if(ve){let De=$n[ve];Ne=De.vertexShader,Q=De.fragmentShader}else{Ne=y.vertexShader,Q=y.fragmentShader;let De=a.getVertexShaderStage(y),ot=a.getFragmentShaderStage(y);a.update(y,De,ot),xe=De.id,re=ot.id}let V=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,We=k.isBatchedMesh===!0,Oe=!!y.map,He=!!y.matcap,Je=!!j,qe=Je&&j.isPMREMTexture===!0,vt=!!y.aoMap,ht=!!y.lightMap,ft=!!y.bumpMap&&y.wireframe===!1,je=!!y.normalMap,bt=!!y.displacementMap,me=!!y.emissiveMap,et=!!y.metalnessMap,tt=!!y.roughnessMap,we=y.anisotropy>0,R=y.clearcoat>0,se=y.diffuseRoughness>0,K=y.dispersion>0,Ce=y.retroreflectivity>0,J=y.iridescence>0,Se=y.sheen>0,ye=y.transmission>0,Le=we&&!!y.anisotropyMap,P=R&&!!y.clearcoatMap,T=R&&!!y.clearcoatNormalMap,Z=R&&!!y.clearcoatRoughnessMap,ge=se&&!!y.diffuseRoughnessMap,pe=J&&!!y.iridescenceMap,fe=J&&!!y.iridescenceThicknessMap,be=Se&&!!y.sheenColorMap,ce=Se&&!!y.sheenRoughnessMap,ue=!!y.specularMap,F=!!y.specularColorMap,L=!!y.specularIntensityMap,W=ye&&!!y.transmissionMap,z=ye&&!!y.thicknessMap,he=!!y.gradientMap,_e=!!y.alphaMap,Ee=y.alphaTest>0,Me=!!y.alphaHash,Ue=!!y.extensions,$=mi;y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&($=n.toneMapping);let Pe=qe?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,$e={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:Q,defines:y.defines,customVertexShaderID:xe,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:ie,batching:We,batchingColor:We&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:He,envMap:Je,envMapMode:Je&&j.mapping,envMapPMREM:qe,envMapMaxLod:qe?Pe.length-1:null,envMapSize:qe?Pe[0].width:null,aoMap:vt,lightMap:ht,bumpMap:ft,normalMap:je,displacementMap:bt,emissiveMap:me,normalMapObjectSpace:je&&y.normalMapType===Gg,normalMapTangentSpace:je&&y.normalMapType===il,packedNormalMap:je&&y.normalMapType===il&&KE(y.normalMap.format),metalnessMap:et,roughnessMap:tt,anisotropy:we,anisotropyMap:Le,clearcoat:R,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:Z,diffuseRoughness:se,diffuseRoughnessMap:ge,dispersion:K,retroreflection:Ce,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:fe,sheen:Se,sheenColorMap:be,sheenRoughnessMap:ce,specularMap:ue,specularColorMap:F,specularIntensityMap:L,transmission:ye,transmissionMap:W,thicknessMap:z,gradientMap:he,opaque:y.transparent===!1&&y.blending===Ki&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ee,alphaHash:Me,combine:y.combine,mapUv:Oe&&d(y.map.channel),aoMapUv:vt&&d(y.aoMap.channel),lightMapUv:ht&&d(y.lightMap.channel),bumpMapUv:ft&&d(y.bumpMap.channel),normalMapUv:je&&d(y.normalMap.channel),displacementMapUv:bt&&d(y.displacementMap.channel),emissiveMapUv:me&&d(y.emissiveMap.channel),metalnessMapUv:et&&d(y.metalnessMap.channel),roughnessMapUv:tt&&d(y.roughnessMap.channel),anisotropyMapUv:Le&&d(y.anisotropyMap.channel),clearcoatMapUv:P&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(y.sheenRoughnessMap.channel),specularMapUv:ue&&d(y.specularMap.channel),specularColorMapUv:F&&d(y.specularColorMap.channel),specularIntensityMapUv:L&&d(y.specularIntensityMap.channel),transmissionMapUv:W&&d(y.transmissionMap.channel),thicknessMapUv:z&&d(y.thicknessMap.channel),alphaMapUv:_e&&d(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(je||we),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Oe||_e),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&je===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:te,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:q.filter(De=>De.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:$,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&mt.getTransfer(y.map.colorSpace)===Dt,decodeVideoTextureEmissive:me&&y.emissiveMap.isVideoTexture===!0&&mt.getTransfer(y.emissiveMap.colorSpace)===Dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ue&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&y.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function x(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)E.push(D),E.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(g(E,y),p(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapPMREM),y.push(E.envMapMaxLod),y.push(E.envMapSize),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.diffuseRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.numLightProbeGrids),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function p(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function b(y){let E=f[y.type],D;if(E){let N=$n[E];D=rl.clone(N.uniforms)}else D=y.uniforms;return D}function S(y,E){let D=u.get(E);return D!==void 0?++D.usedTimes:(D=new YE(n,E,y,r),c.push(D),u.set(E,D)),D}function v(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:b,acquireProgram:S,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:w}}function JE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function QE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function b0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function M0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},n[e]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=m,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=g,b.group=p),e++,b}function l(f,d,m,x,g,p,b){b.reversedDepth===!0&&(g=-g);let S=a(f,d,m,x,g,p);m.transmission>0?i.push(S):m.transparent===!0?r.push(S):t.push(S)}function c(f,d,m,x,g,p){let b=a(f,d,m,x,g,p);m.transmission>0?i.unshift(b):m.transparent===!0?r.unshift(b):t.unshift(b)}function u(f,d){t.length>1&&t.sort(f||QE),i.length>1&&i.sort(d||b0),r.length>1&&r.sort(d||b0)}function h(){for(let f=e,d=n.length;f<d;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function e1(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new M0,n.set(i,[o])):r>=s.length?(o=new M0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function t1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Xe};break;case"SpotLight":t={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function n1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var i1=0;function r1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function s1(n){let e=new t1,t=n1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let r=new I,s=new rt,o=new rt;function a(c){let u=0,h=0,f=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,b=0,S=0,v=0,M=0,w=0,y=0,E=0,D=0,N=0;c.sort(r1);for(let q=0,G=c.length;q<G;q++){let O=c[q],Y=O.color,ne=O.intensity,j=O.distance,ve=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===is?ve=O.shadow.map.texture:ve=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=Y.r*ne,h+=Y.g*ne,f+=Y.b*ne;else if(O.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(O.sh.coefficients[ie],ne);N++}else if(O.isSunLight){let ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let H=O.shadow,ee=t.get(O);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[m]=ee,i.sunShadowMap[m]=ve;let Ae=H.getViewportCount();for(let Ne=0;Ne<Ae;Ne++)i.sunShadowMatrix[x+Ne]=H.getMatrix(Ne),i.sunShadowCascade[x+Ne]=H._cascadeData[Ne];x+=Ae,m++}i.sun[d]=ie,d++}else if(O.isDirectionalLight){let ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let H=O.shadow,ee=t.get(O);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=ve,i.directionalShadowMatrix[g]=O.shadow.matrix,M++}i.directional[g]=ie,g++}else if(O.isSpotLight){let ie=e.get(O);ie.position.setFromMatrixPosition(O.matrixWorld),ie.color.copy(Y).multiplyScalar(ne),ie.distance=j,ie.coneCos=Math.cos(O.angle),ie.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ie.decay=O.decay,i.spot[b]=ie;let H=O.shadow;if(O.map&&(i.spotLightMap[E]=O.map,E++,H.updateMatrices(O),O.castShadow&&D++),i.spotLightMatrix[b]=H.matrix,O.castShadow){let ee=t.get(O);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,i.spotShadow[b]=ee,i.spotShadowMap[b]=ve,y++}b++}else if(O.isRectAreaLight){let ie=e.get(O);ie.color.copy(Y).multiplyScalar(ne),ie.halfWidth.set(O.width*.5,0,0),ie.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=ie,S++}else if(O.isPointLight){let ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),ie.distance=O.distance,ie.decay=O.decay,O.castShadow){let H=O.shadow,ee=t.get(O);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=ve,i.pointShadowMatrix[p]=O.shadow.matrix,w++}i.point[p]=ie,p++}else if(O.isHemisphereLight){let ie=e.get(O);ie.skyColor.copy(O.color).multiplyScalar(ne),ie.groundColor.copy(O.groundColor).multiplyScalar(ne),i.hemi[v]=ie,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let k=i.hash;(k.sunLength!==d||k.directionalLength!==g||k.pointLength!==p||k.spotLength!==b||k.rectAreaLength!==S||k.hemiLength!==v||k.numSunShadows!==m||k.numDirectionalShadows!==M||k.numPointShadows!==w||k.numSpotShadows!==y||k.numSpotMaps!==E||k.numLightProbes!==N)&&(i.sun.length=d,i.directional.length=g,i.spot.length=b,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+E-D,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=N,k.sunLength=d,k.directionalLength=g,k.pointLength=p,k.spotLength=b,k.rectAreaLength=S,k.hemiLength=v,k.numSunShadows=m,k.numDirectionalShadows=M,k.numPointShadows=w,k.numSpotShadows=y,k.numSpotMaps=E,k.numLightProbes=N,i.version=i1++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let b=0,S=c.length;b<S;b++){let v=c[b];if(v.isSunLight){let M=i.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function S0(n){let e=new s1(n),t=[],i=[],r=[];function s(h){u.camera=h,t.length=0,i.length=0,r.length=0}function o(h){h.isLightProbeGrid?r.push(h):t.push(h)}function a(h){i.push(h)}function l(){e.setup(t),r.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o1(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new S0(n),e.set(r,[a])):s>=o.length?(a=new S0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l1=`uniform sampler2D shadow_pass;
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
}`,c1=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],u1=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],w0=new rt,sl=new I,fd=new I;function h1(n,e,t){let i=new Zr,r=new Ge,s=new Ge,o=new wt,a=new Nc,l=new Oc,c={},u=t.maxTextureSize,h={[ri]:Sn,[Sn]:ri,[Ot]:Ot},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:a1,fragmentShader:l1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new zt;m.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa;let p=this.type;this.render=function(w,y,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Sg&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qa);let D=n.getRenderTarget(),N=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),q=n.state;q.setBlending(pi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let G=p!==this.type;G&&y.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Y=>Y.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Y=w.length;O<Y;O++){let ne=w[O],j=ne.shadow;if(j===void 0){nt("WebGLShadowMap:",ne,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let ve=j.getFrameExtents();r.multiply(ve),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ve.x),r.x=s.x*ve.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ve.y),r.y=s.y*ve.y,j.mapSize.y=s.y));let ie=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ie,j.map===null||G===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Do){if(ne.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new an(r.x,r.y,{format:is,type:jn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),j.map.texture.name=ne.name+".shadowMap",j.map.depthTexture=new Ar(r.x,r.y,qn),j.map.depthTexture.name=ne.name+".shadowMapDepth",j.map.depthTexture.format=Sr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Yt,j.map.depthTexture.magFilter=Yt}else ne.isPointLight?(j.map=new al(r.x),j.map.depthTexture=new Pa(r.x,Di)):(j.map=new an(r.x,r.y),j.map.depthTexture=new Ar(r.x,r.y,Di)),j.map.depthTexture.name=ne.name+".shadowMap",j.map.depthTexture.format=Sr,this.type===qa?(j.map.depthTexture.compareFunction=ie?Qf:Jf,j.map.depthTexture.minFilter=Zt,j.map.depthTexture.magFilter=Zt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Yt,j.map.depthTexture.magFilter=Yt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);let H=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();ne.isPointLight!==!0&&j.updateMatrices(ne,E);let ee=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:E.layers;for(let Ae=0;Ae<H;Ae++){let Ne=j.getCamera(Ae);if(ne.isPointLight){let Q=j.camera,xe=j.matrix,re=ne.distance||Q.far;re!==Q.far&&(Q.far=re,Q.updateProjectionMatrix()),sl.setFromMatrixPosition(ne.matrixWorld),Q.position.copy(sl),fd.copy(Q.position),fd.add(c1[Ae]),Q.up.copy(u1[Ae]),Q.lookAt(fd),Q.updateMatrixWorld(),xe.makeTranslation(-sl.x,-sl.y,-sl.z),w0.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),j._frustum.setFromProjectionMatrix(w0,Q.coordinateSystem,Q.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,Ae),n.clear();else{Ae===0&&(n.setRenderTarget(j.map),n.clear());let Q=j.getViewport(Ae);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),q.viewport(o)}i=j.getFrustum(Ae),v(y,E,Ne,ne,ee,this.type)}j.isPointLightShadow!==!0&&this.type===Do&&b(j,E),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(D,N,k)};function b(w,y){let E=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new an(r.x,r.y,{format:is,type:jn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(y,null,E,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(y,null,E,d,x,null)}function S(w,y,E,D){let N=null,k=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)N=k;else if(N=E.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let q=N.uuid,G=y.uuid,O=c[q];O===void 0&&(O={},c[q]=O);let Y=O[G];Y===void 0&&(Y=N.clone(),O[G]=Y,y.addEventListener("dispose",M)),N=Y}if(N.visible=y.visible,N.wireframe=y.wireframe,D===Do?N.side=y.shadowSide!==null?y.shadowSide:y.side:N.side=y.shadowSide!==null?y.shadowSide:h[y.side],N.alphaMap=y.alphaMap,N.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,N.map=y.map,N.clipShadows=y.clipShadows,N.clippingPlanes=y.clippingPlanes,N.clipIntersection=y.clipIntersection,N.displacementMap=y.displacementMap,N.displacementScale=y.displacementScale,N.displacementBias=y.displacementBias,N.wireframeLinewidth=y.wireframeLinewidth,N.linewidth=y.linewidth,E.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let q=n.properties.get(N);q.light=E}return N}function v(w,y,E,D,N,k){if(w.visible===!1)return;if(w.layers.test(N)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&k===Do)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let O=e.update(w),Y=w.material;if(Array.isArray(Y)){let ne=O.groups;for(let j=0,ve=ne.length;j<ve;j++){let ie=ne[j],H=Y[ie.materialIndex];if(H&&H.visible){let ee=S(w,H,D,k);w.onBeforeShadow(n,w,y,E,O,ee,ie),n.renderBufferDirect(E,null,O,ee,w,ie),w.onAfterShadow(n,w,y,E,O,ee,ie)}}}else if(Y.visible){let ne=S(w,Y,D,k);w.onBeforeShadow(n,w,y,E,O,ne,null),n.renderBufferDirect(E,null,O,ne,w,null),w.onAfterShadow(n,w,y,E,O,ne,null)}}let G=w.children;for(let O=0,Y=G.length;O<Y;O++)v(G[O],y,E,D,N,k)}function M(w){w.target.removeEventListener("dispose",M);for(let E in c){let D=c[E],N=w.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}function f1(n,e){function t(){let L=!1,W=new wt,z=null,he=new wt(0,0,0,0);return{setMask:function(_e){z!==_e&&!L&&(n.colorMask(_e,_e,_e,_e),z=_e)},setLocked:function(_e){L=_e},setClear:function(_e,Ee,Me,Ue,$){$===!0&&(_e*=Ue,Ee*=Ue,Me*=Ue),W.set(_e,Ee,Me,Ue),he.equals(W)===!1&&(n.clearColor(_e,Ee,Me,Ue),he.copy(W))},reset:function(){L=!1,z=null,he.set(-1,0,0,0)}}}function i(){let L=!1,W=!1,z=null,he=null,_e=null;return{setReversed:function(Ee){if(W!==Ee){let Me=e.get("EXT_clip_control");Ee?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),W=Ee;let Ue=_e;_e=null,this.setClear(Ue)}},getReversed:function(){return W},setTest:function(Ee){Ee?te(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Ee){z!==Ee&&!L&&(n.depthMask(Ee),z=Ee)},setFunc:function(Ee){if(W&&(Ee=Qg[Ee]),he!==Ee){switch(Ee){case vc:n.depthFunc(n.NEVER);break;case bc:n.depthFunc(n.ALWAYS);break;case Mc:n.depthFunc(n.LESS);break;case yo:n.depthFunc(n.LEQUAL);break;case Sc:n.depthFunc(n.EQUAL);break;case wc:n.depthFunc(n.GEQUAL);break;case Ec:n.depthFunc(n.GREATER);break;case Tc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Ee}},setLocked:function(Ee){L=Ee},setClear:function(Ee){_e!==Ee&&(_e=Ee,W&&(Ee=1-Ee),n.clearDepth(Ee))},reset:function(){L=!1,z=null,he=null,_e=null,W=!1}}}function r(){let L=!1,W=null,z=null,he=null,_e=null,Ee=null,Me=null,Ue=null,$=null;return{setTest:function(Pe){L||(Pe?te(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Pe){W!==Pe&&!L&&(n.stencilMask(Pe),W=Pe)},setFunc:function(Pe,$e,De){(z!==Pe||he!==$e||_e!==De)&&(n.stencilFunc(Pe,$e,De),z=Pe,he=$e,_e=De)},setOp:function(Pe,$e,De){(Ee!==Pe||Me!==$e||Ue!==De)&&(n.stencilOp(Pe,$e,De),Ee=Pe,Me=$e,Ue=De)},setLocked:function(Pe){L=Pe},setClear:function(Pe){$!==Pe&&(n.clearStencil(Pe),$=Pe)},reset:function(){L=!1,W=null,z=null,he=null,_e=null,Ee=null,Me=null,Ue=null,$=null}}}let s=new t,o=new i,a=new r,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,b=null,S=null,v=null,M=null,w=null,y=null,E=new Xe(0,0,0),D=0,N=!1,k=null,q=null,G=null,O=null,Y=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ve=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(ie)[1]),j=ve>=1):ie.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),j=ve>=2);let H=null,ee={},Ae=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Q=new wt().fromArray(Ae),xe=new wt().fromArray(Ne);function re(L,W,z,he){let _e=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(L,Ee),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<z;Me++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(W,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(W+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return Ee}let V={};V[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(yo),ft(!1),je(Nf),te(n.CULL_FACE),vt(pi);function te(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Ie(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function We(L,W){return f[L]!==W?(n.bindFramebuffer(L,W),f[L]=W,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=W),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=W),!0):!1}function Oe(L,W){let z=m,he=!1;if(L){z=d.get(W),z===void 0&&(z=[],d.set(W,z));let _e=L.textures;if(z.length!==_e.length||z[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Me=_e.length;Ee<Me;Ee++)z[Ee]=n.COLOR_ATTACHMENT0+Ee;z.length=_e.length,he=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,he=!0);he&&n.drawBuffers(z)}function He(L){return x!==L?(n.useProgram(L),x=L,!0):!1}let Je={[Li]:n.FUNC_ADD,[wg]:n.FUNC_SUBTRACT,[Eg]:n.FUNC_REVERSE_SUBTRACT};Je[Tg]=n.MIN,Je[Ag]=n.MAX;let qe={[$a]:n.ZERO,[ns]:n.ONE,[Rg]:n.SRC_COLOR,[Ya]:n.SRC_ALPHA,[Dg]:n.SRC_ALPHA_SATURATE,[Ig]:n.DST_COLOR,[Pg]:n.DST_ALPHA,[Cg]:n.ONE_MINUS_SRC_COLOR,[No]:n.ONE_MINUS_SRC_ALPHA,[Lg]:n.ONE_MINUS_DST_COLOR,[Za]:n.ONE_MINUS_DST_ALPHA,[Ng]:n.CONSTANT_COLOR,[Og]:n.ONE_MINUS_CONSTANT_COLOR,[Ug]:n.CONSTANT_ALPHA,[Fg]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(L,W,z,he,_e,Ee,Me,Ue,$,Pe){if(L===pi){g===!0&&(Ie(n.BLEND),g=!1);return}if(g===!1&&(te(n.BLEND),g=!0),L!==Wc){if(L!==p||Pe!==N){if((b!==Li||M!==Li)&&(n.blendEquation(n.FUNC_ADD),b=Li,M=Li),Pe)switch(L){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Of:n.blendFunc(n.ONE,n.ONE);break;case Uf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ff:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:st("WebGLState: Invalid blending: ",L);break}else switch(L){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Of:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uf:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ff:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",L);break}S=null,v=null,w=null,y=null,E.set(0,0,0),D=0,p=L,N=Pe}return}_e=_e||W,Ee=Ee||z,Me=Me||he,(W!==b||_e!==M)&&(n.blendEquationSeparate(Je[W],Je[_e]),b=W,M=_e),(z!==S||he!==v||Ee!==w||Me!==y)&&(n.blendFuncSeparate(qe[z],qe[he],qe[Ee],qe[Me]),S=z,v=he,w=Ee,y=Me),(Ue.equals(E)===!1||$!==D)&&(n.blendColor(Ue.r,Ue.g,Ue.b,$),E.copy(Ue),D=$),p=L,N=!1}function ht(L,W){L.side===Ot?Ie(n.CULL_FACE):te(n.CULL_FACE);let z=L.side===Sn;W&&(z=!z),ft(z),L.blending===Ki&&L.transparent===!1?vt(pi):vt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let he=L.stencilWrite;a.setTest(he),he&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(L){k!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),k=L)}function je(L){L!==bg?(te(n.CULL_FACE),L!==q&&(L===Nf?n.cullFace(n.BACK):L===Mg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),q=L}function bt(L){L!==G&&(j&&n.lineWidth(L),G=L)}function me(L,W,z){L?(te(n.POLYGON_OFFSET_FILL),(O!==W||Y!==z)&&(O=W,Y=z,o.getReversed()&&(W=-W,z=-z),n.polygonOffset(W,z))):Ie(n.POLYGON_OFFSET_FILL)}function et(L){L?te(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function tt(L){L===void 0&&(L=n.TEXTURE0+ne-1),H!==L&&(n.activeTexture(L),H=L)}function we(L,W,z){z===void 0&&(H===null?z=n.TEXTURE0+ne-1:z=H);let he=ee[z];he===void 0&&(he={type:void 0,texture:void 0},ee[z]=he),(he.type!==L||he.texture!==W)&&(H!==z&&(n.activeTexture(z),H=z),n.bindTexture(L,W||V[L]),he.type=L,he.texture=W)}function R(){let L=ee[H];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function se(){try{n.compressedTexImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function Ce(){try{n.texSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function J(){try{n.texSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function Se(){try{n.compressedTexSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function Le(){try{n.texStorage2D(...arguments)}catch(L){st("WebGLState:",L)}}function P(){try{n.texStorage3D(...arguments)}catch(L){st("WebGLState:",L)}}function T(){try{n.texImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function Z(){try{n.texImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function ge(L){return h[L]!==void 0?h[L]:n.getParameter(L)}function pe(L,W){h[L]!==W&&(n.pixelStorei(L,W),h[L]=W)}function fe(L){Q.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function be(L){xe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),xe.copy(L))}function ce(L,W){let z=c.get(W);z===void 0&&(z=new WeakMap,c.set(W,z));let he=z.get(L);he===void 0&&(he=n.getUniformBlockIndex(W,L.name),n.uniformBlockBinding(W,he,he),z.set(L,he))}function ue(L,W,z){let _e=c.get(W).get(L);l[_e]!==z&&(n.bindBufferBase(n.UNIFORM_BUFFER,_e,z),l[_e]=z)}function F(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},H=null,ee={},f={},l={},d=new WeakMap,m=[],x=null,g=!1,p=null,b=null,S=null,v=null,M=null,w=null,y=null,E=new Xe(0,0,0),D=0,N=!1,k=null,q=null,G=null,O=null,Y=null,Q.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Ie,bindFramebuffer:We,drawBuffers:Oe,useProgram:He,setBlending:vt,setMaterial:ht,setFlipSided:ft,setCullFace:je,setLineWidth:bt,setPolygonOffset:me,setScissorTest:et,activeTexture:tt,bindTexture:we,unbindTexture:R,compressedTexImage2D:se,compressedTexImage3D:K,texImage2D:T,texImage3D:Z,pixelStorei:pe,getParameter:ge,updateUBOMapping:ce,uniformBlockBinding:ue,texStorage2D:Le,texStorage3D:P,texSubImage2D:Ce,texSubImage3D:J,compressedTexSubImage2D:Se,compressedTexSubImage3D:ye,scissor:fe,viewport:be,reset:F}}function d1(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap,h=new Set,f,d=new WeakMap,m=new Set,x=new FinalizationRegistry(P=>m.delete(P)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,T){return g?new OffscreenCanvas(P,T):bo("canvas")}function b(P,T,Z){let ge=1,pe=Le(P);if((pe.width>Z||pe.height>Z)&&(ge=Z/Math.max(pe.width,pe.height)),ge<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let fe=Math.floor(ge*pe.width),be=Math.floor(ge*pe.height);f===void 0&&(f=p(fe,be));let ce=T?p(fe,be):f;return ce.width=fe,ce.height=be,ce.getContext("2d").drawImage(P,0,0,fe,be),nt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+fe+"x"+be+")."),ce}else return"data"in P&&nt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,T,Z,ge,pe,fe=!1){if(P!==null){if(n[P]!==void 0)return n[P];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let be;ge&&(be=e.get("EXT_texture_norm16"),be||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=T;if(T===n.RED&&(Z===n.FLOAT&&(ce=n.R32F),Z===n.HALF_FLOAT&&(ce=n.R16F),Z===n.UNSIGNED_BYTE&&(ce=n.R8),Z===n.UNSIGNED_SHORT&&be&&(ce=be.R16_EXT),Z===n.SHORT&&be&&(ce=be.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.R8UI),Z===n.UNSIGNED_SHORT&&(ce=n.R16UI),Z===n.UNSIGNED_INT&&(ce=n.R32UI),Z===n.BYTE&&(ce=n.R8I),Z===n.SHORT&&(ce=n.R16I),Z===n.INT&&(ce=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(ce=n.RG32F),Z===n.HALF_FLOAT&&(ce=n.RG16F),Z===n.UNSIGNED_BYTE&&(ce=n.RG8),Z===n.UNSIGNED_SHORT&&be&&(ce=be.RG16_EXT),Z===n.SHORT&&be&&(ce=be.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ce=n.RG16UI),Z===n.UNSIGNED_INT&&(ce=n.RG32UI),Z===n.BYTE&&(ce=n.RG8I),Z===n.SHORT&&(ce=n.RG16I),Z===n.INT&&(ce=n.RG32I)),T===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),Z===n.UNSIGNED_INT&&(ce=n.RGB32UI),Z===n.BYTE&&(ce=n.RGB8I),Z===n.SHORT&&(ce=n.RGB16I),Z===n.INT&&(ce=n.RGB32I)),T===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ce=n.RGBA32UI),Z===n.BYTE&&(ce=n.RGBA8I),Z===n.SHORT&&(ce=n.RGBA16I),Z===n.INT&&(ce=n.RGBA32I)),T===n.RGB&&(Z===n.UNSIGNED_SHORT&&be&&(ce=be.RGB16_EXT),Z===n.SHORT&&be&&(ce=be.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),T===n.RGBA){let ue=fe?ya:mt.getTransfer(pe);Z===n.FLOAT&&(ce=n.RGBA32F),Z===n.HALF_FLOAT&&(ce=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ce=ue===Dt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&be&&(ce=be.RGBA16_EXT),Z===n.SHORT&&be&&(ce=be.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(P,T){let Z;return P?T===null||T===Di||T===Is?Z=n.DEPTH24_STENCIL8:T===qn?Z=n.DEPTH32F_STENCIL8:T===Bo&&(Z=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Di||T===Is?Z=n.DEPTH_COMPONENT24:T===qn?Z=n.DEPTH_COMPONENT32F:T===Bo&&(Z=n.DEPTH_COMPONENT16),Z}function E(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==Zt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function D(P){let T=new WeakRef(P);i.get(P).__ref=T,m.add(T),x.register(P,T,T)}function N(P){let T=i.get(P).__ref;T!==void 0&&(m.delete(T),x.unregister(T))}function k(P){G(P.target)}function q(P){O(P.target)}function G(P){P.removeEventListener("dispose",k),N(P),ne(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function O(P){P.removeEventListener("dispose",q),N(P),ve(P)}function Y(){for(let P of m){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?O(T):G(T))}m.clear(),h.clear()}function ne(P){let T=i.get(P);if(T.__webglInit===void 0)return;let Z=P.source,ge=d.get(Z);if(ge){let pe=ge[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&j(P),Object.keys(ge).length===0&&d.delete(Z)}i.remove(P)}function j(P){let T=i.get(P);n.deleteTexture(T.__webglTexture);let Z=P.source,ge=d.get(Z);delete ge[T.__cacheKey],o.memory.textures--}function ve(P){let T=i.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let Z=P.depthTexture;if(Z&&Z.renderTarget===P&&G(Z),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let fe=0;fe<T.__webglFramebuffer[pe].length;fe++)n.deleteFramebuffer(T.__webglFramebuffer[pe][fe]);else n.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)n.deleteFramebuffer(T.__webglFramebuffer[pe]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ge=P.textures;for(let pe=0,fe=ge.length;pe<fe;pe++){let be=i.get(ge[pe]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(ge[pe])}i.remove(P)}let ie=0;function H(){ie=0}function ee(){return ie}function Ae(P){ie=P}function Ne(){let P=ie;return P>=r.maxTextures&&nt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),ie+=1,P}function Q(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function xe(P,T){let Z=i.get(P);if(P.isVideoTexture&&Se(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){let ge=P.image;if(ge===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(Z,P,T);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function re(P,T){let Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){ht(Z,P,T);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function V(P,T){let Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){ht(Z,P,T);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function te(P,T){let Z=i.get(P);if(P.version>0&&Z.__version!==P.version){ft(Z,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}let Ie={[Ci]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},We={[Yt]:n.NEAREST,[Yc]:n.NEAREST_MIPMAP_NEAREST,[Ps]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Fo]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},Oe={[Xg]:n.NEVER,[ed]:n.ALWAYS,[qg]:n.LESS,[Jf]:n.LEQUAL,[$g]:n.EQUAL,[Qf]:n.GEQUAL,[Yg]:n.GREATER,[Zg]:n.NOTEQUAL};function He(P,T){if(T.type===qn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zt||T.magFilter===Fo||T.magFilter===Ps||T.magFilter===gi||T.minFilter===Zt||T.minFilter===Fo||T.minFilter===Ps||T.minFilter===gi)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Ie[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Ie[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Ie[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,We[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,We[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yt||T.minFilter!==Ps&&T.minFilter!==gi||T.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Je(P,T){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",k),D(T));let ge=T.source,pe=d.get(ge);pe===void 0&&(pe={},d.set(ge,pe));let fe=Q(T);if(fe!==P.__cacheKey){pe[fe]===void 0&&(pe[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),pe[fe].usedTimes++;let be=pe[P.__cacheKey];be!==void 0&&(pe[P.__cacheKey].usedTimes--,be.usedTimes===0&&j(T)),P.__cacheKey=fe,P.__webglTexture=pe[fe].texture}return Z}function qe(P,T,Z){return Math.floor(Math.floor(P/Z)/T)}function vt(P,T,Z,ge){let fe=P.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Z,ge,T.data);else{fe.sort((L,W)=>L.start-W.start);let be=0;for(let L=1;L<fe.length;L++){let W=fe[be],z=fe[L],he=W.start+W.count,_e=qe(z.start,T.width,4),Ee=qe(W.start,T.width,4);z.start<=he+1&&_e===Ee&&qe(z.start+z.count-1,T.width,4)===_e?W.count=Math.max(W.count,z.start+z.count-W.start):(++be,fe[be]=z)}fe.length=be+1;let ce=t.getParameter(n.UNPACK_ROW_LENGTH),ue=t.getParameter(n.UNPACK_SKIP_PIXELS),F=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let L=0,W=fe.length;L<W;L++){let z=fe[L],he=Math.floor(z.start/4),_e=Math.ceil(z.count/4),Ee=he%T.width,Me=Math.floor(he/T.width),Ue=_e,$=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me),t.texSubImage2D(n.TEXTURE_2D,0,Ee,Me,Ue,$,Z,ge,T.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,F)}}function ht(P,T,Z){let ge=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=n.TEXTURE_3D);let pe=Je(P,T),fe=T.source;t.bindTexture(ge,P.__webglTexture,n.TEXTURE0+Z);let be=i.get(fe);if(fe.version!==be.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let $=mt.getPrimaries(mt.workingColorSpace),Pe=T.colorSpace===Ni?null:mt.getPrimaries(T.colorSpace),$e=T.colorSpace===Ni||$===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ue=b(T.image,!1,r.maxTextureSize);ue=ye(T,ue);let F=s.convert(T.format,T.colorSpace),L=s.convert(T.type),W=w(T.internalFormat,F,L,T.normalized,T.colorSpace,T.isVideoTexture);He(ge,T);let z,he=T.mipmaps,_e=T.isVideoTexture!==!0,Ee=be.__version===void 0||pe===!0,Me=fe.dataReady,Ue=E(T,ue);if(T.isDepthTexture)W=y(T.format===Dr,T.type),Ee&&(_e?t.texStorage2D(n.TEXTURE_2D,1,W,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,W,ue.width,ue.height,0,F,L,null));else if(T.isDataTexture)if(he.length>0){_e&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ue,W,he[0].width,he[0].height);for(let $=0,Pe=he.length;$<Pe;$++)z=he[$],_e?Me&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,z.width,z.height,F,L,z.data):t.texImage2D(n.TEXTURE_2D,$,W,z.width,z.height,0,F,L,z.data);T.generateMipmaps=!1}else _e?(Ee&&t.texStorage2D(n.TEXTURE_2D,Ue,W,ue.width,ue.height),Me&&vt(T,ue,F,L)):t.texImage2D(n.TEXTURE_2D,0,W,ue.width,ue.height,0,F,L,ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_e&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,W,he[0].width,he[0].height,ue.depth);for(let $=0,Pe=he.length;$<Pe;$++)if(z=he[$],T.format!==wn)if(F!==null)if(_e){if(Me)if(T.layerUpdates.size>0){let $e=ud(z.width,z.height,T.format,T.type);for(let De of T.layerUpdates){let ot=z.data.subarray(De*$e/z.data.BYTES_PER_ELEMENT,(De+1)*$e/z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,De,z.width,z.height,1,F,ot)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,z.width,z.height,ue.depth,F,z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,W,z.width,z.height,ue.depth,0,z.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?Me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,z.width,z.height,ue.depth,F,L,z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,W,z.width,z.height,ue.depth,0,F,L,z.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{_e&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ue,W,he[0].width,he[0].height);for(let $=0,Pe=he.length;$<Pe;$++)z=he[$],T.format!==wn?F!==null?_e?Me&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,z.width,z.height,F,z.data):t.compressedTexImage2D(n.TEXTURE_2D,$,W,z.width,z.height,0,z.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?Me&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,z.width,z.height,F,L,z.data):t.texImage2D(n.TEXTURE_2D,$,W,z.width,z.height,0,F,L,z.data)}else if(T.isDataArrayTexture)if(_e){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,W,ue.width,ue.height,ue.depth),Me)if(T.layerUpdates.size>0){let $=ud(ue.width,ue.height,T.format,T.type);for(let Pe of T.layerUpdates){let $e=ue.data.subarray(Pe*$/ue.data.BYTES_PER_ELEMENT,(Pe+1)*$/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,ue.width,ue.height,1,F,L,$e)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,F,L,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,W,ue.width,ue.height,ue.depth,0,F,L,ue.data);else if(T.isData3DTexture)_e?(Ee&&t.texStorage3D(n.TEXTURE_3D,Ue,W,ue.width,ue.height,ue.depth),Me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,F,L,ue.data)):t.texImage3D(n.TEXTURE_3D,0,W,ue.width,ue.height,ue.depth,0,F,L,ue.data);else if(T.isFramebufferTexture){if(Ee)if(_e)t.texStorage2D(n.TEXTURE_2D,Ue,W,ue.width,ue.height);else{let $=ue.width,Pe=ue.height;for(let $e=0;$e<Ue;$e++)t.texImage2D(n.TEXTURE_2D,$e,W,$,Pe,0,F,L,null),$>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),ue.parentNode!==$){$.appendChild(ue),h.add(T),$.onpaint=Pe=>{let $e=Pe.changedElements;for(let De of h)$e.includes(De.image)&&(De.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ue);else{let $e=n.RGBA,De=n.RGBA,ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,$e,De,ot,ue)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(he.length>0){if(_e&&Ee){let $=Le(he[0]);t.texStorage2D(n.TEXTURE_2D,Ue,W,$.width,$.height)}for(let $=0,Pe=he.length;$<Pe;$++)z=he[$],_e?Me&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,F,L,z):t.texImage2D(n.TEXTURE_2D,$,W,F,L,z);T.generateMipmaps=!1}else if(_e){if(Ee){let $=Le(ue);t.texStorage2D(n.TEXTURE_2D,Ue,W,$.width,$.height)}Me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,F,L,ue)}else t.texImage2D(n.TEXTURE_2D,0,W,F,L,ue);S(T)&&T.mipmapsAutoUpdate===!0&&v(ge),be.__version=fe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ft(P,T,Z){if(T.image.length!==6)return;let ge=Je(P,T),pe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Z);let fe=i.get(pe);if(pe.version!==fe.__version||ge===!0){t.activeTexture(n.TEXTURE0+Z);let be=mt.getPrimaries(mt.workingColorSpace),ce=T.colorSpace===Ni?null:mt.getPrimaries(T.colorSpace),ue=T.colorSpace===Ni||be===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let F=T.isCompressedTexture||T.image[0].isCompressedTexture,L=T.image[0]&&T.image[0].isDataTexture,W=[];for(let De=0;De<6;De++)!F&&!L?W[De]=b(T.image[De],!0,r.maxCubemapSize):W[De]=L?T.image[De].image:T.image[De],W[De]=ye(T,W[De]);let z=W[0],he=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),Ee=w(T.internalFormat,he,_e,T.normalized,T.colorSpace),Me=T.isVideoTexture!==!0,Ue=fe.__version===void 0||ge===!0,$=pe.dataReady,Pe=E(T,z);He(n.TEXTURE_CUBE_MAP,T);let $e;if(T.isDepthTexture){if(Ee=y(T.format===Dr,T.type),Ue)if(Me)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ee,z.width,z.height);else for(let De=0;De<6;De++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ee,z.width,z.height,0,he,_e,null)}else if(F){Me&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ee,z.width,z.height);for(let De=0;De<6;De++){$e=W[De].mipmaps;for(let ot=0;ot<$e.length;ot++){let Ct=$e[ot];T.format!==wn?he!==null?Me?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot,0,0,Ct.width,Ct.height,he,Ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot,Ee,Ct.width,Ct.height,0,Ct.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot,0,0,Ct.width,Ct.height,he,_e,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot,Ee,Ct.width,Ct.height,0,he,_e,Ct.data)}}}else{if($e=T.mipmaps,Me&&Ue){$e.length>0&&Pe++;let De=Le(W[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ee,De.width,De.height)}for(let De=0;De<6;De++)if(L){Me?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,W[De].width,W[De].height,he,_e,W[De].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ee,W[De].width,W[De].height,0,he,_e,W[De].data);for(let ot=0;ot<$e.length;ot++){let Pt=$e[ot].image[De].image;Me?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot+1,0,0,Pt.width,Pt.height,he,_e,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot+1,Ee,Pt.width,Pt.height,0,he,_e,Pt.data)}}else{Me?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,he,_e,W[De]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ee,he,_e,W[De]);for(let ot=0;ot<$e.length;ot++){let Ct=$e[ot];Me?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot+1,0,0,he,_e,Ct.image[De]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot+1,Ee,he,_e,Ct.image[De])}}}S(T)&&T.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),fe.__version=pe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function je(P,T,Z,ge,pe,fe){let be=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),ue=w(Z.internalFormat,be,ce,Z.normalized,Z.colorSpace),F=i.get(T),L=i.get(Z);if(L.__renderTarget=T,!F.__hasExternalTextures){let W=Math.max(1,T.width>>fe),z=Math.max(1,T.height>>fe);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,fe,ue,W,z,T.depth,0,be,ce,null):t.texImage2D(pe,fe,ue,W,z,0,be,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),J(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,L.__webglTexture,0,Ce(T)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,L.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(P,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){let ge=T.depthTexture,pe=ge&&ge.isDepthTexture?ge.type:null,fe=y(T.stencilBuffer,pe),be=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;J(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(T),fe,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(T),fe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,P)}else{let ge=T.textures;for(let pe=0;pe<ge.length;pe++){let fe=ge[pe],be=s.convert(fe.format,fe.colorSpace),ce=s.convert(fe.type),ue=w(fe.internalFormat,be,ce,fe.normalized,fe.colorSpace);J(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(T),ue,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(T),ue,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ue,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(P,T,Z){let ge=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=i.get(T.depthTexture);pe.__renderTarget=T;let fe=ge?T.depthTexture.image[0]:T.depthTexture.image;(!pe.__webglTexture||fe.width!==T.width||fe.height!==T.height)&&(fe.width=T.width,fe.height=T.height,T.depthTexture.needsUpdate=!0),ge?te(T.depthTexture,0):xe(T.depthTexture,0);let be=pe.__webglTexture,ce=Ce(T),ue=ge?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,F=T.depthTexture.format===Dr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Sr)J(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,ue,be,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,F,ue,be,0);else if(T.depthTexture.format===Dr)J(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,ue,be,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,F,ue,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(P){let T=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let ge=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){let pe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",pe)};ge.addEventListener("dispose",pe),T.__depthDisposeCallback=pe}T.__boundDepthTexture=ge}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let ge=0;ge<6;ge++)me(T.__webglFramebuffer[ge],P,ge);else P.texture.mipmaps.length>0?me(T.__webglFramebuffer[0],P,0):me(T.__webglFramebuffer,P,0);else if(Z){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=n.createRenderbuffer(),bt(T.__webglDepthbuffer[ge],P,!1);else{let pe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[ge];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,fe)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),bt(T.__webglDepthbuffer,P,!1);else{let pe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,fe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(P,T,Z){let ge=i.get(P);T!==void 0&&je(ge.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&et(P)}function we(P){let T=P.texture,Z=i.get(P),ge=i.get(T);P.addEventListener("dispose",q),D(P);let pe=P.textures,fe=P.isWebGLCubeRenderTarget===!0,be=pe.length>1;if(be||(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=T.version,o.memory.textures++),fe){Z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps.length>0){Z.__webglFramebuffer[ce]=[];for(let ue=0;ue<T.mipmaps.length;ue++)Z.__webglFramebuffer[ce][ue]=n.createFramebuffer()}else Z.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)Z.__webglFramebuffer[ce]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(be)for(let ce=0,ue=pe.length;ce<ue;ce++){let F=i.get(pe[ce]);F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&J(P)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ce=0;ce<pe.length;ce++){let ue=pe[ce];Z.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ce]);let F=s.convert(ue.format,ue.colorSpace),L=s.convert(ue.type),W=w(ue.internalFormat,F,L,ue.normalized,ue.colorSpace,P.isXRRenderTarget===!0),z=Ce(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,z,W,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),bt(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),He(n.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)je(Z.__webglFramebuffer[ce][ue],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else je(Z.__webglFramebuffer[ce],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);S(T)?v(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(be){for(let ce=0,ue=pe.length;ce<ue;ce++){let F=pe[ce],L=i.get(F),W=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(W=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,L.__webglTexture),He(W,F),je(Z.__webglFramebuffer,P,F,n.COLOR_ATTACHMENT0+ce,W,0),S(F)&&v(W)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ge.__webglTexture),He(ce,T),T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)je(Z.__webglFramebuffer[ue],P,T,n.COLOR_ATTACHMENT0,ce,ue);else je(Z.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,ce,0);S(T)?v(ce):T.mipmaps.length>0&&n.texParameteri(ce,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&et(P)}function R(P){let T=P.textures;for(let Z=0,ge=T.length;Z<ge;Z++){let pe=T[Z];if(S(pe)&&pe.mipmapsAutoUpdate===!0){let fe=M(P),be=i.get(pe).__webglTexture;t.bindTexture(fe,be),v(fe),t.unbindTexture()}}}let se=[];function K(P){if(P.samples>0){if(J(P)===!1){let T=P.textures,Z=P.width,ge=P.height,pe=n.COLOR_BUFFER_BIT,fe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(P),ce=T.length>1;if(ce)for(let F=0;F<T.length;F++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let F=0;F<T.length;F++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[F]);let L=i.get(T[F]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,pe,n.NEAREST),l===!0&&(se.length=0,se.push(n.COLOR_ATTACHMENT0+F),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&se.push(fe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let F=0;F<T.length;F++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,be.__webglColorRenderbuffer[F]);let L=i.get(T[F]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ce(P){return Math.min(r.maxSamples,P.samples)}function J(P){let T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Se(P){let T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function ye(P,T){let Z=P.colorSpace,ge=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Wn&&Z!==Ni&&(mt.getTransfer(Z)===Dt?(ge!==wn||pe!==On)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",Z)),T}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=H,this.getTextureUnits=ee,this.setTextureUnits=Ae,this.setTexture2D=xe,this.setTexture2DArray=re,this.setTexture3D=V,this.setTextureCube=te,this.rebindTextures=tt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=je,this.useMultisampledRTT=J,this.dispose=Y}function p1(n,e){function t(i,r=Ni){let s,o=mt.getTransfer(r);if(i===On)return n.UNSIGNED_BYTE;if(i===Kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$f)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xf)return n.BYTE;if(i===qf)return n.SHORT;if(i===Bo)return n.UNSIGNED_SHORT;if(i===Zc)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===jn)return n.HALF_FLOAT;if(i===Zf)return n.ALPHA;if(i===Kf)return n.RGB;if(i===wn)return n.RGBA;if(i===Sr)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===Jc)return n.RED;if(i===Qc)return n.RED_INTEGER;if(i===is)return n.RG;if(i===eu)return n.RG_INTEGER;if(i===tu)return n.RGBA_INTEGER;if(i===Ka||i===ja||i===Ja||i===Qa)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nu||i===iu||i===ru||i===su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ou||i===au||i===lu||i===cu||i===uu||i===el||i===hu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ou||i===au)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===cu)return s.COMPRESSED_R11_EAC;if(i===uu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===el)return s.COMPRESSED_RG11_EAC;if(i===hu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fu||i===du||i===pu||i===mu||i===gu||i===xu||i===yu||i===_u||i===vu||i===bu||i===Mu||i===Su||i===wu||i===Eu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===du)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_u)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Su)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tu||i===Au||i===Ru)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tu)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cu||i===Pu||i===tl||i===Iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g1=`
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

}`,_d=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vn({vertexShader:m1,fragmentShader:g1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vd=class extends Pi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new _d,p={},b=t.getContextAttributes(),S=null,v=null,M=[],w=[],y=new Ge,E=null,D=null,N=new hn;N.viewport=new wt;let k=new hn;k.viewport=new wt;let q=[N,k],G=new Gc,O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let xe=M[Q];return xe===void 0&&(xe=new Eo,M[Q]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(Q){let xe=M[Q];return xe===void 0&&(xe=new Eo,M[Q]=xe),xe.getGripSpace()},this.getHand=function(Q){let xe=M[Q];return xe===void 0&&(xe=new Eo,M[Q]=xe),xe.getHandSpace()};function ne(Q){let xe=w.indexOf(Q.inputSource);if(xe===-1)return;let re=M[xe];re!==void 0&&(re.update(Q.inputSource,Q.frame,c||o),re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ve);for(let Q=0;Q<M.length;Q++){let xe=w[Q];xe!==null&&(w[Q]=null,M[Q].disconnect(xe))}O=null,Y=null,g.reset();for(let Q in p)delete p[Q];if(e.setRenderTarget(S),d=null,f=null,h=null,r=null,v=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),D!==null){let Q=D.camera;Q.fov=D.fov,Q.zoom=D.zoom,Q.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ve),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,V=null,te=null;b.depth&&(te=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=b.stencil?Dr:Sr,V=b.stencil?Is:Di);let Ie={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new an(f.textureWidth,f.textureHeight,{format:wn,type:On,depthTexture:new Ar(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let re={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new an(d.framebufferWidth,d.framebufferHeight,{format:wn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ve(Q){for(let xe=0;xe<Q.removed.length;xe++){let re=Q.removed[xe],V=w.indexOf(re);V>=0&&(w[V]=null,M[V].disconnect(re))}for(let xe=0;xe<Q.added.length;xe++){let re=Q.added[xe],V=w.indexOf(re);if(V===-1){for(let Ie=0;Ie<M.length;Ie++)if(Ie>=w.length){w.push(re),V=Ie;break}else if(w[Ie]===null){w[Ie]=re,V=Ie;break}if(V===-1)break}let te=M[V];te&&te.connect(re)}}function ie(Q,xe){xe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(xe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let xe=Q.near,re=Q.far;g.texture!==null&&(g.depthNear>0&&(xe=g.depthNear),g.depthFar>0&&(re=g.depthFar)),G.near=k.near=N.near=xe,G.far=k.far=N.far=re,(O!==G.near||Y!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),O=G.near,Y=G.far),G.layers.mask=Q.layers.mask|6,N.layers.mask=G.layers.mask&-5,k.layers.mask=G.layers.mask&-3;let V=Q.parent,te=G.cameras;ie(G,V);for(let Ie=0;Ie<te.length;Ie++)ie(te[Ie],V);G.projectionMatrix.copy(N.projectionMatrix),G.projectionMatrixInverse.copy(N.projectionMatrixInverse),D===null&&Q.isPerspectiveCamera&&(D={camera:Q,fov:Q.fov,zoom:Q.zoom}),H(Q,G,V)};function H(Q,xe,re){re===null?Q.matrix.copy(xe.matrixWorld):(Q.matrix.copy(re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(xe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(xe.projectionMatrix),Q.projectionMatrixInverse.copy(xe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Es*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(Q){return p[Q]};let ee=null;function Ae(Q,xe){if(u=xe.getViewerPose(c||o),m=xe,u!==null){let re=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let V=!1;re.length!==G.cameras.length&&(G.cameras.length=0,V=!0);for(let Oe=0;Oe<re.length;Oe++){let He=re[Oe],Je=null;if(d!==null)Je=d.getViewport(He);else{let vt=h.getViewSubImage(f,He);Je=vt.viewport,Oe===0&&(e.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(v))}let qe=q[Oe];qe===void 0&&(qe=new hn,qe.layers.enable(Oe),qe.viewport=new wt,q[Oe]=qe),qe.matrix.fromArray(He.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(He.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Je.x,Je.y,Je.width,Je.height),Oe===0&&(G.matrix.copy(qe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),V===!0&&G.cameras.push(qe)}let te=r.enabledFeatures;if(te&&te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Oe=h.getDepthInformation(re[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,r.renderState)}if(te&&te.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Oe=0;Oe<re.length;Oe++){let He=re[Oe].camera;if(He){let Je=p[He];Je||(Je=new Ia,p[He]=Je);let qe=h.getCameraImage(He);Je.sourceTexture=qe}}}}for(let re=0;re<M.length;re++){let V=w[re],te=M[re];V!==null&&te!==void 0&&te.update(V,xe,c||o)}ee&&ee(Q,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),m=null}let Ne=new E0;Ne.setAnimationLoop(Ae),this.setAnimationLoop=function(Q){ee=Q},this.dispose=function(){}}},x1=new rt,O0=new lt;O0.set(-1,0,0,0,1,0,0,0,1);function y1(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ad(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,v=b.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(x1.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(O0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _1(n,e,t,i){let r={},s={};function o(b,S){let v=S.program;i.uniformBlockBinding(b,v,r[b.id])}function a(b,S){let v=r[b.id];v===void 0&&(m(b),v=l(b),r[b.id]=v,b.addEventListener("dispose",g));let M=S.program;i.updateUBOMapping(b,M);let w=e.render.frame;s[b.id]!==w&&(c(b),s[b.id]=w)}function l(b){let S=n.createBuffer(),v=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,M),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(b){let S=r[b.id],v=b.uniforms,M=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,y=v.length;w<y;w++){let E=v[w];if(Array.isArray(E))for(let D=0,N=E.length;D<N;D++)u(E[D],w,D,M);else u(E,w,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(b,S,v,M){if(f(b,S,v,M)===!0){let w=b.__offset,y=b.value;if(Array.isArray(y)){let E=0;for(let D=0;D<y.length;D++){let N=y[D],k=x(N,!0);h(N,b.__data,E),E+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else h(y,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,b.__data)}}function h(b,S,v){typeof b=="number"||typeof b=="boolean"?S[v]=b:b.isMatrix3?(S[v]=b.elements[0],S[v+1]=b.elements[1],S[v+2]=b.elements[2],S[v+3]=0,S[v+4]=b.elements[3],S[v+5]=b.elements[4],S[v+6]=b.elements[5],S[v+7]=0,S[v+8]=b.elements[6],S[v+9]=b.elements[7],S[v+10]=b.elements[8],S[v+11]=0):ArrayBuffer.isView(b)?S.set(b.subarray(0,S.length-v),v):b.toArray(S,v)}function f(b,S,v,M){let w=b.value,y=S+"_"+v;if(Array.isArray(w)){M[y]===void 0&&(M[y]=[]);let E=M[y],D=!1;for(let N=0;N<w.length;N++)d(w[N],E,N)===!0&&(D=!0);return D}return d(w,M,y)}function d(b,S,v){if(S[v]===void 0)return typeof b=="number"||typeof b=="boolean"?S[v]=b:ArrayBuffer.isView(b)?S[v]=b.slice():S[v]=b.clone(),!0;{let M=S[v];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return S[v]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(M.equals(b)===!1)return M.copy(b),!0}}return!1}function m(b){let S=b.uniforms,v=0,M=16;for(let y=0,E=S.length;y<E;y++){let D=Array.isArray(S[y])?S[y]:[S[y]];for(let N=0,k=D.length;N<k;N++){let q=D[N],G=Array.isArray(q.value)?q.value:[q.value],O=Array.isArray(S[y])||Array.isArray(q.value),Y=v;for(let j=0,ve=G.length;j<ve;j++){let ie=G[j],H=x(ie,O),ee=v%M,Ae=ee%H.boundary,Ne=ee+Ae;v+=Ae,Ne!==0&&M-Ne<H.storage&&(v+=M-Ne),j===0&&(Y=v),v+=H.storage}let ne=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new ne((v-Y)/Float32Array.BYTES_PER_ELEMENT),q.__offset=Y}}let w=v%M;return w>0&&(v+=M-w),b.__size=v,b.__cache={},this}function x(b,S){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=16,v.storage=48):b.isMatrix4?(v.boundary=16,v.storage=64):b.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",b),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(b){let S=b.target;S.removeEventListener("dispose",g),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);r={},s={}}return{bind:o,update:a,dispose:p}}var v1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function b1(){return Ji===null&&(Ji=new Ro(v1,16,16,is,jn),Ji.name="DFG_LUT",Ji.minFilter=Zt,Ji.magFilter=Zt,Ji.wrapS=hi,Ji.wrapT=hi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var Ou=class{constructor(e={}){let{canvas:t=Kg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=On}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=d,g=new Set([tu,eu,Qc]),p=new Set([On,Di,Bo,Is,Kc,jc]),b=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,w=null,y=[],E=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,k=!1,q=null,G=null,O=null,Y=null;this._outputColorSpace=Tt;let ne=0,j=0,ve=null,ie=-1,H=null,ee=new wt,Ae=new wt,Ne=null,Q=new Xe(0),xe=0,re=t.width,V=t.height,te=1,Ie=null,We=null,Oe=new wt(0,0,re,V),He=new wt(0,0,re,V),Je=!1,qe=new Zr,vt=new Pc,ht=!1,ft=!1,je=new rt,bt=new I,me=new wt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function we(){return ve===null?te:1}let R=i;function se(A,X){return t.getContext(A,X)}let K,Ce,J,Se,ye,Le,P,T,Z,ge,pe,fe,be,ce,ue,F,L,W,z,he,_e,Ee,Me;try{let A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",De,!1),R===null){let X="webgl2";if(R=se(X,A),R===null)throw se(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(A){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",De,!1),st("WebGLRenderer: "+A.message),A}function Ue(){K=new Lw(R),K.init(),_e=new p1(R,K),Ce=new bw(R,K,e,_e),J=new f1(R,K),Ce.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),G=R.createFramebuffer(),O=R.createFramebuffer(),Y=R.createFramebuffer(),Se=new Ow(R),ye=new JE,Le=new d1(R,K,J,ye,Ce,_e,Se),P=new Iw(N),T=new Fb(R),Ee=new _w(R,T),Z=new Dw(R,T,Se,Ee),ge=new Fw(R,Z,T,Ee,Se),W=new Uw(R,Ce,Le),ue=new Mw(ye),pe=new jE(N,P,K,Ce,Ee,ue),fe=new y1(N,ye),be=new e1,ce=new o1(K),L=new yw(N,P,J,ge,m,l),F=new h1(N,ge,Ce),Me=new _1(R,Se,Ce,J),z=new vw(R,K,Se),he=new Nw(R,K,Se),Se.programs=pe.programs,N.capabilities=Ce,N.extensions=K,N.properties=ye,N.renderLists=be,N.shadowMap=F,N.state=J,N.info=Se}x!==On&&(D=new kw(x,t.width,t.height,a,r,s));let $=new vd(N,R);this.xr=$,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(re,V,!1))},this.getSize=function(A){return A.set(re,V)},this.setSize=function(A,X,de=!0){if($.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,V=X,t.width=Math.floor(A*te),t.height=Math.floor(X*te),de===!0&&(t.style.width=A+"px",t.style.height=X+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(re*te,V*te).floor()},this.setDrawingBufferSize=function(A,X,de){re=A,V=X,te=de,t.width=Math.floor(A*de),t.height=Math.floor(X*de),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(x===On){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(Oe)},this.setViewport=function(A,X,de,oe){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,X,de,oe),J.viewport(ee.copy(Oe).multiplyScalar(we()).round())},this.getScissor=function(A){return A.copy(He)},this.setScissor=function(A,X,de,oe){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,X,de,oe),J.scissor(Ae.copy(He).multiplyScalar(we()).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){J.setScissorTest(Je=A)},this.setOpaqueSort=function(A){Ie=A},this.setTransparentSort=function(A){We=A},this.getClearColor=function(A){return A.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,de=!0){let oe=0;if(A){let ae=!1;if(ve!==null){let Be=ve.texture.format;ae=g.has(Be)}if(ae){let Be=ve.texture.type,Ze=p.has(Be),Fe=L.getClearColor(),ke=L.getClearAlpha(),Qe=Fe.r,at=Fe.g,dt=Fe.b;Ze?(b[0]=Qe,b[1]=at,b[2]=dt,b[3]=ke,R.clearBufferuiv(R.COLOR,0,b)):(S[0]=Qe,S[1]=at,S[2]=dt,S[3]=ke,R.clearBufferiv(R.COLOR,0,S))}else oe|=R.COLOR_BUFFER_BIT}X&&(oe|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(oe|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&R.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",De,!1),L.dispose(),be.dispose(),ce.dispose(),Le.dispose(),ye.dispose(),P.dispose(),ge.dispose(),Z.dispose(),Ee.dispose(),Me.dispose(),pe.dispose(),$.dispose(),$.removeEventListener("sessionstart",bi),$.removeEventListener("sessionend",Bi),nn.stop()};function Pe(A){A.preventDefault(),_a("WebGLRenderer: Context Lost."),k=!0}function $e(){_a("WebGLRenderer: Context Restored."),k=!1;let A=Se.autoReset,X=F.enabled,de=F.autoUpdate,oe=F.needsUpdate,ae=F.type;Ue(),Se.autoReset=A,F.enabled=X,F.autoUpdate=de,F.needsUpdate=oe,F.type=ae}function De(A){st("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){let X=A.target;X.removeEventListener("dispose",ot),Ct(X)}function Ct(A){Pt(A),ye.remove(A)}function Pt(A){let X=ye.get(A).programs;X!==void 0&&(X.forEach(function(de){pe.releaseProgram(de)}),A.isShaderMaterial&&pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,de,oe,ae,Be){X===null&&(X=et);let Ze=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Fe=ms(A,X,de,oe,ae);J.setMaterial(oe,Ze);let ke=de.index,Qe=1;if(oe.wireframe===!0){if(ke=Z.getWireframeAttribute(de),ke===void 0)return;Qe=2}let at=de.drawRange,dt=de.attributes.position,Ke=at.start*Qe,xt=(at.start+at.count)*Qe;Be!==null&&(Ke=Math.max(Ke,Be.start*Qe),xt=Math.min(xt,(Be.start+Be.count)*Qe)),ke!==null?(Ke=Math.max(Ke,0),xt=Math.min(xt,ke.count)):dt!=null&&(Ke=Math.max(Ke,0),xt=Math.min(xt,dt.count));let Jt=xt-Ke;if(Jt<0||Jt===1/0)return;Ee.setup(ae,oe,Fe,de,ke);let Ft,Bt=z;if(ke!==null&&(Ft=T.get(ke),Bt=he,Bt.setIndex(Ft)),ae.isMesh)oe.wireframe===!0?(J.setLineWidth(oe.wireframeLinewidth*we()),Bt.setMode(R.LINES)):Bt.setMode(R.TRIANGLES);else if(ae.isLine){let cn=oe.linewidth;cn===void 0&&(cn=1),J.setLineWidth(cn*we()),ae.isLineSegments?Bt.setMode(R.LINES):ae.isLineLoop?Bt.setMode(R.LINE_LOOP):Bt.setMode(R.LINE_STRIP)}else ae.isPoints?Bt.setMode(R.POINTS):ae.isSprite&&Bt.setMode(R.TRIANGLES);if(ae.isBatchedMesh)if(K.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let cn=ae._multiDrawStarts,Ye=ae._multiDrawCounts,tn=ae._multiDrawCount,yt=ke?T.get(ke).bytesPerElement:1,ur=ye.get(oe).currentProgram.getUniforms();for(let un=0;un<tn;un++)ur.setValue(R,"_gl_DrawID",un),Bt.render(cn[un]/yt,Ye[un])}else if(ae.isInstancedMesh)Bt.renderInstances(Ke,Jt,ae.count);else if(de.isInstancedBufferGeometry){let cn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ye=Math.min(de.instanceCount,cn);Bt.renderInstances(Ke,Jt,Ye)}else Bt.render(Ke,Jt)};function Cn(A,X,de,oe){q!==null&&A.isNodeMaterial&&q.setObject(oe,A),ht===!0&&ue.setState(A,de,!1),A.transparent===!0&&A.side===Ot&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,ds(A,X,oe),A.side=ri,A.needsUpdate=!0,ds(A,X,oe),A.side=Ot):ds(A,X,oe)}this.compile=function(A,X,de=null){de===null&&(de=A),q!==null&&q.renderStart(A,X,de),w=ce.get(de),w.init(X),E.push(w),de.traverseVisible(function(ae){ae.isLight&&ae.layers.test(X.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),A!==de&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(X.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),w.setupLights(),q!==null&&q.updateLights(w.state.lightsArray),ft=this.localClippingEnabled,ht=ue.init(this.clippingPlanes,ft),ht===!0&&ue.setGlobalState(this.clippingPlanes,X),q!==null&&F.render(w.state.shadowsArray,de,X);let oe=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Be=ae.material;if(Be)if(Array.isArray(Be))for(let Ze=0;Ze<Be.length;Ze++){let Fe=Be[Ze];Cn(Fe,de,X,ae),oe.add(Fe)}else Cn(Be,de,X,ae),oe.add(Be)}),w=E.pop(),q!==null&&q.renderEnd(),oe},this.compileAsync=function(A,X,de=null){let oe=this.compile(A,X,de);return new Promise(ae=>{function Be(){if(oe.forEach(function(Ze){let ke=ye.get(Ze).currentProgram;(ke===void 0||ke.isReady())&&oe.delete(Ze)}),oe.size===0){ae(A);return}setTimeout(Be,10)}K.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ai=null;function Hn(A){ai&&ai(A)}function bi(){nn.stop()}function Bi(){nn.start()}let nn=new E0;nn.setAnimationLoop(Hn),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(A){ai=A,$.setAnimationLoop(A),A===null?nn.stop():nn.start()},$.addEventListener("sessionstart",bi),$.addEventListener("sessionend",Bi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;q!==null&&q.renderStart(A,X);let de=$.enabled===!0&&$.isPresenting===!0,oe=D!==null&&(ve===null||de)&&D.begin(N,ve);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(X),X=$.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,X,ve),w=ce.get(A,E.length),w.init(X),w.state.textureUnits=Le.getTextureUnits(),E.push(w),je.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?vt.setFromArrayCamera(X):qe.setFromProjectionMatrix(je,fi,X.reversedDepth),ft=this.localClippingEnabled,ht=ue.init(this.clippingPlanes,ft),M=be.get(A,y.length),M.init(),y.push(M),this.info.render.frame++,$.enabled===!0&&$.isPresenting===!0){let Ze=N.xr.getDepthSensingMesh();Ze!==null&&li(Ze,X,-1/0,N.sortObjects)}li(A,X,0,N.sortObjects),M.finish(),q!==null&&q.updateLights(w.state.lightsArray),N.sortObjects===!0&&M.sort(Ie,We),tt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,tt&&L.addToRenderList(M,A),this.info.autoReset===!0&&this.info.reset(),ht===!0&&ue.beginShadows();let ae=w.state.shadowsArray;if(F.render(ae,A,X),ht===!0&&ue.endShadows(),(oe&&D.hasRenderPass())===!1){let Ze=M.opaque,Fe=M.transmissive;if(w.setupLights(),X.isArrayCamera){let ke=X.cameras;if(Fe.length>0)for(let Qe=0,at=ke.length;Qe<at;Qe++){let dt=ke[Qe];wl(Ze,Fe,A,dt)}tt&&L.render(A);for(let Qe=0,at=ke.length;Qe<at;Qe++){let dt=ke[Qe];Vs(M,A,dt,dt.viewport)}}else Fe.length>0&&wl(Ze,Fe,A,X),tt&&L.render(A),Vs(M,A,X)}ve!==null&&j===0&&(Le.updateMultisampleRenderTarget(ve),Le.updateRenderTargetMipmap(ve)),oe&&D.end(N),A.isScene===!0&&A.onAfterRender(N,A,X),Ee.resetDefaultState(),ie=-1,H=null,E.pop(),E.length>0?(w=E[E.length-1],Le.setTextureUnits(w.state.textureUnits),ht===!0&&ue.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,q!==null&&q.renderEnd()};function li(A,X,de,oe){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)de=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){let Ze=X.isArrayCamera?vt:qe;if(!A.frustumCulled||A.intersectsFrustum(Ze)){oe&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(je);let Fe=ge.update(A),ke=A.material;ke.visible&&M.push(A,Fe,ke,de,me.z,null,X)}}else if(A.isMesh||A.isLine||A.isPoints){let Ze=X.isArrayCamera?vt:qe;if(!A.frustumCulled||A.intersectsFrustum(Ze)){let Fe=ge.update(A),ke=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),me.copy(Fe.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4(je)),Array.isArray(ke)){let Qe=Fe.groups;for(let at=0,dt=Qe.length;at<dt;at++){let Ke=Qe[at],xt=ke[Ke.materialIndex];xt&&xt.visible&&M.push(A,Fe,xt,de,me.z,Ke,X)}}else ke.visible&&M.push(A,Fe,ke,de,me.z,null,X)}}}let Be=A.children;for(let Ze=0,Fe=Be.length;Ze<Fe;Ze++)li(Be[Ze],X,de,oe)}function Vs(A,X,de,oe){let{opaque:ae,transmissive:Be,transparent:Ze}=A;w.setupLightsView(de),ht===!0&&ue.setGlobalState(N.clippingPlanes,de),oe&&J.viewport(ee.copy(oe)),ae.length>0&&fs(ae,X,de),Be.length>0&&fs(Be,X,de),Ze.length>0&&fs(Ze,X,de),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function wl(A,X,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[oe.id]===void 0){let Ke=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[oe.id]=new an(1,1,{generateMipmaps:!0,type:Ke?jn:On,minFilter:gi,samples:Math.max(4,Ce.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Be=w.state.transmissionRenderTarget[oe.id],Ze=oe.viewport||ee;Be.setSize(Ze.z*N.transmissionResolutionScale,Ze.w*N.transmissionResolutionScale);let Fe=N.getRenderTarget(),ke=N.getActiveCubeFace(),Qe=N.getActiveMipmapLevel();N.setRenderTarget(Be),N.getClearColor(Q),xe=N.getClearAlpha(),xe<1&&N.setClearColor(16777215,.5),N.clear(),tt&&L.render(de);let at=N.toneMapping;N.toneMapping=mi;let dt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),w.setupLightsView(oe),ht===!0&&ue.setGlobalState(N.clippingPlanes,oe),fs(A,de,oe),Le.updateMultisampleRenderTarget(Be),Le.updateRenderTargetMipmap(Be),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let xt=0,Jt=X.length;xt<Jt;xt++){let Ft=X[xt],{object:Bt,geometry:cn,material:Ye,group:tn}=Ft;if(Ye.side===Ot&&Bt.layers.test(oe.layers)){let yt=Ye.side;Ye.side=Sn,Ye.needsUpdate=!0,kr(Bt,de,oe,cn,Ye,tn),Ye.side=yt,Ye.needsUpdate=!0,Ke=!0}}Ke===!0&&(Le.updateMultisampleRenderTarget(Be),Le.updateRenderTargetMipmap(Be))}N.setRenderTarget(Fe,ke,Qe),N.setClearColor(Q,xe),dt!==void 0&&(oe.viewport=dt),N.toneMapping=at}function fs(A,X,de){let oe=X.isScene===!0?X.overrideMaterial:null;for(let ae=0,Be=A.length;ae<Be;ae++){let Ze=A[ae],{object:Fe,geometry:ke,group:Qe}=Ze,at=Ze.material;at.allowOverride===!0&&oe!==null&&(at=oe),Fe.layers.test(de.layers)&&kr(Fe,X,de,ke,at,Qe)}}function kr(A,X,de,oe,ae,Be){q!==null&&ae.isNodeMaterial&&q.setObject(A,ae),A.onBeforeRender(N,X,de,oe,ae,Be),A.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(N,X,de,oe,A,Be),ae.transparent===!0&&ae.side===Ot&&ae.forceSinglePass===!1?(ae.side=Sn,ae.needsUpdate=!0,N.renderBufferDirect(de,X,oe,ae,A,Be),ae.side=ri,ae.needsUpdate=!0,N.renderBufferDirect(de,X,oe,ae,A,Be),ae.side=Ot):N.renderBufferDirect(de,X,oe,ae,A,Be),A.onAfterRender(N,X,de,oe,ae,Be)}function Gs(A){let X=0;for(let de of A)de.texture!==null&&X++;return X}function ds(A,X,de){X.isScene!==!0&&(X=et);let oe=ye.get(A),ae=w.state.lights,Be=w.state.shadowsArray,Ze=ae.state.version,Fe=pe.getParameters(A,ae.state,Be,X,de,w.state.lightProbeGridArray),ke=pe.getProgramCacheKey(Fe),Qe=oe.programs;oe.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,oe.fog=X.fog;let at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;oe.envMap=P.get(A.envMap||oe.environment,at),oe.envMapRotation=oe.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",ot),Qe=new Map,oe.programs=Qe,oe.programVariants=new Map);let dt=Qe.get(ke);if(dt!==void 0){if(oe.currentProgram===dt&&oe.lightsStateVersion===Ze)return ps(A,Fe),dt}else Fe.uniforms=pe.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,de,Fe),A.onBeforeCompile(Fe,N),dt=pe.acquireProgram(Fe,ke),Qe.set(ke,dt),oe.uniforms=Fe.uniforms;let Ke=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=ue.uniform),ps(A,Fe),oe.needsLights=Tl(A),oe.lightsStateVersion=Ze,oe.needsLights&&(Ke.ambientLightColor.value=ae.state.ambient,Ke.lightProbe.value=ae.state.probe,Ke.sunLights.value=ae.state.sun,Ke.sunLightShadows.value=ae.state.sunShadow,Ke.directionalLights.value=ae.state.directional,Ke.directionalLightShadows.value=ae.state.directionalShadow,Ke.spotLights.value=ae.state.spot,Ke.spotLightShadows.value=ae.state.spotShadow,Ke.rectAreaLights.value=ae.state.rectArea,Ke.ltc_1.value=ae.state.rectAreaLTC1,Ke.ltc_2.value=ae.state.rectAreaLTC2,Ke.pointLights.value=ae.state.point,Ke.pointLightShadows.value=ae.state.pointShadow,Ke.hemisphereLights.value=ae.state.hemi,Ke.sunShadowMatrix.value=ae.state.sunShadowMatrix,Ke.sunShadowCascade.value=ae.state.sunShadowCascade,Ke.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ae.state.spotLightMatrix,Ke.spotLightMap.value=ae.state.spotLightMap,Ke.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.numLightProbeGrids=Gs(w.state.lightProbeGridArray),oe.currentProgram=dt,oe.uniformsList=null,dt}function Ah(A,X,de,oe,ae){let Be=ye.get(A),Ze=Be.currentProgram.id+","+oe+","+ae,Fe=Be.programVariants.get(Ze);return Fe===void 0?(Fe=ds(A,X,de),Be.programVariants.set(Ze,Fe)):(Be.currentProgram=Fe,Be.uniformsList=null,Be.outputColorSpace=oe,Be.toneMapping=ae),Fe}function El(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=zo.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ps(A,X){let de=ye.get(A);de.outputColorSpace=X.outputColorSpace,de.batching=X.batching,de.batchingColor=X.batchingColor,de.instancing=X.instancing,de.instancingColor=X.instancingColor,de.instancingMorph=X.instancingMorph,de.skinning=X.skinning,de.morphTargets=X.morphTargets,de.morphNormals=X.morphNormals,de.morphColors=X.morphColors,de.morphTargetsCount=X.morphTargetsCount,de.numClippingPlanes=X.numClippingPlanes,de.numIntersection=X.numClipIntersection,de.vertexAlphas=X.vertexAlphas,de.vertexTangents=X.vertexTangents,de.toneMapping=X.toneMapping}function ms(A,X,de,oe,ae){X.isScene!==!0&&(X=et),Le.resetTextureUnits();let Be=X.fog,Ze=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?X.environment:null,Fe=ve===null?N.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:mt.workingColorSpace,ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Qe=P.get(oe.envMap||Ze,ke),at=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,dt=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ke=!!de.morphAttributes.position,xt=!!de.morphAttributes.normal,Jt=!!de.morphAttributes.color,Ft=mi;oe.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ft=N.toneMapping);let Bt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,cn=Bt!==void 0?Bt.length:0,Ye=ye.get(oe),tn=w.state.lights;if(ht===!0&&(ft===!0||A!==H)){let Gt=A===H&&oe.id===ie;ue.setState(oe,A,Gt)}let yt=!1,ur=!1;oe.version===Ye.__version?Ye.needsLights&&Ye.lightsStateVersion!==tn.state.version||ae.isBatchedMesh&&Ye.batching===!1||!ae.isBatchedMesh&&Ye.batching===!0||ae.isBatchedMesh&&Ye.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Ye.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Ye.instancing===!1||!ae.isInstancedMesh&&Ye.instancing===!0||ae.isSkinnedMesh&&Ye.skinning===!1||!ae.isSkinnedMesh&&Ye.skinning===!0||ae.isInstancedMesh&&Ye.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ye.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ye.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ye.instancingMorph===!1&&ae.morphTexture!==null||Ye.envMap!==Qe||oe.fog===!0&&Ye.fog!==Be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ue.numPlanes||Ye.numIntersection!==ue.numIntersection)||Ye.vertexAlphas!==at||Ye.vertexTangents!==dt||Ye.morphTargets!==Ke||Ye.morphNormals!==xt||Ye.morphColors!==Jt||Ye.morphTargetsCount!==cn||Ye.numLightProbeGrids!==Gs(w.state.lightProbeGridArray)?yt=!0:(Ye.outputColorSpace!==Fe||Ye.toneMapping!==Ft)&&(ur=!0):(yt=!0,Ye.__version=oe.version);let un=Ye.currentProgram;(yt===!0||ur===!0)&&(un=ur===!0?Ah(oe,X,ae,Fe,Ft):ds(oe,X,ae),q&&oe.isNodeMaterial&&q.onUpdateProgram(oe,un,Ye));let hr=!1,ki=!1,Mi=!1,_t=un.getUniforms(),rn=Ye.uniforms;if(J.useProgram(un.program)&&(hr=!0,ki=!0,Mi=!0),oe.id!==ie&&(ie=oe.id,ki=!0),hr||H!==A){J.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_t.setValue(R,"projectionMatrix",A.projectionMatrix),_t.setValue(R,"viewMatrix",A.matrixWorldInverse);let $t=_t.map.cameraPosition;$t!==void 0&&$t.setValue(R,bt.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&_t.setValue(R,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,ki=!0,Mi=!0)}if(Ye.needsLights&&(tn.state.sunShadowMap.length>0&&_t.setValue(R,"sunShadowMap",tn.state.sunShadowMap,Le),tn.state.directionalShadowMap.length>0&&_t.setValue(R,"directionalShadowMap",tn.state.directionalShadowMap,Le),tn.state.spotShadowMap.length>0&&_t.setValue(R,"spotShadowMap",tn.state.spotShadowMap,Le),tn.state.pointShadowMap.length>0&&_t.setValue(R,"pointShadowMap",tn.state.pointShadowMap,Le)),ae.isSkinnedMesh){_t.setOptional(R,ae,"bindMatrix"),_t.setOptional(R,ae,"bindMatrixInverse");let Gt=ae.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),_t.setValue(R,"boneTexture",Gt.boneTexture,Le))}ae.isBatchedMesh&&(_t.setOptional(R,ae,"batchingTexture"),_t.setValue(R,"batchingTexture",ae._matricesTexture,Le),_t.setOptional(R,ae,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",ae._indirectTexture,Le),_t.setOptional(R,ae,"batchingColorTexture"),ae._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",ae._colorsTexture,Le));let Yn=de.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&W.update(ae,de,un),(ki||Ye.receiveShadow!==ae.receiveShadow)&&(Ye.receiveShadow=ae.receiveShadow,_t.setValue(R,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&X.environment!==null&&(rn.envMapIntensity.value=X.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=b1()),ki){if(_t.setValue(R,"toneMappingExposure",N.toneMappingExposure),Ye.needsLights&&gs(rn,Mi),Be&&oe.fog===!0&&fe.refreshFogUniforms(rn,Be),fe.refreshMaterialUniforms(rn,oe,te,V,w.state.transmissionRenderTarget[A.id]),Ye.needsLights&&Ye.numLightProbeGrids>0){let Gt=v,$t=0;for(let bn of w.state.lightProbeGridArray)bn.texture!==null&&(Gt.textures[$t]=bn.texture,Gt.min[$t]=bn.boundingBox.min,Gt.max[$t]=bn.boundingBox.max,Gt.resolution[$t]=bn.resolution,$t++);for(let bn in Gt)Gt[bn].length=$t;rn.probesSH.value=Gt.textures,rn.probesMin.value=Gt.min,rn.probesMax.value=Gt.max,rn.probesResolution.value=Gt.resolution}zo.upload(R,El(Ye),rn,Le)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(zo.upload(R,El(Ye),rn,Le),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&_t.setValue(R,"center",ae.center),_t.setValue(R,"modelViewMatrix",ae.modelViewMatrix),_t.setValue(R,"normalMatrix",ae.normalMatrix),_t.setValue(R,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){let Gt=oe.uniformsGroups;for(let $t=0,bn=Gt.length;$t<bn;$t++){let zr=Gt[$t];Me.update(zr,un),Me.bind(zr,un)}}return un}function gs(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Tl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ve},this.setRenderTargetTextures=function(A,X,de){let oe=ye.get(A);oe.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ye.get(A.texture).__webglTexture=X,ye.get(A.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let de=ye.get(A);de.__webglFramebuffer=X,de.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,de=0){ve=A,ne=X,j=de;let oe=null,ae=!1,Be=!1;if(A){let Fe=ye.get(A);if(Fe.__useDefaultFramebuffer!==void 0){J.bindFramebuffer(R.FRAMEBUFFER,Fe.__webglFramebuffer),ee.copy(A.viewport),Ae.copy(A.scissor),Ne=A.scissorTest,J.viewport(ee),J.scissor(Ae),J.setScissorTest(Ne),ie=-1;return}else if(Fe.__webglFramebuffer===void 0)Le.setupRenderTarget(A);else if(Fe.__hasExternalTextures)Le.rebindTextures(A,ye.get(A.texture).__webglTexture,ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let at=A.depthTexture;if(Fe.__boundDepthTexture!==at){if(at!==null&&ye.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(A)}}let ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Be=!0);let Qe=ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?oe=Qe[X][de]:oe=Qe[X],ae=!0):A.samples>0&&Le.useMultisampledRTT(A)===!1?oe=ye.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?oe=Qe[de]:oe=Qe,ee.copy(A.viewport),Ae.copy(A.scissor),Ne=A.scissorTest}else ee.copy(Oe).multiplyScalar(te).floor(),Ae.copy(He).multiplyScalar(te).floor(),Ne=Je;if(de!==0&&(oe=G),J.bindFramebuffer(R.FRAMEBUFFER,oe)&&J.drawBuffers(A,oe),J.viewport(ee),J.scissor(Ae),J.setScissorTest(Ne),ae){let Fe=ye.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,de)}else if(Be){let Fe=X;for(let ke=0;ke<A.textures.length;ke++){let Qe=ye.get(A.textures[ke]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+ke,Qe.__webglTexture,de,Fe)}}else if(A!==null&&de!==0){let Fe=ye.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Fe.__webglTexture,de)}ie=-1};function cr(A){let X=ye.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=Ce.textureFormatReadable(A.format),X.__typeReadable=Ce.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,de,oe,ae,Be,Ze,Fe=0){if(!(A&&A.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(ke=ke[Ze],Array.isArray(ke)&&(ke=ke[0])),ke){J.bindFramebuffer(R.FRAMEBUFFER,ke);try{let Qe=A.textures[Fe],at=Qe.format,dt=Qe.type;A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe);let Ke=cr(Qe);if(Ke.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-oe&&de>=0&&de<=A.height-ae&&R.readPixels(X,de,oe,ae,_e.convert(at),_e.convert(dt),Be)}finally{let Qe=ve!==null?ye.get(ve).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,X,de,oe,ae,Be,Ze,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(ke=ke[Ze],Array.isArray(ke)&&(ke=ke[0])),ke)if(X>=0&&X<=A.width-oe&&de>=0&&de<=A.height-ae){J.bindFramebuffer(R.FRAMEBUFFER,ke);let Qe=A.textures[Fe],at=Qe.format,dt=Qe.type;A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe);let Ke=cr(Qe);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,xt),R.bufferData(R.PIXEL_PACK_BUFFER,Be.byteLength,R.STREAM_READ),R.readPixels(X,de,oe,ae,_e.convert(at),_e.convert(dt),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let Jt=ve!==null?ye.get(ve).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,Jt);let Ft=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Jg(R,Ft,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,xt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Be),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(xt),R.deleteSync(Ft),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,de=0){let oe=Math.pow(2,-de),ae=Math.floor(A.image.width*oe),Be=Math.floor(A.image.height*oe),Ze=X!==null?X.x:0,Fe=X!==null?X.y:0;Le.setTexture2D(A,0),R.copyTexSubImage2D(R.TEXTURE_2D,de,0,0,Ze,Fe,ae,Be),J.unbindTexture()},this.copyTextureToTexture=function(A,X,de=null,oe=null,ae=0,Be=0){let Ze,Fe,ke,Qe,at,dt,Ke,xt,Jt,Ft=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(de!==null)Ze=de.max.x-de.min.x,Fe=de.max.y-de.min.y,ke=de.isBox3?de.max.z-de.min.z:1,Qe=de.min.x,at=de.min.y,dt=de.isBox3?de.min.z:0;else{let _t=Math.pow(2,-ae);Ze=Math.floor(Ft.width*_t),Fe=Math.floor(Ft.height*_t),A.isDataArrayTexture?ke=Ft.depth:A.isData3DTexture?ke=Math.floor(Ft.depth*_t):ke=1,Qe=0,at=0,dt=0}oe!==null?(Ke=oe.x,xt=oe.y,Jt=oe.z):(Ke=0,xt=0,Jt=0);let Bt=_e.convert(X.format),cn=_e.convert(X.type),Ye;X.isData3DTexture?(Le.setTexture3D(X,0),Ye=R.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Le.setTexture2DArray(X,0),Ye=R.TEXTURE_2D_ARRAY):(Le.setTexture2D(X,0),Ye=R.TEXTURE_2D),J.activeTexture(R.TEXTURE0),J.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,X.flipY),J.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),J.pixelStorei(R.UNPACK_ALIGNMENT,X.unpackAlignment);let tn=J.getParameter(R.UNPACK_ROW_LENGTH),yt=J.getParameter(R.UNPACK_IMAGE_HEIGHT),ur=J.getParameter(R.UNPACK_SKIP_PIXELS),un=J.getParameter(R.UNPACK_SKIP_ROWS),hr=J.getParameter(R.UNPACK_SKIP_IMAGES);J.pixelStorei(R.UNPACK_ROW_LENGTH,Ft.width),J.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ft.height),J.pixelStorei(R.UNPACK_SKIP_PIXELS,Qe),J.pixelStorei(R.UNPACK_SKIP_ROWS,at),J.pixelStorei(R.UNPACK_SKIP_IMAGES,dt);let ki=A.isDataArrayTexture||A.isData3DTexture,Mi=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let _t=ye.get(A),rn=ye.get(X),Yn=ye.get(_t.__renderTarget),Gt=ye.get(rn.__renderTarget);J.bindFramebuffer(R.READ_FRAMEBUFFER,Yn.__webglFramebuffer),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let $t=0;$t<ke;$t++)ki&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(A).__webglTexture,ae,dt+$t),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(X).__webglTexture,Be,Jt+$t)),R.blitFramebuffer(Qe,at,Qe+Ze,at+Fe,Ke,xt,Ke+Ze,xt+Fe,R.DEPTH_BUFFER_BIT,R.NEAREST);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||ye.has(A)){let _t=ye.get(A),rn=ye.get(X);J.bindFramebuffer(R.READ_FRAMEBUFFER,O),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,Y);for(let Yn=0;Yn<ke;Yn++)ki?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.__webglTexture,ae,dt+Yn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_t.__webglTexture,ae),Mi?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,rn.__webglTexture,Be,Jt+Yn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,rn.__webglTexture,Be),ae!==0?R.blitFramebuffer(Qe,at,Qe+Ze,at+Fe,Ke,xt,Ke+Ze,xt+Fe,R.COLOR_BUFFER_BIT,R.NEAREST):Mi?R.copyTexSubImage3D(Ye,Be,Ke,xt,Jt+Yn,Qe,at,Ze,Fe):R.copyTexSubImage2D(Ye,Be,Ke,xt,Qe,at,Ze,Fe);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Mi?A.isDataTexture||A.isData3DTexture?R.texSubImage3D(Ye,Be,Ke,xt,Jt,Ze,Fe,ke,Bt,cn,Ft.data):X.isCompressedArrayTexture?R.compressedTexSubImage3D(Ye,Be,Ke,xt,Jt,Ze,Fe,ke,Bt,Ft.data):R.texSubImage3D(Ye,Be,Ke,xt,Jt,Ze,Fe,ke,Bt,cn,Ft):A.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Be,Ke,xt,Ze,Fe,Bt,cn,Ft.data):A.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Be,Ke,xt,Ft.width,Ft.height,Bt,Ft.data):R.texSubImage2D(R.TEXTURE_2D,Be,Ke,xt,Ze,Fe,Bt,cn,Ft);J.pixelStorei(R.UNPACK_ROW_LENGTH,tn),J.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yt),J.pixelStorei(R.UNPACK_SKIP_PIXELS,ur),J.pixelStorei(R.UNPACK_SKIP_ROWS,un),J.pixelStorei(R.UNPACK_SKIP_IMAGES,hr),Be===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&R.generateMipmap(Ye),J.unbindTexture()},this.initRenderTarget=function(A){ye.get(A).__webglFramebuffer===void 0&&Le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Le.setTextureCube(A,0):A.isData3DTexture?Le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Le.setTexture2DArray(A,0):Le.setTexture2D(A,0),J.unbindTexture()},this.resetState=function(){ne=0,j=0,ve=null,J.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};function F0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new zt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in h.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=U0(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let m=U0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function U0(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new Vt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){let x=u.getComponent(f,m);a.setComponent(f+h,m,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function bd(n,e){if(e===jf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ko||e===nl){let t=n.getIndex();if(t===null){let s=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===ko)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function B0(n){let e=new Map,t=new Map,i=n.clone();return k0(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function k0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)k0(n.children[i],e.children[i],t)}var Bu=class extends Zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new ku(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ku(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Vd(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Lr.extractUrlBase(e);o=Lr.resolveURL(c,this.path)}else o=Lr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Po(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===W0){try{o[gt.KHR_BINARY_GLTF]=new Gd(e)}catch(h){r&&r(h);return}s=JSON.parse(o[gt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Kd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case gt.KHR_MATERIALS_UNLIT:o[h]=new Td;break;case gt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Wd(s,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:o[h]=new Xd;break;case gt.KHR_MESH_QUANTIZATION:o[h]=new qd;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function M1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function jt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ed=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Xe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Wn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rs(u),c.distance=h;break;case"spot":c=new za(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Td=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return ln}extendParams(e,t,i){let r=[];e.color=new Xe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(r)}},Ad=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Rd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(s,s)}return Promise.all(r)}},Cd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(r)}},Pd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Id=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},Ld=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Wn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Tt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},Dd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},Nd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(s[0],s[1],s[2],Wn),Promise.all(r)}},Od=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ud=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(s[0],s[1],s[2],Wn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Tt)),Promise.all(r)}},Fd=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},Bd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},kd=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},zd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Hd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},ku=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},Vd=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let c of r.primitives)if(c.mode!==xi.TRIANGLES&&c.mode!==xi.TRIANGLE_STRIP&&c.mode!==xi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let x=new rt,g=new I,p=new Kt,b=new I(1,1,1),S=new Ts(m.geometry,m.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,x.compose(g,p,b));let v=null;for(let M in l)if(M==="_COLOR_0"){let w=l[M];S.instanceColor=new wr(w.array,w.itemSize,w.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(v===null){let y=S.geometry;v=new zt,v.name=y.name;for(let E in y.attributes)v.setAttribute(E,y.attributes[E]);for(let E in y.morphAttributes)v.morphAttributes[E]=y.morphAttributes[E];y.index!==null&&v.setIndex(y.index),v.morphTargetsRelative=y.morphTargetsRelative;for(let E of y.groups)v.addGroup(E.start,E.count,E.materialIndex);y.boundingBox!==null&&(v.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(v.boundingSphere=y.boundingSphere.clone()),v.drawRange.start=y.drawRange.start,v.drawRange.count=y.drawRange.count,v.userData=Object.assign({},y.userData),S.geometry=v}let w=l[M];v.setAttribute(M,new wr(w.array,w.itemSize,w.normalized))}Xt.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},W0="glTF",cl=12,z0={JSON:1313821514,BIN:5130562},Gd=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,cl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==W0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-cl,s=new DataView(e,cl),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===z0.JSON){let c=new Uint8Array(e,cl+o,a);this.content=i.decode(c)}else if(l===z0.BIN){let c=cl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Yd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Yd[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=Go[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(d)},a,c,Wn,f)})})}},Xd=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},qd=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},zu=class extends Yi{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,f=h*h,d=f*h,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,b=1-g,S=p-f+h;for(let v=0;v!==a;v++){let M=o[x+v+a],w=o[x+v+l]*u,y=o[m+v+a],E=o[m+v]*u;s[v]=b*M+S*w+g*y+p*E}return s}},S1=new Kt,$d=class extends zu{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return S1.fromArray(s).normalize().toArray(s),s}},xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Go={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},H0={9728:Yt,9729:Zt,9984:Yc,9985:Fo,9986:Ps,9987:gi},V0={33071:hi,33648:_o,10497:Ci},Md={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w1={CUBICSPLINE:void 0,LINEAR:ws,STEP:Ss},Sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Nn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),n.DefaultMaterial}function Ds(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Qi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function T1(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function A1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R1(n){let e,t=n.extensions&&n.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wd(t.attributes):e=n.indices+":"+wd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+wd(n.targets[i]);return e}function wd(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Zd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var P1=new rt,Kd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new M1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?(this.textureLoader=new Ba(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ga(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Po(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ds(s,a,r),Qi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(Lr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=Md[r.type],a=Go[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Vt(c,o,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=Md[r.type],c=Go[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0,x,g;if(d&&d!==h){let p=Math.floor(f/d),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,S=t.cache.get(b);S||(x=new c(a,p*d,r.count*d/u),S=new Yr(x,d/u),t.cache.add(b,S)),g=new Ln(S,l,f%d/u,m)}else a===null?x=new c(r.count*l):x=new c(a,f,r.count*l),g=new Vt(x,l,m);if(r.sparse!==void 0){let p=Md.SCALAR,b=Go[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,M=new b(o[1],S,r.sparse.count*p),w=new c(o[2],v,r.sparse.count*l);a!==null&&(g=new Vt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let y=0,E=M.length;y<E;y++){let D=M[y];if(g.setX(D,w[y*l]),l>=2&&g.setY(D,w[y*l+1]),l>=3&&g.setZ(D,w[y*l+2]),l>=4&&g.setW(D,w[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=H0[f.magFilter]||Zt,u.minFilter=H0[f.minFilter]||gi,u.wrapS=V0[f.wrapS]||Ci,u.wrapT=V0[f.wrapT]||Ci,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Yt&&u.minFilter!==Zt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=r.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,m){t.parse(f,d,m)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,m){let x=d;t.isImageBitmapLoader===!0&&(x=function(g){let p=new fn(g);p.needsUpdate=!0,d(p)}),t.load(Lr.resolveURL(f,s.path),x,void 0,m)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Qi(f,o),f.userData.mimeType=o.mimeType||C1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[gt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Co,Dn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Er,Dn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Nn}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},l=s.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let h=r[gt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Wn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ot);let u=s.alphaMode||Sd.OPAQUE;if(u===Sd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Sd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ln&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ln&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ln){let h=s.emissiveFactor;a.emissive=new Xe().setRGB(h[0],h[1],h[2],Wn)}return s.emissiveTexture!==void 0&&o!==ln&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),Qi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ds(r,h,s),h})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return G0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=R1(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=G0(new zt,c,t),c.mode===xi.TRIANGLE_STRIP?f=f.then(d=>bd(d,nl)):c.mode===xi.TRIANGLE_FAN&&(f=f.then(d=>bd(d,ko))),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?E1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],g=o[d],p,b=c[d];if(g.mode===xi.TRIANGLES||g.mode===xi.TRIANGLE_STRIP||g.mode===xi.TRIANGLE_FAN||g.mode===void 0){let S=s.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&v?new wa(x,b):new ut(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===xi.LINES)p=new Ta(x,b);else if(g.mode===xi.LINE_STRIP)p=new qi(x,b);else if(g.mode===xi.LINE_LOOP)p=new Aa(x,b);else if(g.mode===xi.POINTS)p=new Ra(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&A1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Qi(p,s),g.extensions&&Ds(r,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ds(r,h[0],s),h[0];let f=new Et;s.extensions&&Ds(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new hn(rs.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ii(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Qi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new rt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ea(a,l)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],m=r.samplers[d.sampler],x=d.target,g=x.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,b=r.parameters!==void 0?r.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let S=0,v=f.length;S<v;S++){let M=f[S],w=d[S],y=m[S],E=x[S],D=g[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let N=i._createAnimationTracks(M,w,y,E,D);if(N)for(let k=0;k<N.length;k++)p.push(N[k])}let b=new Fa(s,void 0,p);return Qi(b,r),b})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,P1)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new I().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Ao:c.length>1?u=new Et:c.length===1?u=c[0]:u=new Xt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Qi(u,s),s.extensions&&Ds(i,u,s),s.matrix!==void 0){let h=new rt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new Et;i.name&&(s.name=r.createUniqueName(i.name)),Qi(s,i),i.extensions&&Ds(t,s,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?s.add(B0(f)):s.add(f)}let c=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof Dn||f instanceof fn)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}ss[s.path]===ss.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(ss[s.path]){case ss.weights:u=Cr;break;case ss.rotation:u=Pr;break;case ss.translation:case ss.scale:u=Kr;break;default:i.itemSize===1?u=Cr:u=Kr;break}let h=r.interpolation!==void 0?w1[r.interpolation]:ws,f=this._getArrayFromAccessor(i);for(let d=0,m=l.length;d<m;d++){let x=new u(l[d]+"."+ss[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Zd(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Pr?$d:zu;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function I1(n,e,t){let i=e.attributes,r=new Nt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=Zd(Go[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=Zd(Go[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new _n;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function G0(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Yd[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return mt.workingColorSpace!==Wn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),Qi(n,e),I1(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?T1(n,e.targets,t):n})}var X0={type:"change"},Jd={type:"start"},$0={type:"end"},Hu=new Xi,q0=new yn,L1=Math.cos(70*rs.DEG2RAD),gn=new I,Qn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jd=1e-6,Vu=class extends Xa{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Kt,this._lastTargetPosition=new I,this._quat=new Kt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qr,this._sphericalDelta=new Qr,this._scale=1,this._panOffset=new I,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new I,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=N1.bind(this),this._onPointerDown=D1.bind(this),this._onPointerUp=O1.bind(this),this._onContextMenu=V1.bind(this),this._onMouseWheel=B1.bind(this),this._onKeyDown=k1.bind(this),this._onTouchStart=z1.bind(this),this._onTouchMove=H1.bind(this),this._onMouseDown=U1.bind(this),this._onMouseMove=F1.bind(this),this._interceptControlDown=G1.bind(this),this._interceptControlUp=W1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(X0),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;gn.copy(t).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Qn:i>Math.PI&&(i-=Qn),r<-Math.PI?r+=Qn:r>Math.PI&&(r-=Qn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),t.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=gn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hu.origin.copy(this.object.position),Hu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hu.direction))<L1?this.object.lookAt(this.target):(q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hu.intersectPlane(q0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>jd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jd||this._lastTargetPosition.distanceToSquared(this.target)>jd?(this.dispatchEvent(X0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qn/60*this.autoRotateSpeed*e:Qn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gn.setFromMatrixColumn(t,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,t){this.screenSpacePanning===!0?gn.setFromMatrixColumn(t,1):(gn.setFromMatrixColumn(t,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;gn.copy(r).sub(this.target);let s=gn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function D1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function N1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function O1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($0),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function U1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=At.DOLLY;break;case es.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}break;case es.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Jd)}function F1(n){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function B1(n){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(n.preventDefault(),this.dispatchEvent(Jd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($0))}function k1(n){this.enabled!==!1&&this._handleKeyDown(n)}function z1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1){this.state=At.NONE;break}this._handleTouchStartRotate(n),this.state=At.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1){this.state=At.NONE;break}this._handleTouchStartPan(n),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=At.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Jd)}function H1(n){switch(this._trackPointer(n),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=At.NONE}}function V1(n){this.enabled!==!1&&n.preventDefault()}function G1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gu=class extends Xn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new $i;e.deleteAttribute("uv");let t=new Nn({side:Sn}),i=new Nn,r=new Rs(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new ut(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ts(e,i,6),a=new Xt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ut(e,Wo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ut(e,Wo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ut(e,Wo(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ut(e,Wo(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new ut(e,Wo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new ut(e,Wo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Wo(n){return new Oa({color:0,emissive:16777215,emissiveIntensity:n})}var Fn=Uint8Array,si=Uint16Array,rp=Int32Array,sp=new Fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),op=new Fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Y0=new Fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ex=function(n,e){for(var t=new si(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new rp(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},tx=ex(sp,2),X1=tx.b,ep=tx.r;X1[28]=258,ep[258]=28;var nx=ex(op,0),DI=nx.b,Z0=nx.r,tp=new si(32768);for(Rt=0;Rt<32768;++Rt)Nr=(Rt&43690)>>1|(Rt&21845)<<1,Nr=(Nr&52428)>>2|(Nr&13107)<<2,Nr=(Nr&61680)>>4|(Nr&3855)<<4,tp[Rt]=((Nr&65280)>>8|(Nr&255)<<8)>>1;var Nr,Rt,fl=(function(n,e,t){for(var i=n.length,r=0,s=new si(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new si(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new si(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[tp[h]>>l]=c}else for(a=new si(i),r=0;r<i;++r)n[r]&&(a[r]=tp[o[n[r]-1]++]>>15-n[r]);return a}),Ns=new Fn(288);for(Rt=0;Rt<144;++Rt)Ns[Rt]=8;var Rt;for(Rt=144;Rt<256;++Rt)Ns[Rt]=9;var Rt;for(Rt=256;Rt<280;++Rt)Ns[Rt]=7;var Rt;for(Rt=280;Rt<288;++Rt)Ns[Rt]=8;var Rt,Wu=new Fn(32);for(Rt=0;Rt<32;++Rt)Wu[Rt]=5;var Rt,q1=fl(Ns,9,0);var $1=fl(Wu,5,0);var ix=function(n){return(n+7)/8|0},rx=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Fn(n.subarray(e,t))};var Y1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Xu=function(n,e,t){var i=new Error(e||Y1[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Xu),!t)throw i;return i};var Or=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},ul=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},Qd=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:ox,l:0};if(r==1){var o=new Fn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(M,w){return M.f-w.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var d=new si(f+1),m=np(t[u-1],d,0);if(m>e){var i=0,x=0,g=m-e,p=1<<g;for(s.sort(function(w,y){return d[y.s]-d[w.s]||w.f-y.f});i<r;++i){var b=s[i].s;if(d[b]>e)x+=p-(1<<m-d[b]),d[b]=e;else break}for(x>>=g;x>0;){var S=s[i].s;d[S]<e?x-=1<<e-d[S]++-1:++i}for(;i>=0&&x;--i){var v=s[i].s;d[v]==e&&(--d[v],++x)}m=e}return{t:new Fn(d),l:m}},np=function(n,e,t){return n.s==-1?Math.max(np(n.l,e,t+1),np(n.r,e,t+1)):e[n.s]=t},K0=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new si(++e),i=0,r=n[0],s=1,o=function(l){t[i++]=l},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},hl=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},sx=function(n,e,t){var i=t.length,r=ix(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},j0=function(n,e,t,i,r,s,o,a,l,c,u){Or(e,u++,t),++r[256];for(var h=Qd(r,15),f=h.t,d=h.l,m=Qd(s,15),x=m.t,g=m.l,p=K0(f),b=p.c,S=p.n,v=K0(x),M=v.c,w=v.n,y=new si(19),E=0;E<b.length;++E)++y[b[E]&31];for(var E=0;E<M.length;++E)++y[M[E]&31];for(var D=Qd(y,7),N=D.t,k=D.l,q=19;q>4&&!N[Y0[q-1]];--q);var G=c+5<<3,O=hl(r,Ns)+hl(s,Wu)+o,Y=hl(r,f)+hl(s,x)+o+14+3*q+hl(y,N)+2*y[16]+3*y[17]+7*y[18];if(l>=0&&G<=O&&G<=Y)return sx(e,u,n.subarray(l,l+c));var ne,j,ve,ie;if(Or(e,u,1+(Y<O)),u+=2,Y<O){ne=fl(f,d,0),j=f,ve=fl(x,g,0),ie=x;var H=fl(N,k,0);Or(e,u,S-257),Or(e,u+5,w-1),Or(e,u+10,q-4),u+=14;for(var E=0;E<q;++E)Or(e,u+3*E,N[Y0[E]]);u+=3*q;for(var ee=[b,M],Ae=0;Ae<2;++Ae)for(var Ne=ee[Ae],E=0;E<Ne.length;++E){var Q=Ne[E]&31;Or(e,u,H[Q]),u+=N[Q],Q>15&&(Or(e,u,Ne[E]>>5&127),u+=Ne[E]>>12)}}else ne=q1,j=Ns,ve=$1,ie=Wu;for(var E=0;E<a;++E){var xe=i[E];if(xe>255){var Q=xe>>18&31;ul(e,u,ne[Q+257]),u+=j[Q+257],Q>7&&(Or(e,u,xe>>23&31),u+=sp[Q]);var re=xe&31;ul(e,u,ve[re]),u+=ie[re],re>3&&(ul(e,u,xe>>5&8191),u+=op[re])}else ul(e,u,ne[xe]),u+=j[xe]}return ul(e,u,ne[256]),u+j[256]},Z1=new rp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ox=new Fn(0),K1=function(n,e,t,i,r,s){var o=s.z||n.length,a=new Fn(i+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(i,a.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var h=Z1[e-1],f=h>>13,d=h&8191,m=(1<<t)-1,x=s.p||new si(32768),g=s.h||new si(m+1),p=Math.ceil(t/3),b=2*p,S=function(qe){return(n[qe]^n[qe+1]<<p^n[qe+2]<<b)&m},v=new rp(25e3),M=new si(288),w=new si(32),y=0,E=0,D=s.i||0,N=0,k=s.w||0,q=0;D+2<o;++D){var G=S(D),O=D&32767,Y=g[G];if(x[O]=Y,g[G]=O,k<=D){var ne=o-D;if((y>7e3||N>24576)&&(ne>423||!c)){u=j0(n,l,0,v,M,w,E,N,q,D-q,u),N=y=E=0,q=D;for(var j=0;j<286;++j)M[j]=0;for(var j=0;j<30;++j)w[j]=0}var ve=2,ie=0,H=d,ee=O-Y&32767;if(ne>2&&G==S(D-ee))for(var Ae=Math.min(f,ne)-1,Ne=Math.min(32767,D),Q=Math.min(258,ne);ee<=Ne&&--H&&O!=Y;){if(n[D+ve]==n[D+ve-ee]){for(var xe=0;xe<Q&&n[D+xe]==n[D+xe-ee];++xe);if(xe>ve){if(ve=xe,ie=ee,xe>Ae)break;for(var re=Math.min(ee,xe-2),V=0,j=0;j<re;++j){var te=D-ee+j&32767,Ie=x[te],We=te-Ie&32767;We>V&&(V=We,Y=te)}}}O=Y,Y=x[O],ee+=O-Y&32767}if(ie){v[N++]=268435456|ep[ve]<<18|Z0[ie];var Oe=ep[ve]&31,He=Z0[ie]&31;E+=sp[Oe]+op[He],++M[257+Oe],++w[He],k=D+ve,++y}else v[N++]=n[D],++M[n[D]]}}for(D=Math.max(D,k);D<o;++D)v[N++]=n[D],++M[n[D]];u=j0(n,l,c,v,M,w,E,N,q,D-q,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=g,s.p=x,s.i=D,s.w=k)}else{for(var D=s.w||0;D<o+c;D+=65535){var Je=D+65535;Je>=o&&(l[u/8|0]=c,Je=o),u=sx(l,u+1,n.subarray(D,Je))}s.i=o}return rx(a,0,i+ix(u)+r)},j1=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),J1=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=j1[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var Q1=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new Fn(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return K1(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},ax=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var En=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function eT(n,e){return Q1(n,e||{},0,0)}var lx=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=ax(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?t[o]=[s,a]:(t[o+="/"]=[new Fn(0),a],lx(s,o,t,i))}},J0=typeof TextEncoder<"u"&&new TextEncoder,tT=typeof TextDecoder<"u"&&new TextDecoder,nT=0;try{tT.decode(ox,{stream:!0}),nT=1}catch{}function dl(n,e){if(e){for(var t=new Fn(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(J0)return J0.encode(n);for(var r=n.length,s=new Fn(n.length+(n.length>>1)),o=0,a=function(u){s[o++]=u},i=0;i<r;++i){if(o+5>s.length){var l=new Fn(o+8+(r-i<<1));l.set(s),s=l}var c=n.charCodeAt(i);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++i)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return rx(s,0,o)}var ip=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Xu(9),e+=i+4}return e},Q0=function(n,e,t,i,r,s,o,a){var l=i.length,c=t.extra,u=a&&a.length,h=ip(c);En(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Xu(10),En(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(En(n,e,t.crc),En(n,e+4,s<0?-s-2:s),En(n,e+8,t.size)),En(n,e+12,l),En(n,e+14,h),e+=16,o!=null&&(En(n,e,u),En(n,e+6,t.attrs),En(n,e+10,o),e+=14),n.set(i,e),e+=l,h)for(var m in c){var x=c[m],g=x.length;En(n,e,+m),En(n,e+2,g),n.set(x,e+4),e+=4+g}return u&&(n.set(a,e),e+=u),e},iT=function(n,e,t,i,r){En(n,e,101010256),En(n,e+8,t),En(n,e+10,t),En(n,e+12,i),En(n,e+16,r)};function cx(n,e){e||(e={});var t={},i=[];lx(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=dl(o),f=h.length,d=c.comment,m=d&&dl(d),x=m&&m.length,g=ip(c.extra);f>65535&&Xu(11);var p=u?eT(l,c):l,b=p.length,S=J1();S.p(l),i.push(ax(c,{size:l.length,crc:S.d(),c:p,f:h,m,u:f!=o.length||m&&d.length!=x,o:r,compression:u})),r+=30+f+g+b,s+=76+2*(f+g)+(x||0)+b}for(var v=new Fn(s+22),M=r,w=s-r,y=0;y<i.length;++y){var h=i[y];Q0(v,h.o,h,h.f,h.u,h.c.length);var E=30+h.f.length+ip(h.extra);v.set(h.c,h.o+E),Q0(v,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+E+(h.m?h.m.length:0)}return iT(v,r,i.length,w,M),v}var Bn=class{constructor(e,t="",i=[],r=[]){this.name=e,this.type=t,this.metadata=i,this.properties=r,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(u=>{let h=u.key,f=u.value;if(Array.isArray(f)){let d=[];return d.push(`${h} = {`),f.forEach(m=>{d.push(`${t}		${m}`)}),d.push(`${t}	}`),d.join(`
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
${t}}`}},$u=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,r){this.parseAsync(e,r).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,r={},s="model.usda";r[s]=null;let o=sT(e,t.animations);t.animationTracks=o;let a=new Bn("Root","Xform"),l=new Bn("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",u=new Bn(c,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),u.addMetadata("sceneName",`"${c}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),l.addChild(u);let h,f={},d={};e.isScene?gx(e,u,f,i,r,t):xx(e,u,f,i,r,t);let m=pT(f,d,t.quickLookCompatible),x=o.size>0?{fps:t.animationFrameRate,endTimeCode:oT(t.animations)*t.animationFrameRate}:null;h=mx(x)+`
`+a.toString()+`

`+m.toString(),r[s]=dl(h),h=null;for(let p in d){let b=d[p];if(b.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");b=await this.textureUtils.decompress(b)}let S=rT(b.image,b.flipY,t.maxTextureSize),v=b.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",M=await new Promise(w=>S.toBlob(w,v));r[`textures/Texture_${p}.${px(b)}`]=new Uint8Array(await M.arrayBuffer())}let g=0;for(let p in r){let b=r[p],S=34+p.length;g+=S;let v=g&63;if(v!==4){let M=64-v,w=new Uint8Array(M);r[p]=[b,{extra:{12345:w}}]}g=b.length}return cx(r,{level:0,mtime:new Date})}};function dx(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function px(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function rT(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),r=document.createElement("canvas");r.width=n.width*Math.min(1,i),r.height=n.height*Math.min(1,i);let s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(n,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var Mt=7;function mx(n=null){return`#usda 1.0
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
`}function sT(n,e){let t=new Map;for(let i=0;i<e.length;i++){let r=e[i];for(let s=0;s<r.tracks.length;s++){let o=r.tracks[s],a=Lt.parseTrackName(o.name),l=Lt.findNode(n,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let u=t.get(l);u===void 0&&(u={},t.set(l,u)),u[c]=o}}return t}function oT(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function ux(n,e,t,i){let r=t.times,s=t.values,o=[];for(let a=0;a<r.length;a++){let l=a*3;o.push(`${(r[a]*i).toPrecision(Mt)}: (${s[l].toPrecision(Mt)}, ${s[l+1].toPrecision(Mt)}, ${s[l+2].toPrecision(Mt)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function aT(n,e){let t=n.times,i=n.values,r=[];for(let s=0;s<t.length;s++){let o=s*4;r.push(`${(t[s]*e).toPrecision(Mt)}: (${i[o+3].toPrecision(Mt)}, ${i[o].toPrecision(Mt)}, ${i[o+1].toPrecision(Mt)}, ${i[o+2].toPrecision(Mt)})`)}return`quatf xformOp:orient.timeSamples = {
	${r.join(`,
	`)},
}`}function gx(n,e,t,i,r,s){for(let o=0,a=n.children.length;o<a;o++)xx(n.children[o],e,t,i,r,s)}function xx(n,e,t,i,r,s){if(n.visible===!1&&s.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),c=l?n.material:[n.material];for(let h=0;h<c.length;h++){let f=c[h];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let u=c.map(h=>t[h.uuid]);if(l===!1){let h=`geometries/Geometry_${a.id}.usda`;if(!(h in r)){let f=uT(a);r[h]=dl(mx()+`
`+f.toString())}}o=lT(n,a,u,i,s)}else n.isCamera?o=xT(n,i,s):o=_x(n,i,s);e.addChild(o),gx(n,o,t,i,r,s)}function yx(n,e,t){let i=t.animationTracks.get(e),r=e.pivot!==null;if(!r&&i===void 0){let c=cT(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${c}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let s=t.animationFrameRate,o=e.position,a=e.quaternion,l=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(ux("xformOp:translate","float3",i.position,s)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(Mt)}, ${o.y.toPrecision(Mt)}, ${o.z.toPrecision(Mt)})`),r){let c=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(Mt)}, ${c.y.toPrecision(Mt)}, ${c.z.toPrecision(Mt)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(aT(i.quaternion,s)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(Mt)}, ${a.x.toPrecision(Mt)}, ${a.y.toPrecision(Mt)}, ${a.z.toPrecision(Mt)})`),i!==void 0&&i.scale!==void 0?n.addProperty(ux("xformOp:scale","float3",i.scale,s)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(Mt)}, ${l.y.toPrecision(Mt)}, ${l.z.toPrecision(Mt)})`),r?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function _x(n,e,t){let i=dx(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Bn(i,"Xform");return yx(r,n,t),r}function lT(n,e,t,i,r){let s=_x(n,i,r);return t.length===1?(s.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),s.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),s.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):s.addChild(vx(e,t)),s}function cT(n){let e=n.elements;return`( ${qu(e,0)}, ${qu(e,4)}, ${qu(e,8)}, ${qu(e,12)} )`}function qu(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function uT(n){let e=new Bn("Geometry"),t=vx(n);return e.addChild(t),e}function vx(n,e=null){let t="Geometry",i=n.attributes,r=i.position.count,s=new Bn(t,"Mesh");s.addProperty(`int[] faceVertexCounts = [${hT(n)}]`),s.addProperty(`int[] faceVertexIndices = [${fT(n)}]`),s.addProperty(`normal3f[] normals = [${ap(i.normal,r)}]`,['interpolation = "vertex"']),s.addProperty(`point3f[] points = [${ap(i.position,r)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=i["uv"+l];c!==void 0&&s.addProperty(`texCoord2f[] primvars:st${l} = [${dT(c)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&s.addProperty(`color3f[] primvars:displayColor = [${ap(o,r)}]`,['interpolation = "vertex"']),s.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let c=0;c<a.length;c++){let u=a[c],h=e[u.materialIndex];if(h===void 0)continue;let f=Math.floor(u.start/3),d=Math.min(f+Math.floor(u.count/3),l),m=[];for(let g=f;g<d;g++)m.push(g);let x=new Bn(`subset_${c}`,"GeomSubset");x.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),x.addProperty('uniform token elementType = "face"'),x.addProperty('uniform token familyName = "materialBind"'),x.addProperty(`int[] indices = [${m.join(", ")}]`),x.addProperty(`rel material:binding = </Materials/Material_${h.id}>`),s.addChild(x)}}return s}function hT(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function fT(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let r=0;r<i;r++)t.push(r)}return t.join(", ")}function ap(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let r=n.getX(i),s=n.getY(i),o=n.getZ(i);t.push(`(${r.toPrecision(Mt)}, ${s.toPrecision(Mt)}, ${o.toPrecision(Mt)})`)}return t.join(", ")}function dT(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),r=n.getY(t);e.push(`(${i.toPrecision(Mt)}, ${1-r.toPrecision(Mt)})`)}return e.join(", ")}function pT(n,e,t=!1){let i=new Bn("Materials");for(let r in n){let s=n[r];i.addChild(mT(s,e,t))}return i}function mT(n,e,t=!1){let i=new Bn(`Material_${n.id}`,"Material");function r(o,a,l){let c=o.source.id+"_"+o.flipY;e[c]=o;let u=o.channel>0?"st"+o.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),m=o.rotation,x=Math.sin(m),g=Math.cos(m);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=x/f.x,d.y+=g-1):(d.x+=x*f.x,d.y+=(1-g)*f.y);let p=new Bn(`PrimvarReader_${a}`,"Shader");p.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),p.addProperty("float2 inputs:fallback = (0.0, 0.0)"),p.addProperty(`string inputs:varname = "${u}"`),p.addProperty("float2 outputs:result");let b=new Bn(`Transform2d_${a}`,"Shader");b.addProperty('uniform token info:id = "UsdTransform2d"'),b.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),b.addProperty(`float inputs:rotation = ${(m*(180/Math.PI)).toFixed(Mt)}`),b.addProperty(`float2 inputs:scale = ${fx(f)}`),b.addProperty(`float2 inputs:translation = ${fx(d)}`),b.addProperty("float2 outputs:result");let S=new Bn(`Texture_${o.id}_${a}`,"Shader");if(S.addProperty('uniform token info:id = "UsdUVTexture"'),S.addProperty(`asset inputs:file = @textures/Texture_${c}.${px(o)}@`),S.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let v=a==="diffuse"?n.opacity:1;S.addProperty(`float4 inputs:scale = ${gT(l,v)}`)}if(a==="normal"){let v=n.normalScale.x;S.addProperty(`float4 inputs:scale = (${2*v}, ${2*v}, 2, 1)`),S.addProperty(`float4 inputs:bias = (${-v}, ${-v}, -1, 0)`)}return S.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===Ni?"raw":"sRGB"}"`),S.addProperty(`token inputs:wrapS = "${h[o.wrapS]}"`),S.addProperty(`token inputs:wrapT = "${h[o.wrapT]}"`),S.addProperty("float outputs:r"),S.addProperty("float outputs:g"),S.addProperty("float outputs:b"),S.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&S.addProperty("float outputs:a"),[p,b,S]}n.side===Ot&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let s=new Bn("PreviewSurface","Shader");if(s.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(s.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),s.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),r(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):s.addProperty(`color3f inputs:diffuseColor = ${hx(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){s.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new Xe(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);r(n.emissiveMap,"emissive",a).forEach(c=>i.addChild(c))}else n.emissive.getHex()>0&&s.addProperty(`color3f inputs:emissiveColor = ${hx(n.emissive)}`)}if(n.normalMap&&(s.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),r(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){s.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new Xe(o,o,o);r(n.aoMap,"occlusion",a).forEach(c=>i.addChild(c))}if(n.roughnessMap){s.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new Xe(n.roughness,n.roughness,n.roughness);r(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){s.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new Xe(n.metalness,n.metalness,n.metalness);r(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),s.addProperty("float inputs:opacityThreshold = 0.0001"),r(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):s.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){s.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new Xe(n.clearcoat,n.clearcoat,n.clearcoat);r(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){s.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new Xe(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);r(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);s.addProperty(`float inputs:ior = ${n.ior}`)}return s.addProperty("int inputs:useSpecularWorkflow = 0"),s.addProperty("token outputs:surface"),i.addChild(s),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function hx(n){return`(${n.r}, ${n.g}, ${n.b})`}function gT(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function fx(n){return`(${n.x}, ${n.y})`}function xT(n,e,t){let i=dx(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Bn(i,"Camera");yx(r,n,t);let s=n.isOrthographicCamera?"orthographic":"perspective";r.addProperty(`token projection = "${s}"`);let o=`(${n.near.toPrecision(Mt)}, ${n.far.toPrecision(Mt)})`;r.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(Mt):a=n.getFilmWidth().toPrecision(Mt),r.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(Mt):l=n.getFilmHeight().toPrecision(Mt),r.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let c=n.getFocalLength().toPrecision(Mt);r.addProperty(`float focalLength = ${c}`);let u=n.focus.toPrecision(Mt);r.addProperty(`float focusDistance = ${u}`)}return r}var bx=new Nt,Yu=new I,Oi=class extends Va{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Wt(e,3)),this.setAttribute("uv",new Wt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Jr(t,6,1);return this.setAttribute("instanceStart",new Ln(i,3,0)),this.setAttribute("instanceEnd",new Ln(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Jr(t,6,1);return this.setAttribute("instanceColorStart",new Ln(i,3,0)),this.setAttribute("instanceColorEnd",new Ln(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Na(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),bx.setFromBufferAttribute(t),this.boundingBox.union(bx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yu.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yu)),Yu.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Yu));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};ze.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ge},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$n.line={uniforms:rl.merge([ze.common,ze.fog,ze.line]),vertexShader:`
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
		`};var er=class extends vn{constructor(e){super({type:"LineMaterial",uniforms:rl.clone($n.line.uniforms),vertexShader:$n.line.vertexShader,fragmentShader:$n.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var lp=new wt,Mx=new I,Sx=new I,Tn=new wt,An=new wt,tr=new wt,cp=new I,up=new rt,Rn=new Wa,wx=new I,Zu=new Nt,Ku=new _n,nr=new wt,ir,Os;function Ex(n,e,t){return nr.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),nr.multiplyScalar(1/nr.w),nr.x=Os/t.width,nr.y=Os/t.height,nr.applyMatrix4(n.projectionMatrixInverse),nr.multiplyScalar(1/nr.w),Math.abs(Math.max(nr.x,nr.y))}function yT(n,e){let t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Rn.start.fromBufferAttribute(r,a),Rn.end.fromBufferAttribute(s,a),Rn.applyMatrix4(t);let c=new I,u=new I;ir.distanceSqToSegment(Rn.start,Rn.end,u,c),u.distanceTo(c)<Os*.5&&e.push({point:u,pointOnLine:c,distance:ir.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function _T(n,e,t){let i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;ir.at(1,tr),tr.w=1,tr.applyMatrix4(e.matrixWorldInverse),tr.applyMatrix4(i),tr.multiplyScalar(1/tr.w),tr.x*=s.x/2,tr.y*=s.y/2,tr.z=0,cp.copy(tr),up.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(Tn.fromBufferAttribute(l,f),An.fromBufferAttribute(c,f),Tn.w=1,An.w=1,Tn.applyMatrix4(up),An.applyMatrix4(up),Tn.z>h&&An.z>h)continue;if(Tn.z>h){let S=Tn.z-An.z,v=(Tn.z-h)/S;Tn.lerp(An,v)}else if(An.z>h){let S=An.z-Tn.z,v=(An.z-h)/S;An.lerp(Tn,v)}Tn.applyMatrix4(i),An.applyMatrix4(i),Tn.multiplyScalar(1/Tn.w),An.multiplyScalar(1/An.w),Tn.x*=s.x/2,Tn.y*=s.y/2,An.x*=s.x/2,An.y*=s.y/2,Rn.start.copy(Tn),Rn.start.z=0,Rn.end.copy(An),Rn.end.z=0;let x=Rn.closestPointToPointParameter(cp,!0);Rn.at(x,wx);let g=rs.lerp(Tn.z,An.z,x),p=g>=-1&&g<=1,b=cp.distanceTo(wx)<Os*.5;if(p&&b){Rn.start.fromBufferAttribute(l,f),Rn.end.fromBufferAttribute(c,f),Rn.start.applyMatrix4(o),Rn.end.applyMatrix4(o);let S=new I,v=new I;ir.distanceSqToSegment(Rn.start,Rn.end,v,S),t.push({point:v,pointOnLine:S,distance:ir.origin.distanceTo(v),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var os=class extends ut{constructor(e=new Oi,t=new er({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Mx.fromBufferAttribute(t,o),Sx.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Mx.distanceTo(Sx);let s=new Jr(r,2,1);return e.setAttribute("instanceDistanceStart",new Ln(s,1,0)),e.setAttribute("instanceDistanceEnd",new Ln(s,1,1)),this}raycast(e,t){let i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ir=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Os=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Ku.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Os*.5;else{let h=Math.max(r.near,Ku.distanceToPoint(ir.origin));c=Ex(r,h,l.resolution)}if(Ku.radius+=c,ir.intersectsSphere(Ku)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Zu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Os*.5;else{let h=Math.max(r.near,Zu.distanceToPoint(ir.origin));u=Ex(r,h,l.resolution)}Zu.expandByScalar(u),ir.intersectsBox(Zu)!==!1&&(i?yT(this,t):_T(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(lp),this.material.uniforms.resolution.value.set(lp.z,lp.w))}};var Rx="blueprints.edgeMode",vT="blueprints.edgesEnabled",Us="none",Fs="transparent",ml="opaque",bT=20,Cx=2.5,Px=0,Ju=35e-5,fp=2e-6;function MT(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*fp}var pl=1,Ix=4,ST=.0012,wT=.0036,ET=.02,TT=.0035,Tx=.012;function Ax(n){return n===Us||n===Fs||n===ml?n:n==="1"||n==="true"?Fs:n==="0"||n==="false"?Us:null}function Lx(){try{let n=Ax(localStorage.getItem(Rx));if(n)return n;let e=Ax(localStorage.getItem(vT));if(e)return pp(e),e}catch{}return Fs}function pp(n){try{localStorage.setItem(Rx,n)}catch{}}function kn(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function Dx(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new La(n,bT),i=t.getAttribute("position"),r=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),r}function AT(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var ju=new I;function Nx(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],r=n[t+1],s=n[t+2],o=n[t+3],a=n[t+4],l=n[t+5],c=o-i,u=a-r,h=l-s,f=Math.hypot(c,u,h);f<1e-6||e.push({ax:i,ay:r,az:s,bx:o,by:a,bz:l,dx:c/f,dy:u/f,dz:h/f,len:f})}return e}function RT(n,e,t,i,r,s){let o=d=>Math.round(d/5e-4),a=o(n),l=o(e),c=o(t),u=o(i),h=o(r),f=o(s);if(a>u||a===u&&l>h||a===u&&l===h&&c>f){let d=a;a=u,u=d;let m=l;l=h,h=m;let x=c;c=f,f=x}return`${a},${l},${c},${u},${h},${f}`}function Ox(n){let e=Nx(n),t=[],i=new Set;for(let r=0;r<e.length;r++){let s=e[r];for(let o=r+1;o<e.length;o++){let a=e[o];if(Math.abs(s.dx*a.dx+s.dy*a.dy+s.dz*a.dz)<.985)continue;let c=s.ax-a.ax,u=s.ay-a.ay,h=s.az-a.az,f=c*s.dx+u*s.dy+h*s.dz,d=c-f*s.dx,m=u-f*s.dy,x=h-f*s.dz,g=Math.hypot(d,m,x);if(g<ST||g>wT)continue;let p=(a.ax-s.ax)*s.dx+(a.ay-s.ay)*s.dy+(a.az-s.az)*s.dz,b=(a.bx-s.ax)*s.dx+(a.by-s.ay)*s.dy+(a.bz-s.az)*s.dz,S=Math.max(0,Math.min(p,b)),v=Math.min(s.len,Math.max(p,b));if(v-S<ET)continue;let M=-d/g*(g*.5),w=-m/g*(g*.5),y=-x/g*(g*.5),E=s.ax+s.dx*S+M,D=s.ay+s.dy*S+w,N=s.az+s.dz*S+y,k=s.ax+s.dx*v+M,q=s.ay+s.dy*v+w,G=s.az+s.dz*v+y,O=RT(E,D,N,k,q,G);i.has(O)||(i.add(O),t.push(E,D,N,k,q,G))}}return new Float32Array(t)}function CT(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,r=0,s=0,o=t?t.count:e.count,a=c=>{let u=t?t.getX(c):c;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let c=0;c+2<o;c+=3){let u=a(c),h=a(c+1),f=a(c+2),d=h[0]-u[0],m=h[1]-u[1],x=h[2]-u[2],g=f[0]-u[0],p=f[1]-u[1],b=f[2]-u[2];i+=m*b-x*p,r+=x*g-d*b,s+=d*p-m*g}let l=Math.hypot(i,r,s)||1;return{x:i/l,y:r/l,z:s/l}}function PT(n,e){let t=n.getAttribute("position"),i,r,s;Math.abs(e.z)<.9?(i=-e.y,r=e.x,s=0):(i=0,r=-e.z,s=e.y);let o=Math.hypot(i,r,s)||1;i/=o,r/=o,s/=o;let a=e.y*s-e.z*r,l=e.z*i-e.x*s,c=e.x*r-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let m=0;m<t.count;m++){let x=t.getX(m),g=t.getY(m),p=t.getZ(m),b=x*i+g*r+p*s,S=x*a+g*l+p*c;b<u&&(u=b),b>h&&(h=b),S<f&&(f=S),S>d&&(d=S)}return Math.min(h-u,d-f)}function IT(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=CT(n),i=PT(n,t);return t.z>.5?i>Tx:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>Tx}function Ux(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let r=0;r<e.length;r+=3)ju.set(e[r],e[r+1],e[r+2]).applyMatrix4(t),i[r]=ju.x,i[r+1]=ju.y,i[r+2]=ju.z;return i}function LT(n,e,t){if(!t||t.length<6)return n;let i=Ux(e,n),r=Nx(t),s=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],l=i[o+1],c=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,m=h-l,x=f-c,g=Math.hypot(d,m,x);if(g<1e-6)continue;let p=d/g,b=m/g,S=x/g,v=!1;for(let M of r){if(Math.abs(p*M.dx+b*M.dy+S*M.dz)<.95)continue;let y=a-M.ax,E=l-M.ay,D=c-M.az,N=y*M.dx+E*M.dy+D*M.dz,k=y-N*M.dx,q=E-N*M.dy,G=D-N*M.dz;if(Math.hypot(k,q,G)>TT)continue;let O=(a-M.ax)*M.dx+(l-M.ay)*M.dy+(c-M.az)*M.dz,Y=(u-M.ax)*M.dx+(h-M.ay)*M.dy+(f-M.az)*M.dz,ne=Math.min(O,Y),j=Math.max(O,Y);if(Math.min(j,M.len)-Math.max(ne,0)>.01){v=!0;break}}v||s.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(s)}function DT(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function NT(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function OT(n,e=Fs){return e===Us?0:e===ml?n?.visible===!1?0:1:NT(n)}function dp(n,e,t=1,i=fp){let r=Math.max(0,Math.min(1,Number(t)||0)),s=Number.isFinite(i)?i:fp,o=new er({color:Px,linewidth:Cx,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:r<1,opacity:r<1?r:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${Ju};
			end.z += ${Ju};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if ${xp}
				gl_FragDepth -= ${s};
			#else
				gl_FragDepth = gl_FragCoord.z - ${s};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${Ix}-${s}-${Ju}`,e&&o.resolution.set(e.x,e.y),o}function Fx(n,e,t,i){let r=Math.max(0,Math.min(1,Number(e)||0)),s=dp(t,null,r);s.depthTest=!1,s.depthWrite=!1,s.transparent=!0,s.opacity=r;let o=s.onBeforeCompile?.bind(s),a=s.customProgramCacheKey?.bind(s);s.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,s.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},s.needsUpdate=!0;let l=new Oi;l.setPositions(n);let c=new os(l,s);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.renderOrder=1e3,c.raycast=()=>{},c.userData.isPeeledEdgeBatch=!0,c}function Qu(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function Bx(n){if(!n)return;let e=[];n.traverse(t=>{kn(t)&&e.push(t)});for(let t of e)Qu(t)}function as(n,e){n&&n.traverse(t=>{kn(t)&&(t.visible=e)})}function kx(n,e,t){if(!n)return;let i=Math.max(1,e),r=Math.max(1,t);n.traverse(s=>{if(!kn(s)||!s.material)return;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a?.resolution&&a.resolution.set(i,r)})}function mp(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!kn(i)||!i.material)return;let r=Array.isArray(i.material)?i.material:[i.material];for(let s of r){if(!s)continue;let o=s.clippingPlanes?s.clippingPlanes.length:0;s.clippingPlanes=t,s.clipIntersection=!1,o!==t.length&&(s.needsUpdate=!0)}})}function UT(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=Dx(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?Ox(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?IT(n.geometry)?LT(i,n,t):new Float32Array(0):i}function FT(n,e,t,i,r){n.updateWorldMatrix(!0,!1);let s=UT(n,i,r),o=eh(t,n.matrixWorld),a=Hx(n.geometry,o),l=AT(s,a),c=new Oi,u=e.geometry;l.length>=6?(c.setPositions(l),e.geometry=c,e.computeLineDistances()):e.geometry=c,u?.dispose?.()}function BT(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let r=i.userData.bpHardEdgePositions;r instanceof Float32Array||(r=Dx(i.geometry),i.userData.bpHardEdgePositions=r);let s=Ox(r);if(s.length<6)continue;let o=Ux(i,s);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function zx(n,e,t={}){let i=t.clippingPlanes??[],r=t.resolution||null,s=t.edgeMode??Fs,o=e?BT(n):new Float32Array(0);for(let[a,l]of n)for(let c of l){if(!c||!c.isMesh||!c.geometry||kn(c))continue;let u=null;for(let d of c.children)if(kn(d)){u=d;break}if(!e){u&&Qu(u);continue}u&&!u.isLineSegments2&&(Qu(u),u=null);let h=OT(c,s),f=MT(c);if(u){let d=u.material,m=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${Ix}-${f}-${Ju}`;if(!d||typeof d.customProgramCacheKey!="function"||m!==x){Qu(u);let g=dp(i,r,h,f),p=new Oi;u=new os(p,g),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(pl),c.add(u)}else d.color&&d.color.setHex(Px),typeof d.linewidth=="number"&&(d.linewidth=Cx),d.clippingPlanes=i,d.clipIntersection=!1,r&&d.resolution&&d.resolution.set(r.x,r.y),DT(d,h),d.needsUpdate=!0}else{let d=dp(i,r,h,f),m=new Oi;u=new os(m,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(pl),c.add(u)}u.layers.set(pl),FT(c,u,i,a,o)}}function kT(n){if(!n.isMesh||kn(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function gp(n,e,t,i,r={}){if(!i)return;let s=!!r.reuseDepth,o=!1;if(i.traverse(x=>{kn(x)&&(o=!0)}),!o){hp(n);return}let a=n.autoClear,l=e.background,c=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,s){as(i,!0),t.layers.set(pl),n.render(e,t),t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,hp(n);return}as(i,!1);let h=[];i.traverse(x=>{!kT(x)||x.visible===!1||(h.push(x),x.visible=!1)});let f=[],d=new Set;e.traverse(x=>{if(!x.isMesh||kn(x)||x.visible===!1)return;let g=Array.isArray(x.material)?x.material:[x.material];for(let p of g)!p||d.has(p)||(d.add(p),f.push({mat:p,colorWrite:p.colorWrite!==!1,depthWrite:p.depthWrite!==!1}),p.colorWrite=!1,p.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let x of f)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of h)x.visible=!0}as(i,!0);let m=[];r.opaqueEdgesOnly&&i.traverse(x=>{if(!kn(x))return;let g=Array.isArray(x.material)?x.material[0]:x.material;g&&g.transparent&&g.opacity<1-1e-4&&(m.push(x),x.visible=!1)}),t.layers.set(pl);try{n.render(e,t)}finally{for(let x of m)x.visible=!0}t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,hp(n)}function hp(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var Vx=!0,Gx=5,vp=12,zT=vp,Xx=.001,HT=.5,VT=1;function Wx(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let r=t.children;if(r)for(let s=0;s<r.length;s++){let o=r[s];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var th=1e5,Ui={value:0},en={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Xx},uResolution:{value:new Ge(1,1)}};function yp(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Ui.value),t.tPrevViewZ&&(t.tPrevViewZ.value=en.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=en.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=en.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=en.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(en.uResolution.value)}function gl(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,r)=>{t?.(i,r),i.uniforms.uPeelStage=Ui,i.uniforms.tPrevViewZ=en.tPrevViewZ,i.uniforms.tPeelViewZ=en.tPeelViewZ,i.uniforms.tOpaqueViewZ=en.tOpaqueViewZ,i.uniforms.uViewZEps=en.uViewZEps,i.uniforms.uResolution=en.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(th*.5).toFixed(1)}) discard;
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
#endif`)},n.needsUpdate=!0}function _p(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function qx(n){let e=new Ge,t=new Xe,i=null,r=null,s=null,o=null,a=null,l=null,c=new Ii(-1,1,1,-1,0,1),u=new Xn,h=new vn({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Xe(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new ut(new di(2,2),h);u.add(f);let d=new vn({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Wc,blendSrc:Za,blendDst:ns,blendSrcAlpha:Za,blendDstAlpha:ns,blendEquation:Li}),m=new ut(new di(2,2),d),x=new Xn;x.add(m);let g=new vn({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:pi}),p=new ut(new di(2,2),g),b=new Xn;b.add(p);let S=new vn({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:pi}),v=new ut(new di(2,2),S),M=new Xn;M.add(v);function w(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function y(R){w();let se=n.autoClear;n.setRenderTarget(R),n.autoClear=!1,n.render(M,c),n.autoClear=se}let E=new vn({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Ot,clipping:!0,blending:pi});function D(R,se,K={}){g.uniforms.uValue.value=se;let Ce=n.autoClear;w(),n.setRenderTarget(R),K.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(b,c),n.autoClear=Ce}function N(){i?.dispose(),r?.dispose(),s?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),i=null,r=null,s=null,o=null,a=null,l=null}let k=0;function q(R,se,K){let Ce=Math.max(1,Math.floor(R)),J=Math.max(1,Math.floor(se)),Se=Math.min(1,Math.max(.25,K)),ye=Math.max(1,Math.floor(Ce*Se)),Le=Math.max(1,Math.floor(J*Se));if(i&&i.width===Ce&&i.height===J&&s&&s.width===ye&&s.height===Le&&k===Se)return;N(),k=Se,i=new an(Ce,J,{format:wn,type:On,colorSpace:Tt,depthBuffer:!0,stencilBuffer:!1});let P={format:wn,type:qn,depthBuffer:!0,stencilBuffer:!1,magFilter:Yt,minFilter:Yt};r=new an(ye,Le,P),s=new an(ye,Le,P),o=new an(ye,Le,P),a=new an(ye,Le,{format:wn,type:jn,colorSpace:Tt,depthBuffer:!1,stencilBuffer:!1,magFilter:Zt,minFilter:Zt}),l=new an(ye,Le,{format:wn,type:jn,colorSpace:Tt,depthBuffer:!1,stencilBuffer:!1,magFilter:Zt,minFilter:Zt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,en.tOpaqueViewZ.value=r.texture,en.uResolution.value.set(ye,Le)}function G(R){let se=[],K=[];return R?(R.traverse(Ce=>{if(!Ce.isMesh||!Ce.visible||kn(Ce))return;let J=Ce,Se=Array.isArray(J.material)?J.material:[J.material],ye=!1;for(let Le of Se)if(Le&&Le.transparent&&Le.opacity<1-1e-4){ye=!0;break}ye?K.push(J):se.push(J)}),{opaque:se,transparent:K}):{opaque:se,transparent:K}}function O(R,se){for(let K of R)K.visible=se}function Y(R,se){R.blending=se.blending,R.blendSrc=se.blendSrc,R.blendDst=se.blendDst,R.blendSrcAlpha=se.blendSrcAlpha,R.blendDstAlpha=se.blendDstAlpha,R.blendEquation=se.blendEquation,R.blendEquationAlpha=se.blendEquation}let ne={meshes:[],sources:[],key:""},j={meshes:[],sources:[],key:""},ve="",ie="",H=new Xn,ee=new Xn,Ae=new Xn,Ne=[];function Q(R){for(let se of R.meshes)se.geometry.dispose();R.meshes=[],R.sources=[],R.key=""}function xe(){for(let R of Ne){Ae.remove(R),R.geometry?.dispose?.();let se=R.material;if(Array.isArray(se))for(let K of se)K?.dispose?.();else se?.dispose?.()}Ne=[]}function re(){Q(ne),Q(j),xe(),ve="",ie=""}function V(R){if(xe(),!R.length)return;let se=new Map,K=new I;for(let J of R){let Se=null;for(let be of J.children)if(kn(be)){Se=be;break}if(!Se?.geometry)continue;let ye=Se.material,Le=ye&&ye.transparent&&typeof ye.opacity=="number"?ye.opacity:1;if(!(Le<1-1e-4))continue;let P=Se.geometry.getAttribute("instanceStart"),T=Se.geometry.getAttribute("instanceEnd");if(!P||!T||!P.count)continue;let Z=Le.toFixed(3),ge=se.get(Z);ge||(ge={opacity:Le,planes:ye.clippingPlanes||[],chunks:[]},se.set(Z,ge)),J.updateWorldMatrix(!0,!1);let pe=P.count,fe=new Float32Array(pe*6);for(let be=0;be<pe;be++)K.fromBufferAttribute(P,be).applyMatrix4(J.matrixWorld),fe[be*6]=K.x,fe[be*6+1]=K.y,fe[be*6+2]=K.z,K.fromBufferAttribute(T,be).applyMatrix4(J.matrixWorld),fe[be*6+3]=K.x,fe[be*6+4]=K.y,fe[be*6+5]=K.z;ge.chunks.push(fe)}let Ce={stage:Ui,prevZ:en.tPrevViewZ,peelZ:en.tPeelViewZ,opaqueZ:en.tOpaqueViewZ,eps:en.uViewZEps,resolution:en.uResolution};for(let J of se.values()){let Se=0;for(let T of J.chunks)Se+=T.length;if(Se<6)continue;let ye=new Float32Array(Se),Le=0;for(let T of J.chunks)ye.set(T,Le),Le+=T.length;let P=Fx(ye,J.opacity,J.planes,Ce);Ae.add(P),Ne.push(P)}}function te(R,se,K,Ce){if(!K.length)return;let J=`${Wx(K)}#${Wx(se)}`;Ce&&Ce===ve&&J===ie&&ne.meshes.length||(Oe(ne,R,K),Oe(j,R,se),ne.sources.length===K.length&&j.sources.length===se.length&&(V(K),ve=Ce||"",ie=J))}function Ie(R){return Object.keys(R.attributes).sort().join(",")}function We(R){let se=R.geometry,K=se.index?se.toNonIndexed():se.clone();return K.applyMatrix4(R.matrixWorld),K}function Oe(R,se,K){let Ce=String(K.length);for(let Se of K){let ye=Array.isArray(Se.material)?"m":Se.material?.id||0;Ce+=`.${Se.id}:${ye}`}if(Ce===R.key)return;se.updateWorldMatrix(!0,!0),Q(R),R.key=Ce;let J=new Map;for(let Se of K){if(!Se.geometry||Array.isArray(Se.material)||!Se.material)continue;let ye=`${Se.material.uuid}:${Ie(Se.geometry)}`,Le=J.get(ye);Le||(Le={mat:Se.material,meshes:[]},J.set(ye,Le)),Le.meshes.push(Se)}for(let Se of J.values()){let ye=[];try{for(let T of Se.meshes)ye.push(We(T));let Le=F0(ye,!1);if(!Le)continue;let P=new ut(Le,Se.mat);P.frustumCulled=!1,P.matrixAutoUpdate=!1,P.renderOrder=0,P.userData.isPeelBatch=!0,R.meshes.push(P),R.sources.push(...Se.meshes)}catch{}finally{for(let Le of ye)Le.dispose()}}}function He(R,se,K,Ce){if(!R.meshes.length||R.sources.length!==se.length)return n.render(K,Ce),!1;H.environment=K.environment,H.environmentIntensity=K.environmentIntensity,H.fog=K.fog;let J=[];for(let Se of K.children)Se.isLight&&J.push(Se);for(let Se of J)H.add(Se);for(let Se of R.meshes)H.add(Se);n.render(H,Ce);for(let Se of R.meshes)H.remove(Se);for(let Se of J)K.add(Se);return!0}function Je(R,se,K){He(ne,K,R,se)}function qe(R,se,K){K.length&&He(j,K,R,se)}function vt(R,se,K){if(!j.meshes.length||j.sources.length!==se.length)return!1;ee.overrideMaterial=K;for(let Ce of j.meshes)ee.add(Ce);n.render(ee,R),ee.overrideMaterial=null;for(let Ce of j.meshes)ee.remove(Ce);return!0}function ht(R){let se=new Set;for(let K of R){let Ce=Array.isArray(K.material)?K.material:[K.material];for(let J of Ce)J&&se.add(J)}return[...se]}function ft(R,se,K){if(!K)return;let Ce=K.visible,J=R.background,Se=n.autoClear;K.visible=!1,R.background=null,n.autoClear=!1,w(),n.clearDepth(),n.render(R,se),K.visible=Ce,R.background=J,n.autoClear=Se}function je(R){return R.children.filter(se=>se.userData?.blueprintAnnotations)}function bt(R,se){for(let K of R)K.visible=se}function me(R,se,K){je(R).some(Ce=>Ce.visible)&&ft(R,se,K)}function et(R,se,K,Ce={}){as(K,!1);let J=je(R),Se=J.map(ye=>ye.visible);bt(J,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(R,se),Ce.skipEdges||gp(n,R,se,K,{reuseDepth:!!Ce.reuseDepth}),J.forEach((ye,Le)=>{ye.visible=Se[Le]}),me(R,se,K)}function tt(R,se,K,Ce,J={}){if(!(Vx&&(typeof Ce=="function"?Ce():!!Ce)))return Ui.value=0,et(R,se,K,{reuseDepth:!0}),!1;if(J.quality!=="high"){Ui.value=0,et(R,se,K,{reuseDepth:!0});let $=J.batchKey||"";if(K&&!J.deferPrime&&$!==ve){let Pe=G(K);te(K,Pe.opaque,Pe.transparent,$)}return!0}let{opaque:ye,transparent:Le}=G(K);if(!Le.length)return Ui.value=0,et(R,se,K,{reuseDepth:!0}),!1;K&&te(K,ye,Le,J.batchKey||"");let P=J.quality==="high",T=P?VT:HT,Z=P?vp:Gx;n.getDrawingBufferSize(e),q(e.x,e.y,T);let ge=n.autoClear,pe=n.toneMapping,fe=R.background;fe instanceof Xe?t.copy(fe):t.set(1118481),h.uniforms.uBackground.value.copy(t);let be=[];for(let $ of[...ye,...Le])be.push({mesh:$,visible:$.visible});let ce=ht(Le),ue=[];for(let $ of ce)gl($),ue.push({mat:$,snap:{blending:$.blending,blendSrc:$.blendSrc,blendDst:$.blendDst,blendSrcAlpha:$.blendSrcAlpha,blendDstAlpha:$.blendDstAlpha,blendEquation:$.blendEquation,blendEquationAlpha:$.blendEquationAlpha,depthWrite:$.depthWrite,depthTest:$.depthTest,transparent:$.transparent,opacity:$.opacity,colorWrite:$.colorWrite,side:$.side,forceSinglePass:$.forceSinglePass}});_p(ce,!0);let F=new Map;for(let $ of Le)F.set($,$.onBeforeRender),$.onBeforeRender=function($e,De,ot,Ct,Pt,Cn){let ai=Array.isArray(Pt)?Pt:[Pt];for(let bi of ai)bi&&yp(bi);let Hn=F.get($);typeof Hn=="function"&&Hn.call(this,$e,De,ot,Ct,Pt,Cn)};let L=null;for(let $ of ce)if($.clippingPlanes?.length){L=$.clippingPlanes;break}if(!L)for(let $ of ye){let Pe=Array.isArray($.material)?$.material:[$.material];for(let $e of Pe)if($e?.clippingPlanes?.length){L=$e.clippingPlanes;break}if(L)break}E.clippingPlanes=L||[],E.clipIntersection=!1,R.background=null,n.autoClear=!0,Ui.value=0;let W=[];for(let $ of R.children)$!==K&&($.isLight||(W.push({obj:$,visible:$.visible}),$.visible=!1));function z(){for(let[$,Pe]of F)$.onBeforeRender=Pe}function he(){for(let{mat:$,snap:Pe}of ue)Y($,Pe),$.blendEquationAlpha=Pe.blendEquationAlpha,$.depthWrite=Pe.depthWrite,$.depthTest=Pe.depthTest,$.transparent=Pe.transparent,$.opacity=Pe.opacity,$.colorWrite=Pe.colorWrite!==!1,$.side=Pe.side,$.forceSinglePass=Pe.forceSinglePass,$.needsUpdate=!0;for(let{mesh:$,visible:Pe}of be)$.visible=Pe;for(let{obj:$,visible:Pe}of W)$.visible=Pe;return z(),_p(ce,!1),Ui.value=0,R.background=fe,R.overrideMaterial=null,n.toneMapping=pe,n.setRenderTarget(null),n.autoClear=!0,et(R,se,K),n.autoClear=ge,!1}if(O(Le,!1),O(ye,!0),as(K,!1),w(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),qe(R,se,ye),n.setRenderTarget(r),n.setClearColor(0,1),D(r,th,{clearDepth:!0}),P){let $=new Float32Array(4);try{n.readRenderTargetPixels(r,2,2,1,1,$)}catch{$[0]=0}if(!Number.isFinite($[0])||$[0]<th*.5)return he()}let _e=R.overrideMaterial;n.setRenderTarget(r),n.autoClear=!1,vt(se,ye,E)||(R.overrideMaterial=E,n.render(R,se),R.overrideMaterial=_e),n.autoClear=!0,en.tOpaqueViewZ.value=r.texture,y(a),D(o,0),en.tPrevViewZ.value=o.texture,O(ye,!1),O(Le,!0),as(K,!1);let Ee=!1;for(let $=0;$<Z;$++){en.tPrevViewZ.value=o.texture,en.tPeelViewZ.value=o.texture,Ui.value=1;for(let{mat:De}of ue)De.depthWrite=!0,De.depthTest=!0,De.colorWrite=!0,De.transparent=!0,De.forceSinglePass=!0,Y(De,{blending:pi,blendSrc:ns,blendDst:$a,blendSrcAlpha:ns,blendDstAlpha:$a,blendEquation:Li}),yp(De);w(),n.setRenderTarget(s),n.setClearColor(0,1),n.clear(!1,!0,!1),D(s,th),n.setRenderTarget(s),n.autoClear=!1,Je(R,se,Le),n.autoClear=!0,en.tPeelViewZ.value=s.texture,Ui.value=2;for(let{mat:De}of ue)De.depthWrite=!1,De.depthTest=!1,De.colorWrite=!0,De.transparent=!0,De.forceSinglePass=!0,Y(De,{blending:Ki,blendSrc:Ya,blendDst:No,blendSrcAlpha:ns,blendDstAlpha:No,blendEquation:Li}),yp(De);y(l);let Pe=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(l),Je(R,se,Le),n.autoClear=Pe,Ne.length&&l){for(let ot of Ne)ot.material?.resolution?.set(l.width,l.height);let De=se.layers.mask;se.layers.set(0),n.autoClear=!1,n.render(Ae,se),se.layers.mask=De,n.autoClear=!0}Ee=!0,d.uniforms.tSrc.value=l.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(x,c),n.autoClear=!0;let $e=o;o=s,s=$e}if(!Ee)return he();for(let{mat:$,snap:Pe}of ue)Y($,Pe),$.blendEquationAlpha=Pe.blendEquationAlpha,$.depthWrite=Pe.depthWrite,$.depthTest=Pe.depthTest,$.transparent=Pe.transparent,$.opacity=Pe.opacity,$.colorWrite=Pe.colorWrite!==!1,$.side=Pe.side,$.forceSinglePass=Pe.forceSinglePass;for(let{mesh:$,visible:Pe}of be)$.visible=Pe;for(let{obj:$,visible:Pe}of W)$.visible=Pe;z(),as(K,!0),_p(ce,!1),Ui.value=0,R.background=fe,n.toneMapping=pe,n.setRenderTarget(null),n.autoClear=!0,n.render(u,c);let Me=je(R),Ue=Me.map($=>$.visible);return bt(Me,!1),P&&K&&gp(n,R,se,K,{opaqueEdgesOnly:Ne.length>0}),Me.forEach(($,Pe)=>{$.visible=Ue[Pe]}),me(R,se,K),n.autoClear=ge,!0}function we(){re(),N(),h.dispose(),f.geometry.dispose(),d.dispose(),m.geometry.dispose(),g.dispose(),p.geometry.dispose(),S.dispose(),v.geometry.dispose(),E.dispose()}return{render:tt,dispose:we,MAX_PEELS:zT,MAX_PEELS_FAST:Gx,MAX_PEELS_HIGH:vp,VIEW_Z_EPSILON:Xx,USE_DEPTH_PEEL:Vx}}var Yx="blueprints.materialMode",nh="solid",xl="realistic",GT={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],worktop:[236,233,226],hob:[24,24,27],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},WT={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,worktop:6,hob:7,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},XT=2e-6,qT=3,xp="defined( USE_LOGARITHMIC_DEPTH_BUFFER ) || defined( USE_LOGDEPTHBUF )";function Mp(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),r=n.customProgramCacheKey?.bind(n),s=XT.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if ${xp}
	{
		float bpFaceBias = ${t}.0 * ${s};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${r?r():n.type}|bpLayerDepth-r${qT}-${t}`,n.needsUpdate=!0}var $T=[];function Zx(n,e,t){let i=new Set(n),r=Array.isArray(e)&&e.length?e:$T,s=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),c.push({type:"leaf",id:u,label:s(u)});continue}let h=o(u.children||[]);h.length&&c.push({type:"group",id:u.id,label:s(u.id),children:h})}return c}let a=o(r);if(i.size){let l=[...i].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:s(c)}));a.push({type:"group",id:"other",label:s("other"),children:l})}return a}function Kx(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let r of e)r.type==="group"&&t.set(r.id,ih(r));let i={};for(let[r,s]of Object.entries(n)){let o=t.get(r);if(o&&o.length)for(let a of o)i[a]=s;else i[r]=s}return i}function ih(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...ih(t));return e}function YT(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let r of n.children||[]){if(!r?.userData?.isEdgeOverlay||!r.material)continue;let s=Array.isArray(r.material)?r.material:[r.material];for(let o of s)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Ur(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),r=t.edgeMode??"transparent";for(let s of n){if(!s)continue;if(i<=0||s.userData?.bpIfcHidden){s.visible=!1;continue}if(s.visible=!0,!s.isMesh)continue;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a&&(i<1?(a.transparent=!0,a.opacity=i,a.depthWrite=!1,a.depthTest=!0,a.side=Ot,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Ot,a.forceSinglePass=!1,a.blending=Ki,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof s.userData.opaqueRenderOrder!="number"&&(s.userData.opaqueRenderOrder=s.renderOrder||0),s.renderOrder=i<1?0:s.userData.opaqueRenderOrder,YT(s,i,r);for(let a of s.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=s.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=i,c.transparent=i<1,c.depthWrite=i>=1,c.depthTest=!0,c.forceSinglePass=i<1,c.side=Ot,c.needsUpdate=!0)}}}var ZT={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},worktop:{color:[236,233,226],roughness:.3,metalness:0,clearcoat:.4,clearcoatRoughness:.2,map:"plaster"},hob:{color:[24,24,27],roughness:.1,metalness:0,clearcoat:.8,clearcoatRoughness:.05,map:"none"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},bp=new Map;function KT(n){if(!n||n==="none")return null;let e=bp.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let r=i.getContext("2d");if(!r)return null;if(n==="wood"){r.fillStyle="#c49858",r.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;r.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,r.lineWidth=1.2,r.beginPath(),r.moveTo(0,o+a*.15),r.lineTo(t,o-a*.1),r.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;r.fillStyle="rgba(70, 40, 15, 0.22)",r.fillRect(a,l,2,7+o%5)}}else if(n==="foam"){r.fillStyle="#9ed468",r.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;r.beginPath(),r.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.55)",r.fill(),r.strokeStyle="rgba(40,90,30,0.35)",r.stroke()}}else if(n==="plaster"){let o=r.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}r.putImageData(o,0,0)}else if(n==="wool"){r.fillStyle="#88c860",r.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;r.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",r.fillRect(a,l,1+o%2,2+o%3)}}else if(n==="metal"){let o=r.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),r.fillStyle=o,r.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(0,a,t,2),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(0,a+4,t,2)}else if(n==="masonry"){r.fillStyle="#b88868",r.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;r.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,r.fillRect(h+1,f+1,a-2,o-2),r.strokeStyle="rgba(70,45,30,0.55)",r.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let s=new Tr(i);return s.colorSpace=Tt,s.wrapS=Ci,s.wrapT=Ci,s.repeat.set(2.5,2.5),s.needsUpdate=!0,bp.set(n,s),s}function $x(n){return new Xe(n[0]/255,n[1]/255,n[2]/255)}function jT(n){return GT[n]||[160,160,160]}function JT(n,e,t=0){n.side=Ot,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],Mp(n,t),gl(n),n.needsUpdate=!0}function jx(n){n.computeBoundingBox();let e=n.boundingBox,t=new I;e.getSize(t);let i=Math.max(t.x,1e-6),r=Math.max(t.y,1e-6),s=Math.max(t.z,1e-6),o=Math.max(i,r,s);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),l=n.getAttribute("normal");if(!a)return o;let c=n.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new I;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(l.getX(f)),m=Math.abs(l.getY(f)),x=Math.abs(l.getZ(f)),g,p;m>=d&&m>=x?(g=(h.x-e.min.x)/i,p=(h.z-e.min.z)/s):d>=x?(g=(h.z-e.min.z)/s,p=(h.y-e.min.y)/r):(g=(h.x-e.min.x)/i,p=(h.y-e.min.y)/r),u[f*2]=g,u[f*2+1]=p}return n.setAttribute("uv",new Vt(u,2)),o}function QT(n,e){let t=KT(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let r=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(r,r),i}function Jx(n,e,t={}){let i=t.clippingPlanes??null,r=e===xl,s=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of n){let c=jT(a),u=WT[a]??0,h=1e3;if(r)for(let p of l)p.isMesh&&p.geometry&&(h=Math.max(h,jx(p.geometry)));let f=1,d;if(r){let p=ZT[a]||{color:c,roughness:.7,metalness:0,map:"none"};f=typeof p.opacity=="number"?p.opacity:1;let b=$x(p.color),S=QT(p.map||"none",h);p.clearcoat?d=new dn({color:b,map:S,roughness:p.roughness,metalness:p.metalness,clearcoat:p.clearcoat,clearcoatRoughness:p.clearcoatRoughness??.3,envMapIntensity:.85}):d=new Nn({color:b,map:S,roughness:p.roughness,metalness:p.metalness,envMapIntensity:p.metalness>.05?1.1:.55})}else d=new ln({color:$x(c)});JT(d,i,u),d.userData.presetOpacity=f;let m=new Set;for(let p of l){if(!p.isMesh)continue;let b=p.material;if(b){let S=Array.isArray(b)?b:[b];for(let v of S)m.add(v)}p.material=d,p.userData.opaqueRenderOrder=u,p.renderOrder=u}for(let p of m)p!==d&&(p.map&&[...bp.values()].includes(p.map)?p.map=null:p.map&&(p.map.dispose?.(),p.map=null),p.dispose?.());let x=1;s&&(s instanceof Map?x=s.has(a)?s.get(a):1:typeof s[a]=="number"&&(x=s[a]));let g=Math.max(0,Math.min(1,f*(Number(x)||0)));Ur(l,g,{edgeMode:o})}}function Qx(n,e){let i=(Array.isArray(n)?n:[n]).map(r=>{if(!r)return new Nn({color:13421772,roughness:.65,metalness:0,side:ri});let s=r.color?r.color.clone():new Xe(13421772),o=typeof r.roughness=="number"?r.roughness:.65,a=typeof r.metalness=="number"?r.metalness:0,l=null;r.map&&e&&(jx(e),l=r.map.clone(),l.needsUpdate=!0);let c=new Nn({color:s,map:l,roughness:o,metalness:a,side:ri,transparent:!!r.transparent,opacity:typeof r.opacity=="number"?r.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(n)?i:i[0]}function ey(){try{let n=localStorage.getItem(Yx);if(n===xl||n===nh)return n}catch{}return nh}function ty(n){try{localStorage.setItem(Yx,n)}catch{}}var rr=1e-5,ny=new WeakMap;function oi(n,e,t,i){let r=t/(t-i);return n.clone().lerp(e,r)}function eA(n,e,t){let[i,r,s]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(r),l=e.distanceToPoint(s),c=o>=-rr,u=a>=-rr,h=l>=-rr,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,r,s]);return}if(f===0)return;let d=[i,r,s],m=[o,a,l],x=[c,u,h];if(f===1){let S=x.findIndex(Boolean),v=(S+1)%3,M=(S+2)%3,w=d[S],y=oi(d[S],d[v],m[S],m[v]),E=oi(d[S],d[M],m[S],m[M]);t.push([w,y,E]);return}let g=x.findIndex(S=>!S),p=(g+1)%3,b=(g+2)%3;if(x[p]){let S=d[p],v=d[b],M=oi(d[g],d[p],m[g],m[p]),w=oi(d[g],d[b],m[g],m[b]);t.push([S,v,M]),t.push([v,w,M])}else{let S=d[b],v=oi(d[g],d[p],m[g],m[p]),M=oi(d[g],d[b],m[g],m[b]);t.push([S,v,M])}}function tA(n,e){let[t,i,r]=n,s=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(r),l=s>=-rr,c=o>=-rr,u=a>=-rr,h=(l?1:0)+(c?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,r],d=[s,o,a],m=[l,c,u];if(h===1){let b=m.findIndex(Boolean),S=(b+1)%3,v=(b+2)%3;return[oi(f[b],f[S],d[b],d[S]),oi(f[b],f[v],d[b],d[v])]}let x=m.findIndex(b=>!b),g=(x+1)%3,p=(x+2)%3;return m[g]?[oi(f[x],f[g],d[x],d[g]),oi(f[x],f[p],d[x],d[p])]:[oi(f[x],f[g],d[x],d[g]),oi(f[x],f[p],d[x],d[p])]}function nA(n,e,t){let i=n.clone(),r=e.clone();for(let s of t){let o=s.distanceToPoint(i),a=s.distanceToPoint(r),l=o>=-rr,c=a>=-rr;if(l&&c)continue;if(!l&&!c)return null;let u=oi(i,r,o,a);l?r=u:i=u}return i.distanceToSquared(r)<rr*rr?null:[i,r]}function iA(n,e){let t=n;for(let i of e){let r=[];for(let s of t)eA(s,i,r);if(t=r,t.length===0)break}return t}function rA(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new I,r=[],s=n.getIndex();function o(a,l,c){r.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(s)for(let a=0;a<s.count;a+=3)o(s.getX(a),s.getX(a+1),s.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return r}function sA(n){let e=n.getAttribute("position");if(!e)return[];let t=new I,i=[],r=n.getIndex();function s(o,a,l){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(r)for(let o=0;o<r.count;o+=3)s(r.getX(o),r.getX(o+1),r.getX(o+2));else for(let o=0;o<e.count;o+=3)s(o,o+1,o+2);return i}var Bs=1e-6,iy=2e-4,oA=2e-4,ry=new WeakMap;function aA(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function sy(n){let e=t=>Math.round(t/Bs);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function ly(n,e){let t=aA(e),i=ry.get(n);if(i&&i.key===t)return i;let r=[],s=[],o=ny.get(n);if(o||(o=sA(n),ny.set(n,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((f,d)=>d!==l),h=[];for(let f of o){let d=tA(f,c);if(!d)continue;let m=u.length?nA(d[0],d[1],u):d;m&&(h.push(m),r.push(m[0].x,m[0].y,m[0].z,m[1].x,m[1].y,m[1].z))}s.push(h)}let a={key:t,segments:new Float32Array(r),perPlane:s};return ry.set(n,a),a}function lA(n,e,t){let i=new Map;for(let l of n.keys())i.set(l,l);function r(l){let c=l;for(;i.get(c)!==c;){let u=i.get(i.get(c));i.set(c,u),c=u}return c}function s(l){let c=r(l),u=0;for(let h of t.get(c)||[])e[h].dead||u++;return u}function o(){let l=[];for(let c of n.keys())r(c)===c&&s(c)%2&&l.push(c);return l}let a=iy*iy;for(let l=0;l<e.length+2;l++){let c=o();if(c.length<2)break;let u=-1,h=-1,f=1/0;for(let p=0;p<c.length;p++){let b=n.get(c[p]);for(let S=p+1;S<c.length;S++){let v=n.get(c[S]),M=b.x-v.x,w=b.y-v.y,y=b.z-v.z,E=M*M+w*w+y*y;E<f&&(f=E,u=p,h=S)}}if(f>a)break;let d=c[u],m=c[h],x=n.get(d),g=n.get(m);x.add(g).multiplyScalar(.5);for(let p of t.get(m)||[]){let b=e[p];if(b.dead)continue;let S=r(b.a===m?b.b:b.a);if(S===d){b.dead=!0;continue}b.a=d,b.b=S,t.has(d)||t.set(d,[]),t.get(d).push(p)}i.set(m,d)}}function cA(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let l=sy(o),c=sy(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1,dead:!1}),i.has(l)||i.set(l,[]),i.has(c)||i.set(c,[]),i.get(l).push(u),i.get(c).push(u)}lA(e,t,i);function r(o,a){let l=i.get(o)||[],c=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of l){if(t[d].used||t[d].dead)continue;if(!f)return d;let m=t[d],x=m.a===o?m.b:m.a,g=e.get(x),p=h.x-f.x,b=h.y-f.y,S=h.z-f.z,v=g.x-h.x,M=g.y-h.y,w=g.z-h.z,y=p*v+b*M+S*w;y>u&&(u=y,c=d)}return c}let s=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],l=[],c=o,u=t[c].a,h=u,f=null,d=!1,m=t.length+2;for(let x=0;x<m;x++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let g=t[c].a===u?t[c].b:t[c].a;if(g===h){d=!0;break}let p=r(g,u);if(p<0)break;f=u,u=g,c=p}d&&a.length>=3&&s.push(a)}return s}function uA(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new I(1,0,0):new I(0,1,0),i=new I().crossVectors(t,e).normalize(),r=new I().crossVectors(e,i).normalize();return{u:i,v:r,n:e}}function hA(n,e,t,i){return n.map(r=>{let s=r.clone().sub(e);return{x:s.dot(t),y:s.dot(i),p3:r}})}function fA(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function dA(n){return fA(n)<0&&n.reverse(),n}function oy(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){let o=t[r].y,a=t[s].y,l=t[r].x,c=t[s].x;o>e!=a>e&&n<(c-l)*(e-o)/(a-o+0)+l&&(i=!i)}return i}function Fr(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function pA(n,e,t,i){let r=Fr(n,e,t),s=Fr(n,e,i),o=Fr(t,i,n),a=Fr(t,i,e);return r*s<0&&o*a<0}function ay(n,e,t,i){let r=t.length;for(let s=0;s<r;s++){let o=(s+1)%r;if(!(i>=0&&(s===i||o===i))&&pA(n,e,t[s],t[o]))return!0}return!1}function mA(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],r=-1,s=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],m=n[(f+1)%o];if(d.y>i.y==m.y>i.y)continue;let x=m.y-d.y;if(Math.abs(x)<1e-15)continue;let g=(i.y-d.y)/x;if(g<-1e-8||g>1+1e-8)continue;let p=d.x+g*(m.x-d.x);p>=i.x-1e-8&&p<s&&(s=p,r=f)}let a=[];r>=0&&a.push(r,(r+1)%o);let l=0,c=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<c&&(c=d,l=f)}a.push(l);let u=-1;for(let f of a)if(!ay(i,n[f],n,f)&&!ay(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function Sp(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=Bs*Bs}function gA(n,e,t,i){if(Sp(n,e)||Sp(n,t)||Sp(n,i))return!1;let r=Fr(e,t,n),s=Fr(t,i,n),o=Fr(i,e,n),a=r<-1e-14||s<-1e-14||o<-1e-14,l=r>1e-14||s>1e-14||o>1e-14;return!(a&&l)}function xA(n){let e=[];for(let r of n){let s=e[e.length-1];s&&(s.x-r.x)**2+(s.y-r.y)**2<Bs*Bs||e.push(r)}if(e.length>=2){let r=e[0],s=e[e.length-1];(r.x-s.x)**2+(r.y-s.y)**2<Bs*Bs&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let r=!1,s=e.length;for(let o=0;o<s;o++){let a=(o+s-1)%s,l=(o+1)%s,c=e[a],u=e[o],h=e[l],f=Fr(c,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),r=!0;break}let d=!1;for(let m=0;m<s;m++)if(!(m===o||m===a||m===l)&&gA(e[m],c,u,h)){d=!0;break}if(!d){t.push([c.p3,u.p3,h.p3]),e.splice(o,1),r=!0;break}}if(!r)break}return e.length===3&&Fr(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function yA(n,e,t){if(!n.length)return[];let{u:i,v:r,n:s}=uA(e.normal),o=n[0][0],a=n.map(u=>dA(hA(u,o,i,r))),l=a.map((u,h)=>{let f=u[0],d=0;for(let m=0;m<a.length;m++)m!==h&&oy(f.x,f.y,a[m])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!oy(a[d][0].x,a[d][0].y,h))continue;let m=mA(h,a[d]);m&&(h=m)}let f=xA(h);for(let d of f)c.push(d.map(m=>m.clone().addScaledVector(s,t)))}return c}function cy(n,e){return!n||!e?.length?[]:ly(n,e).perPlane}function uy(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=cA(n),r=yA(i,e,oA+Math.max(0,t));if(!r.length)return new Float32Array(0);let s=new Float32Array(r.length*9),o=0;for(let[a,l,c]of r)s[o++]=a.x,s[o++]=a.y,s[o++]=a.z,s[o++]=l.x,s[o++]=l.y,s[o++]=l.z,s[o++]=c.x,s[o++]=c.y,s[o++]=c.z;return s}function Hx(n,e){return!n||!e?.length?new Float32Array(0):ly(n,e).segments}function eh(n,e){if(!n?.length)return[];let t=new rt().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function _A(n){let e=new Float32Array(n.length*9),t=0;for(let[r,s,o]of n)e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new zt;return i.setAttribute("position",new Vt(e,3)),i.computeVertexNormals(),i}function hy(n,e){if(!n.visible||!n.geometry)return null;let t=rA(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?iA(t,e):t;if(i.length===0)return null;let r=_A(i),s=Qx(n.material,r),o=new ut(r,s);return o.name=n.name,o}var vA=5e-5;function sh(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function wp(n){return n?Array.isArray(n)?n[0]||null:n:null}function dy(n,e){let t;return n.isMeshPhysicalMaterial?t=new dn:n.isMeshStandardMaterial?t=new Nn:t=new ln,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=Ot,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,Mp(t,n.userData?.layerDepthBias||0),gl(t),t.needsUpdate=!0,t}function rh(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function bA(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function MA(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function py(n,e){let t=new Set;for(let i of n){let r=i.parent;if(!r||t.has(r))continue;t.add(r);let s=MA(r,e);if(s)return s}return null}function fy(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let r=wp(i.material);r&&(e.color&&r.color&&r.color.copy(e.color),r.opacity=typeof e.opacity=="number"?e.opacity:1,r.transparent=!!e.transparent,r.depthWrite=e.depthWrite!==!1,r.depthTest=e.depthTest!==!1,r.forceSinglePass=!!e.forceSinglePass,r.side=Ot,r.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function SA(n,e,t,i){let r=e.filter(d=>d?.isMesh&&d.visible&&!sh(d)&&d.geometry),s=py(e,n);if(!r.length||!t.length){s&&rh(s);return}let o=r[0],a=o.parent;if(!a)return;s&&s.parent!==a&&rh(s);let l=s&&s.parent===a?s:new Et;for(let d of[...l.children])rh(d);l.parent||(l.name=`${n}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=n,a.add(l));let c=wp(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new rt().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of r){d.updateWorldMatrix(!0,!1);let m=eh(t,d.matrixWorld),x=cy(d.geometry,m);for(let g=0;g<t.length;g++){let p=x[g]||[];for(let[b,S]of p)f[g].push([b.clone().applyMatrix4(d.matrixWorld),S.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let m=uy(f[d],t[d],h*vA);if(m.length<9)continue;for(let b=0;b<m.length;b+=3){let S=new I(m[b],m[b+1],m[b+2]).applyMatrix4(u);m[b]=S.x,m[b+1]=S.y,m[b+2]=S.z}let x=new zt;x.setAttribute("position",new Vt(m,3)),x.computeVertexNormals();let g=t.filter((b,S)=>S!==d),p=new ut(x,dy(c,g));p.name=`${n}__cap${d}`,p.userData.isSectionCap=!0,p.userData.capPlaneIndex=d,p.userData.capLabel=n,p.renderOrder=o.renderOrder,p.raycast=()=>{},l.add(p)}l.userData.bpCapSig=i,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function Ep(n,e){let t=e||[],i=bA(t);for(let[r,s]of n){let o=(s||[]).filter(u=>u&&!sh(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=py(o,r);if(!t.length||!a.length){l&&rh(l);continue}let c=wp(a[0].material);if(l&&l.userData.bpCapSig===i&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){fy(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===i&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((x,g)=>g!==f):t;u.material=dy(c,d);let m=Array.isArray(h)?h:[h];for(let x of m)x&&(x.map=null),x?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,fy(l,c,a[0].renderOrder||0);continue}SA(r,o,t,i)}}var wA=2,EA=.45,my=.015;function Tp(n){let e=new Nt().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:my};let t=new I;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),r=i>wA?EA/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:r,liftM:my}}function gy(n,e=Tp(n)){let{cx:t,cz:i,minY:r,scale:s,liftM:o}=e;return n.position.set(-t*s,-r*s+o,-i*s),n.scale.setScalar(s),n.updateMatrixWorld(!0),e}var TA=`
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
`,xy=!1;function AA(){if(xy)return;xy=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=TA,document.head.appendChild(n)}function yy(n){AA();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),r=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return r.matches}function c(){return a}function u(){for(let me of o)me(a)}function h(me){o.push(me),me(a)}function f(){if(!e||!i)return;let me=document.getElementById("sheet-inspector"),et=document.getElementById("sheet-main");if(me&&!me.hidden&&et?.hidden){let P=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(P)&&P>0)return P}let tt=document.getElementById("section-view"),we=document.getElementById("section-cuts"),R=t?.offsetHeight||22,se=16,K=0;if(tt&&(K+=tt.offsetHeight),we){let P=we.querySelector(".sheet-title"),T=we.querySelector(".cut-row");K+=32,P&&(K+=P.offsetHeight+8),T?K+=T.offsetHeight:K+=we.offsetHeight}let Ce=R+K+se,J=window.innerHeight||640,Se=Math.round(J*.28),ye=Math.round(J*.45),Le=Math.max(Se,Math.min(ye,Math.round(Ce)));return e.style.setProperty("--sheet-partial-h",`${Le}px`),Le}function d(){f(),!l()&&a==="partial"&&u()}function m(me){let et=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${me}`).trim(),tt=parseFloat(et);return Number.isFinite(tt)?tt:0}function x(){let me={top:0,right:0,bottom:0,left:0};if(!e)return me;if(l()){if(a!=="open")return me;let tt=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(tt)),bottom:0,left:0}}if(a!=="partial")return me;let et=Math.round(Q()+m("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,et)),left:0}}function g(me,et={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(me)||(me=l()?"open":"peek"),a=me,e.dataset.detent=me,e.classList.toggle("sheet-open",me!=="peek"&&me!=="closed"),document.body.classList.toggle("sheet-open",me!=="peek"&&me!=="closed"),v(),et.silent||u()}function p(){l()?g("open"):g("peek"),f()}let b=document.getElementById("top-chrome"),S=document.getElementById("sheet-toggle");if(!S&&b){let me=b.querySelector(".top-chrome-end");me||(me=document.createElement("div"),me.className="top-chrome-end",b.append(me)),S=document.createElement("button"),S.type="button",S.id="sheet-toggle",S.className="chrome-btn sheet-toggle",me.append(S)}function v(){if(!S)return;let me=a==="open";S.setAttribute("aria-expanded",me?"true":"false"),S.setAttribute("aria-label",me?"Hide controls":"Show controls"),S.title=me?"Hide controls":"Show controls",S.textContent=me?"\u203A":"\u2039"}S?.addEventListener("click",()=>{l()&&g(a==="open"?"closed":"open")});let M=!1,w=null,y=!1,E=!1,D=0,N=0,k=0,q=0,G="peek",O=0,Y=0,ne=0,j=0,ve=0,ie=null,H=12,ee=28,Ae='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function Ne(){return Math.max(t?.offsetHeight||34,34)+8}function Q(){return f()||window.innerHeight*.38}function xe(){let me=window.innerHeight||640;return Math.min(me*.92,me-72)}function re(){return e?.offsetWidth||0}function V(me){return me instanceof Element?!!me.closest(Ae):!1}function te(){if(l()){g(a==="open"?"closed":"open");return}g(a==="peek"?"partial":a==="partial"?"full":"peek")}function Ie(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function We(me,et,tt){if(e){M=!0,y=!1,w=et,E=!1,G=a,D=me.clientY,N=me.clientX,O=D,Y=N,ne=performance.now(),j=0,ve=0,q=tt,ie=me.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${q}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(me.pointerId)}catch{}}}function Oe(me){if(!(!e||!t)&&!(me.target!==t&&!t.contains(me.target)&&me.target!==e)){M=!0,y=!1,w="narrow",E=!1,G=a,e.classList.add("is-dragging"),D=me.clientY,N=me.clientX,O=D,Y=N,ne=performance.now(),j=0,ve=0,k=e.getBoundingClientRect().height,ie=me.pointerId;try{t.setPointerCapture(me.pointerId)}catch{}me.preventDefault()}}function He(me){if(!e||me.pointerType==="mouse"&&me.button!==0||me.target instanceof Element&&me.target.closest(".chrome-btn"))return;let et=re();if(a==="closed"){let tt=window.innerWidth-ee-m("r");if(me.clientX<tt)return;We(me,"wide-open",et),me.preventDefault();return}e.contains(me.target)&&(V(me.target)||(M=!0,y=!0,w="wide-close",E=!1,G=a,D=me.clientY,N=me.clientX,O=D,Y=N,ne=performance.now(),j=0,ve=0,q=0,ie=me.pointerId))}function Je(me){l()?He(me):Oe(me)}function qe(me){if(!M||!e||ie!=null&&me.pointerId!==ie)return;let et=performance.now(),tt=Math.max(1,et-ne),we=Math.hypot(me.clientX-N,me.clientY-D);if(y){if(we<=H)return;let Ce=me.clientX-N,J=me.clientY-D;if(Math.abs(Ce)<Math.abs(J)*1.15||Ce<=0){M=!1,y=!1,w=null,ie=null;return}y=!1,E=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(me.pointerId)}catch{}me.preventDefault()}if(we>H&&(E=!0),w==="narrow"){let Ce=D-me.clientY;j=(O-me.clientY)/tt*1e3,O=me.clientY,ne=et;let J=Ne(),Se=xe(),ye=Math.max(J,Math.min(Se,k+Ce));e.style.height=`${ye}px`;return}let R=me.clientX-N;ve=(me.clientX-Y)/tt*1e3,Y=me.clientX,ne=et;let se=re(),K=Math.max(0,Math.min(se,q+R));e.style.transform=`translateX(${K}px)`}function vt(me,et){let tt=[{name:"peek",h:Ne()},{name:"partial",h:Q()},{name:"full",h:xe()}],we=Math.max(0,tt.findIndex(Se=>Se.name===G)),R=tt[we].h;if(Math.abs(me-R)<36&&Math.abs(et)<1100)return G;let se=me+et*.05,K=(tt[0].h+tt[1].h)/2,Ce=(tt[1].h+tt[2].h)/2,J=se<K?0:se<Ce?1:2;if(J>we+1&&(J=we+1),J<we-1&&(J=we-1),J===2&&we<2){let Se=Ce+(tt[2].h-Ce)*.25;me<Se&&et<1400&&(J=1)}return tt[J].name}function ht(me,et){let tt=re();return tt<=0||Math.abs(me-(G==="closed"?tt:0))<28&&Math.abs(et)<800?G:et>900?"closed":et<-900?"open":me>tt*.45?"closed":"open"}function ft(me){if(!M||!e||ie!=null&&me.pointerId!==ie)return;let et=w,tt=y;if(M=!1,y=!1,w=null,ie=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),tt&&!E)return;if(!E){et==="narrow"?(e.style.height="",te()):et==="wide-open"?(Ie(),g("open")):Ie();return}if(et==="narrow"){let se=e.getBoundingClientRect().height;e.style.height="",g(vt(se,j));return}let we=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),R=we?parseFloat(we[1]):0;Ie(),g(ht(R,ve))}t?.addEventListener("pointerdown",me=>{l()||Je(me)}),t?.addEventListener("pointermove",qe),t?.addEventListener("pointerup",ft),t?.addEventListener("pointercancel",ft),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",me=>{l()&&He(me)},{capture:!0}),document.addEventListener("pointermove",qe,{capture:!0}),document.addEventListener("pointerup",ft,{capture:!0}),document.addEventListener("pointercancel",ft,{capture:!0});let je=()=>{e&&(e.style.height=""),Ie(),i&&(i.style.overflow=""),p()};r.addEventListener?r.addEventListener("change",je):r.addListener(je);function bt(){n(s.matches)}return bt(),s.addEventListener?s.addEventListener("change",bt):s.addListener(bt),window.addEventListener("resize",()=>{f(),u()}),p(),v(),{getDetent:c,getSafeInsets:x,onDetentChange:h,refreshPartialHeight:d,setDetent:g}}function oh(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,r=!!n.thumbScrubOnly,s=yl(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,h=14,f=null,d=0,m=0,x=!1,g=!1,p=!1,b=!0;function S(){let O=`${(t===e?0:(s-e)/(t-e))*100}%`;l.style.width=O,c.style.left=O,o.setAttribute("aria-valuenow",String(s));let Y=n.formatAriaValue?.(s)??String(s);o.setAttribute("aria-valuetext",Y)}function v(G,O){let Y=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!Y||!(Y.width>0)||!(Y.height>0)?!0:G>=Y.left-h&&G<=Y.right+h&&O>=Y.top-h&&O<=Y.bottom+h}function M(G,O="input"){let Y=RA(yl(G,e,t),e,t,i);if(Y===s&&O==="silent"){S();return}s=Y,S(),(O==="input"||O==="change")&&n.onInput?.(s),O==="change"&&n.onChange?.(s)}function w(G){let O=a.getBoundingClientRect(),Y=Math.max(O.width,1),ne=yl((G-O.left)/Y,0,1);return e+ne*(t-e)}function y(G){if(f==null)return;let O=g;f=null,x=!1,g=!1,b=!0,O&&n.onScrubEnd?.(),G&&O&&n.onChange?.(s)}function E(G){f==null&&(G.pointerType==="mouse"&&G.button!==0||(f=G.pointerId,d=G.clientX,m=G.clientY,p=!1,x=!1,g=!1,b=!r||v(G.clientX,G.clientY)))}function D(G){if(f!==G.pointerId)return;let O=G.clientX-d,Y=G.clientY-m;if(!p&&Math.hypot(O,Y)>u&&(p=!0),!x){if(!p)return;if(G.pointerType==="touch"&&Math.abs(Y)>=Math.abs(O)){y(!1);return}if(!b){y(!1);return}x=!0,g=!0,n.onScrubStart?.();try{o.setPointerCapture(G.pointerId)}catch{}}M(w(G.clientX),"input"),G.preventDefault()}function N(G){if(f===G.pointerId){if(!p&&!g){f=null,x=!1,g=!1,b=!0,n.onTap?.();return}y(!0)}}function k(G){f===G.pointerId&&y(!1)}function q(G){let O=t-e,Y=i>0?i:O/100,ne=O/10,j=s;switch(G.key){case"ArrowLeft":case"ArrowDown":j=s-Y;break;case"ArrowRight":case"ArrowUp":j=s+Y;break;case"PageDown":j=s-ne;break;case"PageUp":j=s+ne;break;case"Home":j=e;break;case"End":j=t;break;case"Enter":case" ":G.preventDefault(),n.onTap?.();return;default:return}G.preventDefault(),M(j,"change")}return o.addEventListener("pointerdown",E),o.addEventListener("pointermove",D),o.addEventListener("pointerup",N),o.addEventListener("pointercancel",k),o.addEventListener("keydown",q),S(),{el:o,get value(){return s},set value(G){M(G,"silent")},refresh(){S()}}}function yl(n,e,t){return Math.min(t,Math.max(e,n))}function RA(n,e,t,i){if(!(i>0))return yl(n,e,t);let r=Math.round((n-e)/i),s=Number((e+r*i).toPrecision(12));return yl(s,e,t)}var _y="blueprints.locale",CA={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",worktop:"Worktop",hob:"Hob",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},PA={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",worktop:"Pracovn\xED deska",hob:"Varn\xE1 deska",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},IA={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","ui.spatial":"Spatial","ui.groups":"Groups","ui.info":"Info","ui.parentGroups":"Parent groups","ui.childGroups":"Child groups","ui.childElements":"Child elements","home.title":"Home","home.live":"Live","home.off":"Off","home.on":"On","home.statusOff":"Offline model. Taps only change this view.","home.statusConnecting":"Connecting to Home\u2026","home.statusLive":"Live: state from Home. Taps send commands.","home.statusLiveNoSim":"Live: state from Home. Rocker presses are off on this server.","home.statusUnreachable":"Home unreachable. Showing the offline model; retrying.","home.failed":"Home refused the command","home.deviceOffline":"Device offline (last known state)","home.unknown":"Unknown","home.level":"Level","home.warm":"Warm","home.cool":"Cool","home.lastEvent":"Last event","home.noEvents":"No presses yet","home.contactClosed":"Closed (contact)","home.contactOpen":"Open (no contact)","home.occupied":"Occupied","home.vacant":"Vacant","home.closedPct":"Closed","home.up":"Up","home.down":"Down","home.stop":"Stop","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},LA={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","ui.spatial":"Prostor","ui.groups":"Skupiny","ui.info":"Info","ui.parentGroups":"Nad\u0159azen\xE9 skupiny","ui.childGroups":"Podskupiny","ui.childElements":"Prvky","home.title":"D\u016Fm","home.live":"\u017Div\u011B","home.off":"Vyp.","home.on":"Zap.","home.statusOff":"Offline model. Klepnut\xED m\u011Bn\xED jen tento pohled.","home.statusConnecting":"P\u0159ipojuji se k Home\u2026","home.statusLive":"\u017Div\u011B: stav z Home. Klepnut\xED pos\xEDlaj\xED p\u0159\xEDkazy.","home.statusLiveNoSim":"\u017Div\u011B: stav z Home. Stisky vyp\xEDna\u010D\u016F jsou na tomto serveru vypnut\xE9.","home.statusUnreachable":"Home nedostupn\xFD. Zobrazuji offline model a zkou\u0161\xEDm znovu.","home.failed":"Home p\u0159\xEDkaz odm\xEDtl","home.deviceOffline":"Za\u0159\xEDzen\xED offline (posledn\xED zn\xE1m\xFD stav)","home.unknown":"Nezn\xE1m\xFD","home.level":"Jas","home.warm":"Tepl\xE1","home.cool":"Studen\xE1","home.lastEvent":"Posledn\xED ud\xE1lost","home.noEvents":"Zat\xEDm bez stisku","home.contactClosed":"Zav\u0159eno (kontakt)","home.contactOpen":"Otev\u0159eno (bez kontaktu)","home.occupied":"Obsazeno","home.vacant":"Volno","home.closedPct":"Zav\u0159eno","home.up":"Nahoru","home.down":"Dol\u016F","home.stop":"Stop","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},Ap={en:{...IA,...CA},cs:{...LA,...PA}},Xo=vy(),Rp=new Set;function vy(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function DA(){try{let n=localStorage.getItem(_y);if(n==="en"||n==="cs")return n}catch{}return vy()}function NA(n){try{localStorage.setItem(_y,n)}catch{}}function ah(){return Xo}function by(n){if(!(n!=="en"&&n!=="cs")&&n!==Xo){Xo=n,NA(n);for(let e of Rp)try{e()}catch{}}}function Cp(n){return Rp.add(n),()=>Rp.delete(n)}function My(){return Xo=DA(),Xo}function Ut(n){let e=Ap[Xo]||Ap.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=Ap.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function Pp(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Ut(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Ut(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Ut(i))})}var Ip=44,lh=.05,OA=.05;function ch(n){let e=n&&n.material;if(!e)return!1;let t=Array.isArray(e)?e:[e];return t.length?t.every(i=>i&&i.visible!==!1&&!(i.transparent&&(i.opacity??1)<.99)):!1}function wy(n,e,t={}){let i=t.isOccluder||ch,r=t.tolerance??lh,s=1/0;for(let o of n){let a=Number.isFinite(o.distance)?o.distance:0;if(a>s+r)break;let l=e(o);if(l)return{hit:o,claim:l,wallT:s};s===1/0&&i(o.object)&&(s=a)}return{hit:null,claim:null,wallT:s}}function Ey(n,e,t={}){let i=(t.diameterPx??Ip)/2,r=t.depthTie??OA,s=[];for(let c of n){if(!c||!Number.isFinite(c.x)||!Number.isFinite(c.y)||!(c.depth>0))continue;let u=Math.hypot(c.x-e.x,c.y-e.y);u>i||s.push({c,dist:u})}let o=t.isOccluded?s.filter(c=>!t.isOccluded(c.c)):s;if(!o.length)return null;let a=o[0];for(let c of o)c.c.depth<a.c.depth&&(a=c);let l=null;for(let c of o)(c.c.depth<=a.c.depth+r||a.c.group!=null&&c.c.group===a.c.group)&&(!l||c.dist<l.dist||c.dist===l.dist&&c.c.depth<l.c.depth)&&(l=c);return l?l.c:null}var ei=new I;function Ty(n,e,t){e.updateMatrixWorld?.(),ei.copy(n).applyMatrix4(e.matrixWorldInverse);let i=-ei.z;return!(i>0)||(ei.copy(n).project(e),!(Math.abs(ei.x)<=1&&Math.abs(ei.y)<=1)||!(ei.z>=-1&&ei.z<=1))?null:{x:(ei.x+1)/2*t.w,y:(1-ei.y)/2*t.h,depth:i}}var ls=new ii,Sy=new Ge;function Ay(n,e,t,i,r={}){let s=r.keep||(()=>!0),o=r.isOccluder||ch,a=r.tolerance??lh,l;if(e.isOrthographicCamera)ei.copy(n).project(e),Sy.set(ei.x,ei.y),ls.setFromCamera(Sy,e),l=ei.copy(n).sub(ls.ray.origin).dot(ls.ray.direction);else{let u=new I().setFromMatrixPosition(e.matrixWorld),h=ei.copy(n).sub(u);if(l=h.length(),l<1e-9)return!1;ls.set(u,h.normalize())}ls.camera=e,ls.near=0,ls.far=Math.max(0,l);let c=ls.intersectObject(t,!0);for(let u of c){if(u.distance>=l-a)break;if(!(!s(u.object)||i(u.object))&&o(u.object))return!0}return!1}function Ry(n,e,t){let i=n.getCenter(new I),r=n.getSize(new I),s=r.y/4,o=r.x>=r.z?new I(1,0,0):new I(0,0,1);o.dot(t)<0&&o.negate();let a=Math.max(r.x,r.z)/4,l=[];return e.forEach((c,u)=>{let h=i.clone();e.length>1&&h.addScaledVector(o,u===0?-a:a),l.push({rocker:c,position:"up",center:h.clone().setY(h.y+s)}),l.push({rocker:c,position:"down",center:h.clone().setY(h.y-s)})}),l}function ks(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function zs(n){if(!n||!n.visible||ks(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function Cy(){let n=[];function e(l){n.push(l),n.sort((c,u)=>(u.priority||0)-(c.priority||0))}function t(l,c){for(let u of n){let h=u.claim?.(l,c);if(h)return h}return null}function i(l,c){let u=[];for(let h of l)c&&!c(h)||u.push(h);return u}function r(l){let{camera:c,root:u,tap:h,size:f}=l||{};if(!c||!u||!h||!f)return null;let d=[];for(let b of n){let S=b.targets?.(l);if(Array.isArray(S))for(let v of S){if(!v?.center)continue;let M=Ty(v.center,c,f);M&&d.push({...v,...M,handler:b})}}if(!d.length)return null;let m=b=>zs(b),x=Ey(d,h,{diameterPx:l.diameterPx??Ip,isOccluded:b=>Ay(b.center,c,u,S=>!!b.owns?.(S),{keep:m})});if(!x)return null;let g={...x.hit,point:x.hit?.point??x.center,extended:!0},p=x.handler.claim?.(g,l);return p?{hit:g,claim:p,target:x}:null}function s(l,c,u,h={}){let f=i(l,u),d=wy(f,g=>t(g,c),{isOccluder:g=>ch(g)});if(d.claim)return{kind:"direct",hit:d.hit,claim:d.claim};let m={...c,maxT:d.wallT+lh};for(let g of n)if(h.run?g.fallback?.(f,m):g.probe?.(f,m))return{kind:"fallback"};let x=r(c);if(x)return{kind:"extended",hit:x.hit,claim:x.claim};for(let g of f){let p=t(g,c);if(p)return{kind:"legacy",hit:g,claim:p}}return null}function o(l,c,u){let h=s(l,c,u,{run:!0});if(h?.kind==="fallback")return!0;if(h?.claim)return h.claim.onTap(),!0;let f=i(l,u);for(let d of n)if(d.fallback?.(f,c))return!0;return!1}function a(l,c,u){let h=s(l,c,u);return h?.claim?Array.isArray(h.claim.actions)?h.claim.actions.slice():[]:[]}return{register:e,dispatch:o,actionsFor:a,resolve:s,handlers:n}}var Py=8,UA=56,Iy=14,Lp=11,Ly=.5,FA=1e-4,uh=128,BA=.028,kA=5,zA=.995,HA=.999,Dy=18,VA=22,GA=14,Dp=new Ge,Ny=new ii,yi=new I,_i=new I,or=new I,zn=new I,Yo=new I,sr=new I,qo=new I,$o=new I,Ht=new I,Oy=new I,Zo=new I,WA=new yn;function Np(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function Op(n){return n.pointerType==="touch"}function Up(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function Uy(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function Wy(n){let{scene:e,canvas:t,getCamera:i,controls:r,getRoot:s,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=n,c="idle",u=!1,h=!1,f=0,d=0,m=null,x=null,g=null,p=null,b=null,S=null,v=null,M="mouse",w=0,y=0,E=!1,D=!1,N=new Et;N.name="MeasureOverlay",N.renderOrder=10,e.add(N);let k=new Et;k.name="MeasureDimensions",e.add(k);let q=ky(16766474),G=ky(3458905),O=zy(16766474,.75),Y=ZA(16766474);N.add(q,G,O,Y),q.visible=!1,G.visible=!1,O.visible=!1,Y.visible=!1;let ne=$A(t),j=[];function ve(){return u}function ie(we){let R=!!we;if(R===u){R&&ee();return}if(u=R,u)if(r.enabled=!1,c="placeFirst",H(),b=null,S=null,Uy()){let se=Math.max(1,t.clientWidth),K=Math.max(1,t.clientHeight);Ne(se*.5,K*.5,!0)}else Ae();else r.enabled=!0,c="idle",H(),b=null,S=null,v=null,D=!1,Ae(),a?.(null);l?.(u),ee(),xe()}function H(){h=!1,m=null,x=null,g=null,p=null}function ee(){c==="placeSecond"&&b&&m?a?.(Np(b.distanceTo(m))):u&&a?.(null)}function Ae(){ne.hidden=!0,q.visible=!1,Y.visible=!1}function Ne(we,R,se=!1){f=we,d=R,h=!0;let K=Oe(we,R);if(K){let Ce=K.point.clone(),J=K.kind,Se=K.edgeDir;if(p=null,c==="placeSecond"&&b){let ye=He(b,S,K);ye&&(Ce=ye.foot,J="perp",Se=ye.edgeDir,p=ye.edgeDir.clone())}m=Ce,x=J,g=Se}else se?m||(x=null,g=null,p=null):(m=null,x=null,g=null,p=null);xe(),ee()}function Q(we,R){let se=Ie(R)*kA;we.scale.setScalar(Math.max(se,1e-6))}function xe(){if(!u){Ae(),G.visible=!1,O.visible=!1,Y.visible=!1;return}b?(G.visible=!0,G.position.copy(b),Q(G,b)):G.visible=!1,h?(ne.hidden=!1,By(ne,t,f,d,x),m?(q.visible=!0,q.position.copy(m),Q(q,m),YA(q,x)):q.visible=!1):Ae(),c==="placeSecond"&&b&&m?(Vy(O,b,m),O.visible=!0):O.visible=!1,c==="placeSecond"&&x==="perp"&&b&&m&&p?(Hy(Y,b,m,p,Ie),Y.visible=!0):Y.visible=!1}function re(we){let R=t.getBoundingClientRect();return{x:we.clientX-R.left,y:we.clientY-R.top}}function V(we,R,se){return se==="touch"?{x:we,y:R-UA}:{x:we,y:R}}function te(we){let R=o()||[];for(let se of R)if(se.distanceToPoint(we)<-FA)return!1;return!0}function Ie(we){let R=i(),se=Math.max(1,t.clientHeight);if(R.isOrthographicCamera)return 2*((R.top-R.bottom)/(2*Math.max(R.zoom,1e-6)))/se;let K=R.position.distanceTo(we),Ce=R.fov*Math.PI/180;return 2*Math.tan(Ce/2)*K/se/Math.max(R.zoom,1e-6)}function We(we,R){R.copy(we).project(i());let se=Math.max(1,t.clientWidth),K=Math.max(1,t.clientHeight);return R.x=(R.x*.5+.5)*se,R.y=(-R.y*.5+.5)*K,R}function Oe(we,R){let se=s();if(!se)return null;let K=t.getBoundingClientRect();Dp.x=we/Math.max(1,K.width)*2-1,Dp.y=-(R/Math.max(1,K.height))*2+1,Ny.setFromCamera(Dp,i());let Ce=Ny.intersectObject(se,!0),J=null;for(let Me of Ce)if(!(!Me.object.visible||ks(Me.object))&&te(Me.point)){J=Me;break}if(!J)return null;let Se=J.object,ye=Se.geometry;if(!ye?.getAttribute("position"))return{point:J.point.clone(),kind:"face",edgeDir:null,mesh:Se,triVerts:null,faceNormal:null};Se.updateWorldMatrix(!0,!1);let Le=Ie(J.point),P=Le*Iy,T=Le*Lp,Z=ye.getAttribute("position"),ge=ye.getIndex(),pe=J.faceIndex,fe=[];if(J.face)yi.fromBufferAttribute(Z,J.face.a).applyMatrix4(Se.matrixWorld),_i.fromBufferAttribute(Z,J.face.b).applyMatrix4(Se.matrixWorld),or.fromBufferAttribute(Z,J.face.c).applyMatrix4(Se.matrixWorld),fe.push(yi.clone(),_i.clone(),or.clone());else if(typeof pe=="number"){let Me,Ue,$;ge?(Me=ge.getX(pe*3),Ue=ge.getX(pe*3+1),$=ge.getX(pe*3+2)):(Me=pe*3,Ue=pe*3+1,$=pe*3+2),yi.fromBufferAttribute(Z,Me).applyMatrix4(Se.matrixWorld),_i.fromBufferAttribute(Z,Ue).applyMatrix4(Se.matrixWorld),or.fromBufferAttribute(Z,$).applyMatrix4(Se.matrixWorld),fe.push(yi.clone(),_i.clone(),or.clone())}let be=null;fe.length===3&&(be=new I().subVectors(fe[1],fe[0]).cross(zn.subVectors(fe[2],fe[0])).normalize(),be.lengthSq()<1e-12&&(be=null));let ce=we,ue=R,F=null;function L(Me){if(!te(Me)||Me.distanceToSquared(J.point)>P*P*4)return;We(Me,$o);let Ue=Math.hypot($o.x-ce,$o.y-ue);Ue>Iy||(!F||Ue<F.distPx)&&(F={point:Me.clone(),distPx:Ue})}for(let Me of fe)L(Me);let W=P*P*4,z=Z.count,he=z>8e3?2:1;for(let Me=0;Me<z;Me+=he)zn.fromBufferAttribute(Z,Me).applyMatrix4(Se.matrixWorld),!(zn.distanceToSquared(J.point)>W)&&L(zn);if(F)return{point:F.point,kind:"vertex",edgeDir:null,mesh:Se,triVerts:fe.length?fe:null,faceNormal:be};let _e=null;function Ee(Me,Ue){Ht.copy(Ue).sub(Me);let $=Ht.lengthSq();if($<1e-18)return;let Pe=zn.copy(J.point).sub(Me).dot(Ht)/$;if(Pe=Math.min(1,Math.max(0,Pe)),Yo.copy(Me).addScaledVector(Ht,Pe),!te(Yo)||Yo.distanceToSquared(J.point)>T*T*4)return;We(Yo,$o);let $e=Math.hypot($o.x-ce,$o.y-ue);if($e>Lp)return;We(Me,sr),We(Ue,qo);let De=qo.x-sr.x,ot=qo.y-sr.y,Ct=De*De+ot*ot;if(Ct>1e-6){let Pt=((ce-sr.x)*De+(ue-sr.y)*ot)/Ct;Pt=Math.min(1,Math.max(0,Pt));let Cn=sr.x+De*Pt,ai=sr.y+ot*Pt;if(Math.hypot(ce-Cn,ue-ai)>Lp)return}(!_e||$e<_e.distPx)&&(_e={point:Yo.clone(),distPx:$e,dir:Ht.clone().normalize()})}return fe.length===3&&(Ee(fe[0],fe[1]),Ee(fe[1],fe[2]),Ee(fe[2],fe[0])),_e?{point:_e.point,kind:"edge",edgeDir:_e.dir,mesh:Se,triVerts:fe.length?fe:null,faceNormal:be}:{point:J.point.clone(),kind:"face",edgeDir:null,mesh:Se,triVerts:fe.length?fe:null,faceNormal:be}}function He(we,R,se){if(!se.mesh||!se.triVerts||se.triVerts.length!==3||!se.faceNormal||se.faceNormal.lengthSq()<1e-12)return null;let K=Ie(we),Ce=K*GA,J=Math.max(K*2,1e-5);if(Math.abs(hh(we,se.triVerts[0],se.faceNormal))>J)return null;let Se=Je(se.mesh,se.triVerts[0],se.faceNormal,J);if(!Se.length)return null;let ye=[];for(let T of Se)Fy(we,T.a,T.b)<=Ce&&ye.push(T.dir.clone());if(R&&R.lengthSq()>1e-12&&ye.push(R.clone().normalize()),!ye.length)return null;let Le=K*Dy,P=null;for(let T of ye)if(!(T.lengthSq()<1e-12)){T.normalize();for(let Z of Se){if(Math.abs(Z.dir.dot(T))<zA||Fy(we,Z.a,Z.b)<=Ce)continue;let ge=XA(we,Z.a,Z.b);if(!te(ge)||we.distanceTo(ge)*1e3<Ly||(Ht.copy(ge).sub(we),Ht.lengthSq()<1e-16)||(Ht.normalize(),Math.abs(Ht.dot(T))>.08))continue;let fe=se.point.distanceTo(ge);We(se.point,sr),We(ge,qo);let be=Math.hypot(sr.x-qo.x,sr.y-qo.y);if(fe>Le*1.35&&be>Dy)continue;let ce=be+fe/Math.max(K,1e-9);(!P||ce<P.score)&&(P={foot:ge.clone(),edgeDir:T.clone(),score:ce})}}return P?{foot:P.foot,edgeDir:P.edgeDir}:null}function Je(we,R,se,K){let Ce=we.geometry,J=Ce?.getAttribute("position");if(!J)return[];we.updateWorldMatrix(!0,!1);let Se=Ce.getIndex(),ye=new Map,Le=Math.max(K*.25,1e-5);function P(fe,be,ce){Zo.subVectors(be,fe).cross(zn.subVectors(ce,fe)),!(Zo.lengthSq()<1e-16)&&(Zo.normalize(),!(Math.abs(Zo.dot(se))<HA)&&(Math.abs(hh(fe,R,se))>K||Math.abs(hh(be,R,se))>K||Math.abs(hh(ce,R,se))>K||(T(fe,be),T(be,ce),T(ce,fe))))}function T(fe,be){if(Ht.copy(be).sub(fe),Ht.lengthSq()<1e-16)return;let ce=qA(fe,be,Le);ye.has(ce)||ye.set(ce,{a:fe.clone(),b:be.clone(),dir:Ht.clone().normalize()})}let Z=Se?Se.count/3:J.count/3,ge=12e3,pe=Z>ge?Math.ceil(Z/ge):1;for(let fe=0;fe<Z;fe+=pe){let be,ce,ue;if(Se){let F=fe*3;be=Se.getX(F),ce=Se.getX(F+1),ue=Se.getX(F+2)}else be=fe*3,ce=fe*3+1,ue=fe*3+2;yi.fromBufferAttribute(J,be).applyMatrix4(we.matrixWorld),_i.fromBufferAttribute(J,ce).applyMatrix4(we.matrixWorld),or.fromBufferAttribute(J,ue).applyMatrix4(we.matrixWorld),P(yi,_i,or)}return[...ye.values()]}function qe(){if(m){if(c==="placeFirst"){b=m.clone(),S=g?g.clone():null,c="placeSecond",p=null,(Op({pointerType:M})||!Uy())&&(h=!1,m=null,x=null,g=null,Ae()),xe(),ee();return}if(c==="placeSecond"&&b){if(b.distanceTo(m)*1e3<Ly)return;vt(b,m),ie(!1)}}}function vt(we,R){let se=new Et;se.name="Dimension";let K=zy(16752394,1);Vy(K,we,R),K.visible=!0;let Ce=we.clone().lerp(R,.5),J=we.distanceTo(R),Se=KA(Np(J));Se.position.copy(Ce),se.add(K,Se),k.add(se),j.push({group:se,sprite:Se,mid:Ce.clone(),span:J}),ht(Se,we,R,Ce,J)}function ht(we,R,se,K,Ce){let J=i();if(J.getWorldDirection(Oy),Ht.copy(se).sub(R),Ht.lengthSq()<1e-16){we.position.copy(K);return}Ht.normalize(),zn.crossVectors(Ht,Oy),zn.lengthSq()<1e-10&&zn.copy(J.up),zn.normalize();let Se=Math.max(Ce*BA,Ie(K)*18);we.position.copy(K).addScaledVector(zn,Se);let ye=Ie(we.position)*56;we.scale.set(ye*2.2,ye,1)}function ft(){G.visible&&b&&Q(G,b),q.visible&&m&&Q(q,m),h&&By(ne,t,f,d,x),Y.visible&&b&&m&&p&&x==="perp"&&Hy(Y,b,m,p,Ie);for(let we of j){let se=we.group.children[0].geometry.getAttribute("position");yi.fromBufferAttribute(se,0),_i.fromBufferAttribute(se,1),ht(we.sprite,yi,_i,we.mid,we.span)}}function je(we){if(!u||c==="idle"||!Up(we)||v!==null)return;let{x:R,y:se}=re(we),K=V(R,se,we.pointerType);Ne(K.x,K.y,!0)}function bt(we){if(!u||c==="idle"||we.button!==void 0&&we.button!==0||v!==null)return;v=we.pointerId,M=we.pointerType||"mouse";let{x:R,y:se}=re(we);w=R,y=se,E=!1,D=!1;try{t.setPointerCapture(we.pointerId)}catch{}if(Up(we)){let K=V(R,se,M);Ne(K.x,K.y,!0)}we.preventDefault()}function me(we){if(!u)return;if(v===null){je(we);return}if(v!==we.pointerId)return;let{x:R,y:se}=re(we);if(Math.hypot(R-w,se-y)>=Py&&(E=!0,D=!0),Op(we)){if(!D)return;let Ce=V(R,se,"touch");Ne(Ce.x,Ce.y,!0)}else if(Up(we)){let Ce=V(R,se,M);Ne(Ce.x,Ce.y,!0)}we.preventDefault()}function et(we){if(!u||v!==we.pointerId)return;let{x:R,y:se}=re(we);Math.hypot(R-w,se-y)>=Py&&(E=!0,D=!0),v=null;try{t.releasePointerCapture(we.pointerId)}catch{}if(Op(we)){E?D=!1:(D=!1,h&&m&&qe()),we.preventDefault();return}!E&&m&&qe(),D=!1,we.preventDefault()}function tt(we){v===we.pointerId&&(v=null,D=!1)}return t.addEventListener("pointerdown",bt),t.addEventListener("pointermove",me),t.addEventListener("pointerup",et),t.addEventListener("pointercancel",tt),{isActive:ve,setActive:ie,update:ft,formatMm:Np}}function hh(n,e,t){return WA.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function Fy(n,e,t){Ht.copy(t).sub(e);let i=Ht.lengthSq();if(i<1e-18)return n.distanceTo(e);let r=zn.copy(n).sub(e).dot(Ht)/i;return r=Math.min(1,Math.max(0,r)),Yo.copy(e).addScaledVector(Ht,r).distanceTo(n)}function XA(n,e,t){Ht.copy(t).sub(e);let i=Ht.lengthSq();if(i<1e-18)return e.clone();let r=zn.copy(n).sub(e).dot(Ht)/i;return r=Math.min(1,Math.max(0,r)),e.clone().addScaledVector(Ht,r)}function qA(n,e,t){let i=Math.round(n.x/t),r=Math.round(n.y/t),s=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return i<o||i===o&&r<a||i===o&&r===a&&s<=l?`${i},${r},${s}|${o},${a},${l}`:`${o},${a},${l}|${i},${r},${s}`}function $A(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function By(n,e,t,i,r){let s=e.getBoundingClientRect();n.style.left=`${s.left+t}px`,n.style.top=`${s.top+i}px`,n.dataset.snap=r||"none"}function ky(n){let e=new Da(1,16,12),t=new ln({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new ut(e,t);return i.renderOrder=20,i.visible=!1,i}function YA(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function zy(n,e){let t=new zt,i=new Float32Array(6);t.setAttribute("position",new Vt(i,3));let r=new Er({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),s=new qi(t,r);return s.renderOrder=19,s.frustumCulled=!1,s.visible=!1,s}function ZA(n){let e=new zt,t=new Float32Array(9);e.setAttribute("position",new Vt(t,3));let i=new Er({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),r=new qi(e,i);return r.renderOrder=22,r.frustumCulled=!1,r.visible=!1,r}function Hy(n,e,t,i,r){let s=r(t)*VA;if(Ht.copy(e).sub(t),Ht.lengthSq()<1e-16){n.visible=!1;return}if(Ht.normalize(),zn.copy(i).normalize(),Zo.crossVectors(zn,Ht),Zo.lengthSq()<1e-12){n.visible=!1;return}yi.copy(t).addScaledVector(zn,s),_i.copy(t),or.copy(t).addScaledVector(Ht,s);let o=n.geometry.getAttribute("position");o.setXYZ(0,yi.x,yi.y,yi.z),o.setXYZ(1,_i.x,_i.y,_i.z),o.setXYZ(2,or.x,or.y,or.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function Vy(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function KA(n){let e=document.createElement("canvas");e.width=uh*2,e.height=uh;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(uh*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(n),c=Math.ceil(l.width),u=Math.round(uh*.42),h=c+o*2,f=u+a*2,d=(e.width-h)/2,m=(e.height-f)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",Gy(t,d,m,h,f,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,Gy(t,d,m,h,f,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new Tr(e);i.colorSpace=Tt,i.needsUpdate=!0;let r=new To({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),s=new Sa(r);return s.renderOrder=21,s.center.set(.5,.5),s}function Gy(n,e,t,i,r,s){let o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function fh(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function Fi(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function Xy(n){let e="part",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let s=Fi(i);if(s.part&&(e=s.part),s.element)return{part:s.part,element:s.element}}t=t.parent||null}return{part:e,element:null}}var ph=12,jA=500,JA=Math.PI/2,QA=.03,qy=.001;function eR(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function tR(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>ph?"drag":"tap"}function mh(n,e){return(e>=0?1:-1)*n*JA}function nR(n,e=null){let t=n.length,i=new Map,r=a=>{let l=i.has(a)?i.get(a):a;return l!==a?(l=r(l),i.set(a,l)):i.has(a)||i.set(a,a),l},s=(a,l)=>{let c=r(a),u=r(l);c!==u&&i.set(c,u)};if(e){let a=new Map,l=1e4,c=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<c;u++){let h=`${Math.round(e.getX(u)*l)},${Math.round(e.getY(u)*l)},${Math.round(e.getZ(u)*l)}`,f=a.get(h);f===void 0?a.set(h,u):s(u,f)}}for(let a=0;a+2<t;a+=3)s(n[a],n[a+1]),s(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let l=r(n[a]),c=o.get(l);c||(c=[],o.set(l,c)),c.push(a)}return[...o.values()]}function $y(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let r=nR(t.array,i);if(r.length<2)return[n];let s=e.getAttribute("normal"),o=[];for(let a of r){let l=new Map,c=[],u=[],h=[],f=x=>{let g=l.get(x);return g!==void 0||(g=c.length/3,l.set(x,g),c.push(i.getX(x),i.getY(x),i.getZ(x)),s&&u.push(s.getX(x),s.getY(x),s.getZ(x))),g};for(let x of a)h.push(f(t.getX(x)),f(t.getX(x+1)),f(t.getX(x+2)));let d=new zt;d.setAttribute("position",new Wt(c,3)),u.length&&d.setAttribute("normal",new Wt(u,3)),d.setIndex(h);let m=new ut(d,n.material);m.name=n.name,m.position.copy(n.position),m.quaternion.copy(n.quaternion),m.scale.copy(n.scale),m.visible=n.visible,n.parent.add(m),o.push(m)}return n.parent.remove(n),e.dispose?.(),o}function iR(n,e=[]){let t=[];n.traverse(s=>{let o=s.name||"";if(Fi(o).part!=="door")return;let a=s.parent?.name||"";Fi(a).part!=="door"&&t.push(s)});let i=new Set((e||[]).filter(s=>s&&s.kind==="drawer"&&s.element).map(s=>String(s.element)));i.size&&n.traverse(s=>{let o=Fi(s.name||"");!o.element||!i.has(o.element)||Fi(s.parent?.name||"").element!==o.element&&t.push(s)});let r=[];for(let s of t){if(s.isMesh){r.push(...$y(s));continue}let o=[];if(s.traverse(a=>{a.isMesh&&o.push(a)}),o.length===1){let a=$y(o[0]);if(a.length>1){r.push(...a);continue}}r.push(s)}return r}function rR(n,e,t=QA){let i=[];for(let a of n)for(let l of e){if(!l)continue;let c=l.kind==="drawer"&&Array.isArray(l.slide),u=Ky(l)||jy(l);if(!c&&!u&&(l.kind!=="hinged"||!l.hinge))continue;let h=l.center;if(!Array.isArray(h)||h.length<3)continue;let f=a.center.x-Number(h[0]),d=a.center.y-Number(h[1]),m=a.center.z-Number(h[2]),x=Math.hypot(f,d,m);x<=t&&i.push({distance:x,entry:a,record:l})}i.sort((a,l)=>a.distance-l.distance);let r=new Set,s=new Set,o=[];for(let a of i)r.has(a.entry)||s.has(a.record.id)||(r.add(a.entry),s.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function sR(n){return n.updateWorldMatrix(!0,!0),new Nt().setFromObject(n).getCenter(new I)}function oR(n,e){let t=n.parent;if(!t)return null;if(e.kind==="drawer")return aR(n,e);if(Ky(e))return fR(n,e);if(jy(e))return hR(n,e);let i=new Et;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=new I(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(r)),i.updateWorldMatrix(!0,!1),i.attach(n);let s={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=s};return o(i),n.traverse(o),s}function aR(n,e){let t=n.parent;if(!t)return null;let i=new Et;i.name=`drawer:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=e.center.map(Number),s=e.slide.map(Number),o=t.worldToLocal(new I(r[0],r[1],r[2])),a=t.worldToLocal(new I(r[0]+s[0],r[1]+s[1],r[2]+s[2]));i.updateWorldMatrix(!0,!1),i.attach(n);let l={id:e.id,kind:"drawer",pivot:i,host:n,slideLocal:a.sub(o),sign:1,goal:0,anim:null},c=u=>{u.userData.bpDoor=l};return c(i),n.traverse(c),l}function Ky(n){return!!(n&&n.kind==="sliding"&&Array.isArray(n.start)&&Array.isArray(n.end)&&Array.isArray(n.panels)&&n.panels.length>0)}var lR=new I(1,0,0);function jy(n){return!!(n&&n.kind==="sectional"&&["start","end","bottom","top","inward"].every(e=>Array.isArray(n[e]))&&Number(n.sections)>=1)}function cR(n,e,t){if(n<=e||t<=0)return{y:n,z:0,tilt:0};let i=Math.PI/2*t;if(n<=e+i){let r=(n-e)/t;return{y:e+t*Math.sin(r),z:t*(1-Math.cos(r)),tilt:r}}return{y:e+t,z:t+(n-e-i),tilt:Math.PI/2}}function uR(n,e){return n+Math.PI/2*Math.max(0,e)}function hR(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=M=>t.worldToLocal(new I(Number(M[0]),Number(M[1]),Number(M[2]))),r=i(e.start),s=i(e.end),o=i(e.bottom),a=i(e.top),l=i([Number(e.bottom[0])+Number(e.inward[0]),Number(e.bottom[1])+Number(e.inward[1]),Number(e.bottom[2])+Number(e.inward[2])]),c=s.clone().sub(r),u=a.clone().sub(o),h=u.length();if(c.lengthSq()<1e-12||h<1e-6)return null;c.normalize(),u.normalize();let f=l.sub(o);if(f.addScaledVector(u,-f.dot(u)).addScaledVector(c,-f.dot(c)),f.lengthSq()<1e-12)return null;f.normalize();let d=new I().crossVectors(u,f),m=new rt().makeBasis(d,u,f),x=new Et;x.name=n.name,x.position.copy(o),x.quaternion.setFromRotationMatrix(m),t.add(x),x.updateWorldMatrix(!0,!1),x.attach(n);let g=Math.max(1,Math.round(Number(e.sections))),p=h/g,b=Math.max(0,Number(e.bend)||0),S=[];for(let M=0;M<g;M++){let w=M===0?n:n.clone(!0),y=new Et;y.name=`section:${e.id}:${M}`;let E=new Et;E.position.y=-p/2,E.scale.y=1/g,y.add(E),x.add(y),E.add(w),S.push({pivot:y,s0:(M+.5)*p})}let v={id:e.id,kind:"sectional",pivot:x,host:x,sections:S,rise:h,bend:b,travel:uR(h,b),sign:1,goal:0,anim:null};return Jy(v,0),x.traverse(M=>{M.userData.bpDoor=v}),v}function Jy(n,e){for(let t of n.sections){let i=cR(t.s0+e*n.travel,n.rise,n.bend);t.pivot.position.set(0,i.y,i.z),t.pivot.rotation.set(i.tilt,0,0)}}function fR(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=d=>t.worldToLocal(new I(Number(d[0]),Number(d[1]),Number(d[2]))),r=i(e.start),o=i(e.end).clone().sub(r);if(o.lengthSq()<1e-12)return null;let a=o.clone().normalize(),l=new Kt().setFromUnitVectors(lR,a),c=new Et;c.name=n.name,t.add(c);let u=e.panels.map((d,m)=>m===0?n:n.clone(!0)),h=[];e.panels.forEach((d,m)=>{let x=Array.isArray(d.span)?d.span.map(Number):[0,1],g=Array.isArray(d.slide)?d.slide:[0,0,0],p=i([Number(e.start[0])+Number(g[0]),Number(e.start[1])+Number(g[1]),Number(e.start[2])+Number(g[2])]).sub(r),b=new Et;b.name=`slide:${e.id}:${m}`,c.add(b);let S=new Et;S.position.copy(r),S.quaternion.copy(l),b.add(S),b.updateWorldMatrix(!0,!0);let v=u[m];v!==n&&(t.add(v),v.updateWorldMatrix(!0,!0)),S.attach(v),S.scale.x=Math.max(.001,x[1]-x[0]);let M=o.clone().multiplyScalar(x[0]);b.position.copy(M),h.push({pivot:b,base:M,slideLocal:p,span:x})});let f={id:e.id,kind:"sliding",pivot:c,host:c,panels:h,sign:1,goal:0,anim:null};return c.traverse(d=>{d.userData.bpDoor=f}),f}function ar(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/jA;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*eR(i)}var Yy=new Kt,_l=new I;function dR(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;_l.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(Yy).invert(),_l.applyQuaternion(Yy)),!(_l.lengthSq()<1e-12)&&(_l.normalize(),n.rotateOnAxis(_l,e))}function pR(n,e){let t=ar(n,e);if(n.sections)return Jy(n,t),t;if(n.panels){for(let i of n.panels)i.pivot.position.copy(i.base).addScaledVector(i.slideLocal,t);return t}return n.slideLocal?(n.pivot.position.copy(n.slideLocal).multiplyScalar(t),t):(dR(n.pivot,mh(t,n.sign)),t)}function mR(n,e){let t=ar(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function gR(n,e){let t=ar(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var dh=new I,xR=new ln({side:Ot,transparent:!0,opacity:0,depthWrite:!1});function yR(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(g=>{g.isMesh&&g.geometry?.getAttribute?.("position")&&e.push(g)}),!e.length)return null;let t=new I,i=new I,r=new I;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,r),t.lengthSq()<1e-12||i.lengthSq()<1e-12||r.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),r.normalize();let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let g of e){let p=g.geometry;p.boundingBox||p.computeBoundingBox();let b=p.boundingBox,S=[b.min.x,b.max.x],v=[b.min.y,b.max.y],M=[b.min.z,b.max.z];for(let w of S)for(let y of v)for(let E of M){dh.set(w,y,E).applyMatrix4(g.matrixWorld);let D=dh.dot(t),N=dh.dot(i),k=dh.dot(r);D<s&&(s=D),N<o&&(o=N),k<a&&(a=k),D>l&&(l=D),N>c&&(c=N),k>u&&(u=k)}}let h=[(l-s)/2,(c-o)/2,(u-a)/2];if(h.some(g=>!(g>1e-6)))return null;let f=(s+l)/2,d=(o+c)/2,m=(a+u)/2;return{center:new I(t.x*f+i.x*d+r.x*m,t.y*f+i.y*d+r.y*m,t.z*f+i.z*d+r.z*m),axes:[t,i,r],half:h}}function _R(n,e){let t=new $i(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new ut(t,xR);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function vR(n,e){let t=n.origin,i=n.direction,r=0,s=1/0;for(let o=0;o<3;o++){let a=e.axes[o],l=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),c=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(c)>1e-8){let h=(l+u)/c,f=(l-u)/c;if(h>f){let d=h;h=f,f=d}if(h>r&&(r=h),f<s&&(s=f),r>s)return null}else if(-l-u>0||-l+u<0)return null}return s<0?null:{tEnter:r,tExit:s}}function bR(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function Zy(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!ks(e))return e.userData.bpDoor;e=e.parent}return null}function MR(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function SR(n){return zs(n.object)}function wR(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function Qy(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),r=[],s=new ii,o=new Ge,a=null,l=0,c=null;function u(){c&&clearTimeout(c),c=null}function h(M,w,y){try{n.onToggle?.(M,{from:w,to:y})}catch(E){console.warn("door onToggle",E)}}let f=Cy();f.register({id:"door",priority:100,claim(M,w){let y=Zy(M.object);if(!y||y.host?.userData?.bpIfcHidden)return null;let E=w.now??performance.now(),D=ar(y,E)>qy,N=()=>{let k=w.now??performance.now(),q=ar(y,k);mR(y,k),h(y,q,y.goal)};return{onTap:N,actions:[{id:"door",labelKey:D?"ui.close":"ui.open",run:N}]}},targets(){let M=[];for(let w of r){let y=w.host;if(!y||y.userData?.bpIfcHidden||!MR(y))continue;let E=new Nt().setFromObject(y);if(E.isEmpty())continue;let D=E.getCenter(new I);M.push({center:D,group:`door:${w.id}`,hit:{object:y,point:D},owns:N=>Zy(N)===w})}return M}});function d(M){let w=[],y=Number.isFinite(M.maxT)?M.maxT:1/0;for(let E of r){if(!E.obb||E.host?.userData?.bpIfcHidden||ar(E,M.now)<=qy)continue;let D=vR(M.raycaster.ray,E.obb);!D||D.tEnter>y||w.push({binding:E,tEnter:D.tEnter})}return bR(w)}f.register({id:"opening",priority:10,probe:(M,w)=>!!d(w),fallback(M,w){let y=d(w);if(!y)return!1;let E=ar(y,w.now);return gR(y,w.now)?(h(y,E,0),!0):!1}});function m(M){for(let E of r)wR(E);if(r.length=0,!M||!e.length)return 0;M.updateWorldMatrix(!0,!0);let y=iR(M,e).map(E=>({host:E,center:sR(E)}));for(let E of rR(y,e)){let D=oR(E.entry.host,E.record);if(!D)continue;let N=D.kind==="drawer"?null:yR(D.host);D.obb=N,D.proxy=N?_R(N,`opening:${D.id}`):null,r.push(D)}return r.length}function x(M){let w=!1;for(let y of r){let E=!!y.anim;!E&&y.shown===y.goal||(pR(y,M),y.shown=y.anim?null:y.goal,E&&(w=!0))}return w}function g(M){if(!(M.button!==void 0&&M.button!==0)){if(l+=1,l>1){a=null;return}a={id:M.pointerId,x:M.clientX,y:M.clientY,moved:0,pointers:1,modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey,consumed:!1},u(),c=setTimeout(()=>{c=null,!(!a||a.consumed||fh({dt:500,dx:a.moved,dy:0,pointers:l,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function p(M){if(!a||M.pointerId!==a.id)return;let w=Math.hypot(M.clientX-a.x,M.clientY-a.y);w>a.moved&&(a.moved=w),a.moved>ph&&u()}function b(M){if(l=Math.max(0,l-1),u(),!a||M.pointerId!==a.id)return;let w=a;if(a=null,w.consumed)return;let y=Math.max(w.moved,Math.hypot(M.clientX-w.x,M.clientY-w.y));tR({dx:y,dy:0,pointers:l>0?2:1,button:M.button,blocked:i(),modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey})==="tap"&&v(M)}function S(){l=Math.max(0,l-1),a=null}function v(M){let w=n.getCamera();if(!w||!r.length)return;let y=t.getBoundingClientRect(),E=y.width||t.clientWidth||1,D=y.height||t.clientHeight||1;o.x=(M.clientX-y.left)/E*2-1,o.y=-((M.clientY-y.top)/D)*2+1,s.setFromCamera(o,w);let k=r[0]?.pivot?.parent;for(;k?.parent;)k=k.parent;if(!k)return;let q=s.intersectObject(k,!0);f.dispatch(q,{raycaster:s,now:performance.now(),camera:w,root:k,tap:{x:M.clientX-y.left,y:M.clientY-y.top},size:{w:E,h:D}},SR)}return t.addEventListener("pointerdown",g,!0),t.addEventListener("pointermove",p,!0),t.addEventListener("pointerup",b,!0),t.addEventListener("pointercancel",S,!0),t.addEventListener("contextmenu",M=>M.preventDefault()),{bind:m,step:x,bindings:r,taps:f}}var ER=.8,TR=.4,e_=.01,AR=1e-9;function Fp(n){let e=Array.isArray(n?.slide)?n.slide.map(Number):[];return e.length===3&&e.some(t=>Math.abs(t)>AR)}function RR(n){return n?n.operable===!1?!1:Array.isArray(n.panels)&&n.panels.some(Fp):!0}function CR(n,e){let t=Array.isArray(n?.panels)?n.panels:[],i=-1,r=1/0;return t.forEach((s,o)=>{if(!Array.isArray(s.min)||!Array.isArray(s.max))return;let a=!0,l=0;for(let c=0;c<3;c++){let u=Number(s.min[c])-e_,h=Number(s.max[c])+e_;(e[c]<u||e[c]>h)&&(a=!1);let f=(Number(s.min[c])+Number(s.max[c]))/2;l+=(e[c]-f)**2}a&&l<r&&(i=o,r=l)}),i}var t_=new Nt,bl=new I;function PR(n){let e=n.geometry;return e&&!e.boundingBox&&e.computeBoundingBox?.(),n.updateWorldMatrix?.(!0,!1),e?.boundingBox?(t_.copy(e.boundingBox).applyMatrix4(n.matrixWorld),t_.getCenter(bl)):n.getWorldPosition(bl),[bl.x,bl.y,bl.z]}function n_(n=[]){let e=new Map;for(let d of Array.isArray(n)?n:[])d&&d.id&&e.set(String(d.id),d);let t=new Map;function i(d){let m=0;for(let g of d){let p=g.geometry;p&&!p.boundingBox&&p.computeBoundingBox?.(),p?.boundingBox&&(m=Math.max(m,p.boundingBox.max.x-p.boundingBox.min.x))}let x=(m||TR)*ER;return{record:null,moving:d.map(g=>({mesh:g,slideLocal:new I(x,0,0),panel:0})),fixed:new Set,panelOf:new Map(d.map(g=>[g,0]))}}function r(d,m){let x=[],g=new Set,p=new Map;for(let b of m){let S=PR(b),v=CR(d,S),M=v>=0?d.panels[v]:null;if(p.set(b,v),!M||!Fp(M)){g.add(b);continue}let w=M.slide.map(Number),y=b.parent,E=new I(w[0],w[1],w[2]);if(y){y.updateWorldMatrix(!0,!1);let D=y.worldToLocal(new I(S[0],S[1],S[2]));E=y.worldToLocal(new I(S[0]+w[0],S[1]+w[1],S[2]+w[2])).sub(D)}x.push({mesh:b,slideLocal:E,panel:v})}return{record:d,moving:x,fixed:g,panelOf:p}}function s(d,m){let x=t.get(d);if(x)return x;let g=e.get(String(d))||null,p=g?r(g,m):i(m);for(let{mesh:b}of p.moving)b.userData.bpSlideOrigin||(b.userData.bpSlideOrigin=b.position.clone());return x={...p,goal:0,anim:null,shown:0},t.set(d,x),x}function o(d){return e.get(String(d))||null}function a(d){return RR(o(d))}function l(d,m){if(!a(d))return[];let x=s(d,m),g=new Set(x.moving.map(p=>p.mesh));return m.filter(p=>g.has(p))}function c(d,m,x){let g=new Set(l(d,m));if(!g.size)return!1;if(!x)return!0;for(let p=x;p;p=p.parent)if(g.has(p))return!0;return!1}function u(d,m,x,g){if(!a(d))return!1;let p=s(d,m);if(!p.moving.length)return!1;let b=ar(p,g);return p.goal=x?1:0,p.anim={from:b,to:p.goal,t0:g},p.shown=null,!0}function h(d){let x=o(d)?.panels?.find(Fp);return x?x.slide.map(Number):null}function f(d){let m=!1;for(let x of t.values()){if(!x.anim&&x.shown===x.goal)continue;let g=ar(x,d);for(let{mesh:p,slideLocal:b}of x.moving)p.position.copy(p.userData.bpSlideOrigin).addScaledVector(b,g);x.shown=x.anim?null:x.goal,m=!0}return m}return{slide:u,step:f,slides:t,isOperable:a,operableMeshes:l,acceptsHit:c,slideOf:h,recordOf:o}}var IR=700,LR=36,Ko=36;function DR(n,e=!1){let t=Math.min(Math.max(n,0),1),i=t<.2?1:1-(t-.2)/.8;if(e)return{opacity:i,rise:0,scale:1};let r=1-(1-t)*(1-t),s=t<.15?.7+.3*t/.15:1;return{opacity:i,rise:LR*r,scale:s}}function i_(n,e){let t=e.x-n.x,i=e.y-n.y;return Math.hypot(t,i)<1e-6?null:Math.atan2(i,t)*180/Math.PI}function NR(n){return n==="down"?90:-90}function r_(n,e,t){let i=n[0]-e[0],r=n[2]-e[2],s=Math.cos(t),o=Math.sin(t);return[e[0]+s*i+o*r,n[1],e[2]-o*i+s*r]}function OR(n,e,t){let i=i_(n,e);if(i==null)return null;let r=e.x-n.x,s=e.y-n.y,o=(n.x+e.x)/2,a=(n.y+e.y)/2,c=r*(t.y-a)-s*(t.x-o)>=0?1:-1;return{angle:i+45*c,bend:c}}function UR(n=IR){let e=[],t=1;return{items:e,add(i,r){let s={id:t++,t0:i,data:r};return e.push(s),s},step(i){let r=[],s=[];for(let o=e.length-1;o>=0;o-=1)(i-e[o].t0)/n>=1&&s.push(...e.splice(o,1));for(let o of e)r.push({item:o,t:(i-o.t0)/n});return{alive:r,expired:s}}}}var FR="http://www.w3.org/2000/svg",Bp='fill="#16181d" stroke="#fff" stroke-width="2.2" stroke-linejoin="round" paint-order="stroke"',BR={arrow:`<path ${Bp} d="M4 12.5 H17 V6 L29 16 L17 26 V19.5 H4 Z"/>`,hinge:`<path fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path fill="none" stroke="#16181d" stroke-width="4.4" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path ${Bp} d="M17 5.5 L28 13 L17 20.5 Z"/>`,ring:`<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" stroke-width="6"/><circle cx="16" cy="16" r="9" fill="none" stroke="#16181d" stroke-width="3"/><circle cx="16" cy="16" r="3" ${Bp}/>`},cs=null;function kR(n=globalThis){try{let e=n.navigator;if(e&&typeof e.vibrate=="function"&&e.vibrate(10))return"vibrate";let t=n.document,i=n.matchMedia?.("(pointer: coarse)")?.matches;if(!t||!i)return"none";if(!cs){cs=t.createElement("label"),cs.setAttribute("aria-hidden","true"),cs.style.display="none";let r=t.createElement("input");r.type="checkbox",r.setAttribute("switch",""),cs.appendChild(r)}return t.head.appendChild(cs),cs.click(),cs.remove(),"ios-switch"}catch{return"none"}}function s_(n){let e=n.document||globalThis.document,t=n.now||(()=>performance.now()),i=n.requestFrame||(p=>globalThis.requestAnimationFrame(p)),r=n.reducedMotion||(()=>!!globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches),s=n.haptics||(()=>kR()),o=UR(),a=new I,l=null,c=!1;function u(){return l||(l=e.createElement("div"),l.className="bp-feedback",l.setAttribute("aria-hidden","true"),Object.assign(l.style,{position:"fixed",left:"0",top:"0",width:"0",height:"0",pointerEvents:"none",zIndex:"40"}),e.body.appendChild(l),l)}function h(p){let b=n.getCamera();if(!b||(Array.isArray(p)?a.set(p[0],p[1],p[2]):a.copy(p),b.updateMatrixWorld?.(),a.project(b),!Number.isFinite(a.x)||a.z>1||a.z<-1))return null;let S=n.canvas.getBoundingClientRect();return{x:S.left+(a.x+1)/2*S.width,y:S.top+(1-a.y)/2*S.height}}function f(p,b){let S=h(p),v=Array.isArray(p)?new I(...p):p.clone(),M=Array.isArray(b)?new I(...b):b.clone(),w=M.length();if(w<1e-9)return null;let y=h(v.add(M.multiplyScalar(.1/w)));return!S||!y?null:i_(S,y)}function d(p){if(p.haptic!==!1)try{s()}catch{}try{return m(p)}catch(b){return console.warn("feedback",b),null}}function m(p){if(!e?.body||!p?.worldPos)return null;let b="arrow",S=-90,v=1;if(p.kind==="switch"||p.kind==="lift")S=NR(p.direction||"up");else if(p.kind==="slide"){let D=p.worldDir?f(p.worldPos,p.worldDir):null;if(D==null)return null;S=D}else if(p.kind==="hinge"){let D=h(p.worldPos),N=p.to?h(p.to):null,k=p.hinge?h(p.hinge):null,q=D&&N&&k?OR(D,N,k):null;if(!q)return null;b="hinge",S=q.angle,v=q.bend}else p.kind==="light"&&(b="ring",S=0);let M=Array.isArray(p.worldPos)?new I(...p.worldPos):p.worldPos.clone();if(p.kind==="hinge"&&p.to){let D=Array.isArray(p.to)?new I(...p.to):p.to;M.lerp(D,.5)}let w=e.createElement("div");w.className=`bp-feedback-item bp-feedback-${p.kind}`,Object.assign(w.style,{position:"absolute",left:"0",top:"0",width:`${Ko}px`,height:`${Ko}px`,marginLeft:`${-Ko/2}px`,marginTop:`${-Ko/2}px`,willChange:"transform, opacity",filter:"drop-shadow(0 1px 2px rgba(0,0,0,.45))"});let y=e.createElementNS(FR,"svg");y.setAttribute("viewBox","0 0 32 32"),y.setAttribute("width",String(Ko)),y.setAttribute("height",String(Ko)),y.style.overflow="visible",y.style.transform=`rotate(${S}deg) scale(1, ${v})`,y.innerHTML=BR[b],w.appendChild(y),u().appendChild(w);let E=o.add(t(),{el:w,anchor:M,kind:p.kind});return x(E,0),c||(c=!0,i(g)),E}function x(p,b){let{el:S,anchor:v,kind:M}=p.data,w=h(v);if(!w){S.style.opacity="0";return}let y=DR(b,r()),E=M==="light"?.8+.7*Math.min(Math.max(b,0),1):y.scale,D=M==="light"?0:y.rise;S.style.opacity=String(y.opacity),S.style.transform=`translate(${w.x.toFixed(1)}px, ${(w.y-D).toFixed(1)}px) scale(${E.toFixed(3)})`}function g(){let{alive:p,expired:b}=o.step(t());for(let S of b)S.data.el.remove();for(let{item:S,t:v}of p)x(S,v);p.length?i(g):c=!1}return{showFeedback:d,count:()=>o.items.length,tick:g}}var zR=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t),actions:(n,e,t,i)=>i.switchActions?.(n,e,t)},{type:"IfcActuator",id:"cover",priority:55,liveOnly:!0,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onCover?.(n,e,t),actions:(n,e,t,i)=>i.coverActions?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t),accepts:(n,e,t)=>t.windowAccepts?t.windowAccepts(n,e):!0}];function o_(n,e){for(let t of zR)n.register({id:t.id,priority:t.priority,claim(i,r){let s=e.elementOf?.(i.object);if(!s||s.type!==t.type||t.liveOnly&&!e.isLive?.(s)||t.accepts&&!t.accepts(s,i,e))return null;let o=()=>t.run(s,i,r,e),a=t.actions?.(s,i,r,e);return{onTap:o,actions:Array.isArray(a)&&a.length?a:[{id:t.id,labelKey:t.labelKey(s,e),run:o}]}},targets(i){let r=e.targetsFor?.(t.type,i);return Array.isArray(r)?t.liveOnly?r.filter(s=>e.isLive?.(s.element)):r:[]}})}var HR="https://home-test.tail9f879b.ts.net",l_="blueprints.homeMode",VR=new Set(["IfcLightFixture","IfcSwitchingDevice","IfcSensor","IfcActuator"]),a_=[2e3,5e3,15e3,3e4,6e4],GR=5e3;function c_(n){for(let e of Object.values(n?.elements||{}))if(e&&VR.has(e.type||""))return!0;return!1}function u_(n={}){let e;try{e=new URLSearchParams(n.search||"")}catch{e=new URLSearchParams}let t="live",i=null;try{i=n.storage?.getItem(l_)??null}catch{i=null}(i==="off"||i==="live")&&(t=i);let r=(e.get("home")||"").trim().toLowerCase();(r==="off"||r==="live")&&(t=r);let s=HR,o=(e.get("homeUrl")||"").trim();if(o)try{let a=new URL(o);(a.protocol==="https:"||a.protocol==="http:")&&(s=a.href.replace(/\/+$/,""))}catch{}return{mode:t,baseUrl:s}}function h_(n,e){try{n?.setItem(l_,e)}catch{}}function WR(n){let e=new URL(n.replace(/\/+$/,"")+"/events");return e.protocol=e.protocol==="http:"?"ws:":"wss:",e.href}function XR(n,e,t=""){return`${n.replace(/\/+$/,"")}/devices/${encodeURIComponent(e)}${t}`}function qR(n,e){return`${n.replace(/\/+$/,"")}/simulate/devices/${encodeURIComponent(e)}/press`}var gh=4868682;function kp(n){let e=[[2200,16751135],[3e3,16758835],[4e3,16766814],[5e3,16773816],[6500,15266303]],t=Number.isFinite(n)?Math.min(Math.max(n,e[0][0]),e.at(-1)[0]):3e3,i=0;for(;i<e.length-2&&t>e[i+1][0];)i+=1;let[r,s]=e[i],[o,a]=e[i+1],l=(t-r)/(o-r),c=(h,f)=>h>>f&255,u=h=>Math.round(c(s,h)+(c(a,h)-c(s,h))*l);return u(16)<<16|u(8)<<8|u(0)}function zp(n){let e=n?.state||{},t=!!(n?.online&&e.onOff?.onOff===!0),i=e.levelControl?.currentLevel,r=Number.isFinite(i)?Math.min(Math.max(i/254,0),1):1,s=e.colorControl?.colorTemperatureMireds,o=Number.isFinite(s)&&s>0?Math.round(1e6/s):null,a=t?kp(o):gh;return{on:t,level:r,kelvin:o,color:a}}function Ml(n){return n?.objectType==="DoublePushButton"?["rocker-1","rocker-2"]:["rocker"]}function f_(n,e){let t=Ml(n);return{rocker:t.length>1?t[e.side<0?0:1]:t[0],position:e.dy>=0?"up":"down",kind:"short"}}function d_(n,e){if(!n)return[];let t=[];n.online||t.push(e("home.deviceOffline"));let i=n.state||{};switch(n.deviceType){case"ColorTemperatureLight":{let r=i.onOff?.onOff;t.push(r==null?e("home.unknown"):e(r?"home.on":"home.off"));let s=zp({...n,online:!0});Number.isFinite(i.levelControl?.currentLevel)&&t.push(`${e("home.level")} ${Math.round(s.level*100)} %`),s.kelvin&&t.push(`${s.kelvin} K`);let o=i.derived?.channels;o&&t.push(`${e("home.warm")} ${Math.round(o.warm)} % \xB7 ${e("home.cool")} ${Math.round(o.cool)} %`);break}case"GenericSwitch":{let r=i.switch?.lastEvent;r?t.push(`${e("home.lastEvent")}: ${r.rocker} ${r.position} ${r.event}`):t.push(e("home.noEvents"));break}case"ContactSensor":{let r=i.booleanState?.stateValue;t.push(r==null?e("home.unknown"):e(r?"home.contactClosed":"home.contactOpen"));break}case"OccupancySensor":{let r=i.occupancySensing?.occupancy;t.push(r==null?e("home.unknown"):r.occupied?e("home.occupied"):e("home.vacant"));break}case"WindowCovering":{let r=i.windowCovering?.currentPositionLiftPercent100ths;t.push(r==null?e("home.unknown"):`${e("home.closedPct")} ${Math.round(r/100)} %`);break}default:break}return t}function p_(n){let e=n.fetchImpl||globalThis.fetch?.bind(globalThis),t=n.WebSocketImpl||globalThis.WebSocket,i=n.setTimer||((v,M)=>setTimeout(v,M)),r=n.clearTimer||(v=>clearTimeout(v)),s=new Map,o="off",a=!1,l=!1,c=0,u=0,h=null,f=null;function d(v,M){if(!(o===v&&!M)){o=v;try{n.onStatus?.(v,M)}catch(w){console.error("home onStatus",w)}}}function m(v,...M){try{v?.(...M)}catch(w){console.error("home handler",w)}}function x(v){if(!l||v!==u)return;let M=a_[Math.min(c,a_.length-1)];c+=1,f=i(()=>{f=null,l&&v===u&&b(v)},M)}function g(v){if(!v||typeof v.globalId!="string")return;let M=s.get(v.globalId);s.set(v.globalId,v),m(n.onDevice,v,M)}function p(v){let M;try{M=JSON.parse(typeof v=="string"?v:String(v))}catch{return}if(!(!M||typeof M!="object"))if(M.type==="snapshot"&&Array.isArray(M.devices)){c=0;for(let w of M.devices)g(w);d("live"),m(n.onSnapshot,M.devices)}else M.type==="state"&&M.device?g(M.device):M.type==="switch"&&M.event&&m(n.onSwitch,M.event)}async function b(v){if(!e||!t){d("unreachable","no fetch/WebSocket");return}d(o==="live"?"connecting":o==="unreachable"?"unreachable":"connecting");let M=null;try{let y=typeof AbortController=="function"?new AbortController:null,E=i(()=>y?.abort(),GR);try{let D=await e(`${n.baseUrl.replace(/\/+$/,"")}/health`,{signal:y?.signal,cache:"no-store"});D.ok&&(M=await D.json())}finally{r(E)}}catch{M=null}if(!l||v!==u)return;if(!M||M.status!=="ok"){d("unreachable"),x(v);return}a=!!M.simulation;let w;try{w=new t(WR(n.baseUrl))}catch{d("unreachable"),x(v);return}h=w,w.onmessage=y=>{v===u&&p(y.data)},w.onclose=()=>{h===w&&(h=null),!(!l||v!==u)&&(d(o==="live"?"connecting":"unreachable"),x(v))},w.onerror=()=>{}}async function S(v,M){if(!e||o!=="live")return{ok:!1,status:0};try{let w=await e(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)}),y="";if(!w.ok)try{let E=await w.json();y=E?.error?.message||E?.error?.code||""}catch{}return{ok:w.ok,status:w.status,error:y}}catch(w){return{ok:!1,status:0,error:String(w?.message||w)}}}return{start(){l||(l=!0,c=0,u+=1,b(u))},stop(){l=!1,u+=1,f!=null&&r(f),f=null;let v=h;h=null;try{v?.close()}catch{}s.clear(),a=!1,d("off")},status:()=>o,isLive:()=>o==="live",simulation:()=>a,device:v=>o==="live"?s.get(v):void 0,lastKnown:v=>s.get(v),devices:()=>[...s.values()],command:(v,M)=>S(XR(n.baseUrl,v,"/commands"),M),press:(v,M)=>S(qR(n.baseUrl,v),M)}}var $R=new Set(["IfcGroup","IfcSystem","IfcZone","IfcDistributionSystem","IfcDistributionCircuit","IfcBuildingSystem","IfcStructuralAnalysisModel"]);function vi(n){return $R.has(n?.type)}function xh(n,e){return e?Array.isArray(n.groups)?n.groups.includes(e):vi(n.elements?.[e]):!1}function g_(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(r=>e[r]):[],i=Array.isArray(n?.groups)?n.groups.filter(r=>e[r]):Object.values(e).filter(vi).map(r=>r.globalId);return{elements:e,roots:t,groups:i}}function yh(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let r=i.parentId||null;(r===e||!r&&i.containerId===e)&&t.push(i)}return t.sort((i,r)=>{let s=(i.order??0)-(r.order??0);return s||String(i.name||"").localeCompare(String(r.name||""))}),t.map(i=>i.globalId)}function Hp(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=s.parentId||s.containerId||null}return t.reverse(),t}function Vp(n,e){return Hp(n,e).slice(0,-1)}function Gp(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of yh(n,s))r(a,o+1)};for(let s of n.roots)r(s,0);return t}function _h(n,e){let t=n.elements[e];if(t&&Array.isArray(t.childGroupIds))return __(n,t.childGroupIds.filter(r=>n.elements[r]));let i=[];for(let r of Object.values(n.elements)){if(!vi(r))continue;(r.parentGroupIds||r.groups||[]).includes(e)&&i.push(r)}return i.sort(y_),i.map(r=>r.globalId)}function YR(n){let t=(Array.isArray(n.groups)?n.groups.filter(i=>n.elements[i]):Object.values(n.elements).filter(vi).map(i=>i.globalId)).filter(i=>{let r=n.elements[i];return!(r.parentGroupIds||r.groups||[]).some(o=>xh(n,o))});return __(n,t)}function ZR(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=(s.parentGroupIds||s.groups||[]).find(a=>xh(n,a))||null}return t.reverse(),t}function x_(n,e){return ZR(n,e).slice(0,-1)}function Wp(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of _h(n,s))r(a,o+1)};for(let s of YR(n))r(s,0);return t}function y_(n,e){let t=s=>{let o=s?.id||"";return o==="GRP-FURNITURE"?0:o==="GRP-ELECTRICAL"?1:10},i=t(n)-t(e);if(i)return i;let r=(n.order??0)-(e.order??0);return r||String(n.name||"").localeCompare(String(e.name||""))}function __(n,e){let t=[],i=new Set;for(let r of e)!r||i.has(r)||!n.elements[r]||(i.add(r),t.push(r));return t.sort((r,s)=>y_(n.elements[r],n.elements[s])),t}function v_(n){return Math.min(Math.max(0,n),4)*12}function b_(n,e,t,i,r=44,s=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/r)-s),l=Math.min(i,Math.ceil((o+e)/r)+s);return{start:a,end:Math.max(a,l)}}var m_=new WeakMap;function KR(n,e){let t=n.elements[e];if(t&&(Array.isArray(t.memberIds)||Array.isArray(t.childGroupIds)))return[...t.childGroupIds||[],...t.memberIds||[]].filter(s=>s&&n.elements[s]);let i=m_.get(n.elements);if(!i){i=new Map;for(let r of Object.values(n.elements))for(let s of r?.groups||[])i.has(s)||i.set(s,[]),i.get(s).push(r.globalId);m_.set(n.elements,i)}return i.get(e)||[]}function us(n,e){let t=[],i=[e],r=new Set;for(;i.length;){let s=i.pop();if(!(!s||r.has(s)||!n.elements[s])){r.add(s),t.push(s);for(let o of yh(n,s))i.push(o);for(let o of KR(n,s))i.push(o)}}return t}function Xp(n,e){let t=null,i=null,r=new Set,s=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;s&&n.elements[s]&&!r.has(s);){r.add(s);let o=n.elements[s];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),s=o.containerId||o.parentId||null}return{storey:t,space:i}}function qp(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([r])=>r!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[r,s]of i)e.push(`${r}: ${M_(s)}`)}}return e}function M_(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function S_(n,e){return n&&n===e?"frame":"pulse"}function $p(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${M_(e.value)}`):[]}var jR=`<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.5 4.2h8.2v1.35H2.5V4.2zm0 5.1h8.2v1.35H2.5V9.3zm0 5.15h8.2V15.8H2.5v-1.35z"/>
  <path fill="currentColor" d="M13.2 6.15l3.15 3.15-3.15 3.15-1.05-1.05 1.35-1.35H11.2V8.55h2.3L12.15 7.2l1.05-1.05z"/>
</svg>`;function w_(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},closePopover(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let r=document.createElement("span");r.dataset.i18n="ui.inspector",r.textContent=n.t("ui.inspector");let s=document.createElement("span");s.className="ifc-entry-chevron",s.setAttribute("aria-hidden","true"),s.textContent="\u203A",i.append(r,s),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let l=document.createElement("button");l.type="button",l.className="ifc-back",l.dataset.noSheetDrag="true";let c=document.createElement("button");c.type="button",c.className="ifc-show-all",c.hidden=!0,c.dataset.noSheetDrag="true",a.append(l,c);let u=document.createElement("div");u.className="seg ifc-tabs",u.dataset.noSheetDrag="true";let h=document.createElement("button");h.type="button";let f=document.createElement("button");f.type="button",u.append(h,f);let d=document.createElement("div");d.className="ifc-crumbs",d.dataset.noSheetDrag="true";let m=document.createElement("div");m.className="ifc-tree";let x=document.createElement("div");x.className="ifc-panes";let g=document.createElement("div");g.className="ifc-panes-track";let p=j(),b=j();g.append(p.root,b.root),x.append(g),m.append(x);let S=document.createElement("div");S.className="ifc-info",S.hidden=!0;let v=document.createElement("div");v.className="ifc-head",v.append(a,u,d),o.append(v,m,S),e.append(t,o);let M=document.createElement("div");M.id="ifc-popover",M.hidden=!0,M.className="ifc-popover",document.body.append(M);let w=document.createElement("div");w.id="ifc-row-menu",w.hidden=!0,w.className="ifc-menu",document.body.append(w);let y=new Set,E=new Set,D="spatial",N=null,k=null,q=null,G=0,O=null,Y=[],ne={spatial:0,groups:0};function j(){let F=document.createElement("div");F.className="ifc-pane";let L=document.createElement("div");L.className="ifc-list";let W=document.createElement("div");W.className="ifc-list-spacer";let z=document.createElement("div");return z.className="ifc-list-window",L.append(W,z),F.append(L),{root:F,list:L,spacer:W,windowEl:z}}function ve(){o.hidden=!0,t.hidden=!1,se(),Ce()}function ie(){t.hidden=!0,o.hidden=!1,re(),requestAnimationFrame(()=>re())}function H(){n.openSheet(),ie(),e.scrollTop=0}i.addEventListener("click",()=>H()),l.addEventListener("click",()=>{if(O){J();return}ve(),e.scrollTop=0}),c.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),re()}),h.addEventListener("click",()=>ee("spatial")),f.addEventListener("click",()=>ee("groups"));function ee(F,{animate:L=!0,keepScroll:W=!1}={}){F!=="spatial"&&F!=="groups"||D!==F&&(O||(ne[D]=e.scrollTop),D=F,L||g.classList.add("is-instant"),O?g.classList.toggle("is-groups",D==="groups"):(re(),W||(e.scrollTop=ne[F]||0),Je()),L||requestAnimationFrame(()=>g.classList.remove("is-instant")))}function Ae(F){let L=n.index.elements[F];return L&&(L.name||L.id||L.type)||F}function Ne(){return D==="groups"?k:N}function Q(F){D==="groups"?k=F:N=F}function xe(){if(d.replaceChildren(),D!=="spatial"||O){d.hidden=!0;return}let F=N?Hp(n.index,N):[];if(!F.length){d.hidden=!0;return}d.hidden=!1,F.forEach((L,W)=>{if(W){let he=document.createElement("span");he.className="ifc-crumb-sep",he.textContent="\u203A",d.append(he)}let z=document.createElement("button");z.type="button",z.className="ifc-crumb",z.textContent=Ae(L),z.addEventListener("click",()=>{N=L;for(let he of Vp(n.index,L))y.add(he);re(),me(L)}),d.append(z)})}function re(){let F=!!O;if(F){let L=Y.length?Y[Y.length-1]:null;l.textContent=L?`\u2039 ${Ae(L)}`:`\u2039 ${n.t("ui.inspector")}`}else l.textContent=`\u2039 ${n.t("ui.menu")}`;c.textContent=n.t("ui.showAll"),c.hidden=!n.visibility.anyHidden(),r.textContent=n.t("ui.inspector"),h.textContent=n.t("ui.spatial"),f.textContent=n.t("ui.groups"),h.classList.toggle("is-active",D==="spatial"),f.classList.toggle("is-active",D==="groups"),u.hidden=F,m.hidden=F,S.hidden=!F,g.classList.toggle("is-groups",D==="groups"),xe(),F?Le():Je()}function V(F){let L=e.getBoundingClientRect();return F.getBoundingClientRect().top-L.top+e.scrollTop}function te(){let F=e.getBoundingClientRect();return v.getBoundingClientRect().bottom-F.top+6}function Ie(){return D==="groups"?b:p}function We(){return D==="groups"?Wp(n.index,E):Gp(n.index,y)}function Oe(F){return D==="groups"?_h(n.index,F):yh(n.index,F)}function He(F,L,W){if(F.spacer.style.height=`${L.length*44}px`,!W){F.windowEl.replaceChildren();return}let z=b_(e.scrollTop,e.clientHeight||320,V(F.list),L.length,44);F.windowEl.replaceChildren(),F.windowEl.style.transform=`translateY(${z.start*44}px)`;for(let he=z.start;he<z.end;he++)F.windowEl.append(qe(L[he]))}function Je(){let F=Gp(n.index,y),L=Wp(n.index,E),W=D==="groups"?L:F;x.style.height=`${W.length*44}px`,He(p,F,D==="spatial"),He(b,L,D==="groups")}function qe(F){let L=n.index.elements[F.id],W=Oe(F.id),z=document.createElement("div");if(z.className="ifc-row",z.dataset.id=F.id,z.style.paddingLeft=`${v_(F.depth)+8}px`,z.style.height=`${44}px`,(F.id===q||F.id===Ne())&&z.classList.add("is-target"),n.visibility.isHidden(F.id)&&z.classList.add("is-hidden"),W.length){let Me=document.createElement("button");Me.type="button",Me.className="ifc-disclosure";let Ue=(D==="groups"?E:y).has(F.id);Me.textContent=Ue?"\u25BE":"\u203A",Me.setAttribute("aria-expanded",Ue?"true":"false"),Me.setAttribute("aria-label",Ue?n.t("ui.collapse"):n.t("ui.expand")),Me.addEventListener("click",$=>{$.stopPropagation();let Pe=D==="groups"?E:y;Pe.has(F.id)?Pe.delete(F.id):Pe.add(F.id),re()}),z.append(Me)}else{let Me=document.createElement("span");Me.className="ifc-disclosure-spacer",z.append(Me)}let he=document.createElement("span");he.className="ifc-row-text";let _e=document.createElement("span");_e.className="ifc-row-name",_e.textContent=Ae(F.id);let Ee=document.createElement("span");return Ee.className="ifc-row-meta",Ee.textContent=L?.type||"",he.append(_e,Ee),z.append(he),je(z,F.id),z}let vt=0;function ht(F){let L=performance.now();if(L-vt<40)return;vt=L;let W=S_(Ne(),F);Q(F),n.onFrame(F,{move:W==="frame"}),bt(F),xe(),Je()}function ft(F){return F instanceof Element&&!!F.closest(".ifc-disclosure")}function je(F,L){let W=null,z=0,he=()=>{z&&window.clearTimeout(z),z=0},_e=(Ue,$,Pe)=>{ft(Pe)||(he(),W={x:Ue,y:$,moved:0,consumed:!1},z=window.setTimeout(()=>{z=0,!(!W||W.consumed||fh({dt:500,dx:W.moved,dy:0,released:!1})!=="longpress")&&(W.consumed=!0,tt(L,W.x,W.y))},500))},Ee=(Ue,$)=>{if(!W)return;let Pe=Math.hypot(Ue-W.x,$-W.y);Pe>W.moved&&(W.moved=Pe),W.moved>12&&he()},Me=(Ue,$,Pe)=>{he();let $e=W;W=null,!(!$e||$e.consumed||ft(Pe)||Math.max($e.moved,Math.hypot(Ue-$e.x,$-$e.y))>12)&&ht(L)};F.addEventListener("pointerdown",Ue=>{Ue.button!==void 0&&Ue.button!==0||_e(Ue.clientX,Ue.clientY,Ue.target)}),F.addEventListener("pointermove",Ue=>Ee(Ue.clientX,Ue.clientY)),F.addEventListener("pointerup",Ue=>{Ue.pointerType!=="touch"&&Me(Ue.clientX,Ue.clientY,Ue.target)}),F.addEventListener("pointercancel",()=>he()),F.addEventListener("touchend",Ue=>{let $=Ue.changedTouches[0];$&&Me($.clientX,$.clientY,Ue.target)},{passive:!0})}function bt(F){q=F,G&&window.clearTimeout(G),G=window.setTimeout(()=>{q===F&&(q=null),O||Je()},1600),O||Je()}function me(F){let W=We().findIndex(he=>he.id===F);if(W<0)return;let z=V(Ie().list)+W*44;e.scrollTop=Math.max(0,z-te()),Je()}let et=!1;function tt(F,L,W){K(),w.replaceChildren(),w.hidden=!1,et=!1,R("ui.info",()=>Se(F,{fromMenu:!0}));let z=n.visibility.isHidden(F);R(z?"ui.unhideThis":"ui.hideThis",()=>{z?n.visibility.unhide(F):n.visibility.hide(F),we()}),R("ui.hideOthers",()=>{n.visibility.hideOthers(F),we()}),R("ui.unhideOthers",()=>{n.visibility.unhideOthers(F),we()}),ge(w,L,W)}function we(){n.onVisibility(),se(),re()}function R(F,L){let W=document.createElement("button");W.type="button",W.className="ifc-menu-btn",W.textContent=n.t(F);let z=!1,he=_e=>{_e.preventDefault(),_e.stopPropagation(),!z&&(z=!0,L())};W.addEventListener("touchend",he),W.addEventListener("click",he),w.append(W)}function se(){w.hidden=!0,w.replaceChildren()}function K(){M.hidden=!0,M.replaceChildren()}function Ce(){O=null,Y=[],S.replaceChildren()}function J(){if(Y.length){O=Y.pop(),ye(O,{switchTab:!0,openInfo:!1,animate:!0}),re();return}Ce(),re(),requestAnimationFrame(()=>{let F=Ne();F&&me(F)})}function Se(F,L={}){n.index.elements[F]&&(se(),K(),L.push&&O&&O!==F?Y.push(O):L.fromMenu&&(Y=[]),O=F,ye(F,{switchTab:!0,openInfo:!1,animate:!0}),n.openSheet(),ie(),re())}function ye(F,L={}){if(!n.index.elements[F])return;let W=xh(n.index,F),z=W?"groups":"spatial";if(L.switchTab!==!1&&D!==z&&ee(z,{animate:L.animate!==!1,keepScroll:!0}),W){for(let he of x_(n.index,F))E.add(he);k=F}else{for(let he of Vp(n.index,F))y.add(he);N=F}if(q=F,L.openInfo){Se(F,{push:!0});return}O||(re(),requestAnimationFrame(()=>me(F)))}function Le(){let F=n.index.elements[O];if(S.replaceChildren(),!F)return;let L=document.createElement("div");L.className="ifc-info-title";let W=document.createElement("div");W.className="ifc-kicker",W.textContent=F.type||"";let z=document.createElement("div");z.className="ifc-name",z.textContent=F.name||F.id||O,L.append(W,z),S.append(L);let he=Xp(n.index,F.globalId);he.storey&&P(n.t("ui.storey"),he.storey.name||he.storey.id),he.space&&P(n.t("ui.space"),he.space.name||he.space.id);let _e=$p(F);_e.length&&T(n.t("ui.dimensions"),_e);let Ee=qp(F);Ee.length&&T(n.t("ui.note"),Ee);let Me=n.liveLines?.(F)||[];Me.length&&T(n.t("home.live"),Me),vi(F)?(Z(n.t("ui.parentGroups"),F.parentGroupIds||F.groups||[]),Z(n.t("ui.childGroups"),F.childGroupIds||_h(n.index,F.globalId)),Z(n.t("ui.childElements"),F.memberIds||[])):Z(n.t("ui.groups"),F.groups||[])}function P(F,L){let W=document.createElement("div");W.className="ifc-line";let z=document.createElement("div");z.className="ifc-kicker",z.textContent=F;let he=document.createElement("div");he.className="ifc-value",he.textContent=L,W.append(z,he),S.append(W)}function T(F,L){let W=document.createElement("div");W.className="ifc-line";let z=document.createElement("div");z.className="ifc-kicker",z.textContent=F;let he=document.createElement("div");he.className="ifc-note",he.textContent=L.join(`
`),W.append(z,he),S.append(W)}function Z(F,L){let W=(L||[]).filter(_e=>n.index.elements[_e]);if(!W.length)return;let z=document.createElement("div");z.className="ifc-info-section";let he=document.createElement("div");he.className="ifc-kicker",he.textContent=F,z.append(he);for(let _e of W){let Ee=document.createElement("button");Ee.type="button",Ee.className="ifc-info-link";let Me=document.createElement("span");Me.className="ifc-row-name",Me.textContent=Ae(_e);let Ue=document.createElement("span");Ue.className="ifc-row-meta",Ue.textContent=n.index.elements[_e]?.type||"",Ee.append(Me,Ue),Ee.addEventListener("click",$=>{$.preventDefault(),$.stopPropagation(),ye(_e,{switchTab:!0,openInfo:!0,animate:!0})}),z.append(Ee)}S.append(z)}function ge(F,L,W){F.hidden=!1,F.style.left="0px",F.style.top="0px";let z=F.getBoundingClientRect(),he=8,_e=Math.max(he,window.innerWidth-z.width-he),Ee=Math.min(Math.max(he,L),_e),Me=W+8;Me+z.height>window.innerHeight-he&&(Me=Math.max(he,W-z.height-8)),F.style.left=`${Ee}px`,F.style.top=`${Me}px`}function pe(F,L,W,z,he){if(se(),M.replaceChildren(),M.hidden=!1,!F)fe(n.t("ui.noIfc"),L||"");else{let _e=document.createElement("div");_e.className="ifc-pop-id";let Ee=document.createElement("button");Ee.type="button",Ee.className="ifc-pop-title";let Me=document.createElement("div");Me.className="ifc-kicker";let Ue=document.createElement("div");Ue.className="ifc-name";let $=F.name||F.id||"",Pe=F.globalId||"",$e=!1,De=0,ot=()=>{Me.hidden=!$e,Me.textContent=$e?n.t("ui.globalId"):"",Ue.textContent=$e?Pe:$,Ue.className=$e?"ifc-gid":"ifc-name",Ee.setAttribute("aria-label",$e?$:n.t("ui.globalId"))},Ct=Bi=>{Bi.preventDefault(),Bi.stopPropagation();let nn=performance.now();nn-De<80||(De=nn,$e=!$e,ot())};ot(),Ee.append(Me,Ue),Ee.addEventListener("touchend",Ct),Ee.addEventListener("click",Ct);let Pt=document.createElement("button");Pt.type="button",Pt.className="ifc-reveal",Pt.innerHTML=jR,Pt.setAttribute("aria-label",n.t("ui.reveal")),Pt.title=n.t("ui.reveal"),Pt.addEventListener("click",Bi=>{Bi.stopPropagation(),K(),ce(F.globalId)}),_e.append(Ee,Pt),M.append(_e),fe(n.t("ui.type"),F.type||"");let Cn=Xp(n.index,F.globalId);Cn.storey&&fe(n.t("ui.storey"),Cn.storey.name||Cn.storey.id),Cn.space&&fe(n.t("ui.space"),Cn.space.name||Cn.space.id);let ai=$p(F);ai.length&&be(n.t("ui.dimensions"),ai);let Hn=qp(F);Hn.length&&be(n.t("ui.note"),Hn);let bi=n.liveLines?.(F)||[];bi.length&&be(n.t("home.live"),bi)}if(W.length){let _e=document.createElement("div");_e.className="ifc-actions";for(let Ee of W){let Me=document.createElement("button");Me.type="button",Me.className="ifc-action",Me.textContent=Ee.label||n.t(Ee.labelKey),Me.addEventListener("click",Ue=>{Ue.stopPropagation(),Ee.run(),n.onVisibility()}),_e.append(Me)}M.append(_e)}ge(M,z,he)}function fe(F,L){let W=document.createElement("div");W.className="ifc-line";let z=document.createElement("div");z.className="ifc-kicker",z.textContent=F;let he=document.createElement("div");he.className="ifc-value",he.textContent=L,W.append(z,he),M.append(W)}function be(F,L){let W=document.createElement("div");W.className="ifc-line";let z=document.createElement("div");z.className="ifc-kicker",z.textContent=F;let he=document.createElement("div");he.className="ifc-note",he.textContent=L.join(`
`),W.append(z,he),M.append(W)}function ce(F){n.index.elements[F]&&(Ce(),n.openSheet(),ie(),ye(F,{switchTab:!0,openInfo:!1,animate:!1}))}e.addEventListener("scroll",()=>{!o.hidden&&!O&&Je()},{passive:!0});let ue=F=>F instanceof Node?!(!M.hidden&&M.contains(F)||!w.hidden&&w.contains(F)):!0;return document.addEventListener("pointerup",()=>{w.hidden||(et=!0)},!0),document.addEventListener("pointerdown",F=>{let L=F.target;!M.hidden&&ue(L)&&K(),!w.hidden&&et&&ue(L)&&se()},!0),{open:H,refresh:re,closePopover:K,openPopover:pe,reveal:ce,isInspectorOpen:()=>!o.hidden}}function E_(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){let r=n.elements[i];if(vi(r)){let s=us(n,i).filter(o=>o!==i&&!vi(n.elements[o]));return s.length?s.every(o=>e.has(o)):e.has(i)}return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let r of us(n,i))(!vi(n.elements[r])||r===i)&&e.add(r)},unhide(i){for(let r of us(n,i))e.delete(r)},hideOthers(i){let r=new Set(us(n,i));for(let s of t())r.has(s)||vi(n.elements[s])||e.add(s)},unhideOthers(i){let r=new Set(us(n,i));for(let s of t())r.has(s)||vi(n.elements[s])||e.delete(s)},showAll(){e.clear()}}}var Jp=.3,C_=1.5,JR=.5,Yp=new Ge,QR=new I,wh=new I,Zp=new I,vh=new I,bh=new I,Jo=new I,Mh=new I,Kp=new Kt,T_=new Kt,Sh=new Kt,A_=new Kt,jp=new Qr,eC=new I(0,1,0),R_=new ii;function tC(n,e,t=Jp,i=C_){let r=Number.isFinite(e)&&e>0?e:0,s=Number.isFinite(n)&&n>0?n:null;return s!=null&&s>=t?s:s!=null?Math.max(i,t):r>=t?r:Math.max(i,t)}function nC(n,e,t=Jp,i=C_){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function iC(n,e,t=Jp,i=JR){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function rC(n,e,t,i=1){let r=2*Math.PI*i/Math.max(1,t);return{theta:-n*r,phi:-e*r}}function sC(n,e,t,i,r){if(!i&&!r||(bh.copy(n.position).sub(t),bh.lengthSq()<1e-12))return!1;Jo.copy(n.up),Jo.lengthSq()<1e-12?Jo.set(0,1,0):Jo.normalize(),A_.setFromUnitVectors(Jo,eC),vh.copy(bh).applyQuaternion(A_),jp.setFromVector3(vh);let s=1e-6;return r=Math.min(Math.PI-s,Math.max(s,jp.phi+r))-jp.phi,Kp.setFromAxisAngle(Jo,i),Mh.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(Kp),Mh.lengthSq()<1e-12?!1:(Mh.normalize(),T_.setFromAxisAngle(Mh,r),Sh.copy(T_).multiply(Kp),vh.copy(bh).applyQuaternion(Sh),n.position.copy(t).add(vh),e.sub(t).applyQuaternion(Sh).add(t),n.quaternion.premultiply(Sh),!0)}function oC(n,e,t){return!(t>0)||(n.getWorldDirection(wh),Zp.copy(n.position).addScaledVector(wh,t),Zp.distanceToSquared(e)<1e-12)?!1:(e.copy(Zp),!0)}function aC(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let r of i){let s=r&&r.clippingPlanes;if(s){for(let o of s)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function lC(n,e,t,i,r){if(!e||!t||e.isOrthographicCamera)return null;let s=n.getBoundingClientRect(),o=s.width||n.clientWidth||1,a=s.height||n.clientHeight||1;Yp.x=(i-s.left)/o*2-1,Yp.y=-((r-s.top)/a)*2+1,t.updateWorldMatrix(!0,!0),R_.setFromCamera(Yp,e);let l=R_.intersectObject(t,!0);e.getWorldDirection(wh);for(let c of l){let u=c.object;if(!u.visible||ks(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!aC(u,c.point))continue;let f=c.distance;if(!(f>1e-4))continue;let d=QR.copy(c.point).sub(e.position).dot(wh);if(d>1e-4)return{point:c.point.clone(),slant:f,depth:d}}return null}function cC(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),r=new Map,s=null;function o(){return t.enabled!==!1&&!i()}function a(){let v=n.getCamera();return!!(v&&v.isPerspectiveCamera)}function l(v,M){return lC(e,n.getCamera(),n.getRoot(),v,M)}function c(v){let M=n.getCamera();!M||!a()||v==null||oC(M,t.target,v)}function u(v,M){let w=n.getCamera();if(!w||!a())return;let y=l(v,M),E=w.position.distanceTo(t.target);c(tC(y?y.slant:null,E))}function h(v,M){let w=n.getCamera();if(!w||!a())return;let y=l(v,M),E=w.position.distanceTo(t.target);c(nC(y?y.depth:null,E))}function f(){s=null,t.enableRotate=!0}function d(v){if(r.set(v.pointerId,{x:v.clientX,y:v.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(r.size>=2){f(),t.zoomToCursor=!0;let N=m(v);u(N.x,N.y);return}let M=v.pointerType==="touch",w=v.button??0;if(!M&&w===2){f(),h(v.clientX,v.clientY);return}if(!M&&w===1){f(),u(v.clientX,v.clientY);return}if(!M&&w!==0)return;if(!M&&(v.shiftKey||v.ctrlKey||v.metaKey)){f(),h(v.clientX,v.clientY);return}let y=n.getCamera(),E=l(v.clientX,v.clientY),D=y?y.position.distanceTo(t.target):0;if(!E||!iC(E.slant,D)){f();return}t.enableRotate=!1,s={id:v.pointerId,x:v.clientX,y:v.clientY,lastX:v.clientX,lastY:v.clientY,point:E.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function m(v){let M=v.clientX,w=v.clientY,y=1;for(let[E,D]of r)E!==v.pointerId&&(M+=D.x,w+=D.y,y+=1);return{x:M/y,y:w/y}}function x(v){let M=r.get(v.pointerId);if(M&&(M.x=v.clientX,M.y=v.clientY),!s||v.pointerId!==s.id||r.size!==1||!o())return;let w=n.getCamera();if(!w)return;let y=v.clientX-s.lastX,E=v.clientY-s.lastY;if(!s.dragging){if(Math.hypot(v.clientX-s.x,v.clientY-s.y)<=ph)return;s.dragging=!0}if(!y&&!E)return;let D=rC(y,E,e.clientHeight||1,t.rotateSpeed);sC(w,t.target,s.point,D.theta,D.phi),w.lookAt(t.target),s.lastX=v.clientX,s.lastY=v.clientY}function g(v){r.delete(v.pointerId),s&&s.id===v.pointerId&&f(),r.size<2&&(t.zoomToCursor=!1),r.size===0&&(t.enableRotate=!0)}function p(v){g(v)}function b(v){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||s&&s.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(v.clientX,v.clientY)}function S(){r.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:g,onPointerCancel:p,onWheel:b,onWheelDone:S}}function P_(n){let e=cC(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var Qo=class extends Oi{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let r=0;r<t;r++)i[6*r]=e[r].x,i[6*r+1]=e[r].y,i[6*r+2]=e[r].z||0,i[6*r+3]=e[r+1].x,i[6*r+4]=e[r+1].y,i[6*r+5]=e[r+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Eh=class extends os{constructor(e=new Qo,t=new er({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var uC='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',hC=420,fC=36,dC=new I,I_=new I,L_=new I,Qp=new I,Hs=new I,hs=new I;function nm(n){return new I(n[0]*.001,n[2]*.001,-n[1]*.001)}function em(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function D_(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function pC(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function Th(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function mC(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/hC,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function gC(n,e){if(e==="plate")return fC;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function ea(n,e,t,i="center",r=null,s=1){let o=Number.isFinite(s)&&s>0?s:1,a=Math.max(8,Math.round(t*o)),l=n.map(y=>String(y)).filter(y=>y.length),c=document.createElement("canvas"),u=c.getContext("2d"),h=`600 ${a}px ${uC}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),m=Math.ceil(a*1.25);u&&(u.font=h);let x=a;if(u)for(let y of l)x=Math.max(x,u.measureText(y).width);let g=Math.ceil(x+f*2),p=Math.ceil(Math.max(l.length,1)*m+d*2),b=2;c.width=g*b,c.height=p*b;let S=c.getContext("2d");if(S){S.scale(b,b),S.clearRect(0,0,g,p);let y=e==="plate";S.font=h,S.textAlign="left",S.textBaseline="middle",S.lineJoin="round",S.miterLimit=2,S.lineWidth=Math.max(2,a*.28),S.strokeStyle=y?"#ffffff":"rgba(0,0,0,0.92)",S.fillStyle=r||(y?"#141414":"#f7f7f8"),l.forEach((E,D)=>{let N=f,k=d+m*D+m*.5;S.strokeText(E,N,k),S.fillText(E,N,k)})}let v=new Tr(c);v.colorSpace=Tt,v.flipY=!0,v.needsUpdate=!0;let M=new ln({map:v,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Ot}),w=new ut(new di(1,1),M);return w.renderOrder=30,w.frustumCulled=!1,w.userData.cssWidth=g,w.userData.cssHeight=p,w.userData.anchor=i,w.userData.fill=r,w.userData.fontScale=o,w}function tm(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function lr(n,e=!1){let t=new Qo;t.setPositions([0,0,0,0,0,0]);let i=new er({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let r=new Eh(t,i);return r.renderOrder=25,r.frustumCulled=!1,r.computeLineDistances(),r}function Br(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function N_(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:r,getVisibleWidthM:s,getTarget:o}=n,a=n.getExaggeration||(()=>1),l=new Et;l.name="Annotations",l.userData.blueprintAnnotations=!0,e.add(l);let c=null,u="viewer",h=!0,f=0,d=[],m=null,x=null,g=null;function p(){return u==="plate"?1315860:15921908}function b(H){return H&&H.color!=null?em(H.color,p()):c&&c.annotationColor!=null?em(c.annotationColor,p()):p()}function S(H){return tm(b(H))}function v(H){let ee=Number(H&&H.size);return Number.isFinite(ee)&&ee>0?ee:1}function M(H){H.traverse(ee=>{ee.geometry&&ee.geometry.dispose();let Ae=ee.material;Ae&&(Ae.map&&Ae.map.dispose(),Ae.dispose())})}function w(){for(let H of[...l.children])l.remove(H),M(H);d=[],m=null,x=null,g=null}function y(){return gC(i(),u)}function E(){l.visible=!!c&&h}function D(){if(w(),f=y(),!c){E();return}let H=r(),ee=p(),Ae=f,Ne=Array.isArray(c.annotations)?c.annotations:[];for(let V of Ne)if(!(!V||typeof V!="object")){if(V.kind==="callout"&&Array.isArray(V.anchor)){let te=Th(V.text,H);if(!te)continue;let Ie=ea(te.split(`
`),u,Ae,"center",S(V),v(V)),We=(V.leader===!1?[]:D_(V)).map(()=>lr(b(V)));l.add(...We,Ie),d.push({kind:"callout",sprite:Ie,lines:We,data:V})}else if(V.kind==="dim"&&Array.isArray(V.a)&&Array.isArray(V.b)){let te=b(V),Ie=ea(["0"],u,Ae,"center",tm(te),v(V)),We=lr(te),Oe=lr(te),He=lr(te),Je=lr(te),qe=lr(te);l.add(We,Oe,He,Je,qe,Ie),d.push({kind:"dim",sprite:Ie,lines:[We,Oe,He,Je,qe],data:V})}else if(V.kind==="line"&&Array.isArray(V.points)&&V.points.length>=2){let te=em(V.color,p()),We=[lr(te,!!V.dashed)];V.arrow&&We.push(lr(te,!1),lr(te,!1));let Oe=null,He=Th(V.text,H);He&&(Oe=ea(He.split(`
`),u,Ae,"center",tm(te),v(V))),l.add(...We),Oe&&l.add(Oe),d.push({kind:"line",sprite:Oe,lines:We,data:V})}}let Q=Th(c.title,H),xe=c.project?String(c.project):"",re=[...Q.split(`
`),xe].filter(Boolean);re.length&&(m=ea(re,u,Ae,"topleft"),l.add(m)),x=ea(["1:1"],u,Ae,"bottomleft"),g=lr(ee),l.add(g,x),E()}function N(H){let ee=nm(H),Ae=a();return Ae!==1&&(ee.y*=Ae),ee}function k(H,ee=dC){return ee.copy(H).project(t())}function q(H,ee,Ae,Ne=new I){return Ne.set(H,ee,Ae).unproject(t())}function G(H){let ee=t(),Ae=i(),Ne=Math.max(1,Ae.clientHeight);if(ee.isOrthographicCamera){let re=Math.max(ee.zoom,1e-6);return(ee.top-ee.bottom)/re/Ne}let Q=Math.max(ee.position.distanceTo(H),1e-4),xe=(ee.fov||45)*Math.PI/180;return 2*Math.tan(xe/2)*Q/Ne}let O=new I,Y=new I;function ne(H,ee){let Ae=t(),Ne=G(ee),Q=Ne*H.userData.cssWidth,xe=Ne*H.userData.cssHeight;O.set(1,0,0).applyQuaternion(Ae.quaternion),Y.set(0,1,0).applyQuaternion(Ae.quaternion);let re=H.userData.anchor||"center";H.position.copy(ee),re==="topleft"?(H.position.addScaledVector(O,Q*.5),H.position.addScaledVector(Y,-xe*.5)):re==="bottomleft"&&(H.position.addScaledVector(O,Q*.5),H.position.addScaledVector(Y,xe*.5)),H.quaternion.copy(Ae.quaternion),H.scale.set(Q,xe,1)}function j(){let H=i(),ee=Math.max(1,H.width),Ae=Math.max(1,H.height);l.traverse(Ne=>{let Q=Ne.material;Q&&Q.resolution&&Q.resolution.set(ee,Ae)})}function ve(H,ee){let Ae=ea(ee,u,f||y(),H.userData.anchor,H.userData.fill,H.userData.fontScale||1);H.material.map?.dispose(),H.material.dispose(),H.material=Ae.material,H.userData.cssWidth=Ae.userData.cssWidth,H.userData.cssHeight=Ae.userData.cssHeight,Ae.geometry.dispose()}function ie(){if(!c||!h||(y()!==f&&D(),!l.visible))return;j();let ee=r();t().updateMatrixWorld();for(let re of d)if(re.kind==="callout"){let V=N(re.data.anchor),te=k(V,I_),Ie=Array.isArray(re.data.offset)?re.data.offset:[.08,.06],We=te.x+Number(Ie[0]||0)*2,Oe=te.y+Number(Ie[1]||0)*2,He=q(We,Oe,te.z,L_);ne(re.sprite,He);let Je=G(He),qe=Je*re.sprite.userData.cssWidth*.5,vt=D_(re.data);for(let ht=0;ht<re.lines.length;ht+=1){let ft=N(vt[ht]||re.data.anchor);Hs.copy(He).sub(ft);let je=Hs.length();je>qe+Je?(Hs.setLength(je-qe),Hs.add(ft)):Hs.copy(He),Br(re.lines[ht],ft,Hs)}}else if(re.kind==="dim"){let V=N(re.data.a),te=N(re.data.b),Ie=k(V,I_),We=k(te,L_),Oe=We.x-Ie.x,He=We.y-Ie.y,Je=Math.hypot(Oe,He)||1e-6;Oe/=Je,He/=Je;let qe=Number(re.data.offset)||.04,vt=-He*qe*2,ht=Oe*qe*2,ft=(Ie.z+We.z)*.5,je=q(Ie.x+vt,Ie.y+ht,ft,new I),bt=q(We.x+vt,We.y+ht,ft,new I),me=G(je),et=me*6,tt=me*8;hs.copy(je).sub(V);let we=hs.length()||1;hs.multiplyScalar((we+tt)/we);let R=V.clone().add(hs);hs.copy(bt).sub(te);let se=hs.length()||1;hs.multiplyScalar((se+tt)/se);let K=te.clone().add(hs),Ce=V.clone().lerp(je,Math.min(.85,et/we)),J=te.clone().lerp(bt,Math.min(.85,et/se));Br(re.lines[0],Ce,R),Br(re.lines[1],J,K),Br(re.lines[2],je,bt);let Se=me*10,Le=q(Ie.x+vt-He*.012,Ie.y+ht+Oe*.012,ft,new I).sub(je);Le.lengthSq()<1e-16?Le.set(0,Se,0):Le.setLength(Se),Br(re.lines[3],je.clone().sub(Le),je.clone().add(Le)),Br(re.lines[4],bt.clone().sub(Le),bt.clone().add(Le)),Qp.copy(je).lerp(bt,.5);let P=q(Ie.x+vt-He*.03,Ie.y+ht+Oe*.03,ft,new I).sub(q(Ie.x+vt,Ie.y+ht,ft,new I));P.lengthSq()>1e-12&&Qp.add(P);let Z=Th(re.data.text,ee)||pC(V.distanceTo(te));re.sprite.userData.labelText!==Z&&(ve(re.sprite,[Z]),re.sprite.userData.labelText=Z),ne(re.sprite,Qp)}else if(re.kind==="line"){let V=re.data.points.map(Ie=>N(Ie)),te=[];for(let Ie of V)te.push(Ie.x,Ie.y,Ie.z);if(re.lines[0].geometry.setPositions(te),re.lines[0].computeLineDistances(),re.data.arrow&&V.length>=2&&re.lines.length>=3){let Ie=V[V.length-2],We=V[V.length-1],Oe=We.clone().sub(Ie);if(Oe.lengthSq()>1e-12){Oe.normalize();let He=G(We),Je=Oe.clone().multiplyScalar(-He*16),qe=new I().crossVectors(Oe,t().up).normalize().multiplyScalar(He*7);qe.lengthSq()<1e-16&&qe.set(He*7,0,0),Br(re.lines[1],We,We.clone().add(Je).add(qe)),Br(re.lines[2],We,We.clone().add(Je).sub(qe))}}if(re.sprite){let Ie=V[0].clone().lerp(V[V.length-1],.5);ne(re.sprite,Ie)}}let Ne=k(o(),Hs).z;if(m){let re=q(-.94,.9,Ne,new I);ne(m,re)}let Q=s(),xe=mC(Q??NaN);if(x&&g){let re=Q!=null&&Q>8?2:1,V=q(-.9,-.86,Ne,new I),te=q(-.9+.08,-.86,Ne,new I).sub(V),Ie=G(V),We=Q&&Q>0?re/Q*Math.max(1,i().clientWidth):80;te.lengthSq()>1e-12?te.setLength(Math.max(We*Ie,Ie*40)):te.set(Ie*80,0,0),Br(g,V,V.clone().add(te));let Oe=x.userData.labelText,He=xe?`${xe}  \xB7  ${Math.round(re*1e3)} mm`:"";Oe!==He&&(ve(x,He?[He]:["\u2014"]),x.userData.labelText=He);let Je=q(-.9,-.8,Ne,new I).sub(V);ne(x,V.clone().add(Je))}}return{group:l,setSpec(H){c=H&&typeof H=="object"?H:null,D(),ie()},setInk(H){u=H==="plate"?"plate":"viewer",D(),ie()},setVisible(H){h=!!H,E(),l.visible&&ie()},isVisible(){return h},relocalize(){D(),ie()},glyphBoundsNdc(){let H=i(),ee=Math.max(1,H.clientWidth),Ae=Math.max(1,H.clientHeight),Ne=1/0,Q=-1/0,xe=1/0,re=-1/0,V=!1;for(let te of d){let Ie=te.sprite;if(!Ie||Ie===m||Ie===x||te.kind!=="callout"&&te.kind!=="dim"&&te.kind!=="line")continue;let We=k(Ie.position),Oe=(Ie.userData.cssWidth||0)/ee,He=(Ie.userData.cssHeight||0)/Ae;Ne=Math.min(Ne,We.x-Oe),Q=Math.max(Q,We.x+Oe),xe=Math.min(xe,We.y-He),re=Math.max(re,We.y+He),V=!0}return V?{minX:Ne,maxX:Q,minY:xe,maxY:re}:null},update:ie,clear(){c=null,w(),l.visible=!1}}}function O_(n){return n/25.4*72}function im(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function xC(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,r)=>{e.toBlob(s=>{s?i(s):r(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function yC(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function _C(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Sl(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function vC(n){let e=n.width,t=n.height,i=n.data,r=new Uint8Array(e*t*3);for(let v=0,M=0;v<i.length;v+=4,M+=3){let w=i[v+3]/255;r[M]=Math.round(i[v]*w+255*(1-w)),r[M+1]=Math.round(i[v+1]*w+255*(1-w)),r[M+2]=Math.round(i[v+2]*w+255*(1-w))}let{bytes:s,filter:o}=await _C(r),a=O_(420),l=O_(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),h=[],f=0;function d(v){h.push(v),f+=v.length}let m=[0];function x(v,M){m[v]=f,d(Sl(`${v} 0 obj
`));for(let w of M)d(Sl(w));d(Sl(`
endobj
`))}d(Sl(`%PDF-1.4
`)),x(1,["<< /Type /Catalog /Pages 2 0 R >>"]),x(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),x(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${l.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),x(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),x(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${s.length} >>
stream
`,s,`
endstream`]);let g=f,p=`xref
0 6
0000000000 65535 f 
`;for(let v=1;v<=5;v++)p+=`${String(m[v]).padStart(10,"0")} 00000 n 
`;p+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${g}
%%EOF
`,d(Sl(p));let b=new Uint8Array(f),S=0;for(let v of h)b.set(v,S),S+=v.length;return new Blob([b],{type:"application/pdf"})}async function U_(n){let e=await xC(n),t=await yC(e),i=await vC(t);return{png:e,pdf:i}}var rm="scene";function wC(){try{return(new URLSearchParams(location.search).get(rm)||"").trim()}catch{return""}}function B_(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set(rm,t):e.searchParams.delete(rm);let i=`${e.pathname}${e.search}${e.hash}`,r=`${location.pathname}${location.search}${location.hash}`;i!==r&&history.replaceState(null,"",i)}catch{}}function EC(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],r=Array.isArray(t.partGroups)?t.partGroups:[],s=Array.isArray(t.doors)?t.doors:[],o=Array.isArray(t.windows)?t.windows:[],a=g_(t.ifc),l=new Map,c=()=>{},u=String(t.scene!=null?t.scene:wC()).trim();My(),Pp(document);let h=[],f=null,d=1842206,m=!0,x=ey(),g=Lx(),p=new Map,b=new Map,S=new Map,v=new Map,M=new Set,w=new Map,y=new Map,E=new Map,D=new Set,N=null;N=yy(_=>{m=_,d=_?1842206:15263981,f&&(f.background=new Xe(d)),document.documentElement.style.colorScheme=_?"dark":"light",p.size&&A()});let k=new Ou({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});k.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),k.outputColorSpace=Tt,k.toneMapping=Oo,k.toneMappingExposure=1.05,k.localClippingEnabled=!0;let q=qx(k);f=new Xn,f.background=new Xe(d);let G=1,O=new Et;O.name="VerticalExaggeration",f.add(O);function Y(_){let C=Number(_);G=Number.isFinite(C)&&C>0?C:1,O.scale.set(1,G,1)}let ne=30,j=120,ve=75,ie=125,H="perspective",ee=ve,Ae=ve,Ne=1,Q=!1,xe=new hn(45,1,.01,1e6),re=new Ii(-1,1,1,-1,.01,1e6),V=xe,te=new Vu(V,n);te.enableDamping=!1,te.screenSpacePanning=!0;let Ie=()=>!1,We=Qy({canvas:n,getCamera:()=>V,records:s,isBlocked:()=>Ie(),onLongPress:_=>c(_),onToggle:(_,C)=>uv(_,C)}),Oe=s_({canvas:n,getCamera:()=>V});window.blueprintsFeedback=Oe;let He=new Map,Je=new Map,qe=n_(o),vt={on:!0,level:1,color:kp(3e3)},ht={on:!1,level:1,color:gh},ft=new Map,je=null,bt=_=>_&&je?je.device(_.globalId):void 0;o_(We.taps,{elementOf:_=>Ll(_),isOn:_=>!!He.get(_.globalId),isOpen:_=>{let C=bt(_);if(C?.deviceType==="WindowCovering"){let U=C.state?.windowCovering?.targetPositionLiftPercent100ths;return U!=null&&U<5e3}return!!Je.get(_.globalId)},isLive:_=>!!bt(_),onLight:_=>sv(_),onSwitch:(_,C)=>dv(_,C),switchActions:_=>pv(_),onCover:_=>mv(_),coverActions:_=>gv(_),onWindow:_=>xv(_),windowAccepts:(_,C)=>fv(_,C?.object),targetsFor:(_,C)=>lv(_,C)});let me=N_({scene:f,getCamera:()=>V,getCanvas:()=>n,getLocale:ah,getVisibleWidthM:()=>{if(!V.isOrthographicCamera)return null;let _=Math.max(V.zoom,1e-6);return(V.right-V.left)/_},getTarget:()=>te.target,getExaggeration:()=>G}),et=null,tt=null;f.add(new Ha(16777215,.45));let we=new jr(16777215,1.15);we.position.set(.6,1,.4),f.add(we);let R=new jr(16777215,.4);R.position.set(-.5,.2,-.6),f.add(R);let se=new Ho(k);f.environment=se.fromScene(new Gu,.04).texture,se.dispose();let K=null;P_({canvas:n,controls:te,getCamera:()=>V,getRoot:()=>K,isBlocked:()=>Ie()||te.enabled===!1});let Ce=new Nt,J=new I,Se=new I,ye=new I,Le=new I,P=new I,T=[],Z=1,ge=!1,pe=!1,fe=!1;new Bu().parse(e,"",_=>{K=_.scene,O.add(K),We.bind(K),K.traverse(U=>{if(!U.isMesh)return;let B=Xy(U);U.userData.bpPart=B.part,U.userData.bpElementKey=B.element,B.element&&(l.has(B.element)||l.set(B.element,[]),l.get(B.element).push(U));let le=B.part;if(p.has(le)||p.set(le,[]),p.get(le).push(U),U.material){let Te=Array.isArray(U.material)?U.material:[U.material];for(let Re of Te)"side"in Re&&(Re.side=Ot)}}),Vs(),X(),de(),Ze(),Uh();let C=at(u);C&&(Fe=`scene:${String(C.id).trim()}`),Ft(),Bi(),yt(),bn(),A(),C&&kr(C),dt(),N?.refreshPartialHeight(),G_(),W_(),qs(),$s()},_=>{ce(String(_?.message||_))});function ce(_){let C=document.getElementById("err");C&&(C.style.display="block",C.textContent=_)}function ue(){K&&(Ce.setFromObject(K),Ce.getSize(J),Ce.getCenter(Se))}function F(){let _=Math.max(1,n.clientWidth),C=Math.max(1,n.clientHeight);return _/C}function L(_,C){let U=_*Math.PI/180;return 2*Math.atan(Math.tan(U/2)/Math.max(C,1e-6))}function W(){let _=F();xe.aspect=_,xe.fov=L(ee,_)*180/Math.PI,xe.updateProjectionMatrix()}function z(_,C){let U=F(),B=Math.max(_,1e-6)*Math.tan(C/2),le=B*U;re.left=-le,re.right=le,re.top=B,re.bottom=-B,re.updateProjectionMatrix()}function he(){let _=F(),U=Math.max(re.top,1e-6)*_;re.left=-U,re.right=U,re.updateProjectionMatrix()}function _e(_,C){let U=F(),B=Math.max(_,1e-6),Te=Math.max(C,1e-6),Re=Te*U;Re<B&&(Re=B,Te=Re/Math.max(U,1e-6)),Ne=1,re.left=-Re,re.right=Re,re.top=Te,re.bottom=-Te,re.updateProjectionMatrix(),$()}function Ee(_){let C=Math.max(_,1e-4),U=ye.copy(V.position).sub(te.target);U.lengthSq()<1e-12?U.set(0,0,1):U.normalize(),V.position.copy(te.target).addScaledVector(U,C)}function Me(_){_!==V&&(_.position.copy(V.position),_.quaternion.copy(V.quaternion),_.up.copy(V.up),_.near=V.near,_.far=V.far,V=_,te.object=V,te.update())}function Ue(){let _=Math.abs(fr)>.05||Math.abs(dr)>.05||Math.abs(Si-1)>.001?Si:1;return Ne*_}function $(){V.zoom=Ue(),V.updateProjectionMatrix()}function Pe(){if(Q||pe||!V.isOrthographicCamera)return;let _=Math.abs(fr)>.05||Math.abs(dr)>.05||Math.abs(Si-1)>.001?Si:1;Ne=Math.max(V.zoom/Math.max(_,1e-6),1e-6)}function $e(){if(H==="ortho")return;Ae=ee;let _=V.position.distanceTo(te.target),C=L(ee,F());z(_,C),Ne=1,li(()=>{Q=!0,Me(re),H="ortho",$(),Q=!1}),Hn()}function De(_){if(H!=="ortho")return;let C=Pt(_??Ae),U=Math.max(re.top,1e-6)/Math.max(Ne,1e-6),B=L(C,F()),le=U/Math.max(Math.tan(B/2),1e-8);ee=C,Ae=C,Ne=1,li(()=>{Q=!0,Me(xe),H="perspective",W(),Ee(le),$(),nn(),te.update(),Q=!1}),Hn()}function ot(_,C={}){let U=Pt(_);if(H==="ortho"){De(U);return}let B=F(),le=L(ee,B),Te=L(U,B),Re=V.position.distanceTo(te.target);ee=U,Ae=U,li(()=>{if(W(),C.reframe!==!1){let Ve=Math.tan(le/2)/Math.max(Math.tan(Te/2),1e-8);Ee(Re*Ve),nn(),te.update()}$()}),Hn()}function Ct(){H==="ortho"?De(Ae):$e()}function Pt(_){return Math.min(j,Math.max(ne,_))}function Cn(){return H==="ortho"?ie:ee}function ai(_){return _>j?"ISO":`${Math.round(_)}\xB0`}function Hn(){et&&(et.value=Cn()),tt&&(tt.textContent=H==="ortho"?"ISO":`${Math.round(ee)}\xB0`),et?.refresh()}function bi(_){if(_>j){H!=="ortho"?$e():Hn();return}let C=Pt(_);H==="ortho"?De(C):ot(C,{reframe:!0})}function Bi(){let _=document.getElementById("fov");if(!_)return;_.replaceChildren();let C=document.createElement("div");C.className="fov-row";let U=document.createElement("span");U.className="fov-label",U.textContent=Ut("ui.fov"),tt=document.createElement("span"),tt.className="fov-value",tt.textContent=`${Math.round(ee)}\xB0`,et=oh({min:ne,max:ie,step:1,value:Cn(),ariaLabel:"Field of view",formatAriaValue:ai,onInput:Re=>bi(Re),onChange:Re=>bi(Re),onTap:()=>Ct()}),et.el.classList.add("fov-range");let B=document.createElement("div");B.className="fov-detent",B.setAttribute("aria-hidden","true");let le=(j-ne)/(ie-ne);B.style.left=`${le*100}%`,et.el.querySelector(".coop-range-track")?.append(B),C.append(U,et.el,tt),_.append(C),Hn()}function nn(){let _=Math.max(J.x,J.y,J.z,.01),C=V.position.distanceTo(te.target),U=Math.round(Math.min(Math.max(C/200,_/5e3,.001),C/10)*1e4)/1e4,B=Math.round(Math.max(C+_*4,_*8,10)*1e4)/1e4;V.near===U&&V.far===B||(V.near=U,V.far=B,V.updateProjectionMatrix())}function li(_){pe=!0;try{_()}finally{requestAnimationFrame(()=>{pe=!1})}}W();function Vs(){K&&(li(()=>{ue(),te.target.copy(Se);let C=Math.max(J.x,J.y,J.z,1)*1.85;V.position.set(Se.x+C*.75,Se.y+C*.55,Se.z+C*.75),nn(),te.update()}),hr())}function wl(){for(let _ of p.keys())b.set(_,1),S.set(_,1),Ur(p.get(_)||[],1,{edgeMode:g});ue(),ms()}function fs(_){if(K){if(ke=null,me.clear(),Y(1),wl(),qs(),$s(),xe.up.set(0,1,0),re.up.set(0,1,0),V.up.set(0,1,0),_==="iso"){Vs();return}li(()=>{ue();let C=Math.max(J.x,J.y,J.z,1),U=C*1.85,B=Se;_==="front"?V.position.set(B.x,B.y,B.z+U):_==="top"?V.position.set(B.x,B.y+U,B.z+C*.01):_==="side"&&V.position.set(B.x-U,B.y,B.z),te.target.copy(B),nn(),te.update()}),hr()}}function kr(_){if(!K||!_)return;ke=_,Y(_.verticalExaggeration);let C=G;if(_.opacityDefault!=null||_.opacity&&typeof _.opacity=="object"){let Te=_.opacityDefault!=null?Number(_.opacityDefault):1,Re=_.opacity&&typeof _.opacity=="object"?_.opacity:{},Ve=Kx(Re,h);for(let it of p.keys()){let St=Object.prototype.hasOwnProperty.call(Ve,it)?Ve[it]:Te;Gs(it,St,{skipUi:!0,skipClip:!0})}ue(),ms()}if(Object.prototype.hasOwnProperty.call(_,"cuts")){let Te=Array.isArray(_.cuts)?_.cuts:[];T.length=0;for(let Re of Te){let Ve=Re?.normal;if(!Array.isArray(Ve)||Ve.length<3)continue;let it=new I(Number(Ve[0])||0,Number(Ve[1])||0,Number(Ve[2])||0);if(it.lengthSq()<1e-12)continue;it.normalize();let St=null,Qt=Math.min(1,Math.max(0,Number(Re.t)||0));if(Array.isArray(Re.anchor)&&Re.anchor.length>=3){St=nm(Re.anchor),St.y*=C;let{near:Vn,far:qt}=rn(it),kt=St.dot(it);Qt=Math.min(1,Math.max(0,(kt-Vn)/Math.max(qt-Vn,1e-6)))}T.push({id:Z++,normal:it,t:Qt,anchor:St,locked:!0,label:cn(it)})}ge=!1,$t(),yt(),bn(),N?.refreshPartialHeight()}_.projection==="ortho"?H!=="ortho"?$e():Hn():_.hFovDeg!=null&&Number.isFinite(Number(_.hFovDeg))&&ot(Number(_.hFovDeg),{reframe:!1});let B=_.camera;B&&Array.isArray(B.target)&&Array.isArray(B.position)&&li(()=>{Q=!0;let Te=new I(0,1,0);Array.isArray(B.up)&&B.up.length>=3&&(Te.set(Number(B.up[0])||0,Number(B.up[1])||0,Number(B.up[2])||0),Te.lengthSq()<1e-12?Te.set(0,1,0):Te.normalize()),xe.up.copy(Te),re.up.copy(Te),V.up.copy(Te),te.target.set(Number(B.target[0])||0,(Number(B.target[1])||0)*C,Number(B.target[2])||0),V.position.set(Number(B.position[0])||0,(Number(B.position[1])||0)*C,Number(B.position[2])||0),V.lookAt(te.target),H==="ortho"&&Array.isArray(B.orthoFit)&&B.orthoFit.length>=2&&_e(Number(B.orthoFit[0])||.1,(Number(B.orthoFit[1])||.1)*C),ue(),nn(),te.update(),Q=!1}),hr();let le=_.edges;(le==="none"||le==="transparent"||le==="opaque")&&(g=le,cr()),me.setSpec(_),qs(),$s()}function Gs(_,C,U={}){let B=Math.max(0,Math.min(1,Number(C)||0));b.set(_,B),B>0&&S.set(_,B),U.detach&&M.add(_),Ur(p.get(_)||[],B,{edgeMode:g}),!U.skipClip&&(ue(),U.skipUi||ms())}function ds(_,C,U){let B=Math.max(0,Math.min(1,Number(C)||0));U&&v.set(U,B);for(let le of _)M.has(le)||(b.set(le,B),B>0&&S.set(le,B),Ur(p.get(le)||[],B,{edgeMode:g}));ue(),ms()}function Ah(_,C,U){M.delete(_);let B=U.filter(Te=>!M.has(Te)),le=ps(C,B);b.set(_,le),le>0&&S.set(_,le),Ur(p.get(_)||[],le,{edgeMode:g}),ue(),ms()}function El(_){if(!_.length)return 1;let C=b.get(_[0])??1;for(let U=1;U<_.length;U++){let B=b.get(_[U])??1;if(Math.abs(B-C)>1e-4)return NaN}return C}function ps(_,C){let U=C.filter(le=>!M.has(le)),B=El(U.length?U:C);return Number.isNaN(B)?v.get(_)??1:B}function ms(){for(let[_,C]of w)C.value=(b.get(_)??1)*100;for(let[_,C]of y){let U=(C.el.dataset.leaves||"").split(",").map(B=>B.trim()).filter(Boolean);C.value=ps(_,U)*100}for(let[_,C]of E){let U=M.has(_);C.hidden=!U,C.setAttribute("aria-hidden",U?"false":"true")}}function gs(){return T.filter(_=>_.locked).map(_=>Yn(_))}function Tl(){let _=new Ge;return k.getDrawingBufferSize(_),{x:_.x,y:_.y}}function cr(){if(p.size){if(g===Us){Bx(K);return}zx(p,!0,{clippingPlanes:gs(),resolution:Tl(),edgeMode:g})}}function A(){p.size&&(Jx(p,x,{isDark:m,clippingPlanes:gs(),opacityByLabel:b,edgeMode:g}),x===xl?(k.toneMapping=Oo,k.toneMappingExposure=1.05):(k.toneMapping=mi,k.toneMappingExposure=1),cr(),Ep(p,gs()),rv())}function X(){let _=document.getElementById("mats");if(_){_.replaceChildren();for(let[C,U]of[[nh,"ui.solid"],[xl,"ui.realistic"]]){let B=document.createElement("button");B.type="button",B.dataset.mode=C,B.textContent=Ut(U),C===x&&B.classList.add("is-active"),B.addEventListener("click",()=>{x=C,ty(C),_.querySelectorAll("button").forEach(le=>{le.classList.toggle("is-active",le.dataset.mode===C)}),A()}),_.append(B)}}}function de(){let _=document.getElementById("edges");if(_){_.replaceChildren();for(let[C,U]of[[Us,"ui.edgesNone"],[Fs,"ui.edgesTransparent"],[ml,"ui.edgesOpaque"]]){let B=document.createElement("button");B.type="button",B.dataset.edgeMode=C,B.textContent=Ut(U),C===g&&B.classList.add("is-active"),B.addEventListener("click",()=>{g=C,pp(C),_.querySelectorAll("button").forEach(le=>{le.classList.toggle("is-active",le.dataset.edgeMode===C)}),cr(),mm()}),_.append(B)}}}function oe(_,C,U,B){let le=document.createElement("div");le.className="part-opacity-wrap";let Te,Re=()=>{if(Te.value/100>0)B(0);else{let it=U();B(it>0?it:1)}};return Te=oh({min:0,max:100,step:1,value:Math.round(C),ariaLabel:_,formatAriaValue:Ve=>`${Math.round(Ve)}%`,thumbScrubOnly:!0,onInput:Ve=>B(Ve/100),onChange:Ve=>B(Ve/100),onTap:Re}),Te.el.classList.add("part-opacity"),le.append(Te.el),{wrap:le,range:Te}}function ae(){let _=document.getElementById("parts");if(!_)return;_.style.removeProperty("--part-name-col");let C=0;for(let U of _.querySelectorAll(".part-name")){if(U.closest(".part-children")?.hidden)continue;let le=U.style.width;U.style.width="max-content",C=Math.max(C,Math.ceil(U.getBoundingClientRect().width)),U.style.width=le}C>0&&_.style.setProperty("--part-name-col",`${C}px`)}function Be(_,C,U,B=null){if(_.type==="leaf"){let It=document.createElement("div");It.className="part-row part-leaf",It.style.setProperty("--part-depth",String(U)),It.dataset.leaf=_.id;let Fl=document.createElement("span");Fl.className="part-disclosure-spacer",Fl.setAttribute("aria-hidden","true");let Bl=document.createElement("span");Bl.className="part-name",Bl.textContent=_.label;let{wrap:Am,range:Rm}=oe(`${_.label} opacity`,(b.get(_.id)??1)*100,()=>S.get(_.id)??1,kl=>Gs(_.id,kl,{detach:!!B}));Rm.el.dataset.leaf=_.id,w.set(_.id,Rm);let Ei=null;if(B){Ei=document.createElement("button"),Ei.type="button",Ei.className="part-sync",Ei.textContent=Ut("ui.sync"),Ei.setAttribute("aria-label",`${Ut("ui.sync")} ${_.label}`);let kl=M.has(_.id);Ei.hidden=!kl,Ei.setAttribute("aria-hidden",kl?"false":"true"),Ei.addEventListener("click",Ev=>{Ev.stopPropagation(),Ah(_.id,B.groupId,B.leafIds)}),E.set(_.id,Ei)}Ei?It.append(Fl,Bl,Am,Ei):It.append(Fl,Bl,Am),C.append(It);return}let le=ih(_),Te=document.createElement("div");Te.className="part-group",Te.dataset.group=_.id;let Re=document.createElement("div");Re.className="part-row part-group-row",Re.style.setProperty("--part-depth",String(U)),Re.setAttribute("role","button"),Re.tabIndex=0;let Ve=document.createElement("button");Ve.type="button",Ve.className="part-disclosure",Ve.setAttribute("aria-label",`Expand ${_.label}`),Ve.setAttribute("aria-expanded","false");let it=document.createElement("span");it.className="part-name",it.textContent=_.label;let St=ps(_.id,le)||1;St<=0&&(St=1);let{wrap:Qt,range:Vn}=oe(`${_.label} opacity`,ps(_.id,le)*100,()=>St,It=>{It>0&&(St=It),ds(le,It,_.id)});Vn.el.dataset.group=_.id,Vn.el.dataset.leaves=le.join(","),y.set(_.id,Vn),Qt.addEventListener("click",It=>It.stopPropagation()),Qt.addEventListener("pointerdown",It=>It.stopPropagation());let qt=document.createElement("div");qt.className="part-children",qt.hidden=!0;function kt(It){It?D.add(_.id):D.delete(_.id),qt.hidden=!It,Te.classList.toggle("is-expanded",It),Ve.setAttribute("aria-expanded",It?"true":"false"),Ve.setAttribute("aria-label",It?`Collapse ${_.label}`:`Expand ${_.label}`),requestAnimationFrame(()=>ae())}function ra(){kt(!D.has(_.id))}Ve.addEventListener("click",It=>{It.stopPropagation(),ra()}),Re.addEventListener("click",It=>{Qt.contains(It.target)||ra()}),Re.addEventListener("keydown",It=>{(It.key==="Enter"||It.key===" ")&&(It.preventDefault(),ra())}),Re.append(Ve,it,Qt),Te.append(Re,qt),C.append(Te);let Xh={groupId:_.id,leafIds:le};for(let It of _.children)Be(It,qt,U+1,Xh);kt(D.has(_.id))}function Ze(){let _=document.getElementById("parts");if(!_)return;_.replaceChildren(),w.clear(),y.clear(),E.clear();for(let U of p.keys())b.has(U)||(b.set(U,1),Ur(p.get(U)||[],1,{edgeMode:g})),S.has(U)||S.set(U,1);let C=Zx(p.keys(),r,Ut);h=C;for(let U of C)Be(U,_,0,null);requestAnimationFrame(()=>ae())}let Fe="iso",ke=null,Qe=!1;function at(_){let C=String(_||"").trim();if(!C)return null;for(let U of i)if(String(U?.id||"").trim()===C)return U;return null}function dt(){let _=Fe;_&&_.startsWith("scene:")?B_(_.slice(6)):B_(null)}function Ke(){return document.querySelectorAll("#cams button, #scenes button")}function xt(){Fe!=null&&(Fe=null,Ke().forEach(_=>{_.classList.remove("is-active")}),dt())}function Jt(){let _=document.getElementById("scenes");if(!_){let C=document.getElementById("cams");_=document.createElement("div"),_.id="scenes",_.className="scene-list",C?.insertAdjacentElement("afterend",_)}return _}function Ft(){let _=document.getElementById("cams");if(!_)return;_.replaceChildren();let C=Jt();C.replaceChildren();function U(B,le,Te,Re){let Ve=document.createElement("button");Ve.type="button",Ve.dataset.preset=le,Ve.textContent=Te,le===Fe&&Ve.classList.add("is-active"),Ve.addEventListener("click",()=>{Fe=le,Ke().forEach(it=>{it.classList.toggle("is-active",it.dataset.preset===le)}),Re(),dt()}),B.append(Ve)}for(let[B,le]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])U(_,B,Ut(le),()=>fs(B));for(let B of i){let le=String(B?.id||"").trim();if(!le)continue;let Te=Ut(`scene.${le}`);U(C,`scene:${le}`,Te,()=>kr(B))}C.hidden=C.childElementCount===0}function Bt(_=ye){return _.copy(te.target).sub(V.position).normalize()}function cn(_){let C=Math.hypot(_.x,_.z),U=(Math.atan2(_.x,_.z)*180/Math.PI+360)%360,B=Math.atan2(_.y,C)*180/Math.PI,le=Math.abs(B).toFixed(0),Te=B>=0?"\u2191":"\u2193";return`${U.toFixed(0)}\xB0 / ${le}\xB0${Te}`}function Ye(){return T.some(_=>!_.locked)}function tn(){return T.filter(_=>_.locked)}function yt(){Ye()||!(tn().length===0||ge)||T.push({id:Z++,normal:new I(0,0,1),t:0,locked:!1,label:Ut("ui.cut")})}function ur(_){let C=document.getElementById("cuts");if(!C)return;let U=C.querySelector(`[data-cut-id="${_.id}"]`);if(!U){bn();return}let B=U.querySelector(".cut-label");if(B&&(B.textContent=_.locked?_.label:Ut("ui.cut")),_.locked&&!U.querySelector(".cut-remove")){let le=document.createElement("button");le.type="button",le.className="cut-remove",le.setAttribute("aria-label",Ut("ui.removeSection")),le.textContent="\xD7",le.addEventListener("click",()=>_t(_.id)),U.append(le)}}function un(_){_.locked||(Bt(_.normal),_.locked=!0,_.label=cn(_.normal),ge=!1,$t(),ur(_))}function hr(){tn().length!==0&&(Ye()||(ge=!0,!fe&&(yt(),bn())))}function ki(){ge&&(Ye()||tn().length!==0&&(yt(),bn()))}function Mi(_,C){let U=T.find(B=>B.id===_);if(U){if(U.locked||un(U),U.t=Math.min(1,Math.max(0,Number(C))),U.anchor=null,fe){Gt();return}$t()}}function _t(_){let C=T.findIndex(U=>U.id===_);C<0||(T.splice(C,1),tn().length===0?(ge=!1,Ye()||yt()):ge&&!Ye()&&yt(),$t(),bn(),N?.refreshPartialHeight())}function rn(_){if(ue(),Ce.isEmpty())return{near:-1,far:1};let C=Ce.min,U=Ce.max,B=1/0,le=-1/0;for(let Ve=0;Ve<2;Ve++)for(let it=0;it<2;it++)for(let St=0;St<2;St++){P.set(Ve?U.x:C.x,it?U.y:C.y,St?U.z:C.z);let Qt=P.dot(_);Qt<B&&(B=Qt),Qt>le&&(le=Qt)}let Re=Math.max(le-B,1e-6)*.02;return{near:B-Re,far:le+Re}}function Yn(_){if(_.anchor)return new yn().setFromNormalAndCoplanarPoint(_.normal,_.anchor);let{near:C,far:U}=rn(_.normal),B=C+(U-C)*_.t;return Le.copy(_.normal).multiplyScalar(B),new yn().setFromNormalAndCoplanarPoint(_.normal,Le)}function Gt(){let _=gs();return K&&(K.traverse(C=>{if(!C.isMesh||!C.material||kn(C)||sh(C))return;let U=Array.isArray(C.material)?C.material:[C.material];for(let B of U){if(!B)continue;let le=B.clippingPlanes?B.clippingPlanes.length:0;B.clippingPlanes=_,B.clipIntersection=!1,le!==_.length&&(B.needsUpdate=!0)}}),mp(K,_)),_}function $t(){let _=Gt();K&&(Ep(p,_),g!==Us?cr():mp(K,_))}function bn(){let _=document.getElementById("cuts");if(_){_.replaceChildren();for(let C of T){let U=document.createElement("div");U.className="cut-row",U.dataset.cutId=String(C.id);let B=document.createElement("span");B.className="cut-label",B.textContent=C.locked?C.label:Ut("ui.cut");let le=()=>{fe&&(fe=!1,$t(),ki())},Te=oh({min:0,max:1,step:.001,value:C.t,ariaLabel:C.locked?`Section ${C.label}`:"Section cut",onScrubStart:()=>{fe=!0,C.locked||un(C)},onScrubEnd:le,onInput:Re=>Mi(C.id,Re),onChange:Re=>{Mi(C.id,Re),le()}});if(U.append(B,Te.el),C.locked){let Re=document.createElement("button");Re.type="button",Re.className="cut-remove",Re.setAttribute("aria-label",Ut("ui.removeSection")),Re.textContent="\xD7",Re.addEventListener("click",()=>_t(C.id)),U.append(Re)}_.append(U)}N?.refreshPartialHeight()}}let zr=!1,Rh=new I,Ch=new I,sm=!1;n.addEventListener("pointerdown",()=>{zr=!0},{capture:!0});let om=()=>{zr=!1};window.addEventListener("pointerup",om,{capture:!0}),window.addEventListener("pointercancel",om,{capture:!0}),te.addEventListener("start",()=>{xt(),zr=!0}),te.addEventListener("change",()=>{Pe()}),te.addEventListener("end",()=>{zr=!1,!pe&&hr()});let Si=1,fr=0,dr=0,Ph=1,Ih=0,Lh=0,Dh=1,Nh=0,Oh=0,xs=0,k_=280;function z_(){let _=Math.max(1,n.clientWidth),C=Math.max(1,n.clientHeight);if(!N)return{zoom:1,offX:0,offY:0,w:_,h:C};let{bottom:U,right:B}=N.getSafeInsets();if(U<=0&&B<=0)return{zoom:1,offX:0,offY:0,w:_,h:C};let le=Math.max(1,_-B),Te=Math.max(1,C-U),Re=Math.min(le/_,Te/C),Ve=B/2,it=U/2;return{zoom:Re,offX:Ve,offY:it,w:_,h:C}}function am(_,C){li(()=>{Q=!0,Math.abs(fr)>.05||Math.abs(dr)>.05||Math.abs(Si-1)>.001?(V.zoom=Ne*Si,V.setViewOffset(_,C,fr,dr,_,C)):(V.clearViewOffset(),V.zoom=Ne,Si=1,fr=0,dr=0),V.updateProjectionMatrix(),Q=!1})}function lm(_=!0){let{zoom:C,offX:U,offY:B,w:le,h:Te}=z_();if(Ph=C,Ih=U,Lh=B,!_){Si=C,fr=U,dr=B,xs=0,am(le,Te);return}Dh=Si,Nh=fr,Oh=dr,xs=performance.now()}function H_(_){if(!xs)return;let C=Math.min(1,(_-xs)/k_),U=1-(1-C)**3;Si=Dh+(Ph-Dh)*U,fr=Nh+(Ih-Nh)*U,dr=Oh+(Lh-Oh)*U;let B=Math.max(1,n.clientWidth),le=Math.max(1,n.clientHeight);am(B,le),C>=1&&(xs=0)}function Al(){let _=Math.max(1,n.clientWidth),C=Math.max(1,n.clientHeight);k.setSize(_,C,!1),H==="perspective"?W():he(),lm(!1);let U=Tl();kx(K,U.x,U.y)}Al(),window.addEventListener("resize",Al),N?.onDetentChange(()=>{lm(!0)});let Zn=document.getElementById("ar"),Mn=document.getElementById("measure"),ta=!1,Rl=()=>Ut("ui.measure");function Uh(){let _=document.getElementById("locale");if(_){_.replaceChildren();for(let[C,U]of[["cs","CS"],["en","EN"]]){let B=document.createElement("button");B.type="button",B.dataset.locale=C,B.textContent=U,C===ah()&&B.classList.add("is-active"),B.addEventListener("click",()=>{by(C)}),_.append(B)}}}function V_(){Pp(document),Zn&&!ta&&(Zn.textContent=Ut("ui.ar")),Mn&&(Mn.textContent=Rl()),qs(),$s(),me.relocalize();try{X(),de(),Ft(),Bi(),Ze(),bn(),Uh(),Sm()}catch(_){console.error("relocalizeUi",_);try{Uh()}catch{}}N?.refreshPartialHeight()}Cp(()=>V_());function G_(){Zn&&(Zn.hidden=!1,ta||(Zn.textContent=Ut("ui.ar")))}function W_(){Mn&&(Mn.hidden=!1,Mn.textContent=Rl())}let Ws=document.getElementById("drawing"),Hr=document.getElementById("labels"),Xs=!0;function qs(){Ws&&(Ws.hidden=!1,Ws.disabled=!ke||Cl,Ws.textContent=Ut("ui.drawing"))}function $s(){if(!Hr)return;let _=!!ke;Hr.hidden=!_,Hr.disabled=!_,Hr.setAttribute("aria-pressed",Xs?"true":"false"),Hr.classList.toggle("is-active",_&&Xs),Hr.textContent=Ut("ui.labels")}function X_(){try{let _=new URLSearchParams(window.location.search).get("m");if(_&&_.trim())return _.trim()}catch{}return"model"}function q_(){let C=1,U=1.35;for(let B=0;B<6;B+=1){me.update();let le=me.glyphBoundsNdc();if(!le)return;let Te=Math.max(-1+.04-le.minX,le.maxX-(1-.04),-1+.04-le.minY,le.maxY-(1-.04),0);if(Te<.012||C>=U-.01)return;let Re=Math.min(U/C,Math.max(1.05,1+Te*1.6));C*=Re,V.isOrthographicCamera?(re.left*=Re,re.right*=Re,re.top*=Re,re.bottom*=Re,re.updateProjectionMatrix()):(ye.copy(V.position).sub(te.target).multiplyScalar(Re),V.position.copy(te.target).add(ye),nn())}}function cm(){xs=0,Si=1,fr=0,dr=0,Ph=1,Ih=0,Lh=0,V.clearViewOffset(),V.zoom=Ne,V.updateProjectionMatrix()}let Cl=!1;async function um(){if(Cl||!K||!ke)return null;Cl=!0,qs(),Qe=!0;let _=ke,C=g,U=f.background,B=k.getPixelRatio(),le=n.style.width,Te=n.style.height,Re=N?.getDetent?.()??null,Ve=wi?.isActive()??!1,it=me.isVisible();try{Ve&&wi?.setActive(!1),me.setVisible(!0),N?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,k.setPixelRatio(1),Al(),cm(),g=ml,cr(),f.background=new Xe(16777215),me.setInk("plate"),kr(_),cm(),q_(),me.update(),q.render(f,V,K,pm,{quality:"high"});let{png:St,pdf:Qt}=await U_(n),Vn=`${X_()}_${String(_.id||"scene")}`;return{png:St,pdf:Qt,stem:Vn}}finally{n.style.width=le,n.style.height=Te,k.setPixelRatio(B),g=C,f.background=U,me.setInk("viewer"),me.setVisible(it),Re&&N?.setDetent(Re),Al(),cr(),_&&kr(_),Ve&&wi?.setActive(!0),Qe=!1,Cl=!1,qs(),$s(),requestAnimationFrame(Ul)}}window.blueprintCaptureDrawing=async()=>{let _=await um();return _?{png:_.png,pdf:_.pdf,stem:_.stem}:null},window.blueprintSetView=(_={})=>{if(!K||!_)return!1;let C=_.projection==="ortho"?"ortho":"perspective",U=Number.isFinite(Number(_.hFovDeg))?Number(_.hFovDeg):ee;return C==="perspective"&&H==="ortho"&&De(U),C==="perspective"&&ot(U,{reframe:!1}),li(()=>{Q=!0;let B=new I(0,1,0);if(Array.isArray(_.up)&&_.up.length>=3&&(B.set(Number(_.up[0])||0,Number(_.up[1])||0,Number(_.up[2])||0),B.lengthSq()>1e-12?B.normalize():B.set(0,1,0)),xe.up.copy(B),re.up.copy(B),V.up.copy(B),Array.isArray(_.target)&&te.target.set(Number(_.target[0])||0,Number(_.target[1])||0,Number(_.target[2])||0),Array.isArray(_.position)&&V.position.set(Number(_.position[0])||0,Number(_.position[1])||0,Number(_.position[2])||0),V.lookAt(te.target),C==="ortho"){let le=V.position.distanceTo(te.target),Te=L(U,F());z(le,Te),Ne=1,H!=="ortho"&&(Me(re),H="ortho"),$(),Hn()}ue(),nn(),te.update(),Q=!1}),sn=!0,!0},Hr&&Hr.addEventListener("click",()=>{Xs=!Xs,me.setVisible(Xs),$s()}),Ws&&Ws.addEventListener("click",()=>{(async()=>{let _=await um();_&&(im(_.png,`${_.stem}.png`),im(_.pdf,`${_.stem}.pdf`))})()});let wi=null;f&&(wi=Wy({scene:f,canvas:n,getCamera:()=>V,controls:te,getRoot:()=>K,getClipPlanes:()=>gs(),onLiveLength:_=>{Mn&&(_?(Mn.textContent=_,Mn.classList.add("is-live")):(Mn.textContent=Rl(),Mn.classList.remove("is-live")))},onActiveChange:_=>{sn=!0,Mn&&(Mn.classList.toggle("is-active",_),Mn.setAttribute("aria-pressed",_?"true":"false"),_||(Mn.textContent=Rl(),Mn.classList.remove("is-live")))}})),Mn&&Mn.addEventListener("click",()=>{wi&&wi.setActive(!wi.isActive())}),Ie=()=>!!wi?.isActive();function hm(){if(!K)return null;K.updateWorldMatrix(!0,!0);let _=tn().map(le=>Yn(le)),C=new Et;if(C.name="ARContent",K.traverse(le=>{if(!le.isMesh||!le.visible||kn(le))return;let Te=hy(le,_);Te&&C.add(Te)}),!C.children.length)return null;C.updateMatrixWorld(!0);let U=Tp(C),B=new Et;return B.name="ARExport",B.add(C),gy(C,U),B.userData.arPlacement=U,B}async function fm(){if(ta||!K)return;ta=!0;let _=Zn?.textContent||"AR";Zn&&(Zn.disabled=!0,Zn.textContent="\u2026");try{let C=hm();if(!C)throw new Error("Nothing visible to export. Show at least one part.");let B=await new $u().parseAsync(C,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),le=new Blob([B],{type:"model/vnd.usdz+zip"}),Te=URL.createObjectURL(le),Re=document.createElement("a");Re.rel="ar",Re.href=Te,Re.download="view.usdz";let Ve=document.createElement("img");Ve.alt="AR",Re.appendChild(Ve),document.body.appendChild(Re),Re.click(),Re.remove(),setTimeout(()=>URL.revokeObjectURL(Te),6e4)}catch(C){ce(String(C?.message||C))}finally{ta=!1,Zn&&(Zn.disabled=!1,Zn.textContent=_)}}Zn&&Zn.addEventListener("click",()=>{fm()});let dm={scene:f,get camera(){return V},controls:te,parts:p,partOpacity:b,cuts:T,scenes:i,setPartOpacity:Gs,setCameraPreset:fs,applyScene:kr,setHFov:ot,toggleFovIso:Ct,get projection(){return H},get hFovDeg(){return ee},setCutT:Mi,removeCut:_t,frameIso:Vs,openArQuickLook:fm,buildArExportScene:hm,getPeelQuality:()=>ia};window.BlueprintsViewer=dm;function pm(){for(let _ of b.values())if(_<1-1e-4)return!0;return!1}function mm(){for(let[_,C]of p){let U=b.get(_)??1;Ur(C,U,{edgeMode:g})}}let gm=!1,sn=!0,pr=null,Pl=E_(a),Fh=new ii,Bh=new Ge,Il=w_({index:a,visibility:Pl,t:Ut,openSheet(){let _=window.matchMedia("(min-width: 768px)").matches;N?.setDetent(_?"open":"partial")},onFrame:(_,C)=>{C?.move?Q_(_):J_(_)},onVisibility:()=>tv(),actionsFor:()=>[],liveLines:_=>{let C=je?.lastKnown(_.globalId);return C?d_(C,Ut):[]}});function Ll(_){let C=_;for(;C;){let U=C.userData?.bpElementKey||Fi(C.name||"").element;if(U){for(let B of Object.values(a.elements))if(B.id===U)return B}C=C.parent}return null}function xm(_){return _?l.get(_)||[]:[]}function ci(_){if(!_)return[];let C=xm(_.id);if(C.length)return C;let U=[];for(let B of us(a,_.globalId)){let le=a.elements[B];le&&le!==_&&U.push(...xm(le.id))}return U}function Ys(_){let C=new Nt,U=new I;for(let B of _){let le=B.geometry;if(!le)continue;le.boundingBox||le.computeBoundingBox();let Te=le.boundingBox;if(Te){B.updateWorldMatrix(!0,!1);for(let Re of[Te.min.x,Te.max.x])for(let Ve of[Te.min.y,Te.max.y])for(let it of[Te.min.z,Te.max.z])U.set(Re,Ve,it).applyMatrix4(B.matrixWorld),C.expandByPoint(U)}}return C}let $_=480,zi=null;function Y_(_){let C=Math.min(1,Math.max(0,_));return C<.5?4*C*C*C:1-(-2*C+2)**3/2}function Z_(_){let C=_.getSize(P),U=Math.max(C.x,C.y,C.z,.2),B=_.getCenter(new I),le=V.position.clone().sub(te.target);le.lengthSq()<1e-8?le.set(.75,.55,.75):le.normalize();let Te;if(V.isOrthographicCamera)Te=Math.max(V.position.distanceTo(te.target),U*1.4);else{let Re=(V.fov||45)*Math.PI/180;Te=Math.max(U*.62/Math.max(Math.tan(Re/2),.001),U*1.25)}return{center:B,position:B.clone().addScaledVector(le,Te),span:U}}function K_(_){zi={t0:performance.now(),fromPos:V.position.clone(),toPos:_.position,fromTarget:te.target.clone(),toTarget:_.center,span:_.span},sn=!0}function j_(_){if(!zi)return;let C=Math.min(1,(_-zi.t0)/$_),U=Y_(C);V.position.lerpVectors(zi.fromPos,zi.toPos,U),te.target.lerpVectors(zi.fromTarget,zi.toTarget,U),V.isOrthographicCamera&&_e(zi.span*.62,zi.span*.62),pe=!0,te.update(),ue(),nn(),sn=!0,C>=1&&(zi=null,requestAnimationFrame(()=>{pe=!1}))}function J_(_){let C=ci(a.elements[_]);C.length&&ym(C),sn=!0}function Q_(_){let C=a.elements[_],U=ci(C);if(!U.length)return;let B=Ys(U);B.isEmpty()||(K_(Z_(B)),ym(U),sn=!0)}function ym(_){pr&&_m();let C=[];for(let U of _){if(!U.isMesh||!U.material)continue;let B=Array.isArray(U.material)?U.material:[U.material],le=B.map(Te=>{let Re=Te.clone();return Re.emissive?(Re.emissive.setHex(16756768),Re.emissiveIntensity=0):Re.color&&(Re.userData.bpPulseBase=Re.color.getHex()),C.push(Re),Re});U.userData.bpPulseMaterial=B,U.material=le.length===1?le[0]:le}pr={meshes:_,clones:C,t0:performance.now()}}function _m(){if(pr){for(let _ of pr.meshes){let C=_.userData.bpPulseMaterial;C&&(_.material=C.length===1?C[0]:C),delete _.userData.bpPulseMaterial}for(let _ of pr.clones)_.dispose?.();pr=null}}function ev(_){if(!pr)return;let C=(_-pr.t0)/900;if(C>=1){_m(),sn=!0;return}let U=Math.sin(Math.min(C,1)*Math.PI);for(let B of pr.clones)B.emissive?B.emissiveIntensity=.85*U:B.color&&B.userData.bpPulseBase!=null&&B.color.setHex(B.userData.bpPulseBase).offsetHSL(.08,.2,.18*U);sn=!0}function tv(){let _=new Set;for(let C of Object.values(a.elements))Pl.isHidden(C.globalId)&&C.id&&_.add(C.id);for(let[C,U]of l){let B=_.has(C);for(let le of U){le.userData.bpIfcHidden=B;for(let Te of le.children||[])(Te?.userData?.isEdgeOverlay||Te?.userData?.isSectionCap)&&(Te.visible=!B)}}for(let C of We.bindings){let U=Fi(C.host?.name||"").element,B=!!(U&&_.has(U));C.host&&(C.host.userData.bpIfcHidden=B)}for(let[C,U]of p)Ur(U,b.get(C)??1,{edgeMode:g});sn=!0}function nv(_,C){let B=(Array.isArray(_.material)?_.material:[_.material]).map(le=>{if(!le)return le;if(le.userData.bpOwned)return C(le);let Te=le.clone();return Te.userData.bpOwned=!0,C(Te)});_.material=B.length===1?B[0]:B}function Dl(_,C){let U="restore"in C&&C.restore,B=!U&&!!C.on;He.set(_.globalId,B),U?ft.delete(_.globalId):ft.set(_.globalId,C);let le=U?1:Math.min(Math.max(C.level??1,0),1),Te=new Xe(U?0:C.color);B&&Te.lerp(new Xe(gh),.35*(1-le));for(let Re of ci(_))nv(Re,Ve=>(Ve.color&&(Ve.userData.bpLightBase==null&&(Ve.userData.bpLightBase=Ve.color.getHex()),U?Ve.color.setHex(Ve.userData.bpLightBase):Ve.color.copy(Te)),Ve.emissive&&(B?(Ve.emissive.copy(Te),Ve.emissiveIntensity=.3+.35*le):(Ve.emissive.setHex(0),Ve.emissiveIntensity=0)),Ve));sn=!0}function iv(_){let C=!He.get(_.globalId);Dl(_,C?vt:ht)}function rv(){for(let[_,C]of[...ft]){let U=a.elements[_];U&&Dl(U,C)}}function Nl(_){_?.ok||(console.warn("Home command failed",_),Wh=`${Ut("home.failed")}${_?.status?` (${_.status})`:""}${_?.error?`: ${_.error}`:""}`,na(),window.setTimeout(()=>{Wh="",na()},4e3))}function sv(_){if(cv(_),bt(_)?.deviceType!=="ColorTemperatureLight"){iv(_);return}je.command(_.globalId,{type:"toggle"}).then(Nl)}function ov(_,C){let U=ci(_);if(!C?.point||!U.length)return{dy:1,side:-1};let le=Ys(U).getCenter(new I),Te=new I().setFromMatrixColumn(V.matrixWorld,0),Re=C.point.clone().sub(le);return{dy:Re.y,side:Re.dot(Te)}}let vm=new Map;function av(_){let C=vm.get(_);return C||(C=Object.values(a.elements).filter(U=>U.type===_),vm.set(_,C)),C}function lv(_,C){let U=C?.camera||V,B=new I().setFromMatrixColumn(U.matrixWorld,0),le=[];for(let Te of av(_)){if(Pl.isHidden(Te.globalId))continue;let Re=ci(Te).filter(qt=>{if(!zs(qt))return!1;for(let kt=qt;kt;kt=kt.parent)if(!kt.visible)return!1;return!0});if(_==="IfcWindow"){let qt=new Set(qe.operableMeshes(Te.id,ci(Te)));for(let kt=Re.length-1;kt>=0;kt--)qt.has(Re[kt])||Re.splice(kt,1)}if(!Re.length)continue;let Ve=Ys(Re);if(Ve.isEmpty())continue;let it=new Set(Re),St=qt=>{for(let kt=qt;kt;kt=kt.parent)if(it.has(kt))return!0;return Ll(qt)===Te},Qt=Re[0],Vn=_==="IfcSwitchingDevice"?Ry(Ve,Ml(Te),B).map(qt=>qt.center):[Ve.getCenter(new I)];for(let qt of Vn)le.push({element:Te,center:qt,group:Te.globalId,hit:{object:Qt,point:qt},owns:St})}return le}let kh=new Map;function zh(_,C,U=!0){let B=ci(_);if(!B.length)return;let le=Ys(B),Te=le.getCenter(new I),Re=le.getSize(new I),Ve=C.position==="down"?-1:1;Te.y+=Ve*Re.y/4;let it=Ml(_);if(it.length>1){let St=new I().setFromMatrixColumn(V.matrixWorld,0);if(St.y=0,St.lengthSq()>1e-9){St.normalize();let Qt=C.rocker===it[0]?-1:1;Te.addScaledVector(St,Qt*Math.max(Re.x,Re.z)/4)}}Oe.showFeedback({worldPos:Te,kind:"switch",direction:C.position,haptic:U})}function cv(_){let C=ci(_);C.length&&Oe.showFeedback({worldPos:Ys(C).getCenter(new I),kind:"light"})}function uv(_,C){if(!_?.host||C.from===C.to)return;let U=new Nt().setFromObject(_.host);if(U.isEmpty())return;let B=U.getCenter(new I),le=C.to>C.from;if(_.sections){Oe.showFeedback({worldPos:B,kind:"lift",direction:le?"up":"down"});return}if(_.panels){let it=_.pivot.parent;if(!it)return;it.updateWorldMatrix(!0,!1),_.panels.forEach((St,Qt)=>{let Vn=new Nt().setFromObject(St.pivot);if(Vn.isEmpty())return;let qt=St.slideLocal.clone().transformDirection(it.matrixWorld);le||qt.negate();let kt=Vn.getCenter(new I);Oe.showFeedback({worldPos:kt,kind:"slide",worldDir:qt,haptic:Qt===0})});return}if(_.slideLocal){let it=_.pivot.parent;if(!it)return;it.updateWorldMatrix(!0,!1);let St=_.slideLocal.clone().transformDirection(it.matrixWorld);le||St.negate(),Oe.showFeedback({worldPos:B,kind:"slide",worldDir:St});return}let Te=_.pivot.getWorldPosition(new I),Re=mh(C.to,_.sign)-mh(C.from,_.sign),Ve=r_(B.toArray(),Te.toArray(),Re);Oe.showFeedback({worldPos:B,kind:"hinge",hinge:Te,to:Ve})}function hv(_,C){let U=ci(_),B=qe.operableMeshes(_.id,U),le=B[0];if(!le?.parent)return;let Te=qe.slideOf(_.id),Re;Te?(Re=new I(Te[0],Te[1],Te[2]).normalize(),C||Re.negate()):(le.parent.updateWorldMatrix(!0,!1),Re=new I(C?1:-1,0,0).transformDirection(le.parent.matrixWorld)),Oe.showFeedback({worldPos:Ys(B).getCenter(new I),kind:"slide",worldDir:Re})}function fv(_,C){return _?qe.acceptsHit(_.id,ci(_),C):!1}function bm(_,C){zh(_,C),Hh(_),kh.set(_.globalId,performance.now()),je.press(_.globalId,C).then(Nl)}function dv(_,C){let U=bt(_),B=f_(_,ov(_,C));if(U?.deviceType!=="GenericSwitch"||!je.simulation()){zh(_,B),Hh(_);return}bm(_,B)}function pv(_){if(bt(_)?.deviceType!=="GenericSwitch"||!je.simulation())return null;let U=Ml(_),B=[];return U.forEach((le,Te)=>{for(let Re of["up","down"]){let Ve=Ut(Re==="up"?"home.up":"home.down");B.push({id:`switch-${le}-${Re}`,labelKey:Re==="up"?"home.up":"home.down",label:U.length>1?`${Te+1} ${Ve}`:Ve,run:()=>bm(_,{rocker:le,position:Re,kind:"short"})})}}),B}function mv(_){let C=bt(_);if(C?.deviceType!=="WindowCovering")return;let U=C.state?.windowCovering?.targetPositionLiftPercent100ths,B=U!=null&&U<5e3;je.command(_.globalId,{type:B?"coverClose":"coverOpen"}).then(Nl)}function gv(_){return bt(_)?.deviceType!=="WindowCovering"?null:[["coverOpen","ui.open"],["coverClose","ui.close"],["coverStop","home.stop"]].map(([U,B])=>({id:U,labelKey:B,run:()=>je.command(_.globalId,{type:U}).then(Nl)}))}function Hh(_){for(let C of ci(_)){if(C.userData.bpPressing)continue;C.userData.bpPressing=!0;let U=C.position.y;C.position.y=U-.004,window.setTimeout(()=>{C.position.y=U,C.userData.bpPressing=!1,sn=!0},160)}sn=!0}function xv(_){let C=!Je.get(_.globalId);qe.slide(_.id,ci(_),C,performance.now())&&(hv(_,C),Je.set(_.globalId,C),sn=!0)}function yv(_){if(Ie())return;let C=V;if(!C||!K)return;let U=n.getBoundingClientRect(),B=U.width||n.clientWidth||1,le=U.height||n.clientHeight||1;Bh.x=(_.clientX-U.left)/B*2-1,Bh.y=-((_.clientY-U.top)/le)*2+1,Fh.setFromCamera(Bh,C);let Te=Fh.intersectObject(K,!0).filter(kt=>zs(kt.object)),Re=K;for(;Re.parent;)Re=Re.parent;let Ve={raycaster:Fh,now:performance.now(),camera:C,root:Re,tap:{x:_.clientX-U.left,y:_.clientY-U.top},size:{w:B,h:le}},it=We.taps.resolve(Te,Ve,kt=>zs(kt.object));if(it&&(it.kind==="direct"||it.kind==="extended")&&it.hit?.object){let kt=it.hit.object,ra=Array.isArray(it.claim?.actions)?it.claim.actions.slice():[],Xh=kt.userData?.bpPart||Fi(kt.name||"").part;Il.openPopover(Ll(kt),Xh,ra,_.clientX,_.clientY);return}let St=Te[0];if(!St){Il.closePopover();return}let Qt=Ll(St.object),Vn=St.object.userData?.bpPart||Fi(St.object.name||"").part,qt=it?.kind==="legacy"&&Array.isArray(it.claim?.actions)?it.claim.actions.slice():[];Il.openPopover(Qt,Vn,qt,_.clientX,_.clientY)}c=yv;let Vh=u_({search:typeof location<"u"?location.search:"",storage:typeof localStorage<"u"?localStorage:null}),Mm=c_(a),Gh=Vh.mode,Wh="",mr=null;function _v(_){let C=a.elements[_.globalId];C&&_.deviceType==="ColorTemperatureLight"&&Dl(C,zp(_))}function vv(){for(let _ of[...He.keys()]){let C=a.elements[_];C&&Dl(C,{restore:!0})}}function na(){if(!mr)return;let _=je?je.status():"off",C=_==="live"?je.simulation()?"home.statusLive":"home.statusLiveNoSim":_==="connecting"?"home.statusConnecting":_==="unreachable"?"home.statusUnreachable":"home.statusOff";mr.textContent=Wh||Ut(C),mr.dataset.status=_,mr.title=_==="off"?"":Vh.baseUrl}function Sm(){if(!Mm)return;let _=document.getElementById("section-home");if(!_){let B=document.getElementById("section-locale");if(!B?.parentNode)return;_=document.createElement("section"),_.className="sheet-section",_.id="section-home",B.parentNode.insertBefore(_,B)}_.replaceChildren();let C=document.createElement("h2");C.className="sheet-title",C.textContent=Ut("home.title");let U=document.createElement("div");U.className="seg",U.id="home-mode",U.setAttribute("role","group"),U.setAttribute("aria-label",Ut("home.title"));for(let[B,le]of[["live","home.live"],["off","home.off"]]){let Te=document.createElement("button");Te.type="button",Te.dataset.homeMode=B,Te.textContent=Ut(le),B===Gh&&Te.classList.add("is-active"),Te.addEventListener("click",()=>bv(B)),U.append(Te)}mr=document.createElement("p"),mr.className="home-status",mr.setAttribute("aria-live","polite"),mr.style.cssText="margin:0.5rem 0 0;font-size:0.76rem;line-height:1.35;color:var(--fg-secondary)",_.append(C,U,mr),na()}function bv(_){Gh=_,h_(typeof localStorage<"u"?localStorage:null,_),document.querySelectorAll("#home-mode button").forEach(C=>{C.classList.toggle("is-active",C.dataset.homeMode===_)}),je&&(_==="live"?je.start():(je.stop(),vv()),na())}Mm&&(je=p_({baseUrl:Vh.baseUrl,onStatus:()=>{na(),sn=!0},onDevice:_=>_v(_),onSwitch:_=>{if(_.event!=="initialPress")return;let C=a.elements[_.globalId],U=performance.now()-(kh.get(_.globalId)??-1/0)<3e3;kh.delete(_.globalId),C&&!U&&((_.position==="up"||_.position==="down")&&zh(C,{rocker:_.rocker,position:_.position},!1),Hh(C))}}),Sm(),Gh==="live"&&je.start(),window.blueprintsHome=je),Cp(()=>Il.refresh());let wm=null,Em=null,ia="fast",Tm=null,Ol=!1;n.addEventListener("pointermove",()=>{wi?.isActive()&&(sn=!0)}),n.addEventListener("pointerup",()=>{wi?.isActive()&&(sn=!0)});function Mv(){let _=V.view;return[V.position.x,V.position.y,V.position.z,V.quaternion.x,V.quaternion.y,V.quaternion.z,V.quaternion.w,V.zoom,V.near,V.far,V.fov||0,V.left,V.right,V.top,V.bottom,te.target.x,te.target.y,te.target.z,n.width,n.height,_&&_.enabled?1:0,_?_.offsetX:0,_?_.offsetY:0,_?_.fullWidth:0,_?_.fullHeight:0,H==="ortho"?1:0]}function Sv(){let _=Mv(),C=wm,U=!C||C.length!==_.length;if(!U&&C){for(let B=0;B<_.length;B++)if(_[B]!==C[B]){U=!0;break}}return U&&(wm=_),U}function wv(){let _=[x,g,ah(),Xs?"1":"0",String(d)],C=f?.background;C&&C.isColor&&_.push(C.getHexString());for(let[B,le]of b)_.push(B,Number(le).toFixed(3));for(let B of T)_.push(String(B.id),B.locked?"1":"0",Number(B.t).toFixed(4));let U=Pl.hiddenIds();return _.push(U.length?U.slice().sort().join(","):"-"),_.join("|")}function Ul(){if(Qe)return;let _=performance.now();We.step(_)&&(sn=!0),qe.step(_)&&(sn=!0),ev(_),j_(_),H_(_),te.update(),K&&nn(),sm||(Rh.copy(V.position),Ch.copy(te.target),sm=!0);let C=V.position.distanceToSquared(Rh)>1e-8||te.target.distanceToSquared(Ch)>1e-8;Rh.copy(V.position),Ch.copy(te.target);let U=wv(),B=U!==Em,le=Sv();if(B&&(Ol=!0),ia=!zr&&!C&&!B&&!fe&&!xs&&!Ol?"high":"fast",!sn&&!B&&!le&&!(ia!==Tm)&&!Ol){requestAnimationFrame(Ul);return}sn=!1,Em=U,Tm=ia,B||(Ol=!1),wi?.update(),me.update();let Ve=q.render(f,V,K,pm,{quality:ia,batchKey:U,deferPrime:B||fe});gm&&!Ve&&mm(),gm=Ve,requestAnimationFrame(Ul)}return Ul(),dm}return Iv(TC);})();
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
